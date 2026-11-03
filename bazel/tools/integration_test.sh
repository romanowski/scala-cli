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

# The tests run the launcher with the `java` of the PATH: use the test JDK (JAVA_HOME),
# as Mill's test runs do, not whatever comes first in the caller's PATH (a newer JDK
# prints sun.misc.Unsafe warnings some tests check for).
if [[ -n "${JAVA_HOME:-}" ]]; then
  export PATH="$JAVA_HOME/bin:$PATH"
fi

# Isolation, so that test runs / shards can run in parallel: each one gets its own
# Scala CLI home (Bloop daemon, config, local repository...), which the CLI under test
# inherits (SCALA_CLI_HOME, read by scala.build.Directories). The path stays short:
# the Bloop daemon listens on a Unix domain socket under it (~104 characters max).
# The coursier cache stays shared (coursier locks it).
cli_home="$(mktemp -d "/tmp/scli-it.XXXXXX")"
export SCALA_CLI_HOME="$cli_home"

stop_bloop() {
  # Bloop daemons started for this run have the daemon directory on their command line
  pkill -f -- "$cli_home" 2>/dev/null || true
  rm -rf "$cli_home"
}
trap stop_bloop EXIT

status=0
"$runner" "--jvm_flag=-Dtest.scala-cli.path=$launcher" "$@" || status=$?
exit "$status"
