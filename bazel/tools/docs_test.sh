#!/usr/bin/env bash
# Runs the docs tests (a scala_junit_test given as $1) with the environment
# `docs-tests[].test.forkEnv` sets in build.mill. The repository files the
# tests read (website/docs, examples, gifs...) are runfiles, so the runfiles
# root stands in for the workspace root.
set -euo pipefail

runner="$PWD/$1"
launcher="$PWD/$2"
shift 2

base="${TEST_TMPDIR}/working-dir"
mkdir -p "$base"
export MILL_WORKSPACE_ROOT="$PWD"
export SCLICHECK_SCALA_CLI="$launcher"
export SCALA_CLI_CONFIG="$base/config/config.json"
export SCALA_CLI_EXAMPLES="$PWD/examples"
export SCALA_CLI_GIF_SCENARIOS="$PWD/gifs/scenarios"
export SCALA_CLI_WEBSITE_IMG="$PWD/website/static/img"
export SCALA_CLI_GIF_RENDERER_DOCKER_DIR="$PWD/gifs"
export SCALA_CLI_SVG_RENDERER_DOCKER_DIR="$PWD/gifs/svg_render"
export JAVA_RUNFILES="${TEST_SRCDIR}"

exec "$runner" "$@"
