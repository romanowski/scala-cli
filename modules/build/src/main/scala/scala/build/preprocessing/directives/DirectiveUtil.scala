package scala.build.preprocessing.directives

import com.virtuslab.using_directives.custom.model.{NumericValue, StringValue, Value}

import scala.build.preprocessing.ScopePath
import scala.build.{Position, Positioned}
import scala.build.errors.BuildException
import scala.build.errors.MalformedDirectiveError
import com.virtuslab.using_directives.custom.model.BooleanValue
import scala.build.errors.CompositeBuildException

case class ScopedValue[T](values: Positioned[T], path: Option[ScopePath])

object DirectiveUtil {

  def position(v: Value[_], path: Either[String, os.Path], skipQuotes: Boolean = true) = {
    val line   = v.getRelatedASTNode.getPosition.getLine
    val column = v.getRelatedASTNode.getPosition.getColumn + (if (skipQuotes) 0 else 1)
    Position.File(path, (line, column), (line, column))
  }

  def scope(v: Value[_], cwd: ScopePath) =
    Option(v.getScope).map((p: String) => cwd / os.RelPath(p))

  def kind(v: Value[_]) = v match {
    case _: StringValue  => "String"
    case _: NumericValue => "Number"
    case _: BooleanValue => "Boolean"
    case _               => "Unkown"
  }

  def checkSupportedTypes(
    values: Seq[Value[_]],
    path: Either[String, os.Path],
    key: String
  )(
    booleans: Boolean = false,
    strings: Boolean = false,
    numbers: Boolean = false,
    hint: String = ""
  ) = {
    val supportedTypes = Seq((booleans, "Boolean"), ("String", strings), ("Numbers", numbers))
      .collect { case (n, true) => n }

    val invalidValues =
      values.filterNot {
        case _: StringValue  => strings
        case _: NumericValue => numbers
        case _: BooleanValue => booleans
        case _               => true // unexpected but we do not have a sealead in java
      }
    if (invalidValues.isEmpty) Right(())
    else Left(
      CompositeBuildException(invalidValues.map (v =>
        new MalformedDirectiveError(
          s"Invalid value for $key of type ${kind(v)}, expected: ${supportedTypes.mkString(", ")}. $hint",
          Seq(position(v, path))
        )
      ))
    )
  }

  def stringOrNumercialValues(
    values: Seq[Value[_]],
    path: Either[String, os.Path],
    cwd: ScopePath,
    key: String
  ): Either[BuildException, Seq[ScopedValue[String]]] =
    checkSupportedTypes(values, path, key)(
      numbers = true,
      strings = true,
      hint = "Did you forgot to add qoutes?"
    ).map { _ =>
      values.collect {
        case v: StringValue =>
          ScopedValue(Positioned(position(v, path, skipQuotes = true), v.get), scope(v, cwd))
        case v: NumericValue =>
          ScopedValue(Positioned(position(v, path), v.get), scope(v, cwd))
      }
    }

  def stringValues(
    values: Seq[Value[_]],
    path: Either[String, os.Path],
    cwd: ScopePath,
    key: String
  ):  Either[BuildException, Seq[ScopedValue[String]]] =
    checkSupportedTypes(values, path, key)(strings = true).map { _ =>
      values.collect {
        case v: StringValue =>
          ScopedValue(Positioned(position(v, path, skipQuotes = true), v.get), scope(v, cwd))
      }
    }

  def numericValues(
   values: Seq[Value[_]],
    path: Either[String, os.Path],
    cwd: ScopePath,
    key: String
  ):  Either[BuildException, Seq[ScopedValue[String]]] =
    checkSupportedTypes(values, path, key)(numbers = true).map { _ =>
      values.collect {
        case v: NumericValue =>
          ScopedValue(Positioned(position(v, path, skipQuotes = true), v.get), scope(v, cwd))
      }
    }

  def positions(
    values: Seq[Value[_]],
    path: Either[String, os.Path]
  ): Seq[Position] =
    values.map { v =>
      val line   = v.getRelatedASTNode.getPosition.getLine
      val column = v.getRelatedASTNode.getPosition.getColumn
      Position.File(path, (line, column), (line, column))
    }

  def singleValue(results: Seq[ScopedValue[String]): Either[BuildException, ScopedValue[String]] =
    if (results.size == 1) Right(results.head)
    else Left(new MalformedDirectiveError("amam", Seq(position(v))))

}
