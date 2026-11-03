import java.io.BufferedOutputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.HexFormat;
import java.util.List;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

/**
 * Bazel counterpart of `local-repo.localRepoJar` (LocalRepo in project/settings/package.mill).
 *
 * <p>Writes a JAR containing a single `local-repo.zip` entry. That zip holds an Ivy repository
 * (org/module/rev/{jars,ivys}/...) with the runner, test-runner and java-test-runner modules, plus a
 * `version` entry that scala.build.LocalRepo uses as the extraction directory name.
 *
 * <p>Usage: LocalRepoZip OUT_JAR STATUS_FILE RESOURCE_NAME (--module ORG NAME JAR DEPS)...
 *
 * <p>DEPS is a comma-separated list of org:name:rev[:provided] (may be empty).
 */
public final class LocalRepoZip {

  private record Module(String org, String name, Path jar, List<String[]> deps) {}

  public static void main(String[] args) throws IOException, NoSuchAlgorithmException {
    Path out = Paths.get(args[0]);
    String version = readStatus(Paths.get(args[1]), "STABLE_SCALA_CLI_VERSION");
    String resourceName = args[2]; // Constants.localRepoResourcePath

    List<Module> modules = new ArrayList<>();
    for (int i = 3; i < args.length; i += 5) {
      if (!args[i].equals("--module")) throw new IllegalArgumentException("Expected --module, got " + args[i]);
      List<String[]> deps = new ArrayList<>();
      if (!args[i + 4].isEmpty())
        for (String d : args[i + 4].split(",")) deps.add(d.split(":"));
      modules.add(new Module(args[i + 1], args[i + 2], Paths.get(args[i + 3]), deps));
    }

    MessageDigest digest = MessageDigest.getInstance("SHA-256");
    ByteArrayOutputStream zipBytes = new ByteArrayOutputStream();
    try (ZipOutputStream zip = new ZipOutputStream(zipBytes)) {
      for (Module m : modules) {
        byte[] jar = Files.readAllBytes(m.jar());
        byte[] ivy = ivyXml(m, version).getBytes(StandardCharsets.UTF_8);
        digest.update(jar);
        digest.update(ivy);
        String base = m.org() + "/" + m.name() + "/" + version + "/";
        put(zip, base + "jars/" + m.name() + ".jar", jar);
        put(zip, base + "ivys/ivy.xml", ivy);
      }
      // Content-derived, so that a changed runner never reuses a stale extracted repository.
      String repoVersion = version + "-bazel-" + HexFormat.of().formatHex(digest.digest()).substring(0, 16);
      put(zip, "version", repoVersion.getBytes(StandardCharsets.UTF_8));
    }

    try (OutputStream os = new BufferedOutputStream(Files.newOutputStream(out));
        ZipOutputStream jar = new ZipOutputStream(os)) {
      put(jar, resourceName, zipBytes.toByteArray());
    }
  }

  private static void put(ZipOutputStream zip, String name, byte[] content) throws IOException {
    ZipEntry entry = new ZipEntry(name);
    entry.setTime(0L); // reproducible output
    zip.putNextEntry(entry);
    zip.write(content);
    zip.closeEntry();
  }

  private static String readStatus(Path statusFile, String key) throws IOException {
    for (String line : Files.readAllLines(statusFile, StandardCharsets.UTF_8))
      if (line.startsWith(key + " ")) return line.substring(key.length() + 1).trim();
    throw new IllegalStateException(key + " not found in " + statusFile);
  }

  private static String ivyXml(Module m, String version) {
    StringBuilder deps = new StringBuilder();
    for (String[] d : m.deps()) {
      String conf =
          d.length > 3 && d[3].equals("provided")
              ? "provided->compile"
              : "compile->compile;runtime->runtime";
      deps.append(
          String.format(
              "        <dependency org=\"%s\" name=\"%s\" rev=\"%s\" conf=\"%s\"/>%n",
              d[0], d[1], d[2], conf));
    }
    return String.format(
        """
        <?xml version="1.0" encoding="UTF-8"?>
        <ivy-module version="2.0" xmlns:e="http://ant.apache.org/ivy/extra">
            <info organisation="%1$s" module="%2$s" revision="%3$s" status="release">
                <description/>
            </info>
            <configurations>
                <conf name="pom" visibility="public" description=""/>
                <conf extends="runtime" name="test" visibility="public" description=""/>
                <conf name="provided" visibility="public" description=""/>
                <conf name="optional" visibility="public" description=""/>
                <conf name="compile" visibility="public" description=""/>
                <conf extends="compile" name="runtime" visibility="public" description=""/>
            </configurations>
            <publications>
                <artifact name="%2$s" type="jar" ext="jar" conf="compile"/>
            </publications>
            <dependencies>
        %4$s    </dependencies>
        </ivy-module>
        """,
        m.org(), m.name(), version, deps);
  }
}
