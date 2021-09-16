(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{158:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),l=p(n),f=r,m=l["".concat(c,".").concat(f)]||l[f]||d[f]||i;return n?o.a.createElement(m,s(s({ref:t},u),{},{components:n})):o.a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=f;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var u=2;u<i;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return a})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),i=(n(0),n(158)),c={id:"using-with-monorepo",title:"Using with monorepo"},s={unversionedId:"guides/using-with-monorepo",id:"version-27.0/guides/using-with-monorepo",isDocsHomePage:!1,title:"Using with monorepo",description:"To use ts-jest in a project with monorepo structure, you'll need to use Jest projects configuration.",source:"@site/versioned_docs/version-27.0/guides/using-with-monorepo.md",slug:"/guides/using-with-monorepo",permalink:"/ts-jest/docs/guides/using-with-monorepo",editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-27.0/guides/using-with-monorepo.md",version:"27.0",sidebar:"version-27.0-docs",previous:{title:"Using with React Native",permalink:"/ts-jest/docs/guides/react-native"},next:{title:"Troubleshooting",permalink:"/ts-jest/docs/guides/troubleshooting"}},a=[],u={toc:a};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To use ",Object(i.b)("inlineCode",{parentName:"p"},"ts-jest")," in a project with monorepo structure, you'll need to use ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://jestjs.io/docs/next/configuration#projects-arraystring--projectconfig"}),"Jest projects configuration"),"."),Object(i.b)("p",null,"When using Jest ",Object(i.b)("inlineCode",{parentName:"p"},"projects")," configuration, Jest will run ",Object(i.b)("inlineCode",{parentName:"p"},"ts-jest")," against each project which is defined in the configuration."))}p.isMDXComponent=!0}}]);