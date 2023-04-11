(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Xo(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function Jo(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Ee(s)?Nd(s):Jo(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Ee(t))return t;if(ce(t))return t}}const Ad=/;(?![^(]*\))/g,Dd=/:([^]+)/,xd=/\/\*.*?\*\//gs;function Nd(t){const e={};return t.replace(xd,"").split(Ad).forEach(n=>{if(n){const s=n.split(Dd);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Cn(t){let e="";if(Ee(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const s=Cn(t[n]);s&&(e+=s+" ")}else if(ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const kd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Rd=Xo(kd);function ru(t){return!!t||t===""}const Od=t=>Ee(t)?t:t==null?"":B(t)||ce(t)&&(t.toString===cu||!K(t.toString))?JSON.stringify(t,iu,2):String(t),iu=(t,e)=>e&&e.__v_isRef?iu(t,e.value):An(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:ou(e)?{[`Set(${e.size})`]:[...e.values()]}:ce(e)&&!B(e)&&!lu(e)?String(e):e,re={},Sn=[],rt=()=>{},Md=()=>!1,Ld=/^on[^a-z]/,Kr=t=>Ld.test(t),Zo=t=>t.startsWith("onUpdate:"),Pe=Object.assign,ea=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Fd=Object.prototype.hasOwnProperty,Q=(t,e)=>Fd.call(t,e),B=Array.isArray,An=t=>zr(t)==="[object Map]",ou=t=>zr(t)==="[object Set]",K=t=>typeof t=="function",Ee=t=>typeof t=="string",ta=t=>typeof t=="symbol",ce=t=>t!==null&&typeof t=="object",au=t=>ce(t)&&K(t.then)&&K(t.catch),cu=Object.prototype.toString,zr=t=>cu.call(t),Pd=t=>zr(t).slice(8,-1),lu=t=>zr(t)==="[object Object]",na=t=>Ee(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,dr=Xo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Gr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Vd=/-(\w)/g,Mn=Gr(t=>t.replace(Vd,(e,n)=>n?n.toUpperCase():"")),Ud=/\B([A-Z])/g,zn=Gr(t=>t.replace(Ud,"-$1").toLowerCase()),uu=Gr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Oi=Gr(t=>t?`on${uu(t)}`:""),ms=(t,e)=>!Object.is(t,e),pr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Tr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},io=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ic;const $d=()=>Ic||(Ic=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let et;class Bd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=et,!e&&et&&(this.index=(et.scopes||(et.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=et;try{return et=this,e()}finally{et=n}}}on(){et=this}off(){et=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function jd(t,e=et){e&&e.active&&e.effects.push(t)}function qd(){return et}const sa=t=>{const e=new Set(t);return e.w=0,e.n=0,e},hu=t=>(t.w&Vt)>0,fu=t=>(t.n&Vt)>0,Hd=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Vt},Kd=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];hu(r)&&!fu(r)?r.delete(t):e[n++]=r,r.w&=~Vt,r.n&=~Vt}e.length=n}},oo=new WeakMap;let is=0,Vt=1;const ao=30;let nt;const on=Symbol(""),co=Symbol("");class ra{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,jd(this,s)}run(){if(!this.active)return this.fn();let e=nt,n=Rt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=nt,nt=this,Rt=!0,Vt=1<<++is,is<=ao?Hd(this):Cc(this),this.fn()}finally{is<=ao&&Kd(this),Vt=1<<--is,nt=this.parent,Rt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){nt===this?this.deferStop=!0:this.active&&(Cc(this),this.onStop&&this.onStop(),this.active=!1)}}function Cc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Rt=!0;const du=[];function Gn(){du.push(Rt),Rt=!1}function Wn(){const t=du.pop();Rt=t===void 0?!0:t}function Ke(t,e,n){if(Rt&&nt){let s=oo.get(t);s||oo.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=sa()),pu(r)}}function pu(t,e){let n=!1;is<=ao?fu(t)||(t.n|=Vt,n=!hu(t)):n=!t.has(nt),n&&(t.add(nt),nt.deps.push(t))}function It(t,e,n,s,r,i){const o=oo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&B(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":B(t)?na(n)&&a.push(o.get("length")):(a.push(o.get(on)),An(t)&&a.push(o.get(co)));break;case"delete":B(t)||(a.push(o.get(on)),An(t)&&a.push(o.get(co)));break;case"set":An(t)&&a.push(o.get(on));break}if(a.length===1)a[0]&&lo(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);lo(sa(c))}}function lo(t,e){const n=B(t)?t:[...t];for(const s of n)s.computed&&Sc(s);for(const s of n)s.computed||Sc(s)}function Sc(t,e){(t!==nt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const zd=Xo("__proto__,__v_isRef,__isVue"),gu=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ta)),Gd=ia(),Wd=ia(!1,!0),Qd=ia(!0),Ac=Yd();function Yd(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Y(this);for(let i=0,o=this.length;i<o;i++)Ke(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(Y)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Gn();const s=Y(this)[e].apply(this,n);return Wn(),s}}),t}function Xd(t){const e=Y(this);return Ke(e,"has",t),e.hasOwnProperty(t)}function ia(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?dp:Eu:e?wu:vu).get(s))return s;const o=B(s);if(!t){if(o&&Q(Ac,r))return Reflect.get(Ac,r,i);if(r==="hasOwnProperty")return Xd}const a=Reflect.get(s,r,i);return(ta(r)?gu.has(r):zd(r))||(t||Ke(s,"get",r),e)?a:Me(a)?o&&na(r)?a:a.value:ce(a)?t?bu(a):ca(a):a}}const Jd=mu(),Zd=mu(!0);function mu(t=!1){return function(n,s,r,i){let o=n[s];if(Ln(o)&&Me(o)&&!Me(r))return!1;if(!t&&(!_r(r)&&!Ln(r)&&(o=Y(o),r=Y(r)),!B(n)&&Me(o)&&!Me(r)))return o.value=r,!0;const a=B(n)&&na(s)?Number(s)<n.length:Q(n,s),c=Reflect.set(n,s,r,i);return n===Y(i)&&(a?ms(r,o)&&It(n,"set",s,r):It(n,"add",s,r)),c}}function ep(t,e){const n=Q(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&It(t,"delete",e,void 0),s}function tp(t,e){const n=Reflect.has(t,e);return(!ta(e)||!gu.has(e))&&Ke(t,"has",e),n}function np(t){return Ke(t,"iterate",B(t)?"length":on),Reflect.ownKeys(t)}const yu={get:Gd,set:Jd,deleteProperty:ep,has:tp,ownKeys:np},sp={get:Qd,set(t,e){return!0},deleteProperty(t,e){return!0}},rp=Pe({},yu,{get:Wd,set:Zd}),oa=t=>t,Wr=t=>Reflect.getPrototypeOf(t);function Zs(t,e,n=!1,s=!1){t=t.__v_raw;const r=Y(t),i=Y(e);n||(e!==i&&Ke(r,"get",e),Ke(r,"get",i));const{has:o}=Wr(r),a=s?oa:n?ua:ys;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function er(t,e=!1){const n=this.__v_raw,s=Y(n),r=Y(t);return e||(t!==r&&Ke(s,"has",t),Ke(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function tr(t,e=!1){return t=t.__v_raw,!e&&Ke(Y(t),"iterate",on),Reflect.get(t,"size",t)}function Dc(t){t=Y(t);const e=Y(this);return Wr(e).has.call(e,t)||(e.add(t),It(e,"add",t,t)),this}function xc(t,e){e=Y(e);const n=Y(this),{has:s,get:r}=Wr(n);let i=s.call(n,t);i||(t=Y(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?ms(e,o)&&It(n,"set",t,e):It(n,"add",t,e),this}function Nc(t){const e=Y(this),{has:n,get:s}=Wr(e);let r=n.call(e,t);r||(t=Y(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&It(e,"delete",t,void 0),i}function kc(){const t=Y(this),e=t.size!==0,n=t.clear();return e&&It(t,"clear",void 0,void 0),n}function nr(t,e){return function(s,r){const i=this,o=i.__v_raw,a=Y(o),c=e?oa:t?ua:ys;return!t&&Ke(a,"iterate",on),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function sr(t,e,n){return function(...s){const r=this.__v_raw,i=Y(r),o=An(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?oa:e?ua:ys;return!e&&Ke(i,"iterate",c?co:on),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function Nt(t){return function(...e){return t==="delete"?!1:this}}function ip(){const t={get(i){return Zs(this,i)},get size(){return tr(this)},has:er,add:Dc,set:xc,delete:Nc,clear:kc,forEach:nr(!1,!1)},e={get(i){return Zs(this,i,!1,!0)},get size(){return tr(this)},has:er,add:Dc,set:xc,delete:Nc,clear:kc,forEach:nr(!1,!0)},n={get(i){return Zs(this,i,!0)},get size(){return tr(this,!0)},has(i){return er.call(this,i,!0)},add:Nt("add"),set:Nt("set"),delete:Nt("delete"),clear:Nt("clear"),forEach:nr(!0,!1)},s={get(i){return Zs(this,i,!0,!0)},get size(){return tr(this,!0)},has(i){return er.call(this,i,!0)},add:Nt("add"),set:Nt("set"),delete:Nt("delete"),clear:Nt("clear"),forEach:nr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=sr(i,!1,!1),n[i]=sr(i,!0,!1),e[i]=sr(i,!1,!0),s[i]=sr(i,!0,!0)}),[t,n,e,s]}const[op,ap,cp,lp]=ip();function aa(t,e){const n=e?t?lp:cp:t?ap:op;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Q(n,r)&&r in s?n:s,r,i)}const up={get:aa(!1,!1)},hp={get:aa(!1,!0)},fp={get:aa(!0,!1)},vu=new WeakMap,wu=new WeakMap,Eu=new WeakMap,dp=new WeakMap;function pp(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gp(t){return t.__v_skip||!Object.isExtensible(t)?0:pp(Pd(t))}function ca(t){return Ln(t)?t:la(t,!1,yu,up,vu)}function mp(t){return la(t,!1,rp,hp,wu)}function bu(t){return la(t,!0,sp,fp,Eu)}function la(t,e,n,s,r){if(!ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=gp(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Dn(t){return Ln(t)?Dn(t.__v_raw):!!(t&&t.__v_isReactive)}function Ln(t){return!!(t&&t.__v_isReadonly)}function _r(t){return!!(t&&t.__v_isShallow)}function Tu(t){return Dn(t)||Ln(t)}function Y(t){const e=t&&t.__v_raw;return e?Y(e):t}function _u(t){return Tr(t,"__v_skip",!0),t}const ys=t=>ce(t)?ca(t):t,ua=t=>ce(t)?bu(t):t;function Iu(t){Rt&&nt&&(t=Y(t),pu(t.dep||(t.dep=sa())))}function Cu(t,e){t=Y(t);const n=t.dep;n&&lo(n)}function Me(t){return!!(t&&t.__v_isRef===!0)}function Rc(t){return yp(t,!1)}function yp(t,e){return Me(t)?t:new vp(t,e)}class vp{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Y(e),this._value=n?e:ys(e)}get value(){return Iu(this),this._value}set value(e){const n=this.__v_isShallow||_r(e)||Ln(e);e=n?e:Y(e),ms(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ys(e),Cu(this))}}function wp(t){return Me(t)?t.value:t}const Ep={get:(t,e,n)=>wp(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Me(r)&&!Me(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Su(t){return Dn(t)?t:new Proxy(t,Ep)}var Au;class bp{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Au]=!1,this._dirty=!0,this.effect=new ra(e,()=>{this._dirty||(this._dirty=!0,Cu(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=Y(this);return Iu(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Au="__v_isReadonly";function Tp(t,e,n=!1){let s,r;const i=K(t);return i?(s=t,r=rt):(s=t.get,r=t.set),new bp(s,r,i||!r,n)}function Ot(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Qr(i,e,n)}return r}function Je(t,e,n,s){if(K(t)){const i=Ot(t,e,n,s);return i&&au(i)&&i.catch(o=>{Qr(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Je(t[i],e,n,s));return r}function Qr(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Ot(c,null,10,[t,o,a]);return}}_p(t,n,r,s)}function _p(t,e,n,s=!0){console.error(t)}let vs=!1,uo=!1;const Re=[];let dt=0;const xn=[];let bt=null,Jt=0;const Du=Promise.resolve();let ha=null;function Ip(t){const e=ha||Du;return t?e.then(this?t.bind(this):t):e}function Cp(t){let e=dt+1,n=Re.length;for(;e<n;){const s=e+n>>>1;ws(Re[s])<t?e=s+1:n=s}return e}function fa(t){(!Re.length||!Re.includes(t,vs&&t.allowRecurse?dt+1:dt))&&(t.id==null?Re.push(t):Re.splice(Cp(t.id),0,t),xu())}function xu(){!vs&&!uo&&(uo=!0,ha=Du.then(ku))}function Sp(t){const e=Re.indexOf(t);e>dt&&Re.splice(e,1)}function Ap(t){B(t)?xn.push(...t):(!bt||!bt.includes(t,t.allowRecurse?Jt+1:Jt))&&xn.push(t),xu()}function Oc(t,e=vs?dt+1:0){for(;e<Re.length;e++){const n=Re[e];n&&n.pre&&(Re.splice(e,1),e--,n())}}function Nu(t){if(xn.length){const e=[...new Set(xn)];if(xn.length=0,bt){bt.push(...e);return}for(bt=e,bt.sort((n,s)=>ws(n)-ws(s)),Jt=0;Jt<bt.length;Jt++)bt[Jt]();bt=null,Jt=0}}const ws=t=>t.id==null?1/0:t.id,Dp=(t,e)=>{const n=ws(t)-ws(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ku(t){uo=!1,vs=!0,Re.sort(Dp);const e=rt;try{for(dt=0;dt<Re.length;dt++){const n=Re[dt];n&&n.active!==!1&&Ot(n,null,14)}}finally{dt=0,Re.length=0,Nu(),vs=!1,ha=null,(Re.length||xn.length)&&ku()}}function xp(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||re;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=s[u]||re;p&&(r=n.map(g=>Ee(g)?g.trim():g)),f&&(r=n.map(io))}let a,c=s[a=Oi(e)]||s[a=Oi(Mn(e))];!c&&i&&(c=s[a=Oi(zn(e))]),c&&Je(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Je(l,t,6,r)}}function Ru(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!K(t)){const c=l=>{const u=Ru(l,e,!0);u&&(a=!0,Pe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ce(t)&&s.set(t,null),null):(B(i)?i.forEach(c=>o[c]=null):Pe(o,i),ce(t)&&s.set(t,o),o)}function Yr(t,e){return!t||!Kr(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,zn(e))||Q(t,e))}let Xe=null,Ou=null;function Ir(t){const e=Xe;return Xe=t,Ou=t&&t.type.__scopeId||null,e}function Np(t,e=Xe,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&jc(-1);const i=Ir(e);let o;try{o=t(...r)}finally{Ir(i),s._d&&jc(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Mi(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:p,setupState:g,ctx:S,inheritAttrs:b}=t;let R,j;const te=Ir(t);try{if(n.shapeFlag&4){const Z=r||s;R=ft(u.call(Z,Z,f,i,g,p,S)),j=c}else{const Z=e;R=ft(Z.length>1?Z(i,{attrs:c,slots:a,emit:l}):Z(i,null)),j=e.props?c:kp(c)}}catch(Z){hs.length=0,Qr(Z,t,1),R=an(_t)}let F=R;if(j&&b!==!1){const Z=Object.keys(j),{shapeFlag:le}=F;Z.length&&le&7&&(o&&Z.some(Zo)&&(j=Rp(j,o)),F=Ut(F,j))}return n.dirs&&(F=Ut(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),R=F,Ir(te),R}const kp=t=>{let e;for(const n in t)(n==="class"||n==="style"||Kr(n))&&((e||(e={}))[n]=t[n]);return e},Rp=(t,e)=>{const n={};for(const s in t)(!Zo(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Op(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Mc(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==s[p]&&!Yr(l,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Mc(s,o,l):!0:!!o;return!1}function Mc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Yr(n,i))return!0}return!1}function Mp({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Lp=t=>t.__isSuspense;function Fp(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):Ap(t)}function Pp(t,e){if(me){let n=me.provides;const s=me.parent&&me.parent.provides;s===n&&(n=me.provides=Object.create(s)),n[t]=e}}function gr(t,e,n=!1){const s=me||Xe;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&K(e)?e.call(s.proxy):e}}const rr={};function Li(t,e,n){return Mu(t,e,n)}function Mu(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=re){const a=qd()===(me==null?void 0:me.scope)?me:null;let c,l=!1,u=!1;if(Me(t)?(c=()=>t.value,l=_r(t)):Dn(t)?(c=()=>t,s=!0):B(t)?(u=!0,l=t.some(F=>Dn(F)||_r(F)),c=()=>t.map(F=>{if(Me(F))return F.value;if(Dn(F))return tn(F);if(K(F))return Ot(F,a,2)})):K(t)?e?c=()=>Ot(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),Je(t,a,3,[p])}:c=rt,e&&s){const F=c;c=()=>tn(F())}let f,p=F=>{f=j.onStop=()=>{Ot(F,a,4)}},g;if(bs)if(p=rt,e?n&&Je(e,a,3,[c(),u?[]:void 0,p]):c(),r==="sync"){const F=Fg();g=F.__watcherHandles||(F.__watcherHandles=[])}else return rt;let S=u?new Array(t.length).fill(rr):rr;const b=()=>{if(j.active)if(e){const F=j.run();(s||l||(u?F.some((Z,le)=>ms(Z,S[le])):ms(F,S)))&&(f&&f(),Je(e,a,3,[F,S===rr?void 0:u&&S[0]===rr?[]:S,p]),S=F)}else j.run()};b.allowRecurse=!!e;let R;r==="sync"?R=b:r==="post"?R=()=>je(b,a&&a.suspense):(b.pre=!0,a&&(b.id=a.uid),R=()=>fa(b));const j=new ra(c,R);e?n?b():S=j.run():r==="post"?je(j.run.bind(j),a&&a.suspense):j.run();const te=()=>{j.stop(),a&&a.scope&&ea(a.scope.effects,j)};return g&&g.push(te),te}function Vp(t,e,n){const s=this.proxy,r=Ee(t)?t.includes(".")?Lu(s,t):()=>s[t]:t.bind(s,s);let i;K(e)?i=e:(i=e.handler,n=e);const o=me;Fn(this);const a=Mu(r,i.bind(s),n);return o?Fn(o):cn(),a}function Lu(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function tn(t,e){if(!ce(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Me(t))tn(t.value,e);else if(B(t))for(let n=0;n<t.length;n++)tn(t[n],e);else if(ou(t)||An(t))t.forEach(n=>{tn(n,e)});else if(lu(t))for(const n in t)tn(t[n],e);return t}function Up(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return da(()=>{t.isMounted=!0}),Uu(()=>{t.isUnmounting=!0}),t}const Ye=[Function,Array],$p={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ye,onEnter:Ye,onAfterEnter:Ye,onEnterCancelled:Ye,onBeforeLeave:Ye,onLeave:Ye,onAfterLeave:Ye,onLeaveCancelled:Ye,onBeforeAppear:Ye,onAppear:Ye,onAfterAppear:Ye,onAppearCancelled:Ye},setup(t,{slots:e}){const n=Dg(),s=Up();let r;return()=>{const i=e.default&&Pu(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const b of i)if(b.type!==_t){o=b;break}}const a=Y(t),{mode:c}=a;if(s.isLeaving)return Fi(o);const l=Lc(o);if(!l)return Fi(o);const u=ho(l,a,s,n);fo(l,u);const f=n.subTree,p=f&&Lc(f);let g=!1;const{getTransitionKey:S}=l.type;if(S){const b=S();r===void 0?r=b:b!==r&&(r=b,g=!0)}if(p&&p.type!==_t&&(!Zt(l,p)||g)){const b=ho(p,a,s,n);if(fo(p,b),c==="out-in")return s.isLeaving=!0,b.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Fi(o);c==="in-out"&&l.type!==_t&&(b.delayLeave=(R,j,te)=>{const F=Fu(s,p);F[String(p.key)]=p,R._leaveCb=()=>{j(),R._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=te})}return o}}},Bp=$p;function Fu(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function ho(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:f,onLeave:p,onAfterLeave:g,onLeaveCancelled:S,onBeforeAppear:b,onAppear:R,onAfterAppear:j,onAppearCancelled:te}=e,F=String(t.key),Z=Fu(n,t),le=(H,Te)=>{H&&Je(H,s,9,Te)},vt=(H,Te)=>{const ue=Te[1];le(H,Te),B(H)?H.every(ze=>ze.length<=1)&&ue():H.length<=1&&ue()},at={mode:i,persisted:o,beforeEnter(H){let Te=a;if(!n.isMounted)if(r)Te=b||a;else return;H._leaveCb&&H._leaveCb(!0);const ue=Z[F];ue&&Zt(t,ue)&&ue.el._leaveCb&&ue.el._leaveCb(),le(Te,[H])},enter(H){let Te=c,ue=l,ze=u;if(!n.isMounted)if(r)Te=R||c,ue=j||l,ze=te||u;else return;let ct=!1;const wt=H._enterCb=ns=>{ct||(ct=!0,ns?le(ze,[H]):le(ue,[H]),at.delayedLeave&&at.delayedLeave(),H._enterCb=void 0)};Te?vt(Te,[H,wt]):wt()},leave(H,Te){const ue=String(t.key);if(H._enterCb&&H._enterCb(!0),n.isUnmounting)return Te();le(f,[H]);let ze=!1;const ct=H._leaveCb=wt=>{ze||(ze=!0,Te(),wt?le(S,[H]):le(g,[H]),H._leaveCb=void 0,Z[ue]===t&&delete Z[ue])};Z[ue]=t,p?vt(p,[H,ct]):ct()},clone(H){return ho(H,e,n,s)}};return at}function Fi(t){if(Xr(t))return t=Ut(t),t.children=null,t}function Lc(t){return Xr(t)?t.children?t.children[0]:void 0:t}function fo(t,e){t.shapeFlag&6&&t.component?fo(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Pu(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===tt?(o.patchFlag&128&&r++,s=s.concat(Pu(o.children,e,a))):(e||o.type!==_t)&&s.push(a!=null?Ut(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}const mr=t=>!!t.type.__asyncLoader,Xr=t=>t.type.__isKeepAlive;function jp(t,e){Vu(t,"a",e)}function qp(t,e){Vu(t,"da",e)}function Vu(t,e,n=me){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Jr(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Xr(r.parent.vnode)&&Hp(s,e,n,r),r=r.parent}}function Hp(t,e,n,s){const r=Jr(e,t,s,!0);$u(()=>{ea(s[e],r)},n)}function Jr(t,e,n=me,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Gn(),Fn(n);const a=Je(e,n,t,o);return cn(),Wn(),a});return s?r.unshift(i):r.push(i),i}}const xt=t=>(e,n=me)=>(!bs||t==="sp")&&Jr(t,(...s)=>e(...s),n),Kp=xt("bm"),da=xt("m"),zp=xt("bu"),Gp=xt("u"),Uu=xt("bum"),$u=xt("um"),Wp=xt("sp"),Qp=xt("rtg"),Yp=xt("rtc");function Xp(t,e=me){Jr("ec",t,e)}function Jp(t,e){const n=Xe;if(n===null)return t;const s=ti(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=re]=e[i];o&&(K(o)&&(o={mounted:o,updated:o}),o.deep&&tn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Wt(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Gn(),Je(c,n,8,[t.el,a,t,e]),Wn())}}const Zp=Symbol();function eg(t,e,n,s){let r;const i=n&&n[s];if(B(t)||Ee(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(ce(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const po=t=>t?Yu(t)?ti(t)||t.proxy:po(t.parent):null,us=Pe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>po(t.parent),$root:t=>po(t.root),$emit:t=>t.emit,$options:t=>pa(t),$forceUpdate:t=>t.f||(t.f=()=>fa(t.update)),$nextTick:t=>t.n||(t.n=Ip.bind(t.proxy)),$watch:t=>Vp.bind(t)}),Pi=(t,e)=>t!==re&&!t.__isScriptSetup&&Q(t,e),tg={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Pi(s,e))return o[e]=1,s[e];if(r!==re&&Q(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&Q(l,e))return o[e]=3,i[e];if(n!==re&&Q(n,e))return o[e]=4,n[e];go&&(o[e]=0)}}const u=us[e];let f,p;if(u)return e==="$attrs"&&Ke(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==re&&Q(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Q(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Pi(r,e)?(r[e]=n,!0):s!==re&&Q(s,e)?(s[e]=n,!0):Q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==re&&Q(t,o)||Pi(e,o)||(a=i[0])&&Q(a,o)||Q(s,o)||Q(us,o)||Q(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let go=!0;function ng(t){const e=pa(t),n=t.proxy,s=t.ctx;go=!1,e.beforeCreate&&Fc(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:p,beforeUpdate:g,updated:S,activated:b,deactivated:R,beforeDestroy:j,beforeUnmount:te,destroyed:F,unmounted:Z,render:le,renderTracked:vt,renderTriggered:at,errorCaptured:H,serverPrefetch:Te,expose:ue,inheritAttrs:ze,components:ct,directives:wt,filters:ns}=e;if(l&&sg(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const he in o){const ne=o[he];K(ne)&&(s[he]=ne.bind(n))}if(r){const he=r.call(n,n);ce(he)&&(t.data=ca(he))}if(go=!0,i)for(const he in i){const ne=i[he],zt=K(ne)?ne.bind(n,n):K(ne.get)?ne.get.bind(n,n):rt,Xs=!K(ne)&&K(ne.set)?ne.set.bind(n):rt,Gt=Mg({get:zt,set:Xs});Object.defineProperty(s,he,{enumerable:!0,configurable:!0,get:()=>Gt.value,set:lt=>Gt.value=lt})}if(a)for(const he in a)Bu(a[he],s,n,he);if(c){const he=K(c)?c.call(n):c;Reflect.ownKeys(he).forEach(ne=>{Pp(ne,he[ne])})}u&&Fc(u,t,"c");function Ue(he,ne){B(ne)?ne.forEach(zt=>he(zt.bind(n))):ne&&he(ne.bind(n))}if(Ue(Kp,f),Ue(da,p),Ue(zp,g),Ue(Gp,S),Ue(jp,b),Ue(qp,R),Ue(Xp,H),Ue(Yp,vt),Ue(Qp,at),Ue(Uu,te),Ue($u,Z),Ue(Wp,Te),B(ue))if(ue.length){const he=t.exposed||(t.exposed={});ue.forEach(ne=>{Object.defineProperty(he,ne,{get:()=>n[ne],set:zt=>n[ne]=zt})})}else t.exposed||(t.exposed={});le&&t.render===rt&&(t.render=le),ze!=null&&(t.inheritAttrs=ze),ct&&(t.components=ct),wt&&(t.directives=wt)}function sg(t,e,n=rt,s=!1){B(t)&&(t=mo(t));for(const r in t){const i=t[r];let o;ce(i)?"default"in i?o=gr(i.from||r,i.default,!0):o=gr(i.from||r):o=gr(i),Me(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Fc(t,e,n){Je(B(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Bu(t,e,n,s){const r=s.includes(".")?Lu(n,s):()=>n[s];if(Ee(t)){const i=e[t];K(i)&&Li(r,i)}else if(K(t))Li(r,t.bind(n));else if(ce(t))if(B(t))t.forEach(i=>Bu(i,e,n,s));else{const i=K(t.handler)?t.handler.bind(n):e[t.handler];K(i)&&Li(r,i,t)}}function pa(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Cr(c,l,o,!0)),Cr(c,e,o)),ce(e)&&i.set(e,c),c}function Cr(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Cr(t,i,n,!0),r&&r.forEach(o=>Cr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=rg[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const rg={data:Pc,props:Yt,emits:Yt,methods:Yt,computed:Yt,beforeCreate:$e,created:$e,beforeMount:$e,mounted:$e,beforeUpdate:$e,updated:$e,beforeDestroy:$e,beforeUnmount:$e,destroyed:$e,unmounted:$e,activated:$e,deactivated:$e,errorCaptured:$e,serverPrefetch:$e,components:Yt,directives:Yt,watch:og,provide:Pc,inject:ig};function Pc(t,e){return e?t?function(){return Pe(K(t)?t.call(this,this):t,K(e)?e.call(this,this):e)}:e:t}function ig(t,e){return Yt(mo(t),mo(e))}function mo(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function $e(t,e){return t?[...new Set([].concat(t,e))]:e}function Yt(t,e){return t?Pe(Pe(Object.create(null),t),e):e}function og(t,e){if(!t)return e;if(!e)return t;const n=Pe(Object.create(null),t);for(const s in e)n[s]=$e(t[s],e[s]);return n}function ag(t,e,n,s=!1){const r={},i={};Tr(i,ei,1),t.propsDefaults=Object.create(null),ju(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:mp(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function cg(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=Y(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(Yr(t.emitsOptions,p))continue;const g=e[p];if(c)if(Q(i,p))g!==i[p]&&(i[p]=g,l=!0);else{const S=Mn(p);r[S]=yo(c,a,S,g,t,!1)}else g!==i[p]&&(i[p]=g,l=!0)}}}else{ju(t,e,r,i)&&(l=!0);let u;for(const f in a)(!e||!Q(e,f)&&((u=zn(f))===f||!Q(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=yo(c,a,f,void 0,t,!0)):delete r[f]);if(i!==a)for(const f in i)(!e||!Q(e,f))&&(delete i[f],l=!0)}l&&It(t,"set","$attrs")}function ju(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(dr(c))continue;const l=e[c];let u;r&&Q(r,u=Mn(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Yr(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=Y(n),l=a||re;for(let u=0;u<i.length;u++){const f=i[u];n[f]=yo(r,c,f,l[f],t,!Q(l,f))}}return o}function yo(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=Q(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&K(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Fn(r),s=l[n]=c.call(null,e),cn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===zn(n))&&(s=!0))}return s}function qu(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!K(t)){const u=f=>{c=!0;const[p,g]=qu(f,e,!0);Pe(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ce(t)&&s.set(t,Sn),Sn;if(B(i))for(let u=0;u<i.length;u++){const f=Mn(i[u]);Vc(f)&&(o[f]=re)}else if(i)for(const u in i){const f=Mn(u);if(Vc(f)){const p=i[u],g=o[f]=B(p)||K(p)?{type:p}:Object.assign({},p);if(g){const S=Bc(Boolean,g.type),b=Bc(String,g.type);g[0]=S>-1,g[1]=b<0||S<b,(S>-1||Q(g,"default"))&&a.push(f)}}}const l=[o,a];return ce(t)&&s.set(t,l),l}function Vc(t){return t[0]!=="$"}function Uc(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function $c(t,e){return Uc(t)===Uc(e)}function Bc(t,e){return B(e)?e.findIndex(n=>$c(n,t)):K(e)&&$c(e,t)?0:-1}const Hu=t=>t[0]==="_"||t==="$stable",ga=t=>B(t)?t.map(ft):[ft(t)],lg=(t,e,n)=>{if(e._n)return e;const s=Np((...r)=>ga(e(...r)),n);return s._c=!1,s},Ku=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Hu(r))continue;const i=t[r];if(K(i))e[r]=lg(r,i,s);else if(i!=null){const o=ga(i);e[r]=()=>o}}},zu=(t,e)=>{const n=ga(e);t.slots.default=()=>n},ug=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Y(e),Tr(e,"_",n)):Ku(e,t.slots={})}else t.slots={},e&&zu(t,e);Tr(t.slots,ei,1)},hg=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=re;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Pe(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Ku(e,r)),o=e}else e&&(zu(t,e),o={default:1});if(i)for(const a in r)!Hu(a)&&!(a in o)&&delete r[a]};function Gu(){return{app:null,config:{isNativeTag:Md,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let fg=0;function dg(t,e){return function(s,r=null){K(s)||(s=Object.assign({},s)),r!=null&&!ce(r)&&(r=null);const i=Gu(),o=new Set;let a=!1;const c=i.app={_uid:fg++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Pg,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&K(l.install)?(o.add(l),l.install(c,...u)):K(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,f){if(!a){const p=an(s,r);return p.appContext=i,u&&e?e(p,l):t(p,l,f),a=!0,c._container=l,l.__vue_app__=c,ti(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function vo(t,e,n,s,r=!1){if(B(t)){t.forEach((p,g)=>vo(p,e&&(B(e)?e[g]:e),n,s,r));return}if(mr(s)&&!r)return;const i=s.shapeFlag&4?ti(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===re?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(Ee(l)?(u[l]=null,Q(f,l)&&(f[l]=null)):Me(l)&&(l.value=null)),K(c))Ot(c,a,12,[o,u]);else{const p=Ee(c),g=Me(c);if(p||g){const S=()=>{if(t.f){const b=p?Q(f,c)?f[c]:u[c]:c.value;r?B(b)&&ea(b,i):B(b)?b.includes(i)||b.push(i):p?(u[c]=[i],Q(f,c)&&(f[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,Q(f,c)&&(f[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(S.id=-1,je(S,n)):S()}}}const je=Fp;function pg(t){return gg(t)}function gg(t,e){const n=$d();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:p,setScopeId:g=rt,insertStaticContent:S}=t,b=(h,d,m,w=null,v=null,I=null,A=!1,_=null,C=!!d.dynamicChildren)=>{if(h===d)return;h&&!Zt(h,d)&&(w=Js(h),lt(h,v,I,!0),h=null),d.patchFlag===-2&&(C=!1,d.dynamicChildren=null);const{type:E,ref:M,shapeFlag:x}=d;switch(E){case Zr:R(h,d,m,w);break;case _t:j(h,d,m,w);break;case Vi:h==null&&te(d,m,w,A);break;case tt:ct(h,d,m,w,v,I,A,_,C);break;default:x&1?le(h,d,m,w,v,I,A,_,C):x&6?wt(h,d,m,w,v,I,A,_,C):(x&64||x&128)&&E.process(h,d,m,w,v,I,A,_,C,wn)}M!=null&&v&&vo(M,h&&h.ref,I,d||h,!d)},R=(h,d,m,w)=>{if(h==null)s(d.el=a(d.children),m,w);else{const v=d.el=h.el;d.children!==h.children&&l(v,d.children)}},j=(h,d,m,w)=>{h==null?s(d.el=c(d.children||""),m,w):d.el=h.el},te=(h,d,m,w)=>{[h.el,h.anchor]=S(h.children,d,m,w,h.el,h.anchor)},F=({el:h,anchor:d},m,w)=>{let v;for(;h&&h!==d;)v=p(h),s(h,m,w),h=v;s(d,m,w)},Z=({el:h,anchor:d})=>{let m;for(;h&&h!==d;)m=p(h),r(h),h=m;r(d)},le=(h,d,m,w,v,I,A,_,C)=>{A=A||d.type==="svg",h==null?vt(d,m,w,v,I,A,_,C):Te(h,d,v,I,A,_,C)},vt=(h,d,m,w,v,I,A,_)=>{let C,E;const{type:M,props:x,shapeFlag:L,transition:U,dirs:z}=h;if(C=h.el=o(h.type,I,x&&x.is,x),L&8?u(C,h.children):L&16&&H(h.children,C,null,w,v,I&&M!=="foreignObject",A,_),z&&Wt(h,null,w,"created"),at(C,h,h.scopeId,A,w),x){for(const ee in x)ee!=="value"&&!dr(ee)&&i(C,ee,null,x[ee],I,h.children,w,v,Et);"value"in x&&i(C,"value",null,x.value),(E=x.onVnodeBeforeMount)&&ht(E,w,h)}z&&Wt(h,null,w,"beforeMount");const se=(!v||v&&!v.pendingBranch)&&U&&!U.persisted;se&&U.beforeEnter(C),s(C,d,m),((E=x&&x.onVnodeMounted)||se||z)&&je(()=>{E&&ht(E,w,h),se&&U.enter(C),z&&Wt(h,null,w,"mounted")},v)},at=(h,d,m,w,v)=>{if(m&&g(h,m),w)for(let I=0;I<w.length;I++)g(h,w[I]);if(v){let I=v.subTree;if(d===I){const A=v.vnode;at(h,A,A.scopeId,A.slotScopeIds,v.parent)}}},H=(h,d,m,w,v,I,A,_,C=0)=>{for(let E=C;E<h.length;E++){const M=h[E]=_?kt(h[E]):ft(h[E]);b(null,M,d,m,w,v,I,A,_)}},Te=(h,d,m,w,v,I,A)=>{const _=d.el=h.el;let{patchFlag:C,dynamicChildren:E,dirs:M}=d;C|=h.patchFlag&16;const x=h.props||re,L=d.props||re;let U;m&&Qt(m,!1),(U=L.onVnodeBeforeUpdate)&&ht(U,m,d,h),M&&Wt(d,h,m,"beforeUpdate"),m&&Qt(m,!0);const z=v&&d.type!=="foreignObject";if(E?ue(h.dynamicChildren,E,_,m,w,z,I):A||ne(h,d,_,null,m,w,z,I,!1),C>0){if(C&16)ze(_,d,x,L,m,w,v);else if(C&2&&x.class!==L.class&&i(_,"class",null,L.class,v),C&4&&i(_,"style",x.style,L.style,v),C&8){const se=d.dynamicProps;for(let ee=0;ee<se.length;ee++){const de=se[ee],Ze=x[de],En=L[de];(En!==Ze||de==="value")&&i(_,de,Ze,En,v,h.children,m,w,Et)}}C&1&&h.children!==d.children&&u(_,d.children)}else!A&&E==null&&ze(_,d,x,L,m,w,v);((U=L.onVnodeUpdated)||M)&&je(()=>{U&&ht(U,m,d,h),M&&Wt(d,h,m,"updated")},w)},ue=(h,d,m,w,v,I,A)=>{for(let _=0;_<d.length;_++){const C=h[_],E=d[_],M=C.el&&(C.type===tt||!Zt(C,E)||C.shapeFlag&70)?f(C.el):m;b(C,E,M,null,w,v,I,A,!0)}},ze=(h,d,m,w,v,I,A)=>{if(m!==w){if(m!==re)for(const _ in m)!dr(_)&&!(_ in w)&&i(h,_,m[_],null,A,d.children,v,I,Et);for(const _ in w){if(dr(_))continue;const C=w[_],E=m[_];C!==E&&_!=="value"&&i(h,_,E,C,A,d.children,v,I,Et)}"value"in w&&i(h,"value",m.value,w.value)}},ct=(h,d,m,w,v,I,A,_,C)=>{const E=d.el=h?h.el:a(""),M=d.anchor=h?h.anchor:a("");let{patchFlag:x,dynamicChildren:L,slotScopeIds:U}=d;U&&(_=_?_.concat(U):U),h==null?(s(E,m,w),s(M,m,w),H(d.children,m,M,v,I,A,_,C)):x>0&&x&64&&L&&h.dynamicChildren?(ue(h.dynamicChildren,L,m,v,I,A,_),(d.key!=null||v&&d===v.subTree)&&Wu(h,d,!0)):ne(h,d,m,M,v,I,A,_,C)},wt=(h,d,m,w,v,I,A,_,C)=>{d.slotScopeIds=_,h==null?d.shapeFlag&512?v.ctx.activate(d,m,w,A,C):ns(d,m,w,v,I,A,C):vc(h,d,C)},ns=(h,d,m,w,v,I,A)=>{const _=h.component=Ag(h,w,v);if(Xr(h)&&(_.ctx.renderer=wn),xg(_),_.asyncDep){if(v&&v.registerDep(_,Ue),!h.el){const C=_.subTree=an(_t);j(null,C,d,m)}return}Ue(_,h,d,m,v,I,A)},vc=(h,d,m)=>{const w=d.component=h.component;if(Op(h,d,m))if(w.asyncDep&&!w.asyncResolved){he(w,d,m);return}else w.next=d,Sp(w.update),w.update();else d.el=h.el,w.vnode=d},Ue=(h,d,m,w,v,I,A)=>{const _=()=>{if(h.isMounted){let{next:M,bu:x,u:L,parent:U,vnode:z}=h,se=M,ee;Qt(h,!1),M?(M.el=z.el,he(h,M,A)):M=z,x&&pr(x),(ee=M.props&&M.props.onVnodeBeforeUpdate)&&ht(ee,U,M,z),Qt(h,!0);const de=Mi(h),Ze=h.subTree;h.subTree=de,b(Ze,de,f(Ze.el),Js(Ze),h,v,I),M.el=de.el,se===null&&Mp(h,de.el),L&&je(L,v),(ee=M.props&&M.props.onVnodeUpdated)&&je(()=>ht(ee,U,M,z),v)}else{let M;const{el:x,props:L}=d,{bm:U,m:z,parent:se}=h,ee=mr(d);if(Qt(h,!1),U&&pr(U),!ee&&(M=L&&L.onVnodeBeforeMount)&&ht(M,se,d),Qt(h,!0),x&&Ri){const de=()=>{h.subTree=Mi(h),Ri(x,h.subTree,h,v,null)};ee?d.type.__asyncLoader().then(()=>!h.isUnmounted&&de()):de()}else{const de=h.subTree=Mi(h);b(null,de,m,w,h,v,I),d.el=de.el}if(z&&je(z,v),!ee&&(M=L&&L.onVnodeMounted)){const de=d;je(()=>ht(M,se,de),v)}(d.shapeFlag&256||se&&mr(se.vnode)&&se.vnode.shapeFlag&256)&&h.a&&je(h.a,v),h.isMounted=!0,d=m=w=null}},C=h.effect=new ra(_,()=>fa(E),h.scope),E=h.update=()=>C.run();E.id=h.uid,Qt(h,!0),E()},he=(h,d,m)=>{d.component=h;const w=h.vnode.props;h.vnode=d,h.next=null,cg(h,d.props,w,m),hg(h,d.children,m),Gn(),Oc(),Wn()},ne=(h,d,m,w,v,I,A,_,C=!1)=>{const E=h&&h.children,M=h?h.shapeFlag:0,x=d.children,{patchFlag:L,shapeFlag:U}=d;if(L>0){if(L&128){Xs(E,x,m,w,v,I,A,_,C);return}else if(L&256){zt(E,x,m,w,v,I,A,_,C);return}}U&8?(M&16&&Et(E,v,I),x!==E&&u(m,x)):M&16?U&16?Xs(E,x,m,w,v,I,A,_,C):Et(E,v,I,!0):(M&8&&u(m,""),U&16&&H(x,m,w,v,I,A,_,C))},zt=(h,d,m,w,v,I,A,_,C)=>{h=h||Sn,d=d||Sn;const E=h.length,M=d.length,x=Math.min(E,M);let L;for(L=0;L<x;L++){const U=d[L]=C?kt(d[L]):ft(d[L]);b(h[L],U,m,null,v,I,A,_,C)}E>M?Et(h,v,I,!0,!1,x):H(d,m,w,v,I,A,_,C,x)},Xs=(h,d,m,w,v,I,A,_,C)=>{let E=0;const M=d.length;let x=h.length-1,L=M-1;for(;E<=x&&E<=L;){const U=h[E],z=d[E]=C?kt(d[E]):ft(d[E]);if(Zt(U,z))b(U,z,m,null,v,I,A,_,C);else break;E++}for(;E<=x&&E<=L;){const U=h[x],z=d[L]=C?kt(d[L]):ft(d[L]);if(Zt(U,z))b(U,z,m,null,v,I,A,_,C);else break;x--,L--}if(E>x){if(E<=L){const U=L+1,z=U<M?d[U].el:w;for(;E<=L;)b(null,d[E]=C?kt(d[E]):ft(d[E]),m,z,v,I,A,_,C),E++}}else if(E>L)for(;E<=x;)lt(h[E],v,I,!0),E++;else{const U=E,z=E,se=new Map;for(E=z;E<=L;E++){const Ge=d[E]=C?kt(d[E]):ft(d[E]);Ge.key!=null&&se.set(Ge.key,E)}let ee,de=0;const Ze=L-z+1;let En=!1,bc=0;const ss=new Array(Ze);for(E=0;E<Ze;E++)ss[E]=0;for(E=U;E<=x;E++){const Ge=h[E];if(de>=Ze){lt(Ge,v,I,!0);continue}let ut;if(Ge.key!=null)ut=se.get(Ge.key);else for(ee=z;ee<=L;ee++)if(ss[ee-z]===0&&Zt(Ge,d[ee])){ut=ee;break}ut===void 0?lt(Ge,v,I,!0):(ss[ut-z]=E+1,ut>=bc?bc=ut:En=!0,b(Ge,d[ut],m,null,v,I,A,_,C),de++)}const Tc=En?mg(ss):Sn;for(ee=Tc.length-1,E=Ze-1;E>=0;E--){const Ge=z+E,ut=d[Ge],_c=Ge+1<M?d[Ge+1].el:w;ss[E]===0?b(null,ut,m,_c,v,I,A,_,C):En&&(ee<0||E!==Tc[ee]?Gt(ut,m,_c,2):ee--)}}},Gt=(h,d,m,w,v=null)=>{const{el:I,type:A,transition:_,children:C,shapeFlag:E}=h;if(E&6){Gt(h.component.subTree,d,m,w);return}if(E&128){h.suspense.move(d,m,w);return}if(E&64){A.move(h,d,m,wn);return}if(A===tt){s(I,d,m);for(let x=0;x<C.length;x++)Gt(C[x],d,m,w);s(h.anchor,d,m);return}if(A===Vi){F(h,d,m);return}if(w!==2&&E&1&&_)if(w===0)_.beforeEnter(I),s(I,d,m),je(()=>_.enter(I),v);else{const{leave:x,delayLeave:L,afterLeave:U}=_,z=()=>s(I,d,m),se=()=>{x(I,()=>{z(),U&&U()})};L?L(I,z,se):se()}else s(I,d,m)},lt=(h,d,m,w=!1,v=!1)=>{const{type:I,props:A,ref:_,children:C,dynamicChildren:E,shapeFlag:M,patchFlag:x,dirs:L}=h;if(_!=null&&vo(_,null,m,h,!0),M&256){d.ctx.deactivate(h);return}const U=M&1&&L,z=!mr(h);let se;if(z&&(se=A&&A.onVnodeBeforeUnmount)&&ht(se,d,h),M&6)Sd(h.component,m,w);else{if(M&128){h.suspense.unmount(m,w);return}U&&Wt(h,null,d,"beforeUnmount"),M&64?h.type.remove(h,d,m,v,wn,w):E&&(I!==tt||x>0&&x&64)?Et(E,d,m,!1,!0):(I===tt&&x&384||!v&&M&16)&&Et(C,d,m),w&&wc(h)}(z&&(se=A&&A.onVnodeUnmounted)||U)&&je(()=>{se&&ht(se,d,h),U&&Wt(h,null,d,"unmounted")},m)},wc=h=>{const{type:d,el:m,anchor:w,transition:v}=h;if(d===tt){Cd(m,w);return}if(d===Vi){Z(h);return}const I=()=>{r(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(h.shapeFlag&1&&v&&!v.persisted){const{leave:A,delayLeave:_}=v,C=()=>A(m,I);_?_(h.el,I,C):C()}else I()},Cd=(h,d)=>{let m;for(;h!==d;)m=p(h),r(h),h=m;r(d)},Sd=(h,d,m)=>{const{bum:w,scope:v,update:I,subTree:A,um:_}=h;w&&pr(w),v.stop(),I&&(I.active=!1,lt(A,h,d,m)),_&&je(_,d),je(()=>{h.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Et=(h,d,m,w=!1,v=!1,I=0)=>{for(let A=I;A<h.length;A++)lt(h[A],d,m,w,v)},Js=h=>h.shapeFlag&6?Js(h.component.subTree):h.shapeFlag&128?h.suspense.next():p(h.anchor||h.el),Ec=(h,d,m)=>{h==null?d._vnode&&lt(d._vnode,null,null,!0):b(d._vnode||null,h,d,null,null,null,m),Oc(),Nu(),d._vnode=h},wn={p:b,um:lt,m:Gt,r:wc,mt:ns,mc:H,pc:ne,pbc:ue,n:Js,o:t};let ki,Ri;return e&&([ki,Ri]=e(wn)),{render:Ec,hydrate:ki,createApp:dg(Ec,ki)}}function Qt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Wu(t,e,n=!1){const s=t.children,r=e.children;if(B(s)&&B(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=kt(r[i]),a.el=o.el),n||Wu(o,a)),a.type===Zr&&(a.el=o.el)}}function mg(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const yg=t=>t.__isTeleport,tt=Symbol(void 0),Zr=Symbol(void 0),_t=Symbol(void 0),Vi=Symbol(void 0),hs=[];let st=null;function Ui(t=!1){hs.push(st=t?null:[])}function vg(){hs.pop(),st=hs[hs.length-1]||null}let Es=1;function jc(t){Es+=t}function wg(t){return t.dynamicChildren=Es>0?st||Sn:null,vg(),Es>0&&st&&st.push(t),t}function $i(t,e,n,s,r,i){return wg(xe(t,e,n,s,r,i,!0))}function Eg(t){return t?t.__v_isVNode===!0:!1}function Zt(t,e){return t.type===e.type&&t.key===e.key}const ei="__vInternal",Qu=({key:t})=>t??null,yr=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ee(t)||Me(t)||K(t)?{i:Xe,r:t,k:e,f:!!n}:t:null;function xe(t,e=null,n=null,s=0,r=null,i=t===tt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Qu(e),ref:e&&yr(e),scopeId:Ou,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Xe};return a?(ma(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ee(n)?8:16),Es>0&&!o&&st&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&st.push(c),c}const an=bg;function bg(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Zp)&&(t=_t),Eg(t)){const a=Ut(t,e,!0);return n&&ma(a,n),Es>0&&!i&&st&&(a.shapeFlag&6?st[st.indexOf(t)]=a:st.push(a)),a.patchFlag|=-2,a}if(Og(t)&&(t=t.__vccOpts),e){e=Tg(e);let{class:a,style:c}=e;a&&!Ee(a)&&(e.class=Cn(a)),ce(c)&&(Tu(c)&&!B(c)&&(c=Pe({},c)),e.style=Jo(c))}const o=Ee(t)?1:Lp(t)?128:yg(t)?64:ce(t)?4:K(t)?2:0;return xe(t,e,n,s,r,o,i,!0)}function Tg(t){return t?Tu(t)||ei in t?Pe({},t):t:null}function Ut(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Ig(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Qu(a),ref:e&&e.ref?n&&r?B(r)?r.concat(yr(e)):[r,yr(e)]:yr(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==tt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ut(t.ssContent),ssFallback:t.ssFallback&&Ut(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function _g(t=" ",e=0){return an(Zr,null,t,e)}function ft(t){return t==null||typeof t=="boolean"?an(_t):B(t)?an(tt,null,t.slice()):typeof t=="object"?kt(t):an(Zr,null,String(t))}function kt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ut(t)}function ma(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),ma(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(ei in e)?e._ctx=Xe:r===3&&Xe&&(Xe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else K(e)?(e={default:e,_ctx:Xe},n=32):(e=String(e),s&64?(n=16,e=[_g(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ig(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Cn([e.class,s.class]));else if(r==="style")e.style=Jo([e.style,s.style]);else if(Kr(r)){const i=e[r],o=s[r];o&&i!==o&&!(B(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function ht(t,e,n,s=null){Je(t,e,7,[n,s])}const Cg=Gu();let Sg=0;function Ag(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Cg,i={uid:Sg++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Bd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:qu(s,r),emitsOptions:Ru(s,r),emit:null,emitted:null,propsDefaults:re,inheritAttrs:s.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=xp.bind(null,i),t.ce&&t.ce(i),i}let me=null;const Dg=()=>me||Xe,Fn=t=>{me=t,t.scope.on()},cn=()=>{me&&me.scope.off(),me=null};function Yu(t){return t.vnode.shapeFlag&4}let bs=!1;function xg(t,e=!1){bs=e;const{props:n,children:s}=t.vnode,r=Yu(t);ag(t,n,r,e),ug(t,s);const i=r?Ng(t,e):void 0;return bs=!1,i}function Ng(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=_u(new Proxy(t.ctx,tg));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Rg(t):null;Fn(t),Gn();const i=Ot(s,t,0,[t.props,r]);if(Wn(),cn(),au(i)){if(i.then(cn,cn),e)return i.then(o=>{qc(t,o,e)}).catch(o=>{Qr(o,t,0)});t.asyncDep=i}else qc(t,i,e)}else Xu(t,e)}function qc(t,e,n){K(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ce(e)&&(t.setupState=Su(e)),Xu(t,n)}let Hc;function Xu(t,e,n){const s=t.type;if(!t.render){if(!e&&Hc&&!s.render){const r=s.template||pa(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Pe(Pe({isCustomElement:i,delimiters:a},o),c);s.render=Hc(r,l)}}t.render=s.render||rt}Fn(t),Gn(),ng(t),Wn(),cn()}function kg(t){return new Proxy(t.attrs,{get(e,n){return Ke(t,"get","$attrs"),e[n]}})}function Rg(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=kg(t))},slots:t.slots,emit:t.emit,expose:e}}function ti(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Su(_u(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in us)return us[n](t)},has(e,n){return n in e||n in us}}))}function Og(t){return K(t)&&"__vccOpts"in t}const Mg=(t,e)=>Tp(t,e,bs),Lg=Symbol(""),Fg=()=>gr(Lg),Pg="3.2.47",Vg="http://www.w3.org/2000/svg",en=typeof document<"u"?document:null,Kc=en&&en.createElement("template"),Ug={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?en.createElementNS(Vg,t):en.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>en.createTextNode(t),createComment:t=>en.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>en.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Kc.innerHTML=s?`<svg>${t}</svg>`:t;const a=Kc.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function $g(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Bg(t,e,n){const s=t.style,r=Ee(n);if(n&&!r){if(e&&!Ee(e))for(const i in e)n[i]==null&&wo(s,i,"");for(const i in n)wo(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const zc=/\s*!important$/;function wo(t,e,n){if(B(n))n.forEach(s=>wo(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=jg(t,e);zc.test(n)?t.setProperty(zn(s),n.replace(zc,""),"important"):t[s]=n}}const Gc=["Webkit","Moz","ms"],Bi={};function jg(t,e){const n=Bi[e];if(n)return n;let s=Mn(e);if(s!=="filter"&&s in t)return Bi[e]=s;s=uu(s);for(let r=0;r<Gc.length;r++){const i=Gc[r]+s;if(i in t)return Bi[e]=i}return e}const Wc="http://www.w3.org/1999/xlink";function qg(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Wc,e.slice(6,e.length)):t.setAttributeNS(Wc,e,n);else{const i=Rd(e);n==null||i&&!ru(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Hg(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=ru(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function bn(t,e,n,s){t.addEventListener(e,n,s)}function Kg(t,e,n,s){t.removeEventListener(e,n,s)}function zg(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Gg(e);if(s){const l=i[e]=Yg(s,r);bn(t,a,l,c)}else o&&(Kg(t,a,o,c),i[e]=void 0)}}const Qc=/(?:Once|Passive|Capture)$/;function Gg(t){let e;if(Qc.test(t)){e={};let s;for(;s=t.match(Qc);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):zn(t.slice(2)),e]}let ji=0;const Wg=Promise.resolve(),Qg=()=>ji||(Wg.then(()=>ji=0),ji=Date.now());function Yg(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Je(Xg(s,n.value),e,5,[s])};return n.value=t,n.attached=Qg(),n}function Xg(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Yc=/^on[a-z]/,Jg=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?$g(t,s,r):e==="style"?Bg(t,n,s):Kr(e)?Zo(e)||zg(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Zg(t,e,s,r))?Hg(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),qg(t,e,s,r))};function Zg(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Yc.test(e)&&K(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Yc.test(e)&&Ee(n)?!1:e in t}const em={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Bp.props;const Xc=t=>{const e=t.props["onUpdate:modelValue"]||!1;return B(e)?n=>pr(e,n):e};function tm(t){t.target.composing=!0}function Jc(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const nm={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Xc(r);const i=s||r.props&&r.props.type==="number";bn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=io(a)),t._assign(a)}),n&&bn(t,"change",()=>{t.value=t.value.trim()}),e||(bn(t,"compositionstart",tm),bn(t,"compositionend",Jc),bn(t,"change",Jc))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Xc(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&io(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},sm=["ctrl","shift","alt","meta"],rm={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>sm.some(n=>t[`${n}Key`]&&!e.includes(n))},im=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=rm[e[r]];if(i&&i(n,e))return}return t(n,...s)},om=Pe({patchProp:Jg},Ug);let Zc;function am(){return Zc||(Zc=pg(om))}const cm=(...t)=>{const e=am().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=lm(s);if(!r)return;const i=e._component;!K(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function lm(t){return Ee(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},um=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Zu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(p=64)),s.push(n[u],n[f],n[p],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ju(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):um(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||f==null)throw new hm;const p=i<<2|a>>4;if(s.push(p),l!==64){const g=a<<4&240|l>>2;if(s.push(g),f!==64){const S=l<<6&192|f;s.push(S)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class hm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fm=function(t){const e=Ju(t);return Zu.encodeByteArray(e,!0)},Sr=function(t){return fm(t).replace(/\./g,"")},dm=function(t){try{return Zu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gm=()=>pm().__FIREBASE_DEFAULTS__,mm=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ym=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&dm(t[1]);return e&&JSON.parse(e)},eh=()=>{try{return gm()||mm()||ym()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vm=t=>{var e,n;return(n=(e=eh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},wm=t=>{const e=vm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Em=()=>{var t;return(t=eh())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Sr(JSON.stringify(n)),Sr(JSON.stringify(o)),a].join(".")}function _m(){try{return typeof indexedDB=="object"}catch{return!1}}function Im(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm="FirebaseError";class Qn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Cm,Object.setPrototypeOf(this,Qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,th.prototype.create)}}class th{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Sm(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Qn(r,a,s)}}function Sm(t,e){return t.replace(Am,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Am=/\{\$([^}]+)}/g;function Eo(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(el(i)&&el(o)){if(!Eo(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function el(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t){return t&&t._delegate?t._delegate:t}class Ts{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new bm;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Nm(e))try{this.getOrInitializeService({instanceIdentifier:Xt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xt){return this.instances.has(e)}getOptions(e=Xt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:xm(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Xt){return this.component?this.component.multipleInstances?e:Xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xm(t){return t===Xt?void 0:t}function Nm(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Dm(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const Rm={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},Om=X.INFO,Mm={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},Lm=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Mm[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nh{constructor(e){this.name=e,this._logLevel=Om,this._logHandler=Lm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Rm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const Fm=(t,e)=>e.some(n=>t instanceof n);let tl,nl;function Pm(){return tl||(tl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vm(){return nl||(nl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sh=new WeakMap,bo=new WeakMap,rh=new WeakMap,qi=new WeakMap,ya=new WeakMap;function Um(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Mt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&sh.set(n,t)}).catch(()=>{}),ya.set(e,t),e}function $m(t){if(bo.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});bo.set(t,e)}let To={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||rh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Bm(t){To=t(To)}function jm(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Hi(this),e,...n);return rh.set(s,e.sort?e.sort():[e]),Mt(s)}:Vm().includes(t)?function(...e){return t.apply(Hi(this),e),Mt(sh.get(this))}:function(...e){return Mt(t.apply(Hi(this),e))}}function qm(t){return typeof t=="function"?jm(t):(t instanceof IDBTransaction&&$m(t),Fm(t,Pm())?new Proxy(t,To):t)}function Mt(t){if(t instanceof IDBRequest)return Um(t);if(qi.has(t))return qi.get(t);const e=qm(t);return e!==t&&(qi.set(t,e),ya.set(e,t)),e}const Hi=t=>ya.get(t);function Hm(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Mt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Mt(o.result),c.oldVersion,c.newVersion,Mt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Km=["get","getKey","getAll","getAllKeys","count"],zm=["put","add","delete","clear"],Ki=new Map;function sl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ki.get(e))return Ki.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=zm.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Km.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Ki.set(e,i),i}Bm(t=>({...t,get:(e,n,s)=>sl(e,n)||t.get(e,n,s),has:(e,n)=>!!sl(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Wm(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Wm(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _o="@firebase/app",rl="0.9.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn=new nh("@firebase/app"),Qm="@firebase/app-compat",Ym="@firebase/analytics-compat",Xm="@firebase/analytics",Jm="@firebase/app-check-compat",Zm="@firebase/app-check",ey="@firebase/auth",ty="@firebase/auth-compat",ny="@firebase/database",sy="@firebase/database-compat",ry="@firebase/functions",iy="@firebase/functions-compat",oy="@firebase/installations",ay="@firebase/installations-compat",cy="@firebase/messaging",ly="@firebase/messaging-compat",uy="@firebase/performance",hy="@firebase/performance-compat",fy="@firebase/remote-config",dy="@firebase/remote-config-compat",py="@firebase/storage",gy="@firebase/storage-compat",my="@firebase/firestore",yy="@firebase/firestore-compat",vy="firebase",wy="9.19.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io="[DEFAULT]",Ey={[_o]:"fire-core",[Qm]:"fire-core-compat",[Xm]:"fire-analytics",[Ym]:"fire-analytics-compat",[Zm]:"fire-app-check",[Jm]:"fire-app-check-compat",[ey]:"fire-auth",[ty]:"fire-auth-compat",[ny]:"fire-rtdb",[sy]:"fire-rtdb-compat",[ry]:"fire-fn",[iy]:"fire-fn-compat",[oy]:"fire-iid",[ay]:"fire-iid-compat",[cy]:"fire-fcm",[ly]:"fire-fcm-compat",[uy]:"fire-perf",[hy]:"fire-perf-compat",[fy]:"fire-rc",[dy]:"fire-rc-compat",[py]:"fire-gcs",[gy]:"fire-gcs-compat",[my]:"fire-fst",[yy]:"fire-fst-compat","fire-js":"fire-js",[vy]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new Map,Co=new Map;function by(t,e){try{t.container.addComponent(e)}catch(n){fn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Dr(t){const e=t.name;if(Co.has(e))return fn.debug(`There were multiple attempts to register component ${e}.`),!1;Co.set(e,t);for(const n of Ar.values())by(n,t);return!0}function Ty(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Lt=new th("app","Firebase",_y);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ts("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Lt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy=wy;function ih(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Io,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Lt.create("bad-app-name",{appName:String(r)});if(n||(n=Em()),!n)throw Lt.create("no-options");const i=Ar.get(r);if(i){if(Eo(n,i.options)&&Eo(s,i.config))return i;throw Lt.create("duplicate-app",{appName:r})}const o=new km(r);for(const c of Co.values())o.addComponent(c);const a=new Iy(n,s,o);return Ar.set(r,a),a}function Sy(t=Io){const e=Ar.get(t);if(!e&&t===Io)return ih();if(!e)throw Lt.create("no-app",{appName:t});return e}function Nn(t,e,n){var s;let r=(s=Ey[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fn.warn(a.join(" "));return}Dr(new Ts(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay="firebase-heartbeat-database",Dy=1,_s="firebase-heartbeat-store";let zi=null;function oh(){return zi||(zi=Hm(Ay,Dy,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_s)}}}).catch(t=>{throw Lt.create("idb-open",{originalErrorMessage:t.message})})),zi}async function xy(t){try{return(await oh()).transaction(_s).objectStore(_s).get(ah(t))}catch(e){if(e instanceof Qn)fn.warn(e.message);else{const n=Lt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fn.warn(n.message)}}}async function il(t,e){try{const s=(await oh()).transaction(_s,"readwrite");return await s.objectStore(_s).put(e,ah(t)),s.done}catch(n){if(n instanceof Qn)fn.warn(n.message);else{const s=Lt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fn.warn(s.message)}}}function ah(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny=1024,ky=30*24*60*60*1e3;class Ry{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new My(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ol();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=ky}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ol(),{heartbeatsToSend:n,unsentEntries:s}=Oy(this._heartbeatsCache.heartbeats),r=Sr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ol(){return new Date().toISOString().substring(0,10)}function Oy(t,e=Ny){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),al(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),al(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class My{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _m()?Im().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await xy(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return il(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return il(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function al(t){return Sr(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ly(t){Dr(new Ts("platform-logger",e=>new Gm(e),"PRIVATE")),Dr(new Ts("heartbeat",e=>new Ry(e),"PRIVATE")),Nn(_o,rl,t),Nn(_o,rl,"esm2017"),Nn("fire-js","")}Ly("");var Fy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,va=va||{},V=Fy||self;function xr(){}function ni(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ls(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Py(t){return Object.prototype.hasOwnProperty.call(t,Gi)&&t[Gi]||(t[Gi]=++Vy)}var Gi="closure_uid_"+(1e9*Math.random()>>>0),Vy=0;function Uy(t,e,n){return t.call.apply(t.bind,arguments)}function $y(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Le(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Le=Uy:Le=$y,Le.apply(null,arguments)}function ir(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ae(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function qt(){this.s=this.s,this.o=this.o}var By=0;qt.prototype.s=!1;qt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),By!=0)&&Py(this)};qt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ch=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function wa(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function cl(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(ni(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Fe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Fe.prototype.h=function(){this.defaultPrevented=!0};var jy=function(){if(!V.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{V.addEventListener("test",xr,e),V.removeEventListener("test",xr,e)}catch{}return t}();function Nr(t){return/^[\s\xa0]*$/.test(t)}var ll=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Wi(t,e){return t<e?-1:t>e?1:0}function si(){var t=V.navigator;return t&&(t=t.userAgent)?t:""}function pt(t){return si().indexOf(t)!=-1}function Ea(t){return Ea[" "](t),t}Ea[" "]=xr;function qy(t){var e=zy;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Hy=pt("Opera"),Pn=pt("Trident")||pt("MSIE"),lh=pt("Edge"),So=lh||Pn,uh=pt("Gecko")&&!(si().toLowerCase().indexOf("webkit")!=-1&&!pt("Edge"))&&!(pt("Trident")||pt("MSIE"))&&!pt("Edge"),Ky=si().toLowerCase().indexOf("webkit")!=-1&&!pt("Edge");function hh(){var t=V.document;return t?t.documentMode:void 0}var kr;e:{var Qi="",Yi=function(){var t=si();if(uh)return/rv:([^\);]+)(\)|;)/.exec(t);if(lh)return/Edge\/([\d\.]+)/.exec(t);if(Pn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Ky)return/WebKit\/(\S+)/.exec(t);if(Hy)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Yi&&(Qi=Yi?Yi[1]:""),Pn){var Xi=hh();if(Xi!=null&&Xi>parseFloat(Qi)){kr=String(Xi);break e}}kr=Qi}var zy={};function Gy(){return qy(function(){let t=0;const e=ll(String(kr)).split("."),n=ll("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Wi(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Wi(r[2].length==0,i[2].length==0)||Wi(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Ao;if(V.document&&Pn){var ul=hh();Ao=ul||parseInt(kr,10)||void 0}else Ao=void 0;var Wy=Ao;function Is(t,e){if(Fe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(uh){e:{try{Ea(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Qy[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Is.X.h.call(this)}}Ae(Is,Fe);var Qy={2:"touch",3:"pen",4:"mouse"};Is.prototype.h=function(){Is.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Fs="closure_listenable_"+(1e6*Math.random()|0),Yy=0;function Xy(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++Yy,this.ba=this.ea=!1}function ri(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function ba(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function fh(t){const e={};for(const n in t)e[n]=t[n];return e}const hl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function dh(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<hl.length;i++)n=hl[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ii(t){this.src=t,this.g={},this.h=0}ii.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=xo(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Xy(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function Do(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=ch(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(ri(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function xo(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var Ta="closure_lm_"+(1e6*Math.random()|0),Ji={};function ph(t,e,n,s,r){if(s&&s.once)return mh(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)ph(t,e[i],n,s,r);return null}return n=Ca(n),t&&t[Fs]?t.N(e,n,Ls(s)?!!s.capture:!!s,r):gh(t,e,n,!1,s,r)}function gh(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Ls(r)?!!r.capture:!!r,a=Ia(t);if(a||(t[Ta]=a=new ii(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=Jy(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)jy||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(vh(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Jy(){function t(n){return e.call(t.src,t.listener,n)}const e=Zy;return t}function mh(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)mh(t,e[i],n,s,r);return null}return n=Ca(n),t&&t[Fs]?t.O(e,n,Ls(s)?!!s.capture:!!s,r):gh(t,e,n,!0,s,r)}function yh(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)yh(t,e[i],n,s,r);else s=Ls(s)?!!s.capture:!!s,n=Ca(n),t&&t[Fs]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=xo(i,n,s,r),-1<n&&(ri(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ia(t))&&(e=t.g[e.toString()],t=-1,e&&(t=xo(e,n,s,r)),(n=-1<t?e[t]:null)&&_a(n))}function _a(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Fs])Do(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(vh(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Ia(e))?(Do(n,t),n.h==0&&(n.src=null,e[Ta]=null)):ri(t)}}}function vh(t){return t in Ji?Ji[t]:Ji[t]="on"+t}function Zy(t,e){if(t.ba)t=!0;else{e=new Is(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&_a(t),t=n.call(s,e)}return t}function Ia(t){return t=t[Ta],t instanceof ii?t:null}var Zi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ca(t){return typeof t=="function"?t:(t[Zi]||(t[Zi]=function(e){return t.handleEvent(e)}),t[Zi])}function Ie(){qt.call(this),this.i=new ii(this),this.P=this,this.I=null}Ae(Ie,qt);Ie.prototype[Fs]=!0;Ie.prototype.removeEventListener=function(t,e,n,s){yh(this,t,e,n,s)};function Se(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Fe(e,t);else if(e instanceof Fe)e.target=e.target||t;else{var r=e;e=new Fe(s,t),dh(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=or(o,s,!0,e)&&r}if(o=e.g=t,r=or(o,s,!0,e)&&r,r=or(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=or(o,s,!1,e)&&r}Ie.prototype.M=function(){if(Ie.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)ri(n[s]);delete t.g[e],t.h--}}this.I=null};Ie.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ie.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function or(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Do(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Sa=V.JSON.stringify;function ev(){var t=bh;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class tv{constructor(){this.h=this.g=null}add(e,n){const s=wh.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var wh=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new nv,t=>t.reset());class nv{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function sv(t){V.setTimeout(()=>{throw t},0)}function Eh(t,e){No||rv(),ko||(No(),ko=!0),bh.add(t,e)}var No;function rv(){var t=V.Promise.resolve(void 0);No=function(){t.then(iv)}}var ko=!1,bh=new tv;function iv(){for(var t;t=ev();){try{t.h.call(t.g)}catch(n){sv(n)}var e=wh;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ko=!1}function oi(t,e){Ie.call(this),this.h=t||1,this.g=e||V,this.j=Le(this.lb,this),this.l=Date.now()}Ae(oi,Ie);N=oi.prototype;N.ca=!1;N.R=null;N.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Se(this,"tick"),this.ca&&(Aa(this),this.start()))}};N.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Aa(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}N.M=function(){oi.X.M.call(this),Aa(this),delete this.g};function Da(t,e,n){if(typeof t=="function")n&&(t=Le(t,n));else if(t&&typeof t.handleEvent=="function")t=Le(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:V.setTimeout(t,e||0)}function Th(t){t.g=Da(()=>{t.g=null,t.i&&(t.i=!1,Th(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class ov extends qt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Th(this)}M(){super.M(),this.g&&(V.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Cs(t){qt.call(this),this.h=t,this.g={}}Ae(Cs,qt);var fl=[];function _h(t,e,n,s){Array.isArray(n)||(n&&(fl[0]=n.toString()),n=fl);for(var r=0;r<n.length;r++){var i=ph(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Ih(t){ba(t.g,function(e,n){this.g.hasOwnProperty(n)&&_a(e)},t),t.g={}}Cs.prototype.M=function(){Cs.X.M.call(this),Ih(this)};Cs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ai(){this.g=!0}ai.prototype.Aa=function(){this.g=!1};function av(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var f=u.split("_");o=2<=f.length&&f[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function cv(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function In(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+uv(t,n)+(s?" "+s:"")})}function lv(t,e){t.info(function(){return"TIMEOUT: "+e})}ai.prototype.info=function(){};function uv(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Sa(n)}catch{return e}}var gn={},dl=null;function ci(){return dl=dl||new Ie}gn.Pa="serverreachability";function Ch(t){Fe.call(this,gn.Pa,t)}Ae(Ch,Fe);function Ss(t){const e=ci();Se(e,new Ch(e))}gn.STAT_EVENT="statevent";function Sh(t,e){Fe.call(this,gn.STAT_EVENT,t),this.stat=e}Ae(Sh,Fe);function Be(t){const e=ci();Se(e,new Sh(e,t))}gn.Qa="timingevent";function Ah(t,e){Fe.call(this,gn.Qa,t),this.size=e}Ae(Ah,Fe);function Ps(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return V.setTimeout(function(){t()},e)}var li={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Dh={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function xa(){}xa.prototype.h=null;function pl(t){return t.h||(t.h=t.i())}function xh(){}var Vs={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Na(){Fe.call(this,"d")}Ae(Na,Fe);function ka(){Fe.call(this,"c")}Ae(ka,Fe);var Ro;function ui(){}Ae(ui,xa);ui.prototype.g=function(){return new XMLHttpRequest};ui.prototype.i=function(){return{}};Ro=new ui;function Us(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Cs(this),this.O=hv,t=So?125:void 0,this.T=new oi(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Nh}function Nh(){this.i=null,this.g="",this.h=!1}var hv=45e3,Oo={},Rr={};N=Us.prototype;N.setTimeout=function(t){this.O=t};function Mo(t,e,n){t.K=1,t.v=fi(Ct(e)),t.s=n,t.P=!0,kh(t,null)}function kh(t,e){t.F=Date.now(),$s(t),t.A=Ct(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Uh(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Nh,t.g=af(t.l,n?e:null,!t.s),0<t.N&&(t.L=new ov(Le(t.La,t,t.g),t.N)),_h(t.S,t.g,"readystatechange",t.ib),e=t.H?fh(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Ss(),av(t.j,t.u,t.A,t.m,t.U,t.s)}N.ib=function(t){t=t.target;const e=this.L;e&&Tt(t)==3?e.l():this.La(t)};N.La=function(t){try{if(t==this.g)e:{const u=Tt(this.g);var e=this.g.Ea();const f=this.g.aa();if(!(3>u)&&(u!=3||So||this.g&&(this.h.h||this.g.fa()||vl(this.g)))){this.I||u!=4||e==7||(e==8||0>=f?Ss(3):Ss(2)),hi(this);var n=this.g.aa();this.Y=n;t:if(Rh(this)){var s=vl(this.g);t="";var r=s.length,i=Tt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){nn(this),fs(this);var o="";break t}this.h.i=new V.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,cv(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Nr(a)){var l=a;break t}}l=null}if(n=l)In(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Lo(this,n);else{this.i=!1,this.o=3,Be(12),nn(this),fs(this);break e}}this.P?(Oh(this,u,o),So&&this.i&&u==3&&(_h(this.S,this.T,"tick",this.hb),this.T.start())):(In(this.j,this.m,o,null),Lo(this,o)),u==4&&nn(this),this.i&&!this.I&&(u==4?nf(this.l,this):(this.i=!1,$s(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Be(12)):(this.o=0,Be(13)),nn(this),fs(this)}}}catch{}finally{}};function Rh(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Oh(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=fv(t,n),r==Rr){e==4&&(t.o=4,Be(14),s=!1),In(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Oo){t.o=4,Be(15),In(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else In(t.j,t.m,r,null),Lo(t,r);Rh(t)&&r!=Rr&&r!=Oo&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Be(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Va(e),e.K=!0,Be(11))):(In(t.j,t.m,n,"[Invalid Chunked Response]"),nn(t),fs(t))}N.hb=function(){if(this.g){var t=Tt(this.g),e=this.g.fa();this.C<e.length&&(hi(this),Oh(this,t,e),this.i&&t!=4&&$s(this))}};function fv(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Rr:(n=Number(e.substring(n,s)),isNaN(n)?Oo:(s+=1,s+n>e.length?Rr:(e=e.substr(s,n),t.C=s+n,e)))}N.cancel=function(){this.I=!0,nn(this)};function $s(t){t.V=Date.now()+t.O,Mh(t,t.O)}function Mh(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ps(Le(t.gb,t),e)}function hi(t){t.B&&(V.clearTimeout(t.B),t.B=null)}N.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(lv(this.j,this.A),this.K!=2&&(Ss(),Be(17)),nn(this),this.o=2,fs(this)):Mh(this,this.V-t)};function fs(t){t.l.G==0||t.I||nf(t.l,t)}function nn(t){hi(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Aa(t.T),Ih(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Lo(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Fo(n.h,t))){if(!t.J&&Fo(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Lr(n),gi(n);else break e;Pa(n),Be(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Ps(Le(n.cb,n),6e3));if(1>=jh(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else sn(n,11)}else if((t.J||n.g==t)&&Lr(n),!Nr(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const f=l[4];f!=null&&(n.Ca=f,n.j.info("SVER="+n.Ca));const p=l[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const S=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(S){var i=s.h;i.g||S.indexOf("spdy")==-1&&S.indexOf("quic")==-1&&S.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Ra(i,i.h),i.h=null))}if(s.D){const b=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(s.za=b,ae(s.F,s.D,b))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=of(s,s.H?s.ka:null,s.V),o.J){qh(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(hi(a),$s(a)),s.g=o}else ef(s);0<n.i.length&&mi(n)}else l[0]!="stop"&&l[0]!="close"||sn(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?sn(n,7):Fa(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Ss(4)}catch{}}function dv(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ni(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function pv(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ni(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Lh(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ni(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=pv(t),s=dv(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Fh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gv(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function ln(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ln){this.h=e!==void 0?e:t.h,Or(this,t.j),this.s=t.s,this.g=t.g,Mr(this,t.m),this.l=t.l,e=t.i;var n=new As;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),gl(this,n),this.o=t.o}else t&&(n=String(t).match(Fh))?(this.h=!!e,Or(this,n[1]||"",!0),this.s=os(n[2]||""),this.g=os(n[3]||"",!0),Mr(this,n[4]),this.l=os(n[5]||"",!0),gl(this,n[6]||"",!0),this.o=os(n[7]||"")):(this.h=!!e,this.i=new As(null,this.h))}ln.prototype.toString=function(){var t=[],e=this.j;e&&t.push(as(e,ml,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(as(e,ml,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(as(n,n.charAt(0)=="/"?vv:yv,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",as(n,Ev)),t.join("")};function Ct(t){return new ln(t)}function Or(t,e,n){t.j=n?os(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Mr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function gl(t,e,n){e instanceof As?(t.i=e,bv(t.i,t.h)):(n||(e=as(e,wv)),t.i=new As(e,t.h))}function ae(t,e,n){t.i.set(e,n)}function fi(t){return ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function os(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function as(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,mv),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function mv(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ml=/[#\/\?@]/g,yv=/[#\?:]/g,vv=/[#\?]/g,wv=/[#\?@]/g,Ev=/#/g;function As(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ht(t){t.g||(t.g=new Map,t.h=0,t.i&&gv(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=As.prototype;N.add=function(t,e){Ht(this),this.i=null,t=Yn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Ph(t,e){Ht(t),e=Yn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Vh(t,e){return Ht(t),e=Yn(t,e),t.g.has(e)}N.forEach=function(t,e){Ht(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};N.oa=function(){Ht(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};N.W=function(t){Ht(this);let e=[];if(typeof t=="string")Vh(this,t)&&(e=e.concat(this.g.get(Yn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};N.set=function(t,e){return Ht(this),this.i=null,t=Yn(this,t),Vh(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Uh(t,e,n){Ph(t,e),0<n.length&&(t.i=null,t.g.set(Yn(t,e),wa(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Yn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function bv(t,e){e&&!t.j&&(Ht(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Ph(this,s),Uh(this,r,n))},t)),t.j=e}var Tv=class{constructor(e,n){this.h=e,this.g=n}};function $h(t){this.l=t||_v,V.PerformanceNavigationTiming?(t=V.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(V.g&&V.g.Ga&&V.g.Ga()&&V.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var _v=10;function Bh(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function jh(t){return t.h?1:t.g?t.g.size:0}function Fo(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ra(t,e){t.g?t.g.add(e):t.h=e}function qh(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}$h.prototype.cancel=function(){if(this.i=Hh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Hh(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return wa(t.i)}function Oa(){}Oa.prototype.stringify=function(t){return V.JSON.stringify(t,void 0)};Oa.prototype.parse=function(t){return V.JSON.parse(t,void 0)};function Iv(){this.g=new Oa}function Cv(t,e,n){const s=n||"";try{Lh(t,function(r,i){let o=r;Ls(r)&&(o=Sa(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function Sv(t,e){const n=new ai;if(V.Image){const s=new Image;s.onload=ir(ar,n,s,"TestLoadImage: loaded",!0,e),s.onerror=ir(ar,n,s,"TestLoadImage: error",!1,e),s.onabort=ir(ar,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=ir(ar,n,s,"TestLoadImage: timeout",!1,e),V.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function ar(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Bs(t){this.l=t.ac||null,this.j=t.jb||!1}Ae(Bs,xa);Bs.prototype.g=function(){return new di(this.l,this.j)};Bs.prototype.i=function(t){return function(){return t}}({});function di(t,e){Ie.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ma,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ae(di,Ie);var Ma=0;N=di.prototype;N.open=function(t,e){if(this.readyState!=Ma)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ds(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||V).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,js(this)),this.readyState=Ma};N.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ds(this)),this.g&&(this.readyState=3,Ds(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof V.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Kh(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Kh(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}N.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?js(this):Ds(this),this.readyState==3&&Kh(this)}};N.Va=function(t){this.g&&(this.response=this.responseText=t,js(this))};N.Ua=function(t){this.g&&(this.response=t,js(this))};N.ga=function(){this.g&&js(this)};function js(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ds(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ds(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(di.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Av=V.JSON.parse;function fe(t){Ie.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=zh,this.K=this.L=!1}Ae(fe,Ie);var zh="",Dv=/^https?$/i,xv=["POST","PUT"];N=fe.prototype;N.Ka=function(t){this.L=t};N.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ro.g(),this.C=this.u?pl(this.u):pl(Ro),this.g.onreadystatechange=Le(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){yl(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=V.FormData&&t instanceof V.FormData,!(0<=ch(xv,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Qh(this),0<this.B&&((this.K=Nv(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Le(this.qa,this)):this.A=Da(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){yl(this,i)}};function Nv(t){return Pn&&Gy()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}N.qa=function(){typeof va<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Se(this,"timeout"),this.abort(8))};function yl(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Gh(t),pi(t)}function Gh(t){t.D||(t.D=!0,Se(t,"complete"),Se(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Se(this,"complete"),Se(this,"abort"),pi(this))};N.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),pi(this,!0)),fe.X.M.call(this)};N.Ha=function(){this.s||(this.F||this.v||this.l?Wh(this):this.fb())};N.fb=function(){Wh(this)};function Wh(t){if(t.h&&typeof va<"u"&&(!t.C[1]||Tt(t)!=4||t.aa()!=2)){if(t.v&&Tt(t)==4)Da(t.Ha,0,t);else if(Se(t,"readystatechange"),Tt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Fh)[1]||null;if(!r&&V.self&&V.self.location){var i=V.self.location.protocol;r=i.substr(0,i.length-1)}s=!Dv.test(r?r.toLowerCase():"")}n=s}if(n)Se(t,"complete"),Se(t,"success");else{t.m=6;try{var o=2<Tt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Gh(t)}}finally{pi(t)}}}}function pi(t,e){if(t.g){Qh(t);const n=t.g,s=t.C[0]?xr:null;t.g=null,t.C=null,e||Se(t,"ready");try{n.onreadystatechange=s}catch{}}}function Qh(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(V.clearTimeout(t.A),t.A=null)}function Tt(t){return t.g?t.g.readyState:0}N.aa=function(){try{return 2<Tt(this)?this.g.status:-1}catch{return-1}};N.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Av(e)}};function vl(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case zh:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}N.Ea=function(){return this.m};N.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Yh(t){let e="";return ba(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function La(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Yh(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ae(t,e,n))}function rs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Xh(t){this.Ca=0,this.i=[],this.j=new ai,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=rs("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=rs("baseRetryDelayMs",5e3,t),this.bb=rs("retryDelaySeedMs",1e4,t),this.$a=rs("forwardChannelMaxRetries",2,t),this.ta=rs("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new $h(t&&t.concurrentRequestLimit),this.Fa=new Iv,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}N=Xh.prototype;N.ma=8;N.G=1;function Fa(t){if(Jh(t),t.G==3){var e=t.U++,n=Ct(t.F);ae(n,"SID",t.I),ae(n,"RID",e),ae(n,"TYPE","terminate"),qs(t,n),e=new Us(t,t.j,e,void 0),e.K=2,e.v=fi(Ct(n)),n=!1,V.navigator&&V.navigator.sendBeacon&&(n=V.navigator.sendBeacon(e.v.toString(),"")),!n&&V.Image&&(new Image().src=e.v,n=!0),n||(e.g=af(e.l,null),e.g.da(e.v)),e.F=Date.now(),$s(e)}rf(t)}function gi(t){t.g&&(Va(t),t.g.cancel(),t.g=null)}function Jh(t){gi(t),t.u&&(V.clearTimeout(t.u),t.u=null),Lr(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&V.clearTimeout(t.m),t.m=null)}function mi(t){Bh(t.h)||t.m||(t.m=!0,Eh(t.Ja,t),t.C=0)}function kv(t,e){return jh(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Ps(Le(t.Ja,t,e),sf(t,t.C)),t.C++,!0)}N.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Us(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=fh(i),dh(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Zh(this,r,e),n=Ct(this.F),ae(n,"RID",t),ae(n,"CVER",22),this.D&&ae(n,"X-HTTP-Session-Id",this.D),qs(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Yh(i)))+"&"+e:this.o&&La(n,this.o,i)),Ra(this.h,r),this.Ya&&ae(n,"TYPE","init"),this.O?(ae(n,"$req",e),ae(n,"SID","null"),r.Z=!0,Mo(r,n,null)):Mo(r,n,e),this.G=2}}else this.G==3&&(t?wl(this,t):this.i.length==0||Bh(this.h)||wl(this))};function wl(t,e){var n;e?n=e.m:n=t.U++;const s=Ct(t.F);ae(s,"SID",t.I),ae(s,"RID",n),ae(s,"AID",t.T),qs(t,s),t.o&&t.s&&La(s,t.o,t.s),n=new Us(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Zh(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Ra(t.h,n),Mo(n,s,e)}function qs(t,e){t.ia&&ba(t.ia,function(n,s){ae(e,s,n)}),t.l&&Lh({},function(n,s){ae(e,s,n)})}function Zh(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Le(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{Cv(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function ef(t){t.g||t.u||(t.Z=1,Eh(t.Ia,t),t.A=0)}function Pa(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Ps(Le(t.Ia,t),sf(t,t.A)),t.A++,!0)}N.Ia=function(){if(this.u=null,tf(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Ps(Le(this.eb,this),t)}};N.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Be(10),gi(this),tf(this))};function Va(t){t.B!=null&&(V.clearTimeout(t.B),t.B=null)}function tf(t){t.g=new Us(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Ct(t.sa);ae(e,"RID","rpc"),ae(e,"SID",t.I),ae(e,"CI",t.L?"0":"1"),ae(e,"AID",t.T),ae(e,"TYPE","xmlhttp"),qs(t,e),t.o&&t.s&&La(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=fi(Ct(e)),n.s=null,n.P=!0,kh(n,t)}N.cb=function(){this.v!=null&&(this.v=null,gi(this),Pa(this),Be(19))};function Lr(t){t.v!=null&&(V.clearTimeout(t.v),t.v=null)}function nf(t,e){var n=null;if(t.g==e){Lr(t),Va(t),t.g=null;var s=2}else if(Fo(t.h,e))n=e.D,qh(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=ci(),Se(s,new Ah(s,n)),mi(t)}else ef(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&kv(t,e)||s==2&&Pa(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:sn(t,5);break;case 4:sn(t,10);break;case 3:sn(t,6);break;default:sn(t,2)}}}function sf(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function sn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Le(t.kb,t);n||(n=new ln("//www.google.com/images/cleardot.gif"),V.location&&V.location.protocol=="http"||Or(n,"https"),fi(n)),Sv(n.toString(),s)}else Be(2);t.G=0,t.l&&t.l.va(e),rf(t),Jh(t)}N.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Be(2)):(this.j.info("Failed to ping google.com"),Be(1))};function rf(t){if(t.G=0,t.la=[],t.l){const e=Hh(t.h);(e.length!=0||t.i.length!=0)&&(cl(t.la,e),cl(t.la,t.i),t.h.i.length=0,wa(t.i),t.i.length=0),t.l.ua()}}function of(t,e,n){var s=n instanceof ln?Ct(n):new ln(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Mr(s,s.m);else{var r=V.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new ln(null,void 0);s&&Or(i,s),e&&(i.g=e),r&&Mr(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&ae(s,n,e),ae(s,"VER",t.ma),qs(t,s),s}function af(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new fe(new Bs({jb:!0})):new fe(t.ra),e.Ka(t.H),e}function cf(){}N=cf.prototype;N.xa=function(){};N.wa=function(){};N.va=function(){};N.ua=function(){};N.Ra=function(){};function Fr(){if(Pn&&!(10<=Number(Wy)))throw Error("Environmental error: no available transport.")}Fr.prototype.g=function(t,e){return new Qe(t,e)};function Qe(t,e){Ie.call(this),this.g=new Xh(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Nr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Nr(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Xn(this)}Ae(Qe,Ie);Qe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Be(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=of(t,null,t.V),mi(t)};Qe.prototype.close=function(){Fa(this.g)};Qe.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Sa(t),t=n);e.i.push(new Tv(e.ab++,t)),e.G==3&&mi(e)};Qe.prototype.M=function(){this.g.l=null,delete this.j,Fa(this.g),delete this.g,Qe.X.M.call(this)};function lf(t){Na.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ae(lf,Na);function uf(){ka.call(this),this.status=1}Ae(uf,ka);function Xn(t){this.g=t}Ae(Xn,cf);Xn.prototype.xa=function(){Se(this.g,"a")};Xn.prototype.wa=function(t){Se(this.g,new lf(t))};Xn.prototype.va=function(t){Se(this.g,new uf)};Xn.prototype.ua=function(){Se(this.g,"b")};Fr.prototype.createWebChannel=Fr.prototype.g;Qe.prototype.send=Qe.prototype.u;Qe.prototype.open=Qe.prototype.m;Qe.prototype.close=Qe.prototype.close;li.NO_ERROR=0;li.TIMEOUT=8;li.HTTP_ERROR=6;Dh.COMPLETE="complete";xh.EventType=Vs;Vs.OPEN="a";Vs.CLOSE="b";Vs.ERROR="c";Vs.MESSAGE="d";Ie.prototype.listen=Ie.prototype.N;fe.prototype.listenOnce=fe.prototype.O;fe.prototype.getLastError=fe.prototype.Oa;fe.prototype.getLastErrorCode=fe.prototype.Ea;fe.prototype.getStatus=fe.prototype.aa;fe.prototype.getResponseJson=fe.prototype.Sa;fe.prototype.getResponseText=fe.prototype.fa;fe.prototype.send=fe.prototype.da;fe.prototype.setWithCredentials=fe.prototype.Ka;var Rv=function(){return new Fr},Ov=function(){return ci()},eo=li,Mv=Dh,Lv=gn,El={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Fv=Bs,cr=xh,Pv=fe;const bl="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ne.UNAUTHENTICATED=new Ne(null),Ne.GOOGLE_CREDENTIALS=new Ne("google-credentials-uid"),Ne.FIRST_PARTY=new Ne("first-party-uid"),Ne.MOCK_USER=new Ne("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jn="9.19.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn=new nh("@firebase/firestore");function Tl(){return dn.logLevel}function k(t,...e){if(dn.logLevel<=X.DEBUG){const n=e.map(Ua);dn.debug(`Firestore (${Jn}): ${t}`,...n)}}function St(t,...e){if(dn.logLevel<=X.ERROR){const n=e.map(Ua);dn.error(`Firestore (${Jn}): ${t}`,...n)}}function Pr(t,...e){if(dn.logLevel<=X.WARN){const n=e.map(Ua);dn.warn(`Firestore (${Jn}): ${t}`,...n)}}function Ua(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t="Unexpected state"){const e=`FIRESTORE (${Jn}) INTERNAL ASSERTION FAILED: `+t;throw St(e),new Error(e)}function oe(t,e){t||P()}function q(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends Qn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Vv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ne.UNAUTHENTICATED))}shutdown(){}}class Uv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class $v{constructor(e){this.t=e,this.currentUser=Ne.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new un;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new un,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new un)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(oe(typeof s.accessToken=="string"),new hf(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string"),new Ne(e)}}class Bv{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=Ne.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class jv{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new Bv(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Ne.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Hv{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=i=>{i.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,k("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(oe(typeof n.token=="string"),this.T=n.token,new qv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=Kv(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function J(t,e){return t<e?-1:t>e?1:0}function Vn(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new D(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new D(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new D(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ve.fromMillis(Date.now())}static fromDate(e){return ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new ve(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.timestamp=e}static fromTimestamp(e){return new $(e)}static min(){return new $(new ve(0,0))}static max(){return new $(new ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,n,s){n===void 0?n=0:n>e.length&&P(),s===void 0?s=e.length-n:s>e.length-n&&P(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return xs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof xs?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ie extends xs{construct(e,n,s){return new ie(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new D(y.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new ie(n)}static emptyPath(){return new ie([])}}const zv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Oe extends xs{construct(e,n,s){return new Oe(e,n,s)}static isValidIdentifier(e){return zv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Oe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Oe(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new D(y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new D(y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new D(y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new D(y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Oe(n)}static emptyPath(){return new Oe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(ie.fromString(e))}static fromName(e){return new O(ie.fromString(e).popFirst(5))}static empty(){return new O(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new ie(e.slice()))}}function Gv(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=$.fromTimestamp(s===1e9?new ve(n+1,0):new ve(n,s));return new $t(r,O.empty(),e)}function Wv(t){return new $t(t.readTime,t.key,-1)}class $t{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new $t($.min(),O.empty(),-1)}static max(){return new $t($.max(),O.empty(),-1)}}function Qv(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=O.comparator(t.documentKey,e.documentKey),n!==0?n:J(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Xv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hs(t){if(t.code!==y.FAILED_PRECONDITION||t.message!==Yv)throw t;k("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&P(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,s)=>{n(e)})}static reject(e){return new T((n,s)=>{s(e)})}static waitFor(e){return new T((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=T.resolve(!1);for(const s of e)n=n.next(r=>r?T.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new T((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new T((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Ks(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}$a.ct=-1;function yi(t){return t==null}function Vr(t){return t===0&&1/t==-1/0}function Jv(t){return typeof t=="number"&&Number.isInteger(t)&&!Vr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function mn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function df(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,n){this.comparator=e,this.root=n||Ce.EMPTY}insert(e,n){return new be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ce.BLACK,null,null))}remove(e){return new be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ce.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new lr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new lr(this.root,e,this.comparator,!1)}getReverseIterator(){return new lr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new lr(this.root,e,this.comparator,!0)}}class lr{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ce{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Ce.RED,this.left=r??Ce.EMPTY,this.right=i??Ce.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Ce(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ce.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Ce.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw P();const e=this.left.check();if(e!==this.right.check())throw P();return e+(this.isRed()?0:1)}}Ce.EMPTY=null,Ce.RED=!0,Ce.BLACK=!1;Ce.EMPTY=new class{constructor(){this.size=0}get key(){throw P()}get value(){throw P()}get color(){throw P()}get left(){throw P()}get right(){throw P()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Ce(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.comparator=e,this.data=new be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Il(this.data.getIterator())}getIteratorFrom(e){return new Il(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof we)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new we(this.comparator);return n.data=e,n}}class Il{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.fields=e,e.sort(Oe.comparator)}static empty(){return new We([])}unionWith(e){let n=new we(Oe.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new We(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Vn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Zv("Invalid base64 string: "+r):r}}(e);return new Ve(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Ve(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ve.EMPTY_BYTE_STRING=new Ve("");const ew=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Bt(t){if(oe(!!t),typeof t=="string"){let e=0;const n=ew.exec(t);if(oe(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ge(t.seconds),nanos:ge(t.nanos)}}function ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Un(t){return typeof t=="string"?Ve.fromBase64String(t):Ve.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function gf(t){const e=t.mapValue.fields.__previous_value__;return pf(e)?gf(e):e}function Ns(t){const e=Bt(t.mapValue.fields.__local_write_time__.timestampValue);return new ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class ks{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ks("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ks&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function pn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?pf(t)?4:nw(t)?9007199254740991:10:P()}function yt(t,e){if(t===e)return!0;const n=pn(t);if(n!==pn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ns(t).isEqual(Ns(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Bt(s.timestampValue),o=Bt(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Un(s.bytesValue).isEqual(Un(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return ge(s.geoPointValue.latitude)===ge(r.geoPointValue.latitude)&&ge(s.geoPointValue.longitude)===ge(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return ge(s.integerValue)===ge(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=ge(s.doubleValue),o=ge(r.doubleValue);return i===o?Vr(i)===Vr(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Vn(t.arrayValue.values||[],e.arrayValue.values||[],yt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(_l(i)!==_l(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!yt(i[a],o[a])))return!1;return!0}(t,e);default:return P()}}function Rs(t,e){return(t.values||[]).find(n=>yt(n,e))!==void 0}function $n(t,e){if(t===e)return 0;const n=pn(t),s=pn(e);if(n!==s)return J(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return J(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=ge(r.integerValue||r.doubleValue),a=ge(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Cl(t.timestampValue,e.timestampValue);case 4:return Cl(Ns(t),Ns(e));case 5:return J(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Un(r),a=Un(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=J(o[c],a[c]);if(l!==0)return l}return J(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=J(ge(r.latitude),ge(i.latitude));return o!==0?o:J(ge(r.longitude),ge(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=$n(o[c],a[c]);if(l)return l}return J(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===ur.mapValue&&i===ur.mapValue)return 0;if(r===ur.mapValue)return 1;if(i===ur.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const f=J(a[u],l[u]);if(f!==0)return f;const p=$n(o[a[u]],c[l[u]]);if(p!==0)return p}return J(a.length,l.length)}(t.mapValue,e.mapValue);default:throw P()}}function Cl(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return J(t,e);const n=Bt(t),s=Bt(e),r=J(n.seconds,s.seconds);return r!==0?r:J(n.nanos,s.nanos)}function Bn(t){return Po(t)}function Po(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Bt(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Un(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,O.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Po(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Po(s.fields[a])}`;return i+"}"}(t.mapValue):P();var e,n}function Sl(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Vo(t){return!!t&&"integerValue"in t}function Ba(t){return!!t&&"arrayValue"in t}function Al(t){return!!t&&"nullValue"in t}function Dl(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function vr(t){return!!t&&"mapValue"in t}function ds(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return mn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=ds(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ds(t.arrayValue.values[n]);return e}return Object.assign({},t)}function nw(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.value=e}static empty(){return new qe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!vr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ds(n)}setAll(e){let n=Oe.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=ds(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());vr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return yt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];vr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){mn(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new qe(ds(this.value))}}function mf(t){const e=[];return mn(t.fields,(n,s)=>{const r=new Oe([n]);if(vr(s)){const i=mf(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new We(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ke(e,0,$.min(),$.min(),$.min(),qe.empty(),0)}static newFoundDocument(e,n,s,r){return new ke(e,1,n,$.min(),s,r,0)}static newNoDocument(e,n){return new ke(e,2,n,$.min(),$.min(),qe.empty(),0)}static newUnknownDocument(e,n){return new ke(e,3,n,$.min(),$.min(),qe.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual($.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ke(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,n){this.position=e,this.inclusive=n}}function xl(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=O.comparator(O.fromName(o.referenceValue),n.key):s=$n(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Nl(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!yt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,n="asc"){this.field=e,this.dir=n}}function sw(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{}class ye extends yf{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new iw(e,n,s):n==="array-contains"?new cw(e,s):n==="in"?new lw(e,s):n==="not-in"?new uw(e,s):n==="array-contains-any"?new hw(e,s):new ye(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new ow(e,s):new aw(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison($n(n,this.value)):n!==null&&pn(this.value)===pn(n)&&this.matchesComparison($n(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return P()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ot extends yf{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new ot(e,n)}matches(e){return vf(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function vf(t){return t.op==="and"}function wf(t){return rw(t)&&vf(t)}function rw(t){for(const e of t.filters)if(e instanceof ot)return!1;return!0}function Uo(t){if(t instanceof ye)return t.field.canonicalString()+t.op.toString()+Bn(t.value);if(wf(t))return t.filters.map(e=>Uo(e)).join(",");{const e=t.filters.map(n=>Uo(n)).join(",");return`${t.op}(${e})`}}function Ef(t,e){return t instanceof ye?function(n,s){return s instanceof ye&&n.op===s.op&&n.field.isEqual(s.field)&&yt(n.value,s.value)}(t,e):t instanceof ot?function(n,s){return s instanceof ot&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Ef(i,s.filters[o]),!0):!1}(t,e):void P()}function bf(t){return t instanceof ye?function(e){return`${e.field.canonicalString()} ${e.op} ${Bn(e.value)}`}(t):t instanceof ot?function(e){return e.op.toString()+" {"+e.getFilters().map(bf).join(" ,")+"}"}(t):"Filter"}class iw extends ye{constructor(e,n,s){super(e,n,s),this.key=O.fromName(s.referenceValue)}matches(e){const n=O.comparator(e.key,this.key);return this.matchesComparison(n)}}class ow extends ye{constructor(e,n){super(e,"in",n),this.keys=Tf("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class aw extends ye{constructor(e,n){super(e,"not-in",n),this.keys=Tf("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Tf(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>O.fromName(s.referenceValue))}class cw extends ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ba(n)&&Rs(n.arrayValue,this.value)}}class lw extends ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Rs(this.value.arrayValue,n)}}class uw extends ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(Rs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Rs(this.value.arrayValue,n)}}class hw extends ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ba(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Rs(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function kl(t,e=null,n=[],s=[],r=null,i=null,o=null){return new fw(t,e,n,s,r,i,o)}function ja(t){const e=q(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Uo(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),yi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Bn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Bn(s)).join(",")),e.ft=n}return e.ft}function qa(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!sw(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ef(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Nl(t.startAt,e.startAt)&&Nl(t.endAt,e.endAt)}function $o(t){return O.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this.wt=null,this.startAt,this.endAt}}function dw(t,e,n,s,r,i,o,a){return new Zn(t,e,n,s,r,i,o,a)}function Ha(t){return new Zn(t)}function Rl(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Ka(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function vi(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function _f(t){return t.collectionGroup!==null}function Rn(t){const e=q(t);if(e.dt===null){e.dt=[];const n=vi(e),s=Ka(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new kn(n)),e.dt.push(new kn(Oe.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new kn(Oe.keyField(),i))}}}return e.dt}function At(t){const e=q(t);if(!e.wt)if(e.limitType==="F")e.wt=kl(e.path,e.collectionGroup,Rn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Rn(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new kn(i.field,o))}const s=e.endAt?new Ur(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Ur(e.startAt.position,e.startAt.inclusive):null;e.wt=kl(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.wt}function Bo(t,e){e.getFirstInequalityField(),vi(t);const n=t.filters.concat([e]);return new Zn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function jo(t,e,n){return new Zn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function wi(t,e){return qa(At(t),At(e))&&t.limitType===e.limitType}function If(t){return`${ja(At(t))}|lt:${t.limitType}`}function qo(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>bf(s)).join(", ")}]`),yi(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Bn(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Bn(s)).join(",")),`Target(${n})`}(At(t))}; limitType=${t.limitType})`}function Ei(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):O.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of Rn(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=xl(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Rn(n),s)||n.endAt&&!function(r,i,o){const a=xl(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Rn(n),s))}(t,e)}function pw(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Cf(t){return(e,n)=>{let s=!1;for(const r of Rn(t)){const i=gw(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function gw(t,e,n){const s=t.field.isKeyField()?O.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?$n(a,c):P()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return P()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){mn(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return df(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw=new be(O.comparator);function Dt(){return mw}const Sf=new be(O.comparator);function cs(...t){let e=Sf;for(const n of t)e=e.insert(n.key,n);return e}function Af(t){let e=Sf;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function rn(){return ps()}function Df(){return ps()}function ps(){return new es(t=>t.toString(),(t,e)=>t.isEqual(e))}const yw=new be(O.comparator),vw=new we(O.comparator);function G(...t){let e=vw;for(const n of t)e=e.add(n);return e}const ww=new we(J);function xf(){return ww}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vr(e)?"-0":e}}function kf(t){return{integerValue:""+t}}function Ew(t,e){return Jv(e)?kf(e):Nf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(){this._=void 0}}function bw(t,e,n){return t instanceof $r?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Os?Of(t,e):t instanceof Ms?Mf(t,e):function(s,r){const i=Rf(s,r),o=Ol(i)+Ol(s._t);return Vo(i)&&Vo(s._t)?kf(o):Nf(s.serializer,o)}(t,e)}function Tw(t,e,n){return t instanceof Os?Of(t,e):t instanceof Ms?Mf(t,e):n}function Rf(t,e){return t instanceof Br?Vo(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class $r extends bi{}class Os extends bi{constructor(e){super(),this.elements=e}}function Of(t,e){const n=Lf(e);for(const s of t.elements)n.some(r=>yt(r,s))||n.push(s);return{arrayValue:{values:n}}}class Ms extends bi{constructor(e){super(),this.elements=e}}function Mf(t,e){let n=Lf(e);for(const s of t.elements)n=n.filter(r=>!yt(r,s));return{arrayValue:{values:n}}}class Br extends bi{constructor(e,n){super(),this.serializer=e,this._t=n}}function Ol(t){return ge(t.integerValue||t.doubleValue)}function Lf(t){return Ba(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function _w(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Os&&s instanceof Os||n instanceof Ms&&s instanceof Ms?Vn(n.elements,s.elements,yt):n instanceof Br&&s instanceof Br?yt(n._t,s._t):n instanceof $r&&s instanceof $r}(t.transform,e.transform)}class Iw{constructor(e,n){this.version=e,this.transformResults=n}}class it{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new it}static exists(e){return new it(void 0,e)}static updateTime(e){return new it(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function wr(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ti{}function Ff(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new za(t.key,it.none()):new zs(t.key,t.data,it.none());{const n=t.data,s=qe.empty();let r=new we(Oe.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Kt(t.key,s,new We(r.toArray()),it.none())}}function Cw(t,e,n){t instanceof zs?function(s,r,i){const o=s.value.clone(),a=Ll(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Kt?function(s,r,i){if(!wr(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Ll(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Pf(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function gs(t,e,n,s){return t instanceof zs?function(r,i,o,a){if(!wr(r.precondition,i))return o;const c=r.value.clone(),l=Fl(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Kt?function(r,i,o,a){if(!wr(r.precondition,i))return o;const c=Fl(r.fieldTransforms,a,i),l=i.data;return l.setAll(Pf(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return wr(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function Sw(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Rf(s.transform,r||null);i!=null&&(n===null&&(n=qe.empty()),n.set(s.field,i))}return n||null}function Ml(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Vn(n,s,(r,i)=>_w(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class zs extends Ti{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Kt extends Ti{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Pf(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Ll(t,e,n){const s=new Map;oe(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,Tw(o,a,n[r]))}return s}function Fl(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,bw(i,o,e))}return s}class za extends Ti{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Aw extends Ti{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Cw(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=gs(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=gs(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Df();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Ff(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument($.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),G())}isEqual(e){return this.batchId===e.batchId&&Vn(this.mutations,e.mutations,(n,s)=>Ml(n,s))&&Vn(this.baseMutations,e.baseMutations,(n,s)=>Ml(n,s))}}class Ga{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){oe(e.mutations.length===s.length);let r=yw;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Ga(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe,W;function kw(t){switch(t){default:return P();case y.CANCELLED:case y.UNKNOWN:case y.DEADLINE_EXCEEDED:case y.RESOURCE_EXHAUSTED:case y.INTERNAL:case y.UNAVAILABLE:case y.UNAUTHENTICATED:return!1;case y.INVALID_ARGUMENT:case y.NOT_FOUND:case y.ALREADY_EXISTS:case y.PERMISSION_DENIED:case y.FAILED_PRECONDITION:case y.ABORTED:case y.OUT_OF_RANGE:case y.UNIMPLEMENTED:case y.DATA_LOSS:return!0}}function Vf(t){if(t===void 0)return St("GRPC error has no .code"),y.UNKNOWN;switch(t){case pe.OK:return y.OK;case pe.CANCELLED:return y.CANCELLED;case pe.UNKNOWN:return y.UNKNOWN;case pe.DEADLINE_EXCEEDED:return y.DEADLINE_EXCEEDED;case pe.RESOURCE_EXHAUSTED:return y.RESOURCE_EXHAUSTED;case pe.INTERNAL:return y.INTERNAL;case pe.UNAVAILABLE:return y.UNAVAILABLE;case pe.UNAUTHENTICATED:return y.UNAUTHENTICATED;case pe.INVALID_ARGUMENT:return y.INVALID_ARGUMENT;case pe.NOT_FOUND:return y.NOT_FOUND;case pe.ALREADY_EXISTS:return y.ALREADY_EXISTS;case pe.PERMISSION_DENIED:return y.PERMISSION_DENIED;case pe.FAILED_PRECONDITION:return y.FAILED_PRECONDITION;case pe.ABORTED:return y.ABORTED;case pe.OUT_OF_RANGE:return y.OUT_OF_RANGE;case pe.UNIMPLEMENTED:return y.UNIMPLEMENTED;case pe.DATA_LOSS:return y.DATA_LOSS;default:return P()}}(W=pe||(pe={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return hr}static getOrCreateInstance(){return hr===null&&(hr=new Wa),hr}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let hr=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Gs.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new _i($.min(),r,xf(),Dt(),G())}}class Gs{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Gs(s,n,G(),G(),G())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,n,s,r){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=r}}class Uf{constructor(e,n){this.targetId=e,this.Et=n}}class $f{constructor(e,n,s=Ve.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Pl{constructor(){this.At=0,this.Rt=Ul(),this.vt=Ve.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=G(),n=G(),s=G();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:P()}}),new Gs(this.vt,this.bt,e,n,s)}xt(){this.Pt=!1,this.Rt=Ul()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class Rw{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Dt(),this.qt=Vl(),this.Ut=new we(J)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const s=this.jt(n);switch(e.state){case 0:this.Wt(n)&&s.Dt(e.resumeToken);break;case 1:s.$t(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.$t(),s.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(s.Mt(),s.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:P()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.Wt(r)&&n(r)})}Jt(e){var n;const s=e.targetId,r=e.Et.count,i=this.Yt(s);if(i){const o=i.target;if($o(o))if(r===0){const a=new O(o.path);this.Qt(s,a,ke.newNoDocument(a,$.min()))}else oe(r===1);else{const a=this.Zt(s);a!==r&&(this.Ht(s),this.Ut=this.Ut.add(s),(n=Wa.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&$o(a.target)){const c=new O(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,ke.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=G();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new _i(e,n,this.Ut,this.Lt,s);return this.Lt=Dt(),this.qt=Vl(),this.Ut=new we(J),r}Gt(e,n){if(!this.Wt(e))return;const s=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.Wt(e))return;const r=this.jt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new Pl,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new we(J),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||k("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Pl),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function Vl(){return new be(O.comparator)}function Ul(){return new be(O.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Mw=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Lw=(()=>({and:"AND",or:"OR"}))();class Fw{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function jr(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Bf(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Pw(t,e){return jr(t,e.toTimestamp())}function gt(t){return oe(!!t),$.fromTimestamp(function(e){const n=Bt(e);return new ve(n.seconds,n.nanos)}(t))}function Qa(t,e){return function(n){return new ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function jf(t){const e=ie.fromString(t);return oe(zf(e)),e}function Ho(t,e){return Qa(t.databaseId,e.path)}function to(t,e){const n=jf(e);if(n.get(1)!==t.databaseId.projectId)throw new D(y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new D(y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new O(qf(n))}function Ko(t,e){return Qa(t.databaseId,e)}function Vw(t){const e=jf(t);return e.length===4?ie.emptyPath():qf(e)}function zo(t){return new ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function qf(t){return oe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function $l(t,e,n){return{name:Ho(t,e),fields:n.value.mapValue.fields}}function Uw(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:P()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(oe(l===void 0||typeof l=="string"),Ve.fromBase64String(l||"")):(oe(l===void 0||l instanceof Uint8Array),Ve.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?y.UNKNOWN:Vf(c.code);return new D(l,c.message||"")}(o);n=new $f(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=to(t,s.document.name),i=gt(s.document.updateTime),o=s.document.createTime?gt(s.document.createTime):$.min(),a=new qe({mapValue:{fields:s.document.fields}}),c=ke.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new Er(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=to(t,s.document),i=s.readTime?gt(s.readTime):$.min(),o=ke.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Er([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=to(t,s.document),i=s.removedTargetIds||[];n=new Er([],i,r,null)}else{if(!("filter"in e))return P();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new Nw(r),o=s.targetId;n=new Uf(o,i)}}return n}function $w(t,e){let n;if(e instanceof zs)n={update:$l(t,e.key,e.value)};else if(e instanceof za)n={delete:Ho(t,e.key)};else if(e instanceof Kt)n={update:$l(t,e.key,e.data),updateMask:Qw(e.fieldMask)};else{if(!(e instanceof Aw))return P();n={verify:Ho(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof $r)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Os)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ms)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Br)return{fieldPath:i.field.canonicalString(),increment:o._t};throw P()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Pw(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:P()}(t,e.precondition)),n}function Bw(t,e){return t&&t.length>0?(oe(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?gt(s.updateTime):gt(r);return i.isEqual($.min())&&(i=gt(r)),new Iw(i,s.transformResults||[])}(n,e))):[]}function jw(t,e){return{documents:[Ko(t,e.path)]}}function qw(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Ko(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ko(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Kf(ot.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Tn(u.field),direction:zw(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.useProto3Json||yi(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Hw(t){let e=Vw(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){oe(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const f=Hf(u);return f instanceof ot&&wf(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(f){return new kn(_n(f.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(u)));let a=null;n.limit&&(a=function(u){let f;return f=typeof u=="object"?u.value:u,yi(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(u){const f=!!u.before,p=u.values||[];return new Ur(p,f)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const f=!u.before,p=u.values||[];return new Ur(p,f)}(n.endAt)),dw(e,r,o,i,a,"F",c,l)}function Kw(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return P()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Hf(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=_n(e.unaryFilter.field);return ye.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=_n(e.unaryFilter.field);return ye.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=_n(e.unaryFilter.field);return ye.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=_n(e.unaryFilter.field);return ye.create(i,"!=",{nullValue:"NULL_VALUE"});default:return P()}}(t):t.fieldFilter!==void 0?function(e){return ye.create(_n(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return P()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return ot.create(e.compositeFilter.filters.map(n=>Hf(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return P()}}(e.compositeFilter.op))}(t):P()}function zw(t){return Ow[t]}function Gw(t){return Mw[t]}function Ww(t){return Lw[t]}function Tn(t){return{fieldPath:t.canonicalString()}}function _n(t){return Oe.fromServerFormat(t.fieldPath)}function Kf(t){return t instanceof ye?function(e){if(e.op==="=="){if(Dl(e.value))return{unaryFilter:{field:Tn(e.field),op:"IS_NAN"}};if(Al(e.value))return{unaryFilter:{field:Tn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Dl(e.value))return{unaryFilter:{field:Tn(e.field),op:"IS_NOT_NAN"}};if(Al(e.value))return{unaryFilter:{field:Tn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Tn(e.field),op:Gw(e.op),value:e.value}}}(t):t instanceof ot?function(e){const n=e.getFilters().map(s=>Kf(s));return n.length===1?n[0]:{compositeFilter:{op:Ww(e.op),filters:n}}}(t):P()}function Qw(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function zf(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,n,s,r,i=$.min(),o=$.min(),a=Ve.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new hn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new hn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e){this.se=e}}function Xw(t){const e=Hw({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?jo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(){this.He=new Zw}addToCollectionParentIndex(e,n){return this.He.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve($t.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve($t.min())}updateCollectionGroup(e,n,s){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class Zw{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new we(ie.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new we(ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new jn(0)}static bn(){return new jn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(){this.changes=new es(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ke.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?T.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&gs(s.mutation,r,We.empty(),ve.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,G()).next(()=>s))}getLocalViewOfDocuments(e,n,s=G()){const r=rn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=cs();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=rn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,G()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Dt();const o=ps(),a=ps();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof Kt)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),gs(u.mutation,l,u.mutation.getFieldMask(),ve.now())):o.set(l.key,We.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var f;return a.set(l,new tE(u,(f=o.get(l))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const s=ps();let r=new be((o,a)=>o-a),i=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||We.empty();u=a.applyToLocalView(l,u),s.set(c,u);const f=(r.get(a.batchId)||G()).add(c);r=r.insert(a.batchId,f)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,f=Df();u.forEach(p=>{if(!i.has(p)){const g=Ff(n.get(p),s.get(p));g!==null&&f.set(p,g),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,f))}return T.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return O.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):_f(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):T.resolve(rn());let a=-1,c=i;return o.next(l=>T.forEach(l,(u,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(u)?T.resolve():this.remoteDocumentCache.getEntry(e,u).next(p=>{c=c.insert(u,p)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,G())).next(u=>({batchId:a,changes:Af(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new O(n)).next(s=>{let r=cs();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=cs();return this.indexManager.getCollectionParents(e,r).next(o=>T.forEach(o,a=>{const c=function(l,u){return new Zn(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,f)=>{i=i.insert(u,f)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,ke.newInvalidDocument(l)))});let o=cs();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&gs(l.mutation,c,We.empty(),ve.now()),Ei(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return T.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:gt(s.createTime)}),T.resolve()}getNamedQuery(e,n){return T.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(s){return{name:s.name,query:Xw(s.bundledQuery),readTime:gt(s.readTime)}}(n)),T.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(){this.overlays=new be(O.comparator),this.ts=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const s=rn();return T.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.re(e,n,i)}),T.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ts.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ts.delete(s)),T.resolve()}getOverlaysForCollection(e,n,s){const r=rn(),i=n.length+1,o=new O(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return T.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new be((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=rn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=rn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return T.resolve(a)}re(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ts.get(r.largestBatchId).delete(s.key);this.ts.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new xw(n,s));let i=this.ts.get(n);i===void 0&&(i=G(),this.ts.set(n,i)),this.ts.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(){this.es=new we(_e.ns),this.ss=new we(_e.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const s=new _e(e,n);this.es=this.es.add(s),this.ss=this.ss.add(s)}os(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.us(new _e(e,n))}cs(e,n){e.forEach(s=>this.removeReference(s,n))}hs(e){const n=new O(new ie([])),s=new _e(n,e),r=new _e(n,e+1),i=[];return this.ss.forEachInRange([s,r],o=>{this.us(o),i.push(o.key)}),i}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new O(new ie([])),s=new _e(n,e),r=new _e(n,e+1);let i=G();return this.ss.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new _e(e,0),s=this.es.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class _e{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return O.comparator(e.key,n.key)||J(e.ds,n.ds)}static rs(e,n){return J(e.ds,n.ds)||O.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new we(_e.ns)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Dw(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this._s=this._s.add(new _e(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ys(s),i=r<0?0:r;return T.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new _e(n,0),r=new _e(n,Number.POSITIVE_INFINITY),i=[];return this._s.forEachInRange([s,r],o=>{const a=this.gs(o.ds);i.push(a)}),T.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new we(J);return n.forEach(r=>{const i=new _e(r,0),o=new _e(r,Number.POSITIVE_INFINITY);this._s.forEachInRange([i,o],a=>{s=s.add(a.ds)})}),T.resolve(this.ps(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;O.isDocumentKey(i)||(i=i.child(""));const o=new _e(new O(i),0);let a=new we(J);return this._s.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.ds)),!0)},o),T.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(s=>{const r=this.gs(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){oe(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this._s;return T.forEach(n.mutations,r=>{const i=new _e(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this._s=s})}En(e){}containsKey(e,n){const s=new _e(n,0),r=this._s.firstAfterOrEqual(s);return T.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e){this.Ts=e,this.docs=new be(O.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ts(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return T.resolve(s?s.document.mutableCopy():ke.newInvalidDocument(n))}getEntries(e,n){let s=Dt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():ke.newInvalidDocument(r))}),T.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Dt();const o=n.path,a=new O(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Qv(Wv(u),s)<=0||(r.has(u.key)||Ei(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return T.resolve(i)}getAllFromCollectionGroup(e,n,s,r){P()}Es(e,n){return T.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new aE(this)}getSize(e){return T.resolve(this.size)}}class aE extends eE{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Jn.addEntry(e,r)):this.Jn.removeEntry(s)}),T.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e){this.persistence=e,this.As=new es(n=>ja(n),qa),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Ya,this.targetCount=0,this.bs=jn.vn()}forEachTarget(e,n){return this.As.forEach((s,r)=>n(r)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Rs&&(this.Rs=n),T.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new jn(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.Sn(n),T.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.As.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),T.waitFor(i).next(()=>r)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const s=this.As.get(n)||null;return T.resolve(s)}addMatchingKeys(e,n,s){return this.vs.os(n,s),T.resolve()}removeMatchingKeys(e,n,s){this.vs.cs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),T.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),T.resolve()}getMatchingKeysForTargetId(e,n){const s=this.vs.fs(n);return T.resolve(s)}containsKey(e,n){return T.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new $a(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new cE(this),this.indexManager=new Jw,this.remoteDocumentCache=function(s){return new oE(s)}(s=>this.referenceDelegate.Cs(s)),this.serializer=new Yw(n),this.xs=new sE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new rE,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ps[e.toKey()];return s||(s=new iE(n,this.referenceDelegate),this.Ps[e.toKey()]=s),s}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,s){k("MemoryPersistence","Starting transaction:",e);const r=new uE(this.Vs.next());return this.referenceDelegate.Ns(),s(r).next(i=>this.referenceDelegate.ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Os(e,n){return T.or(Object.values(this.Ps).map(s=>()=>s.containsKey(e,n)))}}class uE extends Xv{constructor(e){super(),this.currentSequenceNumber=e}}class Xa{constructor(e){this.persistence=e,this.$s=new Ya,this.Ms=null}static Fs(e){return new Xa(e)}get Bs(){if(this.Ms)return this.Ms;throw P()}addReference(e,n,s){return this.$s.addReference(s,n),this.Bs.delete(s.toString()),T.resolve()}removeReference(e,n,s){return this.$s.removeReference(s,n),this.Bs.add(s.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),T.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(r=>this.Bs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Bs.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Bs,s=>{const r=O.fromPath(s);return this.Ls(e,r).next(i=>{i||n.removeEntry(r,$.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(s=>{s?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return T.or([()=>T.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Vi=s,this.Si=r}static Di(e,n){let s=G(),r=G();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ja(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ni(e,n).next(i=>i||this.ki(e,n,r,s)).next(i=>i||this.Oi(e,n))}Ni(e,n){if(Rl(n))return T.resolve(null);let s=At(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=jo(n,null,"F"),s=At(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=G(...i);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.$i(n,a);return this.Mi(n,l,o,c.readTime)?this.Ni(e,jo(n,null,"F")):this.Fi(e,l,n,c)}))})))}ki(e,n,s,r){return Rl(n)||r.isEqual($.min())?this.Oi(e,n):this.xi.getDocuments(e,s).next(i=>{const o=this.$i(n,i);return this.Mi(n,o,s,r)?this.Oi(e,n):(Tl()<=X.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),qo(n)),this.Fi(e,o,n,Gv(r,-1)))})}$i(e,n){let s=new we(Cf(e));return n.forEach((r,i)=>{Ei(e,i)&&(s=s.add(i))}),s}Mi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(e,n){return Tl()<=X.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",qo(n)),this.xi.getDocumentsMatchingQuery(e,n,$t.min())}Fi(e,n,s,r){return this.xi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e,n,s,r){this.persistence=e,this.Bi=n,this.serializer=r,this.Li=new be(J),this.qi=new es(i=>ja(i),qa),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(s)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nE(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function dE(t,e,n,s){return new fE(t,e,n,s)}async function Gf(t,e){const n=q(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Gi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=G();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Qi:l,removedBatchIds:o,addedBatchIds:a}))})})}function pE(t,e){const n=q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,f=u.keys();let p=T.resolve();return f.forEach(g=>{p=p.next(()=>l.getEntry(a,g)).next(S=>{const b=c.docVersions.get(g);oe(b!==null),S.version.compareTo(b)<0&&(u.applyToRemoteDocument(S,c),S.isValidDocument()&&(S.setReadTime(c.commitVersion),l.addEntry(S)))})}),p.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=G();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Wf(t){const e=q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function gE(t,e){const n=q(t),s=e.snapshotVersion;let r=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});r=n.Li;const a=[];e.targetChanges.forEach((u,f)=>{const p=r.get(f);if(!p)return;a.push(n.Ds.removeMatchingKeys(i,u.removedDocuments,f).next(()=>n.Ds.addMatchingKeys(i,u.addedDocuments,f)));let g=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(f)?g=g.withResumeToken(Ve.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,s)),r=r.insert(f,g),function(S,b,R){return S.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:R.addedDocuments.size+R.modifiedDocuments.size+R.removedDocuments.size>0}(p,g,u)&&a.push(n.Ds.updateTargetData(i,g))});let c=Dt(),l=G();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(mE(i,o,e.documentUpdates).next(u=>{c=u.zi,l=u.ji})),!s.isEqual($.min())){const u=n.Ds.getLastRemoteSnapshotVersion(i).next(f=>n.Ds.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return T.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Li=r,i))}function mE(t,e,n){let s=G(),r=G();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Dt();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual($.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):k("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{zi:o,ji:r}})}function yE(t,e){const n=q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function vE(t,e){const n=q(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ds.getTargetData(s,e).next(i=>i?(r=i,T.resolve(r)):n.Ds.allocateTargetId(s).next(o=>(r=new hn(e,o,0,s.currentSequenceNumber),n.Ds.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Li.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Li=n.Li.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function Go(t,e,n){const s=q(t),r=s.Li.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Ks(o))throw o;k("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Li=s.Li.remove(e),s.qi.delete(r.target)}function Bl(t,e,n){const s=q(t);let r=$.min(),i=G();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=q(a),f=u.qi.get(l);return f!==void 0?T.resolve(u.Li.get(f)):u.Ds.getTargetData(c,l)}(s,o,At(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Bi.getDocumentsMatchingQuery(o,e,n?r:$.min(),n?i:G())).next(a=>(wE(s,pw(e),a),{documents:a,Wi:i})))}function wE(t,e,n){let s=t.Ui.get(e)||$.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ui.set(e,s)}class jl{constructor(){this.activeTargetIds=xf()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class EE{constructor(){this.Br=new jl,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,s){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new jl,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){k("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){k("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fr=null;function no(){return fr===null?fr=268435456+Math.round(2147483648*Math.random()):fr++,"0x"+fr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De="WebChannelConnection";class IE extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,s,r,i){const o=no(),a=this.ao(e,n);k("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.ho(c,r,i),this.lo(e,a,c,s).then(l=>(k("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Pr("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}fo(e,n,s,r,i,o){return this.co(e,n,s,r,i)}ho(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Jn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ao(e,n){const s=TE[e];return`${this.ro}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,s,r){const i=no();return new Promise((o,a)=>{const c=new Pv;c.setWithCredentials(!0),c.listenOnce(Mv.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case eo.NO_ERROR:const u=c.getResponseJson();k(De,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case eo.TIMEOUT:k(De,`RPC '${e}' ${i} timed out`),a(new D(y.DEADLINE_EXCEEDED,"Request time out"));break;case eo.HTTP_ERROR:const f=c.getStatus();if(k(De,`RPC '${e}' ${i} failed with status:`,f,"response text:",c.getResponseText()),f>0){let p=c.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const S=function(b){const R=b.toLowerCase().replace(/_/g,"-");return Object.values(y).indexOf(R)>=0?R:y.UNKNOWN}(g.status);a(new D(S,g.message))}else a(new D(y.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new D(y.UNAVAILABLE,"Connection failed."));break;default:P()}}finally{k(De,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);k(De,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}wo(e,n,s){const r=no(),i=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Rv(),a=Ov(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new Fv({})),this.ho(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const l=i.join("");k(De,`Creating RPC '${e}' stream ${r}: ${l}`,c);const u=o.createWebChannel(l,c);let f=!1,p=!1;const g=new _E({Wr:b=>{p?k(De,`Not sending because RPC '${e}' stream ${r} is closed:`,b):(f||(k(De,`Opening RPC '${e}' stream ${r} transport.`),u.open(),f=!0),k(De,`RPC '${e}' stream ${r} sending:`,b),u.send(b))},Hr:()=>u.close()}),S=(b,R,j)=>{b.listen(R,te=>{try{j(te)}catch(F){setTimeout(()=>{throw F},0)}})};return S(u,cr.EventType.OPEN,()=>{p||k(De,`RPC '${e}' stream ${r} transport opened.`)}),S(u,cr.EventType.CLOSE,()=>{p||(p=!0,k(De,`RPC '${e}' stream ${r} transport closed`),g.so())}),S(u,cr.EventType.ERROR,b=>{p||(p=!0,Pr(De,`RPC '${e}' stream ${r} transport errored:`,b),g.so(new D(y.UNAVAILABLE,"The operation could not be completed")))}),S(u,cr.EventType.MESSAGE,b=>{var R;if(!p){const j=b.data[0];oe(!!j);const te=j,F=te.error||((R=te[0])===null||R===void 0?void 0:R.error);if(F){k(De,`RPC '${e}' stream ${r} received error:`,F);const Z=F.status;let le=function(at){const H=pe[at];if(H!==void 0)return Vf(H)}(Z),vt=F.message;le===void 0&&(le=y.INTERNAL,vt="Unknown error status: "+Z+" with message "+F.message),p=!0,g.so(new D(le,vt)),u.close()}else k(De,`RPC '${e}' stream ${r} received:`,j),g.io(j)}}),S(a,Lv.STAT_EVENT,b=>{b.stat===El.PROXY?k(De,`RPC '${e}' stream ${r} detected buffering proxy`):b.stat===El.NOPROXY&&k(De,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{g.no()},0),g}}function so(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(t){return new Fw(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Ws=e,this.timerId=n,this._o=s,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),r=Math.max(0,n-s);r>0&&k("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e,n,s,r,i,o,a,c){this.Ws=e,this.bo=s,this.Po=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new Qf(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===y.RESOURCE_EXHAUSTED?(St(n.toString()),St("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Vo===n&&this.Ko(s,r)},s=>{e(()=>{const r=new D(y.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Go(r)})})}Ko(e,n){const s=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{s(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(r=>{s(()=>this.Go(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return k("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(k("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class CE extends Yf{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=Uw(this.serializer,e),s=function(r){if(!("targetChange"in r))return $.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?$.min():i.readTime?gt(i.readTime):$.min()}(e);return this.listener.zo(n,s)}jo(e){const n={};n.database=zo(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;return o=$o(a)?{documents:jw(r,a)}:{query:qw(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Bf(r,i.resumeToken):i.snapshotVersion.compareTo($.min())>0&&(o.readTime=jr(r,i.snapshotVersion.toTimestamp())),o}(this.serializer,e);const s=Kw(this.serializer,e);s&&(n.labels=s),this.Fo(n)}Wo(e){const n={};n.database=zo(this.serializer),n.removeTarget=e,this.Fo(n)}}class SE extends Yf{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=Bw(e.writeResults,e.commitTime),s=gt(e.commitTime);return this.listener.Zo(s,n)}return oe(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=zo(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>$w(this.serializer,s))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.eu=!1}nu(){if(this.eu)throw new D(y.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.co(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new D(y.UNKNOWN,r.toString())})}fo(e,n,s,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.fo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new D(y.UNKNOWN,i.toString())})}terminate(){this.eu=!0}}class DE{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(St(n),this.ru=!1):k("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=i,this._u.qr(o=>{s.enqueueAndForget(async()=>{yn(this)&&(k("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=q(a);c.du.add(4),await Ws(c),c.mu.set("Unknown"),c.du.delete(4),await Ci(c)}(this))})}),this.mu=new DE(s,r)}}async function Ci(t){if(yn(t))for(const e of t.wu)await e(!0)}async function Ws(t){for(const e of t.wu)await e(!1)}function Xf(t,e){const n=q(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),tc(n)?ec(n):ts(n).No()&&Za(n,e))}function Jf(t,e){const n=q(t),s=ts(n);n.fu.delete(e),s.No()&&Zf(n,e),n.fu.size===0&&(s.No()?s.$o():yn(n)&&n.mu.set("Unknown"))}function Za(t,e){t.gu.Ot(e.targetId),ts(t).jo(e)}function Zf(t,e){t.gu.Ot(e),ts(t).Wo(e)}function ec(t){t.gu=new Rw({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),ts(t).start(),t.mu.ou()}function tc(t){return yn(t)&&!ts(t).xo()&&t.fu.size>0}function yn(t){return q(t).du.size===0}function ed(t){t.gu=void 0}async function NE(t){t.fu.forEach((e,n)=>{Za(t,e)})}async function kE(t,e){ed(t),tc(t)?(t.mu.au(e),ec(t)):t.mu.set("Unknown")}async function RE(t,e,n){if(t.mu.set("Online"),e instanceof $f&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.fu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.fu.delete(o),s.gu.removeTarget(o))}(t,e)}catch(s){k("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await qr(t,s)}else if(e instanceof Er?t.gu.Kt(e):e instanceof Uf?t.gu.Jt(e):t.gu.zt(e),!n.isEqual($.min()))try{const s=await Wf(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.gu.Xt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.fu.get(c);l&&r.fu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.fu.get(a);if(!c)return;r.fu.set(a,c.withResumeToken(Ve.EMPTY_BYTE_STRING,c.snapshotVersion)),Zf(r,a);const l=new hn(c.target,a,1,c.sequenceNumber);Za(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){k("RemoteStore","Failed to raise snapshot:",s),await qr(t,s)}}async function qr(t,e,n){if(!Ks(e))throw e;t.du.add(1),await Ws(t),t.mu.set("Offline"),n||(n=()=>Wf(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{k("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await Ci(t)})}function td(t,e){return e().catch(n=>qr(t,n,e))}async function Si(t){const e=q(t),n=jt(e);let s=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;OE(e);)try{const r=await yE(e.localStore,s);if(r===null){e.lu.length===0&&n.$o();break}s=r.batchId,ME(e,r)}catch(r){await qr(e,r)}nd(e)&&sd(e)}function OE(t){return yn(t)&&t.lu.length<10}function ME(t,e){t.lu.push(e);const n=jt(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function nd(t){return yn(t)&&!jt(t).xo()&&t.lu.length>0}function sd(t){jt(t).start()}async function LE(t){jt(t).tu()}async function FE(t){const e=jt(t);for(const n of t.lu)e.Yo(n.mutations)}async function PE(t,e,n){const s=t.lu.shift(),r=Ga.from(s,e,n);await td(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Si(t)}async function VE(t,e){e&&jt(t).Jo&&await async function(n,s){if(r=s.code,kw(r)&&r!==y.ABORTED){const i=n.lu.shift();jt(n).Oo(),await td(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Si(n)}var r}(t,e),nd(t)&&sd(t)}async function Hl(t,e){const n=q(t);n.asyncQueue.verifyOperationInProgress(),k("RemoteStore","RemoteStore received new credentials");const s=yn(n);n.du.add(3),await Ws(n),s&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await Ci(n)}async function UE(t,e){const n=q(t);e?(n.du.delete(2),await Ci(n)):e||(n.du.add(2),await Ws(n),n.mu.set("Unknown"))}function ts(t){return t.yu||(t.yu=function(e,n,s){const r=q(e);return r.nu(),new CE(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{Jr:NE.bind(null,t),Zr:kE.bind(null,t),zo:RE.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),tc(t)?ec(t):t.mu.set("Unknown")):(await t.yu.stop(),ed(t))})),t.yu}function jt(t){return t.pu||(t.pu=function(e,n,s){const r=q(e);return r.nu(),new SE(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{Jr:LE.bind(null,t),Zr:VE.bind(null,t),Xo:FE.bind(null,t),Zo:PE.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await Si(t)):(await t.pu.stop(),t.lu.length>0&&(k("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new un,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new nc(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sc(t,e){if(St("AsyncQueue",`${e}: ${t}`),Ks(t))return new D(y.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this.comparator=e?(n,s)=>e(n,s)||O.comparator(n.key,s.key):(n,s)=>O.comparator(n.key,s.key),this.keyedMap=cs(),this.sortedSet=new be(this.comparator)}static emptySet(e){return new On(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof On)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new On;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(){this.Iu=new be(O.comparator)}track(e){const n=e.doc.key,s=this.Iu.get(n);s?e.type!==0&&s.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&s.type!==1?this.Iu=this.Iu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Iu=this.Iu.remove(n):e.type===1&&s.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):P():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,s)=>{e.push(s)}),e}}class qn{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new qn(e,n,On.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&wi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(){this.Eu=void 0,this.listeners=[]}}class BE{constructor(){this.queries=new es(e=>If(e),wi),this.onlineState="Unknown",this.Au=new Set}}async function jE(t,e){const n=q(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new $E),r)try{i.Eu=await n.onListen(s)}catch(o){const a=sc(o,`Initialization of query '${qo(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Ru(n.onlineState),i.Eu&&e.vu(i.Eu)&&rc(n)}async function qE(t,e){const n=q(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function HE(t,e){const n=q(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.vu(r)&&(s=!0);o.Eu=r}}s&&rc(n)}function KE(t,e,n){const s=q(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function rc(t){t.Au.forEach(e=>{e.next()})}class zE{constructor(e,n,s){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new qn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.xu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=qn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e){this.key=e}}class id{constructor(e){this.key=e}}class GE{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=G(),this.mutatedKeys=G(),this.Ku=Cf(e),this.Gu=new On(this.Ku)}get Qu(){return this.Lu}zu(e,n){const s=n?n.ju:new Kl,r=n?n.Gu:this.Gu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,f)=>{const p=r.get(u),g=Ei(this.query,f)?f:null,S=!!p&&this.mutatedKeys.has(p.key),b=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let R=!1;p&&g?p.data.isEqual(g.data)?S!==b&&(s.track({type:3,doc:g}),R=!0):this.Wu(p,g)||(s.track({type:2,doc:g}),R=!0,(c&&this.Ku(g,c)>0||l&&this.Ku(g,l)<0)&&(a=!0)):!p&&g?(s.track({type:0,doc:g}),R=!0):p&&!g&&(s.track({type:1,doc:p}),R=!0,(c||l)&&(a=!0)),R&&(g?(o=o.add(g),i=b?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Gu:o,ju:s,Mi:a,mutatedKeys:i}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const i=e.ju.Tu();i.sort((l,u)=>function(f,p){const g=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return P()}};return g(f)-g(p)}(l.type,u.type)||this.Ku(l.doc,u.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new qn(this.query,e.Gu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Kl,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=G(),this.Gu.forEach(s=>{this.Zu(s.key)&&(this.Uu=this.Uu.add(s.key))});const n=[];return e.forEach(s=>{this.Uu.has(s)||n.push(new id(s))}),this.Uu.forEach(s=>{e.has(s)||n.push(new rd(s))}),n}Xu(e){this.Lu=e.Wi,this.Uu=G();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return qn.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class WE{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class QE{constructor(e){this.key=e,this.ec=!1}}class YE{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new es(a=>If(a),wi),this.ic=new Map,this.rc=new Set,this.oc=new be(O.comparator),this.uc=new Map,this.cc=new Ya,this.ac={},this.hc=new Map,this.lc=jn.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function XE(t,e){const n=a0(t);let s,r;const i=n.sc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.tc();else{const o=await vE(n.localStore,At(e));n.isPrimaryClient&&Xf(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await JE(n,e,s,a==="current",o.resumeToken)}return r}async function JE(t,e,n,s,r){t.dc=(f,p,g)=>async function(S,b,R,j){let te=b.view.zu(R);te.Mi&&(te=await Bl(S.localStore,b.query,!1).then(({documents:le})=>b.view.zu(le,te)));const F=j&&j.targetChanges.get(b.targetId),Z=b.view.applyChanges(te,S.isPrimaryClient,F);return Gl(S,b.targetId,Z.Yu),Z.snapshot}(t,f,p,g);const i=await Bl(t.localStore,e,!0),o=new GE(e,i.Wi),a=o.zu(i.documents),c=Gs.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);Gl(t,n,l.Yu);const u=new WE(e,n,o);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),l.snapshot}async function ZE(t,e){const n=q(t),s=n.sc.get(e),r=n.ic.get(s.targetId);if(r.length>1)return n.ic.set(s.targetId,r.filter(i=>!wi(i,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Go(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Jf(n.remoteStore,s.targetId),Wo(n,s.targetId)}).catch(Hs)):(Wo(n,s.targetId),await Go(n.localStore,s.targetId,!0))}async function e0(t,e,n){const s=c0(t);try{const r=await function(i,o){const a=q(i),c=ve.now(),l=o.reduce((p,g)=>p.add(g.key),G());let u,f;return a.persistence.runTransaction("Locally write mutations","readwrite",p=>{let g=Dt(),S=G();return a.Ki.getEntries(p,l).next(b=>{g=b,g.forEach((R,j)=>{j.isValidDocument()||(S=S.add(R))})}).next(()=>a.localDocuments.getOverlayedDocuments(p,g)).next(b=>{u=b;const R=[];for(const j of o){const te=Sw(j,u.get(j.key).overlayedDocument);te!=null&&R.push(new Kt(j.key,te,mf(te.value.mapValue),it.exists(!0)))}return a.mutationQueue.addMutationBatch(p,c,R,o)}).next(b=>{f=b;const R=b.applyToLocalDocumentSet(u,S);return a.documentOverlayCache.saveOverlays(p,b.batchId,R)})}).then(()=>({batchId:f.batchId,changes:Af(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.ac[i.currentUser.toKey()];c||(c=new be(J)),c=c.insert(o,a),i.ac[i.currentUser.toKey()]=c}(s,r.batchId,n),await Qs(s,r.changes),await Si(s.remoteStore)}catch(r){const i=sc(r,"Failed to persist write");n.reject(i)}}async function od(t,e){const n=q(t);try{const s=await gE(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.uc.get(i);o&&(oe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ec=!0:r.modifiedDocuments.size>0?oe(o.ec):r.removedDocuments.size>0&&(oe(o.ec),o.ec=!1))}),await Qs(n,s,e)}catch(s){await Hs(s)}}function zl(t,e,n){const s=q(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.sc.forEach((i,o)=>{const a=o.view.Ru(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=q(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const f of u.listeners)f.Ru(o)&&(c=!0)}),c&&rc(a)}(s.eventManager,e),r.length&&s.nc.zo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function t0(t,e,n){const s=q(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.uc.get(e),i=r&&r.key;if(i){let o=new be(O.comparator);o=o.insert(i,ke.newNoDocument(i,$.min()));const a=G().add(i),c=new _i($.min(),new Map,new we(J),o,a);await od(s,c),s.oc=s.oc.remove(i),s.uc.delete(e),ic(s)}else await Go(s.localStore,e,!1).then(()=>Wo(s,e,n)).catch(Hs)}async function n0(t,e){const n=q(t),s=e.batch.batchId;try{const r=await pE(n.localStore,e);cd(n,s,null),ad(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Qs(n,r)}catch(r){await Hs(r)}}async function s0(t,e,n){const s=q(t);try{const r=await function(i,o){const a=q(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(oe(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);cd(s,e,n),ad(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Qs(s,r)}catch(r){await Hs(r)}}function ad(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function cd(t,e,n){const s=q(t);let r=s.ac[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.ac[s.currentUser.toKey()]=r}}function Wo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc.wc(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(s=>{t.cc.containsKey(s)||ld(t,s)})}function ld(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(Jf(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),ic(t))}function Gl(t,e,n){for(const s of n)s instanceof rd?(t.cc.addReference(s.key,e),r0(t,s)):s instanceof id?(k("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||ld(t,s.key)):P()}function r0(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(k("SyncEngine","New document in limbo: "+n),t.rc.add(s),ic(t))}function ic(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new O(ie.fromString(e)),s=t.lc.next();t.uc.set(s,new QE(n)),t.oc=t.oc.insert(n,s),Xf(t.remoteStore,new hn(At(Ha(n.path)),s,2,$a.ct))}}async function Qs(t,e,n){const s=q(t),r=[],i=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,c)=>{o.push(s.dc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=Ja.Di(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.nc.zo(r),await async function(a,c){const l=q(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>T.forEach(c,f=>T.forEach(f.Vi,p=>l.persistence.referenceDelegate.addReference(u,f.targetId,p)).next(()=>T.forEach(f.Si,p=>l.persistence.referenceDelegate.removeReference(u,f.targetId,p)))))}catch(u){if(!Ks(u))throw u;k("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const f=u.targetId;if(!u.fromCache){const p=l.Li.get(f),g=p.snapshotVersion,S=p.withLastLimboFreeSnapshotVersion(g);l.Li=l.Li.insert(f,S)}}}(s.localStore,i))}async function i0(t,e){const n=q(t);if(!n.currentUser.isEqual(e)){k("SyncEngine","User change. New user:",e.toKey());const s=await Gf(n.localStore,e);n.currentUser=e,function(r,i){r.hc.forEach(o=>{o.forEach(a=>{a.reject(new D(y.CANCELLED,i))})}),r.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Qs(n,s.Qi)}}function o0(t,e){const n=q(t),s=n.uc.get(e);if(s&&s.ec)return G().add(s.key);{let r=G();const i=n.ic.get(e);if(!i)return r;for(const o of i){const a=n.sc.get(o);r=r.unionWith(a.view.Qu)}return r}}function a0(t){const e=q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=od.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=o0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=t0.bind(null,e),e.nc.zo=HE.bind(null,e.eventManager),e.nc.wc=KE.bind(null,e.eventManager),e}function c0(t){const e=q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=n0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=s0.bind(null,e),e}class Wl{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ii(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return dE(this.persistence,new hE,e.initialUser,this.serializer)}createPersistence(e){return new lE(Xa.Fs,this.serializer)}createSharedClientState(e){return new EE}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class l0{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>zl(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=i0.bind(null,this.syncEngine),await UE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new BE}createDatastore(e){const n=Ii(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new IE(r));var r;return function(i,o,a,c){return new AE(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>zl(this.syncEngine,a,0),o=ql.D()?new ql:new bE,new xE(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new YE(s,r,i,o,a,c);return l&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=q(e);k("RemoteStore","RemoteStore shutting down."),n.du.add(5),await Ws(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):St("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Ne.UNAUTHENTICATED,this.clientId=ff.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{k("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(k("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new D(y.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new un;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=sc(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function ro(t,e){t.asyncQueue.verifyOperationInProgress(),k("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Gf(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ql(t,e){t.asyncQueue.verifyOperationInProgress();const n=await d0(t);k("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Hl(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Hl(e.remoteStore,i)),t._onlineComponents=e}function f0(t){return t.name==="FirebaseError"?t.code===y.FAILED_PRECONDITION||t.code===y.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function d0(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){k("FirestoreClient","Using user provided OfflineComponentProvider");try{await ro(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!f0(n))throw n;Pr("Error using user provided cache. Falling back to memory cache: "+n),await ro(t,new Wl)}}else k("FirestoreClient","Using default OfflineComponentProvider"),await ro(t,new Wl);return t._offlineComponents}async function ud(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(k("FirestoreClient","Using user provided OnlineComponentProvider"),await Ql(t,t._uninitializedComponentsProvider._online)):(k("FirestoreClient","Using default OnlineComponentProvider"),await Ql(t,new l0))),t._onlineComponents}function p0(t){return ud(t).then(e=>e.syncEngine)}async function Yl(t){const e=await ud(t),n=e.eventManager;return n.onListen=XE.bind(null,e.syncEngine),n.onUnlisten=ZE.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(t,e,n){if(!n)throw new D(y.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function g0(t,e,n,s){if(e===!0&&s===!0)throw new D(y.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Jl(t){if(!O.isDocumentKey(t))throw new D(y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Zl(t){if(O.isDocumentKey(t))throw new D(y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ai(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":P()}function Ft(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new D(y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ai(t);throw new D(y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new D(y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new D(y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,g0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new eu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new D(y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new D(y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new eu(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Vv;switch(n.type){case"firstParty":return new jv(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new D(y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Xl.get(e);n&&(k("ComponentProvider","Removing Datastore"),Xl.delete(e),n.terminate())}(this),Promise.resolve()}}function m0(t,e,n,s={}){var r;const i=(t=Ft(t,Di))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Pr("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Ne.MOCK_USER;else{o=Tm(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new D(y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ne(c)}t._authCredentials=new Uv(new hf(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new He(this.firestore,e,this._key)}}class vn{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new vn(this.firestore,e,this._query)}}class Pt extends vn{constructor(e,n,s){super(e,n,Ha(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new He(this.firestore,null,new O(e))}withConverter(e){return new Pt(this.firestore,e,this._path)}}function y0(t,e,...n){if(t=mt(t),hd("collection","path",e),t instanceof Di){const s=ie.fromString(e,...n);return Zl(s),new Pt(t,null,s)}{if(!(t instanceof He||t instanceof Pt))throw new D(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ie.fromString(e,...n));return Zl(s),new Pt(t.firestore,null,s)}}function Qo(t,e,...n){if(t=mt(t),arguments.length===1&&(e=ff.A()),hd("doc","path",e),t instanceof Di){const s=ie.fromString(e,...n);return Jl(s),new He(t,null,new O(s))}{if(!(t instanceof He||t instanceof Pt))throw new D(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ie.fromString(e,...n));return Jl(s),new He(t.firestore,t instanceof Pt?t.converter:null,new O(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Qf(this,"async_queue_retry"),this.qc=()=>{const n=so();n&&k("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=so();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=so();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new un;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Ks(e))throw e;k("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(s=>{this.Mc=s,this.Fc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw St("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Fc=!1,s))));return this.Nc=n,n}enqueueAfterDelay(e,n,s){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const r=nc.createAndSchedule(this,e,n,s,i=>this.Qc(i));return this.$c.push(r),r}Uc(){this.Mc&&P()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function tu(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Hn extends Di{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new v0,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||dd(this),this._firestoreClient.terminate()}}function w0(t,e){const n=typeof t=="object"?t:Sy(),s=typeof t=="string"?t:e||"(default)",r=Ty(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=wm("firestore");i&&m0(r,...i)}return r}function fd(t){return t._firestoreClient||dd(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function dd(t){var e,n,s;const r=t._freezeSettings(),i=function(o,a,c,l){return new tw(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new h0(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Kn(Ve.fromBase64String(e))}catch(n){throw new D(y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Kn(Ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new D(y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Oe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new D(y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new D(y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0=/^__.*__$/;class b0{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Kt(e,this.data,this.fieldMask,n,this.fieldTransforms):new zs(e,this.data,n,this.fieldTransforms)}}class pd{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Kt(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function gd(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw P()}}class cc{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Jc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new cc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Zc({path:s,ta:!1});return r.ea(e),r}na(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Zc({path:s,ta:!1});return r.Jc(),r}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return Hr(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(gd(this.Yc)&&E0.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class T0{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Ii(e)}ua(e,n,s,r=!1){return new cc({Yc:e,methodName:n,oa:s,path:Oe.emptyPath(),ta:!1,ra:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lc(t){const e=t._freezeSettings(),n=Ii(t._databaseId);return new T0(t._databaseId,!!e.ignoreUndefinedProperties,n)}function _0(t,e,n,s,r,i={}){const o=t.ua(i.merge||i.mergeFields?2:0,e,n,r);uc("Data must be an object, but it was:",o,s);const a=md(s,o);let c,l;if(i.merge)c=new We(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const f of i.mergeFields){const p=Yo(e,f,n);if(!o.contains(p))throw new D(y.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);vd(u,p)||u.push(p)}c=new We(u),l=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,l=o.fieldTransforms;return new b0(new qe(a),c,l)}class Ni extends oc{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ni}}function I0(t,e,n,s){const r=t.ua(1,e,n);uc("Data must be an object, but it was:",r,s);const i=[],o=qe.empty();mn(s,(c,l)=>{const u=hc(e,c,n);l=mt(l);const f=r.na(u);if(l instanceof Ni)i.push(u);else{const p=Ys(l,f);p!=null&&(i.push(u),o.set(u,p))}});const a=new We(i);return new pd(o,a,r.fieldTransforms)}function C0(t,e,n,s,r,i){const o=t.ua(1,e,n),a=[Yo(e,s,n)],c=[r];if(i.length%2!=0)throw new D(y.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(Yo(e,i[p])),c.push(i[p+1]);const l=[],u=qe.empty();for(let p=a.length-1;p>=0;--p)if(!vd(l,a[p])){const g=a[p];let S=c[p];S=mt(S);const b=o.na(g);if(S instanceof Ni)l.push(g);else{const R=Ys(S,b);R!=null&&(l.push(g),u.set(g,R))}}const f=new We(l);return new pd(u,f,o.fieldTransforms)}function S0(t,e,n,s=!1){return Ys(n,t.ua(s?4:3,e))}function Ys(t,e){if(yd(t=mt(t)))return uc("Unsupported field value:",e,t),md(t,e);if(t instanceof oc)return function(n,s){if(!gd(s.Yc))throw s.ia(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ia(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Ys(o,s.sa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=mt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Ew(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=ve.fromDate(n);return{timestampValue:jr(s.serializer,r)}}if(n instanceof ve){const r=new ve(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:jr(s.serializer,r)}}if(n instanceof ac)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Kn)return{bytesValue:Bf(s.serializer,n._byteString)};if(n instanceof He){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ia(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Qa(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ia(`Unsupported field value: ${Ai(n)}`)}(t,e)}function md(t,e){const n={};return df(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):mn(t,(s,r)=>{const i=Ys(r,e.Xc(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function yd(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ve||t instanceof ac||t instanceof Kn||t instanceof He||t instanceof oc)}function uc(t,e,n){if(!yd(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Ai(n);throw s==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+s)}}function Yo(t,e,n){if((e=mt(e))instanceof xi)return e._internalPath;if(typeof e=="string")return hc(t,e);throw Hr("Field path arguments must be of type string or ",t,!1,void 0,n)}const A0=new RegExp("[~\\*/\\[\\]]");function hc(t,e,n){if(e.search(A0)>=0)throw Hr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new xi(...e.split("."))._internalPath}catch{throw Hr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Hr(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new D(y.INVALID_ARGUMENT,a+t+c)}function vd(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new He(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new D0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(fc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class D0 extends wd{data(){return super.data()}}function fc(t,e){return typeof e=="string"?hc(t,e):e instanceof xi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x0(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new D(y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class dc{}class Ed extends dc{}function N0(t,e,...n){let s=[];e instanceof dc&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof gc).length,o=r.filter(a=>a instanceof pc).length;if(i>1||i>0&&o>0)throw new D(y.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class pc extends Ed{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new pc(e,n,s)}_apply(e){const n=this._parse(e);return bd(e._query,n),new vn(e.firestore,e.converter,Bo(e._query,n))}_parse(e){const n=lc(e.firestore);return function(r,i,o,a,c,l,u){let f;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new D(y.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){su(u,l);const p=[];for(const g of u)p.push(nu(a,r,g));f={arrayValue:{values:p}}}else f=nu(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||su(u,l),f=S0(o,i,u,l==="in"||l==="not-in");return ye.create(c,l,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class gc extends dc{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new gc(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:ot.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)bd(i,a),i=Bo(i,a)}(e._query,n),new vn(e.firestore,e.converter,Bo(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class mc extends Ed{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new mc(e,n)}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new D(y.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new D(y.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new kn(r,i);return function(a,c){if(Ka(a)===null){const l=vi(a);l!==null&&Td(a,l,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new vn(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new Zn(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function k0(t,e="asc"){const n=e,s=fc("orderBy",t);return mc._create(s,n)}function nu(t,e,n){if(typeof(n=mt(n))=="string"){if(n==="")throw new D(y.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!_f(e)&&n.indexOf("/")!==-1)throw new D(y.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(ie.fromString(n));if(!O.isDocumentKey(s))throw new D(y.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Sl(t,new O(s))}if(n instanceof He)return Sl(t,n._key);throw new D(y.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ai(n)}.`)}function su(t,e){if(!Array.isArray(t)||t.length===0)throw new D(y.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function bd(t,e){if(e.isInequality()){const s=vi(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new D(y.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=Ka(t);i!==null&&Td(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new D(y.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new D(y.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Td(t,e,n){if(!n.isEqual(e))throw new D(y.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class R0{convertValue(e,n="none"){switch(pn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Un(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw P()}}convertObject(e,n){const s={};return mn(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new ac(ge(e.latitude),ge(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=gf(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ns(e));default:return null}}convertTimestamp(e){const n=Bt(e);return new ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ie.fromString(e);oe(zf(s));const r=new ks(s.get(1),s.get(3)),i=new O(s.popFirst(5));return r.isEqual(n)||St(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O0(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _d extends wd{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new br(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(fc("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class br extends _d{data(e={}){return super.data(e)}}class M0{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new ls(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new br(this._firestore,this._userDataWriter,s.key,s,new ls(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new D(y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new br(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ls(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new br(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ls(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:L0(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function L0(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return P()}}class Id extends R0{constructor(e){super(),this.firestore=e}convertBytes(e){return new Kn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new He(this.firestore,null,n)}}function F0(t,e,n,...s){t=Ft(t,He);const r=Ft(t.firestore,Hn),i=lc(r);let o;return o=typeof(e=mt(e))=="string"||e instanceof xi?C0(i,"updateDoc",t._key,e,n,s):I0(i,"updateDoc",t._key,e),yc(r,[o.toMutation(t._key,it.exists(!0))])}function P0(t){return yc(Ft(t.firestore,Hn),[new za(t._key,it.none())])}function V0(t,e){const n=Ft(t.firestore,Hn),s=Qo(t),r=O0(t.converter,e);return yc(n,[_0(lc(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,it.exists(!1))]).then(()=>s)}function U0(t,...e){var n,s,r;t=mt(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||tu(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(tu(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(s=f.error)===null||s===void 0?void 0:s.bind(f),e[o+2]=(r=f.complete)===null||r===void 0?void 0:r.bind(f)}let c,l,u;if(t instanceof He)l=Ft(t.firestore,Hn),u=Ha(t._key.path),c={next:f=>{e[o]&&e[o]($0(l,t,f))},error:e[o+1],complete:e[o+2]};else{const f=Ft(t,vn);l=Ft(f.firestore,Hn),u=f._query;const p=new Id(l);c={next:g=>{e[o]&&e[o](new M0(l,p,f,g))},error:e[o+1],complete:e[o+2]},x0(t._query)}return function(f,p,g,S){const b=new u0(S),R=new zE(p,b,g);return f.asyncQueue.enqueueAndForget(async()=>jE(await Yl(f),R)),()=>{b.yc(),f.asyncQueue.enqueueAndForget(async()=>qE(await Yl(f),R))}}(fd(l),u,a,c)}function yc(t,e){return function(n,s){const r=new un;return n.asyncQueue.enqueueAndForget(async()=>e0(await p0(n),s,r)),r.promise}(fd(t),e)}function $0(t,e,n){const s=n.docs.get(e._key),r=new Id(t);return new _d(t,r,e._key,s,new ls(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Jn=n})(Cy),Dr(new Ts("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Hn(new $v(n.getProvider("auth-internal")),new Hv(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new D(y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ks(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Nn(bl,"3.10.0",t),Nn(bl,"3.10.0","esm2017")})();var B0="firebase",j0="9.19.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nn(B0,j0,"app");const q0={apiKey:"AIzaSyAemUWfaz5Un_nLIBu5WVc9H0SsvzXT5Zk",authDomain:"vue3-todo-app-b426e.firebaseapp.com",projectId:"vue3-todo-app-b426e",storageBucket:"vue3-todo-app-b426e.appspot.com",messagingSenderId:"963368505346",appId:"1:963368505346:web:d3b1d73bc11ceb3976971b"},H0=ih(q0),K0=w0(H0);const z0={class:"my-todo"},G0=xe("div",{class:"title has-text-centered"}," My Todo List ",-1),W0=["onSubmit"],Q0={class:"field is-grouped mb-5"},Y0={class:"control is-expanded"},X0={class:"control"},J0=["disabled"],Z0={class:"card-content"},eb={class:"content"},tb={class:"columns is-mobile is-vcentered"},nb={class:"column is-5 has-text-right"},sb=["onClick"],rb=["onClick"],ib={__name:"App",setup(t){const e=y0(K0,"todos"),n=N0(e,k0("date","desc")),s=Rc([]);da(()=>{U0(n,c=>{const l=[];c.forEach(u=>{const f={id:u.id,text:u.data().text,done:u.data().done};l.push(f)}),s.value=l})});const r=Rc(""),i=()=>{V0(e,{text:r.value,done:!1,date:Date.now()}),r.value=""},o=c=>{P0(Qo(e,c))},a=c=>{const l=s.value.findIndex(u=>u.id===c);F0(Qo(e,c),{done:!s.value[l].done})};return(c,l)=>(Ui(),$i("div",z0,[G0,xe("form",{onSubmit:im(i,["prevent"])},[xe("div",Q0,[xe("p",Y0,[Jp(xe("input",{"onUpdate:modelValue":l[0]||(l[0]=u=>r.value=u),class:"input",type:"text",placeholder:"Add Todo"},null,512),[[nm,r.value]])]),xe("p",X0,[xe("button",{disabled:!r.value,class:"button is-info"}," Add ",8,J0)])])],40,W0),(Ui(!0),$i(tt,null,eg(s.value,u=>(Ui(),$i("div",{key:u.id,class:Cn(["card mb-5",{"has-background-success-light":u.done}])},[xe("div",Z0,[xe("div",eb,[xe("div",tb,[xe("div",{class:Cn(["column",{"has-text-success line-through":u.done}])},Od(u.text),3),xe("div",nb,[xe("button",{onClick:f=>a(u.id),class:Cn(["button",u.done?"is-success":"is-light"])}," ✓ ",10,sb),xe("button",{onClick:f=>o(u.id),class:"button is-danger ml-2"}," ✗ ",8,rb)])])])])],2))),128))]))}};cm(ib).mount("#app");
