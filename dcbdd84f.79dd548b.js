(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),i=(n(0),n(158)),a={id:"debugging",title:"Debugging ts-jest"},c={unversionedId:"debugging",id:"version-26.5/debugging",isDocsHomePage:!1,title:"Debugging ts-jest",description:"You can activate the debug logger by setting the environment variable TSJESTLOG before running tests.",source:"@site/versioned_docs/version-26.5/debugging.md",slug:"/debugging",permalink:"/ts-jest/docs/26.5/debugging",editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-26.5/debugging.md",version:"26.5",sidebar:"version-26.5-docs",previous:{title:"Migration from <=23.10",permalink:"/ts-jest/docs/26.5/migration"}},u=[],s={toc:u};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You can activate the debug logger by setting the environment variable ",Object(i.b)("inlineCode",{parentName:"p"},"TS_JEST_LOG")," before running tests.\nThe output of the logger will be in ",Object(i.b)("strong",{parentName:"p"},"ts-jest.log")," in current working directory."),Object(i.b)("p",null,"The debug logger contains some useful information about how internal ",Object(i.b)("inlineCode",{parentName:"p"},"ts-jest")," works, including which files are processed,\nwhich Jest config or TypeScript config is used etc."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Linux/MacOS")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"export TS_JEST_LOG=ts-jest.log\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Windows")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"set TS_JEST_LOG=ts-jest.log\n")))}p.isMDXComponent=!0},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},g=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(n),g=r,d=l["".concat(a,".").concat(g)]||l[g]||b[g]||i;return n?o.a.createElement(d,c(c({ref:t},s),{},{components:n})):o.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=g;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);