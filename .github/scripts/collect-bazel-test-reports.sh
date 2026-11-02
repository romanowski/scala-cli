#!/usr/bin/env bash
# Copies the JUnit XML reports Bazel wrote (bazel-testlogs/<package>/<target>/[shard_*/]test.xml)
# to a plain directory ($1), one file per target / shard, for upload as a CI artifact.
set -euo pipefail

dest="$1"
mkdir -p "$dest"
startup=()
# same output root as the Windows jobs in bazel.yml
case "$(uname -s)" in MINGW* | MSYS* | CYGWIN*) startup=(--output_user_root=C:/b) ;; esac
testlogs="$(bazel "${startup[@]}" info bazel-testlogs 2>/dev/null)"
[[ -d "$testlogs" ]] || { echo "No Bazel test logs found"; exit 0; }

find -L "$testlogs" -name test.xml | while read -r xml; do
  rel="${xml#"$testlogs"/}"
  cp "$xml" "$dest/$(echo "${rel%/test.xml}" | tr '/' '_').xml"
done
ls "$dest"
