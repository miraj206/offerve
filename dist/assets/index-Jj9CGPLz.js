var r0=Object.defineProperty,s0=Object.defineProperties;var o0=Object.getOwnPropertyDescriptors;var Er=Object.getOwnPropertySymbols;var Rh=Object.prototype.hasOwnProperty,_h=Object.prototype.propertyIsEnumerable;var ac=(s,o,c)=>o in s?r0(s,o,{enumerable:!0,configurable:!0,writable:!0,value:c}):s[o]=c,ie=(s,o)=>{for(var c in o||(o={}))Rh.call(o,c)&&ac(s,c,o[c]);if(Er)for(var c of Er(o))_h.call(o,c)&&ac(s,c,o[c]);return s},qe=(s,o)=>s0(s,o0(o));var In=(s,o)=>{var c={};for(var u in s)Rh.call(s,u)&&o.indexOf(u)<0&&(c[u]=s[u]);if(s!=null&&Er)for(var u of Er(s))o.indexOf(u)<0&&_h.call(s,u)&&(c[u]=s[u]);return c};var c0=(s,o)=>()=>(o||s((o={exports:{}}).exports,o),o.exports);var kh=(s,o,c)=>ac(s,typeof o!="symbol"?o+"":o,c);var Gt=(s,o,c)=>new Promise((u,f)=>{var h=y=>{try{v(c.next(y))}catch(g){f(g)}},p=y=>{try{v(c.throw(y))}catch(g){f(g)}},v=y=>y.done?u(y.value):Promise.resolve(y.value).then(h,p);v((c=c.apply(s,o)).next())});var rb=c0(ll=>{(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))u(f);new MutationObserver(f=>{for(const h of f)if(h.type==="childList")for(const p of h.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&u(p)}).observe(document,{childList:!0,subtree:!0});function c(f){const h={};return f.integrity&&(h.integrity=f.integrity),f.referrerPolicy&&(h.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?h.credentials="include":f.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function u(f){if(f.ep)return;f.ep=!0;const h=c(f);fetch(f.href,h)}})();function u0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var nc={exports:{}},Il={};var Bh;function d0(){if(Bh)return Il;Bh=1;var s=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function c(u,f,h){var p=null;if(h!==void 0&&(p=""+h),f.key!==void 0&&(p=""+f.key),"key"in f){h={};for(var v in f)v!=="key"&&(h[v]=f[v])}else h=f;return f=h.ref,{$$typeof:s,type:u,key:p,ref:f!==void 0?f:null,props:h}}return Il.Fragment=o,Il.jsx=c,Il.jsxs=c,Il}var Uh;function f0(){return Uh||(Uh=1,nc.exports=d0()),nc.exports}var r=f0(),lc={exports:{}},P={};var Lh;function h0(){if(Lh)return P;Lh=1;var s=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),p=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),O=Symbol.iterator;function U(w){return w===null||typeof w!="object"?null:(w=O&&w[O]||w["@@iterator"],typeof w=="function"?w:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,D={};function V(w,B,G){this.props=w,this.context=B,this.refs=D,this.updater=G||H}V.prototype.isReactComponent={},V.prototype.setState=function(w,B){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,B,"setState")},V.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function I(){}I.prototype=V.prototype;function L(w,B,G){this.props=w,this.context=B,this.refs=D,this.updater=G||H}var ee=L.prototype=new I;ee.constructor=L,q(ee,V.prototype),ee.isPureReactComponent=!0;var le=Array.isArray;function ce(){}var F={H:null,A:null,T:null,S:null},ye=Object.prototype.hasOwnProperty;function Se(w,B,G){var X=G.ref;return{$$typeof:s,type:w,key:B,ref:X!==void 0?X:null,props:G}}function ft(w,B){return Se(w.type,B,w.props)}function Be(w){return typeof w=="object"&&w!==null&&w.$$typeof===s}function pe(w){var B={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(G){return B[G]})}var ht=/\/+/g;function Oe(w,B){return typeof w=="object"&&w!==null&&w.key!=null?pe(""+w.key):B.toString(36)}function tt(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(ce,ce):(w.status="pending",w.then(function(B){w.status==="pending"&&(w.status="fulfilled",w.value=B)},function(B){w.status==="pending"&&(w.status="rejected",w.reason=B)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function R(w,B,G,X,te){var re=typeof w;(re==="undefined"||re==="boolean")&&(w=null);var ve=!1;if(w===null)ve=!0;else switch(re){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(w.$$typeof){case s:case o:ve=!0;break;case j:return ve=w._init,R(ve(w._payload),B,G,X,te)}}if(ve)return te=te(w),ve=X===""?"."+Oe(w,0):X,le(te)?(G="",ve!=null&&(G=ve.replace(ht,"$&/")+"/"),R(te,B,G,"",function(il){return il})):te!=null&&(Be(te)&&(te=ft(te,G+(te.key==null||w&&w.key===te.key?"":(""+te.key).replace(ht,"$&/")+"/")+ve)),B.push(te)),1;ve=0;var nt=X===""?".":X+":";if(le(w))for(var Ue=0;Ue<w.length;Ue++)X=w[Ue],re=nt+Oe(X,Ue),ve+=R(X,B,G,re,te);else if(Ue=U(w),typeof Ue=="function")for(w=Ue.call(w),Ue=0;!(X=w.next()).done;)X=X.value,re=nt+Oe(X,Ue++),ve+=R(X,B,G,re,te);else if(re==="object"){if(typeof w.then=="function")return R(tt(w),B,G,X,te);throw B=String(w),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return ve}function Y(w,B,G){if(w==null)return w;var X=[],te=0;return R(w,X,"","",function(re){return B.call(G,re,te++)}),X}function W(w){if(w._status===-1){var B=w._result;B=B(),B.then(function(G){(w._status===0||w._status===-1)&&(w._status=1,w._result=G)},function(G){(w._status===0||w._status===-1)&&(w._status=2,w._result=G)}),w._status===-1&&(w._status=0,w._result=B)}if(w._status===1)return w._result.default;throw w._result}var je=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)},Ce={map:Y,forEach:function(w,B,G){Y(w,function(){B.apply(this,arguments)},G)},count:function(w){var B=0;return Y(w,function(){B++}),B},toArray:function(w){return Y(w,function(B){return B})||[]},only:function(w){if(!Be(w))throw Error("React.Children.only expected to receive a single React element child.");return w}};return P.Activity=b,P.Children=Ce,P.Component=V,P.Fragment=c,P.Profiler=f,P.PureComponent=L,P.StrictMode=u,P.Suspense=y,P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,P.__COMPILER_RUNTIME={__proto__:null,c:function(w){return F.H.useMemoCache(w)}},P.cache=function(w){return function(){return w.apply(null,arguments)}},P.cacheSignal=function(){return null},P.cloneElement=function(w,B,G){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var X=q({},w.props),te=w.key;if(B!=null)for(re in B.key!==void 0&&(te=""+B.key),B)!ye.call(B,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&B.ref===void 0||(X[re]=B[re]);var re=arguments.length-2;if(re===1)X.children=G;else if(1<re){for(var ve=Array(re),nt=0;nt<re;nt++)ve[nt]=arguments[nt+2];X.children=ve}return Se(w.type,te,X)},P.createContext=function(w){return w={$$typeof:p,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:h,_context:w},w},P.createElement=function(w,B,G){var X,te={},re=null;if(B!=null)for(X in B.key!==void 0&&(re=""+B.key),B)ye.call(B,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(te[X]=B[X]);var ve=arguments.length-2;if(ve===1)te.children=G;else if(1<ve){for(var nt=Array(ve),Ue=0;Ue<ve;Ue++)nt[Ue]=arguments[Ue+2];te.children=nt}if(w&&w.defaultProps)for(X in ve=w.defaultProps,ve)te[X]===void 0&&(te[X]=ve[X]);return Se(w,re,te)},P.createRef=function(){return{current:null}},P.forwardRef=function(w){return{$$typeof:v,render:w}},P.isValidElement=Be,P.lazy=function(w){return{$$typeof:j,_payload:{_status:-1,_result:w},_init:W}},P.memo=function(w,B){return{$$typeof:g,type:w,compare:B===void 0?null:B}},P.startTransition=function(w){var B=F.T,G={};F.T=G;try{var X=w(),te=F.S;te!==null&&te(G,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(ce,je)}catch(re){je(re)}finally{B!==null&&G.types!==null&&(B.types=G.types),F.T=B}},P.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},P.use=function(w){return F.H.use(w)},P.useActionState=function(w,B,G){return F.H.useActionState(w,B,G)},P.useCallback=function(w,B){return F.H.useCallback(w,B)},P.useContext=function(w){return F.H.useContext(w)},P.useDebugValue=function(){},P.useDeferredValue=function(w,B){return F.H.useDeferredValue(w,B)},P.useEffect=function(w,B){return F.H.useEffect(w,B)},P.useEffectEvent=function(w){return F.H.useEffectEvent(w)},P.useId=function(){return F.H.useId()},P.useImperativeHandle=function(w,B,G){return F.H.useImperativeHandle(w,B,G)},P.useInsertionEffect=function(w,B){return F.H.useInsertionEffect(w,B)},P.useLayoutEffect=function(w,B){return F.H.useLayoutEffect(w,B)},P.useMemo=function(w,B){return F.H.useMemo(w,B)},P.useOptimistic=function(w,B){return F.H.useOptimistic(w,B)},P.useReducer=function(w,B,G){return F.H.useReducer(w,B,G)},P.useRef=function(w){return F.H.useRef(w)},P.useState=function(w){return F.H.useState(w)},P.useSyncExternalStore=function(w,B,G){return F.H.useSyncExternalStore(w,B,G)},P.useTransition=function(){return F.H.useTransition()},P.version="19.2.2",P}var Hh;function wc(){return Hh||(Hh=1,lc.exports=h0()),lc.exports}var A=wc();const m0=u0(A);var ic={exports:{}},Pl={},rc={exports:{}},sc={};var qh;function p0(){return qh||(qh=1,(function(s){function o(R,Y){var W=R.length;R.push(Y);e:for(;0<W;){var je=W-1>>>1,Ce=R[je];if(0<f(Ce,Y))R[je]=Y,R[W]=Ce,W=je;else break e}}function c(R){return R.length===0?null:R[0]}function u(R){if(R.length===0)return null;var Y=R[0],W=R.pop();if(W!==Y){R[0]=W;e:for(var je=0,Ce=R.length,w=Ce>>>1;je<w;){var B=2*(je+1)-1,G=R[B],X=B+1,te=R[X];if(0>f(G,W))X<Ce&&0>f(te,G)?(R[je]=te,R[X]=W,je=X):(R[je]=G,R[B]=W,je=B);else if(X<Ce&&0>f(te,W))R[je]=te,R[X]=W,je=X;else break e}}return Y}function f(R,Y){var W=R.sortIndex-Y.sortIndex;return W!==0?W:R.id-Y.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;s.unstable_now=function(){return h.now()}}else{var p=Date,v=p.now();s.unstable_now=function(){return p.now()-v}}var y=[],g=[],j=1,b=null,O=3,U=!1,H=!1,q=!1,D=!1,V=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate!="undefined"?setImmediate:null;function ee(R){for(var Y=c(g);Y!==null;){if(Y.callback===null)u(g);else if(Y.startTime<=R)u(g),Y.sortIndex=Y.expirationTime,o(y,Y);else break;Y=c(g)}}function le(R){if(q=!1,ee(R),!H)if(c(y)!==null)H=!0,ce||(ce=!0,pe());else{var Y=c(g);Y!==null&&tt(le,Y.startTime-R)}}var ce=!1,F=-1,ye=5,Se=-1;function ft(){return D?!0:!(s.unstable_now()-Se<ye)}function Be(){if(D=!1,ce){var R=s.unstable_now();Se=R;var Y=!0;try{e:{H=!1,q&&(q=!1,I(F),F=-1),U=!0;var W=O;try{t:{for(ee(R),b=c(y);b!==null&&!(b.expirationTime>R&&ft());){var je=b.callback;if(typeof je=="function"){b.callback=null,O=b.priorityLevel;var Ce=je(b.expirationTime<=R);if(R=s.unstable_now(),typeof Ce=="function"){b.callback=Ce,ee(R),Y=!0;break t}b===c(y)&&u(y),ee(R)}else u(y);b=c(y)}if(b!==null)Y=!0;else{var w=c(g);w!==null&&tt(le,w.startTime-R),Y=!1}}break e}finally{b=null,O=W,U=!1}Y=void 0}}finally{Y?pe():ce=!1}}}var pe;if(typeof L=="function")pe=function(){L(Be)};else if(typeof MessageChannel!="undefined"){var ht=new MessageChannel,Oe=ht.port2;ht.port1.onmessage=Be,pe=function(){Oe.postMessage(null)}}else pe=function(){V(Be,0)};function tt(R,Y){F=V(function(){R(s.unstable_now())},Y)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(R){R.callback=null},s.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ye=0<R?Math.floor(1e3/R):5},s.unstable_getCurrentPriorityLevel=function(){return O},s.unstable_next=function(R){switch(O){case 1:case 2:case 3:var Y=3;break;default:Y=O}var W=O;O=Y;try{return R()}finally{O=W}},s.unstable_requestPaint=function(){D=!0},s.unstable_runWithPriority=function(R,Y){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var W=O;O=R;try{return Y()}finally{O=W}},s.unstable_scheduleCallback=function(R,Y,W){var je=s.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?je+W:je):W=je,R){case 1:var Ce=-1;break;case 2:Ce=250;break;case 5:Ce=1073741823;break;case 4:Ce=1e4;break;default:Ce=5e3}return Ce=W+Ce,R={id:j++,callback:Y,priorityLevel:R,startTime:W,expirationTime:Ce,sortIndex:-1},W>je?(R.sortIndex=W,o(g,R),c(y)===null&&R===c(g)&&(q?(I(F),F=-1):q=!0,tt(le,W-je))):(R.sortIndex=Ce,o(y,R),H||U||(H=!0,ce||(ce=!0,pe()))),R},s.unstable_shouldYield=ft,s.unstable_wrapCallback=function(R){var Y=O;return function(){var W=O;O=Y;try{return R.apply(this,arguments)}finally{O=W}}}})(sc)),sc}var Yh;function g0(){return Yh||(Yh=1,rc.exports=p0()),rc.exports}var oc={exports:{}},at={};var Gh;function y0(){if(Gh)return at;Gh=1;var s=wc();function o(y){var g="https://react.dev/errors/"+y;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var j=2;j<arguments.length;j++)g+="&args[]="+encodeURIComponent(arguments[j])}return"Minified React error #"+y+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var u={d:{f:c,r:function(){throw Error(o(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},f=Symbol.for("react.portal");function h(y,g,j){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:b==null?null:""+b,children:y,containerInfo:g,implementation:j}}var p=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(y,g){if(y==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return at.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,at.createPortal=function(y,g){var j=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(o(299));return h(y,g,null,j)},at.flushSync=function(y){var g=p.T,j=u.p;try{if(p.T=null,u.p=2,y)return y()}finally{p.T=g,u.p=j,u.d.f()}},at.preconnect=function(y,g){typeof y=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,u.d.C(y,g))},at.prefetchDNS=function(y){typeof y=="string"&&u.d.D(y)},at.preinit=function(y,g){if(typeof y=="string"&&g&&typeof g.as=="string"){var j=g.as,b=v(j,g.crossOrigin),O=typeof g.integrity=="string"?g.integrity:void 0,U=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;j==="style"?u.d.S(y,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:b,integrity:O,fetchPriority:U}):j==="script"&&u.d.X(y,{crossOrigin:b,integrity:O,fetchPriority:U,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},at.preinitModule=function(y,g){if(typeof y=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var j=v(g.as,g.crossOrigin);u.d.M(y,{crossOrigin:j,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&u.d.M(y)},at.preload=function(y,g){if(typeof y=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var j=g.as,b=v(j,g.crossOrigin);u.d.L(y,j,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},at.preloadModule=function(y,g){if(typeof y=="string")if(g){var j=v(g.as,g.crossOrigin);u.d.m(y,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:j,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else u.d.m(y)},at.requestFormReset=function(y){u.d.r(y)},at.unstable_batchedUpdates=function(y,g){return y(g)},at.useFormState=function(y,g,j){return p.H.useFormState(y,g,j)},at.useFormStatus=function(){return p.H.useHostTransitionStatus()},at.version="19.2.2",at}var Vh;function v0(){if(Vh)return oc.exports;Vh=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(o){console.error(o)}}return s(),oc.exports=y0(),oc.exports}var Qh;function b0(){if(Qh)return Pl;Qh=1;var s=g0(),o=wc(),c=v0();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(h(e)!==e)throw Error(u(188))}function g(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(u(188));return t!==e?null:e}for(var a=e,n=t;;){var l=a.return;if(l===null)break;var i=l.alternate;if(i===null){if(n=l.return,n!==null){a=n;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===a)return y(l),e;if(i===n)return y(l),t;i=i.sibling}throw Error(u(188))}if(a.return!==n.return)a=l,n=i;else{for(var d=!1,m=l.child;m;){if(m===a){d=!0,a=l,n=i;break}if(m===n){d=!0,n=l,a=i;break}m=m.sibling}if(!d){for(m=i.child;m;){if(m===a){d=!0,a=i,n=l;break}if(m===n){d=!0,n=i,a=l;break}m=m.sibling}if(!d)throw Error(u(189))}}if(a.alternate!==n)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?e:t}function j(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=j(e),t!==null)return t;e=e.sibling}return null}var b=Object.assign,O=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),L=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),ye=Symbol.for("react.lazy"),Se=Symbol.for("react.activity"),ft=Symbol.for("react.memo_cache_sentinel"),Be=Symbol.iterator;function pe(e){return e===null||typeof e!="object"?null:(e=Be&&e[Be]||e["@@iterator"],typeof e=="function"?e:null)}var ht=Symbol.for("react.client.reference");function Oe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ht?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case V:return"Profiler";case D:return"StrictMode";case le:return"Suspense";case ce:return"SuspenseList";case Se:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case H:return"Portal";case L:return e.displayName||"Context";case I:return(e._context.displayName||"Context")+".Consumer";case ee:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return t=e.displayName||null,t!==null?t:Oe(e.type)||"Memo";case ye:t=e._payload,e=e._init;try{return Oe(e(t))}catch(a){}}return null}var tt=Array.isArray,R=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},je=[],Ce=-1;function w(e){return{current:e}}function B(e){0>Ce||(e.current=je[Ce],je[Ce]=null,Ce--)}function G(e,t){Ce++,je[Ce]=e.current,e.current=t}var X=w(null),te=w(null),re=w(null),ve=w(null);function nt(e,t){switch(G(re,t),G(te,e),G(X,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ah(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ah(t),e=nh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}B(X),G(X,e)}function Ue(){B(X),B(te),B(re)}function il(e){e.memoizedState!==null&&G(ve,e);var t=X.current,a=nh(t,e.type);t!==a&&(G(te,e),G(X,a))}function ri(e){te.current===e&&(B(X),B(te)),ve.current===e&&(B(ve),Jl._currentValue=W)}var Ur,Dc;function Xa(e){if(Ur===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Ur=t&&t[1]||"",Dc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ur+e+Dc}var Lr=!1;function Hr(e,t){if(!e||Lr)return"";Lr=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var k=function(){throw Error()};if(Object.defineProperty(k.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(k,[])}catch(z){var T=z}Reflect.construct(e,[],k)}else{try{k.call()}catch(z){T=z}e.call(k.prototype)}}else{try{throw Error()}catch(z){T=z}(k=e())&&typeof k.catch=="function"&&k.catch(function(){})}}catch(z){if(z&&T&&typeof z.stack=="string")return[z.stack,T.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=n.DetermineComponentFrameRoot(),d=i[0],m=i[1];if(d&&m){var x=d.split(`
`),N=m.split(`
`);for(l=n=0;n<x.length&&!x[n].includes("DetermineComponentFrameRoot");)n++;for(;l<N.length&&!N[l].includes("DetermineComponentFrameRoot");)l++;if(n===x.length||l===N.length)for(n=x.length-1,l=N.length-1;1<=n&&0<=l&&x[n]!==N[l];)l--;for(;1<=n&&0<=l;n--,l--)if(x[n]!==N[l]){if(n!==1||l!==1)do if(n--,l--,0>l||x[n]!==N[l]){var M=`
`+x[n].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=n&&0<=l);break}}}finally{Lr=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Xa(a):""}function Um(e,t){switch(e.tag){case 26:case 27:case 5:return Xa(e.type);case 16:return Xa("Lazy");case 13:return e.child!==t&&t!==null?Xa("Suspense Fallback"):Xa("Suspense");case 19:return Xa("SuspenseList");case 0:case 15:return Hr(e.type,!1);case 11:return Hr(e.type.render,!1);case 1:return Hr(e.type,!0);case 31:return Xa("Activity");default:return""}}function Mc(e){try{var t="",a=null;do t+=Um(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var qr=Object.prototype.hasOwnProperty,Yr=s.unstable_scheduleCallback,Gr=s.unstable_cancelCallback,Lm=s.unstable_shouldYield,Hm=s.unstable_requestPaint,mt=s.unstable_now,qm=s.unstable_getCurrentPriorityLevel,Rc=s.unstable_ImmediatePriority,_c=s.unstable_UserBlockingPriority,si=s.unstable_NormalPriority,Ym=s.unstable_LowPriority,kc=s.unstable_IdlePriority,Gm=s.log,Vm=s.unstable_setDisableYieldValue,rl=null,pt=null;function va(e){if(typeof Gm=="function"&&Vm(e),pt&&typeof pt.setStrictMode=="function")try{pt.setStrictMode(rl,e)}catch(t){}}var gt=Math.clz32?Math.clz32:Zm,Qm=Math.log,Xm=Math.LN2;function Zm(e){return e>>>=0,e===0?32:31-(Qm(e)/Xm|0)|0}var oi=256,ci=262144,ui=4194304;function Za(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function di(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var l=0,i=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var m=n&134217727;return m!==0?(n=m&~i,n!==0?l=Za(n):(d&=m,d!==0?l=Za(d):a||(a=m&~e,a!==0&&(l=Za(a))))):(m=n&~i,m!==0?l=Za(m):d!==0?l=Za(d):a||(a=n&~e,a!==0&&(l=Za(a)))),l===0?0:t!==0&&t!==l&&(t&i)===0&&(i=l&-l,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:l}function sl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Fm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bc(){var e=ui;return ui<<=1,(ui&62914560)===0&&(ui=4194304),e}function Vr(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function ol(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Jm(e,t,a,n,l,i){var d=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var m=e.entanglements,x=e.expirationTimes,N=e.hiddenUpdates;for(a=d&~a;0<a;){var M=31-gt(a),k=1<<M;m[M]=0,x[M]=-1;var T=N[M];if(T!==null)for(N[M]=null,M=0;M<T.length;M++){var z=T[M];z!==null&&(z.lane&=-536870913)}a&=~k}n!==0&&Uc(e,n,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(d&~t))}function Uc(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-gt(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function Lc(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-gt(a),l=1<<n;l&t|e[n]&t&&(e[n]|=t),a&=~l}}function Hc(e,t){var a=t&-t;return a=(a&42)!==0?1:Qr(a),(a&(e.suspendedLanes|t))!==0?0:a}function Qr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Xr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function qc(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:Ch(e.type))}function Yc(e,t){var a=Y.p;try{return Y.p=e,t()}finally{Y.p=a}}var ba=Math.random().toString(36).slice(2),We="__reactFiber$"+ba,it="__reactProps$"+ba,mn="__reactContainer$"+ba,Zr="__reactEvents$"+ba,Km="__reactListeners$"+ba,Wm="__reactHandles$"+ba,Gc="__reactResources$"+ba,cl="__reactMarker$"+ba;function Fr(e){delete e[We],delete e[it],delete e[Zr],delete e[Km],delete e[Wm]}function pn(e){var t=e[We];if(t)return t;for(var a=e.parentNode;a;){if(t=a[mn]||a[We]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=uh(e);e!==null;){if(a=e[We])return a;e=uh(e)}return t}e=a,a=e.parentNode}return null}function gn(e){if(e=e[We]||e[mn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function ul(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function yn(e){var t=e[Gc];return t||(t=e[Gc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Je(e){e[cl]=!0}var Vc=new Set,Qc={};function Fa(e,t){vn(e,t),vn(e+"Capture",t)}function vn(e,t){for(Qc[e]=t,e=0;e<t.length;e++)Vc.add(t[e])}var $m=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xc={},Zc={};function Im(e){return qr.call(Zc,e)?!0:qr.call(Xc,e)?!1:$m.test(e)?Zc[e]=!0:(Xc[e]=!0,!1)}function fi(e,t,a){if(Im(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function hi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function $t(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function Ct(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Pm(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(d){a=""+d,i.call(this,d)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(d){a=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Jr(e){if(!e._valueTracker){var t=Fc(e)?"checked":"value";e._valueTracker=Pm(e,t,""+e[t])}}function Jc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=Fc(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function mi(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch(t){return e.body}}var ep=/[\n"\\]/g;function Nt(e){return e.replace(ep,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Kr(e,t,a,n,l,i,d,m){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ct(t)):e.value!==""+Ct(t)&&(e.value=""+Ct(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?Wr(e,d,Ct(t)):a!=null?Wr(e,d,Ct(a)):n!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+Ct(m):e.removeAttribute("name")}function Kc(e,t,a,n,l,i,d,m){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Jr(e);return}a=a!=null?""+Ct(a):"",t=t!=null?""+Ct(t):a,m||t===e.value||(e.value=t),e.defaultValue=t}n=n!=null?n:l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=m?e.checked:!!n,e.defaultChecked=!!n,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),Jr(e)}function Wr(e,t,a){t==="number"&&mi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function bn(e,t,a,n){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&n&&(e[a].defaultSelected=!0)}else{for(a=""+Ct(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Wc(e,t,a){if(t!=null&&(t=""+Ct(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Ct(a):""}function $c(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(u(92));if(tt(n)){if(1<n.length)throw Error(u(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=Ct(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),Jr(e)}function xn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var tp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ic(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||tp.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Pc(e,t,a){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var l in t)n=t[l],t.hasOwnProperty(l)&&a[l]!==n&&Ic(e,l,n)}else for(var i in t)t.hasOwnProperty(i)&&Ic(e,i,t[i])}function $r(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ap=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),np=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pi(e){return np.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function It(){}var Ir=null;function Pr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sn=null,jn=null;function eu(e){var t=gn(e);if(t&&(e=t.stateNode)){var a=e[it]||null;e:switch(e=t.stateNode,t.type){case"input":if(Kr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Nt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var l=n[it]||null;if(!l)throw Error(u(90));Kr(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&Jc(n)}break e;case"textarea":Wc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&bn(e,!!a.multiple,t,!1)}}}var es=!1;function tu(e,t,a){if(es)return e(t,a);es=!0;try{var n=e(t);return n}finally{if(es=!1,(Sn!==null||jn!==null)&&(ar(),Sn&&(t=Sn,e=jn,jn=Sn=null,eu(t),e)))for(t=0;t<e.length;t++)eu(e[t])}}function dl(e,t){var a=e.stateNode;if(a===null)return null;var n=a[it]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(u(231,t,typeof a));return a}var Pt=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),ts=!1;if(Pt)try{var fl={};Object.defineProperty(fl,"passive",{get:function(){ts=!0}}),window.addEventListener("test",fl,fl),window.removeEventListener("test",fl,fl)}catch(e){ts=!1}var xa=null,as=null,gi=null;function au(){if(gi)return gi;var e,t=as,a=t.length,n,l="value"in xa?xa.value:xa.textContent,i=l.length;for(e=0;e<a&&t[e]===l[e];e++);var d=a-e;for(n=1;n<=d&&t[a-n]===l[i-n];n++);return gi=l.slice(e,1<n?1-n:void 0)}function yi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vi(){return!0}function nu(){return!1}function rt(e){function t(a,n,l,i,d){this._reactName=a,this._targetInst=l,this.type=n,this.nativeEvent=i,this.target=d,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(a=e[m],this[m]=a?a(i):i[m]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?vi:nu,this.isPropagationStopped=nu,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=vi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=vi)},persist:function(){},isPersistent:vi}),t}var Ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bi=rt(Ja),hl=b({},Ja,{view:0,detail:0}),lp=rt(hl),ns,ls,ml,xi=b({},hl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ml&&(ml&&e.type==="mousemove"?(ns=e.screenX-ml.screenX,ls=e.screenY-ml.screenY):ls=ns=0,ml=e),ns)},movementY:function(e){return"movementY"in e?e.movementY:ls}}),lu=rt(xi),ip=b({},xi,{dataTransfer:0}),rp=rt(ip),sp=b({},hl,{relatedTarget:0}),is=rt(sp),op=b({},Ja,{animationName:0,elapsedTime:0,pseudoElement:0}),cp=rt(op),up=b({},Ja,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dp=rt(up),fp=b({},Ja,{data:0}),iu=rt(fp),hp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=pp[e])?!!t[e]:!1}function rs(){return gp}var yp=b({},hl,{key:function(e){if(e.key){var t=hp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=yi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rs,charCode:function(e){return e.type==="keypress"?yi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vp=rt(yp),bp=b({},xi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ru=rt(bp),xp=b({},hl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rs}),Sp=rt(xp),jp=b({},Ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),wp=rt(jp),Ep=b({},xi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ap=rt(Ep),Cp=b({},Ja,{newState:0,oldState:0}),Np=rt(Cp),Tp=[9,13,27,32],ss=Pt&&"CompositionEvent"in window,pl=null;Pt&&"documentMode"in document&&(pl=document.documentMode);var zp=Pt&&"TextEvent"in window&&!pl,su=Pt&&(!ss||pl&&8<pl&&11>=pl),ou=" ",cu=!1;function uu(e,t){switch(e){case"keyup":return Tp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function du(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wn=!1;function Op(e,t){switch(e){case"compositionend":return du(t);case"keypress":return t.which!==32?null:(cu=!0,ou);case"textInput":return e=t.data,e===ou&&cu?null:e;default:return null}}function Dp(e,t){if(wn)return e==="compositionend"||!ss&&uu(e,t)?(e=au(),gi=as=xa=null,wn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return su&&t.locale!=="ko"?null:t.data;default:return null}}var Mp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Mp[e.type]:t==="textarea"}function hu(e,t,a,n){Sn?jn?jn.push(n):jn=[n]:Sn=n,t=cr(t,"onChange"),0<t.length&&(a=new bi("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var gl=null,yl=null;function Rp(e){Wf(e,0)}function Si(e){var t=ul(e);if(Jc(t))return e}function mu(e,t){if(e==="change")return t}var pu=!1;if(Pt){var os;if(Pt){var cs="oninput"in document;if(!cs){var gu=document.createElement("div");gu.setAttribute("oninput","return;"),cs=typeof gu.oninput=="function"}os=cs}else os=!1;pu=os&&(!document.documentMode||9<document.documentMode)}function yu(){gl&&(gl.detachEvent("onpropertychange",vu),yl=gl=null)}function vu(e){if(e.propertyName==="value"&&Si(yl)){var t=[];hu(t,yl,e,Pr(e)),tu(Rp,t)}}function _p(e,t,a){e==="focusin"?(yu(),gl=t,yl=a,gl.attachEvent("onpropertychange",vu)):e==="focusout"&&yu()}function kp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Si(yl)}function Bp(e,t){if(e==="click")return Si(t)}function Up(e,t){if(e==="input"||e==="change")return Si(t)}function Lp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yt=typeof Object.is=="function"?Object.is:Lp;function vl(e,t){if(yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var l=a[n];if(!qr.call(t,l)||!yt(e[l],t[l]))return!1}return!0}function bu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xu(e,t){var a=bu(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=bu(a)}}function Su(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Su(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ju(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=mi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch(n){a=!1}if(a)e=t.contentWindow;else break;t=mi(e.document)}return t}function us(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Hp=Pt&&"documentMode"in document&&11>=document.documentMode,En=null,ds=null,bl=null,fs=!1;function wu(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;fs||En==null||En!==mi(n)||(n=En,"selectionStart"in n&&us(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),bl&&vl(bl,n)||(bl=n,n=cr(ds,"onSelect"),0<n.length&&(t=new bi("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=En)))}function Ka(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var An={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionrun:Ka("Transition","TransitionRun"),transitionstart:Ka("Transition","TransitionStart"),transitioncancel:Ka("Transition","TransitionCancel"),transitionend:Ka("Transition","TransitionEnd")},hs={},Eu={};Pt&&(Eu=document.createElement("div").style,"AnimationEvent"in window||(delete An.animationend.animation,delete An.animationiteration.animation,delete An.animationstart.animation),"TransitionEvent"in window||delete An.transitionend.transition);function Wa(e){if(hs[e])return hs[e];if(!An[e])return e;var t=An[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Eu)return hs[e]=t[a];return e}var Au=Wa("animationend"),Cu=Wa("animationiteration"),Nu=Wa("animationstart"),qp=Wa("transitionrun"),Yp=Wa("transitionstart"),Gp=Wa("transitioncancel"),Tu=Wa("transitionend"),zu=new Map,ms="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ms.push("scrollEnd");function Ht(e,t){zu.set(e,t),Fa(t,[e])}var ji=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Tt=[],Cn=0,ps=0;function wi(){for(var e=Cn,t=ps=Cn=0;t<e;){var a=Tt[t];Tt[t++]=null;var n=Tt[t];Tt[t++]=null;var l=Tt[t];Tt[t++]=null;var i=Tt[t];if(Tt[t++]=null,n!==null&&l!==null){var d=n.pending;d===null?l.next=l:(l.next=d.next,d.next=l),n.pending=l}i!==0&&Ou(a,l,i)}}function Ei(e,t,a,n){Tt[Cn++]=e,Tt[Cn++]=t,Tt[Cn++]=a,Tt[Cn++]=n,ps|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function gs(e,t,a,n){return Ei(e,t,a,n),Ai(e)}function $a(e,t){return Ei(e,null,null,t),Ai(e)}function Ou(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var l=!1,i=e.return;i!==null;)i.childLanes|=a,n=i.alternate,n!==null&&(n.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&t!==null&&(l=31-gt(a),e=i.hiddenUpdates,n=e[l],n===null?e[l]=[t]:n.push(t),t.lane=a|536870912),i):null}function Ai(e){if(50<Yl)throw Yl=0,Co=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Nn={};function Vp(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,a,n){return new Vp(e,t,a,n)}function ys(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ea(e,t){var a=e.alternate;return a===null?(a=vt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Du(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ci(e,t,a,n,l,i){var d=0;if(n=e,typeof e=="function")ys(e)&&(d=1);else if(typeof e=="string")d=Jg(e,a,X.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Se:return e=vt(31,a,t,l),e.elementType=Se,e.lanes=i,e;case q:return Ia(a.children,l,i,t);case D:d=8,l|=24;break;case V:return e=vt(12,a,t,l|2),e.elementType=V,e.lanes=i,e;case le:return e=vt(13,a,t,l),e.elementType=le,e.lanes=i,e;case ce:return e=vt(19,a,t,l),e.elementType=ce,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:d=10;break e;case I:d=9;break e;case ee:d=11;break e;case F:d=14;break e;case ye:d=16,n=null;break e}d=29,a=Error(u(130,e===null?"null":typeof e,"")),n=null}return t=vt(d,a,t,l),t.elementType=e,t.type=n,t.lanes=i,t}function Ia(e,t,a,n){return e=vt(7,e,n,t),e.lanes=a,e}function vs(e,t,a){return e=vt(6,e,null,t),e.lanes=a,e}function Mu(e){var t=vt(18,null,null,0);return t.stateNode=e,t}function bs(e,t,a){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ru=new WeakMap;function zt(e,t){if(typeof e=="object"&&e!==null){var a=Ru.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Mc(t)},Ru.set(e,t),t)}return{value:e,source:t,stack:Mc(t)}}var Tn=[],zn=0,Ni=null,xl=0,Ot=[],Dt=0,Sa=null,Qt=1,Xt="";function ta(e,t){Tn[zn++]=xl,Tn[zn++]=Ni,Ni=e,xl=t}function _u(e,t,a){Ot[Dt++]=Qt,Ot[Dt++]=Xt,Ot[Dt++]=Sa,Sa=e;var n=Qt;e=Xt;var l=32-gt(n)-1;n&=~(1<<l),a+=1;var i=32-gt(t)+l;if(30<i){var d=l-l%5;i=(n&(1<<d)-1).toString(32),n>>=d,l-=d,Qt=1<<32-gt(t)+l|a<<l|n,Xt=i+e}else Qt=1<<i|a<<l|n,Xt=e}function xs(e){e.return!==null&&(ta(e,1),_u(e,1,0))}function Ss(e){for(;e===Ni;)Ni=Tn[--zn],Tn[zn]=null,xl=Tn[--zn],Tn[zn]=null;for(;e===Sa;)Sa=Ot[--Dt],Ot[Dt]=null,Xt=Ot[--Dt],Ot[Dt]=null,Qt=Ot[--Dt],Ot[Dt]=null}function ku(e,t){Ot[Dt++]=Qt,Ot[Dt++]=Xt,Ot[Dt++]=Sa,Qt=t.id,Xt=t.overflow,Sa=e}var $e=null,Te=null,fe=!1,ja=null,Mt=!1,js=Error(u(519));function wa(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Sl(zt(t,e)),js}function Bu(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[We]=e,t[it]=n,a){case"dialog":oe("cancel",t),oe("close",t);break;case"iframe":case"object":case"embed":oe("load",t);break;case"video":case"audio":for(a=0;a<Vl.length;a++)oe(Vl[a],t);break;case"source":oe("error",t);break;case"img":case"image":case"link":oe("error",t),oe("load",t);break;case"details":oe("toggle",t);break;case"input":oe("invalid",t),Kc(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":oe("invalid",t);break;case"textarea":oe("invalid",t),$c(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||eh(t.textContent,a)?(n.popover!=null&&(oe("beforetoggle",t),oe("toggle",t)),n.onScroll!=null&&oe("scroll",t),n.onScrollEnd!=null&&oe("scrollend",t),n.onClick!=null&&(t.onclick=It),t=!0):t=!1,t||wa(e,!0)}function Uu(e){for($e=e.return;$e;)switch($e.tag){case 5:case 31:case 13:Mt=!1;return;case 27:case 3:Mt=!0;return;default:$e=$e.return}}function On(e){if(e!==$e)return!1;if(!fe)return Uu(e),fe=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Yo(e.type,e.memoizedProps)),a=!a),a&&Te&&wa(e),Uu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Te=ch(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Te=ch(e)}else t===27?(t=Te,Ua(e.type)?(e=Zo,Zo=null,Te=e):Te=t):Te=$e?_t(e.stateNode.nextSibling):null;return!0}function Pa(){Te=$e=null,fe=!1}function ws(){var e=ja;return e!==null&&(ut===null?ut=e:ut.push.apply(ut,e),ja=null),e}function Sl(e){ja===null?ja=[e]:ja.push(e)}var Es=w(null),en=null,aa=null;function Ea(e,t,a){G(Es,t._currentValue),t._currentValue=a}function na(e){e._currentValue=Es.current,B(Es)}function As(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Cs(e,t,a,n){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var d=l.child;i=i.firstContext;e:for(;i!==null;){var m=i;i=l;for(var x=0;x<t.length;x++)if(m.context===t[x]){i.lanes|=a,m=i.alternate,m!==null&&(m.lanes|=a),As(i.return,a,e),n||(d=null);break e}i=m.next}}else if(l.tag===18){if(d=l.return,d===null)throw Error(u(341));d.lanes|=a,i=d.alternate,i!==null&&(i.lanes|=a),As(d,a,e),d=null}else d=l.child;if(d!==null)d.return=l;else for(d=l;d!==null;){if(d===e){d=null;break}if(l=d.sibling,l!==null){l.return=d.return,d=l;break}d=d.return}l=d}}function Dn(e,t,a,n){e=null;for(var l=t,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var d=l.alternate;if(d===null)throw Error(u(387));if(d=d.memoizedProps,d!==null){var m=l.type;yt(l.pendingProps.value,d.value)||(e!==null?e.push(m):e=[m])}}else if(l===ve.current){if(d=l.alternate,d===null)throw Error(u(387));d.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Jl):e=[Jl])}l=l.return}e!==null&&Cs(t,e,a,n),t.flags|=262144}function Ti(e){for(e=e.firstContext;e!==null;){if(!yt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function tn(e){en=e,aa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ie(e){return Lu(en,e)}function zi(e,t){return en===null&&tn(e),Lu(e,t)}function Lu(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},aa===null){if(e===null)throw Error(u(308));aa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else aa=aa.next=t;return a}var Qp=typeof AbortController!="undefined"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Xp=s.unstable_scheduleCallback,Zp=s.unstable_NormalPriority,Ye={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ns(){return{controller:new Qp,data:new Map,refCount:0}}function jl(e){e.refCount--,e.refCount===0&&Xp(Zp,function(){e.controller.abort()})}var wl=null,Ts=0,Mn=0,Rn=null;function Fp(e,t){if(wl===null){var a=wl=[];Ts=0,Mn=Mo(),Rn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Ts++,t.then(Hu,Hu),t}function Hu(){if(--Ts===0&&wl!==null){Rn!==null&&(Rn.status="fulfilled");var e=wl;wl=null,Mn=0,Rn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Jp(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(n.status="rejected",n.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),n}var qu=R.S;R.S=function(e,t){Ef=mt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Fp(e,t),qu!==null&&qu(e,t)};var an=w(null);function zs(){var e=an.current;return e!==null?e:Ne.pooledCache}function Oi(e,t){t===null?G(an,an.current):G(an,t.pool)}function Yu(){var e=zs();return e===null?null:{parent:Ye._currentValue,pool:e}}var _n=Error(u(460)),Os=Error(u(474)),Di=Error(u(542)),Mi={then:function(){}};function Gu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Vu(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(It,It),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Xu(e),e;default:if(typeof t.status=="string")t.then(It,It);else{if(e=Ne,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=n}},function(n){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Xu(e),e}throw ln=t,_n}}function nn(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ln=a,_n):a}}var ln=null;function Qu(){if(ln===null)throw Error(u(459));var e=ln;return ln=null,e}function Xu(e){if(e===_n||e===Di)throw Error(u(483))}var kn=null,El=0;function Ri(e){var t=El;return El+=1,kn===null&&(kn=[]),Vu(kn,e,t)}function Al(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function _i(e,t){throw t.$$typeof===O?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Zu(e){function t(E,S){if(e){var C=E.deletions;C===null?(E.deletions=[S],E.flags|=16):C.push(S)}}function a(E,S){if(!e)return null;for(;S!==null;)t(E,S),S=S.sibling;return null}function n(E){for(var S=new Map;E!==null;)E.key!==null?S.set(E.key,E):S.set(E.index,E),E=E.sibling;return S}function l(E,S){return E=ea(E,S),E.index=0,E.sibling=null,E}function i(E,S,C){return E.index=C,e?(C=E.alternate,C!==null?(C=C.index,C<S?(E.flags|=67108866,S):C):(E.flags|=67108866,S)):(E.flags|=1048576,S)}function d(E){return e&&E.alternate===null&&(E.flags|=67108866),E}function m(E,S,C,_){return S===null||S.tag!==6?(S=vs(C,E.mode,_),S.return=E,S):(S=l(S,C),S.return=E,S)}function x(E,S,C,_){var J=C.type;return J===q?M(E,S,C.props.children,_,C.key):S!==null&&(S.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===ye&&nn(J)===S.type)?(S=l(S,C.props),Al(S,C),S.return=E,S):(S=Ci(C.type,C.key,C.props,null,E.mode,_),Al(S,C),S.return=E,S)}function N(E,S,C,_){return S===null||S.tag!==4||S.stateNode.containerInfo!==C.containerInfo||S.stateNode.implementation!==C.implementation?(S=bs(C,E.mode,_),S.return=E,S):(S=l(S,C.children||[]),S.return=E,S)}function M(E,S,C,_,J){return S===null||S.tag!==7?(S=Ia(C,E.mode,_,J),S.return=E,S):(S=l(S,C),S.return=E,S)}function k(E,S,C){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=vs(""+S,E.mode,C),S.return=E,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case U:return C=Ci(S.type,S.key,S.props,null,E.mode,C),Al(C,S),C.return=E,C;case H:return S=bs(S,E.mode,C),S.return=E,S;case ye:return S=nn(S),k(E,S,C)}if(tt(S)||pe(S))return S=Ia(S,E.mode,C,null),S.return=E,S;if(typeof S.then=="function")return k(E,Ri(S),C);if(S.$$typeof===L)return k(E,zi(E,S),C);_i(E,S)}return null}function T(E,S,C,_){var J=S!==null?S.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return J!==null?null:m(E,S,""+C,_);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case U:return C.key===J?x(E,S,C,_):null;case H:return C.key===J?N(E,S,C,_):null;case ye:return C=nn(C),T(E,S,C,_)}if(tt(C)||pe(C))return J!==null?null:M(E,S,C,_,null);if(typeof C.then=="function")return T(E,S,Ri(C),_);if(C.$$typeof===L)return T(E,S,zi(E,C),_);_i(E,C)}return null}function z(E,S,C,_,J){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return E=E.get(C)||null,m(S,E,""+_,J);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case U:return E=E.get(_.key===null?C:_.key)||null,x(S,E,_,J);case H:return E=E.get(_.key===null?C:_.key)||null,N(S,E,_,J);case ye:return _=nn(_),z(E,S,C,_,J)}if(tt(_)||pe(_))return E=E.get(C)||null,M(S,E,_,J,null);if(typeof _.then=="function")return z(E,S,C,Ri(_),J);if(_.$$typeof===L)return z(E,S,C,zi(S,_),J);_i(S,_)}return null}function Q(E,S,C,_){for(var J=null,he=null,Z=S,ne=S=0,de=null;Z!==null&&ne<C.length;ne++){Z.index>ne?(de=Z,Z=null):de=Z.sibling;var me=T(E,Z,C[ne],_);if(me===null){Z===null&&(Z=de);break}e&&Z&&me.alternate===null&&t(E,Z),S=i(me,S,ne),he===null?J=me:he.sibling=me,he=me,Z=de}if(ne===C.length)return a(E,Z),fe&&ta(E,ne),J;if(Z===null){for(;ne<C.length;ne++)Z=k(E,C[ne],_),Z!==null&&(S=i(Z,S,ne),he===null?J=Z:he.sibling=Z,he=Z);return fe&&ta(E,ne),J}for(Z=n(Z);ne<C.length;ne++)de=z(Z,E,ne,C[ne],_),de!==null&&(e&&de.alternate!==null&&Z.delete(de.key===null?ne:de.key),S=i(de,S,ne),he===null?J=de:he.sibling=de,he=de);return e&&Z.forEach(function(Ga){return t(E,Ga)}),fe&&ta(E,ne),J}function K(E,S,C,_){if(C==null)throw Error(u(151));for(var J=null,he=null,Z=S,ne=S=0,de=null,me=C.next();Z!==null&&!me.done;ne++,me=C.next()){Z.index>ne?(de=Z,Z=null):de=Z.sibling;var Ga=T(E,Z,me.value,_);if(Ga===null){Z===null&&(Z=de);break}e&&Z&&Ga.alternate===null&&t(E,Z),S=i(Ga,S,ne),he===null?J=Ga:he.sibling=Ga,he=Ga,Z=de}if(me.done)return a(E,Z),fe&&ta(E,ne),J;if(Z===null){for(;!me.done;ne++,me=C.next())me=k(E,me.value,_),me!==null&&(S=i(me,S,ne),he===null?J=me:he.sibling=me,he=me);return fe&&ta(E,ne),J}for(Z=n(Z);!me.done;ne++,me=C.next())me=z(Z,E,ne,me.value,_),me!==null&&(e&&me.alternate!==null&&Z.delete(me.key===null?ne:me.key),S=i(me,S,ne),he===null?J=me:he.sibling=me,he=me);return e&&Z.forEach(function(i0){return t(E,i0)}),fe&&ta(E,ne),J}function Ae(E,S,C,_){if(typeof C=="object"&&C!==null&&C.type===q&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case U:e:{for(var J=C.key;S!==null;){if(S.key===J){if(J=C.type,J===q){if(S.tag===7){a(E,S.sibling),_=l(S,C.props.children),_.return=E,E=_;break e}}else if(S.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===ye&&nn(J)===S.type){a(E,S.sibling),_=l(S,C.props),Al(_,C),_.return=E,E=_;break e}a(E,S);break}else t(E,S);S=S.sibling}C.type===q?(_=Ia(C.props.children,E.mode,_,C.key),_.return=E,E=_):(_=Ci(C.type,C.key,C.props,null,E.mode,_),Al(_,C),_.return=E,E=_)}return d(E);case H:e:{for(J=C.key;S!==null;){if(S.key===J)if(S.tag===4&&S.stateNode.containerInfo===C.containerInfo&&S.stateNode.implementation===C.implementation){a(E,S.sibling),_=l(S,C.children||[]),_.return=E,E=_;break e}else{a(E,S);break}else t(E,S);S=S.sibling}_=bs(C,E.mode,_),_.return=E,E=_}return d(E);case ye:return C=nn(C),Ae(E,S,C,_)}if(tt(C))return Q(E,S,C,_);if(pe(C)){if(J=pe(C),typeof J!="function")throw Error(u(150));return C=J.call(C),K(E,S,C,_)}if(typeof C.then=="function")return Ae(E,S,Ri(C),_);if(C.$$typeof===L)return Ae(E,S,zi(E,C),_);_i(E,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,S!==null&&S.tag===6?(a(E,S.sibling),_=l(S,C),_.return=E,E=_):(a(E,S),_=vs(C,E.mode,_),_.return=E,E=_),d(E)):a(E,S)}return function(E,S,C,_){try{El=0;var J=Ae(E,S,C,_);return kn=null,J}catch(Z){if(Z===_n||Z===Di)throw Z;var he=vt(29,Z,null,E.mode);return he.lanes=_,he.return=E,he}finally{}}}var rn=Zu(!0),Fu=Zu(!1),Aa=!1;function Ds(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ms(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ca(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Na(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(ge&2)!==0){var l=n.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),n.pending=t,t=Ai(e),Ou(e,null,a),t}return Ei(e,n,t,a),Ai(e)}function Cl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Lc(e,a)}}function Rs(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var l=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var d={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?l=i=d:i=i.next=d,a=a.next}while(a!==null);i===null?l=i=t:i=i.next=t}else l=i=t;a={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var _s=!1;function Nl(){if(_s){var e=Rn;if(e!==null)throw e}}function Tl(e,t,a,n){_s=!1;var l=e.updateQueue;Aa=!1;var i=l.firstBaseUpdate,d=l.lastBaseUpdate,m=l.shared.pending;if(m!==null){l.shared.pending=null;var x=m,N=x.next;x.next=null,d===null?i=N:d.next=N,d=x;var M=e.alternate;M!==null&&(M=M.updateQueue,m=M.lastBaseUpdate,m!==d&&(m===null?M.firstBaseUpdate=N:m.next=N,M.lastBaseUpdate=x))}if(i!==null){var k=l.baseState;d=0,M=N=x=null,m=i;do{var T=m.lane&-536870913,z=T!==m.lane;if(z?(ue&T)===T:(n&T)===T){T!==0&&T===Mn&&(_s=!0),M!==null&&(M=M.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var Q=e,K=m;T=t;var Ae=a;switch(K.tag){case 1:if(Q=K.payload,typeof Q=="function"){k=Q.call(Ae,k,T);break e}k=Q;break e;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=K.payload,T=typeof Q=="function"?Q.call(Ae,k,T):Q,T==null)break e;k=b({},k,T);break e;case 2:Aa=!0}}T=m.callback,T!==null&&(e.flags|=64,z&&(e.flags|=8192),z=l.callbacks,z===null?l.callbacks=[T]:z.push(T))}else z={lane:T,tag:m.tag,payload:m.payload,callback:m.callback,next:null},M===null?(N=M=z,x=k):M=M.next=z,d|=T;if(m=m.next,m===null){if(m=l.shared.pending,m===null)break;z=m,m=z.next,z.next=null,l.lastBaseUpdate=z,l.shared.pending=null}}while(!0);M===null&&(x=k),l.baseState=x,l.firstBaseUpdate=N,l.lastBaseUpdate=M,i===null&&(l.shared.lanes=0),Ma|=d,e.lanes=d,e.memoizedState=k}}function Ju(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Ku(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Ju(a[e],t)}var Bn=w(null),ki=w(0);function Wu(e,t){e=fa,G(ki,e),G(Bn,t),fa=e|t.baseLanes}function ks(){G(ki,fa),G(Bn,Bn.current)}function Bs(){fa=ki.current,B(Bn),B(ki)}var bt=w(null),Rt=null;function Ta(e){var t=e.alternate;G(Le,Le.current&1),G(bt,e),Rt===null&&(t===null||Bn.current!==null||t.memoizedState!==null)&&(Rt=e)}function Us(e){G(Le,Le.current),G(bt,e),Rt===null&&(Rt=e)}function $u(e){e.tag===22?(G(Le,Le.current),G(bt,e),Rt===null&&(Rt=e)):za()}function za(){G(Le,Le.current),G(bt,bt.current)}function xt(e){B(bt),Rt===e&&(Rt=null),B(Le)}var Le=w(0);function Bi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Qo(a)||Xo(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var la=0,ae=null,we=null,Ge=null,Ui=!1,Un=!1,sn=!1,Li=0,zl=0,Ln=null,Kp=0;function _e(){throw Error(u(321))}function Ls(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!yt(e[a],t[a]))return!1;return!0}function Hs(e,t,a,n,l,i){return la=i,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?_d:eo,sn=!1,i=a(n,l),sn=!1,Un&&(i=Pu(t,a,n,l)),Iu(e),i}function Iu(e){R.H=Ml;var t=we!==null&&we.next!==null;if(la=0,Ge=we=ae=null,Ui=!1,zl=0,Ln=null,t)throw Error(u(300));e===null||Ve||(e=e.dependencies,e!==null&&Ti(e)&&(Ve=!0))}function Pu(e,t,a,n){ae=e;var l=0;do{if(Un&&(Ln=null),zl=0,Un=!1,25<=l)throw Error(u(301));if(l+=1,Ge=we=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}R.H=kd,i=t(a,n)}while(Un);return i}function Wp(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?Ol(t):t,e=e.useState()[0],(we!==null?we.memoizedState:null)!==e&&(ae.flags|=1024),t}function qs(){var e=Li!==0;return Li=0,e}function Ys(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Gs(e){if(Ui){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ui=!1}la=0,Ge=we=ae=null,Un=!1,zl=Li=0,Ln=null}function lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?ae.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function He(){if(we===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var t=Ge===null?ae.memoizedState:Ge.next;if(t!==null)Ge=t,we=e;else{if(e===null)throw ae.alternate===null?Error(u(467)):Error(u(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},Ge===null?ae.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function Hi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ol(e){var t=zl;return zl+=1,Ln===null&&(Ln=[]),e=Vu(Ln,e,t),t=ae,(Ge===null?t.memoizedState:Ge.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?_d:eo),e}function qi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ol(e);if(e.$$typeof===L)return Ie(e)}throw Error(u(438,String(e)))}function Vs(e){var t=null,a=ae.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=ae.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Hi(),ae.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=ft;return t.index++,a}function ia(e,t){return typeof t=="function"?t(e):t}function Yi(e){var t=He();return Qs(t,we,e)}function Qs(e,t,a){var n=e.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=a;var l=e.baseQueue,i=n.pending;if(i!==null){if(l!==null){var d=l.next;l.next=i.next,i.next=d}t.baseQueue=l=i,n.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{t=l.next;var m=d=null,x=null,N=t,M=!1;do{var k=N.lane&-536870913;if(k!==N.lane?(ue&k)===k:(la&k)===k){var T=N.revertLane;if(T===0)x!==null&&(x=x.next={lane:0,revertLane:0,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),k===Mn&&(M=!0);else if((la&T)===T){N=N.next,T===Mn&&(M=!0);continue}else k={lane:0,revertLane:N.revertLane,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},x===null?(m=x=k,d=i):x=x.next=k,ae.lanes|=T,Ma|=T;k=N.action,sn&&a(i,k),i=N.hasEagerState?N.eagerState:a(i,k)}else T={lane:k,revertLane:N.revertLane,gesture:N.gesture,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},x===null?(m=x=T,d=i):x=x.next=T,ae.lanes|=k,Ma|=k;N=N.next}while(N!==null&&N!==t);if(x===null?d=i:x.next=m,!yt(i,e.memoizedState)&&(Ve=!0,M&&(a=Rn,a!==null)))throw a;e.memoizedState=i,e.baseState=d,e.baseQueue=x,n.lastRenderedState=i}return l===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Xs(e){var t=He(),a=t.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=e;var n=a.dispatch,l=a.pending,i=t.memoizedState;if(l!==null){a.pending=null;var d=l=l.next;do i=e(i,d.action),d=d.next;while(d!==l);yt(i,t.memoizedState)||(Ve=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,n]}function ed(e,t,a){var n=ae,l=He(),i=fe;if(i){if(a===void 0)throw Error(u(407));a=a()}else a=t();var d=!yt((we||l).memoizedState,a);if(d&&(l.memoizedState=a,Ve=!0),l=l.queue,Js(nd.bind(null,n,l,e),[e]),l.getSnapshot!==t||d||Ge!==null&&Ge.memoizedState.tag&1){if(n.flags|=2048,Hn(9,{destroy:void 0},ad.bind(null,n,l,a,t),null),Ne===null)throw Error(u(349));i||(la&127)!==0||td(n,t,a)}return a}function td(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ae.updateQueue,t===null?(t=Hi(),ae.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function ad(e,t,a,n){t.value=a,t.getSnapshot=n,ld(t)&&id(e)}function nd(e,t,a){return a(function(){ld(t)&&id(e)})}function ld(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!yt(e,a)}catch(n){return!0}}function id(e){var t=$a(e,2);t!==null&&dt(t,e,2)}function Zs(e){var t=lt();if(typeof e=="function"){var a=e;if(e=a(),sn){va(!0);try{a()}finally{va(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:e},t}function rd(e,t,a,n){return e.baseState=a,Qs(e,we,typeof n=="function"?n:ia)}function $p(e,t,a,n,l){if(Qi(e))throw Error(u(485));if(e=t.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){i.listeners.push(d)}};R.T!==null?a(!0):i.isTransition=!1,n(i),a=t.pending,a===null?(i.next=t.pending=i,sd(t,i)):(i.next=a.next,t.pending=a.next=i)}}function sd(e,t){var a=t.action,n=t.payload,l=e.state;if(t.isTransition){var i=R.T,d={};R.T=d;try{var m=a(l,n),x=R.S;x!==null&&x(d,m),od(e,t,m)}catch(N){Fs(e,t,N)}finally{i!==null&&d.types!==null&&(i.types=d.types),R.T=i}}else try{i=a(l,n),od(e,t,i)}catch(N){Fs(e,t,N)}}function od(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){cd(e,t,n)},function(n){return Fs(e,t,n)}):cd(e,t,a)}function cd(e,t,a){t.status="fulfilled",t.value=a,ud(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,sd(e,a)))}function Fs(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,ud(t),t=t.next;while(t!==n)}e.action=null}function ud(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function dd(e,t){return t}function fd(e,t){if(fe){var a=Ne.formState;if(a!==null){e:{var n=ae;if(fe){if(Te){t:{for(var l=Te,i=Mt;l.nodeType!==8;){if(!i){l=null;break t}if(l=_t(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){Te=_t(l.nextSibling),n=l.data==="F!";break e}}wa(n)}n=!1}n&&(t=a[0])}}return a=lt(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dd,lastRenderedState:t},a.queue=n,a=Dd.bind(null,ae,n),n.dispatch=a,n=Zs(!1),i=Ps.bind(null,ae,!1,n.queue),n=lt(),l={state:t,dispatch:null,action:e,pending:null},n.queue=l,a=$p.bind(null,ae,l,i,a),l.dispatch=a,n.memoizedState=e,[t,a,!1]}function hd(e){var t=He();return md(t,we,e)}function md(e,t,a){if(t=Qs(e,t,dd)[0],e=Yi(ia)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=Ol(t)}catch(d){throw d===_n?Di:d}else n=t;t=He();var l=t.queue,i=l.dispatch;return a!==t.memoizedState&&(ae.flags|=2048,Hn(9,{destroy:void 0},Ip.bind(null,l,a),null)),[n,i,e]}function Ip(e,t){e.action=t}function pd(e){var t=He(),a=we;if(a!==null)return md(t,a,e);He(),t=t.memoizedState,a=He();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function Hn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=ae.updateQueue,t===null&&(t=Hi(),ae.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function gd(){return He().memoizedState}function Gi(e,t,a,n){var l=lt();ae.flags|=e,l.memoizedState=Hn(1|t,{destroy:void 0},a,n===void 0?null:n)}function Vi(e,t,a,n){var l=He();n=n===void 0?null:n;var i=l.memoizedState.inst;we!==null&&n!==null&&Ls(n,we.memoizedState.deps)?l.memoizedState=Hn(t,i,a,n):(ae.flags|=e,l.memoizedState=Hn(1|t,i,a,n))}function yd(e,t){Gi(8390656,8,e,t)}function Js(e,t){Vi(2048,8,e,t)}function Pp(e){ae.flags|=4;var t=ae.updateQueue;if(t===null)t=Hi(),ae.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function vd(e){var t=He().memoizedState;return Pp({ref:t,nextImpl:e}),function(){if((ge&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function bd(e,t){return Vi(4,2,e,t)}function xd(e,t){return Vi(4,4,e,t)}function Sd(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function jd(e,t,a){a=a!=null?a.concat([e]):null,Vi(4,4,Sd.bind(null,t,e),a)}function Ks(){}function wd(e,t){var a=He();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&Ls(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Ed(e,t){var a=He();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&Ls(t,n[1]))return n[0];if(n=e(),sn){va(!0);try{e()}finally{va(!1)}}return a.memoizedState=[n,t],n}function Ws(e,t,a){return a===void 0||(la&1073741824)!==0&&(ue&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Cf(),ae.lanes|=e,Ma|=e,a)}function Ad(e,t,a,n){return yt(a,t)?a:Bn.current!==null?(e=Ws(e,a,n),yt(e,t)||(Ve=!0),e):(la&42)===0||(la&1073741824)!==0&&(ue&261930)===0?(Ve=!0,e.memoizedState=a):(e=Cf(),ae.lanes|=e,Ma|=e,t)}function Cd(e,t,a,n,l){var i=Y.p;Y.p=i!==0&&8>i?i:8;var d=R.T,m={};R.T=m,Ps(e,!1,t,a);try{var x=l(),N=R.S;if(N!==null&&N(m,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var M=Jp(x,n);Dl(e,t,M,wt(e))}else Dl(e,t,n,wt(e))}catch(k){Dl(e,t,{then:function(){},status:"rejected",reason:k},wt())}finally{Y.p=i,d!==null&&m.types!==null&&(d.types=m.types),R.T=d}}function eg(){}function $s(e,t,a,n){if(e.tag!==5)throw Error(u(476));var l=Nd(e).queue;Cd(e,l,t,W,a===null?eg:function(){return Td(e),a(n)})}function Nd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:W},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Td(e){var t=Nd(e);t.next===null&&(t=e.alternate.memoizedState),Dl(e,t.next.queue,{},wt())}function Is(){return Ie(Jl)}function zd(){return He().memoizedState}function Od(){return He().memoizedState}function tg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=wt();e=Ca(a);var n=Na(t,e,a);n!==null&&(dt(n,t,a),Cl(n,t,a)),t={cache:Ns()},e.payload=t;return}t=t.return}}function ag(e,t,a){var n=wt();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Qi(e)?Md(t,a):(a=gs(e,t,a,n),a!==null&&(dt(a,e,n),Rd(a,t,n)))}function Dd(e,t,a){var n=wt();Dl(e,t,a,n)}function Dl(e,t,a,n){var l={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Qi(e))Md(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var d=t.lastRenderedState,m=i(d,a);if(l.hasEagerState=!0,l.eagerState=m,yt(m,d))return Ei(e,t,l,0),Ne===null&&wi(),!1}catch(x){}finally{}if(a=gs(e,t,l,n),a!==null)return dt(a,e,n),Rd(a,t,n),!0}return!1}function Ps(e,t,a,n){if(n={lane:2,revertLane:Mo(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Qi(e)){if(t)throw Error(u(479))}else t=gs(e,a,n,2),t!==null&&dt(t,e,2)}function Qi(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function Md(e,t){Un=Ui=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Rd(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Lc(e,a)}}var Ml={readContext:Ie,use:qi,useCallback:_e,useContext:_e,useEffect:_e,useImperativeHandle:_e,useLayoutEffect:_e,useInsertionEffect:_e,useMemo:_e,useReducer:_e,useRef:_e,useState:_e,useDebugValue:_e,useDeferredValue:_e,useTransition:_e,useSyncExternalStore:_e,useId:_e,useHostTransitionStatus:_e,useFormState:_e,useActionState:_e,useOptimistic:_e,useMemoCache:_e,useCacheRefresh:_e};Ml.useEffectEvent=_e;var _d={readContext:Ie,use:qi,useCallback:function(e,t){return lt().memoizedState=[e,t===void 0?null:t],e},useContext:Ie,useEffect:yd,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Gi(4194308,4,Sd.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Gi(4194308,4,e,t)},useInsertionEffect:function(e,t){Gi(4,2,e,t)},useMemo:function(e,t){var a=lt();t=t===void 0?null:t;var n=e();if(sn){va(!0);try{e()}finally{va(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=lt();if(a!==void 0){var l=a(t);if(sn){va(!0);try{a(t)}finally{va(!1)}}}else l=t;return n.memoizedState=n.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},n.queue=e,e=e.dispatch=ag.bind(null,ae,e),[n.memoizedState,e]},useRef:function(e){var t=lt();return e={current:e},t.memoizedState=e},useState:function(e){e=Zs(e);var t=e.queue,a=Dd.bind(null,ae,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Ks,useDeferredValue:function(e,t){var a=lt();return Ws(a,e,t)},useTransition:function(){var e=Zs(!1);return e=Cd.bind(null,ae,e.queue,!0,!1),lt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=ae,l=lt();if(fe){if(a===void 0)throw Error(u(407));a=a()}else{if(a=t(),Ne===null)throw Error(u(349));(ue&127)!==0||td(n,t,a)}l.memoizedState=a;var i={value:a,getSnapshot:t};return l.queue=i,yd(nd.bind(null,n,i,e),[e]),n.flags|=2048,Hn(9,{destroy:void 0},ad.bind(null,n,i,a,t),null),a},useId:function(){var e=lt(),t=Ne.identifierPrefix;if(fe){var a=Xt,n=Qt;a=(n&~(1<<32-gt(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Li++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Kp++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Is,useFormState:fd,useActionState:fd,useOptimistic:function(e){var t=lt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Ps.bind(null,ae,!0,a),a.dispatch=t,[e,t]},useMemoCache:Vs,useCacheRefresh:function(){return lt().memoizedState=tg.bind(null,ae)},useEffectEvent:function(e){var t=lt(),a={impl:e};return t.memoizedState=a,function(){if((ge&2)!==0)throw Error(u(440));return a.impl.apply(void 0,arguments)}}},eo={readContext:Ie,use:qi,useCallback:wd,useContext:Ie,useEffect:Js,useImperativeHandle:jd,useInsertionEffect:bd,useLayoutEffect:xd,useMemo:Ed,useReducer:Yi,useRef:gd,useState:function(){return Yi(ia)},useDebugValue:Ks,useDeferredValue:function(e,t){var a=He();return Ad(a,we.memoizedState,e,t)},useTransition:function(){var e=Yi(ia)[0],t=He().memoizedState;return[typeof e=="boolean"?e:Ol(e),t]},useSyncExternalStore:ed,useId:zd,useHostTransitionStatus:Is,useFormState:hd,useActionState:hd,useOptimistic:function(e,t){var a=He();return rd(a,we,e,t)},useMemoCache:Vs,useCacheRefresh:Od};eo.useEffectEvent=vd;var kd={readContext:Ie,use:qi,useCallback:wd,useContext:Ie,useEffect:Js,useImperativeHandle:jd,useInsertionEffect:bd,useLayoutEffect:xd,useMemo:Ed,useReducer:Xs,useRef:gd,useState:function(){return Xs(ia)},useDebugValue:Ks,useDeferredValue:function(e,t){var a=He();return we===null?Ws(a,e,t):Ad(a,we.memoizedState,e,t)},useTransition:function(){var e=Xs(ia)[0],t=He().memoizedState;return[typeof e=="boolean"?e:Ol(e),t]},useSyncExternalStore:ed,useId:zd,useHostTransitionStatus:Is,useFormState:pd,useActionState:pd,useOptimistic:function(e,t){var a=He();return we!==null?rd(a,we,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Vs,useCacheRefresh:Od};kd.useEffectEvent=vd;function to(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:b({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ao={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=wt(),l=Ca(n);l.payload=t,a!=null&&(l.callback=a),t=Na(e,l,n),t!==null&&(dt(t,e,n),Cl(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=wt(),l=Ca(n);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=Na(e,l,n),t!==null&&(dt(t,e,n),Cl(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=wt(),n=Ca(a);n.tag=2,t!=null&&(n.callback=t),t=Na(e,n,a),t!==null&&(dt(t,e,a),Cl(t,e,a))}};function Bd(e,t,a,n,l,i,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,d):t.prototype&&t.prototype.isPureReactComponent?!vl(a,n)||!vl(l,i):!0}function Ud(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&ao.enqueueReplaceState(t,t.state,null)}function on(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=b({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function Ld(e){ji(e)}function Hd(e){console.error(e)}function qd(e){ji(e)}function Xi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Yd(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function no(e,t,a){return a=Ca(a),a.tag=3,a.payload={element:null},a.callback=function(){Xi(e,t)},a}function Gd(e){return e=Ca(e),e.tag=3,e}function Vd(e,t,a,n){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var i=n.value;e.payload=function(){return l(i)},e.callback=function(){Yd(t,a,n)}}var d=a.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){Yd(t,a,n),typeof l!="function"&&(Ra===null?Ra=new Set([this]):Ra.add(this));var m=n.stack;this.componentDidCatch(n.value,{componentStack:m!==null?m:""})})}function ng(e,t,a,n,l){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&Dn(t,a,l,!0),a=bt.current,a!==null){switch(a.tag){case 31:case 13:return Rt===null?nr():a.alternate===null&&ke===0&&(ke=3),a.flags&=-257,a.flags|=65536,a.lanes=l,n===Mi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),zo(e,n,l)),!1;case 22:return a.flags|=65536,n===Mi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),zo(e,n,l)),!1}throw Error(u(435,a.tag))}return zo(e,n,l),nr(),!1}if(fe)return t=bt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,n!==js&&(e=Error(u(422),{cause:n}),Sl(zt(e,a)))):(n!==js&&(t=Error(u(423),{cause:n}),Sl(zt(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,n=zt(n,a),l=no(e.stateNode,n,l),Rs(e,l),ke!==4&&(ke=2)),!1;var i=Error(u(520),{cause:n});if(i=zt(i,a),ql===null?ql=[i]:ql.push(i),ke!==4&&(ke=2),t===null)return!0;n=zt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=no(a.stateNode,n,e),Rs(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Ra===null||!Ra.has(i))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Gd(l),Vd(l,e,a,n),Rs(a,l),!1}a=a.return}while(a!==null);return!1}var lo=Error(u(461)),Ve=!1;function Pe(e,t,a,n){t.child=e===null?Fu(t,null,a,n):rn(t,e.child,a,n)}function Qd(e,t,a,n,l){a=a.render;var i=t.ref;if("ref"in n){var d={};for(var m in n)m!=="ref"&&(d[m]=n[m])}else d=n;return tn(t),n=Hs(e,t,a,d,i,l),m=qs(),e!==null&&!Ve?(Ys(e,t,l),ra(e,t,l)):(fe&&m&&xs(t),t.flags|=1,Pe(e,t,n,l),t.child)}function Xd(e,t,a,n,l){if(e===null){var i=a.type;return typeof i=="function"&&!ys(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Zd(e,t,i,n,l)):(e=Ci(a.type,null,n,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!ho(e,l)){var d=i.memoizedProps;if(a=a.compare,a=a!==null?a:vl,a(d,n)&&e.ref===t.ref)return ra(e,t,l)}return t.flags|=1,e=ea(i,n),e.ref=t.ref,e.return=t,t.child=e}function Zd(e,t,a,n,l){if(e!==null){var i=e.memoizedProps;if(vl(i,n)&&e.ref===t.ref)if(Ve=!1,t.pendingProps=n=i,ho(e,l))(e.flags&131072)!==0&&(Ve=!0);else return t.lanes=e.lanes,ra(e,t,l)}return io(e,t,a,n,l)}function Fd(e,t,a,n){var l=n.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(n=t.child=e.child,l=0;n!==null;)l=l|n.lanes|n.childLanes,n=n.sibling;n=l&~i}else n=0,t.child=null;return Jd(e,t,i,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Oi(t,i!==null?i.cachePool:null),i!==null?Wu(t,i):ks(),$u(t);else return n=t.lanes=536870912,Jd(e,t,i!==null?i.baseLanes|a:a,a,n)}else i!==null?(Oi(t,i.cachePool),Wu(t,i),za(),t.memoizedState=null):(e!==null&&Oi(t,null),ks(),za());return Pe(e,t,l,a),t.child}function Rl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Jd(e,t,a,n,l){var i=zs();return i=i===null?null:{parent:Ye._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&Oi(t,null),ks(),$u(t),e!==null&&Dn(e,t,n,!0),t.childLanes=l,null}function Zi(e,t){return t=Ji({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Kd(e,t,a){return rn(t,e.child,null,a),e=Zi(t,t.pendingProps),e.flags|=2,xt(t),t.memoizedState=null,e}function lg(e,t,a){var n=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(fe){if(n.mode==="hidden")return e=Zi(t,n),t.lanes=536870912,Rl(null,e);if(Us(t),(e=Te)?(e=oh(e,Mt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Sa!==null?{id:Qt,overflow:Xt}:null,retryLane:536870912,hydrationErrors:null},a=Mu(e),a.return=t,t.child=a,$e=t,Te=null)):e=null,e===null)throw wa(t);return t.lanes=536870912,null}return Zi(t,n)}var i=e.memoizedState;if(i!==null){var d=i.dehydrated;if(Us(t),l)if(t.flags&256)t.flags&=-257,t=Kd(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(Ve||Dn(e,t,a,!1),l=(a&e.childLanes)!==0,Ve||l){if(n=Ne,n!==null&&(d=Hc(n,a),d!==0&&d!==i.retryLane))throw i.retryLane=d,$a(e,d),dt(n,e,d),lo;nr(),t=Kd(e,t,a)}else e=i.treeContext,Te=_t(d.nextSibling),$e=t,fe=!0,ja=null,Mt=!1,e!==null&&ku(t,e),t=Zi(t,n),t.flags|=4096;return t}return e=ea(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Fi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function io(e,t,a,n,l){return tn(t),a=Hs(e,t,a,n,void 0,l),n=qs(),e!==null&&!Ve?(Ys(e,t,l),ra(e,t,l)):(fe&&n&&xs(t),t.flags|=1,Pe(e,t,a,l),t.child)}function Wd(e,t,a,n,l,i){return tn(t),t.updateQueue=null,a=Pu(t,n,a,l),Iu(e),n=qs(),e!==null&&!Ve?(Ys(e,t,i),ra(e,t,i)):(fe&&n&&xs(t),t.flags|=1,Pe(e,t,a,i),t.child)}function $d(e,t,a,n,l){if(tn(t),t.stateNode===null){var i=Nn,d=a.contextType;typeof d=="object"&&d!==null&&(i=Ie(d)),i=new a(n,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ao,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=n,i.state=t.memoizedState,i.refs={},Ds(t),d=a.contextType,i.context=typeof d=="object"&&d!==null?Ie(d):Nn,i.state=t.memoizedState,d=a.getDerivedStateFromProps,typeof d=="function"&&(to(t,a,d,n),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(d=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),d!==i.state&&ao.enqueueReplaceState(i,i.state,null),Tl(t,n,i,l),Nl(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){i=t.stateNode;var m=t.memoizedProps,x=on(a,m);i.props=x;var N=i.context,M=a.contextType;d=Nn,typeof M=="object"&&M!==null&&(d=Ie(M));var k=a.getDerivedStateFromProps;M=typeof k=="function"||typeof i.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,M||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(m||N!==d)&&Ud(t,i,n,d),Aa=!1;var T=t.memoizedState;i.state=T,Tl(t,n,i,l),Nl(),N=t.memoizedState,m||T!==N||Aa?(typeof k=="function"&&(to(t,a,k,n),N=t.memoizedState),(x=Aa||Bd(t,a,x,n,T,N,d))?(M||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=N),i.props=n,i.state=N,i.context=d,n=x):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,Ms(e,t),d=t.memoizedProps,M=on(a,d),i.props=M,k=t.pendingProps,T=i.context,N=a.contextType,x=Nn,typeof N=="object"&&N!==null&&(x=Ie(N)),m=a.getDerivedStateFromProps,(N=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(d!==k||T!==x)&&Ud(t,i,n,x),Aa=!1,T=t.memoizedState,i.state=T,Tl(t,n,i,l),Nl();var z=t.memoizedState;d!==k||T!==z||Aa||e!==null&&e.dependencies!==null&&Ti(e.dependencies)?(typeof m=="function"&&(to(t,a,m,n),z=t.memoizedState),(M=Aa||Bd(t,a,M,n,T,z,x)||e!==null&&e.dependencies!==null&&Ti(e.dependencies))?(N||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,z,x),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,z,x)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||d===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=z),i.props=n,i.state=z,i.context=x,n=M):(typeof i.componentDidUpdate!="function"||d===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),n=!1)}return i=n,Fi(e,t),n=(t.flags&128)!==0,i||n?(i=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&n?(t.child=rn(t,e.child,null,l),t.child=rn(t,null,a,l)):Pe(e,t,a,l),t.memoizedState=i.state,e=t.child):e=ra(e,t,l),e}function Id(e,t,a,n){return Pa(),t.flags|=256,Pe(e,t,a,n),t.child}var ro={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function so(e){return{baseLanes:e,cachePool:Yu()}}function oo(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=jt),e}function Pd(e,t,a){var n=t.pendingProps,l=!1,i=(t.flags&128)!==0,d;if((d=i)||(d=e!==null&&e.memoizedState===null?!1:(Le.current&2)!==0),d&&(l=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(fe){if(l?Ta(t):za(),(e=Te)?(e=oh(e,Mt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Sa!==null?{id:Qt,overflow:Xt}:null,retryLane:536870912,hydrationErrors:null},a=Mu(e),a.return=t,t.child=a,$e=t,Te=null)):e=null,e===null)throw wa(t);return Xo(e)?t.lanes=32:t.lanes=536870912,null}var m=n.children;return n=n.fallback,l?(za(),l=t.mode,m=Ji({mode:"hidden",children:m},l),n=Ia(n,l,a,null),m.return=t,n.return=t,m.sibling=n,t.child=m,n=t.child,n.memoizedState=so(a),n.childLanes=oo(e,d,a),t.memoizedState=ro,Rl(null,n)):(Ta(t),co(t,m))}var x=e.memoizedState;if(x!==null&&(m=x.dehydrated,m!==null)){if(i)t.flags&256?(Ta(t),t.flags&=-257,t=uo(e,t,a)):t.memoizedState!==null?(za(),t.child=e.child,t.flags|=128,t=null):(za(),m=n.fallback,l=t.mode,n=Ji({mode:"visible",children:n.children},l),m=Ia(m,l,a,null),m.flags|=2,n.return=t,m.return=t,n.sibling=m,t.child=n,rn(t,e.child,null,a),n=t.child,n.memoizedState=so(a),n.childLanes=oo(e,d,a),t.memoizedState=ro,t=Rl(null,n));else if(Ta(t),Xo(m)){if(d=m.nextSibling&&m.nextSibling.dataset,d)var N=d.dgst;d=N,n=Error(u(419)),n.stack="",n.digest=d,Sl({value:n,source:null,stack:null}),t=uo(e,t,a)}else if(Ve||Dn(e,t,a,!1),d=(a&e.childLanes)!==0,Ve||d){if(d=Ne,d!==null&&(n=Hc(d,a),n!==0&&n!==x.retryLane))throw x.retryLane=n,$a(e,n),dt(d,e,n),lo;Qo(m)||nr(),t=uo(e,t,a)}else Qo(m)?(t.flags|=192,t.child=e.child,t=null):(e=x.treeContext,Te=_t(m.nextSibling),$e=t,fe=!0,ja=null,Mt=!1,e!==null&&ku(t,e),t=co(t,n.children),t.flags|=4096);return t}return l?(za(),m=n.fallback,l=t.mode,x=e.child,N=x.sibling,n=ea(x,{mode:"hidden",children:n.children}),n.subtreeFlags=x.subtreeFlags&65011712,N!==null?m=ea(N,m):(m=Ia(m,l,a,null),m.flags|=2),m.return=t,n.return=t,n.sibling=m,t.child=n,Rl(null,n),n=t.child,m=e.child.memoizedState,m===null?m=so(a):(l=m.cachePool,l!==null?(x=Ye._currentValue,l=l.parent!==x?{parent:x,pool:x}:l):l=Yu(),m={baseLanes:m.baseLanes|a,cachePool:l}),n.memoizedState=m,n.childLanes=oo(e,d,a),t.memoizedState=ro,Rl(e.child,n)):(Ta(t),a=e.child,e=a.sibling,a=ea(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=a,t.memoizedState=null,a)}function co(e,t){return t=Ji({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ji(e,t){return e=vt(22,e,null,t),e.lanes=0,e}function uo(e,t,a){return rn(t,e.child,null,a),e=co(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ef(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),As(e.return,t,a)}function fo(e,t,a,n,l,i){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:l,treeForkCount:i}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=n,d.tail=a,d.tailMode=l,d.treeForkCount=i)}function tf(e,t,a){var n=t.pendingProps,l=n.revealOrder,i=n.tail;n=n.children;var d=Le.current,m=(d&2)!==0;if(m?(d=d&1|2,t.flags|=128):d&=1,G(Le,d),Pe(e,t,n,a),n=fe?xl:0,!m&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ef(e,a,t);else if(e.tag===19)ef(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&Bi(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),fo(t,!1,l,a,i,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Bi(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}fo(t,!0,a,null,i,n);break;case"together":fo(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function ra(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ma|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Dn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,a=ea(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=ea(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function ho(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ti(e)))}function ig(e,t,a){switch(t.tag){case 3:nt(t,t.stateNode.containerInfo),Ea(t,Ye,e.memoizedState.cache),Pa();break;case 27:case 5:il(t);break;case 4:nt(t,t.stateNode.containerInfo);break;case 10:Ea(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Us(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(Ta(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Pd(e,t,a):(Ta(t),e=ra(e,t,a),e!==null?e.sibling:null);Ta(t);break;case 19:var l=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(Dn(e,t,a,!1),n=(a&t.childLanes)!==0),l){if(n)return tf(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),G(Le,Le.current),n)break;return null;case 22:return t.lanes=0,Fd(e,t,a,t.pendingProps);case 24:Ea(t,Ye,e.memoizedState.cache)}return ra(e,t,a)}function af(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ve=!0;else{if(!ho(e,a)&&(t.flags&128)===0)return Ve=!1,ig(e,t,a);Ve=(e.flags&131072)!==0}else Ve=!1,fe&&(t.flags&1048576)!==0&&_u(t,xl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=nn(t.elementType),t.type=e,typeof e=="function")ys(e)?(n=on(e,n),t.tag=1,t=$d(null,t,e,n,a)):(t.tag=0,t=io(null,t,e,n,a));else{if(e!=null){var l=e.$$typeof;if(l===ee){t.tag=11,t=Qd(null,t,e,n,a);break e}else if(l===F){t.tag=14,t=Xd(null,t,e,n,a);break e}}throw t=Oe(e)||e,Error(u(306,t,""))}}return t;case 0:return io(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,l=on(n,t.pendingProps),$d(e,t,n,l,a);case 3:e:{if(nt(t,t.stateNode.containerInfo),e===null)throw Error(u(387));n=t.pendingProps;var i=t.memoizedState;l=i.element,Ms(e,t),Tl(t,n,null,a);var d=t.memoizedState;if(n=d.cache,Ea(t,Ye,n),n!==i.cache&&Cs(t,[Ye],a,!0),Nl(),n=d.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Id(e,t,n,a);break e}else if(n!==l){l=zt(Error(u(424)),t),Sl(l),t=Id(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Te=_t(e.firstChild),$e=t,fe=!0,ja=null,Mt=!0,a=Fu(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Pa(),n===l){t=ra(e,t,a);break e}Pe(e,t,n,a)}t=t.child}return t;case 26:return Fi(e,t),e===null?(a=mh(t.type,null,t.pendingProps,null))?t.memoizedState=a:fe||(a=t.type,e=t.pendingProps,n=ur(re.current).createElement(a),n[We]=t,n[it]=e,et(n,a,e),Je(n),t.stateNode=n):t.memoizedState=mh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return il(t),e===null&&fe&&(n=t.stateNode=dh(t.type,t.pendingProps,re.current),$e=t,Mt=!0,l=Te,Ua(t.type)?(Zo=l,Te=_t(n.firstChild)):Te=l),Pe(e,t,t.pendingProps.children,a),Fi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&fe&&((l=n=Te)&&(n=kg(n,t.type,t.pendingProps,Mt),n!==null?(t.stateNode=n,$e=t,Te=_t(n.firstChild),Mt=!1,l=!0):l=!1),l||wa(t)),il(t),l=t.type,i=t.pendingProps,d=e!==null?e.memoizedProps:null,n=i.children,Yo(l,i)?n=null:d!==null&&Yo(l,d)&&(t.flags|=32),t.memoizedState!==null&&(l=Hs(e,t,Wp,null,null,a),Jl._currentValue=l),Fi(e,t),Pe(e,t,n,a),t.child;case 6:return e===null&&fe&&((e=a=Te)&&(a=Bg(a,t.pendingProps,Mt),a!==null?(t.stateNode=a,$e=t,Te=null,e=!0):e=!1),e||wa(t)),null;case 13:return Pd(e,t,a);case 4:return nt(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=rn(t,null,n,a):Pe(e,t,n,a),t.child;case 11:return Qd(e,t,t.type,t.pendingProps,a);case 7:return Pe(e,t,t.pendingProps,a),t.child;case 8:return Pe(e,t,t.pendingProps.children,a),t.child;case 12:return Pe(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,Ea(t,t.type,n.value),Pe(e,t,n.children,a),t.child;case 9:return l=t.type._context,n=t.pendingProps.children,tn(t),l=Ie(l),n=n(l),t.flags|=1,Pe(e,t,n,a),t.child;case 14:return Xd(e,t,t.type,t.pendingProps,a);case 15:return Zd(e,t,t.type,t.pendingProps,a);case 19:return tf(e,t,a);case 31:return lg(e,t,a);case 22:return Fd(e,t,a,t.pendingProps);case 24:return tn(t),n=Ie(Ye),e===null?(l=zs(),l===null&&(l=Ne,i=Ns(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=a),l=i),t.memoizedState={parent:n,cache:l},Ds(t),Ea(t,Ye,l)):((e.lanes&a)!==0&&(Ms(e,t),Tl(t,null,null,a),Nl()),l=e.memoizedState,i=t.memoizedState,l.parent!==n?(l={parent:n,cache:n},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Ea(t,Ye,n)):(n=i.cache,Ea(t,Ye,n),n!==l.cache&&Cs(t,[Ye],a,!0))),Pe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function sa(e){e.flags|=4}function mo(e,t,a,n,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Of())e.flags|=8192;else throw ln=Mi,Os}else e.flags&=-16777217}function nf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!bh(t))if(Of())e.flags|=8192;else throw ln=Mi,Os}function Ki(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Bc():536870912,e.lanes|=t,Vn|=t)}function _l(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags&65011712,n|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function rg(e,t,a){var n=t.pendingProps;switch(Ss(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return ze(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),na(Ye),Ue(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(On(t)?sa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ws())),ze(t),null;case 26:var l=t.type,i=t.memoizedState;return e===null?(sa(t),i!==null?(ze(t),nf(t,i)):(ze(t),mo(t,l,null,n,a))):i?i!==e.memoizedState?(sa(t),ze(t),nf(t,i)):(ze(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&sa(t),ze(t),mo(t,l,e,n,a)),null;case 27:if(ri(t),a=re.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&sa(t);else{if(!n){if(t.stateNode===null)throw Error(u(166));return ze(t),null}e=X.current,On(t)?Bu(t):(e=dh(l,n,a),t.stateNode=e,sa(t))}return ze(t),null;case 5:if(ri(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&sa(t);else{if(!n){if(t.stateNode===null)throw Error(u(166));return ze(t),null}if(i=X.current,On(t))Bu(t);else{var d=ur(re.current);switch(i){case 1:i=d.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=d.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=d.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=d.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=d.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof n.is=="string"?d.createElement("select",{is:n.is}):d.createElement("select"),n.multiple?i.multiple=!0:n.size&&(i.size=n.size);break;default:i=typeof n.is=="string"?d.createElement(l,{is:n.is}):d.createElement(l)}}i[We]=t,i[it]=n;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)i.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=i;e:switch(et(i,l,n),l){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&sa(t)}}return ze(t),mo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&sa(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(u(166));if(e=re.current,On(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,l=$e,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}e[We]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||eh(e.nodeValue,a)),e||wa(t,!0)}else e=ur(e).createTextNode(n),e[We]=t,t.stateNode=e}return ze(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=On(t),a!==null){if(e===null){if(!n)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[We]=t}else Pa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),e=!1}else a=ws(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(xt(t),t):(xt(t),null);if((t.flags&128)!==0)throw Error(u(558))}return ze(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=On(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(u(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[We]=t}else Pa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),l=!1}else l=ws(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(xt(t),t):(xt(t),null)}return xt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool),i=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==l&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Ki(t,t.updateQueue),ze(t),null);case 4:return Ue(),e===null&&Bo(t.stateNode.containerInfo),ze(t),null;case 10:return na(t.type),ze(t),null;case 19:if(B(Le),n=t.memoizedState,n===null)return ze(t),null;if(l=(t.flags&128)!==0,i=n.rendering,i===null)if(l)_l(n,!1);else{if(ke!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Bi(e),i!==null){for(t.flags|=128,_l(n,!1),e=i.updateQueue,t.updateQueue=e,Ki(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Du(a,e),a=a.sibling;return G(Le,Le.current&1|2),fe&&ta(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&mt()>er&&(t.flags|=128,l=!0,_l(n,!1),t.lanes=4194304)}else{if(!l)if(e=Bi(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Ki(t,e),_l(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!fe)return ze(t),null}else 2*mt()-n.renderingStartTime>er&&a!==536870912&&(t.flags|=128,l=!0,_l(n,!1),t.lanes=4194304);n.isBackwards?(i.sibling=t.child,t.child=i):(e=n.last,e!==null?e.sibling=i:t.child=i,n.last=i)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=mt(),e.sibling=null,a=Le.current,G(Le,l?a&1|2:a&1),fe&&ta(t,n.treeForkCount),e):(ze(t),null);case 22:case 23:return xt(t),Bs(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),a=t.updateQueue,a!==null&&Ki(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&B(an),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),na(Ye),ze(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function sg(e,t){switch(Ss(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return na(Ye),Ue(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ri(t),null;case 31:if(t.memoizedState!==null){if(xt(t),t.alternate===null)throw Error(u(340));Pa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(xt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Pa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(Le),null;case 4:return Ue(),null;case 10:return na(t.type),null;case 22:case 23:return xt(t),Bs(),e!==null&&B(an),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return na(Ye),null;case 25:return null;default:return null}}function lf(e,t){switch(Ss(t),t.tag){case 3:na(Ye),Ue();break;case 26:case 27:case 5:ri(t);break;case 4:Ue();break;case 31:t.memoizedState!==null&&xt(t);break;case 13:xt(t);break;case 19:B(Le);break;case 10:na(t.type);break;case 22:case 23:xt(t),Bs(),e!==null&&B(an);break;case 24:na(Ye)}}function kl(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var l=n.next;a=l;do{if((a.tag&e)===e){n=void 0;var i=a.create,d=a.inst;n=i(),d.destroy=n}a=a.next}while(a!==l)}}catch(m){xe(t,t.return,m)}}function Oa(e,t,a){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var i=l.next;n=i;do{if((n.tag&e)===e){var d=n.inst,m=d.destroy;if(m!==void 0){d.destroy=void 0,l=t;var x=a,N=m;try{N()}catch(M){xe(l,x,M)}}}n=n.next}while(n!==i)}}catch(M){xe(t,t.return,M)}}function rf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Ku(t,a)}catch(n){xe(e,e.return,n)}}}function sf(e,t,a){a.props=on(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){xe(e,t,n)}}function Bl(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(l){xe(e,t,l)}}function Zt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(l){xe(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){xe(e,t,l)}else a.current=null}function of(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(l){xe(e,e.return,l)}}function po(e,t,a){try{var n=e.stateNode;zg(n,e.type,a,t),n[it]=t}catch(l){xe(e,e.return,l)}}function cf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ua(e.type)||e.tag===4}function go(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ua(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yo(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=It));else if(n!==4&&(n===27&&Ua(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(yo(e,t,a),e=e.sibling;e!==null;)yo(e,t,a),e=e.sibling}function Wi(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&Ua(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Wi(e,t,a),e=e.sibling;e!==null;)Wi(e,t,a),e=e.sibling}function uf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);et(t,n,a),t[We]=e,t[it]=a}catch(i){xe(e,e.return,i)}}var oa=!1,Qe=!1,vo=!1,df=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function og(e,t){if(e=e.containerInfo,Ho=yr,e=ju(e),us(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var l=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{a.nodeType,i.nodeType}catch(K){a=null;break e}var d=0,m=-1,x=-1,N=0,M=0,k=e,T=null;t:for(;;){for(var z;k!==a||l!==0&&k.nodeType!==3||(m=d+l),k!==i||n!==0&&k.nodeType!==3||(x=d+n),k.nodeType===3&&(d+=k.nodeValue.length),(z=k.firstChild)!==null;)T=k,k=z;for(;;){if(k===e)break t;if(T===a&&++N===l&&(m=d),T===i&&++M===n&&(x=d),(z=k.nextSibling)!==null)break;k=T,T=k.parentNode}k=z}a=m===-1||x===-1?null:{start:m,end:x}}else a=null}a=a||{start:0,end:0}}else a=null;for(qo={focusedElem:e,selectionRange:a},yr=!1,Ke=t;Ke!==null;)if(t=Ke,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ke=e;else for(;Ke!==null;){switch(t=Ke,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)l=e[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,l=i.memoizedProps,i=i.memoizedState,n=a.stateNode;try{var Q=on(a.type,l);e=n.getSnapshotBeforeUpdate(Q,i),n.__reactInternalSnapshotBeforeUpdate=e}catch(K){xe(a,a.return,K)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Vo(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Vo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,Ke=e;break}Ke=t.return}}function ff(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:ua(e,a),n&4&&kl(5,a);break;case 1:if(ua(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(d){xe(a,a.return,d)}else{var l=on(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){xe(a,a.return,d)}}n&64&&rf(a),n&512&&Bl(a,a.return);break;case 3:if(ua(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Ku(e,t)}catch(d){xe(a,a.return,d)}}break;case 27:t===null&&n&4&&uf(a);case 26:case 5:ua(e,a),t===null&&n&4&&of(a),n&512&&Bl(a,a.return);break;case 12:ua(e,a);break;case 31:ua(e,a),n&4&&pf(e,a);break;case 13:ua(e,a),n&4&&gf(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=yg.bind(null,a),Ug(e,a))));break;case 22:if(n=a.memoizedState!==null||oa,!n){t=t!==null&&t.memoizedState!==null||Qe,l=oa;var i=Qe;oa=n,(Qe=t)&&!i?da(e,a,(a.subtreeFlags&8772)!==0):ua(e,a),oa=l,Qe=i}break;case 30:break;default:ua(e,a)}}function hf(e){var t=e.alternate;t!==null&&(e.alternate=null,hf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Fr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var De=null,st=!1;function ca(e,t,a){for(a=a.child;a!==null;)mf(e,t,a),a=a.sibling}function mf(e,t,a){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(rl,a)}catch(i){}switch(a.tag){case 26:Qe||Zt(a,t),ca(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Qe||Zt(a,t);var n=De,l=st;Ua(a.type)&&(De=a.stateNode,st=!1),ca(e,t,a),Xl(a.stateNode),De=n,st=l;break;case 5:Qe||Zt(a,t);case 6:if(n=De,l=st,De=null,ca(e,t,a),De=n,st=l,De!==null)if(st)try{(De.nodeType===9?De.body:De.nodeName==="HTML"?De.ownerDocument.body:De).removeChild(a.stateNode)}catch(i){xe(a,t,i)}else try{De.removeChild(a.stateNode)}catch(i){xe(a,t,i)}break;case 18:De!==null&&(st?(e=De,rh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),$n(e)):rh(De,a.stateNode));break;case 4:n=De,l=st,De=a.stateNode.containerInfo,st=!0,ca(e,t,a),De=n,st=l;break;case 0:case 11:case 14:case 15:Oa(2,a,t),Qe||Oa(4,a,t),ca(e,t,a);break;case 1:Qe||(Zt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&sf(a,t,n)),ca(e,t,a);break;case 21:ca(e,t,a);break;case 22:Qe=(n=Qe)||a.memoizedState!==null,ca(e,t,a),Qe=n;break;default:ca(e,t,a)}}function pf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{$n(e)}catch(a){xe(t,t.return,a)}}}function gf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{$n(e)}catch(a){xe(t,t.return,a)}}function cg(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new df),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new df),t;default:throw Error(u(435,e.tag))}}function $i(e,t){var a=cg(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var l=vg.bind(null,e,n);n.then(l,l)}})}function ot(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var l=a[n],i=e,d=t,m=d;e:for(;m!==null;){switch(m.tag){case 27:if(Ua(m.type)){De=m.stateNode,st=!1;break e}break;case 5:De=m.stateNode,st=!1;break e;case 3:case 4:De=m.stateNode.containerInfo,st=!0;break e}m=m.return}if(De===null)throw Error(u(160));mf(i,d,l),De=null,st=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yf(t,e),t=t.sibling}var qt=null;function yf(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ot(t,e),ct(e),n&4&&(Oa(3,e,e.return),kl(3,e),Oa(5,e,e.return));break;case 1:ot(t,e),ct(e),n&512&&(Qe||a===null||Zt(a,a.return)),n&64&&oa&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var l=qt;if(ot(t,e),ct(e),n&512&&(Qe||a===null||Zt(a,a.return)),n&4){var i=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(n){case"title":i=l.getElementsByTagName("title")[0],(!i||i[cl]||i[We]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(n),l.head.insertBefore(i,l.querySelector("head > title"))),et(i,n,a),i[We]=e,Je(i),n=i;break e;case"link":var d=yh("link","href",l).get(n+(a.href||""));if(d){for(var m=0;m<d.length;m++)if(i=d[m],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){d.splice(m,1);break t}}i=l.createElement(n),et(i,n,a),l.head.appendChild(i);break;case"meta":if(d=yh("meta","content",l).get(n+(a.content||""))){for(m=0;m<d.length;m++)if(i=d[m],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){d.splice(m,1);break t}}i=l.createElement(n),et(i,n,a),l.head.appendChild(i);break;default:throw Error(u(468,n))}i[We]=e,Je(i),n=i}e.stateNode=n}else vh(l,e.type,e.stateNode);else e.stateNode=gh(l,n,e.memoizedProps);else i!==n?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,n===null?vh(l,e.type,e.stateNode):gh(l,n,e.memoizedProps)):n===null&&e.stateNode!==null&&po(e,e.memoizedProps,a.memoizedProps)}break;case 27:ot(t,e),ct(e),n&512&&(Qe||a===null||Zt(a,a.return)),a!==null&&n&4&&po(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ot(t,e),ct(e),n&512&&(Qe||a===null||Zt(a,a.return)),e.flags&32){l=e.stateNode;try{xn(l,"")}catch(Q){xe(e,e.return,Q)}}n&4&&e.stateNode!=null&&(l=e.memoizedProps,po(e,l,a!==null?a.memoizedProps:l)),n&1024&&(vo=!0);break;case 6:if(ot(t,e),ct(e),n&4){if(e.stateNode===null)throw Error(u(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(Q){xe(e,e.return,Q)}}break;case 3:if(hr=null,l=qt,qt=dr(t.containerInfo),ot(t,e),qt=l,ct(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{$n(t.containerInfo)}catch(Q){xe(e,e.return,Q)}vo&&(vo=!1,vf(e));break;case 4:n=qt,qt=dr(e.stateNode.containerInfo),ot(t,e),ct(e),qt=n;break;case 12:ot(t,e),ct(e);break;case 31:ot(t,e),ct(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,$i(e,n)));break;case 13:ot(t,e),ct(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Pi=mt()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,$i(e,n)));break;case 22:l=e.memoizedState!==null;var x=a!==null&&a.memoizedState!==null,N=oa,M=Qe;if(oa=N||l,Qe=M||x,ot(t,e),Qe=M,oa=N,ct(e),n&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||x||oa||Qe||cn(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){x=a=t;try{if(i=x.stateNode,l)d=i.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{m=x.stateNode;var k=x.memoizedProps.style,T=k!=null&&k.hasOwnProperty("display")?k.display:null;m.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(Q){xe(x,x.return,Q)}}}else if(t.tag===6){if(a===null){x=t;try{x.stateNode.nodeValue=l?"":x.memoizedProps}catch(Q){xe(x,x.return,Q)}}}else if(t.tag===18){if(a===null){x=t;try{var z=x.stateNode;l?sh(z,!0):sh(x.stateNode,!1)}catch(Q){xe(x,x.return,Q)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,$i(e,a))));break;case 19:ot(t,e),ct(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,$i(e,n)));break;case 30:break;case 21:break;default:ot(t,e),ct(e)}}function ct(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(cf(n)){a=n;break}n=n.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var l=a.stateNode,i=go(e);Wi(e,i,l);break;case 5:var d=a.stateNode;a.flags&32&&(xn(d,""),a.flags&=-33);var m=go(e);Wi(e,m,d);break;case 3:case 4:var x=a.stateNode.containerInfo,N=go(e);yo(e,N,x);break;default:throw Error(u(161))}}catch(M){xe(e,e.return,M)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;vf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ua(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ff(e,t.alternate,t),t=t.sibling}function cn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Oa(4,t,t.return),cn(t);break;case 1:Zt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&sf(t,t.return,a),cn(t);break;case 27:Xl(t.stateNode);case 26:case 5:Zt(t,t.return),cn(t);break;case 22:t.memoizedState===null&&cn(t);break;case 30:cn(t);break;default:cn(t)}e=e.sibling}}function da(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,l=e,i=t,d=i.flags;switch(i.tag){case 0:case 11:case 15:da(l,i,a),kl(4,i);break;case 1:if(da(l,i,a),n=i,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(N){xe(n,n.return,N)}if(n=i,l=n.updateQueue,l!==null){var m=n.stateNode;try{var x=l.shared.hiddenCallbacks;if(x!==null)for(l.shared.hiddenCallbacks=null,l=0;l<x.length;l++)Ju(x[l],m)}catch(N){xe(n,n.return,N)}}a&&d&64&&rf(i),Bl(i,i.return);break;case 27:uf(i);case 26:case 5:da(l,i,a),a&&n===null&&d&4&&of(i),Bl(i,i.return);break;case 12:da(l,i,a);break;case 31:da(l,i,a),a&&d&4&&pf(l,i);break;case 13:da(l,i,a),a&&d&4&&gf(l,i);break;case 22:i.memoizedState===null&&da(l,i,a),Bl(i,i.return);break;case 30:break;default:da(l,i,a)}t=t.sibling}}function bo(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&jl(a))}function xo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&jl(e))}function Yt(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)bf(e,t,a,n),t=t.sibling}function bf(e,t,a,n){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Yt(e,t,a,n),l&2048&&kl(9,t);break;case 1:Yt(e,t,a,n);break;case 3:Yt(e,t,a,n),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&jl(e)));break;case 12:if(l&2048){Yt(e,t,a,n),e=t.stateNode;try{var i=t.memoizedProps,d=i.id,m=i.onPostCommit;typeof m=="function"&&m(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(x){xe(t,t.return,x)}}else Yt(e,t,a,n);break;case 31:Yt(e,t,a,n);break;case 13:Yt(e,t,a,n);break;case 23:break;case 22:i=t.stateNode,d=t.alternate,t.memoizedState!==null?i._visibility&2?Yt(e,t,a,n):Ul(e,t):i._visibility&2?Yt(e,t,a,n):(i._visibility|=2,qn(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),l&2048&&bo(d,t);break;case 24:Yt(e,t,a,n),l&2048&&xo(t.alternate,t);break;default:Yt(e,t,a,n)}}function qn(e,t,a,n,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,d=t,m=a,x=n,N=d.flags;switch(d.tag){case 0:case 11:case 15:qn(i,d,m,x,l),kl(8,d);break;case 23:break;case 22:var M=d.stateNode;d.memoizedState!==null?M._visibility&2?qn(i,d,m,x,l):Ul(i,d):(M._visibility|=2,qn(i,d,m,x,l)),l&&N&2048&&bo(d.alternate,d);break;case 24:qn(i,d,m,x,l),l&&N&2048&&xo(d.alternate,d);break;default:qn(i,d,m,x,l)}t=t.sibling}}function Ul(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,l=n.flags;switch(n.tag){case 22:Ul(a,n),l&2048&&bo(n.alternate,n);break;case 24:Ul(a,n),l&2048&&xo(n.alternate,n);break;default:Ul(a,n)}t=t.sibling}}var Ll=8192;function Yn(e,t,a){if(e.subtreeFlags&Ll)for(e=e.child;e!==null;)xf(e,t,a),e=e.sibling}function xf(e,t,a){switch(e.tag){case 26:Yn(e,t,a),e.flags&Ll&&e.memoizedState!==null&&Kg(a,qt,e.memoizedState,e.memoizedProps);break;case 5:Yn(e,t,a);break;case 3:case 4:var n=qt;qt=dr(e.stateNode.containerInfo),Yn(e,t,a),qt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Ll,Ll=16777216,Yn(e,t,a),Ll=n):Yn(e,t,a));break;default:Yn(e,t,a)}}function Sf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Hl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ke=n,wf(n,e)}Sf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)jf(e),e=e.sibling}function jf(e){switch(e.tag){case 0:case 11:case 15:Hl(e),e.flags&2048&&Oa(9,e,e.return);break;case 3:Hl(e);break;case 12:Hl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ii(e)):Hl(e);break;default:Hl(e)}}function Ii(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ke=n,wf(n,e)}Sf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Oa(8,t,t.return),Ii(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ii(t));break;default:Ii(t)}e=e.sibling}}function wf(e,t){for(;Ke!==null;){var a=Ke;switch(a.tag){case 0:case 11:case 15:Oa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:jl(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Ke=n;else e:for(a=e;Ke!==null;){n=Ke;var l=n.sibling,i=n.return;if(hf(n),n===a){Ke=null;break e}if(l!==null){l.return=i,Ke=l;break e}Ke=i}}}var ug={getCacheForType:function(e){var t=Ie(Ye),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Ie(Ye).controller.signal}},dg=typeof WeakMap=="function"?WeakMap:Map,ge=0,Ne=null,se=null,ue=0,be=0,St=null,Da=!1,Gn=!1,So=!1,fa=0,ke=0,Ma=0,un=0,jo=0,jt=0,Vn=0,ql=null,ut=null,wo=!1,Pi=0,Ef=0,er=1/0,tr=null,Ra=null,Xe=0,_a=null,Qn=null,ha=0,Eo=0,Ao=null,Af=null,Yl=0,Co=null;function wt(){return(ge&2)!==0&&ue!==0?ue&-ue:R.T!==null?Mo():qc()}function Cf(){if(jt===0)if((ue&536870912)===0||fe){var e=ci;ci<<=1,(ci&3932160)===0&&(ci=262144),jt=e}else jt=536870912;return e=bt.current,e!==null&&(e.flags|=32),jt}function dt(e,t,a){(e===Ne&&(be===2||be===9)||e.cancelPendingCommit!==null)&&(Xn(e,0),ka(e,ue,jt,!1)),ol(e,a),((ge&2)===0||e!==Ne)&&(e===Ne&&((ge&2)===0&&(un|=a),ke===4&&ka(e,ue,jt,!1)),Ft(e))}function Nf(e,t,a){if((ge&6)!==0)throw Error(u(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||sl(e,t),l=n?mg(e,t):To(e,t,!0),i=n;do{if(l===0){Gn&&!n&&ka(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!fg(a)){l=To(e,t,!1),i=!1;continue}if(l===2){if(i=t,e.errorRecoveryDisabledLanes&i)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var m=e;l=ql;var x=m.current.memoizedState.isDehydrated;if(x&&(Xn(m,d).flags|=256),d=To(m,d,!1),d!==2){if(So&&!x){m.errorRecoveryDisabledLanes|=i,un|=i,l=4;break e}i=ut,ut=l,i!==null&&(ut===null?ut=i:ut.push.apply(ut,i))}l=d}if(i=!1,l!==2)continue}}if(l===1){Xn(e,0),ka(e,t,0,!0);break}e:{switch(n=e,i=l,i){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:ka(n,t,jt,!Da);break e;case 2:ut=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(l=Pi+300-mt(),10<l)){if(ka(n,t,jt,!Da),di(n,0,!0)!==0)break e;ha=t,n.timeoutHandle=lh(Tf.bind(null,n,a,ut,tr,wo,t,jt,un,Vn,Da,i,"Throttled",-0,0),l);break e}Tf(n,a,ut,tr,wo,t,jt,un,Vn,Da,i,null,-0,0)}}break}while(!0);Ft(e)}function Tf(e,t,a,n,l,i,d,m,x,N,M,k,T,z){if(e.timeoutHandle=-1,k=t.subtreeFlags,k&8192||(k&16785408)===16785408){k={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:It},xf(t,i,k);var Q=(i&62914560)===i?Pi-mt():(i&4194048)===i?Ef-mt():0;if(Q=Wg(k,Q),Q!==null){ha=i,e.cancelPendingCommit=Q(Bf.bind(null,e,t,i,a,n,l,d,m,x,M,k,null,T,z)),ka(e,i,d,!N);return}}Bf(e,t,i,a,n,l,d,m,x)}function fg(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var l=a[n],i=l.getSnapshot;l=l.value;try{if(!yt(i(),l))return!1}catch(d){return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ka(e,t,a,n){t&=~jo,t&=~un,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var l=t;0<l;){var i=31-gt(l),d=1<<i;n[i]=-1,l&=~d}a!==0&&Uc(e,a,t)}function ar(){return(ge&6)===0?(Gl(0),!1):!0}function No(){if(se!==null){if(be===0)var e=se.return;else e=se,aa=en=null,Gs(e),kn=null,El=0,e=se;for(;e!==null;)lf(e.alternate,e),e=e.return;se=null}}function Xn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Mg(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ha=0,No(),Ne=e,se=a=ea(e.current,null),ue=t,be=0,St=null,Da=!1,Gn=sl(e,t),So=!1,Vn=jt=jo=un=Ma=ke=0,ut=ql=null,wo=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var l=31-gt(n),i=1<<l;t|=e[l],n&=~i}return fa=t,wi(),a}function zf(e,t){ae=null,R.H=Ml,t===_n||t===Di?(t=Qu(),be=3):t===Os?(t=Qu(),be=4):be=t===lo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,St=t,se===null&&(ke=1,Xi(e,zt(t,e.current)))}function Of(){var e=bt.current;return e===null?!0:(ue&4194048)===ue?Rt===null:(ue&62914560)===ue||(ue&536870912)!==0?e===Rt:!1}function Df(){var e=R.H;return R.H=Ml,e===null?Ml:e}function Mf(){var e=R.A;return R.A=ug,e}function nr(){ke=4,Da||(ue&4194048)!==ue&&bt.current!==null||(Gn=!0),(Ma&134217727)===0&&(un&134217727)===0||Ne===null||ka(Ne,ue,jt,!1)}function To(e,t,a){var n=ge;ge|=2;var l=Df(),i=Mf();(Ne!==e||ue!==t)&&(tr=null,Xn(e,t)),t=!1;var d=ke;e:do try{if(be!==0&&se!==null){var m=se,x=St;switch(be){case 8:No(),d=6;break e;case 3:case 2:case 9:case 6:bt.current===null&&(t=!0);var N=be;if(be=0,St=null,Zn(e,m,x,N),a&&Gn){d=0;break e}break;default:N=be,be=0,St=null,Zn(e,m,x,N)}}hg(),d=ke;break}catch(M){zf(e,M)}while(!0);return t&&e.shellSuspendCounter++,aa=en=null,ge=n,R.H=l,R.A=i,se===null&&(Ne=null,ue=0,wi()),d}function hg(){for(;se!==null;)Rf(se)}function mg(e,t){var a=ge;ge|=2;var n=Df(),l=Mf();Ne!==e||ue!==t?(tr=null,er=mt()+500,Xn(e,t)):Gn=sl(e,t);e:do try{if(be!==0&&se!==null){t=se;var i=St;t:switch(be){case 1:be=0,St=null,Zn(e,t,i,1);break;case 2:case 9:if(Gu(i)){be=0,St=null,_f(t);break}t=function(){be!==2&&be!==9||Ne!==e||(be=7),Ft(e)},i.then(t,t);break e;case 3:be=7;break e;case 4:be=5;break e;case 7:Gu(i)?(be=0,St=null,_f(t)):(be=0,St=null,Zn(e,t,i,7));break;case 5:var d=null;switch(se.tag){case 26:d=se.memoizedState;case 5:case 27:var m=se;if(d?bh(d):m.stateNode.complete){be=0,St=null;var x=m.sibling;if(x!==null)se=x;else{var N=m.return;N!==null?(se=N,lr(N)):se=null}break t}}be=0,St=null,Zn(e,t,i,5);break;case 6:be=0,St=null,Zn(e,t,i,6);break;case 8:No(),ke=6;break e;default:throw Error(u(462))}}pg();break}catch(M){zf(e,M)}while(!0);return aa=en=null,R.H=n,R.A=l,ge=a,se!==null?0:(Ne=null,ue=0,wi(),ke)}function pg(){for(;se!==null&&!Lm();)Rf(se)}function Rf(e){var t=af(e.alternate,e,fa);e.memoizedProps=e.pendingProps,t===null?lr(e):se=t}function _f(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Wd(a,t,t.pendingProps,t.type,void 0,ue);break;case 11:t=Wd(a,t,t.pendingProps,t.type.render,t.ref,ue);break;case 5:Gs(t);default:lf(a,t),t=se=Du(t,fa),t=af(a,t,fa)}e.memoizedProps=e.pendingProps,t===null?lr(e):se=t}function Zn(e,t,a,n){aa=en=null,Gs(t),kn=null,El=0;var l=t.return;try{if(ng(e,l,t,a,ue)){ke=1,Xi(e,zt(a,e.current)),se=null;return}}catch(i){if(l!==null)throw se=l,i;ke=1,Xi(e,zt(a,e.current)),se=null;return}t.flags&32768?(fe||n===1?e=!0:Gn||(ue&536870912)!==0?e=!1:(Da=e=!0,(n===2||n===9||n===3||n===6)&&(n=bt.current,n!==null&&n.tag===13&&(n.flags|=16384))),kf(t,e)):lr(t)}function lr(e){var t=e;do{if((t.flags&32768)!==0){kf(t,Da);return}e=t.return;var a=rg(t.alternate,t,fa);if(a!==null){se=a;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);ke===0&&(ke=5)}function kf(e,t){do{var a=sg(e.alternate,e);if(a!==null){a.flags&=32767,se=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){se=e;return}se=e=a}while(e!==null);ke=6,se=null}function Bf(e,t,a,n,l,i,d,m,x){e.cancelPendingCommit=null;do ir();while(Xe!==0);if((ge&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(i=t.lanes|t.childLanes,i|=ps,Jm(e,a,i,d,m,x),e===Ne&&(se=Ne=null,ue=0),Qn=t,_a=e,ha=a,Eo=i,Ao=l,Af=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,bg(si,function(){return Yf(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=R.T,R.T=null,l=Y.p,Y.p=2,d=ge,ge|=4;try{og(e,t,a)}finally{ge=d,Y.p=l,R.T=n}}Xe=1,Uf(),Lf(),Hf()}}function Uf(){if(Xe===1){Xe=0;var e=_a,t=Qn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=R.T,R.T=null;var n=Y.p;Y.p=2;var l=ge;ge|=4;try{yf(t,e);var i=qo,d=ju(e.containerInfo),m=i.focusedElem,x=i.selectionRange;if(d!==m&&m&&m.ownerDocument&&Su(m.ownerDocument.documentElement,m)){if(x!==null&&us(m)){var N=x.start,M=x.end;if(M===void 0&&(M=N),"selectionStart"in m)m.selectionStart=N,m.selectionEnd=Math.min(M,m.value.length);else{var k=m.ownerDocument||document,T=k&&k.defaultView||window;if(T.getSelection){var z=T.getSelection(),Q=m.textContent.length,K=Math.min(x.start,Q),Ae=x.end===void 0?K:Math.min(x.end,Q);!z.extend&&K>Ae&&(d=Ae,Ae=K,K=d);var E=xu(m,K),S=xu(m,Ae);if(E&&S&&(z.rangeCount!==1||z.anchorNode!==E.node||z.anchorOffset!==E.offset||z.focusNode!==S.node||z.focusOffset!==S.offset)){var C=k.createRange();C.setStart(E.node,E.offset),z.removeAllRanges(),K>Ae?(z.addRange(C),z.extend(S.node,S.offset)):(C.setEnd(S.node,S.offset),z.addRange(C))}}}}for(k=[],z=m;z=z.parentNode;)z.nodeType===1&&k.push({element:z,left:z.scrollLeft,top:z.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<k.length;m++){var _=k[m];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}yr=!!Ho,qo=Ho=null}finally{ge=l,Y.p=n,R.T=a}}e.current=t,Xe=2}}function Lf(){if(Xe===2){Xe=0;var e=_a,t=Qn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=R.T,R.T=null;var n=Y.p;Y.p=2;var l=ge;ge|=4;try{ff(e,t.alternate,t)}finally{ge=l,Y.p=n,R.T=a}}Xe=3}}function Hf(){if(Xe===4||Xe===3){Xe=0,Hm();var e=_a,t=Qn,a=ha,n=Af;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Xe=5:(Xe=0,Qn=_a=null,qf(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Ra=null),Xr(a),t=t.stateNode,pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(rl,t,void 0,(t.current.flags&128)===128)}catch(x){}if(n!==null){t=R.T,l=Y.p,Y.p=2,R.T=null;try{for(var i=e.onRecoverableError,d=0;d<n.length;d++){var m=n[d];i(m.value,{componentStack:m.stack})}}finally{R.T=t,Y.p=l}}(ha&3)!==0&&ir(),Ft(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===Co?Yl++:(Yl=0,Co=e):Yl=0,Gl(0)}}function qf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,jl(t)))}function ir(){return Uf(),Lf(),Hf(),Yf()}function Yf(){if(Xe!==5)return!1;var e=_a,t=Eo;Eo=0;var a=Xr(ha),n=R.T,l=Y.p;try{Y.p=32>a?32:a,R.T=null,a=Ao,Ao=null;var i=_a,d=ha;if(Xe=0,Qn=_a=null,ha=0,(ge&6)!==0)throw Error(u(331));var m=ge;if(ge|=4,jf(i.current),bf(i,i.current,d,a),ge=m,Gl(0,!1),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(rl,i)}catch(x){}return!0}finally{Y.p=l,R.T=n,qf(e,t)}}function Gf(e,t,a){t=zt(a,t),t=no(e.stateNode,t,2),e=Na(e,t,2),e!==null&&(ol(e,2),Ft(e))}function xe(e,t,a){if(e.tag===3)Gf(e,e,a);else for(;t!==null;){if(t.tag===3){Gf(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ra===null||!Ra.has(n))){e=zt(a,e),a=Gd(2),n=Na(t,a,2),n!==null&&(Vd(a,n,t,e),ol(n,2),Ft(n));break}}t=t.return}}function zo(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new dg;var l=new Set;n.set(t,l)}else l=n.get(t),l===void 0&&(l=new Set,n.set(t,l));l.has(a)||(So=!0,l.add(a),e=gg.bind(null,e,t,a),t.then(e,e))}function gg(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ne===e&&(ue&a)===a&&(ke===4||ke===3&&(ue&62914560)===ue&&300>mt()-Pi?(ge&2)===0&&Xn(e,0):jo|=a,Vn===ue&&(Vn=0)),Ft(e)}function Vf(e,t){t===0&&(t=Bc()),e=$a(e,t),e!==null&&(ol(e,t),Ft(e))}function yg(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Vf(e,a)}function vg(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(u(314))}n!==null&&n.delete(t),Vf(e,a)}function bg(e,t){return Yr(e,t)}var rr=null,Fn=null,Oo=!1,sr=!1,Do=!1,Ba=0;function Ft(e){e!==Fn&&e.next===null&&(Fn===null?rr=Fn=e:Fn=Fn.next=e),sr=!0,Oo||(Oo=!0,Sg())}function Gl(e,t){if(!Do&&sr){Do=!0;do for(var a=!1,n=rr;n!==null;){if(e!==0){var l=n.pendingLanes;if(l===0)var i=0;else{var d=n.suspendedLanes,m=n.pingedLanes;i=(1<<31-gt(42|e)+1)-1,i&=l&~(d&~m),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Ff(n,i))}else i=ue,i=di(n,n===Ne?i:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(i&3)===0||sl(n,i)||(a=!0,Ff(n,i));n=n.next}while(a);Do=!1}}function xg(){Qf()}function Qf(){sr=Oo=!1;var e=0;Ba!==0&&Dg()&&(e=Ba);for(var t=mt(),a=null,n=rr;n!==null;){var l=n.next,i=Xf(n,t);i===0?(n.next=null,a===null?rr=l:a.next=l,l===null&&(Fn=a)):(a=n,(e!==0||(i&3)!==0)&&(sr=!0)),n=l}Xe!==0&&Xe!==5||Gl(e),Ba!==0&&(Ba=0)}function Xf(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var d=31-gt(i),m=1<<d,x=l[d];x===-1?((m&a)===0||(m&n)!==0)&&(l[d]=Fm(m,t)):x<=t&&(e.expiredLanes|=m),i&=~m}if(t=Ne,a=ue,a=di(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(be===2||be===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Gr(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||sl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&Gr(n),Xr(a)){case 2:case 8:a=_c;break;case 32:a=si;break;case 268435456:a=kc;break;default:a=si}return n=Zf.bind(null,e),a=Yr(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&Gr(n),e.callbackPriority=2,e.callbackNode=null,2}function Zf(e,t){if(Xe!==0&&Xe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ir()&&e.callbackNode!==a)return null;var n=ue;return n=di(e,e===Ne?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Nf(e,n,t),Xf(e,mt()),e.callbackNode!=null&&e.callbackNode===a?Zf.bind(null,e):null)}function Ff(e,t){if(ir())return null;Nf(e,t,!0)}function Sg(){Rg(function(){(ge&6)!==0?Yr(Rc,xg):Qf()})}function Mo(){if(Ba===0){var e=Mn;e===0&&(e=oi,oi<<=1,(oi&261888)===0&&(oi=256)),Ba=e}return Ba}function Jf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:pi(""+e)}function Kf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function jg(e,t,a,n,l){if(t==="submit"&&a&&a.stateNode===l){var i=Jf((l[it]||null).action),d=n.submitter;d&&(t=(t=d[it]||null)?Jf(t.formAction):d.getAttribute("formAction"),t!==null&&(i=t,d=null));var m=new bi("action","action",null,n,l);e.push({event:m,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Ba!==0){var x=d?Kf(l,d):new FormData(l);$s(a,{pending:!0,data:x,method:l.method,action:i},null,x)}}else typeof i=="function"&&(m.preventDefault(),x=d?Kf(l,d):new FormData(l),$s(a,{pending:!0,data:x,method:l.method,action:i},i,x))},currentTarget:l}]})}}for(var Ro=0;Ro<ms.length;Ro++){var _o=ms[Ro],wg=_o.toLowerCase(),Eg=_o[0].toUpperCase()+_o.slice(1);Ht(wg,"on"+Eg)}Ht(Au,"onAnimationEnd"),Ht(Cu,"onAnimationIteration"),Ht(Nu,"onAnimationStart"),Ht("dblclick","onDoubleClick"),Ht("focusin","onFocus"),Ht("focusout","onBlur"),Ht(qp,"onTransitionRun"),Ht(Yp,"onTransitionStart"),Ht(Gp,"onTransitionCancel"),Ht(Tu,"onTransitionEnd"),vn("onMouseEnter",["mouseout","mouseover"]),vn("onMouseLeave",["mouseout","mouseover"]),vn("onPointerEnter",["pointerout","pointerover"]),vn("onPointerLeave",["pointerout","pointerover"]),Fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Fa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ag=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vl));function Wf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],l=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var d=n.length-1;0<=d;d--){var m=n[d],x=m.instance,N=m.currentTarget;if(m=m.listener,x!==i&&l.isPropagationStopped())break e;i=m,l.currentTarget=N;try{i(l)}catch(M){ji(M)}l.currentTarget=null,i=x}else for(d=0;d<n.length;d++){if(m=n[d],x=m.instance,N=m.currentTarget,m=m.listener,x!==i&&l.isPropagationStopped())break e;i=m,l.currentTarget=N;try{i(l)}catch(M){ji(M)}l.currentTarget=null,i=x}}}}function oe(e,t){var a=t[Zr];a===void 0&&(a=t[Zr]=new Set);var n=e+"__bubble";a.has(n)||($f(t,e,2,!1),a.add(n))}function ko(e,t,a){var n=0;t&&(n|=4),$f(a,e,n,t)}var or="_reactListening"+Math.random().toString(36).slice(2);function Bo(e){if(!e[or]){e[or]=!0,Vc.forEach(function(a){a!=="selectionchange"&&(Ag.has(a)||ko(a,!1,e),ko(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[or]||(t[or]=!0,ko("selectionchange",!1,t))}}function $f(e,t,a,n){switch(Ch(t)){case 2:var l=Pg;break;case 8:l=e0;break;default:l=$o}a=l.bind(null,t,a,e),l=void 0,!ts||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function Uo(e,t,a,n,l){var i=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var d=n.tag;if(d===3||d===4){var m=n.stateNode.containerInfo;if(m===l)break;if(d===4)for(d=n.return;d!==null;){var x=d.tag;if((x===3||x===4)&&d.stateNode.containerInfo===l)return;d=d.return}for(;m!==null;){if(d=pn(m),d===null)return;if(x=d.tag,x===5||x===6||x===26||x===27){n=i=d;continue e}m=m.parentNode}}n=n.return}tu(function(){var N=i,M=Pr(a),k=[];e:{var T=zu.get(e);if(T!==void 0){var z=bi,Q=e;switch(e){case"keypress":if(yi(a)===0)break e;case"keydown":case"keyup":z=vp;break;case"focusin":Q="focus",z=is;break;case"focusout":Q="blur",z=is;break;case"beforeblur":case"afterblur":z=is;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=lu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=rp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=Sp;break;case Au:case Cu:case Nu:z=cp;break;case Tu:z=wp;break;case"scroll":case"scrollend":z=lp;break;case"wheel":z=Ap;break;case"copy":case"cut":case"paste":z=dp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=ru;break;case"toggle":case"beforetoggle":z=Np}var K=(t&4)!==0,Ae=!K&&(e==="scroll"||e==="scrollend"),E=K?T!==null?T+"Capture":null:T;K=[];for(var S=N,C;S!==null;){var _=S;if(C=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||C===null||E===null||(_=dl(S,E),_!=null&&K.push(Ql(S,_,C))),Ae)break;S=S.return}0<K.length&&(T=new z(T,Q,null,a,M),k.push({event:T,listeners:K}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",z=e==="mouseout"||e==="pointerout",T&&a!==Ir&&(Q=a.relatedTarget||a.fromElement)&&(pn(Q)||Q[mn]))break e;if((z||T)&&(T=M.window===M?M:(T=M.ownerDocument)?T.defaultView||T.parentWindow:window,z?(Q=a.relatedTarget||a.toElement,z=N,Q=Q?pn(Q):null,Q!==null&&(Ae=h(Q),K=Q.tag,Q!==Ae||K!==5&&K!==27&&K!==6)&&(Q=null)):(z=null,Q=N),z!==Q)){if(K=lu,_="onMouseLeave",E="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(K=ru,_="onPointerLeave",E="onPointerEnter",S="pointer"),Ae=z==null?T:ul(z),C=Q==null?T:ul(Q),T=new K(_,S+"leave",z,a,M),T.target=Ae,T.relatedTarget=C,_=null,pn(M)===N&&(K=new K(E,S+"enter",Q,a,M),K.target=C,K.relatedTarget=Ae,_=K),Ae=_,z&&Q)t:{for(K=Cg,E=z,S=Q,C=0,_=E;_;_=K(_))C++;_=0;for(var J=S;J;J=K(J))_++;for(;0<C-_;)E=K(E),C--;for(;0<_-C;)S=K(S),_--;for(;C--;){if(E===S||S!==null&&E===S.alternate){K=E;break t}E=K(E),S=K(S)}K=null}else K=null;z!==null&&If(k,T,z,K,!1),Q!==null&&Ae!==null&&If(k,Ae,Q,K,!0)}}e:{if(T=N?ul(N):window,z=T.nodeName&&T.nodeName.toLowerCase(),z==="select"||z==="input"&&T.type==="file")var he=mu;else if(fu(T))if(pu)he=Up;else{he=kp;var Z=_p}else z=T.nodeName,!z||z.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?N&&$r(N.elementType)&&(he=mu):he=Bp;if(he&&(he=he(e,N))){hu(k,he,a,M);break e}Z&&Z(e,T,N),e==="focusout"&&N&&T.type==="number"&&N.memoizedProps.value!=null&&Wr(T,"number",T.value)}switch(Z=N?ul(N):window,e){case"focusin":(fu(Z)||Z.contentEditable==="true")&&(En=Z,ds=N,bl=null);break;case"focusout":bl=ds=En=null;break;case"mousedown":fs=!0;break;case"contextmenu":case"mouseup":case"dragend":fs=!1,wu(k,a,M);break;case"selectionchange":if(Hp)break;case"keydown":case"keyup":wu(k,a,M)}var ne;if(ss)e:{switch(e){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else wn?uu(e,a)&&(de="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(de="onCompositionStart");de&&(su&&a.locale!=="ko"&&(wn||de!=="onCompositionStart"?de==="onCompositionEnd"&&wn&&(ne=au()):(xa=M,as="value"in xa?xa.value:xa.textContent,wn=!0)),Z=cr(N,de),0<Z.length&&(de=new iu(de,e,null,a,M),k.push({event:de,listeners:Z}),ne?de.data=ne:(ne=du(a),ne!==null&&(de.data=ne)))),(ne=zp?Op(e,a):Dp(e,a))&&(de=cr(N,"onBeforeInput"),0<de.length&&(Z=new iu("onBeforeInput","beforeinput",null,a,M),k.push({event:Z,listeners:de}),Z.data=ne)),jg(k,e,N,a,M)}Wf(k,t)})}function Ql(e,t,a){return{instance:e,listener:t,currentTarget:a}}function cr(e,t){for(var a=t+"Capture",n=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=dl(e,a),l!=null&&n.unshift(Ql(e,l,i)),l=dl(e,t),l!=null&&n.push(Ql(e,l,i))),e.tag===3)return n;e=e.return}return[]}function Cg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function If(e,t,a,n,l){for(var i=t._reactName,d=[];a!==null&&a!==n;){var m=a,x=m.alternate,N=m.stateNode;if(m=m.tag,x!==null&&x===n)break;m!==5&&m!==26&&m!==27||N===null||(x=N,l?(N=dl(a,i),N!=null&&d.unshift(Ql(a,N,x))):l||(N=dl(a,i),N!=null&&d.push(Ql(a,N,x)))),a=a.return}d.length!==0&&e.push({event:t,listeners:d})}var Ng=/\r\n?/g,Tg=/\u0000|\uFFFD/g;function Pf(e){return(typeof e=="string"?e:""+e).replace(Ng,`
`).replace(Tg,"")}function eh(e,t){return t=Pf(t),Pf(e)===t}function Ee(e,t,a,n,l,i){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||xn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&xn(e,""+n);break;case"className":hi(e,"class",n);break;case"tabIndex":hi(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":hi(e,a,n);break;case"style":Pc(e,n,i);break;case"data":if(t!=="object"){hi(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=pi(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&Ee(e,t,"name",l.name,l,null),Ee(e,t,"formEncType",l.formEncType,l,null),Ee(e,t,"formMethod",l.formMethod,l,null),Ee(e,t,"formTarget",l.formTarget,l,null)):(Ee(e,t,"encType",l.encType,l,null),Ee(e,t,"method",l.method,l,null),Ee(e,t,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=pi(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=It);break;case"onScroll":n!=null&&oe("scroll",e);break;case"onScrollEnd":n!=null&&oe("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(u(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=pi(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":oe("beforetoggle",e),oe("toggle",e),fi(e,"popover",n);break;case"xlinkActuate":$t(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":$t(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":$t(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":$t(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":$t(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":$t(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":$t(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":$t(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":$t(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":fi(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ap.get(a)||a,fi(e,a,n))}}function Lo(e,t,a,n,l,i){switch(a){case"style":Pc(e,n,i);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(u(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"children":typeof n=="string"?xn(e,n):(typeof n=="number"||typeof n=="bigint")&&xn(e,""+n);break;case"onScroll":n!=null&&oe("scroll",e);break;case"onScrollEnd":n!=null&&oe("scrollend",e);break;case"onClick":n!=null&&(e.onclick=It);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Qc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),i=e[it]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,l),typeof n=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,l);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):fi(e,a,n)}}}function et(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":oe("error",e),oe("load",e);var n=!1,l=!1,i;for(i in a)if(a.hasOwnProperty(i)){var d=a[i];if(d!=null)switch(i){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Ee(e,t,i,d,a,null)}}l&&Ee(e,t,"srcSet",a.srcSet,a,null),n&&Ee(e,t,"src",a.src,a,null);return;case"input":oe("invalid",e);var m=i=d=l=null,x=null,N=null;for(n in a)if(a.hasOwnProperty(n)){var M=a[n];if(M!=null)switch(n){case"name":l=M;break;case"type":d=M;break;case"checked":x=M;break;case"defaultChecked":N=M;break;case"value":i=M;break;case"defaultValue":m=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(u(137,t));break;default:Ee(e,t,n,M,a,null)}}Kc(e,i,m,x,N,d,l,!1);return;case"select":oe("invalid",e),n=d=i=null;for(l in a)if(a.hasOwnProperty(l)&&(m=a[l],m!=null))switch(l){case"value":i=m;break;case"defaultValue":d=m;break;case"multiple":n=m;default:Ee(e,t,l,m,a,null)}t=i,a=d,e.multiple=!!n,t!=null?bn(e,!!n,t,!1):a!=null&&bn(e,!!n,a,!0);return;case"textarea":oe("invalid",e),i=l=n=null;for(d in a)if(a.hasOwnProperty(d)&&(m=a[d],m!=null))switch(d){case"value":n=m;break;case"defaultValue":l=m;break;case"children":i=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(u(91));break;default:Ee(e,t,d,m,a,null)}$c(e,n,l,i);return;case"option":for(x in a)if(a.hasOwnProperty(x)&&(n=a[x],n!=null))switch(x){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Ee(e,t,x,n,a,null)}return;case"dialog":oe("beforetoggle",e),oe("toggle",e),oe("cancel",e),oe("close",e);break;case"iframe":case"object":oe("load",e);break;case"video":case"audio":for(n=0;n<Vl.length;n++)oe(Vl[n],e);break;case"image":oe("error",e),oe("load",e);break;case"details":oe("toggle",e);break;case"embed":case"source":case"link":oe("error",e),oe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in a)if(a.hasOwnProperty(N)&&(n=a[N],n!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Ee(e,t,N,n,a,null)}return;default:if($r(t)){for(M in a)a.hasOwnProperty(M)&&(n=a[M],n!==void 0&&Lo(e,t,M,n,a,void 0));return}}for(m in a)a.hasOwnProperty(m)&&(n=a[m],n!=null&&Ee(e,t,m,n,a,null))}function zg(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,d=null,m=null,x=null,N=null,M=null;for(z in a){var k=a[z];if(a.hasOwnProperty(z)&&k!=null)switch(z){case"checked":break;case"value":break;case"defaultValue":x=k;default:n.hasOwnProperty(z)||Ee(e,t,z,null,n,k)}}for(var T in n){var z=n[T];if(k=a[T],n.hasOwnProperty(T)&&(z!=null||k!=null))switch(T){case"type":i=z;break;case"name":l=z;break;case"checked":N=z;break;case"defaultChecked":M=z;break;case"value":d=z;break;case"defaultValue":m=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(u(137,t));break;default:z!==k&&Ee(e,t,T,z,n,k)}}Kr(e,d,m,x,N,M,i,l);return;case"select":z=d=m=T=null;for(i in a)if(x=a[i],a.hasOwnProperty(i)&&x!=null)switch(i){case"value":break;case"multiple":z=x;default:n.hasOwnProperty(i)||Ee(e,t,i,null,n,x)}for(l in n)if(i=n[l],x=a[l],n.hasOwnProperty(l)&&(i!=null||x!=null))switch(l){case"value":T=i;break;case"defaultValue":m=i;break;case"multiple":d=i;default:i!==x&&Ee(e,t,l,i,n,x)}t=m,a=d,n=z,T!=null?bn(e,!!a,T,!1):!!n!=!!a&&(t!=null?bn(e,!!a,t,!0):bn(e,!!a,a?[]:"",!1));return;case"textarea":z=T=null;for(m in a)if(l=a[m],a.hasOwnProperty(m)&&l!=null&&!n.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:Ee(e,t,m,null,n,l)}for(d in n)if(l=n[d],i=a[d],n.hasOwnProperty(d)&&(l!=null||i!=null))switch(d){case"value":T=l;break;case"defaultValue":z=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(u(91));break;default:l!==i&&Ee(e,t,d,l,n,i)}Wc(e,T,z);return;case"option":for(var Q in a)if(T=a[Q],a.hasOwnProperty(Q)&&T!=null&&!n.hasOwnProperty(Q))switch(Q){case"selected":e.selected=!1;break;default:Ee(e,t,Q,null,n,T)}for(x in n)if(T=n[x],z=a[x],n.hasOwnProperty(x)&&T!==z&&(T!=null||z!=null))switch(x){case"selected":e.selected=T&&typeof T!="function"&&typeof T!="symbol";break;default:Ee(e,t,x,T,n,z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var K in a)T=a[K],a.hasOwnProperty(K)&&T!=null&&!n.hasOwnProperty(K)&&Ee(e,t,K,null,n,T);for(N in n)if(T=n[N],z=a[N],n.hasOwnProperty(N)&&T!==z&&(T!=null||z!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(u(137,t));break;default:Ee(e,t,N,T,n,z)}return;default:if($r(t)){for(var Ae in a)T=a[Ae],a.hasOwnProperty(Ae)&&T!==void 0&&!n.hasOwnProperty(Ae)&&Lo(e,t,Ae,void 0,n,T);for(M in n)T=n[M],z=a[M],!n.hasOwnProperty(M)||T===z||T===void 0&&z===void 0||Lo(e,t,M,T,n,z);return}}for(var E in a)T=a[E],a.hasOwnProperty(E)&&T!=null&&!n.hasOwnProperty(E)&&Ee(e,t,E,null,n,T);for(k in n)T=n[k],z=a[k],!n.hasOwnProperty(k)||T===z||T==null&&z==null||Ee(e,t,k,T,n,z)}function th(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Og(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var l=a[n],i=l.transferSize,d=l.initiatorType,m=l.duration;if(i&&m&&th(d)){for(d=0,m=l.responseEnd,n+=1;n<a.length;n++){var x=a[n],N=x.startTime;if(N>m)break;var M=x.transferSize,k=x.initiatorType;M&&th(k)&&(x=x.responseEnd,d+=M*(x<m?1:(m-N)/(x-N)))}if(--n,t+=8*(i+d)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ho=null,qo=null;function ur(e){return e.nodeType===9?e:e.ownerDocument}function ah(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function nh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Yo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Go=null;function Dg(){var e=window.event;return e&&e.type==="popstate"?e===Go?!1:(Go=e,!0):(Go=null,!1)}var lh=typeof setTimeout=="function"?setTimeout:void 0,Mg=typeof clearTimeout=="function"?clearTimeout:void 0,ih=typeof Promise=="function"?Promise:void 0,Rg=typeof queueMicrotask=="function"?queueMicrotask:typeof ih!="undefined"?function(e){return ih.resolve(null).then(e).catch(_g)}:lh;function _g(e){setTimeout(function(){throw e})}function Ua(e){return e==="head"}function rh(e,t){var a=t,n=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(l),$n(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")Xl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Xl(a);for(var i=a.firstChild;i;){var d=i.nextSibling,m=i.nodeName;i[cl]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=d}}else a==="body"&&Xl(e.ownerDocument.body);a=l}while(a);$n(t)}function sh(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function Vo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Vo(a),Fr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function kg(e,t,a,n){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[cl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=_t(e.nextSibling),e===null)break}return null}function Bg(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_t(e.nextSibling),e===null))return null;return e}function oh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=_t(e.nextSibling),e===null))return null;return e}function Qo(e){return e.data==="$?"||e.data==="$~"}function Xo(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ug(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function _t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Zo=null;function ch(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return _t(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function uh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function dh(e,t,a){switch(t=ur(a),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function Xl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Fr(e)}var kt=new Map,fh=new Set;function dr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ma=Y.d;Y.d={f:Lg,r:Hg,D:qg,C:Yg,L:Gg,m:Vg,X:Xg,S:Qg,M:Zg};function Lg(){var e=ma.f(),t=ar();return e||t}function Hg(e){var t=gn(e);t!==null&&t.tag===5&&t.type==="form"?Td(t):ma.r(e)}var Jn=typeof document=="undefined"?null:document;function hh(e,t,a){var n=Jn;if(n&&typeof t=="string"&&t){var l=Nt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),fh.has(l)||(fh.add(l),e={rel:e,crossOrigin:a,href:t},n.querySelector(l)===null&&(t=n.createElement("link"),et(t,"link",e),Je(t),n.head.appendChild(t)))}}function qg(e){ma.D(e),hh("dns-prefetch",e,null)}function Yg(e,t){ma.C(e,t),hh("preconnect",e,t)}function Gg(e,t,a){ma.L(e,t,a);var n=Jn;if(n&&e&&t){var l='link[rel="preload"][as="'+Nt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+Nt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+Nt(a.imageSizes)+'"]')):l+='[href="'+Nt(e)+'"]';var i=l;switch(t){case"style":i=Kn(e);break;case"script":i=Wn(e)}kt.has(i)||(e=b({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),kt.set(i,e),n.querySelector(l)!==null||t==="style"&&n.querySelector(Zl(i))||t==="script"&&n.querySelector(Fl(i))||(t=n.createElement("link"),et(t,"link",e),Je(t),n.head.appendChild(t)))}}function Vg(e,t){ma.m(e,t);var a=Jn;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Nt(n)+'"][href="'+Nt(e)+'"]',i=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Wn(e)}if(!kt.has(i)&&(e=b({rel:"modulepreload",href:e},t),kt.set(i,e),a.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Fl(i)))return}n=a.createElement("link"),et(n,"link",e),Je(n),a.head.appendChild(n)}}}function Qg(e,t,a){ma.S(e,t,a);var n=Jn;if(n&&e){var l=yn(n).hoistableStyles,i=Kn(e);t=t||"default";var d=l.get(i);if(!d){var m={loading:0,preload:null};if(d=n.querySelector(Zl(i)))m.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":t},a),(a=kt.get(i))&&Fo(e,a);var x=d=n.createElement("link");Je(x),et(x,"link",e),x._p=new Promise(function(N,M){x.onload=N,x.onerror=M}),x.addEventListener("load",function(){m.loading|=1}),x.addEventListener("error",function(){m.loading|=2}),m.loading|=4,fr(d,t,n)}d={type:"stylesheet",instance:d,count:1,state:m},l.set(i,d)}}}function Xg(e,t){ma.X(e,t);var a=Jn;if(a&&e){var n=yn(a).hoistableScripts,l=Wn(e),i=n.get(l);i||(i=a.querySelector(Fl(l)),i||(e=b({src:e,async:!0},t),(t=kt.get(l))&&Jo(e,t),i=a.createElement("script"),Je(i),et(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function Zg(e,t){ma.M(e,t);var a=Jn;if(a&&e){var n=yn(a).hoistableScripts,l=Wn(e),i=n.get(l);i||(i=a.querySelector(Fl(l)),i||(e=b({src:e,async:!0,type:"module"},t),(t=kt.get(l))&&Jo(e,t),i=a.createElement("script"),Je(i),et(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function mh(e,t,a,n){var l=(l=re.current)?dr(l):null;if(!l)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Kn(a.href),a=yn(l).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Kn(a.href);var i=yn(l).hoistableStyles,d=i.get(e);if(d||(l=l.ownerDocument||l,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,d),(i=l.querySelector(Zl(e)))&&!i._p&&(d.instance=i,d.state.loading=5),kt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},kt.set(e,a),i||Fg(l,e,a,d.state))),t&&n===null)throw Error(u(528,""));return d}if(t&&n!==null)throw Error(u(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Wn(a),a=yn(l).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Kn(e){return'href="'+Nt(e)+'"'}function Zl(e){return'link[rel="stylesheet"]['+e+"]"}function ph(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function Fg(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),et(t,"link",a),Je(t),e.head.appendChild(t))}function Wn(e){return'[src="'+Nt(e)+'"]'}function Fl(e){return"script[async]"+e}function gh(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+Nt(a.href)+'"]');if(n)return t.instance=n,Je(n),n;var l=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Je(n),et(n,"style",l),fr(n,a.precedence,e),t.instance=n;case"stylesheet":l=Kn(a.href);var i=e.querySelector(Zl(l));if(i)return t.state.loading|=4,t.instance=i,Je(i),i;n=ph(a),(l=kt.get(l))&&Fo(n,l),i=(e.ownerDocument||e).createElement("link"),Je(i);var d=i;return d._p=new Promise(function(m,x){d.onload=m,d.onerror=x}),et(i,"link",n),t.state.loading|=4,fr(i,a.precedence,e),t.instance=i;case"script":return i=Wn(a.src),(l=e.querySelector(Fl(i)))?(t.instance=l,Je(l),l):(n=a,(l=kt.get(i))&&(n=b({},a),Jo(n,l)),e=e.ownerDocument||e,l=e.createElement("script"),Je(l),et(l,"link",n),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,fr(n,a.precedence,e));return t.instance}function fr(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,i=l,d=0;d<n.length;d++){var m=n[d];if(m.dataset.precedence===t)i=m;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Fo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Jo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var hr=null;function yh(e,t,a){if(hr===null){var n=new Map,l=hr=new Map;l.set(a,n)}else l=hr,n=l.get(a),n||(n=new Map,l.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var i=a[l];if(!(i[cl]||i[We]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var d=i.getAttribute(t)||"";d=e+d;var m=n.get(d);m?m.push(i):n.set(d,[i])}}return n}function vh(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Jg(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function bh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Kg(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=Kn(n.href),i=t.querySelector(Zl(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=mr.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Je(i);return}i=t.ownerDocument||t,n=ph(n),(l=kt.get(l))&&Fo(n,l),i=i.createElement("link"),Je(i);var d=i;d._p=new Promise(function(m,x){d.onload=m,d.onerror=x}),et(i,"link",n),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=mr.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Ko=0;function Wg(e,t){return e.stylesheets&&e.count===0&&gr(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&gr(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Ko===0&&(Ko=62500*Og());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&gr(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Ko?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(l)}}:null}function mr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)gr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var pr=null;function gr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,pr=new Map,t.forEach($g,e),pr=null,mr.call(e))}function $g(e,t){if(!(t.state.loading&4)){var a=pr.get(e);if(a)var n=a.get(null);else{a=new Map,pr.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var d=l[i];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(a.set(d.dataset.precedence,d),n=d)}n&&a.set(null,n)}l=t.instance,d=l.getAttribute("data-precedence"),i=a.get(d)||n,i===n&&a.set(null,l),a.set(d,l),this.count++,n=mr.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Jl={$$typeof:L,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function Ig(e,t,a,n,l,i,d,m,x){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Vr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vr(0),this.hiddenUpdates=Vr(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function xh(e,t,a,n,l,i,d,m,x,N,M,k){return e=new Ig(e,t,a,d,x,N,M,k,m),t=1,i===!0&&(t|=24),i=vt(3,null,null,t),e.current=i,i.stateNode=e,t=Ns(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:n,isDehydrated:a,cache:t},Ds(i),e}function Sh(e){return e?(e=Nn,e):Nn}function jh(e,t,a,n,l,i){l=Sh(l),n.context===null?n.context=l:n.pendingContext=l,n=Ca(t),n.payload={element:a},i=i===void 0?null:i,i!==null&&(n.callback=i),a=Na(e,n,t),a!==null&&(dt(a,e,t),Cl(a,e,t))}function wh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Wo(e,t){wh(e,t),(e=e.alternate)&&wh(e,t)}function Eh(e){if(e.tag===13||e.tag===31){var t=$a(e,67108864);t!==null&&dt(t,e,67108864),Wo(e,67108864)}}function Ah(e){if(e.tag===13||e.tag===31){var t=wt();t=Qr(t);var a=$a(e,t);a!==null&&dt(a,e,t),Wo(e,t)}}var yr=!0;function Pg(e,t,a,n){var l=R.T;R.T=null;var i=Y.p;try{Y.p=2,$o(e,t,a,n)}finally{Y.p=i,R.T=l}}function e0(e,t,a,n){var l=R.T;R.T=null;var i=Y.p;try{Y.p=8,$o(e,t,a,n)}finally{Y.p=i,R.T=l}}function $o(e,t,a,n){if(yr){var l=Io(n);if(l===null)Uo(e,t,n,vr,a),Nh(e,n);else if(a0(l,e,t,a,n))n.stopPropagation();else if(Nh(e,n),t&4&&-1<t0.indexOf(e)){for(;l!==null;){var i=gn(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var d=Za(i.pendingLanes);if(d!==0){var m=i;for(m.pendingLanes|=2,m.entangledLanes|=2;d;){var x=1<<31-gt(d);m.entanglements[1]|=x,d&=~x}Ft(i),(ge&6)===0&&(er=mt()+500,Gl(0))}}break;case 31:case 13:m=$a(i,2),m!==null&&dt(m,i,2),ar(),Wo(i,2)}if(i=Io(n),i===null&&Uo(e,t,n,vr,a),i===l)break;l=i}l!==null&&n.stopPropagation()}else Uo(e,t,n,null,a)}}function Io(e){return e=Pr(e),Po(e)}var vr=null;function Po(e){if(vr=null,e=pn(e),e!==null){var t=h(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=p(t),e!==null)return e;e=null}else if(a===31){if(e=v(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return vr=e,null}function Ch(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(qm()){case Rc:return 2;case _c:return 8;case si:case Ym:return 32;case kc:return 268435456;default:return 32}default:return 32}}var ec=!1,La=null,Ha=null,qa=null,Kl=new Map,Wl=new Map,Ya=[],t0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Nh(e,t){switch(e){case"focusin":case"focusout":La=null;break;case"dragenter":case"dragleave":Ha=null;break;case"mouseover":case"mouseout":qa=null;break;case"pointerover":case"pointerout":Kl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wl.delete(t.pointerId)}}function $l(e,t,a,n,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:i,targetContainers:[l]},t!==null&&(t=gn(t),t!==null&&Eh(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function a0(e,t,a,n,l){switch(t){case"focusin":return La=$l(La,e,t,a,n,l),!0;case"dragenter":return Ha=$l(Ha,e,t,a,n,l),!0;case"mouseover":return qa=$l(qa,e,t,a,n,l),!0;case"pointerover":var i=l.pointerId;return Kl.set(i,$l(Kl.get(i)||null,e,t,a,n,l)),!0;case"gotpointercapture":return i=l.pointerId,Wl.set(i,$l(Wl.get(i)||null,e,t,a,n,l)),!0}return!1}function Th(e){var t=pn(e.target);if(t!==null){var a=h(t);if(a!==null){if(t=a.tag,t===13){if(t=p(a),t!==null){e.blockedOn=t,Yc(e.priority,function(){Ah(a)});return}}else if(t===31){if(t=v(a),t!==null){e.blockedOn=t,Yc(e.priority,function(){Ah(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function br(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Io(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);Ir=n,a.target.dispatchEvent(n),Ir=null}else return t=gn(a),t!==null&&Eh(t),e.blockedOn=a,!1;t.shift()}return!0}function zh(e,t,a){br(e)&&a.delete(t)}function n0(){ec=!1,La!==null&&br(La)&&(La=null),Ha!==null&&br(Ha)&&(Ha=null),qa!==null&&br(qa)&&(qa=null),Kl.forEach(zh),Wl.forEach(zh)}function xr(e,t){e.blockedOn===t&&(e.blockedOn=null,ec||(ec=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,n0)))}var Sr=null;function Oh(e){Sr!==e&&(Sr=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Sr===e&&(Sr=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],l=e[t+2];if(typeof n!="function"){if(Po(n||a)===null)continue;break}var i=gn(a);i!==null&&(e.splice(t,3),t-=3,$s(i,{pending:!0,data:l,method:a.method,action:n},n,l))}}))}function $n(e){function t(x){return xr(x,e)}La!==null&&xr(La,e),Ha!==null&&xr(Ha,e),qa!==null&&xr(qa,e),Kl.forEach(t),Wl.forEach(t);for(var a=0;a<Ya.length;a++){var n=Ya[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Ya.length&&(a=Ya[0],a.blockedOn===null);)Th(a),a.blockedOn===null&&Ya.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var l=a[n],i=a[n+1],d=l[it]||null;if(typeof i=="function")d||Oh(a);else if(d){var m=null;if(i&&i.hasAttribute("formAction")){if(l=i,d=i[it]||null)m=d.formAction;else if(Po(l)!==null)continue}else m=d.action;typeof m=="function"?a[n+1]=m:(a.splice(n,3),n-=3),Oh(a)}}}function Dh(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(d){return l=d})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function tc(e){this._internalRoot=e}jr.prototype.render=tc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var a=t.current,n=wt();jh(a,n,e,t,null,null)},jr.prototype.unmount=tc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jh(e.current,2,null,e,null,null),ar(),t[mn]=null}};function jr(e){this._internalRoot=e}jr.prototype.unstable_scheduleHydration=function(e){if(e){var t=qc();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ya.length&&t!==0&&t<Ya[a].priority;a++);Ya.splice(a,0,e),a===0&&Th(e)}};var Mh=o.version;if(Mh!=="19.2.2")throw Error(u(527,Mh,"19.2.2"));Y.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=g(t),e=e!==null?j(e):null,e=e===null?null:e.stateNode,e};var l0={bundleType:0,version:"19.2.2",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.2"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var wr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wr.isDisabled&&wr.supportsFiber)try{rl=wr.inject(l0),pt=wr}catch(e){}}return Pl.createRoot=function(e,t){if(!f(e))throw Error(u(299));var a=!1,n="",l=Ld,i=Hd,d=qd;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=xh(e,1,!1,null,null,a,n,null,l,i,d,Dh),e[mn]=t.current,Bo(e),new tc(t)},Pl.hydrateRoot=function(e,t,a){if(!f(e))throw Error(u(299));var n=!1,l="",i=Ld,d=Hd,m=qd,x=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(d=a.onCaughtError),a.onRecoverableError!==void 0&&(m=a.onRecoverableError),a.formState!==void 0&&(x=a.formState)),t=xh(e,1,!0,t,a!=null?a:null,n,l,x,i,d,m,Dh),t.context=Sh(null),a=t.current,n=wt(),n=Qr(n),l=Ca(n),l.callback=null,Na(a,l,n),a=n,t.current.lanes=a,ol(t,a),Ft(t),e[mn]=t.current,Bo(e),new jr(t)},Pl.version="19.2.2",Pl}var Xh;function x0(){if(Xh)return ic.exports;Xh=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(o){console.error(o)}}return s(),ic.exports=b0(),ic.exports}var S0=x0();var Zh="popstate";function j0(s={}){function o(u,f){let{pathname:h,search:p,hash:v}=u.location;return hc("",{pathname:h,search:p,hash:v},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function c(u,f){return typeof f=="string"?f:ai(f)}return E0(o,c,null,s)}function Re(s,o){if(s===!1||s===null||typeof s=="undefined")throw new Error(o)}function Bt(s,o){if(!s){typeof console!="undefined"&&console.warn(o);try{throw new Error(o)}catch(c){}}}function w0(){return Math.random().toString(36).substring(2,10)}function Fh(s,o){return{usr:s.state,key:s.key,idx:o}}function hc(s,o,c=null,u){return qe(ie({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof o=="string"?el(o):o),{state:c,key:o&&o.key||u||w0()})}function ai({pathname:s="/",search:o="",hash:c=""}){return o&&o!=="?"&&(s+=o.charAt(0)==="?"?o:"?"+o),c&&c!=="#"&&(s+=c.charAt(0)==="#"?c:"#"+c),s}function el(s){let o={};if(s){let c=s.indexOf("#");c>=0&&(o.hash=s.substring(c),s=s.substring(0,c));let u=s.indexOf("?");u>=0&&(o.search=s.substring(u),s=s.substring(0,u)),s&&(o.pathname=s)}return o}function E0(s,o,c,u={}){let{window:f=document.defaultView,v5Compat:h=!1}=u,p=f.history,v="POP",y=null,g=j();g==null&&(g=0,p.replaceState(qe(ie({},p.state),{idx:g}),""));function j(){return(p.state||{idx:null}).idx}function b(){v="POP";let D=j(),V=D==null?null:D-g;g=D,y&&y({action:v,location:q.location,delta:V})}function O(D,V){v="PUSH";let I=hc(q.location,D,V);g=j()+1;let L=Fh(I,g),ee=q.createHref(I);try{p.pushState(L,"",ee)}catch(le){if(le instanceof DOMException&&le.name==="DataCloneError")throw le;f.location.assign(ee)}h&&y&&y({action:v,location:q.location,delta:1})}function U(D,V){v="REPLACE";let I=hc(q.location,D,V);g=j();let L=Fh(I,g),ee=q.createHref(I);p.replaceState(L,"",ee),h&&y&&y({action:v,location:q.location,delta:0})}function H(D){return A0(D)}let q={get action(){return v},get location(){return s(f,p)},listen(D){if(y)throw new Error("A history only accepts one active listener");return f.addEventListener(Zh,b),y=D,()=>{f.removeEventListener(Zh,b),y=null}},createHref(D){return o(f,D)},createURL:H,encodeLocation(D){let V=H(D);return{pathname:V.pathname,search:V.search,hash:V.hash}},push:O,replace:U,go(D){return p.go(D)}};return q}function A0(s,o=!1){let c="http://localhost";typeof window!="undefined"&&(c=window.location.origin!=="null"?window.location.origin:window.location.href),Re(c,"No window.location.(origin|href) available to create URL");let u=typeof s=="string"?s:ai(s);return u=u.replace(/ $/,"%20"),!o&&u.startsWith("//")&&(u=c+u),new URL(u,c)}function om(s,o,c="/"){return C0(s,o,c,!1)}function C0(s,o,c,u){let f=typeof o=="string"?el(o):o,h=ga(f.pathname||"/",c);if(h==null)return null;let p=cm(s);N0(p);let v=null;for(let y=0;v==null&&y<p.length;++y){let g=L0(h);v=B0(p[y],g,u)}return v}function cm(s,o=[],c=[],u="",f=!1){let h=(p,v,y=f,g)=>{let j={relativePath:g===void 0?p.path||"":g,caseSensitive:p.caseSensitive===!0,childrenIndex:v,route:p};if(j.relativePath.startsWith("/")){if(!j.relativePath.startsWith(u)&&y)return;Re(j.relativePath.startsWith(u),`Absolute route path "${j.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),j.relativePath=j.relativePath.slice(u.length)}let b=pa([u,j.relativePath]),O=c.concat(j);p.children&&p.children.length>0&&(Re(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${b}".`),cm(p.children,o,O,b,y)),!(p.path==null&&!p.index)&&o.push({path:b,score:_0(b,p.index),routesMeta:O})};return s.forEach((p,v)=>{var y;if(p.path===""||!((y=p.path)!=null&&y.includes("?")))h(p,v);else for(let g of um(p.path))h(p,v,!0,g)}),o}function um(s){let o=s.split("/");if(o.length===0)return[];let[c,...u]=o,f=c.endsWith("?"),h=c.replace(/\?$/,"");if(u.length===0)return f?[h,""]:[h];let p=um(u.join("/")),v=[];return v.push(...p.map(y=>y===""?h:[h,y].join("/"))),f&&v.push(...p),v.map(y=>s.startsWith("/")&&y===""?"/":y)}function N0(s){s.sort((o,c)=>o.score!==c.score?c.score-o.score:k0(o.routesMeta.map(u=>u.childrenIndex),c.routesMeta.map(u=>u.childrenIndex)))}var T0=/^:[\w-]+$/,z0=3,O0=2,D0=1,M0=10,R0=-2,Jh=s=>s==="*";function _0(s,o){let c=s.split("/"),u=c.length;return c.some(Jh)&&(u+=R0),o&&(u+=O0),c.filter(f=>!Jh(f)).reduce((f,h)=>f+(T0.test(h)?z0:h===""?D0:M0),u)}function k0(s,o){return s.length===o.length&&s.slice(0,-1).every((u,f)=>u===o[f])?s[s.length-1]-o[o.length-1]:0}function B0(s,o,c=!1){let{routesMeta:u}=s,f={},h="/",p=[];for(let v=0;v<u.length;++v){let y=u[v],g=v===u.length-1,j=h==="/"?o:o.slice(h.length)||"/",b=Or({path:y.relativePath,caseSensitive:y.caseSensitive,end:g},j),O=y.route;if(!b&&g&&c&&!u[u.length-1].route.index&&(b=Or({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},j)),!b)return null;Object.assign(f,b.params),p.push({params:f,pathname:pa([h,b.pathname]),pathnameBase:V0(pa([h,b.pathnameBase])),route:O}),b.pathnameBase!=="/"&&(h=pa([h,b.pathnameBase]))}return p}function Or(s,o){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[c,u]=U0(s.path,s.caseSensitive,s.end),f=o.match(c);if(!f)return null;let h=f[0],p=h.replace(/(.)\/+$/,"$1"),v=f.slice(1);return{params:u.reduce((g,{paramName:j,isOptional:b},O)=>{if(j==="*"){let H=v[O]||"";p=h.slice(0,h.length-H.length).replace(/(.)\/+$/,"$1")}const U=v[O];return b&&!U?g[j]=void 0:g[j]=(U||"").replace(/%2F/g,"/"),g},{}),pathname:h,pathnameBase:p,pattern:s}}function U0(s,o=!1,c=!0){Bt(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let u=[],f="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,v,y)=>(u.push({paramName:v,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(u.push({paramName:"*"}),f+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?f+="\\/*$":s!==""&&s!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,o?void 0:"i"),u]}function L0(s){try{return s.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Bt(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),s}}function ga(s,o){if(o==="/")return s;if(!s.toLowerCase().startsWith(o.toLowerCase()))return null;let c=o.endsWith("/")?o.length-1:o.length,u=s.charAt(c);return u&&u!=="/"?null:s.slice(c)||"/"}var H0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,q0=s=>H0.test(s);function Y0(s,o="/"){let{pathname:c,search:u="",hash:f=""}=typeof s=="string"?el(s):s,h;if(c)if(q0(c))h=c;else{if(c.includes("//")){let p=c;c=c.replace(/\/\/+/g,"/"),Bt(!1,`Pathnames cannot have embedded double slashes - normalizing ${p} -> ${c}`)}c.startsWith("/")?h=Kh(c.substring(1),"/"):h=Kh(c,o)}else h=o;return{pathname:h,search:Q0(u),hash:X0(f)}}function Kh(s,o){let c=o.replace(/\/+$/,"").split("/");return s.split("/").forEach(f=>{f===".."?c.length>1&&c.pop():f!=="."&&c.push(f)}),c.length>1?c.join("/"):"/"}function cc(s,o,c,u){return`Cannot include a '${s}' character in a manually specified \`to.${o}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function G0(s){return s.filter((o,c)=>c===0||o.route.path&&o.route.path.length>0)}function dm(s){let o=G0(s);return o.map((c,u)=>u===o.length-1?c.pathname:c.pathnameBase)}function fm(s,o,c,u=!1){let f;typeof s=="string"?f=el(s):(f=ie({},s),Re(!f.pathname||!f.pathname.includes("?"),cc("?","pathname","search",f)),Re(!f.pathname||!f.pathname.includes("#"),cc("#","pathname","hash",f)),Re(!f.search||!f.search.includes("#"),cc("#","search","hash",f)));let h=s===""||f.pathname==="",p=h?"/":f.pathname,v;if(p==null)v=c;else{let b=o.length-1;if(!u&&p.startsWith("..")){let O=p.split("/");for(;O[0]==="..";)O.shift(),b-=1;f.pathname=O.join("/")}v=b>=0?o[b]:"/"}let y=Y0(f,v),g=p&&p!=="/"&&p.endsWith("/"),j=(h||p===".")&&c.endsWith("/");return!y.pathname.endsWith("/")&&(g||j)&&(y.pathname+="/"),y}var pa=s=>s.join("/").replace(/\/\/+/g,"/"),V0=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Q0=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,X0=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function Z0(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function F0(s){return s.map(o=>o.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var hm=["POST","PUT","PATCH","DELETE"];new Set(hm);var J0=["GET",...hm];new Set(J0);var tl=A.createContext(null);tl.displayName="DataRouter";var Rr=A.createContext(null);Rr.displayName="DataRouterState";A.createContext(!1);var mm=A.createContext({isTransitioning:!1});mm.displayName="ViewTransition";var K0=A.createContext(new Map);K0.displayName="Fetchers";var W0=A.createContext(null);W0.displayName="Await";var Vt=A.createContext(null);Vt.displayName="Navigation";var ni=A.createContext(null);ni.displayName="Location";var Kt=A.createContext({outlet:null,matches:[],isDataRoute:!1});Kt.displayName="Route";var Ec=A.createContext(null);Ec.displayName="RouteError";function $0(s,{relative:o}={}){Re(li(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:u}=A.useContext(Vt),{hash:f,pathname:h,search:p}=ii(s,{relative:o}),v=h;return c!=="/"&&(v=h==="/"?c:pa([c,h])),u.createHref({pathname:v,search:p,hash:f})}function li(){return A.useContext(ni)!=null}function Wt(){return Re(li(),"useLocation() may be used only in the context of a <Router> component."),A.useContext(ni).location}var pm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function gm(s){A.useContext(Vt).static||A.useLayoutEffect(s)}function al(){let{isDataRoute:s}=A.useContext(Kt);return s?uy():I0()}function I0(){Re(li(),"useNavigate() may be used only in the context of a <Router> component.");let s=A.useContext(tl),{basename:o,navigator:c}=A.useContext(Vt),{matches:u}=A.useContext(Kt),{pathname:f}=Wt(),h=JSON.stringify(dm(u)),p=A.useRef(!1);return gm(()=>{p.current=!0}),A.useCallback((y,g={})=>{if(Bt(p.current,pm),!p.current)return;if(typeof y=="number"){c.go(y);return}let j=fm(y,JSON.parse(h),f,g.relative==="path");s==null&&o!=="/"&&(j.pathname=j.pathname==="/"?o:pa([o,j.pathname])),(g.replace?c.replace:c.push)(j,g.state,g)},[o,c,h,f,s])}A.createContext(null);function ym(){let{matches:s}=A.useContext(Kt),o=s[s.length-1];return o?o.params:{}}function ii(s,{relative:o}={}){let{matches:c}=A.useContext(Kt),{pathname:u}=Wt(),f=JSON.stringify(dm(c));return A.useMemo(()=>fm(s,JSON.parse(f),u,o==="path"),[s,f,u,o])}function P0(s,o){return vm(s,o)}function vm(s,o,c,u,f){var I;Re(li(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:h}=A.useContext(Vt),{matches:p}=A.useContext(Kt),v=p[p.length-1],y=v?v.params:{},g=v?v.pathname:"/",j=v?v.pathnameBase:"/",b=v&&v.route;{let L=b&&b.path||"";bm(g,!b||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let O=Wt(),U;if(o){let L=typeof o=="string"?el(o):o;Re(j==="/"||((I=L.pathname)==null?void 0:I.startsWith(j)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${j}" but pathname "${L.pathname}" was given in the \`location\` prop.`),U=L}else U=O;let H=U.pathname||"/",q=H;if(j!=="/"){let L=j.replace(/^\//,"").split("/");q="/"+H.replace(/^\//,"").split("/").slice(L.length).join("/")}let D=om(s,{pathname:q});Bt(b||D!=null,`No routes matched location "${U.pathname}${U.search}${U.hash}" `),Bt(D==null||D[D.length-1].route.element!==void 0||D[D.length-1].route.Component!==void 0||D[D.length-1].route.lazy!==void 0,`Matched leaf route at location "${U.pathname}${U.search}${U.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let V=ly(D&&D.map(L=>Object.assign({},L,{params:Object.assign({},y,L.params),pathname:pa([j,h.encodeLocation?h.encodeLocation(L.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?j:pa([j,h.encodeLocation?h.encodeLocation(L.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathnameBase])})),p,c,u,f);return o&&V?A.createElement(ni.Provider,{value:{location:ie({pathname:"/",search:"",hash:"",state:null,key:"default"},U),navigationType:"POP"}},V):V}function ey(){let s=cy(),o=Z0(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),c=s instanceof Error?s.stack:null,u="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:u},h={padding:"2px 4px",backgroundColor:u},p=null;return console.error("Error handled by React Router default ErrorBoundary:",s),p=A.createElement(A.Fragment,null,A.createElement("p",null,"💿 Hey developer 👋"),A.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",A.createElement("code",{style:h},"ErrorBoundary")," or"," ",A.createElement("code",{style:h},"errorElement")," prop on your route.")),A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},o),c?A.createElement("pre",{style:f},c):null,p)}var ty=A.createElement(ey,null),ay=class extends A.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,o){return o.location!==s.location||o.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:o.error,location:o.location,revalidation:s.revalidation||o.revalidation}}componentDidCatch(s,o){this.props.onError?this.props.onError(s,o):console.error("React Router caught the following error during render",s)}render(){return this.state.error!==void 0?A.createElement(Kt.Provider,{value:this.props.routeContext},A.createElement(Ec.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ny({routeContext:s,match:o,children:c}){let u=A.useContext(tl);return u&&u.static&&u.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=o.route.id),A.createElement(Kt.Provider,{value:s},c)}function ly(s,o=[],c=null,u=null,f=null){if(s==null){if(!c)return null;if(c.errors)s=c.matches;else if(o.length===0&&!c.initialized&&c.matches.length>0)s=c.matches;else return null}let h=s,p=c==null?void 0:c.errors;if(p!=null){let j=h.findIndex(b=>b.route.id&&(p==null?void 0:p[b.route.id])!==void 0);Re(j>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),h=h.slice(0,Math.min(h.length,j+1))}let v=!1,y=-1;if(c)for(let j=0;j<h.length;j++){let b=h[j];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(y=j),b.route.id){let{loaderData:O,errors:U}=c,H=b.route.loader&&!O.hasOwnProperty(b.route.id)&&(!U||U[b.route.id]===void 0);if(b.route.lazy||H){v=!0,y>=0?h=h.slice(0,y+1):h=[h[0]];break}}}let g=c&&u?(j,b)=>{var O,U,H;u(j,{location:c.location,params:(H=(U=(O=c.matches)==null?void 0:O[0])==null?void 0:U.params)!=null?H:{},unstable_pattern:F0(c.matches),errorInfo:b})}:void 0;return h.reduceRight((j,b,O)=>{let U,H=!1,q=null,D=null;c&&(U=p&&b.route.id?p[b.route.id]:void 0,q=b.route.errorElement||ty,v&&(y<0&&O===0?(bm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),H=!0,D=null):y===O&&(H=!0,D=b.route.hydrateFallbackElement||null)));let V=o.concat(h.slice(0,O+1)),I=()=>{let L;return U?L=q:H?L=D:b.route.Component?L=A.createElement(b.route.Component,null):b.route.element?L=b.route.element:L=j,A.createElement(ny,{match:b,routeContext:{outlet:j,matches:V,isDataRoute:c!=null},children:L})};return c&&(b.route.ErrorBoundary||b.route.errorElement||O===0)?A.createElement(ay,{location:c.location,revalidation:c.revalidation,component:q,error:U,children:I(),routeContext:{outlet:null,matches:V,isDataRoute:!0},onError:g}):I()},null)}function Ac(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function iy(s){let o=A.useContext(tl);return Re(o,Ac(s)),o}function ry(s){let o=A.useContext(Rr);return Re(o,Ac(s)),o}function sy(s){let o=A.useContext(Kt);return Re(o,Ac(s)),o}function Cc(s){let o=sy(s),c=o.matches[o.matches.length-1];return Re(c.route.id,`${s} can only be used on routes that contain a unique "id"`),c.route.id}function oy(){return Cc("useRouteId")}function cy(){var u;let s=A.useContext(Ec),o=ry("useRouteError"),c=Cc("useRouteError");return s!==void 0?s:(u=o.errors)==null?void 0:u[c]}function uy(){let{router:s}=iy("useNavigate"),o=Cc("useNavigate"),c=A.useRef(!1);return gm(()=>{c.current=!0}),A.useCallback((p,...v)=>Gt(null,[p,...v],function*(f,h={}){Bt(c.current,pm),c.current&&(typeof f=="number"?yield s.navigate(f):yield s.navigate(f,ie({fromRouteId:o},h)))}),[s,o])}var Wh={};function bm(s,o,c){!o&&!Wh[s]&&(Wh[s]=!0,Bt(!1,c))}A.memo(dy);function dy({routes:s,future:o,state:c,unstable_onError:u}){return vm(s,void 0,c,u,o)}function Et(s){Re(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function fy({basename:s="/",children:o=null,location:c,navigationType:u="POP",navigator:f,static:h=!1,unstable_useTransitions:p}){Re(!li(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let v=s.replace(/^\/*/,"/"),y=A.useMemo(()=>({basename:v,navigator:f,static:h,unstable_useTransitions:p,future:{}}),[v,f,h,p]);typeof c=="string"&&(c=el(c));let{pathname:g="/",search:j="",hash:b="",state:O=null,key:U="default"}=c,H=A.useMemo(()=>{let q=ga(g,v);return q==null?null:{location:{pathname:q,search:j,hash:b,state:O,key:U},navigationType:u}},[v,g,j,b,O,U,u]);return Bt(H!=null,`<Router basename="${v}"> is not able to match the URL "${g}${j}${b}" because it does not start with the basename, so the <Router> won't render anything.`),H==null?null:A.createElement(Vt.Provider,{value:y},A.createElement(ni.Provider,{children:o,value:H}))}function hy({children:s,location:o}){return P0(mc(s),o)}function mc(s,o=[]){let c=[];return A.Children.forEach(s,(u,f)=>{if(!A.isValidElement(u))return;let h=[...o,f];if(u.type===A.Fragment){c.push.apply(c,mc(u.props.children,h));return}Re(u.type===Et,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Re(!u.props.index||!u.props.children,"An index route cannot have child routes.");let p={id:u.props.id||h.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(p.children=mc(u.props.children,h)),c.push(p)}),c}var Tr="get",zr="application/x-www-form-urlencoded";function _r(s){return typeof HTMLElement!="undefined"&&s instanceof HTMLElement}function my(s){return _r(s)&&s.tagName.toLowerCase()==="button"}function py(s){return _r(s)&&s.tagName.toLowerCase()==="form"}function gy(s){return _r(s)&&s.tagName.toLowerCase()==="input"}function yy(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function vy(s,o){return s.button===0&&(!o||o==="_self")&&!yy(s)}function pc(s=""){return new URLSearchParams(typeof s=="string"||Array.isArray(s)||s instanceof URLSearchParams?s:Object.keys(s).reduce((o,c)=>{let u=s[c];return o.concat(Array.isArray(u)?u.map(f=>[c,f]):[[c,u]])},[]))}function by(s,o){let c=pc(s);return o&&o.forEach((u,f)=>{c.has(f)||o.getAll(f).forEach(h=>{c.append(f,h)})}),c}var Ar=null;function xy(){if(Ar===null)try{new FormData(document.createElement("form"),0),Ar=!1}catch(s){Ar=!0}return Ar}var Sy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function uc(s){return s!=null&&!Sy.has(s)?(Bt(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${zr}"`),null):s}function jy(s,o){let c,u,f,h,p;if(py(s)){let v=s.getAttribute("action");u=v?ga(v,o):null,c=s.getAttribute("method")||Tr,f=uc(s.getAttribute("enctype"))||zr,h=new FormData(s)}else if(my(s)||gy(s)&&(s.type==="submit"||s.type==="image")){let v=s.form;if(v==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=s.getAttribute("formaction")||v.getAttribute("action");if(u=y?ga(y,o):null,c=s.getAttribute("formmethod")||v.getAttribute("method")||Tr,f=uc(s.getAttribute("formenctype"))||uc(v.getAttribute("enctype"))||zr,h=new FormData(v,s),!xy()){let{name:g,type:j,value:b}=s;if(j==="image"){let O=g?`${g}.`:"";h.append(`${O}x`,"0"),h.append(`${O}y`,"0")}else g&&h.append(g,b)}}else{if(_r(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=Tr,u=null,f=zr,p=s}return h&&f==="text/plain"&&(p=h,h=void 0),{action:u,method:c.toLowerCase(),encType:f,formData:h,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Nc(s,o){if(s===!1||s===null||typeof s=="undefined")throw new Error(o)}function wy(s,o,c){let u=typeof s=="string"?new URL(s,typeof window=="undefined"?"server://singlefetch/":window.location.origin):s;return u.pathname==="/"?u.pathname=`_root.${c}`:o&&ga(u.pathname,o)==="/"?u.pathname=`${o.replace(/\/$/,"")}/_root.${c}`:u.pathname=`${u.pathname.replace(/\/$/,"")}.${c}`,u}function Ey(s,o){return Gt(this,null,function*(){if(s.id in o)return o[s.id];try{let c=yield import(s.module);return o[s.id]=c,c}catch(c){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}})}function Ay(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}function Cy(s,o,c){return Gt(this,null,function*(){let u=yield Promise.all(s.map(f=>Gt(null,null,function*(){let h=o.routes[f.route.id];if(h){let p=yield Ey(h,c);return p.links?p.links():[]}return[]})));return Oy(u.flat(1).filter(Ay).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?qe(ie({},f),{rel:"prefetch",as:"style"}):qe(ie({},f),{rel:"prefetch"})))})}function $h(s,o,c,u,f,h){let p=(y,g)=>c[g]?y.route.id!==c[g].route.id:!0,v=(y,g)=>{var j;return c[g].pathname!==y.pathname||((j=c[g].route.path)==null?void 0:j.endsWith("*"))&&c[g].params["*"]!==y.params["*"]};return h==="assets"?o.filter((y,g)=>p(y,g)||v(y,g)):h==="data"?o.filter((y,g)=>{var b;let j=u.routes[y.route.id];if(!j||!j.hasLoader)return!1;if(p(y,g)||v(y,g))return!0;if(y.route.shouldRevalidate){let O=y.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:((b=c[0])==null?void 0:b.params)||{},nextUrl:new URL(s,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof O=="boolean")return O}return!0}):[]}function Ny(s,o,{includeHydrateFallback:c}={}){return Ty(s.map(u=>{let f=o.routes[u.route.id];if(!f)return[];let h=[f.module];return f.clientActionModule&&(h=h.concat(f.clientActionModule)),f.clientLoaderModule&&(h=h.concat(f.clientLoaderModule)),c&&f.hydrateFallbackModule&&(h=h.concat(f.hydrateFallbackModule)),f.imports&&(h=h.concat(f.imports)),h}).flat(1))}function Ty(s){return[...new Set(s)]}function zy(s){let o={},c=Object.keys(s).sort();for(let u of c)o[u]=s[u];return o}function Oy(s,o){let c=new Set;return new Set(o),s.reduce((u,f)=>{let h=JSON.stringify(zy(f));return c.has(h)||(c.add(h),u.push({key:h,link:f})),u},[])}function xm(){let s=A.useContext(tl);return Nc(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function Dy(){let s=A.useContext(Rr);return Nc(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Tc=A.createContext(void 0);Tc.displayName="FrameworkContext";function Sm(){let s=A.useContext(Tc);return Nc(s,"You must render this element inside a <HydratedRouter> element"),s}function My(s,o){let c=A.useContext(Tc),[u,f]=A.useState(!1),[h,p]=A.useState(!1),{onFocus:v,onBlur:y,onMouseEnter:g,onMouseLeave:j,onTouchStart:b}=o,O=A.useRef(null);A.useEffect(()=>{if(s==="render"&&p(!0),s==="viewport"){let q=V=>{V.forEach(I=>{p(I.isIntersecting)})},D=new IntersectionObserver(q,{threshold:.5});return O.current&&D.observe(O.current),()=>{D.disconnect()}}},[s]),A.useEffect(()=>{if(u){let q=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(q)}}},[u]);let U=()=>{f(!0)},H=()=>{f(!1),p(!1)};return c?s!=="intent"?[h,O,{}]:[h,O,{onFocus:ei(v,U),onBlur:ei(y,H),onMouseEnter:ei(g,U),onMouseLeave:ei(j,H),onTouchStart:ei(b,U)}]:[!1,O,{}]}function ei(s,o){return c=>{s&&s(c),c.defaultPrevented||o(c)}}function Ry(c){var u=c,{page:s}=u,o=In(u,["page"]);let{router:f}=xm(),h=A.useMemo(()=>om(f.routes,s,f.basename),[f.routes,s,f.basename]);return h?A.createElement(ky,ie({page:s,matches:h},o)):null}function _y(s){let{manifest:o,routeModules:c}=Sm(),[u,f]=A.useState([]);return A.useEffect(()=>{let h=!1;return Cy(s,o,c).then(p=>{h||f(p)}),()=>{h=!0}},[s,o,c]),u}function ky(u){var f=u,{page:s,matches:o}=f,c=In(f,["page","matches"]);let h=Wt(),{manifest:p,routeModules:v}=Sm(),{basename:y}=xm(),{loaderData:g,matches:j}=Dy(),b=A.useMemo(()=>$h(s,o,j,p,h,"data"),[s,o,j,p,h]),O=A.useMemo(()=>$h(s,o,j,p,h,"assets"),[s,o,j,p,h]),U=A.useMemo(()=>{if(s===h.pathname+h.search+h.hash)return[];let D=new Set,V=!1;if(o.forEach(L=>{var le;let ee=p.routes[L.route.id];!ee||!ee.hasLoader||(!b.some(ce=>ce.route.id===L.route.id)&&L.route.id in g&&((le=v[L.route.id])!=null&&le.shouldRevalidate)||ee.hasClientLoader?V=!0:D.add(L.route.id))}),D.size===0)return[];let I=wy(s,y,"data");return V&&D.size>0&&I.searchParams.set("_routes",o.filter(L=>D.has(L.route.id)).map(L=>L.route.id).join(",")),[I.pathname+I.search]},[y,g,h,p,b,o,s,v]),H=A.useMemo(()=>Ny(O,p),[O,p]),q=_y(O);return A.createElement(A.Fragment,null,U.map(D=>A.createElement("link",ie({key:D,rel:"prefetch",as:"fetch",href:D},c))),H.map(D=>A.createElement("link",ie({key:D,rel:"modulepreload",href:D},c))),q.map(({key:D,link:V})=>A.createElement("link",ie({key:D,nonce:c.nonce},V))))}function By(...s){return o=>{s.forEach(c=>{typeof c=="function"?c(o):c!=null&&(c.current=o)})}}var jm=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined";try{jm&&(window.__reactRouterVersion="7.10.1")}catch(s){}function Uy({basename:s,children:o,unstable_useTransitions:c,window:u}){let f=A.useRef();f.current==null&&(f.current=j0({window:u,v5Compat:!0}));let h=f.current,[p,v]=A.useState({action:h.action,location:h.location}),y=A.useCallback(g=>{c===!1?v(g):A.startTransition(()=>v(g))},[c]);return A.useLayoutEffect(()=>h.listen(y),[h,y]),A.createElement(fy,{basename:s,children:o,location:p.location,navigationType:p.action,navigator:h,unstable_useTransitions:c===!0})}var wm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Me=A.forwardRef(function(H,U){var q=H,{onClick:o,discover:c="render",prefetch:u="none",relative:f,reloadDocument:h,replace:p,state:v,target:y,to:g,preventScrollReset:j,viewTransition:b}=q,O=In(q,["onClick","discover","prefetch","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"]);let{basename:D,unstable_useTransitions:V}=A.useContext(Vt),I=typeof g=="string"&&wm.test(g),L,ee=!1;if(typeof g=="string"&&I&&(L=g,jm))try{let pe=new URL(window.location.href),ht=g.startsWith("//")?new URL(pe.protocol+g):new URL(g),Oe=ga(ht.pathname,D);ht.origin===pe.origin&&Oe!=null?g=Oe+ht.search+ht.hash:ee=!0}catch(pe){Bt(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let le=$0(g,{relative:f}),[ce,F,ye]=My(u,O),Se=Yy(g,{replace:p,state:v,target:y,preventScrollReset:j,relative:f,viewTransition:b,unstable_useTransitions:V});function ft(pe){o&&o(pe),pe.defaultPrevented||Se(pe)}let Be=A.createElement("a",qe(ie(ie({},O),ye),{href:L||le,onClick:ee||h?o:ft,ref:By(U,F),target:y,"data-discover":!I&&c==="render"?"true":void 0}));return ce&&!I?A.createElement(A.Fragment,null,Be,A.createElement(Ry,{page:le})):Be});Me.displayName="Link";var Ly=A.forwardRef(function(b,j){var O=b,{"aria-current":o="page",caseSensitive:c=!1,className:u="",end:f=!1,style:h,to:p,viewTransition:v,children:y}=O,g=In(O,["aria-current","caseSensitive","className","end","style","to","viewTransition","children"]);let U=ii(p,{relative:g.relative}),H=Wt(),q=A.useContext(Rr),{navigator:D,basename:V}=A.useContext(Vt),I=q!=null&&Fy(U)&&v===!0,L=D.encodeLocation?D.encodeLocation(U).pathname:U.pathname,ee=H.pathname,le=q&&q.navigation&&q.navigation.location?q.navigation.location.pathname:null;c||(ee=ee.toLowerCase(),le=le?le.toLowerCase():null,L=L.toLowerCase()),le&&V&&(le=ga(le,V)||le);const ce=L!=="/"&&L.endsWith("/")?L.length-1:L.length;let F=ee===L||!f&&ee.startsWith(L)&&ee.charAt(ce)==="/",ye=le!=null&&(le===L||!f&&le.startsWith(L)&&le.charAt(L.length)==="/"),Se={isActive:F,isPending:ye,isTransitioning:I},ft=F?o:void 0,Be;typeof u=="function"?Be=u(Se):Be=[u,F?"active":null,ye?"pending":null,I?"transitioning":null].filter(Boolean).join(" ");let pe=typeof h=="function"?h(Se):h;return A.createElement(Me,qe(ie({},g),{"aria-current":ft,className:Be,ref:j,style:pe,to:p,viewTransition:v}),typeof y=="function"?y(Se):y)});Ly.displayName="NavLink";var Hy=A.forwardRef((H,U)=>{var q=H,{discover:s="render",fetcherKey:o,navigate:c,reloadDocument:u,replace:f,state:h,method:p=Tr,action:v,onSubmit:y,relative:g,preventScrollReset:j,viewTransition:b}=q,O=In(q,["discover","fetcherKey","navigate","reloadDocument","replace","state","method","action","onSubmit","relative","preventScrollReset","viewTransition"]);let{unstable_useTransitions:D}=A.useContext(Vt),V=Xy(),I=Zy(v,{relative:g}),L=p.toLowerCase()==="get"?"get":"post",ee=typeof v=="string"&&wm.test(v),le=ce=>{if(y&&y(ce),ce.defaultPrevented)return;ce.preventDefault();let F=ce.nativeEvent.submitter,ye=(F==null?void 0:F.getAttribute("formmethod"))||p,Se=()=>V(F||ce.currentTarget,{fetcherKey:o,method:ye,navigate:c,replace:f,state:h,relative:g,preventScrollReset:j,viewTransition:b});D&&c!==!1?A.startTransition(()=>Se()):Se()};return A.createElement("form",qe(ie({ref:U,method:L,action:I,onSubmit:u?y:le},O),{"data-discover":!ee&&s==="render"?"true":void 0}))});Hy.displayName="Form";function qy(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Em(s){let o=A.useContext(tl);return Re(o,qy(s)),o}function Yy(s,{target:o,replace:c,state:u,preventScrollReset:f,relative:h,viewTransition:p,unstable_useTransitions:v}={}){let y=al(),g=Wt(),j=ii(s,{relative:h});return A.useCallback(b=>{if(vy(b,o)){b.preventDefault();let O=c!==void 0?c:ai(g)===ai(j),U=()=>y(s,{replace:O,state:u,preventScrollReset:f,relative:h,viewTransition:p});v?A.startTransition(()=>U()):U()}},[g,y,j,c,u,o,s,f,h,p,v])}function Gy(s){Bt(typeof URLSearchParams!="undefined","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let o=A.useRef(pc(s)),c=A.useRef(!1),u=Wt(),f=A.useMemo(()=>by(u.search,c.current?null:o.current),[u.search]),h=al(),p=A.useCallback((v,y)=>{const g=pc(typeof v=="function"?v(new URLSearchParams(f)):v);c.current=!0,h("?"+g,y)},[h,f]);return[f,p]}var Vy=0,Qy=()=>`__${String(++Vy)}__`;function Xy(){let{router:s}=Em("useSubmit"),{basename:o}=A.useContext(Vt),c=oy(),u=s.fetch,f=s.navigate;return A.useCallback((v,...y)=>Gt(null,[v,...y],function*(h,p={}){let{action:g,method:j,encType:b,formData:O,body:U}=jy(h,o);if(p.navigate===!1){let H=p.fetcherKey||Qy();yield u(H,c,p.action||g,{preventScrollReset:p.preventScrollReset,formData:O,body:U,formMethod:p.method||j,formEncType:p.encType||b,flushSync:p.flushSync})}else yield f(p.action||g,{preventScrollReset:p.preventScrollReset,formData:O,body:U,formMethod:p.method||j,formEncType:p.encType||b,replace:p.replace,state:p.state,fromRouteId:c,flushSync:p.flushSync,viewTransition:p.viewTransition})}),[u,f,o,c])}function Zy(s,{relative:o}={}){let{basename:c}=A.useContext(Vt),u=A.useContext(Kt);Re(u,"useFormAction must be used inside a RouteContext");let[f]=u.matches.slice(-1),h=ie({},ii(s||".",{relative:o})),p=Wt();if(s==null){h.search=p.search;let v=new URLSearchParams(h.search),y=v.getAll("index");if(y.some(j=>j==="")){v.delete("index"),y.filter(b=>b).forEach(b=>v.append("index",b));let j=v.toString();h.search=j?`?${j}`:""}}return(!s||s===".")&&f.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(h.pathname=h.pathname==="/"?c:pa([c,h.pathname])),ai(h)}function Fy(s,{relative:o}={}){let c=A.useContext(mm);Re(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=Em("useViewTransitionState"),f=ii(s,{relative:o});if(!c.isTransitioning)return!1;let h=ga(c.currentLocation.pathname,u)||c.currentLocation.pathname,p=ga(c.nextLocation.pathname,u)||c.nextLocation.pathname;return Or(f.pathname,p)!=null||Or(f.pathname,h)!=null}function ya(s){return Array.isArray?Array.isArray(s):Nm(s)==="[object Array]"}function Jy(s){if(typeof s=="string")return s;let o=s+"";return o=="0"&&1/s==-1/0?"-0":o}function Ky(s){return s==null?"":Jy(s)}function Jt(s){return typeof s=="string"}function Am(s){return typeof s=="number"}function Wy(s){return s===!0||s===!1||$y(s)&&Nm(s)=="[object Boolean]"}function Cm(s){return typeof s=="object"}function $y(s){return Cm(s)&&s!==null}function At(s){return s!=null}function dc(s){return!s.trim().length}function Nm(s){return s==null?s===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(s)}const Iy="Incorrect 'index' type",Py=s=>`Invalid value for key ${s}`,ev=s=>`Pattern length exceeds max of ${s}.`,tv=s=>`Missing ${s} property in key`,av=s=>`Property 'weight' in key '${s}' must be a positive integer`,Ih=Object.prototype.hasOwnProperty;class nv{constructor(o){this._keys=[],this._keyMap={};let c=0;o.forEach(u=>{let f=Tm(u);this._keys.push(f),this._keyMap[f.id]=f,c+=f.weight}),this._keys.forEach(u=>{u.weight/=c})}get(o){return this._keyMap[o]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Tm(s){let o=null,c=null,u=null,f=1,h=null;if(Jt(s)||ya(s))u=s,o=Ph(s),c=gc(s);else{if(!Ih.call(s,"name"))throw new Error(tv("name"));const p=s.name;if(u=p,Ih.call(s,"weight")&&(f=s.weight,f<=0))throw new Error(av(p));o=Ph(p),c=gc(p),h=s.getFn}return{path:o,id:c,weight:f,src:u,getFn:h}}function Ph(s){return ya(s)?s:s.split(".")}function gc(s){return ya(s)?s.join("."):s}function lv(s,o){let c=[],u=!1;const f=(h,p,v)=>{if(At(h))if(!p[v])c.push(h);else{let y=p[v];const g=h[y];if(!At(g))return;if(v===p.length-1&&(Jt(g)||Am(g)||Wy(g)))c.push(Ky(g));else if(ya(g)){u=!0;for(let j=0,b=g.length;j<b;j+=1)f(g[j],p,v+1)}else p.length&&f(g,p,v+1)}};return f(s,Jt(o)?o.split("."):o,0),u?c:c[0]}const iv={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},rv={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(s,o)=>s.score===o.score?s.idx<o.idx?-1:1:s.score<o.score?-1:1},sv={location:0,threshold:.6,distance:100},ov={useExtendedSearch:!1,getFn:lv,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var $=ie(ie(ie(ie({},rv),iv),sv),ov);const cv=/[^ ]+/g;function uv(s=1,o=3){const c=new Map,u=Math.pow(10,o);return{get(f){const h=f.match(cv).length;if(c.has(h))return c.get(h);const p=1/Math.pow(h,.5*s),v=parseFloat(Math.round(p*u)/u);return c.set(h,v),v},clear(){c.clear()}}}class zc{constructor({getFn:o=$.getFn,fieldNormWeight:c=$.fieldNormWeight}={}){this.norm=uv(c,3),this.getFn=o,this.isCreated=!1,this.setIndexRecords()}setSources(o=[]){this.docs=o}setIndexRecords(o=[]){this.records=o}setKeys(o=[]){this.keys=o,this._keysMap={},o.forEach((c,u)=>{this._keysMap[c.id]=u})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,Jt(this.docs[0])?this.docs.forEach((o,c)=>{this._addString(o,c)}):this.docs.forEach((o,c)=>{this._addObject(o,c)}),this.norm.clear())}add(o){const c=this.size();Jt(o)?this._addString(o,c):this._addObject(o,c)}removeAt(o){this.records.splice(o,1);for(let c=o,u=this.size();c<u;c+=1)this.records[c].i-=1}getValueForItemAtKeyId(o,c){return o[this._keysMap[c]]}size(){return this.records.length}_addString(o,c){if(!At(o)||dc(o))return;let u={v:o,i:c,n:this.norm.get(o)};this.records.push(u)}_addObject(o,c){let u={i:c,$:{}};this.keys.forEach((f,h)=>{let p=f.getFn?f.getFn(o):this.getFn(o,f.path);if(At(p)){if(ya(p)){let v=[];const y=[{nestedArrIndex:-1,value:p}];for(;y.length;){const{nestedArrIndex:g,value:j}=y.pop();if(At(j))if(Jt(j)&&!dc(j)){let b={v:j,i:g,n:this.norm.get(j)};v.push(b)}else ya(j)&&j.forEach((b,O)=>{y.push({nestedArrIndex:O,value:b})})}u.$[h]=v}else if(Jt(p)&&!dc(p)){let v={v:p,n:this.norm.get(p)};u.$[h]=v}}}),this.records.push(u)}toJSON(){return{keys:this.keys,records:this.records}}}function zm(s,o,{getFn:c=$.getFn,fieldNormWeight:u=$.fieldNormWeight}={}){const f=new zc({getFn:c,fieldNormWeight:u});return f.setKeys(s.map(Tm)),f.setSources(o),f.create(),f}function dv(s,{getFn:o=$.getFn,fieldNormWeight:c=$.fieldNormWeight}={}){const{keys:u,records:f}=s,h=new zc({getFn:o,fieldNormWeight:c});return h.setKeys(u),h.setIndexRecords(f),h}function Cr(s,{errors:o=0,currentLocation:c=0,expectedLocation:u=0,distance:f=$.distance,ignoreLocation:h=$.ignoreLocation}={}){const p=o/s.length;if(h)return p;const v=Math.abs(u-c);return f?p+v/f:v?1:p}function fv(s=[],o=$.minMatchCharLength){let c=[],u=-1,f=-1,h=0;for(let p=s.length;h<p;h+=1){let v=s[h];v&&u===-1?u=h:!v&&u!==-1&&(f=h-1,f-u+1>=o&&c.push([u,f]),u=-1)}return s[h-1]&&h-u>=o&&c.push([u,h-1]),c}const hn=32;function hv(s,o,c,{location:u=$.location,distance:f=$.distance,threshold:h=$.threshold,findAllMatches:p=$.findAllMatches,minMatchCharLength:v=$.minMatchCharLength,includeMatches:y=$.includeMatches,ignoreLocation:g=$.ignoreLocation}={}){if(o.length>hn)throw new Error(ev(hn));const j=o.length,b=s.length,O=Math.max(0,Math.min(u,b));let U=h,H=O;const q=v>1||y,D=q?Array(b):[];let V;for(;(V=s.indexOf(o,H))>-1;){let F=Cr(o,{currentLocation:V,expectedLocation:O,distance:f,ignoreLocation:g});if(U=Math.min(F,U),H=V+j,q){let ye=0;for(;ye<j;)D[V+ye]=1,ye+=1}}H=-1;let I=[],L=1,ee=j+b;const le=1<<j-1;for(let F=0;F<j;F+=1){let ye=0,Se=ee;for(;ye<Se;)Cr(o,{errors:F,currentLocation:O+Se,expectedLocation:O,distance:f,ignoreLocation:g})<=U?ye=Se:ee=Se,Se=Math.floor((ee-ye)/2+ye);ee=Se;let ft=Math.max(1,O-Se+1),Be=p?b:Math.min(O+Se,b)+j,pe=Array(Be+2);pe[Be+1]=(1<<F)-1;for(let Oe=Be;Oe>=ft;Oe-=1){let tt=Oe-1,R=c[s.charAt(tt)];if(q&&(D[tt]=+!!R),pe[Oe]=(pe[Oe+1]<<1|1)&R,F&&(pe[Oe]|=(I[Oe+1]|I[Oe])<<1|1|I[Oe+1]),pe[Oe]&le&&(L=Cr(o,{errors:F,currentLocation:tt,expectedLocation:O,distance:f,ignoreLocation:g}),L<=U)){if(U=L,H=tt,H<=O)break;ft=Math.max(1,2*O-H)}}if(Cr(o,{errors:F+1,currentLocation:O,expectedLocation:O,distance:f,ignoreLocation:g})>U)break;I=pe}const ce={isMatch:H>=0,score:Math.max(.001,L)};if(q){const F=fv(D,v);F.length?y&&(ce.indices=F):ce.isMatch=!1}return ce}function mv(s){let o={};for(let c=0,u=s.length;c<u;c+=1){const f=s.charAt(c);o[f]=(o[f]||0)|1<<u-c-1}return o}const Dr=String.prototype.normalize?(s=>s.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,"")):(s=>s);class Om{constructor(o,{location:c=$.location,threshold:u=$.threshold,distance:f=$.distance,includeMatches:h=$.includeMatches,findAllMatches:p=$.findAllMatches,minMatchCharLength:v=$.minMatchCharLength,isCaseSensitive:y=$.isCaseSensitive,ignoreDiacritics:g=$.ignoreDiacritics,ignoreLocation:j=$.ignoreLocation}={}){if(this.options={location:c,threshold:u,distance:f,includeMatches:h,findAllMatches:p,minMatchCharLength:v,isCaseSensitive:y,ignoreDiacritics:g,ignoreLocation:j},o=y?o:o.toLowerCase(),o=g?Dr(o):o,this.pattern=o,this.chunks=[],!this.pattern.length)return;const b=(U,H)=>{this.chunks.push({pattern:U,alphabet:mv(U),startIndex:H})},O=this.pattern.length;if(O>hn){let U=0;const H=O%hn,q=O-H;for(;U<q;)b(this.pattern.substr(U,hn),U),U+=hn;if(H){const D=O-hn;b(this.pattern.substr(D),D)}}else b(this.pattern,0)}searchIn(o){const{isCaseSensitive:c,ignoreDiacritics:u,includeMatches:f}=this.options;if(o=c?o:o.toLowerCase(),o=u?Dr(o):o,this.pattern===o){let q={isMatch:!0,score:0};return f&&(q.indices=[[0,o.length-1]]),q}const{location:h,distance:p,threshold:v,findAllMatches:y,minMatchCharLength:g,ignoreLocation:j}=this.options;let b=[],O=0,U=!1;this.chunks.forEach(({pattern:q,alphabet:D,startIndex:V})=>{const{isMatch:I,score:L,indices:ee}=hv(o,q,D,{location:h+V,distance:p,threshold:v,findAllMatches:y,minMatchCharLength:g,includeMatches:f,ignoreLocation:j});I&&(U=!0),O+=L,I&&ee&&(b=[...b,...ee])});let H={isMatch:U,score:U?O/this.chunks.length:1};return U&&f&&(H.indices=b),H}}class Qa{constructor(o){this.pattern=o}static isMultiMatch(o){return em(o,this.multiRegex)}static isSingleMatch(o){return em(o,this.singleRegex)}search(){}}function em(s,o){const c=s.match(o);return c?c[1]:null}class pv extends Qa{constructor(o){super(o)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(o){const c=o===this.pattern;return{isMatch:c,score:c?0:1,indices:[0,this.pattern.length-1]}}}class gv extends Qa{constructor(o){super(o)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(o){const u=o.indexOf(this.pattern)===-1;return{isMatch:u,score:u?0:1,indices:[0,o.length-1]}}}class yv extends Qa{constructor(o){super(o)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(o){const c=o.startsWith(this.pattern);return{isMatch:c,score:c?0:1,indices:[0,this.pattern.length-1]}}}class vv extends Qa{constructor(o){super(o)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(o){const c=!o.startsWith(this.pattern);return{isMatch:c,score:c?0:1,indices:[0,o.length-1]}}}class bv extends Qa{constructor(o){super(o)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(o){const c=o.endsWith(this.pattern);return{isMatch:c,score:c?0:1,indices:[o.length-this.pattern.length,o.length-1]}}}class xv extends Qa{constructor(o){super(o)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(o){const c=!o.endsWith(this.pattern);return{isMatch:c,score:c?0:1,indices:[0,o.length-1]}}}class Dm extends Qa{constructor(o,{location:c=$.location,threshold:u=$.threshold,distance:f=$.distance,includeMatches:h=$.includeMatches,findAllMatches:p=$.findAllMatches,minMatchCharLength:v=$.minMatchCharLength,isCaseSensitive:y=$.isCaseSensitive,ignoreDiacritics:g=$.ignoreDiacritics,ignoreLocation:j=$.ignoreLocation}={}){super(o),this._bitapSearch=new Om(o,{location:c,threshold:u,distance:f,includeMatches:h,findAllMatches:p,minMatchCharLength:v,isCaseSensitive:y,ignoreDiacritics:g,ignoreLocation:j})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(o){return this._bitapSearch.searchIn(o)}}class Mm extends Qa{constructor(o){super(o)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(o){let c=0,u;const f=[],h=this.pattern.length;for(;(u=o.indexOf(this.pattern,c))>-1;)c=u+h,f.push([u,c-1]);const p=!!f.length;return{isMatch:p,score:p?0:1,indices:f}}}const yc=[pv,Mm,yv,vv,xv,bv,gv,Dm],tm=yc.length,Sv=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,jv="|";function wv(s,o={}){return s.split(jv).map(c=>{let u=c.trim().split(Sv).filter(h=>h&&!!h.trim()),f=[];for(let h=0,p=u.length;h<p;h+=1){const v=u[h];let y=!1,g=-1;for(;!y&&++g<tm;){const j=yc[g];let b=j.isMultiMatch(v);b&&(f.push(new j(b,o)),y=!0)}if(!y)for(g=-1;++g<tm;){const j=yc[g];let b=j.isSingleMatch(v);if(b){f.push(new j(b,o));break}}}return f})}const Ev=new Set([Dm.type,Mm.type]);class Av{constructor(o,{isCaseSensitive:c=$.isCaseSensitive,ignoreDiacritics:u=$.ignoreDiacritics,includeMatches:f=$.includeMatches,minMatchCharLength:h=$.minMatchCharLength,ignoreLocation:p=$.ignoreLocation,findAllMatches:v=$.findAllMatches,location:y=$.location,threshold:g=$.threshold,distance:j=$.distance}={}){this.query=null,this.options={isCaseSensitive:c,ignoreDiacritics:u,includeMatches:f,minMatchCharLength:h,findAllMatches:v,ignoreLocation:p,location:y,threshold:g,distance:j},o=c?o:o.toLowerCase(),o=u?Dr(o):o,this.pattern=o,this.query=wv(this.pattern,this.options)}static condition(o,c){return c.useExtendedSearch}searchIn(o){const c=this.query;if(!c)return{isMatch:!1,score:1};const{includeMatches:u,isCaseSensitive:f,ignoreDiacritics:h}=this.options;o=f?o:o.toLowerCase(),o=h?Dr(o):o;let p=0,v=[],y=0;for(let g=0,j=c.length;g<j;g+=1){const b=c[g];v.length=0,p=0;for(let O=0,U=b.length;O<U;O+=1){const H=b[O],{isMatch:q,indices:D,score:V}=H.search(o);if(q){if(p+=1,y+=V,u){const I=H.constructor.type;Ev.has(I)?v=[...v,...D]:v.push(D)}}else{y=0,p=0,v.length=0;break}}if(p){let O={isMatch:!0,score:y/p};return u&&(O.indices=v),O}}return{isMatch:!1,score:1}}}const vc=[];function Cv(...s){vc.push(...s)}function bc(s,o){for(let c=0,u=vc.length;c<u;c+=1){let f=vc[c];if(f.condition(s,o))return new f(s,o)}return new Om(s,o)}const Mr={AND:"$and",OR:"$or"},xc={PATH:"$path",PATTERN:"$val"},Sc=s=>!!(s[Mr.AND]||s[Mr.OR]),Nv=s=>!!s[xc.PATH],Tv=s=>!ya(s)&&Cm(s)&&!Sc(s),am=s=>({[Mr.AND]:Object.keys(s).map(o=>({[o]:s[o]}))});function Rm(s,o,{auto:c=!0}={}){const u=f=>{let h=Object.keys(f);const p=Nv(f);if(!p&&h.length>1&&!Sc(f))return u(am(f));if(Tv(f)){const y=p?f[xc.PATH]:h[0],g=p?f[xc.PATTERN]:f[y];if(!Jt(g))throw new Error(Py(y));const j={keyId:gc(y),pattern:g};return c&&(j.searcher=bc(g,o)),j}let v={children:[],operator:h[0]};return h.forEach(y=>{const g=f[y];ya(g)&&g.forEach(j=>{v.children.push(u(j))})}),v};return Sc(s)||(s=am(s)),u(s)}function zv(s,{ignoreFieldNorm:o=$.ignoreFieldNorm}){s.forEach(c=>{let u=1;c.matches.forEach(({key:f,norm:h,score:p})=>{const v=f?f.weight:null;u*=Math.pow(p===0&&v?Number.EPSILON:p,(v||1)*(o?1:h))}),c.score=u})}function Ov(s,o){const c=s.matches;o.matches=[],At(c)&&c.forEach(u=>{if(!At(u.indices)||!u.indices.length)return;const{indices:f,value:h}=u;let p={indices:f,value:h};u.key&&(p.key=u.key.src),u.idx>-1&&(p.refIndex=u.idx),o.matches.push(p)})}function Dv(s,o){o.score=s.score}function Mv(s,o,{includeMatches:c=$.includeMatches,includeScore:u=$.includeScore}={}){const f=[];return c&&f.push(Ov),u&&f.push(Dv),s.map(h=>{const{idx:p}=h,v={item:o[p],refIndex:p};return f.length&&f.forEach(y=>{y(h,v)}),v})}class nl{constructor(o,c={},u){this.options=ie(ie({},$),c),this.options.useExtendedSearch,this._keyStore=new nv(this.options.keys),this.setCollection(o,u)}setCollection(o,c){if(this._docs=o,c&&!(c instanceof zc))throw new Error(Iy);this._myIndex=c||zm(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(o){At(o)&&(this._docs.push(o),this._myIndex.add(o))}remove(o=()=>!1){const c=[];for(let u=0,f=this._docs.length;u<f;u+=1){const h=this._docs[u];o(h,u)&&(this.removeAt(u),u-=1,f-=1,c.push(h))}return c}removeAt(o){this._docs.splice(o,1),this._myIndex.removeAt(o)}getIndex(){return this._myIndex}search(o,{limit:c=-1}={}){const{includeMatches:u,includeScore:f,shouldSort:h,sortFn:p,ignoreFieldNorm:v}=this.options;let y=Jt(o)?Jt(this._docs[0])?this._searchStringList(o):this._searchObjectList(o):this._searchLogical(o);return zv(y,{ignoreFieldNorm:v}),h&&y.sort(p),Am(c)&&c>-1&&(y=y.slice(0,c)),Mv(y,this._docs,{includeMatches:u,includeScore:f})}_searchStringList(o){const c=bc(o,this.options),{records:u}=this._myIndex,f=[];return u.forEach(({v:h,i:p,n:v})=>{if(!At(h))return;const{isMatch:y,score:g,indices:j}=c.searchIn(h);y&&f.push({item:h,idx:p,matches:[{score:g,value:h,norm:v,indices:j}]})}),f}_searchLogical(o){const c=Rm(o,this.options),u=(v,y,g)=>{if(!v.children){const{keyId:b,searcher:O}=v,U=this._findMatches({key:this._keyStore.get(b),value:this._myIndex.getValueForItemAtKeyId(y,b),searcher:O});return U&&U.length?[{idx:g,item:y,matches:U}]:[]}const j=[];for(let b=0,O=v.children.length;b<O;b+=1){const U=v.children[b],H=u(U,y,g);if(H.length)j.push(...H);else if(v.operator===Mr.AND)return[]}return j},f=this._myIndex.records,h={},p=[];return f.forEach(({$:v,i:y})=>{if(At(v)){let g=u(c,v,y);g.length&&(h[y]||(h[y]={idx:y,item:v,matches:[]},p.push(h[y])),g.forEach(({matches:j})=>{h[y].matches.push(...j)}))}}),p}_searchObjectList(o){const c=bc(o,this.options),{keys:u,records:f}=this._myIndex,h=[];return f.forEach(({$:p,i:v})=>{if(!At(p))return;let y=[];u.forEach((g,j)=>{y.push(...this._findMatches({key:g,value:p[j],searcher:c}))}),y.length&&h.push({idx:v,item:p,matches:y})}),h}_findMatches({key:o,value:c,searcher:u}){if(!At(c))return[];let f=[];if(ya(c))c.forEach(({v:h,i:p,n:v})=>{if(!At(h))return;const{isMatch:y,score:g,indices:j}=u.searchIn(h);y&&f.push({score:g,key:o,value:h,idx:p,norm:v,indices:j})});else{const{v:h,n:p}=c,{isMatch:v,score:y,indices:g}=u.searchIn(h);v&&f.push({score:y,key:o,value:h,norm:p,indices:g})}return f}}nl.version="7.1.0";nl.createIndex=zm;nl.parseIndex=dv;nl.config=$;nl.parseQuery=Rm;Cv(Av);const Va=[{id:1,name:"Myntra",domain:"myntra.com",slug:"myntra-coupon-code",description:"Save on the latest fashion trends with verified Myntra coupons.",bestOffers:"Up to 80% Off",faqs:[{q:"How do I use Myntra coupons?",a:"Copy the code from Offerve and apply it at checkout on the Myntra app or website."},{q:"Does Myntra offer free shipping?",a:"Yes, focused on orders above a certain value or for Myntra Insider members."}]},{id:2,name:"Flipkart",domain:"flipkart.com",slug:"flipkart-coupon-code",description:"Get the best deals on electronics, mobiles, and fashion on Flipkart.",bestOffers:"Big Billion Day Offers",faqs:[{q:"Are there bank offers on Flipkart?",a:"Yes, Flipkart frequently partners with banks like HDFC, ICICI, and SBI for instant discounts."}]},{id:3,name:"Ajio",domain:"ajio.com",slug:"ajio-coupon-code",description:"Shop trendy fashion styles at unbeatable prices with Ajio coupons.",bestOffers:"Flat 50-90% Off",faqs:[{q:"What is the AjioMania sale?",a:"It's Ajio's biggest sale event with massive discounts across all categories."}]},{id:4,name:"Swiggy",domain:"swiggy.com",slug:"swiggy-coupon-code",description:"Order food online and save with exclusive Swiggy promo codes.",bestOffers:"60% Off on First Order",faqs:[{q:"Can I use multiple coupons on Swiggy?",a:"No, only one coupon code can be applied per order."}]},{id:5,name:"Zomato",domain:"zomato.com",slug:"zomato-coupon-code",description:"Hungry? Get tasty discounts on your Zomato food orders.",bestOffers:"Free Delivery + 50% Off",faqs:[]},{id:6,name:"Nykaa",domain:"nykaa.com",slug:"nykaa-coupon-code",description:"Beauty and wellness products at great prices with Nykaa offers.",bestOffers:"Pink Friday Sale Deals",faqs:[]},{id:7,name:"Tata Cliq",domain:"tatacliq.com",slug:"tata-cliq-coupon-code",description:"Luxury brands and electronics at discounted prices on Tata Cliq.",bestOffers:"15% Off with Bank Cards",faqs:[]},{id:8,name:"Cleartrip",domain:"cleartrip.com",slug:"cleartrip-coupon-code",description:"Book flights and hotels cheaper with Cleartrip coupons.",bestOffers:"Up to ₹5000 Off on Flights",faqs:[]},{id:9,name:"MakeMyTrip",domain:"makemytrip.com",slug:"makemytrip-coupon-code",description:"Plan your travel with the best offers on flights and hotels.",bestOffers:"Zero Cancellation Offers",faqs:[]},{id:10,name:"Oyo",domain:"oyorooms.com",slug:"oyo-coupon-code",description:"Affordable stays made even cheaper with Oyo coupons.",bestOffers:"Starting at ₹399",faqs:[]},{id:11,name:"Uber",domain:"uber.com",slug:"uber-coupon-code",description:"Save on your daily commute with Uber promo codes.",bestOffers:"50% Off 1st Ride",faqs:[]},{id:12,name:"Amazon",domain:"amazon.in",slug:"amazon-coupon-code",description:"Everything from A to Z at the best prices with Amazon deals.",bestOffers:"Great Indian Festival Deals",faqs:[]},{id:13,name:"Dominos",domain:"dominos.co.in",slug:"dominos-coupon-code",description:"Craving pizza? Use these codes for BOGO and discounts.",bestOffers:"Buy 1 Get 1 Free",faqs:[]},{id:14,name:"Pizza Hut",domain:"pizzahut.co.in",slug:"pizza-hut-coupon-code",description:"Delicious pizzas at slashed prices with Pizza Hut offers.",bestOffers:"Flat 50% Off",faqs:[]},{id:15,name:"KFC",domain:"kfc.co.in",slug:"kfc-coupon-code",description:"Finger lickin' good savings on KFC buckets and meals.",bestOffers:"Wednesday Buckets Offer",faqs:[]},{id:16,name:"BookMyShow",domain:"in.bookmyshow.com",slug:"bookmyshow-coupon-code",description:"Movie tickets and events with cashback and discounts.",bestOffers:"Buy 1 Get 1 Free (Cards)",faqs:[]},{id:17,name:"Adda247",domain:"adda247.com",slug:"adda247-coupon-code",description:"Prepare for government exams like Banking, SSC, Railways, and Teaching with affordable courses and test series from Adda247.",bestOffers:"Flat 17% to 77% Off",faqs:[{q:"How do I apply Adda247 promo codes?",a:"Select your desired course or pack, proceed to checkout, and look for the 'Have a Coupon Code' section. Enter the code and click Apply to get the discount."},{q:"Are the coupon codes verified?",a:"Yes, all coupons listed on Offerve are verified manually to ensuring they are working and valid for the respective courses."},{q:"How often are new offers added?",a:"We update our Adda247 coupons daily, checking for the latest seasonal sales, flash deals, and bank offers."}]},{id:18,name:"Unacademy",domain:"unacademy.com",slug:"unacademy-coupon-code",description:"Crack your dream exam with India's largest learning platform. Get live classes, structured batches, and mentorship for UPSC, IIT JEE, NEET, and more.",bestOffers:"20% Off on Plus & Iconic",faqs:[{q:"Where can I find the latest Unacademy referral codes?",a:"You can find the most recent and verified Unacademy referral codes right here on Offerve, updated daily for maximum savings."},{q:"Can I use codes for renewal?",a:"Most codes are for new subscriptions, but occasionally Unacademy releases offers for renewals. Check the coupon details for specific terms."},{q:"Is there a free trial available?",a:"Yes, Unacademy often provides a 7-day free trial for new users to experience the Plus platform before subscribing."}]},{id:19,name:"PW (Physics Wallah)",domain:"pw.live",slug:"pw-coupon-code",description:"Quality education at the most affordable prices. Physics Wallah offers comprehensive batches for JEE, NEET, UPSC, GATE, and more.",bestOffers:"Batches starting @ ₹999",faqs:[{q:"Does Physics Wallah offer discounts on batches?",a:"Yes, PW frequently runs offers on their popular batches like Yakeen, Lakshya, and Arjuna, especially during launch events and festivals."},{q:"How to use the coupon code on PW App?",a:"Go to the 'Batch' section, click on 'Buy Now', and enter the coupon code in the 'Apply Coupon' field before making the payment."},{q:"Are these codes applicable on offline centers?",a:"Generally, online codes are for app/website purchases. For offline centers (Vidyapeeth), check for specific registration offers listed as 'Offline' deals."}]}],nm={"adda247-coupon-code":[{id:"adda-1",title:"Flat 17% OFF on All Courses",description:"Use code to get flat 17% discount on Bank, SSC & other courses.",code:"PREP17",verified:!0,expiry:"31 Dec 2025",type:"code",ribbon:"BEST SELLER"},{id:"adda-2",title:"Start Your Prep @ ₹999 Only",description:"Get started with select test series and courses starting at just ₹999.",code:"START999",verified:!0,expiry:"15 Jan 2026",type:"deal",ribbon:"BUDGET BUY"},{id:"adda-3",title:"77% OFF on Mahapacks",description:"Limited time offer: Huge savings on Adda247 Mahapacks.",code:"DREAM77",verified:!0,expiry:"20 Dec 2025",type:"code",badge:"trending"},{id:"adda-4",title:"Bank Exams: Flat 20% Discount",description:"Valid on IBPS, SBI PO and Clerk preparation batches.",code:"BANK20",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"adda-5",title:"SSC CGL Tier 1 & 2 Crash Course",description:"Join the crash course at a special discounted price.",code:"SSCGO",verified:!0,expiry:"10 Feb 2026",type:"code"},{id:"adda-6",title:"Free Daily Quizzes & Mock Tests",description:"Practice for free with daily updated quizzes on the app.",code:"FREEMOCK",verified:!0,expiry:"31 Dec 2026",type:"deal",ribbon:"FREE"},{id:"adda-7",title:"UPSC CSE Batches: Save ₹5000",description:"Get flat ₹5000 off on comprehensive UPSC foundation batches.",code:"IAS5000",verified:!0,expiry:"30 Nov 2025",type:"code",badge:"high value"},{id:"adda-8",title:"Railways RRB NTPC Course Deal",description:"Complete preparation guide now at 50% discount.",code:"RAIL50",verified:!0,expiry:"31 Jan 2026",type:"code"},{id:"adda-9",title:"Teaching Exams: Extra 15% OFF",description:"Applicable on CTET, UPTET, and other teaching exam packs.",code:"TEACH15",verified:!0,expiry:"28 Feb 2026",type:"code"},{id:"adda-10",title:"Defence Exams: Flat 60% OFF",description:"Save big on unexpected defence exam courses.",code:"DEF60",verified:!0,expiry:"05 Jan 2026",type:"code"},{id:"adda-11",title:"State Exams Mahapack Offer",description:"Access all state level exam courses with one subscription.",code:"STATE75",verified:!0,expiry:"15 Mar 2026",type:"code"},{id:"adda-12",title:"JAIIB/CAIIB Success Batch",description:"Join the bankers batch with a special 10% discount.",code:"JAIIB10",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"adda-13",title:"Gate 2026 Foundation Batch",description:"Early bird offer: Save flat 25% on enrollment.",code:"GATE25",verified:!0,expiry:"30 Apr 2026",type:"code"},{id:"adda-14",title:"Regulatory Bodies Exam Packs",description:"Special pricing for RBI Grade B and SEBI Grade A courses.",code:"RBI2025",verified:!0,expiry:"31 Dec 2025",type:"deal"},{id:"adda-15",title:"Agriculture Field Officer Course",description:"Enroll now and get study material worth ₹2000 free.",code:"AGRIFREE",verified:!0,expiry:"20 Feb 2026",type:"deal"},{id:"adda-16",title:"Buy Books & E-books: 20% OFF",description:"Use code to save on printed books and digital study material.",code:"BOOKS20",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"adda-17",title:"Video Courses: Flat 40% Discount",description:"Learn at your own pace with recorded video classes.",code:"VIDEO40",verified:!0,expiry:"15 Jun 2026",type:"code"},{id:"adda-18",title:"Live Classes: 5% Extra Off",description:"Get an additional 5% discount on all live class purchases.",code:"LIVE5",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"adda-19",title:"App User Exclusive: 3% Coins",description:"Use Adda247 coins for extra discount on the mobile app.",code:"APPCOINS",verified:!0,expiry:"31 Dec 2026",type:"deal",badge:"mobile"},{id:"adda-20",title:"Refer & Earn Store Credit",description:"Invite friends and earn credits to buy courses.",code:"INVITE",verified:!0,expiry:"31 Dec 2026",type:"deal"},{id:"adda-21",title:"New Year Sale: Flat 22% OFF",description:"Celebrate with big savings across the entire site.",code:"NEWYEAR22",verified:!1,expiry:"05 Jan 2026",type:"code",badge:"seasonal"},{id:"adda-22",title:"Scholarship Test: 100% Fee Waiver",description:"Take the test and stand a chance to win free courses.",code:"SCHOLAR",verified:!0,expiry:"Next Sunday",type:"deal"},{id:"adda-23",title:"Current Affairs Yearly Magazine",description:"Download the yearly roundup PDF for just ₹49.",code:"CA49",verified:!0,expiry:"31 Mar 2026",type:"deal"},{id:"adda-24",title:"Interview Guidance Program",description:"Expert guidance for banking and SSC interviews.",code:"INTERVIEW",verified:!0,expiry:"30 Jun 2026",type:"deal"},{id:"adda-25",title:"Spoken English Course Deal",description:"Improve your communication skills for just ₹499.",code:"SPEAK",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"adda-26",title:"Computer Certification Course",description:"Get certified in basic computer skills. Valid for exams.",code:"COMP100",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"adda-27",title:"CUET 2026 Entrance Prep",description:"Start your undergraduate journey with top university prep.",code:"CUET26",verified:!0,expiry:"31 May 2026",type:"code"},{id:"adda-28",title:"Flash Sale: 2 Hours Only",description:"Extra 10% off on top of existing offers. 6PM-8PM.",code:"FLASH10",verified:!1,expiry:"Today",type:"code",badge:"flash sale"},{id:"adda-29",title:"Buy 1 Get 1 Free Test Series",description:"Buy one mock test series and get another one free.",code:"BOGO",verified:!0,expiry:"Weekend",type:"deal"},{id:"adda-30",title:"Sign Up Bonus: ₹100 Wallet Cash",description:"Register today and get instant wallet balance.",code:"SIGNUP100",verified:!0,expiry:"31 Dec 2025",type:"deal",ribbon:"NEW USER"}],"unacademy-coupon-code":[{id:"un-1",title:"Flat 20% OFF on all Plus Subs",description:"Unlock unlimited access to live classes and structured courses.",code:"PLUS20",verified:!0,expiry:"31 Dec 2025",type:"code",ribbon:"POPULAR"},{id:"un-2",title:"Unlock 20% Discount on Iconic",description:"Get personal mentorship and doubts solving with Iconic subscription.",code:"ICONIC20",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"un-3",title:"NEET UG: Save up to 40%",description:"Prepare for medical entrance with top educators.",code:"NEET40",verified:!0,expiry:"30 Apr 2026",type:"code",badge:"medical"},{id:"un-4",title:"JEE Mains & Advanced Offer",description:"Crack engineering exams with comprehensive batches.",code:"JEE2026",verified:!0,expiry:"31 May 2026",type:"code",badge:"engineering"},{id:"un-5",title:"UPSC CSE: 3 Months Extension",description:"Subscribe for 12 months and get 3 months free.",code:"IASFREE3",verified:!0,expiry:"28 Feb 2026",type:"deal"},{id:"un-6",title:"Try Unacademy for Free for 7 Days",description:"Experience the Plus learning environment at no cost.",code:"TRIAL7",verified:!0,expiry:"31 Mar 2026",type:"deal",ribbon:"FREE TRIAL"},{id:"un-7",title:"CA Intermediate Bundles",description:"Save 15% on group 1 & 2 combo subscriptions.",code:"CA15",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"un-8",title:"CAT 2025: Flat ₹4000 OFF",description:"Ace your MBA entrance with the best percentile.",code:"CAT4000",verified:!0,expiry:"30 Nov 2025",type:"code"},{id:"un-9",title:"Gate & ESE: Max Discount",description:"Use the code to get the maximum available discount today.",code:"GATEALERTS",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"un-10",title:"Defence Exams: 10% Instant Off",description:"Preparing for NDA/CDS? Use this code for instant savings.",code:"DEFENCE10",verified:!0,expiry:"31 Jul 2026",type:"code"},{id:"un-11",title:"Resolve 2026: 23% OFF",description:"New year special offer for all new subscribers.",code:"RESOLVE23",verified:!1,expiry:"05 Jan 2026",type:"code",badge:"seasonal"},{id:"un-12",title:"Unacademy Lite: Test Series",description:"Get high quality mock tests starting at ₹499.",code:"LITE499",verified:!0,expiry:"31 Dec 2026",type:"deal"},{id:"un-13",title:"6 Months Free on 2 Years Sub",description:"Long term preparation plan with extra validity.",code:"LONGTERM",verified:!0,expiry:"30 Jun 2026",type:"deal"},{id:"un-14",title:"Referral Code: 10% Discount",description:"Use referral code to get standard 10% discount on any course.",code:"REFER10",verified:!0,expiry:"31 Dec 2030",type:"code"},{id:"un-15",title:"Govt Exams: SSC & Bank Combo",description:"Prepare for multiple exams with one subscription.",code:"COMBO20",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"un-16",title:"Railway Exams: Flat 50% OFF",description:"Limited period offer for railway aspirants.",code:"RRB50",verified:!0,expiry:"28 Feb 2026",type:"code"},{id:"un-17",title:"K-12 School Tuition: Savings",description:"CBSE Class 6-12 subscriptions at discounted rates.",code:"SCHOOL20",verified:!0,expiry:"31 Mar 2026",type:"code"},{id:"un-18",title:"Coding & Programming Subscription",description:"Learn software development with industry experts.",code:"CODE10",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"un-19",title:"Unacademy Store Offline Centers",description:"Visit nearest centre and get special admission offers.",code:"OFFLINE",verified:!0,expiry:"31 Dec 2026",type:"deal"},{id:"un-20",title:"CSIR UGC NET: 20% OFF",description:"Crack the lecture ship exam with top guidance.",code:"NET20",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"un-21",title:"Judiciary Exams Prep",description:"Comprehensive coverage for state judiciary exams.",code:"LAW10",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"un-22",title:"Free Special Classes",description:"Watch free live classes every day on the platform.",code:"WATCHFREE",verified:!0,expiry:"31 Dec 2026",type:"deal",ribbon:"FREE"},{id:"un-23",title:"Scholarship: Up to 90% OFF",description:"Participate in UNSAT and win scholarships.",code:"UNSAT",verified:!0,expiry:"Next Sunday",type:"deal"},{id:"un-24",title:"Notes 2.0: Free with Iconic",description:"Get hard copy notes delivered to your home.",code:"NOTESFREE",verified:!0,expiry:"31 Dec 2025",type:"deal"},{id:"un-25",title:"IPM/BBA Entrance Exams",description:"Start early for management careers after 12th.",code:"BBA15",verified:!0,expiry:"31 May 2026",type:"code"},{id:"un-26",title:"CMA Foundation Batches",description:"Cost and Management accountancy aspirants offer.",code:"CMA10",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"un-27",title:"Hotel Management JEE",description:"Prepare for NCHMCT JEE with discounts.",code:"HOTEL10",verified:!0,expiry:"30 Apr 2026",type:"code"},{id:"un-28",title:"Foreign Studies (IELTS/GRE)",description:"Get guidance for study abroad exams.",code:"ABROAD",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"un-29",title:"Clat & Other Law Entrances",description:"Law entrance prep made affordable.",code:"CLAT20",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"un-30",title:"New User: 10% Extra Cashback",description:"First time subscribers get credits back.",code:"NEW10",verified:!0,expiry:"31 Dec 2025",type:"code",ribbon:"NEW USER"}],"pw-coupon-code":[{id:"pw-1",title:"Arjuna JEE 2.0: Flat ₹500 OFF",description:"Discount on JEE batch for Class 11 students.",code:"JEE500",verified:!0,expiry:"31 Mar 2026",type:"code",ribbon:"TRENDING"},{id:"pw-2",title:"Lakshya NEET Batch: Save ₹300",description:"Best value preparation for Class 12 medical aspirants.",code:"NEET300",verified:!0,expiry:"31 Mar 2026",type:"code",ribbon:"BEST SELLER"},{id:"pw-3",title:"Yakeen Dropper Batch Offer",description:"Special price for repeaters aiming for NEET UG.",code:"DROPPER",verified:!0,expiry:"31 Jul 2026",type:"deal"},{id:"pw-4",title:"Vidyapeeth Offline: Early Bird",description:"Register for offline centers and save on tuition fees.",code:"VIDYA",verified:!0,expiry:"31 Jan 2026",type:"deal"},{id:"pw-5",title:"UPSC Wallah: Flat ₹2000 OFF",description:"Complete foundation course for civil services.",code:"UPSC2000",verified:!0,expiry:"30 Nov 2025",type:"code"},{id:"pw-6",title:"Gate Wallah: Parakram Batch",description:"Join the Parakram batch for GATE 2026 at ₹4999.",code:"PARA4999",verified:!0,expiry:"28 Feb 2026",type:"code"},{id:"pw-7",title:"MBA Wallah: Pioneer Batch",description:"CAT preparation at the most affordable price.",code:"MBA100",verified:!0,expiry:"30 Nov 2025",type:"code"},{id:"pw-8",title:"SSC Wallah: Mahapack Deal",description:"One subscription for all SSC exams.",code:"SSC10",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"pw-9",title:"Banking Wallah Offers",description:"Prepare for IBPS and SBI with top faculty.",code:"BANK50",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"pw-10",title:"PW Skills: Data Science Course",description:"Job assurance program with 10% discount.",code:"DATA10",verified:!0,expiry:"31 Dec 2025",type:"code",badge:"upskill"},{id:"pw-11",title:"Full Stack Web Dev: Save ₹1000",description:"Become a developer with industry ready curriculum.",code:"WEBDEV",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"pw-12",title:"Commerce Wallah: Class 11 & 12",description:"Accounts, Economics and BST batches.",code:"COMM100",verified:!0,expiry:"31 Mar 2026",type:"code"},{id:"pw-13",title:"PW Store: 15% OFF on Modules",description:"Get discount on printed study material and modules.",code:"BOOK15",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"pw-14",title:"Drona Study Material",description:"Specialized notes for NEET and JEE.",code:"DRONA",verified:!0,expiry:"31 Dec 2025",type:"deal"},{id:"pw-15",title:"School Prep: Uday Batch",description:"Foundation for Class 9th students.",code:"UDAY9",verified:!0,expiry:"31 Mar 2026",type:"code"},{id:"pw-16",title:"Neev Batch for Class 10th",description:"Board exam preparation made easy.",code:"NEEV10",verified:!0,expiry:"31 Mar 2026",type:"code"},{id:"pw-17",title:"Defense Wallah: NDA Shaurya",description:"Join the forces with dedicated NDA prep.",code:"NDA200",verified:!0,expiry:"30 Apr 2026",type:"code"},{id:"pw-18",title:"Teaching Wallah: CTET Success",description:"Clear teacher eligibility test with ease.",code:"TEACH25",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"pw-19",title:"CA Wallah: Foundation",description:"Start your Chartered Accountancy journey.",code:"CAFDN",verified:!0,expiry:"31 May 2026",type:"code"},{id:"pw-20",title:"CS Executive Batches",description:"Company Secretary exam preparation",code:"CSEXEC",verified:!0,expiry:"30 Jun 2026",type:"deal"},{id:"pw-21",title:"Free Youtube Batches",description:"Access quality education for free on Youtube channels.",code:"YTFREE",verified:!0,expiry:"31 Dec 2026",type:"deal",ribbon:"FREE"},{id:"pw-22",title:"Referral Bonus",description:"Refer PW app to friends and earn wallet points.",code:"REF20",verified:!0,expiry:"31 Dec 2030",type:"deal"},{id:"pw-23",title:"PW NSAT Scholarship",description:"Win up to 100% scholarship for offline/online batches.",code:"NSAT",verified:!0,expiry:"Next Month",type:"deal"},{id:"pw-24",title:"Nursing Wallah",description:"Norcet and other nursing exam batches.",code:"NURSE",verified:!0,expiry:"31 Dec 2025",type:"deal"},{id:"pw-25",title:"Government Job Exams",description:"Combined prep for multiple govt vacancies.",code:"GOVTJOB",verified:!0,expiry:"31 Dec 2025",type:"deal"},{id:"pw-26",title:"State PSC Batches",description:"BPSC, UPPSC, MPPSC focused study groups.",code:"PSC20",verified:!0,expiry:"31 Dec 2025",type:"code"},{id:"pw-27",title:"Judiciary Gold",description:"Civil Judge exam preparation.",code:"JUDGE",verified:!0,expiry:"31 Dec 2025",type:"deal"},{id:"pw-28",title:"Master Post-Graduation",description:"GATE + ESE integrated courses.",code:"MASTER",verified:!0,expiry:"30 Sep 2026",type:"deal"},{id:"pw-29",title:"Super Saver Bundles",description:"Buy Batch + Books combo and save extra.",code:"COMBO",verified:!0,expiry:"31 Dec 2025",type:"deal"},{id:"pw-30",title:"PW App First Order",description:"New users get additional 5% off on app.",code:"APPNEW",verified:!0,expiry:"31 Dec 2025",type:"code",ribbon:"NEW USER"}]},lm=s=>{const o=new Date;return o.setDate(o.getDate()+s),o.toLocaleDateString("en-US",{day:"numeric",month:"short",year:"numeric"})},Pn=(s,o)=>{const c=s.substring(0,3).toUpperCase(),u=Math.floor(Math.random()*100)+50;return o==="deal"?"View Offer":`${c}${o.toUpperCase()}${u}`},kr=s=>{if(!s)return[];if(nm[s.slug])return nm[s.slug];const o=[],c=["Flat","Up to","Extra"],u=["Fashion","Electronics","Home","Beauty","Travel","Food"];o.push({id:1,title:`Flat 50% OFF on ${s.name} Best Sellers`,description:"Get half price on top rated products. Limited time offer.",code:Pn(s.name,"50OFF"),verified:!0,exclusive:!0,ribbon:"BEST SELLER",type:"code"},{id:2,title:"Extra 20% OFF on First Order",description:"New user exclusive. Sign up and save big on your first purchase.",code:Pn(s.name,"NEW20"),verified:!0,ribbon:"NEW USER",type:"code"},{id:3,title:"Bank Offer: 10% Instant Discount",description:"Use HDFC or ICICI Credit Cards. Min purchase ₹3000.",code:Pn(s.name,"BANK10"),verified:!0,badge:"bank",type:"code"},{id:4,title:`${s.name} App Exclusive: Flat ₹200 OFF`,description:"Valid only on app orders above ₹1500.",code:Pn(s.name,"APP200"),verified:!0,badge:"mobile",type:"code"},{id:5,title:"Free Delivery on All Orders",description:"No minimum order value required for limited period.",code:"FREEDEL",verified:!0,ribbon:"FREE SHIPPING",type:"deal"}),u.forEach((f,h)=>{o.push({id:10+h,title:`Up to 60% OFF on ${f}`,description:`Best deals on ${f} items. Shop now and save.`,code:Pn(s.name,f.substring(0,3)),verified:Math.random()>.3,expiry:lm(Math.floor(Math.random()*30)+2),type:"deal"})});for(let f=0;f<15;f++){const h=(Math.floor(Math.random()*6)+1)*10,p=c[Math.floor(Math.random()*c.length)];o.push({id:100+f,title:`${p} ${h}% OFF on Selected Items`,description:"Applicable on specific range of products. T&C apply.",code:Pn(s.name,"SAVE"),verified:Math.random()>.5,expiry:lm(Math.floor(Math.random()*60)+5),type:Math.random()>.7?"code":"deal"})}return o},_m=s=>{const o=()=>{try{return window[s]}catch(p){return null}},u=(()=>{const p=o();if(!p)return!1;try{const v="__storage_test__";return p.setItem(v,v),p.removeItem(v),!0}catch(v){return!1}})(),f=o(),h=new Map;return{getItem:p=>{if(u)try{return f.getItem(p)}catch(v){console.warn(`Error reading from ${s}:`,v)}return h.get(p)||null},setItem:(p,v)=>{if(u)try{f.setItem(p,v)}catch(y){console.warn(`Error writing to ${s}:`,y)}h.set(p,v)},removeItem:p=>{if(u)try{f.removeItem(p)}catch(v){console.warn(`Error removing from ${s}:`,v)}h.delete(p)},clear:()=>{if(u)try{f.clear()}catch(p){console.warn(`Error clearing ${s}:`,p)}h.clear()}}},Rv=_m("localStorage"),_v=_m("sessionStorage"),Fe={local:Rv,session:_v},Oc="offerve_analytics_data",Nr="offerve_weekly_snapshot",dn=()=>{try{const s=Fe.local.getItem(Oc),o=s?JSON.parse(s):null;return!o||!o.coupons||!o.stores||!o.events?{coupons:{},stores:{},events:[]}:o}catch(s){return console.error("Analytics Data Corrupt, resetting",s),{coupons:{},stores:{},events:[]}}},im=s=>{Fe.local.setItem(Oc,JSON.stringify(s))},Ze={trackEvent:({couponId:s,storeSlug:o,type:c,source:u="unknown"})=>{const f=dn(),h=`${o}-${s}`,p=new Date().toISOString();switch(f.coupons[h]||(f.coupons[h]={copy:0,click:0,view:0,lastEvent:null}),c){case"copy":f.coupons[h].copy++;break;case"click":f.coupons[h].click++;break;case"view":f.coupons[h].view++;break}if(f.coupons[h].lastEvent=p,o)switch(f.stores[o]||(f.stores[o]={totalCopy:0,totalClick:0,totalView:0}),c){case"copy":f.stores[o].totalCopy++;break;case"click":f.stores[o].totalClick++;break;case"view":f.stores[o].totalView++;break}return f.events.unshift({key:h,storeSlug:o,type:c,source:u,timestamp:p}),f.events.length>100&&f.events.pop(),im(f),!0},trackSearch:s=>{const o=dn();o.searches||(o.searches={}),o.searches[s]=(o.searches[s]||0)+1,im(o)},getTopSearches:()=>{const o=dn().searches||{};return Object.entries(o).sort(([,c],[,u])=>u-c).slice(0,10).map(([c,u])=>({query:c,count:u}))},getAllCouponsWithMetrics:()=>{const s=dn();let o=[];return Va.forEach(c=>{kr(c).forEach(f=>{const h=`${c.slug}-${f.id}`,p=s.coupons[h]||{copy:0,click:0,view:0,lastEvent:null};o.push(qe(ie({},f),{store:c,metrics:p,trackingKey:h,score:p.copy*10+p.click*2+p.view*.1}))})}),o},getTopCoupons:(s=10)=>Ze.getAllCouponsWithMetrics().sort((c,u)=>u.metrics.copy!==c.metrics.copy?u.metrics.copy-c.metrics.copy:u.score-c.score).slice(0,s),getStoreMetrics:()=>{const s=dn();return Va.map(o=>qe(ie({},o),{analytics:s.stores[o.slug]||{totalCopy:0,totalClick:0,totalView:0}})).sort((o,c)=>c.analytics.totalCopy-o.analytics.totalCopy)},generateWeeklySnapshot:()=>{const s=Ze.getTopCoupons(20),o={date:new Date().toISOString(),weekId:`Week ${kv(new Date)}`,items:s};let c=JSON.parse(Fe.local.getItem(Nr)||"[]");return c.unshift(o),Fe.local.setItem(Nr,JSON.stringify(c)),o},getSnapshots:()=>JSON.parse(Fe.local.getItem(Nr)||"[]"),getEventsLog:()=>dn().events,resetData:()=>{Fe.local.removeItem(Oc),Fe.local.removeItem(Nr)},exportToCSV:s=>{let o="data:text/csv;charset=utf-8,";if(dn(),s==="coupons"){const f=Ze.getAllCouponsWithMetrics();o+=`ID,Store,Title,Copy Count,Click Count,View Count,Last Event
`,f.forEach(h=>{o+=`${h.trackingKey},${h.store.name},"${h.title.replace(/,/g,"")}",${h.metrics.copy},${h.metrics.click},${h.metrics.view},${h.metrics.lastEvent}
`})}else if(s==="stores"){const f=Ze.getStoreMetrics();o+=`Store Name,Slug,Total Copies,Total Clicks,Total Views
`,f.forEach(h=>{o+=`${h.name},${h.slug},${h.analytics.totalCopy},${h.analytics.totalClick},${h.analytics.totalView}
`})}const c=encodeURI(o),u=document.createElement("a");u.setAttribute("href",c),u.setAttribute("download",`offerve_${s}_report.csv`),document.body.appendChild(u),u.click(),document.body.removeChild(u)}};function kv(s){s=new Date(Date.UTC(s.getFullYear(),s.getMonth(),s.getDate())),s.setUTCDate(s.getUTCDate()+4-(s.getDay()||7));var o=new Date(Date.UTC(s.getUTCFullYear(),0,1)),c=Math.ceil(((s-o)/864e5+1)/7);return c}let rm=null,ti=null;const Bv={includeScore:!0,threshold:.3,keys:[{name:"title",weight:.5},{name:"storeName",weight:.4},{name:"tags",weight:.3},{name:"description",weight:.2},{name:"storeSlug",weight:.4}]},fc=()=>{if(rm)return;let s=[];Va.forEach(o=>{s.push({type:"store",id:o.id,title:o.name,storeName:o.name,storeSlug:o.slug,description:o.description,tags:["store","merchant",...o.name.split(" ")],data:o}),kr(o).forEach(u=>{s.push({type:"coupon",id:`${o.slug}-${u.id}`,title:u.title,storeName:o.name,storeSlug:o.slug,description:u.description,code:u.code,tags:["coupon","deal","offer",o.name,...u.ribbon?[u.ribbon]:[]],data:qe(ie({},u),{merchant:o})})})}),s.push({type:"page",id:"blog-zomato",title:"How to save ₹500 on every Zomato Order",tags:["blog","food","zomato"],data:{link:"#"}}),s.push({type:"page",id:"blog-amazon",title:"Amazon Prime Day Guide",tags:["blog","amazon","sale"],data:{link:"#"}}),rm=s,ti=new nl(s,Bv),console.log(`Search Index Built: ${s.length} items`)},km={init:()=>fc(),search:(s,o={})=>{if(ti||fc(),!s||s.trim().length===0)return[];let u=ti.search(s).map(f=>qe(ie({},f.item),{score:f.score}));return o.type&&o.type!=="all"&&(u=u.filter(f=>f.type===o.type)),u.slice(0,20)},suggest:s=>(ti||fc(),!s||s.length<2?[]:ti.search(s).slice(0,6).map(c=>({type:c.item.type,title:c.item.title,sub:c.item.type==="coupon"?c.item.storeName:c.item.type.toUpperCase(),id:c.item.id,slug:c.item.storeSlug})))},Ut=()=>{const s=al(),[o,c]=A.useState(""),[u,f]=A.useState([]),[h,p]=A.useState(!1),v=A.useRef(null);A.useEffect(()=>{const b=O=>{v.current&&!v.current.contains(O.target)&&p(!1)};return document.addEventListener("mousedown",b),()=>document.removeEventListener("mousedown",b)},[]);const y=b=>{const O=b.target.value;if(c(O),O.length>1){const U=km.suggest(O);f(U),p(!0)}else f([]),p(!1)},g=b=>{b.preventDefault(),o.trim()&&(p(!1),s(`/search?q=${encodeURIComponent(o)}`))},j=b=>{p(!1),c(b.title),b.type==="store"?s(`/${b.slug}`):s(`/search?q=${encodeURIComponent(b.title)}`)};return r.jsxs("header",{className:"header",children:[r.jsx("div",{className:"container",children:r.jsxs("div",{className:"header-wrapper",children:[r.jsx("div",{className:"logo-section",children:r.jsxs(Me,{to:"/",className:"logo-wrapper",children:[r.jsxs("div",{className:"logo-row",children:[r.jsx("img",{src:"/favicon.svg",alt:"Offerve Logo",className:"header-logo-img"}),r.jsx("span",{className:"logo-text gradient-text",children:"Offerve"})]}),r.jsx("span",{className:"tagline",children:"Save more on every purchase"})]})}),r.jsxs("div",{className:"search-section",ref:v,children:[r.jsxs("form",{className:"search-bar",onSubmit:g,children:[r.jsx("input",{type:"text",value:o,onChange:y,onFocus:()=>o.length>1&&p(!0),placeholder:"Search for coupons, stores, or categories...",className:"search-input"}),r.jsx("button",{type:"submit",className:"search-btn",children:r.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("circle",{cx:"11",cy:"11",r:"8"}),r.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})})]}),h&&u.length>0&&r.jsx("div",{className:"search-suggestions",children:u.map((b,O)=>r.jsxs("div",{className:"suggestion-item",onClick:()=>j(b),children:[r.jsxs("div",{className:"sugg-left",children:[r.jsx("span",{className:"sugg-title",children:b.title}),r.jsx("span",{className:"sugg-sub",children:b.sub})]}),r.jsx("span",{className:"sugg-arrow",children:"↗"})]},O))})]}),r.jsx("div",{className:"actions-section",children:r.jsxs("nav",{className:"nav-links",children:[r.jsx("a",{href:"#coupons",className:"nav-link",children:"Coupons"}),r.jsx(Me,{to:"/stores",className:"nav-link",children:"Stores"}),r.jsx(Me,{to:"/deals",className:"nav-link",children:"Deals"})]})})]})}),r.jsx("style",{children:`
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
      `})]})},Uv=()=>{const[s,o]=A.useState(0),c=[1,2,3,4];return A.useEffect(()=>{const u=setInterval(()=>{o(f=>(f+1)%c.length)},5e3);return()=>clearInterval(u)},[c.length]),r.jsxs("section",{className:"hero",children:[r.jsx("div",{className:"container",children:r.jsxs("div",{className:"hero-content",children:[r.jsx("h1",{className:"hero-title",children:"Save Big with India’s Best Coupons, Promo Codes & Online Deals"}),r.jsxs("div",{className:"banner-carousel",children:[r.jsx("div",{className:"banner-track",style:{transform:`translateX(-${s*100}%)`},children:c.map((u,f)=>r.jsx("div",{className:"banner-slide",children:r.jsx("div",{className:`hero-banner banner-${u}`,children:r.jsxs("span",{className:"banner-placeholder-text",children:["Banner ",u," Space"]})})},u))}),r.jsx("div",{className:"banner-dots",children:c.map((u,f)=>r.jsx("button",{className:`dot ${s===f?"active":""}`,onClick:()=>o(f),"aria-label":`Go to banner ${f+1}`},f))})]})]})}),r.jsx("div",{className:"hero-bg"}),r.jsx("style",{children:`
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
      `})]})},Lv=()=>{const s=Va;return r.jsxs("div",{className:"merchant-slider-section",children:[r.jsxs("div",{className:"container",children:[r.jsx("h3",{className:"section-subtitle",children:"Top Stores"}),r.jsx("div",{className:"slider-wrapper",children:r.jsx("div",{className:"slider-track",children:s.concat(s).map((o,c)=>r.jsxs(Me,{to:`/${o.slug}`,className:"merchant-bubble",children:[r.jsx("div",{className:"bubble-circle",children:r.jsx("img",{src:`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${o.domain}&size=128`,alt:o.name,className:"merchant-img",loading:"lazy",onError:u=>{u.target.style.display="none",u.target.parentElement.innerText=o.name[0]}})}),r.jsx("span",{className:"bubble-name",children:o.name})]},c))})})]}),r.jsx("style",{children:`
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
      `})]})},Br=({merchant:s,id:o,title:c,description:u,verified:f,code:h,ribbon:p,expiry:v,type:y,onCopy:g})=>{const[j,b]=A.useState(!1),O=A.useRef(null),U=A.useRef(!1);A.useEffect(()=>{const q=new IntersectionObserver(([D])=>{D.isIntersecting&&!U.current&&(U.current=!0,Ze&&Ze.trackEvent&&o&&Ze.trackEvent({couponId:o,storeSlug:s.slug||(s.name?s.name.toLowerCase().replace(/\s+/g,"-"):"unknown"),type:"view",source:"card"}))},{threshold:.5});return O.current&&q.observe(O.current),()=>q.disconnect()},[o,s]);const H=()=>{if(Ze&&Ze.trackEvent&&o&&Ze.trackEvent({couponId:o,storeSlug:s.slug||(s.name?s.name.toLowerCase().replace(/\s+/g,"-"):"unknown"),type:y==="deal"?"click":"copy",source:"card"}),g&&g(),y==="deal"){window.open(`https://${s.domain||"google.com"}`,"_blank");return}navigator.clipboard.writeText(h),b(!0),setTimeout(()=>b(!1),2e3)};return r.jsxs("div",{className:"coupon-card",ref:O,children:[p&&r.jsx("div",{className:"coupon-ribbon",children:p}),r.jsxs("div",{className:"card-body",children:[r.jsx("div",{className:"logo-column",children:r.jsx("div",{className:"merchant-logo",children:s.logo?r.jsx("img",{src:s.logo,alt:s.name,loading:"lazy"}):r.jsx("span",{className:"merchant-initial",children:s.name?s.name[0]:"S"})})}),r.jsxs("div",{className:"content-column",children:[r.jsx("div",{className:"header-row",children:r.jsxs("div",{className:"badges-row",children:[f&&r.jsxs("span",{className:"verified-badge",children:[r.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"currentColor",children:r.jsx("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})}),"Verified"]}),v&&r.jsxs("span",{className:"expiry-badge",children:["⏳ ",v]})]})}),r.jsx("h3",{className:"coupon-title",children:c}),r.jsx("p",{className:"coupon-desc",children:u})]})]}),r.jsx("div",{className:"card-action",children:y==="deal"?r.jsxs("button",{className:"deal-btn full-width",onClick:H,children:["Activate Deal",r.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),r.jsx("polyline",{points:"15 3 21 3 21 9"}),r.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]})]}):r.jsxs("div",{className:"code-action-row",children:[r.jsxs("div",{className:"code-display-container",children:[r.jsx("span",{className:"code-label",children:"Coupon Code"}),r.jsx("div",{className:"code-box",children:h})]}),r.jsx("button",{className:`copy-btn ${j?"copied":""}`,onClick:H,"aria-label":"Copy coupon code",children:j?r.jsxs(r.Fragment,{children:[r.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("polyline",{points:"20 6 9 17 4 12"})}),"Copied!"]}):r.jsxs(r.Fragment,{children:[r.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),r.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),"Copy"]})})]})}),r.jsx("style",{children:`
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
      `})]})},Hv=()=>{const[s,o]=A.useState([]),[c,u]=A.useState({});A.useEffect(()=>{const p=JSON.parse(Fe.local.getItem("offerve_copy_counts")||"{}");u(p),f(p)},[]);const f=p=>{let v=[];Va.forEach(y=>{kr(y).forEach(j=>{const b=`${y.slug}-${j.id}`;v.push(qe(ie({},j),{trackingKey:b,merchant:y,copyCount:p[b]||0}))})}),v.sort((y,g)=>g.copyCount!==y.copyCount?g.copyCount-y.copyCount:y.id-g.id),o(v.slice(0,5))},h=p=>{const v=qe(ie({},c),{[p]:(c[p]||0)+1});u(v),Fe.local.setItem("offerve_copy_counts",JSON.stringify(v)),f(v)};return r.jsxs("section",{className:"top-section",children:[r.jsx("div",{className:"container",children:r.jsxs("div",{className:"section-grid",children:[r.jsxs("div",{className:"top-block coupons-block",children:[r.jsxs("div",{className:"block-header",children:[r.jsx("h2",{children:"🔥 Top Coupons"}),r.jsx("span",{className:"live-badge",children:"Live Ranking"})]}),r.jsx("div",{className:"coupons-stack",children:s.map((p,v)=>r.jsxs("div",{className:"ranked-coupon-wrapper",children:[r.jsxs("div",{className:"rank-number",children:["#",v+1]}),r.jsx(Br,qe(ie({},p),{ribbon:v===0?"MOST COPIED":p.ribbon,onCopy:()=>h(p.trackingKey)}))]},p.trackingKey))})]}),r.jsxs("div",{className:"top-block offers-block",children:[r.jsxs("div",{className:"block-header",children:[r.jsx("h2",{children:"⚡ Top Offers & Guides"}),r.jsx("a",{href:"#",className:"view-all",children:"View All"})]}),r.jsxs("div",{className:"offers-grid",children:[r.jsxs("article",{className:"offer-card",children:[r.jsx("div",{className:"offer-img-box",style:{background:"#ffe4e6"},children:r.jsx("span",{className:"offer-tag",children:"Tricks"})}),r.jsxs("div",{className:"offer-content",children:[r.jsx("h3",{children:"How to save ₹500 on every Zomato Order"}),r.jsx("p",{children:"Use these hidden bank combinations to maximize your food savings today."}),r.jsx("button",{className:"read-btn",children:"Read Guide"})]})]}),r.jsxs("article",{className:"offer-card",children:[r.jsx("div",{className:"offer-img-box",style:{background:"#dcfce7"},children:r.jsx("span",{className:"offer-tag",children:"Deal"})}),r.jsxs("div",{className:"offer-content",children:[r.jsx("h3",{children:"Amazon Prime Day: Early Access List"}),r.jsx("p",{children:"Get the sneak peek of upcoming lightning deals 24 hours before sale."}),r.jsx("button",{className:"read-btn",children:"View Deal"})]})]}),r.jsxs("article",{className:"offer-card",children:[r.jsx("div",{className:"offer-img-box",style:{background:"#e0f2fe"},children:r.jsx("span",{className:"offer-tag",children:"Travel"})}),r.jsxs("div",{className:"offer-content",children:[r.jsx("h3",{children:"Flight Booking Hacks 2025"}),r.jsx("p",{children:"Secret incognito modes and VPN tricks to get cheaper flights instantly."}),r.jsx("button",{className:"read-btn",children:"Read Guide"})]})]})]})]})]})}),r.jsx("style",{children:`
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
            `})]})},qv=()=>{const s=[{name:"Food",icon:"🍔",count:"150 Offers"},{name:"Travel",icon:"✈️",count:"85 Offers"},{name:"Fashion",icon:"👗",count:"200+ Offers"},{name:"Electronics",icon:"💻",count:"120 Offers"},{name:"Beauty",icon:"💄",count:"90 Offers"},{name:"Recharge",icon:"📱",count:"45 Offers"},{name:"Entertainment",icon:"🎬",count:"60 Offers"},{name:"Grocery",icon:"🥦",count:"110 Offers"}];return r.jsxs("section",{className:"category-section",id:"categories",children:[r.jsxs("div",{className:"container",children:[r.jsx("h2",{className:"section-title",children:"Browse by Category"}),r.jsx("div",{className:"category-grid",children:s.map((o,c)=>r.jsxs("div",{className:"category-card",children:[r.jsx("div",{className:"cat-icon",children:o.icon}),r.jsx("h3",{className:"cat-name",children:o.name}),r.jsx("span",{className:"cat-count",children:o.count})]},c))})]}),r.jsx("style",{children:`
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
      `})]})},Yv=()=>{const s=[{id:1,merchant:{name:"Amazon"},title:"Up to 50% Off on Electronics",description:"Get huge discounts on laptops, mobiles, and accessories.",verified:!0,code:"AMZ50OFF"},{id:2,merchant:{name:"Uber"},title:"Flat $5 Off on First 3 Rides",description:"Valid for new users only. No minimum purchase required.",verified:!0,code:"UBERNEW"},{id:3,merchant:{name:"Domino's"},title:"Buy 1 Get 1 Free Pizza",description:"Applicable on medium and large pizzas only.",verified:!0,code:"DOMBOGO"},{id:4,merchant:{name:"Nike"},title:"Extra 20% Off Sale Items",description:"Shop the latest sneakers and sportswear at discounted prices.",verified:!1,code:"NIKE20"},{id:5,merchant:{name:"Spotify"},title:"3 Months Premium for Free",description:"Try Premium free for 3 months. Cancel anytime.",verified:!0,code:"SPOTIFY3M"},{id:6,merchant:{name:"Airbnb"},title:"$40 Off Your First Trip",description:"Save on your first booking of $75 or more.",verified:!0,code:"AIRBNB40"}];return r.jsxs("section",{className:"deals-section",id:"deals",children:[r.jsxs("div",{className:"container",children:[r.jsx("h2",{className:"section-title",children:"Top Coupons & Offers"}),r.jsxs("div",{className:"deals-layout",children:[r.jsxs("aside",{className:"deals-sidebar",children:[r.jsxs("div",{className:"filter-group",children:[r.jsx("h3",{className:"filter-title",children:"Categories"}),r.jsxs("ul",{className:"filter-list",children:[r.jsx("li",{children:r.jsxs("label",{children:[r.jsx("input",{type:"checkbox"})," Travel (120)"]})}),r.jsx("li",{children:r.jsxs("label",{children:[r.jsx("input",{type:"checkbox"})," Fashion (85)"]})}),r.jsx("li",{children:r.jsxs("label",{children:[r.jsx("input",{type:"checkbox"})," Food (64)"]})}),r.jsx("li",{children:r.jsxs("label",{children:[r.jsx("input",{type:"checkbox"})," Electronics (50)"]})})]})]}),r.jsxs("div",{className:"filter-group",children:[r.jsx("h3",{className:"filter-title",children:"Stores"}),r.jsxs("ul",{className:"filter-list",children:[r.jsx("li",{children:r.jsxs("label",{children:[r.jsx("input",{type:"checkbox"})," Amazon"]})}),r.jsx("li",{children:r.jsxs("label",{children:[r.jsx("input",{type:"checkbox"})," Flipkart"]})}),r.jsx("li",{children:r.jsxs("label",{children:[r.jsx("input",{type:"checkbox"})," Myntra"]})}),r.jsx("li",{children:r.jsxs("label",{children:[r.jsx("input",{type:"checkbox"})," Uber"]})})]})]})]}),r.jsx("div",{className:"deals-grid",children:s.map(o=>r.jsx(Br,ie({},o),o.id))})]})]}),r.jsx("style",{children:`
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
      `})]})},Gv=()=>r.jsxs("div",{className:"submit-prompt-section",children:[r.jsx("div",{className:"container",children:r.jsxs("div",{className:"submit-card",children:[r.jsxs("div",{className:"content",children:[r.jsx("h3",{children:"Have a Coupon or Deal?"}),r.jsx("p",{children:"Share it with Offerve and help others save more."})]}),r.jsx(Me,{to:"/submit-coupon",className:"btn-submit-link",children:"Submit Now →"})]})}),r.jsx("style",{children:`
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
            `})]}),Lt=()=>{const o=Wt().pathname==="/submit-coupon";return r.jsxs(r.Fragment,{children:[!o&&r.jsx(Gv,{}),r.jsxs("footer",{className:"footer",children:[r.jsx("div",{className:"footer-top",children:r.jsx("div",{className:"container",children:r.jsxs("div",{className:"footer-grid",children:[r.jsxs("div",{className:"footer-brand",children:[r.jsx("a",{href:"/",className:"footer-logo",children:"Offerve"}),r.jsx("p",{className:"footer-desc",children:"Offerve is your ultimate destination for the best coupons, deals, and offers from top online stores. Save money on every purchase."})]}),r.jsxs("div",{className:"footer-links",children:[r.jsx("h4",{className:"footer-heading",children:"Company"}),r.jsx(Me,{to:"/about",children:"About Us"}),r.jsx(Me,{to:"/submit-coupon",children:"Submit Coupon"}),r.jsx(Me,{to:"/contact",children:"Contact"}),r.jsx(Me,{to:"/privacy-policy",children:"Privacy Policy"}),r.jsx(Me,{to:"/terms-of-use",children:"Terms of Use"})]}),r.jsxs("div",{className:"footer-links",children:[r.jsx("h4",{className:"footer-heading",children:"Popular Stores"}),r.jsx(Me,{to:"/adda247-coupon-code",children:"Adda247"}),r.jsx(Me,{to:"/unacademy-coupon-code",children:"Unacademy"}),r.jsx(Me,{to:"/pw-coupon-code",children:"Physics Wallah"}),r.jsx(Me,{to:"/stores",children:"View All Stores"})]}),r.jsxs("div",{className:"footer-newsletter",children:[r.jsx("h4",{className:"footer-heading",children:"Stay Updated"}),r.jsx("p",{className:"newsletter-text",children:"Subscribe to get the handpicked deals in your inbox."}),r.jsxs("div",{className:"newsletter-form",children:[r.jsx("input",{type:"email",placeholder:"Enter your email"}),r.jsx("button",{children:"Subscribe"})]})]})]})})}),r.jsx("div",{className:"footer-bottom",children:r.jsx("div",{className:"container",children:r.jsxs("p",{children:["© ",new Date().getFullYear()," Offerve. All rights reserved."]})})}),r.jsx("style",{children:`
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
      `})]})]})},Vv=()=>r.jsxs("div",{className:"home-page",children:[r.jsx(Ut,{}),r.jsxs("main",{children:[r.jsx(Uv,{}),r.jsx("section",{className:"intro-section",style:{padding:"2rem 1.5rem",background:"var(--bg-main)",textAlign:"center"},children:r.jsx("div",{className:"container",style:{maxWidth:"900px",margin:"0 auto"},children:r.jsxs("p",{style:{fontSize:"1.1rem",color:"var(--text-body)",lineHeight:"1.7"},children:["Offerve curates the latest coupons and discount offers from India’s most popular stores. Every deal is checked and updated so you can shop smarter and save more. Explore ",r.jsx("a",{href:"/categories",style:{color:"var(--primary)"},children:"categories"}),", trending ",r.jsx("a",{href:"/stores",style:{color:"var(--primary)"},children:"stores"}),", and exclusive promo codes updated in real time."]})})}),r.jsx(Lv,{}),r.jsx(Hv,{}),r.jsx(qv,{}),r.jsx(Yv,{})]}),r.jsx("div",{className:"faq-section",style:{padding:"60px 0",background:"white",borderTop:"1px solid rgba(0,0,0,0.05)"},children:r.jsxs("div",{className:"container",style:{maxWidth:"800px"},children:[r.jsx("h2",{style:{textAlign:"center",marginBottom:"2rem",fontSize:"2rem"},children:"Frequently Asked Questions"}),r.jsx("div",{className:"faq-grid",style:{display:"grid",gap:"1.5rem"},children:[{q:"How does Offerve find and verify coupons?",a:"Offerve uses a dedicated team and automated systems to scour the web for the latest offers from top Indian retailers, verifying them manually to ensure they work."},{q:"Are the coupon codes updated daily?",a:"Yes, our database is updated in real-time. We continuously check for new promo codes and expire invalid ones to keep our deals fresh."},{q:"Is Offerve free to use?",a:"Absolutely! Offerve is completely free for all users. You don’t need to pay or sign up to access the best coupons."},{q:"Which stores offer the biggest discounts?",a:"Stores like Amazon, Flipkart, Myntra, and Swiggy frequently offer massive discounts during sale events, all of which are tracked on Offerve."},{q:"How do I redeem a coupon on Offerve?",a:"Simply click on 'Show Coupon Code' or 'View Offer' on any deal card. The code will be copied to your clipboard, and you'll be redirected to the store website to shop."}].map((s,o)=>r.jsxs("div",{className:"faq-item",style:{paddingBottom:"1.5rem",borderBottom:"1px solid #eee"},children:[r.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:"600",marginBottom:"0.5rem",color:"var(--text-main)"},children:s.q}),r.jsx("p",{style:{color:"var(--text-body)",lineHeight:"1.6"},children:s.a})]},o))}),r.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"https://schema.org","@type":"FAQPage",mainEntity:[{"@type":"Question",name:"How does Offerve find and verify coupons?",acceptedAnswer:{"@type":"Answer",text:"Offerve uses a dedicated team and automated systems to scour the web for the latest offers from top Indian retailers, verifying them manually to ensure they work."}},{"@type":"Question",name:"Are the coupon codes updated daily?",acceptedAnswer:{"@type":"Answer",text:"Yes, our database is updated in real-time. We continuously check for new promo codes and expire invalid ones to keep our deals fresh."}},{"@type":"Question",name:"Is Offerve free to use?",acceptedAnswer:{"@type":"Answer",text:"Absolutely! Offerve is completely free for all users. You don’t need to pay or sign up to access the best coupons."}},{"@type":"Question",name:"Which stores offer the biggest discounts?",acceptedAnswer:{"@type":"Answer",text:"Stores like Amazon, Flipkart, Myntra, and Swiggy frequently offer massive discounts during sale events, all of which are tracked on Offerve."}},{"@type":"Question",name:"How do I redeem a coupon on Offerve?",acceptedAnswer:{"@type":"Answer",text:"Simply click on 'Show Coupon Code' or 'View Offer' on any deal card. The code will be copied to your clipboard, and you'll be redirected to the store website to shop."}}]})}})]})}),r.jsx(Lt,{})]}),Qv=()=>{const s=al(),o=Va;return r.jsxs("div",{className:"stores-page",children:[r.jsx(Ut,{}),r.jsx("main",{className:"main-content",children:r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h1",{className:"page-title",children:"All Stores"}),r.jsx("p",{className:"page-desc",children:"Browse coupons and deals from your favorite top brands."})]}),r.jsx("div",{className:"stores-grid",children:o.map((c,u)=>r.jsxs("div",{className:"store-card",onClick:()=>s(`/${c.slug}`),children:[r.jsx("div",{className:"store-logo-wrapper",children:r.jsx("img",{src:`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${c.domain}&size=128`,alt:c.name,className:"store-logo",loading:"lazy",onError:f=>{f.target.style.display="none",f.target.parentElement.innerText=c.name[0]}})}),r.jsx("h3",{className:"store-name",children:c.name}),r.jsx("button",{className:"view-offers-btn",children:"View Offers"})]},u))})]})}),r.jsx(Lt,{}),r.jsx("style",{children:`
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
            `})]})},Xv=()=>{const[s,o]=A.useState(null),c=f=>{o(s===f?null:f)};A.useEffect(()=>{document.title="About Offerve - India's #1 Coupon & Deal Discovery Engine";const f=document.querySelector('meta[name="description"]');f&&f.setAttribute("content","Learn about Offerve, the leading destination for verified coupons, promo codes, and exclusive deals in India. Discover how we help millions save money daily."),window.scrollTo(0,0)},[]);const u=[{q:"Is Offerve completely free to use?",a:"Yes! Offerve is 100% free for all users. You never have to pay a subscription fee or hidden charge to access our coupons."},{q:"How often are coupons updated?",a:"Our database is updated in real-time. We have a dedicated team and automated systems that add hundreds of new coupons daily and remove expired ones to keep your experience frustration-free."},{q:"Do I need to register to use a coupon?",a:"No registration is required. You can search for a store, click on a coupon to copy it, and start saving immediately at the store's checkout page."},{q:"What if a coupon doesn't work?",a:"While we strive for 100% accuracy, sometimes retailers change terms without notice. If you find a broken code, please verify the terms and conditions. If it still fails, let us know via our Contact page, and we'll fix it instantly."},{q:"Do you have a mobile app?",a:"Currently, we offer a highly optimized mobile-responsive website that works perfectly on all smartphones and tablets, so you can save on the go without downloading an app."},{q:"Is it safe to use coupons from Offerve?",a:"Absolutely. We only partner with reputable online retailers and verify our links to ensure they are safe and secure. We respect your privacy and do not track your personal shopping data."},{q:"Can I submit a coupon I found?",a:"Yes, we love community contributions! If you found a working code that we missed, please share it through our Contact Us page so other shoppers can benefit."},{q:"How do you make money if it's free?",a:"We may earn a small commission from retailers when you make a purchase using our links. This comes at no extra cost to you—in fact, it ensures we can keep the platform free and running."}];return r.jsxs("div",{className:"about-page",children:[r.jsx(Ut,{}),r.jsxs("main",{className:"about-main",children:[r.jsx("section",{className:"about-hero",children:r.jsxs("div",{className:"container hero-container",children:[r.jsxs("h1",{children:["We're on a Mission to ",r.jsx("br",{}),r.jsx("span",{children:"Democratize Savings"})]}),r.jsx("p",{children:"Offerve is India's fastest-growing destination for smart shoppers. We combine cutting-edge technology with human verification to bring you thousands of active deals every single day."})]})}),r.jsx("section",{className:"stats-section",children:r.jsx("div",{className:"container stats-grid",children:[{label:"Active Coupons",value:"50,000+"},{label:"Partner Stores",value:"2,500+"},{label:"Happy Users",value:"1M+"},{label:"Daily Updates",value:"24/7"}].map((f,h)=>r.jsxs("div",{className:"stat-card",children:[r.jsx("div",{className:"stat-value",children:f.value}),r.jsx("div",{className:"stat-label",children:f.label})]},h))})}),r.jsx("section",{className:"content-section",children:r.jsxs("div",{className:"container content-container",children:[r.jsxs("div",{className:"text-block",children:[r.jsx("h2",{children:"Who We Are"}),r.jsxs("p",{children:["Founded with a simple yet powerful idea, ",r.jsx("strong",{children:"Offerve"})," started as a small project to help friends find working promo codes. Today, it has evolved into a comprehensive savings platform trust by millions."]}),r.jsxs("p",{children:["In a digital age where online shopping is the norm, finding a working discount code shouldn't feel like finding a needle in a haystack. That's why we built Offerve – a platform that prioritizes ",r.jsx("strong",{children:"accuracy, transparency, and ease of use"}),". We are a team of deal hunters, tech enthusiasts, and savings experts dedicated to keeping money in your pocket."]})]}),r.jsxs("div",{className:"how-it-works",children:[r.jsx("h2",{children:"How We Work"}),r.jsx("div",{className:"steps-grid",children:[{title:"1. We Hunt",desc:"Our automated algorithms and expert team scan the web 24/7 to find the latest offers from top brands."},{title:"2. We Verify",desc:"We don't just post anything. Every coupon is manually tested to ensure it actually works at checkout."},{title:"3. You Save",desc:"We organize deals clearly, so you can copy a code and apply it in seconds, saving money instantly."}].map((f,h)=>r.jsxs("div",{className:"step-card",children:[r.jsx("h3",{children:f.title}),r.jsx("p",{children:f.desc})]},h))})]}),r.jsxs("div",{className:"text-block",children:[r.jsx("h2",{children:"Your One-Stop Shop for Everything"}),r.jsxs("p",{children:["Whether you are looking to upgrade your wardrobe with the latest ",r.jsx("strong",{children:"Fashion"})," trends from Myntra and Ajio, ordering delicious meals from ",r.jsx("strong",{children:"Food Delivery"})," giants like Swiggy and Zomato, or booking your next vacation via ",r.jsx("strong",{children:"Travel"})," portals like MakeMyTrip, Offerve has you covered. We also feature extensive deals for ",r.jsx("strong",{children:"Electronics"}),", ",r.jsx("strong",{children:"Beauty"}),", ",r.jsx("strong",{children:"Hosting"}),", and ",r.jsx("strong",{children:"Education"})," platforms."]})]}),r.jsxs("div",{className:"faq-section",children:[r.jsx("h2",{children:"Frequently Asked Questions"}),r.jsx("div",{className:"faq-grid",children:u.map((f,h)=>r.jsxs("div",{onClick:()=>c(h),className:`faq-item ${s===h?"active":""}`,children:[r.jsxs("div",{className:"faq-header",children:[r.jsx("h3",{children:f.q}),r.jsx("span",{className:"faq-icon",children:"+"})]}),s===h&&r.jsx("div",{className:"faq-answer",children:r.jsx("p",{children:f.a})})]},h))})]}),r.jsx("section",{className:"cta-section",children:r.jsxs("div",{className:"container",children:[r.jsx("h2",{children:"Ready to Start Saving?"}),r.jsx("p",{children:"Join massive community of smart shoppers and never pay full price again."}),r.jsx("a",{href:"/",className:"cta-btn",children:"Browse Today's Top Deals"})]})})]})})]}),r.jsx(Lt,{}),r.jsx("style",{children:`
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
            `})]})},Zv=()=>{const{slug:s}=ym(),o=al(),[c,u]=A.useState(null),[f,h]=A.useState([]),[p,v]=A.useState([]),[y,g]=A.useState({active:0,verified:0});if(A.useEffect(()=>{const b=Va.find(L=>L.slug===s);if(!b){o("/stores");return}u(b);const O=kr(b);h(O),g({active:O.length,verified:O.filter(L=>L.verified).length});const U=new Date().getFullYear(),H=`Best ${b.name} Coupon Codes, Promo Codes & Offers – ${U} | Offerve`,q=`Find the latest ${b.name} coupon codes, promo codes, and verified offers. Updated daily so you can save more on ${b.name} shopping. Exclusive deals only on Offerve.`;document.title=H;const D=(L,ee,le="name")=>{let ce=document.querySelector(`meta[${le}="${L}"]`);ce||(ce=document.createElement("meta"),ce.setAttribute(le,L),document.head.appendChild(ce)),ce.setAttribute("content",ee)};D("description",q),D("og:title",H,"property"),D("og:description",`Verified deals and offers for ${b.name}.`,"property"),D("og:url",`https://offerve.com/${s}`,"property"),D("og:image",`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${b.domain}&size=256`,"property"),D("twitter:card","summary_large_image","name");const I=Va.filter(L=>L.id!==b.id).sort(()=>.5-Math.random()).slice(0,4);v(I)},[s,o]),!c)return r.jsx("div",{className:"loading",style:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},children:"Loading..."});const j=new Date().getFullYear();return r.jsxs("div",{className:"store-page",children:[r.jsx(Ut,{}),r.jsxs("main",{className:"main-content",children:[r.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"WebPage",name:`Best ${c.name} Coupon Codes`,description:`Save with latest ${c.name} coupons.`,breadcrumb:{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://offerve.com/"},{"@type":"ListItem",position:2,name:"Stores",item:"https://offerve.com/stores"},{"@type":"ListItem",position:3,name:c.name,item:`https://offerve.com/${c.slug}`}]}},{"@type":"Organization",name:c.name,url:`https://${c.domain}`,logo:`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${c.domain}&size=128`},{"@type":"FAQPage",mainEntity:c.faqs.map(b=>({"@type":"Question",name:b.q,acceptedAnswer:{"@type":"Answer",text:b.a}}))}]})}}),r.jsx("div",{className:"breadcrumbs-section",children:r.jsx("div",{className:"container",children:r.jsxs("div",{className:"breadcrumbs",children:[r.jsx(Me,{to:"/",children:"Home"}),r.jsx("span",{className:"separator",children:"›"}),r.jsx(Me,{to:"/stores",children:"Stores"}),r.jsx("span",{className:"separator",children:"›"}),r.jsx("span",{className:"current",children:c.name})]})})}),r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"store-header",children:[r.jsx("div",{className:"store-logo-large",children:r.jsx("img",{src:`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${c.domain}&size=128`,alt:`${c.name} Logo`,onError:b=>{b.target.style.display="none",b.target.parentElement.innerText=c.name[0]}})}),r.jsxs("div",{className:"store-info",children:[r.jsxs("h1",{className:"page-title1",children:[c.name," Coupon Codes & Offers – Verified Deals for ",j]}),r.jsxs("p",{className:"store-intro",children:["Offerve brings you the best ",r.jsx("strong",{children:c.name})," coupons and deals to help you save on every order. These offers are verified regularly and cover discounts on popular categories like fashion, accessories, electronics, daily essentials, and more."]}),r.jsxs("div",{className:"store-stats",children:[r.jsxs("span",{className:"stat-badge",children:[r.jsx("span",{className:"icon",children:"🏷️"})," ",y.active," Active Offers"]}),r.jsxs("span",{className:"stat-badge success",children:[r.jsx("span",{className:"icon",children:"✅"})," Verified Today"]})]})]})]}),r.jsxs("div",{className:"store-layout",children:[r.jsxs("div",{className:"coupons-column",children:[r.jsxs("div",{className:"filter-bar",children:[r.jsx("span",{className:"filter-label",children:"Sort By:"}),r.jsx("button",{className:"filter-btn active",children:"Top Rated"}),r.jsx("button",{className:"filter-btn",children:"Exclusive"}),r.jsx("button",{className:"filter-btn",children:"Expiring Soon"})]}),r.jsx("div",{className:"coupons-list",children:f.map(b=>r.jsx(Br,ie({merchant:{name:c.name,domain:c.domain,logo:`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${c.domain}&size=128`}},b),b.id))}),r.jsx("div",{className:"load-more-container",style:{textAlign:"center",marginTop:"2rem"},children:r.jsxs("button",{className:"load-more-btn",children:["Show More ",c.name," Offers"]})})]}),r.jsxs("aside",{className:"sidebar",children:[r.jsxs("div",{className:"sidebar-widget about-widget",children:[r.jsxs("h3",{children:["About ",c.name]}),r.jsx("p",{className:"widget-text",children:c.description}),r.jsxs("p",{className:"widget-text",style:{marginTop:"0.5rem"},children:["Current Best Offer: ",r.jsx("strong",{children:c.bestOffers})]})]}),c.faqs.length>0&&r.jsxs("div",{className:"sidebar-widget faq-widget",children:[r.jsx("h3",{children:"FAQs"}),r.jsx("div",{className:"faq-mini-list",children:c.faqs.map((b,O)=>r.jsxs("div",{className:"faq-mini-item",children:[r.jsxs("strong",{children:["Q: ",b.q]}),r.jsxs("p",{children:["A: ",b.a]})]},O))})]})]})]}),r.jsxs("div",{className:"related-stores-section",children:[r.jsx("h3",{className:"section-title-small",children:"Similar Stores"}),r.jsx("div",{className:"related-grid",children:p.map(b=>r.jsxs(Me,{to:`/${b.slug}`,className:"related-store-card",children:[r.jsx("img",{src:`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${b.domain}&size=64`,alt:b.name,className:"related-icon"}),r.jsx("span",{children:b.name})]},b.id))})]}),r.jsx("div",{style:{marginTop:"3rem",textAlign:"center"},children:r.jsx(Me,{to:"/stores",style:{color:"var(--primary)",fontWeight:"600",textDecoration:"underline"},children:"Browse All Stores"})})]})]}),r.jsx(Lt,{}),r.jsx("style",{children:`
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

            `})]})},Fv=()=>{const[s]=Gy(),o=s.get("q")||"",[c,u]=A.useState([]),[f,h]=A.useState("all");A.useEffect(()=>{if(o){Ze.trackSearch(o);const v=km.search(o);u(v)}},[o]);const p=f==="all"?c:c.filter(v=>v.type===f);return r.jsxs("div",{className:"page-wrapper",children:[r.jsx(Ut,{}),r.jsxs("div",{className:"container search-page",children:[r.jsxs("h1",{className:"search-heading",children:['Results for "',o,'"']}),r.jsxs("div",{className:"search-filters",children:[r.jsxs("button",{className:f==="all"?"active":"",onClick:()=>h("all"),children:["All (",c.length,")"]}),r.jsx("button",{className:f==="store"?"active":"",onClick:()=>h("store"),children:"Stores"}),r.jsx("button",{className:f==="coupon"?"active":"",onClick:()=>h("coupon"),children:"Coupons"})]}),r.jsx("div",{className:"search-grid",children:p.length>0?p.map((v,y)=>r.jsxs("div",{className:"search-result-item",children:[v.type==="coupon"&&r.jsx(Br,qe(ie({},v.data),{id:v.id.split("-")[1],merchant:v.data.merchant})),v.type==="store"&&r.jsxs("div",{className:"store-result-card",children:[r.jsx("div",{className:"store-logo",children:v.data.name[0]}),r.jsxs("div",{className:"store-info",children:[r.jsx("h3",{children:v.data.name}),r.jsx("p",{children:v.data.description}),r.jsx("a",{href:"/"+v.data.slug,className:"btn-small",children:"Visit Store"})]})]}),v.type==="page"&&r.jsxs("div",{className:"page-result-card",children:[r.jsx("h3",{children:v.title}),r.jsx("span",{className:"type-tag",children:"Guide"})]})]},y)):r.jsxs("div",{className:"no-results",children:[r.jsxs("h3",{children:['No results found for "',o,'"']}),r.jsx("p",{children:"Try checking your spelling or using a different keyword."})]})})]}),r.jsx(Lt,{}),r.jsx("style",{children:`
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
            `})]})},Bm=[{id:"super-money-super-pro-card",slug:"super-money-super-pro-card",title:"Super Money Super Pro Card Review: Is This the Best Lifetime Free Credit Card?",excerpt:"Discover whether the Super Money Super Pro Card is the best lifetime free credit card. Full review, benefits, charges, approval tips & apply link inside.",date:"2025-12-12",author:"Offerve",thumbnail:"/assets/deals/super-money-pro-thumbnail.png",ogImage:"/assets/og-super-money-pro.jpg",tags:["credit card","cashback","Super Money","Super Pro","best credit card","apply credit card"],ctaText:"Apply Now",ctaLink:"https://link.super.money/46b7wowF6Ub",pinned:!0,seo:{title:"Best Lifetime Free Credit Card? Super Money Super Pro Card Full Review & Benefits (2025)",description:"Discover whether the Super Money Super Pro Card is the best lifetime free credit card. Full review, benefits, charges, approval tips & apply link inside."},content:`
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
    `}],Jv=()=>{const[s,o]=A.useState(""),c=Bm.filter(u=>u.title.toLowerCase().includes(s.toLowerCase())||u.tags.some(f=>f.toLowerCase().includes(s.toLowerCase())));return r.jsxs("div",{className:"deals-page",children:[r.jsx(Ut,{}),r.jsxs("main",{className:"main-content",children:[r.jsx("div",{className:"deals-hero",children:r.jsxs("div",{className:"container",children:[r.jsx("h1",{children:"Exclusive Deals & Offers"}),r.jsx("p",{children:"Handpicked financial deals, credit card offers, and savings guides."})]})}),r.jsxs("div",{className:"container",style:{padding:"3rem 1.5rem",minHeight:"60vh"},children:[r.jsxs("div",{className:"deals-filter-bar",children:[r.jsx("input",{type:"text",placeholder:"Search deals...",value:s,onChange:u=>o(u.target.value),className:"deal-search-input"}),r.jsxs("div",{className:"tags-row",children:[r.jsx("span",{className:"tag active",children:"All"}),r.jsx("span",{className:"tag",children:"Credit Cards"}),r.jsx("span",{className:"tag",children:"Banking"}),r.jsx("span",{className:"tag",children:"Travel"})]})]}),r.jsxs("div",{className:"deals-grid-layout",children:[c.map(u=>r.jsx(Me,{to:`/deals/${u.slug}`,className:"deal-card-link",children:r.jsxs("article",{className:"deal-card",children:[r.jsxs("div",{className:"deal-thumbnail",children:[r.jsx("img",{src:u.thumbnail,alt:u.title,loading:"lazy"}),u.pinned&&r.jsx("span",{className:"pinned-badge",children:"Featured"})]}),r.jsxs("div",{className:"deal-content",children:[r.jsxs("div",{className:"deal-meta",children:[r.jsx("span",{className:"deal-author",children:u.author}),r.jsx("span",{className:"deal-date",children:new Date(u.date).toLocaleDateString()})]}),r.jsx("h2",{className:"deal-title",children:u.title}),r.jsx("p",{className:"deal-excerpt",children:u.excerpt}),r.jsx("span",{className:"read-more",children:"Read Review →"})]})]})},u.id)),c.length===0&&r.jsx("div",{className:"no-deals",children:r.jsx("p",{children:"No deals found matching your criteria."})})]})]})]}),r.jsx(Lt,{}),r.jsx("style",{children:`
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
            `})]})},Kv=()=>{const{slug:s}=ym(),o=al(),[c,u]=A.useState(null);A.useEffect(()=>{var v;const h=Bm.find(y=>y.slug===s);if(!h){o("/deals");return}u(h),document.title=((v=h.seo)==null?void 0:v.title)||`${h.title} | Offerve Deals`;const p=(y,g,j="name")=>{let b=document.querySelector(`meta[${j}="${y}"]`);b||(b=document.createElement("meta"),b.setAttribute(j,y),document.head.appendChild(b)),b.setAttribute("content",g)};p("description",h.excerpt),p("og:title",h.title,"property"),p("og:description",h.excerpt,"property"),p("og:url",window.location.href,"property"),p("og:image",h.ogImage||h.thumbnail,"property"),p("twitter:card","summary_large_image","name")},[s,o]);const f=()=>{console.log("Event: deal_apply_click",{slug:c.slug,timestamp:new Date().toISOString()})};return c?r.jsxs("div",{className:"deal-detail-page",children:[r.jsx(Ut,{}),r.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://offerve.com/"},{"@type":"ListItem",position:2,name:"Deals",item:"https://offerve.com/deals"},{"@type":"ListItem",position:3,name:c.title,item:window.location.href}]},{"@type":"BlogPosting",headline:c.title,image:c.ogImage,author:{"@type":"Organization",name:c.author},publisher:{"@type":"Organization",name:"Offerve",logo:{"@type":"ImageObject",url:"https://offerve.com/favicon.svg"}},datePublished:c.date,description:c.excerpt},{"@type":"FAQPage",mainEntity:[{"@type":"Question",name:"How do I apply for the card?",acceptedAnswer:{"@type":"Answer",text:"Click the 'Apply Now' button on this page to visit the official application portal. Complete the digital KYC for instant approval."}},{"@type":"Question",name:"Is the annual fee refundable?",acceptedAnswer:{"@type":"Answer",text:"The fee is waived for the first year if you apply now, and waived in subsequent years on achieving spend milestones."}},{"@type":"Question",name:"When is cashback credited?",acceptedAnswer:{"@type":"Answer",text:"Cashback is calculated monthly and credited to your card account within 10 days of the statement generation date."}}]}]})}}),r.jsx("main",{className:"main-content",children:r.jsxs("article",{className:"article-container",children:[r.jsxs("div",{className:"breadcrumbs",children:[r.jsx(Me,{to:"/",children:"Home"})," › ",r.jsx(Me,{to:"/deals",children:"Deals"})," › ",r.jsx("span",{children:c.title})]}),r.jsxs("header",{className:"article-header",children:[r.jsxs("div",{className:"article-meta",children:[r.jsx("span",{className:"meta-tag",children:"Credit Card"}),r.jsx("span",{className:"meta-date",children:new Date(c.date).toLocaleDateString()})]}),r.jsx("h1",{className:"article-title",children:c.title}),r.jsxs("div",{className:"author-row",children:[r.jsx("div",{className:"author-avatar",children:"O"}),r.jsxs("span",{className:"author-name",children:["By ",c.author]})]})]}),r.jsx("div",{className:"article-featured-image",children:r.jsx("img",{src:c.thumbnail,alt:c.title})}),r.jsxs("div",{className:"article-layout",children:[r.jsx("div",{className:"article-body",dangerouslySetInnerHTML:{__html:c.content}}),r.jsx("aside",{className:"article-sidebar",children:r.jsxs("div",{className:"apply-widget sticky",children:[r.jsx("h3",{children:"Ready to Apply?"}),r.jsx("p",{className:"apply-note",children:"Apply through this link — you may get faster approval and cashback."}),r.jsx("a",{href:c.ctaLink,target:"_blank",rel:"nofollow noopener noreferrer",className:"cta-button",onClick:f,children:c.ctaText}),r.jsx("p",{className:"secure-text",children:"🔒 100% Secure Application"})]})})]}),r.jsxs("div",{className:"mobile-cta-bar",children:[r.jsxs("div",{className:"mobile-cta-text",children:[r.jsxs("span",{children:[c.title.substring(0,20),"..."]}),r.jsx("small",{children:"Get Approval & Cashback"})]}),r.jsx("a",{href:c.ctaLink,target:"_blank",rel:"nofollow noopener noreferrer",className:"mobile-apply-btn",onClick:f,children:"Apply Now"})]})]})}),r.jsx(Lt,{}),r.jsx("style",{children:`
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
            `})]}):r.jsx("div",{className:"loading",children:"Loading..."})},Wv={send:s=>Gt(null,null,function*(){return console.log("SENDING EMAIL VIA 'EMAILJS'...",s),new Promise(o=>{setTimeout(()=>{console.log("EMAIL SENT SUCCESSFULLY!"),o({status:200,text:"OK"})},800)})})},fn="offerve_submissions",jc={save:s=>Gt(null,null,function*(){try{const o=JSON.parse(Fe.local.getItem(fn)||"[]"),c=qe(ie({id:Date.now().toString()},s),{status:"Pending",submittedAt:new Date().toISOString()});return o.unshift(c),Fe.local.setItem(fn,JSON.stringify(o)),yield Wv.send({to_email:"support@offerve.com",from_name:s.name||"Anonymous User",message:`
                    New ${s.type} Submission:
                    Store: ${s.storeName}
                    Code: ${s.code||"N/A"}
                    Details: ${s.description}
                    Link: ${s.link||"N/A"}
                `}),{success:!0}}catch(o){return console.error("Submission failed:",o),{success:!1,error:o.message}}}),getAll:()=>JSON.parse(Fe.local.getItem(fn)||"[]"),updateStatus:(s,o)=>{const u=JSON.parse(Fe.local.getItem(fn)||"[]").map(f=>f.id===s?qe(ie({},f),{status:o}):f);return Fe.local.setItem(fn,JSON.stringify(u)),u},delete:s=>{const c=JSON.parse(Fe.local.getItem(fn)||"[]").filter(u=>u.id!==s);return Fe.local.setItem(fn,JSON.stringify(c)),c}},$v=()=>{A.useEffect(()=>{document.title="Submit Coupon or Deal | Offerve";const j=document.querySelector('meta[name="description"]');j&&j.setAttribute("content","Share coupons, deals, and offers with Offerve and help users save more.")},[]);const[s,o]=A.useState({name:"",email:"",type:"Coupon Code",storeName:"",code:"",description:"",expiry:"",link:""}),[c,u]=A.useState(!1),[f,h]=A.useState(!1),[p,v]=A.useState(""),y=j=>{o(qe(ie({},s),{[j.target.name]:j.target.value}))},g=j=>Gt(null,null,function*(){if(j.preventDefault(),v(""),!s.email||!s.storeName||!s.description){v("Please fill in all required fields.");return}u(!0);const b=yield jc.save(s);u(!1),b.success?(h(!0),o({name:"",email:"",type:"Coupon Code",storeName:"",code:"",description:"",expiry:"",link:""})):v("Something went wrong. Please try again.")});return r.jsxs("div",{className:"submit-page",children:[r.jsx(Ut,{}),r.jsx("main",{className:"container page-content",children:r.jsxs("div",{className:"form-wrapper",children:[r.jsx("h1",{className:"page-title",children:"Submit Your Coupon, Deal or Offer"}),r.jsx("p",{className:"page-intro",children:"Share coupon codes, deals, offers, tricks, or money-saving tips with Offerve. If your submission is valid, we’ll review and publish it to help others save."}),f?r.jsxs("div",{className:"success-message",children:[r.jsx("div",{className:"icon",children:"🎉"}),r.jsx("h2",{children:"Thanks for sharing!"}),r.jsx("p",{children:"Our team will review your submission and publish it shortly."}),r.jsx("button",{onClick:()=>h(!1),className:"btn-secondary",children:"Submit Another"})]}):r.jsxs("form",{onSubmit:g,className:"submission-form",children:[r.jsxs("div",{className:"form-grid",children:[r.jsxs("div",{className:"form-group",children:[r.jsxs("label",{children:["Your Name ",r.jsx("span",{children:"(Optional)"})]}),r.jsx("input",{type:"text",name:"name",value:s.name,onChange:y,placeholder:"John Doe"})]}),r.jsxs("div",{className:"form-group",children:[r.jsxs("label",{children:["Email Address ",r.jsx("span",{className:"required",children:"*"})]}),r.jsx("input",{type:"email",name:"email",value:s.email,onChange:y,placeholder:"john@example.com",required:!0})]}),r.jsxs("div",{className:"form-group",children:[r.jsxs("label",{children:["Submission Type ",r.jsx("span",{className:"required",children:"*"})]}),r.jsxs("select",{name:"type",value:s.type,onChange:y,children:[r.jsx("option",{children:"Coupon Code"}),r.jsx("option",{children:"Deal / Offer"}),r.jsx("option",{children:"Sale / Discount"}),r.jsx("option",{children:"Cashback / Bank Offer"}),r.jsx("option",{children:"Money-Saving Tip"})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsxs("label",{children:["Store / Brand Name ",r.jsx("span",{className:"required",children:"*"})]}),r.jsx("input",{type:"text",name:"storeName",value:s.storeName,onChange:y,placeholder:"e.g. Amazon, Myntra, Domino's",required:!0})]}),s.type==="Coupon Code"&&r.jsxs("div",{className:"form-group full-width",children:[r.jsxs("label",{children:["Coupon Code ",r.jsx("span",{className:"required",children:"*"})]}),r.jsx("input",{type:"text",name:"code",value:s.code,onChange:y,placeholder:"e.g. SAVE20",className:"code-input",required:!0})]}),r.jsxs("div",{className:"form-group full-width",children:[r.jsxs("label",{children:["Offer Description ",r.jsx("span",{className:"required",children:"*"})]}),r.jsx("textarea",{name:"description",value:s.description,onChange:y,placeholder:"Describe the offer details, terms, or how to use it...",required:!0,rows:"4"})]}),r.jsxs("div",{className:"form-group",children:[r.jsxs("label",{children:["Expiry Date ",r.jsx("span",{children:"(Optional)"})]}),r.jsx("input",{type:"date",name:"expiry",value:s.expiry,onChange:y})]}),r.jsxs("div",{className:"form-group",children:[r.jsxs("label",{children:["Offer Link / Proof ",r.jsx("span",{children:"(Optional)"})]}),r.jsx("input",{type:"url",name:"link",value:s.link,onChange:y,placeholder:"https://..."})]})]}),p&&r.jsx("div",{className:"error-message",children:p}),r.jsx("div",{className:"form-actions",children:r.jsx("button",{type:"submit",className:"btn-submit",disabled:c,children:c?"Submitting...":"Submit Now"})})]})]})}),r.jsx(Lt,{}),r.jsx("style",{children:`
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
            `})]})},sm="offerve_messages",Iv={send:s=>Gt(null,null,function*(){if(s.confirm_email)return console.warn("Spam detected (honeypot filled)"),{success:!1,error:"Spam detected"};try{yield new Promise(u=>setTimeout(u,800)),console.log("SENDING CONTACT MESSAGE:",s);const o=JSON.parse(Fe.local.getItem(sm)||"[]"),c=qe(ie({id:Date.now().toString()},s),{submittedAt:new Date().toISOString()});return delete c.confirm_email,o.unshift(c),Fe.local.setItem(sm,JSON.stringify(o)),{success:!0}}catch(o){return console.error("Contact submission failed:",o),{success:!1,error:"Network error, please try again."}}})},Pv=()=>{A.useEffect(()=>{document.title="Contact Offerve – Support, Deals & Coupon Help";let j=document.querySelector('meta[name="description"]');j||(j=document.createElement("meta"),j.name="description",document.head.appendChild(j)),j.setAttribute("content","Contact Offerve for support, coupon issues, deals, or partnerships. We’re here to help you save more.");let b=document.querySelector('link[rel="canonical"]');b||(b=document.createElement("link"),b.rel="canonical",document.head.appendChild(b)),b.setAttribute("href","https://offerve.com/contact/")},[]);const[s,o]=A.useState({name:"",email:"",subject:"Support",message:"",confirm_email:""}),[c,u]=A.useState(!1),[f,h]=A.useState(!1),[p,v]=A.useState(""),y=j=>{o(qe(ie({},s),{[j.target.name]:j.target.value}))},g=j=>Gt(null,null,function*(){if(j.preventDefault(),v(""),!s.email||!s.message){v("Please fill in all required fields.");return}u(!0);const b=yield Iv.send(s);u(!1),b.success?(h(!0),o({name:"",email:"",subject:"Support",message:"",confirm_email:""})):v(b.error||"Something went wrong. Please try again.")});return r.jsxs("div",{className:"contact-page",children:[r.jsx(Ut,{}),r.jsx("main",{className:"container page-content",children:r.jsxs("div",{className:"contact-wrapper",children:[r.jsx("h1",{className:"page-title",children:"Contact Us"}),r.jsx("p",{className:"page-intro",children:"Have a question or need help with a coupon? We're here to assist you. Reach out for support, deal submissions, or partnership inquiries."}),f?r.jsxs("div",{className:"success-message",children:[r.jsx("div",{className:"icon",children:"📬"}),r.jsx("h2",{children:"Message Sent!"}),r.jsx("p",{children:"Thanks for contacting us. We’ll get back to you shortly."}),r.jsx("button",{onClick:()=>h(!1),className:"btn-secondary",children:"Send Another Message"})]}):r.jsxs("form",{onSubmit:g,className:"contact-form",children:[r.jsx("div",{style:{display:"none"},children:r.jsxs("label",{children:["Don't fill this out if you're human: ",r.jsx("input",{name:"confirm_email",value:s.confirm_email,onChange:y})]})}),r.jsxs("div",{className:"form-grid",children:[r.jsxs("div",{className:"form-group",children:[r.jsxs("label",{children:["Your Name ",r.jsx("span",{children:"(Optional)"})]}),r.jsx("input",{type:"text",name:"name",value:s.name,onChange:y,placeholder:"Your Name"})]}),r.jsxs("div",{className:"form-group",children:[r.jsxs("label",{children:["Email Address ",r.jsx("span",{className:"required",children:"*"})]}),r.jsx("input",{type:"email",name:"email",value:s.email,onChange:y,placeholder:"email@example.com",required:!0})]}),r.jsxs("div",{className:"form-group full-width",children:[r.jsxs("label",{children:["Subject ",r.jsx("span",{className:"required",children:"*"})]}),r.jsxs("select",{name:"subject",value:s.subject,onChange:y,children:[r.jsx("option",{value:"Support",children:"Support / Site Issue"}),r.jsx("option",{value:"Coupon Issue",children:"Report a Broken Coupon"}),r.jsx("option",{value:"Deal Submission",children:"Submit a Deal"}),r.jsx("option",{value:"Partnership",children:"Partnership / Advertising"}),r.jsx("option",{value:"Other",children:"Other Inquiry"})]})]}),r.jsxs("div",{className:"form-group full-width",children:[r.jsxs("label",{children:["Message ",r.jsx("span",{className:"required",children:"*"})]}),r.jsx("textarea",{name:"message",value:s.message,onChange:y,placeholder:"How can we help you?",rows:"6",required:!0})]})]}),p&&r.jsx("div",{className:"error-message",children:p}),r.jsx("div",{className:"form-actions",children:r.jsx("button",{type:"submit",className:"btn-submit",disabled:c,children:c?"Sending...":"Send Message"})})]})]})}),r.jsx(Lt,{}),r.jsx("style",{children:`
                .page-content { padding-top: 2rem; padding-bottom: 4rem; }
                .contact-wrapper { max-width: 700px; margin: 0 auto; background: white; padding: 2.5rem; border-radius: 12px; box-shadow: var(--shadow-md); }
                
                .page-title { font-size: 2rem; margin-bottom: 0.5rem; text-align: center; color: var(--text-main); }
                .page-intro { text-align: center; color: var(--text-body); margin-bottom: 2.5rem; line-height: 1.6; }

                .contact-form { display: flex; flex-direction: column; gap: 1.5rem; }
                .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
                
                @media (max-width: 600px) {
                    .form-grid { grid-template-columns: 1fr; }
                    .contact-wrapper { padding: 1.5rem; }
                }

                .full-width { grid-column: 1 / -1; }
                .form-group { display: flex; flex-direction: column; gap: 0.5rem; }
                
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
                    width: 100%;
                }

                input:focus, select:focus, textarea:focus {
                    outline: none;
                    border-color: var(--primary);
                    background: white;
                    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
                }

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
                .btn-submit:disabled { opacity: 0.7; cursor: not-allowed; }

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
            `})]})},eb=()=>{var q;console.log("AdminDashboard Component Mounting...");const[s,o]=A.useState("overview"),[c,u]=A.useState([]),[f,h]=A.useState([]),[p,v]=A.useState([]),[y,g]=A.useState([]),[j,b]=A.useState(0);A.useEffect(()=>{u(Ze.getAllCouponsWithMetrics()),h(Ze.getStoreMetrics()),v(Ze.getEventsLog()),g(jc.getAll())},[j]);const O=()=>b(D=>D+1),U=(D,V)=>{jc.updateStatus(D,V),O()},H=()=>{window.confirm("Are you sure? This will wipe all analytics data.")&&(Ze.resetData(),O())};return r.jsxs("div",{className:"admin-page",children:[r.jsx(Ut,{}),r.jsxs("div",{className:"admin-container container",children:[r.jsxs("div",{className:"admin-header",children:[r.jsx("h1",{children:"Admin Analytics Dashboard"}),r.jsxs("div",{className:"admin-actions",children:[r.jsx("button",{onClick:O,className:"btn-secondary",children:"Refresh Data"}),r.jsx("button",{onClick:H,className:"btn-danger",children:"Reset All"})]})]}),r.jsxs("div",{className:"admin-tabs",children:[r.jsx("button",{className:s==="overview"?"active":"",onClick:()=>o("overview"),children:"Overview"}),r.jsxs("button",{className:s==="submissions"?"active":"",onClick:()=>o("submissions"),children:["Submissions (",y.filter(D=>D.status==="Pending").length,")"]}),r.jsx("button",{className:s==="coupons"?"active":"",onClick:()=>o("coupons"),children:"Top Coupons"}),r.jsx("button",{className:s==="stores"?"active":"",onClick:()=>o("stores"),children:"Store Performance"}),r.jsx("button",{className:s==="export"?"active":"",onClick:()=>o("export"),children:"Export & Snapshot"})]}),r.jsxs("div",{className:"admin-content",children:[s==="overview"&&r.jsxs("div",{className:"overview-grid",children:[r.jsxs("div",{className:"stat-card",children:[r.jsx("h3",{children:"Pending Submissions"}),r.jsx("p",{className:"stat-value",children:y.filter(D=>D.status==="Pending").length})]}),r.jsxs("div",{className:"stat-card",children:[r.jsx("h3",{children:"Total Events"}),r.jsx("p",{className:"stat-value",children:p.length})]}),r.jsxs("div",{className:"stat-card",children:[r.jsx("h3",{children:"Most Active Store"}),r.jsx("p",{className:"stat-value text-small",children:((q=f[0])==null?void 0:q.name)||"-"})]}),r.jsxs("div",{className:"stat-card",children:[r.jsx("h3",{children:"Total Copies"}),r.jsx("p",{className:"stat-value",children:f.reduce((D,V)=>D+V.analytics.totalCopy,0)})]}),r.jsxs("div",{className:"recent-activity",children:[r.jsx("h3",{children:"Recent Live Events"}),r.jsx("ul",{className:"event-log",children:p.slice(0,10).map((D,V)=>r.jsxs("li",{children:[r.jsx("span",{className:`tag ${D.type}`,children:D.type}),r.jsx("span",{className:"source",children:D.storeSlug}),r.jsx("span",{className:"time",children:new Date(D.timestamp).toLocaleTimeString()})]},V))})]})]}),s==="submissions"&&r.jsx("div",{className:"table-responsive",children:r.jsxs("table",{className:"admin-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Date"}),r.jsx("th",{children:"User"}),r.jsx("th",{children:"Type"}),r.jsx("th",{children:"Store"}),r.jsx("th",{children:"Details"}),r.jsx("th",{children:"Status"}),r.jsx("th",{children:"Actions"})]})}),r.jsxs("tbody",{children:[y.length===0&&r.jsx("tr",{children:r.jsx("td",{colspan:"7",children:"No submissions yet."})}),y.map(D=>r.jsxs("tr",{children:[r.jsx("td",{children:new Date(D.submittedAt).toLocaleDateString()}),r.jsxs("td",{children:[D.name||"Anonymous",r.jsx("br",{}),r.jsx("small",{children:D.email})]}),r.jsx("td",{children:r.jsx("span",{className:"tag view",children:D.type})}),r.jsx("td",{children:D.storeName}),r.jsxs("td",{children:[r.jsx("strong",{children:D.code}),r.jsx("br",{}),r.jsx("span",{className:"truncate",title:D.description,children:D.description})]}),r.jsx("td",{children:r.jsx("span",{className:`tag ${D.status==="Approved"?"click":D.status==="Rejected"?"copy":"view"}`,style:D.status==="Pending"?{background:"#fef3c7",color:"#d97706"}:{},children:D.status})}),r.jsxs("td",{children:[D.status==="Pending"&&r.jsxs("div",{className:"btn-group",children:[r.jsx("button",{onClick:()=>U(D.id,"Approved"),className:"btn-small btn-primary",children:"Approve"}),r.jsx("button",{onClick:()=>U(D.id,"Rejected"),className:"btn-small btn-danger",children:"Reject"})]}),D.status!=="Pending"&&r.jsx("span",{children:"-"})]})]},D.id))]})]})}),s==="coupons"&&r.jsx("div",{className:"table-responsive",children:r.jsxs("table",{className:"admin-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Rank"}),r.jsx("th",{children:"Store"}),r.jsx("th",{children:"Coupon"}),r.jsx("th",{children:"Copies"}),r.jsx("th",{children:"Clicks"}),r.jsx("th",{children:"Views"})]})}),r.jsx("tbody",{children:Ze.getTopCoupons(50).map((D,V)=>r.jsxs("tr",{children:[r.jsxs("td",{children:["#",V+1]}),r.jsx("td",{children:D.store.name}),r.jsx("td",{className:"truncate",children:D.title}),r.jsx("td",{children:r.jsx("strong",{children:D.metrics.copy})}),r.jsx("td",{children:D.metrics.click}),r.jsx("td",{children:D.metrics.view})]},V))})]})}),s==="stores"&&r.jsx("div",{className:"table-responsive",children:r.jsxs("table",{className:"admin-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Store Name"}),r.jsx("th",{children:"Total Copies"}),r.jsx("th",{children:"Total Clicks"}),r.jsx("th",{children:"Total Views"})]})}),r.jsx("tbody",{children:f.map((D,V)=>r.jsxs("tr",{children:[r.jsx("td",{children:D.name}),r.jsx("td",{children:r.jsx("strong",{children:D.analytics.totalCopy})}),r.jsx("td",{children:D.analytics.totalClick}),r.jsx("td",{children:D.analytics.totalView})]},V))})]})}),s==="export"&&r.jsxs("div",{className:"export-panel",children:[r.jsx("h3",{children:"Data Export"}),r.jsxs("div",{className:"export-buttons",children:[r.jsx("button",{onClick:()=>Ze.exportToCSV("coupons"),className:"btn-primary",children:"Download Coupons CSV"}),r.jsx("button",{onClick:()=>Ze.exportToCSV("stores"),className:"btn-primary",children:"Download Stores CSV"})]}),r.jsx("hr",{style:{margin:"2rem 0"}}),r.jsx("h3",{children:"Weekly Snapshot"}),r.jsx("p",{children:"Generate a static list of this week's best deals for the 'Top Offers' section."}),r.jsx("button",{onClick:()=>{Ze.generateWeeklySnapshot(),alert("Snapshot Generated!")},className:"btn-secondary",children:"Generate Now"})]})]})]}),r.jsx("style",{children:`
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
            `}),r.jsx(Lt,{})]})},tb=()=>r.jsxs("div",{className:"page-wrapper",children:[r.jsx("title",{children:"Privacy Policy – Offerve"}),r.jsx("meta",{name:"description",content:"Read Offerve’s privacy policy to understand how we collect, use, and protect user information."}),r.jsx("link",{rel:"canonical",href:"https://offerve.com/privacy-policy/"}),r.jsx("meta",{name:"robots",content:"index, follow"}),r.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"https://schema.org","@type":"WebPage",name:"Privacy Policy",url:"https://offerve.com/privacy-policy/",datePublished:"2025-01-01"})}}),r.jsx(Ut,{}),r.jsx("main",{className:"legal-main",children:r.jsxs("div",{className:"container legal-container",children:[r.jsx("h1",{children:"Privacy Policy"}),r.jsx("p",{className:"last-updated",children:"Last Updated: January 1, 2025"}),r.jsxs("section",{children:[r.jsx("h2",{children:"1. Introduction"}),r.jsx("p",{children:'Welcome to Offerve ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.'})]}),r.jsxs("section",{children:[r.jsx("h2",{children:"2. Information We Collect"}),r.jsx("p",{children:"We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Identity Data:"})," includes name, username or similar identifier (only if you contact us)."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Contact Data:"})," includes email address (only if you subscribe)."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Technical Data:"})," includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Usage Data:"})," includes information about how you use our website, products and services."]})]})]}),r.jsxs("section",{children:[r.jsx("h2",{children:"3. How We Use Your Information"}),r.jsx("p",{children:"We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:"}),r.jsxs("ul",{children:[r.jsx("li",{children:"To provide and improve our services."}),r.jsx("li",{children:"To analyze website usage and improve user experience (Analytics)."}),r.jsx("li",{children:"To respond to your inquiries if you contact us."}),r.jsx("li",{children:"To send you newsletters or promotional materials if you have opted in."})]})]}),r.jsxs("section",{children:[r.jsx("h2",{children:"4. Cookies & Tracking Technologies"}),r.jsx("p",{children:"We use cookies and similar tracking technologies to track the activity on our service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent."})]}),r.jsxs("section",{children:[r.jsx("h2",{children:"5. Third-Party Services & Affiliate Links"}),r.jsx("p",{children:"Our service may contain links to other sites that are not operated by us (Third-Party Services). We act as an affiliate for many of these merchants. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third-party sites or services."})]}),r.jsxs("section",{children:[r.jsx("h2",{children:"6. Data Security"}),r.jsx("p",{children:"We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security."})]}),r.jsxs("section",{children:[r.jsx("h2",{children:"7. Children’s Privacy"}),r.jsx("p",{children:"Our Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions."})]}),r.jsxs("section",{children:[r.jsx("h2",{children:"8. User Rights"}),r.jsx("p",{children:"You have the right to access, update, or delete the information we have on you. Whenever made possible, you can access, update or request deletion of your Personal Data directly within your account settings section. If you are unable to perform these actions yourself, please contact us to assist you."})]}),r.jsxs("section",{children:[r.jsx("h2",{children:"9. Changes to This Policy"}),r.jsx("p",{children:"We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page."})]}),r.jsxs("section",{children:[r.jsx("h2",{children:"10. Contact Information"}),r.jsxs("p",{children:["If you have any questions about this privacy policy, please contact us at: ",r.jsx("a",{href:"mailto:support@offerve.com",children:"support@offerve.com"})]})]})]})}),r.jsx(Lt,{}),r.jsx("style",{children:`
                .legal-main { background: var(--bg-main); padding: 4rem 0; }
                .legal-container { max-width: 800px; background: white; padding: 3rem; border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); }
                .legal-container h1 { font-size: 2.5rem; margin-bottom: 0.5rem; color: var(--text-main); }
                .last-updated { color: var(--text-muted); margin-bottom: 2rem; font-style: italic; }
                
                .legal-container section { margin-bottom: 2rem; }
                .legal-container h2 { font-size: 1.5rem; margin-bottom: 1rem; color: var(--text-main); }
                .legal-container p, .legal-container li { line-height: 1.7; color: var(--text-body); margin-bottom: 1rem; font-size: 1.05rem; }
                .legal-container ul { padding-left: 1.5rem; margin-bottom: 1rem; }
                .legal-container a { color: var(--primary); text-decoration: underline; }
            `})]}),ab=()=>r.jsxs("div",{className:"page-wrapper",children:[r.jsx("title",{children:"Terms of Use – Offerve"}),r.jsx("meta",{name:"description",content:"Read Offerve’s terms of use outlining the rules and conditions for using our website and services."}),r.jsx("link",{rel:"canonical",href:"https://offerve.com/terms-of-use/"}),r.jsx("meta",{name:"robots",content:"index, follow"}),r.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"https://schema.org","@type":"WebPage",name:"Terms of Use",url:"https://offerve.com/terms-of-use/",datePublished:"2025-01-01"})}}),r.jsx(Ut,{}),r.jsx("main",{className:"legal-main",children:r.jsxs("div",{className:"container legal-container",children:[r.jsx("h1",{children:"Terms of Use"}),r.jsx("p",{className:"last-updated",children:"Last Updated: January 1, 2025"}),r.jsxs("section",{children:[r.jsx("h2",{children:"1. Acceptance of Terms"}),r.jsx("p",{children:`By accessing and using Offerve.com ("Website"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this Website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.`})]}),r.jsxs("section",{children:[r.jsx("h2",{children:"2. Use of Website"}),r.jsx("p",{children:"You agree to use Offerve.com only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content or disrupting the normal flow of dialogue within our website."})]}),r.jsxs("section",{children:[r.jsx("h2",{children:"3. Coupon & Deal Disclaimer"}),r.jsx("p",{children:"Offerve provides coupons, deals, and promotional codes for information purposes only. While we verify offers regularly, we cannot guarantee the validity or accuracy of any coupon or deal at the time of use. Merchants may change or expire offers without prior notice. We differ any responsibility for expired or non-working coupons."})]}),r.jsxs("section",{children:[r.jsx("h2",{children:"4. Affiliate Disclosure"}),r.jsx("p",{children:"Offerve participates in various affiliate marketing programs, which means we may get paid commissions on editorially chosen products purchased through our links to retailer sites. This comes at no extra cost to you and helps validatethe work we do."})]}),r.jsxs("section",{children:[r.jsx("h2",{children:"5. Intellectual Property"}),r.jsx("p",{children:"The Site and its original content, features, and functionality are owned by Offerve and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws."})]}),r.jsxs("section",{children:[r.jsx("h2",{children:"6. User Responsibilities"}),r.jsx("p",{children:"Users are responsible for ensuring that their use of this site is in compliance with all applicable laws and regulations. You agree not to access (or attempt to access) any of the services by any means other than through the interface that is provided by Offerve."})]}),r.jsxs("section",{children:[r.jsx("h2",{children:"7. Limitation of Liability"}),r.jsx("p",{children:"In no event shall Offerve, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service."})]}),r.jsxs("section",{children:[r.jsx("h2",{children:"8. Third-Party Links"}),r.jsx("p",{children:"Our Service may contain links to third-party web sites or services that are not owned or controlled by Offerve. Offerve has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services."})]}),r.jsxs("section",{children:[r.jsx("h2",{children:"9. Termination"}),r.jsx("p",{children:"We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms."})]}),r.jsxs("section",{children:[r.jsx("h2",{children:"10. Changes to Terms"}),r.jsx("p",{children:"We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms."})]}),r.jsxs("section",{children:[r.jsx("h2",{children:"11. Governing Law"}),r.jsx("p",{children:"These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions."})]}),r.jsxs("section",{children:[r.jsx("h2",{children:"12. Contact Information"}),r.jsxs("p",{children:["If you have any questions about these Terms, please contact us at: ",r.jsx("a",{href:"mailto:support@offerve.com",children:"support@offerve.com"})]})]})]})}),r.jsx(Lt,{}),r.jsx("style",{children:`
                .legal-main { background: var(--bg-main); padding: 4rem 0; }
                .legal-container { max-width: 800px; background: white; padding: 3rem; border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); }
                .legal-container h1 { font-size: 2.5rem; margin-bottom: 0.5rem; color: var(--text-main); }
                .last-updated { color: var(--text-muted); margin-bottom: 2rem; font-style: italic; }
                
                .legal-container section { margin-bottom: 2rem; }
                .legal-container h2 { font-size: 1.5rem; margin-bottom: 1rem; color: var(--text-main); }
                .legal-container p, .legal-container li { line-height: 1.7; color: var(--text-body); margin-bottom: 1rem; font-size: 1.05rem; }
                .legal-container ul { padding-left: 1.5rem; margin-bottom: 1rem; }
                .legal-container a { color: var(--primary); text-decoration: underline; }
            `})]}),nb=()=>{const{pathname:s}=Wt();return A.useEffect(()=>{window.scrollTo(0,0)},[s]),null};function lb(){return r.jsxs(Uy,{children:[r.jsx(nb,{}),r.jsx("div",{className:"App",children:r.jsxs(hy,{children:[r.jsx(Et,{path:"/",element:r.jsx(Vv,{})}),r.jsx(Et,{path:"/stores",element:r.jsx(Qv,{})}),r.jsx(Et,{path:"/search",element:r.jsx(Fv,{})}),r.jsx(Et,{path:"/about",element:r.jsx(Xv,{})}),r.jsx(Et,{path:"/deals",element:r.jsx(Jv,{})}),r.jsx(Et,{path:"/deals/:slug",element:r.jsx(Kv,{})}),r.jsx(Et,{path:"/submit-coupon",element:r.jsx($v,{})}),r.jsx(Et,{path:"/contact",element:r.jsx(Pv,{})}),r.jsx(Et,{path:"/admin/analytics",element:r.jsx(eb,{})}),r.jsx(Et,{path:"/privacy-policy",element:r.jsx(tb,{})}),r.jsx(Et,{path:"/terms-of-use",element:r.jsx(ab,{})}),r.jsx(Et,{path:"/:slug",element:r.jsx(Zv,{})})]})})]})}class ib extends m0.Component{constructor(c){super(c);kh(this,"handleReset",()=>{Fe.local.clear(),window.location.reload()});this.state={hasError:!1,error:null}}static getDerivedStateFromError(c){return{hasError:!0,error:c}}componentDidCatch(c,u){console.error("Uncaught error:",c,u)}render(){return this.state.hasError?r.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"2rem",backgroundColor:"#f8fafc",color:"#1e293b",fontFamily:"system-ui, -apple-system, sans-serif"},children:[r.jsx("h1",{style:{fontSize:"2rem",marginBottom:"1rem",color:"#ef4444"},children:"Oops! Something went wrong."}),r.jsx("p",{style:{marginBottom:"2rem",maxWidth:"400px",lineHeight:"1.6"},children:"The app encountered an error (likely due to old saved data). Please click the button below to fix it."}),r.jsx("button",{onClick:this.handleReset,style:{padding:"0.8rem 1.5rem",backgroundColor:"#2563eb",color:"white",border:"none",borderRadius:"8px",fontSize:"1rem",fontWeight:"600",cursor:"pointer",boxShadow:"0 4px 6px -1px rgba(37, 99, 235, 0.2)"},children:"Fix & Reload App"}),!1]}):this.props.children}}S0.createRoot(document.getElementById("root")).render(r.jsx(A.StrictMode,{children:r.jsxs(ib,{children:[console.log("App Version: BrowserRouter + Clean URLs"),r.jsx(lb,{})]})}))});export default rb();
