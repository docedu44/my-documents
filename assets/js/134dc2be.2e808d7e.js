"use strict";(self.webpackChunkmy_documents=self.webpackChunkmy_documents||[]).push([[1368],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3688:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return l},toc:function(){return d},default:function(){return f}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),c=["components"],i={id:"reduxtoolkit",title:"redux tool kit",author:"sina"},u=void 0,s={unversionedId:"Experiences/react/redux-tool-kit/reduxtoolkit",id:"Experiences/react/redux-tool-kit/reduxtoolkit",title:"redux tool kit",description:"\u0627\u06cc\u0646 \u06a9\u062f \u0628\u0627 \u062a\u0627\u06cc\u067e \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a \u0639\u0647. \u0645\u0646\u0637\u0642\u0627 \u062a\u0627\u06cc\u067e \u0647\u0627\u0634 \u0631\u0648 \u067e\u0627\u06a9 \u06a9\u0646\u06cc\u062f \u0645\u06cc\u0634\u0647 \u062c\u0627\u0648\u0627\u0627\u0633\u06a9\u0631\u06cc\u067e\u062a :)",source:"@site/docs/Experiences/react/redux-tool-kit/reduxtoolkit.mdx",sourceDirName:"Experiences/react/redux-tool-kit",slug:"/Experiences/react/redux-tool-kit/reduxtoolkit",permalink:"/my-documents/docs/Experiences/react/redux-tool-kit/reduxtoolkit",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Experiences/react/redux-tool-kit/reduxtoolkit.mdx",tags:[],version:"current",frontMatter:{id:"reduxtoolkit",title:"redux tool kit",author:"sina"},sidebar:"tutorialSidebar",previous:{title:"Redux Toolkit 2",permalink:"/my-documents/docs/Experiences/react/redux-tool-kit/redux-toolkit-summary"},next:{title:"Generate Route",permalink:"/my-documents/docs/Experiences/react/tsx/dynamic-generate-route"}},l={},d=[],p={toc:d};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u0627\u06cc\u0646 \u06a9\u062f \u0628\u0627 \u062a\u0627\u06cc\u067e \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a \u0639\u0647. \u0645\u0646\u0637\u0642\u0627 \u062a\u0627\u06cc\u067e \u0647\u0627\u0634 \u0631\u0648 \u067e\u0627\u06a9 \u06a9\u0646\u06cc\u062f \u0645\u06cc\u0634\u0647 \u062c\u0627\u0648\u0627\u0627\u0633\u06a9\u0631\u06cc\u067e\u062a :)"),(0,a.kt)("div",{dir:"ltr"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'\nimport { RootState } from '../store'\n\ninterface IUser {\n    loading: boolean,\n    error: any,\n    user: Object\n}\n\nconst userInitialState: IUser = {\n    loading: false,\n    error: null,\n    user: {}\n}\n\nexport const fetchRandomUser = createAsyncThunk(\n    'user/fetchRandomUser',\n    async () => {\n        try {\n            const response = await fetch('https://randomuser.me/api')\n            const data = await response.json()\n            return data.results[0]\n        } catch (err) {\n            throw new Error(err)\n        }\n    }\n)\n\nexport const userSclice = createSlice({\n    name: 'user',\n    initialState: userInitialState,\n    reducers: {\n        logout: (state) => {\n            state.user = {}\n            state.error = null\n            state.loading = false\n        }\n    },\n    extraReducers: (builder) => {\n        builder\n            .addCase(fetchRandomUser.pending, (state, action) => {\n                state.loading = true\n            })\n            .addCase(fetchRandomUser.rejected, (state, action) => {\n                state.loading = false\n                state.error = action.payload\n            })\n            .addCase(fetchRandomUser.fulfilled, (state, action) => {\n                state.loading = false\n                state.user = action.payload\n            })\n    }\n})\n\nexport const { logout } = userSclice.actions\n\nexport const useUser = (state: RootState) => state.user\n\nexport default userSclice.reducer\n\n"))),(0,a.kt)("p",null,"\u0627\u0633\u0645\u06cc \u06a9\u0647 \u0628\u0631\u0627\u06cc reducers \u0645\u06cc\u0630\u0627\u0631\u06cc\u062f \u062f\u0631 \u0648\u0627\u0642\u0639 \u0627\u0633\u0645 \u0627\u06a9\u0634\u0646 \u0647\u0627\u0633.\n\u0627\u06af\u0631 \u0627\u06a9\u0634\u0646 \u0646\u06cc\u0627\u0632 \u0628\u0647 payload \u062f\u0627\u0631\u0647 \u062a\u0648 \u0631\u06cc\u062f\u0648\u0633\u0631 \u06cc\u0647 \u067e\u0627\u0631\u0627\u0645\u062a\u0631 action \u0647\u0645 \u0628\u0647\u0634 \u067e\u0627\u0633 \u0628\u062f\u06cc\u062f. \u062f\u0631 \u063a\u06cc\u0631 \u0627\u06cc\u0646 \u0635\u0648\u0631\u062a \u0646\u06cc\u0627\u0632\u06cc \u0646\u06cc\u0633\u062a."))}f.isMDXComponent=!0}}]);