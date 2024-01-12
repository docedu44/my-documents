"use strict";(self.webpackChunkmy_documents=self.webpackChunkmy_documents||[]).push([[6617],{4615:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>l,frontMatter:()=>d,metadata:()=>i,toc:()=>c});var o=n(5893),a=n(1151);const d={id:"vue-tips1",title:"\u0646\u06a9\u0627\u062a vue - \u0628\u062e\u0634 1"},s=void 0,i={id:"Experiences/Frontend/vue/vue-tips1",title:"\u0646\u06a9\u0627\u062a vue - \u0628\u062e\u0634 1",description:"update value in child component",source:"@site/docs/Experiences/Frontend/vue/vue-tips1.mdx",sourceDirName:"Experiences/Frontend/vue",slug:"/Experiences/Frontend/vue/vue-tips1",permalink:"/my-documents/docs/Experiences/Frontend/vue/vue-tips1",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Experiences/Frontend/vue/vue-tips1.mdx",tags:[],version:"current",frontMatter:{id:"vue-tips1",title:"\u0646\u06a9\u0627\u062a vue - \u0628\u062e\u0634 1"},sidebar:"tutorialSidebar",previous:{title:"Tailwind Theme",permalink:"/my-documents/docs/Experiences/Frontend/tailwind/tailwind-theme"},next:{title:"\u0686\u06af\u0648\u0646\u0647 mdx \u0628\u0646\u0648\u06cc\u0633\u06cc\u0645",permalink:"/my-documents/docs/"}},r={},c=[{value:"update value in child component",id:"update-value-in-child-component",level:3}];function u(e){const t={code:"code",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h3,{id:"update-value-in-child-component",children:"update value in child component"}),"\n",(0,o.jsx)(t.p,{children:"\u0647\u0631\u06af\u0627\u0647 \u0628\u062e\u0648\u0627\u0647\u06cc\u0645 \u06cc\u06a9 \u0645\u0642\u062f\u0627\u0631\u06cc \u0631\u0627 \u0627\u0632 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0648\u0627\u0644\u062f \u0628\u0647 \u0641\u0631\u0632\u0646\u062f \u0628\u062f\u0647\u06cc\u0645 \u0648 \u062f\u0631 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0641\u0631\u0632\u0646\u062f \u0628\u062e\u0648\u0627\u0647\u06cc\u0645 \u0622\u0646 \u0631\u0627 \u0622\u067e\u062f\u06cc\u062a \u06a9\u0646\u06cc\u0645 \u0648 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0648\u0627\u0644\u062f \u0627\u0632 \u0627\u06cc\u0646 \u062a\u063a\u06cc\u06cc\u0631\u0627\u062a \u0645\u0637\u0644\u0639 \u0634\u0648\u062f\u060c \u0628\u0627\u06cc\u062f \u0628\u0647 \u0635\u0648\u0631\u062a \u0632\u06cc\u0631 \u0639\u0645\u0644 \u06a9\u0646\u06cc\u0645:"}),"\n",(0,o.jsx)("div",{dir:"ltr",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'<template>\n    <SingleTodo\n    :addTodo="addTodo"\n    :title="title"\n    @update:title="title = $event"\n    :date="date"\n    @update:date="date = $event"/>\n</template>\n\n<script>\n    import { ref } from "@vue/reactivity";\n    import { onMounted } from "@vue/runtime-core";\n    import axios from "axios";\n    import SingleTodo from "@/components/SingleTodo.vue";\n    export default {\n        name: "Todos",\n        components: {\n            SingleTodo,\n        },\n        setup() {\n            const todos = ref([]);\n            const title = ref("");\n            const date = ref("");\n            const status = ref("active");\n\n            onMounted(async () => {\n            //* get data\n            try {\n                const { data } = await axios.get("http://localhost:3000/todos");\n            todos.value = data;\n            } catch (e) {\n                console.log(e);\n            }\n        });\n\n        //* add new todo\n        const addTodo = async () => {\n        try {\n        const { data } = await axios.post("http://localhost:3000/todos", {\n        id: Math.random() * 99999999,\n        title: title.value,\n        date: date.value,\n        status: status.value,\n    });\n        todos.value = [...todos.value, data];\n        title.value = "";\n        date.value = "";\n        } catch (e) {\n            console.log(e);\n        }\n    };\n\n        return {\n            todos,\n            addTodo,\n            title,\n            date,\n        };\n    },\n    };\n<\/script>\n\n'})})}),"\n",(0,o.jsx)(t.p,{children:"\u062d\u0627\u0644 \u062f\u0631 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0641\u0631\u0632\u0646\u062f \u0628\u0647 \u0635\u0648\u0631\u062a \u0632\u06cc\u0631 \u0639\u0645\u0644 \u0645\u06cc \u06a9\u0646\u06cc\u0645:"}),"\n",(0,o.jsx)("div",{dir:"ltr",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'\n<template>\n    <form @submit.prevent="addTodo">\n        <div class="new-todo">\n            <button>\n                <span class="circle"></span>\n            </button>\n            <input type="text" placeholder="Create a new todo..."\n            :value="title"\n            @input="$emit(\'update:title\', $event.target.value)" />\n\n            <input type="date" class="ml-auto"\n            :value="date"\n            @input="$emit(\'update:date\', $event.target.value)" />\n        </div>\n    </form>\n</template>\n\n<script>\n    export default {\n        name: "SingleTodo",\n        props: ["addTodo", "title", "date"],\n        emits: ["update:title", "update:date"],\n        setup() {}\n    };\n<\/script>\n\n\n'})})})]})}function l(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var o=n(7294);const a={},d=o.createContext(a);function s(e){const t=o.useContext(d);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(d.Provider,{value:t},e.children)}}}]);