#!/usr/bin/env bash
# Builds a Scala CLI native image, like the `cli[].*-image.nativeImage` tasks in build.mill
# (mill-native-image plugin + CliNativeImage in project/settings/package.mill):
#   1. rewrites the class path with scala3-graal-processor (CoursierCacheProcessor), as
#      Mill's `cli.nativeImageClassPath` does;
#   2. runs GraalVM's native-image with the embedded trust store, the static libraries
#      and the given options:
#      - on the host (Linux / macOS), or on Windows from a Visual Studio x64 environment,
#        like the mill-native-image plugin;
#      - or, with --docker-image, inside a linux/amd64 Docker container (Mill's
#        nativeImageDockerParams: static / mostly-static images), with the GraalVM
#        mounted read-only and the inputs copied to a work directory mounted at /data.
#
# Usage: native_image.sh NATIVE_IMAGE PROCESSOR_JAR TRUST_STORE CLASSPATH_FILE MAIN_CLASS OUTPUT
#          [--static-lib FILE NAME]... [--docker-image IMAGE] [--docker-context DIR]
#          [--docker-prepare FILE] [--docker-arg ARG]... -- [OPTION...]
set -euo pipefail

is_windows=false
case "$(uname -s)" in MINGW* | MSYS* | CYGWIN*) is_windows=true ;; esac

# Paths as the JVM / native-image see them (C:/... on Windows).
native_path() {
  if $is_windows; then cygpath -m "$1"; else echo "$1"; fi
}

root="$PWD"
native_image="$root/$1"
processor_jar="$root/$2"
trust_store="$root/$3"
classpath_file="$root/$4"
main_class="$5"
output="$root/$6"
shift 6

static_libs=()
docker_image=""
docker_context=""
docker_prepare=""
docker_args=()
while [[ $# -gt 0 && "$1" != "--" ]]; do
  case "$1" in
    --static-lib) static_libs+=("$2" "$3"); shift 3 ;;
    --docker-image) docker_image="$2"; shift 2 ;;
    --docker-context) docker_context="$2"; shift 2 ;;
    --docker-prepare) docker_prepare="$2"; shift 2 ;;
    --docker-arg) docker_args+=("$2"); shift 2 ;;
    *) echo "Unexpected argument: $1" >&2; exit 1 ;;
  esac
done
shift # --

