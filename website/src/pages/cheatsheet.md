## Scala CLI cheat sheet

#### Configuration types:
 - Boolean values: 

  CMD: `--jsDom` to set to true and `--server:false` to set to false 
  Directives: `//> using jsDom`, `//> using jsDom false`, ``//> using jsDom true`

 - single argument (e.g. String, Numbers, Dependency definition) 

  CMD: `--dep "foo:bar:1.0"` `--scala 3`
  Directives: `//> using library "foo:bar:1.0"`, `using scala 3`

<!-- TODO, do we have colon based syntax for lists in cmd, similar to booleans? -->
 - lists:  
  CMD: `-O "-Xasync" -O "-Xfatal-warning"` 
  Directives: `using options "-Xasync", "-Xfatal-warning"` or 

  ```scala
  //> using options "-Xasync"
  //> using options "-Xfatal-warning"
  ```


#### Scala CLI accepts 3 kinds of paramters:

 - options - control how scala CLI compiles, runs etc. 
 - inputs - files and resources to use (compile, package etc.) 
 - agruments - arguments for the program/script - comes after `--`

 ```
  scala-cli --cli-version nightly   -S 3 --native Foo.scala Bar.sc aDirectory -- --appOpt 1 appArg
           scala-cli runtime options |>  options <|>        inputs            <|>  arguments
 ```

#### Using directives vs CMD options vs global settings

CMD options takes precenence over using directives.

Use CMD options to:
 - override a directives
 - provides ad hoc configuration when e.g. reproducing a bug or starting a REPL
 <!-- TODO add links to reference -->
 - when there is no corresponding directove usuall toconfigure scala CLI runtime or behaviour, e.g. `-v` or `--force`
 - use one-off commands that required configuration like `repl` or `export`

Use Directives to:
 - configure default, persistent settings like dependencies
 - express dependencies between files
 - defines targets requirements to use given files (e.g. to use only when compiled to JS)

Use global configuration to:
 - define default behaviour, e.g. use interactive mode
 - store defaults for publish setup (email, organization)
 - store credential like github tokens, pgp keys etc. use for publishing

### When to use default configuration?

Use default configuration (e.g. Scala version) when:
 - prototype
 - create short-lived scripts
 - not using any advanced features

Do not use defaults when:
 - depending on specific behaviour of Scala compiler or JVM
 - developing a library


## 10 basic features

 - --native-image
 - --nartive
 - --js

## 10 basic examples
- `scala-cli` will start repl
- `scala-cli --dep "com.lihaoyi::os-lib:0.7.8"` will start repl with os-lib on classpath
- `scala-cli foo.scala` runs given file
- `scala-cli compile src` compiles all the sources
- `scala-cli test .` runs all tests in current directory
- `scala-cli compile . --test` compile all tests in current directory


## How to recover from strange problems

1. Try to clean up the cached state with running `scala-cli clean <inputs>` or adding `--clean` option
2. Try restart compilation server by running `scala-cli bloop exit` or running a command without bloop using `--server:false` option
3. Run `scala-cli doctor` command and inspect the output // TODO fails offline
4. Anything else?


## Current default configuration

TODO add mechanism to make sure we update the page

Scala version: TODO
Java version: TODO
scalafmt version: TODO
Scala JS:
Scala Native:
Ammononite:
Graal:
ScalaFMT:
Spark:
Python:
Hadoop:


### 10 basic options

`--deps "org:name:ver"` `//> using dep "org:name:ver"` to add a library

`-O "-Xfatal-warning"` or `//> using options "-XfatalWarning"` to pass a option to Scalac

`--native` /  `--js` or `//>using platform "js"` / `//> using platform "native"` to use ScalaJS or Scala Native

`--jvm 17` or `using jvm 17` - to run code with given jvm version or distribution

`--main-class` / `using mainClass` - configure main class to run

`--repository` / `//> using repsitory` - add non-default rep


 TODO inputs with options like `--force`, `-v`, `--bloop-port`, `--test`, `--crros`, `--output` or `--mill`, `--sbt`

TODO: dedicated doc for global settings
TODO: shouldn't we hash tokens and other credential
TODO: a page with all current defaults
TODO: ADD `--clean` option
TODO: arg+value options for scalac and java
TODO: package options
TODO: footer with contribution + release notes
TODO: Scala CLI talks + blogs + etc.
TODO: Scala CLI in companies