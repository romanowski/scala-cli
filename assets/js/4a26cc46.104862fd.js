"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9962],{3905:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),p=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},s=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=p(r),m=a,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(g,l(l({ref:e},s),{},{components:r})):n.createElement(g,l({ref:e},s))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6137:function(t,e,r){r.r(e),r.d(e,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var n=r(3117),a=r(102),i=(r(7294),r(3905)),l=["components"],o={title:"Supported scala versions",sidebar_position:7},c=void 0,p={unversionedId:"reference/scala-versions",id:"reference/scala-versions",title:"Supported scala versions",description:"Currently, Scala CLI supports Scala 3, 2.13 and 2.12. The table below lists the last supported version of Scala in Scala",source:"@site/docs/reference/scala-versions.md",sourceDirName:"reference",slug:"/reference/scala-versions",permalink:"/scala-cli/docs/reference/scala-versions",draft:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/reference/scala-versions.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Supported scala versions",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Interaction with Bloop server",permalink:"/scala-cli/docs/reference/bloop"},next:{title:"Password options",permalink:"/scala-cli/docs/reference/password-options"}},s={},u=[],d={toc:u};function m(t){var e=t.components,r=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Currently, Scala CLI supports Scala 3, 2.13 and 2.12. The table below lists the last supported version of Scala in Scala\nCLI. If you want to use a newer Scala version,\nit is recommended to update scala-cli."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Scala CLI versions"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Scala 3"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Scala 2.13"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Scala 2.12"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0.0.9"),(0,i.kt)("td",{parentName:"tr",align:"center"},"3.0.2"),(0,i.kt)("td",{parentName:"tr",align:"right"},"2.13.7"),(0,i.kt)("td",{parentName:"tr",align:"right"},"2.12.7")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0.1.0 - 0.1.3"),(0,i.kt)("td",{parentName:"tr",align:"center"},"3.1.1"),(0,i.kt)("td",{parentName:"tr",align:"right"},"2.13.8"),(0,i.kt)("td",{parentName:"tr",align:"right"},"2.12.15")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0.1.4 - 0.1.7"),(0,i.kt)("td",{parentName:"tr",align:"center"},"3.1.2"),(0,i.kt)("td",{parentName:"tr",align:"right"},"2.13.8"),(0,i.kt)("td",{parentName:"tr",align:"right"},"2.12.15")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0.1.8"),(0,i.kt)("td",{parentName:"tr",align:"center"},"3.1.2"),(0,i.kt)("td",{parentName:"tr",align:"right"},"2.13.8"),(0,i.kt)("td",{parentName:"tr",align:"right"},"2.12.16")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0.1.9 - 0.1.12"),(0,i.kt)("td",{parentName:"tr",align:"center"},"3.1.3"),(0,i.kt)("td",{parentName:"tr",align:"right"},"2.13.8"),(0,i.kt)("td",{parentName:"tr",align:"right"},"2.12.16")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0.1.13 - 0.1.15"),(0,i.kt)("td",{parentName:"tr",align:"center"},"3.2.0"),(0,i.kt)("td",{parentName:"tr",align:"right"},"2.13.8"),(0,i.kt)("td",{parentName:"tr",align:"right"},"2.12.16")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0.1.16 - current"),(0,i.kt)("td",{parentName:"tr",align:"center"},"3.2.0"),(0,i.kt)("td",{parentName:"tr",align:"right"},"2.13.10"),(0,i.kt)("td",{parentName:"tr",align:"right"},"2.12.17")))))}m.isMDXComponent=!0}}]);