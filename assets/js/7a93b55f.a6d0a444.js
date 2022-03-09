"use strict";(self.webpackChunkmy_documents=self.webpackChunkmy_documents||[]).push([[5197],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),i=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=i(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=i(t),f=o,d=p["".concat(s,".").concat(f)]||p[f]||u[f]||a;return t?r.createElement(d,c(c({ref:n},m),{},{components:t})):r.createElement(d,c({ref:n},m))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var i=2;i<a;i++)c[i]=t[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5567:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return i},assets:function(){return m},toc:function(){return u},default:function(){return f}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),c=["components"],l={id:"bem",title:"Bem",author:"mamadfar"},s=void 0,i={unversionedId:"Experiences/interesting-code/html-css/bem",id:"Experiences/interesting-code/html-css/bem",title:"Bem",description:"BEM",source:"@site/docs/Experiences/interesting-code/html-css/bem.mdx",sourceDirName:"Experiences/interesting-code/html-css",slug:"/Experiences/interesting-code/html-css/bem",permalink:"/my-documents/docs/Experiences/interesting-code/html-css/bem",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Experiences/interesting-code/html-css/bem.mdx",tags:[],version:"current",frontMatter:{id:"bem",title:"Bem",author:"mamadfar"},sidebar:"tutorialSidebar",previous:{title:"Flutter Widgets",permalink:"/my-documents/docs/Experiences/etc/flutter/flutter-widgets"},next:{title:"html css 1",permalink:"/my-documents/docs/Experiences/interesting-code/html-css/htmlCss1"}},m={},u=[{value:"BEM",id:"bem",level:3}],p={toc:u};function f(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"bem"},"BEM"),(0,a.kt)("p",null,"\u062f\u0631 \u0648\u0627\u0642\u0639 ",(0,a.kt)("inlineCode",{parentName:"p"},"BEM")," \u0627\u0632 3 \u0648\u0627\u0698\u0647 ",(0,a.kt)("inlineCode",{parentName:"p"},"Block")," \u0648 ",(0,a.kt)("inlineCode",{parentName:"p"},"Element")," \u0648 ",(0,a.kt)("inlineCode",{parentName:"p"},"Modifier")," \u062a\u0634\u06a9\u06cc\u0644 \u0634\u062f\u0647 \u0627\u0633\u062a."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Block")," : \u06cc\u0639\u0646\u06cc \u0628\u0627\u06cc\u062f \u0647\u062f\u0641 \u06a9\u0644\u0627\u0633 \u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647 \u0631\u0627 \u062a\u0648\u0635\u06cc\u0641 \u06a9\u0646\u062f\u060c \u0645\u062b\u0644 ",(0,a.kt)("inlineCode",{parentName:"li"},"menu."))),(0,a.kt)("div",{dir:"ltr"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'    \x3c!-- Correct. The `error` block is semantically meaningful --\x3e\n    <div class="error"></div>\n\n    \x3c!-- Incorrect. It describes the appearance --\x3e\n    <div class="red-text"></div>\n'))),(0,a.kt)("p",null,"\u06cc\u06a9 Block \u0646\u0628\u0627\u06cc\u062f \u0645\u062d\u06cc\u0637 \u0627\u0637\u0631\u0627\u0641\u0634 \u0631\u0627 \u062a\u062d\u062a \u062a\u0623\u062b\u06cc\u0631 \u0642\u0631\u0627\u0631 \u062f\u0647\u062f. \u06cc\u0639\u0646\u06cc \u0646\u0628\u0627\u06cc\u062f margin \u06cc\u0627 position \u0628\u0647 \u062e\u0635\u0648\u0635\u06cc \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u062f."),(0,a.kt)("p",null,"\u0647\u0645\u0686\u0646\u06cc\u0646 \u0648\u0642\u062a\u06cc \u06a9\u0647 \u0627\u0632 \u0631\u0648\u0634 BEM \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u062f\u060c \u0646\u0628\u0627\u06cc\u062f \u0627\u0632 \u062a\u06af\u200c\u0647\u0627 \u0648 ID \u0639\u0646\u0627\u0635\u0631 \u062f\u0631 CSS \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f\u060c \u0628\u0644\u06a9\u0647 \u0641\u0642\u0637 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u06a9\u0644\u0627\u0633 \u0645\u062c\u0627\u0632 \u0627\u0633\u062a."),(0,a.kt)("p",null,"\u0627\u06cc\u0646 \u0645\u0648\u0627\u0631\u062f\u060c \u0627\u0633\u062a\u0642\u0644\u0627\u0644 \u0645\u0648\u0631\u062f \u0646\u06cc\u0627\u0632 Block \u0631\u0627 \u0628\u0631\u0627\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647\u200c\u06cc \u0645\u062c\u062f\u062f \u06cc\u0627 \u062c\u0627\u0628\u062c\u0627\u06cc\u06cc \u0622\u0646 \u0628\u0647 \u0647\u0631 \u0642\u0633\u0645\u062a\u06cc \u0627\u0632 \u067e\u0631\u0648\u0698\u0647\u060c \u062a\u0636\u0645\u06cc\u0646 \u0645\u06cc\u200c\u06a9\u0646\u062f."),(0,a.kt)("p",null,"\ud83c\udf89 \u0628\u0644\u0627\u06a9 \u0647\u0627 \u062f\u0627\u0631\u0627\u06cc 3 \u0648\u06cc\u0698\u06af\u06cc 1. \u062a\u0648\u0631\u0641\u062a\u06af\u06cc ( Nesting ) \u0648 2. \u062c\u0627\u06af\u06cc\u0631\u06cc \u062f\u0644\u062e\u0648\u0627\u0647 ( Arbitrary placement ) \u0648 3. \u0627\u0633\u062a\u0641\u0627\u062f\u0647\u200c\u06cc \u0645\u062c\u062f\u062f (Re-use) \u0645\u06cc \u0628\u0627\u0634\u062f \u06a9\u0647\n\u0627\u0648\u0644\u06cc \u06cc\u0639\u0646\u06cc \u0647\u0631 \u0628\u0644\u0627\u06a9 \u0627\u0632 \u0686\u0646\u062f \u0628\u062e\u0634 \u062a\u0634\u06a9\u06cc\u0644 \u0634\u0648\u062f \u0648 \u0647\u0631 \u0628\u062e\u0634 \u0627\u0633\u062a\u0627\u06cc\u0644 \u062e\u0627\u0635 \u062e\u0648\u062f\u0634 \u0631\u0627 \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u062f:"),(0,a.kt)("div",{dir:"ltr"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'    \x3c!-- `header` block --\x3e\n    <header class="header">\n        \x3c!-- Nested `logo` block --\x3e\n        <div class="logo"></div>\n\n        \x3c!-- Nested `search-form` block --\x3e\n        <form class="search-form"></form>\n    </header>\n'))),(0,a.kt)("p",null,"\u0648 \u062f\u0648\u0645\u06cc \u0646\u06cc\u0632 \u06cc\u0639\u0646\u06cc \u0645\u06cc\u062a\u0648\u0627\u0646 \u0627\u06cc\u0646 \u0628\u0644\u0627\u06a9 \u0647\u0627 \u0631\u0627 \u062c\u0627\u0628\u0647 \u062c\u0627 \u06a9\u0631\u062f"),(0,a.kt)("p",null,"\u0648 \u0633\u0648\u0645\u06cc \u0647\u0645 \u06cc\u0639\u0646\u06cc \u0642\u0627\u0628\u0644\u06cc\u062a \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u062f\u0648\u0628\u0627\u0631\u0647 \u0631\u0627 \u062f\u0627\u0631\u0646\u062f."),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Element")," : \u0642\u0633\u0645\u062a\u06cc \u0627\u0632 ",(0,a.kt)("inlineCode",{parentName:"li"},"Block")," \u0645\u06cc \u0628\u0627\u0634\u062f \u06a9\u0647 \u0645\u0633\u062a\u0642\u0644 \u0642\u0627\u0628\u0644 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0646\u06cc\u0633\u062a.")),(0,a.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0645\u062b\u0627\u0644 \u0622\u06cc\u062a\u0645\u200c\u0647\u0627\u06cc \u06cc\u06a9 \u0645\u0646\u0648 \u062e\u0627\u0631\u062c \u0627\u0632 \u0641\u0636\u0627\u06cc \u0627\u0635\u0644\u06cc \u0622\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0646\u0645\u06cc\u200c\u0634\u0648\u0646\u062f \u0628\u0646\u0627\u0628\u0631\u0627\u06cc\u0646 \u0647\u0631 \u0622\u06cc\u062a\u0645 \u06cc\u06a9 \u0639\u0646\u0635\u0631 \u0627\u0633\u062a."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"element")," \u0646\u06cc\u0632 \u0645\u0627\u0646\u0646\u062f ",(0,a.kt)("inlineCode",{parentName:"p"},"block")," \u0628\u0627\u06cc\u062f \u0647\u062f\u0641 \u0631\u0627 \u062a\u0648\u0635\u06cc\u0641 \u06a9\u0646\u062f\u060c \u0646\u0647 \u0634\u06a9\u0644 \u0638\u0627\u0647\u0631\u06cc \u0631\u0627 \u0648 \u0633\u0627\u062e\u062a\u0627\u0631 \u0646\u0627\u0645 \u06a9\u0627\u0645\u0644 \u06cc\u06a9 \u0639\u0646\u0635\u0631 \u0628\u0647 \u0635\u0648\u0631\u062a ",(0,a.kt)("inlineCode",{parentName:"p"},"block-name__element-name")," \u0645\u06cc \u0628\u0627\u0634\u062f."),(0,a.kt)("div",{dir:"ltr"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'    \x3c!-- `search-form` block --\x3e\n    <form class="search-form">\n        \x3c!-- `input` element in the `search-form` block --\x3e\n        <input class="search-form__input">\n\n            \x3c!-- `button` element in the `search-form` block --\x3e\n            <button class="search-form__button">Search</button>\n    </form>\n'))),(0,a.kt)("p",null,"\ud83c\udf89 \u0646\u0627\u0645 \u0639\u0646\u0635\u0631 \u062a\u0648\u0633\u0637 2 \u0639\u062f\u062f ",(0,a.kt)("inlineCode",{parentName:"p"},"underscore(__)")," \u0645\u0634\u062e\u0635 \u0645\u06cc \u0634\u0648\u062f."),(0,a.kt)("p",null,"\u0647\u0645\u0686\u0646\u06cc\u0646 ",(0,a.kt)("inlineCode",{parentName:"p"},"element")," \u0646\u06cc\u0632 \u062f\u0627\u0631\u0627\u06cc \u0648\u06cc\u0698\u06af\u06cc \u0647\u0627\u06cc\u06cc \u0645\u06cc \u0628\u0627\u0634\u062f \u06a9\u0647 \u0627\u0648\u0644 \u062a\u0648\u0631\u0641\u062a\u06af\u06cc \u0627\u0633\u062a \u0648 \u0645\u06cc \u062a\u0648\u0627\u0646 \u0639\u0646\u0627\u0635\u0631 \u0631\u0627 \u0628\u0647 \u0635\u0648\u0631\u062a \u062a\u0648\u0631\u062a\u06af\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f:"),(0,a.kt)("div",{dir:"ltr"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'    \x3c!--\n        Correct. The structure of the full element name follows the pattern:\n        `block-name__element-name`\n    --\x3e\n    <form class="search-form">\n        <div class="search-form__content">\n\n            <input class="search-form__input">\n\n                <button class="search-form__button">Search</button>\n\n        </div>\n    </form>\n\n\n    \x3c!--\n        Incorrect. The structure of the full element name doesn\'t follow the pattern:\n        `block-name__element-name`\n    --\x3e\n    <form class="search-form">\n        <div class="search-form__content">\n\n            \x3c!-- Recommended: `search-form__input` or `search-form__content-input` --\x3e\n            <input class="search-form__content__input">\n\n                \x3c!-- Recommended: `search-form__button` or `search-form__content-button` --\x3e\n                <button class="search-form__content__button">Search</button>\n\n        </div>\n    </form>\n'))),(0,a.kt)("p",null,"\u06a9\u0647 \u062d\u0627\u0644\u062a \u062f\u0648\u0645 \u0627\u0634\u062a\u0628\u0627\u0647 \u0645\u06cc \u0628\u0627\u0634\u062f."),(0,a.kt)("p",null,"\u062f\u0648\u0645 \u0639\u0636\u0648\u06cc\u062a \u0645\u06cc \u0628\u0627\u0634\u062f \u0648 \u06cc\u0639\u0646\u06cc \u06cc\u06a9 \u0639\u0646\u0635\u0631 \u0628\u0627\u06cc\u062f \u0647\u0645\u06cc\u0634\u0647 \u0639\u0636\u0648 \u06cc\u06a9 \u0628\u0644\u0627\u06a9 \u0628\u0627\u0634\u062f \u0648 \u0645\u062c\u0632\u0627 \u0627\u0632 \u0628\u0644\u0627\u06a9 \u0646\u0628\u0627\u0634\u062f."),(0,a.kt)("div",{dir:"ltr"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'    \x3c!-- Correct. Elements are located inside the `search-form` block --\x3e\n\n    \x3c!-- `search-form` block --\x3e\n    <form class="search-form">\n\n        \x3c!-- `input` element in the `search-form` block --\x3e\n        <input class="search-form__input">\n\n            \x3c!-- `button` element in the `search-form` block --\x3e\n            <button class="search-form__button">Search</button>\n\n    </form>\n\n\n    \x3c!--\n        Incorrect. Elements are located outside of the context of\n        the `search-form` block\n    --\x3e\n\n    \x3c!-- `search-form` block --\x3e\n    <form class="search-form">\n    </form>\n\n    \x3c!-- `input` element in the `search-form` block --\x3e\n    <input class="search-form__input">\n\n        \x3c!-- `button` element in the `search-form` block--\x3e\n        <button class="search-form__button">Search</button>\n'))),(0,a.kt)("p",null,"\u0633\u0648\u0645 \u0627\u062e\u062a\u06cc\u0627\u0631\u06cc \u0628\u0648\u062f\u0646 \u06cc\u06a9 \u0639\u0646\u0635\u0631 \u0627\u0633\u062a \u06a9\u0647 \u06cc\u0639\u0646\u06cc \u06cc\u06a9 \u0628\u0644\u0627\u06a9 \u0645\u06cc \u062a\u0648\u0627\u0646\u062f \u0639\u0646\u0635\u0631\u06cc \u0646\u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u062f."),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Modifier")," : \u062f\u0631 \u0648\u0627\u0642\u0639 \u0645\u0627\u0647\u06cc\u062a\u06cc\u0633\u062a \u06a9\u0647 \u0638\u0627\u0647\u0631\u060c \u062d\u0627\u0644\u062a \u0648 \u0631\u0641\u062a\u0627\u0631 \u06cc\u06a9 \u0628\u0644\u0627\u06a9 \u06cc\u0627 \u0639\u0646\u0635\u0631 \u0631\u0627 \u0645\u0634\u062e\u0635 \u0645\u06cc \u06a9\u0646\u062f.")),(0,a.kt)("p",null,"\u0646\u0627\u0645 ",(0,a.kt)("inlineCode",{parentName:"p"},"modifier")," \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u0628\u06cc\u0627\u0646\u06af\u0631 \u0647\u0631 \u06cc\u06a9 \u0627\u0632 \u0645\u0648\u0627\u0631\u062f \u0632\u06cc\u0631 \u0628\u0627\u0634\u062f:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u0634\u06a9\u0644 \u0638\u0627\u0647\u0631\u06cc \u0622\u0646\u060c \u0645\u062b\u0644\u0627 \u0627\u06cc\u0646 \u06a9\u0647 \u0686\u0647 \u0627\u0646\u062f\u0627\u0632\u0647\u200c\u0627\u06cc \u062f\u0627\u0631\u062f (size_s)"),(0,a.kt)("li",{parentName:"ol"},"\u062d\u0627\u0644\u062a \u0622\u0646\u060c \u0645\u062b\u0644\u0627 \u0627\u06cc\u0646 \u06a9\u0647 \u0686\u0647 \u062a\u0641\u0627\u0648\u062a\u06cc \u062f\u0627\u0631\u062f (disabled \u06cc\u0627 focused)"),(0,a.kt)("li",{parentName:"ol"},"\u0631\u0641\u062a\u0627\u0631 \u0622\u0646\u060c \u0645\u062b\u0644\u0627 \u0627\u06cc\u0646 \u06a9\u0647 \u0686\u0647 \u0648\u0627\u06a9\u0646\u0634\u06cc \u0646\u0634\u0627\u0646 \u0645\u06cc\u200c\u062f\u0647\u062f (directions_left-top)")),(0,a.kt)("p",null,"\u0646\u0627\u0645 \u067e\u06cc\u0631\u0627\u06cc\u0646\u062f\u0647 \u062a\u0648\u0633\u0637 \u06cc\u06a9 underscore ( _ ) \u0627\u0632 \u0628\u0644\u0627\u06a9 \u06cc\u0627 \u0639\u0646\u0635\u0631 \u062c\u062f\u0627 \u0645\u06cc\u200c\u0634\u0648\u062f."),(0,a.kt)("p",null,"\u062f\u0631 \u0648\u0627\u0642\u0639 \u0645\u0627 2 \u062d\u0627\u0644\u062a \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 ",(0,a.kt)("inlineCode",{parentName:"p"},"modifier")," \u062f\u0627\u0631\u06cc\u0645 \u06a9\u0647\n\u0627\u0648\u0644\u06cc 1. \u0646\u0648\u0639 ",(0,a.kt)("inlineCode",{parentName:"p"},"Boolean")," \u0645\u06cc \u0628\u0627\u0634\u062f"),(0,a.kt)("div",{dir:"ltr"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'    \x3c!-- The `search-form` block has the `focused` Boolean modifier --\x3e\n    <form class="search-form search-form_focused">\n        <input class="search-form__input">\n\n            \x3c!-- The `button` element has the `disabled` Boolean modifier --\x3e\n            <button class="search-form__button search-form__button_disabled">Search</button>\n    </form>\n'))),(0,a.kt)("p",null,"\u0648 \u062f\u0648\u0645\u06cc 2. \u0646\u0648\u0639 ",(0,a.kt)("inlineCode",{parentName:"p"},"key-value")," \u0645\u06cc \u0628\u0627\u0634\u062f:"),(0,a.kt)("div",{dir:"ltr"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'    \x3c!-- The `search-form` block has the `theme` modifier with the value `islands` --\x3e\n    <form class="search-form search-form_theme_islands">\n        <input class="search-form__input">\n\n            \x3c!-- The `button` element has the `size` modifier with the value `m` --\x3e\n            <button class="search-form__button search-form__button_size_m">Search</button>\n    </form>\n\n\n\n    \x3c!-- You can\'t use two identical modifiers with different values simultaneously --\x3e\n    <form class="search-form\n             search-form_theme_islands\n             search-form_theme_lite">\n\n        <input class="search-form__input">\n\n            <button class="search-form__button\n                   search-form__button_size_s\n                   search-form__button_size_m">\n                Search\n            </button>\n    </form>\n'))),(0,a.kt)("p",null,"\ud83c\udf89 \u06cc\u06a9 ",(0,a.kt)("inlineCode",{parentName:"p"},"modifier")," \u0647\u06cc\u0686\u0648\u0642\u062a \u0628\u0647 \u062a\u0646\u0647\u0627\u06cc\u06cc \u0642\u0627\u0628\u0644 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0646\u06cc\u0633\u062a"))}f.isMDXComponent=!0}}]);