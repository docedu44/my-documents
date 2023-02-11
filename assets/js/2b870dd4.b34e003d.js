"use strict";(self.webpackChunkmy_documents=self.webpackChunkmy_documents||[]).push([[1117],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1298:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={},a=void 0,l={unversionedId:"Experiences/etc/windows",id:"Experiences/etc/windows",title:"windows",description:"kill port",source:"@site/docs/Experiences/etc/windows.mdx",sourceDirName:"Experiences/etc",slug:"/Experiences/etc/windows",permalink:"/my-documents/docs/Experiences/etc/windows",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Experiences/etc/windows.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Flutter Widgets",permalink:"/my-documents/docs/Experiences/etc/flutter/flutter-widgets"},next:{title:"Hints",permalink:"/my-documents/docs/Experiences/hints/hint"}},c={},p=[{value:"kill port",id:"kill-port",level:3}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"kill-port"},"kill port"),(0,o.kt)("p",null,"\ud83c\udf89 \u0628\u0631\u0627\u06cc \u0628\u0633\u062a\u0646 \u06cc\u06a9 ",(0,o.kt)("inlineCode",{parentName:"p"},"port")," \u062e\u0627\u0635 \u062f\u0631 \u0648\u06cc\u0646\u062f\u0648\u0632 \u0645\u06cc \u062a\u0648\u0627\u0646 \u0627\u0632 2 \u0631\u0648\u0634 \u0632\u06cc\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u062e\u0648\u062f \u062f\u0633\u062a\u0648\u0631\u0627\u062a \u0648\u06cc\u0646\u062f\u0648\u0632")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"netstat -ano | findstr :<port> # \u0622\u0646 pid \u067e\u06cc\u062f\u0627 \u06a9\u0631\u062f\u0646 \u067e\u0648\u0631\u062a \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u0648\ntaskkill /PID <port pid> /F # \u0631\u0627 \u0628\u0632\u0646\u06cc\u0645 \u062a\u0627 \u067e\u0648\u0631\u062a \u0628\u0633\u062a\u0647 \u0634\u0648\u062f pid \u062f\u0631 \u0648\u0627\u0642\u0639 \u062f\u0631 \u062f\u0633\u062a\u0648\u0631 \u0642\u0628\u0644\u06cc \u0628\u0627\u06cc\u062f \u0639\u062f\u062f \u062f\u0627\u062f\u0647 \u0634\u062f\u0647 \u0628 \u0639\u0646\u0648\u0627\u0646\n")),(0,o.kt)("p",null,"\ud83c\udf89 \u062d\u062a\u0645\u0627 \u0628\u0627\u06cc\u062f \u062f\u0631 \u062d\u0627\u0644\u062a ",(0,o.kt)("inlineCode",{parentName:"p"},"adminstrator")," \u0645\u062d\u06cc\u0637 ",(0,o.kt)("inlineCode",{parentName:"p"},"cmd")," \u0631\u0627 \u0628\u0627\u0632 \u06a9\u0646\u06cc\u0645(\u062f\u0631 \u0645\u062d\u06cc\u0637 ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," \u0628\u0627\u06cc\u062f ",(0,o.kt)("inlineCode",{parentName:"p"},"cmd")," \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0631\u062f\u0647 \u0633\u067e\u0633 \u062f\u06a9\u0645\u0647 \u0647\u0627\u06cc ",(0,o.kt)("inlineCode",{parentName:"p"},"ctrl + shift + enter")," \u0631\u0627 \u0645\u06cc \u0632\u0646\u06cc\u0645)"),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u067e\u06a9\u06cc\u062c \u0647\u0627\u06cc ",(0,o.kt)("inlineCode",{parentName:"li"},"node"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx kill-port <port>\n")))}u.isMDXComponent=!0}}]);