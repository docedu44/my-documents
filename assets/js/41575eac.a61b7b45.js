"use strict";(self.webpackChunkmy_documents=self.webpackChunkmy_documents||[]).push([[6173],{2752:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=t(5893),s=t(1151);const i={id:"nginx-react",title:"nginx-react",author:"mamadfar"},o=void 0,c={id:"Experiences/Deployment/nginx/nginx-react",title:"nginx-react",description:"nginx.conf",source:"@site/docs/Experiences/Deployment/nginx/nginx-react.mdx",sourceDirName:"Experiences/Deployment/nginx",slug:"/Experiences/Deployment/nginx/nginx-react",permalink:"/my-documents/docs/Experiences/Deployment/nginx/nginx-react",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Experiences/Deployment/nginx/nginx-react.mdx",tags:[],version:"current",frontMatter:{id:"nginx-react",title:"nginx-react",author:"mamadfar"},sidebar:"tutorialSidebar",previous:{title:"Node with TS",permalink:"/my-documents/docs/Experiences/Deployment/docker/node-ts"},next:{title:"Astro",permalink:"/my-documents/docs/Experiences/Frontend/Astro/"}},d={},l=[{value:"nginx.conf",id:"nginxconf",level:3}];function x(n){const e={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h3,{id:"nginxconf",children:"nginx.conf"}),"\n",(0,r.jsxs)(e.p,{children:["\u062f\u0631 \u0645\u0631\u062d\u0644\u0647 \u0627\u0648\u0644 \u0628\u0627\u06cc\u062f \u06cc\u06a9 \u0641\u0648\u0644\u062f\u0631 \u062f\u0631 \u0631\u0648\u062a \u067e\u0631\u0648\u0698\u0647 \u0628\u0627 \u0646\u0627\u0645 ",(0,r.jsx)(e.strong,{children:"nginx"})," \u0628\u0633\u0627\u0632\u06cc\u0645 \u0648 \u062f\u0631\u0648\u0646 \u0622\u0646 \u06cc\u06a9 \u0641\u0648\u0644\u062f\u0631 \u062f\u06cc\u06af\u0631 \u0628\u0627 \u0646\u0627\u0645 ",(0,r.jsx)(e.strong,{children:"conf.d"})," \u0645\u06cc \u0633\u0627\u0632\u06cc\u0645 \u0648 \u0633\u067e\u0633 \u062f\u0631\u0648\u0646 \u0622\u0646 \u0641\u0627\u06cc\u0644 ",(0,r.jsx)(e.strong,{children:"nginx.conf"})," \u0645\u06cc \u0633\u0627\u0632\u06cc\u0645 \u0648 \u0627\u0632 \u06a9\u062f \u0647\u0627\u06cc \u0632\u06cc\u0631 \u062f\u0631 \u0622\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc \u06a9\u0646\u06cc\u0645:"]}),"\n",(0,r.jsx)("div",{dir:"ltr",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-nginx",children:"    server {\n        listen 8081;\n        listen [::]:8081;\n        server_name localhost;\n        root   /var/www/build;\n        location / {\n            index  index.html index.htm;\n            if (!-e $request_filename){\n                rewrite ^(.*)$ /index.html break;\n            }\n        }\n    }\n\n"})})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"listen"}),": \u0627\u06cc\u0646 2 \u0628\u0631\u0627\u06cc \u062a\u0639\u06cc\u06cc\u0646 ",(0,r.jsx)(e.strong,{children:"port"})," \u0628\u0631\u0627\u06cc ",(0,r.jsx)(e.strong,{children:"nginx"})," \u0645\u06cc \u0628\u0627\u0634\u062f \u06a9\u0647 \u0628\u0627\u06cc\u062f \u0628\u0627 \u067e\u0648\u0631\u062a \u0633\u0645\u062a \u0631\u0627\u0633\u062a \u0633\u0631\u0648\u06cc\u0633 ",(0,r.jsx)(e.strong,{children:"nginx"})," \u062f\u0631 ",(0,r.jsx)(e.strong,{children:"docker-compose"})," \u06cc\u06a9\u06cc \u0628\u0627\u0634\u062f ( \u067e\u0648\u0631\u062a \u0633\u0645\u062a \u0686\u067e \u0647\u0645\u0627\u0646 \u067e\u0648\u0631\u062a\u06cc \u0645\u06cc \u0628\u0627\u0634\u062f \u06a9\u0647 \u0645\u06cc \u062e\u0648\u0627\u0647\u06cc\u0645 \u0627\u0632 \u0628\u06cc\u0631\u0648\u0646 \u0628\u0647 \u0622\u0646 \u062f\u0633\u062a\u0631\u0633\u06cc \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u0645 ) \u0648 \u062f\u0631 \u0648\u0627\u0642\u0639 \u0647\u0645\u06cc\u0646 \u067e\u0648\u0631\u062a \u0631\u0627 \u0628\u0627\u06cc\u062f \u0628\u0631\u0627\u06cc \u0633\u0631\u0648\u06cc\u0633 \u0627\u0635\u0644\u06cc \u0622\u0646 \u0646\u06cc\u0632 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645."]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"root"}),": \u062f\u0631 \u0648\u0627\u0642\u0639 \u0645\u0633\u06cc\u0631\u06cc \u0645\u06cc \u0628\u0627\u0634\u062f \u06a9\u0647 \u0645\u06cc \u062e\u0648\u0627\u0647\u06cc\u0645 ",(0,r.jsx)(e.strong,{children:"nginx"})," \u0622\u0646 \u0631\u0627 \u0628\u0634\u0646\u0627\u0633\u062f \u0648 \u0627\u0632 \u0622\u0646 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u0633\u06cc\u0631 \u0627\u0635\u0644\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u062f."]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"location"}),": \u062f\u0631 \u0648\u0627\u0642\u0639 \u0645\u06cc \u062a\u0648\u0627\u0646 \u0686\u0646\u062f\u06cc\u0646 ",(0,r.jsx)(e.strong,{children:"location"})," \u0645\u062e\u062a\u0644\u0641 \u0628\u0633\u0627\u0632\u06cc\u0645 \u0648 \u0628\u06af\u0648\u06cc\u06cc\u0645 \u06a9\u0647 \u0647\u0631\u0648\u0642\u062a \u0627\u06cc\u0646 \u0645\u0633\u06cc\u0631 \u0635\u062f\u0627 \u0632\u062f\u0647 \u0634\u062f\u060c \u0686\u0647 \u06a9\u0627\u0631\u06cc \u0628\u0627\u06cc\u062f \u0627\u0646\u062c\u0627\u0645 \u0634\u0648\u062f \u0648 \u062d\u062a\u06cc \u0645\u06cc \u062a\u0648\u0627\u0646 \u062a\u0639\u06cc\u06cc\u0646 \u06a9\u0631\u062f \u06a9\u0647 \u0627\u06af\u0631 \u0627\u06cc\u0646 \u0645\u0633\u06cc\u0631 \u0635\u062f\u0627 \u0632\u062f\u0647 \u0634\u062f\u060c \u0645\u062e\u0627\u0637\u0628 \u0631\u0627 \u0628\u0647 \u06cc\u06a9 \u0622\u062f\u0631\u0633 \u062f\u06cc\u06af\u0631 \u0628\u0641\u0631\u0633\u062a ( ",(0,r.jsx)(e.strong,{children:"proxy_pass"})," )."]}),"\n",(0,r.jsxs)(e.p,{children:["\ud83c\udf89 \u0634\u0631\u0637 \u0646\u0648\u0634\u062a\u0647 \u0634\u062f\u0647 \u0628\u0631\u0627\u06cc \u0647\u0646\u062f\u0644 \u06a9\u0631\u062f\u0646 \u0631\u0648\u062a \u0647\u0627\u06cc ",(0,r.jsx)(e.strong,{children:"react"})," \u0645\u06cc \u0628\u0627\u0634\u062f \u06a9\u0647 \u0647\u0646\u06af\u0627\u0645 \u0631\u0641\u0631\u0634 \u06a9\u0631\u062f\u0646 \u0635\u0641\u062d\u0647\u060c \u0628\u0627 \u0635\u0641\u062d\u0647 ",(0,r.jsx)(e.strong,{children:"404"})," \u0645\u0648\u0627\u062c\u0647 \u0646\u0634\u0648\u06cc\u0645."]})]})}function a(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(x,{...n})}):x(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>c,a:()=>o});var r=t(7294);const s={},i=r.createContext(s);function o(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);