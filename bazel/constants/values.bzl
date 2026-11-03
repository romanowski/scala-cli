"""Values of the generated Constants.scala files (bazel/constants/*.scala.tpl), defined once.

Sources, in order of preference:
* the build itself: versions MODULE.bazel defines and uses (`BUILD_INFO`), the versions
  of the resolved Maven dependencies (`MAVEN_VERSIONS`, from maven_install.json), the
  Scala CLI version / GitHub repository (workspace status, see bazel/workspace_status.sh);
* otherwise, the values below. They mirror project/deps/package.mill and build.mill
  (Mill-only data such as the default sbt / Maven versions of `export`), and are
  checked against Mill by bazel/check-mill-parity.sh.

A template refers to a value as @@name@@ and decides the Scala quoting: "@@name@@" for
strings, @@name@@ for numbers, Seq(@@name@@) for sequences.
"""

load("@scala_cli_build_info//:info.bzl", "BUILD_INFO", "MAVEN_VERSIONS")

def maven_version(coordinates):
    """Version of `group:artifact` in the Maven resolution (maven_install.json)."""
    if coordinates not in MAVEN_VERSIONS:
        fail("%s is not in maven_install.json" % coordinates)
    return MAVEN_VERSIONS[coordinates]

def _prefix(version):
    return ".".join(version.split(".")[:2])

def _stamp(key):
    # filled from the workspace status by scala_cli_constants
    return "@@%s@@" % key

# --- Shared with BUILD files ----------------------------------------------------

ORGANIZATION = "org.virtuslab.scala-cli"

# Java (object Java in project/deps/package.mill)
MINIMUM_BLOOP_JAVA = 17
DEFAULT_JAVA = MINIMUM_BLOOP_JAVA
MINIMUM_JAVA_LAUNCHER_JAVA = 17
MINIMUM_SCALA38_JAVA = 17
MINIMUM_JAVA_TEST_RUNNER_JAVA = 8
MINIMUM_RUNNER_JAVA = 11
MINIMUM_INTERNAL_JAVA = 16
MINIMUM_JEP512_JAVA = 25
MINIMUM_JEP512_PREVIEW_JAVA = 21
MAIN_JAVA_VERSIONS = [8, 11, 17, 21, 25, 27]

def _distinct(items):
    out = []
    for i in items:
        if i not in out:
            out.append(i)
    return out

ALL_JAVA_VERSIONS = _distinct(MAIN_JAVA_VERSIONS + [
    MINIMUM_BLOOP_JAVA,
    MINIMUM_INTERNAL_JAVA,
    MINIMUM_RUNNER_JAVA,
    DEFAULT_JAVA,
    MINIMUM_INTERNAL_JAVA,
    MINIMUM_JAVA_LAUNCHER_JAVA,
])

# Resources of the CLI
LAUNCHER_TYPE_RESOURCE_PATH = "scala/cli/internal/launcher-type.txt"
DEFAULT_FILES_RESOURCE_PATH = "scala/cli/commands/publish"
LOCAL_REPO_RESOURCE_PATH = "local-repo.zip"

# Docker images (object Docker)
UBUNTU_IMAGE = "ubuntu:24.04"

# --- Scala versions (object Scala) ----------------------------------------------

SCALA3_NEXT = BUILD_INFO["scala3_next"]
SCALA3_LTS = BUILD_INFO["scala3_lts"]
SCALA3_LEGACY_LTS = BUILD_INFO["scala3_legacy_lts"]
SCALA3_NEXT_PREFIX = _prefix(SCALA3_NEXT)
SCALA3_LTS_PREFIX = _prefix(SCALA3_LTS)
SCALA3_LEGACY_LTS_PREFIX = _prefix(SCALA3_LEGACY_LTS)
SCALA212 = "2.12.21"
SCALA213 = "2.13.18"

