(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);new MutationObserver(f=>{for(const m of f)if(m.type==="childList")for(const p of m.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&c(p)}).observe(document,{childList:!0,subtree:!0});function u(f){const m={};return f.integrity&&(m.integrity=f.integrity),f.referrerPolicy&&(m.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?m.credentials="include":f.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function c(f){if(f.ep)return;f.ep=!0;const m=u(f);fetch(f.href,m)}})();function Fg(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ko={exports:{}},Zl={};var Ah;function Jg(){if(Ah)return Zl;Ah=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function u(c,f,m){var p=null;if(m!==void 0&&(p=""+m),f.key!==void 0&&(p=""+f.key),"key"in f){m={};for(var v in f)v!=="key"&&(m[v]=f[v])}else m=f;return f=m.ref,{$$typeof:r,type:c,key:p,ref:f!==void 0?f:null,props:m}}return Zl.Fragment=o,Zl.jsx=u,Zl.jsxs=u,Zl}var Ch;function Kg(){return Ch||(Ch=1,Ko.exports=Jg()),Ko.exports}var s=Kg(),$o={exports:{}},P={};var Nh;function $g(){if(Nh)return P;Nh=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),p=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),O=Symbol.iterator;function k(E){return E===null||typeof E!="object"?null:(E=O&&E[O]||E["@@iterator"],typeof E=="function"?E:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,L={};function G(E,U,Y){this.props=E,this.context=U,this.refs=L,this.updater=Y||H}G.prototype.isReactComponent={},G.prototype.setState=function(E,U){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,U,"setState")},G.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function V(){}V.prototype=G.prototype;function X(E,U,Y){this.props=E,this.context=U,this.refs=L,this.updater=Y||H}var ne=X.prototype=new V;ne.constructor=X,B(ne,G.prototype),ne.isPureReactComponent=!0;var ye=Array.isArray;function fe(){}var J={H:null,A:null,T:null,S:null},Ee=Object.prototype.hasOwnProperty;function Ae(E,U,Y){var Z=Y.ref;return{$$typeof:r,type:E,key:U,ref:Z!==void 0?Z:null,props:Y}}function Ge(E,U){return Ae(E.type,U,E.props)}function Ve(E){return typeof E=="object"&&E!==null&&E.$$typeof===r}function ze(E){var U={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(Y){return U[Y]})}var ha=/\/+/g;function Re(E,U){return typeof E=="object"&&E!==null&&E.key!=null?ze(""+E.key):U.toString(36)}function Pe(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(fe,fe):(E.status="pending",E.then(function(U){E.status==="pending"&&(E.status="fulfilled",E.value=U)},function(U){E.status==="pending"&&(E.status="rejected",E.reason=U)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function M(E,U,Y,Z,ee){var le=typeof E;(le==="undefined"||le==="boolean")&&(E=null);var me=!1;if(E===null)me=!0;else switch(le){case"bigint":case"string":case"number":me=!0;break;case"object":switch(E.$$typeof){case r:case o:me=!0;break;case w:return me=E._init,M(me(E._payload),U,Y,Z,ee)}}if(me)return ee=ee(E),me=Z===""?"."+Re(E,0):Z,ye(ee)?(Y="",me!=null&&(Y=me.replace(ha,"$&/")+"/"),M(ee,U,Y,"",function(Pn){return Pn})):ee!=null&&(Ve(ee)&&(ee=Ge(ee,Y+(ee.key==null||E&&E.key===ee.key?"":(""+ee.key).replace(ha,"$&/")+"/")+me)),U.push(ee)),1;me=0;var tt=Z===""?".":Z+":";if(ye(E))for(var _e=0;_e<E.length;_e++)Z=E[_e],le=tt+Re(Z,_e),me+=M(Z,U,Y,le,ee);else if(_e=k(E),typeof _e=="function")for(E=_e.call(E),_e=0;!(Z=E.next()).done;)Z=Z.value,le=tt+Re(Z,_e++),me+=M(Z,U,Y,le,ee);else if(le==="object"){if(typeof E.then=="function")return M(Pe(E),U,Y,Z,ee);throw U=String(E),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return me}function q(E,U,Y){if(E==null)return E;var Z=[],ee=0;return M(E,Z,"","",function(le){return U.call(Y,le,ee++)}),Z}function W(E){if(E._status===-1){var U=E._result;U=U(),U.then(function(Y){(E._status===0||E._status===-1)&&(E._status=1,E._result=Y)},function(Y){(E._status===0||E._status===-1)&&(E._status=2,E._result=Y)}),E._status===-1&&(E._status=0,E._result=U)}if(E._status===1)return E._result.default;throw E._result}var ve=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},we={map:q,forEach:function(E,U,Y){q(E,function(){U.apply(this,arguments)},Y)},count:function(E){var U=0;return q(E,function(){U++}),U},toArray:function(E){return q(E,function(U){return U})||[]},only:function(E){if(!Ve(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return P.Activity=x,P.Children=we,P.Component=G,P.Fragment=u,P.Profiler=f,P.PureComponent=X,P.StrictMode=c,P.Suspense=y,P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,P.__COMPILER_RUNTIME={__proto__:null,c:function(E){return J.H.useMemoCache(E)}},P.cache=function(E){return function(){return E.apply(null,arguments)}},P.cacheSignal=function(){return null},P.cloneElement=function(E,U,Y){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var Z=B({},E.props),ee=E.key;if(U!=null)for(le in U.key!==void 0&&(ee=""+U.key),U)!Ee.call(U,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&U.ref===void 0||(Z[le]=U[le]);var le=arguments.length-2;if(le===1)Z.children=Y;else if(1<le){for(var me=Array(le),tt=0;tt<le;tt++)me[tt]=arguments[tt+2];Z.children=me}return Ae(E.type,ee,Z)},P.createContext=function(E){return E={$$typeof:p,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:m,_context:E},E},P.createElement=function(E,U,Y){var Z,ee={},le=null;if(U!=null)for(Z in U.key!==void 0&&(le=""+U.key),U)Ee.call(U,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(ee[Z]=U[Z]);var me=arguments.length-2;if(me===1)ee.children=Y;else if(1<me){for(var tt=Array(me),_e=0;_e<me;_e++)tt[_e]=arguments[_e+2];ee.children=tt}if(E&&E.defaultProps)for(Z in me=E.defaultProps,me)ee[Z]===void 0&&(ee[Z]=me[Z]);return Ae(E,le,ee)},P.createRef=function(){return{current:null}},P.forwardRef=function(E){return{$$typeof:v,render:E}},P.isValidElement=Ve,P.lazy=function(E){return{$$typeof:w,_payload:{_status:-1,_result:E},_init:W}},P.memo=function(E,U){return{$$typeof:g,type:E,compare:U===void 0?null:U}},P.startTransition=function(E){var U=J.T,Y={};J.T=Y;try{var Z=E(),ee=J.S;ee!==null&&ee(Y,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(fe,ve)}catch(le){ve(le)}finally{U!==null&&Y.types!==null&&(U.types=Y.types),J.T=U}},P.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},P.use=function(E){return J.H.use(E)},P.useActionState=function(E,U,Y){return J.H.useActionState(E,U,Y)},P.useCallback=function(E,U){return J.H.useCallback(E,U)},P.useContext=function(E){return J.H.useContext(E)},P.useDebugValue=function(){},P.useDeferredValue=function(E,U){return J.H.useDeferredValue(E,U)},P.useEffect=function(E,U){return J.H.useEffect(E,U)},P.useEffectEvent=function(E){return J.H.useEffectEvent(E)},P.useId=function(){return J.H.useId()},P.useImperativeHandle=function(E,U,Y){return J.H.useImperativeHandle(E,U,Y)},P.useInsertionEffect=function(E,U){return J.H.useInsertionEffect(E,U)},P.useLayoutEffect=function(E,U){return J.H.useLayoutEffect(E,U)},P.useMemo=function(E,U){return J.H.useMemo(E,U)},P.useOptimistic=function(E,U){return J.H.useOptimistic(E,U)},P.useReducer=function(E,U,Y){return J.H.useReducer(E,U,Y)},P.useRef=function(E){return J.H.useRef(E)},P.useState=function(E){return J.H.useState(E)},P.useSyncExternalStore=function(E,U,Y){return J.H.useSyncExternalStore(E,U,Y)},P.useTransition=function(){return J.H.useTransition()},P.version="19.2.2",P}var zh;function pc(){return zh||(zh=1,$o.exports=$g()),$o.exports}var N=pc();const Wg=Fg(N);var Wo={exports:{}},Fl={},Io={exports:{}},Po={};var Th;function Ig(){return Th||(Th=1,(function(r){function o(M,q){var W=M.length;M.push(q);e:for(;0<W;){var ve=W-1>>>1,we=M[ve];if(0<f(we,q))M[ve]=q,M[W]=we,W=ve;else break e}}function u(M){return M.length===0?null:M[0]}function c(M){if(M.length===0)return null;var q=M[0],W=M.pop();if(W!==q){M[0]=W;e:for(var ve=0,we=M.length,E=we>>>1;ve<E;){var U=2*(ve+1)-1,Y=M[U],Z=U+1,ee=M[Z];if(0>f(Y,W))Z<we&&0>f(ee,Y)?(M[ve]=ee,M[Z]=W,ve=Z):(M[ve]=Y,M[U]=W,ve=U);else if(Z<we&&0>f(ee,W))M[ve]=ee,M[Z]=W,ve=Z;else break e}}return q}function f(M,q){var W=M.sortIndex-q.sortIndex;return W!==0?W:M.id-q.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;r.unstable_now=function(){return m.now()}}else{var p=Date,v=p.now();r.unstable_now=function(){return p.now()-v}}var y=[],g=[],w=1,x=null,O=3,k=!1,H=!1,B=!1,L=!1,G=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function ne(M){for(var q=u(g);q!==null;){if(q.callback===null)c(g);else if(q.startTime<=M)c(g),q.sortIndex=q.expirationTime,o(y,q);else break;q=u(g)}}function ye(M){if(B=!1,ne(M),!H)if(u(y)!==null)H=!0,fe||(fe=!0,ze());else{var q=u(g);q!==null&&Pe(ye,q.startTime-M)}}var fe=!1,J=-1,Ee=5,Ae=-1;function Ge(){return L?!0:!(r.unstable_now()-Ae<Ee)}function Ve(){if(L=!1,fe){var M=r.unstable_now();Ae=M;var q=!0;try{e:{H=!1,B&&(B=!1,V(J),J=-1),k=!0;var W=O;try{t:{for(ne(M),x=u(y);x!==null&&!(x.expirationTime>M&&Ge());){var ve=x.callback;if(typeof ve=="function"){x.callback=null,O=x.priorityLevel;var we=ve(x.expirationTime<=M);if(M=r.unstable_now(),typeof we=="function"){x.callback=we,ne(M),q=!0;break t}x===u(y)&&c(y),ne(M)}else c(y);x=u(y)}if(x!==null)q=!0;else{var E=u(g);E!==null&&Pe(ye,E.startTime-M),q=!1}}break e}finally{x=null,O=W,k=!1}q=void 0}}finally{q?ze():fe=!1}}}var ze;if(typeof X=="function")ze=function(){X(Ve)};else if(typeof MessageChannel<"u"){var ha=new MessageChannel,Re=ha.port2;ha.port1.onmessage=Ve,ze=function(){Re.postMessage(null)}}else ze=function(){G(Ve,0)};function Pe(M,q){J=G(function(){M(r.unstable_now())},q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(M){M.callback=null},r.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ee=0<M?Math.floor(1e3/M):5},r.unstable_getCurrentPriorityLevel=function(){return O},r.unstable_next=function(M){switch(O){case 1:case 2:case 3:var q=3;break;default:q=O}var W=O;O=q;try{return M()}finally{O=W}},r.unstable_requestPaint=function(){L=!0},r.unstable_runWithPriority=function(M,q){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var W=O;O=M;try{return q()}finally{O=W}},r.unstable_scheduleCallback=function(M,q,W){var ve=r.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ve+W:ve):W=ve,M){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=W+we,M={id:w++,callback:q,priorityLevel:M,startTime:W,expirationTime:we,sortIndex:-1},W>ve?(M.sortIndex=W,o(g,M),u(y)===null&&M===u(g)&&(B?(V(J),J=-1):B=!0,Pe(ye,W-ve))):(M.sortIndex=we,o(y,M),H||k||(H=!0,fe||(fe=!0,ze()))),M},r.unstable_shouldYield=Ge,r.unstable_wrapCallback=function(M){var q=O;return function(){var W=O;O=q;try{return M.apply(this,arguments)}finally{O=W}}}})(Po)),Po}var Oh;function Pg(){return Oh||(Oh=1,Io.exports=Ig()),Io.exports}var ec={exports:{}},et={};var Dh;function e0(){if(Dh)return et;Dh=1;var r=pc();function o(y){var g="https://react.dev/errors/"+y;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var w=2;w<arguments.length;w++)g+="&args[]="+encodeURIComponent(arguments[w])}return"Minified React error #"+y+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var c={d:{f:u,r:function(){throw Error(o(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},f=Symbol.for("react.portal");function m(y,g,w){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:x==null?null:""+x,children:y,containerInfo:g,implementation:w}}var p=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(y,g){if(y==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return et.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,et.createPortal=function(y,g){var w=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(o(299));return m(y,g,null,w)},et.flushSync=function(y){var g=p.T,w=c.p;try{if(p.T=null,c.p=2,y)return y()}finally{p.T=g,c.p=w,c.d.f()}},et.preconnect=function(y,g){typeof y=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,c.d.C(y,g))},et.prefetchDNS=function(y){typeof y=="string"&&c.d.D(y)},et.preinit=function(y,g){if(typeof y=="string"&&g&&typeof g.as=="string"){var w=g.as,x=v(w,g.crossOrigin),O=typeof g.integrity=="string"?g.integrity:void 0,k=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;w==="style"?c.d.S(y,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:x,integrity:O,fetchPriority:k}):w==="script"&&c.d.X(y,{crossOrigin:x,integrity:O,fetchPriority:k,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},et.preinitModule=function(y,g){if(typeof y=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var w=v(g.as,g.crossOrigin);c.d.M(y,{crossOrigin:w,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&c.d.M(y)},et.preload=function(y,g){if(typeof y=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var w=g.as,x=v(w,g.crossOrigin);c.d.L(y,w,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},et.preloadModule=function(y,g){if(typeof y=="string")if(g){var w=v(g.as,g.crossOrigin);c.d.m(y,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:w,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else c.d.m(y)},et.requestFormReset=function(y){c.d.r(y)},et.unstable_batchedUpdates=function(y,g){return y(g)},et.useFormState=function(y,g,w){return p.H.useFormState(y,g,w)},et.useFormStatus=function(){return p.H.useHostTransitionStatus()},et.version="19.2.2",et}var Mh;function t0(){if(Mh)return ec.exports;Mh=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),ec.exports=e0(),ec.exports}var Rh;function a0(){if(Rh)return Fl;Rh=1;var r=Pg(),o=pc(),u=t0();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(m(e)!==e)throw Error(c(188))}function g(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,n=t;;){var l=a.return;if(l===null)break;var i=l.alternate;if(i===null){if(n=l.return,n!==null){a=n;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===a)return y(l),e;if(i===n)return y(l),t;i=i.sibling}throw Error(c(188))}if(a.return!==n.return)a=l,n=i;else{for(var d=!1,h=l.child;h;){if(h===a){d=!0,a=l,n=i;break}if(h===n){d=!0,n=l,a=i;break}h=h.sibling}if(!d){for(h=i.child;h;){if(h===a){d=!0,a=i,n=l;break}if(h===n){d=!0,n=i,a=l;break}h=h.sibling}if(!d)throw Error(c(189))}}if(a.alternate!==n)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function w(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=w(e),t!==null)return t;e=e.sibling}return null}var x=Object.assign,O=Symbol.for("react.element"),k=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),V=Symbol.for("react.consumer"),X=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),ye=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),Ee=Symbol.for("react.lazy"),Ae=Symbol.for("react.activity"),Ge=Symbol.for("react.memo_cache_sentinel"),Ve=Symbol.iterator;function ze(e){return e===null||typeof e!="object"?null:(e=Ve&&e[Ve]||e["@@iterator"],typeof e=="function"?e:null)}var ha=Symbol.for("react.client.reference");function Re(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ha?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case B:return"Fragment";case G:return"Profiler";case L:return"StrictMode";case ye:return"Suspense";case fe:return"SuspenseList";case Ae:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case H:return"Portal";case X:return e.displayName||"Context";case V:return(e._context.displayName||"Context")+".Consumer";case ne:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case J:return t=e.displayName||null,t!==null?t:Re(e.type)||"Memo";case Ee:t=e._payload,e=e._init;try{return Re(e(t))}catch{}}return null}var Pe=Array.isArray,M=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},ve=[],we=-1;function E(e){return{current:e}}function U(e){0>we||(e.current=ve[we],ve[we]=null,we--)}function Y(e,t){we++,ve[we]=e.current,e.current=t}var Z=E(null),ee=E(null),le=E(null),me=E(null);function tt(e,t){switch(Y(le,t),Y(ee,e),Y(Z,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Jf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Jf(t),e=Kf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(Z),Y(Z,e)}function _e(){U(Z),U(ee),U(le)}function Pn(e){e.memoizedState!==null&&Y(me,e);var t=Z.current,a=Kf(t,e.type);t!==a&&(Y(ee,e),Y(Z,a))}function ei(e){ee.current===e&&(U(Z),U(ee)),me.current===e&&(U(me),Gl._currentValue=W)}var Or,wc;function Ya(e){if(Or===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Or=t&&t[1]||"",wc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Or+e+wc}var Dr=!1;function Mr(e,t){if(!e||Dr)return"";Dr=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var _=function(){throw Error()};if(Object.defineProperty(_.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_,[])}catch(T){var z=T}Reflect.construct(e,[],_)}else{try{_.call()}catch(T){z=T}e.call(_.prototype)}}else{try{throw Error()}catch(T){z=T}(_=e())&&typeof _.catch=="function"&&_.catch(function(){})}}catch(T){if(T&&z&&typeof T.stack=="string")return[T.stack,z.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=n.DetermineComponentFrameRoot(),d=i[0],h=i[1];if(d&&h){var b=d.split(`
`),C=h.split(`
`);for(l=n=0;n<b.length&&!b[n].includes("DetermineComponentFrameRoot");)n++;for(;l<C.length&&!C[l].includes("DetermineComponentFrameRoot");)l++;if(n===b.length||l===C.length)for(n=b.length-1,l=C.length-1;1<=n&&0<=l&&b[n]!==C[l];)l--;for(;1<=n&&0<=l;n--,l--)if(b[n]!==C[l]){if(n!==1||l!==1)do if(n--,l--,0>l||b[n]!==C[l]){var D=`
`+b[n].replace(" at new "," at ");return e.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",e.displayName)),D}while(1<=n&&0<=l);break}}}finally{Dr=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ya(a):""}function jm(e,t){switch(e.tag){case 26:case 27:case 5:return Ya(e.type);case 16:return Ya("Lazy");case 13:return e.child!==t&&t!==null?Ya("Suspense Fallback"):Ya("Suspense");case 19:return Ya("SuspenseList");case 0:case 15:return Mr(e.type,!1);case 11:return Mr(e.type.render,!1);case 1:return Mr(e.type,!0);case 31:return Ya("Activity");default:return""}}function jc(e){try{var t="",a=null;do t+=jm(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Rr=Object.prototype.hasOwnProperty,_r=r.unstable_scheduleCallback,Br=r.unstable_cancelCallback,Am=r.unstable_shouldYield,Cm=r.unstable_requestPaint,ut=r.unstable_now,Nm=r.unstable_getCurrentPriorityLevel,Ac=r.unstable_ImmediatePriority,Cc=r.unstable_UserBlockingPriority,ti=r.unstable_NormalPriority,zm=r.unstable_LowPriority,Nc=r.unstable_IdlePriority,Tm=r.log,Om=r.unstable_setDisableYieldValue,el=null,dt=null;function ma(e){if(typeof Tm=="function"&&Om(e),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(el,e)}catch{}}var ft=Math.clz32?Math.clz32:Rm,Dm=Math.log,Mm=Math.LN2;function Rm(e){return e>>>=0,e===0?32:31-(Dm(e)/Mm|0)|0}var ai=256,ni=262144,li=4194304;function Ga(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ii(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var l=0,i=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var h=n&134217727;return h!==0?(n=h&~i,n!==0?l=Ga(n):(d&=h,d!==0?l=Ga(d):a||(a=h&~e,a!==0&&(l=Ga(a))))):(h=n&~i,h!==0?l=Ga(h):d!==0?l=Ga(d):a||(a=n&~e,a!==0&&(l=Ga(a)))),l===0?0:t!==0&&t!==l&&(t&i)===0&&(i=l&-l,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:l}function tl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function _m(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zc(){var e=li;return li<<=1,(li&62914560)===0&&(li=4194304),e}function Ur(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function al(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Bm(e,t,a,n,l,i){var d=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var h=e.entanglements,b=e.expirationTimes,C=e.hiddenUpdates;for(a=d&~a;0<a;){var D=31-ft(a),_=1<<D;h[D]=0,b[D]=-1;var z=C[D];if(z!==null)for(C[D]=null,D=0;D<z.length;D++){var T=z[D];T!==null&&(T.lane&=-536870913)}a&=~_}n!==0&&Tc(e,n,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(d&~t))}function Tc(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-ft(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function Oc(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-ft(a),l=1<<n;l&t|e[n]&t&&(e[n]|=t),a&=~l}}function Dc(e,t){var a=t&-t;return a=(a&42)!==0?1:kr(a),(a&(e.suspendedLanes|t))!==0?0:a}function kr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Lr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Mc(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:vh(e.type))}function Rc(e,t){var a=q.p;try{return q.p=e,t()}finally{q.p=a}}var pa=Math.random().toString(36).slice(2),Je="__reactFiber$"+pa,nt="__reactProps$"+pa,un="__reactContainer$"+pa,Hr="__reactEvents$"+pa,Um="__reactListeners$"+pa,km="__reactHandles$"+pa,_c="__reactResources$"+pa,nl="__reactMarker$"+pa;function qr(e){delete e[Je],delete e[nt],delete e[Hr],delete e[Um],delete e[km]}function dn(e){var t=e[Je];if(t)return t;for(var a=e.parentNode;a;){if(t=a[un]||a[Je]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=ah(e);e!==null;){if(a=e[Je])return a;e=ah(e)}return t}e=a,a=e.parentNode}return null}function fn(e){if(e=e[Je]||e[un]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function ll(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function hn(e){var t=e[_c];return t||(t=e[_c]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ze(e){e[nl]=!0}var Bc=new Set,Uc={};function Va(e,t){mn(e,t),mn(e+"Capture",t)}function mn(e,t){for(Uc[e]=t,e=0;e<t.length;e++)Bc.add(t[e])}var Lm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),kc={},Lc={};function Hm(e){return Rr.call(Lc,e)?!0:Rr.call(kc,e)?!1:Lm.test(e)?Lc[e]=!0:(kc[e]=!0,!1)}function ri(e,t,a){if(Hm(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function si(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Vt(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function St(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qm(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(d){a=""+d,i.call(this,d)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(d){a=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Yr(e){if(!e._valueTracker){var t=Hc(e)?"checked":"value";e._valueTracker=qm(e,t,""+e[t])}}function qc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=Hc(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function oi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ym=/[\n"\\]/g;function Et(e){return e.replace(Ym,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Gr(e,t,a,n,l,i,d,h){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+St(t)):e.value!==""+St(t)&&(e.value=""+St(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?Vr(e,d,St(t)):a!=null?Vr(e,d,St(a)):n!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+St(h):e.removeAttribute("name")}function Yc(e,t,a,n,l,i,d,h){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Yr(e);return}a=a!=null?""+St(a):"",t=t!=null?""+St(t):a,h||t===e.value||(e.value=t),e.defaultValue=t}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=h?e.checked:!!n,e.defaultChecked=!!n,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),Yr(e)}function Vr(e,t,a){t==="number"&&oi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function pn(e,t,a,n){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&n&&(e[a].defaultSelected=!0)}else{for(a=""+St(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Gc(e,t,a){if(t!=null&&(t=""+St(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+St(a):""}function Vc(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(c(92));if(Pe(n)){if(1<n.length)throw Error(c(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=St(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),Yr(e)}function gn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Gm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qc(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||Gm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Xc(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var l in t)n=t[l],t.hasOwnProperty(l)&&a[l]!==n&&Qc(e,l,n)}else for(var i in t)t.hasOwnProperty(i)&&Qc(e,i,t[i])}function Qr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Qm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ci(e){return Qm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Qt(){}var Xr=null;function Zr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yn=null,vn=null;function Zc(e){var t=fn(e);if(t&&(e=t.stateNode)){var a=e[nt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Gr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Et(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var l=n[nt]||null;if(!l)throw Error(c(90));Gr(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&qc(n)}break e;case"textarea":Gc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&pn(e,!!a.multiple,t,!1)}}}var Fr=!1;function Fc(e,t,a){if(Fr)return e(t,a);Fr=!0;try{var n=e(t);return n}finally{if(Fr=!1,(yn!==null||vn!==null)&&($i(),yn&&(t=yn,e=vn,vn=yn=null,Zc(t),e)))for(t=0;t<e.length;t++)Zc(e[t])}}function il(e,t){var a=e.stateNode;if(a===null)return null;var n=a[nt]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var Xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jr=!1;if(Xt)try{var rl={};Object.defineProperty(rl,"passive",{get:function(){Jr=!0}}),window.addEventListener("test",rl,rl),window.removeEventListener("test",rl,rl)}catch{Jr=!1}var ga=null,Kr=null,ui=null;function Jc(){if(ui)return ui;var e,t=Kr,a=t.length,n,l="value"in ga?ga.value:ga.textContent,i=l.length;for(e=0;e<a&&t[e]===l[e];e++);var d=a-e;for(n=1;n<=d&&t[a-n]===l[i-n];n++);return ui=l.slice(e,1<n?1-n:void 0)}function di(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fi(){return!0}function Kc(){return!1}function lt(e){function t(a,n,l,i,d){this._reactName=a,this._targetInst=l,this.type=n,this.nativeEvent=i,this.target=d,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(a=e[h],this[h]=a?a(i):i[h]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?fi:Kc,this.isPropagationStopped=Kc,this}return x(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=fi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=fi)},persist:function(){},isPersistent:fi}),t}var Qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hi=lt(Qa),sl=x({},Qa,{view:0,detail:0}),Xm=lt(sl),$r,Wr,ol,mi=x({},sl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ol&&(ol&&e.type==="mousemove"?($r=e.screenX-ol.screenX,Wr=e.screenY-ol.screenY):Wr=$r=0,ol=e),$r)},movementY:function(e){return"movementY"in e?e.movementY:Wr}}),$c=lt(mi),Zm=x({},mi,{dataTransfer:0}),Fm=lt(Zm),Jm=x({},sl,{relatedTarget:0}),Ir=lt(Jm),Km=x({},Qa,{animationName:0,elapsedTime:0,pseudoElement:0}),$m=lt(Km),Wm=x({},Qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Im=lt(Wm),Pm=x({},Qa,{data:0}),Wc=lt(Pm),ep={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ap={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function np(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ap[e])?!!t[e]:!1}function Pr(){return np}var lp=x({},sl,{key:function(e){if(e.key){var t=ep[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=di(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pr,charCode:function(e){return e.type==="keypress"?di(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?di(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ip=lt(lp),rp=x({},mi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ic=lt(rp),sp=x({},sl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pr}),op=lt(sp),cp=x({},Qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),up=lt(cp),dp=x({},mi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fp=lt(dp),hp=x({},Qa,{newState:0,oldState:0}),mp=lt(hp),pp=[9,13,27,32],es=Xt&&"CompositionEvent"in window,cl=null;Xt&&"documentMode"in document&&(cl=document.documentMode);var gp=Xt&&"TextEvent"in window&&!cl,Pc=Xt&&(!es||cl&&8<cl&&11>=cl),eu=" ",tu=!1;function au(e,t){switch(e){case"keyup":return pp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var bn=!1;function yp(e,t){switch(e){case"compositionend":return nu(t);case"keypress":return t.which!==32?null:(tu=!0,eu);case"textInput":return e=t.data,e===eu&&tu?null:e;default:return null}}function vp(e,t){if(bn)return e==="compositionend"||!es&&au(e,t)?(e=Jc(),ui=Kr=ga=null,bn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Pc&&t.locale!=="ko"?null:t.data;default:return null}}var bp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bp[e.type]:t==="textarea"}function iu(e,t,a,n){yn?vn?vn.push(n):vn=[n]:yn=n,t=nr(t,"onChange"),0<t.length&&(a=new hi("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var ul=null,dl=null;function xp(e){Gf(e,0)}function pi(e){var t=ll(e);if(qc(t))return e}function ru(e,t){if(e==="change")return t}var su=!1;if(Xt){var ts;if(Xt){var as="oninput"in document;if(!as){var ou=document.createElement("div");ou.setAttribute("oninput","return;"),as=typeof ou.oninput=="function"}ts=as}else ts=!1;su=ts&&(!document.documentMode||9<document.documentMode)}function cu(){ul&&(ul.detachEvent("onpropertychange",uu),dl=ul=null)}function uu(e){if(e.propertyName==="value"&&pi(dl)){var t=[];iu(t,dl,e,Zr(e)),Fc(xp,t)}}function Sp(e,t,a){e==="focusin"?(cu(),ul=t,dl=a,ul.attachEvent("onpropertychange",uu)):e==="focusout"&&cu()}function Ep(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pi(dl)}function wp(e,t){if(e==="click")return pi(t)}function jp(e,t){if(e==="input"||e==="change")return pi(t)}function Ap(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:Ap;function fl(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var l=a[n];if(!Rr.call(t,l)||!ht(e[l],t[l]))return!1}return!0}function du(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fu(e,t){var a=du(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=du(a)}}function hu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?hu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function mu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=oi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=oi(e.document)}return t}function ns(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Cp=Xt&&"documentMode"in document&&11>=document.documentMode,xn=null,ls=null,hl=null,is=!1;function pu(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;is||xn==null||xn!==oi(n)||(n=xn,"selectionStart"in n&&ns(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),hl&&fl(hl,n)||(hl=n,n=nr(ls,"onSelect"),0<n.length&&(t=new hi("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=xn)))}function Xa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Sn={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionrun:Xa("Transition","TransitionRun"),transitionstart:Xa("Transition","TransitionStart"),transitioncancel:Xa("Transition","TransitionCancel"),transitionend:Xa("Transition","TransitionEnd")},rs={},gu={};Xt&&(gu=document.createElement("div").style,"AnimationEvent"in window||(delete Sn.animationend.animation,delete Sn.animationiteration.animation,delete Sn.animationstart.animation),"TransitionEvent"in window||delete Sn.transitionend.transition);function Za(e){if(rs[e])return rs[e];if(!Sn[e])return e;var t=Sn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in gu)return rs[e]=t[a];return e}var yu=Za("animationend"),vu=Za("animationiteration"),bu=Za("animationstart"),Np=Za("transitionrun"),zp=Za("transitionstart"),Tp=Za("transitioncancel"),xu=Za("transitionend"),Su=new Map,ss="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ss.push("scrollEnd");function Mt(e,t){Su.set(e,t),Va(t,[e])}var gi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},wt=[],En=0,os=0;function yi(){for(var e=En,t=os=En=0;t<e;){var a=wt[t];wt[t++]=null;var n=wt[t];wt[t++]=null;var l=wt[t];wt[t++]=null;var i=wt[t];if(wt[t++]=null,n!==null&&l!==null){var d=n.pending;d===null?l.next=l:(l.next=d.next,d.next=l),n.pending=l}i!==0&&Eu(a,l,i)}}function vi(e,t,a,n){wt[En++]=e,wt[En++]=t,wt[En++]=a,wt[En++]=n,os|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function cs(e,t,a,n){return vi(e,t,a,n),bi(e)}function Fa(e,t){return vi(e,null,null,t),bi(e)}function Eu(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var l=!1,i=e.return;i!==null;)i.childLanes|=a,n=i.alternate,n!==null&&(n.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&t!==null&&(l=31-ft(a),e=i.hiddenUpdates,n=e[l],n===null?e[l]=[t]:n.push(t),t.lane=a|536870912),i):null}function bi(e){if(50<Bl)throw Bl=0,bo=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var wn={};function Op(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(e,t,a,n){return new Op(e,t,a,n)}function us(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zt(e,t){var a=e.alternate;return a===null?(a=mt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function wu(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function xi(e,t,a,n,l,i){var d=0;if(n=e,typeof e=="function")us(e)&&(d=1);else if(typeof e=="string")d=Bg(e,a,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ae:return e=mt(31,a,t,l),e.elementType=Ae,e.lanes=i,e;case B:return Ja(a.children,l,i,t);case L:d=8,l|=24;break;case G:return e=mt(12,a,t,l|2),e.elementType=G,e.lanes=i,e;case ye:return e=mt(13,a,t,l),e.elementType=ye,e.lanes=i,e;case fe:return e=mt(19,a,t,l),e.elementType=fe,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case X:d=10;break e;case V:d=9;break e;case ne:d=11;break e;case J:d=14;break e;case Ee:d=16,n=null;break e}d=29,a=Error(c(130,e===null?"null":typeof e,"")),n=null}return t=mt(d,a,t,l),t.elementType=e,t.type=n,t.lanes=i,t}function Ja(e,t,a,n){return e=mt(7,e,n,t),e.lanes=a,e}function ds(e,t,a){return e=mt(6,e,null,t),e.lanes=a,e}function ju(e){var t=mt(18,null,null,0);return t.stateNode=e,t}function fs(e,t,a){return t=mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Au=new WeakMap;function jt(e,t){if(typeof e=="object"&&e!==null){var a=Au.get(e);return a!==void 0?a:(t={value:e,source:t,stack:jc(t)},Au.set(e,t),t)}return{value:e,source:t,stack:jc(t)}}var jn=[],An=0,Si=null,ml=0,At=[],Ct=0,ya=null,Ut=1,kt="";function Ft(e,t){jn[An++]=ml,jn[An++]=Si,Si=e,ml=t}function Cu(e,t,a){At[Ct++]=Ut,At[Ct++]=kt,At[Ct++]=ya,ya=e;var n=Ut;e=kt;var l=32-ft(n)-1;n&=~(1<<l),a+=1;var i=32-ft(t)+l;if(30<i){var d=l-l%5;i=(n&(1<<d)-1).toString(32),n>>=d,l-=d,Ut=1<<32-ft(t)+l|a<<l|n,kt=i+e}else Ut=1<<i|a<<l|n,kt=e}function hs(e){e.return!==null&&(Ft(e,1),Cu(e,1,0))}function ms(e){for(;e===Si;)Si=jn[--An],jn[An]=null,ml=jn[--An],jn[An]=null;for(;e===ya;)ya=At[--Ct],At[Ct]=null,kt=At[--Ct],At[Ct]=null,Ut=At[--Ct],At[Ct]=null}function Nu(e,t){At[Ct++]=Ut,At[Ct++]=kt,At[Ct++]=ya,Ut=t.id,kt=t.overflow,ya=e}var Ke=null,Ce=null,ce=!1,va=null,Nt=!1,ps=Error(c(519));function ba(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw pl(jt(t,e)),ps}function zu(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[Je]=e,t[nt]=n,a){case"dialog":re("cancel",t),re("close",t);break;case"iframe":case"object":case"embed":re("load",t);break;case"video":case"audio":for(a=0;a<kl.length;a++)re(kl[a],t);break;case"source":re("error",t);break;case"img":case"image":case"link":re("error",t),re("load",t);break;case"details":re("toggle",t);break;case"input":re("invalid",t),Yc(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":re("invalid",t);break;case"textarea":re("invalid",t),Vc(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||Zf(t.textContent,a)?(n.popover!=null&&(re("beforetoggle",t),re("toggle",t)),n.onScroll!=null&&re("scroll",t),n.onScrollEnd!=null&&re("scrollend",t),n.onClick!=null&&(t.onclick=Qt),t=!0):t=!1,t||ba(e,!0)}function Tu(e){for(Ke=e.return;Ke;)switch(Ke.tag){case 5:case 31:case 13:Nt=!1;return;case 27:case 3:Nt=!0;return;default:Ke=Ke.return}}function Cn(e){if(e!==Ke)return!1;if(!ce)return Tu(e),ce=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||_o(e.type,e.memoizedProps)),a=!a),a&&Ce&&ba(e),Tu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ce=th(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ce=th(e)}else t===27?(t=Ce,Ra(e.type)?(e=Ho,Ho=null,Ce=e):Ce=t):Ce=Ke?Tt(e.stateNode.nextSibling):null;return!0}function Ka(){Ce=Ke=null,ce=!1}function gs(){var e=va;return e!==null&&(ot===null?ot=e:ot.push.apply(ot,e),va=null),e}function pl(e){va===null?va=[e]:va.push(e)}var ys=E(null),$a=null,Jt=null;function xa(e,t,a){Y(ys,t._currentValue),t._currentValue=a}function Kt(e){e._currentValue=ys.current,U(ys)}function vs(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function bs(e,t,a,n){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var d=l.child;i=i.firstContext;e:for(;i!==null;){var h=i;i=l;for(var b=0;b<t.length;b++)if(h.context===t[b]){i.lanes|=a,h=i.alternate,h!==null&&(h.lanes|=a),vs(i.return,a,e),n||(d=null);break e}i=h.next}}else if(l.tag===18){if(d=l.return,d===null)throw Error(c(341));d.lanes|=a,i=d.alternate,i!==null&&(i.lanes|=a),vs(d,a,e),d=null}else d=l.child;if(d!==null)d.return=l;else for(d=l;d!==null;){if(d===e){d=null;break}if(l=d.sibling,l!==null){l.return=d.return,d=l;break}d=d.return}l=d}}function Nn(e,t,a,n){e=null;for(var l=t,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var d=l.alternate;if(d===null)throw Error(c(387));if(d=d.memoizedProps,d!==null){var h=l.type;ht(l.pendingProps.value,d.value)||(e!==null?e.push(h):e=[h])}}else if(l===me.current){if(d=l.alternate,d===null)throw Error(c(387));d.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Gl):e=[Gl])}l=l.return}e!==null&&bs(t,e,a,n),t.flags|=262144}function Ei(e){for(e=e.firstContext;e!==null;){if(!ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Wa(e){$a=e,Jt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function $e(e){return Ou($a,e)}function wi(e,t){return $a===null&&Wa(e),Ou(e,t)}function Ou(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Jt===null){if(e===null)throw Error(c(308));Jt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Jt=Jt.next=t;return a}var Dp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Mp=r.unstable_scheduleCallback,Rp=r.unstable_NormalPriority,ke={$$typeof:X,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xs(){return{controller:new Dp,data:new Map,refCount:0}}function gl(e){e.refCount--,e.refCount===0&&Mp(Rp,function(){e.controller.abort()})}var yl=null,Ss=0,zn=0,Tn=null;function _p(e,t){if(yl===null){var a=yl=[];Ss=0,zn=Ao(),Tn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Ss++,t.then(Du,Du),t}function Du(){if(--Ss===0&&yl!==null){Tn!==null&&(Tn.status="fulfilled");var e=yl;yl=null,zn=0,Tn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Bp(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(n.status="rejected",n.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),n}var Mu=M.S;M.S=function(e,t){gf=ut(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&_p(e,t),Mu!==null&&Mu(e,t)};var Ia=E(null);function Es(){var e=Ia.current;return e!==null?e:je.pooledCache}function ji(e,t){t===null?Y(Ia,Ia.current):Y(Ia,t.pool)}function Ru(){var e=Es();return e===null?null:{parent:ke._currentValue,pool:e}}var On=Error(c(460)),ws=Error(c(474)),Ai=Error(c(542)),Ci={then:function(){}};function _u(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Bu(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Qt,Qt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ku(e),e;default:if(typeof t.status=="string")t.then(Qt,Qt);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=n}},function(n){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ku(e),e}throw en=t,On}}function Pa(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(en=a,On):a}}var en=null;function Uu(){if(en===null)throw Error(c(459));var e=en;return en=null,e}function ku(e){if(e===On||e===Ai)throw Error(c(483))}var Dn=null,vl=0;function Ni(e){var t=vl;return vl+=1,Dn===null&&(Dn=[]),Bu(Dn,e,t)}function bl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function zi(e,t){throw t.$$typeof===O?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Lu(e){function t(j,S){if(e){var A=j.deletions;A===null?(j.deletions=[S],j.flags|=16):A.push(S)}}function a(j,S){if(!e)return null;for(;S!==null;)t(j,S),S=S.sibling;return null}function n(j){for(var S=new Map;j!==null;)j.key!==null?S.set(j.key,j):S.set(j.index,j),j=j.sibling;return S}function l(j,S){return j=Zt(j,S),j.index=0,j.sibling=null,j}function i(j,S,A){return j.index=A,e?(A=j.alternate,A!==null?(A=A.index,A<S?(j.flags|=67108866,S):A):(j.flags|=67108866,S)):(j.flags|=1048576,S)}function d(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function h(j,S,A,R){return S===null||S.tag!==6?(S=ds(A,j.mode,R),S.return=j,S):(S=l(S,A),S.return=j,S)}function b(j,S,A,R){var K=A.type;return K===B?D(j,S,A.props.children,R,A.key):S!==null&&(S.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Ee&&Pa(K)===S.type)?(S=l(S,A.props),bl(S,A),S.return=j,S):(S=xi(A.type,A.key,A.props,null,j.mode,R),bl(S,A),S.return=j,S)}function C(j,S,A,R){return S===null||S.tag!==4||S.stateNode.containerInfo!==A.containerInfo||S.stateNode.implementation!==A.implementation?(S=fs(A,j.mode,R),S.return=j,S):(S=l(S,A.children||[]),S.return=j,S)}function D(j,S,A,R,K){return S===null||S.tag!==7?(S=Ja(A,j.mode,R,K),S.return=j,S):(S=l(S,A),S.return=j,S)}function _(j,S,A){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=ds(""+S,j.mode,A),S.return=j,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case k:return A=xi(S.type,S.key,S.props,null,j.mode,A),bl(A,S),A.return=j,A;case H:return S=fs(S,j.mode,A),S.return=j,S;case Ee:return S=Pa(S),_(j,S,A)}if(Pe(S)||ze(S))return S=Ja(S,j.mode,A,null),S.return=j,S;if(typeof S.then=="function")return _(j,Ni(S),A);if(S.$$typeof===X)return _(j,wi(j,S),A);zi(j,S)}return null}function z(j,S,A,R){var K=S!==null?S.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return K!==null?null:h(j,S,""+A,R);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case k:return A.key===K?b(j,S,A,R):null;case H:return A.key===K?C(j,S,A,R):null;case Ee:return A=Pa(A),z(j,S,A,R)}if(Pe(A)||ze(A))return K!==null?null:D(j,S,A,R,null);if(typeof A.then=="function")return z(j,S,Ni(A),R);if(A.$$typeof===X)return z(j,S,wi(j,A),R);zi(j,A)}return null}function T(j,S,A,R,K){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return j=j.get(A)||null,h(S,j,""+R,K);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case k:return j=j.get(R.key===null?A:R.key)||null,b(S,j,R,K);case H:return j=j.get(R.key===null?A:R.key)||null,C(S,j,R,K);case Ee:return R=Pa(R),T(j,S,A,R,K)}if(Pe(R)||ze(R))return j=j.get(A)||null,D(S,j,R,K,null);if(typeof R.then=="function")return T(j,S,A,Ni(R),K);if(R.$$typeof===X)return T(j,S,A,wi(S,R),K);zi(S,R)}return null}function Q(j,S,A,R){for(var K=null,ue=null,F=S,ae=S=0,oe=null;F!==null&&ae<A.length;ae++){F.index>ae?(oe=F,F=null):oe=F.sibling;var de=z(j,F,A[ae],R);if(de===null){F===null&&(F=oe);break}e&&F&&de.alternate===null&&t(j,F),S=i(de,S,ae),ue===null?K=de:ue.sibling=de,ue=de,F=oe}if(ae===A.length)return a(j,F),ce&&Ft(j,ae),K;if(F===null){for(;ae<A.length;ae++)F=_(j,A[ae],R),F!==null&&(S=i(F,S,ae),ue===null?K=F:ue.sibling=F,ue=F);return ce&&Ft(j,ae),K}for(F=n(F);ae<A.length;ae++)oe=T(F,j,ae,A[ae],R),oe!==null&&(e&&oe.alternate!==null&&F.delete(oe.key===null?ae:oe.key),S=i(oe,S,ae),ue===null?K=oe:ue.sibling=oe,ue=oe);return e&&F.forEach(function(La){return t(j,La)}),ce&&Ft(j,ae),K}function $(j,S,A,R){if(A==null)throw Error(c(151));for(var K=null,ue=null,F=S,ae=S=0,oe=null,de=A.next();F!==null&&!de.done;ae++,de=A.next()){F.index>ae?(oe=F,F=null):oe=F.sibling;var La=z(j,F,de.value,R);if(La===null){F===null&&(F=oe);break}e&&F&&La.alternate===null&&t(j,F),S=i(La,S,ae),ue===null?K=La:ue.sibling=La,ue=La,F=oe}if(de.done)return a(j,F),ce&&Ft(j,ae),K;if(F===null){for(;!de.done;ae++,de=A.next())de=_(j,de.value,R),de!==null&&(S=i(de,S,ae),ue===null?K=de:ue.sibling=de,ue=de);return ce&&Ft(j,ae),K}for(F=n(F);!de.done;ae++,de=A.next())de=T(F,j,ae,de.value,R),de!==null&&(e&&de.alternate!==null&&F.delete(de.key===null?ae:de.key),S=i(de,S,ae),ue===null?K=de:ue.sibling=de,ue=de);return e&&F.forEach(function(Zg){return t(j,Zg)}),ce&&Ft(j,ae),K}function Se(j,S,A,R){if(typeof A=="object"&&A!==null&&A.type===B&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case k:e:{for(var K=A.key;S!==null;){if(S.key===K){if(K=A.type,K===B){if(S.tag===7){a(j,S.sibling),R=l(S,A.props.children),R.return=j,j=R;break e}}else if(S.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Ee&&Pa(K)===S.type){a(j,S.sibling),R=l(S,A.props),bl(R,A),R.return=j,j=R;break e}a(j,S);break}else t(j,S);S=S.sibling}A.type===B?(R=Ja(A.props.children,j.mode,R,A.key),R.return=j,j=R):(R=xi(A.type,A.key,A.props,null,j.mode,R),bl(R,A),R.return=j,j=R)}return d(j);case H:e:{for(K=A.key;S!==null;){if(S.key===K)if(S.tag===4&&S.stateNode.containerInfo===A.containerInfo&&S.stateNode.implementation===A.implementation){a(j,S.sibling),R=l(S,A.children||[]),R.return=j,j=R;break e}else{a(j,S);break}else t(j,S);S=S.sibling}R=fs(A,j.mode,R),R.return=j,j=R}return d(j);case Ee:return A=Pa(A),Se(j,S,A,R)}if(Pe(A))return Q(j,S,A,R);if(ze(A)){if(K=ze(A),typeof K!="function")throw Error(c(150));return A=K.call(A),$(j,S,A,R)}if(typeof A.then=="function")return Se(j,S,Ni(A),R);if(A.$$typeof===X)return Se(j,S,wi(j,A),R);zi(j,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,S!==null&&S.tag===6?(a(j,S.sibling),R=l(S,A),R.return=j,j=R):(a(j,S),R=ds(A,j.mode,R),R.return=j,j=R),d(j)):a(j,S)}return function(j,S,A,R){try{vl=0;var K=Se(j,S,A,R);return Dn=null,K}catch(F){if(F===On||F===Ai)throw F;var ue=mt(29,F,null,j.mode);return ue.lanes=R,ue.return=j,ue}finally{}}}var tn=Lu(!0),Hu=Lu(!1),Sa=!1;function js(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function As(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ea(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function wa(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(he&2)!==0){var l=n.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),n.pending=t,t=bi(e),Eu(e,null,a),t}return vi(e,n,t,a),bi(e)}function xl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Oc(e,a)}}function Cs(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var l=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var d={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?l=i=d:i=i.next=d,a=a.next}while(a!==null);i===null?l=i=t:i=i.next=t}else l=i=t;a={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Ns=!1;function Sl(){if(Ns){var e=Tn;if(e!==null)throw e}}function El(e,t,a,n){Ns=!1;var l=e.updateQueue;Sa=!1;var i=l.firstBaseUpdate,d=l.lastBaseUpdate,h=l.shared.pending;if(h!==null){l.shared.pending=null;var b=h,C=b.next;b.next=null,d===null?i=C:d.next=C,d=b;var D=e.alternate;D!==null&&(D=D.updateQueue,h=D.lastBaseUpdate,h!==d&&(h===null?D.firstBaseUpdate=C:h.next=C,D.lastBaseUpdate=b))}if(i!==null){var _=l.baseState;d=0,D=C=b=null,h=i;do{var z=h.lane&-536870913,T=z!==h.lane;if(T?(se&z)===z:(n&z)===z){z!==0&&z===zn&&(Ns=!0),D!==null&&(D=D.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var Q=e,$=h;z=t;var Se=a;switch($.tag){case 1:if(Q=$.payload,typeof Q=="function"){_=Q.call(Se,_,z);break e}_=Q;break e;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=$.payload,z=typeof Q=="function"?Q.call(Se,_,z):Q,z==null)break e;_=x({},_,z);break e;case 2:Sa=!0}}z=h.callback,z!==null&&(e.flags|=64,T&&(e.flags|=8192),T=l.callbacks,T===null?l.callbacks=[z]:T.push(z))}else T={lane:z,tag:h.tag,payload:h.payload,callback:h.callback,next:null},D===null?(C=D=T,b=_):D=D.next=T,d|=z;if(h=h.next,h===null){if(h=l.shared.pending,h===null)break;T=h,h=T.next,T.next=null,l.lastBaseUpdate=T,l.shared.pending=null}}while(!0);D===null&&(b=_),l.baseState=b,l.firstBaseUpdate=C,l.lastBaseUpdate=D,i===null&&(l.shared.lanes=0),za|=d,e.lanes=d,e.memoizedState=_}}function qu(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function Yu(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)qu(a[e],t)}var Mn=E(null),Ti=E(0);function Gu(e,t){e=la,Y(Ti,e),Y(Mn,t),la=e|t.baseLanes}function zs(){Y(Ti,la),Y(Mn,Mn.current)}function Ts(){la=Ti.current,U(Mn),U(Ti)}var pt=E(null),zt=null;function ja(e){var t=e.alternate;Y(Be,Be.current&1),Y(pt,e),zt===null&&(t===null||Mn.current!==null||t.memoizedState!==null)&&(zt=e)}function Os(e){Y(Be,Be.current),Y(pt,e),zt===null&&(zt=e)}function Vu(e){e.tag===22?(Y(Be,Be.current),Y(pt,e),zt===null&&(zt=e)):Aa()}function Aa(){Y(Be,Be.current),Y(pt,pt.current)}function gt(e){U(pt),zt===e&&(zt=null),U(Be)}var Be=E(0);function Oi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ko(a)||Lo(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $t=0,te=null,be=null,Le=null,Di=!1,Rn=!1,an=!1,Mi=0,wl=0,_n=null,Up=0;function De(){throw Error(c(321))}function Ds(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ht(e[a],t[a]))return!1;return!0}function Ms(e,t,a,n,l,i){return $t=i,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?Cd:Fs,an=!1,i=a(n,l),an=!1,Rn&&(i=Xu(t,a,n,l)),Qu(e),i}function Qu(e){M.H=Cl;var t=be!==null&&be.next!==null;if($t=0,Le=be=te=null,Di=!1,wl=0,_n=null,t)throw Error(c(300));e===null||He||(e=e.dependencies,e!==null&&Ei(e)&&(He=!0))}function Xu(e,t,a,n){te=e;var l=0;do{if(Rn&&(_n=null),wl=0,Rn=!1,25<=l)throw Error(c(301));if(l+=1,Le=be=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}M.H=Nd,i=t(a,n)}while(Rn);return i}function kp(){var e=M.H,t=e.useState()[0];return t=typeof t.then=="function"?jl(t):t,e=e.useState()[0],(be!==null?be.memoizedState:null)!==e&&(te.flags|=1024),t}function Rs(){var e=Mi!==0;return Mi=0,e}function _s(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Bs(e){if(Di){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Di=!1}$t=0,Le=be=te=null,Rn=!1,wl=Mi=0,_n=null}function at(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?te.memoizedState=Le=e:Le=Le.next=e,Le}function Ue(){if(be===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=Le===null?te.memoizedState:Le.next;if(t!==null)Le=t,be=e;else{if(e===null)throw te.alternate===null?Error(c(467)):Error(c(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Le===null?te.memoizedState=Le=e:Le=Le.next=e}return Le}function Ri(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function jl(e){var t=wl;return wl+=1,_n===null&&(_n=[]),e=Bu(_n,e,t),t=te,(Le===null?t.memoizedState:Le.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?Cd:Fs),e}function _i(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return jl(e);if(e.$$typeof===X)return $e(e)}throw Error(c(438,String(e)))}function Us(e){var t=null,a=te.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=te.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Ri(),te.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=Ge;return t.index++,a}function Wt(e,t){return typeof t=="function"?t(e):t}function Bi(e){var t=Ue();return ks(t,be,e)}function ks(e,t,a){var n=e.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=a;var l=e.baseQueue,i=n.pending;if(i!==null){if(l!==null){var d=l.next;l.next=i.next,i.next=d}t.baseQueue=l=i,n.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{t=l.next;var h=d=null,b=null,C=t,D=!1;do{var _=C.lane&-536870913;if(_!==C.lane?(se&_)===_:($t&_)===_){var z=C.revertLane;if(z===0)b!==null&&(b=b.next={lane:0,revertLane:0,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),_===zn&&(D=!0);else if(($t&z)===z){C=C.next,z===zn&&(D=!0);continue}else _={lane:0,revertLane:C.revertLane,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},b===null?(h=b=_,d=i):b=b.next=_,te.lanes|=z,za|=z;_=C.action,an&&a(i,_),i=C.hasEagerState?C.eagerState:a(i,_)}else z={lane:_,revertLane:C.revertLane,gesture:C.gesture,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},b===null?(h=b=z,d=i):b=b.next=z,te.lanes|=_,za|=_;C=C.next}while(C!==null&&C!==t);if(b===null?d=i:b.next=h,!ht(i,e.memoizedState)&&(He=!0,D&&(a=Tn,a!==null)))throw a;e.memoizedState=i,e.baseState=d,e.baseQueue=b,n.lastRenderedState=i}return l===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Ls(e){var t=Ue(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var n=a.dispatch,l=a.pending,i=t.memoizedState;if(l!==null){a.pending=null;var d=l=l.next;do i=e(i,d.action),d=d.next;while(d!==l);ht(i,t.memoizedState)||(He=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,n]}function Zu(e,t,a){var n=te,l=Ue(),i=ce;if(i){if(a===void 0)throw Error(c(407));a=a()}else a=t();var d=!ht((be||l).memoizedState,a);if(d&&(l.memoizedState=a,He=!0),l=l.queue,Ys(Ku.bind(null,n,l,e),[e]),l.getSnapshot!==t||d||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,Bn(9,{destroy:void 0},Ju.bind(null,n,l,a,t),null),je===null)throw Error(c(349));i||($t&127)!==0||Fu(n,t,a)}return a}function Fu(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=te.updateQueue,t===null?(t=Ri(),te.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Ju(e,t,a,n){t.value=a,t.getSnapshot=n,$u(t)&&Wu(e)}function Ku(e,t,a){return a(function(){$u(t)&&Wu(e)})}function $u(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ht(e,a)}catch{return!0}}function Wu(e){var t=Fa(e,2);t!==null&&ct(t,e,2)}function Hs(e){var t=at();if(typeof e=="function"){var a=e;if(e=a(),an){ma(!0);try{a()}finally{ma(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:e},t}function Iu(e,t,a,n){return e.baseState=a,ks(e,be,typeof n=="function"?n:Wt)}function Lp(e,t,a,n,l){if(Li(e))throw Error(c(485));if(e=t.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){i.listeners.push(d)}};M.T!==null?a(!0):i.isTransition=!1,n(i),a=t.pending,a===null?(i.next=t.pending=i,Pu(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Pu(e,t){var a=t.action,n=t.payload,l=e.state;if(t.isTransition){var i=M.T,d={};M.T=d;try{var h=a(l,n),b=M.S;b!==null&&b(d,h),ed(e,t,h)}catch(C){qs(e,t,C)}finally{i!==null&&d.types!==null&&(i.types=d.types),M.T=i}}else try{i=a(l,n),ed(e,t,i)}catch(C){qs(e,t,C)}}function ed(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){td(e,t,n)},function(n){return qs(e,t,n)}):td(e,t,a)}function td(e,t,a){t.status="fulfilled",t.value=a,ad(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Pu(e,a)))}function qs(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,ad(t),t=t.next;while(t!==n)}e.action=null}function ad(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function nd(e,t){return t}function ld(e,t){if(ce){var a=je.formState;if(a!==null){e:{var n=te;if(ce){if(Ce){t:{for(var l=Ce,i=Nt;l.nodeType!==8;){if(!i){l=null;break t}if(l=Tt(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){Ce=Tt(l.nextSibling),n=l.data==="F!";break e}}ba(n)}n=!1}n&&(t=a[0])}}return a=at(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nd,lastRenderedState:t},a.queue=n,a=wd.bind(null,te,n),n.dispatch=a,n=Hs(!1),i=Zs.bind(null,te,!1,n.queue),n=at(),l={state:t,dispatch:null,action:e,pending:null},n.queue=l,a=Lp.bind(null,te,l,i,a),l.dispatch=a,n.memoizedState=e,[t,a,!1]}function id(e){var t=Ue();return rd(t,be,e)}function rd(e,t,a){if(t=ks(e,t,nd)[0],e=Bi(Wt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=jl(t)}catch(d){throw d===On?Ai:d}else n=t;t=Ue();var l=t.queue,i=l.dispatch;return a!==t.memoizedState&&(te.flags|=2048,Bn(9,{destroy:void 0},Hp.bind(null,l,a),null)),[n,i,e]}function Hp(e,t){e.action=t}function sd(e){var t=Ue(),a=be;if(a!==null)return rd(t,a,e);Ue(),t=t.memoizedState,a=Ue();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function Bn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=te.updateQueue,t===null&&(t=Ri(),te.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function od(){return Ue().memoizedState}function Ui(e,t,a,n){var l=at();te.flags|=e,l.memoizedState=Bn(1|t,{destroy:void 0},a,n===void 0?null:n)}function ki(e,t,a,n){var l=Ue();n=n===void 0?null:n;var i=l.memoizedState.inst;be!==null&&n!==null&&Ds(n,be.memoizedState.deps)?l.memoizedState=Bn(t,i,a,n):(te.flags|=e,l.memoizedState=Bn(1|t,i,a,n))}function cd(e,t){Ui(8390656,8,e,t)}function Ys(e,t){ki(2048,8,e,t)}function qp(e){te.flags|=4;var t=te.updateQueue;if(t===null)t=Ri(),te.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function ud(e){var t=Ue().memoizedState;return qp({ref:t,nextImpl:e}),function(){if((he&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function dd(e,t){return ki(4,2,e,t)}function fd(e,t){return ki(4,4,e,t)}function hd(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function md(e,t,a){a=a!=null?a.concat([e]):null,ki(4,4,hd.bind(null,t,e),a)}function Gs(){}function pd(e,t){var a=Ue();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&Ds(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function gd(e,t){var a=Ue();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&Ds(t,n[1]))return n[0];if(n=e(),an){ma(!0);try{e()}finally{ma(!1)}}return a.memoizedState=[n,t],n}function Vs(e,t,a){return a===void 0||($t&1073741824)!==0&&(se&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=vf(),te.lanes|=e,za|=e,a)}function yd(e,t,a,n){return ht(a,t)?a:Mn.current!==null?(e=Vs(e,a,n),ht(e,t)||(He=!0),e):($t&42)===0||($t&1073741824)!==0&&(se&261930)===0?(He=!0,e.memoizedState=a):(e=vf(),te.lanes|=e,za|=e,t)}function vd(e,t,a,n,l){var i=q.p;q.p=i!==0&&8>i?i:8;var d=M.T,h={};M.T=h,Zs(e,!1,t,a);try{var b=l(),C=M.S;if(C!==null&&C(h,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var D=Bp(b,n);Al(e,t,D,bt(e))}else Al(e,t,n,bt(e))}catch(_){Al(e,t,{then:function(){},status:"rejected",reason:_},bt())}finally{q.p=i,d!==null&&h.types!==null&&(d.types=h.types),M.T=d}}function Yp(){}function Qs(e,t,a,n){if(e.tag!==5)throw Error(c(476));var l=bd(e).queue;vd(e,l,t,W,a===null?Yp:function(){return xd(e),a(n)})}function bd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:W},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function xd(e){var t=bd(e);t.next===null&&(t=e.alternate.memoizedState),Al(e,t.next.queue,{},bt())}function Xs(){return $e(Gl)}function Sd(){return Ue().memoizedState}function Ed(){return Ue().memoizedState}function Gp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=bt();e=Ea(a);var n=wa(t,e,a);n!==null&&(ct(n,t,a),xl(n,t,a)),t={cache:xs()},e.payload=t;return}t=t.return}}function Vp(e,t,a){var n=bt();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Li(e)?jd(t,a):(a=cs(e,t,a,n),a!==null&&(ct(a,e,n),Ad(a,t,n)))}function wd(e,t,a){var n=bt();Al(e,t,a,n)}function Al(e,t,a,n){var l={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Li(e))jd(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var d=t.lastRenderedState,h=i(d,a);if(l.hasEagerState=!0,l.eagerState=h,ht(h,d))return vi(e,t,l,0),je===null&&yi(),!1}catch{}finally{}if(a=cs(e,t,l,n),a!==null)return ct(a,e,n),Ad(a,t,n),!0}return!1}function Zs(e,t,a,n){if(n={lane:2,revertLane:Ao(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Li(e)){if(t)throw Error(c(479))}else t=cs(e,a,n,2),t!==null&&ct(t,e,2)}function Li(e){var t=e.alternate;return e===te||t!==null&&t===te}function jd(e,t){Rn=Di=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Ad(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Oc(e,a)}}var Cl={readContext:$e,use:_i,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useLayoutEffect:De,useInsertionEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useSyncExternalStore:De,useId:De,useHostTransitionStatus:De,useFormState:De,useActionState:De,useOptimistic:De,useMemoCache:De,useCacheRefresh:De};Cl.useEffectEvent=De;var Cd={readContext:$e,use:_i,useCallback:function(e,t){return at().memoizedState=[e,t===void 0?null:t],e},useContext:$e,useEffect:cd,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Ui(4194308,4,hd.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Ui(4194308,4,e,t)},useInsertionEffect:function(e,t){Ui(4,2,e,t)},useMemo:function(e,t){var a=at();t=t===void 0?null:t;var n=e();if(an){ma(!0);try{e()}finally{ma(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=at();if(a!==void 0){var l=a(t);if(an){ma(!0);try{a(t)}finally{ma(!1)}}}else l=t;return n.memoizedState=n.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},n.queue=e,e=e.dispatch=Vp.bind(null,te,e),[n.memoizedState,e]},useRef:function(e){var t=at();return e={current:e},t.memoizedState=e},useState:function(e){e=Hs(e);var t=e.queue,a=wd.bind(null,te,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Gs,useDeferredValue:function(e,t){var a=at();return Vs(a,e,t)},useTransition:function(){var e=Hs(!1);return e=vd.bind(null,te,e.queue,!0,!1),at().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=te,l=at();if(ce){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),je===null)throw Error(c(349));(se&127)!==0||Fu(n,t,a)}l.memoizedState=a;var i={value:a,getSnapshot:t};return l.queue=i,cd(Ku.bind(null,n,i,e),[e]),n.flags|=2048,Bn(9,{destroy:void 0},Ju.bind(null,n,i,a,t),null),a},useId:function(){var e=at(),t=je.identifierPrefix;if(ce){var a=kt,n=Ut;a=(n&~(1<<32-ft(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Mi++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Up++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Xs,useFormState:ld,useActionState:ld,useOptimistic:function(e){var t=at();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Zs.bind(null,te,!0,a),a.dispatch=t,[e,t]},useMemoCache:Us,useCacheRefresh:function(){return at().memoizedState=Gp.bind(null,te)},useEffectEvent:function(e){var t=at(),a={impl:e};return t.memoizedState=a,function(){if((he&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}},Fs={readContext:$e,use:_i,useCallback:pd,useContext:$e,useEffect:Ys,useImperativeHandle:md,useInsertionEffect:dd,useLayoutEffect:fd,useMemo:gd,useReducer:Bi,useRef:od,useState:function(){return Bi(Wt)},useDebugValue:Gs,useDeferredValue:function(e,t){var a=Ue();return yd(a,be.memoizedState,e,t)},useTransition:function(){var e=Bi(Wt)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:jl(e),t]},useSyncExternalStore:Zu,useId:Sd,useHostTransitionStatus:Xs,useFormState:id,useActionState:id,useOptimistic:function(e,t){var a=Ue();return Iu(a,be,e,t)},useMemoCache:Us,useCacheRefresh:Ed};Fs.useEffectEvent=ud;var Nd={readContext:$e,use:_i,useCallback:pd,useContext:$e,useEffect:Ys,useImperativeHandle:md,useInsertionEffect:dd,useLayoutEffect:fd,useMemo:gd,useReducer:Ls,useRef:od,useState:function(){return Ls(Wt)},useDebugValue:Gs,useDeferredValue:function(e,t){var a=Ue();return be===null?Vs(a,e,t):yd(a,be.memoizedState,e,t)},useTransition:function(){var e=Ls(Wt)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:jl(e),t]},useSyncExternalStore:Zu,useId:Sd,useHostTransitionStatus:Xs,useFormState:sd,useActionState:sd,useOptimistic:function(e,t){var a=Ue();return be!==null?Iu(a,be,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Us,useCacheRefresh:Ed};Nd.useEffectEvent=ud;function Js(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:x({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ks={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=bt(),l=Ea(n);l.payload=t,a!=null&&(l.callback=a),t=wa(e,l,n),t!==null&&(ct(t,e,n),xl(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=bt(),l=Ea(n);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=wa(e,l,n),t!==null&&(ct(t,e,n),xl(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=bt(),n=Ea(a);n.tag=2,t!=null&&(n.callback=t),t=wa(e,n,a),t!==null&&(ct(t,e,a),xl(t,e,a))}};function zd(e,t,a,n,l,i,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,d):t.prototype&&t.prototype.isPureReactComponent?!fl(a,n)||!fl(l,i):!0}function Td(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&Ks.enqueueReplaceState(t,t.state,null)}function nn(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=x({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function Od(e){gi(e)}function Dd(e){console.error(e)}function Md(e){gi(e)}function Hi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Rd(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function $s(e,t,a){return a=Ea(a),a.tag=3,a.payload={element:null},a.callback=function(){Hi(e,t)},a}function _d(e){return e=Ea(e),e.tag=3,e}function Bd(e,t,a,n){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var i=n.value;e.payload=function(){return l(i)},e.callback=function(){Rd(t,a,n)}}var d=a.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){Rd(t,a,n),typeof l!="function"&&(Ta===null?Ta=new Set([this]):Ta.add(this));var h=n.stack;this.componentDidCatch(n.value,{componentStack:h!==null?h:""})})}function Qp(e,t,a,n,l){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&Nn(t,a,l,!0),a=pt.current,a!==null){switch(a.tag){case 31:case 13:return zt===null?Wi():a.alternate===null&&Me===0&&(Me=3),a.flags&=-257,a.flags|=65536,a.lanes=l,n===Ci?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),Eo(e,n,l)),!1;case 22:return a.flags|=65536,n===Ci?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),Eo(e,n,l)),!1}throw Error(c(435,a.tag))}return Eo(e,n,l),Wi(),!1}if(ce)return t=pt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,n!==ps&&(e=Error(c(422),{cause:n}),pl(jt(e,a)))):(n!==ps&&(t=Error(c(423),{cause:n}),pl(jt(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,n=jt(n,a),l=$s(e.stateNode,n,l),Cs(e,l),Me!==4&&(Me=2)),!1;var i=Error(c(520),{cause:n});if(i=jt(i,a),_l===null?_l=[i]:_l.push(i),Me!==4&&(Me=2),t===null)return!0;n=jt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=$s(a.stateNode,n,e),Cs(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Ta===null||!Ta.has(i))))return a.flags|=65536,l&=-l,a.lanes|=l,l=_d(l),Bd(l,e,a,n),Cs(a,l),!1}a=a.return}while(a!==null);return!1}var Ws=Error(c(461)),He=!1;function We(e,t,a,n){t.child=e===null?Hu(t,null,a,n):tn(t,e.child,a,n)}function Ud(e,t,a,n,l){a=a.render;var i=t.ref;if("ref"in n){var d={};for(var h in n)h!=="ref"&&(d[h]=n[h])}else d=n;return Wa(t),n=Ms(e,t,a,d,i,l),h=Rs(),e!==null&&!He?(_s(e,t,l),It(e,t,l)):(ce&&h&&hs(t),t.flags|=1,We(e,t,n,l),t.child)}function kd(e,t,a,n,l){if(e===null){var i=a.type;return typeof i=="function"&&!us(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Ld(e,t,i,n,l)):(e=xi(a.type,null,n,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!io(e,l)){var d=i.memoizedProps;if(a=a.compare,a=a!==null?a:fl,a(d,n)&&e.ref===t.ref)return It(e,t,l)}return t.flags|=1,e=Zt(i,n),e.ref=t.ref,e.return=t,t.child=e}function Ld(e,t,a,n,l){if(e!==null){var i=e.memoizedProps;if(fl(i,n)&&e.ref===t.ref)if(He=!1,t.pendingProps=n=i,io(e,l))(e.flags&131072)!==0&&(He=!0);else return t.lanes=e.lanes,It(e,t,l)}return Is(e,t,a,n,l)}function Hd(e,t,a,n){var l=n.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(n=t.child=e.child,l=0;n!==null;)l=l|n.lanes|n.childLanes,n=n.sibling;n=l&~i}else n=0,t.child=null;return qd(e,t,i,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ji(t,i!==null?i.cachePool:null),i!==null?Gu(t,i):zs(),Vu(t);else return n=t.lanes=536870912,qd(e,t,i!==null?i.baseLanes|a:a,a,n)}else i!==null?(ji(t,i.cachePool),Gu(t,i),Aa(),t.memoizedState=null):(e!==null&&ji(t,null),zs(),Aa());return We(e,t,l,a),t.child}function Nl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function qd(e,t,a,n,l){var i=Es();return i=i===null?null:{parent:ke._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&ji(t,null),zs(),Vu(t),e!==null&&Nn(e,t,n,!0),t.childLanes=l,null}function qi(e,t){return t=Gi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Yd(e,t,a){return tn(t,e.child,null,a),e=qi(t,t.pendingProps),e.flags|=2,gt(t),t.memoizedState=null,e}function Xp(e,t,a){var n=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ce){if(n.mode==="hidden")return e=qi(t,n),t.lanes=536870912,Nl(null,e);if(Os(t),(e=Ce)?(e=eh(e,Nt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ya!==null?{id:Ut,overflow:kt}:null,retryLane:536870912,hydrationErrors:null},a=ju(e),a.return=t,t.child=a,Ke=t,Ce=null)):e=null,e===null)throw ba(t);return t.lanes=536870912,null}return qi(t,n)}var i=e.memoizedState;if(i!==null){var d=i.dehydrated;if(Os(t),l)if(t.flags&256)t.flags&=-257,t=Yd(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(He||Nn(e,t,a,!1),l=(a&e.childLanes)!==0,He||l){if(n=je,n!==null&&(d=Dc(n,a),d!==0&&d!==i.retryLane))throw i.retryLane=d,Fa(e,d),ct(n,e,d),Ws;Wi(),t=Yd(e,t,a)}else e=i.treeContext,Ce=Tt(d.nextSibling),Ke=t,ce=!0,va=null,Nt=!1,e!==null&&Nu(t,e),t=qi(t,n),t.flags|=4096;return t}return e=Zt(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Yi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Is(e,t,a,n,l){return Wa(t),a=Ms(e,t,a,n,void 0,l),n=Rs(),e!==null&&!He?(_s(e,t,l),It(e,t,l)):(ce&&n&&hs(t),t.flags|=1,We(e,t,a,l),t.child)}function Gd(e,t,a,n,l,i){return Wa(t),t.updateQueue=null,a=Xu(t,n,a,l),Qu(e),n=Rs(),e!==null&&!He?(_s(e,t,i),It(e,t,i)):(ce&&n&&hs(t),t.flags|=1,We(e,t,a,i),t.child)}function Vd(e,t,a,n,l){if(Wa(t),t.stateNode===null){var i=wn,d=a.contextType;typeof d=="object"&&d!==null&&(i=$e(d)),i=new a(n,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ks,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=n,i.state=t.memoizedState,i.refs={},js(t),d=a.contextType,i.context=typeof d=="object"&&d!==null?$e(d):wn,i.state=t.memoizedState,d=a.getDerivedStateFromProps,typeof d=="function"&&(Js(t,a,d,n),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(d=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),d!==i.state&&Ks.enqueueReplaceState(i,i.state,null),El(t,n,i,l),Sl(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){i=t.stateNode;var h=t.memoizedProps,b=nn(a,h);i.props=b;var C=i.context,D=a.contextType;d=wn,typeof D=="object"&&D!==null&&(d=$e(D));var _=a.getDerivedStateFromProps;D=typeof _=="function"||typeof i.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,D||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(h||C!==d)&&Td(t,i,n,d),Sa=!1;var z=t.memoizedState;i.state=z,El(t,n,i,l),Sl(),C=t.memoizedState,h||z!==C||Sa?(typeof _=="function"&&(Js(t,a,_,n),C=t.memoizedState),(b=Sa||zd(t,a,b,n,z,C,d))?(D||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=C),i.props=n,i.state=C,i.context=d,n=b):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,As(e,t),d=t.memoizedProps,D=nn(a,d),i.props=D,_=t.pendingProps,z=i.context,C=a.contextType,b=wn,typeof C=="object"&&C!==null&&(b=$e(C)),h=a.getDerivedStateFromProps,(C=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(d!==_||z!==b)&&Td(t,i,n,b),Sa=!1,z=t.memoizedState,i.state=z,El(t,n,i,l),Sl();var T=t.memoizedState;d!==_||z!==T||Sa||e!==null&&e.dependencies!==null&&Ei(e.dependencies)?(typeof h=="function"&&(Js(t,a,h,n),T=t.memoizedState),(D=Sa||zd(t,a,D,n,z,T,b)||e!==null&&e.dependencies!==null&&Ei(e.dependencies))?(C||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,T,b),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,T,b)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||d===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=T),i.props=n,i.state=T,i.context=b,n=D):(typeof i.componentDidUpdate!="function"||d===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),n=!1)}return i=n,Yi(e,t),n=(t.flags&128)!==0,i||n?(i=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&n?(t.child=tn(t,e.child,null,l),t.child=tn(t,null,a,l)):We(e,t,a,l),t.memoizedState=i.state,e=t.child):e=It(e,t,l),e}function Qd(e,t,a,n){return Ka(),t.flags|=256,We(e,t,a,n),t.child}var Ps={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function eo(e){return{baseLanes:e,cachePool:Ru()}}function to(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=vt),e}function Xd(e,t,a){var n=t.pendingProps,l=!1,i=(t.flags&128)!==0,d;if((d=i)||(d=e!==null&&e.memoizedState===null?!1:(Be.current&2)!==0),d&&(l=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(ce){if(l?ja(t):Aa(),(e=Ce)?(e=eh(e,Nt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ya!==null?{id:Ut,overflow:kt}:null,retryLane:536870912,hydrationErrors:null},a=ju(e),a.return=t,t.child=a,Ke=t,Ce=null)):e=null,e===null)throw ba(t);return Lo(e)?t.lanes=32:t.lanes=536870912,null}var h=n.children;return n=n.fallback,l?(Aa(),l=t.mode,h=Gi({mode:"hidden",children:h},l),n=Ja(n,l,a,null),h.return=t,n.return=t,h.sibling=n,t.child=h,n=t.child,n.memoizedState=eo(a),n.childLanes=to(e,d,a),t.memoizedState=Ps,Nl(null,n)):(ja(t),ao(t,h))}var b=e.memoizedState;if(b!==null&&(h=b.dehydrated,h!==null)){if(i)t.flags&256?(ja(t),t.flags&=-257,t=no(e,t,a)):t.memoizedState!==null?(Aa(),t.child=e.child,t.flags|=128,t=null):(Aa(),h=n.fallback,l=t.mode,n=Gi({mode:"visible",children:n.children},l),h=Ja(h,l,a,null),h.flags|=2,n.return=t,h.return=t,n.sibling=h,t.child=n,tn(t,e.child,null,a),n=t.child,n.memoizedState=eo(a),n.childLanes=to(e,d,a),t.memoizedState=Ps,t=Nl(null,n));else if(ja(t),Lo(h)){if(d=h.nextSibling&&h.nextSibling.dataset,d)var C=d.dgst;d=C,n=Error(c(419)),n.stack="",n.digest=d,pl({value:n,source:null,stack:null}),t=no(e,t,a)}else if(He||Nn(e,t,a,!1),d=(a&e.childLanes)!==0,He||d){if(d=je,d!==null&&(n=Dc(d,a),n!==0&&n!==b.retryLane))throw b.retryLane=n,Fa(e,n),ct(d,e,n),Ws;ko(h)||Wi(),t=no(e,t,a)}else ko(h)?(t.flags|=192,t.child=e.child,t=null):(e=b.treeContext,Ce=Tt(h.nextSibling),Ke=t,ce=!0,va=null,Nt=!1,e!==null&&Nu(t,e),t=ao(t,n.children),t.flags|=4096);return t}return l?(Aa(),h=n.fallback,l=t.mode,b=e.child,C=b.sibling,n=Zt(b,{mode:"hidden",children:n.children}),n.subtreeFlags=b.subtreeFlags&65011712,C!==null?h=Zt(C,h):(h=Ja(h,l,a,null),h.flags|=2),h.return=t,n.return=t,n.sibling=h,t.child=n,Nl(null,n),n=t.child,h=e.child.memoizedState,h===null?h=eo(a):(l=h.cachePool,l!==null?(b=ke._currentValue,l=l.parent!==b?{parent:b,pool:b}:l):l=Ru(),h={baseLanes:h.baseLanes|a,cachePool:l}),n.memoizedState=h,n.childLanes=to(e,d,a),t.memoizedState=Ps,Nl(e.child,n)):(ja(t),a=e.child,e=a.sibling,a=Zt(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=a,t.memoizedState=null,a)}function ao(e,t){return t=Gi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Gi(e,t){return e=mt(22,e,null,t),e.lanes=0,e}function no(e,t,a){return tn(t,e.child,null,a),e=ao(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Zd(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),vs(e.return,t,a)}function lo(e,t,a,n,l,i){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:l,treeForkCount:i}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=n,d.tail=a,d.tailMode=l,d.treeForkCount=i)}function Fd(e,t,a){var n=t.pendingProps,l=n.revealOrder,i=n.tail;n=n.children;var d=Be.current,h=(d&2)!==0;if(h?(d=d&1|2,t.flags|=128):d&=1,Y(Be,d),We(e,t,n,a),n=ce?ml:0,!h&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zd(e,a,t);else if(e.tag===19)Zd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&Oi(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),lo(t,!1,l,a,i,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Oi(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}lo(t,!0,a,null,i,n);break;case"together":lo(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function It(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),za|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Nn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=Zt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Zt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function io(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ei(e)))}function Zp(e,t,a){switch(t.tag){case 3:tt(t,t.stateNode.containerInfo),xa(t,ke,e.memoizedState.cache),Ka();break;case 27:case 5:Pn(t);break;case 4:tt(t,t.stateNode.containerInfo);break;case 10:xa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Os(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(ja(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Xd(e,t,a):(ja(t),e=It(e,t,a),e!==null?e.sibling:null);ja(t);break;case 19:var l=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(Nn(e,t,a,!1),n=(a&t.childLanes)!==0),l){if(n)return Fd(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Y(Be,Be.current),n)break;return null;case 22:return t.lanes=0,Hd(e,t,a,t.pendingProps);case 24:xa(t,ke,e.memoizedState.cache)}return It(e,t,a)}function Jd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)He=!0;else{if(!io(e,a)&&(t.flags&128)===0)return He=!1,Zp(e,t,a);He=(e.flags&131072)!==0}else He=!1,ce&&(t.flags&1048576)!==0&&Cu(t,ml,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=Pa(t.elementType),t.type=e,typeof e=="function")us(e)?(n=nn(e,n),t.tag=1,t=Vd(null,t,e,n,a)):(t.tag=0,t=Is(null,t,e,n,a));else{if(e!=null){var l=e.$$typeof;if(l===ne){t.tag=11,t=Ud(null,t,e,n,a);break e}else if(l===J){t.tag=14,t=kd(null,t,e,n,a);break e}}throw t=Re(e)||e,Error(c(306,t,""))}}return t;case 0:return Is(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,l=nn(n,t.pendingProps),Vd(e,t,n,l,a);case 3:e:{if(tt(t,t.stateNode.containerInfo),e===null)throw Error(c(387));n=t.pendingProps;var i=t.memoizedState;l=i.element,As(e,t),El(t,n,null,a);var d=t.memoizedState;if(n=d.cache,xa(t,ke,n),n!==i.cache&&bs(t,[ke],a,!0),Sl(),n=d.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Qd(e,t,n,a);break e}else if(n!==l){l=jt(Error(c(424)),t),pl(l),t=Qd(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ce=Tt(e.firstChild),Ke=t,ce=!0,va=null,Nt=!0,a=Hu(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ka(),n===l){t=It(e,t,a);break e}We(e,t,n,a)}t=t.child}return t;case 26:return Yi(e,t),e===null?(a=rh(t.type,null,t.pendingProps,null))?t.memoizedState=a:ce||(a=t.type,e=t.pendingProps,n=lr(le.current).createElement(a),n[Je]=t,n[nt]=e,Ie(n,a,e),Ze(n),t.stateNode=n):t.memoizedState=rh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Pn(t),e===null&&ce&&(n=t.stateNode=nh(t.type,t.pendingProps,le.current),Ke=t,Nt=!0,l=Ce,Ra(t.type)?(Ho=l,Ce=Tt(n.firstChild)):Ce=l),We(e,t,t.pendingProps.children,a),Yi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ce&&((l=n=Ce)&&(n=Eg(n,t.type,t.pendingProps,Nt),n!==null?(t.stateNode=n,Ke=t,Ce=Tt(n.firstChild),Nt=!1,l=!0):l=!1),l||ba(t)),Pn(t),l=t.type,i=t.pendingProps,d=e!==null?e.memoizedProps:null,n=i.children,_o(l,i)?n=null:d!==null&&_o(l,d)&&(t.flags|=32),t.memoizedState!==null&&(l=Ms(e,t,kp,null,null,a),Gl._currentValue=l),Yi(e,t),We(e,t,n,a),t.child;case 6:return e===null&&ce&&((e=a=Ce)&&(a=wg(a,t.pendingProps,Nt),a!==null?(t.stateNode=a,Ke=t,Ce=null,e=!0):e=!1),e||ba(t)),null;case 13:return Xd(e,t,a);case 4:return tt(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=tn(t,null,n,a):We(e,t,n,a),t.child;case 11:return Ud(e,t,t.type,t.pendingProps,a);case 7:return We(e,t,t.pendingProps,a),t.child;case 8:return We(e,t,t.pendingProps.children,a),t.child;case 12:return We(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,xa(t,t.type,n.value),We(e,t,n.children,a),t.child;case 9:return l=t.type._context,n=t.pendingProps.children,Wa(t),l=$e(l),n=n(l),t.flags|=1,We(e,t,n,a),t.child;case 14:return kd(e,t,t.type,t.pendingProps,a);case 15:return Ld(e,t,t.type,t.pendingProps,a);case 19:return Fd(e,t,a);case 31:return Xp(e,t,a);case 22:return Hd(e,t,a,t.pendingProps);case 24:return Wa(t),n=$e(ke),e===null?(l=Es(),l===null&&(l=je,i=xs(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=a),l=i),t.memoizedState={parent:n,cache:l},js(t),xa(t,ke,l)):((e.lanes&a)!==0&&(As(e,t),El(t,null,null,a),Sl()),l=e.memoizedState,i=t.memoizedState,l.parent!==n?(l={parent:n,cache:n},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),xa(t,ke,n)):(n=i.cache,xa(t,ke,n),n!==l.cache&&bs(t,[ke],a,!0))),We(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function Pt(e){e.flags|=4}function ro(e,t,a,n,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Ef())e.flags|=8192;else throw en=Ci,ws}else e.flags&=-16777217}function Kd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!dh(t))if(Ef())e.flags|=8192;else throw en=Ci,ws}function Vi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?zc():536870912,e.lanes|=t,Hn|=t)}function zl(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags&65011712,n|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Fp(e,t,a){var n=t.pendingProps;switch(ms(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(t),null;case 1:return Ne(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Kt(ke),_e(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Cn(t)?Pt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,gs())),Ne(t),null;case 26:var l=t.type,i=t.memoizedState;return e===null?(Pt(t),i!==null?(Ne(t),Kd(t,i)):(Ne(t),ro(t,l,null,n,a))):i?i!==e.memoizedState?(Pt(t),Ne(t),Kd(t,i)):(Ne(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&Pt(t),Ne(t),ro(t,l,e,n,a)),null;case 27:if(ei(t),a=le.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Pt(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return Ne(t),null}e=Z.current,Cn(t)?zu(t):(e=nh(l,n,a),t.stateNode=e,Pt(t))}return Ne(t),null;case 5:if(ei(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Pt(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return Ne(t),null}if(i=Z.current,Cn(t))zu(t);else{var d=lr(le.current);switch(i){case 1:i=d.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=d.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=d.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=d.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=d.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof n.is=="string"?d.createElement("select",{is:n.is}):d.createElement("select"),n.multiple?i.multiple=!0:n.size&&(i.size=n.size);break;default:i=typeof n.is=="string"?d.createElement(l,{is:n.is}):d.createElement(l)}}i[Je]=t,i[nt]=n;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)i.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=i;e:switch(Ie(i,l,n),l){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Pt(t)}}return Ne(t),ro(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&Pt(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(c(166));if(e=le.current,Cn(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,l=Ke,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}e[Je]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||Zf(e.nodeValue,a)),e||ba(t,!0)}else e=lr(e).createTextNode(n),e[Je]=t,t.stateNode=e}return Ne(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=Cn(t),a!==null){if(e===null){if(!n)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[Je]=t}else Ka(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ne(t),e=!1}else a=gs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(gt(t),t):(gt(t),null);if((t.flags&128)!==0)throw Error(c(558))}return Ne(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Cn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[Je]=t}else Ka(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ne(t),l=!1}else l=gs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(gt(t),t):(gt(t),null)}return gt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool),i=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==l&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Vi(t,t.updateQueue),Ne(t),null);case 4:return _e(),e===null&&To(t.stateNode.containerInfo),Ne(t),null;case 10:return Kt(t.type),Ne(t),null;case 19:if(U(Be),n=t.memoizedState,n===null)return Ne(t),null;if(l=(t.flags&128)!==0,i=n.rendering,i===null)if(l)zl(n,!1);else{if(Me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Oi(e),i!==null){for(t.flags|=128,zl(n,!1),e=i.updateQueue,t.updateQueue=e,Vi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)wu(a,e),a=a.sibling;return Y(Be,Be.current&1|2),ce&&Ft(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&ut()>Ji&&(t.flags|=128,l=!0,zl(n,!1),t.lanes=4194304)}else{if(!l)if(e=Oi(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Vi(t,e),zl(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!ce)return Ne(t),null}else 2*ut()-n.renderingStartTime>Ji&&a!==536870912&&(t.flags|=128,l=!0,zl(n,!1),t.lanes=4194304);n.isBackwards?(i.sibling=t.child,t.child=i):(e=n.last,e!==null?e.sibling=i:t.child=i,n.last=i)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=ut(),e.sibling=null,a=Be.current,Y(Be,l?a&1|2:a&1),ce&&Ft(t,n.treeForkCount),e):(Ne(t),null);case 22:case 23:return gt(t),Ts(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(Ne(t),t.subtreeFlags&6&&(t.flags|=8192)):Ne(t),a=t.updateQueue,a!==null&&Vi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&U(Ia),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Kt(ke),Ne(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function Jp(e,t){switch(ms(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Kt(ke),_e(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ei(t),null;case 31:if(t.memoizedState!==null){if(gt(t),t.alternate===null)throw Error(c(340));Ka()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(gt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Ka()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(Be),null;case 4:return _e(),null;case 10:return Kt(t.type),null;case 22:case 23:return gt(t),Ts(),e!==null&&U(Ia),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Kt(ke),null;case 25:return null;default:return null}}function $d(e,t){switch(ms(t),t.tag){case 3:Kt(ke),_e();break;case 26:case 27:case 5:ei(t);break;case 4:_e();break;case 31:t.memoizedState!==null&&gt(t);break;case 13:gt(t);break;case 19:U(Be);break;case 10:Kt(t.type);break;case 22:case 23:gt(t),Ts(),e!==null&&U(Ia);break;case 24:Kt(ke)}}function Tl(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var l=n.next;a=l;do{if((a.tag&e)===e){n=void 0;var i=a.create,d=a.inst;n=i(),d.destroy=n}a=a.next}while(a!==l)}}catch(h){ge(t,t.return,h)}}function Ca(e,t,a){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var i=l.next;n=i;do{if((n.tag&e)===e){var d=n.inst,h=d.destroy;if(h!==void 0){d.destroy=void 0,l=t;var b=a,C=h;try{C()}catch(D){ge(l,b,D)}}}n=n.next}while(n!==i)}}catch(D){ge(t,t.return,D)}}function Wd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Yu(t,a)}catch(n){ge(e,e.return,n)}}}function Id(e,t,a){a.props=nn(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){ge(e,t,n)}}function Ol(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(l){ge(e,t,l)}}function Lt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(l){ge(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){ge(e,t,l)}else a.current=null}function Pd(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(l){ge(e,e.return,l)}}function so(e,t,a){try{var n=e.stateNode;gg(n,e.type,a,t),n[nt]=t}catch(l){ge(e,e.return,l)}}function ef(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ra(e.type)||e.tag===4}function oo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ef(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ra(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function co(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Qt));else if(n!==4&&(n===27&&Ra(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(co(e,t,a),e=e.sibling;e!==null;)co(e,t,a),e=e.sibling}function Qi(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&Ra(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Qi(e,t,a),e=e.sibling;e!==null;)Qi(e,t,a),e=e.sibling}function tf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Ie(t,n,a),t[Je]=e,t[nt]=a}catch(i){ge(e,e.return,i)}}var ea=!1,qe=!1,uo=!1,af=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function Kp(e,t){if(e=e.containerInfo,Mo=dr,e=mu(e),ns(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var l=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var d=0,h=-1,b=-1,C=0,D=0,_=e,z=null;t:for(;;){for(var T;_!==a||l!==0&&_.nodeType!==3||(h=d+l),_!==i||n!==0&&_.nodeType!==3||(b=d+n),_.nodeType===3&&(d+=_.nodeValue.length),(T=_.firstChild)!==null;)z=_,_=T;for(;;){if(_===e)break t;if(z===a&&++C===l&&(h=d),z===i&&++D===n&&(b=d),(T=_.nextSibling)!==null)break;_=z,z=_.parentNode}_=T}a=h===-1||b===-1?null:{start:h,end:b}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ro={focusedElem:e,selectionRange:a},dr=!1,Fe=t;Fe!==null;)if(t=Fe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Fe=e;else for(;Fe!==null;){switch(t=Fe,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)l=e[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,l=i.memoizedProps,i=i.memoizedState,n=a.stateNode;try{var Q=nn(a.type,l);e=n.getSnapshotBeforeUpdate(Q,i),n.__reactInternalSnapshotBeforeUpdate=e}catch($){ge(a,a.return,$)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Uo(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Uo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Fe=e;break}Fe=t.return}}function nf(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:aa(e,a),n&4&&Tl(5,a);break;case 1:if(aa(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(d){ge(a,a.return,d)}else{var l=nn(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){ge(a,a.return,d)}}n&64&&Wd(a),n&512&&Ol(a,a.return);break;case 3:if(aa(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Yu(e,t)}catch(d){ge(a,a.return,d)}}break;case 27:t===null&&n&4&&tf(a);case 26:case 5:aa(e,a),t===null&&n&4&&Pd(a),n&512&&Ol(a,a.return);break;case 12:aa(e,a);break;case 31:aa(e,a),n&4&&sf(e,a);break;case 13:aa(e,a),n&4&&of(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=lg.bind(null,a),jg(e,a))));break;case 22:if(n=a.memoizedState!==null||ea,!n){t=t!==null&&t.memoizedState!==null||qe,l=ea;var i=qe;ea=n,(qe=t)&&!i?na(e,a,(a.subtreeFlags&8772)!==0):aa(e,a),ea=l,qe=i}break;case 30:break;default:aa(e,a)}}function lf(e){var t=e.alternate;t!==null&&(e.alternate=null,lf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&qr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Te=null,it=!1;function ta(e,t,a){for(a=a.child;a!==null;)rf(e,t,a),a=a.sibling}function rf(e,t,a){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(el,a)}catch{}switch(a.tag){case 26:qe||Lt(a,t),ta(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:qe||Lt(a,t);var n=Te,l=it;Ra(a.type)&&(Te=a.stateNode,it=!1),ta(e,t,a),Hl(a.stateNode),Te=n,it=l;break;case 5:qe||Lt(a,t);case 6:if(n=Te,l=it,Te=null,ta(e,t,a),Te=n,it=l,Te!==null)if(it)try{(Te.nodeType===9?Te.body:Te.nodeName==="HTML"?Te.ownerDocument.body:Te).removeChild(a.stateNode)}catch(i){ge(a,t,i)}else try{Te.removeChild(a.stateNode)}catch(i){ge(a,t,i)}break;case 18:Te!==null&&(it?(e=Te,If(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Fn(e)):If(Te,a.stateNode));break;case 4:n=Te,l=it,Te=a.stateNode.containerInfo,it=!0,ta(e,t,a),Te=n,it=l;break;case 0:case 11:case 14:case 15:Ca(2,a,t),qe||Ca(4,a,t),ta(e,t,a);break;case 1:qe||(Lt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&Id(a,t,n)),ta(e,t,a);break;case 21:ta(e,t,a);break;case 22:qe=(n=qe)||a.memoizedState!==null,ta(e,t,a),qe=n;break;default:ta(e,t,a)}}function sf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Fn(e)}catch(a){ge(t,t.return,a)}}}function of(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Fn(e)}catch(a){ge(t,t.return,a)}}function $p(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new af),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new af),t;default:throw Error(c(435,e.tag))}}function Xi(e,t){var a=$p(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var l=ig.bind(null,e,n);n.then(l,l)}})}function rt(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var l=a[n],i=e,d=t,h=d;e:for(;h!==null;){switch(h.tag){case 27:if(Ra(h.type)){Te=h.stateNode,it=!1;break e}break;case 5:Te=h.stateNode,it=!1;break e;case 3:case 4:Te=h.stateNode.containerInfo,it=!0;break e}h=h.return}if(Te===null)throw Error(c(160));rf(i,d,l),Te=null,it=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)cf(t,e),t=t.sibling}var Rt=null;function cf(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:rt(t,e),st(e),n&4&&(Ca(3,e,e.return),Tl(3,e),Ca(5,e,e.return));break;case 1:rt(t,e),st(e),n&512&&(qe||a===null||Lt(a,a.return)),n&64&&ea&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var l=Rt;if(rt(t,e),st(e),n&512&&(qe||a===null||Lt(a,a.return)),n&4){var i=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(n){case"title":i=l.getElementsByTagName("title")[0],(!i||i[nl]||i[Je]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(n),l.head.insertBefore(i,l.querySelector("head > title"))),Ie(i,n,a),i[Je]=e,Ze(i),n=i;break e;case"link":var d=ch("link","href",l).get(n+(a.href||""));if(d){for(var h=0;h<d.length;h++)if(i=d[h],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){d.splice(h,1);break t}}i=l.createElement(n),Ie(i,n,a),l.head.appendChild(i);break;case"meta":if(d=ch("meta","content",l).get(n+(a.content||""))){for(h=0;h<d.length;h++)if(i=d[h],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){d.splice(h,1);break t}}i=l.createElement(n),Ie(i,n,a),l.head.appendChild(i);break;default:throw Error(c(468,n))}i[Je]=e,Ze(i),n=i}e.stateNode=n}else uh(l,e.type,e.stateNode);else e.stateNode=oh(l,n,e.memoizedProps);else i!==n?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,n===null?uh(l,e.type,e.stateNode):oh(l,n,e.memoizedProps)):n===null&&e.stateNode!==null&&so(e,e.memoizedProps,a.memoizedProps)}break;case 27:rt(t,e),st(e),n&512&&(qe||a===null||Lt(a,a.return)),a!==null&&n&4&&so(e,e.memoizedProps,a.memoizedProps);break;case 5:if(rt(t,e),st(e),n&512&&(qe||a===null||Lt(a,a.return)),e.flags&32){l=e.stateNode;try{gn(l,"")}catch(Q){ge(e,e.return,Q)}}n&4&&e.stateNode!=null&&(l=e.memoizedProps,so(e,l,a!==null?a.memoizedProps:l)),n&1024&&(uo=!0);break;case 6:if(rt(t,e),st(e),n&4){if(e.stateNode===null)throw Error(c(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(Q){ge(e,e.return,Q)}}break;case 3:if(sr=null,l=Rt,Rt=ir(t.containerInfo),rt(t,e),Rt=l,st(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Fn(t.containerInfo)}catch(Q){ge(e,e.return,Q)}uo&&(uo=!1,uf(e));break;case 4:n=Rt,Rt=ir(e.stateNode.containerInfo),rt(t,e),st(e),Rt=n;break;case 12:rt(t,e),st(e);break;case 31:rt(t,e),st(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Xi(e,n)));break;case 13:rt(t,e),st(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Fi=ut()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Xi(e,n)));break;case 22:l=e.memoizedState!==null;var b=a!==null&&a.memoizedState!==null,C=ea,D=qe;if(ea=C||l,qe=D||b,rt(t,e),qe=D,ea=C,st(e),n&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||b||ea||qe||ln(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){b=a=t;try{if(i=b.stateNode,l)d=i.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{h=b.stateNode;var _=b.memoizedProps.style,z=_!=null&&_.hasOwnProperty("display")?_.display:null;h.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(Q){ge(b,b.return,Q)}}}else if(t.tag===6){if(a===null){b=t;try{b.stateNode.nodeValue=l?"":b.memoizedProps}catch(Q){ge(b,b.return,Q)}}}else if(t.tag===18){if(a===null){b=t;try{var T=b.stateNode;l?Pf(T,!0):Pf(b.stateNode,!1)}catch(Q){ge(b,b.return,Q)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Xi(e,a))));break;case 19:rt(t,e),st(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Xi(e,n)));break;case 30:break;case 21:break;default:rt(t,e),st(e)}}function st(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(ef(n)){a=n;break}n=n.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var l=a.stateNode,i=oo(e);Qi(e,i,l);break;case 5:var d=a.stateNode;a.flags&32&&(gn(d,""),a.flags&=-33);var h=oo(e);Qi(e,h,d);break;case 3:case 4:var b=a.stateNode.containerInfo,C=oo(e);co(e,C,b);break;default:throw Error(c(161))}}catch(D){ge(e,e.return,D)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function uf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;uf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function aa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)nf(e,t.alternate,t),t=t.sibling}function ln(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ca(4,t,t.return),ln(t);break;case 1:Lt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Id(t,t.return,a),ln(t);break;case 27:Hl(t.stateNode);case 26:case 5:Lt(t,t.return),ln(t);break;case 22:t.memoizedState===null&&ln(t);break;case 30:ln(t);break;default:ln(t)}e=e.sibling}}function na(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,l=e,i=t,d=i.flags;switch(i.tag){case 0:case 11:case 15:na(l,i,a),Tl(4,i);break;case 1:if(na(l,i,a),n=i,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(C){ge(n,n.return,C)}if(n=i,l=n.updateQueue,l!==null){var h=n.stateNode;try{var b=l.shared.hiddenCallbacks;if(b!==null)for(l.shared.hiddenCallbacks=null,l=0;l<b.length;l++)qu(b[l],h)}catch(C){ge(n,n.return,C)}}a&&d&64&&Wd(i),Ol(i,i.return);break;case 27:tf(i);case 26:case 5:na(l,i,a),a&&n===null&&d&4&&Pd(i),Ol(i,i.return);break;case 12:na(l,i,a);break;case 31:na(l,i,a),a&&d&4&&sf(l,i);break;case 13:na(l,i,a),a&&d&4&&of(l,i);break;case 22:i.memoizedState===null&&na(l,i,a),Ol(i,i.return);break;case 30:break;default:na(l,i,a)}t=t.sibling}}function fo(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&gl(a))}function ho(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&gl(e))}function _t(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)df(e,t,a,n),t=t.sibling}function df(e,t,a,n){var l=t.flags;switch(t.tag){case 0:case 11:case 15:_t(e,t,a,n),l&2048&&Tl(9,t);break;case 1:_t(e,t,a,n);break;case 3:_t(e,t,a,n),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&gl(e)));break;case 12:if(l&2048){_t(e,t,a,n),e=t.stateNode;try{var i=t.memoizedProps,d=i.id,h=i.onPostCommit;typeof h=="function"&&h(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(b){ge(t,t.return,b)}}else _t(e,t,a,n);break;case 31:_t(e,t,a,n);break;case 13:_t(e,t,a,n);break;case 23:break;case 22:i=t.stateNode,d=t.alternate,t.memoizedState!==null?i._visibility&2?_t(e,t,a,n):Dl(e,t):i._visibility&2?_t(e,t,a,n):(i._visibility|=2,Un(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),l&2048&&fo(d,t);break;case 24:_t(e,t,a,n),l&2048&&ho(t.alternate,t);break;default:_t(e,t,a,n)}}function Un(e,t,a,n,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,d=t,h=a,b=n,C=d.flags;switch(d.tag){case 0:case 11:case 15:Un(i,d,h,b,l),Tl(8,d);break;case 23:break;case 22:var D=d.stateNode;d.memoizedState!==null?D._visibility&2?Un(i,d,h,b,l):Dl(i,d):(D._visibility|=2,Un(i,d,h,b,l)),l&&C&2048&&fo(d.alternate,d);break;case 24:Un(i,d,h,b,l),l&&C&2048&&ho(d.alternate,d);break;default:Un(i,d,h,b,l)}t=t.sibling}}function Dl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,l=n.flags;switch(n.tag){case 22:Dl(a,n),l&2048&&fo(n.alternate,n);break;case 24:Dl(a,n),l&2048&&ho(n.alternate,n);break;default:Dl(a,n)}t=t.sibling}}var Ml=8192;function kn(e,t,a){if(e.subtreeFlags&Ml)for(e=e.child;e!==null;)ff(e,t,a),e=e.sibling}function ff(e,t,a){switch(e.tag){case 26:kn(e,t,a),e.flags&Ml&&e.memoizedState!==null&&Ug(a,Rt,e.memoizedState,e.memoizedProps);break;case 5:kn(e,t,a);break;case 3:case 4:var n=Rt;Rt=ir(e.stateNode.containerInfo),kn(e,t,a),Rt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Ml,Ml=16777216,kn(e,t,a),Ml=n):kn(e,t,a));break;default:kn(e,t,a)}}function hf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Rl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Fe=n,pf(n,e)}hf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)mf(e),e=e.sibling}function mf(e){switch(e.tag){case 0:case 11:case 15:Rl(e),e.flags&2048&&Ca(9,e,e.return);break;case 3:Rl(e);break;case 12:Rl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Zi(e)):Rl(e);break;default:Rl(e)}}function Zi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Fe=n,pf(n,e)}hf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ca(8,t,t.return),Zi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Zi(t));break;default:Zi(t)}e=e.sibling}}function pf(e,t){for(;Fe!==null;){var a=Fe;switch(a.tag){case 0:case 11:case 15:Ca(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:gl(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Fe=n;else e:for(a=e;Fe!==null;){n=Fe;var l=n.sibling,i=n.return;if(lf(n),n===a){Fe=null;break e}if(l!==null){l.return=i,Fe=l;break e}Fe=i}}}var Wp={getCacheForType:function(e){var t=$e(ke),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return $e(ke).controller.signal}},Ip=typeof WeakMap=="function"?WeakMap:Map,he=0,je=null,ie=null,se=0,pe=0,yt=null,Na=!1,Ln=!1,mo=!1,la=0,Me=0,za=0,rn=0,po=0,vt=0,Hn=0,_l=null,ot=null,go=!1,Fi=0,gf=0,Ji=1/0,Ki=null,Ta=null,Qe=0,Oa=null,qn=null,ia=0,yo=0,vo=null,yf=null,Bl=0,bo=null;function bt(){return(he&2)!==0&&se!==0?se&-se:M.T!==null?Ao():Mc()}function vf(){if(vt===0)if((se&536870912)===0||ce){var e=ni;ni<<=1,(ni&3932160)===0&&(ni=262144),vt=e}else vt=536870912;return e=pt.current,e!==null&&(e.flags|=32),vt}function ct(e,t,a){(e===je&&(pe===2||pe===9)||e.cancelPendingCommit!==null)&&(Yn(e,0),Da(e,se,vt,!1)),al(e,a),((he&2)===0||e!==je)&&(e===je&&((he&2)===0&&(rn|=a),Me===4&&Da(e,se,vt,!1)),Ht(e))}function bf(e,t,a){if((he&6)!==0)throw Error(c(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||tl(e,t),l=n?tg(e,t):So(e,t,!0),i=n;do{if(l===0){Ln&&!n&&Da(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!Pp(a)){l=So(e,t,!1),i=!1;continue}if(l===2){if(i=t,e.errorRecoveryDisabledLanes&i)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var h=e;l=_l;var b=h.current.memoizedState.isDehydrated;if(b&&(Yn(h,d).flags|=256),d=So(h,d,!1),d!==2){if(mo&&!b){h.errorRecoveryDisabledLanes|=i,rn|=i,l=4;break e}i=ot,ot=l,i!==null&&(ot===null?ot=i:ot.push.apply(ot,i))}l=d}if(i=!1,l!==2)continue}}if(l===1){Yn(e,0),Da(e,t,0,!0);break}e:{switch(n=e,i=l,i){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Da(n,t,vt,!Na);break e;case 2:ot=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(l=Fi+300-ut(),10<l)){if(Da(n,t,vt,!Na),ii(n,0,!0)!==0)break e;ia=t,n.timeoutHandle=$f(xf.bind(null,n,a,ot,Ki,go,t,vt,rn,Hn,Na,i,"Throttled",-0,0),l);break e}xf(n,a,ot,Ki,go,t,vt,rn,Hn,Na,i,null,-0,0)}}break}while(!0);Ht(e)}function xf(e,t,a,n,l,i,d,h,b,C,D,_,z,T){if(e.timeoutHandle=-1,_=t.subtreeFlags,_&8192||(_&16785408)===16785408){_={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qt},ff(t,i,_);var Q=(i&62914560)===i?Fi-ut():(i&4194048)===i?gf-ut():0;if(Q=kg(_,Q),Q!==null){ia=i,e.cancelPendingCommit=Q(zf.bind(null,e,t,i,a,n,l,d,h,b,D,_,null,z,T)),Da(e,i,d,!C);return}}zf(e,t,i,a,n,l,d,h,b)}function Pp(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var l=a[n],i=l.getSnapshot;l=l.value;try{if(!ht(i(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Da(e,t,a,n){t&=~po,t&=~rn,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var l=t;0<l;){var i=31-ft(l),d=1<<i;n[i]=-1,l&=~d}a!==0&&Tc(e,a,t)}function $i(){return(he&6)===0?(Ul(0),!1):!0}function xo(){if(ie!==null){if(pe===0)var e=ie.return;else e=ie,Jt=$a=null,Bs(e),Dn=null,vl=0,e=ie;for(;e!==null;)$d(e.alternate,e),e=e.return;ie=null}}function Yn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,bg(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ia=0,xo(),je=e,ie=a=Zt(e.current,null),se=t,pe=0,yt=null,Na=!1,Ln=tl(e,t),mo=!1,Hn=vt=po=rn=za=Me=0,ot=_l=null,go=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var l=31-ft(n),i=1<<l;t|=e[l],n&=~i}return la=t,yi(),a}function Sf(e,t){te=null,M.H=Cl,t===On||t===Ai?(t=Uu(),pe=3):t===ws?(t=Uu(),pe=4):pe=t===Ws?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,yt=t,ie===null&&(Me=1,Hi(e,jt(t,e.current)))}function Ef(){var e=pt.current;return e===null?!0:(se&4194048)===se?zt===null:(se&62914560)===se||(se&536870912)!==0?e===zt:!1}function wf(){var e=M.H;return M.H=Cl,e===null?Cl:e}function jf(){var e=M.A;return M.A=Wp,e}function Wi(){Me=4,Na||(se&4194048)!==se&&pt.current!==null||(Ln=!0),(za&134217727)===0&&(rn&134217727)===0||je===null||Da(je,se,vt,!1)}function So(e,t,a){var n=he;he|=2;var l=wf(),i=jf();(je!==e||se!==t)&&(Ki=null,Yn(e,t)),t=!1;var d=Me;e:do try{if(pe!==0&&ie!==null){var h=ie,b=yt;switch(pe){case 8:xo(),d=6;break e;case 3:case 2:case 9:case 6:pt.current===null&&(t=!0);var C=pe;if(pe=0,yt=null,Gn(e,h,b,C),a&&Ln){d=0;break e}break;default:C=pe,pe=0,yt=null,Gn(e,h,b,C)}}eg(),d=Me;break}catch(D){Sf(e,D)}while(!0);return t&&e.shellSuspendCounter++,Jt=$a=null,he=n,M.H=l,M.A=i,ie===null&&(je=null,se=0,yi()),d}function eg(){for(;ie!==null;)Af(ie)}function tg(e,t){var a=he;he|=2;var n=wf(),l=jf();je!==e||se!==t?(Ki=null,Ji=ut()+500,Yn(e,t)):Ln=tl(e,t);e:do try{if(pe!==0&&ie!==null){t=ie;var i=yt;t:switch(pe){case 1:pe=0,yt=null,Gn(e,t,i,1);break;case 2:case 9:if(_u(i)){pe=0,yt=null,Cf(t);break}t=function(){pe!==2&&pe!==9||je!==e||(pe=7),Ht(e)},i.then(t,t);break e;case 3:pe=7;break e;case 4:pe=5;break e;case 7:_u(i)?(pe=0,yt=null,Cf(t)):(pe=0,yt=null,Gn(e,t,i,7));break;case 5:var d=null;switch(ie.tag){case 26:d=ie.memoizedState;case 5:case 27:var h=ie;if(d?dh(d):h.stateNode.complete){pe=0,yt=null;var b=h.sibling;if(b!==null)ie=b;else{var C=h.return;C!==null?(ie=C,Ii(C)):ie=null}break t}}pe=0,yt=null,Gn(e,t,i,5);break;case 6:pe=0,yt=null,Gn(e,t,i,6);break;case 8:xo(),Me=6;break e;default:throw Error(c(462))}}ag();break}catch(D){Sf(e,D)}while(!0);return Jt=$a=null,M.H=n,M.A=l,he=a,ie!==null?0:(je=null,se=0,yi(),Me)}function ag(){for(;ie!==null&&!Am();)Af(ie)}function Af(e){var t=Jd(e.alternate,e,la);e.memoizedProps=e.pendingProps,t===null?Ii(e):ie=t}function Cf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Gd(a,t,t.pendingProps,t.type,void 0,se);break;case 11:t=Gd(a,t,t.pendingProps,t.type.render,t.ref,se);break;case 5:Bs(t);default:$d(a,t),t=ie=wu(t,la),t=Jd(a,t,la)}e.memoizedProps=e.pendingProps,t===null?Ii(e):ie=t}function Gn(e,t,a,n){Jt=$a=null,Bs(t),Dn=null,vl=0;var l=t.return;try{if(Qp(e,l,t,a,se)){Me=1,Hi(e,jt(a,e.current)),ie=null;return}}catch(i){if(l!==null)throw ie=l,i;Me=1,Hi(e,jt(a,e.current)),ie=null;return}t.flags&32768?(ce||n===1?e=!0:Ln||(se&536870912)!==0?e=!1:(Na=e=!0,(n===2||n===9||n===3||n===6)&&(n=pt.current,n!==null&&n.tag===13&&(n.flags|=16384))),Nf(t,e)):Ii(t)}function Ii(e){var t=e;do{if((t.flags&32768)!==0){Nf(t,Na);return}e=t.return;var a=Fp(t.alternate,t,la);if(a!==null){ie=a;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);Me===0&&(Me=5)}function Nf(e,t){do{var a=Jp(e.alternate,e);if(a!==null){a.flags&=32767,ie=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ie=e;return}ie=e=a}while(e!==null);Me=6,ie=null}function zf(e,t,a,n,l,i,d,h,b){e.cancelPendingCommit=null;do Pi();while(Qe!==0);if((he&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(i=t.lanes|t.childLanes,i|=os,Bm(e,a,i,d,h,b),e===je&&(ie=je=null,se=0),qn=t,Oa=e,ia=a,yo=i,vo=l,yf=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,rg(ti,function(){return Rf(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=M.T,M.T=null,l=q.p,q.p=2,d=he,he|=4;try{Kp(e,t,a)}finally{he=d,q.p=l,M.T=n}}Qe=1,Tf(),Of(),Df()}}function Tf(){if(Qe===1){Qe=0;var e=Oa,t=qn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=M.T,M.T=null;var n=q.p;q.p=2;var l=he;he|=4;try{cf(t,e);var i=Ro,d=mu(e.containerInfo),h=i.focusedElem,b=i.selectionRange;if(d!==h&&h&&h.ownerDocument&&hu(h.ownerDocument.documentElement,h)){if(b!==null&&ns(h)){var C=b.start,D=b.end;if(D===void 0&&(D=C),"selectionStart"in h)h.selectionStart=C,h.selectionEnd=Math.min(D,h.value.length);else{var _=h.ownerDocument||document,z=_&&_.defaultView||window;if(z.getSelection){var T=z.getSelection(),Q=h.textContent.length,$=Math.min(b.start,Q),Se=b.end===void 0?$:Math.min(b.end,Q);!T.extend&&$>Se&&(d=Se,Se=$,$=d);var j=fu(h,$),S=fu(h,Se);if(j&&S&&(T.rangeCount!==1||T.anchorNode!==j.node||T.anchorOffset!==j.offset||T.focusNode!==S.node||T.focusOffset!==S.offset)){var A=_.createRange();A.setStart(j.node,j.offset),T.removeAllRanges(),$>Se?(T.addRange(A),T.extend(S.node,S.offset)):(A.setEnd(S.node,S.offset),T.addRange(A))}}}}for(_=[],T=h;T=T.parentNode;)T.nodeType===1&&_.push({element:T,left:T.scrollLeft,top:T.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<_.length;h++){var R=_[h];R.element.scrollLeft=R.left,R.element.scrollTop=R.top}}dr=!!Mo,Ro=Mo=null}finally{he=l,q.p=n,M.T=a}}e.current=t,Qe=2}}function Of(){if(Qe===2){Qe=0;var e=Oa,t=qn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=M.T,M.T=null;var n=q.p;q.p=2;var l=he;he|=4;try{nf(e,t.alternate,t)}finally{he=l,q.p=n,M.T=a}}Qe=3}}function Df(){if(Qe===4||Qe===3){Qe=0,Cm();var e=Oa,t=qn,a=ia,n=yf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Qe=5:(Qe=0,qn=Oa=null,Mf(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Ta=null),Lr(a),t=t.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(el,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=M.T,l=q.p,q.p=2,M.T=null;try{for(var i=e.onRecoverableError,d=0;d<n.length;d++){var h=n[d];i(h.value,{componentStack:h.stack})}}finally{M.T=t,q.p=l}}(ia&3)!==0&&Pi(),Ht(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===bo?Bl++:(Bl=0,bo=e):Bl=0,Ul(0)}}function Mf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,gl(t)))}function Pi(){return Tf(),Of(),Df(),Rf()}function Rf(){if(Qe!==5)return!1;var e=Oa,t=yo;yo=0;var a=Lr(ia),n=M.T,l=q.p;try{q.p=32>a?32:a,M.T=null,a=vo,vo=null;var i=Oa,d=ia;if(Qe=0,qn=Oa=null,ia=0,(he&6)!==0)throw Error(c(331));var h=he;if(he|=4,mf(i.current),df(i,i.current,d,a),he=h,Ul(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(el,i)}catch{}return!0}finally{q.p=l,M.T=n,Mf(e,t)}}function _f(e,t,a){t=jt(a,t),t=$s(e.stateNode,t,2),e=wa(e,t,2),e!==null&&(al(e,2),Ht(e))}function ge(e,t,a){if(e.tag===3)_f(e,e,a);else for(;t!==null;){if(t.tag===3){_f(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ta===null||!Ta.has(n))){e=jt(a,e),a=_d(2),n=wa(t,a,2),n!==null&&(Bd(a,n,t,e),al(n,2),Ht(n));break}}t=t.return}}function Eo(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new Ip;var l=new Set;n.set(t,l)}else l=n.get(t),l===void 0&&(l=new Set,n.set(t,l));l.has(a)||(mo=!0,l.add(a),e=ng.bind(null,e,t,a),t.then(e,e))}function ng(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,je===e&&(se&a)===a&&(Me===4||Me===3&&(se&62914560)===se&&300>ut()-Fi?(he&2)===0&&Yn(e,0):po|=a,Hn===se&&(Hn=0)),Ht(e)}function Bf(e,t){t===0&&(t=zc()),e=Fa(e,t),e!==null&&(al(e,t),Ht(e))}function lg(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Bf(e,a)}function ig(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(c(314))}n!==null&&n.delete(t),Bf(e,a)}function rg(e,t){return _r(e,t)}var er=null,Vn=null,wo=!1,tr=!1,jo=!1,Ma=0;function Ht(e){e!==Vn&&e.next===null&&(Vn===null?er=Vn=e:Vn=Vn.next=e),tr=!0,wo||(wo=!0,og())}function Ul(e,t){if(!jo&&tr){jo=!0;do for(var a=!1,n=er;n!==null;){if(e!==0){var l=n.pendingLanes;if(l===0)var i=0;else{var d=n.suspendedLanes,h=n.pingedLanes;i=(1<<31-ft(42|e)+1)-1,i&=l&~(d&~h),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Hf(n,i))}else i=se,i=ii(n,n===je?i:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(i&3)===0||tl(n,i)||(a=!0,Hf(n,i));n=n.next}while(a);jo=!1}}function sg(){Uf()}function Uf(){tr=wo=!1;var e=0;Ma!==0&&vg()&&(e=Ma);for(var t=ut(),a=null,n=er;n!==null;){var l=n.next,i=kf(n,t);i===0?(n.next=null,a===null?er=l:a.next=l,l===null&&(Vn=a)):(a=n,(e!==0||(i&3)!==0)&&(tr=!0)),n=l}Qe!==0&&Qe!==5||Ul(e),Ma!==0&&(Ma=0)}function kf(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var d=31-ft(i),h=1<<d,b=l[d];b===-1?((h&a)===0||(h&n)!==0)&&(l[d]=_m(h,t)):b<=t&&(e.expiredLanes|=h),i&=~h}if(t=je,a=se,a=ii(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(pe===2||pe===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Br(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||tl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&Br(n),Lr(a)){case 2:case 8:a=Cc;break;case 32:a=ti;break;case 268435456:a=Nc;break;default:a=ti}return n=Lf.bind(null,e),a=_r(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&Br(n),e.callbackPriority=2,e.callbackNode=null,2}function Lf(e,t){if(Qe!==0&&Qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Pi()&&e.callbackNode!==a)return null;var n=se;return n=ii(e,e===je?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(bf(e,n,t),kf(e,ut()),e.callbackNode!=null&&e.callbackNode===a?Lf.bind(null,e):null)}function Hf(e,t){if(Pi())return null;bf(e,t,!0)}function og(){xg(function(){(he&6)!==0?_r(Ac,sg):Uf()})}function Ao(){if(Ma===0){var e=zn;e===0&&(e=ai,ai<<=1,(ai&261888)===0&&(ai=256)),Ma=e}return Ma}function qf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ci(""+e)}function Yf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function cg(e,t,a,n,l){if(t==="submit"&&a&&a.stateNode===l){var i=qf((l[nt]||null).action),d=n.submitter;d&&(t=(t=d[nt]||null)?qf(t.formAction):d.getAttribute("formAction"),t!==null&&(i=t,d=null));var h=new hi("action","action",null,n,l);e.push({event:h,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Ma!==0){var b=d?Yf(l,d):new FormData(l);Qs(a,{pending:!0,data:b,method:l.method,action:i},null,b)}}else typeof i=="function"&&(h.preventDefault(),b=d?Yf(l,d):new FormData(l),Qs(a,{pending:!0,data:b,method:l.method,action:i},i,b))},currentTarget:l}]})}}for(var Co=0;Co<ss.length;Co++){var No=ss[Co],ug=No.toLowerCase(),dg=No[0].toUpperCase()+No.slice(1);Mt(ug,"on"+dg)}Mt(yu,"onAnimationEnd"),Mt(vu,"onAnimationIteration"),Mt(bu,"onAnimationStart"),Mt("dblclick","onDoubleClick"),Mt("focusin","onFocus"),Mt("focusout","onBlur"),Mt(Np,"onTransitionRun"),Mt(zp,"onTransitionStart"),Mt(Tp,"onTransitionCancel"),Mt(xu,"onTransitionEnd"),mn("onMouseEnter",["mouseout","mouseover"]),mn("onMouseLeave",["mouseout","mouseover"]),mn("onPointerEnter",["pointerout","pointerover"]),mn("onPointerLeave",["pointerout","pointerover"]),Va("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Va("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Va("onBeforeInput",["compositionend","keypress","textInput","paste"]),Va("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Va("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Va("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(kl));function Gf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],l=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var d=n.length-1;0<=d;d--){var h=n[d],b=h.instance,C=h.currentTarget;if(h=h.listener,b!==i&&l.isPropagationStopped())break e;i=h,l.currentTarget=C;try{i(l)}catch(D){gi(D)}l.currentTarget=null,i=b}else for(d=0;d<n.length;d++){if(h=n[d],b=h.instance,C=h.currentTarget,h=h.listener,b!==i&&l.isPropagationStopped())break e;i=h,l.currentTarget=C;try{i(l)}catch(D){gi(D)}l.currentTarget=null,i=b}}}}function re(e,t){var a=t[Hr];a===void 0&&(a=t[Hr]=new Set);var n=e+"__bubble";a.has(n)||(Vf(t,e,2,!1),a.add(n))}function zo(e,t,a){var n=0;t&&(n|=4),Vf(a,e,n,t)}var ar="_reactListening"+Math.random().toString(36).slice(2);function To(e){if(!e[ar]){e[ar]=!0,Bc.forEach(function(a){a!=="selectionchange"&&(fg.has(a)||zo(a,!1,e),zo(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ar]||(t[ar]=!0,zo("selectionchange",!1,t))}}function Vf(e,t,a,n){switch(vh(t)){case 2:var l=qg;break;case 8:l=Yg;break;default:l=Qo}a=l.bind(null,t,a,e),l=void 0,!Jr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function Oo(e,t,a,n,l){var i=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var d=n.tag;if(d===3||d===4){var h=n.stateNode.containerInfo;if(h===l)break;if(d===4)for(d=n.return;d!==null;){var b=d.tag;if((b===3||b===4)&&d.stateNode.containerInfo===l)return;d=d.return}for(;h!==null;){if(d=dn(h),d===null)return;if(b=d.tag,b===5||b===6||b===26||b===27){n=i=d;continue e}h=h.parentNode}}n=n.return}Fc(function(){var C=i,D=Zr(a),_=[];e:{var z=Su.get(e);if(z!==void 0){var T=hi,Q=e;switch(e){case"keypress":if(di(a)===0)break e;case"keydown":case"keyup":T=ip;break;case"focusin":Q="focus",T=Ir;break;case"focusout":Q="blur",T=Ir;break;case"beforeblur":case"afterblur":T=Ir;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=$c;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=Fm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=op;break;case yu:case vu:case bu:T=$m;break;case xu:T=up;break;case"scroll":case"scrollend":T=Xm;break;case"wheel":T=fp;break;case"copy":case"cut":case"paste":T=Im;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=Ic;break;case"toggle":case"beforetoggle":T=mp}var $=(t&4)!==0,Se=!$&&(e==="scroll"||e==="scrollend"),j=$?z!==null?z+"Capture":null:z;$=[];for(var S=C,A;S!==null;){var R=S;if(A=R.stateNode,R=R.tag,R!==5&&R!==26&&R!==27||A===null||j===null||(R=il(S,j),R!=null&&$.push(Ll(S,R,A))),Se)break;S=S.return}0<$.length&&(z=new T(z,Q,null,a,D),_.push({event:z,listeners:$}))}}if((t&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",T=e==="mouseout"||e==="pointerout",z&&a!==Xr&&(Q=a.relatedTarget||a.fromElement)&&(dn(Q)||Q[un]))break e;if((T||z)&&(z=D.window===D?D:(z=D.ownerDocument)?z.defaultView||z.parentWindow:window,T?(Q=a.relatedTarget||a.toElement,T=C,Q=Q?dn(Q):null,Q!==null&&(Se=m(Q),$=Q.tag,Q!==Se||$!==5&&$!==27&&$!==6)&&(Q=null)):(T=null,Q=C),T!==Q)){if($=$c,R="onMouseLeave",j="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&($=Ic,R="onPointerLeave",j="onPointerEnter",S="pointer"),Se=T==null?z:ll(T),A=Q==null?z:ll(Q),z=new $(R,S+"leave",T,a,D),z.target=Se,z.relatedTarget=A,R=null,dn(D)===C&&($=new $(j,S+"enter",Q,a,D),$.target=A,$.relatedTarget=Se,R=$),Se=R,T&&Q)t:{for($=hg,j=T,S=Q,A=0,R=j;R;R=$(R))A++;R=0;for(var K=S;K;K=$(K))R++;for(;0<A-R;)j=$(j),A--;for(;0<R-A;)S=$(S),R--;for(;A--;){if(j===S||S!==null&&j===S.alternate){$=j;break t}j=$(j),S=$(S)}$=null}else $=null;T!==null&&Qf(_,z,T,$,!1),Q!==null&&Se!==null&&Qf(_,Se,Q,$,!0)}}e:{if(z=C?ll(C):window,T=z.nodeName&&z.nodeName.toLowerCase(),T==="select"||T==="input"&&z.type==="file")var ue=ru;else if(lu(z))if(su)ue=jp;else{ue=Ep;var F=Sp}else T=z.nodeName,!T||T.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?C&&Qr(C.elementType)&&(ue=ru):ue=wp;if(ue&&(ue=ue(e,C))){iu(_,ue,a,D);break e}F&&F(e,z,C),e==="focusout"&&C&&z.type==="number"&&C.memoizedProps.value!=null&&Vr(z,"number",z.value)}switch(F=C?ll(C):window,e){case"focusin":(lu(F)||F.contentEditable==="true")&&(xn=F,ls=C,hl=null);break;case"focusout":hl=ls=xn=null;break;case"mousedown":is=!0;break;case"contextmenu":case"mouseup":case"dragend":is=!1,pu(_,a,D);break;case"selectionchange":if(Cp)break;case"keydown":case"keyup":pu(_,a,D)}var ae;if(es)e:{switch(e){case"compositionstart":var oe="onCompositionStart";break e;case"compositionend":oe="onCompositionEnd";break e;case"compositionupdate":oe="onCompositionUpdate";break e}oe=void 0}else bn?au(e,a)&&(oe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(oe="onCompositionStart");oe&&(Pc&&a.locale!=="ko"&&(bn||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&bn&&(ae=Jc()):(ga=D,Kr="value"in ga?ga.value:ga.textContent,bn=!0)),F=nr(C,oe),0<F.length&&(oe=new Wc(oe,e,null,a,D),_.push({event:oe,listeners:F}),ae?oe.data=ae:(ae=nu(a),ae!==null&&(oe.data=ae)))),(ae=gp?yp(e,a):vp(e,a))&&(oe=nr(C,"onBeforeInput"),0<oe.length&&(F=new Wc("onBeforeInput","beforeinput",null,a,D),_.push({event:F,listeners:oe}),F.data=ae)),cg(_,e,C,a,D)}Gf(_,t)})}function Ll(e,t,a){return{instance:e,listener:t,currentTarget:a}}function nr(e,t){for(var a=t+"Capture",n=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=il(e,a),l!=null&&n.unshift(Ll(e,l,i)),l=il(e,t),l!=null&&n.push(Ll(e,l,i))),e.tag===3)return n;e=e.return}return[]}function hg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Qf(e,t,a,n,l){for(var i=t._reactName,d=[];a!==null&&a!==n;){var h=a,b=h.alternate,C=h.stateNode;if(h=h.tag,b!==null&&b===n)break;h!==5&&h!==26&&h!==27||C===null||(b=C,l?(C=il(a,i),C!=null&&d.unshift(Ll(a,C,b))):l||(C=il(a,i),C!=null&&d.push(Ll(a,C,b)))),a=a.return}d.length!==0&&e.push({event:t,listeners:d})}var mg=/\r\n?/g,pg=/\u0000|\uFFFD/g;function Xf(e){return(typeof e=="string"?e:""+e).replace(mg,`
`).replace(pg,"")}function Zf(e,t){return t=Xf(t),Xf(e)===t}function xe(e,t,a,n,l,i){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||gn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&gn(e,""+n);break;case"className":si(e,"class",n);break;case"tabIndex":si(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":si(e,a,n);break;case"style":Xc(e,n,i);break;case"data":if(t!=="object"){si(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=ci(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&xe(e,t,"name",l.name,l,null),xe(e,t,"formEncType",l.formEncType,l,null),xe(e,t,"formMethod",l.formMethod,l,null),xe(e,t,"formTarget",l.formTarget,l,null)):(xe(e,t,"encType",l.encType,l,null),xe(e,t,"method",l.method,l,null),xe(e,t,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=ci(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=Qt);break;case"onScroll":n!=null&&re("scroll",e);break;case"onScrollEnd":n!=null&&re("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=ci(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":re("beforetoggle",e),re("toggle",e),ri(e,"popover",n);break;case"xlinkActuate":Vt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Vt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Vt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Vt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Vt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Vt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":ri(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Vm.get(a)||a,ri(e,a,n))}}function Do(e,t,a,n,l,i){switch(a){case"style":Xc(e,n,i);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof n=="string"?gn(e,n):(typeof n=="number"||typeof n=="bigint")&&gn(e,""+n);break;case"onScroll":n!=null&&re("scroll",e);break;case"onScrollEnd":n!=null&&re("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Qt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Uc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),i=e[nt]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,l),typeof n=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,l);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):ri(e,a,n)}}}function Ie(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":re("error",e),re("load",e);var n=!1,l=!1,i;for(i in a)if(a.hasOwnProperty(i)){var d=a[i];if(d!=null)switch(i){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:xe(e,t,i,d,a,null)}}l&&xe(e,t,"srcSet",a.srcSet,a,null),n&&xe(e,t,"src",a.src,a,null);return;case"input":re("invalid",e);var h=i=d=l=null,b=null,C=null;for(n in a)if(a.hasOwnProperty(n)){var D=a[n];if(D!=null)switch(n){case"name":l=D;break;case"type":d=D;break;case"checked":b=D;break;case"defaultChecked":C=D;break;case"value":i=D;break;case"defaultValue":h=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(c(137,t));break;default:xe(e,t,n,D,a,null)}}Yc(e,i,h,b,C,d,l,!1);return;case"select":re("invalid",e),n=d=i=null;for(l in a)if(a.hasOwnProperty(l)&&(h=a[l],h!=null))switch(l){case"value":i=h;break;case"defaultValue":d=h;break;case"multiple":n=h;default:xe(e,t,l,h,a,null)}t=i,a=d,e.multiple=!!n,t!=null?pn(e,!!n,t,!1):a!=null&&pn(e,!!n,a,!0);return;case"textarea":re("invalid",e),i=l=n=null;for(d in a)if(a.hasOwnProperty(d)&&(h=a[d],h!=null))switch(d){case"value":n=h;break;case"defaultValue":l=h;break;case"children":i=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(c(91));break;default:xe(e,t,d,h,a,null)}Vc(e,n,l,i);return;case"option":for(b in a)if(a.hasOwnProperty(b)&&(n=a[b],n!=null))switch(b){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:xe(e,t,b,n,a,null)}return;case"dialog":re("beforetoggle",e),re("toggle",e),re("cancel",e),re("close",e);break;case"iframe":case"object":re("load",e);break;case"video":case"audio":for(n=0;n<kl.length;n++)re(kl[n],e);break;case"image":re("error",e),re("load",e);break;case"details":re("toggle",e);break;case"embed":case"source":case"link":re("error",e),re("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in a)if(a.hasOwnProperty(C)&&(n=a[C],n!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:xe(e,t,C,n,a,null)}return;default:if(Qr(t)){for(D in a)a.hasOwnProperty(D)&&(n=a[D],n!==void 0&&Do(e,t,D,n,a,void 0));return}}for(h in a)a.hasOwnProperty(h)&&(n=a[h],n!=null&&xe(e,t,h,n,a,null))}function gg(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,d=null,h=null,b=null,C=null,D=null;for(T in a){var _=a[T];if(a.hasOwnProperty(T)&&_!=null)switch(T){case"checked":break;case"value":break;case"defaultValue":b=_;default:n.hasOwnProperty(T)||xe(e,t,T,null,n,_)}}for(var z in n){var T=n[z];if(_=a[z],n.hasOwnProperty(z)&&(T!=null||_!=null))switch(z){case"type":i=T;break;case"name":l=T;break;case"checked":C=T;break;case"defaultChecked":D=T;break;case"value":d=T;break;case"defaultValue":h=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(c(137,t));break;default:T!==_&&xe(e,t,z,T,n,_)}}Gr(e,d,h,b,C,D,i,l);return;case"select":T=d=h=z=null;for(i in a)if(b=a[i],a.hasOwnProperty(i)&&b!=null)switch(i){case"value":break;case"multiple":T=b;default:n.hasOwnProperty(i)||xe(e,t,i,null,n,b)}for(l in n)if(i=n[l],b=a[l],n.hasOwnProperty(l)&&(i!=null||b!=null))switch(l){case"value":z=i;break;case"defaultValue":h=i;break;case"multiple":d=i;default:i!==b&&xe(e,t,l,i,n,b)}t=h,a=d,n=T,z!=null?pn(e,!!a,z,!1):!!n!=!!a&&(t!=null?pn(e,!!a,t,!0):pn(e,!!a,a?[]:"",!1));return;case"textarea":T=z=null;for(h in a)if(l=a[h],a.hasOwnProperty(h)&&l!=null&&!n.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:xe(e,t,h,null,n,l)}for(d in n)if(l=n[d],i=a[d],n.hasOwnProperty(d)&&(l!=null||i!=null))switch(d){case"value":z=l;break;case"defaultValue":T=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==i&&xe(e,t,d,l,n,i)}Gc(e,z,T);return;case"option":for(var Q in a)if(z=a[Q],a.hasOwnProperty(Q)&&z!=null&&!n.hasOwnProperty(Q))switch(Q){case"selected":e.selected=!1;break;default:xe(e,t,Q,null,n,z)}for(b in n)if(z=n[b],T=a[b],n.hasOwnProperty(b)&&z!==T&&(z!=null||T!=null))switch(b){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:xe(e,t,b,z,n,T)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $ in a)z=a[$],a.hasOwnProperty($)&&z!=null&&!n.hasOwnProperty($)&&xe(e,t,$,null,n,z);for(C in n)if(z=n[C],T=a[C],n.hasOwnProperty(C)&&z!==T&&(z!=null||T!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(c(137,t));break;default:xe(e,t,C,z,n,T)}return;default:if(Qr(t)){for(var Se in a)z=a[Se],a.hasOwnProperty(Se)&&z!==void 0&&!n.hasOwnProperty(Se)&&Do(e,t,Se,void 0,n,z);for(D in n)z=n[D],T=a[D],!n.hasOwnProperty(D)||z===T||z===void 0&&T===void 0||Do(e,t,D,z,n,T);return}}for(var j in a)z=a[j],a.hasOwnProperty(j)&&z!=null&&!n.hasOwnProperty(j)&&xe(e,t,j,null,n,z);for(_ in n)z=n[_],T=a[_],!n.hasOwnProperty(_)||z===T||z==null&&T==null||xe(e,t,_,z,n,T)}function Ff(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function yg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var l=a[n],i=l.transferSize,d=l.initiatorType,h=l.duration;if(i&&h&&Ff(d)){for(d=0,h=l.responseEnd,n+=1;n<a.length;n++){var b=a[n],C=b.startTime;if(C>h)break;var D=b.transferSize,_=b.initiatorType;D&&Ff(_)&&(b=b.responseEnd,d+=D*(b<h?1:(h-C)/(b-C)))}if(--n,t+=8*(i+d)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Mo=null,Ro=null;function lr(e){return e.nodeType===9?e:e.ownerDocument}function Jf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Kf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function _o(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Bo=null;function vg(){var e=window.event;return e&&e.type==="popstate"?e===Bo?!1:(Bo=e,!0):(Bo=null,!1)}var $f=typeof setTimeout=="function"?setTimeout:void 0,bg=typeof clearTimeout=="function"?clearTimeout:void 0,Wf=typeof Promise=="function"?Promise:void 0,xg=typeof queueMicrotask=="function"?queueMicrotask:typeof Wf<"u"?function(e){return Wf.resolve(null).then(e).catch(Sg)}:$f;function Sg(e){setTimeout(function(){throw e})}function Ra(e){return e==="head"}function If(e,t){var a=t,n=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(l),Fn(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")Hl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Hl(a);for(var i=a.firstChild;i;){var d=i.nextSibling,h=i.nodeName;i[nl]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=d}}else a==="body"&&Hl(e.ownerDocument.body);a=l}while(a);Fn(t)}function Pf(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function Uo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Uo(a),qr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Eg(e,t,a,n){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[nl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Tt(e.nextSibling),e===null)break}return null}function wg(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Tt(e.nextSibling),e===null))return null;return e}function eh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Tt(e.nextSibling),e===null))return null;return e}function ko(e){return e.data==="$?"||e.data==="$~"}function Lo(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function jg(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Tt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ho=null;function th(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Tt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function ah(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function nh(e,t,a){switch(t=lr(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Hl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);qr(e)}var Ot=new Map,lh=new Set;function ir(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ra=q.d;q.d={f:Ag,r:Cg,D:Ng,C:zg,L:Tg,m:Og,X:Mg,S:Dg,M:Rg};function Ag(){var e=ra.f(),t=$i();return e||t}function Cg(e){var t=fn(e);t!==null&&t.tag===5&&t.type==="form"?xd(t):ra.r(e)}var Qn=typeof document>"u"?null:document;function ih(e,t,a){var n=Qn;if(n&&typeof t=="string"&&t){var l=Et(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),lh.has(l)||(lh.add(l),e={rel:e,crossOrigin:a,href:t},n.querySelector(l)===null&&(t=n.createElement("link"),Ie(t,"link",e),Ze(t),n.head.appendChild(t)))}}function Ng(e){ra.D(e),ih("dns-prefetch",e,null)}function zg(e,t){ra.C(e,t),ih("preconnect",e,t)}function Tg(e,t,a){ra.L(e,t,a);var n=Qn;if(n&&e&&t){var l='link[rel="preload"][as="'+Et(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+Et(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+Et(a.imageSizes)+'"]')):l+='[href="'+Et(e)+'"]';var i=l;switch(t){case"style":i=Xn(e);break;case"script":i=Zn(e)}Ot.has(i)||(e=x({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ot.set(i,e),n.querySelector(l)!==null||t==="style"&&n.querySelector(ql(i))||t==="script"&&n.querySelector(Yl(i))||(t=n.createElement("link"),Ie(t,"link",e),Ze(t),n.head.appendChild(t)))}}function Og(e,t){ra.m(e,t);var a=Qn;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Et(n)+'"][href="'+Et(e)+'"]',i=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Zn(e)}if(!Ot.has(i)&&(e=x({rel:"modulepreload",href:e},t),Ot.set(i,e),a.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Yl(i)))return}n=a.createElement("link"),Ie(n,"link",e),Ze(n),a.head.appendChild(n)}}}function Dg(e,t,a){ra.S(e,t,a);var n=Qn;if(n&&e){var l=hn(n).hoistableStyles,i=Xn(e);t=t||"default";var d=l.get(i);if(!d){var h={loading:0,preload:null};if(d=n.querySelector(ql(i)))h.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ot.get(i))&&qo(e,a);var b=d=n.createElement("link");Ze(b),Ie(b,"link",e),b._p=new Promise(function(C,D){b.onload=C,b.onerror=D}),b.addEventListener("load",function(){h.loading|=1}),b.addEventListener("error",function(){h.loading|=2}),h.loading|=4,rr(d,t,n)}d={type:"stylesheet",instance:d,count:1,state:h},l.set(i,d)}}}function Mg(e,t){ra.X(e,t);var a=Qn;if(a&&e){var n=hn(a).hoistableScripts,l=Zn(e),i=n.get(l);i||(i=a.querySelector(Yl(l)),i||(e=x({src:e,async:!0},t),(t=Ot.get(l))&&Yo(e,t),i=a.createElement("script"),Ze(i),Ie(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function Rg(e,t){ra.M(e,t);var a=Qn;if(a&&e){var n=hn(a).hoistableScripts,l=Zn(e),i=n.get(l);i||(i=a.querySelector(Yl(l)),i||(e=x({src:e,async:!0,type:"module"},t),(t=Ot.get(l))&&Yo(e,t),i=a.createElement("script"),Ze(i),Ie(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function rh(e,t,a,n){var l=(l=le.current)?ir(l):null;if(!l)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Xn(a.href),a=hn(l).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Xn(a.href);var i=hn(l).hoistableStyles,d=i.get(e);if(d||(l=l.ownerDocument||l,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,d),(i=l.querySelector(ql(e)))&&!i._p&&(d.instance=i,d.state.loading=5),Ot.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ot.set(e,a),i||_g(l,e,a,d.state))),t&&n===null)throw Error(c(528,""));return d}if(t&&n!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Zn(a),a=hn(l).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Xn(e){return'href="'+Et(e)+'"'}function ql(e){return'link[rel="stylesheet"]['+e+"]"}function sh(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function _g(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Ie(t,"link",a),Ze(t),e.head.appendChild(t))}function Zn(e){return'[src="'+Et(e)+'"]'}function Yl(e){return"script[async]"+e}function oh(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+Et(a.href)+'"]');if(n)return t.instance=n,Ze(n),n;var l=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Ze(n),Ie(n,"style",l),rr(n,a.precedence,e),t.instance=n;case"stylesheet":l=Xn(a.href);var i=e.querySelector(ql(l));if(i)return t.state.loading|=4,t.instance=i,Ze(i),i;n=sh(a),(l=Ot.get(l))&&qo(n,l),i=(e.ownerDocument||e).createElement("link"),Ze(i);var d=i;return d._p=new Promise(function(h,b){d.onload=h,d.onerror=b}),Ie(i,"link",n),t.state.loading|=4,rr(i,a.precedence,e),t.instance=i;case"script":return i=Zn(a.src),(l=e.querySelector(Yl(i)))?(t.instance=l,Ze(l),l):(n=a,(l=Ot.get(i))&&(n=x({},a),Yo(n,l)),e=e.ownerDocument||e,l=e.createElement("script"),Ze(l),Ie(l,"link",n),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,rr(n,a.precedence,e));return t.instance}function rr(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,i=l,d=0;d<n.length;d++){var h=n[d];if(h.dataset.precedence===t)i=h;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function qo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Yo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var sr=null;function ch(e,t,a){if(sr===null){var n=new Map,l=sr=new Map;l.set(a,n)}else l=sr,n=l.get(a),n||(n=new Map,l.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var i=a[l];if(!(i[nl]||i[Je]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var d=i.getAttribute(t)||"";d=e+d;var h=n.get(d);h?h.push(i):n.set(d,[i])}}return n}function uh(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Bg(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function dh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Ug(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=Xn(n.href),i=t.querySelector(ql(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=or.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Ze(i);return}i=t.ownerDocument||t,n=sh(n),(l=Ot.get(l))&&qo(n,l),i=i.createElement("link"),Ze(i);var d=i;d._p=new Promise(function(h,b){d.onload=h,d.onerror=b}),Ie(i,"link",n),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=or.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Go=0;function kg(e,t){return e.stylesheets&&e.count===0&&ur(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&ur(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Go===0&&(Go=62500*yg());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ur(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Go?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(l)}}:null}function or(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ur(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var cr=null;function ur(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,cr=new Map,t.forEach(Lg,e),cr=null,or.call(e))}function Lg(e,t){if(!(t.state.loading&4)){var a=cr.get(e);if(a)var n=a.get(null);else{a=new Map,cr.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var d=l[i];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(a.set(d.dataset.precedence,d),n=d)}n&&a.set(null,n)}l=t.instance,d=l.getAttribute("data-precedence"),i=a.get(d)||n,i===n&&a.set(null,l),a.set(d,l),this.count++,n=or.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Gl={$$typeof:X,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function Hg(e,t,a,n,l,i,d,h,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ur(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ur(0),this.hiddenUpdates=Ur(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function fh(e,t,a,n,l,i,d,h,b,C,D,_){return e=new Hg(e,t,a,d,b,C,D,_,h),t=1,i===!0&&(t|=24),i=mt(3,null,null,t),e.current=i,i.stateNode=e,t=xs(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:n,isDehydrated:a,cache:t},js(i),e}function hh(e){return e?(e=wn,e):wn}function mh(e,t,a,n,l,i){l=hh(l),n.context===null?n.context=l:n.pendingContext=l,n=Ea(t),n.payload={element:a},i=i===void 0?null:i,i!==null&&(n.callback=i),a=wa(e,n,t),a!==null&&(ct(a,e,t),xl(a,e,t))}function ph(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Vo(e,t){ph(e,t),(e=e.alternate)&&ph(e,t)}function gh(e){if(e.tag===13||e.tag===31){var t=Fa(e,67108864);t!==null&&ct(t,e,67108864),Vo(e,67108864)}}function yh(e){if(e.tag===13||e.tag===31){var t=bt();t=kr(t);var a=Fa(e,t);a!==null&&ct(a,e,t),Vo(e,t)}}var dr=!0;function qg(e,t,a,n){var l=M.T;M.T=null;var i=q.p;try{q.p=2,Qo(e,t,a,n)}finally{q.p=i,M.T=l}}function Yg(e,t,a,n){var l=M.T;M.T=null;var i=q.p;try{q.p=8,Qo(e,t,a,n)}finally{q.p=i,M.T=l}}function Qo(e,t,a,n){if(dr){var l=Xo(n);if(l===null)Oo(e,t,n,fr,a),bh(e,n);else if(Vg(l,e,t,a,n))n.stopPropagation();else if(bh(e,n),t&4&&-1<Gg.indexOf(e)){for(;l!==null;){var i=fn(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var d=Ga(i.pendingLanes);if(d!==0){var h=i;for(h.pendingLanes|=2,h.entangledLanes|=2;d;){var b=1<<31-ft(d);h.entanglements[1]|=b,d&=~b}Ht(i),(he&6)===0&&(Ji=ut()+500,Ul(0))}}break;case 31:case 13:h=Fa(i,2),h!==null&&ct(h,i,2),$i(),Vo(i,2)}if(i=Xo(n),i===null&&Oo(e,t,n,fr,a),i===l)break;l=i}l!==null&&n.stopPropagation()}else Oo(e,t,n,null,a)}}function Xo(e){return e=Zr(e),Zo(e)}var fr=null;function Zo(e){if(fr=null,e=dn(e),e!==null){var t=m(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=p(t),e!==null)return e;e=null}else if(a===31){if(e=v(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fr=e,null}function vh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Nm()){case Ac:return 2;case Cc:return 8;case ti:case zm:return 32;case Nc:return 268435456;default:return 32}default:return 32}}var Fo=!1,_a=null,Ba=null,Ua=null,Vl=new Map,Ql=new Map,ka=[],Gg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function bh(e,t){switch(e){case"focusin":case"focusout":_a=null;break;case"dragenter":case"dragleave":Ba=null;break;case"mouseover":case"mouseout":Ua=null;break;case"pointerover":case"pointerout":Vl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ql.delete(t.pointerId)}}function Xl(e,t,a,n,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:i,targetContainers:[l]},t!==null&&(t=fn(t),t!==null&&gh(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Vg(e,t,a,n,l){switch(t){case"focusin":return _a=Xl(_a,e,t,a,n,l),!0;case"dragenter":return Ba=Xl(Ba,e,t,a,n,l),!0;case"mouseover":return Ua=Xl(Ua,e,t,a,n,l),!0;case"pointerover":var i=l.pointerId;return Vl.set(i,Xl(Vl.get(i)||null,e,t,a,n,l)),!0;case"gotpointercapture":return i=l.pointerId,Ql.set(i,Xl(Ql.get(i)||null,e,t,a,n,l)),!0}return!1}function xh(e){var t=dn(e.target);if(t!==null){var a=m(t);if(a!==null){if(t=a.tag,t===13){if(t=p(a),t!==null){e.blockedOn=t,Rc(e.priority,function(){yh(a)});return}}else if(t===31){if(t=v(a),t!==null){e.blockedOn=t,Rc(e.priority,function(){yh(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Xo(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);Xr=n,a.target.dispatchEvent(n),Xr=null}else return t=fn(a),t!==null&&gh(t),e.blockedOn=a,!1;t.shift()}return!0}function Sh(e,t,a){hr(e)&&a.delete(t)}function Qg(){Fo=!1,_a!==null&&hr(_a)&&(_a=null),Ba!==null&&hr(Ba)&&(Ba=null),Ua!==null&&hr(Ua)&&(Ua=null),Vl.forEach(Sh),Ql.forEach(Sh)}function mr(e,t){e.blockedOn===t&&(e.blockedOn=null,Fo||(Fo=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Qg)))}var pr=null;function Eh(e){pr!==e&&(pr=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){pr===e&&(pr=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],l=e[t+2];if(typeof n!="function"){if(Zo(n||a)===null)continue;break}var i=fn(a);i!==null&&(e.splice(t,3),t-=3,Qs(i,{pending:!0,data:l,method:a.method,action:n},n,l))}}))}function Fn(e){function t(b){return mr(b,e)}_a!==null&&mr(_a,e),Ba!==null&&mr(Ba,e),Ua!==null&&mr(Ua,e),Vl.forEach(t),Ql.forEach(t);for(var a=0;a<ka.length;a++){var n=ka[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<ka.length&&(a=ka[0],a.blockedOn===null);)xh(a),a.blockedOn===null&&ka.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var l=a[n],i=a[n+1],d=l[nt]||null;if(typeof i=="function")d||Eh(a);else if(d){var h=null;if(i&&i.hasAttribute("formAction")){if(l=i,d=i[nt]||null)h=d.formAction;else if(Zo(l)!==null)continue}else h=d.action;typeof h=="function"?a[n+1]=h:(a.splice(n,3),n-=3),Eh(a)}}}function wh(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(d){return l=d})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Jo(e){this._internalRoot=e}gr.prototype.render=Jo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,n=bt();mh(a,n,e,t,null,null)},gr.prototype.unmount=Jo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;mh(e.current,2,null,e,null,null),$i(),t[un]=null}};function gr(e){this._internalRoot=e}gr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Mc();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ka.length&&t!==0&&t<ka[a].priority;a++);ka.splice(a,0,e),a===0&&xh(e)}};var jh=o.version;if(jh!=="19.2.2")throw Error(c(527,jh,"19.2.2"));q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=g(t),e=e!==null?w(e):null,e=e===null?null:e.stateNode,e};var Xg={bundleType:0,version:"19.2.2",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.2.2"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yr.isDisabled&&yr.supportsFiber)try{el=yr.inject(Xg),dt=yr}catch{}}return Fl.createRoot=function(e,t){if(!f(e))throw Error(c(299));var a=!1,n="",l=Od,i=Dd,d=Md;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=fh(e,1,!1,null,null,a,n,null,l,i,d,wh),e[un]=t.current,To(e),new Jo(t)},Fl.hydrateRoot=function(e,t,a){if(!f(e))throw Error(c(299));var n=!1,l="",i=Od,d=Dd,h=Md,b=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(d=a.onCaughtError),a.onRecoverableError!==void 0&&(h=a.onRecoverableError),a.formState!==void 0&&(b=a.formState)),t=fh(e,1,!0,t,a??null,n,l,b,i,d,h,wh),t.context=hh(null),a=t.current,n=bt(),n=kr(n),l=Ea(n),l.callback=null,wa(a,l,n),a=n,t.current.lanes=a,al(t,a),Ht(t),e[un]=t.current,To(e),new gr(t)},Fl.version="19.2.2",Fl}var _h;function n0(){if(_h)return Wo.exports;_h=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),Wo.exports=a0(),Wo.exports}var l0=n0();var Bh="popstate";function i0(r={}){function o(c,f){let{pathname:m,search:p,hash:v}=c.location;return ic("",{pathname:m,search:p,hash:v},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function u(c,f){return typeof f=="string"?f:$l(f)}return s0(o,u,null,r)}function Oe(r,o){if(r===!1||r===null||typeof r>"u")throw new Error(o)}function Dt(r,o){if(!r){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function r0(){return Math.random().toString(36).substring(2,10)}function Uh(r,o){return{usr:r.state,key:r.key,idx:o}}function ic(r,o,u=null,c){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof o=="string"?Kn(o):o,state:u,key:o&&o.key||c||r0()}}function $l({pathname:r="/",search:o="",hash:u=""}){return o&&o!=="?"&&(r+=o.charAt(0)==="?"?o:"?"+o),u&&u!=="#"&&(r+=u.charAt(0)==="#"?u:"#"+u),r}function Kn(r){let o={};if(r){let u=r.indexOf("#");u>=0&&(o.hash=r.substring(u),r=r.substring(0,u));let c=r.indexOf("?");c>=0&&(o.search=r.substring(c),r=r.substring(0,c)),r&&(o.pathname=r)}return o}function s0(r,o,u,c={}){let{window:f=document.defaultView,v5Compat:m=!1}=c,p=f.history,v="POP",y=null,g=w();g==null&&(g=0,p.replaceState({...p.state,idx:g},""));function w(){return(p.state||{idx:null}).idx}function x(){v="POP";let L=w(),G=L==null?null:L-g;g=L,y&&y({action:v,location:B.location,delta:G})}function O(L,G){v="PUSH";let V=ic(B.location,L,G);g=w()+1;let X=Uh(V,g),ne=B.createHref(V);try{p.pushState(X,"",ne)}catch(ye){if(ye instanceof DOMException&&ye.name==="DataCloneError")throw ye;f.location.assign(ne)}m&&y&&y({action:v,location:B.location,delta:1})}function k(L,G){v="REPLACE";let V=ic(B.location,L,G);g=w();let X=Uh(V,g),ne=B.createHref(V);p.replaceState(X,"",ne),m&&y&&y({action:v,location:B.location,delta:0})}function H(L){return o0(L)}let B={get action(){return v},get location(){return r(f,p)},listen(L){if(y)throw new Error("A history only accepts one active listener");return f.addEventListener(Bh,x),y=L,()=>{f.removeEventListener(Bh,x),y=null}},createHref(L){return o(f,L)},createURL:H,encodeLocation(L){let G=H(L);return{pathname:G.pathname,search:G.search,hash:G.hash}},push:O,replace:k,go(L){return p.go(L)}};return B}function o0(r,o=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Oe(u,"No window.location.(origin|href) available to create URL");let c=typeof r=="string"?r:$l(r);return c=c.replace(/ $/,"%20"),!o&&c.startsWith("//")&&(c=u+c),new URL(c,u)}function $h(r,o,u="/"){return c0(r,o,u,!1)}function c0(r,o,u,c){let f=typeof o=="string"?Kn(o):o,m=oa(f.pathname||"/",u);if(m==null)return null;let p=Wh(r);u0(p);let v=null;for(let y=0;v==null&&y<p.length;++y){let g=S0(m);v=b0(p[y],g,c)}return v}function Wh(r,o=[],u=[],c="",f=!1){let m=(p,v,y=f,g)=>{let w={relativePath:g===void 0?p.path||"":g,caseSensitive:p.caseSensitive===!0,childrenIndex:v,route:p};if(w.relativePath.startsWith("/")){if(!w.relativePath.startsWith(c)&&y)return;Oe(w.relativePath.startsWith(c),`Absolute route path "${w.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),w.relativePath=w.relativePath.slice(c.length)}let x=sa([c,w.relativePath]),O=u.concat(w);p.children&&p.children.length>0&&(Oe(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),Wh(p.children,o,O,x,y)),!(p.path==null&&!p.index)&&o.push({path:x,score:y0(x,p.index),routesMeta:O})};return r.forEach((p,v)=>{if(p.path===""||!p.path?.includes("?"))m(p,v);else for(let y of Ih(p.path))m(p,v,!0,y)}),o}function Ih(r){let o=r.split("/");if(o.length===0)return[];let[u,...c]=o,f=u.endsWith("?"),m=u.replace(/\?$/,"");if(c.length===0)return f?[m,""]:[m];let p=Ih(c.join("/")),v=[];return v.push(...p.map(y=>y===""?m:[m,y].join("/"))),f&&v.push(...p),v.map(y=>r.startsWith("/")&&y===""?"/":y)}function u0(r){r.sort((o,u)=>o.score!==u.score?u.score-o.score:v0(o.routesMeta.map(c=>c.childrenIndex),u.routesMeta.map(c=>c.childrenIndex)))}var d0=/^:[\w-]+$/,f0=3,h0=2,m0=1,p0=10,g0=-2,kh=r=>r==="*";function y0(r,o){let u=r.split("/"),c=u.length;return u.some(kh)&&(c+=g0),o&&(c+=h0),u.filter(f=>!kh(f)).reduce((f,m)=>f+(d0.test(m)?f0:m===""?m0:p0),c)}function v0(r,o){return r.length===o.length&&r.slice(0,-1).every((c,f)=>c===o[f])?r[r.length-1]-o[o.length-1]:0}function b0(r,o,u=!1){let{routesMeta:c}=r,f={},m="/",p=[];for(let v=0;v<c.length;++v){let y=c[v],g=v===c.length-1,w=m==="/"?o:o.slice(m.length)||"/",x=wr({path:y.relativePath,caseSensitive:y.caseSensitive,end:g},w),O=y.route;if(!x&&g&&u&&!c[c.length-1].route.index&&(x=wr({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},w)),!x)return null;Object.assign(f,x.params),p.push({params:f,pathname:sa([m,x.pathname]),pathnameBase:C0(sa([m,x.pathnameBase])),route:O}),x.pathnameBase!=="/"&&(m=sa([m,x.pathnameBase]))}return p}function wr(r,o){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[u,c]=x0(r.path,r.caseSensitive,r.end),f=o.match(u);if(!f)return null;let m=f[0],p=m.replace(/(.)\/+$/,"$1"),v=f.slice(1);return{params:c.reduce((g,{paramName:w,isOptional:x},O)=>{if(w==="*"){let H=v[O]||"";p=m.slice(0,m.length-H.length).replace(/(.)\/+$/,"$1")}const k=v[O];return x&&!k?g[w]=void 0:g[w]=(k||"").replace(/%2F/g,"/"),g},{}),pathname:m,pathnameBase:p,pattern:r}}function x0(r,o=!1,u=!0){Dt(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let c=[],f="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,v,y)=>(c.push({paramName:v,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(c.push({paramName:"*"}),f+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?f+="\\/*$":r!==""&&r!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,o?void 0:"i"),c]}function S0(r){try{return r.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Dt(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),r}}function oa(r,o){if(o==="/")return r;if(!r.toLowerCase().startsWith(o.toLowerCase()))return null;let u=o.endsWith("/")?o.length-1:o.length,c=r.charAt(u);return c&&c!=="/"?null:r.slice(u)||"/"}var E0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,w0=r=>E0.test(r);function j0(r,o="/"){let{pathname:u,search:c="",hash:f=""}=typeof r=="string"?Kn(r):r,m;if(u)if(w0(u))m=u;else{if(u.includes("//")){let p=u;u=u.replace(/\/\/+/g,"/"),Dt(!1,`Pathnames cannot have embedded double slashes - normalizing ${p} -> ${u}`)}u.startsWith("/")?m=Lh(u.substring(1),"/"):m=Lh(u,o)}else m=o;return{pathname:m,search:N0(c),hash:z0(f)}}function Lh(r,o){let u=o.replace(/\/+$/,"").split("/");return r.split("/").forEach(f=>{f===".."?u.length>1&&u.pop():f!=="."&&u.push(f)}),u.length>1?u.join("/"):"/"}function tc(r,o,u,c){return`Cannot include a '${r}' character in a manually specified \`to.${o}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function A0(r){return r.filter((o,u)=>u===0||o.route.path&&o.route.path.length>0)}function Ph(r){let o=A0(r);return o.map((u,c)=>c===o.length-1?u.pathname:u.pathnameBase)}function em(r,o,u,c=!1){let f;typeof r=="string"?f=Kn(r):(f={...r},Oe(!f.pathname||!f.pathname.includes("?"),tc("?","pathname","search",f)),Oe(!f.pathname||!f.pathname.includes("#"),tc("#","pathname","hash",f)),Oe(!f.search||!f.search.includes("#"),tc("#","search","hash",f)));let m=r===""||f.pathname==="",p=m?"/":f.pathname,v;if(p==null)v=u;else{let x=o.length-1;if(!c&&p.startsWith("..")){let O=p.split("/");for(;O[0]==="..";)O.shift(),x-=1;f.pathname=O.join("/")}v=x>=0?o[x]:"/"}let y=j0(f,v),g=p&&p!=="/"&&p.endsWith("/"),w=(m||p===".")&&u.endsWith("/");return!y.pathname.endsWith("/")&&(g||w)&&(y.pathname+="/"),y}var sa=r=>r.join("/").replace(/\/\/+/g,"/"),C0=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),N0=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,z0=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function T0(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function O0(r){return r.map(o=>o.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var tm=["POST","PUT","PATCH","DELETE"];new Set(tm);var D0=["GET",...tm];new Set(D0);var $n=N.createContext(null);$n.displayName="DataRouter";var Cr=N.createContext(null);Cr.displayName="DataRouterState";N.createContext(!1);var am=N.createContext({isTransitioning:!1});am.displayName="ViewTransition";var M0=N.createContext(new Map);M0.displayName="Fetchers";var R0=N.createContext(null);R0.displayName="Await";var Bt=N.createContext(null);Bt.displayName="Navigation";var Wl=N.createContext(null);Wl.displayName="Location";var Gt=N.createContext({outlet:null,matches:[],isDataRoute:!1});Gt.displayName="Route";var gc=N.createContext(null);gc.displayName="RouteError";function _0(r,{relative:o}={}){Oe(Il(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:c}=N.useContext(Bt),{hash:f,pathname:m,search:p}=Pl(r,{relative:o}),v=m;return u!=="/"&&(v=m==="/"?u:sa([u,m])),c.createHref({pathname:v,search:p,hash:f})}function Il(){return N.useContext(Wl)!=null}function ua(){return Oe(Il(),"useLocation() may be used only in the context of a <Router> component."),N.useContext(Wl).location}var nm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function lm(r){N.useContext(Bt).static||N.useLayoutEffect(r)}function Wn(){let{isDataRoute:r}=N.useContext(Gt);return r?F0():B0()}function B0(){Oe(Il(),"useNavigate() may be used only in the context of a <Router> component.");let r=N.useContext($n),{basename:o,navigator:u}=N.useContext(Bt),{matches:c}=N.useContext(Gt),{pathname:f}=ua(),m=JSON.stringify(Ph(c)),p=N.useRef(!1);return lm(()=>{p.current=!0}),N.useCallback((y,g={})=>{if(Dt(p.current,nm),!p.current)return;if(typeof y=="number"){u.go(y);return}let w=em(y,JSON.parse(m),f,g.relative==="path");r==null&&o!=="/"&&(w.pathname=w.pathname==="/"?o:sa([o,w.pathname])),(g.replace?u.replace:u.push)(w,g.state,g)},[o,u,m,f,r])}N.createContext(null);function im(){let{matches:r}=N.useContext(Gt),o=r[r.length-1];return o?o.params:{}}function Pl(r,{relative:o}={}){let{matches:u}=N.useContext(Gt),{pathname:c}=ua(),f=JSON.stringify(Ph(u));return N.useMemo(()=>em(r,JSON.parse(f),c,o==="path"),[r,f,c,o])}function U0(r,o){return rm(r,o)}function rm(r,o,u,c,f){Oe(Il(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:m}=N.useContext(Bt),{matches:p}=N.useContext(Gt),v=p[p.length-1],y=v?v.params:{},g=v?v.pathname:"/",w=v?v.pathnameBase:"/",x=v&&v.route;{let V=x&&x.path||"";sm(g,!x||V.endsWith("*")||V.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${V}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${V}"> to <Route path="${V==="/"?"*":`${V}/*`}">.`)}let O=ua(),k;if(o){let V=typeof o=="string"?Kn(o):o;Oe(w==="/"||V.pathname?.startsWith(w),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${w}" but pathname "${V.pathname}" was given in the \`location\` prop.`),k=V}else k=O;let H=k.pathname||"/",B=H;if(w!=="/"){let V=w.replace(/^\//,"").split("/");B="/"+H.replace(/^\//,"").split("/").slice(V.length).join("/")}let L=$h(r,{pathname:B});Dt(x||L!=null,`No routes matched location "${k.pathname}${k.search}${k.hash}" `),Dt(L==null||L[L.length-1].route.element!==void 0||L[L.length-1].route.Component!==void 0||L[L.length-1].route.lazy!==void 0,`Matched leaf route at location "${k.pathname}${k.search}${k.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let G=Y0(L&&L.map(V=>Object.assign({},V,{params:Object.assign({},y,V.params),pathname:sa([w,m.encodeLocation?m.encodeLocation(V.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:V.pathname]),pathnameBase:V.pathnameBase==="/"?w:sa([w,m.encodeLocation?m.encodeLocation(V.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:V.pathnameBase])})),p,u,c,f);return o&&G?N.createElement(Wl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...k},navigationType:"POP"}},G):G}function k0(){let r=Z0(),o=T0(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),u=r instanceof Error?r.stack:null,c="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:c},m={padding:"2px 4px",backgroundColor:c},p=null;return console.error("Error handled by React Router default ErrorBoundary:",r),p=N.createElement(N.Fragment,null,N.createElement("p",null,"💿 Hey developer 👋"),N.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",N.createElement("code",{style:m},"ErrorBoundary")," or"," ",N.createElement("code",{style:m},"errorElement")," prop on your route.")),N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},o),u?N.createElement("pre",{style:f},u):null,p)}var L0=N.createElement(k0,null),H0=class extends N.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,o){return o.location!==r.location||o.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:o.error,location:o.location,revalidation:r.revalidation||o.revalidation}}componentDidCatch(r,o){this.props.onError?this.props.onError(r,o):console.error("React Router caught the following error during render",r)}render(){return this.state.error!==void 0?N.createElement(Gt.Provider,{value:this.props.routeContext},N.createElement(gc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function q0({routeContext:r,match:o,children:u}){let c=N.useContext($n);return c&&c.static&&c.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=o.route.id),N.createElement(Gt.Provider,{value:r},u)}function Y0(r,o=[],u=null,c=null,f=null){if(r==null){if(!u)return null;if(u.errors)r=u.matches;else if(o.length===0&&!u.initialized&&u.matches.length>0)r=u.matches;else return null}let m=r,p=u?.errors;if(p!=null){let w=m.findIndex(x=>x.route.id&&p?.[x.route.id]!==void 0);Oe(w>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),m=m.slice(0,Math.min(m.length,w+1))}let v=!1,y=-1;if(u)for(let w=0;w<m.length;w++){let x=m[w];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(y=w),x.route.id){let{loaderData:O,errors:k}=u,H=x.route.loader&&!O.hasOwnProperty(x.route.id)&&(!k||k[x.route.id]===void 0);if(x.route.lazy||H){v=!0,y>=0?m=m.slice(0,y+1):m=[m[0]];break}}}let g=u&&c?(w,x)=>{c(w,{location:u.location,params:u.matches?.[0]?.params??{},unstable_pattern:O0(u.matches),errorInfo:x})}:void 0;return m.reduceRight((w,x,O)=>{let k,H=!1,B=null,L=null;u&&(k=p&&x.route.id?p[x.route.id]:void 0,B=x.route.errorElement||L0,v&&(y<0&&O===0?(sm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),H=!0,L=null):y===O&&(H=!0,L=x.route.hydrateFallbackElement||null)));let G=o.concat(m.slice(0,O+1)),V=()=>{let X;return k?X=B:H?X=L:x.route.Component?X=N.createElement(x.route.Component,null):x.route.element?X=x.route.element:X=w,N.createElement(q0,{match:x,routeContext:{outlet:w,matches:G,isDataRoute:u!=null},children:X})};return u&&(x.route.ErrorBoundary||x.route.errorElement||O===0)?N.createElement(H0,{location:u.location,revalidation:u.revalidation,component:B,error:k,children:V(),routeContext:{outlet:null,matches:G,isDataRoute:!0},onError:g}):V()},null)}function yc(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function G0(r){let o=N.useContext($n);return Oe(o,yc(r)),o}function V0(r){let o=N.useContext(Cr);return Oe(o,yc(r)),o}function Q0(r){let o=N.useContext(Gt);return Oe(o,yc(r)),o}function vc(r){let o=Q0(r),u=o.matches[o.matches.length-1];return Oe(u.route.id,`${r} can only be used on routes that contain a unique "id"`),u.route.id}function X0(){return vc("useRouteId")}function Z0(){let r=N.useContext(gc),o=V0("useRouteError"),u=vc("useRouteError");return r!==void 0?r:o.errors?.[u]}function F0(){let{router:r}=G0("useNavigate"),o=vc("useNavigate"),u=N.useRef(!1);return lm(()=>{u.current=!0}),N.useCallback(async(f,m={})=>{Dt(u.current,nm),u.current&&(typeof f=="number"?await r.navigate(f):await r.navigate(f,{fromRouteId:o,...m}))},[r,o])}var Hh={};function sm(r,o,u){!o&&!Hh[r]&&(Hh[r]=!0,Dt(!1,u))}N.memo(J0);function J0({routes:r,future:o,state:u,unstable_onError:c}){return rm(r,void 0,u,c,o)}function qt(r){Oe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function K0({basename:r="/",children:o=null,location:u,navigationType:c="POP",navigator:f,static:m=!1,unstable_useTransitions:p}){Oe(!Il(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let v=r.replace(/^\/*/,"/"),y=N.useMemo(()=>({basename:v,navigator:f,static:m,unstable_useTransitions:p,future:{}}),[v,f,m,p]);typeof u=="string"&&(u=Kn(u));let{pathname:g="/",search:w="",hash:x="",state:O=null,key:k="default"}=u,H=N.useMemo(()=>{let B=oa(g,v);return B==null?null:{location:{pathname:B,search:w,hash:x,state:O,key:k},navigationType:c}},[v,g,w,x,O,k,c]);return Dt(H!=null,`<Router basename="${v}"> is not able to match the URL "${g}${w}${x}" because it does not start with the basename, so the <Router> won't render anything.`),H==null?null:N.createElement(Bt.Provider,{value:y},N.createElement(Wl.Provider,{children:o,value:H}))}function $0({children:r,location:o}){return U0(rc(r),o)}function rc(r,o=[]){let u=[];return N.Children.forEach(r,(c,f)=>{if(!N.isValidElement(c))return;let m=[...o,f];if(c.type===N.Fragment){u.push.apply(u,rc(c.props.children,m));return}Oe(c.type===qt,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Oe(!c.props.index||!c.props.children,"An index route cannot have child routes.");let p={id:c.props.id||m.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(p.children=rc(c.props.children,m)),u.push(p)}),u}var Sr="get",Er="application/x-www-form-urlencoded";function Nr(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function W0(r){return Nr(r)&&r.tagName.toLowerCase()==="button"}function I0(r){return Nr(r)&&r.tagName.toLowerCase()==="form"}function P0(r){return Nr(r)&&r.tagName.toLowerCase()==="input"}function ey(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function ty(r,o){return r.button===0&&(!o||o==="_self")&&!ey(r)}function sc(r=""){return new URLSearchParams(typeof r=="string"||Array.isArray(r)||r instanceof URLSearchParams?r:Object.keys(r).reduce((o,u)=>{let c=r[u];return o.concat(Array.isArray(c)?c.map(f=>[u,f]):[[u,c]])},[]))}function ay(r,o){let u=sc(r);return o&&o.forEach((c,f)=>{u.has(f)||o.getAll(f).forEach(m=>{u.append(f,m)})}),u}var vr=null;function ny(){if(vr===null)try{new FormData(document.createElement("form"),0),vr=!1}catch{vr=!0}return vr}var ly=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ac(r){return r!=null&&!ly.has(r)?(Dt(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Er}"`),null):r}function iy(r,o){let u,c,f,m,p;if(I0(r)){let v=r.getAttribute("action");c=v?oa(v,o):null,u=r.getAttribute("method")||Sr,f=ac(r.getAttribute("enctype"))||Er,m=new FormData(r)}else if(W0(r)||P0(r)&&(r.type==="submit"||r.type==="image")){let v=r.form;if(v==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=r.getAttribute("formaction")||v.getAttribute("action");if(c=y?oa(y,o):null,u=r.getAttribute("formmethod")||v.getAttribute("method")||Sr,f=ac(r.getAttribute("formenctype"))||ac(v.getAttribute("enctype"))||Er,m=new FormData(v,r),!ny()){let{name:g,type:w,value:x}=r;if(w==="image"){let O=g?`${g}.`:"";m.append(`${O}x`,"0"),m.append(`${O}y`,"0")}else g&&m.append(g,x)}}else{if(Nr(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Sr,c=null,f=Er,p=r}return m&&f==="text/plain"&&(p=m,m=void 0),{action:c,method:u.toLowerCase(),encType:f,formData:m,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function bc(r,o){if(r===!1||r===null||typeof r>"u")throw new Error(o)}function ry(r,o,u){let c=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return c.pathname==="/"?c.pathname=`_root.${u}`:o&&oa(c.pathname,o)==="/"?c.pathname=`${o.replace(/\/$/,"")}/_root.${u}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${u}`,c}async function sy(r,o){if(r.id in o)return o[r.id];try{let u=await import(r.module);return o[r.id]=u,u}catch(u){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function oy(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function cy(r,o,u){let c=await Promise.all(r.map(async f=>{let m=o.routes[f.route.id];if(m){let p=await sy(m,u);return p.links?p.links():[]}return[]}));return hy(c.flat(1).filter(oy).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function qh(r,o,u,c,f,m){let p=(y,g)=>u[g]?y.route.id!==u[g].route.id:!0,v=(y,g)=>u[g].pathname!==y.pathname||u[g].route.path?.endsWith("*")&&u[g].params["*"]!==y.params["*"];return m==="assets"?o.filter((y,g)=>p(y,g)||v(y,g)):m==="data"?o.filter((y,g)=>{let w=c.routes[y.route.id];if(!w||!w.hasLoader)return!1;if(p(y,g)||v(y,g))return!0;if(y.route.shouldRevalidate){let x=y.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function uy(r,o,{includeHydrateFallback:u}={}){return dy(r.map(c=>{let f=o.routes[c.route.id];if(!f)return[];let m=[f.module];return f.clientActionModule&&(m=m.concat(f.clientActionModule)),f.clientLoaderModule&&(m=m.concat(f.clientLoaderModule)),u&&f.hydrateFallbackModule&&(m=m.concat(f.hydrateFallbackModule)),f.imports&&(m=m.concat(f.imports)),m}).flat(1))}function dy(r){return[...new Set(r)]}function fy(r){let o={},u=Object.keys(r).sort();for(let c of u)o[c]=r[c];return o}function hy(r,o){let u=new Set;return new Set(o),r.reduce((c,f)=>{let m=JSON.stringify(fy(f));return u.has(m)||(u.add(m),c.push({key:m,link:f})),c},[])}function om(){let r=N.useContext($n);return bc(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function my(){let r=N.useContext(Cr);return bc(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var xc=N.createContext(void 0);xc.displayName="FrameworkContext";function cm(){let r=N.useContext(xc);return bc(r,"You must render this element inside a <HydratedRouter> element"),r}function py(r,o){let u=N.useContext(xc),[c,f]=N.useState(!1),[m,p]=N.useState(!1),{onFocus:v,onBlur:y,onMouseEnter:g,onMouseLeave:w,onTouchStart:x}=o,O=N.useRef(null);N.useEffect(()=>{if(r==="render"&&p(!0),r==="viewport"){let B=G=>{G.forEach(V=>{p(V.isIntersecting)})},L=new IntersectionObserver(B,{threshold:.5});return O.current&&L.observe(O.current),()=>{L.disconnect()}}},[r]),N.useEffect(()=>{if(c){let B=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(B)}}},[c]);let k=()=>{f(!0)},H=()=>{f(!1),p(!1)};return u?r!=="intent"?[m,O,{}]:[m,O,{onFocus:Jl(v,k),onBlur:Jl(y,H),onMouseEnter:Jl(g,k),onMouseLeave:Jl(w,H),onTouchStart:Jl(x,k)}]:[!1,O,{}]}function Jl(r,o){return u=>{r&&r(u),u.defaultPrevented||o(u)}}function gy({page:r,...o}){let{router:u}=om(),c=N.useMemo(()=>$h(u.routes,r,u.basename),[u.routes,r,u.basename]);return c?N.createElement(vy,{page:r,matches:c,...o}):null}function yy(r){let{manifest:o,routeModules:u}=cm(),[c,f]=N.useState([]);return N.useEffect(()=>{let m=!1;return cy(r,o,u).then(p=>{m||f(p)}),()=>{m=!0}},[r,o,u]),c}function vy({page:r,matches:o,...u}){let c=ua(),{manifest:f,routeModules:m}=cm(),{basename:p}=om(),{loaderData:v,matches:y}=my(),g=N.useMemo(()=>qh(r,o,y,f,c,"data"),[r,o,y,f,c]),w=N.useMemo(()=>qh(r,o,y,f,c,"assets"),[r,o,y,f,c]),x=N.useMemo(()=>{if(r===c.pathname+c.search+c.hash)return[];let H=new Set,B=!1;if(o.forEach(G=>{let V=f.routes[G.route.id];!V||!V.hasLoader||(!g.some(X=>X.route.id===G.route.id)&&G.route.id in v&&m[G.route.id]?.shouldRevalidate||V.hasClientLoader?B=!0:H.add(G.route.id))}),H.size===0)return[];let L=ry(r,p,"data");return B&&H.size>0&&L.searchParams.set("_routes",o.filter(G=>H.has(G.route.id)).map(G=>G.route.id).join(",")),[L.pathname+L.search]},[p,v,c,f,g,o,r,m]),O=N.useMemo(()=>uy(w,f),[w,f]),k=yy(w);return N.createElement(N.Fragment,null,x.map(H=>N.createElement("link",{key:H,rel:"prefetch",as:"fetch",href:H,...u})),O.map(H=>N.createElement("link",{key:H,rel:"modulepreload",href:H,...u})),k.map(({key:H,link:B})=>N.createElement("link",{key:H,nonce:u.nonce,...B})))}function by(...r){return o=>{r.forEach(u=>{typeof u=="function"?u(o):u!=null&&(u.current=o)})}}var um=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{um&&(window.__reactRouterVersion="7.10.1")}catch{}function xy({basename:r,children:o,unstable_useTransitions:u,window:c}){let f=N.useRef();f.current==null&&(f.current=i0({window:c,v5Compat:!0}));let m=f.current,[p,v]=N.useState({action:m.action,location:m.location}),y=N.useCallback(g=>{u===!1?v(g):N.startTransition(()=>v(g))},[u]);return N.useLayoutEffect(()=>m.listen(y),[m,y]),N.createElement(K0,{basename:r,children:o,location:p.location,navigationType:p.action,navigator:m,unstable_useTransitions:u===!0})}var dm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ye=N.forwardRef(function({onClick:o,discover:u="render",prefetch:c="none",relative:f,reloadDocument:m,replace:p,state:v,target:y,to:g,preventScrollReset:w,viewTransition:x,...O},k){let{basename:H,unstable_useTransitions:B}=N.useContext(Bt),L=typeof g=="string"&&dm.test(g),G,V=!1;if(typeof g=="string"&&L&&(G=g,um))try{let Ge=new URL(window.location.href),Ve=g.startsWith("//")?new URL(Ge.protocol+g):new URL(g),ze=oa(Ve.pathname,H);Ve.origin===Ge.origin&&ze!=null?g=ze+Ve.search+Ve.hash:V=!0}catch{Dt(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let X=_0(g,{relative:f}),[ne,ye,fe]=py(c,O),J=jy(g,{replace:p,state:v,target:y,preventScrollReset:w,relative:f,viewTransition:x,unstable_useTransitions:B});function Ee(Ge){o&&o(Ge),Ge.defaultPrevented||J(Ge)}let Ae=N.createElement("a",{...O,...fe,href:G||X,onClick:V||m?o:Ee,ref:by(k,ye),target:y,"data-discover":!L&&u==="render"?"true":void 0});return ne&&!L?N.createElement(N.Fragment,null,Ae,N.createElement(gy,{page:X})):Ae});Ye.displayName="Link";var Sy=N.forwardRef(function({"aria-current":o="page",caseSensitive:u=!1,className:c="",end:f=!1,style:m,to:p,viewTransition:v,children:y,...g},w){let x=Pl(p,{relative:g.relative}),O=ua(),k=N.useContext(Cr),{navigator:H,basename:B}=N.useContext(Bt),L=k!=null&&Oy(x)&&v===!0,G=H.encodeLocation?H.encodeLocation(x).pathname:x.pathname,V=O.pathname,X=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;u||(V=V.toLowerCase(),X=X?X.toLowerCase():null,G=G.toLowerCase()),X&&B&&(X=oa(X,B)||X);const ne=G!=="/"&&G.endsWith("/")?G.length-1:G.length;let ye=V===G||!f&&V.startsWith(G)&&V.charAt(ne)==="/",fe=X!=null&&(X===G||!f&&X.startsWith(G)&&X.charAt(G.length)==="/"),J={isActive:ye,isPending:fe,isTransitioning:L},Ee=ye?o:void 0,Ae;typeof c=="function"?Ae=c(J):Ae=[c,ye?"active":null,fe?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let Ge=typeof m=="function"?m(J):m;return N.createElement(Ye,{...g,"aria-current":Ee,className:Ae,ref:w,style:Ge,to:p,viewTransition:v},typeof y=="function"?y(J):y)});Sy.displayName="NavLink";var Ey=N.forwardRef(({discover:r="render",fetcherKey:o,navigate:u,reloadDocument:c,replace:f,state:m,method:p=Sr,action:v,onSubmit:y,relative:g,preventScrollReset:w,viewTransition:x,...O},k)=>{let{unstable_useTransitions:H}=N.useContext(Bt),B=zy(),L=Ty(v,{relative:g}),G=p.toLowerCase()==="get"?"get":"post",V=typeof v=="string"&&dm.test(v),X=ne=>{if(y&&y(ne),ne.defaultPrevented)return;ne.preventDefault();let ye=ne.nativeEvent.submitter,fe=ye?.getAttribute("formmethod")||p,J=()=>B(ye||ne.currentTarget,{fetcherKey:o,method:fe,navigate:u,replace:f,state:m,relative:g,preventScrollReset:w,viewTransition:x});H&&u!==!1?N.startTransition(()=>J()):J()};return N.createElement("form",{ref:k,method:G,action:L,onSubmit:c?y:X,...O,"data-discover":!V&&r==="render"?"true":void 0})});Ey.displayName="Form";function wy(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function fm(r){let o=N.useContext($n);return Oe(o,wy(r)),o}function jy(r,{target:o,replace:u,state:c,preventScrollReset:f,relative:m,viewTransition:p,unstable_useTransitions:v}={}){let y=Wn(),g=ua(),w=Pl(r,{relative:m});return N.useCallback(x=>{if(ty(x,o)){x.preventDefault();let O=u!==void 0?u:$l(g)===$l(w),k=()=>y(r,{replace:O,state:c,preventScrollReset:f,relative:m,viewTransition:p});v?N.startTransition(()=>k()):k()}},[g,y,w,u,c,o,r,f,m,p,v])}function Ay(r){Dt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let o=N.useRef(sc(r)),u=N.useRef(!1),c=ua(),f=N.useMemo(()=>ay(c.search,u.current?null:o.current),[c.search]),m=Wn(),p=N.useCallback((v,y)=>{const g=sc(typeof v=="function"?v(new URLSearchParams(f)):v);u.current=!0,m("?"+g,y)},[m,f]);return[f,p]}var Cy=0,Ny=()=>`__${String(++Cy)}__`;function zy(){let{router:r}=fm("useSubmit"),{basename:o}=N.useContext(Bt),u=X0(),c=r.fetch,f=r.navigate;return N.useCallback(async(m,p={})=>{let{action:v,method:y,encType:g,formData:w,body:x}=iy(m,o);if(p.navigate===!1){let O=p.fetcherKey||Ny();await c(O,u,p.action||v,{preventScrollReset:p.preventScrollReset,formData:w,body:x,formMethod:p.method||y,formEncType:p.encType||g,flushSync:p.flushSync})}else await f(p.action||v,{preventScrollReset:p.preventScrollReset,formData:w,body:x,formMethod:p.method||y,formEncType:p.encType||g,replace:p.replace,state:p.state,fromRouteId:u,flushSync:p.flushSync,viewTransition:p.viewTransition})},[c,f,o,u])}function Ty(r,{relative:o}={}){let{basename:u}=N.useContext(Bt),c=N.useContext(Gt);Oe(c,"useFormAction must be used inside a RouteContext");let[f]=c.matches.slice(-1),m={...Pl(r||".",{relative:o})},p=ua();if(r==null){m.search=p.search;let v=new URLSearchParams(m.search),y=v.getAll("index");if(y.some(w=>w==="")){v.delete("index"),y.filter(x=>x).forEach(x=>v.append("index",x));let w=v.toString();m.search=w?`?${w}`:""}}return(!r||r===".")&&f.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(m.pathname=m.pathname==="/"?u:sa([u,m.pathname])),$l(m)}function Oy(r,{relative:o}={}){let u=N.useContext(am);Oe(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=fm("useViewTransitionState"),f=Pl(r,{relative:o});if(!u.isTransitioning)return!1;let m=oa(u.currentLocation.pathname,c)||u.currentLocation.pathname,p=oa(u.nextLocation.pathname,c)||u.nextLocation.pathname;return wr(f.pathname,p)!=null||wr(f.pathname,m)!=null}function ca(r){return Array.isArray?Array.isArray(r):pm(r)==="[object Array]"}function Dy(r){if(typeof r=="string")return r;let o=r+"";return o=="0"&&1/r==-1/0?"-0":o}function My(r){return r==null?"":Dy(r)}function Yt(r){return typeof r=="string"}function hm(r){return typeof r=="number"}function Ry(r){return r===!0||r===!1||_y(r)&&pm(r)=="[object Boolean]"}function mm(r){return typeof r=="object"}function _y(r){return mm(r)&&r!==null}function xt(r){return r!=null}function nc(r){return!r.trim().length}function pm(r){return r==null?r===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(r)}const By="Incorrect 'index' type",Uy=r=>`Invalid value for key ${r}`,ky=r=>`Pattern length exceeds max of ${r}.`,Ly=r=>`Missing ${r} property in key`,Hy=r=>`Property 'weight' in key '${r}' must be a positive integer`,Yh=Object.prototype.hasOwnProperty;class qy{constructor(o){this._keys=[],this._keyMap={};let u=0;o.forEach(c=>{let f=gm(c);this._keys.push(f),this._keyMap[f.id]=f,u+=f.weight}),this._keys.forEach(c=>{c.weight/=u})}get(o){return this._keyMap[o]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function gm(r){let o=null,u=null,c=null,f=1,m=null;if(Yt(r)||ca(r))c=r,o=Gh(r),u=oc(r);else{if(!Yh.call(r,"name"))throw new Error(Ly("name"));const p=r.name;if(c=p,Yh.call(r,"weight")&&(f=r.weight,f<=0))throw new Error(Hy(p));o=Gh(p),u=oc(p),m=r.getFn}return{path:o,id:u,weight:f,src:c,getFn:m}}function Gh(r){return ca(r)?r:r.split(".")}function oc(r){return ca(r)?r.join("."):r}function Yy(r,o){let u=[],c=!1;const f=(m,p,v)=>{if(xt(m))if(!p[v])u.push(m);else{let y=p[v];const g=m[y];if(!xt(g))return;if(v===p.length-1&&(Yt(g)||hm(g)||Ry(g)))u.push(My(g));else if(ca(g)){c=!0;for(let w=0,x=g.length;w<x;w+=1)f(g[w],p,v+1)}else p.length&&f(g,p,v+1)}};return f(r,Yt(o)?o.split("."):o,0),c?u:u[0]}const Gy={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Vy={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(r,o)=>r.score===o.score?r.idx<o.idx?-1:1:r.score<o.score?-1:1},Qy={location:0,threshold:.6,distance:100},Xy={useExtendedSearch:!1,getFn:Yy,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var I={...Vy,...Gy,...Qy,...Xy};const Zy=/[^ ]+/g;function Fy(r=1,o=3){const u=new Map,c=Math.pow(10,o);return{get(f){const m=f.match(Zy).length;if(u.has(m))return u.get(m);const p=1/Math.pow(m,.5*r),v=parseFloat(Math.round(p*c)/c);return u.set(m,v),v},clear(){u.clear()}}}class Sc{constructor({getFn:o=I.getFn,fieldNormWeight:u=I.fieldNormWeight}={}){this.norm=Fy(u,3),this.getFn=o,this.isCreated=!1,this.setIndexRecords()}setSources(o=[]){this.docs=o}setIndexRecords(o=[]){this.records=o}setKeys(o=[]){this.keys=o,this._keysMap={},o.forEach((u,c)=>{this._keysMap[u.id]=c})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,Yt(this.docs[0])?this.docs.forEach((o,u)=>{this._addString(o,u)}):this.docs.forEach((o,u)=>{this._addObject(o,u)}),this.norm.clear())}add(o){const u=this.size();Yt(o)?this._addString(o,u):this._addObject(o,u)}removeAt(o){this.records.splice(o,1);for(let u=o,c=this.size();u<c;u+=1)this.records[u].i-=1}getValueForItemAtKeyId(o,u){return o[this._keysMap[u]]}size(){return this.records.length}_addString(o,u){if(!xt(o)||nc(o))return;let c={v:o,i:u,n:this.norm.get(o)};this.records.push(c)}_addObject(o,u){let c={i:u,$:{}};this.keys.forEach((f,m)=>{let p=f.getFn?f.getFn(o):this.getFn(o,f.path);if(xt(p)){if(ca(p)){let v=[];const y=[{nestedArrIndex:-1,value:p}];for(;y.length;){const{nestedArrIndex:g,value:w}=y.pop();if(xt(w))if(Yt(w)&&!nc(w)){let x={v:w,i:g,n:this.norm.get(w)};v.push(x)}else ca(w)&&w.forEach((x,O)=>{y.push({nestedArrIndex:O,value:x})})}c.$[m]=v}else if(Yt(p)&&!nc(p)){let v={v:p,n:this.norm.get(p)};c.$[m]=v}}}),this.records.push(c)}toJSON(){return{keys:this.keys,records:this.records}}}function ym(r,o,{getFn:u=I.getFn,fieldNormWeight:c=I.fieldNormWeight}={}){const f=new Sc({getFn:u,fieldNormWeight:c});return f.setKeys(r.map(gm)),f.setSources(o),f.create(),f}function Jy(r,{getFn:o=I.getFn,fieldNormWeight:u=I.fieldNormWeight}={}){const{keys:c,records:f}=r,m=new Sc({getFn:o,fieldNormWeight:u});return m.setKeys(c),m.setIndexRecords(f),m}function br(r,{errors:o=0,currentLocation:u=0,expectedLocation:c=0,distance:f=I.distance,ignoreLocation:m=I.ignoreLocation}={}){const p=o/r.length;if(m)return p;const v=Math.abs(c-u);return f?p+v/f:v?1:p}function Ky(r=[],o=I.minMatchCharLength){let u=[],c=-1,f=-1,m=0;for(let p=r.length;m<p;m+=1){let v=r[m];v&&c===-1?c=m:!v&&c!==-1&&(f=m-1,f-c+1>=o&&u.push([c,f]),c=-1)}return r[m-1]&&m-c>=o&&u.push([c,m-1]),u}const cn=32;function $y(r,o,u,{location:c=I.location,distance:f=I.distance,threshold:m=I.threshold,findAllMatches:p=I.findAllMatches,minMatchCharLength:v=I.minMatchCharLength,includeMatches:y=I.includeMatches,ignoreLocation:g=I.ignoreLocation}={}){if(o.length>cn)throw new Error(ky(cn));const w=o.length,x=r.length,O=Math.max(0,Math.min(c,x));let k=m,H=O;const B=v>1||y,L=B?Array(x):[];let G;for(;(G=r.indexOf(o,H))>-1;){let J=br(o,{currentLocation:G,expectedLocation:O,distance:f,ignoreLocation:g});if(k=Math.min(J,k),H=G+w,B){let Ee=0;for(;Ee<w;)L[G+Ee]=1,Ee+=1}}H=-1;let V=[],X=1,ne=w+x;const ye=1<<w-1;for(let J=0;J<w;J+=1){let Ee=0,Ae=ne;for(;Ee<Ae;)br(o,{errors:J,currentLocation:O+Ae,expectedLocation:O,distance:f,ignoreLocation:g})<=k?Ee=Ae:ne=Ae,Ae=Math.floor((ne-Ee)/2+Ee);ne=Ae;let Ge=Math.max(1,O-Ae+1),Ve=p?x:Math.min(O+Ae,x)+w,ze=Array(Ve+2);ze[Ve+1]=(1<<J)-1;for(let Re=Ve;Re>=Ge;Re-=1){let Pe=Re-1,M=u[r.charAt(Pe)];if(B&&(L[Pe]=+!!M),ze[Re]=(ze[Re+1]<<1|1)&M,J&&(ze[Re]|=(V[Re+1]|V[Re])<<1|1|V[Re+1]),ze[Re]&ye&&(X=br(o,{errors:J,currentLocation:Pe,expectedLocation:O,distance:f,ignoreLocation:g}),X<=k)){if(k=X,H=Pe,H<=O)break;Ge=Math.max(1,2*O-H)}}if(br(o,{errors:J+1,currentLocation:O,expectedLocation:O,distance:f,ignoreLocation:g})>k)break;V=ze}const fe={isMatch:H>=0,score:Math.max(.001,X)};if(B){const J=Ky(L,v);J.length?y&&(fe.indices=J):fe.isMatch=!1}return fe}function Wy(r){let o={};for(let u=0,c=r.length;u<c;u+=1){const f=r.charAt(u);o[f]=(o[f]||0)|1<<c-u-1}return o}const jr=String.prototype.normalize?(r=>r.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,"")):(r=>r);class vm{constructor(o,{location:u=I.location,threshold:c=I.threshold,distance:f=I.distance,includeMatches:m=I.includeMatches,findAllMatches:p=I.findAllMatches,minMatchCharLength:v=I.minMatchCharLength,isCaseSensitive:y=I.isCaseSensitive,ignoreDiacritics:g=I.ignoreDiacritics,ignoreLocation:w=I.ignoreLocation}={}){if(this.options={location:u,threshold:c,distance:f,includeMatches:m,findAllMatches:p,minMatchCharLength:v,isCaseSensitive:y,ignoreDiacritics:g,ignoreLocation:w},o=y?o:o.toLowerCase(),o=g?jr(o):o,this.pattern=o,this.chunks=[],!this.pattern.length)return;const x=(k,H)=>{this.chunks.push({pattern:k,alphabet:Wy(k),startIndex:H})},O=this.pattern.length;if(O>cn){let k=0;const H=O%cn,B=O-H;for(;k<B;)x(this.pattern.substr(k,cn),k),k+=cn;if(H){const L=O-cn;x(this.pattern.substr(L),L)}}else x(this.pattern,0)}searchIn(o){const{isCaseSensitive:u,ignoreDiacritics:c,includeMatches:f}=this.options;if(o=u?o:o.toLowerCase(),o=c?jr(o):o,this.pattern===o){let B={isMatch:!0,score:0};return f&&(B.indices=[[0,o.length-1]]),B}const{location:m,distance:p,threshold:v,findAllMatches:y,minMatchCharLength:g,ignoreLocation:w}=this.options;let x=[],O=0,k=!1;this.chunks.forEach(({pattern:B,alphabet:L,startIndex:G})=>{const{isMatch:V,score:X,indices:ne}=$y(o,B,L,{location:m+G,distance:p,threshold:v,findAllMatches:y,minMatchCharLength:g,includeMatches:f,ignoreLocation:w});V&&(k=!0),O+=X,V&&ne&&(x=[...x,...ne])});let H={isMatch:k,score:k?O/this.chunks.length:1};return k&&f&&(H.indices=x),H}}class qa{constructor(o){this.pattern=o}static isMultiMatch(o){return Vh(o,this.multiRegex)}static isSingleMatch(o){return Vh(o,this.singleRegex)}search(){}}function Vh(r,o){const u=r.match(o);return u?u[1]:null}class Iy extends qa{constructor(o){super(o)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(o){const u=o===this.pattern;return{isMatch:u,score:u?0:1,indices:[0,this.pattern.length-1]}}}class Py extends qa{constructor(o){super(o)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(o){const c=o.indexOf(this.pattern)===-1;return{isMatch:c,score:c?0:1,indices:[0,o.length-1]}}}class ev extends qa{constructor(o){super(o)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(o){const u=o.startsWith(this.pattern);return{isMatch:u,score:u?0:1,indices:[0,this.pattern.length-1]}}}class tv extends qa{constructor(o){super(o)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(o){const u=!o.startsWith(this.pattern);return{isMatch:u,score:u?0:1,indices:[0,o.length-1]}}}class av extends qa{constructor(o){super(o)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(o){const u=o.endsWith(this.pattern);return{isMatch:u,score:u?0:1,indices:[o.length-this.pattern.length,o.length-1]}}}class nv extends qa{constructor(o){super(o)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(o){const u=!o.endsWith(this.pattern);return{isMatch:u,score:u?0:1,indices:[0,o.length-1]}}}class bm extends qa{constructor(o,{location:u=I.location,threshold:c=I.threshold,distance:f=I.distance,includeMatches:m=I.includeMatches,findAllMatches:p=I.findAllMatches,minMatchCharLength:v=I.minMatchCharLength,isCaseSensitive:y=I.isCaseSensitive,ignoreDiacritics:g=I.ignoreDiacritics,ignoreLocation:w=I.ignoreLocation}={}){super(o),this._bitapSearch=new vm(o,{location:u,threshold:c,distance:f,includeMatches:m,findAllMatches:p,minMatchCharLength:v,isCaseSensitive:y,ignoreDiacritics:g,ignoreLocation:w})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(o){return this._bitapSearch.searchIn(o)}}class xm extends qa{constructor(o){super(o)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(o){let u=0,c;const f=[],m=this.pattern.length;for(;(c=o.indexOf(this.pattern,u))>-1;)u=c+m,f.push([c,u-1]);const p=!!f.length;return{isMatch:p,score:p?0:1,indices:f}}}const cc=[Iy,xm,ev,tv,nv,av,Py,bm],Qh=cc.length,lv=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,iv="|";function rv(r,o={}){return r.split(iv).map(u=>{let c=u.trim().split(lv).filter(m=>m&&!!m.trim()),f=[];for(let m=0,p=c.length;m<p;m+=1){const v=c[m];let y=!1,g=-1;for(;!y&&++g<Qh;){const w=cc[g];let x=w.isMultiMatch(v);x&&(f.push(new w(x,o)),y=!0)}if(!y)for(g=-1;++g<Qh;){const w=cc[g];let x=w.isSingleMatch(v);if(x){f.push(new w(x,o));break}}}return f})}const sv=new Set([bm.type,xm.type]);class ov{constructor(o,{isCaseSensitive:u=I.isCaseSensitive,ignoreDiacritics:c=I.ignoreDiacritics,includeMatches:f=I.includeMatches,minMatchCharLength:m=I.minMatchCharLength,ignoreLocation:p=I.ignoreLocation,findAllMatches:v=I.findAllMatches,location:y=I.location,threshold:g=I.threshold,distance:w=I.distance}={}){this.query=null,this.options={isCaseSensitive:u,ignoreDiacritics:c,includeMatches:f,minMatchCharLength:m,findAllMatches:v,ignoreLocation:p,location:y,threshold:g,distance:w},o=u?o:o.toLowerCase(),o=c?jr(o):o,this.pattern=o,this.query=rv(this.pattern,this.options)}static condition(o,u){return u.useExtendedSearch}searchIn(o){const u=this.query;if(!u)return{isMatch:!1,score:1};const{includeMatches:c,isCaseSensitive:f,ignoreDiacritics:m}=this.options;o=f?o:o.toLowerCase(),o=m?jr(o):o;let p=0,v=[],y=0;for(let g=0,w=u.length;g<w;g+=1){const x=u[g];v.length=0,p=0;for(let O=0,k=x.length;O<k;O+=1){const H=x[O],{isMatch:B,indices:L,score:G}=H.search(o);if(B){if(p+=1,y+=G,c){const V=H.constructor.type;sv.has(V)?v=[...v,...L]:v.push(L)}}else{y=0,p=0,v.length=0;break}}if(p){let O={isMatch:!0,score:y/p};return c&&(O.indices=v),O}}return{isMatch:!1,score:1}}}const uc=[];function cv(...r){uc.push(...r)}function dc(r,o){for(let u=0,c=uc.length;u<c;u+=1){let f=uc[u];if(f.condition(r,o))return new f(r,o)}return new vm(r,o)}const Ar={AND:"$and",OR:"$or"},fc={PATH:"$path",PATTERN:"$val"},hc=r=>!!(r[Ar.AND]||r[Ar.OR]),uv=r=>!!r[fc.PATH],dv=r=>!ca(r)&&mm(r)&&!hc(r),Xh=r=>({[Ar.AND]:Object.keys(r).map(o=>({[o]:r[o]}))});function Sm(r,o,{auto:u=!0}={}){const c=f=>{let m=Object.keys(f);const p=uv(f);if(!p&&m.length>1&&!hc(f))return c(Xh(f));if(dv(f)){const y=p?f[fc.PATH]:m[0],g=p?f[fc.PATTERN]:f[y];if(!Yt(g))throw new Error(Uy(y));const w={keyId:oc(y),pattern:g};return u&&(w.searcher=dc(g,o)),w}let v={children:[],operator:m[0]};return m.forEach(y=>{const g=f[y];ca(g)&&g.forEach(w=>{v.children.push(c(w))})}),v};return hc(r)||(r=Xh(r)),c(r)}function fv(r,{ignoreFieldNorm:o=I.ignoreFieldNorm}){r.forEach(u=>{let c=1;u.matches.forEach(({key:f,norm:m,score:p})=>{const v=f?f.weight:null;c*=Math.pow(p===0&&v?Number.EPSILON:p,(v||1)*(o?1:m))}),u.score=c})}function hv(r,o){const u=r.matches;o.matches=[],xt(u)&&u.forEach(c=>{if(!xt(c.indices)||!c.indices.length)return;const{indices:f,value:m}=c;let p={indices:f,value:m};c.key&&(p.key=c.key.src),c.idx>-1&&(p.refIndex=c.idx),o.matches.push(p)})}function mv(r,o){o.score=r.score}function pv(r,o,{includeMatches:u=I.includeMatches,includeScore:c=I.includeScore}={}){const f=[];return u&&f.push(hv),c&&f.push(mv),r.map(m=>{const{idx:p}=m,v={item:o[p],refIndex:p};return f.length&&f.forEach(y=>{y(m,v)}),v})}class In{constructor(o,u={},c){this.options={...I,...u},this.options.useExtendedSearch,this._keyStore=new qy(this.options.keys),this.setCollection(o,c)}setCollection(o,u){if(this._docs=o,u&&!(u instanceof Sc))throw new Error(By);this._myIndex=u||ym(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(o){xt(o)&&(this._docs.push(o),this._myIndex.add(o))}remove(o=()=>!1){const u=[];for(let c=0,f=this._docs.length;c<f;c+=1){const m=this._docs[c];o(m,c)&&(this.removeAt(c),c-=1,f-=1,u.push(m))}return u}removeAt(o){this._docs.splice(o,1),this._myIndex.removeAt(o)}getIndex(){return this._myIndex}search(o,{limit:u=-1}={}){const{includeMatches:c,includeScore:f,shouldSort:m,sortFn:p,ignoreFieldNorm:v}=this.options;let y=Yt(o)?Yt(this._docs[0])?this._searchStringList(o):this._searchObjectList(o):this._searchLogical(o);return fv(y,{ignoreFieldNorm:v}),m&&y.sort(p),hm(u)&&u>-1&&(y=y.slice(0,u)),pv(y,this._docs,{includeMatches:c,includeScore:f})}_searchStringList(o){const u=dc(o,this.options),{records:c}=this._myIndex,f=[];return c.forEach(({v:m,i:p,n:v})=>{if(!xt(m))return;const{isMatch:y,score:g,indices:w}=u.searchIn(m);y&&f.push({item:m,idx:p,matches:[{score:g,value:m,norm:v,indices:w}]})}),f}_searchLogical(o){const u=Sm(o,this.options),c=(v,y,g)=>{if(!v.children){const{keyId:x,searcher:O}=v,k=this._findMatches({key:this._keyStore.get(x),value:this._myIndex.getValueForItemAtKeyId(y,x),searcher:O});return k&&k.length?[{idx:g,item:y,matches:k}]:[]}const w=[];for(let x=0,O=v.children.length;x<O;x+=1){const k=v.children[x],H=c(k,y,g);if(H.length)w.push(...H);else if(v.operator===Ar.AND)return[]}return w},f=this._myIndex.records,m={},p=[];return f.forEach(({$:v,i:y})=>{if(xt(v)){let g=c(u,v,y);g.length&&(m[y]||(m[y]={idx:y,item:v,matches:[]},p.push(m[y])),g.forEach(({matches:w})=>{m[y].matches.push(...w)}))}}),p}_searchObjectList(o){const u=dc(o,this.options),{keys:c,records:f}=this._myIndex,m=[];return f.forEach(({$:p,i:v})=>{if(!xt(p))return;let y=[];c.forEach((g,w)=>{y.push(...this._findMatches({key:g,value:p[w],searcher:u}))}),y.length&&m.push({idx:v,item:p,matches:y})}),m}_findMatches({key:o,value:u,searcher:c}){if(!xt(u))return[];let f=[];if(ca(u))u.forEach(({v:m,i:p,n:v})=>{if(!xt(m))return;const{isMatch:y,score:g,indices:w}=c.searchIn(m);y&&f.push({score:g,key:o,value:m,idx:p,norm:v,indices:w})});else{const{v:m,n:p}=u,{isMatch:v,score:y,indices:g}=c.searchIn(m);v&&f.push({score:y,key:o,value:m,norm:p,indices:g})}return f}}In.version="7.1.0";In.createIndex=ym;In.parseIndex=Jy;In.config=I;In.parseQuery=Sm;cv(ov);const Ha=[{id:1,name:"Myntra",domain:"myntra.com",slug:"myntra-coupon-code",description:"Save on the latest fashion trends with verified Myntra coupons.",bestOffers:"Up to 80% Off",faqs:[{q:"How do I use Myntra coupons?",a:"Copy the code from Offerve and apply it at checkout on the Myntra app or website."},{q:"Does Myntra offer free shipping?",a:"Yes, focused on orders above a certain value or for Myntra Insider members."}]},{id:2,name:"Flipkart",domain:"flipkart.com",slug:"flipkart-coupon-code",description:"Get the best deals on electronics, mobiles, and fashion on Flipkart.",bestOffers:"Big Billion Day Offers",faqs:[{q:"Are there bank offers on Flipkart?",a:"Yes, Flipkart frequently partners with banks like HDFC, ICICI, and SBI for instant discounts."}]},{id:3,name:"Ajio",domain:"ajio.com",slug:"ajio-coupon-code",description:"Shop trendy fashion styles at unbeatable prices with Ajio coupons.",bestOffers:"Flat 50-90% Off",faqs:[{q:"What is the AjioMania sale?",a:"It's Ajio's biggest sale event with massive discounts across all categories."}]},{id:4,name:"Swiggy",domain:"swiggy.com",slug:"swiggy-coupon-code",description:"Order food online and save with exclusive Swiggy promo codes.",bestOffers:"60% Off on First Order",faqs:[{q:"Can I use multiple coupons on Swiggy?",a:"No, only one coupon code can be applied per order."}]},{id:5,name:"Zomato",domain:"zomato.com",slug:"zomato-coupon-code",description:"Hungry? Get tasty discounts on your Zomato food orders.",bestOffers:"Free Delivery + 50% Off",faqs:[]},{id:6,name:"Nykaa",domain:"nykaa.com",slug:"nykaa-coupon-code",description:"Beauty and wellness products at great prices with Nykaa offers.",bestOffers:"Pink Friday Sale Deals",faqs:[]},{id:7,name:"Tata Cliq",domain:"tatacliq.com",slug:"tata-cliq-coupon-code",description:"Luxury brands and electronics at discounted prices on Tata Cliq.",bestOffers:"15% Off with Bank Cards",faqs:[]},{id:8,name:"Cleartrip",domain:"cleartrip.com",slug:"cleartrip-coupon-code",description:"Book flights and hotels cheaper with Cleartrip coupons.",bestOffers:"Up to ₹5000 Off on Flights",faqs:[]},{id:9,name:"MakeMyTrip",domain:"makemytrip.com",slug:"makemytrip-coupon-code",description:"Plan your travel with the best offers on flights and hotels.",bestOffers:"Zero Cancellation Offers",faqs:[]},{id:10,name:"Oyo",domain:"oyorooms.com",slug:"oyo-coupon-code",description:"Affordable stays made even cheaper with Oyo coupons.",bestOffers:"Starting at ₹399",faqs:[]},{id:11,name:"Uber",domain:"uber.com",slug:"uber-coupon-code",description:"Save on your daily commute with Uber promo codes.",bestOffers:"50% Off 1st Ride",faqs:[]},{id:12,name:"Amazon",domain:"amazon.in",slug:"amazon-coupon-code",description:"Everything from A to Z at the best prices with Amazon deals.",bestOffers:"Great Indian Festival Deals",faqs:[]},{id:13,name:"Dominos",domain:"dominos.co.in",slug:"dominos-coupon-code",description:"Craving pizza? Use these codes for BOGO and discounts.",bestOffers:"Buy 1 Get 1 Free",faqs:[]},{id:14,name:"Pizza Hut",domain:"pizzahut.co.in",slug:"pizza-hut-coupon-code",description:"Delicious pizzas at slashed prices with Pizza Hut offers.",bestOffers:"Flat 50% Off",faqs:[]},{id:15,name:"KFC",domain:"kfc.co.in",slug:"kfc-coupon-code",description:"Finger lickin' good savings on KFC buckets and meals.",bestOffers:"Wednesday Buckets Offer",faqs:[]},{id:16,name:"BookMyShow",domain:"in.bookmyshow.com",slug:"bookmyshow-coupon-code",description:"Movie tickets and events with cashback and discounts.",bestOffers:"Buy 1 Get 1 Free (Cards)",faqs:[]},{id:17,name:"Adda247",domain:"adda247.com",slug:"adda247-coupon-code",description:"Prepare for government exams like Banking, SSC, Railways, and Teaching with affordable courses and test series from Adda247.",bestOffers:"Flat 17% to 77% Off",faqs:[{q:"How do I apply Adda247 promo codes?",a:"Select your desired course or pack, proceed to checkout, and look for the 'Have a Coupon Code' section. Enter the code and click Apply to get the discount."},{q:"Are the coupon codes verified?",a:"Yes, all coupons listed on Offerve are verified manually to ensuring they are working and valid for the respective courses."},{q:"How often are new offers added?",a:"We update our Adda247 coupons daily, checking for the latest seasonal sales, flash deals, and bank offers."}]},{id:18,name:"Unacademy",domain:"unacademy.com",slug:"unacademy-coupon-code",description:"Crack your dream exam with India's largest learning platform. Get live classes, structured batches, and mentorship for UPSC, IIT JEE, NEET, and more.",bestOffers:"20% Off on Plus & Iconic",faqs:[{q:"Where can I find the latest Unacademy referral codes?",a:"You can find the most recent and verified Unacademy referral codes right here on Offerve, updated daily for maximum savings."},{q:"Can I use codes for renewal?",a:"Most codes are for new subscriptions, but occasionally Unacademy releases offers for renewals. Check the coupon details for specific terms."},{q:"Is there a free trial available?",a:"Yes, Unacademy often provides a 7-day free trial for new users to experience the Plus platform before subscribing."}]},{id:19,name:"PW (Physics Wallah)",domain:"pw.live",slug:"pw-coupon-code",description:"Quality education at the most affordable prices. Physics Wallah offers comprehensive batches for JEE, NEET, UPSC, GATE, and more.",bestOffers:"Batches starting @ ₹999",faqs:[{q:"Does Physics Wallah offer discounts on batches?",a:"Yes, PW frequently runs offers on their popular batches like Yakeen, Lakshya, and Arjuna, especially during launch events and festivals."},{q:"How to use the coupon code on PW App?",a:"Go to the 'Batch' section, click on 'Buy Now', and enter the coupon code in the 'Apply Coupon' field before making the payment."},{q:"Are these codes applicable on offline centers?",a:"Generally, online codes are for app/website purchases. For offline centers (Vidyapeeth), check for specific registration offers listed as 'Offline' deals."}]}],Zh={"adda247-coupon-code":[{id:"adda-1",title:"Flat 17% OFF on All Courses",description:"Use code to get flat 17% discount on Bank, SSC & other courses.",code:"PREP17",verified:!0,expiry:"31 Dec 2025",type:"code",ribbon:"BEST SELLER"},{id:"adda-2",title:"Start Your Prep @ ₹999 Only",description:"Get started with select test series and courses starting at just ₹999.",code:"START999",verified:!0,expiry:"15 Jan 2026",type:"deal",ribbon:"BUDGET BUY"},{id:"adda-3",title:"77% OFF on Mahapacks",description:"Limited time offer: Huge savings on Adda247 Mahapacks.",code:"DREAM77",verified:!0,expiry:"20 Dec 2025",type:"code",badge:"trending"},{id:"adda-4",title:"Bank Exams: Flat 20% Discount",description:"Valid on IBPS, SBI PO and Clerk preparation batches.",code:"BANK20",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"adda-5",title:"SSC CGL Tier 1 & 2 Crash Course",description:"Join the crash course at a special discounted price.",code:"SSCGO",verified:!0,expiry:"10 Feb 2026",type:"code"},{id:"adda-6",title:"Free Daily Quizzes & Mock Tests",description:"Practice for free with daily updated quizzes on the app.",code:"FREEMOCK",verified:!0,expiry:"31 Dec 2026",type:"deal",ribbon:"FREE"},{id:"adda-7",title:"UPSC CSE Batches: Save ₹5000",description:"Get flat ₹5000 off on comprehensive UPSC foundation batches.",code:"IAS5000",verified:!0,expiry:"30 Nov 2025",type:"code",badge:"high value"},{id:"adda-8",title:"Railways RRB NTPC Course Deal",description:"Complete preparation guide now at 50% discount.",code:"RAIL50",verified:!0,expiry:"31 Jan 2026",type:"code"},{id:"adda-9",title:"Teaching Exams: Extra 15% OFF",description:"Applicable on CTET, UPTET, and other teaching exam packs.",code:"TEACH15",verified:!0,expiry:"28 Feb 2026",type:"code"},{id:"adda-10",title:"Defence Exams: Flat 60% OFF",description:"Save big on unexpected defence exam courses.",code:"DEF60",verified:!0,expiry:"05 Jan 2026",type:"code"},{id:"adda-11",title:"State Exams Mahapack Offer",description:"Access all state level exam courses with one subscription.",code:"STATE75",verified:!0,expiry:"15 Mar 2026",type:"code"},{id:"adda-12",title:"JAIIB/CAIIB Success Batch",description:"Join the bankers batch with a special 10% discount.",code:"JAIIB10",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"adda-13",title:"Gate 2026 Foundation Batch",description:"Early bird offer: Save flat 25% on enrollment.",code:"GATE25",verified:!0,expiry:"30 Apr 2026",type:"code"},{id:"adda-14",title:"Regulatory Bodies Exam Packs",description:"Special pricing for RBI Grade B and SEBI Grade A courses.",code:"RBI2025",verified:!0,expiry:"31 Dec 2025",type:"deal"},{id:"adda-15",title:"Agriculture Field Officer Course",description:"Enroll now and get study material worth ₹2000 free.",code:"AGRIFREE",verified:!0,expiry:"20 Feb 2026",type:"deal"},{id:"adda-16",title:"Buy Books & E-books: 20% OFF",description:"Use code to save on printed books and digital study material.",code:"BOOKS20",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"adda-17",title:"Video Courses: Flat 40% Discount",description:"Learn at your own pace with recorded video classes.",code:"VIDEO40",verified:!0,expiry:"15 Jun 2026",type:"code"},{id:"adda-18",title:"Live Classes: 5% Extra Off",description:"Get an additional 5% discount on all live class purchases.",code:"LIVE5",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"adda-19",title:"App User Exclusive: 3% Coins",description:"Use Adda247 coins for extra discount on the mobile app.",code:"APPCOINS",verified:!0,expiry:"31 Dec 2026",type:"deal",badge:"mobile"},{id:"adda-20",title:"Refer & Earn Store Credit",description:"Invite friends and earn credits to buy courses.",code:"INVITE",verified:!0,expiry:"31 Dec 2026",type:"deal"},{id:"adda-21",title:"New Year Sale: Flat 22% OFF",description:"Celebrate with big savings across the entire site.",code:"NEWYEAR22",verified:!1,expiry:"05 Jan 2026",type:"code",badge:"seasonal"},{id:"adda-22",title:"Scholarship Test: 100% Fee Waiver",description:"Take the test and stand a chance to win free courses.",code:"SCHOLAR",verified:!0,expiry:"Next Sunday",type:"deal"},{id:"adda-23",title:"Current Affairs Yearly Magazine",description:"Download the yearly roundup PDF for just ₹49.",code:"CA49",verified:!0,expiry:"31 Mar 2026",type:"deal"},{id:"adda-24",title:"Interview Guidance Program",description:"Expert guidance for banking and SSC interviews.",code:"INTERVIEW",verified:!0,expiry:"30 Jun 2026",type:"deal"},{id:"adda-25",title:"Spoken English Course Deal",description:"Improve your communication skills for just ₹499.",code:"SPEAK",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"adda-26",title:"Computer Certification Course",description:"Get certified in basic computer skills. Valid for exams.",code:"COMP100",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"adda-27",title:"CUET 2026 Entrance Prep",description:"Start your undergraduate journey with top university prep.",code:"CUET26",verified:!0,expiry:"31 May 2026",type:"code"},{id:"adda-28",title:"Flash Sale: 2 Hours Only",description:"Extra 10% off on top of existing offers. 6PM-8PM.",code:"FLASH10",verified:!1,expiry:"Today",type:"code",badge:"flash sale"},{id:"adda-29",title:"Buy 1 Get 1 Free Test Series",description:"Buy one mock test series and get another one free.",code:"BOGO",verified:!0,expiry:"Weekend",type:"deal"},{id:"adda-30",title:"Sign Up Bonus: ₹100 Wallet Cash",description:"Register today and get instant wallet balance.",code:"SIGNUP100",verified:!0,expiry:"31 Dec 2025",type:"deal",ribbon:"NEW USER"}],"unacademy-coupon-code":[{id:"un-1",title:"Flat 20% OFF on all Plus Subs",description:"Unlock unlimited access to live classes and structured courses.",code:"PLUS20",verified:!0,expiry:"31 Dec 2025",type:"code",ribbon:"POPULAR"},{id:"un-2",title:"Unlock 20% Discount on Iconic",description:"Get personal mentorship and doubts solving with Iconic subscription.",code:"ICONIC20",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"un-3",title:"NEET UG: Save up to 40%",description:"Prepare for medical entrance with top educators.",code:"NEET40",verified:!0,expiry:"30 Apr 2026",type:"code",badge:"medical"},{id:"un-4",title:"JEE Mains & Advanced Offer",description:"Crack engineering exams with comprehensive batches.",code:"JEE2026",verified:!0,expiry:"31 May 2026",type:"code",badge:"engineering"},{id:"un-5",title:"UPSC CSE: 3 Months Extension",description:"Subscribe for 12 months and get 3 months free.",code:"IASFREE3",verified:!0,expiry:"28 Feb 2026",type:"deal"},{id:"un-6",title:"Try Unacademy for Free for 7 Days",description:"Experience the Plus learning environment at no cost.",code:"TRIAL7",verified:!0,expiry:"31 Mar 2026",type:"deal",ribbon:"FREE TRIAL"},{id:"un-7",title:"CA Intermediate Bundles",description:"Save 15% on group 1 & 2 combo subscriptions.",code:"CA15",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"un-8",title:"CAT 2025: Flat ₹4000 OFF",description:"Ace your MBA entrance with the best percentile.",code:"CAT4000",verified:!0,expiry:"30 Nov 2025",type:"code"},{id:"un-9",title:"Gate & ESE: Max Discount",description:"Use the code to get the maximum available discount today.",code:"GATEALERTS",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"un-10",title:"Defence Exams: 10% Instant Off",description:"Preparing for NDA/CDS? Use this code for instant savings.",code:"DEFENCE10",verified:!0,expiry:"31 Jul 2026",type:"code"},{id:"un-11",title:"Resolve 2026: 23% OFF",description:"New year special offer for all new subscribers.",code:"RESOLVE23",verified:!1,expiry:"05 Jan 2026",type:"code",badge:"seasonal"},{id:"un-12",title:"Unacademy Lite: Test Series",description:"Get high quality mock tests starting at ₹499.",code:"LITE499",verified:!0,expiry:"31 Dec 2026",type:"deal"},{id:"un-13",title:"6 Months Free on 2 Years Sub",description:"Long term preparation plan with extra validity.",code:"LONGTERM",verified:!0,expiry:"30 Jun 2026",type:"deal"},{id:"un-14",title:"Referral Code: 10% Discount",description:"Use referral code to get standard 10% discount on any course.",code:"REFER10",verified:!0,expiry:"31 Dec 2030",type:"code"},{id:"un-15",title:"Govt Exams: SSC & Bank Combo",description:"Prepare for multiple exams with one subscription.",code:"COMBO20",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"un-16",title:"Railway Exams: Flat 50% OFF",description:"Limited period offer for railway aspirants.",code:"RRB50",verified:!0,expiry:"28 Feb 2026",type:"code"},{id:"un-17",title:"K-12 School Tuition: Savings",description:"CBSE Class 6-12 subscriptions at discounted rates.",code:"SCHOOL20",verified:!0,expiry:"31 Mar 2026",type:"code"},{id:"un-18",title:"Coding & Programming Subscription",description:"Learn software development with industry experts.",code:"CODE10",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"un-19",title:"Unacademy Store Offline Centers",description:"Visit nearest centre and get special admission offers.",code:"OFFLINE",verified:!0,expiry:"31 Dec 2026",type:"deal"},{id:"un-20",title:"CSIR UGC NET: 20% OFF",description:"Crack the lecture ship exam with top guidance.",code:"NET20",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"un-21",title:"Judiciary Exams Prep",description:"Comprehensive coverage for state judiciary exams.",code:"LAW10",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"un-22",title:"Free Special Classes",description:"Watch free live classes every day on the platform.",code:"WATCHFREE",verified:!0,expiry:"31 Dec 2026",type:"deal",ribbon:"FREE"},{id:"un-23",title:"Scholarship: Up to 90% OFF",description:"Participate in UNSAT and win scholarships.",code:"UNSAT",verified:!0,expiry:"Next Sunday",type:"deal"},{id:"un-24",title:"Notes 2.0: Free with Iconic",description:"Get hard copy notes delivered to your home.",code:"NOTESFREE",verified:!0,expiry:"31 Dec 2025",type:"deal"},{id:"un-25",title:"IPM/BBA Entrance Exams",description:"Start early for management careers after 12th.",code:"BBA15",verified:!0,expiry:"31 May 2026",type:"code"},{id:"un-26",title:"CMA Foundation Batches",description:"Cost and Management accountancy aspirants offer.",code:"CMA10",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"un-27",title:"Hotel Management JEE",description:"Prepare for NCHMCT JEE with discounts.",code:"HOTEL10",verified:!0,expiry:"30 Apr 2026",type:"code"},{id:"un-28",title:"Foreign Studies (IELTS/GRE)",description:"Get guidance for study abroad exams.",code:"ABROAD",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"un-29",title:"Clat & Other Law Entrances",description:"Law entrance prep made affordable.",code:"CLAT20",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"un-30",title:"New User: 10% Extra Cashback",description:"First time subscribers get credits back.",code:"NEW10",verified:!0,expiry:"31 Dec 2025",type:"code",ribbon:"NEW USER"}],"pw-coupon-code":[{id:"pw-1",title:"Arjuna JEE 2.0: Flat ₹500 OFF",description:"Discount on JEE batch for Class 11 students.",code:"JEE500",verified:!0,expiry:"31 Mar 2026",type:"code",ribbon:"TRENDING"},{id:"pw-2",title:"Lakshya NEET Batch: Save ₹300",description:"Best value preparation for Class 12 medical aspirants.",code:"NEET300",verified:!0,expiry:"31 Mar 2026",type:"code",ribbon:"BEST SELLER"},{id:"pw-3",title:"Yakeen Dropper Batch Offer",description:"Special price for repeaters aiming for NEET UG.",code:"DROPPER",verified:!0,expiry:"31 Jul 2026",type:"deal"},{id:"pw-4",title:"Vidyapeeth Offline: Early Bird",description:"Register for offline centers and save on tuition fees.",code:"VIDYA",verified:!0,expiry:"31 Jan 2026",type:"deal"},{id:"pw-5",title:"UPSC Wallah: Flat ₹2000 OFF",description:"Complete foundation course for civil services.",code:"UPSC2000",verified:!0,expiry:"30 Nov 2025",type:"code"},{id:"pw-6",title:"Gate Wallah: Parakram Batch",description:"Join the Parakram batch for GATE 2026 at ₹4999.",code:"PARA4999",verified:!0,expiry:"28 Feb 2026",type:"code"},{id:"pw-7",title:"MBA Wallah: Pioneer Batch",description:"CAT preparation at the most affordable price.",code:"MBA100",verified:!0,expiry:"30 Nov 2025",type:"code"},{id:"pw-8",title:"SSC Wallah: Mahapack Deal",description:"One subscription for all SSC exams.",code:"SSC10",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"pw-9",title:"Banking Wallah Offers",description:"Prepare for IBPS and SBI with top faculty.",code:"BANK50",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"pw-10",title:"PW Skills: Data Science Course",description:"Job assurance program with 10% discount.",code:"DATA10",verified:!0,expiry:"31 Dec 2025",type:"code",badge:"upskill"},{id:"pw-11",title:"Full Stack Web Dev: Save ₹1000",description:"Become a developer with industry ready curriculum.",code:"WEBDEV",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"pw-12",title:"Commerce Wallah: Class 11 & 12",description:"Accounts, Economics and BST batches.",code:"COMM100",verified:!0,expiry:"31 Mar 2026",type:"code"},{id:"pw-13",title:"PW Store: 15% OFF on Modules",description:"Get discount on printed study material and modules.",code:"BOOK15",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"pw-14",title:"Drona Study Material",description:"Specialized notes for NEET and JEE.",code:"DRONA",verified:!0,expiry:"31 Dec 2025",type:"deal"},{id:"pw-15",title:"School Prep: Uday Batch",description:"Foundation for Class 9th students.",code:"UDAY9",verified:!0,expiry:"31 Mar 2026",type:"code"},{id:"pw-16",title:"Neev Batch for Class 10th",description:"Board exam preparation made easy.",code:"NEEV10",verified:!0,expiry:"31 Mar 2026",type:"code"},{id:"pw-17",title:"Defense Wallah: NDA Shaurya",description:"Join the forces with dedicated NDA prep.",code:"NDA200",verified:!0,expiry:"30 Apr 2026",type:"code"},{id:"pw-18",title:"Teaching Wallah: CTET Success",description:"Clear teacher eligibility test with ease.",code:"TEACH25",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"pw-19",title:"CA Wallah: Foundation",description:"Start your Chartered Accountancy journey.",code:"CAFDN",verified:!0,expiry:"31 May 2026",type:"code"},{id:"pw-20",title:"CS Executive Batches",description:"Company Secretary exam preparation",code:"CSEXEC",verified:!0,expiry:"30 Jun 2026",type:"deal"},{id:"pw-21",title:"Free Youtube Batches",description:"Access quality education for free on Youtube channels.",code:"YTFREE",verified:!0,expiry:"31 Dec 2026",type:"deal",ribbon:"FREE"},{id:"pw-22",title:"Referral Bonus",description:"Refer PW app to friends and earn wallet points.",code:"REF20",verified:!0,expiry:"31 Dec 2030",type:"deal"},{id:"pw-23",title:"PW NSAT Scholarship",description:"Win up to 100% scholarship for offline/online batches.",code:"NSAT",verified:!0,expiry:"Next Month",type:"deal"},{id:"pw-24",title:"Nursing Wallah",description:"Norcet and other nursing exam batches.",code:"NURSE",verified:!0,expiry:"31 Dec 2025",type:"deal"},{id:"pw-25",title:"Government Job Exams",description:"Combined prep for multiple govt vacancies.",code:"GOVTJOB",verified:!0,expiry:"31 Dec 2025",type:"deal"},{id:"pw-26",title:"State PSC Batches",description:"BPSC, UPPSC, MPPSC focused study groups.",code:"PSC20",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"pw-27",title:"Judiciary Gold",description:"Civil Judge exam preparation.",code:"JUDGE",verified:!0,expiry:"31 Dec 2025",type:"deal"},{id:"pw-28",title:"Master Post-Graduation",description:"GATE + ESE integrated courses.",code:"MASTER",verified:!0,expiry:"30 Sep 2026",type:"deal"},{id:"pw-29",title:"Super Saver Bundles",description:"Buy Batch + Books combo and save extra.",code:"COMBO",verified:!0,expiry:"31 Dec 2025",type:"deal"},{id:"pw-30",title:"PW App First Order",description:"New users get additional 5% off on app.",code:"APPNEW",verified:!0,expiry:"31 Dec 2025",type:"code",ribbon:"NEW USER"}]},Fh=r=>{const o=new Date;return o.setDate(o.getDate()+r),o.toLocaleDateString("en-US",{day:"numeric",month:"short",year:"numeric"})},Jn=(r,o)=>{const u=r.substring(0,3).toUpperCase(),c=Math.floor(Math.random()*100)+50;return o==="deal"?"View Offer":`${u}${o.toUpperCase()}${c}`},zr=r=>{if(!r)return[];if(Zh[r.slug])return Zh[r.slug];const o=[],u=["Flat","Up to","Extra"],c=["Fashion","Electronics","Home","Beauty","Travel","Food"];o.push({id:1,title:`Flat 50% OFF on ${r.name} Best Sellers`,description:"Get half price on top rated products. Limited time offer.",code:Jn(r.name,"50OFF"),verified:!0,exclusive:!0,ribbon:"BEST SELLER",type:"code"},{id:2,title:"Extra 20% OFF on First Order",description:"New user exclusive. Sign up and save big on your first purchase.",code:Jn(r.name,"NEW20"),verified:!0,ribbon:"NEW USER",type:"code"},{id:3,title:"Bank Offer: 10% Instant Discount",description:"Use HDFC or ICICI Credit Cards. Min purchase ₹3000.",code:Jn(r.name,"BANK10"),verified:!0,badge:"bank",type:"code"},{id:4,title:`${r.name} App Exclusive: Flat ₹200 OFF`,description:"Valid only on app orders above ₹1500.",code:Jn(r.name,"APP200"),verified:!0,badge:"mobile",type:"code"},{id:5,title:"Free Delivery on All Orders",description:"No minimum order value required for limited period.",code:"FREEDEL",verified:!0,ribbon:"FREE SHIPPING",type:"deal"}),c.forEach((f,m)=>{o.push({id:10+m,title:`Up to 60% OFF on ${f}`,description:`Best deals on ${f} items. Shop now and save.`,code:Jn(r.name,f.substring(0,3)),verified:Math.random()>.3,expiry:Fh(Math.floor(Math.random()*30)+2),type:"deal"})});for(let f=0;f<15;f++){const m=(Math.floor(Math.random()*6)+1)*10,p=u[Math.floor(Math.random()*u.length)];o.push({id:100+f,title:`${p} ${m}% OFF on Selected Items`,description:"Applicable on specific range of products. T&C apply.",code:Jn(r.name,"SAVE"),verified:Math.random()>.5,expiry:Fh(Math.floor(Math.random()*60)+5),type:Math.random()>.7?"code":"deal"})}return o},Ec="offerve_analytics_data",xr="offerve_weekly_snapshot",sn=()=>{try{const r=localStorage.getItem(Ec),o=r?JSON.parse(r):null;return!o||!o.coupons||!o.stores||!o.events?{coupons:{},stores:{},events:[]}:o}catch(r){return console.error("Analytics Data Corrupt, resetting",r),{coupons:{},stores:{},events:[]}}},Jh=r=>{localStorage.setItem(Ec,JSON.stringify(r))},Xe={trackEvent:({couponId:r,storeSlug:o,type:u,source:c="unknown"})=>{const f=sn(),m=`${o}-${r}`,p=new Date().toISOString();switch(f.coupons[m]||(f.coupons[m]={copy:0,click:0,view:0,lastEvent:null}),u){case"copy":f.coupons[m].copy++;break;case"click":f.coupons[m].click++;break;case"view":f.coupons[m].view++;break}if(f.coupons[m].lastEvent=p,o)switch(f.stores[o]||(f.stores[o]={totalCopy:0,totalClick:0,totalView:0}),u){case"copy":f.stores[o].totalCopy++;break;case"click":f.stores[o].totalClick++;break;case"view":f.stores[o].totalView++;break}return f.events.unshift({key:m,storeSlug:o,type:u,source:c,timestamp:p}),f.events.length>100&&f.events.pop(),Jh(f),!0},trackSearch:r=>{const o=sn();o.searches||(o.searches={}),o.searches[r]=(o.searches[r]||0)+1,Jh(o)},getTopSearches:()=>{const o=sn().searches||{};return Object.entries(o).sort(([,u],[,c])=>c-u).slice(0,10).map(([u,c])=>({query:u,count:c}))},getAllCouponsWithMetrics:()=>{const r=sn();let o=[];return Ha.forEach(u=>{zr(u).forEach(f=>{const m=`${u.slug}-${f.id}`,p=r.coupons[m]||{copy:0,click:0,view:0,lastEvent:null};o.push({...f,store:u,metrics:p,trackingKey:m,score:p.copy*10+p.click*2+p.view*.1})})}),o},getTopCoupons:(r=10)=>Xe.getAllCouponsWithMetrics().sort((u,c)=>c.metrics.copy!==u.metrics.copy?c.metrics.copy-u.metrics.copy:c.score-u.score).slice(0,r),getStoreMetrics:()=>{const r=sn();return Ha.map(o=>({...o,analytics:r.stores[o.slug]||{totalCopy:0,totalClick:0,totalView:0}})).sort((o,u)=>u.analytics.totalCopy-o.analytics.totalCopy)},generateWeeklySnapshot:()=>{const r=Xe.getTopCoupons(20),o={date:new Date().toISOString(),weekId:`Week ${gv(new Date)}`,items:r};let u=JSON.parse(localStorage.getItem(xr)||"[]");return u.unshift(o),localStorage.setItem(xr,JSON.stringify(u)),o},getSnapshots:()=>JSON.parse(localStorage.getItem(xr)||"[]"),getEventsLog:()=>sn().events,resetData:()=>{localStorage.removeItem(Ec),localStorage.removeItem(xr)},exportToCSV:r=>{let o="data:text/csv;charset=utf-8,";if(sn(),r==="coupons"){const f=Xe.getAllCouponsWithMetrics();o+=`ID,Store,Title,Copy Count,Click Count,View Count,Last Event
`,f.forEach(m=>{o+=`${m.trackingKey},${m.store.name},"${m.title.replace(/,/g,"")}",${m.metrics.copy},${m.metrics.click},${m.metrics.view},${m.metrics.lastEvent}
`})}else if(r==="stores"){const f=Xe.getStoreMetrics();o+=`Store Name,Slug,Total Copies,Total Clicks,Total Views
`,f.forEach(m=>{o+=`${m.name},${m.slug},${m.analytics.totalCopy},${m.analytics.totalClick},${m.analytics.totalView}
`})}const u=encodeURI(o),c=document.createElement("a");c.setAttribute("href",u),c.setAttribute("download",`offerve_${r}_report.csv`),document.body.appendChild(c),c.click(),document.body.removeChild(c)}};function gv(r){r=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate())),r.setUTCDate(r.getUTCDate()+4-(r.getDay()||7));var o=new Date(Date.UTC(r.getUTCFullYear(),0,1)),u=Math.ceil(((r-o)/864e5+1)/7);return u}let Kh=null,Kl=null;const yv={includeScore:!0,threshold:.3,keys:[{name:"title",weight:.5},{name:"storeName",weight:.4},{name:"tags",weight:.3},{name:"description",weight:.2},{name:"storeSlug",weight:.4}]},lc=()=>{if(Kh)return;let r=[];Ha.forEach(o=>{r.push({type:"store",id:o.id,title:o.name,storeName:o.name,storeSlug:o.slug,description:o.description,tags:["store","merchant",...o.name.split(" ")],data:o}),zr(o).forEach(c=>{r.push({type:"coupon",id:`${o.slug}-${c.id}`,title:c.title,storeName:o.name,storeSlug:o.slug,description:c.description,code:c.code,tags:["coupon","deal","offer",o.name,...c.ribbon?[c.ribbon]:[]],data:{...c,merchant:o}})})}),r.push({type:"page",id:"blog-zomato",title:"How to save ₹500 on every Zomato Order",tags:["blog","food","zomato"],data:{link:"#"}}),r.push({type:"page",id:"blog-amazon",title:"Amazon Prime Day Guide",tags:["blog","amazon","sale"],data:{link:"#"}}),Kh=r,Kl=new In(r,yv),console.log(`Search Index Built: ${r.length} items`)},Em={init:()=>lc(),search:(r,o={})=>{if(Kl||lc(),!r||r.trim().length===0)return[];let c=Kl.search(r).map(f=>({...f.item,score:f.score}));return o.type&&o.type!=="all"&&(c=c.filter(f=>f.type===o.type)),c.slice(0,20)},suggest:r=>(Kl||lc(),!r||r.length<2?[]:Kl.search(r).slice(0,6).map(u=>({type:u.item.type,title:u.item.title,sub:u.item.type==="coupon"?u.item.storeName:u.item.type.toUpperCase(),id:u.item.id,slug:u.item.storeSlug})))},da=()=>{const r=Wn(),[o,u]=N.useState(""),[c,f]=N.useState([]),[m,p]=N.useState(!1),v=N.useRef(null);N.useEffect(()=>{const x=O=>{v.current&&!v.current.contains(O.target)&&p(!1)};return document.addEventListener("mousedown",x),()=>document.removeEventListener("mousedown",x)},[]);const y=x=>{const O=x.target.value;if(u(O),O.length>1){const k=Em.suggest(O);f(k),p(!0)}else f([]),p(!1)},g=x=>{x.preventDefault(),o.trim()&&(p(!1),r(`/search?q=${encodeURIComponent(o)}`))},w=x=>{p(!1),u(x.title),x.type==="store"?r(`/${x.slug}`):r(`/search?q=${encodeURIComponent(x.title)}`)};return s.jsxs("header",{className:"header",children:[s.jsx("div",{className:"container",children:s.jsxs("div",{className:"header-wrapper",children:[s.jsx("div",{className:"logo-section",children:s.jsxs(Ye,{to:"/",className:"logo-wrapper",children:[s.jsxs("div",{className:"logo-row",children:[s.jsx("img",{src:"/favicon.svg",alt:"Offerve Logo",className:"header-logo-img"}),s.jsx("span",{className:"logo-text gradient-text",children:"Offerve"})]}),s.jsx("span",{className:"tagline",children:"Save more on every purchase"})]})}),s.jsxs("div",{className:"search-section",ref:v,children:[s.jsxs("form",{className:"search-bar",onSubmit:g,children:[s.jsx("input",{type:"text",value:o,onChange:y,onFocus:()=>o.length>1&&p(!0),placeholder:"Search for coupons, stores, or categories...",className:"search-input"}),s.jsx("button",{type:"submit",className:"search-btn",children:s.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("circle",{cx:"11",cy:"11",r:"8"}),s.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})})]}),m&&c.length>0&&s.jsx("div",{className:"search-suggestions",children:c.map((x,O)=>s.jsxs("div",{className:"suggestion-item",onClick:()=>w(x),children:[s.jsxs("div",{className:"sugg-left",children:[s.jsx("span",{className:"sugg-title",children:x.title}),s.jsx("span",{className:"sugg-sub",children:x.sub})]}),s.jsx("span",{className:"sugg-arrow",children:"↗"})]},O))})]}),s.jsx("div",{className:"actions-section",children:s.jsxs("nav",{className:"nav-links",children:[s.jsx("a",{href:"#coupons",className:"nav-link",children:"Coupons"}),s.jsx(Ye,{to:"/stores",className:"nav-link",children:"Stores"}),s.jsx(Ye,{to:"/deals",className:"nav-link",children:"Deals"})]})})]})}),s.jsx("style",{children:`
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
      `})]})},vv=()=>{const[r,o]=N.useState(0),u=[1,2,3,4];return N.useEffect(()=>{const c=setInterval(()=>{o(f=>(f+1)%u.length)},5e3);return()=>clearInterval(c)},[u.length]),s.jsxs("section",{className:"hero",children:[s.jsx("div",{className:"container",children:s.jsxs("div",{className:"hero-content",children:[s.jsx("h1",{className:"hero-title",children:"Save Big with India’s Best Coupons, Promo Codes & Online Deals"}),s.jsxs("div",{className:"banner-carousel",children:[s.jsx("div",{className:"banner-track",style:{transform:`translateX(-${r*100}%)`},children:u.map((c,f)=>s.jsx("div",{className:"banner-slide",children:s.jsx("div",{className:`hero-banner banner-${c}`,children:s.jsxs("span",{className:"banner-placeholder-text",children:["Banner ",c," Space"]})})},c))}),s.jsx("div",{className:"banner-dots",children:u.map((c,f)=>s.jsx("button",{className:`dot ${r===f?"active":""}`,onClick:()=>o(f),"aria-label":`Go to banner ${f+1}`},f))})]})]})}),s.jsx("div",{className:"hero-bg"}),s.jsx("style",{children:`
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
      `})]})},bv=()=>{const r=Ha;return s.jsxs("div",{className:"merchant-slider-section",children:[s.jsxs("div",{className:"container",children:[s.jsx("h3",{className:"section-subtitle",children:"Top Stores"}),s.jsx("div",{className:"slider-wrapper",children:s.jsx("div",{className:"slider-track",children:r.concat(r).map((o,u)=>s.jsxs(Ye,{to:`/${o.slug}`,className:"merchant-bubble",children:[s.jsx("div",{className:"bubble-circle",children:s.jsx("img",{src:`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${o.domain}&size=128`,alt:o.name,className:"merchant-img",loading:"lazy",onError:c=>{c.target.style.display="none",c.target.parentElement.innerText=o.name[0]}})}),s.jsx("span",{className:"bubble-name",children:o.name})]},u))})})]}),s.jsx("style",{children:`
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
      `})]})},Tr=({merchant:r,id:o,title:u,description:c,verified:f,code:m,ribbon:p,expiry:v,type:y,onCopy:g})=>{const[w,x]=N.useState(!1),O=N.useRef(null),k=N.useRef(!1);N.useEffect(()=>{const B=new IntersectionObserver(([L])=>{L.isIntersecting&&!k.current&&(k.current=!0,Xe&&Xe.trackEvent&&o&&Xe.trackEvent({couponId:o,storeSlug:r.slug||(r.name?r.name.toLowerCase().replace(/\s+/g,"-"):"unknown"),type:"view",source:"card"}))},{threshold:.5});return O.current&&B.observe(O.current),()=>B.disconnect()},[o,r]);const H=()=>{if(Xe&&Xe.trackEvent&&o&&Xe.trackEvent({couponId:o,storeSlug:r.slug||(r.name?r.name.toLowerCase().replace(/\s+/g,"-"):"unknown"),type:y==="deal"?"click":"copy",source:"card"}),g&&g(),y==="deal"){window.open(`https://${r.domain||"google.com"}`,"_blank");return}navigator.clipboard.writeText(m),x(!0),setTimeout(()=>x(!1),2e3)};return s.jsxs("div",{className:"coupon-card",ref:O,children:[p&&s.jsx("div",{className:"coupon-ribbon",children:p}),s.jsxs("div",{className:"card-body",children:[s.jsx("div",{className:"logo-column",children:s.jsx("div",{className:"merchant-logo",children:r.logo?s.jsx("img",{src:r.logo,alt:r.name,loading:"lazy"}):s.jsx("span",{className:"merchant-initial",children:r.name?r.name[0]:"S"})})}),s.jsxs("div",{className:"content-column",children:[s.jsx("div",{className:"header-row",children:s.jsxs("div",{className:"badges-row",children:[f&&s.jsxs("span",{className:"verified-badge",children:[s.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"currentColor",children:s.jsx("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})}),"Verified"]}),v&&s.jsxs("span",{className:"expiry-badge",children:["⏳ ",v]})]})}),s.jsx("h3",{className:"coupon-title",children:u}),s.jsx("p",{className:"coupon-desc",children:c})]})]}),s.jsx("div",{className:"card-action",children:y==="deal"?s.jsxs("button",{className:"deal-btn full-width",onClick:H,children:["Activate Deal",s.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),s.jsx("polyline",{points:"15 3 21 3 21 9"}),s.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]})]}):s.jsxs("div",{className:"code-action-row",children:[s.jsxs("div",{className:"code-display-container",children:[s.jsx("span",{className:"code-label",children:"Coupon Code"}),s.jsx("div",{className:"code-box",children:m})]}),s.jsx("button",{className:`copy-btn ${w?"copied":""}`,onClick:H,"aria-label":"Copy coupon code",children:w?s.jsxs(s.Fragment,{children:[s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:s.jsx("polyline",{points:"20 6 9 17 4 12"})}),"Copied!"]}):s.jsxs(s.Fragment,{children:[s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),s.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),"Copy"]})})]})}),s.jsx("style",{children:`
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
      `})]})},xv=()=>{const[r,o]=N.useState([]),[u,c]=N.useState({});N.useEffect(()=>{const p=JSON.parse(localStorage.getItem("offerve_copy_counts")||"{}");c(p),f(p)},[]);const f=p=>{let v=[];Ha.forEach(y=>{zr(y).forEach(w=>{const x=`${y.slug}-${w.id}`;v.push({...w,trackingKey:x,merchant:y,copyCount:p[x]||0})})}),v.sort((y,g)=>g.copyCount!==y.copyCount?g.copyCount-y.copyCount:y.id-g.id),o(v.slice(0,5))},m=p=>{const v={...u,[p]:(u[p]||0)+1};c(v),localStorage.setItem("offerve_copy_counts",JSON.stringify(v)),f(v)};return s.jsxs("section",{className:"top-section",children:[s.jsx("div",{className:"container",children:s.jsxs("div",{className:"section-grid",children:[s.jsxs("div",{className:"top-block coupons-block",children:[s.jsxs("div",{className:"block-header",children:[s.jsx("h2",{children:"🔥 Top Coupons"}),s.jsx("span",{className:"live-badge",children:"Live Ranking"})]}),s.jsx("div",{className:"coupons-stack",children:r.map((p,v)=>s.jsxs("div",{className:"ranked-coupon-wrapper",children:[s.jsxs("div",{className:"rank-number",children:["#",v+1]}),s.jsx(Tr,{...p,ribbon:v===0?"MOST COPIED":p.ribbon,onCopy:()=>m(p.trackingKey)})]},p.trackingKey))})]}),s.jsxs("div",{className:"top-block offers-block",children:[s.jsxs("div",{className:"block-header",children:[s.jsx("h2",{children:"⚡ Top Offers & Guides"}),s.jsx("a",{href:"#",className:"view-all",children:"View All"})]}),s.jsxs("div",{className:"offers-grid",children:[s.jsxs("article",{className:"offer-card",children:[s.jsx("div",{className:"offer-img-box",style:{background:"#ffe4e6"},children:s.jsx("span",{className:"offer-tag",children:"Tricks"})}),s.jsxs("div",{className:"offer-content",children:[s.jsx("h3",{children:"How to save ₹500 on every Zomato Order"}),s.jsx("p",{children:"Use these hidden bank combinations to maximize your food savings today."}),s.jsx("button",{className:"read-btn",children:"Read Guide"})]})]}),s.jsxs("article",{className:"offer-card",children:[s.jsx("div",{className:"offer-img-box",style:{background:"#dcfce7"},children:s.jsx("span",{className:"offer-tag",children:"Deal"})}),s.jsxs("div",{className:"offer-content",children:[s.jsx("h3",{children:"Amazon Prime Day: Early Access List"}),s.jsx("p",{children:"Get the sneak peek of upcoming lightning deals 24 hours before sale."}),s.jsx("button",{className:"read-btn",children:"View Deal"})]})]}),s.jsxs("article",{className:"offer-card",children:[s.jsx("div",{className:"offer-img-box",style:{background:"#e0f2fe"},children:s.jsx("span",{className:"offer-tag",children:"Travel"})}),s.jsxs("div",{className:"offer-content",children:[s.jsx("h3",{children:"Flight Booking Hacks 2025"}),s.jsx("p",{children:"Secret incognito modes and VPN tricks to get cheaper flights instantly."}),s.jsx("button",{className:"read-btn",children:"Read Guide"})]})]})]})]})]})}),s.jsx("style",{children:`
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
            `})]})},Sv=()=>{const r=[{name:"Food",icon:"🍔",count:"150 Offers"},{name:"Travel",icon:"✈️",count:"85 Offers"},{name:"Fashion",icon:"👗",count:"200+ Offers"},{name:"Electronics",icon:"💻",count:"120 Offers"},{name:"Beauty",icon:"💄",count:"90 Offers"},{name:"Recharge",icon:"📱",count:"45 Offers"},{name:"Entertainment",icon:"🎬",count:"60 Offers"},{name:"Grocery",icon:"🥦",count:"110 Offers"}];return s.jsxs("section",{className:"category-section",id:"categories",children:[s.jsxs("div",{className:"container",children:[s.jsx("h2",{className:"section-title",children:"Browse by Category"}),s.jsx("div",{className:"category-grid",children:r.map((o,u)=>s.jsxs("div",{className:"category-card",children:[s.jsx("div",{className:"cat-icon",children:o.icon}),s.jsx("h3",{className:"cat-name",children:o.name}),s.jsx("span",{className:"cat-count",children:o.count})]},u))})]}),s.jsx("style",{children:`
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
      `})]})},Ev=()=>{const r=[{id:1,merchant:{name:"Amazon"},title:"Up to 50% Off on Electronics",description:"Get huge discounts on laptops, mobiles, and accessories.",verified:!0,code:"AMZ50OFF"},{id:2,merchant:{name:"Uber"},title:"Flat $5 Off on First 3 Rides",description:"Valid for new users only. No minimum purchase required.",verified:!0,code:"UBERNEW"},{id:3,merchant:{name:"Domino's"},title:"Buy 1 Get 1 Free Pizza",description:"Applicable on medium and large pizzas only.",verified:!0,code:"DOMBOGO"},{id:4,merchant:{name:"Nike"},title:"Extra 20% Off Sale Items",description:"Shop the latest sneakers and sportswear at discounted prices.",verified:!1,code:"NIKE20"},{id:5,merchant:{name:"Spotify"},title:"3 Months Premium for Free",description:"Try Premium free for 3 months. Cancel anytime.",verified:!0,code:"SPOTIFY3M"},{id:6,merchant:{name:"Airbnb"},title:"$40 Off Your First Trip",description:"Save on your first booking of $75 or more.",verified:!0,code:"AIRBNB40"}];return s.jsxs("section",{className:"deals-section",id:"deals",children:[s.jsxs("div",{className:"container",children:[s.jsx("h2",{className:"section-title",children:"Top Coupons & Offers"}),s.jsxs("div",{className:"deals-layout",children:[s.jsxs("aside",{className:"deals-sidebar",children:[s.jsxs("div",{className:"filter-group",children:[s.jsx("h3",{className:"filter-title",children:"Categories"}),s.jsxs("ul",{className:"filter-list",children:[s.jsx("li",{children:s.jsxs("label",{children:[s.jsx("input",{type:"checkbox"})," Travel (120)"]})}),s.jsx("li",{children:s.jsxs("label",{children:[s.jsx("input",{type:"checkbox"})," Fashion (85)"]})}),s.jsx("li",{children:s.jsxs("label",{children:[s.jsx("input",{type:"checkbox"})," Food (64)"]})}),s.jsx("li",{children:s.jsxs("label",{children:[s.jsx("input",{type:"checkbox"})," Electronics (50)"]})})]})]}),s.jsxs("div",{className:"filter-group",children:[s.jsx("h3",{className:"filter-title",children:"Stores"}),s.jsxs("ul",{className:"filter-list",children:[s.jsx("li",{children:s.jsxs("label",{children:[s.jsx("input",{type:"checkbox"})," Amazon"]})}),s.jsx("li",{children:s.jsxs("label",{children:[s.jsx("input",{type:"checkbox"})," Flipkart"]})}),s.jsx("li",{children:s.jsxs("label",{children:[s.jsx("input",{type:"checkbox"})," Myntra"]})}),s.jsx("li",{children:s.jsxs("label",{children:[s.jsx("input",{type:"checkbox"})," Uber"]})})]})]})]}),s.jsx("div",{className:"deals-grid",children:r.map(o=>s.jsx(Tr,{...o},o.id))})]})]}),s.jsx("style",{children:`
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
      `})]})},wv=()=>s.jsxs("div",{className:"submit-prompt-section",children:[s.jsx("div",{className:"container",children:s.jsxs("div",{className:"submit-card",children:[s.jsxs("div",{className:"content",children:[s.jsx("h3",{children:"Have a Coupon or Deal?"}),s.jsx("p",{children:"Share it with Offerve and help others save more."})]}),s.jsx(Ye,{to:"/submit-coupon",className:"btn-submit-link",children:"Submit Now →"})]})}),s.jsx("style",{children:`
                .submit-prompt-section {
                    padding: 3rem 0;
                    background: var(--bg-main);
                }
                
                .submit-card {
                    background: white; /* OR: var(--secondary) for dark contrast */
                    background: linear-gradient(to right, #1e293b, #0f172a);
                    color: white;
                    padding: 2rem 3rem;
                    border-radius: 12px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    box-shadow: var(--shadow-md);
                }

                .submit-card .content h3 {
                    color: white;
                    font-size: 1.5rem;
                    margin-bottom: 0.5rem;
                }
                
                .submit-card .content p {
                    color: #94a3b8; /* text-muted equivalent on dark */
                    margin: 0;
                    font-size: 1.05rem;
                }

                .btn-submit-link {
                    background: var(--primary);
                    color: white;
                    padding: 0.8rem 2rem;
                    border-radius: 50px;
                    font-weight: 600;
                    transition: transform 0.2s, background 0.2s;
                    white-space: nowrap;
                    margin-left: 2rem;
                }

                .btn-submit-link:hover {
                    background: var(--primary-hover);
                    transform: translateX(5px);
                }

                @media (max-width: 768px) {
                    .submit-card {
                        flex-direction: column;
                        text-align: center;
                        padding: 2rem;
                        gap: 1.5rem;
                    }
                    .btn-submit-link { margin-left: 0; }
                }
            `})]}),fa=()=>{const o=ua().pathname==="/submit-coupon";return s.jsxs(s.Fragment,{children:[!o&&s.jsx(wv,{}),s.jsxs("footer",{className:"footer",children:[s.jsx("div",{className:"footer-top",children:s.jsx("div",{className:"container",children:s.jsxs("div",{className:"footer-grid",children:[s.jsxs("div",{className:"footer-brand",children:[s.jsx("a",{href:"/",className:"footer-logo",children:"Offerve"}),s.jsx("p",{className:"footer-desc",children:"Offerve is your ultimate destination for the best coupons, deals, and offers from top online stores. Save money on every purchase."})]}),s.jsxs("div",{className:"footer-links",children:[s.jsx("h4",{className:"footer-heading",children:"Company"}),s.jsx(Ye,{to:"/about",children:"About Us"}),s.jsx(Ye,{to:"/submit-coupon",children:"Submit Coupon"}),s.jsx("a",{href:"#",children:"Contact"}),s.jsx("a",{href:"#",children:"Privacy Policy"}),s.jsx("a",{href:"#",children:"Terms of Use"})]}),s.jsxs("div",{className:"footer-links",children:[s.jsx("h4",{className:"footer-heading",children:"Popular Stores"}),s.jsx(Ye,{to:"/adda247-coupon-code",children:"Adda247"}),s.jsx(Ye,{to:"/unacademy-coupon-code",children:"Unacademy"}),s.jsx(Ye,{to:"/pw-coupon-code",children:"Physics Wallah"}),s.jsx(Ye,{to:"/stores",children:"View All Stores"})]}),s.jsxs("div",{className:"footer-newsletter",children:[s.jsx("h4",{className:"footer-heading",children:"Stay Updated"}),s.jsx("p",{className:"newsletter-text",children:"Subscribe to get the handpicked deals in your inbox."}),s.jsxs("div",{className:"newsletter-form",children:[s.jsx("input",{type:"email",placeholder:"Enter your email"}),s.jsx("button",{children:"Subscribe"})]})]})]})})}),s.jsx("div",{className:"footer-bottom",children:s.jsx("div",{className:"container",children:s.jsxs("p",{children:["© ",new Date().getFullYear()," Offerve. All rights reserved."]})})}),s.jsx("style",{children:`
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
      `})]})]})},jv=()=>s.jsxs("div",{className:"home-page",children:[s.jsx(da,{}),s.jsxs("main",{children:[s.jsx(vv,{}),s.jsx("section",{className:"intro-section",style:{padding:"2rem 1.5rem",background:"var(--bg-main)",textAlign:"center"},children:s.jsx("div",{className:"container",style:{maxWidth:"900px",margin:"0 auto"},children:s.jsxs("p",{style:{fontSize:"1.1rem",color:"var(--text-body)",lineHeight:"1.7"},children:["Offerve curates the latest coupons and discount offers from India’s most popular stores. Every deal is checked and updated so you can shop smarter and save more. Explore ",s.jsx("a",{href:"/categories",style:{color:"var(--primary)"},children:"categories"}),", trending ",s.jsx("a",{href:"/stores",style:{color:"var(--primary)"},children:"stores"}),", and exclusive promo codes updated in real time."]})})}),s.jsx(bv,{}),s.jsx(xv,{}),s.jsx(Sv,{}),s.jsx(Ev,{})]}),s.jsx("div",{className:"faq-section",style:{padding:"60px 0",background:"white",borderTop:"1px solid rgba(0,0,0,0.05)"},children:s.jsxs("div",{className:"container",style:{maxWidth:"800px"},children:[s.jsx("h2",{style:{textAlign:"center",marginBottom:"2rem",fontSize:"2rem"},children:"Frequently Asked Questions"}),s.jsx("div",{className:"faq-grid",style:{display:"grid",gap:"1.5rem"},children:[{q:"How does Offerve find and verify coupons?",a:"Offerve uses a dedicated team and automated systems to scour the web for the latest offers from top Indian retailers, verifying them manually to ensure they work."},{q:"Are the coupon codes updated daily?",a:"Yes, our database is updated in real-time. We continuously check for new promo codes and expire invalid ones to keep our deals fresh."},{q:"Is Offerve free to use?",a:"Absolutely! Offerve is completely free for all users. You don’t need to pay or sign up to access the best coupons."},{q:"Which stores offer the biggest discounts?",a:"Stores like Amazon, Flipkart, Myntra, and Swiggy frequently offer massive discounts during sale events, all of which are tracked on Offerve."},{q:"How do I redeem a coupon on Offerve?",a:"Simply click on 'Show Coupon Code' or 'View Offer' on any deal card. The code will be copied to your clipboard, and you'll be redirected to the store website to shop."}].map((r,o)=>s.jsxs("div",{className:"faq-item",style:{paddingBottom:"1.5rem",borderBottom:"1px solid #eee"},children:[s.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:"600",marginBottom:"0.5rem",color:"var(--text-main)"},children:r.q}),s.jsx("p",{style:{color:"var(--text-body)",lineHeight:"1.6"},children:r.a})]},o))}),s.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"https://schema.org","@type":"FAQPage",mainEntity:[{"@type":"Question",name:"How does Offerve find and verify coupons?",acceptedAnswer:{"@type":"Answer",text:"Offerve uses a dedicated team and automated systems to scour the web for the latest offers from top Indian retailers, verifying them manually to ensure they work."}},{"@type":"Question",name:"Are the coupon codes updated daily?",acceptedAnswer:{"@type":"Answer",text:"Yes, our database is updated in real-time. We continuously check for new promo codes and expire invalid ones to keep our deals fresh."}},{"@type":"Question",name:"Is Offerve free to use?",acceptedAnswer:{"@type":"Answer",text:"Absolutely! Offerve is completely free for all users. You don’t need to pay or sign up to access the best coupons."}},{"@type":"Question",name:"Which stores offer the biggest discounts?",acceptedAnswer:{"@type":"Answer",text:"Stores like Amazon, Flipkart, Myntra, and Swiggy frequently offer massive discounts during sale events, all of which are tracked on Offerve."}},{"@type":"Question",name:"How do I redeem a coupon on Offerve?",acceptedAnswer:{"@type":"Answer",text:"Simply click on 'Show Coupon Code' or 'View Offer' on any deal card. The code will be copied to your clipboard, and you'll be redirected to the store website to shop."}}]})}})]})}),s.jsx(fa,{})]}),Av=()=>{const r=Wn(),o=Ha;return s.jsxs("div",{className:"stores-page",children:[s.jsx(da,{}),s.jsx("main",{className:"main-content",children:s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"page-header",children:[s.jsx("h1",{className:"page-title",children:"All Stores"}),s.jsx("p",{className:"page-desc",children:"Browse coupons and deals from your favorite top brands."})]}),s.jsx("div",{className:"stores-grid",children:o.map((u,c)=>s.jsxs("div",{className:"store-card",onClick:()=>r(`/${u.slug}`),children:[s.jsx("div",{className:"store-logo-wrapper",children:s.jsx("img",{src:`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${u.domain}&size=128`,alt:u.name,className:"store-logo",loading:"lazy",onError:f=>{f.target.style.display="none",f.target.parentElement.innerText=u.name[0]}})}),s.jsx("h3",{className:"store-name",children:u.name}),s.jsx("button",{className:"view-offers-btn",children:"View Offers"})]},c))})]})}),s.jsx(fa,{}),s.jsx("style",{children:`
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
            `})]})},Cv=()=>{const[r,o]=N.useState(null),u=f=>{o(r===f?null:f)};N.useEffect(()=>{document.title="About Offerve - India's #1 Coupon & Deal Discovery Engine";const f=document.querySelector('meta[name="description"]');f&&f.setAttribute("content","Learn about Offerve, the leading destination for verified coupons, promo codes, and exclusive deals in India. Discover how we help millions save money daily."),window.scrollTo(0,0)},[]);const c=[{q:"Is Offerve completely free to use?",a:"Yes! Offerve is 100% free for all users. You never have to pay a subscription fee or hidden charge to access our coupons."},{q:"How often are coupons updated?",a:"Our database is updated in real-time. We have a dedicated team and automated systems that add hundreds of new coupons daily and remove expired ones to keep your experience frustration-free."},{q:"Do I need to register to use a coupon?",a:"No registration is required. You can search for a store, click on a coupon to copy it, and start saving immediately at the store's checkout page."},{q:"What if a coupon doesn't work?",a:"While we strive for 100% accuracy, sometimes retailers change terms without notice. If you find a broken code, please verify the terms and conditions. If it still fails, let us know via our Contact page, and we'll fix it instantly."},{q:"Do you have a mobile app?",a:"Currently, we offer a highly optimized mobile-responsive website that works perfectly on all smartphones and tablets, so you can save on the go without downloading an app."},{q:"Is it safe to use coupons from Offerve?",a:"Absolutely. We only partner with reputable online retailers and verify our links to ensure they are safe and secure. We respect your privacy and do not track your personal shopping data."},{q:"Can I submit a coupon I found?",a:"Yes, we love community contributions! If you found a working code that we missed, please share it through our Contact Us page so other shoppers can benefit."},{q:"How do you make money if it's free?",a:"We may earn a small commission from retailers when you make a purchase using our links. This comes at no extra cost to you—in fact, it ensures we can keep the platform free and running."}];return s.jsxs("div",{className:"about-page",children:[s.jsx(da,{}),s.jsxs("main",{className:"about-main",children:[s.jsx("section",{className:"about-hero",children:s.jsxs("div",{className:"container hero-container",children:[s.jsxs("h1",{children:["We're on a Mission to ",s.jsx("br",{}),s.jsx("span",{children:"Democratize Savings"})]}),s.jsx("p",{children:"Offerve is India's fastest-growing destination for smart shoppers. We combine cutting-edge technology with human verification to bring you thousands of active deals every single day."})]})}),s.jsx("section",{className:"stats-section",children:s.jsx("div",{className:"container stats-grid",children:[{label:"Active Coupons",value:"50,000+"},{label:"Partner Stores",value:"2,500+"},{label:"Happy Users",value:"1M+"},{label:"Daily Updates",value:"24/7"}].map((f,m)=>s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-value",children:f.value}),s.jsx("div",{className:"stat-label",children:f.label})]},m))})}),s.jsx("section",{className:"content-section",children:s.jsxs("div",{className:"container content-container",children:[s.jsxs("div",{className:"text-block",children:[s.jsx("h2",{children:"Who We Are"}),s.jsxs("p",{children:["Founded with a simple yet powerful idea, ",s.jsx("strong",{children:"Offerve"})," started as a small project to help friends find working promo codes. Today, it has evolved into a comprehensive savings platform trust by millions."]}),s.jsxs("p",{children:["In a digital age where online shopping is the norm, finding a working discount code shouldn't feel like finding a needle in a haystack. That's why we built Offerve – a platform that prioritizes ",s.jsx("strong",{children:"accuracy, transparency, and ease of use"}),". We are a team of deal hunters, tech enthusiasts, and savings experts dedicated to keeping money in your pocket."]})]}),s.jsxs("div",{className:"how-it-works",children:[s.jsx("h2",{children:"How We Work"}),s.jsx("div",{className:"steps-grid",children:[{title:"1. We Hunt",desc:"Our automated algorithms and expert team scan the web 24/7 to find the latest offers from top brands."},{title:"2. We Verify",desc:"We don't just post anything. Every coupon is manually tested to ensure it actually works at checkout."},{title:"3. You Save",desc:"We organize deals clearly, so you can copy a code and apply it in seconds, saving money instantly."}].map((f,m)=>s.jsxs("div",{className:"step-card",children:[s.jsx("h3",{children:f.title}),s.jsx("p",{children:f.desc})]},m))})]}),s.jsxs("div",{className:"text-block",children:[s.jsx("h2",{children:"Your One-Stop Shop for Everything"}),s.jsxs("p",{children:["Whether you are looking to upgrade your wardrobe with the latest ",s.jsx("strong",{children:"Fashion"})," trends from Myntra and Ajio, ordering delicious meals from ",s.jsx("strong",{children:"Food Delivery"})," giants like Swiggy and Zomato, or booking your next vacation via ",s.jsx("strong",{children:"Travel"})," portals like MakeMyTrip, Offerve has you covered. We also feature extensive deals for ",s.jsx("strong",{children:"Electronics"}),", ",s.jsx("strong",{children:"Beauty"}),", ",s.jsx("strong",{children:"Hosting"}),", and ",s.jsx("strong",{children:"Education"})," platforms."]})]}),s.jsxs("div",{className:"faq-section",children:[s.jsx("h2",{children:"Frequently Asked Questions"}),s.jsx("div",{className:"faq-grid",children:c.map((f,m)=>s.jsxs("div",{onClick:()=>u(m),className:`faq-item ${r===m?"active":""}`,children:[s.jsxs("div",{className:"faq-header",children:[s.jsx("h3",{children:f.q}),s.jsx("span",{className:"faq-icon",children:"+"})]}),r===m&&s.jsx("div",{className:"faq-answer",children:s.jsx("p",{children:f.a})})]},m))})]}),s.jsx("section",{className:"cta-section",children:s.jsxs("div",{className:"container",children:[s.jsx("h2",{children:"Ready to Start Saving?"}),s.jsx("p",{children:"Join massive community of smart shoppers and never pay full price again."}),s.jsx("a",{href:"/",className:"cta-btn",children:"Browse Today's Top Deals"})]})})]})})]}),s.jsx(fa,{}),s.jsx("style",{children:`
                /* Base Styles */
                .about-main {
                    min-height: 100vh;
                    background: var(--bg-light);
                    font-family: var(--font-main, sans-serif);
                }

                .container {
                    padding: 0 1.5rem;
                    margin: 0 auto;
                }

                /* Hero Section */
                .about-hero {
                    background: linear-gradient(135deg, var(--bg-main) 0%, #ffffff 100%);
                    padding: 5rem 1.5rem;
                    text-align: center;
                }

                .hero-container {
                    max-width: 900px;
                }

                .about-hero h1 {
                    font-size: 3rem;
                    font-weight: 800;
                    margin-bottom: 1.5rem;
                    color: var(--text-main);
                    letter-spacing: -1px;
                }

                .about-hero h1 span {
                    color: var(--primary);
                }

                .about-hero p {
                    font-size: 1.25rem;
                    color: var(--text-gray);
                    line-height: 1.6;
                    max-width: 700px;
                    margin: 0 auto;
                }

                /* Stats Section */
                .stats-section {
                    margin-top: -3rem;
                    padding-bottom: 2rem;
                }

                .stats-grid {
                    max-width: 1000px;
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2rem;
                }

                .stat-card {
                    background: white;
                    padding: 2rem;
                    border-radius: 16px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                    text-align: center;
                    transition: transform 0.3s ease;
                }
                
                .stat-card:hover {
                    transform: translateY(-5px);
                }

                .stat-value {
                    font-size: 2.5rem;
                    font-weight: bold;
                    color: var(--primary);
                    margin-bottom: 0.5rem;
                }

                .stat-label {
                    font-size: 1rem;
                    color: var(--text-gray);
                    font-weight: 600;
                }

                /* Content Section */
                .content-section {
                    padding: 5rem 0;
                }

                .content-container {
                    max-width: 900px;
                }

                .text-block {
                    margin-bottom: 4rem;
                }

                .text-block h2 {
                    font-size: 2.2rem;
                    margin-bottom: 1.5rem;
                    color: var(--text-main);
                    border-bottom: 2px solid var(--primary-light, #eee);
                    padding-bottom: 0.5rem;
                    display: inline-block;
                }

                .text-block p {
                    font-size: 1.1rem;
                    line-height: 1.8;
                    color: var(--text-body);
                    margin-bottom: 1rem;
                }

                /* How It Works */
                .how-it-works {
                    margin-bottom: 4rem;
                }

                .how-it-works h2, .faq-section h2 {
                    font-size: 2.2rem;
                    margin-bottom: 2rem;
                    color: var(--text-main);
                    text-align: center;
                }

                .steps-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 2rem;
                }

                .step-card {
                    background: #f8f9fa;
                    padding: 2rem;
                    border-radius: 12px;
                    border: 1px solid #eee;
                }

                .step-card h3 {
                    margin-bottom: 1rem;
                    color: var(--primary);
                    font-size: 1.4rem;
                }

                .step-card p {
                    color: var(--text-body);
                    line-height: 1.6;
                }

                /* FAQ Section */
                .faq-grid {
                    display: grid;
                    gap: 1rem;
                }

                .faq-item {
                    border-bottom: 1px solid #eee;
                    padding: 1.5rem;
                    background: white;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: background 0.3s ease;
                }

                .faq-item.active {
                    background: #f8f9fa;
                }

                .faq-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .faq-header h3 {
                    font-size: 1.15rem;
                    margin: 0;
                    color: var(--text-main);
                    font-weight: 600;
                }

                .faq-icon {
                    font-size: 1.5rem;
                    color: var(--primary);
                    line-height: 1;
                    transition: transform 0.3s ease;
                    display: inline-block;
                }
                
                .faq-item.active .faq-icon {
                    transform: rotate(45deg);
                }

                .faq-answer {
                    margin-top: 1rem;
                    padding-top: 1rem;
                    border-top: 1px solid rgba(0,0,0,0.05);
                    animation: fadeIn 0.3s ease;
                }

                .faq-answer p {
                    color: var(--text-gray);
                    line-height: 1.6;
                    margin: 0;
                }

                /* CTA Section */
                .cta-section {
                    background: var(--primary);
                    padding: 4rem 1.5rem;
                    text-align: center;
                    color: white;
                    border-radius: 16px;
                    margin-top: 4rem;
                }

                .cta-section h2 {
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                }

                .cta-section p {
                    font-size: 1.2rem;
                    margin-bottom: 2rem;
                    opacity: 0.9;
                }

                .cta-btn {
                    display: inline-block;
                    background: white;
                    color: var(--primary);
                    padding: 1rem 2.5rem;
                    font-size: 1.2rem;
                    font-weight: bold;
                    border-radius: 50px;
                    text-decoration: none;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
                    transition: transform 0.2s;
                }

                .cta-btn:hover {
                    transform: scale(1.05);
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                /* MOBILE RESPONSIVE STYLES */
                @media (max-width: 900px) {
                    .stats-grid, .steps-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 600px) {
                    .about-hero {
                        padding: 3rem 1rem;
                    }
                    
                    .about-hero h1 {
                        font-size: 2rem;
                    }

                    .stats-section {
                        margin-top: 0;
                    }

                    .stats-grid {
                        grid-template-columns: 1fr;
                        padding: 0 1rem;
                        gap: 1rem;
                    }
                    
                    .stat-card {
                        padding: 1.5rem;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        text-align: left;
                    }
                    
                    .stat-value {
                        margin-bottom: 0;
                        font-size: 1.8rem;
                    }

                    .content-section {
                        padding: 3rem 0;
                    }

                    .steps-grid {
                        grid-template-columns: 1fr;
                    }

                    .text-block h2, .how-it-works h2, .faq-section h2, .cta-section h2 {
                        font-size: 1.8rem;
                    }

                    .cta-section {
                        padding: 3rem 1rem;
                        border-radius: 0;
                        margin-left: -1.5rem;
                        margin-right: -1.5rem;
                        width: calc(100% + 3rem);
                    }
                    
                    .cta-btn {
                         width: 100%;
                         padding: 1rem;
                    }
                }
            `})]})},Nv=()=>{const{slug:r}=im(),o=Wn(),[u,c]=N.useState(null),[f,m]=N.useState([]),[p,v]=N.useState([]),[y,g]=N.useState({active:0,verified:0});if(N.useEffect(()=>{const x=Ha.find(X=>X.slug===r);if(!x){o("/stores");return}c(x);const O=zr(x);m(O),g({active:O.length,verified:O.filter(X=>X.verified).length});const k=new Date().getFullYear(),H=`Best ${x.name} Coupon Codes, Promo Codes & Offers – ${k} | Offerve`,B=`Find the latest ${x.name} coupon codes, promo codes, and verified offers. Updated daily so you can save more on ${x.name} shopping. Exclusive deals only on Offerve.`;document.title=H;const L=(X,ne,ye="name")=>{let fe=document.querySelector(`meta[${ye}="${X}"]`);fe||(fe=document.createElement("meta"),fe.setAttribute(ye,X),document.head.appendChild(fe)),fe.setAttribute("content",ne)};L("description",B),L("og:title",H,"property"),L("og:description",`Verified deals and offers for ${x.name}.`,"property"),L("og:url",`https://offerve.com/${r}`,"property"),L("og:image",`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${x.domain}&size=256`,"property"),L("twitter:card","summary_large_image","name");const V=Ha.filter(X=>X.id!==x.id).sort(()=>.5-Math.random()).slice(0,4);v(V)},[r,o]),!u)return s.jsx("div",{className:"loading",style:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},children:"Loading..."});const w=new Date().getFullYear();return s.jsxs("div",{className:"store-page",children:[s.jsx(da,{}),s.jsxs("main",{className:"main-content",children:[s.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"WebPage",name:`Best ${u.name} Coupon Codes`,description:`Save with latest ${u.name} coupons.`,breadcrumb:{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://offerve.com/"},{"@type":"ListItem",position:2,name:"Stores",item:"https://offerve.com/stores"},{"@type":"ListItem",position:3,name:u.name,item:`https://offerve.com/${u.slug}`}]}},{"@type":"Organization",name:u.name,url:`https://${u.domain}`,logo:`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${u.domain}&size=128`},{"@type":"FAQPage",mainEntity:u.faqs.map(x=>({"@type":"Question",name:x.q,acceptedAnswer:{"@type":"Answer",text:x.a}}))}]})}}),s.jsx("div",{className:"breadcrumbs-section",children:s.jsx("div",{className:"container",children:s.jsxs("div",{className:"breadcrumbs",children:[s.jsx(Ye,{to:"/",children:"Home"}),s.jsx("span",{className:"separator",children:"›"}),s.jsx(Ye,{to:"/stores",children:"Stores"}),s.jsx("span",{className:"separator",children:"›"}),s.jsx("span",{className:"current",children:u.name})]})})}),s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"store-header",children:[s.jsx("div",{className:"store-logo-large",children:s.jsx("img",{src:`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${u.domain}&size=128`,alt:`${u.name} Logo`,onError:x=>{x.target.style.display="none",x.target.parentElement.innerText=u.name[0]}})}),s.jsxs("div",{className:"store-info",children:[s.jsxs("h1",{className:"page-title1",children:[u.name," Coupon Codes & Offers – Verified Deals for ",w]}),s.jsxs("p",{className:"store-intro",children:["Offerve brings you the best ",s.jsx("strong",{children:u.name})," coupons and deals to help you save on every order. These offers are verified regularly and cover discounts on popular categories like fashion, accessories, electronics, daily essentials, and more."]}),s.jsxs("div",{className:"store-stats",children:[s.jsxs("span",{className:"stat-badge",children:[s.jsx("span",{className:"icon",children:"🏷️"})," ",y.active," Active Offers"]}),s.jsxs("span",{className:"stat-badge success",children:[s.jsx("span",{className:"icon",children:"✅"})," Verified Today"]})]})]})]}),s.jsxs("div",{className:"store-layout",children:[s.jsxs("div",{className:"coupons-column",children:[s.jsxs("div",{className:"filter-bar",children:[s.jsx("span",{className:"filter-label",children:"Sort By:"}),s.jsx("button",{className:"filter-btn active",children:"Top Rated"}),s.jsx("button",{className:"filter-btn",children:"Exclusive"}),s.jsx("button",{className:"filter-btn",children:"Expiring Soon"})]}),s.jsx("div",{className:"coupons-list",children:f.map(x=>s.jsx(Tr,{merchant:{name:u.name,domain:u.domain,logo:`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${u.domain}&size=128`},...x},x.id))}),s.jsx("div",{className:"load-more-container",style:{textAlign:"center",marginTop:"2rem"},children:s.jsxs("button",{className:"load-more-btn",children:["Show More ",u.name," Offers"]})})]}),s.jsxs("aside",{className:"sidebar",children:[s.jsxs("div",{className:"sidebar-widget about-widget",children:[s.jsxs("h3",{children:["About ",u.name]}),s.jsx("p",{className:"widget-text",children:u.description}),s.jsxs("p",{className:"widget-text",style:{marginTop:"0.5rem"},children:["Current Best Offer: ",s.jsx("strong",{children:u.bestOffers})]})]}),u.faqs.length>0&&s.jsxs("div",{className:"sidebar-widget faq-widget",children:[s.jsx("h3",{children:"FAQs"}),s.jsx("div",{className:"faq-mini-list",children:u.faqs.map((x,O)=>s.jsxs("div",{className:"faq-mini-item",children:[s.jsxs("strong",{children:["Q: ",x.q]}),s.jsxs("p",{children:["A: ",x.a]})]},O))})]})]})]}),s.jsxs("div",{className:"related-stores-section",children:[s.jsx("h3",{className:"section-title-small",children:"Similar Stores"}),s.jsx("div",{className:"related-grid",children:p.map(x=>s.jsxs(Ye,{to:`/${x.slug}`,className:"related-store-card",children:[s.jsx("img",{src:`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${x.domain}&size=64`,alt:x.name,className:"related-icon"}),s.jsx("span",{children:x.name})]},x.id))})]}),s.jsx("div",{style:{marginTop:"3rem",textAlign:"center"},children:s.jsx(Ye,{to:"/stores",style:{color:"var(--primary)",fontWeight:"600",textDecoration:"underline"},children:"Browse All Stores"})})]})]}),s.jsx(fa,{}),s.jsx("style",{children:`
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

            `})]})},zv=()=>{const[r]=Ay(),o=r.get("q")||"",[u,c]=N.useState([]),[f,m]=N.useState("all");N.useEffect(()=>{if(o){Xe.trackSearch(o);const v=Em.search(o);c(v)}},[o]);const p=f==="all"?u:u.filter(v=>v.type===f);return s.jsxs("div",{className:"page-wrapper",children:[s.jsx(da,{}),s.jsxs("div",{className:"container search-page",children:[s.jsxs("h1",{className:"search-heading",children:['Results for "',o,'"']}),s.jsxs("div",{className:"search-filters",children:[s.jsxs("button",{className:f==="all"?"active":"",onClick:()=>m("all"),children:["All (",u.length,")"]}),s.jsx("button",{className:f==="store"?"active":"",onClick:()=>m("store"),children:"Stores"}),s.jsx("button",{className:f==="coupon"?"active":"",onClick:()=>m("coupon"),children:"Coupons"})]}),s.jsx("div",{className:"search-grid",children:p.length>0?p.map((v,y)=>s.jsxs("div",{className:"search-result-item",children:[v.type==="coupon"&&s.jsx(Tr,{...v.data,id:v.id.split("-")[1],merchant:v.data.merchant}),v.type==="store"&&s.jsxs("div",{className:"store-result-card",children:[s.jsx("div",{className:"store-logo",children:v.data.name[0]}),s.jsxs("div",{className:"store-info",children:[s.jsx("h3",{children:v.data.name}),s.jsx("p",{children:v.data.description}),s.jsx("a",{href:"/"+v.data.slug,className:"btn-small",children:"Visit Store"})]})]}),v.type==="page"&&s.jsxs("div",{className:"page-result-card",children:[s.jsx("h3",{children:v.title}),s.jsx("span",{className:"type-tag",children:"Guide"})]})]},y)):s.jsxs("div",{className:"no-results",children:[s.jsxs("h3",{children:['No results found for "',o,'"']}),s.jsx("p",{children:"Try checking your spelling or using a different keyword."})]})})]}),s.jsx(fa,{}),s.jsx("style",{children:`
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
            `})]})},wm=[{id:"super-money-super-pro-card",slug:"super-money-super-pro-card",title:"Super Money Super Pro Card Review: Is This the Best Lifetime Free Credit Card?",excerpt:"Discover whether the Super Money Super Pro Card is the best lifetime free credit card. Full review, benefits, charges, approval tips & apply link inside.",date:"2025-12-12",author:"Offerve",thumbnail:"/assets/deals/super-money-pro-thumbnail.png",ogImage:"/assets/og-super-money-pro.jpg",tags:["credit card","cashback","Super Money","Super Pro","best credit card","apply credit card"],ctaText:"Apply Now",ctaLink:"https://link.super.money/46b7wowF6Ub",pinned:!0,seo:{title:"Best Lifetime Free Credit Card? Super Money Super Pro Card Full Review & Benefits (2025)",description:"Discover whether the Super Money Super Pro Card is the best lifetime free credit card. Full review, benefits, charges, approval tips & apply link inside."},content:`
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
    `}],Tv=()=>{const[r,o]=N.useState(""),u=wm.filter(c=>c.title.toLowerCase().includes(r.toLowerCase())||c.tags.some(f=>f.toLowerCase().includes(r.toLowerCase())));return s.jsxs("div",{className:"deals-page",children:[s.jsx(da,{}),s.jsxs("main",{className:"main-content",children:[s.jsx("div",{className:"deals-hero",children:s.jsxs("div",{className:"container",children:[s.jsx("h1",{children:"Exclusive Deals & Offers"}),s.jsx("p",{children:"Handpicked financial deals, credit card offers, and savings guides."})]})}),s.jsxs("div",{className:"container",style:{padding:"3rem 1.5rem",minHeight:"60vh"},children:[s.jsxs("div",{className:"deals-filter-bar",children:[s.jsx("input",{type:"text",placeholder:"Search deals...",value:r,onChange:c=>o(c.target.value),className:"deal-search-input"}),s.jsxs("div",{className:"tags-row",children:[s.jsx("span",{className:"tag active",children:"All"}),s.jsx("span",{className:"tag",children:"Credit Cards"}),s.jsx("span",{className:"tag",children:"Banking"}),s.jsx("span",{className:"tag",children:"Travel"})]})]}),s.jsxs("div",{className:"deals-grid-layout",children:[u.map(c=>s.jsx(Ye,{to:`/deals/${c.slug}`,className:"deal-card-link",children:s.jsxs("article",{className:"deal-card",children:[s.jsxs("div",{className:"deal-thumbnail",children:[s.jsx("img",{src:c.thumbnail,alt:c.title,loading:"lazy"}),c.pinned&&s.jsx("span",{className:"pinned-badge",children:"Featured"})]}),s.jsxs("div",{className:"deal-content",children:[s.jsxs("div",{className:"deal-meta",children:[s.jsx("span",{className:"deal-author",children:c.author}),s.jsx("span",{className:"deal-date",children:new Date(c.date).toLocaleDateString()})]}),s.jsx("h2",{className:"deal-title",children:c.title}),s.jsx("p",{className:"deal-excerpt",children:c.excerpt}),s.jsx("span",{className:"read-more",children:"Read Review →"})]})]})},c.id)),u.length===0&&s.jsx("div",{className:"no-deals",children:s.jsx("p",{children:"No deals found matching your criteria."})})]})]})]}),s.jsx(fa,{}),s.jsx("style",{children:`
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
            `})]})},Ov=()=>{const{slug:r}=im(),o=Wn(),[u,c]=N.useState(null);N.useEffect(()=>{const m=wm.find(v=>v.slug===r);if(!m){o("/deals");return}c(m),document.title=m.seo?.title||`${m.title} | Offerve Deals`;const p=(v,y,g="name")=>{let w=document.querySelector(`meta[${g}="${v}"]`);w||(w=document.createElement("meta"),w.setAttribute(g,v),document.head.appendChild(w)),w.setAttribute("content",y)};p("description",m.excerpt),p("og:title",m.title,"property"),p("og:description",m.excerpt,"property"),p("og:url",window.location.href,"property"),p("og:image",m.ogImage||m.thumbnail,"property"),p("twitter:card","summary_large_image","name")},[r,o]);const f=()=>{console.log("Event: deal_apply_click",{slug:u.slug,timestamp:new Date().toISOString()})};return u?s.jsxs("div",{className:"deal-detail-page",children:[s.jsx(da,{}),s.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://offerve.com/"},{"@type":"ListItem",position:2,name:"Deals",item:"https://offerve.com/deals"},{"@type":"ListItem",position:3,name:u.title,item:window.location.href}]},{"@type":"BlogPosting",headline:u.title,image:u.ogImage,author:{"@type":"Organization",name:u.author},publisher:{"@type":"Organization",name:"Offerve",logo:{"@type":"ImageObject",url:"https://offerve.com/favicon.svg"}},datePublished:u.date,description:u.excerpt},{"@type":"FAQPage",mainEntity:[{"@type":"Question",name:"How do I apply for the card?",acceptedAnswer:{"@type":"Answer",text:"Click the 'Apply Now' button on this page to visit the official application portal. Complete the digital KYC for instant approval."}},{"@type":"Question",name:"Is the annual fee refundable?",acceptedAnswer:{"@type":"Answer",text:"The fee is waived for the first year if you apply now, and waived in subsequent years on achieving spend milestones."}},{"@type":"Question",name:"When is cashback credited?",acceptedAnswer:{"@type":"Answer",text:"Cashback is calculated monthly and credited to your card account within 10 days of the statement generation date."}}]}]})}}),s.jsx("main",{className:"main-content",children:s.jsxs("article",{className:"article-container",children:[s.jsxs("div",{className:"breadcrumbs",children:[s.jsx(Ye,{to:"/",children:"Home"})," › ",s.jsx(Ye,{to:"/deals",children:"Deals"})," › ",s.jsx("span",{children:u.title})]}),s.jsxs("header",{className:"article-header",children:[s.jsxs("div",{className:"article-meta",children:[s.jsx("span",{className:"meta-tag",children:"Credit Card"}),s.jsx("span",{className:"meta-date",children:new Date(u.date).toLocaleDateString()})]}),s.jsx("h1",{className:"article-title",children:u.title}),s.jsxs("div",{className:"author-row",children:[s.jsx("div",{className:"author-avatar",children:"O"}),s.jsxs("span",{className:"author-name",children:["By ",u.author]})]})]}),s.jsx("div",{className:"article-featured-image",children:s.jsx("img",{src:u.thumbnail,alt:u.title})}),s.jsxs("div",{className:"article-layout",children:[s.jsx("div",{className:"article-body",dangerouslySetInnerHTML:{__html:u.content}}),s.jsx("aside",{className:"article-sidebar",children:s.jsxs("div",{className:"apply-widget sticky",children:[s.jsx("h3",{children:"Ready to Apply?"}),s.jsx("p",{className:"apply-note",children:"Apply through this link — you may get faster approval and cashback."}),s.jsx("a",{href:u.ctaLink,target:"_blank",rel:"nofollow noopener noreferrer",className:"cta-button",onClick:f,children:u.ctaText}),s.jsx("p",{className:"secure-text",children:"🔒 100% Secure Application"})]})})]}),s.jsxs("div",{className:"mobile-cta-bar",children:[s.jsxs("div",{className:"mobile-cta-text",children:[s.jsxs("span",{children:[u.title.substring(0,20),"..."]}),s.jsx("small",{children:"Get Approval & Cashback"})]}),s.jsx("a",{href:u.ctaLink,target:"_blank",rel:"nofollow noopener noreferrer",className:"mobile-apply-btn",onClick:f,children:"Apply Now"})]})]})}),s.jsx(fa,{}),s.jsx("style",{children:`
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
            `})]}):s.jsx("div",{className:"loading",children:"Loading..."})},Dv={send:async r=>(console.log("SENDING EMAIL VIA 'EMAILJS'...",r),new Promise(o=>{setTimeout(()=>{console.log("EMAIL SENT SUCCESSFULLY!"),o({status:200,text:"OK"})},800)}))},on="offerve_submissions",mc={save:async r=>{try{const o=JSON.parse(localStorage.getItem(on)||"[]"),u={id:Date.now().toString(),...r,status:"Pending",submittedAt:new Date().toISOString()};return o.unshift(u),localStorage.setItem(on,JSON.stringify(o)),await Dv.send({to_email:"support@offerve.com",from_name:r.name||"Anonymous User",message:`
                    New ${r.type} Submission:
                    Store: ${r.storeName}
                    Code: ${r.code||"N/A"}
                    Details: ${r.description}
                    Link: ${r.link||"N/A"}
                `}),{success:!0}}catch(o){return console.error("Submission failed:",o),{success:!1,error:o.message}}},getAll:()=>JSON.parse(localStorage.getItem(on)||"[]"),updateStatus:(r,o)=>{const c=JSON.parse(localStorage.getItem(on)||"[]").map(f=>f.id===r?{...f,status:o}:f);return localStorage.setItem(on,JSON.stringify(c)),c},delete:r=>{const u=JSON.parse(localStorage.getItem(on)||"[]").filter(c=>c.id!==r);return localStorage.setItem(on,JSON.stringify(u)),u}},Mv=()=>{N.useEffect(()=>{document.title="Submit Coupon or Deal | Offerve";const w=document.querySelector('meta[name="description"]');w&&w.setAttribute("content","Share coupons, deals, and offers with Offerve and help users save more.")},[]);const[r,o]=N.useState({name:"",email:"",type:"Coupon Code",storeName:"",code:"",description:"",expiry:"",link:""}),[u,c]=N.useState(!1),[f,m]=N.useState(!1),[p,v]=N.useState(""),y=w=>{o({...r,[w.target.name]:w.target.value})},g=async w=>{if(w.preventDefault(),v(""),!r.email||!r.storeName||!r.description){v("Please fill in all required fields.");return}c(!0);const x=await mc.save(r);c(!1),x.success?(m(!0),o({name:"",email:"",type:"Coupon Code",storeName:"",code:"",description:"",expiry:"",link:""})):v("Something went wrong. Please try again.")};return s.jsxs("div",{className:"submit-page",children:[s.jsx(da,{}),s.jsx("main",{className:"container page-content",children:s.jsxs("div",{className:"form-wrapper",children:[s.jsx("h1",{className:"page-title",children:"Submit Your Coupon, Deal or Offer"}),s.jsx("p",{className:"page-intro",children:"Share coupon codes, deals, offers, tricks, or money-saving tips with Offerve. If your submission is valid, we’ll review and publish it to help others save."}),f?s.jsxs("div",{className:"success-message",children:[s.jsx("div",{className:"icon",children:"🎉"}),s.jsx("h2",{children:"Thanks for sharing!"}),s.jsx("p",{children:"Our team will review your submission and publish it shortly."}),s.jsx("button",{onClick:()=>m(!1),className:"btn-secondary",children:"Submit Another"})]}):s.jsxs("form",{onSubmit:g,className:"submission-form",children:[s.jsxs("div",{className:"form-grid",children:[s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{children:["Your Name ",s.jsx("span",{children:"(Optional)"})]}),s.jsx("input",{type:"text",name:"name",value:r.name,onChange:y,placeholder:"John Doe"})]}),s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{children:["Email Address ",s.jsx("span",{className:"required",children:"*"})]}),s.jsx("input",{type:"email",name:"email",value:r.email,onChange:y,placeholder:"john@example.com",required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{children:["Submission Type ",s.jsx("span",{className:"required",children:"*"})]}),s.jsxs("select",{name:"type",value:r.type,onChange:y,children:[s.jsx("option",{children:"Coupon Code"}),s.jsx("option",{children:"Deal / Offer"}),s.jsx("option",{children:"Sale / Discount"}),s.jsx("option",{children:"Cashback / Bank Offer"}),s.jsx("option",{children:"Money-Saving Tip"})]})]}),s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{children:["Store / Brand Name ",s.jsx("span",{className:"required",children:"*"})]}),s.jsx("input",{type:"text",name:"storeName",value:r.storeName,onChange:y,placeholder:"e.g. Amazon, Myntra, Domino's",required:!0})]}),r.type==="Coupon Code"&&s.jsxs("div",{className:"form-group full-width",children:[s.jsxs("label",{children:["Coupon Code ",s.jsx("span",{className:"required",children:"*"})]}),s.jsx("input",{type:"text",name:"code",value:r.code,onChange:y,placeholder:"e.g. SAVE20",className:"code-input",required:!0})]}),s.jsxs("div",{className:"form-group full-width",children:[s.jsxs("label",{children:["Offer Description ",s.jsx("span",{className:"required",children:"*"})]}),s.jsx("textarea",{name:"description",value:r.description,onChange:y,placeholder:"Describe the offer details, terms, or how to use it...",required:!0,rows:"4"})]}),s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{children:["Expiry Date ",s.jsx("span",{children:"(Optional)"})]}),s.jsx("input",{type:"date",name:"expiry",value:r.expiry,onChange:y})]}),s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{children:["Offer Link / Proof ",s.jsx("span",{children:"(Optional)"})]}),s.jsx("input",{type:"url",name:"link",value:r.link,onChange:y,placeholder:"https://..."})]})]}),p&&s.jsx("div",{className:"error-message",children:p}),s.jsx("div",{className:"form-actions",children:s.jsx("button",{type:"submit",className:"btn-submit",disabled:u,children:u?"Submitting...":"Submit Now"})})]})]})}),s.jsx(fa,{}),s.jsx("style",{children:`
                .page-content { padding-top: 2rem; padding-bottom: 4rem; }
                .form-wrapper { max-width: 800px; margin: 0 auto; background: white; padding: 2.5rem; border-radius: 12px; box-shadow: var(--shadow-md); }
                
                .page-title { font-size: 2rem; margin-bottom: 0.5rem; text-align: center; color: var(--text-main); }
                .page-intro { text-align: center; color: var(--text-body); margin-bottom: 2.5rem; line-height: 1.6; }

                .submission-form { display: flex; flex-direction: column; gap: 1.5rem; }
                .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
                
                @media (max-width: 768px) {
                    .form-grid { grid-template-columns: 1fr; }
                    .form-wrapper { padding: 1.5rem; }
                }

                .form-group { display: flex; flex-direction: column; gap: 0.5rem; }
                .full-width { grid-column: 1 / -1; }
                
                label { font-weight: 600; font-size: 0.95rem; color: var(--text-main); }
                label span { font-weight: 400; color: var(--text-muted); font-size: 0.85rem; }
                label span.required { color: #ef4444; }

                input, select, textarea {
                    padding: 0.8rem;
                    border: 1px solid #e2e8f0;
                    border-radius: 8px;
                    font-family: inherit;
                    font-size: 1rem;
                    transition: border-color 0.2s;
                    background: #f8fafc;
                }

                input:focus, select:focus, textarea:focus {
                    outline: none;
                    border-color: var(--primary);
                    background: white;
                    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
                }

                .code-input { font-family: monospace; letter-spacing: 1px; font-weight: 700; color: var(--primary); }

                .btn-submit {
                    background: var(--primary);
                    color: white;
                    border: none;
                    padding: 1rem 2rem;
                    font-size: 1.1rem;
                    font-weight: 600;
                    border-radius: 8px;
                    cursor: pointer;
                    width: 100%;
                    transition: background 0.2s;
                }

                .btn-submit:hover { background: var(--primary-hover); transform: translateY(-1px); }
                .btn-submit:disabled { opacity: 0.7; cursor: not-allowed; transform: none; }

                .success-message { text-align: center; padding: 3rem 1rem; }
                .success-message .icon { font-size: 4rem; margin-bottom: 1rem; }
                .success-message h2 { color: var(--success); margin-bottom: 0.5rem; }
                .success-message p { color: var(--text-body); margin-bottom: 2rem; }
                
                .btn-secondary {
                    background: transparent;
                    border: 2px solid var(--primary);
                    color: var(--primary);
                    padding: 0.8rem 1.5rem;
                    border-radius: 8px;
                    font-weight: 600;
                    cursor: pointer;
                }
                .btn-secondary:hover { background: var(--primary); color: white; }

                .error-message {
                    background: #fef2f2;
                    color: #dc2626;
                    padding: 1rem;
                    border-radius: 8px;
                    text-align: center;
                    border: 1px solid #fee2e2;
                }
            `})]})},Rv=()=>{console.log("AdminDashboard Component Mounting...");const[r,o]=N.useState("overview"),[u,c]=N.useState([]),[f,m]=N.useState([]),[p,v]=N.useState([]),[y,g]=N.useState([]),[w,x]=N.useState(0);N.useEffect(()=>{c(Xe.getAllCouponsWithMetrics()),m(Xe.getStoreMetrics()),v(Xe.getEventsLog()),g(mc.getAll())},[w]);const O=()=>x(B=>B+1),k=(B,L)=>{mc.updateStatus(B,L),O()},H=()=>{window.confirm("Are you sure? This will wipe all analytics data.")&&(Xe.resetData(),O())};return s.jsxs("div",{className:"admin-page",children:[s.jsx(da,{}),s.jsxs("div",{className:"admin-container container",children:[s.jsxs("div",{className:"admin-header",children:[s.jsx("h1",{children:"Admin Analytics Dashboard"}),s.jsxs("div",{className:"admin-actions",children:[s.jsx("button",{onClick:O,className:"btn-secondary",children:"Refresh Data"}),s.jsx("button",{onClick:H,className:"btn-danger",children:"Reset All"})]})]}),s.jsxs("div",{className:"admin-tabs",children:[s.jsx("button",{className:r==="overview"?"active":"",onClick:()=>o("overview"),children:"Overview"}),s.jsxs("button",{className:r==="submissions"?"active":"",onClick:()=>o("submissions"),children:["Submissions (",y.filter(B=>B.status==="Pending").length,")"]}),s.jsx("button",{className:r==="coupons"?"active":"",onClick:()=>o("coupons"),children:"Top Coupons"}),s.jsx("button",{className:r==="stores"?"active":"",onClick:()=>o("stores"),children:"Store Performance"}),s.jsx("button",{className:r==="export"?"active":"",onClick:()=>o("export"),children:"Export & Snapshot"})]}),s.jsxs("div",{className:"admin-content",children:[r==="overview"&&s.jsxs("div",{className:"overview-grid",children:[s.jsxs("div",{className:"stat-card",children:[s.jsx("h3",{children:"Pending Submissions"}),s.jsx("p",{className:"stat-value",children:y.filter(B=>B.status==="Pending").length})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("h3",{children:"Total Events"}),s.jsx("p",{className:"stat-value",children:p.length})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("h3",{children:"Most Active Store"}),s.jsx("p",{className:"stat-value text-small",children:f[0]?.name||"-"})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("h3",{children:"Total Copies"}),s.jsx("p",{className:"stat-value",children:f.reduce((B,L)=>B+L.analytics.totalCopy,0)})]}),s.jsxs("div",{className:"recent-activity",children:[s.jsx("h3",{children:"Recent Live Events"}),s.jsx("ul",{className:"event-log",children:p.slice(0,10).map((B,L)=>s.jsxs("li",{children:[s.jsx("span",{className:`tag ${B.type}`,children:B.type}),s.jsx("span",{className:"source",children:B.storeSlug}),s.jsx("span",{className:"time",children:new Date(B.timestamp).toLocaleTimeString()})]},L))})]})]}),r==="submissions"&&s.jsx("div",{className:"table-responsive",children:s.jsxs("table",{className:"admin-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Date"}),s.jsx("th",{children:"User"}),s.jsx("th",{children:"Type"}),s.jsx("th",{children:"Store"}),s.jsx("th",{children:"Details"}),s.jsx("th",{children:"Status"}),s.jsx("th",{children:"Actions"})]})}),s.jsxs("tbody",{children:[y.length===0&&s.jsx("tr",{children:s.jsx("td",{colspan:"7",children:"No submissions yet."})}),y.map(B=>s.jsxs("tr",{children:[s.jsx("td",{children:new Date(B.submittedAt).toLocaleDateString()}),s.jsxs("td",{children:[B.name||"Anonymous",s.jsx("br",{}),s.jsx("small",{children:B.email})]}),s.jsx("td",{children:s.jsx("span",{className:"tag view",children:B.type})}),s.jsx("td",{children:B.storeName}),s.jsxs("td",{children:[s.jsx("strong",{children:B.code}),s.jsx("br",{}),s.jsx("span",{className:"truncate",title:B.description,children:B.description})]}),s.jsx("td",{children:s.jsx("span",{className:`tag ${B.status==="Approved"?"click":B.status==="Rejected"?"copy":"view"}`,style:B.status==="Pending"?{background:"#fef3c7",color:"#d97706"}:{},children:B.status})}),s.jsxs("td",{children:[B.status==="Pending"&&s.jsxs("div",{className:"btn-group",children:[s.jsx("button",{onClick:()=>k(B.id,"Approved"),className:"btn-small btn-primary",children:"Approve"}),s.jsx("button",{onClick:()=>k(B.id,"Rejected"),className:"btn-small btn-danger",children:"Reject"})]}),B.status!=="Pending"&&s.jsx("span",{children:"-"})]})]},B.id))]})]})}),r==="coupons"&&s.jsx("div",{className:"table-responsive",children:s.jsxs("table",{className:"admin-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Rank"}),s.jsx("th",{children:"Store"}),s.jsx("th",{children:"Coupon"}),s.jsx("th",{children:"Copies"}),s.jsx("th",{children:"Clicks"}),s.jsx("th",{children:"Views"})]})}),s.jsx("tbody",{children:Xe.getTopCoupons(50).map((B,L)=>s.jsxs("tr",{children:[s.jsxs("td",{children:["#",L+1]}),s.jsx("td",{children:B.store.name}),s.jsx("td",{className:"truncate",children:B.title}),s.jsx("td",{children:s.jsx("strong",{children:B.metrics.copy})}),s.jsx("td",{children:B.metrics.click}),s.jsx("td",{children:B.metrics.view})]},L))})]})}),r==="stores"&&s.jsx("div",{className:"table-responsive",children:s.jsxs("table",{className:"admin-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Store Name"}),s.jsx("th",{children:"Total Copies"}),s.jsx("th",{children:"Total Clicks"}),s.jsx("th",{children:"Total Views"})]})}),s.jsx("tbody",{children:f.map((B,L)=>s.jsxs("tr",{children:[s.jsx("td",{children:B.name}),s.jsx("td",{children:s.jsx("strong",{children:B.analytics.totalCopy})}),s.jsx("td",{children:B.analytics.totalClick}),s.jsx("td",{children:B.analytics.totalView})]},L))})]})}),r==="export"&&s.jsxs("div",{className:"export-panel",children:[s.jsx("h3",{children:"Data Export"}),s.jsxs("div",{className:"export-buttons",children:[s.jsx("button",{onClick:()=>Xe.exportToCSV("coupons"),className:"btn-primary",children:"Download Coupons CSV"}),s.jsx("button",{onClick:()=>Xe.exportToCSV("stores"),className:"btn-primary",children:"Download Stores CSV"})]}),s.jsx("hr",{style:{margin:"2rem 0"}}),s.jsx("h3",{children:"Weekly Snapshot"}),s.jsx("p",{children:"Generate a static list of this week's best deals for the 'Top Offers' section."}),s.jsx("button",{onClick:()=>{Xe.generateWeeklySnapshot(),alert("Snapshot Generated!")},className:"btn-secondary",children:"Generate Now"})]})]})]}),s.jsx("style",{children:`
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
            `}),s.jsx(fa,{})]})};function _v(){return s.jsx(xy,{children:s.jsx("div",{className:"App",children:s.jsxs($0,{children:[s.jsx(qt,{path:"/",element:s.jsx(jv,{})}),s.jsx(qt,{path:"/stores",element:s.jsx(Av,{})}),s.jsx(qt,{path:"/search",element:s.jsx(zv,{})}),s.jsx(qt,{path:"/about",element:s.jsx(Cv,{})}),s.jsx(qt,{path:"/deals",element:s.jsx(Tv,{})}),s.jsx(qt,{path:"/deals/:slug",element:s.jsx(Ov,{})}),s.jsx(qt,{path:"/submit-coupon",element:s.jsx(Mv,{})}),s.jsx(qt,{path:"/admin/analytics",element:s.jsx(Rv,{})}),s.jsx(qt,{path:"/:slug",element:s.jsx(Nv,{})})]})})})}class Bv extends Wg.Component{constructor(o){super(o),this.state={hasError:!1,error:null}}static getDerivedStateFromError(o){return{hasError:!0,error:o}}componentDidCatch(o,u){console.error("Uncaught error:",o,u)}handleReset=()=>{localStorage.clear(),window.location.reload()};render(){return this.state.hasError?s.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"2rem",backgroundColor:"#f8fafc",color:"#1e293b",fontFamily:"system-ui, -apple-system, sans-serif"},children:[s.jsx("h1",{style:{fontSize:"2rem",marginBottom:"1rem",color:"#ef4444"},children:"Oops! Something went wrong."}),s.jsx("p",{style:{marginBottom:"2rem",maxWidth:"400px",lineHeight:"1.6"},children:"The app encountered an error (likely due to old saved data). Please click the button below to fix it."}),s.jsx("button",{onClick:this.handleReset,style:{padding:"0.8rem 1.5rem",backgroundColor:"#2563eb",color:"white",border:"none",borderRadius:"8px",fontSize:"1rem",fontWeight:"600",cursor:"pointer",boxShadow:"0 4px 6px -1px rgba(37, 99, 235, 0.2)"},children:"Fix & Reload App"}),!1]}):this.props.children}}l0.createRoot(document.getElementById("root")).render(s.jsx(N.StrictMode,{children:s.jsxs(Bv,{children:[console.log("App Version: BrowserRouter + Clean URLs"),s.jsx(_v,{})]})}));
