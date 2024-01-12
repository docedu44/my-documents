"use strict";(self.webpackChunkmy_documents=self.webpackChunkmy_documents||[]).push([[3460],{4295:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var r=t(5893),o=t(1151);const s={id:"redux-toolkit-summary",title:"Redux Toolkit 2",author:"mamad"},c=void 0,a={id:"Experiences/Frontend/store/redux-tool-kit/redux-toolkit-summary",title:"Redux Toolkit 2",description:"\u0627\u0648\u0644 \u0627\u0632 \u0647\u0645\u0647 \u0627\u06cc\u0646\u062c\u0627 \u06cc\u0647 \u0641\u0627\u06cc\u0644 \u062f\u0631\u0633\u062a \u0645\u06cc\u06a9\u0646\u06cc\u0645 : src/app/store.js",source:"@site/docs/Experiences/Frontend/store/redux-tool-kit/redux-toolkit-summary.mdx",sourceDirName:"Experiences/Frontend/store/redux-tool-kit",slug:"/Experiences/Frontend/store/redux-tool-kit/redux-toolkit-summary",permalink:"/my-documents/docs/Experiences/Frontend/store/redux-tool-kit/redux-toolkit-summary",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Experiences/Frontend/store/redux-tool-kit/redux-toolkit-summary.mdx",tags:[],version:"current",frontMatter:{id:"redux-toolkit-summary",title:"Redux Toolkit 2",author:"mamad"},sidebar:"tutorialSidebar",previous:{title:"TS in Redux",permalink:"/my-documents/docs/Experiences/Frontend/store/redux/ts-in-redux"},next:{title:"redux tool kit",permalink:"/my-documents/docs/Experiences/Frontend/store/redux-tool-kit/reduxtoolkit"}},i={},u=[];function d(e){const n={code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u0627\u0648\u0644 \u0627\u0632 \u0647\u0645\u0647 \u0627\u06cc\u0646\u062c\u0627 \u06cc\u0647 \u0641\u0627\u06cc\u0644 \u062f\u0631\u0633\u062a \u0645\u06cc\u06a9\u0646\u06cc\u0645 : ",(0,r.jsx)(n.code,{children:"src/app/store.js"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u0628\u0639\u062f \u0628\u0631\u0627\u06cc \u0627\u06cc\u0646\u06a9\u0647 \u06cc\u0647 \u0627\u0633\u062a\u0648\u0631 \u062e\u0627\u0644\u06cc \u062f\u0631\u0633\u062a \u06a9\u0646\u06cc\u0645 \u0627\u0632 \u06a9\u062f \u0647\u0627\u06cc \u0632\u06cc\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc \u06a9\u0646\u06cc\u0645: (\u0647\u0645\u0686\u0646\u06cc\u0646 \u0645\u0633\u062a\u0642\u06cc\u0645\u0627 \u0628\u0647 ",(0,r.jsx)(n.strong,{children:"redux devtools"})," \u0647\u0645 \u0648\u0635\u0644 \u0645\u06cc\u0634\u0647)"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"    import {configureStore} from '@reduxjs/toolkit'\n\n    export default configureStore({\n        reducer: {},\n    })\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u062d\u0627\u0644\u0627 \u0641\u0642\u0637 \u06a9\u0627\u0641\u06cc\u0647 \u06a9\u0647 \u062a\u0648\u0648 \u0645\u0633\u06cc\u0631 ",(0,r.jsx)(n.code,{children:"src/index.js"})," \u06a9\u0644 \u0627\u067e \u0645\u0648\u0646 \u0631\u0648 \u062f\u0627\u062e\u0644 \u0627\u0633\u062a\u0648\u0631 \u0642\u0631\u0627\u0631 \u0628\u062f\u06cc\u0645 \u062a\u0627 \u0647\u0631\u062c\u0627\u06cc \u0627\u067e \u0628\u0647 \u0627\u0633\u062a\u0648\u0631\u0645\u0648\u0646 \u062f\u0633\u062a\u0631\u0633\u06cc \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u0645:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"    import React from 'react'\n    import ReactDOM from 'react-dom'\n    import './index.css'\n    import App from './App'\n    import store from './app/store'\n    import {Provider} from 'react-redux'\n\n    ReactDOM.render(\n        <Provider store={store}>\n            <App/>\n        </Provider>,\n        document.getElementById('root')\n    )\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u062d\u0627\u0644\u0627 \u0627\u06cc\u0646 \u0641\u0627\u06cc\u0644 \u0631\u0648 \u0645\u06cc \u0633\u0627\u0632\u06cc\u0645 : ",(0,r.jsx)(n.code,{children:"src/features/counter/counterSlice.js"})," \u0628\u0639\u062f\u0634 \u0645\u06cc\u0627\u06cc\u06cc\u0645 \u0627\u0632 ",(0,r.jsx)(n.code,{children:"createSlice"})," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc \u06a9\u0646\u06cc\u0645"]}),"\n",(0,r.jsx)(n.p,{children:"\u0627\u06cc\u0646 \u0641\u0627\u06cc\u0644 \u0628\u0647 \u06cc\u06a9 \u0627\u0633\u0645 \u0631\u0634\u062a\u0647 \u0627\u06cc \u0628\u0631\u0627\u06cc \u0646\u0627\u0645\u06af\u0630\u0627\u0631\u06cc\u060c \u06cc\u06a9 \u0645\u0642\u062f\u0627\u0631 \u0627\u0648\u0644\u06cc\u0647 \u0648 \u06cc\u06a9 \u06cc\u0627 \u0686\u0646\u062f \u062a\u0627\u0628\u0639 reducer \u0628\u0631\u0627\u06cc \u062a\u063a\u06cc\u06cc\u0631\u0627\u062a \u0631\u0648\u06cc \u0645\u062a\u063a\u06cc\u06cc\u0631\u0645\u0627\u0646 \u0646\u06cc\u0627\u0632 \u062f\u0627\u0631\u062f"}),"\n",(0,r.jsx)(n.p,{children:"( \u0627\u06cc\u0646 \u0631\u0648\u0646\u062f \u0628\u0647 \u0627\u06cc\u0646 \u0635\u0648\u0631\u062a \u0627\u0633\u062a \u06a9\u0647 redux \u0627\u0632 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0645\u0627 \u06a9\u067e\u06cc \u0645\u06cc \u06af\u06cc\u0631\u062f \u0648 \u0633\u067e\u0633 \u062a\u063a\u06cc\u06cc\u0631\u0627\u062a \u0631\u0627 \u0631\u0648\u06cc \u06a9\u067e\u06cc \u0627\u0639\u0645\u0627\u0644 \u0645\u06cc \u06a9\u0646\u062f )"}),"\n",(0,r.jsx)(n.p,{children:"\u062d\u0627\u0644 \u0627\u0632 \u06a9\u062f \u0647\u0627\u06cc \u0632\u06cc\u0631 \u0628\u0631\u0627\u06cc \u067e\u06cc\u06a9\u0631\u0628\u0646\u062f\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc \u06a9\u0646\u06cc\u0645:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"    import {createSlice} from '@reduxjs/toolkit'\n\n    export const counterSlice = createSlice({\n        name: 'counter',\n        initialState: {\n            value: 0,\n        },\n        reducers: {\n            increment: (state) => {\n                // Redux Toolkit allows us to write \"mutating\" logic in reducers. It\n                // doesn't actually mutate the state because it uses the Immer library,\n                // which detects changes to a \"draft state\" and produces a brand new\n                // immutable state based off those changes\n                state.value += 1\n            },\n            decrement: (state) => {\n                state.value -= 1\n            },\n            incrementByAmount: (state, action) => {\n                state.value += action.payload\n            },\n        },\n    })\n\n    // Action creators are generated for each case reducer function\n    export const {increment, decrement, incrementByAmount} = counterSlice.actions\n\n    export default counterSlice.reducer\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u062d\u0627\u0644\u0627 \u0628\u0631\u0627\u06cc \u0627\u06cc\u0646\u06a9\u0647 \u0627\u06cc\u0646 slice \u06a9\u0647 \u0633\u0627\u062e\u062a\u06cc\u0645 \u0631\u0648 \u0628\u0647 ",(0,r.jsx)(n.code,{children:"store/index.js"})," \u0628\u062f\u06cc\u0645 \u0628\u0627\u06cc\u062f \u0628\u0647 \u0635\u0648\u0631\u062a \u0632\u06cc\u0631 \u0639\u0645\u0644 \u06a9\u0646\u06cc\u0645:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"    import { configureStore } from '@reduxjs/toolkit'\n    import counterReducer from '../features/counter/counterSlice'\n\n    export default configureStore({\n    reducer: {\n    counter: counterReducer,\n},\n})\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u062d\u0627\u0644\u0627 \u0628\u0631\u0627\u06cc \u0627\u06cc\u0646\u06a9\u0647 \u06cc\u0647 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u062a\u0633\u062a \u062f\u0631\u0633\u062a \u06a9\u0646\u06cc\u0645\u060c \u062a\u0648\u0648 ",(0,r.jsx)(n.code,{children:"src/features/counter/Counter.js"})," \u06cc\u0647 \u0641\u0627\u06cc\u0644 \u0645\u06cc \u0633\u0627\u0632\u06cc\u0645 \u0648 \u0628\u0639\u062f\u0634 \u0627\u0648\u0646\u0648 \u062a\u0648\u0648 ",(0,r.jsx)(n.code,{children:"App.js"})," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc \u06a9\u0646\u06cc\u0645: ( \u062d\u062a\u0645\u0627 \u062a\u0648\u0627\u0628\u0639 \u062f\u0631\u0648\u0646 dispatch \u0647\u0627 \u0628\u0627 () \u0628\u0627\u0634\u062f. )"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"    import React from 'react'\n    import { useSelector, useDispatch } from 'react-redux'\n    import { decrement, increment } from './counterSlice'\n\n    export function Counter() {\n    const count = useSelector((state) => state.counter.value)\n    const dispatch = useDispatch()\n\n    return (\n        <div>\n            <div>\n                <button\n                aria-label=\"Increment value\"\n                onClick={() => dispatch(increment())}\n                >\n                    Increment\n                </button>\n                <span>{count}</span>\n                <button\n                aria-label=\"Decrement value\"\n                onClick={() => dispatch(decrement())}\n                >\n                    Decrement\n                </button>\n            </div>\n        </div>\n    )\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u062d\u0627\u0644 \u0627\u06af\u0631 \u0628\u062e\u0648\u0627\u0647\u06cc\u0645 \u06a9\u062f\u0645\u0627\u0646 \u0631\u0627 \u0628\u0647 \u0635\u0648\u0631\u062a async \u0628\u0646\u0648\u06cc\u0633\u06cc\u0645 (\u0645\u062b\u0644\u0627 \u0628\u0631\u0627\u06cc \u0644\u0627\u06af\u06cc\u0646 \u0648 ... \u06a9\u0647 \u0646\u06cc\u0627\u0632 \u0627\u0633\u062a \u0627\u0648\u0644 \u062f\u0627\u062f\u0647 \u0647\u0627 \u0631\u0627 \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u0645 \u0633\u067e\u0633 \u0628\u0631 \u0627\u0633\u0627\u0633 \u062f\u0627\u062f\u0647 \u0647\u0627 \u0686\u06cc\u0632\u06cc \u0631\u0627 \u0631\u0646\u062f\u0631 \u06a9\u0646\u06cc\u0645) \u0628\u0627\u06cc\u062f \u0628\u0647 \u0635\u0648\u0631\u062a \u0632\u06cc\u0631 \u0639\u0645\u0644 \u06a9\u0646\u06cc\u0645:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'    import {createSlice, createAsyncThunk} from \'@reduxjs/toolkit\';\n\n    const initialState= {\n        value: 0,\n        status: "idle"\n    }\n\n    // make a function like api\n    function fetchCount(amount = 1) {\n        return new Promise((resolve) =>\n            setTimeout(() => resolve({ data: amount }), 1000)\n        );\n    }\n\n    // create function out of createSlice() and use createAsyncThunk() for async function\n    export const incrementAsync = createAsyncThunk(\n        "counter/fetchCount",\n        async (num)=> {\n            const response = await fetchCount(num);\n            return response.data\n        }\n    )\n\n    export const counterSlice = createSlice({\n        name: "counter",\n        initialState,\n        reducers: {\n            increment: (state) => {\n                state.value += 1;\n            },\n            decrement: (state) => {\n                state.value -= 1;\n            },\n            incrementByAmount: (state, action) => {\n                state.value += action.payload\n            }\n        },\n\n    // use builder instead of switch case and use pending, fulfield and rejected\n    extraReducers:(builder) => {\n        builder\n            .addCase(incrementAsync.pending, (state) => {\n                state.status = "loading";\n                console.log(state.status);\n            }).addCase(incrementAsync.fulfilled, (state, action)=> {\n                state.status = "idle";\n                console.log(state.status);\n                state.value += action.payload;\n            }).addCase(incrementAsync.rejected, (state, err) => {\n                state.status = "idle";\n                console.log(err);\n            })\n    }\n});\n\n    export const {increment, decrement, incrementByAmount} = counterSlice.actions;\n\n    export default counterSlice.reducer;\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u062a\u0648\u0627\u0628\u0639 extraReducer \u0648 createAsyncThunk \u0641\u0642\u0637 \u0628\u0631\u0627\u06cc \u0639\u0645\u0644\u06cc\u0627\u062a async \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc \u0634\u0648\u062f"}),"\n",(0,r.jsx)(n.p,{children:"\u0647\u0631\u06af\u0627\u0647 \u0628\u062e\u0648\u0627\u0647\u06cc\u0645 \u0647\u0646\u06af\u0627\u0645 reject \u0634\u062f\u0646 \u06a9\u0644 \u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u0627\u0631\u0648\u0631 \u0631\u0627 \u0628\u0631\u0627\u06cc \u0645\u0627 \u0628\u0631\u06af\u0631\u062f\u0627\u0646\u062f\u060c \u0628\u0627\u06cc\u062f \u0628\u0647 \u0635\u0648\u0631\u062a \u0632\u06cc\u0631 \u0639\u0645\u0644 \u06a9\u0646\u06cc\u0645"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'    import {createSlice, createAsyncThunk} from \'@reduxjs/toolkit\';\n\n    const initialState= {\n        value: 0,\n        status: "idle"\n    }\n\n    // make a function like api\n    function fetchCount(amount = 1) {\n        return new Promise((resolve) =>\n            setTimeout(() => resolve({ data: amount }), 1000)\n        );\n    }\n\n    // create function out of createSlice() and use createAsyncThunk() for async function\n    export const incrementAsync = createAsyncThunk(\n        "counter/fetchCount",\n        async (num, {rejectWithValue}) => {\n            try {\n                const response = await fetchCount(num);\n            return {\n                data: response.data,\n                status\n            }\n        } catch (e) {\n            //! return all errors data\n            return rejectWithValue({\n                data: e.response.data,\n                status: e.response.status\n                })\n            }\n        }\n    )\n\n    export const counterSlice = createSlice({\n        name: "counter",\n        initialState,\n        reducers: {\n            increment: (state) => {\n            state.value += 1;\n    },\n        decrement: (state) => {\n            state.value -= 1;\n    },\n        incrementByAmount: (state, action) => {\n            state.value += action.payload\n    }\n},\n\n    // use builder instead of switch case and use pending, fulfield and rejected\n    extraReducers:(builder) => {\n        builder\n            .addCase(incrementAsync.pending, (state) => {\n                state.status = "loading";\n                console.log(state.status);\n            }).addCase(incrementAsync.fulfilled, (state, action)=> {\n                state.status = "idle";\n                console.log(state.status);\n                state.value += action.payload;\n            }).addCase(incrementAsync.rejected, (state, err) => {\n                state.status = "idle";\n                console.log(err);\n                console.log(err.payload.status);\n            })\n        }\n    });\n\n    export const {increment, decrement, incrementByAmount} = counterSlice.actions;\n\n    export default counterSlice.reducer;\n'})})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>c});var r=t(7294);const o={},s=r.createContext(o);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);