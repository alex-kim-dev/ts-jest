(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),i=(n(0),n(158)),a={id:"react-native",title:"Using with React Native"},c={unversionedId:"guides/react-native",id:"guides/react-native",isDocsHomePage:!1,title:"Using with React Native",description:"To use ts-jest with React Native + TypeScript and Babel 7, you'll first need to follow this tutorial.",source:"@site/docs/guides/react-native.md",slug:"/guides/react-native",permalink:"/ts-jest/docs/next/guides/react-native",editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/docs/guides/react-native.md",version:"current",sidebar:"docs",previous:{title:"ESM Support",permalink:"/ts-jest/docs/next/guides/esm-support"},next:{title:"Using with monorepo",permalink:"/ts-jest/docs/next/guides/using-with-monorepo"}},s=[{value:"Babel config",id:"babel-config",children:[]},{value:"TypeScript Configuration",id:"typescript-configuration",children:[]},{value:"Jest config",id:"jest-config",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To use ",Object(i.b)("inlineCode",{parentName:"p"},"ts-jest")," with React Native + TypeScript and Babel 7, you'll first need to follow ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://facebook.github.io/react-native/blog/2018/05/07/using-typescript-with-react-native"}),"this tutorial"),"."),Object(i.b)("p",null,"After that, some little modifications will be required as follows:"),Object(i.b)("h3",{id:"babel-config"},"Babel config"),Object(i.b)("p",null,"If you didn't yet, move any Babel config from ",Object(i.b)("inlineCode",{parentName:"p"},".babelrc")," to ",Object(i.b)("inlineCode",{parentName:"p"},"babel.config.js"),". It should at least contain:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// babel.config.js\nmodule.exports = {\n  presets: ['module:metro-react-native-babel-preset'],\n}\n")),Object(i.b)("h3",{id:"typescript-configuration"},"TypeScript Configuration"),Object(i.b)("p",null,"Create a new ",Object(i.b)("inlineCode",{parentName:"p"},"tsconfig.spec.json")," at the root of your project with the following content"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'// tsconfig.spec.json\n{\n  "extends": "./tsconfig.json",\n  "compilerOptions": {\n    "jsx": "react"\n  }\n}\n')),Object(i.b)("h3",{id:"jest-config"},"Jest config"),Object(i.b)("p",null,"In the same way that you moved Babel config, move Jest config from ",Object(i.b)("inlineCode",{parentName:"p"},"jest")," key of ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," to ",Object(i.b)("inlineCode",{parentName:"p"},"jest.config.js"),". It should look like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// jest.config.js\nconst { defaults: tsjPreset } = require('ts-jest/presets')\n\nmodule.exports = {\n  preset: 'react-native',\n  globals: {\n    'ts-jest': {\n      tsconfig: 'tsconfig.spec.json',\n    },\n  },\n  transform: {\n    '^.+\\\\.jsx$': 'babel-jest',\n    '^.+\\\\.tsx?$': 'ts-jest',\n  },\n  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],\n}\n")))}p.isMDXComponent=!0},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,d=u["".concat(a,".").concat(f)]||u[f]||b[f]||i;return n?o.a.createElement(d,c(c({ref:t},l),{},{components:n})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);