(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[853],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9100:function(e,t,r){var n=r(9489),o=r(7067);function a(t,r,u){return o()?(e.exports=a=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.__esModule=!0,e.exports.default=e.exports),a.apply(null,arguments)}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(3646),o=r(6860),a=r(379),u=r(8206);e.exports=function(e){return n(e)||o(e)||a(e)||u()},e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},2594:function(e,t,r){var n=r(8556);e.exports={MDXRenderer:n}},8556:function(e,t,r){var n=r(9100),o=r(319),a=r(9713),u=r(7316),l=["scope","children"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i=r(7294),p=r(4983).mdx,f=r(7890).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=u(e,l),c=f(t),d=i.useMemo((function(){if(!r)return null;var e=s({React:i,mdx:p},c),t=Object.keys(e),a=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,t]);return i.createElement(d,s({},a))}},8768:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(7294),o=r(5444),a=function(){return n.createElement("nav",{className:"NavBar-module--nav-bar--6DAkn"},n.createElement("ul",{className:"NavBar-module--nav-items--Nkmab"},n.createElement("li",null,n.createElement(o.rU,{to:"/",className:"NavBar-module--nav-item--PGuQv"},"No 개념 ",n.createElement("span",{className:"NavBar-module--color-render--YK19v"},"Research")," Blog"))))}},7002:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(7294),o=r(5444),a=r(8768),u=function(e){var t=e.pageTitle,r=e.children,u=(e.home,(0,o.K2)("3159585216"));return n.createElement("div",{className:"layout-module--page-layout--LahkG"},n.createElement("title",null,t," | ",u.site.siteMetadata.title),n.createElement(a.Z,null),n.createElement("main",null,n.createElement("h1",{className:"layout-module--heading--8VjLO"},t),r),n.createElement("footer",null,n.createElement("div",null)))}},8917:function(e,t,r){"use strict";r.r(t);var n=r(2594),o=r(7294),a=r(7002);t.default=function(e){var t=e.data;return console.log(t),o.createElement(a.Z,{pageTitle:t.mdx.frontmatter.title},o.createElement("p",null,t.mdx.frontmatter.date),o.createElement(n.MDXRenderer,null,t.mdx.body))}}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-slug-js-b43d033bc8f91ae3dc95.js.map