# Static libraries linked into the image (-H:CLibraryPath).
copy_static_libs() {
  mkdir -p "$1"
  local i
  for ((i = 0; i < ${#static_libs[@]}; i += 2)); do
    cp -L "$root/${static_libs[i]}" "$1/${static_libs[i + 1]}"
  done
}

if [[ -n "$docker_image" ]]; then
  # --- Docker (Mill: nativeImageDockerParams) ---------------------------------------
  # The work directory must be visible to the Docker daemon (e.g. Colima mounts $HOME),
  # so it lives next to the output, in Bazel's output base, rather than in $TMPDIR.
  export HOME="${HOME:-$(eval echo "~$(id -un)")}"
  docker="$(command -v docker || true)"
  for candidate in /opt/homebrew/bin/docker /usr/local/bin/docker /usr/bin/docker; do
    [[ -n "$docker" ]] || { [[ -x "$candidate" ]] && docker="$candidate"; }
  done
  [[ -n "$docker" ]] || { echo "docker not found" >&2; exit 1; }

  out_dir="$(cd "$(dirname "$output")" && pwd -P)"
  work="$out_dir/.$(basename "$output").docker-work"
  rm -rf "$work"
  mkdir -p "$work/cp"
  trap 'rm -rf "$work"' EXIT

  if [[ -n "$docker_context" ]]; then
    "$docker" build --platform linux/amd64 -t "$docker_image" "$root/$docker_context"
  fi

  graalvm_home="$(cd "$(dirname "$native_image")/.." && pwd -P)"
  cp -L "$processor_jar" "$work/processor.jar"
  cp -L "$trust_store" "$work/cacerts"
  copy_static_libs "$work/native-libs"
  cp_entries=()
  i=0
  while read -r jar; do
    name="$i-$(basename "$jar")"
    cp -L "$root/$jar" "$work/cp/$name"
    cp_entries+=("/data/cp/$name")
    i=$((i + 1))
  done < "$classpath_file"

  quote() { printf "'%s'" "${1//\'/\'\\\'\'}"; }
  {
    echo "#!/usr/bin/env bash"
    echo "set -e"
    [[ -n "$docker_prepare" ]] && cat "$root/$docker_prepare"
    echo
    echo "cp=\"\$(/graalvm/bin/java -jar /data/processor.jar /data/native-cp $(quote "$(IFS=:; echo "${cp_entries[*]}")"))\""
    printf '/graalvm/bin/native-image'
    for a in "${docker_args[@]}" "$@" \
      "-H:CLibraryPath=/data/native-libs" \
      "-J-Djavax.net.ssl.trustStore=/data/cacerts" \
      "-J-Djavax.net.ssl.trustStorePassword=changeit" \
      -o /data/output; do
      printf ' %s' "$(quote "$a")"
    done
    printf ' -cp "$cp" %s\n' "$(quote "$main_class")"
    # the container runs as root: hand the work directory back to the host user
    echo "chown -R $(id -u):$(id -g) /data"
  } > "$work/run-native-image.sh"
  chmod +x "$work/run-native-image.sh"

  "$docker" run --rm --platform linux/amd64 \
    -v "$work:/data" \
    -v "$graalvm_home:/graalvm:ro" \
    "$docker_image" /data/run-native-image.sh
  cp "$work/output" "$output"
  exit 0
fi

# --- Host --------------------------------------------------------------------------
if [[ "$(uname -s)" == "Linux" ]]; then
  # The image keeps the build's locale encoding (sun.jnu.encoding, file names): build with
  # a UTF-8 locale, as Mill's Docker-based builds set one up (actions get none).
  export LANG=C.UTF-8 LC_ALL=C.UTF-8
fi
work="$(mktemp -d "${TMPDIR:-/tmp}/scala-cli-native-image.XXXXXX")"
trap 'rm -rf "$work"' EXIT
copy_static_libs "$work/native-libs"

if $is_windows; then
  sep=";"
  java="$(dirname "$native_image")/java.exe"
else
  sep=":"
  java="$(dirname "$native_image")/java"
fi

classpath="$(while read -r jar; do native_path "$root/$jar"; done < "$classpath_file" | paste -sd "$sep" -)"
processed_classpath="$("$java" -jar "$(native_path "$processor_jar")" "$(native_path "$work/native-cp")" "$classpath" | tr -d '\r')"

args=(
  "$@"
  "-H:CLibraryPath=$(native_path "$work/native-libs")"
  "-J-Djavax.net.ssl.trustStore=$(native_path "$trust_store")"
  "-J-Djavax.net.ssl.trustStorePassword=changeit"
  -o "$(native_path "${output%.exe}")" # native-image adds .exe on Windows
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

# The arguments (a class path of ~175 JARs) exceed cmd.exe's 8191 character limit:
# pass them in a Java argument file (`native-image @file`), quoted, with forward slashes.
argfile="$work/native-image.args"
for a in "${args[@]}"; do
  a="${a//\\/\\\\}"
  printf '"%s"\n' "${a//\"/\\\"}"
done > "$argfile"
script="$work/run-native-image.bat"
{
  echo "chcp 437"
  echo "@call \"$(cygpath -w "$vcvars")\""
  echo "if %errorlevel% neq 0 exit /b %errorlevel%"
  echo "@call \"$(cygpath -w "$native_image")\" \"@$(cygpath -m "$argfile")\""
} > "$script"
cmd //c "$(cygpath -w "$script")"
