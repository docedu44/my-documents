"use strict";(self.webpackChunkmy_documents=self.webpackChunkmy_documents||[]).push([[1870],{3302:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>l,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var s=n(5893),r=n(1151);const c={id:"tsx-jsx",title:"TSX & JSX"},o=void 0,a={id:"Experiences/Frontend/react/tsx/tsx-jsx",title:"TSX & JSX",description:"\u0627\u06cc\u0646 \u0628\u062e\u0634 \u0645\u0631\u0628\u0648\u0637 \u0628 2 \u0641\u0631\u0645\u062a tsx \u0648 jsx \u0645\u06cc \u0628\u0627\u0634\u062f \u06a9 \u062f\u0631 Next\u060c React \u0648 React Native \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc \u0634\u0648\u062f\u060c \u062f\u0631 \u0646\u062a\u06cc\u062c\u0647 \u0645\u0648\u0627\u0631\u062f\u06cc \u06a9 \u06af\u0641\u062a\u0647 \u0645\u06cc \u0634\u0648\u062f \u062f\u0631 \u0645\u0648\u0631\u062f \u062a\u0645\u0627\u0645\u06cc \u0622\u0646 \u0647\u0627 \u0635\u062f\u0642 \u0645\u06cc \u06a9\u0646\u062f.",source:"@site/docs/Experiences/Frontend/react/tsx/tsx-jsx.mdx",sourceDirName:"Experiences/Frontend/react/tsx",slug:"/Experiences/Frontend/react/tsx/tsx-jsx",permalink:"/my-documents/docs/Experiences/Frontend/react/tsx/tsx-jsx",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Experiences/Frontend/react/tsx/tsx-jsx.mdx",tags:[],version:"current",frontMatter:{id:"tsx-jsx",title:"TSX & JSX"},sidebar:"tutorialSidebar",previous:{title:"TS in React",permalink:"/my-documents/docs/Experiences/Frontend/react/tsx/ts-in-react"},next:{title:"expo-packages",permalink:"/my-documents/docs/Experiences/Frontend/react-native/expo-packages"}},i={},d=[{value:"useRef",id:"useref",level:2}];function x(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["\u0627\u06cc\u0646 \u0628\u062e\u0634 \u0645\u0631\u0628\u0648\u0637 \u0628 2 \u0641\u0631\u0645\u062a ",(0,s.jsx)(t.code,{children:"tsx"})," \u0648 ",(0,s.jsx)(t.code,{children:"jsx"})," \u0645\u06cc \u0628\u0627\u0634\u062f \u06a9 \u062f\u0631 ",(0,s.jsx)(t.code,{children:"Next"}),"\u060c ",(0,s.jsx)(t.code,{children:"React"})," \u0648 ",(0,s.jsx)(t.code,{children:"React Native"})," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc \u0634\u0648\u062f\u060c \u062f\u0631 \u0646\u062a\u06cc\u062c\u0647 \u0645\u0648\u0627\u0631\u062f\u06cc \u06a9 \u06af\u0641\u062a\u0647 \u0645\u06cc \u0634\u0648\u062f \u062f\u0631 \u0645\u0648\u0631\u062f \u062a\u0645\u0627\u0645\u06cc \u0622\u0646 \u0647\u0627 \u0635\u062f\u0642 \u0645\u06cc \u06a9\u0646\u062f."]}),"\n",(0,s.jsx)(t.h2,{id:"useref",children:"useRef"}),"\n",(0,s.jsxs)(t.p,{children:["\u0647\u0631 \u06af\u0627\u0647 \u0628\u062e\u0648\u0627\u0647\u06cc\u0645 \u0645\u0642\u0627\u062f\u06cc\u0631 \u062a\u0645\u0627\u0645\u06cc \u0627\u0644\u0645\u0627\u0646 \u0647\u0627 \u062f\u0627\u062e\u0644 \u06cc\u06a9 \u0641\u0631\u0645 \u0631\u0627 \u0647\u0646\u06af\u0627\u0645 ",(0,s.jsx)(t.code,{children:"submit"})," \u0634\u062f \u0628\u06af\u06cc\u0631\u06cc\u0645 \u0648 \u0628\u0639\u062f \u0627\u0632 \u0622\u0646 \u0641\u0631\u0645 \u0631\u0627 ",(0,s.jsx)(t.code,{children:"reset"})," \u06a9\u0646\u06cc\u0645\u060c \u0645\u06cc \u062a\u0648\u0627\u0646\u06cc\u0645 \u0627\u0632 \u0627\u06cc\u0646 \u0645\u062b\u0627\u0644 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:'"use client";\nimport {useRef} from "react";\n\nexport const PostForm = () => {\n    const formRef = useRef<HTMLFormElement>(null);\n\n    const handleAction = async (formData: FormData) => {\n        const title = formData.get("title");\n        const image = formData.get("image");\n        formRef.current?.reset();\n    }\n    return (\n        <form ref={formRef} className="flex gap-4 my-7" action={handleAction}>\n            <input type="text" className="" name="title" placeholder="Title" required/>\n            <input type="text" className="" name="image" placeholder="Image" required/>\n            <button type="submit">Create</button>\n        </form>\n    );\n};\n'})})]})}function l(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var s=n(7294);const r={},c=s.createContext(r);function o(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);