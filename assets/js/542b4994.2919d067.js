"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1976],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5782:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),c=n.p+"assets/images/scala-doc-main-method-6e1485a8bd161c2189c715870a5b7dcd.png",i=["components"],l={title:"Doc",sidebar_position:18},s=void 0,u={unversionedId:"commands/doc",id:"commands/doc",title:"Doc",description:"Scala CLI can generate the API documentation of your Scala 2, Scala 3, and Java projects. It provides features similar to javadoc.",source:"@site/docs/commands/doc.md",sourceDirName:"commands",slug:"/commands/doc",permalink:"/scala-cli/docs/commands/doc",draft:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/commands/doc.md",tags:[],version:"current",sidebarPosition:18,frontMatter:{title:"Doc",sidebar_position:18},sidebar:"tutorialSidebar",previous:{title:"Package",permalink:"/scala-cli/docs/commands/package"},next:{title:"Completions",permalink:"/scala-cli/docs/commands/completions"}},d={},p=[],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Scala CLI can generate the API documentation of your Scala 2, Scala 3, and Java projects. It provides features similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"javadoc"),".\nThe API documentation is generated in a directory whose files make up a static website:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=Hello.scala",title:"Hello.scala"},'package hello\n/** Hello object for running main method\n */\nobject Hello {\n  /**\n    * Main method\n    * @param args The command line arguments.\n    **/\n  def main(args: Array[String]): Unit =\n    println("Hello")\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli doc Hello.scala -o scala-doc\n# Wrote Scaladoc to ./scala-doc\n")),(0,o.kt)("p",null,"The output directory ",(0,o.kt)("inlineCode",{parentName:"p"},"scala-doc")," contains the static site files with your documentation."),(0,o.kt)("p",null,"After opening the generated static documentation (you have to open ",(0,o.kt)("inlineCode",{parentName:"p"},"scala-doc/index.html")," in your browser),\nyou will see the generated scaladoc documentation. The following screen shows the definition of the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," method:"),(0,o.kt)("img",{src:c}))}f.isMDXComponent=!0}}]);