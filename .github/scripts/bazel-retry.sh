#!/usr/bin/env bash
# Runs a bazel command, retrying it (up to 3 attempts) when it failed while fetching
# external repositories, e.g. on a transient "Unknown host: github.com", which Bazel
# doesn't retry itself. Build and test failures are not retried. Usage: bazel-retry.sh ARGS...
set -uo pipefail

log="$(mktemp)"
trap 'rm -f "$log"' EXIT
for attempt in 1 2 3; do
  bazel "$@" 2>&1 | tee "$log"
  status=${PIPESTATUS[0]}
  if [[ $status -eq 0 ]]; then exit 0; fi
  if ! grep -qE "Error downloading|Unknown host|failed to fetch|An error occurred during the fetch of repository" "$log"; then
    exit "$status"
  fi
  echo "::warning::bazel failed while fetching external dependencies (attempt $attempt), retrying"
  sleep $((attempt * 30))
done
exit "$status"
