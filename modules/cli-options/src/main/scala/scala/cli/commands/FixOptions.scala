package scala.cli.commands

import caseapp._

// format: off
@HelpMessage("Print details about this application")
final case class FixOptions(
  @Recurse
    verbosity: VerbosityOptions = VerbosityOptions()
)
// format: on

object FixOptions {
  implicit lazy val parser: Parser[FixOptions] = Parser.derive
  implicit lazy val help: Help[FixOptions]     = Help.derive
}
