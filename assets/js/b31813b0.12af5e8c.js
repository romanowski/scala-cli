"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8702],{3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return d}});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=n.createContext({}),c=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(o.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=l,h=m["".concat(o,".").concat(d)]||m[d]||u[d]||i;return t?n.createElement(h,r(r({ref:a},p),{},{components:t})):n.createElement(h,r({ref:a},p))}));function d(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var i=t.length,r=new Array(i);r[0]=m;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,r[1]=s;for(var c=2;c<i;c++)r[c]=t[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1939:function(e,a,t){t.r(a),t.d(a,{assets:function(){return p},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=t(3117),l=t(102),i=(t(7294),t(3905)),r=["components"],s={title:"Basics",sidebar_position:3},o=void 0,c={unversionedId:"commands/basics",id:"commands/basics",title:"Basics",description:"Scala CLI is a command line tool that executes a given command on the inputs it\u2019s provided with, using a given configuration to produce a result.",source:"@site/docs/commands/basics.md",sourceDirName:"commands",slug:"/commands/basics",permalink:"/scala-cli/docs/commands/basics",draft:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/commands/basics.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Basics",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/scala-cli/docs/getting_started"},next:{title:"Compile",permalink:"/scala-cli/docs/commands/compile"}},p={},u=[{value:"Input formats",id:"input-formats",level:2},{value:"Source files",id:"source-files",level:2},{value:"Directories",id:"directories",level:2},{value:"URLs",id:"urls",level:2},{value:"GitHub Gist",id:"github-gist",level:3},{value:"Zip archive",id:"zip-archive",level:3},{value:"Piping",id:"piping",level:2},{value:"Scala CLI version",id:"scala-cli-version",level:2},{value:"Process substitution",id:"process-substitution",level:2}],m={toc:u};function d(e){var a=e.components,t=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Scala CLI is a command line tool that executes a given command on the inputs it\u2019s provided with, using a given ",(0,i.kt)("a",{parentName:"p",href:"/scala-cli/docs/guides/configuration"},"configuration")," to produce a result."),(0,i.kt)("p",null,"The most important commands are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/scala-cli/docs/commands/compile"},"compile")," compiles your code (excluding tests)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/scala-cli/docs/commands/run"},"run")," runs your code using the provided arguments (it\u2019s also used when no other command is provided)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/scala-cli/docs/commands/test"},"test")," compiles and runs the tests defined in your code"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/scala-cli/docs/commands/package"},"package")," packages your code into a jar or other format"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/scala-cli/docs/commands/repl"},"repl")," / ",(0,i.kt)("a",{parentName:"li",href:"/scala-cli/docs/commands/repl"},"console")," runs the interactive Scala shell"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/scala-cli/docs/commands/fmt"},"fmt")," formats your code")),(0,i.kt)("p",null,"When Scala CLI is run without any commands, it defaults to the ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," command, so ",(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli a.scala")," runs your ",(0,i.kt)("inlineCode",{parentName:"p"},"a.scala")," file."),(0,i.kt)("h2",{id:"input-formats"},"Input formats"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli")," CLI commands accept input in a number of ways, most notably:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"as source files"),(0,i.kt)("li",{parentName:"ul"},"as one or several directories that contain source files"),(0,i.kt)("li",{parentName:"ul"},"as URLs pointing to sources"),(0,i.kt)("li",{parentName:"ul"},"by processing source code via piping or process substitution")),(0,i.kt)("p",null,"Note that all of these input formats can be used alongside each other."),(0,i.kt)("h2",{id:"source-files"},"Source files"),(0,i.kt)("p",null,"Scala CLI accepts the following types of source code:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".scala")," files, containing Scala code"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".sc")," files, containing Scala scripts (see more in ",(0,i.kt)("a",{parentName:"li",href:"/scala-cli/docs/guides/scripts"},"Scripts guide"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".java")," files, containing Java code")),(0,i.kt)("p",null,"The following example shows the simplest input format.\nFirst, create a source file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=Hello.scala",title:"Hello.scala"},'object Hello {\n  def main(args: Array[String]): Unit =\n    println("Hello from Scala")\n}\n')),(0,i.kt)("p",null,"The run it by passing it to ",(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli Hello.scala\n# Hello from Scala\n")),(0,i.kt)("p",null,"You can also split your code into multiple files:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=Messages.scala",title:"Messages.scala"},'object Messages {\n  def hello = "Hello from Scala"\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=Hello.scala",title:"Hello.scala"},"object Hello {\n  def main(args: Array[String]): Unit =\n    println(Messages.hello)\n}\n")),(0,i.kt)("p",null,"and the run them with ",(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli Hello.scala Messages.scala\n# Hello from Scala\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Scala CLI compiles only the provided inputs.\nFor example, if we provide only one of the files above:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"fail",fail:!0},"scala-cli Hello.scala\n")),(0,i.kt)("p",{parentName:"admonition"},"compilation will fail. ",(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli")," compiles only the files it\u2019s given.")),(0,i.kt)("p",null,"While this is ",(0,i.kt)("em",{parentName:"p"},"very")," convenient for projects with just a few files, passing many files this way can be cumbersome and error-prone.\nIn the case of larger projects, passing whole directories can help."),(0,i.kt)("h2",{id:"directories"},"Directories"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli")," accepts whole directories as input."),(0,i.kt)("p",null,"This is convenient when you have many ",(0,i.kt)("inlineCode",{parentName:"p"},".scala")," files, and passing them all one-by-one on the command line isn't practical:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=my-app/Messages.scala",title:"my-app/Messages.scala"},'object Messages {\n  def hello = "Hello from Scala"\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=my-app/Hello.scala",title:"my-app/Hello.scala"},"object Hello {\n  def main(args: Array[String]): Unit =\n    println(Messages.hello)\n}\n")),(0,i.kt)("p",null,"In this case, you can run all the source code files in ",(0,i.kt)("inlineCode",{parentName:"p"},"my-app")," by supplying the directory name:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli my-app\n# Hello from Scala\n")),(0,i.kt)("p",null,"In our experience, ",(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli .")," is the most used command; it compiles and runs all sources in the current directory."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Scala CLI process all files within the specified directories and all of its subdirectories."),(0,i.kt)("p",{parentName:"admonition"},"Scala CLI ignores all subdirectories that start with ",(0,i.kt)("inlineCode",{parentName:"p"},".")," like ",(0,i.kt)("inlineCode",{parentName:"p"},".scala-build")," or ",(0,i.kt)("inlineCode",{parentName:"p"},".vscode"),".\nSuch directories needs to be explicitly provided as inputs.")),(0,i.kt)("h2",{id:"urls"},"URLs"),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Running unverified code from the internet can be very handy for ",(0,i.kt)("em",{parentName:"p"},"trusted")," sources, but it can also be really dangerous, since Scala CLI does not provide any sandboxing at this moment."),(0,i.kt)("p",{parentName:"admonition"},"Make sure that you trust the code that you are about to run.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli")," accepts input via URLs pointing at ",(0,i.kt)("inlineCode",{parentName:"p"},".scala")," files.\nIt downloads their content, and runs them:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli https://gist.github.com/alexarchambault/f972d941bc4a502d70267cfbbc4d6343/raw/2691c01984c9249936a625a42e29a822a357b0f6/Test.scala\n# Hello from Scala GitHub Gist\n")),(0,i.kt)("h3",{id:"github-gist"},"GitHub Gist"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli")," accepts input via Github Gist\u2019s urls.\nIt downloads the gist zip archive and runs it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli https://gist.github.com/alexarchambault/7b4ec20c4033690dd750ffd601e540ec\n# Hello\n")),(0,i.kt)("h3",{id:"zip-archive"},"Zip archive"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli")," accepts inputs via a ",(0,i.kt)("inlineCode",{parentName:"p"},"zip")," archive path.\nIt unpacks the archive and runs it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"titleHello.scala","titleHello.scala":!0},'object Hello extends App {\n  println("Hello")\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"unzip -l hello.zip\n# Archive:  hello.zip\n#   Length      Date    Time    Name\n# ---------  ---------- -----   ----\n#        49  12-07-2021 00:06   Hello.scala\n# ---------                     -------\n#        49                     1 file\nscala-cli hello.zip\n# Hello\n")),(0,i.kt)("h2",{id:"piping"},"Piping"),(0,i.kt)("p",null,"You can also pipe code to ",(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli")," for execution:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"scripts",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"echo 'println(\"Hello\")' | scala-cli _.sc\n# Hello\n"))),(0,i.kt)("li",{parentName:"ul"},"Scala code",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"echo '@main def hello() = println(\"Hello\")' | scala-cli _.scala\n# Hello\n"))),(0,i.kt)("li",{parentName:"ul"},"Java code",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"echo 'class Hello { public static void main(String args[]) { System.out.println(\"Hello\"); } }' | scala-cli _.java\n# Hello\n")),"More details in the ",(0,i.kt)("a",{parentName:"li",href:"/scala-cli/docs/guides/piping"},"Piping guide"),".")),(0,i.kt)("h2",{id:"scala-cli-version"},"Scala CLI version"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli")," can also run another Scala CLI version, which can be helpful to test unreleased Scala CLI functionalities."),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Running another Scala CLI version might be slower because it uses JVM-based Scala CLI launcher.")),(0,i.kt)("p",null,"To run another Scala CLI version, specify it with ",(0,i.kt)("inlineCode",{parentName:"p"},"--cli-version")," before any other argument:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli --cli-version 0.1.3-51-g4d314eee-SNAPSHOT about\n# Scala CLI version 0.1.3-51-g4d314eee-SNAPSHOT\n")),(0,i.kt)("p",null,"To use the latest Scala CLI nightly build, pass ",(0,i.kt)("inlineCode",{parentName:"p"},"nightly")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"--cli-version")," parameter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli --cli-version nightly about\n# Scala CLI version 0.1.3-8-g431cc15f-SNAPSHOT\n")),(0,i.kt)("h2",{id:"process-substitution"},"Process substitution"),(0,i.kt)("p",null,"Lastly, ",(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli")," also accepts input via shell process substitution:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli <(echo 'println(\"Hello\")')\n# Hello\n")))}d.isMDXComponent=!0}}]);