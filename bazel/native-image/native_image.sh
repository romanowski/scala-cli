#!/usr/bin/env bash
# Builds a Scala CLI native image, like `cli[].base-image.nativeImage` in build.mill
# (mill-native-image plugin + CliNativeImage in project/settings/package.mill):
#   1. rewrites the class path with scala3-graal-processor (CoursierCacheProcessor), as
#      Mill's `cli.nativeImageClassPath` does;
#   2. runs GraalVM's native-image with the embedded trust store, the static libraries
#      and the given options (on Windows, from a Visual Studio x64 environment, like
#      the mill-native-image plugin).
#
# Usage: native_image.sh NATIVE_IMAGE PROCESSOR_JAR TRUST_STORE CLASSPATH_FILE MAIN_CLASS OUTPUT
#          [--static-lib FILE NAME]... -- [OPTION...]
set -euo pipefail

is_windows=false
case "$(uname -s)" in MINGW* | MSYS* | CYGWIN*) is_windows=true ;; esac

# Paths as the JVM / native-image see them (C:/... on Windows).
native_path() {
  if $is_windows; then cygpath -m "$1"; else echo "$1"; fi
}

root="$PWD"
native_image="$root/$1"
processor_jar="$(native_path "$root/$2")"
trust_store="$(native_path "$root/$3")"
classpath_file="$root/$4"
main_class="$5"
output="$(native_path "$root/$6")"
shift 6

work="$(mktemp -d "${TMPDIR:-/tmp}/scala-cli-native-image.XXXXXX")"
trap 'rm -rf "$work"' EXIT

# Static libraries linked into the image (-H:CLibraryPath): none for the default image
# on Linux / macOS, sodium / sodiumjni / csjniutils on Windows.
mkdir -p "$work/native-libs"
while [[ $# -gt 0 && "$1" != "--" ]]; do
  [[ "$1" == "--static-lib" ]] || { echo "Unexpected argument: $1" >&2; exit 1; }
  cp "$root/$2" "$work/native-libs/$3"
  shift 3
done
shift # --

if $is_windows; then
  sep=";"
  java="$(dirname "$native_image")/java.exe"
else
  sep=":"
  java="$(dirname "$native_image")/java"
fi

classpath="$(while read -r jar; do native_path "$root/$jar"; done < "$classpath_file" | paste -sd "$sep" -)"
processed_classpath="$("$java" -jar "$processor_jar" "$(native_path "$work/native-cp")" "$classpath" | tr -d '\r')"

args=(
  "$@"
  "-H:CLibraryPath=$(native_path "$work/native-libs")"
  "-J-Djavax.net.ssl.trustStore=$trust_store"
  "-J-Djavax.net.ssl.trustStorePassword=changeit"
  -o "${output%.exe}" # native-image adds .exe on Windows
  -cp "$processed_classpath"
  "$main_class"
)

if ! $is_windows; then
  exec "$native_image" "${args[@]}"
fi

# Windows: run native-image.cmd after vcvars64.bat, from a batch file, like the
# mill-native-image plugin (VCVARSALL, or the usual Visual Studio locations).
vcvars="${VCVARSALL:-}"
if [[ -z "$vcvars" ]]; then
  for version in 18 2026 2022 2019 2017; do
    for edition in Enterprise Community BuildTools; do
      for program_files in "Program Files" "Program Files (x86)"; do
        candidate="C:/$program_files/Microsoft Visual Studio/$version/$edition/VC/Auxiliary/Build/vcvars64.bat"
        if [[ -z "$vcvars" && -f "$candidate" ]]; then vcvars="$candidate"; fi
      done
    done
  done
fi
[[ -n "$vcvars" ]] || { echo "vcvars64.bat not found (set VCVARSALL)" >&2; exit 1; }

quote() { if [[ "$1" == *" "* ]]; then printf '"%s"' "$1"; else printf '%s' "$1"; fi; }
script="$work/run-native-image.bat"
{
  echo "chcp 437"
  echo "@call \"$(cygpath -w "$vcvars")\""
  echo "if %errorlevel% neq 0 exit /b %errorlevel%"
  printf '@call %s' "$(quote "$(cygpath -w "$native_image")")"
  for a in "${args[@]}"; do printf ' %s' "$(quote "$a")"; done
  echo
} > "$script"
cmd //c "$(cygpath -w "$script")"
