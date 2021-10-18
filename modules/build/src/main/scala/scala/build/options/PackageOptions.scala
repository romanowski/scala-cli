package scala.build.options

import scala.build.internal.Constants
import scala.build.Positioned
import dependency._
case class AssemblyOptions(
  assemblyExcludes: Seq[Positioned[AnyDependency]] = Nil
)

object AssemblyOptions {
  implicit val hasHashData: HasHashData[AssemblyOptions] = HasHashData.derive
  implicit val monoid: ConfigMonoid[AssemblyOptions]     = ConfigMonoid.derive
}

final case class PackageOptions(
  standalone: Option[Boolean] = None,
  version: Option[String] = None,
  launcherApp: Option[String] = None,
  maintainer: Option[String] = None,
  description: Option[String] = None,
  packageTypeOpt: Option[PackageType] = None,
  logoPath: Option[os.Path] = None,
  macOSidentifier: Option[String] = None,
  debianOptions: DebianOptions = DebianOptions(),
  windowsOptions: WindowsOptions = WindowsOptions(),
  redHatOptions: RedHatOptions = RedHatOptions(),
  dockerOptions: DockerOptions = DockerOptions(),
  assemblyOptions: AssemblyOptions = AssemblyOptions()
) {

  def packageVersion: String =
    version
      .map(_.trim)
      .filter(_.nonEmpty)
      .getOrElse(Constants.version.stripSuffix("-SNAPSHOT"))

  def isDockerEnabled: Boolean = dockerOptions.isDockerEnabled.getOrElse(false)

  // default behaviour for building docker image is building standalone JARs
  def isStandalone: Boolean = standalone.getOrElse(isDockerEnabled)

}

object PackageOptions {
  implicit val hasHashData: HasHashData[PackageOptions] = HasHashData.derive
  implicit val monoid: ConfigMonoid[PackageOptions]     = ConfigMonoid.derive
}
