"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[980],{3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return m}});var l=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,l,n=function(e,a){if(null==e)return{};var t,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)t=i[l],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)t=i[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=l.createContext({}),c=function(e){var a=l.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},p=function(e){var a=c(e.components);return l.createElement(o.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},d=l.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=n,g=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return t?l.createElement(g,r(r({ref:a},p),{},{components:t})):l.createElement(g,r({ref:a},p))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,r=new Array(i);r[0]=d;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var c=2;c<i;c++)r[c]=t[c];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2612:function(e,a,t){t.r(a),t.d(a,{assets:function(){return p},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var l=t(3117),n=t(102),i=(t(7294),t(3905)),r=["components"],s={title:"Run",sidebar_position:6},o=void 0,c={unversionedId:"commands/run",id:"commands/run",title:"Run",description:"The run command runs your Scala code:",source:"@site/docs/commands/run.md",sourceDirName:"commands",slug:"/commands/run",permalink:"/scala-cli/docs/commands/run",draft:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/commands/run.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Run",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Compile",permalink:"/scala-cli/docs/commands/compile"},next:{title:"Test",permalink:"/scala-cli/docs/commands/test"}},p={},u=[{value:"Passing arguments",id:"passing-arguments",level:2},{value:"Main class",id:"main-class",level:2},{value:"Custom JVM",id:"custom-jvm",level:2},{value:"Define source files in using directives",id:"define-source-files-in-using-directives",level:2},{value:"Watch mode",id:"watch-mode",level:2},{value:"Watch mode - restart",id:"watch-mode---restart",level:3},{value:"Scala.js",id:"scalajs",level:2},{value:"Scala Native",id:"scala-native",level:2},{value:"Platform",id:"platform",level:2},{value:"Scala Scripts",id:"scala-scripts",level:2},{value:"Scala CLI from docker",id:"scala-cli-from-docker",level:2},{value:"Debugging",id:"debugging",level:2}],d={toc:u};function m(e){var a=e.components,t=(0,n.Z)(e,r);return(0,i.kt)("wrapper",(0,l.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," command runs your Scala code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=Hello.scala",title:"Hello.scala"},'object Hello {\n  def main(args: Array[String]): Unit =\n    println("Hello")\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli run Hello.scala\n# Hello\n")),(0,i.kt)("p",null,"This is the default command, so you don\u2019t have to specify it explicitly:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli Hello.scala\n# Hello\n")),(0,i.kt)("h2",{id:"passing-arguments"},"Passing arguments"),(0,i.kt)("p",null,"You can pass arguments to the application or script you're launching after ",(0,i.kt)("inlineCode",{parentName:"p"},"--"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=app.sc",title:"app.sc"},'println(args.mkString("App called with arguments: ", ", ", ""))\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli app.sc -- first-arg second-arg\n# App called with arguments: first-arg, second-arg\n")),(0,i.kt)("h2",{id:"main-class"},"Main class"),(0,i.kt)("p",null,"If your application has multiple main classes, the ",(0,i.kt)("inlineCode",{parentName:"p"},"--main-class")," option lets you explicitly specify the main class you want to run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=hi.sc",title:"hi.sc"},'println("Hi")\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli Hello.scala hi.sc --main-class hi_sc\n")),(0,i.kt)("h2",{id:"custom-jvm"},"Custom JVM"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--jvm")," lets you run your application with a custom JVM:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli Hello.scala --jvm adopt:14\n")),(0,i.kt)("p",null,"JVMs are ",(0,i.kt)("a",{parentName:"p",href:"https://get-coursier.io/docs/cli-java#managed-jvms"},"managed by coursier"),", and are read from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/coursier/jvm-index"},"coursier JVM index"),".\n(New JVM versions are automatically checked daily, and updates for those are - manually - merged\nswiftly.)"),(0,i.kt)("h2",{id:"define-source-files-in-using-directives"},"Define source files in using directives"),(0,i.kt)("p",null,"You can also add source files with the using directive ",(0,i.kt)("inlineCode",{parentName:"p"},"//> using file"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=Main.scala",title:"Main.scala"},'//> using file "Utils.scala" \n\nobject Main extends App {\n   println(Utils.message)\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=Utils.scala",title:"Utils.scala"},'object Utils {\n  val message = "Hello World"\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli")," takes it into account and compiles ",(0,i.kt)("inlineCode",{parentName:"p"},"Utils.scala"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli Main.scala\n# Hello World\n")),(0,i.kt)("p",null,"It is also possible to pass multiple paths to source files in a single using directive:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'//> using files "Utils.scala" "Helper.scala"\n')),(0,i.kt)("p",null," Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"//> using file")," using directive only supports ",(0,i.kt)("inlineCode",{parentName:"p"},".java"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".scala"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".sc")," files or a directory. "),(0,i.kt)("h2",{id:"watch-mode"},"Watch mode"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--watch")," makes ",(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli")," watch your code for changes, and re-runs it upon any change:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"scala-cli run Hello.scala  --watch\n# Hello\n# Watching sources, press Ctrl+C to exit.\n# Compiling project (Scala 3.1.1, JVM)\n# Compiled project (Scala 3.1.1, JVM)\n# Hello World\n# Watching sources, press Ctrl+C to exit.\n")),(0,i.kt)("h3",{id:"watch-mode---restart"},"Watch mode - restart"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--restart")," mode runs your application in the background and automatically restarts it upon any change:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"scala-cli run Hello.scala --restart\n# Hello\n# Watching sources, press Ctrl+C to exit.\n# Compiling project (Scala 3.1.1, JVM)\n# Compiled project (Scala 3.1.1, JVM)\n# Hello World\n# Watching sources, press Ctrl+C to exit.\n")),(0,i.kt)("h2",{id:"scalajs"},"Scala.js"),(0,i.kt)("p",null,"Scala.js applications can also be compiled and run with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--js")," option.\nNote that this requires ",(0,i.kt)("inlineCode",{parentName:"p"},"node")," to be ",(0,i.kt)("a",{parentName:"p",href:"/install#scala-js"},"installed")," on your system:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli Hello.scala --js\n")),(0,i.kt)("p",null,"It is also possible to achieve it using ",(0,i.kt)("inlineCode",{parentName:"p"},"--platform")," option:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli Hello.scala --platform js\n")),(0,i.kt)("p",null,"See our dedicated ",(0,i.kt)("a",{parentName:"p",href:"/scala-cli/docs/guides/scala-js"},"Scala.js guide")," for more information."),(0,i.kt)("h2",{id:"scala-native"},"Scala Native"),(0,i.kt)("p",null,"Scala Native applications can be compiled and run with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--native")," option.\nNote that the ",(0,i.kt)("a",{parentName:"p",href:"https://scala-native.readthedocs.io/en/latest/user/setup.html#installing-clang-and-runtime-dependencies"},"Scala Native requirements")," need to be ",(0,i.kt)("a",{parentName:"p",href:"/install#scala-native"},"installed")," for this to work:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli Hello.scala --native -S 2.13.6\n")),(0,i.kt)("p",null,"It is also possible to achieve it using ",(0,i.kt)("inlineCode",{parentName:"p"},"--platform")," option:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli Hello.scala --platform native\n")),(0,i.kt)("p",null,"We have a dedicated ",(0,i.kt)("a",{parentName:"p",href:"/scala-cli/docs/guides/scala-native"},"Scala Native guide")," as well."),(0,i.kt)("h2",{id:"platform"},"Platform"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"--platform")," option can be used to choose the platform, which should be used to compile and run application. Available platforms are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"JVM (",(0,i.kt)("inlineCode",{parentName:"li"},"jvm"),")"),(0,i.kt)("li",{parentName:"ul"},"Scala.js (",(0,i.kt)("inlineCode",{parentName:"li"},"scala.js")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"scala-js")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"scalajs")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"js"),")"),(0,i.kt)("li",{parentName:"ul"},"Scala Native (",(0,i.kt)("inlineCode",{parentName:"li"},"scala-native")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"scalanative")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"native"),")")),(0,i.kt)("p",null,"Passing the ",(0,i.kt)("inlineCode",{parentName:"p"},"--platform")," along with ",(0,i.kt)("inlineCode",{parentName:"p"},"--js")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"--native")," is not recommended. If two different types of platform are passed, Scala CLI throws an error."),(0,i.kt)("h2",{id:"scala-scripts"},"Scala Scripts"),(0,i.kt)("p",null,"Scala CLI can also compile and run Scala scripts:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=HelloScript.sc",title:"HelloScript.sc"},'#!/usr/bin/env -S scala-cli shebang\n\nprintln("Hello world from scala script")\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli run HelloScript.sc\n# Hello world from scala script\n")),(0,i.kt)("p",null,"Our ",(0,i.kt)("a",{parentName:"p",href:"/scala-cli/docs/guides/scripts"},"scripts guide")," provides many more details."),(0,i.kt)("h2",{id:"scala-cli-from-docker"},"Scala CLI from docker"),(0,i.kt)("p",null,"Scala applications can also be compiled and run using a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-started/"},"docker")," image with ",(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli"),", without needing to install Scala CLI manually:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run virtuslab/scala-cli:latest about\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=HelloWorld.scala",title:"HelloWorld.scala"},'object HelloWorld extends App {\n  println("Hello world")\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"docker run  -v $(pwd)/HelloWorld.scala:/HelloWorld.scala virtuslab/scala-cli /HelloWorld.scala\n# Hello world\n")),(0,i.kt)("h2",{id:"debugging"},"Debugging"),(0,i.kt)("p",null,"It is possible to debug code by passing ",(0,i.kt)("inlineCode",{parentName:"p"},"--debug")," flag."),(0,i.kt)("p",null,"Additional debug options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--debug-mode")," (attach by default)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--debug-port")," (5005 by default)")),(0,i.kt)("p",null,"Available debug modes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Attach (",(0,i.kt)("inlineCode",{parentName:"li"},"attach")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"att")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"a"),")"),(0,i.kt)("li",{parentName:"ul"},"Listen (",(0,i.kt)("inlineCode",{parentName:"li"},"listen")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"lis")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"l"),")")),(0,i.kt)("p",null,"Example debugging with scala-cli:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"scala-cli Foo.scala --debug --debug-mode l --debug-port 5006\n")))}m.isMDXComponent=!0}}]);