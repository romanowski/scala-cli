package scala.cli.commands

import caseapp.core.RemainingArgs
import scala.build.actions._
import scala.io.StdIn.readLine
import scala.util._
import scala.util.Success


object Fix extends ScalaCommand[FixOptions] {
  override def group = "Fix"

  def run(options: FixOptions, args: RemainingArgs): Unit = {
    val actions = Action.load()

    actions.foreach { 
      case ReplaceLine(desc, options, pattern, file, original, line) =>
        // TODO check if file does not change!
        val selections = options.map { case ArgSelection(name, opts) =>
          println(s"Please select $name from: ")
          val values = opts.zipWithIndex.map { case (opt, index) =>
            s"[$index] ${opt.name}"
          }.mkString(", ")
          println(values)
          println("Please provide selection or custom value:")
          val response = readLine()
          Try(response.toInt) match {
            case Success(idx) if opts.size > 0 && idx >= 0 && idx < opts.size =>
              opts(idx).value
            case Success(_) => ???
            case _ => ???
          }         
        }
        val source = os.Path(file)
        val orgLine = os.read.lines(source)(line)
        val replacement = selections.zipWithIndex.foldLeft(pattern){ 
          case (current, (value, index)) =>
            current.replace(s"$${$index}", value)
        }
        println(s"I will replace line:\n$orgLine\nwith\n$replacement\nin $file, proceed [Yes/No]?")
        readLine() match {
          case "Yes" | "yes" | "Y" | "y" =>
            println("replacing...")
          case "No" | "no" | "n" | "N" =>
            println("aborting")
          case _ =>
            println("proceed [Yes/No]?")
        }
    }

    println("") // sometimes last line is cut off
  }

}
