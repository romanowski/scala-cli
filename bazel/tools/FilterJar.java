import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.regex.Pattern;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;
import java.util.zip.ZipOutputStream;

/**
 * Copies a JAR, dropping the entries whose name matches a pattern.
 *
 * <p>Bazel counterpart of the `Assembly.Rule.ExcludePattern` rules of `cliBootstrapped` in
 * build.mill (e.g. `.*\.tasty`, `.*\.semanticdb`), applied to deploy JARs.
 *
 * <p>Usage: FilterJar IN_JAR OUT_JAR EXCLUDE_REGEX...
 */
public final class FilterJar {
  public static void main(String[] args) throws IOException {
    Pattern[] excludes = new Pattern[args.length - 2];
    for (int i = 2; i < args.length; i++) excludes[i - 2] = Pattern.compile(args[i]);

    int kept = 0, dropped = 0;
    try (ZipInputStream in =
            new ZipInputStream(new BufferedInputStream(Files.newInputStream(Paths.get(args[0]))));
        ZipOutputStream out =
            new ZipOutputStream(new BufferedOutputStream(Files.newOutputStream(Paths.get(args[1]))))) {
      ZipEntry entry;
      byte[] buffer = new byte[64 * 1024];
      entries:
      while ((entry = in.getNextEntry()) != null) {
        for (Pattern p : excludes)
          if (p.matcher(entry.getName()).matches()) {
            dropped++;
            continue entries;
          }
        ZipEntry copy = new ZipEntry(entry.getName());
        copy.setTime(entry.getTime()); // keep the deploy JAR's (reproducible) timestamps
        out.putNextEntry(copy);
        int n;
        while ((n = in.read(buffer)) > 0) out.write(buffer, 0, n);
        out.closeEntry();
        kept++;
      }
    }
    System.err.printf("FilterJar: kept %d entries, dropped %d%n", kept, dropped);
  }
}
