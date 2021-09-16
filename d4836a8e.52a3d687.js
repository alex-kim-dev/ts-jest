(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),s=n(7),o=(n(0),n(158)),a={id:"esm-support",title:"ESM Support"},c={unversionedId:"guides/esm-support",id:"guides/esm-support",isDocsHomePage:!1,title:"ESM Support",description:"To use ts-jest with ESM support, you'll first need to check ESM Jest documentation.",source:"@site/docs/guides/esm-support.md",slug:"/guides/esm-support",permalink:"/ts-jest/docs/next/guides/esm-support",editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/docs/guides/esm-support.md",version:"current",sidebar:"docs",previous:{title:"Test helpers",permalink:"/ts-jest/docs/next/guides/test-helpers"},next:{title:"Using with React Native",permalink:"/ts-jest/docs/next/guides/react-native"}},p=[{value:"Examples",id:"examples",children:[]}],i={toc:p};function u(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To use ",Object(o.b)("inlineCode",{parentName:"p"},"ts-jest")," with ESM support, you'll first need to check ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://jestjs.io/docs/en/ecmascript-modules"}),"ESM Jest documentation"),"."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"ts-jest")," supports ESM via a config option ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../getting-started/options/useESM"}),"useESM")," in combination with jest config option ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://jestjs.io/docs/en/next/configuration#extensionstotreatasesm-arraystring"}),"extensionsToTreatAsEsm"),"."),Object(o.b)("p",null,"There are also ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/ts-jest/docs/next/getting-started/presets"}),"3 presets")," to work with ESM."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("h4",{id:"manual-configuration"},"Manual configuration"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// jest.config.js\nmodule.exports = {\n  // [...]\n  extensionsToTreatAsEsm: ['.ts'],\n  globals: {\n    'ts-jest': {\n      useESM: true,\n    },\n  },\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'// OR package.json\n{\n  // [...]\n  "jest": {\n    "extensionsToTreatAsEsm": [".ts"],\n    "globals": {\n      "ts-jest": {\n        "useESM": true\n      }\n    }\n  }\n}\n')),Object(o.b)("h4",{id:"use-esm-presets"},"Use ESM presets"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// jest.config.js\nmodule.exports = {\n  // [...]\n  preset: 'ts-jest/presets/default-esm', // or other ESM presets\n  globals: {\n    'ts-jest': {\n      useESM: true,\n    },\n  },\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'// OR package.json\n{\n  // [...]\n  "jest": {\n    "preset": "ts-jest/presets/default-esm", // or other ESM presets,\n    "globals": {\n      "ts-jest": {\n        "useESM": true\n      }\n    }\n  }\n}\n')))}u.isMDXComponent=!0},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return j}));var r=n(0),s=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=s.a.createContext({}),u=function(e){var t=s.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return s.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},m=s.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),l=u(n),m=r,j=l["".concat(a,".").concat(m)]||l[m]||b[m]||o;return n?s.a.createElement(j,c(c({ref:t},i),{},{components:n})):s.a.createElement(j,c({ref:t},i))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var i=2;i<o;i++)a[i]=n[i];return s.a.createElement.apply(null,a)}return s.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);