#!/usr/bin/env sh
nargs=$#

i=1; while [ "$i" -le $nargs ]; do
         eval arg=\${$i}
         case $arg in
             -J-*) set -- "$@" "${arg#-J}" ;;
         esac
         i=$((i + 1))
     done

set -- "$@" -jar "$0"

i=1; while [ "$i" -le $nargs ]; do
         eval arg=\${$i}
         case $arg in
             -J-*) ;;
             *) set -- "$@" "$arg" ;;
         esac
         i=$((i + 1))
     done

shift "$nargs"

[ -x "$JAVA_HOME/bin/java" ] && JAVA_CMD="$JAVA_HOME/bin/java" || JAVA_CMD=java
exec "$JAVA_CMD" '-Dsun.misc.URLClassPath.disableJarChecking' $JAVA_OPTS "$@"
