(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[7],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9100:function(e,t,r){var n=r(9489),o=r(7067);function u(t,r,a){return o()?(e.exports=u=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=u=function(e,t,r){var o=[null];o.push.apply(o,t);var u=new(Function.bind.apply(e,o));return r&&n(u,r.prototype),u},e.exports.__esModule=!0,e.exports.default=e.exports),u.apply(null,arguments)}e.exports=u,e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(3646),o=r(6860),u=r(379),a=r(8206);e.exports=function(e){return n(e)||o(e)||u(e)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},2594:function(e,t,r){var n=r(8556);e.exports={MDXRenderer:n}},8556:function(e,t,r){var n=r(9100),o=r(319),u=r(9713),a=r(7316),l=["scope","children"];function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=r(7294),i=r(4983).mdx,f=r(7890).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,u=a(e,l),s=f(t),d=p.useMemo((function(){if(!r)return null;var e=c({React:p,mdx:i},s),t=Object.keys(e),u=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(u)))}),[r,t]);return p.createElement(d,c({},u))}},7002:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(7294),o=r(5444),u=r(8768),a=function(e){var t=e.pageTitle,r=e.children,a=(e.home,(0,o.K2)("3159585216"));return n.createElement("div",{className:"layout-module--page-layout--LahkG"},n.createElement("title",null,t," | ",a.site.siteMetadata.title),n.createElement(u.Z,null),n.createElement("main",null,n.createElement("h1",{className:"layout-module--heading--8VjLO"},t),r),n.createElement("footer",null,n.createElement("div",null)))}},9690:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var n=r(7294),o=r(7002),u=(r(2594),r(5444)),a="PostItem-module--post-title--S2GEs",l=r(3964),s=r.n(l),c=function(e){var t=e.node;return n.createElement(u.rU,{className:a,to:"/blog/"+t.slug,key:t.id},n.createElement("article",{className:"PostItem-module--post-wrapper--1Lw2n"},n.createElement("h2",{className:a},t.frontmatter.title),n.createElement("p",{className:"PostItem-module--post-content--CGP-V"},t.excerpt),n.createElement("p",{className:"PostItem-module--postTime--6bUDt"},s()(t.frontmatter.date).format("MMM DD, YYYY"))))};(0,r(6480).q)();var p=function(e){var t=e.data;return n.createElement(o.Z,null,n.createElement("section",{className:"blog-module--post-list--yKu1Z"},t.allMdx.nodes.map((function(e,t){return n.createElement("div",{key:t},n.createElement(c,{node:e}))}))))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-b274661d4259a4234c1e.js.map