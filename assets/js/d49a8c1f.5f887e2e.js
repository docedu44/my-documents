"use strict";(self.webpackChunkmy_documents=self.webpackChunkmy_documents||[]).push([[4807],{3905:function(e,n,t){t.d(n,{Zo:function(){return i},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},i=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(k,p(p({ref:n},i),{},{components:t})):r.createElement(k,p({ref:n},i))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,p[1]=c;for(var s=2;s<o;s++)p[s]=t[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8220:function(e,n,t){t.r(n),t.d(n,{assets:function(){return i},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),p=["components"],c={title:"Tips"},l=void 0,s={unversionedId:"Experiences/react/react-tips",id:"Experiences/react/react-tips",title:"Tips",description:"()React.memo",source:"@site/docs/Experiences/react/react-tips.mdx",sourceDirName:"Experiences/react",slug:"/Experiences/react/react-tips",permalink:"/my-documents/docs/Experiences/react/react-tips",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Experiences/react/react-tips.mdx",tags:[],version:"current",frontMatter:{title:"Tips"},sidebar:"tutorialSidebar",previous:{title:"React and RN",permalink:"/my-documents/docs/Experiences/react/react-RN"},next:{title:"reducers",permalink:"/my-documents/docs/Experiences/react/redux/reducers"}},i={},u=[{value:"()React.memo",id:"reactmemo",level:3},{value:"ENV.",id:"env",level:3},{value:"etc",id:"etc",level:3}],m={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"reactmemo"},"()React.memo"),(0,o.kt)("p",null,"\u062a\u0648\u0633\u0637 \u06a9\u062f \u0632\u06cc\u0631 \u0645\u06cc \u062a\u0648\u0627\u0646 \u0627\u0632 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Re-render"))," \u0686\u0646\u062f \u0628\u0627\u0631\u0647 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0647\u0627 \u062c\u0644\u0648\u06af\u06cc\u0631\u06cc \u06a9\u0631\u062f:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'    import React from "react"\n\n    const Greeting = React.memo(props => {\n        console.log("Greeting Comp render");\n        return <h1>Hi {props.name}!</h1>;\n    });\n')),(0,o.kt)("h3",{id:"env"},"ENV."),(0,o.kt)("p",null,"\ud83c\udf89 \u0647\u0631\u06af\u0627\u0647 \u0628\u062e\u0648\u0627\u0647\u06cc\u0645 \u062f\u0631 ",(0,o.kt)("strong",{parentName:"p"},"React")," \u0627\u0632 ",(0,o.kt)("strong",{parentName:"p"},"env.")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645\u060c \u06a9\u0627\u0641\u06cc\u0633\u062a \u06cc\u06a9 \u0641\u0627\u06cc\u0644 ",(0,o.kt)("strong",{parentName:"p"},"env.")," \u062f\u0631 \u0631\u0648\u062a \u067e\u0631\u0648\u0698\u0647 \u0628\u0633\u0627\u0632\u06cc\u0645 ( \u0628\u0647\u062a\u0631 \u0627\u0633\u062a \u0627\u0628\u062a\u062f\u0627 \u067e\u06a9\u06cc\u062c \u0622\u0646 \u0631\u0627 \u0646\u06cc\u0632 \u0628\u0631\u0627\u06cc \u0627\u0637\u0645\u06cc\u0646\u0627\u0646 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u0645 : ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn add dotenv -D")," )\u060c \u062d\u0627\u0644 \u0645\u06cc\u062a\u0648\u0627\u0646 \u062a\u0648\u0633\u0637 \u0627\u0644\u06af\u0648 \u0632\u06cc\u0631\u060c \u0627\u0632 \u0622\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'    SKIP_PREFLIGHT_CHECK=true\n    REACT_APP_BASENAME= ""\n    REACT_APP_SECRET_NAME = mamad\n')),(0,o.kt)("p",null,"\u062d\u062a\u0645\u0627 \u0628\u0627\u06cc\u062f \u0628\u0627 ",(0,o.kt)("strong",{parentName:"p"},"_REACT_APP")," \u0634\u0631\u0648\u0639 \u0634\u0648\u062f \u0648 \u062d\u062a\u0645\u0627 \u0628\u0639\u062f \u0627\u0632 \u062a\u063a\u06cc\u06cc\u0631 ",(0,o.kt)("strong",{parentName:"p"},"env.")," \u0628\u0627\u06cc\u062f \u0627\u067e \u0631\u0627 \u062f\u0648\u0628\u0627\u0631\u0647 \u0631\u0627\u0646 \u06a9\u0646\u06cc\u0645.\n\u0647\u0645\u0686\u0646\u06cc\u0646 \u0628\u0631\u0627\u06cc \u062f\u0633\u062a\u0631\u06cc \u0628\u0647 \u0627\u06cc\u0646 \u0641\u0627\u06cc\u0644 \u0645\u06cc \u062a\u0648\u0627\u0646 \u062f\u0631 \u06a9\u062f\u0645\u0627\u0646 \u0628\u0647 \u0627\u06cc\u0646 \u0635\u0648\u0631\u062a \u0628\u0647 \u0622\u0646 \u062f\u0633\u062a\u0631\u0633\u06cc \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u0645:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"    console.log(process.env.REACT_APP_SECRET_NAME)\n")),(0,o.kt)("p",null,"\ud83c\udf89\ud83c\udf89 \u0628\u0647\u062a\u0631 \u0627\u0633\u062a \u06a9\u0647 \u062f\u0631 ",(0,o.kt)("strong",{parentName:"p"},"gitignore.")," \u0646\u06cc\u0632 \u0622\u0646 \u0631\u0627 \u0642\u0631\u0627\u0631 \u062f\u0647\u06cc\u0645."),(0,o.kt)("p",null,"\u0645\u0646\u0628\u0639: ",(0,o.kt)("a",{parentName:"p",href:"https://create-react-app.dev/docs/adding-custom-environment-variables/"},"create-react-app")),(0,o.kt)("h3",{id:"etc"},"etc"),(0,o.kt)("p",null,"\ud83c\udf89 \u062a\u0648\u0633\u0637 \u062f\u06a9\u0645\u0647 \u0647\u0627\u06cc ",(0,o.kt)("inlineCode",{parentName:"p"},"WINDOWS + V")," \u0645\u06cc \u062a\u0648\u0627\u0646 ",(0,o.kt)("strong",{parentName:"p"},"clipboard")," \u0631\u0627 \u0628\u0627\u0632 \u06a9\u0631\u062f."),(0,o.kt)("p",null,"\ud83c\udf89 \u062a\u0648\u0633\u0637 \u062f\u06a9\u0645\u0647 \u0647\u0627\u06cc ",(0,o.kt)("inlineCode",{parentName:"p"},"WINDOWS + SHIFT + S")," \u0645\u06cc \u062a\u0648\u0627\u0646 ",(0,o.kt)("strong",{parentName:"p"},"print screen")," \u06af\u0631\u0641\u062a."),(0,o.kt)("p",null,"\ud83c\udf89 \u0647\u0631\u06af\u0627\u0647 \u0628\u062e\u0648\u0627\u0647\u06cc\u0645 \u0627\u0631\u0648\u0631 \u0647\u0627 \u0628\u0647 ",(0,o.kt)("strong",{parentName:"p"},"Interceptors")," \u062e\u0648\u062f ",(0,o.kt)("strong",{parentName:"p"},"Axios")," \u0627\u0631\u0633\u0627\u0644 \u0634\u0648\u062f\u060c \u062d\u062a\u0645\u0627 \u0628\u0627\u06cc\u062f \u0627\u0631\u0648\u0631 \u0631\u0627 \u062f\u0631 ",(0,o.kt)("strong",{parentName:"p"},"()catch")," \u062f\u0631\u062e\u0648\u0627\u0633\u062a\u0645\u0627\u0646 \u0628\u0631\u06af\u0631\u062f\u0627\u0646\u06cc\u0645 ( ",(0,o.kt)("strong",{parentName:"p"},"return")," )."),(0,o.kt)("p",null,"\ud83c\udf89 \u062f\u0631 ",(0,o.kt)("inlineCode",{parentName:"p"},"React")," \u0645\u0627 4 ",(0,o.kt)("inlineCode",{parentName:"p"},"property")," \u062f\u0627\u0631\u06cc\u0645 \u06a9 \u0645\u0633\u062a\u0642\u06cc\u0645\u0627 \u0628\u0647 \u062e\u0648\u062f \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0645\u062a\u0635\u0644 \u0645\u06cc \u0634\u0648\u0646\u062f \u0648 \u0647\u0631 \u06a9\u062f\u0627\u0645 \u06a9\u0627\u0631\u06cc\u06cc \u0631\u0627 \u0627\u0646\u062c\u0627\u0645 \u0645\u06cc \u062f\u0647\u0646\u062f:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"propTypes")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"displayName")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"defaultProps")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"contextTypes"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'    interface ChildProps {\n    color: string;\n}\n    export const Child = ({color}: ChildProps) => {\n    return <h1>{color}</h1>\n}\n    Child.defaultProps = {\n    color: "blue"\n}\n    //! OR\n    export const ChildAsFC : React.FC<ChildProps> = ({color}) => {\n    return <div>{color}</div>\n}\n    ChildAsFC.defaultProps = {\n        color: "green"\n    }\n')),(0,o.kt)("p",null,"\ud83c\udf89 \u0628\u0631\u0627\u06cc \u0627\u06cc\u0646\u06a9\u0647 \u06cc\u06a9 \u062e\u0637 \u06a9\u062f \u0631\u0627 \u062f\u0631 \u0634\u0631\u0627\u06cc\u0637\u06cc \u06a9 \u0645\u0642\u062f\u0627\u0631 \u0645\u0648\u062c\u0648\u062f ",(0,o.kt)("inlineCode",{parentName:"p"},"falsy")," \u0645\u06cc \u0628\u0627\u0634\u062f\u060c \u0646\u062e\u0648\u0627\u0647\u06cc\u0645 \u0627\u062c\u0631\u0627 \u06a9\u0646\u06cc\u0645\u060c \u0627\u0632 ",(0,o.kt)("inlineCode",{parentName:"p"},"type guard")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc \u06a9\u0646\u06cc\u0645:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"    useEffect(() => {\n        if(!inputRef.current) {\n            return;\n        }\n        inputRef.current.focus()\n    }, [])\n")),(0,o.kt)("p",null,"\ud83c\udf89 \u0647\u0646\u06af\u0627\u0645\u06cc \u06a9 \u0628\u062e\u0648\u0627\u0647\u06cc\u0645 \u06cc\u06a9 \u0622\u0628\u062c\u06a9\u062a \u0631\u0627 \u0627\u0632 \u06cc\u06a9 \u0622\u0631\u0627\u06cc\u0647 \u0628\u06cc\u0631\u0648\u0646 \u0628\u06a9\u0634\u06cc\u0645 \u0648 \u06cc\u06a9 \u067e\u0631\u0627\u067e\u0631\u062a\u06cc \u0627\u0632 \u0622\u0646 \u0631\u0627 \u062a\u063a\u06cc\u06cc\u0631 \u062f\u0647\u06cc\u0645\u060c \u0645\u06cc \u062a\u0648\u0627\u0646\u06cc\u0645 \u0627\u0632 2 \u0631\u0648\u0634 \u0632\u06cc\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'  const [persons, setPersons] = useState([\n     { key: 1, name: "\u0645\u062d\u0645\u062f \u0641\u0631\u0647\u0627\u062f\u06cc", completed: false },\n    { key: 2, name: "\u0627\u062a\u0627\u0628\u06a9 \u0647\u0648\u0634\u0646\u06af\u06cc", completed: false }]);\n\n  const completedHandler = (key) => {\n    const allPerson = [...persons];\n    //! Way 1\n    // const personIndex = allPerson.findIndex(person => person.key === key);\n    // const person = allPerson[personIndex];\n    // person.completed = !person.completed;\n    // allPerson[personIndex] = person;\n    // setPersons(allPerson);\n    //! Way 2\n    const person = allPerson.find((person) => person.key === key);\n    person.completed = !person.completed;\n    setPersons(allPerson);\n  };\n')))}d.isMDXComponent=!0}}]);