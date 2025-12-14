(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))u(f);new MutationObserver(f=>{for(const m of f)if(m.type==="childList")for(const p of m.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&u(p)}).observe(document,{childList:!0,subtree:!0});function c(f){const m={};return f.integrity&&(m.integrity=f.integrity),f.referrerPolicy&&(m.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?m.credentials="include":f.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function u(f){if(f.ep)return;f.ep=!0;const m=c(f);fetch(f.href,m)}})();function X0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ks={exports:{}},Xn={};var Ah;function Z0(){if(Ah)return Xn;Ah=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function c(u,f,m){var p=null;if(m!==void 0&&(p=""+m),f.key!==void 0&&(p=""+f.key),"key"in f){m={};for(var v in f)v!=="key"&&(m[v]=f[v])}else m=f;return f=m.ref,{$$typeof:r,type:u,key:p,ref:f!==void 0?f:null,props:m}}return Xn.Fragment=o,Xn.jsx=c,Xn.jsxs=c,Xn}var wh;function F0(){return wh||(wh=1,Ks.exports=Z0()),Ks.exports}var s=F0(),Js={exports:{}},P={};var Ch;function K0(){if(Ch)return P;Ch=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),p=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),z=Symbol.iterator;function U(E){return E===null||typeof E!="object"?null:(E=z&&E[z]||E["@@iterator"],typeof E=="function"?E:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,H={};function G(E,B,q){this.props=E,this.context=B,this.refs=H,this.updater=q||k}G.prototype.isReactComponent={},G.prototype.setState=function(E,B){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,B,"setState")},G.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function V(){}V.prototype=G.prototype;function X(E,B,q){this.props=E,this.context=B,this.refs=H,this.updater=q||k}var le=X.prototype=new V;le.constructor=X,Y(le,G.prototype),le.isPureReactComponent=!0;var ye=Array.isArray;function fe(){}var K={H:null,A:null,T:null,S:null},Ee=Object.prototype.hasOwnProperty;function Ce(E,B,q){var Z=q.ref;return{$$typeof:r,type:E,key:B,ref:Z!==void 0?Z:null,props:q}}function Ye(E,B){return Ce(E.type,B,E.props)}function Ge(E){return typeof E=="object"&&E!==null&&E.$$typeof===r}function Te(E){var B={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(q){return B[q]})}var ca=/\/+/g;function Re(E,B){return typeof E=="object"&&E!==null&&E.key!=null?Te(""+E.key):B.toString(36)}function Pe(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(fe,fe):(E.status="pending",E.then(function(B){E.status==="pending"&&(E.status="fulfilled",E.value=B)},function(B){E.status==="pending"&&(E.status="rejected",E.reason=B)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function M(E,B,q,Z,ee){var ne=typeof E;(ne==="undefined"||ne==="boolean")&&(E=null);var me=!1;if(E===null)me=!0;else switch(ne){case"bigint":case"string":case"number":me=!0;break;case"object":switch(E.$$typeof){case r:case o:me=!0;break;case A:return me=E._init,M(me(E._payload),B,q,Z,ee)}}if(me)return ee=ee(E),me=Z===""?"."+Re(E,0):Z,ye(ee)?(q="",me!=null&&(q=me.replace(ca,"$&/")+"/"),M(ee,B,q,"",function($l){return $l})):ee!=null&&(Ge(ee)&&(ee=Ye(ee,q+(ee.key==null||E&&E.key===ee.key?"":(""+ee.key).replace(ca,"$&/")+"/")+me)),B.push(ee)),1;me=0;var tt=Z===""?".":Z+":";if(ye(E))for(var _e=0;_e<E.length;_e++)Z=E[_e],ne=tt+Re(Z,_e),me+=M(Z,B,q,ne,ee);else if(_e=U(E),typeof _e=="function")for(E=_e.call(E),_e=0;!(Z=E.next()).done;)Z=Z.value,ne=tt+Re(Z,_e++),me+=M(Z,B,q,ne,ee);else if(ne==="object"){if(typeof E.then=="function")return M(Pe(E),B,q,Z,ee);throw B=String(E),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return me}function L(E,B,q){if(E==null)return E;var Z=[],ee=0;return M(E,Z,"","",function(ne){return B.call(q,ne,ee++)}),Z}function $(E){if(E._status===-1){var B=E._result;B=B(),B.then(function(q){(E._status===0||E._status===-1)&&(E._status=1,E._result=q)},function(q){(E._status===0||E._status===-1)&&(E._status=2,E._result=q)}),E._status===-1&&(E._status=0,E._result=B)}if(E._status===1)return E._result.default;throw E._result}var ve=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},Ae={map:L,forEach:function(E,B,q){L(E,function(){B.apply(this,arguments)},q)},count:function(E){var B=0;return L(E,function(){B++}),B},toArray:function(E){return L(E,function(B){return B})||[]},only:function(E){if(!Ge(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return P.Activity=x,P.Children=Ae,P.Component=G,P.Fragment=c,P.Profiler=f,P.PureComponent=X,P.StrictMode=u,P.Suspense=y,P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,P.__COMPILER_RUNTIME={__proto__:null,c:function(E){return K.H.useMemoCache(E)}},P.cache=function(E){return function(){return E.apply(null,arguments)}},P.cacheSignal=function(){return null},P.cloneElement=function(E,B,q){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var Z=Y({},E.props),ee=E.key;if(B!=null)for(ne in B.key!==void 0&&(ee=""+B.key),B)!Ee.call(B,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&B.ref===void 0||(Z[ne]=B[ne]);var ne=arguments.length-2;if(ne===1)Z.children=q;else if(1<ne){for(var me=Array(ne),tt=0;tt<ne;tt++)me[tt]=arguments[tt+2];Z.children=me}return Ce(E.type,ee,Z)},P.createContext=function(E){return E={$$typeof:p,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:m,_context:E},E},P.createElement=function(E,B,q){var Z,ee={},ne=null;if(B!=null)for(Z in B.key!==void 0&&(ne=""+B.key),B)Ee.call(B,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(ee[Z]=B[Z]);var me=arguments.length-2;if(me===1)ee.children=q;else if(1<me){for(var tt=Array(me),_e=0;_e<me;_e++)tt[_e]=arguments[_e+2];ee.children=tt}if(E&&E.defaultProps)for(Z in me=E.defaultProps,me)ee[Z]===void 0&&(ee[Z]=me[Z]);return Ce(E,ne,ee)},P.createRef=function(){return{current:null}},P.forwardRef=function(E){return{$$typeof:v,render:E}},P.isValidElement=Ge,P.lazy=function(E){return{$$typeof:A,_payload:{_status:-1,_result:E},_init:$}},P.memo=function(E,B){return{$$typeof:g,type:E,compare:B===void 0?null:B}},P.startTransition=function(E){var B=K.T,q={};K.T=q;try{var Z=E(),ee=K.S;ee!==null&&ee(q,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(fe,ve)}catch(ne){ve(ne)}finally{B!==null&&q.types!==null&&(B.types=q.types),K.T=B}},P.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},P.use=function(E){return K.H.use(E)},P.useActionState=function(E,B,q){return K.H.useActionState(E,B,q)},P.useCallback=function(E,B){return K.H.useCallback(E,B)},P.useContext=function(E){return K.H.useContext(E)},P.useDebugValue=function(){},P.useDeferredValue=function(E,B){return K.H.useDeferredValue(E,B)},P.useEffect=function(E,B){return K.H.useEffect(E,B)},P.useEffectEvent=function(E){return K.H.useEffectEvent(E)},P.useId=function(){return K.H.useId()},P.useImperativeHandle=function(E,B,q){return K.H.useImperativeHandle(E,B,q)},P.useInsertionEffect=function(E,B){return K.H.useInsertionEffect(E,B)},P.useLayoutEffect=function(E,B){return K.H.useLayoutEffect(E,B)},P.useMemo=function(E,B){return K.H.useMemo(E,B)},P.useOptimistic=function(E,B){return K.H.useOptimistic(E,B)},P.useReducer=function(E,B,q){return K.H.useReducer(E,B,q)},P.useRef=function(E){return K.H.useRef(E)},P.useState=function(E){return K.H.useState(E)},P.useSyncExternalStore=function(E,B,q){return K.H.useSyncExternalStore(E,B,q)},P.useTransition=function(){return K.H.useTransition()},P.version="19.2.2",P}var jh;function hu(){return jh||(jh=1,Js.exports=K0()),Js.exports}var T=hu();const J0=X0(T);var Ws={exports:{}},Zn={},$s={exports:{}},Is={};var Nh;function W0(){return Nh||(Nh=1,(function(r){function o(M,L){var $=M.length;M.push(L);e:for(;0<$;){var ve=$-1>>>1,Ae=M[ve];if(0<f(Ae,L))M[ve]=L,M[$]=Ae,$=ve;else break e}}function c(M){return M.length===0?null:M[0]}function u(M){if(M.length===0)return null;var L=M[0],$=M.pop();if($!==L){M[0]=$;e:for(var ve=0,Ae=M.length,E=Ae>>>1;ve<E;){var B=2*(ve+1)-1,q=M[B],Z=B+1,ee=M[Z];if(0>f(q,$))Z<Ae&&0>f(ee,q)?(M[ve]=ee,M[Z]=$,ve=Z):(M[ve]=q,M[B]=$,ve=B);else if(Z<Ae&&0>f(ee,$))M[ve]=ee,M[Z]=$,ve=Z;else break e}}return L}function f(M,L){var $=M.sortIndex-L.sortIndex;return $!==0?$:M.id-L.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;r.unstable_now=function(){return m.now()}}else{var p=Date,v=p.now();r.unstable_now=function(){return p.now()-v}}var y=[],g=[],A=1,x=null,z=3,U=!1,k=!1,Y=!1,H=!1,G=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function le(M){for(var L=c(g);L!==null;){if(L.callback===null)u(g);else if(L.startTime<=M)u(g),L.sortIndex=L.expirationTime,o(y,L);else break;L=c(g)}}function ye(M){if(Y=!1,le(M),!k)if(c(y)!==null)k=!0,fe||(fe=!0,Te());else{var L=c(g);L!==null&&Pe(ye,L.startTime-M)}}var fe=!1,K=-1,Ee=5,Ce=-1;function Ye(){return H?!0:!(r.unstable_now()-Ce<Ee)}function Ge(){if(H=!1,fe){var M=r.unstable_now();Ce=M;var L=!0;try{e:{k=!1,Y&&(Y=!1,V(K),K=-1),U=!0;var $=z;try{t:{for(le(M),x=c(y);x!==null&&!(x.expirationTime>M&&Ye());){var ve=x.callback;if(typeof ve=="function"){x.callback=null,z=x.priorityLevel;var Ae=ve(x.expirationTime<=M);if(M=r.unstable_now(),typeof Ae=="function"){x.callback=Ae,le(M),L=!0;break t}x===c(y)&&u(y),le(M)}else u(y);x=c(y)}if(x!==null)L=!0;else{var E=c(g);E!==null&&Pe(ye,E.startTime-M),L=!1}}break e}finally{x=null,z=$,U=!1}L=void 0}}finally{L?Te():fe=!1}}}var Te;if(typeof X=="function")Te=function(){X(Ge)};else if(typeof MessageChannel<"u"){var ca=new MessageChannel,Re=ca.port2;ca.port1.onmessage=Ge,Te=function(){Re.postMessage(null)}}else Te=function(){G(Ge,0)};function Pe(M,L){K=G(function(){M(r.unstable_now())},L)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(M){M.callback=null},r.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ee=0<M?Math.floor(1e3/M):5},r.unstable_getCurrentPriorityLevel=function(){return z},r.unstable_next=function(M){switch(z){case 1:case 2:case 3:var L=3;break;default:L=z}var $=z;z=L;try{return M()}finally{z=$}},r.unstable_requestPaint=function(){H=!0},r.unstable_runWithPriority=function(M,L){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var $=z;z=M;try{return L()}finally{z=$}},r.unstable_scheduleCallback=function(M,L,$){var ve=r.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ve+$:ve):$=ve,M){case 1:var Ae=-1;break;case 2:Ae=250;break;case 5:Ae=1073741823;break;case 4:Ae=1e4;break;default:Ae=5e3}return Ae=$+Ae,M={id:A++,callback:L,priorityLevel:M,startTime:$,expirationTime:Ae,sortIndex:-1},$>ve?(M.sortIndex=$,o(g,M),c(y)===null&&M===c(g)&&(Y?(V(K),K=-1):Y=!0,Pe(ye,$-ve))):(M.sortIndex=Ae,o(y,M),k||U||(k=!0,fe||(fe=!0,Te()))),M},r.unstable_shouldYield=Ye,r.unstable_wrapCallback=function(M){var L=z;return function(){var $=z;z=L;try{return M.apply(this,arguments)}finally{z=$}}}})(Is)),Is}var Th;function $0(){return Th||(Th=1,$s.exports=W0()),$s.exports}var Ps={exports:{}},et={};var zh;function I0(){if(zh)return et;zh=1;var r=hu();function o(y){var g="https://react.dev/errors/"+y;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var A=2;A<arguments.length;A++)g+="&args[]="+encodeURIComponent(arguments[A])}return"Minified React error #"+y+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var u={d:{f:c,r:function(){throw Error(o(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},f=Symbol.for("react.portal");function m(y,g,A){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:x==null?null:""+x,children:y,containerInfo:g,implementation:A}}var p=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(y,g){if(y==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return et.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,et.createPortal=function(y,g){var A=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(o(299));return m(y,g,null,A)},et.flushSync=function(y){var g=p.T,A=u.p;try{if(p.T=null,u.p=2,y)return y()}finally{p.T=g,u.p=A,u.d.f()}},et.preconnect=function(y,g){typeof y=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,u.d.C(y,g))},et.prefetchDNS=function(y){typeof y=="string"&&u.d.D(y)},et.preinit=function(y,g){if(typeof y=="string"&&g&&typeof g.as=="string"){var A=g.as,x=v(A,g.crossOrigin),z=typeof g.integrity=="string"?g.integrity:void 0,U=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;A==="style"?u.d.S(y,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:x,integrity:z,fetchPriority:U}):A==="script"&&u.d.X(y,{crossOrigin:x,integrity:z,fetchPriority:U,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},et.preinitModule=function(y,g){if(typeof y=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var A=v(g.as,g.crossOrigin);u.d.M(y,{crossOrigin:A,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&u.d.M(y)},et.preload=function(y,g){if(typeof y=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var A=g.as,x=v(A,g.crossOrigin);u.d.L(y,A,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},et.preloadModule=function(y,g){if(typeof y=="string")if(g){var A=v(g.as,g.crossOrigin);u.d.m(y,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:A,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else u.d.m(y)},et.requestFormReset=function(y){u.d.r(y)},et.unstable_batchedUpdates=function(y,g){return y(g)},et.useFormState=function(y,g,A){return p.H.useFormState(y,g,A)},et.useFormStatus=function(){return p.H.useHostTransitionStatus()},et.version="19.2.2",et}var Oh;function P0(){if(Oh)return Ps.exports;Oh=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),Ps.exports=I0(),Ps.exports}var Dh;function eg(){if(Dh)return Zn;Dh=1;var r=$0(),o=hu(),c=P0();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(m(e)!==e)throw Error(u(188))}function g(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(u(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return y(n),e;if(i===l)return y(n),t;i=i.sibling}throw Error(u(188))}if(a.return!==l.return)a=n,l=i;else{for(var d=!1,h=n.child;h;){if(h===a){d=!0,a=n,l=i;break}if(h===l){d=!0,l=n,a=i;break}h=h.sibling}if(!d){for(h=i.child;h;){if(h===a){d=!0,a=i,l=n;break}if(h===l){d=!0,l=i,a=n;break}h=h.sibling}if(!d)throw Error(u(189))}}if(a.alternate!==l)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?e:t}function A(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=A(e),t!==null)return t;e=e.sibling}return null}var x=Object.assign,z=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),V=Symbol.for("react.consumer"),X=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),ye=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),Ee=Symbol.for("react.lazy"),Ce=Symbol.for("react.activity"),Ye=Symbol.for("react.memo_cache_sentinel"),Ge=Symbol.iterator;function Te(e){return e===null||typeof e!="object"?null:(e=Ge&&e[Ge]||e["@@iterator"],typeof e=="function"?e:null)}var ca=Symbol.for("react.client.reference");function Re(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ca?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Y:return"Fragment";case G:return"Profiler";case H:return"StrictMode";case ye:return"Suspense";case fe:return"SuspenseList";case Ce:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case X:return e.displayName||"Context";case V:return(e._context.displayName||"Context")+".Consumer";case le:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K:return t=e.displayName||null,t!==null?t:Re(e.type)||"Memo";case Ee:t=e._payload,e=e._init;try{return Re(e(t))}catch{}}return null}var Pe=Array.isArray,M=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},ve=[],Ae=-1;function E(e){return{current:e}}function B(e){0>Ae||(e.current=ve[Ae],ve[Ae]=null,Ae--)}function q(e,t){Ae++,ve[Ae]=e.current,e.current=t}var Z=E(null),ee=E(null),ne=E(null),me=E(null);function tt(e,t){switch(q(ne,t),q(ee,e),q(Z,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Zf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Zf(t),e=Ff(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}B(Z),q(Z,e)}function _e(){B(Z),B(ee),B(ne)}function $l(e){e.memoizedState!==null&&q(me,e);var t=Z.current,a=Ff(t,e.type);t!==a&&(q(ee,e),q(Z,a))}function Pn(e){ee.current===e&&(B(Z),B(ee)),me.current===e&&(B(me),Yn._currentValue=$)}var zr,Su;function Ya(e){if(zr===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);zr=t&&t[1]||"",Su=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+zr+e+Su}var Or=!1;function Dr(e,t){if(!e||Or)return"";Or=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var _=function(){throw Error()};if(Object.defineProperty(_.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_,[])}catch(O){var N=O}Reflect.construct(e,[],_)}else{try{_.call()}catch(O){N=O}e.call(_.prototype)}}else{try{throw Error()}catch(O){N=O}(_=e())&&typeof _.catch=="function"&&_.catch(function(){})}}catch(O){if(O&&N&&typeof O.stack=="string")return[O.stack,N.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),d=i[0],h=i[1];if(d&&h){var b=d.split(`
`),j=h.split(`
`);for(n=l=0;l<b.length&&!b[l].includes("DetermineComponentFrameRoot");)l++;for(;n<j.length&&!j[n].includes("DetermineComponentFrameRoot");)n++;if(l===b.length||n===j.length)for(l=b.length-1,n=j.length-1;1<=l&&0<=n&&b[l]!==j[n];)n--;for(;1<=l&&0<=n;l--,n--)if(b[l]!==j[n]){if(l!==1||n!==1)do if(l--,n--,0>n||b[l]!==j[n]){var D=`
`+b[l].replace(" at new "," at ");return e.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",e.displayName)),D}while(1<=l&&0<=n);break}}}finally{Or=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ya(a):""}function Em(e,t){switch(e.tag){case 26:case 27:case 5:return Ya(e.type);case 16:return Ya("Lazy");case 13:return e.child!==t&&t!==null?Ya("Suspense Fallback"):Ya("Suspense");case 19:return Ya("SuspenseList");case 0:case 15:return Dr(e.type,!1);case 11:return Dr(e.type.render,!1);case 1:return Dr(e.type,!0);case 31:return Ya("Activity");default:return""}}function Eu(e){try{var t="",a=null;do t+=Em(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Mr=Object.prototype.hasOwnProperty,Rr=r.unstable_scheduleCallback,_r=r.unstable_cancelCallback,Am=r.unstable_shouldYield,wm=r.unstable_requestPaint,ct=r.unstable_now,Cm=r.unstable_getCurrentPriorityLevel,Au=r.unstable_ImmediatePriority,wu=r.unstable_UserBlockingPriority,ei=r.unstable_NormalPriority,jm=r.unstable_LowPriority,Cu=r.unstable_IdlePriority,Nm=r.log,Tm=r.unstable_setDisableYieldValue,Il=null,dt=null;function da(e){if(typeof Nm=="function"&&Tm(e),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(Il,e)}catch{}}var ft=Math.clz32?Math.clz32:Dm,zm=Math.log,Om=Math.LN2;function Dm(e){return e>>>=0,e===0?32:31-(zm(e)/Om|0)|0}var ti=256,ai=262144,li=4194304;function Ga(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ni(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var h=l&134217727;return h!==0?(l=h&~i,l!==0?n=Ga(l):(d&=h,d!==0?n=Ga(d):a||(a=h&~e,a!==0&&(n=Ga(a))))):(h=l&~i,h!==0?n=Ga(h):d!==0?n=Ga(d):a||(a=l&~e,a!==0&&(n=Ga(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Pl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Mm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ju(){var e=li;return li<<=1,(li&62914560)===0&&(li=4194304),e}function Br(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function en(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Rm(e,t,a,l,n,i){var d=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var h=e.entanglements,b=e.expirationTimes,j=e.hiddenUpdates;for(a=d&~a;0<a;){var D=31-ft(a),_=1<<D;h[D]=0,b[D]=-1;var N=j[D];if(N!==null)for(j[D]=null,D=0;D<N.length;D++){var O=N[D];O!==null&&(O.lane&=-536870913)}a&=~_}l!==0&&Nu(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(d&~t))}function Nu(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-ft(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Tu(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-ft(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function zu(e,t){var a=t&-t;return a=(a&42)!==0?1:Ur(a),(a&(e.suspendedLanes|t))!==0?0:a}function Ur(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function kr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ou(){var e=L.p;return e!==0?e:(e=window.event,e===void 0?32:gh(e.type))}function Du(e,t){var a=L.p;try{return L.p=e,t()}finally{L.p=a}}var fa=Math.random().toString(36).slice(2),Ke="__reactFiber$"+fa,lt="__reactProps$"+fa,sl="__reactContainer$"+fa,Hr="__reactEvents$"+fa,_m="__reactListeners$"+fa,Bm="__reactHandles$"+fa,Mu="__reactResources$"+fa,tn="__reactMarker$"+fa;function Lr(e){delete e[Ke],delete e[lt],delete e[Hr],delete e[_m],delete e[Bm]}function ul(e){var t=e[Ke];if(t)return t;for(var a=e.parentNode;a;){if(t=a[sl]||a[Ke]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=eh(e);e!==null;){if(a=e[Ke])return a;e=eh(e)}return t}e=a,a=e.parentNode}return null}function cl(e){if(e=e[Ke]||e[sl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function an(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function dl(e){var t=e[Mu];return t||(t=e[Mu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Xe(e){e[tn]=!0}var Ru=new Set,_u={};function Va(e,t){fl(e,t),fl(e+"Capture",t)}function fl(e,t){for(_u[e]=t,e=0;e<t.length;e++)Ru.add(t[e])}var Um=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bu={},Uu={};function km(e){return Mr.call(Uu,e)?!0:Mr.call(Bu,e)?!1:Um.test(e)?Uu[e]=!0:(Bu[e]=!0,!1)}function ii(e,t,a){if(km(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function ri(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Gt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function St(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ku(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Hm(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(d){a=""+d,i.call(this,d)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(d){a=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qr(e){if(!e._valueTracker){var t=ku(e)?"checked":"value";e._valueTracker=Hm(e,t,""+e[t])}}function Hu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=ku(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function oi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Lm=/[\n"\\]/g;function Et(e){return e.replace(Lm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Yr(e,t,a,l,n,i,d,h){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+St(t)):e.value!==""+St(t)&&(e.value=""+St(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?Gr(e,d,St(t)):a!=null?Gr(e,d,St(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+St(h):e.removeAttribute("name")}function Lu(e,t,a,l,n,i,d,h){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){qr(e);return}a=a!=null?""+St(a):"",t=t!=null?""+St(t):a,h||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=h?e.checked:!!l,e.defaultChecked=!!l,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),qr(e)}function Gr(e,t,a){t==="number"&&oi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function hl(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+St(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function qu(e,t,a){if(t!=null&&(t=""+St(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+St(a):""}function Yu(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(u(92));if(Pe(l)){if(1<l.length)throw Error(u(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=St(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),qr(e)}function ml(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var qm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gu(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||qm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Vu(e,t,a){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&Gu(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&Gu(e,i,t[i])}function Vr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ym=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Gm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function si(e){return Gm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Vt(){}var Qr=null;function Xr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pl=null,gl=null;function Qu(e){var t=cl(e);if(t&&(e=t.stateNode)){var a=e[lt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Yr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Et(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[lt]||null;if(!n)throw Error(u(90));Yr(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Hu(l)}break e;case"textarea":qu(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&hl(e,!!a.multiple,t,!1)}}}var Zr=!1;function Xu(e,t,a){if(Zr)return e(t,a);Zr=!0;try{var l=e(t);return l}finally{if(Zr=!1,(pl!==null||gl!==null)&&(Ji(),pl&&(t=pl,e=gl,gl=pl=null,Qu(t),e)))for(t=0;t<e.length;t++)Qu(e[t])}}function ln(e,t){var a=e.stateNode;if(a===null)return null;var l=a[lt]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(u(231,t,typeof a));return a}var Qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fr=!1;if(Qt)try{var nn={};Object.defineProperty(nn,"passive",{get:function(){Fr=!0}}),window.addEventListener("test",nn,nn),window.removeEventListener("test",nn,nn)}catch{Fr=!1}var ha=null,Kr=null,ui=null;function Zu(){if(ui)return ui;var e,t=Kr,a=t.length,l,n="value"in ha?ha.value:ha.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var d=a-e;for(l=1;l<=d&&t[a-l]===n[i-l];l++);return ui=n.slice(e,1<l?1-l:void 0)}function ci(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function di(){return!0}function Fu(){return!1}function nt(e){function t(a,l,n,i,d){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=d,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(a=e[h],this[h]=a?a(i):i[h]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?di:Fu,this.isPropagationStopped=Fu,this}return x(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=di)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=di)},persist:function(){},isPersistent:di}),t}var Qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fi=nt(Qa),rn=x({},Qa,{view:0,detail:0}),Vm=nt(rn),Jr,Wr,on,hi=x({},rn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ir,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==on&&(on&&e.type==="mousemove"?(Jr=e.screenX-on.screenX,Wr=e.screenY-on.screenY):Wr=Jr=0,on=e),Jr)},movementY:function(e){return"movementY"in e?e.movementY:Wr}}),Ku=nt(hi),Qm=x({},hi,{dataTransfer:0}),Xm=nt(Qm),Zm=x({},rn,{relatedTarget:0}),$r=nt(Zm),Fm=x({},Qa,{animationName:0,elapsedTime:0,pseudoElement:0}),Km=nt(Fm),Jm=x({},Qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wm=nt(Jm),$m=x({},Qa,{data:0}),Ju=nt($m),Im={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ep={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ep[e])?!!t[e]:!1}function Ir(){return tp}var ap=x({},rn,{key:function(e){if(e.key){var t=Im[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ci(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Pm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ir,charCode:function(e){return e.type==="keypress"?ci(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ci(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lp=nt(ap),np=x({},hi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wu=nt(np),ip=x({},rn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ir}),rp=nt(ip),op=x({},Qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),sp=nt(op),up=x({},hi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cp=nt(up),dp=x({},Qa,{newState:0,oldState:0}),fp=nt(dp),hp=[9,13,27,32],Pr=Qt&&"CompositionEvent"in window,sn=null;Qt&&"documentMode"in document&&(sn=document.documentMode);var mp=Qt&&"TextEvent"in window&&!sn,$u=Qt&&(!Pr||sn&&8<sn&&11>=sn),Iu=" ",Pu=!1;function ec(e,t){switch(e){case"keyup":return hp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yl=!1;function pp(e,t){switch(e){case"compositionend":return tc(t);case"keypress":return t.which!==32?null:(Pu=!0,Iu);case"textInput":return e=t.data,e===Iu&&Pu?null:e;default:return null}}function gp(e,t){if(yl)return e==="compositionend"||!Pr&&ec(e,t)?(e=Zu(),ui=Kr=ha=null,yl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $u&&t.locale!=="ko"?null:t.data;default:return null}}var yp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ac(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!yp[e.type]:t==="textarea"}function lc(e,t,a,l){pl?gl?gl.push(l):gl=[l]:pl=l,t=ar(t,"onChange"),0<t.length&&(a=new fi("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var un=null,cn=null;function vp(e){qf(e,0)}function mi(e){var t=an(e);if(Hu(t))return e}function nc(e,t){if(e==="change")return t}var ic=!1;if(Qt){var eo;if(Qt){var to="oninput"in document;if(!to){var rc=document.createElement("div");rc.setAttribute("oninput","return;"),to=typeof rc.oninput=="function"}eo=to}else eo=!1;ic=eo&&(!document.documentMode||9<document.documentMode)}function oc(){un&&(un.detachEvent("onpropertychange",sc),cn=un=null)}function sc(e){if(e.propertyName==="value"&&mi(cn)){var t=[];lc(t,cn,e,Xr(e)),Xu(vp,t)}}function bp(e,t,a){e==="focusin"?(oc(),un=t,cn=a,un.attachEvent("onpropertychange",sc)):e==="focusout"&&oc()}function xp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return mi(cn)}function Sp(e,t){if(e==="click")return mi(t)}function Ep(e,t){if(e==="input"||e==="change")return mi(t)}function Ap(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:Ap;function dn(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Mr.call(t,n)||!ht(e[n],t[n]))return!1}return!0}function uc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cc(e,t){var a=uc(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=uc(a)}}function dc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?dc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function fc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=oi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=oi(e.document)}return t}function ao(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var wp=Qt&&"documentMode"in document&&11>=document.documentMode,vl=null,lo=null,fn=null,no=!1;function hc(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;no||vl==null||vl!==oi(l)||(l=vl,"selectionStart"in l&&ao(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),fn&&dn(fn,l)||(fn=l,l=ar(lo,"onSelect"),0<l.length&&(t=new fi("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=vl)))}function Xa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var bl={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionrun:Xa("Transition","TransitionRun"),transitionstart:Xa("Transition","TransitionStart"),transitioncancel:Xa("Transition","TransitionCancel"),transitionend:Xa("Transition","TransitionEnd")},io={},mc={};Qt&&(mc=document.createElement("div").style,"AnimationEvent"in window||(delete bl.animationend.animation,delete bl.animationiteration.animation,delete bl.animationstart.animation),"TransitionEvent"in window||delete bl.transitionend.transition);function Za(e){if(io[e])return io[e];if(!bl[e])return e;var t=bl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in mc)return io[e]=t[a];return e}var pc=Za("animationend"),gc=Za("animationiteration"),yc=Za("animationstart"),Cp=Za("transitionrun"),jp=Za("transitionstart"),Np=Za("transitioncancel"),vc=Za("transitionend"),bc=new Map,ro="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ro.push("scrollEnd");function Mt(e,t){bc.set(e,t),Va(t,[e])}var pi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},At=[],xl=0,oo=0;function gi(){for(var e=xl,t=oo=xl=0;t<e;){var a=At[t];At[t++]=null;var l=At[t];At[t++]=null;var n=At[t];At[t++]=null;var i=At[t];if(At[t++]=null,l!==null&&n!==null){var d=l.pending;d===null?n.next=n:(n.next=d.next,d.next=n),l.pending=n}i!==0&&xc(a,n,i)}}function yi(e,t,a,l){At[xl++]=e,At[xl++]=t,At[xl++]=a,At[xl++]=l,oo|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function so(e,t,a,l){return yi(e,t,a,l),vi(e)}function Fa(e,t){return yi(e,null,null,t),vi(e)}function xc(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-ft(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function vi(e){if(50<_n)throw _n=0,vs=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Sl={};function Tp(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(e,t,a,l){return new Tp(e,t,a,l)}function uo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xt(e,t){var a=e.alternate;return a===null?(a=mt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Sc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function bi(e,t,a,l,n,i){var d=0;if(l=e,typeof e=="function")uo(e)&&(d=1);else if(typeof e=="string")d=R0(e,a,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ce:return e=mt(31,a,t,n),e.elementType=Ce,e.lanes=i,e;case Y:return Ka(a.children,n,i,t);case H:d=8,n|=24;break;case G:return e=mt(12,a,t,n|2),e.elementType=G,e.lanes=i,e;case ye:return e=mt(13,a,t,n),e.elementType=ye,e.lanes=i,e;case fe:return e=mt(19,a,t,n),e.elementType=fe,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case X:d=10;break e;case V:d=9;break e;case le:d=11;break e;case K:d=14;break e;case Ee:d=16,l=null;break e}d=29,a=Error(u(130,e===null?"null":typeof e,"")),l=null}return t=mt(d,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Ka(e,t,a,l){return e=mt(7,e,l,t),e.lanes=a,e}function co(e,t,a){return e=mt(6,e,null,t),e.lanes=a,e}function Ec(e){var t=mt(18,null,null,0);return t.stateNode=e,t}function fo(e,t,a){return t=mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ac=new WeakMap;function wt(e,t){if(typeof e=="object"&&e!==null){var a=Ac.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Eu(t)},Ac.set(e,t),t)}return{value:e,source:t,stack:Eu(t)}}var El=[],Al=0,xi=null,hn=0,Ct=[],jt=0,ma=null,Ut=1,kt="";function Zt(e,t){El[Al++]=hn,El[Al++]=xi,xi=e,hn=t}function wc(e,t,a){Ct[jt++]=Ut,Ct[jt++]=kt,Ct[jt++]=ma,ma=e;var l=Ut;e=kt;var n=32-ft(l)-1;l&=~(1<<n),a+=1;var i=32-ft(t)+n;if(30<i){var d=n-n%5;i=(l&(1<<d)-1).toString(32),l>>=d,n-=d,Ut=1<<32-ft(t)+n|a<<n|l,kt=i+e}else Ut=1<<i|a<<n|l,kt=e}function ho(e){e.return!==null&&(Zt(e,1),wc(e,1,0))}function mo(e){for(;e===xi;)xi=El[--Al],El[Al]=null,hn=El[--Al],El[Al]=null;for(;e===ma;)ma=Ct[--jt],Ct[jt]=null,kt=Ct[--jt],Ct[jt]=null,Ut=Ct[--jt],Ct[jt]=null}function Cc(e,t){Ct[jt++]=Ut,Ct[jt++]=kt,Ct[jt++]=ma,Ut=t.id,kt=t.overflow,ma=e}var Je=null,je=null,ue=!1,pa=null,Nt=!1,po=Error(u(519));function ga(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw mn(wt(t,e)),po}function jc(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Ke]=e,t[lt]=l,a){case"dialog":re("cancel",t),re("close",t);break;case"iframe":case"object":case"embed":re("load",t);break;case"video":case"audio":for(a=0;a<Un.length;a++)re(Un[a],t);break;case"source":re("error",t);break;case"img":case"image":case"link":re("error",t),re("load",t);break;case"details":re("toggle",t);break;case"input":re("invalid",t),Lu(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":re("invalid",t);break;case"textarea":re("invalid",t),Yu(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Qf(t.textContent,a)?(l.popover!=null&&(re("beforetoggle",t),re("toggle",t)),l.onScroll!=null&&re("scroll",t),l.onScrollEnd!=null&&re("scrollend",t),l.onClick!=null&&(t.onclick=Vt),t=!0):t=!1,t||ga(e,!0)}function Nc(e){for(Je=e.return;Je;)switch(Je.tag){case 5:case 31:case 13:Nt=!1;return;case 27:case 3:Nt=!0;return;default:Je=Je.return}}function wl(e){if(e!==Je)return!1;if(!ue)return Nc(e),ue=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Rs(e.type,e.memoizedProps)),a=!a),a&&je&&ga(e),Nc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));je=Pf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));je=Pf(e)}else t===27?(t=je,Oa(e.type)?(e=Hs,Hs=null,je=e):je=t):je=Je?zt(e.stateNode.nextSibling):null;return!0}function Ja(){je=Je=null,ue=!1}function go(){var e=pa;return e!==null&&(st===null?st=e:st.push.apply(st,e),pa=null),e}function mn(e){pa===null?pa=[e]:pa.push(e)}var yo=E(null),Wa=null,Ft=null;function ya(e,t,a){q(yo,t._currentValue),t._currentValue=a}function Kt(e){e._currentValue=yo.current,B(yo)}function vo(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function bo(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var d=n.child;i=i.firstContext;e:for(;i!==null;){var h=i;i=n;for(var b=0;b<t.length;b++)if(h.context===t[b]){i.lanes|=a,h=i.alternate,h!==null&&(h.lanes|=a),vo(i.return,a,e),l||(d=null);break e}i=h.next}}else if(n.tag===18){if(d=n.return,d===null)throw Error(u(341));d.lanes|=a,i=d.alternate,i!==null&&(i.lanes|=a),vo(d,a,e),d=null}else d=n.child;if(d!==null)d.return=n;else for(d=n;d!==null;){if(d===e){d=null;break}if(n=d.sibling,n!==null){n.return=d.return,d=n;break}d=d.return}n=d}}function Cl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var d=n.alternate;if(d===null)throw Error(u(387));if(d=d.memoizedProps,d!==null){var h=n.type;ht(n.pendingProps.value,d.value)||(e!==null?e.push(h):e=[h])}}else if(n===me.current){if(d=n.alternate,d===null)throw Error(u(387));d.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Yn):e=[Yn])}n=n.return}e!==null&&bo(t,e,a,l),t.flags|=262144}function Si(e){for(e=e.firstContext;e!==null;){if(!ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function $a(e){Wa=e,Ft=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function We(e){return Tc(Wa,e)}function Ei(e,t){return Wa===null&&$a(e),Tc(e,t)}function Tc(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Ft===null){if(e===null)throw Error(u(308));Ft=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ft=Ft.next=t;return a}var zp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Op=r.unstable_scheduleCallback,Dp=r.unstable_NormalPriority,ke={$$typeof:X,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xo(){return{controller:new zp,data:new Map,refCount:0}}function pn(e){e.refCount--,e.refCount===0&&Op(Dp,function(){e.controller.abort()})}var gn=null,So=0,jl=0,Nl=null;function Mp(e,t){if(gn===null){var a=gn=[];So=0,jl=ws(),Nl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return So++,t.then(zc,zc),t}function zc(){if(--So===0&&gn!==null){Nl!==null&&(Nl.status="fulfilled");var e=gn;gn=null,jl=0,Nl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Rp(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Oc=M.S;M.S=function(e,t){mf=ct(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Mp(e,t),Oc!==null&&Oc(e,t)};var Ia=E(null);function Eo(){var e=Ia.current;return e!==null?e:we.pooledCache}function Ai(e,t){t===null?q(Ia,Ia.current):q(Ia,t.pool)}function Dc(){var e=Eo();return e===null?null:{parent:ke._currentValue,pool:e}}var Tl=Error(u(460)),Ao=Error(u(474)),wi=Error(u(542)),Ci={then:function(){}};function Mc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Rc(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Vt,Vt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Bc(e),e;default:if(typeof t.status=="string")t.then(Vt,Vt);else{if(e=we,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Bc(e),e}throw el=t,Tl}}function Pa(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(el=a,Tl):a}}var el=null;function _c(){if(el===null)throw Error(u(459));var e=el;return el=null,e}function Bc(e){if(e===Tl||e===wi)throw Error(u(483))}var zl=null,yn=0;function ji(e){var t=yn;return yn+=1,zl===null&&(zl=[]),Rc(zl,e,t)}function vn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ni(e,t){throw t.$$typeof===z?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Uc(e){function t(w,S){if(e){var C=w.deletions;C===null?(w.deletions=[S],w.flags|=16):C.push(S)}}function a(w,S){if(!e)return null;for(;S!==null;)t(w,S),S=S.sibling;return null}function l(w){for(var S=new Map;w!==null;)w.key!==null?S.set(w.key,w):S.set(w.index,w),w=w.sibling;return S}function n(w,S){return w=Xt(w,S),w.index=0,w.sibling=null,w}function i(w,S,C){return w.index=C,e?(C=w.alternate,C!==null?(C=C.index,C<S?(w.flags|=67108866,S):C):(w.flags|=67108866,S)):(w.flags|=1048576,S)}function d(w){return e&&w.alternate===null&&(w.flags|=67108866),w}function h(w,S,C,R){return S===null||S.tag!==6?(S=co(C,w.mode,R),S.return=w,S):(S=n(S,C),S.return=w,S)}function b(w,S,C,R){var J=C.type;return J===Y?D(w,S,C.props.children,R,C.key):S!==null&&(S.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Ee&&Pa(J)===S.type)?(S=n(S,C.props),vn(S,C),S.return=w,S):(S=bi(C.type,C.key,C.props,null,w.mode,R),vn(S,C),S.return=w,S)}function j(w,S,C,R){return S===null||S.tag!==4||S.stateNode.containerInfo!==C.containerInfo||S.stateNode.implementation!==C.implementation?(S=fo(C,w.mode,R),S.return=w,S):(S=n(S,C.children||[]),S.return=w,S)}function D(w,S,C,R,J){return S===null||S.tag!==7?(S=Ka(C,w.mode,R,J),S.return=w,S):(S=n(S,C),S.return=w,S)}function _(w,S,C){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=co(""+S,w.mode,C),S.return=w,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case U:return C=bi(S.type,S.key,S.props,null,w.mode,C),vn(C,S),C.return=w,C;case k:return S=fo(S,w.mode,C),S.return=w,S;case Ee:return S=Pa(S),_(w,S,C)}if(Pe(S)||Te(S))return S=Ka(S,w.mode,C,null),S.return=w,S;if(typeof S.then=="function")return _(w,ji(S),C);if(S.$$typeof===X)return _(w,Ei(w,S),C);Ni(w,S)}return null}function N(w,S,C,R){var J=S!==null?S.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return J!==null?null:h(w,S,""+C,R);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case U:return C.key===J?b(w,S,C,R):null;case k:return C.key===J?j(w,S,C,R):null;case Ee:return C=Pa(C),N(w,S,C,R)}if(Pe(C)||Te(C))return J!==null?null:D(w,S,C,R,null);if(typeof C.then=="function")return N(w,S,ji(C),R);if(C.$$typeof===X)return N(w,S,Ei(w,C),R);Ni(w,C)}return null}function O(w,S,C,R,J){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return w=w.get(C)||null,h(S,w,""+R,J);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case U:return w=w.get(R.key===null?C:R.key)||null,b(S,w,R,J);case k:return w=w.get(R.key===null?C:R.key)||null,j(S,w,R,J);case Ee:return R=Pa(R),O(w,S,C,R,J)}if(Pe(R)||Te(R))return w=w.get(C)||null,D(S,w,R,J,null);if(typeof R.then=="function")return O(w,S,C,ji(R),J);if(R.$$typeof===X)return O(w,S,C,Ei(S,R),J);Ni(S,R)}return null}function Q(w,S,C,R){for(var J=null,ce=null,F=S,ae=S=0,se=null;F!==null&&ae<C.length;ae++){F.index>ae?(se=F,F=null):se=F.sibling;var de=N(w,F,C[ae],R);if(de===null){F===null&&(F=se);break}e&&F&&de.alternate===null&&t(w,F),S=i(de,S,ae),ce===null?J=de:ce.sibling=de,ce=de,F=se}if(ae===C.length)return a(w,F),ue&&Zt(w,ae),J;if(F===null){for(;ae<C.length;ae++)F=_(w,C[ae],R),F!==null&&(S=i(F,S,ae),ce===null?J=F:ce.sibling=F,ce=F);return ue&&Zt(w,ae),J}for(F=l(F);ae<C.length;ae++)se=O(F,w,ae,C[ae],R),se!==null&&(e&&se.alternate!==null&&F.delete(se.key===null?ae:se.key),S=i(se,S,ae),ce===null?J=se:ce.sibling=se,ce=se);return e&&F.forEach(function(Ba){return t(w,Ba)}),ue&&Zt(w,ae),J}function W(w,S,C,R){if(C==null)throw Error(u(151));for(var J=null,ce=null,F=S,ae=S=0,se=null,de=C.next();F!==null&&!de.done;ae++,de=C.next()){F.index>ae?(se=F,F=null):se=F.sibling;var Ba=N(w,F,de.value,R);if(Ba===null){F===null&&(F=se);break}e&&F&&Ba.alternate===null&&t(w,F),S=i(Ba,S,ae),ce===null?J=Ba:ce.sibling=Ba,ce=Ba,F=se}if(de.done)return a(w,F),ue&&Zt(w,ae),J;if(F===null){for(;!de.done;ae++,de=C.next())de=_(w,de.value,R),de!==null&&(S=i(de,S,ae),ce===null?J=de:ce.sibling=de,ce=de);return ue&&Zt(w,ae),J}for(F=l(F);!de.done;ae++,de=C.next())de=O(F,w,ae,de.value,R),de!==null&&(e&&de.alternate!==null&&F.delete(de.key===null?ae:de.key),S=i(de,S,ae),ce===null?J=de:ce.sibling=de,ce=de);return e&&F.forEach(function(Q0){return t(w,Q0)}),ue&&Zt(w,ae),J}function Se(w,S,C,R){if(typeof C=="object"&&C!==null&&C.type===Y&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case U:e:{for(var J=C.key;S!==null;){if(S.key===J){if(J=C.type,J===Y){if(S.tag===7){a(w,S.sibling),R=n(S,C.props.children),R.return=w,w=R;break e}}else if(S.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Ee&&Pa(J)===S.type){a(w,S.sibling),R=n(S,C.props),vn(R,C),R.return=w,w=R;break e}a(w,S);break}else t(w,S);S=S.sibling}C.type===Y?(R=Ka(C.props.children,w.mode,R,C.key),R.return=w,w=R):(R=bi(C.type,C.key,C.props,null,w.mode,R),vn(R,C),R.return=w,w=R)}return d(w);case k:e:{for(J=C.key;S!==null;){if(S.key===J)if(S.tag===4&&S.stateNode.containerInfo===C.containerInfo&&S.stateNode.implementation===C.implementation){a(w,S.sibling),R=n(S,C.children||[]),R.return=w,w=R;break e}else{a(w,S);break}else t(w,S);S=S.sibling}R=fo(C,w.mode,R),R.return=w,w=R}return d(w);case Ee:return C=Pa(C),Se(w,S,C,R)}if(Pe(C))return Q(w,S,C,R);if(Te(C)){if(J=Te(C),typeof J!="function")throw Error(u(150));return C=J.call(C),W(w,S,C,R)}if(typeof C.then=="function")return Se(w,S,ji(C),R);if(C.$$typeof===X)return Se(w,S,Ei(w,C),R);Ni(w,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,S!==null&&S.tag===6?(a(w,S.sibling),R=n(S,C),R.return=w,w=R):(a(w,S),R=co(C,w.mode,R),R.return=w,w=R),d(w)):a(w,S)}return function(w,S,C,R){try{yn=0;var J=Se(w,S,C,R);return zl=null,J}catch(F){if(F===Tl||F===wi)throw F;var ce=mt(29,F,null,w.mode);return ce.lanes=R,ce.return=w,ce}finally{}}}var tl=Uc(!0),kc=Uc(!1),va=!1;function wo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Co(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xa(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(he&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=vi(e),xc(e,null,a),t}return yi(e,l,t,a),vi(e)}function bn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Tu(e,a)}}function jo(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var d={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=d:i=i.next=d,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var No=!1;function xn(){if(No){var e=Nl;if(e!==null)throw e}}function Sn(e,t,a,l){No=!1;var n=e.updateQueue;va=!1;var i=n.firstBaseUpdate,d=n.lastBaseUpdate,h=n.shared.pending;if(h!==null){n.shared.pending=null;var b=h,j=b.next;b.next=null,d===null?i=j:d.next=j,d=b;var D=e.alternate;D!==null&&(D=D.updateQueue,h=D.lastBaseUpdate,h!==d&&(h===null?D.firstBaseUpdate=j:h.next=j,D.lastBaseUpdate=b))}if(i!==null){var _=n.baseState;d=0,D=j=b=null,h=i;do{var N=h.lane&-536870913,O=N!==h.lane;if(O?(oe&N)===N:(l&N)===N){N!==0&&N===jl&&(No=!0),D!==null&&(D=D.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var Q=e,W=h;N=t;var Se=a;switch(W.tag){case 1:if(Q=W.payload,typeof Q=="function"){_=Q.call(Se,_,N);break e}_=Q;break e;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=W.payload,N=typeof Q=="function"?Q.call(Se,_,N):Q,N==null)break e;_=x({},_,N);break e;case 2:va=!0}}N=h.callback,N!==null&&(e.flags|=64,O&&(e.flags|=8192),O=n.callbacks,O===null?n.callbacks=[N]:O.push(N))}else O={lane:N,tag:h.tag,payload:h.payload,callback:h.callback,next:null},D===null?(j=D=O,b=_):D=D.next=O,d|=N;if(h=h.next,h===null){if(h=n.shared.pending,h===null)break;O=h,h=O.next,O.next=null,n.lastBaseUpdate=O,n.shared.pending=null}}while(!0);D===null&&(b=_),n.baseState=b,n.firstBaseUpdate=j,n.lastBaseUpdate=D,i===null&&(n.shared.lanes=0),Ca|=d,e.lanes=d,e.memoizedState=_}}function Hc(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Lc(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Hc(a[e],t)}var Ol=E(null),Ti=E(0);function qc(e,t){e=la,q(Ti,e),q(Ol,t),la=e|t.baseLanes}function To(){q(Ti,la),q(Ol,Ol.current)}function zo(){la=Ti.current,B(Ol),B(Ti)}var pt=E(null),Tt=null;function Sa(e){var t=e.alternate;q(Be,Be.current&1),q(pt,e),Tt===null&&(t===null||Ol.current!==null||t.memoizedState!==null)&&(Tt=e)}function Oo(e){q(Be,Be.current),q(pt,e),Tt===null&&(Tt=e)}function Yc(e){e.tag===22?(q(Be,Be.current),q(pt,e),Tt===null&&(Tt=e)):Ea()}function Ea(){q(Be,Be.current),q(pt,pt.current)}function gt(e){B(pt),Tt===e&&(Tt=null),B(Be)}var Be=E(0);function zi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Us(a)||ks(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Jt=0,te=null,be=null,He=null,Oi=!1,Dl=!1,al=!1,Di=0,En=0,Ml=null,_p=0;function De(){throw Error(u(321))}function Do(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ht(e[a],t[a]))return!1;return!0}function Mo(e,t,a,l,n,i){return Jt=i,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?wd:Fo,al=!1,i=a(l,n),al=!1,Dl&&(i=Vc(t,a,l,n)),Gc(e),i}function Gc(e){M.H=Cn;var t=be!==null&&be.next!==null;if(Jt=0,He=be=te=null,Oi=!1,En=0,Ml=null,t)throw Error(u(300));e===null||Le||(e=e.dependencies,e!==null&&Si(e)&&(Le=!0))}function Vc(e,t,a,l){te=e;var n=0;do{if(Dl&&(Ml=null),En=0,Dl=!1,25<=n)throw Error(u(301));if(n+=1,He=be=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}M.H=Cd,i=t(a,l)}while(Dl);return i}function Bp(){var e=M.H,t=e.useState()[0];return t=typeof t.then=="function"?An(t):t,e=e.useState()[0],(be!==null?be.memoizedState:null)!==e&&(te.flags|=1024),t}function Ro(){var e=Di!==0;return Di=0,e}function _o(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Bo(e){if(Oi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Oi=!1}Jt=0,He=be=te=null,Dl=!1,En=Di=0,Ml=null}function at(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?te.memoizedState=He=e:He=He.next=e,He}function Ue(){if(be===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=He===null?te.memoizedState:He.next;if(t!==null)He=t,be=e;else{if(e===null)throw te.alternate===null?Error(u(467)):Error(u(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},He===null?te.memoizedState=He=e:He=He.next=e}return He}function Mi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function An(e){var t=En;return En+=1,Ml===null&&(Ml=[]),e=Rc(Ml,e,t),t=te,(He===null?t.memoizedState:He.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?wd:Fo),e}function Ri(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return An(e);if(e.$$typeof===X)return We(e)}throw Error(u(438,String(e)))}function Uo(e){var t=null,a=te.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=te.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Mi(),te.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Ye;return t.index++,a}function Wt(e,t){return typeof t=="function"?t(e):t}function _i(e){var t=Ue();return ko(t,be,e)}function ko(e,t,a){var l=e.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var d=n.next;n.next=i.next,i.next=d}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var h=d=null,b=null,j=t,D=!1;do{var _=j.lane&-536870913;if(_!==j.lane?(oe&_)===_:(Jt&_)===_){var N=j.revertLane;if(N===0)b!==null&&(b=b.next={lane:0,revertLane:0,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),_===jl&&(D=!0);else if((Jt&N)===N){j=j.next,N===jl&&(D=!0);continue}else _={lane:0,revertLane:j.revertLane,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},b===null?(h=b=_,d=i):b=b.next=_,te.lanes|=N,Ca|=N;_=j.action,al&&a(i,_),i=j.hasEagerState?j.eagerState:a(i,_)}else N={lane:_,revertLane:j.revertLane,gesture:j.gesture,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},b===null?(h=b=N,d=i):b=b.next=N,te.lanes|=_,Ca|=_;j=j.next}while(j!==null&&j!==t);if(b===null?d=i:b.next=h,!ht(i,e.memoizedState)&&(Le=!0,D&&(a=Nl,a!==null)))throw a;e.memoizedState=i,e.baseState=d,e.baseQueue=b,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Ho(e){var t=Ue(),a=t.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var d=n=n.next;do i=e(i,d.action),d=d.next;while(d!==n);ht(i,t.memoizedState)||(Le=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function Qc(e,t,a){var l=te,n=Ue(),i=ue;if(i){if(a===void 0)throw Error(u(407));a=a()}else a=t();var d=!ht((be||n).memoizedState,a);if(d&&(n.memoizedState=a,Le=!0),n=n.queue,Yo(Fc.bind(null,l,n,e),[e]),n.getSnapshot!==t||d||He!==null&&He.memoizedState.tag&1){if(l.flags|=2048,Rl(9,{destroy:void 0},Zc.bind(null,l,n,a,t),null),we===null)throw Error(u(349));i||(Jt&127)!==0||Xc(l,t,a)}return a}function Xc(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=te.updateQueue,t===null?(t=Mi(),te.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Zc(e,t,a,l){t.value=a,t.getSnapshot=l,Kc(t)&&Jc(e)}function Fc(e,t,a){return a(function(){Kc(t)&&Jc(e)})}function Kc(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ht(e,a)}catch{return!0}}function Jc(e){var t=Fa(e,2);t!==null&&ut(t,e,2)}function Lo(e){var t=at();if(typeof e=="function"){var a=e;if(e=a(),al){da(!0);try{a()}finally{da(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:e},t}function Wc(e,t,a,l){return e.baseState=a,ko(e,be,typeof l=="function"?l:Wt)}function Up(e,t,a,l,n){if(ki(e))throw Error(u(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){i.listeners.push(d)}};M.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,$c(t,i)):(i.next=a.next,t.pending=a.next=i)}}function $c(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=M.T,d={};M.T=d;try{var h=a(n,l),b=M.S;b!==null&&b(d,h),Ic(e,t,h)}catch(j){qo(e,t,j)}finally{i!==null&&d.types!==null&&(i.types=d.types),M.T=i}}else try{i=a(n,l),Ic(e,t,i)}catch(j){qo(e,t,j)}}function Ic(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Pc(e,t,l)},function(l){return qo(e,t,l)}):Pc(e,t,a)}function Pc(e,t,a){t.status="fulfilled",t.value=a,ed(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,$c(e,a)))}function qo(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,ed(t),t=t.next;while(t!==l)}e.action=null}function ed(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function td(e,t){return t}function ad(e,t){if(ue){var a=we.formState;if(a!==null){e:{var l=te;if(ue){if(je){t:{for(var n=je,i=Nt;n.nodeType!==8;){if(!i){n=null;break t}if(n=zt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){je=zt(n.nextSibling),l=n.data==="F!";break e}}ga(l)}l=!1}l&&(t=a[0])}}return a=at(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:td,lastRenderedState:t},a.queue=l,a=Sd.bind(null,te,l),l.dispatch=a,l=Lo(!1),i=Zo.bind(null,te,!1,l.queue),l=at(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Up.bind(null,te,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function ld(e){var t=Ue();return nd(t,be,e)}function nd(e,t,a){if(t=ko(e,t,td)[0],e=_i(Wt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=An(t)}catch(d){throw d===Tl?wi:d}else l=t;t=Ue();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(te.flags|=2048,Rl(9,{destroy:void 0},kp.bind(null,n,a),null)),[l,i,e]}function kp(e,t){e.action=t}function id(e){var t=Ue(),a=be;if(a!==null)return nd(t,a,e);Ue(),t=t.memoizedState,a=Ue();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Rl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=te.updateQueue,t===null&&(t=Mi(),te.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function rd(){return Ue().memoizedState}function Bi(e,t,a,l){var n=at();te.flags|=e,n.memoizedState=Rl(1|t,{destroy:void 0},a,l===void 0?null:l)}function Ui(e,t,a,l){var n=Ue();l=l===void 0?null:l;var i=n.memoizedState.inst;be!==null&&l!==null&&Do(l,be.memoizedState.deps)?n.memoizedState=Rl(t,i,a,l):(te.flags|=e,n.memoizedState=Rl(1|t,i,a,l))}function od(e,t){Bi(8390656,8,e,t)}function Yo(e,t){Ui(2048,8,e,t)}function Hp(e){te.flags|=4;var t=te.updateQueue;if(t===null)t=Mi(),te.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function sd(e){var t=Ue().memoizedState;return Hp({ref:t,nextImpl:e}),function(){if((he&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function ud(e,t){return Ui(4,2,e,t)}function cd(e,t){return Ui(4,4,e,t)}function dd(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function fd(e,t,a){a=a!=null?a.concat([e]):null,Ui(4,4,dd.bind(null,t,e),a)}function Go(){}function hd(e,t){var a=Ue();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Do(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function md(e,t){var a=Ue();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Do(t,l[1]))return l[0];if(l=e(),al){da(!0);try{e()}finally{da(!1)}}return a.memoizedState=[l,t],l}function Vo(e,t,a){return a===void 0||(Jt&1073741824)!==0&&(oe&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=gf(),te.lanes|=e,Ca|=e,a)}function pd(e,t,a,l){return ht(a,t)?a:Ol.current!==null?(e=Vo(e,a,l),ht(e,t)||(Le=!0),e):(Jt&42)===0||(Jt&1073741824)!==0&&(oe&261930)===0?(Le=!0,e.memoizedState=a):(e=gf(),te.lanes|=e,Ca|=e,t)}function gd(e,t,a,l,n){var i=L.p;L.p=i!==0&&8>i?i:8;var d=M.T,h={};M.T=h,Zo(e,!1,t,a);try{var b=n(),j=M.S;if(j!==null&&j(h,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var D=Rp(b,l);wn(e,t,D,bt(e))}else wn(e,t,l,bt(e))}catch(_){wn(e,t,{then:function(){},status:"rejected",reason:_},bt())}finally{L.p=i,d!==null&&h.types!==null&&(d.types=h.types),M.T=d}}function Lp(){}function Qo(e,t,a,l){if(e.tag!==5)throw Error(u(476));var n=yd(e).queue;gd(e,n,t,$,a===null?Lp:function(){return vd(e),a(l)})}function yd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:$},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function vd(e){var t=yd(e);t.next===null&&(t=e.alternate.memoizedState),wn(e,t.next.queue,{},bt())}function Xo(){return We(Yn)}function bd(){return Ue().memoizedState}function xd(){return Ue().memoizedState}function qp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=bt();e=ba(a);var l=xa(t,e,a);l!==null&&(ut(l,t,a),bn(l,t,a)),t={cache:xo()},e.payload=t;return}t=t.return}}function Yp(e,t,a){var l=bt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ki(e)?Ed(t,a):(a=so(e,t,a,l),a!==null&&(ut(a,e,l),Ad(a,t,l)))}function Sd(e,t,a){var l=bt();wn(e,t,a,l)}function wn(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ki(e))Ed(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var d=t.lastRenderedState,h=i(d,a);if(n.hasEagerState=!0,n.eagerState=h,ht(h,d))return yi(e,t,n,0),we===null&&gi(),!1}catch{}finally{}if(a=so(e,t,n,l),a!==null)return ut(a,e,l),Ad(a,t,l),!0}return!1}function Zo(e,t,a,l){if(l={lane:2,revertLane:ws(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ki(e)){if(t)throw Error(u(479))}else t=so(e,a,l,2),t!==null&&ut(t,e,2)}function ki(e){var t=e.alternate;return e===te||t!==null&&t===te}function Ed(e,t){Dl=Oi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Ad(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Tu(e,a)}}var Cn={readContext:We,use:Ri,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useLayoutEffect:De,useInsertionEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useSyncExternalStore:De,useId:De,useHostTransitionStatus:De,useFormState:De,useActionState:De,useOptimistic:De,useMemoCache:De,useCacheRefresh:De};Cn.useEffectEvent=De;var wd={readContext:We,use:Ri,useCallback:function(e,t){return at().memoizedState=[e,t===void 0?null:t],e},useContext:We,useEffect:od,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Bi(4194308,4,dd.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Bi(4194308,4,e,t)},useInsertionEffect:function(e,t){Bi(4,2,e,t)},useMemo:function(e,t){var a=at();t=t===void 0?null:t;var l=e();if(al){da(!0);try{e()}finally{da(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=at();if(a!==void 0){var n=a(t);if(al){da(!0);try{a(t)}finally{da(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Yp.bind(null,te,e),[l.memoizedState,e]},useRef:function(e){var t=at();return e={current:e},t.memoizedState=e},useState:function(e){e=Lo(e);var t=e.queue,a=Sd.bind(null,te,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Go,useDeferredValue:function(e,t){var a=at();return Vo(a,e,t)},useTransition:function(){var e=Lo(!1);return e=gd.bind(null,te,e.queue,!0,!1),at().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=te,n=at();if(ue){if(a===void 0)throw Error(u(407));a=a()}else{if(a=t(),we===null)throw Error(u(349));(oe&127)!==0||Xc(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,od(Fc.bind(null,l,i,e),[e]),l.flags|=2048,Rl(9,{destroy:void 0},Zc.bind(null,l,i,a,t),null),a},useId:function(){var e=at(),t=we.identifierPrefix;if(ue){var a=kt,l=Ut;a=(l&~(1<<32-ft(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Di++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=_p++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Xo,useFormState:ad,useActionState:ad,useOptimistic:function(e){var t=at();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Zo.bind(null,te,!0,a),a.dispatch=t,[e,t]},useMemoCache:Uo,useCacheRefresh:function(){return at().memoizedState=qp.bind(null,te)},useEffectEvent:function(e){var t=at(),a={impl:e};return t.memoizedState=a,function(){if((he&2)!==0)throw Error(u(440));return a.impl.apply(void 0,arguments)}}},Fo={readContext:We,use:Ri,useCallback:hd,useContext:We,useEffect:Yo,useImperativeHandle:fd,useInsertionEffect:ud,useLayoutEffect:cd,useMemo:md,useReducer:_i,useRef:rd,useState:function(){return _i(Wt)},useDebugValue:Go,useDeferredValue:function(e,t){var a=Ue();return pd(a,be.memoizedState,e,t)},useTransition:function(){var e=_i(Wt)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:An(e),t]},useSyncExternalStore:Qc,useId:bd,useHostTransitionStatus:Xo,useFormState:ld,useActionState:ld,useOptimistic:function(e,t){var a=Ue();return Wc(a,be,e,t)},useMemoCache:Uo,useCacheRefresh:xd};Fo.useEffectEvent=sd;var Cd={readContext:We,use:Ri,useCallback:hd,useContext:We,useEffect:Yo,useImperativeHandle:fd,useInsertionEffect:ud,useLayoutEffect:cd,useMemo:md,useReducer:Ho,useRef:rd,useState:function(){return Ho(Wt)},useDebugValue:Go,useDeferredValue:function(e,t){var a=Ue();return be===null?Vo(a,e,t):pd(a,be.memoizedState,e,t)},useTransition:function(){var e=Ho(Wt)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:An(e),t]},useSyncExternalStore:Qc,useId:bd,useHostTransitionStatus:Xo,useFormState:id,useActionState:id,useOptimistic:function(e,t){var a=Ue();return be!==null?Wc(a,be,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Uo,useCacheRefresh:xd};Cd.useEffectEvent=sd;function Ko(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:x({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Jo={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=bt(),n=ba(l);n.payload=t,a!=null&&(n.callback=a),t=xa(e,n,l),t!==null&&(ut(t,e,l),bn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=bt(),n=ba(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=xa(e,n,l),t!==null&&(ut(t,e,l),bn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=bt(),l=ba(a);l.tag=2,t!=null&&(l.callback=t),t=xa(e,l,a),t!==null&&(ut(t,e,a),bn(t,e,a))}};function jd(e,t,a,l,n,i,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,d):t.prototype&&t.prototype.isPureReactComponent?!dn(a,l)||!dn(n,i):!0}function Nd(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Jo.enqueueReplaceState(t,t.state,null)}function ll(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=x({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function Td(e){pi(e)}function zd(e){console.error(e)}function Od(e){pi(e)}function Hi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Dd(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Wo(e,t,a){return a=ba(a),a.tag=3,a.payload={element:null},a.callback=function(){Hi(e,t)},a}function Md(e){return e=ba(e),e.tag=3,e}function Rd(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){Dd(t,a,l)}}var d=a.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){Dd(t,a,l),typeof n!="function"&&(ja===null?ja=new Set([this]):ja.add(this));var h=l.stack;this.componentDidCatch(l.value,{componentStack:h!==null?h:""})})}function Gp(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&Cl(t,a,n,!0),a=pt.current,a!==null){switch(a.tag){case 31:case 13:return Tt===null?Wi():a.alternate===null&&Me===0&&(Me=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Ci?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Ss(e,l,n)),!1;case 22:return a.flags|=65536,l===Ci?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Ss(e,l,n)),!1}throw Error(u(435,a.tag))}return Ss(e,l,n),Wi(),!1}if(ue)return t=pt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==po&&(e=Error(u(422),{cause:l}),mn(wt(e,a)))):(l!==po&&(t=Error(u(423),{cause:l}),mn(wt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=wt(l,a),n=Wo(e.stateNode,l,n),jo(e,n),Me!==4&&(Me=2)),!1;var i=Error(u(520),{cause:l});if(i=wt(i,a),Rn===null?Rn=[i]:Rn.push(i),Me!==4&&(Me=2),t===null)return!0;l=wt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Wo(a.stateNode,l,e),jo(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ja===null||!ja.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Md(n),Rd(n,e,a,l),jo(a,n),!1}a=a.return}while(a!==null);return!1}var $o=Error(u(461)),Le=!1;function $e(e,t,a,l){t.child=e===null?kc(t,null,a,l):tl(t,e.child,a,l)}function _d(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var d={};for(var h in l)h!=="ref"&&(d[h]=l[h])}else d=l;return $a(t),l=Mo(e,t,a,d,i,n),h=Ro(),e!==null&&!Le?(_o(e,t,n),$t(e,t,n)):(ue&&h&&ho(t),t.flags|=1,$e(e,t,l,n),t.child)}function Bd(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!uo(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Ud(e,t,i,l,n)):(e=bi(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!is(e,n)){var d=i.memoizedProps;if(a=a.compare,a=a!==null?a:dn,a(d,l)&&e.ref===t.ref)return $t(e,t,n)}return t.flags|=1,e=Xt(i,l),e.ref=t.ref,e.return=t,t.child=e}function Ud(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(dn(i,l)&&e.ref===t.ref)if(Le=!1,t.pendingProps=l=i,is(e,n))(e.flags&131072)!==0&&(Le=!0);else return t.lanes=e.lanes,$t(e,t,n)}return Io(e,t,a,l,n)}function kd(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return Hd(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ai(t,i!==null?i.cachePool:null),i!==null?qc(t,i):To(),Yc(t);else return l=t.lanes=536870912,Hd(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(Ai(t,i.cachePool),qc(t,i),Ea(),t.memoizedState=null):(e!==null&&Ai(t,null),To(),Ea());return $e(e,t,n,a),t.child}function jn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Hd(e,t,a,l,n){var i=Eo();return i=i===null?null:{parent:ke._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&Ai(t,null),To(),Yc(t),e!==null&&Cl(e,t,l,!0),t.childLanes=n,null}function Li(e,t){return t=Yi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Ld(e,t,a){return tl(t,e.child,null,a),e=Li(t,t.pendingProps),e.flags|=2,gt(t),t.memoizedState=null,e}function Vp(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ue){if(l.mode==="hidden")return e=Li(t,l),t.lanes=536870912,jn(null,e);if(Oo(t),(e=je)?(e=If(e,Nt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ma!==null?{id:Ut,overflow:kt}:null,retryLane:536870912,hydrationErrors:null},a=Ec(e),a.return=t,t.child=a,Je=t,je=null)):e=null,e===null)throw ga(t);return t.lanes=536870912,null}return Li(t,l)}var i=e.memoizedState;if(i!==null){var d=i.dehydrated;if(Oo(t),n)if(t.flags&256)t.flags&=-257,t=Ld(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(Le||Cl(e,t,a,!1),n=(a&e.childLanes)!==0,Le||n){if(l=we,l!==null&&(d=zu(l,a),d!==0&&d!==i.retryLane))throw i.retryLane=d,Fa(e,d),ut(l,e,d),$o;Wi(),t=Ld(e,t,a)}else e=i.treeContext,je=zt(d.nextSibling),Je=t,ue=!0,pa=null,Nt=!1,e!==null&&Cc(t,e),t=Li(t,l),t.flags|=4096;return t}return e=Xt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function qi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Io(e,t,a,l,n){return $a(t),a=Mo(e,t,a,l,void 0,n),l=Ro(),e!==null&&!Le?(_o(e,t,n),$t(e,t,n)):(ue&&l&&ho(t),t.flags|=1,$e(e,t,a,n),t.child)}function qd(e,t,a,l,n,i){return $a(t),t.updateQueue=null,a=Vc(t,l,a,n),Gc(e),l=Ro(),e!==null&&!Le?(_o(e,t,i),$t(e,t,i)):(ue&&l&&ho(t),t.flags|=1,$e(e,t,a,i),t.child)}function Yd(e,t,a,l,n){if($a(t),t.stateNode===null){var i=Sl,d=a.contextType;typeof d=="object"&&d!==null&&(i=We(d)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Jo,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},wo(t),d=a.contextType,i.context=typeof d=="object"&&d!==null?We(d):Sl,i.state=t.memoizedState,d=a.getDerivedStateFromProps,typeof d=="function"&&(Ko(t,a,d,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(d=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),d!==i.state&&Jo.enqueueReplaceState(i,i.state,null),Sn(t,l,i,n),xn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var h=t.memoizedProps,b=ll(a,h);i.props=b;var j=i.context,D=a.contextType;d=Sl,typeof D=="object"&&D!==null&&(d=We(D));var _=a.getDerivedStateFromProps;D=typeof _=="function"||typeof i.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,D||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(h||j!==d)&&Nd(t,i,l,d),va=!1;var N=t.memoizedState;i.state=N,Sn(t,l,i,n),xn(),j=t.memoizedState,h||N!==j||va?(typeof _=="function"&&(Ko(t,a,_,l),j=t.memoizedState),(b=va||jd(t,a,b,l,N,j,d))?(D||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=j),i.props=l,i.state=j,i.context=d,l=b):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,Co(e,t),d=t.memoizedProps,D=ll(a,d),i.props=D,_=t.pendingProps,N=i.context,j=a.contextType,b=Sl,typeof j=="object"&&j!==null&&(b=We(j)),h=a.getDerivedStateFromProps,(j=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(d!==_||N!==b)&&Nd(t,i,l,b),va=!1,N=t.memoizedState,i.state=N,Sn(t,l,i,n),xn();var O=t.memoizedState;d!==_||N!==O||va||e!==null&&e.dependencies!==null&&Si(e.dependencies)?(typeof h=="function"&&(Ko(t,a,h,l),O=t.memoizedState),(D=va||jd(t,a,D,l,N,O,b)||e!==null&&e.dependencies!==null&&Si(e.dependencies))?(j||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,O,b),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,O,b)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||d===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=O),i.props=l,i.state=O,i.context=b,l=D):(typeof i.componentDidUpdate!="function"||d===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,qi(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=tl(t,e.child,null,n),t.child=tl(t,null,a,n)):$e(e,t,a,n),t.memoizedState=i.state,e=t.child):e=$t(e,t,n),e}function Gd(e,t,a,l){return Ja(),t.flags|=256,$e(e,t,a,l),t.child}var Po={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function es(e){return{baseLanes:e,cachePool:Dc()}}function ts(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=vt),e}function Vd(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,d;if((d=i)||(d=e!==null&&e.memoizedState===null?!1:(Be.current&2)!==0),d&&(n=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(ue){if(n?Sa(t):Ea(),(e=je)?(e=If(e,Nt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ma!==null?{id:Ut,overflow:kt}:null,retryLane:536870912,hydrationErrors:null},a=Ec(e),a.return=t,t.child=a,Je=t,je=null)):e=null,e===null)throw ga(t);return ks(e)?t.lanes=32:t.lanes=536870912,null}var h=l.children;return l=l.fallback,n?(Ea(),n=t.mode,h=Yi({mode:"hidden",children:h},n),l=Ka(l,n,a,null),h.return=t,l.return=t,h.sibling=l,t.child=h,l=t.child,l.memoizedState=es(a),l.childLanes=ts(e,d,a),t.memoizedState=Po,jn(null,l)):(Sa(t),as(t,h))}var b=e.memoizedState;if(b!==null&&(h=b.dehydrated,h!==null)){if(i)t.flags&256?(Sa(t),t.flags&=-257,t=ls(e,t,a)):t.memoizedState!==null?(Ea(),t.child=e.child,t.flags|=128,t=null):(Ea(),h=l.fallback,n=t.mode,l=Yi({mode:"visible",children:l.children},n),h=Ka(h,n,a,null),h.flags|=2,l.return=t,h.return=t,l.sibling=h,t.child=l,tl(t,e.child,null,a),l=t.child,l.memoizedState=es(a),l.childLanes=ts(e,d,a),t.memoizedState=Po,t=jn(null,l));else if(Sa(t),ks(h)){if(d=h.nextSibling&&h.nextSibling.dataset,d)var j=d.dgst;d=j,l=Error(u(419)),l.stack="",l.digest=d,mn({value:l,source:null,stack:null}),t=ls(e,t,a)}else if(Le||Cl(e,t,a,!1),d=(a&e.childLanes)!==0,Le||d){if(d=we,d!==null&&(l=zu(d,a),l!==0&&l!==b.retryLane))throw b.retryLane=l,Fa(e,l),ut(d,e,l),$o;Us(h)||Wi(),t=ls(e,t,a)}else Us(h)?(t.flags|=192,t.child=e.child,t=null):(e=b.treeContext,je=zt(h.nextSibling),Je=t,ue=!0,pa=null,Nt=!1,e!==null&&Cc(t,e),t=as(t,l.children),t.flags|=4096);return t}return n?(Ea(),h=l.fallback,n=t.mode,b=e.child,j=b.sibling,l=Xt(b,{mode:"hidden",children:l.children}),l.subtreeFlags=b.subtreeFlags&65011712,j!==null?h=Xt(j,h):(h=Ka(h,n,a,null),h.flags|=2),h.return=t,l.return=t,l.sibling=h,t.child=l,jn(null,l),l=t.child,h=e.child.memoizedState,h===null?h=es(a):(n=h.cachePool,n!==null?(b=ke._currentValue,n=n.parent!==b?{parent:b,pool:b}:n):n=Dc(),h={baseLanes:h.baseLanes|a,cachePool:n}),l.memoizedState=h,l.childLanes=ts(e,d,a),t.memoizedState=Po,jn(e.child,l)):(Sa(t),a=e.child,e=a.sibling,a=Xt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=a,t.memoizedState=null,a)}function as(e,t){return t=Yi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Yi(e,t){return e=mt(22,e,null,t),e.lanes=0,e}function ls(e,t,a){return tl(t,e.child,null,a),e=as(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qd(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),vo(e.return,t,a)}function ns(e,t,a,l,n,i){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=n,d.treeForkCount=i)}function Xd(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var d=Be.current,h=(d&2)!==0;if(h?(d=d&1|2,t.flags|=128):d&=1,q(Be,d),$e(e,t,l,a),l=ue?hn:0,!h&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qd(e,a,t);else if(e.tag===19)Qd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&zi(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),ns(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&zi(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}ns(t,!0,a,null,i,l);break;case"together":ns(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function $t(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ca|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Cl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,a=Xt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Xt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function is(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Si(e)))}function Qp(e,t,a){switch(t.tag){case 3:tt(t,t.stateNode.containerInfo),ya(t,ke,e.memoizedState.cache),Ja();break;case 27:case 5:$l(t);break;case 4:tt(t,t.stateNode.containerInfo);break;case 10:ya(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Oo(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Sa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Vd(e,t,a):(Sa(t),e=$t(e,t,a),e!==null?e.sibling:null);Sa(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(Cl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return Xd(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),q(Be,Be.current),l)break;return null;case 22:return t.lanes=0,kd(e,t,a,t.pendingProps);case 24:ya(t,ke,e.memoizedState.cache)}return $t(e,t,a)}function Zd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Le=!0;else{if(!is(e,a)&&(t.flags&128)===0)return Le=!1,Qp(e,t,a);Le=(e.flags&131072)!==0}else Le=!1,ue&&(t.flags&1048576)!==0&&wc(t,hn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Pa(t.elementType),t.type=e,typeof e=="function")uo(e)?(l=ll(e,l),t.tag=1,t=Yd(null,t,e,l,a)):(t.tag=0,t=Io(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===le){t.tag=11,t=_d(null,t,e,l,a);break e}else if(n===K){t.tag=14,t=Bd(null,t,e,l,a);break e}}throw t=Re(e)||e,Error(u(306,t,""))}}return t;case 0:return Io(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=ll(l,t.pendingProps),Yd(e,t,l,n,a);case 3:e:{if(tt(t,t.stateNode.containerInfo),e===null)throw Error(u(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,Co(e,t),Sn(t,l,null,a);var d=t.memoizedState;if(l=d.cache,ya(t,ke,l),l!==i.cache&&bo(t,[ke],a,!0),xn(),l=d.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Gd(e,t,l,a);break e}else if(l!==n){n=wt(Error(u(424)),t),mn(n),t=Gd(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(je=zt(e.firstChild),Je=t,ue=!0,pa=null,Nt=!0,a=kc(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ja(),l===n){t=$t(e,t,a);break e}$e(e,t,l,a)}t=t.child}return t;case 26:return qi(e,t),e===null?(a=nh(t.type,null,t.pendingProps,null))?t.memoizedState=a:ue||(a=t.type,e=t.pendingProps,l=lr(ne.current).createElement(a),l[Ke]=t,l[lt]=e,Ie(l,a,e),Xe(l),t.stateNode=l):t.memoizedState=nh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return $l(t),e===null&&ue&&(l=t.stateNode=th(t.type,t.pendingProps,ne.current),Je=t,Nt=!0,n=je,Oa(t.type)?(Hs=n,je=zt(l.firstChild)):je=n),$e(e,t,t.pendingProps.children,a),qi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ue&&((n=l=je)&&(l=x0(l,t.type,t.pendingProps,Nt),l!==null?(t.stateNode=l,Je=t,je=zt(l.firstChild),Nt=!1,n=!0):n=!1),n||ga(t)),$l(t),n=t.type,i=t.pendingProps,d=e!==null?e.memoizedProps:null,l=i.children,Rs(n,i)?l=null:d!==null&&Rs(n,d)&&(t.flags|=32),t.memoizedState!==null&&(n=Mo(e,t,Bp,null,null,a),Yn._currentValue=n),qi(e,t),$e(e,t,l,a),t.child;case 6:return e===null&&ue&&((e=a=je)&&(a=S0(a,t.pendingProps,Nt),a!==null?(t.stateNode=a,Je=t,je=null,e=!0):e=!1),e||ga(t)),null;case 13:return Vd(e,t,a);case 4:return tt(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=tl(t,null,l,a):$e(e,t,l,a),t.child;case 11:return _d(e,t,t.type,t.pendingProps,a);case 7:return $e(e,t,t.pendingProps,a),t.child;case 8:return $e(e,t,t.pendingProps.children,a),t.child;case 12:return $e(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ya(t,t.type,l.value),$e(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,$a(t),n=We(n),l=l(n),t.flags|=1,$e(e,t,l,a),t.child;case 14:return Bd(e,t,t.type,t.pendingProps,a);case 15:return Ud(e,t,t.type,t.pendingProps,a);case 19:return Xd(e,t,a);case 31:return Vp(e,t,a);case 22:return kd(e,t,a,t.pendingProps);case 24:return $a(t),l=We(ke),e===null?(n=Eo(),n===null&&(n=we,i=xo(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},wo(t),ya(t,ke,n)):((e.lanes&a)!==0&&(Co(e,t),Sn(t,null,null,a),xn()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ya(t,ke,l)):(l=i.cache,ya(t,ke,l),l!==n.cache&&bo(t,[ke],a,!0))),$e(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function It(e){e.flags|=4}function rs(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(xf())e.flags|=8192;else throw el=Ci,Ao}else e.flags&=-16777217}function Fd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!uh(t))if(xf())e.flags|=8192;else throw el=Ci,Ao}function Gi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ju():536870912,e.lanes|=t,kl|=t)}function Nn(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Xp(e,t,a){var l=t.pendingProps;switch(mo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(t),null;case 1:return Ne(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Kt(ke),_e(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(wl(t)?It(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,go())),Ne(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(It(t),i!==null?(Ne(t),Fd(t,i)):(Ne(t),rs(t,n,null,l,a))):i?i!==e.memoizedState?(It(t),Ne(t),Fd(t,i)):(Ne(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&It(t),Ne(t),rs(t,n,e,l,a)),null;case 27:if(Pn(t),a=ne.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&It(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return Ne(t),null}e=Z.current,wl(t)?jc(t):(e=th(n,l,a),t.stateNode=e,It(t))}return Ne(t),null;case 5:if(Pn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&It(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return Ne(t),null}if(i=Z.current,wl(t))jc(t);else{var d=lr(ne.current);switch(i){case 1:i=d.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=d.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=d.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=d.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=d.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?d.createElement("select",{is:l.is}):d.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?d.createElement(n,{is:l.is}):d.createElement(n)}}i[Ke]=t,i[lt]=l;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)i.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=i;e:switch(Ie(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&It(t)}}return Ne(t),rs(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&It(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(u(166));if(e=ne.current,wl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Je,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Ke]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Qf(e.nodeValue,a)),e||ga(t,!0)}else e=lr(e).createTextNode(l),e[Ke]=t,t.stateNode=e}return Ne(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=wl(t),a!==null){if(e===null){if(!l)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[Ke]=t}else Ja(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ne(t),e=!1}else a=go(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(gt(t),t):(gt(t),null);if((t.flags&128)!==0)throw Error(u(558))}return Ne(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=wl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(u(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(u(317));n[Ke]=t}else Ja(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ne(t),n=!1}else n=go(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(gt(t),t):(gt(t),null)}return gt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Gi(t,t.updateQueue),Ne(t),null);case 4:return _e(),e===null&&Ts(t.stateNode.containerInfo),Ne(t),null;case 10:return Kt(t.type),Ne(t),null;case 19:if(B(Be),l=t.memoizedState,l===null)return Ne(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)Nn(l,!1);else{if(Me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=zi(e),i!==null){for(t.flags|=128,Nn(l,!1),e=i.updateQueue,t.updateQueue=e,Gi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Sc(a,e),a=a.sibling;return q(Be,Be.current&1|2),ue&&Zt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&ct()>Fi&&(t.flags|=128,n=!0,Nn(l,!1),t.lanes=4194304)}else{if(!n)if(e=zi(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Gi(t,e),Nn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!ue)return Ne(t),null}else 2*ct()-l.renderingStartTime>Fi&&a!==536870912&&(t.flags|=128,n=!0,Nn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=ct(),e.sibling=null,a=Be.current,q(Be,n?a&1|2:a&1),ue&&Zt(t,l.treeForkCount),e):(Ne(t),null);case 22:case 23:return gt(t),zo(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Ne(t),t.subtreeFlags&6&&(t.flags|=8192)):Ne(t),a=t.updateQueue,a!==null&&Gi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&B(Ia),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Kt(ke),Ne(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function Zp(e,t){switch(mo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Kt(ke),_e(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Pn(t),null;case 31:if(t.memoizedState!==null){if(gt(t),t.alternate===null)throw Error(u(340));Ja()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(gt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Ja()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(Be),null;case 4:return _e(),null;case 10:return Kt(t.type),null;case 22:case 23:return gt(t),zo(),e!==null&&B(Ia),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Kt(ke),null;case 25:return null;default:return null}}function Kd(e,t){switch(mo(t),t.tag){case 3:Kt(ke),_e();break;case 26:case 27:case 5:Pn(t);break;case 4:_e();break;case 31:t.memoizedState!==null&&gt(t);break;case 13:gt(t);break;case 19:B(Be);break;case 10:Kt(t.type);break;case 22:case 23:gt(t),zo(),e!==null&&B(Ia);break;case 24:Kt(ke)}}function Tn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,d=a.inst;l=i(),d.destroy=l}a=a.next}while(a!==n)}}catch(h){ge(t,t.return,h)}}function Aa(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var d=l.inst,h=d.destroy;if(h!==void 0){d.destroy=void 0,n=t;var b=a,j=h;try{j()}catch(D){ge(n,b,D)}}}l=l.next}while(l!==i)}}catch(D){ge(t,t.return,D)}}function Jd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Lc(t,a)}catch(l){ge(e,e.return,l)}}}function Wd(e,t,a){a.props=ll(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){ge(e,t,l)}}function zn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){ge(e,t,n)}}function Ht(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){ge(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ge(e,t,n)}else a.current=null}function $d(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){ge(e,e.return,n)}}function os(e,t,a){try{var l=e.stateNode;m0(l,e.type,a,t),l[lt]=t}catch(n){ge(e,e.return,n)}}function Id(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Oa(e.type)||e.tag===4}function ss(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Id(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Oa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function us(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Vt));else if(l!==4&&(l===27&&Oa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(us(e,t,a),e=e.sibling;e!==null;)us(e,t,a),e=e.sibling}function Vi(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Oa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Vi(e,t,a),e=e.sibling;e!==null;)Vi(e,t,a),e=e.sibling}function Pd(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ie(t,l,a),t[Ke]=e,t[lt]=a}catch(i){ge(e,e.return,i)}}var Pt=!1,qe=!1,cs=!1,ef=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function Fp(e,t){if(e=e.containerInfo,Ds=cr,e=fc(e),ao(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var d=0,h=-1,b=-1,j=0,D=0,_=e,N=null;t:for(;;){for(var O;_!==a||n!==0&&_.nodeType!==3||(h=d+n),_!==i||l!==0&&_.nodeType!==3||(b=d+l),_.nodeType===3&&(d+=_.nodeValue.length),(O=_.firstChild)!==null;)N=_,_=O;for(;;){if(_===e)break t;if(N===a&&++j===n&&(h=d),N===i&&++D===l&&(b=d),(O=_.nextSibling)!==null)break;_=N,N=_.parentNode}_=O}a=h===-1||b===-1?null:{start:h,end:b}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ms={focusedElem:e,selectionRange:a},cr=!1,Ze=t;Ze!==null;)if(t=Ze,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ze=e;else for(;Ze!==null;){switch(t=Ze,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var Q=ll(a.type,n);e=l.getSnapshotBeforeUpdate(Q,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(W){ge(a,a.return,W)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Bs(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Bs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,Ze=e;break}Ze=t.return}}function tf(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ta(e,a),l&4&&Tn(5,a);break;case 1:if(ta(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(d){ge(a,a.return,d)}else{var n=ll(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){ge(a,a.return,d)}}l&64&&Jd(a),l&512&&zn(a,a.return);break;case 3:if(ta(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Lc(e,t)}catch(d){ge(a,a.return,d)}}break;case 27:t===null&&l&4&&Pd(a);case 26:case 5:ta(e,a),t===null&&l&4&&$d(a),l&512&&zn(a,a.return);break;case 12:ta(e,a);break;case 31:ta(e,a),l&4&&nf(e,a);break;case 13:ta(e,a),l&4&&rf(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=a0.bind(null,a),E0(e,a))));break;case 22:if(l=a.memoizedState!==null||Pt,!l){t=t!==null&&t.memoizedState!==null||qe,n=Pt;var i=qe;Pt=l,(qe=t)&&!i?aa(e,a,(a.subtreeFlags&8772)!==0):ta(e,a),Pt=n,qe=i}break;case 30:break;default:ta(e,a)}}function af(e){var t=e.alternate;t!==null&&(e.alternate=null,af(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Lr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ze=null,it=!1;function ea(e,t,a){for(a=a.child;a!==null;)lf(e,t,a),a=a.sibling}function lf(e,t,a){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(Il,a)}catch{}switch(a.tag){case 26:qe||Ht(a,t),ea(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:qe||Ht(a,t);var l=ze,n=it;Oa(a.type)&&(ze=a.stateNode,it=!1),ea(e,t,a),Hn(a.stateNode),ze=l,it=n;break;case 5:qe||Ht(a,t);case 6:if(l=ze,n=it,ze=null,ea(e,t,a),ze=l,it=n,ze!==null)if(it)try{(ze.nodeType===9?ze.body:ze.nodeName==="HTML"?ze.ownerDocument.body:ze).removeChild(a.stateNode)}catch(i){ge(a,t,i)}else try{ze.removeChild(a.stateNode)}catch(i){ge(a,t,i)}break;case 18:ze!==null&&(it?(e=ze,Wf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Xl(e)):Wf(ze,a.stateNode));break;case 4:l=ze,n=it,ze=a.stateNode.containerInfo,it=!0,ea(e,t,a),ze=l,it=n;break;case 0:case 11:case 14:case 15:Aa(2,a,t),qe||Aa(4,a,t),ea(e,t,a);break;case 1:qe||(Ht(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Wd(a,t,l)),ea(e,t,a);break;case 21:ea(e,t,a);break;case 22:qe=(l=qe)||a.memoizedState!==null,ea(e,t,a),qe=l;break;default:ea(e,t,a)}}function nf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Xl(e)}catch(a){ge(t,t.return,a)}}}function rf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Xl(e)}catch(a){ge(t,t.return,a)}}function Kp(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ef),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ef),t;default:throw Error(u(435,e.tag))}}function Qi(e,t){var a=Kp(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=l0.bind(null,e,l);l.then(n,n)}})}function rt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,d=t,h=d;e:for(;h!==null;){switch(h.tag){case 27:if(Oa(h.type)){ze=h.stateNode,it=!1;break e}break;case 5:ze=h.stateNode,it=!1;break e;case 3:case 4:ze=h.stateNode.containerInfo,it=!0;break e}h=h.return}if(ze===null)throw Error(u(160));lf(i,d,n),ze=null,it=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)of(t,e),t=t.sibling}var Rt=null;function of(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:rt(t,e),ot(e),l&4&&(Aa(3,e,e.return),Tn(3,e),Aa(5,e,e.return));break;case 1:rt(t,e),ot(e),l&512&&(qe||a===null||Ht(a,a.return)),l&64&&Pt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Rt;if(rt(t,e),ot(e),l&512&&(qe||a===null||Ht(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[tn]||i[Ke]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Ie(i,l,a),i[Ke]=e,Xe(i),l=i;break e;case"link":var d=oh("link","href",n).get(l+(a.href||""));if(d){for(var h=0;h<d.length;h++)if(i=d[h],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){d.splice(h,1);break t}}i=n.createElement(l),Ie(i,l,a),n.head.appendChild(i);break;case"meta":if(d=oh("meta","content",n).get(l+(a.content||""))){for(h=0;h<d.length;h++)if(i=d[h],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){d.splice(h,1);break t}}i=n.createElement(l),Ie(i,l,a),n.head.appendChild(i);break;default:throw Error(u(468,l))}i[Ke]=e,Xe(i),l=i}e.stateNode=l}else sh(n,e.type,e.stateNode);else e.stateNode=rh(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?sh(n,e.type,e.stateNode):rh(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&os(e,e.memoizedProps,a.memoizedProps)}break;case 27:rt(t,e),ot(e),l&512&&(qe||a===null||Ht(a,a.return)),a!==null&&l&4&&os(e,e.memoizedProps,a.memoizedProps);break;case 5:if(rt(t,e),ot(e),l&512&&(qe||a===null||Ht(a,a.return)),e.flags&32){n=e.stateNode;try{ml(n,"")}catch(Q){ge(e,e.return,Q)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,os(e,n,a!==null?a.memoizedProps:n)),l&1024&&(cs=!0);break;case 6:if(rt(t,e),ot(e),l&4){if(e.stateNode===null)throw Error(u(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(Q){ge(e,e.return,Q)}}break;case 3:if(rr=null,n=Rt,Rt=nr(t.containerInfo),rt(t,e),Rt=n,ot(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Xl(t.containerInfo)}catch(Q){ge(e,e.return,Q)}cs&&(cs=!1,sf(e));break;case 4:l=Rt,Rt=nr(e.stateNode.containerInfo),rt(t,e),ot(e),Rt=l;break;case 12:rt(t,e),ot(e);break;case 31:rt(t,e),ot(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Qi(e,l)));break;case 13:rt(t,e),ot(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Zi=ct()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Qi(e,l)));break;case 22:n=e.memoizedState!==null;var b=a!==null&&a.memoizedState!==null,j=Pt,D=qe;if(Pt=j||n,qe=D||b,rt(t,e),qe=D,Pt=j,ot(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||b||Pt||qe||nl(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){b=a=t;try{if(i=b.stateNode,n)d=i.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{h=b.stateNode;var _=b.memoizedProps.style,N=_!=null&&_.hasOwnProperty("display")?_.display:null;h.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(Q){ge(b,b.return,Q)}}}else if(t.tag===6){if(a===null){b=t;try{b.stateNode.nodeValue=n?"":b.memoizedProps}catch(Q){ge(b,b.return,Q)}}}else if(t.tag===18){if(a===null){b=t;try{var O=b.stateNode;n?$f(O,!0):$f(b.stateNode,!1)}catch(Q){ge(b,b.return,Q)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Qi(e,a))));break;case 19:rt(t,e),ot(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Qi(e,l)));break;case 30:break;case 21:break;default:rt(t,e),ot(e)}}function ot(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Id(l)){a=l;break}l=l.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var n=a.stateNode,i=ss(e);Vi(e,i,n);break;case 5:var d=a.stateNode;a.flags&32&&(ml(d,""),a.flags&=-33);var h=ss(e);Vi(e,h,d);break;case 3:case 4:var b=a.stateNode.containerInfo,j=ss(e);us(e,j,b);break;default:throw Error(u(161))}}catch(D){ge(e,e.return,D)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;sf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ta(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)tf(e,t.alternate,t),t=t.sibling}function nl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Aa(4,t,t.return),nl(t);break;case 1:Ht(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Wd(t,t.return,a),nl(t);break;case 27:Hn(t.stateNode);case 26:case 5:Ht(t,t.return),nl(t);break;case 22:t.memoizedState===null&&nl(t);break;case 30:nl(t);break;default:nl(t)}e=e.sibling}}function aa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,d=i.flags;switch(i.tag){case 0:case 11:case 15:aa(n,i,a),Tn(4,i);break;case 1:if(aa(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(j){ge(l,l.return,j)}if(l=i,n=l.updateQueue,n!==null){var h=l.stateNode;try{var b=n.shared.hiddenCallbacks;if(b!==null)for(n.shared.hiddenCallbacks=null,n=0;n<b.length;n++)Hc(b[n],h)}catch(j){ge(l,l.return,j)}}a&&d&64&&Jd(i),zn(i,i.return);break;case 27:Pd(i);case 26:case 5:aa(n,i,a),a&&l===null&&d&4&&$d(i),zn(i,i.return);break;case 12:aa(n,i,a);break;case 31:aa(n,i,a),a&&d&4&&nf(n,i);break;case 13:aa(n,i,a),a&&d&4&&rf(n,i);break;case 22:i.memoizedState===null&&aa(n,i,a),zn(i,i.return);break;case 30:break;default:aa(n,i,a)}t=t.sibling}}function ds(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&pn(a))}function fs(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pn(e))}function _t(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)uf(e,t,a,l),t=t.sibling}function uf(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:_t(e,t,a,l),n&2048&&Tn(9,t);break;case 1:_t(e,t,a,l);break;case 3:_t(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pn(e)));break;case 12:if(n&2048){_t(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,d=i.id,h=i.onPostCommit;typeof h=="function"&&h(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(b){ge(t,t.return,b)}}else _t(e,t,a,l);break;case 31:_t(e,t,a,l);break;case 13:_t(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,d=t.alternate,t.memoizedState!==null?i._visibility&2?_t(e,t,a,l):On(e,t):i._visibility&2?_t(e,t,a,l):(i._visibility|=2,_l(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&ds(d,t);break;case 24:_t(e,t,a,l),n&2048&&fs(t.alternate,t);break;default:_t(e,t,a,l)}}function _l(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,d=t,h=a,b=l,j=d.flags;switch(d.tag){case 0:case 11:case 15:_l(i,d,h,b,n),Tn(8,d);break;case 23:break;case 22:var D=d.stateNode;d.memoizedState!==null?D._visibility&2?_l(i,d,h,b,n):On(i,d):(D._visibility|=2,_l(i,d,h,b,n)),n&&j&2048&&ds(d.alternate,d);break;case 24:_l(i,d,h,b,n),n&&j&2048&&fs(d.alternate,d);break;default:_l(i,d,h,b,n)}t=t.sibling}}function On(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:On(a,l),n&2048&&ds(l.alternate,l);break;case 24:On(a,l),n&2048&&fs(l.alternate,l);break;default:On(a,l)}t=t.sibling}}var Dn=8192;function Bl(e,t,a){if(e.subtreeFlags&Dn)for(e=e.child;e!==null;)cf(e,t,a),e=e.sibling}function cf(e,t,a){switch(e.tag){case 26:Bl(e,t,a),e.flags&Dn&&e.memoizedState!==null&&_0(a,Rt,e.memoizedState,e.memoizedProps);break;case 5:Bl(e,t,a);break;case 3:case 4:var l=Rt;Rt=nr(e.stateNode.containerInfo),Bl(e,t,a),Rt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Dn,Dn=16777216,Bl(e,t,a),Dn=l):Bl(e,t,a));break;default:Bl(e,t,a)}}function df(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Mn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ze=l,hf(l,e)}df(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ff(e),e=e.sibling}function ff(e){switch(e.tag){case 0:case 11:case 15:Mn(e),e.flags&2048&&Aa(9,e,e.return);break;case 3:Mn(e);break;case 12:Mn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Xi(e)):Mn(e);break;default:Mn(e)}}function Xi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ze=l,hf(l,e)}df(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Aa(8,t,t.return),Xi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Xi(t));break;default:Xi(t)}e=e.sibling}}function hf(e,t){for(;Ze!==null;){var a=Ze;switch(a.tag){case 0:case 11:case 15:Aa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:pn(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ze=l;else e:for(a=e;Ze!==null;){l=Ze;var n=l.sibling,i=l.return;if(af(l),l===a){Ze=null;break e}if(n!==null){n.return=i,Ze=n;break e}Ze=i}}}var Jp={getCacheForType:function(e){var t=We(ke),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return We(ke).controller.signal}},Wp=typeof WeakMap=="function"?WeakMap:Map,he=0,we=null,ie=null,oe=0,pe=0,yt=null,wa=!1,Ul=!1,hs=!1,la=0,Me=0,Ca=0,il=0,ms=0,vt=0,kl=0,Rn=null,st=null,ps=!1,Zi=0,mf=0,Fi=1/0,Ki=null,ja=null,Ve=0,Na=null,Hl=null,na=0,gs=0,ys=null,pf=null,_n=0,vs=null;function bt(){return(he&2)!==0&&oe!==0?oe&-oe:M.T!==null?ws():Ou()}function gf(){if(vt===0)if((oe&536870912)===0||ue){var e=ai;ai<<=1,(ai&3932160)===0&&(ai=262144),vt=e}else vt=536870912;return e=pt.current,e!==null&&(e.flags|=32),vt}function ut(e,t,a){(e===we&&(pe===2||pe===9)||e.cancelPendingCommit!==null)&&(Ll(e,0),Ta(e,oe,vt,!1)),en(e,a),((he&2)===0||e!==we)&&(e===we&&((he&2)===0&&(il|=a),Me===4&&Ta(e,oe,vt,!1)),Lt(e))}function yf(e,t,a){if((he&6)!==0)throw Error(u(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Pl(e,t),n=l?Pp(e,t):xs(e,t,!0),i=l;do{if(n===0){Ul&&!l&&Ta(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!$p(a)){n=xs(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var h=e;n=Rn;var b=h.current.memoizedState.isDehydrated;if(b&&(Ll(h,d).flags|=256),d=xs(h,d,!1),d!==2){if(hs&&!b){h.errorRecoveryDisabledLanes|=i,il|=i,n=4;break e}i=st,st=n,i!==null&&(st===null?st=i:st.push.apply(st,i))}n=d}if(i=!1,n!==2)continue}}if(n===1){Ll(e,0),Ta(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Ta(l,t,vt,!wa);break e;case 2:st=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(n=Zi+300-ct(),10<n)){if(Ta(l,t,vt,!wa),ni(l,0,!0)!==0)break e;na=t,l.timeoutHandle=Kf(vf.bind(null,l,a,st,Ki,ps,t,vt,il,kl,wa,i,"Throttled",-0,0),n);break e}vf(l,a,st,Ki,ps,t,vt,il,kl,wa,i,null,-0,0)}}break}while(!0);Lt(e)}function vf(e,t,a,l,n,i,d,h,b,j,D,_,N,O){if(e.timeoutHandle=-1,_=t.subtreeFlags,_&8192||(_&16785408)===16785408){_={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Vt},cf(t,i,_);var Q=(i&62914560)===i?Zi-ct():(i&4194048)===i?mf-ct():0;if(Q=B0(_,Q),Q!==null){na=i,e.cancelPendingCommit=Q(jf.bind(null,e,t,i,a,l,n,d,h,b,D,_,null,N,O)),Ta(e,i,d,!j);return}}jf(e,t,i,a,l,n,d,h,b)}function $p(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!ht(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ta(e,t,a,l){t&=~ms,t&=~il,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-ft(n),d=1<<i;l[i]=-1,n&=~d}a!==0&&Nu(e,a,t)}function Ji(){return(he&6)===0?(Bn(0),!1):!0}function bs(){if(ie!==null){if(pe===0)var e=ie.return;else e=ie,Ft=Wa=null,Bo(e),zl=null,yn=0,e=ie;for(;e!==null;)Kd(e.alternate,e),e=e.return;ie=null}}function Ll(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,y0(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),na=0,bs(),we=e,ie=a=Xt(e.current,null),oe=t,pe=0,yt=null,wa=!1,Ul=Pl(e,t),hs=!1,kl=vt=ms=il=Ca=Me=0,st=Rn=null,ps=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-ft(l),i=1<<n;t|=e[n],l&=~i}return la=t,gi(),a}function bf(e,t){te=null,M.H=Cn,t===Tl||t===wi?(t=_c(),pe=3):t===Ao?(t=_c(),pe=4):pe=t===$o?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,yt=t,ie===null&&(Me=1,Hi(e,wt(t,e.current)))}function xf(){var e=pt.current;return e===null?!0:(oe&4194048)===oe?Tt===null:(oe&62914560)===oe||(oe&536870912)!==0?e===Tt:!1}function Sf(){var e=M.H;return M.H=Cn,e===null?Cn:e}function Ef(){var e=M.A;return M.A=Jp,e}function Wi(){Me=4,wa||(oe&4194048)!==oe&&pt.current!==null||(Ul=!0),(Ca&134217727)===0&&(il&134217727)===0||we===null||Ta(we,oe,vt,!1)}function xs(e,t,a){var l=he;he|=2;var n=Sf(),i=Ef();(we!==e||oe!==t)&&(Ki=null,Ll(e,t)),t=!1;var d=Me;e:do try{if(pe!==0&&ie!==null){var h=ie,b=yt;switch(pe){case 8:bs(),d=6;break e;case 3:case 2:case 9:case 6:pt.current===null&&(t=!0);var j=pe;if(pe=0,yt=null,ql(e,h,b,j),a&&Ul){d=0;break e}break;default:j=pe,pe=0,yt=null,ql(e,h,b,j)}}Ip(),d=Me;break}catch(D){bf(e,D)}while(!0);return t&&e.shellSuspendCounter++,Ft=Wa=null,he=l,M.H=n,M.A=i,ie===null&&(we=null,oe=0,gi()),d}function Ip(){for(;ie!==null;)Af(ie)}function Pp(e,t){var a=he;he|=2;var l=Sf(),n=Ef();we!==e||oe!==t?(Ki=null,Fi=ct()+500,Ll(e,t)):Ul=Pl(e,t);e:do try{if(pe!==0&&ie!==null){t=ie;var i=yt;t:switch(pe){case 1:pe=0,yt=null,ql(e,t,i,1);break;case 2:case 9:if(Mc(i)){pe=0,yt=null,wf(t);break}t=function(){pe!==2&&pe!==9||we!==e||(pe=7),Lt(e)},i.then(t,t);break e;case 3:pe=7;break e;case 4:pe=5;break e;case 7:Mc(i)?(pe=0,yt=null,wf(t)):(pe=0,yt=null,ql(e,t,i,7));break;case 5:var d=null;switch(ie.tag){case 26:d=ie.memoizedState;case 5:case 27:var h=ie;if(d?uh(d):h.stateNode.complete){pe=0,yt=null;var b=h.sibling;if(b!==null)ie=b;else{var j=h.return;j!==null?(ie=j,$i(j)):ie=null}break t}}pe=0,yt=null,ql(e,t,i,5);break;case 6:pe=0,yt=null,ql(e,t,i,6);break;case 8:bs(),Me=6;break e;default:throw Error(u(462))}}e0();break}catch(D){bf(e,D)}while(!0);return Ft=Wa=null,M.H=l,M.A=n,he=a,ie!==null?0:(we=null,oe=0,gi(),Me)}function e0(){for(;ie!==null&&!Am();)Af(ie)}function Af(e){var t=Zd(e.alternate,e,la);e.memoizedProps=e.pendingProps,t===null?$i(e):ie=t}function wf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=qd(a,t,t.pendingProps,t.type,void 0,oe);break;case 11:t=qd(a,t,t.pendingProps,t.type.render,t.ref,oe);break;case 5:Bo(t);default:Kd(a,t),t=ie=Sc(t,la),t=Zd(a,t,la)}e.memoizedProps=e.pendingProps,t===null?$i(e):ie=t}function ql(e,t,a,l){Ft=Wa=null,Bo(t),zl=null,yn=0;var n=t.return;try{if(Gp(e,n,t,a,oe)){Me=1,Hi(e,wt(a,e.current)),ie=null;return}}catch(i){if(n!==null)throw ie=n,i;Me=1,Hi(e,wt(a,e.current)),ie=null;return}t.flags&32768?(ue||l===1?e=!0:Ul||(oe&536870912)!==0?e=!1:(wa=e=!0,(l===2||l===9||l===3||l===6)&&(l=pt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Cf(t,e)):$i(t)}function $i(e){var t=e;do{if((t.flags&32768)!==0){Cf(t,wa);return}e=t.return;var a=Xp(t.alternate,t,la);if(a!==null){ie=a;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);Me===0&&(Me=5)}function Cf(e,t){do{var a=Zp(e.alternate,e);if(a!==null){a.flags&=32767,ie=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ie=e;return}ie=e=a}while(e!==null);Me=6,ie=null}function jf(e,t,a,l,n,i,d,h,b){e.cancelPendingCommit=null;do Ii();while(Ve!==0);if((he&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(i=t.lanes|t.childLanes,i|=oo,Rm(e,a,i,d,h,b),e===we&&(ie=we=null,oe=0),Hl=t,Na=e,na=a,gs=i,ys=n,pf=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,n0(ei,function(){return Df(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=M.T,M.T=null,n=L.p,L.p=2,d=he,he|=4;try{Fp(e,t,a)}finally{he=d,L.p=n,M.T=l}}Ve=1,Nf(),Tf(),zf()}}function Nf(){if(Ve===1){Ve=0;var e=Na,t=Hl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=M.T,M.T=null;var l=L.p;L.p=2;var n=he;he|=4;try{of(t,e);var i=Ms,d=fc(e.containerInfo),h=i.focusedElem,b=i.selectionRange;if(d!==h&&h&&h.ownerDocument&&dc(h.ownerDocument.documentElement,h)){if(b!==null&&ao(h)){var j=b.start,D=b.end;if(D===void 0&&(D=j),"selectionStart"in h)h.selectionStart=j,h.selectionEnd=Math.min(D,h.value.length);else{var _=h.ownerDocument||document,N=_&&_.defaultView||window;if(N.getSelection){var O=N.getSelection(),Q=h.textContent.length,W=Math.min(b.start,Q),Se=b.end===void 0?W:Math.min(b.end,Q);!O.extend&&W>Se&&(d=Se,Se=W,W=d);var w=cc(h,W),S=cc(h,Se);if(w&&S&&(O.rangeCount!==1||O.anchorNode!==w.node||O.anchorOffset!==w.offset||O.focusNode!==S.node||O.focusOffset!==S.offset)){var C=_.createRange();C.setStart(w.node,w.offset),O.removeAllRanges(),W>Se?(O.addRange(C),O.extend(S.node,S.offset)):(C.setEnd(S.node,S.offset),O.addRange(C))}}}}for(_=[],O=h;O=O.parentNode;)O.nodeType===1&&_.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<_.length;h++){var R=_[h];R.element.scrollLeft=R.left,R.element.scrollTop=R.top}}cr=!!Ds,Ms=Ds=null}finally{he=n,L.p=l,M.T=a}}e.current=t,Ve=2}}function Tf(){if(Ve===2){Ve=0;var e=Na,t=Hl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=M.T,M.T=null;var l=L.p;L.p=2;var n=he;he|=4;try{tf(e,t.alternate,t)}finally{he=n,L.p=l,M.T=a}}Ve=3}}function zf(){if(Ve===4||Ve===3){Ve=0,wm();var e=Na,t=Hl,a=na,l=pf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ve=5:(Ve=0,Hl=Na=null,Of(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(ja=null),kr(a),t=t.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(Il,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=M.T,n=L.p,L.p=2,M.T=null;try{for(var i=e.onRecoverableError,d=0;d<l.length;d++){var h=l[d];i(h.value,{componentStack:h.stack})}}finally{M.T=t,L.p=n}}(na&3)!==0&&Ii(),Lt(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===vs?_n++:(_n=0,vs=e):_n=0,Bn(0)}}function Of(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,pn(t)))}function Ii(){return Nf(),Tf(),zf(),Df()}function Df(){if(Ve!==5)return!1;var e=Na,t=gs;gs=0;var a=kr(na),l=M.T,n=L.p;try{L.p=32>a?32:a,M.T=null,a=ys,ys=null;var i=Na,d=na;if(Ve=0,Hl=Na=null,na=0,(he&6)!==0)throw Error(u(331));var h=he;if(he|=4,ff(i.current),uf(i,i.current,d,a),he=h,Bn(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(Il,i)}catch{}return!0}finally{L.p=n,M.T=l,Of(e,t)}}function Mf(e,t,a){t=wt(a,t),t=Wo(e.stateNode,t,2),e=xa(e,t,2),e!==null&&(en(e,2),Lt(e))}function ge(e,t,a){if(e.tag===3)Mf(e,e,a);else for(;t!==null;){if(t.tag===3){Mf(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ja===null||!ja.has(l))){e=wt(a,e),a=Md(2),l=xa(t,a,2),l!==null&&(Rd(a,l,t,e),en(l,2),Lt(l));break}}t=t.return}}function Ss(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Wp;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(hs=!0,n.add(a),e=t0.bind(null,e,t,a),t.then(e,e))}function t0(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,we===e&&(oe&a)===a&&(Me===4||Me===3&&(oe&62914560)===oe&&300>ct()-Zi?(he&2)===0&&Ll(e,0):ms|=a,kl===oe&&(kl=0)),Lt(e)}function Rf(e,t){t===0&&(t=ju()),e=Fa(e,t),e!==null&&(en(e,t),Lt(e))}function a0(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Rf(e,a)}function l0(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(u(314))}l!==null&&l.delete(t),Rf(e,a)}function n0(e,t){return Rr(e,t)}var Pi=null,Yl=null,Es=!1,er=!1,As=!1,za=0;function Lt(e){e!==Yl&&e.next===null&&(Yl===null?Pi=Yl=e:Yl=Yl.next=e),er=!0,Es||(Es=!0,r0())}function Bn(e,t){if(!As&&er){As=!0;do for(var a=!1,l=Pi;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var d=l.suspendedLanes,h=l.pingedLanes;i=(1<<31-ft(42|e)+1)-1,i&=n&~(d&~h),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,kf(l,i))}else i=oe,i=ni(l,l===we?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Pl(l,i)||(a=!0,kf(l,i));l=l.next}while(a);As=!1}}function i0(){_f()}function _f(){er=Es=!1;var e=0;za!==0&&g0()&&(e=za);for(var t=ct(),a=null,l=Pi;l!==null;){var n=l.next,i=Bf(l,t);i===0?(l.next=null,a===null?Pi=n:a.next=n,n===null&&(Yl=a)):(a=l,(e!==0||(i&3)!==0)&&(er=!0)),l=n}Ve!==0&&Ve!==5||Bn(e),za!==0&&(za=0)}function Bf(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var d=31-ft(i),h=1<<d,b=n[d];b===-1?((h&a)===0||(h&l)!==0)&&(n[d]=Mm(h,t)):b<=t&&(e.expiredLanes|=h),i&=~h}if(t=we,a=oe,a=ni(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(pe===2||pe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&_r(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Pl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&_r(l),kr(a)){case 2:case 8:a=wu;break;case 32:a=ei;break;case 268435456:a=Cu;break;default:a=ei}return l=Uf.bind(null,e),a=Rr(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&_r(l),e.callbackPriority=2,e.callbackNode=null,2}function Uf(e,t){if(Ve!==0&&Ve!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ii()&&e.callbackNode!==a)return null;var l=oe;return l=ni(e,e===we?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(yf(e,l,t),Bf(e,ct()),e.callbackNode!=null&&e.callbackNode===a?Uf.bind(null,e):null)}function kf(e,t){if(Ii())return null;yf(e,t,!0)}function r0(){v0(function(){(he&6)!==0?Rr(Au,i0):_f()})}function ws(){if(za===0){var e=jl;e===0&&(e=ti,ti<<=1,(ti&261888)===0&&(ti=256)),za=e}return za}function Hf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:si(""+e)}function Lf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function o0(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=Hf((n[lt]||null).action),d=l.submitter;d&&(t=(t=d[lt]||null)?Hf(t.formAction):d.getAttribute("formAction"),t!==null&&(i=t,d=null));var h=new fi("action","action",null,l,n);e.push({event:h,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(za!==0){var b=d?Lf(n,d):new FormData(n);Qo(a,{pending:!0,data:b,method:n.method,action:i},null,b)}}else typeof i=="function"&&(h.preventDefault(),b=d?Lf(n,d):new FormData(n),Qo(a,{pending:!0,data:b,method:n.method,action:i},i,b))},currentTarget:n}]})}}for(var Cs=0;Cs<ro.length;Cs++){var js=ro[Cs],s0=js.toLowerCase(),u0=js[0].toUpperCase()+js.slice(1);Mt(s0,"on"+u0)}Mt(pc,"onAnimationEnd"),Mt(gc,"onAnimationIteration"),Mt(yc,"onAnimationStart"),Mt("dblclick","onDoubleClick"),Mt("focusin","onFocus"),Mt("focusout","onBlur"),Mt(Cp,"onTransitionRun"),Mt(jp,"onTransitionStart"),Mt(Np,"onTransitionCancel"),Mt(vc,"onTransitionEnd"),fl("onMouseEnter",["mouseout","mouseover"]),fl("onMouseLeave",["mouseout","mouseover"]),fl("onPointerEnter",["pointerout","pointerover"]),fl("onPointerLeave",["pointerout","pointerover"]),Va("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Va("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Va("onBeforeInput",["compositionend","keypress","textInput","paste"]),Va("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Va("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Va("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Un="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),c0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Un));function qf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var d=l.length-1;0<=d;d--){var h=l[d],b=h.instance,j=h.currentTarget;if(h=h.listener,b!==i&&n.isPropagationStopped())break e;i=h,n.currentTarget=j;try{i(n)}catch(D){pi(D)}n.currentTarget=null,i=b}else for(d=0;d<l.length;d++){if(h=l[d],b=h.instance,j=h.currentTarget,h=h.listener,b!==i&&n.isPropagationStopped())break e;i=h,n.currentTarget=j;try{i(n)}catch(D){pi(D)}n.currentTarget=null,i=b}}}}function re(e,t){var a=t[Hr];a===void 0&&(a=t[Hr]=new Set);var l=e+"__bubble";a.has(l)||(Yf(t,e,2,!1),a.add(l))}function Ns(e,t,a){var l=0;t&&(l|=4),Yf(a,e,l,t)}var tr="_reactListening"+Math.random().toString(36).slice(2);function Ts(e){if(!e[tr]){e[tr]=!0,Ru.forEach(function(a){a!=="selectionchange"&&(c0.has(a)||Ns(a,!1,e),Ns(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[tr]||(t[tr]=!0,Ns("selectionchange",!1,t))}}function Yf(e,t,a,l){switch(gh(t)){case 2:var n=H0;break;case 8:n=L0;break;default:n=Vs}a=n.bind(null,t,a,e),n=void 0,!Fr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function zs(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var d=l.tag;if(d===3||d===4){var h=l.stateNode.containerInfo;if(h===n)break;if(d===4)for(d=l.return;d!==null;){var b=d.tag;if((b===3||b===4)&&d.stateNode.containerInfo===n)return;d=d.return}for(;h!==null;){if(d=ul(h),d===null)return;if(b=d.tag,b===5||b===6||b===26||b===27){l=i=d;continue e}h=h.parentNode}}l=l.return}Xu(function(){var j=i,D=Xr(a),_=[];e:{var N=bc.get(e);if(N!==void 0){var O=fi,Q=e;switch(e){case"keypress":if(ci(a)===0)break e;case"keydown":case"keyup":O=lp;break;case"focusin":Q="focus",O=$r;break;case"focusout":Q="blur",O=$r;break;case"beforeblur":case"afterblur":O=$r;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=Ku;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=Xm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=rp;break;case pc:case gc:case yc:O=Km;break;case vc:O=sp;break;case"scroll":case"scrollend":O=Vm;break;case"wheel":O=cp;break;case"copy":case"cut":case"paste":O=Wm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=Wu;break;case"toggle":case"beforetoggle":O=fp}var W=(t&4)!==0,Se=!W&&(e==="scroll"||e==="scrollend"),w=W?N!==null?N+"Capture":null:N;W=[];for(var S=j,C;S!==null;){var R=S;if(C=R.stateNode,R=R.tag,R!==5&&R!==26&&R!==27||C===null||w===null||(R=ln(S,w),R!=null&&W.push(kn(S,R,C))),Se)break;S=S.return}0<W.length&&(N=new O(N,Q,null,a,D),_.push({event:N,listeners:W}))}}if((t&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",N&&a!==Qr&&(Q=a.relatedTarget||a.fromElement)&&(ul(Q)||Q[sl]))break e;if((O||N)&&(N=D.window===D?D:(N=D.ownerDocument)?N.defaultView||N.parentWindow:window,O?(Q=a.relatedTarget||a.toElement,O=j,Q=Q?ul(Q):null,Q!==null&&(Se=m(Q),W=Q.tag,Q!==Se||W!==5&&W!==27&&W!==6)&&(Q=null)):(O=null,Q=j),O!==Q)){if(W=Ku,R="onMouseLeave",w="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(W=Wu,R="onPointerLeave",w="onPointerEnter",S="pointer"),Se=O==null?N:an(O),C=Q==null?N:an(Q),N=new W(R,S+"leave",O,a,D),N.target=Se,N.relatedTarget=C,R=null,ul(D)===j&&(W=new W(w,S+"enter",Q,a,D),W.target=C,W.relatedTarget=Se,R=W),Se=R,O&&Q)t:{for(W=d0,w=O,S=Q,C=0,R=w;R;R=W(R))C++;R=0;for(var J=S;J;J=W(J))R++;for(;0<C-R;)w=W(w),C--;for(;0<R-C;)S=W(S),R--;for(;C--;){if(w===S||S!==null&&w===S.alternate){W=w;break t}w=W(w),S=W(S)}W=null}else W=null;O!==null&&Gf(_,N,O,W,!1),Q!==null&&Se!==null&&Gf(_,Se,Q,W,!0)}}e:{if(N=j?an(j):window,O=N.nodeName&&N.nodeName.toLowerCase(),O==="select"||O==="input"&&N.type==="file")var ce=nc;else if(ac(N))if(ic)ce=Ep;else{ce=xp;var F=bp}else O=N.nodeName,!O||O.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?j&&Vr(j.elementType)&&(ce=nc):ce=Sp;if(ce&&(ce=ce(e,j))){lc(_,ce,a,D);break e}F&&F(e,N,j),e==="focusout"&&j&&N.type==="number"&&j.memoizedProps.value!=null&&Gr(N,"number",N.value)}switch(F=j?an(j):window,e){case"focusin":(ac(F)||F.contentEditable==="true")&&(vl=F,lo=j,fn=null);break;case"focusout":fn=lo=vl=null;break;case"mousedown":no=!0;break;case"contextmenu":case"mouseup":case"dragend":no=!1,hc(_,a,D);break;case"selectionchange":if(wp)break;case"keydown":case"keyup":hc(_,a,D)}var ae;if(Pr)e:{switch(e){case"compositionstart":var se="onCompositionStart";break e;case"compositionend":se="onCompositionEnd";break e;case"compositionupdate":se="onCompositionUpdate";break e}se=void 0}else yl?ec(e,a)&&(se="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(se="onCompositionStart");se&&($u&&a.locale!=="ko"&&(yl||se!=="onCompositionStart"?se==="onCompositionEnd"&&yl&&(ae=Zu()):(ha=D,Kr="value"in ha?ha.value:ha.textContent,yl=!0)),F=ar(j,se),0<F.length&&(se=new Ju(se,e,null,a,D),_.push({event:se,listeners:F}),ae?se.data=ae:(ae=tc(a),ae!==null&&(se.data=ae)))),(ae=mp?pp(e,a):gp(e,a))&&(se=ar(j,"onBeforeInput"),0<se.length&&(F=new Ju("onBeforeInput","beforeinput",null,a,D),_.push({event:F,listeners:se}),F.data=ae)),o0(_,e,j,a,D)}qf(_,t)})}function kn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function ar(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=ln(e,a),n!=null&&l.unshift(kn(e,n,i)),n=ln(e,t),n!=null&&l.push(kn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function d0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Gf(e,t,a,l,n){for(var i=t._reactName,d=[];a!==null&&a!==l;){var h=a,b=h.alternate,j=h.stateNode;if(h=h.tag,b!==null&&b===l)break;h!==5&&h!==26&&h!==27||j===null||(b=j,n?(j=ln(a,i),j!=null&&d.unshift(kn(a,j,b))):n||(j=ln(a,i),j!=null&&d.push(kn(a,j,b)))),a=a.return}d.length!==0&&e.push({event:t,listeners:d})}var f0=/\r\n?/g,h0=/\u0000|\uFFFD/g;function Vf(e){return(typeof e=="string"?e:""+e).replace(f0,`
`).replace(h0,"")}function Qf(e,t){return t=Vf(t),Vf(e)===t}function xe(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||ml(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&ml(e,""+l);break;case"className":ri(e,"class",l);break;case"tabIndex":ri(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ri(e,a,l);break;case"style":Vu(e,l,i);break;case"data":if(t!=="object"){ri(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=si(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&xe(e,t,"name",n.name,n,null),xe(e,t,"formEncType",n.formEncType,n,null),xe(e,t,"formMethod",n.formMethod,n,null),xe(e,t,"formTarget",n.formTarget,n,null)):(xe(e,t,"encType",n.encType,n,null),xe(e,t,"method",n.method,n,null),xe(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=si(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Vt);break;case"onScroll":l!=null&&re("scroll",e);break;case"onScrollEnd":l!=null&&re("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=si(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":re("beforetoggle",e),re("toggle",e),ii(e,"popover",l);break;case"xlinkActuate":Gt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Gt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Gt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Gt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Gt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Gt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ii(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ym.get(a)||a,ii(e,a,l))}}function Os(e,t,a,l,n,i){switch(a){case"style":Vu(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"children":typeof l=="string"?ml(e,l):(typeof l=="number"||typeof l=="bigint")&&ml(e,""+l);break;case"onScroll":l!=null&&re("scroll",e);break;case"onScrollEnd":l!=null&&re("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Vt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!_u.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[lt]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):ii(e,a,l)}}}function Ie(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":re("error",e),re("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var d=a[i];if(d!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:xe(e,t,i,d,a,null)}}n&&xe(e,t,"srcSet",a.srcSet,a,null),l&&xe(e,t,"src",a.src,a,null);return;case"input":re("invalid",e);var h=i=d=n=null,b=null,j=null;for(l in a)if(a.hasOwnProperty(l)){var D=a[l];if(D!=null)switch(l){case"name":n=D;break;case"type":d=D;break;case"checked":b=D;break;case"defaultChecked":j=D;break;case"value":i=D;break;case"defaultValue":h=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(u(137,t));break;default:xe(e,t,l,D,a,null)}}Lu(e,i,h,b,j,d,n,!1);return;case"select":re("invalid",e),l=d=i=null;for(n in a)if(a.hasOwnProperty(n)&&(h=a[n],h!=null))switch(n){case"value":i=h;break;case"defaultValue":d=h;break;case"multiple":l=h;default:xe(e,t,n,h,a,null)}t=i,a=d,e.multiple=!!l,t!=null?hl(e,!!l,t,!1):a!=null&&hl(e,!!l,a,!0);return;case"textarea":re("invalid",e),i=n=l=null;for(d in a)if(a.hasOwnProperty(d)&&(h=a[d],h!=null))switch(d){case"value":l=h;break;case"defaultValue":n=h;break;case"children":i=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(u(91));break;default:xe(e,t,d,h,a,null)}Yu(e,l,n,i);return;case"option":for(b in a)if(a.hasOwnProperty(b)&&(l=a[b],l!=null))switch(b){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:xe(e,t,b,l,a,null)}return;case"dialog":re("beforetoggle",e),re("toggle",e),re("cancel",e),re("close",e);break;case"iframe":case"object":re("load",e);break;case"video":case"audio":for(l=0;l<Un.length;l++)re(Un[l],e);break;case"image":re("error",e),re("load",e);break;case"details":re("toggle",e);break;case"embed":case"source":case"link":re("error",e),re("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in a)if(a.hasOwnProperty(j)&&(l=a[j],l!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:xe(e,t,j,l,a,null)}return;default:if(Vr(t)){for(D in a)a.hasOwnProperty(D)&&(l=a[D],l!==void 0&&Os(e,t,D,l,a,void 0));return}}for(h in a)a.hasOwnProperty(h)&&(l=a[h],l!=null&&xe(e,t,h,l,a,null))}function m0(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,d=null,h=null,b=null,j=null,D=null;for(O in a){var _=a[O];if(a.hasOwnProperty(O)&&_!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":b=_;default:l.hasOwnProperty(O)||xe(e,t,O,null,l,_)}}for(var N in l){var O=l[N];if(_=a[N],l.hasOwnProperty(N)&&(O!=null||_!=null))switch(N){case"type":i=O;break;case"name":n=O;break;case"checked":j=O;break;case"defaultChecked":D=O;break;case"value":d=O;break;case"defaultValue":h=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(u(137,t));break;default:O!==_&&xe(e,t,N,O,l,_)}}Yr(e,d,h,b,j,D,i,n);return;case"select":O=d=h=N=null;for(i in a)if(b=a[i],a.hasOwnProperty(i)&&b!=null)switch(i){case"value":break;case"multiple":O=b;default:l.hasOwnProperty(i)||xe(e,t,i,null,l,b)}for(n in l)if(i=l[n],b=a[n],l.hasOwnProperty(n)&&(i!=null||b!=null))switch(n){case"value":N=i;break;case"defaultValue":h=i;break;case"multiple":d=i;default:i!==b&&xe(e,t,n,i,l,b)}t=h,a=d,l=O,N!=null?hl(e,!!a,N,!1):!!l!=!!a&&(t!=null?hl(e,!!a,t,!0):hl(e,!!a,a?[]:"",!1));return;case"textarea":O=N=null;for(h in a)if(n=a[h],a.hasOwnProperty(h)&&n!=null&&!l.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:xe(e,t,h,null,l,n)}for(d in l)if(n=l[d],i=a[d],l.hasOwnProperty(d)&&(n!=null||i!=null))switch(d){case"value":N=n;break;case"defaultValue":O=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(u(91));break;default:n!==i&&xe(e,t,d,n,l,i)}qu(e,N,O);return;case"option":for(var Q in a)if(N=a[Q],a.hasOwnProperty(Q)&&N!=null&&!l.hasOwnProperty(Q))switch(Q){case"selected":e.selected=!1;break;default:xe(e,t,Q,null,l,N)}for(b in l)if(N=l[b],O=a[b],l.hasOwnProperty(b)&&N!==O&&(N!=null||O!=null))switch(b){case"selected":e.selected=N&&typeof N!="function"&&typeof N!="symbol";break;default:xe(e,t,b,N,l,O)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var W in a)N=a[W],a.hasOwnProperty(W)&&N!=null&&!l.hasOwnProperty(W)&&xe(e,t,W,null,l,N);for(j in l)if(N=l[j],O=a[j],l.hasOwnProperty(j)&&N!==O&&(N!=null||O!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(u(137,t));break;default:xe(e,t,j,N,l,O)}return;default:if(Vr(t)){for(var Se in a)N=a[Se],a.hasOwnProperty(Se)&&N!==void 0&&!l.hasOwnProperty(Se)&&Os(e,t,Se,void 0,l,N);for(D in l)N=l[D],O=a[D],!l.hasOwnProperty(D)||N===O||N===void 0&&O===void 0||Os(e,t,D,N,l,O);return}}for(var w in a)N=a[w],a.hasOwnProperty(w)&&N!=null&&!l.hasOwnProperty(w)&&xe(e,t,w,null,l,N);for(_ in l)N=l[_],O=a[_],!l.hasOwnProperty(_)||N===O||N==null&&O==null||xe(e,t,_,N,l,O)}function Xf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function p0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,d=n.initiatorType,h=n.duration;if(i&&h&&Xf(d)){for(d=0,h=n.responseEnd,l+=1;l<a.length;l++){var b=a[l],j=b.startTime;if(j>h)break;var D=b.transferSize,_=b.initiatorType;D&&Xf(_)&&(b=b.responseEnd,d+=D*(b<h?1:(h-j)/(b-j)))}if(--l,t+=8*(i+d)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ds=null,Ms=null;function lr(e){return e.nodeType===9?e:e.ownerDocument}function Zf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ff(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Rs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _s=null;function g0(){var e=window.event;return e&&e.type==="popstate"?e===_s?!1:(_s=e,!0):(_s=null,!1)}var Kf=typeof setTimeout=="function"?setTimeout:void 0,y0=typeof clearTimeout=="function"?clearTimeout:void 0,Jf=typeof Promise=="function"?Promise:void 0,v0=typeof queueMicrotask=="function"?queueMicrotask:typeof Jf<"u"?function(e){return Jf.resolve(null).then(e).catch(b0)}:Kf;function b0(e){setTimeout(function(){throw e})}function Oa(e){return e==="head"}function Wf(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Xl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Hn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Hn(a);for(var i=a.firstChild;i;){var d=i.nextSibling,h=i.nodeName;i[tn]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=d}}else a==="body"&&Hn(e.ownerDocument.body);a=n}while(a);Xl(t)}function $f(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Bs(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Bs(a),Lr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function x0(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[tn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=zt(e.nextSibling),e===null)break}return null}function S0(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=zt(e.nextSibling),e===null))return null;return e}function If(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=zt(e.nextSibling),e===null))return null;return e}function Us(e){return e.data==="$?"||e.data==="$~"}function ks(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function E0(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Hs=null;function Pf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return zt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function eh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function th(e,t,a){switch(t=lr(a),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function Hn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Lr(e)}var Ot=new Map,ah=new Set;function nr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ia=L.d;L.d={f:A0,r:w0,D:C0,C:j0,L:N0,m:T0,X:O0,S:z0,M:D0};function A0(){var e=ia.f(),t=Ji();return e||t}function w0(e){var t=cl(e);t!==null&&t.tag===5&&t.type==="form"?vd(t):ia.r(e)}var Gl=typeof document>"u"?null:document;function lh(e,t,a){var l=Gl;if(l&&typeof t=="string"&&t){var n=Et(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),ah.has(n)||(ah.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Ie(t,"link",e),Xe(t),l.head.appendChild(t)))}}function C0(e){ia.D(e),lh("dns-prefetch",e,null)}function j0(e,t){ia.C(e,t),lh("preconnect",e,t)}function N0(e,t,a){ia.L(e,t,a);var l=Gl;if(l&&e&&t){var n='link[rel="preload"][as="'+Et(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+Et(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+Et(a.imageSizes)+'"]')):n+='[href="'+Et(e)+'"]';var i=n;switch(t){case"style":i=Vl(e);break;case"script":i=Ql(e)}Ot.has(i)||(e=x({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ot.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(Ln(i))||t==="script"&&l.querySelector(qn(i))||(t=l.createElement("link"),Ie(t,"link",e),Xe(t),l.head.appendChild(t)))}}function T0(e,t){ia.m(e,t);var a=Gl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+Et(l)+'"][href="'+Et(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ql(e)}if(!Ot.has(i)&&(e=x({rel:"modulepreload",href:e},t),Ot.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(qn(i)))return}l=a.createElement("link"),Ie(l,"link",e),Xe(l),a.head.appendChild(l)}}}function z0(e,t,a){ia.S(e,t,a);var l=Gl;if(l&&e){var n=dl(l).hoistableStyles,i=Vl(e);t=t||"default";var d=n.get(i);if(!d){var h={loading:0,preload:null};if(d=l.querySelector(Ln(i)))h.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ot.get(i))&&Ls(e,a);var b=d=l.createElement("link");Xe(b),Ie(b,"link",e),b._p=new Promise(function(j,D){b.onload=j,b.onerror=D}),b.addEventListener("load",function(){h.loading|=1}),b.addEventListener("error",function(){h.loading|=2}),h.loading|=4,ir(d,t,l)}d={type:"stylesheet",instance:d,count:1,state:h},n.set(i,d)}}}function O0(e,t){ia.X(e,t);var a=Gl;if(a&&e){var l=dl(a).hoistableScripts,n=Ql(e),i=l.get(n);i||(i=a.querySelector(qn(n)),i||(e=x({src:e,async:!0},t),(t=Ot.get(n))&&qs(e,t),i=a.createElement("script"),Xe(i),Ie(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function D0(e,t){ia.M(e,t);var a=Gl;if(a&&e){var l=dl(a).hoistableScripts,n=Ql(e),i=l.get(n);i||(i=a.querySelector(qn(n)),i||(e=x({src:e,async:!0,type:"module"},t),(t=Ot.get(n))&&qs(e,t),i=a.createElement("script"),Xe(i),Ie(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function nh(e,t,a,l){var n=(n=ne.current)?nr(n):null;if(!n)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Vl(a.href),a=dl(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Vl(a.href);var i=dl(n).hoistableStyles,d=i.get(e);if(d||(n=n.ownerDocument||n,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,d),(i=n.querySelector(Ln(e)))&&!i._p&&(d.instance=i,d.state.loading=5),Ot.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ot.set(e,a),i||M0(n,e,a,d.state))),t&&l===null)throw Error(u(528,""));return d}if(t&&l!==null)throw Error(u(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ql(a),a=dl(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Vl(e){return'href="'+Et(e)+'"'}function Ln(e){return'link[rel="stylesheet"]['+e+"]"}function ih(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function M0(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Ie(t,"link",a),Xe(t),e.head.appendChild(t))}function Ql(e){return'[src="'+Et(e)+'"]'}function qn(e){return"script[async]"+e}function rh(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Et(a.href)+'"]');if(l)return t.instance=l,Xe(l),l;var n=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Xe(l),Ie(l,"style",n),ir(l,a.precedence,e),t.instance=l;case"stylesheet":n=Vl(a.href);var i=e.querySelector(Ln(n));if(i)return t.state.loading|=4,t.instance=i,Xe(i),i;l=ih(a),(n=Ot.get(n))&&Ls(l,n),i=(e.ownerDocument||e).createElement("link"),Xe(i);var d=i;return d._p=new Promise(function(h,b){d.onload=h,d.onerror=b}),Ie(i,"link",l),t.state.loading|=4,ir(i,a.precedence,e),t.instance=i;case"script":return i=Ql(a.src),(n=e.querySelector(qn(i)))?(t.instance=n,Xe(n),n):(l=a,(n=Ot.get(i))&&(l=x({},a),qs(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Xe(n),Ie(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,ir(l,a.precedence,e));return t.instance}function ir(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,d=0;d<l.length;d++){var h=l[d];if(h.dataset.precedence===t)i=h;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Ls(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function qs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var rr=null;function oh(e,t,a){if(rr===null){var l=new Map,n=rr=new Map;n.set(a,l)}else n=rr,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[tn]||i[Ke]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var d=i.getAttribute(t)||"";d=e+d;var h=l.get(d);h?h.push(i):l.set(d,[i])}}return l}function sh(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function R0(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function uh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function _0(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Vl(l.href),i=t.querySelector(Ln(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=or.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Xe(i);return}i=t.ownerDocument||t,l=ih(l),(n=Ot.get(n))&&Ls(l,n),i=i.createElement("link"),Xe(i);var d=i;d._p=new Promise(function(h,b){d.onload=h,d.onerror=b}),Ie(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=or.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Ys=0;function B0(e,t){return e.stylesheets&&e.count===0&&ur(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&ur(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Ys===0&&(Ys=62500*p0());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ur(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Ys?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function or(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ur(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var sr=null;function ur(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,sr=new Map,t.forEach(U0,e),sr=null,or.call(e))}function U0(e,t){if(!(t.state.loading&4)){var a=sr.get(e);if(a)var l=a.get(null);else{a=new Map,sr.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var d=n[i];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(a.set(d.dataset.precedence,d),l=d)}l&&a.set(null,l)}n=t.instance,d=n.getAttribute("data-precedence"),i=a.get(d)||l,i===l&&a.set(null,n),a.set(d,n),this.count++,l=or.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Yn={$$typeof:X,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function k0(e,t,a,l,n,i,d,h,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Br(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Br(0),this.hiddenUpdates=Br(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function ch(e,t,a,l,n,i,d,h,b,j,D,_){return e=new k0(e,t,a,d,b,j,D,_,h),t=1,i===!0&&(t|=24),i=mt(3,null,null,t),e.current=i,i.stateNode=e,t=xo(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},wo(i),e}function dh(e){return e?(e=Sl,e):Sl}function fh(e,t,a,l,n,i){n=dh(n),l.context===null?l.context=n:l.pendingContext=n,l=ba(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=xa(e,l,t),a!==null&&(ut(a,e,t),bn(a,e,t))}function hh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Gs(e,t){hh(e,t),(e=e.alternate)&&hh(e,t)}function mh(e){if(e.tag===13||e.tag===31){var t=Fa(e,67108864);t!==null&&ut(t,e,67108864),Gs(e,67108864)}}function ph(e){if(e.tag===13||e.tag===31){var t=bt();t=Ur(t);var a=Fa(e,t);a!==null&&ut(a,e,t),Gs(e,t)}}var cr=!0;function H0(e,t,a,l){var n=M.T;M.T=null;var i=L.p;try{L.p=2,Vs(e,t,a,l)}finally{L.p=i,M.T=n}}function L0(e,t,a,l){var n=M.T;M.T=null;var i=L.p;try{L.p=8,Vs(e,t,a,l)}finally{L.p=i,M.T=n}}function Vs(e,t,a,l){if(cr){var n=Qs(l);if(n===null)zs(e,t,l,dr,a),yh(e,l);else if(Y0(n,e,t,a,l))l.stopPropagation();else if(yh(e,l),t&4&&-1<q0.indexOf(e)){for(;n!==null;){var i=cl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var d=Ga(i.pendingLanes);if(d!==0){var h=i;for(h.pendingLanes|=2,h.entangledLanes|=2;d;){var b=1<<31-ft(d);h.entanglements[1]|=b,d&=~b}Lt(i),(he&6)===0&&(Fi=ct()+500,Bn(0))}}break;case 31:case 13:h=Fa(i,2),h!==null&&ut(h,i,2),Ji(),Gs(i,2)}if(i=Qs(l),i===null&&zs(e,t,l,dr,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else zs(e,t,l,null,a)}}function Qs(e){return e=Xr(e),Xs(e)}var dr=null;function Xs(e){if(dr=null,e=ul(e),e!==null){var t=m(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=p(t),e!==null)return e;e=null}else if(a===31){if(e=v(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return dr=e,null}function gh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Cm()){case Au:return 2;case wu:return 8;case ei:case jm:return 32;case Cu:return 268435456;default:return 32}default:return 32}}var Zs=!1,Da=null,Ma=null,Ra=null,Gn=new Map,Vn=new Map,_a=[],q0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function yh(e,t){switch(e){case"focusin":case"focusout":Da=null;break;case"dragenter":case"dragleave":Ma=null;break;case"mouseover":case"mouseout":Ra=null;break;case"pointerover":case"pointerout":Gn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vn.delete(t.pointerId)}}function Qn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=cl(t),t!==null&&mh(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Y0(e,t,a,l,n){switch(t){case"focusin":return Da=Qn(Da,e,t,a,l,n),!0;case"dragenter":return Ma=Qn(Ma,e,t,a,l,n),!0;case"mouseover":return Ra=Qn(Ra,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return Gn.set(i,Qn(Gn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Vn.set(i,Qn(Vn.get(i)||null,e,t,a,l,n)),!0}return!1}function vh(e){var t=ul(e.target);if(t!==null){var a=m(t);if(a!==null){if(t=a.tag,t===13){if(t=p(a),t!==null){e.blockedOn=t,Du(e.priority,function(){ph(a)});return}}else if(t===31){if(t=v(a),t!==null){e.blockedOn=t,Du(e.priority,function(){ph(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Qs(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Qr=l,a.target.dispatchEvent(l),Qr=null}else return t=cl(a),t!==null&&mh(t),e.blockedOn=a,!1;t.shift()}return!0}function bh(e,t,a){fr(e)&&a.delete(t)}function G0(){Zs=!1,Da!==null&&fr(Da)&&(Da=null),Ma!==null&&fr(Ma)&&(Ma=null),Ra!==null&&fr(Ra)&&(Ra=null),Gn.forEach(bh),Vn.forEach(bh)}function hr(e,t){e.blockedOn===t&&(e.blockedOn=null,Zs||(Zs=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,G0)))}var mr=null;function xh(e){mr!==e&&(mr=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){mr===e&&(mr=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(Xs(l||a)===null)continue;break}var i=cl(a);i!==null&&(e.splice(t,3),t-=3,Qo(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Xl(e){function t(b){return hr(b,e)}Da!==null&&hr(Da,e),Ma!==null&&hr(Ma,e),Ra!==null&&hr(Ra,e),Gn.forEach(t),Vn.forEach(t);for(var a=0;a<_a.length;a++){var l=_a[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<_a.length&&(a=_a[0],a.blockedOn===null);)vh(a),a.blockedOn===null&&_a.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],d=n[lt]||null;if(typeof i=="function")d||xh(a);else if(d){var h=null;if(i&&i.hasAttribute("formAction")){if(n=i,d=i[lt]||null)h=d.formAction;else if(Xs(n)!==null)continue}else h=d.action;typeof h=="function"?a[l+1]=h:(a.splice(l,3),l-=3),xh(a)}}}function Sh(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(d){return n=d})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Fs(e){this._internalRoot=e}pr.prototype.render=Fs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var a=t.current,l=bt();fh(a,l,e,t,null,null)},pr.prototype.unmount=Fs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fh(e.current,2,null,e,null,null),Ji(),t[sl]=null}};function pr(e){this._internalRoot=e}pr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ou();e={blockedOn:null,target:e,priority:t};for(var a=0;a<_a.length&&t!==0&&t<_a[a].priority;a++);_a.splice(a,0,e),a===0&&vh(e)}};var Eh=o.version;if(Eh!=="19.2.2")throw Error(u(527,Eh,"19.2.2"));L.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=g(t),e=e!==null?A(e):null,e=e===null?null:e.stateNode,e};var V0={bundleType:0,version:"19.2.2",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.2.2"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gr.isDisabled&&gr.supportsFiber)try{Il=gr.inject(V0),dt=gr}catch{}}return Zn.createRoot=function(e,t){if(!f(e))throw Error(u(299));var a=!1,l="",n=Td,i=zd,d=Od;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=ch(e,1,!1,null,null,a,l,null,n,i,d,Sh),e[sl]=t.current,Ts(e),new Fs(t)},Zn.hydrateRoot=function(e,t,a){if(!f(e))throw Error(u(299));var l=!1,n="",i=Td,d=zd,h=Od,b=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(d=a.onCaughtError),a.onRecoverableError!==void 0&&(h=a.onRecoverableError),a.formState!==void 0&&(b=a.formState)),t=ch(e,1,!0,t,a??null,l,n,b,i,d,h,Sh),t.context=dh(null),a=t.current,l=bt(),l=Ur(l),n=ba(l),n.callback=null,xa(a,n,l),a=l,t.current.lanes=a,en(t,a),Lt(t),e[sl]=t.current,Ts(e),new pr(t)},Zn.version="19.2.2",Zn}var Mh;function tg(){if(Mh)return Ws.exports;Mh=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),Ws.exports=eg(),Ws.exports}var ag=tg();var Rh="popstate";function lg(r={}){function o(u,f){let{pathname:m,search:p,hash:v}=u.location;return nu("",{pathname:m,search:p,hash:v},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function c(u,f){return typeof f=="string"?f:Jn(f)}return ig(o,c,null,r)}function Oe(r,o){if(r===!1||r===null||typeof r>"u")throw new Error(o)}function Dt(r,o){if(!r){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function ng(){return Math.random().toString(36).substring(2,10)}function _h(r,o){return{usr:r.state,key:r.key,idx:o}}function nu(r,o,c=null,u){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof o=="string"?Fl(o):o,state:c,key:o&&o.key||u||ng()}}function Jn({pathname:r="/",search:o="",hash:c=""}){return o&&o!=="?"&&(r+=o.charAt(0)==="?"?o:"?"+o),c&&c!=="#"&&(r+=c.charAt(0)==="#"?c:"#"+c),r}function Fl(r){let o={};if(r){let c=r.indexOf("#");c>=0&&(o.hash=r.substring(c),r=r.substring(0,c));let u=r.indexOf("?");u>=0&&(o.search=r.substring(u),r=r.substring(0,u)),r&&(o.pathname=r)}return o}function ig(r,o,c,u={}){let{window:f=document.defaultView,v5Compat:m=!1}=u,p=f.history,v="POP",y=null,g=A();g==null&&(g=0,p.replaceState({...p.state,idx:g},""));function A(){return(p.state||{idx:null}).idx}function x(){v="POP";let H=A(),G=H==null?null:H-g;g=H,y&&y({action:v,location:Y.location,delta:G})}function z(H,G){v="PUSH";let V=nu(Y.location,H,G);g=A()+1;let X=_h(V,g),le=Y.createHref(V);try{p.pushState(X,"",le)}catch(ye){if(ye instanceof DOMException&&ye.name==="DataCloneError")throw ye;f.location.assign(le)}m&&y&&y({action:v,location:Y.location,delta:1})}function U(H,G){v="REPLACE";let V=nu(Y.location,H,G);g=A();let X=_h(V,g),le=Y.createHref(V);p.replaceState(X,"",le),m&&y&&y({action:v,location:Y.location,delta:0})}function k(H){return rg(H)}let Y={get action(){return v},get location(){return r(f,p)},listen(H){if(y)throw new Error("A history only accepts one active listener");return f.addEventListener(Rh,x),y=H,()=>{f.removeEventListener(Rh,x),y=null}},createHref(H){return o(f,H)},createURL:k,encodeLocation(H){let G=k(H);return{pathname:G.pathname,search:G.search,hash:G.hash}},push:z,replace:U,go(H){return p.go(H)}};return Y}function rg(r,o=!1){let c="http://localhost";typeof window<"u"&&(c=window.location.origin!=="null"?window.location.origin:window.location.href),Oe(c,"No window.location.(origin|href) available to create URL");let u=typeof r=="string"?r:Jn(r);return u=u.replace(/ $/,"%20"),!o&&u.startsWith("//")&&(u=c+u),new URL(u,c)}function Kh(r,o,c="/"){return og(r,o,c,!1)}function og(r,o,c,u){let f=typeof o=="string"?Fl(o):o,m=sa(f.pathname||"/",c);if(m==null)return null;let p=Jh(r);sg(p);let v=null;for(let y=0;v==null&&y<p.length;++y){let g=bg(m);v=yg(p[y],g,u)}return v}function Jh(r,o=[],c=[],u="",f=!1){let m=(p,v,y=f,g)=>{let A={relativePath:g===void 0?p.path||"":g,caseSensitive:p.caseSensitive===!0,childrenIndex:v,route:p};if(A.relativePath.startsWith("/")){if(!A.relativePath.startsWith(u)&&y)return;Oe(A.relativePath.startsWith(u),`Absolute route path "${A.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),A.relativePath=A.relativePath.slice(u.length)}let x=oa([u,A.relativePath]),z=c.concat(A);p.children&&p.children.length>0&&(Oe(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),Jh(p.children,o,z,x,y)),!(p.path==null&&!p.index)&&o.push({path:x,score:pg(x,p.index),routesMeta:z})};return r.forEach((p,v)=>{if(p.path===""||!p.path?.includes("?"))m(p,v);else for(let y of Wh(p.path))m(p,v,!0,y)}),o}function Wh(r){let o=r.split("/");if(o.length===0)return[];let[c,...u]=o,f=c.endsWith("?"),m=c.replace(/\?$/,"");if(u.length===0)return f?[m,""]:[m];let p=Wh(u.join("/")),v=[];return v.push(...p.map(y=>y===""?m:[m,y].join("/"))),f&&v.push(...p),v.map(y=>r.startsWith("/")&&y===""?"/":y)}function sg(r){r.sort((o,c)=>o.score!==c.score?c.score-o.score:gg(o.routesMeta.map(u=>u.childrenIndex),c.routesMeta.map(u=>u.childrenIndex)))}var ug=/^:[\w-]+$/,cg=3,dg=2,fg=1,hg=10,mg=-2,Bh=r=>r==="*";function pg(r,o){let c=r.split("/"),u=c.length;return c.some(Bh)&&(u+=mg),o&&(u+=dg),c.filter(f=>!Bh(f)).reduce((f,m)=>f+(ug.test(m)?cg:m===""?fg:hg),u)}function gg(r,o){return r.length===o.length&&r.slice(0,-1).every((u,f)=>u===o[f])?r[r.length-1]-o[o.length-1]:0}function yg(r,o,c=!1){let{routesMeta:u}=r,f={},m="/",p=[];for(let v=0;v<u.length;++v){let y=u[v],g=v===u.length-1,A=m==="/"?o:o.slice(m.length)||"/",x=Er({path:y.relativePath,caseSensitive:y.caseSensitive,end:g},A),z=y.route;if(!x&&g&&c&&!u[u.length-1].route.index&&(x=Er({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},A)),!x)return null;Object.assign(f,x.params),p.push({params:f,pathname:oa([m,x.pathname]),pathnameBase:wg(oa([m,x.pathnameBase])),route:z}),x.pathnameBase!=="/"&&(m=oa([m,x.pathnameBase]))}return p}function Er(r,o){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[c,u]=vg(r.path,r.caseSensitive,r.end),f=o.match(c);if(!f)return null;let m=f[0],p=m.replace(/(.)\/+$/,"$1"),v=f.slice(1);return{params:u.reduce((g,{paramName:A,isOptional:x},z)=>{if(A==="*"){let k=v[z]||"";p=m.slice(0,m.length-k.length).replace(/(.)\/+$/,"$1")}const U=v[z];return x&&!U?g[A]=void 0:g[A]=(U||"").replace(/%2F/g,"/"),g},{}),pathname:m,pathnameBase:p,pattern:r}}function vg(r,o=!1,c=!0){Dt(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let u=[],f="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,v,y)=>(u.push({paramName:v,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(u.push({paramName:"*"}),f+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?f+="\\/*$":r!==""&&r!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,o?void 0:"i"),u]}function bg(r){try{return r.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Dt(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),r}}function sa(r,o){if(o==="/")return r;if(!r.toLowerCase().startsWith(o.toLowerCase()))return null;let c=o.endsWith("/")?o.length-1:o.length,u=r.charAt(c);return u&&u!=="/"?null:r.slice(c)||"/"}var xg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Sg=r=>xg.test(r);function Eg(r,o="/"){let{pathname:c,search:u="",hash:f=""}=typeof r=="string"?Fl(r):r,m;if(c)if(Sg(c))m=c;else{if(c.includes("//")){let p=c;c=c.replace(/\/\/+/g,"/"),Dt(!1,`Pathnames cannot have embedded double slashes - normalizing ${p} -> ${c}`)}c.startsWith("/")?m=Uh(c.substring(1),"/"):m=Uh(c,o)}else m=o;return{pathname:m,search:Cg(u),hash:jg(f)}}function Uh(r,o){let c=o.replace(/\/+$/,"").split("/");return r.split("/").forEach(f=>{f===".."?c.length>1&&c.pop():f!=="."&&c.push(f)}),c.length>1?c.join("/"):"/"}function eu(r,o,c,u){return`Cannot include a '${r}' character in a manually specified \`to.${o}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ag(r){return r.filter((o,c)=>c===0||o.route.path&&o.route.path.length>0)}function $h(r){let o=Ag(r);return o.map((c,u)=>u===o.length-1?c.pathname:c.pathnameBase)}function Ih(r,o,c,u=!1){let f;typeof r=="string"?f=Fl(r):(f={...r},Oe(!f.pathname||!f.pathname.includes("?"),eu("?","pathname","search",f)),Oe(!f.pathname||!f.pathname.includes("#"),eu("#","pathname","hash",f)),Oe(!f.search||!f.search.includes("#"),eu("#","search","hash",f)));let m=r===""||f.pathname==="",p=m?"/":f.pathname,v;if(p==null)v=c;else{let x=o.length-1;if(!u&&p.startsWith("..")){let z=p.split("/");for(;z[0]==="..";)z.shift(),x-=1;f.pathname=z.join("/")}v=x>=0?o[x]:"/"}let y=Eg(f,v),g=p&&p!=="/"&&p.endsWith("/"),A=(m||p===".")&&c.endsWith("/");return!y.pathname.endsWith("/")&&(g||A)&&(y.pathname+="/"),y}var oa=r=>r.join("/").replace(/\/\/+/g,"/"),wg=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Cg=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,jg=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function Ng(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function Tg(r){return r.map(o=>o.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Ph=["POST","PUT","PATCH","DELETE"];new Set(Ph);var zg=["GET",...Ph];new Set(zg);var Kl=T.createContext(null);Kl.displayName="DataRouter";var Cr=T.createContext(null);Cr.displayName="DataRouterState";T.createContext(!1);var em=T.createContext({isTransitioning:!1});em.displayName="ViewTransition";var Og=T.createContext(new Map);Og.displayName="Fetchers";var Dg=T.createContext(null);Dg.displayName="Await";var Bt=T.createContext(null);Bt.displayName="Navigation";var Wn=T.createContext(null);Wn.displayName="Location";var Yt=T.createContext({outlet:null,matches:[],isDataRoute:!1});Yt.displayName="Route";var mu=T.createContext(null);mu.displayName="RouteError";function Mg(r,{relative:o}={}){Oe($n(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:u}=T.useContext(Bt),{hash:f,pathname:m,search:p}=In(r,{relative:o}),v=m;return c!=="/"&&(v=m==="/"?c:oa([c,m])),u.createHref({pathname:v,search:p,hash:f})}function $n(){return T.useContext(Wn)!=null}function ka(){return Oe($n(),"useLocation() may be used only in the context of a <Router> component."),T.useContext(Wn).location}var tm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function am(r){T.useContext(Bt).static||T.useLayoutEffect(r)}function Jl(){let{isDataRoute:r}=T.useContext(Yt);return r?Xg():Rg()}function Rg(){Oe($n(),"useNavigate() may be used only in the context of a <Router> component.");let r=T.useContext(Kl),{basename:o,navigator:c}=T.useContext(Bt),{matches:u}=T.useContext(Yt),{pathname:f}=ka(),m=JSON.stringify($h(u)),p=T.useRef(!1);return am(()=>{p.current=!0}),T.useCallback((y,g={})=>{if(Dt(p.current,tm),!p.current)return;if(typeof y=="number"){c.go(y);return}let A=Ih(y,JSON.parse(m),f,g.relative==="path");r==null&&o!=="/"&&(A.pathname=A.pathname==="/"?o:oa([o,A.pathname])),(g.replace?c.replace:c.push)(A,g.state,g)},[o,c,m,f,r])}T.createContext(null);function lm(){let{matches:r}=T.useContext(Yt),o=r[r.length-1];return o?o.params:{}}function In(r,{relative:o}={}){let{matches:c}=T.useContext(Yt),{pathname:u}=ka(),f=JSON.stringify($h(c));return T.useMemo(()=>Ih(r,JSON.parse(f),u,o==="path"),[r,f,u,o])}function _g(r,o){return nm(r,o)}function nm(r,o,c,u,f){Oe($n(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:m}=T.useContext(Bt),{matches:p}=T.useContext(Yt),v=p[p.length-1],y=v?v.params:{},g=v?v.pathname:"/",A=v?v.pathnameBase:"/",x=v&&v.route;{let V=x&&x.path||"";im(g,!x||V.endsWith("*")||V.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${V}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${V}"> to <Route path="${V==="/"?"*":`${V}/*`}">.`)}let z=ka(),U;if(o){let V=typeof o=="string"?Fl(o):o;Oe(A==="/"||V.pathname?.startsWith(A),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${A}" but pathname "${V.pathname}" was given in the \`location\` prop.`),U=V}else U=z;let k=U.pathname||"/",Y=k;if(A!=="/"){let V=A.replace(/^\//,"").split("/");Y="/"+k.replace(/^\//,"").split("/").slice(V.length).join("/")}let H=Kh(r,{pathname:Y});Dt(x||H!=null,`No routes matched location "${U.pathname}${U.search}${U.hash}" `),Dt(H==null||H[H.length-1].route.element!==void 0||H[H.length-1].route.Component!==void 0||H[H.length-1].route.lazy!==void 0,`Matched leaf route at location "${U.pathname}${U.search}${U.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let G=Lg(H&&H.map(V=>Object.assign({},V,{params:Object.assign({},y,V.params),pathname:oa([A,m.encodeLocation?m.encodeLocation(V.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:V.pathname]),pathnameBase:V.pathnameBase==="/"?A:oa([A,m.encodeLocation?m.encodeLocation(V.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:V.pathnameBase])})),p,c,u,f);return o&&G?T.createElement(Wn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...U},navigationType:"POP"}},G):G}function Bg(){let r=Qg(),o=Ng(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),c=r instanceof Error?r.stack:null,u="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:u},m={padding:"2px 4px",backgroundColor:u},p=null;return console.error("Error handled by React Router default ErrorBoundary:",r),p=T.createElement(T.Fragment,null,T.createElement("p",null,"💿 Hey developer 👋"),T.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",T.createElement("code",{style:m},"ErrorBoundary")," or"," ",T.createElement("code",{style:m},"errorElement")," prop on your route.")),T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},o),c?T.createElement("pre",{style:f},c):null,p)}var Ug=T.createElement(Bg,null),kg=class extends T.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,o){return o.location!==r.location||o.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:o.error,location:o.location,revalidation:r.revalidation||o.revalidation}}componentDidCatch(r,o){this.props.onError?this.props.onError(r,o):console.error("React Router caught the following error during render",r)}render(){return this.state.error!==void 0?T.createElement(Yt.Provider,{value:this.props.routeContext},T.createElement(mu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Hg({routeContext:r,match:o,children:c}){let u=T.useContext(Kl);return u&&u.static&&u.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=o.route.id),T.createElement(Yt.Provider,{value:r},c)}function Lg(r,o=[],c=null,u=null,f=null){if(r==null){if(!c)return null;if(c.errors)r=c.matches;else if(o.length===0&&!c.initialized&&c.matches.length>0)r=c.matches;else return null}let m=r,p=c?.errors;if(p!=null){let A=m.findIndex(x=>x.route.id&&p?.[x.route.id]!==void 0);Oe(A>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),m=m.slice(0,Math.min(m.length,A+1))}let v=!1,y=-1;if(c)for(let A=0;A<m.length;A++){let x=m[A];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(y=A),x.route.id){let{loaderData:z,errors:U}=c,k=x.route.loader&&!z.hasOwnProperty(x.route.id)&&(!U||U[x.route.id]===void 0);if(x.route.lazy||k){v=!0,y>=0?m=m.slice(0,y+1):m=[m[0]];break}}}let g=c&&u?(A,x)=>{u(A,{location:c.location,params:c.matches?.[0]?.params??{},unstable_pattern:Tg(c.matches),errorInfo:x})}:void 0;return m.reduceRight((A,x,z)=>{let U,k=!1,Y=null,H=null;c&&(U=p&&x.route.id?p[x.route.id]:void 0,Y=x.route.errorElement||Ug,v&&(y<0&&z===0?(im("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),k=!0,H=null):y===z&&(k=!0,H=x.route.hydrateFallbackElement||null)));let G=o.concat(m.slice(0,z+1)),V=()=>{let X;return U?X=Y:k?X=H:x.route.Component?X=T.createElement(x.route.Component,null):x.route.element?X=x.route.element:X=A,T.createElement(Hg,{match:x,routeContext:{outlet:A,matches:G,isDataRoute:c!=null},children:X})};return c&&(x.route.ErrorBoundary||x.route.errorElement||z===0)?T.createElement(kg,{location:c.location,revalidation:c.revalidation,component:Y,error:U,children:V(),routeContext:{outlet:null,matches:G,isDataRoute:!0},onError:g}):V()},null)}function pu(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function qg(r){let o=T.useContext(Kl);return Oe(o,pu(r)),o}function Yg(r){let o=T.useContext(Cr);return Oe(o,pu(r)),o}function Gg(r){let o=T.useContext(Yt);return Oe(o,pu(r)),o}function gu(r){let o=Gg(r),c=o.matches[o.matches.length-1];return Oe(c.route.id,`${r} can only be used on routes that contain a unique "id"`),c.route.id}function Vg(){return gu("useRouteId")}function Qg(){let r=T.useContext(mu),o=Yg("useRouteError"),c=gu("useRouteError");return r!==void 0?r:o.errors?.[c]}function Xg(){let{router:r}=qg("useNavigate"),o=gu("useNavigate"),c=T.useRef(!1);return am(()=>{c.current=!0}),T.useCallback(async(f,m={})=>{Dt(c.current,tm),c.current&&(typeof f=="number"?await r.navigate(f):await r.navigate(f,{fromRouteId:o,...m}))},[r,o])}var kh={};function im(r,o,c){!o&&!kh[r]&&(kh[r]=!0,Dt(!1,c))}T.memo(Zg);function Zg({routes:r,future:o,state:c,unstable_onError:u}){return nm(r,void 0,c,u,o)}function ra(r){Oe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Fg({basename:r="/",children:o=null,location:c,navigationType:u="POP",navigator:f,static:m=!1,unstable_useTransitions:p}){Oe(!$n(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let v=r.replace(/^\/*/,"/"),y=T.useMemo(()=>({basename:v,navigator:f,static:m,unstable_useTransitions:p,future:{}}),[v,f,m,p]);typeof c=="string"&&(c=Fl(c));let{pathname:g="/",search:A="",hash:x="",state:z=null,key:U="default"}=c,k=T.useMemo(()=>{let Y=sa(g,v);return Y==null?null:{location:{pathname:Y,search:A,hash:x,state:z,key:U},navigationType:u}},[v,g,A,x,z,U,u]);return Dt(k!=null,`<Router basename="${v}"> is not able to match the URL "${g}${A}${x}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:T.createElement(Bt.Provider,{value:y},T.createElement(Wn.Provider,{children:o,value:k}))}function Kg({children:r,location:o}){return _g(iu(r),o)}function iu(r,o=[]){let c=[];return T.Children.forEach(r,(u,f)=>{if(!T.isValidElement(u))return;let m=[...o,f];if(u.type===T.Fragment){c.push.apply(c,iu(u.props.children,m));return}Oe(u.type===ra,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Oe(!u.props.index||!u.props.children,"An index route cannot have child routes.");let p={id:u.props.id||m.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(p.children=iu(u.props.children,m)),c.push(p)}),c}var xr="get",Sr="application/x-www-form-urlencoded";function jr(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function Jg(r){return jr(r)&&r.tagName.toLowerCase()==="button"}function Wg(r){return jr(r)&&r.tagName.toLowerCase()==="form"}function $g(r){return jr(r)&&r.tagName.toLowerCase()==="input"}function Ig(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Pg(r,o){return r.button===0&&(!o||o==="_self")&&!Ig(r)}function ru(r=""){return new URLSearchParams(typeof r=="string"||Array.isArray(r)||r instanceof URLSearchParams?r:Object.keys(r).reduce((o,c)=>{let u=r[c];return o.concat(Array.isArray(u)?u.map(f=>[c,f]):[[c,u]])},[]))}function ey(r,o){let c=ru(r);return o&&o.forEach((u,f)=>{c.has(f)||o.getAll(f).forEach(m=>{c.append(f,m)})}),c}var yr=null;function ty(){if(yr===null)try{new FormData(document.createElement("form"),0),yr=!1}catch{yr=!0}return yr}var ay=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function tu(r){return r!=null&&!ay.has(r)?(Dt(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Sr}"`),null):r}function ly(r,o){let c,u,f,m,p;if(Wg(r)){let v=r.getAttribute("action");u=v?sa(v,o):null,c=r.getAttribute("method")||xr,f=tu(r.getAttribute("enctype"))||Sr,m=new FormData(r)}else if(Jg(r)||$g(r)&&(r.type==="submit"||r.type==="image")){let v=r.form;if(v==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=r.getAttribute("formaction")||v.getAttribute("action");if(u=y?sa(y,o):null,c=r.getAttribute("formmethod")||v.getAttribute("method")||xr,f=tu(r.getAttribute("formenctype"))||tu(v.getAttribute("enctype"))||Sr,m=new FormData(v,r),!ty()){let{name:g,type:A,value:x}=r;if(A==="image"){let z=g?`${g}.`:"";m.append(`${z}x`,"0"),m.append(`${z}y`,"0")}else g&&m.append(g,x)}}else{if(jr(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=xr,u=null,f=Sr,p=r}return m&&f==="text/plain"&&(p=m,m=void 0),{action:u,method:c.toLowerCase(),encType:f,formData:m,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function yu(r,o){if(r===!1||r===null||typeof r>"u")throw new Error(o)}function ny(r,o,c){let u=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return u.pathname==="/"?u.pathname=`_root.${c}`:o&&sa(u.pathname,o)==="/"?u.pathname=`${o.replace(/\/$/,"")}/_root.${c}`:u.pathname=`${u.pathname.replace(/\/$/,"")}.${c}`,u}async function iy(r,o){if(r.id in o)return o[r.id];try{let c=await import(r.module);return o[r.id]=c,c}catch(c){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ry(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function oy(r,o,c){let u=await Promise.all(r.map(async f=>{let m=o.routes[f.route.id];if(m){let p=await iy(m,c);return p.links?p.links():[]}return[]}));return dy(u.flat(1).filter(ry).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function Hh(r,o,c,u,f,m){let p=(y,g)=>c[g]?y.route.id!==c[g].route.id:!0,v=(y,g)=>c[g].pathname!==y.pathname||c[g].route.path?.endsWith("*")&&c[g].params["*"]!==y.params["*"];return m==="assets"?o.filter((y,g)=>p(y,g)||v(y,g)):m==="data"?o.filter((y,g)=>{let A=u.routes[y.route.id];if(!A||!A.hasLoader)return!1;if(p(y,g)||v(y,g))return!0;if(y.route.shouldRevalidate){let x=y.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:c[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function sy(r,o,{includeHydrateFallback:c}={}){return uy(r.map(u=>{let f=o.routes[u.route.id];if(!f)return[];let m=[f.module];return f.clientActionModule&&(m=m.concat(f.clientActionModule)),f.clientLoaderModule&&(m=m.concat(f.clientLoaderModule)),c&&f.hydrateFallbackModule&&(m=m.concat(f.hydrateFallbackModule)),f.imports&&(m=m.concat(f.imports)),m}).flat(1))}function uy(r){return[...new Set(r)]}function cy(r){let o={},c=Object.keys(r).sort();for(let u of c)o[u]=r[u];return o}function dy(r,o){let c=new Set;return new Set(o),r.reduce((u,f)=>{let m=JSON.stringify(cy(f));return c.has(m)||(c.add(m),u.push({key:m,link:f})),u},[])}function rm(){let r=T.useContext(Kl);return yu(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function fy(){let r=T.useContext(Cr);return yu(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var vu=T.createContext(void 0);vu.displayName="FrameworkContext";function om(){let r=T.useContext(vu);return yu(r,"You must render this element inside a <HydratedRouter> element"),r}function hy(r,o){let c=T.useContext(vu),[u,f]=T.useState(!1),[m,p]=T.useState(!1),{onFocus:v,onBlur:y,onMouseEnter:g,onMouseLeave:A,onTouchStart:x}=o,z=T.useRef(null);T.useEffect(()=>{if(r==="render"&&p(!0),r==="viewport"){let Y=G=>{G.forEach(V=>{p(V.isIntersecting)})},H=new IntersectionObserver(Y,{threshold:.5});return z.current&&H.observe(z.current),()=>{H.disconnect()}}},[r]),T.useEffect(()=>{if(u){let Y=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(Y)}}},[u]);let U=()=>{f(!0)},k=()=>{f(!1),p(!1)};return c?r!=="intent"?[m,z,{}]:[m,z,{onFocus:Fn(v,U),onBlur:Fn(y,k),onMouseEnter:Fn(g,U),onMouseLeave:Fn(A,k),onTouchStart:Fn(x,U)}]:[!1,z,{}]}function Fn(r,o){return c=>{r&&r(c),c.defaultPrevented||o(c)}}function my({page:r,...o}){let{router:c}=rm(),u=T.useMemo(()=>Kh(c.routes,r,c.basename),[c.routes,r,c.basename]);return u?T.createElement(gy,{page:r,matches:u,...o}):null}function py(r){let{manifest:o,routeModules:c}=om(),[u,f]=T.useState([]);return T.useEffect(()=>{let m=!1;return oy(r,o,c).then(p=>{m||f(p)}),()=>{m=!0}},[r,o,c]),u}function gy({page:r,matches:o,...c}){let u=ka(),{manifest:f,routeModules:m}=om(),{basename:p}=rm(),{loaderData:v,matches:y}=fy(),g=T.useMemo(()=>Hh(r,o,y,f,u,"data"),[r,o,y,f,u]),A=T.useMemo(()=>Hh(r,o,y,f,u,"assets"),[r,o,y,f,u]),x=T.useMemo(()=>{if(r===u.pathname+u.search+u.hash)return[];let k=new Set,Y=!1;if(o.forEach(G=>{let V=f.routes[G.route.id];!V||!V.hasLoader||(!g.some(X=>X.route.id===G.route.id)&&G.route.id in v&&m[G.route.id]?.shouldRevalidate||V.hasClientLoader?Y=!0:k.add(G.route.id))}),k.size===0)return[];let H=ny(r,p,"data");return Y&&k.size>0&&H.searchParams.set("_routes",o.filter(G=>k.has(G.route.id)).map(G=>G.route.id).join(",")),[H.pathname+H.search]},[p,v,u,f,g,o,r,m]),z=T.useMemo(()=>sy(A,f),[A,f]),U=py(A);return T.createElement(T.Fragment,null,x.map(k=>T.createElement("link",{key:k,rel:"prefetch",as:"fetch",href:k,...c})),z.map(k=>T.createElement("link",{key:k,rel:"modulepreload",href:k,...c})),U.map(({key:k,link:Y})=>T.createElement("link",{key:k,nonce:c.nonce,...Y})))}function yy(...r){return o=>{r.forEach(c=>{typeof c=="function"?c(o):c!=null&&(c.current=o)})}}var sm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{sm&&(window.__reactRouterVersion="7.10.1")}catch{}function vy({basename:r,children:o,unstable_useTransitions:c,window:u}){let f=T.useRef();f.current==null&&(f.current=lg({window:u,v5Compat:!0}));let m=f.current,[p,v]=T.useState({action:m.action,location:m.location}),y=T.useCallback(g=>{c===!1?v(g):T.startTransition(()=>v(g))},[c]);return T.useLayoutEffect(()=>m.listen(y),[m,y]),T.createElement(Fg,{basename:r,children:o,location:p.location,navigationType:p.action,navigator:m,unstable_useTransitions:c===!0})}var um=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fe=T.forwardRef(function({onClick:o,discover:c="render",prefetch:u="none",relative:f,reloadDocument:m,replace:p,state:v,target:y,to:g,preventScrollReset:A,viewTransition:x,...z},U){let{basename:k,unstable_useTransitions:Y}=T.useContext(Bt),H=typeof g=="string"&&um.test(g),G,V=!1;if(typeof g=="string"&&H&&(G=g,sm))try{let Ye=new URL(window.location.href),Ge=g.startsWith("//")?new URL(Ye.protocol+g):new URL(g),Te=sa(Ge.pathname,k);Ge.origin===Ye.origin&&Te!=null?g=Te+Ge.search+Ge.hash:V=!0}catch{Dt(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let X=Mg(g,{relative:f}),[le,ye,fe]=hy(u,z),K=Ey(g,{replace:p,state:v,target:y,preventScrollReset:A,relative:f,viewTransition:x,unstable_useTransitions:Y});function Ee(Ye){o&&o(Ye),Ye.defaultPrevented||K(Ye)}let Ce=T.createElement("a",{...z,...fe,href:G||X,onClick:V||m?o:Ee,ref:yy(U,ye),target:y,"data-discover":!H&&c==="render"?"true":void 0});return le&&!H?T.createElement(T.Fragment,null,Ce,T.createElement(my,{page:X})):Ce});Fe.displayName="Link";var by=T.forwardRef(function({"aria-current":o="page",caseSensitive:c=!1,className:u="",end:f=!1,style:m,to:p,viewTransition:v,children:y,...g},A){let x=In(p,{relative:g.relative}),z=ka(),U=T.useContext(Cr),{navigator:k,basename:Y}=T.useContext(Bt),H=U!=null&&Ty(x)&&v===!0,G=k.encodeLocation?k.encodeLocation(x).pathname:x.pathname,V=z.pathname,X=U&&U.navigation&&U.navigation.location?U.navigation.location.pathname:null;c||(V=V.toLowerCase(),X=X?X.toLowerCase():null,G=G.toLowerCase()),X&&Y&&(X=sa(X,Y)||X);const le=G!=="/"&&G.endsWith("/")?G.length-1:G.length;let ye=V===G||!f&&V.startsWith(G)&&V.charAt(le)==="/",fe=X!=null&&(X===G||!f&&X.startsWith(G)&&X.charAt(G.length)==="/"),K={isActive:ye,isPending:fe,isTransitioning:H},Ee=ye?o:void 0,Ce;typeof u=="function"?Ce=u(K):Ce=[u,ye?"active":null,fe?"pending":null,H?"transitioning":null].filter(Boolean).join(" ");let Ye=typeof m=="function"?m(K):m;return T.createElement(Fe,{...g,"aria-current":Ee,className:Ce,ref:A,style:Ye,to:p,viewTransition:v},typeof y=="function"?y(K):y)});by.displayName="NavLink";var xy=T.forwardRef(({discover:r="render",fetcherKey:o,navigate:c,reloadDocument:u,replace:f,state:m,method:p=xr,action:v,onSubmit:y,relative:g,preventScrollReset:A,viewTransition:x,...z},U)=>{let{unstable_useTransitions:k}=T.useContext(Bt),Y=jy(),H=Ny(v,{relative:g}),G=p.toLowerCase()==="get"?"get":"post",V=typeof v=="string"&&um.test(v),X=le=>{if(y&&y(le),le.defaultPrevented)return;le.preventDefault();let ye=le.nativeEvent.submitter,fe=ye?.getAttribute("formmethod")||p,K=()=>Y(ye||le.currentTarget,{fetcherKey:o,method:fe,navigate:c,replace:f,state:m,relative:g,preventScrollReset:A,viewTransition:x});k&&c!==!1?T.startTransition(()=>K()):K()};return T.createElement("form",{ref:U,method:G,action:H,onSubmit:u?y:X,...z,"data-discover":!V&&r==="render"?"true":void 0})});xy.displayName="Form";function Sy(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function cm(r){let o=T.useContext(Kl);return Oe(o,Sy(r)),o}function Ey(r,{target:o,replace:c,state:u,preventScrollReset:f,relative:m,viewTransition:p,unstable_useTransitions:v}={}){let y=Jl(),g=ka(),A=In(r,{relative:m});return T.useCallback(x=>{if(Pg(x,o)){x.preventDefault();let z=c!==void 0?c:Jn(g)===Jn(A),U=()=>y(r,{replace:z,state:u,preventScrollReset:f,relative:m,viewTransition:p});v?T.startTransition(()=>U()):U()}},[g,y,A,c,u,o,r,f,m,p,v])}function Ay(r){Dt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let o=T.useRef(ru(r)),c=T.useRef(!1),u=ka(),f=T.useMemo(()=>ey(u.search,c.current?null:o.current),[u.search]),m=Jl(),p=T.useCallback((v,y)=>{const g=ru(typeof v=="function"?v(new URLSearchParams(f)):v);c.current=!0,m("?"+g,y)},[m,f]);return[f,p]}var wy=0,Cy=()=>`__${String(++wy)}__`;function jy(){let{router:r}=cm("useSubmit"),{basename:o}=T.useContext(Bt),c=Vg(),u=r.fetch,f=r.navigate;return T.useCallback(async(m,p={})=>{let{action:v,method:y,encType:g,formData:A,body:x}=ly(m,o);if(p.navigate===!1){let z=p.fetcherKey||Cy();await u(z,c,p.action||v,{preventScrollReset:p.preventScrollReset,formData:A,body:x,formMethod:p.method||y,formEncType:p.encType||g,flushSync:p.flushSync})}else await f(p.action||v,{preventScrollReset:p.preventScrollReset,formData:A,body:x,formMethod:p.method||y,formEncType:p.encType||g,replace:p.replace,state:p.state,fromRouteId:c,flushSync:p.flushSync,viewTransition:p.viewTransition})},[u,f,o,c])}function Ny(r,{relative:o}={}){let{basename:c}=T.useContext(Bt),u=T.useContext(Yt);Oe(u,"useFormAction must be used inside a RouteContext");let[f]=u.matches.slice(-1),m={...In(r||".",{relative:o})},p=ka();if(r==null){m.search=p.search;let v=new URLSearchParams(m.search),y=v.getAll("index");if(y.some(A=>A==="")){v.delete("index"),y.filter(x=>x).forEach(x=>v.append("index",x));let A=v.toString();m.search=A?`?${A}`:""}}return(!r||r===".")&&f.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(m.pathname=m.pathname==="/"?c:oa([c,m.pathname])),Jn(m)}function Ty(r,{relative:o}={}){let c=T.useContext(em);Oe(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=cm("useViewTransitionState"),f=In(r,{relative:o});if(!c.isTransitioning)return!1;let m=sa(c.currentLocation.pathname,u)||c.currentLocation.pathname,p=sa(c.nextLocation.pathname,u)||c.nextLocation.pathname;return Er(f.pathname,p)!=null||Er(f.pathname,m)!=null}function ua(r){return Array.isArray?Array.isArray(r):hm(r)==="[object Array]"}function zy(r){if(typeof r=="string")return r;let o=r+"";return o=="0"&&1/r==-1/0?"-0":o}function Oy(r){return r==null?"":zy(r)}function qt(r){return typeof r=="string"}function dm(r){return typeof r=="number"}function Dy(r){return r===!0||r===!1||My(r)&&hm(r)=="[object Boolean]"}function fm(r){return typeof r=="object"}function My(r){return fm(r)&&r!==null}function xt(r){return r!=null}function au(r){return!r.trim().length}function hm(r){return r==null?r===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(r)}const Ry="Incorrect 'index' type",_y=r=>`Invalid value for key ${r}`,By=r=>`Pattern length exceeds max of ${r}.`,Uy=r=>`Missing ${r} property in key`,ky=r=>`Property 'weight' in key '${r}' must be a positive integer`,Lh=Object.prototype.hasOwnProperty;class Hy{constructor(o){this._keys=[],this._keyMap={};let c=0;o.forEach(u=>{let f=mm(u);this._keys.push(f),this._keyMap[f.id]=f,c+=f.weight}),this._keys.forEach(u=>{u.weight/=c})}get(o){return this._keyMap[o]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function mm(r){let o=null,c=null,u=null,f=1,m=null;if(qt(r)||ua(r))u=r,o=qh(r),c=ou(r);else{if(!Lh.call(r,"name"))throw new Error(Uy("name"));const p=r.name;if(u=p,Lh.call(r,"weight")&&(f=r.weight,f<=0))throw new Error(ky(p));o=qh(p),c=ou(p),m=r.getFn}return{path:o,id:c,weight:f,src:u,getFn:m}}function qh(r){return ua(r)?r:r.split(".")}function ou(r){return ua(r)?r.join("."):r}function Ly(r,o){let c=[],u=!1;const f=(m,p,v)=>{if(xt(m))if(!p[v])c.push(m);else{let y=p[v];const g=m[y];if(!xt(g))return;if(v===p.length-1&&(qt(g)||dm(g)||Dy(g)))c.push(Oy(g));else if(ua(g)){u=!0;for(let A=0,x=g.length;A<x;A+=1)f(g[A],p,v+1)}else p.length&&f(g,p,v+1)}};return f(r,qt(o)?o.split("."):o,0),u?c:c[0]}const qy={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Yy={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(r,o)=>r.score===o.score?r.idx<o.idx?-1:1:r.score<o.score?-1:1},Gy={location:0,threshold:.6,distance:100},Vy={useExtendedSearch:!1,getFn:Ly,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var I={...Yy,...qy,...Gy,...Vy};const Qy=/[^ ]+/g;function Xy(r=1,o=3){const c=new Map,u=Math.pow(10,o);return{get(f){const m=f.match(Qy).length;if(c.has(m))return c.get(m);const p=1/Math.pow(m,.5*r),v=parseFloat(Math.round(p*u)/u);return c.set(m,v),v},clear(){c.clear()}}}class bu{constructor({getFn:o=I.getFn,fieldNormWeight:c=I.fieldNormWeight}={}){this.norm=Xy(c,3),this.getFn=o,this.isCreated=!1,this.setIndexRecords()}setSources(o=[]){this.docs=o}setIndexRecords(o=[]){this.records=o}setKeys(o=[]){this.keys=o,this._keysMap={},o.forEach((c,u)=>{this._keysMap[c.id]=u})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,qt(this.docs[0])?this.docs.forEach((o,c)=>{this._addString(o,c)}):this.docs.forEach((o,c)=>{this._addObject(o,c)}),this.norm.clear())}add(o){const c=this.size();qt(o)?this._addString(o,c):this._addObject(o,c)}removeAt(o){this.records.splice(o,1);for(let c=o,u=this.size();c<u;c+=1)this.records[c].i-=1}getValueForItemAtKeyId(o,c){return o[this._keysMap[c]]}size(){return this.records.length}_addString(o,c){if(!xt(o)||au(o))return;let u={v:o,i:c,n:this.norm.get(o)};this.records.push(u)}_addObject(o,c){let u={i:c,$:{}};this.keys.forEach((f,m)=>{let p=f.getFn?f.getFn(o):this.getFn(o,f.path);if(xt(p)){if(ua(p)){let v=[];const y=[{nestedArrIndex:-1,value:p}];for(;y.length;){const{nestedArrIndex:g,value:A}=y.pop();if(xt(A))if(qt(A)&&!au(A)){let x={v:A,i:g,n:this.norm.get(A)};v.push(x)}else ua(A)&&A.forEach((x,z)=>{y.push({nestedArrIndex:z,value:x})})}u.$[m]=v}else if(qt(p)&&!au(p)){let v={v:p,n:this.norm.get(p)};u.$[m]=v}}}),this.records.push(u)}toJSON(){return{keys:this.keys,records:this.records}}}function pm(r,o,{getFn:c=I.getFn,fieldNormWeight:u=I.fieldNormWeight}={}){const f=new bu({getFn:c,fieldNormWeight:u});return f.setKeys(r.map(mm)),f.setSources(o),f.create(),f}function Zy(r,{getFn:o=I.getFn,fieldNormWeight:c=I.fieldNormWeight}={}){const{keys:u,records:f}=r,m=new bu({getFn:o,fieldNormWeight:c});return m.setKeys(u),m.setIndexRecords(f),m}function vr(r,{errors:o=0,currentLocation:c=0,expectedLocation:u=0,distance:f=I.distance,ignoreLocation:m=I.ignoreLocation}={}){const p=o/r.length;if(m)return p;const v=Math.abs(u-c);return f?p+v/f:v?1:p}function Fy(r=[],o=I.minMatchCharLength){let c=[],u=-1,f=-1,m=0;for(let p=r.length;m<p;m+=1){let v=r[m];v&&u===-1?u=m:!v&&u!==-1&&(f=m-1,f-u+1>=o&&c.push([u,f]),u=-1)}return r[m-1]&&m-u>=o&&c.push([u,m-1]),c}const ol=32;function Ky(r,o,c,{location:u=I.location,distance:f=I.distance,threshold:m=I.threshold,findAllMatches:p=I.findAllMatches,minMatchCharLength:v=I.minMatchCharLength,includeMatches:y=I.includeMatches,ignoreLocation:g=I.ignoreLocation}={}){if(o.length>ol)throw new Error(By(ol));const A=o.length,x=r.length,z=Math.max(0,Math.min(u,x));let U=m,k=z;const Y=v>1||y,H=Y?Array(x):[];let G;for(;(G=r.indexOf(o,k))>-1;){let K=vr(o,{currentLocation:G,expectedLocation:z,distance:f,ignoreLocation:g});if(U=Math.min(K,U),k=G+A,Y){let Ee=0;for(;Ee<A;)H[G+Ee]=1,Ee+=1}}k=-1;let V=[],X=1,le=A+x;const ye=1<<A-1;for(let K=0;K<A;K+=1){let Ee=0,Ce=le;for(;Ee<Ce;)vr(o,{errors:K,currentLocation:z+Ce,expectedLocation:z,distance:f,ignoreLocation:g})<=U?Ee=Ce:le=Ce,Ce=Math.floor((le-Ee)/2+Ee);le=Ce;let Ye=Math.max(1,z-Ce+1),Ge=p?x:Math.min(z+Ce,x)+A,Te=Array(Ge+2);Te[Ge+1]=(1<<K)-1;for(let Re=Ge;Re>=Ye;Re-=1){let Pe=Re-1,M=c[r.charAt(Pe)];if(Y&&(H[Pe]=+!!M),Te[Re]=(Te[Re+1]<<1|1)&M,K&&(Te[Re]|=(V[Re+1]|V[Re])<<1|1|V[Re+1]),Te[Re]&ye&&(X=vr(o,{errors:K,currentLocation:Pe,expectedLocation:z,distance:f,ignoreLocation:g}),X<=U)){if(U=X,k=Pe,k<=z)break;Ye=Math.max(1,2*z-k)}}if(vr(o,{errors:K+1,currentLocation:z,expectedLocation:z,distance:f,ignoreLocation:g})>U)break;V=Te}const fe={isMatch:k>=0,score:Math.max(.001,X)};if(Y){const K=Fy(H,v);K.length?y&&(fe.indices=K):fe.isMatch=!1}return fe}function Jy(r){let o={};for(let c=0,u=r.length;c<u;c+=1){const f=r.charAt(c);o[f]=(o[f]||0)|1<<u-c-1}return o}const Ar=String.prototype.normalize?(r=>r.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,"")):(r=>r);class gm{constructor(o,{location:c=I.location,threshold:u=I.threshold,distance:f=I.distance,includeMatches:m=I.includeMatches,findAllMatches:p=I.findAllMatches,minMatchCharLength:v=I.minMatchCharLength,isCaseSensitive:y=I.isCaseSensitive,ignoreDiacritics:g=I.ignoreDiacritics,ignoreLocation:A=I.ignoreLocation}={}){if(this.options={location:c,threshold:u,distance:f,includeMatches:m,findAllMatches:p,minMatchCharLength:v,isCaseSensitive:y,ignoreDiacritics:g,ignoreLocation:A},o=y?o:o.toLowerCase(),o=g?Ar(o):o,this.pattern=o,this.chunks=[],!this.pattern.length)return;const x=(U,k)=>{this.chunks.push({pattern:U,alphabet:Jy(U),startIndex:k})},z=this.pattern.length;if(z>ol){let U=0;const k=z%ol,Y=z-k;for(;U<Y;)x(this.pattern.substr(U,ol),U),U+=ol;if(k){const H=z-ol;x(this.pattern.substr(H),H)}}else x(this.pattern,0)}searchIn(o){const{isCaseSensitive:c,ignoreDiacritics:u,includeMatches:f}=this.options;if(o=c?o:o.toLowerCase(),o=u?Ar(o):o,this.pattern===o){let Y={isMatch:!0,score:0};return f&&(Y.indices=[[0,o.length-1]]),Y}const{location:m,distance:p,threshold:v,findAllMatches:y,minMatchCharLength:g,ignoreLocation:A}=this.options;let x=[],z=0,U=!1;this.chunks.forEach(({pattern:Y,alphabet:H,startIndex:G})=>{const{isMatch:V,score:X,indices:le}=Ky(o,Y,H,{location:m+G,distance:p,threshold:v,findAllMatches:y,minMatchCharLength:g,includeMatches:f,ignoreLocation:A});V&&(U=!0),z+=X,V&&le&&(x=[...x,...le])});let k={isMatch:U,score:U?z/this.chunks.length:1};return U&&f&&(k.indices=x),k}}class Ha{constructor(o){this.pattern=o}static isMultiMatch(o){return Yh(o,this.multiRegex)}static isSingleMatch(o){return Yh(o,this.singleRegex)}search(){}}function Yh(r,o){const c=r.match(o);return c?c[1]:null}class Wy extends Ha{constructor(o){super(o)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(o){const c=o===this.pattern;return{isMatch:c,score:c?0:1,indices:[0,this.pattern.length-1]}}}class $y extends Ha{constructor(o){super(o)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(o){const u=o.indexOf(this.pattern)===-1;return{isMatch:u,score:u?0:1,indices:[0,o.length-1]}}}class Iy extends Ha{constructor(o){super(o)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(o){const c=o.startsWith(this.pattern);return{isMatch:c,score:c?0:1,indices:[0,this.pattern.length-1]}}}class Py extends Ha{constructor(o){super(o)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(o){const c=!o.startsWith(this.pattern);return{isMatch:c,score:c?0:1,indices:[0,o.length-1]}}}class ev extends Ha{constructor(o){super(o)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(o){const c=o.endsWith(this.pattern);return{isMatch:c,score:c?0:1,indices:[o.length-this.pattern.length,o.length-1]}}}class tv extends Ha{constructor(o){super(o)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(o){const c=!o.endsWith(this.pattern);return{isMatch:c,score:c?0:1,indices:[0,o.length-1]}}}class ym extends Ha{constructor(o,{location:c=I.location,threshold:u=I.threshold,distance:f=I.distance,includeMatches:m=I.includeMatches,findAllMatches:p=I.findAllMatches,minMatchCharLength:v=I.minMatchCharLength,isCaseSensitive:y=I.isCaseSensitive,ignoreDiacritics:g=I.ignoreDiacritics,ignoreLocation:A=I.ignoreLocation}={}){super(o),this._bitapSearch=new gm(o,{location:c,threshold:u,distance:f,includeMatches:m,findAllMatches:p,minMatchCharLength:v,isCaseSensitive:y,ignoreDiacritics:g,ignoreLocation:A})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(o){return this._bitapSearch.searchIn(o)}}class vm extends Ha{constructor(o){super(o)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(o){let c=0,u;const f=[],m=this.pattern.length;for(;(u=o.indexOf(this.pattern,c))>-1;)c=u+m,f.push([u,c-1]);const p=!!f.length;return{isMatch:p,score:p?0:1,indices:f}}}const su=[Wy,vm,Iy,Py,tv,ev,$y,ym],Gh=su.length,av=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,lv="|";function nv(r,o={}){return r.split(lv).map(c=>{let u=c.trim().split(av).filter(m=>m&&!!m.trim()),f=[];for(let m=0,p=u.length;m<p;m+=1){const v=u[m];let y=!1,g=-1;for(;!y&&++g<Gh;){const A=su[g];let x=A.isMultiMatch(v);x&&(f.push(new A(x,o)),y=!0)}if(!y)for(g=-1;++g<Gh;){const A=su[g];let x=A.isSingleMatch(v);if(x){f.push(new A(x,o));break}}}return f})}const iv=new Set([ym.type,vm.type]);class rv{constructor(o,{isCaseSensitive:c=I.isCaseSensitive,ignoreDiacritics:u=I.ignoreDiacritics,includeMatches:f=I.includeMatches,minMatchCharLength:m=I.minMatchCharLength,ignoreLocation:p=I.ignoreLocation,findAllMatches:v=I.findAllMatches,location:y=I.location,threshold:g=I.threshold,distance:A=I.distance}={}){this.query=null,this.options={isCaseSensitive:c,ignoreDiacritics:u,includeMatches:f,minMatchCharLength:m,findAllMatches:v,ignoreLocation:p,location:y,threshold:g,distance:A},o=c?o:o.toLowerCase(),o=u?Ar(o):o,this.pattern=o,this.query=nv(this.pattern,this.options)}static condition(o,c){return c.useExtendedSearch}searchIn(o){const c=this.query;if(!c)return{isMatch:!1,score:1};const{includeMatches:u,isCaseSensitive:f,ignoreDiacritics:m}=this.options;o=f?o:o.toLowerCase(),o=m?Ar(o):o;let p=0,v=[],y=0;for(let g=0,A=c.length;g<A;g+=1){const x=c[g];v.length=0,p=0;for(let z=0,U=x.length;z<U;z+=1){const k=x[z],{isMatch:Y,indices:H,score:G}=k.search(o);if(Y){if(p+=1,y+=G,u){const V=k.constructor.type;iv.has(V)?v=[...v,...H]:v.push(H)}}else{y=0,p=0,v.length=0;break}}if(p){let z={isMatch:!0,score:y/p};return u&&(z.indices=v),z}}return{isMatch:!1,score:1}}}const uu=[];function ov(...r){uu.push(...r)}function cu(r,o){for(let c=0,u=uu.length;c<u;c+=1){let f=uu[c];if(f.condition(r,o))return new f(r,o)}return new gm(r,o)}const wr={AND:"$and",OR:"$or"},du={PATH:"$path",PATTERN:"$val"},fu=r=>!!(r[wr.AND]||r[wr.OR]),sv=r=>!!r[du.PATH],uv=r=>!ua(r)&&fm(r)&&!fu(r),Vh=r=>({[wr.AND]:Object.keys(r).map(o=>({[o]:r[o]}))});function bm(r,o,{auto:c=!0}={}){const u=f=>{let m=Object.keys(f);const p=sv(f);if(!p&&m.length>1&&!fu(f))return u(Vh(f));if(uv(f)){const y=p?f[du.PATH]:m[0],g=p?f[du.PATTERN]:f[y];if(!qt(g))throw new Error(_y(y));const A={keyId:ou(y),pattern:g};return c&&(A.searcher=cu(g,o)),A}let v={children:[],operator:m[0]};return m.forEach(y=>{const g=f[y];ua(g)&&g.forEach(A=>{v.children.push(u(A))})}),v};return fu(r)||(r=Vh(r)),u(r)}function cv(r,{ignoreFieldNorm:o=I.ignoreFieldNorm}){r.forEach(c=>{let u=1;c.matches.forEach(({key:f,norm:m,score:p})=>{const v=f?f.weight:null;u*=Math.pow(p===0&&v?Number.EPSILON:p,(v||1)*(o?1:m))}),c.score=u})}function dv(r,o){const c=r.matches;o.matches=[],xt(c)&&c.forEach(u=>{if(!xt(u.indices)||!u.indices.length)return;const{indices:f,value:m}=u;let p={indices:f,value:m};u.key&&(p.key=u.key.src),u.idx>-1&&(p.refIndex=u.idx),o.matches.push(p)})}function fv(r,o){o.score=r.score}function hv(r,o,{includeMatches:c=I.includeMatches,includeScore:u=I.includeScore}={}){const f=[];return c&&f.push(dv),u&&f.push(fv),r.map(m=>{const{idx:p}=m,v={item:o[p],refIndex:p};return f.length&&f.forEach(y=>{y(m,v)}),v})}class Wl{constructor(o,c={},u){this.options={...I,...c},this.options.useExtendedSearch,this._keyStore=new Hy(this.options.keys),this.setCollection(o,u)}setCollection(o,c){if(this._docs=o,c&&!(c instanceof bu))throw new Error(Ry);this._myIndex=c||pm(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(o){xt(o)&&(this._docs.push(o),this._myIndex.add(o))}remove(o=()=>!1){const c=[];for(let u=0,f=this._docs.length;u<f;u+=1){const m=this._docs[u];o(m,u)&&(this.removeAt(u),u-=1,f-=1,c.push(m))}return c}removeAt(o){this._docs.splice(o,1),this._myIndex.removeAt(o)}getIndex(){return this._myIndex}search(o,{limit:c=-1}={}){const{includeMatches:u,includeScore:f,shouldSort:m,sortFn:p,ignoreFieldNorm:v}=this.options;let y=qt(o)?qt(this._docs[0])?this._searchStringList(o):this._searchObjectList(o):this._searchLogical(o);return cv(y,{ignoreFieldNorm:v}),m&&y.sort(p),dm(c)&&c>-1&&(y=y.slice(0,c)),hv(y,this._docs,{includeMatches:u,includeScore:f})}_searchStringList(o){const c=cu(o,this.options),{records:u}=this._myIndex,f=[];return u.forEach(({v:m,i:p,n:v})=>{if(!xt(m))return;const{isMatch:y,score:g,indices:A}=c.searchIn(m);y&&f.push({item:m,idx:p,matches:[{score:g,value:m,norm:v,indices:A}]})}),f}_searchLogical(o){const c=bm(o,this.options),u=(v,y,g)=>{if(!v.children){const{keyId:x,searcher:z}=v,U=this._findMatches({key:this._keyStore.get(x),value:this._myIndex.getValueForItemAtKeyId(y,x),searcher:z});return U&&U.length?[{idx:g,item:y,matches:U}]:[]}const A=[];for(let x=0,z=v.children.length;x<z;x+=1){const U=v.children[x],k=u(U,y,g);if(k.length)A.push(...k);else if(v.operator===wr.AND)return[]}return A},f=this._myIndex.records,m={},p=[];return f.forEach(({$:v,i:y})=>{if(xt(v)){let g=u(c,v,y);g.length&&(m[y]||(m[y]={idx:y,item:v,matches:[]},p.push(m[y])),g.forEach(({matches:A})=>{m[y].matches.push(...A)}))}}),p}_searchObjectList(o){const c=cu(o,this.options),{keys:u,records:f}=this._myIndex,m=[];return f.forEach(({$:p,i:v})=>{if(!xt(p))return;let y=[];u.forEach((g,A)=>{y.push(...this._findMatches({key:g,value:p[A],searcher:c}))}),y.length&&m.push({idx:v,item:p,matches:y})}),m}_findMatches({key:o,value:c,searcher:u}){if(!xt(c))return[];let f=[];if(ua(c))c.forEach(({v:m,i:p,n:v})=>{if(!xt(m))return;const{isMatch:y,score:g,indices:A}=u.searchIn(m);y&&f.push({score:g,key:o,value:m,idx:p,norm:v,indices:A})});else{const{v:m,n:p}=c,{isMatch:v,score:y,indices:g}=u.searchIn(m);v&&f.push({score:y,key:o,value:m,norm:p,indices:g})}return f}}Wl.version="7.1.0";Wl.createIndex=pm;Wl.parseIndex=Zy;Wl.config=I;Wl.parseQuery=bm;ov(rv);const Ua=[{id:1,name:"Myntra",domain:"myntra.com",slug:"myntra-coupon-code",description:"Save on the latest fashion trends with verified Myntra coupons.",bestOffers:"Up to 80% Off",faqs:[{q:"How do I use Myntra coupons?",a:"Copy the code from Offerve and apply it at checkout on the Myntra app or website."},{q:"Does Myntra offer free shipping?",a:"Yes, focused on orders above a certain value or for Myntra Insider members."}]},{id:2,name:"Flipkart",domain:"flipkart.com",slug:"flipkart-coupon-code",description:"Get the best deals on electronics, mobiles, and fashion on Flipkart.",bestOffers:"Big Billion Day Offers",faqs:[{q:"Are there bank offers on Flipkart?",a:"Yes, Flipkart frequently partners with banks like HDFC, ICICI, and SBI for instant discounts."}]},{id:3,name:"Ajio",domain:"ajio.com",slug:"ajio-coupon-code",description:"Shop trendy fashion styles at unbeatable prices with Ajio coupons.",bestOffers:"Flat 50-90% Off",faqs:[{q:"What is the AjioMania sale?",a:"It's Ajio's biggest sale event with massive discounts across all categories."}]},{id:4,name:"Swiggy",domain:"swiggy.com",slug:"swiggy-coupon-code",description:"Order food online and save with exclusive Swiggy promo codes.",bestOffers:"60% Off on First Order",faqs:[{q:"Can I use multiple coupons on Swiggy?",a:"No, only one coupon code can be applied per order."}]},{id:5,name:"Zomato",domain:"zomato.com",slug:"zomato-coupon-code",description:"Hungry? Get tasty discounts on your Zomato food orders.",bestOffers:"Free Delivery + 50% Off",faqs:[]},{id:6,name:"Nykaa",domain:"nykaa.com",slug:"nykaa-coupon-code",description:"Beauty and wellness products at great prices with Nykaa offers.",bestOffers:"Pink Friday Sale Deals",faqs:[]},{id:7,name:"Tata Cliq",domain:"tatacliq.com",slug:"tata-cliq-coupon-code",description:"Luxury brands and electronics at discounted prices on Tata Cliq.",bestOffers:"15% Off with Bank Cards",faqs:[]},{id:8,name:"Cleartrip",domain:"cleartrip.com",slug:"cleartrip-coupon-code",description:"Book flights and hotels cheaper with Cleartrip coupons.",bestOffers:"Up to ₹5000 Off on Flights",faqs:[]},{id:9,name:"MakeMyTrip",domain:"makemytrip.com",slug:"makemytrip-coupon-code",description:"Plan your travel with the best offers on flights and hotels.",bestOffers:"Zero Cancellation Offers",faqs:[]},{id:10,name:"Oyo",domain:"oyorooms.com",slug:"oyo-coupon-code",description:"Affordable stays made even cheaper with Oyo coupons.",bestOffers:"Starting at ₹399",faqs:[]},{id:11,name:"Uber",domain:"uber.com",slug:"uber-coupon-code",description:"Save on your daily commute with Uber promo codes.",bestOffers:"50% Off 1st Ride",faqs:[]},{id:12,name:"Amazon",domain:"amazon.in",slug:"amazon-coupon-code",description:"Everything from A to Z at the best prices with Amazon deals.",bestOffers:"Great Indian Festival Deals",faqs:[]},{id:13,name:"Dominos",domain:"dominos.co.in",slug:"dominos-coupon-code",description:"Craving pizza? Use these codes for BOGO and discounts.",bestOffers:"Buy 1 Get 1 Free",faqs:[]},{id:14,name:"Pizza Hut",domain:"pizzahut.co.in",slug:"pizza-hut-coupon-code",description:"Delicious pizzas at slashed prices with Pizza Hut offers.",bestOffers:"Flat 50% Off",faqs:[]},{id:15,name:"KFC",domain:"kfc.co.in",slug:"kfc-coupon-code",description:"Finger lickin' good savings on KFC buckets and meals.",bestOffers:"Wednesday Buckets Offer",faqs:[]},{id:16,name:"BookMyShow",domain:"in.bookmyshow.com",slug:"bookmyshow-coupon-code",description:"Movie tickets and events with cashback and discounts.",bestOffers:"Buy 1 Get 1 Free (Cards)",faqs:[]},{id:17,name:"Adda247",domain:"adda247.com",slug:"adda247-coupon-code",description:"Prepare for government exams like Banking, SSC, Railways, and Teaching with affordable courses and test series from Adda247.",bestOffers:"Flat 17% to 77% Off",faqs:[{q:"How do I apply Adda247 promo codes?",a:"Select your desired course or pack, proceed to checkout, and look for the 'Have a Coupon Code' section. Enter the code and click Apply to get the discount."},{q:"Are the coupon codes verified?",a:"Yes, all coupons listed on Offerve are verified manually to ensuring they are working and valid for the respective courses."},{q:"How often are new offers added?",a:"We update our Adda247 coupons daily, checking for the latest seasonal sales, flash deals, and bank offers."}]},{id:18,name:"Unacademy",domain:"unacademy.com",slug:"unacademy-coupon-code",description:"Crack your dream exam with India's largest learning platform. Get live classes, structured batches, and mentorship for UPSC, IIT JEE, NEET, and more.",bestOffers:"20% Off on Plus & Iconic",faqs:[{q:"Where can I find the latest Unacademy referral codes?",a:"You can find the most recent and verified Unacademy referral codes right here on Offerve, updated daily for maximum savings."},{q:"Can I use codes for renewal?",a:"Most codes are for new subscriptions, but occasionally Unacademy releases offers for renewals. Check the coupon details for specific terms."},{q:"Is there a free trial available?",a:"Yes, Unacademy often provides a 7-day free trial for new users to experience the Plus platform before subscribing."}]},{id:19,name:"PW (Physics Wallah)",domain:"pw.live",slug:"pw-coupon-code",description:"Quality education at the most affordable prices. Physics Wallah offers comprehensive batches for JEE, NEET, UPSC, GATE, and more.",bestOffers:"Batches starting @ ₹999",faqs:[{q:"Does Physics Wallah offer discounts on batches?",a:"Yes, PW frequently runs offers on their popular batches like Yakeen, Lakshya, and Arjuna, especially during launch events and festivals."},{q:"How to use the coupon code on PW App?",a:"Go to the 'Batch' section, click on 'Buy Now', and enter the coupon code in the 'Apply Coupon' field before making the payment."},{q:"Are these codes applicable on offline centers?",a:"Generally, online codes are for app/website purchases. For offline centers (Vidyapeeth), check for specific registration offers listed as 'Offline' deals."}]}],Qh={"adda247-coupon-code":[{id:"adda-1",title:"Flat 17% OFF on All Courses",description:"Use code to get flat 17% discount on Bank, SSC & other courses.",code:"PREP17",verified:!0,expiry:"31 Dec 2025",type:"code",ribbon:"BEST SELLER"},{id:"adda-2",title:"Start Your Prep @ ₹999 Only",description:"Get started with select test series and courses starting at just ₹999.",code:"START999",verified:!0,expiry:"15 Jan 2026",type:"deal",ribbon:"BUDGET BUY"},{id:"adda-3",title:"77% OFF on Mahapacks",description:"Limited time offer: Huge savings on Adda247 Mahapacks.",code:"DREAM77",verified:!0,expiry:"20 Dec 2025",type:"code",badge:"trending"},{id:"adda-4",title:"Bank Exams: Flat 20% Discount",description:"Valid on IBPS, SBI PO and Clerk preparation batches.",code:"BANK20",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"adda-5",title:"SSC CGL Tier 1 & 2 Crash Course",description:"Join the crash course at a special discounted price.",code:"SSCGO",verified:!0,expiry:"10 Feb 2026",type:"code"},{id:"adda-6",title:"Free Daily Quizzes & Mock Tests",description:"Practice for free with daily updated quizzes on the app.",code:"FREEMOCK",verified:!0,expiry:"31 Dec 2026",type:"deal",ribbon:"FREE"},{id:"adda-7",title:"UPSC CSE Batches: Save ₹5000",description:"Get flat ₹5000 off on comprehensive UPSC foundation batches.",code:"IAS5000",verified:!0,expiry:"30 Nov 2025",type:"code",badge:"high value"},{id:"adda-8",title:"Railways RRB NTPC Course Deal",description:"Complete preparation guide now at 50% discount.",code:"RAIL50",verified:!0,expiry:"31 Jan 2026",type:"code"},{id:"adda-9",title:"Teaching Exams: Extra 15% OFF",description:"Applicable on CTET, UPTET, and other teaching exam packs.",code:"TEACH15",verified:!0,expiry:"28 Feb 2026",type:"code"},{id:"adda-10",title:"Defence Exams: Flat 60% OFF",description:"Save big on unexpected defence exam courses.",code:"DEF60",verified:!0,expiry:"05 Jan 2026",type:"code"},{id:"adda-11",title:"State Exams Mahapack Offer",description:"Access all state level exam courses with one subscription.",code:"STATE75",verified:!0,expiry:"15 Mar 2026",type:"code"},{id:"adda-12",title:"JAIIB/CAIIB Success Batch",description:"Join the bankers batch with a special 10% discount.",code:"JAIIB10",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"adda-13",title:"Gate 2026 Foundation Batch",description:"Early bird offer: Save flat 25% on enrollment.",code:"GATE25",verified:!0,expiry:"30 Apr 2026",type:"code"},{id:"adda-14",title:"Regulatory Bodies Exam Packs",description:"Special pricing for RBI Grade B and SEBI Grade A courses.",code:"RBI2025",verified:!0,expiry:"31 Dec 2025",type:"deal"},{id:"adda-15",title:"Agriculture Field Officer Course",description:"Enroll now and get study material worth ₹2000 free.",code:"AGRIFREE",verified:!0,expiry:"20 Feb 2026",type:"deal"},{id:"adda-16",title:"Buy Books & E-books: 20% OFF",description:"Use code to save on printed books and digital study material.",code:"BOOKS20",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"adda-17",title:"Video Courses: Flat 40% Discount",description:"Learn at your own pace with recorded video classes.",code:"VIDEO40",verified:!0,expiry:"15 Jun 2026",type:"code"},{id:"adda-18",title:"Live Classes: 5% Extra Off",description:"Get an additional 5% discount on all live class purchases.",code:"LIVE5",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"adda-19",title:"App User Exclusive: 3% Coins",description:"Use Adda247 coins for extra discount on the mobile app.",code:"APPCOINS",verified:!0,expiry:"31 Dec 2026",type:"deal",badge:"mobile"},{id:"adda-20",title:"Refer & Earn Store Credit",description:"Invite friends and earn credits to buy courses.",code:"INVITE",verified:!0,expiry:"31 Dec 2026",type:"deal"},{id:"adda-21",title:"New Year Sale: Flat 22% OFF",description:"Celebrate with big savings across the entire site.",code:"NEWYEAR22",verified:!1,expiry:"05 Jan 2026",type:"code",badge:"seasonal"},{id:"adda-22",title:"Scholarship Test: 100% Fee Waiver",description:"Take the test and stand a chance to win free courses.",code:"SCHOLAR",verified:!0,expiry:"Next Sunday",type:"deal"},{id:"adda-23",title:"Current Affairs Yearly Magazine",description:"Download the yearly roundup PDF for just ₹49.",code:"CA49",verified:!0,expiry:"31 Mar 2026",type:"deal"},{id:"adda-24",title:"Interview Guidance Program",description:"Expert guidance for banking and SSC interviews.",code:"INTERVIEW",verified:!0,expiry:"30 Jun 2026",type:"deal"},{id:"adda-25",title:"Spoken English Course Deal",description:"Improve your communication skills for just ₹499.",code:"SPEAK",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"adda-26",title:"Computer Certification Course",description:"Get certified in basic computer skills. Valid for exams.",code:"COMP100",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"adda-27",title:"CUET 2026 Entrance Prep",description:"Start your undergraduate journey with top university prep.",code:"CUET26",verified:!0,expiry:"31 May 2026",type:"code"},{id:"adda-28",title:"Flash Sale: 2 Hours Only",description:"Extra 10% off on top of existing offers. 6PM-8PM.",code:"FLASH10",verified:!1,expiry:"Today",type:"code",badge:"flash sale"},{id:"adda-29",title:"Buy 1 Get 1 Free Test Series",description:"Buy one mock test series and get another one free.",code:"BOGO",verified:!0,expiry:"Weekend",type:"deal"},{id:"adda-30",title:"Sign Up Bonus: ₹100 Wallet Cash",description:"Register today and get instant wallet balance.",code:"SIGNUP100",verified:!0,expiry:"31 Dec 2025",type:"deal",ribbon:"NEW USER"}],"unacademy-coupon-code":[{id:"un-1",title:"Flat 20% OFF on all Plus Subs",description:"Unlock unlimited access to live classes and structured courses.",code:"PLUS20",verified:!0,expiry:"31 Dec 2025",type:"code",ribbon:"POPULAR"},{id:"un-2",title:"Unlock 20% Discount on Iconic",description:"Get personal mentorship and doubts solving with Iconic subscription.",code:"ICONIC20",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"un-3",title:"NEET UG: Save up to 40%",description:"Prepare for medical entrance with top educators.",code:"NEET40",verified:!0,expiry:"30 Apr 2026",type:"code",badge:"medical"},{id:"un-4",title:"JEE Mains & Advanced Offer",description:"Crack engineering exams with comprehensive batches.",code:"JEE2026",verified:!0,expiry:"31 May 2026",type:"code",badge:"engineering"},{id:"un-5",title:"UPSC CSE: 3 Months Extension",description:"Subscribe for 12 months and get 3 months free.",code:"IASFREE3",verified:!0,expiry:"28 Feb 2026",type:"deal"},{id:"un-6",title:"Try Unacademy for Free for 7 Days",description:"Experience the Plus learning environment at no cost.",code:"TRIAL7",verified:!0,expiry:"31 Mar 2026",type:"deal",ribbon:"FREE TRIAL"},{id:"un-7",title:"CA Intermediate Bundles",description:"Save 15% on group 1 & 2 combo subscriptions.",code:"CA15",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"un-8",title:"CAT 2025: Flat ₹4000 OFF",description:"Ace your MBA entrance with the best percentile.",code:"CAT4000",verified:!0,expiry:"30 Nov 2025",type:"code"},{id:"un-9",title:"Gate & ESE: Max Discount",description:"Use the code to get the maximum available discount today.",code:"GATEALERTS",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"un-10",title:"Defence Exams: 10% Instant Off",description:"Preparing for NDA/CDS? Use this code for instant savings.",code:"DEFENCE10",verified:!0,expiry:"31 Jul 2026",type:"code"},{id:"un-11",title:"Resolve 2026: 23% OFF",description:"New year special offer for all new subscribers.",code:"RESOLVE23",verified:!1,expiry:"05 Jan 2026",type:"code",badge:"seasonal"},{id:"un-12",title:"Unacademy Lite: Test Series",description:"Get high quality mock tests starting at ₹499.",code:"LITE499",verified:!0,expiry:"31 Dec 2026",type:"deal"},{id:"un-13",title:"6 Months Free on 2 Years Sub",description:"Long term preparation plan with extra validity.",code:"LONGTERM",verified:!0,expiry:"30 Jun 2026",type:"deal"},{id:"un-14",title:"Referral Code: 10% Discount",description:"Use referral code to get standard 10% discount on any course.",code:"REFER10",verified:!0,expiry:"31 Dec 2030",type:"code"},{id:"un-15",title:"Govt Exams: SSC & Bank Combo",description:"Prepare for multiple exams with one subscription.",code:"COMBO20",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"un-16",title:"Railway Exams: Flat 50% OFF",description:"Limited period offer for railway aspirants.",code:"RRB50",verified:!0,expiry:"28 Feb 2026",type:"code"},{id:"un-17",title:"K-12 School Tuition: Savings",description:"CBSE Class 6-12 subscriptions at discounted rates.",code:"SCHOOL20",verified:!0,expiry:"31 Mar 2026",type:"code"},{id:"un-18",title:"Coding & Programming Subscription",description:"Learn software development with industry experts.",code:"CODE10",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"un-19",title:"Unacademy Store Offline Centers",description:"Visit nearest centre and get special admission offers.",code:"OFFLINE",verified:!0,expiry:"31 Dec 2026",type:"deal"},{id:"un-20",title:"CSIR UGC NET: 20% OFF",description:"Crack the lecture ship exam with top guidance.",code:"NET20",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"un-21",title:"Judiciary Exams Prep",description:"Comprehensive coverage for state judiciary exams.",code:"LAW10",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"un-22",title:"Free Special Classes",description:"Watch free live classes every day on the platform.",code:"WATCHFREE",verified:!0,expiry:"31 Dec 2026",type:"deal",ribbon:"FREE"},{id:"un-23",title:"Scholarship: Up to 90% OFF",description:"Participate in UNSAT and win scholarships.",code:"UNSAT",verified:!0,expiry:"Next Sunday",type:"deal"},{id:"un-24",title:"Notes 2.0: Free with Iconic",description:"Get hard copy notes delivered to your home.",code:"NOTESFREE",verified:!0,expiry:"31 Dec 2025",type:"deal"},{id:"un-25",title:"IPM/BBA Entrance Exams",description:"Start early for management careers after 12th.",code:"BBA15",verified:!0,expiry:"31 May 2026",type:"code"},{id:"un-26",title:"CMA Foundation Batches",description:"Cost and Management accountancy aspirants offer.",code:"CMA10",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"un-27",title:"Hotel Management JEE",description:"Prepare for NCHMCT JEE with discounts.",code:"HOTEL10",verified:!0,expiry:"30 Apr 2026",type:"code"},{id:"un-28",title:"Foreign Studies (IELTS/GRE)",description:"Get guidance for study abroad exams.",code:"ABROAD",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"un-29",title:"Clat & Other Law Entrances",description:"Law entrance prep made affordable.",code:"CLAT20",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"un-30",title:"New User: 10% Extra Cashback",description:"First time subscribers get credits back.",code:"NEW10",verified:!0,expiry:"31 Dec 2025",type:"code",ribbon:"NEW USER"}],"pw-coupon-code":[{id:"pw-1",title:"Arjuna JEE 2.0: Flat ₹500 OFF",description:"Discount on JEE batch for Class 11 students.",code:"JEE500",verified:!0,expiry:"31 Mar 2026",type:"code",ribbon:"TRENDING"},{id:"pw-2",title:"Lakshya NEET Batch: Save ₹300",description:"Best value preparation for Class 12 medical aspirants.",code:"NEET300",verified:!0,expiry:"31 Mar 2026",type:"code",ribbon:"BEST SELLER"},{id:"pw-3",title:"Yakeen Dropper Batch Offer",description:"Special price for repeaters aiming for NEET UG.",code:"DROPPER",verified:!0,expiry:"31 Jul 2026",type:"deal"},{id:"pw-4",title:"Vidyapeeth Offline: Early Bird",description:"Register for offline centers and save on tuition fees.",code:"VIDYA",verified:!0,expiry:"31 Jan 2026",type:"deal"},{id:"pw-5",title:"UPSC Wallah: Flat ₹2000 OFF",description:"Complete foundation course for civil services.",code:"UPSC2000",verified:!0,expiry:"30 Nov 2025",type:"code"},{id:"pw-6",title:"Gate Wallah: Parakram Batch",description:"Join the Parakram batch for GATE 2026 at ₹4999.",code:"PARA4999",verified:!0,expiry:"28 Feb 2026",type:"code"},{id:"pw-7",title:"MBA Wallah: Pioneer Batch",description:"CAT preparation at the most affordable price.",code:"MBA100",verified:!0,expiry:"30 Nov 2025",type:"code"},{id:"pw-8",title:"SSC Wallah: Mahapack Deal",description:"One subscription for all SSC exams.",code:"SSC10",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"pw-9",title:"Banking Wallah Offers",description:"Prepare for IBPS and SBI with top faculty.",code:"BANK50",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"pw-10",title:"PW Skills: Data Science Course",description:"Job assurance program with 10% discount.",code:"DATA10",verified:!0,expiry:"31 Dec 2025",type:"code",badge:"upskill"},{id:"pw-11",title:"Full Stack Web Dev: Save ₹1000",description:"Become a developer with industry ready curriculum.",code:"WEBDEV",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"pw-12",title:"Commerce Wallah: Class 11 & 12",description:"Accounts, Economics and BST batches.",code:"COMM100",verified:!0,expiry:"31 Mar 2026",type:"code"},{id:"pw-13",title:"PW Store: 15% OFF on Modules",description:"Get discount on printed study material and modules.",code:"BOOK15",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"pw-14",title:"Drona Study Material",description:"Specialized notes for NEET and JEE.",code:"DRONA",verified:!0,expiry:"31 Dec 2025",type:"deal"},{id:"pw-15",title:"School Prep: Uday Batch",description:"Foundation for Class 9th students.",code:"UDAY9",verified:!0,expiry:"31 Mar 2026",type:"code"},{id:"pw-16",title:"Neev Batch for Class 10th",description:"Board exam preparation made easy.",code:"NEEV10",verified:!0,expiry:"31 Mar 2026",type:"code"},{id:"pw-17",title:"Defense Wallah: NDA Shaurya",description:"Join the forces with dedicated NDA prep.",code:"NDA200",verified:!0,expiry:"30 Apr 2026",type:"code"},{id:"pw-18",title:"Teaching Wallah: CTET Success",description:"Clear teacher eligibility test with ease.",code:"TEACH25",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"pw-19",title:"CA Wallah: Foundation",description:"Start your Chartered Accountancy journey.",code:"CAFDN",verified:!0,expiry:"31 May 2026",type:"code"},{id:"pw-20",title:"CS Executive Batches",description:"Company Secretary exam preparation",code:"CSEXEC",verified:!0,expiry:"30 Jun 2026",type:"deal"},{id:"pw-21",title:"Free Youtube Batches",description:"Access quality education for free on Youtube channels.",code:"YTFREE",verified:!0,expiry:"31 Dec 2026",type:"deal",ribbon:"FREE"},{id:"pw-22",title:"Referral Bonus",description:"Refer PW app to friends and earn wallet points.",code:"REF20",verified:!0,expiry:"31 Dec 2030",type:"deal"},{id:"pw-23",title:"PW NSAT Scholarship",description:"Win up to 100% scholarship for offline/online batches.",code:"NSAT",verified:!0,expiry:"Next Month",type:"deal"},{id:"pw-24",title:"Nursing Wallah",description:"Norcet and other nursing exam batches.",code:"NURSE",verified:!0,expiry:"31 Dec 2025",type:"deal"},{id:"pw-25",title:"Government Job Exams",description:"Combined prep for multiple govt vacancies.",code:"GOVTJOB",verified:!0,expiry:"31 Dec 2025",type:"deal"},{id:"pw-26",title:"State PSC Batches",description:"BPSC, UPPSC, MPPSC focused study groups.",code:"PSC20",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"pw-27",title:"Judiciary Gold",description:"Civil Judge exam preparation.",code:"JUDGE",verified:!0,expiry:"31 Dec 2025",type:"deal"},{id:"pw-28",title:"Master Post-Graduation",description:"GATE + ESE integrated courses.",code:"MASTER",verified:!0,expiry:"30 Sep 2026",type:"deal"},{id:"pw-29",title:"Super Saver Bundles",description:"Buy Batch + Books combo and save extra.",code:"COMBO",verified:!0,expiry:"31 Dec 2025",type:"deal"},{id:"pw-30",title:"PW App First Order",description:"New users get additional 5% off on app.",code:"APPNEW",verified:!0,expiry:"31 Dec 2025",type:"code",ribbon:"NEW USER"}]},Xh=r=>{const o=new Date;return o.setDate(o.getDate()+r),o.toLocaleDateString("en-US",{day:"numeric",month:"short",year:"numeric"})},Zl=(r,o)=>{const c=r.substring(0,3).toUpperCase(),u=Math.floor(Math.random()*100)+50;return o==="deal"?"View Offer":`${c}${o.toUpperCase()}${u}`},Nr=r=>{if(!r)return[];if(Qh[r.slug])return Qh[r.slug];const o=[],c=["Flat","Up to","Extra"],u=["Fashion","Electronics","Home","Beauty","Travel","Food"];o.push({id:1,title:`Flat 50% OFF on ${r.name} Best Sellers`,description:"Get half price on top rated products. Limited time offer.",code:Zl(r.name,"50OFF"),verified:!0,exclusive:!0,ribbon:"BEST SELLER",type:"code"},{id:2,title:"Extra 20% OFF on First Order",description:"New user exclusive. Sign up and save big on your first purchase.",code:Zl(r.name,"NEW20"),verified:!0,ribbon:"NEW USER",type:"code"},{id:3,title:"Bank Offer: 10% Instant Discount",description:"Use HDFC or ICICI Credit Cards. Min purchase ₹3000.",code:Zl(r.name,"BANK10"),verified:!0,badge:"bank",type:"code"},{id:4,title:`${r.name} App Exclusive: Flat ₹200 OFF`,description:"Valid only on app orders above ₹1500.",code:Zl(r.name,"APP200"),verified:!0,badge:"mobile",type:"code"},{id:5,title:"Free Delivery on All Orders",description:"No minimum order value required for limited period.",code:"FREEDEL",verified:!0,ribbon:"FREE SHIPPING",type:"deal"}),u.forEach((f,m)=>{o.push({id:10+m,title:`Up to 60% OFF on ${f}`,description:`Best deals on ${f} items. Shop now and save.`,code:Zl(r.name,f.substring(0,3)),verified:Math.random()>.3,expiry:Xh(Math.floor(Math.random()*30)+2),type:"deal"})});for(let f=0;f<15;f++){const m=(Math.floor(Math.random()*6)+1)*10,p=c[Math.floor(Math.random()*c.length)];o.push({id:100+f,title:`${p} ${m}% OFF on Selected Items`,description:"Applicable on specific range of products. T&C apply.",code:Zl(r.name,"SAVE"),verified:Math.random()>.5,expiry:Xh(Math.floor(Math.random()*60)+5),type:Math.random()>.7?"code":"deal"})}return o},xu="offerve_analytics_data",br="offerve_weekly_snapshot",rl=()=>{try{const r=localStorage.getItem(xu),o=r?JSON.parse(r):null;return!o||!o.coupons||!o.stores||!o.events?{coupons:{},stores:{},events:[]}:o}catch(r){return console.error("Analytics Data Corrupt, resetting",r),{coupons:{},stores:{},events:[]}}},Zh=r=>{localStorage.setItem(xu,JSON.stringify(r))},Qe={trackEvent:({couponId:r,storeSlug:o,type:c,source:u="unknown"})=>{const f=rl(),m=`${o}-${r}`,p=new Date().toISOString();switch(f.coupons[m]||(f.coupons[m]={copy:0,click:0,view:0,lastEvent:null}),c){case"copy":f.coupons[m].copy++;break;case"click":f.coupons[m].click++;break;case"view":f.coupons[m].view++;break}if(f.coupons[m].lastEvent=p,o)switch(f.stores[o]||(f.stores[o]={totalCopy:0,totalClick:0,totalView:0}),c){case"copy":f.stores[o].totalCopy++;break;case"click":f.stores[o].totalClick++;break;case"view":f.stores[o].totalView++;break}return f.events.unshift({key:m,storeSlug:o,type:c,source:u,timestamp:p}),f.events.length>100&&f.events.pop(),Zh(f),!0},trackSearch:r=>{const o=rl();o.searches||(o.searches={}),o.searches[r]=(o.searches[r]||0)+1,Zh(o)},getTopSearches:()=>{const o=rl().searches||{};return Object.entries(o).sort(([,c],[,u])=>u-c).slice(0,10).map(([c,u])=>({query:c,count:u}))},getAllCouponsWithMetrics:()=>{const r=rl();let o=[];return Ua.forEach(c=>{Nr(c).forEach(f=>{const m=`${c.slug}-${f.id}`,p=r.coupons[m]||{copy:0,click:0,view:0,lastEvent:null};o.push({...f,store:c,metrics:p,trackingKey:m,score:p.copy*10+p.click*2+p.view*.1})})}),o},getTopCoupons:(r=10)=>Qe.getAllCouponsWithMetrics().sort((c,u)=>u.metrics.copy!==c.metrics.copy?u.metrics.copy-c.metrics.copy:u.score-c.score).slice(0,r),getStoreMetrics:()=>{const r=rl();return Ua.map(o=>({...o,analytics:r.stores[o.slug]||{totalCopy:0,totalClick:0,totalView:0}})).sort((o,c)=>c.analytics.totalCopy-o.analytics.totalCopy)},generateWeeklySnapshot:()=>{const r=Qe.getTopCoupons(20),o={date:new Date().toISOString(),weekId:`Week ${mv(new Date)}`,items:r};let c=JSON.parse(localStorage.getItem(br)||"[]");return c.unshift(o),localStorage.setItem(br,JSON.stringify(c)),o},getSnapshots:()=>JSON.parse(localStorage.getItem(br)||"[]"),getEventsLog:()=>rl().events,resetData:()=>{localStorage.removeItem(xu),localStorage.removeItem(br)},exportToCSV:r=>{let o="data:text/csv;charset=utf-8,";if(rl(),r==="coupons"){const f=Qe.getAllCouponsWithMetrics();o+=`ID,Store,Title,Copy Count,Click Count,View Count,Last Event
`,f.forEach(m=>{o+=`${m.trackingKey},${m.store.name},"${m.title.replace(/,/g,"")}",${m.metrics.copy},${m.metrics.click},${m.metrics.view},${m.metrics.lastEvent}
`})}else if(r==="stores"){const f=Qe.getStoreMetrics();o+=`Store Name,Slug,Total Copies,Total Clicks,Total Views
`,f.forEach(m=>{o+=`${m.name},${m.slug},${m.analytics.totalCopy},${m.analytics.totalClick},${m.analytics.totalView}
`})}const c=encodeURI(o),u=document.createElement("a");u.setAttribute("href",c),u.setAttribute("download",`offerve_${r}_report.csv`),document.body.appendChild(u),u.click(),document.body.removeChild(u)}};function mv(r){r=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate())),r.setUTCDate(r.getUTCDate()+4-(r.getDay()||7));var o=new Date(Date.UTC(r.getUTCFullYear(),0,1)),c=Math.ceil(((r-o)/864e5+1)/7);return c}let Fh=null,Kn=null;const pv={includeScore:!0,threshold:.3,keys:[{name:"title",weight:.5},{name:"storeName",weight:.4},{name:"tags",weight:.3},{name:"description",weight:.2},{name:"storeSlug",weight:.4}]},lu=()=>{if(Fh)return;let r=[];Ua.forEach(o=>{r.push({type:"store",id:o.id,title:o.name,storeName:o.name,storeSlug:o.slug,description:o.description,tags:["store","merchant",...o.name.split(" ")],data:o}),Nr(o).forEach(u=>{r.push({type:"coupon",id:`${o.slug}-${u.id}`,title:u.title,storeName:o.name,storeSlug:o.slug,description:u.description,code:u.code,tags:["coupon","deal","offer",o.name,...u.ribbon?[u.ribbon]:[]],data:{...u,merchant:o}})})}),r.push({type:"page",id:"blog-zomato",title:"How to save ₹500 on every Zomato Order",tags:["blog","food","zomato"],data:{link:"#"}}),r.push({type:"page",id:"blog-amazon",title:"Amazon Prime Day Guide",tags:["blog","amazon","sale"],data:{link:"#"}}),Fh=r,Kn=new Wl(r,pv),console.log(`Search Index Built: ${r.length} items`)},xm={init:()=>lu(),search:(r,o={})=>{if(Kn||lu(),!r||r.trim().length===0)return[];let u=Kn.search(r).map(f=>({...f.item,score:f.score}));return o.type&&o.type!=="all"&&(u=u.filter(f=>f.type===o.type)),u.slice(0,20)},suggest:r=>(Kn||lu(),!r||r.length<2?[]:Kn.search(r).slice(0,6).map(c=>({type:c.item.type,title:c.item.title,sub:c.item.type==="coupon"?c.item.storeName:c.item.type.toUpperCase(),id:c.item.id,slug:c.item.storeSlug})))},La=()=>{const r=Jl(),[o,c]=T.useState(""),[u,f]=T.useState([]),[m,p]=T.useState(!1),v=T.useRef(null);T.useEffect(()=>{const x=z=>{v.current&&!v.current.contains(z.target)&&p(!1)};return document.addEventListener("mousedown",x),()=>document.removeEventListener("mousedown",x)},[]);const y=x=>{const z=x.target.value;if(c(z),z.length>1){const U=xm.suggest(z);f(U),p(!0)}else f([]),p(!1)},g=x=>{x.preventDefault(),o.trim()&&(p(!1),r(`/search?q=${encodeURIComponent(o)}`))},A=x=>{p(!1),c(x.title),x.type==="store"?r(`/${x.slug}`):r(`/search?q=${encodeURIComponent(x.title)}`)};return s.jsxs("header",{className:"header",children:[s.jsx("div",{className:"container",children:s.jsxs("div",{className:"header-wrapper",children:[s.jsx("div",{className:"logo-section",children:s.jsxs(Fe,{to:"/",className:"logo-wrapper",children:[s.jsxs("div",{className:"logo-row",children:[s.jsx("img",{src:"/favicon.svg",alt:"Offerve Logo",className:"header-logo-img"}),s.jsx("span",{className:"logo-text gradient-text",children:"Offerve"})]}),s.jsx("span",{className:"tagline",children:"Save more on every purchase"})]})}),s.jsxs("div",{className:"search-section",ref:v,children:[s.jsxs("form",{className:"search-bar",onSubmit:g,children:[s.jsx("input",{type:"text",value:o,onChange:y,onFocus:()=>o.length>1&&p(!0),placeholder:"Search for coupons, stores, or categories...",className:"search-input"}),s.jsx("button",{type:"submit",className:"search-btn",children:s.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("circle",{cx:"11",cy:"11",r:"8"}),s.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})})]}),m&&u.length>0&&s.jsx("div",{className:"search-suggestions",children:u.map((x,z)=>s.jsxs("div",{className:"suggestion-item",onClick:()=>A(x),children:[s.jsxs("div",{className:"sugg-left",children:[s.jsx("span",{className:"sugg-title",children:x.title}),s.jsx("span",{className:"sugg-sub",children:x.sub})]}),s.jsx("span",{className:"sugg-arrow",children:"↗"})]},z))})]}),s.jsx("div",{className:"actions-section",children:s.jsxs("nav",{className:"nav-links",children:[s.jsx("a",{href:"#coupons",className:"nav-link",children:"Coupons"}),s.jsx(Fe,{to:"/stores",className:"nav-link",children:"Stores"}),s.jsx(Fe,{to:"/deals",className:"nav-link",children:"Deals"})]})})]})}),s.jsx("style",{children:`
        .header {
          position: relative;
          height: 80px;
          display: flex;
          align-items: center;
          z-index: 1000;
          background: white;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          box-shadow: var(--shadow-sm);
        }

        .header-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }

        .logo-wrapper {
          display: flex;
          flex-direction: column;
          text-decoration: none;
          line-height: 1;
        }

        .logo-text {
          font-size: 1.8rem;
          font-weight: 800;
          letter-spacing: -0.5px;
        }

        .tagline {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 500;
          margin-top: 2px;
          letter-spacing: 0.2px;
        }

        .logo-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .header-logo-img {
          width: 32px;
          height: 32px;
          object-fit: contain;
        }

        /* Search Bar */
        .search-section {
          flex: 1;
          max-width: 500px;
          position: relative;
        }

        .search-bar {
          display: flex;
          position: relative;
          width: 100%;
          background: white;
          border-radius: var(--radius-md);
          border: 1px solid rgba(0,0,0,0.05);
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
        }

        .search-bar:focus-within {
          border-color: var(--primary);
          background: white;
          box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);
        }

        .search-input {
          width: 100%;
          padding: 0.7rem 1rem;
          background: transparent;
          border: none;
          color: var(--text-main);
          font-family: inherit;
          font-size: 0.95rem;
          outline: none;
        }

        .search-input::placeholder {
          color: var(--text-muted);
        }

        .search-btn {
          padding: 0 1rem;
          color: var(--text-muted);
          transition: var(--transition);
          background: transparent;
          border: none;
          cursor: pointer;
        }

        .search-btn:hover {
          color: var(--primary);
        }

        /* Autosuggest Dropdown */
        .search-suggestions {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            border-radius: 0 0 var(--radius-md) var(--radius-md);
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            border: 1px solid rgba(0,0,0,0.05);
            border-top: none;
            z-index: 1001;
            overflow: hidden;
            margin-top: 4px;
        }

        .suggestion-item {
            padding: 0.8rem 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            border-bottom: 1px solid rgba(0,0,0,0.03);
            transition: background 0.15s;
        }

        .suggestion-item:last-child { border-bottom: none; }
        .suggestion-item:hover { background: #f8fafc; }

        .sugg-left { display: flex; flex-direction: column; }
        .sugg-title { font-weight: 500; color: var(--text-main); font-size: 0.95rem; }
        .sugg-sub { font-size: 0.75rem; color: var(--text-muted); text-transform: capitalize; }
        .sugg-arrow { color: var(--text-muted); opacity: 0.5; }

        /* Actions */
        .actions-section {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .nav-links {
          display: flex;
          gap: 1.5rem;
        }

        .nav-link {
          font-weight: 500;
          color: var(--text-muted);
          font-size: 0.95rem;
          transition: var(--transition);
        }

        .nav-link:hover {
          color: var(--text-main);
        }

        .divider {
          width: 1px;
          height: 24px;
          background: rgba(0,0,0,0.1);
        }

        .btn-text {
          font-weight: 600;
          color: var(--text-main);
        }

        .btn-text:hover {
          color: var(--primary);
        }

        @media (max-width: 768px) {
          .header {
            height: auto;
            padding: 1rem 0;
          }

          .header-wrapper {
            flex-wrap: wrap;
            gap: 1rem;
          }

          .logo-section {
            width: 100%;
            display: flex;
            justify-content: center;
          }

          .search-section {
            order: 2;
            width: 100%;
            max-width: 100%;
            display: block; /* Force show */
          }

          .actions-section {
            order: 3;
            width: 100%;
            justify-content: center;
          }

          .nav-links {
            display: flex; /* Force show */
            width: 100%;
            overflow-x: auto;
            padding-bottom: 5px;
            gap: 1rem;
            justify-content: flex-start;
            white-space: nowrap;
            -webkit-overflow-scrolling: touch;
          }
          
          .nav-link {
            padding: 0.5rem 1rem;
            background: #f1f5f9;
            border-radius: 20px;
            font-size: 0.85rem;
          }

          .divider {
            display: none;
          }
        }
      `})]})},gv=()=>{const[r,o]=T.useState(0),c=[1,2,3,4];return T.useEffect(()=>{const u=setInterval(()=>{o(f=>(f+1)%c.length)},5e3);return()=>clearInterval(u)},[c.length]),s.jsxs("section",{className:"hero",children:[s.jsx("div",{className:"container",children:s.jsxs("div",{className:"hero-content",children:[s.jsx("h1",{className:"hero-title",children:"Save Big with India’s Best Coupons, Promo Codes & Online Deals"}),s.jsxs("div",{className:"banner-carousel",children:[s.jsx("div",{className:"banner-track",style:{transform:`translateX(-${r*100}%)`},children:c.map((u,f)=>s.jsx("div",{className:"banner-slide",children:s.jsx("div",{className:`hero-banner banner-${u}`,children:s.jsxs("span",{className:"banner-placeholder-text",children:["Banner ",u," Space"]})})},u))}),s.jsx("div",{className:"banner-dots",children:c.map((u,f)=>s.jsx("button",{className:`dot ${r===f?"active":""}`,onClick:()=>o(f),"aria-label":`Go to banner ${f+1}`},f))})]})]})}),s.jsx("div",{className:"hero-bg"}),s.jsx("style",{children:`
        .hero {
          padding: 40px 0 60px;
          position: relative;
          text-align: center;
          background: linear-gradient(to bottom, var(--bg-main), #EBEAF8);
          overflow: hidden;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          margin: 0 auto;
        }

        /* Banner Carousel Styles */
        .banner-carousel {
          position: relative;
          width: 100%;
          height: 200px; /* Adjust height as needed */
          margin-bottom: 3rem;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: #e2e8f0;
          box-shadow: var(--shadow-md);
        }

        .banner-track {
          display: flex;
          height: 100%;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .banner-slide {
          min-width: 100%;
          height: 100%;
        }

        .hero-banner {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-size: cover;
          background-position: center;
          position: relative;
        }

        /* Distinct placeholder colors for demo */
        .banner-1 { background: linear-gradient(135deg, #3b82f6, #06b6d4); }
        .banner-2 { background: linear-gradient(135deg, #10b981, #3b82f6); }
        .banner-3 { background: linear-gradient(135deg, #f59e0b, #ec4899); }
        .banner-4 { background: linear-gradient(135deg, #6366f1, #8b5cf6); }

        .banner-placeholder-text {
          color: white;
          font-weight: 700;
          font-size: 1.5rem;
          text-shadow: 0 2px 4px rgba(0,0,0,0.2);
          opacity: 0.9;
        }

        .banner-dots {
          position: absolute;
          bottom: 1rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.5rem;
          z-index: 2;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          transition: var(--transition);
          padding: 0;
        }

        .dot.active {
          background: white;
          transform: scale(1.2);
        }



        .hero-bg {
          position: absolute;
          top: -20%;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(37, 99, 235, 0.08) 0%, transparent 70%);
          z-index: 1;
          pointer-events: none;
        }

          @media (max-width: 768px) {
            .hero-title {
              font-size: 1.8rem;
              padding: 0 1rem;
            }

            .main-search {
              flex-direction: column;
            }
            
            .hero-search-btn {
              width: 100%;
              padding: 1rem;
            }
          }

          @media (min-width: 768px) {
            .hero-title {
              font-size: 2.5rem;
            }
          }
        }
      `})]})},yv=()=>{const r=Ua;return s.jsxs("div",{className:"merchant-slider-section",children:[s.jsxs("div",{className:"container",children:[s.jsx("h3",{className:"section-subtitle",children:"Top Stores"}),s.jsx("div",{className:"slider-wrapper",children:s.jsx("div",{className:"slider-track",children:r.concat(r).map((o,c)=>s.jsxs(Fe,{to:`/${o.slug}`,className:"merchant-bubble",children:[s.jsx("div",{className:"bubble-circle",children:s.jsx("img",{src:`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${o.domain}&size=128`,alt:o.name,className:"merchant-img",loading:"lazy",onError:u=>{u.target.style.display="none",u.target.parentElement.innerText=o.name[0]}})}),s.jsx("span",{className:"bubble-name",children:o.name})]},c))})})]}),s.jsx("style",{children:`
        .merchant-slider-section {
          padding: 2rem 0;
          background: var(--bg-card);
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }

        .section-subtitle {
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .slider-wrapper {
          overflow: hidden;
          position: relative;
        }

        .slider-wrapper::before,
        .slider-wrapper::after {
          content: "";
          position: absolute;
          top: 0;
          width: 50px;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }

        .slider-wrapper::before {
          left: 0;
          background: linear-gradient(to right, var(--bg-card), transparent);
        }

        .slider-wrapper::after {
          right: 0;
          background: linear-gradient(to left, var(--bg-card), transparent);
        }

        .slider-track {
          display: flex;
          gap: 2.5rem;
          animation: slide 40s linear infinite;
          width: fit-content;
          padding: 1rem 0;
        }

        .merchant-bubble {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.8rem;
          min-width: 80px;
          cursor: pointer;
          transition: transform 0.2s;
          text-decoration: none;
        }

        .merchant-bubble:hover {
          transform: translateY(-5px);
        }

        .bubble-circle {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: #fff;
          border: 1px solid rgba(0,0,0,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
          overflow: hidden;
          padding: 10px; /* Padding for the image inside */
          transition: var(--transition);
        }

        .merchant-bubble:hover .bubble-circle {
          box-shadow: var(--shadow-md);
          border-color: var(--primary);
        }

        .merchant-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 50%;
        }

        .bubble-name {
          font-size: 0.9rem;
          color: var(--text-body);
          font-weight: 500;
        }

        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `})]})},Tr=({merchant:r,id:o,title:c,description:u,verified:f,code:m,ribbon:p,expiry:v,type:y,onCopy:g})=>{const[A,x]=T.useState(!1),z=T.useRef(null),U=T.useRef(!1);T.useEffect(()=>{const Y=new IntersectionObserver(([H])=>{H.isIntersecting&&!U.current&&(U.current=!0,Qe&&Qe.trackEvent&&o&&Qe.trackEvent({couponId:o,storeSlug:r.slug||(r.name?r.name.toLowerCase().replace(/\s+/g,"-"):"unknown"),type:"view",source:"card"}))},{threshold:.5});return z.current&&Y.observe(z.current),()=>Y.disconnect()},[o,r]);const k=()=>{if(Qe&&Qe.trackEvent&&o&&Qe.trackEvent({couponId:o,storeSlug:r.slug||(r.name?r.name.toLowerCase().replace(/\s+/g,"-"):"unknown"),type:y==="deal"?"click":"copy",source:"card"}),g&&g(),y==="deal"){window.open(`https://${r.domain||"google.com"}`,"_blank");return}navigator.clipboard.writeText(m),x(!0),setTimeout(()=>x(!1),2e3)};return s.jsxs("div",{className:"coupon-card",ref:z,children:[p&&s.jsx("div",{className:"coupon-ribbon",children:p}),s.jsxs("div",{className:"card-body",children:[s.jsx("div",{className:"logo-column",children:s.jsx("div",{className:"merchant-logo",children:r.logo?s.jsx("img",{src:r.logo,alt:r.name,loading:"lazy"}):s.jsx("span",{className:"merchant-initial",children:r.name?r.name[0]:"S"})})}),s.jsxs("div",{className:"content-column",children:[s.jsx("div",{className:"header-row",children:s.jsxs("div",{className:"badges-row",children:[f&&s.jsxs("span",{className:"verified-badge",children:[s.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"currentColor",children:s.jsx("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})}),"Verified"]}),v&&s.jsxs("span",{className:"expiry-badge",children:["⏳ ",v]})]})}),s.jsx("h3",{className:"coupon-title",children:c}),s.jsx("p",{className:"coupon-desc",children:u})]})]}),s.jsx("div",{className:"card-action",children:y==="deal"?s.jsxs("button",{className:"deal-btn full-width",onClick:k,children:["Activate Deal",s.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),s.jsx("polyline",{points:"15 3 21 3 21 9"}),s.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]})]}):s.jsxs("div",{className:"code-action-row",children:[s.jsxs("div",{className:"code-display-container",children:[s.jsx("span",{className:"code-label",children:"Coupon Code"}),s.jsx("div",{className:"code-box",children:m})]}),s.jsx("button",{className:`copy-btn ${A?"copied":""}`,onClick:k,"aria-label":"Copy coupon code",children:A?s.jsxs(s.Fragment,{children:[s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:s.jsx("polyline",{points:"20 6 9 17 4 12"})}),"Copied!"]}):s.jsxs(s.Fragment,{children:[s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),s.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),"Copy"]})})]})}),s.jsx("style",{children:`
        .coupon-card {
          background: var(--bg-card);
          border: 1px solid rgba(0,0,0,0.06);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          transition: var(--transition);
          position: relative;
          overflow: hidden;
        }

        .coupon-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
          border-color: rgba(37, 99, 235, 0.3);
        }
        
        .card-body {
            display: flex;
            gap: 1.2rem;
            align-items: flex-start;
        }

        .logo-column {
            flex-shrink: 0;
            z-index: 0; /* Ensuring logo is behind if overlay happens (though layout prevents it) */
        }
        
        .content-column {
            flex: 1;
            z-index: 1;
            min-width: 0; /* Prevent flex overflow */
        }

        .merchant-logo {
          width: 56px;
          height: 56px;
          background: #f8fafc;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: var(--primary);
          font-size: 1.2rem;
          border: 1px solid rgba(0,0,0,0.04);
          overflow: hidden; /* Fix overlap issue */
        }
        
        .merchant-logo img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            padding: 4px;
        }
        
        .header-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.5rem;
            flex-wrap: wrap;
            gap: 0.5rem;
        }
        
        .badges-row {
            display: flex;
            gap: 0.5rem;
            align-items: center;
        }
        
        .verified-badge {
          background: #dcfce7;
          color: #15803d;
          font-size: 0.7rem;
          padding: 0.15rem 0.5rem;
          border-radius: 20px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 3px;
          white-space: nowrap;
        }

        .expiry-badge {
            font-size: 0.7rem;
            color: var(--text-muted);
            background: #f1f5f9;
            padding: 0.15rem 0.5rem;
            border-radius: 20px;
            white-space: nowrap;
        }

        .coupon-title {
          font-size: 1.1rem;
          margin-bottom: 0.4rem;
          line-height: 1.35;
          font-weight: 600;
          color: var(--text-main);
        }

        .coupon-desc {
          color: var(--text-body);
          font-size: 0.9rem;
          line-height: 1.5;
        }
        
        .coupon-ribbon {
            position: absolute;
            top: 12px;
            right: -30px;
            background: #ef4444;
            color: white;
            padding: 4px 30px;
            font-size: 0.7rem;
            font-weight: 700;
            transform: rotate(45deg);
            z-index: 2;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .card-action {
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px dashed rgba(0,0,0,0.08);
          width: 100%;
        }

        /* Logic from previous step: Code/Copy Layout */
        .code-action-row {
            display: flex;
            align-items: flex-end;
            gap: 1rem;
            justify-content: space-between;
        }

        .code-display-container {
            display: flex;
            flex-direction: column;
            gap: 0.3rem;
            flex: 1;
            min-width: 0;
        }

        .code-label {
            font-size: 0.65rem;
            text-transform: uppercase;
            color: var(--text-muted);
            font-weight: 700;
            letter-spacing: 0.5px;
        }

        .code-box {
            background: #f8fafc;
            border: 1px dashed rgba(37, 99, 235, 0.3);
            border-radius: var(--radius-md);
            padding: 0.6rem 0.8rem;
            font-family: monospace;
            font-size: 1.05rem;
            font-weight: 700;
            color: var(--text-main);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            transition: var(--transition);
        }
        
        .code-display-container:hover .code-box {
            border-color: var(--primary);
            background: rgba(37, 99, 235, 0.04);
            transform: scale(1.02);
            transform-origin: left center;
        }

        .copy-btn {
            background: var(--primary);
            color: white;
            border: none;
            padding: 0.6rem 1rem;
            border-radius: var(--radius-md);
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.4rem;
            transition: var(--transition);
            min-width: 90px;
            justify-content: center;
            font-size: 0.85rem;
            height: 40px;
        }

        .copy-btn:hover {
            background: var(--primary-hover);
            transform: translateY(-2px);
            box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.3);
        }

        .copy-btn.copied {
            background: #10b981;
            transform: none;
            cursor: default;
        }

        .deal-btn.full-width {
            width: 100%;
            padding: 0.7rem;
            background: var(--primary);
            color: white;
            border: none;
            border-radius: var(--radius-md);
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            transition: var(--transition);
            font-size: 0.9rem;
        }

        .deal-btn.full-width:hover {
            background: var(--primary-hover);
            transform: translateY(-2px);
        }

        @media (max-width: 768px) {
            .card-body {
                flex-direction: column;
                gap: 0.8rem;
            }
            .logo-column {
                margin-bottom: 0.2rem;
            }
            .content-column {
                width: 100%;
            }
            .code-action-row {
                flex-direction: column;
                align-items: stretch;
            }
            .copy-btn, .deal-btn { width: 100%; }
        }
      `})]})},vv=()=>{const[r,o]=T.useState([]),[c,u]=T.useState({});T.useEffect(()=>{const p=JSON.parse(localStorage.getItem("offerve_copy_counts")||"{}");u(p),f(p)},[]);const f=p=>{let v=[];Ua.forEach(y=>{Nr(y).forEach(A=>{const x=`${y.slug}-${A.id}`;v.push({...A,trackingKey:x,merchant:y,copyCount:p[x]||0})})}),v.sort((y,g)=>g.copyCount!==y.copyCount?g.copyCount-y.copyCount:y.id-g.id),o(v.slice(0,5))},m=p=>{const v={...c,[p]:(c[p]||0)+1};u(v),localStorage.setItem("offerve_copy_counts",JSON.stringify(v)),f(v)};return s.jsxs("section",{className:"top-section",children:[s.jsx("div",{className:"container",children:s.jsxs("div",{className:"section-grid",children:[s.jsxs("div",{className:"top-block coupons-block",children:[s.jsxs("div",{className:"block-header",children:[s.jsx("h2",{children:"🔥 Top Coupons"}),s.jsx("span",{className:"live-badge",children:"Live Ranking"})]}),s.jsx("div",{className:"coupons-stack",children:r.map((p,v)=>s.jsxs("div",{className:"ranked-coupon-wrapper",children:[s.jsxs("div",{className:"rank-number",children:["#",v+1]}),s.jsx(Tr,{...p,ribbon:v===0?"MOST COPIED":p.ribbon,onCopy:()=>m(p.trackingKey)})]},p.trackingKey))})]}),s.jsxs("div",{className:"top-block offers-block",children:[s.jsxs("div",{className:"block-header",children:[s.jsx("h2",{children:"⚡ Top Offers & Guides"}),s.jsx("a",{href:"#",className:"view-all",children:"View All"})]}),s.jsxs("div",{className:"offers-grid",children:[s.jsxs("article",{className:"offer-card",children:[s.jsx("div",{className:"offer-img-box",style:{background:"#ffe4e6"},children:s.jsx("span",{className:"offer-tag",children:"Tricks"})}),s.jsxs("div",{className:"offer-content",children:[s.jsx("h3",{children:"How to save ₹500 on every Zomato Order"}),s.jsx("p",{children:"Use these hidden bank combinations to maximize your food savings today."}),s.jsx("button",{className:"read-btn",children:"Read Guide"})]})]}),s.jsxs("article",{className:"offer-card",children:[s.jsx("div",{className:"offer-img-box",style:{background:"#dcfce7"},children:s.jsx("span",{className:"offer-tag",children:"Deal"})}),s.jsxs("div",{className:"offer-content",children:[s.jsx("h3",{children:"Amazon Prime Day: Early Access List"}),s.jsx("p",{children:"Get the sneak peek of upcoming lightning deals 24 hours before sale."}),s.jsx("button",{className:"read-btn",children:"View Deal"})]})]}),s.jsxs("article",{className:"offer-card",children:[s.jsx("div",{className:"offer-img-box",style:{background:"#e0f2fe"},children:s.jsx("span",{className:"offer-tag",children:"Travel"})}),s.jsxs("div",{className:"offer-content",children:[s.jsx("h3",{children:"Flight Booking Hacks 2025"}),s.jsx("p",{children:"Secret incognito modes and VPN tricks to get cheaper flights instantly."}),s.jsx("button",{className:"read-btn",children:"Read Guide"})]})]})]})]})]})}),s.jsx("style",{children:`
                .top-section {
                    padding: 3rem 0;
                    background: #f8fafc;
                    border-bottom: 1px solid rgba(0,0,0,0.05);
                }

                .section-grid {
                    display: grid;
                    grid-template-columns: 1.2fr 0.8fr; /* 60/40 split */
                    gap: 2.5rem;
                }

                .block-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1.5rem;
                }

                .block-header h2 {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--text-main);
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .live-badge {
                    background: #fee2e2;
                    color: #ef4444;
                    font-size: 0.75rem;
                    padding: 0.2rem 0.6rem;
                    border-radius: 20px;
                    font-weight: 700;
                    text-transform: uppercase;
                    animation: pulse 2s infinite;
                }

                @keyframes pulse {
                    0% { opacity: 1; }
                    50% { opacity: 0.6; }
                    100% { opacity: 1; }
                }

                .coupons-stack {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .ranked-coupon-wrapper {
                    position: relative;
                }

                .rank-number {
                    position: absolute;
                    left: -15px;
                    top: -10px;
                    background: var(--text-main);
                    color: white;
                    width: 30px;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    font-weight: 700;
                    font-size: 0.9rem;
                    z-index: 10;
                    box-shadow: var(--shadow-sm);
                    border: 2px solid white;
                }
                
                .ranked-coupon-wrapper:nth-child(1) .rank-number { background: #eab308; } /* Gold */
                .ranked-coupon-wrapper:nth-child(2) .rank-number { background: #94a3b8; } /* Silver */
                .ranked-coupon-wrapper:nth-child(3) .rank-number { background: #b45309; } /* Bronze */

                /* Offers Block Styling */
                .offers-grid {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .offer-card {
                    background: white;
                    border: 1px solid rgba(0,0,0,0.06);
                    border-radius: var(--radius-lg);
                    overflow: hidden;
                    display: flex;
                    transition: var(--transition);
                }

                .offer-card:hover {
                    transform: translateY(-4px);
                    box-shadow: var(--shadow-sm);
                }

                .offer-img-box {
                    width: 120px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .offer-tag {
                    font-weight: 700;
                    font-size: 0.8rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    opacity: 0.7;
                }

                .offer-content {
                    padding: 1.2rem;
                    flex: 1;
                }

                .offer-content h3 {
                    font-size: 1.05rem;
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                    line-height: 1.4;
                    color: var(--text-main);
                }

                .offer-content p {
                    font-size: 0.85rem;
                    color: var(--text-body);
                    margin-bottom: 1rem;
                    line-height: 1.5;
                }

                .read-btn {
                    background: transparent;
                    border: none;
                    color: var(--primary);
                    font-weight: 600;
                    font-size: 0.85rem;
                    padding: 0;
                    cursor: pointer;
                }

                .read-btn:hover {
                    text-decoration: underline;
                }

                .view-all {
                    font-size: 0.9rem;
                    color: var(--primary);
                    font-weight: 600;
                }

                @media (max-width: 900px) {
                    .section-grid {
                        grid-template-columns: 1fr;
                    }
                    .offers-block {
                        margin-top: 2rem;
                    }
                }

                @media (max-width: 768px) {
                    .offers-grid {
                        grid-template-columns: 1fr; /* Ensure offers stack */
                    }
                    .block-header {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 0.5rem;
                    }
                }
            `})]})},bv=()=>{const r=[{name:"Food",icon:"🍔",count:"150 Offers"},{name:"Travel",icon:"✈️",count:"85 Offers"},{name:"Fashion",icon:"👗",count:"200+ Offers"},{name:"Electronics",icon:"💻",count:"120 Offers"},{name:"Beauty",icon:"💄",count:"90 Offers"},{name:"Recharge",icon:"📱",count:"45 Offers"},{name:"Entertainment",icon:"🎬",count:"60 Offers"},{name:"Grocery",icon:"🥦",count:"110 Offers"}];return s.jsxs("section",{className:"category-section",id:"categories",children:[s.jsxs("div",{className:"container",children:[s.jsx("h2",{className:"section-title",children:"Browse by Category"}),s.jsx("div",{className:"category-grid",children:r.map((o,c)=>s.jsxs("div",{className:"category-card",children:[s.jsx("div",{className:"cat-icon",children:o.icon}),s.jsx("h3",{className:"cat-name",children:o.name}),s.jsx("span",{className:"cat-count",children:o.count})]},c))})]}),s.jsx("style",{children:`
        .category-section {
          padding: 60px 0;
          background: var(--bg-main);
        }

        .category-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
          gap: 1.5rem;
        }

        .category-card {
          background: var(--bg-card);
          box-shadow: var(--shadow-sm);
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.5rem;
          border: 1px solid rgba(0,0,0,0.05);
          transition: var(--transition);
          cursor: pointer;
        }

        .category-card:hover {
          background: white;
          border-color: var(--primary);
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
        }

        .cat-icon {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .cat-name {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-main);
        }

        .cat-count {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
      `})]})},xv=()=>{const r=[{id:1,merchant:{name:"Amazon"},title:"Up to 50% Off on Electronics",description:"Get huge discounts on laptops, mobiles, and accessories.",verified:!0,code:"AMZ50OFF"},{id:2,merchant:{name:"Uber"},title:"Flat $5 Off on First 3 Rides",description:"Valid for new users only. No minimum purchase required.",verified:!0,code:"UBERNEW"},{id:3,merchant:{name:"Domino's"},title:"Buy 1 Get 1 Free Pizza",description:"Applicable on medium and large pizzas only.",verified:!0,code:"DOMBOGO"},{id:4,merchant:{name:"Nike"},title:"Extra 20% Off Sale Items",description:"Shop the latest sneakers and sportswear at discounted prices.",verified:!1,code:"NIKE20"},{id:5,merchant:{name:"Spotify"},title:"3 Months Premium for Free",description:"Try Premium free for 3 months. Cancel anytime.",verified:!0,code:"SPOTIFY3M"},{id:6,merchant:{name:"Airbnb"},title:"$40 Off Your First Trip",description:"Save on your first booking of $75 or more.",verified:!0,code:"AIRBNB40"}];return s.jsxs("section",{className:"deals-section",id:"deals",children:[s.jsxs("div",{className:"container",children:[s.jsx("h2",{className:"section-title",children:"Top Coupons & Offers"}),s.jsxs("div",{className:"deals-layout",children:[s.jsxs("aside",{className:"deals-sidebar",children:[s.jsxs("div",{className:"filter-group",children:[s.jsx("h3",{className:"filter-title",children:"Categories"}),s.jsxs("ul",{className:"filter-list",children:[s.jsx("li",{children:s.jsxs("label",{children:[s.jsx("input",{type:"checkbox"})," Travel (120)"]})}),s.jsx("li",{children:s.jsxs("label",{children:[s.jsx("input",{type:"checkbox"})," Fashion (85)"]})}),s.jsx("li",{children:s.jsxs("label",{children:[s.jsx("input",{type:"checkbox"})," Food (64)"]})}),s.jsx("li",{children:s.jsxs("label",{children:[s.jsx("input",{type:"checkbox"})," Electronics (50)"]})})]})]}),s.jsxs("div",{className:"filter-group",children:[s.jsx("h3",{className:"filter-title",children:"Stores"}),s.jsxs("ul",{className:"filter-list",children:[s.jsx("li",{children:s.jsxs("label",{children:[s.jsx("input",{type:"checkbox"})," Amazon"]})}),s.jsx("li",{children:s.jsxs("label",{children:[s.jsx("input",{type:"checkbox"})," Flipkart"]})}),s.jsx("li",{children:s.jsxs("label",{children:[s.jsx("input",{type:"checkbox"})," Myntra"]})}),s.jsx("li",{children:s.jsxs("label",{children:[s.jsx("input",{type:"checkbox"})," Uber"]})})]})]})]}),s.jsx("div",{className:"deals-grid",children:r.map(o=>s.jsx(Tr,{...o},o.id))})]})]}),s.jsx("style",{children:`
        .deals-section {
          padding: 60px 0;
          background: var(--bg-dark);
        }

        .section-title {
          font-size: 2rem;
          margin-bottom: 2rem;
        }

        .deals-layout {
          display: grid;
          grid-template-columns: 250px 1fr;
          gap: 2rem;
        }

        @media (max-width: 900px) {
          .deals-layout {
            grid-template-columns: 1fr;
          }
          .deals-sidebar {
            display: none; 
          }
        }

        @media (max-width: 768px) {
            .deals-grid {
                grid-template-columns: 1fr;
            }
        }

        .filter-group {
          margin-bottom: 2rem;
        }

        .filter-title {
          font-size: 1.1rem;
          margin-bottom: 1rem;
          color: var(--text-main);
        }

        .filter-list {
          list-style: none;
        }

        .filter-list li {
          margin-bottom: 0.5rem;
        }

        .filter-list label {
          color: var(--text-muted);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: var(--transition);
        }

        .filter-list label:hover {
          color: var(--primary);
        }

        .deals-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }
      `})]})},qa=()=>s.jsxs("footer",{className:"footer",children:[s.jsx("div",{className:"footer-top",children:s.jsx("div",{className:"container",children:s.jsxs("div",{className:"footer-grid",children:[s.jsxs("div",{className:"footer-brand",children:[s.jsx("a",{href:"/",className:"footer-logo",children:"Offerve"}),s.jsx("p",{className:"footer-desc",children:"Offerve is your ultimate destination for the best coupons, deals, and offers from top online stores. Save money on every purchase."})]}),s.jsxs("div",{className:"footer-links",children:[s.jsx("h4",{className:"footer-heading",children:"Company"}),s.jsx(Fe,{to:"/about",children:"About Us"}),s.jsx("a",{href:"#",children:"Contact"}),s.jsx("a",{href:"#",children:"Privacy Policy"}),s.jsx("a",{href:"#",children:"Terms of Use"})]}),s.jsxs("div",{className:"footer-links",children:[s.jsx("h4",{className:"footer-heading",children:"Popular Stores"}),s.jsx(Fe,{to:"/adda247-coupon-code",children:"Adda247"}),s.jsx(Fe,{to:"/unacademy-coupon-code",children:"Unacademy"}),s.jsx(Fe,{to:"/pw-coupon-code",children:"Physics Wallah"}),s.jsx(Fe,{to:"/stores",children:"View All Stores"})]}),s.jsxs("div",{className:"footer-newsletter",children:[s.jsx("h4",{className:"footer-heading",children:"Stay Updated"}),s.jsx("p",{className:"newsletter-text",children:"Subscribe to get the handpicked deals in your inbox."}),s.jsxs("div",{className:"newsletter-form",children:[s.jsx("input",{type:"email",placeholder:"Enter your email"}),s.jsx("button",{children:"Subscribe"})]})]})]})})}),s.jsx("div",{className:"footer-bottom",children:s.jsx("div",{className:"container",children:s.jsxs("p",{children:["© ",new Date().getFullYear()," Offerve. All rights reserved."]})})}),s.jsx("style",{children:`
        .footer {
          background: var(--secondary);
          color: var(--text-muted);
          border-top: none;
        }

        .footer-top {
          padding: 4rem 0;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
          gap: 3rem;
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        .footer-logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-main);
          display: block;
          margin-bottom: 1rem;
        }

        .footer-desc {
          margin-bottom: 1.5rem;
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-icon {
          width: 36px;
          height: 36px;
          background: rgba(255,255,255,0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          cursor: pointer;
          transition: var(--transition);
        }

        .social-icon:hover {
          background: var(--primary);
          color: white;
        }

        .footer-heading {
          color: var(--text-main);
          font-size: 1.1rem;
          margin-bottom: 1.2rem;
          font-weight: 600;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .footer-links a {
          transition: var(--transition);
        }

        .footer-links a:hover {
          color: var(--primary);
        }

        .newsletter-form {
          display: flex;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .newsletter-form input {
          flex: 1;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 0.6rem;
          border-radius: var(--radius-md);
          color: white;
          outline: none;
        }

        .newsletter-form button {
          background: var(--primary);
          color: white;
          padding: 0.6rem 1rem;
          border-radius: var(--radius-md);
          font-weight: 500;
          transition: var(--transition);
        }

        .newsletter-form button:hover {
          background: var(--primary-hover);
        }

        .footer-bottom {
          padding: 1.5rem 0;
          border-top: 1px solid rgba(255,255,255,0.05);
          text-align: center;
          font-size: 0.9rem;
        }
      `})]}),Sv=()=>s.jsxs("div",{className:"home-page",children:[s.jsx(La,{}),s.jsxs("main",{children:[s.jsx(gv,{}),s.jsx("section",{className:"intro-section",style:{padding:"2rem 1.5rem",background:"var(--bg-main)",textAlign:"center"},children:s.jsx("div",{className:"container",style:{maxWidth:"900px",margin:"0 auto"},children:s.jsxs("p",{style:{fontSize:"1.1rem",color:"var(--text-body)",lineHeight:"1.7"},children:["Offerve curates the latest coupons and discount offers from India’s most popular stores. Every deal is checked and updated so you can shop smarter and save more. Explore ",s.jsx("a",{href:"/categories",style:{color:"var(--primary)"},children:"categories"}),", trending ",s.jsx("a",{href:"/stores",style:{color:"var(--primary)"},children:"stores"}),", and exclusive promo codes updated in real time."]})})}),s.jsx(yv,{}),s.jsx(vv,{}),s.jsx(bv,{}),s.jsx(xv,{})]}),s.jsx("div",{className:"faq-section",style:{padding:"60px 0",background:"white",borderTop:"1px solid rgba(0,0,0,0.05)"},children:s.jsxs("div",{className:"container",style:{maxWidth:"800px"},children:[s.jsx("h2",{style:{textAlign:"center",marginBottom:"2rem",fontSize:"2rem"},children:"Frequently Asked Questions"}),s.jsx("div",{className:"faq-grid",style:{display:"grid",gap:"1.5rem"},children:[{q:"How does Offerve find and verify coupons?",a:"Offerve uses a dedicated team and automated systems to scour the web for the latest offers from top Indian retailers, verifying them manually to ensure they work."},{q:"Are the coupon codes updated daily?",a:"Yes, our database is updated in real-time. We continuously check for new promo codes and expire invalid ones to keep our deals fresh."},{q:"Is Offerve free to use?",a:"Absolutely! Offerve is completely free for all users. You don’t need to pay or sign up to access the best coupons."},{q:"Which stores offer the biggest discounts?",a:"Stores like Amazon, Flipkart, Myntra, and Swiggy frequently offer massive discounts during sale events, all of which are tracked on Offerve."},{q:"How do I redeem a coupon on Offerve?",a:"Simply click on 'Show Coupon Code' or 'View Offer' on any deal card. The code will be copied to your clipboard, and you'll be redirected to the store website to shop."}].map((r,o)=>s.jsxs("div",{className:"faq-item",style:{paddingBottom:"1.5rem",borderBottom:"1px solid #eee"},children:[s.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:"600",marginBottom:"0.5rem",color:"var(--text-main)"},children:r.q}),s.jsx("p",{style:{color:"var(--text-body)",lineHeight:"1.6"},children:r.a})]},o))}),s.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"https://schema.org","@type":"FAQPage",mainEntity:[{"@type":"Question",name:"How does Offerve find and verify coupons?",acceptedAnswer:{"@type":"Answer",text:"Offerve uses a dedicated team and automated systems to scour the web for the latest offers from top Indian retailers, verifying them manually to ensure they work."}},{"@type":"Question",name:"Are the coupon codes updated daily?",acceptedAnswer:{"@type":"Answer",text:"Yes, our database is updated in real-time. We continuously check for new promo codes and expire invalid ones to keep our deals fresh."}},{"@type":"Question",name:"Is Offerve free to use?",acceptedAnswer:{"@type":"Answer",text:"Absolutely! Offerve is completely free for all users. You don’t need to pay or sign up to access the best coupons."}},{"@type":"Question",name:"Which stores offer the biggest discounts?",acceptedAnswer:{"@type":"Answer",text:"Stores like Amazon, Flipkart, Myntra, and Swiggy frequently offer massive discounts during sale events, all of which are tracked on Offerve."}},{"@type":"Question",name:"How do I redeem a coupon on Offerve?",acceptedAnswer:{"@type":"Answer",text:"Simply click on 'Show Coupon Code' or 'View Offer' on any deal card. The code will be copied to your clipboard, and you'll be redirected to the store website to shop."}}]})}})]})}),s.jsx(qa,{})]}),Ev=()=>{const r=Jl(),o=Ua;return s.jsxs("div",{className:"stores-page",children:[s.jsx(La,{}),s.jsx("main",{className:"main-content",children:s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"page-header",children:[s.jsx("h1",{className:"page-title",children:"All Stores"}),s.jsx("p",{className:"page-desc",children:"Browse coupons and deals from your favorite top brands."})]}),s.jsx("div",{className:"stores-grid",children:o.map((c,u)=>s.jsxs("div",{className:"store-card",onClick:()=>r(`/${c.slug}`),children:[s.jsx("div",{className:"store-logo-wrapper",children:s.jsx("img",{src:`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${c.domain}&size=128`,alt:c.name,className:"store-logo",loading:"lazy",onError:f=>{f.target.style.display="none",f.target.parentElement.innerText=c.name[0]}})}),s.jsx("h3",{className:"store-name",children:c.name}),s.jsx("button",{className:"view-offers-btn",children:"View Offers"})]},u))})]})}),s.jsx(qa,{}),s.jsx("style",{children:`
                .main-content {
                    padding: 120px 0 60px; /* Account for fixed header */
                    min-height: 80vh;
                }

                .page-header {
                    text-align: center;
                    margin-bottom: 3rem;
                }

                .page-title {
                    font-size: 2.5rem;
                    font-weight: 700;
                    margin-bottom: 0.5rem;
                    color: var(--text-main);
                }

                .page-desc {
                    color: var(--text-muted);
                    font-size: 1.1rem;
                }

                .stores-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
                    gap: 1.5rem;
                }

                .store-card {
                    background: var(--bg-card);
                    padding: 1.5rem;
                    border-radius: var(--radius-lg);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    gap: 1rem;
                    border: 1px solid rgba(0,0,0,0.05);
                    box-shadow: var(--shadow-sm);
                    transition: var(--transition);
                    cursor: pointer;
                }

                .store-card:hover {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-md);
                    border-color: var(--primary);
                }

                .store-logo-wrapper {
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    background: #f8fafc;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 10px;
                    border: 1px solid rgba(0,0,0,0.05);
                }

                .store-logo {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }

                .store-name {
                    font-size: 1rem;
                    font-weight: 600;
                    color: var(--text-main);
                }

                .view-offers-btn {
                    width: 100%;
                    padding: 0.5rem;
                    border: 1px solid var(--primary);
                    color: var(--primary);
                    border-radius: var(--radius-md);
                    font-size: 0.85rem;
                    font-weight: 500;
                    transition: var(--transition);
                }

                .store-card:hover .view-offers-btn {
                    background: var(--primary);
                    color: white;
                }
            `})]})},Av=()=>{const[r,o]=T.useState(null),c=f=>{o(r===f?null:f)};T.useEffect(()=>{document.title="About Offerve - India's #1 Coupon & Deal Discovery Engine";const f=document.querySelector('meta[name="description"]');f&&f.setAttribute("content","Learn about Offerve, the leading destination for verified coupons, promo codes, and exclusive deals in India. Discover how we help millions save money daily.")},[]);const u=[{q:"Is Offerve completely free to use?",a:"Yes! Offerve is 100% free for all users. You never have to pay a subscription fee or hidden charge to access our coupons."},{q:"How often are coupons updated?",a:"Our database is updated in real-time. We have a dedicated team and automated systems that add hundreds of new coupons daily and remove expired ones to keep your experience frustration-free."},{q:"Do I need to register to use a coupon?",a:"No registration is required. You can search for a store, click on a coupon to copy it, and start saving immediately at the store's checkout page."},{q:"What if a coupon doesn't work?",a:"While we strive for 100% accuracy, sometimes retailers change terms without notice. If you find a broken code, please verify the terms and conditions. If it still fails, let us know via our Contact page, and we'll fix it instantly."},{q:"Do you have a mobile app?",a:"Currently, we offer a highly optimized mobile-responsive website that works perfectly on all smartphones and tablets, so you can save on the go without downloading an app."},{q:"Is it safe to use coupons from Offerve?",a:"Absolutely. We only partner with reputable online retailers and verify our links to ensure they are safe and secure. We respect your privacy and do not track your personal shopping data."},{q:"Can I submit a coupon I found?",a:"Yes, we love community contributions! If you found a working code that we missed, please share it through our Contact Us page so other shoppers can benefit."},{q:"How do you make money if it's free?",a:"We may earn a small commission from retailers when you make a purchase using our links. This comes at no extra cost to you—in fact, it ensures we can keep the platform free and running."}];return s.jsxs("div",{className:"about-page",children:[s.jsx(La,{}),s.jsxs("main",{style:{minHeight:"100vh",background:"var(--bg-light)",fontFamily:"var(--font-main, sans-serif)"},children:[s.jsx("section",{className:"hero-section",style:{background:"linear-gradient(135deg, var(--bg-main) 0%, #ffffff 100%)",padding:"5rem 1.5rem",textAlign:"center"},children:s.jsxs("div",{className:"container",style:{maxWidth:"900px",margin:"0 auto"},children:[s.jsxs("h1",{style:{fontSize:"3rem",fontWeight:"800",marginBottom:"1.5rem",color:"var(--text-main)",letterSpacing:"-1px"},children:["We're on a Mission to ",s.jsx("br",{}),s.jsx("span",{style:{color:"var(--primary)"},children:"Democratize Savings"})]}),s.jsx("p",{style:{fontSize:"1.25rem",color:"var(--text-gray)",lineHeight:"1.6",maxWidth:"700px",margin:"0 auto"},children:"Offerve is India's fastest-growing destination for smart shoppers. We combine cutting-edge technology with human verification to bring you thousands of active deals every single day."})]})}),s.jsx("section",{style:{padding:"0 1.5rem",marginTop:"-3rem"},children:s.jsx("div",{className:"container",style:{maxWidth:"1000px",margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"2rem"},children:[{label:"Active Coupons",value:"50,000+"},{label:"Partner Stores",value:"2,500+"},{label:"Happy Users",value:"1M+"},{label:"Daily Updates",value:"24/7"}].map((f,m)=>s.jsxs("div",{style:{background:"white",padding:"2rem",borderRadius:"16px",boxShadow:"0 10px 30px rgba(0,0,0,0.05)",textAlign:"center"},children:[s.jsx("div",{style:{fontSize:"2.5rem",fontWeight:"bold",color:"var(--primary)",marginBottom:"0.5rem"},children:f.value}),s.jsx("div",{style:{fontSize:"1rem",color:"var(--text-gray)",fontWeight:"600"},children:f.label})]},m))})}),s.jsx("section",{className:"content-section",style:{padding:"5rem 1.5rem"},children:s.jsxs("div",{className:"container",style:{maxWidth:"900px",margin:"0 auto"},children:[s.jsxs("div",{style:{marginBottom:"4rem"},children:[s.jsx("h2",{style:{fontSize:"2.2rem",marginBottom:"1.5rem",color:"var(--text-main)",borderBottom:"2px solid var(--primary-light, #eee)",paddingBottom:"0.5rem",display:"inline-block"},children:"Who We Are"}),s.jsxs("p",{style:{fontSize:"1.1rem",lineHeight:"1.8",color:"var(--text-body)",marginBottom:"1rem"},children:["Founded with a simple yet powerful idea, ",s.jsx("strong",{children:"Offerve"})," started as a small project to help friends find working promo codes. Today, it has evolved into a comprehensive savings platform trust by millions."]}),s.jsxs("p",{style:{fontSize:"1.1rem",lineHeight:"1.8",color:"var(--text-body)"},children:["In a digital age where online shopping is the norm, finding a working discount code shouldn't feel like finding a needle in a haystack. That's why we built Offerve – a platform that prioritizes ",s.jsx("strong",{children:"accuracy, transparency, and ease of use"}),". We are a team of deal hunters, tech enthusiasts, and savings experts dedicated to keeping money in your pocket."]})]}),s.jsxs("div",{style:{marginBottom:"4rem"},children:[s.jsx("h2",{style:{fontSize:"2.2rem",marginBottom:"2rem",color:"var(--text-main)",textAlign:"center"},children:"How We Work"}),s.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"2rem"},children:[{title:"1. We Hunt",desc:"Our automated algorithms and expert team scan the web 24/7 to find the latest offers from top brands."},{title:"2. We Verify",desc:"We don't just post anything. Every coupon is manually tested to ensure it actually works at checkout."},{title:"3. You Save",desc:"We organize deals clearly, so you can copy a code and apply it in seconds, saving money instantly."}].map((f,m)=>s.jsxs("div",{style:{background:"#f8f9fa",padding:"2rem",borderRadius:"12px",border:"1px solid #eee"},children:[s.jsx("h3",{style:{marginBottom:"1rem",color:"var(--primary)",fontSize:"1.4rem"},children:f.title}),s.jsx("p",{style:{color:"var(--text-body)",lineHeight:"1.6"},children:f.desc})]},m))})]}),s.jsxs("div",{style:{marginBottom:"4rem"},children:[s.jsx("h2",{style:{fontSize:"2rem",marginBottom:"1.5rem",color:"var(--text-main)"},children:"Your One-Stop Shop for Everything"}),s.jsxs("p",{style:{fontSize:"1.05rem",lineHeight:"1.7",color:"var(--text-body)"},children:["Whether you are looking to upgrade your wardrobe with the latest ",s.jsx("strong",{children:"Fashion"})," trends from Myntra and Ajio, ordering delicious meals from ",s.jsx("strong",{children:"Food Delivery"})," giants like Swiggy and Zomato, or booking your next vacation via ",s.jsx("strong",{children:"Travel"})," portals like MakeMyTrip, Offerve has you covered. We also feature extensive deals for ",s.jsx("strong",{children:"Electronics"}),", ",s.jsx("strong",{children:"Beauty"}),", ",s.jsx("strong",{children:"Hosting"}),", and ",s.jsx("strong",{children:"Education"})," platforms."]})]}),s.jsxs("div",{children:[s.jsx("h2",{style:{fontSize:"2.2rem",marginBottom:"2rem",color:"var(--text-main)",textAlign:"center"},children:"Frequently Asked Questions"}),s.jsx("div",{style:{display:"grid",gap:"1rem"},children:u.map((f,m)=>s.jsxs("div",{onClick:()=>c(m),style:{borderBottom:"1px solid #eee",padding:"1.5rem",background:r===m?"#f8f9fa":"white",borderRadius:"8px",cursor:"pointer",transition:"background 0.3s ease"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsx("h3",{style:{fontSize:"1.15rem",margin:0,color:"var(--text-main)",fontWeight:"600"},children:f.q}),s.jsx("span",{style:{fontSize:"1.5rem",color:"var(--primary)",lineHeight:"1",transform:r===m?"rotate(45deg)":"rotate(0deg)",transition:"transform 0.3s ease",display:"inline-block"},children:"+"})]}),r===m&&s.jsx("div",{style:{marginTop:"1rem",paddingTop:"1rem",borderTop:"1px solid rgba(0,0,0,0.05)",animation:"fadeIn 0.3s ease"},children:s.jsx("p",{style:{color:"var(--text-gray)",lineHeight:"1.6",margin:0},children:f.a})})]},m))})]}),s.jsx("section",{style:{background:"var(--primary)",padding:"4rem 1.5rem",textAlign:"center",color:"white",borderRadius:"16px",marginTop:"4rem"},children:s.jsxs("div",{className:"container",style:{maxWidth:"700px",margin:"0 auto"},children:[s.jsx("h2",{style:{fontSize:"2.5rem",marginBottom:"1rem"},children:"Ready to Start Saving?"}),s.jsx("p",{style:{fontSize:"1.2rem",marginBottom:"2rem",opacity:"0.9"},children:"Join massive community of smart shoppers and never pay full price again."}),s.jsx("a",{href:"/",style:{display:"inline-block",background:"white",color:"var(--primary)",padding:"1rem 2.5rem",fontSize:"1.2rem",fontWeight:"bold",borderRadius:"50px",textDecoration:"none",boxShadow:"0 4px 15px rgba(0,0,0,0.2)"},children:"Browse Today's Top Deals"})]})})]})})]}),s.jsx(qa,{})]})},wv=()=>{const{slug:r}=lm(),o=Jl(),[c,u]=T.useState(null),[f,m]=T.useState([]),[p,v]=T.useState([]),[y,g]=T.useState({active:0,verified:0});if(T.useEffect(()=>{const x=Ua.find(X=>X.slug===r);if(!x){o("/stores");return}u(x);const z=Nr(x);m(z),g({active:z.length,verified:z.filter(X=>X.verified).length});const U=new Date().getFullYear(),k=`Best ${x.name} Coupon Codes, Promo Codes & Offers – ${U} | Offerve`,Y=`Find the latest ${x.name} coupon codes, promo codes, and verified offers. Updated daily so you can save more on ${x.name} shopping. Exclusive deals only on Offerve.`;document.title=k;const H=(X,le,ye="name")=>{let fe=document.querySelector(`meta[${ye}="${X}"]`);fe||(fe=document.createElement("meta"),fe.setAttribute(ye,X),document.head.appendChild(fe)),fe.setAttribute("content",le)};H("description",Y),H("og:title",k,"property"),H("og:description",`Verified deals and offers for ${x.name}.`,"property"),H("og:url",`https://offerve.com/${r}`,"property"),H("og:image",`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${x.domain}&size=256`,"property"),H("twitter:card","summary_large_image","name");const V=Ua.filter(X=>X.id!==x.id).sort(()=>.5-Math.random()).slice(0,4);v(V)},[r,o]),!c)return s.jsx("div",{className:"loading",style:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},children:"Loading..."});const A=new Date().getFullYear();return s.jsxs("div",{className:"store-page",children:[s.jsx(La,{}),s.jsxs("main",{className:"main-content",children:[s.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"WebPage",name:`Best ${c.name} Coupon Codes`,description:`Save with latest ${c.name} coupons.`,breadcrumb:{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://offerve.com/"},{"@type":"ListItem",position:2,name:"Stores",item:"https://offerve.com/stores"},{"@type":"ListItem",position:3,name:c.name,item:`https://offerve.com/${c.slug}`}]}},{"@type":"Organization",name:c.name,url:`https://${c.domain}`,logo:`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${c.domain}&size=128`},{"@type":"FAQPage",mainEntity:c.faqs.map(x=>({"@type":"Question",name:x.q,acceptedAnswer:{"@type":"Answer",text:x.a}}))}]})}}),s.jsx("div",{className:"breadcrumbs-section",children:s.jsx("div",{className:"container",children:s.jsxs("div",{className:"breadcrumbs",children:[s.jsx(Fe,{to:"/",children:"Home"}),s.jsx("span",{className:"separator",children:"›"}),s.jsx(Fe,{to:"/stores",children:"Stores"}),s.jsx("span",{className:"separator",children:"›"}),s.jsx("span",{className:"current",children:c.name})]})})}),s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"store-header",children:[s.jsx("div",{className:"store-logo-large",children:s.jsx("img",{src:`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${c.domain}&size=128`,alt:`${c.name} Logo`,onError:x=>{x.target.style.display="none",x.target.parentElement.innerText=c.name[0]}})}),s.jsxs("div",{className:"store-info",children:[s.jsxs("h1",{className:"page-title1",children:[c.name," Coupon Codes & Offers – Verified Deals for ",A]}),s.jsxs("p",{className:"store-intro",children:["Offerve brings you the best ",s.jsx("strong",{children:c.name})," coupons and deals to help you save on every order. These offers are verified regularly and cover discounts on popular categories like fashion, accessories, electronics, daily essentials, and more."]}),s.jsxs("div",{className:"store-stats",children:[s.jsxs("span",{className:"stat-badge",children:[s.jsx("span",{className:"icon",children:"🏷️"})," ",y.active," Active Offers"]}),s.jsxs("span",{className:"stat-badge success",children:[s.jsx("span",{className:"icon",children:"✅"})," Verified Today"]})]})]})]}),s.jsxs("div",{className:"store-layout",children:[s.jsxs("div",{className:"coupons-column",children:[s.jsxs("div",{className:"filter-bar",children:[s.jsx("span",{className:"filter-label",children:"Sort By:"}),s.jsx("button",{className:"filter-btn active",children:"Top Rated"}),s.jsx("button",{className:"filter-btn",children:"Exclusive"}),s.jsx("button",{className:"filter-btn",children:"Expiring Soon"})]}),s.jsx("div",{className:"coupons-list",children:f.map(x=>s.jsx(Tr,{merchant:{name:c.name,domain:c.domain,logo:`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${c.domain}&size=128`},...x},x.id))}),s.jsx("div",{className:"load-more-container",style:{textAlign:"center",marginTop:"2rem"},children:s.jsxs("button",{className:"load-more-btn",children:["Show More ",c.name," Offers"]})})]}),s.jsxs("aside",{className:"sidebar",children:[s.jsxs("div",{className:"sidebar-widget about-widget",children:[s.jsxs("h3",{children:["About ",c.name]}),s.jsx("p",{className:"widget-text",children:c.description}),s.jsxs("p",{className:"widget-text",style:{marginTop:"0.5rem"},children:["Current Best Offer: ",s.jsx("strong",{children:c.bestOffers})]})]}),c.faqs.length>0&&s.jsxs("div",{className:"sidebar-widget faq-widget",children:[s.jsx("h3",{children:"FAQs"}),s.jsx("div",{className:"faq-mini-list",children:c.faqs.map((x,z)=>s.jsxs("div",{className:"faq-mini-item",children:[s.jsxs("strong",{children:["Q: ",x.q]}),s.jsxs("p",{children:["A: ",x.a]})]},z))})]})]})]}),s.jsxs("div",{className:"related-stores-section",children:[s.jsx("h3",{className:"section-title-small",children:"Similar Stores"}),s.jsx("div",{className:"related-grid",children:p.map(x=>s.jsxs(Fe,{to:`/${x.slug}`,className:"related-store-card",children:[s.jsx("img",{src:`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${x.domain}&size=64`,alt:x.name,className:"related-icon"}),s.jsx("span",{children:x.name})]},x.id))})]}),s.jsx("div",{style:{marginTop:"3rem",textAlign:"center"},children:s.jsx(Fe,{to:"/stores",style:{color:"var(--primary)",fontWeight:"600",textDecoration:"underline"},children:"Browse All Stores"})})]})]}),s.jsx(qa,{}),s.jsx("style",{children:`
                .main-content {
                    padding-top: 20px;
                    padding-bottom: 60px;
                    background: var(--bg-main);
                    min-height: 80vh;
                }

                .breadcrumbs-section {
                    background: white;
                    padding: 0.8rem 0;
                    border-bottom: 1px solid rgba(0,0,0,0.05);
                    margin-bottom: 2rem;
                }

                .breadcrumbs {
                    font-size: 0.85rem;
                    color: var(--text-muted);
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .separator { color: #cbd5e1; font-size: 1.2em; line-height: 0.8; }
                .current { color: var(--text-main); font-weight: 500; }

                .store-header {
                    display: flex;
                    align-items: flex-start;
                    gap: 2rem;
                    background: white;
                    padding: 2.5rem;
                    border-radius: var(--radius-lg);
                    border: 1px solid rgba(0,0,0,0.05);
                    margin-bottom: 2.5rem;
                    box-shadow: var(--shadow-sm);
                }

                .store-logo-large {
                    width: 110px;
                    height: 110px;
                    border-radius: var(--radius-lg);
                    background: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 10px;
                    border: 1px solid rgba(0,0,0,0.08);
                    flex-shrink: 0;
                    box-shadow: var(--shadow-sm);
                }
                
                .store-logo-large img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }

                .store-info { flex: 1; }

                .page-title1 {
                    font-size: 2rem;
                    font-weight: 800;
                    margin-bottom: 1rem;
                    color: var(--text-main);
                    line-height: 1.2;
                    letter-spacing: -0.5px;
                }

                .store-intro { 
                    color: var(--text-body); 
                    margin-bottom: 1.5rem; 
                    line-height: 1.6;
                    font-size: 1.05rem;
                    max-width: 800px;
                }
                
                .store-intro strong { color: var(--text-main); font-weight: 600; }

                .store-stats { display: flex; gap: 1rem; }
                
                .stat-badge {
                    background: #f1f5f9;
                    padding: 0.4rem 1rem;
                    border-radius: 30px;
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: var(--text-body);
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .stat-badge.success {
                    background: #ecfdf5;
                    color: #059669;
                    border: 1px solid rgba(16, 185, 129, 0.2);
                }
                
                .stat-badge .icon { font-size: 1.1em; }

                .store-layout {
                    display: grid;
                    grid-template-columns: 1fr 340px;
                    gap: 2.5rem;
                }

                .filter-bar {
                    display: flex;
                    align-items: center;
                    gap: 0.8rem;
                    margin-bottom: 1.5rem;
                    padding-bottom: 1rem;
                    border-bottom: 1px solid rgba(0,0,0,0.05);
                }

                .filter-label { font-weight: 600; color: var(--text-muted); font-size: 0.9rem; margin-right: 0.5rem; }

                .filter-btn {
                    padding: 0.5rem 1.2rem;
                    border-radius: 30px;
                    border: 1px solid rgba(0,0,0,0.08);
                    font-size: 0.9rem;
                    color: var(--text-body);
                    font-weight: 500;
                    background: white;
                    transition: var(--transition);
                }

                .filter-btn:hover, .filter-btn.active {
                    background: var(--primary);
                    color: white;
                    border-color: var(--primary);
                    box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.2);
                }

                .coupons-list {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }
                
                .load-more-btn {
                    padding: 0.8rem 2rem;
                    background: white;
                    border: 1px solid rgba(0,0,0,0.1);
                    border-radius: 30px;
                    color: var(--text-body);
                    font-weight: 600;
                    transition: var(--transition);
                }
                
                .load-more-btn:hover {
                    border-color: var(--primary);
                    color: var(--primary);
                    transform: translateY(-2px);
                    box-shadow: var(--shadow-sm);
                }

                .sidebar { display: flex; flex-direction: column; gap: 2rem; }

                .sidebar-widget {
                    background: white;
                    padding: 1.5rem;
                    border-radius: var(--radius-lg);
                    border: 1px solid rgba(0,0,0,0.06);
                    box-shadow: var(--shadow-sm);
                }

                .sidebar-widget h3 {
                    font-size: 1.2rem;
                    margin-bottom: 1.2rem;
                    padding-bottom: 0.8rem;
                    border-bottom: 1px solid #f1f5f9;
                    font-weight: 700;
                }
                
                .widget-text {
                    color: var(--text-body);
                    line-height: 1.6;
                    font-size: 0.95rem;
                }

                .faq-mini-item { 
                    margin-bottom: 1.2rem; 
                    padding-bottom: 1.2rem;
                    border-bottom: 1px dashed #e2e8f0;
                }
                .faq-mini-item:last-child { margin-bottom: 0; border-bottom: none; padding-bottom: 0; }
                
                .faq-mini-item strong { display: block; font-size: 0.95rem; margin-bottom: 0.4rem; color: var(--text-main); font-weight: 600; }
                .faq-mini-item p { font-size: 0.9rem; color: var(--text-body); line-height: 1.6; }

                .related-stores-section { 
                    margin-top: 4rem; 
                    padding-top: 3rem;
                    border-top: 1px solid rgba(0,0,0,0.05);
                }
                
                .section-title-small { 
                    font-size: 1.5rem; 
                    margin-bottom: 2rem; 
                    font-weight: 700;
                }

                .related-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
                    gap: 1.2rem;
                }

                .related-store-card {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    background: white;
                    padding: 1.2rem;
                    border-radius: var(--radius-lg);
                    border: 1px solid rgba(0,0,0,0.05);
                    transition: var(--transition);
                    text-decoration: none;
                }

                .related-store-card:hover {
                    box-shadow: var(--shadow-md);
                    transform: translateY(-4px);
                    border-color: rgba(37, 99, 235, 0.2);
                }
                
                .related-store-card span {
                    font-weight: 600;
                    color: var(--text-main);
                }

                .related-icon { width: 40px; height: 40px; border-radius: 50%; object-fit: contain; }

                @media (max-width: 900px) {
                    .store-layout { grid-template-columns: 1fr; }
                    .sidebar { order: 2; }
                    
                    .store-header {
                        flex-direction: column;
                        text-align: center;
                        align-items: center;
                        padding: 2rem 1.5rem;
                    }
                    
                    .store-logo-large { width: 90px; height: 90px; }
                    .page-title1 { font-size: 1.6rem; }
                    .store-stats { justify-content: center; }
                    .filter-bar { overflow-x: auto; padding-bottom: 1rem; }
                }

            `})]})},Cv=()=>{const[r]=Ay(),o=r.get("q")||"",[c,u]=T.useState([]),[f,m]=T.useState("all");T.useEffect(()=>{if(o){Qe.trackSearch(o);const v=xm.search(o);u(v)}},[o]);const p=f==="all"?c:c.filter(v=>v.type===f);return s.jsxs("div",{className:"page-wrapper",children:[s.jsx(La,{}),s.jsxs("div",{className:"container search-page",children:[s.jsxs("h1",{className:"search-heading",children:['Results for "',o,'"']}),s.jsxs("div",{className:"search-filters",children:[s.jsxs("button",{className:f==="all"?"active":"",onClick:()=>m("all"),children:["All (",c.length,")"]}),s.jsx("button",{className:f==="store"?"active":"",onClick:()=>m("store"),children:"Stores"}),s.jsx("button",{className:f==="coupon"?"active":"",onClick:()=>m("coupon"),children:"Coupons"})]}),s.jsx("div",{className:"search-grid",children:p.length>0?p.map((v,y)=>s.jsxs("div",{className:"search-result-item",children:[v.type==="coupon"&&s.jsx(Tr,{...v.data,id:v.id.split("-")[1],merchant:v.data.merchant}),v.type==="store"&&s.jsxs("div",{className:"store-result-card",children:[s.jsx("div",{className:"store-logo",children:v.data.name[0]}),s.jsxs("div",{className:"store-info",children:[s.jsx("h3",{children:v.data.name}),s.jsx("p",{children:v.data.description}),s.jsx("a",{href:"/"+v.data.slug,className:"btn-small",children:"Visit Store"})]})]}),v.type==="page"&&s.jsxs("div",{className:"page-result-card",children:[s.jsx("h3",{children:v.title}),s.jsx("span",{className:"type-tag",children:"Guide"})]})]},y)):s.jsxs("div",{className:"no-results",children:[s.jsxs("h3",{children:['No results found for "',o,'"']}),s.jsx("p",{children:"Try checking your spelling or using a different keyword."})]})})]}),s.jsx(qa,{}),s.jsx("style",{children:`
                .search-page { padding: 3rem 1rem; min-height: 80vh; }
                .search-heading { font-size: 2rem; margin-bottom: 2rem; color: var(--text-main); }
                
                .search-filters { display: flex; gap: 1rem; margin-bottom: 2rem; border-bottom: 1px solid #eee; padding-bottom: 1rem; }
                .search-filters button {
                    background: none; border: none; font-size: 1rem; color: var(--text-muted); padding: 0.5rem 1rem; cursor: pointer; font-weight: 600; border-radius: 20px; transition: 0.2s;
                }
                .search-filters button.active, .search-filters button:hover { background: #f1f5f9; color: var(--primary); }

                .search-grid { display: flex; flex-direction: column; gap: 1.5rem; max-width: 800px; }

                .store-result-card {
                    display: flex; gap: 1.5rem; background: white; padding: 1.5rem; border-radius: var(--radius-lg); border: 1px solid rgba(0,0,0,0.05); align-items: center;
                }
                .store-logo {
                    width: 60px; height: 60px; background: #e0f2fe; color: var(--primary); font-size: 1.5rem; display: flex; align-items: center; justify-content: center; border-radius: 50%; font-weight: 700;
                }
                .store-info h3 { margin-bottom: 0.5rem; font-size: 1.2rem; }
                .store-info p { color: var(--text-body); font-size: 0.9rem; margin-bottom: 0.8rem; }
                .btn-small { text-decoration: none; color: white; background: var(--primary); padding: 0.4rem 1rem; border-radius: 4px; font-size: 0.85rem; }

                .page-result-card { background: white; padding: 1.5rem; border-radius: var(--radius-lg); border: 1px solid rgba(0,0,0,0.05); }
                .type-tag { font-size: 0.75rem; background: #f1f5f9; padding: 2px 6px; border-radius: 4px; margin-top: 0.5rem; display: inline-block; }

                .no-results { text-align: center; color: var(--text-muted); margin-top: 4rem; }
            `})]})},Sm=[{id:"super-money-super-pro-card",slug:"super-money-super-pro-card",title:"Super Money Super Pro Card Review: Is This the Best Lifetime Free Credit Card?",excerpt:"Discover whether the Super Money Super Pro Card is the best lifetime free credit card. Full review, benefits, charges, approval tips & apply link inside.",date:"2025-12-12",author:"Offerve",thumbnail:"/assets/deals/super-money-pro-thumbnail.png",ogImage:"/assets/og-super-money-pro.jpg",tags:["credit card","cashback","Super Money","Super Pro","best credit card","apply credit card"],ctaText:"Apply Now",ctaLink:"https://link.super.money/46b7wowF6Ub",pinned:!0,seo:{title:"Best Lifetime Free Credit Card? Super Money Super Pro Card Full Review & Benefits (2025)",description:"Discover whether the Super Money Super Pro Card is the best lifetime free credit card. Full review, benefits, charges, approval tips & apply link inside."},content:`
        <h2>Introduction: Why This Card Is Getting Popular</h2>
        <p>In the crowded world of financial products, finding the <strong>best lifetime free credit card</strong> can feel like finding a needle in a haystack. Enter the <strong>Super Money Super Pro Card</strong>, a relatively new entrant that is shaking up the credit card market in India. With promises of high cashback rates, zero annual fees, and seamless digital approval, it is quickly gaining traction among millennials and Gen Z spenders.</p>
        <p>This comprehensive review dives deep into every aspect of the Super Money Super Pro Card. We analyze its features, hidden charges, rewards structure, and real-world usability to help you decide if this is the <strong>best credit card in India</strong> for your wallet in 2025.</p>

        <h2>Key Features & Benefits</h2>
        <p>The card is packed with features designed for everyday spenders. Unlike premium travel cards that require complex point redemptions, the Super Pro card focuses on simplicity and direct value.</p>

        <h3>Cashback Structure</h3>
        <p>The core appeal of this card lies in its straightforward cashback model. Here is how it breaks down:</p>
        <ul>
            <li><strong>5% Cashback</strong> on all online spending (capped at ₹500 per month).</li>
            <li><strong>1% Unlimited Cashback</strong> on all offline retail spends.</li>
            <li><strong>Flat 10% Off</strong> on partner brands like Zomato, Swiggy, and Uber (seasonal offers).</li>
        </ul>
        <p>This structure makes it a contender for the <strong>best cashback credit card</strong> title, especially for those who shop heavily online.</p>

        <h3>Welcome Benefits</h3>
        <p>New users are greeted with a generous welcome package. Upon activation and your first transaction of ₹500 or more, you receive:</p>
        <ul>
            <li>₹500 worth of Amazon Pay Vouchers.</li>
            <li>3 Months of complimentary Swiggy One Lite membership.</li>
        </ul>

        <h3>Lifetime Free Conditions</h3>
        <p>While marketed as a premium product, the Super Pro card is often offered as <strong>Lifetime Free (LTF)</strong> for eligible customers. There are no joining fees or annual fees if you apply through specific partner links or meet the income criteria of ₹25,000/month.</p>

        <h3>Reward Multipliers</h3>
        <p>The card offers 5X rewards on travel bookings made via the dedicated Super Money app. This is a massive perk for frequent flyers who want to earn extra on flights and hotels without paying for a high-fee travel card.</p>

        <h3>Everyday Usage Perks</h3>
        <ul>
            <li><strong>Fuel Surcharge Waiver:</strong> 1% waiver across all petrol pumps in India (for transactions between ₹400 and ₹4,000).</li>
            <li><strong>No-Cost EMI:</strong> Access to exclusive no-cost EMI offers on Amazon and Flipkart during major sales.</li>
        </ul>

        <div class="highlight-box">
            <p><strong>Pro Tip:</strong> Use this card for all your UPI transactions via the Super Money app to earn additional fractional rewards, a feature rarely seen in standard credit cards.</p>
        </div>

        <h2>Fees, Charges & Hidden Costs</h2>
        <p>Transparency is key when choosing a financial product. Here is a detailed breakdown of the costs associated with the Super Money Super Pro Card:</p>
        <ul>
            <li><strong>Annual Fee:</strong> ₹0 (Lifetime Free for limited period applicants). Usually ₹499 + GST.</li>
            <li><strong>Interest Rate:</strong> 3.5% per month (42% per annum). This is standard for unsecured credit cards. <em>Always pay your full due amount to avoid this.</em></li>
            <li><strong>Late Payment Charge:</strong> Ranges from ₹100 to ₹1200 depending on the outstanding balance.</li>
            <li><strong>Forex Markup:</strong> 3.5% on international transactions. (Not recommended for international travel).</li>
            <li><strong>Cash Withdrawal Fee:</strong> 2.5% of the withdrawal amount or ₹500, whichever is higher.</li>
        </ul>

        <h2>Who Should Get This Card? Ideal Users</h2>
        <p>The Super Money Super Pro Card is not for everyone. It is best suited for:</p>
        <ul>
            <li><strong>First-Time Cardholders:</strong> Its easy approval process makes it a perfect <strong>free credit card with high approval</strong> rates for beginners.</li>
            <li><strong>Online Shoppers:</strong> If 80% of your expenses are on Amazon, Flipkart, or food delivery, the 5% cashback is unbeatable.</li>
            <li><strong>Salary Account Holders:</strong> Those with a stable monthly income looking to build credit history.</li>
        </ul>

        <h2>Advantages & Disadvantages</h2>
        <div class="comparison-table">
            <table border="1" cellpadding="10" cellspacing="0" width="100%">
                <tr>
                    <th width="50%">Pros</th>
                    <th>Cons</th>
                </tr>
                <tr>
                    <td valign="top">
                        <ul>
                            <li>Lifetime Free (for most users)</li>
                            <li>Direct Cashback (no reward points confusion)</li>
                            <li>High approval rate for salaried employees</li>
                            <li>Great mobile app experience</li>
                        </ul>
                    </td>
                    <td valign="top">
                        <ul>
                            <li>5% Cashback is capped at ₹500/mo</li>
                            <li>High forex markup (3.5%)</li>
                            <li>No airport lounge access on base variant</li>
                        </ul>
                    </td>
                </tr>
            </table>
        </div>

        <h2>How to Get Approved Fast</h2>
        <p>Looking for <strong>easy approval credit card</strong> tips? The Super Money team prioritized digital-first onboarding. To maximize your chances:</p>
        <ol>
            <li>Ensure your mobile number is linked to your Aadhaar.</li>
            <li>Have your PAN card handy for video KYC.</li>
            <li>Maintain a credit score of 720+ (though new-to-credit users are also considered).</li>
            <li><strong>Apply via the partner link below</strong> for priority processing.</li>
        </ol>

        <div class="in-article-cta">
            <span class="cta-note">Apply through this link — users often get faster approval and better rewards.</span>
            <a href="https://link.super.money/46b7wowF6Ub" target="_blank" rel="nofollow noopener noreferrer" class="in-article-btn">Apply Now</a>
        </div>

        <h2>Super Money Super Pro vs Other Popular Cards</h2>
        <p>How does it stack up against the competition?</p>
        <ul>
            <li><strong>Vs. Amazon Pay ICICI:</strong> Amazon Pay gives 5% only for Prime members on Amazon. Super Money gives 5% on <em>all</em> online spends (with a cap), making it more versatile for non-Amazon users.</li>
            <li><strong>Vs. Axis Ace:</strong> Axis Ace has a joining fee and recently devalued its perks. Super Pro remains LTF with stable rewards.</li>
            <li><strong>Vs. SBI Cashback:</strong> SBI Cashback is the gold standard but has stricter approval norms. Super Money is much easier to get approved for.</li>
        </ul>

        <h2>Real-Life Usage Examples</h2>
        <p><em>Case Study: Arjun, a Software Engineer</em></p>
        <p>Arjun spends approximately ₹15,000 online monthly on food, groceries, and utilities. By switching to the Super Money Super Pro Card, he earns the max capped cashback of ₹500 monthly, plus 1% on his offline expenses. Over a year, he saves over ₹7,000 simply by changing his payment method—all without paying a single rupee in annual fees.</p>

        <h2>Is This the Best Lifetime Free Credit Card in 2025?</h2>
        <p>Verdict: <strong>Yes, for most users.</strong> while it may not offer luxury travel perks like lounge access or low forex fees, it excels at what it promises: putting cash back in your pocket. The simplified reward structure combined with the "Lifetime Free" tag makes it a must-have in your wallet, even if just as a secondary card for online offers.</p>

        <div class="in-article-cta">
            <span class="cta-note">Apply through this link — users often get faster approval and better rewards.</span>
            <a href="https://link.super.money/46b7wowF6Ub" target="_blank" rel="nofollow noopener noreferrer" class="in-article-btn">Apply Now</a>
        </div>

        <h2>Frequently Asked Questions</h2>
        <h3>1. Is the Super Money Super Pro Card really free?</h3>
        <p>Yes, for a limited time, the card is being offered as Lifetime Free (LTF) with no joining or annual charges for applicants who apply via exclusive partner links.</p>

        <h3>2. What is the credit limit offered?</h3>
        <p>Credit limits vary based on your income / CIBIL score, but Super Money is known to be generous, often starting limits from ₹40,000 up to ₹2,00,000.</p>

        <h3>3. Does it have lounge access?</h3>
        <p>The base Super Pro variant does not offer complimentary domestic lounge access. You may need to upgrade to the 'Pro Max' tier for that benefit.</p>

        <h3>4. How do I track my cashback?</h3>
        <p>Cashback is tracked in real-time on the Super Money app and credited to your card statement at the end of every billing cycle.</p>

        <h2>Final Thoughts</h2>
        <p>If you are looking for a no-nonsense, high-reward financial tool, look no further. <strong>This card remains one of the best lifetime free and cashback-focused credit cards in India this year.</strong> Its digital-savvy features and solid return on spend make it a winner.</p>

        <div class="in-article-cta">
            <span class="cta-note">Apply through this link — users often get faster approval and better rewards.</span>
            <a href="https://link.super.money/46b7wowF6Ub" target="_blank" rel="nofollow noopener noreferrer" class="in-article-btn">Apply Now</a>
        </div>
    `}],jv=()=>{const[r,o]=T.useState(""),c=Sm.filter(u=>u.title.toLowerCase().includes(r.toLowerCase())||u.tags.some(f=>f.toLowerCase().includes(r.toLowerCase())));return s.jsxs("div",{className:"deals-page",children:[s.jsx(La,{}),s.jsxs("main",{className:"main-content",children:[s.jsx("div",{className:"deals-hero",children:s.jsxs("div",{className:"container",children:[s.jsx("h1",{children:"Exclusive Deals & Offers"}),s.jsx("p",{children:"Handpicked financial deals, credit card offers, and savings guides."})]})}),s.jsxs("div",{className:"container",style:{padding:"3rem 1.5rem",minHeight:"60vh"},children:[s.jsxs("div",{className:"deals-filter-bar",children:[s.jsx("input",{type:"text",placeholder:"Search deals...",value:r,onChange:u=>o(u.target.value),className:"deal-search-input"}),s.jsxs("div",{className:"tags-row",children:[s.jsx("span",{className:"tag active",children:"All"}),s.jsx("span",{className:"tag",children:"Credit Cards"}),s.jsx("span",{className:"tag",children:"Banking"}),s.jsx("span",{className:"tag",children:"Travel"})]})]}),s.jsxs("div",{className:"deals-grid-layout",children:[c.map(u=>s.jsx(Fe,{to:`/deals/${u.slug}`,className:"deal-card-link",children:s.jsxs("article",{className:"deal-card",children:[s.jsxs("div",{className:"deal-thumbnail",children:[s.jsx("img",{src:u.thumbnail,alt:u.title,loading:"lazy"}),u.pinned&&s.jsx("span",{className:"pinned-badge",children:"Featured"})]}),s.jsxs("div",{className:"deal-content",children:[s.jsxs("div",{className:"deal-meta",children:[s.jsx("span",{className:"deal-author",children:u.author}),s.jsx("span",{className:"deal-date",children:new Date(u.date).toLocaleDateString()})]}),s.jsx("h2",{className:"deal-title",children:u.title}),s.jsx("p",{className:"deal-excerpt",children:u.excerpt}),s.jsx("span",{className:"read-more",children:"Read Review →"})]})]})},u.id)),c.length===0&&s.jsx("div",{className:"no-deals",children:s.jsx("p",{children:"No deals found matching your criteria."})})]})]})]}),s.jsx(qa,{}),s.jsx("style",{children:`
                .deals-hero {
                    background: linear-gradient(135deg, var(--bg-dark) 0%, #1e293b 100%);
                    color: white;
                    padding: 4rem 0;
                    text-align: center;
                }
                .deals-hero h1 { font-size: 2.5rem; margin-bottom: 0.5rem; }
                .deals-hero p { font-size: 1.1rem; opacity: 0.9; }

                .deals-filter-bar {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    margin-bottom: 3rem;
                    align-items: center;
                }

                .deal-search-input {
                    padding: 0.8rem 1.5rem;
                    width: 100%;
                    max-width: 500px;
                    border-radius: 30px;
                    border: 1px solid #e2e8f0;
                    font-size: 1rem;
                    outline: none;
                    transition: all 0.2s;
                }
                .deal-search-input:focus {
                    border-color: var(--primary);
                    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
                }

                .tags-row { display: flex; gap: 0.8rem; flex-wrap: wrap; justify-content: center; }
                .tag {
                    padding: 0.4rem 1rem;
                    border-radius: 20px;
                    background: #f1f5f9;
                    font-size: 0.9rem;
                    color: var(--text-body);
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .tag:hover, .tag.active {
                    background: var(--primary);
                    color: white;
                }

                .deals-grid-layout {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
                    gap: 2rem;
                }

                .deal-card-link { text-decoration: none; color: inherit; display: block; }
                
                .deal-card {
                    background: white;
                    border-radius: var(--radius-lg);
                    overflow: hidden;
                    box-shadow: var(--shadow-sm);
                    border: 1px solid rgba(0,0,0,0.05);
                    transition: transform 0.2s, box-shadow 0.2s;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }

                .deal-card:hover {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-md);
                }

                .deal-thumbnail {
                    height: 200px;
                    overflow: hidden;
                    position: relative;
                }
                .deal-thumbnail img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.3s;
                }
                .deal-card:hover .deal-thumbnail img { transform: scale(1.05); }

                .pinned-badge {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background: #fbbf24;
                    color: #92400e;
                    padding: 0.3rem 0.8rem;
                    border-radius: 4px;
                    font-size: 0.8rem;
                    font-weight: 700;
                    text-transform: uppercase;
                }

                .deal-content {
                    padding: 1.5rem;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }

                .deal-meta {
                    font-size: 0.8rem;
                    color: var(--text-muted);
                    margin-bottom: 0.8rem;
                    display: flex;
                    justify-content: space-between;
                }

                .deal-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    margin-bottom: 0.8rem;
                    color: var(--text-main);
                    line-height: 1.4;
                }

                .deal-excerpt {
                    font-size: 0.95rem;
                    color: var(--text-body);
                    line-height: 1.6;
                    margin-bottom: 1.5rem;
                    flex: 1;
                }

                .read-more {
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: var(--primary);
                }

                .no-deals {
                    text-align: center;
                    color: var(--text-muted);
                    grid-column: 1 / -1;
                    padding: 2rem;
                }
                
                @media (max-width: 768px) {
                    .deals-grid-layout { grid-template-columns: 1fr; }
                    .deals-hero h1 { font-size: 2rem; }
                }
            `})]})},Nv=()=>{const{slug:r}=lm(),o=Jl(),[c,u]=T.useState(null);T.useEffect(()=>{const m=Sm.find(v=>v.slug===r);if(!m){o("/deals");return}u(m),document.title=m.seo?.title||`${m.title} | Offerve Deals`;const p=(v,y,g="name")=>{let A=document.querySelector(`meta[${g}="${v}"]`);A||(A=document.createElement("meta"),A.setAttribute(g,v),document.head.appendChild(A)),A.setAttribute("content",y)};p("description",m.excerpt),p("og:title",m.title,"property"),p("og:description",m.excerpt,"property"),p("og:url",window.location.href,"property"),p("og:image",m.ogImage||m.thumbnail,"property"),p("twitter:card","summary_large_image","name")},[r,o]);const f=()=>{console.log("Event: deal_apply_click",{slug:c.slug,timestamp:new Date().toISOString()})};return c?s.jsxs("div",{className:"deal-detail-page",children:[s.jsx(La,{}),s.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://offerve.com/"},{"@type":"ListItem",position:2,name:"Deals",item:"https://offerve.com/deals"},{"@type":"ListItem",position:3,name:c.title,item:window.location.href}]},{"@type":"BlogPosting",headline:c.title,image:c.ogImage,author:{"@type":"Organization",name:c.author},publisher:{"@type":"Organization",name:"Offerve",logo:{"@type":"ImageObject",url:"https://offerve.com/favicon.svg"}},datePublished:c.date,description:c.excerpt},{"@type":"FAQPage",mainEntity:[{"@type":"Question",name:"How do I apply for the card?",acceptedAnswer:{"@type":"Answer",text:"Click the 'Apply Now' button on this page to visit the official application portal. Complete the digital KYC for instant approval."}},{"@type":"Question",name:"Is the annual fee refundable?",acceptedAnswer:{"@type":"Answer",text:"The fee is waived for the first year if you apply now, and waived in subsequent years on achieving spend milestones."}},{"@type":"Question",name:"When is cashback credited?",acceptedAnswer:{"@type":"Answer",text:"Cashback is calculated monthly and credited to your card account within 10 days of the statement generation date."}}]}]})}}),s.jsx("main",{className:"main-content",children:s.jsxs("article",{className:"article-container",children:[s.jsxs("div",{className:"breadcrumbs",children:[s.jsx(Fe,{to:"/",children:"Home"})," › ",s.jsx(Fe,{to:"/deals",children:"Deals"})," › ",s.jsx("span",{children:c.title})]}),s.jsxs("header",{className:"article-header",children:[s.jsxs("div",{className:"article-meta",children:[s.jsx("span",{className:"meta-tag",children:"Credit Card"}),s.jsx("span",{className:"meta-date",children:new Date(c.date).toLocaleDateString()})]}),s.jsx("h1",{className:"article-title",children:c.title}),s.jsxs("div",{className:"author-row",children:[s.jsx("div",{className:"author-avatar",children:"O"}),s.jsxs("span",{className:"author-name",children:["By ",c.author]})]})]}),s.jsx("div",{className:"article-featured-image",children:s.jsx("img",{src:c.thumbnail,alt:c.title})}),s.jsxs("div",{className:"article-layout",children:[s.jsx("div",{className:"article-body",dangerouslySetInnerHTML:{__html:c.content}}),s.jsx("aside",{className:"article-sidebar",children:s.jsxs("div",{className:"apply-widget sticky",children:[s.jsx("h3",{children:"Ready to Apply?"}),s.jsx("p",{className:"apply-note",children:"Apply through this link — you may get faster approval and cashback."}),s.jsx("a",{href:c.ctaLink,target:"_blank",rel:"nofollow noopener noreferrer",className:"cta-button",onClick:f,children:c.ctaText}),s.jsx("p",{className:"secure-text",children:"🔒 100% Secure Application"})]})})]}),s.jsxs("div",{className:"mobile-cta-bar",children:[s.jsxs("div",{className:"mobile-cta-text",children:[s.jsxs("span",{children:[c.title.substring(0,20),"..."]}),s.jsx("small",{children:"Get Approval & Cashback"})]}),s.jsx("a",{href:c.ctaLink,target:"_blank",rel:"nofollow noopener noreferrer",className:"mobile-apply-btn",onClick:f,children:"Apply Now"})]})]})}),s.jsx(qa,{}),s.jsx("style",{children:`
                .deal-detail-page { background: #f8fafc; min-height: 100vh; }
                
                .article-container {
                    max-width: 1000px;
                    margin: 0 auto;
                    padding: 2rem 1.5rem;
                }

                .breadcrumbs {
                    margin-bottom: 2rem;
                    font-size: 0.9rem;
                    color: var(--text-muted);
                }
                .breadcrumbs a { color: var(--text-muted); margin: 0 0.3rem; }
                .breadcrumbs span { color: var(--text-main); font-weight: 500; }

                .article-header { text-align: center; max-width: 800px; margin: 0 auto 3rem; }
                
                .meta-tag {
                    display: inline-block;
                    background: #e0f2fe;
                    color: #0284c7;
                    padding: 0.3rem 0.8rem;
                    border-radius: 20px;
                    font-size: 0.85rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                    margin-right: 1rem;
                }
                .meta-date { font-size: 0.9rem; color: var(--text-muted); }

                .article-title {
                    font-size: 2.5rem;
                    font-weight: 800;
                    color: var(--text-main);
                    line-height: 1.2;
                    margin-bottom: 1.5rem;
                }

                .author-row {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.8rem;
                }
                .author-avatar {
                    width: 40px;
                    height: 40px;
                    background: var(--primary);
                    color: white;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 700;
                }
                .author-name { font-weight: 500; color: var(--text-main); }

                .article-featured-image {
                    width: 100%;
                    height: 400px;
                    border-radius: var(--radius-lg);
                    overflow: hidden;
                    box-shadow: var(--shadow-md);
                    margin-bottom: 3rem;
                }
                .article-featured-image img { width: 100%; height: 100%; object-fit: cover; }

                .article-layout {
                    display: grid;
                    grid-template-columns: 1fr 300px;
                    gap: 4rem;
                }

                /* Typography for HTML Content */
                .article-body {
                    font-size: 1.1rem;
                    line-height: 1.8;
                    color: var(--text-body);
                }
                
                .article-body h2 {
                    font-size: 1.8rem;
                    font-weight: 800;
                    color: var(--text-main);
                    margin: 2.5rem 0 1.2rem;
                    letter-spacing: -0.5px;
                }

                .article-body h3 {
                    font-size: 1.3rem;
                    font-weight: 700;
                    color: var(--text-main);
                    margin: 2rem 0 1rem;
                }

                .article-body p { margin-bottom: 1.5rem; }
                
                .article-body ul, .article-body ol {
                    margin-bottom: 1.5rem;
                    padding-left: 1.5rem;
                }
                
                .article-body li {
                    margin-bottom: 0.6rem;
                    padding-left: 0.5rem;
                }

                .article-body strong {
                    color: var(--text-main);
                    font-weight: 700;
                }

                /* Special Components inside article */
                .highlight-box {
                    background: #f0fdf4;
                    border-left: 4px solid #16a34a;
                    padding: 1.5rem;
                    border-radius: var(--radius-md);
                    margin: 2rem 0;
                }
                .highlight-box p { margin: 0; }

                .comparison-table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 2rem 0;
                    box-shadow: var(--shadow-sm);
                }
                .comparison-table th, .comparison-table td {
                    border: 1px solid #e2e8f0;
                    padding: 1rem;
                    text-align: left;
                }
                .comparison-table th { background: #f8fafc; font-weight: 600; }

                .in-article-cta {
                    background: #f8fafc;
                    padding: 2rem;
                    border-radius: var(--radius-lg);
                    text-align: center;
                    margin: 3rem 0;
                    border: 1px dashed #cbd5e1;
                }
                
                .in-article-btn {
                    display: inline-block;
                    background: #2563eb;
                    color: white;
                    padding: 1rem 2.5rem;
                    border-radius: 50px;
                    font-weight: 700;
                    font-size: 1.1rem;
                    text-decoration: none;
                    margin-top: 1rem;
                    box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.3);
                    transition: transform 0.2s;
                }
                .in-article-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.3); }
                .cta-note { display: block; font-size: 0.9rem; color: #64748b; margin-bottom: 0.5rem; font-weight: 500; }

                .article-sidebar { position: relative; }
                .apply-widget {
                    background: white;
                    padding: 2rem;
                    border-radius: var(--radius-lg);
                    box-shadow: var(--shadow-md);
                    border: 1px solid rgba(0,0,0,0.05);
                    text-align: center;
                }
                .apply-widget.sticky { position: sticky; top: 100px; }
                
                .apply-widget h3 { margin-bottom: 1rem; font-size: 1.3rem; }
                .apply-note { font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1.5; }
                
                .cta-button {
                    display: block;
                    width: 100%;
                    padding: 1rem;
                    background: #16a34a;
                    color: white;
                    font-weight: 700;
                    border-radius: var(--radius-md);
                    text-decoration: none;
                    font-size: 1.1rem;
                    transition: transform 0.2s, background 0.2s;
                    box-shadow: 0 4px 6px -1px rgba(22, 163, 74, 0.3);
                }
                .cta-button:hover {
                    background: #15803d;
                    transform: translateY(-2px);
                }
                
                .secure-text { font-size: 0.8rem; color: var(--text-muted); margin-top: 1rem; }

                .mobile-cta-bar {
                    display: none;
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background: white;
                    padding: 1rem;
                    box-shadow: 0 -4px 10px rgba(0,0,0,0.1);
                    z-index: 1000;
                    align-items: center;
                    justify-content: space-between;
                }
                
                .mobile-cta-text { display: flex; flex-direction: column; }
                .mobile-cta-text span { font-weight: 600; font-size: 0.9rem; }
                .mobile-cta-text small { font-size: 0.75rem; color: var(--text-muted); }
                
                .mobile-apply-btn {
                    background: #16a34a;
                    color: white;
                    padding: 0.6rem 1.2rem;
                    border-radius: 30px;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 0.9rem;
                }

                @media (max-width: 900px) {
                    .article-layout { grid-template-columns: 1fr; }
                    .article-sidebar { margin-top: 2rem; }
                    .apply-widget.sticky { position: static; }
                }

                @media (max-width: 768px) {
                    .article-title { font-size: 1.8rem; }
                    .mobile-cta-bar { display: flex; }
                    .deal-detail-page { padding-bottom: 80px; }
                }
            `})]}):s.jsx("div",{className:"loading",children:"Loading..."})},Tv=()=>{const[r,o]=T.useState("overview"),[c,u]=T.useState([]),[f,m]=T.useState([]),[p,v]=T.useState([]),[y,g]=T.useState(0);T.useEffect(()=>{u(Qe.getAllCouponsWithMetrics()),m(Qe.getStoreMetrics()),v(Qe.getEventsLog())},[y]);const A=()=>g(z=>z+1),x=()=>{window.confirm("Are you sure? This will wipe all analytics data.")&&(Qe.resetData(),A())};return s.jsxs("div",{className:"admin-page",children:[s.jsx(La,{}),s.jsxs("div",{className:"admin-container container",children:[s.jsxs("div",{className:"admin-header",children:[s.jsx("h1",{children:"Admin Analytics Dashboard"}),s.jsxs("div",{className:"admin-actions",children:[s.jsx("button",{onClick:A,className:"btn-secondary",children:"Refresh Data"}),s.jsx("button",{onClick:x,className:"btn-danger",children:"Reset All"})]})]}),s.jsxs("div",{className:"admin-tabs",children:[s.jsx("button",{className:r==="overview"?"active":"",onClick:()=>o("overview"),children:"Overview"}),s.jsx("button",{className:r==="coupons"?"active":"",onClick:()=>o("coupons"),children:"Top Coupons"}),s.jsx("button",{className:r==="stores"?"active":"",onClick:()=>o("stores"),children:"Store Performance"}),s.jsx("button",{className:r==="export"?"active":"",onClick:()=>o("export"),children:"Export & Snapshot"})]}),s.jsxs("div",{className:"admin-content",children:[r==="overview"&&s.jsxs("div",{className:"overview-grid",children:[s.jsxs("div",{className:"stat-card",children:[s.jsx("h3",{children:"Total Events"}),s.jsx("p",{className:"stat-value",children:p.length})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("h3",{children:"Most Active Store"}),s.jsx("p",{className:"stat-value text-small",children:f[0]?.name||"-"})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("h3",{children:"Total Copies"}),s.jsx("p",{className:"stat-value",children:f.reduce((z,U)=>z+U.analytics.totalCopy,0)})]}),s.jsxs("div",{className:"recent-activity",children:[s.jsx("h3",{children:"Recent Live Events"}),s.jsx("ul",{className:"event-log",children:p.slice(0,10).map((z,U)=>s.jsxs("li",{children:[s.jsx("span",{className:`tag ${z.type}`,children:z.type}),s.jsx("span",{className:"source",children:z.storeSlug}),s.jsx("span",{className:"time",children:new Date(z.timestamp).toLocaleTimeString()})]},U))})]})]}),r==="coupons"&&s.jsx("div",{className:"table-responsive",children:s.jsxs("table",{className:"admin-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Rank"}),s.jsx("th",{children:"Store"}),s.jsx("th",{children:"Coupon"}),s.jsx("th",{children:"Copies"}),s.jsx("th",{children:"Clicks"}),s.jsx("th",{children:"Views"})]})}),s.jsx("tbody",{children:Qe.getTopCoupons(50).map((z,U)=>s.jsxs("tr",{children:[s.jsxs("td",{children:["#",U+1]}),s.jsx("td",{children:z.store.name}),s.jsx("td",{className:"truncate",children:z.title}),s.jsx("td",{children:s.jsx("strong",{children:z.metrics.copy})}),s.jsx("td",{children:z.metrics.click}),s.jsx("td",{children:z.metrics.view})]},U))})]})}),r==="stores"&&s.jsx("div",{className:"table-responsive",children:s.jsxs("table",{className:"admin-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Store Name"}),s.jsx("th",{children:"Total Copies"}),s.jsx("th",{children:"Total Clicks"}),s.jsx("th",{children:"Total Views"})]})}),s.jsx("tbody",{children:f.map((z,U)=>s.jsxs("tr",{children:[s.jsx("td",{children:z.name}),s.jsx("td",{children:s.jsx("strong",{children:z.analytics.totalCopy})}),s.jsx("td",{children:z.analytics.totalClick}),s.jsx("td",{children:z.analytics.totalView})]},U))})]})}),r==="export"&&s.jsxs("div",{className:"export-panel",children:[s.jsx("h3",{children:"Data Export"}),s.jsxs("div",{className:"export-buttons",children:[s.jsx("button",{onClick:()=>Qe.exportToCSV("coupons"),className:"btn-primary",children:"Download Coupons CSV"}),s.jsx("button",{onClick:()=>Qe.exportToCSV("stores"),className:"btn-primary",children:"Download Stores CSV"})]}),s.jsx("hr",{style:{margin:"2rem 0"}}),s.jsx("h3",{children:"Weekly Snapshot"}),s.jsx("p",{children:"Generate a static list of this week's best deals for the 'Top Offers' section."}),s.jsx("button",{onClick:()=>{Qe.generateWeeklySnapshot(),alert("Snapshot Generated!")},className:"btn-secondary",children:"Generate Now"})]})]})]}),s.jsx("style",{children:`
                .admin-page { background: #f8fafc; min-height: 100vh; }
                .admin-container { padding: 2rem 1rem; }
                
                .admin-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
                .admin-header h1 { color: var(--text-main); font-size: 1.8rem; }
                
                .admin-tabs { display: flex; gap: 1rem; margin-bottom: 2rem; border-bottom: 1px solid #ddd; padding-bottom: 1rem; }
                .admin-tabs button { background: none; border: none; font-size: 1rem; color: var(--text-muted); padding: 0.5rem 1rem; cursor: pointer; font-weight: 600; }
                .admin-tabs button.active { color: var(--primary); border-bottom: 2px solid var(--primary); }

                .stat-card { background: white; padding: 1.5rem; border-radius: 8px; box-shadow: var(--shadow-sm); }
                .overview-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; }
                .stat-value { font-size: 2rem; font-weight: 700; color: var(--primary); }
                .text-small { font-size: 1.5rem; }

                .recent-activity { grid-column: 1 / -1; background: white; padding: 1.5rem; border-radius: 8px; margin-top: 1rem; }
                .event-log { list-style: none; padding: 0; }
                .event-log li { display: flex; justify-content: space-between; padding: 0.8rem 0; border-bottom: 1px solid #eee; }
                
                .tag { padding: 2px 8px; border-radius: 4px; font-size: 0.8rem; font-weight: bold; text-transform: uppercase; }
                .tag.copy { background: #dcfce7; color: #166534; }
                .tag.click { background: #dbeafe; color: #1e40af; }
                .tag.view { background: #f1f5f9; color: #64748b; }

                .admin-table { width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; }
                .admin-table th, .admin-table td { padding: 1rem; text-align: left; border-bottom: 1px solid #eee; }
                .admin-table th { background: #f8fafc; font-weight: 600; }
                .truncate { max-width: 300px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

                .btn-primary { background: var(--primary); color: white; padding: 0.5rem 1rem; border-radius: 6px; border: none; cursor: pointer; }
                .btn-secondary { background: white; border: 1px solid #ccc; color: #333; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; margin-right: 0.5rem; }
                .btn-danger { background: #fee2e2; color: #dc2626; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; }
                
                .export-buttons { display: flex; gap: 1rem; }
            `}),s.jsx(qa,{})]})};function zv(){return s.jsx(vy,{children:s.jsx("div",{className:"App",children:s.jsxs(Kg,{children:[s.jsx(ra,{path:"/",element:s.jsx(Sv,{})}),s.jsx(ra,{path:"/stores",element:s.jsx(Ev,{})}),s.jsx(ra,{path:"/search",element:s.jsx(Cv,{})}),s.jsx(ra,{path:"/about",element:s.jsx(Av,{})}),s.jsx(ra,{path:"/deals",element:s.jsx(jv,{})}),s.jsx(ra,{path:"/deals/:slug",element:s.jsx(Nv,{})}),s.jsx(ra,{path:"/admin/analytics",element:s.jsx(Tv,{})}),s.jsx(ra,{path:"/:slug",element:s.jsx(wv,{})})]})})})}class Ov extends J0.Component{constructor(o){super(o),this.state={hasError:!1,error:null}}static getDerivedStateFromError(o){return{hasError:!0,error:o}}componentDidCatch(o,c){console.error("Uncaught error:",o,c)}handleReset=()=>{localStorage.clear(),window.location.reload()};render(){return this.state.hasError?s.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"2rem",backgroundColor:"#f8fafc",color:"#1e293b",fontFamily:"system-ui, -apple-system, sans-serif"},children:[s.jsx("h1",{style:{fontSize:"2rem",marginBottom:"1rem",color:"#ef4444"},children:"Oops! Something went wrong."}),s.jsx("p",{style:{marginBottom:"2rem",maxWidth:"400px",lineHeight:"1.6"},children:"The app encountered an error (likely due to old saved data). Please click the button below to fix it."}),s.jsx("button",{onClick:this.handleReset,style:{padding:"0.8rem 1.5rem",backgroundColor:"#2563eb",color:"white",border:"none",borderRadius:"8px",fontSize:"1rem",fontWeight:"600",cursor:"pointer",boxShadow:"0 4px 6px -1px rgba(37, 99, 235, 0.2)"},children:"Fix & Reload App"}),!1]}):this.props.children}}ag.createRoot(document.getElementById("root")).render(s.jsx(T.StrictMode,{children:s.jsxs(Ov,{children:[console.log("App Version: BrowserRouter + Clean URLs"),s.jsx(zv,{})]})}));
