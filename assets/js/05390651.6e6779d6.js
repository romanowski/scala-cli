"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3232],{3905:function(a,e,l){l.d(e,{Zo:function(){return o},kt:function(){return d}});var t=l(7294);function n(a,e,l){return e in a?Object.defineProperty(a,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[e]=l,a}function s(a,e){var l=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),l.push.apply(l,t)}return l}function i(a){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?s(Object(l),!0).forEach((function(e){n(a,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(l)):s(Object(l)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(l,e))}))}return a}function c(a,e){if(null==a)return{};var l,t,n=function(a,e){if(null==a)return{};var l,t,n={},s=Object.keys(a);for(t=0;t<s.length;t++)l=s[t],e.indexOf(l)>=0||(n[l]=a[l]);return n}(a,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(t=0;t<s.length;t++)l=s[t],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(a,l)&&(n[l]=a[l])}return n}var r=t.createContext({}),u=function(a){var e=t.useContext(r),l=e;return a&&(l="function"==typeof a?a(e):i(i({},e),a)),l},o=function(a){var e=u(a.components);return t.createElement(r.Provider,{value:e},a.children)},p={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},m=t.forwardRef((function(a,e){var l=a.components,n=a.mdxType,s=a.originalType,r=a.parentName,o=c(a,["components","mdxType","originalType","parentName"]),m=u(l),d=n,h=m["".concat(r,".").concat(d)]||m[d]||p[d]||s;return l?t.createElement(h,i(i({ref:e},o),{},{components:l})):t.createElement(h,i({ref:e},o))}));function d(a,e){var l=arguments,n=e&&e.mdxType;if("string"==typeof a||n){var s=l.length,i=new Array(s);i[0]=m;var c={};for(var r in e)hasOwnProperty.call(e,r)&&(c[r]=e[r]);c.originalType=a,c.mdxType="string"==typeof a?a:n,i[1]=c;for(var u=2;u<s;u++)i[u]=l[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,l)}m.displayName="MDXCreateElement"},5162:function(a,e,l){l.d(e,{Z:function(){return i}});var t=l(7294),n=l(4334),s="tabItem_Ymn6";function i(a){var e=a.children,l=a.hidden,i=a.className;return t.createElement("div",{role:"tabpanel",className:(0,n.Z)(s,i),hidden:l},e)}},5488:function(a,e,l){l.d(e,{Z:function(){return d}});var t=l(3117),n=l(7294),s=l(4334),i=l(2389),c=l(7392),r=l(7094),u=l(2466),o="tabList__CuJ",p="tabItem_LNqP";function m(a){var e,l,i=a.lazy,m=a.block,d=a.defaultValue,h=a.values,b=a.groupId,k=a.className,v=n.Children.map(a.children,(function(a){if((0,n.isValidElement)(a)&&"value"in a.props)return a;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof a.type?a.type:a.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=h?h:v.map((function(a){var e=a.props;return{value:e.value,label:e.label,attributes:e.attributes}})),g=(0,c.l)(f,(function(a,e){return a.value===e.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(a){return a.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===d?d:null!=(e=null!=d?d:null==(l=v.find((function(a){return a.props.default})))?void 0:l.props.value)?e:v[0].props.value;if(null!==w&&!f.some((function(a){return a.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+f.map((function(a){return a.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,r.U)(),N=y.tabGroupChoices,T=y.setTabGroupChoices,x=(0,n.useState)(w),I=x[0],Z=x[1],C=[],S=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var L=N[b];null!=L&&L!==I&&f.some((function(a){return a.value===L}))&&Z(L)}var E=function(a){var e=a.currentTarget,l=C.indexOf(e),t=f[l].value;t!==I&&(S(e),Z(t),null!=b&&T(b,String(t)))},O=function(a){var e,l=null;switch(a.key){case"ArrowRight":var t,n=C.indexOf(a.currentTarget)+1;l=null!=(t=C[n])?t:C[0];break;case"ArrowLeft":var s,i=C.indexOf(a.currentTarget)-1;l=null!=(s=C[i])?s:C[C.length-1]}null==(e=l)||e.focus()};return n.createElement("div",{className:(0,s.Z)("tabs-container",o)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":m},k)},f.map((function(a){var e=a.value,l=a.label,i=a.attributes;return n.createElement("li",(0,t.Z)({role:"tab",tabIndex:I===e?0:-1,"aria-selected":I===e,key:e,ref:function(a){return C.push(a)},onKeyDown:O,onFocus:E,onClick:E},i,{className:(0,s.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":I===e})}),null!=l?l:e)}))),i?(0,n.cloneElement)(v.filter((function(a){return a.props.value===I}))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},v.map((function(a,e){return(0,n.cloneElement)(a,{key:e,hidden:a.props.value!==I})}))))}function d(a){var e=(0,i.Z)();return n.createElement(m,(0,t.Z)({key:String(e)},a))}},3518:function(a,e,l){l.d(e,{Z:function(){return u}});var t=l(7294),n=l(5488),s=l(5162),i=l(2389);function c(a){var e=a.children,l=a.fallback;return(0,i.Z)()?t.createElement(t.Fragment,null,null==e?void 0:e()):null!=l?l:null}var r=l(1417);function u(a){return t.createElement(c,null,(function(){return t.createElement("div",null,t.createElement(n.Z,{groupId:"operating-systems",defaultValue:(0,r.l)(),values:[{label:"Windows",value:"windows"},{label:"macOS",value:"mac"},{label:"Linux",value:"linux"},{label:"GitHub Actions",value:"gha"}]},t.createElement(s.Z,{value:"windows"},t.createElement("a",{className:"no_monospace",href:"https://github.com/Virtuslab/scala-cli/releases/latest/download/scala-cli-x86_64-pc-win32.msi"},"Download Scala CLI for Windows")),t.createElement(s.Z,{value:"linux"},t.createElement("p",null,"Run the following one-line command in your terminal:"),t.createElement("code",null,"curl -sSLf https://virtuslab.github.io/scala-cli-packages/scala-setup.sh | sh")),t.createElement(s.Z,{value:"mac"},t.createElement("p",null,"Run the following one-line command in your terminal:"),t.createElement("code",null,"brew install Virtuslab/scala-cli/scala-cli")),t.createElement(s.Z,{value:"gha"},t.createElement("p",null,"Add the ",t.createElement("a",{href:"https://github.com/VirtusLab/scala-cli-setup"},"scala-cli-setup")," action to your workflow:"),t.createElement("code",null,"steps:",t.createElement("br",null),"\xa0\xa0\xa0\xa0- uses: coursier/cache-action@v6",t.createElement("br",null),"\xa0\xa0\xa0\xa0- uses: VirtusLab/scala-cli-setup@main",t.createElement("br",null)))))}))}},1434:function(a,e,l){l.d(e,{Z:function(){return n}});var t=l(7294);function n(a){return t.createElement("div",{className:"col col--"+a.colsize},t.createElement("h1",{className:"section-title"+(a.promptsign?" with-before":"")},a.title))}},9882:function(a,e,l){l.d(e,{Z:function(){return n}});var t=l(7294);function n(a){return t.createElement("section",{className:"section "+a.className},a.children)}},115:function(a,e,l){l.d(e,{Z:function(){return n}});var t=l(7294);function n(a){var e=a.title.toLowerCase().split(" ").join("-"),l=t.createElement("a",{href:"#"+e},">_");return t.createElement("div",{className:"section-about__wrapper row",id:e},t.createElement("div",{className:"col col--1 big-title pre-title"},l),t.createElement("div",{className:"col col--3 big-title"},t.createElement("span",{className:"pre-title-mobile"},l)," ",a.title),t.createElement("div",{className:"col col--8 description"},a.children))}},1417:function(a,e,l){l.d(e,{l:function(){return t}});var t=function(){var a=function(a){return"undefined"!=typeof window&&-1!==window.navigator.userAgent.indexOf(a)};return a("Win")?"windows":a("Mac")?"mac":"linux"}},4916:function(a,e,l){l.r(e),l.d(e,{default:function(){return w}});var t=l(7294),n=l(584),s=l(9882),i=l(1434),c=l(3518),r=l(3117),u=l(102),o=l(3905),p=l(5488),m=l(5162),d=l(115);var h=l(1073),b=function(a){function e(e){var l;return(l=a.call(this,e)||this).handleClick=l.handleClick.bind(function(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}(l)),l}(0,h.Z)(e,a);var l=e.prototype;return l.handleClick=function(a){window.location.href=this.props.href},l.render=function(){return t.createElement("button",{class:"button button--danger button--outline",onClick:this.handleClick},this.props.desc)},e}(t.Component),k=l(1417),v=["components"],f={toc:[]};function g(a){var e=a.components,l=(0,u.Z)(a,v);return(0,o.kt)("wrapper",(0,r.Z)({},f,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(d.Z,{title:"Advanced Installation",mdxType:"SectionAbout"},(0,o.kt)("div",{className:"margin--lg"}),(0,o.kt)(p.Z,{groupId:"operating-systems-specific",defaultValue:(0,k.l)(),values:[{label:"Windows",value:"windows"},{label:"MacOs",value:"mac"},{label:"MacOs/M1",value:"m1"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,o.kt)(m.Z,{value:"windows",mdxType:"TabItem"}),(0,o.kt)(m.Z,{value:"mac",mdxType:"TabItem"}),(0,o.kt)(m.Z,{value:"m1",mdxType:"TabItem"}),(0,o.kt)(m.Z,{value:"linux",mdxType:"TabItem"}))),(0,o.kt)("div",{className:"row"},(0,o.kt)("div",{className:"col col--9 col--offset-1 padding--lg advanced_install_methods"},(0,o.kt)("p",null,"Pick the installation method:"),(0,o.kt)(p.Z,{groupId:"operating-systems-specific",defaultValue:(0,k.l)(),values:[{label:"Windows",value:"windows"},{label:"MacOs",value:"mac"},{label:"MacOs/M1",value:"m1"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,o.kt)(m.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)(p.Z,{groupId:"linux",defaultValue:"manual",values:[{label:"Manual",value:"manual"},{label:"Apt",value:"apt"},{label:"Deb",value:"deb"},{label:"Yum",value:"yum"},{label:"Rpm",value:"rpm"},{label:"Alpine",value:"alpine"},{label:"Nix",value:"nix"},{label:"SDKMAN",value:"sdkman"}],mdxType:"Tabs"},(0,o.kt)(m.Z,{value:"manual",mdxType:"TabItem"},(0,o.kt)("p",null,"Download the launcher from GitHub release assets with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fL https://github.com/Virtuslab/scala-cli/releases/latest/download/scala-cli-x86_64-pc-linux.gz | gzip -d > scala-cli\nchmod +x scala-cli\nsudo mv scala-cli /usr/local/bin/scala-cli\n")),(0,o.kt)("p",null,"Check that it runs fine by running its ",(0,o.kt)("inlineCode",{parentName:"p"},"about")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli about\n"))),(0,o.kt)(m.Z,{value:"apt",mdxType:"TabItem"},(0,o.kt)("p",null,"Scala CLI can be installed via ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.debian.org/Apt"},"apt")," packager tool."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -s --compressed "https://virtuslab.github.io/scala-cli-packages/KEY.gpg" | sudo apt-key add -\nsudo curl -s --compressed -o /etc/apt/sources.list.d/scala_cli_packages.list "https://virtuslab.github.io/scala-cli-packages/debian/scala_cli_packages.list"\nsudo apt update\nsudo apt install scala-cli\n'))),(0,o.kt)(m.Z,{value:"deb",mdxType:"TabItem"},(0,o.kt)("p",null,"The Debian package can be downloaded at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Virtuslab/scala-cli/releases/latest/download/scala-cli-x86_64-pc-linux.deb"},"this address"),"."),(0,o.kt)("p",null,"Alternatively, you can download it and install it manually with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fLo scala-cli.deb https://github.com/Virtuslab/scala-cli/releases/latest/download/scala-cli-x86_64-pc-linux.deb\nsudo dpkg -i scala-cli.deb\n"))),(0,o.kt)(m.Z,{value:"yum",mdxType:"TabItem"},(0,o.kt)("p",null,"Scala CLI can be installed via ",(0,o.kt)("a",{parentName:"p",href:"http://yum.baseurl.org"},"yum")," packager tool."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo cat > /etc/yum.repos.d/virtuslab.repo << EOF\n[virtuslab-repo]\nname=VirtusLab Repo\nbaseurl=https://virtuslab.github.io/scala-cli-packages/CentOS/Packages\nenabled=1\ngpgcheck=1\ngpgkey=https://virtuslab.github.io/scala-cli-packages/KEY.gpg\nEOF\nsudo yum repo-pkgs virtuslab-repo list\nsudo yum install scala-cli\n"))),(0,o.kt)(m.Z,{value:"rpm",mdxType:"TabItem"},(0,o.kt)("p",null,"The RPM package can be downloaded at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Virtuslab/scala-cli/releases/latest/download/scala-cli-x86_64-pc-linux.rpm"},"this address"),"."),(0,o.kt)("p",null,"Alternatively, you can download it and install it manually with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fLo scala-cli.rpm https://github.com/Virtuslab/scala-cli/releases/latest/download/scala-cli-x86_64-pc-linux.rpm\nsudo rpm -i scala-cli.rpm\n"))),(0,o.kt)(m.Z,{value:"alpine",mdxType:"TabItem"},(0,o.kt)("p",null,"Download the launcher from GitHub release assets with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget -q -O scala-cli.gz  https://github.com/Virtuslab/scala-cli/releases/latest/download/scala-cli-x86_64-pc-linux-static.gz && gunzip scala-cli.gz\nchmod +x scala-cli\nmv scala-cli /usr/bin/\n")),(0,o.kt)("p",null,"Check that it runs fine by running its ",(0,o.kt)("inlineCode",{parentName:"p"},"about")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli about\n"))),(0,o.kt)(m.Z,{value:"nix",mdxType:"TabItem"},(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This method is provided and supported by the community, not the core team of Scala CLI")),(0,o.kt)("p",null,"Scala CLI can be installed with ",(0,o.kt)("a",{parentName:"p",href:"https://nixos.org"},"Nix")," with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nix-env -iA scala-cli\n"))),(0,o.kt)(m.Z,{value:"sdkman",mdxType:"TabItem"},(0,o.kt)("p",null,"Scala CLI can be installed via ",(0,o.kt)("a",{parentName:"p",href:"https://sdkman.io"},"SDKMAN")," with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sdk install scalacli\n"))))),(0,o.kt)(m.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)(p.Z,{groupId:"windows",defaultValue:"manual",values:[{label:"Manual",value:"manual"},{label:"Installer",value:"installer"},{label:"SDKMAN",value:"sdkman"},{label:"Chocolatey",value:"choco"},{label:"Scoop",value:"scoop"}],mdxType:"Tabs"},(0,o.kt)(m.Z,{value:"manual",mdxType:"TabItem"},(0,o.kt)("p",null,"Note that the Windows manual installation requires ",(0,o.kt)("a",{parentName:"p",href:"https://support.microsoft.com/en-us/topic/the-latest-supported-visual-c-downloads-2647da03-1eea-4433-9aff-95f26a218cc0"},"Visual C++ redistributable"),"\nto be installed. See below for how to install it."),(0,o.kt)("p",null,"Download the launcher from GitHub release assets with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fLo scala-cli.zip https://github.com/Virtuslab/scala-cli/releases/latest/download/scala-cli-x86_64-pc-win32.zip\ntar -xf scala-cli.zip\n")),(0,o.kt)("p",null,"Check that it runs fine by running its ",(0,o.kt)("inlineCode",{parentName:"p"},"about")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli about\n")),(0,o.kt)("p",null,"If you get an error about ",(0,o.kt)("inlineCode",{parentName:"p"},"MSVCR100.dll")," being missing, you have to install\n",(0,o.kt)("a",{parentName:"p",href:"https://support.microsoft.com/en-us/topic/the-latest-supported-visual-c-downloads-2647da03-1eea-4433-9aff-95f26a218cc0"},"Visual C++ redistributable"),". A valid version is distributed with the Scala CLI launchers.\nYou can download it ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Virtuslab/scala-cli/releases/latest/download/vc_redist.x64.exe"},"here"),",\nand install it by double-clicking on it. Once the Visual C++ redistributable runtime is installed,\ncheck that the Scala CLI runs fine by running its ",(0,o.kt)("inlineCode",{parentName:"p"},"about")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli about\n")),(0,o.kt)("p",null,"Note that the commands above don't put the ",(0,o.kt)("inlineCode",{parentName:"p"},"scala-cli")," command in the ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH"),". For that, you can create a directory, move the\nlauncher there, and add the directory to the ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH")," with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'md "%USERPROFILE%/scala-cli"\nscala-cli add-path "%USERPROFILE%/scala-cli"\nmove scala-cli.exe "%USERPROFILE%/scala-cli"\n'))),(0,o.kt)(m.Z,{value:"installer",mdxType:"TabItem"},(0,o.kt)("p",null,"Download MSI installer with Scala CLI for Windows"),(0,o.kt)(b,{desc:"Scala CLI for Windows",href:"https://github.com/Virtuslab/scala-cli/releases/latest/download/scala-cli-x86_64-pc-win32.msi",width:"190px",mdxType:"DownloadButton"})),(0,o.kt)(m.Z,{value:"sdkman",mdxType:"TabItem"},(0,o.kt)("p",null,"Scala CLI can be installed via ",(0,o.kt)("a",{parentName:"p",href:"https://sdkman.io"},"SDKMAN")," with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sdk install scalacli\n"))),(0,o.kt)(m.Z,{value:"choco",mdxType:"TabItem"},(0,o.kt)("p",null,"To install Scala CLI via ",(0,o.kt)("a",{parentName:"p",href:"https://chocolatey.org"},"Chocolatey"),", run the following command from the command line or from PowerShell:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"choco install scala-cli\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Third-party Chocolatey packages may not provide the latest version."))),(0,o.kt)(m.Z,{value:"scoop",mdxType:"TabItem"},(0,o.kt)("p",null,"To install Scala CLI via ",(0,o.kt)("a",{parentName:"p",href:"https://scoop.sh"},"Scoop"),", run the following command from the command line or from PowerShell:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"scoop install scala-cli\n"))))),(0,o.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)(p.Z,{groupId:"mac",defaultValue:"brew",values:[{label:"Manual",value:"manual"},{label:"Installer",value:"installer"},{label:"Brew",value:"brew"},{label:"Nix",value:"nix"},{label:"SDKMAN",value:"sdkman"}],mdxType:"Tabs"},(0,o.kt)(m.Z,{value:"manual",mdxType:"TabItem"},(0,o.kt)("p",null,"Download the launcher from GitHub release assets with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fL https://github.com/Virtuslab/scala-cli/releases/latest/download/scala-cli-x86_64-apple-darwin.gz | gzip -d > scala-cli\nchmod +x scala-cli\nmv scala-cli /usr/local/bin/scala-cli\n")),(0,o.kt)("p",null,"Check that it runs fine by running its ",(0,o.kt)("inlineCode",{parentName:"p"},"about")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli about\n"))),(0,o.kt)(m.Z,{value:"installer",mdxType:"TabItem"},(0,o.kt)("p",null,"Download the PKG installer with Scala CLI for MacOS"),(0,o.kt)(b,{desc:"Scala CLI for MacOS",href:"https://github.com/Virtuslab/scala-cli/releases/latest/download/scala-cli-x86_64-apple-darwin.pkg",mdxType:"DownloadButton"}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"Once downloaded, right-click on ",(0,o.kt)("inlineCode",{parentName:"p"},"scala-cli-x86_64-apple-darwin.pkg"),' from Finder and then choose "Open".')),(0,o.kt)(m.Z,{value:"brew",mdxType:"TabItem"},(0,o.kt)("p",null,"Scala CLI can be installed via ",(0,o.kt)("a",{parentName:"p",href:"https://brew.sh"},"homebrew")," with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brew install Virtuslab/scala-cli/scala-cli\n"))),(0,o.kt)(m.Z,{value:"nix",mdxType:"TabItem"},(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This method is provided and supported by the community, not the core team of Scala CLI")),(0,o.kt)("p",null,"Scala CLI can be installed with ",(0,o.kt)("a",{parentName:"p",href:"https://nixos.org"},"Nix")," with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nix-env -iA scala-cli\n"))),(0,o.kt)(m.Z,{value:"sdkman",mdxType:"TabItem"},(0,o.kt)("p",null,"Scala CLI can be installed via ",(0,o.kt)("a",{parentName:"p",href:"https://sdkman.io"},"SDKMAN")," with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sdk install scalacli\n"))))),(0,o.kt)(m.Z,{value:"m1",mdxType:"TabItem"},(0,o.kt)(p.Z,{groupId:"m1",defaultValue:"installer",values:[{label:"Manual",value:"manual"},{label:"Installer",value:"installer"}],mdxType:"Tabs"},(0,o.kt)(m.Z,{value:"manual",mdxType:"TabItem"},(0,o.kt)("p",null,"Download the launcher from GitHub release assets with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fL https://github.com/Virtuslab/scala-cli/releases/latest/download/scala-cli-aarch64-apple-darwin.gz | gzip -d > scala-cli\nchmod +x scala-cli\nmv scala-cli /usr/local/bin/scala-cli\n")),(0,o.kt)("p",null,"Check that it runs fine by running its ",(0,o.kt)("inlineCode",{parentName:"p"},"about")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli about\n"))),(0,o.kt)(m.Z,{value:"installer",mdxType:"TabItem"},(0,o.kt)("p",null,"Download the PKG installer with Scala CLI for MacOS/M1"),(0,o.kt)(b,{desc:"Scala CLI for MacOS/M1",href:"https://github.com/Virtuslab/scala-cli/releases/latest/download/scala-cli-aarch64-apple-darwin.pkg",mdxType:"DownloadButton"}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"Once downloaded, right-click on ",(0,o.kt)("inlineCode",{parentName:"p"},"scala-cli-aarch64-apple-darwin.pkg"),' from Finder and then choose "Open".'))))))),(0,o.kt)(d.Z,{title:"Standalone launcher",mdxType:"SectionAbout"},(0,o.kt)("div",{className:"margin--lg"}),(0,o.kt)(p.Z,{defaultValue:"windows"==(0,k.l)()?"windows":"macOS/Linux",groupId:"specific-standalone-launcher",values:[{label:"macOS/Linux",value:"macOS/Linux"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(m.Z,{value:"macOS/Linux",mdxType:"TabItem"}),(0,o.kt)(m.Z,{value:"windows",mdxType:"TabItem"}))),(0,o.kt)("div",{className:"row"},(0,o.kt)("div",{className:"col col--9 col--offset-1 padding--lg advanced_install_methods"},(0,o.kt)("p",null,"Script to automatically download and cache standalone ",(0,o.kt)("inlineCode",{parentName:"p"},"scala-cli")," launcher."),(0,o.kt)(p.Z,{groupId:"specific-standalone-launcher",defaultValue:"macOS/Linux",values:[{label:"macOS/Linux",value:"macOS/Linux"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(m.Z,{value:"macOS/Linux",mdxType:"TabItem"},(0,o.kt)(b,{desc:"Scala CLI launcher for macOS/Linux",href:"https://github.com/VirtusLab/scala-cli/blob/main/scala-cli.sh",width:"250px",mdxType:"DownloadButton"})),(0,o.kt)(m.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)(b,{desc:"Scala CLI launcher for Windows",href:"https://github.com/VirtusLab/scala-cli/blob/main/scala-cli.bat",width:"250px",mdxType:"DownloadButton"}))))),(0,o.kt)(d.Z,{title:"Shell completions",mdxType:"SectionAbout"},(0,o.kt)("div",{className:"margin--lg"}),(0,o.kt)(p.Z,{defaultValue:"mac"==(0,k.l)()?"zsh":"bash",groupId:"shell-specific",values:[{label:"Bash",value:"bash"},{label:"zsh",value:"zsh"}],mdxType:"Tabs"},(0,o.kt)(m.Z,{value:"bash",mdxType:"TabItem"}),(0,o.kt)(m.Z,{value:"zsh",mdxType:"TabItem"}))),(0,o.kt)("div",{className:"row"},(0,o.kt)("div",{className:"col col--9 col--offset-1 padding--lg advanced_install_methods"},(0,o.kt)("p",null,"Try the completions with"),(0,o.kt)(p.Z,{groupId:"shell-specific",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"zsh",value:"zsh"}],mdxType:"Tabs"},(0,o.kt)(m.Z,{value:"bash",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'eval "$(scala-cli install completions --env --shell bash)"\nscala-cli --<TAB>\n'))),(0,o.kt)(m.Z,{value:"zsh",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'eval "$(scala-cli install completions --env --shell zsh)"\nscala-cli --<TAB>\n')))),(0,o.kt)("p",null,"Install them on your system with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli install completions\n")),(0,o.kt)("p",null,"If any of the ",(0,o.kt)("inlineCode",{parentName:"p"},"scala-cli install completions")," command complained that your shell cannot be determined, specify it\nwith ",(0,o.kt)("inlineCode",{parentName:"p"},"--shell")),(0,o.kt)(p.Z,{groupId:"shell-specific",values:[{label:"Bash",value:"bash"},{label:"zsh",value:"zsh"}],mdxType:"Tabs"},(0,o.kt)(m.Z,{value:"bash",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli install completions --shell bash\n"))),(0,o.kt)(m.Z,{value:"zsh",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli install completions --shell zsh\n")))))),(0,o.kt)("div",{id:"scala-js"}),(0,o.kt)(d.Z,{title:"Scala.js",mdxType:"SectionAbout"}),(0,o.kt)("div",{className:"row"},(0,o.kt)("div",{className:"col col--9 col--offset-1 padding--lg advanced_install_methods"},(0,o.kt)("p",null,"To run Scala.js applications ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"Node.js")," needs to be installed. Scala CLI at this moment does not manage Node.js however it may change in the future."))),(0,o.kt)("div",{id:"scala-native"}),(0,o.kt)(d.Z,{title:"Scala Native",mdxType:"SectionAbout"}),(0,o.kt)("div",{className:"row"},(0,o.kt)("div",{className:"col col--9 col--offset-1 padding--lg advanced_install_methods"},(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://llvm.org/docs/GettingStarted.html#requirements"},"Clang")," is required to compile and run Scala Native applications. Using some functionalities known from JDK (like using ",(0,o.kt)("inlineCode",{parentName:"p"},"java.util.zip")," package) require additional packages to be installed."),(0,o.kt)("p",null,"Scala Native page contains detailed ",(0,o.kt)("a",{parentName:"p",href:"https://scala-native.readthedocs.io/en/latest/user/setup.html#installing-clang-and-runtime-dependencies"},"installation guide"),"."))),(0,o.kt)(d.Z,{title:"Uninstall scala CLI",mdxType:"SectionAbout"},(0,o.kt)("div",{className:"margin--lg"}),(0,o.kt)(p.Z,{groupId:"uninstall-specific",defaultValue:(0,k.l)(),values:[{label:"Windows",value:"windows"},{label:"MacOs",value:"mac"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,o.kt)(m.Z,{value:"windows",mdxType:"TabItem"}),(0,o.kt)(m.Z,{value:"mac",mdxType:"TabItem"}),(0,o.kt)(m.Z,{value:"linux",mdxType:"TabItem"}))),(0,o.kt)("div",{className:"row"},(0,o.kt)("div",{className:"col col--9 col--offset-1 padding--lg advanced_install_methods"},(0,o.kt)("p",null,"Pick the uninstallation method:"),(0,o.kt)(p.Z,{groupId:"uninstall-specific",defaultValue:(0,k.l)(),values:[{label:"Windows",value:"windows"},{label:"MacOs",value:"mac"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,o.kt)(m.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)(p.Z,{groupId:"linux",defaultValue:"installation-script-u",values:[{label:"Installation script",value:"installation-script-u"},{label:"Manual",value:"manual-u"},{label:"Apt",value:"apt-u"},{label:"Deb",value:"deb-u"},{label:"Yum",value:"yum-u"},{label:"Rpm",value:"rpm-u"},{label:"Alpine",value:"alpine-u"}],mdxType:"Tabs"},(0,o.kt)(m.Z,{value:"installation-script-u",mdxType:"TabItem"},(0,o.kt)("p",null,"If Scala CLI was installed via the installation script, you can uninstall it with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli uninstall\n")),(0,o.kt)("p",null,"If you have installed Scala CLI completions into your shell, ",(0,o.kt)("inlineCode",{parentName:"p"},"uninstall")," command uninstalls them by running ",(0,o.kt)("a",{parentName:"p",href:"/docs/commands/completions"},(0,o.kt)("inlineCode",{parentName:"a"},"uninstall-completions"))," command under the hood.")),(0,o.kt)(m.Z,{value:"manual-u",mdxType:"TabItem"},(0,o.kt)("p",null,"If Scala CLI was installed manually you can uninstall it with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rm /usr/local/bin/scala-cli\n"))),(0,o.kt)(m.Z,{value:"apt-u",mdxType:"TabItem"},(0,o.kt)("p",null,"If Scala CLI was installed via ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.debian.org/Apt"},"apt")," you can uninstall it with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt purge scala-cli\n"))),(0,o.kt)(m.Z,{value:"deb-u",mdxType:"TabItem"},(0,o.kt)("p",null,"If Scala CLI was installed via ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Dpkg"},"dpkg")," you can uninstall it with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dpkg --remove scala-cli\n"))),(0,o.kt)(m.Z,{value:"yum-u",mdxType:"TabItem"},(0,o.kt)("p",null,"If Scala CLI was installed via ",(0,o.kt)("a",{parentName:"p",href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/5/html/deployment_guide/c1-yum"},"yum")," you can uninstall it with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yum remove scala-cli\n"))),(0,o.kt)(m.Z,{value:"rpm-u",mdxType:"TabItem"},(0,o.kt)("p",null,"If Scala CLI was installed via ",(0,o.kt)("a",{parentName:"p",href:"https://rpm.org/"},"rpm")," you can uninstall it with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rpm -e scala-cli\n"))),(0,o.kt)(m.Z,{value:"alpine-u",mdxType:"TabItem"},(0,o.kt)("p",null,"For Alpine Linux you can uninstall scala-cli with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rm /usr/bin/scala-cli\n"))))),(0,o.kt)(m.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)(p.Z,{groupId:"windows",defaultValue:"manual-u",values:[{label:"Manual",value:"manual-u"},{label:"Installer",value:"installer-u"},{label:"Chocolatey",value:"choco"}],mdxType:"Tabs"},(0,o.kt)(m.Z,{value:"manual-u",mdxType:"TabItem"},(0,o.kt)("p",null,"If Scala CLI was installed manually you can uninstall it with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'rmdir "%USERPROFILE%/scala-cli"\n'))),(0,o.kt)(m.Z,{value:"installer-u",mdxType:"TabItem"},(0,o.kt)("p",null,"If Scala CLI was installed via the installer, you can uninstall it in the Control Panel.")),(0,o.kt)(m.Z,{value:"choco",mdxType:"TabItem"},(0,o.kt)("p",null,"To uninstall Scala CLI via ",(0,o.kt)("a",{parentName:"p",href:"https://chocolatey.org"},"Chocolatey"),", run the following command from the command line or from PowerShell:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"choco uninstall scala-cli\n"))))),(0,o.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)(p.Z,{groupId:"mac",defaultValue:"installation-script-u",values:[{label:"Installation script",value:"installation-script-u"},{label:"Manual",value:"manual-u"},{label:"Brew",value:"brew-u"}],mdxType:"Tabs"},(0,o.kt)(m.Z,{value:"installation-script-u",mdxType:"TabItem"},(0,o.kt)("p",null,"If Scala CLI was installed via the installation script, you can uninstall it with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli uninstall\n")),(0,o.kt)("p",null,"If you have installed Scala CLI completions into your shell, ",(0,o.kt)("inlineCode",{parentName:"p"},"uninstall")," command uninstalls them by running ",(0,o.kt)("a",{parentName:"p",href:"/docs/commands/completions"},(0,o.kt)("inlineCode",{parentName:"a"},"uninstall-completions"))," command under the hood.")),(0,o.kt)(m.Z,{value:"manual-u",mdxType:"TabItem"},(0,o.kt)("p",null,"If Scala CLI was installed manually you can uninstall it with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rm /usr/local/bin/scala-cli\n"))),(0,o.kt)(m.Z,{value:"brew-u",mdxType:"TabItem"},(0,o.kt)("p",null,"If Scala CLI was installed via ",(0,o.kt)("a",{parentName:"p",href:"https://brew.sh"},"homebrew")," you can uninstall it with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brew uninstall scala-cli\n")))))))))}g.isMDXComponent=!0;var w=function(a){return t.createElement(n.Z,{title:"Install Scala CLI",description:"How to install Scala CLI"},t.createElement("div",{className:"container content"},t.createElement(s.Z,{className:"section-install-cli"},t.createElement("div",{className:"row"},t.createElement(i.Z,{title:"Quick start",colsize:"4",promptsign:!0}),t.createElement("div",{className:"col col--8"},t.createElement(c.Z,null)))),t.createElement(s.Z,{className:"section-about advanced-install"},t.createElement(g,null))))}}}]);