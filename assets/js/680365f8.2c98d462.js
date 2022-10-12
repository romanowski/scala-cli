"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5890],{9705:function(e,t,n){n.d(t,{m:function(){return o},v:function(){return l}});var i=n(7294),a=n(2004);function l(e){var t=e.children;return i.createElement("div",{className:"runnable-command"},t)}function o(e){var t=e.url;return i.createElement(a.Z,{playing:!0,loop:!0,muted:!0,controls:!0,width:"100%",height:"",url:t})}},7114:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return A},toc:function(){return u}});var i=n(3117),a=n(102),l=(n(7294),n(3905)),o=n(9705),r=["components"],s={title:"Setup Scala CLI project in IDEA IntelliJ",sidebar_position:7},c=void 0,A={unversionedId:"cookbooks/intellij",id:"cookbooks/intellij",title:"Setup Scala CLI project in IDEA IntelliJ",description:"It is possible to import a Scala CLI project into IDEA IntelliJ. The import is done",source:"@site/docs/cookbooks/intellij.md",sourceDirName:"cookbooks",slug:"/cookbooks/intellij",permalink:"/scala-cli/docs/cookbooks/intellij",draft:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/cookbooks/intellij.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Setup Scala CLI project in IDEA IntelliJ",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Setup a Scala CLI project in IntelliJ alongside your existing SBT project",permalink:"/scala-cli/docs/cookbooks/intellij-sbt-with-bsp"},next:{title:"Packaging Scala applications as GraalVM native images",permalink:"/scala-cli/docs/cookbooks/native-images"}},p={},u=[],d={toc:u};function m(e){var t=e.components,s=(0,a.Z)(e,r);return(0,l.kt)("wrapper",(0,i.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"It is possible to import a Scala CLI project into IDEA IntelliJ. The import is done\nthrough ",(0,l.kt)("a",{parentName:"p",href:"https://build-server-protocol.github.io/"},"BSP")," and the relevant files can be seen in the hidden ",(0,l.kt)("inlineCode",{parentName:"p"},".bsp"),"\ndirectory, generated after running the ",(0,l.kt)("inlineCode",{parentName:"p"},"setup-ide")," command (or implicitly the ",(0,l.kt)("inlineCode",{parentName:"p"},"run"),"|",(0,l.kt)("inlineCode",{parentName:"p"},"compile"),"|",(0,l.kt)("inlineCode",{parentName:"p"},"test")," commands as well)."),(0,l.kt)("p",null,"Here's a walk-through for a simple import scenario."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=src/HelloWorld.scala",title:"src/HelloWorld.scala"},'@main\n    def hello() = println("Hello, world")\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=test/MyTests.test.scala",title:"test/MyTests.test.scala"},'//> using lib "org.scalameta::munit::1.0.0-M1"\n\nclass MyTests extends munit.FunSuite {\n  test("test") {\n    val x = 2\n    assertEquals(x, 2)\n  }\n}\n')),(0,l.kt)(o.v,{mdxType:"ChainedSnippets"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"tree -a\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},".\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u2514\u2500\u2500 HelloWorld.scala\n\u2514\u2500\u2500 test\n    \u2514\u2500\u2500 MyTests.test.scala\n"))),(0,l.kt)("p",null,"The following command generates all the relevant configurations for IDE support:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli setup-ide .\n")),(0,l.kt)("p",null,"Alternatively, the first time you run the ",(0,l.kt)("inlineCode",{parentName:"p"},"run"),"|",(0,l.kt)("inlineCode",{parentName:"p"},"compile"),"|",(0,l.kt)("inlineCode",{parentName:"p"},"test")," commands, the relevant IDE configuration will be\ngenerated as well."),(0,l.kt)("p",null,"In fact it is entirely sufficient to just run:"),(0,l.kt)(o.v,{mdxType:"ChainedSnippets"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli .\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Hello, world\n"))),(0,l.kt)("p",null,"Next, we need to launch IDEA IntelliJ.\nTo import the project, you can import it, ",(0,l.kt)("inlineCode",{parentName:"p"},"File")," -> ",(0,l.kt)("inlineCode",{parentName:"p"},"New")," -> ",(0,l.kt)("inlineCode",{parentName:"p"},"Project from Existing Sources...")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Project from Existing Sources...",src:n(9883).Z,width:"1214",height:"212"})),(0,l.kt)("p",null,"And then pick ",(0,l.kt)("inlineCode",{parentName:"p"},"BSP")," as the external model (if ",(0,l.kt)("inlineCode",{parentName:"p"},"BSP")," doesn't show up at this step, it means that the ",(0,l.kt)("inlineCode",{parentName:"p"},".bsp")," folder is\nabsent and should be generated with the ",(0,l.kt)("inlineCode",{parentName:"p"},"scala-cli setup-ide")," subcommand)."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"BSP external model",src:n(5263).Z,width:"1440",height:"762"})),(0,l.kt)("p",null,"Alternatively, you can directly call ",(0,l.kt)("inlineCode",{parentName:"p"},"File")," -> ",(0,l.kt)("inlineCode",{parentName:"p"},"Open")," and pick the directory, allowing ",(0,l.kt)("inlineCode",{parentName:"p"},"IntelliJ")," to figure things out\nby itself (which it definitely should, if the ",(0,l.kt)("inlineCode",{parentName:"p"},".bsp")," folder is in place). Just make sure the ",(0,l.kt)("inlineCode",{parentName:"p"},".bsp")," folder is present in\nthe project root directory."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"just open the directory",src:n(6608).Z,width:"628",height:"164"})),(0,l.kt)("p",null,"You should now be able to see the active ",(0,l.kt)("inlineCode",{parentName:"p"},"BSP")," connection icon in the lower right corner of your ",(0,l.kt)("inlineCode",{parentName:"p"},"IDEA IntelliJ")," window."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"BSP icon",src:n(3954).Z,width:"50",height:"56"})),(0,l.kt)("p",null,"The run buttons, syntax completions & coloring should now be available when opening source files.\nIntelliJ should also be identifying the main sources(blue) and test sources (green) directories."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"imported project layout",src:n(8613).Z,width:"2040",height:"1236"})),(0,l.kt)("p",null,"IDEA IntelliJ will now call Scala CLI's ",(0,l.kt)("inlineCode",{parentName:"p"},"bsp")," command to handle running, testing and debugging your code in this\nproject."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"run your code in IntelliJ",src:n(7799).Z,width:"1756",height:"392"})),(0,l.kt)("p",null,"Also, please do note, that the project structure comes directly from Scala CLI and you shouldn't really have to control\nit from IntelliJ. Instead, being a CLI tool, we have a terminal-first policy, and so, if you want to update the project\nstructure to include an extra directory, just run the proper command to update the ",(0,l.kt)("inlineCode",{parentName:"p"},".bsp")," directory."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"scala-cli setup-ide . ../extra-directory\n")),(0,l.kt)("p",null,"Now, after waiting for a bit, the extra directory should be picked up by ",(0,l.kt)("inlineCode",{parentName:"p"},"IntelliJ"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"BSP project with 2 directories",src:n(2557).Z,width:"3580",height:"1238"})),(0,l.kt)("p",null,"And if for whatever reason you want to reload the project manually, you can do it from ",(0,l.kt)("inlineCode",{parentName:"p"},"IntelliJ"),"'s ",(0,l.kt)("inlineCode",{parentName:"p"},"BSP")," panel, just\nclick ",(0,l.kt)("inlineCode",{parentName:"p"},"Refresh")," there."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Refresh BSP manually",src:n(8730).Z,width:"1222",height:"1172"})),(0,l.kt)("p",null,"Note: this example scenario assumes the sources are put in separate subdirectories, 1 per scope. This is because that's\nwhat is encouraged by IDEA IntelliJ, which assumes by default that tests should have its own directory. However, nothing\nreally forces you to bother with that, you can put everything in the root directory (or anywhere else, really), and it\nshould (mostly) work fine:"),(0,l.kt)(o.v,{mdxType:"ChainedSnippets"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"tree -a\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},".\n\u251c\u2500\u2500 HelloWorld.scala\n\u2514\u2500\u2500 MyTests.test.scala\n"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Scala CLI flat project structure imported to IntelliJ",src:n(9584).Z,width:"1950",height:"1230"})))}m.isMDXComponent=!0},5263:function(e,t,n){t.Z=n.p+"assets/images/intellij_bsp_external_model-994d71faac4a753257c8b4330e595e94.png"},3954:function(e,t){t.Z="data:image/png;base64,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"},9584:function(e,t,n){t.Z=n.p+"assets/images/intellij_flat_sources_layout-14794ae9591ed2cff9582f18e8ceb024.png"},8613:function(e,t,n){t.Z=n.p+"assets/images/intellij_imported_project_layout-7ba52cc126bd37e7eb08b9ab04d386c2.png"},6608:function(e,t,n){t.Z=n.p+"assets/images/intellij_open_dir-cbe52c487ac9260bdcfebe49f52f63ab.png"},9883:function(e,t,n){t.Z=n.p+"assets/images/intellij_project_from_existing_sources-df0a31f76300d74b1ef7cb234bd7b565.png"},2557:function(e,t,n){t.Z=n.p+"assets/images/intellij_project_layout_with_extra_dir-8b14de274e20d1de3a95270788232aaa.png"},8730:function(e,t,n){t.Z=n.p+"assets/images/intellij_refresh_bsp-3df4fb31a96ed67438ba703465a9147f.png"},7799:function(e,t,n){t.Z=n.p+"assets/images/intellij_run_code_with_bsp-f20e207bcef4a32714b9e88da4840156.png"}}]);