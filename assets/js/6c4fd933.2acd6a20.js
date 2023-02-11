"use strict";(self.webpackChunkmy_documents=self.webpackChunkmy_documents||[]).push([[6617],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,v=p["".concat(l,".").concat(m)]||p[m]||s[m]||a;return n?o.createElement(v,i(i({ref:t},c),{},{components:n})):o.createElement(v,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7060:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>d,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const a={id:"vue-tips1",title:"\u0646\u06a9\u0627\u062a vue - \u0628\u062e\u0634 1"},i=void 0,d={unversionedId:"Experiences/Frontend/vue/vue-tips1",id:"Experiences/Frontend/vue/vue-tips1",title:"\u0646\u06a9\u0627\u062a vue - \u0628\u062e\u0634 1",description:"update value in child component",source:"@site/docs/Experiences/Frontend/vue/vue-tips1.mdx",sourceDirName:"Experiences/Frontend/vue",slug:"/Experiences/Frontend/vue/vue-tips1",permalink:"/my-documents/docs/Experiences/Frontend/vue/vue-tips1",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Experiences/Frontend/vue/vue-tips1.mdx",tags:[],version:"current",frontMatter:{id:"vue-tips1",title:"\u0646\u06a9\u0627\u062a vue - \u0628\u062e\u0634 1"},sidebar:"tutorialSidebar",previous:{title:"\u0646\u0635\u0628 Tailwind",permalink:"/my-documents/docs/Experiences/Frontend/tailwind/tailwind-next"},next:{title:"\u0686\u06af\u0648\u0646\u0647 mdx \u0628\u0646\u0648\u06cc\u0633\u06cc\u0645",permalink:"/my-documents/docs/"}},l={},u=[{value:"update value in child component",id:"update-value-in-child-component",level:3}],c={toc:u};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"update-value-in-child-component"},"update value in child component"),(0,r.kt)("p",null,"\u0647\u0631\u06af\u0627\u0647 \u0628\u062e\u0648\u0627\u0647\u06cc\u0645 \u06cc\u06a9 \u0645\u0642\u062f\u0627\u0631\u06cc \u0631\u0627 \u0627\u0632 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0648\u0627\u0644\u062f \u0628\u0647 \u0641\u0631\u0632\u0646\u062f \u0628\u062f\u0647\u06cc\u0645 \u0648 \u062f\u0631 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0641\u0631\u0632\u0646\u062f \u0628\u062e\u0648\u0627\u0647\u06cc\u0645 \u0622\u0646 \u0631\u0627 \u0622\u067e\u062f\u06cc\u062a \u06a9\u0646\u06cc\u0645 \u0648 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0648\u0627\u0644\u062f \u0627\u0632 \u0627\u06cc\u0646 \u062a\u063a\u06cc\u06cc\u0631\u0627\u062a \u0645\u0637\u0644\u0639 \u0634\u0648\u062f\u060c \u0628\u0627\u06cc\u062f \u0628\u0647 \u0635\u0648\u0631\u062a \u0632\u06cc\u0631 \u0639\u0645\u0644 \u06a9\u0646\u06cc\u0645:"),(0,r.kt)("div",{dir:"ltr"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<template>\n    <SingleTodo\n    :addTodo="addTodo"\n    :title="title"\n    @update:title="title = $event"\n    :date="date"\n    @update:date="date = $event"/>\n</template>\n\n<script>\n    import { ref } from "@vue/reactivity";\n    import { onMounted } from "@vue/runtime-core";\n    import axios from "axios";\n    import SingleTodo from "@/components/SingleTodo.vue";\n    export default {\n        name: "Todos",\n        components: {\n            SingleTodo,\n        },\n        setup() {\n            const todos = ref([]);\n            const title = ref("");\n            const date = ref("");\n            const status = ref("active");\n\n            onMounted(async () => {\n            //* get data\n            try {\n                const { data } = await axios.get("http://localhost:3000/todos");\n            todos.value = data;\n            } catch (e) {\n                console.log(e);\n            }\n        });\n\n        //* add new todo\n        const addTodo = async () => {\n        try {\n        const { data } = await axios.post("http://localhost:3000/todos", {\n        id: Math.random() * 99999999,\n        title: title.value,\n        date: date.value,\n        status: status.value,\n    });\n        todos.value = [...todos.value, data];\n        title.value = "";\n        date.value = "";\n        } catch (e) {\n            console.log(e);\n        }\n    };\n\n        return {\n            todos,\n            addTodo,\n            title,\n            date,\n        };\n    },\n    };\n<\/script>\n\n'))),(0,r.kt)("p",null,"\u062d\u0627\u0644 \u062f\u0631 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0641\u0631\u0632\u0646\u062f \u0628\u0647 \u0635\u0648\u0631\u062a \u0632\u06cc\u0631 \u0639\u0645\u0644 \u0645\u06cc \u06a9\u0646\u06cc\u0645:"),(0,r.kt)("div",{dir:"ltr"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'\n<template>\n    <form @submit.prevent="addTodo">\n        <div class="new-todo">\n            <button>\n                <span class="circle"></span>\n            </button>\n            <input type="text" placeholder="Create a new todo..."\n            :value="title"\n            @input="$emit(\'update:title\', $event.target.value)" />\n\n            <input type="date" class="ml-auto"\n            :value="date"\n            @input="$emit(\'update:date\', $event.target.value)" />\n        </div>\n    </form>\n</template>\n\n<script>\n    export default {\n        name: "SingleTodo",\n        props: ["addTodo", "title", "date"],\n        emits: ["update:title", "update:date"],\n        setup() {}\n    };\n<\/script>\n\n\n'))))}s.isMDXComponent=!0}}]);