SCALA_NATIVE = maven_version("org.scala-native:tools_3")  # Versions.scalaNative05
SCALA_NATIVE04 = "0.4.17"
TOOLKIT_VERSION = "0.9.2"
TYPELEVEL_TOOLKIT_VERSION = "0.2.0"
SBT2_VERSION = "2.0.10"
MAVEN_VERSION = "3.8.1"
MAVEN_SCALA_COMPILER_PLUGIN_VERSION = "4.9.10"
MAVEN_EXEC_PLUGIN_VERSION = "3.3.0"
GRAALVM = BUILD_INFO["graalvm"]
SLOTH = maven_version("org.virtuslab:sloth-core_3")
STAMPED_VERSION = _stamp("STABLE_SCALA_CLI_VERSION")

CONSTANTS = {
    # Scala CLI build (workspace status)
    "version": STAMPED_VERSION,
    "cliVersion": STAMPED_VERSION,
    "ghOrg": _stamp("STABLE_SCALA_CLI_GH_ORG"),
    "ghName": _stamp("STABLE_SCALA_CLI_GH_NAME"),

    # Scala
    "defaultScalaVersion": SCALA3_NEXT,  # Scala.defaultUser
    "defaultScala": SCALA3_NEXT,
    "scala3Next": SCALA3_NEXT,
    "scala3NextAnnounced": SCALA3_NEXT_PREFIX + ".0",
    "scala3NextPrefix": SCALA3_NEXT_PREFIX,
    "scala3NextRc": "3.10.1-RC2",
    "scala3NextRcVersion": "3.10.1-RC2",
    "scala3NextRcAnnounced": "3.10.0-RC3",
    "scala3Lts": SCALA3_LTS,
    "scala3LtsPrefix": SCALA3_LTS_PREFIX,
    "scala3LegacyLts": SCALA3_LEGACY_LTS,
    "scala3LegacyLtsPrefix": SCALA3_LEGACY_LTS_PREFIX,
    "scala3LtsPrefixes": _distinct([SCALA3_LEGACY_LTS_PREFIX, SCALA3_LTS_PREFIX]),
    "scala38Versions": sorted(["3.8.0", "3.8.0-RC1", "3.8.0-RC1-bin-20250901-ca400bd-NIGHTLY"]),
    "scala39Versions": sorted(["3.9.0", "3.9.0-RC1"]),
    "legacyScala3Versions": ["3.0.0", "3.0.1", "3.0.2", "3.1.0", "3.1.1", "3.1.2", "3.1.3", "3.2.0", "3.2.1", "3.2.2"],
    "defaultScala212Version": SCALA212,
    "defaultScala213Version": SCALA213,
    "scala212": SCALA212,
    "scala213": SCALA213,
    "scalaForkOrganization": "ch.epfl.lara",
    "scalaForkVersion": "3.10.1-RC1-bin-20260903-e1f9361-NIGHTLY",
    "scalaLegacyRunnerVersion": "3.7.4",

    # Java
    "defaultJavaVersion": DEFAULT_JAVA,
    "defaultJvmVersion": DEFAULT_JAVA,
    "signingCliJvmVersion": DEFAULT_JAVA,
    "minimumBloopJavaVersion": MINIMUM_BLOOP_JAVA,
    "bloopMinimumJvmVersion": MINIMUM_BLOOP_JAVA,
    "minimumLauncherJavaVersion": MINIMUM_JAVA_LAUNCHER_JAVA,
    "minimumInternalJavaVersion": MINIMUM_INTERNAL_JAVA,
    "minimumInternalJvmVersion": MINIMUM_INTERNAL_JAVA,
    "minimumRunnerJavaVersion": MINIMUM_RUNNER_JAVA,
    "minimumJavaTestRunnerJava": MINIMUM_JAVA_TEST_RUNNER_JAVA,
    "scala38MinJavaVersion": MINIMUM_SCALA38_JAVA,
    "jep512MinJavaVersion": MINIMUM_JEP512_JAVA,
    "jep512PreviewMinJavaVersion": MINIMUM_JEP512_PREVIEW_JAVA,
    "mainJavaVersions": sorted(MAIN_JAVA_VERSIONS),
    "allJavaVersions": sorted(ALL_JAVA_VERSIONS),

    # GraalVM
    "defaultGraalVMVersion": GRAALVM,
    "defaultGraalVMMacosX64Version": BUILD_INFO["graalvm_macos_x64"],
    "defaultGraalVMJavaVersion": GRAALVM.split(".")[0],

    # Scala.js / Scala Native
    "scalaJsVersion": maven_version("org.scala-js:scalajs-sbt-test-adapter_2.13"),  # Scala.scalaJs
    "scalaJsCliVersion": "1.22.0.3",
    "scalajsEnvJsdomNodejsVersion": maven_version("org.scala-js:scalajs-env-jsdom-nodejs_2.13"),
    "scalaNativeVersion": SCALA_NATIVE,
    "scalaNativeVersion05": SCALA_NATIVE,
    "scalaNativeVersion04": SCALA_NATIVE04,
    "maxScalaNativeForMillExport": SCALA_NATIVE,
    "toolkitMaxScalaNative": SCALA_NATIVE,
    "toolkiMaxScalaNative": SCALA_NATIVE,
    "typelevelToolkitMaxScalaNative": SCALA_NATIVE,
    "scalaPyMaxScalaNative": SCALA_NATIVE04,

    # Runner / test runners (published by this build)
    "runnerOrganization": ORGANIZATION,
    "runnerModuleName": "runner",
    "runnerVersion": STAMPED_VERSION,
    "runnerMainClass": "scala.cli.runner.Runner",
    "testRunnerOrganization": ORGANIZATION,
    "testRunnerModuleName": "test-runner",
    "testRunnerVersion": STAMPED_VERSION,
    "testRunnerMainClass": "scala.build.testrunner.DynamicTestRunner",
    "javaTestRunnerOrganization": ORGANIZATION,
    "javaTestRunnerModuleName": "java-test-runner",
    "javaTestRunnerVersion": STAMPED_VERSION,
    "javaTestRunnerMainClass": "scala.build.testrunner.JavaDynamicTestRunner",
    "runnerScala30LegacyVersion": "1.7.1",
    "runnerScala2LegacyVersion": "1.9.1",
    "runnerJava8LegacyVersion": "1.17.0",

    # Tools and libraries Scala CLI fetches
    "bloopVersion": maven_version("ch.epfl.scala:bloop-rifle_3"),
    "bspVersion": maven_version("ch.epfl.scala:bsp4j"),
    "pprintVersion": maven_version("com.lihaoyi:pprint_3"),
    "munitVersion": maven_version("org.scalameta:munit_3"),
    "jupiterInterfaceVersion": maven_version("com.github.sbt.junit:jupiter-interface"),
    "semanticDbPluginOrganization": "org.scalameta",
    "semanticDbPluginModuleName": "semanticdb-scalac",
    "semanticDbPluginVersion": maven_version("org.scalameta:semanticdb-shared_2.13"),  # Versions.scalaMeta
    "semanticDbJavacPluginOrganization": "com.sourcegraph",
    "semanticDbJavacPluginModuleName": "semanticdb-javac",
    "semanticDbJavacPluginVersion": "0.12.3",
    "jmhVersion": "1.37",
    "jmhOrg": "org.openjdk.jmh",
    "jmhCoreModule": "jmh-core",
    "jmhGeneratorBytecodeModule": "jmh-generator-bytecode",
    "scalafmtOrganization": "org.scalameta",
    "scalafmtName": "scalafmt-cli_2.13",
    "defaultScalafmtVersion": "3.11.5",
    "toolkitOrganization": "org.scala-lang",
    "toolkitName": "toolkit",
    "toolkitTestName": "toolkit-test",
    "toolkitVersion": TOOLKIT_VERSION,
    "toolkitDefaultVersion": TOOLKIT_VERSION,
    "toolkitVersionForNative05": TOOLKIT_VERSION,
    "toolkitVersionForNative04": "0.3.0",
    "typelevelOrganization": "org.typelevel",
    "typelevelToolkitOrganization": "org.typelevel",
    "typelevelToolkitVersion": TYPELEVEL_TOOLKIT_VERSION,
    "typelevelToolkitDefaultVersion": TYPELEVEL_TOOLKIT_VERSION,
    "scalaCliSigningOrganization": "org.virtuslab.scala-cli-signing",
    "scalaCliSigningName": "cli",
    "scalaCliSigningVersion": maven_version("org.virtuslab.scala-cli-signing:cli_3"),
    "javaClassNameOrganization": "org.virtuslab.scala-cli.java-class-name",
    "javaClassNameName": "java-class-name_3",
    "javaClassNameVersion": maven_version("org.virtuslab.scala-cli.java-class-name:java-class-name_3"),
    "pythonInterfaceOrg": "io.github.alexarchambault.python",
    "pythonInterfaceName": "interface",
    "pythonInterfaceVersion": maven_version("io.github.alexarchambault.python:interface"),
    "scalaPyVersion": "0.5.3",
    "giter8Organization": "org.foundweekends.giter8",
    "giter8Name": "giter8",
    "giter8Version": "0.18.0",
    "scalafixVersion": maven_version("ch.epfl.scala:scalafix-interfaces"),
    "slothVersion": SLOTH,
    "slothAgentOrganization": "org.virtuslab",
    "slothAgentModuleName": "sloth-agent",
    "slothAgentVersion": SLOTH,
    "coursierOrg": "io.get-coursier",
    "coursierCliModule": "coursier-cli",
    "coursierCliVersion": BUILD_INFO["coursier_cli"],

    # libsodium
    "libsodiumVersion": BUILD_INFO["libsodium"],
    "libsodiumjniVersion": maven_version("org.virtuslab.scala-cli:libsodiumjni"),
    "alpineLibsodiumVersion": BUILD_INFO["alpine_libsodium"],
    "condaLibsodiumVersion": "1.0.18",

    # Build tools of `export` / integration tests
    "millVersion": BUILD_INFO["mill"],  # BuildInfo.millVersion (.mill-version)
    "mill1Version": BUILD_INFO["mill"],
    "defaultMillVersion": BUILD_INFO["mill"],
    "mill012Version": "0.12.17",
    "sbtVersion": SBT2_VERSION,
    "defaultSbtVersion": SBT2_VERSION,
    "sbt2Version": SBT2_VERSION,
    "sbt1Version": "1.12.5",
    "mavenVersion": MAVEN_VERSION,
    "defaultMavenVersion": MAVEN_VERSION,
    "mavenScalaCompilerPluginVersion": MAVEN_SCALA_COMPILER_PLUGIN_VERSION,
    "defaultMavenScalaCompilerPluginVersion": MAVEN_SCALA_COMPILER_PLUGIN_VERSION,
    "mavenExecPluginVersion": MAVEN_EXEC_PLUGIN_VERSION,
    "defaultMavenExecPluginVersion": MAVEN_EXEC_PLUGIN_VERSION,
    "mavenAppArtifactId": "maven-app",
    "mavenAppGroupId": "com.example",
    "mavenAppVersion": "0.1-SNAPSHOT",

    # Docker images
    "alpineVersion": BUILD_INFO["alpine"],
    "dockerTestImage": UBUNTU_IMAGE,
    "dockerAlpineTestImage": "alpine:" + BUILD_INFO["alpine"],
    "dockerArchLinuxImage": "archlinux@sha256:b15db21228c7cd5fd3ab364a97193ba38abfad0e8b9593c15b71850b74738153",
    "authProxyTestImage": "bahamat/authenticated-proxy@sha256:568c759ac687f93d606866fbb397f39fe1350187b95e648376b971e9d7596e75",

    # Files and resources
    "workspaceDirName": ".scala-build",
    "projectFileName": "project.scala",
    "jvmPropertiesFileName": ".scala-jvmopts",
    "scalacArgumentsFileName": "scalac.args.txt",
    "maxScalacArgumentsCount": 5000,
    "launcherTypeResourcePath": LAUNCHER_TYPE_RESOURCE_PATH,
    "defaultFilesResourcePath": DEFAULT_FILES_RESOURCE_PATH,
    "localRepoResourcePath": LOCAL_REPO_RESOURCE_PATH,
}
