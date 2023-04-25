(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Pc(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function xc(t){if(q(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Oe(s)?Um(s):xc(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Oe(t))return t;if(fe(t))return t}}const xm=/;(?![^(]*\))/g,Mm=/:([^]+)/,Lm=/\/\*.*?\*\//gs;function Um(t){const e={};return t.replace(Lm,"").split(xm).forEach(n=>{if(n){const s=n.split(Mm);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Mc(t){let e="";if(Oe(t))e=t;else if(q(t))for(let n=0;n<t.length;n++){const s=Mc(t[n]);s&&(e+=s+" ")}else if(fe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Fm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vm=Pc(Fm);function If(t){return!!t||t===""}function $m(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=yo(t[s],e[s]);return n}function yo(t,e){if(t===e)return!0;let n=fu(t),s=fu(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=mr(t),s=mr(e),n||s)return t===e;if(n=q(t),s=q(e),n||s)return n&&s?$m(t,e):!1;if(n=fe(t),s=fe(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!yo(t[o],e[o]))return!1}}return String(t)===String(e)}function Bm(t,e){return t.findIndex(n=>yo(n,e))}const hA=t=>Oe(t)?t:t==null?"":q(t)||fe(t)&&(t.toString===Sf||!Y(t.toString))?JSON.stringify(t,Tf,2):String(t),Tf=(t,e)=>e&&e.__v_isRef?Tf(t,e.value):us(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:wo(e)?{[`Set(${e.size})`]:[...e.values()]}:fe(e)&&!q(e)&&!Cf(e)?String(e):e,pe={},ls=[],_t=()=>{},jm=()=>!1,Hm=/^on[^a-z]/,vo=t=>Hm.test(t),Lc=t=>t.startsWith("onUpdate:"),Xe=Object.assign,Uc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},qm=Object.prototype.hasOwnProperty,se=(t,e)=>qm.call(t,e),q=Array.isArray,us=t=>Vr(t)==="[object Map]",wo=t=>Vr(t)==="[object Set]",fu=t=>Vr(t)==="[object Date]",Y=t=>typeof t=="function",Oe=t=>typeof t=="string",mr=t=>typeof t=="symbol",fe=t=>t!==null&&typeof t=="object",bf=t=>fe(t)&&Y(t.then)&&Y(t.catch),Sf=Object.prototype.toString,Vr=t=>Sf.call(t),zm=t=>Vr(t).slice(8,-1),Cf=t=>Vr(t)==="[object Object]",Fc=t=>Oe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Si=Pc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_o=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Km=/-(\w)/g,Lt=_o(t=>t.replace(Km,(e,n)=>n?n.toUpperCase():"")),Wm=/\B([A-Z])/g,Ns=_o(t=>t.replace(Wm,"-$1").toLowerCase()),Eo=_o(t=>t.charAt(0).toUpperCase()+t.slice(1)),fa=_o(t=>t?`on${Eo(t)}`:""),yr=(t,e)=>!Object.is(t,e),Ci=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Vi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},$i=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let du;const Gm=()=>du||(du=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let yt;class Qm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=yt,!e&&yt&&(this.index=(yt.scopes||(yt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=yt;try{return yt=this,e()}finally{yt=n}}}on(){yt=this}off(){yt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Ym(t,e=yt){e&&e.active&&e.effects.push(t)}function Jm(){return yt}const Vc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Af=t=>(t.w&vn)>0,kf=t=>(t.n&vn)>0,Xm=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=vn},Zm=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Af(r)&&!kf(r)?r.delete(t):e[n++]=r,r.w&=~vn,r.n&=~vn}e.length=n}},ja=new WeakMap;let Js=0,vn=1;const Ha=30;let vt;const Vn=Symbol(""),qa=Symbol("");class $c{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ym(this,s)}run(){if(!this.active)return this.fn();let e=vt,n=fn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=vt,vt=this,fn=!0,vn=1<<++Js,Js<=Ha?Xm(this):pu(this),this.fn()}finally{Js<=Ha&&Zm(this),vn=1<<--Js,vt=this.parent,fn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){vt===this?this.deferStop=!0:this.active&&(pu(this),this.onStop&&this.onStop(),this.active=!1)}}function pu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let fn=!0;const Rf=[];function Ps(){Rf.push(fn),fn=!1}function xs(){const t=Rf.pop();fn=t===void 0?!0:t}function it(t,e,n){if(fn&&vt){let s=ja.get(t);s||ja.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Vc()),Df(r)}}function Df(t,e){let n=!1;Js<=Ha?kf(t)||(t.n|=vn,n=!Af(t)):n=!t.has(vt),n&&(t.add(vt),vt.deps.push(t))}function Kt(t,e,n,s,r,i){const o=ja.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&q(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":q(t)?Fc(n)&&a.push(o.get("length")):(a.push(o.get(Vn)),us(t)&&a.push(o.get(qa)));break;case"delete":q(t)||(a.push(o.get(Vn)),us(t)&&a.push(o.get(qa)));break;case"set":us(t)&&a.push(o.get(Vn));break}if(a.length===1)a[0]&&za(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);za(Vc(c))}}function za(t,e){const n=q(t)?t:[...t];for(const s of n)s.computed&&gu(s);for(const s of n)s.computed||gu(s)}function gu(t,e){(t!==vt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const ey=Pc("__proto__,__v_isRef,__isVue"),Of=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(mr)),ty=Bc(),ny=Bc(!1,!0),sy=Bc(!0),mu=ry();function ry(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ie(this);for(let i=0,o=this.length;i<o;i++)it(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ie)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ps();const s=ie(this)[e].apply(this,n);return xs(),s}}),t}function iy(t){const e=ie(this);return it(e,"has",t),e.hasOwnProperty(t)}function Bc(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Ey:Lf:e?Mf:xf).get(s))return s;const o=q(s);if(!t){if(o&&se(mu,r))return Reflect.get(mu,r,i);if(r==="hasOwnProperty")return iy}const a=Reflect.get(s,r,i);return(mr(r)?Of.has(r):ey(r))||(t||it(s,"get",r),e)?a:He(a)?o&&Fc(r)?a:a.value:fe(a)?t?Uf(a):$r(a):a}}const oy=Nf(),ay=Nf(!0);function Nf(t=!1){return function(n,s,r,i){let o=n[s];if(vs(o)&&He(o)&&!He(r))return!1;if(!t&&(!Bi(r)&&!vs(r)&&(o=ie(o),r=ie(r)),!q(n)&&He(o)&&!He(r)))return o.value=r,!0;const a=q(n)&&Fc(s)?Number(s)<n.length:se(n,s),c=Reflect.set(n,s,r,i);return n===ie(i)&&(a?yr(r,o)&&Kt(n,"set",s,r):Kt(n,"add",s,r)),c}}function cy(t,e){const n=se(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Kt(t,"delete",e,void 0),s}function ly(t,e){const n=Reflect.has(t,e);return(!mr(e)||!Of.has(e))&&it(t,"has",e),n}function uy(t){return it(t,"iterate",q(t)?"length":Vn),Reflect.ownKeys(t)}const Pf={get:ty,set:oy,deleteProperty:cy,has:ly,ownKeys:uy},hy={get:sy,set(t,e){return!0},deleteProperty(t,e){return!0}},fy=Xe({},Pf,{get:ny,set:ay}),jc=t=>t,Io=t=>Reflect.getPrototypeOf(t);function ui(t,e,n=!1,s=!1){t=t.__v_raw;const r=ie(t),i=ie(e);n||(e!==i&&it(r,"get",e),it(r,"get",i));const{has:o}=Io(r),a=s?jc:n?zc:vr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function hi(t,e=!1){const n=this.__v_raw,s=ie(n),r=ie(t);return e||(t!==r&&it(s,"has",t),it(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function fi(t,e=!1){return t=t.__v_raw,!e&&it(ie(t),"iterate",Vn),Reflect.get(t,"size",t)}function yu(t){t=ie(t);const e=ie(this);return Io(e).has.call(e,t)||(e.add(t),Kt(e,"add",t,t)),this}function vu(t,e){e=ie(e);const n=ie(this),{has:s,get:r}=Io(n);let i=s.call(n,t);i||(t=ie(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?yr(e,o)&&Kt(n,"set",t,e):Kt(n,"add",t,e),this}function wu(t){const e=ie(this),{has:n,get:s}=Io(e);let r=n.call(e,t);r||(t=ie(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Kt(e,"delete",t,void 0),i}function _u(){const t=ie(this),e=t.size!==0,n=t.clear();return e&&Kt(t,"clear",void 0,void 0),n}function di(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ie(o),c=e?jc:t?zc:vr;return!t&&it(a,"iterate",Vn),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function pi(t,e,n){return function(...s){const r=this.__v_raw,i=ie(r),o=us(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?jc:e?zc:vr;return!e&&it(i,"iterate",c?qa:Vn),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function tn(t){return function(...e){return t==="delete"?!1:this}}function dy(){const t={get(i){return ui(this,i)},get size(){return fi(this)},has:hi,add:yu,set:vu,delete:wu,clear:_u,forEach:di(!1,!1)},e={get(i){return ui(this,i,!1,!0)},get size(){return fi(this)},has:hi,add:yu,set:vu,delete:wu,clear:_u,forEach:di(!1,!0)},n={get(i){return ui(this,i,!0)},get size(){return fi(this,!0)},has(i){return hi.call(this,i,!0)},add:tn("add"),set:tn("set"),delete:tn("delete"),clear:tn("clear"),forEach:di(!0,!1)},s={get(i){return ui(this,i,!0,!0)},get size(){return fi(this,!0)},has(i){return hi.call(this,i,!0)},add:tn("add"),set:tn("set"),delete:tn("delete"),clear:tn("clear"),forEach:di(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=pi(i,!1,!1),n[i]=pi(i,!0,!1),e[i]=pi(i,!1,!0),s[i]=pi(i,!0,!0)}),[t,n,e,s]}const[py,gy,my,yy]=dy();function Hc(t,e){const n=e?t?yy:my:t?gy:py;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(se(n,r)&&r in s?n:s,r,i)}const vy={get:Hc(!1,!1)},wy={get:Hc(!1,!0)},_y={get:Hc(!0,!1)},xf=new WeakMap,Mf=new WeakMap,Lf=new WeakMap,Ey=new WeakMap;function Iy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ty(t){return t.__v_skip||!Object.isExtensible(t)?0:Iy(zm(t))}function $r(t){return vs(t)?t:qc(t,!1,Pf,vy,xf)}function by(t){return qc(t,!1,fy,wy,Mf)}function Uf(t){return qc(t,!0,hy,_y,Lf)}function qc(t,e,n,s,r){if(!fe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Ty(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function hs(t){return vs(t)?hs(t.__v_raw):!!(t&&t.__v_isReactive)}function vs(t){return!!(t&&t.__v_isReadonly)}function Bi(t){return!!(t&&t.__v_isShallow)}function Ff(t){return hs(t)||vs(t)}function ie(t){const e=t&&t.__v_raw;return e?ie(e):t}function Vf(t){return Vi(t,"__v_skip",!0),t}const vr=t=>fe(t)?$r(t):t,zc=t=>fe(t)?Uf(t):t;function $f(t){fn&&vt&&(t=ie(t),Df(t.dep||(t.dep=Vc())))}function Bf(t,e){t=ie(t);const n=t.dep;n&&za(n)}function He(t){return!!(t&&t.__v_isRef===!0)}function Ai(t){return jf(t,!1)}function Sy(t){return jf(t,!0)}function jf(t,e){return He(t)?t:new Cy(t,e)}class Cy{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ie(e),this._value=n?e:vr(e)}get value(){return $f(this),this._value}set value(e){const n=this.__v_isShallow||Bi(e)||vs(e);e=n?e:ie(e),yr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:vr(e),Bf(this))}}function fs(t){return He(t)?t.value:t}const Ay={get:(t,e,n)=>fs(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return He(r)&&!He(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Hf(t){return hs(t)?t:new Proxy(t,Ay)}var qf;class ky{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[qf]=!1,this._dirty=!0,this.effect=new $c(e,()=>{this._dirty||(this._dirty=!0,Bf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ie(this);return $f(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}qf="__v_isReadonly";function Ry(t,e,n=!1){let s,r;const i=Y(t);return i?(s=t,r=_t):(s=t.get,r=t.set),new ky(s,r,i||!r,n)}function dn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){To(i,e,n)}return r}function Et(t,e,n,s){if(Y(t)){const i=dn(t,e,n,s);return i&&bf(i)&&i.catch(o=>{To(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Et(t[i],e,n,s));return r}function To(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){dn(c,null,10,[t,o,a]);return}}Dy(t,n,r,s)}function Dy(t,e,n,s=!0){console.error(t)}let wr=!1,Ka=!1;const Be=[];let Ot=0;const ds=[];let Bt=null,On=0;const zf=Promise.resolve();let Kc=null;function Kf(t){const e=Kc||zf;return t?e.then(this?t.bind(this):t):e}function Oy(t){let e=Ot+1,n=Be.length;for(;e<n;){const s=e+n>>>1;_r(Be[s])<t?e=s+1:n=s}return e}function Wc(t){(!Be.length||!Be.includes(t,wr&&t.allowRecurse?Ot+1:Ot))&&(t.id==null?Be.push(t):Be.splice(Oy(t.id),0,t),Wf())}function Wf(){!wr&&!Ka&&(Ka=!0,Kc=zf.then(Qf))}function Ny(t){const e=Be.indexOf(t);e>Ot&&Be.splice(e,1)}function Py(t){q(t)?ds.push(...t):(!Bt||!Bt.includes(t,t.allowRecurse?On+1:On))&&ds.push(t),Wf()}function Eu(t,e=wr?Ot+1:0){for(;e<Be.length;e++){const n=Be[e];n&&n.pre&&(Be.splice(e,1),e--,n())}}function Gf(t){if(ds.length){const e=[...new Set(ds)];if(ds.length=0,Bt){Bt.push(...e);return}for(Bt=e,Bt.sort((n,s)=>_r(n)-_r(s)),On=0;On<Bt.length;On++)Bt[On]();Bt=null,On=0}}const _r=t=>t.id==null?1/0:t.id,xy=(t,e)=>{const n=_r(t)-_r(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Qf(t){Ka=!1,wr=!0,Be.sort(xy);const e=_t;try{for(Ot=0;Ot<Be.length;Ot++){const n=Be[Ot];n&&n.active!==!1&&dn(n,null,14)}}finally{Ot=0,Be.length=0,Gf(),wr=!1,Kc=null,(Be.length||ds.length)&&Qf()}}function My(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||pe;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||pe;d&&(r=n.map(g=>Oe(g)?g.trim():g)),h&&(r=n.map($i))}let a,c=s[a=fa(e)]||s[a=fa(Lt(e))];!c&&i&&(c=s[a=fa(Ns(e))]),c&&Et(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Et(l,t,6,r)}}function Yf(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!Y(t)){const c=l=>{const u=Yf(l,e,!0);u&&(a=!0,Xe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(fe(t)&&s.set(t,null),null):(q(i)?i.forEach(c=>o[c]=null):Xe(o,i),fe(t)&&s.set(t,o),o)}function bo(t,e){return!t||!vo(e)?!1:(e=e.slice(2).replace(/Once$/,""),se(t,e[0].toLowerCase()+e.slice(1))||se(t,Ns(e))||se(t,e))}let ht=null,So=null;function ji(t){const e=ht;return ht=t,So=t&&t.type.__scopeId||null,e}function fA(t){So=t}function dA(){So=null}function Xs(t,e=ht,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Du(-1);const i=ji(e);let o;try{o=t(...r)}finally{ji(i),s._d&&Du(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function da(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:g,ctx:v,inheritAttrs:_}=t;let R,k;const U=ji(t);try{if(n.shapeFlag&4){const J=r||s;R=Dt(u.call(J,J,h,i,g,d,v)),k=c}else{const J=e;R=Dt(J.length>1?J(i,{attrs:c,slots:a,emit:l}):J(i,null)),k=e.props?c:Ly(c)}}catch(J){ar.length=0,To(J,t,1),R=Ce(qn)}let P=R;if(k&&_!==!1){const J=Object.keys(k),{shapeFlag:de}=P;J.length&&de&7&&(o&&J.some(Lc)&&(k=Uy(k,o)),P=ws(P,k))}return n.dirs&&(P=ws(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),R=P,ji(U),R}const Ly=t=>{let e;for(const n in t)(n==="class"||n==="style"||vo(n))&&((e||(e={}))[n]=t[n]);return e},Uy=(t,e)=>{const n={};for(const s in t)(!Lc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Fy(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Iu(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!bo(l,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Iu(s,o,l):!0:!!o;return!1}function Iu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!bo(n,i))return!0}return!1}function Vy({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const $y=t=>t.__isSuspense;function By(t,e){e&&e.pendingBranch?q(t)?e.effects.push(...t):e.effects.push(t):Py(t)}function ki(t,e){if(Se){let n=Se.provides;const s=Se.parent&&Se.parent.provides;s===n&&(n=Se.provides=Object.create(s)),n[t]=e}}function It(t,e,n=!1){const s=Se||ht;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Y(e)?e.call(s.proxy):e}}const gi={};function ir(t,e,n){return Jf(t,e,n)}function Jf(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=pe){const a=Jm()===(Se==null?void 0:Se.scope)?Se:null;let c,l=!1,u=!1;if(He(t)?(c=()=>t.value,l=Bi(t)):hs(t)?(c=()=>t,s=!0):q(t)?(u=!0,l=t.some(P=>hs(P)||Bi(P)),c=()=>t.map(P=>{if(He(P))return P.value;if(hs(P))return xn(P);if(Y(P))return dn(P,a,2)})):Y(t)?e?c=()=>dn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Et(t,a,3,[d])}:c=_t,e&&s){const P=c;c=()=>xn(P())}let h,d=P=>{h=k.onStop=()=>{dn(P,a,4)}},g;if(Ir)if(d=_t,e?n&&Et(e,a,3,[c(),u?[]:void 0,d]):c(),r==="sync"){const P=Mv();g=P.__watcherHandles||(P.__watcherHandles=[])}else return _t;let v=u?new Array(t.length).fill(gi):gi;const _=()=>{if(k.active)if(e){const P=k.run();(s||l||(u?P.some((J,de)=>yr(J,v[de])):yr(P,v)))&&(h&&h(),Et(e,a,3,[P,v===gi?void 0:u&&v[0]===gi?[]:v,d]),v=P)}else k.run()};_.allowRecurse=!!e;let R;r==="sync"?R=_:r==="post"?R=()=>tt(_,a&&a.suspense):(_.pre=!0,a&&(_.id=a.uid),R=()=>Wc(_));const k=new $c(c,R);e?n?_():v=k.run():r==="post"?tt(k.run.bind(k),a&&a.suspense):k.run();const U=()=>{k.stop(),a&&a.scope&&Uc(a.scope.effects,k)};return g&&g.push(U),U}function jy(t,e,n){const s=this.proxy,r=Oe(t)?t.includes(".")?Xf(s,t):()=>s[t]:t.bind(s,s);let i;Y(e)?i=e:(i=e.handler,n=e);const o=Se;_s(this);const a=Jf(r,i.bind(s),n);return o?_s(o):$n(),a}function Xf(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function xn(t,e){if(!fe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),He(t))xn(t.value,e);else if(q(t))for(let n=0;n<t.length;n++)xn(t[n],e);else if(wo(t)||us(t))t.forEach(n=>{xn(n,e)});else if(Cf(t))for(const n in t)xn(t[n],e);return t}function Gc(t){return Y(t)?{setup:t,name:t.name}:t}const Ri=t=>!!t.type.__asyncLoader,Zf=t=>t.type.__isKeepAlive;function Hy(t,e){ed(t,"a",e)}function qy(t,e){ed(t,"da",e)}function ed(t,e,n=Se){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Co(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Zf(r.parent.vnode)&&zy(s,e,n,r),r=r.parent}}function zy(t,e,n,s){const r=Co(e,t,s,!0);td(()=>{Uc(s[e],r)},n)}function Co(t,e,n=Se,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ps(),_s(n);const a=Et(e,n,t,o);return $n(),xs(),a});return s?r.unshift(i):r.push(i),i}}const Xt=t=>(e,n=Se)=>(!Ir||t==="sp")&&Co(t,(...s)=>e(...s),n),Ky=Xt("bm"),Wy=Xt("m"),Gy=Xt("bu"),Qy=Xt("u"),Yy=Xt("bum"),td=Xt("um"),Jy=Xt("sp"),Xy=Xt("rtg"),Zy=Xt("rtc");function ev(t,e=Se){Co("ec",t,e)}function pA(t,e){const n=ht;if(n===null)return t;const s=Ro(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=pe]=e[i];o&&(Y(o)&&(o={mounted:o,updated:o}),o.deep&&xn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function An(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Ps(),Et(c,n,8,[t.el,a,t,e]),xs())}}const nd="components";function pa(t,e){return nv(nd,t,!0,e)||t}const tv=Symbol();function nv(t,e,n=!0,s=!1){const r=ht||Se;if(r){const i=r.type;if(t===nd){const a=Nv(i,!1);if(a&&(a===e||a===Lt(e)||a===Eo(Lt(e))))return i}const o=Tu(r[t]||i[t],e)||Tu(r.appContext[t],e);return!o&&s?i:o}}function Tu(t,e){return t&&(t[e]||t[Lt(e)]||t[Eo(Lt(e))])}function gA(t,e,n,s){let r;const i=n&&n[s];if(q(t)||Oe(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(fe(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const Wa=t=>t?dd(t)?Ro(t)||t.proxy:Wa(t.parent):null,or=Xe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Wa(t.parent),$root:t=>Wa(t.root),$emit:t=>t.emit,$options:t=>Qc(t),$forceUpdate:t=>t.f||(t.f=()=>Wc(t.update)),$nextTick:t=>t.n||(t.n=Kf.bind(t.proxy)),$watch:t=>jy.bind(t)}),ga=(t,e)=>t!==pe&&!t.__isScriptSetup&&se(t,e),sv={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(ga(s,e))return o[e]=1,s[e];if(r!==pe&&se(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&se(l,e))return o[e]=3,i[e];if(n!==pe&&se(n,e))return o[e]=4,n[e];Ga&&(o[e]=0)}}const u=or[e];let h,d;if(u)return e==="$attrs"&&it(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==pe&&se(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,se(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return ga(r,e)?(r[e]=n,!0):s!==pe&&se(s,e)?(s[e]=n,!0):se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==pe&&se(t,o)||ga(e,o)||(a=i[0])&&se(a,o)||se(s,o)||se(or,o)||se(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Ga=!0;function rv(t){const e=Qc(t),n=t.proxy,s=t.ctx;Ga=!1,e.beforeCreate&&bu(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:v,activated:_,deactivated:R,beforeDestroy:k,beforeUnmount:U,destroyed:P,unmounted:J,render:de,renderTracked:_e,renderTriggered:Qe,errorCaptured:Ze,serverPrefetch:St,expose:lt,inheritAttrs:en,components:Ct,directives:ts,filters:Sn}=e;if(l&&iv(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ue in o){const ce=o[ue];Y(ce)&&(s[ue]=ce.bind(n))}if(r){const ue=r.call(n,n);fe(ue)&&(t.data=$r(ue))}if(Ga=!0,i)for(const ue in i){const ce=i[ue],pt=Y(ce)?ce.bind(n,n):Y(ce.get)?ce.get.bind(n,n):_t,Cn=!Y(ce)&&Y(ce.set)?ce.set.bind(n):_t,gt=ut({get:pt,set:Cn});Object.defineProperty(s,ue,{enumerable:!0,configurable:!0,get:()=>gt.value,set:et=>gt.value=et})}if(a)for(const ue in a)sd(a[ue],s,n,ue);if(c){const ue=Y(c)?c.call(n):c;Reflect.ownKeys(ue).forEach(ce=>{ki(ce,ue[ce])})}u&&bu(u,t,"c");function Ee(ue,ce){q(ce)?ce.forEach(pt=>ue(pt.bind(n))):ce&&ue(ce.bind(n))}if(Ee(Ky,h),Ee(Wy,d),Ee(Gy,g),Ee(Qy,v),Ee(Hy,_),Ee(qy,R),Ee(ev,Ze),Ee(Zy,_e),Ee(Xy,Qe),Ee(Yy,U),Ee(td,J),Ee(Jy,St),q(lt))if(lt.length){const ue=t.exposed||(t.exposed={});lt.forEach(ce=>{Object.defineProperty(ue,ce,{get:()=>n[ce],set:pt=>n[ce]=pt})})}else t.exposed||(t.exposed={});de&&t.render===_t&&(t.render=de),en!=null&&(t.inheritAttrs=en),Ct&&(t.components=Ct),ts&&(t.directives=ts)}function iv(t,e,n=_t,s=!1){q(t)&&(t=Qa(t));for(const r in t){const i=t[r];let o;fe(i)?"default"in i?o=It(i.from||r,i.default,!0):o=It(i.from||r):o=It(i),He(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function bu(t,e,n){Et(q(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function sd(t,e,n,s){const r=s.includes(".")?Xf(n,s):()=>n[s];if(Oe(t)){const i=e[t];Y(i)&&ir(r,i)}else if(Y(t))ir(r,t.bind(n));else if(fe(t))if(q(t))t.forEach(i=>sd(i,e,n,s));else{const i=Y(t.handler)?t.handler.bind(n):e[t.handler];Y(i)&&ir(r,i,t)}}function Qc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Hi(c,l,o,!0)),Hi(c,e,o)),fe(e)&&i.set(e,c),c}function Hi(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Hi(t,i,n,!0),r&&r.forEach(o=>Hi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=ov[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const ov={data:Su,props:Rn,emits:Rn,methods:Rn,computed:Rn,beforeCreate:Ye,created:Ye,beforeMount:Ye,mounted:Ye,beforeUpdate:Ye,updated:Ye,beforeDestroy:Ye,beforeUnmount:Ye,destroyed:Ye,unmounted:Ye,activated:Ye,deactivated:Ye,errorCaptured:Ye,serverPrefetch:Ye,components:Rn,directives:Rn,watch:cv,provide:Su,inject:av};function Su(t,e){return e?t?function(){return Xe(Y(t)?t.call(this,this):t,Y(e)?e.call(this,this):e)}:e:t}function av(t,e){return Rn(Qa(t),Qa(e))}function Qa(t){if(q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ye(t,e){return t?[...new Set([].concat(t,e))]:e}function Rn(t,e){return t?Xe(Xe(Object.create(null),t),e):e}function cv(t,e){if(!t)return e;if(!e)return t;const n=Xe(Object.create(null),t);for(const s in e)n[s]=Ye(t[s],e[s]);return n}function lv(t,e,n,s=!1){const r={},i={};Vi(i,ko,1),t.propsDefaults=Object.create(null),rd(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:by(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function uv(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ie(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(bo(t.emitsOptions,d))continue;const g=e[d];if(c)if(se(i,d))g!==i[d]&&(i[d]=g,l=!0);else{const v=Lt(d);r[v]=Ya(c,a,v,g,t,!1)}else g!==i[d]&&(i[d]=g,l=!0)}}}else{rd(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!se(e,h)&&((u=Ns(h))===h||!se(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Ya(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!se(e,h))&&(delete i[h],l=!0)}l&&Kt(t,"set","$attrs")}function rd(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Si(c))continue;const l=e[c];let u;r&&se(r,u=Lt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:bo(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=ie(n),l=a||pe;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Ya(r,c,h,l[h],t,!se(l,h))}}return o}function Ya(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=se(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&Y(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(_s(r),s=l[n]=c.call(null,e),$n())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Ns(n))&&(s=!0))}return s}function id(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!Y(t)){const u=h=>{c=!0;const[d,g]=id(h,e,!0);Xe(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return fe(t)&&s.set(t,ls),ls;if(q(i))for(let u=0;u<i.length;u++){const h=Lt(i[u]);Cu(h)&&(o[h]=pe)}else if(i)for(const u in i){const h=Lt(u);if(Cu(h)){const d=i[u],g=o[h]=q(d)||Y(d)?{type:d}:Object.assign({},d);if(g){const v=Ru(Boolean,g.type),_=Ru(String,g.type);g[0]=v>-1,g[1]=_<0||v<_,(v>-1||se(g,"default"))&&a.push(h)}}}const l=[o,a];return fe(t)&&s.set(t,l),l}function Cu(t){return t[0]!=="$"}function Au(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function ku(t,e){return Au(t)===Au(e)}function Ru(t,e){return q(e)?e.findIndex(n=>ku(n,t)):Y(e)&&ku(e,t)?0:-1}const od=t=>t[0]==="_"||t==="$stable",Yc=t=>q(t)?t.map(Dt):[Dt(t)],hv=(t,e,n)=>{if(e._n)return e;const s=Xs((...r)=>Yc(e(...r)),n);return s._c=!1,s},ad=(t,e,n)=>{const s=t._ctx;for(const r in t){if(od(r))continue;const i=t[r];if(Y(i))e[r]=hv(r,i,s);else if(i!=null){const o=Yc(i);e[r]=()=>o}}},cd=(t,e)=>{const n=Yc(e);t.slots.default=()=>n},fv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ie(e),Vi(e,"_",n)):ad(e,t.slots={})}else t.slots={},e&&cd(t,e);Vi(t.slots,ko,1)},dv=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=pe;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Xe(r,e),!n&&a===1&&delete r._):(i=!e.$stable,ad(e,r)),o=e}else e&&(cd(t,e),o={default:1});if(i)for(const a in r)!od(a)&&!(a in o)&&delete r[a]};function ld(){return{app:null,config:{isNativeTag:jm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pv=0;function gv(t,e){return function(s,r=null){Y(s)||(s=Object.assign({},s)),r!=null&&!fe(r)&&(r=null);const i=ld(),o=new Set;let a=!1;const c=i.app={_uid:pv++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Lv,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&Y(l.install)?(o.add(l),l.install(c,...u)):Y(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=Ce(s,r);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Ro(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Ja(t,e,n,s,r=!1){if(q(t)){t.forEach((d,g)=>Ja(d,e&&(q(e)?e[g]:e),n,s,r));return}if(Ri(s)&&!r)return;const i=s.shapeFlag&4?Ro(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===pe?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Oe(l)?(u[l]=null,se(h,l)&&(h[l]=null)):He(l)&&(l.value=null)),Y(c))dn(c,a,12,[o,u]);else{const d=Oe(c),g=He(c);if(d||g){const v=()=>{if(t.f){const _=d?se(h,c)?h[c]:u[c]:c.value;r?q(_)&&Uc(_,i):q(_)?_.includes(i)||_.push(i):d?(u[c]=[i],se(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,se(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(v.id=-1,tt(v,n)):v()}}}const tt=By;function mv(t){return yv(t)}function yv(t,e){const n=Gm();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=_t,insertStaticContent:v}=t,_=(f,p,m,y=null,E=null,C=null,O=!1,S=null,A=!!p.dynamicChildren)=>{if(f===p)return;f&&!Ks(f,p)&&(y=D(f),et(f,E,C,!0),f=null),p.patchFlag===-2&&(A=!1,p.dynamicChildren=null);const{type:T,ref:V,shapeFlag:x}=p;switch(T){case Ao:R(f,p,m,y);break;case qn:k(f,p,m,y);break;case ma:f==null&&U(p,m,y,O);break;case Rt:Ct(f,p,m,y,E,C,O,S,A);break;default:x&1?de(f,p,m,y,E,C,O,S,A):x&6?ts(f,p,m,y,E,C,O,S,A):(x&64||x&128)&&T.process(f,p,m,y,E,C,O,S,A,ne)}V!=null&&E&&Ja(V,f&&f.ref,C,p||f,!p)},R=(f,p,m,y)=>{if(f==null)s(p.el=a(p.children),m,y);else{const E=p.el=f.el;p.children!==f.children&&l(E,p.children)}},k=(f,p,m,y)=>{f==null?s(p.el=c(p.children||""),m,y):p.el=f.el},U=(f,p,m,y)=>{[f.el,f.anchor]=v(f.children,p,m,y,f.el,f.anchor)},P=({el:f,anchor:p},m,y)=>{let E;for(;f&&f!==p;)E=d(f),s(f,m,y),f=E;s(p,m,y)},J=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=d(f),r(f),f=m;r(p)},de=(f,p,m,y,E,C,O,S,A)=>{O=O||p.type==="svg",f==null?_e(p,m,y,E,C,O,S,A):St(f,p,E,C,O,S,A)},_e=(f,p,m,y,E,C,O,S)=>{let A,T;const{type:V,props:x,shapeFlag:$,transition:W,dirs:Z}=f;if(A=f.el=o(f.type,C,x&&x.is,x),$&8?u(A,f.children):$&16&&Ze(f.children,A,null,y,E,C&&V!=="foreignObject",O,S),Z&&An(f,null,y,"created"),Qe(A,f,f.scopeId,O,y),x){for(const le in x)le!=="value"&&!Si(le)&&i(A,le,null,x[le],C,f.children,y,E,N);"value"in x&&i(A,"value",null,x.value),(T=x.onVnodeBeforeMount)&&kt(T,y,f)}Z&&An(f,null,y,"beforeMount");const he=(!E||E&&!E.pendingBranch)&&W&&!W.persisted;he&&W.beforeEnter(A),s(A,p,m),((T=x&&x.onVnodeMounted)||he||Z)&&tt(()=>{T&&kt(T,y,f),he&&W.enter(A),Z&&An(f,null,y,"mounted")},E)},Qe=(f,p,m,y,E)=>{if(m&&g(f,m),y)for(let C=0;C<y.length;C++)g(f,y[C]);if(E){let C=E.subTree;if(p===C){const O=E.vnode;Qe(f,O,O.scopeId,O.slotScopeIds,E.parent)}}},Ze=(f,p,m,y,E,C,O,S,A=0)=>{for(let T=A;T<f.length;T++){const V=f[T]=S?on(f[T]):Dt(f[T]);_(null,V,p,m,y,E,C,O,S)}},St=(f,p,m,y,E,C,O)=>{const S=p.el=f.el;let{patchFlag:A,dynamicChildren:T,dirs:V}=p;A|=f.patchFlag&16;const x=f.props||pe,$=p.props||pe;let W;m&&kn(m,!1),(W=$.onVnodeBeforeUpdate)&&kt(W,m,p,f),V&&An(p,f,m,"beforeUpdate"),m&&kn(m,!0);const Z=E&&p.type!=="foreignObject";if(T?lt(f.dynamicChildren,T,S,m,y,Z,C):O||ce(f,p,S,null,m,y,Z,C,!1),A>0){if(A&16)en(S,p,x,$,m,y,E);else if(A&2&&x.class!==$.class&&i(S,"class",null,$.class,E),A&4&&i(S,"style",x.style,$.style,E),A&8){const he=p.dynamicProps;for(let le=0;le<he.length;le++){const Ie=he[le],mt=x[Ie],ss=$[Ie];(ss!==mt||Ie==="value")&&i(S,Ie,mt,ss,E,f.children,m,y,N)}}A&1&&f.children!==p.children&&u(S,p.children)}else!O&&T==null&&en(S,p,x,$,m,y,E);((W=$.onVnodeUpdated)||V)&&tt(()=>{W&&kt(W,m,p,f),V&&An(p,f,m,"updated")},y)},lt=(f,p,m,y,E,C,O)=>{for(let S=0;S<p.length;S++){const A=f[S],T=p[S],V=A.el&&(A.type===Rt||!Ks(A,T)||A.shapeFlag&70)?h(A.el):m;_(A,T,V,null,y,E,C,O,!0)}},en=(f,p,m,y,E,C,O)=>{if(m!==y){if(m!==pe)for(const S in m)!Si(S)&&!(S in y)&&i(f,S,m[S],null,O,p.children,E,C,N);for(const S in y){if(Si(S))continue;const A=y[S],T=m[S];A!==T&&S!=="value"&&i(f,S,T,A,O,p.children,E,C,N)}"value"in y&&i(f,"value",m.value,y.value)}},Ct=(f,p,m,y,E,C,O,S,A)=>{const T=p.el=f?f.el:a(""),V=p.anchor=f?f.anchor:a("");let{patchFlag:x,dynamicChildren:$,slotScopeIds:W}=p;W&&(S=S?S.concat(W):W),f==null?(s(T,m,y),s(V,m,y),Ze(p.children,m,V,E,C,O,S,A)):x>0&&x&64&&$&&f.dynamicChildren?(lt(f.dynamicChildren,$,m,E,C,O,S),(p.key!=null||E&&p===E.subTree)&&ud(f,p,!0)):ce(f,p,m,V,E,C,O,S,A)},ts=(f,p,m,y,E,C,O,S,A)=>{p.slotScopeIds=S,f==null?p.shapeFlag&512?E.ctx.activate(p,m,y,O,A):Sn(p,m,y,E,C,O,A):qs(f,p,A)},Sn=(f,p,m,y,E,C,O)=>{const S=f.component=Av(f,y,E);if(Zf(f)&&(S.ctx.renderer=ne),kv(S),S.asyncDep){if(E&&E.registerDep(S,Ee),!f.el){const A=S.subTree=Ce(qn);k(null,A,p,m)}return}Ee(S,f,p,m,E,C,O)},qs=(f,p,m)=>{const y=p.component=f.component;if(Fy(f,p,m))if(y.asyncDep&&!y.asyncResolved){ue(y,p,m);return}else y.next=p,Ny(y.update),y.update();else p.el=f.el,y.vnode=p},Ee=(f,p,m,y,E,C,O)=>{const S=()=>{if(f.isMounted){let{next:V,bu:x,u:$,parent:W,vnode:Z}=f,he=V,le;kn(f,!1),V?(V.el=Z.el,ue(f,V,O)):V=Z,x&&Ci(x),(le=V.props&&V.props.onVnodeBeforeUpdate)&&kt(le,W,V,Z),kn(f,!0);const Ie=da(f),mt=f.subTree;f.subTree=Ie,_(mt,Ie,h(mt.el),D(mt),f,E,C),V.el=Ie.el,he===null&&Vy(f,Ie.el),$&&tt($,E),(le=V.props&&V.props.onVnodeUpdated)&&tt(()=>kt(le,W,V,Z),E)}else{let V;const{el:x,props:$}=p,{bm:W,m:Z,parent:he}=f,le=Ri(p);if(kn(f,!1),W&&Ci(W),!le&&(V=$&&$.onVnodeBeforeMount)&&kt(V,he,p),kn(f,!0),x&&X){const Ie=()=>{f.subTree=da(f),X(x,f.subTree,f,E,null)};le?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Ie()):Ie()}else{const Ie=f.subTree=da(f);_(null,Ie,m,y,f,E,C),p.el=Ie.el}if(Z&&tt(Z,E),!le&&(V=$&&$.onVnodeMounted)){const Ie=p;tt(()=>kt(V,he,Ie),E)}(p.shapeFlag&256||he&&Ri(he.vnode)&&he.vnode.shapeFlag&256)&&f.a&&tt(f.a,E),f.isMounted=!0,p=m=y=null}},A=f.effect=new $c(S,()=>Wc(T),f.scope),T=f.update=()=>A.run();T.id=f.uid,kn(f,!0),T()},ue=(f,p,m)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,uv(f,p.props,y,m),dv(f,p.children,m),Ps(),Eu(),xs()},ce=(f,p,m,y,E,C,O,S,A=!1)=>{const T=f&&f.children,V=f?f.shapeFlag:0,x=p.children,{patchFlag:$,shapeFlag:W}=p;if($>0){if($&128){Cn(T,x,m,y,E,C,O,S,A);return}else if($&256){pt(T,x,m,y,E,C,O,S,A);return}}W&8?(V&16&&N(T,E,C),x!==T&&u(m,x)):V&16?W&16?Cn(T,x,m,y,E,C,O,S,A):N(T,E,C,!0):(V&8&&u(m,""),W&16&&Ze(x,m,y,E,C,O,S,A))},pt=(f,p,m,y,E,C,O,S,A)=>{f=f||ls,p=p||ls;const T=f.length,V=p.length,x=Math.min(T,V);let $;for($=0;$<x;$++){const W=p[$]=A?on(p[$]):Dt(p[$]);_(f[$],W,m,null,E,C,O,S,A)}T>V?N(f,E,C,!0,!1,x):Ze(p,m,y,E,C,O,S,A,x)},Cn=(f,p,m,y,E,C,O,S,A)=>{let T=0;const V=p.length;let x=f.length-1,$=V-1;for(;T<=x&&T<=$;){const W=f[T],Z=p[T]=A?on(p[T]):Dt(p[T]);if(Ks(W,Z))_(W,Z,m,null,E,C,O,S,A);else break;T++}for(;T<=x&&T<=$;){const W=f[x],Z=p[$]=A?on(p[$]):Dt(p[$]);if(Ks(W,Z))_(W,Z,m,null,E,C,O,S,A);else break;x--,$--}if(T>x){if(T<=$){const W=$+1,Z=W<V?p[W].el:y;for(;T<=$;)_(null,p[T]=A?on(p[T]):Dt(p[T]),m,Z,E,C,O,S,A),T++}}else if(T>$)for(;T<=x;)et(f[T],E,C,!0),T++;else{const W=T,Z=T,he=new Map;for(T=Z;T<=$;T++){const ot=p[T]=A?on(p[T]):Dt(p[T]);ot.key!=null&&he.set(ot.key,T)}let le,Ie=0;const mt=$-Z+1;let ss=!1,lu=0;const zs=new Array(mt);for(T=0;T<mt;T++)zs[T]=0;for(T=W;T<=x;T++){const ot=f[T];if(Ie>=mt){et(ot,E,C,!0);continue}let At;if(ot.key!=null)At=he.get(ot.key);else for(le=Z;le<=$;le++)if(zs[le-Z]===0&&Ks(ot,p[le])){At=le;break}At===void 0?et(ot,E,C,!0):(zs[At-Z]=T+1,At>=lu?lu=At:ss=!0,_(ot,p[At],m,null,E,C,O,S,A),Ie++)}const uu=ss?vv(zs):ls;for(le=uu.length-1,T=mt-1;T>=0;T--){const ot=Z+T,At=p[ot],hu=ot+1<V?p[ot+1].el:y;zs[T]===0?_(null,At,m,hu,E,C,O,S,A):ss&&(le<0||T!==uu[le]?gt(At,m,hu,2):le--)}}},gt=(f,p,m,y,E=null)=>{const{el:C,type:O,transition:S,children:A,shapeFlag:T}=f;if(T&6){gt(f.component.subTree,p,m,y);return}if(T&128){f.suspense.move(p,m,y);return}if(T&64){O.move(f,p,m,ne);return}if(O===Rt){s(C,p,m);for(let x=0;x<A.length;x++)gt(A[x],p,m,y);s(f.anchor,p,m);return}if(O===ma){P(f,p,m);return}if(y!==2&&T&1&&S)if(y===0)S.beforeEnter(C),s(C,p,m),tt(()=>S.enter(C),E);else{const{leave:x,delayLeave:$,afterLeave:W}=S,Z=()=>s(C,p,m),he=()=>{x(C,()=>{Z(),W&&W()})};$?$(C,Z,he):he()}else s(C,p,m)},et=(f,p,m,y=!1,E=!1)=>{const{type:C,props:O,ref:S,children:A,dynamicChildren:T,shapeFlag:V,patchFlag:x,dirs:$}=f;if(S!=null&&Ja(S,null,m,f,!0),V&256){p.ctx.deactivate(f);return}const W=V&1&&$,Z=!Ri(f);let he;if(Z&&(he=O&&O.onVnodeBeforeUnmount)&&kt(he,p,f),V&6)w(f.component,m,y);else{if(V&128){f.suspense.unmount(m,y);return}W&&An(f,null,p,"beforeUnmount"),V&64?f.type.remove(f,p,m,E,ne,y):T&&(C!==Rt||x>0&&x&64)?N(T,p,m,!1,!0):(C===Rt&&x&384||!E&&V&16)&&N(A,p,m),y&&ns(f)}(Z&&(he=O&&O.onVnodeUnmounted)||W)&&tt(()=>{he&&kt(he,p,f),W&&An(f,null,p,"unmounted")},m)},ns=f=>{const{type:p,el:m,anchor:y,transition:E}=f;if(p===Rt){li(m,y);return}if(p===ma){J(f);return}const C=()=>{r(m),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(f.shapeFlag&1&&E&&!E.persisted){const{leave:O,delayLeave:S}=E,A=()=>O(m,C);S?S(f.el,C,A):A()}else C()},li=(f,p)=>{let m;for(;f!==p;)m=d(f),r(f),f=m;r(p)},w=(f,p,m)=>{const{bum:y,scope:E,update:C,subTree:O,um:S}=f;y&&Ci(y),E.stop(),C&&(C.active=!1,et(O,f,p,m)),S&&tt(S,p),tt(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},N=(f,p,m,y=!1,E=!1,C=0)=>{for(let O=C;O<f.length;O++)et(f[O],p,m,y,E)},D=f=>f.shapeFlag&6?D(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),F=(f,p,m)=>{f==null?p._vnode&&et(p._vnode,null,null,!0):_(p._vnode||null,f,p,null,null,null,m),Eu(),Gf(),p._vnode=f},ne={p:_,um:et,m:gt,r:ns,mt:Sn,mc:Ze,pc:ce,pbc:lt,n:D,o:t};let ve,X;return e&&([ve,X]=e(ne)),{render:F,hydrate:ve,createApp:gv(F,ve)}}function kn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ud(t,e,n=!1){const s=t.children,r=e.children;if(q(s)&&q(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=on(r[i]),a.el=o.el),n||ud(o,a)),a.type===Ao&&(a.el=o.el)}}function vv(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const wv=t=>t.__isTeleport,Rt=Symbol(void 0),Ao=Symbol(void 0),qn=Symbol(void 0),ma=Symbol(void 0),ar=[];let wt=null;function $t(t=!1){ar.push(wt=t?null:[])}function _v(){ar.pop(),wt=ar[ar.length-1]||null}let Er=1;function Du(t){Er+=t}function hd(t){return t.dynamicChildren=Er>0?wt||ls:null,_v(),Er>0&&wt&&wt.push(t),t}function nn(t,e,n,s,r,i){return hd(Ae(t,e,n,s,r,i,!0))}function Ev(t,e,n,s,r){return hd(Ce(t,e,n,s,r,!0))}function Xa(t){return t?t.__v_isVNode===!0:!1}function Ks(t,e){return t.type===e.type&&t.key===e.key}const ko="__vInternal",fd=({key:t})=>t??null,Di=({ref:t,ref_key:e,ref_for:n})=>t!=null?Oe(t)||He(t)||Y(t)?{i:ht,r:t,k:e,f:!!n}:t:null;function Ae(t,e=null,n=null,s=0,r=null,i=t===Rt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&fd(e),ref:e&&Di(e),scopeId:So,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ht};return a?(Jc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Oe(n)?8:16),Er>0&&!o&&wt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&wt.push(c),c}const Ce=Iv;function Iv(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===tv)&&(t=qn),Xa(t)){const a=ws(t,e,!0);return n&&Jc(a,n),Er>0&&!i&&wt&&(a.shapeFlag&6?wt[wt.indexOf(t)]=a:wt.push(a)),a.patchFlag|=-2,a}if(Pv(t)&&(t=t.__vccOpts),e){e=Tv(e);let{class:a,style:c}=e;a&&!Oe(a)&&(e.class=Mc(a)),fe(c)&&(Ff(c)&&!q(c)&&(c=Xe({},c)),e.style=xc(c))}const o=Oe(t)?1:$y(t)?128:wv(t)?64:fe(t)?4:Y(t)?2:0;return Ae(t,e,n,s,r,o,i,!0)}function Tv(t){return t?Ff(t)||ko in t?Xe({},t):t:null}function ws(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?bv(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&fd(a),ref:e&&e.ref?n&&r?q(r)?r.concat(Di(e)):[r,Di(e)]:Di(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Rt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ws(t.ssContent),ssFallback:t.ssFallback&&ws(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function nt(t=" ",e=0){return Ce(Ao,null,t,e)}function Ws(t="",e=!1){return e?($t(),Ev(qn,null,t)):Ce(qn,null,t)}function Dt(t){return t==null||typeof t=="boolean"?Ce(qn):q(t)?Ce(Rt,null,t.slice()):typeof t=="object"?on(t):Ce(Ao,null,String(t))}function on(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ws(t)}function Jc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(q(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Jc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(ko in e)?e._ctx=ht:r===3&&ht&&(ht.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Y(e)?(e={default:e,_ctx:ht},n=32):(e=String(e),s&64?(n=16,e=[nt(e)]):n=8);t.children=e,t.shapeFlag|=n}function bv(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Mc([e.class,s.class]));else if(r==="style")e.style=xc([e.style,s.style]);else if(vo(r)){const i=e[r],o=s[r];o&&i!==o&&!(q(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function kt(t,e,n,s=null){Et(t,e,7,[n,s])}const Sv=ld();let Cv=0;function Av(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Sv,i={uid:Cv++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Qm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:id(s,r),emitsOptions:Yf(s,r),emit:null,emitted:null,propsDefaults:pe,inheritAttrs:s.inheritAttrs,ctx:pe,data:pe,props:pe,attrs:pe,slots:pe,refs:pe,setupState:pe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=My.bind(null,i),t.ce&&t.ce(i),i}let Se=null;const _s=t=>{Se=t,t.scope.on()},$n=()=>{Se&&Se.scope.off(),Se=null};function dd(t){return t.vnode.shapeFlag&4}let Ir=!1;function kv(t,e=!1){Ir=e;const{props:n,children:s}=t.vnode,r=dd(t);lv(t,n,r,e),fv(t,s);const i=r?Rv(t,e):void 0;return Ir=!1,i}function Rv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Vf(new Proxy(t.ctx,sv));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Ov(t):null;_s(t),Ps();const i=dn(s,t,0,[t.props,r]);if(xs(),$n(),bf(i)){if(i.then($n,$n),e)return i.then(o=>{Ou(t,o,e)}).catch(o=>{To(o,t,0)});t.asyncDep=i}else Ou(t,i,e)}else pd(t,e)}function Ou(t,e,n){Y(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:fe(e)&&(t.setupState=Hf(e)),pd(t,n)}let Nu;function pd(t,e,n){const s=t.type;if(!t.render){if(!e&&Nu&&!s.render){const r=s.template||Qc(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Xe(Xe({isCustomElement:i,delimiters:a},o),c);s.render=Nu(r,l)}}t.render=s.render||_t}_s(t),Ps(),rv(t),xs(),$n()}function Dv(t){return new Proxy(t.attrs,{get(e,n){return it(t,"get","$attrs"),e[n]}})}function Ov(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Dv(t))},slots:t.slots,emit:t.emit,expose:e}}function Ro(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Hf(Vf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in or)return or[n](t)},has(e,n){return n in e||n in or}}))}function Nv(t,e=!0){return Y(t)?t.displayName||t.name:t.name||e&&t.__name}function Pv(t){return Y(t)&&"__vccOpts"in t}const ut=(t,e)=>Ry(t,e,Ir);function gd(t,e,n){const s=arguments.length;return s===2?fe(e)&&!q(e)?Xa(e)?Ce(t,null,[e]):Ce(t,e):Ce(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Xa(n)&&(n=[n]),Ce(t,e,n))}const xv=Symbol(""),Mv=()=>It(xv),Lv="3.2.47",Uv="http://www.w3.org/2000/svg",Nn=typeof document<"u"?document:null,Pu=Nn&&Nn.createElement("template"),Fv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Nn.createElementNS(Uv,t):Nn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Nn.createTextNode(t),createComment:t=>Nn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Nn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Pu.innerHTML=s?`<svg>${t}</svg>`:t;const a=Pu.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Vv(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function $v(t,e,n){const s=t.style,r=Oe(n);if(n&&!r){if(e&&!Oe(e))for(const i in e)n[i]==null&&Za(s,i,"");for(const i in n)Za(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const xu=/\s*!important$/;function Za(t,e,n){if(q(n))n.forEach(s=>Za(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Bv(t,e);xu.test(n)?t.setProperty(Ns(s),n.replace(xu,""),"important"):t[s]=n}}const Mu=["Webkit","Moz","ms"],ya={};function Bv(t,e){const n=ya[e];if(n)return n;let s=Lt(e);if(s!=="filter"&&s in t)return ya[e]=s;s=Eo(s);for(let r=0;r<Mu.length;r++){const i=Mu[r]+s;if(i in t)return ya[e]=i}return e}const Lu="http://www.w3.org/1999/xlink";function jv(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Lu,e.slice(6,e.length)):t.setAttributeNS(Lu,e,n);else{const i=Vm(e);n==null||i&&!If(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Hv(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=If(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Pn(t,e,n,s){t.addEventListener(e,n,s)}function qv(t,e,n,s){t.removeEventListener(e,n,s)}function zv(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Kv(e);if(s){const l=i[e]=Qv(s,r);Pn(t,a,l,c)}else o&&(qv(t,a,o,c),i[e]=void 0)}}const Uu=/(?:Once|Passive|Capture)$/;function Kv(t){let e;if(Uu.test(t)){e={};let s;for(;s=t.match(Uu);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ns(t.slice(2)),e]}let va=0;const Wv=Promise.resolve(),Gv=()=>va||(Wv.then(()=>va=0),va=Date.now());function Qv(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Et(Yv(s,n.value),e,5,[s])};return n.value=t,n.attached=Gv(),n}function Yv(t,e){if(q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Fu=/^on[a-z]/,Jv=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?Vv(t,s,r):e==="style"?$v(t,n,s):vo(e)?Lc(e)||zv(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Xv(t,e,s,r))?Hv(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),jv(t,e,s,r))};function Xv(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Fu.test(e)&&Y(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Fu.test(e)&&Oe(n)?!1:e in t}const qi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return q(e)?n=>Ci(e,n):e};function Zv(t){t.target.composing=!0}function Vu(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const mA={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=qi(r);const i=s||r.props&&r.props.type==="number";Pn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=$i(a)),t._assign(a)}),n&&Pn(t,"change",()=>{t.value=t.value.trim()}),e||(Pn(t,"compositionstart",Zv),Pn(t,"compositionend",Vu),Pn(t,"change",Vu))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=qi(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&$i(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},yA={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=wo(e);Pn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?$i(zi(o)):zi(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=qi(s)},mounted(t,{value:e}){$u(t,e)},beforeUpdate(t,e,n){t._assign=qi(n)},updated(t,{value:e}){$u(t,e)}};function $u(t,e){const n=t.multiple;if(!(n&&!q(e)&&!wo(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=zi(i);if(n)q(e)?i.selected=Bm(e,o)>-1:i.selected=e.has(o);else if(yo(zi(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function zi(t){return"_value"in t?t._value:t.value}const ew=Xe({patchProp:Jv},Fv);let Bu;function tw(){return Bu||(Bu=mv(ew))}const nw=(...t)=>{const e=tw().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=sw(s);if(!r)return;const i=e._component;!Y(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function sw(t){return Oe(t)?document.querySelector(t):t}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const is=typeof window<"u";function rw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ae=Object.assign;function wa(t,e){const n={};for(const s in e){const r=e[s];n[s]=Tt(r)?r.map(t):t(r)}return n}const cr=()=>{},Tt=Array.isArray,iw=/\/$/,ow=t=>t.replace(iw,"");function _a(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=uw(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function aw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ju(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function cw(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Es(e.matched[s],n.matched[r])&&md(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Es(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function md(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!lw(t[n],e[n]))return!1;return!0}function lw(t,e){return Tt(t)?Hu(t,e):Tt(e)?Hu(e,t):t===e}function Hu(t,e){return Tt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function uw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Tr;(function(t){t.pop="pop",t.push="push"})(Tr||(Tr={}));var lr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(lr||(lr={}));function hw(t){if(!t)if(is){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ow(t)}const fw=/^[^#]+#/;function dw(t,e){return t.replace(fw,"#")+e}function pw(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Do=()=>({left:window.pageXOffset,top:window.pageYOffset});function gw(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=pw(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function qu(t,e){return(history.state?history.state.position-e:-1)+t}const ec=new Map;function mw(t,e){ec.set(t,e)}function yw(t){const e=ec.get(t);return ec.delete(t),e}let vw=()=>location.protocol+"//"+location.host;function yd(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),ju(c,"")}return ju(n,t)+s+r}function ww(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const g=yd(t,location),v=n.value,_=e.value;let R=0;if(d){if(n.value=g,e.value=d,o&&o===v){o=null;return}R=_?d.position-_.position:0}else s(g);r.forEach(k=>{k(n.value,v,{delta:R,type:Tr.pop,direction:R?R>0?lr.forward:lr.back:lr.unknown})})};function c(){o=n.value}function l(d){r.push(d);const g=()=>{const v=r.indexOf(d);v>-1&&r.splice(v,1)};return i.push(g),g}function u(){const{history:d}=window;d.state&&d.replaceState(ae({},d.state,{scroll:Do()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function zu(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Do():null}}function _w(t){const{history:e,location:n}=window,s={value:yd(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:vw()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),r.value=l}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(c,l){const u=ae({},e.state,zu(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=ae({},r.value,e.state,{forward:c,scroll:Do()});i(u.current,u,!0);const h=ae({},zu(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function Ew(t){t=hw(t);const e=_w(t),n=ww(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ae({location:"",base:t,go:s,createHref:dw.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Iw(t){return typeof t=="string"||t&&typeof t=="object"}function vd(t){return typeof t=="string"||typeof t=="symbol"}const sn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},wd=Symbol("");var Ku;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ku||(Ku={}));function Is(t,e){return ae(new Error,{type:t,[wd]:!0},e)}function Vt(t,e){return t instanceof Error&&wd in t&&(e==null||!!(t.type&e))}const Wu="[^/]+?",Tw={sensitive:!1,strict:!1,start:!0,end:!0},bw=/[.+*?^${}()[\]/\\]/g;function Sw(t,e){const n=ae({},Tw,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const d=l[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(bw,"\\$&"),g+=40;else if(d.type===1){const{value:v,repeatable:_,optional:R,regexp:k}=d;i.push({name:v,repeatable:_,optional:R});const U=k||Wu;if(U!==Wu){g+=10;try{new RegExp(`(${U})`)}catch(J){throw new Error(`Invalid custom RegExp for param "${v}" (${U}): `+J.message)}}let P=_?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;h||(P=R&&l.length<2?`(?:/${P})`:"/"+P),R&&(P+="?"),r+=P,g+=20,R&&(g+=-8),_&&(g+=-20),U===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",v=i[d-1];h[v.name]=g&&v.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:v,repeatable:_,optional:R}=g,k=v in l?l[v]:"";if(Tt(k)&&!_)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const U=Tt(k)?k.join("/"):k;if(!U)if(R)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${v}"`);u+=U}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function Cw(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Aw(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=Cw(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Gu(s))return 1;if(Gu(r))return-1}return r.length-s.length}function Gu(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const kw={type:0,value:""},Rw=/[a-zA-Z0-9_]/;function Dw(t){if(!t)return[[]];if(t==="/")return[[kw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:Rw.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function Ow(t,e,n){const s=Sw(Dw(t.path),n),r=ae(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Nw(t,e){const n=[],s=new Map;e=Ju({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,d){const g=!d,v=Pw(u);v.aliasOf=d&&d.record;const _=Ju(e,u),R=[v];if("alias"in u){const P=typeof u.alias=="string"?[u.alias]:u.alias;for(const J of P)R.push(ae({},v,{components:d?d.record.components:v.components,path:J,aliasOf:d?d.record:v}))}let k,U;for(const P of R){const{path:J}=P;if(h&&J[0]!=="/"){const de=h.record.path,_e=de[de.length-1]==="/"?"":"/";P.path=h.record.path+(J&&_e+J)}if(k=Ow(P,h,_),d?d.alias.push(k):(U=U||k,U!==k&&U.alias.push(k),g&&u.name&&!Yu(k)&&o(u.name)),v.children){const de=v.children;for(let _e=0;_e<de.length;_e++)i(de[_e],k,d&&d.children[_e])}d=d||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&c(k)}return U?()=>{o(U)}:cr}function o(u){if(vd(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&Aw(u,n[h])>=0&&(u.record.path!==n[h].record.path||!_d(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Yu(u)&&s.set(u.record.name,u)}function l(u,h){let d,g={},v,_;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw Is(1,{location:u});_=d.record.name,g=ae(Qu(h.params,d.keys.filter(U=>!U.optional).map(U=>U.name)),u.params&&Qu(u.params,d.keys.map(U=>U.name))),v=d.stringify(g)}else if("path"in u)v=u.path,d=n.find(U=>U.re.test(v)),d&&(g=d.parse(v),_=d.record.name);else{if(d=h.name?s.get(h.name):n.find(U=>U.re.test(h.path)),!d)throw Is(1,{location:u,currentLocation:h});_=d.record.name,g=ae({},h.params,u.params),v=d.stringify(g)}const R=[];let k=d;for(;k;)R.unshift(k.record),k=k.parent;return{name:_,path:v,params:g,matched:R,meta:Mw(R)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Qu(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Pw(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:xw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function xw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Yu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Mw(t){return t.reduce((e,n)=>ae(e,n.meta),{})}function Ju(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function _d(t,e){return e.children.some(n=>n===t||_d(t,n))}const Ed=/#/g,Lw=/&/g,Uw=/\//g,Fw=/=/g,Vw=/\?/g,Id=/\+/g,$w=/%5B/g,Bw=/%5D/g,Td=/%5E/g,jw=/%60/g,bd=/%7B/g,Hw=/%7C/g,Sd=/%7D/g,qw=/%20/g;function Xc(t){return encodeURI(""+t).replace(Hw,"|").replace($w,"[").replace(Bw,"]")}function zw(t){return Xc(t).replace(bd,"{").replace(Sd,"}").replace(Td,"^")}function tc(t){return Xc(t).replace(Id,"%2B").replace(qw,"+").replace(Ed,"%23").replace(Lw,"%26").replace(jw,"`").replace(bd,"{").replace(Sd,"}").replace(Td,"^")}function Kw(t){return tc(t).replace(Fw,"%3D")}function Ww(t){return Xc(t).replace(Ed,"%23").replace(Vw,"%3F")}function Gw(t){return t==null?"":Ww(t).replace(Uw,"%2F")}function Ki(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Qw(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Id," "),o=i.indexOf("="),a=Ki(o<0?i:i.slice(0,o)),c=o<0?null:Ki(i.slice(o+1));if(a in e){let l=e[a];Tt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Xu(t){let e="";for(let n in t){const s=t[n];if(n=Kw(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Tt(s)?s.map(i=>i&&tc(i)):[s&&tc(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Yw(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Tt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const Jw=Symbol(""),Zu=Symbol(""),Oo=Symbol(""),Zc=Symbol(""),nc=Symbol("");function Gs(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function an(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Is(4,{from:n,to:e})):h instanceof Error?a(h):Iw(h)?a(Is(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Ea(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Xw(a)){const l=(a.__vccOpts||a)[e];l&&r.push(an(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=rw(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&an(d,n,s,i,o)()}))}}return r}function Xw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function eh(t){const e=It(Oo),n=It(Zc),s=ut(()=>e.resolve(fs(t.to))),r=ut(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Es.bind(null,u));if(d>-1)return d;const g=th(c[l-2]);return l>1&&th(u)===g&&h[h.length-1].path!==g?h.findIndex(Es.bind(null,c[l-2])):d}),i=ut(()=>r.value>-1&&n_(n.params,s.value.params)),o=ut(()=>r.value>-1&&r.value===n.matched.length-1&&md(n.params,s.value.params));function a(c={}){return t_(c)?e[fs(t.replace)?"replace":"push"](fs(t.to)).catch(cr):Promise.resolve()}return{route:s,href:ut(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const Zw=Gc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:eh,setup(t,{slots:e}){const n=$r(eh(t)),{options:s}=It(Oo),r=ut(()=>({[nh(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[nh(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:gd("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),e_=Zw;function t_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function n_(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Tt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function th(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const nh=(t,e,n)=>t??e??n,s_=Gc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=It(nc),r=ut(()=>t.route||s.value),i=It(Zu,0),o=ut(()=>{let l=fs(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=ut(()=>r.value.matched[o.value]);ki(Zu,ut(()=>o.value+1)),ki(Jw,a),ki(nc,r);const c=Ai();return ir(()=>[c.value,a.value,t.name],([l,u,h],[d,g,v])=>{u&&(u.instances[h]=l,g&&g!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!Es(u,g)||!d)&&(u.enterCallbacks[h]||[]).forEach(_=>_(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return sh(n.default,{Component:d,route:l});const g=h.props[u],v=g?g===!0?l.params:typeof g=="function"?g(l):g:null,R=gd(d,ae({},v,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return sh(n.default,{Component:R,route:l})||R}}});function sh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const r_=s_;function i_(t){const e=Nw(t.routes,t),n=t.parseQuery||Qw,s=t.stringifyQuery||Xu,r=t.history,i=Gs(),o=Gs(),a=Gs(),c=Sy(sn);let l=sn;is&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=wa.bind(null,w=>""+w),h=wa.bind(null,Gw),d=wa.bind(null,Ki);function g(w,N){let D,F;return vd(w)?(D=e.getRecordMatcher(w),F=N):F=w,e.addRoute(F,D)}function v(w){const N=e.getRecordMatcher(w);N&&e.removeRoute(N)}function _(){return e.getRoutes().map(w=>w.record)}function R(w){return!!e.getRecordMatcher(w)}function k(w,N){if(N=ae({},N||c.value),typeof w=="string"){const f=_a(n,w,N.path),p=e.resolve({path:f.path},N),m=r.createHref(f.fullPath);return ae(f,p,{params:d(p.params),hash:Ki(f.hash),redirectedFrom:void 0,href:m})}let D;if("path"in w)D=ae({},w,{path:_a(n,w.path,N.path).path});else{const f=ae({},w.params);for(const p in f)f[p]==null&&delete f[p];D=ae({},w,{params:h(w.params)}),N.params=h(N.params)}const F=e.resolve(D,N),ne=w.hash||"";F.params=u(d(F.params));const ve=aw(s,ae({},w,{hash:zw(ne),path:F.path})),X=r.createHref(ve);return ae({fullPath:ve,hash:ne,query:s===Xu?Yw(w.query):w.query||{}},F,{redirectedFrom:void 0,href:X})}function U(w){return typeof w=="string"?_a(n,w,c.value.path):ae({},w)}function P(w,N){if(l!==w)return Is(8,{from:N,to:w})}function J(w){return Qe(w)}function de(w){return J(ae(U(w),{replace:!0}))}function _e(w){const N=w.matched[w.matched.length-1];if(N&&N.redirect){const{redirect:D}=N;let F=typeof D=="function"?D(w):D;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=U(F):{path:F},F.params={}),ae({query:w.query,hash:w.hash,params:"path"in F?{}:w.params},F)}}function Qe(w,N){const D=l=k(w),F=c.value,ne=w.state,ve=w.force,X=w.replace===!0,f=_e(D);if(f)return Qe(ae(U(f),{state:typeof f=="object"?ae({},ne,f.state):ne,force:ve,replace:X}),N||D);const p=D;p.redirectedFrom=N;let m;return!ve&&cw(s,F,D)&&(m=Is(16,{to:p,from:F}),Cn(F,F,!0,!1)),(m?Promise.resolve(m):St(p,F)).catch(y=>Vt(y)?Vt(y,2)?y:pt(y):ue(y,p,F)).then(y=>{if(y){if(Vt(y,2))return Qe(ae({replace:X},U(y.to),{state:typeof y.to=="object"?ae({},ne,y.to.state):ne,force:ve}),N||p)}else y=en(p,F,!0,X,ne);return lt(p,F,y),y})}function Ze(w,N){const D=P(w,N);return D?Promise.reject(D):Promise.resolve()}function St(w,N){let D;const[F,ne,ve]=o_(w,N);D=Ea(F.reverse(),"beforeRouteLeave",w,N);for(const f of F)f.leaveGuards.forEach(p=>{D.push(an(p,w,N))});const X=Ze.bind(null,w,N);return D.push(X),rs(D).then(()=>{D=[];for(const f of i.list())D.push(an(f,w,N));return D.push(X),rs(D)}).then(()=>{D=Ea(ne,"beforeRouteUpdate",w,N);for(const f of ne)f.updateGuards.forEach(p=>{D.push(an(p,w,N))});return D.push(X),rs(D)}).then(()=>{D=[];for(const f of w.matched)if(f.beforeEnter&&!N.matched.includes(f))if(Tt(f.beforeEnter))for(const p of f.beforeEnter)D.push(an(p,w,N));else D.push(an(f.beforeEnter,w,N));return D.push(X),rs(D)}).then(()=>(w.matched.forEach(f=>f.enterCallbacks={}),D=Ea(ve,"beforeRouteEnter",w,N),D.push(X),rs(D))).then(()=>{D=[];for(const f of o.list())D.push(an(f,w,N));return D.push(X),rs(D)}).catch(f=>Vt(f,8)?f:Promise.reject(f))}function lt(w,N,D){for(const F of a.list())F(w,N,D)}function en(w,N,D,F,ne){const ve=P(w,N);if(ve)return ve;const X=N===sn,f=is?history.state:{};D&&(F||X?r.replace(w.fullPath,ae({scroll:X&&f&&f.scroll},ne)):r.push(w.fullPath,ne)),c.value=w,Cn(w,N,D,X),pt()}let Ct;function ts(){Ct||(Ct=r.listen((w,N,D)=>{if(!li.listening)return;const F=k(w),ne=_e(F);if(ne){Qe(ae(ne,{replace:!0}),F).catch(cr);return}l=F;const ve=c.value;is&&mw(qu(ve.fullPath,D.delta),Do()),St(F,ve).catch(X=>Vt(X,12)?X:Vt(X,2)?(Qe(X.to,F).then(f=>{Vt(f,20)&&!D.delta&&D.type===Tr.pop&&r.go(-1,!1)}).catch(cr),Promise.reject()):(D.delta&&r.go(-D.delta,!1),ue(X,F,ve))).then(X=>{X=X||en(F,ve,!1),X&&(D.delta&&!Vt(X,8)?r.go(-D.delta,!1):D.type===Tr.pop&&Vt(X,20)&&r.go(-1,!1)),lt(F,ve,X)}).catch(cr)}))}let Sn=Gs(),qs=Gs(),Ee;function ue(w,N,D){pt(w);const F=qs.list();return F.length?F.forEach(ne=>ne(w,N,D)):console.error(w),Promise.reject(w)}function ce(){return Ee&&c.value!==sn?Promise.resolve():new Promise((w,N)=>{Sn.add([w,N])})}function pt(w){return Ee||(Ee=!w,ts(),Sn.list().forEach(([N,D])=>w?D(w):N()),Sn.reset()),w}function Cn(w,N,D,F){const{scrollBehavior:ne}=t;if(!is||!ne)return Promise.resolve();const ve=!D&&yw(qu(w.fullPath,0))||(F||!D)&&history.state&&history.state.scroll||null;return Kf().then(()=>ne(w,N,ve)).then(X=>X&&gw(X)).catch(X=>ue(X,w,N))}const gt=w=>r.go(w);let et;const ns=new Set,li={currentRoute:c,listening:!0,addRoute:g,removeRoute:v,hasRoute:R,getRoutes:_,resolve:k,options:t,push:J,replace:de,go:gt,back:()=>gt(-1),forward:()=>gt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:qs.add,isReady:ce,install(w){const N=this;w.component("RouterLink",e_),w.component("RouterView",r_),w.config.globalProperties.$router=N,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>fs(c)}),is&&!et&&c.value===sn&&(et=!0,J(r.location).catch(ne=>{}));const D={};for(const ne in sn)D[ne]=ut(()=>c.value[ne]);w.provide(Oo,N),w.provide(Zc,$r(D)),w.provide(nc,c);const F=w.unmount;ns.add(w),w.unmount=function(){ns.delete(w),ns.size<1&&(l=sn,Ct&&Ct(),Ct=null,c.value=sn,et=!1,Ee=!1),F()}}};return li}function rs(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function o_(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Es(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Es(l,c))||r.push(c))}return[n,s,r]}function a_(){return It(Oo)}function c_(){return It(Zc)}/**
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
 */const Cd=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},l_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ad={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),s.push(n[u],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Cd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):l_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new u_;const d=i<<2|a>>4;if(s.push(d),l!==64){const g=a<<4&240|l>>2;if(s.push(g),h!==64){const v=l<<6&192|h;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class u_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const h_=function(t){const e=Cd(t);return Ad.encodeByteArray(e,!0)},Wi=function(t){return h_(t).replace(/\./g,"")},kd=function(t){try{return Ad.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function f_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const d_=()=>f_().__FIREBASE_DEFAULTS__,p_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},g_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&kd(t[1]);return e&&JSON.parse(e)},el=()=>{try{return d_()||p_()||g_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Rd=t=>{var e,n;return(n=(e=el())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},m_=t=>{const e=Rd(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},y_=()=>{var t;return(t=el())===null||t===void 0?void 0:t.config},Dd=t=>{var e;return(e=el())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class v_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function w_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Wi(JSON.stringify(n)),Wi(JSON.stringify(o)),a].join(".")}/**
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
 */function Ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function __(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ke())}function E_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function I_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function T_(){const t=Ke();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function b_(){try{return typeof indexedDB=="object"}catch{return!1}}function S_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const C_="FirebaseError";class Zt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=C_,Object.setPrototypeOf(this,Zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Br.prototype.create)}}class Br{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?A_(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Zt(r,a,s)}}function A_(t,e){return t.replace(k_,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const k_=/\{\$([^}]+)}/g;function R_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Gi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(rh(i)&&rh(o)){if(!Gi(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function rh(t){return t!==null&&typeof t=="object"}/**
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
 */function jr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Zs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function er(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function D_(t,e){const n=new O_(t,e);return n.subscribe.bind(n)}class O_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");N_(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Ia),r.error===void 0&&(r.error=Ia),r.complete===void 0&&(r.complete=Ia);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function N_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ia(){}/**
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
 */function We(t){return t&&t._delegate?t._delegate:t}class zn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Dn="[DEFAULT]";/**
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
 */class P_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new v_;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(M_(e))try{this.getOrInitializeService({instanceIdentifier:Dn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Dn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dn){return this.instances.has(e)}getOptions(e=Dn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:x_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Dn){return this.component?this.component.multipleInstances?e:Dn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function x_(t){return t===Dn?void 0:t}function M_(t){return t.instantiationMode==="EAGER"}/**
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
 */class L_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new P_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const U_={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},F_=re.INFO,V_={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},$_=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=V_[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class tl{constructor(e){this.name=e,this._logLevel=F_,this._logHandler=$_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?U_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const B_=(t,e)=>e.some(n=>t instanceof n);let ih,oh;function j_(){return ih||(ih=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function H_(){return oh||(oh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Od=new WeakMap,sc=new WeakMap,Nd=new WeakMap,Ta=new WeakMap,nl=new WeakMap;function q_(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(pn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Od.set(n,t)}).catch(()=>{}),nl.set(e,t),e}function z_(t){if(sc.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});sc.set(t,e)}let rc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return sc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Nd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function K_(t){rc=t(rc)}function W_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ba(this),e,...n);return Nd.set(s,e.sort?e.sort():[e]),pn(s)}:H_().includes(t)?function(...e){return t.apply(ba(this),e),pn(Od.get(this))}:function(...e){return pn(t.apply(ba(this),e))}}function G_(t){return typeof t=="function"?W_(t):(t instanceof IDBTransaction&&z_(t),B_(t,j_())?new Proxy(t,rc):t)}function pn(t){if(t instanceof IDBRequest)return q_(t);if(Ta.has(t))return Ta.get(t);const e=G_(t);return e!==t&&(Ta.set(t,e),nl.set(e,t)),e}const ba=t=>nl.get(t);function Q_(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=pn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(pn(o.result),c.oldVersion,c.newVersion,pn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Y_=["get","getKey","getAll","getAllKeys","count"],J_=["put","add","delete","clear"],Sa=new Map;function ah(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Sa.get(e))return Sa.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=J_.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Y_.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Sa.set(e,i),i}K_(t=>({...t,get:(e,n,s)=>ah(e,n)||t.get(e,n,s),has:(e,n)=>!!ah(e,n)||t.has(e,n)}));/**
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
 */class X_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Z_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Z_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ic="@firebase/app",ch="0.9.7";/**
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
 */const Kn=new tl("@firebase/app"),eE="@firebase/app-compat",tE="@firebase/analytics-compat",nE="@firebase/analytics",sE="@firebase/app-check-compat",rE="@firebase/app-check",iE="@firebase/auth",oE="@firebase/auth-compat",aE="@firebase/database",cE="@firebase/database-compat",lE="@firebase/functions",uE="@firebase/functions-compat",hE="@firebase/installations",fE="@firebase/installations-compat",dE="@firebase/messaging",pE="@firebase/messaging-compat",gE="@firebase/performance",mE="@firebase/performance-compat",yE="@firebase/remote-config",vE="@firebase/remote-config-compat",wE="@firebase/storage",_E="@firebase/storage-compat",EE="@firebase/firestore",IE="@firebase/firestore-compat",TE="firebase",bE="9.19.1";/**
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
 */const oc="[DEFAULT]",SE={[ic]:"fire-core",[eE]:"fire-core-compat",[nE]:"fire-analytics",[tE]:"fire-analytics-compat",[rE]:"fire-app-check",[sE]:"fire-app-check-compat",[iE]:"fire-auth",[oE]:"fire-auth-compat",[aE]:"fire-rtdb",[cE]:"fire-rtdb-compat",[lE]:"fire-fn",[uE]:"fire-fn-compat",[hE]:"fire-iid",[fE]:"fire-iid-compat",[dE]:"fire-fcm",[pE]:"fire-fcm-compat",[gE]:"fire-perf",[mE]:"fire-perf-compat",[yE]:"fire-rc",[vE]:"fire-rc-compat",[wE]:"fire-gcs",[_E]:"fire-gcs-compat",[EE]:"fire-fst",[IE]:"fire-fst-compat","fire-js":"fire-js",[TE]:"fire-js-all"};/**
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
 */const Qi=new Map,ac=new Map;function CE(t,e){try{t.container.addComponent(e)}catch(n){Kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ts(t){const e=t.name;if(ac.has(e))return Kn.debug(`There were multiple attempts to register component ${e}.`),!1;ac.set(e,t);for(const n of Qi.values())CE(n,t);return!0}function sl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const AE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},gn=new Br("app","Firebase",AE);/**
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
 */class kE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gn.create("app-deleted",{appName:this._name})}}/**
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
 */const Hr=bE;function Pd(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:oc,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw gn.create("bad-app-name",{appName:String(r)});if(n||(n=y_()),!n)throw gn.create("no-options");const i=Qi.get(r);if(i){if(Gi(n,i.options)&&Gi(s,i.config))return i;throw gn.create("duplicate-app",{appName:r})}const o=new L_(r);for(const c of ac.values())o.addComponent(c);const a=new kE(n,s,o);return Qi.set(r,a),a}function xd(t=oc){const e=Qi.get(t);if(!e&&t===oc)return Pd();if(!e)throw gn.create("no-app",{appName:t});return e}function mn(t,e,n){var s;let r=(s=SE[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kn.warn(a.join(" "));return}Ts(new zn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const RE="firebase-heartbeat-database",DE=1,br="firebase-heartbeat-store";let Ca=null;function Md(){return Ca||(Ca=Q_(RE,DE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(br)}}}).catch(t=>{throw gn.create("idb-open",{originalErrorMessage:t.message})})),Ca}async function OE(t){try{return(await Md()).transaction(br).objectStore(br).get(Ld(t))}catch(e){if(e instanceof Zt)Kn.warn(e.message);else{const n=gn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Kn.warn(n.message)}}}async function lh(t,e){try{const s=(await Md()).transaction(br,"readwrite");return await s.objectStore(br).put(e,Ld(t)),s.done}catch(n){if(n instanceof Zt)Kn.warn(n.message);else{const s=gn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Kn.warn(s.message)}}}function Ld(t){return`${t.name}!${t.options.appId}`}/**
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
 */const NE=1024,PE=30*24*60*60*1e3;class xE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new LE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=uh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=PE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=uh(),{heartbeatsToSend:n,unsentEntries:s}=ME(this._heartbeatsCache.heartbeats),r=Wi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function uh(){return new Date().toISOString().substring(0,10)}function ME(t,e=NE){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),hh(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),hh(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class LE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return b_()?S_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await OE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return lh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return lh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function hh(t){return Wi(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function UE(t){Ts(new zn("platform-logger",e=>new X_(e),"PRIVATE")),Ts(new zn("heartbeat",e=>new xE(e),"PRIVATE")),mn(ic,ch,t),mn(ic,ch,"esm2017"),mn("fire-js","")}UE("");function rl(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Ud(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const FE=Ud,Fd=new Br("auth","Firebase",Ud());/**
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
 */const fh=new tl("@firebase/auth");function Oi(t,...e){fh.logLevel<=re.ERROR&&fh.error(`Auth (${Hr}): ${t}`,...e)}/**
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
 */function dt(t,...e){throw il(t,...e)}function Pt(t,...e){return il(t,...e)}function Vd(t,e,n){const s=Object.assign(Object.assign({},FE()),{[e]:n});return new Br("auth","Firebase",s).create(e,{appName:t.name})}function VE(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&dt(t,"argument-error"),Vd(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function il(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Fd.create(t,...e)}function H(t,e,...n){if(!t)throw il(e,...n)}function jt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Oi(e),new Error(e)}function Wt(t,e){t||jt(e)}/**
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
 */const dh=new Map;function Ht(t){Wt(t instanceof Function,"Expected a class definition");let e=dh.get(t);return e?(Wt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,dh.set(t,e),e)}/**
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
 */function $E(t,e){const n=sl(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Gi(i,e??{}))return r;dt(r,"already-initialized")}return n.initialize({options:e})}function BE(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Ht);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function cc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function jE(){return ph()==="http:"||ph()==="https:"}function ph(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function HE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jE()||E_()||"connection"in navigator)?navigator.onLine:!0}function qE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class qr{constructor(e,n){this.shortDelay=e,this.longDelay=n,Wt(n>e,"Short delay should be less than long delay!"),this.isMobile=__()||I_()}get(){return HE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ol(t,e){Wt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class $d{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const zE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const KE=new qr(3e4,6e4);function Ms(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ls(t,e,n,s,r={}){return Bd(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=jr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),$d.fetch()(jd(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Bd(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},zE),e);try{const r=new WE(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw mi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw mi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw mi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw mi(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Vd(t,u,l);dt(t,u)}}catch(r){if(r instanceof Zt)throw r;dt(t,"network-request-failed",{message:String(r)})}}async function zr(t,e,n,s,r={}){const i=await Ls(t,e,n,s,r);return"mfaPendingCredential"in i&&dt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function jd(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?ol(t.config,r):`${t.config.apiScheme}://${r}`}class WE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Pt(this.auth,"network-request-failed")),KE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function mi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Pt(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function GE(t,e){return Ls(t,"POST","/v1/accounts:delete",e)}async function QE(t,e){return Ls(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ur(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function YE(t,e=!1){const n=We(t),s=await n.getIdToken(e),r=al(s);H(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:ur(Aa(r.auth_time)),issuedAtTime:ur(Aa(r.iat)),expirationTime:ur(Aa(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Aa(t){return Number(t)*1e3}function al(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Oi("JWT malformed, contained fewer than 3 sections"),null;try{const r=kd(n);return r?JSON.parse(r):(Oi("Failed to decode base64 JWT payload"),null)}catch(r){return Oi("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function JE(t){const e=al(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Sr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Zt&&XE(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function XE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ZE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Hd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ur(this.lastLoginAt),this.creationTime=ur(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Yi(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Sr(t,QE(n,{idToken:s}));H(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?n0(i.providerUserInfo):[],a=t0(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Hd(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function e0(t){const e=We(t);await Yi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function t0(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function n0(t){return t.map(e=>{var{providerId:n}=e,s=rl(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function s0(t,e){const n=await Bd(t,{},async()=>{const s=jr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=jd(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",$d.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Cr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):JE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await s0(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Cr;return s&&(H(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(H(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Cr,this.toJSON())}_performRefresh(){return jt("not implemented")}}/**
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
 */function rn(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Bn{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=rl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ZE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Hd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Sr(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return YE(this,e)}reload(){return e0(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Bn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Yi(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Sr(this,GE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,U=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:P,emailVerified:J,isAnonymous:de,providerData:_e,stsTokenManager:Qe}=n;H(P&&Qe,e,"internal-error");const Ze=Cr.fromJSON(this.name,Qe);H(typeof P=="string",e,"internal-error"),rn(h,e.name),rn(d,e.name),H(typeof J=="boolean",e,"internal-error"),H(typeof de=="boolean",e,"internal-error"),rn(g,e.name),rn(v,e.name),rn(_,e.name),rn(R,e.name),rn(k,e.name),rn(U,e.name);const St=new Bn({uid:P,auth:e,email:d,emailVerified:J,displayName:h,isAnonymous:de,photoURL:v,phoneNumber:g,tenantId:_,stsTokenManager:Ze,createdAt:k,lastLoginAt:U});return _e&&Array.isArray(_e)&&(St.providerData=_e.map(lt=>Object.assign({},lt))),R&&(St._redirectEventId=R),St}static async _fromIdTokenResponse(e,n,s=!1){const r=new Cr;r.updateFromServerResponse(n);const i=new Bn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Yi(i),i}}/**
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
 */class qd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}qd.type="NONE";const gh=qd;/**
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
 */function Ni(t,e,n){return`firebase:${t}:${e}:${n}`}class ps{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Ni(this.userKey,r.apiKey,i),this.fullPersistenceKey=Ni("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Bn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ps(Ht(gh),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||Ht(gh);const o=Ni(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Bn._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ps(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new ps(i,e,s))}}/**
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
 */function mh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qd(e))return"Blackberry";if(Yd(e))return"Webos";if(cl(e))return"Safari";if((e.includes("chrome/")||Kd(e))&&!e.includes("edge/"))return"Chrome";if(Gd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function zd(t=Ke()){return/firefox\//i.test(t)}function cl(t=Ke()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Kd(t=Ke()){return/crios\//i.test(t)}function Wd(t=Ke()){return/iemobile/i.test(t)}function Gd(t=Ke()){return/android/i.test(t)}function Qd(t=Ke()){return/blackberry/i.test(t)}function Yd(t=Ke()){return/webos/i.test(t)}function No(t=Ke()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function r0(t=Ke()){var e;return No(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function i0(){return T_()&&document.documentMode===10}function Jd(t=Ke()){return No(t)||Gd(t)||Yd(t)||Qd(t)||/windows phone/i.test(t)||Wd(t)}function o0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Xd(t,e=[]){let n;switch(t){case"Browser":n=mh(Ke());break;case"Worker":n=`${mh(Ke())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Hr}/${s}`}/**
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
 */class a0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class c0{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yh(this),this.idTokenSubscription=new yh(this),this.beforeStateQueue=new a0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fd,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ht(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await ps.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Yi(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?We(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ht(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Br("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ht(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await ps.create(this,[Ht(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return H(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Us(t){return We(t)}class yh{constructor(e){this.auth=e,this.observer=null,this.addObserver=D_(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function l0(t,e,n){const s=Us(t);H(s._canInitEmulator,s,"emulator-config-failed"),H(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Zd(e),{host:o,port:a}=u0(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||h0()}function Zd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function u0(t){const e=Zd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:vh(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:vh(o)}}}function vh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function h0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ll{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return jt("not implemented")}_getIdTokenResponse(e){return jt("not implemented")}_linkToIdToken(e,n){return jt("not implemented")}_getReauthenticationResolver(e){return jt("not implemented")}}async function f0(t,e){return Ls(t,"POST","/v1/accounts:update",e)}/**
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
 */async function d0(t,e){return zr(t,"POST","/v1/accounts:signInWithPassword",Ms(t,e))}async function p0(t,e){return Ls(t,"POST","/v1/accounts:sendOobCode",Ms(t,e))}async function g0(t,e){return p0(t,e)}/**
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
 */async function m0(t,e){return zr(t,"POST","/v1/accounts:signInWithEmailLink",Ms(t,e))}async function y0(t,e){return zr(t,"POST","/v1/accounts:signInWithEmailLink",Ms(t,e))}/**
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
 */class Ar extends ll{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Ar(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Ar(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return d0(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return m0(e,{email:this._email,oobCode:this._password});default:dt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return f0(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return y0(e,{idToken:n,email:this._email,oobCode:this._password});default:dt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function gs(t,e){return zr(t,"POST","/v1/accounts:signInWithIdp",Ms(t,e))}/**
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
 */const v0="http://localhost";class Wn extends ll{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Wn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):dt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=rl(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Wn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return gs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,gs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,gs(e,n)}buildRequest(){const e={requestUri:v0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=jr(n)}return e}}/**
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
 */function w0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _0(t){const e=Zs(er(t)).link,n=e?Zs(er(e)).deep_link_id:null,s=Zs(er(t)).deep_link_id;return(s?Zs(er(s)).link:null)||s||n||e||t}class ul{constructor(e){var n,s,r,i,o,a;const c=Zs(er(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=w0((r=c.mode)!==null&&r!==void 0?r:null);H(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=_0(e);try{return new ul(n)}catch{return null}}}/**
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
 */class Fs{constructor(){this.providerId=Fs.PROVIDER_ID}static credential(e,n){return Ar._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=ul.parseLink(n);return H(s,"argument-error"),Ar._fromEmailAndCode(e,s.code,s.tenantId)}}Fs.PROVIDER_ID="password";Fs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class hl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Kr extends hl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class cn extends Kr{constructor(){super("facebook.com")}static credential(e){return Wn._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cn.credential(e.oauthAccessToken)}catch{return null}}}cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";cn.PROVIDER_ID="facebook.com";/**
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
 */class ln extends Kr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Wn._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return ln.credential(n,s)}catch{return null}}}ln.GOOGLE_SIGN_IN_METHOD="google.com";ln.PROVIDER_ID="google.com";/**
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
 */class un extends Kr{constructor(){super("github.com")}static credential(e){return Wn._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return un.credential(e.oauthAccessToken)}catch{return null}}}un.GITHUB_SIGN_IN_METHOD="github.com";un.PROVIDER_ID="github.com";/**
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
 */class hn extends Kr{constructor(){super("twitter.com")}static credential(e,n){return Wn._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return hn.credential(n,s)}catch{return null}}}hn.TWITTER_SIGN_IN_METHOD="twitter.com";hn.PROVIDER_ID="twitter.com";/**
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
 */async function E0(t,e){return zr(t,"POST","/v1/accounts:signUp",Ms(t,e))}/**
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
 */class Gn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Bn._fromIdTokenResponse(e,s,r),o=wh(s);return new Gn({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=wh(s);return new Gn({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function wh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ji extends Zt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Ji.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Ji(e,n,s,r)}}function ep(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ji._fromErrorAndOperation(t,i,e,s):i})}async function I0(t,e,n=!1){const s=await Sr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gn._forOperation(t,"link",s)}/**
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
 */async function T0(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await Sr(t,ep(s,r,e,t),n);H(i.idToken,s,"internal-error");const o=al(i.idToken);H(o,s,"internal-error");const{sub:a}=o;return H(t.uid===a,s,"user-mismatch"),Gn._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&dt(s,"user-mismatch"),i}}/**
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
 */async function tp(t,e,n=!1){const s="signIn",r=await ep(t,s,e),i=await Gn._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function b0(t,e){return tp(Us(t),e)}/**
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
 */function S0(t,e,n){var s;H(((s=n.url)===null||s===void 0?void 0:s.length)>0,t,"invalid-continue-uri"),H(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(H(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(H(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}async function vA(t,e,n){const s=Us(t),r=await E0(s,{returnSecureToken:!0,email:e,password:n}),i=await Gn._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function wA(t,e,n){return b0(We(t),Fs.credential(e,n))}async function _A(t,e){const n=We(t),r={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&S0(n.auth,r,e);const{email:i}=await g0(n.auth,r);i!==t.email&&await t.reload()}function C0(t,e,n,s){return We(t).onIdTokenChanged(e,n,s)}function A0(t,e,n){return We(t).beforeAuthStateChanged(e,n)}const Xi="__sak";/**
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
 */class np{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xi,"1"),this.storage.removeItem(Xi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function k0(){const t=Ke();return cl(t)||No(t)}const R0=1e3,D0=10;class sp extends np{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=k0()&&o0(),this.fallbackToPolling=Jd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);i0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,D0):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},R0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}sp.type="LOCAL";const O0=sp;/**
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
 */class rp extends np{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}rp.type="SESSION";const ip=rp;/**
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
 */function N0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Po{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Po(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await N0(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Po.receivers=[];/**
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
 */function fl(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class P0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=fl("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function xt(){return window}function x0(t){xt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function op(){return typeof xt().WorkerGlobalScope<"u"&&typeof xt().importScripts=="function"}async function M0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function L0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function U0(){return op()?self:null}/**
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
 */const ap="firebaseLocalStorageDb",F0=1,Zi="firebaseLocalStorage",cp="fbase_key";class Wr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xo(t,e){return t.transaction([Zi],e?"readwrite":"readonly").objectStore(Zi)}function V0(){const t=indexedDB.deleteDatabase(ap);return new Wr(t).toPromise()}function lc(){const t=indexedDB.open(ap,F0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Zi,{keyPath:cp})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Zi)?e(s):(s.close(),await V0(),e(await lc()))})})}async function _h(t,e,n){const s=xo(t,!0).put({[cp]:e,value:n});return new Wr(s).toPromise()}async function $0(t,e){const n=xo(t,!1).get(e),s=await new Wr(n).toPromise();return s===void 0?null:s.value}function Eh(t,e){const n=xo(t,!0).delete(e);return new Wr(n).toPromise()}const B0=800,j0=3;class lp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await lc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>j0)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return op()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Po._getInstance(U0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await M0(),!this.activeServiceWorker)return;this.sender=new P0(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||L0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await lc();return await _h(e,Xi,"1"),await Eh(e,Xi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>_h(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>$0(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Eh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=xo(r,!1).getAll();return new Wr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),B0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}lp.type="LOCAL";const H0=lp;/**
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
 */function q0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function z0(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Pt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",q0().appendChild(s)})}function K0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new qr(3e4,6e4);/**
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
 */function up(t,e){return e?Ht(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class dl extends ll{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return gs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return gs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function W0(t){return tp(t.auth,new dl(t),t.bypassAuthState)}function G0(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),T0(n,new dl(t),t.bypassAuthState)}async function Q0(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),I0(n,new dl(t),t.bypassAuthState)}/**
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
 */class hp{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return W0;case"linkViaPopup":case"linkViaRedirect":return Q0;case"reauthViaPopup":case"reauthViaRedirect":return G0;default:dt(this.auth,"internal-error")}}resolve(e){Wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Y0=new qr(2e3,1e4);async function EA(t,e,n){const s=Us(t);VE(t,e,hl);const r=up(s,n);return new Mn(s,"signInViaPopup",e,r).executeNotNull()}class Mn extends hp{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Mn.currentPopupAction&&Mn.currentPopupAction.cancel(),Mn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Wt(this.filter.length===1,"Popup operations only handle one event");const e=fl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Y0.get())};e()}}Mn.currentPopupAction=null;/**
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
 */const J0="pendingRedirect",Pi=new Map;class X0 extends hp{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Pi.get(this.auth._key());if(!e){try{const s=await Z0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Pi.set(this.auth._key(),e)}return this.bypassAuthState||Pi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Z0(t,e){const n=nI(e),s=tI(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function eI(t,e){Pi.set(t._key(),e)}function tI(t){return Ht(t._redirectPersistence)}function nI(t){return Ni(J0,t.config.apiKey,t.name)}async function sI(t,e,n=!1){const s=Us(t),r=up(s,e),o=await new X0(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const rI=10*60*1e3;class iI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!oI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!fp(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Pt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ih(e))}saveEventToCache(e){this.cachedEventUids.add(Ih(e)),this.lastProcessedEventTime=Date.now()}}function Ih(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function fp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function oI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fp(t);default:return!1}}/**
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
 */async function aI(t,e={}){return Ls(t,"GET","/v1/projects",e)}/**
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
 */const cI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lI=/^https?/;async function uI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await aI(t);for(const n of e)try{if(hI(n))return}catch{}dt(t,"unauthorized-domain")}function hI(t){const e=cc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!lI.test(n))return!1;if(cI.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const fI=new qr(3e4,6e4);function Th(){const t=xt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function dI(t){return new Promise((e,n)=>{var s,r,i;function o(){Th(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Th(),n(Pt(t,"network-request-failed"))},timeout:fI.get()})}if(!((r=(s=xt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=xt().gapi)===null||i===void 0)&&i.load)o();else{const a=K0("iframefcb");return xt()[a]=()=>{gapi.load?o():n(Pt(t,"network-request-failed"))},z0(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw xi=null,e})}let xi=null;function pI(t){return xi=xi||dI(t),xi}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const gI=new qr(5e3,15e3),mI="__/auth/iframe",yI="emulator/auth/iframe",vI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _I(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ol(e,yI):`https://${t.config.authDomain}/${mI}`,s={apiKey:e.apiKey,appName:t.name,v:Hr},r=wI.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${jr(s).slice(1)}`}async function EI(t){const e=await pI(t),n=xt().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:_I(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vI,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Pt(t,"network-request-failed"),a=xt().setTimeout(()=>{i(o)},gI.get());function c(){xt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const II={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},TI=500,bI=600,SI="_blank",CI="http://localhost";class bh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function AI(t,e,n,s=TI,r=bI){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},II),{width:s.toString(),height:r.toString(),top:i,left:o}),l=Ke().toLowerCase();n&&(a=Kd(l)?SI:n),zd(l)&&(e=e||CI,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[g,v])=>`${d}${g}=${v},`,"");if(r0(l)&&a!=="_self")return kI(e||"",a),new bh(null);const h=window.open(e||"",a,u);H(h,t,"popup-blocked");try{h.focus()}catch{}return new bh(h)}function kI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const RI="__/auth/handler",DI="emulator/auth/handler";function Sh(t,e,n,s,r,i){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Hr,eventId:r};if(e instanceof hl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",R_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Kr){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${OI(t)}?${jr(a).slice(1)}`}function OI({config:t}){return t.emulator?ol(t,DI):`https://${t.authDomain}/${RI}`}/**
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
 */const ka="webStorageSupport";class NI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ip,this._completeRedirectFn=sI,this._overrideRedirectResult=eI}async _openPopup(e,n,s,r){var i;Wt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Sh(e,n,s,cc(),r);return AI(e,o,fl())}async _openRedirect(e,n,s,r){return await this._originValidation(e),x0(Sh(e,n,s,cc(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Wt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await EI(e),s=new iI(e);return n.register("authEvent",r=>(H(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ka,{type:ka},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[ka];o!==void 0&&n(!!o),dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=uI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Jd()||cl()||No()}}const PI=NI;var Ch="@firebase/auth",Ah="0.22.0";/**
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
 */class xI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function MI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function LI(t){Ts(new zn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{H(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),H(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xd(t)},u=new c0(a,c,l);return BE(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ts(new zn("auth-internal",e=>{const n=Us(e.getProvider("auth").getImmediate());return(s=>new xI(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),mn(Ch,Ah,MI(t)),mn(Ch,Ah,"esm2017")}/**
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
 */const UI=5*60,FI=Dd("authIdTokenMaxAge")||UI;let kh=null;const VI=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>FI)return;const r=n==null?void 0:n.token;kh!==r&&(kh=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function $I(t=xd()){const e=sl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=$E(t,{popupRedirectResolver:PI,persistence:[H0,O0,ip]}),s=Dd("authTokenSyncURL");if(s){const i=VI(s);A0(n,i,()=>i(n.currentUser)),C0(n,o=>i(o))}const r=Rd("auth");return r&&l0(n,`http://${r}`),n}LI("Browser");var BI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,pl=pl||{},K=BI||self;function eo(){}function Mo(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Gr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function jI(t){return Object.prototype.hasOwnProperty.call(t,Ra)&&t[Ra]||(t[Ra]=++HI)}var Ra="closure_uid_"+(1e9*Math.random()>>>0),HI=0;function qI(t,e,n){return t.call.apply(t.bind,arguments)}function zI(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function qe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?qe=qI:qe=zI,qe.apply(null,arguments)}function yi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ue(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function In(){this.s=this.s,this.o=this.o}var KI=0;In.prototype.s=!1;In.prototype.na=function(){!this.s&&(this.s=!0,this.M(),KI!=0)&&jI(this)};In.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const dp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function gl(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Rh(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Mo(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function ze(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ze.prototype.h=function(){this.defaultPrevented=!0};var WI=function(){if(!K.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{K.addEventListener("test",eo,e),K.removeEventListener("test",eo,e)}catch{}return t}();function to(t){return/^[\s\xa0]*$/.test(t)}var Dh=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Da(t,e){return t<e?-1:t>e?1:0}function Lo(){var t=K.navigator;return t&&(t=t.userAgent)?t:""}function Nt(t){return Lo().indexOf(t)!=-1}function ml(t){return ml[" "](t),t}ml[" "]=eo;function GI(t){var e=JI;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var QI=Nt("Opera"),bs=Nt("Trident")||Nt("MSIE"),pp=Nt("Edge"),uc=pp||bs,gp=Nt("Gecko")&&!(Lo().toLowerCase().indexOf("webkit")!=-1&&!Nt("Edge"))&&!(Nt("Trident")||Nt("MSIE"))&&!Nt("Edge"),YI=Lo().toLowerCase().indexOf("webkit")!=-1&&!Nt("Edge");function mp(){var t=K.document;return t?t.documentMode:void 0}var no;e:{var Oa="",Na=function(){var t=Lo();if(gp)return/rv:([^\);]+)(\)|;)/.exec(t);if(pp)return/Edge\/([\d\.]+)/.exec(t);if(bs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(YI)return/WebKit\/(\S+)/.exec(t);if(QI)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Na&&(Oa=Na?Na[1]:""),bs){var Pa=mp();if(Pa!=null&&Pa>parseFloat(Oa)){no=String(Pa);break e}}no=Oa}var JI={};function XI(){return GI(function(){let t=0;const e=Dh(String(no)).split("."),n=Dh("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Da(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Da(r[2].length==0,i[2].length==0)||Da(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var hc;if(K.document&&bs){var Oh=mp();hc=Oh||parseInt(no,10)||void 0}else hc=void 0;var ZI=hc;function kr(t,e){if(ze.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(gp){e:{try{ml(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:eT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&kr.X.h.call(this)}}Ue(kr,ze);var eT={2:"touch",3:"pen",4:"mouse"};kr.prototype.h=function(){kr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Qr="closure_listenable_"+(1e6*Math.random()|0),tT=0;function nT(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++tT,this.ba=this.ea=!1}function Uo(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function yl(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function yp(t){const e={};for(const n in t)e[n]=t[n];return e}const Nh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vp(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Nh.length;i++)n=Nh[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Fo(t){this.src=t,this.g={},this.h=0}Fo.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=dc(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new nT(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function fc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=dp(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Uo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function dc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var vl="closure_lm_"+(1e6*Math.random()|0),xa={};function wp(t,e,n,s,r){if(s&&s.once)return Ep(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)wp(t,e[i],n,s,r);return null}return n=El(n),t&&t[Qr]?t.N(e,n,Gr(s)?!!s.capture:!!s,r):_p(t,e,n,!1,s,r)}function _p(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Gr(r)?!!r.capture:!!r,a=_l(t);if(a||(t[vl]=a=new Fo(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=sT(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)WI||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Tp(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function sT(){function t(n){return e.call(t.src,t.listener,n)}const e=rT;return t}function Ep(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ep(t,e[i],n,s,r);return null}return n=El(n),t&&t[Qr]?t.O(e,n,Gr(s)?!!s.capture:!!s,r):_p(t,e,n,!0,s,r)}function Ip(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Ip(t,e[i],n,s,r);else s=Gr(s)?!!s.capture:!!s,n=El(n),t&&t[Qr]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=dc(i,n,s,r),-1<n&&(Uo(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=_l(t))&&(e=t.g[e.toString()],t=-1,e&&(t=dc(e,n,s,r)),(n=-1<t?e[t]:null)&&wl(n))}function wl(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Qr])fc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Tp(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=_l(e))?(fc(n,t),n.h==0&&(n.src=null,e[vl]=null)):Uo(t)}}}function Tp(t){return t in xa?xa[t]:xa[t]="on"+t}function rT(t,e){if(t.ba)t=!0;else{e=new kr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&wl(t),t=n.call(s,e)}return t}function _l(t){return t=t[vl],t instanceof Fo?t:null}var Ma="__closure_events_fn_"+(1e9*Math.random()>>>0);function El(t){return typeof t=="function"?t:(t[Ma]||(t[Ma]=function(e){return t.handleEvent(e)}),t[Ma])}function xe(){In.call(this),this.i=new Fo(this),this.P=this,this.I=null}Ue(xe,In);xe.prototype[Qr]=!0;xe.prototype.removeEventListener=function(t,e,n,s){Ip(this,t,e,n,s)};function Le(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new ze(e,t);else if(e instanceof ze)e.target=e.target||t;else{var r=e;e=new ze(s,t),vp(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=vi(o,s,!0,e)&&r}if(o=e.g=t,r=vi(o,s,!0,e)&&r,r=vi(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=vi(o,s,!1,e)&&r}xe.prototype.M=function(){if(xe.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Uo(n[s]);delete t.g[e],t.h--}}this.I=null};xe.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};xe.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function vi(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&fc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Il=K.JSON.stringify;function iT(){var t=Cp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class oT{constructor(){this.h=this.g=null}add(e,n){const s=bp.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var bp=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new aT,t=>t.reset());class aT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function cT(t){K.setTimeout(()=>{throw t},0)}function Sp(t,e){pc||lT(),gc||(pc(),gc=!0),Cp.add(t,e)}var pc;function lT(){var t=K.Promise.resolve(void 0);pc=function(){t.then(uT)}}var gc=!1,Cp=new oT;function uT(){for(var t;t=iT();){try{t.h.call(t.g)}catch(n){cT(n)}var e=bp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}gc=!1}function Vo(t,e){xe.call(this),this.h=t||1,this.g=e||K,this.j=qe(this.lb,this),this.l=Date.now()}Ue(Vo,xe);M=Vo.prototype;M.ca=!1;M.R=null;M.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Le(this,"tick"),this.ca&&(Tl(this),this.start()))}};M.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Tl(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}M.M=function(){Vo.X.M.call(this),Tl(this),delete this.g};function bl(t,e,n){if(typeof t=="function")n&&(t=qe(t,n));else if(t&&typeof t.handleEvent=="function")t=qe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:K.setTimeout(t,e||0)}function Ap(t){t.g=bl(()=>{t.g=null,t.i&&(t.i=!1,Ap(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class hT extends In{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ap(this)}M(){super.M(),this.g&&(K.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Rr(t){In.call(this),this.h=t,this.g={}}Ue(Rr,In);var Ph=[];function kp(t,e,n,s){Array.isArray(n)||(n&&(Ph[0]=n.toString()),n=Ph);for(var r=0;r<n.length;r++){var i=wp(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Rp(t){yl(t.g,function(e,n){this.g.hasOwnProperty(n)&&wl(e)},t),t.g={}}Rr.prototype.M=function(){Rr.X.M.call(this),Rp(this)};Rr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function $o(){this.g=!0}$o.prototype.Aa=function(){this.g=!1};function fT(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function dT(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function cs(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+gT(t,n)+(s?" "+s:"")})}function pT(t,e){t.info(function(){return"TIMEOUT: "+e})}$o.prototype.info=function(){};function gT(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Il(n)}catch{return e}}var Jn={},xh=null;function Bo(){return xh=xh||new xe}Jn.Pa="serverreachability";function Dp(t){ze.call(this,Jn.Pa,t)}Ue(Dp,ze);function Dr(t){const e=Bo();Le(e,new Dp(e))}Jn.STAT_EVENT="statevent";function Op(t,e){ze.call(this,Jn.STAT_EVENT,t),this.stat=e}Ue(Op,ze);function Je(t){const e=Bo();Le(e,new Op(e,t))}Jn.Qa="timingevent";function Np(t,e){ze.call(this,Jn.Qa,t),this.size=e}Ue(Np,ze);function Yr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return K.setTimeout(function(){t()},e)}var jo={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Pp={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Sl(){}Sl.prototype.h=null;function Mh(t){return t.h||(t.h=t.i())}function xp(){}var Jr={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Cl(){ze.call(this,"d")}Ue(Cl,ze);function Al(){ze.call(this,"c")}Ue(Al,ze);var mc;function Ho(){}Ue(Ho,Sl);Ho.prototype.g=function(){return new XMLHttpRequest};Ho.prototype.i=function(){return{}};mc=new Ho;function Xr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Rr(this),this.O=mT,t=uc?125:void 0,this.T=new Vo(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Mp}function Mp(){this.i=null,this.g="",this.h=!1}var mT=45e3,yc={},so={};M=Xr.prototype;M.setTimeout=function(t){this.O=t};function vc(t,e,n){t.K=1,t.v=zo(Gt(e)),t.s=n,t.P=!0,Lp(t,null)}function Lp(t,e){t.F=Date.now(),Zr(t),t.A=Gt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),qp(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Mp,t.g=hg(t.l,n?e:null,!t.s),0<t.N&&(t.L=new hT(qe(t.La,t,t.g),t.N)),kp(t.S,t.g,"readystatechange",t.ib),e=t.H?yp(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Dr(),fT(t.j,t.u,t.A,t.m,t.U,t.s)}M.ib=function(t){t=t.target;const e=this.L;e&&qt(t)==3?e.l():this.La(t)};M.La=function(t){try{if(t==this.g)e:{const u=qt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||uc||this.g&&(this.h.h||this.g.fa()||Vh(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Dr(3):Dr(2)),qo(this);var n=this.g.aa();this.Y=n;t:if(Up(this)){var s=Vh(this.g);t="";var r=s.length,i=qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ln(this),hr(this);var o="";break t}this.h.i=new K.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,dT(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!to(a)){var l=a;break t}}l=null}if(n=l)cs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,wc(this,n);else{this.i=!1,this.o=3,Je(12),Ln(this),hr(this);break e}}this.P?(Fp(this,u,o),uc&&this.i&&u==3&&(kp(this.S,this.T,"tick",this.hb),this.T.start())):(cs(this.j,this.m,o,null),wc(this,o)),u==4&&Ln(this),this.i&&!this.I&&(u==4?ag(this.l,this):(this.i=!1,Zr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Je(12)):(this.o=0,Je(13)),Ln(this),hr(this)}}}catch{}finally{}};function Up(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Fp(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=yT(t,n),r==so){e==4&&(t.o=4,Je(14),s=!1),cs(t.j,t.m,null,"[Incomplete Response]");break}else if(r==yc){t.o=4,Je(15),cs(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else cs(t.j,t.m,r,null),wc(t,r);Up(t)&&r!=so&&r!=yc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Je(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),xl(e),e.K=!0,Je(11))):(cs(t.j,t.m,n,"[Invalid Chunked Response]"),Ln(t),hr(t))}M.hb=function(){if(this.g){var t=qt(this.g),e=this.g.fa();this.C<e.length&&(qo(this),Fp(this,t,e),this.i&&t!=4&&Zr(this))}};function yT(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?so:(n=Number(e.substring(n,s)),isNaN(n)?yc:(s+=1,s+n>e.length?so:(e=e.substr(s,n),t.C=s+n,e)))}M.cancel=function(){this.I=!0,Ln(this)};function Zr(t){t.V=Date.now()+t.O,Vp(t,t.O)}function Vp(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Yr(qe(t.gb,t),e)}function qo(t){t.B&&(K.clearTimeout(t.B),t.B=null)}M.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(pT(this.j,this.A),this.K!=2&&(Dr(),Je(17)),Ln(this),this.o=2,hr(this)):Vp(this,this.V-t)};function hr(t){t.l.G==0||t.I||ag(t.l,t)}function Ln(t){qo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Tl(t.T),Rp(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function wc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||_c(n.h,t))){if(!t.J&&_c(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)oo(n),Go(n);else break e;Pl(n),Je(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Yr(qe(n.cb,n),6e3));if(1>=Wp(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Un(n,11)}else if((t.J||n.g==t)&&oo(n),!to(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const v=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var i=s.h;i.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(kl(i,i.h),i.h=null))}if(s.D){const _=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(s.za=_,me(s.F,s.D,_))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=ug(s,s.H?s.ka:null,s.V),o.J){Gp(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(qo(a),Zr(a)),s.g=o}else ig(s);0<n.i.length&&Qo(n)}else l[0]!="stop"&&l[0]!="close"||Un(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Un(n,7):Nl(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Dr(4)}catch{}}function vT(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Mo(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function wT(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Mo(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function $p(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Mo(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=wT(t),s=vT(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Bp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _T(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function jn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof jn){this.h=e!==void 0?e:t.h,ro(this,t.j),this.s=t.s,this.g=t.g,io(this,t.m),this.l=t.l,e=t.i;var n=new Or;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Lh(this,n),this.o=t.o}else t&&(n=String(t).match(Bp))?(this.h=!!e,ro(this,n[1]||"",!0),this.s=tr(n[2]||""),this.g=tr(n[3]||"",!0),io(this,n[4]),this.l=tr(n[5]||"",!0),Lh(this,n[6]||"",!0),this.o=tr(n[7]||"")):(this.h=!!e,this.i=new Or(null,this.h))}jn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(nr(e,Uh,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(nr(e,Uh,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(nr(n,n.charAt(0)=="/"?TT:IT,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",nr(n,ST)),t.join("")};function Gt(t){return new jn(t)}function ro(t,e,n){t.j=n?tr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function io(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Lh(t,e,n){e instanceof Or?(t.i=e,CT(t.i,t.h)):(n||(e=nr(e,bT)),t.i=new Or(e,t.h))}function me(t,e,n){t.i.set(e,n)}function zo(t){return me(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function tr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function nr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,ET),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ET(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Uh=/[#\/\?@]/g,IT=/[#\?:]/g,TT=/[#\?]/g,bT=/[#\?@]/g,ST=/#/g;function Or(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Tn(t){t.g||(t.g=new Map,t.h=0,t.i&&_T(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=Or.prototype;M.add=function(t,e){Tn(this),this.i=null,t=Vs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function jp(t,e){Tn(t),e=Vs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Hp(t,e){return Tn(t),e=Vs(t,e),t.g.has(e)}M.forEach=function(t,e){Tn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};M.oa=function(){Tn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};M.W=function(t){Tn(this);let e=[];if(typeof t=="string")Hp(this,t)&&(e=e.concat(this.g.get(Vs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};M.set=function(t,e){return Tn(this),this.i=null,t=Vs(this,t),Hp(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function qp(t,e,n){jp(t,e),0<n.length&&(t.i=null,t.g.set(Vs(t,e),gl(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Vs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function CT(t,e){e&&!t.j&&(Tn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(jp(this,s),qp(this,r,n))},t)),t.j=e}var AT=class{constructor(e,n){this.h=e,this.g=n}};function zp(t){this.l=t||kT,K.PerformanceNavigationTiming?(t=K.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(K.g&&K.g.Ga&&K.g.Ga()&&K.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var kT=10;function Kp(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Wp(t){return t.h?1:t.g?t.g.size:0}function _c(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function kl(t,e){t.g?t.g.add(e):t.h=e}function Gp(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}zp.prototype.cancel=function(){if(this.i=Qp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Qp(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return gl(t.i)}function Rl(){}Rl.prototype.stringify=function(t){return K.JSON.stringify(t,void 0)};Rl.prototype.parse=function(t){return K.JSON.parse(t,void 0)};function RT(){this.g=new Rl}function DT(t,e,n){const s=n||"";try{$p(t,function(r,i){let o=r;Gr(r)&&(o=Il(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function OT(t,e){const n=new $o;if(K.Image){const s=new Image;s.onload=yi(wi,n,s,"TestLoadImage: loaded",!0,e),s.onerror=yi(wi,n,s,"TestLoadImage: error",!1,e),s.onabort=yi(wi,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=yi(wi,n,s,"TestLoadImage: timeout",!1,e),K.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function wi(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function ei(t){this.l=t.ac||null,this.j=t.jb||!1}Ue(ei,Sl);ei.prototype.g=function(){return new Ko(this.l,this.j)};ei.prototype.i=function(t){return function(){return t}}({});function Ko(t,e){xe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Dl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ue(Ko,xe);var Dl=0;M=Ko.prototype;M.open=function(t,e){if(this.readyState!=Dl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Nr(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||K).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ti(this)),this.readyState=Dl};M.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Nr(this)),this.g&&(this.readyState=3,Nr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof K.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Yp(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Yp(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}M.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ti(this):Nr(this),this.readyState==3&&Yp(this)}};M.Va=function(t){this.g&&(this.response=this.responseText=t,ti(this))};M.Ua=function(t){this.g&&(this.response=t,ti(this))};M.ga=function(){this.g&&ti(this)};function ti(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Nr(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Nr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ko.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var NT=K.JSON.parse;function we(t){xe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Jp,this.K=this.L=!1}Ue(we,xe);var Jp="",PT=/^https?$/i,xT=["POST","PUT"];M=we.prototype;M.Ka=function(t){this.L=t};M.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():mc.g(),this.C=this.u?Mh(this.u):Mh(mc),this.g.onreadystatechange=qe(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Fh(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=K.FormData&&t instanceof K.FormData,!(0<=dp(xT,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{eg(this),0<this.B&&((this.K=MT(this.g))?(this.g.timeout=this.B,this.g.ontimeout=qe(this.qa,this)):this.A=bl(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Fh(this,i)}};function MT(t){return bs&&XI()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}M.qa=function(){typeof pl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Le(this,"timeout"),this.abort(8))};function Fh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Xp(t),Wo(t)}function Xp(t){t.D||(t.D=!0,Le(t,"complete"),Le(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Le(this,"complete"),Le(this,"abort"),Wo(this))};M.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Wo(this,!0)),we.X.M.call(this)};M.Ha=function(){this.s||(this.F||this.v||this.l?Zp(this):this.fb())};M.fb=function(){Zp(this)};function Zp(t){if(t.h&&typeof pl<"u"&&(!t.C[1]||qt(t)!=4||t.aa()!=2)){if(t.v&&qt(t)==4)bl(t.Ha,0,t);else if(Le(t,"readystatechange"),qt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Bp)[1]||null;if(!r&&K.self&&K.self.location){var i=K.self.location.protocol;r=i.substr(0,i.length-1)}s=!PT.test(r?r.toLowerCase():"")}n=s}if(n)Le(t,"complete"),Le(t,"success");else{t.m=6;try{var o=2<qt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Xp(t)}}finally{Wo(t)}}}}function Wo(t,e){if(t.g){eg(t);const n=t.g,s=t.C[0]?eo:null;t.g=null,t.C=null,e||Le(t,"ready");try{n.onreadystatechange=s}catch{}}}function eg(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(K.clearTimeout(t.A),t.A=null)}function qt(t){return t.g?t.g.readyState:0}M.aa=function(){try{return 2<qt(this)?this.g.status:-1}catch{return-1}};M.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),NT(e)}};function Vh(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Jp:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}M.Ea=function(){return this.m};M.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function tg(t){let e="";return yl(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Ol(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=tg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):me(t,e,n))}function Qs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ng(t){this.Ca=0,this.i=[],this.j=new $o,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Qs("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Qs("baseRetryDelayMs",5e3,t),this.bb=Qs("retryDelaySeedMs",1e4,t),this.$a=Qs("forwardChannelMaxRetries",2,t),this.ta=Qs("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new zp(t&&t.concurrentRequestLimit),this.Fa=new RT,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}M=ng.prototype;M.ma=8;M.G=1;function Nl(t){if(sg(t),t.G==3){var e=t.U++,n=Gt(t.F);me(n,"SID",t.I),me(n,"RID",e),me(n,"TYPE","terminate"),ni(t,n),e=new Xr(t,t.j,e,void 0),e.K=2,e.v=zo(Gt(n)),n=!1,K.navigator&&K.navigator.sendBeacon&&(n=K.navigator.sendBeacon(e.v.toString(),"")),!n&&K.Image&&(new Image().src=e.v,n=!0),n||(e.g=hg(e.l,null),e.g.da(e.v)),e.F=Date.now(),Zr(e)}lg(t)}function Go(t){t.g&&(xl(t),t.g.cancel(),t.g=null)}function sg(t){Go(t),t.u&&(K.clearTimeout(t.u),t.u=null),oo(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&K.clearTimeout(t.m),t.m=null)}function Qo(t){Kp(t.h)||t.m||(t.m=!0,Sp(t.Ja,t),t.C=0)}function LT(t,e){return Wp(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Yr(qe(t.Ja,t,e),cg(t,t.C)),t.C++,!0)}M.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Xr(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=yp(i),vp(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=rg(this,r,e),n=Gt(this.F),me(n,"RID",t),me(n,"CVER",22),this.D&&me(n,"X-HTTP-Session-Id",this.D),ni(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(tg(i)))+"&"+e:this.o&&Ol(n,this.o,i)),kl(this.h,r),this.Ya&&me(n,"TYPE","init"),this.O?(me(n,"$req",e),me(n,"SID","null"),r.Z=!0,vc(r,n,null)):vc(r,n,e),this.G=2}}else this.G==3&&(t?$h(this,t):this.i.length==0||Kp(this.h)||$h(this))};function $h(t,e){var n;e?n=e.m:n=t.U++;const s=Gt(t.F);me(s,"SID",t.I),me(s,"RID",n),me(s,"AID",t.T),ni(t,s),t.o&&t.s&&Ol(s,t.o,t.s),n=new Xr(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=rg(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),kl(t.h,n),vc(n,s,e)}function ni(t,e){t.ia&&yl(t.ia,function(n,s){me(e,s,n)}),t.l&&$p({},function(n,s){me(e,s,n)})}function rg(t,e,n){n=Math.min(t.i.length,n);var s=t.l?qe(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{DT(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function ig(t){t.g||t.u||(t.Z=1,Sp(t.Ia,t),t.A=0)}function Pl(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Yr(qe(t.Ia,t),cg(t,t.A)),t.A++,!0)}M.Ia=function(){if(this.u=null,og(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Yr(qe(this.eb,this),t)}};M.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Je(10),Go(this),og(this))};function xl(t){t.B!=null&&(K.clearTimeout(t.B),t.B=null)}function og(t){t.g=new Xr(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Gt(t.sa);me(e,"RID","rpc"),me(e,"SID",t.I),me(e,"CI",t.L?"0":"1"),me(e,"AID",t.T),me(e,"TYPE","xmlhttp"),ni(t,e),t.o&&t.s&&Ol(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=zo(Gt(e)),n.s=null,n.P=!0,Lp(n,t)}M.cb=function(){this.v!=null&&(this.v=null,Go(this),Pl(this),Je(19))};function oo(t){t.v!=null&&(K.clearTimeout(t.v),t.v=null)}function ag(t,e){var n=null;if(t.g==e){oo(t),xl(t),t.g=null;var s=2}else if(_c(t.h,e))n=e.D,Gp(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Bo(),Le(s,new Np(s,n)),Qo(t)}else ig(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&LT(t,e)||s==2&&Pl(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Un(t,5);break;case 4:Un(t,10);break;case 3:Un(t,6);break;default:Un(t,2)}}}function cg(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Un(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=qe(t.kb,t);n||(n=new jn("//www.google.com/images/cleardot.gif"),K.location&&K.location.protocol=="http"||ro(n,"https"),zo(n)),OT(n.toString(),s)}else Je(2);t.G=0,t.l&&t.l.va(e),lg(t),sg(t)}M.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Je(2)):(this.j.info("Failed to ping google.com"),Je(1))};function lg(t){if(t.G=0,t.la=[],t.l){const e=Qp(t.h);(e.length!=0||t.i.length!=0)&&(Rh(t.la,e),Rh(t.la,t.i),t.h.i.length=0,gl(t.i),t.i.length=0),t.l.ua()}}function ug(t,e,n){var s=n instanceof jn?Gt(n):new jn(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),io(s,s.m);else{var r=K.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new jn(null,void 0);s&&ro(i,s),e&&(i.g=e),r&&io(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&me(s,n,e),me(s,"VER",t.ma),ni(t,s),s}function hg(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new we(new ei({jb:!0})):new we(t.ra),e.Ka(t.H),e}function fg(){}M=fg.prototype;M.xa=function(){};M.wa=function(){};M.va=function(){};M.ua=function(){};M.Ra=function(){};function ao(){if(bs&&!(10<=Number(ZI)))throw Error("Environmental error: no available transport.")}ao.prototype.g=function(t,e){return new ct(t,e)};function ct(t,e){xe.call(this),this.g=new ng(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!to(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!to(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new $s(this)}Ue(ct,xe);ct.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Je(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=ug(t,null,t.V),Qo(t)};ct.prototype.close=function(){Nl(this.g)};ct.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Il(t),t=n);e.i.push(new AT(e.ab++,t)),e.G==3&&Qo(e)};ct.prototype.M=function(){this.g.l=null,delete this.j,Nl(this.g),delete this.g,ct.X.M.call(this)};function dg(t){Cl.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ue(dg,Cl);function pg(){Al.call(this),this.status=1}Ue(pg,Al);function $s(t){this.g=t}Ue($s,fg);$s.prototype.xa=function(){Le(this.g,"a")};$s.prototype.wa=function(t){Le(this.g,new dg(t))};$s.prototype.va=function(t){Le(this.g,new pg)};$s.prototype.ua=function(){Le(this.g,"b")};ao.prototype.createWebChannel=ao.prototype.g;ct.prototype.send=ct.prototype.u;ct.prototype.open=ct.prototype.m;ct.prototype.close=ct.prototype.close;jo.NO_ERROR=0;jo.TIMEOUT=8;jo.HTTP_ERROR=6;Pp.COMPLETE="complete";xp.EventType=Jr;Jr.OPEN="a";Jr.CLOSE="b";Jr.ERROR="c";Jr.MESSAGE="d";xe.prototype.listen=xe.prototype.N;we.prototype.listenOnce=we.prototype.O;we.prototype.getLastError=we.prototype.Oa;we.prototype.getLastErrorCode=we.prototype.Ea;we.prototype.getStatus=we.prototype.aa;we.prototype.getResponseJson=we.prototype.Sa;we.prototype.getResponseText=we.prototype.fa;we.prototype.send=we.prototype.da;we.prototype.setWithCredentials=we.prototype.Ka;var UT=function(){return new ao},FT=function(){return Bo()},La=jo,VT=Pp,$T=Jn,Bh={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},BT=ei,_i=xp,jT=we;const jh="@firebase/firestore";/**
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
 */class Ve{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ve.UNAUTHENTICATED=new Ve(null),Ve.GOOGLE_CREDENTIALS=new Ve("google-credentials-uid"),Ve.FIRST_PARTY=new Ve("first-party-uid"),Ve.MOCK_USER=new Ve("mock-user");/**
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
 */let Bs="9.19.0";/**
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
 */const Qn=new tl("@firebase/firestore");function Hh(){return Qn.logLevel}function L(t,...e){if(Qn.logLevel<=re.DEBUG){const n=e.map(Ml);Qn.debug(`Firestore (${Bs}): ${t}`,...n)}}function Qt(t,...e){if(Qn.logLevel<=re.ERROR){const n=e.map(Ml);Qn.error(`Firestore (${Bs}): ${t}`,...n)}}function co(t,...e){if(Qn.logLevel<=re.WARN){const n=e.map(Ml);Qn.warn(`Firestore (${Bs}): ${t}`,...n)}}function Ml(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function z(t="Unexpected state"){const e=`FIRESTORE (${Bs}) INTERNAL ASSERTION FAILED: `+t;throw Qt(e),new Error(e)}function ge(t,e){t||z()}function Q(t,e){return t}/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Zt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class zt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class gg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class HT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ve.UNAUTHENTICATED))}shutdown(){}}class qT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class zT{constructor(e){this.t=e,this.currentUser=Ve.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new zt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new zt,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new zt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ge(typeof s.accessToken=="string"),new gg(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ge(e===null||typeof e=="string"),new Ve(e)}}class KT{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=Ve.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class WT{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new KT(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Ve.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class GT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class QT{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=i=>{i.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,L("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ge(typeof n.token=="string"),this.T=n.token,new GT(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function YT(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class mg{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=YT(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function oe(t,e){return t<e?-1:t>e?1:0}function Ss(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class Re{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Re.fromMillis(Date.now())}static fromDate(e){return Re.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Re(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class G{constructor(e){this.timestamp=e}static fromTimestamp(e){return new G(e)}static min(){return new G(new Re(0,0))}static max(){return new G(new Re(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Pr{constructor(e,n,s){n===void 0?n=0:n>e.length&&z(),s===void 0?s=e.length-n:s>e.length-n&&z(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Pr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Pr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ye extends Pr{construct(e,n,s){return new ye(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new B(I.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new ye(n)}static emptyPath(){return new ye([])}}const JT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class je extends Pr{construct(e,n,s){return new je(e,n,s)}static isValidIdentifier(e){return JT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new je(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new B(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new B(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new B(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new B(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new je(n)}static emptyPath(){return new je([])}}/**
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
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(ye.fromString(e))}static fromName(e){return new j(ye.fromString(e).popFirst(5))}static empty(){return new j(ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ye.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new ye(e.slice()))}}function XT(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=G.fromTimestamp(s===1e9?new Re(n+1,0):new Re(n,s));return new wn(r,j.empty(),e)}function ZT(t){return new wn(t.readTime,t.key,-1)}class wn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new wn(G.min(),j.empty(),-1)}static max(){return new wn(G.max(),j.empty(),-1)}}function eb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=j.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
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
 */const tb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class nb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function si(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==tb)throw t;L("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,s)=>{n(e)})}static reject(e){return new b((n,s)=>{s(e)})}static waitFor(e){return new b((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=b.resolve(!1);for(const s of e)n=n.next(r=>r?b.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new b((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new b((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function ri(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ll{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Ll.ct=-1;function Yo(t){return t==null}function lo(t){return t===0&&1/t==-1/0}function sb(t){return typeof t=="number"&&Number.isInteger(t)&&!lo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function qh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Xn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function yg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ne{constructor(e,n){this.comparator=e,this.root=n||Me.EMPTY}insert(e,n){return new Ne(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Me.BLACK,null,null))}remove(e){return new Ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Me.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ei(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ei(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ei(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ei(this.root,e,this.comparator,!0)}}class Ei{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Me{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Me.RED,this.left=r??Me.EMPTY,this.right=i??Me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Me(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Me.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}Me.EMPTY=null,Me.RED=!0,Me.BLACK=!1;Me.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Me(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class De{constructor(e){this.comparator=e,this.data=new Ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new zh(this.data.getIterator())}getIteratorFrom(e){return new zh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof De)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new De(this.comparator);return n.data=e,n}}class zh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class at{constructor(e){this.fields=e,e.sort(je.comparator)}static empty(){return new at([])}unionWith(e){let n=new De(je.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new at(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ss(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class rb extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ge{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new rb("Invalid base64 string: "+r):r}}(e);return new Ge(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Ge(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const ib=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _n(t){if(ge(!!t),typeof t=="string"){let e=0;const n=ib.exec(t);if(ge(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:be(t.seconds),nanos:be(t.nanos)}}function be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Cs(t){return typeof t=="string"?Ge.fromBase64String(t):Ge.fromUint8Array(t)}/**
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
 */function vg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function wg(t){const e=t.mapValue.fields.__previous_value__;return vg(e)?wg(e):e}function xr(t){const e=_n(t.mapValue.fields.__local_write_time__.timestampValue);return new Re(e.seconds,e.nanos)}/**
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
 */class ob{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Mr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Mr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Mr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ii={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Yn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?vg(t)?4:ab(t)?9007199254740991:10:z()}function Ut(t,e){if(t===e)return!0;const n=Yn(t);if(n!==Yn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return xr(t).isEqual(xr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=_n(s.timestampValue),o=_n(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Cs(s.bytesValue).isEqual(Cs(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return be(s.geoPointValue.latitude)===be(r.geoPointValue.latitude)&&be(s.geoPointValue.longitude)===be(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return be(s.integerValue)===be(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=be(s.doubleValue),o=be(r.doubleValue);return i===o?lo(i)===lo(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Ss(t.arrayValue.values||[],e.arrayValue.values||[],Ut);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(qh(i)!==qh(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Ut(i[a],o[a])))return!1;return!0}(t,e);default:return z()}}function Lr(t,e){return(t.values||[]).find(n=>Ut(n,e))!==void 0}function As(t,e){if(t===e)return 0;const n=Yn(t),s=Yn(e);if(n!==s)return oe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=be(r.integerValue||r.doubleValue),a=be(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Kh(t.timestampValue,e.timestampValue);case 4:return Kh(xr(t),xr(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Cs(r),a=Cs(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=oe(o[c],a[c]);if(l!==0)return l}return oe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=oe(be(r.latitude),be(i.latitude));return o!==0?o:oe(be(r.longitude),be(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=As(o[c],a[c]);if(l)return l}return oe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Ii.mapValue&&i===Ii.mapValue)return 0;if(r===Ii.mapValue)return 1;if(i===Ii.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=oe(a[u],l[u]);if(h!==0)return h;const d=As(o[a[u]],c[l[u]]);if(d!==0)return d}return oe(a.length,l.length)}(t.mapValue,e.mapValue);default:throw z()}}function Kh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=_n(t),s=_n(e),r=oe(n.seconds,s.seconds);return r!==0?r:oe(n.nanos,s.nanos)}function ks(t){return Ec(t)}function Ec(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=_n(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Cs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,j.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Ec(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Ec(s.fields[a])}`;return i+"}"}(t.mapValue):z();var e,n}function Ic(t){return!!t&&"integerValue"in t}function Ul(t){return!!t&&"arrayValue"in t}function Wh(t){return!!t&&"nullValue"in t}function Gh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Mi(t){return!!t&&"mapValue"in t}function fr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Xn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=fr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=fr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ab(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class st{constructor(e){this.value=e}static empty(){return new st({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Mi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=fr(n)}setAll(e){let n=je.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=fr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Mi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ut(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Mi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Xn(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new st(fr(this.value))}}function _g(t){const e=[];return Xn(t.fields,(n,s)=>{const r=new je([n]);if(Mi(s)){const i=_g(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new at(e)}/**
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
 */class $e{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new $e(e,0,G.min(),G.min(),G.min(),st.empty(),0)}static newFoundDocument(e,n,s,r){return new $e(e,1,n,G.min(),s,r,0)}static newNoDocument(e,n){return new $e(e,2,n,G.min(),G.min(),st.empty(),0)}static newUnknownDocument(e,n){return new $e(e,3,n,G.min(),G.min(),st.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=st.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=st.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $e&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $e(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class uo{constructor(e,n){this.position=e,this.inclusive=n}}function Qh(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=j.comparator(j.fromName(o.referenceValue),n.key):s=As(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Yh(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ut(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class dr{constructor(e,n="asc"){this.field=e,this.dir=n}}function cb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Eg{}class ke extends Eg{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new ub(e,n,s):n==="array-contains"?new db(e,s):n==="in"?new pb(e,s):n==="not-in"?new gb(e,s):n==="array-contains-any"?new mb(e,s):new ke(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new hb(e,s):new fb(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(As(n,this.value)):n!==null&&Yn(this.value)===Yn(n)&&this.matchesComparison(As(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ft extends Eg{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Ft(e,n)}matches(e){return Ig(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Ig(t){return t.op==="and"}function Tg(t){return lb(t)&&Ig(t)}function lb(t){for(const e of t.filters)if(e instanceof Ft)return!1;return!0}function Tc(t){if(t instanceof ke)return t.field.canonicalString()+t.op.toString()+ks(t.value);if(Tg(t))return t.filters.map(e=>Tc(e)).join(",");{const e=t.filters.map(n=>Tc(n)).join(",");return`${t.op}(${e})`}}function bg(t,e){return t instanceof ke?function(n,s){return s instanceof ke&&n.op===s.op&&n.field.isEqual(s.field)&&Ut(n.value,s.value)}(t,e):t instanceof Ft?function(n,s){return s instanceof Ft&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&bg(i,s.filters[o]),!0):!1}(t,e):void z()}function Sg(t){return t instanceof ke?function(e){return`${e.field.canonicalString()} ${e.op} ${ks(e.value)}`}(t):t instanceof Ft?function(e){return e.op.toString()+" {"+e.getFilters().map(Sg).join(" ,")+"}"}(t):"Filter"}class ub extends ke{constructor(e,n,s){super(e,n,s),this.key=j.fromName(s.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.matchesComparison(n)}}class hb extends ke{constructor(e,n){super(e,"in",n),this.keys=Cg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class fb extends ke{constructor(e,n){super(e,"not-in",n),this.keys=Cg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Cg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>j.fromName(s.referenceValue))}class db extends ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ul(n)&&Lr(n.arrayValue,this.value)}}class pb extends ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Lr(this.value.arrayValue,n)}}class gb extends ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(Lr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Lr(this.value.arrayValue,n)}}class mb extends ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ul(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Lr(this.value.arrayValue,s))}}/**
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
 */class yb{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function Jh(t,e=null,n=[],s=[],r=null,i=null,o=null){return new yb(t,e,n,s,r,i,o)}function Fl(t){const e=Q(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Tc(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Yo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ks(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ks(s)).join(",")),e.ft=n}return e.ft}function Vl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!cb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!bg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Yh(t.startAt,e.startAt)&&Yh(t.endAt,e.endAt)}function bc(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Jo{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this.wt=null,this.startAt,this.endAt}}function vb(t,e,n,s,r,i,o,a){return new Jo(t,e,n,s,r,i,o,a)}function $l(t){return new Jo(t)}function Xh(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function wb(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function _b(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Eb(t){return t.collectionGroup!==null}function ms(t){const e=Q(t);if(e.dt===null){e.dt=[];const n=_b(e),s=wb(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new dr(n)),e.dt.push(new dr(je.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new dr(je.keyField(),i))}}}return e.dt}function Yt(t){const e=Q(t);if(!e.wt)if(e.limitType==="F")e.wt=Jh(e.path,e.collectionGroup,ms(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of ms(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new dr(i.field,o))}const s=e.endAt?new uo(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new uo(e.startAt.position,e.startAt.inclusive):null;e.wt=Jh(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.wt}function Sc(t,e,n){return new Jo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Xo(t,e){return Vl(Yt(t),Yt(e))&&t.limitType===e.limitType}function Ag(t){return`${Fl(Yt(t))}|lt:${t.limitType}`}function Cc(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Sg(s)).join(", ")}]`),Yo(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ks(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ks(s)).join(",")),`Target(${n})`}(Yt(t))}; limitType=${t.limitType})`}function Zo(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):j.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of ms(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Qh(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,ms(n),s)||n.endAt&&!function(r,i,o){const a=Qh(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,ms(n),s))}(t,e)}function Ib(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function kg(t){return(e,n)=>{let s=!1;for(const r of ms(t)){const i=Tb(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Tb(t,e,n){const s=t.field.isKeyField()?j.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?As(a,c):z()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return z()}}/**
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
 */class js{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Xn(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return yg(this.inner)}size(){return this.innerSize}}/**
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
 */const bb=new Ne(j.comparator);function Jt(){return bb}const Rg=new Ne(j.comparator);function sr(...t){let e=Rg;for(const n of t)e=e.insert(n.key,n);return e}function Dg(t){let e=Rg;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Fn(){return pr()}function Og(){return pr()}function pr(){return new js(t=>t.toString(),(t,e)=>t.isEqual(e))}const Sb=new Ne(j.comparator),Cb=new De(j.comparator);function ee(...t){let e=Cb;for(const n of t)e=e.add(n);return e}const Ab=new De(oe);function Ng(){return Ab}/**
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
 */function Pg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:lo(e)?"-0":e}}function xg(t){return{integerValue:""+t}}function kb(t,e){return sb(e)?xg(e):Pg(t,e)}/**
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
 */class ea{constructor(){this._=void 0}}function Rb(t,e,n){return t instanceof ho?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Ur?Lg(t,e):t instanceof Fr?Ug(t,e):function(s,r){const i=Mg(s,r),o=Zh(i)+Zh(s._t);return Ic(i)&&Ic(s._t)?xg(o):Pg(s.serializer,o)}(t,e)}function Db(t,e,n){return t instanceof Ur?Lg(t,e):t instanceof Fr?Ug(t,e):n}function Mg(t,e){return t instanceof fo?Ic(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class ho extends ea{}class Ur extends ea{constructor(e){super(),this.elements=e}}function Lg(t,e){const n=Fg(e);for(const s of t.elements)n.some(r=>Ut(r,s))||n.push(s);return{arrayValue:{values:n}}}class Fr extends ea{constructor(e){super(),this.elements=e}}function Ug(t,e){let n=Fg(e);for(const s of t.elements)n=n.filter(r=>!Ut(r,s));return{arrayValue:{values:n}}}class fo extends ea{constructor(e,n){super(),this.serializer=e,this._t=n}}function Zh(t){return be(t.integerValue||t.doubleValue)}function Fg(t){return Ul(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Ob(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Ur&&s instanceof Ur||n instanceof Fr&&s instanceof Fr?Ss(n.elements,s.elements,Ut):n instanceof fo&&s instanceof fo?Ut(n._t,s._t):n instanceof ho&&s instanceof ho}(t.transform,e.transform)}class Nb{constructor(e,n){this.version=e,this.transformResults=n}}class ft{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ft}static exists(e){return new ft(void 0,e)}static updateTime(e){return new ft(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Li(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ta{}function Vg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Bl(t.key,ft.none()):new ii(t.key,t.data,ft.none());{const n=t.data,s=st.empty();let r=new De(je.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new bn(t.key,s,new at(r.toArray()),ft.none())}}function Pb(t,e,n){t instanceof ii?function(s,r,i){const o=s.value.clone(),a=tf(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof bn?function(s,r,i){if(!Li(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=tf(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll($g(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function gr(t,e,n,s){return t instanceof ii?function(r,i,o,a){if(!Li(r.precondition,i))return o;const c=r.value.clone(),l=nf(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof bn?function(r,i,o,a){if(!Li(r.precondition,i))return o;const c=nf(r.fieldTransforms,a,i),l=i.data;return l.setAll($g(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return Li(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function xb(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Mg(s.transform,r||null);i!=null&&(n===null&&(n=st.empty()),n.set(s.field,i))}return n||null}function ef(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ss(n,s,(r,i)=>Ob(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ii extends ta{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class bn extends ta{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function $g(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function tf(t,e,n){const s=new Map;ge(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,Db(o,a,n[r]))}return s}function nf(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Rb(i,o,e))}return s}class Bl extends ta{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Mb extends ta{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Lb{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Pb(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=gr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=gr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Og();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Vg(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(G.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ee())}isEqual(e){return this.batchId===e.batchId&&Ss(this.mutations,e.mutations,(n,s)=>ef(n,s))&&Ss(this.baseMutations,e.baseMutations,(n,s)=>ef(n,s))}}class jl{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){ge(e.mutations.length===s.length);let r=Sb;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new jl(e,n,s,r)}}/**
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
 */class Ub{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Fb{constructor(e){this.count=e}}/**
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
 */var Te,te;function Vb(t){switch(t){default:return z();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function Bg(t){if(t===void 0)return Qt("GRPC error has no .code"),I.UNKNOWN;switch(t){case Te.OK:return I.OK;case Te.CANCELLED:return I.CANCELLED;case Te.UNKNOWN:return I.UNKNOWN;case Te.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Te.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Te.INTERNAL:return I.INTERNAL;case Te.UNAVAILABLE:return I.UNAVAILABLE;case Te.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Te.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Te.NOT_FOUND:return I.NOT_FOUND;case Te.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Te.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Te.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Te.ABORTED:return I.ABORTED;case Te.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Te.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Te.DATA_LOSS:return I.DATA_LOSS;default:return z()}}(te=Te||(Te={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Hl{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ti}static getOrCreateInstance(){return Ti===null&&(Ti=new Hl),Ti}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Ti=null;/**
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
 */class na{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,oi.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new na(G.min(),r,Ng(),Jt(),ee())}}class oi{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new oi(s,n,ee(),ee(),ee())}}/**
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
 */class Ui{constructor(e,n,s,r){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=r}}class jg{constructor(e,n){this.targetId=e,this.Et=n}}class Hg{constructor(e,n,s=Ge.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class sf{constructor(){this.At=0,this.Rt=of(),this.vt=Ge.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=ee(),n=ee(),s=ee();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:z()}}),new oi(this.vt,this.bt,e,n,s)}xt(){this.Pt=!1,this.Rt=of()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class $b{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Jt(),this.qt=rf(),this.Ut=new De(oe)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const s=this.jt(n);switch(e.state){case 0:this.Wt(n)&&s.Dt(e.resumeToken);break;case 1:s.$t(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.$t(),s.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(s.Mt(),s.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.Wt(r)&&n(r)})}Jt(e){var n;const s=e.targetId,r=e.Et.count,i=this.Yt(s);if(i){const o=i.target;if(bc(o))if(r===0){const a=new j(o.path);this.Qt(s,a,$e.newNoDocument(a,G.min()))}else ge(r===1);else{const a=this.Zt(s);a!==r&&(this.Ht(s),this.Ut=this.Ut.add(s),(n=Hl.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&bc(a.target)){const c=new j(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,$e.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=ee();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new na(e,n,this.Ut,this.Lt,s);return this.Lt=Jt(),this.qt=rf(),this.Ut=new De(oe),r}Gt(e,n){if(!this.Wt(e))return;const s=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.Wt(e))return;const r=this.jt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new sf,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new De(oe),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||L("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new sf),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function rf(){return new Ne(j.comparator)}function of(){return new Ne(j.comparator)}/**
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
 */const Bb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),jb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Hb=(()=>({and:"AND",or:"OR"}))();class qb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function po(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function qg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function zb(t,e){return po(t,e.toTimestamp())}function Mt(t){return ge(!!t),G.fromTimestamp(function(e){const n=_n(e);return new Re(n.seconds,n.nanos)}(t))}function ql(t,e){return function(n){return new ye(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function zg(t){const e=ye.fromString(t);return ge(Qg(e)),e}function Ac(t,e){return ql(t.databaseId,e.path)}function Ua(t,e){const n=zg(e);if(n.get(1)!==t.databaseId.projectId)throw new B(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(Kg(n))}function kc(t,e){return ql(t.databaseId,e)}function Kb(t){const e=zg(t);return e.length===4?ye.emptyPath():Kg(e)}function Rc(t){return new ye(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Kg(t){return ge(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function af(t,e,n){return{name:Ac(t,e),fields:n.value.mapValue.fields}}function Wb(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:z()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(ge(l===void 0||typeof l=="string"),Ge.fromBase64String(l||"")):(ge(l===void 0||l instanceof Uint8Array),Ge.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?I.UNKNOWN:Bg(c.code);return new B(l,c.message||"")}(o);n=new Hg(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Ua(t,s.document.name),i=Mt(s.document.updateTime),o=s.document.createTime?Mt(s.document.createTime):G.min(),a=new st({mapValue:{fields:s.document.fields}}),c=$e.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new Ui(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Ua(t,s.document),i=s.readTime?Mt(s.readTime):G.min(),o=$e.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Ui([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Ua(t,s.document),i=s.removedTargetIds||[];n=new Ui([],i,r,null)}else{if(!("filter"in e))return z();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new Fb(r),o=s.targetId;n=new jg(o,i)}}return n}function Gb(t,e){let n;if(e instanceof ii)n={update:af(t,e.key,e.value)};else if(e instanceof Bl)n={delete:Ac(t,e.key)};else if(e instanceof bn)n={update:af(t,e.key,e.data),updateMask:sS(e.fieldMask)};else{if(!(e instanceof Mb))return z();n={verify:Ac(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof ho)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ur)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Fr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof fo)return{fieldPath:i.field.canonicalString(),increment:o._t};throw z()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:zb(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:z()}(t,e.precondition)),n}function Qb(t,e){return t&&t.length>0?(ge(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Mt(s.updateTime):Mt(r);return i.isEqual(G.min())&&(i=Mt(r)),new Nb(i,s.transformResults||[])}(n,e))):[]}function Yb(t,e){return{documents:[kc(t,e.path)]}}function Jb(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=kc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=kc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Gg(Ft.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:os(u.field),direction:eS(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.useProto3Json||Yo(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Xb(t){let e=Kb(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){ge(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=Wg(u);return h instanceof Ft&&Tg(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new dr(as(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Yo(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new uo(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new uo(d,h)}(n.endAt)),vb(e,r,o,i,a,"F",c,l)}function Zb(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return z()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Wg(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=as(e.unaryFilter.field);return ke.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=as(e.unaryFilter.field);return ke.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=as(e.unaryFilter.field);return ke.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=as(e.unaryFilter.field);return ke.create(i,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(t):t.fieldFilter!==void 0?function(e){return ke.create(as(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Ft.create(e.compositeFilter.filters.map(n=>Wg(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return z()}}(e.compositeFilter.op))}(t):z()}function eS(t){return Bb[t]}function tS(t){return jb[t]}function nS(t){return Hb[t]}function os(t){return{fieldPath:t.canonicalString()}}function as(t){return je.fromServerFormat(t.fieldPath)}function Gg(t){return t instanceof ke?function(e){if(e.op==="=="){if(Gh(e.value))return{unaryFilter:{field:os(e.field),op:"IS_NAN"}};if(Wh(e.value))return{unaryFilter:{field:os(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Gh(e.value))return{unaryFilter:{field:os(e.field),op:"IS_NOT_NAN"}};if(Wh(e.value))return{unaryFilter:{field:os(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:os(e.field),op:tS(e.op),value:e.value}}}(t):t instanceof Ft?function(e){const n=e.getFilters().map(s=>Gg(s));return n.length===1?n[0]:{compositeFilter:{op:nS(e.op),filters:n}}}(t):z()}function sS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Qg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Hn{constructor(e,n,s,r,i=G.min(),o=G.min(),a=Ge.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Hn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class rS{constructor(e){this.se=e}}function iS(t){const e=Xb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Sc(e,e.limit,"L"):e}/**
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
 */class oS{constructor(){this.He=new aS}addToCollectionParentIndex(e,n){return this.He.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(wn.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(wn.min())}updateCollectionGroup(e,n,s){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class aS{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new De(ye.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new De(ye.comparator)).toArray()}}/**
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
 */class Rs{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new Rs(0)}static bn(){return new Rs(-1)}}/**
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
 */class cS{constructor(){this.changes=new js(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,$e.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?b.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class lS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class uS{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&gr(s.mutation,r,at.empty(),Re.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ee()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ee()){const r=Fn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=sr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Fn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ee()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Jt();const o=pr(),a=pr();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof bn)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),gr(u.mutation,l,u.mutation.getFieldMask(),Re.now())):o.set(l.key,at.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new lS(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=pr();let r=new Ne((o,a)=>o-a),i=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||at.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||ee()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Og();u.forEach(d=>{if(!i.has(d)){const g=Vg(n.get(d),s.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return b.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return j.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Eb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):b.resolve(Fn());let a=-1,c=i;return o.next(l=>b.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?b.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ee())).next(u=>({batchId:a,changes:Dg(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new j(n)).next(s=>{let r=sr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=sr();return this.indexManager.getCollectionParents(e,r).next(o=>b.forEach(o,a=>{const c=function(l,u){return new Jo(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,$e.newInvalidDocument(l)))});let o=sr();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&gr(l.mutation,c,at.empty(),Re.now()),Zo(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class hS{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return b.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Mt(s.createTime)}),b.resolve()}getNamedQuery(e,n){return b.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(s){return{name:s.name,query:iS(s.bundledQuery),readTime:Mt(s.readTime)}}(n)),b.resolve()}}/**
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
 */class fS{constructor(){this.overlays=new Ne(j.comparator),this.ts=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Fn();return b.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.re(e,n,i)}),b.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ts.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ts.delete(s)),b.resolve()}getOverlaysForCollection(e,n,s){const r=Fn(),i=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return b.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Ne((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Fn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Fn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return b.resolve(a)}re(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ts.get(r.largestBatchId).delete(s.key);this.ts.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Ub(n,s));let i=this.ts.get(n);i===void 0&&(i=ee(),this.ts.set(n,i)),this.ts.set(n,i.add(s.key))}}/**
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
 */class zl{constructor(){this.es=new De(Pe.ns),this.ss=new De(Pe.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const s=new Pe(e,n);this.es=this.es.add(s),this.ss=this.ss.add(s)}os(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.us(new Pe(e,n))}cs(e,n){e.forEach(s=>this.removeReference(s,n))}hs(e){const n=new j(new ye([])),s=new Pe(n,e),r=new Pe(n,e+1),i=[];return this.ss.forEachInRange([s,r],o=>{this.us(o),i.push(o.key)}),i}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new j(new ye([])),s=new Pe(n,e),r=new Pe(n,e+1);let i=ee();return this.ss.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Pe(e,0),s=this.es.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Pe{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return j.comparator(e.key,n.key)||oe(e.ds,n.ds)}static rs(e,n){return oe(e.ds,n.ds)||j.comparator(e.key,n.key)}}/**
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
 */class dS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new De(Pe.ns)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Lb(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this._s=this._s.add(new Pe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ys(s),i=r<0?0:r;return b.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Pe(n,0),r=new Pe(n,Number.POSITIVE_INFINITY),i=[];return this._s.forEachInRange([s,r],o=>{const a=this.gs(o.ds);i.push(a)}),b.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new De(oe);return n.forEach(r=>{const i=new Pe(r,0),o=new Pe(r,Number.POSITIVE_INFINITY);this._s.forEachInRange([i,o],a=>{s=s.add(a.ds)})}),b.resolve(this.ps(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;j.isDocumentKey(i)||(i=i.child(""));const o=new Pe(new j(i),0);let a=new De(oe);return this._s.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.ds)),!0)},o),b.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(s=>{const r=this.gs(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){ge(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this._s;return b.forEach(n.mutations,r=>{const i=new Pe(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this._s=s})}En(e){}containsKey(e,n){const s=new Pe(n,0),r=this._s.firstAfterOrEqual(s);return b.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class pS{constructor(e){this.Ts=e,this.docs=new Ne(j.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ts(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return b.resolve(s?s.document.mutableCopy():$e.newInvalidDocument(n))}getEntries(e,n){let s=Jt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():$e.newInvalidDocument(r))}),b.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Jt();const o=n.path,a=new j(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||eb(ZT(u),s)<=0||(r.has(u.key)||Zo(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return b.resolve(i)}getAllFromCollectionGroup(e,n,s,r){z()}Es(e,n){return b.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new gS(this)}getSize(e){return b.resolve(this.size)}}class gS extends cS{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Jn.addEntry(e,r)):this.Jn.removeEntry(s)}),b.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
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
 */class mS{constructor(e){this.persistence=e,this.As=new js(n=>Fl(n),Vl),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.Rs=0,this.vs=new zl,this.targetCount=0,this.bs=Rs.vn()}forEachTarget(e,n){return this.As.forEach((s,r)=>n(r)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Rs&&(this.Rs=n),b.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new Rs(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Sn(n),b.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.As.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),b.waitFor(i).next(()=>r)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const s=this.As.get(n)||null;return b.resolve(s)}addMatchingKeys(e,n,s){return this.vs.os(n,s),b.resolve()}removeMatchingKeys(e,n,s){this.vs.cs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),b.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),b.resolve()}getMatchingKeysForTargetId(e,n){const s=this.vs.fs(n);return b.resolve(s)}containsKey(e,n){return b.resolve(this.vs.containsKey(n))}}/**
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
 */class yS{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new Ll(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new mS(this),this.indexManager=new oS,this.remoteDocumentCache=function(s){return new pS(s)}(s=>this.referenceDelegate.Cs(s)),this.serializer=new rS(n),this.xs=new hS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new fS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ps[e.toKey()];return s||(s=new dS(n,this.referenceDelegate),this.Ps[e.toKey()]=s),s}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,s){L("MemoryPersistence","Starting transaction:",e);const r=new vS(this.Vs.next());return this.referenceDelegate.Ns(),s(r).next(i=>this.referenceDelegate.ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Os(e,n){return b.or(Object.values(this.Ps).map(s=>()=>s.containsKey(e,n)))}}class vS extends nb{constructor(e){super(),this.currentSequenceNumber=e}}class Kl{constructor(e){this.persistence=e,this.$s=new zl,this.Ms=null}static Fs(e){return new Kl(e)}get Bs(){if(this.Ms)return this.Ms;throw z()}addReference(e,n,s){return this.$s.addReference(s,n),this.Bs.delete(s.toString()),b.resolve()}removeReference(e,n,s){return this.$s.removeReference(s,n),this.Bs.add(s.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),b.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(r=>this.Bs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Bs.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Bs,s=>{const r=j.fromPath(s);return this.Ls(e,r).next(i=>{i||n.removeEntry(r,G.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(s=>{s?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return b.or([()=>b.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
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
 */class Wl{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Vi=s,this.Si=r}static Di(e,n){let s=ee(),r=ee();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Wl(e,n.fromCache,s,r)}}/**
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
 */class wS{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ni(e,n).next(i=>i||this.ki(e,n,r,s)).next(i=>i||this.Oi(e,n))}Ni(e,n){if(Xh(n))return b.resolve(null);let s=Yt(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Sc(n,null,"F"),s=Yt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ee(...i);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.$i(n,a);return this.Mi(n,l,o,c.readTime)?this.Ni(e,Sc(n,null,"F")):this.Fi(e,l,n,c)}))})))}ki(e,n,s,r){return Xh(n)||r.isEqual(G.min())?this.Oi(e,n):this.xi.getDocuments(e,s).next(i=>{const o=this.$i(n,i);return this.Mi(n,o,s,r)?this.Oi(e,n):(Hh()<=re.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Cc(n)),this.Fi(e,o,n,XT(r,-1)))})}$i(e,n){let s=new De(kg(e));return n.forEach((r,i)=>{Zo(e,i)&&(s=s.add(i))}),s}Mi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(e,n){return Hh()<=re.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",Cc(n)),this.xi.getDocumentsMatchingQuery(e,n,wn.min())}Fi(e,n,s,r){return this.xi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class _S{constructor(e,n,s,r){this.persistence=e,this.Bi=n,this.serializer=r,this.Li=new Ne(oe),this.qi=new js(i=>Fl(i),Vl),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(s)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new uS(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function ES(t,e,n,s){return new _S(t,e,n,s)}async function Yg(t,e){const n=Q(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Gi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ee();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Qi:l,removedBatchIds:o,addedBatchIds:a}))})})}function IS(t,e){const n=Q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=b.resolve();return h.forEach(g=>{d=d.next(()=>l.getEntry(a,g)).next(v=>{const _=c.docVersions.get(g);ge(_!==null),v.version.compareTo(_)<0&&(u.applyToRemoteDocument(v,c),v.isValidDocument()&&(v.setReadTime(c.commitVersion),l.addEntry(v)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ee();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Jg(t){const e=Q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function TS(t,e){const n=Q(t),s=e.snapshotVersion;let r=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});r=n.Li;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Ds.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(i,u.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(Ge.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,s)),r=r.insert(h,g),function(v,_,R){return v.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:R.addedDocuments.size+R.modifiedDocuments.size+R.removedDocuments.size>0}(d,g,u)&&a.push(n.Ds.updateTargetData(i,g))});let c=Jt(),l=ee();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(bS(i,o,e.documentUpdates).next(u=>{c=u.zi,l=u.ji})),!s.isEqual(G.min())){const u=n.Ds.getLastRemoteSnapshotVersion(i).next(h=>n.Ds.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return b.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Li=r,i))}function bS(t,e,n){let s=ee(),r=ee();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Jt();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(G.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):L("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{zi:o,ji:r}})}function SS(t,e){const n=Q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function CS(t,e){const n=Q(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ds.getTargetData(s,e).next(i=>i?(r=i,b.resolve(r)):n.Ds.allocateTargetId(s).next(o=>(r=new Hn(e,o,0,s.currentSequenceNumber),n.Ds.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Li.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Li=n.Li.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function Dc(t,e,n){const s=Q(t),r=s.Li.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!ri(o))throw o;L("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Li=s.Li.remove(e),s.qi.delete(r.target)}function cf(t,e,n){const s=Q(t);let r=G.min(),i=ee();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=Q(a),h=u.qi.get(l);return h!==void 0?b.resolve(u.Li.get(h)):u.Ds.getTargetData(c,l)}(s,o,Yt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Bi.getDocumentsMatchingQuery(o,e,n?r:G.min(),n?i:ee())).next(a=>(AS(s,Ib(e),a),{documents:a,Wi:i})))}function AS(t,e,n){let s=t.Ui.get(e)||G.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ui.set(e,s)}class lf{constructor(){this.activeTargetIds=Ng()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class kS{constructor(){this.Br=new lf,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,s){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new lf,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class RS{qr(e){}shutdown(){}}/**
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
 */class uf{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let bi=null;function Fa(){return bi===null?bi=268435456+Math.round(2147483648*Math.random()):bi++,"0x"+bi.toString(16)}/**
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
 */const DS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class OS{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
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
 */const Fe="WebChannelConnection";class NS extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,s,r,i){const o=Fa(),a=this.ao(e,n);L("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.ho(c,r,i),this.lo(e,a,c,s).then(l=>(L("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw co("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}fo(e,n,s,r,i,o){return this.co(e,n,s,r,i)}ho(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Bs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ao(e,n){const s=DS[e];return`${this.ro}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,s,r){const i=Fa();return new Promise((o,a)=>{const c=new jT;c.setWithCredentials(!0),c.listenOnce(VT.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case La.NO_ERROR:const u=c.getResponseJson();L(Fe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case La.TIMEOUT:L(Fe,`RPC '${e}' ${i} timed out`),a(new B(I.DEADLINE_EXCEEDED,"Request time out"));break;case La.HTTP_ERROR:const h=c.getStatus();if(L(Fe,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const v=function(_){const R=_.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(R)>=0?R:I.UNKNOWN}(g.status);a(new B(v,g.message))}else a(new B(I.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new B(I.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{L(Fe,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);L(Fe,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}wo(e,n,s){const r=Fa(),i=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=UT(),a=FT(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new BT({})),this.ho(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const l=i.join("");L(Fe,`Creating RPC '${e}' stream ${r}: ${l}`,c);const u=o.createWebChannel(l,c);let h=!1,d=!1;const g=new OS({Wr:_=>{d?L(Fe,`Not sending because RPC '${e}' stream ${r} is closed:`,_):(h||(L(Fe,`Opening RPC '${e}' stream ${r} transport.`),u.open(),h=!0),L(Fe,`RPC '${e}' stream ${r} sending:`,_),u.send(_))},Hr:()=>u.close()}),v=(_,R,k)=>{_.listen(R,U=>{try{k(U)}catch(P){setTimeout(()=>{throw P},0)}})};return v(u,_i.EventType.OPEN,()=>{d||L(Fe,`RPC '${e}' stream ${r} transport opened.`)}),v(u,_i.EventType.CLOSE,()=>{d||(d=!0,L(Fe,`RPC '${e}' stream ${r} transport closed`),g.so())}),v(u,_i.EventType.ERROR,_=>{d||(d=!0,co(Fe,`RPC '${e}' stream ${r} transport errored:`,_),g.so(new B(I.UNAVAILABLE,"The operation could not be completed")))}),v(u,_i.EventType.MESSAGE,_=>{var R;if(!d){const k=_.data[0];ge(!!k);const U=k,P=U.error||((R=U[0])===null||R===void 0?void 0:R.error);if(P){L(Fe,`RPC '${e}' stream ${r} received error:`,P);const J=P.status;let de=function(Qe){const Ze=Te[Qe];if(Ze!==void 0)return Bg(Ze)}(J),_e=P.message;de===void 0&&(de=I.INTERNAL,_e="Unknown error status: "+J+" with message "+P.message),d=!0,g.so(new B(de,_e)),u.close()}else L(Fe,`RPC '${e}' stream ${r} received:`,k),g.io(k)}}),v(a,$T.STAT_EVENT,_=>{_.stat===Bh.PROXY?L(Fe,`RPC '${e}' stream ${r} detected buffering proxy`):_.stat===Bh.NOPROXY&&L(Fe,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{g.no()},0),g}}function Va(){return typeof document<"u"?document:null}/**
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
 */function sa(t){return new qb(t,!0)}/**
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
 */class Xg{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Ws=e,this.timerId=n,this._o=s,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),r=Math.max(0,n-s);r>0&&L("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class Zg{constructor(e,n,s,r,i,o,a,c){this.Ws=e,this.bo=s,this.Po=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new Xg(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(Qt(n.toString()),Qt("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Vo===n&&this.Ko(s,r)},s=>{e(()=>{const r=new B(I.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Go(r)})})}Ko(e,n){const s=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{s(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(r=>{s(()=>this.Go(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return L("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class PS extends Zg{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=Wb(this.serializer,e),s=function(r){if(!("targetChange"in r))return G.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?G.min():i.readTime?Mt(i.readTime):G.min()}(e);return this.listener.zo(n,s)}jo(e){const n={};n.database=Rc(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;return o=bc(a)?{documents:Yb(r,a)}:{query:Jb(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=qg(r,i.resumeToken):i.snapshotVersion.compareTo(G.min())>0&&(o.readTime=po(r,i.snapshotVersion.toTimestamp())),o}(this.serializer,e);const s=Zb(this.serializer,e);s&&(n.labels=s),this.Fo(n)}Wo(e){const n={};n.database=Rc(this.serializer),n.removeTarget=e,this.Fo(n)}}class xS extends Zg{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(ge(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=Qb(e.writeResults,e.commitTime),s=Mt(e.commitTime);return this.listener.Zo(s,n)}return ge(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=Rc(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Gb(this.serializer,s))};this.Fo(n)}}/**
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
 */class MS extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.eu=!1}nu(){if(this.eu)throw new B(I.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.co(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new B(I.UNKNOWN,r.toString())})}fo(e,n,s,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.fo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(I.UNKNOWN,i.toString())})}terminate(){this.eu=!0}}class LS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Qt(n),this.ru=!1):L("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
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
 */class US{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=i,this._u.qr(o=>{s.enqueueAndForget(async()=>{Zn(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Q(a);c.du.add(4),await ai(c),c.mu.set("Unknown"),c.du.delete(4),await ra(c)}(this))})}),this.mu=new LS(s,r)}}async function ra(t){if(Zn(t))for(const e of t.wu)await e(!0)}async function ai(t){for(const e of t.wu)await e(!1)}function em(t,e){const n=Q(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),Yl(n)?Ql(n):Hs(n).No()&&Gl(n,e))}function tm(t,e){const n=Q(t),s=Hs(n);n.fu.delete(e),s.No()&&nm(n,e),n.fu.size===0&&(s.No()?s.$o():Zn(n)&&n.mu.set("Unknown"))}function Gl(t,e){t.gu.Ot(e.targetId),Hs(t).jo(e)}function nm(t,e){t.gu.Ot(e),Hs(t).Wo(e)}function Ql(t){t.gu=new $b({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),Hs(t).start(),t.mu.ou()}function Yl(t){return Zn(t)&&!Hs(t).xo()&&t.fu.size>0}function Zn(t){return Q(t).du.size===0}function sm(t){t.gu=void 0}async function FS(t){t.fu.forEach((e,n)=>{Gl(t,e)})}async function VS(t,e){sm(t),Yl(t)?(t.mu.au(e),Ql(t)):t.mu.set("Unknown")}async function $S(t,e,n){if(t.mu.set("Online"),e instanceof Hg&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.fu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.fu.delete(o),s.gu.removeTarget(o))}(t,e)}catch(s){L("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await go(t,s)}else if(e instanceof Ui?t.gu.Kt(e):e instanceof jg?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(G.min()))try{const s=await Jg(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.gu.Xt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.fu.get(c);l&&r.fu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.fu.get(a);if(!c)return;r.fu.set(a,c.withResumeToken(Ge.EMPTY_BYTE_STRING,c.snapshotVersion)),nm(r,a);const l=new Hn(c.target,a,1,c.sequenceNumber);Gl(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){L("RemoteStore","Failed to raise snapshot:",s),await go(t,s)}}async function go(t,e,n){if(!ri(e))throw e;t.du.add(1),await ai(t),t.mu.set("Offline"),n||(n=()=>Jg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await ra(t)})}function rm(t,e){return e().catch(n=>go(t,n,e))}async function ia(t){const e=Q(t),n=En(e);let s=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;BS(e);)try{const r=await SS(e.localStore,s);if(r===null){e.lu.length===0&&n.$o();break}s=r.batchId,jS(e,r)}catch(r){await go(e,r)}im(e)&&om(e)}function BS(t){return Zn(t)&&t.lu.length<10}function jS(t,e){t.lu.push(e);const n=En(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function im(t){return Zn(t)&&!En(t).xo()&&t.lu.length>0}function om(t){En(t).start()}async function HS(t){En(t).tu()}async function qS(t){const e=En(t);for(const n of t.lu)e.Yo(n.mutations)}async function zS(t,e,n){const s=t.lu.shift(),r=jl.from(s,e,n);await rm(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await ia(t)}async function KS(t,e){e&&En(t).Jo&&await async function(n,s){if(r=s.code,Vb(r)&&r!==I.ABORTED){const i=n.lu.shift();En(n).Oo(),await rm(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ia(n)}var r}(t,e),im(t)&&om(t)}async function hf(t,e){const n=Q(t);n.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const s=Zn(n);n.du.add(3),await ai(n),s&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await ra(n)}async function WS(t,e){const n=Q(t);e?(n.du.delete(2),await ra(n)):e||(n.du.add(2),await ai(n),n.mu.set("Unknown"))}function Hs(t){return t.yu||(t.yu=function(e,n,s){const r=Q(e);return r.nu(),new PS(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{Jr:FS.bind(null,t),Zr:VS.bind(null,t),zo:$S.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),Yl(t)?Ql(t):t.mu.set("Unknown")):(await t.yu.stop(),sm(t))})),t.yu}function En(t){return t.pu||(t.pu=function(e,n,s){const r=Q(e);return r.nu(),new xS(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{Jr:HS.bind(null,t),Zr:KS.bind(null,t),Xo:qS.bind(null,t),Zo:zS.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await ia(t)):(await t.pu.stop(),t.lu.length>0&&(L("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
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
 */class Jl{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new zt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Jl(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xl(t,e){if(Qt("AsyncQueue",`${e}: ${t}`),ri(t))return new B(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ys{constructor(e){this.comparator=e?(n,s)=>e(n,s)||j.comparator(n.key,s.key):(n,s)=>j.comparator(n.key,s.key),this.keyedMap=sr(),this.sortedSet=new Ne(this.comparator)}static emptySet(e){return new ys(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ys)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new ys;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class ff{constructor(){this.Iu=new Ne(j.comparator)}track(e){const n=e.doc.key,s=this.Iu.get(n);s?e.type!==0&&s.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&s.type!==1?this.Iu=this.Iu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Iu=this.Iu.remove(n):e.type===1&&s.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):z():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Ds{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ds(e,n,ys.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class GS{constructor(){this.Eu=void 0,this.listeners=[]}}class QS{constructor(){this.queries=new js(e=>Ag(e),Xo),this.onlineState="Unknown",this.Au=new Set}}async function am(t,e){const n=Q(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new GS),r)try{i.Eu=await n.onListen(s)}catch(o){const a=Xl(o,`Initialization of query '${Cc(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Ru(n.onlineState),i.Eu&&e.vu(i.Eu)&&Zl(n)}async function cm(t,e){const n=Q(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function YS(t,e){const n=Q(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.vu(r)&&(s=!0);o.Eu=r}}s&&Zl(n)}function JS(t,e,n){const s=Q(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Zl(t){t.Au.forEach(e=>{e.next()})}class lm{constructor(e,n,s){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Ds(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.xu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=Ds.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
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
 */class um{constructor(e){this.key=e}}class hm{constructor(e){this.key=e}}class XS{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=ee(),this.mutatedKeys=ee(),this.Ku=kg(e),this.Gu=new ys(this.Ku)}get Qu(){return this.Lu}zu(e,n){const s=n?n.ju:new ff,r=n?n.Gu:this.Gu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),g=Zo(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),_=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let R=!1;d&&g?d.data.isEqual(g.data)?v!==_&&(s.track({type:3,doc:g}),R=!0):this.Wu(d,g)||(s.track({type:2,doc:g}),R=!0,(c&&this.Ku(g,c)>0||l&&this.Ku(g,l)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),R=!0):d&&!g&&(s.track({type:1,doc:d}),R=!0,(c||l)&&(a=!0)),R&&(g?(o=o.add(g),i=_?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Gu:o,ju:s,Mi:a,mutatedKeys:i}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const i=e.ju.Tu();i.sort((l,u)=>function(h,d){const g=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return g(h)-g(d)}(l.type,u.type)||this.Ku(l.doc,u.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new Ds(this.query,e.Gu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new ff,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=ee(),this.Gu.forEach(s=>{this.Zu(s.key)&&(this.Uu=this.Uu.add(s.key))});const n=[];return e.forEach(s=>{this.Uu.has(s)||n.push(new hm(s))}),this.Uu.forEach(s=>{e.has(s)||n.push(new um(s))}),n}Xu(e){this.Lu=e.Wi,this.Uu=ee();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return Ds.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class ZS{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class eC{constructor(e){this.key=e,this.ec=!1}}class tC{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new js(a=>Ag(a),Xo),this.ic=new Map,this.rc=new Set,this.oc=new Ne(j.comparator),this.uc=new Map,this.cc=new zl,this.ac={},this.hc=new Map,this.lc=Rs.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function nC(t,e){const n=fC(t);let s,r;const i=n.sc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.tc();else{const o=await CS(n.localStore,Yt(e));n.isPrimaryClient&&em(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await sC(n,e,s,a==="current",o.resumeToken)}return r}async function sC(t,e,n,s,r){t.dc=(h,d,g)=>async function(v,_,R,k){let U=_.view.zu(R);U.Mi&&(U=await cf(v.localStore,_.query,!1).then(({documents:de})=>_.view.zu(de,U)));const P=k&&k.targetChanges.get(_.targetId),J=_.view.applyChanges(U,v.isPrimaryClient,P);return pf(v,_.targetId,J.Yu),J.snapshot}(t,h,d,g);const i=await cf(t.localStore,e,!0),o=new XS(e,i.Wi),a=o.zu(i.documents),c=oi.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);pf(t,n,l.Yu);const u=new ZS(e,n,o);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),l.snapshot}async function rC(t,e){const n=Q(t),s=n.sc.get(e),r=n.ic.get(s.targetId);if(r.length>1)return n.ic.set(s.targetId,r.filter(i=>!Xo(i,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Dc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),tm(n.remoteStore,s.targetId),Oc(n,s.targetId)}).catch(si)):(Oc(n,s.targetId),await Dc(n.localStore,s.targetId,!0))}async function iC(t,e,n){const s=dC(t);try{const r=await function(i,o){const a=Q(i),c=Re.now(),l=o.reduce((d,g)=>d.add(g.key),ee());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=Jt(),v=ee();return a.Ki.getEntries(d,l).next(_=>{g=_,g.forEach((R,k)=>{k.isValidDocument()||(v=v.add(R))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(_=>{u=_;const R=[];for(const k of o){const U=xb(k,u.get(k.key).overlayedDocument);U!=null&&R.push(new bn(k.key,U,_g(U.value.mapValue),ft.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,R,o)}).next(_=>{h=_;const R=_.applyToLocalDocumentSet(u,v);return a.documentOverlayCache.saveOverlays(d,_.batchId,R)})}).then(()=>({batchId:h.batchId,changes:Dg(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.ac[i.currentUser.toKey()];c||(c=new Ne(oe)),c=c.insert(o,a),i.ac[i.currentUser.toKey()]=c}(s,r.batchId,n),await ci(s,r.changes),await ia(s.remoteStore)}catch(r){const i=Xl(r,"Failed to persist write");n.reject(i)}}async function fm(t,e){const n=Q(t);try{const s=await TS(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.uc.get(i);o&&(ge(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ec=!0:r.modifiedDocuments.size>0?ge(o.ec):r.removedDocuments.size>0&&(ge(o.ec),o.ec=!1))}),await ci(n,s,e)}catch(s){await si(s)}}function df(t,e,n){const s=Q(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.sc.forEach((i,o)=>{const a=o.view.Ru(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=Q(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Ru(o)&&(c=!0)}),c&&Zl(a)}(s.eventManager,e),r.length&&s.nc.zo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function oC(t,e,n){const s=Q(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.uc.get(e),i=r&&r.key;if(i){let o=new Ne(j.comparator);o=o.insert(i,$e.newNoDocument(i,G.min()));const a=ee().add(i),c=new na(G.min(),new Map,new De(oe),o,a);await fm(s,c),s.oc=s.oc.remove(i),s.uc.delete(e),eu(s)}else await Dc(s.localStore,e,!1).then(()=>Oc(s,e,n)).catch(si)}async function aC(t,e){const n=Q(t),s=e.batch.batchId;try{const r=await IS(n.localStore,e);pm(n,s,null),dm(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await ci(n,r)}catch(r){await si(r)}}async function cC(t,e,n){const s=Q(t);try{const r=await function(i,o){const a=Q(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(ge(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);pm(s,e,n),dm(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await ci(s,r)}catch(r){await si(r)}}function dm(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function pm(t,e,n){const s=Q(t);let r=s.ac[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.ac[s.currentUser.toKey()]=r}}function Oc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc.wc(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(s=>{t.cc.containsKey(s)||gm(t,s)})}function gm(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(tm(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),eu(t))}function pf(t,e,n){for(const s of n)s instanceof um?(t.cc.addReference(s.key,e),lC(t,s)):s instanceof hm?(L("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||gm(t,s.key)):z()}function lC(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(L("SyncEngine","New document in limbo: "+n),t.rc.add(s),eu(t))}function eu(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new j(ye.fromString(e)),s=t.lc.next();t.uc.set(s,new eC(n)),t.oc=t.oc.insert(n,s),em(t.remoteStore,new Hn(Yt($l(n.path)),s,2,Ll.ct))}}async function ci(t,e,n){const s=Q(t),r=[],i=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,c)=>{o.push(s.dc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=Wl.Di(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.nc.zo(r),await async function(a,c){const l=Q(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>b.forEach(c,h=>b.forEach(h.Vi,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>b.forEach(h.Si,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!ri(u))throw u;L("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Li.get(h),g=d.snapshotVersion,v=d.withLastLimboFreeSnapshotVersion(g);l.Li=l.Li.insert(h,v)}}}(s.localStore,i))}async function uC(t,e){const n=Q(t);if(!n.currentUser.isEqual(e)){L("SyncEngine","User change. New user:",e.toKey());const s=await Yg(n.localStore,e);n.currentUser=e,function(r,i){r.hc.forEach(o=>{o.forEach(a=>{a.reject(new B(I.CANCELLED,i))})}),r.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ci(n,s.Qi)}}function hC(t,e){const n=Q(t),s=n.uc.get(e);if(s&&s.ec)return ee().add(s.key);{let r=ee();const i=n.ic.get(e);if(!i)return r;for(const o of i){const a=n.sc.get(o);r=r.unionWith(a.view.Qu)}return r}}function fC(t){const e=Q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=fm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=hC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=oC.bind(null,e),e.nc.zo=YS.bind(null,e.eventManager),e.nc.wc=JS.bind(null,e.eventManager),e}function dC(t){const e=Q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=aC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=cC.bind(null,e),e}class gf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=sa(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return ES(this.persistence,new wS,e.initialUser,this.serializer)}createPersistence(e){return new yS(Kl.Fs,this.serializer)}createSharedClientState(e){return new kS}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class pC{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>df(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=uC.bind(null,this.syncEngine),await WS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new QS}createDatastore(e){const n=sa(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new NS(r));var r;return function(i,o,a,c){return new MS(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>df(this.syncEngine,a,0),o=uf.D()?new uf:new RS,new US(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new tC(s,r,i,o,a,c);return l&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Q(e);L("RemoteStore","RemoteStore shutting down."),n.du.add(5),await ai(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
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
 */class mm{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):Qt("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class gC{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Ve.UNAUTHENTICATED,this.clientId=mg.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{L("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(L("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Xl(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function $a(t,e){t.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Yg(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function mf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await yC(t);L("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>hf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>hf(e.remoteStore,i)),t._onlineComponents=e}function mC(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function yC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){L("FirestoreClient","Using user provided OfflineComponentProvider");try{await $a(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!mC(n))throw n;co("Error using user provided cache. Falling back to memory cache: "+n),await $a(t,new gf)}}else L("FirestoreClient","Using default OfflineComponentProvider"),await $a(t,new gf);return t._offlineComponents}async function ym(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(L("FirestoreClient","Using user provided OnlineComponentProvider"),await mf(t,t._uninitializedComponentsProvider._online)):(L("FirestoreClient","Using default OnlineComponentProvider"),await mf(t,new pC))),t._onlineComponents}function vC(t){return ym(t).then(e=>e.syncEngine)}async function vm(t){const e=await ym(t),n=e.eventManager;return n.onListen=nC.bind(null,e.syncEngine),n.onUnlisten=rC.bind(null,e.syncEngine),n}function wC(t,e,n={}){const s=new zt;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new mm({next:h=>{i.enqueueAndForget(()=>cm(r,u));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new B(I.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new B(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new lm($l(o.path),l,{includeMetadataChanges:!0,xu:!0});return am(r,u)}(await vm(t),t.asyncQueue,e,n,s)),s.promise}function _C(t,e,n={}){const s=new zt;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new mm({next:h=>{i.enqueueAndForget(()=>cm(r,u)),h.fromCache&&a.source==="server"?c.reject(new B(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new lm(o,l,{includeMetadataChanges:!0,xu:!0});return am(r,u)}(await vm(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */const yf=new Map;/**
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
 */function wm(t,e,n){if(!n)throw new B(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function EC(t,e,n,s){if(e===!0&&s===!0)throw new B(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function vf(t){if(!j.isDocumentKey(t))throw new B(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function wf(t){if(j.isDocumentKey(t))throw new B(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function tu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":z()}function bt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=tu(t);throw new B(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class _f{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new B(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,EC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class oa{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _f({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new B(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _f(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new HT;switch(n.type){case"firstParty":return new WT(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new B(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=yf.get(e);n&&(L("ComponentProvider","Removing Datastore"),yf.delete(e),n.terminate())}(this),Promise.resolve()}}function IC(t,e,n,s={}){var r;const i=(t=bt(t,oa))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&co("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Ve.MOCK_USER;else{o=w_(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new B(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ve(c)}t._authCredentials=new qT(new gg(o,a))}}/**
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
 */class rt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new yn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new rt(this.firestore,e,this._key)}}class aa{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new aa(this.firestore,e,this._query)}}class yn extends aa{constructor(e,n,s){super(e,n,$l(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new rt(this.firestore,null,new j(e))}withConverter(e){return new yn(this.firestore,e,this._path)}}function TA(t,e,...n){if(t=We(t),wm("collection","path",e),t instanceof oa){const s=ye.fromString(e,...n);return wf(s),new yn(t,null,s)}{if(!(t instanceof rt||t instanceof yn))throw new B(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ye.fromString(e,...n));return wf(s),new yn(t.firestore,null,s)}}function TC(t,e,...n){if(t=We(t),arguments.length===1&&(e=mg.A()),wm("doc","path",e),t instanceof oa){const s=ye.fromString(e,...n);return vf(s),new rt(t,null,new j(s))}{if(!(t instanceof rt||t instanceof yn))throw new B(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ye.fromString(e,...n));return vf(s),new rt(t.firestore,t instanceof yn?t.converter:null,new j(s))}}/**
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
 */class bC{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Xg(this,"async_queue_retry"),this.qc=()=>{const n=Va();n&&L("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=Va();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=Va();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new zt;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!ri(e))throw e;L("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(s=>{this.Mc=s,this.Fc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Qt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Fc=!1,s))));return this.Nc=n,n}enqueueAfterDelay(e,n,s){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const r=Jl.createAndSchedule(this,e,n,s,i=>this.Qc(i));return this.$c.push(r),r}Uc(){this.Mc&&z()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class es extends oa{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new bC,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||_m(this),this._firestoreClient.terminate()}}function SC(t,e){const n=typeof t=="object"?t:xd(),s=typeof t=="string"?t:e||"(default)",r=sl(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=m_("firestore");i&&IC(r,...i)}return r}function nu(t){return t._firestoreClient||_m(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function _m(t){var e,n,s;const r=t._freezeSettings(),i=function(o,a,c,l){return new ob(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new gC(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
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
 */class Os{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Os(Ge.fromBase64String(e))}catch(n){throw new B(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Os(Ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ca{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class su{constructor(e){this._methodName=e}}/**
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
 */class ru{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
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
 */const CC=/^__.*__$/;class AC{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new bn(e,this.data,this.fieldMask,n,this.fieldTransforms):new ii(e,this.data,n,this.fieldTransforms)}}class Em{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new bn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Im(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class iu{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Jc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new iu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Zc({path:s,ta:!1});return r.ea(e),r}na(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Zc({path:s,ta:!1});return r.Jc(),r}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return mo(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(Im(this.Yc)&&CC.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class kC{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||sa(e)}ua(e,n,s,r=!1){return new iu({Yc:e,methodName:n,oa:s,path:je.emptyPath(),ta:!1,ra:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ou(t){const e=t._freezeSettings(),n=sa(t._databaseId);return new kC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Tm(t,e,n,s,r,i={}){const o=t.ua(i.merge||i.mergeFields?2:0,e,n,r);au("Data must be an object, but it was:",o,s);const a=bm(s,o);let c,l;if(i.merge)c=new at(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=Nc(e,h,n);if(!o.contains(d))throw new B(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Cm(u,d)||u.push(d)}c=new at(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new AC(new st(a),c,l)}class la extends su{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof la}}function RC(t,e,n,s){const r=t.ua(1,e,n);au("Data must be an object, but it was:",r,s);const i=[],o=st.empty();Xn(s,(c,l)=>{const u=cu(e,c,n);l=We(l);const h=r.na(u);if(l instanceof la)i.push(u);else{const d=ua(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new at(i);return new Em(o,a,r.fieldTransforms)}function DC(t,e,n,s,r,i){const o=t.ua(1,e,n),a=[Nc(e,s,n)],c=[r];if(i.length%2!=0)throw new B(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Nc(e,i[d])),c.push(i[d+1]);const l=[],u=st.empty();for(let d=a.length-1;d>=0;--d)if(!Cm(l,a[d])){const g=a[d];let v=c[d];v=We(v);const _=o.na(g);if(v instanceof la)l.push(g);else{const R=ua(v,_);R!=null&&(l.push(g),u.set(g,R))}}const h=new at(l);return new Em(u,h,o.fieldTransforms)}function ua(t,e){if(Sm(t=We(t)))return au("Unsupported field value:",e,t),bm(t,e);if(t instanceof su)return function(n,s){if(!Im(s.Yc))throw s.ia(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ia(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=ua(o,s.sa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=We(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return kb(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Re.fromDate(n);return{timestampValue:po(s.serializer,r)}}if(n instanceof Re){const r=new Re(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:po(s.serializer,r)}}if(n instanceof ru)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Os)return{bytesValue:qg(s.serializer,n._byteString)};if(n instanceof rt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ia(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:ql(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ia(`Unsupported field value: ${tu(n)}`)}(t,e)}function bm(t,e){const n={};return yg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xn(t,(s,r)=>{const i=ua(r,e.Xc(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Sm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Re||t instanceof ru||t instanceof Os||t instanceof rt||t instanceof su)}function au(t,e,n){if(!Sm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=tu(n);throw s==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+s)}}function Nc(t,e,n){if((e=We(e))instanceof ca)return e._internalPath;if(typeof e=="string")return cu(t,e);throw mo("Field path arguments must be of type string or ",t,!1,void 0,n)}const OC=new RegExp("[~\\*/\\[\\]]");function cu(t,e,n){if(e.search(OC)>=0)throw mo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ca(...e.split("."))._internalPath}catch{throw mo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function mo(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new B(I.INVALID_ARGUMENT,a+t+c)}function Cm(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Am{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new NC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(km("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class NC extends Am{data(){return super.data()}}function km(t,e){return typeof e=="string"?cu(t,e):e instanceof ca?e._internalPath:e._delegate._internalPath}/**
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
 */function PC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class xC{convertValue(e,n="none"){switch(Yn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Cs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw z()}}convertObject(e,n){const s={};return Xn(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new ru(be(e.latitude),be(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=wg(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(xr(e));default:return null}}convertTimestamp(e){const n=_n(e);return new Re(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ye.fromString(e);ge(Qg(s));const r=new Mr(s.get(1),s.get(3)),i=new j(s.popFirst(5));return r.isEqual(n)||Qt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Rm(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class rr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Dm extends Am{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Fi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(km("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Fi extends Dm{data(e={}){return super.data(e)}}class MC{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new rr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Fi(this._firestore,this._userDataWriter,s.key,s,new rr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Fi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new rr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Fi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new rr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:LC(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function LC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}/**
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
 */function bA(t){t=bt(t,rt);const e=bt(t.firestore,es);return wC(nu(e),t._key).then(n=>UC(e,t,n))}class Om extends xC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Os(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new rt(this.firestore,null,n)}}function SA(t){t=bt(t,aa);const e=bt(t.firestore,es),n=nu(e),s=new Om(e);return PC(t._query),_C(n,t._query).then(r=>new MC(e,s,t,r))}function CA(t,e,n){t=bt(t,rt);const s=bt(t.firestore,es),r=Rm(t.converter,e,n);return ha(s,[Tm(ou(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,ft.none())])}function AA(t,e,n,...s){t=bt(t,rt);const r=bt(t.firestore,es),i=ou(r);let o;return o=typeof(e=We(e))=="string"||e instanceof ca?DC(i,"updateDoc",t._key,e,n,s):RC(i,"updateDoc",t._key,e),ha(r,[o.toMutation(t._key,ft.exists(!0))])}function kA(t){return ha(bt(t.firestore,es),[new Bl(t._key,ft.none())])}function RA(t,e){const n=bt(t.firestore,es),s=TC(t),r=Rm(t.converter,e);return ha(n,[Tm(ou(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,ft.exists(!1))]).then(()=>s)}function ha(t,e){return function(n,s){const r=new zt;return n.asyncQueue.enqueueAndForget(async()=>iC(await vC(n),s,r)),r.promise}(nu(t),e)}function UC(t,e,n){const s=n.docs.get(e._key),r=new Om(t);return new Dm(t,r,e._key,s,new rr(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Bs=n})(Hr),Ts(new zn("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new es(new zT(n.getProvider("auth-internal")),new QT(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new B(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mr(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),mn(jh,"3.10.0",t),mn(jh,"3.10.0","esm2017")})();var FC="firebase",VC="9.19.1";/**
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
 */mn(FC,VC,"app");const $C={apiKey:"AIzaSyAEn441hlz28aSWIZpiyP-Hzg2ts09HoKs",authDomain:"polls-snoap-taylor.firebaseapp.com",projectId:"polls-snoap-taylor",storageBucket:"polls-snoap-taylor.appspot.com",messagingSenderId:"800775808502",appId:"1:800775808502:web:1775a14231f56cd929d3d7",measurementId:"G-YTCEVMCMR0"},BC=Pd($C),Ba=$I(BC),DA=SC(),jC={class:"navbar"},HC={class:"nav-options"},qC={key:0},zC={key:1},KC={class:"email"},WC={key:0},GC={key:1},QC={key:0},YC=Ae("h1",{style:{color:"darkblue","font-size":"50px"}},"Polls!",-1),JC=Ae("h4",{style:{"font-size":"large",color:"black"}},[nt(" Cameron Snoap"),Ae("br"),nt(" Kyle Taylor ")],-1),XC={key:0},ZC=Ae("h2",null,[Ae("br"),nt(" Click "),Ae("u",null,"Sign Up"),nt(" if you don't already have an account! ")],-1),eA=Ae("h2",null,[nt(" Or, click "),Ae("u",null,"Login"),nt(" if you do! ")],-1),tA=[ZC,eA],nA={key:1},sA=Ae("h1",null,[Ae("br"),nt(" Click "),Ae("u",null,"Polls"),nt(" in the top right corner to ")],-1),rA=Ae("h1",null," start making some awesome polls! ",-1),iA=[sA,rA],oA={id:"app"},aA=Gc({__name:"App",setup(t){const e=a_();c_().query.email;const s=Ai(""),r=Ai(""),i=Ai(!0);Ba.onAuthStateChanged(function(l){l?(i.value=!0,s.value=l.uid):(i.value=!1,s.value="")});async function o(){await new Promise(l=>{ir(r,u=>{l()})})}function a(l){l?(s.value=l.uid,r.value=l.email||"",l.uid):(s.value="",r.value="")}Ba.onAuthStateChanged(a),o();const c=()=>{Ba.signOut(),e.push("/")};return(l,u)=>{const h=pa("router-link"),d=pa("router-view"),g=pa("PlanetChart");return $t(),nn(Rt,null,[Ae("div",jC,[Ae("nav",HC,[i.value?($t(),nn("span",qC,[Ae("button",{onClick:c}," Logout ")])):($t(),nn("span",zC,[Ce(h,{to:"/SignUp"},{default:Xs(()=>[nt(" Sign Up ")]),_:1}),nt(" | "),Ce(h,{to:"/Login"},{default:Xs(()=>[nt(" Login ")]),_:1})]))]),Ae("div",KC,[l.$route.path!=="/Profile"&&l.$route.path!=="/"&&i.value?($t(),nn("span",WC,[Ce(h,{to:"/Profile"},{default:Xs(()=>[nt(" Profile ")]),_:1})])):Ws("",!0),l.$route.path!=="/Polls"&&l.$route.path!=="/Login"&&l.$route.path!=="/SignUp"?($t(),nn("span",GC,[Ce(h,{to:"/Polls"},{default:Xs(()=>[nt(" Polls ")]),_:1})])):Ws("",!0)])]),l.$route.path==="/"?($t(),nn("div",QC,[YC,JC,i.value?Ws("",!0):($t(),nn("span",XC,tA)),i.value?($t(),nn("span",nA,iA)):Ws("",!0)])):Ws("",!0),Ce(d),Ae("div",oA,[Ce(g)])],64)}}});const cA="modulepreload",lA=function(t){return"/"+t},Ef={},Ys=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=lA(i),i in Ef)return;Ef[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=r.length-1;u>=0;u--){const h=r[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":cA,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},Nm=i_({history:Ew("/"),routes:[{name:"Home",path:"/",component:()=>Ys(()=>Promise.resolve().then(()=>uA),void 0)},{name:"Polls",path:"/Polls",component:()=>Ys(()=>import("./Polls-5c75029a.js"),["assets/Polls-5c75029a.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/Polls-06da4ffe.css"])},{name:"SignUp",path:"/SignUp",component:()=>Ys(()=>import("./SignUp-5597eef6.js"),["assets/SignUp-5597eef6.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/SignUp-bd5de85e.css"])},{name:"Login",path:"/Login",component:()=>Ys(()=>import("./Login-31ec560f.js"),[])},{name:"Profile",path:"/Profile",component:()=>Ys(()=>import("./Profile-bfcdaa8c.js"),["assets/Profile-bfcdaa8c.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/Profile-047519c3.css"])}]}),uA=Object.freeze(Object.defineProperty({__proto__:null,default:Nm},Symbol.toStringTag,{value:"Module"})),Pm=nw(aA);Pm.use(Nm);Pm.mount("#app");export{vA as A,_A as B,CA as C,a_ as D,pa as E,Rt as F,ln as G,EA as H,wA as I,bA as J,xc as K,kA as L,Ai as a,Ba as b,nn as c,Gc as d,Ae as e,gA as f,Ws as g,mA as h,He as i,DA as j,c_ as k,ir as l,hA as m,nt as n,$t as o,fA as p,dA as q,TC as r,TA as s,SA as t,fs as u,yA as v,pA as w,RA as x,AA as y,Ce as z};
