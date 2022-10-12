"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1596],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8684:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),i=["components"],s={title:"Packaging Scala applications as executable files",sidebar_position:2},l=void 0,c={unversionedId:"cookbooks/scala-package",id:"cookbooks/scala-package",title:"Packaging Scala applications as executable files",description:"Scala CLI lets you package your application into a lightweight JAR file that can be easily run.",source:"@site/docs/cookbooks/scala-package.md",sourceDirName:"cookbooks",slug:"/cookbooks/scala-package",permalink:"/scala-cli/docs/cookbooks/scala-package",draft:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/cookbooks/scala-package.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Packaging Scala applications as executable files",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/scala-cli/docs/cookbooks/intro"},next:{title:"Picking the Scala version with scala-cli",permalink:"/scala-cli/docs/cookbooks/scala-versions"}},p={},u=[{value:"Default format (lightweight launcher)",id:"default-format-lightweight-launcher",level:3},{value:"Assemblies",id:"assemblies",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Scala CLI lets you package your application into a lightweight JAR file that can be easily run.\nThe JAR file only contains the byte code that\u2019s generated from your source code files, and automatically downloads its dependencies on its first run."),(0,r.kt)("p",null,"As an example, the following snippet contains a short application to detect the OS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=DetectOsApp.scala",title:"DetectOsApp.scala"},'object DetectOsApp extends App  {\n    def getOperatingSystem(): String = {\n        val os: String = System.getProperty("os.name")\n        os\n    }\n    println(s"os: ${getOperatingSystem()}")\n}\n')),(0,r.kt)("h3",{id:"default-format-lightweight-launcher"},"Default format (lightweight launcher)"),(0,r.kt)("p",null,"By default, the ",(0,r.kt)("inlineCode",{parentName:"p"},"package")," sub-command generates a lightweight JAR that contains only your bytecode. This is how you create a lightweight JAR named ",(0,r.kt)("inlineCode",{parentName:"p"},"DetectOsApp.jar"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli package DetectOsApp.scala\n")),(0,r.kt)("p",null,"Lightweight JARs require the ",(0,r.kt)("inlineCode",{parentName:"p"},"java")," command to be available, and access to the internet, if dependencies need to be downloaded. This is how you run it on macOS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Run DetectOsApp on macOS\n./DetectOsApp\n# os: Mac OS X\n")),(0,r.kt)("p",null,"The lightweight JAR that was just built on macOS can also run on Linux:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Run DetectOsApp on Linux\n./DetectOsApp\n# os: Linux\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"scala-cli")," supports building Lightweight JARs in the macOS, Linux, and Windows environments.\nJARs built on macOS and Linux are portable between these two operating systems.\nLightweight JARs built on Windows can only be run on Windows."),(0,r.kt)("h3",{id:"assemblies"},"Assemblies"),(0,r.kt)("p",null,"Passing ",(0,r.kt)("inlineCode",{parentName:"p"},"--assembly")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"package"),' sub-command generates so-called "assemblies," or "fat JARs":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli package --assembly DetectOsApp.scala\n")),(0,r.kt)("p",null,"Assemblies also require the ",(0,r.kt)("inlineCode",{parentName:"p"},"java")," command to be available in the ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH"),". But in this case, all of the dependencies that are needed are packaged into the assembly, so nothing gets downloaded upon the first run, and no internet access is required."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Run DetectOsApp on macOS\n./DetectOsApp\n# os: Mac OS X\n")))}m.isMDXComponent=!0}}]);