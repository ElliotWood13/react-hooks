/*! For license information please see 35.b918ae93.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-hooks"]=this["webpackJsonpreact-hooks"]||[]).push([[35],{183:function(e,r,t){"use strict";e.exports=t(184)},184:function(e,r,t){"use strict";t(53);var n=t(1),a=60103;if(r.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var c=Symbol.for;a=c("react.element"),r.Fragment=c("react.fragment")}var o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var n,c={},l=null,u=null;for(n in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(u=r.ref),r)s.call(r,n)&&!i.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:a,type:e,key:l,ref:u,props:c,_owner:o.current}}r.jsx=l,r.jsxs=l},218:function(e,r,t){"use strict";t.r(r);var n=t(14),a=t(6),c=t(1),o=t(183);function s(){var e=c.useState((function(){return JSON.parse(window.localStorage.getItem("squares"))||Array(9).fill(null)})),r=Object(a.a)(e,2),t=r[0],s=r[1];c.useEffect((function(){window.localStorage.setItem("squares",JSON.stringify(t))}),[t]);var i=function(e){return e.filter(Boolean).length%2===0?"X":"O"}(t),l=function(e){for(var r=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],t=0;t<r.length;t++){var n=Object(a.a)(r[t],3),c=n[0],o=n[1],s=n[2];if(e[c]&&e[c]===e[o]&&e[c]===e[s])return e[c]}return null}(t),u=function(e,r,t){return e?"Winner: ".concat(e):r.every(Boolean)?"Scratch: Cat's game":"Next player: ".concat(t)}(l,t,i);function f(e){return Object(o.jsx)("button",{className:"square",onClick:function(){return function(e){if(!l&&!t[e]){var r=Object(n.a)(t);r[e]=i,s(r)}}(e)},children:t[e]})}return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"status",children:u}),Object(o.jsxs)("div",{className:"board-row",children:[f(0),f(1),f(2)]}),Object(o.jsxs)("div",{className:"board-row",children:[f(3),f(4),f(5)]}),Object(o.jsxs)("div",{className:"board-row",children:[f(6),f(7),f(8)]}),Object(o.jsx)("button",{className:"restart",onClick:function(){s(Array(9).fill(null))},children:"restart"})]})}function i(){return Object(o.jsx)("div",{className:"game",children:Object(o.jsx)("div",{className:"game-board",children:Object(o.jsx)(s,{})})})}r.default=function(){return Object(o.jsx)(i,{})}}}]);
//# sourceMappingURL=35.b918ae93.chunk.js.map