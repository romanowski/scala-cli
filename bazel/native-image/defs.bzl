"""`native_image`: GraalVM native image of a JVM application (see native_image.sh)."""

load("@rules_java//java/common:java_info.bzl", "JavaInfo")

def graalvm_select(platforms, target, windows_target = None):
    """Selects `target` in the GraalVM repository picked by //bazel/native-image:graalvm_platform.

    Args:
      platforms: GraalVM platforms (keys of GRAALVM_PLATFORMS).
      target: target in the GraalVM repository.
      windows_target: target to use instead on Windows (e.g. bin/native-image.cmd).
    """
    return select({
        "//bazel/native-image:%s_%s" % (kind, platform): "@graalvm_%s//:%s" % (
            platform.replace("-", "_"),
            windows_target if platform.startswith("windows") and windows_target else target,
        )
        for platform in platforms
        for kind in ["host", "forced"]
    })

def _native_image_impl(ctx):
    jars = depset(transitive = [d[JavaInfo].transitive_runtime_jars for d in ctx.attr.deps]).to_list()
    classpath_file = ctx.actions.declare_file(ctx.label.name + ".classpath")
    ctx.actions.write(classpath_file, "\n".join([j.path for j in jars]) + "\n")
    output = ctx.actions.declare_file(ctx.attr.output_name)

    docker = []
    docker_inputs = []
    if ctx.attr.docker_image:
        docker += ["--docker-image", ctx.attr.docker_image]
        if ctx.files.docker_context:
            docker += ["--docker-context", ctx.files.docker_context[0].dirname]
            docker_inputs += ctx.files.docker_context
        if ctx.attr.docker_prepare:
            prepare = ctx.actions.declare_file(ctx.label.name + ".prepare.sh")
            ctx.actions.write(prepare, ctx.attr.docker_prepare + "\n")
            docker += ["--docker-prepare", prepare.path]
            docker_inputs.append(prepare)
        for arg in ctx.attr.docker_args:
            docker += ["--docker-arg", arg]

    # run_shell: Bazel runs it with bash on every OS (Windows can't execute a .sh file).
    ctx.actions.run_shell(
        command = 'bash %s "$@"' % ctx.file._script.path,
        tools = [ctx.file._script],
        arguments = [
            ctx.file.native_image.path,
            ctx.file.processor_jar.path,
            ctx.file.trust_store.path,
            classpath_file.path,
            ctx.attr.main_class,
            output.path,
        ] + [
            arg
            for lib, name in ctx.attr.static_libs.items()
            for arg in ["--static-lib", lib.files.to_list()[0].path, name]
        ] + docker + ["--"] + ctx.attr.options,
        inputs = depset(
            [classpath_file, ctx.file.processor_jar, ctx.file.trust_store] + ctx.files.graalvm +
            ctx.files.static_libs + docker_inputs + jars,
        ),
        outputs = [output],
        mnemonic = "NativeImage",
        progress_message = "Building native image %{output}",
        # native-image uses the host C toolchain and a lot of memory / CPU; keep it local.
        execution_requirements = {
            "no-remote": "1",
            "no-sandbox": "1",
            "cpu:4": "",
        },
        use_default_shell_env = True,
    )
    return [DefaultInfo(files = depset([output]), executable = output)]

native_image = rule(
    implementation = _native_image_impl,
    executable = True,
    attrs = {
        "deps": attr.label_list(providers = [JavaInfo], doc = "Class path, in order"),
        "main_class": attr.string(mandatory = True),
        "options": attr.string_list(doc = "native-image options"),
        "output_name": attr.string(mandatory = True),
        "graalvm": attr.label(mandatory = True, doc = "All files of the GraalVM distribution"),
        "native_image": attr.label(mandatory = True, allow_single_file = True),
        "processor_jar": attr.label(mandatory = True, allow_single_file = True, doc = "scala3-graal-processor deploy JAR"),
        "trust_store": attr.label(mandatory = True, allow_single_file = True),
        "docker_image": attr.string(
            doc = "Build in this linux/amd64 Docker image (Mill: nativeImageDockerParams.imageName)",
        ),
        "docker_context": attr.label_list(
            allow_files = True,
            doc = "Files of a Docker build context: `docker build -t <docker_image>` it first",
        ),
        "docker_prepare": attr.string(doc = "Shell commands run in the container before native-image"),
        "docker_args": attr.string_list(doc = "native-image arguments only used in Docker (extraNativeImageArgs)"),
        "static_libs": attr.label_keyed_string_dict(
            allow_files = True,
            doc = "Static libraries to link (-H:CLibraryPath), mapped to their file name there",
        ),
        "_script": attr.label(default = ":native_image.sh", cfg = "exec", allow_single_file = True),
    },
)

def scala_cli_native_image(name, **kwargs):
    """A Scala CLI native image (`native_image` with the settings common to every launcher kind).

    Args:
      name: target name.
      **kwargs: passed to native_image.
    """
    native_image(
        name = name,
        main_class = "scala.cli.ScalaCli",
        processor_jar = "//bazel/native-image:graal_processor_deploy.jar",
        # Several GB of RAM, minutes of CPU: only built when asked for.
        tags = ["manual"],
        trust_store = "//bazel/native-image:trust_store",
        visibility = ["//visibility:public"],
        **kwargs
    )
