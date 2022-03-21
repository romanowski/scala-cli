package scala.build



class EitherCps[E]{
  def value[V](from: Either[E, V]) = from match 
    case Left(e) => throw new EitherFailure(e)
    case Right(v) => v

  case class EitherFailure(v: E) extends RuntimeException
}

object EitherCps:
  inline def value[E, V](from: Either[E, V])(using cps: EitherCps[E]) =
    cps.value(from)

  def either[E, V](op: EitherCps[E] ?=> V): Either[E, V] = 
    val cps = new EitherCps[E]
    try Right(op(using cps))
    catch 
      case cps.EitherFailure(e) =>
        Left(e)