"""Shared macros for the Scala CLI Bazel build.

These keep the per-module BUILD.bazel files close to the Mill module
definitions in build.mill (one macro call per Mill module).
"""

load("@rules_scala//scala:scala.bzl", "scala_binary", "scala_junit_test", "scala_library", "scala_macro_library")
load("@rules_shell//shell:sh_binary.bzl", "sh_binary")
load("@rules_shell//shell:sh_test.bzl", "sh_test")
load("//bazel/constants:constants.bzl", _scala_cli_constants = "scala_cli_constants")
load("//bazel/constants:values.bzl", "DEFAULT_JAVA")

# ScalaCliModule.scalacOptions / javaOutputVersionOptions in project/settings/package.mill.
# `-java-output-version` is set per Scala version in the toolchain (//bazel:BUILD.bazel).
SCALACOPTS = ["-feature", "-deprecation"]

# ScalaCliModule.javacOptions (Java.defaultJava). `-g:source,lines` is javac's default
# debug info, which Mill uses; Bazel's Java toolchain passes `-g` (adds local variable tables).
JAVACOPTS = ["--release", str(DEFAULT_JAVA), "-g:source,lines"]

# rules_scala discovers JUnit tests by class name prefix / suffix, then keeps
# concrete classes annotated with @RunWith (inherited by every munit suite).
# Like Mill's munit discovery, consider every class: test class names such as
# RunTestsDefault or CompileTests213 have no common suffix.
ALL_CLASSES = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".elems()

# Generated Constants.scala files (bazel/constants).
scala_cli_constants = _scala_cli_constants

# ScalaCliTests.forkArgs
TEST_JVM_FLAGS = ["-Xmx512m", "-Xms128m"]

def scala_cli_library(name, srcs = None, deps = [], scalacopts = [], javacopts = [], resources = None, resource_strip_prefix = None, macro = False, **kwargs):
    """A Mill `ScalaCliModule` main source set (src/main/{scala,java,resources}).

    Args:
      name: target name.
      srcs: defaults to src/main/scala and src/main/java.
      deps: dependencies.
      scalacopts: extra scalac options.
      javacopts: extra javac options.
      resources: defaults to src/main/resources.
      resource_strip_prefix: defaults to <package>/src/main/resources.
      macro: the module defines Scala 3 macros used by other modules. Their
        expansion runs this module's code, so dependents need the full jar
        (scala_macro_library) rather than an ijar.
      **kwargs: passed to scala_library.
    """
    if srcs == None:
        srcs = native.glob(["src/main/scala/**/*.scala", "src/main/java/**/*.java"], allow_empty = True)
    if resources == None:
        resources = native.glob(["src/main/resources/**"], allow_empty = True)
    if resource_strip_prefix == None and resources:
        resource_strip_prefix = native.package_name() + "/src/main/resources"
    rule = scala_macro_library if macro else scala_library
    rule(
        name = name,
        srcs = srcs,
        deps = deps,
        scalacopts = SCALACOPTS + scalacopts,
        javacopts = JAVACOPTS + javacopts,
        resources = resources,
        resource_strip_prefix = resource_strip_prefix,
        **kwargs
    )

def scala_cli_binary(name, main_class, deps, **kwargs):
    """A runnable Mill module (`mainClass`); `bazel run` it like `./mill -i <module>.run`."""
    scala_binary(
        name = name,
        main_class = main_class,
        deps = deps,
        **kwargs
    )

