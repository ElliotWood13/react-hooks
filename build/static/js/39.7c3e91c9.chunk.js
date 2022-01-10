(this["webpackJsonpreact-hooks"]=this["webpackJsonpreact-hooks"]||[]).push([[39],{186:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(1),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?o.a.createElement(h,i(i({ref:t},p),{},{components:n})):o.a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"===typeof e?e:a,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},199:function(e,t,n){"use strict";n.r(t),n.d(t,"readingTime",(function(){return s})),n.d(t,"default",(function(){return c})),n.d(t,"tableOfContents",(function(){return p})),n.d(t,"frontMatter",(function(){return l}));var a=n(42),o=(n(1),n(186)),r=["components"],s={text:"2 min read",minutes:1.33,time:79800,words:266},i={};function c(e){var t=e.components,n=Object(a.a)(e,r);return Object(o.a)("wrapper",Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h1",{id:"lifting-state"},"Lifting state"),Object(o.a)("h2",{id:"-your-notes"},"\ud83d\udcdd Your Notes"),Object(o.a)("p",null,"Elaborate on your learnings here in ",Object(o.a)("inlineCode",{parentName:"p"},"src/exercise/03.md")),Object(o.a)("h2",{id:"background"},"Background"),Object(o.a)("p",null,"A common question from React beginners is how to share state between two sibling\ncomponents. The answer is to\n",Object(o.a)("a",{parentName:"p",href:"https://reactjs.org/docs/lifting-state-up.html"},"\u201clift the state\u201d")," which\nbasically amounts to finding the lowest common parent shared between the two\ncomponents and placing the state management there, and then passing the state\nand a mechanism for updating that state down into the components that need it."),Object(o.a)("h2",{id:"exercise"},"Exercise"),Object(o.a)("p",null,"Production deploys:"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",{parentName:"li",href:"https://react-hooks.netlify.app/isolated/exercise/03.js"},"Exercise")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",{parentName:"li",href:"https://react-hooks.netlify.app/isolated/final/03.js"},"Final"))),Object(o.a)("p",null,"\ud83d\udc68\u200d\ud83d\udcbc Peter told us we\u2019ve got a new feature request for the ",Object(o.a)("inlineCode",{parentName:"p"},"Display")," component. He\nwants us to display the ",Object(o.a)("inlineCode",{parentName:"p"},"animal")," the user selects. But that state is managed in\na \u201csibling\u201d component, so we have to move that management to the least common\nparent (",Object(o.a)("inlineCode",{parentName:"p"},"App"),") and then pass it down."),Object(o.a)("h2",{id:"extra-credit"},"Extra Credit"),Object(o.a)("h3",{id:"1--colocating-state"},"1. \ud83d\udcaf colocating state"),Object(o.a)("p",null,Object(o.a)("a",{parentName:"p",href:"https://react-hooks.netlify.app/isolated/final/03.extra-1.js"},"Production deploy")),Object(o.a)("p",null,"As a community we\u2019re pretty good at lifting state. It becomes natural over time.\nOne thing that we typically have trouble remembering to do is to push state back\ndown (or\n",Object(o.a)("a",{parentName:"p",href:"https://kentcdodds.com/blog/state-colocation-will-make-your-react-app-faster"},"colocate state"),")."),Object(o.a)("p",null,"\ud83d\udc68\u200d\ud83d\udcbc Peter told us that now users only want the animal displayed instead of the\nname:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-javascript","data-language":"javascript","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">function</span> <span class="token function">Display</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>animal<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Your favorite animal is: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>animal<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n<span class="token punctuation">}</span>\n'}})),Object(o.a)("p",null,"You\u2019ll notice that just updating the ",Object(o.a)("inlineCode",{parentName:"p"},"Display")," component to this works fine, but\nfor the extra credit, go through the process of moving state to the components\nthat need it. You know what you just did for the ",Object(o.a)("inlineCode",{parentName:"p"},"Animal")," component? You need to\ndo the opposite thing for the ",Object(o.a)("inlineCode",{parentName:"p"},"Name")," component."),Object(o.a)("h2",{id:"-feedback"},"\ud83e\udd89 Feedback"),Object(o.a)("p",null,"Fill out\n",Object(o.a)("a",{parentName:"p",href:"https://ws.kcd.im/?ws=React%20Hooks%20%F0%9F%8E%A3&e=03%3A%20Lifting%20state&em="},"the feedback form"),"."))}c.isMDXComponent=!0;var p=function(){return[{id:"-your-notes",level:2,title:"\ud83d\udcdd Your Notes",children:[]},{id:"background",level:2,title:"Background",children:[]},{id:"exercise",level:2,title:"Exercise",children:[]},{id:"extra-credit",level:2,title:"Extra Credit",children:[{id:"1--colocating-state",level:3,title:"1. \ud83d\udcaf colocating state",children:[]}]},{id:"-feedback",level:2,title:"\ud83e\udd89 Feedback",children:[]}]},l={}}}]);
//# sourceMappingURL=39.7c3e91c9.chunk.js.map