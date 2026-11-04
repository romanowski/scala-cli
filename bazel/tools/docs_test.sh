#!/usr/bin/env bash
# Runs the docs tests (a scala_junit_test given as $1) with the environment
# `docs-tests[].test.forkEnv` sets in build.mill. The repository files the
# tests read (website/docs, examples, gifs...) are runfiles, so the runfiles
# root stands in for the workspace root.
set -euo pipefail

runner="$PWD/$1"
# the standalone launcher (a self-contained file, copied into Docker images by GifTests)
launcher="$(readlink -f "$PWD/$2" 2>/dev/null || echo "$PWD/$2")"
shift 2

base="${TEST_TMPDIR}/working-dir"
mkdir -p "$base"
export MILL_WORKSPACE_ROOT="$PWD"
export SCLICHECK_SCALA_CLI="$launcher"
export SCALA_CLI_CONFIG="$base/config/config.json"
export SCALA_CLI_EXAMPLES="$PWD/examples"
export SCALA_CLI_GIF_SCENARIOS="$PWD/gifs/scenarios"
export SCALA_CLI_WEBSITE_IMG="$PWD/website/static/img"
# Docker build contexts: Docker doesn't follow the symlinks of the runfiles tree, so copy
# them with symlinks resolved.
gifs="$base/gifs"
cp -RL "$PWD/gifs" "$gifs"
export SCALA_CLI_GIF_RENDERER_DOCKER_DIR="$gifs"
export SCALA_CLI_SVG_RENDERER_DOCKER_DIR="$gifs/svg_render"
export JAVA_RUNFILES="${TEST_SRCDIR}"

exec "$runner" "$@"
