"use strict";(self.webpackChunkmy_documents=self.webpackChunkmy_documents||[]).push([[1779],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,k=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(k,p(p({ref:n},c),{},{components:t})):r.createElement(k,p({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,p=new Array(i);p[0]=d;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var s=2;s<i;s++)p[s]=t[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1940:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),p=["components"],l={id:"ts-in-react",title:"TS in React"},o=void 0,s={unversionedId:"Experiences/react/tsx/ts-in-react",id:"Experiences/react/tsx/ts-in-react",title:"TS in React",description:"Install",source:"@site/docs/Experiences/react/tsx/ts-in-react.mdx",sourceDirName:"Experiences/react/tsx",slug:"/Experiences/react/tsx/ts-in-react",permalink:"/my-documents/docs/Experiences/react/tsx/ts-in-react",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Experiences/react/tsx/ts-in-react.mdx",tags:[],version:"current",frontMatter:{id:"ts-in-react",title:"TS in React"},sidebar:"tutorialSidebar",previous:{title:"Generate Route",permalink:"/my-documents/docs/Experiences/react/tsx/dynamic-generate-route"},next:{title:"expo-packages",permalink:"/my-documents/docs/Experiences/react-native/expo-packages"}},c={},u=[{value:"Install",id:"install",level:2},{value:"Tips",id:"tips",level:3},{value:"props",id:"props",level:2},{value:"state",id:"state",level:2},{value:"Union",id:"union",level:2},{value:"event",id:"event",level:2},{value:"ref",id:"ref",level:2}],d={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 ",(0,i.kt)("inlineCode",{parentName:"p"},"ts")," \u0645\u06cc \u062a\u0648\u0627\u0646 \u0627\u0632 \u062f\u0633\u062a\u0648\u0631\u0627\u062a \u0632\u06cc\u0631 \u0628\u0631\u0627\u06cc \u0633\u0627\u062e\u062a \u06cc\u06a9 \u067e\u0631\u0648\u0698\u0647 \u067e\u06cc\u06a9\u0631\u0628\u0646\u062f\u06cc \u0634\u062f\u0647 \u0628\u0627 ",(0,i.kt)("inlineCode",{parentName:"p"},"ts")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npx create-react-app my-app --template typescript\n# or\nyarn create react-app my-app --template typescript\n")),(0,i.kt)("p",null,"\u06cc\u0627 \u0627\u06af\u0631 \u067e\u0631\u0648\u0698\u0647 \u0645\u0627 \u0627\u0632 \u0642\u0628\u0644 \u0633\u0627\u062e\u062a\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a \u0648 \u0645\u06cc \u062e\u0648\u0627\u0647\u06cc\u0645 \u0628 \u0622\u0646 ",(0,i.kt)("inlineCode",{parentName:"p"},"ts")," \u0631\u0627 \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u06cc\u0645\u060c \u0645\u06cc \u062a\u0648\u0627\u0646 \u0627\u0632 \u067e\u06a9\u06cc\u062c \u0647\u0627\u06cc \u0632\u06cc\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save typescript @types/node @types/react @types/react-dom @types/jest\n# or\nyarn add typescript @types/node @types/react @types/react-dom @types/jest\n")),(0,i.kt)("p",null,"\ud83c\udf89 \u0647\u0645\u0686\u0646\u06cc\u0646 \u0628\u0627\u06cc\u062f \u062f\u0642\u062a \u062f\u0627\u0634\u062a \u06a9 \u0628\u0639\u062f \u0627\u0632 \u0646\u0635\u0628 \u067e\u06a9\u06cc\u062c \u0647\u0627 \u0628\u0627\u06cc\u062f \u062a\u0645\u0627\u0645 \u0641\u0627\u06cc\u0644 \u0647\u0627\u06cc ",(0,i.kt)("inlineCode",{parentName:"p"},"js")," \u0648 ",(0,i.kt)("inlineCode",{parentName:"p"},"jsx")," \u0631\u0627 \u0628 ",(0,i.kt)("inlineCode",{parentName:"p"},"ts")," \u0648 ",(0,i.kt)("inlineCode",{parentName:"p"},"tsx")," \u062a\u0628\u062f\u06cc\u0644 \u06a9\u0646\u06cc\u0645 \u0648 \u06cc\u06a9\u0628\u0627\u0631 \u067e\u0631\u0648\u0698\u0647 \u0631\u0627 ",(0,i.kt)("inlineCode",{parentName:"p"},"reset"),"\u06a9\u0646\u06cc\u0645."),(0,i.kt)("p",null,"\ud83c\udf89 \u0647\u0645\u0686\u0646\u06cc\u0646 \u0628\u0627\u06cc\u062f \u062d\u0648\u0627\u0633\u0645\u0627\u0646 \u0628\u0627\u0634\u062f \u06a9 \u0628\u0639\u062f \u0627\u0632 \u062a\u063a\u06cc\u06cc\u0631 \u0641\u0631\u0645\u062a \u0641\u0627\u06cc\u0644 \u0647\u0627\u060c \u062d\u0627\u0644 \u0628\u0627\u06cc\u062f \u062a\u0627\u06cc\u067e \u0647\u0627 \u0631\u0627 \u062f\u0631 \u067e\u0631\u0648\u0698\u0647 \u062f\u0631\u0633\u062a \u06a9\u0646\u06cc\u0645 \u0648 \u067e\u0627\u0631\u0627\u0645\u062a\u0631 \u0647\u0627\u060c \u0622\u0631\u06af\u0648\u0645\u0627\u0646 \u0647\u0627 \u0648 \u062e\u06cc\u0644\u06cc \u0645\u0648\u0627\u0631\u062f \u062f\u06cc\u06af\u0631 \u0631\u0627 \u062a\u0627\u06cc\u067e \u062f\u0647\u06cc \u06a9\u0646\u06cc\u0645."),(0,i.kt)("h3",{id:"tips"},"Tips"),(0,i.kt)("p",null,"\ud83c\udf89 \u0628\u0639\u0636\u06cc \u0627\u0632 \u067e\u06a9\u06cc\u062c \u0647\u0627\u06cc\u06cc \u06a9 \u062f\u0631 \u067e\u0631\u0648\u0698\u0647 \u0647\u0627\u06cc ",(0,i.kt)("inlineCode",{parentName:"p"},"ts")," \u0646\u0635\u0628 \u0645\u06cc \u06a9\u0646\u06cc\u0645\u060c \u0628\u0627\u06cc\u062f \u0628 \u0635\u0648\u0631\u062a \u062c\u062f\u0627\u06af\u0627\u0646\u0647 \u062d\u062a\u0645\u0627 ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," \u0647\u0627\u06cc \u0622\u0646 \u0631\u0627 \u0646\u06cc\u0632 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u0645 \u0648\u06af\u0631\u0646\u0647 \u0628 \u0627\u0631\u0648\u0631 \u0645\u06cc \u062e\u0648\u0631\u06cc\u0645\u060c \u0645\u062b\u0644 \u0646\u0645\u0648\u0646\u0647 \u067e\u0627\u06cc\u06cc\u0646:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add react-helmet\n# and\nyarn add @types/react-helmet -D\n")),(0,i.kt)("h2",{id:"props"},"props"),(0,i.kt)("p",null,"\u0645\u06cc \u062a\u0648\u0627\u0646 \u0628\u0647 \u0635\u0648\u0631\u062a \u0632\u06cc\u0631 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0648 ",(0,i.kt)("inlineCode",{parentName:"p"},"prop")," \u0647\u0627 \u062f\u0631 ",(0,i.kt)("inlineCode",{parentName:"p"},"tsx")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f\u060c \u062f\u0631 \u0648\u0627\u0642\u0639 \u062f\u0631 \u0627\u06cc\u0646 \u0631\u0648\u0634 \u0645\u06cc \u062a\u0648\u0627\u0646 \u0647\u0645 \u0628\u0631\u0627\u06cc ",(0,i.kt)("inlineCode",{parentName:"p"},"prop")," \u0648 \u0647\u0645 \u0628\u0631\u0627\u06cc \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," \u0645\u0634\u062e\u0635 \u06a9\u0631\u062f:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'    interface ChildProps {\n    color: string;\n    onClick: (msg: string) => void;\n}\n    export const Child = ({color, onClick}: ChildProps) => {\n    return (\n        <div>\n            <h1>{color}</h1>\n            <button onClick={() => onClick("first")}>Click me</button>\n        </div>\n    )\n}\n    Child.defaultProps = {\n    color: "blue"\n}\n    export const ChildAsFC: React.FC<ChildProps> = ({color, onClick}) => {\n    return (\n        <div>\n            <h1>{color}</h1>\n            <button onClick={() => onClick("second")}>Click me</button>\n        </div>\n    )\n};\n    ChildAsFC.defaultProps = {\n        color: "green"\n    }\n')),(0,i.kt)("p",null,"\u06a9\u0647 \u0631\u0648\u0634 \u062f\u0648\u0645 \u0628\u0647\u062a\u0631 \u0627\u0633\u062a \u0632\u06cc\u0631\u0627 ",(0,i.kt)("inlineCode",{parentName:"p"},"ts")," \u0645\u062a\u0648\u062c\u0647 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0645\u06cc \u0634\u0648\u062f."),(0,i.kt)("p",null,"\ud83c\udf89 \u0628\u0631\u0627\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 ",(0,i.kt)("inlineCode",{parentName:"p"},"children")," \u062f\u0631  ",(0,i.kt)("inlineCode",{parentName:"p"},"tsx")," \u0628\u0647\u062a\u0631 \u0627\u0633\u062a \u0627\u0632 \u0631\u0648\u0634 \u062f\u0648\u0645 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u0648\u062f \u0632\u06cc\u0631\u0627 ",(0,i.kt)("inlineCode",{parentName:"p"},"ts")," \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0631\u0627 \u0645\u06cc \u0634\u0646\u0627\u0633\u062f\u060c \u062f\u0631 \u0631\u0648\u0634 \u0627\u0648\u0644 \u0628\u0627\u06cc\u062f \u062d\u062a\u0645\u0627 \u062f\u0631 ",(0,i.kt)("inlineCode",{parentName:"p"},"interface")," \u062d\u062a\u0645\u0627 ",(0,i.kt)("inlineCode",{parentName:"p"},"children")," \u0631\u0627 \u062a\u0639\u0631\u06cc\u0641 \u06a9\u0646\u06cc\u0645."),(0,i.kt)("h2",{id:"state"},"state"),(0,i.kt)("p",null,"\u0628\u0631\u0627\u06cc \u062a\u0639\u0631\u06cc\u0641 ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," \u0628\u0631\u0627\u06cc ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," \u0647\u0627 \u0645\u06cc\u062a\u0648\u0627\u0646 \u0628\u0647 \u0635\u0648\u0631\u062a \u0632\u06cc\u0631 \u0639\u0645\u0644 \u06a9\u0631\u062f \u0648 \u0628\u0631\u0627\u06cc \u0647\u0631 ",(0,i.kt)("inlineCode",{parentName:"p"},"useState")," \u0627\u0632 \u06cc\u06a9 ",(0,i.kt)("inlineCode",{parentName:"p"},"generic")," \u062e\u0627\u0635 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'const GuestList: React.FC = () => {\n\n    const [name, setName] = useState("");\n    const [guests, setGuests] = useState<string[]>([]);\n\n    const onClick = () => {\n        setGuests([...guests, name]);\n        setName("");\n    }\n}\n')),(0,i.kt)("p",null,"\ud83c\udf89 \u0627\u06af\u0631 \u0627\u06cc\u0646 \u06a9\u0627\u0631 \u0631\u0627 \u0627\u0646\u062c\u0627\u0645 \u0646\u062f\u0647\u06cc\u0645\u060c \u062e\u0648\u062f ",(0,i.kt)("inlineCode",{parentName:"p"},"ts")," \u0628\u0631\u0627\u06cc \u0645\u062a\u063a\u06cc\u06cc\u0631\u06cc \u0645\u062b\u0644 ",(0,i.kt)("inlineCode",{parentName:"p"},"guests")," \u0627\u0632 \u062a\u0627\u06cc\u067e ",(0,i.kt)("inlineCode",{parentName:"p"},"[]never")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc \u06a9\u0646\u062f"),(0,i.kt)("h2",{id:"union"},"Union"),(0,i.kt)("p",null,"\u062f\u0631 ",(0,i.kt)("inlineCode",{parentName:"p"},"react ")," \u0647\u0645 \u0645\u06cc \u062a\u0648\u0627\u0646 \u0627\u0632 ",(0,i.kt)("inlineCode",{parentName:"p"},"union")," \u062a\u0627\u06cc\u067e \u0647\u0627 \u0646\u06cc\u0632 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f \u06a9 \u0628\u0633\u06cc\u0627\u0631 \u06a9\u0627\u0631\u0628\u0631\u062f\u06cc \u0645\u06cc \u0628\u0627\u0634\u062f\u060c \u0632\u0645\u0627\u0646\u06cc \u06a9 \u0628\u062e\u0648\u0627\u0647\u06cc\u0645 \u0645\u0634\u062e\u0635 \u06a9\u0646\u06cc\u0645 \u06a9 \u06cc\u06a9 \u0645\u062a\u063a\u06cc\u06cc\u0631 \u0627\u0645\u06a9\u0627\u0646 \u062f\u0627\u0631\u062f \u06a9 \u0686\u0646\u062f \u062a\u0627\u06cc\u067e \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u062f\u060c \u0627\u0632 \u0622\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc \u06a9\u0646\u06cc\u0645:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"    const [user, setUser] = useState<{ name: string, age: number | undefined }>()\n")),(0,i.kt)("h2",{id:"event"},"event"),(0,i.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0627\u06cc\u0646\u06a9\u0647 \u0627\u0632 ",(0,i.kt)("inlineCode",{parentName:"p"},"event")," \u062f\u0631 \u062a\u0648\u0627\u0628\u0639 \u062e\u0648\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645\u060c \u0628\u0627\u06cc\u062f \u062d\u062a\u0645\u0627 \u062a\u0627\u06cc\u067e \u0631\u0627 \u0628\u0631\u0627\u06cc \u0622\u0646 \u0647\u0627 \u0646\u06cc\u0632 \u0645\u0634\u062e\u0635 \u06a9\u0646\u06cc\u0645:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const EventComponent: React.FC = () => {\n    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {\n    console.log(e)\n    }\n\n    const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {\n    console.log(e)\n    }\n\n    return (\n        <div>\n            <input onChange={onChange}/>\n            <div draggable onDragStart={onDragStart}>Drag Me!</div>\n        </div>\n    )}\n")),(0,i.kt)("p",null,"\ud83c\udf89 \u0628\u0631\u0627\u06cc \u0631\u0627\u062d\u062a\u06cc \u06a9\u0627\u0631\u060c \u0645\u06cc\u062a\u0648\u0627\u0646 \u0645\u0648\u0633 \u0631\u0627 \u0631\u0648\u06cc ",(0,i.kt)("inlineCode",{parentName:"p"},"event")," \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u0642\u0631\u0627\u0631 \u062f\u0627\u062f \u0648 \u062a\u0627\u06cc\u067e \u0645\u0631\u0628\u0648\u0637  \u0628\u0647 \u0622\u0646 \u0631\u0627 \u06a9\u067e\u06cc \u06a9\u0646\u06cc\u0645 \u0648 \u062f\u0631 \u062a\u0627\u0628\u0639 \u062e\u0648\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645."),(0,i.kt)("h2",{id:"ref"},"ref"),(0,i.kt)("p",null,"\u0628\u0631\u0627\u06cc ",(0,i.kt)("inlineCode",{parentName:"p"},"ref")," \u0646\u06cc\u0632 \u0628\u0627\u06cc\u062f \u062a\u0627\u06cc\u067e \u062a\u06af\u06cc \u06a9\u0647 \u0628\u0647 \u0622\u0646 \u0631\u0641\u0631\u0646\u0633 \u0632\u062f\u06cc\u0645 \u0631\u0627 \u0645\u0634\u062e\u0635 \u06a9\u0646\u06cc\u0645 \u0648 \u0645\u0642\u062f\u0627\u0631 \u0627\u0648\u0644\u06cc\u0647 \u0622\u0646 \u0631\u0627 ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," \u0642\u0631\u0627\u0631 \u062f\u0647\u06cc\u0645\u060c \u0632\u06cc\u0631\u0627 \u0647\u0646\u06af\u0627\u0645 \u0644\u0648\u062f \u0634\u062f\u0646\u060c \u0628\u0647 \u0686\u06cc\u0632\u06cc \u0631\u0641\u0631\u0646\u0633 \u0646\u0645\u06cc \u0634\u0648\u062f:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"    const inputRef = useRef<HTMLInputElement | null>(null);\n")),(0,i.kt)("p",null,"\ud83c\udf89 \u0627\u06af\u0631 \u062f\u0631 ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," \u0628\u062c\u0627\u06cc ",(0,i.kt)("inlineCode",{parentName:"p"},"jsx: preserve")," \u06cc\u0627 ",(0,i.kt)("inlineCode",{parentName:"p"},"jsx: react")," \u0627\u0632 ",(0,i.kt)("inlineCode",{parentName:"p"},"jsx: react-jsx")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645\u060c \u062f\u06cc\u06af\u0631 \u0646\u06cc\u0627\u0632\u06cc \u0628 ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," \u06a9\u0631\u062f\u0646 ",(0,i.kt)("inlineCode",{parentName:"p"},"react")," \u062f\u0631 \u0647\u0645\u0647 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0647\u0627 \u0646\u06cc\u0633\u062a ( \u0627\u06cc\u0646 \u0642\u0627\u0628\u0644\u06cc\u062a \u0627\u0632 \u0648\u0631\u0698\u0646 17 \u0628\u0647 \u0628\u0639\u062f \u0628 ",(0,i.kt)("inlineCode",{parentName:"p"},"react")," \u0627\u0636\u0627\u0641\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a )"),(0,i.kt)("p",null,"\ud83c\udf89 \u0647\u0631\u06af\u0627\u0647 \u0628\u062e\u0648\u0627\u0647\u06cc\u0645 \u062f\u0631 \u06cc\u06a9 \u0622\u0628\u062c\u06a9\u062a \u062f\u0631 ",(0,i.kt)("inlineCode",{parentName:"p"},"interface")," \u06a9\u0627\u0631\u06cc \u06a9\u0646\u06cc\u0645 \u06a9 \u0628\u062a\u0648\u0627\u0646 \u0628 \u0635\u0648\u0631\u062a \u062f\u0644\u062e\u0648\u0627\u0647\u060c \u062f\u0631 \u062c\u0627\u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u0627\u0632 \u067e\u0631\u0627\u067e\u0631\u062a\u06cc \u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645\u060c \u0628\u0627\u06cc\u062f \u0628 \u0635\u0648\u0631\u062a \u0632\u06cc\u0631 \u0639\u0645\u0644 \u06a9\u0646\u06cc\u0645:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IRoutes {\n    path: string,\n    component: any,\n    layout: LayoutsEnum,\n    meta?: {\n        authRequired: boolean,\n        [propName: string]: unknown // propName is just a name\n    },\n    children?: IRouteChildren[]\n}\n")))}m.isMDXComponent=!0}}]);