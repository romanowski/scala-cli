package scala.build.actions

import scala.build.errors.BuildException
import scala.build.errors.CompositeBuildException

object ActionManger {

  def processActions(exception: BuildException): BuildException = {
    def getActions(e: BuildException): (BuildException, Seq[Action]) = e match {
      case composite: CompositeBuildException => 
        val processed = composite.exceptions.map(getActions)
        val actions = processed.flatMap(_._2)
        (CompositeBuildException(processed.map(_._1)), actions)
      case ae: ActionableBuildException => ae.expandAction()
      case e => (e, Nil) 
    }
    val (newException, actions) = getActions(exception)

    Action.store(actions)

    println("Capture following actions: " + actions)
    newException
  }
}
