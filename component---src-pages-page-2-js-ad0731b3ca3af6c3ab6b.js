(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(e,t,n){"use strict";n.r(t);var r=n(145),o=n.n(r);n(151);t.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Hi from the second page"))}},145:function(e,t,n){"use strict";e.exports=n(147)},146:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,c,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var f in n=Object(arguments[a]))o.call(n,f)&&(i[f]=n[f]);if(r){c=r(n);for(var l=0;l<c.length;l++)u.call(n,c[l])&&(i[c[l]]=n[c[l]])}}return i}},147:function(e,t,n){"use strict";var r=n(146),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,f=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.concurrent_mode"):60111,y=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,m=o?Symbol.for("react.memo"):60115,v=o?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function b(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(e,t,n,r,o,u,c,i){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var a=[n,r,o,u,c,i],f=0;(e=Error(t.replace(/%s/g,function(){return a[f++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S={};function _(e,t,n){this.props=e,this.context=t,this.refs=S,this.updater=n||g}function j(){}function w(e,t,n){this.props=e,this.context=t,this.refs=S,this.updater=n||g}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&b("85"),this.updater.enqueueSetState(this,e,t,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=_.prototype;var k=w.prototype=new j;k.constructor=w,r(k,_.prototype),k.isPureReactComponent=!0;var O={current:null},x={current:null},$=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var r=void 0,o={},c=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)$.call(t,r)&&!C.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){for(var f=Array(a),l=0;l<a;l++)f[l]=arguments[l+2];o.children=f}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===o[r]&&(o[r]=a[r]);return{$$typeof:u,type:e,key:c,ref:i,props:o,_owner:x.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var R=/\/+/g,q=[];function A(e,t,n,r){if(q.length){var o=q.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function I(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>q.length&&q.push(e)}function F(e,t,n){return null==e?0:function e(t,n,r,o){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var a=!1;if(null===t)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case u:case c:a=!0}}if(a)return r(o,t,""===n?"."+M(t,0):n),1;if(a=0,n=""===n?".":n+":",Array.isArray(t))for(var f=0;f<t.length;f++){var l=n+M(i=t[f],f);a+=e(i,l,r,o)}else if(l=null===t||"object"!=typeof t?null:"function"==typeof(l=h&&t[h]||t["@@iterator"])?l:null,"function"==typeof l)for(t=l.call(t),f=0;!(i=t.next()).done;)a+=e(i=i.value,l=n+M(i,f++),r,o);else"object"===i&&b("31","[object Object]"==(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return a}(e,"",t,n)}function M(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function U(e,t){e.func.call(e.context,t,e.count++)}function T(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?L(e,r,n,function(e){return e}):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+n)),r.push(e))}function L(e,t,n,r,o){var u="";null!=n&&(u=(""+n).replace(R,"$&/")+"/"),F(e,T,t=A(t,u,r,o)),I(t)}function N(){var e=O.current;return null===e&&b("307"),e}var V={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return L(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;F(e,U,t=A(null,null,t,n)),I(t)},count:function(e){return F(e,function(){return null},null)},toArray:function(e){var t=[];return L(e,t,null,function(e){return e}),t},only:function(e){return P(e)||b("143"),e}},createRef:function(){return{current:null}},Component:_,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:y,render:e}},lazy:function(e){return{$$typeof:v,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return N().useCallback(e,t)},useContext:function(e,t){return N().useContext(e,t)},useEffect:function(e,t){return N().useEffect(e,t)},useImperativeHandle:function(e,t,n){return N().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return N().useLayoutEffect(e,t)},useMemo:function(e,t){return N().useMemo(e,t)},useReducer:function(e,t,n){return N().useReducer(e,t,n)},useRef:function(e){return N().useRef(e)},useState:function(e){return N().useState(e)},Fragment:i,StrictMode:a,Suspense:d,createElement:E,cloneElement:function(e,t,n){null==e&&b("267",e);var o=void 0,c=r({},e.props),i=e.key,a=e.ref,f=e._owner;if(null!=t){void 0!==t.ref&&(a=t.ref,f=x.current),void 0!==t.key&&(i=""+t.key);var l=void 0;for(o in e.type&&e.type.defaultProps&&(l=e.type.defaultProps),t)$.call(t,o)&&!C.hasOwnProperty(o)&&(c[o]=void 0===t[o]&&void 0!==l?l[o]:t[o])}if(1===(o=arguments.length-2))c.children=n;else if(1<o){l=Array(o);for(var s=0;s<o;s++)l[s]=arguments[s+2];c.children=l}return{$$typeof:u,type:e.type,key:i,ref:a,props:c,_owner:f}},createFactory:function(e){var t=E.bind(null,e);return t.type=e,t},isValidElement:P,version:"16.8.3",unstable_ConcurrentMode:p,unstable_Profiler:f,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:O,ReactCurrentOwner:x,assign:r}},D={default:V},H=D&&V||D;e.exports=H.default||H},148:function(e,t,n){var r;e.exports=(r=n(152))&&r.default||r},151:function(e,t,n){"use strict";var r=n(0),o=n.n(r),u=n(4),c=n.n(u),i=n(32),a=n.n(i);n.d(t,"a",function(){return a.a});n(148),o.a.createContext({});c.a.object,c.a.string.isRequired,c.a.func,c.a.func},152:function(e,t,n){"use strict";n.r(t);n(33);var r=n(0),o=n.n(r),u=n(4),c=n.n(u),i=n(54),a=n(2),f=function(e){var t=e.location,n=a.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json))};f.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=f}}]);
//# sourceMappingURL=component---src-pages-page-2-js-ad0731b3ca3af6c3ab6b.js.map