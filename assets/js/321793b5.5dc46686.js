"use strict";(self.webpackChunkmy_documents=self.webpackChunkmy_documents||[]).push([[3524],{3905:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>u});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),c=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},d=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(r),u=a,k=m["".concat(i,".").concat(u)]||m[u]||p[u]||o;return r?t.createElement(k,s(s({ref:n},d),{},{components:r})):t.createElement(k,s({ref:n},d))}));function u(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},402:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=r(7462),a=(r(7294),r(3905));const o={title:"html & css & scss"},s=void 0,l={unversionedId:"Experiences/Frontend/html-css-scss/index",id:"Experiences/Frontend/html-css-scss/index",title:"html & css & scss",description:"CSS",source:"@site/docs/Experiences/Frontend/html-css-scss/index.md",sourceDirName:"Experiences/Frontend/html-css-scss",slug:"/Experiences/Frontend/html-css-scss/",permalink:"/my-documents/docs/Experiences/Frontend/html-css-scss/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Experiences/Frontend/html-css-scss/index.md",tags:[],version:"current",frontMatter:{title:"html & css & scss"},sidebar:"tutorialSidebar",previous:{title:"PWA in React",permalink:"/my-documents/docs/Experiences/Frontend/PWA/pwa_react"},next:{title:"Next",permalink:"/my-documents/docs/Experiences/Frontend/nextjs/next-hints"}},i={},c=[{value:"CSS",id:"css",level:2},{value:"dark mode",id:"dark-mode",level:3},{value:"BEM",id:"bem",level:3},{value:"Tips",id:"tips",level:3},{value:"SCSS",id:"scss",level:2},{value:"Install",id:"install",level:3},{value:"dark mode",id:"dark-mode-1",level:3},{value:"Tips",id:"tips-1",level:3}],d={toc:c};function p(e){let{components:n,...o}=e;return(0,a.kt)("wrapper",(0,t.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"css"},"CSS"),(0,a.kt)("h3",{id:"dark-mode"},"dark mode"),(0,a.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0627\u0639\u0645\u0627\u0644 ",(0,a.kt)("inlineCode",{parentName:"p"},"dark mode")," \u0645\u06cc \u062a\u0648\u0627\u0646\u06cc\u0645 \u0627\u0632 \u0686\u0646\u062f \u0631\u0648\u0634 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645:"),(0,a.kt)("p",null,"\u062f\u0631 \u0627\u06cc\u0646 \u0631\u0648\u0634 \u0645\u06cc \u062a\u0648\u0627\u0646 \u0627\u0632 \u0642\u0627\u0628\u0644\u06cc\u062a ",(0,a.kt)("inlineCode",{parentName:"p"},"prefers-color-scheme")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645 \u06a9 \u0645\u0631\u0648\u0631\u06af\u0631 \u0647\u0627\u06cc ",(0,a.kt)("strong",{parentName:"p"},"2019")," \u0628 \u0628\u0639\u062f \u0622\u0646 \u0631\u0627 \u0633\u0627\u067e\u0648\u0631\u062a \u0645\u06cc \u06a9\u0646\u0646\u062f."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"body {\n    display: grid;\n    place-content: center; /*\u0648 \u0645\u0631\u0648\u0631\u06af\u0631 \u0647\u0627\u06cc 2017 \u0628 \u0628\u0639\u062f \u0642\u0627\u0628\u0644 \u0627\u062c\u0631\u0627 \u0627\u0633\u062a\u060c \u0645\u06cc \u062a\u0648\u0627\u0646 \u0627\u0644\u0645\u0627\u0646 \u0647\u0627 \u0631\u0627 \u0628 \u0648\u0633\u0637 \u0635\u0641\u062d\u0647 \u0628\u0628\u0631\u06cc\u0645 grid \u0648 flex \u062a\u0648\u0633\u0637 \u0627\u06cc\u0646 \u0642\u0627\u0628\u0644\u06cc\u062a \u06a9 \u0641\u0642\u0637 \u062f\u0631*/\n    height: 100vh;\n    color: darkgray; /* \u0628\u0631\u0627\u06cc \u062d\u0627\u0644\u062a \u0644\u0627\u06cc\u062a \u0627\u0639\u0645\u0627\u0644 \u0645\u06cc \u0634\u0648\u062f \u0648 \u0645\u06cc \u062a\u0648\u0627\u0646 \u067e\u06cc\u0634 \u0641\u0631\u0636 \u0642\u0631\u0627\u0631 \u0646\u062f\u0647\u06cc\u0645 */\n    background-color: lightgray; /* \u0628\u0631\u0627\u06cc \u062d\u0627\u0644\u062a \u0644\u0627\u06cc\u062a \u0627\u0639\u0645\u0627\u0644 \u0645\u06cc \u0634\u0648\u062f \u0648 \u0645\u06cc \u062a\u0648\u0627\u0646 \u067e\u06cc\u0634 \u0641\u0631\u0636 \u0642\u0631\u0627\u0631 \u0646\u062f\u0647\u06cc\u0645 */\n}\n@media (prefers-color-scheme: dark){\n    body {\n        color: #fff;\n        background-color: #000;\n    }\n}\n")),(0,a.kt)("p",null,"\ud83c\udf89 \u062f\u0631 \u0627\u06cc\u0646 \u0631\u0648\u0634 \u0647\u0631 \u06af\u0627\u0647 \u06a9 \u062d\u0627\u0644\u062a \u062f\u0633\u062a\u06af\u0627\u0647 \u0645\u0627 \u062a\u063a\u06cc\u06cc\u0631 \u06a9\u0646\u062f\u060c \u062e\u0648\u062f \u0628 \u062e\u0648\u062f \u0635\u0641\u062d\u0647 \u0627\u0632 \u062d\u0627\u0644\u062a \u062f\u0627\u0631\u06a9 \u0628 \u0644\u0627\u06cc\u062a \u062a\u0628\u062f\u06cc\u0644 \u0645\u06cc \u0634\u0648\u062f\u060c \u06cc\u0639\u0646\u06cc \u0628\u0631 \u0627\u0633\u0627\u0633 \u062a\u0646\u0638\u06cc\u0645\u0627\u062a \u062f\u0633\u062a\u06af\u0627\u0647\u0645\u0627\u0646 \u0627\u0633\u062a."),(0,a.kt)("p",null,"\ud83c\udf89 \u0647\u0645\u0686\u0646\u06cc\u0646 \u0628\u0631\u0627\u06cc \u0634\u0628\u06cc\u0647 \u0633\u0627\u0632\u06cc \u062d\u0627\u0644\u062a \u062f\u0627\u0631\u06a9 \u06cc\u0627 \u0644\u0627\u06cc\u062a \u062f\u0633\u062a\u06af\u0627\u0647 \u062f\u0631 \u0645\u0631\u0648\u0631\u06af\u0631\u060c \u0645\u06cc \u062a\u0648\u0627\u0646 \u062f\u0631 ",(0,a.kt)("inlineCode",{parentName:"p"},"F12")," \u0648 \u0628\u0627 \u0632\u062f\u0646 ",(0,a.kt)("inlineCode",{parentName:"p"},"CTRL + SHIFT + P"),"\u060c \u0627\u06cc\u0646 \u06a9\u0644\u0645\u0647 \u0631\u0627 \u0633\u0631\u0686 \u06a9\u0646\u06cc\u0645 ",(0,a.kt)("inlineCode",{parentName:"p"},"Rendering")," \u0648 \u0627\u0632 \u0642\u0633\u0645\u062a ",(0,a.kt)("inlineCode",{parentName:"p"},"Emulate CSS media feature prefers-color-scheme")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u0631\u0648 \u062d\u0627\u0644\u062a \u0627\u0648\u0644 \u0645\u06cc \u062a\u0648\u0627\u0646\u06cc\u0645 \u062f\u0642\u06cc\u0642\u0627 \u0645\u0627\u0646\u0646\u062f \u0645\u062b\u0627\u0644 \u0628\u0627\u0644\u0627\u060c \u062a\u06a9 \u062a\u06a9 \u062a\u06af \u0647\u0627 \u0648 \u06a9\u0644\u0627\u0633 \u0647\u0627 \u0631\u0627 \u062f\u0631 \u062d\u0627\u0644\u062a \u062f\u0627\u0631\u06a9 \u062a\u063a\u06cc\u06cc\u0631 \u0628\u062f\u0647\u06cc\u0645 \u06a9 \u062d\u062c\u0645 \u06a9\u062f \u0647\u0627\u06cc\u0645\u0627\u0646 \u0631\u0627 \u0632\u06cc\u0627\u062f \u0645\u06cc\u06a9\u0646\u062f."),(0,a.kt)("li",{parentName:"ol"},"\u062f\u0631 \u0631\u0648\u0634 \u062f\u0648\u0645 \u0645\u06cc \u062a\u0648\u0627\u0646 \u0627\u0632 ",(0,a.kt)("inlineCode",{parentName:"li"},"variable"),"\u0647\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},':root {\n    --primary: #000;\n    --secondary: #fff;\n    --titleColor: lime;\n}\nbody {\n    color: var("--primary");\n    background-color: var("--secondary");\n}\n.title {\n    color: var("--titleColor");\n}\n@media (prefers-color-scheme: dark){\n    :root {\n        --primary: #fff;\n        --secondary: #000;\n        --titleColor: orangered;\n    }\n}\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u062f\u0631 \u0627\u06cc\u0646 \u0631\u0648\u0634 \u0647\u0645 \u0645\u06cc \u062a\u0648\u0627\u0646 \u0627\u0632 \u06a9\u0644\u0627\u0633 \u0647\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645 \u0648 \u0622\u0646 \u0647\u0627 \u0631\u0627 \u062a\u063a\u06cc\u06cc\u0631 \u062f\u0647\u06cc\u0645:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},':root {\n    --primary-light: #000;\n    --secondary-light: #fff;\n    --primary-dark: #fff;\n    --secondary-dark: #000;\n}\n.bg-secondary {  /*light*/\n    background-color: var("--secondary-light");\n}\n.color-primary {  /*light*/\n    color: var("--primary-light");\n}\n@media (prefers-color-scheme: dark){\n    .bg-secondary {\n        background-color: var("--secondary-dark");\n    }\n    .color-primary {\n        color: var("--primary-dark");\n    }\n}\n')),(0,a.kt)("p",null,"\u062d\u0627\u0644 \u0627\u0632 \u0627\u06cc\u0646 \u06a9\u0644\u0627\u0633 \u0647\u0627 \u062f\u0631 ",(0,a.kt)("inlineCode",{parentName:"p"},"html")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc \u06a9\u0646\u06cc\u0645."),(0,a.kt)("h3",{id:"bem"},"BEM"),(0,a.kt)("p",null,"\u0633\u0627\u062e\u062a\u0627\u0631 \u0628\u0631\u0627\u06cc \u0646\u0627\u0645 \u06af\u0630\u0627\u0631\u06cc \u06a9\u0644\u0627\u0633 \u0647\u0627 \u0645\u06cc \u0628\u0627\u0634\u062f \u06a9 \u0645\u062e\u0641\u0641 ",(0,a.kt)("inlineCode",{parentName:"p"},"Block Element Modifier")," \u0645\u06cc \u0628\u0627\u0634\u062f \u0648 \u0628\u0647 \u0635\u0648\u0631\u062a \u0632\u06cc\u0631 \u0627\u0633\u062a :"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"BEM",src:r(8996).Z,width:"750",height:"243"})," ",(0,a.kt)("img",{alt:"BEM",src:r(3164).Z,width:"1600",height:"900"})," ",(0,a.kt)("img",{alt:"BEM",src:r(6137).Z,width:"1195",height:"457"})),(0,a.kt)("h3",{id:"tips"},"Tips"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u062f\u0631 \u0648\u0627\u0642\u0639 ",(0,a.kt)("inlineCode",{parentName:"li"},"()is:")," \u0648 ",(0,a.kt)("inlineCode",{parentName:"li"},"()where:")," \u0634\u0628\u06cc\u0647 \u0628 \u0647\u0645 \u0647\u0633\u062a\u0646\u062f\u060c \u0628\u0627 \u0627\u06cc\u0646 \u0641\u0631\u0642 \u06a9 ",(0,a.kt)("inlineCode",{parentName:"li"},"()where:")," \u0633\u0644\u06a9\u062a\u0648\u0631 \u0636\u0639\u06cc\u0641 \u062a\u0631\u06cc \u0646\u0633\u0628\u062a \u0628 ",(0,a.kt)("inlineCode",{parentName:"li"},"()is:")," \u0645\u06cc \u0628\u0627\u0634\u062f.")),(0,a.kt)("h2",{id:"scss"},"SCSS"),(0,a.kt)("h3",{id:"install"},"Install"),(0,a.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0646\u0635\u0628 ",(0,a.kt)("inlineCode",{parentName:"p"},"sass")," \u0628\u0627\u06cc\u062f \u0627\u0632 \u06a9\u062f \u0632\u06cc\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add sass -D\n")),(0,a.kt)("p",null,"\ud83c\udf89 \u0628 \u0635\u0648\u0631\u062a \u067e\u06cc\u0634 \u0641\u0631\u0636 ",(0,a.kt)("inlineCode",{parentName:"p"},"react")," \u0627\u06cc\u0646 \u067e\u06a9\u06cc\u062c \u0631\u0627 \u0646\u062f\u0627\u0631\u062f \u0648 \u0628\u0631\u0627\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 ",(0,a.kt)("inlineCode",{parentName:"p"},"scss")," \u0628\u0627\u06cc\u062f \u0627\u06cc\u0646 \u067e\u06a9\u06cc\u062c \u0631\u0627 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u0645."),(0,a.kt)("h3",{id:"dark-mode-1"},"dark mode"),(0,a.kt)("p",null,"\u062f\u0631 ",(0,a.kt)("inlineCode",{parentName:"p"},"scss")," \u0628\u0631\u0627\u06cc \u062f\u0627\u0631\u06a9 \u0645\u0648\u062f \u0628\u0627\u06cc\u062f \u0628 \u0635\u0648\u0631\u062a \u0632\u06cc\u0631 \u0639\u0645\u0644 \u06a9\u0646\u06cc\u0645: (\u0645\u062a\u063a\u06cc\u06cc\u0631 \u0647\u0627 \u062f\u0631 ",(0,a.kt)("inlineCode",{parentName:"p"},"scss")," \u0645\u0627\u0646\u0646\u062f \u0645\u062a\u063a\u06cc\u06cc\u0631 \u0647\u0627\u06cc \u062e\u0648\u062f ",(0,a.kt)("inlineCode",{parentName:"p"},"css"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},"$primary-light: #000;\n$secondary-light: #fff;\n$primary-dark: #000;\n$secondary-dark: #fff;\n:root {\n    --primary: #{$primary-light};\n    --secondary: #{$secondary-light};\n}\nbody {\n    background-color: var(--secondary);\n    color: var(--primary);\n}\n@media (prefers-color-scheme: dark) {\n    :root {\n        --primary: #{$secondary-dark};\n        --secondary: #{$primary-dark};\n    }\n}\n")),(0,a.kt)("h3",{id:"tips-1"},"Tips"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u0647\u0631\u06af\u0627\u0647 \u0628\u062e\u0648\u0627\u0647\u06cc\u0645 \u06cc\u06a9 \u06a9\u0644\u0627\u0633 \u062a\u0631\u06a9\u06cc\u0628\u06cc \u0631\u0627 \u06a9 \u0635\u0648\u0631\u062a \u062a\u0648\u0648 \u062f\u0631 \u062a\u0648\u0648 \u0646\u0648\u0634\u062a\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a \u0631\u0627 \u062f\u0631 \u06cc\u06a9\u062c\u0627\u06cc \u062f\u06cc\u06af\u0631 ",(0,a.kt)("inlineCode",{parentName:"li"},"extend")," \u06a9\u0646\u06cc\u0645\u060c \u0628\u0627\u06cc\u062f \u0628\u0647 \u0635\u0648\u0631\u062a \u0632\u06cc\u0631 \u0639\u0645\u0644 \u06a9\u0646\u06cc\u0645:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},"%message-info, .message.info {\n  border: 1px solid black;\n  font-size: 1.5rem;\n}\n\n.heads-up {\n  // Instead of `.message.info`.\n  @extend %message-info;\n}\n")))}p.isMDXComponent=!0},3164:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/bem-naming-structure-2-e148477be1898144b8c540804d90c43e.png"},6137:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/bem-naming-structure-3-d46b698a88d5db5d2c0cfb23874297bb.png"},8996:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/bem-naming-structure-e8eba1e2dd832a2edeedc7a787a18f59.svg"}}]);