"""`native_image`: GraalVM native image of a JVM application (see native_image.sh)."""

load("@rules_java//java/common:java_info.bzl", "JavaInfo")

def _native_image_impl(ctx):
    jars = depset(transitive = [d[JavaInfo].transitive_runtime_jars for d in ctx.attr.deps]).to_list()
    classpath_file = ctx.actions.declare_file(ctx.label.name + ".classpath")
    ctx.actions.write(classpath_file, "\n".join([j.path for j in jars]) + "\n")
    output = ctx.actions.declare_file(ctx.attr.output_name)

    ctx.actions.run(
        executable = ctx.executable._script,
        arguments = [
            ctx.file.native_image.path,
            ctx.file.processor_jar.path,
            ctx.file.trust_store.path,
            classpath_file.path,
            ctx.attr.main_class,
            output.path,
        ] + ctx.attr.options,
        inputs = depset(
            [classpath_file, ctx.file.processor_jar, ctx.file.trust_store] + ctx.files.graalvm + jars,
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
        "_script": attr.label(default = ":native_image.sh", executable = True, cfg = "exec", allow_single_file = True),
    },
)
