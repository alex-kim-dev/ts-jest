(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{125:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return b}));var i=t(3),a=t(7),o=(t(0),t(158)),r={title:"Diagnostics option"},s={unversionedId:"getting-started/options/diagnostics",id:"version-27.0/getting-started/options/diagnostics",isDocsHomePage:!1,title:"Diagnostics option",description:"The diagnostics option configures error reporting.",source:"@site/versioned_docs/version-27.0/getting-started/options/diagnostics.md",slug:"/getting-started/options/diagnostics",permalink:"/ts-jest/docs/getting-started/options/diagnostics",editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-27.0/getting-started/options/diagnostics.md",version:"27.0"},l=[{value:"Disabling/enabling",id:"disablingenabling",children:[]},{value:"Advanced configuration",id:"advanced-configuration",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:l};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"diagnostics")," option configures error reporting.\nIt can both be enabled/disabled entirely or limited to a specific type of errors and/or files."),Object(o.b)("p",null,"If a diagnostic is not filtered out, ",Object(o.b)("inlineCode",{parentName:"p"},"ts-jest")," will fail the compilation and your test."),Object(o.b)("h3",{id:"disablingenabling"},"Disabling/enabling"),Object(o.b)("p",null,"By default all diagnostics are enabled. This is the same as setting the ",Object(o.b)("inlineCode",{parentName:"p"},"diagnostics")," option to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),".\nTo disable all diagnostics, set ",Object(o.b)("inlineCode",{parentName:"p"},"diagnostics")," to ",Object(o.b)("inlineCode",{parentName:"p"},"false"),".\nThis might lead to slightly better performance, especially if you're not using Jest's cache."),Object(o.b)("h3",{id:"advanced-configuration"},"Advanced configuration"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"diagnostics")," option's value can also accept an object for more advanced configuration. Each config. key is optional:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"warnOnly")),": If specified and ",Object(o.b)("inlineCode",{parentName:"li"},"true"),", diagnostics will be reported but won't stop compilation (default: ",Object(o.b)("em",{parentName:"li"},"disabled"),")."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"ignoreCodes")),": List of TypeScript error codes to ignore. Complete list can be found ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/Microsoft/TypeScript/blob/main/src/compiler/diagnosticMessages.json"}),"there"),". By default here are the ones ignored:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"6059"),": ",Object(o.b)("em",{parentName:"li"},"'rootDir' is expected to contain all source files.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"18002"),": ",Object(o.b)("em",{parentName:"li"},"The 'files' list in config file is empty.")," (it is strongly recommended including this one)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"18003"),": ",Object(o.b)("em",{parentName:"li"},"No inputs were found in config file.")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"exclude")),": If specified, diagnostics of source files which path ",Object(o.b)("strong",{parentName:"li"},"matches")," will be ignored. This works a bit\nsimilar to ",Object(o.b)("inlineCode",{parentName:"li"},"tsconfig")," option ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.typescriptlang.org/tsconfig#exclude"}),"exclude")," with the only difference is that\nin TypeScript, ",Object(o.b)("inlineCode",{parentName:"li"},"exclude")," will also exclude files from compilation process."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"pretty")),": Enables/disables colorful and pretty output of errors (default: ",Object(o.b)("em",{parentName:"li"},"enabled"),").")),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("h4",{id:"disabling-diagnostics"},"Disabling diagnostics"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      diagnostics: false,\n    },\n  },\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "diagnostics": false\n      }\n    }\n  }\n}\n')),Object(o.b)("h4",{id:"advanced-options"},"Advanced options"),Object(o.b)("h5",{id:"enabling-diagnostics-for-test-files-only"},"Enabling diagnostics for test files only"),Object(o.b)("p",null,"Assuming all your test files ends with ",Object(o.b)("inlineCode",{parentName:"p"},".spec.ts")," or ",Object(o.b)("inlineCode",{parentName:"p"},".test.ts"),", using the following config will enable error reporting only for those files:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      diagnostics: {\n        exclude: ['**/*.spec.ts'],\n      },\n    },\n  },\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "diagnostics": {\n          "exclude": ["**/*.spec.ts"]\n        }\n      }\n    }\n  }\n}\n')),Object(o.b)("h5",{id:"do-not-fail-on-first-error"},"Do not fail on first error"),Object(o.b)("p",null,"While some diagnostics are stop-blockers for the compilation, most of them are not. If you want the compilation (and so your tests) to continue when encountering those, set the ",Object(o.b)("inlineCode",{parentName:"p"},"warnOnly")," to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      diagnostics: {\n        warnOnly: true,\n      },\n    },\n  },\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "diagnostics": {\n          "warnOnly": true\n        }\n      }\n    }\n  }\n}\n')),Object(o.b)("h5",{id:"ignoring-some-error-codes"},"Ignoring some error codes"),Object(o.b)("p",null,"All TypeScript error codes can be found ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/Microsoft/TypeScript/blob/main/src/compiler/diagnosticMessages.json"}),"there"),". The ",Object(o.b)("inlineCode",{parentName:"p"},"ignoreCodes")," option accepts this values:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"A single ",Object(o.b)("inlineCode",{parentName:"li"},"number")," (example: ",Object(o.b)("inlineCode",{parentName:"li"},"1009"),"): unique error code to ignore"),Object(o.b)("li",{parentName:"ol"},"A ",Object(o.b)("inlineCode",{parentName:"li"},"string")," with a code (example ",Object(o.b)("inlineCode",{parentName:"li"},'"1009"'),", ",Object(o.b)("inlineCode",{parentName:"li"},'"TS1009"')," or ",Object(o.b)("inlineCode",{parentName:"li"},'"TS1009"'),")"),Object(o.b)("li",{parentName:"ol"},"A ",Object(o.b)("inlineCode",{parentName:"li"},"string")," with a list of the above (example: ",Object(o.b)("inlineCode",{parentName:"li"},'"1009, TS2571, 4072"'),")"),Object(o.b)("li",{parentName:"ol"},"An ",Object(o.b)("inlineCode",{parentName:"li"},"array")," of one or more from ",Object(o.b)("inlineCode",{parentName:"li"},"1")," or ",Object(o.b)("inlineCode",{parentName:"li"},"3")," (example: ",Object(o.b)("inlineCode",{parentName:"li"},'[1009, "TS2571", "6031"]'),")")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      diagnostics: {\n        ignoreCodes: [2571, 6031, 18003],\n      },\n    },\n  },\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "diagnostics": {\n          "ignoreCodes": [2571, 6031, 18003]\n        }\n      }\n    }\n  }\n}\n')))}b.isMDXComponent=!0},158:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var i=t(0),a=t.n(i);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),b=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=b(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},g=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=b(t),g=i,m=p["".concat(r,".").concat(g)]||p[g]||d[g]||o;return t?a.a.createElement(m,s(s({ref:n},c),{},{components:t})):a.a.createElement(m,s({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=t[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);