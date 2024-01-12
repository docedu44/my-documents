"use strict";(self.webpackChunkmy_documents=self.webpackChunkmy_documents||[]).push([[1477],{3785:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=o(5893),t=o(1151);const r={id:"node-ts",title:"Node with TS",author:"mamadfar"},s=void 0,c={id:"Experiences/Deployment/docker/node-ts",title:"Node with TS",description:"Dcokerfile",source:"@site/docs/Experiences/Deployment/docker/node-ts.mdx",sourceDirName:"Experiences/Deployment/docker",slug:"/Experiences/Deployment/docker/node-ts",permalink:"/my-documents/docs/Experiences/Deployment/docker/node-ts",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Experiences/Deployment/docker/node-ts.mdx",tags:[],version:"current",frontMatter:{id:"node-ts",title:"Node with TS",author:"mamadfar"},sidebar:"tutorialSidebar",previous:{title:"docker-nginx-react",permalink:"/my-documents/docs/Experiences/Deployment/docker/docker-react"},next:{title:"nginx-react",permalink:"/my-documents/docs/Experiences/Deployment/nginx/nginx-react"}},d={},l=[{value:"Dcokerfile",id:"dcokerfile",level:2},{value:"Without Docker Compose",id:"without-docker-compose",level:3},{value:"With Docker Compose",id:"with-docker-compose",level:3}];function a(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"dcokerfile",children:"Dcokerfile"}),"\n",(0,i.jsx)(n.p,{children:"To run a Node.js and TypeScript application on Docker, you'll need to create a Dockerfile that installs Node.js and TypeScript, and then builds and runs the application. Here's a step-by-step guide on how to do it:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Create a new directory for your application and navigate into it:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mkdir my-app && cd my-app\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Create a new ",(0,i.jsx)(n.code,{children:"package.json"})," file with the following content:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "name": "my-app",\n  "version": "1.0.0",\n  "description": "",\n  "scripts": {\n    "start": "node dist/index.js",\n    "build": "tsc"\n  },\n  "dependencies": {\n    "express": "^4.17.1"\n  },\n  "devDependencies": {\n    "@types/express": "^4.17.13",\n    "typescript": "^4.3.5"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"This will define your Node.js and TypeScript dependencies, as well as the scripts that will build and run your application."}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["Create a new ",(0,i.jsx)(n.code,{children:"tsconfig.json"})," file with the following content:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "compilerOptions": {\n    "target": "ES2020",\n    "module": "commonjs",\n    "outDir": "dist",\n    "strict": true,\n    "esModuleInterop": true\n  },\n  "exclude": [\n    "node_modules"\n  ]\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This will define your TypeScript compiler options, and tell it to output the compiled JavaScript files into the ",(0,i.jsx)(n.code,{children:"dist"})," directory."]}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["Create a new ",(0,i.jsx)(n.code,{children:"Dockerfile"})," file with the following content:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Dockerfile",children:'FROM node:18-alpine\n\nWORKDIR /app\n\nCOPY package*.json ./\n\nRUN npm install\n\nCOPY . .\n\nRUN npm run build\n\nCMD [ "npm", "start" ]\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This Dockerfile will create a new image that's based on the official Node.js 14 Alpine image, copy your ",(0,i.jsx)(n.code,{children:"package.json"})," and ",(0,i.jsx)(n.code,{children:"package-lock.json"})," files into the ",(0,i.jsx)(n.code,{children:"/app"})," directory, install your dependencies, copy the rest of your application files, build your TypeScript code, and start your application."]}),"\n",(0,i.jsx)(n.h3,{id:"without-docker-compose",children:"Without Docker Compose"}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsx)(n.li,{children:"Build your Docker image by running the following command:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker build -t my-app .\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This will build a new Docker image called ",(0,i.jsx)(n.code,{children:"my-app"}),"."]}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsx)(n.li,{children:"Run your Docker container by running the following command:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker run -p 8080:8080 my-app\n"})}),"\n",(0,i.jsx)(n.p,{children:"This will run your Docker container and map port 8080 from your host to port 8080 in the container."}),"\n",(0,i.jsxs)(n.p,{children:["That's it! Your Node.js and TypeScript application is now running on Docker. You can access it by visiting ",(0,i.jsx)(n.code,{children:"http://localhost:8080"})," in your web browser."]}),"\n",(0,i.jsx)(n.h3,{id:"with-docker-compose",children:"With Docker Compose"}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsxs)(n.li,{children:["Create a ",(0,i.jsx)(n.code,{children:"docker-compose.yml"})," file:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'version: "3"\nservices:\n  app:\n    build: .\n    ports:\n      - "5000:5000"\n    environment:\n      NODE_ENV: production\n      PORT: 5000\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This ",(0,i.jsx)(n.code,{children:"docker-compose.yml"})," file defines a service called ",(0,i.jsx)(n.code,{children:"app"})," that builds the Docker image from the Dockerfile in the current directory (",(0,i.jsx)(n.code,{children:"."}),"). It maps the container port ",(0,i.jsx)(n.code,{children:"3000"})," to the host port ",(0,i.jsx)(n.code,{children:"3000"}),", and sets the ",(0,i.jsx)(n.code,{children:"NODE_ENV"})," environment variable to ",(0,i.jsx)(n.code,{children:"production"}),"."]}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsx)(n.li,{children:"Start the application:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"docker-compose up\n"})}),"\n",(0,i.jsx)(n.p,{children:"This command builds the Docker image and starts the container. You should see the application logs in the console."})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>s});var i=o(7294);const t={},r=i.createContext(t);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);