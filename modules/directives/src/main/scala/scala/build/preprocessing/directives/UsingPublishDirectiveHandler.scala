package scala.build.preprocessing.directives

import scala.build.Logger
import scala.build.errors.{BuildException, UnexpectedDirectiveError}
import scala.build.options.{BuildOptions, PostBuildOptions, PublishOptions}

case object UsingPublishDirectiveHandler extends UsingDirectiveHandler {

  private def prefix = "publish."

  def name        = "Publish"
  def description = "Set parameters for publishing"
  def usage       = s"//> using $prefix(organization|moduleName|version) [value]"

  override def usageMd =
    s"""`//> using ${prefix}organization `"value"
       |`//> using ${prefix}moduleName `"value"
       |`//> using ${prefix}version `"value"
       |""".stripMargin

  private def q = "\""
  override def examples = Seq(
    s"//> using ${prefix}organization ${q}io.github.myself$q",
    s"//> using ${prefix}moduleName ${q}my-library$q",
    s"//> using ${prefix}version ${q}0.1.1$q"
  )
  def keys = Seq(
    "organization",
    "name",
    "version",
    "url",
    "license",
    "versionControl",
    "version-control",
    "scm",
    "description",
    "developer",
    "scalaVersionSuffix",
    "scala-version-suffix",
    "scalaPlatformSuffix",
    "scala-platform-suffix",
    "repository",
    "gpgKey",
    "gpg-key",
    "gpgOption",
    "gpg-option",
    "gpgOptions",
    "gpg-options"
  ).map(prefix + _)

  override def getValueNumberBounds(key: String) = UsingDirectiveValueNumberBounds(1, 1)

  def handleValues(
    scopedDirective: ScopedDirective,
    logger: Logger
  ): Either[BuildException, ProcessedUsingDirective] = checkIfValuesAreExpected(scopedDirective).flatMap { groupedScopedValuesContainer =>
    // This head is fishy!
    val publishValue = groupedScopedValuesContainer.scopedStringValues.head.positioned

     if (!scopedDirective.directive.key.startsWith(prefix))
        Left(new UnexpectedDirectiveError(scopedDirective.directive.key))
      else scopedDirective.directive.key.stripPrefix(prefix) match {
        case "organization" =>
          Right(PublishOptions(organization = Some(publishValue)))
        case "name" =>
          Right(PublishOptions(name = Some(publishValue)))
        case "version" =>
          Right(PublishOptions(version = Some(publishValue)))
        case "url" =>
          Right(PublishOptions(url = Some(publishValue)))
        case "license" =>
          PublishOptions.parseLicense(publishValue).map { license =>
            PublishOptions(license = Some(license))
          }
        case "versionControl" | "version-control" | "scm" =>
          PublishOptions.parseVcs(publishValue).map { versionControl =>
            PublishOptions(versionControl = Some(versionControl))
          }
        case "description" =>
          Right(PublishOptions(description = Some(publishValue.value)))
        case "developer" =>
          PublishOptions.parseDeveloper(publishValue).map { developer =>
            PublishOptions(developers = Seq(developer))
          }
        case "scalaVersionSuffix" | "scala-version-suffix" =>
          Right(PublishOptions(scalaVersionSuffix = Some(publishValue.value)))
        case "scalaPlatformSuffix" | "scala-platform-suffix" =>
          Right(PublishOptions(scalaPlatformSuffix = Some(publishValue.value)))
        case "repository" =>
          Right(PublishOptions(repository = Some(publishValue.value)))
        case _ =>
          Left(new UnexpectedDirectiveError(scopedDirective.directive.key))
      }
    }.map { publishOptions =>
      val options = BuildOptions(
        notForBloopOptions = PostBuildOptions(
          publishOptions = publishOptions
        )
      )
      ProcessedDirective(Some(options), Seq.empty)
    }
}
