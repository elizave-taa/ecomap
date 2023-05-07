var $6=Object.defineProperty;var H6=(n,t,r)=>t in n?$6(n,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[t]=r;var nd=(n,t,r)=>(H6(n,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))s(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const p of f.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function r(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerpolicy&&(f.referrerPolicy=d.referrerpolicy),d.crossorigin==="use-credentials"?f.credentials="include":d.crossorigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(d){if(d.ep)return;d.ep=!0;const f=r(d);fetch(d.href,f)}})();function cc(n,t){const r=Object.create(null),s=n.split(",");for(let d=0;d<s.length;d++)r[s[d]]=!0;return t?d=>!!r[d.toLowerCase()]:d=>!!r[d]}const U6="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",G6=cc(U6);function kr(n){if(Se(n)){const t={};for(let r=0;r<n.length;r++){const s=n[r],d=Ft(s)?Y6(s):kr(s);if(d)for(const f in d)t[f]=d[f]}return t}else{if(Ft(n))return n;if(rt(n))return n}}const W6=/;(?![^(]*\))/g,K6=/:([^]+)/,q6=/\/\*.*?\*\//gs;function Y6(n){const t={};return n.replace(q6,"").split(W6).forEach(r=>{if(r){const s=r.split(K6);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Le(n){let t="";if(Ft(n))t=n;else if(Se(n))for(let r=0;r<n.length;r++){const s=Le(n[r]);s&&(t+=s+" ")}else if(rt(n))for(const r in n)n[r]&&(t+=r+" ");return t.trim()}function UD(n){if(!n)return null;let{class:t,style:r}=n;return t&&!Ft(t)&&(n.class=Le(t)),r&&(n.style=kr(r)),n}const Q6="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",GD=cc(Q6);function WD(n){return!!n||n===""}function Z6(n,t){if(n.length!==t.length)return!1;let r=!0;for(let s=0;r&&s<n.length;s++)r=ko(n[s],t[s]);return r}function ko(n,t){if(n===t)return!0;let r=BT(n),s=BT(t);if(r||s)return r&&s?n.getTime()===t.getTime():!1;if(r=zd(n),s=zd(t),r||s)return n===t;if(r=Se(n),s=Se(t),r||s)return r&&s?Z6(n,t):!1;if(r=rt(n),s=rt(t),r||s){if(!r||!s)return!1;const d=Object.keys(n).length,f=Object.keys(t).length;if(d!==f)return!1;for(const p in n){const v=n.hasOwnProperty(p),m=t.hasOwnProperty(p);if(v&&!m||!v&&m||!ko(n[p],t[p]))return!1}}return String(n)===String(t)}function su(n,t){return n.findIndex(r=>ko(r,t))}const Ue=n=>Ft(n)?n:n==null?"":Se(n)||rt(n)&&(n.toString===qD||!Be(n.toString))?JSON.stringify(n,KD,2):String(n),KD=(n,t)=>t&&t.__v_isRef?KD(n,t.value):Bl(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((r,[s,d])=>(r[`${s} =>`]=d,r),{})}:Da(t)?{[`Set(${t.size})`]:[...t.values()]}:rt(t)&&!Se(t)&&!_f(t)?String(t):t,Pt={},Rl=[],vi=()=>{},J6=()=>!1,X6=/^on[^a-z]/,yo=n=>X6.test(n),Ek=n=>n.startsWith("onUpdate:"),at=Object.assign,Tk=(n,t)=>{const r=n.indexOf(t);r>-1&&n.splice(r,1)},e7=Object.prototype.hasOwnProperty,ht=(n,t)=>e7.call(n,t),Se=Array.isArray,Bl=n=>dc(n)==="[object Map]",Da=n=>dc(n)==="[object Set]",BT=n=>dc(n)==="[object Date]",t7=n=>dc(n)==="[object RegExp]",Be=n=>typeof n=="function",Ft=n=>typeof n=="string",zd=n=>typeof n=="symbol",rt=n=>n!==null&&typeof n=="object",sp=n=>rt(n)&&Be(n.then)&&Be(n.catch),qD=Object.prototype.toString,dc=n=>qD.call(n),n7=n=>dc(n).slice(8,-1),_f=n=>dc(n)==="[object Object]",xk=n=>Ft(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ll=cc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ap=n=>{const t=Object.create(null);return r=>t[r]||(t[r]=n(r))},i7=/-(\w)/g,Wn=ap(n=>n.replace(i7,(t,r)=>r?r.toUpperCase():"")),r7=/\B([A-Z])/g,ni=ap(n=>n.replace(r7,"-$1").toLowerCase()),uc=ap(n=>n.charAt(0).toUpperCase()+n.slice(1)),ga=ap(n=>n?`on${uc(n)}`:""),Gl=(n,t)=>!Object.is(n,t),is=(n,t)=>{for(let r=0;r<n.length;r++)n[r](t)},Cf=(n,t,r)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,value:r})},Fd=n=>{const t=parseFloat(n);return isNaN(t)?n:t},yf=n=>{const t=Ft(n)?Number(n):NaN;return isNaN(t)?n:t};let LT;const o7=()=>LT||(LT=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Mi;class lp{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Mi,!t&&Mi&&(this.index=(Mi.scopes||(Mi.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const r=Mi;try{return Mi=this,t()}finally{Mi=r}}}on(){Mi=this}off(){Mi=this.parent}stop(t){if(this._active){let r,s;for(r=0,s=this.effects.length;r<s;r++)this.effects[r].stop();for(r=0,s=this.cleanups.length;r<s;r++)this.cleanups[r]();if(this.scopes)for(r=0,s=this.scopes.length;r<s;r++)this.scopes[r].stop(!0);if(!this.detached&&this.parent&&!t){const d=this.parent.scopes.pop();d&&d!==this&&(this.parent.scopes[this.index]=d,d.index=this.index)}this.parent=void 0,this._active=!1}}}function cp(n){return new lp(n)}function YD(n,t=Mi){t&&t.active&&t.effects.push(n)}function dp(){return Mi}function Sk(n){Mi&&Mi.cleanups.push(n)}const Ok=n=>{const t=new Set(n);return t.w=0,t.n=0,t},QD=n=>(n.w&ps)>0,ZD=n=>(n.n&ps)>0,s7=({deps:n})=>{if(n.length)for(let t=0;t<n.length;t++)n[t].w|=ps},a7=n=>{const{deps:t}=n;if(t.length){let r=0;for(let s=0;s<t.length;s++){const d=t[s];QD(d)&&!ZD(d)?d.delete(n):t[r++]=d,d.w&=~ps,d.n&=~ps}t.length=r}},Af=new WeakMap;let gd=0,ps=1;const fv=30;let mr;const ma=Symbol(""),pv=Symbol("");class hc{constructor(t,r=null,s){this.fn=t,this.scheduler=r,this.active=!0,this.deps=[],this.parent=void 0,YD(this,s)}run(){if(!this.active)return this.fn();let t=mr,r=rs;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=mr,mr=this,rs=!0,ps=1<<++gd,gd<=fv?s7(this):jT(this),this.fn()}finally{gd<=fv&&a7(this),ps=1<<--gd,mr=this.parent,rs=r,this.parent=void 0,this.deferStop&&this.stop()}}stop(){mr===this?this.deferStop=!0:this.active&&(jT(this),this.onStop&&this.onStop(),this.active=!1)}}function jT(n){const{deps:t}=n;if(t.length){for(let r=0;r<t.length;r++)t[r].delete(n);t.length=0}}function JD(n,t){n.effect&&(n=n.effect.fn);const r=new hc(n);t&&(at(r,t),t.scope&&YD(r,t.scope)),(!t||!t.lazy)&&r.run();const s=r.run.bind(r);return s.effect=r,s}function XD(n){n.effect.stop()}let rs=!0;const eI=[];function fc(){eI.push(rs),rs=!1}function pc(){const n=eI.pop();rs=n===void 0?!0:n}function oi(n,t,r){if(rs&&mr){let s=Af.get(n);s||Af.set(n,s=new Map);let d=s.get(r);d||s.set(r,d=Ok()),tI(d)}}function tI(n,t){let r=!1;gd<=fv?ZD(n)||(n.n|=ps,r=!QD(n)):r=!n.has(mr),r&&(n.add(mr),mr.deps.push(n))}function Jr(n,t,r,s,d,f){const p=Af.get(n);if(!p)return;let v=[];if(t==="clear")v=[...p.values()];else if(r==="length"&&Se(n)){const m=Number(s);p.forEach((w,C)=>{(C==="length"||C>=m)&&v.push(w)})}else switch(r!==void 0&&v.push(p.get(r)),t){case"add":Se(n)?xk(r)&&v.push(p.get("length")):(v.push(p.get(ma)),Bl(n)&&v.push(p.get(pv)));break;case"delete":Se(n)||(v.push(p.get(ma)),Bl(n)&&v.push(p.get(pv)));break;case"set":Bl(n)&&v.push(p.get(ma));break}if(v.length===1)v[0]&&gv(v[0]);else{const m=[];for(const w of v)w&&m.push(...w);gv(Ok(m))}}function gv(n,t){const r=Se(n)?n:[...n];for(const s of r)s.computed&&zT(s);for(const s of r)s.computed||zT(s)}function zT(n,t){(n!==mr||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}function l7(n,t){var r;return(r=Af.get(n))===null||r===void 0?void 0:r.get(t)}const c7=cc("__proto__,__v_isRef,__isVue"),nI=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(zd)),d7=up(),u7=up(!1,!0),h7=up(!0),f7=up(!0,!0),FT=p7();function p7(){const n={};return["includes","indexOf","lastIndexOf"].forEach(t=>{n[t]=function(...r){const s=it(this);for(let f=0,p=this.length;f<p;f++)oi(s,"get",f+"");const d=s[t](...r);return d===-1||d===!1?s[t](...r.map(it)):d}}),["push","pop","shift","unshift","splice"].forEach(t=>{n[t]=function(...r){fc();const s=it(this)[t].apply(this,r);return pc(),s}}),n}function g7(n){const t=it(this);return oi(t,"has",n),t.hasOwnProperty(n)}function up(n=!1,t=!1){return function(s,d,f){if(d==="__v_isReactive")return!n;if(d==="__v_isReadonly")return n;if(d==="__v_isShallow")return t;if(d==="__v_raw"&&f===(n?t?cI:lI:t?aI:sI).get(s))return s;const p=Se(s);if(!n){if(p&&ht(FT,d))return Reflect.get(FT,d,f);if(d==="hasOwnProperty")return g7}const v=Reflect.get(s,d,f);return(zd(d)?nI.has(d):c7(d))||(n||oi(s,"get",d),t)?v:en(v)?p&&xk(d)?v:v.value:rt(v)?n?pp(v):nr(v):v}}const m7=iI(),b7=iI(!0);function iI(n=!1){return function(r,s,d,f){let p=r[s];if(gs(p)&&en(p)&&!en(d))return!1;if(!n&&(!Wl(d)&&!gs(d)&&(p=it(p),d=it(d)),!Se(r)&&en(p)&&!en(d)))return p.value=d,!0;const v=Se(r)&&xk(s)?Number(s)<r.length:ht(r,s),m=Reflect.set(r,s,d,f);return r===it(f)&&(v?Gl(d,p)&&Jr(r,"set",s,d):Jr(r,"add",s,d)),m}}function v7(n,t){const r=ht(n,t);n[t];const s=Reflect.deleteProperty(n,t);return s&&r&&Jr(n,"delete",t,void 0),s}function k7(n,t){const r=Reflect.has(n,t);return(!zd(t)||!nI.has(t))&&oi(n,"has",t),r}function w7(n){return oi(n,"iterate",Se(n)?"length":ma),Reflect.ownKeys(n)}const rI={get:d7,set:m7,deleteProperty:v7,has:k7,ownKeys:w7},oI={get:h7,set(n,t){return!0},deleteProperty(n,t){return!0}},_7=at({},rI,{get:u7,set:b7}),C7=at({},oI,{get:f7}),Dk=n=>n,hp=n=>Reflect.getPrototypeOf(n);function Dh(n,t,r=!1,s=!1){n=n.__v_raw;const d=it(n),f=it(t);r||(t!==f&&oi(d,"get",t),oi(d,"get",f));const{has:p}=hp(d),v=s?Dk:r?Pk:Vd;if(p.call(d,t))return v(n.get(t));if(p.call(d,f))return v(n.get(f));n!==d&&n.get(t)}function Ih(n,t=!1){const r=this.__v_raw,s=it(r),d=it(n);return t||(n!==d&&oi(s,"has",n),oi(s,"has",d)),n===d?r.has(n):r.has(n)||r.has(d)}function Ph(n,t=!1){return n=n.__v_raw,!t&&oi(it(n),"iterate",ma),Reflect.get(n,"size",n)}function VT(n){n=it(n);const t=it(this);return hp(t).has.call(t,n)||(t.add(n),Jr(t,"add",n,n)),this}function $T(n,t){t=it(t);const r=it(this),{has:s,get:d}=hp(r);let f=s.call(r,n);f||(n=it(n),f=s.call(r,n));const p=d.call(r,n);return r.set(n,t),f?Gl(t,p)&&Jr(r,"set",n,t):Jr(r,"add",n,t),this}function HT(n){const t=it(this),{has:r,get:s}=hp(t);let d=r.call(t,n);d||(n=it(n),d=r.call(t,n)),s&&s.call(t,n);const f=t.delete(n);return d&&Jr(t,"delete",n,void 0),f}function UT(){const n=it(this),t=n.size!==0,r=n.clear();return t&&Jr(n,"clear",void 0,void 0),r}function Mh(n,t){return function(s,d){const f=this,p=f.__v_raw,v=it(p),m=t?Dk:n?Pk:Vd;return!n&&oi(v,"iterate",ma),p.forEach((w,C)=>s.call(d,m(w),m(C),f))}}function Nh(n,t,r){return function(...s){const d=this.__v_raw,f=it(d),p=Bl(f),v=n==="entries"||n===Symbol.iterator&&p,m=n==="keys"&&p,w=d[n](...s),C=r?Dk:t?Pk:Vd;return!t&&oi(f,"iterate",m?pv:ma),{next(){const{value:y,done:E}=w.next();return E?{value:y,done:E}:{value:v?[C(y[0]),C(y[1])]:C(y),done:E}},[Symbol.iterator](){return this}}}}function Vo(n){return function(...t){return n==="delete"?!1:this}}function y7(){const n={get(f){return Dh(this,f)},get size(){return Ph(this)},has:Ih,add:VT,set:$T,delete:HT,clear:UT,forEach:Mh(!1,!1)},t={get(f){return Dh(this,f,!1,!0)},get size(){return Ph(this)},has:Ih,add:VT,set:$T,delete:HT,clear:UT,forEach:Mh(!1,!0)},r={get(f){return Dh(this,f,!0)},get size(){return Ph(this,!0)},has(f){return Ih.call(this,f,!0)},add:Vo("add"),set:Vo("set"),delete:Vo("delete"),clear:Vo("clear"),forEach:Mh(!0,!1)},s={get(f){return Dh(this,f,!0,!0)},get size(){return Ph(this,!0)},has(f){return Ih.call(this,f,!0)},add:Vo("add"),set:Vo("set"),delete:Vo("delete"),clear:Vo("clear"),forEach:Mh(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(f=>{n[f]=Nh(f,!1,!1),r[f]=Nh(f,!0,!1),t[f]=Nh(f,!1,!0),s[f]=Nh(f,!0,!0)}),[n,r,t,s]}const[A7,E7,T7,x7]=y7();function fp(n,t){const r=t?n?x7:T7:n?E7:A7;return(s,d,f)=>d==="__v_isReactive"?!n:d==="__v_isReadonly"?n:d==="__v_raw"?s:Reflect.get(ht(r,d)&&d in s?r:s,d,f)}const S7={get:fp(!1,!1)},O7={get:fp(!1,!0)},D7={get:fp(!0,!1)},I7={get:fp(!0,!0)},sI=new WeakMap,aI=new WeakMap,lI=new WeakMap,cI=new WeakMap;function P7(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function M7(n){return n.__v_skip||!Object.isExtensible(n)?0:P7(n7(n))}function nr(n){return gs(n)?n:gp(n,!1,rI,S7,sI)}function Ik(n){return gp(n,!1,_7,O7,aI)}function pp(n){return gp(n,!0,oI,D7,lI)}function dI(n){return gp(n,!0,C7,I7,cI)}function gp(n,t,r,s,d){if(!rt(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const f=d.get(n);if(f)return f;const p=M7(n);if(p===0)return n;const v=new Proxy(n,p===2?s:r);return d.set(n,v),v}function Xi(n){return gs(n)?Xi(n.__v_raw):!!(n&&n.__v_isReactive)}function gs(n){return!!(n&&n.__v_isReadonly)}function Wl(n){return!!(n&&n.__v_isShallow)}function mp(n){return Xi(n)||gs(n)}function it(n){const t=n&&n.__v_raw;return t?it(t):n}function ms(n){return Cf(n,"__v_skip",!0),n}const Vd=n=>rt(n)?nr(n):n,Pk=n=>rt(n)?pp(n):n;function Mk(n){rs&&mr&&(n=it(n),tI(n.dep||(n.dep=Ok())))}function bp(n,t){n=it(n);const r=n.dep;r&&gv(r)}function en(n){return!!(n&&n.__v_isRef===!0)}function os(n){return uI(n,!1)}function Nk(n){return uI(n,!0)}function uI(n,t){return en(n)?n:new N7(n,t)}class N7{constructor(t,r){this.__v_isShallow=r,this.dep=void 0,this.__v_isRef=!0,this._rawValue=r?t:it(t),this._value=r?t:Vd(t)}get value(){return Mk(this),this._value}set value(t){const r=this.__v_isShallow||Wl(t)||gs(t);t=r?t:it(t),Gl(t,this._rawValue)&&(this._rawValue=t,this._value=r?t:Vd(t),bp(this))}}function hI(n){bp(n)}function ss(n){return en(n)?n.value:n}const R7={get:(n,t,r)=>ss(Reflect.get(n,t,r)),set:(n,t,r,s)=>{const d=n[t];return en(d)&&!en(r)?(d.value=r,!0):Reflect.set(n,t,r,s)}};function vp(n){return Xi(n)?n:new Proxy(n,R7)}class B7{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:r,set:s}=t(()=>Mk(this),()=>bp(this));this._get=r,this._set=s}get value(){return this._get()}set value(t){this._set(t)}}function fI(n){return new B7(n)}function Rk(n){const t=Se(n)?new Array(n.length):{};for(const r in n)t[r]=Bk(n,r);return t}class L7{constructor(t,r,s){this._object=t,this._key=r,this._defaultValue=s,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return l7(it(this._object),this._key)}}function Bk(n,t,r){const s=n[t];return en(s)?s:new L7(n,t,r)}var pI;class j7{constructor(t,r,s,d){this._setter=r,this.dep=void 0,this.__v_isRef=!0,this[pI]=!1,this._dirty=!0,this.effect=new hc(t,()=>{this._dirty||(this._dirty=!0,bp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!d,this.__v_isReadonly=s}get value(){const t=it(this);return Mk(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}pI="__v_isReadonly";function z7(n,t,r=!1){let s,d;const f=Be(n);return f?(s=n,d=vi):(s=n.get,d=n.set),new j7(s,d,f||!d,r)}function gI(n,...t){}function mI(n,t){}function wr(n,t,r,s){let d;try{d=s?n(...s):n()}catch(f){Ts(f,t,r)}return d}function ri(n,t,r,s){if(Be(n)){const f=wr(n,t,r,s);return f&&sp(f)&&f.catch(p=>{Ts(p,t,r)}),f}const d=[];for(let f=0;f<n.length;f++)d.push(ri(n[f],t,r,s));return d}function Ts(n,t,r,s=!0){const d=t?t.vnode:null;if(t){let f=t.parent;const p=t.proxy,v=r;for(;f;){const w=f.ec;if(w){for(let C=0;C<w.length;C++)if(w[C](n,p,v)===!1)return}f=f.parent}const m=t.appContext.config.errorHandler;if(m){wr(m,null,10,[n,p,v]);return}}F7(n,r,d,s)}function F7(n,t,r,s=!0){console.error(n)}let $d=!1,mv=!1;const Gn=[];let Kr=0;const jl=[];let ho=null,ca=0;const bI=Promise.resolve();let Lk=null;function xs(n){const t=Lk||bI;return n?t.then(this?n.bind(this):n):t}function V7(n){let t=Kr+1,r=Gn.length;for(;t<r;){const s=t+r>>>1;Hd(Gn[s])<n?t=s+1:r=s}return t}function kp(n){(!Gn.length||!Gn.includes(n,$d&&n.allowRecurse?Kr+1:Kr))&&(n.id==null?Gn.push(n):Gn.splice(V7(n.id),0,n),vI())}function vI(){!$d&&!mv&&(mv=!0,Lk=bI.then(kI))}function $7(n){const t=Gn.indexOf(n);t>Kr&&Gn.splice(t,1)}function wp(n){Se(n)?jl.push(...n):(!ho||!ho.includes(n,n.allowRecurse?ca+1:ca))&&jl.push(n),vI()}function GT(n,t=$d?Kr+1:0){for(;t<Gn.length;t++){const r=Gn[t];r&&r.pre&&(Gn.splice(t,1),t--,r())}}function Ef(n){if(jl.length){const t=[...new Set(jl)];if(jl.length=0,ho){ho.push(...t);return}for(ho=t,ho.sort((r,s)=>Hd(r)-Hd(s)),ca=0;ca<ho.length;ca++)ho[ca]();ho=null,ca=0}}const Hd=n=>n.id==null?1/0:n.id,H7=(n,t)=>{const r=Hd(n)-Hd(t);if(r===0){if(n.pre&&!t.pre)return-1;if(t.pre&&!n.pre)return 1}return r};function kI(n){mv=!1,$d=!0,Gn.sort(H7);const t=vi;try{for(Kr=0;Kr<Gn.length;Kr++){const r=Gn[Kr];r&&r.active!==!1&&wr(r,null,14)}}finally{Kr=0,Gn.length=0,Ef(),$d=!1,Lk=null,(Gn.length||jl.length)&&kI()}}let da,Rh=[];function jk(n,t){var r,s;da=n,da?(da.enabled=!0,Rh.forEach(({event:d,args:f})=>da.emit(d,...f)),Rh=[]):typeof window<"u"&&window.HTMLElement&&!(!((s=(r=window.navigator)===null||r===void 0?void 0:r.userAgent)===null||s===void 0)&&s.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(f=>{jk(f,t)}),setTimeout(()=>{da||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Rh=[])},3e3)):Rh=[]}function U7(n,t,...r){}const zk={MODE:2};function G7(n){at(zk,n)}function WT(n,t){const r=t&&t.type.compatConfig;return r&&n in r?r[n]:zk[n]}function Tt(n,t,r=!1){if(!r&&t&&t.type.__isBuiltIn)return!1;const s=WT("MODE",t)||2,d=WT(n,t);return(Be(s)?s(t&&t.type):s)===2?d!==!1:d===!0||d==="suppress-warning"}function zn(n,t,...r){if(!Tt(n,t))throw new Error(`${n} compat has been disabled.`)}function wo(n,t,...r){return Tt(n,t)}function _p(n,t,...r){return Tt(n,t)}const bv=new WeakMap;function Fk(n){let t=bv.get(n);return t||bv.set(n,t=Object.create(null)),t}function Vk(n,t,r){if(Se(t))t.forEach(s=>Vk(n,s,r));else{t.startsWith("hook:")?zn("INSTANCE_EVENT_HOOKS",n,t):zn("INSTANCE_EVENT_EMITTER",n);const s=Fk(n);(s[t]||(s[t]=[])).push(r)}return n.proxy}function W7(n,t,r){const s=(...d)=>{$k(n,t,s),r.call(n.proxy,...d)};return s.fn=r,Vk(n,t,s),n.proxy}function $k(n,t,r){zn("INSTANCE_EVENT_EMITTER",n);const s=n.proxy;if(!t)return bv.set(n,Object.create(null)),s;if(Se(t))return t.forEach(p=>$k(n,p,r)),s;const d=Fk(n),f=d[t];return f?r?(d[t]=f.filter(p=>!(p===r||p.fn===r)),s):(d[t]=void 0,s):s}function K7(n,t,r){const s=Fk(n)[t];return s&&ri(s.map(d=>d.bind(n.proxy)),n,6,r),n.proxy}const Cp="onModelCompat:";function q7(n){const{type:t,shapeFlag:r,props:s,dynamicProps:d}=n,f=t;if(r&6&&s&&"modelValue"in s){if(!Tt("COMPONENT_V_MODEL",{type:t}))return;const p=f.model||{};wI(p,f.mixins);const{prop:v="value",event:m="input"}=p;v!=="modelValue"&&(s[v]=s.modelValue,delete s.modelValue),d&&(d[d.indexOf("modelValue")]=v),s[Cp+m]=s["onUpdate:modelValue"],delete s["onUpdate:modelValue"]}}function wI(n,t){t&&t.forEach(r=>{r.model&&at(n,r.model),r.mixins&&wI(n,r.mixins)})}function Y7(n,t,r){if(!Tt("COMPONENT_V_MODEL",n))return;const s=n.vnode.props,d=s&&s[Cp+t];d&&wr(d,n,6,r)}function Q7(n,t,...r){if(n.isUnmounted)return;const s=n.vnode.props||Pt;let d=r;const f=t.startsWith("update:"),p=f&&t.slice(7);if(p&&p in s){const C=`${p==="modelValue"?"model":p}Modifiers`,{number:y,trim:E}=s[C]||Pt;E&&(d=r.map(S=>Ft(S)?S.trim():S)),y&&(d=r.map(Fd))}let v,m=s[v=ga(t)]||s[v=ga(Wn(t))];!m&&f&&(m=s[v=ga(ni(t))]),m&&ri(m,n,6,d);const w=s[v+"Once"];if(w){if(!n.emitted)n.emitted={};else if(n.emitted[v])return;n.emitted[v]=!0,ri(w,n,6,d)}return Y7(n,t,d),K7(n,t,d)}function _I(n,t,r=!1){const s=t.emitsCache,d=s.get(n);if(d!==void 0)return d;const f=n.emits;let p={},v=!1;if(!Be(n)){const m=w=>{const C=_I(w,t,!0);C&&(v=!0,at(p,C))};!r&&t.mixins.length&&t.mixins.forEach(m),n.extends&&m(n.extends),n.mixins&&n.mixins.forEach(m)}return!f&&!v?(rt(n)&&s.set(n,null),null):(Se(f)?f.forEach(m=>p[m]=null):at(p,f),rt(n)&&s.set(n,p),p)}function yp(n,t){return!n||!yo(t)?!1:t.startsWith(Cp)?!0:(t=t.slice(2).replace(/Once$/,""),ht(n,t[0].toLowerCase()+t.slice(1))||ht(n,ni(t))||ht(n,t))}let vn=null,zl=null;function Ud(n){const t=vn;return vn=n,zl=n&&n.type.__scopeId||null,zl||(zl=n&&n.type._scopeId||null),t}function Kt(n){zl=n}function qt(){zl=null}const CI=n=>Q;function Q(n,t=vn,r){if(!t||n._n)return n;const s=(...d)=>{s._d&&Sf(-1);const f=Ud(t);let p;try{p=n(...d)}finally{Ud(f),s._d&&Sf(1)}return p};return s._n=!0,s._c=!0,s._d=!0,r&&(s._ns=!0),s}function Zh(n){const{type:t,vnode:r,proxy:s,withProxy:d,props:f,propsOptions:[p],slots:v,attrs:m,emit:w,render:C,renderCache:y,data:E,setupState:S,ctx:I,inheritAttrs:M}=n;let q,L;const B=Ud(n);try{if(r.shapeFlag&4){const K=d||s;q=Ri(C.call(K,K,y,f,S,E,I)),L=m}else{const K=t;q=Ri(K.length>1?K(f,{attrs:m,slots:v,emit:w}):K(f,null)),L=t.props?m:J7(m)}}catch(K){Td.length=0,Ts(K,n,1),q=F(Bn)}let $=q;if(L&&M!==!1){const K=Object.keys(L),{shapeFlag:Z}=$;K.length&&Z&7&&(p&&K.some(Ek)&&(L=X7(L,p)),$=er($,L))}if(Tt("INSTANCE_ATTRS_CLASS_STYLE",n)&&r.shapeFlag&4&&$.shapeFlag&7){const{class:K,style:Z}=r.props||{};(K||Z)&&($=er($,{class:K,style:Z}))}return r.dirs&&($=er($),$.dirs=$.dirs?$.dirs.concat(r.dirs):r.dirs),r.transition&&($.transition=r.transition),q=$,Ud(B),q}function Z7(n){let t;for(let r=0;r<n.length;r++){const s=n[r];if(_i(s)){if(s.type!==Bn||s.children==="v-if"){if(t)return;t=s}}else return}return t}const J7=n=>{let t;for(const r in n)(r==="class"||r==="style"||yo(r))&&((t||(t={}))[r]=n[r]);return t},X7=(n,t)=>{const r={};for(const s in n)(!Ek(s)||!(s.slice(9)in t))&&(r[s]=n[s]);return r};function eH(n,t,r){const{props:s,children:d,component:f}=n,{props:p,children:v,patchFlag:m}=t,w=f.emitsOptions;if(t.dirs||t.transition)return!0;if(r&&m>=0){if(m&1024)return!0;if(m&16)return s?KT(s,p,w):!!p;if(m&8){const C=t.dynamicProps;for(let y=0;y<C.length;y++){const E=C[y];if(p[E]!==s[E]&&!yp(w,E))return!0}}}else return(d||v)&&(!v||!v.$stable)?!0:s===p?!1:s?p?KT(s,p,w):!0:!!p;return!1}function KT(n,t,r){const s=Object.keys(t);if(s.length!==Object.keys(n).length)return!0;for(let d=0;d<s.length;d++){const f=s[d];if(t[f]!==n[f]&&!yp(r,f))return!0}return!1}function Hk({vnode:n,parent:t},r){for(;t&&t.subTree===n;)(n=t.vnode).el=r,t=t.parent}const yI=n=>n.__isSuspense,tH={name:"Suspense",__isSuspense:!0,process(n,t,r,s,d,f,p,v,m,w){n==null?nH(t,r,s,d,f,p,v,m,w):iH(n,t,r,s,d,p,v,m,w)},hydrate:rH,create:Uk,normalize:oH},AI=tH;function Gd(n,t){const r=n.props&&n.props[t];Be(r)&&r()}function nH(n,t,r,s,d,f,p,v,m){const{p:w,o:{createElement:C}}=m,y=C("div"),E=n.suspense=Uk(n,d,s,t,y,r,f,p,v,m);w(null,E.pendingBranch=n.ssContent,y,null,s,E,f,p),E.deps>0?(Gd(n,"onPending"),Gd(n,"onFallback"),w(null,n.ssFallback,t,r,s,null,f,p),Fl(E,n.ssFallback)):E.resolve()}function iH(n,t,r,s,d,f,p,v,{p:m,um:w,o:{createElement:C}}){const y=t.suspense=n.suspense;y.vnode=t,t.el=n.el;const E=t.ssContent,S=t.ssFallback,{activeBranch:I,pendingBranch:M,isInFallback:q,isHydrating:L}=y;if(M)y.pendingBranch=E,br(E,M)?(m(M,E,y.hiddenContainer,null,d,y,f,p,v),y.deps<=0?y.resolve():q&&(m(I,S,r,s,d,null,f,p,v),Fl(y,S))):(y.pendingId++,L?(y.isHydrating=!1,y.activeBranch=M):w(M,d,y),y.deps=0,y.effects.length=0,y.hiddenContainer=C("div"),q?(m(null,E,y.hiddenContainer,null,d,y,f,p,v),y.deps<=0?y.resolve():(m(I,S,r,s,d,null,f,p,v),Fl(y,S))):I&&br(E,I)?(m(I,E,r,s,d,y,f,p,v),y.resolve(!0)):(m(null,E,y.hiddenContainer,null,d,y,f,p,v),y.deps<=0&&y.resolve()));else if(I&&br(E,I))m(I,E,r,s,d,y,f,p,v),Fl(y,E);else if(Gd(t,"onPending"),y.pendingBranch=E,y.pendingId++,m(null,E,y.hiddenContainer,null,d,y,f,p,v),y.deps<=0)y.resolve();else{const{timeout:B,pendingId:$}=y;B>0?setTimeout(()=>{y.pendingId===$&&y.fallback(S)},B):B===0&&y.fallback(S)}}function Uk(n,t,r,s,d,f,p,v,m,w,C=!1){const{p:y,m:E,um:S,n:I,o:{parentNode:M,remove:q}}=w,L=n.props?yf(n.props.timeout):void 0,B={vnode:n,parent:t,parentComponent:r,isSVG:p,container:s,hiddenContainer:d,anchor:f,deps:0,pendingId:0,timeout:typeof L=="number"?L:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:C,isUnmounted:!1,effects:[],resolve($=!1){const{vnode:K,activeBranch:Z,pendingBranch:re,pendingId:J,effects:G,parentComponent:P,container:X}=B;if(B.isHydrating)B.isHydrating=!1;else if(!$){const De=Z&&re.transition&&re.transition.mode==="out-in";De&&(Z.transition.afterLeave=()=>{J===B.pendingId&&E(re,X,ke,0)});let{anchor:ke}=B;Z&&(ke=I(Z),S(Z,P,B,!0)),De||E(re,X,ke,0)}Fl(B,re),B.pendingBranch=null,B.isInFallback=!1;let he=B.parent,Ie=!1;for(;he;){if(he.pendingBranch){he.effects.push(...G),Ie=!0;break}he=he.parent}Ie||wp(G),B.effects=[],Gd(K,"onResolve")},fallback($){if(!B.pendingBranch)return;const{vnode:K,activeBranch:Z,parentComponent:re,container:J,isSVG:G}=B;Gd(K,"onFallback");const P=I(Z),X=()=>{!B.isInFallback||(y(null,$,J,P,re,null,G,v,m),Fl(B,$))},he=$.transition&&$.transition.mode==="out-in";he&&(Z.transition.afterLeave=X),B.isInFallback=!0,S(Z,re,null,!0),he||X()},move($,K,Z){B.activeBranch&&E(B.activeBranch,$,K,Z),B.container=$},next(){return B.activeBranch&&I(B.activeBranch)},registerDep($,K){const Z=!!B.pendingBranch;Z&&B.deps++;const re=$.vnode.el;$.asyncDep.catch(J=>{Ts(J,$,0)}).then(J=>{if($.isUnmounted||B.isUnmounted||B.pendingId!==$.suspenseId)return;$.asyncResolved=!0;const{vnode:G}=$;Av($,J,!1),re&&(G.el=re);const P=!re&&$.subTree.el;K($,G,M(re||$.subTree.el),re?null:I($.subTree),B,p,m),P&&q(P),Hk($,G.el),Z&&--B.deps===0&&B.resolve()})},unmount($,K){B.isUnmounted=!0,B.activeBranch&&S(B.activeBranch,r,$,K),B.pendingBranch&&S(B.pendingBranch,r,$,K)}};return B}function rH(n,t,r,s,d,f,p,v,m){const w=t.suspense=Uk(t,s,r,n.parentNode,document.createElement("div"),null,d,f,p,v,!0),C=m(n,w.pendingBranch=t.ssContent,r,w,f,p);return w.deps===0&&w.resolve(),C}function oH(n){const{shapeFlag:t,children:r}=n,s=t&32;n.ssContent=qT(s?r.default:r),n.ssFallback=s?qT(r.fallback):F(Bn)}function qT(n){let t;if(Be(n)){const r=ya&&n._c;r&&(n._d=!1,oe()),n=n(),r&&(n._d=!0,t=mi,tP())}return Se(n)&&(n=Z7(n)),n=Ri(n),t&&!n.dynamicChildren&&(n.dynamicChildren=t.filter(r=>r!==n)),n}function EI(n,t){t&&t.pendingBranch?Se(n)?t.effects.push(...n):t.effects.push(n):wp(n)}function Fl(n,t){n.activeBranch=t;const{vnode:r,parentComponent:s}=n,d=r.el=t.el;s&&s.subTree===r&&(s.vnode.el=d,Hk(s,d))}function Vl(n,t){if(ln){let r=ln.provides;const s=ln.parent&&ln.parent.provides;s===r&&(r=ln.provides=Object.create(s)),r[n]=t}}function ki(n,t,r=!1){const s=ln||vn;if(s){const d=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(d&&n in d)return d[n];if(arguments.length>1)return r&&Be(t)?t.call(s.proxy):t}}function TI(n,t){return au(n,null,t)}function Gk(n,t){return au(n,null,{flush:"post"})}function xI(n,t){return au(n,null,{flush:"sync"})}const Bh={};function as(n,t,r){return au(n,t,r)}function au(n,t,{immediate:r,deep:s,flush:d,onTrack:f,onTrigger:p}=Pt){const v=dp()===(ln==null?void 0:ln.scope)?ln:null;let m,w=!1,C=!1;if(en(n)?(m=()=>n.value,w=Wl(n)):Xi(n)?(m=()=>n,s=!0):Se(n)?(C=!0,w=n.some($=>Xi($)||Wl($)),m=()=>n.map($=>{if(en($))return $.value;if(Xi($))return ts($);if(Be($))return wr($,v,2)})):Be(n)?t?m=()=>wr(n,v,2):m=()=>{if(!(v&&v.isUnmounted))return y&&y(),ri(n,v,3,[E])}:m=vi,t&&!s){const $=m;m=()=>{const K=$();return Se(K)&&_p("WATCH_ARRAY",v)&&ts(K),K}}if(t&&s){const $=m;m=()=>ts($())}let y,E=$=>{y=L.onStop=()=>{wr($,v,4)}},S;if(Ql)if(E=vi,t?r&&ri(t,v,3,[m(),C?[]:void 0,E]):m(),d==="sync"){const $=mw();S=$.__watcherHandles||($.__watcherHandles=[])}else return vi;let I=C?new Array(n.length).fill(Bh):Bh;const M=()=>{if(!!L.active)if(t){const $=L.run();(s||w||(C?$.some((K,Z)=>Gl(K,I[Z])):Gl($,I))||Se($)&&Tt("WATCH_ARRAY",v))&&(y&&y(),ri(t,v,3,[$,I===Bh?void 0:C&&I[0]===Bh?[]:I,E]),I=$)}else L.run()};M.allowRecurse=!!t;let q;d==="sync"?q=M:d==="post"?q=()=>gn(M,v&&v.suspense):(M.pre=!0,v&&(M.id=v.uid),q=()=>kp(M));const L=new hc(m,q);t?r?M():I=L.run():d==="post"?gn(L.run.bind(L),v&&v.suspense):L.run();const B=()=>{L.stop(),v&&v.scope&&Tk(v.scope.effects,L)};return S&&S.push(B),B}function sH(n,t,r){const s=this.proxy,d=Ft(n)?n.includes(".")?SI(s,n):()=>s[n]:n.bind(s,s);let f;Be(t)?f=t:(f=t.handler,r=t);const p=ln;ks(this);const v=au(d,f.bind(s),r);return p?ks(p):cs(),v}function SI(n,t){const r=t.split(".");return()=>{let s=n;for(let d=0;d<r.length&&s;d++)s=s[r[d]];return s}}function ts(n,t){if(!rt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),en(n))ts(n.value,t);else if(Se(n))for(let r=0;r<n.length;r++)ts(n[r],t);else if(Da(n)||Bl(n))n.forEach(r=>{ts(r,t)});else if(_f(n))for(const r in n)ts(n[r],t);return n}function Ap(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return mc(()=>{n.isMounted=!0}),Kl(()=>{n.isUnmounting=!0}),n}const Gi=[Function,Array],OI={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Gi,onEnter:Gi,onAfterEnter:Gi,onEnterCancelled:Gi,onBeforeLeave:Gi,onLeave:Gi,onAfterLeave:Gi,onLeaveCancelled:Gi,onBeforeAppear:Gi,onAppear:Gi,onAfterAppear:Gi,onAppearCancelled:Gi},setup(n,{slots:t}){const r=rr(),s=Ap();let d;return()=>{const f=t.default&&lu(t.default(),!0);if(!f||!f.length)return;let p=f[0];if(f.length>1){for(const M of f)if(M.type!==Bn){p=M;break}}const v=it(n),{mode:m}=v;if(s.isLeaving)return Cb(p);const w=YT(p);if(!w)return Cb(p);const C=Ca(w,v,s,r);bs(w,C);const y=r.subTree,E=y&&YT(y);let S=!1;const{getTransitionKey:I}=w.type;if(I){const M=I();d===void 0?d=M:M!==d&&(d=M,S=!0)}if(E&&E.type!==Bn&&(!br(w,E)||S)){const M=Ca(E,v,s,r);if(bs(E,M),m==="out-in")return s.isLeaving=!0,M.afterLeave=()=>{s.isLeaving=!1,r.update.active!==!1&&r.update()},Cb(p);m==="in-out"&&w.type!==Bn&&(M.delayLeave=(q,L,B)=>{const $=DI(s,E);$[String(E.key)]=E,q._leaveCb=()=>{L(),q._leaveCb=void 0,delete C.delayedLeave},C.delayedLeave=B})}return p}}};OI.__isBuiltIn=!0;const Ep=OI;function DI(n,t){const{leavingVNodes:r}=n;let s=r.get(t.type);return s||(s=Object.create(null),r.set(t.type,s)),s}function Ca(n,t,r,s){const{appear:d,mode:f,persisted:p=!1,onBeforeEnter:v,onEnter:m,onAfterEnter:w,onEnterCancelled:C,onBeforeLeave:y,onLeave:E,onAfterLeave:S,onLeaveCancelled:I,onBeforeAppear:M,onAppear:q,onAfterAppear:L,onAppearCancelled:B}=t,$=String(n.key),K=DI(r,n),Z=(G,P)=>{G&&ri(G,s,9,P)},re=(G,P)=>{const X=P[1];Z(G,P),Se(G)?G.every(he=>he.length<=1)&&X():G.length<=1&&X()},J={mode:f,persisted:p,beforeEnter(G){let P=v;if(!r.isMounted)if(d)P=M||v;else return;G._leaveCb&&G._leaveCb(!0);const X=K[$];X&&br(n,X)&&X.el._leaveCb&&X.el._leaveCb(),Z(P,[G])},enter(G){let P=m,X=w,he=C;if(!r.isMounted)if(d)P=q||m,X=L||w,he=B||C;else return;let Ie=!1;const De=G._enterCb=ke=>{Ie||(Ie=!0,ke?Z(he,[G]):Z(X,[G]),J.delayedLeave&&J.delayedLeave(),G._enterCb=void 0)};P?re(P,[G,De]):De()},leave(G,P){const X=String(n.key);if(G._enterCb&&G._enterCb(!0),r.isUnmounting)return P();Z(y,[G]);let he=!1;const Ie=G._leaveCb=De=>{he||(he=!0,P(),De?Z(I,[G]):Z(S,[G]),G._leaveCb=void 0,K[X]===n&&delete K[X])};K[X]=n,E?re(E,[G,Ie]):Ie()},clone(G){return Ca(G,t,r,s)}};return J}function Cb(n){if(cu(n))return n=er(n),n.children=null,n}function YT(n){return cu(n)?n.children?n.children[0]:void 0:n}function bs(n,t){n.shapeFlag&6&&n.component?bs(n.component.subTree,t):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function lu(n,t=!1,r){let s=[],d=0;for(let f=0;f<n.length;f++){let p=n[f];const v=r==null?p.key:String(r)+String(p.key!=null?p.key:f);p.type===Ye?(p.patchFlag&128&&d++,s=s.concat(lu(p.children,t,v))):(t||p.type!==Bn)&&s.push(v!=null?er(p,{key:v}):p)}if(d>1)for(let f=0;f<s.length;f++)s[f].patchFlag=-2;return s}function gc(n){return Be(n)?{setup:n,name:n.name}:n}const ba=n=>!!n.type.__asyncLoader;function Ad(n){Be(n)&&(n={loader:n});const{loader:t,loadingComponent:r,errorComponent:s,delay:d=200,timeout:f,suspensible:p=!0,onError:v}=n;let m=null,w,C=0;const y=()=>(C++,m=null,E()),E=()=>{let S;return m||(S=m=t().catch(I=>{if(I=I instanceof Error?I:new Error(String(I)),v)return new Promise((M,q)=>{v(I,()=>M(y()),()=>q(I),C+1)});throw I}).then(I=>S!==m&&m?m:(I&&(I.__esModule||I[Symbol.toStringTag]==="Module")&&(I=I.default),w=I,I)))};return gc({name:"AsyncComponentWrapper",__asyncLoader:E,get __asyncResolved(){return w},setup(){const S=ln;if(w)return()=>yb(w,S);const I=B=>{m=null,Ts(B,S,13,!s)};if(p&&S.suspense||Ql)return E().then(B=>()=>yb(B,S)).catch(B=>(I(B),()=>s?F(s,{error:B}):null));const M=os(!1),q=os(),L=os(!!d);return d&&setTimeout(()=>{L.value=!1},d),f!=null&&setTimeout(()=>{if(!M.value&&!q.value){const B=new Error(`Async component timed out after ${f}ms.`);I(B),q.value=B}},f),E().then(()=>{M.value=!0,S.parent&&cu(S.parent.vnode)&&kp(S.parent.update)}).catch(B=>{I(B),q.value=B}),()=>{if(M.value&&w)return yb(w,S);if(q.value&&s)return F(s,{error:q.value});if(r&&!L.value)return F(r)}}})}function yb(n,t){const{ref:r,props:s,children:d,ce:f}=t.vnode,p=F(n,s,d);return p.ref=r,p.ce=f,delete t.vnode.ce,p}const cu=n=>n.type.__isKeepAlive,II={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(n,{slots:t}){const r=rr(),s=r.ctx;if(!s.renderer)return()=>{const B=t.default&&t.default();return B&&B.length===1?B[0]:B};const d=new Map,f=new Set;let p=null;const v=r.suspense,{renderer:{p:m,m:w,um:C,o:{createElement:y}}}=s,E=y("div");s.activate=(B,$,K,Z,re)=>{const J=B.component;w(B,$,K,0,v),m(J.vnode,B,$,K,J,v,Z,B.slotScopeIds,re),gn(()=>{J.isDeactivated=!1,J.a&&is(J.a);const G=B.props&&B.props.onVnodeMounted;G&&ui(G,J.parent,B)},v)},s.deactivate=B=>{const $=B.component;w(B,E,null,1,v),gn(()=>{$.da&&is($.da);const K=B.props&&B.props.onVnodeUnmounted;K&&ui(K,$.parent,B),$.isDeactivated=!0},v)};function S(B){Ab(B),C(B,r,v,!0)}function I(B){d.forEach(($,K)=>{const Z=Tv($.type);Z&&(!B||!B(Z))&&M(K)})}function M(B){const $=d.get(B);!p||!br($,p)?S($):p&&Ab(p),d.delete(B),f.delete(B)}as(()=>[n.include,n.exclude],([B,$])=>{B&&I(K=>md(B,K)),$&&I(K=>!md($,K))},{flush:"post",deep:!0});let q=null;const L=()=>{q!=null&&d.set(q,Eb(r.subTree))};return mc(L),du(L),Kl(()=>{d.forEach(B=>{const{subTree:$,suspense:K}=r,Z=Eb($);if(B.type===Z.type&&B.key===Z.key){Ab(Z);const re=Z.component.da;re&&gn(re,K);return}S(B)})}),()=>{if(q=null,!t.default)return null;const B=t.default(),$=B[0];if(B.length>1)return p=null,B;if(!_i($)||!($.shapeFlag&4)&&!($.shapeFlag&128))return p=null,$;let K=Eb($);const Z=K.type,re=Tv(ba(K)?K.type.__asyncResolved||{}:Z),{include:J,exclude:G,max:P}=n;if(J&&(!re||!md(J,re))||G&&re&&md(G,re))return p=K,$;const X=K.key==null?Z:K.key,he=d.get(X);return K.el&&(K=er(K),$.shapeFlag&128&&($.ssContent=K)),q=X,he?(K.el=he.el,K.component=he.component,K.transition&&bs(K,K.transition),K.shapeFlag|=512,f.delete(X),f.add(X)):(f.add(X),P&&f.size>parseInt(P,10)&&M(f.values().next().value)),K.shapeFlag|=256,p=K,yI($.type)?$:K}}};II.__isBuildIn=!0;const Wk=II;function md(n,t){return Se(n)?n.some(r=>md(r,t)):Ft(n)?n.split(",").includes(t):t7(n)?n.test(t):!1}function Kk(n,t){PI(n,"a",t)}function qk(n,t){PI(n,"da",t)}function PI(n,t,r=ln){const s=n.__wdc||(n.__wdc=()=>{let d=r;for(;d;){if(d.isDeactivated)return;d=d.parent}return n()});if(Tp(t,s,r),r){let d=r.parent;for(;d&&d.parent;)cu(d.parent.vnode)&&aH(s,t,r,d),d=d.parent}}function aH(n,t,r,s){const d=Tp(t,n,s,!0);ql(()=>{Tk(s[t],d)},r)}function Ab(n){n.shapeFlag&=-257,n.shapeFlag&=-513}function Eb(n){return n.shapeFlag&128?n.ssContent:n}function Tp(n,t,r=ln,s=!1){if(r){const d=r[n]||(r[n]=[]),f=t.__weh||(t.__weh=(...p)=>{if(r.isUnmounted)return;fc(),ks(r);const v=ri(t,r,n,p);return cs(),pc(),v});return s?d.unshift(f):d.push(f),f}}const Ao=n=>(t,r=ln)=>(!Ql||n==="sp")&&Tp(n,(...s)=>t(...s),r),Yk=Ao("bm"),mc=Ao("m"),Qk=Ao("bu"),du=Ao("u"),Kl=Ao("bum"),ql=Ao("um"),Zk=Ao("sp"),Jk=Ao("rtg"),Xk=Ao("rtc");function ew(n,t=ln){Tp("ec",n,t)}function lH(n){zn("INSTANCE_CHILDREN",n);const t=n.subTree,r=[];return t&&MI(t,r),r}function MI(n,t){if(n.component)t.push(n.component.proxy);else if(n.shapeFlag&16){const r=n.children;for(let s=0;s<r.length;s++)MI(r[s],t)}}function NI(n){zn("INSTANCE_LISTENERS",n);const t={},r=n.vnode.props;if(!r)return t;for(const s in r)yo(s)&&(t[s[2].toLowerCase()+s.slice(3)]=r[s]);return t}const cH={beforeMount:"bind",mounted:"inserted",updated:["update","componentUpdated"],unmounted:"unbind"};function dH(n,t,r){const s=cH[n];if(s)if(Se(s)){const d=[];return s.forEach(f=>{const p=t[f];p&&(wo("CUSTOM_DIR",r,f,n),d.push(p))}),d.length?d:void 0}else return t[s]&&wo("CUSTOM_DIR",r,s,n),t[s]}function tw(n,t){const r=vn;if(r===null)return n;const s=Ip(r)||r.proxy,d=n.dirs||(n.dirs=[]);for(let f=0;f<t.length;f++){let[p,v,m,w=Pt]=t[f];p&&(Be(p)&&(p={mounted:p,updated:p}),p.deep&&ts(v),d.push({dir:p,instance:s,value:v,oldValue:void 0,arg:m,modifiers:w}))}return n}function Hr(n,t,r,s){const d=n.dirs,f=t&&t.dirs;for(let p=0;p<d.length;p++){const v=d[p];f&&(v.oldValue=f[p].value);let m=v.dir[s];m||(m=dH(s,v.dir,r)),m&&(fc(),ri(m,r,8,[n.el,v,n,t]),pc())}}const nw="components",uH="directives",hH="filters";function ae(n,t){return xp(nw,n,!0,t)||n}const RI=Symbol();function iw(n){return Ft(n)?xp(nw,n,!1)||n:n||RI}function rw(n){return xp(uH,n)}function BI(n){return xp(hH,n)}function xp(n,t,r=!0,s=!1){const d=vn||ln;if(d){const f=d.type;if(n===nw){const v=Tv(f,!1);if(v&&(v===t||v===Wn(t)||v===uc(Wn(t))))return f}const p=QT(d[n]||f[n],t)||QT(d.appContext[n],t);return!p&&s?f:p}}function QT(n,t){return n&&(n[t]||n[Wn(t)]||n[uc(Wn(t))])}function fH(n){const t=n.type,r=t.render;if(!(!r||r._rc||r._compatChecked||r._compatWrapped)){if(r.length>=2){r._compatChecked=!0;return}if(_p("RENDER_FUNCTION",n)){const s=t.render=function(){return r.call(this,Tf)};s._compatWrapped=!0}}}function Tf(n,t,r){if(n||(n=Bn),typeof n=="string"){const f=ni(n);(f==="transition"||f==="transition-group"||f==="keep-alive")&&(n=`__compat__${f}`),n=iw(n)}const s=arguments.length,d=Se(t);return s===2||d?rt(t)&&!d?_i(t)?Lh(F(n,null,[t])):Lh(JT(F(n,ZT(t,n)),t)):Lh(F(n,null,t)):(_i(r)&&(r=[r]),Lh(JT(F(n,ZT(t,n),r),t)))}const pH=cc("staticStyle,staticClass,directives,model,hook");function ZT(n,t){if(!n)return null;const r={};for(const s in n)if(s==="attrs"||s==="domProps"||s==="props")at(r,n[s]);else if(s==="on"||s==="nativeOn"){const d=n[s];for(const f in d){let p=gH(f);s==="nativeOn"&&(p+="Native");const v=r[p],m=d[f];v!==m&&(v?r[p]=[].concat(v,m):r[p]=m)}}else pH(s)||(r[s]=n[s]);if(n.staticClass&&(r.class=Le([n.staticClass,r.class])),n.staticStyle&&(r.style=kr([n.staticStyle,r.style])),n.model&&rt(t)){const{prop:s="value",event:d="input"}=t.model||{};r[s]=n.model.value,r[Cp+d]=n.model.callback}return r}function gH(n){return n[0]==="&"&&(n=n.slice(1)+"Passive"),n[0]==="~"&&(n=n.slice(1)+"Once"),n[0]==="!"&&(n=n.slice(1)+"Capture"),ga(n)}function JT(n,t){return t&&t.directives?tw(n,t.directives.map(({name:r,value:s,arg:d,modifiers:f})=>[rw(r),s,d,f])):n}function Lh(n){const{props:t,children:r}=n;let s;if(n.shapeFlag&6&&Se(r)){s={};for(let f=0;f<r.length;f++){const p=r[f],v=_i(p)&&p.props&&p.props.slot||"default",m=s[v]||(s[v]=[]);_i(p)&&p.type==="template"?m.push(p.children):m.push(p)}if(s)for(const f in s){const p=s[f];s[f]=()=>p,s[f]._ns=!0}}const d=t&&t.scopedSlots;return d&&(delete t.scopedSlots,s?at(s,d):s=d),s&&Dp(n,s),n}function LI(n){if(Tt("RENDER_FUNCTION",vn,!0)&&Tt("PRIVATE_APIS",vn,!0)){const t=vn,r=()=>n.component&&n.component.proxy;let s;Object.defineProperties(n,{tag:{get:()=>n.type},data:{get:()=>n.props||{},set:d=>n.props=d},elm:{get:()=>n.el},componentInstance:{get:r},child:{get:r},text:{get:()=>Ft(n.children)?n.children:null},context:{get:()=>t&&t.proxy},componentOptions:{get:()=>{if(n.shapeFlag&4)return s||(s={Ctor:n.type,propsData:n.props,children:n.children})}}})}}const Tb=new Map,jI={get(n,t){const r=n[t];return r&&r()}};function mH(n){if(Tb.has(n))return Tb.get(n);const t=n.render,r=(s,d)=>{const f=rr(),p={props:s,children:f.vnode.children||[],data:f.vnode.props||{},scopedSlots:d.slots,parent:f.parent&&f.parent.proxy,slots(){return new Proxy(d.slots,jI)},get listeners(){return NI(f)},get injections(){if(n.inject){const v={};return $I(n.inject,v),v}return{}}};return t(Tf,p)};return r.props=n.props,r.displayName=n.name,r.compatConfig=n.compatConfig,r.inheritAttrs=!1,Tb.set(n,r),r}function yn(n,t,r,s){let d;const f=r&&r[s];if(Se(n)||Ft(n)){d=new Array(n.length);for(let p=0,v=n.length;p<v;p++)d[p]=t(n[p],p,void 0,f&&f[p])}else if(typeof n=="number"){d=new Array(n);for(let p=0;p<n;p++)d[p]=t(p+1,p,void 0,f&&f[p])}else if(rt(n))if(n[Symbol.iterator])d=Array.from(n,(p,v)=>t(p,v,void 0,f&&f[v]));else{const p=Object.keys(n);d=new Array(p.length);for(let v=0,m=p.length;v<m;v++){const w=p[v];d[v]=t(n[w],w,v,f&&f[v])}}else d=[];return r&&(r[s]=d),d}function ow(n,t){for(let r=0;r<t.length;r++){const s=t[r];if(Se(s))for(let d=0;d<s.length;d++)n[s[d].name]=s[d].fn;else s&&(n[s.name]=s.key?(...d)=>{const f=s.fn(...d);return f&&(f.key=s.key),f}:s.fn)}return n}function Yl(n,t,r={},s,d){if(vn.isCE||vn.parent&&ba(vn.parent)&&vn.parent.isCE)return t!=="default"&&(r.name=t),F("slot",r,s&&s());let f=n[t];f&&f._c&&(f._d=!1),oe();const p=f&&zI(f(r)),v=xt(Ye,{key:r.key||p&&p.key||`_${t}`},p||(s?s():[]),p&&n._===1?64:-2);return!d&&v.scopeId&&(v.slotScopeIds=[v.scopeId+"-s"]),f&&f._c&&(f._d=!0),v}function zI(n){return n.some(t=>_i(t)?!(t.type===Bn||t.type===Ye&&!zI(t.children)):!0)?n:null}function sw(n,t){const r={};for(const s in n)r[t&&/[A-Z]/.test(s)?`on:${s}`:ga(s)]=n[s];return r}function bH(n){const t={};for(let r=0;r<n.length;r++)n[r]&&at(t,n[r]);return t}function vH(n,t,r,s,d){if(r&&rt(r)){Se(r)&&(r=bH(r));for(const f in r)if(Ll(f))n[f]=r[f];else if(f==="class")n.class=Le([n.class,r.class]);else if(f==="style")n.style=Le([n.style,r.style]);else{const p=n.attrs||(n.attrs={}),v=Wn(f),m=ni(f);if(!(v in p)&&!(m in p)&&(p[f]=r[f],d)){const w=n.on||(n.on={});w[`update:${f}`]=function(C){r[f]=C}}}}return n}function kH(n,t){return hu(n,sw(t))}function wH(n,t,r,s,d){return d&&(s=hu(s,d)),Yl(n.slots,t,s,r&&(()=>r))}function _H(n,t,r){return ow(t||{$stable:!r},FI(n))}function FI(n){for(let t=0;t<n.length;t++){const r=n[t];r&&(Se(r)?FI(r):r.name=r.key||"default")}return n}const XT=new WeakMap;function CH(n,t){let r=XT.get(n);if(r||XT.set(n,r=[]),r[t])return r[t];const s=n.type.staticRenderFns[t],d=n.proxy;return r[t]=s.call(d,null,d)}function yH(n,t,r,s,d,f){const v=n.appContext.config.keyCodes||{},m=v[r]||s;if(f&&d&&!v[r])return ex(f,d);if(m)return ex(m,t);if(d)return ni(d)!==r}function ex(n,t){return Se(n)?!n.includes(t):n!==t}function AH(n){return n}function EH(n,t){for(let r=0;r<t.length;r+=2){const s=t[r];typeof s=="string"&&s&&(n[t[r]]=t[r+1])}return n}function TH(n,t){return typeof n=="string"?t+n:n}function xH(n){const t=(s,d,f)=>{s[d]=f},r=(s,d)=>{delete s[d]};at(n,{$set:s=>(zn("INSTANCE_SET",s),t),$delete:s=>(zn("INSTANCE_DELETE",s),r),$mount:s=>(zn("GLOBAL_MOUNT",null),s.ctx._compat_mount||vi),$destroy:s=>(zn("INSTANCE_DESTROY",s),s.ctx._compat_destroy||vi),$slots:s=>Tt("RENDER_FUNCTION",s)&&s.render&&s.render._compatWrapped?new Proxy(s.slots,jI):s.slots,$scopedSlots:s=>{zn("INSTANCE_SCOPED_SLOTS",s);const d={};for(const f in s.slots){const p=s.slots[f];p._ns||(d[f]=p)}return d},$on:s=>Vk.bind(null,s),$once:s=>W7.bind(null,s),$off:s=>$k.bind(null,s),$children:lH,$listeners:NI}),Tt("PRIVATE_APIS",null)&&at(n,{$vnode:s=>s.vnode,$options:s=>{const d=at({},uu(s));return d.parent=s.proxy.$parent,d.propsData=s.vnode.props,d},_self:s=>s.proxy,_uid:s=>s.uid,_data:s=>s.data,_isMounted:s=>s.isMounted,_isDestroyed:s=>s.isUnmounted,$createElement:()=>Tf,_c:()=>Tf,_o:()=>AH,_n:()=>Fd,_s:()=>Ue,_l:()=>yn,_t:s=>wH.bind(null,s),_q:()=>ko,_i:()=>su,_m:s=>CH.bind(null,s),_f:()=>BI,_k:s=>yH.bind(null,s),_b:()=>vH,_v:()=>xe,_e:()=>et,_u:()=>_H,_g:()=>kH,_d:()=>EH,_p:()=>TH})}const vv=n=>n?oP(n)?Ip(n)||n.proxy:vv(n.parent):null,$l=at(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>vv(n.parent),$root:n=>vv(n.root),$emit:n=>n.emit,$options:n=>uu(n),$forceUpdate:n=>n.f||(n.f=()=>kp(n.update)),$nextTick:n=>n.n||(n.n=xs.bind(n.proxy)),$watch:n=>sH.bind(n)});xH($l);const xb=(n,t)=>n!==Pt&&!n.__isScriptSetup&&ht(n,t),kv={get({_:n},t){const{ctx:r,setupState:s,data:d,props:f,accessCache:p,type:v,appContext:m}=n;let w;if(t[0]!=="$"){const S=p[t];if(S!==void 0)switch(S){case 1:return s[t];case 2:return d[t];case 4:return r[t];case 3:return f[t]}else{if(xb(s,t))return p[t]=1,s[t];if(d!==Pt&&ht(d,t))return p[t]=2,d[t];if((w=n.propsOptions[0])&&ht(w,t))return p[t]=3,f[t];if(r!==Pt&&ht(r,t))return p[t]=4,r[t];wv&&(p[t]=0)}}const C=$l[t];let y,E;if(C)return t==="$attrs"&&oi(n,"get",t),C(n);if((y=v.__cssModules)&&(y=y[t]))return y;if(r!==Pt&&ht(r,t))return p[t]=4,r[t];if(E=m.config.globalProperties,ht(E,t)){const S=Object.getOwnPropertyDescriptor(E,t);if(S.get)return S.get.call(n.proxy);{const I=E[t];return Be(I)?Object.assign(I.bind(n.proxy),I):I}}},set({_:n},t,r){const{data:s,setupState:d,ctx:f}=n;return xb(d,t)?(d[t]=r,!0):s!==Pt&&ht(s,t)?(s[t]=r,!0):ht(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(f[t]=r,!0)},has({_:{data:n,setupState:t,accessCache:r,ctx:s,appContext:d,propsOptions:f}},p){let v;return!!r[p]||n!==Pt&&ht(n,p)||xb(t,p)||(v=f[0])&&ht(v,p)||ht(s,p)||ht($l,p)||ht(d.config.globalProperties,p)},defineProperty(n,t,r){return r.get!=null?n._.accessCache[t]=0:ht(r,"value")&&this.set(n,t,r.value,null),Reflect.defineProperty(n,t,r)}},SH=at({},kv,{get(n,t){if(t!==Symbol.unscopables)return kv.get(n,t,n)},has(n,t){return t[0]!=="_"&&!G6(t)}});function VI(n,t){for(const r in t){const s=n[r],d=t[r];r in n&&_f(s)&&_f(d)?VI(s,d):n[r]=d}return n}let wv=!0;function OH(n){const t=uu(n),r=n.proxy,s=n.ctx;wv=!1,t.beforeCreate&&tx(t.beforeCreate,n,"bc");const{data:d,computed:f,methods:p,watch:v,provide:m,inject:w,created:C,beforeMount:y,mounted:E,beforeUpdate:S,updated:I,activated:M,deactivated:q,beforeDestroy:L,beforeUnmount:B,destroyed:$,unmounted:K,render:Z,renderTracked:re,renderTriggered:J,errorCaptured:G,serverPrefetch:P,expose:X,inheritAttrs:he,components:Ie,directives:De,filters:ke}=t;if(w&&$I(w,s,null,n.appContext.config.unwrapInjectedRef),p)for(const Me in p){const ze=p[Me];Be(ze)&&(s[Me]=ze.bind(r))}if(d){const Me=d.call(r,r);rt(Me)&&(n.data=nr(Me))}if(wv=!0,f)for(const Me in f){const ze=f[Me],hn=Be(ze)?ze.bind(r,r):Be(ze.get)?ze.get.bind(r,r):vi,Ke=!Be(ze)&&Be(ze.set)?ze.set.bind(r):vi,Vt=ii({get:hn,set:Ke});Object.defineProperty(s,Me,{enumerable:!0,configurable:!0,get:()=>Vt.value,set:Qt=>Vt.value=Qt})}if(v)for(const Me in v)HI(v[Me],s,r,Me);if(m){const Me=Be(m)?m.call(r):m;Reflect.ownKeys(Me).forEach(ze=>{Vl(ze,Me[ze])})}C&&tx(C,n,"c");function de(Me,ze){Se(ze)?ze.forEach(hn=>Me(hn.bind(r))):ze&&Me(ze.bind(r))}if(de(Yk,y),de(mc,E),de(Qk,S),de(du,I),de(Kk,M),de(qk,q),de(ew,G),de(Xk,re),de(Jk,J),de(Kl,B),de(ql,K),de(Zk,P),L&&wo("OPTIONS_BEFORE_DESTROY",n)&&de(Kl,L),$&&wo("OPTIONS_DESTROYED",n)&&de(ql,$),Se(X))if(X.length){const Me=n.exposed||(n.exposed={});X.forEach(ze=>{Object.defineProperty(Me,ze,{get:()=>r[ze],set:hn=>r[ze]=hn})})}else n.exposed||(n.exposed={});Z&&n.render===vi&&(n.render=Z),he!=null&&(n.inheritAttrs=he),Ie&&(n.components=Ie),De&&(n.directives=De),ke&&Tt("FILTERS",n)&&(n.filters=ke)}function $I(n,t,r=vi,s=!1){Se(n)&&(n=_v(n));for(const d in n){const f=n[d];let p;rt(f)?"default"in f?p=ki(f.from||d,f.default,!0):p=ki(f.from||d):p=ki(f),en(p)&&s?Object.defineProperty(t,d,{enumerable:!0,configurable:!0,get:()=>p.value,set:v=>p.value=v}):t[d]=p}}function tx(n,t,r){ri(Se(n)?n.map(s=>s.bind(t.proxy)):n.bind(t.proxy),t,r)}function HI(n,t,r,s){const d=s.includes(".")?SI(r,s):()=>r[s];if(Ft(n)){const f=t[n];Be(f)&&as(d,f)}else if(Be(n))as(d,n.bind(r));else if(rt(n))if(Se(n))n.forEach(f=>HI(f,t,r,s));else{const f=Be(n.handler)?n.handler.bind(r):t[n.handler];Be(f)&&as(d,f,n)}}function uu(n){const t=n.type,{mixins:r,extends:s}=t,{mixins:d,optionsCache:f,config:{optionMergeStrategies:p}}=n.appContext,v=f.get(t);let m;return v?m=v:!d.length&&!r&&!s?Tt("PRIVATE_APIS",n)?(m=at({},t),m.parent=n.parent&&n.parent.proxy,m.propsData=n.vnode.props):m=t:(m={},d.length&&d.forEach(w=>va(m,w,p,!0)),va(m,t,p)),rt(t)&&f.set(t,m),m}function va(n,t,r,s=!1){Be(t)&&(t=t.options);const{mixins:d,extends:f}=t;f&&va(n,f,r,!0),d&&d.forEach(p=>va(n,p,r,!0));for(const p in t)if(!(s&&p==="expose")){const v=ka[p]||r&&r[p];n[p]=v?v(n[p],t[p]):t[p]}return n}const ka={data:nx,props:Yo,emits:Yo,methods:Yo,computed:Yo,beforeCreate:ei,created:ei,beforeMount:ei,mounted:ei,beforeUpdate:ei,updated:ei,beforeDestroy:ei,beforeUnmount:ei,destroyed:ei,unmounted:ei,activated:ei,deactivated:ei,errorCaptured:ei,serverPrefetch:ei,components:Yo,directives:Yo,watch:IH,provide:nx,inject:DH};ka.filters=Yo;function nx(n,t){return t?n?function(){return(Tt("OPTIONS_DATA_MERGE",null)?VI:at)(Be(n)?n.call(this,this):n,Be(t)?t.call(this,this):t)}:t:n}function DH(n,t){return Yo(_v(n),_v(t))}function _v(n){if(Se(n)){const t={};for(let r=0;r<n.length;r++)t[n[r]]=n[r];return t}return n}function ei(n,t){return n?[...new Set([].concat(n,t))]:t}function Yo(n,t){return n?at(at(Object.create(null),n),t):t}function IH(n,t){if(!n)return t;if(!t)return n;const r=at(Object.create(null),n);for(const s in t)r[s]=ei(n[s],t[s]);return r}function PH(n,t,r){return new Proxy({},{get(s,d){if(d==="$options")return uu(n);if(d in t)return t[d];const f=n.type.inject;if(f){if(Se(f)){if(f.includes(d))return ki(d)}else if(d in f)return ki(d)}}})}function UI(n,t){return!!(n==="is"||(n==="class"||n==="style")&&Tt("INSTANCE_ATTRS_CLASS_STYLE",t)||yo(n)&&Tt("INSTANCE_LISTENERS",t)||n.startsWith("routerView")||n==="registerRouteInstance")}function MH(n,t,r,s=!1){const d={},f={};Cf(f,Sp,1),n.propsDefaults=Object.create(null),GI(n,t,d,f);for(const p in n.propsOptions[0])p in d||(d[p]=void 0);r?n.props=s?d:Ik(d):n.type.props?n.props=d:n.props=f,n.attrs=f}function NH(n,t,r,s){const{props:d,attrs:f,vnode:{patchFlag:p}}=n,v=it(d),[m]=n.propsOptions;let w=!1;if((s||p>0)&&!(p&16)){if(p&8){const C=n.vnode.dynamicProps;for(let y=0;y<C.length;y++){let E=C[y];if(yp(n.emitsOptions,E))continue;const S=t[E];if(m)if(ht(f,E))S!==f[E]&&(f[E]=S,w=!0);else{const I=Wn(E);d[I]=Cv(m,v,I,S,n,!1)}else{if(yo(E)&&E.endsWith("Native"))E=E.slice(0,-6);else if(UI(E,n))continue;S!==f[E]&&(f[E]=S,w=!0)}}}}else{GI(n,t,d,f)&&(w=!0);let C;for(const y in v)(!t||!ht(t,y)&&((C=ni(y))===y||!ht(t,C)))&&(m?r&&(r[y]!==void 0||r[C]!==void 0)&&(d[y]=Cv(m,v,y,void 0,n,!0)):delete d[y]);if(f!==v)for(const y in f)(!t||!ht(t,y)&&!ht(t,y+"Native"))&&(delete f[y],w=!0)}w&&Jr(n,"set","$attrs")}function GI(n,t,r,s){const[d,f]=n.propsOptions;let p=!1,v;if(t)for(let m in t){if(Ll(m)||(m.startsWith("onHook:")&&wo("INSTANCE_EVENT_HOOKS",n,m.slice(2).toLowerCase()),m==="inline-template"))continue;const w=t[m];let C;if(d&&ht(d,C=Wn(m)))!f||!f.includes(C)?r[C]=w:(v||(v={}))[C]=w;else if(!yp(n.emitsOptions,m)){if(yo(m)&&m.endsWith("Native"))m=m.slice(0,-6);else if(UI(m,n))continue;(!(m in s)||w!==s[m])&&(s[m]=w,p=!0)}}if(f){const m=it(r),w=v||Pt;for(let C=0;C<f.length;C++){const y=f[C];r[y]=Cv(d,m,y,w[y],n,!ht(w,y))}}return p}function Cv(n,t,r,s,d,f){const p=n[r];if(p!=null){const v=ht(p,"default");if(v&&s===void 0){const m=p.default;if(p.type!==Function&&Be(m)){const{propsDefaults:w}=d;r in w?s=w[r]:(ks(d),s=w[r]=m.call(Tt("PROPS_DEFAULT_THIS",d)?PH(d,t):null,t),cs())}else s=m}p[0]&&(f&&!v?s=!1:p[1]&&(s===""||s===ni(r))&&(s=!0))}return s}function WI(n,t,r=!1){const s=t.propsCache,d=s.get(n);if(d)return d;const f=n.props,p={},v=[];let m=!1;if(!Be(n)){const C=y=>{Be(y)&&(y=y.options),m=!0;const[E,S]=WI(y,t,!0);at(p,E),S&&v.push(...S)};!r&&t.mixins.length&&t.mixins.forEach(C),n.extends&&C(n.extends),n.mixins&&n.mixins.forEach(C)}if(!f&&!m)return rt(n)&&s.set(n,Rl),Rl;if(Se(f))for(let C=0;C<f.length;C++){const y=Wn(f[C]);ix(y)&&(p[y]=Pt)}else if(f)for(const C in f){const y=Wn(C);if(ix(y)){const E=f[C],S=p[y]=Se(E)||Be(E)?{type:E}:Object.assign({},E);if(S){const I=sx(Boolean,S.type),M=sx(String,S.type);S[0]=I>-1,S[1]=M<0||I<M,(I>-1||ht(S,"default"))&&v.push(y)}}}const w=[p,v];return rt(n)&&s.set(n,w),w}function ix(n){return n[0]!=="$"}function rx(n){const t=n&&n.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:n===null?"null":""}function ox(n,t){return rx(n)===rx(t)}function sx(n,t){return Se(t)?t.findIndex(r=>ox(r,n)):Be(t)&&ox(t,n)?0:-1}const KI=n=>n[0]==="_"||n==="$stable",aw=n=>Se(n)?n.map(Ri):[Ri(n)],RH=(n,t,r)=>{if(t._n)return t;const s=Q((...d)=>aw(t(...d)),r);return s._c=!1,s},qI=(n,t,r)=>{const s=n._ctx;for(const d in n){if(KI(d))continue;const f=n[d];if(Be(f))t[d]=RH(d,f,s);else if(f!=null){const p=aw(f);t[d]=()=>p}}},YI=(n,t)=>{const r=aw(t);n.slots.default=()=>r},BH=(n,t)=>{if(n.vnode.shapeFlag&32){const r=t._;r?(n.slots=it(t),Cf(t,"_",r)):qI(t,n.slots={})}else n.slots={},t&&YI(n,t);Cf(n.slots,Sp,1)},LH=(n,t,r)=>{const{vnode:s,slots:d}=n;let f=!0,p=Pt;if(s.shapeFlag&32){const v=t._;v?r&&v===1?f=!1:(at(d,t),!r&&v===1&&delete d._):(f=!t.$stable,qI(t,d)),p=t}else t&&(YI(n,t),p={default:1});if(f)for(const v in d)!KI(v)&&!(v in p)&&delete d[v]};function jH(n){n.optionMergeStrategies=new Proxy({},{get(t,r){if(r in t)return t[r];if(r in ka&&wo("CONFIG_OPTION_MERGE_STRATS",null))return ka[r]}})}let fi,ua;function zH(n,t){fi=t({});const r=ua=function m(w={}){return s(w,m)};function s(m={},w){zn("GLOBAL_MOUNT",null);const{data:C}=m;C&&!Be(C)&&wo("OPTIONS_DATA_FN",null)&&(m.data=()=>C);const y=n(m);w!==r&&QI(y,w);const E=y._createRoot(m);return m.el?E.$mount(m.el):E}r.version="2.6.14-compat:3.2.47",r.config=fi.config,r.use=(m,...w)=>(m&&Be(m.install)?m.install(r,...w):Be(m)&&m(r,...w),r),r.mixin=m=>(fi.mixin(m),r),r.component=(m,w)=>w?(fi.component(m,w),r):fi.component(m),r.directive=(m,w)=>w?(fi.directive(m,w),r):fi.directive(m),r.options={_base:r};let d=1;r.cid=d,r.nextTick=xs;const f=new WeakMap;function p(m={}){if(zn("GLOBAL_EXTEND",null),Be(m)&&(m=m.options),f.has(m))return f.get(m);const w=this;function C(E){return s(E?va(at({},C.options),E,ka):C.options,C)}C.super=w,C.prototype=Object.create(r.prototype),C.prototype.constructor=C;const y={};for(const E in w.options){const S=w.options[E];y[E]=Se(S)?S.slice():rt(S)?at(Object.create(null),S):S}return C.options=va(y,m,ka),C.options._base=C,C.extend=p.bind(C),C.mixin=w.mixin,C.use=w.use,C.cid=++d,f.set(m,C),C}r.extend=p.bind(r),r.set=(m,w,C)=>{zn("GLOBAL_SET",null),m[w]=C},r.delete=(m,w)=>{zn("GLOBAL_DELETE",null),delete m[w]},r.observable=m=>(zn("GLOBAL_OBSERVABLE",null),nr(m)),r.filter=(m,w)=>w?(fi.filter(m,w),r):fi.filter(m);const v={warn:vi,extend:at,mergeOptions:(m,w,C)=>va(m,w,C?void 0:ka),defineReactive:KH};return Object.defineProperty(r,"util",{get(){return zn("GLOBAL_PRIVATE_UTIL",null),v}}),r.configureCompat=G7,r}function FH(n,t,r){VH(n,t),jH(n.config),fi&&(UH(n,t,r),$H(n),HH(n))}function VH(n,t){t.filters={},n.filter=(r,s)=>(zn("FILTERS",null),s?(t.filters[r]=s,n):t.filters[r])}function $H(n){Object.defineProperties(n,{prototype:{get(){return n.config.globalProperties}},nextTick:{value:xs},extend:{value:ua.extend},set:{value:ua.set},delete:{value:ua.delete},observable:{value:ua.observable},util:{get(){return ua.util}}})}function HH(n){n._context.mixins=[...fi._context.mixins],["components","directives","filters"].forEach(t=>{n._context[t]=Object.create(fi._context[t])});for(const t in fi.config){if(t==="isNativeTag"||Df()&&(t==="isCustomElement"||t==="compilerOptions"))continue;const r=fi.config[t];n.config[t]=rt(r)?Object.create(r):r,t==="ignoredElements"&&Tt("CONFIG_IGNORED_ELEMENTS",null)&&!Df()&&Se(r)&&(n.config.compilerOptions.isCustomElement=s=>r.some(d=>Ft(d)?d===s:d.test(s)))}QI(n,ua)}function QI(n,t){const r=Tt("GLOBAL_PROTOTYPE",null);r&&(n.config.globalProperties=Object.create(t.prototype));const s=Object.getOwnPropertyDescriptors(t.prototype);for(const d in s)d!=="constructor"&&r&&Object.defineProperty(n.config.globalProperties,d,s[d])}function UH(n,t,r){let s=!1;n._createRoot=d=>{const f=n._component,p=F(f,d.propsData||null);p.appContext=t;const v=!Be(f)&&!f.render&&!f.template,m=()=>{},w=hw(p,null,null);return v&&(w.render=m),fw(w),p.component=w,p.isCompatRoot=!0,w.ctx._compat_mount=C=>{if(s)return;let y;if(typeof C=="string"){const S=document.querySelector(C);if(!S)return;y=S}else y=C||document.createElement("div");const E=y instanceof SVGElement;return v&&w.render===m&&(w.render=null,f.template=y.innerHTML,pw(w,!1,!0)),y.innerHTML="",r(p,y,E),y instanceof Element&&(y.removeAttribute("v-cloak"),y.setAttribute("data-v-app","")),s=!0,n._container=y,y.__vue_app__=n,w.proxy},w.ctx._compat_destroy=()=>{if(s)r(null,n._container),delete n._container.__vue_app__;else{const{bum:C,scope:y,um:E}=w;C&&is(C),Tt("INSTANCE_EVENT_HOOKS",w)&&w.emit("hook:beforeDestroy"),y&&y.stop(),E&&is(E),Tt("INSTANCE_EVENT_HOOKS",w)&&w.emit("hook:destroyed")}},w.proxy}}const GH=["push","pop","shift","unshift","splice","sort","reverse"],WH=new WeakSet;function KH(n,t,r){if(rt(r)&&!Xi(r)&&!WH.has(r)){const d=nr(r);Se(r)?GH.forEach(f=>{r[f]=(...p)=>{Array.prototype[f].call(d,...p)}}):Object.keys(r).forEach(f=>{try{Sb(r,f,r[f])}catch{}})}const s=n.$;s&&n===s.proxy?(Sb(s.ctx,t,r),s.accessCache=Object.create(null)):Xi(n)?n[t]=r:Sb(n,t,r)}function Sb(n,t,r){r=rt(r)?nr(r):r,Object.defineProperty(n,t,{enumerable:!0,configurable:!0,get(){return oi(n,"get",t),r},set(s){r=rt(s)?nr(s):s,Jr(n,"set",t,s)}})}function ZI(){return{app:null,config:{isNativeTag:J6,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qH=0;function YH(n,t){return function(s,d=null){Be(s)||(s=Object.assign({},s)),d!=null&&!rt(d)&&(d=null);const f=ZI(),p=new Set;let v=!1;const m=f.app={_uid:qH++,_component:s,_props:d,_container:null,_context:f,_instance:null,version:vw,get config(){return f.config},set config(w){},use(w,...C){return p.has(w)||(w&&Be(w.install)?(p.add(w),w.install(m,...C)):Be(w)&&(p.add(w),w(m,...C))),m},mixin(w){return f.mixins.includes(w)||f.mixins.push(w),m},component(w,C){return C?(f.components[w]=C,m):f.components[w]},directive(w,C){return C?(f.directives[w]=C,m):f.directives[w]},mount(w,C,y){if(!v){const E=F(s,d);return E.appContext=f,C&&t?t(E,w):n(E,w,y),v=!0,m._container=w,w.__vue_app__=m,Ip(E.component)||E.component.proxy}},unmount(){v&&(n(null,m._container),delete m._container.__vue_app__)},provide(w,C){return f.provides[w]=C,m}};return FH(m,f,n),m}}function xf(n,t,r,s,d=!1){if(Se(n)){n.forEach((E,S)=>xf(E,t&&(Se(t)?t[S]:t),r,s,d));return}if(ba(s)&&!d)return;const f=s.shapeFlag&4?Ip(s.component)||s.component.proxy:s.el,p=d?null:f,{i:v,r:m}=n,w=t&&t.r,C=v.refs===Pt?v.refs={}:v.refs,y=v.setupState;if(w!=null&&w!==m&&(Ft(w)?(C[w]=null,ht(y,w)&&(y[w]=null)):en(w)&&(w.value=null)),Be(m))wr(m,v,12,[p,C]);else{const E=Ft(m),S=en(m);if(E||S){const I=()=>{if(n.f){const M=E?ht(y,m)?y[m]:C[m]:m.value;d?Se(M)&&Tk(M,f):Se(M)?M.includes(f)||M.push(f):E?(C[m]=[f],ht(y,m)&&(y[m]=C[m])):(m.value=[f],n.k&&(C[n.k]=m.value))}else E?(C[m]=p,ht(y,m)&&(y[m]=p)):S&&(m.value=p,n.k&&(C[n.k]=p))};p?(I.id=-1,gn(I,r)):I()}}}let $o=!1;const jh=n=>/svg/.test(n.namespaceURI)&&n.tagName!=="foreignObject",zh=n=>n.nodeType===8;function QH(n){const{mt:t,p:r,o:{patchProp:s,createText:d,nextSibling:f,parentNode:p,remove:v,insert:m,createComment:w}}=n,C=(L,B)=>{if(!B.hasChildNodes()){r(null,L,B),Ef(),B._vnode=L;return}$o=!1,y(B.firstChild,L,null,null,null),Ef(),B._vnode=L,$o&&console.error("Hydration completed but contains mismatches.")},y=(L,B,$,K,Z,re=!1)=>{const J=zh(L)&&L.data==="[",G=()=>M(L,B,$,K,Z,J),{type:P,ref:X,shapeFlag:he,patchFlag:Ie}=B;let De=L.nodeType;B.el=L,Ie===-2&&(re=!1,B.dynamicChildren=null);let ke=null;switch(P){case vs:De!==3?B.children===""?(m(B.el=d(""),p(L),L),ke=L):ke=G():(L.data!==B.children&&($o=!0,L.data=B.children),ke=f(L));break;case Bn:De!==8||J?ke=G():ke=f(L);break;case ls:if(J&&(L=f(L),De=L.nodeType),De===1||De===3){ke=L;const je=!B.children.length;for(let de=0;de<B.staticCount;de++)je&&(B.children+=ke.nodeType===1?ke.outerHTML:ke.data),de===B.staticCount-1&&(B.anchor=ke),ke=f(ke);return J?f(ke):ke}else G();break;case Ye:J?ke=I(L,B,$,K,Z,re):ke=G();break;default:if(he&1)De!==1||B.type.toLowerCase()!==L.tagName.toLowerCase()?ke=G():ke=E(L,B,$,K,Z,re);else if(he&6){B.slotScopeIds=Z;const je=p(L);if(t(B,je,null,$,K,jh(je),re),ke=J?q(L):f(L),ke&&zh(ke)&&ke.data==="teleport end"&&(ke=f(ke)),ba(B)){let de;J?(de=F(Ye),de.anchor=ke?ke.previousSibling:je.lastChild):de=L.nodeType===3?xe(""):F("div"),de.el=L,B.component.subTree=de}}else he&64?De!==8?ke=G():ke=B.type.hydrate(L,B,$,K,Z,re,n,S):he&128&&(ke=B.type.hydrate(L,B,$,K,jh(p(L)),Z,re,n,y))}return X!=null&&xf(X,null,K,B),ke},E=(L,B,$,K,Z,re)=>{re=re||!!B.dynamicChildren;const{type:J,props:G,patchFlag:P,shapeFlag:X,dirs:he}=B,Ie=J==="input"&&he||J==="option";if(Ie||P!==-1){if(he&&Hr(B,null,$,"created"),G)if(Ie||!re||P&48)for(const ke in G)(Ie&&ke.endsWith("value")||yo(ke)&&!Ll(ke))&&s(L,ke,null,G[ke],!1,void 0,$);else G.onClick&&s(L,"onClick",null,G.onClick,!1,void 0,$);let De;if((De=G&&G.onVnodeBeforeMount)&&ui(De,$,B),he&&Hr(B,null,$,"beforeMount"),((De=G&&G.onVnodeMounted)||he)&&EI(()=>{De&&ui(De,$,B),he&&Hr(B,null,$,"mounted")},K),X&16&&!(G&&(G.innerHTML||G.textContent))){let ke=S(L.firstChild,B,L,$,K,Z,re);for(;ke;){$o=!0;const je=ke;ke=ke.nextSibling,v(je)}}else X&8&&L.textContent!==B.children&&($o=!0,L.textContent=B.children)}return L.nextSibling},S=(L,B,$,K,Z,re,J)=>{J=J||!!B.dynamicChildren;const G=B.children,P=G.length;for(let X=0;X<P;X++){const he=J?G[X]:G[X]=Ri(G[X]);if(L)L=y(L,he,K,Z,re,J);else{if(he.type===vs&&!he.children)continue;$o=!0,r(null,he,$,null,K,Z,jh($),re)}}return L},I=(L,B,$,K,Z,re)=>{const{slotScopeIds:J}=B;J&&(Z=Z?Z.concat(J):J);const G=p(L),P=S(f(L),B,G,$,K,Z,re);return P&&zh(P)&&P.data==="]"?f(B.anchor=P):($o=!0,m(B.anchor=w("]"),G,P),P)},M=(L,B,$,K,Z,re)=>{if($o=!0,B.el=null,re){const P=q(L);for(;;){const X=f(L);if(X&&X!==P)v(X);else break}}const J=f(L),G=p(L);return v(L),r(null,B,G,J,$,K,jh(G),Z),J},q=L=>{let B=0;for(;L;)if(L=f(L),L&&zh(L)&&(L.data==="["&&B++,L.data==="]")){if(B===0)return f(L);B--}return L};return[C,y]}const gn=EI;function lw(n){return JI(n)}function cw(n){return JI(n,QH)}function JI(n,t){const r=o7();r.__VUE__=!0;const{insert:s,remove:d,patchProp:f,createElement:p,createText:v,createComment:m,setText:w,setElementText:C,parentNode:y,nextSibling:E,setScopeId:S=vi,insertStaticContent:I}=n,M=(R,H,te,ee=null,le=null,we=null,Oe=!1,ye=null,_e=!!H.dynamicChildren)=>{if(R===H)return;R&&!br(R,H)&&(ee=ge(R),Qt(R,le,we,!0),R=null),H.patchFlag===-2&&(_e=!1,H.dynamicChildren=null);const{type:pe,ref:Pe,shapeFlag:Te}=H;switch(pe){case vs:q(R,H,te,ee);break;case Bn:L(R,H,te,ee);break;case ls:R==null&&B(H,te,ee,Oe);break;case Ye:Ie(R,H,te,ee,le,we,Oe,ye,_e);break;default:Te&1?Z(R,H,te,ee,le,we,Oe,ye,_e):Te&6?De(R,H,te,ee,le,we,Oe,ye,_e):(Te&64||Te&128)&&pe.process(R,H,te,ee,le,we,Oe,ye,_e,Ge)}Pe!=null&&le&&xf(Pe,R&&R.ref,we,H||R,!H)},q=(R,H,te,ee)=>{if(R==null)s(H.el=v(H.children),te,ee);else{const le=H.el=R.el;H.children!==R.children&&w(le,H.children)}},L=(R,H,te,ee)=>{R==null?s(H.el=m(H.children||""),te,ee):H.el=R.el},B=(R,H,te,ee)=>{[R.el,R.anchor]=I(R.children,H,te,ee,R.el,R.anchor)},$=({el:R,anchor:H},te,ee)=>{let le;for(;R&&R!==H;)le=E(R),s(R,te,ee),R=le;s(H,te,ee)},K=({el:R,anchor:H})=>{let te;for(;R&&R!==H;)te=E(R),d(R),R=te;d(H)},Z=(R,H,te,ee,le,we,Oe,ye,_e)=>{Oe=Oe||H.type==="svg",R==null?re(H,te,ee,le,we,Oe,ye,_e):P(R,H,le,we,Oe,ye,_e)},re=(R,H,te,ee,le,we,Oe,ye)=>{let _e,pe;const{type:Pe,props:Te,shapeFlag:Ee,transition:Re,dirs:qe}=R;if(_e=R.el=p(R.type,we,Te&&Te.is,Te),Ee&8?C(_e,R.children):Ee&16&&G(R.children,_e,null,ee,le,we&&Pe!=="foreignObject",Oe,ye),qe&&Hr(R,null,ee,"created"),J(_e,R,R.scopeId,Oe,ee),Te){for(const Qe in Te)Qe!=="value"&&!Ll(Qe)&&f(_e,Qe,null,Te[Qe],we,R.children,ee,le,fe);"value"in Te&&f(_e,"value",null,Te.value),(pe=Te.onVnodeBeforeMount)&&ui(pe,ee,R)}qe&&Hr(R,null,ee,"beforeMount");const Je=(!le||le&&!le.pendingBranch)&&Re&&!Re.persisted;Je&&Re.beforeEnter(_e),s(_e,H,te),((pe=Te&&Te.onVnodeMounted)||Je||qe)&&gn(()=>{pe&&ui(pe,ee,R),Je&&Re.enter(_e),qe&&Hr(R,null,ee,"mounted")},le)},J=(R,H,te,ee,le)=>{if(te&&S(R,te),ee)for(let we=0;we<ee.length;we++)S(R,ee[we]);if(le){let we=le.subTree;if(H===we){const Oe=le.vnode;J(R,Oe,Oe.scopeId,Oe.slotScopeIds,le.parent)}}},G=(R,H,te,ee,le,we,Oe,ye,_e=0)=>{for(let pe=_e;pe<R.length;pe++){const Pe=R[pe]=ye?Qo(R[pe]):Ri(R[pe]);M(null,Pe,H,te,ee,le,we,Oe,ye)}},P=(R,H,te,ee,le,we,Oe)=>{const ye=H.el=R.el;let{patchFlag:_e,dynamicChildren:pe,dirs:Pe}=H;_e|=R.patchFlag&16;const Te=R.props||Pt,Ee=H.props||Pt;let Re;te&&ta(te,!1),(Re=Ee.onVnodeBeforeUpdate)&&ui(Re,te,H,R),Pe&&Hr(H,R,te,"beforeUpdate"),te&&ta(te,!0);const qe=le&&H.type!=="foreignObject";if(pe?X(R.dynamicChildren,pe,ye,te,ee,qe,we):Oe||ze(R,H,ye,null,te,ee,qe,we,!1),_e>0){if(_e&16)he(ye,H,Te,Ee,te,ee,le);else if(_e&2&&Te.class!==Ee.class&&f(ye,"class",null,Ee.class,le),_e&4&&f(ye,"style",Te.style,Ee.style,le),_e&8){const Je=H.dynamicProps;for(let Qe=0;Qe<Je.length;Qe++){const Zt=Je[Qe],Ti=Te[Zt],Oo=Ee[Zt];(Oo!==Ti||Zt==="value")&&f(ye,Zt,Ti,Oo,le,R.children,te,ee,fe)}}_e&1&&R.children!==H.children&&C(ye,H.children)}else!Oe&&pe==null&&he(ye,H,Te,Ee,te,ee,le);((Re=Ee.onVnodeUpdated)||Pe)&&gn(()=>{Re&&ui(Re,te,H,R),Pe&&Hr(H,R,te,"updated")},ee)},X=(R,H,te,ee,le,we,Oe)=>{for(let ye=0;ye<H.length;ye++){const _e=R[ye],pe=H[ye],Pe=_e.el&&(_e.type===Ye||!br(_e,pe)||_e.shapeFlag&70)?y(_e.el):te;M(_e,pe,Pe,null,ee,le,we,Oe,!0)}},he=(R,H,te,ee,le,we,Oe)=>{if(te!==ee){if(te!==Pt)for(const ye in te)!Ll(ye)&&!(ye in ee)&&f(R,ye,te[ye],null,Oe,H.children,le,we,fe);for(const ye in ee){if(Ll(ye))continue;const _e=ee[ye],pe=te[ye];_e!==pe&&ye!=="value"&&f(R,ye,pe,_e,Oe,H.children,le,we,fe)}"value"in ee&&f(R,"value",te.value,ee.value)}},Ie=(R,H,te,ee,le,we,Oe,ye,_e)=>{const pe=H.el=R?R.el:v(""),Pe=H.anchor=R?R.anchor:v("");let{patchFlag:Te,dynamicChildren:Ee,slotScopeIds:Re}=H;Re&&(ye=ye?ye.concat(Re):Re),R==null?(s(pe,te,ee),s(Pe,te,ee),G(H.children,te,Pe,le,we,Oe,ye,_e)):Te>0&&Te&64&&Ee&&R.dynamicChildren?(X(R.dynamicChildren,Ee,te,le,we,Oe,ye),(H.key!=null||le&&H===le.subTree)&&dw(R,H,!0)):ze(R,H,te,Pe,le,we,Oe,ye,_e)},De=(R,H,te,ee,le,we,Oe,ye,_e)=>{H.slotScopeIds=ye,R==null?H.shapeFlag&512?le.ctx.activate(H,te,ee,Oe,_e):ke(H,te,ee,le,we,Oe,_e):je(R,H,_e)},ke=(R,H,te,ee,le,we,Oe)=>{const ye=R.isCompatRoot&&R.component,_e=ye||(R.component=hw(R,ee,le));if(cu(R)&&(_e.ctx.renderer=Ge),ye||fw(_e),_e.asyncDep){if(le&&le.registerDep(_e,de),!R.el){const pe=_e.subTree=F(Bn);L(null,pe,H,te)}return}de(_e,R,H,te,le,we,Oe)},je=(R,H,te)=>{const ee=H.component=R.component;if(eH(R,H,te))if(ee.asyncDep&&!ee.asyncResolved){Me(ee,H,te);return}else ee.next=H,$7(ee.update),ee.update();else H.el=R.el,ee.vnode=H},de=(R,H,te,ee,le,we,Oe)=>{const ye=()=>{if(R.isMounted){let{next:Pe,bu:Te,u:Ee,parent:Re,vnode:qe}=R,Je=Pe,Qe;ta(R,!1),Pe?(Pe.el=qe.el,Me(R,Pe,Oe)):Pe=qe,Te&&is(Te),(Qe=Pe.props&&Pe.props.onVnodeBeforeUpdate)&&ui(Qe,Re,Pe,qe),Tt("INSTANCE_EVENT_HOOKS",R)&&R.emit("hook:beforeUpdate"),ta(R,!0);const Zt=Zh(R),Ti=R.subTree;R.subTree=Zt,M(Ti,Zt,y(Ti.el),ge(Ti),R,le,we),Pe.el=Zt.el,Je===null&&Hk(R,Zt.el),Ee&&gn(Ee,le),(Qe=Pe.props&&Pe.props.onVnodeUpdated)&&gn(()=>ui(Qe,Re,Pe,qe),le),Tt("INSTANCE_EVENT_HOOKS",R)&&gn(()=>R.emit("hook:updated"),le)}else{let Pe;const{el:Te,props:Ee}=H,{bm:Re,m:qe,parent:Je}=R,Qe=ba(H);if(ta(R,!1),Re&&is(Re),!Qe&&(Pe=Ee&&Ee.onVnodeBeforeMount)&&ui(Pe,Je,H),Tt("INSTANCE_EVENT_HOOKS",R)&&R.emit("hook:beforeMount"),ta(R,!0),Te&&Ve){const Zt=()=>{R.subTree=Zh(R),Ve(Te,R.subTree,R,le,null)};Qe?H.type.__asyncLoader().then(()=>!R.isUnmounted&&Zt()):Zt()}else{const Zt=R.subTree=Zh(R);M(null,Zt,te,ee,R,le,we),H.el=Zt.el}if(qe&&gn(qe,le),!Qe&&(Pe=Ee&&Ee.onVnodeMounted)){const Zt=H;gn(()=>ui(Pe,Je,Zt),le)}Tt("INSTANCE_EVENT_HOOKS",R)&&gn(()=>R.emit("hook:mounted"),le),(H.shapeFlag&256||Je&&ba(Je.vnode)&&Je.vnode.shapeFlag&256)&&(R.a&&gn(R.a,le),Tt("INSTANCE_EVENT_HOOKS",R)&&gn(()=>R.emit("hook:activated"),le)),R.isMounted=!0,H=te=ee=null}},_e=R.effect=new hc(ye,()=>kp(pe),R.scope),pe=R.update=()=>_e.run();pe.id=R.uid,ta(R,!0),pe()},Me=(R,H,te)=>{H.component=R;const ee=R.vnode.props;R.vnode=H,R.next=null,NH(R,H.props,ee,te),LH(R,H.children,te),fc(),GT(),pc()},ze=(R,H,te,ee,le,we,Oe,ye,_e=!1)=>{const pe=R&&R.children,Pe=R?R.shapeFlag:0,Te=H.children,{patchFlag:Ee,shapeFlag:Re}=H;if(Ee>0){if(Ee&128){Ke(pe,Te,te,ee,le,we,Oe,ye,_e);return}else if(Ee&256){hn(pe,Te,te,ee,le,we,Oe,ye,_e);return}}Re&8?(Pe&16&&fe(pe,le,we),Te!==pe&&C(te,Te)):Pe&16?Re&16?Ke(pe,Te,te,ee,le,we,Oe,ye,_e):fe(pe,le,we,!0):(Pe&8&&C(te,""),Re&16&&G(Te,te,ee,le,we,Oe,ye,_e))},hn=(R,H,te,ee,le,we,Oe,ye,_e)=>{R=R||Rl,H=H||Rl;const pe=R.length,Pe=H.length,Te=Math.min(pe,Pe);let Ee;for(Ee=0;Ee<Te;Ee++){const Re=H[Ee]=_e?Qo(H[Ee]):Ri(H[Ee]);M(R[Ee],Re,te,null,le,we,Oe,ye,_e)}pe>Pe?fe(R,le,we,!0,!1,Te):G(H,te,ee,le,we,Oe,ye,_e,Te)},Ke=(R,H,te,ee,le,we,Oe,ye,_e)=>{let pe=0;const Pe=H.length;let Te=R.length-1,Ee=Pe-1;for(;pe<=Te&&pe<=Ee;){const Re=R[pe],qe=H[pe]=_e?Qo(H[pe]):Ri(H[pe]);if(br(Re,qe))M(Re,qe,te,null,le,we,Oe,ye,_e);else break;pe++}for(;pe<=Te&&pe<=Ee;){const Re=R[Te],qe=H[Ee]=_e?Qo(H[Ee]):Ri(H[Ee]);if(br(Re,qe))M(Re,qe,te,null,le,we,Oe,ye,_e);else break;Te--,Ee--}if(pe>Te){if(pe<=Ee){const Re=Ee+1,qe=Re<Pe?H[Re].el:ee;for(;pe<=Ee;)M(null,H[pe]=_e?Qo(H[pe]):Ri(H[pe]),te,qe,le,we,Oe,ye,_e),pe++}}else if(pe>Ee)for(;pe<=Te;)Qt(R[pe],le,we,!0),pe++;else{const Re=pe,qe=pe,Je=new Map;for(pe=qe;pe<=Ee;pe++){const Zn=H[pe]=_e?Qo(H[pe]):Ri(H[pe]);Zn.key!=null&&Je.set(Zn.key,pe)}let Qe,Zt=0;const Ti=Ee-qe+1;let Oo=!1,Do=0;const Ns=new Array(Ti);for(pe=0;pe<Ti;pe++)Ns[pe]=0;for(pe=Re;pe<=Te;pe++){const Zn=R[pe];if(Zt>=Ti){Qt(Zn,le,we,!0);continue}let ji;if(Zn.key!=null)ji=Je.get(Zn.key);else for(Qe=qe;Qe<=Ee;Qe++)if(Ns[Qe-qe]===0&&br(Zn,H[Qe])){ji=Qe;break}ji===void 0?Qt(Zn,le,we,!0):(Ns[ji-qe]=pe+1,ji>=Do?Do=ji:Oo=!0,M(Zn,H[ji],te,null,le,we,Oe,ye,_e),Zt++)}const Ru=Oo?ZH(Ns):Rl;for(Qe=Ru.length-1,pe=Ti-1;pe>=0;pe--){const Zn=qe+pe,ji=H[Zn],Bu=Zn+1<Pe?H[Zn+1].el:ee;Ns[pe]===0?M(null,ji,te,Bu,le,we,Oe,ye,_e):Oo&&(Qe<0||pe!==Ru[Qe]?Vt(ji,te,Bu,2):Qe--)}}},Vt=(R,H,te,ee,le=null)=>{const{el:we,type:Oe,transition:ye,children:_e,shapeFlag:pe}=R;if(pe&6){Vt(R.component.subTree,H,te,ee);return}if(pe&128){R.suspense.move(H,te,ee);return}if(pe&64){Oe.move(R,H,te,Ge);return}if(Oe===Ye){s(we,H,te);for(let Te=0;Te<_e.length;Te++)Vt(_e[Te],H,te,ee);s(R.anchor,H,te);return}if(Oe===ls){$(R,H,te);return}if(ee!==2&&pe&1&&ye)if(ee===0)ye.beforeEnter(we),s(we,H,te),gn(()=>ye.enter(we),le);else{const{leave:Te,delayLeave:Ee,afterLeave:Re}=ye,qe=()=>s(we,H,te),Je=()=>{Te(we,()=>{qe(),Re&&Re()})};Ee?Ee(we,qe,Je):Je()}else s(we,H,te)},Qt=(R,H,te,ee=!1,le=!1)=>{const{type:we,props:Oe,ref:ye,children:_e,dynamicChildren:pe,shapeFlag:Pe,patchFlag:Te,dirs:Ee}=R;if(ye!=null&&xf(ye,null,te,R,!0),Pe&256){H.ctx.deactivate(R);return}const Re=Pe&1&&Ee,qe=!ba(R);let Je;if(qe&&(Je=Oe&&Oe.onVnodeBeforeUnmount)&&ui(Je,H,R),Pe&6)W(R.component,te,ee);else{if(Pe&128){R.suspense.unmount(te,ee);return}Re&&Hr(R,null,H,"beforeUnmount"),Pe&64?R.type.remove(R,H,te,le,Ge,ee):pe&&(we!==Ye||Te>0&&Te&64)?fe(pe,H,te,!1,!0):(we===Ye&&Te&384||!le&&Pe&16)&&fe(_e,H,te),ee&&sr(R)}(qe&&(Je=Oe&&Oe.onVnodeUnmounted)||Re)&&gn(()=>{Je&&ui(Je,H,R),Re&&Hr(R,null,H,"unmounted")},te)},sr=R=>{const{type:H,el:te,anchor:ee,transition:le}=R;if(H===Ye){Sr(te,ee);return}if(H===ls){K(R);return}const we=()=>{d(te),le&&!le.persisted&&le.afterLeave&&le.afterLeave()};if(R.shapeFlag&1&&le&&!le.persisted){const{leave:Oe,delayLeave:ye}=le,_e=()=>Oe(te,we);ye?ye(R.el,we,_e):_e()}else we()},Sr=(R,H)=>{let te;for(;R!==H;)te=E(R),d(R),R=te;d(H)},W=(R,H,te)=>{const{bum:ee,scope:le,update:we,subTree:Oe,um:ye}=R;ee&&is(ee),Tt("INSTANCE_EVENT_HOOKS",R)&&R.emit("hook:beforeDestroy"),le.stop(),we&&(we.active=!1,Qt(Oe,R,H,te)),ye&&gn(ye,H),Tt("INSTANCE_EVENT_HOOKS",R)&&gn(()=>R.emit("hook:destroyed"),H),gn(()=>{R.isUnmounted=!0},H),H&&H.pendingBranch&&!H.isUnmounted&&R.asyncDep&&!R.asyncResolved&&R.suspenseId===H.pendingId&&(H.deps--,H.deps===0&&H.resolve())},fe=(R,H,te,ee=!1,le=!1,we=0)=>{for(let Oe=we;Oe<R.length;Oe++)Qt(R[Oe],H,te,ee,le)},ge=R=>R.shapeFlag&6?ge(R.component.subTree):R.shapeFlag&128?R.suspense.next():E(R.anchor||R.el),ve=(R,H,te)=>{R==null?H._vnode&&Qt(H._vnode,null,null,!0):M(H._vnode||null,R,H,null,null,null,te),GT(),Ef(),H._vnode=R},Ge={p:M,um:Qt,m:Vt,r:sr,mt:ke,mc:G,pc:ze,pbc:X,n:ge,o:n};let ct,Ve;return t&&([ct,Ve]=t(Ge)),{render:ve,hydrate:ct,createApp:YH(ve,ct)}}function ta({effect:n,update:t},r){n.allowRecurse=t.allowRecurse=r}function dw(n,t,r=!1){const s=n.children,d=t.children;if(Se(s)&&Se(d))for(let f=0;f<s.length;f++){const p=s[f];let v=d[f];v.shapeFlag&1&&!v.dynamicChildren&&((v.patchFlag<=0||v.patchFlag===32)&&(v=d[f]=Qo(d[f]),v.el=p.el),r||dw(p,v)),v.type===vs&&(v.el=p.el)}}function ZH(n){const t=n.slice(),r=[0];let s,d,f,p,v;const m=n.length;for(s=0;s<m;s++){const w=n[s];if(w!==0){if(d=r[r.length-1],n[d]<w){t[s]=d,r.push(s);continue}for(f=0,p=r.length-1;f<p;)v=f+p>>1,n[r[v]]<w?f=v+1:p=v;w<n[r[f]]&&(f>0&&(t[s]=r[f-1]),r[f]=s)}}for(f=r.length,p=r[f-1];f-- >0;)r[f]=p,p=t[p];return r}const JH=n=>n.__isTeleport,Ed=n=>n&&(n.disabled||n.disabled===""),ax=n=>typeof SVGElement<"u"&&n instanceof SVGElement,yv=(n,t)=>{const r=n&&n.to;return Ft(r)?t?t(r):null:r},XH={__isTeleport:!0,process(n,t,r,s,d,f,p,v,m,w){const{mc:C,pc:y,pbc:E,o:{insert:S,querySelector:I,createText:M,createComment:q}}=w,L=Ed(t.props);let{shapeFlag:B,children:$,dynamicChildren:K}=t;if(n==null){const Z=t.el=M(""),re=t.anchor=M("");S(Z,r,s),S(re,r,s);const J=t.target=yv(t.props,I),G=t.targetAnchor=M("");J&&(S(G,J),p=p||ax(J));const P=(X,he)=>{B&16&&C($,X,he,d,f,p,v,m)};L?P(r,re):J&&P(J,G)}else{t.el=n.el;const Z=t.anchor=n.anchor,re=t.target=n.target,J=t.targetAnchor=n.targetAnchor,G=Ed(n.props),P=G?r:re,X=G?Z:J;if(p=p||ax(re),K?(E(n.dynamicChildren,K,P,d,f,p,v),dw(n,t,!0)):m||y(n,t,P,X,d,f,p,v,!1),L)G||Fh(t,r,Z,w,1);else if((t.props&&t.props.to)!==(n.props&&n.props.to)){const he=t.target=yv(t.props,I);he&&Fh(t,he,null,w,0)}else G&&Fh(t,re,J,w,1)}eP(t)},remove(n,t,r,s,{um:d,o:{remove:f}},p){const{shapeFlag:v,children:m,anchor:w,targetAnchor:C,target:y,props:E}=n;if(y&&f(C),(p||!Ed(E))&&(f(w),v&16))for(let S=0;S<m.length;S++){const I=m[S];d(I,t,r,!0,!!I.dynamicChildren)}},move:Fh,hydrate:e8};function Fh(n,t,r,{o:{insert:s},m:d},f=2){f===0&&s(n.targetAnchor,t,r);const{el:p,anchor:v,shapeFlag:m,children:w,props:C}=n,y=f===2;if(y&&s(p,t,r),(!y||Ed(C))&&m&16)for(let E=0;E<w.length;E++)d(w[E],t,r,2);y&&s(v,t,r)}function e8(n,t,r,s,d,f,{o:{nextSibling:p,parentNode:v,querySelector:m}},w){const C=t.target=yv(t.props,m);if(C){const y=C._lpa||C.firstChild;if(t.shapeFlag&16)if(Ed(t.props))t.anchor=w(p(n),t,v(n),r,s,d,f),t.targetAnchor=y;else{t.anchor=p(n);let E=y;for(;E;)if(E=p(E),E&&E.nodeType===8&&E.data==="teleport anchor"){t.targetAnchor=E,C._lpa=t.targetAnchor&&p(t.targetAnchor);break}w(y,t,C,r,s,d,f)}eP(t)}return t.anchor&&p(t.anchor)}const XI=XH;function eP(n){const t=n.ctx;if(t&&t.ut){let r=n.children[0].el;for(;r!==n.targetAnchor;)r.nodeType===1&&r.setAttribute("data-v-owner",t.uid),r=r.nextSibling;t.ut()}}const Ob=new Map;function t8(n){if(Ob.has(n))return Ob.get(n);let t,r;const s=new Promise((p,v)=>{t=p,r=v}),d=n(t,r);let f;return sp(d)?f=Ad(()=>d):rt(d)&&!_i(d)&&!Se(d)?f=Ad({loader:()=>d.component,loadingComponent:d.loading,errorComponent:d.error,delay:d.delay,timeout:d.timeout}):d==null?f=Ad(()=>s):f=n,Ob.set(n,f),f}function n8(n,t){return n.__isBuiltIn?n:(Be(n)&&n.cid&&(n=n.options),Be(n)&&_p("COMPONENT_ASYNC",t,n)?t8(n):rt(n)&&n.functional&&wo("COMPONENT_FUNCTIONAL",t,n)?mH(n):n)}const Ye=Symbol(void 0),vs=Symbol(void 0),Bn=Symbol(void 0),ls=Symbol(void 0),Td=[];let mi=null;function oe(n=!1){Td.push(mi=n?null:[])}function tP(){Td.pop(),mi=Td[Td.length-1]||null}let ya=1;function Sf(n){ya+=n}function nP(n){return n.dynamicChildren=ya>0?mi||Rl:null,tP(),ya>0&&mi&&mi.push(n),n}function be(n,t,r,s,d,f){return nP(j(n,t,r,s,d,f,!0))}function xt(n,t,r,s,d){return nP(F(n,t,r,s,d,!0))}function _i(n){return n?n.__v_isVNode===!0:!1}function br(n,t){return n.type===t.type&&n.key===t.key}function iP(n){}const Sp="__vInternal",rP=({key:n})=>n!=null?n:null,Jh=({ref:n,ref_key:t,ref_for:r})=>n!=null?Ft(n)||en(n)||Be(n)?{i:vn,r:n,k:t,f:!!r}:n:null;function j(n,t=null,r=null,s=0,d=null,f=n===Ye?0:1,p=!1,v=!1){const m={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&rP(t),ref:t&&Jh(t),scopeId:zl,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:f,patchFlag:s,dynamicProps:d,dynamicChildren:null,appContext:null,ctx:vn};return v?(Dp(m,r),f&128&&n.normalize(m)):r&&(m.shapeFlag|=Ft(r)?8:16),ya>0&&!p&&mi&&(m.patchFlag>0||f&6)&&m.patchFlag!==32&&mi.push(m),q7(m),LI(m),m}const F=i8;function i8(n,t=null,r=null,s=0,d=null,f=!1){if((!n||n===RI)&&(n=Bn),_i(n)){const v=er(n,t,!0);return r&&Dp(v,r),ya>0&&!f&&mi&&(v.shapeFlag&6?mi[mi.indexOf(n)]=v:mi.push(v)),v.patchFlag|=-2,v}if(l8(n)&&(n=n.__vccOpts),n=n8(n,vn),t){t=uw(t);let{class:v,style:m}=t;v&&!Ft(v)&&(t.class=Le(v)),rt(m)&&(mp(m)&&!Se(m)&&(m=at({},m)),t.style=kr(m))}const p=Ft(n)?1:yI(n)?128:JH(n)?64:rt(n)?4:Be(n)?2:0;return j(n,t,r,s,d,p,f,!0)}function uw(n){return n?mp(n)||Sp in n?at({},n):n:null}function er(n,t,r=!1){const{props:s,ref:d,patchFlag:f,children:p}=n,v=t?hu(s||{},t):s,m={__v_isVNode:!0,__v_skip:!0,type:n.type,props:v,key:v&&rP(v),ref:t&&t.ref?r&&d?Se(d)?d.concat(Jh(t)):[d,Jh(t)]:Jh(t):d,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:p,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Ye?f===-1?16:f|16:f,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&er(n.ssContent),ssFallback:n.ssFallback&&er(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return LI(m),m}function xe(n=" ",t=0){return F(vs,null,n,t)}function Op(n,t){const r=F(ls,null,n);return r.staticCount=t,r}function et(n="",t=!1){return t?(oe(),xt(Bn,null,n)):F(Bn,null,n)}function Ri(n){return n==null||typeof n=="boolean"?F(Bn):Se(n)?F(Ye,null,n.slice()):typeof n=="object"?Qo(n):F(vs,null,String(n))}function Qo(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:er(n)}function Dp(n,t){let r=0;const{shapeFlag:s}=n;if(t==null)t=null;else if(Se(t))r=16;else if(typeof t=="object")if(s&65){const d=t.default;d&&(d._c&&(d._d=!1),Dp(n,d()),d._c&&(d._d=!0));return}else{r=32;const d=t._;!d&&!(Sp in t)?t._ctx=vn:d===3&&vn&&(vn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else Be(t)?(t={default:t,_ctx:vn},r=32):(t=String(t),s&64?(r=16,t=[xe(t)]):r=8);n.children=t,n.shapeFlag|=r}function hu(...n){const t={};for(let r=0;r<n.length;r++){const s=n[r];for(const d in s)if(d==="class")t.class!==s.class&&(t.class=Le([t.class,s.class]));else if(d==="style")t.style=kr([t.style,s.style]);else if(yo(d)){const f=t[d],p=s[d];p&&f!==p&&!(Se(f)&&f.includes(p))&&(t[d]=f?[].concat(f,p):p)}else d!==""&&(t[d]=s[d])}return t}function ui(n,t,r,s=null){ri(n,t,7,[r,s])}const r8=ZI();let o8=0;function hw(n,t,r){const s=n.type,d=(t?t.appContext:n.appContext)||r8,f={uid:o8++,vnode:n,type:s,parent:t,appContext:d,root:null,next:null,subTree:null,effect:null,update:null,scope:new lp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(d.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:WI(s,d),emitsOptions:_I(s,d),emit:null,emitted:null,propsDefaults:Pt,inheritAttrs:s.inheritAttrs,ctx:Pt,data:Pt,props:Pt,attrs:Pt,slots:Pt,refs:Pt,setupState:Pt,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return f.ctx={_:f},f.root=t?t.root:f,f.emit=Q7.bind(null,f),n.ce&&n.ce(f),f}let ln=null;const rr=()=>ln||vn,ks=n=>{ln=n,n.scope.on()},cs=()=>{ln&&ln.scope.off(),ln=null};function oP(n){return n.vnode.shapeFlag&4}let Ql=!1;function fw(n,t=!1){Ql=t;const{props:r,children:s}=n.vnode,d=oP(n);MH(n,r,d,t),BH(n,s);const f=d?s8(n,t):void 0;return Ql=!1,f}function s8(n,t){const r=n.type;n.accessCache=Object.create(null),n.proxy=ms(new Proxy(n.ctx,kv));const{setup:s}=r;if(s){const d=n.setupContext=s.length>1?aP(n):null;ks(n),fc();const f=wr(s,n,0,[n.props,d]);if(pc(),cs(),sp(f)){if(f.then(cs,cs),t)return f.then(p=>{Av(n,p,t)}).catch(p=>{Ts(p,n,0)});n.asyncDep=f}else Av(n,f,t)}else pw(n,t)}function Av(n,t,r){Be(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:rt(t)&&(n.setupState=vp(t)),pw(n,r)}let Of,Ev;function sP(n){Of=n,Ev=t=>{t.render._rc&&(t.withProxy=new Proxy(t.ctx,SH))}}const Df=()=>!Of;function pw(n,t,r){const s=n.type;if(fH(n),!n.render){if(!t&&Of&&!s.render){const d=n.vnode.props&&n.vnode.props["inline-template"]||s.template||uu(n).template;if(d){const{isCustomElement:f,compilerOptions:p}=n.appContext.config,{delimiters:v,compilerOptions:m}=s,w=at(at({isCustomElement:f,delimiters:v},p),m);w.compatConfig=Object.create(zk),s.compatConfig&&at(w.compatConfig,s.compatConfig),s.render=Of(d,w)}}n.render=s.render||vi,Ev&&Ev(n)}r||(ks(n),fc(),OH(n),pc(),cs())}function a8(n){return new Proxy(n.attrs,{get(t,r){return oi(n,"get","$attrs"),t[r]}})}function aP(n){const t=s=>{n.exposed=s||{}};let r;return{get attrs(){return r||(r=a8(n))},slots:n.slots,emit:n.emit,expose:t}}function Ip(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(vp(ms(n.exposed)),{get(t,r){if(r in t)return t[r];if(r in $l)return $l[r](n)},has(t,r){return r in t||r in $l}}))}function Tv(n,t=!0){return Be(n)?n.displayName||n.name:n.name||t&&n.__name}function l8(n){return Be(n)&&"__vccOpts"in n}const ii=(n,t)=>z7(n,t,Ql);function lP(){return null}function cP(){return null}function dP(n){}function uP(n,t){return null}function hP(){return pP().slots}function fP(){return pP().attrs}function pP(){const n=rr();return n.setupContext||(n.setupContext=aP(n))}function gP(n,t){const r=Se(n)?n.reduce((s,d)=>(s[d]={},s),{}):n;for(const s in t){const d=r[s];d?Se(d)||Be(d)?r[s]={type:d,default:t[s]}:d.default=t[s]:d===null&&(r[s]={default:t[s]})}return r}function mP(n,t){const r={};for(const s in n)t.includes(s)||Object.defineProperty(r,s,{enumerable:!0,get:()=>n[s]});return r}function bP(n){const t=rr();let r=n();return cs(),sp(r)&&(r=r.catch(s=>{throw ks(t),s})),[r,()=>ks(t)]}function fu(n,t,r){const s=arguments.length;return s===2?rt(t)&&!Se(t)?_i(t)?F(n,null,[t]):F(n,t):F(n,null,t):(s>3?r=Array.prototype.slice.call(arguments,2):s===3&&_i(r)&&(r=[r]),F(n,t,r))}const gw=Symbol(""),mw=()=>ki(gw);function vP(){}function kP(n,t,r,s){const d=r[s];if(d&&bw(d,n))return d;const f=t();return f.memo=n.slice(),r[s]=f}function bw(n,t){const r=n.memo;if(r.length!=t.length)return!1;for(let s=0;s<r.length;s++)if(Gl(r[s],t[s]))return!1;return ya>0&&mi&&mi.push(n),!0}const vw="3.2.47",c8={createComponentInstance:hw,setupComponent:fw,renderComponentRoot:Zh,setCurrentRenderingInstance:Ud,isVNode:_i,normalizeVNode:Ri},wP=c8,_P=BI,d8={warnDeprecation:U7,createCompatVue:zH,isCompatEnabled:Tt,checkCompatEnabled:_p,softAssertCompatEnabled:wo},yr=d8,u8="http://www.w3.org/2000/svg",ha=typeof document<"u"?document:null,lx=ha&&ha.createElement("template"),h8={insert:(n,t,r)=>{t.insertBefore(n,r||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,r,s)=>{const d=t?ha.createElementNS(u8,n):ha.createElement(n,r?{is:r}:void 0);return n==="select"&&s&&s.multiple!=null&&d.setAttribute("multiple",s.multiple),d},createText:n=>ha.createTextNode(n),createComment:n=>ha.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ha.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,r,s,d,f){const p=r?r.previousSibling:t.lastChild;if(d&&(d===f||d.nextSibling))for(;t.insertBefore(d.cloneNode(!0),r),!(d===f||!(d=d.nextSibling)););else{lx.innerHTML=s?`<svg>${n}</svg>`:n;const v=lx.content;if(s){const m=v.firstChild;for(;m.firstChild;)v.appendChild(m.firstChild);v.removeChild(m)}t.insertBefore(v,r)}return[p?p.nextSibling:t.firstChild,r?r.previousSibling:t.lastChild]}};function f8(n,t,r){const s=n._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?n.removeAttribute("class"):r?n.setAttribute("class",t):n.className=t}function p8(n,t,r){const s=n.style,d=Ft(r);if(r&&!d){if(t&&!Ft(t))for(const f in t)r[f]==null&&xv(s,f,"");for(const f in r)xv(s,f,r[f])}else{const f=s.display;d?t!==r&&(s.cssText=r):t&&n.removeAttribute("style"),"_vod"in n&&(s.display=f)}}const cx=/\s*!important$/;function xv(n,t,r){if(Se(r))r.forEach(s=>xv(n,t,s));else if(r==null&&(r=""),t.startsWith("--"))n.setProperty(t,r);else{const s=g8(n,t);cx.test(r)?n.setProperty(ni(s),r.replace(cx,""),"important"):n[s]=r}}const dx=["Webkit","Moz","ms"],Db={};function g8(n,t){const r=Db[t];if(r)return r;let s=Wn(t);if(s!=="filter"&&s in n)return Db[t]=s;s=uc(s);for(let d=0;d<dx.length;d++){const f=dx[d]+s;if(f in n)return Db[t]=f}return t}const ux="http://www.w3.org/1999/xlink";function m8(n,t,r,s,d){if(s&&t.startsWith("xlink:"))r==null?n.removeAttributeNS(ux,t.slice(6,t.length)):n.setAttributeNS(ux,t,r);else{if(v8(n,t,r,d))return;const f=GD(t);r==null||f&&!WD(r)?n.removeAttribute(t):n.setAttribute(t,f?"":r)}}const b8=cc("contenteditable,draggable,spellcheck");function v8(n,t,r,s=null){if(b8(t)){const d=r===null?"false":typeof r!="boolean"&&r!==void 0?"true":null;if(d&&yr.softAssertCompatEnabled("ATTR_ENUMERATED_COERCION",s,t,r,d))return n.setAttribute(t,d),!0}else if(r===!1&&!GD(t)&&yr.softAssertCompatEnabled("ATTR_FALSE_VALUE",s,t))return n.removeAttribute(t),!0;return!1}function k8(n,t,r,s,d,f,p){if(t==="innerHTML"||t==="textContent"){s&&p(s,d,f),n[t]=r==null?"":r;return}if(t==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=r;const m=r==null?"":r;(n.value!==m||n.tagName==="OPTION")&&(n.value=m),r==null&&n.removeAttribute(t);return}let v=!1;if(r===""||r==null){const m=typeof n[t];m==="boolean"?r=WD(r):r==null&&m==="string"?(r="",v=!0):m==="number"&&(r=0,v=!0)}else if(r===!1&&yr.isCompatEnabled("ATTR_FALSE_VALUE",d)){const m=typeof n[t];(m==="string"||m==="number")&&(r=m==="number"?0:"",v=!0)}try{n[t]=r}catch{}v&&n.removeAttribute(t)}function mo(n,t,r,s){n.addEventListener(t,r,s)}function w8(n,t,r,s){n.removeEventListener(t,r,s)}function _8(n,t,r,s,d=null){const f=n._vei||(n._vei={}),p=f[t];if(s&&p)p.value=s;else{const[v,m]=C8(t);if(s){const w=f[t]=E8(s,d);mo(n,v,w,m)}else p&&(w8(n,v,p,m),f[t]=void 0)}}const hx=/(?:Once|Passive|Capture)$/;function C8(n){let t;if(hx.test(n)){t={};let s;for(;s=n.match(hx);)n=n.slice(0,n.length-s[0].length),t[s[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ni(n.slice(2)),t]}let Ib=0;const y8=Promise.resolve(),A8=()=>Ib||(y8.then(()=>Ib=0),Ib=Date.now());function E8(n,t){const r=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=r.attached)return;ri(T8(s,r.value),t,5,[s])};return r.value=n,r.attached=A8(),r}function T8(n,t){if(Se(t)){const r=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{r.call(n),n._stopped=!0},t.map(s=>d=>!d._stopped&&s&&s(d))}else return t}const fx=/^on[a-z]/,x8=(n,t,r,s,d=!1,f,p,v,m)=>{t==="class"?f8(n,s,d):t==="style"?p8(n,r,s):yo(t)?Ek(t)||_8(n,t,r,s,p):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):S8(n,t,s,d))?k8(n,t,s,f,p,v,m):(t==="true-value"?n._trueValue=s:t==="false-value"&&(n._falseValue=s),m8(n,t,s,d,p))};function S8(n,t,r,s){return s?!!(t==="innerHTML"||t==="textContent"||t in n&&fx.test(t)&&Be(r)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA"||fx.test(t)&&Ft(r)?!1:t in n}function kw(n,t){const r=gc(n);class s extends pu{constructor(f){super(r,f,t)}}return s.def=r,s}const CP=n=>kw(n,Aw),O8=typeof HTMLElement<"u"?HTMLElement:class{};class pu extends O8{constructor(t,r={},s){super(),this._def=t,this._props=r,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&s?s(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,xs(()=>{this._connected||(If(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let s=0;s<this.attributes.length;s++)this._setAttr(this.attributes[s].name);new MutationObserver(s=>{for(const d of s)this._setAttr(d.attributeName)}).observe(this,{attributes:!0});const t=(s,d=!1)=>{const{props:f,styles:p}=s;let v;if(f&&!Se(f))for(const m in f){const w=f[m];(w===Number||w&&w.type===Number)&&(m in this._props&&(this._props[m]=yf(this._props[m])),(v||(v=Object.create(null)))[Wn(m)]=!0)}this._numberProps=v,d&&this._resolveProps(s),this._applyStyles(p),this._update()},r=this._def.__asyncLoader;r?r().then(s=>t(s,!0)):t(this._def)}_resolveProps(t){const{props:r}=t,s=Se(r)?r:Object.keys(r||{});for(const d of Object.keys(this))d[0]!=="_"&&s.includes(d)&&this._setProp(d,this[d],!0,!1);for(const d of s.map(Wn))Object.defineProperty(this,d,{get(){return this._getProp(d)},set(f){this._setProp(d,f)}})}_setAttr(t){let r=this.getAttribute(t);const s=Wn(t);this._numberProps&&this._numberProps[s]&&(r=yf(r)),this._setProp(s,r,!1)}_getProp(t){return this._props[t]}_setProp(t,r,s=!0,d=!0){r!==this._props[t]&&(this._props[t]=r,d&&this._instance&&this._update(),s&&(r===!0?this.setAttribute(ni(t),""):typeof r=="string"||typeof r=="number"?this.setAttribute(ni(t),r+""):r||this.removeAttribute(ni(t))))}_update(){If(this._createVNode(),this.shadowRoot)}_createVNode(){const t=F(this._def,at({},this._props));return this._instance||(t.ce=r=>{this._instance=r,r.isCE=!0;const s=(f,p)=>{this.dispatchEvent(new CustomEvent(f,{detail:p}))};r.emit=(f,...p)=>{s(f,p),ni(f)!==f&&s(ni(f),p)};let d=this;for(;d=d&&(d.parentNode||d.host);)if(d instanceof pu){r.parent=d._instance,r.provides=d._instance.provides;break}}),t}_applyStyles(t){t&&t.forEach(r=>{const s=document.createElement("style");s.textContent=r,this.shadowRoot.appendChild(s)})}}function yP(n="$style"){{const t=rr();if(!t)return Pt;const r=t.type.__cssModules;if(!r)return Pt;const s=r[n];return s||Pt}}function AP(n){const t=rr();if(!t)return;const r=t.ut=(d=n(t.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach(f=>Ov(f,d))},s=()=>{const d=n(t.proxy);Sv(t.subTree,d),r(d)};Gk(s),mc(()=>{const d=new MutationObserver(s);d.observe(t.subTree.el.parentNode,{childList:!0}),ql(()=>d.disconnect())})}function Sv(n,t){if(n.shapeFlag&128){const r=n.suspense;n=r.activeBranch,r.pendingBranch&&!r.isHydrating&&r.effects.push(()=>{Sv(r.activeBranch,t)})}for(;n.component;)n=n.component.subTree;if(n.shapeFlag&1&&n.el)Ov(n.el,t);else if(n.type===Ye)n.children.forEach(r=>Sv(r,t));else if(n.type===ls){let{el:r,anchor:s}=n;for(;r&&(Ov(r,t),r!==s);)r=r.nextSibling}}function Ov(n,t){if(n.nodeType===1){const r=n.style;for(const s in t)r.setProperty(`--${s}`,t[s])}}const Ho="transition",id="animation",bc=(n,{slots:t})=>fu(Ep,TP(n),t);bc.displayName="Transition";bc.__isBuiltIn=!0;const EP={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},D8=bc.props=at({},Ep.props,EP),na=(n,t=[])=>{Se(n)?n.forEach(r=>r(...t)):n&&n(...t)},px=n=>n?Se(n)?n.some(t=>t.length>1):n.length>1:!1;function TP(n){const t={};for(const de in n)de in EP||(t[de]=n[de]);if(n.css===!1)return t;const{name:r="v",type:s,duration:d,enterFromClass:f=`${r}-enter-from`,enterActiveClass:p=`${r}-enter-active`,enterToClass:v=`${r}-enter-to`,appearFromClass:m=f,appearActiveClass:w=p,appearToClass:C=v,leaveFromClass:y=`${r}-leave-from`,leaveActiveClass:E=`${r}-leave-active`,leaveToClass:S=`${r}-leave-to`}=n,I=yr.isCompatEnabled("TRANSITION_CLASSES",null);let M,q,L;if(I){const de=Me=>Me.replace(/-from$/,"");n.enterFromClass||(M=de(f)),n.appearFromClass||(q=de(m)),n.leaveFromClass||(L=de(y))}const B=I8(d),$=B&&B[0],K=B&&B[1],{onBeforeEnter:Z,onEnter:re,onEnterCancelled:J,onLeave:G,onLeaveCancelled:P,onBeforeAppear:X=Z,onAppear:he=re,onAppearCancelled:Ie=J}=t,De=(de,Me,ze)=>{$r(de,Me?C:v),$r(de,Me?w:p),ze&&ze()},ke=(de,Me)=>{de._isLeaving=!1,$r(de,y),$r(de,S),$r(de,E),Me&&Me()},je=de=>(Me,ze)=>{const hn=de?he:re,Ke=()=>De(Me,de,ze);na(hn,[Me,Ke]),gx(()=>{if($r(Me,de?m:f),I){const Vt=de?q:M;Vt&&$r(Me,Vt)}Ki(Me,de?C:v),px(hn)||mx(Me,s,$,Ke)})};return at(t,{onBeforeEnter(de){na(Z,[de]),Ki(de,f),I&&M&&Ki(de,M),Ki(de,p)},onBeforeAppear(de){na(X,[de]),Ki(de,m),I&&q&&Ki(de,q),Ki(de,w)},onEnter:je(!1),onAppear:je(!0),onLeave(de,Me){de._isLeaving=!0;const ze=()=>ke(de,Me);Ki(de,y),I&&L&&Ki(de,L),SP(),Ki(de,E),gx(()=>{!de._isLeaving||($r(de,y),I&&L&&$r(de,L),Ki(de,S),px(G)||mx(de,s,K,ze))}),na(G,[de,ze])},onEnterCancelled(de){De(de,!1),na(J,[de])},onAppearCancelled(de){De(de,!0),na(Ie,[de])},onLeaveCancelled(de){ke(de),na(P,[de])}})}function I8(n){if(n==null)return null;if(rt(n))return[Pb(n.enter),Pb(n.leave)];{const t=Pb(n);return[t,t]}}function Pb(n){return yf(n)}function Ki(n,t){t.split(/\s+/).forEach(r=>r&&n.classList.add(r)),(n._vtc||(n._vtc=new Set)).add(t)}function $r(n,t){t.split(/\s+/).forEach(s=>s&&n.classList.remove(s));const{_vtc:r}=n;r&&(r.delete(t),r.size||(n._vtc=void 0))}function gx(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let P8=0;function mx(n,t,r,s){const d=n._endId=++P8,f=()=>{d===n._endId&&s()};if(r)return setTimeout(f,r);const{type:p,timeout:v,propCount:m}=xP(n,t);if(!p)return s();const w=p+"end";let C=0;const y=()=>{n.removeEventListener(w,E),f()},E=S=>{S.target===n&&++C>=m&&y()};setTimeout(()=>{C<m&&y()},v+1),n.addEventListener(w,E)}function xP(n,t){const r=window.getComputedStyle(n),s=I=>(r[I]||"").split(", "),d=s(`${Ho}Delay`),f=s(`${Ho}Duration`),p=bx(d,f),v=s(`${id}Delay`),m=s(`${id}Duration`),w=bx(v,m);let C=null,y=0,E=0;t===Ho?p>0&&(C=Ho,y=p,E=f.length):t===id?w>0&&(C=id,y=w,E=m.length):(y=Math.max(p,w),C=y>0?p>w?Ho:id:null,E=C?C===Ho?f.length:m.length:0);const S=C===Ho&&/\b(transform|all)(,|$)/.test(s(`${Ho}Property`).toString());return{type:C,timeout:y,propCount:E,hasTransform:S}}function bx(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((r,s)=>vx(r)+vx(n[s])))}function vx(n){return Number(n.slice(0,-1).replace(",","."))*1e3}function SP(){return document.body.offsetHeight}const OP=new WeakMap,DP=new WeakMap,ww={name:"TransitionGroup",props:at({},D8,{tag:String,moveClass:String}),setup(n,{slots:t}){const r=rr(),s=Ap();let d,f;return du(()=>{if(!d.length)return;const p=n.moveClass||`${n.name||"v"}-move`;if(!L8(d[0].el,r.vnode.el,p))return;d.forEach(N8),d.forEach(R8);const v=d.filter(B8);SP(),v.forEach(m=>{const w=m.el,C=w.style;Ki(w,p),C.transform=C.webkitTransform=C.transitionDuration="";const y=w._moveCb=E=>{E&&E.target!==w||(!E||/transform$/.test(E.propertyName))&&(w.removeEventListener("transitionend",y),w._moveCb=null,$r(w,p))};w.addEventListener("transitionend",y)})}),()=>{const p=it(n),v=TP(p);let m=p.tag||Ye;!p.tag&&yr.checkCompatEnabled("TRANSITION_GROUP_ROOT",r.parent)&&(m="span"),d=f,f=t.default?lu(t.default()):[];for(let w=0;w<f.length;w++){const C=f[w];C.key!=null&&bs(C,Ca(C,v,s,r))}if(d)for(let w=0;w<d.length;w++){const C=d[w];bs(C,Ca(C,v,s,r)),OP.set(C,C.el.getBoundingClientRect())}return F(m,null,f)}}};ww.__isBuiltIn=!0;const M8=n=>delete n.mode;ww.props;const _w=ww;function N8(n){const t=n.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function R8(n){DP.set(n,n.el.getBoundingClientRect())}function B8(n){const t=OP.get(n),r=DP.get(n),s=t.left-r.left,d=t.top-r.top;if(s||d){const f=n.el.style;return f.transform=f.webkitTransform=`translate(${s}px,${d}px)`,f.transitionDuration="0s",n}}function L8(n,t,r){const s=n.cloneNode();n._vtc&&n._vtc.forEach(p=>{p.split(/\s+/).forEach(v=>v&&s.classList.remove(v))}),r.split(/\s+/).forEach(p=>p&&s.classList.add(p)),s.style.display="none";const d=t.nodeType===1?t:t.parentNode;d.appendChild(s);const{hasTransform:f}=xP(s);return d.removeChild(s),f}const ws=n=>{const t=n.props["onUpdate:modelValue"]||n.props["onModelCompat:input"];return Se(t)?r=>is(t,r):t};function j8(n){n.target.composing=!0}function kx(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Wd={created(n,{modifiers:{lazy:t,trim:r,number:s}},d){n._assign=ws(d);const f=s||d.props&&d.props.type==="number";mo(n,t?"change":"input",p=>{if(p.target.composing)return;let v=n.value;r&&(v=v.trim()),f&&(v=Fd(v)),n._assign(v)}),r&&mo(n,"change",()=>{n.value=n.value.trim()}),t||(mo(n,"compositionstart",j8),mo(n,"compositionend",kx),mo(n,"change",kx))},mounted(n,{value:t}){n.value=t==null?"":t},beforeUpdate(n,{value:t,modifiers:{lazy:r,trim:s,number:d}},f){if(n._assign=ws(f),n.composing||document.activeElement===n&&n.type!=="range"&&(r||s&&n.value.trim()===t||(d||n.type==="number")&&Fd(n.value)===t))return;const p=t==null?"":t;n.value!==p&&(n.value=p)}},Pp={deep:!0,created(n,t,r){n._assign=ws(r),mo(n,"change",()=>{const s=n._modelValue,d=Zl(n),f=n.checked,p=n._assign;if(Se(s)){const v=su(s,d),m=v!==-1;if(f&&!m)p(s.concat(d));else if(!f&&m){const w=[...s];w.splice(v,1),p(w)}}else if(Da(s)){const v=new Set(s);f?v.add(d):v.delete(d),p(v)}else p(IP(n,f))})},mounted:wx,beforeUpdate(n,t,r){n._assign=ws(r),wx(n,t,r)}};function wx(n,{value:t,oldValue:r},s){n._modelValue=t,Se(t)?n.checked=su(t,s.props.value)>-1:Da(t)?n.checked=t.has(s.props.value):t!==r&&(n.checked=ko(t,IP(n,!0)))}const Mp={created(n,{value:t},r){n.checked=ko(t,r.props.value),n._assign=ws(r),mo(n,"change",()=>{n._assign(Zl(n))})},beforeUpdate(n,{value:t,oldValue:r},s){n._assign=ws(s),t!==r&&(n.checked=ko(t,s.props.value))}},Cw={deep:!0,created(n,{value:t,modifiers:{number:r}},s){const d=Da(t);mo(n,"change",()=>{const f=Array.prototype.filter.call(n.options,p=>p.selected).map(p=>r?Fd(Zl(p)):Zl(p));n._assign(n.multiple?d?new Set(f):f:f[0])}),n._assign=ws(s)},mounted(n,{value:t}){_x(n,t)},beforeUpdate(n,t,r){n._assign=ws(r)},updated(n,{value:t}){_x(n,t)}};function _x(n,t){const r=n.multiple;if(!(r&&!Se(t)&&!Da(t))){for(let s=0,d=n.options.length;s<d;s++){const f=n.options[s],p=Zl(f);if(r)Se(t)?f.selected=su(t,p)>-1:f.selected=t.has(p);else if(ko(Zl(f),t)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!r&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Zl(n){return"_value"in n?n._value:n.value}function IP(n,t){const r=t?"_trueValue":"_falseValue";return r in n?n[r]:t}const Np={created(n,t,r){Vh(n,t,r,null,"created")},mounted(n,t,r){Vh(n,t,r,null,"mounted")},beforeUpdate(n,t,r,s){Vh(n,t,r,s,"beforeUpdate")},updated(n,t,r,s){Vh(n,t,r,s,"updated")}};function PP(n,t){switch(n){case"SELECT":return Cw;case"TEXTAREA":return Wd;default:switch(t){case"checkbox":return Pp;case"radio":return Mp;default:return Wd}}}function Vh(n,t,r,s,d){const p=PP(n.tagName,r.props&&r.props.type)[d];p&&p(n,t,r,s)}function z8(){Wd.getSSRProps=({value:n})=>({value:n}),Mp.getSSRProps=({value:n},t)=>{if(t.props&&ko(t.props.value,n))return{checked:!0}},Pp.getSSRProps=({value:n},t)=>{if(Se(n)){if(t.props&&su(n,t.props.value)>-1)return{checked:!0}}else if(Da(n)){if(t.props&&n.has(t.props.value))return{checked:!0}}else if(n)return{checked:!0}},Np.getSSRProps=(n,t)=>{if(typeof t.type!="string")return;const r=PP(t.type.toUpperCase(),t.props&&t.props.type);if(r.getSSRProps)return r.getSSRProps(n,t)}}const F8=["ctrl","shift","alt","meta"],V8={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>F8.some(r=>n[`${r}Key`]&&!t.includes(r))},yw=(n,t)=>(r,...s)=>{for(let d=0;d<t.length;d++){const f=V8[t[d]];if(f&&f(r,t))return}return n(r,...s)},$8={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},qi=(n,t)=>{let r,s=null;return s=rr(),yr.isCompatEnabled("CONFIG_KEY_CODES",s)&&s&&(r=s.appContext.config.keyCodes),d=>{if(!("key"in d))return;const f=ni(d.key);if(t.some(p=>p===f||$8[p]===f))return n(d);{const p=String(d.keyCode);if(yr.isCompatEnabled("V_ON_KEYCODE_MODIFIER",s)&&t.some(v=>v==p))return n(d);if(r)for(const v of t){const m=r[v];if(m&&(Se(m)?m.some(C=>String(C)===p):String(m)===p))return n(d)}}}},Rp={beforeMount(n,{value:t},{transition:r}){n._vod=n.style.display==="none"?"":n.style.display,r&&t?r.beforeEnter(n):rd(n,t)},mounted(n,{value:t},{transition:r}){r&&t&&r.enter(n)},updated(n,{value:t,oldValue:r},{transition:s}){!t!=!r&&(s?t?(s.beforeEnter(n),rd(n,!0),s.enter(n)):s.leave(n,()=>{rd(n,!1)}):rd(n,t))},beforeUnmount(n,{value:t}){rd(n,t)}};function rd(n,t){n.style.display=t?n._vod:"none"}function H8(){Rp.getSSRProps=({value:n})=>{if(!n)return{style:{display:"none"}}}}const MP=at({patchProp:x8},h8);let xd,Cx=!1;function NP(){return xd||(xd=lw(MP))}function RP(){return xd=Cx?xd:cw(MP),Cx=!0,xd}const If=(...n)=>{NP().render(...n)},Aw=(...n)=>{RP().hydrate(...n)},gu=(...n)=>{const t=NP().createApp(...n),{mount:r}=t;return t.mount=s=>{const d=LP(s);if(!d)return;const f=t._component;!Be(f)&&!f.render&&!f.template&&(f.template=d.innerHTML),d.innerHTML="";const p=r(d,!1,d instanceof SVGElement);return d instanceof Element&&(d.removeAttribute("v-cloak"),d.setAttribute("data-v-app","")),p},t},BP=(...n)=>{const t=RP().createApp(...n),{mount:r}=t;return t.mount=s=>{const d=LP(s);if(d)return r(d,!0,d instanceof SVGElement)},t};function LP(n){return Ft(n)?document.querySelector(n):n}let yx=!1;const jP=()=>{yx||(yx=!0,z8(),H8())};var U8=Object.freeze({__proto__:null,BaseTransition:Ep,Comment:Bn,EffectScope:lp,Fragment:Ye,KeepAlive:Wk,ReactiveEffect:hc,Static:ls,Suspense:AI,Teleport:XI,Text:vs,Transition:bc,TransitionGroup:_w,VueElement:pu,assertNumber:mI,callWithAsyncErrorHandling:ri,callWithErrorHandling:wr,camelize:Wn,capitalize:uc,cloneVNode:er,compatUtils:yr,computed:ii,createApp:gu,createBlock:xt,createCommentVNode:et,createElementBlock:be,createElementVNode:j,createHydrationRenderer:cw,createPropsRestProxy:mP,createRenderer:lw,createSSRApp:BP,createSlots:ow,createStaticVNode:Op,createTextVNode:xe,createVNode:F,customRef:fI,defineAsyncComponent:Ad,defineComponent:gc,defineCustomElement:kw,defineEmits:cP,defineExpose:dP,defineProps:lP,defineSSRCustomElement:CP,get devtools(){return da},effect:JD,effectScope:cp,getCurrentInstance:rr,getCurrentScope:dp,getTransitionRawChildren:lu,guardReactiveProps:uw,h:fu,handleError:Ts,hydrate:Aw,initCustomFormatter:vP,initDirectivesForSSR:jP,inject:ki,isMemoSame:bw,isProxy:mp,isReactive:Xi,isReadonly:gs,isRef:en,isRuntimeOnly:Df,isShallow:Wl,isVNode:_i,markRaw:ms,mergeDefaults:gP,mergeProps:hu,nextTick:xs,normalizeClass:Le,normalizeProps:UD,normalizeStyle:kr,onActivated:Kk,onBeforeMount:Yk,onBeforeUnmount:Kl,onBeforeUpdate:Qk,onDeactivated:qk,onErrorCaptured:ew,onMounted:mc,onRenderTracked:Xk,onRenderTriggered:Jk,onScopeDispose:Sk,onServerPrefetch:Zk,onUnmounted:ql,onUpdated:du,openBlock:oe,popScopeId:qt,provide:Vl,proxyRefs:vp,pushScopeId:Kt,queuePostFlushCb:wp,reactive:nr,readonly:pp,ref:os,registerRuntimeCompiler:sP,render:If,renderList:yn,renderSlot:Yl,resolveComponent:ae,resolveDirective:rw,resolveDynamicComponent:iw,resolveFilter:_P,resolveTransitionHooks:Ca,setBlockTracking:Sf,setDevtoolsHook:jk,setTransitionHooks:bs,shallowReactive:Ik,shallowReadonly:dI,shallowRef:Nk,ssrContextKey:gw,ssrUtils:wP,stop:XD,toDisplayString:Ue,toHandlerKey:ga,toHandlers:sw,toRaw:it,toRef:Bk,toRefs:Rk,transformVNodeArgs:iP,triggerRef:hI,unref:ss,useAttrs:fP,useCssModule:yP,useCssVars:AP,useSSRContext:mw,useSlots:hP,useTransitionState:Ap,vModelCheckbox:Pp,vModelDynamic:Np,vModelRadio:Mp,vModelSelect:Cw,vModelText:Wd,vShow:Rp,version:vw,warn:gI,watch:as,watchEffect:TI,watchPostEffect:Gk,watchSyncEffect:xI,withAsyncContext:bP,withCtx:Q,withDefaults:uP,withDirectives:tw,withKeys:qi,withMemo:kP,withModifiers:yw,withScopeId:CI});function G8(...n){const t=gu(...n);return yr.isCompatEnabled("RENDER_FUNCTION",null)&&(t.component("__compat__transition",bc),t.component("__compat__transition-group",_w),t.component("__compat__keep-alive",Wk),t._context.directives.show=Rp,t._context.directives.model=Np),t}function W8(){const n=yr.createCompatVue(gu,G8);return at(n,U8),n}const zP=W8();zP.compile=()=>{};var Gt=zP;const{configureCompat:K8}=Gt,q8=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:Ep,Comment:Bn,EffectScope:lp,Fragment:Ye,KeepAlive:Wk,ReactiveEffect:hc,Static:ls,Suspense:AI,Teleport:XI,Text:vs,Transition:bc,TransitionGroup:_w,VueElement:pu,assertNumber:mI,callWithAsyncErrorHandling:ri,callWithErrorHandling:wr,camelize:Wn,capitalize:uc,cloneVNode:er,compatUtils:yr,computed:ii,configureCompat:K8,createApp:gu,createBlock:xt,createCommentVNode:et,createElementBlock:be,createElementVNode:j,createHydrationRenderer:cw,createPropsRestProxy:mP,createRenderer:lw,createSSRApp:BP,createSlots:ow,createStaticVNode:Op,createTextVNode:xe,createVNode:F,customRef:fI,default:Gt,defineAsyncComponent:Ad,defineComponent:gc,defineCustomElement:kw,defineEmits:cP,defineExpose:dP,defineProps:lP,defineSSRCustomElement:CP,get devtools(){return da},effect:JD,effectScope:cp,getCurrentInstance:rr,getCurrentScope:dp,getTransitionRawChildren:lu,guardReactiveProps:uw,h:fu,handleError:Ts,hydrate:Aw,initCustomFormatter:vP,initDirectivesForSSR:jP,inject:ki,isMemoSame:bw,isProxy:mp,isReactive:Xi,isReadonly:gs,isRef:en,isRuntimeOnly:Df,isShallow:Wl,isVNode:_i,markRaw:ms,mergeDefaults:gP,mergeProps:hu,nextTick:xs,normalizeClass:Le,normalizeProps:UD,normalizeStyle:kr,onActivated:Kk,onBeforeMount:Yk,onBeforeUnmount:Kl,onBeforeUpdate:Qk,onDeactivated:qk,onErrorCaptured:ew,onMounted:mc,onRenderTracked:Xk,onRenderTriggered:Jk,onScopeDispose:Sk,onServerPrefetch:Zk,onUnmounted:ql,onUpdated:du,openBlock:oe,popScopeId:qt,provide:Vl,proxyRefs:vp,pushScopeId:Kt,queuePostFlushCb:wp,reactive:nr,readonly:pp,ref:os,registerRuntimeCompiler:sP,render:If,renderList:yn,renderSlot:Yl,resolveComponent:ae,resolveDirective:rw,resolveDynamicComponent:iw,resolveFilter:_P,resolveTransitionHooks:Ca,setBlockTracking:Sf,setDevtoolsHook:jk,setTransitionHooks:bs,shallowReactive:Ik,shallowReadonly:dI,shallowRef:Nk,ssrContextKey:gw,ssrUtils:wP,stop:XD,toDisplayString:Ue,toHandlerKey:ga,toHandlers:sw,toRaw:it,toRef:Bk,toRefs:Rk,transformVNodeArgs:iP,triggerRef:hI,unref:ss,useAttrs:fP,useCssModule:yP,useCssVars:AP,useSSRContext:mw,useSlots:hP,useTransitionState:Ap,vModelCheckbox:Pp,vModelDynamic:Np,vModelRadio:Mp,vModelSelect:Cw,vModelText:Wd,vShow:Rp,version:vw,warn:gI,watch:as,watchEffect:TI,watchPostEffect:Gk,watchSyncEffect:xI,withAsyncContext:bP,withCtx:Q,withDefaults:uP,withDirectives:tw,withKeys:qi,withMemo:kP,withModifiers:yw,withScopeId:CI},Symbol.toStringTag,{value:"Module"}));/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const xl=typeof window<"u";function Y8(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Et=Object.assign;function Mb(n,t){const r={};for(const s in t){const d=t[s];r[s]=Ar(d)?d.map(n):n(d)}return r}const Sd=()=>{},Ar=Array.isArray,Q8=/\/$/,Z8=n=>n.replace(Q8,"");function Nb(n,t,r="/"){let s,d={},f="",p="";const v=t.indexOf("#");let m=t.indexOf("?");return v<m&&v>=0&&(m=-1),m>-1&&(s=t.slice(0,m),f=t.slice(m+1,v>-1?v:t.length),d=n(f)),v>-1&&(s=s||t.slice(0,v),p=t.slice(v,t.length)),s=t9(s!=null?s:t,r),{fullPath:s+(f&&"?")+f+p,path:s,query:d,hash:p}}function J8(n,t){const r=t.query?n(t.query):"";return t.path+(r&&"?")+r+(t.hash||"")}function Ax(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function X8(n,t,r){const s=t.matched.length-1,d=r.matched.length-1;return s>-1&&s===d&&Jl(t.matched[s],r.matched[d])&&FP(t.params,r.params)&&n(t.query)===n(r.query)&&t.hash===r.hash}function Jl(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function FP(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(const r in n)if(!e9(n[r],t[r]))return!1;return!0}function e9(n,t){return Ar(n)?Ex(n,t):Ar(t)?Ex(t,n):n===t}function Ex(n,t){return Ar(t)?n.length===t.length&&n.every((r,s)=>r===t[s]):n.length===1&&n[0]===t}function t9(n,t){if(n.startsWith("/"))return n;if(!n)return t;const r=t.split("/"),s=n.split("/");let d=r.length-1,f,p;for(f=0;f<s.length;f++)if(p=s[f],p!==".")if(p==="..")d>1&&d--;else break;return r.slice(0,d).join("/")+"/"+s.slice(f-(f===s.length?1:0)).join("/")}var Kd;(function(n){n.pop="pop",n.push="push"})(Kd||(Kd={}));var Od;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Od||(Od={}));function n9(n){if(!n)if(xl){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Z8(n)}const i9=/^[^#]+#/;function r9(n,t){return n.replace(i9,"#")+t}function o9(n,t){const r=document.documentElement.getBoundingClientRect(),s=n.getBoundingClientRect();return{behavior:t.behavior,left:s.left-r.left-(t.left||0),top:s.top-r.top-(t.top||0)}}const Bp=()=>({left:window.pageXOffset,top:window.pageYOffset});function s9(n){let t;if("el"in n){const r=n.el,s=typeof r=="string"&&r.startsWith("#"),d=typeof r=="string"?s?document.getElementById(r.slice(1)):document.querySelector(r):r;if(!d)return;t=o9(d,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Tx(n,t){return(history.state?history.state.position-t:-1)+n}const Dv=new Map;function a9(n,t){Dv.set(n,t)}function l9(n){const t=Dv.get(n);return Dv.delete(n),t}let c9=()=>location.protocol+"//"+location.host;function VP(n,t){const{pathname:r,search:s,hash:d}=t,f=n.indexOf("#");if(f>-1){let v=d.includes(n.slice(f))?n.slice(f).length:1,m=d.slice(v);return m[0]!=="/"&&(m="/"+m),Ax(m,"")}return Ax(r,n)+s+d}function d9(n,t,r,s){let d=[],f=[],p=null;const v=({state:E})=>{const S=VP(n,location),I=r.value,M=t.value;let q=0;if(E){if(r.value=S,t.value=E,p&&p===I){p=null;return}q=M?E.position-M.position:0}else s(S);d.forEach(L=>{L(r.value,I,{delta:q,type:Kd.pop,direction:q?q>0?Od.forward:Od.back:Od.unknown})})};function m(){p=r.value}function w(E){d.push(E);const S=()=>{const I=d.indexOf(E);I>-1&&d.splice(I,1)};return f.push(S),S}function C(){const{history:E}=window;!E.state||E.replaceState(Et({},E.state,{scroll:Bp()}),"")}function y(){for(const E of f)E();f=[],window.removeEventListener("popstate",v),window.removeEventListener("beforeunload",C)}return window.addEventListener("popstate",v),window.addEventListener("beforeunload",C),{pauseListeners:m,listen:w,destroy:y}}function xx(n,t,r,s=!1,d=!1){return{back:n,current:t,forward:r,replaced:s,position:window.history.length,scroll:d?Bp():null}}function u9(n){const{history:t,location:r}=window,s={value:VP(n,r)},d={value:t.state};d.value||f(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function f(m,w,C){const y=n.indexOf("#"),E=y>-1?(r.host&&document.querySelector("base")?n:n.slice(y))+m:c9()+n+m;try{t[C?"replaceState":"pushState"](w,"",E),d.value=w}catch(S){console.error(S),r[C?"replace":"assign"](E)}}function p(m,w){const C=Et({},t.state,xx(d.value.back,m,d.value.forward,!0),w,{position:d.value.position});f(m,C,!0),s.value=m}function v(m,w){const C=Et({},d.value,t.state,{forward:m,scroll:Bp()});f(C.current,C,!0);const y=Et({},xx(s.value,m,null),{position:C.position+1},w);f(m,y,!1),s.value=m}return{location:s,state:d,push:v,replace:p}}function h9(n){n=n9(n);const t=u9(n),r=d9(n,t.state,t.location,t.replace);function s(f,p=!0){p||r.pauseListeners(),history.go(f)}const d=Et({location:"",base:n,go:s,createHref:r9.bind(null,n)},t,r);return Object.defineProperty(d,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(d,"state",{enumerable:!0,get:()=>t.state.value}),d}function f9(n){return typeof n=="string"||n&&typeof n=="object"}function $P(n){return typeof n=="string"||typeof n=="symbol"}const Uo={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},HP=Symbol("");var Sx;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Sx||(Sx={}));function Xl(n,t){return Et(new Error,{type:n,[HP]:!0},t)}function co(n,t){return n instanceof Error&&HP in n&&(t==null||!!(n.type&t))}const Ox="[^/]+?",p9={sensitive:!1,strict:!1,start:!0,end:!0},g9=/[.+*?^${}()[\]/\\]/g;function m9(n,t){const r=Et({},p9,t),s=[];let d=r.start?"^":"";const f=[];for(const w of n){const C=w.length?[]:[90];r.strict&&!w.length&&(d+="/");for(let y=0;y<w.length;y++){const E=w[y];let S=40+(r.sensitive?.25:0);if(E.type===0)y||(d+="/"),d+=E.value.replace(g9,"\\$&"),S+=40;else if(E.type===1){const{value:I,repeatable:M,optional:q,regexp:L}=E;f.push({name:I,repeatable:M,optional:q});const B=L||Ox;if(B!==Ox){S+=10;try{new RegExp(`(${B})`)}catch(K){throw new Error(`Invalid custom RegExp for param "${I}" (${B}): `+K.message)}}let $=M?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;y||($=q&&w.length<2?`(?:/${$})`:"/"+$),q&&($+="?"),d+=$,S+=20,q&&(S+=-8),M&&(S+=-20),B===".*"&&(S+=-50)}C.push(S)}s.push(C)}if(r.strict&&r.end){const w=s.length-1;s[w][s[w].length-1]+=.7000000000000001}r.strict||(d+="/?"),r.end?d+="$":r.strict&&(d+="(?:/|$)");const p=new RegExp(d,r.sensitive?"":"i");function v(w){const C=w.match(p),y={};if(!C)return null;for(let E=1;E<C.length;E++){const S=C[E]||"",I=f[E-1];y[I.name]=S&&I.repeatable?S.split("/"):S}return y}function m(w){let C="",y=!1;for(const E of n){(!y||!C.endsWith("/"))&&(C+="/"),y=!1;for(const S of E)if(S.type===0)C+=S.value;else if(S.type===1){const{value:I,repeatable:M,optional:q}=S,L=I in w?w[I]:"";if(Ar(L)&&!M)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const B=Ar(L)?L.join("/"):L;if(!B)if(q)E.length<2&&(C.endsWith("/")?C=C.slice(0,-1):y=!0);else throw new Error(`Missing required param "${I}"`);C+=B}}return C||"/"}return{re:p,score:s,keys:f,parse:v,stringify:m}}function b9(n,t){let r=0;for(;r<n.length&&r<t.length;){const s=t[r]-n[r];if(s)return s;r++}return n.length<t.length?n.length===1&&n[0]===40+40?-1:1:n.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function v9(n,t){let r=0;const s=n.score,d=t.score;for(;r<s.length&&r<d.length;){const f=b9(s[r],d[r]);if(f)return f;r++}if(Math.abs(d.length-s.length)===1){if(Dx(s))return 1;if(Dx(d))return-1}return d.length-s.length}function Dx(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const k9={type:0,value:""},w9=/[a-zA-Z0-9_]/;function _9(n){if(!n)return[[]];if(n==="/")return[[k9]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(S){throw new Error(`ERR (${r})/"${w}": ${S}`)}let r=0,s=r;const d=[];let f;function p(){f&&d.push(f),f=[]}let v=0,m,w="",C="";function y(){!w||(r===0?f.push({type:0,value:w}):r===1||r===2||r===3?(f.length>1&&(m==="*"||m==="+")&&t(`A repeatable param (${w}) must be alone in its segment. eg: '/:ids+.`),f.push({type:1,value:w,regexp:C,repeatable:m==="*"||m==="+",optional:m==="*"||m==="?"})):t("Invalid state to consume buffer"),w="")}function E(){w+=m}for(;v<n.length;){if(m=n[v++],m==="\\"&&r!==2){s=r,r=4;continue}switch(r){case 0:m==="/"?(w&&y(),p()):m===":"?(y(),r=1):E();break;case 4:E(),r=s;break;case 1:m==="("?r=2:w9.test(m)?E():(y(),r=0,m!=="*"&&m!=="?"&&m!=="+"&&v--);break;case 2:m===")"?C[C.length-1]=="\\"?C=C.slice(0,-1)+m:r=3:C+=m;break;case 3:y(),r=0,m!=="*"&&m!=="?"&&m!=="+"&&v--,C="";break;default:t("Unknown state");break}}return r===2&&t(`Unfinished custom RegExp for param "${w}"`),y(),p(),d}function C9(n,t,r){const s=m9(_9(n.path),r),d=Et(s,{record:n,parent:t,children:[],alias:[]});return t&&!d.record.aliasOf==!t.record.aliasOf&&t.children.push(d),d}function y9(n,t){const r=[],s=new Map;t=Mx({strict:!1,end:!0,sensitive:!1},t);function d(C){return s.get(C)}function f(C,y,E){const S=!E,I=A9(C);I.aliasOf=E&&E.record;const M=Mx(t,C),q=[I];if("alias"in C){const $=typeof C.alias=="string"?[C.alias]:C.alias;for(const K of $)q.push(Et({},I,{components:E?E.record.components:I.components,path:K,aliasOf:E?E.record:I}))}let L,B;for(const $ of q){const{path:K}=$;if(y&&K[0]!=="/"){const Z=y.record.path,re=Z[Z.length-1]==="/"?"":"/";$.path=y.record.path+(K&&re+K)}if(L=C9($,y,M),E?E.alias.push(L):(B=B||L,B!==L&&B.alias.push(L),S&&C.name&&!Px(L)&&p(C.name)),I.children){const Z=I.children;for(let re=0;re<Z.length;re++)f(Z[re],L,E&&E.children[re])}E=E||L,(L.record.components&&Object.keys(L.record.components).length||L.record.name||L.record.redirect)&&m(L)}return B?()=>{p(B)}:Sd}function p(C){if($P(C)){const y=s.get(C);y&&(s.delete(C),r.splice(r.indexOf(y),1),y.children.forEach(p),y.alias.forEach(p))}else{const y=r.indexOf(C);y>-1&&(r.splice(y,1),C.record.name&&s.delete(C.record.name),C.children.forEach(p),C.alias.forEach(p))}}function v(){return r}function m(C){let y=0;for(;y<r.length&&v9(C,r[y])>=0&&(C.record.path!==r[y].record.path||!UP(C,r[y]));)y++;r.splice(y,0,C),C.record.name&&!Px(C)&&s.set(C.record.name,C)}function w(C,y){let E,S={},I,M;if("name"in C&&C.name){if(E=s.get(C.name),!E)throw Xl(1,{location:C});M=E.record.name,S=Et(Ix(y.params,E.keys.filter(B=>!B.optional).map(B=>B.name)),C.params&&Ix(C.params,E.keys.map(B=>B.name))),I=E.stringify(S)}else if("path"in C)I=C.path,E=r.find(B=>B.re.test(I)),E&&(S=E.parse(I),M=E.record.name);else{if(E=y.name?s.get(y.name):r.find(B=>B.re.test(y.path)),!E)throw Xl(1,{location:C,currentLocation:y});M=E.record.name,S=Et({},y.params,C.params),I=E.stringify(S)}const q=[];let L=E;for(;L;)q.unshift(L.record),L=L.parent;return{name:M,path:I,params:S,matched:q,meta:T9(q)}}return n.forEach(C=>f(C)),{addRoute:f,resolve:w,removeRoute:p,getRoutes:v,getRecordMatcher:d}}function Ix(n,t){const r={};for(const s of t)s in n&&(r[s]=n[s]);return r}function A9(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:E9(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function E9(n){const t={},r=n.props||!1;if("component"in n)t.default=r;else for(const s in n.components)t[s]=typeof r=="boolean"?r:r[s];return t}function Px(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function T9(n){return n.reduce((t,r)=>Et(t,r.meta),{})}function Mx(n,t){const r={};for(const s in n)r[s]=s in t?t[s]:n[s];return r}function UP(n,t){return t.children.some(r=>r===n||UP(n,r))}const GP=/#/g,x9=/&/g,S9=/\//g,O9=/=/g,D9=/\?/g,WP=/\+/g,I9=/%5B/g,P9=/%5D/g,KP=/%5E/g,M9=/%60/g,qP=/%7B/g,N9=/%7C/g,YP=/%7D/g,R9=/%20/g;function Ew(n){return encodeURI(""+n).replace(N9,"|").replace(I9,"[").replace(P9,"]")}function B9(n){return Ew(n).replace(qP,"{").replace(YP,"}").replace(KP,"^")}function Iv(n){return Ew(n).replace(WP,"%2B").replace(R9,"+").replace(GP,"%23").replace(x9,"%26").replace(M9,"`").replace(qP,"{").replace(YP,"}").replace(KP,"^")}function L9(n){return Iv(n).replace(O9,"%3D")}function j9(n){return Ew(n).replace(GP,"%23").replace(D9,"%3F")}function z9(n){return n==null?"":j9(n).replace(S9,"%2F")}function Pf(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function F9(n){const t={};if(n===""||n==="?")return t;const s=(n[0]==="?"?n.slice(1):n).split("&");for(let d=0;d<s.length;++d){const f=s[d].replace(WP," "),p=f.indexOf("="),v=Pf(p<0?f:f.slice(0,p)),m=p<0?null:Pf(f.slice(p+1));if(v in t){let w=t[v];Ar(w)||(w=t[v]=[w]),w.push(m)}else t[v]=m}return t}function Nx(n){let t="";for(let r in n){const s=n[r];if(r=L9(r),s==null){s!==void 0&&(t+=(t.length?"&":"")+r);continue}(Ar(s)?s.map(f=>f&&Iv(f)):[s&&Iv(s)]).forEach(f=>{f!==void 0&&(t+=(t.length?"&":"")+r,f!=null&&(t+="="+f))})}return t}function V9(n){const t={};for(const r in n){const s=n[r];s!==void 0&&(t[r]=Ar(s)?s.map(d=>d==null?null:""+d):s==null?s:""+s)}return t}const $9=Symbol(""),Rx=Symbol(""),Tw=Symbol(""),QP=Symbol(""),Pv=Symbol("");function od(){let n=[];function t(s){return n.push(s),()=>{const d=n.indexOf(s);d>-1&&n.splice(d,1)}}function r(){n=[]}return{add:t,list:()=>n,reset:r}}function Zo(n,t,r,s,d){const f=s&&(s.enterCallbacks[d]=s.enterCallbacks[d]||[]);return()=>new Promise((p,v)=>{const m=y=>{y===!1?v(Xl(4,{from:r,to:t})):y instanceof Error?v(y):f9(y)?v(Xl(2,{from:t,to:y})):(f&&s.enterCallbacks[d]===f&&typeof y=="function"&&f.push(y),p())},w=n.call(s&&s.instances[d],t,r,m);let C=Promise.resolve(w);n.length<3&&(C=C.then(m)),C.catch(y=>v(y))})}function Rb(n,t,r,s){const d=[];for(const f of n)for(const p in f.components){let v=f.components[p];if(!(t!=="beforeRouteEnter"&&!f.instances[p]))if(H9(v)){const w=(v.__vccOpts||v)[t];w&&d.push(Zo(w,r,s,f,p))}else{let m=v();d.push(()=>m.then(w=>{if(!w)return Promise.reject(new Error(`Couldn't resolve component "${p}" at "${f.path}"`));const C=Y8(w)?w.default:w;f.components[p]=C;const E=(C.__vccOpts||C)[t];return E&&Zo(E,r,s,f,p)()}))}}return d}function H9(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Bx(n){const t=ki(Tw),r=ki(QP),s=ii(()=>t.resolve(ss(n.to))),d=ii(()=>{const{matched:m}=s.value,{length:w}=m,C=m[w-1],y=r.matched;if(!C||!y.length)return-1;const E=y.findIndex(Jl.bind(null,C));if(E>-1)return E;const S=Lx(m[w-2]);return w>1&&Lx(C)===S&&y[y.length-1].path!==S?y.findIndex(Jl.bind(null,m[w-2])):E}),f=ii(()=>d.value>-1&&W9(r.params,s.value.params)),p=ii(()=>d.value>-1&&d.value===r.matched.length-1&&FP(r.params,s.value.params));function v(m={}){return G9(m)?t[ss(n.replace)?"replace":"push"](ss(n.to)).catch(Sd):Promise.resolve()}return{route:s,href:ii(()=>s.value.href),isActive:f,isExactActive:p,navigate:v}}const U9=gc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Bx,setup(n,{slots:t}){const r=nr(Bx(n)),{options:s}=ki(Tw),d=ii(()=>({[jx(n.activeClass,s.linkActiveClass,"router-link-active")]:r.isActive,[jx(n.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:r.isExactActive}));return()=>{const f=t.default&&t.default(r);return n.custom?f:fu("a",{"aria-current":r.isExactActive?n.ariaCurrentValue:null,href:r.href,onClick:r.navigate,class:d.value},f)}}}),Lp=U9;function G9(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function W9(n,t){for(const r in t){const s=t[r],d=n[r];if(typeof s=="string"){if(s!==d)return!1}else if(!Ar(d)||d.length!==s.length||s.some((f,p)=>f!==d[p]))return!1}return!0}function Lx(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const jx=(n,t,r)=>n!=null?n:t!=null?t:r,K9=gc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:r}){const s=ki(Pv),d=ii(()=>n.route||s.value),f=ki(Rx,0),p=ii(()=>{let w=ss(f);const{matched:C}=d.value;let y;for(;(y=C[w])&&!y.components;)w++;return w}),v=ii(()=>d.value.matched[p.value]);Vl(Rx,ii(()=>p.value+1)),Vl($9,v),Vl(Pv,d);const m=os();return as(()=>[m.value,v.value,n.name],([w,C,y],[E,S,I])=>{C&&(C.instances[y]=w,S&&S!==C&&w&&w===E&&(C.leaveGuards.size||(C.leaveGuards=S.leaveGuards),C.updateGuards.size||(C.updateGuards=S.updateGuards))),w&&C&&(!S||!Jl(C,S)||!E)&&(C.enterCallbacks[y]||[]).forEach(M=>M(w))},{flush:"post"}),()=>{const w=d.value,C=n.name,y=v.value,E=y&&y.components[C];if(!E)return zx(r.default,{Component:E,route:w});const S=y.props[C],I=S?S===!0?w.params:typeof S=="function"?S(w):S:null,q=fu(E,Et({},I,t,{onVnodeUnmounted:L=>{L.component.isUnmounted&&(y.instances[C]=null)},ref:m}));return zx(r.default,{Component:q,route:w})||q}}});function zx(n,t){if(!n)return null;const r=n(t);return r.length===1?r[0]:r}const ZP=K9;function q9(n){const t=y9(n.routes,n),r=n.parseQuery||F9,s=n.stringifyQuery||Nx,d=n.history,f=od(),p=od(),v=od(),m=Nk(Uo);let w=Uo;xl&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const C=Mb.bind(null,W=>""+W),y=Mb.bind(null,z9),E=Mb.bind(null,Pf);function S(W,fe){let ge,ve;return $P(W)?(ge=t.getRecordMatcher(W),ve=fe):ve=W,t.addRoute(ve,ge)}function I(W){const fe=t.getRecordMatcher(W);fe&&t.removeRoute(fe)}function M(){return t.getRoutes().map(W=>W.record)}function q(W){return!!t.getRecordMatcher(W)}function L(W,fe){if(fe=Et({},fe||m.value),typeof W=="string"){const R=Nb(r,W,fe.path),H=t.resolve({path:R.path},fe),te=d.createHref(R.fullPath);return Et(R,H,{params:E(H.params),hash:Pf(R.hash),redirectedFrom:void 0,href:te})}let ge;if("path"in W)ge=Et({},W,{path:Nb(r,W.path,fe.path).path});else{const R=Et({},W.params);for(const H in R)R[H]==null&&delete R[H];ge=Et({},W,{params:y(W.params)}),fe.params=y(fe.params)}const ve=t.resolve(ge,fe),Ge=W.hash||"";ve.params=C(E(ve.params));const ct=J8(s,Et({},W,{hash:B9(Ge),path:ve.path})),Ve=d.createHref(ct);return Et({fullPath:ct,hash:Ge,query:s===Nx?V9(W.query):W.query||{}},ve,{redirectedFrom:void 0,href:Ve})}function B(W){return typeof W=="string"?Nb(r,W,m.value.path):Et({},W)}function $(W,fe){if(w!==W)return Xl(8,{from:fe,to:W})}function K(W){return J(W)}function Z(W){return K(Et(B(W),{replace:!0}))}function re(W){const fe=W.matched[W.matched.length-1];if(fe&&fe.redirect){const{redirect:ge}=fe;let ve=typeof ge=="function"?ge(W):ge;return typeof ve=="string"&&(ve=ve.includes("?")||ve.includes("#")?ve=B(ve):{path:ve},ve.params={}),Et({query:W.query,hash:W.hash,params:"path"in ve?{}:W.params},ve)}}function J(W,fe){const ge=w=L(W),ve=m.value,Ge=W.state,ct=W.force,Ve=W.replace===!0,R=re(ge);if(R)return J(Et(B(R),{state:typeof R=="object"?Et({},Ge,R.state):Ge,force:ct,replace:Ve}),fe||ge);const H=ge;H.redirectedFrom=fe;let te;return!ct&&X8(s,ve,ge)&&(te=Xl(16,{to:H,from:ve}),Ke(ve,ve,!0,!1)),(te?Promise.resolve(te):P(H,ve)).catch(ee=>co(ee)?co(ee,2)?ee:hn(ee):Me(ee,H,ve)).then(ee=>{if(ee){if(co(ee,2))return J(Et({replace:Ve},B(ee.to),{state:typeof ee.to=="object"?Et({},Ge,ee.to.state):Ge,force:ct}),fe||H)}else ee=he(H,ve,!0,Ve,Ge);return X(H,ve,ee),ee})}function G(W,fe){const ge=$(W,fe);return ge?Promise.reject(ge):Promise.resolve()}function P(W,fe){let ge;const[ve,Ge,ct]=Y9(W,fe);ge=Rb(ve.reverse(),"beforeRouteLeave",W,fe);for(const R of ve)R.leaveGuards.forEach(H=>{ge.push(Zo(H,W,fe))});const Ve=G.bind(null,W,fe);return ge.push(Ve),bl(ge).then(()=>{ge=[];for(const R of f.list())ge.push(Zo(R,W,fe));return ge.push(Ve),bl(ge)}).then(()=>{ge=Rb(Ge,"beforeRouteUpdate",W,fe);for(const R of Ge)R.updateGuards.forEach(H=>{ge.push(Zo(H,W,fe))});return ge.push(Ve),bl(ge)}).then(()=>{ge=[];for(const R of W.matched)if(R.beforeEnter&&!fe.matched.includes(R))if(Ar(R.beforeEnter))for(const H of R.beforeEnter)ge.push(Zo(H,W,fe));else ge.push(Zo(R.beforeEnter,W,fe));return ge.push(Ve),bl(ge)}).then(()=>(W.matched.forEach(R=>R.enterCallbacks={}),ge=Rb(ct,"beforeRouteEnter",W,fe),ge.push(Ve),bl(ge))).then(()=>{ge=[];for(const R of p.list())ge.push(Zo(R,W,fe));return ge.push(Ve),bl(ge)}).catch(R=>co(R,8)?R:Promise.reject(R))}function X(W,fe,ge){for(const ve of v.list())ve(W,fe,ge)}function he(W,fe,ge,ve,Ge){const ct=$(W,fe);if(ct)return ct;const Ve=fe===Uo,R=xl?history.state:{};ge&&(ve||Ve?d.replace(W.fullPath,Et({scroll:Ve&&R&&R.scroll},Ge)):d.push(W.fullPath,Ge)),m.value=W,Ke(W,fe,ge,Ve),hn()}let Ie;function De(){Ie||(Ie=d.listen((W,fe,ge)=>{if(!Sr.listening)return;const ve=L(W),Ge=re(ve);if(Ge){J(Et(Ge,{replace:!0}),ve).catch(Sd);return}w=ve;const ct=m.value;xl&&a9(Tx(ct.fullPath,ge.delta),Bp()),P(ve,ct).catch(Ve=>co(Ve,12)?Ve:co(Ve,2)?(J(Ve.to,ve).then(R=>{co(R,20)&&!ge.delta&&ge.type===Kd.pop&&d.go(-1,!1)}).catch(Sd),Promise.reject()):(ge.delta&&d.go(-ge.delta,!1),Me(Ve,ve,ct))).then(Ve=>{Ve=Ve||he(ve,ct,!1),Ve&&(ge.delta&&!co(Ve,8)?d.go(-ge.delta,!1):ge.type===Kd.pop&&co(Ve,20)&&d.go(-1,!1)),X(ve,ct,Ve)}).catch(Sd)}))}let ke=od(),je=od(),de;function Me(W,fe,ge){hn(W);const ve=je.list();return ve.length?ve.forEach(Ge=>Ge(W,fe,ge)):console.error(W),Promise.reject(W)}function ze(){return de&&m.value!==Uo?Promise.resolve():new Promise((W,fe)=>{ke.add([W,fe])})}function hn(W){return de||(de=!W,De(),ke.list().forEach(([fe,ge])=>W?ge(W):fe()),ke.reset()),W}function Ke(W,fe,ge,ve){const{scrollBehavior:Ge}=n;if(!xl||!Ge)return Promise.resolve();const ct=!ge&&l9(Tx(W.fullPath,0))||(ve||!ge)&&history.state&&history.state.scroll||null;return xs().then(()=>Ge(W,fe,ct)).then(Ve=>Ve&&s9(Ve)).catch(Ve=>Me(Ve,W,fe))}const Vt=W=>d.go(W);let Qt;const sr=new Set,Sr={currentRoute:m,listening:!0,addRoute:S,removeRoute:I,hasRoute:q,getRoutes:M,resolve:L,options:n,push:K,replace:Z,go:Vt,back:()=>Vt(-1),forward:()=>Vt(1),beforeEach:f.add,beforeResolve:p.add,afterEach:v.add,onError:je.add,isReady:ze,install(W){const fe=this;W.component("RouterLink",Lp),W.component("RouterView",ZP),W.config.globalProperties.$router=fe,Object.defineProperty(W.config.globalProperties,"$route",{enumerable:!0,get:()=>ss(m)}),xl&&!Qt&&m.value===Uo&&(Qt=!0,K(d.location).catch(Ge=>{}));const ge={};for(const Ge in Uo)ge[Ge]=ii(()=>m.value[Ge]);W.provide(Tw,fe),W.provide(QP,nr(ge)),W.provide(Pv,m);const ve=W.unmount;sr.add(W),W.unmount=function(){sr.delete(W),sr.size<1&&(w=Uo,Ie&&Ie(),Ie=null,m.value=Uo,Qt=!1,de=!1),ve()}}};return Sr}function bl(n){return n.reduce((t,r)=>t.then(()=>r()),Promise.resolve())}function Y9(n,t){const r=[],s=[],d=[],f=Math.max(t.matched.length,n.matched.length);for(let p=0;p<f;p++){const v=t.matched[p];v&&(n.matched.find(w=>Jl(w,v))?s.push(v):r.push(v));const m=n.matched[p];m&&(t.matched.find(w=>Jl(w,m))||d.push(m))}return[r,s,d]}var JP=function(){return(JP=Object.assign||function(n){for(var t,r=1,s=arguments.length;r<s;r++)for(var d in t=arguments[r])Object.prototype.hasOwnProperty.call(t,d)&&(n[d]=t[d]);return n}).apply(this,arguments)},Bb={kebab:/-(\w)/g,styleProp:/:(.*)/,styleList:/;(?![^(]*\))/g};function Q9(n,t){return t?t.toUpperCase():""}function Z9(n){for(var t,r={},s=0,d=n.split(Bb.styleList);s<d.length;s++){var f=d[s].split(Bb.styleProp),p=f[0],v=f[1];(p=p.trim())&&(typeof v=="string"&&(v=v.trim()),r[t=p,t.replace(Bb.kebab,Q9)]=v)}return r}function nn(){for(var n,t,r={},s=arguments.length;s--;)for(var d=0,f=Object.keys(arguments[s]);d<f.length;d++)switch(n=f[d]){case"class":case"style":case"directives":if(Array.isArray(r[n])||(r[n]=[]),n==="style"){var p=void 0;p=Array.isArray(arguments[s].style)?arguments[s].style:[arguments[s].style];for(var v=0;v<p.length;v++){var m=p[v];typeof m=="string"&&(p[v]=Z9(m))}arguments[s].style=p}r[n]=r[n].concat(arguments[s][n]);break;case"staticClass":if(!arguments[s][n])break;r[n]===void 0&&(r[n]=""),r[n]&&(r[n]+=" "),r[n]+=arguments[s][n].trim();break;case"on":case"nativeOn":r[n]||(r[n]={});for(var w=0,C=Object.keys(arguments[s][n]||{});w<C.length;w++)t=C[w],r[n][t]?r[n][t]=[].concat(r[n][t],arguments[s][n][t]):r[n][t]=arguments[s][n][t];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":r[n]||(r[n]={}),r[n]=JP({},arguments[s][n],r[n]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:r[n]||(r[n]=arguments[s][n])}return r}function Fx(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function sd(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Fx(Object(r),!0).forEach(function(s){J9(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):Fx(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function J9(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}function X9(n,t){if(n==null)return{};var r=eU(n,t),s,d;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(n);for(d=0;d<f.length;d++)s=f[d],!(t.indexOf(s)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,s)||(r[s]=n[s]))}return r}function eU(n,t){if(n==null)return{};var r={},s=Object.keys(n),d,f;for(f=0;f<s.length;f++)d=s[f],!(t.indexOf(d)>=0)&&(r[d]=n[d]);return r}function Mf(n){return Mf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Mf(n)}var ds="_uid",Ai=Gt.version.startsWith("3"),XP=Ai?"ref_for":"refInFor",tU=["class","staticClass","style","attrs","props","domProps","on","nativeOn","directives","scopedSlots","slot","key","ref","refInFor"],ce=Gt.extend.bind(Gt);if(Ai){var nU=Gt.extend,iU=["router-link","transition","transition-group"],rU=Gt.vModelDynamic.created,oU=Gt.vModelDynamic.beforeUpdate;Gt.vModelDynamic.created=function(n,t,r){rU.call(this,n,t,r),n._assign||(n._assign=function(){})},Gt.vModelDynamic.beforeUpdate=function(n,t,r){oU.call(this,n,t,r),n._assign||(n._assign=function(){})},ce=function(t){if(Mf(t)==="object"&&t.render&&!t.__alreadyPatched){var r=t.render;t.__alreadyPatched=!0,t.render=function(s){var d=function(E,S,I){var M=I===void 0?[]:[Array.isArray(I)?I.filter(Boolean):I],q=typeof E=="string"&&!iU.includes(E),L=S&&Mf(S)==="object"&&!Array.isArray(S);if(!L)return s.apply(void 0,[E,S].concat(M));var B=S.attrs,$=S.props,K=X9(S,["attrs","props"]),Z=sd(sd({},K),{},{attrs:B,props:q?{}:$});return E==="router-link"&&!Z.slots&&!Z.scopedSlots&&(Z.scopedSlots={$hasNormal:function(){}}),s.apply(void 0,[E,Z].concat(M))};if(t.functional){var f,p,v=arguments[1],m=sd({},v);m.data={attrs:sd({},v.data.attrs||{}),props:sd({},v.data.props||{})},Object.keys(v.data||{}).forEach(function(y){tU.includes(y)?m.data[y]=v.data[y]:y in v.props?m.data.props[y]=v.data[y]:y.startsWith("on")||(m.data.attrs[y]=v.data[y])});var w=["_ctx"],C=((f=v.children)===null||f===void 0||(p=f.default)===null||p===void 0?void 0:p.call(f))||v.children;return C&&Object.keys(m.children).filter(function(y){return!w.includes(y)}).length===0?delete m.children:m.children=C,m.data.on=v.listeners,r.call(this,d,m)}return r.call(this,d)}}return nU.call(this,t)}.bind(Gt)}var sU=Gt.nextTick,vc=typeof window<"u",eM=typeof document<"u",tM=typeof navigator<"u",nM=typeof Promise<"u",aU=typeof MutationObserver<"u"||typeof WebKitMutationObserver<"u"||typeof MozMutationObserver<"u",wn=vc&&eM&&tM,Xt=vc?window:{},kc=eM?document:{},iM=tM?navigator:{},rM=(iM.userAgent||"").toLowerCase(),lU=rM.indexOf("jsdom")>0;/msie|trident/.test(rM);var cU=function(){var n=!1;if(wn)try{var t={get passive(){n=!0}};Xt.addEventListener("test",t,t),Xt.removeEventListener("test",t,t)}catch{n=!1}return n}(),Nf=wn&&("ontouchstart"in kc.documentElement||iM.maxTouchPoints>0),ad=wn&&Boolean(Xt.PointerEvent||Xt.MSPointerEvent);wn&&"IntersectionObserver"in Xt&&"IntersectionObserverEntry"in Xt&&"intersectionRatio"in Xt.IntersectionObserverEntry.prototype;var dU="BvConfig",Sl="$bvConfig",uU=["xs","sm","md","lg","xl"],hU=/\[(\d+)]/g,fU=/^(BV?)/,oM=/^\d+$/,pU=/^\..+/,gU=/^#/,mU=/^#[A-Za-z]+[\w\-:.]*$/,bU=/(<([^>]+)>)/gi,vU=/\B([A-Z])/g,kU=/([a-z])([A-Z])/g,wU=/^[0-9]*\.?[0-9]+$/,_U=/[-/\\^$*+?.()|[\]{}]/g,CU=/[\s\uFEFF\xA0]+/g,Xh=/\s+/,yU=/\/\*$/,AU=/(\s|^)(\w)/g,EU=/_/g,TU=/-(\w)/g,xU=/%2C/g,SU=/[!'()*]/g,OU=/^col-/,DU=/^BIcon/;function Mv(n){return Mv=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Mv(n)}function jp(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function zp(n,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(n,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),writable:!1}),t&&qd(n,t)}function Fp(n){var t=sM();return function(){var s=Yd(n),d;if(t){var f=Yd(this).constructor;d=Reflect.construct(s,arguments,f)}else d=s.apply(this,arguments);return IU(this,d)}}function IU(n,t){if(t&&(Mv(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return PU(n)}function PU(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Rf(n){var t=typeof Map=="function"?new Map:void 0;return Rf=function(s){if(s===null||!MU(s))return s;if(typeof s!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t<"u"){if(t.has(s))return t.get(s);t.set(s,d)}function d(){return ef(s,arguments,Yd(this).constructor)}return d.prototype=Object.create(s.prototype,{constructor:{value:d,enumerable:!1,writable:!0,configurable:!0}}),qd(d,s)},Rf(n)}function ef(n,t,r){return sM()?ef=Reflect.construct:ef=function(d,f,p){var v=[null];v.push.apply(v,f);var m=Function.bind.apply(d,v),w=new m;return p&&qd(w,p.prototype),w},ef.apply(null,arguments)}function sM(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function MU(n){return Function.toString.call(n).indexOf("[native code]")!==-1}function qd(n,t){return qd=Object.setPrototypeOf||function(s,d){return s.__proto__=d,s},qd(n,t)}function Yd(n){return Yd=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},Yd(n)}var xw=vc?Xt.Element:function(n){zp(r,n);var t=Fp(r);function r(){return jp(this,r),t.apply(this,arguments)}return r}(Rf(Object)),us=vc?Xt.HTMLElement:function(n){zp(r,n);var t=Fp(r);function r(){return jp(this,r),t.apply(this,arguments)}return r}(xw),aM=vc?Xt.SVGElement:function(n){zp(r,n);var t=Fp(r);function r(){return jp(this,r),t.apply(this,arguments)}return r}(xw),lM=vc?Xt.File:function(n){zp(r,n);var t=Fp(r);function r(){return jp(this,r),t.apply(this,arguments)}return r}(Rf(Object));function Bf(n){return Bf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Bf(n)}var Vp=function(t){return Bf(t)},NU=function(t){return Object.prototype.toString.call(t).slice(8,-1)},Yn=function(t){return t===void 0},ir=function(t){return t===null},un=function(t){return Yn(t)||ir(t)},He=function(t){return Vp(t)==="function"},Aa=function(t){return Vp(t)==="boolean"},zt=function(t){return Vp(t)==="string"},wa=function(t){return Vp(t)==="number"},cM=function(t){return wU.test(String(t))},St=function(t){return Array.isArray(t)},Vn=function(t){return t!==null&&Bf(t)==="object"},Er=function(t){return Object.prototype.toString.call(t)==="[object Object]"},Qd=function(t){return t instanceof Date},$p=function(t){return t instanceof Event},RU=function(t){return t instanceof lM},Vx=function(t){return NU(t)==="RegExp"},BU=function(t){return!un(t)&&He(t.then)&&He(t.catch)};function $x(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function Ea(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?$x(Object(r),!0).forEach(function(s){mu(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):$x(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function mu(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var Hp=function(){return Object.assign.apply(Object,arguments)},ns=function(t,r){return Object.create(t,r)},Sw=function(t,r){return Object.defineProperties(t,r)},dM=function(t,r,s){return Object.defineProperty(t,r,s)},Hx=function(t){return Object.getOwnPropertyNames(t)},ft=function(t){return Object.keys(t)},Zd=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},Ss=function(t){return Ea({},t)},Up=function(t,r){return ft(t).filter(function(s){return r.indexOf(s)!==-1}).reduce(function(s,d){return Ea(Ea({},s),{},mu({},d,t[d]))},{})},Eo=function(t,r){return ft(t).filter(function(s){return r.indexOf(s)===-1}).reduce(function(s,d){return Ea(Ea({},s),{},mu({},d,t[d]))},{})},LU=function n(t,r){return Vn(t)&&Vn(r)&&ft(r).forEach(function(s){Vn(r[s])?((!t[s]||!Vn(t[s]))&&(t[s]=r[s]),n(t[s],r[s])):Hp(t,mu({},s,r[s]))}),t},lt=function(t){return ft(t).sort().reduce(function(r,s){return Ea(Ea({},r),{},mu({},s,t[s]))},{})},Ur=function(){return{enumerable:!0,configurable:!1,writable:!1}};function Ux(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function Gx(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Ux(Object(r),!0).forEach(function(s){uM(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):Ux(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function uM(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}function jU(n){return $U(n)||VU(n)||FU(n)||zU()}function zU(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function FU(n,t){if(!!n){if(typeof n=="string")return Nv(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Nv(n,t)}}function VU(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function $U(n){if(Array.isArray(n))return Nv(n)}function Nv(n,t){(t==null||t>n.length)&&(t=n.length);for(var r=0,s=new Array(t);r<t;r++)s[r]=n[r];return s}var Qi=function n(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t;return St(t)?t.reduce(function(s,d){return[].concat(jU(s),[n(d,d)])},[]):Er(t)?ft(t).reduce(function(s,d){return Gx(Gx({},s),{},uM({},d,n(t[d],t[d])))},{}):r},wt=function(t){return t},hM=function(t,r){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:void 0;if(r=St(r)?r.join("."):r,!r||!Vn(t))return s;if(r in t)return t[r];r=String(r).replace(hU,".$1");var d=r.split(".").filter(wt);return d.length===0?s:d.every(function(f){return Vn(t)&&f in t&&!un(t=t[f])})?t:ir(t)?null:s},Fn=function(t,r){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,d=hM(t,r);return un(d)?s:d},Wx=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,s=typeof process<"u"&&process?process.env||{}:{};return t?s[t]||r:s},HU=function(){return Wx("BOOTSTRAP_VUE_NO_WARN")||Wx("NODE_ENV")==="production"},Ci=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;HU()||console.warn("[BootstrapVue warn]: ".concat(r?"".concat(r," - "):"").concat(t))},Kx=function(t){return wn?!1:(Ci("".concat(t,": Can not be called during SSR.")),!0)},qx=function(t){return nM?!1:(Ci("".concat(t,": Requires Promise support.")),!0)},UU=function(t){return aU?!1:(Ci("".concat(t,": Requires MutationObserver support.")),!0)};function GU(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function Yx(n,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(n,s.key,s)}}function WU(n,t,r){return t&&Yx(n.prototype,t),r&&Yx(n,r),Object.defineProperty(n,"prototype",{writable:!1}),n}var KU=function(){function n(){GU(this,n),this.$_config={}}return WU(n,[{key:"setConfig",value:function(){var r=this,s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!!Er(s)){var d=Hx(s);d.forEach(function(f){var p=s[f];f==="breakpoints"?!St(p)||p.length<2||p.some(function(v){return!zt(v)||v.length===0})?Ci('"breakpoints" must be an array of at least 2 breakpoint names',dU):r.$_config[f]=Qi(p):Er(p)&&(r.$_config[f]=Hx(p).reduce(function(v,m){return Yn(p[m])||(v[m]=Qi(p[m])),v},r.$_config[f]||{}))})}}},{key:"resetConfig",value:function(){this.$_config={}}},{key:"getConfig",value:function(){return Qi(this.$_config)}},{key:"getConfigValue",value:function(r){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0;return Qi(hM(this.$_config,r,s))}}]),n}(),qU=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Gt;r.prototype[Sl]=Gt.prototype[Sl]=r.prototype[Sl]||Gt.prototype[Sl]||new KU,r.prototype[Sl].setConfig(t)};function Qx(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function Zx(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Qx(Object(r),!0).forEach(function(s){YU(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):Qx(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function YU(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var QU=function(){var n=!1,t=["Multiple instances of Vue detected!","You may need to set up an alias for Vue in your bundler config.","See: https://bootstrap-vue.org/docs#using-module-bundlers"].join(`
`);return function(r){!n&&Gt!==r&&!lU&&Ci(t),n=!0}}(),ZU=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=t.components,s=t.directives,d=t.plugins,f=function p(v){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};p.installed||(p.installed=!0,QU(v),qU(m,v),eG(v,r),nG(v,s),JU(v,d))};return f.installed=!1,f},bu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Zx(Zx({},r),{},{install:ZU(t)})},JU=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};for(var s in r)s&&r[s]&&t.use(r[s])},XU=function(t,r,s){t&&r&&s&&t.component(r,s)},eG=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};for(var s in r)XU(t,s,r[s])},tG=function(t,r,s){t&&r&&s&&t.directive(r.replace(/^VB/,"B"),s)},nG=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};for(var s in r)tG(t,s,r[s])},fM="BAvatar",pM="BAvatarGroup",gM="BButton",mM="BButtonClose",Ow="BCard",bM="BCardBody",vM="BCardFooter",kM="BCardHeader",wM="BCardImg",_M="BCardSubTitle",CM="BCardTitle",yM="BCarousel",AM="BCarouselSlide",EM="BCol",Os="BCollapse",TM="BContainer",Ta="BDropdown",xM="BDropdownItem",SM="BFormCheckbox",Dw="BFormFile",OM="BFormGroup",DM="BFormInput",IM="BFormInvalidFeedback",PM="BFormRow",MM="BFormSelect",NM="BFormSelectOption",RM="BFormSelectOptionGroup",BM="BFormText",LM="BFormTextarea",jM="BFormValidFeedback",zM="BIcon",iG="BIconBase",FM="BImg",Iw="BLink",pi="BModal",rG="BMsgBox",VM="BNav",$M="BPopover",HM="BRow",UM="BSidebar",GM="BTab",xa="BTable",WM="BTableCell",KM="BTabs",qM="BTbody",YM="BTfoot",QM="BTh",ZM="BThead",bd="BToast",Dd="BToaster",JM="BTooltip",XM="BTr",oG="BVPopover",sG="BVPopoverTemplate",aG="BVPopper",lG="BVTabButton",cG="BVTooltip",dG="BVTooltipTemplate",uG="BVTransition",e2="BVTransporter",hG="BVTransporterTarget",fG="activate-tab",pG="blur",gG="cancel",Xr="change",mG="changed",_o="click",Rv="close",t2="context-changed",n2="destroyed",Bv="disable",tf="disabled",Lv="enable",nf="enabled",jv="filtered",i2="first",r2="focusin",o2="focusout",Id="head-clicked",Rn="hidden",tr="hide",bG="img-error",s2="input",a2="last",l2="mouseenter",c2="mouseleave",d2="next",vG="ok",Jx="open",kG="paused",u2="prev",wG="refresh",vd="refreshed",Lf="row-clicked",_G="row-contextmenu",CG="row-dblclicked",yG="row-hovered",AG="row-middle-clicked",EG="row-selected",TG="row-unhovered",wi="show",_r="shown",Lb="sliding-end",xG="sliding-start",SG="sort-changed",h2="toggle",OG="unpaused",DG="update",f2=Ai?"vnodeBeforeUnmount":"hook:beforeDestroy",jf=Ai?"vNodeUnmounted":"hook:destroyed",Ia="update:",p2="bv",g2="::",Zi={passive:!0},Ut={passive:!0,capture:!1},ec=void 0,Cr=Array,Y=Boolean,Ds=Function,Yr=Number,Kn=Object,IG=RegExp,V=String,m2=[Cr,Ds],PG=[Cr,Kn],tt=[Cr,Kn,V],Co=[Cr,V],zv=[Y,Yr,V],Tr=[Y,V],Ze=[Yr,V],MG=[Yr,Kn,V],NG=[Kn,Ds],b2=[Kn,V],Xx="badge",eS="bottom-row",tS="button-content",nS="custom-foot",eo="default",RG="description",BG="drop-placeholder",v2="empty",LG="emptyfiltered",iS="file-name",k2="first",Fv="footer",zf="header",jG="header-close",zG="img",FG="invalid-feedback",VG="label",$G="modal-backdrop",rS="modal-cancel",HG="modal-footer",UG="modal-header",GG="modal-header-close",oS="modal-ok",jb="modal-title",WG="placeholder",ld="row-details",kd="table-busy",sS="table-caption",aS="table-colgroup",KG="tabs-end",qG="tabs-start",YG="thead-top",vu="title",QG="toast-title",lS="top-row",ZG="valid-feedback",Sa=function(){return Array.from.apply(Array,arguments)},kt=function(t,r){return t.indexOf(r)!==-1},dn=function(){for(var t=arguments.length,r=new Array(t),s=0;s<t;s++)r[s]=arguments[s];return Array.prototype.concat.apply([],r)},JG=function(t,r){var s=He(r)?r:function(){return r};return Array.apply(null,{length:t}).map(s)},XG=function(t){return t.reduce(function(r,s){return dn(r,s)},[])},cd=function n(t){return t.reduce(function(r,s){return dn(r,Array.isArray(s)?n(s):s)},[])},Ff=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return t=dn(t).filter(wt),t.some(function(d){return r[d]||s[d]})},Pd=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};t=dn(t).filter(wt);for(var f,p=0;p<t.length&&!f;p++){var v=t[p];f=s[v]||d[v]}return He(f)?f(r):f},Nt=ce({methods:{hasNormalizedSlot:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:eo,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.$scopedSlots,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:this.$slots;return Ff(t,r,s)},normalizeSlot:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:eo,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:this.$scopedSlots,d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:this.$slots,f=Pd(t,r,s,d);return f&&dn(f)}}}),jt=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:NaN,s=parseInt(t,10);return isNaN(s)?r:s},mn=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:NaN,s=parseFloat(t);return isNaN(s)?r:s},Pw=function(t){return t.replace(vU,"-$1").toLowerCase()},w2=function(t){return t=Pw(t).replace(TU,function(r,s){return s?s.toUpperCase():""}),t.charAt(0).toUpperCase()+t.slice(1)},rf=function(t){return t.replace(EU," ").replace(kU,function(r,s,d){return s+" "+d}).replace(AU,function(r,s,d){return s+d.toUpperCase()})},eW=function(t){return t=zt(t)?t.trim():String(t),t.charAt(0).toLowerCase()+t.slice(1)},_2=function(t){return t=zt(t)?t.trim():String(t),t.charAt(0).toUpperCase()+t.slice(1)},C2=function(t){return t.replace(_U,"\\$&")},_t=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;return un(t)?"":St(t)||Er(t)&&t.toString===Object.prototype.toString?JSON.stringify(t,null,r):String(t)},Gp=function(t){return _t(t).trim()},Vf=function(t){return _t(t).toLowerCase()},of=xw.prototype,tW=["button","[href]:not(.disabled)","input","select","textarea","[tabindex]","[contenteditable]"].map(function(n){return"".concat(n,":not(:disabled):not([disabled])")}).join(", "),nW=of.matches||of.msMatchesSelector||of.webkitMatchesSelector,iW=of.closest||function(n){var t=this;do{if(Wp(t,n))return t;t=t.parentElement||t.parentNode}while(!ir(t)&&t.nodeType===Node.ELEMENT_NODE);return null},kn=(Xt.requestAnimationFrame||Xt.webkitRequestAnimationFrame||Xt.mozRequestAnimationFrame||Xt.msRequestAnimationFrame||Xt.oRequestAnimationFrame||function(n){return setTimeout(n,16)}).bind(Xt),rW=Xt.MutationObserver||Xt.WebKitMutationObserver||Xt.MozMutationObserver||null,oW=function(t){return t&&t.parentNode&&t.parentNode.removeChild(t)},Yt=function(t){return!!(t&&t.nodeType===Node.ELEMENT_NODE)},Jd=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],r=kc.activeElement;return r&&!t.some(function(s){return s===r})?r:null},wc=function(t,r){return _t(t).toLowerCase()===_t(r).toLowerCase()},Mw=function(t){return Yt(t)&&t===Jd()},Oa=function(t){if(!Yt(t)||!t.parentNode||!En(kc.body,t)||Il(t,"display")==="none")return!1;var r=$v(t);return!!(r&&r.height>0&&r.width>0)},Nw=function(t){return!Yt(t)||t.disabled||Zr(t,"disabled")||y2(t,"disabled")},sW=function(t){return Yt(t)&&t.offsetHeight},hs=function(t,r){return Sa((Yt(r)?r:kc).querySelectorAll(t))},Is=function(t,r){return(Yt(r)?r:kc).querySelector(t)||null},Wp=function(t,r){return Yt(t)?nW.call(t,r):!1},_s=function(t,r){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(!Yt(r))return null;var d=iW.call(r,t);return s?d:d===r?null:d},En=function(t,r){return t&&He(t.contains)?t.contains(r):!1},Vv=function(t){return kc.getElementById(/^#/.test(t)?t.slice(1):t)||null},Bi=function(t,r){r&&Yt(t)&&t.classList&&t.classList.add(r)},gi=function(t,r){r&&Yt(t)&&t.classList&&t.classList.remove(r)},y2=function(t,r){return r&&Yt(t)&&t.classList?t.classList.contains(r):!1},Lt=function(t,r,s){r&&Yt(t)&&t.setAttribute(r,s)},Qr=function(t,r){r&&Yt(t)&&t.removeAttribute(r)},vr=function(t,r){return r&&Yt(t)?t.getAttribute(r):null},Zr=function(t,r){return r&&Yt(t)?t.hasAttribute(r):null},gr=function(t,r,s){r&&Yt(t)&&(t.style[r]=s)},A2=function(t,r){r&&Yt(t)&&(t.style[r]="")},Il=function(t,r){return r&&Yt(t)&&t.style[r]||null},$v=function(t){return Yt(t)?t.getBoundingClientRect():null},fa=function(t){var r=Xt.getComputedStyle;return r&&Yt(t)?r(t):{}},aW=function(){var t=Xt.getSelection;return t?Xt.getSelection():null},Hv=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return hs(tW,t).filter(Oa).filter(function(r){return r.tabIndex>-1&&!r.disabled})},cn=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};try{t.focus(r)}catch{}return Mw(t)},ku=function(t){try{t.blur()}catch{}return!Mw(t)},wu=function(t){var r=ns(null);return function(){for(var s=arguments.length,d=new Array(s),f=0;f<s;f++)d[f]=arguments[f];var p=JSON.stringify(d);return r[p]=r[p]||t.apply(null,d)}},lW=Gt.prototype,Uv=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,s=lW[Sl];return s?s.getConfigValue(t,r):Qi(r)},E2=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:void 0;return r?Uv("".concat(t,".").concat(r),s):Uv(t,{})},cW=function(){return Uv("breakpoints",uU)},dW=wu(function(){return cW()}),uW=function(){return Qi(dW())},Xd=wu(function(){var n=uW();return n[0]="",n});function cS(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function _a(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?cS(Object(r),!0).forEach(function(s){T2(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):cS(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function T2(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var Kp=function(t,r){return t+_2(r)},x2=function(t,r){return eW(r.replace(t,""))},fs=function(t,r){return r+(t?_2(t):"")},T=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ec,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:void 0,d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:void 0,f=s===!0;return d=f?d:s,_a(_a(_a({},t?{type:t}:{}),f?{required:f}:Yn(r)?{}:{default:Vn(r)?function(){return r}:r}),Yn(d)?{}:{validator:d})},qp=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:wt;if(St(t))return t.map(r);var s={};for(var d in t)Zd(t,d)&&(s[r(d)]=Vn(t[d])?Ss(t[d]):t[d]);return s},bi=function(t,r){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:wt;return(St(t)?t.slice():ft(t)).reduce(function(d,f){return d[s(f)]=r[f],d},{})},S2=function(t,r,s){return _a(_a({},Qi(t)),{},{default:function(){var f=E2(s,r,t.default);return He(f)?f():f}})},Ne=function(t,r){return ft(t).reduce(function(s,d){return _a(_a({},s),{},T2({},d,S2(t[d],d,r)))},{})},hW=S2({},"","").default.name,Rw=function(t){return He(t)&&t.name&&t.name!==hW};function fW(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var no=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.type,d=s===void 0?ec:s,f=r.defaultValue,p=f===void 0?void 0:f,v=r.validator,m=v===void 0?void 0:v,w=r.event,C=w===void 0?s2:w,y=fW({},t,T(d,p,m)),E=ce({model:{prop:t,event:C},props:y});return{mixin:E,props:y,prop:t,event:C}},O2=function(t){return cU?Vn(t)?t:{capture:!!t||!1}:!!(Vn(t)?t.capture:t)},bn=function(t,r,s,d){t&&t.addEventListener&&t.addEventListener(r,s,O2(d))},Tn=function(t,r,s,d){t&&t.removeEventListener&&t.removeEventListener(r,s,O2(d))},eu=function(t){for(var r=t?bn:Tn,s=arguments.length,d=new Array(s>1?s-1:0),f=1;f<s;f++)d[f-1]=arguments[f];r.apply(void 0,d)},Mt=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.preventDefault,d=s===void 0?!0:s,f=r.propagation,p=f===void 0?!0:f,v=r.immediatePropagation,m=v===void 0?!1:v;d&&t.preventDefault(),p&&t.stopPropagation(),m&&t.stopImmediatePropagation()},D2=function(t){return Pw(t.replace(fU,""))},Hn=function(t,r){return[p2,D2(t),r].join(g2)},$n=function(t,r){return[p2,r,D2(t)].join(g2)};function pW(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var gW=Ne({ariaLabel:T(V,"Close"),content:T(V,"&times;"),disabled:T(Y,!1),textVariant:T(V)},mM),Bw=ce({name:mM,functional:!0,props:gW,render:function(t,r){var s=r.props,d=r.data,f=r.slots,p=r.scopedSlots,v=f(),m=p||{},w={staticClass:"close",class:pW({},"text-".concat(s.textVariant),s.textVariant),attrs:{type:"button",disabled:s.disabled,"aria-label":s.ariaLabel?String(s.ariaLabel):null},on:{click:function(y){s.disabled&&$p(y)&&Mt(y)}}};return Ff(eo,m,v)||(w.domProps={innerHTML:s.content}),t("button",nn(d,w),Pd(eo,{},m,v))}});function dS(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function pa(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?dS(Object(r),!0).forEach(function(s){mW(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):dS(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function mW(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var I2={name:"",enterClass:"",enterActiveClass:"",enterToClass:"show",leaveClass:"show",leaveActiveClass:"",leaveToClass:""},bW=pa(pa({},I2),{},{enterActiveClass:"fade",leaveActiveClass:"fade"}),vW={appear:T(Y,!1),mode:T(V),noFade:T(Y,!1),transProps:T(Kn)},_u=ce({name:uG,functional:!0,props:vW,render:function(t,r){var s=r.children,d=r.data,f=r.props,p=f.transProps;Er(p)||(p=f.noFade?I2:bW,f.appear&&(p=pa(pa({},p),{},{appear:!0,appearClass:p.enterClass,appearActiveClass:p.enterActiveClass,appearToClass:p.enterToClass}))),p=pa(pa({mode:f.mode},p),{},{css:!0});var v=pa({},d);return delete v.props,t("transition",nn(v,{props:p}),s)}}),Yp=Math.min,Wt=Math.max,kW=Math.abs,wW=Math.ceil,uS=Math.floor;function Cn(n){return Ai?new Proxy(n,{get:function(r,s){return s in r?r[s]:void 0}}):n}var P2="a",_W=function(t){return"%"+t.charCodeAt(0).toString(16)},vl=function(t){return encodeURIComponent(_t(t)).replace(SU,_W).replace(xU,",")},CW=function(t){if(!Er(t))return"";var r=ft(t).map(function(s){var d=t[s];return Yn(d)?"":ir(d)?vl(s):St(d)?d.reduce(function(f,p){return ir(p)?f.push(vl(s)):Yn(p)||f.push(vl(s)+"="+vl(p)),f},[]).join("&"):vl(s)+"="+vl(d)}).filter(function(s){return s.length>0}).join("&");return r?"?".concat(r):""},Lw=function(t){return!!(t.href||t.to)},M2=function(t){return!!(t&&!wc(t,"a"))},yW=function(t,r){var s=t.to,d=t.disabled,f=t.routerComponentName,p=!!Cn(r).$router,v=!!Cn(r).$nuxt;return!p||p&&(d||!s)?P2:f||(v?"nuxt-link":"router-link")},AW=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=t.target,s=t.rel;return r==="_blank"&&ir(s)?"noopener":s||null},EW=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=t.href,s=t.to,d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P2,f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"#",p=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"/";if(r)return r;if(M2(d))return null;if(zt(s))return s||p;if(Er(s)&&(s.path||s.query||s.hash)){var v=_t(s.path),m=CW(s.query),w=_t(s.hash);return w=!w||w.charAt(0)==="#"?w:"#".concat(w),"".concat(v).concat(m).concat(w)||p}return f};function hS(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var TW={viewBox:"0 0 16 16",width:"1em",height:"1em",focusable:"false",role:"img","aria-label":"icon"},xW={width:null,height:null,focusable:null,role:null,"aria-label":null},jw={animation:T(V),content:T(V),flipH:T(Y,!1),flipV:T(Y,!1),fontScale:T(Ze,1),rotate:T(Ze,0),scale:T(Ze,1),shiftH:T(Ze,0),shiftV:T(Ze,0),stacked:T(Y,!1),title:T(V),variant:T(V)},SW=ce({name:iG,functional:!0,props:jw,render:function(t,r){var s,d=r.data,f=r.props,p=r.children,v=f.animation,m=f.content,w=f.flipH,C=f.flipV,y=f.stacked,E=f.title,S=f.variant,I=Wt(mn(f.fontScale,1),0)||1,M=Wt(mn(f.scale,1),0)||1,q=mn(f.rotate,0),L=mn(f.shiftH,0),B=mn(f.shiftV,0),$=w||C||M!==1,K=$||q,Z=L||B,re=!un(m),J=[K?"translate(8 8)":null,$?"scale(".concat((w?-1:1)*M," ").concat((C?-1:1)*M,")"):null,q?"rotate(".concat(q,")"):null,K?"translate(-8 -8)":null].filter(wt),G=t("g",{attrs:{transform:J.join(" ")||null},domProps:re?{innerHTML:m||""}:{}},p);Z&&(G=t("g",{attrs:{transform:"translate(".concat(16*L/16," ").concat(-16*B/16,")")}},[G])),y&&(G=t("g",[G]));var P=E?t("title",E):null,X=[P,G].filter(wt);return t("svg",nn({staticClass:"b-icon bi",class:(s={},hS(s,"text-".concat(S),S),hS(s,"b-icon-animation-".concat(v),v),s),attrs:TW,style:y?{}:{fontSize:I===1?null:"".concat(I*100,"%")}},d,y?{attrs:xW}:{},{attrs:{xmlns:y?null:"http://www.w3.org/2000/svg",fill:"currentColor"}}),X)}});function fS(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function pS(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?fS(Object(r),!0).forEach(function(s){OW(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):fS(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function OW(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var DW=Eo(jw,["content"]),zw=function(t,r){var s=Pw(t),d="BIcon".concat(w2(t)),f="bi-".concat(s),p=s.replace(/-/g," "),v=Gp(r||"");return ce({name:d,functional:!0,props:DW,render:function(w,C){var y=C.data,E=C.props;return w(SW,nn({props:{title:p},attrs:{"aria-label":p}},y,{staticClass:f,props:pS(pS({},E),{},{content:v})}))}})},gS=zw("Blank",""),IW=zw("PersonFill",'<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>'),PW=zw("X",'<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>');function mS(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function bS(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?mS(Object(r),!0).forEach(function(s){MW(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):mS(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function MW(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var NW=function n(t,r){if(!t)return Gt.component(r);var s=(t.$options||{}).components,d=s&&s[r];return d||n(t.$parent,r)},N2=Eo(jw,["content"]),RW=Ne(lt(bS(bS({},N2),{},{icon:T(V)})),zM),R2=ce({name:zM,functional:!0,props:RW,render:function(t,r){var s=r.data,d=r.props,f=r.parent,p=w2(Gp(d.icon||"")).replace(DU,"");return t(p&&NW(f,"BIcon".concat(p))||gS,nn(s,{props:bi(N2,d)}))}}),Hl=40,$f=35,Pa=13,Fw=27,Hf=36,Gv=37,B2=39,Ps=32,Md=38,BW=function(t,r){if(t.length!==r.length)return!1;for(var s=!0,d=0;s&&d<t.length;d++)s=tn(t[d],r[d]);return s},tn=function n(t,r){if(t===r)return!0;var s=Qd(t),d=Qd(r);if(s||d)return s&&d?t.getTime()===r.getTime():!1;if(s=St(t),d=St(r),s||d)return s&&d?BW(t,r):!1;if(s=Vn(t),d=Vn(r),s||d){if(!s||!d)return!1;var f=ft(t).length,p=ft(r).length;if(f!==p)return!1;for(var v in t){var m=Zd(t,v),w=Zd(r,v);if(m&&!w||!m&&w||!n(t[v],r[v]))return!1}}return String(t)===String(r)};function vS(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var kS=function(t){return!t||ft(t).length===0},LW=function(t){return{handler:function(s,d){if(!tn(s,d)){if(kS(s)||kS(d)){this[t]=Qi(s);return}for(var f in d)Zd(s,f)||this.$delete(this.$data[t],f);for(var p in s)this.$set(this.$data[t],p,s[p])}}}},L2=function(t,r){return ce({data:function(){return vS({},r,Qi(this[t]))},watch:vS({},t,LW(r))})};function wS(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function jW(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?wS(Object(r),!0).forEach(function(s){zW(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):wS(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function zW(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var FW=L2("$attrs","bvAttrs"),VW=ce({computed:{bvAttrs:function(){var t=jW({},this.$attrs);return Object.keys(t).forEach(function(r){t[r]===void 0&&delete t[r]}),t}}}),Ei=Ai?VW:FW,Ma=function(t){return t.$root.$options.bvEventRoot||t.$root},Oi="$_rootListeners",To=ce({computed:{bvEventRoot:function(){return Ma(this)}},created:function(){this[Oi]={}},beforeDestroy:function(){var t=this;ft(this[Oi]||{}).forEach(function(r){t[Oi][r].forEach(function(s){t.listenOffRoot(r,s)})}),this[Oi]=null},methods:{registerRootListener:function(t,r){this[Oi]&&(this[Oi][t]=this[Oi][t]||[],kt(this[Oi][t],r)||this[Oi][t].push(r))},unregisterRootListener:function(t,r){this[Oi]&&this[Oi][t]&&(this[Oi][t]=this[Oi][t].filter(function(s){return s!==r}))},listenOnRoot:function(t,r){this.bvEventRoot&&(this.bvEventRoot.$on(t,r),this.registerRootListener(t,r))},listenOnRootOnce:function(t,r){var s=this;if(this.bvEventRoot){var d=function f(){s.unregisterRootListener(f),r.apply(void 0,arguments)};this.bvEventRoot.$once(t,d),this.registerRootListener(t,d)}},listenOffRoot:function(t,r){this.unregisterRootListener(t,r),this.bvEventRoot&&this.bvEventRoot.$off(t,r)},emitOnRoot:function(t){if(this.bvEventRoot){for(var r,s=arguments.length,d=new Array(s>1?s-1:0),f=1;f<s;f++)d[f-1]=arguments[f];(r=this.bvEventRoot).$emit.apply(r,[t].concat(d))}}}});function _S(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function CS(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?_S(Object(r),!0).forEach(function(s){$W(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):_S(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function $W(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var HW=L2("$listeners","bvListeners"),UW=ce({data:function(){return{bvListeners:{}}},created:function(){this.bvListeners=CS({},this.$listeners)},beforeUpdate:function(){this.bvListeners=CS({},this.$listeners)}}),Ms=Ai?UW:HW;function GW(n){return YW(n)||qW(n)||KW(n)||WW()}function WW(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function KW(n,t){if(!!n){if(typeof n=="string")return Wv(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Wv(n,t)}}function qW(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function YW(n){if(Array.isArray(n))return Wv(n)}function Wv(n,t){(t==null||t>n.length)&&(t=n.length);for(var r=0,s=new Array(t);r<t;r++)s[r]=n[r];return s}function yS(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function ti(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?yS(Object(r),!0).forEach(function(s){j2(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):yS(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function j2(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var QW=Hn(Iw,"clicked"),z2={activeClass:T(V),append:T(Y,!1),event:T(Co),exact:T(Y,!1),exactActiveClass:T(V),exactPath:T(Y,!1),exactPathActiveClass:T(V),replace:T(Y,!1),routerTag:T(V),to:T(b2)},F2={noPrefetch:T(Y,!1),prefetch:T(Y,null)},Cu=Ne(lt(ti(ti(ti({},F2),z2),{},{active:T(Y,!1),disabled:T(Y,!1),href:T(V),rel:T(V,null),routerComponentName:T(V),target:T(V,"_self")})),Iw),yu=ce({name:Iw,mixins:[Ei,Ms,To,Nt],inheritAttrs:!1,props:Cu,computed:{computedTag:function(){var t=this.to,r=this.disabled,s=this.routerComponentName;return yW({to:t,disabled:r,routerComponentName:s},this)},isRouterLink:function(){return M2(this.computedTag)},computedRel:function(){var t=this.target,r=this.rel;return AW({target:t,rel:r})},computedHref:function(){var t=this.to,r=this.href;return EW({to:t,href:r},this.computedTag)},computedProps:function(){var t=this.event,r=this.prefetch,s=this.routerTag;return this.isRouterLink?ti(ti(ti(ti({},bi(Eo(ti(ti({},z2),this.computedTag==="nuxt-link"?F2:{}),["event","prefetch","routerTag"]),this)),t?{event:t}:{}),Aa(r)?{prefetch:r}:{}),s?{tag:s}:{}):{}},computedAttrs:function(){var t=this.bvAttrs,r=this.computedHref,s=this.computedRel,d=this.disabled,f=this.target,p=this.routerTag,v=this.isRouterLink;return ti(ti(ti(ti({},t),r?{href:r}:{}),v&&p&&!wc(p,"a")?{}:{rel:s,target:f}),{},{tabindex:d?"-1":Yn(t.tabindex)?null:t.tabindex,"aria-disabled":d?"true":null})},computedListeners:function(){return ti(ti({},this.bvListeners),{},{click:this.onClick})}},methods:{onClick:function(t){var r=arguments,s=$p(t),d=this.isRouterLink,f=this.bvListeners.click;if(s&&this.disabled)Mt(t,{immediatePropagation:!0});else{if(d){var p;(p=t.currentTarget.__vue__)===null||p===void 0||p.$emit(_o,t)}dn(f).filter(function(v){return He(v)}).forEach(function(v){v.apply(void 0,GW(r))}),this.emitOnRoot(QW,t),this.emitOnRoot("clicked::link",t)}s&&!d&&this.computedHref==="#"&&Mt(t,{propagation:!1})},focus:function(){cn(this.$el)},blur:function(){ku(this.$el)}},render:function(t){var r=this.active,s=this.disabled;return t(this.computedTag,j2({class:{active:r,disabled:s},attrs:this.computedAttrs,props:this.computedProps},this.isRouterLink?"nativeOn":"on",this.computedListeners),this.normalizeSlot())}});function AS(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function Uf(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?AS(Object(r),!0).forEach(function(s){aa(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):AS(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function aa(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var Qp=Eo(Cu,["event","routerTag"]);delete Qp.href.default;delete Qp.to.default;var ZW=Ne(lt(Uf(Uf({},Qp),{},{block:T(Y,!1),disabled:T(Y,!1),pill:T(Y,!1),pressed:T(Y,null),size:T(V),squared:T(Y,!1),tag:T(V,"button"),type:T(V,"button"),variant:T(V,"secondary")})),gM),ES=function(t){t.type==="focusin"?Bi(t.target,"focus"):t.type==="focusout"&&gi(t.target,"focus")},Au=function(t){return Lw(t)||wc(t.tag,"a")},V2=function(t){return Aa(t.pressed)},$2=function(t){return!(Au(t)||t.tag&&!wc(t.tag,"button"))},H2=function(t){return!Au(t)&&!$2(t)},JW=function(t){var r;return["btn-".concat(t.variant||"secondary"),(r={},aa(r,"btn-".concat(t.size),t.size),aa(r,"btn-block",t.block),aa(r,"rounded-pill",t.pill),aa(r,"rounded-0",t.squared&&!t.pill),aa(r,"disabled",t.disabled),aa(r,"active",t.pressed),r)]},XW=function(t){return Au(t)?bi(Qp,t):{}},eK=function(t,r){var s=$2(t),d=Au(t),f=V2(t),p=H2(t),v=d&&t.href==="#",m=r.attrs&&r.attrs.role?r.attrs.role:null,w=r.attrs?r.attrs.tabindex:null;return(p||v)&&(w="0"),{type:s&&!d?t.type:null,disabled:s?t.disabled:null,role:p||v?"button":m,"aria-disabled":p?String(t.disabled):null,"aria-pressed":f?String(t.pressed):null,autocomplete:f?"off":null,tabindex:t.disabled&&!s?"-1":w}},to=ce({name:gM,functional:!0,props:ZW,render:function(t,r){var s=r.props,d=r.data,f=r.listeners,p=r.children,v=V2(s),m=Au(s),w=H2(s),C=m&&s.href==="#",y={keydown:function(I){if(!(s.disabled||!(w||C))){var M=I.keyCode;if(M===Ps||M===Pa&&w){var q=I.currentTarget||I.target;Mt(I,{propagation:!1}),q.click()}}},click:function(I){s.disabled&&$p(I)?Mt(I):v&&f&&f["update:pressed"]&&dn(f["update:pressed"]).forEach(function(M){He(M)&&M(!s.pressed)})}};v&&(y.focusin=ES,y.focusout=ES);var E={staticClass:"btn",class:JW(s),props:XW(s),attrs:eK(s,d),on:y};return t(m?yu:s.tag,nn(Uf(Uf({},d),{},{props:void 0}),E),p)}});function TS(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function Gf(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?TS(Object(r),!0).forEach(function(s){la(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):TS(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function la(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var xS="b-avatar",zb=["sm",null,"lg"],U2=.4,tK=U2*.7,G2=function(t){return t=zt(t)&&cM(t)?mn(t,0):t,wa(t)?"".concat(t,"px"):t||null},W2=Eo(Cu,["active","event","routerTag"]),nK=Ne(lt(Gf(Gf({},W2),{},{alt:T(V,"avatar"),ariaLabel:T(V),badge:T(Tr,!1),badgeLeft:T(Y,!1),badgeOffset:T(V),badgeTop:T(Y,!1),badgeVariant:T(V,"primary"),button:T(Y,!1),buttonType:T(V,"button"),icon:T(V),rounded:T(Tr,!1),size:T(Ze),square:T(Y,!1),src:T(V),text:T(V),variant:T(V,"secondary")})),fM),Na=ce({name:fM,mixins:[Nt],inject:{getBvAvatarGroup:{default:function(){return function(){return null}}}},props:nK,data:function(){return{localSrc:this.src||null}},computed:{bvAvatarGroup:function(){return this.getBvAvatarGroup()},computedSize:function(){var t=this.bvAvatarGroup;return G2(t?t.size:this.size)},computedVariant:function(){var t=this.bvAvatarGroup;return t&&t.variant?t.variant:this.variant},computedRounded:function(){var t=this.bvAvatarGroup,r=t&&t.square?!0:this.square,s=t&&t.rounded?t.rounded:this.rounded;return r?"0":s===""?!0:s||"circle"},fontStyle:function(){var t=this.computedSize,r=zb.indexOf(t)===-1?"calc(".concat(t," * ").concat(U2,")"):null;return r?{fontSize:r}:{}},marginStyle:function(){var t=this.computedSize,r=this.bvAvatarGroup,s=r?r.overlapScale:0,d=t&&s?"calc(".concat(t," * -").concat(s,")"):null;return d?{marginLeft:d,marginRight:d}:{}},badgeStyle:function(){var t=this.computedSize,r=this.badgeTop,s=this.badgeLeft,d=this.badgeOffset,f=d||"0px";return{fontSize:zb.indexOf(t)===-1?"calc(".concat(t," * ").concat(tK," )"):null,top:r?f:null,bottom:r?null:f,left:s?f:null,right:s?null:f}}},watch:{src:function(t,r){t!==r&&(this.localSrc=t||null)}},methods:{onImgError:function(t){this.localSrc=null,this.$emit(bG,t)},onClick:function(t){this.$emit(_o,t)}},render:function(t){var r,s=this.computedVariant,d=this.disabled,f=this.computedRounded,p=this.icon,v=this.localSrc,m=this.text,w=this.fontStyle,C=this.marginStyle,y=this.computedSize,E=this.button,S=this.buttonType,I=this.badge,M=this.badgeVariant,q=this.badgeStyle,L=!E&&Lw(this),B=E?to:L?yu:"span",$=this.alt,K=this.ariaLabel||null,Z=null;this.hasNormalizedSlot()?Z=t("span",{staticClass:"b-avatar-custom"},[this.normalizeSlot()]):v?(Z=t("img",{style:s?{}:{width:"100%",height:"100%"},attrs:{src:v,alt:$},on:{error:this.onImgError}}),Z=t("span",{staticClass:"b-avatar-img"},[Z])):p?Z=t(R2,{props:{icon:p},attrs:{"aria-hidden":"true",alt:$}}):m?Z=t("span",{staticClass:"b-avatar-text",style:w},[t("span",m)]):Z=t(IW,{attrs:{"aria-hidden":"true",alt:$}});var re=t(),J=this.hasNormalizedSlot(Xx);if(I||I===""||J){var G=I===!0?"":I;re=t("span",{staticClass:"b-avatar-badge",class:la({},"badge-".concat(M),M),style:q},[J?this.normalizeSlot(Xx):G])}var P={staticClass:xS,class:(r={},la(r,"".concat(xS,"-").concat(y),y&&zb.indexOf(y)!==-1),la(r,"badge-".concat(s),!E&&s),la(r,"rounded",f===!0),la(r,"rounded-".concat(f),f&&f!==!0),la(r,"disabled",d),r),style:Gf(Gf({},C),{},{width:y,height:y}),attrs:{"aria-label":K||null},props:E?{variant:s,disabled:d,type:S}:L?bi(W2,this):{},on:E||L?{click:this.onClick}:{}};return t(B,P,[Z,re])}}),iK=Ne({overlap:T(Ze,.3),rounded:T(Tr,!1),size:T(V),square:T(Y,!1),tag:T(V,"div"),variant:T(V)},pM),K2=ce({name:pM,mixins:[Nt],provide:function(){var t=this;return{getBvAvatarGroup:function(){return t}}},props:iK,computed:{computedSize:function(){return G2(this.size)},overlapScale:function(){return Yp(Wt(mn(this.overlap,0),0),1)/2},paddingStyle:function(){var t=this.computedSize;return t=t?"calc(".concat(t," * ").concat(this.overlapScale,")"):null,t?{paddingLeft:t,paddingRight:t}:{}}},render:function(t){var r=t("div",{staticClass:"b-avatar-group-inner",style:this.paddingStyle},this.normalizeSlot());return t(this.tag,{staticClass:"b-avatar-group",attrs:{role:"group"}},[r])}}),SS=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return String(t).replace(bU,"")},qn=function(t,r){return t?{innerHTML:t}:r?{textContent:r}:{}},Un={id:T(V)},Qn=ce({props:Un,data:function(){return{localId_:null}},computed:{safeId:function(){var t=this.id||this.localId_,r=function(d){return t?(d=String(d||"").replace(/\s+/g,"_"),d?t+"_"+d:t):null};return r}},mounted:function(){var t=this;this.$nextTick(function(){t.localId_="__BVID__".concat(t[ds])})}}),Eu=Ne({bgVariant:T(V),borderVariant:T(V),tag:T(V,"div"),textVariant:T(V)},Ow);ce({props:Eu});var Vw=Ne({title:T(V),titleTag:T(V,"h4")},CM),rK=ce({name:CM,functional:!0,props:Vw,render:function(t,r){var s=r.props,d=r.data,f=r.children;return t(s.titleTag,nn(d,{staticClass:"card-title"}),f||_t(s.title))}}),$w=Ne({subTitle:T(V),subTitleTag:T(V,"h6"),subTitleTextVariant:T(V,"muted")},_M),oK=ce({name:_M,functional:!0,props:$w,render:function(t,r){var s=r.props,d=r.data,f=r.children;return t(s.subTitleTag,nn(d,{staticClass:"card-subtitle",class:[s.subTitleTextVariant?"text-".concat(s.subTitleTextVariant):null]}),f||_t(s.subTitle))}});function OS(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function $h(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?OS(Object(r),!0).forEach(function(s){sf(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):OS(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function sf(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var Hw=Ne(lt($h($h($h($h({},Vw),$w),qp(Eu,Kp.bind(null,"body"))),{},{bodyClass:T(tt),overlay:T(Y,!1)})),bM),sK=ce({name:bM,functional:!0,props:Hw,render:function(t,r){var s,d=r.props,f=r.data,p=r.children,v=d.bodyBgVariant,m=d.bodyBorderVariant,w=d.bodyTextVariant,C=t();d.title&&(C=t(rK,{props:bi(Vw,d)}));var y=t();return d.subTitle&&(y=t(oK,{props:bi($w,d),class:["mb-2"]})),t(d.bodyTag,nn(f,{staticClass:"card-body",class:[(s={"card-img-overlay":d.overlay},sf(s,"bg-".concat(v),v),sf(s,"border-".concat(m),m),sf(s,"text-".concat(w),w),s),d.bodyClass]}),[C,y,p])}});function DS(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function IS(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?DS(Object(r),!0).forEach(function(s){af(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):DS(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function af(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var Uw=Ne(lt(IS(IS({},qp(Eu,Kp.bind(null,"header"))),{},{header:T(V),headerClass:T(tt),headerHtml:T(V)})),kM),aK=ce({name:kM,functional:!0,props:Uw,render:function(t,r){var s,d=r.props,f=r.data,p=r.children,v=d.headerBgVariant,m=d.headerBorderVariant,w=d.headerTextVariant;return t(d.headerTag,nn(f,{staticClass:"card-header",class:[d.headerClass,(s={},af(s,"bg-".concat(v),v),af(s,"border-".concat(m),m),af(s,"text-".concat(w),w),s)],domProps:p?{}:qn(d.headerHtml,d.header)}),p)}});function PS(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function MS(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?PS(Object(r),!0).forEach(function(s){lf(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):PS(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function lf(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var Gw=Ne(lt(MS(MS({},qp(Eu,Kp.bind(null,"footer"))),{},{footer:T(V),footerClass:T(tt),footerHtml:T(V)})),vM),lK=ce({name:vM,functional:!0,props:Gw,render:function(t,r){var s,d=r.props,f=r.data,p=r.children,v=d.footerBgVariant,m=d.footerBorderVariant,w=d.footerTextVariant;return t(d.footerTag,nn(f,{staticClass:"card-footer",class:[d.footerClass,(s={},lf(s,"bg-".concat(v),v),lf(s,"border-".concat(m),m),lf(s,"text-".concat(w),w),s)],domProps:p?{}:qn(d.footerHtml,d.footer)}),p)}});function Fb(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var cK='<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>',dK=function(t,r,s){var d=encodeURIComponent(cK.replace("%{w}",_t(t)).replace("%{h}",_t(r)).replace("%{f}",s));return"data:image/svg+xml;charset=UTF-8,".concat(d)},q2=Ne({alt:T(V),blank:T(Y,!1),blankColor:T(V,"transparent"),block:T(Y,!1),center:T(Y,!1),fluid:T(Y,!1),fluidGrow:T(Y,!1),height:T(Ze),left:T(Y,!1),right:T(Y,!1),rounded:T(Tr,!1),sizes:T(Co),src:T(V),srcset:T(Co),thumbnail:T(Y,!1),width:T(Ze)},FM),uK=ce({name:FM,functional:!0,props:q2,render:function(t,r){var s,d=r.props,f=r.data,p=d.alt,v=d.src,m=d.block,w=d.fluidGrow,C=d.rounded,y=jt(d.width)||null,E=jt(d.height)||null,S=null,I=dn(d.srcset).filter(wt).join(","),M=dn(d.sizes).filter(wt).join(",");return d.blank&&(!E&&y?E=y:!y&&E&&(y=E),!y&&!E&&(y=1,E=1),v=dK(y,E,d.blankColor||"transparent"),I=null,M=null),d.left?S="float-left":d.right?S="float-right":d.center&&(S="mx-auto",m=!0),t("img",nn(f,{attrs:{src:v,alt:p,width:y?_t(y):null,height:E?_t(E):null,srcset:I||null,sizes:M||null},class:(s={"img-thumbnail":d.thumbnail,"img-fluid":d.fluid||w,"w-100":w,rounded:C===""||C===!0},Fb(s,"rounded-".concat(C),zt(C)&&C!==""),Fb(s,S,S),Fb(s,"d-block",m),s)}))}});function NS(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function RS(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?NS(Object(r),!0).forEach(function(s){hK(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):NS(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function hK(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var Y2=Ne(lt(RS(RS({},Up(q2,["src","alt","width","height","left","right"])),{},{bottom:T(Y,!1),end:T(Y,!1),start:T(Y,!1),top:T(Y,!1)})),wM),fK=ce({name:wM,functional:!0,props:Y2,render:function(t,r){var s=r.props,d=r.data,f=s.src,p=s.alt,v=s.width,m=s.height,w="card-img";return s.top?w+="-top":s.right||s.end?w+="-right":s.bottom?w+="-bottom":(s.left||s.start)&&(w+="-left"),t("img",nn(d,{class:w,attrs:{src:f,alt:p,width:v,height:m}}))}});function BS(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function kl(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?BS(Object(r),!0).forEach(function(s){wd(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):BS(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function wd(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var Ww=qp(Y2,Kp.bind(null,"img"));Ww.imgSrc.required=!1;var pK=Ne(lt(kl(kl(kl(kl(kl(kl({},Hw),Uw),Gw),Ww),Eu),{},{align:T(V),noBody:T(Y,!1)})),Ow),Q2=ce({name:Ow,functional:!0,props:pK,render:function(t,r){var s,d=r.props,f=r.data,p=r.slots,v=r.scopedSlots,m=d.imgSrc,w=d.imgLeft,C=d.imgRight,y=d.imgStart,E=d.imgEnd,S=d.imgBottom,I=d.header,M=d.headerHtml,q=d.footer,L=d.footerHtml,B=d.align,$=d.textVariant,K=d.bgVariant,Z=d.borderVariant,re=v||{},J=p(),G={},P=t(),X=t();if(m){var he=t(fK,{props:bi(Ww,d,x2.bind(null,"img"))});S?X=he:P=he}var Ie=t(),De=Ff(zf,re,J);(De||I||M)&&(Ie=t(aK,{props:bi(Uw,d),domProps:De?{}:qn(M,I)},Pd(zf,G,re,J)));var ke=Pd(eo,G,re,J);d.noBody||(ke=t(sK,{props:bi(Hw,d)},ke),d.overlay&&m&&(ke=t("div",{staticClass:"position-relative"},[P,ke,X]),P=t(),X=t()));var je=t(),de=Ff(Fv,re,J);return(de||q||L)&&(je=t(lK,{props:bi(Gw,d),domProps:De?{}:qn(L,q)},Pd(Fv,G,re,J))),t(d.tag,nn(f,{staticClass:"card",class:(s={"flex-row":w||y,"flex-row-reverse":(C||E)&&!(w||y)},wd(s,"text-".concat(B),B),wd(s,"bg-".concat(K),K),wd(s,"border-".concat(Z),Z),wd(s,"text-".concat($),$),s)}),[P,Ie,ke,je,X])}});function gK(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function LS(n,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(n,s.key,s)}}function mK(n,t,r){return t&&LS(n.prototype,t),r&&LS(n,r),Object.defineProperty(n,"prototype",{writable:!1}),n}var tc="__bv__visibility_observer",bK=function(){function n(t,r){gK(this,n),this.el=t,this.callback=r.callback,this.margin=r.margin||0,this.once=r.once||!1,this.observer=null,this.visible=void 0,this.doneOnce=!1,this.createObserver()}return mK(n,[{key:"createObserver",value:function(){var r=this;if(this.observer&&this.stop(),!(this.doneOnce||!He(this.callback))){try{this.observer=new IntersectionObserver(this.handler.bind(this),{root:null,rootMargin:this.margin,threshold:0})}catch{this.doneOnce=!0,this.observer=void 0,this.callback(null);return}sU(function(){kn(function(){r.observer&&r.observer.observe(r.el)})})}}},{key:"handler",value:function(r){var s=r?r[0]:{},d=Boolean(s.isIntersecting||s.intersectionRatio>0);d!==this.visible&&(this.visible=d,this.callback(d),this.once&&this.visible&&(this.doneOnce=!0,this.stop()))}},{key:"stop",value:function(){this.observer&&this.observer.disconnect(),this.observer=null}}]),n}(),Z2=function(t){var r=t[tc];r&&r.stop&&r.stop(),delete t[tc]},J2=function(t,r){var s=r.value,d=r.modifiers,f={margin:"0px",once:!1,callback:s};ft(d).forEach(function(p){oM.test(p)?f.margin="".concat(p,"px"):p.toLowerCase()==="once"&&(f.once=!0)}),Z2(t),t[tc]=new bK(t,f),t[tc]._prevModifiers=Ss(d)},vK=function(t,r,s){var d=r.value,f=r.oldValue,p=r.modifiers;p=Ss(p),t&&(d!==f||!t[tc]||!tn(p,t[tc]._prevModifiers))&&J2(t,{value:d,modifiers:p})},kK=function(t){Z2(t)},wK={bind:J2,componentUpdated:vK,unbind:kK},tu=function(){};function jS(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function _K(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?jS(Object(r),!0).forEach(function(s){CK(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):jS(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function CK(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var Kw=function(t,r,s){if(t=t?t.$el||t:null,!Yt(t)||UU("observeDom"))return null;var d=new rW(function(f){for(var p=!1,v=0;v<f.length&&!p;v++){var m=f[v],w=m.type,C=m.target;(w==="characterData"&&C.nodeType===Node.TEXT_NODE||w==="attributes"||w==="childList"&&(m.addedNodes.length>0||m.removedNodes.length>0))&&(p=!0)}p&&r()});return d.observe(t,_K({childList:!0,subtree:!0},s)),d},wl;function zS(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function Vb(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?zS(Object(r),!0).forEach(function(s){_d(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):zS(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function _d(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var Zp=no("value",{type:Yr,defaultValue:0}),yK=Zp.mixin,AK=Zp.props,$b=Zp.prop,FS=Zp.event,Hb={next:{dirClass:"carousel-item-left",overlayClass:"carousel-item-next"},prev:{dirClass:"carousel-item-right",overlayClass:"carousel-item-prev"}},EK=600+50,TK=500,xK=40,VS={TOUCH:"touch",PEN:"pen"},$S={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend oTransitionEnd",transition:"transitionend"},SK=function(t){for(var r in $S)if(!Yn(t.style[r]))return $S[r];return null},OK=Ne(lt(Vb(Vb(Vb({},Un),AK),{},{background:T(V),controls:T(Y,!1),fade:T(Y,!1),imgHeight:T(Ze),imgWidth:T(Ze),indicators:T(Y,!1),interval:T(Yr,5e3),labelGotoSlide:T(V,"Goto slide"),labelIndicators:T(V,"Select a slide to display"),labelNext:T(V,"Next slide"),labelPrev:T(V,"Previous slide"),noAnimation:T(Y,!1),noHoverPause:T(Y,!1),noTouch:T(Y,!1),noWrap:T(Y,!1)})),yM),DK=ce({name:yM,mixins:[Qn,yK,Nt],provide:function(){var t=this;return{getBvCarousel:function(){return t}}},props:OK,data:function(){return{index:this[$b]||0,isSliding:!1,transitionEndEvent:null,slides:[],direction:null,isPaused:!(jt(this.interval,0)>0),touchStartX:0,touchDeltaX:0}},computed:{numSlides:function(){return this.slides.length}},watch:(wl={},_d(wl,$b,function(n,t){n!==t&&this.setSlide(jt(n,0))}),_d(wl,"interval",function(t,r){t!==r&&(t?(this.pause(!0),this.start(!1)):this.pause(!1))}),_d(wl,"isPaused",function(t,r){t!==r&&this.$emit(t?kG:OG)}),_d(wl,"index",function(t,r){t===r||this.isSliding||this.doSlide(t,r)}),wl),created:function(){this.$_interval=null,this.$_animationTimeout=null,this.$_touchTimeout=null,this.$_observer=null,this.isPaused=!(jt(this.interval,0)>0)},mounted:function(){this.transitionEndEvent=SK(this.$el)||null,this.updateSlides(),this.setObserver(!0)},beforeDestroy:function(){this.clearInterval(),this.clearAnimationTimeout(),this.clearTouchTimeout(),this.setObserver(!1)},methods:{clearInterval:function(n){function t(){return n.apply(this,arguments)}return t.toString=function(){return n.toString()},t}(function(){clearInterval(this.$_interval),this.$_interval=null}),clearAnimationTimeout:function(){clearTimeout(this.$_animationTimeout),this.$_animationTimeout=null},clearTouchTimeout:function(){clearTimeout(this.$_touchTimeout),this.$_touchTimeout=null},setObserver:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;this.$_observer&&this.$_observer.disconnect(),this.$_observer=null,t&&(this.$_observer=Kw(this.$refs.inner,this.updateSlides.bind(this),{subtree:!1,childList:!0,attributes:!0,attributeFilter:["id"]}))},setSlide:function(t){var r=this,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!(wn&&document.visibilityState&&document.hidden)){var d=this.noWrap,f=this.numSlides;if(t=uS(t),f!==0){if(this.isSliding){this.$once(Lb,function(){kn(function(){return r.setSlide(t,s)})});return}this.direction=s,this.index=t>=f?d?f-1:0:t<0?d?0:f-1:t,d&&this.index!==t&&this.index!==this[$b]&&this.$emit(FS,this.index)}}},prev:function(){this.setSlide(this.index-1,"prev")},next:function(){this.setSlide(this.index+1,"next")},pause:function(t){t||(this.isPaused=!0),this.clearInterval()},start:function(t){t||(this.isPaused=!1),this.clearInterval(),this.interval&&this.numSlides>1&&(this.$_interval=setInterval(this.next,Wt(1e3,this.interval)))},restart:function(){this.$el.contains(Jd())||this.start()},doSlide:function(t,r){var s=this,d=Boolean(this.interval),f=this.calcDirection(this.direction,r,t),p=f.overlayClass,v=f.dirClass,m=this.slides[r],w=this.slides[t];if(!(!m||!w)){if(this.isSliding=!0,d&&this.pause(!1),this.$emit(xG,t),this.$emit(FS,this.index),this.noAnimation)Bi(w,"active"),gi(m,"active"),this.isSliding=!1,this.$nextTick(function(){return s.$emit(Lb,t)});else{Bi(w,p),sW(w),Bi(m,v),Bi(w,v);var C=!1,y=function S(){if(!C){if(C=!0,s.transitionEndEvent){var I=s.transitionEndEvent.split(/\s+/);I.forEach(function(M){return Tn(w,M,S,Ut)})}s.clearAnimationTimeout(),gi(w,v),gi(w,p),Bi(w,"active"),gi(m,"active"),gi(m,v),gi(m,p),Lt(m,"aria-current","false"),Lt(w,"aria-current","true"),Lt(m,"aria-hidden","true"),Lt(w,"aria-hidden","false"),s.isSliding=!1,s.direction=null,s.$nextTick(function(){return s.$emit(Lb,t)})}};if(this.transitionEndEvent){var E=this.transitionEndEvent.split(/\s+/);E.forEach(function(S){return bn(w,S,y,Ut)})}this.$_animationTimeout=setTimeout(y,EK)}d&&this.start(!1)}},updateSlides:function(){this.pause(!0),this.slides=hs(".carousel-item",this.$refs.inner);var t=this.slides.length,r=Wt(0,Yp(uS(this.index),t-1));this.slides.forEach(function(s,d){var f=d+1;d===r?(Bi(s,"active"),Lt(s,"aria-current","true")):(gi(s,"active"),Lt(s,"aria-current","false")),Lt(s,"aria-posinset",String(f)),Lt(s,"aria-setsize",String(t))}),this.setSlide(r),this.start(this.isPaused)},calcDirection:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;return t?Hb[t]:s>r?Hb.next:Hb.prev},handleClick:function(t,r){var s=t.keyCode;(t.type==="click"||s===Ps||s===Pa)&&(Mt(t),r())},handleSwipe:function(){var t=kW(this.touchDeltaX);if(!(t<=xK)){var r=t/this.touchDeltaX;this.touchDeltaX=0,r>0?this.prev():r<0&&this.next()}},touchStart:function(t){ad&&VS[t.pointerType.toUpperCase()]?this.touchStartX=t.clientX:ad||(this.touchStartX=t.touches[0].clientX)},touchMove:function(t){t.touches&&t.touches.length>1?this.touchDeltaX=0:this.touchDeltaX=t.touches[0].clientX-this.touchStartX},touchEnd:function(t){ad&&VS[t.pointerType.toUpperCase()]&&(this.touchDeltaX=t.clientX-this.touchStartX),this.handleSwipe(),this.pause(!1),this.clearTouchTimeout(),this.$_touchTimeout=setTimeout(this.start,TK+Wt(1e3,this.interval))}},render:function(t){var r=this,s=this.indicators,d=this.background,f=this.noAnimation,p=this.noHoverPause,v=this.noTouch,m=this.index,w=this.isSliding,C=this.pause,y=this.restart,E=this.touchStart,S=this.touchEnd,I=this.safeId("__BV_inner_"),M=t("div",{staticClass:"carousel-inner",attrs:{id:I,role:"list"},ref:"inner"},[this.normalizeSlot()]),q=t();if(this.controls){var L=function(Z,re,J){var G=function(X){w?Mt(X,{propagation:!1}):r.handleClick(X,J)};return t("a",{staticClass:"carousel-control-".concat(Z),attrs:{href:"#",role:"button","aria-controls":I,"aria-disabled":w?"true":null},on:{click:G,keydown:G}},[t("span",{staticClass:"carousel-control-".concat(Z,"-icon"),attrs:{"aria-hidden":"true"}}),t("span",{class:"sr-only"},[re])])};q=[L("prev",this.labelPrev,this.prev),L("next",this.labelNext,this.next)]}var B=t("ol",{staticClass:"carousel-indicators",directives:[{name:"show",value:s}],attrs:{id:this.safeId("__BV_indicators_"),"aria-hidden":s?"false":"true","aria-label":this.labelIndicators,"aria-owns":I}},this.slides.map(function(K,Z){var re=function(G){r.handleClick(G,function(){r.setSlide(Z)})};return t("li",{class:{active:Z===m},attrs:{role:"button",id:r.safeId("__BV_indicator_".concat(Z+1,"_")),tabindex:s?"0":"-1","aria-current":Z===m?"true":"false","aria-label":"".concat(r.labelGotoSlide," ").concat(Z+1),"aria-describedby":K.id||null,"aria-controls":I},on:{click:re,keydown:re},key:"slide_".concat(Z)})})),$={mouseenter:p?tu:C,mouseleave:p?tu:y,focusin:C,focusout:y,keydown:function(Z){if(!/input|textarea/i.test(Z.target.tagName)){var re=Z.keyCode;(re===Gv||re===B2)&&(Mt(Z),r[re===Gv?"prev":"next"]())}}};return Nf&&!v&&(ad?($["&pointerdown"]=E,$["&pointerup"]=S):($["&touchstart"]=E,$["&touchmove"]=this.touchMove,$["&touchend"]=S)),t("div",{staticClass:"carousel",class:{slide:!f,"carousel-fade":!f&&this.fade,"pointer-event":Nf&&ad&&!v},style:{background:d},attrs:{role:"region",id:this.safeId(),"aria-busy":w?"true":"false"},on:$},[M,q,B])}});function HS(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function Nd(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?HS(Object(r),!0).forEach(function(s){IK(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):HS(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function IK(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var X2={imgAlt:T(V),imgBlank:T(Y,!1),imgBlankColor:T(V,"transparent"),imgHeight:T(Ze),imgSrc:T(V),imgWidth:T(Ze)},PK=Ne(lt(Nd(Nd(Nd({},Un),X2),{},{background:T(V),caption:T(V),captionHtml:T(V),captionTag:T(V,"h3"),contentTag:T(V,"div"),contentVisibleUp:T(V),text:T(V),textHtml:T(V),textTag:T(V,"p")})),AM),MK=ce({name:AM,mixins:[Qn,Nt],inject:{getBvCarousel:{default:function(){return function(){return{noTouch:!0}}}}},props:PK,computed:{bvCarousel:function(){return this.getBvCarousel()},contentClasses:function(){return[this.contentVisibleUp?"d-none":"",this.contentVisibleUp?"d-".concat(this.contentVisibleUp,"-block"):""]},computedWidth:function(){return this.imgWidth||this.bvCarousel.imgWidth||null},computedHeight:function(){return this.imgHeight||this.bvCarousel.imgHeight||null}},render:function(t){var r=this.normalizeSlot(zG);if(!r&&(this.imgSrc||this.imgBlank)){var s={};!this.bvCarousel.noTouch&&Nf&&(s.dragstart=function(p){return Mt(p,{propagation:!1})}),r=t(uK,{props:Nd(Nd({},bi(X2,this.$props,x2.bind(null,"img"))),{},{width:this.computedWidth,height:this.computedHeight,fluidGrow:!0,block:!0}),on:s})}var d=[this.caption||this.captionHtml?t(this.captionTag,{domProps:qn(this.captionHtml,this.caption)}):!1,this.text||this.textHtml?t(this.textTag,{domProps:qn(this.textHtml,this.text)}):!1,this.normalizeSlot()||!1],f=t();return d.some(wt)&&(f=t(this.contentTag,{staticClass:"carousel-caption",class:this.contentClasses},d.map(function(p){return p||t()}))),t("div",{staticClass:"carousel-item",style:{background:this.background||this.bvCarousel.background||null},attrs:{id:this.safeId(),role:"listitem"}},[r,f])}}),Ul=function(t,r){return Ai?r.instance:t.context},Kv="collapsed",qv="not-collapsed",Jp="__BV_toggle",Rd="".concat(Jp,"_HANDLER__"),Wf="".concat(Jp,"_CLICK__"),Kf="".concat(Jp,"_STATE__"),nc="".concat(Jp,"_TARGETS__"),NK="false",RK="true",Yv="aria-controls",Qv="aria-expanded",Zv="role",US="tabindex",Jv="overflow-anchor",BK=$n(Os,"toggle"),eN=Hn(Os,"state"),tN=Hn(Os,"sync-state"),LK=$n(Os,"request-state"),jK=[Pa,Ps],nN=function(t){return!kt(["button","a"],t.tagName.toLowerCase())},zK=function(t,r){var s=t.modifiers,d=t.arg,f=t.value,p=ft(s||{});if(f=zt(f)?f.split(Xh):f,wc(r.tagName,"a")){var v=vr(r,"href")||"";mU.test(v)&&p.push(v.replace(gU,""))}return dn(d,f).forEach(function(m){return zt(m)&&p.push(m)}),p.filter(function(m,w,C){return m&&C.indexOf(m)===w})},iN=function(t){var r=t[Wf];r&&(Tn(t,"click",r,Zi),Tn(t,"keydown",r,Zi)),t[Wf]=null},FK=function(t,r){if(iN(t),r){var s=function(f){if(!(f.type==="keydown"&&!kt(jK,f.keyCode))&&!Nw(t)){var p=t[nc]||[];p.forEach(function(v){Ma(r).$emit(BK,v)})}};t[Wf]=s,bn(t,"click",s,Zi),nN(t)&&bn(t,"keydown",s,Zi)}},rN=function(t,r){t[Rd]&&r&&Ma(r).$off([eN,tN],t[Rd]),t[Rd]=null},VK=function(t,r){if(rN(t,r),r){var s=function(f,p){kt(t[nc]||[],f)&&(t[Kf]=p,oN(t,p))};t[Rd]=s,Ma(r).$on([eN,tN],s)}},oN=function(t,r){r?(gi(t,Kv),Bi(t,qv),Lt(t,Qv,RK)):(gi(t,qv),Bi(t,Kv),Lt(t,Qv,NK))},Hh=function(t,r){t[r]=null,delete t[r]},Ub=function(t,r,s){if(!(!wn||!Ul(s,r))){nN(t)&&(Zr(t,Zv)||Lt(t,Zv,"button"),Zr(t,US)||Lt(t,US,"0")),oN(t,t[Kf]);var d=zK(r,t);d.length>0?(Lt(t,Yv,d.join(" ")),gr(t,Jv,"none")):(Qr(t,Yv),A2(t,Jv)),kn(function(){FK(t,Ul(s,r))}),tn(d,t[nc])||(t[nc]=d,d.forEach(function(f){Ma(Ul(s,r)).$emit(LK,f)}))}},$K={bind:function(t,r,s){t[Kf]=!1,t[nc]=[],VK(t,Ul(s,r)),Ub(t,r,s)},componentUpdated:Ub,updated:Ub,unbind:function(t,r,s){iN(t),rN(t,Ul(s,r)),Hh(t,Rd),Hh(t,Wf),Hh(t,Kf),Hh(t,nc),gi(t,Kv),gi(t,qv),Qr(t,Qv),Qr(t,Yv),Qr(t,Zv),A2(t,Jv)}},HK=bu({directives:{VBToggle:$K}});/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */var Tu=typeof window<"u"&&typeof document<"u"&&typeof navigator<"u",UK=function(){for(var n=["Edge","Trident","Firefox"],t=0;t<n.length;t+=1)if(Tu&&navigator.userAgent.indexOf(n[t])>=0)return 1;return 0}();function GK(n){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,n()}))}}function WK(n){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,n()},UK))}}var KK=Tu&&window.Promise,qK=KK?GK:WK;function sN(n){var t={};return n&&t.toString.call(n)==="[object Function]"}function Ra(n,t){if(n.nodeType!==1)return[];var r=n.ownerDocument.defaultView,s=r.getComputedStyle(n,null);return t?s[t]:s}function qw(n){return n.nodeName==="HTML"?n:n.parentNode||n.host}function xu(n){if(!n)return document.body;switch(n.nodeName){case"HTML":case"BODY":return n.ownerDocument.body;case"#document":return n.body}var t=Ra(n),r=t.overflow,s=t.overflowX,d=t.overflowY;return/(auto|scroll|overlay)/.test(r+d+s)?n:xu(qw(n))}function aN(n){return n&&n.referenceNode?n.referenceNode:n}var GS=Tu&&!!(window.MSInputMethodContext&&document.documentMode),WS=Tu&&/MSIE 10/.test(navigator.userAgent);function _c(n){return n===11?GS:n===10?WS:GS||WS}function ic(n){if(!n)return document.documentElement;for(var t=_c(10)?document.body:null,r=n.offsetParent||null;r===t&&n.nextElementSibling;)r=(n=n.nextElementSibling).offsetParent;var s=r&&r.nodeName;return!s||s==="BODY"||s==="HTML"?n?n.ownerDocument.documentElement:document.documentElement:["TH","TD","TABLE"].indexOf(r.nodeName)!==-1&&Ra(r,"position")==="static"?ic(r):r}function YK(n){var t=n.nodeName;return t==="BODY"?!1:t==="HTML"||ic(n.firstElementChild)===n}function Xv(n){return n.parentNode!==null?Xv(n.parentNode):n}function qf(n,t){if(!n||!n.nodeType||!t||!t.nodeType)return document.documentElement;var r=n.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,s=r?n:t,d=r?t:n,f=document.createRange();f.setStart(s,0),f.setEnd(d,0);var p=f.commonAncestorContainer;if(n!==p&&t!==p||s.contains(d))return YK(p)?p:ic(p);var v=Xv(n);return v.host?qf(v.host,t):qf(n,Xv(t).host)}function rc(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"top",r=t==="top"?"scrollTop":"scrollLeft",s=n.nodeName;if(s==="BODY"||s==="HTML"){var d=n.ownerDocument.documentElement,f=n.ownerDocument.scrollingElement||d;return f[r]}return n[r]}function QK(n,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,s=rc(t,"top"),d=rc(t,"left"),f=r?-1:1;return n.top+=s*f,n.bottom+=s*f,n.left+=d*f,n.right+=d*f,n}function KS(n,t){var r=t==="x"?"Left":"Top",s=r==="Left"?"Right":"Bottom";return parseFloat(n["border"+r+"Width"])+parseFloat(n["border"+s+"Width"])}function qS(n,t,r,s){return Math.max(t["offset"+n],t["scroll"+n],r["client"+n],r["offset"+n],r["scroll"+n],_c(10)?parseInt(r["offset"+n])+parseInt(s["margin"+(n==="Height"?"Top":"Left")])+parseInt(s["margin"+(n==="Height"?"Bottom":"Right")]):0)}function lN(n){var t=n.body,r=n.documentElement,s=_c(10)&&getComputedStyle(r);return{height:qS("Height",t,r,s),width:qS("Width",t,r,s)}}var ZK=function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")},JK=function(){function n(t,r){for(var s=0;s<r.length;s++){var d=r[s];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(t,d.key,d)}}return function(t,r,s){return r&&n(t.prototype,r),s&&n(t,s),t}}(),oc=function(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n},Ji=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(n[s]=r[s])}return n};function Cs(n){return Ji({},n,{right:n.left+n.width,bottom:n.top+n.height})}function ek(n){var t={};try{if(_c(10)){t=n.getBoundingClientRect();var r=rc(n,"top"),s=rc(n,"left");t.top+=r,t.left+=s,t.bottom+=r,t.right+=s}else t=n.getBoundingClientRect()}catch{}var d={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},f=n.nodeName==="HTML"?lN(n.ownerDocument):{},p=f.width||n.clientWidth||d.width,v=f.height||n.clientHeight||d.height,m=n.offsetWidth-p,w=n.offsetHeight-v;if(m||w){var C=Ra(n);m-=KS(C,"x"),w-=KS(C,"y"),d.width-=m,d.height-=w}return Cs(d)}function Yw(n,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,s=_c(10),d=t.nodeName==="HTML",f=ek(n),p=ek(t),v=xu(n),m=Ra(t),w=parseFloat(m.borderTopWidth),C=parseFloat(m.borderLeftWidth);r&&d&&(p.top=Math.max(p.top,0),p.left=Math.max(p.left,0));var y=Cs({top:f.top-p.top-w,left:f.left-p.left-C,width:f.width,height:f.height});if(y.marginTop=0,y.marginLeft=0,!s&&d){var E=parseFloat(m.marginTop),S=parseFloat(m.marginLeft);y.top-=w-E,y.bottom-=w-E,y.left-=C-S,y.right-=C-S,y.marginTop=E,y.marginLeft=S}return(s&&!r?t.contains(v):t===v&&v.nodeName!=="BODY")&&(y=QK(y,t)),y}function XK(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=n.ownerDocument.documentElement,s=Yw(n,r),d=Math.max(r.clientWidth,window.innerWidth||0),f=Math.max(r.clientHeight,window.innerHeight||0),p=t?0:rc(r),v=t?0:rc(r,"left"),m={top:p-s.top+s.marginTop,left:v-s.left+s.marginLeft,width:d,height:f};return Cs(m)}function cN(n){var t=n.nodeName;if(t==="BODY"||t==="HTML")return!1;if(Ra(n,"position")==="fixed")return!0;var r=qw(n);return r?cN(r):!1}function dN(n){if(!n||!n.parentElement||_c())return document.documentElement;for(var t=n.parentElement;t&&Ra(t,"transform")==="none";)t=t.parentElement;return t||document.documentElement}function Qw(n,t,r,s){var d=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1,f={top:0,left:0},p=d?dN(n):qf(n,aN(t));if(s==="viewport")f=XK(p,d);else{var v=void 0;s==="scrollParent"?(v=xu(qw(t)),v.nodeName==="BODY"&&(v=n.ownerDocument.documentElement)):s==="window"?v=n.ownerDocument.documentElement:v=s;var m=Yw(v,p,d);if(v.nodeName==="HTML"&&!cN(p)){var w=lN(n.ownerDocument),C=w.height,y=w.width;f.top+=m.top-m.marginTop,f.bottom=C+m.top,f.left+=m.left-m.marginLeft,f.right=y+m.left}else f=m}r=r||0;var E=typeof r=="number";return f.left+=E?r:r.left||0,f.top+=E?r:r.top||0,f.right-=E?r:r.right||0,f.bottom-=E?r:r.bottom||0,f}function eq(n){var t=n.width,r=n.height;return t*r}function uN(n,t,r,s,d){var f=arguments.length>5&&arguments[5]!==void 0?arguments[5]:0;if(n.indexOf("auto")===-1)return n;var p=Qw(r,s,f,d),v={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},m=Object.keys(v).map(function(E){return Ji({key:E},v[E],{area:eq(v[E])})}).sort(function(E,S){return S.area-E.area}),w=m.filter(function(E){var S=E.width,I=E.height;return S>=r.clientWidth&&I>=r.clientHeight}),C=w.length>0?w[0].key:m[0].key,y=n.split("-")[1];return C+(y?"-"+y:"")}function hN(n,t,r){var s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null,d=s?dN(t):qf(t,aN(r));return Yw(r,d,s)}function fN(n){var t=n.ownerDocument.defaultView,r=t.getComputedStyle(n),s=parseFloat(r.marginTop||0)+parseFloat(r.marginBottom||0),d=parseFloat(r.marginLeft||0)+parseFloat(r.marginRight||0),f={width:n.offsetWidth+d,height:n.offsetHeight+s};return f}function Yf(n){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return n.replace(/left|right|bottom|top/g,function(r){return t[r]})}function pN(n,t,r){r=r.split("-")[0];var s=fN(n),d={width:s.width,height:s.height},f=["right","left"].indexOf(r)!==-1,p=f?"top":"left",v=f?"left":"top",m=f?"height":"width",w=f?"width":"height";return d[p]=t[p]+t[m]/2-s[m]/2,r===v?d[v]=t[v]-s[w]:d[v]=t[Yf(v)],d}function Su(n,t){return Array.prototype.find?n.find(t):n.filter(t)[0]}function tq(n,t,r){if(Array.prototype.findIndex)return n.findIndex(function(d){return d[t]===r});var s=Su(n,function(d){return d[t]===r});return n.indexOf(s)}function gN(n,t,r){var s=r===void 0?n:n.slice(0,tq(n,"name",r));return s.forEach(function(d){d.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var f=d.function||d.fn;d.enabled&&sN(f)&&(t.offsets.popper=Cs(t.offsets.popper),t.offsets.reference=Cs(t.offsets.reference),t=f(t,d))}),t}function nq(){if(!this.state.isDestroyed){var n={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};n.offsets.reference=hN(this.state,this.popper,this.reference,this.options.positionFixed),n.placement=uN(this.options.placement,n.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),n.originalPlacement=n.placement,n.positionFixed=this.options.positionFixed,n.offsets.popper=pN(this.popper,n.offsets.reference,n.placement),n.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",n=gN(this.modifiers,n),this.state.isCreated?this.options.onUpdate(n):(this.state.isCreated=!0,this.options.onCreate(n))}}function mN(n,t){return n.some(function(r){var s=r.name,d=r.enabled;return d&&s===t})}function Zw(n){for(var t=[!1,"ms","Webkit","Moz","O"],r=n.charAt(0).toUpperCase()+n.slice(1),s=0;s<t.length;s++){var d=t[s],f=d?""+d+r:n;if(typeof document.body.style[f]<"u")return f}return null}function iq(){return this.state.isDestroyed=!0,mN(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[Zw("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function bN(n){var t=n.ownerDocument;return t?t.defaultView:window}function vN(n,t,r,s){var d=n.nodeName==="BODY",f=d?n.ownerDocument.defaultView:n;f.addEventListener(t,r,{passive:!0}),d||vN(xu(f.parentNode),t,r,s),s.push(f)}function rq(n,t,r,s){r.updateBound=s,bN(n).addEventListener("resize",r.updateBound,{passive:!0});var d=xu(n);return vN(d,"scroll",r.updateBound,r.scrollParents),r.scrollElement=d,r.eventsEnabled=!0,r}function oq(){this.state.eventsEnabled||(this.state=rq(this.reference,this.options,this.state,this.scheduleUpdate))}function sq(n,t){return bN(n).removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(r){r.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function aq(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=sq(this.reference,this.state))}function Jw(n){return n!==""&&!isNaN(parseFloat(n))&&isFinite(n)}function tk(n,t){Object.keys(t).forEach(function(r){var s="";["width","height","top","right","bottom","left"].indexOf(r)!==-1&&Jw(t[r])&&(s="px"),n.style[r]=t[r]+s})}function lq(n,t){Object.keys(t).forEach(function(r){var s=t[r];s!==!1?n.setAttribute(r,t[r]):n.removeAttribute(r)})}function cq(n){return tk(n.instance.popper,n.styles),lq(n.instance.popper,n.attributes),n.arrowElement&&Object.keys(n.arrowStyles).length&&tk(n.arrowElement,n.arrowStyles),n}function dq(n,t,r,s,d){var f=hN(d,t,n,r.positionFixed),p=uN(r.placement,f,t,n,r.modifiers.flip.boundariesElement,r.modifiers.flip.padding);return t.setAttribute("x-placement",p),tk(t,{position:r.positionFixed?"fixed":"absolute"}),r}function uq(n,t){var r=n.offsets,s=r.popper,d=r.reference,f=Math.round,p=Math.floor,v=function(L){return L},m=f(d.width),w=f(s.width),C=["left","right"].indexOf(n.placement)!==-1,y=n.placement.indexOf("-")!==-1,E=m%2===w%2,S=m%2===1&&w%2===1,I=t?C||y||E?f:p:v,M=t?f:v;return{left:I(S&&!y&&t?s.left-1:s.left),top:M(s.top),bottom:M(s.bottom),right:I(s.right)}}var hq=Tu&&/Firefox/i.test(navigator.userAgent);function fq(n,t){var r=t.x,s=t.y,d=n.offsets.popper,f=Su(n.instance.modifiers,function($){return $.name==="applyStyle"}).gpuAcceleration;f!==void 0&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var p=f!==void 0?f:t.gpuAcceleration,v=ic(n.instance.popper),m=ek(v),w={position:d.position},C=uq(n,window.devicePixelRatio<2||!hq),y=r==="bottom"?"top":"bottom",E=s==="right"?"left":"right",S=Zw("transform"),I=void 0,M=void 0;if(y==="bottom"?v.nodeName==="HTML"?M=-v.clientHeight+C.bottom:M=-m.height+C.bottom:M=C.top,E==="right"?v.nodeName==="HTML"?I=-v.clientWidth+C.right:I=-m.width+C.right:I=C.left,p&&S)w[S]="translate3d("+I+"px, "+M+"px, 0)",w[y]=0,w[E]=0,w.willChange="transform";else{var q=y==="bottom"?-1:1,L=E==="right"?-1:1;w[y]=M*q,w[E]=I*L,w.willChange=y+", "+E}var B={"x-placement":n.placement};return n.attributes=Ji({},B,n.attributes),n.styles=Ji({},w,n.styles),n.arrowStyles=Ji({},n.offsets.arrow,n.arrowStyles),n}function kN(n,t,r){var s=Su(n,function(v){var m=v.name;return m===t}),d=!!s&&n.some(function(v){return v.name===r&&v.enabled&&v.order<s.order});if(!d){var f="`"+t+"`",p="`"+r+"`";console.warn(p+" modifier is required by "+f+" modifier in order to work, be sure to include it before "+f+"!")}return d}function pq(n,t){var r;if(!kN(n.instance.modifiers,"arrow","keepTogether"))return n;var s=t.element;if(typeof s=="string"){if(s=n.instance.popper.querySelector(s),!s)return n}else if(!n.instance.popper.contains(s))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),n;var d=n.placement.split("-")[0],f=n.offsets,p=f.popper,v=f.reference,m=["left","right"].indexOf(d)!==-1,w=m?"height":"width",C=m?"Top":"Left",y=C.toLowerCase(),E=m?"left":"top",S=m?"bottom":"right",I=fN(s)[w];v[S]-I<p[y]&&(n.offsets.popper[y]-=p[y]-(v[S]-I)),v[y]+I>p[S]&&(n.offsets.popper[y]+=v[y]+I-p[S]),n.offsets.popper=Cs(n.offsets.popper);var M=v[y]+v[w]/2-I/2,q=Ra(n.instance.popper),L=parseFloat(q["margin"+C]),B=parseFloat(q["border"+C+"Width"]),$=M-n.offsets.popper[y]-L-B;return $=Math.max(Math.min(p[w]-I,$),0),n.arrowElement=s,n.offsets.arrow=(r={},oc(r,y,Math.round($)),oc(r,E,""),r),n}function gq(n){return n==="end"?"start":n==="start"?"end":n}var wN=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],Gb=wN.slice(3);function YS(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=Gb.indexOf(n),s=Gb.slice(r+1).concat(Gb.slice(0,r));return t?s.reverse():s}var Wb={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function mq(n,t){if(mN(n.instance.modifiers,"inner")||n.flipped&&n.placement===n.originalPlacement)return n;var r=Qw(n.instance.popper,n.instance.reference,t.padding,t.boundariesElement,n.positionFixed),s=n.placement.split("-")[0],d=Yf(s),f=n.placement.split("-")[1]||"",p=[];switch(t.behavior){case Wb.FLIP:p=[s,d];break;case Wb.CLOCKWISE:p=YS(s);break;case Wb.COUNTERCLOCKWISE:p=YS(s,!0);break;default:p=t.behavior}return p.forEach(function(v,m){if(s!==v||p.length===m+1)return n;s=n.placement.split("-")[0],d=Yf(s);var w=n.offsets.popper,C=n.offsets.reference,y=Math.floor,E=s==="left"&&y(w.right)>y(C.left)||s==="right"&&y(w.left)<y(C.right)||s==="top"&&y(w.bottom)>y(C.top)||s==="bottom"&&y(w.top)<y(C.bottom),S=y(w.left)<y(r.left),I=y(w.right)>y(r.right),M=y(w.top)<y(r.top),q=y(w.bottom)>y(r.bottom),L=s==="left"&&S||s==="right"&&I||s==="top"&&M||s==="bottom"&&q,B=["top","bottom"].indexOf(s)!==-1,$=!!t.flipVariations&&(B&&f==="start"&&S||B&&f==="end"&&I||!B&&f==="start"&&M||!B&&f==="end"&&q),K=!!t.flipVariationsByContent&&(B&&f==="start"&&I||B&&f==="end"&&S||!B&&f==="start"&&q||!B&&f==="end"&&M),Z=$||K;(E||L||Z)&&(n.flipped=!0,(E||L)&&(s=p[m+1]),Z&&(f=gq(f)),n.placement=s+(f?"-"+f:""),n.offsets.popper=Ji({},n.offsets.popper,pN(n.instance.popper,n.offsets.reference,n.placement)),n=gN(n.instance.modifiers,n,"flip"))}),n}function bq(n){var t=n.offsets,r=t.popper,s=t.reference,d=n.placement.split("-")[0],f=Math.floor,p=["top","bottom"].indexOf(d)!==-1,v=p?"right":"bottom",m=p?"left":"top",w=p?"width":"height";return r[v]<f(s[m])&&(n.offsets.popper[m]=f(s[m])-r[w]),r[m]>f(s[v])&&(n.offsets.popper[m]=f(s[v])),n}function vq(n,t,r,s){var d=n.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),f=+d[1],p=d[2];if(!f)return n;if(p.indexOf("%")===0){var v=void 0;switch(p){case"%p":v=r;break;case"%":case"%r":default:v=s}var m=Cs(v);return m[t]/100*f}else if(p==="vh"||p==="vw"){var w=void 0;return p==="vh"?w=Math.max(document.documentElement.clientHeight,window.innerHeight||0):w=Math.max(document.documentElement.clientWidth,window.innerWidth||0),w/100*f}else return f}function kq(n,t,r,s){var d=[0,0],f=["right","left"].indexOf(s)!==-1,p=n.split(/(\+|\-)/).map(function(C){return C.trim()}),v=p.indexOf(Su(p,function(C){return C.search(/,|\s/)!==-1}));p[v]&&p[v].indexOf(",")===-1&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var m=/\s*,\s*|\s+/,w=v!==-1?[p.slice(0,v).concat([p[v].split(m)[0]]),[p[v].split(m)[1]].concat(p.slice(v+1))]:[p];return w=w.map(function(C,y){var E=(y===1?!f:f)?"height":"width",S=!1;return C.reduce(function(I,M){return I[I.length-1]===""&&["+","-"].indexOf(M)!==-1?(I[I.length-1]=M,S=!0,I):S?(I[I.length-1]+=M,S=!1,I):I.concat(M)},[]).map(function(I){return vq(I,E,t,r)})}),w.forEach(function(C,y){C.forEach(function(E,S){Jw(E)&&(d[y]+=E*(C[S-1]==="-"?-1:1))})}),d}function wq(n,t){var r=t.offset,s=n.placement,d=n.offsets,f=d.popper,p=d.reference,v=s.split("-")[0],m=void 0;return Jw(+r)?m=[+r,0]:m=kq(r,f,p,v),v==="left"?(f.top+=m[0],f.left-=m[1]):v==="right"?(f.top+=m[0],f.left+=m[1]):v==="top"?(f.left+=m[0],f.top-=m[1]):v==="bottom"&&(f.left+=m[0],f.top+=m[1]),n.popper=f,n}function _q(n,t){var r=t.boundariesElement||ic(n.instance.popper);n.instance.reference===r&&(r=ic(r));var s=Zw("transform"),d=n.instance.popper.style,f=d.top,p=d.left,v=d[s];d.top="",d.left="",d[s]="";var m=Qw(n.instance.popper,n.instance.reference,t.padding,r,n.positionFixed);d.top=f,d.left=p,d[s]=v,t.boundaries=m;var w=t.priority,C=n.offsets.popper,y={primary:function(S){var I=C[S];return C[S]<m[S]&&!t.escapeWithReference&&(I=Math.max(C[S],m[S])),oc({},S,I)},secondary:function(S){var I=S==="right"?"left":"top",M=C[I];return C[S]>m[S]&&!t.escapeWithReference&&(M=Math.min(C[I],m[S]-(S==="right"?C.width:C.height))),oc({},I,M)}};return w.forEach(function(E){var S=["left","top"].indexOf(E)!==-1?"primary":"secondary";C=Ji({},C,y[S](E))}),n.offsets.popper=C,n}function Cq(n){var t=n.placement,r=t.split("-")[0],s=t.split("-")[1];if(s){var d=n.offsets,f=d.reference,p=d.popper,v=["bottom","top"].indexOf(r)!==-1,m=v?"left":"top",w=v?"width":"height",C={start:oc({},m,f[m]),end:oc({},m,f[m]+f[w]-p[w])};n.offsets.popper=Ji({},p,C[s])}return n}function yq(n){if(!kN(n.instance.modifiers,"hide","preventOverflow"))return n;var t=n.offsets.reference,r=Su(n.instance.modifiers,function(s){return s.name==="preventOverflow"}).boundaries;if(t.bottom<r.top||t.left>r.right||t.top>r.bottom||t.right<r.left){if(n.hide===!0)return n;n.hide=!0,n.attributes["x-out-of-boundaries"]=""}else{if(n.hide===!1)return n;n.hide=!1,n.attributes["x-out-of-boundaries"]=!1}return n}function Aq(n){var t=n.placement,r=t.split("-")[0],s=n.offsets,d=s.popper,f=s.reference,p=["left","right"].indexOf(r)!==-1,v=["top","left"].indexOf(r)===-1;return d[p?"left":"top"]=f[r]-(v?d[p?"width":"height"]:0),n.placement=Yf(t),n.offsets.popper=Cs(d),n}var Eq={shift:{order:100,enabled:!0,fn:Cq},offset:{order:200,enabled:!0,fn:wq,offset:0},preventOverflow:{order:300,enabled:!0,fn:_q,priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:bq},arrow:{order:500,enabled:!0,fn:pq,element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:mq,behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:Aq},hide:{order:800,enabled:!0,fn:yq},computeStyle:{order:850,enabled:!0,fn:fq,gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:cq,onLoad:dq,gpuAcceleration:void 0}},Tq={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:Eq},Xp=function(){function n(t,r){var s=this,d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};ZK(this,n),this.scheduleUpdate=function(){return requestAnimationFrame(s.update)},this.update=qK(this.update.bind(this)),this.options=Ji({},n.Defaults,d),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=r&&r.jquery?r[0]:r,this.options.modifiers={},Object.keys(Ji({},n.Defaults.modifiers,d.modifiers)).forEach(function(p){s.options.modifiers[p]=Ji({},n.Defaults.modifiers[p]||{},d.modifiers?d.modifiers[p]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(p){return Ji({name:p},s.options.modifiers[p])}).sort(function(p,v){return p.order-v.order}),this.modifiers.forEach(function(p){p.enabled&&sN(p.onLoad)&&p.onLoad(s.reference,s.popper,s.options,p,s.state)}),this.update();var f=this.options.eventsEnabled;f&&this.enableEventListeners(),this.state.eventsEnabled=f}return JK(n,[{key:"update",value:function(){return nq.call(this)}},{key:"destroy",value:function(){return iq.call(this)}},{key:"enableEventListeners",value:function(){return oq.call(this)}},{key:"disableEventListeners",value:function(){return aq.call(this)}}]),n}();Xp.Utils=(typeof window<"u"?window:global).PopperUtils;Xp.placements=wN;Xp.Defaults=Tq;const nk=Xp;var xq="top-start",Sq="top-end",Oq="bottom-start",Dq="bottom-end",Iq="right-start",Pq="left-start";function Mq(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function QS(n,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(n,s.key,s)}}function Nq(n,t,r){return t&&QS(n.prototype,t),r&&QS(n,r),Object.defineProperty(n,"prototype",{writable:!1}),n}var Ou=function(){function n(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Mq(this,n),!t)throw new TypeError("Failed to construct '".concat(this.constructor.name,"'. 1 argument required, ").concat(arguments.length," given."));Hp(this,n.Defaults,this.constructor.Defaults,r,{type:t}),Sw(this,{type:Ur(),cancelable:Ur(),nativeEvent:Ur(),target:Ur(),relatedTarget:Ur(),vueTarget:Ur(),componentId:Ur()});var s=!1;this.preventDefault=function(){this.cancelable&&(s=!0)},dM(this,"defaultPrevented",{enumerable:!0,get:function(){return s}})}return Nq(n,null,[{key:"Defaults",get:function(){return{type:"",cancelable:!0,nativeEvent:null,target:null,relatedTarget:null,vueTarget:null,componentId:null}}}]),n}(),Rq=ce({data:function(){return{listenForClickOut:!1}},watch:{listenForClickOut:function(t,r){t!==r&&(Tn(this.clickOutElement,this.clickOutEventName,this._clickOutHandler,Ut),t&&bn(this.clickOutElement,this.clickOutEventName,this._clickOutHandler,Ut))}},beforeCreate:function(){this.clickOutElement=null,this.clickOutEventName=null},mounted:function(){this.clickOutElement||(this.clickOutElement=document),this.clickOutEventName||(this.clickOutEventName="click"),this.listenForClickOut&&bn(this.clickOutElement,this.clickOutEventName,this._clickOutHandler,Ut)},beforeDestroy:function(){Tn(this.clickOutElement,this.clickOutEventName,this._clickOutHandler,Ut)},methods:{isClickOut:function(t){return!En(this.$el,t.target)},_clickOutHandler:function(t){this.clickOutHandler&&this.isClickOut(t)&&this.clickOutHandler(t)}}}),Bq=ce({data:function(){return{listenForFocusIn:!1}},watch:{listenForFocusIn:function(t,r){t!==r&&(Tn(this.focusInElement,"focusin",this._focusInHandler,Ut),t&&bn(this.focusInElement,"focusin",this._focusInHandler,Ut))}},beforeCreate:function(){this.focusInElement=null},mounted:function(){this.focusInElement||(this.focusInElement=document),this.listenForFocusIn&&bn(this.focusInElement,"focusin",this._focusInHandler,Ut)},beforeDestroy:function(){Tn(this.focusInElement,"focusin",this._focusInHandler,Ut)},methods:{_focusInHandler:function(t){this.focusInHandler&&this.focusInHandler(t)}}}),nu=null;Ai&&(nu=new WeakMap);var Lq=function(t,r){!Ai||nu.set(t,r)},jq=function(t){!Ai||nu.delete(t)},zq=function(t){if(!Ai)return t.__vue__;for(var r=t;r;){if(nu.has(r))return nu.get(r);r=r.parentNode}return null};function ZS(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function JS(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ZS(Object(r),!0).forEach(function(s){Fq(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):ZS(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function Fq(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var XS=Hn(Ta,_r),Vq=Hn(Ta,Rn),$q=".dropdown form",Hq=[".dropdown-item",".b-dropdown-form"].map(function(n){return"".concat(n,":not(.disabled):not([disabled])")}).join(", "),Uq=function(t){return(t||[]).filter(Oa)},_N=Ne(lt(JS(JS({},Un),{},{boundary:T([us,V],"scrollParent"),disabled:T(Y,!1),dropleft:T(Y,!1),dropright:T(Y,!1),dropup:T(Y,!1),noFlip:T(Y,!1),offset:T(Ze,0),popperOpts:T(Kn,{}),right:T(Y,!1)})),Ta),Gq=ce({mixins:[Qn,To,Rq,Bq],provide:function(){var t=this;return{getBvDropdown:function(){return t}}},inject:{getBvNavbar:{default:function(){return function(){return null}}}},props:_N,data:function(){return{visible:!1,visibleChangePrevented:!1}},computed:{bvNavbar:function(){return this.getBvNavbar()},inNavbar:function(){return!ir(this.bvNavbar)},toggler:function(){var t=this.$refs.toggle;return t?t.$el||t:null},directionClass:function(){return this.dropup?"dropup":this.dropright?"dropright":this.dropleft?"dropleft":""},boundaryClass:function(){return this.boundary!=="scrollParent"&&!this.inNavbar?"position-static":""},hideDelay:function(){return this.inNavbar?Nf?300:50:0}},watch:{visible:function(t,r){if(this.visibleChangePrevented){this.visibleChangePrevented=!1;return}if(t!==r){var s=t?wi:tr,d=new Ou(s,{cancelable:!0,vueTarget:this,target:this.$refs.menu,relatedTarget:null,componentId:this.safeId?this.safeId():this.id||null});if(this.emitEvent(d),d.defaultPrevented){this.visibleChangePrevented=!0,this.visible=r,this.$off(Rn,this.focusToggler);return}t?this.showMenu():this.hideMenu()}},disabled:function(t,r){t!==r&&t&&this.visible&&(this.visible=!1)}},created:function(){this.$_popper=null,this.$_hideTimeout=null},deactivated:function(){this.visible=!1,this.whileOpenListen(!1),this.destroyPopper()},mounted:function(){Lq(this.$el,this)},beforeDestroy:function(){this.visible=!1,this.whileOpenListen(!1),this.destroyPopper(),this.clearHideTimeout(),jq(this.$el)},methods:{emitEvent:function(t){var r=t.type;this.emitOnRoot(Hn(Ta,r),t),this.$emit(r,t)},showMenu:function(){var t=this;if(!this.disabled){if(!this.inNavbar)if(typeof nk>"u")Ci("Popper.js not found. Falling back to CSS positioning",Ta);else{var r=this.dropup&&this.right||this.split?this.$el:this.$refs.toggle;r=r.$el||r,this.createPopper(r)}this.emitOnRoot(XS,this),this.whileOpenListen(!0),this.$nextTick(function(){t.focusMenu(),t.$emit(_r)})}},hideMenu:function(){this.whileOpenListen(!1),this.emitOnRoot(Vq,this),this.$emit(Rn),this.destroyPopper()},createPopper:function(t){this.destroyPopper(),this.$_popper=new nk(t,this.$refs.menu,this.getPopperConfig())},destroyPopper:function(){this.$_popper&&this.$_popper.destroy(),this.$_popper=null},updatePopper:function(){try{this.$_popper.scheduleUpdate()}catch{}},clearHideTimeout:function(){clearTimeout(this.$_hideTimeout),this.$_hideTimeout=null},getPopperConfig:function(){var t=Oq;this.dropup?t=this.right?Sq:xq:this.dropright?t=Iq:this.dropleft?t=Pq:this.right&&(t=Dq);var r={placement:t,modifiers:{offset:{offset:this.offset||0},flip:{enabled:!this.noFlip}}},s=this.boundary;return s&&(r.modifiers.preventOverflow={boundariesElement:s}),LU(r,this.popperOpts||{})},whileOpenListen:function(t){this.listenForClickOut=t,this.listenForFocusIn=t;var r=t?"listenOnRoot":"listenOffRoot";this[r](XS,this.rootCloseListener)},rootCloseListener:function(t){t!==this&&(this.visible=!1)},show:function(){var t=this;this.disabled||kn(function(){t.visible=!0})},hide:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;this.disabled||(this.visible=!1,t&&this.$once(Rn,this.focusToggler))},toggle:function(t){t=t||{};var r=t,s=r.type,d=r.keyCode;if(!(s!=="click"&&!(s==="keydown"&&[Pa,Ps,Hl].indexOf(d)!==-1))){if(this.disabled){this.visible=!1;return}this.$emit(h2,t),Mt(t),this.visible?this.hide(!0):this.show()}},onMousedown:function(t){Mt(t,{propagation:!1})},onKeydown:function(t){var r=t.keyCode;r===Fw?this.onEsc(t):r===Hl?this.focusNext(t,!1):r===Md&&this.focusNext(t,!0)},onEsc:function(t){this.visible&&(this.visible=!1,Mt(t),this.$once(Rn,this.focusToggler))},onSplitClick:function(t){if(this.disabled){this.visible=!1;return}this.$emit(_o,t)},hideHandler:function(t){var r=this,s=t.target;this.visible&&!En(this.$refs.menu,s)&&!En(this.toggler,s)&&(this.clearHideTimeout(),this.$_hideTimeout=setTimeout(function(){return r.hide()},this.hideDelay))},clickOutHandler:function(t){this.hideHandler(t)},focusInHandler:function(t){this.hideHandler(t)},focusNext:function(t,r){var s=this,d=t.target;!this.visible||t&&_s($q,d)||(Mt(t),this.$nextTick(function(){var f=s.getItems();if(!(f.length<1)){var p=f.indexOf(d);r&&p>0?p--:!r&&p<f.length-1&&p++,p<0&&(p=0),s.focusItem(p,f)}}))},focusItem:function(t,r){var s=r.find(function(d,f){return f===t});cn(s)},getItems:function(){return Uq(hs(Hq,this.$refs.menu))},focusMenu:function(){cn(this.$refs.menu)},focusToggler:function(){var t=this;this.$nextTick(function(){cn(t.toggler)})}}});function eO(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function go(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?eO(Object(r),!0).forEach(function(s){Wq(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):eO(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function Wq(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var Kq=Ne(lt(go(go(go({},Un),_N),{},{block:T(Y,!1),html:T(V),lazy:T(Y,!1),menuClass:T(tt),noCaret:T(Y,!1),role:T(V,"menu"),size:T(V),split:T(Y,!1),splitButtonType:T(V,"button",function(n){return kt(["button","submit","reset"],n)}),splitClass:T(tt),splitHref:T(V),splitTo:T(b2),splitVariant:T(V),text:T(V),toggleAttrs:T(Kn,{}),toggleClass:T(tt),toggleTag:T(V,"button"),toggleText:T(V,"Toggle dropdown"),variant:T(V,"secondary")})),Ta),qq=ce({name:Ta,mixins:[Qn,Gq,Nt],props:Kq,computed:{dropdownClasses:function(){var t=this.block,r=this.split;return[this.directionClass,this.boundaryClass,{show:this.visible,"btn-group":r||!t,"d-flex":t&&r}]},menuClasses:function(){return[this.menuClass,{"dropdown-menu-right":this.right,show:this.visible}]},toggleClasses:function(){var t=this.split;return[this.toggleClass,{"dropdown-toggle-split":t,"dropdown-toggle-no-caret":this.noCaret&&!t}]}},render:function(t){var r=this.visible,s=this.variant,d=this.size,f=this.block,p=this.disabled,v=this.split,m=this.role,w=this.hide,C=this.toggle,y={variant:s,size:d,block:f,disabled:p},E=this.normalizeSlot(tS),S=this.hasNormalizedSlot(tS)?{}:qn(this.html,this.text),I=t();if(v){var M=this.splitTo,q=this.splitHref,L=this.splitButtonType,B=go(go({},y),{},{variant:this.splitVariant||s});M?B.to=M:q?B.href=q:L&&(B.type=L),I=t(to,{class:this.splitClass,attrs:{id:this.safeId("_BV_button_")},props:B,domProps:S,on:{click:this.onSplitClick},ref:"button"},E),E=[t("span",{class:["sr-only"]},[this.toggleText])],S={}}var $=["menu","listbox","tree","grid","dialog"],K=t(to,{staticClass:"dropdown-toggle",class:this.toggleClasses,attrs:go(go({},this.toggleAttrs),{},{id:this.safeId("_BV_toggle_"),"aria-haspopup":$.includes(m)?m:"false","aria-expanded":_t(r)}),props:go(go({},y),{},{tag:this.toggleTag,block:f&&!v}),domProps:S,on:{mousedown:this.onMousedown,click:C,keydown:C},ref:"toggle"},E),Z=t("ul",{staticClass:"dropdown-menu",class:this.menuClasses,attrs:{role:m,tabindex:"-1","aria-labelledby":this.safeId(v?"_BV_button_":"_BV_toggle_")},on:{keydown:this.onKeydown},ref:"menu"},[!this.lazy||r?this.normalizeSlot(eo,{hide:w}):t()]);return t("div",{staticClass:"dropdown b-dropdown",class:this.dropdownClasses,attrs:{id:this.safeId()}},[I,K,Z])}});function tO(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function Qf(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?tO(Object(r),!0).forEach(function(s){CN(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):tO(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function CN(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var yN=Eo(Cu,["event","routerTag"]),Yq=Ne(lt(Qf(Qf({},yN),{},{linkClass:T(tt),variant:T(V)})),xM),Qq=ce({name:xM,mixins:[Ei,Nt],inject:{getBvDropdown:{default:function(){return function(){return null}}}},inheritAttrs:!1,props:Yq,computed:{bvDropdown:function(){return this.getBvDropdown()},computedAttrs:function(){return Qf(Qf({},this.bvAttrs),{},{role:"menuitem"})}},methods:{closeDropdown:function(){var t=this;kn(function(){t.bvDropdown&&t.bvDropdown.hide(!0)})},onClick:function(t){this.$emit(_o,t),this.closeDropdown()}},render:function(t){var r=this.linkClass,s=this.variant,d=this.active,f=this.disabled,p=this.onClick,v=this.bvAttrs;return t("li",{class:v.class,style:v.style,attrs:{role:"presentation"}},[t(yu,{staticClass:"dropdown-item",class:[r,CN({},"text-".concat(s),s&&!(d||f))],props:bi(yN,this.$props),attrs:this.computedAttrs,on:{click:p},ref:"item"},this.normalizeSlot())])}}),Zq='Setting prop "options" to an object is deprecated. Use the array format instead.',Xw=Ne({disabledField:T(V,"disabled"),htmlField:T(V,"html"),options:T(PG,[]),textField:T(V,"text"),valueField:T(V,"value")},"formOptionControls"),AN=ce({props:Xw,computed:{formOptions:function(){return this.normalizeOptions(this.options)}},methods:{normalizeOption:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(Er(t)){var s=Fn(t,this.valueField),d=Fn(t,this.textField);return{value:Yn(s)?r||d:s,text:SS(String(Yn(d)?r:d)),html:Fn(t,this.htmlField),disabled:Boolean(Fn(t,this.disabledField))}}return{value:r||t,text:SS(String(t)),disabled:!1}},normalizeOptions:function(t){var r=this;return St(t)?t.map(function(s){return r.normalizeOption(s)}):Er(t)?(Ci(Zq,this.$options.name),ft(t).map(function(s){return r.normalizeOption(t[s]||{},s)})):[]}}});function Jq(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var Xq=Ne({id:T(V),inline:T(Y,!1),tag:T(V,"small"),textVariant:T(V,"muted")},BM),eY=ce({name:BM,functional:!0,props:Xq,render:function(t,r){var s=r.props,d=r.data,f=r.children;return t(s.tag,nn(d,{class:Jq({"form-text":!s.inline},"text-".concat(s.textVariant),s.textVariant),attrs:{id:s.id}}),f)}}),tY=Ne({ariaLive:T(V),forceShow:T(Y,!1),id:T(V),role:T(V),state:T(Y,null),tag:T(V,"div"),tooltip:T(Y,!1)},IM),nY=ce({name:IM,functional:!0,props:tY,render:function(t,r){var s=r.props,d=r.data,f=r.children,p=s.tooltip,v=s.ariaLive,m=s.forceShow===!0||s.state===!1;return t(s.tag,nn(d,{class:{"d-block":m,"invalid-feedback":!p,"invalid-tooltip":p},attrs:{id:s.id||null,role:s.role||null,"aria-live":v||null,"aria-atomic":v?"true":null}}),f)}}),iY=Ne({ariaLive:T(V),forceShow:T(Y,!1),id:T(V),role:T(V),state:T(Y,null),tag:T(V,"div"),tooltip:T(Y,!1)},jM),rY=ce({name:jM,functional:!0,props:iY,render:function(t,r){var s=r.props,d=r.data,f=r.children,p=s.tooltip,v=s.ariaLive,m=s.forceShow===!0||s.state===!0;return t(s.tag,nn(d,{class:{"d-block":m,"valid-feedback":!p,"valid-tooltip":p},attrs:{id:s.id||null,role:s.role||null,"aria-live":v||null,"aria-atomic":v?"true":null}}),f)}}),oY=Ne({tag:T(V,"div")},PM),nO=ce({name:PM,functional:!0,props:oY,render:function(t,r){var s=r.props,d=r.data,f=r.children;return t(s.tag,nn(d,{staticClass:"form-row"}),f)}}),iO=function(t,r){for(var s=0;s<t.length;s++)if(tn(t[s],r))return s;return-1},rO="input, textarea, select",Cc=Ne({autofocus:T(Y,!1),disabled:T(Y,!1),form:T(V),id:T(V),name:T(V),required:T(Y,!1)},"formControls"),Du=ce({props:Cc,mounted:function(){this.handleAutofocus()},activated:function(){this.handleAutofocus()},methods:{handleAutofocus:function(){var t=this;this.$nextTick(function(){kn(function(){var r=t.$el;t.autofocus&&Oa(r)&&(Wp(r,rO)||(r=Is(rO,r)),cn(r))})})}}}),eg=Ne({plain:T(Y,!1)},"formControls"),e_=ce({props:eg,computed:{custom:function(){return!this.plain}}}),yc=Ne({size:T(V)},"formControls"),tg=ce({props:yc,computed:{sizeFormClass:function(){return[this.size?"form-control-".concat(this.size):null]}}}),Ba=Ne({state:T(Y,null)},"formState"),Ac=ce({props:Ba,computed:{computedState:function(){return Aa(this.state)?this.state:null},stateClass:function(){var t=this.computedState;return t===!0?"is-valid":t===!1?"is-invalid":null},computedAriaInvalid:function(){var t=Cn(this).ariaInvalid;return t===!0||t==="true"||t===""||this.computedState===!1?"true":t}}}),Uh,Go;function oO(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function Gr(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?oO(Object(r),!0).forEach(function(s){di(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):oO(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function di(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var ng=no("checked",{defaultValue:null}),sY=ng.mixin,aY=ng.props,dd=ng.prop,EN=ng.event,TN=Ne(lt(Gr(Gr(Gr(Gr(Gr(Gr(Gr({},Un),aY),Cc),yc),Ba),eg),{},{ariaLabel:T(V),ariaLabelledby:T(V),button:T(Y,!1),buttonVariant:T(V),inline:T(Y,!1),value:T(ec)})),"formRadioCheckControls"),lY=ce({mixins:[Ei,Qn,sY,Nt,Du,tg,Ac,e_],inheritAttrs:!1,props:TN,data:function(){return{localChecked:this.isGroup?this.bvGroup[dd]:this[dd],hasFocus:!1}},computed:{computedLocalChecked:{get:function(){return this.isGroup?this.bvGroup.localChecked:this.localChecked},set:function(t){this.isGroup?this.bvGroup.localChecked=t:this.localChecked=t}},isChecked:function(){return tn(this.value,this.computedLocalChecked)},isRadio:function(){return!0},isGroup:function(){return!!this.bvGroup},isBtnMode:function(){return this.isGroup?this.bvGroup.buttons:this.button},isPlain:function(){return this.isBtnMode?!1:this.isGroup?this.bvGroup.plain:this.plain},isCustom:function(){return this.isBtnMode?!1:!this.isPlain},isSwitch:function(){return this.isBtnMode||this.isRadio||this.isPlain?!1:this.isGroup?this.bvGroup.switches:this.switch},isInline:function(){return this.isGroup?this.bvGroup.inline:this.inline},isDisabled:function(){return this.isGroup?this.bvGroup.disabled||this.disabled:this.disabled},isRequired:function(){return this.computedName&&(this.isGroup?this.bvGroup.required:this.required)},computedName:function(){return(this.isGroup?this.bvGroup.groupName:this.name)||null},computedForm:function(){return(this.isGroup?this.bvGroup.form:this.form)||null},computedSize:function(){return(this.isGroup?this.bvGroup.size:this.size)||""},computedState:function(){return this.isGroup?this.bvGroup.computedState:Aa(this.state)?this.state:null},computedButtonVariant:function(){var t=this.buttonVariant;return t||(this.isGroup&&this.bvGroup.buttonVariant?this.bvGroup.buttonVariant:"secondary")},buttonClasses:function(){var t,r=this.computedSize;return["btn","btn-".concat(this.computedButtonVariant),(t={},di(t,"btn-".concat(r),r),di(t,"disabled",this.isDisabled),di(t,"active",this.isChecked),di(t,"focus",this.hasFocus),t)]},computedAttrs:function(){var t=this.isDisabled,r=this.isRequired;return Gr(Gr({},this.bvAttrs),{},{id:this.safeId(),type:this.isRadio?"radio":"checkbox",name:this.computedName,form:this.computedForm,disabled:t,required:r,"aria-required":r||null,"aria-label":this.ariaLabel||null,"aria-labelledby":this.ariaLabelledby||null})}},watch:(Uh={},di(Uh,dd,function(){this["".concat(dd,"Watcher")].apply(this,arguments)}),di(Uh,"computedLocalChecked",function(){this.computedLocalCheckedWatcher.apply(this,arguments)}),Uh),methods:(Go={},di(Go,"".concat(dd,"Watcher"),function(t){tn(t,this.computedLocalChecked)||(this.computedLocalChecked=t)}),di(Go,"computedLocalCheckedWatcher",function(t,r){tn(t,r)||this.$emit(EN,t)}),di(Go,"handleChange",function(t){var r=this,s=t.target.checked,d=this.value,f=s?d:null;this.computedLocalChecked=d,this.$nextTick(function(){r.$emit(Xr,f),r.isGroup&&r.bvGroup.$emit(Xr,f)})}),di(Go,"handleFocus",function(t){t.target&&(t.type==="focus"?this.hasFocus=!0:t.type==="blur"&&(this.hasFocus=!1))}),di(Go,"focus",function(){this.isDisabled||cn(this.$refs.input)}),di(Go,"blur",function(){this.isDisabled||ku(this.$refs.input)}),Go),render:function(t){var r=this.isRadio,s=this.isBtnMode,d=this.isPlain,f=this.isCustom,p=this.isInline,v=this.isSwitch,m=this.computedSize,w=this.bvAttrs,C=this.normalizeSlot(),y=t("input",{class:[{"form-check-input":d,"custom-control-input":f,"position-static":d&&!C},s?"":this.stateClass],directives:[{name:"model",value:this.computedLocalChecked}],attrs:this.computedAttrs,domProps:{value:this.value,checked:this.isChecked},on:Gr({change:this.handleChange},s?{focus:this.handleFocus,blur:this.handleFocus}:{}),key:"input",ref:"input"});if(s){var E=t("label",{class:this.buttonClasses},[y,C]);return this.isGroup||(E=t("div",{class:["btn-group-toggle","d-inline-block"]},[E])),E}var S=t();return d&&!C||(S=t("label",{class:{"form-check-label":d,"custom-control-label":f},attrs:{for:this.safeId()}},C)),t("div",{class:[di({"form-check":d,"form-check-inline":d&&p,"custom-control":f,"custom-control-inline":f&&p,"custom-checkbox":f&&!r&&!v,"custom-switch":v,"custom-radio":f&&r},"b-custom-control-".concat(m),m&&!s),w.class],style:w.style},[y,S])}}),_l;function sO(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function aO(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?sO(Object(r),!0).forEach(function(s){Pl(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):sO(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function Pl(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var Zf="indeterminate",Kb=Ia+Zf,cY=Ne(lt(aO(aO({},TN),{},(_l={},Pl(_l,Zf,T(Y,!1)),Pl(_l,"switch",T(Y,!1)),Pl(_l,"uncheckedValue",T(ec,!1)),Pl(_l,"value",T(ec,!0)),_l))),SM),t_=ce({name:SM,mixins:[lY],inject:{getBvGroup:{from:"getBvCheckGroup",default:function(){return function(){return null}}}},props:cY,computed:{bvGroup:function(){return this.getBvGroup()},isChecked:function(){var t=this.value,r=this.computedLocalChecked;return St(r)?iO(r,t)>-1:tn(r,t)},isRadio:function(){return!1}},watch:Pl({},Zf,function(n,t){tn(n,t)||this.setIndeterminate(n)}),mounted:function(){this.setIndeterminate(this[Zf])},methods:{computedLocalCheckedWatcher:function(t,r){if(!tn(t,r)){this.$emit(EN,t);var s=this.$refs.input;s&&this.$emit(Kb,s.indeterminate)}},handleChange:function(t){var r=this,s=t.target,d=s.checked,f=s.indeterminate,p=this.value,v=this.uncheckedValue,m=this.computedLocalChecked;if(St(m)){var w=iO(m,p);d&&w<0?m=m.concat(p):!d&&w>-1&&(m=m.slice(0,w).concat(m.slice(w+1)))}else m=d?p:v;this.computedLocalChecked=m,this.$nextTick(function(){r.$emit(Xr,m),r.isGroup&&r.bvGroup.$emit(Xr,m),r.$emit(Kb,f)})},setIndeterminate:function(t){St(this.computedLocalChecked)&&(t=!1);var r=this.$refs.input;r&&(r.indeterminate=t,this.$emit(Kb,t))}}}),Gh;function lO(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function fo(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?lO(Object(r),!0).forEach(function(s){cf(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):lO(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function cf(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var ig=no("value",{type:[Cr,lM],defaultValue:null,validator:function(t){return t===""?(Ci(pY,Dw),!0):un(t)||gY(t)}}),dY=ig.mixin,uY=ig.props,hY=ig.prop,fY=ig.event,pY='Setting "value"/"v-model" to an empty string for reset is deprecated. Set to "null" instead.',gY=function n(t){return RU(t)||St(t)&&t.every(function(r){return n(r)})},xN=function(t){return He(t.getAsEntry)?t.getAsEntry():He(t.webkitGetAsEntry)?t.webkitGetAsEntry():null},mY=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return Promise.all(Sa(t).filter(function(s){return s.kind==="file"}).map(function(s){var d=xN(s);if(d){if(d.isDirectory&&r)return bY(d.createReader(),"".concat(d.name,"/"));if(d.isFile)return new Promise(function(f){d.file(function(p){p.$path="",f(p)})})}return null}).filter(wt))},bY=function n(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return new Promise(function(s){var d=[],f=function p(){t.readEntries(function(v){v.length===0?s(Promise.all(d).then(function(m){return XG(m)})):(d.push(Promise.all(v.map(function(m){if(m){if(m.isDirectory)return n(m.createReader(),"".concat(r).concat(m.name,"/"));if(m.isFile)return new Promise(function(w){m.file(function(C){C.$path="".concat(r).concat(C.name),w(C)})})}return null}).filter(wt))),p())})};f()})},vY=Ne(lt(fo(fo(fo(fo(fo(fo(fo({},Un),uY),Cc),eg),Ba),yc),{},{accept:T(V,""),browseText:T(V,"Browse"),capture:T(Y,!1),directory:T(Y,!1),dropPlaceholder:T(V,"Drop files here"),fileNameFormatter:T(Ds),multiple:T(Y,!1),noDrop:T(Y,!1),noDropPlaceholder:T(V,"Not allowed"),noTraverse:T(Y,!1),placeholder:T(V,"No file chosen")})),Dw),ik=ce({name:Dw,mixins:[Ei,Qn,dY,Nt,Du,Ac,e_,Nt],inheritAttrs:!1,props:vY,data:function(){return{files:[],dragging:!1,dropAllowed:!this.noDrop,hasFocus:!1}},computed:{computedAccept:function(){var t=this.accept;return t=(t||"").trim().split(/[,\s]+/).filter(wt),t.length===0?null:t.map(function(r){var s="name",d="^",f="$";pU.test(r)?d="":(s="type",yU.test(r)&&(f=".+$",r=r.slice(0,-1))),r=C2(r);var p=new RegExp("".concat(d).concat(r).concat(f));return{rx:p,prop:s}})},computedCapture:function(){var t=this.capture;return t===!0||t===""?!0:t||null},computedAttrs:function(){var t=this.name,r=this.disabled,s=this.required,d=this.form,f=this.computedCapture,p=this.accept,v=this.multiple,m=this.directory;return fo(fo({},this.bvAttrs),{},{type:"file",id:this.safeId(),name:t,disabled:r,required:s,form:d||null,capture:f,accept:p||null,multiple:v,directory:m,webkitdirectory:m,"aria-required":s?"true":null})},computedFileNameFormatter:function(){var t=this.fileNameFormatter;return Rw(t)?t:this.defaultFileNameFormatter},clonedFiles:function(){return Qi(this.files)},flattenedFiles:function(){return cd(this.files)},fileNames:function(){return this.flattenedFiles.map(function(t){return t.name})},labelContent:function(){if(this.dragging&&!this.noDrop)return this.normalizeSlot(BG,{allowed:this.dropAllowed})||(this.dropAllowed?this.dropPlaceholder:this.$createElement("span",{staticClass:"text-danger"},this.noDropPlaceholder));if(this.files.length===0)return this.normalizeSlot(WG)||this.placeholder;var t=this.flattenedFiles,r=this.clonedFiles,s=this.fileNames,d=this.computedFileNameFormatter;return this.hasNormalizedSlot(iS)?this.normalizeSlot(iS,{files:t,filesTraversed:r,names:s}):d(t,r,s)}},watch:(Gh={},cf(Gh,hY,function(n){(!n||St(n)&&n.length===0)&&this.reset()}),cf(Gh,"files",function(t,r){if(!tn(t,r)){var s=this.multiple,d=this.noTraverse,f=!s||d?cd(t):t;this.$emit(fY,s?f:f[0]||null)}}),Gh),created:function(){this.$_form=null},mounted:function(){var t=_s("form",this.$el);t&&(bn(t,"reset",this.reset,Zi),this.$_form=t)},beforeDestroy:function(){var t=this.$_form;t&&Tn(t,"reset",this.reset,Zi)},methods:{isFileValid:function(t){if(!t)return!1;var r=this.computedAccept;return r?r.some(function(s){return s.rx.test(t[s.prop])}):!0},isFilesArrayValid:function(t){var r=this;return St(t)?t.every(function(s){return r.isFileValid(s)}):this.isFileValid(t)},defaultFileNameFormatter:function(t,r,s){return s.join(", ")},setFiles:function(t){this.dropAllowed=!this.noDrop,this.dragging=!1,this.files=this.multiple?this.directory?t:cd(t):cd(t).slice(0,1)},setInputFiles:function(t){try{var r=new ClipboardEvent("").clipboardData||new DataTransfer;cd(Qi(t)).forEach(function(s){delete s.$path,r.items.add(s)}),this.$refs.input.files=r.files}catch{}},reset:function(){try{var t=this.$refs.input;t.value="",t.type="",t.type="file"}catch{}this.files=[]},handleFiles:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(r){var s=t.filter(this.isFilesArrayValid);s.length>0&&(this.setFiles(s),this.setInputFiles(s))}else this.setFiles(t)},focusHandler:function(t){this.plain||t.type==="focusout"?this.hasFocus=!1:this.hasFocus=!0},onChange:function(t){var r=this,s=t.type,d=t.target,f=t.dataTransfer,p=f===void 0?{}:f,v=s==="drop";this.$emit(Xr,t);var m=Sa(p.items||[]);if(nM&&m.length>0&&!ir(xN(m[0])))mY(m,this.directory).then(function(C){return r.handleFiles(C,v)});else{var w=Sa(d.files||p.files||[]).map(function(C){return C.$path=C.webkitRelativePath||"",C});this.handleFiles(w,v)}},onDragenter:function(t){Mt(t),this.dragging=!0;var r=t.dataTransfer,s=r===void 0?{}:r;if(this.noDrop||this.disabled||!this.dropAllowed){s.dropEffect="none",this.dropAllowed=!1;return}s.dropEffect="copy"},onDragover:function(t){Mt(t),this.dragging=!0;var r=t.dataTransfer,s=r===void 0?{}:r;if(this.noDrop||this.disabled||!this.dropAllowed){s.dropEffect="none",this.dropAllowed=!1;return}s.dropEffect="copy"},onDragleave:function(t){var r=this;Mt(t),this.$nextTick(function(){r.dragging=!1,r.dropAllowed=!r.noDrop})},onDrop:function(t){var r=this;if(Mt(t),this.dragging=!1,this.noDrop||this.disabled||!this.dropAllowed){this.$nextTick(function(){r.dropAllowed=!r.noDrop});return}this.onChange(t)}},render:function(t){var r=this.custom,s=this.plain,d=this.size,f=this.dragging,p=this.stateClass,v=this.bvAttrs,m=t("input",{class:[{"form-control-file":s,"custom-file-input":r,focus:r&&this.hasFocus},p],style:r?{zIndex:-5}:{},attrs:this.computedAttrs,on:{change:this.onChange,focusin:this.focusHandler,focusout:this.focusHandler,reset:this.reset},ref:"input"});if(s)return m;var w=t("label",{staticClass:"custom-file-label",class:{dragging:f},attrs:{for:this.safeId(),"data-browse":this.browseText||null}},[t("span",{staticClass:"d-block form-file-text",style:{pointerEvents:"none"}},[this.labelContent])]);return t("div",{staticClass:"custom-file b-form-file",class:[cf({},"b-custom-control-".concat(d),d),p,v.class],style:v.style,attrs:{id:this.safeId("_BV_file_outer_")},on:{dragenter:this.onDragenter,dragover:this.onDragover,dragleave:this.onDragleave,drop:this.onDrop}},[m,w])}}),kY=bu({components:{BFormFile:ik,BFile:ik}}),qb=function(t){return"\\"+t},wY=function(t){t=_t(t);var r=t.length,s=t.charCodeAt(0);return t.split("").reduce(function(d,f,p){var v=t.charCodeAt(p);return v===0?d+"\uFFFD":v===127||v>=1&&v<=31||p===0&&v>=48&&v<=57||p===1&&v>=48&&v<=57&&s===45?d+qb("".concat(v.toString(16)," ")):p===0&&v===45&&r===1?d+qb(f):v>=128||v===45||v===95||v>=48&&v<=57||v>=65&&v<=90||v>=97&&v<=122?d+f:d+qb(f)},"")};function cO(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function Wh(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?cO(Object(r),!0).forEach(function(s){Cd(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):cO(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function Cd(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var _Y=["auto","start","end","center","baseline","stretch"],CY=function(t,r,s){var d=t;if(!(un(s)||s===!1))return r&&(d+="-".concat(r)),t==="col"&&(s===""||s===!0)||(d+="-".concat(s)),Vf(d)},yY=wu(CY),rk=ns(null),AY=function(){var t=Xd().filter(wt),r=t.reduce(function(f,p){return f[p]=T(zv),f},ns(null)),s=t.reduce(function(f,p){return f[fs(p,"offset")]=T(Ze),f},ns(null)),d=t.reduce(function(f,p){return f[fs(p,"order")]=T(Ze),f},ns(null));return rk=Hp(ns(null),{col:ft(r),offset:ft(s),order:ft(d)}),Ne(lt(Wh(Wh(Wh(Wh({},r),s),d),{},{alignSelf:T(V,null,function(f){return kt(_Y,f)}),col:T(Y,!1),cols:T(Ze),offset:T(Ze),order:T(Ze),tag:T(V,"div")})),EM)},bo={name:EM,functional:!0,get props(){return delete this.props,this.props=AY()},render:function(t,r){var s,d=r.props,f=r.data,p=r.children,v=d.cols,m=d.offset,w=d.order,C=d.alignSelf,y=[];for(var E in rk)for(var S=rk[E],I=0;I<S.length;I++){var M=yY(E,S[I].replace(E,""),d[S[I]]);M&&y.push(M)}var q=y.some(function(L){return OU.test(L)});return y.push((s={col:d.col||!q&&!v},Cd(s,"col-".concat(v),v),Cd(s,"offset-".concat(m),m),Cd(s,"order-".concat(w),w),Cd(s,"align-self-".concat(C),C),s)),t(d.tag,nn(f,{class:y}),p)}};function dO(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function Ml(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?dO(Object(r),!0).forEach(function(s){EY(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):dO(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function EY(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var SN=["input","select","textarea"],TY=SN.map(function(n){return"".concat(n,":not([disabled])")}).join(),xY=[].concat(SN,["a","button","label"]),SY=function(){return Ne(lt(Ml(Ml(Ml(Ml({},Un),Ba),Xd().reduce(function(t,r){return t[fs(r,"contentCols")]=T(zv),t[fs(r,"labelAlign")]=T(V),t[fs(r,"labelCols")]=T(zv),t},ns(null))),{},{description:T(V),disabled:T(Y,!1),feedbackAriaLive:T(V,"assertive"),invalidFeedback:T(V),label:T(V),labelClass:T(tt),labelFor:T(V),labelSize:T(V),labelSrOnly:T(Y,!1),tooltip:T(Y,!1),validFeedback:T(V),validated:T(Y,!1)})),OM)},Iu={name:OM,mixins:[Qn,Ac,Nt],get props(){return delete this.props,this.props=SY()},data:function(){return{ariaDescribedby:null}},computed:{contentColProps:function(){return this.getColProps(this.$props,"content")},labelAlignClasses:function(){return this.getAlignClasses(this.$props,"label")},labelColProps:function(){return this.getColProps(this.$props,"label")},isHorizontal:function(){return ft(this.contentColProps).length>0||ft(this.labelColProps).length>0}},watch:{ariaDescribedby:function(t,r){t!==r&&this.updateAriaDescribedby(t,r)}},mounted:function(){var t=this;this.$nextTick(function(){t.updateAriaDescribedby(t.ariaDescribedby)})},methods:{getAlignClasses:function(t,r){return Xd().reduce(function(s,d){var f=t[fs(d,"".concat(r,"Align"))]||null;return f&&s.push(["text",d,f].filter(wt).join("-")),s},[])},getColProps:function(t,r){return Xd().reduce(function(s,d){var f=t[fs(d,"".concat(r,"Cols"))];return f=f===""?!0:f||!1,!Aa(f)&&f!=="auto"&&(f=jt(f,0),f=f>0?f:!1),f&&(s[d||(Aa(f)?"col":"cols")]=f),s},{})},updateAriaDescribedby:function(t,r){var s=this.labelFor;if(wn&&s){var d=Is("#".concat(wY(s)),this.$refs.content);if(d){var f="aria-describedby",p=(t||"").split(Xh),v=(r||"").split(Xh),m=(vr(d,f)||"").split(Xh).filter(function(w){return!kt(v,w)}).concat(p).filter(function(w,C,y){return y.indexOf(w)===C}).filter(wt).join(" ").trim();m?Lt(d,f,m):Qr(d,f)}}},onLegendClick:function(t){if(!this.labelFor){var r=t.target,s=r?r.tagName:"";if(xY.indexOf(s)===-1){var d=hs(TY,this.$refs.content).filter(Oa);d.length===1&&cn(d[0])}}}},render:function(t){var r=this.computedState,s=this.feedbackAriaLive,d=this.isHorizontal,f=this.labelFor,p=this.normalizeSlot,v=this.safeId,m=this.tooltip,w=v(),C=!f,y=t(),E=p(VG)||this.label,S=E?v("_BV_label_"):null;if(E||d){var I=this.labelSize,M=this.labelColProps,q=C?"legend":"label";this.labelSrOnly?(E&&(y=t(q,{class:"sr-only",attrs:{id:S,for:f||null}},[E])),y=t(d?bo:"div",{props:d?M:{}},[y])):y=t(d?bo:q,{on:C?{click:this.onLegendClick}:{},props:d?Ml(Ml({},M),{},{tag:q}):{},attrs:{id:S,for:f||null,tabindex:C?"-1":null},class:[C?"bv-no-focus-ring":"",d||C?"col-form-label":"",!d&&C?"pt-0":"",!d&&!C?"d-block":"",I?"col-form-label-".concat(I):"",this.labelAlignClasses,this.labelClass]},[E])}var L=t(),B=p(FG)||this.invalidFeedback,$=B?v("_BV_feedback_invalid_"):null;B&&(L=t(nY,{props:{ariaLive:s,id:$,state:r,tooltip:m},attrs:{tabindex:B?"-1":null}},[B]));var K=t(),Z=p(ZG)||this.validFeedback,re=Z?v("_BV_feedback_valid_"):null;Z&&(K=t(rY,{props:{ariaLive:s,id:re,state:r,tooltip:m},attrs:{tabindex:Z?"-1":null}},[Z]));var J=t(),G=p(RG)||this.description,P=G?v("_BV_description_"):null;G&&(J=t(eY,{attrs:{id:P,tabindex:"-1"}},[G]));var X=this.ariaDescribedby=[P,r===!1?$:null,r===!0?re:null].filter(wt).join(" ")||null,he=t(d?bo:"div",{props:d?this.contentColProps:{},ref:"content"},[p(eo,{ariaDescribedby:X,descriptionId:P,id:w,labelId:S})||t(),L,K,J]);return t(C?"fieldset":d?nO:"div",{staticClass:"form-group",class:[{"was-validated":this.validated},this.stateClass],attrs:{id:w,disabled:C?this.disabled:null,role:C?null:"group","aria-invalid":this.computedAriaInvalid,"aria-labelledby":C&&d?S:null}},d&&C?[t(nO,[y,he])]:[y,he])}},ON=ce({computed:{selectionStart:{cache:!1,get:function(){return this.$refs.input.selectionStart},set:function(t){this.$refs.input.selectionStart=t}},selectionEnd:{cache:!1,get:function(){return this.$refs.input.selectionEnd},set:function(t){this.$refs.input.selectionEnd=t}},selectionDirection:{cache:!1,get:function(){return this.$refs.input.selectionDirection},set:function(t){this.$refs.input.selectionDirection=t}}},methods:{select:function(){var t;(t=this.$refs.input).select.apply(t,arguments)},setSelectionRange:function(){var t;(t=this.$refs.input).setSelectionRange.apply(t,arguments)},setRangeText:function(){var t;(t=this.$refs.input).setRangeText.apply(t,arguments)}}});function uO(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function hO(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?uO(Object(r),!0).forEach(function(s){DN(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):uO(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function DN(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var rg=no("value",{type:Ze,defaultValue:"",event:DG}),OY=rg.mixin,DY=rg.props,fO=rg.prop,IY=rg.event,n_=Ne(lt(hO(hO({},DY),{},{ariaInvalid:T(Tr,!1),autocomplete:T(V),debounce:T(Ze,0),formatter:T(Ds),lazy:T(Y,!1),lazyFormatter:T(Y,!1),number:T(Y,!1),placeholder:T(V),plaintext:T(Y,!1),readonly:T(Y,!1),trim:T(Y,!1)})),"formTextControls"),IN=ce({mixins:[OY],props:n_,data:function(){var t=this[fO];return{localValue:_t(t),vModelValue:this.modifyValue(t)}},computed:{computedClass:function(){var t=this.plaintext,r=this.type,s=r==="range",d=r==="color";return[{"custom-range":s,"form-control-plaintext":t&&!s&&!d,"form-control":d||!t&&!s},this.sizeFormClass,this.stateClass]},computedDebounce:function(){return Wt(jt(this.debounce,0),0)},hasFormatter:function(){return Rw(this.formatter)}},watch:DN({},fO,function(n){var t=_t(n),r=this.modifyValue(n);(t!==this.localValue||r!==this.vModelValue)&&(this.clearDebounce(),this.localValue=t,this.vModelValue=r)}),created:function(){this.$_inputDebounceTimer=null},beforeDestroy:function(){this.clearDebounce()},methods:{clearDebounce:function(){clearTimeout(this.$_inputDebounceTimer),this.$_inputDebounceTimer=null},formatValue:function(t,r){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return t=_t(t),this.hasFormatter&&(!this.lazyFormatter||s)&&(t=this.formatter(t,r)),t},modifyValue:function(t){return t=_t(t),this.trim&&(t=t.trim()),this.number&&(t=mn(t,t)),t},updateValue:function(t){var r=this,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,d=this.lazy;if(!(d&&!s)){this.clearDebounce();var f=function(){if(t=r.modifyValue(t),t!==r.vModelValue)r.vModelValue=t,r.$emit(IY,t);else if(r.hasFormatter){var m=r.$refs.input;m&&t!==m.value&&(m.value=t)}},p=this.computedDebounce;p>0&&!d&&!s?this.$_inputDebounceTimer=setTimeout(f,p):f()}},onInput:function(t){if(!t.target.composing){var r=t.target.value,s=this.formatValue(r,t);if(s===!1||t.defaultPrevented){Mt(t,{propagation:!1});return}this.localValue=s,this.updateValue(s),this.$emit(s2,s)}},onChange:function(t){var r=t.target.value,s=this.formatValue(r,t);if(s===!1||t.defaultPrevented){Mt(t,{propagation:!1});return}this.localValue=s,this.updateValue(s,!0),this.$emit(Xr,s)},onBlur:function(t){var r=t.target.value,s=this.formatValue(r,t,!0);s!==!1&&(this.localValue=_t(this.modifyValue(s)),this.updateValue(s,!0)),this.$emit(pG,t)},focus:function(){this.disabled||cn(this.$el)},blur:function(){this.disabled||ku(this.$el)}}}),PN=ce({computed:{validity:{cache:!1,get:function(){return this.$refs.input.validity}},validationMessage:{cache:!1,get:function(){return this.$refs.input.validationMessage}},willValidate:{cache:!1,get:function(){return this.$refs.input.willValidate}}},methods:{setCustomValidity:function(){var t;return(t=this.$refs.input).setCustomValidity.apply(t,arguments)},checkValidity:function(){var t;return(t=this.$refs.input).checkValidity.apply(t,arguments)},reportValidity:function(){var t;return(t=this.$refs.input).reportValidity.apply(t,arguments)}}});function pO(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function Jo(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?pO(Object(r),!0).forEach(function(s){PY(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):pO(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function PY(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var MN=["text","password","email","number","url","tel","search","range","color","date","time","datetime","datetime-local","month","week"],MY=Ne(lt(Jo(Jo(Jo(Jo(Jo(Jo({},Un),Cc),yc),Ba),n_),{},{list:T(V),max:T(Ze),min:T(Ze),noWheel:T(Y,!1),step:T(Ze),type:T(V,"text",function(n){return kt(MN,n)})})),DM),La=ce({name:DM,mixins:[Ms,Qn,Du,tg,Ac,IN,ON,PN],props:MY,computed:{localType:function(){var t=this.type;return kt(MN,t)?t:"text"},computedAttrs:function(){var t=this.localType,r=this.name,s=this.form,d=this.disabled,f=this.placeholder,p=this.required,v=this.min,m=this.max,w=this.step;return{id:this.safeId(),name:r,form:s,type:t,disabled:d,placeholder:f,required:p,autocomplete:this.autocomplete||null,readonly:this.readonly||this.plaintext,min:v,max:m,step:w,list:t!=="password"?this.list:null,"aria-required":p?"true":null,"aria-invalid":this.computedAriaInvalid}},computedListeners:function(){return Jo(Jo({},this.bvListeners),{},{input:this.onInput,change:this.onChange,blur:this.onBlur})}},watch:{noWheel:function(t){this.setWheelStopper(t)}},mounted:function(){this.setWheelStopper(this.noWheel)},deactivated:function(){this.setWheelStopper(!1)},activated:function(){this.setWheelStopper(this.noWheel)},beforeDestroy:function(){this.setWheelStopper(!1)},methods:{setWheelStopper:function(t){var r=this.$el;eu(t,r,"focus",this.onWheelFocus),eu(t,r,"blur",this.onWheelBlur),t||Tn(document,"wheel",this.stopWheel)},onWheelFocus:function(){bn(document,"wheel",this.stopWheel)},onWheelBlur:function(){Tn(document,"wheel",this.stopWheel)},stopWheel:function(t){Mt(t,{propagation:!1}),ku(this.$el)}},render:function(t){return t("input",{class:this.computedClass,attrs:this.computedAttrs,domProps:{value:this.localValue},on:this.computedListeners,ref:"input"})}}),og=no("value"),NY=og.mixin,RY=og.props,BY=og.prop,LY=og.event;function gO(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function mO(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?gO(Object(r),!0).forEach(function(s){jY(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):gO(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function jY(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var zY=Ne(lt(mO(mO({},Xw),{},{labelField:T(V,"label"),optionsField:T(V,"options")})),"formOptions"),FY=ce({mixins:[AN],props:zY,methods:{normalizeOption:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(Er(t)){var s=Fn(t,this.valueField),d=Fn(t,this.textField),f=Fn(t,this.optionsField,null);return ir(f)?{value:Yn(s)?r||d:s,text:String(Yn(d)?r:d),html:Fn(t,this.htmlField),disabled:Boolean(Fn(t,this.disabledField))}:{label:String(Fn(t,this.labelField)||d),options:this.normalizeOptions(f)}}return{value:r||t,text:String(t),disabled:!1}}}}),VY=Ne({disabled:T(Y,!1),value:T(ec,void 0,!0)},NM),NN=ce({name:NM,functional:!0,props:VY,render:function(t,r){var s=r.props,d=r.data,f=r.children,p=s.value,v=s.disabled;return t("option",nn(d,{attrs:{disabled:v},domProps:{value:p}}),f)}});function bO(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function vO(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?bO(Object(r),!0).forEach(function(s){$Y(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):bO(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function $Y(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var HY=Ne(lt(vO(vO({},Xw),{},{label:T(V,void 0,!0)})),RM),UY=ce({name:RM,mixins:[Nt,AN],props:HY,render:function(t){var r=this.label,s=this.formOptions.map(function(d,f){var p=d.value,v=d.text,m=d.html,w=d.disabled;return t(NN,{attrs:{value:p,disabled:w},domProps:qn(m,v),key:"option_".concat(f)})});return t("optgroup",{attrs:{label:r}},[this.normalizeSlot(k2),s,this.normalizeSlot()])}});function kO(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function ia(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?kO(Object(r),!0).forEach(function(s){GY(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):kO(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function GY(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var WY=Ne(lt(ia(ia(ia(ia(ia(ia(ia({},Un),RY),Cc),eg),yc),Ba),{},{ariaInvalid:T(Tr,!1),multiple:T(Y,!1),selectSize:T(Yr,0)})),MM),i_=ce({name:MM,mixins:[Qn,NY,Du,tg,Ac,e_,FY,Nt],props:WY,data:function(){return{localValue:this[BY]}},computed:{computedSelectSize:function(){return!this.plain&&this.selectSize===0?null:this.selectSize},inputClass:function(){return[this.plain?"form-control":"custom-select",this.size&&this.plain?"form-control-".concat(this.size):null,this.size&&!this.plain?"custom-select-".concat(this.size):null,this.stateClass]}},watch:{value:function(t){this.localValue=t},localValue:function(){this.$emit(LY,this.localValue)}},methods:{focus:function(){cn(this.$refs.input)},blur:function(){ku(this.$refs.input)},onChange:function(t){var r=this,s=t.target,d=Sa(s.options).filter(function(f){return f.selected}).map(function(f){return"_value"in f?f._value:f.value});this.localValue=s.multiple?d:d[0],this.$nextTick(function(){r.$emit(Xr,r.localValue)})}},render:function(t){var r=this.name,s=this.disabled,d=this.required,f=this.computedSelectSize,p=this.localValue,v=this.formOptions.map(function(m,w){var C=m.value,y=m.label,E=m.options,S=m.disabled,I="option_".concat(w);return St(E)?t(UY,{props:{label:y,options:E},key:I}):t(NN,{props:{value:C,disabled:S},domProps:qn(m.html,m.text),key:I})});return t("select",{class:this.inputClass,attrs:{id:this.safeId(),name:r,form:this.form||null,multiple:this.multiple||null,size:f,disabled:s,required:d,"aria-required":d?"true":null,"aria-invalid":this.computedAriaInvalid},on:{change:this.onChange},directives:[{name:"model",value:p}],ref:"input"},[this.normalizeSlot(k2),v,this.normalizeSlot()])}});function wO(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function Xo(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?wO(Object(r),!0).forEach(function(s){KY(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):wO(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function KY(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var qY=Ne(lt(Xo(Xo(Xo(Xo(Xo(Xo({},Un),Cc),yc),Ba),n_),{},{maxRows:T(Ze),noAutoShrink:T(Y,!1),noResize:T(Y,!1),rows:T(Ze,2),wrap:T(V,"soft")})),LM),RN=ce({name:LM,directives:{"b-visible":wK},mixins:[Ms,Qn,To,Du,tg,Ac,IN,ON,PN],props:qY,data:function(){return{heightInPx:null}},computed:{type:function(){return null},computedStyle:function(){var t={resize:!this.computedRows||this.noResize?"none":null};return this.computedRows||(t.height=this.heightInPx,t.overflowY="scroll"),t},computedMinRows:function(){return Wt(jt(this.rows,2),2)},computedMaxRows:function(){return Wt(this.computedMinRows,jt(this.maxRows,0))},computedRows:function(){return this.computedMinRows===this.computedMaxRows?this.computedMinRows:null},computedAttrs:function(){var t=this.disabled,r=this.required;return{id:this.safeId(),name:this.name||null,form:this.form||null,disabled:t,placeholder:this.placeholder||null,required:r,autocomplete:this.autocomplete||null,readonly:this.readonly||this.plaintext,rows:this.computedRows,wrap:this.wrap||null,"aria-required":this.required?"true":null,"aria-invalid":this.computedAriaInvalid}},computedListeners:function(){return Xo(Xo({},this.bvListeners),{},{input:this.onInput,change:this.onChange,blur:this.onBlur})}},watch:{localValue:function(){this.setHeight()}},mounted:function(){this.setHeight()},methods:{visibleCallback:function(t){t&&this.$nextTick(this.setHeight)},setHeight:function(){var t=this;this.$nextTick(function(){kn(function(){t.heightInPx=t.computeHeight()})})},computeHeight:function(){if(this.$isServer||!ir(this.computedRows))return null;var t=this.$el;if(!Oa(t))return null;var r=fa(t),s=mn(r.lineHeight,1),d=mn(r.borderTopWidth,0)+mn(r.borderBottomWidth,0),f=mn(r.paddingTop,0)+mn(r.paddingBottom,0),p=d+f,v=s*this.computedMinRows+p,m=Il(t,"height")||r.height;gr(t,"height","auto");var w=t.scrollHeight;gr(t,"height",m);var C=Wt((w-f)/s,2),y=Yp(Wt(C,this.computedMinRows),this.computedMaxRows),E=Wt(wW(y*s+p),v);return this.noAutoShrink&&mn(m,0)>E?m:"".concat(E,"px")}},render:function(t){return t("textarea",{class:this.computedClass,style:this.computedStyle,directives:[{name:"b-visible",value:this.visibleCallback,modifiers:{640:!0}}],attrs:this.computedAttrs,domProps:{value:this.localValue},on:this.computedListeners,ref:"input"})}});function YY(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var QY=Ne({fluid:T(Tr,!1),tag:T(V,"div")},TM),xr=ce({name:TM,functional:!0,props:QY,render:function(t,r){var s=r.props,d=r.data,f=r.children,p=s.fluid;return t(s.tag,nn(d,{class:YY({container:!(p||p===""),"container-fluid":p===!0||p===""},"container-".concat(p),p&&p!==!0)}),f)}});function _O(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function CO(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?_O(Object(r),!0).forEach(function(s){df(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):_O(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function df(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var Yb=["start","end","center"],ZY=wu(function(n,t){return t=Gp(_t(t)),t?Vf(["row-cols",n,t].filter(wt).join("-")):null}),JY=wu(function(n){return Vf(n.replace("cols",""))}),BN=[],XY=function(){var t=Xd().reduce(function(r,s){return r[fs(s,"cols")]=T(Ze),r},ns(null));return BN=ft(t),Ne(lt(CO(CO({},t),{},{alignContent:T(V,null,function(r){return kt(dn(Yb,"between","around","stretch"),r)}),alignH:T(V,null,function(r){return kt(dn(Yb,"between","around"),r)}),alignV:T(V,null,function(r){return kt(dn(Yb,"baseline","stretch"),r)}),noGutters:T(Y,!1),tag:T(V,"div")})),HM)},ja={name:HM,functional:!0,get props(){return delete this.props,this.props=XY(),this.props},render:function(t,r){var s,d=r.props,f=r.data,p=r.children,v=d.alignV,m=d.alignH,w=d.alignContent,C=[];return BN.forEach(function(y){var E=ZY(JY(y),d[y]);E&&C.push(E)}),C.push((s={"no-gutters":d.noGutters},df(s,"align-items-".concat(v),v),df(s,"justify-content-".concat(m),m),df(s,"align-content-".concat(w),w),s)),t(d.tag,nn(f,{staticClass:"row",class:C}),p)}},Di="$_documentListeners",eQ=ce({created:function(){this[Di]={}},beforeDestroy:function(){var t=this;ft(this[Di]||{}).forEach(function(r){t[Di][r].forEach(function(s){t.listenOffDocument(r,s)})}),this[Di]=null},methods:{registerDocumentListener:function(t,r){this[Di]&&(this[Di][t]=this[Di][t]||[],kt(this[Di][t],r)||this[Di][t].push(r))},unregisterDocumentListener:function(t,r){this[Di]&&this[Di][t]&&(this[Di][t]=this[Di][t].filter(function(s){return s!==r}))},listenDocument:function(t,r,s){t?this.listenOnDocument(r,s):this.listenOffDocument(r,s)},listenOnDocument:function(t,r){wn&&(bn(document,t,r,Ut),this.registerDocumentListener(t,r))},listenOffDocument:function(t,r){wn&&Tn(document,t,r,Ut),this.unregisterDocumentListener(t,r)}}}),Ii="$_windowListeners",tQ=ce({created:function(){this[Ii]={}},beforeDestroy:function(){var t=this;ft(this[Ii]||{}).forEach(function(r){t[Ii][r].forEach(function(s){t.listenOffWindow(r,s)})}),this[Ii]=null},methods:{registerWindowListener:function(t,r){this[Ii]&&(this[Ii][t]=this[Ii][t]||[],kt(this[Ii][t],r)||this[Ii][t].push(r))},unregisterWindowListener:function(t,r){this[Ii]&&this[Ii][t]&&(this[Ii][t]=this[Ii][t].filter(function(s){return s!==r}))},listenWindow:function(t,r,s){t?this.listenOnWindow(r,s):this.listenOffWindow(r,s)},listenOnWindow:function(t,r){wn&&(bn(window,t,r,Ut),this.registerWindowListener(t,r))},listenOffWindow:function(t,r){wn&&Tn(window,t,r,Ut),this.unregisterWindowListener(t,r)}}}),za=ce({computed:{bvParent:function(){return this.$parent||this.$root===this&&this.$options.bvParent}}}),Jf=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return t&&t.$options._scopeId||r};function nQ(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var r_=ce({mixins:[za],computed:{scopedStyleAttrs:function(){var t=Jf(this.bvParent);return t?nQ({},t,""):{}}}});function yO(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function AO(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?yO(Object(r),!0).forEach(function(s){iQ(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):yO(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function iQ(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var Pu=function(t,r){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},d=t.$root?t.$root.$options.bvEventRoot||t.$root:null;return new r(AO(AO({},s),{},{parent:t,bvParent:t,bvEventRoot:d}))},rQ=ce({abstract:!0,name:hG,props:{nodes:T(m2)},data:function(t){return{updatedNodes:t.nodes}},destroyed:function(){oW(this.$el)},render:function(t){var r=this.updatedNodes,s=He(r)?r({}):r;return s=dn(s).filter(wt),s&&s.length>0&&!s[0].text?s[0]:t()}}),LN={container:T([us,V],"body"),disabled:T(Y,!1),tag:T(V,"div")},oQ=ce({name:e2,mixins:[Nt],props:LN,watch:{disabled:{immediate:!0,handler:function(t){t?this.unmountTarget():this.$nextTick(this.mountTarget)}}},created:function(){this.$_defaultFn=null,this.$_target=null},beforeMount:function(){this.mountTarget()},updated:function(){this.updateTarget()},beforeDestroy:function(){this.unmountTarget(),this.$_defaultFn=null},methods:{getContainer:function(){if(wn){var t=this.container;return zt(t)?Is(t):t}else return null},mountTarget:function(){if(!this.$_target){var t=this.getContainer();if(t){var r=document.createElement("div");t.appendChild(r),this.$_target=Pu(this,rQ,{el:r,propsData:{nodes:dn(this.normalizeSlot())}})}}},updateTarget:function(){if(wn&&this.$_target){var t=this.$scopedSlots.default;this.disabled||(t&&this.$_defaultFn!==t?this.$_target.updatedNodes=t:t||(this.$_target.updatedNodes=this.$slots.default)),this.$_defaultFn=t}},unmountTarget:function(){this.$_target&&this.$_target.$destroy(),this.$_target=null}},render:function(t){if(this.disabled){var r=dn(this.normalizeSlot()).filter(wt);if(r.length>0&&!r[0].text)return r[0]}return t()}}),sQ=ce({name:e2,mixins:[Nt],props:LN,render:function(t){if(this.disabled){var r=dn(this.normalizeSlot()).filter(wt);if(r.length>0)return r[0]}return t(Gt.Teleport,{to:this.container},this.normalizeSlot())}}),aQ=Ai?sQ:oQ;function ok(n){return ok=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ok(n)}function EO(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function TO(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?EO(Object(r),!0).forEach(function(s){lQ(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):EO(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function lQ(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}function cQ(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function xO(n,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(n,s.key,s)}}function dQ(n,t,r){return t&&xO(n.prototype,t),r&&xO(n,r),Object.defineProperty(n,"prototype",{writable:!1}),n}function uf(){return typeof Reflect<"u"&&Reflect.get?uf=Reflect.get:uf=function(t,r,s){var d=uQ(t,r);if(!!d){var f=Object.getOwnPropertyDescriptor(d,r);return f.get?f.get.call(arguments.length<3?t:s):f.value}},uf.apply(this,arguments)}function uQ(n,t){for(;!Object.prototype.hasOwnProperty.call(n,t)&&(n=sc(n),n!==null););return n}function hQ(n,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(n,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),writable:!1}),t&&sk(n,t)}function sk(n,t){return sk=Object.setPrototypeOf||function(s,d){return s.__proto__=d,s},sk(n,t)}function fQ(n){var t=gQ();return function(){var s=sc(n),d;if(t){var f=sc(this).constructor;d=Reflect.construct(s,arguments,f)}else d=s.apply(this,arguments);return pQ(this,d)}}function pQ(n,t){if(t&&(ok(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return jN(n)}function jN(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function gQ(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function sc(n){return sc=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},sc(n)}var mQ=function(n){hQ(r,n);var t=fQ(r);function r(s){var d,f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return cQ(this,r),d=t.call(this,s,f),Sw(jN(d),{trigger:Ur()}),d}return dQ(r,null,[{key:"Defaults",get:function(){return TO(TO({},uf(sc(r),"Defaults",this)),{},{trigger:null})}}]),r}(Ou),SO=1040,bQ=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",vQ=".sticky-top",kQ=".navbar-toggler",wQ=ce({data:function(){return{modals:[],baseZIndex:null,scrollbarWidth:null,isBodyOverflowing:!1}},computed:{modalCount:function(){return this.modals.length},modalsAreOpen:function(){return this.modalCount>0}},watch:{modalCount:function(t,r){wn&&(this.getScrollbarWidth(),t>0&&r===0?(this.checkScrollbar(),this.setScrollbar(),Bi(document.body,"modal-open")):t===0&&r>0&&(this.resetScrollbar(),gi(document.body,"modal-open")),Lt(document.body,"data-modal-open-count",String(t)))},modals:function(t){var r=this;this.checkScrollbar(),kn(function(){r.updateModals(t||[])})}},methods:{registerModal:function(t){t&&this.modals.indexOf(t)===-1&&this.modals.push(t)},unregisterModal:function(t){var r=this.modals.indexOf(t);r>-1&&(this.modals.splice(r,1),!t._isBeingDestroyed&&!t._isDestroyed&&this.resetModal(t))},getBaseZIndex:function(){if(wn&&ir(this.baseZIndex)){var t=document.createElement("div");Bi(t,"modal-backdrop"),Bi(t,"d-none"),gr(t,"display","none"),document.body.appendChild(t),this.baseZIndex=jt(fa(t).zIndex,SO),document.body.removeChild(t)}return this.baseZIndex||SO},getScrollbarWidth:function(){if(wn&&ir(this.scrollbarWidth)){var t=document.createElement("div");Bi(t,"modal-scrollbar-measure"),document.body.appendChild(t),this.scrollbarWidth=$v(t).width-t.clientWidth,document.body.removeChild(t)}return this.scrollbarWidth||0},updateModals:function(t){var r=this,s=this.getBaseZIndex(),d=this.getScrollbarWidth();t.forEach(function(f,p){f.zIndex=s+p,f.scrollbarWidth=d,f.isTop=p===r.modals.length-1,f.isBodyOverflowing=r.isBodyOverflowing})},resetModal:function(t){t&&(t.zIndex=this.getBaseZIndex(),t.isTop=!0,t.isBodyOverflowing=!1)},checkScrollbar:function(){var t=$v(document.body),r=t.left,s=t.right;this.isBodyOverflowing=r+s<window.innerWidth},setScrollbar:function(){var t=document.body;if(t._paddingChangedForModal=t._paddingChangedForModal||[],t._marginChangedForModal=t._marginChangedForModal||[],this.isBodyOverflowing){var r=this.scrollbarWidth;hs(bQ).forEach(function(d){var f=Il(d,"paddingRight")||"";Lt(d,"data-padding-right",f),gr(d,"paddingRight","".concat(mn(fa(d).paddingRight,0)+r,"px")),t._paddingChangedForModal.push(d)}),hs(vQ).forEach(function(d){var f=Il(d,"marginRight")||"";Lt(d,"data-margin-right",f),gr(d,"marginRight","".concat(mn(fa(d).marginRight,0)-r,"px")),t._marginChangedForModal.push(d)}),hs(kQ).forEach(function(d){var f=Il(d,"marginRight")||"";Lt(d,"data-margin-right",f),gr(d,"marginRight","".concat(mn(fa(d).marginRight,0)+r,"px")),t._marginChangedForModal.push(d)});var s=Il(t,"paddingRight")||"";Lt(t,"data-padding-right",s),gr(t,"paddingRight","".concat(mn(fa(t).paddingRight,0)+r,"px"))}},resetScrollbar:function(){var t=document.body;t._paddingChangedForModal&&t._paddingChangedForModal.forEach(function(r){Zr(r,"data-padding-right")&&(gr(r,"paddingRight",vr(r,"data-padding-right")||""),Qr(r,"data-padding-right"))}),t._marginChangedForModal&&t._marginChangedForModal.forEach(function(r){Zr(r,"data-margin-right")&&(gr(r,"marginRight",vr(r,"data-margin-right")||""),Qr(r,"data-margin-right"))}),t._paddingChangedForModal=null,t._marginChangedForModal=null,Zr(t,"data-padding-right")&&(gr(t,"paddingRight",vr(t,"data-padding-right")||""),Qr(t,"data-padding-right"))}}}),Cl=new wQ;function OO(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function es(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?OO(Object(r),!0).forEach(function(s){Pi(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):OO(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function Pi(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var sg=no("visible",{type:Y,defaultValue:!1,event:Xr}),_Q=sg.mixin,CQ=sg.props,Qb=sg.prop,yQ=sg.event,AQ="backdrop",EQ="esc",TQ="FORCE",xQ="toggle",hf="cancel",ff="headerclose",pf="ok",SQ=[hf,ff,pf],OQ={subtree:!0,childList:!0,characterData:!0,attributes:!0,attributeFilter:["style","class"]},zN=Ne(lt(es(es(es({},Un),CQ),{},{ariaLabel:T(V),autoFocusButton:T(V,null,function(n){return un(n)||kt(SQ,n)}),bodyBgVariant:T(V),bodyClass:T(tt),bodyTextVariant:T(V),busy:T(Y,!1),buttonSize:T(V),cancelDisabled:T(Y,!1),cancelTitle:T(V,"Cancel"),cancelTitleHtml:T(V),cancelVariant:T(V,"secondary"),centered:T(Y,!1),contentClass:T(tt),dialogClass:T(tt),footerBgVariant:T(V),footerBorderVariant:T(V),footerClass:T(tt),footerTag:T(V,"footer"),footerTextVariant:T(V),headerBgVariant:T(V),headerBorderVariant:T(V),headerClass:T(tt),headerCloseContent:T(V,"&times;"),headerCloseLabel:T(V,"Close"),headerCloseVariant:T(V),headerTag:T(V,"header"),headerTextVariant:T(V),hideBackdrop:T(Y,!1),hideFooter:T(Y,!1),hideHeader:T(Y,!1),hideHeaderClose:T(Y,!1),ignoreEnforceFocusSelector:T(Co),lazy:T(Y,!1),modalClass:T(tt),noCloseOnBackdrop:T(Y,!1),noCloseOnEsc:T(Y,!1),noEnforceFocus:T(Y,!1),noFade:T(Y,!1),noStacking:T(Y,!1),okDisabled:T(Y,!1),okOnly:T(Y,!1),okTitle:T(V,"OK"),okTitleHtml:T(V),okVariant:T(V,"primary"),returnFocus:T([us,Kn,V]),scrollable:T(Y,!1),size:T(V,"md"),static:T(Y,!1),title:T(V),titleClass:T(tt),titleHtml:T(V),titleSrOnly:T(Y,!1),titleTag:T(V,"h5")})),pi),io=ce({name:pi,mixins:[Ei,Qn,_Q,eQ,To,tQ,Nt,r_],inheritAttrs:!1,props:zN,data:function(){return{isHidden:!0,isVisible:!1,isTransitioning:!1,isShow:!1,isBlock:!1,isOpening:!1,isClosing:!1,ignoreBackdropClick:!1,isModalOverflowing:!1,scrollbarWidth:0,zIndex:Cl.getBaseZIndex(),isTop:!0,isBodyOverflowing:!1}},computed:{modalId:function(){return this.safeId()},modalOuterId:function(){return this.safeId("__BV_modal_outer_")},modalHeaderId:function(){return this.safeId("__BV_modal_header_")},modalBodyId:function(){return this.safeId("__BV_modal_body_")},modalTitleId:function(){return this.safeId("__BV_modal_title_")},modalContentId:function(){return this.safeId("__BV_modal_content_")},modalFooterId:function(){return this.safeId("__BV_modal_footer_")},modalBackdropId:function(){return this.safeId("__BV_modal_backdrop_")},modalClasses:function(){return[{fade:!this.noFade,show:this.isShow},this.modalClass]},modalStyles:function(){var t="".concat(this.scrollbarWidth,"px");return{paddingLeft:!this.isBodyOverflowing&&this.isModalOverflowing?t:"",paddingRight:this.isBodyOverflowing&&!this.isModalOverflowing?t:"",display:this.isBlock?"block":"none"}},dialogClasses:function(){var t;return[(t={},Pi(t,"modal-".concat(this.size),this.size),Pi(t,"modal-dialog-centered",this.centered),Pi(t,"modal-dialog-scrollable",this.scrollable),t),this.dialogClass]},headerClasses:function(){var t;return[(t={},Pi(t,"bg-".concat(this.headerBgVariant),this.headerBgVariant),Pi(t,"text-".concat(this.headerTextVariant),this.headerTextVariant),Pi(t,"border-".concat(this.headerBorderVariant),this.headerBorderVariant),t),this.headerClass]},titleClasses:function(){return[{"sr-only":this.titleSrOnly},this.titleClass]},bodyClasses:function(){var t;return[(t={},Pi(t,"bg-".concat(this.bodyBgVariant),this.bodyBgVariant),Pi(t,"text-".concat(this.bodyTextVariant),this.bodyTextVariant),t),this.bodyClass]},footerClasses:function(){var t;return[(t={},Pi(t,"bg-".concat(this.footerBgVariant),this.footerBgVariant),Pi(t,"text-".concat(this.footerTextVariant),this.footerTextVariant),Pi(t,"border-".concat(this.footerBorderVariant),this.footerBorderVariant),t),this.footerClass]},modalOuterStyle:function(){return{position:"absolute",zIndex:this.zIndex}},slotScope:function(){return{cancel:this.onCancel,close:this.onClose,hide:this.hide,ok:this.onOk,visible:this.isVisible}},computeIgnoreEnforceFocusSelector:function(){return dn(this.ignoreEnforceFocusSelector).filter(wt).join(",").trim()},computedAttrs:function(){var t=this.static?{}:this.scopedStyleAttrs;return es(es(es({},t),this.bvAttrs),{},{id:this.modalOuterId})},computedModalAttrs:function(){var t=this.isVisible,r=this.ariaLabel;return{id:this.modalId,role:"dialog","aria-hidden":t?null:"true","aria-modal":t?"true":null,"aria-label":r,"aria-labelledby":this.hideHeader||r||!(this.hasNormalizedSlot(jb)||this.titleHtml||this.title)?null:this.modalTitleId,"aria-describedby":this.modalBodyId}}},watch:Pi({},Qb,function(n,t){n!==t&&this[n?"show":"hide"]()}),created:function(){this.$_observer=null,this.$_returnFocus=this.returnFocus||null},mounted:function(){this.zIndex=Cl.getBaseZIndex(),this.listenOnRoot($n(pi,wi),this.showHandler),this.listenOnRoot($n(pi,tr),this.hideHandler),this.listenOnRoot($n(pi,h2),this.toggleHandler),this.listenOnRoot(Hn(pi,wi),this.modalListener),this[Qb]===!0&&this.$nextTick(this.show)},beforeDestroy:function(){Cl.unregisterModal(this),this.setObserver(!1),this.isVisible&&(this.isVisible=!1,this.isShow=!1,this.isTransitioning=!1)},methods:{setObserver:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;this.$_observer&&this.$_observer.disconnect(),this.$_observer=null,t&&(this.$_observer=Kw(this.$refs.content,this.checkModalOverflow.bind(this),OQ))},updateModel:function(t){t!==this[Qb]&&this.$emit(yQ,t)},buildEvent:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return new mQ(t,es(es({cancelable:!1,target:this.$refs.modal||this.$el||null,relatedTarget:null,trigger:null},r),{},{vueTarget:this,componentId:this.modalId}))},show:function(){if(!(this.isVisible||this.isOpening)){if(this.isClosing){this.$once(Rn,this.show);return}this.isOpening=!0,this.$_returnFocus=this.$_returnFocus||this.getActiveElement();var t=this.buildEvent(wi,{cancelable:!0});if(this.emitEvent(t),t.defaultPrevented||this.isVisible){this.isOpening=!1,this.updateModel(!1);return}this.doShow()}},hide:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(!(!this.isVisible||this.isClosing)){this.isClosing=!0;var r=this.buildEvent(tr,{cancelable:t!==TQ,trigger:t||null});if(t===pf?this.$emit(vG,r):t===hf?this.$emit(gG,r):t===ff&&this.$emit(Rv,r),this.emitEvent(r),r.defaultPrevented||!this.isVisible){this.isClosing=!1,this.updateModel(!0);return}this.setObserver(!1),this.isVisible=!1,this.updateModel(!1)}},toggle:function(t){t&&(this.$_returnFocus=t),this.isVisible?this.hide(xQ):this.show()},getActiveElement:function(){var t=Jd(wn?[document.body]:[]);return t&&t.focus?t:null},doShow:function(){var t=this;if(Cl.modalsAreOpen&&this.noStacking){this.listenOnRootOnce(Hn(pi,Rn),this.doShow);return}Cl.registerModal(this),this.isHidden=!1,this.$nextTick(function(){t.isVisible=!0,t.isOpening=!1,t.updateModel(!0),t.$nextTick(function(){t.setObserver(!0)})})},onBeforeEnter:function(){this.isTransitioning=!0,this.setResizeEvent(!0)},onEnter:function(){var t=this;this.isBlock=!0,kn(function(){kn(function(){t.isShow=!0})})},onAfterEnter:function(){var t=this;this.checkModalOverflow(),this.isTransitioning=!1,kn(function(){t.emitEvent(t.buildEvent(_r)),t.setEnforceFocus(!0),t.$nextTick(function(){t.focusFirst()})})},onBeforeLeave:function(){this.isTransitioning=!0,this.setResizeEvent(!1),this.setEnforceFocus(!1)},onLeave:function(){this.isShow=!1},onAfterLeave:function(){var t=this;this.isBlock=!1,this.isTransitioning=!1,this.isModalOverflowing=!1,this.isHidden=!0,this.$nextTick(function(){t.isClosing=!1,Cl.unregisterModal(t),t.returnFocusTo(),t.emitEvent(t.buildEvent(Rn))})},emitEvent:function(t){var r=t.type;this.emitOnRoot(Hn(pi,r),t,t.componentId),this.$emit(r,t)},onDialogMousedown:function(){var t=this,r=this.$refs.modal,s=function d(f){Tn(r,"mouseup",d,Ut),f.target===r&&(t.ignoreBackdropClick=!0)};bn(r,"mouseup",s,Ut)},onClickOut:function(t){if(this.ignoreBackdropClick){this.ignoreBackdropClick=!1;return}!this.isVisible||this.noCloseOnBackdrop||!En(document.body,t.target)||En(this.$refs.content,t.target)||this.hide(AQ)},onOk:function(){this.hide(pf)},onCancel:function(){this.hide(hf)},onClose:function(){this.hide(ff)},onEsc:function(t){t.keyCode===Fw&&this.isVisible&&!this.noCloseOnEsc&&this.hide(EQ)},focusHandler:function(t){var r=this.$refs.content,s=t.target;if(!(this.noEnforceFocus||!this.isTop||!this.isVisible||!r||document===s||En(r,s)||this.computeIgnoreEnforceFocusSelector&&_s(this.computeIgnoreEnforceFocusSelector,s,!0))){var d=Hv(this.$refs.content),f=this.$refs["bottom-trap"],p=this.$refs["top-trap"];if(f&&s===f){if(cn(d[0]))return}else if(p&&s===p&&cn(d[d.length-1]))return;cn(r,{preventScroll:!0})}},setEnforceFocus:function(t){this.listenDocument(t,"focusin",this.focusHandler)},setResizeEvent:function(t){this.listenWindow(t,"resize",this.checkModalOverflow),this.listenWindow(t,"orientationchange",this.checkModalOverflow)},showHandler:function(t,r){t===this.modalId&&(this.$_returnFocus=r||this.getActiveElement(),this.show())},hideHandler:function(t){t===this.modalId&&this.hide("event")},toggleHandler:function(t,r){t===this.modalId&&this.toggle(r)},modalListener:function(t){this.noStacking&&t.vueTarget!==this&&this.hide()},focusFirst:function(){var t=this;wn&&kn(function(){var r=t.$refs.modal,s=t.$refs.content,d=t.getActiveElement();if(r&&s&&!(d&&En(s,d))){var f=t.$refs["ok-button"],p=t.$refs["cancel-button"],v=t.$refs["close-button"],m=t.autoFocusButton,w=m===pf&&f?f.$el||f:m===hf&&p?p.$el||p:m===ff&&v?v.$el||v:s;cn(w),w===s&&t.$nextTick(function(){r.scrollTop=0})}})},returnFocusTo:function(){var t=this.returnFocus||this.$_returnFocus||null;this.$_returnFocus=null,this.$nextTick(function(){t=zt(t)?Is(t):t,t&&(t=t.$el||t,cn(t))})},checkModalOverflow:function(){if(this.isVisible){var t=this.$refs.modal;this.isModalOverflowing=t.scrollHeight>document.documentElement.clientHeight}},makeModal:function(t){var r=t();if(!this.hideHeader){var s=this.normalizeSlot(UG,this.slotScope);if(!s){var d=t();this.hideHeaderClose||(d=t(Bw,{props:{content:this.headerCloseContent,disabled:this.isTransitioning,ariaLabel:this.headerCloseLabel,textVariant:this.headerCloseVariant||this.headerTextVariant},on:{click:this.onClose},ref:"close-button"},[this.normalizeSlot(GG)])),s=[t(this.titleTag,{staticClass:"modal-title",class:this.titleClasses,attrs:{id:this.modalTitleId},domProps:this.hasNormalizedSlot(jb)?{}:qn(this.titleHtml,this.title)},this.normalizeSlot(jb,this.slotScope)),d]}r=t(this.headerTag,{staticClass:"modal-header",class:this.headerClasses,attrs:{id:this.modalHeaderId},ref:"header"},[s])}var f=t("div",{staticClass:"modal-body",class:this.bodyClasses,attrs:{id:this.modalBodyId},ref:"body"},this.normalizeSlot(eo,this.slotScope)),p=t();if(!this.hideFooter){var v=this.normalizeSlot(HG,this.slotScope);if(!v){var m=t();this.okOnly||(m=t(to,{props:{variant:this.cancelVariant,size:this.buttonSize,disabled:this.cancelDisabled||this.busy||this.isTransitioning},domProps:this.hasNormalizedSlot(rS)?{}:qn(this.cancelTitleHtml,this.cancelTitle),on:{click:this.onCancel},ref:"cancel-button"},this.normalizeSlot(rS)));var w=t(to,{props:{variant:this.okVariant,size:this.buttonSize,disabled:this.okDisabled||this.busy||this.isTransitioning},domProps:this.hasNormalizedSlot(oS)?{}:qn(this.okTitleHtml,this.okTitle),on:{click:this.onOk},ref:"ok-button"},this.normalizeSlot(oS));v=[m,w]}p=t(this.footerTag,{staticClass:"modal-footer",class:this.footerClasses,attrs:{id:this.modalFooterId},ref:"footer"},[v])}var C=t("div",{staticClass:"modal-content",class:this.contentClass,attrs:{id:this.modalContentId,tabindex:"-1"},ref:"content"},[r,f,p]),y=t(),E=t();this.isVisible&&!this.noEnforceFocus&&(y=t("span",{attrs:{tabindex:"0"},ref:"top-trap"}),E=t("span",{attrs:{tabindex:"0"},ref:"bottom-trap"}));var S=t("div",{staticClass:"modal-dialog",class:this.dialogClasses,on:{mousedown:this.onDialogMousedown},ref:"dialog"},[y,C,E]),I=t("div",{staticClass:"modal",class:this.modalClasses,style:this.modalStyles,attrs:this.computedModalAttrs,on:{keydown:this.onEsc,click:this.onClickOut},directives:[{name:"show",value:this.isVisible}],ref:"modal"},[S]);I=t("transition",{props:{enterClass:"",enterToClass:"",enterActiveClass:"",leaveClass:"",leaveActiveClass:"",leaveToClass:""},on:{beforeEnter:this.onBeforeEnter,enter:this.onEnter,afterEnter:this.onAfterEnter,beforeLeave:this.onBeforeLeave,leave:this.onLeave,afterLeave:this.onAfterLeave}},[I]);var M=t();return!this.hideBackdrop&&this.isVisible&&(M=t("div",{staticClass:"modal-backdrop",attrs:{id:this.modalBackdropId}},this.normalizeSlot($G))),M=t(_u,{props:{noFade:this.noFade}},[M]),t("div",{style:this.modalOuterStyle,attrs:this.computedAttrs,key:"modal-outer-".concat(this[ds])},[I,M])}},render:function(t){return this.static?this.lazy&&this.isHidden?t():this.makeModal(t):this.isHidden?t():t(aQ,[this.makeModal(t)])}}),DQ=$n(pi,wi),Xf="__bv_modal_directive__",FN=function(t){var r=t.modifiers,s=r===void 0?{}:r,d=t.arg,f=t.value;return zt(f)?f:zt(d)?d:ft(s).reverse()[0]},VN=function(t){return t&&Wp(t,".dropdown-menu > li, li.nav-item")&&Is("a, button",t)||t},$N=function(t){t&&t.tagName!=="BUTTON"&&(Zr(t,"role")||Lt(t,"role","button"),t.tagName!=="A"&&!Zr(t,"tabindex")&&Lt(t,"tabindex","0"))},IQ=function(t,r,s){var d=FN(r),f=VN(t);if(d&&f){var p=function(m){var w=m.currentTarget;if(!Nw(w)){var C=m.type,y=m.keyCode;(C==="click"||C==="keydown"&&(y===Pa||y===Ps))&&Ma(Ul(s,r)).$emit(DQ,d,w)}};t[Xf]={handler:p,target:d,trigger:f},$N(f),bn(f,"click",p,Zi),f.tagName!=="BUTTON"&&vr(f,"role")==="button"&&bn(f,"keydown",p,Zi)}},HN=function(t){var r=t[Xf]||{},s=r.trigger,d=r.handler;s&&d&&(Tn(s,"click",d,Zi),Tn(s,"keydown",d,Zi),Tn(t,"click",d,Zi),Tn(t,"keydown",d,Zi)),delete t[Xf]},DO=function(t,r,s){var d=t[Xf]||{},f=FN(r),p=VN(t);(f!==d.target||p!==d.trigger)&&(HN(t),IQ(t,r,s)),$N(p)},PQ=function(){},MQ={inserted:DO,updated:PQ,componentUpdated:DO,unbind:HN};function NQ(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function IO(n,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(n,s.key,s)}}function RQ(n,t,r){return t&&IO(n.prototype,t),r&&IO(n,r),Object.defineProperty(n,"prototype",{writable:!1}),n}function PO(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function uo(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?PO(Object(r),!0).forEach(function(s){BQ(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):PO(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function BQ(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}function LQ(n){return VQ(n)||FQ(n)||zQ(n)||jQ()}function jQ(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zQ(n,t){if(!!n){if(typeof n=="string")return ak(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ak(n,t)}}function FQ(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function VQ(n){if(Array.isArray(n))return ak(n)}function ak(n,t){(t==null||t>n.length)&&(t=n.length);for(var r=0,s=new Array(t);r<t;r++)s[r]=n[r];return s}var ra="$bvModal",Zb="_bv__modal",$Q=["id"].concat(LQ(ft(Eo(zN,["busy","lazy","noStacking","static","visible"])))),HQ=function(){},Jb={msgBoxContent:"default",title:"modal-title",okTitle:"modal-ok",cancelTitle:"modal-cancel"},MO=function(t){return $Q.reduce(function(r,s){return Yn(t[s])||(r[s]=t[s]),r},{})},UQ=function(t){var r=t.extend({name:rG,extends:io,mixins:[za],destroyed:function(){this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el)},mounted:function(){var v=this,m=function(){v.$nextTick(function(){kn(function(){v.$destroy()})})};this.bvParent.$once(jf,m),this.$once(Rn,m),this.$router&&this.$route&&this.$once(f2,this.$watch("$router",m)),this.show()}}),s=function(v,m){var w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:HQ;if(!(Kx(ra)||qx(ra))){var C=Pu(v,r,{propsData:uo(uo(uo({},MO(E2(pi))),{},{hideHeaderClose:!0,hideHeader:!(m.title||m.titleHtml)},Eo(m,ft(Jb))),{},{lazy:!1,busy:!1,visible:!1,noStacking:!1,noEnforceFocus:!1})});return ft(Jb).forEach(function(y){Yn(m[y])||(C.$slots[Jb[y]]=dn(m[y]))}),new Promise(function(y,E){var S=!1;C.$once(jf,function(){S||E(new Error("BootstrapVue MsgBox destroyed before resolve"))}),C.$on(tr,function(M){if(!M.defaultPrevented){var q=w(M);M.defaultPrevented||(S=!0,y(q))}});var I=document.createElement("div");document.body.appendChild(I),C.$mount(I)})}},d=function(v,m){var w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},C=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;if(!(!m||qx(ra)||Kx(ra)||!He(C)))return s(v,uo(uo({},MO(w)),{},{msgBoxContent:m}),C)},f=function(){function p(v){NQ(this,p),Hp(this,{_vm:v,_root:Ma(v)}),Sw(this,{_vm:Ur(),_root:Ur()})}return RQ(p,[{key:"show",value:function(m){if(m&&this._root){for(var w,C=arguments.length,y=new Array(C>1?C-1:0),E=1;E<C;E++)y[E-1]=arguments[E];(w=this._root).$emit.apply(w,[$n(pi,"show"),m].concat(y))}}},{key:"hide",value:function(m){if(m&&this._root){for(var w,C=arguments.length,y=new Array(C>1?C-1:0),E=1;E<C;E++)y[E-1]=arguments[E];(w=this._root).$emit.apply(w,[$n(pi,"hide"),m].concat(y))}}},{key:"msgBoxOk",value:function(m){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},C=uo(uo({},w),{},{okOnly:!0,okDisabled:!1,hideFooter:!1,msgBoxContent:m});return d(this._vm,m,C,function(){return!0})}},{key:"msgBoxConfirm",value:function(m){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},C=uo(uo({},w),{},{okOnly:!1,okDisabled:!1,cancelDisabled:!1,hideFooter:!1});return d(this._vm,m,C,function(y){var E=y.trigger;return E==="ok"?!0:E==="cancel"?!1:null})}}]),p}();t.mixin({beforeCreate:function(){this[Zb]=new f(this)}}),Zd(t.prototype,ra)||dM(t.prototype,ra,{get:function(){return(!this||!this[Zb])&&Ci('"'.concat(ra,'" must be accessed from a Vue instance "this" context.'),pi),this[Zb]}})},GQ=bu({plugins:{plugin:UQ}}),WQ=bu({components:{BModal:io},directives:{VBModal:MQ},plugins:{BVModalPlugin:GQ}});function NO(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var KQ=function(t){return t=t==="left"?"start":t==="right"?"end":t,"justify-content-".concat(t)},UN=Ne({align:T(V),cardHeader:T(Y,!1),fill:T(Y,!1),justified:T(Y,!1),pills:T(Y,!1),small:T(Y,!1),tabs:T(Y,!1),tag:T(V,"ul"),vertical:T(Y,!1)},VM),qQ=ce({name:VM,functional:!0,props:UN,render:function(t,r){var s,d=r.props,f=r.data,p=r.children,v=d.tabs,m=d.pills,w=d.vertical,C=d.align,y=d.cardHeader;return t(d.tag,nn(f,{staticClass:"nav",class:(s={"nav-tabs":v,"nav-pills":m&&!v,"card-header-tabs":!w&&y&&v,"card-header-pills":!w&&y&&m&&!v,"flex-column":w,"nav-fill":!w&&d.fill,"nav-justified":!w&&d.justified},NO(s,KQ(C),!w&&C),NO(s,"small",d.small),s)}),p)}}),YQ={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left",TOPLEFT:"top",TOPRIGHT:"top",RIGHTTOP:"right",RIGHTBOTTOM:"right",BOTTOMLEFT:"bottom",BOTTOMRIGHT:"bottom",LEFTTOP:"left",LEFTBOTTOM:"left"},QQ={AUTO:0,TOPLEFT:-1,TOP:0,TOPRIGHT:1,RIGHTTOP:-1,RIGHT:0,RIGHTBOTTOM:1,BOTTOMLEFT:-1,BOTTOM:0,BOTTOMRIGHT:1,LEFTTOP:-1,LEFT:0,LEFTBOTTOM:1},ZQ={arrowPadding:T(Ze,6),boundary:T([us,V],"scrollParent"),boundaryPadding:T(Ze,5),fallbackPlacement:T(Co,"flip"),offset:T(Ze,0),placement:T(V,"top"),target:T([us,aM])},JQ=ce({name:aG,mixins:[za],props:ZQ,data:function(){return{noFade:!1,localShow:!0,attachment:this.getAttachment(this.placement)}},computed:{templateType:function(){return"unknown"},popperConfig:function(){var t=this,r=this.placement;return{placement:this.getAttachment(r),modifiers:{offset:{offset:this.getOffset(r)},flip:{behavior:this.fallbackPlacement},arrow:{element:".arrow"},preventOverflow:{padding:this.boundaryPadding,boundariesElement:this.boundary}},onCreate:function(d){d.originalPlacement!==d.placement&&t.popperPlacementChange(d)},onUpdate:function(d){t.popperPlacementChange(d)}}}},created:function(){var t=this;this.$_popper=null,this.localShow=!0,this.$on(wi,function(s){t.popperCreate(s)});var r=function(){t.$nextTick(function(){kn(function(){t.$destroy()})})};this.bvParent.$once(jf,r),this.$once(Rn,r)},beforeMount:function(){this.attachment=this.getAttachment(this.placement)},updated:function(){this.updatePopper()},beforeDestroy:function(){this.destroyPopper()},destroyed:function(){var t=this.$el;t&&t.parentNode&&t.parentNode.removeChild(t)},methods:{hide:function(){this.localShow=!1},getAttachment:function(t){return YQ[String(t).toUpperCase()]||"auto"},getOffset:function(t){if(!this.offset){var r=this.$refs.arrow||Is(".arrow",this.$el),s=mn(fa(r).width,0)+mn(this.arrowPadding,0);switch(QQ[String(t).toUpperCase()]||0){case 1:return"+50%p - ".concat(s,"px");case-1:return"-50%p + ".concat(s,"px");default:return 0}}return this.offset},popperCreate:function(t){this.destroyPopper(),this.$_popper=new nk(this.target,t,this.popperConfig)},destroyPopper:function(){this.$_popper&&this.$_popper.destroy(),this.$_popper=null},updatePopper:function(){this.$_popper&&this.$_popper.scheduleUpdate()},popperPlacementChange:function(t){this.attachment=this.getAttachment(t.placement)},renderTemplate:function(t){return t("div")}},render:function(t){var r=this,s=this.noFade;return t(_u,{props:{appear:!0,noFade:s},on:{beforeEnter:function(f){return r.$emit(wi,f)},afterEnter:function(f){return r.$emit(_r,f)},beforeLeave:function(f){return r.$emit(tr,f)},afterLeave:function(f){return r.$emit(Rn,f)}}},[this.localShow?this.renderTemplate(t):t()])}});function RO(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function BO(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?RO(Object(r),!0).forEach(function(s){lk(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):RO(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function lk(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var XQ={html:T(Y,!1),id:T(V)},GN=ce({name:dG,extends:JQ,mixins:[r_],props:XQ,data:function(){return{title:"",content:"",variant:null,customClass:null,interactive:!0}},computed:{templateType:function(){return"tooltip"},templateClasses:function(){var t,r=this.variant,s=this.attachment,d=this.templateType;return[(t={noninteractive:!this.interactive},lk(t,"b-".concat(d,"-").concat(r),r),lk(t,"bs-".concat(d,"-").concat(s),s),t),this.customClass]},templateAttributes:function(){var t=this.id;return BO(BO({},this.bvParent.bvParent.$attrs),{},{id:t,role:"tooltip",tabindex:"-1"},this.scopedStyleAttrs)},templateListeners:function(){var t=this;return{mouseenter:function(s){t.$emit(l2,s)},mouseleave:function(s){t.$emit(c2,s)},focusin:function(s){t.$emit(r2,s)},focusout:function(s){t.$emit(o2,s)}}}},methods:{renderTemplate:function(t){var r=this.title,s=He(r)?r({}):r,d=this.html&&!He(r)?{innerHTML:r}:{};return t("div",{staticClass:"tooltip b-tooltip",class:this.templateClasses,attrs:this.templateAttributes,on:this.templateListeners},[t("div",{staticClass:"arrow",ref:"arrow"}),t("div",{staticClass:"tooltip-inner",domProps:d},[s])])}}});function LO(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function Xb(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?LO(Object(r),!0).forEach(function(s){eZ(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):LO(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function eZ(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var WN=".modal-content",tZ=Hn(pi,Rn),nZ=".b-sidebar",iZ=[WN,nZ].join(", "),rZ="dropdown",oZ=".dropdown-menu.show",Kh="data-original-title",jO={title:"",content:"",variant:null,customClass:null,triggers:"",placement:"auto",fallbackPlacement:"flip",target:null,container:null,noFade:!1,boundary:"scrollParent",boundaryPadding:5,offset:0,delay:0,arrowPadding:6,interactive:!0,disabled:!1,id:null,html:!1},KN=ce({name:cG,mixins:[To,za],data:function(){return Xb(Xb({},jO),{},{activeTrigger:{hover:!1,click:!1,focus:!1},localShow:!1})},computed:{templateType:function(){return"tooltip"},computedId:function(){return this.id||"__bv_".concat(this.templateType,"_").concat(this[ds],"__")},computedDelay:function(){var t={show:0,hide:0};return Er(this.delay)?(t.show=Wt(jt(this.delay.show,0),0),t.hide=Wt(jt(this.delay.hide,0),0)):(wa(this.delay)||zt(this.delay))&&(t.show=t.hide=Wt(jt(this.delay,0),0)),t},computedTriggers:function(){return dn(this.triggers).filter(wt).join(" ").trim().toLowerCase().split(/\s+/).sort()},isWithActiveTrigger:function(){for(var t in this.activeTrigger)if(this.activeTrigger[t])return!0;return!1},computedTemplateData:function(){var t=this.title,r=this.content,s=this.variant,d=this.customClass,f=this.noFade,p=this.interactive;return{title:t,content:r,variant:s,customClass:d,noFade:f,interactive:p}}},watch:{computedTriggers:function(t,r){var s=this;tn(t,r)||this.$nextTick(function(){s.unListen(),r.forEach(function(d){kt(t,d)||s.activeTrigger[d]&&(s.activeTrigger[d]=!1)}),s.listen()})},computedTemplateData:function(){this.handleTemplateUpdate()},title:function(t,r){t!==r&&!t&&this.hide()},disabled:function(t){t?this.disable():this.enable()}},created:function(){var t=this;this.$_tip=null,this.$_hoverTimeout=null,this.$_hoverState="",this.$_visibleInterval=null,this.$_enabled=!this.disabled,this.$_noop=tu.bind(this),this.bvParent&&this.bvParent.$once(f2,function(){t.$nextTick(function(){kn(function(){t.$destroy()})})}),this.$nextTick(function(){var r=t.getTarget();r&&En(document.body,r)?(t.scopeId=Jf(t.bvParent),t.listen()):Ci(zt(t.target)?'Unable to find target element by ID "#'.concat(t.target,'" in document.'):"The provided target is no valid HTML element.",t.templateType)})},updated:function(){this.$nextTick(this.handleTemplateUpdate)},deactivated:function(){this.forceHide()},beforeDestroy:function(){this.unListen(),this.setWhileOpenListeners(!1),this.clearHoverTimeout(),this.clearVisibilityInterval(),this.destroyTemplate(),this.$_noop=null},methods:{getTemplate:function(){return GN},updateData:function(){var t=this,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=!1;ft(jO).forEach(function(d){!Yn(r[d])&&t[d]!==r[d]&&(t[d]=r[d],d==="title"&&(s=!0))}),s&&this.localShow&&this.fixTitle()},createTemplateAndShow:function(){var t=this.getContainer(),r=this.getTemplate(),s=this.$_tip=Pu(this,r,{propsData:{id:this.computedId,html:this.html,placement:this.placement,fallbackPlacement:this.fallbackPlacement,target:this.getPlacementTarget(),boundary:this.getBoundary(),offset:jt(this.offset,0),arrowPadding:jt(this.arrowPadding,0),boundaryPadding:jt(this.boundaryPadding,0)}});this.handleTemplateUpdate(),s.$once(wi,this.onTemplateShow),s.$once(_r,this.onTemplateShown),s.$once(tr,this.onTemplateHide),s.$once(Rn,this.onTemplateHidden),s.$once(jf,this.destroyTemplate),s.$on(r2,this.handleEvent),s.$on(o2,this.handleEvent),s.$on(l2,this.handleEvent),s.$on(c2,this.handleEvent),s.$mount(t.appendChild(document.createElement("div")))},hideTemplate:function(){this.$_tip&&this.$_tip.hide(),this.clearActiveTriggers(),this.$_hoverState=""},destroyTemplate:function(){this.setWhileOpenListeners(!1),this.clearHoverTimeout(),this.$_hoverState="",this.clearActiveTriggers(),this.localPlacementTarget=null;try{this.$_tip.$destroy()}catch{}this.$_tip=null,this.removeAriaDescribedby(),this.restoreTitle(),this.localShow=!1},getTemplateElement:function(){return this.$_tip?this.$_tip.$el:null},handleTemplateUpdate:function(){var t=this,r=this.$_tip;if(r){var s=["title","content","variant","customClass","noFade","interactive"];s.forEach(function(d){r[d]!==t[d]&&(r[d]=t[d])})}},show:function(){var t=this.getTarget();if(!(!t||!En(document.body,t)||!Oa(t)||this.dropdownOpen()||(un(this.title)||this.title==="")&&(un(this.content)||this.content===""))&&!(this.$_tip||this.localShow)){this.localShow=!0;var r=this.buildEvent(wi,{cancelable:!0});if(this.emitEvent(r),r.defaultPrevented){this.destroyTemplate();return}this.fixTitle(),this.addAriaDescribedby(),this.createTemplateAndShow()}},hide:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,r=this.getTemplateElement();if(!r||!this.localShow){this.restoreTitle();return}var s=this.buildEvent(tr,{cancelable:!t});this.emitEvent(s),!s.defaultPrevented&&this.hideTemplate()},forceHide:function(){var t=this.getTemplateElement();!t||!this.localShow||(this.setWhileOpenListeners(!1),this.clearHoverTimeout(),this.$_hoverState="",this.clearActiveTriggers(),this.$_tip&&(this.$_tip.noFade=!0),this.hide(!0))},enable:function(){this.$_enabled=!0,this.emitEvent(this.buildEvent(nf))},disable:function(){this.$_enabled=!1,this.emitEvent(this.buildEvent(tf))},onTemplateShow:function(){this.setWhileOpenListeners(!0)},onTemplateShown:function(){var t=this.$_hoverState;this.$_hoverState="",t==="out"&&this.leave(null),this.emitEvent(this.buildEvent(_r))},onTemplateHide:function(){this.setWhileOpenListeners(!1)},onTemplateHidden:function(){this.destroyTemplate(),this.emitEvent(this.buildEvent(Rn))},getTarget:function(){var t=this.target;return zt(t)?t=Vv(t.replace(/^#/,"")):He(t)?t=t():t&&(t=t.$el||t),Yt(t)?t:null},getPlacementTarget:function(){return this.getTarget()},getTargetId:function(){var t=this.getTarget();return t&&t.id?t.id:null},getContainer:function(){var t=this.container?this.container.$el||this.container:!1,r=document.body,s=this.getTarget();return t===!1?_s(iZ,s)||r:zt(t)&&Vv(t.replace(/^#/,""))||r},getBoundary:function(){return this.boundary?this.boundary.$el||this.boundary:"scrollParent"},isInModal:function(){var t=this.getTarget();return t&&_s(WN,t)},isDropdown:function(){var t=this.getTarget();return t&&y2(t,rZ)},dropdownOpen:function(){var t=this.getTarget();return this.isDropdown()&&t&&Is(oZ,t)},clearHoverTimeout:function(){clearTimeout(this.$_hoverTimeout),this.$_hoverTimeout=null},clearVisibilityInterval:function(){clearInterval(this.$_visibleInterval),this.$_visibleInterval=null},clearActiveTriggers:function(){for(var t in this.activeTrigger)this.activeTrigger[t]=!1},addAriaDescribedby:function(){var t=this.getTarget(),r=vr(t,"aria-describedby")||"";r=r.split(/\s+/).concat(this.computedId).join(" ").trim(),Lt(t,"aria-describedby",r)},removeAriaDescribedby:function(){var t=this,r=this.getTarget(),s=vr(r,"aria-describedby")||"";s=s.split(/\s+/).filter(function(d){return d!==t.computedId}).join(" ").trim(),s?Lt(r,"aria-describedby",s):Qr(r,"aria-describedby")},fixTitle:function(){var t=this.getTarget();if(Zr(t,"title")){var r=vr(t,"title");Lt(t,"title",""),r&&Lt(t,Kh,r)}},restoreTitle:function(){var t=this.getTarget();if(Zr(t,Kh)){var r=vr(t,Kh);Qr(t,Kh),r&&Lt(t,"title",r)}},buildEvent:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return new Ou(t,Xb({cancelable:!1,target:this.getTarget(),relatedTarget:this.getTemplateElement()||null,componentId:this.computedId,vueTarget:this},r))},emitEvent:function(t){var r=t.type;this.emitOnRoot(Hn(this.templateType,r),t),this.$emit(r,t)},listen:function(){var t=this,r=this.getTarget();!r||(this.setRootListener(!0),this.computedTriggers.forEach(function(s){s==="click"?bn(r,"click",t.handleEvent,Ut):s==="focus"?(bn(r,"focusin",t.handleEvent,Ut),bn(r,"focusout",t.handleEvent,Ut)):s==="blur"?bn(r,"focusout",t.handleEvent,Ut):s==="hover"&&(bn(r,"mouseenter",t.handleEvent,Ut),bn(r,"mouseleave",t.handleEvent,Ut))},this))},unListen:function(){var t=this,r=["click","focusin","focusout","mouseenter","mouseleave"],s=this.getTarget();this.setRootListener(!1),r.forEach(function(d){s&&Tn(s,d,t.handleEvent,Ut)},this)},setRootListener:function(t){var r=t?"listenOnRoot":"listenOffRoot",s=this.templateType;this[r]($n(s,tr),this.doHide),this[r]($n(s,wi),this.doShow),this[r]($n(s,Bv),this.doDisable),this[r]($n(s,Lv),this.doEnable)},setWhileOpenListeners:function(t){this.setModalListener(t),this.setDropdownListener(t),this.visibleCheck(t),this.setOnTouchStartListener(t)},visibleCheck:function(t){var r=this;this.clearVisibilityInterval();var s=this.getTarget();t&&(this.$_visibleInterval=setInterval(function(){var d=r.getTemplateElement();d&&r.localShow&&(!s.parentNode||!Oa(s))&&r.forceHide()},100))},setModalListener:function(t){this.isInModal()&&this[t?"listenOnRoot":"listenOffRoot"](tZ,this.forceHide)},setOnTouchStartListener:function(t){var r=this;"ontouchstart"in document.documentElement&&Sa(document.body.children).forEach(function(s){eu(t,s,"mouseover",r.$_noop)})},setDropdownListener:function(t){var r=this.getTarget();if(!(!r||!this.bvEventRoot||!this.isDropdown)){var s=zq(r);s&&s[t?"$on":"$off"](_r,this.forceHide)}},handleEvent:function(t){var r=this.getTarget();if(!(!r||Nw(r)||!this.$_enabled||this.dropdownOpen())){var s=t.type,d=this.computedTriggers;if(s==="click"&&kt(d,"click"))this.click(t);else if(s==="mouseenter"&&kt(d,"hover"))this.enter(t);else if(s==="focusin"&&kt(d,"focus"))this.enter(t);else if(s==="focusout"&&(kt(d,"focus")||kt(d,"blur"))||s==="mouseleave"&&kt(d,"hover")){var f=this.getTemplateElement(),p=t.target,v=t.relatedTarget;if(f&&En(f,p)&&En(r,v)||f&&En(r,p)&&En(f,v)||f&&En(f,p)&&En(f,v)||En(r,p)&&En(r,v))return;this.leave(t)}}},doHide:function(t){(!t||this.getTargetId()===t||this.computedId===t)&&this.forceHide()},doShow:function(t){(!t||this.getTargetId()===t||this.computedId===t)&&this.show()},doDisable:function(t){(!t||this.getTargetId()===t||this.computedId===t)&&this.disable()},doEnable:function(t){(!t||this.getTargetId()===t||this.computedId===t)&&this.enable()},click:function(t){!this.$_enabled||this.dropdownOpen()||(cn(t.currentTarget),this.activeTrigger.click=!this.activeTrigger.click,this.isWithActiveTrigger?this.enter(null):this.leave(null))},toggle:function(){!this.$_enabled||this.dropdownOpen()||(this.localShow?this.leave(null):this.enter(null))},enter:function(){var t=this,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;if(r&&(this.activeTrigger[r.type==="focusin"?"focus":"hover"]=!0),this.localShow||this.$_hoverState==="in"){this.$_hoverState="in";return}this.clearHoverTimeout(),this.$_hoverState="in",this.computedDelay.show?(this.fixTitle(),this.$_hoverTimeout=setTimeout(function(){t.$_hoverState==="in"?t.show():t.localShow||t.restoreTitle()},this.computedDelay.show)):this.show()},leave:function(){var t=this,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;r&&(this.activeTrigger[r.type==="focusout"?"focus":"hover"]=!1,r.type==="focusout"&&kt(this.computedTriggers,"blur")&&(this.activeTrigger.click=!1,this.activeTrigger.hover=!1)),!this.isWithActiveTrigger&&(this.clearHoverTimeout(),this.$_hoverState="out",this.computedDelay.hide?this.$_hoverTimeout=setTimeout(function(){t.$_hoverState==="out"&&t.hide()},this.computedDelay.hide):this.hide())}}}),ci,oa;function zO(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function sZ(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?zO(Object(r),!0).forEach(function(s){Nn(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):zO(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function Nn(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var Bd="disabled",FO=Ia+Bd,ep="show",aZ=Ia+ep,qN=Ne((ci={boundary:T([us,Kn,V],"scrollParent"),boundaryPadding:T(Ze,50),container:T([us,Kn,V]),customClass:T(V),delay:T(MG,50)},Nn(ci,Bd,T(Y,!1)),Nn(ci,"fallbackPlacement",T(Co,"flip")),Nn(ci,"id",T(V)),Nn(ci,"noFade",T(Y,!1)),Nn(ci,"noninteractive",T(Y,!1)),Nn(ci,"offset",T(Ze,0)),Nn(ci,"placement",T(V,"top")),Nn(ci,ep,T(Y,!1)),Nn(ci,"target",T([us,aM,Ds,Kn,V],void 0,!0)),Nn(ci,"title",T(V)),Nn(ci,"triggers",T(Co,"hover focus")),Nn(ci,"variant",T(V)),ci),JM),o_=ce({name:JM,mixins:[Nt,za],inheritAttrs:!1,props:qN,data:function(){return{localShow:this[ep],localTitle:"",localContent:""}},computed:{templateData:function(){return sZ({title:this.localTitle,content:this.localContent,interactive:!this.noninteractive},Up(this.$props,["boundary","boundaryPadding","container","customClass","delay","fallbackPlacement","id","noFade","offset","placement","target","target","triggers","variant",Bd]))},templateTitleContent:function(){var t=this.title,r=this.content;return{title:t,content:r}}},watch:(oa={},Nn(oa,ep,function(n,t){n!==t&&n!==this.localShow&&this.$_toolpop&&(n?this.$_toolpop.show():this.$_toolpop.forceHide())}),Nn(oa,Bd,function(n){n?this.doDisable():this.doEnable()}),Nn(oa,"localShow",function(t){this.$emit(aZ,t)}),Nn(oa,"templateData",function(){var t=this;this.$nextTick(function(){t.$_toolpop&&t.$_toolpop.updateData(t.templateData)})}),Nn(oa,"templateTitleContent",function(){this.$nextTick(this.updateContent)}),oa),created:function(){this.$_toolpop=null},updated:function(){this.$nextTick(this.updateContent)},beforeDestroy:function(){this.$off(Jx,this.doOpen),this.$off(Rv,this.doClose),this.$off(Bv,this.doDisable),this.$off(Lv,this.doEnable),this.$_toolpop&&(this.$_toolpop.$destroy(),this.$_toolpop=null)},mounted:function(){var t=this;this.$nextTick(function(){var r=t.getComponent();t.updateContent();var s=Jf(t)||Jf(t.bvParent),d=t.$_toolpop=Pu(t,r,{_scopeId:s||void 0});d.updateData(t.templateData),d.$on(wi,t.onShow),d.$on(_r,t.onShown),d.$on(tr,t.onHide),d.$on(Rn,t.onHidden),d.$on(tf,t.onDisabled),d.$on(nf,t.onEnabled),t[Bd]&&t.doDisable(),t.$on(Jx,t.doOpen),t.$on(Rv,t.doClose),t.$on(Bv,t.doDisable),t.$on(Lv,t.doEnable),t.localShow&&d.show()})},methods:{getComponent:function(){return KN},updateContent:function(){this.setTitle(this.normalizeSlot()||this.title)},setTitle:function(t){t=un(t)?"":t,this.localTitle!==t&&(this.localTitle=t)},setContent:function(t){t=un(t)?"":t,this.localContent!==t&&(this.localContent=t)},onShow:function(t){this.$emit(wi,t),t&&(this.localShow=!t.defaultPrevented)},onShown:function(t){this.localShow=!0,this.$emit(_r,t)},onHide:function(t){this.$emit(tr,t)},onHidden:function(t){this.$emit(Rn,t),this.localShow=!1},onDisabled:function(t){t&&t.type===tf&&(this.$emit(FO,!0),this.$emit(tf,t))},onEnabled:function(t){t&&t.type===nf&&(this.$emit(FO,!1),this.$emit(nf,t))},doOpen:function(){!this.localShow&&this.$_toolpop&&this.$_toolpop.show()},doClose:function(){this.localShow&&this.$_toolpop&&this.$_toolpop.hide()},doDisable:function(){this.$_toolpop&&this.$_toolpop.disable()},doEnable:function(){this.$_toolpop&&this.$_toolpop.enable()}},render:function(t){return t()}}),lZ=ce({name:sG,extends:GN,computed:{templateType:function(){return"popover"}},methods:{renderTemplate:function(t){var r=this.title,s=this.content,d=He(r)?r({}):r,f=He(s)?s({}):s,p=this.html&&!He(r)?{innerHTML:r}:{},v=this.html&&!He(s)?{innerHTML:s}:{};return t("div",{staticClass:"popover b-popover",class:this.templateClasses,attrs:this.templateAttributes,on:this.templateListeners},[t("div",{staticClass:"arrow",ref:"arrow"}),un(d)||d===""?t():t("h3",{staticClass:"popover-header",domProps:p},[d]),un(f)||f===""?t():t("div",{staticClass:"popover-body",domProps:v},[f])])}}}),cZ=ce({name:oG,extends:KN,computed:{templateType:function(){return"popover"}},methods:{getTemplate:function(){return lZ}}});function VO(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function $O(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?VO(Object(r),!0).forEach(function(s){dZ(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):VO(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function dZ(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var uZ=Ne(lt($O($O({},qN),{},{content:T(V),placement:T(V,"right"),triggers:T(Co,_o)})),$M),YN=ce({name:$M,extends:o_,inheritAttrs:!1,props:uZ,methods:{getComponent:function(){return cZ},updateContent:function(){this.setContent(this.normalizeSlot()||this.content),this.setTitle(this.normalizeSlot(vu)||this.title)}}}),ud;function HO(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function Ld(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?HO(Object(r),!0).forEach(function(s){po(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):HO(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function po(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var iu="b-sidebar",hZ=$n(Os,"request-state"),fZ=$n(Os,"toggle"),pZ=Hn(Os,"state"),gZ=Hn(Os,"sync-state"),ag=no("visible",{type:Y,defaultValue:!1,event:Xr}),mZ=ag.mixin,bZ=ag.props,UO=ag.prop,vZ=ag.event,kZ=Ne(lt(Ld(Ld(Ld({},Un),bZ),{},{ariaLabel:T(V),ariaLabelledby:T(V),backdrop:T(Y,!1),backdropVariant:T(V,"dark"),bgVariant:T(V,"light"),bodyClass:T(tt),closeLabel:T(V),footerClass:T(tt),footerTag:T(V,"footer"),headerClass:T(tt),headerTag:T(V,"header"),lazy:T(Y,!1),noCloseOnBackdrop:T(Y,!1),noCloseOnEsc:T(Y,!1),noCloseOnRouteChange:T(Y,!1),noEnforceFocus:T(Y,!1),noHeader:T(Y,!1),noHeaderClose:T(Y,!1),noSlide:T(Y,!1),right:T(Y,!1),shadow:T(Tr,!1),sidebarClass:T(tt),tag:T(V,"div"),textVariant:T(V,"dark"),title:T(V),width:T(V),zIndex:T(Ze)})),UM),wZ=function(t,r){var s=r.normalizeSlot(vu,r.slotScope)||r.title;return s?t("strong",{attrs:{id:r.safeId("__title__")}},[s]):t("span")},_Z=function(t,r){if(r.noHeaderClose)return t();var s=r.closeLabel,d=r.textVariant,f=r.hide;return t(Bw,{props:{ariaLabel:s,textVariant:d},on:{click:f},ref:"close-button"},[r.normalizeSlot(jG)||t(PW)])},CZ=function(t,r){if(r.noHeader)return t();var s=r.normalizeSlot(zf,r.slotScope);if(!s){var d=wZ(t,r),f=_Z(t,r);s=r.right?[f,d]:[d,f]}return t(r.headerTag,{staticClass:"".concat(iu,"-header"),class:r.headerClass,key:"header"},s)},yZ=function(t,r){return t("div",{staticClass:"".concat(iu,"-body"),class:r.bodyClass,key:"body"},[r.normalizeSlot(eo,r.slotScope)])},AZ=function(t,r){var s=r.normalizeSlot(Fv,r.slotScope);return s?t(r.footerTag,{staticClass:"".concat(iu,"-footer"),class:r.footerClass,key:"footer"},[s]):t()},EZ=function(t,r){var s=CZ(t,r);return r.lazy&&!r.isOpen?s:[s,yZ(t,r),AZ(t,r)]},TZ=function(t,r){if(!r.backdrop)return t();var s=r.backdropVariant;return t("div",{directives:[{name:"show",value:r.localShow}],staticClass:"b-sidebar-backdrop",class:po({},"bg-".concat(s),s),on:{click:r.onBackdropClick}})},QN=ce({name:UM,mixins:[Ei,Qn,mZ,To,Nt],inheritAttrs:!1,props:kZ,data:function(){var t=!!this[UO];return{localShow:t,isOpen:t}},computed:{transitionProps:function(){return this.noSlide?{css:!0}:{css:!0,enterClass:"",enterActiveClass:"slide",enterToClass:"show",leaveClass:"show",leaveActiveClass:"slide",leaveToClass:""}},slotScope:function(){var t=this.hide,r=this.right,s=this.localShow;return{hide:t,right:r,visible:s}},hasTitle:function(){var t=this.$scopedSlots,r=this.$slots;return!this.noHeader&&!this.hasNormalizedSlot(zf)&&!!(this.normalizeSlot(vu,this.slotScope,t,r)||this.title)},titleId:function(){return this.hasTitle?this.safeId("__title__"):null},computedAttrs:function(){return Ld(Ld({},this.bvAttrs),{},{id:this.safeId(),tabindex:"-1",role:"dialog","aria-modal":this.backdrop?"true":"false","aria-hidden":this.localShow?null:"true","aria-label":this.ariaLabel||null,"aria-labelledby":this.ariaLabelledby||this.titleId||null})}},watch:(ud={},po(ud,UO,function(n,t){n!==t&&(this.localShow=n)}),po(ud,"localShow",function(t,r){t!==r&&(this.emitState(t),this.$emit(vZ,t))}),po(ud,"$route",function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};!this.noCloseOnRouteChange&&t.fullPath!==r.fullPath&&this.hide()}),ud),created:function(){this.$_returnFocusEl=null},mounted:function(){var t=this;this.listenOnRoot(fZ,this.handleToggle),this.listenOnRoot(hZ,this.handleSync),this.$nextTick(function(){t.emitState(t.localShow)})},activated:function(){this.emitSync()},beforeDestroy:function(){this.localShow=!1,this.$_returnFocusEl=null},methods:{hide:function(){this.localShow=!1},emitState:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.localShow;this.emitOnRoot(pZ,this.safeId(),t)},emitSync:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.localShow;this.emitOnRoot(gZ,this.safeId(),t)},handleToggle:function(t){t&&t===this.safeId()&&(this.localShow=!this.localShow)},handleSync:function(t){var r=this;t&&t===this.safeId()&&this.$nextTick(function(){r.emitSync(r.localShow)})},onKeydown:function(t){var r=t.keyCode;!this.noCloseOnEsc&&r===Fw&&this.localShow&&this.hide()},onBackdropClick:function(){this.localShow&&!this.noCloseOnBackdrop&&this.hide()},onTopTrapFocus:function(){var t=Hv(this.$refs.content);this.enforceFocus(t.reverse()[0])},onBottomTrapFocus:function(){var t=Hv(this.$refs.content);this.enforceFocus(t[0])},onBeforeEnter:function(){this.$_returnFocusEl=Jd(wn?[document.body]:[]),this.isOpen=!0},onAfterEnter:function(t){En(t,Jd())||this.enforceFocus(t),this.$emit(_r)},onAfterLeave:function(){this.enforceFocus(this.$_returnFocusEl),this.$_returnFocusEl=null,this.isOpen=!1,this.$emit(Rn)},enforceFocus:function(t){this.noEnforceFocus||cn(t)}},render:function(t){var r,s=this.bgVariant,d=this.width,f=this.textVariant,p=this.localShow,v=this.shadow===""?!0:this.shadow,m=t(this.tag,{staticClass:iu,class:[(r={shadow:v===!0},po(r,"shadow-".concat(v),v&&v!==!0),po(r,"".concat(iu,"-right"),this.right),po(r,"bg-".concat(s),s),po(r,"text-".concat(f),f),r),this.sidebarClass],style:{width:d},attrs:this.computedAttrs,directives:[{name:"show",value:p}],ref:"content"},[EZ(t,this)]);m=t("transition",{props:this.transitionProps,on:{beforeEnter:this.onBeforeEnter,afterEnter:this.onAfterEnter,afterLeave:this.onAfterLeave}},[m]);var w=t(_u,{props:{noFade:this.noSlide}},[TZ(t,this)]),C=t(),y=t();return this.backdrop&&p&&(C=t("div",{attrs:{tabindex:"0"},on:{focus:this.onTopTrapFocus}}),y=t("div",{attrs:{tabindex:"0"},on:{focus:this.onBottomTrapFocus}})),t("div",{staticClass:"b-sidebar-outer",style:{zIndex:this.zIndex},attrs:{tabindex:"-1"},on:{keydown:this.onKeydown}},[C,m,y,w])}}),xZ=bu({components:{BSidebar:QN},plugins:{VBTogglePlugin:HK}}),SZ=ce({methods:{hasListener:function(t){if(Ai)return!0;var r=this.$listeners||{},s=this._events||{};return!Yn(r[t])||St(s[t])&&s[t].length>0}}});function GO(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function OZ(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?GO(Object(r),!0).forEach(function(s){DZ(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):GO(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function DZ(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var WO="light",KO="dark",IZ=Ne({variant:T(V)},XM),ys=ce({name:XM,mixins:[Ei,Ms,Nt],provide:function(){var t=this;return{getBvTableTr:function(){return t}}},inject:{getBvTableRowGroup:{default:function(){return function(){return{}}}}},inheritAttrs:!1,props:IZ,computed:{bvTableRowGroup:function(){return this.getBvTableRowGroup()},inTbody:function(){return this.bvTableRowGroup.isTbody},inThead:function(){return this.bvTableRowGroup.isThead},inTfoot:function(){return this.bvTableRowGroup.isTfoot},isDark:function(){return this.bvTableRowGroup.isDark},isStacked:function(){return this.bvTableRowGroup.isStacked},isResponsive:function(){return this.bvTableRowGroup.isResponsive},isStickyHeader:function(){return this.bvTableRowGroup.isStickyHeader},hasStickyHeader:function(){return!this.isStacked&&this.bvTableRowGroup.hasStickyHeader},tableVariant:function(){return this.bvTableRowGroup.tableVariant},headVariant:function(){return this.inThead?this.bvTableRowGroup.headVariant:null},footVariant:function(){return this.inTfoot?this.bvTableRowGroup.footVariant:null},isRowDark:function(){return this.headVariant===WO||this.footVariant===WO?!1:this.headVariant===KO||this.footVariant===KO?!0:this.isDark},trClasses:function(){var t=this.variant;return[t?"".concat(this.isRowDark?"bg":"table","-").concat(t):null]},trAttrs:function(){return OZ({role:"row"},this.bvAttrs)}},render:function(t){return t("tr",{class:this.trClasses,attrs:this.trAttrs,on:this.bvListeners},this.normalizeSlot())}}),ZN={},PZ=ce({props:ZN,methods:{renderBottomRow:function(){var t=this.computedFields,r=this.stacked,s=this.tbodyTrClass,d=this.tbodyTrAttr,f=this.$createElement;return!this.hasNormalizedSlot(eS)||r===!0||r===""?f():f(ys,{staticClass:"b-table-bottom-row",class:[He(s)?s(null,"row-bottom"):s],attrs:He(d)?d(null,"row-bottom"):d,key:"b-bottom-row"},this.normalizeSlot(eS,{columns:t.length,fields:t}))}}});function qO(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function YO(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?qO(Object(r),!0).forEach(function(s){MZ(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):qO(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function MZ(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var ck=function(t){return t=jt(t,0),t>0?t:null},QO=function(t){return un(t)||ck(t)>0},JN=Ne({colspan:T(Ze,null,QO),rowspan:T(Ze,null,QO),stackedHeading:T(V),stickyColumn:T(Y,!1),variant:T(V)},WM),ru=ce({name:WM,mixins:[Ei,Ms,Nt],inject:{getBvTableTr:{default:function(){return function(){return{}}}}},inheritAttrs:!1,props:JN,computed:{bvTableTr:function(){return this.getBvTableTr()},tag:function(){return"td"},inTbody:function(){return this.bvTableTr.inTbody},inThead:function(){return this.bvTableTr.inThead},inTfoot:function(){return this.bvTableTr.inTfoot},isDark:function(){return this.bvTableTr.isDark},isStacked:function(){return this.bvTableTr.isStacked},isStackedCell:function(){return this.inTbody&&this.isStacked},isResponsive:function(){return this.bvTableTr.isResponsive},isStickyHeader:function(){return this.bvTableTr.isStickyHeader},hasStickyHeader:function(){return this.bvTableTr.hasStickyHeader},isStickyColumn:function(){return!this.isStacked&&(this.isResponsive||this.hasStickyHeader)&&this.stickyColumn},rowVariant:function(){return this.bvTableTr.variant},headVariant:function(){return this.bvTableTr.headVariant},footVariant:function(){return this.bvTableTr.footVariant},tableVariant:function(){return this.bvTableTr.tableVariant},computedColspan:function(){return ck(this.colspan)},computedRowspan:function(){return ck(this.rowspan)},cellClasses:function(){var t=this.variant,r=this.headVariant,s=this.isStickyColumn;return(!t&&this.isStickyHeader&&!r||!t&&s&&this.inTfoot&&!this.footVariant||!t&&s&&this.inThead&&!r||!t&&s&&this.inTbody)&&(t=this.rowVariant||this.tableVariant||"b-table-default"),[t?"".concat(this.isDark?"bg":"table","-").concat(t):null,s?"b-table-sticky-column":null]},cellAttrs:function(){var t=this.stackedHeading,r=this.inThead||this.inTfoot,s=this.computedColspan,d=this.computedRowspan,f="cell",p=null;return r?(f="columnheader",p=s>0?"colspan":"col"):wc(this.tag,"th")&&(f="rowheader",p=d>0?"rowgroup":"row"),YO(YO({colspan:s,rowspan:d,role:f,scope:p},this.bvAttrs),{},{"data-label":this.isStackedCell&&!un(t)?_t(t):null})}},render:function(t){var r=[this.normalizeSlot()];return t(this.tag,{class:this.cellClasses,attrs:this.cellAttrs,on:this.bvListeners},[this.isStackedCell?t("div",[r]):r])}});function NZ(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var s_="busy",RZ=Ia+s_,XN=NZ({},s_,T(Y,!1)),BZ=ce({props:XN,data:function(){return{localBusy:!1}},computed:{computedBusy:function(){return this[s_]||this.localBusy}},watch:{localBusy:function(t,r){t!==r&&this.$emit(RZ,t)}},methods:{stopIfBusy:function(t){return this.computedBusy?(Mt(t),!0):!1},renderBusy:function(){var t=this.tbodyTrClass,r=this.tbodyTrAttr,s=this.$createElement;return this.computedBusy&&this.hasNormalizedSlot(kd)?s(ys,{staticClass:"b-table-busy-slot",class:[He(t)?t(null,kd):t],attrs:He(r)?r(null,kd):r,key:"table-busy-slot"},[s(ru,{props:{colspan:this.computedFields.length||null}},[this.normalizeSlot(kd)])]):null}}}),eR={caption:T(V),captionHtml:T(V)},LZ=ce({props:eR,computed:{captionId:function(){return this.isStacked?this.safeId("_caption_"):null}},methods:{renderCaption:function(){var t=this.caption,r=this.captionHtml,s=this.$createElement,d=s(),f=this.hasNormalizedSlot(sS);return(f||t||r)&&(d=s("caption",{attrs:{id:this.captionId},domProps:f?{}:qn(r,t),key:"caption",ref:"caption"},this.normalizeSlot(sS))),d}}}),jZ={},zZ=ce({methods:{renderColgroup:function(){var t=this.computedFields,r=this.$createElement,s=r();return this.hasNormalizedSlot(aS)&&(s=r("colgroup",{key:"colgroup"},[this.normalizeSlot(aS,{columns:t.length,fields:t})])),s}}}),tR={emptyFilteredHtml:T(V),emptyFilteredText:T(V,"There are no records matching your request"),emptyHtml:T(V),emptyText:T(V,"There are no records to show"),showEmpty:T(Y,!1)},FZ=ce({props:tR,methods:{renderEmpty:function(){var t=Cn(this),r=t.computedItems,s=t.computedBusy,d=this.$createElement,f=d();if(this.showEmpty&&(!r||r.length===0)&&!(s&&this.hasNormalizedSlot(kd))){var p=this.computedFields,v=this.isFiltered,m=this.emptyText,w=this.emptyHtml,C=this.emptyFilteredText,y=this.emptyFilteredHtml,E=this.tbodyTrClass,S=this.tbodyTrAttr;f=this.normalizeSlot(v?LG:v2,{emptyFilteredHtml:y,emptyFilteredText:C,emptyHtml:w,emptyText:m,fields:p,items:r}),f||(f=d("div",{class:["text-center","my-2"],domProps:v?qn(y,C):qn(w,m)})),f=d(ru,{props:{colspan:p.length||null}},[d("div",{attrs:{role:"alert","aria-live":"polite"}},[f])]),f=d(ys,{staticClass:"b-table-empty-row",class:[He(E)?E(null,"row-empty"):E],attrs:He(S)?S(null,"row-empty"):S,key:v?"b-empty-filtered-row":"b-empty-row"},[f])}return f}}}),dk=function n(t){return un(t)?"":Vn(t)&&!Qd(t)?ft(t).sort().map(function(r){return n(t[r])}).filter(function(r){return!!r}).join(" "):_t(t)};function ZO(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function JO(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ZO(Object(r),!0).forEach(function(s){nR(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):ZO(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function nR(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var gf="_cellVariants",uk="_rowVariant",yd="_showDetails",iR=[gf,uk,yd].reduce(function(n,t){return JO(JO({},n),{},nR({},t,!0))},{}),VZ=["a","a *","button","button *","input:not(.disabled):not([disabled])","select:not(.disabled):not([disabled])","textarea:not(.disabled):not([disabled])",'[role="link"]','[role="link"] *','[role="button"]','[role="button"] *',"[tabindex]:not(.disabled):not([disabled])"].join(","),hk=function(t,r,s){var d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},f=ft(d).reduce(function(v,m){var w=d[m],C=w.filterByFormatted,y=He(C)?C:C?w.formatter:null;return He(y)&&(v[m]=y(t[m],m,t)),v},Ss(t)),p=ft(f).filter(function(v){return!iR[v]&&!(St(r)&&r.length>0&&kt(r,v))&&!(St(s)&&s.length>0&&!kt(s,v))});return Up(f,p)},$Z=function(t,r,s,d){return Vn(t)?dk(hk(t,r,s,d)):""};function HZ(n){return KZ(n)||WZ(n)||GZ(n)||UZ()}function UZ(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function GZ(n,t){if(!!n){if(typeof n=="string")return fk(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return fk(n,t)}}function WZ(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function KZ(n){if(Array.isArray(n))return fk(n)}function fk(n,t){(t==null||t>n.length)&&(t=n.length);for(var r=0,s=new Array(t);r<t;r++)s[r]=n[r];return s}var qZ='Prop "filter-debounce" is deprecated. Use the debounce feature of "<b-form-input>" instead.',rR={filter:T([].concat(HZ(tt),[IG])),filterDebounce:T(Ze,0,function(n){return oM.test(String(n))}),filterFunction:T(Ds),filterIgnoredFields:T(Cr,[]),filterIncludedFields:T(Cr,[])},YZ=ce({props:rR,data:function(){return{isFiltered:!1,localFilter:this.filterSanitize(this.filter)}},computed:{computedFilterIgnored:function(){return dn(this.filterIgnoredFields||[]).filter(wt)},computedFilterIncluded:function(){return dn(this.filterIncludedFields||[]).filter(wt)},computedFilterDebounce:function(){var t=jt(this.filterDebounce,0);return t>0&&Ci(qZ,xa),t},localFiltering:function(){return this.hasProvider?!!this.noProviderFiltering:!0},filteredCheck:function(){var t=this.filteredItems,r=this.localItems,s=this.localFilter;return{filteredItems:t,localItems:r,localFilter:s}},localFilterFn:function(){var t=this.filterFunction;return Rw(t)?t:null},filteredItems:function(){var t=this.localItems,r=this.localFilter,s=this.localFiltering?this.filterFnFactory(this.localFilterFn,r)||this.defaultFilterFnFactory(r):null;return s&&t.length>0?t.filter(s):t}},watch:{computedFilterDebounce:function(t){!t&&this.$_filterTimer&&(this.clearFilterTimer(),this.localFilter=this.filterSanitize(this.filter))},filter:{deep:!0,handler:function(t){var r=this,s=this.computedFilterDebounce;this.clearFilterTimer(),s&&s>0?this.$_filterTimer=setTimeout(function(){r.localFilter=r.filterSanitize(t)},s):this.localFilter=this.filterSanitize(t)}},filteredCheck:function(t){var r=t.filteredItems,s=t.localFilter,d=!1;s?tn(s,[])||tn(s,{})?d=!1:s&&(d=!0):d=!1,d&&this.$emit(jv,r,r.length),this.isFiltered=d},isFiltered:function(t,r){if(t===!1&&r===!0){var s=this.localItems;this.$emit(jv,s,s.length)}}},created:function(){var t=this;this.$_filterTimer=null,this.$nextTick(function(){t.isFiltered=Boolean(t.localFilter)})},beforeDestroy:function(){this.clearFilterTimer()},methods:{clearFilterTimer:function(){clearTimeout(this.$_filterTimer),this.$_filterTimer=null},filterSanitize:function(t){return this.localFiltering&&!this.localFilterFn&&!(zt(t)||Vx(t))?"":Qi(t)},filterFnFactory:function(t,r){if(!t||!He(t)||!r||tn(r,[])||tn(r,{}))return null;var s=function(f){return t(f,r)};return s},defaultFilterFnFactory:function(t){var r=this;if(!t||!(zt(t)||Vx(t)))return null;var s=t;if(zt(s)){var d=C2(t).replace(CU,"\\s+");s=new RegExp(".*".concat(d,".*"),"i")}var f=function(v){return s.lastIndex=0,s.test($Z(v,r.computedFilterIgnored,r.computedFilterIncluded,r.computedFieldsObj))};return f}}}),QZ=function(t,r){var s=null;return zt(r)?s={key:t,label:r}:He(r)?s={key:t,formatter:r}:Vn(r)?(s=Ss(r),s.key=s.key||t):r!==!1&&(s={key:t}),s},ZZ=function(t,r){var s=[];if(St(t)&&t.filter(wt).forEach(function(p){if(zt(p))s.push({key:p,label:rf(p)});else if(Vn(p)&&p.key&&zt(p.key))s.push(Ss(p));else if(Vn(p)&&ft(p).length===1){var v=ft(p)[0],m=QZ(v,p[v]);m&&s.push(m)}}),s.length===0&&St(r)&&r.length>0){var d=r[0];ft(d).forEach(function(p){iR[p]||s.push({key:p,label:rf(p)})})}var f={};return s.filter(function(p){return f[p.key]?!1:(f[p.key]=!0,p.label=zt(p.label)?p.label:rf(p.key),!0)})};function XO(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function eD(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?XO(Object(r),!0).forEach(function(s){oR(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):XO(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function oR(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var lg=no("value",{type:Cr,defaultValue:[]}),JZ=lg.mixin,XZ=lg.props,eJ=lg.prop,tD=lg.event,sR=lt(eD(eD({},XZ),{},oR({fields:T(Cr,null),items:T(Cr,[]),primaryKey:T(V)},eJ,T(Cr,[])))),tJ=ce({mixins:[JZ,za],props:sR,data:function(){var t=this.items;return{localItems:St(t)?t.slice():[]}},computed:{computedFields:function(){return ZZ(this.fields,this.localItems)},computedFieldsObj:function(){var t=this.bvParent;return this.computedFields.reduce(function(r,s){if(r[s.key]=Ss(s),s.formatter){var d=s.formatter;zt(d)&&He(t[d])?d=t[d]:He(d)||(d=void 0),r[s.key].formatter=d}return r},{})},computedItems:function(){var t=Cn(this),r=t.paginatedItems,s=t.sortedItems,d=t.filteredItems,f=t.localItems;return(r||s||d||f||[]).slice()},context:function(){var t=Cn(this),r=t.perPage,s=t.currentPage;return{filter:this.localFilter,sortBy:this.localSortBy,sortDesc:this.localSortDesc,perPage:Wt(jt(r,0),0),currentPage:Wt(jt(s,0),1),apiUrl:this.apiUrl}}},watch:{items:function(t){this.localItems=St(t)?t.slice():[]},computedItems:function(t,r){tn(t,r)||this.$emit(tD,t)},context:function(t,r){tn(t,r)||this.$emit(t2,t)}},mounted:function(){this.$emit(tD,this.computedItems)},methods:{getFieldFormatter:function(t){var r=this.computedFieldsObj[t];return r?r.formatter:void 0}}}),aR={currentPage:T(Ze,1),perPage:T(Ze,0)},nJ=ce({props:aR,computed:{localPaging:function(){return this.hasProvider?!!this.noProviderPaging:!0},paginatedItems:function(){var t=Cn(this),r=t.sortedItems,s=t.filteredItems,d=t.localItems,f=r||s||d||[],p=Wt(jt(this.currentPage,1),1),v=Wt(jt(this.perPage,0),0);return this.localPaging&&v&&(f=f.slice((p-1)*v,p*v)),f}}}),iJ=Hn(xa,vd),rJ=$n(xa,wG),lR={apiUrl:T(V),items:T(m2,[]),noProviderFiltering:T(Y,!1),noProviderPaging:T(Y,!1),noProviderSorting:T(Y,!1)},oJ=ce({mixins:[To],props:lR,computed:{hasProvider:function(){return He(this.items)},providerTriggerContext:function(){var t={apiUrl:this.apiUrl,filter:null,sortBy:null,sortDesc:null,perPage:null,currentPage:null};return this.noProviderFiltering||(t.filter=this.localFilter),this.noProviderSorting||(t.sortBy=this.localSortBy,t.sortDesc=this.localSortDesc),this.noProviderPaging||(t.perPage=this.perPage,t.currentPage=this.currentPage),Ss(t)}},watch:{items:function(t){(this.hasProvider||He(t))&&this.$nextTick(this._providerUpdate)},providerTriggerContext:function(t,r){tn(t,r)||this.$nextTick(this._providerUpdate)}},mounted:function(){var t=this;this.hasProvider&&(!this.localItems||this.localItems.length===0)&&this._providerUpdate(),this.listenOnRoot(rJ,function(r){(r===t.id||r===t)&&t.refresh()})},methods:{refresh:function(){var t=Cn(this),r=t.items,s=t.refresh,d=t.computedBusy;this.$off(vd,s),d?this.localBusy&&this.hasProvider&&this.$on(vd,s):(this.clearSelected(),this.hasProvider?this.$nextTick(this._providerUpdate):this.localItems=St(r)?r.slice():[])},_providerSetLocal:function(t){this.localItems=St(t)?t.slice():[],this.localBusy=!1,this.$emit(vd),this.id&&this.emitOnRoot(iJ,this.id)},_providerUpdate:function(){var t=this;if(!!this.hasProvider){if(Cn(this).computedBusy){this.$nextTick(this.refresh);return}this.localBusy=!0,this.$nextTick(function(){try{var r=t.items(t.context,t._providerSetLocal);BU(r)?r.then(function(s){t._providerSetLocal(s)}):St(r)?t._providerSetLocal(r):t.items.length!==2&&(Ci("Provider function didn't request callback and did not return a promise or data.",xa),t.localBusy=!1)}catch(s){Ci("Provider function error [".concat(s.name,"] ").concat(s.message,"."),xa),t.localBusy=!1,t.$off(vd,t.refresh)}})}}}});function qh(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var sJ=["range","multi","single"],nD="grid",cR={noSelectOnClick:T(Y,!1),selectMode:T(V,"multi",function(n){return kt(sJ,n)}),selectable:T(Y,!1),selectedVariant:T(V,"active")},aJ=ce({props:cR,data:function(){return{selectedRows:[],selectedLastRow:-1}},computed:{isSelectable:function(){return this.selectable&&this.selectMode},hasSelectableRowClick:function(){return this.isSelectable&&!this.noSelectOnClick},supportsSelectableRows:function(){return!0},selectableHasSelection:function(){var t=this.selectedRows;return this.isSelectable&&t&&t.length>0&&t.some(wt)},selectableIsMultiSelect:function(){return this.isSelectable&&kt(["range","multi"],this.selectMode)},selectableTableClasses:function(){var t,r=this.isSelectable;return t={"b-table-selectable":r},qh(t,"b-table-select-".concat(this.selectMode),r),qh(t,"b-table-selecting",this.selectableHasSelection),qh(t,"b-table-selectable-no-click",r&&!this.hasSelectableRowClick),t},selectableTableAttrs:function(){if(!this.isSelectable)return{};var t=this.bvAttrs.role||nD;return{role:t,"aria-multiselectable":t===nD?_t(this.selectableIsMultiSelect):null}}},watch:{computedItems:function(t,r){var s=!1;if(this.isSelectable&&this.selectedRows.length>0){s=St(t)&&St(r)&&t.length===r.length;for(var d=0;s&&d<t.length;d++)s=tn(hk(t[d]),hk(r[d]))}s||this.clearSelected()},selectable:function(t){this.clearSelected(),this.setSelectionHandlers(t)},selectMode:function(){this.clearSelected()},hasSelectableRowClick:function(t){this.clearSelected(),this.setSelectionHandlers(!t)},selectedRows:function(t,r){var s=this;if(this.isSelectable&&!tn(t,r)){var d=[];t.forEach(function(f,p){f&&d.push(s.computedItems[p])}),this.$emit(EG,d)}}},beforeMount:function(){this.isSelectable&&this.setSelectionHandlers(!0)},methods:{selectRow:function(t){if(this.isSelectable&&wa(t)&&t>=0&&t<this.computedItems.length&&!this.isRowSelected(t)){var r=this.selectableIsMultiSelect?this.selectedRows.slice():[];r[t]=!0,this.selectedLastClicked=-1,this.selectedRows=r}},unselectRow:function(t){if(this.isSelectable&&wa(t)&&this.isRowSelected(t)){var r=this.selectedRows.slice();r[t]=!1,this.selectedLastClicked=-1,this.selectedRows=r}},selectAllRows:function(){var t=this.computedItems.length;this.isSelectable&&t>0&&(this.selectedLastClicked=-1,this.selectedRows=this.selectableIsMultiSelect?JG(t,!0):[!0])},isRowSelected:function(t){return!!(wa(t)&&this.selectedRows[t])},clearSelected:function(){this.selectedLastClicked=-1,this.selectedRows=[]},selectableRowClasses:function(t){if(this.isSelectable&&this.isRowSelected(t)){var r=this.selectedVariant;return qh({"b-table-row-selected":!0},"".concat(this.dark?"bg":"table","-").concat(r),r)}return{}},selectableRowAttrs:function(t){return{"aria-selected":this.isSelectable?this.isRowSelected(t)?"true":"false":null}},setSelectionHandlers:function(t){var r=t&&!this.noSelectOnClick?"$on":"$off";this[r](Lf,this.selectionHandler),this[r](jv,this.clearSelected),this[r](t2,this.clearSelected)},selectionHandler:function(t,r,s){if(!this.isSelectable||this.noSelectOnClick){this.clearSelected();return}var d=this.selectMode,f=this.selectedLastRow,p=this.selectedRows.slice(),v=!p[r];if(d==="single")p=[];else if(d==="range")if(f>-1&&s.shiftKey){for(var m=Yp(f,r);m<=Wt(f,r);m++)p[m]=!0;v=!0}else s.ctrlKey||s.metaKey||(p=[],v=!0),v&&(this.selectedLastRow=r);p[r]=v,this.selectedRows=p}}}),dR=function(t,r){return t.map(function(s,d){return[d,s]}).sort(function(s,d){return this(s[1],d[1])||s[0]-d[0]}.bind(r)).map(function(s){return s[1]})},iD=function(t){return un(t)?"":cM(t)?mn(t,t):t},lJ=function(t,r){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},d=s.sortBy,f=d===void 0?null:d,p=s.formatter,v=p===void 0?null:p,m=s.locale,w=m===void 0?void 0:m,C=s.localeOptions,y=C===void 0?{}:C,E=s.nullLast,S=E===void 0?!1:E,I=Fn(t,f,null),M=Fn(r,f,null);return He(v)&&(I=v(I,f,t),M=v(M,f,r)),I=iD(I),M=iD(M),Qd(I)&&Qd(M)||wa(I)&&wa(M)?I<M?-1:I>M?1:0:S&&I===""&&M!==""?1:S&&I!==""&&M===""?-1:dk(I).localeCompare(dk(M),w,y)},Vr,yl;function rD(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function oD(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?rD(Object(r),!0).forEach(function(s){Ni(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):rD(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function Ni(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var tp="sortBy",cJ=Ia+tp,np="sortDesc",dJ=Ia+np,ip="asc",pk="desc",uJ="last",hJ=[ip,pk,uJ],uR=(Vr={labelSortAsc:T(V,"Click to sort ascending"),labelSortClear:T(V,"Click to clear sorting"),labelSortDesc:T(V,"Click to sort descending"),noFooterSorting:T(Y,!1),noLocalSorting:T(Y,!1),noSortReset:T(Y,!1)},Ni(Vr,tp,T(V)),Ni(Vr,"sortCompare",T(Ds)),Ni(Vr,"sortCompareLocale",T(Co)),Ni(Vr,"sortCompareOptions",T(Kn,{numeric:!0})),Ni(Vr,np,T(Y,!1)),Ni(Vr,"sortDirection",T(V,ip,function(n){return kt(hJ,n)})),Ni(Vr,"sortIconLeft",T(Y,!1)),Ni(Vr,"sortNullLast",T(Y,!1)),Vr),fJ=ce({props:uR,data:function(){return{localSortBy:this[tp]||"",localSortDesc:this[np]||!1}},computed:{localSorting:function(){return this.hasProvider?!!this.noProviderSorting:!this.noLocalSorting},isSortable:function(){return this.computedFields.some(function(t){return t.sortable})},sortedItems:function(){var t=Cn(this),r=t.localSortBy,s=t.localSortDesc,d=t.sortCompareLocale,f=t.sortNullLast,p=t.sortCompare,v=t.localSorting,m=t.filteredItems,w=t.localItems,C=(m||w||[]).slice(),y=oD(oD({},this.sortCompareOptions),{},{usage:"sort"});if(r&&v){var E=this.computedFieldsObj[r]||{},S=E.sortByFormatted,I=He(S)?S:S?this.getFieldFormatter(r):void 0;return dR(C,function(M,q){var L=null;return He(p)&&(L=p(M,q,r,s,I,y,d)),(un(L)||L===!1)&&(L=lJ(M,q,{sortBy:r,formatter:I,locale:d,localeOptions:y,nullLast:f})),(L||0)*(s?-1:1)})}return C}},watch:(yl={isSortable:function(t){t?this.isSortable&&this.$on(Id,this.handleSort):this.$off(Id,this.handleSort)}},Ni(yl,np,function(n){n!==this.localSortDesc&&(this.localSortDesc=n||!1)}),Ni(yl,tp,function(n){n!==this.localSortBy&&(this.localSortBy=n||"")}),Ni(yl,"localSortDesc",function(t,r){t!==r&&this.$emit(dJ,t)}),Ni(yl,"localSortBy",function(t,r){t!==r&&this.$emit(cJ,t)}),yl),created:function(){this.isSortable&&this.$on(Id,this.handleSort)},methods:{handleSort:function(t,r,s,d){var f=this;if(!!this.isSortable&&!(d&&this.noFooterSorting)){var p=!1,v=function(){var C=r.sortDirection||f.sortDirection;C===ip?f.localSortDesc=!1:C===pk&&(f.localSortDesc=!0)};if(r.sortable){var m=!this.localSorting&&r.sortKey?r.sortKey:t;this.localSortBy===m?this.localSortDesc=!this.localSortDesc:(this.localSortBy=m,v()),p=!0}else this.localSortBy&&!this.noSortReset&&(this.localSortBy="",v(),p=!0);p&&this.$emit(SG,this.context)}},sortTheadThClasses:function(t,r,s){return{"b-table-sort-icon-left":r.sortable&&this.sortIconLeft&&!(s&&this.noFooterSorting)}},sortTheadThAttrs:function(t,r,s){var d,f=this.isSortable,p=this.noFooterSorting,v=this.localSortDesc,m=this.localSortBy,w=this.localSorting;if(!f||s&&p)return{};var C=r.sortable,y=w?t:(d=r.sortKey)!==null&&d!==void 0?d:t,E=C&&m===y?v?"descending":"ascending":C?"none":null;return{"aria-sort":E}},sortTheadThLabel:function(t,r,s){if(!this.isSortable||s&&this.noFooterSorting)return null;var d=this.localSortBy,f=this.localSortDesc,p=this.labelSortAsc,v=this.labelSortDesc,m=r.sortable,w="";if(m)if(d===t)w=f?p:v;else{w=f?v:p;var C=this.sortDirection||r.sortDirection;C===ip?w=p:C===pk&&(w=v)}else this.noSortReset||(w=d?this.labelSortClear:"");return Gp(w)||null}}});function pJ(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var hR={stacked:T(Tr,!1)},sD=ce({props:hR,computed:{isStacked:function(){var t=this.stacked;return t===""?!0:t},isStackedAlways:function(){return this.isStacked===!0},stackedTableClasses:function(){var t=this.isStackedAlways;return pJ({"b-table-stacked":t},"b-table-stacked-".concat(this.stacked),!t&&this.isStacked)}}});function aD(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function ev(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?aD(Object(r),!0).forEach(function(s){gJ(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):aD(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function gJ(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var fR={bordered:T(Y,!1),borderless:T(Y,!1),captionTop:T(Y,!1),dark:T(Y,!1),fixed:T(Y,!1),hover:T(Y,!1),noBorderCollapse:T(Y,!1),outlined:T(Y,!1),responsive:T(Tr,!1),small:T(Y,!1),stickyHeader:T(Tr,!1),striped:T(Y,!1),tableClass:T(tt),tableVariant:T(V)},mJ=ce({mixins:[Ei],provide:function(){var t=this;return{getBvTable:function(){return t}}},inheritAttrs:!1,props:fR,computed:{isTableSimple:function(){return!1},isResponsive:function(){var t=this.responsive;return t===""?!0:t},isStickyHeader:function(){var t=this.stickyHeader;return t=t===""?!0:t,this.isStacked?!1:t},wrapperClasses:function(){var t=this.isResponsive;return[this.isStickyHeader?"b-table-sticky-header":"",t===!0?"table-responsive":t?"table-responsive-".concat(this.responsive):""].filter(wt)},wrapperStyles:function(){var t=this.isStickyHeader;return t&&!Aa(t)?{maxHeight:t}:{}},tableClasses:function(){var t=Cn(this),r=t.hover,s=t.tableVariant,d=t.selectableTableClasses,f=t.stackedTableClasses,p=t.tableClass,v=t.computedBusy;return r=this.isTableSimple?r:r&&this.computedItems.length>0&&!v,[p,{"table-striped":this.striped,"table-hover":r,"table-dark":this.dark,"table-bordered":this.bordered,"table-borderless":this.borderless,"table-sm":this.small,border:this.outlined,"b-table-fixed":this.fixed,"b-table-caption-top":this.captionTop,"b-table-no-border-collapse":this.noBorderCollapse},s?"".concat(this.dark?"bg":"table","-").concat(s):"",f,d]},tableAttrs:function(){var t=Cn(this),r=t.computedItems,s=t.filteredItems,d=t.computedFields,f=t.selectableTableAttrs,p=t.computedBusy,v=this.isTableSimple?{}:{"aria-busy":_t(p),"aria-colcount":_t(d.length),"aria-describedby":this.bvAttrs["aria-describedby"]||this.$refs.caption?this.captionId:null},m=r&&s&&s.length>r.length?_t(s.length):null;return ev(ev(ev({"aria-rowcount":m},this.bvAttrs),{},{id:this.safeId(),role:this.bvAttrs.role||"table"},v),f)}},render:function(t){var r=Cn(this),s=r.wrapperClasses,d=r.renderCaption,f=r.renderColgroup,p=r.renderThead,v=r.renderTbody,m=r.renderTfoot,w=[];this.isTableSimple?w.push(this.normalizeSlot()):(w.push(d?d():null),w.push(f?f():null),w.push(p?p():null),w.push(v?v():null),w.push(m?m():null));var C=t("table",{staticClass:"table b-table",class:this.tableClasses,attrs:this.tableAttrs,key:"b-table"},w.filter(wt));return s.length>0?t("div",{class:s,style:this.wrapperStyles,key:"wrap"},[C]):C}});function lD(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function tv(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?lD(Object(r),!0).forEach(function(s){bJ(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):lD(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function bJ(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var a_=Ne({tbodyTransitionHandlers:T(Kn),tbodyTransitionProps:T(Kn)},qM),vJ=ce({name:qM,mixins:[Ei,Ms,Nt],provide:function(){var t=this;return{getBvTableRowGroup:function(){return t}}},inject:{getBvTable:{default:function(){return function(){return{}}}}},inheritAttrs:!1,props:a_,computed:{bvTable:function(){return this.getBvTable()},isTbody:function(){return!0},isDark:function(){return this.bvTable.dark},isStacked:function(){return this.bvTable.isStacked},isResponsive:function(){return this.bvTable.isResponsive},isStickyHeader:function(){return!1},hasStickyHeader:function(){return!this.isStacked&&this.bvTable.stickyHeader},tableVariant:function(){return this.bvTable.tableVariant},isTransitionGroup:function(){return this.tbodyTransitionProps||this.tbodyTransitionHandlers},tbodyAttrs:function(){return tv({role:"rowgroup"},this.bvAttrs)},tbodyProps:function(){var t=this.tbodyTransitionProps;return t?tv(tv({},t),{},{tag:"tbody"}):{}}},render:function(t){var r={props:this.tbodyProps,attrs:this.tbodyAttrs};return this.isTransitionGroup?(r.on=this.tbodyTransitionHandlers||{},r.nativeOn=this.bvListeners):r.on=this.bvListeners,t(this.isTransitionGroup?"transition-group":"tbody",r,this.normalizeSlot())}}),kJ=["TD","TH","TR"],gk=function(t){if(!t||!t.target)return!1;var r=t.target;if(r.disabled||kJ.indexOf(r.tagName)!==-1)return!1;if(_s(".dropdown-menu",r))return!0;var s=r.tagName==="LABEL"?r:_s("label",r);if(s){var d=vr(s,"for"),f=d?Vv(d):Is("input, select, textarea",s);if(f&&!f.disabled)return!0}return Wp(r,VZ)},pR=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document,r=aW();return r&&r.toString().trim()!==""&&r.containsNode&&Yt(t)?r.containsNode(t,!0):!1},wJ=Ne(JN,QM),gR=ce({name:QM,extends:ru,props:wJ,computed:{tag:function(){return"th"}}});function cD(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function hd(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?cD(Object(r),!0).forEach(function(s){mR(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):cD(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function mR(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}function _J(n){return EJ(n)||AJ(n)||yJ(n)||CJ()}function CJ(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yJ(n,t){if(!!n){if(typeof n=="string")return mk(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return mk(n,t)}}function AJ(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function EJ(n){if(Array.isArray(n))return mk(n)}function mk(n,t){(t==null||t>n.length)&&(t=n.length);for(var r=0,s=new Array(t);r<t;r++)s[r]=n[r];return s}var bR={detailsTdClass:T(tt),tbodyTrAttr:T(NG),tbodyTrClass:T([].concat(_J(tt),[Ds]))},TJ=ce({mixins:[za],props:bR,methods:{getTdValues:function(t,r,s,d){var f=this.bvParent;if(s){var p=Fn(t,r,"");return He(s)?s(p,r,t):zt(s)&&He(f[s])?f[s](p,r,t):s}return d},getThValues:function(t,r,s,d,f){var p=this.bvParent;if(s){var v=Fn(t,r,"");return He(s)?s(v,r,t,d):zt(s)&&He(p[s])?p[s](v,r,t,d):s}return f},getFormattedValue:function(t,r){var s=r.key,d=this.getFieldFormatter(s),f=Fn(t,s,null);return He(d)&&(f=d(f,s,t)),un(f)?"":f},toggleDetailsFactory:function(t,r){var s=this;return function(){t&&s.$set(r,yd,!r[yd])}},rowHovered:function(t){this.tbodyRowEventStopped(t)||this.emitTbodyRowEvent(yG,t)},rowUnhovered:function(t){this.tbodyRowEventStopped(t)||this.emitTbodyRowEvent(TG,t)},renderTbodyRowCell:function(t,r,s,d){var f=this,p=this.isStacked,v=t.key,m=t.label,w=t.isRowHeader,C=this.$createElement,y=this.hasNormalizedSlot(ld),E=this.getFormattedValue(s,t),S=!p&&(this.isResponsive||this.stickyHeader)&&t.stickyColumn,I=S?w?gR:ru:w?"th":"td",M=s[gf]&&s[gf][v]?s[gf][v]:t.variant||null,q={class:[t.class?t.class:"",this.getTdValues(s,v,t.tdClass,"")],props:{},attrs:hd({"aria-colindex":String(r+1)},w?this.getThValues(s,v,t.thAttr,"row",{}):this.getTdValues(s,v,t.tdAttr,{})),key:"row-".concat(d,"-cell-").concat(r,"-").concat(v)};S?q.props={stackedHeading:p?m:null,stickyColumn:!0,variant:M}:(q.attrs["data-label"]=p&&!un(m)?_t(m):null,q.attrs.role=w?"rowheader":"cell",q.attrs.scope=w?"row":null,M&&q.class.push("".concat(this.dark?"bg":"table","-").concat(M)));var L={item:s,index:d,field:t,unformatted:Fn(s,v,""),value:E,toggleDetails:this.toggleDetailsFactory(y,s),detailsShowing:Boolean(s[yd])};Cn(this).supportsSelectableRows&&(L.rowSelected=this.isRowSelected(d),L.selectRow=function(){return f.selectRow(d)},L.unselectRow=function(){return f.unselectRow(d)});var B=this.$_bodyFieldSlotNameCache[v],$=B?this.normalizeSlot(B,L):_t(E);return this.isStacked&&($=[C("div",[$])]),C(I,q,[$])},renderTbodyRow:function(t,r){var s=this,d=Cn(this),f=d.computedFields,p=d.striped,v=d.primaryKey,m=d.currentPage,w=d.perPage,C=d.tbodyTrClass,y=d.tbodyTrAttr,E=d.hasSelectableRowClick,S=this.$createElement,I=this.hasNormalizedSlot(ld),M=t[yd]&&I,q=this.$listeners[Lf]||E,L=[],B=M?this.safeId("_details_".concat(r,"_")):null,$=f.map(function(de,Me){return s.renderTbodyRowCell(de,Me,t,r)}),K=null;m&&w&&w>0&&(K=String((m-1)*w+r+1));var Z=_t(Fn(t,v))||null,re=Z||_t(r),J=Z?this.safeId("_row_".concat(Z)):null,G=Cn(this).selectableRowClasses?this.selectableRowClasses(r):{},P=Cn(this).selectableRowAttrs?this.selectableRowAttrs(r):{},X=He(C)?C(t,"row"):C,he=He(y)?y(t,"row"):y;if(L.push(S(ys,mR({class:[X,G,M?"b-table-has-details":""],props:{variant:t[uk]||null},attrs:hd(hd({id:J},he),{},{tabindex:q?"0":null,"data-pk":Z||null,"aria-details":B,"aria-owns":B,"aria-rowindex":K},P),on:{mouseenter:this.rowHovered,mouseleave:this.rowUnhovered},key:"__b-table-row-".concat(re,"__"),ref:"item-rows"},XP,!0),$)),M){var Ie={item:t,index:r,fields:f,toggleDetails:this.toggleDetailsFactory(I,t)};Cn(this).supportsSelectableRows&&(Ie.rowSelected=this.isRowSelected(r),Ie.selectRow=function(){return s.selectRow(r)},Ie.unselectRow=function(){return s.unselectRow(r)});var De=S(ru,{props:{colspan:f.length},class:this.detailsTdClass},[this.normalizeSlot(ld,Ie)]);p&&L.push(S("tr",{staticClass:"d-none",attrs:{"aria-hidden":"true",role:"presentation"},key:"__b-table-details-stripe__".concat(re)}));var ke=He(this.tbodyTrClass)?this.tbodyTrClass(t,ld):this.tbodyTrClass,je=He(this.tbodyTrAttr)?this.tbodyTrAttr(t,ld):this.tbodyTrAttr;L.push(S(ys,{staticClass:"b-table-details",class:[ke],props:{variant:t[uk]||null},attrs:hd(hd({},je),{},{id:B,tabindex:"-1"}),key:"__b-table-details__".concat(re)},[De]))}else I&&(L.push(S()),p&&L.push(S()));return L}}});function dD(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function nv(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?dD(Object(r),!0).forEach(function(s){xJ(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):dD(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function xJ(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var iv=function(t){return"cell(".concat(t||"",")")},vR=lt(nv(nv(nv({},a_),bR),{},{tbodyClass:T(tt)})),SJ=ce({mixins:[TJ],props:vR,beforeDestroy:function(){this.$_bodyFieldSlotNameCache=null},methods:{getTbodyTrs:function(){var t=this.$refs,r=t.tbody?t.tbody.$el||t.tbody:null,s=(t["item-rows"]||[]).map(function(d){return d.$el||d});return r&&r.children&&r.children.length>0&&s&&s.length>0?Sa(r.children).filter(function(d){return kt(s,d)}):[]},getTbodyTrIndex:function(t){if(!Yt(t))return-1;var r=t.tagName==="TR"?t:_s("tr",t,!0);return r?this.getTbodyTrs().indexOf(r):-1},emitTbodyRowEvent:function(t,r){if(t&&this.hasListener(t)&&r&&r.target){var s=this.getTbodyTrIndex(r.target);if(s>-1){var d=this.computedItems[s];this.$emit(t,d,s,r)}}},tbodyRowEventStopped:function(t){return this.stopIfBusy&&this.stopIfBusy(t)},onTbodyRowKeydown:function(t){var r=t.target,s=t.keyCode;if(!(this.tbodyRowEventStopped(t)||r.tagName!=="TR"||!Mw(r)||r.tabIndex!==0)){if(kt([Pa,Ps],s))Mt(t),this.onTBodyRowClicked(t);else if(kt([Md,Hl,Hf,$f],s)){var d=this.getTbodyTrIndex(r);if(d>-1){Mt(t);var f=this.getTbodyTrs(),p=t.shiftKey;s===Hf||p&&s===Md?cn(f[0]):s===$f||p&&s===Hl?cn(f[f.length-1]):s===Md&&d>0?cn(f[d-1]):s===Hl&&d<f.length-1&&cn(f[d+1])}}}},onTBodyRowClicked:function(t){var r=this.$refs,s=r.tbody?r.tbody.$el||r.tbody:null;this.tbodyRowEventStopped(t)||gk(t)||pR(s||this.$el)||this.emitTbodyRowEvent(Lf,t)},onTbodyRowMiddleMouseRowClicked:function(t){!this.tbodyRowEventStopped(t)&&t.which===2&&this.emitTbodyRowEvent(AG,t)},onTbodyRowContextmenu:function(t){this.tbodyRowEventStopped(t)||this.emitTbodyRowEvent(_G,t)},onTbodyRowDblClicked:function(t){!this.tbodyRowEventStopped(t)&&!gk(t)&&this.emitTbodyRowEvent(CG,t)},renderTbody:function(){var t=this,r=Cn(this),s=r.computedItems,d=r.renderBusy,f=r.renderTopRow,p=r.renderEmpty,v=r.renderBottomRow,m=r.hasSelectableRowClick,w=this.$createElement,C=this.hasListener(Lf)||m,y=[],E=d?d():null;if(E)y.push(E);else{var S={},I=iv();I=this.hasNormalizedSlot(I)?I:null,this.computedFields.forEach(function(L){var B=L.key,$=iv(B),K=iv(B.toLowerCase());S[B]=t.hasNormalizedSlot($)?$:t.hasNormalizedSlot(K)?K:I}),this.$_bodyFieldSlotNameCache=S,y.push(f?f():w()),s.forEach(function(L,B){y.push(t.renderTbodyRow(L,B))}),y.push(p?p():w()),y.push(v?v():w())}var M={auxclick:this.onTbodyRowMiddleMouseRowClicked,contextmenu:this.onTbodyRowContextmenu,dblclick:this.onTbodyRowDblClicked};C&&(M.click=this.onTBodyRowClicked,M.keydown=this.onTbodyRowKeydown);var q=w(vJ,{class:this.tbodyClass||null,props:bi(a_,this.$props),on:M,ref:"tbody"},y);return q}}});function uD(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function hD(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?uD(Object(r),!0).forEach(function(s){OJ(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):uD(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function OJ(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var DJ=Ne({footVariant:T(V)},YM),kR=ce({name:YM,mixins:[Ei,Ms,Nt],provide:function(){var t=this;return{getBvTableRowGroup:function(){return t}}},inject:{getBvTable:{default:function(){return function(){return{}}}}},inheritAttrs:!1,props:DJ,computed:{bvTable:function(){return this.getBvTable()},isTfoot:function(){return!0},isDark:function(){return this.bvTable.dark},isStacked:function(){return this.bvTable.isStacked},isResponsive:function(){return this.bvTable.isResponsive},isStickyHeader:function(){return!1},hasStickyHeader:function(){return!this.isStacked&&this.bvTable.stickyHeader},tableVariant:function(){return this.bvTable.tableVariant},tfootClasses:function(){return[this.footVariant?"thead-".concat(this.footVariant):null]},tfootAttrs:function(){return hD(hD({},this.bvAttrs),{},{role:"rowgroup"})}},render:function(t){return t("tfoot",{class:this.tfootClasses,attrs:this.tfootAttrs,on:this.bvListeners},this.normalizeSlot())}}),wR={footClone:T(Y,!1),footRowVariant:T(V),footVariant:T(V),tfootClass:T(tt),tfootTrClass:T(tt)},IJ=ce({props:wR,methods:{renderTFootCustom:function(){var t=this.$createElement;return this.hasNormalizedSlot(nS)?t(kR,{class:this.tfootClass||null,props:{footVariant:this.footVariant||this.headVariant||null},key:"bv-tfoot-custom"},this.normalizeSlot(nS,{items:this.computedItems.slice(),fields:this.computedFields.slice(),columns:this.computedFields.length})):t()},renderTfoot:function(){return this.footClone?this.renderThead(!0):this.renderTFootCustom()}}});function fD(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function PJ(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?fD(Object(r),!0).forEach(function(s){MJ(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):fD(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function MJ(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var NJ=Ne({headVariant:T(V)},ZM),RJ=ce({name:ZM,mixins:[Ei,Ms,Nt],provide:function(){var t=this;return{getBvTableRowGroup:function(){return t}}},inject:{getBvTable:{default:function(){return function(){return{}}}}},inheritAttrs:!1,props:NJ,computed:{bvTable:function(){return this.getBvTable()},isThead:function(){return!0},isDark:function(){return this.bvTable.dark},isStacked:function(){return this.bvTable.isStacked},isResponsive:function(){return this.bvTable.isResponsive},isStickyHeader:function(){return!this.isStacked&&this.bvTable.stickyHeader},hasStickyHeader:function(){return!this.isStacked&&this.bvTable.stickyHeader},tableVariant:function(){return this.bvTable.tableVariant},theadClasses:function(){return[this.headVariant?"thead-".concat(this.headVariant):null]},theadAttrs:function(){return PJ({role:"rowgroup"},this.bvAttrs)}},render:function(t){return t("thead",{class:this.theadClasses,attrs:this.theadAttrs,on:this.bvListeners},this.normalizeSlot())}});function BJ(n){return FJ(n)||zJ(n)||jJ(n)||LJ()}function LJ(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jJ(n,t){if(!!n){if(typeof n=="string")return bk(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return bk(n,t)}}function zJ(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function FJ(n){if(Array.isArray(n))return bk(n)}function bk(n,t){(t==null||t>n.length)&&(t=n.length);for(var r=0,s=new Array(t);r<t;r++)s[r]=n[r];return s}function pD(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function gD(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?pD(Object(r),!0).forEach(function(s){VJ(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):pD(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function VJ(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var rv=function(t){return"head(".concat(t||"",")")},ov=function(t){return"foot(".concat(t||"",")")},_R={headRowVariant:T(V),headVariant:T(V),theadClass:T(tt),theadTrClass:T(tt)},$J=ce({props:_R,methods:{fieldClasses:function(t){return[t.class?t.class:"",t.thClass?t.thClass:""]},headClicked:function(t,r,s){if(!(this.stopIfBusy&&this.stopIfBusy(t))){{if(gk(t))return;if(pR(this.$el))return}Mt(t),this.$emit(Id,r.key,r,t,s)}},renderThead:function(){var t=this,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,s=Cn(this),d=s.computedFields,f=s.isSortable,p=s.isSelectable,v=s.headVariant,m=s.footVariant,w=s.headRowVariant,C=s.footRowVariant,y=this.$createElement;if(this.isStackedAlways||d.length===0)return y();var E=f||this.hasListener(Id),S=p?this.selectAllRows:tu,I=p?this.clearSelected:tu,M=function(K,Z){var re=K.label,J=K.labelHtml,G=K.variant,P=K.stickyColumn,X=K.key,he=null;!K.label.trim()&&!K.headerTitle&&(he=rf(K.key));var Ie={};E&&(Ie.click=function(Vt){t.headClicked(Vt,K,r)},Ie.keydown=function(Vt){var Qt=Vt.keyCode;(Qt===Pa||Qt===Ps)&&t.headClicked(Vt,K,r)});var De=f?t.sortTheadThAttrs(X,K,r):{},ke=f?t.sortTheadThClasses(X,K,r):null,je=f?t.sortTheadThLabel(X,K,r):null,de={class:[{"position-relative":je},t.fieldClasses(K),ke],props:{variant:G,stickyColumn:P},style:K.thStyle||{},attrs:gD(gD({tabindex:E&&K.sortable?"0":null,abbr:K.headerAbbr||null,title:K.headerTitle||null,"aria-colindex":Z+1,"aria-label":he},t.getThValues(null,X,K.thAttr,r?"foot":"head",{})),De),on:Ie,key:X},Me=[rv(X),rv(X.toLowerCase()),rv()];r&&(Me=[ov(X),ov(X.toLowerCase()),ov()].concat(BJ(Me)));var ze={label:re,column:X,field:K,isFoot:r,selectAllRows:S,clearSelected:I},hn=t.normalizeSlot(Me,ze)||y("div",{domProps:qn(J,re)}),Ke=je?y("span",{staticClass:"sr-only"}," (".concat(je,")")):null;return y(gR,de,[hn,Ke].filter(wt))},q=d.map(M).filter(wt),L=[];if(r)L.push(y(ys,{class:this.tfootTrClass,props:{variant:un(C)?w:C}},q));else{var B={columns:d.length,fields:d,selectAllRows:S,clearSelected:I};L.push(this.normalizeSlot(YG,B)||y()),L.push(y(ys,{class:this.theadTrClass,props:{variant:w}},q))}return y(r?kR:RJ,{class:(r?this.tfootClass:this.theadClass)||null,props:r?{footVariant:m||v||null}:{headVariant:v||null},key:r?"bv-tfoot":"bv-thead"},L)}}}),HJ={},UJ=ce({methods:{renderTopRow:function(){var t=this.computedFields,r=this.stacked,s=this.tbodyTrClass,d=this.tbodyTrAttr,f=this.$createElement;return!this.hasNormalizedSlot(lS)||r===!0||r===""?f():f(ys,{staticClass:"b-table-top-row",class:[He(s)?s(null,"row-top"):s],attrs:He(d)?d(null,"row-top"):d,key:"b-top-row"},[this.normalizeSlot(lS,{columns:t.length,fields:t})])}}});function mD(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function Mn(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?mD(Object(r),!0).forEach(function(s){GJ(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):mD(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function GJ(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var WJ=Ne(lt(Mn(Mn(Mn(Mn(Mn(Mn(Mn(Mn(Mn(Mn(Mn(Mn(Mn(Mn(Mn(Mn(Mn(Mn({},Un),ZN),XN),eR),jZ),tR),rR),sR),aR),lR),cR),uR),hR),fR),vR),wR),_R),HJ)),xa),KJ=ce({name:xa,mixins:[Ei,SZ,Qn,Nt,tJ,mJ,sD,$J,IJ,SJ,sD,YZ,fJ,nJ,LZ,zZ,aJ,FZ,UJ,PZ,BZ,oJ],props:WJ}),Al;function bD(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function Nl(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?bD(Object(r),!0).forEach(function(s){pr(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):bD(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function pr(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var cg=no("value",{type:Yr}),qJ=cg.mixin,YJ=cg.props,sv=cg.prop,vD=cg.event,sa=function(t){return!t.disabled},QJ=ce({name:lG,inject:{getBvTabs:{default:function(){return function(){return{}}}}},props:{controls:T(V),id:T(V),noKeyNav:T(Y,!1),posInSet:T(Yr),setSize:T(Yr),tab:T(),tabIndex:T(Yr)},computed:{bvTabs:function(){return this.getBvTabs()}},methods:{focus:function(){cn(this.$refs.link)},handleEvent:function(t){if(!this.tab.disabled){var r=t.type,s=t.keyCode,d=t.shiftKey;r==="click"?(Mt(t),this.$emit(_o,t)):r==="keydown"&&s===Ps?(Mt(t),this.$emit(_o,t)):r==="keydown"&&!this.noKeyNav&&([Md,Gv,Hf].indexOf(s)!==-1?(Mt(t),d||s===Hf?this.$emit(i2,t):this.$emit(u2,t)):[Hl,B2,$f].indexOf(s)!==-1&&(Mt(t),d||s===$f?this.$emit(a2,t):this.$emit(d2,t)))}}},render:function(t){var r=this.id,s=this.tabIndex,d=this.setSize,f=this.posInSet,p=this.controls,v=this.handleEvent,m=this.tab,w=m.title,C=m.localActive,y=m.disabled,E=m.titleItemClass,S=m.titleLinkClass,I=m.titleLinkAttributes,M=t(yu,{staticClass:"nav-link",class:[{active:C&&!y,disabled:y},S,C?this.bvTabs.activeNavItemClass:null],props:{disabled:y},attrs:Nl(Nl({},I),{},{id:r,role:"tab",tabindex:s,"aria-selected":C&&!y?"true":"false","aria-setsize":d,"aria-posinset":f,"aria-controls":p}),on:{click:v,keydown:v},ref:"link"},[this.tab.normalizeSlot(vu)||w]);return t("li",{staticClass:"nav-item",class:[E],attrs:{role:"presentation"}},[M])}}),ZJ=Eo(UN,["tabs","isNavBar","cardHeader"]),JJ=Ne(lt(Nl(Nl(Nl(Nl({},Un),YJ),ZJ),{},{activeNavItemClass:T(tt),activeTabClass:T(tt),card:T(Y,!1),contentClass:T(tt),end:T(Y,!1),lazy:T(Y,!1),navClass:T(tt),navWrapperClass:T(tt),noFade:T(Y,!1),noKeyNav:T(Y,!1),noNavStyle:T(Y,!1),tag:T(V,"div")})),KM),XJ=ce({name:KM,mixins:[Qn,qJ,Nt],provide:function(){var t=this;return{getBvTabs:function(){return t}}},props:JJ,data:function(){return{currentTab:jt(this[sv],-1),tabs:[],registeredTabs:[]}},computed:{fade:function(){return!this.noFade},localNavClass:function(){var t=[];return this.card&&this.vertical&&t.push("card-header","h-100","border-bottom-0","rounded-0"),[].concat(t,[this.navClass])}},watch:(Al={},pr(Al,sv,function(n,t){if(n!==t){n=jt(n,-1),t=jt(t,0);var r=this.tabs[n];r&&!r.disabled?this.activateTab(r):n<t?this.previousTab():this.nextTab()}}),pr(Al,"currentTab",function(t){var r=-1;this.tabs.forEach(function(s,d){d===t&&!s.disabled?(s.localActive=!0,r=d):s.localActive=!1}),this.$emit(vD,r)}),pr(Al,"tabs",function(t,r){var s=this;tn(t.map(function(d){return d[ds]}),r.map(function(d){return d[ds]}))||this.$nextTick(function(){s.$emit(mG,t.slice(),r.slice())})}),pr(Al,"registeredTabs",function(){this.updateTabs()}),Al),created:function(){this.$_observer=null},mounted:function(){this.setObserver(!0)},beforeDestroy:function(){this.setObserver(!1),this.tabs=[]},methods:{registerTab:function(t){kt(this.registeredTabs,t)||this.registeredTabs.push(t)},unregisterTab:function(t){this.registeredTabs=this.registeredTabs.slice().filter(function(r){return r!==t})},setObserver:function(){var t=this,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;if(this.$_observer&&this.$_observer.disconnect(),this.$_observer=null,r){var s=function(){t.$nextTick(function(){kn(function(){t.updateTabs()})})};this.$_observer=Kw(this.$refs.content,s,{childList:!0,subtree:!1,attributes:!0,attributeFilter:["id"]})}},getTabs:function(){var t=this.registeredTabs,r=[];if(wn&&t.length>0){var s=t.map(function(d){return"#".concat(d.safeId())}).join(", ");r=hs(s,this.$el).map(function(d){return d.id}).filter(wt)}return dR(t,function(d,f){return r.indexOf(d.safeId())-r.indexOf(f.safeId())})},updateTabs:function(){var t=this.getTabs(),r=t.indexOf(t.slice().reverse().find(function(d){return d.localActive&&!d.disabled}));if(r<0){var s=this.currentTab;s>=t.length?r=t.indexOf(t.slice().reverse().find(sa)):t[s]&&!t[s].disabled&&(r=s)}r<0&&(r=t.indexOf(t.find(sa))),t.forEach(function(d,f){d.localActive=f===r}),this.tabs=t,this.currentTab=r},getButtonForTab:function(t){return(this.$refs.buttons||[]).find(function(r){return r.tab===t})},updateButton:function(t){var r=this.getButtonForTab(t);r&&r.$forceUpdate&&r.$forceUpdate()},activateTab:function(t){var r=this.currentTab,s=this.tabs,d=!1;if(t){var f=s.indexOf(t);if(f!==r&&f>-1&&!t.disabled){var p=new Ou(fG,{cancelable:!0,vueTarget:this,componentId:this.safeId()});this.$emit(p.type,f,r,p),p.defaultPrevented||(this.currentTab=f,d=!0)}}return!d&&this[sv]!==r&&this.$emit(vD,r),d},deactivateTab:function(t){return t?this.activateTab(this.tabs.filter(function(r){return r!==t}).find(sa)):!1},focusButton:function(t){var r=this;this.$nextTick(function(){cn(r.getButtonForTab(t))})},emitTabClick:function(t,r){$p(r)&&t&&t.$emit&&!t.disabled&&t.$emit(_o,r)},clickTab:function(t,r){this.activateTab(t),this.emitTabClick(t,r)},firstTab:function(t){var r=this.tabs.find(sa);this.activateTab(r)&&t&&(this.focusButton(r),this.emitTabClick(r,t))},previousTab:function(t){var r=Wt(this.currentTab,0),s=this.tabs.slice(0,r).reverse().find(sa);this.activateTab(s)&&t&&(this.focusButton(s),this.emitTabClick(s,t))},nextTab:function(t){var r=Wt(this.currentTab,-1),s=this.tabs.slice(r+1).find(sa);this.activateTab(s)&&t&&(this.focusButton(s),this.emitTabClick(s,t))},lastTab:function(t){var r=this.tabs.slice().reverse().find(sa);this.activateTab(r)&&t&&(this.focusButton(r),this.emitTabClick(r,t))}},render:function(t){var r=this,s=this.align,d=this.card,f=this.end,p=this.fill,v=this.firstTab,m=this.justified,w=this.lastTab,C=this.nextTab,y=this.noKeyNav,E=this.noNavStyle,S=this.pills,I=this.previousTab,M=this.small,q=this.tabs,L=this.vertical,B=q.find(function(P){return P.localActive&&!P.disabled}),$=q.find(function(P){return!P.disabled}),K=q.map(function(P,X){var he,Ie=P.safeId,De=null;return y||(De=-1,(P===B||!B&&P===$)&&(De=null)),t(QJ,pr({props:{controls:Ie?Ie():null,id:P.controlledBy||(Ie?Ie("_BV_tab_button_"):null),noKeyNav:y,posInSet:X+1,setSize:q.length,tab:P,tabIndex:De},on:(he={},pr(he,_o,function(ke){r.clickTab(P,ke)}),pr(he,i2,v),pr(he,u2,I),pr(he,d2,C),pr(he,a2,w),he),key:P[ds]||X,ref:"buttons"},XP,!0))}),Z=t(qQ,{class:this.localNavClass,attrs:{role:"tablist",id:this.safeId("_BV_tab_controls_")},props:{fill:p,justified:m,align:s,tabs:!E&&!S,pills:!E&&S,vertical:L,small:M,cardHeader:d&&!L},ref:"nav"},[this.normalizeSlot(qG)||t(),K,this.normalizeSlot(KG)||t()]);Z=t("div",{class:[{"card-header":d&&!L&&!f,"card-footer":d&&!L&&f,"col-auto":L},this.navWrapperClass],key:"bv-tabs-nav"},[Z]);var re=this.normalizeSlot()||[],J=t();re.length===0&&(J=t("div",{class:["tab-pane","active",{"card-body":d}],key:"bv-empty-tab"},this.normalizeSlot(v2)));var G=t("div",{staticClass:"tab-content",class:[{col:L},this.contentClass],attrs:{id:this.safeId("_BV_tab_container_")},key:"bv-content",ref:"content"},[re,J]);return t(this.tag,{staticClass:"tabs",class:{row:L,"no-gutters":L&&d},attrs:{id:this.safeId()}},[f?G:t(),Z,f?t():G])}}),Wi,fd;function kD(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function wD(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?kD(Object(r),!0).forEach(function(s){hi(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):kD(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function hi(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var rp="active",_D=Ia+rp,eX=Ne(lt(wD(wD({},Un),{},(Wi={},hi(Wi,rp,T(Y,!1)),hi(Wi,"buttonId",T(V)),hi(Wi,"disabled",T(Y,!1)),hi(Wi,"lazy",T(Y,!1)),hi(Wi,"noBody",T(Y,!1)),hi(Wi,"tag",T(V,"div")),hi(Wi,"title",T(V)),hi(Wi,"titleItemClass",T(tt)),hi(Wi,"titleLinkAttributes",T(Kn)),hi(Wi,"titleLinkClass",T(tt)),Wi))),GM),tX=ce({name:GM,mixins:[Qn,Nt],inject:{getBvTabs:{default:function(){return function(){return{}}}}},props:eX,data:function(){return{localActive:this[rp]&&!this.disabled}},computed:{bvTabs:function(){return this.getBvTabs()},_isTab:function(){return!0},tabClasses:function(){var t=this.localActive,r=this.disabled;return[{active:t,disabled:r,"card-body":this.bvTabs.card&&!this.noBody},t?this.bvTabs.activeTabClass:null]},controlledBy:function(){return this.buttonId||this.safeId("__BV_tab_button__")},computedNoFade:function(){return!this.bvTabs.fade},computedLazy:function(){return this.bvTabs.lazy||this.lazy}},watch:(fd={},hi(fd,rp,function(n,t){n!==t&&(n?this.activate():this.deactivate()||this.$emit(_D,this.localActive))}),hi(fd,"disabled",function(t,r){if(t!==r){var s=this.bvTabs.firstTab;t&&this.localActive&&s&&(this.localActive=!1,s())}}),hi(fd,"localActive",function(t){this.$emit(_D,t)}),fd),mounted:function(){this.registerTab()},updated:function(){var t=this.bvTabs.updateButton;t&&this.hasNormalizedSlot(vu)&&t(this)},beforeDestroy:function(){this.unregisterTab()},methods:{registerTab:function(){var t=this.bvTabs.registerTab;t&&t(this)},unregisterTab:function(){var t=this.bvTabs.unregisterTab;t&&t(this)},activate:function(){var t=this.bvTabs.activateTab;return t&&!this.disabled?t(this):!1},deactivate:function(){var t=this.bvTabs.deactivateTab;return t&&this.localActive?t(this):!1}},render:function(t){var r=this.localActive,s=t(this.tag,{staticClass:"tab-pane",class:this.tabClasses,directives:[{name:"show",value:r}],attrs:{role:"tabpanel",id:this.safeId(),"aria-hidden":r?"false":"true","aria-labelledby":this.controlledBy||null},ref:"panel"},[r||!this.computedLazy?this.normalizeSlot():t()]);return t(_u,{props:{mode:"out-in",noFade:this.computedNoFade}},[s])}});function mf(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?mf=function(t){return typeof t}:mf=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},mf(n)}function nX(n){return iX(n)||rX(n)||oX()}function iX(n){if(Array.isArray(n)){for(var t=0,r=new Array(n.length);t<n.length;t++)r[t]=n[t];return r}}function rX(n){if(Symbol.iterator in Object(n)||Object.prototype.toString.call(n)==="[object Arguments]")return Array.from(n)}function oX(){throw new TypeError("Invalid attempt to spread non-iterable instance")}var Yh=typeof window<"u";function sX(n){return Array.isArray(n)||mf(n)==="object"?Object.freeze(n):n}function aX(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return n.reduce(function(r,s){var d=s.passengers[0],f=typeof d=="function"?d(t):s.passengers;return r.concat(f)},[])}function lX(n,t){return n.map(function(r,s){return[s,r]}).sort(function(r,s){return t(r[1],s[1])||r[0]-s[0]}).map(function(r){return r[1]})}function CD(n,t){return t.reduce(function(r,s){return n.hasOwnProperty(s)&&(r[s]=n[s]),r},{})}var CR={},cX={},dX={},uX=Gt.extend({data:function(){return{transports:CR,targets:cX,sources:dX,trackInstances:Yh}},methods:{open:function(t){if(!!Yh){var r=t.to,s=t.from,d=t.passengers,f=t.order,p=f===void 0?1/0:f;if(!(!r||!s||!d)){var v={to:r,from:s,passengers:sX(d),order:p},m=Object.keys(this.transports);m.indexOf(r)===-1&&Gt.set(this.transports,r,[]);var w=this.$_getTransportIndex(v),C=this.transports[r].slice(0);w===-1?C.push(v):C[w]=v,this.transports[r]=lX(C,function(y,E){return y.order-E.order})}}},close:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=t.to,d=t.from;if(!(!s||!d&&r===!1)&&!!this.transports[s])if(r)this.transports[s]=[];else{var f=this.$_getTransportIndex(t);if(f>=0){var p=this.transports[s].slice(0);p.splice(f,1),this.transports[s]=p}}},registerTarget:function(t,r,s){!Yh||(this.trackInstances&&!s&&this.targets[t]&&console.warn("[portal-vue]: Target ".concat(t," already exists")),this.$set(this.targets,t,Object.freeze([r])))},unregisterTarget:function(t){this.$delete(this.targets,t)},registerSource:function(t,r,s){!Yh||(this.trackInstances&&!s&&this.sources[t]&&console.warn("[portal-vue]: source ".concat(t," already exists")),this.$set(this.sources,t,Object.freeze([r])))},unregisterSource:function(t){this.$delete(this.sources,t)},hasTarget:function(t){return!!(this.targets[t]&&this.targets[t][0])},hasSource:function(t){return!!(this.sources[t]&&this.sources[t][0])},hasContentFor:function(t){return!!this.transports[t]&&!!this.transports[t].length},$_getTransportIndex:function(t){var r=t.to,s=t.from;for(var d in this.transports[r])if(this.transports[r][d].from===s)return+d;return-1}}}),Li=new uX(CR),hX=1,yR=Gt.extend({name:"portal",props:{disabled:{type:Boolean},name:{type:String,default:function(){return String(hX++)}},order:{type:Number,default:0},slim:{type:Boolean},slotProps:{type:Object,default:function(){return{}}},tag:{type:String,default:"DIV"},to:{type:String,default:function(){return String(Math.round(Math.random()*1e7))}}},created:function(){var t=this;this.$nextTick(function(){Li.registerSource(t.name,t)})},mounted:function(){this.disabled||this.sendUpdate()},updated:function(){this.disabled?this.clear():this.sendUpdate()},beforeDestroy:function(){Li.unregisterSource(this.name),this.clear()},watch:{to:function(t,r){r&&r!==t&&this.clear(r),this.sendUpdate()}},methods:{clear:function(t){var r={from:this.name,to:t||this.to};Li.close(r)},normalizeSlots:function(){return this.$scopedSlots.default?[this.$scopedSlots.default]:this.$slots.default},normalizeOwnChildren:function(t){return typeof t=="function"?t(this.slotProps):t},sendUpdate:function(){var t=this.normalizeSlots();if(t){var r={from:this.name,to:this.to,passengers:nX(t),order:this.order};Li.open(r)}else this.clear()}},render:function(t){var r=this.$slots.default||this.$scopedSlots.default||[],s=this.tag;return r&&this.disabled?r.length<=1&&this.slim?this.normalizeOwnChildren(r)[0]:t(s,[this.normalizeOwnChildren(r)]):this.slim?t():t(s,{class:{"v-portal":!0},style:{display:"none"},key:"v-portal-placeholder"})}}),AR=Gt.extend({name:"portalTarget",props:{multiple:{type:Boolean,default:!1},name:{type:String,required:!0},slim:{type:Boolean,default:!1},slotProps:{type:Object,default:function(){return{}}},tag:{type:String,default:"div"},transition:{type:[String,Object,Function]}},data:function(){return{transports:Li.transports,firstRender:!0}},created:function(){var t=this;this.$nextTick(function(){Li.registerTarget(t.name,t)})},watch:{ownTransports:function(){this.$emit("change",this.children().length>0)},name:function(t,r){Li.unregisterTarget(r),Li.registerTarget(t,this)}},mounted:function(){var t=this;this.transition&&this.$nextTick(function(){t.firstRender=!1})},beforeDestroy:function(){Li.unregisterTarget(this.name)},computed:{ownTransports:function(){var t=this.transports[this.name]||[];return this.multiple?t:t.length===0?[]:[t[t.length-1]]},passengers:function(){return aX(this.ownTransports,this.slotProps)}},methods:{children:function(){return this.passengers.length!==0?this.passengers:this.$scopedSlots.default?this.$scopedSlots.default(this.slotProps):this.$slots.default||[]},noWrapper:function(){var t=this.slim&&!this.transition;return t&&this.children().length>1&&console.warn("[portal-vue]: PortalTarget with `slim` option received more than one child element."),t}},render:function(t){var r=this.noWrapper(),s=this.children(),d=this.transition||this.tag;return r?s[0]:this.slim&&!d?t():t(d,{props:{tag:this.transition&&this.tag?this.tag:void 0},class:{"vue-portal-target":!0}},s)}}),fX=0,pX=["disabled","name","order","slim","slotProps","tag","to"],gX=["multiple","transition"];Gt.extend({name:"MountingPortal",inheritAttrs:!1,props:{append:{type:[Boolean,String]},bail:{type:Boolean},mountTo:{type:String,required:!0},disabled:{type:Boolean},name:{type:String,default:function(){return"mounted_"+String(fX++)}},order:{type:Number,default:0},slim:{type:Boolean},slotProps:{type:Object,default:function(){return{}}},tag:{type:String,default:"DIV"},to:{type:String,default:function(){return String(Math.round(Math.random()*1e7))}},multiple:{type:Boolean,default:!1},targetSlim:{type:Boolean},targetSlotProps:{type:Object,default:function(){return{}}},targetTag:{type:String,default:"div"},transition:{type:[String,Object,Function]}},created:function(){if(!(typeof document>"u")){var t=document.querySelector(this.mountTo);if(!t){console.error("[portal-vue]: Mount Point '".concat(this.mountTo,"' not found in document"));return}var r=this.$props;if(Li.targets[r.name]){r.bail?console.warn("[portal-vue]: Target ".concat(r.name,` is already mounted.
        Aborting because 'bail: true' is set`)):this.portalTarget=Li.targets[r.name];return}var s=r.append;if(s){var d=typeof s=="string"?s:"DIV",f=document.createElement(d);t.appendChild(f),t=f}var p=CD(this.$props,gX);p.slim=this.targetSlim,p.tag=this.targetTag,p.slotProps=this.targetSlotProps,p.name=this.to,this.portalTarget=new AR({el:t,parent:this.$parent||this,propsData:p})}},beforeDestroy:function(){var t=this.portalTarget;if(this.append){var r=t.$el;r.parentNode.removeChild(r)}t.$destroy()},render:function(t){if(!this.portalTarget)return console.warn("[portal-vue] Target wasn't mounted"),t();if(!this.$scopedSlots.manual){var r=CD(this.$props,pX);return t(yR,{props:r,attrs:this.$attrs,on:this.$listeners,scopedSlots:this.$scopedSlots},this.$slots.default)}var s=this.$scopedSlots.manual({to:this.to});return Array.isArray(s)&&(s=s[0]),s||t()}});var mX=ce({mixins:[Nt],data:function(){return{name:"b-toaster"}},methods:{onAfterEnter:function(t){var r=this;kn(function(){gi(t,"".concat(r.name,"-enter-to"))})}},render:function(t){return t("transition-group",{props:{tag:"div",name:this.name},on:{afterEnter:this.onAfterEnter}},this.normalizeSlot())}}),bX=Ne({ariaAtomic:T(V),ariaLive:T(V),name:T(V,void 0,!0),role:T(V)},Dd),vX=ce({name:Dd,mixins:[To],props:bX,data:function(){return{doRender:!1,dead:!1,staticName:this.name}},beforeMount:function(){var t=this.name;this.staticName=t,Li.hasTarget(t)?(Ci('A "<portal-target>" with name "'.concat(t,'" already exists in the document.'),Dd),this.dead=!0):this.doRender=!0},beforeDestroy:function(){this.doRender&&this.emitOnRoot(Hn(Dd,n2),this.name)},destroyed:function(){var t=this.$el;t&&t.parentNode&&t.parentNode.removeChild(t)},render:function(t){var r=t("div",{class:["d-none",{"b-dead-toaster":this.dead}]});if(this.doRender){var s=t(AR,{staticClass:"b-toaster-slot",props:{name:this.staticName,multiple:!0,tag:"div",slim:!1,transition:mX}});r=t("div",{staticClass:"b-toaster",class:[this.staticName],attrs:{id:this.staticName,role:this.role||null,"aria-live":this.ariaLive,"aria-atomic":this.ariaAtomic}},[s])}return r}}),El;function yD(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,s)}return r}function Wr(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?yD(Object(r),!0).forEach(function(s){Ol(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):yD(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function Ol(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var dg=no("visible",{type:Y,defaultValue:!1,event:Xr}),kX=dg.mixin,wX=dg.props,av=dg.prop,_X=dg.event,AD=1e3,ER=Up(Cu,["href","to"]),CX=Ne(lt(Wr(Wr(Wr(Wr({},Un),wX),ER),{},{appendToast:T(Y,!1),autoHideDelay:T(Ze,5e3),bodyClass:T(tt),headerClass:T(tt),headerTag:T(V,"header"),isStatus:T(Y,!1),noAutoHide:T(Y,!1),noCloseButton:T(Y,!1),noFade:T(Y,!1),noHoverPause:T(Y,!1),solid:T(Y,!1),static:T(Y,!1),title:T(V),toastClass:T(tt),toaster:T(V,"b-toaster-top-right"),variant:T(V)})),bd),yX=ce({name:bd,mixins:[Ei,Qn,kX,To,Nt,r_],inheritAttrs:!1,props:CX,data:function(){return{isMounted:!1,doRender:!1,localShow:!1,isTransitioning:!1,isHiding:!1,order:0,dismissStarted:0,resumeDismiss:0}},computed:{toastClasses:function(){var t=this.appendToast,r=this.variant;return Ol({"b-toast-solid":this.solid,"b-toast-append":t,"b-toast-prepend":!t},"b-toast-".concat(r),r)},slotScope:function(){var t=this.hide;return{hide:t}},computedDuration:function(){return Wt(jt(this.autoHideDelay,0),AD)},computedToaster:function(){return String(this.toaster)},transitionHandlers:function(){return{beforeEnter:this.onBeforeEnter,afterEnter:this.onAfterEnter,beforeLeave:this.onBeforeLeave,afterLeave:this.onAfterLeave}},computedAttrs:function(){return Wr(Wr({},this.bvAttrs),{},{id:this.safeId(),tabindex:"0"})}},watch:(El={},Ol(El,av,function(n){this[n?"show":"hide"]()}),Ol(El,"localShow",function(t){t!==this[av]&&this.$emit(_X,t)}),Ol(El,"toaster",function(){this.$nextTick(this.ensureToaster)}),Ol(El,"static",function(t){t&&this.localShow&&this.ensureToaster()}),El),created:function(){this.$_dismissTimer=null},mounted:function(){var t=this;this.isMounted=!0,this.$nextTick(function(){t[av]&&kn(function(){t.show()})}),this.listenOnRoot($n(bd,wi),function(r){r===t.safeId()&&t.show()}),this.listenOnRoot($n(bd,tr),function(r){(!r||r===t.safeId())&&t.hide()}),this.listenOnRoot(Hn(Dd,n2),function(r){r===t.computedToaster&&t.hide()})},beforeDestroy:function(){this.clearDismissTimer()},methods:{show:function(){var t=this;if(!this.localShow){this.ensureToaster();var r=this.buildEvent(wi);this.emitEvent(r),this.dismissStarted=this.resumeDismiss=0,this.order=Date.now()*(this.appendToast?1:-1),this.isHiding=!1,this.doRender=!0,this.$nextTick(function(){kn(function(){t.localShow=!0})})}},hide:function(){var t=this;if(this.localShow){var r=this.buildEvent(tr);this.emitEvent(r),this.setHoverHandler(!1),this.dismissStarted=this.resumeDismiss=0,this.clearDismissTimer(),this.isHiding=!0,kn(function(){t.localShow=!1})}},buildEvent:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return new Ou(t,Wr(Wr({cancelable:!1,target:this.$el||null,relatedTarget:null},r),{},{vueTarget:this,componentId:this.safeId()}))},emitEvent:function(t){var r=t.type;this.emitOnRoot(Hn(bd,r),t),this.$emit(r,t)},ensureToaster:function(){if(!this.static){var t=this.computedToaster;if(!Li.hasTarget(t)){var r=document.createElement("div");document.body.appendChild(r);var s=Pu(this.bvEventRoot,vX,{propsData:{name:t}});s.$mount(r)}}},startDismissTimer:function(){this.clearDismissTimer(),this.noAutoHide||(this.$_dismissTimer=setTimeout(this.hide,this.resumeDismiss||this.computedDuration),this.dismissStarted=Date.now(),this.resumeDismiss=0)},clearDismissTimer:function(){clearTimeout(this.$_dismissTimer),this.$_dismissTimer=null},setHoverHandler:function(t){var r=this.$refs["b-toast"];eu(t,r,"mouseenter",this.onPause,Ut),eu(t,r,"mouseleave",this.onUnPause,Ut)},onPause:function(){if(!(this.noAutoHide||this.noHoverPause||!this.$_dismissTimer||this.resumeDismiss)){var t=Date.now()-this.dismissStarted;t>0&&(this.clearDismissTimer(),this.resumeDismiss=Wt(this.computedDuration-t,AD))}},onUnPause:function(){if(this.noAutoHide||this.noHoverPause||!this.resumeDismiss){this.resumeDismiss=this.dismissStarted=0;return}this.startDismissTimer()},onLinkClick:function(){var t=this;this.$nextTick(function(){kn(function(){t.hide()})})},onBeforeEnter:function(){this.isTransitioning=!0},onAfterEnter:function(){this.isTransitioning=!1;var t=this.buildEvent(_r);this.emitEvent(t),this.startDismissTimer(),this.setHoverHandler(!0)},onBeforeLeave:function(){this.isTransitioning=!0},onAfterLeave:function(){this.isTransitioning=!1,this.order=0,this.resumeDismiss=this.dismissStarted=0;var t=this.buildEvent(Rn);this.emitEvent(t),this.doRender=!1},makeToast:function(t){var r=this,s=this.title,d=this.slotScope,f=Lw(this),p=[],v=this.normalizeSlot(QG,d);v?p.push(v):s&&p.push(t("strong",{staticClass:"mr-2"},s)),this.noCloseButton||p.push(t(Bw,{staticClass:"ml-auto mb-1",on:{click:function(){r.hide()}}}));var m=t();p.length>0&&(m=t(this.headerTag,{staticClass:"toast-header",class:this.headerClass},p));var w=t(f?yu:"div",{staticClass:"toast-body",class:this.bodyClass,props:f?bi(ER,this):{},on:f?{click:this.onLinkClick}:{}},this.normalizeSlot(eo,d));return t("div",{staticClass:"toast",class:this.toastClass,attrs:this.computedAttrs,key:"toast-".concat(this[ds]),ref:"toast"},[m,w])}},render:function(t){if(!this.doRender||!this.isMounted)return t();var r=this.order,s=this.static,d=this.isHiding,f=this.isStatus,p="b-toast-".concat(this[ds]),v=t("div",{staticClass:"b-toast",class:this.toastClasses,attrs:Wr(Wr({},s?{}:this.scopedStyleAttrs),{},{id:this.safeId("_toast_outer"),role:d?null:f?"status":"alert","aria-live":d?null:f?"polite":"assertive","aria-atomic":d?null:"true"}),key:p,ref:"b-toast"},[t(_u,{props:{noFade:this.noFade},on:this.transitionHandlers},[this.localShow?this.makeToast(t):t()])]);return t(yR,{props:{name:p,to:this.computedToaster,order:r,slim:!0,disabled:s}},[v])}});const pt=(n,t)=>{const r=n.__vccOpts||n;for(const[s,d]of t)r[s]=d;return r},AX={components:{BFormInput:La},data(){return{search:null}},methods:{},watch:{search(n){n?this.$emit("search",n):this.$emit("search",null)}}},EX=n=>(Kt("data-v-b1eee9eb"),n=n(),qt(),n),TX={class:"s-input-wrapper"},xX=EX(()=>j("svg",{class:"s-input-icon",width:"22",height:"22",viewBox:"0 0 24 24"},[j("path",{fill:"currentColor",d:"M10.77 18.3a7.53 7.53 0 1 1 7.53-7.53a7.53 7.53 0 0 1-7.53 7.53Zm0-13.55a6 6 0 1 0 6 6a6 6 0 0 0-6-6Z"}),j("path",{fill:"currentColor",d:"M20 20.75a.74.74 0 0 1-.53-.22l-4.13-4.13a.75.75 0 0 1 1.06-1.06l4.13 4.13a.75.75 0 0 1 0 1.06a.74.74 0 0 1-.53.22Z"})],-1));function SX(n,t,r,s,d,f){const p=ae("b-form-input");return oe(),be("div",TX,[F(p,{modelValue:d.search,"onUpdate:modelValue":t[0]||(t[0]=v=>d.search=v),class:"s-input",placeholder:"\u0438\u0441\u043A\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E"},null,8,["modelValue"]),xX])}const OX=pt(AX,[["render",SX],["__scopeId","data-v-b1eee9eb"]]);const DX={components:{SearchInput:OX},data(){return{search:null}},methods:{}},TR=n=>(Kt("data-v-8b08daa1"),n=n(),qt(),n),IX={class:"ap-header"},PX=TR(()=>j("div",null,null,-1)),MX=TR(()=>j("div",{class:"ap-title-wrapper"},[j("h2",{class:"ap-title"}," \u041C\u0438\u043D\u0438-\u0441\u0431\u043E\u0440\u043D\u0438\u043A \u0441\u0442\u0430\u0442\u0435\u0439 \u043E\u0431 \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u0438 "),j("span",{class:"ap-subtitle"}," \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u044D\u0442\u043E \u0442\u043E, \u0447\u0442\u043E \u0438\u0437\u043C\u0435\u043D\u0438\u0442 \u0432\u0430\u0448\u0435 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435 \u043A \u043E\u043A\u0440\u0443\u0436\u0430\u044E\u0449\u0435\u043C\u0443 \u043C\u0438\u0440\u0443 ")],-1)),NX={class:"ap-search-wrapper"},RX={class:"mobile-search"};function BX(n,t,r,s,d,f){const p=ae("search-input");return oe(),be(Ye,null,[j("header",IX,[PX,MX,j("div",NX,[F(p,{onSearch:t[0]||(t[0]=v=>n.$emit("search",v)),class:"ap-search"})])]),j("div",RX,[F(p,{onSearch:t[1]||(t[1]=v=>n.$emit("search",v)),class:"ap-search-2"})])],64)}const LX=pt(DX,[["render",BX],["__scopeId","data-v-8b08daa1"]]);function xR(n,t){return function(){return n.apply(t,arguments)}}const{toString:SR}=Object.prototype,{getPrototypeOf:l_}=Object,c_=(n=>t=>{const r=SR.call(t);return n[r]||(n[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),xo=n=>(n=n.toLowerCase(),t=>c_(t)===n),ug=n=>t=>typeof t===n,{isArray:Ec}=Array,ou=ug("undefined");function jX(n){return n!==null&&!ou(n)&&n.constructor!==null&&!ou(n.constructor)&&As(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const OR=xo("ArrayBuffer");function zX(n){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(n):t=n&&n.buffer&&OR(n.buffer),t}const FX=ug("string"),As=ug("function"),DR=ug("number"),d_=n=>n!==null&&typeof n=="object",VX=n=>n===!0||n===!1,bf=n=>{if(c_(n)!=="object")return!1;const t=l_(n);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},$X=xo("Date"),HX=xo("File"),UX=xo("Blob"),GX=xo("FileList"),WX=n=>d_(n)&&As(n.pipe),KX=n=>{const t="[object FormData]";return n&&(typeof FormData=="function"&&n instanceof FormData||SR.call(n)===t||As(n.toString)&&n.toString()===t)},qX=xo("URLSearchParams"),YX=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Mu(n,t,{allOwnKeys:r=!1}={}){if(n===null||typeof n>"u")return;let s,d;if(typeof n!="object"&&(n=[n]),Ec(n))for(s=0,d=n.length;s<d;s++)t.call(null,n[s],s,n);else{const f=r?Object.getOwnPropertyNames(n):Object.keys(n),p=f.length;let v;for(s=0;s<p;s++)v=f[s],t.call(null,n[v],v,n)}}function IR(n,t){t=t.toLowerCase();const r=Object.keys(n);let s=r.length,d;for(;s-- >0;)if(d=r[s],t===d.toLowerCase())return d;return null}const PR=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),MR=n=>!ou(n)&&n!==PR;function vk(){const{caseless:n}=MR(this)&&this||{},t={},r=(s,d)=>{const f=n&&IR(t,d)||d;bf(t[f])&&bf(s)?t[f]=vk(t[f],s):bf(s)?t[f]=vk({},s):Ec(s)?t[f]=s.slice():t[f]=s};for(let s=0,d=arguments.length;s<d;s++)arguments[s]&&Mu(arguments[s],r);return t}const QX=(n,t,r,{allOwnKeys:s}={})=>(Mu(t,(d,f)=>{r&&As(d)?n[f]=xR(d,r):n[f]=d},{allOwnKeys:s}),n),ZX=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),JX=(n,t,r,s)=>{n.prototype=Object.create(t.prototype,s),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:t.prototype}),r&&Object.assign(n.prototype,r)},XX=(n,t,r,s)=>{let d,f,p;const v={};if(t=t||{},n==null)return t;do{for(d=Object.getOwnPropertyNames(n),f=d.length;f-- >0;)p=d[f],(!s||s(p,n,t))&&!v[p]&&(t[p]=n[p],v[p]=!0);n=r!==!1&&l_(n)}while(n&&(!r||r(n,t))&&n!==Object.prototype);return t},eee=(n,t,r)=>{n=String(n),(r===void 0||r>n.length)&&(r=n.length),r-=t.length;const s=n.indexOf(t,r);return s!==-1&&s===r},tee=n=>{if(!n)return null;if(Ec(n))return n;let t=n.length;if(!DR(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=n[t];return r},nee=(n=>t=>n&&t instanceof n)(typeof Uint8Array<"u"&&l_(Uint8Array)),iee=(n,t)=>{const s=(n&&n[Symbol.iterator]).call(n);let d;for(;(d=s.next())&&!d.done;){const f=d.value;t.call(n,f[0],f[1])}},ree=(n,t)=>{let r;const s=[];for(;(r=n.exec(t))!==null;)s.push(r);return s},oee=xo("HTMLFormElement"),see=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,s,d){return s.toUpperCase()+d}),ED=(({hasOwnProperty:n})=>(t,r)=>n.call(t,r))(Object.prototype),aee=xo("RegExp"),NR=(n,t)=>{const r=Object.getOwnPropertyDescriptors(n),s={};Mu(r,(d,f)=>{t(d,f,n)!==!1&&(s[f]=d)}),Object.defineProperties(n,s)},lee=n=>{NR(n,(t,r)=>{if(As(n)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const s=n[r];if(!!As(s)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},cee=(n,t)=>{const r={},s=d=>{d.forEach(f=>{r[f]=!0})};return Ec(n)?s(n):s(String(n).split(t)),r},dee=()=>{},uee=(n,t)=>(n=+n,Number.isFinite(n)?n:t),lv="abcdefghijklmnopqrstuvwxyz",TD="0123456789",RR={DIGIT:TD,ALPHA:lv,ALPHA_DIGIT:lv+lv.toUpperCase()+TD},hee=(n=16,t=RR.ALPHA_DIGIT)=>{let r="";const{length:s}=t;for(;n--;)r+=t[Math.random()*s|0];return r};function fee(n){return!!(n&&As(n.append)&&n[Symbol.toStringTag]==="FormData"&&n[Symbol.iterator])}const pee=n=>{const t=new Array(10),r=(s,d)=>{if(d_(s)){if(t.indexOf(s)>=0)return;if(!("toJSON"in s)){t[d]=s;const f=Ec(s)?[]:{};return Mu(s,(p,v)=>{const m=r(p,d+1);!ou(m)&&(f[v]=m)}),t[d]=void 0,f}}return s};return r(n,0)},se={isArray:Ec,isArrayBuffer:OR,isBuffer:jX,isFormData:KX,isArrayBufferView:zX,isString:FX,isNumber:DR,isBoolean:VX,isObject:d_,isPlainObject:bf,isUndefined:ou,isDate:$X,isFile:HX,isBlob:UX,isRegExp:aee,isFunction:As,isStream:WX,isURLSearchParams:qX,isTypedArray:nee,isFileList:GX,forEach:Mu,merge:vk,extend:QX,trim:YX,stripBOM:ZX,inherits:JX,toFlatObject:XX,kindOf:c_,kindOfTest:xo,endsWith:eee,toArray:tee,forEachEntry:iee,matchAll:ree,isHTMLForm:oee,hasOwnProperty:ED,hasOwnProp:ED,reduceDescriptors:NR,freezeMethods:lee,toObjectSet:cee,toCamelCase:see,noop:dee,toFiniteNumber:uee,findKey:IR,global:PR,isContextDefined:MR,ALPHABET:RR,generateString:hee,isSpecCompliantForm:fee,toJSONObject:pee};function mt(n,t,r,s,d){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),s&&(this.request=s),d&&(this.response=d)}se.inherits(mt,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:se.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const BR=mt.prototype,LR={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{LR[n]={value:n}});Object.defineProperties(mt,LR);Object.defineProperty(BR,"isAxiosError",{value:!0});mt.from=(n,t,r,s,d,f)=>{const p=Object.create(BR);return se.toFlatObject(n,p,function(m){return m!==Error.prototype},v=>v!=="isAxiosError"),mt.call(p,n.message,t,r,s,d),p.cause=n,p.name=n.name,f&&Object.assign(p,f),p};const gee=null;function kk(n){return se.isPlainObject(n)||se.isArray(n)}function jR(n){return se.endsWith(n,"[]")?n.slice(0,-2):n}function xD(n,t,r){return n?n.concat(t).map(function(d,f){return d=jR(d),!r&&f?"["+d+"]":d}).join(r?".":""):t}function mee(n){return se.isArray(n)&&!n.some(kk)}const bee=se.toFlatObject(se,{},null,function(t){return/^is[A-Z]/.test(t)});function hg(n,t,r){if(!se.isObject(n))throw new TypeError("target must be an object");t=t||new FormData,r=se.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(M,q){return!se.isUndefined(q[M])});const s=r.metaTokens,d=r.visitor||C,f=r.dots,p=r.indexes,m=(r.Blob||typeof Blob<"u"&&Blob)&&se.isSpecCompliantForm(t);if(!se.isFunction(d))throw new TypeError("visitor must be a function");function w(I){if(I===null)return"";if(se.isDate(I))return I.toISOString();if(!m&&se.isBlob(I))throw new mt("Blob is not supported. Use a Buffer instead.");return se.isArrayBuffer(I)||se.isTypedArray(I)?m&&typeof Blob=="function"?new Blob([I]):Buffer.from(I):I}function C(I,M,q){let L=I;if(I&&!q&&typeof I=="object"){if(se.endsWith(M,"{}"))M=s?M:M.slice(0,-2),I=JSON.stringify(I);else if(se.isArray(I)&&mee(I)||(se.isFileList(I)||se.endsWith(M,"[]"))&&(L=se.toArray(I)))return M=jR(M),L.forEach(function($,K){!(se.isUndefined($)||$===null)&&t.append(p===!0?xD([M],K,f):p===null?M:M+"[]",w($))}),!1}return kk(I)?!0:(t.append(xD(q,M,f),w(I)),!1)}const y=[],E=Object.assign(bee,{defaultVisitor:C,convertValue:w,isVisitable:kk});function S(I,M){if(!se.isUndefined(I)){if(y.indexOf(I)!==-1)throw Error("Circular reference detected in "+M.join("."));y.push(I),se.forEach(I,function(L,B){(!(se.isUndefined(L)||L===null)&&d.call(t,L,se.isString(B)?B.trim():B,M,E))===!0&&S(L,M?M.concat(B):[B])}),y.pop()}}if(!se.isObject(n))throw new TypeError("data must be an object");return S(n),t}function SD(n){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(s){return t[s]})}function u_(n,t){this._pairs=[],n&&hg(n,this,t)}const zR=u_.prototype;zR.append=function(t,r){this._pairs.push([t,r])};zR.toString=function(t){const r=t?function(s){return t.call(this,s,SD)}:SD;return this._pairs.map(function(d){return r(d[0])+"="+r(d[1])},"").join("&")};function vee(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function FR(n,t,r){if(!t)return n;const s=r&&r.encode||vee,d=r&&r.serialize;let f;if(d?f=d(t,r):f=se.isURLSearchParams(t)?t.toString():new u_(t,r).toString(s),f){const p=n.indexOf("#");p!==-1&&(n=n.slice(0,p)),n+=(n.indexOf("?")===-1?"?":"&")+f}return n}class kee{constructor(){this.handlers=[]}use(t,r,s){return this.handlers.push({fulfilled:t,rejected:r,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){se.forEach(this.handlers,function(s){s!==null&&t(s)})}}const OD=kee,VR={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},wee=typeof URLSearchParams<"u"?URLSearchParams:u_,_ee=typeof FormData<"u"?FormData:null,Cee=typeof Blob<"u"?Blob:null,yee=(()=>{let n;return typeof navigator<"u"&&((n=navigator.product)==="ReactNative"||n==="NativeScript"||n==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Aee=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),qr={isBrowser:!0,classes:{URLSearchParams:wee,FormData:_ee,Blob:Cee},isStandardBrowserEnv:yee,isStandardBrowserWebWorkerEnv:Aee,protocols:["http","https","file","blob","url","data"]};function Eee(n,t){return hg(n,new qr.classes.URLSearchParams,Object.assign({visitor:function(r,s,d,f){return qr.isNode&&se.isBuffer(r)?(this.append(s,r.toString("base64")),!1):f.defaultVisitor.apply(this,arguments)}},t))}function Tee(n){return se.matchAll(/\w+|\[(\w*)]/g,n).map(t=>t[0]==="[]"?"":t[1]||t[0])}function xee(n){const t={},r=Object.keys(n);let s;const d=r.length;let f;for(s=0;s<d;s++)f=r[s],t[f]=n[f];return t}function $R(n){function t(r,s,d,f){let p=r[f++];const v=Number.isFinite(+p),m=f>=r.length;return p=!p&&se.isArray(d)?d.length:p,m?(se.hasOwnProp(d,p)?d[p]=[d[p],s]:d[p]=s,!v):((!d[p]||!se.isObject(d[p]))&&(d[p]=[]),t(r,s,d[p],f)&&se.isArray(d[p])&&(d[p]=xee(d[p])),!v)}if(se.isFormData(n)&&se.isFunction(n.entries)){const r={};return se.forEachEntry(n,(s,d)=>{t(Tee(s),d,r,0)}),r}return null}const See={"Content-Type":void 0};function Oee(n,t,r){if(se.isString(n))try{return(t||JSON.parse)(n),se.trim(n)}catch(s){if(s.name!=="SyntaxError")throw s}return(r||JSON.stringify)(n)}const fg={transitional:VR,adapter:["xhr","http"],transformRequest:[function(t,r){const s=r.getContentType()||"",d=s.indexOf("application/json")>-1,f=se.isObject(t);if(f&&se.isHTMLForm(t)&&(t=new FormData(t)),se.isFormData(t))return d&&d?JSON.stringify($R(t)):t;if(se.isArrayBuffer(t)||se.isBuffer(t)||se.isStream(t)||se.isFile(t)||se.isBlob(t))return t;if(se.isArrayBufferView(t))return t.buffer;if(se.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let v;if(f){if(s.indexOf("application/x-www-form-urlencoded")>-1)return Eee(t,this.formSerializer).toString();if((v=se.isFileList(t))||s.indexOf("multipart/form-data")>-1){const m=this.env&&this.env.FormData;return hg(v?{"files[]":t}:t,m&&new m,this.formSerializer)}}return f||d?(r.setContentType("application/json",!1),Oee(t)):t}],transformResponse:[function(t){const r=this.transitional||fg.transitional,s=r&&r.forcedJSONParsing,d=this.responseType==="json";if(t&&se.isString(t)&&(s&&!this.responseType||d)){const p=!(r&&r.silentJSONParsing)&&d;try{return JSON.parse(t)}catch(v){if(p)throw v.name==="SyntaxError"?mt.from(v,mt.ERR_BAD_RESPONSE,this,null,this.response):v}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:qr.classes.FormData,Blob:qr.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};se.forEach(["delete","get","head"],function(t){fg.headers[t]={}});se.forEach(["post","put","patch"],function(t){fg.headers[t]=se.merge(See)});const h_=fg,Dee=se.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Iee=n=>{const t={};let r,s,d;return n&&n.split(`
`).forEach(function(p){d=p.indexOf(":"),r=p.substring(0,d).trim().toLowerCase(),s=p.substring(d+1).trim(),!(!r||t[r]&&Dee[r])&&(r==="set-cookie"?t[r]?t[r].push(s):t[r]=[s]:t[r]=t[r]?t[r]+", "+s:s)}),t},DD=Symbol("internals");function pd(n){return n&&String(n).trim().toLowerCase()}function vf(n){return n===!1||n==null?n:se.isArray(n)?n.map(vf):String(n)}function Pee(n){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=r.exec(n);)t[s[1]]=s[2];return t}function Mee(n){return/^[-_a-zA-Z]+$/.test(n.trim())}function cv(n,t,r,s,d){if(se.isFunction(s))return s.call(this,t,r);if(d&&(t=r),!!se.isString(t)){if(se.isString(s))return t.indexOf(s)!==-1;if(se.isRegExp(s))return s.test(t)}}function Nee(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,s)=>r.toUpperCase()+s)}function Ree(n,t){const r=se.toCamelCase(" "+t);["get","set","has"].forEach(s=>{Object.defineProperty(n,s+r,{value:function(d,f,p){return this[s].call(this,t,d,f,p)},configurable:!0})})}class pg{constructor(t){t&&this.set(t)}set(t,r,s){const d=this;function f(v,m,w){const C=pd(m);if(!C)throw new Error("header name must be a non-empty string");const y=se.findKey(d,C);(!y||d[y]===void 0||w===!0||w===void 0&&d[y]!==!1)&&(d[y||m]=vf(v))}const p=(v,m)=>se.forEach(v,(w,C)=>f(w,C,m));return se.isPlainObject(t)||t instanceof this.constructor?p(t,r):se.isString(t)&&(t=t.trim())&&!Mee(t)?p(Iee(t),r):t!=null&&f(r,t,s),this}get(t,r){if(t=pd(t),t){const s=se.findKey(this,t);if(s){const d=this[s];if(!r)return d;if(r===!0)return Pee(d);if(se.isFunction(r))return r.call(this,d,s);if(se.isRegExp(r))return r.exec(d);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=pd(t),t){const s=se.findKey(this,t);return!!(s&&this[s]!==void 0&&(!r||cv(this,this[s],s,r)))}return!1}delete(t,r){const s=this;let d=!1;function f(p){if(p=pd(p),p){const v=se.findKey(s,p);v&&(!r||cv(s,s[v],v,r))&&(delete s[v],d=!0)}}return se.isArray(t)?t.forEach(f):f(t),d}clear(t){const r=Object.keys(this);let s=r.length,d=!1;for(;s--;){const f=r[s];(!t||cv(this,this[f],f,t,!0))&&(delete this[f],d=!0)}return d}normalize(t){const r=this,s={};return se.forEach(this,(d,f)=>{const p=se.findKey(s,f);if(p){r[p]=vf(d),delete r[f];return}const v=t?Nee(f):String(f).trim();v!==f&&delete r[f],r[v]=vf(d),s[v]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return se.forEach(this,(s,d)=>{s!=null&&s!==!1&&(r[d]=t&&se.isArray(s)?s.join(", "):s)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const s=new this(t);return r.forEach(d=>s.set(d)),s}static accessor(t){const s=(this[DD]=this[DD]={accessors:{}}).accessors,d=this.prototype;function f(p){const v=pd(p);s[v]||(Ree(d,p),s[v]=!0)}return se.isArray(t)?t.forEach(f):f(t),this}}pg.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);se.freezeMethods(pg.prototype);se.freezeMethods(pg);const vo=pg;function dv(n,t){const r=this||h_,s=t||r,d=vo.from(s.headers);let f=s.data;return se.forEach(n,function(v){f=v.call(r,f,d.normalize(),t?t.status:void 0)}),d.normalize(),f}function HR(n){return!!(n&&n.__CANCEL__)}function Nu(n,t,r){mt.call(this,n==null?"canceled":n,mt.ERR_CANCELED,t,r),this.name="CanceledError"}se.inherits(Nu,mt,{__CANCEL__:!0});function Bee(n,t,r){const s=r.config.validateStatus;!r.status||!s||s(r.status)?n(r):t(new mt("Request failed with status code "+r.status,[mt.ERR_BAD_REQUEST,mt.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}const Lee=qr.isStandardBrowserEnv?function(){return{write:function(r,s,d,f,p,v){const m=[];m.push(r+"="+encodeURIComponent(s)),se.isNumber(d)&&m.push("expires="+new Date(d).toGMTString()),se.isString(f)&&m.push("path="+f),se.isString(p)&&m.push("domain="+p),v===!0&&m.push("secure"),document.cookie=m.join("; ")},read:function(r){const s=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return s?decodeURIComponent(s[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function jee(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function zee(n,t){return t?n.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):n}function UR(n,t){return n&&!jee(t)?zee(n,t):t}const Fee=qr.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");let s;function d(f){let p=f;return t&&(r.setAttribute("href",p),p=r.href),r.setAttribute("href",p),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return s=d(window.location.href),function(p){const v=se.isString(p)?d(p):p;return v.protocol===s.protocol&&v.host===s.host}}():function(){return function(){return!0}}();function Vee(n){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return t&&t[1]||""}function $ee(n,t){n=n||10;const r=new Array(n),s=new Array(n);let d=0,f=0,p;return t=t!==void 0?t:1e3,function(m){const w=Date.now(),C=s[f];p||(p=w),r[d]=m,s[d]=w;let y=f,E=0;for(;y!==d;)E+=r[y++],y=y%n;if(d=(d+1)%n,d===f&&(f=(f+1)%n),w-p<t)return;const S=C&&w-C;return S?Math.round(E*1e3/S):void 0}}function ID(n,t){let r=0;const s=$ee(50,250);return d=>{const f=d.loaded,p=d.lengthComputable?d.total:void 0,v=f-r,m=s(v),w=f<=p;r=f;const C={loaded:f,total:p,progress:p?f/p:void 0,bytes:v,rate:m||void 0,estimated:m&&p&&w?(p-f)/m:void 0,event:d};C[t?"download":"upload"]=!0,n(C)}}const Hee=typeof XMLHttpRequest<"u",Uee=Hee&&function(n){return new Promise(function(r,s){let d=n.data;const f=vo.from(n.headers).normalize(),p=n.responseType;let v;function m(){n.cancelToken&&n.cancelToken.unsubscribe(v),n.signal&&n.signal.removeEventListener("abort",v)}se.isFormData(d)&&(qr.isStandardBrowserEnv||qr.isStandardBrowserWebWorkerEnv)&&f.setContentType(!1);let w=new XMLHttpRequest;if(n.auth){const S=n.auth.username||"",I=n.auth.password?unescape(encodeURIComponent(n.auth.password)):"";f.set("Authorization","Basic "+btoa(S+":"+I))}const C=UR(n.baseURL,n.url);w.open(n.method.toUpperCase(),FR(C,n.params,n.paramsSerializer),!0),w.timeout=n.timeout;function y(){if(!w)return;const S=vo.from("getAllResponseHeaders"in w&&w.getAllResponseHeaders()),M={data:!p||p==="text"||p==="json"?w.responseText:w.response,status:w.status,statusText:w.statusText,headers:S,config:n,request:w};Bee(function(L){r(L),m()},function(L){s(L),m()},M),w=null}if("onloadend"in w?w.onloadend=y:w.onreadystatechange=function(){!w||w.readyState!==4||w.status===0&&!(w.responseURL&&w.responseURL.indexOf("file:")===0)||setTimeout(y)},w.onabort=function(){!w||(s(new mt("Request aborted",mt.ECONNABORTED,n,w)),w=null)},w.onerror=function(){s(new mt("Network Error",mt.ERR_NETWORK,n,w)),w=null},w.ontimeout=function(){let I=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const M=n.transitional||VR;n.timeoutErrorMessage&&(I=n.timeoutErrorMessage),s(new mt(I,M.clarifyTimeoutError?mt.ETIMEDOUT:mt.ECONNABORTED,n,w)),w=null},qr.isStandardBrowserEnv){const S=(n.withCredentials||Fee(C))&&n.xsrfCookieName&&Lee.read(n.xsrfCookieName);S&&f.set(n.xsrfHeaderName,S)}d===void 0&&f.setContentType(null),"setRequestHeader"in w&&se.forEach(f.toJSON(),function(I,M){w.setRequestHeader(M,I)}),se.isUndefined(n.withCredentials)||(w.withCredentials=!!n.withCredentials),p&&p!=="json"&&(w.responseType=n.responseType),typeof n.onDownloadProgress=="function"&&w.addEventListener("progress",ID(n.onDownloadProgress,!0)),typeof n.onUploadProgress=="function"&&w.upload&&w.upload.addEventListener("progress",ID(n.onUploadProgress)),(n.cancelToken||n.signal)&&(v=S=>{!w||(s(!S||S.type?new Nu(null,n,w):S),w.abort(),w=null)},n.cancelToken&&n.cancelToken.subscribe(v),n.signal&&(n.signal.aborted?v():n.signal.addEventListener("abort",v)));const E=Vee(C);if(E&&qr.protocols.indexOf(E)===-1){s(new mt("Unsupported protocol "+E+":",mt.ERR_BAD_REQUEST,n));return}w.send(d||null)})},kf={http:gee,xhr:Uee};se.forEach(kf,(n,t)=>{if(n){try{Object.defineProperty(n,"name",{value:t})}catch{}Object.defineProperty(n,"adapterName",{value:t})}});const Gee={getAdapter:n=>{n=se.isArray(n)?n:[n];const{length:t}=n;let r,s;for(let d=0;d<t&&(r=n[d],!(s=se.isString(r)?kf[r.toLowerCase()]:r));d++);if(!s)throw s===!1?new mt(`Adapter ${r} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(se.hasOwnProp(kf,r)?`Adapter '${r}' is not available in the build`:`Unknown adapter '${r}'`);if(!se.isFunction(s))throw new TypeError("adapter is not a function");return s},adapters:kf};function uv(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new Nu(null,n)}function PD(n){return uv(n),n.headers=vo.from(n.headers),n.data=dv.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),Gee.getAdapter(n.adapter||h_.adapter)(n).then(function(s){return uv(n),s.data=dv.call(n,n.transformResponse,s),s.headers=vo.from(s.headers),s},function(s){return HR(s)||(uv(n),s&&s.response&&(s.response.data=dv.call(n,n.transformResponse,s.response),s.response.headers=vo.from(s.response.headers))),Promise.reject(s)})}const MD=n=>n instanceof vo?n.toJSON():n;function ac(n,t){t=t||{};const r={};function s(w,C,y){return se.isPlainObject(w)&&se.isPlainObject(C)?se.merge.call({caseless:y},w,C):se.isPlainObject(C)?se.merge({},C):se.isArray(C)?C.slice():C}function d(w,C,y){if(se.isUndefined(C)){if(!se.isUndefined(w))return s(void 0,w,y)}else return s(w,C,y)}function f(w,C){if(!se.isUndefined(C))return s(void 0,C)}function p(w,C){if(se.isUndefined(C)){if(!se.isUndefined(w))return s(void 0,w)}else return s(void 0,C)}function v(w,C,y){if(y in t)return s(w,C);if(y in n)return s(void 0,w)}const m={url:f,method:f,data:f,baseURL:p,transformRequest:p,transformResponse:p,paramsSerializer:p,timeout:p,timeoutMessage:p,withCredentials:p,adapter:p,responseType:p,xsrfCookieName:p,xsrfHeaderName:p,onUploadProgress:p,onDownloadProgress:p,decompress:p,maxContentLength:p,maxBodyLength:p,beforeRedirect:p,transport:p,httpAgent:p,httpsAgent:p,cancelToken:p,socketPath:p,responseEncoding:p,validateStatus:v,headers:(w,C)=>d(MD(w),MD(C),!0)};return se.forEach(Object.keys(n).concat(Object.keys(t)),function(C){const y=m[C]||d,E=y(n[C],t[C],C);se.isUndefined(E)&&y!==v||(r[C]=E)}),r}const GR="1.3.4",f_={};["object","boolean","number","function","string","symbol"].forEach((n,t)=>{f_[n]=function(s){return typeof s===n||"a"+(t<1?"n ":" ")+n}});const ND={};f_.transitional=function(t,r,s){function d(f,p){return"[Axios v"+GR+"] Transitional option '"+f+"'"+p+(s?". "+s:"")}return(f,p,v)=>{if(t===!1)throw new mt(d(p," has been removed"+(r?" in "+r:"")),mt.ERR_DEPRECATED);return r&&!ND[p]&&(ND[p]=!0,console.warn(d(p," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(f,p,v):!0}};function Wee(n,t,r){if(typeof n!="object")throw new mt("options must be an object",mt.ERR_BAD_OPTION_VALUE);const s=Object.keys(n);let d=s.length;for(;d-- >0;){const f=s[d],p=t[f];if(p){const v=n[f],m=v===void 0||p(v,f,n);if(m!==!0)throw new mt("option "+f+" must be "+m,mt.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new mt("Unknown option "+f,mt.ERR_BAD_OPTION)}}const wk={assertOptions:Wee,validators:f_},Wo=wk.validators;class op{constructor(t){this.defaults=t,this.interceptors={request:new OD,response:new OD}}request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=ac(this.defaults,r);const{transitional:s,paramsSerializer:d,headers:f}=r;s!==void 0&&wk.assertOptions(s,{silentJSONParsing:Wo.transitional(Wo.boolean),forcedJSONParsing:Wo.transitional(Wo.boolean),clarifyTimeoutError:Wo.transitional(Wo.boolean)},!1),d!==void 0&&wk.assertOptions(d,{encode:Wo.function,serialize:Wo.function},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let p;p=f&&se.merge(f.common,f[r.method]),p&&se.forEach(["delete","get","head","post","put","patch","common"],I=>{delete f[I]}),r.headers=vo.concat(p,f);const v=[];let m=!0;this.interceptors.request.forEach(function(M){typeof M.runWhen=="function"&&M.runWhen(r)===!1||(m=m&&M.synchronous,v.unshift(M.fulfilled,M.rejected))});const w=[];this.interceptors.response.forEach(function(M){w.push(M.fulfilled,M.rejected)});let C,y=0,E;if(!m){const I=[PD.bind(this),void 0];for(I.unshift.apply(I,v),I.push.apply(I,w),E=I.length,C=Promise.resolve(r);y<E;)C=C.then(I[y++],I[y++]);return C}E=v.length;let S=r;for(y=0;y<E;){const I=v[y++],M=v[y++];try{S=I(S)}catch(q){M.call(this,q);break}}try{C=PD.call(this,S)}catch(I){return Promise.reject(I)}for(y=0,E=w.length;y<E;)C=C.then(w[y++],w[y++]);return C}getUri(t){t=ac(this.defaults,t);const r=UR(t.baseURL,t.url);return FR(r,t.params,t.paramsSerializer)}}se.forEach(["delete","get","head","options"],function(t){op.prototype[t]=function(r,s){return this.request(ac(s||{},{method:t,url:r,data:(s||{}).data}))}});se.forEach(["post","put","patch"],function(t){function r(s){return function(f,p,v){return this.request(ac(v||{},{method:t,headers:s?{"Content-Type":"multipart/form-data"}:{},url:f,data:p}))}}op.prototype[t]=r(),op.prototype[t+"Form"]=r(!0)});const wf=op;class p_{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(f){r=f});const s=this;this.promise.then(d=>{if(!s._listeners)return;let f=s._listeners.length;for(;f-- >0;)s._listeners[f](d);s._listeners=null}),this.promise.then=d=>{let f;const p=new Promise(v=>{s.subscribe(v),f=v}).then(d);return p.cancel=function(){s.unsubscribe(f)},p},t(function(f,p,v){s.reason||(s.reason=new Nu(f,p,v),r(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new p_(function(d){t=d}),cancel:t}}}const Kee=p_;function qee(n){return function(r){return n.apply(null,r)}}function Yee(n){return se.isObject(n)&&n.isAxiosError===!0}const _k={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(_k).forEach(([n,t])=>{_k[t]=n});const Qee=_k;function WR(n){const t=new wf(n),r=xR(wf.prototype.request,t);return se.extend(r,wf.prototype,t,{allOwnKeys:!0}),se.extend(r,t,null,{allOwnKeys:!0}),r.create=function(d){return WR(ac(n,d))},r}const xn=WR(h_);xn.Axios=wf;xn.CanceledError=Nu;xn.CancelToken=Kee;xn.isCancel=HR;xn.VERSION=GR;xn.toFormData=hg;xn.AxiosError=mt;xn.Cancel=xn.CanceledError;xn.all=function(t){return Promise.all(t)};xn.spread=qee;xn.isAxiosError=Yee;xn.mergeConfig=ac;xn.AxiosHeaders=vo;xn.formToJSON=n=>$R(se.isHTMLForm(n)?new FormData(n):n);xn.HttpStatusCode=Qee;xn.default=xn;const Ct=xn;const Zee={props:{image:String,title:String,likes:Number,id:[String,Number],wasLiked:Boolean,noLike:{type:Boolean,default:!1}},data(){return{localLikes:this.likes,localWasLiked:this.wasLiked}},methods:{handleLike(){this.localWasLiked?(this.localLikes-=1,this.localWasLiked=!1,this.sendUnlike()):(this.localLikes+=1,this.localWasLiked=!0,this.sendLike())},sendLike(){Ct.get(`article/${this.id}/like`)},sendUnlike(){Ct.get(`article/${this.id}/unlike`)}}},Jee=n=>(Kt("data-v-1b9ff34d"),n=n(),qt(),n),Xee={class:"ac-title"},ete=Jee(()=>j("path",{d:"M256 448l-30.164-27.211C118.718 322.442 48 258.61 48 179.095 48 114.221 97.918 64 162.4 64c36.399 0 70.717 16.742 93.6 43.947C278.882 80.742 313.199 64 349.6 64 414.082 64 464 114.221 464 179.095c0 79.516-70.719 143.348-177.836 241.694L256 448z",fill:"currentColor"},null,-1)),tte=[ete];function nte(n,t,r,s,d,f){return oe(),be("div",{onClick:t[1]||(t[1]=p=>n.$router.push(`/article/${r.id}`)),class:"ac-card",style:kr(`background: linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.75) 100%), url(${r.image})`)},[j("h5",Xee,Ue(r.title),1),r.noLike?et("",!0):(oe(),be("span",{key:0,class:"ac-likes",onClick:t[0]||(t[0]=yw((...p)=>f.handleLike&&f.handleLike(...p),["stop"]))},[xe(Ue(d.localLikes)+" ",1),(oe(),be("svg",{class:Le(["ac-icon",{"ac-icon-active":d.localWasLiked}]),width:"22",height:"22",viewBox:"0 0 512 512"},tte,2))]))],4)}const KR=pt(Zee,[["render",nte],["__scopeId","data-v-1b9ff34d"]]);const ite={props:{modelValue:{type:Number},pageCount:{type:Number,required:!0},forcePage:{type:Number},clickHandler:{type:Function,default:()=>{}},pageRange:{type:Number,default:3},marginPages:{type:Number,default:1},prevText:{type:String,default:"Prev"},nextText:{type:String,default:"Next"},breakViewText:{type:String,default:"\u2026"},containerClass:{type:String},pageClass:{type:String},pageLinkClass:{type:String},prevClass:{type:String},prevLinkClass:{type:String},nextClass:{type:String},nextLinkClass:{type:String},breakViewClass:{type:String},breakViewLinkClass:{type:String},activeClass:{type:String,default:"active"},disabledClass:{type:String,default:"disabled"},noLiSurround:{type:Boolean,default:!1},firstLastButton:{type:Boolean,default:!1},firstButtonText:{type:String,default:"First"},lastButtonText:{type:String,default:"Last"},hidePrevNext:{type:Boolean,default:!1}},beforeUpdate(){this.forcePage!==void 0&&this.forcePage!==this.selected&&(this.selected=this.forcePage)},computed:{selected:{get:function(){return this.value||this.innerValue},set:function(n){this.innerValue=n}},pages:function(){let n={};if(this.pageCount<=this.pageRange)for(let t=0;t<this.pageCount;t++){let r={index:t,content:t+1,selected:t===this.selected-1};n[t]=r}else{const t=Math.floor(this.pageRange/2);let r=p=>{let v={index:p,content:p+1,selected:p===this.selected-1};n[p]=v},s=p=>{let v={disabled:!0,breakView:!0};n[p]=v};for(let p=0;p<this.marginPages;p++)r(p);let d=0;this.selected-t>0&&(d=this.selected-1-t);let f=d+this.pageRange-1;f>=this.pageCount&&(f=this.pageCount-1,d=f-this.pageRange+1);for(let p=d;p<=f&&p<=this.pageCount-1;p++)r(p);d>this.marginPages&&s(d-1),f+1<this.pageCount-this.marginPages&&s(f+1);for(let p=this.pageCount-1;p>=this.pageCount-this.marginPages;p--)r(p)}return n}},data(){return{innerValue:1}},methods:{handlePageSelected(n){this.selected!==n&&(this.innerValue=n,this.$emit("update:modelValue",n),this.clickHandler(n))},prevPage(){this.selected<=1||this.handlePageSelected(this.selected-1)},nextPage(){this.selected>=this.pageCount||this.handlePageSelected(this.selected+1)},firstPageSelected(){return this.selected===1},lastPageSelected(){return this.selected===this.pageCount||this.pageCount===0},selectFirstPage(){this.selected<=1||this.handlePageSelected(1)},selectLastPage(){this.selected>=this.pageCount||this.handlePageSelected(this.pageCount)}}},rte=["tabindex","innerHTML"],ote=["tabindex","innerHTML"],ste=["onClick","onKeyup"],ate=["tabindex","innerHTML"],lte=["tabindex","innerHTML"],cte=["innerHTML"],dte=["innerHTML"],ute=["onClick","onKeyup"],hte=["innerHTML"],fte=["innerHTML"];function pte(n,t,r,s,d,f){return r.noLiSurround?(oe(),be("div",{key:1,class:Le(r.containerClass)},[r.firstLastButton?(oe(),be("a",{key:0,onClick:t[8]||(t[8]=p=>f.selectFirstPage()),onKeyup:t[9]||(t[9]=qi(p=>f.selectFirstPage(),["enter"])),class:Le([r.pageLinkClass,f.firstPageSelected()?r.disabledClass:""]),tabindex:"0",innerHTML:r.firstButtonText},null,42,cte)):et("",!0),f.firstPageSelected()&&r.hidePrevNext?et("",!0):(oe(),be("a",{key:1,onClick:t[10]||(t[10]=p=>f.prevPage()),onKeyup:t[11]||(t[11]=qi(p=>f.prevPage(),["enter"])),class:Le([r.prevLinkClass,f.firstPageSelected()?r.disabledClass:""]),tabindex:"0",innerHTML:r.prevText},null,42,dte)),(oe(!0),be(Ye,null,yn(f.pages,p=>(oe(),be(Ye,null,[p.breakView?(oe(),be("a",{key:p.index,class:Le([r.pageLinkClass,r.breakViewLinkClass,p.disabled?r.disabledClass:""]),tabindex:"0"},[Yl(n.$slots,"breakViewContent",{},()=>[xe(Ue(r.breakViewText),1)],!0)],2)):p.disabled?(oe(),be("a",{key:p.index,class:Le([r.pageLinkClass,p.selected?r.activeClass:"",r.disabledClass]),tabindex:"0"},Ue(p.content),3)):(oe(),be("a",{key:p.index,onClick:v=>f.handlePageSelected(p.index+1),onKeyup:qi(v=>f.handlePageSelected(p.index+1),["enter"]),class:Le([r.pageLinkClass,p.selected?r.activeClass:""]),tabindex:"0"},Ue(p.content),43,ute))],64))),256)),f.lastPageSelected()&&r.hidePrevNext?et("",!0):(oe(),be("a",{key:2,onClick:t[12]||(t[12]=p=>f.nextPage()),onKeyup:t[13]||(t[13]=qi(p=>f.nextPage(),["enter"])),class:Le([r.nextLinkClass,f.lastPageSelected()?r.disabledClass:""]),tabindex:"0",innerHTML:r.nextText},null,42,hte)),r.firstLastButton?(oe(),be("a",{key:3,onClick:t[14]||(t[14]=p=>f.selectLastPage()),onKeyup:t[15]||(t[15]=qi(p=>f.selectLastPage(),["enter"])),class:Le([r.pageLinkClass,f.lastPageSelected()?r.disabledClass:""]),tabindex:"0",innerHTML:r.lastButtonText},null,42,fte)):et("",!0)],2)):(oe(),be("ul",{key:0,class:Le([r.containerClass,"base-pagination"])},[r.firstLastButton?(oe(),be("li",{key:0,class:Le([r.pageClass,f.firstPageSelected()?r.disabledClass:""])},[j("a",{onClick:t[0]||(t[0]=p=>f.selectFirstPage()),onKeyup:t[1]||(t[1]=qi(p=>f.selectFirstPage(),["enter"])),class:Le(r.pageLinkClass),tabindex:f.firstPageSelected()?-1:0,innerHTML:r.firstButtonText},null,42,rte)],2)):et("",!0),f.firstPageSelected()&&r.hidePrevNext?et("",!0):(oe(),be("li",{key:1,class:Le([r.prevClass,f.firstPageSelected()?r.disabledClass:""])},[j("a",{onClick:t[2]||(t[2]=p=>f.prevPage()),onKeyup:t[3]||(t[3]=qi(p=>f.prevPage(),["enter"])),class:Le(r.prevLinkClass),tabindex:f.firstPageSelected()?-1:0,innerHTML:r.prevText},null,42,ote)],2)),(oe(!0),be(Ye,null,yn(f.pages,p=>(oe(),be("li",{key:p.index,class:Le([r.pageClass,p.selected?r.activeClass:"",p.disabled?r.disabledClass:"",p.breakView?r.breakViewClass:""])},[p.breakView?(oe(),be("a",{key:0,class:Le([r.pageLinkClass,r.breakViewLinkClass]),tabindex:"0"},[Yl(n.$slots,"breakViewContent",{},()=>[xe(Ue(r.breakViewText),1)],!0)],2)):p.disabled?(oe(),be("a",{key:1,class:Le(r.pageLinkClass),tabindex:"0"},Ue(p.content),3)):(oe(),be("a",{key:2,onClick:v=>f.handlePageSelected(p.index+1),onKeyup:qi(v=>f.handlePageSelected(p.index+1),["enter"]),class:Le(r.pageLinkClass),tabindex:"0"},Ue(p.content),43,ste))],2))),128)),f.lastPageSelected()&&r.hidePrevNext?et("",!0):(oe(),be("li",{key:2,class:Le([r.nextClass,f.lastPageSelected()?r.disabledClass:""])},[j("a",{onClick:t[4]||(t[4]=p=>f.nextPage()),onKeyup:t[5]||(t[5]=qi(p=>f.nextPage(),["enter"])),class:Le(r.nextLinkClass),tabindex:f.lastPageSelected()?-1:0,innerHTML:r.nextText},null,42,ate)],2)),r.firstLastButton?(oe(),be("li",{key:3,class:Le([r.pageClass,f.lastPageSelected()?r.disabledClass:""])},[j("a",{onClick:t[6]||(t[6]=p=>f.selectLastPage()),onKeyup:t[7]||(t[7]=qi(p=>f.selectLastPage(),["enter"])),class:Le(r.pageLinkClass),tabindex:f.lastPageSelected()?-1:0,innerHTML:r.lastButtonText},null,42,lte)],2)):et("",!0)],2))}const gte=pt(ite,[["render",pte],["__scopeId","data-v-7cd58f55"]]);const mte={components:{ArticleCard:KR,ArticlesPaginator:gte},props:{search:String},data(){return{page:1,limit:999,articles:[]}},methods:{getArticles(){Ct.get("article",{params:{page:this.page,limit:this.limit,search:this.search}}).then(n=>{this.articles=n.data.data})}},watch:{search(){this.getArticles()}},mounted(){this.getArticles()}},bte={className:"ap-grid"};function vte(n,t,r,s,d,f){const p=ae("article-card");return oe(),be("div",bte,[(oe(!0),be(Ye,null,yn(d.articles,v=>(oe(),xt(p,{id:v.id,title:v.title,likes:v.countOfLikes,image:v.image,"was-liked":v.is_liked},null,8,["id","title","likes","image","was-liked"]))),256))])}const kte=pt(mte,[["render",vte],["__scopeId","data-v-5a881018"]]);const wte={components:{ArticlesPageHeader:LX,ArticlesPageList:kte,BContainer:xr},data(){return{search:null}},methods:{handleSearch(n){this.search=n}}};function _te(n,t,r,s,d,f){const p=ae("articles-page-header"),v=ae("articles-page-list"),m=ae("b-container");return oe(),xt(m,{class:"ap-container"},{default:Q(()=>[F(p,{onSearch:f.handleSearch,class:"ap-header"},null,8,["onSearch"]),F(v,{search:d.search},null,8,["search"])],void 0,!0),_:1})}const Cte=pt(wte,[["render",_te],["__scopeId","data-v-fb9fa3db"]]);const yte={props:{variant:{type:String,default:"basic"}}};function Ate(n,t,r,s,d,f){return oe(),be("button",{class:Le(["button-general",r.variant]),onClick:t[0]||(t[0]=p=>n.$emit("click"))},[Yl(n.$slots,"default",{},void 0,!0)],2)}const yi=pt(yte,[["render",Ate],["__scopeId","data-v-034703a0"]]);const Ete={props:{title:{type:String,default:""},variant:{type:String,default:"white"}},name:"InputForm"},Tte=["placeholder"];function xte(n,t,r,s,d,f){return oe(),be("input",{class:Le(["input",r.variant]),type:"text",placeholder:r.title},null,10,Tte)}const Ste=pt(Ete,[["render",xte],["__scopeId","data-v-1b7c0a0d"]]);var Ote=!1;/*!
  * pinia v2.0.33
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let qR;const gg=n=>qR=n,YR=Symbol();function Ck(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var jd;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(jd||(jd={}));function Dte(){const n=cp(!0),t=n.run(()=>os({}));let r=[],s=[];const d=ms({install(f){gg(d),d._a=f,f.provide(YR,d),f.config.globalProperties.$pinia=d,s.forEach(p=>r.push(p)),s=[]},use(f){return!this._a&&!Ote?s.push(f):r.push(f),this},_p:r,_a:null,_e:n,_s:new Map,state:t});return d}const QR=()=>{};function RD(n,t,r,s=QR){n.push(t);const d=()=>{const f=n.indexOf(t);f>-1&&(n.splice(f,1),s())};return!r&&dp()&&Sk(d),d}function Tl(n,...t){n.slice().forEach(r=>{r(...t)})}function yk(n,t){n instanceof Map&&t instanceof Map&&t.forEach((r,s)=>n.set(s,r)),n instanceof Set&&t instanceof Set&&t.forEach(n.add,n);for(const r in t){if(!t.hasOwnProperty(r))continue;const s=t[r],d=n[r];Ck(d)&&Ck(s)&&n.hasOwnProperty(r)&&!en(s)&&!Xi(s)?n[r]=yk(d,s):n[r]=s}return n}const Ite=Symbol();function Pte(n){return!Ck(n)||!n.hasOwnProperty(Ite)}const{assign:Ko}=Object;function Mte(n){return!!(en(n)&&n.effect)}function Nte(n,t,r,s){const{state:d,actions:f,getters:p}=t,v=r.state.value[n];let m;function w(){v||(r.state.value[n]=d?d():{});const C=Rk(r.state.value[n]);return Ko(C,f,Object.keys(p||{}).reduce((y,E)=>(y[E]=ms(ii(()=>{gg(r);const S=r._s.get(n);return p[E].call(S,S)})),y),{}))}return m=ZR(n,w,t,r,s,!0),m}function ZR(n,t,r={},s,d,f){let p;const v=Ko({actions:{}},r),m={deep:!0};let w,C,y=ms([]),E=ms([]),S;const I=s.state.value[n];!f&&!I&&(s.state.value[n]={}),os({});let M;function q(J){let G;w=C=!1,typeof J=="function"?(J(s.state.value[n]),G={type:jd.patchFunction,storeId:n,events:S}):(yk(s.state.value[n],J),G={type:jd.patchObject,payload:J,storeId:n,events:S});const P=M=Symbol();xs().then(()=>{M===P&&(w=!0)}),C=!0,Tl(y,G,s.state.value[n])}const L=f?function(){const{state:G}=r,P=G?G():{};this.$patch(X=>{Ko(X,P)})}:QR;function B(){p.stop(),y=[],E=[],s._s.delete(n)}function $(J,G){return function(){gg(s);const P=Array.from(arguments),X=[],he=[];function Ie(je){X.push(je)}function De(je){he.push(je)}Tl(E,{args:P,name:J,store:Z,after:Ie,onError:De});let ke;try{ke=G.apply(this&&this.$id===n?this:Z,P)}catch(je){throw Tl(he,je),je}return ke instanceof Promise?ke.then(je=>(Tl(X,je),je)).catch(je=>(Tl(he,je),Promise.reject(je))):(Tl(X,ke),ke)}}const K={_p:s,$id:n,$onAction:RD.bind(null,E),$patch:q,$reset:L,$subscribe(J,G={}){const P=RD(y,J,G.detached,()=>X()),X=p.run(()=>as(()=>s.state.value[n],he=>{(G.flush==="sync"?C:w)&&J({storeId:n,type:jd.direct,events:S},he)},Ko({},m,G)));return P},$dispose:B},Z=nr(K);s._s.set(n,Z);const re=s._e.run(()=>(p=cp(),p.run(()=>t())));for(const J in re){const G=re[J];if(en(G)&&!Mte(G)||Xi(G))f||(I&&Pte(G)&&(en(G)?G.value=I[J]:yk(G,I[J])),s.state.value[n][J]=G);else if(typeof G=="function"){const P=$(J,G);re[J]=P,v.actions[J]=G}}return Ko(Z,re),Ko(it(Z),re),Object.defineProperty(Z,"$state",{get:()=>s.state.value[n],set:J=>{q(G=>{Ko(G,J)})}}),s._p.forEach(J=>{Ko(Z,p.run(()=>J({store:Z,app:s._a,pinia:s,options:v})))}),I&&f&&r.hydrate&&r.hydrate(Z.$state,I),w=!0,C=!0,Z}function Rte(n,t,r){let s,d;const f=typeof t=="function";typeof n=="string"?(s=n,d=f?r:t):(d=n,s=n.id);function p(v,m){const w=rr();return v=v||w&&ki(YR,null),v&&gg(v),v=qR,v._s.has(s)||(f?ZR(s,t,d,v):Nte(s,d,v)),v._s.get(s)}return p.$id=s,p}const So=Rte("user",{state:()=>({user:null}),actions:{fetchUser(){Ct.get("profile").then(n=>{this.user=n.data}).catch(n=>{console.log(n.response.data)})}}}),lc=n=>{let t=document.cookie.match(new RegExp("(?:^|; )"+n.replace(/([.$?*|{}()[\]\\/+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0},JR=(n,t,r={})=>{r={path:"/",...r},r.expires instanceof Date&&(r.expires=r.expires.toUTCString());let s=encodeURIComponent(n)+"="+encodeURIComponent(t);for(let d in r){s+="; "+d;let f=r[d];f!==!0&&(s+="="+f)}document.cookie=s},Bte=n=>{JR(n,"",{"max-age":-1})};const Lte={components:{ButtonGeneral:yi,InputForm:Ste,ButtonLogIn:yi,BFormInput:La,RouterLink:Lp,BModal:io},data(){return{token:"",email:"",Password:"",wasError:!1,userStore:So()}},computed:{loginData(){return{email:this.email,password:this.Password}}},methods:{accLogin(){Ct.post("login",this.loginData).then(n=>{console.log(n),JR("jwt",n.data.token,{"max-age":7*24*60*60}),this.$router.push({name:"profile"}),this.userStore.fetchUser(),console.log(n.data)}).catch(n=>{this.wasError=!0,console.log(n)})}}},g_=n=>(Kt("data-v-b9fd5dcc"),n=n(),qt(),n),jte={class:"form-login"},zte=g_(()=>j("div",{class:"login"},"\u0412\u0445\u043E\u0434 \u0432 \u0430\u043A\u043A\u0430\u0443\u043D\u0442",-1)),Fte={class:"login-button"},Vte=g_(()=>j("span",null,"\u0412\u043E\u0439\u0442\u0438",-1)),$te={key:0,class:"mistake"},Hte={class:"reg"},Ute=g_(()=>j("u",null,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F",-1));function Gte(n,t,r,s,d,f){const p=ae("b-form-input"),v=ae("button-general"),m=ae("router-link");return oe(),be("div",jte,[zte,F(p,{class:"input",modelValue:d.email,"onUpdate:modelValue":t[0]||(t[0]=w=>d.email=w),placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u043E\u0447\u0442\u0443"},null,8,["modelValue"]),F(p,{class:"input",id:"input-password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C",modelValue:d.Password,"onUpdate:modelValue":t[1]||(t[1]=w=>d.Password=w),type:"password"},null,8,["modelValue"]),j("div",Fte,[F(v,{onClick:f.accLogin},{default:Q(()=>[Vte],void 0,!0),_:1},8,["onClick"])]),d.wasError?(oe(),be("p",$te,"\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C \u0438\u043B\u0438 \u043B\u043E\u0433\u0438\u043D!")):et("",!0),j("div",Hte,[xe("\u0415\u0449\u0435 \u043D\u0435\u0442 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430? "),F(m,{class:"link",to:"/registration"},{default:Q(()=>[Ute],void 0,!0),_:1})])])}const Wte=pt(Lte,[["render",Gte],["__scopeId","data-v-b9fd5dcc"]]);const Kte={components:{ButtonGeneral:yi,AccountLogIn:Wte,axios:Ct},created(){lc("jwt")&&this.$router.push({name:"profile"})}},mg=n=>(Kt("data-v-76932ca1"),n=n(),qt(),n),qte={class:"app"},Yte={class:"parent"},Qte={class:"login-form"},Zte=mg(()=>j("div",{class:"text-or"},"\u0418\u041B\u0418",-1)),Jte={class:"login-button"},Xte=mg(()=>j("div",{class:"btn-text"},"\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0431\u0435\u0437 \u0432\u0445\u043E\u0434\u0430",-1)),ene=mg(()=>j("div",{class:"second-container"},[j("div",{class:"description"},[j("div",{class:"in-description"},[j("h1",null,"EcoMap"),j("h2",null,"\u041D\u0430\u0448\u0438 \u0443\u0441\u0438\u043B\u0438\u044F \u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u043D\u0430 \u0431\u043B\u0430\u0433\u043E \u043F\u0440\u0438\u0440\u043E\u0434\u044B")])])],-1)),tne=mg(()=>j("div",{class:"description"},null,-1));function nne(n,t,r,s,d,f){const p=ae("account-log-in"),v=ae("router-link"),m=ae("button-general");return oe(),be(Ye,null,[j("div",qte,[j("div",Yte,[j("div",Qte,[j("div",null,[F(p)]),Zte,j("div",Jte,[F(m,null,{default:Q(()=>[F(v,{class:"link",to:"/map"},{default:Q(()=>[Xte],void 0,!0),_:1})],void 0,!0),_:1})])]),ene])]),tne],64)}const ine=pt(Kte,[["render",nne],["__scopeId","data-v-76932ca1"]]);const rne={components:{BContainer:xr,BRow:ja,BCol:bo,BFormGroup:Iu,BFormInput:La,BFormSelect:i_,ButtonGeneral:yi,BModal:io},data(){return{name:null,nickname:null,email:null,lastname:null,age:null,gender:null,password:null,confirmPassword:null,genders:[{value:1,text:"\u041C\u0443\u0436\u0441\u043A\u043E\u0439"},{value:2,text:"\u0416\u0435\u043D\u0441\u043A\u0438\u0439"},{value:3,text:"\u0414\u0440\u0443\u0433\u043E\u0439"}],wasError:!1}},created(){lc("jwt")&&this.$router.push({name:"profile"})},computed:{regData(){return{name:this.name,nickname:this.nickname,email:this.email,surname:this.lastname,age:this.age,gender:this.gender,password:this.password,confirmPassword:this.confirmPassword}},validateMail(){return this.email===null?null:this.isMail(this.email)},invalidMailFeedback(){return this.email===null?"":this.isMail(this.email)?"\u041F\u043E\u0447\u0442\u0430 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u0430 \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F":"\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441 \u043F\u043E\u0447\u0442\u044B"},invalidAgeFeedback(){return this.age<0?"\u0412\u043E\u0437\u0440\u0430\u0441\u0442 \u043D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439":"\u0412\u043E\u0437\u0440\u0430\u0441\u0442 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F"},validatePassword(){return this.password===null?null:this.password.length>=6},invalidPasswordFeedback(){return this.password===null?"":this.password.length<6?"\u041C\u0438\u043D\u0438\u043C\u0443\u043C 6 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432":"\u041F\u0430\u0440\u043E\u043B\u044C \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F"}},methods:{showModal1(){this.$root.$emit("bv::show::modal","modal-1","#btnShow")},checkValidation(){let n=!1;return this.name||(this.name="",n=!0),this.lastname||(this.lastname="",n=!0),(!this.age||this.age<0)&&(this.age="",n=!0),this.nickname||(this.nickname="",n=!0),(!this.email||!this.isMail(this.email))&&(this.email="",n=!0),(!this.gender||![1,2,3].includes(this.gender))&&(this.gender="",n=!0),(!this.password||this.password.length<6)&&(this.password="",n=!0),(!this.confirmPassword||this.password!==this.confirmPassword)&&(this.confirmPassword="",n=!0),!n},handleRegistration(){!this.checkValidation()||Ct.post("registration",this.regData).then(n=>{this.showModal1()}).catch(()=>{this.wasError=!0})},isMail(n){return Boolean(String(n).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))}}},bg=n=>(Kt("data-v-2ef0eda5"),n=n(),qt(),n),one={class:"rp-wrapper"},sne={class:"reg-page"},ane={class:"top-menu"},lne={class:"reg-form"},cne=bg(()=>j("div",{class:"custom-label"}," \u0424\u0430\u043C\u0438\u043B\u0438\u044F ",-1)),dne=bg(()=>j("div",{class:"custom-label"}," \u0412\u043E\u0437\u0440\u0430\u0441\u0442 ",-1)),une=bg(()=>j("div",{class:"custom-label"}," \u041F\u043E\u043B ",-1)),hne={key:0,class:"mistake"},fne=bg(()=>j("h4",null,[j("b",null,"10")],-1));function pne(n,t,r,s,d,f){const p=ae("button-general"),v=ae("b-form-input"),m=ae("b-form-group"),w=ae("b-col"),C=ae("b-form-select"),y=ae("b-row"),E=ae("b-container"),S=ae("b-modal");return oe(),be(Ye,null,[j("div",one,[F(E,null,{default:Q(()=>[j("div",sne,[j("div",ane,[F(p,{class:"back-btn",onClick:t[0]||(t[0]=I=>n.$router.go(-1))},{default:Q(()=>[xe(" \u041D\u0430\u0437\u0430\u0434 ")],void 0,!0),_:1})]),j("div",lne,[F(E,null,{default:Q(()=>[F(y,null,{default:Q(()=>[F(w,{class:"reg-col"},{default:Q(()=>[F(m,{class:"reg-group",label:"\u0418\u043C\u044F","label-for":"input-name",state:d.name===null?null:d.name.length>0,"invalid-feedback":"\u0418\u043C\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F"},{default:Q(()=>[F(v,{class:"reg-input",id:"input-name",modelValue:d.name,"onUpdate:modelValue":t[1]||(t[1]=I=>d.name=I)},null,8,["modelValue"])],void 0,!0),_:1},8,["state"]),F(m,{class:"reg-group",label:"\u041D\u0438\u043A\u043D\u0435\u0439\u043C","label-for":"input-nickname",state:d.nickname===null?null:d.nickname.length>0,"invalid-feedback":"\u041D\u0438\u043A\u043D\u0435\u0439\u043C \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F"},{default:Q(()=>[F(v,{class:"reg-input",id:"input-nickname",modelValue:d.nickname,"onUpdate:modelValue":t[2]||(t[2]=I=>d.nickname=I)},null,8,["modelValue"])],void 0,!0),_:1},8,["state"]),F(m,{class:"reg-group",label:"\u041F\u043E\u0447\u0442\u0430","label-for":"input-email",state:f.validateMail,"invalid-feedback":f.invalidMailFeedback},{default:Q(()=>[F(v,{class:"reg-input",id:"input-email",modelValue:d.email,"onUpdate:modelValue":t[3]||(t[3]=I=>d.email=I),type:"email"},null,8,["modelValue"])],void 0,!0),_:1},8,["state","invalid-feedback"])],void 0,!0),_:1}),F(w,{class:"reg-col"},{default:Q(()=>[F(m,{class:"reg-group","label-for":"input-lastname",state:d.lastname===null?null:d.lastname.length>0,"invalid-feedback":"\u0424\u0430\u043C\u0438\u043B\u0438\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u0430 \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F"},{label:Q(()=>[cne]),default:Q(()=>[F(v,{class:"reg-input",id:"input-lastname",modelValue:d.lastname,"onUpdate:modelValue":t[4]||(t[4]=I=>d.lastname=I)},null,8,["modelValue"])],void 0,!0),_:1},8,["state"]),F(m,{class:"reg-group","label-for":"input-age",state:d.age===null?null:d.age>0,"invalid-feedback":f.invalidAgeFeedback},{label:Q(()=>[dne]),default:Q(()=>[F(v,{class:"reg-input",id:"input-age",modelValue:d.age,"onUpdate:modelValue":t[5]||(t[5]=I=>d.age=I),type:"number"},null,8,["modelValue"])],void 0,!0),_:1},8,["state","invalid-feedback"]),F(m,{class:"reg-group","label-for":"input-gender",state:d.gender===null?null:[1,2,3].includes(d.gender),"invalid-feedback":"\u041F\u043E\u043B \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F"},{label:Q(()=>[une]),default:Q(()=>[F(C,{class:"reg-input",modelValue:d.gender,"onUpdate:modelValue":t[6]||(t[6]=I=>d.gender=I),options:d.genders,id:"input-gender"},null,8,["modelValue","options"])],void 0,!0),_:1},8,["state"])],void 0,!0),_:1})],void 0,!0),_:1}),F(y,{class:"mt-5"},{default:Q(()=>[F(w,{class:"reg-col"},{default:Q(()=>[F(m,{class:"reg-group",label:"\u041F\u0430\u0440\u043E\u043B\u044C","label-for":"input-password",state:f.validatePassword,"invalid-feedback":f.invalidPasswordFeedback},{default:Q(()=>[F(v,{class:"reg-input",id:"input-password",modelValue:d.password,"onUpdate:modelValue":t[7]||(t[7]=I=>d.password=I),type:"password"},null,8,["modelValue"])],void 0,!0),_:1},8,["state","invalid-feedback"]),F(m,{class:"reg-group mb-0",label:"\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u043F\u0430\u0440\u043E\u043B\u044F","label-for":"input-confirm-password",state:d.password===d.confirmPassword,"invalid-feedback":"\u041F\u0430\u0440\u043E\u043B\u0438 \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0442"},{default:Q(()=>[F(v,{class:"reg-input",id:"input-confirm-password",modelValue:d.confirmPassword,"onUpdate:modelValue":t[8]||(t[8]=I=>d.confirmPassword=I),type:"password"},null,8,["modelValue"])],void 0,!0),_:1},8,["state"])],void 0,!0),_:1}),F(w,{class:"reg-col to-right-bottom"},{default:Q(()=>[d.wasError?(oe(),be("p",hne,"\u041D\u0438\u043A\u043D\u0435\u0439\u043C \u0438\u043B\u0438 \u043F\u043E\u0447\u0442\u0430 \u0443\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u044B")):et("",!0),F(p,{class:"reg-button",onClick:f.handleRegistration},{default:Q(()=>[xe(" \u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F ")],void 0,!0),_:1},8,["onClick"])],void 0,!0),_:1})],void 0,!0),_:1})],void 0,!0),_:1})])])],void 0,!0),_:1})]),F(S,{id:"modal-1"},{default:Q(()=>[xe(" \u041F\u043E\u0437\u0434\u0440\u0430\u0432\u043B\u044F\u0435\u043C, \u043C\u044B \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043B\u0438\u0441\u044C \u0432 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438 Ecomap \u0438 \u0441\u0434\u0435\u043B\u0430\u043B\u0438 \u0441\u0432\u043E\u0439 \u043F\u0435\u0440\u0432\u044B\u0439 \u0448\u0430\u0433 \u043A \u0443\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u044E \u043C\u0438\u0440\u0430! \u0412\u043E\u0442 \u0432\u0430\u0448\u0438 \u043F\u0435\u0440\u0432\u044B\u0435 "),fne,xe(" Eco-\u043E\u0447\u043A\u043E\u0432! ")],void 0,!0),_:1})],64)}const gne=pt(rne,[["render",pne],["__scopeId","data-v-2ef0eda5"]]);const mne={components:{ButtonGeneral:yi},props:{id:[String,Number]},data(){return{article:null}},methods:{getArticle(){Ct.get(`article/${this.id}`).then(n=>{this.article=n.data})}},computed:{buttonVariant(){if(!this.article)return null;switch(+this.article.template){case 1:return"basic";case 2:return"blue";case 3:return"yellow";case 4:return"pink"}},imageSrc(){if(!this.article)return null;switch(+this.article.template){case 1:return"/src/assets/article/article-1.png";case 2:return"/src/assets/article/article-2.png";case 3:return"/src/assets/article/article-3.jpg";case 4:return"/src/assets/article/article-4.jpg"}},circleBackground(){if(!this.article)return null;switch(+this.article.template){case 1:return"rgb(var(--c-button-rgb))";case 2:return"rgb(var(--c-button-blue-rgb))";case 3:return"rgb(var(--c-button-yellow-rgb))";case 4:return"rgb(var(--c-button-pink-rgb))"}}},mounted(){this.getArticle()}},bne={key:0,class:"av-page"},vne={class:"av-header"},kne={class:"av-title"},wne=["innerHTML"];function _ne(n,t,r,s,d,f){const p=ae("button-general");return d.article?(oe(),be("div",bne,[j("div",{class:Le(["av-content",`av-content-variant-${d.article.template}`])},[j("div",vne,[F(p,{variant:f.buttonVariant,onClick:t[0]||(t[0]=v=>n.$router.go(-1)),class:"av-back"},{default:Q(()=>[xe(" \u041D\u0430\u0437\u0430\u0434 ")],void 0,!0),_:1},8,["variant"])]),j("h4",kne,Ue(d.article.title),1),j("article",{class:"av-article",innerHTML:d.article.content},null,8,wne)],2),j("div",{class:"av-image",style:kr({"background-image":`url(${f.imageSrc})`})},[j("div",{class:"av-circle",style:kr({"background-color":f.circleBackground})},[j("div",{class:"av-sub-circle",style:kr({"background-color":f.circleBackground})},null,4)],4)],4)])):et("",!0)}const Cne=pt(mne,[["render",_ne],["__scopeId","data-v-b1f4077e"]]),yne="/ecomap/assets/logo.e7f55258.svg",Ane="/ecomap/assets/about-us.1c26b247.svg",Ene="/ecomap/assets/articles.ea807c26.svg",Tne="/ecomap/assets/map-page.891e60f5.svg",xne="/ecomap/assets/user.25b5cbc6.svg",Sne="/ecomap/assets/admin.09a6756d.svg";const One={components:{BDropdown:qq,BDropdownItem:Qq,RouterLink:Lp,BContainer:xr,BIcon:R2},data(){return{transparentRoutes:["registration","new-point"],userStore:So(),isAuth:!1}},created(){lc("jwt")&&(this.isAuth=!0)},computed:{user(){return this.userStore.user},userAdmin(){var n;return(n=this.user)==null?void 0:n.is_admin},userAge(){var n;return(n=this.user)==null?void 0:n.age}},methods:{exit(){Bte("jwt"),this.$router.push({name:"welcome-page"}),this.isAuth=!1}}},Tc=n=>(Kt("data-v-250b7d26"),n=n(),qt(),n),Dne=Tc(()=>j("img",{alt:"ecomap",class:"logo",src:yne},null,-1)),Ine=Tc(()=>j("img",{alt:"\u043E \u043D\u0430\u0441",class:"alt-logo",src:Ane},null,-1)),Pne=Tc(()=>j("img",{alt:"\u0441\u0442\u0430\u0442\u044C\u0438",class:"alt-logo",src:Ene},null,-1)),Mne=Tc(()=>j("img",{alt:"\u043A\u0430\u0440\u0442\u0430",class:"alt-logo",src:Tne},null,-1)),Nne=Tc(()=>j("img",{alt:"\u043A\u0430\u0440\u0442\u0430",class:"alt-logo",src:xne},null,-1)),Rne=Tc(()=>j("img",{alt:"\u0430\u0434\u043C\u0438\u043D \u043F\u0430\u043D\u0435\u043B\u044C",class:"logo-user",src:Sne},null,-1));function Bne(n,t,r,s,d,f){const p=ae("router-link"),v=ae("b-dropdown-item"),m=ae("b-dropdown"),w=ae("b-container");return oe(),be("div",{class:Le(["global-header",{"global-header-transparent":d.transparentRoutes.includes(n.$route.name)}])},[F(w,{class:"main-1"},{default:Q(()=>[Dne,f.userAdmin?(oe(),xt(p,{key:0,class:"link",to:"/admin"},{default:Q(()=>[xe("\u0410\u0434\u043C\u0438\u043D-\u043F\u0430\u043D\u0435\u043B\u044C")],void 0,!0),_:1})):et("",!0),F(p,{class:"link",to:"/we"},{default:Q(()=>[xe("\u041E \u043F\u0440\u043E\u0435\u043A\u0442\u0435")],void 0,!0),_:1}),F(p,{class:"link",to:"/articles"},{default:Q(()=>[xe("\u0421\u0442\u0430\u0442\u044C\u0438 \u043F\u0440\u043E \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u044E")],void 0,!0),_:1}),F(p,{class:"link",to:"/map"},{default:Q(()=>[xe("\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043A\u0430\u0440\u0442\u0443")],void 0,!0),_:1}),n.$route.name=="profile"?(oe(),xt(p,{key:1,class:"link",to:"/profile"},{default:Q(()=>[F(m,{id:"dropdown-1",text:"\u041C\u043E\u0439 \u043F\u0440\u043E\u0444\u0438\u043B\u044C",class:"btn-exit",right:""},{default:Q(()=>[F(v,{onClick:t[0]||(t[0]=C=>n.$router.push({name:"profile-edit"}))},{default:Q(()=>[xe(" \u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u043E\u0444\u0438\u043B\u044C ")],void 0,!0),_:1}),F(v,{onClick:t[1]||(t[1]=C=>f.exit())},{default:Q(()=>[xe(" \u0412\u044B\u0445\u043E\u0434 ")],void 0,!0),_:1})],void 0,!0),_:1})],void 0,!0),_:1})):(oe(),xt(p,{key:2,class:"link",to:"/profile"},{default:Q(()=>[xe(" \u041C\u043E\u0439 \u043F\u0440\u043E\u0444\u0438\u043B\u044C ")],void 0,!0),_:1}))],void 0,!0),_:1}),F(w,{class:"main-2"},{default:Q(()=>[F(p,{to:"/we"},{default:Q(()=>[Ine],void 0,!0),_:1}),F(p,{to:"/articles"},{default:Q(()=>[Pne],void 0,!0),_:1}),F(p,{to:"/map"},{default:Q(()=>[Mne],void 0,!0),_:1}),n.$route.name!="profile"?(oe(),xt(p,{key:0,to:"/profile"},{default:Q(()=>[Nne],void 0,!0),_:1})):et("",!0),n.$route.name=="profile"?(oe(),xt(p,{key:1,to:"/profile"},{default:Q(()=>[F(m,{id:"dropdown-right",right:"",class:"btn-exit-2"},{default:Q(()=>[F(v,{onClick:t[2]||(t[2]=C=>n.$router.push({name:"profile-edit"}))},{default:Q(()=>[xe(" \u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u043E\u0444\u0438\u043B\u044C ")],void 0,!0),_:1}),F(v,{onClick:t[3]||(t[3]=C=>f.exit())},{default:Q(()=>[xe(" \u0412\u044B\u0445\u043E\u0434 ")],void 0,!0),_:1})],void 0,!0),_:1})],void 0,!0),_:1})):et("",!0),f.userAdmin?(oe(),xt(p,{key:2,to:"/admin"},{default:Q(()=>[Rne],void 0,!0),_:1})):et("",!0)],void 0,!0),_:1})],2)}const vg=pt(One,[["render",Bne],["__scopeId","data-v-250b7d26"]]),Lne="/ecomap/assets/glass.b550ae8c.svg",jne="/ecomap/assets/plastic.31cd4612.svg",zne="/ecomap/assets/paper.4c1a39e3.svg",Fne="/ecomap/assets/battery.5ef4b33b.svg",Vne="/ecomap/assets/clothes.c1988640.svg",$ne="/ecomap/assets/metal.c73d63da.svg",Hne="/ecomap/assets/dangerous.75387392.svg",Une="/ecomap/assets/lamp.73c116e9.svg",Gne="/ecomap/assets/tetra.b1cf57e7.svg",Wne="/ecomap/assets/technique.d867a131.svg",Kne="/ecomap/assets/lids.756b09e6.svg",qne="/ecomap/assets/other.bb78a2ce.svg";const Yne={props:{all:Boolean},components:{BButton:to,BTooltip:o_},data(){return{types:[0,1,2,3,4,5,6,7,8,9,10,11]}},watch:{all(){this.all&&this.types.length<12?this.types=[0,1,2,3,4,5,6,7,8,9,10,11]:this.types.length>0&&(this.types=[]),this.$emit("reload",this.types)}},methods:{toggleType(n){this.types=this.types.includes(n)?this.types.filter(t=>t!==n):[...this.types,n],this.$emit("reload",this.types)}}},or=n=>(Kt("data-v-638d43ec"),n=n(),qt(),n),Qne={class:"icons"},Zne=or(()=>j("img",{alt:"\u0441\u0442\u0435\u043A\u043B\u043E",class:"logo",src:Lne},null,-1)),Jne=or(()=>j("img",{alt:"\u041F\u043B\u0430\u0441\u0442\u0438\u043A",class:"logo",src:jne},null,-1)),Xne=or(()=>j("img",{alt:"\u0431\u0443\u043C\u0430\u0433\u0430",class:"logo",src:zne},null,-1)),eie=or(()=>j("img",{alt:"\u0431\u0430\u0442\u0430\u0440\u0435\u0438",class:"logo",src:Fne},null,-1)),tie={class:"icons"},nie=or(()=>j("img",{alt:"\u043E\u0434\u0435\u0436\u0434\u0430",class:"logo",src:Vne},null,-1)),iie=or(()=>j("img",{alt:"\u043C\u0435\u0442\u0430\u043B\u043B",class:"logo-metal",src:$ne},null,-1)),rie=or(()=>j("img",{alt:"\u043E\u043F\u0430\u0441\u043D\u044B\u0435 \u043E\u0442\u0445\u043E\u0434\u044B",class:"logo",src:Hne},null,-1)),oie=or(()=>j("img",{alt:"\u043B\u0430\u043C\u043F\u043E\u0447\u043A\u0438",class:"logo",src:Une},null,-1)),sie={class:"icons"},aie=or(()=>j("img",{alt:"\u0442\u0435\u0442\u0440\u0430 \u043F\u0430\u043A",class:"logo",src:Gne},null,-1)),lie=or(()=>j("img",{alt:"\u0431\u044B\u0442\u043E\u0432\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",class:"logo-metal",src:Wne},null,-1)),cie=or(()=>j("img",{alt:"\u0448\u0438\u043D\u044B",class:"logo",src:Kne},null,-1)),die=or(()=>j("img",{alt:"\u0434\u0440\u0443\u0433\u043E\u0435",class:"logo",src:qne},null,-1));function uie(n,t,r,s,d,f){const p=ae("b-button"),v=ae("b-tooltip");return oe(),be(Ye,null,[j("div",Qne,[F(p,{id:"tooltip-target-1",class:Le(["btn glass",{pressed:d.types.includes(1)}]),onClick:t[0]||(t[0]=m=>f.toggleType(1))},{default:Q(()=>[Zne],void 0,!0),_:1},8,["class"]),F(v,{target:"tooltip-target-1",triggers:"hover"},{default:Q(()=>[xe(" \u0421\u0442\u0435\u043A\u043B\u043E ")],void 0,!0),_:1}),F(p,{id:"tooltip-target-2",class:Le(["btn plastic",{pressed:d.types.includes(2)}]),onClick:t[1]||(t[1]=m=>f.toggleType(2))},{default:Q(()=>[Jne],void 0,!0),_:1},8,["class"]),F(v,{target:"tooltip-target-2",triggers:"hover"},{default:Q(()=>[xe(" \u041F\u043B\u0430\u0441\u0442\u0438\u043A ")],void 0,!0),_:1}),F(p,{id:"tooltip-target-3",class:Le(["btn paper",{pressed:d.types.includes(0)}]),onClick:t[2]||(t[2]=m=>f.toggleType(0))},{default:Q(()=>[Xne],void 0,!0),_:1},8,["class"]),F(v,{target:"tooltip-target-3",triggers:"hover"},{default:Q(()=>[xe(" \u0411\u0443\u043C\u0430\u0433\u0430 ")],void 0,!0),_:1}),F(p,{id:"tooltip-target-4",class:Le(["btn battery",{pressed:d.types.includes(5)}]),onClick:t[3]||(t[3]=m=>f.toggleType(5))},{default:Q(()=>[eie],void 0,!0),_:1},8,["class"]),F(v,{target:"tooltip-target-4",triggers:"hover"},{default:Q(()=>[xe(" \u0411\u0430\u0442\u0430\u0440\u0435\u0438 ")],void 0,!0),_:1})]),j("div",tie,[F(p,{id:"tooltip-target-5",class:Le(["btn clothes",{pressed:d.types.includes(3)}]),onClick:t[4]||(t[4]=m=>f.toggleType(3))},{default:Q(()=>[nie],void 0,!0),_:1},8,["class"]),F(v,{target:"tooltip-target-5",triggers:"hover"},{default:Q(()=>[xe(" \u041E\u0434\u0435\u0436\u0434\u0430 ")],void 0,!0),_:1}),F(p,{id:"tooltip-target-6",class:Le(["btn metal",{pressed:d.types.includes(6)}]),onClick:t[5]||(t[5]=m=>f.toggleType(6))},{default:Q(()=>[iie],void 0,!0),_:1},8,["class"]),F(v,{target:"tooltip-target-6",triggers:"hover"},{default:Q(()=>[xe(" \u041C\u0435\u0442\u0430\u043B\u043B ")],void 0,!0),_:1}),F(p,{id:"tooltip-target-7",class:Le(["btn dangerous",{pressed:d.types.includes(7)}]),onClick:t[6]||(t[6]=m=>f.toggleType(7))},{default:Q(()=>[rie],void 0,!0),_:1},8,["class"]),F(v,{target:"tooltip-target-7",triggers:"hover"},{default:Q(()=>[xe(" \u041E\u043F\u0430\u0441\u043D\u044B\u0435 \u043E\u0442\u0445\u043E\u0434\u044B ")],void 0,!0),_:1}),F(p,{id:"tooltip-target-8",class:Le(["btn lamps",{pressed:d.types.includes(8)}]),onClick:t[7]||(t[7]=m=>f.toggleType(8))},{default:Q(()=>[oie],void 0,!0),_:1},8,["class"]),F(v,{target:"tooltip-target-8",triggers:"hover"},{default:Q(()=>[xe(" \u041B\u0430\u043C\u043F\u043E\u0447\u043A\u0438 ")],void 0,!0),_:1})]),j("div",sie,[F(p,{id:"tooltip-target-9",class:Le(["btn tetra",{pressed:d.types.includes(4)}]),onClick:t[8]||(t[8]=m=>f.toggleType(4))},{default:Q(()=>[aie],void 0,!0),_:1},8,["class"]),F(v,{target:"tooltip-target-9",triggers:"hover"},{default:Q(()=>[xe(" \u0422\u0435\u0442\u0440\u0430-\u041F\u0430\u043A ")],void 0,!0),_:1}),F(p,{id:"tooltip-target-10",class:Le(["btn technique",{pressed:d.types.includes(9)}]),onClick:t[9]||(t[9]=m=>f.toggleType(9))},{default:Q(()=>[lie],void 0,!0),_:1},8,["class"]),F(v,{target:"tooltip-target-10",triggers:"hover"},{default:Q(()=>[xe(" \u0411\u044B\u0442\u043E\u0432\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430 ")],void 0,!0),_:1}),F(p,{id:"tooltip-target-11",class:Le(["btn lids",{pressed:d.types.includes(10)}]),onClick:t[10]||(t[10]=m=>f.toggleType(10))},{default:Q(()=>[cie],void 0,!0),_:1},8,["class"]),F(v,{target:"tooltip-target-11",triggers:"hover"},{default:Q(()=>[xe(" \u0428\u0438\u043D\u044B ")],void 0,!0),_:1}),F(p,{id:"tooltip-target-12",class:Le(["btn other",{pressed:d.types.includes(11)}]),onClick:t[11]||(t[11]=m=>f.toggleType(11))},{default:Q(()=>[die],void 0,!0),_:1},8,["class"]),F(v,{target:"tooltip-target-12",triggers:"hover"},{default:Q(()=>[xe(" \u0414\u0440\u0443\u0433\u043E\u0435 ")],void 0,!0),_:1})])],64)}const hie=pt(Yne,[["render",uie],["__scopeId","data-v-638d43ec"]]);const fie={components:{BTooltip:o_},props:{type:[String,Number],pointId:[String,Number]},data(){return{types:[{text:"\u0411\u0443\u043C\u0430\u0433\u0430",icon:"paper.svg"},{text:"\u0421\u0442\u0435\u043A\u043B\u043E",icon:"glass.svg"},{text:"\u041F\u043B\u0430\u0441\u0442\u0438\u043A",icon:"plastic.svg"},{text:"\u041E\u0434\u0435\u0436\u0434\u0430",icon:"clothes.svg"},{text:"\u0422\u0435\u0442\u0440\u0430 \u041F\u0430\u043A",icon:"tetra.svg"},{text:"\u0411\u0430\u0442\u0430\u0440\u0435\u0438",icon:"battery.svg"},{text:"\u041C\u0435\u0442\u0430\u043B\u043B",icon:"metal.svg"},{text:"\u041E\u043F\u0430\u0441\u043D\u044B\u0435 \u043E\u0442\u0445\u043E\u0434\u044B",icon:"dangerous.svg"},{text:"\u041B\u0430\u043C\u043F\u043E\u0447\u043A\u0438",icon:"lamps.svg"},{text:"\u0411\u044B\u0442\u043E\u0432\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",icon:"technique.svg"},{text:"\u0428\u0438\u043D\u044B",icon:"shini.svg"},{text:"\u0414\u0440\u0443\u0433\u043E\u0435",icon:"other.svg"}]}},computed:{currentType(){let n=+this.type;return n<0||n>11?null:this.types[n]},currentId(){return`${this.pointId}-${this.type}`}}},pie={key:0},gie=["src","id"];function mie(n,t,r,s,d,f){const p=ae("b-tooltip");return f.currentType?(oe(),be("div",pie,[j("img",{src:"/src/assets/map/"+f.currentType.icon,id:f.currentId,class:"tb-icon"},null,8,gie),F(p,{target:f.currentId,triggers:"hover"},{default:Q(()=>[xe(Ue(f.currentType.text),1)],void 0,!0),_:1},8,["target"])])):et("",!0)}const m_=pt(fie,[["render",mie],["__scopeId","data-v-63a1acd1"]]);var Qh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function XR(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function bie(n){var t=n.default;if(typeof t=="function"){var r=function(){return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(n).forEach(function(s){var d=Object.getOwnPropertyDescriptor(n,s);Object.defineProperty(r,s,d.get?d:{enumerable:!0,get:function(){return n[s]}})}),r}var qo={};const eB=bie(q8);var kg,tB,nB,iB;Object.defineProperty(qo,"__esModule",{value:!0});var st=eB;const Es=Symbol(),Yi=new class{constructor(){nd(this,"events");nd(this,"ymapReady");nd(this,"scriptIsNotAttached");nd(this,"pluginInstalledGlobal");this.events={},this.ymapReady=!1,this.scriptIsNotAttached=!0,this.pluginInstalledGlobal=!1}$on(n,t){return this.events[n]||(this.events[n]=[]),this.events[n].push(t),()=>{this.events[n]=this.events[n].filter(r=>t!==r)}}$emit(n){const t=this.events[n];t&&t.forEach(r=>r())}};function rB(n){return new Promise((t,r)=>{if(window.ymaps)return Yi.ymapReady||(Yi.ymapReady=!0,Yi.$emit("scriptIsLoaded")),t(!0);if(document.getElementById("vue-yandex-maps-script"))return void Yi.$on("scriptIsLoaded",t);const s=document.createElement("SCRIPT"),{apiKey:d="",lang:f="ru_RU",version:p="2.1",coordorder:v="latlong",debug:m=!1,enterprise:w=!1}=n,C=`https://${w?"enterprise.":""}api-maps.yandex.ru/${p}/?${`lang=${f}${d&&`&apikey=${d}`}&mode=${m?"debug":"release"}&coordorder=${v}`}`;s.setAttribute("src",C),s.setAttribute("async",""),s.setAttribute("defer",""),s.setAttribute("id","vue-yandex-maps-script"),document.head.appendChild(s),Yi.scriptIsNotAttached=!1,s.onload=(y=>()=>{ymaps.ready(()=>{Yi.ymapReady=!0,Yi.$emit("scriptIsLoaded"),y(!0)})})(t),s.onerror=r})}const oB=n=>Array.isArray(n)?n.map(oB):+n,BD=["actionbegin","actionbreak","actionend","actiontick","actiontickcomplete","balloonclose","balloonopen","boundschange","click","contextmenu","dblclick","destroy","hintclose","hintopen","marginchange","mousedown","mouseenter","mouseleave","mousemove","mouseup","multitouchend","multitouchmove","multitouchstart","optionschange","sizechange","typechange","wheel"],LD=["balloonclose","balloonopen","beforedrag","beforedragstart","click","contextmenu","dblclick","drag","dragend","dragstart","editorstatechange","geometrychange","hintclose","hintopen","mapchange","mousedown","mouseenter","mouseleave","mousemove","mouseup","multitouchend","multitouchmove","multitouchstart","optionschange","overlaychange","parentchange","propertieschange","wheel"];function wg(n,t=!1){const r=[],s=[];let d,f;return{addGeoObject:(p,v)=>{r.push(t?v:p),clearTimeout(d),d=window.setTimeout(()=>n(r,"add"))},deleteGeoObject:(p,v)=>{s.push(t?v:p),clearTimeout(f),f=window.setTimeout(()=>n(s,"remove"))}}}var sB=st.defineComponent({name:"YandexMap",props:{coordinates:{type:Array,required:!0},zoom:{type:Number,default:10},bounds:{type:Array,default:null},behaviors:{type:Array,default:null},controls:{type:Array,default:null},detailedControls:{type:Object,default:null},events:{type:Array,default:()=>["click"],validator:n=>n.every(t=>BD.includes(t))},mapType:{type:String,default:"map"},settings:{type:Object,default:()=>({})},panOptions:{type:Object,default:void 0}},emits:[...BD,"geo-objects-updated","created"],setup(n,{emit:t,slots:r,expose:s}){const d=st.ref(!1),f=Yi.pluginInstalledGlobal&&st.inject("pluginOptions")||{};let p;const v=`yandexMap${Math.round(1e5*Math.random())}`,{addGeoObject:m,deleteGeoObject:w}=wg((y,E)=>{p&&y.length&&(y.forEach(S=>p==null?void 0:p.geoObjects[E](S)),t("geo-objects-updated",p.geoObjects),y=[])});st.provide(Es,{addGeoObject:m,deleteGeoObject:w});const C=()=>{d.value=!0,p=new ymaps.Map(v,{center:n.coordinates,zoom:n.zoom,bounds:n.bounds,behaviors:n.behaviors,controls:n.controls,type:`yandex#${n.mapType}`}),n.events.forEach(y=>{var E;return(E=p==null?void 0:p.events)==null?void 0:E.add(y,S=>t(y,S))}),n.detailedControls&&Object.keys(n.detailedControls).forEach(y=>{var E;p==null||p.controls.remove(y),p==null||p.controls.add(y,(E=n.detailedControls)==null?void 0:E[y])}),t("created",p)};return Yi.scriptIsNotAttached&&rB({...f,...n.settings}),Yi.ymapReady?ymaps.ready(C):Yi.$on("scriptIsLoaded",C),s(p),st.watch(()=>n.coordinates,y=>p==null?void 0:p.panTo(y,n.panOptions)),st.watch(()=>n.zoom,y=>p==null?void 0:p.setZoom(y)),st.watch(()=>n.bounds,y=>p==null?void 0:p.setBounds(y)),st.watch(()=>n.mapType,y=>p==null?void 0:p.setType(y)),()=>{var y;return st.h("section",{class:"yandex-container","data-test":"map"},[st.h("div",{id:v,style:"min-height: 100%;"}),d.value&&st.h("div",{style:"display: none;"},[(y=r.default)==null?void 0:y.call(r)])])}}}),aB=st.defineComponent({name:"YandexMarker",props:{coordinates:{type:Array,required:!0},markerId:{type:[String,Number],required:!0},properties:{type:Object,default:()=>({})},options:{type:Object,default:null},type:{type:String,default:"Point"},radius:{type:Number,default:null},events:{type:Array,default:()=>["click"],validator:n=>n.every(t=>LD.includes(t))}},emits:[...LD],setup(n,{emit:t,slots:r,expose:s}){var S,I;const{addGeoObject:d,deleteGeoObject:f}=st.inject(Es)||{},p=st.computed(()=>n.coordinates.map(oB)),v=st.ref(!1),m={geometry:{type:n.type,coordinates:p.value,radius:n.radius},properties:{...n.properties,markerId:n.markerId}},w=(S=r.component)!=null&&S.call(r).length?ymaps.templateLayoutFactory.createClass(`<div id="balloon-${n.markerId}" class="yandex-balloon"><div>`,{build(){w.superclass.build.call(this),v.value=!0},clear(){v.value=!1,w.superclass.clear.call(this)}}):null,C={balloonContentLayout:w,...n.options},y=new ymaps.GeoObject(m,C);n.events.forEach(M=>{var q;return(q=y.events)==null?void 0:q.add(M,L=>t(M,L))}),st.provide("marker",y);const E={...m,options:C};return st.onMounted(()=>{d(y,E)}),st.onBeforeUnmount(()=>{f(y,E)}),st.watch(()=>n.coordinates,M=>{var q,L;(L=(q=y.geometry)==null?void 0:q.setCoordinates)==null||L.call(q,M)}),s(y),(I=r.component)!=null&&I.call(r).length?()=>{var M;return v.value&&st.h(st.Teleport,{to:`#balloon-${n.markerId}`},[(M=r.component)==null?void 0:M.call(r)])}:()=>{var M;return(M=r.default)==null?void 0:M.call(r)}}}),lB=st.defineComponent({name:"YandexGeoObjectCollection",props:{options:{type:Object,default:()=>({})}},emits:["geo-objects-updated"],setup(n,{emit:t,expose:r,slots:s}){const d=new ymaps.GeoObjectCollection({},n.options),{addGeoObject:f,deleteGeoObject:p}=st.inject(Es)||{},{addGeoObject:v,deleteGeoObject:m}=wg((w,C)=>{d&&w.length&&(w.forEach(y=>d[C](y)),t("geo-objects-updated",d),w=[])});return st.provide(Es,{addGeoObject:v,deleteGeoObject:m}),st.onMounted(()=>{f(d)}),st.onBeforeUnmount(()=>{p(d)}),r(d),()=>{var w;return(w=s.default)==null?void 0:w.call(s)}}}),cB=st.defineComponent({name:"YandexClusterer",props:{options:{type:Object,default:()=>({})}},emits:["geo-objects-updated"],setup(n,{emit:t,expose:r,slots:s}){const d=new ymaps.Clusterer(n.options),{addGeoObject:f,deleteGeoObject:p}=st.inject(Es)||{},{addGeoObject:v,deleteGeoObject:m}=wg((w,C)=>{d&&w.length&&(d[C](w),t("geo-objects-updated",d),w=[])});return st.provide(Es,{addGeoObject:v,deleteGeoObject:m}),st.onMounted(()=>{f(d)}),st.onBeforeUnmount(()=>{p(d)}),r(d),()=>{var w;return(w=s.default)==null?void 0:w.call(s)}}}),dB=st.defineComponent({name:"YandexObjectManager",props:{options:{type:Object,default:()=>({})}},emits:["geo-objects-updated"],setup(n,{emit:t,expose:r,slots:s}){const d=new ymaps.ObjectManager(n.options),{addGeoObject:f,deleteGeoObject:p}=st.inject(Es)||{},{addGeoObject:v,deleteGeoObject:m}=wg((w,C)=>{if(!d||!w.length)return;const y=w.map(E=>({type:"Feature",id:E.properties.markerId,geometry:E.geometry,properties:E.properties,options:E.options}));d[C](y),t("geo-objects-updated",d),w=[]},!0);return st.provide(Es,{addGeoObject:v,deleteGeoObject:m}),st.onMounted(()=>{f(d)}),st.onBeforeUnmount(()=>{p(d)}),r(d),()=>{var w;return(w=s.default)==null?void 0:w.call(s)}}});let jD;const vie=rB,kie=sB,wie=aB,_ie=lB,Cie=cB,yie=dB;var Aie={install:(n,t)=>{jD||(jD=!0,Yi.pluginInstalledGlobal=!0,n.provide("pluginOptions",t),n.component("YandexMap",sB),n.component("YandexMarker",aB),n.component("YandexCollection",lB),n.component("YandexClusterer",cB),n.component("YandexObjectManager",dB))}};qo.YandexClusterer=Cie,iB=qo.YandexCollection=_ie,nB=qo.YandexMap=kie,tB=qo.YandexMarker=wie,qo.YandexObjectManager=yie,qo.default=Aie,kg=qo.loadYmap=vie;let hv=null;const Eie={components:{GlobalHeader:vg,KindsOfTrash:hie,ButtonGeneral:yi,TypeBadge:m_,BFormCheckbox:t_,YandexMarker:tB,YandexMap:nB,YandexCollection:iB,BSidebar:QN,BAvatar:Na,SidebarPlugin:xZ},data(){return{checked1:!0,checked2:!1,settings:{apiKey:"2b56651c-9a27-46cb-8ec3-aaa9f5771ca2",lang:"ru_RU",coordorder:"latlong",debug:!1,version:"2.1"},points:[],collectionKey:5555,map:null,types:[0,1,2,3,4,5,6,7,8,9,10,11],sidebarOpened:!1,sidebar1Opened:!1,pointClicked:null,userStore:So(),favourites:[]}},methods:{getPoints(n){Ct.get("map",{params:{isAccepted:!0,allIncludes:this.checked2,types:JSON.stringify(n),x1:0,x2:0,y1:0,y2:0}}).then(t=>{this.points=t.data.points,this.$nextTick().then(()=>{this.collectionKey++})})},getMarkerOptions(n){return{iconImageHref:"/src/assets/map/"+n.icon,iconLayout:"default#image",iconImageOffset:[-13,-13],iconImageSize:[30,30]}},getMarkerProperties(n){let{types:t}=n;if(typeof t=="string"&&(t=JSON.parse(t)),!Array.isArray(t))return{};let r=t.reduce((s,d)=>s+", "+this.getTypeName(d),"");return r=r.slice(2),{hintContent:this.capitalizeFirstLetter(r)}},getTypeName(n){switch(n=+n,n){case 0:return"\u0431\u0443\u043C\u0430\u0433\u0430";case 1:return"\u0441\u0442\u0435\u043A\u043B\u043E";case 2:return"\u043F\u043B\u0430\u0441\u0442\u0438\u043A";case 3:return"\u043E\u0434\u0435\u0436\u0434\u0430";case 4:return"\u0442\u0435\u0442\u0440\u0430 \u043F\u0430\u043A";case 5:return"\u0431\u0430\u0442\u0430\u0440\u0435\u0438";case 6:return"\u043C\u0435\u0442\u0430\u043B\u043B";case 7:return"\u043E\u043F\u0430\u0441\u043D\u044B\u0435 \u043E\u0442\u0445\u043E\u0434\u044B";case 8:return"\u043B\u0430\u043C\u043F\u043E\u0447\u043A\u0438";case 9:return"\u0431\u044B\u0442\u043E\u0432\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430";case 10:return"\u0448\u0438\u043D\u044B";case 11:return"\u0434\u0440\u0443\u0433\u043E\u0435";default:return"\u0434\u0440\u0443\u0433\u043E\u0435"}},capitalizeFirstLetter(n){return n.charAt(0).toUpperCase()+n.slice(1)},async handleMapCreate(n){hv=n,await kg();const t=new ymaps.control.Button({data:{content:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E"},options:{layout:ymaps.templateLayoutFactory.createClass("<button class='mobile-sidebar-button'>{{ data.content }}</button>"),maxWidth:150}}),r=new ymaps.control.Button({data:{content:"\u041F\u0440\u0435\u0434\u043B\u043E\u0436\u0438\u0442\u044C \u0442\u043E\u0447\u043A\u0443"},options:{layout:ymaps.templateLayoutFactory.createClass("<button class='mobile-sidebar-button'>{{ data.content }}</button>"),maxWidth:150}});r.events.add("click",()=>{this.$router.push({name:"new-point"})}),t.events.add("click",()=>{this.sidebar1Opened=!0}),hv.controls.add(t,{float:"none",position:{bottom:80,left:18}}),hv.controls.add(r,{float:"none",position:{bottom:80,right:18}})},changeTypes(n){this.types=n},openMarker(n){this.sidebarOpened=!0,this.pointClicked=n},editPoint({id:n}){this.$router.push({name:"edit-point",params:{id:n}})},deletePoint({id:n}){Ct.delete(`map/${n}`).then(()=>{this.getPoints(this.types),this.pointClicked=null,this.sidebarOpened=!1})},loadFavs(){Ct.get("profile/favs",{params:{search:null,limit:999,page:1,allIncludes:!1,types:JSON.stringify([0,1,2,3,4,5,6,7,8,9,10,11]),isAccepted:!0,x1:0,x2:0,y1:0,y2:0}}).then(n=>{this.favourites=n.data.points})},addInFav(n){Ct.get("map/fav/"+n).then(()=>{this.loadFavs()})},removeFromFav(n){Ct.get("map/unfav/"+n).then(()=>{this.loadFavs()})}},watch:{types(){this.getPoints(this.types),this.types.length==0?this.checked1=!1:this.types.length==12&&(this.checked1=!0)},checked2(){this.getPoints(this.types)}},mounted(){this.getPoints(this.types),this.loadFavs()}},xc=n=>(Kt("data-v-01d305aa"),n=n(),qt(),n),Tie={class:"map-page"},xie={class:"left-nav"},Sie={class:"choose-kind"},Oie=xc(()=>j("p",null,"\u041A\u0430\u043A\u043E\u0439 \u0432\u0438\u0434 \u043C\u0443\u0441\u043E\u0440\u0430 \u0432\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u0432\u044B\u0431\u0440\u043E\u0441\u0438\u0442\u044C?",-1)),Die={class:"all-selected"},Iie=xc(()=>j("div",{class:"show"},"\u0412\u0441\u0435 \u0442\u043E\u0447\u043A\u0438",-1)),Pie=xc(()=>j("div",{class:"show"},"\u0422\u043E\u0447\u043A\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u044E\u0442 \u0432\u0441\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0435",-1)),Mie={class:"mp-btn-wrapper"},Nie={class:"map"},Rie={key:0,class:"mp-point"},Bie={class:"mp-address"},Lie={class:"mp-icons"},jie={class:"mp-images"},zie={class:"mp-comment"},Fie={style:{"margin-top":"10px"}},Vie={key:0,class:"mp-admin"},$ie={class:"choose-kind"},Hie=xc(()=>j("p",null,"\u041A\u0430\u043A\u043E\u0439 \u0432\u0438\u0434 \u043C\u0443\u0441\u043E\u0440\u0430 \u0432\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u0432\u044B\u0431\u0440\u043E\u0441\u0438\u0442\u044C?",-1)),Uie={class:"all-selected"},Gie=xc(()=>j("div",{class:"show"},"\u0412\u0441\u0435 \u0442\u043E\u0447\u043A\u0438",-1)),Wie=xc(()=>j("div",{class:"show"},"\u0422\u043E\u0447\u043A\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u044E\u0442 \u0432\u0441\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0435",-1));function Kie(n,t,r,s,d,f){const p=ae("kinds-of-trash"),v=ae("b-form-checkbox"),m=ae("router-link"),w=ae("button-general"),C=ae("yandex-marker"),y=ae("yandex-collection"),E=ae("yandex-map"),S=ae("type-badge"),I=ae("b-avatar"),M=ae("b-sidebar"),q=ae("b-button");return oe(),be("div",Tie,[j("div",xie,[j("div",Sie,[Oie,F(p,{onReload:f.changeTypes,all:d.checked1},null,8,["onReload","all"]),j("div",Die,[j("div",null,[F(v,{modelValue:d.checked1,"onUpdate:modelValue":t[0]||(t[0]=L=>d.checked1=L),name:"check-button",switch:""},{default:Q(()=>[Iie],void 0,!0),_:1},8,["modelValue"]),F(v,{modelValue:d.checked2,"onUpdate:modelValue":t[1]||(t[1]=L=>d.checked2=L),name:"check-button",switch:""},{default:Q(()=>[Pie],void 0,!0),_:1},8,["modelValue"])])])]),j("div",Mie,[F(w,{class:"mp-btn"},{default:Q(()=>[F(m,{class:"mp-btn-link",to:"/point"},{default:Q(()=>[xe(" \u041F\u0440\u0435\u0434\u043B\u043E\u0436\u0438\u0442\u044C \u0441\u0432\u043E\u044E \u0442\u043E\u0447\u043A\u0443 ")],void 0,!0),_:1})],void 0,!0),_:1})])]),j("div",Nie,[F(E,{class:"ymap",settings:d.settings,coordinates:[47.24,39.73],zoom:13,onCreated:f.handleMapCreate},{default:Q(()=>[(oe(),xt(y,{key:d.collectionKey},{default:Q(()=>[(oe(!0),be(Ye,null,yn(d.points,L=>(oe(),xt(C,{coordinates:[L.pointX,L.pointY],"marker-id":L.id,options:f.getMarkerOptions(L),properties:f.getMarkerProperties(L),key:L.id,onClick:B=>f.openMarker(L)},null,8,["coordinates","marker-id","options","properties","onClick"]))),128))],void 0,!0),_:1}))],void 0,!0),_:1},8,["settings","coordinates","onCreated"])]),F(M,{modelValue:d.sidebarOpened,"onUpdate:modelValue":t[6]||(t[6]=L=>d.sidebarOpened=L),right:"",width:"340px"},{default:Q(()=>{var L;return[d.pointClicked?(oe(),be("div",Rie,[j("h5",null,Ue(d.pointClicked.title),1),j("h6",Bie,Ue(d.pointClicked.address),1),j("div",Lie,[(oe(!0),be(Ye,null,yn(JSON.parse(d.pointClicked.types),B=>(oe(),xt(S,{"point-id":d.pointClicked.id,type:B},null,8,["point-id","type"]))),256))]),j("div",jie,[(oe(!0),be(Ye,null,yn(d.pointClicked.images,B=>(oe(),xt(I,{size:"8rem",rounded:"sm",src:B},null,8,["src"]))),256))]),j("p",zie," \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439: "+Ue(d.pointClicked.comment),1),j("div",Fie,[d.favourites.some(B=>+B.id==+d.pointClicked.id)?(oe(),xt(w,{key:1,onClick:t[3]||(t[3]=B=>f.removeFromFav(d.pointClicked.id)),class:"mp-button"},{default:Q(()=>[xe(" \u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0438\u0437 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u044B\u0445 ")],void 0,!0),_:1})):(oe(),xt(w,{key:0,onClick:t[2]||(t[2]=B=>f.addInFav(d.pointClicked.id)),class:"mp-button"},{default:Q(()=>[xe(" \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435 ")],void 0,!0),_:1}))]),(L=d.userStore.user)!=null&&L.is_admin?(oe(),be("div",Vie,[F(w,{class:"mp-button",onClick:t[4]||(t[4]=B=>f.editPoint(d.pointClicked))},{default:Q(()=>[xe("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C")],void 0,!0),_:1}),F(w,{class:"mp-button",variant:"red",onClick:t[5]||(t[5]=B=>f.deletePoint(d.pointClicked))},{default:Q(()=>[xe("\u0423\u0434\u0430\u043B\u0438\u0442\u044C")],void 0,!0),_:1})])):et("",!0)])):et("",!0)]},void 0,!0),_:1},8,["modelValue"]),F(M,{modelValue:d.sidebar1Opened,"onUpdate:modelValue":t[10]||(t[10]=L=>d.sidebar1Opened=L),left:"",width:"340px"},{default:Q(()=>[j("div",$ie,[Hie,F(p,{onReload:f.changeTypes,all:d.checked1},null,8,["onReload","all"]),j("div",Uie,[j("div",null,[F(v,{modelValue:d.checked1,"onUpdate:modelValue":t[7]||(t[7]=L=>d.checked1=L),name:"check-button",switch:""},{default:Q(()=>[Gie],void 0,!0),_:1},8,["modelValue"]),F(v,{modelValue:d.checked2,"onUpdate:modelValue":t[8]||(t[8]=L=>d.checked2=L),name:"check-button",switch:""},{default:Q(()=>[Wie],void 0,!0),_:1},8,["modelValue"])])]),F(q,{onClick:t[9]||(t[9]=L=>d.sidebar1Opened=!d.sidebar1Opened),class:"ready-btn"},{default:Q(()=>[xe("\u0413\u043E\u0442\u043E\u0432\u043E")],void 0,!0),_:1})])],void 0,!0),_:1},8,["modelValue"])])}const qie=pt(Eie,[["render",Kie],["__scopeId","data-v-01d305aa"]]);const Yie={name:"EnterInformation",components:{ButtonGeneral:yi,BFormInput:La,BFormGroup:Iu,BFormCheckbox:t_,BFormTextarea:RN,BAvatarGroup:K2,BAvatar:Na,BRow:ja,BCol:bo,BContainer:xr,BModal:io},data(){return{title:"",address:"",comment:"",types:[],options:[{text:"\u0411\u0443\u043C\u0430\u0433\u0430",value:0},{text:"\u0421\u0442\u0435\u043A\u043B\u043E",value:1},{text:"\u041F\u043B\u0430\u0441\u0442\u0438\u043A",value:2},{text:"\u041E\u0434\u0435\u0436\u0434\u0430",value:3},{text:"\u0422\u0435\u0442\u0440\u0430 \u041F\u0430\u043A",value:4},{text:"\u0411\u0430\u0442\u0430\u0440\u0435\u0438",value:5},{text:"\u041C\u0435\u0442\u0430\u043B\u043B",value:6},{text:"\u041E\u043F\u0430\u0441\u043D\u044B\u0435 \u043E\u0442\u0445\u043E\u0434\u044B",value:7},{text:"\u041B\u0430\u043C\u043F\u043E\u0447\u043A\u0438",value:8},{text:"\u0411\u044B\u0442\u043E\u0432\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",value:9},{text:"\u0428\u0438\u043D\u044B",value:10},{text:"\u0414\u0440\u0443\u0433\u043E\u0435",value:11}],icons:["paper.svg","glass.svg","plastic.svg","clothes.svg","tetra.svg","battery.svg","metal.svg","dangerous.svg","lamps.svg","technique.svg","shini.svg","other.svg","multi-point.svg"],images:{img1:"/src/assets/add_photo.svg",img2:"/src/assets/add_photo.svg",img3:"/src/assets/add_photo.svg",img4:"/src/assets/add_photo.svg"},pointX:null,pointY:null}},computed:{pointIcon(){return this.types.length==0?null:this.types.length>1?this.icons[this.icons.length-1]:this.icons[this.types[0]]},pointImages(){return Object.values(this.images).filter(n=>n!="/src/assets/add_photo.svg")},user(){return this.userStore.user},userName(){var n;return(n=this.user)==null?void 0:n.name}},methods:{addPhoto(n){this.$refs[`file${n}`].click()},sendImage(n,t){Ct.post("images",n,{headers:{"Content-Type":"multipart/form-data"}}).then(r=>{let s=r.data.link;this.images[`img${t}`]=s})},createPoint(){let n={title:this.title,iconImageHref:this.pointIcon,address:this.address,pointX:this.pointX,pointY:this.pointY,types:JSON.stringify(this.types),images:this.pointImages,comment:this.comment};Ct.post("map",n).then(()=>{this.$refs["modal-1"].show(),this.clearForm()})},hideModal(){this.$refs["modal-1"].hide(),this.$router.push({name:"map-page"})},clearForm(){this.title=null,this.address=null,this.pointX=null,this.pointY=null,this.types=[],this.images={img1:"/src/assets/add_photo.svg",img2:"/src/assets/add_photo.svg",img3:"/src/assets/add_photo.svg",img4:"/src/assets/add_photo.svg"},this.comment=null},handleChange(n,t){let r=n.target.files[0];if(!r)return;let s=new FormData;s.append("file",r),this.sendImage(s,t)}},async mounted(){await kg({apiKey:"2b56651c-9a27-46cb-8ec3-aaa9f5771ca2",lang:"ru_RU",coordorder:"latlong",debug:!1,version:"2.1"}),new ymaps.SuggestView("address-input").events.add("select",t=>{let r=t.get("item").value;ymaps.geocode(r).then(s=>{let d=s.geoObjects.get(0);this.address=d.properties._data.text;let f=d.geometry.getCoordinates();this.pointX=f[0],this.pointY=f[1]})})}},Sc=n=>(Kt("data-v-3f95bdc3"),n=n(),qt(),n),Qie={class:"point-form"},Zie=Sc(()=>j("div",{class:"head-line"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u0442\u043E\u0447\u043A\u0435",-1)),Jie={class:"line",style:{"margin-bottom":"10px"}},Xie=Sc(()=>j("span",{class:"point"},[xe("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"),j("span",{class:"need-circle"})],-1)),ere={class:"line"},tre=Sc(()=>j("span",{class:"point"},"\u0410\u0434\u0440\u0435\u0441",-1)),nre=Sc(()=>j("span",{class:"point"},"\u0412\u0438\u0434\u044B \u043C\u0443\u0441\u043E\u0440\u0430",-1)),ire={class:"checkboxes"},rre=Sc(()=>j("div",{class:"head-line"},[xe("\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438"),j("span",{class:"need-circle"})],-1)),ore={class:"images"},sre={class:"comment-block"},are=Sc(()=>j("div",{class:"point"},[xe("\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"),j("span",{class:"need-circle"})],-1)),lre={class:"to-right-bottom"},cre={class:"my-4"};function dre(n,t,r,s,d,f){const p=ae("b-col"),v=ae("b-row"),m=ae("b-form-input"),w=ae("b-form-checkbox"),C=ae("b-avatar"),y=ae("b-form-textarea"),E=ae("button-general"),S=ae("b-container"),I=ae("b-modal");return oe(),be("div",Qie,[F(S,null,{default:Q(()=>[F(v,null,{default:Q(()=>[F(p,{cols:"12",class:"inf-col"},{default:Q(()=>[Zie],void 0,!0),_:1})],void 0,!0),_:1}),F(v,null,{default:Q(()=>[F(p,{md:"6",class:"inf-col"},{default:Q(()=>[j("div",Jie,[Xie,F(m,{class:"input",modelValue:d.title,"onUpdate:modelValue":t[0]||(t[0]=M=>d.title=M)},null,8,["modelValue"])]),j("div",ere,[tre,F(m,{class:"input",modelValue:d.address,"onUpdate:modelValue":t[1]||(t[1]=M=>d.address=M),id:"address-input"},null,8,["modelValue"])]),j("div",null,[nre,j("div",ire,[(oe(!0),be(Ye,null,yn(d.options,M=>(oe(),xt(w,{modelValue:d.types,"onUpdate:modelValue":t[2]||(t[2]=q=>d.types=q),key:M.value,value:M.value,name:"flavour-3a",class:"check-box"},{default:Q(()=>[xe(Ue(M.text),1)],void 0,!0),_:2},1032,["modelValue","value"]))),128))])])],void 0,!0),_:1}),F(p,{md:"6",class:"inf-col inf-col-flex"},{default:Q(()=>[j("div",null,[rre,j("div",ore,[F(C,{button:"",onClick:t[3]||(t[3]=M=>f.addPhoto(1)),size:"4rem",rounded:"sm",class:"line-image",src:d.images.img1},null,8,["src"]),F(C,{button:"",onClick:t[4]||(t[4]=M=>f.addPhoto(2)),size:"4rem",rounded:"sm",class:"line-image",src:d.images.img2},null,8,["src"]),F(C,{button:"",onClick:t[5]||(t[5]=M=>f.addPhoto(3)),size:"4rem",rounded:"sm",class:"line-image",src:d.images.img3},null,8,["src"]),F(C,{button:"",onClick:t[6]||(t[6]=M=>f.addPhoto(4)),size:"4rem",rounded:"sm",class:"line-image",src:d.images.img4},null,8,["src"]),j("input",{id:"file-input",type:"file",style:{display:"none"},name:"name",ref:"file1",onChange:t[7]||(t[7]=M=>f.handleChange(M,1))},null,544),j("input",{id:"file-input",type:"file",style:{display:"none"},name:"name",ref:"file2",onChange:t[8]||(t[8]=M=>f.handleChange(M,2))},null,544),j("input",{id:"file-input",type:"file",style:{display:"none"},name:"name",ref:"file3",onChange:t[9]||(t[9]=M=>f.handleChange(M,3))},null,544),j("input",{id:"file-input",type:"file",style:{display:"none"},name:"name",ref:"file4",onChange:t[10]||(t[10]=M=>f.handleChange(M,4))},null,544)]),j("div",sre,[are,F(y,{modelValue:d.comment,"onUpdate:modelValue":t[11]||(t[11]=M=>d.comment=M),class:"input-comment",id:"textarea-default"},null,8,["modelValue"])])]),j("div",lre,[F(E,{class:"inf-button",onClick:f.createPoint},{default:Q(()=>[xe(" \u041F\u0440\u0435\u0434\u043B\u043E\u0436\u0438\u0442\u044C \u0441\u0432\u043E\u044E \u0442\u043E\u0447\u043A\u0443 ")],void 0,!0),_:1},8,["onClick"])])],void 0,!0),_:1})],void 0,!0),_:1})],void 0,!0),_:1}),F(I,{ref:"modal-1",title:"\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u0432\u0430\u0448\u0443 \u043F\u043E\u043C\u043E\u0449\u044C!",busy:""},{"modal-footer":Q(()=>[F(E,{class:"modal-button",onClick:t[12]||(t[12]=M=>f.hideModal())},{default:Q(()=>[xe(" \u041E\u041A ")],void 0,!0),_:1})]),default:Q(()=>[j("p",cre,Ue(f.userName())+", \u043C\u044B \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0438\u043C \u0432\u0430\u0448\u0443 \u0442\u043E\u0447\u043A\u0443 \u0438 \u043F\u0440\u0438\u0448\u043B\u0435\u043C \u043E\u0442\u0432\u0435\u0442 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 3 \u0434\u043D\u0435\u0439. \u0421 \u043B\u044E\u0431\u043E\u0432\u044C\u044E, EcoMap \u2764",1)],void 0,!0),_:1},512)])}const ure=pt(Yie,[["render",dre],["__scopeId","data-v-3f95bdc3"]]);const hre={name:"DataPoint",components:{GlobalHeader:vg,ButtonGeneral:yi,InfAboutNewPoint:ure,BContainer:xr}},fre=n=>(Kt("data-v-fc3853cf"),n=n(),qt(),n),pre={class:"dp-wrapper"},gre={class:"top-menu"},mre=fre(()=>j("div",{class:"need-block"},[j("span",{class:"need-circle"}),j("p",null,"\u041D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u043E\u043B\u044F")],-1));function bre(n,t,r,s,d,f){const p=ae("button-general"),v=ae("inf-about-new-point"),m=ae("b-container");return oe(),be("div",pre,[F(m,null,{default:Q(()=>[j("div",gre,[F(p,{class:"back-btn",onClick:t[0]||(t[0]=w=>n.$router.go(-1))},{default:Q(()=>[xe(" \u041D\u0430\u0437\u0430\u0434 ")],void 0,!0),_:1}),mre]),F(v,{class:"dp-form"})],void 0,!0),_:1})])}const vre=pt(hre,[["render",bre],["__scopeId","data-v-fc3853cf"]]),kre="/ecomap/assets/background.c127db88.png",wre="/ecomap/assets/slide.9c9b5c81.png",zD="/ecomap/assets/point1.e2d862a5.png",FD="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAABd1BMVEUAAAAAYGAAY2AAYmAAY2AAY2AAYGAAYmAAY2AAY2AAY2AAYmAAZGAAYmAAYmAAYmAAYmAAZGAAY2AAYGAAY2AAY2EAY2AAY2IAYmB2dncAYl8AZGIbGRoAZF8AY2QGUlMZGhcPJiccHRwAZGUYGhtUVVYNKil2dnMQIyUQSEMGUlEYGRl1dXZ1d3MWGxkDVlEOTlANKCgiIiIPIyN1dnIAY2hAQEASHxsgICATHRkOQj8EXFoTGxkOHx1qamoUHx5zdHUsLCwAYGJVVlYbHBsZGhYkJCRtbm5sbGwDXlsxMTFzc3A+Pj4oKCg8PDwAYVwDVVI3NzcqKiomJiYHSkcZHRwAZWcuLi4HSkZ0d3hxcXA5OTk0NDRafH1zeHVueHglZWQXYV9pe35BcXBmZmZUVlEVGxcGX14NR0VERERleXgPXVwPNDVOeHgHWFZKSkoRIiBRUlFHR0cQPTxgYV8wb21NTU0cMTESLi9Za2pHW14LSkk4OjVoO53wAAAAFnRSTlMAIL/fn5AQcO/P3zCAgH9QYECvQG9feL8MugAACl9JREFUeNrM1gluwjAQBdDxvilOmoR//6OWtlIRIJATvMw7wdd8e2yqwKbZGS2DUvjlVZCrcXOi8ew8rQovhXXaLI1iF6NQIOhZUHdbljhAuq59i6xwWDSd5midxElyoeZE9vhA1G3HuEl87BaRZbyGEYXEFduI1uCKb8Tdo7K4UD1JooFYbYgZjWSqQQT84zjE3aMh75hd3mfGcq23Rs2bRwcx0UkXdOKYbZdnmXm+UwkN3hmfUKMzzbjfP4Z5PiAzz3cg4Y5BLlQkYZgvKiAihvEF77KNGChYbgv6kWF7QQo/DsJjhPJjGDFcYLih701vCgYLiXPBPyS9sIAJx+8Juectjz/qNzvm0to2EARgVa3zcAhpUpgZZr0bmzXBDzApJpjYDgaRHHJSDmnoL0hzCKHQQw/9892xIhnbxN51ivChH36sRlrzaXZHA36byhZXSMaHDRJIEMzmvxeHJhCBGUBpEJTCRZT2BhAAtCZaaXgcmEDMPokIheXzIYibE11JvNkOVKiMtdaoJaw3CoAwQVSwkuOgBJKkkFOWG383zEBJkqwRjIMSyIwI6eil0+ncdRyni3QCuBsxozOE1XwIKWFmUPjy66zf6jcarRlyEETDTWk8n7JKEoTVHAZ1YVaKh/1J85X6Il0X7ArX19n3Ms2e0Ow1J1fPI61Qw2r2dvy7MAJr+HHWq9e6tVptwe2mGDjq13J8s0A9D2bXNxt3WhOsYrEjx7AGrXB0Vqt9m0wZTBYZLHHpKAZzJx67rXOG9YKxd4mQexkcNeq13+2ndvvJvTdAZsnU50GvdZ6A4F0mFT/B3qCdcpoyp8WZAp6RjXVeXlREUybitH01bp0jCN5lUvUS/NqbDMkCWosPr1y8ycPSJVYp9WAN/vk56fsJVr3+6ygEb0XQGGUuLsxrdzM2Bx1KwAKTfRZBJTvZIt9fjT0Fi26y6ys4GBICWAvsAEFl6CUgZxZh1lop/u4veFjUsOcSj4cpMROwBNeARDAfSIiMCcpgnNewr+DlkIFBBNED0BpxfsmttRQgCDuRcOQlaERwusQITIhEayfJzdBcAHG6xPKY8eJz1od9BR/Hw8Sik+P8uQJvwjkwQ8YqlT3oK1iJhH3fJX50GbSSPtgEzCo/KxLZJh5UxW8Htldwugm/bLPgkRM83GZBeRKeBAmacgVPpEa2WVCqBLZZ0FXJgZcgZJ2kfMED6SM+GLwVweT9RXIfJHgU7YYLQk4JgrtRJUiQys5gJToJEzTAiLlhCYKfojhMEIHRlCgYR/vgQ1HFWHIG96OPYYKm5D1YjfaCBBNTahWLIIQJlp1BiMCv1f3DTvJf8C/7Zv+cNAzG8el89zxPf6DFAtM6xBtsapwY9Q7HyxXoaKHteT1exus8ZNO9++4f7zctE7dKKOrpvPNTSJqnaftt0qcpSfgvkCNw8s/OP+8ksydb4IWTLvDSzMWTLfDizGm/AotMYDiCzu9fQJICjsBMwCenPR0fvO63padhNlIkCuPGwJA8bncSo65uSXAE+r7M654XVn4Hpoie0gDet8YRiUSGsdcIJCZwZwkCJZ8Cz86cn0pgGecKiCjEY3xXom4ojLqxD8vRzXXj1eNpBJ6fuTqFwMf7C5W5SqVyj1FxuXeUoeGI+Uiuyv7zaQRenbk8RUuytHPn17n74uYUAi/PnJtCYCi+9GT+CHHA4hcAEZ+QG4SYQOY5fkDPwqz/Kr6JYbAQiH/Td/M4804Yd7k5TDj5ljCMNr8Uj4cgcAGH9FWGF313HkmsBOddgfM4Sy40HdDJonlnfQdV7LiTOPEpw+1+E4f1cENkPfub7+30EDMUh8Zv5IZBzk2NzFgODdiDpF3s9Pv75bD0CL3JbGSCW9dXuH3o4uhRESh3eh9T69FsdB0cJEvJkkMy6X4AolEKIIe77oZ6aTcFCmz52GsXMQoEhQHoy3DK8Rq3Cxj7A+dIxc6b7sp6wyL6nlHaNfTtPd14pxvbB6X6XlLXd0v6tqHr2VI9+c7Q90pQU6+/Q55dvZ7c1uvZgWEMDH0wMOq6bgzyG2u9zaKAmQ4Rd4oF4IxDzHIEsl76yG2h317rVg++EMtUVcVUGzRt24jTGmpdsxq2Zqqmpdkstky7odimraimqqiaadUtRUlnNaLWFWKoimUopJ6qdnudoijdfhQRRL6PgLOcOmZDWBGx2F5rVQtpGVCDyLJKZblh5XJqOienVZkqaSpb2KxplkxNVSa2KVMVBtWkIYPSXNwYyCynbFg52siFtPXWxpt2X2SVg1oey5mJw+1hUN7srbWCB2lKqJ2mmqUSkxpUIaoim6ZKNVpCghkaKrGUOjWpTjSq24RYBiGUEq1B5cGAUNWmxNAoqWuyFa22UM1lZ5iP145MHIeQbhQ3exutZkolRLFRS0rJJERvEKIlFUoViwlgXwI9mkKsbYXQbVxMIwmLplATxd3QiJZtKIquEiVpE003qZVNVLtvOuVwmHcLnuIPJsLDBLhHr9tqLtdShUIhXyvkC7V8IVXL51P5WuoQOObhJ5VfxyZsQz5QW08hxF7IjjXEzrcAErFgd61dFHEO7mAi50mIXTNwX+hLxEBiJRgMJoIJBFhNgBV82BehEwNmdTIiQk4WsA+SToAF8QrLUF2MBVtrbzuixCSGedMqro0VKPY7bzaayziFQzU4JOGcjEVeHNmjpHcji9ixYjGEG71OWRQiIu5EUfC+KQyZHXv/scdLc9HDMlhdRswYWQ9ZXf3OEPNkWXQtiWa12lzZQDWHA2hUAh5mIY1fx9DXiuGCYz8CZ171UqvVEKzGfIDyazaXm6jmckBEc+LxlrOTpqVkUL+LOBCrEi/snhtTj1j8EAs2F1GW1e7bZ2JGkDwCT02a2BPptz9lX75EAxzNeohyyGKZzEuXaPRTuwyBYQj0+jB3WsXtzNb+h4c7z1+4oB3Jyd/IIY0QjExA9s8LxvOdW68/FzEbDm2CZ7h9xLkLP3YSsb91f//1hzsPHtz6/Tx4cOfD69evFp7h3cudk+l1Eb6bsImIkUymv7lVmVuY888CmJu8x72Fua3NfrksOQ9CeLHobYcnuYngvGsJEhB+N8MXTRz6MPEDF+G7ieAijRA8puMbfVphHsF5kQGc1kSYHuln8nHeE/hFKPwBOAXIKUKOUncm9Zgc/rZ4DLwC9DcL08dFc7dML/DMv/hnA/w2OTGwAvRy7q//Ze1rN3e0qzAIgwH4bztAAstgF33/Rz0z8SQanZnTQfV7gj+UEm7af0J4KKgRBStYTRCLg7u3HbJqVAMynojanXz38Gn/Tg7fPgANH7Uj8VjYnYEWwgZVu0m4YW5KNmCjrF1kwHTCbHgdzln+rYU4zavsANMJM2A6YcYKIx+Hgp2SaAOnit2oQcJIv7zebxFsL0i8K7Ol8j5+bwy8Lq0OkRM+p5wjmrt912hQW817bEQmLMxG5IoLkxG54kg0yFutkQmHK6w7cfBogpzoyyQTGkqB9QWcK5qjaYi6gbji0Yuv4/wkpczj5NFfmoKbOcrpEksiDy5M6RPZ/gDypTqIIgVstQAAAABJRU5ErkJggg==",VD="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAABHVBMVEUAAABQIBxQIhxQIxxQIh1QIx1QIh1QIx1QIhxQIx1QIhxQICBQIBBQIxxQJBxQJR1QIx1QIh1QIx1QIB1QIBxQIBtQIh5RIx5QIx3+/PtTJR5RJB5WKSBUJx9YKiH++/laLCJcLiX79/RbLSP9+vhhMylfMCf9+PZsPzVjNizYxb369PHs4NppPDH07OhmOC/27ury6eTg0cvu4t12S0CdenCXc2mNZluIYVZ5T0VvQznOuLHBp5+4nZSnhnyUb2SEXFKBWE3p3dfezMXFraSrjYNzRjv48e7v5ODk1M7bycLKs6y7oJeylIuRa2Ho2tTm2NHVwbnIsKe7opqhfnOad219U0jRvLawkYeignh/VUqqin/Uvra2mI+9pZ27L9bkAAAAGHRSTlMAIIC/359w78/fkBAQYEAwr49QUEAwz19aifA2AAALiUlEQVR42syaaVvTQBDH6UEBLQqCj5PZ2c2md4G2QAuFckNB5FABQcXj+38MtQkem7SZlBb5veIhCf1n7tkyMgDSL2dS06OJ8WQSOowlxxNT06mZlyP/n/RMfCoJXRmfis+mR/4X6cnpJDAYH52JjTw4s/EERCCRelB/x+JJiMzE9APZMZ1KQJ8kJkeGTiw+BvdgYnS4ZpxNwL35I/FRyhuixFhH3qOVmJ6GnzxeiakxGDATg8zo5wkYAhMDM2IchkR8MMkxDn94hEZ0o29YjKUeWfL6mU4/VvcOws2zY/AATDzvV98reCBSj6y6+IkPW58Q+BPxCxSAKKQQAgQMU2Gk9EVCSURZp5Avl/P5rNJSSXQlDknhKEQAla6tr26dzi3v1+sLC+8PNtqHzZajBQKb0aH4VwiUUjt7hx+PM9a/5BaX29cVklKQ4BXEYcSfRFm42VrOWF043lipEBHyvDxYfW5GlFfn5q1e5BaubpQacBymgAERqfyH90UrlOrljSYlIZxXzOkPOJAurJ1YPKrfWloCg2es/ptk+BcFHW3mLDYL14SIInS4YfTldJJVV/I7x7YVgczpkWKk83h6MAWaKme2FZGFphhEsUlxzCdLc7YVmcUPRCTF/QaH2BhDoL7dt2wrOpkzrUncLww5ASjWFq3+yFw6KjwM71mhlV57bfVLrp13lFJ91+sYhEPrVdu2+qW4mQ0VCM/7dzAilhase2BntpQOE5jopm8SwpCyNtfDgUtv5tqb7Y2D+rzd/aa3mrgrQPQWIrNnuS6mWdr8fKMcmVUoSZWa5wfdRpzXRxTaUNJ9zahCSnxrB6fn150ykDtYIQKSUnr905IVyHIWiVGuo2cIkiwtBcvb1UqAVD8hqVTnB61l+XNgvNpfSEEIsX6GfEHOZnAPUyS1AMBfSCkIAZFQE5XaQY6eL2mInicxRgfZywXYo13p1RV3lgKCYoM4g1f0LSkfkMHFbU29wjbbOAh4qVuIbMIYYwRcs/0puaOVFh1jgegAKFzcvYCwHPBaJygE04T8CJTZA5/ATNMhpaRbIklRVuUrtYLUpBDBBSlAod1UyDMhPwKJbn367GuVFb+v672tg6Virji/f7layf4RSLU3/ijUkpfI/AgkfWWZnEmU7oJH5HxYnv+rbF81CCUJAIGK9qq+RF4PFRiPOGZRadFXcUt4t4Gq5nLRGE/PK5Ko43xSK77l7zBaO5mEUGjVl8C7XiBJ4ZxX/XF2sq7d60o5F5bBOx3pUC4BoWQ3LIPLLP72fiawgt+oziYnSN2+Nt+ugYKTJvw5sGZ6ONMgcNFbXdb3dw3ZkYGq4OtBXyTy0+QJhLNr5vCp8iYwsdL19GOuhtgRqNbMez5KIRhpwt9EDg2BxTXyykur+whrH5JwBRZOjOeP8xQmcCLSWceGf2hyLej0WpGXGq5AUp+Nu3INKRgNmbkLI8p3xkdvas+CrSWrB99cgRpbZppck+CWwgRDoGPkiP3BC3IyfG/wxnGfh4L5hp8UhJFg5zDKRs5oBa07gR97b0m74CJPjStb4S4Gt1a/YAjEXTPGa14Slg3LmGx79Q7PjQttglAm2efl+NbvOpfWvNWT7+QpXPGPXBDGk47AcQhFqFXzz0sQRn0M5tTbkHDHNl5RCgBOoXkK4Qjf+89JcGlavdmQ7p2+hfA9ArCCcPZ+AtfsEIHoWkr4BAoIZ4Z5pI/i2qzTClzWQwReklvv8NqMYhS8g/8pjgWFGUH7BXAxx0STLc+CuG1cOOC4eIqXI+BfmKplcHGWe9fBFYmuwCvT9wKAlSXAAPHGNqdV6fXi71Yvqg1PB52YvVICgzRvUhDiqGh2Ki1dgb2z5OJORrnuW2iAwcuRFyyB6FTNec4TiPkDqzuZFc+AYrfI3ErMNE4BC7Fv+u4IPe/v5LpH4EnBu4valsEKCtZ/CzwBFvLC12Q9C1L+tHsErnnH+rL23jLoBDGj2U0BC7wyQ61ekAQAQlLXU2H7nLwqqFfMx4s1EqzvuRPAY9syyK2i101pfTFY3yYBKgEAIu8rRnXJcnGCVQaDW1q9rBA6n6726paf3KaDdwK3fU/PIUvg+EgSeLT8q++5lN65F5YubP83X1rJjkBBlWpAhwFepR4DHuQPtPk9eWcGyq/WjW83W0SKXIEFv3xrFQFYAoEJBXSMekkpt4/pLDk7F3dGthfOSppIeQLpU4D/jxBYsAWK7cDF/O+pU1aah1tnZ98+3zpZ8n6PWaWaGcvHsQMDFoh7/uNBy/paRvgNkZSkhJTkyXM3zuZi4KA9aIGkfzRzrktNBEEU3iQQQtYkFJZWO9Mzu8kmIaARBERB5aICogKK3FHf/zGkcKwoZMnp3QX5quAXVJ06O90903Ppu/6dain9ZyDq301+pXRPn+GVvnuPJyZzgfz6UT++LEYcWxNM2Fpv9E2Ri5k7aNTzmO7G87ZV+jeXU5ve+B70Px/AmjDgPKhUtxFT0L6esmVr2Z7/OGFGG6VV/eRpzL98CwljxAlE0LFz58arw4gja13D37X8J5djD4YEK0oRxChY6tyqIpaJ2eWlsCeQwvaLnzPXNL3aShNEySvgDrr+TAzB3N7yy8VOp7OxuPDj4/XHBt4rAilIDgpGW8CW+jmD/2iVUMa8MqEou/4oA9ySEPSw7BUJxm48zkbgG0soRW9c4GD4NRN9wRou8L5XIxi2B0EWAr/UFaE88HyCMTZ6loXAE4UL9DxJpmb+lsEHfjxtmEBKrnkEK5xvpFf4yWhNIGPCE+cmgzAJDhXB5F0PHYXDndSZ5l1LE0zVtYBR2LZng5QGrrAlmHtupw53MNxPKXCuJRBYcnudMMw8vZvOwJMwZEIZdtvtMIaZz4JUSbplrCaU+xcCfZLA3bdpDFxWpHGBud5mIgzb7RQCd7uKcApJ7gapNKMwOLYSgUUnsEoCDPNx4lH4djIyhPOgdyRAgu4kHYXNM8WEM5rw/pcKkwby7qRIYPnSsRSYcHI22Rnl/dAJlMSwPI61CRcmkgicaluJwILsikEPzdyeSqCvscNMAipeD3+EBGhl1zblAvfYpWhBiCQOk/qefK25Rg5BHU4YJsqG8+LVyXZvJSIMEXmYKGutNFs/6bqOm9RAcTVxArtbshSzEIoNTG6hNuccitZP3+vsBAoNlFvoMPX3An2bV8+s4gbKLXQ3N+bwWcxZ/wGIGyivd9rogwl8Hp3KQEeZZGi4njxeG9BtAwx05USCMhszYLstBC5rAy8bFEmEVma/GUDTVEsiXBXOIE7q7wCBzZdRnSSMAhd3MQdVuAFUvM/GMEnIZfa0gmZemBj8gYEUA1/UfkgStOX2oGnNzClbkYGj4OVTtFcz4CJgcz20wPVx/A50kWSY6MW1NfmorYEcCF7fladrTSoK31w3yZrHWx1uJTcIXzIMNWnmbnyuaRywMEX7niOzYWiY1z48it11BVpZQAlJN/HS4U4jZgB2jCIJNQ+iQiK0qv8I+jZT5w2JKN7MUziazfTHfgNwBe8UyR/7kKCUWbw6DJvHzJBAuT753FDzle2J4GhSi0ZgPsmDOLhAe9a8VIKXQpHA4Zt+kin69G8JXtWagFYRmqDTKzStrb8DZEHTORe/7sSzUReXr572AmS7jmrD9aWfOJz+CZTgVZslAiteQmqi5nXvJO3WtBX0EUaqXmJyIoVsty8WUR+WrMIdLOW8FPiShKh06/W5wKerERNM2b+9BxKVVt2jYHOH2yEBAA8kwp8Zr3mdqX2rtM7m82afb5ThLgP24dkFNxF/pM4QRqHmZUcF/8746MuUHD57wIP37kosXATHnZVYqHqOOylRKE8ucShVaORz3o1TKSQ2r+h7t0KunMDGIcC8DKkVCyLv8lXv1smND5cg68oV3/tf+NX8WOkabWP5cd/7/9TGi+WxQmloxMkaKhWGy8XxWhbafgERbORPDhSuDAAAAABJRU5ErkJggg==",$D="/ecomap/assets/point4.8f07ddd8.png",HD="/ecomap/assets/point5.55cf9201.png";const _re={components:{BCarousel:DK,BCarouselSlide:MK},data(){return{slide:0,sliding:null}},methods:{onSlideStart(n){this.sliding=!0},onSlideEnd(n){this.sliding=!1}}},_g=n=>(Kt("data-v-0638fa4b"),n=n(),qt(),n),Cre=_g(()=>j("div",{class:"image-container"},[j("img",{src:kre,loading:"lazy",alt:"Snow",class:"background"}),j("div",{class:"centered"},[j("div",{class:"head"},"\u041E \u0447\u0435\u043C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 Ecomap?"),xe(" \u0412 \u043D\u0430\u0448\u0435\u0439 \u0441\u0442\u0440\u0430\u043D\u0435 \u0437\u0430\u0447\u0430\u0441\u0442\u0443\u044E \u043D\u0435\u0442 \u043F\u0440\u0438\u0432\u044B\u0447\u043A\u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u043C\u0443\u0441\u043E\u0440 \u043D\u0430 \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u043A\u0443. \u041C\u044B \u0432\u0435\u0440\u0438\u043C, \u0447\u0442\u043E \u0435\u0441\u043B\u0438 \u0434\u0430\u0442\u044C \u043B\u044E\u0434\u044F\u043C \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u0431\u044B\u0441\u0442\u0440\u043E\u043C\u0443 \u043F\u043E\u0438\u0441\u043A\u0443 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u0442\u043E\u0447\u0435\u043A, \u0431\u043E\u043B\u044C\u0448\u0435 \u0447\u0435\u043B\u043E\u0432\u0435\u043A \u043D\u0430\u0447\u043D\u0443\u0442 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u0443\u0442\u0438\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043C\u0443\u0441\u043E\u0440. ")])],-1)),yre=_g(()=>j("h3",null,"\u041F\u0440\u0438\u0432\u0435\u0442, \u043C\u0438\u0440! \u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0432\u043C\u0435\u0441\u0442\u0435 \u043F\u043E\u043C\u043E\u0436\u0435\u043C \u043F\u043B\u0430\u043D\u0435\u0442\u0435",-1)),Are=_g(()=>j("img",{class:"d-block img-fluid w-100",width:"1024",height:"480",src:wre,alt:"image slot"},null,-1)),Ere=_g(()=>j("p",null," \u041C\u044B \u0432\u0435\u0440\u0438\u043C, \u0447\u0442\u043E \u0435\u0441\u043B\u0438 \u0434\u0430\u0442\u044C \u043B\u044E\u0434\u044F\u043C \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u0431\u044B\u0441\u0442\u0440\u043E\u043C\u0443 \u043F\u043E\u0438\u0441\u043A\u0443 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u0442\u043E\u0447\u0435\u043A \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043C\u0443\u0441\u043E\u0440\u0430, \u0431\u043E\u043B\u044C\u0448\u0435\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0447\u0435\u043B\u043E\u0432\u0435\u043A \u043D\u0430\u0447\u043D\u0443\u0442 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u0443\u0442\u0438\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043C\u0443\u0441\u043E\u0440, \u0442\u0435\u043C \u0441\u0430\u043C\u044B\u043C, \u0432\u043D\u043E\u0441\u044F \u0432\u043A\u043B\u0430\u0434 \u0432 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0438\u0440\u043E\u0434\u044B. ",-1)),Tre=Op('<div class="container" data-v-0638fa4b><div class="head-line" data-v-0638fa4b>\u041D\u0430\u0448\u0438 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430:</div><div class="advantages" data-v-0638fa4b><div class="point" data-v-0638fa4b><img loading="lazy" class="image" src="'+zD+'" data-v-0638fa4b><div class="description" data-v-0638fa4b>\u0423\u0434\u043E\u0431\u043D\u0430\u044F \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u0430\u044F \u043A\u0430\u0440\u0442\u0430</div></div><div class="point" data-v-0638fa4b><img loading="lazy" class="image" src="'+FD+'" data-v-0638fa4b><div class="description" data-v-0638fa4b>\u041F\u0440\u0438\u044F\u0442\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441</div></div><div class="point" data-v-0638fa4b><img loading="lazy" class="image" src="'+VD+'" data-v-0638fa4b><div class="description" data-v-0638fa4b>\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0432\u043E\u044E \u0442\u043E\u0447\u043A\u0443</div></div><div class="point" data-v-0638fa4b><img loading="lazy" class="image" src="'+$D+'" data-v-0638fa4b><div class="description" data-v-0638fa4b>\u0411\u043B\u043E\u0433 \u043E\u0431 \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u0438</div></div><div class="point" data-v-0638fa4b><img loading="lazy" class="image" src="'+HD+'" data-v-0638fa4b><div class="description" data-v-0638fa4b>\u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0440\u0435\u0439\u0442\u0438\u043D\u0433\u0430 \u0437\u0430 \u0434\u043E\u0431\u0440\u044B\u0435 \u0434\u0435\u043B\u0430</div></div></div></div><div class="container-2" data-v-0638fa4b><div class="head-line" data-v-0638fa4b>\u041D\u0430\u0448\u0438 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430:</div><div class="advantages" data-v-0638fa4b><div class="point" data-v-0638fa4b><img loading="lazy" class="image" src="'+zD+'" data-v-0638fa4b><div class="description" data-v-0638fa4b>\u0423\u0434\u043E\u0431\u043D\u0430\u044F \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u0430\u044F \u043A\u0430\u0440\u0442\u0430</div></div><div class="point" data-v-0638fa4b><img loading="lazy" class="image" src="'+FD+'" data-v-0638fa4b><div class="description" data-v-0638fa4b>\u041F\u0440\u0438\u044F\u0442\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441</div></div><div class="point" data-v-0638fa4b><img loading="lazy" class="image" src="'+VD+'" data-v-0638fa4b><div class="description" data-v-0638fa4b>\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0442\u043E\u0447\u043A\u0443</div></div></div></div><div class="container-2" data-v-0638fa4b><div class="advantages-2" data-v-0638fa4b><div class="point" data-v-0638fa4b><img loading="lazy" class="image" src="'+$D+'" data-v-0638fa4b><div class="description" data-v-0638fa4b>\u0411\u043B\u043E\u0433 \u043E\u0431 \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u0438</div></div><div class="point" data-v-0638fa4b><img loading="lazy" class="image" src="'+HD+'" data-v-0638fa4b><div class="description" data-v-0638fa4b>\u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0440\u0435\u0439\u0442\u0438\u043D\u0433\u0430</div></div></div></div><div class="inf" data-v-0638fa4b><div class="info-field" data-v-0638fa4b><b data-v-0638fa4b>\u0420\u0430\u0437\u0434\u0435\u043B\u044C\u043D\u044B\u0439 \u0441\u0431\u043E\u0440:</b> <br data-v-0638fa4b><hr data-v-0638fa4b><p data-v-0638fa4b>\u0421\u043E\u043A\u0440\u0430\u0449\u0430\u0435\u0442 \u0440\u043E\u0441\u0442 \u0441\u0432\u0430\u043B\u043E\u043A \u0412 \u0433\u043E\u0434 \u0436\u0438\u0442\u0435\u043B\u044C \u0420\u043E\u0441\u0441\u0438\u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442 400 \u043A\u0438\u043B\u043E\u0433\u0440\u0430\u043C\u043C \u043E\u0442\u0445\u043E\u0434\u043E\u0432 (\u0442\u0440\u0443\u0434\u043D\u043E \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u044C, \u043A\u0430\u043A\u043E\u0439 \u044D\u0442\u043E \u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u043E\u0431\u044A\u0435\u043C!). \u0420\u0430\u0437\u0434\u0435\u043B\u044C\u043D\u044B\u0439 \u0441\u0431\u043E\u0440 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0442\u044C \u0434\u043E 90% \u043E\u0442\u0445\u043E\u0434\u043E\u0432, \u043E\u0431\u0440\u0430\u0437\u0443\u044E\u0449\u0438\u0445\u0441\u044F \u0443 \u043B\u044E\u0434\u0435\u0439. </p><p data-v-0638fa4b> \u0422\u0430\u043A\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0443\u043C\u0435\u043D\u044C\u0448\u0430\u0435\u0442 \u0432\u043B\u0438\u044F\u043D\u0438\u0435 \u043D\u0430 \u043E\u043A\u0440\u0443\u0436\u0430\u044E\u0449\u0443\u044E \u0441\u0440\u0435\u0434\u0443, \u0441\u043E\u043A\u0440\u0430\u0449\u0430\u0435\u0442 \u0432\u0440\u0435\u0434\u043D\u044B\u0435 \u0432\u044B\u0431\u0440\u043E\u0441\u044B \u0438 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442 \u043F\u0440\u0438\u0440\u043E\u0434\u043D\u0443\u044E \u0441\u0438\u0441\u0442\u0435\u043C\u0443. \u0421\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E, \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u044F \u0443\u043B\u0443\u0447\u0448\u0430\u0435\u0442\u0441\u044F, \u0447\u0442\u043E \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0432\u043B\u044F\u0435\u0442 \u043D\u0430 \u0438\u043C\u043C\u0443\u043D\u0438\u0442\u0435\u0442 \u0438 \u0437\u0434\u043E\u0440\u043E\u0432\u044C\u0435 \u043D\u0430\u0441\u0435\u043B\u0435\u043D\u0438\u044F.</p><p data-v-0638fa4b> \u0420\u0435\u0448\u0430\u0435\u0442 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0443 \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u044B\u0445 \u043E\u0442\u0445\u043E\u0434\u043E\u0432</p><hr data-v-0638fa4b> \u0418 \u043A\u043E\u043D\u0435\u0447\u043D\u043E \u0436\u0435, \u043C\u043D\u043E\u0433\u0438\u0435 \u0434\u0440\u0443\u0433\u0438\u0435 \u0434\u043E\u0441\u0442\u043E\u0438\u043D\u0441\u0442\u0432\u0430. \u041F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u044F\u0439\u0442\u0435\u0441\u044C \u043A eco-community \u0441 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435\u043C EcoMap!\u2764 </div></div>',4);function xre(n,t,r,s,d,f){const p=ae("b-carousel-slide"),v=ae("b-carousel");return oe(),be(Ye,null,[j("div",null,[Cre,F(v,{class:"header",id:"carousel-1",modelValue:d.slide,"onUpdate:modelValue":t[0]||(t[0]=m=>d.slide=m),interval:7e3,controls:"",indicators:"",background:"#56755C","img-width":"1024","img-height":"243",style:{"text-shadow":"1px 1px 2px #333"},onSlidingStart:f.onSlideStart,onSlidingEnd:f.onSlideEnd},{default:Q(()=>[F(p,{caption:"\u041E \u0447\u0435\u043C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 Ecomap?",text:"\u0412 \u043D\u0430\u0448\u0435\u0439 \u0441\u0442\u0440\u0430\u043D\u0435 \u0437\u0430\u0447\u0430\u0441\u0442\u0443\u044E \u043D\u0435\u0442 \u043F\u0440\u0438\u0432\u044B\u0447\u043A\u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u043C\u0443\u0441\u043E\u0440 \u043D\u0430 \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u043A\u0443. \u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435\u043C EcoMap \u043C\u044B \u0445\u043E\u0442\u0438\u043C \u043D\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u044C \u043B\u044E\u0434\u044F\u043C \u043E \u0442\u0430\u043A\u043E\u0439 \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u043E\u0439 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0435, \u043A\u0430\u043A \u043F\u043B\u043E\u0445\u0430\u044F \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u044F, \u0432\u0434\u043E\u0445\u043D\u043E\u0432\u0438\u0442\u044C \u043D\u0430 \u043D\u043E\u0432\u044B\u0439, \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u043E\u0431\u0440\u0430\u0437 \u0436\u0438\u0437\u043D\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u043F\u043E\u0447\u0443\u0432\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0441\u0435\u0431\u044F \u0432 \u0433\u0430\u0440\u043E\u043C\u043E\u043D\u0438\u0438 \u0441 \u043E\u043A\u0440\u0443\u0436\u0430\u044E\u0449\u0438\u043C \u043C\u0438\u0440\u043E\u043C","img-src":"https://www.cvents.ch/media/event/image/l/e/leipzig_leadership_summit_2019-header.jpg"}),F(p,{"img-src":"https://www.hotellagrotta.it/cms2016/wp-content/uploads/2016/07/settimana-in-montagna-sulle-dolomiti.jpg"},{default:Q(()=>[yre],void 0,!0),_:1}),F(p,null,{img:Q(()=>[Are]),_:1}),F(p,{caption:"\u041D\u0430\u0448\u0430 \u0446\u0435\u043B\u044C:","img-blank":"","img-alt":"."},{default:Q(()=>[Ere],void 0,!0),_:1})],void 0,!0),_:1},8,["modelValue","onSlidingStart","onSlidingEnd"])]),Tre],64)}const Sre=pt(_re,[["render",xre],["__scopeId","data-v-0638fa4b"]]),Dl="/ecomap/assets/coins.f0ea0a77.svg";const Ore={name:"InfAboutRanks",components:{BTable:KJ},data(){}},Dre={class:"form"},Ire=Op('<div class="form__content" data-v-cc3ef530><div class="header" data-v-cc3ef530>\u041D\u0435\u043C\u043D\u043E\u0433\u043E \u043E \u0440\u0435\u0439\u0442\u0438\u043D\u0433\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439:</div><hr data-v-cc3ef530><div class="line" data-v-cc3ef530><div data-v-cc3ef530><span class="num" data-v-cc3ef530>30</span><img src="'+Dl+'" class="image" data-v-cc3ef530></div><span class="rank" data-v-cc3ef530>\u042E\u043D\u044B\u0439 \u0437\u0430\u0449\u0438\u0442\u043D\u0438\u043A \u043F\u0440\u0438\u0440\u043E\u0434\u044B</span></div><div class="line" data-v-cc3ef530><div data-v-cc3ef530><span class="num" data-v-cc3ef530>50</span><img src="'+Dl+'" class="image" data-v-cc3ef530></div><span class="rank" data-v-cc3ef530>\u041E\u043F\u044B\u0442\u043D\u044B\u0439 \u044D\u043A\u043E\u043B\u043E\u0433</span></div><div class="line" data-v-cc3ef530><div data-v-cc3ef530><span class="num" data-v-cc3ef530>90</span><img src="'+Dl+'" class="image" data-v-cc3ef530></div><span class="rank" data-v-cc3ef530>\u042F\u0440\u044B\u0439 \u0431\u043E\u0440\u0435\u0446 \u0437\u0430 \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u044E</span></div><div class="line" data-v-cc3ef530><div data-v-cc3ef530><span class="num" data-v-cc3ef530>180</span><img src="'+Dl+'" class="image" data-v-cc3ef530></div><span class="rank" data-v-cc3ef530>\u0413\u0440\u0435\u0442\u0430 \u0422\u0443\u043D\u0431\u0435\u0440\u0433</span></div><div class="line" data-v-cc3ef530><div data-v-cc3ef530><span class="num" data-v-cc3ef530>300</span><img src="'+Dl+'" class="image" data-v-cc3ef530></div><span class="rank" data-v-cc3ef530>\u0412\u044B - \u0441\u0430\u043C\u0430 \u043F\u0440\u0438\u0440\u043E\u0434\u0430</span></div><hr data-v-cc3ef530><div class="description" data-v-cc3ef530>\u041A\u0430\u043A \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C Eco-\u043E\u0447\u043A\u0438? \u041F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0439\u0442\u0435 \u043D\u043E\u0432\u044B\u0435 \u0442\u043E\u0447\u043A\u0438 \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043C\u0443\u0441\u043E\u0440\u0430, \u043F\u0440\u043E\u044F\u0432\u043B\u044F\u0439\u0442\u0435 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C \u0432 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438.</div></div>',1),Pre=[Ire];function Mre(n,t,r,s,d,f){return oe(),be("div",Dre,Pre)}const uB=pt(Ore,[["render",Mre],["__scopeId","data-v-cc3ef530"]]);const Nre={components:{InfAboutRanks:uB,BAvatar:Na,BButton:to,BPopover:YN,BFormFile:ik,BModal:io,FormFilePlugin:kY,axios:Ct},props:{prefix:Number},data(){return{modalShow:!1,friends_counter:0,rank:"\u042E\u043D\u044B\u0439 \u0437\u0430\u0449\u0438\u0442\u043D\u0438\u043A \u043F\u0440\u0438\u0440\u043E\u0434\u044B",images:{img1:null},userStore:So(),formData:null}},computed:{user(){return this.userStore.user},userNickname(){var n;return(n=this.user)==null?void 0:n.nickname},userAge(){var n;return(n=this.user)==null?void 0:n.age},userName(){var n;return(n=this.user)==null?void 0:n.name},userAvatar(){var n;this.images.img1=(n=this.user)==null?void 0:n.avatar}},methods:{rating(){var n,t,r,s,d,f,p,v;if(((n=this.user)==null?void 0:n.rate)<=30)return"\u042E\u043D\u044B\u0439 \u0437\u0430\u0449\u0438\u0442\u043D\u0438\u043A \u043F\u0440\u0438\u0440\u043E\u0434\u044B";if(((t=this.user)==null?void 0:t.rate)>=50&&((r=this.user)==null?void 0:r.rate)<90)return"\u041E\u043F\u044B\u0442\u043D\u044B\u0439 \u044D\u043A\u043E\u043B\u043E\u0433";if(((s=this.user)==null?void 0:s.rate)>=90&&((d=this.user)==null?void 0:d.rate)<170)return"\u042F\u0440\u044B\u0439 \u0431\u043E\u0440\u0435\u0446 \u0437\u0430 \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u044E";if(((f=this.user)==null?void 0:f.rate)>=170&&((p=this.user)==null?void 0:p.rate)<300)return"\u0413\u0440\u0435\u0442\u0430 \u0422\u0443\u043C\u0431\u0435\u0440\u0433";if(((v=this.user)==null?void 0:v.rate)>=300)return"\u0412\u044B - \u0441\u0430\u043C\u0430 \u043F\u0440\u0438\u0440\u043E\u0434\u0430"},cancel(){this.images.img1=null},showModal1(){this.$root.$emit("bv::show::modal","modal-1","#btnShow")},showModal2(){this.$root.$emit("bv::show::modal","modal-2","#btnShow")},putImage(n){Ct.put("profile",{avatar:n}).then(t=>{console.log(t.data)}).catch(t=>{this.wasError=!0,console.log(t)})},sendImage(n){this.formData!=null&&Ct.post("images",n,{headers:{"Content-Type":"multipart/form-data"}}).then(t=>{let r=t.data.link;this.images.img1=r,this.putImage(r)})},readFile(n){let t=new FileReader;t.onload=(r=>s=>{this.images.img1=s.target.result})(),t.readAsDataURL(n)},handleChange(n){let t=n.target.files[0];!t||(this.readFile(t),this.formData=new FormData,this.formData.append("file",t))}}},Rre=n=>(Kt("data-v-62b0561d"),n=n(),qt(),n),Bre={class:"left"},Lre={class:"avatar"},jre={class:"about-me"},zre={class:"user-name-inf"},Fre={class:"user-name"},Vre={class:"rank"},$re={class:"status"},Hre=Rre(()=>j("div",{class:"friends_likes-2"},null,-1));function Ure(n,t,r,s,d,f){const p=ae("b-avatar"),v=ae("b-button"),m=ae("b-popover"),w=ae("b-form-file"),C=ae("b-modal"),y=ae("inf-about-ranks");return oe(),be("div",Bre,[j("div",Lre,[F(v,{id:r.prefix+"popover-3",class:"avatar-btn"},{default:Q(()=>[F(p,{rounded:"sm",size:"8em",class:"line-image",src:d.images.img1},null,8,["src"])],void 0,!0),_:1},8,["id"]),F(m,{placement:"bottom",target:r.prefix+"popover-3",triggers:"focus"},{default:Q(()=>[F(v,{onClick:t[0]||(t[0]=E=>f.showModal1()),class:"edit-btn"},{default:Q(()=>[xe("\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0444\u043E\u0442\u043E")],void 0,!0),_:1}),F(v,{onClick:t[1]||(t[1]=E=>f.showModal2()),class:"edit-btn"},{default:Q(()=>[xe("\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0444\u043E\u0442\u043E")],void 0,!0),_:1})],void 0,!0),_:1},8,["target"]),F(C,{id:"modal-1",title:"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443 \u0434\u043B\u044F \u0432\u0430\u0448\u0435\u0439 \u043D\u043E\u0432\u043E\u0439 \u0430\u0432\u0430\u0442\u0430\u0440\u043A\u0438",onClose:t[3]||(t[3]=E=>f.cancel()),onCancel:t[4]||(t[4]=E=>f.cancel()),onOk:t[5]||(t[5]=E=>f.sendImage(this.formData))},{default:Q(()=>[F(w,{accept:".jpg, .png, .jpeg",ref:"file1",onChange:t[2]||(t[2]=E=>f.handleChange(E))},null,512)],void 0,!0),_:1}),F(C,{"hide-footer":"","hide-header":"",id:"modal-2",centered:"",class:"modal-window","ok-only":""},{default:Q(()=>[F(p,{rounded:"sm",size:"20em",class:"line-image",src:d.images.img1},null,8,["src"])],void 0,!0),_:1})]),j("div",jre,[j("div",zre,[j("div",Fre," @"+Ue(f.userNickname),1)]),F(v,{id:r.prefix+"popover-2",class:"rank-btn"},{default:Q(()=>[j("div",Vre,Ue(f.rating()),1)],void 0,!0),_:1},8,["id"]),F(m,{placement:"bottom",target:r.prefix+"popover-2",triggers:"hover focus","custom-class":"shadow-popper"},{default:Q(()=>[F(y)],void 0,!0),_:1},8,["target"]),j("div",$re,Ue(f.userName)+", "+Ue(f.userAge)+" \u043B\u0435\u0442 ",1),Hre])])}const Gre=pt(Nre,[["render",Ure],["__scopeId","data-v-62b0561d"]]);const Wre={name:"PointStatistic",components:{BButton:to,BPopover:YN},data(){return{userStore:So()}},computed:{user(){return this.userStore.user},userPoints(){var n;return(n=this.user)==null?void 0:n.points},userName(){var n;return(n=this.user)==null?void 0:n.nickname}}},hB=n=>(Kt("data-v-dc345564"),n=n(),qt(),n),Kre={class:"point-num"},qre={class:"main-container"},Yre={key:0,class:"count"},Qre={key:1,class:"count-small"},Zre={key:2,class:"count-small-2"},Jre={class:"description"},Xre=hB(()=>j("div",{class:"text"},"\u041F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0445 \u0442\u043E\u0447\u0435\u043A \u0441\u0431\u043E\u0440\u0430",-1)),eoe={key:0},toe={key:1},noe=hB(()=>j("hr",null,null,-1));function ioe(n,t,r,s,d,f){const p=ae("b-button"),v=ae("b-popover");return oe(),be("div",Kre,[j("div",qre,[f.userPoints&&f.userPoints.length<10?(oe(),be("div",Yre,Ue(f.userPoints.length),1)):et("",!0),f.userPoints&&f.userPoints.length<100&&f.userPoints.length>=10?(oe(),be("div",Qre,Ue(f.userPoints.length),1)):et("",!0),f.userPoints&&f.userPoints.length>=100?(oe(),be("div",Zre,Ue(f.userPoints.length),1)):et("",!0),j("div",Jre,[F(p,{class:"btn-points",id:"my-button"},{default:Q(()=>[Xre],void 0,!0),_:1}),F(v,{triggers:"hover focus",class:"popover",target:"my-button"},{title:Q(()=>[xe("\u0422\u043E\u0447\u043A\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F "+Ue(f.userName),1)]),default:Q(()=>[f.userPoints?(oe(),be("div",toe,[(oe(!0),be(Ye,null,yn(f.userPoints,m=>(oe(),be("ol",null,[j("p",null,"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435: "+Ue(m.title),1),j("p",null,"\u0410\u0434\u0440\u0435\u0441: "+Ue(m.address),1),noe]))),256))])):(oe(),be("div",eoe,"\u041F\u043E\u043A\u0430 \u043D\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u043E \u043D\u0438 \u043E\u0434\u043D\u043E\u0439 \u0442\u043E\u0447\u043A\u0438"))],void 0,!0),_:1})])])])}const roe=pt(Wre,[["render",ioe],["__scopeId","data-v-dc345564"]]);const ooe={name:"Rating",data(){return{userStore:So()}},computed:{user(){return this.userStore.user},userRate(){var n;return(n=this.user)==null?void 0:n.rate}}},fB=n=>(Kt("data-v-11d40adb"),n=n(),qt(),n),soe={class:"point-num"},aoe={class:"main-container"},loe=fB(()=>j("div",{class:"description"},[j("div",{class:"text"},[xe("\u041D\u0430\u0431\u0440\u0430\u043D\u043E "),j("br"),xe(" Eco-\u043E\u0447\u043A\u043E\u0432:")])],-1)),coe={class:"coins"},doe={key:0,class:"count"},uoe={key:1,class:"count-small"},hoe={key:2,class:"count-small-2"},foe=fB(()=>j("img",{src:Dl,class:"image"},null,-1));function poe(n,t,r,s,d,f){return oe(),be("div",soe,[j("div",aoe,[loe,j("div",coe,[f.userRate<10?(oe(),be("div",doe,Ue(f.userRate),1)):et("",!0),f.userRate<100&&f.userRate>=10?(oe(),be("div",uoe,Ue(f.userRate),1)):et("",!0),f.userRate>=100?(oe(),be("div",hoe,Ue(f.userRate),1)):et("",!0),foe])])])}const goe=pt(ooe,[["render",poe],["__scopeId","data-v-11d40adb"]]),moe={id:1,title:`\u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u043B\u0438 \u0432\u044B \u0441\u043E\u0440\u0442\u0438\u0440\u0443\u0435\u0442\u0435 \u043C\u0443\u0441\u043E\u0440?
`,countQuestions:7,questions:[{index:1,question:"\u041A\u0430\u043A\u0438\u0435 \u043E\u0442\u0445\u043E\u0434\u044B \u043D\u0435 \u0432\u0440\u0435\u0434\u044F\u0442 \u043F\u0440\u0438\u0440\u043E\u0434\u0435?",explanation:"\u0415\u0441\u043B\u0438 \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u044B\u0435 \u0438\u0433\u0440\u0443\u0448\u043A\u0438 \u043F\u043E\u043A\u0440\u044B\u0442\u044B \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u0447\u043D\u043E\u0439 \u043A\u0440\u0430\u0441\u043A\u043E\u0439, \u0430 \u0438\u043C\u0435\u043D\u043D\u043E \u0442\u0430\u043A \u0438 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0432 \u0441\u043B\u0443\u0447\u0430\u0435 \u0441 \u0434\u0435\u0442\u0441\u043A\u0438\u043C\u0438 \u0442\u043E\u0432\u0430\u0440\u0430\u043C\u0438, \u0442\u043E \u043E\u043D\u0438 \u0440\u0430\u0437\u043B\u0430\u0433\u0430\u044E\u0442\u0441\u044F \u043D\u0430 \u0441\u0432\u0430\u043B\u043A\u0435 \u0431\u0435\u0437 \u0432\u0440\u0435\u0434\u0430 \u0434\u043B\u044F \u043F\u0440\u0438\u0440\u043E\u0434\u044B. \u041C\u0430\u043A\u0443\u043B\u0430\u0442\u0443\u0440\u0430 \u043D\u0435 \u0432\u0440\u0435\u0434\u0438\u0442 \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u0438, \u043D\u043E \u0435\u0435 \u043F\u0435\u0447\u0430\u0442\u043D\u0430\u044F \u043A\u0440\u0430\u0441\u043A\u0430 \u043C\u043E\u0436\u0435\u0442 \u0432\u044B\u0434\u0435\u043B\u044F\u0442\u044C \u044F\u0434\u043E\u0432\u0438\u0442\u044B\u0435 \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0430. \u042F\u0434\u043E\u0432\u0438\u0442\u043E\u0439 \u043C\u043E\u0436\u043D\u043E \u043D\u0430\u0437\u0432\u0430\u0442\u044C \u0438 \u043E\u0434\u0435\u0436\u0434\u0443 \u0438\u0437 \u0441\u0438\u043D\u0442\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0442\u043A\u0430\u043D\u0435\u0439: \u0441\u0438\u043D\u0442\u0435\u0442\u0438\u043A\u0430 \u043C\u043E\u0436\u0435\u0442 \u0441\u0442\u0430\u0442\u044C \u043F\u0440\u0438\u0447\u0438\u043D\u043E\u0439 \u043F\u043E\u043F\u0430\u0434\u0430\u043D\u0438\u044F \u0432 \u043F\u043E\u0447\u0432\u0443 \u0438 \u0430\u0442\u043C\u043E\u0441\u0444\u0435\u0440\u0443 \u0432\u0440\u0435\u0434\u043D\u044B\u0445 \u0432\u0435\u0449\u0435\u0441\u0442\u0432.",answers:[{title:"\u0411\u044B\u0442\u043E\u0432\u0430\u044F \u0445\u0438\u043C\u0438\u044F",isRight:!1},{title:"\u0414\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u044B\u0435 \u0438\u0433\u0440\u0443\u0448\u043A\u0438",isRight:!0},{title:"\u041A\u043D\u0438\u0433\u0438 \u0438 \u0436\u0443\u0440\u043D\u044B\u043B\u044B",isRight:!1},{title:"\u0421\u0442\u0430\u0440\u0430\u044F \u0441\u0438\u043D\u0442\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043E\u0434\u0435\u0436\u0434\u0430",isRight:!1}]},{index:2,question:"\u0427\u0442\u043E \u0438\u0437 \u044D\u0442\u0438\u0445 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043E\u0432, \u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u0442\u0443\u0440\u0438\u0441\u0442\u0430\u043C\u0438  \u0432 \u043B\u0435\u0441\u0443, \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0437\u043B\u0430\u0433\u0430\u0442\u044C\u0441\u044F \u0431\u044B\u0441\u0442\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043E?",explanation:'\u041F\u043E \u0434\u0430\u043D\u043D\u044B\u043C \u0443\u0447\u0435\u043D\u044B\u0445, \u0441\u0442\u0435\u043A\u043B\u043E, \u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u043E\u0435 \u0432 \u043B\u0435\u0441\u0443, \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0437\u043B\u0430\u0433\u0430\u0442\u044C\u0441\u044F \u0446\u0435\u043B\u0443\u044E \u0442\u044B\u0441\u044F\u0447\u0443 \u043B\u0435\u0442. \u0421\u0440\u043E\u043A \u0434\u043B\u044F \u043F\u043E\u043B\u0438\u044D\u0442\u0438\u043B\u0435\u043D\u043E\u0432\u043E\u0433\u043E \u043F\u0430\u043A\u0435\u0442\u0430 \u0442\u043E\u0436\u0435 \u043F\u0440\u0438\u043B\u0438\u0447\u043D\u044B\u0439 \u2013 \u043E\u043A\u043E\u043B\u043E 200 \u043B\u0435\u0442, \u0444\u043E\u043B\u044C\u0433\u0430 - \u043E\u043A\u043E\u043B\u043E 100 \u0416\u0435\u0441\u0442\u044F\u043D\u0430\u044F \u0431\u0430\u043D\u043A\u0430 \u2013 \u0432 \u044D\u0442\u043E\u043C \u0441\u043F\u0438\u0441\u043A\u0435 \u0441\u0430\u043C\u044B\u0439 "\u0431\u044B\u0441\u0442\u0440\u044B\u0439" \u0437\u0430\u0433\u0440\u044F\u0437\u043D\u0438\u0442\u0435\u043B\u044C: \u0440\u0430\u0437\u043B\u0430\u0433\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438\u043C\u0435\u0440\u043D\u043E \u0437\u0430 90 \u043B\u0435\u0442.',answers:[{title:"\u0424\u043E\u043B\u044C\u0433\u0430",isRight:!1},{title:"\u0421\u0442\u0435\u043A\u043B\u044F\u043D\u043D\u0430\u044F \u0431\u0443\u0442\u044B\u043B\u043A\u0430",isRight:!1},{title:"\u0416\u0435\u0441\u0442\u044F\u043D\u0430\u044F \u043A\u043E\u043D\u0441\u0435\u0440\u0432\u043D\u0430\u044F \u0431\u0430\u043D\u043A\u0430",isRight:!0},{title:"\u041F\u043E\u043B\u0438\u044D\u0442\u0438\u043B\u0435\u043D\u043E\u0432\u044B\u0439 \u043F\u0430\u043A\u0435\u0442",isRight:!1}]},{index:3,question:"\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0434\u0435\u0440\u0435\u0432\u044C\u0435\u0432 \u043D\u0443\u0436\u043D\u043E \u0432\u044B\u0440\u0443\u0431\u0438\u0442\u044C, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043E\u0434\u043D\u0443 \u0442\u043E\u043D\u043D\u0443 \u0431\u0443\u043C\u0430\u0433\u0438?",explanation:"\u041E\u0434\u043D\u0430 \u0442\u043E\u043D\u043D\u0430 \u0431\u0443\u043C\u0430\u0433\u0438 \u0440\u0430\u0432\u043D\u0430 \u043F\u0440\u0438\u043C\u0435\u0440\u043D\u043E 20-25 \u0434\u0435\u0440\u0435\u0432\u044C\u044F\u043C. \u041E\u0434\u043D\u0430\u043A\u043E \u044D\u043A\u043E\u043B\u043E\u0433\u0438 \u0431\u043E\u0440\u044E\u0442\u0441\u044F \u0437\u0430 \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043C\u0430\u043A\u0443\u043B\u0430\u0442\u0443\u0440\u044B \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u0440\u0430\u0434\u0438 \u0434\u0435\u0440\u0435\u0432\u044C\u0435\u0432, \u043D\u043E \u0438 \u0434\u043B\u044F \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0434\u0440\u0443\u0433\u0438\u0445 \u0440\u0435\u0441\u0443\u0440\u0441\u043E\u0432: \u043E\u043D\u0430 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043F\u043E\u0447\u0442\u0438 \u0432 \u0434\u0432\u0430 \u0440\u0430\u0437\u0430 \u0443\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C \u043F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u0435 \u0432\u043E\u0434\u044B \u0438 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0432 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430.",answers:[{title:"10",isRight:!1},{title:"20",isRight:!0},{title:"30",isRight:!1},{title:"50",isRight:!1}]},{index:4,question:"\u0427\u0442\u043E \u0438\u0437 \u043F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u043D\u0435\u043B\u044C\u0437\u044F \u0441\u0434\u0430\u0432\u0430\u0442\u044C \u043D\u0430 \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043C\u0430\u043A\u0443\u043B\u0430\u0442\u0443\u0440\u044B?",explanation:"\u0414\u043B\u044F \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043D\u0435 \u0433\u043E\u0434\u044F\u0442\u0441\u044F \u043A\u0430\u0440\u0442\u043E\u043D\u043D\u044B\u0435 \u043F\u043E\u0434\u0434\u043E\u043D\u044B \u0434\u043B\u044F \u044F\u0438\u0446. \u041D\u0430 \u0441\u0430\u043C\u043E\u043C \u0434\u0435\u043B\u0435, \u044D\u0442\u043E \u0434\u0430\u0436\u0435 \u043D\u0435 \u043A\u0430\u0440\u0442\u043E\u043D, \u0430 \u0432\u0430\u043B\u044F\u043D\u0430\u044F \u0446\u0435\u043B\u043B\u044E\u043B\u043E\u0437\u0430, \u0441\u0430\u043C\u0430\u044F \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u0441\u0442\u0430\u0434\u0438\u044F \u0436\u0438\u0437\u043D\u0438 \u043C\u0430\u043A\u0443\u043B\u0430\u0442\u0443\u0440\u044B. \u0421\u0434\u0430\u0432\u0430\u0442\u044C \u043D\u0430 \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0442\u0430\u043A\u0436\u0435 \u043D\u0435\u043B\u044C\u0437\u044F \u0433\u0440\u044F\u0437\u043D\u044B\u0435 \u0431\u0443\u043C\u0430\u0433\u0443 \u0438 \u043A\u0430\u0440\u0442\u043E\u043D, \u0447\u0435\u043A\u0438, \u0431\u0443\u043C\u0430\u0433\u0443 \u0434\u043B\u044F \u0444\u0430\u043A\u0441\u043E\u0432, \u0432\u0442\u0443\u043B\u043A\u0438 \u043E\u0442 \u0442\u0443\u0430\u043B\u0435\u0442\u043D\u043E\u0439 \u0431\u0443\u043C\u0430\u0433\u0438, \u043A\u0430\u043B\u044C\u043A\u0443, \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438, \u043B\u0430\u043C\u0438\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0443\u044E \u0431\u0443\u043C\u0430\u0433\u0443, \u043E\u0434\u043D\u043E\u0440\u0430\u0437\u043E\u0432\u0443\u044E \u0431\u0443\u043C\u0430\u0436\u043D\u0443\u044E \u043F\u043E\u0441\u0443\u0434\u0443, \u043E\u0431\u043E\u0438, \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u043F\u0440\u043E\u043A\u0440\u0430\u0448\u0435\u043D\u043D\u0443\u044E \u0431\u0443\u043C\u0430\u0433\u0443, \u0443 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0435 \u0441\u043B\u043E\u0438 \u043D\u0430 \u043C\u0435\u0441\u0442\u0435 \u0440\u0430\u0437\u0440\u044B\u0432\u0430 \u0438 \u0432\u043D\u0435\u0448\u043D\u0438\u0435 \u0438\u043C\u0435\u044E\u0442 \u043E\u0434\u0438\u043D \u0446\u0432\u0435\u0442.",answers:[{title:"\u0413\u0430\u0437\u0435\u0442\u044B",isRight:!1},{title:"\u0413\u043B\u044F\u043D\u0446\u0435\u0432\u044B\u0435 \u0436\u0443\u0440\u043D\u0430\u043B\u044B",isRight:!1},{title:"\u0413\u043E\u0444\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043A\u0430\u0440\u0442\u043E\u043D",isRight:!1},{title:"\u041A\u0430\u0440\u0442\u043E\u043D\u043D\u044B\u0435 \u043F\u043E\u0434\u0434\u043E\u043D\u044B \u0434\u043B\u044F \u044F\u0438\u0446",isRight:!0}]},{index:5,question:"\u041A\u0430\u043A\u0438\u0435 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0438\u0437 \u043F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0445 \u043D\u0435 \u0442\u0440\u0435\u0431\u0443\u044E\u0442 \u043E\u0441\u043E\u0431\u043E\u0439 \u0443\u0442\u0438\u043B\u0438\u0437\u0430\u0446\u0438\u0438?",explanation:"\u042D\u0442\u043E \u0441\u0432\u0435\u0442\u043E\u0434\u0438\u043E\u0434\u043D\u044B\u0435 \u043B\u0430\u043C\u043F\u044B, \u043F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 \u043E\u043D\u0438 \u043D\u0435 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442 \u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438. \u0411\u0430\u0442\u0430\u0440\u0435\u0439\u043A\u0438, \u043C\u0430\u0441\u043B\u0430 \u0438 \u0433\u0440\u0430\u0434\u0443\u0441\u043D\u0438\u043A\u0438, \u0432 \u0441\u0432\u043E\u044E \u043E\u0447\u0435\u0440\u0435\u0434\u044C, \u043E\u0442\u043D\u043E\u0441\u044F\u0442\u0441\u044F \u043A \u043E\u043F\u0430\u0441\u043D\u043E\u0439 \u0433\u0440\u0443\u043F\u043F\u0435 \u043E\u0442\u0445\u043E\u0434\u043E\u0432, \u043F\u043E\u0442\u043E\u043C\u0443 \u0447\u0442\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442 \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0430, \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0449\u0438\u0435 \u0443\u0433\u0440\u043E\u0437\u0443 \u0434\u043B\u044F \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u044B. ",answers:[{title:"\u0411\u0430\u0442\u0430\u0440\u0435\u0439\u043A\u0438 \u0438 \u0430\u043A\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u044B",isRight:!1},{title:"\u041D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u044B\u0435 \u0438 \u0441\u0438\u043D\u0442\u0435\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043C\u0430\u0441\u043B\u0430;",isRight:!1},{title:"\u0421\u0432\u0435\u0442\u043E\u0434\u0438\u043E\u0434\u043D\u044B\u0435 \u043B\u0430\u043C\u043F\u043E\u0447\u043A\u0438",isRight:!0},{title:"\u0413\u0440\u0430\u0434\u0443\u0441\u043D\u0438\u043A\u0438",isRight:!1}]},{index:6,question:"\u0427\u0442\u043E \u0438\u0437 \u043F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u043E\u043F\u0430\u0441\u043D\u043E \u0434\u043B\u044F \u043E\u043A\u0440\u0443\u0436\u0430\u044E\u0449\u0435\u0439 \u0441\u0440\u0435\u0434\u044B, \u0438 \u043D\u0443\u0436\u0434\u0430\u0435\u0442\u0441\u044F \u0432 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u0443\u0442\u0438\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u0438\u043B\u0438 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E \u043D\u0430 \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u043A\u0443?",explanation:"\u0422\u0435\u0445\u043D\u0438\u043A\u0430 \u0438 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0430 \u043C\u043E\u0433\u0443\u0442 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043E\u043F\u0430\u0441\u043D\u044B\u0435 \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0430, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0440\u0442\u0443\u0442\u044C \u0438 \u0441\u0432\u0438\u043D\u0435\u0446. \u041D\u0430 \u0441\u0432\u0430\u043B\u043A\u0435 \u0438\u043C \u0442\u043E\u0447\u043D\u043E \u043D\u0435 \u043C\u0435\u0441\u0442\u043E. \u042D\u043A\u043E\u043B\u043E\u0433\u0438 \u043F\u0440\u0438\u0437\u044B\u0432\u0430\u044E\u0442 \u0441\u0434\u0430\u0432\u0430\u0442\u044C \u0442\u0430\u043A\u043E\u0439 \u043C\u0443\u0441\u043E\u0440 \u0432 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043F\u0443\u043D\u043A\u0442\u044B \u043F\u0440\u0438\u0435\u043C\u0430.",answers:[{title:"\u0421\u0442\u0430\u0440\u044B\u0439 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D",isRight:!0},{title:"\u041E\u0434\u0435\u0436\u0434\u0430 \u0438\u0437 \u0445\u043B\u043E\u043F\u043A\u0430 \u0438 \u043B\u044C\u043D\u0430",isRight:!1},{title:"\u0413\u0430\u0437\u0435\u0442\u044B",isRight:!1},{title:"\u041F\u0438\u0449\u0435\u0432\u044B\u0435 \u043E\u0442\u0445\u043E\u0434\u044B",isRight:!1}]},{index:7,question:"\u0427\u0442\u043E \u0438\u0437 \u043F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u043D\u0443\u0436\u043D\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u043F\u0435\u0440\u0435\u0434 \u0441\u0434\u0430\u0447\u0435\u0439 \u043C\u0443\u0441\u043E\u0440\u0430 \u043D\u0430 \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u043A\u0443?",explanation:'\u041E\u0441\u0442\u0430\u0442\u043A\u0438 \u043F\u0438\u0449\u0438 \u0438\u043B\u0438 \u043D\u0430\u043F\u0438\u0442\u043A\u043E\u0432 \u0432 \u0441\u0442\u0435\u043A\u043B\u044F\u043D\u043D\u043E\u0439 \u0442\u0430\u0440\u0435 \u0438\u043B\u0438 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0435 "\u0422\u0435\u0442\u0440\u0430 \u041F\u0430\u043A" \u0438 \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0435\u0435 \u0433\u043D\u0438\u0435\u043D\u0438\u0435 \u043E\u0440\u0433\u0430\u043D\u0438\u043A\u0438 \u0441\u0434\u0435\u043B\u0430\u044E\u0442 \u044D\u0442\u043E\u0442 \u043C\u0443\u0441\u043E\u0440 \u043D\u0435\u043F\u0440\u0438\u0433\u043E\u0434\u043D\u044B\u043C \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u043A\u0438. \u041F\u043E\u044D\u0442\u043E\u043C\u0443 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u043D\u0443\u0436\u043D\u043E \u043F\u0440\u043E\u043C\u044B\u0442\u044C \u0442\u0430\u0440\u0443 \u043F\u043E\u0434 \u0432\u043E\u0434\u043E\u0439.',answers:[{title:"\u0420\u0430\u0437\u043E\u0431\u0440\u0430\u0442\u044C \u043F\u043B\u0430\u0441\u0442\u0438\u043A \u043F\u043E \u0446\u0432\u0435\u0442\u0430\u043C",isRight:!1},{title:"\u0412\u0437\u0432\u0435\u0441\u0438\u0442\u044C \u043E\u0442\u0445\u043E\u0434\u044B",isRight:!1},{title:'\u041F\u043E\u043C\u044B\u0442\u044C \u0441\u0442\u0435\u043A\u043B\u044F\u043D\u043D\u0443\u044E \u0442\u0430\u0440\u0443 \u0438 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0438 "\u0422\u0435\u0442\u0440\u0430 \u041F\u0430\u043A"',isRight:!0},{title:"\u041F\u043E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043F\u044B\u043B\u044C\u043D\u044B\u0435 \u043A\u043D\u0438\u0433\u0438",isRight:!1}]}]},boe={id:2,title:`\u0420\u0430\u0441\u0448\u0438\u0440\u044F\u0439\u0442\u0435 \u0441\u0432\u043E\u0438 \u0437\u043D\u0430\u043D\u0438\u044F \u043E\u0431 \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u0447\u043D\u044B\u0445 \u043F\u0440\u0438\u0432\u044B\u0447\u043A\u0430\u0445
`,countQuestions:7,questions:[{index:1,question:"\u041A\u0430\u043A\u0438\u0435 \u0438\u0437 \u044D\u0442\u0438\u0445 \u0442\u0432\u0435\u0440\u0434\u044B\u0445 \u0431\u044B\u0442\u043E\u0432\u044B\u0445 \u043E\u0442\u0445\u043E\u0434\u043E\u0432 \u043D\u0435 \u043F\u043E\u0434\u0434\u0430\u044E\u0442\u0441\u044F \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u043A\u0435?",explanation:"\u0417\u0430\u0436\u0438\u0433\u0430\u043B\u043A\u0430 \u0432\u044B\u0433\u043B\u044F\u0434\u0438\u0442 \u043F\u0440\u043E\u0441\u0442\u043E: \u043F\u043B\u0430\u0441\u0442\u0438\u043A\u043E\u0432\u044B\u0439 \u043A\u043E\u0440\u043F\u0443\u0441 \u0438 \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u043A\u043E\u043B\u0435\u0441\u0438\u043A\u043E. \u041D\u043E \u0440\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u044C \u044D\u0442\u0438 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B \u0441\u043B\u043E\u0436\u043D\u043E. \u041A \u0442\u043E\u043C\u0443 \u0436\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u043E\u0441\u0442\u0430\u0435\u0442\u0441\u044F \u0440\u0438\u0441\u043A \u0432\u043E\u0441\u043F\u043B\u0430\u043C\u0435\u043D\u0435\u043D\u0438\u044F, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0431\u0435\u0440\u0438\u0442\u0435 \u0432 \u0440\u0443\u043A\u0438 \u0441\u043F\u0438\u0447\u043A\u0438!",answers:[{title:"\u041F\u043B\u0430\u0441\u0442\u0438\u043A\u043E\u0432\u0430\u044F \u0442\u0430\u0440\u0430 \u0438\u0437\u2011\u043F\u043E\u0434 \u0431\u044B\u0442\u043E\u0432\u043E\u0439 \u0445\u0438\u043C\u0438\u0438",isRight:!1},{title:"\u0416\u0435\u0441\u0442\u044F\u043D\u044B\u0435 \u0431\u0430\u043D\u043A\u0438 \u0438\u0437\u2011\u043F\u043E\u0434 \u0433\u0430\u0437\u0438\u0440\u043E\u0432\u043A\u0438",isRight:!1},{title:"\u041E\u0434\u043D\u043E\u0440\u0430\u0437\u043E\u0432\u044B\u0435 \u0437\u0430\u0436\u0438\u0433\u0430\u043B\u043A\u0438",isRight:!0},{title:"\u041A\u0430\u0440\u0442\u043E\u043D\u043D\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0434\u043B\u044F \u043D\u0430\u043F\u0438\u0442\u043A\u043E\u0432",isRight:!1}]},{index:2,question:"\u0412 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430\u0445 \u043D\u0430\u043C \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u044E\u0442 \u0432\u0437\u044F\u0442\u044C \u043F\u043B\u0430\u0441\u0442\u0438\u043A\u043E\u0432\u044B\u0439 \u043F\u0430\u043A\u0435\u0442. \u0421\u043A\u043E\u043B\u044C\u043A\u043E \u043E\u0434\u0438\u043D \u0440\u043E\u0441\u0441\u0438\u044F\u043D\u0438\u043D \u0431\u0435\u0440\u0435\u0442 \u0442\u0430\u043A\u0438\u0445 \u043F\u0430\u043A\u0435\u0442\u043E\u0432 \u0432 \u0433\u043E\u0434?",explanation:"\u0412 \u0441\u0440\u0435\u0434\u043D\u0435\u043C \u0440\u043E\u0441\u0441\u0438\u044F\u043D\u0438\u043D \u043F\u043E\u043A\u0443\u043F\u0430\u0435\u0442 180 \u043F\u043B\u0430\u0441\u0442\u0438\u043A\u043E\u0432\u044B\u0445 \u043F\u0430\u043A\u0435\u0442\u043E\u0432 \u0432 \u0433\u043E\u0434. \u041A\u0430\u0436\u0434\u044B\u0439 \u0442\u0430\u043A\u043E\u0439 \u043F\u0430\u043A\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0432\u0441\u0435\u0433\u043E 12 \u043C\u0438\u043D\u0443\u0442, \u0430 \u0432\u043E\u0442 \u0440\u0430\u0437\u043B\u0430\u0433\u0430\u0435\u0442\u0441\u044F \u043F\u043E\u0447\u0442\u0438 400 \u043B\u0435\u0442.",answers:[{title:"\u041C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C 50-60?",isRight:!1},{title:"\u041E\u043A\u043E\u043B\u043E 300",isRight:!1},{title:"\u041D\u0430\u0432\u0435\u0440\u043D\u043E\u0435 100",isRight:!1},{title:"\u041F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E 180",isRight:!0}]},{index:3,question:"\u041C\u043E\u0436\u043D\u043E \u043B\u0438 \u043A\u043B\u0430\u0441\u0442\u044C \u043E\u0434\u043D\u043E\u0440\u0430\u0437\u043E\u0432\u044B\u0439 \u0441\u0442\u0430\u043A\u0430\u043D\u0447\u0438\u043A \u0438\u0437\u2011\u043F\u043E\u0434 \u043A\u043E\u0444\u0435 \u0432 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440, \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044B\u0439 \u0434\u043B\u044F \u0431\u0443\u043C\u0430\u0433\u0438?",explanation:"\u0421\u0442\u0430\u043A\u0430\u043D\u0447\u0438\u043A\u0438 \u0438\u0437\u2011\u043F\u043E\u0434 \u043A\u043E\u0444\u0435 \u043D\u0435 \u0441\u0442\u043E\u0438\u0442 \u043A\u043B\u0430\u0441\u0442\u044C \u0432 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440, \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044B\u0439 \u0434\u043B\u044F \u0431\u0443\u043C\u0430\u0433\u0438 \u0438\u043B\u0438 \u043C\u0430\u043A\u0443\u043B\u0430\u0442\u0443\u0440\u044B: \u043E\u043D\u0438 \u0438\u0437\u0433\u043E\u0442\u0430\u0432\u043B\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u0441 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435\u043C \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u043F\u043E\u043B\u0438\u043F\u0440\u043E\u043F\u0438\u043B\u0435\u043D\u043E\u0432\u043E\u0439 \u043F\u043B\u0435\u043D\u043A\u0438 \u0438\u043B\u0438 LDPE-\u043F\u043E\u043A\u0440\u044B\u0442\u0438\u044F, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043D\u0435 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u044B.",answers:[{title:"\u042D\u0442\u043E \u0431\u0435\u0441\u043F\u043E\u043B\u0435\u0437\u043D\u043E",isRight:!0},{title:"\u041A\u043E\u043D\u0435\u0447\u043D\u043E, \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0435\u0433\u043E \u043D\u0430\u0434\u043E \u043F\u043E\u043C\u044B\u0442\u044C",isRight:!1},{title:"\u041C\u043E\u0436\u043D\u043E, \u0438 \u043C\u044B\u0442\u044C \u0441\u043E\u0432\u0441\u0435\u043C \u043D\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E",isRight:!1},{title:"\u041C\u043E\u0436\u043D\u043E, \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043F\u043E\u043C\u044B\u0432 \u0435\u0433\u043E \u0438 \u0443\u0431\u0440\u0430\u0442\u044C \u043F\u043B\u0430\u0442\u0438\u043A\u043E\u0432\u0443\u044E \u043A\u0440\u044B\u0448\u043A\u0443",isRight:!1}]},{index:4,question:"\u041E \u0447\u0435\u043C \u0433\u043E\u0432\u043E\u0440\u0438\u0442 \u044D\u0442\u043E\u0442 \u0437\u043D\u0430\u0447\u043E\u043A \u267B\uFE0F ? \u0415\u0433\u043E \u0447\u0430\u0441\u0442\u043E \u0440\u0430\u0437\u043C\u0435\u0449\u0430\u044E\u0442 \u043D\u0430 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432.",explanation:"\u0422\u0440\u0438 \u0437\u0435\u043B\u0435\u043D\u044B\u0435 \u0441\u0442\u0440\u0435\u043B\u043E\u0447\u043A\u0438, \u0441\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u044E\u0449\u0438\u0435\u0441\u044F \u0432 \u043F\u0435\u0442\u043B\u044E \u041C\u0435\u0431\u0438\u0443\u0441\u0430, \u0441\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0443\u044E\u0442 \u043E \u0442\u043E\u043C, \u0447\u0442\u043E \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0443\u0436\u0435 \u0441\u0434\u0435\u043B\u0430\u043D\u0430 \u0438\u0437 \u0432\u0442\u043E\u0440\u0441\u044B\u0440\u044C\u044F \u0438\u043B\u0438 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430 \u043D\u0430 \u0432\u0442\u043E\u0440\u0438\u0447\u043D\u0443\u044E \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u043A\u0443.",answers:[{title:"\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0438 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u0430\u043D \u0438\u043B\u0438 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0447\u0430\u0441\u0442\u0438\u0447\u043D\u043E/\u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u0441\u0434\u0435\u043B\u0430\u043D\u0430 \u0438\u0437 \u0432\u0442\u043E\u0440\u0441\u044B\u0440\u044C\u044F",isRight:!0},{title:"\u041F\u0440\u043E\u0434\u0443\u043A\u0442 \u043D\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0413\u041C\u041E",isRight:!1},{title:"\u042D\u0442\u043E \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u044B\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0442",isRight:!1},{title:"\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u0443\u043F\u043B\u0430\u0442\u0438\u043B \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u043E\u043D\u043D\u044B\u0439 \u0441\u0431\u043E\u0440 \u0438 \u043F\u0440\u043E\u0444\u0438\u043D\u0430\u043D\u0441\u0438\u0440\u043E\u0432\u0430\u043B \u0441\u0431\u043E\u0440 \u0438 \u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0443 \u043E\u0442\u0445\u043E\u0434\u043E\u0432 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0438",isRight:!1}]},{index:5,question:"\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0441\u0432\u043E\u044E \u0438\u043D\u0442\u0443\u0430\u0438\u0446\u0438\u044E! \u0414\u0440\u0435\u0432\u0435\u0441\u0438\u043D\u0430 \u2014 \u0432\u043E\u0437\u043E\u0431\u043D\u043E\u0432\u043B\u044F\u0435\u043C\u044B\u0439 \u0440\u0435\u0441\u0443\u0440\u0441, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 \u043A\u0430\u0440\u0442\u043E\u043D\u0430. \u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0434\u0435\u0440\u0435\u0432\u044C\u0435\u0432 \u043C\u043E\u0436\u043D\u043E \u0441\u043F\u0430\u0441\u0442\u0438 \u043E\u0442 \u0432\u044B\u0440\u0443\u0431\u043A\u0438, \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u0430\u0432 \u0442\u043E\u043D\u043D\u0443 \u043A\u0430\u0440\u0442\u043E\u043D\u0430?",explanation:"\u0422\u0430\u043A\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u043C\u043E\u0436\u043D\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C 17 \u0434\u0435\u0440\u0435\u0432\u044C\u0435\u0432 \u2014 \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u0443\u044E \u0430\u043B\u043B\u0435\u0439\u043A\u0443.",answers:[{title:"1",isRight:!1},{title:"7",isRight:!1},{title:"17",isRight:!0},{title:"34",isRight:!1}]},{index:6,question:"\u041D\u0430 \u0447\u0442\u043E \u0445\u0432\u0430\u0442\u0438\u0442 \u044D\u043D\u0435\u0440\u0433\u0438\u0438, \u0441\u044D\u043A\u043E\u043D\u043E\u043C\u043B\u0435\u043D\u043D\u043E\u0439 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043E\u0434\u043D\u043E\u0439 \u0441\u0434\u0430\u043D\u043D\u043E\u0439 \u043D\u0430 \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0430\u043B\u044E\u043C\u0438\u043D\u0438\u0435\u0432\u043E\u0439 \u0431\u0430\u043D\u043A\u0438?",explanation:"\u0422\u0440\u0438 \u0447\u0430\u0441\u0430 \u0440\u0430\u0431\u043E\u0442\u044B \u0442\u0435\u043B\u0435\u0432\u0438\u0437\u043E\u0440\u0430 \u043C\u043E\u0436\u0435\u0442 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0442\u044C \u044D\u043D\u0435\u0440\u0433\u0438\u044F, \u0441\u044D\u043A\u043E\u043D\u043E\u043C\u043B\u0435\u043D\u043D\u0430\u044F \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u043A\u0435 \u043E\u0434\u043D\u043E\u0439 \u0430\u043B\u044E\u043C\u0438\u043D\u0438\u0435\u0432\u043E\u0439 \u0431\u0430\u043D\u043A\u0438.",answers:[{title:"\u041D\u0430 \u043D\u0435\u0434\u0435\u043B\u044E \u0440\u0430\u0431\u043E\u0442\u044B \u043E\u0431\u043E\u0433\u0440\u0435\u0432\u0430\u0442\u0435\u043B\u044F",isRight:!1},{title:"\u041D\u0430 \u0442\u0440\u0438 \u0447\u0430\u0441\u0430 \u0440\u0430\u0431\u043E\u0442\u044B \u0442\u0435\u043B\u0435\u0432\u0438\u0437\u043E\u0440\u0430",isRight:!0},{title:"\u041D\u0430 \u0434\u0435\u043D\u044C \u0440\u0430\u0431\u043E\u0442\u044B \u0445\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A\u0430",isRight:!1},{title:"\u041D\u0430 \u043E\u0434\u0438\u043D \u0437\u0430\u0440\u044F\u0434 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043C\u043E\u0431\u0438\u043B\u044F",isRight:!1}]},{index:7,question:"\u041A\u0430\u0440\u0442\u043E\u043D\u043D\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0434\u043B\u044F \u043C\u043E\u043B\u043E\u043A\u0430 \u0438 \u0441\u043E\u043A\u043E\u0432 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u0430 \u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0430 \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E. \u0427\u0442\u043E \u043C\u043E\u0436\u043D\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0438\u0437 \u043D\u0435\u0435?",explanation:"\u0418\u0437 \u043A\u0430\u0440\u0442\u043E\u043D\u043D\u043E\u0439 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0438 \u0434\u043B\u044F \u043C\u043E\u043B\u043E\u043A\u0430 \u0438 \u0441\u043E\u043A\u043E\u0432 \u0434\u0435\u043B\u0430\u044E\u0442 \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043A\u043E\u0440\u043C\u0443\u0448\u043A\u0438 \u0434\u043B\u044F \u043F\u0442\u0438\u0446: \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 \u0441\u0430\u043C\u044B\u0445 \u0440\u0430\u0437\u043D\u044B\u0445 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043E\u0432. \u0413\u043E\u0444\u0440\u043E\u043A\u0430\u0440\u0442\u043E\u043D, \u0437\u0430\u0433\u043B\u0443\u0448\u043A\u0438 \u0434\u043B\u044F \u0442\u0440\u0443\u0431, \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0442\u043D\u044B\u0435 \u043F\u0430\u043D\u0435\u043B\u0438 \u0434\u043B\u044F \u043E\u0431\u043B\u0438\u0446\u043E\u0432\u043A\u0438 \u0437\u0434\u0430\u043D\u0438\u0439 \u0438 \u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0439, \u0440\u0443\u0447\u043A\u0438, \u043B\u0430\u0432\u043E\u0447\u043A\u0438, \u044D\u043A\u043E\u0432\u0430\u0442\u0430 \u0438 \u0434\u0430\u0436\u0435 \u0434\u043E\u0440\u043E\u0433\u0438.",answers:[{title:"\u0413\u043E\u0444\u0440\u043E\u043A\u0430\u0440\u0442\u043E\u043D",isRight:!1},{title:"\u041A\u043E\u043C\u043F\u043E\u0437\u0438\u0442\u043D\u044B\u0435 \u043F\u0430\u043D\u0435\u043B\u0438 \u0434\u043B\u044F \u043E\u0431\u043B\u0438\u0446\u043E\u0432\u043A\u0438 \u0437\u0434\u0430\u043D\u0438\u0439 \u0438 \u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0439",isRight:!1},{title:"\u0420\u0443\u0447\u043A\u0438",isRight:!1},{title:"\u0412\u0441\u0435 \u043F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u043E\u0435",isRight:!0}]}]},voe={id:3,title:`\u0420\u0430\u0437\u0434\u0435\u043B\u044C\u043D\u044B\u0439 \u0441\u0431\u043E\u0440 \u043E\u0442\u0445\u043E\u0434\u043E\u0432
`,countQuestions:7,questions:[{index:1,question:"\u0427\u0442\u043E \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0440\u0435\u0448\u0435\u043D\u0438\u0435\u043C \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u0431\u043E\u043B\u044C\u0448\u043E\u0433\u043E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u043C\u0443\u0441\u043E\u0440\u0430?",explanation:"",answers:[{title:"\u041F\u0440\u043E\u0441\u0442\u043E \u043D\u0435 \u043D\u0430\u0434\u043E \u043C\u0443\u0441\u043E\u0440\u0438\u0442\u044C",isRight:!1},{title:"\u041C\u0443\u0441\u043E\u0440 \u0431\u0443\u0434\u0435\u0442 \u0432\u0441\u0435\u0433\u0434\u0430, \u0432\u0441\u0451 \u044D\u0442\u043E \u043D\u0435 \u0441\u0442\u043E\u0438\u0442 \u0443\u0441\u0438\u043B\u0438\u0439.",isRight:!1},{title:"\u041E\u0442\u0445\u043E\u0434\u044B \u0434\u043E\u043B\u0436\u043D\u044B \u0441\u0442\u0430\u0442\u044C \u0441\u044B\u0440\u044C\u0451\u043C \u0434\u043B\u044F \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 \u043D\u043E\u0432\u044B\u0445 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432",isRight:!0}]},{index:2,question:"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u043E\u0442\u0432\u0435\u0442\u0430, \u0433\u0434\u0435 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u044B \u0442\u043E\u043B\u044C\u043A\u043E \u043E\u0440\u0433\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043E\u0442\u0445\u043E\u0434\u044B:",explanation:"",answers:[{title:"\u0412\u043E\u043B\u043E\u0441\u044B, \u0440\u044B\u0431\u043D\u044B\u0435 \u043A\u043E\u0441\u0442\u0438, \u0432\u043B\u0430\u0436\u043D\u044B\u0435 \u0441\u0430\u043B\u0444\u0435\u0442\u043A\u0438",isRight:!1},{title:"\u041A\u043E\u0441\u0442\u043E\u0447\u043A\u0430 \u043E\u0442 \u043F\u0435\u0440\u0441\u0438\u043A\u0430, \u043F\u044B\u043B\u044C, \u0437\u0443\u0431\u043E\u0447\u0438\u0441\u0442\u043A\u0430",isRight:!0},{title:"\u041A\u043E\u0436\u0443\u0440\u0430 \u043E\u0442 \u0431\u0430\u043D\u0430\u043D\u0430, \u0447\u0435\u043A \u0438\u0437 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430, \u0437\u0430\u0441\u043E\u0445\u0448\u0438\u0435 \u0446\u0432\u0435\u0442\u044B",isRight:!1},{title:"\u041A\u0430\u0440\u0442\u043E\u0444\u0435\u043B\u044C\u043D\u044B\u0435 \u043E\u0447\u0438\u0441\u0442\u043A\u0438, \u0436\u0443\u0440\u043D\u0430\u043B, \u0432\u043E\u043B\u043E\u0441\u044B",isRight:!1}]},{index:3,question:"\u0427\u0435\u043C \u043F\u043B\u043E\u0445\u043E \u0442\u043E, \u0447\u0442\u043E \u0440\u0430\u0437\u043D\u044B\u0435 \u0432\u0438\u0434\u044B \u043E\u0442\u0445\u043E\u0434\u043E\u0432 \u0432\u044B\u0431\u0440\u0430\u0441\u044B\u0432\u0430\u044E\u0442 \u0432\u043C\u0435\u0441\u0442\u0435?",explanation:"",answers:[{title:"\u0412\u0430\u043C \u0433\u0440\u043E\u0437\u0438\u0442 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0448\u0442\u0440\u0430\u0444",isRight:!1},{title:"\u041A\u0430\u0436\u0434\u044B\u0439 \u0432\u0438\u0434 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0441\u0432\u043E\u0435\u0439 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u043A\u0438. \u0421\u043C\u0435\u0448\u0435\u043D\u0438\u0435 \u0440\u0430\u0437\u043D\u044B\u0445 \u043E\u0442\u0445\u043E\u0434\u043E\u0432 \u043F\u0440\u0438\u0432\u0435\u0434\u0451\u0442 \u043A \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0438\u0445 \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C. \u041F\u043E\u044D\u0442\u043E\u043C\u0443 \u0440\u0430\u0437\u043D\u044B\u0435 \u0432\u0438\u0434\u044B \u043E\u0442\u0445\u043E\u0434\u043E\u0432 \u043D\u0435 \u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u0432\u044B\u0431\u0440\u0430\u0441\u044B\u0432\u0430\u0442\u044C \u0432\u043C\u0435\u0441\u0442\u0435.",isRight:!0},{title:"\u0423 \u0432\u0430\u0441 \u0431\u0443\u0434\u0435\u0442 \u043F\u043B\u043E\u0445\u0430\u044F \u0440\u0435\u043F\u0443\u0442\u0430\u0446\u0438\u044F \u0441\u0440\u0435\u0434\u0438 \u0430\u043A\u0442\u0438\u0432\u0438\u0441\u0442\u043E\u0432 \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F.",isRight:!1}]},{index:4,question:"\u0427\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u043F\u043B\u0430\u0441\u0442\u0438\u043A?",explanation:"",answers:[{title:"\u041B\u044E\u0431\u043E\u0439 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u0440\u0438 \u043D\u0430\u0433\u0440\u0435\u0432\u0430\u043D\u0438\u0438 \u043B\u0435\u0433\u043A\u043E \u0438\u0437\u043C\u0435\u043D\u044F\u0435\u0442 \u0444\u043E\u0440\u043C\u0443.",isRight:!1},{title:"\u0412\u0441\u0451, \u0447\u0442\u043E \u0434\u0435\u043B\u0430\u044E\u0442 \u0438\u0437 \u043D\u0435\u0444\u0442\u0438.",isRight:!1},{title:"\u0413\u0440\u0443\u043F\u043F\u0430 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432, \u0438\u0441\u0445\u043E\u0434\u043D\u043E\u0435 \u0441\u044B\u0440\u044C\u0451 \u0434\u043B\u044F \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u2014 \u043D\u0435\u0444\u0442\u044C \u0438 \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043B\u0435\u0433\u043A\u043E \u043C\u0435\u043D\u044F\u044E\u0442 \u0444\u043E\u0440\u043C\u0443 \u043F\u0440\u0438 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0435 \u043E\u0442 60\xBA. \u041F\u043B\u0430\u0441\u0442\u0438\u043A \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u044F\u0442 \u0438\u0441\u043A\u0443\u0441\u0441\u0442\u0432\u0435\u043D\u043D\u043E, \u0438 \u043E\u043D \u043D\u0435 \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u0435\u0442\u0441\u044F \u0432 \u043F\u0440\u0438\u0440\u043E\u0434\u0435.",isRight:!0},{title:"\u041B\u044E\u0431\u043E\u0439 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u0440\u0438 \u043D\u0430\u0433\u0440\u0435\u0432\u0430\u043D\u0438\u0438 \u043C\u0435\u043D\u044F\u0435\u0442 \u0444\u043E\u0440\u043C\u0443, \u0430 \u043F\u0440\u0438 \u043E\u0445\u043B\u0430\u0436\u0434\u0435\u043D\u0438\u0438 \u0437\u0430\u0441\u0442\u044B\u0432\u0430\u0435\u0442.",isRight:!1}]},{index:5,question:"\u0427\u0435\u043C \u0437\u0430\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0441\u0442\u0435\u043A\u043B\u043E \u043A\u0430\u043A \u0432\u0442\u043E\u0440\u0441\u044B\u0440\u044C\u0451?",explanation:"",answers:[{title:"\u0421\u0442\u0435\u043A\u043B\u043E \u043C\u043E\u0436\u043D\u043E \u043F\u0435\u0440\u0435\u043F\u043B\u0430\u0432\u043B\u044F\u0442\u044C \u043C\u043D\u043E\u0433\u043E \u0440\u0430\u0437 \u0438 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u043A\u043E\u043D\u0435\u0447\u043D\u044B\u0445 \u0438\u0437\u0434\u0435\u043B\u0438\u0439 \u043E\u0442 \u044D\u0442\u043E\u0433\u043E \u043D\u0435 \u0443\u0445\u0443\u0434\u0448\u0438\u0442\u0441\u044F.",isRight:!0},{title:"\u0417\u0430 \u043D\u0435\u0433\u043E \u0431\u043E\u043B\u044C\u0448\u0435 \u043F\u043B\u0430\u0442\u044F\u0442.",isRight:!1},{title:"\u0415\u0433\u043E \u043B\u0435\u0433\u043A\u043E \u043C\u044B\u0442\u044C.",isRight:!1},{title:"\u0421 \u043D\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0434\u043E \u0441\u0434\u0438\u0440\u0430\u0442\u044C \u043D\u0430\u043A\u043B\u0435\u0439\u043A\u0438: \u043E\u043D\u0438 \u0441\u0430\u043C\u0438 \u043E\u0442\u0432\u0430\u043B\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u043F\u0440\u0438 \u0442\u0435\u0440\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0435.",isRight:!1}]},{index:6,question:"\u041F\u043E\u0447\u0435\u043C\u0443 \u0446\u0435\u043B\u044B\u0435 \u0431\u0443\u0442\u044B\u043B\u043A\u0438 \u0438 \u0431\u0430\u043D\u043A\u0438 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u044E\u0442 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E \u043E\u0442 \u0440\u0430\u0437\u0431\u0438\u0442\u044B\u0445?",explanation:"",answers:[{title:"\u0412\u0441\u0451 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043E\u0442 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u0442\u043E\u0447\u043A\u0438 \u043F\u0440\u0438\u0451\u043C\u0430.",isRight:!1},{title:"\u0426\u0435\u043B\u0443\u044E \u0442\u0430\u0440\u0443 \u043C\u043E\u0436\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E \u043F\u043E\u0441\u043B\u0435 \u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043D\u0435\u0434\u043E\u0440\u043E\u0433\u043E\u0439 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u044B \u0447\u0438\u0441\u0442\u043A\u0438 \u0438 \u043C\u044B\u0442\u044C\u044F.",isRight:!0},{title:"\u041D\u0430 \u0446\u0435\u043B\u043E\u0439 \u0442\u0430\u0440\u0435 \u043C\u043E\u0436\u043D\u043E \u0431\u043E\u043B\u044C\u0448\u0435 \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C.",isRight:!1},{title:"\u041C\u043E\u0439 \u043E\u043F\u044B\u0442 \u0433\u043E\u0432\u043E\u0440\u0438\u0442, \u0447\u0442\u043E \u044D\u0442\u043E \u043D\u0435 \u0442\u0430\u043A: \u0431\u0435\u0440\u0443\u0442 \u0432\u0441\u0451 \u0432 \u043E\u0434\u043D\u043E\u0439 \u043A\u0443\u0447\u0435. \u0411\u043E\u043B\u0435\u0435 \u0442\u043E\u0433\u043E, \u0431\u044C\u044E\u0442 \u0446\u0435\u043B\u044B\u0435.",isRight:!1}]},{index:7,question:"\u041A\u0430\u043A \u0440\u0430\u0437\u0434\u0435\u043B\u044F\u044E\u0442 \u0431\u0438\u0442\u043E\u0435 \u0441\u0442\u0435\u043A\u043B\u043E \u0438 \u043F\u043E\u0447\u0435\u043C\u0443?",explanation:"",answers:[{title:"\u0420\u0430\u0437\u0434\u0435\u043B\u044F\u044E\u0442 \u043D\u0430 \u0442\u0430\u0440\u043D\u043E\u0435 \u0438 \u043B\u0438\u0441\u0442\u043E\u0432\u043E\u0435, \u043F\u0440\u0438\u0447\u0451\u043C \u043A\u0430\u0436\u0434\u044B\u0439 \u0446\u0432\u0435\u0442 \u0441\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u044E\u0442 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E. \u041E\u043D\u0438 \u0438\u043C\u0435\u044E\u0442 \u0440\u0430\u0437\u043D\u044B\u0435 \u043F\u0440\u0438\u043C\u0435\u0441\u0438.",isRight:!0},{title:"\u041E\u043D\u0438 \u0438\u043C\u0435\u044E\u0442 \u0440\u0430\u0437\u043D\u044B\u0435 \u043F\u0440\u0438\u043C\u0435\u0441\u0438",isRight:!1},{title:"\u0422\u0443\u0442 \u0432\u0430\u0436\u043D\u043E \u0442\u0430\u0440\u043D\u043E\u0435 \u043E\u043D\u043E \u0438\u043B\u0438 \u043B\u0438\u0441\u0442\u043E\u0432\u043E\u0435, \u0442\u0430\u043A \u0438 \u0434\u0435\u043B\u044F\u0442. \u0422\u0443\u0442 \u0432\u0430\u0436\u043D\u0430 \u0444\u043E\u0440\u043C\u0430",isRight:!1},{title:"\u0412\u0441\u0451 \u0431\u0438\u0442\u043E\u0435 \u0441\u0442\u0435\u043A\u043B\u043E \u0432\u0441\u0451 \u0440\u0430\u0432\u043D\u043E \u0438\u0434\u0451\u0442 \u043D\u0430 \u043F\u0435\u0440\u0435\u043F\u043B\u0430\u0432\u043A\u0443, \u0442\u0430\u043A \u0447\u0442\u043E \u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u043D\u0435 \u0432\u0430\u0436\u043D\u043E",isRight:!1}]}]},koe=[moe,boe,voe];const woe={props:{testData:Object},data(){return{wasAnswered:!1,currentQuestionIndex:0,countRightAnswers:0,currentAnswerIndex:-1,isFinal:!1}},computed:{currentQuestion(){return this.testData.questions[this.currentQuestionIndex]},countQuestions(){return this.testData.questions.length}},methods:{nextPage(){this.countQuestions-1>this.currentQuestionIndex?(this.currentQuestionIndex++,this.wasAnswered=!1,this.currentAnswerIndex=-1):this.isFinal=!0},chooseAnswer(n){this.wasAnswered||(this.currentQuestion.answers[n].isRight&&this.countRightAnswers++,this.currentAnswerIndex=n,this.wasAnswered=!0)},getAnswerClass(n){if(!this.wasAnswered)return{};const t=this.currentAnswerIndex===n,r=this.currentQuestion.answers[n].isRight;return{"answer--right":r,"answer--misstake":t&&!r}}}},_oe={class:"test"},Coe={class:"header"},yoe={class:"heading"},Aoe={class:"page"},Eoe={key:0},Toe={class:"question"},xoe={class:"count-q"},Soe={class:"text"},Ooe=["onClick"],Doe={key:0,class:"explanation"},Ioe={key:1},Poe={key:0},Moe={key:1},Noe={key:2};function Roe(n,t,r,s,d,f){return oe(),be("div",_oe,[j("div",Coe,[j("h4",yoe,Ue(r.testData.title),1),j("button",{class:"button",onClick:t[0]||(t[0]=p=>n.$emit("close"))}," \u0417\u0430\u043A\u0440\u044B\u0442\u044C ")]),j("div",Aoe,[d.isFinal?(oe(),be("div",Ioe,[xe(" \u0412\u044B \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u043B\u0438 \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u043E\u0442\u0432\u0435\u0442\u0438\u043B\u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u043D\u0430 "+Ue(d.countRightAnswers)+"/"+Ue(f.countQuestions)+" \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 ",1),d.countRightAnswers<3?(oe(),be("div",Poe,"\u0412\u0430\u043C \u043F\u0440\u0435\u0434\u0441\u0442\u043E\u0438\u0442 \u0435\u0449\u0435 \u043F\u043E\u0443\u0447\u0438\u0442\u044C\u0441\u044F!")):et("",!0),d.countRightAnswers>=3&&d.countRightAnswers<=5?(oe(),be("div",Moe,"\u0412\u044B \u043C\u043E\u043B\u043E\u0434\u0435\u0446, \u0432\u0430\u0448 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0445\u043E\u0440\u043E\u0448\u0438\u0439")):et("",!0),d.countRightAnswers>=6?(oe(),be("div",Noe,"\u041E\u0442\u043B\u0438\u0447\u043D\u043E! Ecomap \u0433\u043E\u0440\u0434\u0438\u0442\u0441\u044F \u0432\u0430\u043C\u0438")):et("",!0)])):(oe(),be("div",Eoe,[j("div",Toe,[j("div",xoe,Ue(f.currentQuestion.index)+"/"+Ue(r.testData.countQuestions),1),j("div",Soe,"\u0412\u043E\u043F\u0440\u043E\u0441: "+Ue(f.currentQuestion.question),1)]),(oe(!0),be(Ye,null,yn(f.currentQuestion.answers,(p,v)=>(oe(),be("div",{class:Le(["answer",f.getAnswerClass(v)]),onClick:m=>f.chooseAnswer(v)},Ue(p.title),11,Ooe))),256)),f.currentQuestion.explanation!=""&&d.wasAnswered?(oe(),be("div",Doe,Ue(f.currentQuestion.explanation),1)):et("",!0),d.wasAnswered?(oe(),be("button",{key:1,class:"button",onClick:t[1]||(t[1]=(...p)=>f.nextPage&&f.nextPage(...p))}," \u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0432\u043E\u043F\u0440\u043E\u0441 ")):et("",!0)]))])])}const Boe=pt(woe,[["render",Roe]]),Loe="/ecomap/assets/tests.ba827794.svg",joe="/ecomap/assets/test.dcc95b4e.jpg";const zoe={components:{BModal:io,ModalPlugin:WQ,BButton:to,Test:Boe},name:"TestStatistic",methods:{showModal(){this.$refs["modal-1"].show()}},data(){return{count:0,tests:koe,pickedTest:null,userStore:So()}},computed:{user(){return this.userStore.user},userName(){var n;return(n=this.user)==null?void 0:n.name}}},Cg=n=>(Kt("data-v-23fe996b"),n=n(),qt(),n),Foe={class:"point-num"},Voe={class:"description"},$oe=Cg(()=>j("div",{class:"text"},"\u041F\u0440\u043E\u0439\u0434\u0435\u043D\u043E \u0442\u0435\u0441\u0442\u043E\u0432: ",-1)),Hoe=Cg(()=>j("img",{src:Loe,class:"image"},null,-1)),Uoe={class:"count"},Goe={key:0},Woe={class:"image-container"},Koe=Cg(()=>j("img",{alt:"ecomap",class:"logo",src:joe},null,-1)),qoe={class:"centered"},Yoe={class:"head"},Qoe=Cg(()=>j("div",{class:"head"},"C\u043F\u0438\u0441\u043E\u043A \u0442\u0435\u0441\u0442\u043E\u0432",-1)),Zoe=["onClick"],Joe={key:1};function Xoe(n,t,r,s,d,f){const p=ae("b-button"),v=ae("Test"),m=ae("b-modal");return oe(),be("div",Foe,[j("div",Voe,[$oe,j("div",null,[F(p,{class:"btn",onClick:t[0]||(t[0]=w=>f.showModal())},{default:Q(()=>[Hoe,j("div",Uoe,Ue(d.count)+"/3",1)],void 0,!0),_:1})]),F(m,{ref:"modal-1",size:"lg",centered:"","hide-footer":"","hide-header":"",class:"modal-window"},{default:Q(()=>[d.pickedTest?et("",!0):(oe(),be("div",Goe,[j("div",Woe,[Koe,j("div",qoe,[j("div",Yoe,"\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435, "+Ue(f.userName)+"!",1),xe("\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0432\u043C\u0435\u0441\u0442\u0435 \u0431\u0443\u0434\u0435\u043C \u0443\u0447\u0438\u0442\u044C\u0441\u044F \u0438 \u0443\u0437\u043D\u0430\u0432\u0430\u0442\u044C \u043D\u043E\u0432\u043E\u0435")])]),Qoe,(oe(!0),be(Ye,null,yn(d.tests,w=>(oe(),be("button",{class:"test-list",style:{"margin-right":"10px"},onClick:C=>d.pickedTest=w},Ue(w.title),9,Zoe))),256))])),d.pickedTest?(oe(),be("div",Joe,[(oe(),xt(v,{key:d.pickedTest.id,"test-data":d.pickedTest,onClose:t[1]||(t[1]=w=>d.pickedTest=null)},null,8,["test-data"]))])):et("",!0)],void 0,!0),_:1},512)])])}const ese=pt(zoe,[["render",Xoe],["__scopeId","data-v-23fe996b"]]);const tse={components:{BCard:Q2,TypeBadge:m_},name:"PointCard",props:{point:Object},data(){return{title:this.point.title,types:this.point.types,address:this.point.address,comment:this.point.comment}}},b_=n=>(Kt("data-v-0f03741c"),n=n(),qt(),n),nse={class:"card"},ise={class:"ac-title"},rse=b_(()=>j("br",null,null,-1)),ose={style:{display:"flex",gap:"10px","flex-wrap":"wrap"}},sse=b_(()=>j("br",null,null,-1)),ase=b_(()=>j("br",null,null,-1));function lse(n,t,r,s,d,f){const p=ae("type-badge");return oe(),be("div",nse,[j("h4",ise,[xe(" \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0442\u043E\u0447\u043A\u0438: "+Ue(d.title)+" ",1),rse,j("div",null,[xe(" \u0412\u0438\u0434\u044B \u043C\u0443\u0441\u043E\u0440\u0430: "),j("div",ose,[(oe(!0),be(Ye,null,yn(d.types,v=>(oe(),xt(p,{"point-id":r.point.id,type:v},null,8,["point-id","type"]))),256))])]),sse,xe(" \u0410\u0434\u0440\u0435\u0441: "+Ue(d.address)+" ",1),ase,xe(" \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439: "+Ue(d.comment),1)])])}const cse=pt(tse,[["render",lse],["__scopeId","data-v-0f03741c"]]);const dse={name:"ProfilePage",components:{InfAboutRanks:uB,BAvatar:Na,BToast:yX,BButton:to,BasicInformation:Gre,BRow:ja,BCard:Q2,BTab:tX,BTabs:XJ,PointStatistic:roe,BContainer:xr,RatingBlock:goe,TestStatistic:ese,ArticleCard:KR,PointCard:cse},data(){return{page:1,limit:999,articles:[],points:[],favourites:[]}},computed:{},methods:{getArticles(){Ct.get("profile/liked",{params:{page:this.page,limit:this.limit}}).then(n=>{this.articles=n.data.data})},loadFavs(){Ct.get("profile/favs",{params:{search:null,limit:999,page:1,allIncludes:!1,types:JSON.stringify([0,1,2,3,4,5,6,7,8,9,10,11]),isAccepted:!0,x1:0,x2:0,y1:0,y2:0}}).then(n=>{this.favourites=n.data.points})}},mounted(){this.getArticles(),this.loadFavs()}},pB=n=>(Kt("data-v-db00126d"),n=n(),qt(),n),use={class:"app"},hse={class:"row"},fse={class:"blocks"},pse={class:"statistic"},gse={class:"statistic"},mse={class:"statistic"},bse={class:"row-1"},vse={class:"blocks"},kse={class:"statistic"},wse={class:"statistic"},_se={class:"statistic"},Cse=pB(()=>j("div",{class:"title"},"\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0442\u043E\u0447\u043A\u0438",-1)),yse={class:"ap-grid"},Ase=pB(()=>j("div",{class:"title"},"\u041B\u044E\u0431\u0438\u043C\u044B\u0435 \u0441\u0442\u0430\u0442\u044C\u0438",-1)),Ese={class:"ap-grid"};function Tse(n,t,r,s,d,f){const p=ae("basic-information"),v=ae("point-statistic"),m=ae("rating-block"),w=ae("test-statistic"),C=ae("point-card"),y=ae("b-tab"),E=ae("article-card"),S=ae("b-tabs"),I=ae("b-card"),M=ae("b-row"),q=ae("b-container");return oe(),be("div",use,[F(q,{class:"main_container"},{default:Q(()=>[j("div",hse,[F(p,{prefix:"1"}),j("div",fse,[j("div",pse,[F(v)]),j("div",gse,[F(m)]),j("div",mse,[F(w)])])]),j("div",bse,[F(p,{prefix:"2"}),j("div",vse,[j("div",kse,[F(v)]),j("div",wse,[F(m)]),j("div",_se,[F(w)])])]),F(M,{class:"favourites"},{default:Q(()=>[F(I,{class:"second-row"},{default:Q(()=>[F(S,{small:"",card:"",align:"center"},{default:Q(()=>[F(y,{active:""},{title:Q(()=>[Cse]),default:Q(()=>[j("div",yse,[(oe(!0),be(Ye,null,yn(d.favourites,L=>(oe(),xt(C,{point:L},null,8,["point"]))),256))])],void 0,!0),_:1}),F(y,{class:"tab-title"},{title:Q(()=>[Ase]),default:Q(()=>[j("div",Ese,[(oe(!0),be(Ye,null,yn(d.articles,L=>(oe(),xt(E,{id:L.id,title:L.title,likes:L.countOfLikes,image:L.image,"no-like":""},null,8,["id","title","likes","image"]))),256))])],void 0,!0),_:1})],void 0,!0),_:1})],void 0,!0),_:1})],void 0,!0),_:1})],void 0,!0),_:1})])}const xse=pt(dse,[["render",Tse],["__scopeId","data-v-db00126d"]]);const Sse={components:{BAvatar:Na,TypeBadge:m_,ButtonGeneral:yi},data(){return{points:[]}},methods:{getPoints(){Ct.get("map",{params:{isAccepted:!1,allIncludes:!1,types:JSON.stringify([0,1,2,3,4,5,6,7,8,9,10,11]),x1:0,x2:0,y1:0,y2:0}}).then(n=>{this.points=n.data.points})},deletePoint(n){Ct.delete(`map/${n}`).then(()=>{this.getPoints()})},acceptPoint(n){n.isAccepted=!0,Ct.put(`map/${n.id}`,n).then(()=>{this.getPoints()})},editPoint(n){this.$router.push({name:"edit-point",params:{id:n.id}})}},mounted(){this.getPoints()}},Ose={class:"cl-point"},Dse={class:"cl-icons"},Ise={class:"cl-comment"},Pse={class:"cl-actions"};function Mse(n,t,r,s,d,f){const p=ae("type-badge"),v=ae("b-avatar"),m=ae("button-general");return oe(!0),be(Ye,null,yn(d.points,w=>(oe(),be("div",Ose,[j("h5",null,Ue(w.title),1),j("h6",null,Ue(w.address),1),j("div",Dse,[(oe(!0),be(Ye,null,yn(JSON.parse(w.types),C=>(oe(),xt(p,{"point-id":w.id,type:C},null,8,["point-id","type"]))),256))]),j("div",null,[(oe(!0),be(Ye,null,yn(w.images,C=>(oe(),xt(v,{size:"5rem",rounded:"sm",class:"cl-image",src:C},null,8,["src"]))),256))]),j("p",Ise," \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439: "+Ue(w.comment),1),j("div",Pse,[F(m,{class:"cl-button",onClick:C=>f.acceptPoint(w)},{default:Q(()=>[xe("\u041F\u0440\u0438\u043D\u044F\u0442\u044C")],void 0,!0),_:2},1032,["onClick"]),F(m,{class:"cl-button",onClick:C=>f.editPoint(w)},{default:Q(()=>[xe("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C")],void 0,!0),_:2},1032,["onClick"]),F(m,{class:"cl-button",variant:"red",onClick:C=>f.deletePoint(w.id)},{default:Q(()=>[xe("\u041E\u0442\u043A\u043B\u043E\u043D\u0438\u0442\u044C")],void 0,!0),_:2},1032,["onClick"])])]))),256)}const Nse=pt(Sse,[["render",Mse],["__scopeId","data-v-8218bdaa"]]);var gB={exports:{}};/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(n,t){(function(r,s){n.exports=s(eB)})(window,function(r){return function(s){var d={};function f(p){if(d[p])return d[p].exports;var v=d[p]={i:p,l:!1,exports:{}};return s[p].call(v.exports,v,v.exports,f),v.l=!0,v.exports}return f.m=s,f.c=d,f.d=function(p,v,m){f.o(p,v)||Object.defineProperty(p,v,{enumerable:!0,get:m})},f.r=function(p){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(p,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(p,"__esModule",{value:!0})},f.t=function(p,v){if(1&v&&(p=f(p)),8&v||4&v&&typeof p=="object"&&p&&p.__esModule)return p;var m=Object.create(null);if(f.r(m),Object.defineProperty(m,"default",{enumerable:!0,value:p}),2&v&&typeof p!="string")for(var w in p)f.d(m,w,function(C){return p[C]}.bind(null,w));return m},f.n=function(p){var v=p&&p.__esModule?function(){return p.default}:function(){return p};return f.d(v,"a",v),v},f.o=function(p,v){return Object.prototype.hasOwnProperty.call(p,v)},f.p="",f(f.s=3)}([function(s,d){s.exports=r},function(s,d,f){(function(p){var v=typeof p=="object"&&p&&p.Object===Object&&p;d.a=v}).call(this,f(2))},function(s,d){var f;f=function(){return this}();try{f=f||new Function("return this")()}catch{typeof window=="object"&&(f=window)}s.exports=f},function(s,d,f){f.r(d);var p=f(0),v=f.n(p),m=function(W){var fe=typeof W;return W!=null&&(fe=="object"||fe=="function")},w=f(1),C=typeof self=="object"&&self&&self.Object===Object&&self,y=w.a||C||Function("return this")(),E=function(){return y.Date.now()},S=/\s/,I=function(W){for(var fe=W.length;fe--&&S.test(W.charAt(fe)););return fe},M=/^\s+/,q=function(W){return W&&W.slice(0,I(W)+1).replace(M,"")},L=y.Symbol,B=Object.prototype,$=B.hasOwnProperty,K=B.toString,Z=L?L.toStringTag:void 0,re=function(W){var fe=$.call(W,Z),ge=W[Z];try{W[Z]=void 0;var ve=!0}catch{}var Ge=K.call(W);return ve&&(fe?W[Z]=ge:delete W[Z]),Ge},J=Object.prototype.toString,G=function(W){return J.call(W)},P=L?L.toStringTag:void 0,X=function(W){return W==null?W===void 0?"[object Undefined]":"[object Null]":P&&P in Object(W)?re(W):G(W)},he=function(W){return W!=null&&typeof W=="object"},Ie=function(W){return typeof W=="symbol"||he(W)&&X(W)=="[object Symbol]"},De=/^[-+]0x[0-9a-f]+$/i,ke=/^0b[01]+$/i,je=/^0o[0-7]+$/i,de=parseInt,Me=function(W){if(typeof W=="number")return W;if(Ie(W))return NaN;if(m(W)){var fe=typeof W.valueOf=="function"?W.valueOf():W;W=m(fe)?fe+"":fe}if(typeof W!="string")return W===0?W:+W;W=q(W);var ge=ke.test(W);return ge||je.test(W)?de(W.slice(2),ge?2:8):De.test(W)?NaN:+W},ze=Math.max,hn=Math.min,Ke=function(W,fe,ge){var ve,Ge,ct,Ve,R,H,te=0,ee=!1,le=!1,we=!0;if(typeof W!="function")throw new TypeError("Expected a function");function Oe(Ee){var Re=ve,qe=Ge;return ve=Ge=void 0,te=Ee,Ve=W.apply(qe,Re)}function ye(Ee){return te=Ee,R=setTimeout(pe,fe),ee?Oe(Ee):Ve}function _e(Ee){var Re=Ee-H;return H===void 0||Re>=fe||Re<0||le&&Ee-te>=ct}function pe(){var Ee=E();if(_e(Ee))return Pe(Ee);R=setTimeout(pe,function(Re){var qe=fe-(Re-H);return le?hn(qe,ct-(Re-te)):qe}(Ee))}function Pe(Ee){return R=void 0,we&&ve?Oe(Ee):(ve=Ge=void 0,Ve)}function Te(){var Ee=E(),Re=_e(Ee);if(ve=arguments,Ge=this,H=Ee,Re){if(R===void 0)return ye(H);if(le)return clearTimeout(R),R=setTimeout(pe,fe),Oe(H)}return R===void 0&&(R=setTimeout(pe,fe)),Ve}return fe=Me(fe)||0,m(ge)&&(ee=!!ge.leading,ct=(le="maxWait"in ge)?ze(Me(ge.maxWait)||0,fe):ct,we="trailing"in ge?!!ge.trailing:we),Te.cancel=function(){R!==void 0&&clearTimeout(R),te=0,ve=H=Ge=R=void 0},Te.flush=function(){return R===void 0?Ve:Pe(E())},Te},Vt={name:"ckeditor",created(){const{CKEDITOR_VERSION:W}=window;if(W){const[fe]=W.split(".").map(Number);fe<34&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 34 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')},render(){return Object(p.h)(this.tagName)},model:{prop:"modelValue",event:"update:modelValue"},props:{editor:{type:Function,default:null},modelValue:{type:String,default:""},config:{type:Object,default:()=>({})},tagName:{type:String,default:"div"},disabled:{type:Boolean,default:!1}},data:()=>({instance:null,lastEditorData:{type:String,default:""}}),mounted(){const W=Object.assign({},this.config);this.modelValue&&(W.initialData=this.modelValue),this.editor.create(this.$el,W).then(fe=>{this.instance=Object(p.markRaw)(fe),this.setUpEditorEvents(),this.modelValue!==W.initialData&&fe.setData(this.modelValue),this.disabled&&fe.enableReadOnlyMode("Integration Sample"),this.$emit("ready",fe)}).catch(fe=>{console.error(fe)})},beforeUnmount(){this.instance&&(this.instance.destroy(),this.instance=null),this.$emit("destroy",this.instance)},watch:{modelValue(W){this.instance&&W!==this.lastEditorData&&this.instance.setData(W)},disabled(W){W?this.instance.enableReadOnlyMode("Integration Sample"):this.instance.disableReadOnlyMode("Integration Sample")}},methods:{setUpEditorEvents(){const W=this.instance,fe=Ke(ge=>{const ve=this.lastEditorData=W.getData();this.$emit("update:modelValue",ve,ge,W),this.$emit("input",ve,ge,W)},300,{leading:!0});W.model.document.on("change:data",fe),W.editing.view.document.on("focus",ge=>{this.$emit("focus",ge,W)}),W.editing.view.document.on("blur",ge=>{this.$emit("blur",ge,W)})}}};const Qt=v.a?v.a.version:p.version,[sr]=Qt.split(".").map(W=>parseInt(W,10));if(sr<3)throw new Error("The CKEditor plugin works only with Vue 3+. For more information, please refer to https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs-v3.html");const Sr={install(W){W.component("ckeditor",Vt)},component:Vt};d.default=Sr}]).default})})(gB);const Rse=XR(gB.exports);var Ak={exports:{}};(function(n,t){(function(r){const s=r.en=r.en||{};s.dictionary=Object.assign(s.dictionary||{},{"%0 of %1":"%0 of %1",Aquamarine:"Aquamarine",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold","Break text":"Break text","Bulleted List":"Bulleted List",Cancel:"Cancel","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Column:"Column","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.","Decrease indent":"Decrease indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Downloadable:"Downloadable","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor editing area: %0":"Editor editing area: %0","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Full size image":"Full size image",Green:"Green",Grey:"Grey","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image or file":"Insert image or file","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Inserting image failed":"Inserting image failed",Italic:"Italic","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link URL":"Link URL","Media URL":"Media URL","media widget":"media widget","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells",Next:"Next","Numbered List":"Numbered List","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab",Orange:"Orange",Paragraph:"Paragraph","Paste the media URL in the input.":"Paste the media URL in the input.","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous",Purple:"Purple",Red:"Red",Redo:"Redo","Rich Text Editor":"Rich Text Editor","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Show more items":"Show more items","Side image":"Side image","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically","Table toolbar":"Table toolbar","Text alternative":"Text alternative","The URL must not be empty.":"The URL must not be empty.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on",Turquoise:"Turquoise",Undo:"Undo",Unlink:"Unlink","Upload failed":"Upload failed","Upload in progress":"Upload in progress",White:"White","Widget toolbar":"Widget toolbar","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(r,s){n.exports=s()}(self,()=>(()=>{var r={3062:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const S=E},903:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CCzBF,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CA2DF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border)
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(var(--ck-clipboard-drop-target-dot-height) * -.5);

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	// Horizontal drop target (between blocks).
	& .ck.ck-clipboard-drop-target-position {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		margin: 0;
		text-align: initial;

		& .ck-clipboard-drop-target__line {
			position: absolute;
			width: 100%;
			height: 0;
			border: 1px solid var(--ck-clipboard-drop-target-color);
			margin-top: -1px;

			&::before {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
				border-width: var(--ck-clipboard-drop-target-dot-size) 0 var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size));
				border-style: solid;
			}

			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				right: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
				border-width: var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size)) var(--ck-clipboard-drop-target-dot-size) 0;
				border-style: solid;
			}
		}
	}
	*/

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}
`],sourceRoot:""}]);const S=E},3143:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-editor-classic/theme/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,gDCED,eDKC,CAPA,uICMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAIF,CAPA,gDAMC,qBACD,CAEA,iFACC,uBAAwB,CCR1B,eDaC,CANA,yMCHA,qCAAsC,CDOpC,eAEF,CAKF,yCAEC,0CAA2C,CCpB3C,eD8BD,CAZA,yHCdE,qCAAsC,CDmBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;

	& .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-modal);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

.ck.ck-editor__top {
	& .ck-sticky-panel {
		& .ck-toolbar {
			@mixin ck-rounded-corners {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			border-bottom-width: 0;
		}

		& .ck-sticky-panel__content_sticky .ck-toolbar {
			border-bottom-width: 1px;

			@mixin ck-rounded-corners {
				border-radius: 0;
			}
		}
	}
}

/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=E},4717:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	&::before {
		cursor: text;
		color: var(--ck-color-engine-placeholder-text);
	}
}
`],sourceRoot:""}]);const S=E},9315:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const S=E},8733:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const S=E},3508:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image-inline.ck-widget_selected,.ck.ck-editor__editable .image.ck-widget_selected{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBAuBD,CAbC,uBAEC,aAAc,CAGd,aAAc,CAGd,cAAe,CAGf,cACD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAWA,2GACC,SAUD,CAHC,qEACC,YACD,CAOA,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}


	/*
	 * Make sure the selected inline image always stays on top of its siblings.
	 * See https://github.com/ckeditor/ckeditor5/issues/9108.
	 */
	& .image.ck-widget_selected {
		z-index: 1;
	}

	& .image-inline.ck-widget_selected {
		z-index: 1;

		/*
		 * Make sure the native browser selection style is not displayed.
		 * Inline image widgets have their own styles for the selected state and
		 * leaving this up to the browser is asking for a visual collision.
		 */
		& ::selection {
			display: none;
		}
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const S=E},2640:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highligted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highligted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,mDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,oEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highligted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	animation: ck-image-caption-highlight .6s ease-out;
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highligted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`],sourceRoot:""}]);const S=E},5083:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const S=E},4036:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const S=E},3773:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const S=E},3689:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const S=E},1905:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=E},9773:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const S=E},2347:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);const S=E},7754:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& > .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		width: 50%;
		border-radius: 0;

		&:not(:focus) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);const S=E},4564:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,".ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:disc}.ck-content ul ul{list-style-type:circle}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/list.css"],names:[],mappings:"AAKA,eACC,uBAiBD,CAfC,kBACC,2BAaD,CAXC,qBACC,2BASD,CAPC,wBACC,2BAKD,CAHC,2BACC,2BACD,CAMJ,eACC,oBAaD,CAXC,kBACC,sBASD,CAJE,6CACC,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content ol {
	list-style-type: decimal;

	& ol {
		list-style-type: lower-latin;

		& ol {
			list-style-type: lower-roman;

			& ol {
				list-style-type: upper-latin;

				& ol {
					list-style-type: upper-roman;
				}
			}
		}
	}
}

.ck-content ul {
	list-style-type: disc;

	& ul {
		list-style-type: circle;

		& ul {
			list-style-type: square;

			& ul {
				list-style-type: square;
			}
		}
	}
}
`],sourceRoot:""}]);const S=E},4652:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const S=E},7442:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read\u2013only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const S=E},9292:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=E},1613:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,mFAEC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAUD,CARC,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label,
.ck[dir=rtl] .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	min-width: var(--ck-insert-table-dropdown-box-width);
	min-height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;
	outline: none;
	transition: none;

	&:focus {
		box-shadow: none;
	}

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const S=E},6306:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const S=E},3881:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,":root{--ck-color-table-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-table-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,6DACD,CAKE,8QAGC,wDAAyD,CAKzD,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-table-focused-cell-background: hsla(212, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-table-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const S=E},6945:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const S=E},4906:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;justify-content:left;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAOA,6BAMC,kBAAmB,CADnB,mBAAoB,CAEpB,oBAAqB,CAHrB,iBAAkB,CCFlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDkBD,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEjBD,6BCAC,oDD4ID,CCzIE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eF6ID,CA5IA,wIEGE,qCFyIF,CA5IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAuID,CA7GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAYD,CAbA,6FAIE,mCASF,CAbA,6FAQE,oCAKF,CAbA,yEAWC,eAAiB,CACjB,UACD,CAIC,oIIrFD,oDJyFC,CAOA,gLKhGD,kCLkGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC/HA,+CDmIA,CChIC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CDgHA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC/IC,mDDoJD,CCjJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CDgID,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;

	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: left;

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		font-weight: bold;
		opacity: .7;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;

		color: var(--ck-color-button-on-color);
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const S=E},5332:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eD4EA,CAxCA,yIChCC,qCDwED,CAxCA,2DAKE,gBAmCF,CAxCA,2DAUE,iBA8BF,CAxCA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CAuBD,CApBC,2ECxDD,eDmEC,CAXA,6LCpDA,qCAAsC,CDsDpC,8CASF,CAXA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEhFA,kCFkFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating\u2013point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: calc(1.0769230769em + 1px);
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2px /* Border */
	);
	--ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
}

.ck.ck-button.ck-switchbutton {
	/* Unlike a regular button, the switch button text color and background should never change.
	 * Changing toggle switch (background, outline) is enough to carry the information about the
	 * state of the entire component (https://github.com/ckeditor/ckeditor5/issues/12519)
	 */
	&, &:hover, &:focus, &:active, &.ck-on:hover, &.ck-on:focus, &.ck-on:active {
		color: inherit;
		background: transparent;
	}

	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Apply some smooth transition to the box-shadow and border. */
		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;
		border: 1px solid transparent;
		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: var(--ck-switch-button-inner-hover-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	/* Overriding default .ck-button:focus styles + an outline around the toogle */
	&:focus {
		border-color: transparent;
		outline: none;
		box-shadow: none;

		& .ck-button__toggle {
			box-shadow: 0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);
			outline-offset: 1px;
			outline: var(--ck-focus-ring);
		}
	}

	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-on {
		& .ck-button__toggle {
			background: var(--ck-color-switch-button-on-background);

			&:hover {
				background: var(--ck-color-switch-button-on-hover-background);
			}

			& .ck-button__toggle__inner {
				/*
				* Move the toggle switch to the right. It will be animated.
				*/
				@mixin ck-dir ltr {
					transform: translateX( var( --ck-switch-button-translation ) );
				}

				@mixin ck-dir rtl {
					transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const S=E},6781:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-table__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,4DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(212, 81%, 46%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	width: var(--ck-color-grid-tile-size);
	height: var(--ck-color-grid-tile-size);
	min-width: var(--ck-color-grid-tile-size);
	min-height: var(--ck-color-grid-tile-size);
	padding: 0;
	transition: .2s ease box-shadow;
	border: 0;

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	&.ck-color-table__color-tile_bordered {
		box-shadow: 0 0 0 1px var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);

		& .ck.ck-icon {
			display: block;
		}
	}

	&.ck-on,
	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		/* Disable the default .ck-button's border ring. */
		border: 0;
	}

	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`],sourceRoot:""}]);const S=E},5485:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-modal)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-modal) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eH8GD,CA5BA,qFG9EE,qCH0GF,CA5BA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAmBD,CAfC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;
	}

	& .ck-dropdown__panel {
		display: none;
		z-index: var(--ck-z-modal);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-modal) + 1 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;
			
			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=E},3949:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown .ck-dropdown__panel .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=E},7686:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAQC,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCCzFA,eDmGA,CAVA,qHCrFC,qCD+FD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* Make sure the divider stretches 100% height of the button
	https://github.com/ckeditor/ckeditor5/issues/10936 */
	& > .ck-splitbutton__arrow:not(:focus) {
		border-top-width: 0px;
		border-bottom-width: 0px;
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		/* Make sure the divider between the buttons looks fine when the button is focused */
		& > .ck-splitbutton__arrow:focus::after {
			--ck-color-split-button-hover-border: var(--ck-color-focus-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=E},7339:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const S=E},9688:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,mDACD,CAIA,gEACC,gDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-base-foreground);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-base-foreground);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=E},8847:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}:root{--ck-form-header-height:38px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}.ck.ck-form__header .ck-form__header__label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BACD,CCNA,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAQD,CAHC,4CACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-form-header-height: 38px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& .ck-form__header__label {
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const S=E},6574:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;
	}

	/* Allows dynamic coloring of an icon by inheriting its color from the parent. */
	&.ck-icon_inherit-color {
		color: inherit;

		& * {
			color: inherit;

			&:not([fill]) {
				/* Needed by FF. */
				fill: currentColor;
			}
		}
	}
}
`],sourceRoot:""}]);const S=E},4879:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=E},3662:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const S=E},2577:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eD8GD,CAzGA,2FCDE,qCD0GF,CAtGC,mEACC,UAmCD,CAjCC,gFACC,KA+BD,CAhCA,0FAIE,MA4BF,CAhCA,0FAQE,OAwBF,CAhCA,gFAiBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAP9C,mBAAoB,CAYpB,sBAAuB,CARvB,6DAA+D,CAH/D,oBAAqB,CAgBrB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,oUAGE,+HAYF,CAfA,oUAOE,wIAQF,CAfA,gTAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-x: var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-y: calc(0.6 * var(--ck-font-size-base));
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
			}

			@mixin ck-dir rtl {
				right: 0px;
			}

			pointer-events: none;
			transform-origin: 0 0;

			/* By default, display the label scaled down above the field. */
			transform: translate(var(--ck-spacing-medium), -6px) scale(.75);

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-labeled-field-label-default-position-x), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-labeled-field-label-default-position-x)), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=E},1046:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{border-radius:0;min-height:unset;padding:calc(var(--ck-line-height-base)*.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*.4*var(--ck-font-size-base));text-align:left;width:100%}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEfD,YCEC,eDGD,CALA,+DCME,qCDDF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAIC,eAAgB,CAHhB,gBAAiB,CAQjB,iIAEiE,CARjE,eAAgB,CADhB,UAwCD,CA7BC,+CAEC,yEACD,CAEA,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& .ck-button {
		min-height: unset;
		width: 100%;
		text-align: left;
		border-radius: 0;

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding:
			calc(.2 * var(--ck-line-height-base) * var(--ck-font-size-base))
			calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));

		& .ck-button__label {
			/* https://github.com/ckeditor/ckeditor5-heading/issues/63 */
			line-height: calc(1.2 * var(--ck-line-height-base) * var(--ck-font-size-base));
		}

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-switchbutton):not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=E},8793:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-modal);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-border-width: 1px;
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: var(--ck-balloon-border-width) solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
			margin-top: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
			margin-bottom: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_e"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height);
		}

		&::before {
			border-color: transparent transparent transparent var(--ck-color-panel-border);
			margin-right: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent transparent var(--ck-color-panel-background);
			margin-right: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_w"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0;
		}

		&::before {
			border-color: transparent var(--ck-color-panel-border) transparent transparent;
			margin-left: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent var(--ck-color-panel-background) transparent transparent;
			margin-left: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_e {
		&::before,
		&::after {
			right: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}

	&.ck-balloon-panel_arrow_w {
		&::before,
		&::after {
			left: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=E},4650:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const S=E},7676:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-modal) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=E},5868:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-modal)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-modal); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=E},6764:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAmED,CAjEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA8CF,CA5CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDpEH",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button {
	&::after {
		content: "";
		width: 0;
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		z-index: 1;
	}

	&:focus::after {
		display: none;
	}
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button {
			&::after {
				content: "";
				width: 0;
				position: absolute;
				right: -1px;
				top: -1px;
				bottom: -1px;
				z-index: 1;
			}

			&:focus::after {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}

		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);
			border-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}
	}
}
`],sourceRoot:""}]);const S=E},9695:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const S=E},5542:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDoGD,CAvGA,qECOE,qCDgGF,CAvGA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAmGD,CAhGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAjGF,qCAqGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	/* A drop-down containing the nested toolbar with configured items. */
	& .ck-toolbar__nested-toolbar-dropdown {
		/* Prevent empty space in the panel when the dropdown label is visible and long but the toolbar has few items. */
		& > .ck-dropdown__panel {
			min-width: auto;
		}

		& > .ck-button > .ck-button__label {
			max-width: 7em;
			width: auto;
		}
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=E},3332:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,".ck.ck-balloon-panel.ck-tooltip{--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium);pointer-events:none;z-index:calc(var(--ck-z-modal) + 100)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAKA,gCCGC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,8DAA+D,CAE/D,kCAAmC,CDPnC,mBAAoB,CAEpB,qCACD,CCMC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAbD,gCAgBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-balloon-panel.ck-tooltip {
	/* Keep tooltips transparent for any interactions. */
	pointer-events: none;

	z-index: calc( var(--ck-z-modal) + 100 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-balloon-panel.ck-tooltip {
	--ck-balloon-border-width: 0px;
	--ck-balloon-arrow-offset: 0px;
	--ck-balloon-arrow-half-width: 4px;
	--ck-balloon-arrow-height: 4px;
	--ck-color-panel-background: var(--ck-color-tooltip-background);

	padding: 0 var(--ck-spacing-medium);

	& .ck-tooltip__text {
		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
	}

	/* Reset balloon panel styles */
	box-shadow: none;

	/* Hide the default shadow of the .ck-balloon-panel tip */
	&::before {
		display: none;
	}
}
`],sourceRoot:""}]);const S=E},4793:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999)}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_reset.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CACD,CCAA,oDAEC,yBACD,CCNA,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAwD,CCvGxD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJuGD,CIjGA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-modal: calc( var(--ck-z-default) + 999 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(220, 6%, 81%);
	--ck-color-base-action: 									hsl(104, 50.2%, 42.5%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(218.1, 100%, 58%);
	--ck-color-base-active-focus:								hsl(218.2, 100%, 52.5%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						218, 81.8%, 56.9%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(212.4, 89.3%, 89%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(212, 100%, 97.1%);
	--ck-color-button-on-hover-background: 						hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-active-background: 					hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-disabled-background: 					hsl(211, 15%, 95%);
	--ck-color-button-on-color:									hsl(218.1, 100%, 58%);


	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-active-background: 				hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 57.6%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 49%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 53.2%, 40.2%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									var(--ck-color-base-border);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							var(--ck-color-base-border);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-button-on-color);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-button-on-color);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-background);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);

	/* -- Search result highlight ---------------------------------------------------------------- */

	--ck-color-highlight-background:							hsl(60, 100%, 50%)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const S=E},3488:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);

		background-color: var(--ck-color-widget-editable-focus-background);
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=E},8506:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const S=E},4921:(p,v,m)=>{m.d(v,{Z:()=>S});var w=m(1799),C=m.n(w),y=m(2609),E=m.n(y)()(C());E.push([p.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const S=E},2609:p=>{p.exports=function(v){var m=[];return m.toString=function(){return this.map(function(w){var C=v(w);return w[2]?"@media ".concat(w[2]," {").concat(C,"}"):C}).join("")},m.i=function(w,C,y){typeof w=="string"&&(w=[[null,w,""]]);var E={};if(y)for(var S=0;S<this.length;S++){var I=this[S][0];I!=null&&(E[I]=!0)}for(var M=0;M<w.length;M++){var q=[].concat(w[M]);y&&E[q[0]]||(C&&(q[2]?q[2]="".concat(C," and ").concat(q[2]):q[2]=C),m.push(q))}},m}},1799:p=>{function v(w,C){return function(y){if(Array.isArray(y))return y}(w)||function(y,E){var S=y&&(typeof Symbol<"u"&&y[Symbol.iterator]||y["@@iterator"]);if(S!=null){var I,M,q=[],L=!0,B=!1;try{for(S=S.call(y);!(L=(I=S.next()).done)&&(q.push(I.value),!E||q.length!==E);L=!0);}catch($){B=!0,M=$}finally{try{L||S.return==null||S.return()}finally{if(B)throw M}}return q}}(w,C)||function(y,E){if(!!y){if(typeof y=="string")return m(y,E);var S=Object.prototype.toString.call(y).slice(8,-1);if(S==="Object"&&y.constructor&&(S=y.constructor.name),S==="Map"||S==="Set")return Array.from(y);if(S==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S))return m(y,E)}}(w,C)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function m(w,C){(C==null||C>w.length)&&(C=w.length);for(var y=0,E=new Array(C);y<C;y++)E[y]=w[y];return E}p.exports=function(w){var C=v(w,4),y=C[1],E=C[3];if(!E)return y;if(typeof btoa=="function"){var S=btoa(unescape(encodeURIComponent(JSON.stringify(E)))),I="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(S),M="/*# ".concat(I," */"),q=E.sources.map(function(L){return"/*# sourceURL=".concat(E.sourceRoot||"").concat(L," */")});return[y].concat(q).concat([M]).join(`
`)}return[y].join(`
`)}},6062:(p,v,m)=>{var w,C=function(){return w===void 0&&(w=Boolean(window&&document&&document.all&&!window.atob)),w},y=function(){var J={};return function(G){if(J[G]===void 0){var P=document.querySelector(G);if(window.HTMLIFrameElement&&P instanceof window.HTMLIFrameElement)try{P=P.contentDocument.head}catch{P=null}J[G]=P}return J[G]}}(),E=[];function S(J){for(var G=-1,P=0;P<E.length;P++)if(E[P].identifier===J){G=P;break}return G}function I(J,G){for(var P={},X=[],he=0;he<J.length;he++){var Ie=J[he],De=G.base?Ie[0]+G.base:Ie[0],ke=P[De]||0,je="".concat(De," ").concat(ke);P[De]=ke+1;var de=S(je),Me={css:Ie[1],media:Ie[2],sourceMap:Ie[3]};de!==-1?(E[de].references++,E[de].updater(Me)):E.push({identifier:je,updater:re(Me,G),references:1}),X.push(je)}return X}function M(J){var G=document.createElement("style"),P=J.attributes||{};if(P.nonce===void 0){var X=m.nc;X&&(P.nonce=X)}if(Object.keys(P).forEach(function(Ie){G.setAttribute(Ie,P[Ie])}),typeof J.insert=="function")J.insert(G);else{var he=y(J.insert||"head");if(!he)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");he.appendChild(G)}return G}var q,L=(q=[],function(J,G){return q[J]=G,q.filter(Boolean).join(`
`)});function B(J,G,P,X){var he=P?"":X.media?"@media ".concat(X.media," {").concat(X.css,"}"):X.css;if(J.styleSheet)J.styleSheet.cssText=L(G,he);else{var Ie=document.createTextNode(he),De=J.childNodes;De[G]&&J.removeChild(De[G]),De.length?J.insertBefore(Ie,De[G]):J.appendChild(Ie)}}function $(J,G,P){var X=P.css,he=P.media,Ie=P.sourceMap;if(he?J.setAttribute("media",he):J.removeAttribute("media"),Ie&&typeof btoa<"u"&&(X+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(Ie))))," */")),J.styleSheet)J.styleSheet.cssText=X;else{for(;J.firstChild;)J.removeChild(J.firstChild);J.appendChild(document.createTextNode(X))}}var K=null,Z=0;function re(J,G){var P,X,he;if(G.singleton){var Ie=Z++;P=K||(K=M(G)),X=B.bind(null,P,Ie,!1),he=B.bind(null,P,Ie,!0)}else P=M(G),X=$.bind(null,P,G),he=function(){(function(De){if(De.parentNode===null)return!1;De.parentNode.removeChild(De)})(P)};return X(J),function(De){if(De){if(De.css===J.css&&De.media===J.media&&De.sourceMap===J.sourceMap)return;X(J=De)}else he()}}p.exports=function(J,G){(G=G||{}).singleton||typeof G.singleton=="boolean"||(G.singleton=C());var P=I(J=J||[],G);return function(X){if(X=X||[],Object.prototype.toString.call(X)==="[object Array]"){for(var he=0;he<P.length;he++){var Ie=S(P[he]);E[Ie].references--}for(var De=I(X,G),ke=0;ke<P.length;ke++){var je=S(P[ke]);E[je].references===0&&(E[je].updater(),E.splice(je,1))}P=De}}}}},s={};function d(p){var v=s[p];if(v!==void 0)return v.exports;var m=s[p]={id:p,exports:{}};return r[p](m,m.exports,d),m.exports}d.n=p=>{var v=p&&p.__esModule?()=>p.default:()=>p;return d.d(v,{a:v}),v},d.d=(p,v)=>{for(var m in v)d.o(v,m)&&!d.o(p,m)&&Object.defineProperty(p,m,{enumerable:!0,get:v[m]})},d.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),d.o=(p,v)=>Object.prototype.hasOwnProperty.call(p,v),d.nc=void 0;var f={};return(()=>{function p({emitter:l,activator:e,callback:i,contextElements:o}){l.listenTo(document,"mousedown",(a,c)=>{if(!e())return;const u=typeof c.composedPath=="function"?c.composedPath():[],h=typeof o=="function"?o():o;for(const g of h)if(g.contains(c.target)||u.includes(g))return;i()})}function v(l){const e=l;e.set("_isCssTransitionsDisabled",!1),e.disableCssTransitions=()=>{e._isCssTransitionsDisabled=!0},e.enableCssTransitions=()=>{e._isCssTransitionsDisabled=!1},e.extendTemplate({attributes:{class:[e.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}function m({view:l}){l.listenTo(l.element,"submit",(e,i)=>{i.preventDefault(),l.fire("submit")},{useCapture:!0})}d.d(f,{default:()=>_b});const w=function(){try{return navigator.userAgent.toLowerCase()}catch{return""}}(),C={isMac:E(w),isWindows:function(l){return l.indexOf("windows")>-1}(w),isGecko:function(l){return!!l.match(/gecko\/\d+/)}(w),isSafari:function(l){return l.indexOf(" applewebkit/")>-1&&l.indexOf("chrome")===-1}(w),isiOS:function(l){return!!l.match(/iphone|ipad/i)||E(l)&&navigator.maxTouchPoints>0}(w),isAndroid:function(l){return l.indexOf("android")>-1}(w),isBlink:function(l){return l.indexOf("chrome/")>-1&&l.indexOf("edge/")<0}(w),features:{isRegExpUnicodePropertySupported:function(){let l=!1;try{l="\u0107".search(new RegExp("[\\p{L}]","u"))===0}catch{}return l}()}},y=C;function E(l){return l.indexOf("macintosh")>-1}function S(l,e,i,o){i=i||function(g,b){return g===b};const a=Array.isArray(l)?l:Array.prototype.slice.call(l),c=Array.isArray(e)?e:Array.prototype.slice.call(e),u=function(g,b,k){const _=I(g,b,k);if(_===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const A=M(g,_),x=M(b,_),O=I(A,x,k),D=g.length-O,N=b.length-O;return{firstIndex:_,lastIndexOld:D,lastIndexNew:N}}(a,c,i);return o?function(g,b){const{firstIndex:k,lastIndexOld:_,lastIndexNew:A}=g;if(k===-1)return Array(b).fill("equal");let x=[];return k>0&&(x=x.concat(Array(k).fill("equal"))),A-k>0&&(x=x.concat(Array(A-k).fill("insert"))),_-k>0&&(x=x.concat(Array(_-k).fill("delete"))),A<b&&(x=x.concat(Array(b-A).fill("equal"))),x}(u,c.length):function(g,b){const k=[],{firstIndex:_,lastIndexOld:A,lastIndexNew:x}=b;return x-_>0&&k.push({index:_,type:"insert",values:g.slice(_,x)}),A-_>0&&k.push({index:_+(x-_),type:"delete",howMany:A-_}),k}(c,u)}function I(l,e,i){for(let o=0;o<Math.max(l.length,e.length);o++)if(l[o]===void 0||e[o]===void 0||!i(l[o],e[o]))return o;return-1}function M(l,e){return l.slice(e).reverse()}function q(l,e,i){i=i||function(D,N){return D===N};const o=l.length,a=e.length;if(o>200||a>200||o+a>300)return q.fastDiff(l,e,i,!0);let c,u;if(a<o){const D=l;l=e,e=D,c="delete",u="insert"}else c="insert",u="delete";const h=l.length,g=e.length,b=g-h,k={},_={};function A(D){const N=(_[D-1]!==void 0?_[D-1]:-1)+1,z=_[D+1]!==void 0?_[D+1]:-1,U=N>z?-1:1;k[D+U]&&(k[D]=k[D+U].slice(0)),k[D]||(k[D]=[]),k[D].push(N>z?c:u);let ie=Math.max(N,z),Ae=ie-D;for(;Ae<h&&ie<g&&i(l[Ae],e[ie]);)Ae++,ie++,k[D].push("equal");return ie}let x,O=0;do{for(x=-O;x<b;x++)_[x]=A(x);for(x=b+O;x>b;x--)_[x]=A(x);_[b]=A(b),O++}while(_[b]!==g);return k[b].slice(1)}function L(l,...e){e.forEach(i=>{const o=Object.getOwnPropertyNames(i),a=Object.getOwnPropertySymbols(i);o.concat(a).forEach(c=>{if(c in l.prototype||typeof i=="function"&&(c=="length"||c=="name"||c=="prototype"))return;const u=Object.getOwnPropertyDescriptor(i,c);u.enumerable=!1,Object.defineProperty(l.prototype,c,u)})})}q.fastDiff=S;const B=function(){return function l(){l.called=!0}};class ${constructor(e,i){this.source=e,this.name=i,this.path=[],this.stop=B(),this.off=B()}}const K=new Array(256).fill("").map((l,e)=>("0"+e.toString(16)).slice(-2));function Z(){const l=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,i=4294967296*Math.random()>>>0,o=4294967296*Math.random()>>>0;return"e"+K[l>>0&255]+K[l>>8&255]+K[l>>16&255]+K[l>>24&255]+K[e>>0&255]+K[e>>8&255]+K[e>>16&255]+K[e>>24&255]+K[i>>0&255]+K[i>>8&255]+K[i>>16&255]+K[i>>24&255]+K[o>>0&255]+K[o>>8&255]+K[o>>16&255]+K[o>>24&255]}const re={get(l="normal"){return typeof l!="number"?this[l]||this.normal:l},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function J(l,e){const i=re.get(e.priority);for(let o=0;o<l.length;o++)if(re.get(l[o].priority)<i)return void l.splice(o,0,e);l.push(e)}const G="https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html";class P extends Error{constructor(e,i,o){super(function(a,c){const u=new WeakSet,h=(k,_)=>{if(typeof _=="object"&&_!==null){if(u.has(_))return`[object ${_.constructor.name}]`;u.add(_)}return _},g=c?` ${JSON.stringify(c,h)}`:"",b=Ie(a);return a+g+b}(e,o)),this.name="CKEditorError",this.context=i,this.data=o}is(e){return e==="CKEditorError"}static rethrowUnexpectedError(e,i){if(e.is&&e.is("CKEditorError"))throw e;const o=new P(e.message,i);throw o.stack=e.stack,o}}function X(l,e){console.warn(...De(l,e))}function he(l,e){console.error(...De(l,e))}function Ie(l){return`
`))this.fire(e.type,e,{inputType:"insertParagraph",targetRanges:[o.createRange(h[0].end)]});else if(e.inputType=="insertText"&&u&&u.includes(`
`;else{let i=null;for(const o of l.getChildren()){const a=k0(o);i&&(i.is("containerElement")||o.is("containerElement"))&&(v0.includes(i.name)||v0.includes(o.name)?e+=`
`:e+=`
