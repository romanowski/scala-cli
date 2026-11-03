#!/usr/bin/env bash
# Bazel workspace status command (see .bazelrc).
# Mirrors the "simple" publish version logic of project/publish/package.mill:
#   - HEAD exactly on tag vX.Y.Z -> X.Y.Z
#   - otherwise -> last tag with patch bumped, plus -SNAPSHOT
# Override with SCALA_CLI_VERSION=... in the environment.
set -euo pipefail

version="${SCALA_CLI_VERSION:-}"
if [[ -z "$version" ]]; then
  last_tag="$(git describe --tags --abbrev=0 --match 'v[0-9]*' 2>/dev/null || true)"
  if [[ -z "$last_tag" ]]; then
    version="0.0.1-SNAPSHOT"
  elif [[ "$(git rev-list -n1 "$last_tag" 2>/dev/null)" == "$(git rev-parse HEAD)" ]]; then
    version="${last_tag#v}"
  else
    tag="${last_tag#v}"
    prefix="${tag%.*}"
    patch="${tag##*.}"
    patch="${patch%%-RC*}"
    version="${prefix}.$((patch + 1))-SNAPSHOT"
  fi
fi

# GitHub repository of the binaries (issue / update links, reference docs): an explicit
# SCALA_CLI_GH_REPOSITORY, else the CI repository (as Mill reads the CI's git remote).
gh_repo="${SCALA_CLI_GH_REPOSITORY:-${GITHUB_REPOSITORY:-VirtusLab/scala-cli}}"

echo "STABLE_SCALA_CLI_VERSION ${version}"
echo "STABLE_SCALA_CLI_GH_ORG ${gh_repo%%/*}"
echo "STABLE_SCALA_CLI_GH_NAME ${gh_repo#*/}"
