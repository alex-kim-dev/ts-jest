(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{158:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,f=m["".concat(o,".").concat(u)]||m[u]||b[u]||s;return n?a.a.createElement(f,i(i({ref:t},p),{},{components:n})):a.a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),s=(n(0),n(158)),o={title:"AST transformers option"},i={unversionedId:"getting-started/options/astTransformers",id:"getting-started/options/astTransformers",isDocsHomePage:!1,title:"AST transformers option",description:"ts-jest by default does hoisting for a few jest methods via a TypeScript AST transformer. One can also create custom",source:"@site/docs/getting-started/options/astTransformers.md",slug:"/getting-started/options/astTransformers",permalink:"/ts-jest/docs/next/getting-started/options/astTransformers",editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/docs/getting-started/options/astTransformers.md",version:"current"},c=[{value:"Examples",id:"examples",children:[]},{value:"Public transformers",id:"public-transformers",children:[]},{value:"Writing custom TypeScript AST transformers",id:"writing-custom-typescript-ast-transformers",children:[]}],p={toc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"ts-jest")," by default does hoisting for a few ",Object(s.b)("inlineCode",{parentName:"p"},"jest")," methods via a TypeScript AST transformer. One can also create custom\nTypeScript AST transformers and provide them to ",Object(s.b)("inlineCode",{parentName:"p"},"ts-jest")," to include into compilation process."),Object(s.b)("p",null,"The option is ",Object(s.b)("inlineCode",{parentName:"p"},"astTransformers")," and it allows ones to specify which 3 types of TypeScript AST transformers to use with ",Object(s.b)("inlineCode",{parentName:"p"},"ts-jest"),":"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"before")," means your transformers get run before TS ones, which means your transformers will get raw TS syntax\ninstead of transpiled syntax (e.g ",Object(s.b)("inlineCode",{parentName:"li"},"import")," instead of ",Object(s.b)("inlineCode",{parentName:"li"},"require")," or ",Object(s.b)("inlineCode",{parentName:"li"},"define")," )."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"after")," means your transformers get run after TS ones, which gets transpiled syntax."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"afterDeclarations")," means your transformers get run during ",Object(s.b)("inlineCode",{parentName:"li"},"d.ts")," generation phase, allowing you to transform output type declarations.")),Object(s.b)("h3",{id:"examples"},"Examples"),Object(s.b)("h4",{id:"basic-transformers"},"Basic Transformers"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      astTransformers: {\n        before: ['my-custom-transformer'],\n      },\n    },\n  },\n}\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "astTransformers": {\n          "before": ["my-custom-transformer"]\n        }\n      }\n    }\n  }\n}\n')),Object(s.b)("h4",{id:"configuring-transformers-with-options"},"Configuring transformers with options"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      astTransformers: {\n        before: [\n          {\n            path: 'my-custom-transformer-that-needs-extra-opts',\n            options: {}, // extra options to pass to transformers here\n          },\n        ],\n      },\n    },\n  },\n}\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "astTransformers": {\n          "before": [\n            {\n              "path": "my-custom-transformer-that-needs-extra-opts",\n              "options": {} // extra options to pass to transformers here\n            }\n          ]\n        }\n      }\n    }\n  }\n}\n')),Object(s.b)("h3",{id:"public-transformers"},"Public transformers"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"ts-jest")," is able to expose transformers for public usage to provide the possibility to opt-in/out for users. Currently\nthe exposed transformers are:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"path-mapping")," convert alias import/export to relative import/export path base on ",Object(s.b)("inlineCode",{parentName:"li"},"paths")," in ",Object(s.b)("inlineCode",{parentName:"li"},"tsconfig"),".\nThis transformer works similar to ",Object(s.b)("inlineCode",{parentName:"li"},"moduleNameMapper")," in ",Object(s.b)("inlineCode",{parentName:"li"},"jest.config.js"),". When using this transformer, one might not need\n",Object(s.b)("inlineCode",{parentName:"li"},"moduleNameMapper")," anymore.")),Object(s.b)("h4",{id:"example-of-opt-in-transformers"},"Example of opt-in transformers"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      astTransformers: {\n        before: ['ts-jest/dist/transformers/path-mapping'],\n      },\n    },\n  },\n}\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "astTransformers": {\n          "before": ["ts-jest/dist/transformers/path-mapping"]\n        }\n      }\n    }\n  }\n}\n')),Object(s.b)("h3",{id:"writing-custom-typescript-ast-transformers"},"Writing custom TypeScript AST transformers"),Object(s.b)("p",null,"To write a custom TypeScript AST transformers, one can take a look at ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/kulshekhar/ts-jest/tree/main/src/transformers"}),"the one")," that ",Object(s.b)("inlineCode",{parentName:"p"},"ts-jest")," is using."))}l.isMDXComponent=!0}}]);