@echo off
rem Windows wrapper of workspace_status.sh: Bazel cant run .sh files directly on Windows.
if defined BAZEL_SH (
  "%BAZEL_SH%" "%~dp0workspace_status.sh"
) else (
  bash "%~dp0workspace_status.sh"
)
