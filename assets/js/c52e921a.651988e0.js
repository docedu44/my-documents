"use strict";(self.webpackChunkmy_documents=self.webpackChunkmy_documents||[]).push([[1603],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2347:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"udemy-testing-react-library",title:"udemy testing react library"},p=void 0,c={unversionedId:"Experiences/react-test/udemy-testing-react-library",id:"Experiences/react-test/udemy-testing-react-library",title:"udemy testing react library",description:"Testing React Library",source:"@site/docs/Experiences/react-test/udemy-testing-react-library.mdx",sourceDirName:"Experiences/react-test",slug:"/Experiences/react-test/udemy-testing-react-library",permalink:"/my-documents/docs/Experiences/react-test/udemy-testing-react-library",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Experiences/react-test/udemy-testing-react-library.mdx",tags:[],version:"current",frontMatter:{id:"udemy-testing-react-library",title:"udemy testing react library"},sidebar:"tutorialSidebar",previous:{title:"test and eslint",permalink:"/my-documents/docs/Experiences/react-test/ts-jest"},next:{title:"\u062a\u06a9\u0631\u0627\u0631 \u06a9\u0644\u0627\u0633 \u0647\u0627",permalink:"/my-documents/docs/Experiences/tailwind/custom-tailwind-style"}},s={},u=[{value:"Testing React Library",id:"testing-react-library",level:2},{value:"Queries and test tools",id:"queries-and-test-tools",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"testing-react-library"},"Testing React Library"),(0,i.kt)("p",null,"\u062f\u0631\u062d\u0627\u0644\u062a \u06a9\u0644\u06cc \u0645\u0627 4 \u0646\u0648\u0639 \u062a\u0633\u062a \u062f\u0627\u0631\u06cc\u0645:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Unit tests"))),(0,i.kt)("p",null,"\u062a\u0633\u062a \u0628\u062e\u0634 \u0628 \u0628\u062e\u0634 \u06a9\u062f \u0647\u0627\u06cc \u0647\u0631 \u0635\u0641\u062d\u0647 \u06cc\u0627 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a"),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Integration tests"))),(0,i.kt)("p",null,"\u062a\u0633\u062a \u0686\u0646\u062f \u0641\u0627\u0646\u06a9\u0634\u0646 \u06cc\u0627 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u06a9 \u062f\u0631 \u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0627 \u06cc\u06a9\u062f\u06cc\u06af\u0631 \u0647\u0633\u062a\u0646\u062f."),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Functional tests"))),(0,i.kt)("p",null,"\u062a\u0633\u062a \u0631\u0641\u062a\u0627\u0631 \u0647\u0627\u06cc \u0646\u0631\u0645 \u0627\u0641\u0632\u0627\u0631 \u0628 \u0635\u0648\u0631\u062a \u06a9\u0644\u06cc \u06a9 \u0627\u0646\u062a\u0638\u0627\u0631 \u062f\u0627\u0631\u06cc\u0645 \u06a9 \u0622\u0646 \u0631\u0641\u062a\u0627\u0631 \u0647\u0627 \u0631\u0627 \u0647\u0646\u06af\u0627\u0645 \u0627\u062c\u0631\u0627 \u0627\u0632 \u062e\u0648\u062f \u0646\u0634\u0627\u0646 \u062f\u0647\u062f."),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Acceptance / End-to-end (E2E) tests"))),(0,i.kt)("p",null,"\u0627\u06cc\u0646 \u0628\u062e\u0634 \u062a\u0648\u0633\u0637 \u0646\u0631\u0645 \u0627\u0641\u0632\u0627\u0631 \u0647\u0627\u06cc\u06cc \u0645\u062b\u0644 ",(0,i.kt)("inlineCode",{parentName:"p"},"Cypress")," \u0648 ",(0,i.kt)("inlineCode",{parentName:"p"},"Selenium")," \u0642\u0627\u0628\u0644 \u0627\u062c\u0631\u0627 \u0645\u06cc \u0628\u0627\u0634\u062f \u06a9 \u0628 \u0645\u0631\u0648\u0631\u06af\u0631 \u0627\u062d\u062a\u06cc\u0627\u062c \u062f\u0627\u0631\u062f \u0648 \u062f\u0631 \u062d\u0648\u0632\u0647 \u06a9\u0627\u0631\u06cc ",(0,i.kt)("inlineCode",{parentName:"p"},"React testing library")," \u0646\u0645\u06cc \u0628\u0627\u0634\u062f."),(0,i.kt)("p",null,"\ud83c\udf89 \u0645\u0648\u0631\u062f 3 \u0628\u0647\u062a\u0631 \u0627\u0632 \u0645\u0648\u0631\u062f 1 \u0627\u0633\u062a \u0648\u0644\u06cc \u062f\u0631 \u062d\u0627\u0644\u062a \u06a9\u0644\u06cc \u0634\u0628\u06cc\u0647 \u0628 \u0647\u0645 \u0647\u0633\u062a\u0646\u062f."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0645\u0632\u0627\u06cc\u0627 \u0648 \u0645\u0639\u0627\u06cc\u0628 \u0645\u0648\u0631\u062f 3")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u0645\u0648\u0631\u062f 3 \u0631\u0641\u062a\u0627\u0631 \u0647\u0627\u06cc \u0628\u0631\u0646\u0627\u0645\u0647 \u0631\u0627 \u062a\u0633\u062a \u0645\u06cc\u06a9\u0646\u062f \u0648 \u0627\u06cc\u0646 \u0628\u0627\u0639\u062b \u0645\u06cc \u0634\u0648\u062f \u06a9 \u0627\u06af\u0631 \u0628\u0639\u062f\u0627 \u062a\u0633\u062a \u0647\u0627 \u0631\u0627 \u062a\u063a\u06cc\u06cc\u0631 \u062f\u0647\u06cc\u0645\u060c \u0628\u0627\u0632 \u0647\u0645 \u062a\u0633\u062a \u0647\u0627 ",(0,i.kt)("inlineCode",{parentName:"p"},"pass")," \u0645\u06cc \u0634\u0648\u0646\u062f")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u0647\u0645\u0686\u0646\u06cc\u0646 \u062a\u0633\u062a \u0647\u0627 \u0628\u06cc\u0634\u062a\u0631 \u0634\u0628\u06cc\u0647 \u0628 \u0631\u0641\u062a\u0627\u0631 \u0647\u0627\u06cc ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," \u0645\u06cc \u0628\u0627\u0634\u062f")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u062f\u0631 \u062d\u0627\u0644\u062a \u06a9\u0644\u06cc ",(0,i.kt)("inlineCode",{parentName:"p"},"debug")," \u06a9\u0631\u062f\u0646 \u062f\u0631 \u0627\u06cc\u0646 \u062d\u0627\u0644\u062a \u0633\u062e\u062a \u0627\u0633\u062a"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0645\u0632\u0627\u06cc\u0627 \u0648 \u0645\u0639\u0627\u06cc\u0628 \u0645\u0648\u0631\u062f 1")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u062e\u06cc\u0644\u06cc \u0633\u0631\u06cc\u0639 \u0645\u06cc \u062a\u0648\u0627\u0646 \u062e\u0637\u0627 \u0647\u0627 \u0631\u0627 \u067e\u06cc\u062f\u0627 \u06a9\u0646\u06cc\u0645 \u0648 \u0631\u0641\u0639 \u06a9\u0646\u06cc\u0645")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u062e\u06cc\u0644\u06cc \u0634\u0628\u06cc\u0647 \u0628 \u0631\u0641\u062a\u0627\u0631 \u0647\u0627\u06cc ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," \u0646\u06cc\u0633\u062a \u0648 \u0628\u0639\u0636\u06cc \u0648\u0642\u062a \u0647\u0627 \u062a\u0633\u062a \u0647\u0627 \u0634\u06a9\u0644 \u0627\u0641\u0631\u0627\u0637\u06cc \u062f\u0627\u0631\u0646\u062f")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u0627\u06af\u0631 \u0622\u0646 \u0628\u062e\u0634 \u0631\u0627 \u062a\u063a\u06cc\u06cc\u0631 \u062f\u0647\u06cc\u0645\u060c \u0627\u0645\u06a9\u0627\u0646 ",(0,i.kt)("inlineCode",{parentName:"p"},"fail")," \u0634\u062f\u0646 \u062a\u0633\u062a \u0647\u0627 \u062e\u06cc\u0644\u06cc \u0632\u06cc\u0627\u062f \u0627\u0633\u062a."))),(0,i.kt)("p",null,"\ud83c\udf89 \u0628\u0647\u062a\u0631 \u0627\u0633\u062a \u06a9 \u0627\u0632 ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," \u0647\u0627\u06cc\u06cc \u06a9 \u062e\u06cc\u0644\u06cc \u062e\u0627\u0635 \u062a\u0631 \u0647\u0633\u062a\u0646\u062f \u0628\u0631\u0627\u06cc \u0627\u0646\u062a\u062e\u0627\u0628 \u0627\u0644\u0645\u0627\u0646 \u0647\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'  const linkElement = screen.getByRole("link", {name: /learn react/i});\n  expect(linkElement).toBeInTheDocument();\n')),(0,i.kt)("p",null,"\u06a9 \u0645\u06cc \u062a\u0648\u0627\u0646 \u062a\u0645\u0627\u0645\u06cc ",(0,i.kt)("inlineCode",{parentName:"p"},"role")," \u0647\u0627\u06cc \u067e\u06cc\u0634 \u0641\u0631\u0636 \u062a\u0645\u0627\u0645 \u062a\u06af \u0647\u0627\u06cc ",(0,i.kt)("inlineCode",{parentName:"p"},"html")," \u0631\u0627 \u0627\u0632 \u0633\u0627\u06cc\u062a \u0632\u06cc\u0631 \u067e\u06cc\u062f\u0627 \u06a9\u0631\u062f \u0648 \u0647\u0645\u0686\u0646\u06cc\u0646 \u0645\u06cc \u062a\u0648\u0627\u0646 \u062a\u0648\u0633\u0637 \u0648\u06cc\u0698\u06af\u06cc ",(0,i.kt)("inlineCode",{parentName:"p"},"role"),"\u060c \u0631\u0648\u0644 \u0647\u0631 \u062a\u06af \u0631\u0627 \u062a\u063a\u06cc\u06cc\u0631 \u062f\u0627\u062f:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria/"},"tag role")),(0,i.kt)("p",null,"\u0647\u0645\u0686\u0646\u06cc\u0646 \u0645\u06cc \u062a\u0648\u0627\u0646 \u0627\u0632 \u0644\u06cc\u0646\u06a9 \u0632\u06cc\u0631 \u062a\u0631\u062a\u06cc\u0628 ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," \u0647\u0627\u06cc \u0645\u0647\u0645 \u0631\u0627 \u062f\u0631 ",(0,i.kt)("inlineCode",{parentName:"p"},"react-testing-library")," \u0645\u0634\u0627\u0647\u062f\u0647 \u06a9\u0631\u062f:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://testing-library.com/docs/queries/about/#priority"},"testing queries")),(0,i.kt)("p",null,"\ud83c\udf89 \u0627\u06af\u0631 ",(0,i.kt)("inlineCode",{parentName:"p"},"role")," \u0627\u0644\u0645\u0627\u0646\u06cc \u0631\u0627 \u0646\u0645\u06cc \u062f\u0627\u0646\u06cc\u0645\u060c \u06a9\u0627\u0641\u06cc\u0633\u062a \u06cc\u06a9 \u062a\u0633\u062a \u0633\u0627\u062f\u0647 \u0628\u0631\u0627\u06cc \u0622\u0646 \u0628\u0646\u0648\u06cc\u0633\u06cc\u0645 \u0628\u0627 ",(0,i.kt)("inlineCode",{parentName:"p"},"getByRole")," \u0648 \u062f\u0631 \u06a9\u0646\u0633\u0648\u0644 \u0645\u06cc \u062a\u0648\u0627\u0646 ",(0,i.kt)("inlineCode",{parentName:"p"},"role")," \u0622\u0646 \u0631\u0627 \u062f\u06cc\u062f."),(0,i.kt)("p",null,"\ud83c\udf89 \u0647\u0646\u06af\u0627\u0645\u06cc \u06a9 \u0645\u0627 \u06a9\u062f \u0647\u0627\u06cc\u0645\u0627\u0646 \u0631\u0627 ",(0,i.kt)("inlineCode",{parentName:"p"},"commit")," \u0645\u06cc \u06a9\u0646\u06cc\u0645\u060c ",(0,i.kt)("inlineCode",{parentName:"p"},"testing library")," \u0645\u062a\u0648\u062c\u0647 \u0645\u06cc \u0634\u0648\u062f \u0648 \u0647\u0646\u06af\u0627\u0645 \u062a\u0633\u062a \u06a9\u0631\u062f\u0646\u060c \u062a\u0633\u062a \u0647\u0627\u06cc \u0642\u0628\u0644\u06cc \u0631\u0627 \u062f\u0648\u0628\u0627\u0631\u0647 \u0627\u062c\u0631\u0627 \u0646\u0645\u06cc \u06a9\u0646\u062f."),(0,i.kt)("h3",{id:"queries-and-test-tools"},"Queries and test tools"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'screen.getByRole("button", {name: "mamad"})'),":\n\u0647\u0631 \u06af\u0627\u0647 \u0628\u062e\u0648\u0627\u0647\u06cc\u0645 \u0627\u0644\u0645\u0627\u0646\u06cc \u0631\u0627 \u0627\u0632 \u0635\u0641\u062d\u0647 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u0645\u060c \u0645\u06cc\u062a\u0648\u0627\u0646\u06cc\u0645 \u0627\u0632 \u0627\u06cc\u0646 ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," \u0647\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645 \u06a9 \u0644\u06cc\u0646\u06a9 \u0622\u0646 \u062f\u0631 \u0628\u0627\u0644\u0627 \u0645\u0648\u062c\u0648\u062f \u0627\u0633\u062a."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"fireEvent.click(colorButton)"),":\n\u0628\u0631\u0627\u06cc \u0632\u0645\u0627\u0646\u06cc \u06a9 \u0645\u06cc\u062e\u0648\u0627\u0647\u06cc\u0645 \u0631\u0641\u062a\u0627\u0631 \u06a9\u0627\u0631\u0628\u0631 \u0631\u0627 \u0634\u0628\u06cc\u0647 \u0633\u0627\u0632\u06cc \u06a9\u0646\u06cc\u0645\u060c \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc \u0634\u0648\u062f \u06a9 \u0634\u0627\u0645\u0644 \u062a\u0645\u0627\u0645 \u0631\u0648\u06cc\u062f\u0627\u062f \u0647\u0627 \u0645\u06cc \u0628\u0627\u0634\u062f."),(0,i.kt)("p",null,"\ud83c\udf89 \u0628\u0647\u062a\u0631 \u0627\u0633\u062a \u0628\u062c\u0627\u06cc ",(0,i.kt)("inlineCode",{parentName:"p"},"fireEvent")," \u0627\u0632 ",(0,i.kt)("inlineCode",{parentName:"p"},"userEvent")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u0648\u062f \u06a9 \u0627\u0628\u062a\u062f\u0627 \u0628\u0627\u06cc\u062f \u0622\u0646 \u0631\u0627 \u0627\u062f\u062f \u06a9\u0631\u062f:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import User from "@testing-library/user-event";\nUser.click(colorButton)\n')),(0,i.kt)("p",null,"\ud83c\udf89 \u062a\u0648\u0633\u0637 \u0644\u06cc\u0646\u06a9 \u0632\u06cc\u0631 \u0645\u06cc \u062a\u0648\u0627\u0646 \u0644\u06cc\u0633\u062a \u062a\u0645\u0627\u0645 \u0645\u062a\u062f \u0647\u0627\u06cc \u0645\u0631\u0628\u0648\u0637 \u0628 ",(0,i.kt)("inlineCode",{parentName:"p"},"dom")," \u0648 ",(0,i.kt)("inlineCode",{parentName:"p"},"expect")," \u0631\u0627 \u0645\u0634\u0627\u0647\u062f\u0647 \u06a9\u0631\u062f:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/testing-library/jest-dom"},"jest dom")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"toBeEnabled()"),":\n\u06cc\u0639\u0646\u06cc \u0627\u0646\u062a\u0638\u0627\u0631 \u062f\u0627\u0631\u06cc\u0645 \u06a9 \u0627\u0644\u0645\u0627\u0646 \u0645\u0627 ",(0,i.kt)("inlineCode",{parentName:"p"},"enable")," \u0628\u0627\u0634\u062f."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"toBeChecked()"),":\n\u06cc\u0639\u0646\u06cc \u0627\u0646\u062a\u0638\u0627\u0631 \u062f\u0627\u0631\u06cc\u0645 \u06a9 \u0627\u0644\u0645\u0627\u0646 \u0645\u0627 ",(0,i.kt)("inlineCode",{parentName:"p"},"check")," \u0634\u062f\u0647 \u0628\u0627\u0634\u062f \u06a9 \u0628\u0631\u0627\u06cc ",(0,i.kt)("inlineCode",{parentName:"p"},"radio")," \u0648 ",(0,i.kt)("inlineCode",{parentName:"p"},"checkbox")," \u0647\u0627 \u06a9\u0627\u0631\u0628\u0631\u062f \u062f\u0627\u0631\u062f."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"not.toBeChecked()"),":\n\u0647\u0645\u0627\u0646 \u0628\u0627\u0644\u0627\u06cc\u06cc \u0645\u06cc \u0628\u0627\u0634\u062f \u0627\u0645\u0627 \u0628\u0627 ",(0,i.kt)("inlineCode",{parentName:"p"},"not")," \u0645\u0634\u062e\u0635 \u0645\u06cc \u06a9\u0646\u06cc\u0645 \u06a9 \u0686\u06a9 \u0646\u0634\u062f\u0647 \u0628\u0627\u0634\u062f \u06a9 ",(0,i.kt)("inlineCode",{parentName:"p"},"not")," \u0628\u0631\u0627\u06cc \u0647\u0645\u0647 \u06a9\u0648\u0626\u0631\u06cc \u0647\u0627 \u0645\u0648\u0631\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0642\u0631\u0627\u0631 \u0645\u06cc \u06af\u06cc\u0631\u062f."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"toBeDisabled"),":\n\u06cc\u0639\u0646\u06cc \u0627\u0646\u062a\u0638\u0627\u0631 \u062f\u0627\u0631\u06cc\u0645 \u06a9 \u0627\u0644\u0645\u0627\u0646 \u0645\u0627 ",(0,i.kt)("inlineCode",{parentName:"p"},"disable")," \u0628\u0627\u0634\u062f."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'toHaveStyle({color: "blue"})'),":\n\u06cc\u0639\u0646\u06cc \u0627\u0646\u062a\u0638\u0627\u0631 \u062f\u0627\u0631\u06cc\u0645 \u06a9 \u0627\u0644\u0645\u0627\u0646 \u0645\u0627 \u0627\u0633\u062a\u0627\u06cc\u0644 \u0647\u0627\u06cc\u06cc \u06a9 \u062f\u0631\u0648\u0646 \u0627\u06cc\u0646 \u0645\u062a\u062f \u062a\u0639\u0631\u06cc\u0641 \u0645\u06cc\u06a9\u0646\u06cc\u0645 \u0631\u0627 \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u062f."))}d.isMDXComponent=!0}}]);