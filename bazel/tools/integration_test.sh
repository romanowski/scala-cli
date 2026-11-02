#!/usr/bin/env bash
# Runs a Scala CLI integration test suite (a scala_junit_test given as $1) against
# the launcher given as $2, with the environment `integration.test.forkEnv` sets in
# build.mill. Paths must be absolute, hence this wrapper rather than `env` / `jvm_flags`.
set -euo pipefail

runner="$PWD/$1"
launcher="$PWD/$2"
shift 2

base="${TEST_TMPDIR}/working-dir"
mkdir -p "$base"
export SCALA_CLI_TMP="$base"
export SCALA_CLI_CONFIG="$base/config/config.json"
export SCALA_CLI_PRINT_STACK_TRACES=1
export SCALA_CLI_SHELL_LAUNCHER="$PWD/scala-cli.sh"
export JAVA_RUNFILES="${TEST_SRCDIR}"

exec "$runner" "--jvm_flag=-Dtest.scala-cli.path=$launcher" "$@"
