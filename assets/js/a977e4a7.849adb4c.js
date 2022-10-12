"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7898],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9328:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],l={title:"IDE Setup",sidebar_position:14},s=void 0,u={unversionedId:"commands/setup-ide",id:"commands/setup-ide",title:"IDE Setup",description:"Whether it's VS Code or IntelliJ, Scala CLI can help you setup your IDE of choice by generating the files that are necessary for it, providing you with full-blown IDE support.",source:"@site/docs/commands/setup-ide.md",sourceDirName:"commands",slug:"/commands/setup-ide",permalink:"/scala-cli/docs/commands/setup-ide",draft:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/commands/setup-ide.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"IDE Setup",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"REPL",permalink:"/scala-cli/docs/commands/repl"},next:{title:"Format",permalink:"/scala-cli/docs/commands/fmt"}},c={},p=[{value:"IDE support internals",id:"ide-support-internals",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Whether it's VS Code or IntelliJ, Scala CLI can help you setup your IDE of choice by generating the files that are necessary for it, providing you with full-blown IDE support."),(0,i.kt)("p",null,"Using Scala CLI should be as simple as possible, so under the hood this command is run before every ",(0,i.kt)("inlineCode",{parentName:"p"},"run"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"compile"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," command.\nAs a result, in most cases you don't need to run this command manually."),(0,i.kt)("p",null,"But if you want to, invoke ",(0,i.kt)("inlineCode",{parentName:"p"},"setup-ide")," like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli setup-ide . --scala 2.13\n")),(0,i.kt)("p",null,"Keep in mind that if you change any of these options, you may need to restart your IDE, or re-import your project."),(0,i.kt)("h3",{id:"ide-support-internals"},"IDE support internals"),(0,i.kt)("p",null,"After invoking ",(0,i.kt)("inlineCode",{parentName:"p"},"setup-ide"),", two files should be generated:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".bsp/scala-cli.json")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".scala-build/ide-options-v2.json"))),(0,i.kt)("p",null,"The first file is specifically created for Build Server Protocol (BSP) support in your IDE.\nBSP is supported by VS Code (via the Metals extension) and IntelliJ (with the Scala plugin), and defines the way in which IDEs gather information about the project you are working on."),(0,i.kt)("p",null,"The second file is designed to store settings used by the Scala CLI while generating BSP configuration.\nThis includes all options, such as the Scala version, custom arguments, and more, but fortunately you shouldn't need to edit it."))}m.isMDXComponent=!0}}]);