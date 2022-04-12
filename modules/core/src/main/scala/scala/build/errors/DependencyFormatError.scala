package scala.build.errors

import scala.build.Position
import scala.build.actions.*

case class Candidate(name: String, stars: Int)

final class DependencyFormatError(
  val dependencyString: String,
  val error: String,
  val originOpt: Option[String] = None,
  positions: Seq[Position] = Nil
) extends ActionableBuildException(
      s"Error parsing ${originOpt.getOrElse("")}dependency '$dependencyString': $error",
      positions = positions
    ) {
  def computeActions(): (String, Seq[Action]) =
    if (dependencyString.contains("json")) {
      val canadidates = Seq(
        Candidate("circe / circe", 2276),
        Candidate("spray/spray-json", 953),
        Candidate("zio / zio-json", 306)
      )
      val actions = positions.collect {
        case Position.File(Right(path), (start, _), (end, _)) if start == end =>
          val text = os.read.lines(path)(start)
          val options = canadidates.map(c => ArgOption(c.name, c.name))
          val selections = ArgSelection("Library to use", options) // TODO proper libs
          ReplaceLine("TODO?", Seq(selections), "using lib \"${0}\"", path.toNIO.toString, text, start)
      }

      val optionsStr = canadidates.zipWithIndex.map{ 
        case (Candidate(name, stars), index) =>
          s"[$index] $name ($stars🌟)"
      }.mkString(", ")
      val newMsg =
        s"There are libraries related to `$dependencyString`: \n" +
          optionsStr +  "\n" +
          "run `scala-cli fix fac34 <selected-libarty>` to use one of those libraries."
      
      (newMsg, actions)
    }
    else ("", Nil)

}
