import e,{useReducer as n,useRef as t,useCallback as r,useEffect as o,useMemo as i,useState as a}from"react";function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function s(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return t}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return l(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return l(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function f(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function p(e,n,t){return e(t={path:n,exports:{},require:function(e,n){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(null==n&&t.path)}},t.exports),t.exports}function d(e){if(e.__esModule)return e;var n=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})})),n}var y="function"==typeof Symbol&&Symbol.for,m=y?Symbol.for("react.element"):60103,v=y?Symbol.for("react.portal"):60106,h=y?Symbol.for("react.fragment"):60107,b=y?Symbol.for("react.strict_mode"):60108,g=y?Symbol.for("react.profiler"):60114,w=y?Symbol.for("react.provider"):60109,O=y?Symbol.for("react.context"):60110,_=y?Symbol.for("react.async_mode"):60111,S=y?Symbol.for("react.concurrent_mode"):60111,E=y?Symbol.for("react.forward_ref"):60112,j=y?Symbol.for("react.suspense"):60113,N=y?Symbol.for("react.suspense_list"):60120,x=y?Symbol.for("react.memo"):60115,P=y?Symbol.for("react.lazy"):60116,k=y?Symbol.for("react.block"):60121,C=y?Symbol.for("react.fundamental"):60117,I=y?Symbol.for("react.responder"):60118,T=y?Symbol.for("react.scope"):60119;function $(e){if("object"==typeof e&&null!==e){var n=e.$$typeof;switch(n){case m:switch(e=e.type){case _:case S:case h:case g:case b:case j:return e;default:switch(e=e&&e.$$typeof){case O:case E:case P:case x:case w:return e;default:return n}}case v:return n}}}function R(e){return $(e)===S}var M={AsyncMode:_,ConcurrentMode:S,ContextConsumer:O,ContextProvider:w,Element:m,ForwardRef:E,Fragment:h,Lazy:P,Memo:x,Portal:v,Profiler:g,StrictMode:b,Suspense:j,isAsyncMode:function(e){return R(e)||$(e)===_},isConcurrentMode:R,isContextConsumer:function(e){return $(e)===O},isContextProvider:function(e){return $(e)===w},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===m},isForwardRef:function(e){return $(e)===E},isFragment:function(e){return $(e)===h},isLazy:function(e){return $(e)===P},isMemo:function(e){return $(e)===x},isPortal:function(e){return $(e)===v},isProfiler:function(e){return $(e)===g},isStrictMode:function(e){return $(e)===b},isSuspense:function(e){return $(e)===j},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===h||e===S||e===g||e===b||e===j||e===N||"object"==typeof e&&null!==e&&(e.$$typeof===P||e.$$typeof===x||e.$$typeof===w||e.$$typeof===O||e.$$typeof===E||e.$$typeof===C||e.$$typeof===I||e.$$typeof===T||e.$$typeof===k)},typeOf:$},A=p((function(e,n){"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,c=e?Symbol.for("react.provider"):60109,u=e?Symbol.for("react.context"):60110,s=e?Symbol.for("react.async_mode"):60111,l=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,d=e?Symbol.for("react.suspense_list"):60120,y=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,v=e?Symbol.for("react.block"):60121,h=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,g=e?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var n=e.$$typeof;switch(n){case t:var d=e.type;switch(d){case s:case l:case o:case a:case i:case p:return d;default:var v=d&&d.$$typeof;switch(v){case u:case f:case m:case y:case c:return v;default:return n}}case r:return n}}}var O=s,_=l,S=u,E=c,j=t,N=f,x=o,P=m,k=y,C=r,I=a,T=i,$=p,R=!1;function M(e){return w(e)===l}n.AsyncMode=O,n.ConcurrentMode=_,n.ContextConsumer=S,n.ContextProvider=E,n.Element=j,n.ForwardRef=N,n.Fragment=x,n.Lazy=P,n.Memo=k,n.Portal=C,n.Profiler=I,n.StrictMode=T,n.Suspense=$,n.isAsyncMode=function(e){return R||(R=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),M(e)||w(e)===s},n.isConcurrentMode=M,n.isContextConsumer=function(e){return w(e)===u},n.isContextProvider=function(e){return w(e)===c},n.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},n.isForwardRef=function(e){return w(e)===f},n.isFragment=function(e){return w(e)===o},n.isLazy=function(e){return w(e)===m},n.isMemo=function(e){return w(e)===y},n.isPortal=function(e){return w(e)===r},n.isProfiler=function(e){return w(e)===a},n.isStrictMode=function(e){return w(e)===i},n.isSuspense=function(e){return w(e)===p},n.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===l||e===a||e===i||e===p||e===d||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===y||e.$$typeof===c||e.$$typeof===u||e.$$typeof===f||e.$$typeof===h||e.$$typeof===b||e.$$typeof===g||e.$$typeof===v)},n.typeOf=w}()})),F=p((function(e){"production"===process.env.NODE_ENV?e.exports=M:e.exports=A})),D=Object.getOwnPropertySymbols,W=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;function q(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var L=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,n){for(var t,r,o=q(e),i=1;i<arguments.length;i++){for(var a in t=Object(arguments[i]))W.call(t,a)&&(o[a]=t[a]);if(D){r=D(t);for(var c=0;c<r.length;c++)V.call(t,r[c])&&(o[r[c]]=t[r[c]])}}return o},z="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",G=function(){};if("production"!==process.env.NODE_ENV){var B=z,U={},J=Function.call.bind(Object.prototype.hasOwnProperty);G=function(e){var n="Warning: "+e;"undefined"!=typeof console&&console.error(n);try{throw new Error(n)}catch(e){}}}function Y(e,n,t,r,o){if("production"!==process.env.NODE_ENV)for(var i in e)if(J(e,i)){var a;try{if("function"!=typeof e[i]){var c=Error((r||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.");throw c.name="Invariant Violation",c}a=e[i](n,i,r,t,null,B)}catch(e){a=e}if(!a||a instanceof Error||G((r||"React class")+": type specification of "+t+" `"+i+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof a+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),a instanceof Error&&!(a.message in U)){U[a.message]=!0;var u=o?o():"";G("Failed "+t+" type: "+a.message+(null!=u?u:""))}}}Y.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(U={})};var H=Y,K=Function.call.bind(Object.prototype.hasOwnProperty),Q=function(){};function X(){return null}"production"!==process.env.NODE_ENV&&(Q=function(e){var n="Warning: "+e;"undefined"!=typeof console&&console.error(n);try{throw new Error(n)}catch(e){}});var Z=function(e,n){var t="function"==typeof Symbol&&Symbol.iterator;var r="<<anonymous>>",o={array:u("array"),bool:u("boolean"),func:u("function"),number:u("number"),object:u("object"),string:u("string"),symbol:u("symbol"),any:c(X),arrayOf:function(e){return c((function(n,t,r,o,i){if("function"!=typeof e)return new a("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var c=n[t];if(!Array.isArray(c))return new a("Invalid "+o+" `"+i+"` of type `"+l(c)+"` supplied to `"+r+"`, expected an array.");for(var u=0;u<c.length;u++){var s=e(c,u,r,o,i+"["+u+"]",z);if(s instanceof Error)return s}return null}))},element:c((function(n,t,r,o,i){var c=n[t];return e(c)?null:new a("Invalid "+o+" `"+i+"` of type `"+l(c)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:c((function(e,n,t,r,o){var i=e[n];return F.isValidElementType(i)?null:new a("Invalid "+r+" `"+o+"` of type `"+l(i)+"` supplied to `"+t+"`, expected a single ReactElement type.")})),instanceOf:function(e){return c((function(n,t,o,i,c){if(!(n[t]instanceof e)){var u=e.name||r;return new a("Invalid "+i+" `"+c+"` of type `"+(((s=n[t]).constructor&&s.constructor.name?s.constructor.name:r)+"` supplied to `")+o+"`, expected instance of `"+u+"`.")}var s;return null}))},node:c((function(e,n,t,r,o){return s(e[n])?null:new a("Invalid "+r+" `"+o+"` supplied to `"+t+"`, expected a ReactNode.")})),objectOf:function(e){return c((function(n,t,r,o,i){if("function"!=typeof e)return new a("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var c=n[t],u=l(c);if("object"!==u)return new a("Invalid "+o+" `"+i+"` of type `"+u+"` supplied to `"+r+"`, expected an object.");for(var s in c)if(K(c,s)){var f=e(c,s,r,o,i+"."+s,z);if(f instanceof Error)return f}return null}))},oneOf:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&Q(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),X;function n(n,t,r,o,c){for(var u=n[t],s=0;s<e.length;s++)if(i(u,e[s]))return null;var l=JSON.stringify(e,(function(e,n){return"symbol"===f(n)?String(n):n}));return new a("Invalid "+o+" `"+c+"` of value `"+String(u)+"` supplied to `"+r+"`, expected one of "+l+".")}return c(n)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&Q("Invalid argument supplied to oneOfType, expected an instance of array."),X;for(var n=0;n<e.length;n++){var t=e[n];if("function"!=typeof t)return Q("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+p(t)+" at index "+n+"."),X}return c((function(n,t,r,o,i){for(var c=0;c<e.length;c++)if(null==(0,e[c])(n,t,r,o,i,z))return null;return new a("Invalid "+o+" `"+i+"` supplied to `"+r+"`.")}))},shape:function(e){return c((function(n,t,r,o,i){var c=n[t],u=l(c);if("object"!==u)return new a("Invalid "+o+" `"+i+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");for(var s in e){var f=e[s];if(f){var p=f(c,s,r,o,i+"."+s,z);if(p)return p}}return null}))},exact:function(e){return c((function(n,t,r,o,i){var c=n[t],u=l(c);if("object"!==u)return new a("Invalid "+o+" `"+i+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");var s=L({},n[t],e);for(var f in s){var p=e[f];if(!p)return new a("Invalid "+o+" `"+i+"` key `"+f+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(n[t],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var d=p(c,f,r,o,i+"."+f,z);if(d)return d}return null}))}};function i(e,n){return e===n?0!==e||1/e==1/n:e!=e&&n!=n}function a(e){this.message=e,this.stack=""}function c(e){if("production"!==process.env.NODE_ENV)var t={},o=0;function i(i,c,u,s,l,f,p){if(s=s||r,f=f||u,p!==z){if(n){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var y=s+":"+u;!t[y]&&o<3&&(Q("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+s+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[y]=!0,o++)}}return null==c[u]?i?null===c[u]?new a("The "+l+" `"+f+"` is marked as required in `"+s+"`, but its value is `null`."):new a("The "+l+" `"+f+"` is marked as required in `"+s+"`, but its value is `undefined`."):null:e(c,u,s,l,f)}var c=i.bind(null,!1);return c.isRequired=i.bind(null,!0),c}function u(e){return c((function(n,t,r,o,i,c){var u=n[t];return l(u)!==e?new a("Invalid "+o+" `"+i+"` of type `"+f(u)+"` supplied to `"+r+"`, expected `"+e+"`."):null}))}function s(n){switch(typeof n){case"number":case"string":case"undefined":return!0;case"boolean":return!n;case"object":if(Array.isArray(n))return n.every(s);if(null===n||e(n))return!0;var r=function(e){var n=e&&(t&&e[t]||e["@@iterator"]);if("function"==typeof n)return n}(n);if(!r)return!1;var o,i=r.call(n);if(r!==n.entries){for(;!(o=i.next()).done;)if(!s(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!s(a[1]))return!1}return!0;default:return!1}}function l(e){var n=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,n){return"symbol"===e||!!n&&("Symbol"===n["@@toStringTag"]||"function"==typeof Symbol&&n instanceof Symbol)}(n,e)?"symbol":n}function f(e){if(null==e)return""+e;var n=l(e);if("object"===n){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return n}function p(e){var n=f(e);switch(n){case"array":case"object":return"an "+n;case"boolean":case"date":case"regexp":return"a "+n;default:return n}}return a.prototype=Error.prototype,o.checkPropTypes=H,o.resetWarningCache=H.resetWarningCache,o.PropTypes=o,o};function ee(){}function ne(){}ne.resetWarningCache=ee;var te=p((function(e){if("production"!==process.env.NODE_ENV){var n=F;e.exports=Z(n.isElement,!0)}else e.exports=function(){function e(e,n,t,r,o,i){if(i!==z){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function n(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:ne,resetWarningCache:ee};return t.PropTypes=t,t}()})),re=p((function(e){
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){var n={}.hasOwnProperty;function t(){for(var e=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var i=typeof o;if("string"===i||"number"===i)e.push(o);else if(Array.isArray(o)&&o.length){var a=t.apply(null,o);a&&e.push(a)}else if("object"===i)for(var c in o)n.call(o,c)&&o[c]&&e.push(c)}}return e.join(" ")}e.exports?(t.default=t,e.exports=t):window.classNames=t}()})),oe=function(e,n){return(oe=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])})(e,n)};var ie=function(){return(ie=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)};var ae=Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]};function ce(e){var n="function"==typeof Symbol&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function ue(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,i=t.call(e),a=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return a}function se(e){return this instanceof se?(this.v=e,this):new se(e)}var le=Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n};var fe=function e(n,t){if(n===t)return!0;if(n&&t&&"object"==typeof n&&"object"==typeof t){if(n.constructor!==t.constructor)return!1;var r,o,i;if(Array.isArray(n)){if((r=n.length)!=t.length)return!1;for(o=r;0!=o--;)if(!e(n[o],t[o]))return!1;return!0}if(n.constructor===RegExp)return n.source===t.source&&n.flags===t.flags;if(n.valueOf!==Object.prototype.valueOf)return n.valueOf()===t.valueOf();if(n.toString!==Object.prototype.toString)return n.toString()===t.toString();if((r=(i=Object.keys(n)).length)!==Object.keys(t).length)return!1;for(o=r;0!=o--;)if(!Object.prototype.hasOwnProperty.call(t,i[o]))return!1;for(o=r;0!=o--;){var a=i[o];if(("_owner"!==a||!n.$$typeof)&&!e(n[a],t[a]))return!1}return!0}return n!=n&&t!=t},pe=d(Object.freeze({__proto__:null,__extends:function(e,n){function t(){this.constructor=e}oe(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)},get __assign(){return ie},__rest:function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t},__decorate:function(e,n,t,r){var o,i=arguments.length,a=i<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,t,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(n,t,a):o(n,t))||a);return i>3&&a&&Object.defineProperty(n,t,a),a},__param:function(e,n){return function(t,r){n(t,r,e)}},__metadata:function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},__awaiter:function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function c(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}u((r=r.apply(e,n||[])).next())}))},__generator:function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},__createBinding:ae,__exportStar:function(e,n){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(n,t)||ae(n,e,t)},__values:ce,__read:ue,__spread:function(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(ue(arguments[n]));return e},__spreadArrays:function(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;var r=Array(e),o=0;for(n=0;n<t;n++)for(var i=arguments[n],a=0,c=i.length;a<c;a++,o++)r[o]=i[a];return r},__await:se,__asyncGenerator:function(e,n,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=t.apply(e,n||[]),i=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(e){o[e]&&(r[e]=function(n){return new Promise((function(t,r){i.push([e,n,t,r])>1||c(e,n)}))})}function c(e,n){try{!function(e){e.value instanceof se?Promise.resolve(e.value.v).then(u,s):l(i[0][2],e)}(o[e](n))}catch(e){l(i[0][3],e)}}function u(e){c("next",e)}function s(e){c("throw",e)}function l(e,n){e(n),i.shift(),i.length&&c(i[0][0],i[0][1])}},__asyncDelegator:function(e){var n,t;return n={},r("next"),r("throw",(function(e){throw e})),r("return"),n[Symbol.iterator]=function(){return this},n;function r(r,o){n[r]=e[r]?function(n){return(t=!t)?{value:se(e[r](n)),done:"return"===r}:o?o(n):n}:o}},__asyncValues:function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,t=e[Symbol.asyncIterator];return t?t.call(e):(e=ce(e),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(t){n[t]=e[t]&&function(n){return new Promise((function(r,o){(function(e,n,t,r){Promise.resolve(r).then((function(n){e({value:n,done:t})}),n)})(r,o,(n=e[t](n)).done,n.value)}))}}},__makeTemplateObject:function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},__importStar:function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&ae(n,e,t);return le(n,e),n},__importDefault:function(e){return e&&e.__esModule?e:{default:e}},__classPrivateFieldGet:function(e,n){if(!n.has(e))throw new TypeError("attempted to get private field on non-instance");return n.get(e)},__classPrivateFieldSet:function(e,n,t){if(!n.has(e))throw new TypeError("attempted to set private field on non-instance");return n.set(e,t),t}})),de=p((function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.isDeepEqual=n.off=n.on=n.isClient=void 0;var t=pe.__importDefault(fe);n.isClient="object"==typeof window,n.on=function(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];return e.addEventListener.apply(e,n)},n.off=function(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];return e.removeEventListener.apply(e,n)},n.isDeepEqual=t.default})),ye=p((function(n,t){Object.defineProperty(t,"__esModule",{value:!0});var r=de.isClient?window:null,o=function(e){return!!e.addEventListener},i=function(e){return!!e.on};t.default=function(n,t,a,c){void 0===a&&(a=r),e.useEffect((function(){if(t&&a)return o(a)?a.addEventListener(n,t,c):i(a)&&a.on(n,t,c),function(){o(a)?a.removeEventListener(n,t,c):i(a)&&a.off(n,t,c)}}),[n,t,a,JSON.stringify(c)])}})),me=f(p((function(n,t){Object.defineProperty(t,"__esModule",{value:!0});var r=pe.__importDefault(ye),o=function(){};t.default=function(n,t,i,a){void 0===t&&(t=o),void 0===i&&(i={}),void 0===a&&(a=[n]);var c=i.event,u=void 0===c?"keydown":c,s=i.target,l=i.options,f=e.useMemo((function(){var e,r="function"==typeof(e=n)?e:"string"==typeof e?function(n){return n.key===e}:e?function(){return!0}:function(){return!1};return function(e){if(r(e))return t(e)}}),a);r.default(u,f,s,l)}})));function ve(e){return 2===e.length}function he(e){return!!Array.isArray(e)&&(3===e.length&&!(!Array.isArray(e[0])||!Array.isArray(e[1])))}function be(e,n){return[[],e.split(""),n]}function ge(e,n){return[[],e,n]}function we(e){const[n,t]=e;return!(n.length>0)&&t.reduce(((n,t)=>he(t)&&he(e)&&n?we(t):n),!0)}function Oe([e,n]){return 0===n.length}function _e(e){const n=Pe(e);return Oe(n)?n:_e(n)}function Se(e){if(we(e))return e;const[n,t,r]=e,o=e=>he(e)?Se(e):e;return[[],[...n.map(o),...t.map(o)],r]}function Ee([e,n]){const t=n.reduce(((e,n)=>he(n)&&!we(n)?je(n):e),void 0);if(t)return t;return e[e.length-1]}function je(e){const n=Ee(e);return he(n)?je(n):n}function Ne([e,n]){const t=e.map((e=>{if(he(e)){const[n,t,r]=e;return[Ne(e),r]}return e})),[r]=n;if(he(r)&&!we(r)){const[e,n,o]=r;return[...t,[Ne(r),o]]}return t}function xe([e,n]){const[t]=n;return he(t)?xe(t):t}function Pe(e){if(Oe(e))return e;const[n,t,r]=e,[o,...i]=t;if(he(o)){const e=Pe(o);return Oe(e)?[[...n,e],i,r]:[n,[e,...i],r]}return[[...n,o],i,r]}function ke(e,n){switch(e){case"—":case"…":return 200;case".":case",":return 150;case"?":case"!":if("!"!==n&&"?"!==n)return 150;case"-":case" ":case"\n":return 0;default:return 20}}const Ce=({children:n})=>e.createElement(e.Fragment,null,n);function Ie(e,n){if(Oe(e))return;const[,t,r]=e,[o]=t;return o&&he(o)?Ie(o,r.pace||n):r.pace||n}const Te=({children:n})=>e.createElement(e.Fragment,null,n);function $e(e){return e.type===Te}function Re(e){const[n,t,r]=e,o=Ee(e),[i]=t;let a=[];return o&&he(o)&&a.push(...Re(o)),i&&he(i)&&!we(i)&&a.push(...Re(i)),r.onChar&&a.push(r.onChar),a}function Me(e){return{windup:e,didFinishOnce:!1}}function Ae(e,n){switch(n.type){case"replace":return Me(n.windup);case"next":return{...e,windup:Pe(e.windup)};case"rewind":return{windup:Se(e.windup),didFinishOnce:!1};case"fast-forward":return{...e,windup:_e(e.windup)};case"finish":return{...e,didFinishOnce:!0};default:return e}}function Fe(e,i){const[{windup:a,didFinishOnce:c},u]=n(Ae,e,Me),s=t(null),l=Oe(a),f=r((()=>{l||(s.current&&clearTimeout(s.current),u({type:"fast-forward"}))}),[l]),p=r((()=>{s.current&&clearTimeout(s.current),u({type:"rewind"})}),[]);return o((()=>{u({type:"replace",windup:e})}),[e]),o((()=>{s.current&&clearTimeout(s.current),i.skipped&&u({type:"fast-forward"}),!1===i.skipped&&u({type:"rewind"})}),[i.skipped]),o((()=>{const e=Re(a),n=je(a);e.length>0&&n&&e.forEach((e=>{e(n)}))}),[a]),o((()=>{if(!1===c&&l){const e=setTimeout((()=>{i.onFinished&&i.onFinished(),u({type:"finish"})}),0);return()=>{clearTimeout(e)}}}),[c,l,i]),o((()=>{if(!l){const e=Ie(a)||ke,n=je(a),t=xe(a);return s.current=setTimeout((()=>{u({type:"next"})}),n?e(n,t):0),()=>{s.current&&clearTimeout(s.current)}}}),[a,l]),{windup:a,skip:f,rewind:p,isFinished:l}}const De=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"];function We(n){const t=ve(n)?n[1]:n[2],r=ve(n)?n[0]:Ne(n),o=t.element||e.Fragment;if(t.props&&Object.keys(t.props).includes("children"))return e.createElement(o,Object.assign({},t.props));const i=r.reduce(((e,n)=>{if("string"==typeof n){const t=e.slice(0,e.length-1),r=e[e.length-1];return r&&"string"==typeof r?[...t,r+n]:[...e,n]}return[...e,We(n)]}),[]);return"string"==typeof t.element&&De.includes(t.element)?e.createElement(o,Object.assign({key:t.key},t.props)):e.createElement(o,Object.assign({key:t.key},t.props),i)}const Ve=({})=>null;const qe=e.createContext({skip:()=>{console.warn("Tried to use the useSkip hook outside of a WindupChildren component!!")},rewind:()=>{console.warn("Tried to use the useRewind hook outside of a WindupChildren component!")},isFinished:!1});function Le(n,t){if("string"==typeof t)return[...n,...t.split("")];if("number"==typeof t)return[...n,...t.toString().split("")];if(!e.isValidElement(t))return n;const{children:r,...o}=t.props,i=t.type===Ce?{pace:e=>"ms"in t.props?t.props.ms:t.props.getPace(e)}:{};const a=$e(t)?{onChar:t.props.fn}:{},c=t.key?{key:t.key}:{};if(function(e){return e.type===Ve}(t))return[...n,be(" ",{element:e.Fragment,...c,props:{},pace:()=>t.props.ms})];if(void 0===r)return[...n,be(" ",{element:t.type,props:o,...c,...i,...a})];if("string"==typeof r)return[...n,be(r,{element:t.type,props:o,...c,...i,...a})];if(r instanceof Function)return[...n,be(" ",{element:t.type,props:{children:r,...o},...c,...i,...a})];const u=e.Children.toArray(r).reduce(Le,[]).map((e=>{if(he(e)){const[n,t,r]=e;return[n,t,{...i,...a,...r}]}return e}));return[...n,ge(u,{element:t.type,props:o,...c,...i,...a})]}function ze(n){return null==n?"":e.Children.map(n,(n=>"string"==typeof n?n:"number"==typeof n?n.toString():e.isValidElement(n)?`#${n.key||""}<${ze(n.props.children)}>`:"")).join(",")}const Ge=({children:n,onFinished:t,skipped:r})=>{const o=function(e,n){return i(e,[ze(n)])}((()=>ge(e.Children.toArray(n).reduce(Le,[]),{element:void 0})),n),{windup:a,skip:c,rewind:u,isFinished:s}=Fe(o,{onFinished:t,skipped:r});return e.createElement(qe.Provider,{value:{skip:c,rewind:u,isFinished:s}},We(a))};var Be={};!function(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===t&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}("");var Ue=function(n){var t=n.className,o=n.children,i=n.options,c=n.handleClickOption,u=n.dialogPaceMS,l=void 0===u?40:u,f=n.dialogPauseMS,p=s(a(!1),2),d=p[0],y=p[1],m=r((function(){y(!0)}),[]);return e.createElement("div",{className:re(Be.ChoiceContainer,t)},e.createElement("div",{className:"DialogBoxRPG__Windup"},e.createElement(Ge,{onFinished:m},f&&e.createElement(Ve,{ms:f}),e.createElement(Ce,{ms:l},o))),e.createElement("ul",{className:"DialogBoxRPG__ul_choice"},d&&i.map((function(n,t){var r=n.value,o=n.content,i=n.onClick;return e.createElement("li",{className:"DialogBoxRPG__li_choice",key:o,"data-value":r,onClick:i||c},o)}))))};Ue.propTypes={};var Je=function(n){var t=n.children,i=n.nextIconDelayMillisecond,c=void 0===i?500:i,u=n.dialogPauseMS,l=n.dialogPaceMS,f=void 0===l?40:l,p=n.classNameNextIcon,d=n.isWindupSkipped,y=n.handleIsWindupFinished,m=s(a(!1),2),v=m[0],h=m[1],b=r((function(){y(),setTimeout((function(){h(!0)}),c)}),[c]);return o((function(){return h(!1),function(){}}),[t]),e.createElement("div",null,e.createElement(Ge,{skipped:d,onFinished:b},u&&e.createElement(Ve,{ms:u}),e.createElement(Ce,{ms:f},t)),v&&e.createElement("div",{className:p||".NextIcon"}))};Je.propTypes={};var Ye=function(n){var t=n.className,r=n.children,o=n.role_name,i=n.role_img,a=n.RoleDialogContainer,s=n.ComponentRoleName,l=n.ComponentRoleImg,f=n.classNameRoleName,p=n.classNameRoleImg,d=n.classNameNextIcon,y=n.isWindupSkipped,m=n.handleIsWindupFinished,v=u(n,["className","children","role_name","role_img","RoleDialogContainer","ComponentRoleName","ComponentRoleImg","classNameRoleName","classNameRoleImg","classNameNextIcon","isWindupSkipped","handleIsWindupFinished"]);return e.createElement("div",{className:t},i&&(l?e.createElement(l,{img_url:i}):e.createElement("img",{className:p,src:i,alt:o})),e.createElement("div",{className:"RoleDialogContainer__box_name_dialog"},o&&(s?e.createElement(s,null,o):e.createElement("div",{className:f},o)),e.createElement(Je,c({classNameNextIcon:d,RoleDialogContainer:a,isWindupSkipped:y,handleIsWindupFinished:m},v),r)))};Ye.propTypes={};var He=e.memo((function(n){var t=n.children,i=n.className,c=n.classNameNextIcon,u=n.nextIconDelayMillisecond,l=void 0===u?500:u,f=n.dialogPauseMS,p=n.dialogPaceMS,d=void 0===p?40:p,y=n.isWindupSkipped,m=n.handleIsWindupFinished,v=s(a(!1),2),h=v[0],b=v[1],g=r((function(){m(),setTimeout((function(){b(!0)}),l)}),[l]);return o((function(){return b(!1),function(){}}),[t]),e.createElement("div",{className:i},e.createElement(Ge,{skipped:y,onFinished:g},f&&e.createElement(Ve,{ms:f}),e.createElement(Ce,{ms:d},t)),h&&e.createElement("div",{className:c}))}));He.propTypes={};var Ke=e.memo((function(n){var i=n.children,c=n.mode,u=n.className,l=n.disableGoNext,f=n.classNameRoleDialogContainer,p=n.classNameRoleName,d=n.role_name,y=n.role_img,m=n.classNameChoiceContainer,v=n.options,h=n.handleClickOptionAndReturnIndex,b=n.classNameNarratorContainer,g=n.disableSpaceKey,w=n.handleGoNext,O=n.nextIconDelayMillisecond,_=void 0===O?500:O,S=n.classNameNextIcon,E=n.dialogPauseMS,j=n.dialogPaceMS,N=t(!1),x=s(a(!1),2),P=x[0],k=x[1];o((function(){return N.current=!1,k(!1),function(){}}),[i]);var C=r((function(){N.current=!0,k(!0)}),[]),I=r((function(){!g&&T()}),[g,w]);me(" ",I,{event:"keyup"});var T=r((function(){!1===N.current?C():!l&&w()}),[l,w,C]);switch(c){case"choice":return e.createElement("div",{className:re(u)},e.createElement(Ue,{className:m,options:v,handleIsWindupFinished:C,handleClickOption:h,dialogPauseMS:E,dialogPaceMS:j,isWindupSkipped:P},i));case"narrator":return e.createElement("div",{className:re(u),onClick:T},e.createElement(He,{className:b,classNameNextIcon:S,nextIconDelayMillisecond:_,dialogPauseMS:E,dialogPaceMS:j,isWindupSkipped:P,handleIsWindupFinished:C},i));default:return e.createElement("div",{className:re(u),onClick:T},e.createElement(Ye,{role_name:d,role_img:y,className:f,classNameRoleName:p,nextIconDelayMillisecond:_,dialogPauseMS:E,dialogPaceMS:j,classNameNextIcon:S,isWindupSkipped:P,handleIsWindupFinished:C},i))}}));Ke.propTypes={mode:te.oneOf(["role","narrator","choice"]),options:te.arrayOf(te.shape({value:te.any,content:te.string,onClick:te.func})),nextIconDelayMillisecond:te.number,handleGoNext:te.func,role_name:te.string,dialogPaceMS:te.number,dialogPauseMS:te.number,handleClickOptionAndReturnIndex:te.func,className:te.string,classNameRoleName:te.string,classNameRoleDialogContainer:te.string,classNameChoiceContainer:te.string,classNameNarratorContainer:te.string,classNameNextIcon:te.string};export{Ke as DialogBoxRPG,Je as DialogContainer};
//# sourceMappingURL=index.es.js.map
