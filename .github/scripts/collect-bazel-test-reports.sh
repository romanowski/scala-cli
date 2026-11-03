#!/usr/bin/env bash
# Copies the JUnit XML reports and test logs Bazel wrote (bazel-testlogs/<package>/<target>/[shard_*/]test.xml)
# to a plain directory ($1), one file per target / shard, for upload as a CI artifact.
set -euo pipefail

dest="$1"
mkdir -p "$dest"
startup=()
# same output root as the Windows jobs in bazel.yml
case "$(uname -s)" in MINGW* | MSYS* | CYGWIN*) startup=(--output_user_root=C:/b) ;; esac
testlogs="$(bazel ${startup[@]+"${startup[@]}"} info bazel-testlogs 2>/dev/null)"
[[ -d "$testlogs" ]] || { echo "No Bazel test logs found"; exit 0; }

# JUnit reports, plus the test logs (Bazel's console output only has a summary)
find -L "$testlogs" \( -name test.xml -o -name test.log \) | while read -r file; do
  rel="${file#"$testlogs"/}"
  name="$(echo "$(dirname "$rel")" | tr '/' '_')"
  case "$file" in
    *.xml) cp "$file" "$dest/$name.xml" ;;
    *) cp "$file" "$dest/$name.log" ;;
  esac
done
ls "$dest"
