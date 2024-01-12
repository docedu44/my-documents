"use strict";(self.webpackChunkmy_documents=self.webpackChunkmy_documents||[]).push([[9927],{9742:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=n(5893),r=n(1151);const i={id:"zustand",title:"Zustand"},d=void 0,a={id:"Experiences/Frontend/store/zustand",title:"Zustand",description:"Github Repo - Zustand test app",source:"@site/docs/Experiences/Frontend/store/zustand.mdx",sourceDirName:"Experiences/Frontend/store",slug:"/Experiences/Frontend/store/zustand",permalink:"/my-documents/docs/Experiences/Frontend/store/zustand",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Experiences/Frontend/store/zustand.mdx",tags:[],version:"current",frontMatter:{id:"zustand",title:"Zustand"},sidebar:"tutorialSidebar",previous:{title:"redux tool kit",permalink:"/my-documents/docs/Experiences/Frontend/store/redux-tool-kit/reduxtoolkit"},next:{title:"\u062a\u06a9\u0631\u0627\u0631 \u06a9\u0644\u0627\u0633 \u0647\u0627",permalink:"/my-documents/docs/Experiences/Frontend/tailwind/custom-tailwind-style"}},o={},l=[{value:"\u0646\u0635\u0628",id:"\u0646\u0635\u0628",level:2},{value:"devtools",id:"devtools",level:3},{value:"persist",id:"persist",level:3},{value:"Custom Middlewares",id:"custom-middlewares",level:3},{value:"Test",id:"test",level:3},{value:"Immer",id:"immer",level:3},{value:"Tips",id:"tips",level:3}];function c(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/mamadfar/zustand__react",children:"Github Repo - Zustand test app"})}),"\n",(0,t.jsx)(s.h2,{id:"\u0646\u0635\u0628",children:"\u0646\u0635\u0628"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"npm install zustand\n"})}),"\n",(0,t.jsx)(s.h3,{id:"devtools",children:"devtools"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\u0645\u06cc \u062a\u0648\u0627\u0646 \u0627\u0632 ",(0,t.jsx)(s.code,{children:"devtools"})," \u062e\u0648\u062f \u0631\u06cc\u06a9\u062a \u0647\u0645 \u0628\u0631\u0627\u06cc \u0627\u06cc\u0646 \u067e\u06a9\u06cc\u062c \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f."]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:"export const useStore = create<ITaskStore>()(devtools((set) => ({\n  //...\n})))\n"})}),"\n",(0,t.jsx)(s.h3,{id:"persist",children:"persist"}),"\n",(0,t.jsxs)(s.p,{children:["\u0645\u06cc \u062a\u0648\u0627\u0646 \u062f\u0627\u062f\u0647 \u0647\u0627 \u0631\u0627 \u0646\u06cc\u0632 \u062f\u0631 ",(0,t.jsx)(s.code,{children:"localstorage"})," \u0630\u062e\u06cc\u0631\u0647 \u06a9\u0631\u062f."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:"export const useStore = create<ITaskStore>()(persist(devtools((set) => ({\n  //...\n})), {name: 'task-store'}))\n"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"\u0628\u0627\u06cc\u062f \u06cc\u06a9 \u0646\u0627\u0645 \u0628\u0631\u0627\u06cc \u0630\u062e\u06cc\u0631\u0647 \u0633\u0627\u0632\u06cc \u062f\u0627\u062f\u0647 \u0647\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u0645."}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"custom-middlewares",children:"Custom Middlewares"}),"\n",(0,t.jsx)(s.p,{children:"\u0645\u06cc \u062a\u0648\u0627\u0646 \u0628 \u0635\u0648\u0631\u062a \u0632\u06cc\u0631 \u06cc\u06a9 \u0645\u06cc\u062f\u0644 \u0648\u06cc\u0631 \u0633\u0641\u0627\u0631\u0634\u06cc \u0646\u06cc\u0632 \u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:"const logger = (config: any) => (set: any, get: any, api: any) => config(\n    (...args: any[]) => {\n        console.log(args);\n        set(...args);\n    },\n    get,\n    api\n)\n\nexport const useStore = create<ITaskStore>()(logger(persist(devtools((set) => ({\n  //...\n})), {name: 'task-store'})))\n"})}),"\n",(0,t.jsx)(s.h3,{id:"test",children:"Test"}),"\n",(0,t.jsx)(s.p,{children:"\u0628\u0631\u0627\u06cc \u062a\u0633\u062a \u0628\u0627\u06cc\u062f \u0645\u0648\u0627\u0631\u062f \u067e\u0627\u06cc\u06cc\u0646 \u0627\u0628\u062a\u062f\u0627 \u0646\u0635\u0628 \u0634\u0648\u0646\u062f:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"pnpm add -D vitest jsdom @testing-library/react @testing-library/jest-dom\n"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\u062f\u0631 \u0641\u0627\u06cc\u0644 ",(0,t.jsx)(s.code,{children:"package.json"})," \u0628\u0627\u06cc\u062f \u0645\u0648\u0627\u0631\u062f \u0632\u06cc\u0631 \u0627\u0636\u0627\u0641\u0647 \u0634\u0648\u0646\u062f:"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'"scripts": {\n  "test": "vite test"\n},\n'})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\u062f\u0631 \u0641\u0627\u06cc\u0644 ",(0,t.jsx)(s.code,{children:"vite.config.ts"})," \u0628\u0627\u06cc\u062f \u0645\u0648\u0627\u0631\u062f \u0632\u06cc\u0631 \u0627\u0636\u0627\u0641\u0647 \u0634\u0648\u0646\u062f:"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:"export default defineConfig({\n  // ...\n  test: {\n    globals: true,\n    environment: 'jsdom',\n    setupFiles: './setupTests.ts'\n  }\n})\n"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\u062f\u0631 \u0641\u0627\u06cc\u0644 ",(0,t.jsx)(s.code,{children:"setupTests.ts"})," \u0628\u0627\u06cc\u062f \u0645\u0648\u0627\u0631\u062f \u0632\u06cc\u0631 \u0627\u0636\u0627\u0641\u0647 \u0634\u0648\u0646\u062f:"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:'import {expect, afterEach} from "vitest";\nimport {cleanup} from "@testing-library/react";\nimport * as matchers from "@testing-library/jest-dom/matchers";\nimport \'@testing-library/jest-dom\';\n\nexpect.extend(matchers);\n\nafterEach(cleanup);\n'})}),"\n",(0,t.jsx)(s.h3,{id:"immer",children:"Immer"}),"\n",(0,t.jsxs)(s.p,{children:["\u0645\u06cc \u062a\u0648\u0627\u0646 \u0627\u0632 ",(0,t.jsx)(s.code,{children:"Immer"})," \u0646\u06cc\u0632 \u0628 \u0635\u0648\u0631\u062a \u0632\u06cc\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"pnpm add immer\n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:"export const useStore = create<ITaskStore>()(persist(devtools(immer((set) => ({\n  //...\n    addTask: (title: string, state: string, id?: number) => set(\n        store => ({tasks: [...store.tasks, {id: id ? id : Math.floor(Math.random() * 999999999), title, state}]})\n        ,false, 'addTask'),\n  //...\n}))), {name: 'task-store'}))\n"})}),"\n",(0,t.jsx)(s.h3,{id:"tips",children:"Tips"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\u0645\u06cc \u062a\u0648\u0627\u0646 \u0627\u0632 ",(0,t.jsx)(s.code,{children:"async"})," \u0641\u0627\u0646\u06a9\u0634\u0646 \u0647\u0645 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f \u0648 \u062f\u0631 \u0627\u0633\u062a\u0648\u0631 \u0628\u0631\u0627\u06cc ",(0,t.jsx)(s.code,{children:"fetch"})," \u06a9\u0631\u062f\u0646 \u062f\u0627\u062f\u0647 \u0647\u0627 \u0627\u0632 \u0622\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f."]}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>d});var t=n(7294);const r={},i=t.createContext(r);function d(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);