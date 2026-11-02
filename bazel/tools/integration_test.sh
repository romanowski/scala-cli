#!/usr/bin/env bash
# Runs a Scala CLI integration test suite (a scala_junit_test given as $1) against
# the launcher given as $2, with the environment `integration.test.forkEnv` sets in
# build.mill. Paths must be absolute, hence this wrapper rather than `env` / `jvm_flags`.
set -euo pipefail

runner="$PWD/$1"
shift
# The launcher under test: built by Bazel ($2), or, like Mill's
# SCALA_CLI_IT_FORCED_LAUNCHER_DIRECTORY, a prebuilt one (e.g. a CI artifact) given
# with --test_env=SCALA_CLI_IT_FORCED_LAUNCHER=/abs/path (then $2 is "-").
if [[ "$1" == "-" ]]; then
  launcher="${SCALA_CLI_IT_FORCED_LAUNCHER:?SCALA_CLI_IT_FORCED_LAUNCHER not set}"
else
  launcher="$PWD/$1"
fi
shift

base="${TEST_TMPDIR}/working-dir"
mkdir -p "$base"
export SCALA_CLI_TMP="$base"
export SCALA_CLI_CONFIG="$base/config/config.json"
export SCALA_CLI_PRINT_STACK_TRACES=1
export SCALA_CLI_SHELL_LAUNCHER="$PWD/scala-cli.sh"
export JAVA_RUNFILES="${TEST_SRCDIR}"

exec "$runner" "--jvm_flag=-Dtest.scala-cli.path=$launcher" "$@"
