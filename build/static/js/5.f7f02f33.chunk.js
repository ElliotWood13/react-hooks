/*! For license information please see 5.f7f02f33.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-hooks"]=this["webpackJsonpreact-hooks"]||[]).push([[5],{183:function(t,e,i){"use strict";t.exports=i(184)},184:function(t,e,i){"use strict";i(53);var s=i(1),n=60103;if(e.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var a=Symbol.for;n=a("react.element"),e.Fragment=a("react.fragment")}var r=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function h(t,e,i){var s,a={},h=null,g=null;for(s in void 0!==i&&(h=""+i),void 0!==e.key&&(h=""+e.key),void 0!==e.ref&&(g=e.ref),e)o.call(e,s)&&!l.hasOwnProperty(s)&&(a[s]=e[s]);if(t&&t.defaultProps)for(s in e=t.defaultProps)void 0===a[s]&&(a[s]=e[s]);return{$$typeof:n,type:t,key:h,ref:g,props:a,_owner:r.current}}e.jsx=h,e.jsxs=h},188:function(t,e,i){"use strict";var s=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},n=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(s(this,t),!(e instanceof Node))throw"Can't initialize VanillaTilt because "+e+" is not a Node.";this.width=null,this.height=null,this.clientWidth=null,this.clientHeight=null,this.left=null,this.top=null,this.gammazero=null,this.betazero=null,this.lastgammazero=null,this.lastbetazero=null,this.transitionTimeout=null,this.updateCall=null,this.event=null,this.updateBind=this.update.bind(this),this.resetBind=this.reset.bind(this),this.element=e,this.settings=this.extendSettings(i),this.reverse=this.settings.reverse?-1:1,this.glare=t.isSettingTrue(this.settings.glare),this.glarePrerender=t.isSettingTrue(this.settings["glare-prerender"]),this.fullPageListening=t.isSettingTrue(this.settings["full-page-listening"]),this.gyroscope=t.isSettingTrue(this.settings.gyroscope),this.gyroscopeSamples=this.settings.gyroscopeSamples,this.elementListener=this.getElementListener(),this.glare&&this.prepareGlare(),this.fullPageListening&&this.updateClientSize(),this.addEventListeners(),this.reset(),this.updateInitialPosition()}return t.isSettingTrue=function(t){return""===t||!0===t||1===t},t.prototype.getElementListener=function(){if(this.fullPageListening)return window.document;if("string"===typeof this.settings["mouse-event-element"]){var t=document.querySelector(this.settings["mouse-event-element"]);if(t)return t}return this.settings["mouse-event-element"]instanceof Node?this.settings["mouse-event-element"]:this.element},t.prototype.addEventListeners=function(){this.onMouseEnterBind=this.onMouseEnter.bind(this),this.onMouseMoveBind=this.onMouseMove.bind(this),this.onMouseLeaveBind=this.onMouseLeave.bind(this),this.onWindowResizeBind=this.onWindowResize.bind(this),this.onDeviceOrientationBind=this.onDeviceOrientation.bind(this),this.elementListener.addEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.addEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.addEventListener("mousemove",this.onMouseMoveBind),(this.glare||this.fullPageListening)&&window.addEventListener("resize",this.onWindowResizeBind),this.gyroscope&&window.addEventListener("deviceorientation",this.onDeviceOrientationBind)},t.prototype.removeEventListeners=function(){this.elementListener.removeEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.removeEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.removeEventListener("mousemove",this.onMouseMoveBind),this.gyroscope&&window.removeEventListener("deviceorientation",this.onDeviceOrientationBind),(this.glare||this.fullPageListening)&&window.removeEventListener("resize",this.onWindowResizeBind)},t.prototype.destroy=function(){clearTimeout(this.transitionTimeout),null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.reset(),this.removeEventListeners(),this.element.vanillaTilt=null,delete this.element.vanillaTilt,this.element=null},t.prototype.onDeviceOrientation=function(t){if(null!==t.gamma&&null!==t.beta){this.updateElementPosition(),this.gyroscopeSamples>0&&(this.lastgammazero=this.gammazero,this.lastbetazero=this.betazero,null===this.gammazero?(this.gammazero=t.gamma,this.betazero=t.beta):(this.gammazero=(t.gamma+this.lastgammazero)/2,this.betazero=(t.beta+this.lastbetazero)/2),this.gyroscopeSamples-=1);var e=this.settings.gyroscopeMaxAngleX-this.settings.gyroscopeMinAngleX,i=this.settings.gyroscopeMaxAngleY-this.settings.gyroscopeMinAngleY,s=e/this.width,n=i/this.height,a=(t.gamma-(this.settings.gyroscopeMinAngleX+this.gammazero))/s,r=(t.beta-(this.settings.gyroscopeMinAngleY+this.betazero))/n;null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event={clientX:a+this.left,clientY:r+this.top},this.updateCall=requestAnimationFrame(this.updateBind)}},t.prototype.onMouseEnter=function(){this.updateElementPosition(),this.element.style.willChange="transform",this.setTransition()},t.prototype.onMouseMove=function(t){null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event=t,this.updateCall=requestAnimationFrame(this.updateBind)},t.prototype.onMouseLeave=function(){this.setTransition(),this.settings.reset&&requestAnimationFrame(this.resetBind)},t.prototype.reset=function(){this.event={clientX:this.left+this.width/2,clientY:this.top+this.height/2},this.element&&this.element.style&&(this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"),this.resetGlare()},t.prototype.resetGlare=function(){this.glare&&(this.glareElement.style.transform="rotate(180deg) translate(-50%, -50%)",this.glareElement.style.opacity="0")},t.prototype.updateInitialPosition=function(){if(0!==this.settings.startX||0!==this.settings.startY){this.onMouseEnter(),this.fullPageListening?this.event={clientX:(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.clientWidth,clientY:(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.clientHeight}:this.event={clientX:this.left+(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.width,clientY:this.top+(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.height};var t=this.settings.scale;this.settings.scale=1,this.update(),this.settings.scale=t,this.resetGlare()}},t.prototype.getValues=function(){var t=void 0,e=void 0;return this.fullPageListening?(t=this.event.clientX/this.clientWidth,e=this.event.clientY/this.clientHeight):(t=(this.event.clientX-this.left)/this.width,e=(this.event.clientY-this.top)/this.height),t=Math.min(Math.max(t,0),1),e=Math.min(Math.max(e,0),1),{tiltX:(this.reverse*(this.settings.max-t*this.settings.max*2)).toFixed(2),tiltY:(this.reverse*(e*this.settings.max*2-this.settings.max)).toFixed(2),percentageX:100*t,percentageY:100*e,angle:Math.atan2(this.event.clientX-(this.left+this.width/2),-(this.event.clientY-(this.top+this.height/2)))*(180/Math.PI)}},t.prototype.updateElementPosition=function(){var t=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=t.left,this.top=t.top},t.prototype.update=function(){var t=this.getValues();this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX("+("x"===this.settings.axis?0:t.tiltY)+"deg) rotateY("+("y"===this.settings.axis?0:t.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")",this.glare&&(this.glareElement.style.transform="rotate("+t.angle+"deg) translate(-50%, -50%)",this.glareElement.style.opacity=""+t.percentageY*this.settings["max-glare"]/100),this.element.dispatchEvent(new CustomEvent("tiltChange",{detail:t})),this.updateCall=null},t.prototype.prepareGlare=function(){if(!this.glarePrerender){var t=document.createElement("div");t.classList.add("js-tilt-glare");var e=document.createElement("div");e.classList.add("js-tilt-glare-inner"),t.appendChild(e),this.element.appendChild(t)}this.glareElementWrapper=this.element.querySelector(".js-tilt-glare"),this.glareElement=this.element.querySelector(".js-tilt-glare-inner"),this.glarePrerender||(Object.assign(this.glareElementWrapper.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden","pointer-events":"none"}),Object.assign(this.glareElement.style,{position:"absolute",top:"50%",left:"50%","pointer-events":"none","background-image":"linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",transform:"rotate(180deg) translate(-50%, -50%)","transform-origin":"0% 0%",opacity:"0"}),this.updateGlareSize())},t.prototype.updateGlareSize=function(){if(this.glare){var t=2*(this.element.offsetWidth>this.element.offsetHeight?this.element.offsetWidth:this.element.offsetHeight);Object.assign(this.glareElement.style,{width:t+"px",height:t+"px"})}},t.prototype.updateClientSize=function(){this.clientWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,this.clientHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},t.prototype.onWindowResize=function(){this.updateGlareSize(),this.updateClientSize()},t.prototype.setTransition=function(){var t=this;clearTimeout(this.transitionTimeout),this.element.style.transition=this.settings.speed+"ms "+this.settings.easing,this.glare&&(this.glareElement.style.transition="opacity "+this.settings.speed+"ms "+this.settings.easing),this.transitionTimeout=setTimeout((function(){t.element.style.transition="",t.glare&&(t.glareElement.style.transition="")}),this.settings.speed)},t.prototype.extendSettings=function(t){var e={reverse:!1,max:15,startX:0,startY:0,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:1,speed:300,transition:!0,axis:null,glare:!1,"max-glare":1,"glare-prerender":!1,"full-page-listening":!1,"mouse-event-element":null,reset:!0,gyroscope:!0,gyroscopeMinAngleX:-45,gyroscopeMaxAngleX:45,gyroscopeMinAngleY:-45,gyroscopeMaxAngleY:45,gyroscopeSamples:10},i={};for(var s in e)if(s in t)i[s]=t[s];else if(this.element.hasAttribute("data-tilt-"+s)){var n=this.element.getAttribute("data-tilt-"+s);try{i[s]=JSON.parse(n)}catch(a){i[s]=n}}else i[s]=e[s];return i},t.init=function(e,i){e instanceof Node&&(e=[e]),e instanceof NodeList&&(e=[].slice.call(e)),e instanceof Array&&e.forEach((function(e){"vanillaTilt"in e||(e.vanillaTilt=new t(e,i))}))},t}();"undefined"!==typeof document&&(window.VanillaTilt=n,n.init(document.querySelectorAll("[data-tilt]"))),t.exports=n},205:function(t,e,i){"use strict";i.r(e);var s=i(13),n=i(15),a=i(19),r=i(21),o=i(1),l=i(188),h=i.n(l),g=i(183),c=function(t){Object(a.a)(i,t);var e=Object(r.a)(i);function i(){var t;Object(s.a)(this,i);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).tiltRef=o.createRef(),t}return Object(n.a)(i,[{key:"componentDidMount",value:function(){var t=this.tiltRef.current;h.a.init(t,{max:25,speed:400,glare:!0,"max-glare":.5})}},{key:"componentWillUnmount",value:function(){this.tiltRef.current.vanillaTilt.destroy()}},{key:"render",value:function(){return Object(g.jsx)("div",{ref:this.tiltRef,className:"tilt-root",children:Object(g.jsx)("div",{className:"tilt-child",children:this.props.children})})}}]),i}(o.Component);e.default=function(){return Object(g.jsx)(c,{children:Object(g.jsx)("div",{className:"totally-centered",children:"vanilla-tilt.js"})})}}}]);
//# sourceMappingURL=5.f7f02f33.chunk.js.map