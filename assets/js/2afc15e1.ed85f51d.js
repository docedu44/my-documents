"use strict";(self.webpackChunkmy_documents=self.webpackChunkmy_documents||[]).push([[7657],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,y=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9104:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const a={id:"testing-react-library",title:"testing react library"},o=void 0,c={unversionedId:"Experiences/Frontend/react-test/testing-react-library",id:"Experiences/Frontend/react-test/testing-react-library",title:"testing react library",description:"Testing React Library",source:"@site/docs/Experiences/Frontend/react-test/testing-react-library.mdx",sourceDirName:"Experiences/Frontend/react-test",slug:"/Experiences/Frontend/react-test/testing-react-library",permalink:"/my-documents/docs/Experiences/Frontend/react-test/testing-react-library",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Experiences/Frontend/react-test/testing-react-library.mdx",tags:[],version:"current",frontMatter:{id:"testing-react-library",title:"testing react library"},sidebar:"tutorialSidebar",previous:{title:"React Testing",permalink:"/my-documents/docs/Experiences/Frontend/react-test/react-testing"},next:{title:"testing best practices",permalink:"/my-documents/docs/Experiences/Frontend/react-test/ts-jest"}},s={},l=[{value:"Testing React Library",id:"testing-react-library",level:2},{value:"async test",id:"async-test",level:3}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"testing-react-library"},"Testing React Library"),(0,i.kt)("p",null,"\u0633\u0639\u06cc \u0634\u0648\u062f \u0627\u0632 ",(0,i.kt)("inlineCode",{parentName:"p"},"ByTestId")," \u06a9\u0645\u062a\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u0648\u062f ( \u062a\u0633\u062a \u0628\u0631 \u0627\u0633\u0627\u0633 ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," \u06a9 \u0628 \u0627\u0644\u0645\u0627\u0646 \u062f\u0627\u062f\u0647 \u0627\u06cc\u0645. )"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://testing-library.com/docs/queries/about"},"testing react library")),(0,i.kt)("p",null,"2 \u0642\u0637\u0639\u0647 \u06a9\u062f \u0632\u06cc\u0631\u060c \u06cc\u06a9 \u0646\u0645\u0648\u0646\u0647 \u0633\u0627\u062f\u0647 \u0628\u0631\u0627\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u062a\u0633\u062a \u062f\u0631 ",(0,i.kt)("inlineCode",{parentName:"p"},"react")," \u0645\u06cc \u0628\u0627\u0634\u062f:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'// Counter.tsx\nimport React, { useState } from "react";\ninterface CounterProps {\n  description: string;\n  defaultCount: number;\n}\nexport default function Counter({ description, defaultCount }: CounterProps) {\n  const [count, setCount] = useState(defaultCount);\n  const [incrementor, setIncrementor] = useState(1);\n  return (\n    <div>\n      <h2>\n        DESC: {description} - DC: {defaultCount}\n      </h2>\n      <label>\n        Incrementor\n        <input value={incrementor} onChange = {e => setIncrementor(parseInt(e.target.value) || 0)} type="number" />\n      </label>\n      <button aria-label="decrement" onClick={() => setCount(count - incrementor)}>\n        -\n      </button>\n      Current Count: {count}\n      <button aria-label="increment" onClick={() => setCount(count + incrementor)}>\n        +\n      </button>\n    </div>\n  );\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'// Counter.spec.tsx\nimport { render, screen } from "@testing-library/react";\nimport user from "@testing-library/user-event";\nimport Counter from "./Counter";\ndescribe("Counter", () => {\n    describe("Initialized with defaultCount=10 and description=\'WWW\'", () => {\n        beforeEach(() => {\n          // eslint-disable-next-line testing-library/no-render-in-setup\n          render(<Counter defaultCount={10} description="WWW" />);\n        });\n        it("renders \'Current Count: 10\'", () => {\n          expect(screen.getByText("Current Count: 10")).toBeInTheDocument();\n        });\n        it("renders title as \'WWW\'", () => {\n          expect(screen.getByText(/WWW/i)).toBeInTheDocument();\n        });\n        describe("When the incrementor changes to 5 and \'+\' button is clicked", () => {\n            beforeEach(() => {\n                user.type(screen.getByLabelText(/Incrementor/), "{selectall}5");\n                user.click(screen.getByRole("button", {name: "increment"}));\n            });\n            it("renders \'Current Count: 15\'", () => {\n                expect(screen.getByText("Current Count: 15")).toBeInTheDocument();\n            })\n        });\n        describe("When the incrementor changes to 25 and \'-\' button is clicked", () => {\n            beforeEach(() => {\n                user.type(screen.getByLabelText(/Incrementor/), "{selectall}25");\n                user.click(screen.getByRole("button", {name: "decrement"}));\n            });\n            it("renders \'Current Count: -15\'", () => {\n                expect(screen.getByText("Current Count: -15")).toBeInTheDocument();\n            })\n        });\n      });\n  describe("Initialized with defaultCount=0 and description=\'My Counter\'", () => {\n    beforeEach(() => {\n      // eslint-disable-next-line testing-library/no-render-in-setup\n      render(<Counter defaultCount={0} description="My Counter" />);\n    });\n    it("renders \'Current Count: 0\'", () => {\n      expect(screen.getByText("Current Count: 0")).toBeInTheDocument();\n    });\n    it("renders title as \'My Counter\'", () => {\n      expect(screen.getByText(/my counter/i)).toBeInTheDocument();\n    });\n    describe("when - is clicked", () => {\n        beforeEach(() => {\n            user.click(screen.getByRole("button", {name: "decrement"}));\n        });\n        it("renders \'Current Count: -1\'", () => {\n            expect(screen.getByText("Current Count: -1")).toBeInTheDocument()\n        })\n    });\n    describe("when + is clicked", () => {\n        beforeEach(() => {\n            user.click(screen.getByRole("button", {name: "increment"}));\n        });\n        it("renders \'Current Count: 1\'", () => {\n            expect(screen.getByText("Current Count: 1")).toBeInTheDocument()\n        })\n    });\n  });\n});\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"describe"),":\n\u0645\u06cc \u062a\u0648\u0627\u0646 \u0628\u0631\u0627\u06cc \u0637\u0628\u0642\u0647 \u0628\u0646\u062f\u06cc ",(0,i.kt)("inlineCode",{parentName:"p"},"section")," \u0647\u0627\u06cc \u0647\u0631 \u0628\u062e\u0634 \u0627\u0632 \u0622\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f \u06a9 \u0645\u0627\u0646\u0646\u062f\u0647 ",(0,i.kt)("inlineCode",{parentName:"p"},"div")," \u0645\u06cc \u0628\u0627\u0634\u062f."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"beforeEach"),":\n\u0627\u0632 \u0627\u06cc\u0646 \u0645\u062a\u062f \u0628\u0631\u0627\u06cc \u0627\u062c\u0631\u0627\u06cc \u0686\u0646\u062f \u062e\u0637 \u06a9\u062f \u06a9 \u062f\u0631 \u062c\u0627\u0647\u0627\u06cc \u062f\u06cc\u06af\u0631 \u062a\u06a9\u0631\u0627\u0631 \u0634\u062f\u0647 \u0627\u0633\u062a\u060c \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u06a9\u0646\u06cc\u0645 \u06a9 \u0641\u0642\u0637 \u0628\u0631\u0627\u06cc \u062a\u0645\u06cc\u0632\u06cc \u06a9\u062f \u0647\u0627 \u0645\u06cc \u0628\u0627\u0634\u062f."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"it"),":\n\u0628\u0631\u0627\u06cc \u0627\u0646\u062c\u0627\u0645 \u062a\u0633\u062a \u0631\u0648\u06cc \u0647\u0631 \u0628\u062e\u0634\u06cc \u0628\u0627\u06cc\u062f \u0627\u0632 \u0627\u06cc\u0646 \u0645\u062a\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645 \u0648 \u0645\u0634\u062e\u0635 \u06a9\u0646\u06cc\u0645 \u06a9 \u0645\u06cc\u062e\u0648\u0627\u06cc\u06cc\u0645 \u06a9\u062f\u0627\u0645 \u0627\u0644\u0645\u0627\u0646 \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u0648 \u0633\u067e\u0633 \u0631\u0648\u06cc \u0622\u0646 \u062a\u0633\u062a \u0628\u0646\u0648\u06cc\u0633\u06cc\u0645"),(0,i.kt)("p",null,"\u2728 \u0645\u06cc \u062a\u0648\u0627\u0646 \u0628\u062c\u0627\u06cc ",(0,i.kt)("inlineCode",{parentName:"p"},"it")," \u0627\u0632 ",(0,i.kt)("inlineCode",{parentName:"p"},"fit")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645 \u0648 \u0622\u0646 \u0645\u062e\u0641\u0641 ",(0,i.kt)("inlineCode",{parentName:"p"},"focus it")," \u0645\u06cc \u0628\u0627\u0634\u062f \u06a9 \u0627\u0628\u062a\u062f\u0627 \u0622\u0646 \u062a\u0633\u062a\u06cc \u06a9 \u0628\u0627 ",(0,i.kt)("inlineCode",{parentName:"p"},"fit")," \u0628\u0627\u0634\u062f \u0627\u062c\u0631\u0627 \u0645\u06cc \u0634\u0648\u062f \u0648 \u0633\u067e\u0633 \u0645\u0627\u0628\u0642\u06cc \u062a\u0633\u062a \u0647\u0627 \u0627\u062c\u0631\u0627 \u0645\u06cc\u0634\u0648\u0646\u062f."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"expect"),":\n\u0627\u0646\u062a\u0638\u0627\u0631\u0627\u062a \u062e\u0648\u062f\u0645\u0627\u0646 \u0631\u0627 \u0627\u0632 \u062a\u0633\u062a \u0645\u06cc\u0646\u0648\u06cc\u0633\u06cc\u0645\u060c \u06cc\u0639\u0646\u06cc \u0627\u0646\u062a\u0638\u0627\u0631 \u062f\u0627\u0631\u06cc\u0645 \u06a9 \u0627\u0644\u0645\u0627\u0646 \u0627\u0646\u062a\u062e\u0627\u0628\u06cc \u06cc\u0627 \u0628\u062e\u0634 \u0627\u0646\u062a\u062e\u0627\u0628\u06cc \u0628\u0631\u0627\u06cc \u062a\u0633\u062a\u060c \u0686 \u062c\u0648\u0627\u0628\u06cc \u0628 \u0645\u0627 \u0628\u062f\u0647\u062f."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"user"),":\n\u062f\u0631 \u0648\u0627\u0642\u0639 \u06a9\u0627\u0631 \u0647\u0645\u0627\u0646 ",(0,i.kt)("inlineCode",{parentName:"p"},"fireEvent")," \u0631\u0627 \u0627\u0646\u062c\u0627\u0645 \u0645\u06cc\u062f\u0647\u062f \u0627\u0645\u0627 \u0633\u0627\u062e\u062a\u0627\u0631 \u0628\u0647\u062a\u0631\u06cc \u062f\u0627\u0631\u062f \u0648 \u062a\u0642\u0631\u06cc\u0628\u0627 99 \u062f\u0631\u0635\u062f \u0645\u062a\u062f \u0647\u0627\u06cc ",(0,i.kt)("inlineCode",{parentName:"p"},"fireEvent")," \u0631\u0627 \u062f\u0631 \u062e\u0648\u062f \u062f\u0627\u0631\u062f ( \u0645\u0627\u0646\u0646\u062f: ",(0,i.kt)("inlineCode",{parentName:"p"},"click"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"change")," )"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"screen"),":\n\u0647\u0631\u06af\u0627\u0647 \u0628\u062e\u0648\u0627\u0647\u06cc\u0645 \u0628 \u0627\u0644\u0645\u0627\u0646 \u0647\u0627 \u062f\u0631 \u0635\u0641\u062d\u0647 \u062f\u0633\u062a\u0631\u0633\u06cc \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u0645\u060c \u0628\u0627\u06cc\u062f \u0627\u0632 \u0637\u0631\u06cc\u0642 \u0627\u06cc\u0646 ",(0,i.kt)("inlineCode",{parentName:"p"},"class")," \u0628 \u0622\u0646 \u0647\u0627 \u062f\u0633\u062a\u0631\u0633\u06cc \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u0645 \u06a9 \u062e\u0648\u062f \u0645\u062a\u062f \u0647\u0627\u06cc \u0632\u06cc\u0627\u062f\u06cc \u0628\u0631\u0627\u06cc \u0627\u0646\u062a\u062e\u0627\u0628 \u0627\u0644\u0627\u0646 \u0647\u0627 \u0628 \u0645\u0627 \u0645\u06cc\u062f\u0647\u062f.( \u0645\u0627\u0646\u0646\u062f: ",(0,i.kt)("inlineCode",{parentName:"p"},"getByRole"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"getByText"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"toBeInTheDocument")," )"),(0,i.kt)("p",null,"\ud83c\udf89 \u062d\u062a\u0645\u0627 \u0628\u0631\u0627\u06cc \u062a\u0633\u062a \u0646\u0648\u06cc\u0633\u06cc \u0628\u0631\u0627\u06cc \u0647\u0631 \u0628\u062e\u0634\u06cc \u062f\u0631 \u06a9\u062f \u0647\u0627\u06cc \u067e\u0631\u0648\u0698\u0647\u060c \u0628 \u062f\u0627\u06a9\u06cc\u0648\u0645\u0646\u062a \u0627\u0648\u0644 \u0647\u0645\u06cc\u0646 \u0635\u0641\u062d\u0647 \u0645\u0631\u0627\u062c\u0639\u0647 \u0634\u0648\u062f."),(0,i.kt)("p",null,"\ud83c\udf89 \u0645\u06cc \u062a\u0648\u0627\u0646 \u0628\u0631\u0627\u06cc \u0627\u0646\u06a9\u0647 \u0641\u0642\u0637 \u06cc\u06a9 \u0641\u0627\u06cc\u0644 \u0627\u0632 \u062a\u0633\u062a \u0647\u0627 \u0627\u062c\u0631\u0627 \u0634\u0648\u062f \u0627\u0632 \u062f\u0633\u062a\u0648\u0631 \u0632\u06cc\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645 :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm t -- counter.spec.tsx\n")),(0,i.kt)("h3",{id:"async-test"},"async test"))}p.isMDXComponent=!0}}]);