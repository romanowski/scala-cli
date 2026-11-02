# Bazel build (experimental)

Scala CLI can also be built with [Bazel](https://bazel.build) 9 (bzlmod,
[rules_scala](https://github.com/bazel-contrib/rules_scala)). The Bazel build
lives **alongside** Mill: sources are not moved, every module gets a
`BUILD.bazel` next to its `src/` directory, and Mill stays the build of record
(releases, native images, required CI checks).

Use [Bazelisk](https://github.com/bazelbuild/bazelisk) (`brew install bazelisk`,
`npm i -g @bazel/bazelisk`, ...); it picks the version in `.bazelversion`.

## Commands

| Mill (DEV.md / AGENTS.md / CI)                                       | Bazel                                                                                   |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| `./mill -i __.compile`                                               | `bazel build //...`                                                                     |
| `./mill -i scala …args…` / `./mill -i 'cli[]'.run …args…`            | `bazel run //modules/cli:scala-cli -- …args…`                                           |
| `./mill -i 'cli[]'.debug 5050 …args…`                                | `bazel run //modules/cli:scala-cli -- --wrapper_script_flag=--debug=5050 …args…`        |
| `./mill -i unitTests`                                                | `bazel test //:unit_tests`                                                              |
| `./mill 'build-module[].test'`                                       | `bazel test //modules/build:test`                                                       |
| `./mill 'build-module[].test' 'scala.build.tests.BuildTestsScalac.*'` | `bazel test //modules/build:test --test_filter=scala.build.tests.BuildTestsScalac`      |
| `./mill integration.test.jvm`                                        | `bazel test //modules/integration:jvm`                                                  |
| `./mill integration.test.jvm 'scala.cli.integration.RunTestsDefault.*'` | `bazel test //modules/integration:jvm --test_filter=scala.cli.integration.RunTestsDefault` |
| `./mill -i integration.test.jvmBootstrapped`                         | `bazel test //modules/integration:jvmBootstrapped`                                      |
| `SCALA_CLI_IT_GROUP=2 ./mill -i integration.test.jvm`                | `bazel test //modules/integration:jvm --test_env=SCALA_CLI_IT_GROUP=2`                  |
| `./mill -i 'docs-tests[]'.test`                                      | `bazel test //modules/docs-tests:test`                                                  |
| `./mill -i 'generate-reference-doc[]'.run [--check]`                 | `bazel run //modules/generate-reference-doc [-- --check]`                               |
| `./mill -i copyJvmLauncher --directory artifacts/`                   | `bazel build //modules/cli:scala-cli-standalone-jar` → `bazel-bin/modules/cli/launchers/standalone/scala-cli.jar`      |
| `./mill -i copyJvmBootstrappedLauncher --directory artifacts/`       | `bazel build //modules/cli:scala-cli-bootstrapped-jar` → `bazel-bin/modules/cli/launchers/bootstrapped/scala-cli.jar`                           |
| `./mill -i --define scala.version.internal=X …`                      | `bazel … --repo_env=SCALA_VERSION=X` (X must be listed in `scala_config` in MODULE.bazel) |
| `./mill -i clean`                                                    | not needed (outputs are content-addressed); `bazel clean` only as a last resort          |

Tests that spawn JVMs or Bloop use `JAVA_HOME` (Mill pins Temurin 17 for them).
Point it at a JDK 17, for example in a git-ignored `user.bazelrc`:

```
test --test_env=JAVA_HOME=/path/to/jdk-17
test --test_env=SCALA_CLI_TESTS_HOST_JAVA_HOME=/path/to/jdk-17
```

Without it, tests run with no `JAVA_HOME` and Scala CLI picks a JVM on its own; with a
newer JDK some tests compiling old Scala versions fail, as they would with Mill.
`SCALA_CLI_TESTS_HOST_JAVA_HOME` is the JDK `cli.tests.CompromisedCaTests` checks: it must
distrust the compromised eMudhra CAs (a recent Zulu / Temurin 25, as on CI); with an
unpatched JDK that test fails under Mill too.

The suites using Bloop (`//modules/build:test`, `//modules/cli:test` and the integration
tests) run one at a time (`exclusive`), in a single JVM: they share the global Bloop daemon,
and Mill also runs them sequentially on CI.

## Layout

| Path                         | Purpose                                                                                   |
|------------------------------|-------------------------------------------------------------------------------------------|
| `MODULE.bazel`               | Rulesets, Scala versions, Maven dependencies (mirrors `project/deps/package.mill`), tools |
| `maven_install.json`         | Lock file of the Maven dependencies                                                       |
| `.bazelrc`                   | JDKs (tools on 21, binaries/tests on 17), stamping, CI config                             |
| `bazel/defs.bzl`             | Macros mirroring Mill module traits (`scala_cli_library`, `scala_cli_test`, ...)          |
| `bazel/BUILD.bazel`          | Scala toolchains (transitive class path, like Mill) and the JUnit 4.13 testing toolchain |
| `bazel/constants/`           | Templates of the generated `Constants.scala` files                                        |
| `bazel/workspace_status.sh`  | Version / GitHub repo values stamped into the constants (mirrors `finalPublishVersion`)   |
| `bazel/local-repo/`          | The `local-repo.zip` resource embedding runner / test-runner / java-test-runner           |
| `bazel/tools/`               | `cs` binary, local repo generator, test and `bazel run` wrappers                          |
| `modules/*/BUILD.bazel`      | One file per Mill module                                                                  |

## CI: shadow build

Mill stays the build of record: release and every required check run on Mill.
`.github/workflows/bazel.yml` runs the Bazel equivalents **in parallel, as a shadow**:
its jobs use `continue-on-error`, and nothing depends on them, so Bazel failures never
block CI or releases.

| Mill job (`jvm.yml`, `misc.yml`)              | Bazel shadow job (`bazel.yml`)                 |
|-----------------------------------------------|------------------------------------------------|
| `jvm / unit-tests`                            | `bazel / unit-tests`                           |
| `jvm / jvm-tests-{default,scala-2-13,...}`    | `bazel / jvm-tests-{default,scala-2-13,...}`   |
| `jvm / jvm-bootstrapped-tests-default`        | `bazel / jvm-bootstrapped-tests-default`       |
| `misc / docs-tests`                           | `bazel / docs-tests`                           |
| `misc / reference-doc`                        | `bazel / reference-doc`                        |

Paired jobs share their job id and the names of equivalent steps (`Cross compile
everything`, `Unit tests`, `JVM integration tests`, ...). The `build-comparison` job
(`ci.yml`) then uses `.github/scripts/compare-build-systems.py` to compare, for each pair:

* job and shared-step durations (from the GitHub API),
* test counts and failures (Mill's `test-results-<job>` vs Bazel's
  `bazel-test-results-<job>` JUnit reports),

and writes them to the run summary plus a `build-comparison` JSON artifact (kept 90
days, one record per run) to follow the migration over time. Bazel times depend on
the state of the disk / repository caches restored by `setup-bazel`.

## Keeping Bazel and Mill in sync

* **Dependencies**: change `project/deps/package.mill` *and* `MODULE.bazel`, then
  `REPIN=1 bazel run @maven//:pin`.
* **Generated constants**: `bazel/constants/*.scala.tpl` hold the values Mill
  computes. After a version bump, run `bazel/check-mill-parity.sh`: it diffs
  every Bazel-generated `Constants.scala` against Mill's.

## Differences from Mill

* Everything in the `cli` graph is built with the default Scala version
  (`Scala.defaultInternal`), like `cli[]` in Mill. `runner` and `test-runner` are
  also built with the legacy LTS (3.3.9) for the local repository. Other
  cross-builds (`config`, `specification-level` for every Scala 3 version) are
  only needed for publishing, which stays on Mill.
* The local repository `version` entry is derived from the stub JARs' content
  instead of the VCS state, so a changed runner never reuses a stale extracted repository.
* Files Mill downloads from `scala-cli/default-workflow@main` are pinned to a commit.
* JVM launchers: both are self-contained JARs (the deploy JAR minus `.tasty` /
  `.semanticdb` files, like `cliBootstrapped`), whereas Mill's standalone launcher
  embeds only the project JARs and fetches the rest from the coursier cache.
* Launcher JAR contents vs Mill's `cliBootstrapped` JAR (compared class by class):
  all classes are bit-identical except (a) Scala classes whose `TASTY` attribute (the
  UUID of the stripped .tasty file) differs, because Mill's TASTy embeds its own sandbox
  path (`out/mill-no-daemon/<hash>/sandbox/...`) for inlined library code, and (b) the
  Scala Native classes Mill rewrites with `scala3-graal-processor` (SafeLazyVals) for
  native images, a step not migrated yet. To get there, the Bazel build pins
  commons-lang3 like Mill's per-module resolution, puts scala-asm before scala-compiler
  2.13 on the class path, and compiles Java without `-g` / `-parameters` (//bazel:java_toolchain).
* Test discovery: rules_scala runs every concrete class annotated with JUnit's
  `@RunWith` (inherited by munit suites), like Mill's munit discovery.

## Not migrated yet (still Mill only)

* Native images (`nativeImage`, static / mostly-static), and the native,
  native-static and docker integration tests.
* `build-macros[_].test.testNegativeCompilation` (uses `scala-cli` from `PATH`).
* `__.fix` (scalafix), `__.checkNativeImageConfFormat`, `ci.checkScalaVersions`.
* Cross-builds for other Scala versions / release candidates, `docJar`.
* Publishing and the `ci.*` release automation.
