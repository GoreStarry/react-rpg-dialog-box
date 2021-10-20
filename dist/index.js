"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function u(e,t,n){return e(n={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(null==t&&n.path)}},n.exports),n.exports}function l(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})})),t}var s="function"==typeof Symbol&&Symbol.for,f=s?Symbol.for("react.element"):60103,p=s?Symbol.for("react.portal"):60106,d=s?Symbol.for("react.fragment"):60107,y=s?Symbol.for("react.strict_mode"):60108,m=s?Symbol.for("react.profiler"):60114,v=s?Symbol.for("react.provider"):60109,h=s?Symbol.for("react.context"):60110,b=s?Symbol.for("react.async_mode"):60111,g=s?Symbol.for("react.concurrent_mode"):60111,O=s?Symbol.for("react.forward_ref"):60112,_=s?Symbol.for("react.suspense"):60113,w=s?Symbol.for("react.suspense_list"):60120,S=s?Symbol.for("react.memo"):60115,E=s?Symbol.for("react.lazy"):60116,x=s?Symbol.for("react.block"):60121,N=s?Symbol.for("react.fundamental"):60117,j=s?Symbol.for("react.responder"):60118,k=s?Symbol.for("react.scope"):60119;function P(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case f:switch(e=e.type){case b:case g:case d:case m:case y:case _:return e;default:switch(e=e&&e.$$typeof){case h:case O:case E:case S:case v:return e;default:return t}}case p:return t}}}function C(e){return P(e)===g}var I={AsyncMode:b,ConcurrentMode:g,ContextConsumer:h,ContextProvider:v,Element:f,ForwardRef:O,Fragment:d,Lazy:E,Memo:S,Portal:p,Profiler:m,StrictMode:y,Suspense:_,isAsyncMode:function(e){return C(e)||P(e)===b},isConcurrentMode:C,isContextConsumer:function(e){return P(e)===h},isContextProvider:function(e){return P(e)===v},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===f},isForwardRef:function(e){return P(e)===O},isFragment:function(e){return P(e)===d},isLazy:function(e){return P(e)===E},isMemo:function(e){return P(e)===S},isPortal:function(e){return P(e)===p},isProfiler:function(e){return P(e)===m},isStrictMode:function(e){return P(e)===y},isSuspense:function(e){return P(e)===_},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===d||e===g||e===m||e===y||e===_||e===w||"object"==typeof e&&null!==e&&(e.$$typeof===E||e.$$typeof===S||e.$$typeof===v||e.$$typeof===h||e.$$typeof===O||e.$$typeof===N||e.$$typeof===j||e.$$typeof===k||e.$$typeof===x)},typeOf:P},R=u((function(e,t){"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,c=e?Symbol.for("react.provider"):60109,u=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,s=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,d=e?Symbol.for("react.suspense_list"):60120,y=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,v=e?Symbol.for("react.block"):60121,h=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,g=e?Symbol.for("react.scope"):60119;function O(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var d=e.type;switch(d){case l:case s:case o:case i:case a:case p:return d;default:var v=d&&d.$$typeof;switch(v){case u:case f:case m:case y:case c:return v;default:return t}}case r:return t}}}var _=l,w=s,S=u,E=c,x=n,N=f,j=o,k=m,P=y,C=r,I=i,R=a,T=p,$=!1;function M(e){return O(e)===s}t.AsyncMode=_,t.ConcurrentMode=w,t.ContextConsumer=S,t.ContextProvider=E,t.Element=x,t.ForwardRef=N,t.Fragment=j,t.Lazy=k,t.Memo=P,t.Portal=C,t.Profiler=I,t.StrictMode=R,t.Suspense=T,t.isAsyncMode=function(e){return $||($=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),M(e)||O(e)===l},t.isConcurrentMode=M,t.isContextConsumer=function(e){return O(e)===u},t.isContextProvider=function(e){return O(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return O(e)===f},t.isFragment=function(e){return O(e)===o},t.isLazy=function(e){return O(e)===m},t.isMemo=function(e){return O(e)===y},t.isPortal=function(e){return O(e)===r},t.isProfiler=function(e){return O(e)===i},t.isStrictMode=function(e){return O(e)===a},t.isSuspense=function(e){return O(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===s||e===i||e===a||e===p||e===d||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===y||e.$$typeof===c||e.$$typeof===u||e.$$typeof===f||e.$$typeof===h||e.$$typeof===b||e.$$typeof===g||e.$$typeof===v)},t.typeOf=O}()})),T=u((function(e){"production"===process.env.NODE_ENV?e.exports=I:e.exports=R})),$=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;function F(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var A=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,r,o=F(e),a=1;a<arguments.length;a++){for(var i in n=Object(arguments[a]))M.call(n,i)&&(o[i]=n[i]);if($){r=$(n);for(var c=0;c<r.length;c++)D.call(n,r[c])&&(o[r[c]]=n[r[c]])}}return o},W="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",V=function(){};if("production"!==process.env.NODE_ENV){var G=W,B={},q=Function.call.bind(Object.prototype.hasOwnProperty);V=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function L(e,t,n,r,o){if("production"!==process.env.NODE_ENV)for(var a in e)if(q(e,a)){var i;try{if("function"!=typeof e[a]){var c=Error((r||"React class")+": "+n+" type `"+a+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[a]+"`.");throw c.name="Invariant Violation",c}i=e[a](t,a,r,n,null,G)}catch(e){i=e}if(!i||i instanceof Error||V((r||"React class")+": type specification of "+n+" `"+a+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof i+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),i instanceof Error&&!(i.message in B)){B[i.message]=!0;var u=o?o():"";V("Failed "+n+" type: "+i.message+(null!=u?u:""))}}}L.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(B={})};var z=L,U=Function.call.bind(Object.prototype.hasOwnProperty),J=function(){};function Y(){return null}"production"!==process.env.NODE_ENV&&(J=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}});var H=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator;var r="<<anonymous>>",o={array:u("array"),bool:u("boolean"),func:u("function"),number:u("number"),object:u("object"),string:u("string"),symbol:u("symbol"),any:c(Y),arrayOf:function(e){return c((function(t,n,r,o,a){if("function"!=typeof e)return new i("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var c=t[n];if(!Array.isArray(c))return new i("Invalid "+o+" `"+a+"` of type `"+s(c)+"` supplied to `"+r+"`, expected an array.");for(var u=0;u<c.length;u++){var l=e(c,u,r,o,a+"["+u+"]",W);if(l instanceof Error)return l}return null}))},element:c((function(t,n,r,o,a){var c=t[n];return e(c)?null:new i("Invalid "+o+" `"+a+"` of type `"+s(c)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:c((function(e,t,n,r,o){var a=e[t];return T.isValidElementType(a)?null:new i("Invalid "+r+" `"+o+"` of type `"+s(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return c((function(t,n,o,a,c){if(!(t[n]instanceof e)){var u=e.name||r;return new i("Invalid "+a+" `"+c+"` of type `"+(((l=t[n]).constructor&&l.constructor.name?l.constructor.name:r)+"` supplied to `")+o+"`, expected instance of `"+u+"`.")}var l;return null}))},node:c((function(e,t,n,r,o){return l(e[t])?null:new i("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return c((function(t,n,r,o,a){if("function"!=typeof e)return new i("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var c=t[n],u=s(c);if("object"!==u)return new i("Invalid "+o+" `"+a+"` of type `"+u+"` supplied to `"+r+"`, expected an object.");for(var l in c)if(U(c,l)){var f=e(c,l,r,o,a+"."+l,W);if(f instanceof Error)return f}return null}))},oneOf:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&J(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),Y;function t(t,n,r,o,c){for(var u=t[n],l=0;l<e.length;l++)if(a(u,e[l]))return null;var s=JSON.stringify(e,(function(e,t){return"symbol"===f(t)?String(t):t}));return new i("Invalid "+o+" `"+c+"` of value `"+String(u)+"` supplied to `"+r+"`, expected one of "+s+".")}return c(t)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&J("Invalid argument supplied to oneOfType, expected an instance of array."),Y;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return J("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+p(n)+" at index "+t+"."),Y}return c((function(t,n,r,o,a){for(var c=0;c<e.length;c++)if(null==(0,e[c])(t,n,r,o,a,W))return null;return new i("Invalid "+o+" `"+a+"` supplied to `"+r+"`.")}))},shape:function(e){return c((function(t,n,r,o,a){var c=t[n],u=s(c);if("object"!==u)return new i("Invalid "+o+" `"+a+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");for(var l in e){var f=e[l];if(f){var p=f(c,l,r,o,a+"."+l,W);if(p)return p}}return null}))},exact:function(e){return c((function(t,n,r,o,a){var c=t[n],u=s(c);if("object"!==u)return new i("Invalid "+o+" `"+a+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");var l=A({},t[n],e);for(var f in l){var p=e[f];if(!p)return new i("Invalid "+o+" `"+a+"` key `"+f+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var d=p(c,f,r,o,a+"."+f,W);if(d)return d}return null}))}};function a(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function i(e){this.message=e,this.stack=""}function c(e){if("production"!==process.env.NODE_ENV)var n={},o=0;function a(a,c,u,l,s,f,p){if(l=l||r,f=f||u,p!==W){if(t){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var y=l+":"+u;!n[y]&&o<3&&(J("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+l+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[y]=!0,o++)}}return null==c[u]?a?null===c[u]?new i("The "+s+" `"+f+"` is marked as required in `"+l+"`, but its value is `null`."):new i("The "+s+" `"+f+"` is marked as required in `"+l+"`, but its value is `undefined`."):null:e(c,u,l,s,f)}var c=a.bind(null,!1);return c.isRequired=a.bind(null,!0),c}function u(e){return c((function(t,n,r,o,a,c){var u=t[n];return s(u)!==e?new i("Invalid "+o+" `"+a+"` of type `"+f(u)+"` supplied to `"+r+"`, expected `"+e+"`."):null}))}function l(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(l);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!r)return!1;var o,a=r.call(t);if(r!==t.entries){for(;!(o=a.next()).done;)if(!l(o.value))return!1}else for(;!(o=a.next()).done;){var i=o.value;if(i&&!l(i[1]))return!1}return!0;default:return!1}}function s(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function f(e){if(null==e)return""+e;var t=s(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function p(e){var t=f(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return i.prototype=Error.prototype,o.checkPropTypes=z,o.resetWarningCache=z.resetWarningCache,o.PropTypes=o,o};function K(){}function Q(){}Q.resetWarningCache=K;var X=u((function(e){if("production"!==process.env.NODE_ENV){var t=T;e.exports=H(t.isElement,!0)}else e.exports=function(){function e(e,t,n,r,o,a){if(a!==W){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Q,resetWarningCache:K};return n.PropTypes=n,n}()})),Z=u((function(e){
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){var t={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)&&o.length){var i=n.apply(null,o);i&&e.push(i)}else if("object"===a)for(var c in o)t.call(o,c)&&o[c]&&e.push(c)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n}()})),ee=function(e,t){return(ee=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};var te=function(){return(te=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var ne=Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function re(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function oe(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i}function ae(e){return this instanceof ae?(this.v=e,this):new ae(e)}var ie=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};var ce=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,o,a;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;0!=o--;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(a=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;0!=o--;)if(!Object.prototype.hasOwnProperty.call(n,a[o]))return!1;for(o=r;0!=o--;){var i=a[o];if(("_owner"!==i||!t.$$typeof)&&!e(t[i],n[i]))return!1}return!0}return t!=t&&n!=n},ue=l(Object.freeze({__proto__:null,__extends:function(e,t){function n(){this.constructor=e}ee(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},get __assign(){return te},__rest:function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},__decorate:function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},__param:function(e,t){return function(n,r){t(n,r,e)}},__metadata:function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},__awaiter:function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(e){a(e)}}function c(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}u((r=r.apply(e,t||[])).next())}))},__generator:function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},__createBinding:ne,__exportStar:function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||ne(t,e,n)},__values:re,__read:oe,__spread:function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(oe(arguments[t]));return e},__spreadArrays:function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var a=arguments[t],i=0,c=a.length;i<c;i++,o++)r[o]=a[i];return r},__await:ae,__asyncGenerator:function(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),a=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){a.push([e,t,n,r])>1||c(e,t)}))})}function c(e,t){try{!function(e){e.value instanceof ae?Promise.resolve(e.value.v).then(u,l):s(a[0][2],e)}(o[e](t))}catch(e){s(a[0][3],e)}}function u(e){c("next",e)}function l(e){c("throw",e)}function s(e,t){e(t),a.shift(),a.length&&c(a[0][0],a[0][1])}},__asyncDelegator:function(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:ae(e[r](t)),done:"return"===r}:o?o(t):t}:o}},__asyncValues:function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=re(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,o,(t=e[n](t)).done,t.value)}))}}},__makeTemplateObject:function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},__importStar:function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&ne(t,e,n);return ie(t,e),t},__importDefault:function(e){return e&&e.__esModule?e:{default:e}},__classPrivateFieldGet:function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)},__classPrivateFieldSet:function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n}})),le=u((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.isDeepEqual=t.off=t.on=t.isClient=void 0;var n=ue.__importDefault(ce);t.isClient="object"==typeof window,t.on=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return e.addEventListener.apply(e,t)},t.off=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return e.removeEventListener.apply(e,t)},t.isDeepEqual=n.default})),se=u((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=le.isClient?window:null,o=function(e){return!!e.addEventListener},a=function(e){return!!e.on};t.default=function(e,t,i,c){void 0===i&&(i=r),n.default.useEffect((function(){if(t&&i)return o(i)?i.addEventListener(e,t,c):a(i)&&i.on(e,t,c),function(){o(i)?i.removeEventListener(e,t,c):a(i)&&i.off(e,t,c)}}),[e,t,i,JSON.stringify(c)])}})),fe=c(u((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=ue.__importDefault(se),o=function(){};t.default=function(e,t,a,i){void 0===t&&(t=o),void 0===a&&(a={}),void 0===i&&(i=[e]);var c=a.event,u=void 0===c?"keydown":c,l=a.target,s=a.options,f=n.default.useMemo((function(){var n,r="function"==typeof(n=e)?n:"string"==typeof n?function(e){return e.key===n}:n?function(){return!0}:function(){return!1};return function(e){if(r(e))return t(e)}}),i);r.default(u,f,l,s)}})));function pe(e){return 2===e.length}function de(e){return!!Array.isArray(e)&&(3===e.length&&!(!Array.isArray(e[0])||!Array.isArray(e[1])))}function ye(e,t){return[[],e.split(""),t]}function me(e,t){return[[],e,t]}function ve(e){const[t,n]=e;return!(t.length>0)&&n.reduce(((t,n)=>de(n)&&de(e)&&t?ve(n):t),!0)}function he([e,t]){return 0===t.length}function be(e){const t=Ee(e);return he(t)?t:be(t)}function ge(e){if(ve(e))return e;const[t,n,r]=e,o=e=>de(e)?ge(e):e;return[[],[...t.map(o),...n.map(o)],r]}function Oe([e,t]){const n=t.reduce(((e,t)=>de(t)&&!ve(t)?_e(t):e),void 0);if(n)return n;return e[e.length-1]}function _e(e){const t=Oe(e);return de(t)?_e(t):t}function we([e,t]){const n=e.map((e=>{if(de(e)){const[t,n,r]=e;return[we(e),r]}return e})),[r]=t;if(de(r)&&!ve(r)){const[e,t,o]=r;return[...n,[we(r),o]]}return n}function Se([e,t]){const[n]=t;return de(n)?Se(n):n}function Ee(e){if(he(e))return e;const[t,n,r]=e,[o,...a]=n;if(de(o)){const e=Ee(o);return he(e)?[[...t,e],a,r]:[t,[e,...a],r]}return[[...t,o],a,r]}function xe(e,t){switch(e){case"—":case"…":return 200;case".":case",":return 150;case"?":case"!":if("!"!==t&&"?"!==t)return 150;case"-":case" ":case"\n":return 0;default:return 20}}const Ne=({children:e})=>n.default.createElement(n.default.Fragment,null,e);function je(e,t){if(he(e))return;const[,n,r]=e,[o]=n;return o&&de(o)?je(o,r.pace||t):r.pace||t}const ke=({children:e})=>n.default.createElement(n.default.Fragment,null,e);function Pe(e){return e.type===ke}function Ce(e){const[t,n,r]=e,o=Oe(e),[a]=n;let i=[];return o&&de(o)&&i.push(...Ce(o)),a&&de(a)&&!ve(a)&&i.push(...Ce(a)),r.onChar&&i.push(r.onChar),i}function Ie(e){return{windup:e,didFinishOnce:!1}}function Re(e,t){switch(t.type){case"replace":return Ie(t.windup);case"next":return{...e,windup:Ee(e.windup)};case"rewind":return{windup:ge(e.windup),didFinishOnce:!1};case"fast-forward":return{...e,windup:be(e.windup)};case"finish":return{...e,didFinishOnce:!0};default:return e}}function Te(t,n){const[{windup:r,didFinishOnce:o},a]=e.useReducer(Re,t,Ie),i=e.useRef(null),c=he(r),u=e.useCallback((()=>{c||(i.current&&clearTimeout(i.current),a({type:"fast-forward"}))}),[c]),l=e.useCallback((()=>{i.current&&clearTimeout(i.current),a({type:"rewind"})}),[]);return e.useEffect((()=>{a({type:"replace",windup:t})}),[t]),e.useEffect((()=>{i.current&&clearTimeout(i.current),n.skipped&&a({type:"fast-forward"}),!1===n.skipped&&a({type:"rewind"})}),[n.skipped]),e.useEffect((()=>{const e=Ce(r),t=_e(r);e.length>0&&t&&e.forEach((e=>{e(t)}))}),[r]),e.useEffect((()=>{if(!1===o&&c){const e=setTimeout((()=>{n.onFinished&&n.onFinished(),a({type:"finish"})}),0);return()=>{clearTimeout(e)}}}),[o,c,n]),e.useEffect((()=>{if(!c){const e=je(r)||xe,t=_e(r),n=Se(r);return i.current=setTimeout((()=>{a({type:"next"})}),t?e(t,n):0),()=>{i.current&&clearTimeout(i.current)}}}),[r,c]),{windup:r,skip:u,rewind:l,isFinished:c}}const $e=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"];function Me(e){const t=pe(e)?e[1]:e[2],r=pe(e)?e[0]:we(e),o=t.element||n.default.Fragment;if(t.props&&Object.keys(t.props).includes("children"))return n.default.createElement(o,Object.assign({},t.props));const a=r.reduce(((e,t)=>{if("string"==typeof t){const n=e.slice(0,e.length-1),r=e[e.length-1];return r&&"string"==typeof r?[...n,r+t]:[...e,t]}return[...e,Me(t)]}),[]);return"string"==typeof t.element&&$e.includes(t.element)?n.default.createElement(o,Object.assign({key:t.key},t.props)):n.default.createElement(o,Object.assign({key:t.key},t.props),a)}const De=({})=>null;const Fe=n.default.createContext({skip:()=>{console.warn("Tried to use the useSkip hook outside of a WindupChildren component!!")},rewind:()=>{console.warn("Tried to use the useRewind hook outside of a WindupChildren component!")},isFinished:!1});function Ae(e,t){if("string"==typeof t)return[...e,...t.split("")];if("number"==typeof t)return[...e,...t.toString().split("")];if(!n.default.isValidElement(t))return e;const{children:r,...o}=t.props,a=t.type===Ne?{pace:e=>"ms"in t.props?t.props.ms:t.props.getPace(e)}:{};const i=Pe(t)?{onChar:t.props.fn}:{},c=t.key?{key:t.key}:{};if(function(e){return e.type===De}(t))return[...e,ye(" ",{element:n.default.Fragment,...c,props:{},pace:()=>t.props.ms})];if(void 0===r)return[...e,ye(" ",{element:t.type,props:o,...c,...a,...i})];if("string"==typeof r)return[...e,ye(r,{element:t.type,props:o,...c,...a,...i})];if(r instanceof Function)return[...e,ye(" ",{element:t.type,props:{children:r,...o},...c,...a,...i})];const u=n.default.Children.toArray(r).reduce(Ae,[]).map((e=>{if(de(e)){const[t,n,r]=e;return[t,n,{...a,...i,...r}]}return e}));return[...e,me(u,{element:t.type,props:o,...c,...a,...i})]}function We(e){return null==e?"":n.default.Children.map(e,(e=>"string"==typeof e?e:"number"==typeof e?e.toString():n.default.isValidElement(e)?`#${e.key||""}<${We(e.props.children)}>`:"")).join(",")}const Ve=({children:t,onFinished:r,skipped:o})=>{const a=function(t,n){return e.useMemo(t,[We(n)])}((()=>me(n.default.Children.toArray(t).reduce(Ae,[]),{element:void 0})),t),{windup:i,skip:c,rewind:u,isFinished:l}=Te(a,{onFinished:r,skipped:o});return n.default.createElement(Fe.Provider,{value:{skip:c,rewind:u,isFinished:l}},Me(i))};function Ge(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var Be={};Ge("");var qe=function(t){var r=t.className,o=t.children,i=t.options,c=t.handleClickOption,u=t.dialogPaceMS,l=void 0===u?40:u,s=t.dialogPauseMS,f=a(e.useState(!1),2),p=f[0],d=f[1],y=e.useCallback((function(){d(!0)}),[]);return n.default.createElement("div",{className:Z(Be.ChoiceContainer,r)},n.default.createElement("div",{className:"DialogBoxRPG__Windup"},n.default.createElement(Ve,{onFinished:y},s&&n.default.createElement(De,{ms:s}),n.default.createElement(Ne,{ms:l},o))),n.default.createElement("ul",{className:"DialogBoxRPG__ul_choice"},p&&i.map((function(e,t){var r=e.value,o=e.content,a=e.onClick;return n.default.createElement("li",{className:"DialogBoxRPG__li_choice",key:o,"data-value":r,onClick:a||c},o)}))))};qe.propTypes={};var Le=function(t){var r=t.children,o=t.nextIconDelayMillisecond,i=void 0===o?500:o,c=t.dialogPauseMS,u=t.dialogPaceMS,l=void 0===u?40:u,s=t.classNameNextIcon,f=t.isWindupSkipped,p=t.handleIsWindupFinished,d=a(e.useState(!1),2),y=d[0],m=d[1],v=e.useCallback((function(){p(),setTimeout((function(){m(!0)}),i)}),[i]);return e.useEffect((function(){return m(!1),function(){}}),[r]),n.default.createElement("div",null,n.default.createElement(Ve,{skipped:f,onFinished:v},c&&n.default.createElement(De,{ms:c}),n.default.createElement(Ne,{ms:l},r)),y&&n.default.createElement("div",{className:s||".NextIcon"}))};Le.propTypes={};var ze=function(e){var t=e.className,a=e.children,i=e.role_name,c=e.role_img,u=e.RoleDialogContainer,l=e.ComponentRoleName,s=e.ComponentRoleImg,f=e.classNameRoleName,p=e.classNameRoleImg,d=e.classNameNextIcon,y=e.isWindupSkipped,m=e.handleIsWindupFinished,v=o(e,["className","children","role_name","role_img","RoleDialogContainer","ComponentRoleName","ComponentRoleImg","classNameRoleName","classNameRoleImg","classNameNextIcon","isWindupSkipped","handleIsWindupFinished"]);return n.default.createElement("div",{className:t},c&&(s?n.default.createElement(s,{img_url:c}):n.default.createElement("img",{className:p,src:c,alt:i})),n.default.createElement("div",{className:"RoleDialogContainer__box_name_dialog"},i&&(l?n.default.createElement(l,null,i):n.default.createElement("div",{className:f},i)),n.default.createElement(Le,r({classNameNextIcon:d,RoleDialogContainer:u,isWindupSkipped:y,handleIsWindupFinished:m},v),a)))};ze.propTypes={};var Ue=n.default.memo((function(t){var r=t.children,o=t.className,i=t.classNameNextIcon,c=t.nextIconDelayMillisecond,u=void 0===c?500:c,l=t.dialogPauseMS,s=t.dialogPaceMS,f=void 0===s?40:s,p=t.isWindupSkipped,d=t.handleIsWindupFinished,y=a(e.useState(!1),2),m=y[0],v=y[1],h=e.useCallback((function(){d(),setTimeout((function(){v(!0)}),u)}),[u]);return e.useEffect((function(){return v(!1),function(){}}),[r]),n.default.createElement("div",{className:o},n.default.createElement(Ve,{skipped:p,onFinished:h},l&&n.default.createElement(De,{ms:l}),n.default.createElement(Ne,{ms:f},r)),m&&n.default.createElement("div",{className:i}))}));Ue.propTypes={};var Je="DialogBoxRPG-module_box__click_out__2HDGa";Ge(".DialogBoxRPG-module_DialogBoxRPG__2rbFC {\n  color: red; }\n\n.DialogBoxRPG-module_classNameRoleDialogContainer__35U67 {\n  background-color: blue; }\n\n.DialogBoxRPG-module_box__click_out__2HDGa {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0; }\n");var Ye=n.default.memo((function(t){var r=t.children,o=t.mode,i=t.className,c=t.disableGoNext,u=t.classNameRoleDialogContainer,l=t.classNameRoleName,s=t.role_name,f=t.role_img,p=t.classNameChoiceContainer,d=t.options,y=t.handleClickOptionAndReturnIndex,m=t.classNameNarratorContainer,v=t.disableSpaceKey,h=t.handleGoNext,b=t.nextIconDelayMillisecond,g=void 0===b?500:b,O=t.classNameNextIcon,_=t.dialogPauseMS,w=t.dialogPaceMS,S=t.isUseClickOut,E=t.classNameClickOut,x=t.handleIsComplete,N=e.useRef(!1),j=a(e.useState(!1),2),k=j[0],P=j[1];e.useEffect((function(){return N.current=!1,P(!1),function(){}}),[r]);var C=e.useCallback((function(){N.current=!0,x&&x(),P(!0)}),[]),I=e.useCallback((function(){!v&&R()}),[v,h]);fe(" ",I,{event:"keyup"});var R=e.useCallback((function(){!1===N.current?C():!c&&h()}),[c,h,C]);switch(o){case"choice":return n.default.createElement("div",{className:Z(i)},n.default.createElement(qe,{className:p,options:d,handleIsWindupFinished:C,handleClickOption:y,dialogPauseMS:_,dialogPaceMS:w,isWindupSkipped:k},r));case"narrator":return n.default.createElement(n.default.Fragment,null,S&&n.default.createElement("div",{className:Z(Je,E),onClick:R}),n.default.createElement("div",{className:Z(i),onClick:R},n.default.createElement(Ue,{className:m,classNameNextIcon:O,nextIconDelayMillisecond:g,dialogPauseMS:_,dialogPaceMS:w,isWindupSkipped:k,handleIsWindupFinished:C},r)));default:return n.default.createElement(n.default.Fragment,null,S&&n.default.createElement("div",{className:Z(Je,E),onClick:R}),n.default.createElement("div",{className:Z(i),onClick:R},n.default.createElement(ze,{role_name:s,role_img:f,className:u,classNameRoleName:l,nextIconDelayMillisecond:g,dialogPauseMS:_,dialogPaceMS:w,classNameNextIcon:O,isWindupSkipped:k,handleIsWindupFinished:C},r)))}}));Ye.propTypes={mode:X.oneOf(["role","narrator","choice"]),options:X.arrayOf(X.shape({value:X.any,content:X.string,onClick:X.func})),nextIconDelayMillisecond:X.number,handleGoNext:X.func,role_name:X.string,dialogPaceMS:X.number,dialogPauseMS:X.number,handleClickOptionAndReturnIndex:X.func,className:X.string,classNameRoleName:X.string,classNameRoleDialogContainer:X.string,classNameChoiceContainer:X.string,classNameNarratorContainer:X.string,classNameNextIcon:X.string,classNameClickOut:X.string,isUseClickOut:X.bool,handleIsComplete:X.func},exports.DialogBoxRPG=Ye,exports.DialogContainer=Le;
//# sourceMappingURL=index.js.map
