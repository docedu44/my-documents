"use strict";(self.webpackChunkmy_documents=self.webpackChunkmy_documents||[]).push([[8477],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,y=u["".concat(c,".").concat(m)]||u[m]||l[m]||a;return n?r.createElement(y,o(o({ref:t},d),{},{components:n})):r.createElement(y,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4572:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={id:"ts-in-redux",title:"TS in Redux"},o=void 0,p={unversionedId:"Experiences/Frontend/react/redux/ts-in-redux",id:"Experiences/Frontend/react/redux/ts-in-redux",title:"TS in Redux",description:"Tips",source:"@site/docs/Experiences/Frontend/react/redux/ts-in-redux.mdx",sourceDirName:"Experiences/Frontend/react/redux",slug:"/Experiences/Frontend/react/redux/ts-in-redux",permalink:"/my-documents/docs/Experiences/Frontend/react/redux/ts-in-redux",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Experiences/Frontend/react/redux/ts-in-redux.mdx",tags:[],version:"current",frontMatter:{id:"ts-in-redux",title:"TS in Redux"},sidebar:"tutorialSidebar",previous:{title:"Redux",permalink:"/my-documents/docs/Experiences/Frontend/react/redux/redux-starter"},next:{title:"Redux Toolkit 2",permalink:"/my-documents/docs/Experiences/Frontend/react/redux-tool-kit/redux-toolkit-summary"}},c={},s=[{value:"Tips",id:"tips",level:3},{value:"dispatch in action",id:"dispatch-in-action",level:3}],d={toc:s};function l(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"tips"},"Tips"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u0647\u0645\u06cc\u0634\u0647 \u0628\u0647\u062a\u0631 \u0627\u0633\u062a \u0628\u0631\u0627\u06cc \u0647\u0645\u0647 \u06cc ",(0,i.kt)("inlineCode",{parentName:"p"},"reducer")," \u0647\u0627 \u06cc\u06a9 \u0627\u0633\u062a\u06cc\u062a ",(0,i.kt)("inlineCode",{parentName:"p"},"loading")," \u06a9 ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," \u0627\u0633\u062a \u0648 \u06cc\u06a9 ",(0,i.kt)("inlineCode",{parentName:"p"},"error")," \u06a9 \u06cc\u06a9 ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," \u0627\u0633\u062a \u0642\u0631\u0627\u0631 \u062f\u0647\u06cc\u0645.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u0647\u0645\u06cc\u0634\u0647 \u0628\u0631\u0627\u06cc ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," \u0647\u0627 \u0628\u0647\u062a\u0631 \u0627\u0633\u062a \u06a9 \u06cc\u06a9 ",(0,i.kt)("inlineCode",{parentName:"p"},"enum")," \u062a\u0639\u0631\u06cc\u0641 \u06a9\u0646\u06cc\u0645 \u0648 \u0622\u0646 \u0631\u0627 \u062f\u0631 \u06cc\u06a9 \u0641\u0627\u06cc\u0644 \u062f\u06cc\u06af\u0631 \u0642\u0631\u0627\u0631 \u062f\u0647\u06cc\u0645 \u062a\u0627 \u062f\u0631 ",(0,i.kt)("inlineCode",{parentName:"p"},"reducer")," \u0647\u0627 \u0648 ",(0,i.kt)("inlineCode",{parentName:"p"},"action")," \u0647\u0627 \u0627\u0632 \u0622\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u0628\u0631\u0627\u06cc ",(0,i.kt)("inlineCode",{parentName:"p"},"interface")," \u0647\u0627 \u0646\u06cc\u0632 \u0628\u0647\u062a\u0631 \u0627\u0633\u062a \u06cc\u06a9 \u0641\u0627\u06cc\u0644 \u062c\u062f\u0627 \u0642\u0631\u0627\u0631 \u062f\u0647\u06cc\u0645 \u0628\u0631\u0627\u06cc ",(0,i.kt)("inlineCode",{parentName:"p"},"reducer")," \u0647\u0627 \u06a9 \u0627\u0645\u06a9\u0627\u0646 \u062f\u0627\u0631\u062f \u06a9 \u0686\u0646\u062f \u0645\u062f\u0644 \u062f\u0627\u062f\u0647 \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u0645\u060c \u0627\u0632 \u0686\u0646\u062f ",(0,i.kt)("inlineCode",{parentName:"p"},"interface")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc \u06a9\u0646\u06cc\u0645 \u0648 \u062f\u0631 \u0627\u0646\u062a\u0647\u0627 \u0622\u0646 \u0647\u0627 \u0631\u0627 \u06cc\u06a9 ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," \u0645\u06cc \u06a9\u0646\u06cc\u0645 \u0648 \u0627\u0632 \u0622\u0646 \u062f\u0631 ",(0,i.kt)("inlineCode",{parentName:"p"},"reducer")," \u0647\u0627 \u0648 ",(0,i.kt)("inlineCode",{parentName:"p"},"action")," \u0647\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc \u06a9\u0646\u06cc\u0645."))),(0,i.kt)("h3",{id:"dispatch-in-action"},"dispatch in action"),(0,i.kt)("p",null,"\u0645\u06cc\u062a\u0648\u0627\u0646 \u062f\u0631 ",(0,i.kt)("inlineCode",{parentName:"p"},"action")," \u0647\u0627 \u0647\u0646\u06af\u0627\u0645 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch")," \u0627\u0632 \u062a\u0627\u06cc\u067e \u0645\u062e\u0635\u0648\u0635 \u062e\u0648\u062f\u0634 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645 \u0628\u0647 \u062c\u0627\u06cc ",(0,i.kt)("inlineCode",{parentName:"p"},"any")," \u0648 \u0627\u06af\u0631 \u0628\u062e\u0648\u0627\u0647\u06cc\u0645 \u0627\u0632 ",(0,i.kt)("inlineCode",{parentName:"p"},"interface")," \u0647\u0627 \u062e\u0648\u062f\u0645\u0627\u0646 \u0628\u0631\u0627\u06cc ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645\u060c \u0628\u0627\u06cc\u062f \u0622\u0646 \u0631\u0627 \u0628\u0647 \u0635\u0648\u0631\u062a ",(0,i.kt)("inlineCode",{parentName:"p"},"generic")," \u0628\u0647 \u0622\u0646 \u0628\u062f\u0647\u06cc\u0645:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import axios from "axios";\nimport {RepositoriesActions} from "../actions/repositoriesActions";\nimport {RepositoriesActionType} from "../action-types/repositoriesActionTypes";\nimport {Dispatch} from "docs/Experiences/react/redux/redux-starter";\n\nexport const searchRepositories = (term: string) => {\n    return async (dispatch: Dispatch<RepositoriesActions>) => {\n        dispatch({\n            type: RepositoriesActionType.SEARCH_REPOSITORIES\n        });\n\n        try {\n            const {data }: any = await axios.get(`https://registry.npmjs.org/-/v1/search?text=${term}`);\n            const names = data.objects.map((result: any) => {\n                return result.package.name\n            });\n\n            dispatch({\n                type: RepositoriesActionType.SEARCH_REPOSITORIES_SUCCESS,\n                payload: names\n            })\n        } catch (e: any) {\n            dispatch({\n                type: RepositoriesActionType.SEARCH_REPOSITORIES_ERROR,\n                payload: e.message\n            })\n        }\n    }\n}\n')))}l.isMDXComponent=!0}}]);