"use strict";(self.webpackChunkmy_documents=self.webpackChunkmy_documents||[]).push([[1622],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),u=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return i.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},s=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(t),m=r,k=s["".concat(p,".").concat(m)]||s[m]||d[m]||a;return t?i.createElement(k,o(o({ref:n},c),{},{components:t})):i.createElement(k,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=s;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}s.displayName="MDXCreateElement"},7627:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return c},toc:function(){return d},default:function(){return m}});var i=t(7462),r=t(3366),a=(t(7294),t(3905)),o=["components"],l={id:"auth0",title:"Auth0 in React"},p=void 0,u={unversionedId:"Experiences/dependencies/auth0",id:"Experiences/dependencies/auth0",title:"Auth0 in React",description:"Install and use",source:"@site/docs/Experiences/dependencies/auth0.mdx",sourceDirName:"Experiences/dependencies",slug:"/Experiences/dependencies/auth0",permalink:"/my-documents/docs/Experiences/dependencies/auth0",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Experiences/dependencies/auth0.mdx",tags:[],version:"current",frontMatter:{id:"auth0",title:"Auth0 in React"},sidebar:"tutorialSidebar",previous:{title:"PWA \u062f\u0631 React",permalink:"/my-documents/docs/Experiences/PWA/pwa_react"},next:{title:"Docusaurus",permalink:"/my-documents/docs/Experiences/dependencies/docusaurus"}},c={},d=[{value:"Install and use",id:"install-and-use",level:2},{value:"custom login",id:"custom-login",level:2}],s={toc:d};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"install-and-use"},"Install and use"),(0,a.kt)("p",null,"\u062f\u0631 \u0648\u0627\u0642\u0639 ",(0,a.kt)("inlineCode",{parentName:"p"},"auth0")," \u06cc\u06a9 \u067e\u06a9\u06cc\u062c \u0645\u06cc \u0628\u0627\u0634\u062f \u06a9 \u062a\u0648\u0633\u0637 \u0622\u0646 \u0645\u06cc \u062a\u0648\u0627\u0646 \u0644\u0627\u06af\u06cc\u0646 \u0648 \u0631\u062c\u06cc\u0633\u062a\u0631 \u0633\u0627\u06cc\u062a \u062e\u0648\u062f\u0645\u0627\u0646 \u0631\u0627 \u0628\u0647 \u0631\u0627\u062d\u062a\u06cc \u0628\u0633\u0627\u0632\u06cc\u0645 \u0648 \u0628\u0631\u0627\u06cc \u0646\u0635\u0628 \u0628\u0627\u06cc\u062f \u0627\u0632 \u06a9\u062f \u0632\u06cc\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @auth0/auth0-react\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u0628\u0631\u0627\u06cc \u0634\u0631\u0648\u0639 \u0628\u0627\u06cc\u062f \u0627\u0628\u062a\u062f\u0627 \u0648\u0627\u0631\u062f \u0633\u0627\u06cc\u062a \u0622\u0646 \u0634\u0648\u06cc\u0645 \u0648 \u062f\u0631 \u0622\u0646\u062c\u0627 \u062b\u0628\u062a \u0646\u0627\u0645 \u06a9\u0646\u06cc\u0645"),(0,a.kt)("li",{parentName:"ol"},"\u0633\u067e\u0633 \u0628\u0647 \u062a\u0628 ",(0,a.kt)("inlineCode",{parentName:"li"},"Applications")," \u0645\u06cc \u0631\u0648\u06cc\u0645 \u0648 \u0631\u0648\u06cc ",(0,a.kt)("inlineCode",{parentName:"li"},"Applications")," \u06a9\u0644\u06cc\u06a9 \u0645\u06cc\u06a9\u0646\u06cc\u0645"),(0,a.kt)("li",{parentName:"ol"},"\u062f\u0631 \u0635\u0641\u062d\u0647 \u0628\u0627\u0632 \u0634\u062f\u0647\u060c \u0631\u0648\u06cc \u062f\u06a9\u0645\u0647 ",(0,a.kt)("inlineCode",{parentName:"li"},"Create Application")," \u06a9\u0644\u06cc\u06a9 \u0645\u06cc \u06a9\u0646\u06cc\u0645 \u0648 ",(0,a.kt)("inlineCode",{parentName:"li"},"app")," \u0648 \u062a\u06a9\u0646\u0648\u0644\u0648\u0698\u06cc \u06a9 \u062f\u0631 \u0622\u0646 \u0628\u0647 \u06a9\u0627\u0631 \u0645\u06cc \u0628\u0631\u06cc\u0645 \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u0645\u06cc\u06a9\u0646\u06cc\u0645 \u0648 \u06cc\u06a9 \u0627\u0633\u0645 \u0628\u0631\u0627\u06cc \u0622\u0646 \u062a\u0639\u06cc\u06cc\u0646 \u0645\u06cc \u06a9\u0646\u06cc\u0645."),(0,a.kt)("li",{parentName:"ol"},"\u062d\u0627\u0644 \u062f\u0631 3 \u0628\u062e\u0634 ",(0,a.kt)("inlineCode",{parentName:"li"},"Allowed Logout URLs"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Allowed Callback URLs")," \u0648 ",(0,a.kt)("inlineCode",{parentName:"li"},"Allowed Web Origins")," \u0622\u062f\u0631\u0633 \u0648\u0628 \u0633\u0627\u06cc\u062a\u0645\u0627\u0646 \u0631\u0627 \u0645\u06cc \u062f\u0647\u06cc\u0645 \u06cc\u0627 \u0627\u06af\u0631 \u0631\u0648\u06cc \u0633\u06cc\u0633\u062a\u0645 \u062e\u0648\u062f\u0645\u0627\u0646 \u0627\u0633\u062a\u060c \u0622\u062f\u0631\u0633 ",(0,a.kt)("inlineCode",{parentName:"li"},"localhost:3000")," \u0631\u0627 \u0645\u06cc \u062f\u0647\u06cc\u0645."),(0,a.kt)("li",{parentName:"ol"},"\u062d\u0627\u0644 \u0628\u0627\u06cc\u062f \u062f\u0631 \u06a9\u062f \u0647\u0627\u06cc\u0645\u0627\u0646 \u0627\u0632 ",(0,a.kt)("inlineCode",{parentName:"li"},"domain"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"client id")," \u0648 ",(0,a.kt)("inlineCode",{parentName:"li"},"client secret")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import ReactDOM from 'react-dom';\nimport App from './App';\nimport {Auth0Provider} from \"@auth0/auth0-react\";\n\nReactDOM.render(\n    <React.StrictMode>\n        <Auth0Provider domain=\"dev-d2-wrnlur3x.auth0.com\" clientId=\"OOr3OAhHOog1XcqpX6tdwrqOM6hwkefcvxczvhosdf\" redirectUri={window.location.origin}>\n            <App/>\n        </Auth0Provider>\n    </React.StrictMode>,\n    document.getElementById('root')\n);\n")),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"\u062d\u0627\u0644 \u0645\u06cc \u062a\u0648\u0627\u0646 \u0627\u0632 \u0642\u0627\u0628\u0644\u06cc\u062a \u0647\u0627 ",(0,a.kt)("inlineCode",{parentName:"li"},"auth0")," \u062f\u0631 \u06a9\u062f \u0647\u0627\u06cc\u0645\u0627\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import {useAuth0} from "@auth0/auth0-react";\n\nfunction App() {\n\n    const {loginWithPopup, loginWithRedirect, logout, user, isAuthenticated} = useAuth0();\n\n    return (\n        <div className="App">\n            <ul>\n                <li>\n                    <button onClick={loginWithPopup}>Login with Popup</button>\n                </li>\n                <li>\n                    <button onClick={loginWithRedirect}>Login with Redirect</button>\n                </li>\n                <li>\n                    <button onClick={logout}>Logout</button>\n                </li>\n            </ul>\n            <h3>User is {isAuthenticated ? "Logged in" : "Not logged in"}</h3>\n            {isAuthenticated && (\n                <pre style={{textAlign: "start"}}>{JSON.stringify(user, null, 2)}</pre>\n            )}\n        </div>\n    );}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"loginWithPopup"),": \u062f\u0631 \u0648\u0627\u0642\u0639 \u062a\u0648\u0633\u0637 \u0627\u06cc\u0646 \u062a\u0627\u0628\u0639 \u0645\u06cc \u062a\u0648\u0627\u0646 \u06cc\u06a9 \u067e\u0646\u062c\u0631\u0647 \u0628\u0627\u0632 \u06a9\u0631\u062f \u06a9 \u06a9\u0627\u0631\u0628\u0631 \u062f\u0631 \u0647\u0645\u0627\u0646 \u0635\u0641\u062d\u0647 \u0644\u0627\u06af\u06cc\u0646 \u06cc\u0627 \u0631\u062c\u06cc\u0633\u062a\u0631 \u06a9\u0646\u062f."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"loginWithRedirect"),": \u06a9\u0627\u0631\u0628\u0631 \u0631\u0627 \u0628\u0647 \u06cc\u06a9 \u0635\u0641\u062d\u0647 \u062f\u06cc\u06af\u0631 \u0627\u0646\u062a\u0642\u0627\u0644 \u0645\u06cc\u062f\u0647\u062f \u0648 \u0628\u0639\u062f \u0644\u0627\u06af\u06cc\u0646 \u06a9\u0627\u0631\u0628\u0631 \u0631\u0627 \u0628\u0647 \u0635\u0641\u062d\u0647 \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u0627\u0646\u062a\u0642\u0627\u0644 \u0645\u06cc \u062f\u0647\u062f."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"logout"),": \u06a9\u0627\u0631\u0628\u0631 \u0631\u0627 \u0644\u0627\u06af \u0627\u0648\u062a \u0645\u06cc \u06a9\u0646\u062f."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"user"),": \u06a9\u0644 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u06a9\u0627\u0631\u0628\u0631 \u0631\u0627 \u0628\u0631\u0627\u06cc \u0645\u0627 \u0628\u0631 \u0645\u06cc \u06af\u0631\u062f\u0627\u0646\u062f."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"isAuthenticated"),": \u0641\u0642\u0637 \u0644\u0627\u06af\u06cc\u0646 \u0634\u062f\u0646 \u06cc\u0627 \u0646\u0634\u062f\u0646 \u06a9\u0627\u0631\u0628\u0631 \u0631\u0627 \u0628\u0647 \u0645\u0627 \u0645\u06cc \u06af\u0648\u06cc\u062f."),(0,a.kt)("h2",{id:"custom-login"},"custom login"),(0,a.kt)("p",null,"\u0628\u0631\u0627\u06cc \u062a\u063a\u06cc\u06cc\u0631 \u0638\u0627\u0647\u0631 \u0635\u0641\u062d\u0647 \u0644\u0627\u06af\u06cc\u0646\u060c \u0628\u0627\u06cc\u062f \u0648\u0627\u0631\u062f \u062f\u0627\u0634\u0628\u0648\u0631\u062f \u062e\u0648\u062f\u0645\u0627\u0646 \u0634\u0648\u06cc\u0645 \u0648 \u0633\u067e\u0633 \u0628 \u0635\u0648\u0631\u062a \u0632\u06cc\u0631 \u0639\u0645\u0644 \u06a9\u0646\u06cc\u0645:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u0627\u0628\u062a\u062f\u0627 \u0631\u0648\u06cc ",(0,a.kt)("inlineCode",{parentName:"li"},"Branding")," \u0627\u0632 \u0645\u0646\u0648\u06cc \u0633\u0645\u062a \u0631\u0627\u0633\u062a \u06a9\u0644\u06cc\u06a9 \u0645\u06cc\u06a9\u0646\u06cc\u0645"),(0,a.kt)("li",{parentName:"ol"},"\u0633\u067e\u0633 \u0631\u0648\u06cc \u06af\u0632\u06cc\u0646\u0647 ",(0,a.kt)("inlineCode",{parentName:"li"},"Universal Login")," \u06a9\u0644\u06cc\u06a9 \u0645\u06cc \u06a9\u0646\u06cc\u0645"),(0,a.kt)("li",{parentName:"ol"},"\u062d\u0627\u0644 \u0645\u06cc \u062a\u0648\u0627\u0646 \u062a\u0646\u0638\u06cc\u0645\u0627\u062a \u0645\u0631\u0628\u0648\u0637 \u0628 \u0644\u0648\u06af\u0648 \u0648 \u0631\u0646\u06af \u0647\u0627\u06cc \u0627\u0635\u0644\u06cc \u0635\u0641\u062d\u0647 \u0631\u0627 \u062f\u0631 \u0642\u0633\u0645\u062a ",(0,a.kt)("inlineCode",{parentName:"li"},"Settings")," \u0627\u0646\u062c\u0627\u0645 \u062f\u0647\u06cc\u0645"),(0,a.kt)("li",{parentName:"ol"},"\u062d\u0627\u0644 \u062f\u0631 \u062a\u0628 ",(0,a.kt)("inlineCode",{parentName:"li"},"Login"),"\u060c \u0628\u0627\u0644\u0627\u06cc \u0642\u0633\u0645\u062a \u06a9\u062f \u0647\u0627\u060c \u0631\u0648\u06cc ",(0,a.kt)("inlineCode",{parentName:"li"},"drop down")," \u06a9\u0644\u06cc\u06a9 \u0645\u06cc \u06a9\u0646\u06cc\u0645 \u0648 \u06af\u0632\u06cc\u0646\u0647 ",(0,a.kt)("inlineCode",{parentName:"li"},"Custom Login Form")," \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u0645\u06cc \u06a9\u0646\u06cc\u0645 \u0648 \u06a9\u062f \u0647\u0627\u06cc \u0645\u0631\u0628\u0648\u0637\u0647 \u0631\u0627 \u062a\u063a\u06cc\u06cc\u0631 \u0645\u06cc \u062f\u0647\u06cc\u0645 \u0648 \u0635\u0641\u062d\u0647 \u0644\u0627\u06af\u06cc\u0646 \u0631\u0627 \u0634\u062e\u0635\u06cc \u0633\u0627\u0632\u06cc \u0645\u06cc \u06a9\u0646\u06cc\u0645 \u06a9 \u062f\u0631 \u0642\u0633\u0645\u062a ",(0,a.kt)("inlineCode",{parentName:"li"},"Preview")," \u0645\u06cc \u062a\u0648\u0627\u0646 \u062a\u063a\u06cc\u06cc\u0631\u0627\u062a \u0631\u0627 \u0645\u0634\u0627\u0647\u062f\u0647 \u06a9\u0631\u062f"),(0,a.kt)("li",{parentName:"ol"},"\u062f\u0631 \u0622\u062e\u0631 \u0647\u0645 \u0627\u06af\u0631 \u062f\u06a9\u0645\u0647 ",(0,a.kt)("inlineCode",{parentName:"li"},"Save Changes")," \u0631\u0627 \u0628\u0632\u0646\u06cc\u0645\u060c \u062a\u063a\u06cc\u06cc\u0631\u0627\u062a \u0631\u0648\u06cc \u0635\u0641\u062d\u0647 \u0644\u0627\u06af\u06cc\u0646 \u062a\u0645\u0627\u0645\u06cc \u0628\u0631\u0646\u0627\u0645\u0647 \u0647\u0627\u06cc \u06cc\u0648\u0632\u0631\u06cc \u06a9 \u0628\u0627 \u0622\u0646 \u0644\u0627\u06af\u06cc\u0646 \u06a9\u0631\u062f\u0647 \u0627\u06cc\u0645\u060c \u0627\u0639\u0645\u0627\u0644 \u0645\u06cc \u0634\u0648\u062f")),(0,a.kt)("p",null,"\ud83c\udf89 \u0647\u0645\u0686\u0646\u06cc\u0646 \u0645\u06cc \u062a\u0648\u0627\u0646 \u0627\u0632 \u0628\u0642\u06cc\u0647 \u062a\u0628 \u0647\u0627 \u0628\u0631\u0627\u06cc \u0634\u062e\u0635\u06cc \u0633\u0627\u0632\u06cc \u0645\u0627\u0628\u0642\u06cc \u0635\u0641\u062d\u0627\u062a \u0645\u062b\u0644 \u0635\u0641\u062d\u0647 ",(0,a.kt)("inlineCode",{parentName:"p"},"Password Reset")," \u0648 \u063a\u06cc\u0631\u0647 \u0646\u06cc\u0632 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f"),(0,a.kt)("p",null,"\ud83c\udf89 \u0628\u0627\u06cc\u062f \u062a\u0648\u062c\u0647 \u062f\u0627\u0634\u062a \u06a9 \u0628\u0631\u0627\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0639\u06a9\u0633 \u06cc\u0627 \u0641\u0627\u06cc\u0644 \u0627\u0633\u062a\u0627\u06cc\u0644 \u062e\u0627\u0631\u062c\u06cc\u060c \u062d\u062a\u0645\u0627 \u0628\u0627\u06cc\u062f ",(0,a.kt)("inlineCode",{parentName:"p"},"CDN")," \u0631\u0627 \u0628 \u06a9\u062f \u0647\u0627\u06cc ",(0,a.kt)("inlineCode",{parentName:"p"},"Auth0")," \u0644\u06cc\u0646\u06a9 \u06a9\u0646\u06cc\u0645\u060c \u0686\u0648\u0646 \u0641\u0642\u0637 \u062f\u0631 \u0622\u0646 \u062d\u0627\u0644\u062a \u0645\u06cc\u0633\u0631 \u0645\u06cc \u0628\u0627\u0634\u062f."))}m.isMDXComponent=!0}}]);