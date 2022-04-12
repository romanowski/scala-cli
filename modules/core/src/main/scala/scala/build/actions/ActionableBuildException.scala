package scala.build.actions

import scala.build.errors.BuildException
import scala.build.Position

import com.github.plokhotnyuk.jsoniter_scala.core._
import com.github.plokhotnyuk.jsoniter_scala.macros._

case class ArgOption(name: String, value: String)
case class ArgSelection(name: String, options: Seq[ArgOption])

sealed trait Action { def msg: String }
case class ReplaceLine(descr: String, options: Seq[ArgSelection], pattern: String, file: String, original: String, line: Int) extends Action {
  override def msg: String = descr + s" in $file at line $line"
}

object Action {
  implicit val actionSeqCodec: JsonValueCodec[Seq[Action]] = JsonCodecMaker.make
  implicit val actionCoded: JsonValueCodec[Action] = JsonCodecMaker.make

  def store(actions: Seq[Action]): Unit = {
    val actionStore = os.home / ".scala-build" / "actions.json"
    val content = writeToArray(actions)
    os.write.over(actionStore, content, createFolders = true)
  }

  def load(): Seq[Action] ={
    val content = os.read.bytes(os.home / ".scala-build" / "actions.json")
    readFromArray(content)(actionSeqCodec)
  }
}

abstract class ActionableBuildException(
  message: String,
  positions: Seq[Position] = Nil,
) extends BuildException(message, positions) {
  final def expandAction(): (BuildException, Seq[Action]) ={
    val (msg, actions) = computeActions()

    val errorWithAcation = new BuildException(message, positions){
      override def action: String = msg
    }
    (errorWithAcation, actions)
  }

  protected def computeActions(): (String, Seq[Action])
}
