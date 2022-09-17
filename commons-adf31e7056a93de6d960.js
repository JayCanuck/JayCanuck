(self.webpackChunk_jaycanuck_me=self.webpackChunk_jaycanuck_me||[]).push([[351],{9788:function(e,n,t){"use strict";t.d(n,{ZP:function(){return O}});var r=t(7294),o=t(3366);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}var a=t(7326),u=t(4578),c=t(8812),s=t(5706),l=t.n(s);function f(e,n){if(!e){var t=new Error("loadable: "+n);throw t.framesToPop=1,t.name="Invariant Violation",t}}var d=r.createContext();var p={initialChunks:{}},m="PENDING",h="REJECTED";var v=function(e){return e};function y(e){var n=e.defaultResolveComponent,t=void 0===n?v:n,s=e.render,y=e.onLoad;function g(e,n){void 0===n&&(n={});var v=function(e){return"function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),g={};function b(e){return n.cacheKey?n.cacheKey(e):v.resolve?v.resolve(e):"static"}function w(e,r,o){var i=n.resolveComponent?n.resolveComponent(e,r):t(e);if(n.resolveComponent&&!(0,c.isValidElementType)(i))throw new Error("resolveComponent returned something that is not a React component!");return l()(o,i,{preload:!0}),i}var x,k,j=function(e){var n=b(e),t=g[n];return t&&t.status!==h||((t=v.requireAsync(e)).status=m,g[n]=t,t.then((function(){t.status="RESOLVED"}),(function(n){console.error("loadable-components: failed to asynchronously load component",{fileName:v.resolve(e),chunkName:v.chunkName(e),error:n?n.message:n}),t.status=h}))),t},E=function(e){function t(t){var r;return(r=e.call(this,t)||this).state={result:null,error:null,loading:!0,cacheKey:b(t)},f(!t.__chunkExtractor||v.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),t.__chunkExtractor?(!1===n.ssr||(v.requireAsync(t).catch((function(){return null})),r.loadSync(),t.__chunkExtractor.addChunk(v.chunkName(t))),(0,a.Z)(r)):(!1!==n.ssr&&(v.isReady&&v.isReady(t)||v.chunkName&&p.initialChunks[v.chunkName(t)])&&r.loadSync(),r)}(0,u.Z)(t,e),t.getDerivedStateFromProps=function(e,n){var t=b(e);return i({},n,{cacheKey:t,loading:n.loading||n.cacheKey!==t})};var r=t.prototype;return r.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&e.status===h&&this.setCache(),this.state.loading&&this.loadAsync()},r.componentDidUpdate=function(e,n){n.cacheKey!==this.state.cacheKey&&this.loadAsync()},r.componentWillUnmount=function(){this.mounted=!1},r.safeSetState=function(e,n){this.mounted&&this.setState(e,n)},r.getCacheKey=function(){return b(this.props)},r.getCache=function(){return g[this.getCacheKey()]},r.setCache=function(e){void 0===e&&(e=void 0),g[this.getCacheKey()]=e},r.triggerOnLoad=function(){var e=this;y&&setTimeout((function(){y(e.state.result,e.props)}))},r.loadSync=function(){if(this.state.loading)try{var e=w(v.requireSync(this.props),this.props,S);this.state.result=e,this.state.loading=!1}catch(n){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:v.resolve(this.props),chunkName:v.chunkName(this.props),error:n?n.message:n}),this.state.error=n}},r.loadAsync=function(){var e=this,n=this.resolveAsync();return n.then((function(n){var t=w(n,e.props,S);e.safeSetState({result:t,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(n){return e.safeSetState({error:n,loading:!1})})),n},r.resolveAsync=function(){var e=this.props,n=(e.__chunkExtractor,e.forwardedRef,(0,o.Z)(e,["__chunkExtractor","forwardedRef"]));return j(n)},r.render=function(){var e=this.props,t=e.forwardedRef,r=e.fallback,a=(e.__chunkExtractor,(0,o.Z)(e,["forwardedRef","fallback","__chunkExtractor"])),u=this.state,c=u.error,l=u.loading,f=u.result;if(n.suspense&&(this.getCache()||this.loadAsync()).status===m)throw this.loadAsync();if(c)throw c;var d=r||n.fallback||null;return l?d:s({fallback:d,result:f,options:n,props:i({},a,{ref:t})})},t}(r.Component),O=(k=function(e){return r.createElement(d.Consumer,null,(function(n){return r.createElement(x,Object.assign({__chunkExtractor:n},e))}))},(x=E).displayName&&(k.displayName=x.displayName+"WithChunkExtractor"),k),S=r.forwardRef((function(e,n){return r.createElement(O,Object.assign({forwardedRef:n},e))}));return S.displayName="Loadable",S.preload=function(e){S.load(e)},S.load=function(e){return j(e)},S}return{loadable:g,lazy:function(e,n){return g(e,i({},n,{suspense:!0}))}}}var g=y({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var n=e.result,t=e.props;return r.createElement(n,t)}}),b=g.loadable,w=g.lazy,x=y({onLoad:function(e,n){e&&n.forwardedRef&&("function"==typeof n.forwardedRef?n.forwardedRef(e):n.forwardedRef.current=e)},render:function(e){var n=e.result,t=e.props;return t.children?t.children(n):null}}),k=x.loadable,j=x.lazy;var E=b;E.lib=k,w.lib=j;var O=E},801:function(e,n,t){!function(e,n,r,o){"use strict";n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n;var i="default"in r?r.default:r,a="default"in o?o.default:o;function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,n){var t,r=Object.keys(e);return Object.getOwnPropertySymbols&&(t=Object.getOwnPropertySymbols(e),n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)),r}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){var r,o,i;r=e,i=t[o=n],o in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,n){return(d=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function p(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function m(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var e,r=f(n);return p(this,t?(e=f(this).constructor,Reflect.construct(r,arguments,e)):r.apply(this,arguments))}}function h(e,n){return n=n||e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function v(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return t}}(e,n)||function(e,n){if(e){if("string"==typeof e)return y(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?y(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function g(){var e=h(["\n    @media "," {\n      ","\n    }\n  "]);return g=function(){return e},e}var b="awesomegrid",w=["xs","sm","md","lg","xl"],x={mediaQuery:"only screen",columns:{xs:4,sm:8,md:8,lg:12,xl:12},gutterWidth:{xs:1,sm:1,md:1.5,lg:1.5,xl:1.5},paddingWidth:{xs:1,sm:1,md:1.5,lg:1.5,xl:1.5},container:{xs:"full",sm:"full",md:"full",lg:90,xl:90},breakpoints:{xs:1,sm:48,md:64,lg:90,xl:120}},k=[],j=function(e){return JSON.stringify(e.theme&&e.theme[b]||{})},E=function(e){var n=e.theme&&e.theme[b]||{},t=l(l({},x),n);return t.media=Object.keys(t.breakpoints).reduce((function(e,n){var o,i=t.breakpoints[n];return e[n]=(o=[t.mediaQuery,0<=i&&"(min-width: ".concat(i,"rem)")].filter(Boolean).join(" and "),function(){return r.css(g(),o,r.css.apply(void 0,arguments))}),e}),{}),t};function O(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},n=j(e);if(k[0]===n)return k[1];var t=E(e);return k[0]=n,k[1]=t}function S(){var e=h(["\n      background-color: #5901ad40;\n      outline: #fff solid 1px;\n    "]);return S=function(){return e},e}function C(){var e=h(["\n      ","\n    "]);return C=function(){return e},e}function _(){var e=h(["\n      ","\n    "]);return _=function(){return e},e}function N(){var e=h(["\n      padding-left: ","rem;\n      padding-right: ","rem;\n    "]);return N=function(){return e},e}function P(){var e=h(["\n    ","\n  "]);return P=function(){return e},e}function R(){var e=h(["\n  margin-right: auto;\n  margin-left: auto;\n  max-width: 100%;\n  box-sizing: border-box;\n\n  ","\n  \n\n  ","\n\n  ","\n"]);return R=function(){return e},e}var T=i.div(R(),(function(e){return r.css(P(),w.map((function(n){return O(e).container[n]&&O(e).media[n](N(),O(e).paddingWidth[n],O(e).paddingWidth[n])})))}),(function(e){return!e.fluid&&r.css(_(),w.map((function(n){return O(e).container[n]&&O(e).media[n](C(),"number"==typeof O(e).container[n]?"max-width: ".concat(O(e).container[n],"rem;"):"width: 100%;")})))}),(function(e){return e.debug&&r.css(S())}));function A(){var e=h(["\n      background-color: #5901ad40;\n      outline: #fff solid 1px;\n    "]);return A=function(){return e},e}function z(){var e=h(["",""]);return z=function(){return e},e}function D(){var e=h(["\n      ","\n    "]);return D=function(){return e},e}function I(){var e=h(["",""]);return I=function(){return e},e}function L(){var e=h(["\n      ","\n    "]);return L=function(){return e},e}function W(){var e=h(["\n         ",";\n        \n      "]);return W=function(){return e},e}function U(){var e=h(["\n      ","\n    "]);return U=function(){return e},e}function Z(){var e=h(["\n      margin-left: -","rem;\n      margin-right: -","rem;\n    "]);return Z=function(){return e},e}function J(){var e=h(["\n    ","\n  "]);return J=function(){return e},e}function K(){var e=h(["\n  box-sizing: border-box;\n  display: flex;\n  flex: 1 1 auto;\n  flex-wrap: wrap;\n  \n  ","\n\n  ","\n\n  ","\n  \n  ","\n\n  ","\n"]);return K=function(){return e},e}T.displayName="Container",T.propTypes={fluid:n.bool,children:n.node,debug:n.bool};var V=i.div(K(),(function(e){return r.css(J(),w.map((function(n){return O(e).container[n]&&O(e).media[n](Z(),O(e).gutterWidth[n]/2,O(e).gutterWidth[n]/2)})))}),(function(e){return e.reverse&&r.css(U(),Array.isArray(e.reverse)?w.map((function(n){return O(e).breakpoints[n]&&O(e).media[n](W(),-1!==e.reverse.indexOf(n)?"\n             flex-direction: row-reverse;\n             flex-wrap: wrap-reverse;\n             ":"\n                 flex-direction: row;\n                 flex-wrap: wrap;\n               ")})):"\n            flex-direction: row-reverse;\n            flex-wrap: wrap-reverse;\n          ")}),(function(e){return e.align&&r.css(L(),"object"===u(e.align)?w.map((function(n){return O(e).breakpoints[n]&&O(e).media[n](I(),e.align[n]&&"align-items: ".concat(e.align[n]))})):"align-items: ".concat(e.align,";"))}),(function(e){return e.justify&&r.css(D(),"object"===u(e.justify)?w.map((function(n){return O(e).breakpoints[n]&&O(e).media[n](z(),e.justify[n]&&"justify-content: ".concat(e.justify[n]))})):"justify-content: ".concat(e.justify,";"))}),(function(e){return e.debug&&r.css(A())}));V.displayName="Row";var q=n.oneOfType([n.bool,n.array]),F=n.oneOfType([n.string,n.object]);function H(){var e=h(["\n    background-color: #5901ad40;\n    outline: #fff solid 1px;\n  "]);return H=function(){return e},e}function G(){var e=h(["",""]);return G=function(){return e},e}function M(){var e=h(["\n    ","\n  "]);return M=function(){return e},e}function B(){var e=h(["",""]);return B=function(){return e},e}function Q(){var e=h(["\n    ","\n  "]);return Q=function(){return e},e}function $(){var e=h(["\n        flex-direction: ",";\n      "]);return $=function(){return e},e}function X(){var e=h(["\n    ","\n  "]);return X=function(){return e},e}function Y(){var e=h(["\n    ",";\n    "]);return Y=function(){return e},e}function ee(){var e=h(["\n    ","\n  "]);return ee=function(){return e},e}function ne(){var e=h(["\n    ",";\n    "]);return ne=function(){return e},e}function te(){var e=h(["\n    ","\n  "]);return te=function(){return e},e}function re(){var e=h(["\n      flex: 1 1 ","%;\n      max-width: ","%;\n    "]);return re=function(){return e},e}function oe(){var e=h(["\n    ","\n  "]);return oe=function(){return e},e}function ie(){var e=h(["\n      padding-right: ","rem;\n      padding-left: ","rem;\n    "]);return ie=function(){return e},e}function ae(){var e=h(["\n    ","\n  "]);return ae=function(){return e},e}function ue(){var e=h(["\n  box-sizing: border-box;\n  flex: 1 0 auto;\n  max-width: 100%;\n  display: flex;\n  flex-direction: column;\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n  \n  ","\n  \n  ","\n"]);return ue=function(){return e},e}V.propTypes={reverse:q,align:F,justify:F,children:n.node,debug:n.bool};var ce=i.div(ue(),(function(e){return!e.noGutter&&r.css(ae(),w.map((function(n){return O(e).breakpoints[n]&&O(e).media[n](ie(),O(e).gutterWidth[n]/2,O(e).gutterWidth[n]/2)})))}),(function(e){return r.css(oe(),w.map((function(n){return e[n]&&O(e).breakpoints[n]&&O(e).media[n](re(),e[n]/O(e).columns[n]*100,e[n]/O(e).columns[n]*100)})))}),(function(e){return e.offset&&r.css(te(),w.map((function(n){return O(e).breakpoints[n]&&O(e).media[n](ne(),"object"===u(e.offset)?void 0!==e.offset[n]&&"margin-left: ".concat(0<e.offset[n]?e.offset[n]/O(e).columns[n]*100:0,"%"):"margin-left: ".concat(e.offset/O(e).columns.xs*100,"%"))})))}),(function(e){return void 0!==e.order&&r.css(ee(),w.map((function(n){return O(e).breakpoints[n]&&O(e).media[n](Y(),"object"===u(e.order)?void 0!==e.order[n]&&"order: ".concat(e.order[n]):"order: ".concat(e.order))})))}),(function(e){return e.reverse&&r.css(X(),Array.isArray(e.reverse)?w.map((function(n){return O(e).breakpoints[n]&&O(e).media[n]($(),-1!==e.reverse.indexOf(n)?"column-reverse":"column")})):"flex-direction: column-reverse;")}),(function(e){return e.align&&r.css(Q(),"object"===u(e.align)?w.map((function(n){return O(e).breakpoints[n]&&O(e).media[n](B(),e.align[n]&&"align-items: ".concat(e.align[n]))})):"align-items: ".concat(e.align,";"))}),(function(e){return e.justify&&r.css(M(),"object"===u(e.justify)?w.map((function(n){return O(e).breakpoints[n]&&O(e).media[n](G(),e.justify[n]&&"justify-content: ".concat(e.justify[n]))})):"justify-content: ".concat(e.justify,";"))}),(function(e){return e.debug&&r.css(H())}));ce.displayName="Col";var se=n.oneOfType([n.string,n.number]),le=n.oneOfType([n.string,n.object]),fe=n.oneOfType([n.number,n.object]),de=n.oneOfType([n.bool,n.array]);function pe(e,n,r){void 0===r&&(r=t.g);var i=o.useRef();o.useEffect((function(){i.current=n}),[n]),o.useEffect((function(){if(r&&r.addEventListener){var n=function(e){return i.current(e)};return r.addEventListener(e,n),function(){r.removeEventListener(e,n)}}}),[e,r])}function me(){return"undefined"!=typeof window&&window.innerWidth?window.innerWidth:null}function he(){var e,n=w,t=O(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).breakpoints,r="undefined"!=typeof window&&window.getComputedStyle(document.querySelector("html")).getPropertyValue("font-size").replace("px","")||16,o=Object.values(t).map((function(e){return e*r})),i=me();return i&&(e=n[0],o[1]&&i>=o[1]&&(e=n[1]),o[2]&&i>=o[2]&&(e=n[2]),o[3]&&i>=o[3]&&(e=n[3]),o[4]&&i>=o[4]&&(e=n[4])),e}function ve(e){function n(){var e=he({theme:s});d!==e&&p(e)}var t=e.xs,r=e.sm,i=e.md,u=e.lg,c=e.xl,s=e.theme,l=e.children,f=v(o.useState("xs"),2),d=f[0],p=f[1];return o.useEffect((function(){n()}),[]),pe("orientationchange",n),pe("resize",n),!function(){switch(d){case"xs":return t;case"sm":return r;case"md":return i;case"lg":return u;case"xl":return c}}()&&a.createElement(a.Fragment,null,l)}ce.propTypes={xs:se,sm:se,md:se,lg:se,xl:se,align:le,justify:le,order:fe,offSet:fe,reverse:de,noGutter:n.bool,children:n.node,debug:n.bool};var ye={xs:!(ve.displayName="Hidden"),sm:!1,md:!1,lg:!1,xl:!1,children:null,theme:{}},ge={xs:n.bool,sm:n.bool,md:n.bool,lg:n.bool,xl:n.bool,theme:n.object,children:n.node};function be(e){function n(){var e=he({theme:s});d!==e&&p(e)}var t=e.xs,r=e.sm,i=e.md,u=e.lg,c=e.xl,s=e.theme,l=e.children,f=v(o.useState("xs"),2),d=f[0],p=f[1];return o.useEffect((function(){n()}),[]),pe("orientationchange",n),pe("resize",n),!!function(){switch(d){case"xs":return t;case"sm":return r;case"md":return i;case"lg":return u;case"xl":return c}}()&&a.createElement(a.Fragment,null,l)}ve.defaultProps=ye,ve.propTypes=ge;var we=r.withTheme(ve);be.displayName="Visible",be.defaultProps=ye,be.propTypes=ge;var xe=r.withTheme(be),ke=function(){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&d(e,n)}(i,o.Component);var e,n,t,r=m(i);function i(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,i),(e=r.call(this)).setScreen=function(){var n=e.state.screen,t=he(e.props);n&&n===t||(n=t,e.setState({screen:t}))},e.state={screen:"xs"},e}return e=i,(n=[{key:"componentDidMount",value:function(){this.setScreen(),"undefined"!=typeof window&&(window.addEventListener("orientationchange",this.setScreen,!1),window.addEventListener("resize",this.setScreen,!1))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("orientationchange",this.setScreen),window.removeEventListener("resize",this.setScreen)}},{key:"render",value:function(){var e=this.props.render;return a.createElement(a.Fragment,null,e&&e(this.state.screen))}}])&&c(e.prototype,n),t&&c(e,t),i}();ke.defaultProps={theme:{}},ke.displayName="ScreenClass",ke.propTypes={render:n.func};var je=r.withTheme(ke);function Ee(){var e=h(["\n      ::before {\n        content: '","'\n      }\n    "]);return Ee=function(){return e},e}function Oe(){var e=h(["\n    ","\n  "]);return Oe=function(){return e},e}function Se(){var e=h(["\n    z-index: 10;\n    position: fixed;\n    font-size: 1.5rem;\n    font-weight: bold;\n    right: 10px;\n    bottom: 10px;\n    width: 50px;\n    height: 30px;\n    background-color: #5901ad40;\n    display: flex;\n    border-radius: 5px;\n    justify-content: center;\n    align-items: center;\n  ","\n"]);return Se=function(){return e},e}var Ce=i.div(Se(),(function(e){return r.css(Oe(),w.map((function(n){return O(e).breakpoints[n]&&O(e).media[n](Ee(),n)})))}));Ce.displayName="ScreenBadge";var _e={getScreenClass:he,getViewPort:me};e.Col=ce,e.Container=T,e.Hidden=we,e.Row=V,e.ScreenBadge=Ce,e.ScreenClass=je,e.Visible=xe,e.config=O,e.util=_e,Object.defineProperty(e,"__esModule",{value:!0})}(n,t(5697),t(3494),t(7294))},3710:function(e){var n,t,r,o,i={name:"Jason Robitaille",email:"jrobitaille.dev@gmail.com"},a={network:"GitHub",username:"jaycanuck",url:"https://github.com/jaycanuck"},u={network:"Twitter",username:"JayCanuck",url:"https://twitter.com/JayCanuck"},c={network:"LinkedIn",username:"jaycanuck",url:"https://www.linkedin.com/in/jaycanuck/"};e.exports={siteTitle:"Hi! I'm "+(null==i||null===(n=i.name)||void 0===n||null===(t=n.split(/\s+/))||void 0===t?void 0:t[0])+"!",siteDescription:"Software engineer specializing in web-based systems.",siteUrl:"https://jrobitaille.dev",keywords:["recume","cv","portfolio","software engineer","react","webapp","html","css","js","typescript"],authorName:null==i?void 0:i.name,twitterUsername:null==u||null===(r=u.username)||void 0===r?void 0:r.toLowerCase(),githubUsername:null==a||null===(o=a.username)||void 0===o?void 0:o.toLowerCase(),authorAvatar:"/images/avatar.jpg",authorDescription:"[Coming soon]",skills:[{name:"Multi-platform Webapps",level:90},{name:"React",level:80},{name:"Typescript",level:70},{name:"NodeJs",level:80},{name:"NestJs",level:60},{name:"Git",level:80}],jobs:[{company:"LG Silicon Valley Lab",begin:{month:"Jun",year:"2015"},duration:null,occupation:"Software Engineer",description:""},{company:"LG Silicon Valley Labs",begin:{month:"May",year:"2013"},duration:"1 year, 11 months",occupation:"Framework Engineer Intern",description:"Creation and management of webOS specific javascript and Enyo-enhanced APIs to interact with native platform components.\nFormation of a webOS port for Cordova cross-platform webapp tool/library\nIncorporation of emerging technologies into Enyo webapp framework usage (grunt, yeoman, bower, etc.)"},{company:"Canuck Coding",begin:{month:"Dec",year:"2009"},duration:"5 years, 3 months",occupation:"Software Developer",description:"Developed many high profile webOS homebrew projects.\nWon several community-voted awards.\nEngineered and marketed multiple well-received webOS apps."},{company:"HP webOS GBU",begin:{month:"May",year:"2012"},duration:"3 months",occupation:"Framework Engineer Intern",description:"Hands-on learning of practical business skills within an organized international setting.\nDesigned, implemented, and debugged interactive UI component controls for cross-platform Enyo deployment.\nParticipated in multiple developer conventions, evangelizing Enyo and cross-platform webapp development."},{company:"SmartPhone Experts",begin:{month:"Feb",year:"2009"},duration:"3 years, 3 months",occupation:"Writer and Technical Consultant",description:"http://precentral.net\nhttp://webosnation.com"}],contributions:[{image:"/images/enyojs.jpg",description:"EnyoJS webapp framework",url:"https://github.com/enyojs"},{image:"/images/enactjs.jpg",description:"EnactJS React framework",url:"https://enactjs.com"},{image:"/images/svlsimulator.jpg",description:"SVLSimulator AI platform",url:"https://www.svlsimulator.com"}],social:{twitter:null==u?void 0:u.url,linkedin:null==c?void 0:c.url,github:null==a?void 0:a.url,email:null==i?void 0:i.email},pathPrefix:"/gatsby-starter-cv",siteCover:"/images/cover",googleAnalyticsId:void 0,background_color:"#ffffff",theme_color:"#25303B",fontColor:"#000000cc",enableDarkmode:!0,display:"minimal-ui",icon:"src/assets/gatsby-icon.png",headerLinks:[{label:"Home",url:"/"},{label:"Projects I've Worked On",url:"/contributions"},{label:"Resume",url:"/resume.pdf"}]}},1133:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(7294),o=t(3710),i=t.n(o);var a=function(e){var n=e.title;return r.createElement(r.Fragment,null,r.createElement("title",null,n),r.createElement("meta",{name:"description",content:i().siteDescription}),i().keywords&&i().keywords.length>0&&r.createElement("meta",{name:"keywords",content:i().keywords.join(", ")}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:url",content:i().siteUrl}),r.createElement("meta",{property:"og:title",content:n}),r.createElement("meta",{property:"og:description",content:i().siteDescription}),r.createElement("meta",{property:"og:image",content:i().siteUrl+i().authorAvatar}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:url",content:i().siteUrl}),r.createElement("meta",{name:"twitter:creator",content:i().authorName}),r.createElement("meta",{name:"twitter:title",content:n}),r.createElement("meta",{name:"twitter:description",content:i().siteDescription}),r.createElement("meta",{name:"twitter:image",content:i().siteUrl+i().authorAvatar}))}},287:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var r=t(7294),o=t(1597),i=t(3710),a=t.n(i),u=t(3494),c=u.default.div.withConfig({displayName:"hero__HeroContainer",componentId:"sc-ej2phz-0"})(["position:relative;display:table;width:100%;overflow:hidden;"]),s=u.default.div.withConfig({displayName:"hero__TitleContainer",componentId:"sc-ej2phz-1"})(["display:table-cell;vertical-align:middle;text-align:center;width:100%;"]),l=u.default.h1.withConfig({displayName:"hero__HeroTitle",componentId:"sc-ej2phz-2"})(["font-weight:700;font-size:3rem;margin:10px 60px;color:#fff;text-shadow:1px 1px 4px rgba(34,34,34,0.6);"]),f=(0,u.default)((function(e){var n=e.className,t=e.title;return r.createElement(c,{className:n},r.createElement(s,null,r.createElement(l,null,t)))})).withConfig({displayName:"hero",componentId:"sc-ej2phz-3"})([""," height:70vh;background-attachment:fixed;background-position:top center;background-repeat:no-repeat;background-size:cover;"],(function(e){return"background-image: url("+(e.heroImg||(0,o.dq)(a().siteCover))+".jpg);\n    background-image: url("+(e.heroImg||(0,o.dq)(a().siteCover))+".webp);"}))},3673:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r,o=t(1880),i=t(3494),a=t(801),u=t(3710),c=t.n(u),s=i.default.main.attrs({role:"main"}).withConfig({displayName:"wrapper__Wrapper",componentId:"sc-14gm9z-0"})(["position:relative;border-radius:3px;width:90%;padding:25px;max-width:960px;word-wrap:break-word;background-color:",";margin:0px auto 30px auto;top:-100px;box-shadow:"," min-height:150px;",""],(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.background===c().background_color?"0 0 0 0, 0 6px 12px rgba(0, 0, 0, 0.2);":"0 0 0 0, 0 6px 12px rgba(0, 0, 0, 0.5);"}),(function(e){return(0,a.config)(e).media.sm(r||(r=(0,o.Z)(["\n    width: 80%;\n    padding: 50px;\n  "])))}))},7326:function(e,n,t){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(n,{Z:function(){return r}})},3366:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}t.d(n,{Z:function(){return r}})},1880:function(e,n,t){"use strict";function r(e,n){return n||(n=e.slice(0)),e.raw=n,e}t.d(n,{Z:function(){return r}})}}]);
//# sourceMappingURL=commons-adf31e7056a93de6d960.js.map