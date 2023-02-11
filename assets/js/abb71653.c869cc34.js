"use strict";(self.webpackChunkmy_documents=self.webpackChunkmy_documents||[]).push([[6850],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(t),u=r,k=m["".concat(o,".").concat(u)]||m[u]||d[u]||l;return t?a.createElement(k,i(i({ref:n},c),{},{components:t})):a.createElement(k,i({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6136:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const l={id:"ts-in-react",title:"TS in React"},i=void 0,p={unversionedId:"Experiences/Frontend/react/tsx/ts-in-react",id:"Experiences/Frontend/react/tsx/ts-in-react",title:"TS in React",description:"Install",source:"@site/docs/Experiences/Frontend/react/tsx/ts-in-react.md",sourceDirName:"Experiences/Frontend/react/tsx",slug:"/Experiences/Frontend/react/tsx/ts-in-react",permalink:"/my-documents/docs/Experiences/Frontend/react/tsx/ts-in-react",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Experiences/Frontend/react/tsx/ts-in-react.md",tags:[],version:"current",frontMatter:{id:"ts-in-react",title:"TS in React"},sidebar:"tutorialSidebar",previous:{title:"Generate Route",permalink:"/my-documents/docs/Experiences/Frontend/react/tsx/dynamic-generate-route"},next:{title:"expo-packages",permalink:"/my-documents/docs/Experiences/Frontend/react-native/expo-packages"}},o={},s=[{value:"Install",id:"install",level:2},{value:"Tips",id:"tips",level:2},{value:"props",id:"props",level:3},{value:"state",id:"state",level:3},{value:"Union",id:"union",level:3},{value:"Generic",id:"generic",level:3},{value:"event",id:"event",level:3},{value:"ref",id:"ref",level:3}],c={toc:s};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 ",(0,r.kt)("inlineCode",{parentName:"p"},"ts")," \u0645\u06cc \u062a\u0648\u0627\u0646 \u0627\u0632 \u062f\u0633\u062a\u0648\u0631\u0627\u062a \u0632\u06cc\u0631 \u0628\u0631\u0627\u06cc \u0633\u0627\u062e\u062a \u06cc\u06a9 \u067e\u0631\u0648\u0698\u0647 \u067e\u06cc\u06a9\u0631\u0628\u0646\u062f\u06cc \u0634\u062f\u0647 \u0628\u0627 ",(0,r.kt)("inlineCode",{parentName:"p"},"ts")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx create-react-app my-app --template typescript\nnpx create-next-app my-app --ts\n# or\nyarn create react-app my-app --template typescript\n")),(0,r.kt)("p",null,"\u06cc\u0627 \u0627\u06af\u0631 \u067e\u0631\u0648\u0698\u0647 \u0645\u0627 \u0627\u0632 \u0642\u0628\u0644 \u0633\u0627\u062e\u062a\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a \u0648 \u0645\u06cc \u062e\u0648\u0627\u0647\u06cc\u0645 \u0628 \u0622\u0646 ",(0,r.kt)("inlineCode",{parentName:"p"},"ts")," \u0631\u0627 \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u06cc\u0645\u060c \u0645\u06cc \u062a\u0648\u0627\u0646 \u0627\u0632 \u067e\u06a9\u06cc\u062c \u0647\u0627\u06cc \u0632\u06cc\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save typescript @types/node @types/react @types/react-dom @types/jest\n# or\nyarn add typescript @types/node @types/react @types/react-dom @types/jest\n")),(0,r.kt)("p",null,"\ud83c\udf89 \u0647\u0645\u0686\u0646\u06cc\u0646 \u0628\u0627\u06cc\u062f \u062f\u0642\u062a \u062f\u0627\u0634\u062a \u06a9 \u0628\u0639\u062f \u0627\u0632 \u0646\u0635\u0628 \u067e\u06a9\u06cc\u062c \u0647\u0627 \u0628\u0627\u06cc\u062f \u062a\u0645\u0627\u0645 \u0641\u0627\u06cc\u0644 \u0647\u0627\u06cc ",(0,r.kt)("inlineCode",{parentName:"p"},"js")," \u0648 ",(0,r.kt)("inlineCode",{parentName:"p"},"jsx")," \u0631\u0627 \u0628 ",(0,r.kt)("inlineCode",{parentName:"p"},"ts")," \u0648 ",(0,r.kt)("inlineCode",{parentName:"p"},"tsx")," \u062a\u0628\u062f\u06cc\u0644 \u06a9\u0646\u06cc\u0645 \u0648 \u06cc\u06a9\u0628\u0627\u0631 \u067e\u0631\u0648\u0698\u0647 \u0631\u0627 ",(0,r.kt)("inlineCode",{parentName:"p"},"reset"),"\u06a9\u0646\u06cc\u0645."),(0,r.kt)("p",null,"\ud83c\udf89 \u0647\u0645\u0686\u0646\u06cc\u0646 \u0628\u0627\u06cc\u062f \u062d\u0648\u0627\u0633\u0645\u0627\u0646 \u0628\u0627\u0634\u062f \u06a9 \u0628\u0639\u062f \u0627\u0632 \u062a\u063a\u06cc\u06cc\u0631 \u0641\u0631\u0645\u062a \u0641\u0627\u06cc\u0644 \u0647\u0627\u060c \u062d\u0627\u0644 \u0628\u0627\u06cc\u062f \u062a\u0627\u06cc\u067e \u0647\u0627 \u0631\u0627 \u062f\u0631 \u067e\u0631\u0648\u0698\u0647 \u062f\u0631\u0633\u062a \u06a9\u0646\u06cc\u0645 \u0648 \u067e\u0627\u0631\u0627\u0645\u062a\u0631 \u0647\u0627\u060c \u0622\u0631\u06af\u0648\u0645\u0627\u0646 \u0647\u0627 \u0648 \u062e\u06cc\u0644\u06cc \u0645\u0648\u0627\u0631\u062f \u062f\u06cc\u06af\u0631 \u0631\u0627 \u062a\u0627\u06cc\u067e \u062f\u0647\u06cc \u06a9\u0646\u06cc\u0645."),(0,r.kt)("h2",{id:"tips"},"Tips"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u0628\u0639\u0636\u06cc \u0627\u0632 \u067e\u06a9\u06cc\u062c \u0647\u0627\u06cc\u06cc \u06a9 \u062f\u0631 \u067e\u0631\u0648\u0698\u0647 \u0647\u0627\u06cc ",(0,r.kt)("inlineCode",{parentName:"li"},"ts")," \u0646\u0635\u0628 \u0645\u06cc \u06a9\u0646\u06cc\u0645\u060c \u0628\u0627\u06cc\u062f \u0628 \u0635\u0648\u0631\u062a \u062c\u062f\u0627\u06af\u0627\u0646\u0647 \u062d\u062a\u0645\u0627 ",(0,r.kt)("inlineCode",{parentName:"li"},"type")," \u0647\u0627\u06cc \u0622\u0646 \u0631\u0627 \u0646\u06cc\u0632 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u0645 \u0648\u06af\u0631\u0646\u0647 \u0628 \u0627\u0631\u0648\u0631 \u0645\u06cc \u062e\u0648\u0631\u06cc\u0645\u060c \u0645\u062b\u0644 \u0646\u0645\u0648\u0646\u0647 \u067e\u0627\u06cc\u06cc\u0646:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add react-helmet\n# and\nyarn add @types/react-helmet -D\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u0628\u0639\u0636\u06cc \u0645\u0648\u0627\u0642\u0639 ",(0,r.kt)("inlineCode",{parentName:"li"},"typescript")," \u062a\u0627\u06cc\u067e \u062f\u0627\u062f\u0647 \u0645\u0627\u0631\u0627 \u0646\u0645\u06cc \u062f\u0627\u0646\u062f \u0648 \u06cc\u0627 \u0628 \u0635\u0648\u0631\u062a \u067e\u06cc\u0634 \u0641\u0631\u0636 \u062a\u0627\u06cc\u067e \u0622\u0646 \u0631\u0627 \u0686\u06cc\u0632\u06cc \u0627\u0646\u062a\u062e\u0627\u0628 \u0645\u06cc\u06a9\u0646\u062f \u06a9 \u0645\u0627 \u0645\u06cc \u062f\u0627\u0646\u06cc\u0645 \u0627\u0644\u0645\u0627\u0646 \u0645\u0627 \u0622\u0646 \u062a\u0627\u06cc\u067e \u0631\u0627 \u0646\u062f\u0627\u0631\u062f\u060c \u062f\u0631 \u0627\u06cc\u0646 \u062d\u0627\u0644\u062a \u0645\u06cc \u062a\u0648\u0627\u0646 \u0627\u0632 ",(0,r.kt)("inlineCode",{parentName:"li"},"as")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f \u06a9 \u0628\u0647 \u0622\u0646 ",(0,r.kt)("inlineCode",{parentName:"li"},"Type Assertions")," \u0645\u06cc \u06af\u0648\u06cc\u0646\u062f.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;\nconst token = Cookies.get("iopieT") as string;\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u0647\u0631\u06af\u0627\u0647 \u062f\u0631 \u062a\u0627\u06cc\u067e \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a\u060c \u0628\u062e\u0648\u0627\u0647\u06cc\u0645 \u0627\u0632 \u0648\u06cc\u062f\u0626\u0648 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645\u060c \u0628\u0627\u06cc\u062f \u062f\u0631 \u06cc\u06a9 \u0641\u0627\u06cc\u0644 \u0628\u0627 \u067e\u0633\u0648\u0646\u062f ",(0,r.kt)("inlineCode",{parentName:"li"},"d.ts.")," \u062f\u0631 \u0641\u0648\u0644\u062f\u0631 ",(0,r.kt)("inlineCode",{parentName:"li"},"src")," \u0628 \u0635\u0648\u0631\u062a \u0632\u06cc\u0631\u060c \u0622\u0646 \u0631\u0627 \u0645\u0639\u0631\u0641\u06cc \u06a9\u0646\u06cc\u0645 \u06cc\u0627 \u0627\u0632 \u0641\u0627\u06cc\u0644 \u067e\u06cc\u0634 \u0641\u0631\u0636 \u062e\u0648\u062f ",(0,r.kt)("inlineCode",{parentName:"li"},"react")," \u0628 \u0646\u0627\u0645 ",(0,r.kt)("inlineCode",{parentName:"li"},"react-app-env.d.ts")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="react-app-env.d.ts"',title:'"react-app-env.d.ts"'},"declare module '*.mp4' {\n    const src: string;\n    export default src;\n}\n")),(0,r.kt)("h3",{id:"props"},"props"),(0,r.kt)("p",null,"\u0645\u06cc \u062a\u0648\u0627\u0646 \u0628\u0647 \u0635\u0648\u0631\u062a \u0632\u06cc\u0631 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0648 ",(0,r.kt)("inlineCode",{parentName:"p"},"prop")," \u0647\u0627 \u062f\u0631 ",(0,r.kt)("inlineCode",{parentName:"p"},"tsx")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f\u060c \u062f\u0631 \u0648\u0627\u0642\u0639 \u062f\u0631 \u0627\u06cc\u0646 \u0631\u0648\u0634 \u0645\u06cc \u062a\u0648\u0627\u0646 \u0647\u0645 \u0628\u0631\u0627\u06cc ",(0,r.kt)("inlineCode",{parentName:"p"},"prop")," \u0648 \u0647\u0645 \u0628\u0631\u0627\u06cc \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," \u0645\u0634\u062e\u0635 \u06a9\u0631\u062f:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'    interface ChildProps {\n    color: string;\n    onClick: (msg: string) => void;\n}\n    export const Child = ({color, onClick}: ChildProps) => {\n    return (\n        <div>\n            <h1>{color}</h1>\n            <button onClick={() => onClick("first")}>Click me</button>\n        </div>\n    )\n}\n    Child.defaultProps = {\n    color: "blue"\n}\n    export const ChildAsFC: React.FC<ChildProps> = ({color, onClick}) => {\n    return (\n        <div>\n            <h1>{color}</h1>\n            <button onClick={() => onClick("second")}>Click me</button>\n        </div>\n    )\n};\n    ChildAsFC.defaultProps = {\n        color: "green"\n    }\n')),(0,r.kt)("p",null,"\u06a9\u0647 \u0631\u0648\u0634 \u062f\u0648\u0645 \u0628\u0647\u062a\u0631 \u0627\u0633\u062a \u0632\u06cc\u0631\u0627 ",(0,r.kt)("inlineCode",{parentName:"p"},"ts")," \u0645\u062a\u0648\u062c\u0647 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0645\u06cc \u0634\u0648\u062f."),(0,r.kt)("p",null,"\ud83c\udf89 \u0628\u0631\u0627\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 ",(0,r.kt)("inlineCode",{parentName:"p"},"children")," \u062f\u0631  ",(0,r.kt)("inlineCode",{parentName:"p"},"tsx")," \u0628\u0647\u062a\u0631 \u0627\u0633\u062a \u0627\u0632 \u0631\u0648\u0634 \u062f\u0648\u0645 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u0648\u062f \u0632\u06cc\u0631\u0627 ",(0,r.kt)("inlineCode",{parentName:"p"},"ts")," \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0631\u0627 \u0645\u06cc \u0634\u0646\u0627\u0633\u062f\u060c \u062f\u0631 \u0631\u0648\u0634 \u0627\u0648\u0644 \u0628\u0627\u06cc\u062f \u062d\u062a\u0645\u0627 \u062f\u0631 ",(0,r.kt)("inlineCode",{parentName:"p"},"interface")," \u062d\u062a\u0645\u0627 ",(0,r.kt)("inlineCode",{parentName:"p"},"children")," \u0631\u0627 \u062a\u0639\u0631\u06cc\u0641 \u06a9\u0646\u06cc\u0645."),(0,r.kt)("p",null,"\u0647\u0645\u0686\u0646\u06cc\u0646 \u0645\u06cc \u062a\u0648\u0627\u0646 \u0627\u0632 \u0631\u0648\u0634 \u0632\u06cc\u0631 \u0628\u0631\u0627\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0686\u0646\u062f ",(0,r.kt)("inlineCode",{parentName:"p"},"interface")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import DrawerProps from "..."\ninterface ICustomDrawer {\n    visible: boolean;\n    setVisible: (visible: boolean) => void;\n    children: ReactNode;\n}\n\nconst CustomDrawer: FC<ICustomDrawer & DrawerProps> = ({visible, setVisible, children, ...props}) => {/*...*/};\n')),(0,r.kt)("h3",{id:"state"},"state"),(0,r.kt)("p",null,"\u0628\u0631\u0627\u06cc \u062a\u0639\u0631\u06cc\u0641 ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," \u0628\u0631\u0627\u06cc ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," \u0647\u0627 \u0645\u06cc\u062a\u0648\u0627\u0646 \u0628\u0647 \u0635\u0648\u0631\u062a \u0632\u06cc\u0631 \u0639\u0645\u0644 \u06a9\u0631\u062f \u0648 \u0628\u0631\u0627\u06cc \u0647\u0631 ",(0,r.kt)("inlineCode",{parentName:"p"},"useState")," \u0627\u0632 \u06cc\u06a9 ",(0,r.kt)("inlineCode",{parentName:"p"},"generic")," \u062e\u0627\u0635 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const GuestList: React.FC = () => {\n\n    const [name, setName] = useState("");\n    const [guests, setGuests] = useState<string[]>([]);\n\n    const onClick = () => {\n        setGuests([...guests, name]);\n        setName("");\n    }\n}\n')),(0,r.kt)("p",null,"\ud83c\udf89 \u0627\u06af\u0631 \u0627\u06cc\u0646 \u06a9\u0627\u0631 \u0631\u0627 \u0627\u0646\u062c\u0627\u0645 \u0646\u062f\u0647\u06cc\u0645\u060c \u062e\u0648\u062f ",(0,r.kt)("inlineCode",{parentName:"p"},"ts")," \u0628\u0631\u0627\u06cc \u0645\u062a\u063a\u06cc\u06cc\u0631\u06cc \u0645\u062b\u0644 ",(0,r.kt)("inlineCode",{parentName:"p"},"guests")," \u0627\u0632 \u062a\u0627\u06cc\u067e ",(0,r.kt)("inlineCode",{parentName:"p"},"[]never")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc \u06a9\u0646\u062f"),(0,r.kt)("h3",{id:"union"},"Union"),(0,r.kt)("p",null,"\u062f\u0631 ",(0,r.kt)("inlineCode",{parentName:"p"},"react ")," \u0647\u0645 \u0645\u06cc \u062a\u0648\u0627\u0646 \u0627\u0632 ",(0,r.kt)("inlineCode",{parentName:"p"},"union")," \u062a\u0627\u06cc\u067e \u0647\u0627 \u0646\u06cc\u0632 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f \u06a9 \u0628\u0633\u06cc\u0627\u0631 \u06a9\u0627\u0631\u0628\u0631\u062f\u06cc \u0645\u06cc \u0628\u0627\u0634\u062f\u060c \u0632\u0645\u0627\u0646\u06cc \u06a9 \u0628\u062e\u0648\u0627\u0647\u06cc\u0645 \u0645\u0634\u062e\u0635 \u06a9\u0646\u06cc\u0645 \u06a9 \u06cc\u06a9 \u0645\u062a\u063a\u06cc\u06cc\u0631 \u0627\u0645\u06a9\u0627\u0646 \u062f\u0627\u0631\u062f \u06a9 \u0686\u0646\u062f \u062a\u0627\u06cc\u067e \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u062f\u060c \u0627\u0632 \u0622\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc \u06a9\u0646\u06cc\u0645:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"    const [user, setUser] = useState<{ name: string, age: number | undefined }>()\n")),(0,r.kt)("h3",{id:"generic"},"Generic"),(0,r.kt)("p",null,"\u062f\u0631 \u0648\u0627\u0642\u0639 \u0645\u06cc \u062a\u0648\u0627\u0646 \u062a\u0648\u0633\u0637 ",(0,r.kt)("inlineCode",{parentName:"p"},"generic")," \u0647\u0627 \u0645\u06cc \u062a\u0648\u0627\u0646 \u06cc\u06a9 ",(0,r.kt)("inlineCode",{parentName:"p"},"wrapper")," \u0628\u0631\u0627\u06cc ",(0,r.kt)("inlineCode",{parentName:"p"},"interface")," \u0647\u0627\u06cc\u0645\u0627\u0646 \u062a\u0639\u0631\u06cc\u0641 \u06a9\u0646\u06cc\u0645:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"//! for all API responses\nexport interface IResponse<T> {\n  results: T;\n}\n")),(0,r.kt)("p",null,"\ud83c\udf89 \u062f\u0631 \u0627\u06cc\u0646 \u062d\u0627\u0644\u062a \u0645\u06cc \u062a\u0648\u0627\u0646 \u0628\u0631\u0627\u06cc \u0647\u0645\u0647 ",(0,r.kt)("inlineCode",{parentName:"p"},"api")," \u0647\u0627 \u06a9 \u0647\u0645\u0647 \u062f\u0627\u0631\u0627\u06cc \u06cc\u06a9 ",(0,r.kt)("inlineCode",{parentName:"p"},"property")," \u0628 \u0646\u0627\u0645 ",(0,r.kt)("inlineCode",{parentName:"p"},"result")," \u0647\u0633\u062a\u0646\u062f \u0645\u0634\u062e\u0635 \u06a9\u0631\u062f \u06a9 \u062f\u0631\u0648\u0646 \u0627\u06cc\u0646 ",(0,r.kt)("inlineCode",{parentName:"p"},"result")," \u0686 \u0686\u06cc\u0632 \u0647\u0627\u06cc\u06cc \u0628\u0627\u06cc\u062f \u0628\u0627\u0634\u062f \u0648 ",(0,r.kt)("inlineCode",{parentName:"p"},"interface")," \u0645\u0631\u0628\u0648\u0637 \u0628 \u0622\u0646 \u0631\u0627 \u0628\u062c\u0627\u06cc ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," \u0642\u0631\u0627\u0631 \u0645\u06cc \u062f\u0647\u06cc\u0645."),(0,r.kt)("h3",{id:"event"},"event"),(0,r.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0627\u06cc\u0646\u06a9\u0647 \u0627\u0632 ",(0,r.kt)("inlineCode",{parentName:"p"},"event")," \u062f\u0631 \u062a\u0648\u0627\u0628\u0639 \u062e\u0648\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645\u060c \u0628\u0627\u06cc\u062f \u062d\u062a\u0645\u0627 \u062a\u0627\u06cc\u067e \u0631\u0627 \u0628\u0631\u0627\u06cc \u0622\u0646 \u0647\u0627 \u0646\u06cc\u0632 \u0645\u0634\u062e\u0635 \u06a9\u0646\u06cc\u0645:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const EventComponent: React.FC = () => {\n    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {\n    console.log(e)\n    }\n\n    const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {\n    console.log(e)\n    }\n\n    return (\n        <div>\n            <input onChange={onChange}/>\n            <div draggable onDragStart={onDragStart}>Drag Me!</div>\n        </div>\n    )}\n")),(0,r.kt)("p",null,"\ud83c\udf89 \u0628\u0631\u0627\u06cc \u0631\u0627\u062d\u062a\u06cc \u06a9\u0627\u0631\u060c \u0645\u06cc\u062a\u0648\u0627\u0646 \u0645\u0648\u0633 \u0631\u0627 \u0631\u0648\u06cc ",(0,r.kt)("inlineCode",{parentName:"p"},"event")," \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u0642\u0631\u0627\u0631 \u062f\u0627\u062f \u0648 \u062a\u0627\u06cc\u067e \u0645\u0631\u0628\u0648\u0637  \u0628\u0647 \u0622\u0646 \u0631\u0627 \u06a9\u067e\u06cc \u06a9\u0646\u06cc\u0645 \u0648 \u062f\u0631 \u062a\u0627\u0628\u0639 \u062e\u0648\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645."),(0,r.kt)("h3",{id:"ref"},"ref"),(0,r.kt)("p",null,"\u0628\u0631\u0627\u06cc ",(0,r.kt)("inlineCode",{parentName:"p"},"ref")," \u0646\u06cc\u0632 \u0628\u0627\u06cc\u062f \u062a\u0627\u06cc\u067e \u062a\u06af\u06cc \u06a9\u0647 \u0628\u0647 \u0622\u0646 \u0631\u0641\u0631\u0646\u0633 \u0632\u062f\u06cc\u0645 \u0631\u0627 \u0645\u0634\u062e\u0635 \u06a9\u0646\u06cc\u0645 \u0648 \u0645\u0642\u062f\u0627\u0631 \u0627\u0648\u0644\u06cc\u0647 \u0622\u0646 \u0631\u0627 ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," \u0642\u0631\u0627\u0631 \u062f\u0647\u06cc\u0645\u060c \u0632\u06cc\u0631\u0627 \u0647\u0646\u06af\u0627\u0645 \u0644\u0648\u062f \u0634\u062f\u0646\u060c \u0628\u0647 \u0686\u06cc\u0632\u06cc \u0631\u0641\u0631\u0646\u0633 \u0646\u0645\u06cc \u0634\u0648\u062f:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"    const inputRef = useRef<HTMLInputElement | null>(null);\n")),(0,r.kt)("p",null,"\ud83c\udf89 \u0647\u0645\u0686\u0646\u06cc\u0646 \u0627\u06af\u0631 \u0628\u062e\u0648\u0627\u0647\u06cc\u0645 \u0645\u0634\u062e\u0635 \u06a9\u0646\u06cc\u0645 \u06a9 \u0627\u06cc\u0646 \u0627\u0644\u0645\u0627\u0646 ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," \u0646\u06cc\u0633\u062a\u060c \u0645\u06cc \u062a\u0648\u0627\u0646\u06cc\u0645 \u0627\u0632 \u0639\u0645\u0644\u06af\u0631 ",(0,r.kt)("inlineCode",{parentName:"p"},"not-null")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const scrollRef = useRef<HTMLDivElement>(null!);\n")),(0,r.kt)("p",null,"\ud83c\udf89 \u0627\u06af\u0631 \u062f\u0631 ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," \u0628\u062c\u0627\u06cc ",(0,r.kt)("inlineCode",{parentName:"p"},"jsx: preserve")," \u06cc\u0627 ",(0,r.kt)("inlineCode",{parentName:"p"},"jsx: react")," \u0627\u0632 ",(0,r.kt)("inlineCode",{parentName:"p"},"jsx: react-jsx")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645\u060c \u062f\u06cc\u06af\u0631 \u0646\u06cc\u0627\u0632\u06cc \u0628 ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," \u06a9\u0631\u062f\u0646 ",(0,r.kt)("inlineCode",{parentName:"p"},"react")," \u062f\u0631 \u0647\u0645\u0647 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0647\u0627 \u0646\u06cc\u0633\u062a ( \u0627\u06cc\u0646 \u0642\u0627\u0628\u0644\u06cc\u062a \u0627\u0632 \u0648\u0631\u0698\u0646 17 \u0628\u0647 \u0628\u0639\u062f \u0628 ",(0,r.kt)("inlineCode",{parentName:"p"},"react")," \u0627\u0636\u0627\u0641\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a )"),(0,r.kt)("p",null,"\ud83c\udf89 \u0647\u0631\u06af\u0627\u0647 \u0628\u062e\u0648\u0627\u0647\u06cc\u0645 \u062f\u0631 \u06cc\u06a9 \u0622\u0628\u062c\u06a9\u062a \u062f\u0631 ",(0,r.kt)("inlineCode",{parentName:"p"},"interface")," \u06a9\u0627\u0631\u06cc \u06a9\u0646\u06cc\u0645 \u06a9 \u0628\u062a\u0648\u0627\u0646 \u0628 \u0635\u0648\u0631\u062a \u062f\u0644\u062e\u0648\u0627\u0647\u060c \u062f\u0631 \u062c\u0627\u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u0627\u0632 \u067e\u0631\u0627\u067e\u0631\u062a\u06cc \u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645\u060c \u0628\u0627\u06cc\u062f \u0628 \u0635\u0648\u0631\u062a \u0632\u06cc\u0631 \u0639\u0645\u0644 \u06a9\u0646\u06cc\u0645:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IRoutes {\n    path: string,\n    component: any,\n    layout: LayoutsEnum,\n    meta?: {\n        authRequired: boolean,\n        [propName: string]: unknown // propName is just a name\n    },\n    children?: IRouteChildren[]\n}\n")))}d.isMDXComponent=!0}}]);