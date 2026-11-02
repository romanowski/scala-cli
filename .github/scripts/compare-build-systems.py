#!/usr/bin/env python3
"""Compares the Mill CI jobs with their Bazel shadow jobs (.github/workflows/bazel.yml).

Pairs every `bazel / <job>` job of the current workflow run with the Mill job of the
same id (`jvm / <job>`, `linux / <job>`, `macos / <job>`, `windows / <job>`, `misc / <job>`), then reports, per pair:
  * job durations, and durations of the steps both jobs share by name
    (e.g. "Unit tests", "JVM integration tests");
  * test counts (tests / failures+errors / skipped) from the JUnit XML reports,
    artifacts `test-results-<job>` (Mill) and `bazel-test-results-<job>` (Bazel).

Writes a Markdown summary (stdout) and a JSON record (--json) meant to be kept as an
artifact, so the comparison can be followed over time.

Usage: compare-build-systems.py JOBS_JSON REPORTS_DIR --json OUT.json
  JOBS_JSON:   output of `gh api repos/{repo}/actions/runs/{run}/attempts/{n}/jobs --paginate`
               (one or several concatenated JSON pages)
  REPORTS_DIR: directory with the downloaded test report artifacts, one subdirectory each
"""

import argparse
import json
import os
import sys
import xml.etree.ElementTree as ET
from datetime import datetime, timezone

BAZEL_PREFIX = "bazel / "
MILL_PREFIXES = ("jvm / ", "linux / ", "macos / ", "windows / ", "misc / ")


def parse_time(value):
    if not value:
        return None
    return datetime.fromisoformat(value.replace("Z", "+00:00"))


def duration(item):
    start, end = parse_time(item.get("started_at")), parse_time(item.get("completed_at"))
    if start is None or end is None:
        return None
    return max(0.0, (end - start).total_seconds())


def load_jobs(path):
    decoder = json.JSONDecoder()
    text = open(path, encoding="utf-8").read()
    jobs, idx = [], 0
    while idx < len(text):
        while idx < len(text) and text[idx].isspace():
            idx += 1
        if idx >= len(text):
            break
        page, idx = decoder.raw_decode(text, idx)
        jobs.extend(page.get("jobs", []))
    return jobs


def count_tests(directory):
    """Totals over every JUnit XML file under `directory` (None if there is none)."""
    if not os.path.isdir(directory):
        return None
    totals = {"tests": 0, "failed": 0, "skipped": 0}
    found = False
    for root, _, files in os.walk(directory):
        for name in files:
            if not name.endswith(".xml"):
                continue
            try:
                tree = ET.parse(os.path.join(root, name))
            except ET.ParseError:
                continue
            found = True
            for case in tree.iter("testcase"):
                totals["tests"] += 1
                if case.find("failure") is not None or case.find("error") is not None:
                    totals["failed"] += 1
                elif case.find("skipped") is not None:
                    totals["skipped"] += 1
    return totals if found else None


def mill_report_names(job_id):
    """Mill's report artifact names: test-results-<job id>, except for the native test
    jobs, which drop the `native-` prefix (e.g. test-results-linux-tests-default)."""
    names = [f"test-results-{job_id}"]
    if job_id.startswith("native-"):
        names.append(f"test-results-{job_id[len('native-'):]}")
    return names


def first_counts(reports_dir, names):
    for name in names:
        counts = count_tests(os.path.join(reports_dir, name))
        if counts is not None:
            return counts
    return None


def fmt_duration(seconds):
    if seconds is None:
        return "–"
    minutes, secs = divmod(int(round(seconds)), 60)
    return f"{minutes}m{secs:02d}s"


def fmt_ratio(mill, bazel):
    if not mill or bazel is None:
        return "–"
    return f"{bazel / mill:.2f}×"


def fmt_tests(counts):
    if counts is None:
        return "–"
    return f"{counts['tests']} / {counts['failed']} / {counts['skipped']}"


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("jobs_json")
    parser.add_argument("reports_dir")
    parser.add_argument("--json", dest="json_out", required=True)
    args = parser.parse_args()

    jobs = load_jobs(args.jobs_json)
    by_name = {job["name"]: job for job in jobs}

    pairs = []
    for name, bazel_job in sorted(by_name.items()):
        if not name.startswith(BAZEL_PREFIX):
            continue
        job_id = name[len(BAZEL_PREFIX):]
        mill_job = next((by_name[p + job_id] for p in MILL_PREFIXES if p + job_id in by_name), None)
        if mill_job is None:
            continue
        mill_steps = {s["name"]: duration(s) for s in mill_job.get("steps", [])}
        bazel_steps = {s["name"]: duration(s) for s in bazel_job.get("steps", [])}
        shared_steps = [
            {"step": s, "mill_seconds": mill_steps[s], "bazel_seconds": bazel_steps[s]}
            for s in bazel_steps
            if s in mill_steps and not s.startswith(("Run ", "Post ", "Set up job", "Complete job"))
            and s not in ("Log skip reason", "Upload test report", "Collect test reports")
        ]
        pairs.append({
            "job": job_id,
            "mill": {
                "conclusion": mill_job.get("conclusion"),
                "seconds": duration(mill_job),
                "tests": first_counts(args.reports_dir, mill_report_names(job_id)),
            },
            "bazel": {
                "conclusion": bazel_job.get("conclusion"),
                "seconds": duration(bazel_job),
                "tests": count_tests(os.path.join(args.reports_dir, f"bazel-test-results-{job_id}")),
            },
            "steps": shared_steps,
        })

    record = {
        "run_id": os.environ.get("GITHUB_RUN_ID"),
        "run_attempt": os.environ.get("GITHUB_RUN_ATTEMPT"),
        "sha": os.environ.get("GITHUB_SHA"),
        "ref": os.environ.get("GITHUB_REF"),
        "event": os.environ.get("GITHUB_EVENT_NAME"),
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "pairs": pairs,
    }
    with open(args.json_out, "w", encoding="utf-8") as out:
        json.dump(record, out, indent=2)

    print("## Mill vs Bazel (shadow)\n")
    if not pairs:
        print("No Mill / Bazel job pairs ran in this workflow run.")
        return 0
    print("| Job | Mill | Bazel | Bazel/Mill | Mill tests (total / failed / skipped) | Bazel tests | Mill result | Bazel result |")
    print("|---|---|---|---|---|---|---|---|")
    for p in pairs:
        m, b = p["mill"], p["bazel"]
        print(f"| `{p['job']}` | {fmt_duration(m['seconds'])} | {fmt_duration(b['seconds'])} | "
              f"{fmt_ratio(m['seconds'], b['seconds'])} | {fmt_tests(m['tests'])} | {fmt_tests(b['tests'])} | "
              f"{m['conclusion']} | {b['conclusion']} |")
    print("\n### Shared steps\n")
    print("| Job | Step | Mill | Bazel | Bazel/Mill |")
    print("|---|---|---|---|---|")
    for p in pairs:
        for s in p["steps"]:
            print(f"| `{p['job']}` | {s['step']} | {fmt_duration(s['mill_seconds'])} | "
                  f"{fmt_duration(s['bazel_seconds'])} | {fmt_ratio(s['mill_seconds'], s['bazel_seconds'])} |")
    print("\nBazel durations depend on cache state (disk / repository cache); "
          "the JSON artifact keeps one record per run for trends.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
