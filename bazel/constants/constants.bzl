"""`scala_cli_constants`: renders a Constants.scala template (bazel/constants/*.scala.tpl)."""

load(":values.bzl", "CONSTANTS")

def _scala_literal(value):
    if type(value) == "string":
        return '"%s"' % value
    return str(value)

def _render(value):
    # Templates hold the Scala quoting of scalars ("@@name@@" / @@name@@) and the
    # Seq(...) around sequences, whose elements are rendered here.
    if type(value) == "list":
        return ", ".join([_scala_literal(v) for v in value])
    return str(value)

def _rlocation(file):
    # runfiles path: _main/<path> for the main repository, <repo>/<path> otherwise
    path = file.short_path
    return path[3:] if path.startswith("../") else "_main/" + path

def _scala_cli_constants_impl(ctx):
    substitutions = {"@@%s@@" % name: _render(value) for name, value in CONSTANTS.items()}
    for target, name in ctx.attr.rlocations.items():
        substitutions["@@%s@@" % name] = _rlocation(target.files.to_list()[0])

    unstamped = ctx.actions.declare_file(ctx.label.name + ".unstamped.scala")
    ctx.actions.expand_template(
        template = ctx.file.template,
        output = unstamped,
        substitutions = substitutions,
    )

    # Values from the workspace status (bazel/workspace_status.sh), e.g. the version;
    # then make sure that every placeholder was filled.
    out = ctx.outputs.out
    ctx.actions.run_shell(
        inputs = [unstamped, ctx.info_file],
        outputs = [out],
        command = """
set -euo pipefail
cp "$1" "$3"
while read -r key value; do
  [[ "$key" == STABLE_* ]] || continue
  sed -i.bak "s|@@$key@@|$value|g" "$3"
done < "$2"
rm -f "$3.bak"
if grep -n '@@[A-Za-z0-9_]*@@' "$3"; then
  echo "Unknown placeholders in $4 (define them in bazel/constants/values.bzl)" >&2
  exit 1
fi
""",
        arguments = [unstamped.path, ctx.info_file.path, out.path, ctx.file.template.short_path],
        mnemonic = "ScalaCliConstants",
        progress_message = "Generating %{output}",
    )
    return [DefaultInfo(files = depset([out]))]

scala_cli_constants = rule(
    implementation = _scala_cli_constants_impl,
    doc = "Renders a Constants.scala template with the values of bazel/constants/values.bzl.",
    attrs = {
        "out": attr.output(mandatory = True),
        "rlocations": attr.label_keyed_string_dict(
            allow_files = True,
            doc = "label -> placeholder name, replaced by the label's runfiles path",
        ),
        "template": attr.label(mandatory = True, allow_single_file = [".tpl"]),
    },
)
