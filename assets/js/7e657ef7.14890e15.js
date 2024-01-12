"use strict";(self.webpackChunkmy_documents=self.webpackChunkmy_documents||[]).push([[2777],{8455:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var c=s(5893),r=s(1151);const i={id:"pwa",title:"PWA - static"},t=void 0,o={id:"Experiences/Frontend/PWA/pwa",title:"PWA - static",description:"\u0627\u06cc\u0646 \u0628\u062e\u0634 \u0628\u0631\u0627\u06cc \u0633\u0627\u062e\u062a PWA \u062f\u0631 \u0635\u0641\u062d\u0627\u062a \u0627\u0633\u0627\u062a\u06cc\u06a9 \u0647\u0633\u062a.",source:"@site/docs/Experiences/Frontend/PWA/pwa_static.mdx",sourceDirName:"Experiences/Frontend/PWA",slug:"/Experiences/Frontend/PWA/pwa",permalink:"/my-documents/docs/Experiences/Frontend/PWA/pwa",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Experiences/Frontend/PWA/pwa_static.mdx",tags:[],version:"current",frontMatter:{id:"pwa",title:"PWA - static"},sidebar:"tutorialSidebar",previous:{title:"PWA - React",permalink:"/my-documents/docs/Experiences/Frontend/PWA/pwa_react"},next:{title:"Eslint",permalink:"/my-documents/docs/Experiences/Frontend/Packages/eslint"}},l={},a=[{value:"\u0622\u06cc\u06a9\u0648\u0646 \u0647\u0627",id:"\u0622\u06cc\u06a9\u0648\u0646-\u0647\u0627",level:2},{value:"manifest.json",id:"manifestjson",level:2},{value:"service worker",id:"service-worker",level:2},{value:"1. <code>install</code>",id:"1-install",level:3},{value:"2. <code>fetch</code>",id:"2-fetch",level:3},{value:"\u0644\u06cc\u0646\u06a9 \u0647\u0627",id:"\u0644\u06cc\u0646\u06a9-\u0647\u0627",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.admonition,{type:"info",children:(0,c.jsx)(n.p,{children:"\u0627\u06cc\u0646 \u0628\u062e\u0634 \u0628\u0631\u0627\u06cc \u0633\u0627\u062e\u062a PWA \u062f\u0631 \u0635\u0641\u062d\u0627\u062a \u0627\u0633\u0627\u062a\u06cc\u06a9 \u0647\u0633\u062a.\n\u0628\u0631\u0627\u06cc React \u0631\u0648 \u062c\u062f\u0627\u06af\u0648\u0646\u0647 \u0645\u06cc\u0646\u0648\u06cc\u0633\u06cc\u0645."})}),"\n",(0,c.jsx)(n.p,{children:"\u0628\u0631\u0627\u06cc PWA \u062d\u062f\u0627\u0642\u0644 \u0628\u0647 \u0633\u0647 \u062a\u0627 \u0686\u06cc\u0632 \u0646\u06cc\u0627\u0632 \u062f\u0627\u0631\u06cc\u0645:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"manifest.json"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"serviceWorker.js"})}),"\n",(0,c.jsx)(n.li,{children:"\u0686\u0646\u062f \u0633\u0627\u06cc\u0632 \u0622\u06cc\u06a9\u0648\u0646"}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u0622\u06cc\u06a9\u0648\u0646-\u0647\u0627",children:"\u0622\u06cc\u06a9\u0648\u0646 \u0647\u0627"}),"\n",(0,c.jsxs)(n.p,{children:["\u0628\u0631\u0627\u06cc \u0633\u0627\u062e\u062a \u0622\u06cc\u06a9\u0648\u0646 \u0647\u0627 \u0627\u0632 \u0644\u0627\u06cc\u0628\u0631\u0631\u06cc ",(0,c.jsx)(n.code,{children:"pwa-asset-generator"})," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc \u06a9\u0646\u06cc\u0645 \u06a9\u0647 \u0628\u0627 \u0622\u067e\u0634\u0646 \u0647\u0627\u06cc\u06cc \u06a9\u0647 \u0645\u06cc\u06af\u06cc\u0631\u0647 \u0647\u0645\u0647 \u0633\u0627\u06cc\u0632 \u0622\u06cc\u06a9\u0648\u0646\u06cc \u0628\u0647\u0645\u0648\u0646 \u0645\u06cc\u062f\u0647.\n",(0,c.jsx)(n.a,{href:"https://www.npmjs.com/package/pwa-asset-generator",children:"\u0622\u062f\u0631\u0633 \u0644\u0627\u06cc\u0628\u0631\u0631\u06cc"})]}),"\n",(0,c.jsx)(n.p,{children:"\u0645\u062b\u0627\u0644\u0634 \u0627\u06cc\u0646\u0647:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-console",children:"npx pwa-asset-generator\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u06a9\u0647 ",(0,c.jsx)(n.code,{children:"photo.png"})," \u0627\u062f\u0631\u0633 \u0644\u0648\u06af\u0648\u06cc\u06cc \u0647\u0633\u062a \u06a9\u0647 \u062f\u0627\u0631\u06cc\u0645 \u0648 \u0639\u06a9\u0633 \u0647\u0627\u06cc \u0633\u0627\u062e\u062a\u0647 \u0634\u062f\u0647 \u062a\u0648\u06cc \u06cc\u0647 \u0641\u0648\u0644\u062f\u0631 \u0628\u0647 \u0627\u0633\u0645 ",(0,c.jsx)(n.code,{children:"icons"})," \u0645\u06cc\u0631\u0646."]}),"\n",(0,c.jsxs)(n.p,{children:["\u0639\u06a9\u0633 \u0647\u0627 \u0628\u0627\u06cc\u062f \u062a\u0648\u06cc \u0641\u0627\u06cc\u0644 ",(0,c.jsx)(n.code,{children:"manifest.json"})," \u062b\u0628\u062a \u0628\u0634\u0646."]}),"\n",(0,c.jsx)(n.h2,{id:"manifestjson",children:"manifest.json"}),"\n",(0,c.jsx)(n.p,{children:"\u0641\u0627\u06cc\u0644\u06cc \u0647\u0633\u062a \u06a9\u0647 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u06a9\u0644\u06cc \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646 \u0631\u0648 \u062a\u0648\u06cc \u062e\u0648\u062f\u0634 \u0646\u06af\u0647 \u0645\u06cc\u062f\u0627\u0631\u0647. \u062d\u062f\u0627\u0642\u0644 \u062f\u06cc\u062a\u0627\u06cc\u06cc \u06a9\u0647 \u0628\u0627\u06cc\u062f \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u0645 \u0627\u06cc\u0646\u0627\u0633:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n    "name": "app name",\n    "short_name": "app short name",\n    "start_url": "/",\n    "background_color": "#000",\n    "theme_color": "#fff",\n    "display": "standalone",\n    "icons": [\n        {\n            "src": "/icons/manifest-icon-192.png",\n            "type": "image/png",\n            "sizes": "192x192"\n        },\n        {\n            "src": "/icons/manifest-icon-512.png",\n            "type": "image/png",\n            "sizes": "512x512"\n        }\n    ]\n}\n\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u0628\u0642\u06cc\u0647 \u062f\u06cc\u062a\u0627\u06cc\u06cc \u06a9\u0647 \u0645\u06cc\u0634\u0647 \u062a\u0648\u06cc \u0627\u06cc\u0646 \u0641\u0627\u06cc\u0644 \u0628\u0627\u0634\u0647 \u062a\u0648\u06cc \u062f\u0627\u06a9\u06cc\u0648\u0645\u0646\u062a\u0634 \u0647\u0633\u062a\n\u0644\u06cc\u0646\u06a9 \u062f\u0627\u06a9\u06cc\u0648\u0645\u0646\u062a \u0647\u0627\u0634:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://web.dev/add-manifest/#:~:text=The%20web%20app%20manifest%20is,when%20the%20app%20is%20launched.",children:"web.dev"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json",children:"mozilia mdn"})}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"service-worker",children:"service worker"}),"\n",(0,c.jsxs)(n.p,{children:["\u0627\u06cc\u0646 \u0641\u0627\u06cc\u0644 \u062c\u0627\u0648\u0627\u0627\u0633\u06a9\u0631\u06cc\u067e\u062a \u0642\u0631\u0627\u0631\u0647 \u0645\u0646\u0637\u0642 \u06a9\u0634 \u06a9\u0631\u062f\u0646 \u0648 \u0641\u0686 \u06a9\u0631\u062f\u0646 \u062f\u06cc\u062a\u0627 \u0631\u0648 \u06a9\u0646\u062a\u0631\u0644 \u06a9\u0646\u0647. \u0627\u06cc\u0646 \u0641\u0627\u06cc\u0644 \u0628\u0627\u06cc\u062f \u062b\u0628\u062a \u0628\u0634\u0647 (\u06cc\u0627 \u0646\u0635\u0628 \u0628\u0634\u0647 \u06cc\u0627 \u0631\u062c\u06cc\u0633\u062a\u0631 \u0628\u0634\u0647). \u0646\u0635\u0628\u0634 \u0628\u0647 \u0627\u06cc\u0646 \u0635\u0648\u0631\u062a \u0647\u0633\u062a \u06a9\u0647 \u062a\u0648\u06cc \u06cc\u0647 \u062a\u06af ",(0,c.jsx)(n.code,{children:"<script>"})," \u0627\u0646\u062c\u0627\u0645 \u0628\u0634\u0647. \u06cc\u0627 \u062a\u0648\u06cc \u0641\u0627\u06cc\u0644 \u062c\u0627\u0648\u0627\u0627\u0633\u06a9\u0631\u06cc\u067e\u062a\u06cc \u06a9\u0647 \u0627\u06cc\u0645\u067e\u0648\u0631\u062a \u0628\u0634\u0647"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:'if ("serviceWorker" in navigator) {\n    navigator.serviceWorker.register("sw.js").then(reg => {\n        console.log("sw registerred")\n        console.log(reg)\n    }).catch(err => {\n        console.log("not registered")\n        console.log(err)\n    })\n}\n'})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u0646\u06a9\u062a\u0647:"}),"\n\u0641\u0627\u06cc\u0644 ",(0,c.jsx)(n.code,{children:"sw.js"})," \u0628\u0627\u06cc\u062f \u062a\u0648\u06cc \u0631\u0648\u062a \u067e\u0631\u0648\u0698\u0647 \u0628\u0627\u0634\u0647. \u0648 \u0647\u0631 \u062c\u0627\u06cc\u06cc \u06a9\u0647 \u0628\u0627\u0634\u0647 \u0627\u0633\u06a9\u0648\u067e\u0634 \u0645\u06cc\u0634\u0647 \u0627\u0632 \u0647\u0645\u0648\u0646 \u0641\u0627\u06cc\u0644. \u067e\u0633 \u0628\u0647\u062a\u0631\u06cc\u0646 \u062c\u0627\u0634 \u0647\u0645\u0648\u0646 \u0631\u0648\u062a \u067e\u0631\u0648\u0698\u0647 \u0641\u0631\u0627\u0646\u062a \u0648 \u0647\u0645\u0648\u0646 \u06a9\u0646\u0627\u0631 ",(0,c.jsx)(n.code,{children:"index.html"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["\u0641\u0627\u06cc\u0644 ",(0,c.jsx)(n.code,{children:"sw.js"})," \u0634\u0627\u0645\u0644 \u0627\u06cc\u0646\u0627\u0633:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:'const static_assets = [\n    "./",\n    "./src/style.css",\n    "./images/icons/manifest-icon-192.png",\n    "./images/icons/manifest-icon-512.png",\n    "./images/icons/apple-icon-180.png"\n]\n\nself.addEventListener("install", e => {\n    e.waitUntil(\n        caches.open("static").then(cache => {\n            return cache.addAll(static_assets)\n        })\n    )\n})\n\nself.addEventListener("fetch", e => {\n    e.respondWith(\n        caches.match(e.request).then(res => {\n            return res || fetch(e.request)\n        })\n    )\n})\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u06a9\u0647 \u0631\u0648\u06cc \u06f2 event \u0628\u0627\u06cc\u062f \u06a9\u0646\u062a\u0631\u0644\u0631 \u0628\u0630\u0627\u0631\u06cc\u0645:"}),"\n",(0,c.jsxs)(n.h3,{id:"1-install",children:["1. ",(0,c.jsx)(n.code,{children:"install"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u062a\u0648\u06cc \u0627\u06cc\u0646 \u0628\u062e\u0634 \u0646\u0635\u0628 \u06a9\u0631\u062f\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0648\u0631\u06a9\u0631 \u0631\u0648 \u0647\u0646\u062f\u0644 \u0645\u06cc\u06a9\u0646\u06cc\u0645 \u0648 \u062a\u0648\u06cc \u0627\u06cc\u0646 \u0645\u062b\u0627\u0644 \u0641\u0642\u0637 \u0627\u06cc\u0646 \u0631\u0648 \u0647\u0646\u062f\u0644 \u06a9\u0631\u062f\u06cc\u0645 \u06a9\u0647 \u062f\u06cc\u062a\u0627\u06cc\u06cc \u06a9\u0647 \u0627\u0632 \u067e\u06cc\u0634 \u062a\u0639\u06cc\u06cc\u0646 \u06a9\u0631\u062f\u06cc\u0645 (\u062a\u0648 \u06cc\u0647 \u0622\u0631\u0627\u06cc\u0647 \u0628\u0647 \u0646\u0627\u0645 ",(0,c.jsx)(n.code,{children:"static_asset"}),")"]}),"\n",(0,c.jsxs)(n.h3,{id:"2-fetch",children:["2. ",(0,c.jsx)(n.code,{children:"fetch"})]}),"\n",(0,c.jsx)(n.p,{children:"\u062a\u0648\u06cc \u0627\u06cc\u0646 event \u0627\u0633\u062a\u0631\u0627\u062a\u0698\u06cc \u0647\u0646\u062f\u0644 \u06a9\u0631\u062f\u0646 caching \u0631\u0648 \u0647\u0646\u062f\u0644 \u0645\u06cc\u06a9\u0646\u06cc\u0645. \u0645\u062b\u0644\u0627 \u0627\u06cc\u0646\u06a9\u0647 \u0622\u06cc\u0627 \u0627\u0648\u0644 \u0627\u0632 chache \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u0648\u062f \u06cc\u0627 \u0627\u0648\u0644 \u062f\u06cc\u062a\u0627 fetch \u0628\u0634\u0647.\n\u062a\u0648\u06cc \u0627\u06cc\u0646 \u0645\u062b\u0627\u0644\u064f \u0627\u0648\u0644 \u06a9\u0634 \u0686\u06a9 \u0634\u062f\u0647 \u0627\u06af\u0631 \u06a9\u0634 \u062e\u0627\u0644\u06cc \u0628\u0648\u062f \u0641\u0686 \u0645\u06cc\u0634\u0647 \u062f\u0631 \u063a\u06cc\u0631 \u0627\u06cc\u0646 \u0635\u0648\u0631\u062a \u0627\u0632 \u06a9\u0634 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u0634\u0647."}),"\n",(0,c.jsx)(n.p,{children:"\u062f\u0627\u06a9\u06cc\u0648\u0645\u0646\u062a\u0634:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API",children:"mdn"})}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u0644\u06cc\u0646\u06a9-\u0647\u0627",children:"\u0644\u06cc\u0646\u06a9 \u0647\u0627"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u0627\u06cc\u0646 \u06a9\u062f \u0631\u0648 \u0627\u0632 \u0631\u0648\u06cc \u06cc\u0647 \u0622\u0645\u0648\u0632\u0634 \u06cc\u0648\u062a\u0648\u0628 \u0646\u0648\u0634\u062a\u0645: ",(0,c.jsx)(n.a,{href:"https://www.youtube.com/watch?v=WbbAPfDVqfY",children:"\u0644\u06cc\u0646\u06a9\u0634"})]}),"\n",(0,c.jsxs)(n.li,{children:["\u06af\u0648\u06af\u0644 \u0647\u0645 \u06cc\u0647 \u0644\u0627\u06cc\u0628\u0631\u0631\u06cc \u062f\u0631\u0633\u062a \u06a9\u0631\u062f\u0647 \u06a9\u0647 \u062e\u06cc\u0644\u06cc \u0686\u06cc\u0632\u0627 \u0631\u0648 \u06a9\u0647 \u0634\u0627\u06cc\u062f \u0627\u062f\u0648\u0646\u0633 \u0647\u0645 \u0628\u0627\u0634\u0646 \u0631\u0648 \u0631\u0627\u062d\u062a \u0647\u0646\u062f\u0644 \u06a9\u0631\u062f\u0647. ",(0,c.jsx)(n.a,{href:"https://developers.google.com/web/tools/workbox",children:"\u0644\u06cc\u0646\u06a9\u0634"})]}),"\n",(0,c.jsxs)(n.li,{children:["\u06cc\u0647 \u0633\u0627\u06cc\u062a \u062f\u06cc\u06af\u0647 \u0647\u0645 \u0647\u0633\u062a \u06a9\u0647 \u062e\u0648\u0628 \u06af\u0641\u062a\u0647 \u0628\u062f \u0646\u06cc\u0633\u062a \u0686\u06a9\u0634 \u06a9\u0646\u06cc\u0645 ",(0,c.jsx)(n.a,{href:"https://www.freecodecamp.org/news/build-a-pwa-from-scratch-with-html-css-and-javascript/",children:"\u0644\u06cc\u0646\u06a9\u0634"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>t});var c=s(7294);const r={},i=c.createContext(r);function t(e){const n=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);