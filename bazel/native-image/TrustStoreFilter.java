import java.io.File;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.security.KeyStore;
import java.security.cert.Certificate;
import java.security.cert.X509Certificate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Writes a copy of a trust store without the compromised eMudhra CAs (CVE-2026-91403).
 *
 * <p>Port of `writeTrustStoreWithoutCompromisedCas` in project/settings/package.mill, itself
 * mirroring https://github.com/eed3si9n/emudhra-emsign-check/blob/main/bin/distrust-emudhra.sh
 *
 * <p>Usage: TrustStoreFilter SOURCE_CACERTS DEST
 */
public final class TrustStoreFilter {
  public static void main(String[] args) throws Exception {
    char[] password = "changeit".toCharArray();
    KeyStore store = KeyStore.getInstance(new File(args[0]), password);

    boolean hasUserTrust = false;
    List<String[]> toRemove = new ArrayList<>();
    for (String alias : Collections.list(store.aliases())) {
      Certificate cert = store.getCertificate(alias);
      String subject =
          cert instanceof X509Certificate x509 ? x509.getSubjectX500Principal().getName() : "";
      if (subject.contains("CN=USERTrust RSA Certification Authority")) hasUserTrust = true;
      // the AAA root is shared with legitimate Sectigo chains, which can still be validated via USERTrust
      if (subject.contains("emSign") || subject.contains("CN=AAA Certificate Services"))
        toRemove.add(new String[] {alias, subject});
    }
    boolean removesAaa = toRemove.stream().anyMatch(e -> e[1].contains("CN=AAA Certificate Services"));
    if (removesAaa && !hasUserTrust)
      throw new IllegalStateException(
          "No USERTrust root in " + args[0] + ", can't remove the AAA Certificate Services root safely");

    for (String[] e : toRemove) store.deleteEntry(e[0]);
    try (OutputStream out = Files.newOutputStream(Paths.get(args[1]))) {
      store.store(out, password);
    }
    System.err.println("Removed from the native image trust store:");
    for (String[] e : toRemove) System.err.println("  " + e[1]);
  }
}
