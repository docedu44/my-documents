"use strict";(self.webpackChunkmy_documents=self.webpackChunkmy_documents||[]).push([[9456],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2524:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"React and RN"},p=void 0,s={unversionedId:"Experiences/react/react-RN",id:"Experiences/react/react-RN",title:"React and RN",description:"Spread props",source:"@site/docs/Experiences/react/react-RN.mdx",sourceDirName:"Experiences/react",slug:"/Experiences/react/react-RN",permalink:"/my-documents/docs/Experiences/react/react-RN",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Experiences/react/react-RN.mdx",tags:[],version:"current",frontMatter:{title:"React and RN"},sidebar:"tutorialSidebar",previous:{title:"react",permalink:"/my-documents/docs/Experiences/react/react/react-starter"},next:{title:"Tips",permalink:"/my-documents/docs/Experiences/react/react-tips"}},c={},u=[{value:"Spread props",id:"spread-props",level:3},{value:"multi export",id:"multi-export",level:3},{value:"useEffect &amp; useLayoutEffect",id:"useeffect--uselayouteffect",level:3},{value:"etc",id:"etc",level:3},{value:"context",id:"context",level:3},{value:"jwt-decode",id:"jwt-decode",level:3},{value:"Tips",id:"tips",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"spread-props"},"Spread props"),(0,o.kt)("p",null,"\ud83c\udf89 \u0628\u0639\u0636\u06cc \u0645\u0648\u0627\u0642\u0639 \u0645\u0627 \u0646\u06cc\u0627\u0632 \u062f\u0627\u0631\u06cc\u0645 \u062a\u0627 \u06cc\u06a9 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0627\u06cc\u062c\u0627\u062f \u06a9\u0646\u06cc\u0645 \u0648 \u062f\u06cc\u06af\u0631 \u0646\u06cc\u0627\u0632 \u0646\u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u0645 \u06a9 \u0647\u0631 \u062f\u0641\u0639\u0647\u060c ",(0,o.kt)("inlineCode",{parentName:"p"},"props")," \u0631\u0627 \u0628\u0631\u0627\u06cc \u0622\u0646 \u0645\u0634\u062e\u0635 \u06a9\u0646\u06cc\u0645 \u0648 \u0647\u0631 ",(0,o.kt)("inlineCode",{parentName:"p"},"prop")," \u06cc\u06cc \u06a9 \u062f\u0627\u062f\u06cc\u0645\u060c \u062e\u0648\u062f \u0628 \u062e\u0648\u062f \u0627\u0639\u0645\u0627\u0644 \u0634\u0648\u062f:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="app/components/CustomTextInput.jsx"',title:'"app/components/CustomTextInput.jsx"'},'export const CustomTextInput = ({icon, ...otherProps}) => {\n  return (\n    <View>\n      <TextInput {...otherProps}/>\n      {icon && ( <MaterialCommunityIcons name={icon} size={20} color="#6e6969"/> )}\n    </View>\n  )\n}\n')),(0,o.kt)("p",null,"\u062d\u0627\u0644 \u06a9\u0627\u0641\u06cc\u0633\u062a \u062f\u0631 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u0627\u0632 \u0627\u06cc\u0646 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="app/screens/Login.jsx"',title:'"app/screens/Login.jsx"'},'const Login = () => {\n  return (\n            <CustomTextInput\n              icon={"email"}\n              placeholder="\u0627\u06cc\u0645\u06cc\u0644 \u06a9\u0627\u0631\u0628\u0631\u06cc"\n              placeholderTextColor="royalblue"\n              keyboardType="email-address"\n              autoComplete\n              autoCorrect={false}\n              onChangeText={handleChange("email")}\n              onBlur={() => setFieldTouched("email")}\n            />\n  )\n}\nexport default Login();\n')),(0,o.kt)("h3",{id:"multi-export"},"multi export"),(0,o.kt)("p",null,"\u0647\u0631\u06af\u0627\u0647 \u062f\u0631\u0648\u0646 \u06cc\u06a9 \u0641\u0648\u0644\u062f\u0631\u060c \u0686\u0646\u062f\u06cc\u0646 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u062f\u0627\u0634\u062a\u06cc\u0645 \u0648 \u0646\u06cc\u0627\u0632 \u062f\u0627\u0634\u062a\u06cc\u0645 \u06a9 \u062f\u0631 \u06cc\u06a9 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u062f\u06cc\u06af\u0631\u060c \u0627\u0632 \u0622\u0646 \u0647\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645\u060c \u0628\u062c\u0627\u06cc \u062a\u06a9 \u0628 \u062a\u06a9 ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," \u06a9\u0631\u062f\u0646 \u0622\u0646 \u0647\u0627\u060c \u0645\u06cc \u062a\u0648\u0627\u0646 \u0627\u0632 \u0633\u0627\u062e\u062a\u0627\u0631 \u0632\u06cc\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app/components/forms/index.js"',title:'"app/components/forms/index.js"'},'export {default as CustomForm} from "./CustomForm";\nexport {default as CustomFormField} from "./CustomFormField";\nexport {default as SubmitBtn} from "./SubmitBtn";\nexport {default as ErrorMessage} from "./ErrorMessage";\n')),(0,o.kt)("p",null,"\u0633\u0627\u062e\u062a\u0627\u0631 \u0641\u0648\u0644\u062f\u0631 ",(0,o.kt)("inlineCode",{parentName:"p"},"froms")," \u0628 \u0635\u0648\u0631\u062a \u0632\u06cc\u0631 \u0627\u0633\u062a:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"forms\n    \xa6\n    \xa6 --- CustomForm.jsx\n    \xa6 --- CustomFormField.jsx\n    \xa6 --- SubmitBtn.jsx\n    \xa6 --- ErrorMessage.jsx\n")),(0,o.kt)("p",null,"\u062d\u0627\u0644 \u0645\u06cc \u062a\u0648\u0627\u0646 \u062f\u0631 \u0647\u0631 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u06cc \u06a9 \u0628 \u0627\u06cc\u0646 \u0645\u0648\u0627\u0631\u062f \u0646\u06cc\u0627\u0632 \u062f\u0627\u0634\u062a\u06cc\u0645\u060c \u0628 \u0635\u0648\u0631\u062a \u0632\u06cc\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import {CustomForm, CustomFormField, SubmitBtn} from "../components/forms";\n')),(0,o.kt)("h3",{id:"useeffect--uselayouteffect"},"useEffect & useLayoutEffect"),(0,o.kt)("p",null,"\u0647\u0631 2 \u0628\u0631\u0627\u06cc ",(0,o.kt)("inlineCode",{parentName:"p"},"re-render")," \u06a9\u0631\u062f\u0646 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc \u0634\u0648\u0646\u062f \u0627\u0645\u0627 \u0628\u0627 \u0627\u06cc\u0646 \u0641\u0631\u0642 \u06a9 ",(0,o.kt)("inlineCode",{parentName:"p"},"useLayoutEffect")," \u0632\u0648\u062f\u062a\u0631 \u0627\u0632 ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," \u0627\u062c\u0631\u0627 \u0645\u06cc \u0634\u0648\u062f\u060c \u06cc\u0639\u0646\u06cc \u0642\u0628\u0644 \u0627\u0632 \u0627\u06cc\u0646\u06a9\u0647 ",(0,o.kt)("inlineCode",{parentName:"p"},"react")," \u06a9\u0627\u0645\u0644 \u0644\u0648\u062f \u0634\u0648\u062f"),(0,o.kt)("p",null,"\u067e\u0633 \u0647\u0631 \u06af\u0627\u0647 \u0628\u062e\u0648\u0627\u0647\u06cc\u0645 \u062a\u063a\u06cc\u06cc\u0631\u0627\u062a\u06cc \u0628\u0631\u0631\u0648\u06cc ",(0,o.kt)("inlineCode",{parentName:"p"},"DOM")," \u0628\u062f\u0647\u06cc\u0645\u060c \u0628\u0647\u062a\u0631 \u0627\u0633\u062a \u0627\u0632 ",(0,o.kt)("inlineCode",{parentName:"p"},"useLayoutEffec")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645\u060c \u0686\u0648\u0646 \u062f\u0631 ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," \u0647\u0646\u06af\u0627\u0645 \u062a\u063a\u06cc\u06cc\u0631 ",(0,o.kt)("inlineCode",{parentName:"p"},"DOM"),"\u060c \u0635\u0641\u062d\u0647 \u06cc\u06a9 \u067e\u0631\u0634 \u0627\u0646\u062c\u0627\u0645 \u0645\u06cc \u062f\u0647\u062f \u06a9 \u0628\u0631\u0627\u06cc \u06a9\u0627\u0631\u0628\u0631 \u062e\u0648\u0634\u0627\u06cc\u0646\u062f \u0646\u06cc\u0633\u062a."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-reference.html#uselayouteffect"},"useLayoutEffect")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="./app/screens/stacks/CourseDetails.jsx"',title:'"./app/screens/stacks/CourseDetails.jsx"'},'  useLayoutEffect(() => {\n    navigation.setOptions({\n      headerShown: true,\n      title: course.title,\n      headerTitleStyle: {\n        fontFamily: "yekan",\n        color: "#fff",\n        fontSize: RFPercentage(2),\n      },\n      headerStyle: {\n        backgroundColor: "tomato",\n      },\n      headerTitleAlign: "center",\n    });\n  }, [navigation, route]);\n')),(0,o.kt)("h3",{id:"etc"},"etc"),(0,o.kt)("p",null,"\ud83c\udf89 \u0628\u0639\u0636\u06cc \u0648\u0642\u062a\u0627 \u0646\u06cc\u0627\u0632 \u0647\u0633\u062a \u06a9 \u0645\u0627 \u0686\u0646\u062f ",(0,o.kt)("inlineCode",{parentName:"p"},"destructure")," \u0627\u0646\u062c\u0627\u0645 \u062f\u0647\u06cc\u0645 \u06a9 \u062a\u0648\u0633\u0637 \u0645\u062b\u0627\u0644 \u0632\u06cc\u0631\u060c \u0645\u06cc \u062a\u0648\u0627\u0646 \u062f\u0631 \u06cc\u06a9\u062c\u0627 \u0622\u0646 \u0631\u0627 \u0627\u0646\u062c\u0627\u0645 \u062f\u0647\u06cc\u0645:(1. data \u0648 \u0633\u067e\u0633 2.courses)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export const fetchCourses = async () => {\n  try {\n    const { data: {courses} } = await axios.get(`${url}/courses`);\n    return courses;\n  } catch (e) {console.log(e);}\n};\n")),(0,o.kt)("h3",{id:"context"},"context"),(0,o.kt)("p",null,"\u0628\u0639\u0636\u06cc \u0645\u0648\u0627\u0642\u0639 \u0645\u0627 \u062f\u0631 \u067e\u0631\u0648\u0698\u0647 \u0647\u0627\u06cc\u0645\u0627\u0646 \u0646\u06cc\u0627\u0632 \u062f\u0627\u0631\u06cc\u0645 \u06a9 \u062f\u0631 \u0686\u0646\u062f \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0627\u0632 \u06cc\u06a9 \u062f\u0627\u062f\u0647 \u062e\u0627\u0635 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645\u060c \u06a9 \u0628\u0631\u0627\u06cc \u0627\u06cc\u0646\u06a9\u0627\u0631 \u0645\u06cc \u062a\u0648\u0627\u0646\u06cc\u0645 \u0627\u0632 ",(0,o.kt)("inlineCode",{parentName:"p"},"context")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645 \u0648 \u062f\u0631 \u0648\u0627\u0644\u062f \u062a\u0645\u0627\u0645 \u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u0645\u0648\u0631\u062f \u0646\u06cc\u0627\u0632 \u0631\u0627 \u0628 ",(0,o.kt)("inlineCode",{parentName:"p"},"context")," \u0628\u062f\u0647\u06cc\u0645 \u0648 \u062f\u0631 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0647\u0627\u06cc \u0641\u0631\u0632\u0646\u062f\u060c \u0641\u0642\u0637 \u0627\u0632 \u0622\u0646 \u0647\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645(\u06a9\u0645\u062a\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u0648\u062f)"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u0627\u0628\u062a\u062f\u0627 \u06cc\u06a9 \u0641\u0648\u0644\u062f\u0631 \u062f\u0631 \u0631\u0648\u062a \u0627\u0635\u0644\u06cc \u067e\u0631\u0648\u0698\u0647 \u0628 \u0627\u0633\u0645 ",(0,o.kt)("inlineCode",{parentName:"li"},"context")," \u0645\u06cc\u0633\u0627\u0632\u06cc\u0645."),(0,o.kt)("li",{parentName:"ol"},"\u0633\u067e\u0633 \u06cc\u06a9 \u0641\u0627\u06cc\u0644 \u0628 \u0646\u0627\u0645 ",(0,o.kt)("inlineCode",{parentName:"li"},"index.js")," \u0645\u06cc\u0633\u0627\u0632\u06cc\u0645 \u0648 \u0627\u0632 \u0633\u0627\u062e\u062a\u0627\u0631 \u0645\u062b\u0627\u0644 \u0632\u06cc\u0631 \u062f\u0631 \u0622\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc \u06a9\u0646\u06cc\u0645:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./app/context/index.js"',title:'"./app/context/index.js"'},'import { createContext } from "react";\n\nexport default context = createContext({\n    courses: [], // \u0646\u0627\u0645 \u0645\u062a\u063a\u06cc\u06cc\u0631 \u0647\u0627\u06cc\u06cc \u06a9 \u0645\u06cc\u062e\u0648\u0627\u0647\u06cc\u0645\n    loading: true, // \u0646\u0627\u0645 \u0645\u062a\u063a\u06cc\u06cc\u0631 \u0647\u0627\u06cc\u06cc \u06a9 \u0645\u06cc\u062e\u0648\u0627\u0647\u06cc\u0645\n});\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u062d\u0627\u0644 \u0628\u0627\u06cc\u062f \u062f\u0631 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0648\u0627\u0644\u062f \u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u0631\u0627 \u0628 ",(0,o.kt)("inlineCode",{parentName:"li"},"context")," \u0633\u0627\u062e\u062a\u0647 \u0634\u062f\u0647 \u0628\u062f\u0647\u06cc\u0645.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import context from "../context";\n\nconst TopTabNavigator = () => {\n  const [courses, setCourses] = useState([]);\n  const [loading, setLoading] = useState(true);\n  /*...*/\n  return (\n    <context.Provider value={{ courses, loading }}>\n      <TopTab.Navigator>{/*...*/}</TopTab.Navigator>\n    </context.Provider>\n  );};\nexport default TopTabNavigator;\n')),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"\u062d\u0627\u0644 \u0628\u0627\u06cc\u062f \u062f\u0631 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0647\u0627\u06cc \u0641\u0631\u0632\u0646\u062f\u060c \u0627\u0632 \u0627\u06cc\u0646 \u0645\u0642\u0627\u062f\u06cc\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useContext } from "react";\nimport context from "../../context";\n\nconst Courses = ({ navigation }) => {\n\n  const { courses, loading } = useContext(context);\n\n  return (\n    <ScreenLayout style={styles.container}>{/*...*/}</ScreenLayout>\n  );};\nexport default Courses;\n')),(0,o.kt)("h3",{id:"jwt-decode"},"jwt-decode"),(0,o.kt)("p",null,"\u062a\u0648\u0633\u0637 \u0627\u06cc\u0646 \u067e\u06a9\u06cc\u062c \u0645\u06cc \u062a\u0648\u0627\u0646 ",(0,o.kt)("inlineCode",{parentName:"p"},"token")," \u0647\u0627 ",(0,o.kt)("inlineCode",{parentName:"p"},"jwt")," \u0631\u0627 \u062f\u0631 ",(0,o.kt)("inlineCode",{parentName:"p"},"react")," \u0648 ",(0,o.kt)("inlineCode",{parentName:"p"},"react native")," \u0627\u0632 \u062d\u0627\u0644\u062a \u0627\u0635\u0644\u06cc ",(0,o.kt)("inlineCode",{parentName:"p"},"decode")," \u06a9\u0646\u06cc\u0645 \u0648 \u0627\u0632 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0622\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/jwt-decode"},"jwt decode")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import decode from "jwt-decode";\n\nconst token = await AsyncStorage.getItem("token");\nconst decodedToken = decode(token);\n')),(0,o.kt)("p",null,"\ud83c\udf89 \u0628\u0631\u0627\u06cc \u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a \u0628\u0647\u062a\u0631 \u0627\u0633\u062a \u0627\u0632 ",(0,o.kt)("inlineCode",{parentName:"p"},"token")," \u0648 ",(0,o.kt)("inlineCode",{parentName:"p"},"userId")," \u0628\u0627 \u0647\u0645 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u0648\u062f \u062a\u0627 \u0627\u06cc\u0645\u0646 \u062a\u0631 \u0634\u0648\u062f."),(0,o.kt)("h3",{id:"tips"},"Tips"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u0647\u06cc\u0686\u06af\u0627\u0647 \u0646\u0628\u0627\u06cc\u062f ",(0,o.kt)("inlineCode",{parentName:"li"},"hook")," \u0647\u0627 \u0631\u0627 \u062f\u0631\u0648\u0646 \u0647\u0645\u062f\u06cc\u06af\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f ( \u0645\u0627\u0646\u0646\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 ",(0,o.kt)("inlineCode",{parentName:"li"},"useDispatch")," \u062f\u0631\u0648\u0646 ",(0,o.kt)("inlineCode",{parentName:"li"},"useEffect")," ) \u0648 \u0628\u0647\u062a\u0631 \u0627\u0633\u062a \u0627\u0628\u062a\u062f\u0627 \u0622\u0646 \u0647\u0627 \u0631\u0627 \u062f\u0631\u0648\u0646 \u06cc\u06a9 \u0645\u062a\u063a\u06cc\u06cc\u0631 \u0642\u0631\u0627\u0631 \u062f\u0647\u06cc\u0645."),(0,o.kt)("li",{parentName:"ul"},"\u0628\u0639\u0636\u06cc \u067e\u06a9\u06cc\u062c \u0647\u0627 \u062a\u0645\u0627\u0645\u06cc \u0645\u0648\u0627\u0631\u062f\u06cc \u06a9 \u062f\u0627\u0631\u0646\u062f \u0631\u0627 \u0628 \u0635\u0648\u0631\u062a ",(0,o.kt)("inlineCode",{parentName:"li"},"export")," \u0642\u0631\u0627\u0631 \u062f\u0627\u062f\u0647 \u0627\u0646\u062f \u0648 \u0645\u0627 \u0641\u0642\u0637 \u0645\u06cc \u062a\u0648\u0627\u0646\u06cc\u0645 \u0622\u0646 \u0647\u0627 \u0631\u0627 \u0647\u0646\u06af\u0627\u0645 ",(0,o.kt)("inlineCode",{parentName:"li"},"import")," \u06a9\u0631\u062f\u0646\u060c ",(0,o.kt)("inlineCode",{parentName:"li"},"destructure")," \u06a9\u0646\u06cc\u0645 \u06a9 \u0628\u0631\u0627\u06cc \u0627\u06cc\u0646\u06a9\u0647 \u0647\u0645\u0647 \u0645\u0648\u0627\u0631\u062f \u0631\u0627 \u0628\u0627 \u06cc\u06a9 \u0646\u0627\u0645 \u0635\u062f\u0627 \u0628\u0632\u0646\u06cc\u0645\u060c \u0645\u06cc \u062a\u0648\u0627\u0646 \u0627\u0632 ",(0,o.kt)("inlineCode",{parentName:"li"},"wildcard")," (\u0639\u0627\u0645\u060c \u0639\u0645\u0648\u0645\u06cc) \u06cc\u0627 \u0647\u0645\u0627\u0646 ",(0,o.kt)("inlineCode",{parentName:"li"},"*")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645.")))}d.isMDXComponent=!0}}]);