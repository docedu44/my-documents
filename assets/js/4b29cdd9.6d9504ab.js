"use strict";(self.webpackChunkmy_documents=self.webpackChunkmy_documents||[]).push([[4424],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9186:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={title:"Hooks"},i=void 0,l={unversionedId:"Experiences/Frontend/react/react/hooks",id:"Experiences/Frontend/react/react/hooks",title:"Hooks",description:"react-router-dom",source:"@site/docs/Experiences/Frontend/react/react/hooks.mdx",sourceDirName:"Experiences/Frontend/react/react",slug:"/Experiences/Frontend/react/react/hooks",permalink:"/my-documents/docs/Experiences/Frontend/react/react/hooks",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Experiences/Frontend/react/react/hooks.mdx",tags:[],version:"current",frontMatter:{title:"Hooks"},sidebar:"tutorialSidebar",previous:{title:"Next",permalink:"/my-documents/docs/Experiences/Frontend/nextjs/next-hints"},next:{title:"packages",permalink:"/my-documents/docs/Experiences/Frontend/react/react/react-packages"}},s={},u=[{value:"react-router-dom",id:"react-router-dom",level:2},{value:"useSearchParams &amp; useLocation",id:"usesearchparams--uselocation",level:3},{value:"useNavigate",id:"usenavigate",level:3},{value:"useReducer",id:"usereducer",level:3},{value:"useCallback",id:"usecallback",level:3},{value:"useMemo",id:"usememo",level:3},{value:"useEffect",id:"useeffect",level:3},{value:"Custom Hooks",id:"custom-hooks",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"react-router-dom"},"react-router-dom"),(0,r.kt)("h3",{id:"usesearchparams--uselocation"},"useSearchParams & useLocation"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useSearchParams:"),"\n\u06cc\u06a9\u06cc \u0627\u0632 \u0647\u0648\u06a9 \u0647\u0627\u06cc \u067e\u0631\u06a9\u0627\u0631\u0628\u0631\u062f \u0628\u0631\u0627\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," \u0628\u0631\u0627\u06cc \u062c\u0633\u062a\u062c\u0648 \u0645\u06cc \u0628\u0627\u0634\u062f \u062f\u0642\u06cc\u0642\u0627 \u0645\u0627\u0646\u0646\u062f ",(0,r.kt)("inlineCode",{parentName:"p"},"useState")," \u0645\u06cc \u0628\u0627\u0634\u062f\u060c \u0628\u0627 \u0627\u06cc\u0646 \u0641\u0631\u0642 \u06a9 \u0641\u0642\u0637 \u062f\u0631 ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," \u0645\u0642\u062f\u0627\u0631 \u0631\u0627 \u0630\u062e\u06cc\u0631\u0647 \u0648 \u0628\u0627\u0632\u06cc\u0627\u0628\u06cc \u0645\u06cc \u06a9\u0646\u062f."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useLocation:"),"\n\u062a\u0648\u0633\u0637 \u0627\u06cc\u0646 \u0647\u0648\u06a9 \u0645\u06cc \u062a\u0648\u0627\u0646 \u0628\u0647 \u0645\u0633\u06cc\u0631 ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," \u0648 ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," \u0647\u0627 \u0648 \u0628\u0642\u06cc\u0647 \u0645\u0648\u0627\u0631\u062f \u062f\u0633\u062a\u0631\u0633\u06cc \u062f\u0627\u0634\u062a."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import {getBooks} from "../data"; // fake data\nimport {NavLink, useSearchParams, useLocation} from "react-router-dom";\n\nexport const Books = () => {\n    const books = getBooks();\n    const [searchParams, setSearchParams] = useSearchParams();\n    const location = useLocation();\n\n    const handleSearchParams = (e) => {\n        let filter = e.target.value;\n        filter ? setSearchParams({filter: filter}) : setSearchParams({});\n    };\n\n    const filteredBooks = books.filter(book => {\n        let filter = searchParams.get("filter");\n        if (!filter) return true;\n        let name = book.name.toLowerCase();\n        return name.startsWith(filter.toLowerCase());\n    });\n\n    return (\n            <nav>\n                <input type="text" value={searchParams.get("filter") || ""} onChange={handleSearchParams} placeholder="Search book..."/>\n                {filteredBooks.map(book => (\n                    <NavLink to={`/books/${book.number}${location.search}`} key={book.number} style={({isActive}) => { // \u0645\u06cc \u062a\u0648\u0627\u0646 \u0628 \u0627\u06cc\u0646 \u0635\u0648\u0631\u062a \u0647\u0646\u06af\u0627\u0645 \u06a9\u0644\u06cc\u06a9 \u0631\u0648\u06cc \u0647\u0631 \u0644\u06cc\u0646\u06a9\u060c \u0628 \u0622\u0646 \u06cc\u06a9 \u0627\u0633\u062a\u0627\u06cc\u0644 \u062e\u0627\u0635 \u0628\u062f\u0647\u06cc\u0645\n                        return { display: "block", color: isActive && "red" }\n                    }}>{book.name}</NavLink>\n                ))}\n            </nav>)}\n')),(0,r.kt)("h3",{id:"usenavigate"},"useNavigate"),(0,r.kt)("p",null,"\u0627\u0632 \u0627\u06cc\u0646 \u0647\u0648\u06a9 \u0645\u06cc \u062a\u0648\u0627\u0646 \u062c\u0627\u0628\u0647 \u062c\u0627 \u06a9\u0631\u062f\u0646 \u06cc\u0648\u0632\u0631 \u0628\u0639\u062f \u0627\u0632 \u06cc\u06a9 \u0639\u0645\u0644\u06cc\u0627\u062a \u062e\u0627\u0635 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import {useNavigate} from "react-router-dom";\n\nexport const App = () => {\nconst navigate = useNavigate();\n  return <button onClick={() => navigate("/")}>click</button>\n}\n')),(0,r.kt)("h3",{id:"usereducer"},"useReducer"),(0,r.kt)("p",null,"\u062f\u0642\u06cc\u0642\u0627 \u0645\u0627\u0646\u0646\u062f ",(0,r.kt)("inlineCode",{parentName:"p"},"useState")," \u0645\u06cc \u0628\u0627\u0634\u062f \u0628\u0627 \u0627\u06cc\u0646 \u0641\u0631\u0642 \u06a9 \u0645\u0648\u0642\u0639\u06cc \u0627\u0632 \u0627\u06cc\u0646 \u0647\u0648\u06a9 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc \u06a9\u0646\u06cc\u0645 \u06a9 \u0628\u062e\u0648\u0627\u0647\u06cc\u0645 \u0686\u0646\u062f ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," \u06a9 \u0628\u0647\u0645 \u0645\u0631\u0628\u0648\u0637 \u0647\u0633\u062a\u0646\u062f \u0631\u0627 \u0645\u062f\u06cc\u0631\u06cc\u062a \u06a9\u0646\u06cc\u0645."),(0,r.kt)("p",null,"\u0647\u0645\u0686\u0646\u06cc\u0646 \u0627\u06cc\u0646 \u0647\u0648\u06a9 \u0628 \u0645\u0627 \u06cc\u06a9 ",(0,r.kt)("inlineCode",{parentName:"p"},"function")," \u0645\u06cc \u062f\u0647\u062f \u06a9 \u0645\u06cc\u062a\u0648\u0627\u0646 \u0627\u0632 \u0622\u0646 \u0628\u0631\u0627\u06cc \u0627\u0646\u062c\u0627\u0645 \u06cc\u06a9 \u0633\u0631\u06cc \u06a9\u0627\u0631 \u0647\u0627\u06cc \u067e\u06cc\u0686\u06cc\u062f\u0647 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f \u0648 \u0628\u0639\u062f \u0627\u0632 \u0622\u0646\u060c ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," \u0647\u0627\u06cc\u0645\u0627\u0646 \u0631\u0627 \u0622\u067e\u062f\u06cc\u062a \u06a9\u0646\u06cc\u0645.(\u0628\u06cc\u0634\u062a\u0631 \u0628\u0631\u0627\u06cc ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," \u0647\u0627\u06cc \u067e\u06cc\u0686\u06cc\u062f\u0647 \u0648 \u0628\u0647\u0645 \u0645\u0631\u062a\u0628\u0637 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc \u0634\u0648\u062f.)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import {useReducer} from "react";\nimport "./Input.css";\n\nconst inputReducer = (state: any, action: any) => { //* We can write it inside the component too\n    switch (action.type) {\n        case "CHANGE":\n            return {\n                ...state, // Make a copy of old values\n                value: action.payload,\n                isValid: true\n            };\n        default:\n            return state\n    }\n}\nconst Input = (props: any) => {\n\n    //* first parameter is the value which is returned from the inputReducer and dispatch is a func to execute the action\n    const [inputState, dispatch] = useReducer(inputReducer, {value: "", isValid: false}); // second parameter is initial value\n\n    const changeHandler = (e: any) => {\n        dispatch({type: "CHANGE", payload: e.target.value})\n    }\n\n    const element = props.element === "input" ?\n        <input id={props.id} type={props.type} placeholder={props.placeholder} onChange={changeHandler}\n               value={inputState.value}/> :\n        <textarea id={props.id} rows={props.rows || 3} onChange={changeHandler} value={inputState.value}/>\n\n    return (\n        <div className={`form-control ${!inputState.isValid && "form-control--invalid"}`}>\n            <label htmlFor={props.id}>{props.label}</label>\n            {element}\n            {!inputState.isValid && <p>{props.errorText}</p>}\n        </div>\n    )\n};\n\nexport default Input;\n')),(0,r.kt)("h3",{id:"usecallback"},"useCallback"),(0,r.kt)("p",null,"\u0647\u0631\u06af\u0627\u0647 \u062f\u0631\u0648\u0646 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0641\u0631\u0632\u0646\u062f\u060c \u06cc\u06a9 \u062a\u0627\u0628\u0639\u06cc \u0631\u0627 \u06a9 \u062f\u0631 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0648\u0627\u0644\u062f \u0645\u06cc \u0628\u0627\u0634\u062f \u0631\u0648 \u0635\u062f\u0627 \u0632\u062f\u06cc\u0645\u060c \u0628\u0627\u06cc\u062f \u0622\u0646 \u062a\u0627\u0628\u0639 \u06a9 \u062f\u0631 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0648\u0627\u0644\u062f \u0645\u06cc \u0628\u0627\u0634\u062f \u0631\u0627 \u062f\u0631 ",(0,r.kt)("inlineCode",{parentName:"p"},"useCallback")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645.\n\u0632\u06cc\u0631\u0627 \u0628\u0627 \u0635\u062f\u0627 \u0632\u062f\u0646 \u062a\u0627\u0628\u0639 \u062f\u0631 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0641\u0631\u0632\u0646\u062f\u060c \u0628\u0627\u0639\u062b \u0631\u0646\u062f\u0631 \u062f\u0648\u0628\u0627\u0631\u0647 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0648\u0627\u0644\u062f \u0645\u06cc \u0634\u0648\u06cc\u0645 \u0648 \u0628\u0627 \u0627\u06cc\u0646\u06a9\u0627\u0631\u060c \u0645\u0627 \u062f\u0648\u0628\u0627\u0631\u0647 \u0622\u0646 \u062a\u0627\u0628\u0639 \u06a9 \u062f\u0631 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0648\u0627\u0644\u062f \u0645\u06cc \u0628\u0627\u0634\u062f \u0631\u0627 \u062f\u0648\u0628\u0627\u0631\u0647 \u0635\u062f\u0627 \u0645\u06cc\u0632\u0646\u06cc\u0645 \u06a9 \u0628\u0631\u0627\u06cc \u062c\u0644\u0648\u06af\u06cc\u0631\u06cc \u0627\u0632 \u0627\u06cc\u0646\u06a9\u0627\u0631\u060c \u0627\u0632 \u0627\u06cc\u0646 \u0647\u0648\u06a9 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u06a9\u0646\u06cc\u0645."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"export const NewPlace = () => {\n      const titleInputHandler = useCallback((id: any, value: any, isValid: boolean) => {}, []);\n      return ()\n}\n")),(0,r.kt)("p",null,"\u062f\u0631 \u0648\u0627\u0642\u0639 \u0628\u0631\u0627\u06cc \u0627\u0648\u0644\u06cc\u0646 \u0628\u0627\u0631 \u06a9 \u062a\u0627\u0628\u0639 \u062f\u0631\u0648\u0646 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0648\u0627\u0644\u062f \u0627\u062c\u0631\u0627 \u0645\u06cc\u0634\u0648\u062f\u060c ",(0,r.kt)("inlineCode",{parentName:"p"},"react")," \u0622\u0646 \u0631\u0627 \u0630\u062e\u06cc\u0631\u0647 \u0645\u06cc \u06a9\u0646\u062f \u0648 \u0628\u0631\u0627\u06cc \u0631\u0646\u062f\u0631 \u0647\u0627\u06cc \u0628\u0639\u062f\u06cc\u060c \u062a\u0627\u0628\u0639 \u0631\u0627 \u062f\u0648\u0628\u0627\u0631\u0647 \u0631\u0646\u062f\u0631 \u0646\u0645\u06cc \u06a9\u0646\u062f. \u0648 ",(0,r.kt)("inlineCode",{parentName:"p"},"dependency")," \u0647\u0627\u06cc \u0627\u06cc\u0646 \u0647\u0648\u06a9 \u0646\u06cc\u0632 \u0628\u0631\u0627\u06cc \u0645\u0634\u062e\u0635 \u06a9\u0631\u062f\u0646 \u0627\u06cc\u0646 \u0627\u0633\u062a \u06a9 \u0627\u06cc\u0646 \u062a\u0627\u0628\u0639 \u0647\u0646\u06af\u0627\u0645 \u062a\u063a\u06cc\u06cc\u0631 \u06a9\u062f\u0627\u0645 \u0645\u062a\u063a\u06cc\u06cc\u0631 \u0647\u0627 \u0628\u0627\u06cc\u062f \u062f\u0648\u0628\u0627\u0631\u0647 \u0631\u0646\u062f\u0631 \u0634\u0648\u062f."),(0,r.kt)("p",null,"\ud83c\udf89 \u062f\u0631 \u062d\u0627\u0644\u062a \u06a9\u0644\u06cc \u062a\u0648\u0627\u0628\u0639\u06cc \u06a9 \u0645\u06cc \u062f\u0627\u0646\u06cc\u0645 \u0628\u0627\u0639\u062b \u0631\u0646\u062f\u0631 \u0645\u062c\u062f\u062f \u0645\u06cc \u0634\u0648\u0646\u062f \u0631\u0627 \u0628\u0647\u062a\u0631 \u0627\u0633\u062a \u062f\u0631 ",(0,r.kt)("inlineCode",{parentName:"p"},"useCallback")," \u0642\u0631\u0627\u0631 \u062f\u0647\u06cc\u0645."),(0,r.kt)("h3",{id:"usememo"},"useMemo"),(0,r.kt)("p",null,"\u0627\u06cc\u0646 \u0647\u0648\u06a9 \u0647\u0645 \u0645\u0627\u0646\u0646\u062f ",(0,r.kt)("inlineCode",{parentName:"p"},"useCallback")," \u0645\u06cc \u0628\u0627\u0634\u062f\u060c \u0628\u0627 \u0627\u06cc\u0646 \u0641\u0631\u0642 \u06a9 \u0627\u0632 \u0627\u06cc\u0646 \u062a\u0627\u0628\u0639 \u0647\u0648\u06a9 \u0628\u0631\u0627\u06cc \u0645\u062a\u063a\u06cc\u06cc\u0631 \u0647\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc \u06a9\u0646\u06cc\u0645 (\u0645\u062b\u0644\u0627 \u0622\u0628\u062c\u06a9 \u0647\u0627) \u0648 \u0647\u0646\u06af\u0627\u0645 \u0627\u0631\u0633\u0627\u0644 \u0628 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0641\u0631\u0632\u0646\u062f\u060c \u0645\u06cc \u062a\u0648\u0627\u0646 \u0627\u0632 \u0631\u0646\u062f\u0631 \u062f\u0648\u0628\u0627\u0631\u0647 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0641\u0631\u0632\u0646\u062f \u0647\u0646\u06af\u0627\u0645 \u062a\u063a\u06cc\u06cc\u0631 \u0646\u06a9\u0631\u062f\u0646 \u0627\u06cc\u0646 \u0645\u062a\u063a\u06cc\u06cc\u0631\u060c \u062c\u0644\u0648\u06af\u06cc\u0631\u06cc \u06a9\u0646\u06cc\u0645."),(0,r.kt)("h3",{id:"useeffect"},"useEffect"),(0,r.kt)("p",null,"\u062a\u0648\u0633\u0637 \u0627\u06cc\u0646 \u0647\u0648\u06a9 \u0645\u06cc \u062a\u0648\u0627\u0646 \u0647\u0646\u06af\u0627\u0645 \u0627\u062c\u0631\u0627 \u0634\u062f\u0646 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u06a9\u0627\u0631 \u0647\u0627\u06cc\u06cc \u06a9 \u0645\u062f\u0646\u0638\u0631\u0645\u0627\u0646 \u0647\u0633\u062a\u060c \u0642\u0628\u0644 \u0627\u0632 \u0644\u0648\u062f \u0635\u0641\u062d\u0647 \u0627\u0646\u062c\u0627\u0645 \u0628\u062f\u0647\u06cc\u0645 \u0648 \u0645\u06cc\u062a\u0648\u0627\u0646 \u0686\u0646\u062f\u06cc\u0646 \u0628\u0627\u0631 \u062f\u0631 \u0647\u0631 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0622\u0646 \u0631\u0627 \u0635\u062f\u0627 \u0632\u062f."),(0,r.kt)("p",null,"\ud83c\udf89 \u0647\u0631\u06af\u0627\u0647 \u0645\u0642\u062f\u0627\u0631\u06cc \u0631\u0627 \u0628 \u0635\u0648\u0631\u062a ",(0,r.kt)("inlineCode",{parentName:"p"},"props")," \u06af\u0631\u0641\u062a\u06cc\u0645 \u06cc\u0627 \u0645\u06cc\u062f\u0627\u0646\u0633\u062a\u06cc\u0645 \u06a9 \u06cc\u06a9 \u0645\u0642\u062f\u0627\u0631 \u0627\u0645\u06a9\u0627\u0646 \u062f\u0627\u0631\u062f \u062f\u0631 \u0635\u0641\u062d\u0647 \u062a\u063a\u06cc\u06cc\u0631 \u06a9\u0646\u062f \u0648 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0622\u0646 \u0635\u0641\u062d\u0647 \u0628\u0627\u06cc\u062f \u0631\u0646\u062f\u0631 \u062f\u0648\u0628\u0627\u0631\u0647 \u0634\u0648\u062f\u060c \u062f\u0631 \u0642\u0633\u0645\u062a ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies")," \u0647\u0627\u06cc ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," \u0628\u0627\u06cc\u062f \u0622\u0646 \u0631\u0627 \u0642\u0631\u0627\u0631 \u062f\u0647\u06cc\u0645."),(0,r.kt)("h3",{id:"custom-hooks"},"Custom Hooks"),(0,r.kt)("p",null,"\u0645\u06cc \u062a\u0648\u0627\u0646 \u0628\u0647 \u0631\u0627\u062d\u062a\u06cc \u062f\u0631 ",(0,r.kt)("inlineCode",{parentName:"p"},"react")," \u06cc\u06a9 \u06a9\u0627\u0633\u062a\u0648\u0645 \u0647\u0648\u06a9 \u0628\u0627 \u067e\u06cc\u0634\u0648\u0646\u062f ",(0,r.kt)("inlineCode",{parentName:"p"},"use")," \u0633\u0627\u062e\u062a \u0648 \u0627\u0632 \u0622\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import {useCallback, useReducer} from "react";\nconst formReducer = (state: any, action: any) => {\n    switch (action.type) {\n        case "INPUT_CHANGE":\n            let formIsValid = true;\n            for (const inputId in state.inputs) {\n                if (!state.inputs[inputId]) { // \u0648\u062c\u0648\u062f \u062f\u0627\u0634\u062a\u060c \u0622\u0646 \u0631\u0627 \u0646\u0627\u062f\u06cc\u062f\u0647 \u0628\u06af\u06cc\u0631\u062f \u0648 \u0628\u0647 \u0633\u0631\u0627\u063a \u0645\u0642\u062f\u0627\u0631 \u0628\u0639\u062f\u06cc \u0628\u0631\u0648\u062f \u0648 \u0627\u062f\u0627\u0645\u0647 \u0646\u062f\u0647\u062f falsy \u062a\u0648\u0633\u0637 \u0627\u06cc\u0646 \u0634\u0631\u0637 \u0645\u0627 \u0645\u0634\u062e\u0635 \u0645\u06cc \u06a9\u0646\u06cc\u0645 \u06a9 \u0627\u06af\u0631 \u062f\u0631\u0648\u0646 \u0644\u0648\u067e \u0645\u0627\u060c \u0645\u0642\u062f\u0627\u0631 \u063a\u0644\u0637 \u06cc\u0627\n                    continue;\n                };\n                if (inputId === action.inputId) {\n                    formIsValid = formIsValid && action.isValid;\n                } else {\n                    formIsValid = formIsValid && state.inputs[inputId].isValid;\n                }\n            }\n            return {\n                ...state,\n                inputs: {\n                    ...state.inputs,\n                    [action.inputId]: {value: action.value, isValid: action.isValid}\n                },\n                isValid: formIsValid\n            };\n        default:\n            return state;\n    }\n}\nexport const useForm = (initialInputs: any, initialFormValidity: boolean) => {\n    const [formState, dispatch] = useReducer(formReducer, {\n        inputs: initialInputs,\n        isValid: initialFormValidity\n    });\n\n    const inputHandler = useCallback((id: any, value: any, isValid: boolean) => {\n        dispatch({type: "INPUT_CHANGE", value, isValid, inputId: id})\n    }, [dispatch]);\n\n    return [formState, inputHandler]\n}\n')),(0,r.kt)("p",null,"\u062f\u0631 \u0648\u0627\u0642\u0639 \u062a\u0648\u0633\u0637 \u062e\u0637 \u0622\u062e\u0631 \u0645\u06cc \u062a\u0648\u0627\u0646 \u0645\u0648\u0627\u0631\u062f\u06cc \u06a9 \u0646\u06cc\u0627\u0632 \u062f\u0627\u0631\u06cc\u0645 \u0631\u0627 ",(0,r.kt)("inlineCode",{parentName:"p"},"return")," \u06a9\u0646\u06cc\u0645 \u0648 \u062f\u0631 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u062a\u0648\u0633\u0637 ",(0,r.kt)("inlineCode",{parentName:"p"},"Array destracturing")," \u0627\u0632 \u0622\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},' const [formState, inputHandler] = useForm({\n            title: {\n                value: "",\n                isValid: false\n            },\n            description: {\n                value: "",\n                isValid: false\n            },\n        }, false);\n')),(0,r.kt)("p",null,"\ud83c\udf89 \u0647\u0645\u0686\u0646\u06cc\u0646 \u0645\u06cc \u062a\u0648\u0627\u0646 \u0628\u0647 \u0635\u0648\u0631\u062a \u0632\u06cc\u0631 \u0647\u0645\u0632\u0645\u0627\u0646 \u0627\u0632 ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," \u0648 ",(0,r.kt)("inlineCode",{parentName:"p"},"custom hook")," \u0648 ",(0,r.kt)("inlineCode",{parentName:"p"},"useReducer")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f \u06a9 \u0628\u0633\u06cc\u0627\u0631 \u06a9\u0627\u0631\u0628\u0631\u062f\u06cc \u0645\u06cc \u0628\u0627\u0634\u062f:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, {createContext, FC, useCallback, useContext, useReducer} from "react";\n\nconst OrderContext = createContext<any>(null);\n\nexport const useOrder = () => {\n    const orderContext = useContext(OrderContext);\n\n    if (!orderContext) throw new Error("Something went wrong!");\n\n    return orderContext;\n};\n\nconst initialState = {\n    orderStatus: "",\n    orderNumber: 0\n};\n\nconst orderReducer = (state: typeof initialState, action: any) => {\n    switch (action.type) {\n        case "COMPLETE":\n            return {...state, orderNumber: action.payload, orderStatus: "complete"};\n        case "LOADING":\n            return {...state, orderStatus: "loading"};\n        case "FAILED":\n            return {...state, orderStatus: "failed", orderNumber: 0};\n        case "RESET":\n            return {...state, orderStatus: "", orderNumber: 0};\n        default:\n            return state;\n    }\n};\n\nconst OrderProvider:FC<any> = ({children}) => {\n\n    const [state, dispatch] = useReducer(orderReducer, initialState);\n\n    const value = {\n        state,\n        orderStatusHandler: useCallback((type: string, payload: string | number) => {\n            dispatch({type, payload});\n        }, [dispatch])\n    };\n    return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;\n};\n\nexport default OrderProvider;\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0647\u0645\u0686\u0646\u06cc\u0646 \u0645\u06cc \u062a\u0648\u0627\u0646 ",(0,r.kt)("inlineCode",{parentName:"li"},"value")," \u0631\u0627 \u0628 \u0635\u0648\u0631\u062a \u06cc\u06a9 ",(0,r.kt)("inlineCode",{parentName:"li"},"array")," \u0646\u0648\u0634\u062a"),(0,r.kt)("li",{parentName:"ul"},"\u062f\u0631 \u0627\u06cc\u0646\u062c\u0627 ",(0,r.kt)("inlineCode",{parentName:"li"},"state")," \u06cc\u06a9 \u0622\u0628\u062c\u06a9\u062a \u0627\u0632 \u0645\u0642\u0627\u062f\u06cc\u0631 ",(0,r.kt)("inlineCode",{parentName:"li"},"initialState")," \u0645\u06cc \u0628\u0627\u0634\u062f."),(0,r.kt)("li",{parentName:"ul"},"\u062d\u0627\u0644 \u0628\u0627\u06cc\u062f \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0647\u0627\u06cc\u06cc \u06a9 \u0645\u062f\u0646\u0638\u0631\u0645\u0627\u0646 \u0627\u0633\u062a \u0631\u0627 \u062f\u0631\u0648\u0646 ",(0,r.kt)("inlineCode",{parentName:"li"},"OrderProvider")," \u0642\u0631\u0627\u0631 \u062f\u0647\u06cc\u0645."),(0,r.kt)("li",{parentName:"ul"},"\u0647\u0631\u062c\u0627 \u0646\u06cc\u0627\u0632 \u0628 \u0645\u0642\u0627\u062f\u06cc\u0631 ",(0,r.kt)("inlineCode",{parentName:"li"},"value")," \u0628\u0648\u062f \u0646\u06cc\u0632 \u0645\u06cc \u062a\u0648\u0627\u0646 \u0627\u0632 ",(0,r.kt)("inlineCode",{parentName:"li"},"useOrder")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f.")))}p.isMDXComponent=!0}}]);