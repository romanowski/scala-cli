#!/usr/bin/env bash
# Builds a Scala CLI native image, like `cli[].base-image.nativeImage` in build.mill
# (mill-native-image plugin + CliNativeImage in project/settings/package.mill):
#   1. rewrites the class path with scala3-graal-processor (CoursierCacheProcessor), as
#      Mill's `cli.nativeImageClassPath` does;
#   2. runs GraalVM's native-image with the embedded trust store and the given options.
#
# Usage: native_image.sh NATIVE_IMAGE PROCESSOR_JAR TRUST_STORE CLASSPATH_FILE MAIN_CLASS OUTPUT [OPTION...]
set -euo pipefail

root="$PWD"
native_image="$root/$1"
processor_jar="$root/$2"
trust_store="$root/$3"
classpath_file="$root/$4"
main_class="$5"
output="$root/$6"
shift 6

java="$(dirname "$native_image")/java"
work="$(mktemp -d "${TMPDIR:-/tmp}/scala-cli-native-image.XXXXXX")"
trap 'rm -rf "$work"' EXIT

classpath="$(sed "s|^|$root/|" "$classpath_file" | paste -sd: -)"
processed_classpath="$("$java" -jar "$processor_jar" "$work/native-cp" "$classpath")"

# Static libraries linked into the image (-H:CLibraryPath): empty for the default
# image on Linux / macOS, as with Mill.
mkdir -p "$work/native-libs"

"$native_image" \
  "$@" \
  "-H:CLibraryPath=$work/native-libs" \
  "-J-Djavax.net.ssl.trustStore=$trust_store" \
  "-J-Djavax.net.ssl.trustStorePassword=changeit" \
  -o "$output" \
  -cp "$processed_classpath" \
  "$main_class"
