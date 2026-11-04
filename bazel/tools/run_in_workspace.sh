#!/usr/bin/env bash
# `bazel run` wrapper: runs the binary given as $1 from the workspace root,
# like Mill's `.run` (tools such as generate-reference-doc write relative to it).
set -euo pipefail

runfiles="${RUNFILES_DIR:-$(cd "$0.runfiles" && pwd)}"
bin="$runfiles/_main/$1"
shift
cd "${BUILD_WORKSPACE_DIRECTORY:?run this target with bazel run}"
exec "$bin" "$@"
