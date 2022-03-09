"use strict";(self.webpackChunkmy_documents=self.webpackChunkmy_documents||[]).push([[247],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||c;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<c;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},220:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return u},toc:function(){return s},default:function(){return m}});var n=r(7462),a=r(3366),c=(r(7294),r(3905)),o=["components"],i={id:"react-starter",title:"react"},l=void 0,p={unversionedId:"Experiences/react/react/react-starter",id:"Experiences/react/react/react-starter",title:"react",description:"install",source:"@site/docs/Experiences/react/react/react-starter.mdx",sourceDirName:"Experiences/react/react",slug:"/Experiences/react/react/react-starter",permalink:"/my-documents/docs/Experiences/react/react/react-starter",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Experiences/react/react/react-starter.mdx",tags:[],version:"current",frontMatter:{id:"react-starter",title:"react"},sidebar:"tutorialSidebar",previous:{title:"react and react native",permalink:"/my-documents/docs/Experiences/react/react-react-native"},next:{title:"reducers",permalink:"/my-documents/docs/Experiences/react/redux/reducers"}},u={},s=[{value:"install",id:"install",level:2},{value:"packages",id:"packages",level:2},{value:"router",id:"router",level:3}],d={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"install"},"install"),(0,c.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0646\u0635\u0628 \u0628\u0647\u062a\u0631 \u0627\u0633\u062a \u06a9 \u062e\u0648\u062f ",(0,c.kt)("inlineCode",{parentName:"p"},"create-react-app")," \u0631\u0627 \u0627\u0632 \u06af\u0644\u0648\u0628\u0627\u0644 \u062d\u0630\u0641 \u06a9\u0646\u06cc\u0645 \u0648 \u0628\u062c\u0627\u06cc \u0622\u0646 \u0627\u0632 ",(0,c.kt)("inlineCode",{parentName:"p"},"npx")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645 \u062a\u0627 \u0647\u0645\u06cc\u0634\u0647 \u0622\u062e\u0631\u06cc\u0646 \u0646\u0633\u062e\u0647 \u0631\u0627 \u0628\u0631\u0627\u06cc \u0645\u0627 \u062f\u0627\u0646\u0644\u0648\u062f \u06a9\u0646\u062f:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"npm un -g create-react-app\n# or\nyarn global remove create-react-app\n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"npx create-react-app first-project\n")),(0,c.kt)("h2",{id:"packages"},"packages"),(0,c.kt)("h3",{id:"router"},"router"),(0,c.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0646\u0635\u0628 \u0631\u0648\u062a\u0631 \u0628\u0627\u06cc\u062f \u0627\u0632 \u062f\u0633\u062a\u0648\u0631 \u0632\u06cc\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add react-router-dom\n")),(0,c.kt)("p",null,"\u062d\u0627\u0644 \u0628\u0627\u06cc\u062f \u062f\u0631 ",(0,c.kt)("inlineCode",{parentName:"p"},"index.js")," \u0627\u0632 \u0622\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx"},'ReactDOM.render(\n  <BrowserRouter>\n    <App />\n  </BrowserRouter>,\n  document.getElementById("root")\n);\n')),(0,c.kt)("p",null,"\u062d\u0627\u0644 \u0645\u06cc \u062a\u0648\u0627\u0646 \u0647\u0645\u0647 \u062c\u0627\u06cc \u0628\u0631\u0646\u0627\u0645\u0647 \u0627\u0632 ",(0,c.kt)("inlineCode",{parentName:"p"},"Routes")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645"))}m.isMDXComponent=!0}}]);