def scala_cli_test(
        name,
        deps = [],
        srcs = None,
        runtime_deps = [],
        data = [],
        jvm_flags = [],
        env = {},
        resources = None,
        resource_strip_prefix = None,
        visibility = None,
        **kwargs):
    """A Mill `ScalaCliTests` module (munit, run through its JUnit 4 runner).

    Creates `<name>-lib` (the compiled test sources, usable as a dependency of
    other test modules, like Mill's `moduleDeps = Seq(x.test)`) and `<name>`,
    the test target running the suites found in `<name>-lib`.

    Args:
      name: target name.
      deps: dependencies (munit and expecty are added).
      srcs: defaults to src/test/{scala,java}.
      runtime_deps: runtime-only dependencies.
      data: runfiles.
      jvm_flags: extra JVM flags.
      env: extra environment variables.
      resources: defaults to src/test/resources.
      resource_strip_prefix: defaults to <package>/src/test/resources.
      visibility: visibility of `<name>-lib`.
      **kwargs: passed to scala_junit_test (size, timeout, tags, shard_count...).
    """
    if srcs == None:
        srcs = native.glob(["src/test/scala/**/*.scala", "src/test/java/**/*.java"], allow_empty = True)
    if resources == None:
        resources = native.glob(["src/test/resources/**"], allow_empty = True)
    if resource_strip_prefix == None and resources:
        resource_strip_prefix = native.package_name() + "/src/test/resources"
    lib = name + "-lib"
    scala_library(
        name = lib,
        testonly = True,
        srcs = srcs,
        deps = deps + [
            "@maven//:org_scalameta_munit_3",
            "@maven//:com_eed3si9n_expecty_expecty_3",
        ],
        runtime_deps = runtime_deps,
        scalacopts = SCALACOPTS,
        javacopts = JAVACOPTS,
        resources = resources,
        resource_strip_prefix = resource_strip_prefix,
        visibility = visibility,
    )
    scala_junit_test(
        name = name,
        tests_from = [":" + lib],
        runtime_deps = [":" + lib],
        data = data,
        env = env,
        jvm_flags = TEST_JVM_FLAGS + jvm_flags,
        suffixes = ALL_CLASSES,
        **kwargs
    )

def scala_cli_integration_test(name, lib, launcher, kind, shard_count = 1, tags = [], **kwargs):
    """`./mill integration.test.<kind>`: runs the integration suites in `lib` against `launcher`.

    Args:
      name: target name.
      lib: the compiled integration tests (a `scala_cli_test` `-lib` target).
      launcher: the Scala CLI launcher under test (a runnable JAR for JVM kinds,
        an executable for native kinds), or None to require a prebuilt one, passed
        with --test_env=SCALA_CLI_IT_FORCED_LAUNCHER=/abs/path.
      kind: value of `-Dtest.scala-cli.kind` (jvm, jvmBootstrapped, native, ...).
      shard_count: number of test shards.
      tags: extra tags.
      **kwargs: passed to sh_test.
    """
    runner = name + "-runner"
    scala_junit_test(
        name = runner,
        tests_from = [lib],
        runtime_deps = [lib],
        # test.scala-cli.path must be absolute: integration_test.sh passes it.
        jvm_flags = TEST_JVM_FLAGS + ["-Dtest.scala-cli.kind=" + kind],
        suffixes = ALL_CLASSES,
        tags = ["manual"],
        testonly = True,
    )
    sh_test(
        name = name,
        srcs = ["//bazel/tools:integration_test.sh"],
        args = [
            "$(rootpath :%s)" % runner,
            "$(rootpath %s)" % launcher if launcher else "-",
        ],
        # cs: Constants.cs of the integration tests (fetching JVMs...)
        data = [":" + runner, "//:scala-cli.sh", "//bazel/tools:cs"] + ([launcher] if launcher else []),
        shard_count = shard_count,
        # Runs the CLI as a subprocess: downloads compilers / JVMs, starts Bloop,
        # sometimes Docker; not sandbox-friendly. Each run / shard has its own Scala CLI
        # home (integration_test.sh), so shards can run in parallel:
        # --test_sharding_strategy=forced=<n> (or shard_count).
        tags = ["requires-network", "no-sandbox"] + tags,
        **kwargs
    )

def workspace_binary(name, binary, **kwargs):
    """`bazel run :<name>` runs `binary` from the workspace root (like `./mill <module>.run`).

    Pass `env` here (Mill's `forkEnv`): the `env` of `binary` itself only applies when
    it's run directly.
    """
    sh_binary(
        name = name,
        srcs = ["//bazel/tools:run_in_workspace.sh"],
        args = ["$(rootpath %s)" % binary],
        data = [binary],
        **kwargs
    )
