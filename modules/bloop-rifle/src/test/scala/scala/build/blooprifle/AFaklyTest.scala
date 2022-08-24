package scala.build.blooprifle

import munit.FunSuite



class AFaklyTest extends FunSuite {
  test("A flaky test") {
    assert(clue(sys.props.size) == 48)
  }
}
