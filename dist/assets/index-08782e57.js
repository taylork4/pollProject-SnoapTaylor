(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function lo(e,t){const n=Object.create(null),i=e.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function uo(e){if(B(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],s=fe(i)?tf(i):uo(i);if(s)for(const r in s)t[r]=s[r]}return t}else{if(fe(e))return e;if(re(e))return e}}const Qh=/;(?![^(]*\))/g,Zh=/:([^]+)/,ef=/\/\*.*?\*\//gs;function tf(e){const t={};return e.replace(ef,"").split(Qh).forEach(n=>{if(n){const i=n.split(Zh);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function ho(e){let t="";if(fe(e))t=e;else if(B(e))for(let n=0;n<e.length;n++){const i=ho(e[n]);i&&(t+=i+" ")}else if(re(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const nf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sf=lo(nf);function tl(e){return!!e||e===""}const rf=e=>fe(e)?e:e==null?"":B(e)||re(e)&&(e.toString===rl||!H(e.toString))?JSON.stringify(e,nl,2):String(e),nl=(e,t)=>t&&t.__v_isRef?nl(e,t.value):mn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:il(t)?{[`Set(${t.size})`]:[...t.values()]}:re(t)&&!B(t)&&!ol(t)?String(t):t,ne={},gn=[],Ge=()=>{},of=()=>!1,af=/^on[^a-z]/,As=e=>af.test(e),fo=e=>e.startsWith("onUpdate:"),Ae=Object.assign,po=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},cf=Object.prototype.hasOwnProperty,q=(e,t)=>cf.call(e,t),B=Array.isArray,mn=e=>Rs(e)==="[object Map]",il=e=>Rs(e)==="[object Set]",H=e=>typeof e=="function",fe=e=>typeof e=="string",go=e=>typeof e=="symbol",re=e=>e!==null&&typeof e=="object",sl=e=>re(e)&&H(e.then)&&H(e.catch),rl=Object.prototype.toString,Rs=e=>rl.call(e),lf=e=>Rs(e).slice(8,-1),ol=e=>Rs(e)==="[object Object]",mo=e=>fe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Xi=lo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ss=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},uf=/-(\w)/g,ct=Ss(e=>e.replace(uf,(t,n)=>n?n.toUpperCase():"")),hf=/\B([A-Z])/g,On=Ss(e=>e.replace(hf,"-$1").toLowerCase()),Cs=Ss(e=>e.charAt(0).toUpperCase()+e.slice(1)),nr=Ss(e=>e?`on${Cs(e)}`:""),si=(e,t)=>!Object.is(e,t),Yi=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},os=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Cr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let wa;const ff=()=>wa||(wa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ze;class df{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ze,!t&&ze&&(this.index=(ze.scopes||(ze.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=ze;try{return ze=this,t()}finally{ze=n}}}on(){ze=this}off(){ze=this.parent}stop(t){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function pf(e,t=ze){t&&t.active&&t.effects.push(e)}function gf(){return ze}const _o=e=>{const t=new Set(e);return t.w=0,t.n=0,t},al=e=>(e.w&Lt)>0,cl=e=>(e.n&Lt)>0,mf=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Lt},_f=e=>{const{deps:t}=e;if(t.length){let n=0;for(let i=0;i<t.length;i++){const s=t[i];al(s)&&!cl(s)?s.delete(e):t[n++]=s,s.w&=~Lt,s.n&=~Lt}t.length=n}},Or=new WeakMap;let zn=0,Lt=1;const kr=30;let Ke;const Xt=Symbol(""),Pr=Symbol("");class yo{constructor(t,n=null,i){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,pf(this,i)}run(){if(!this.active)return this.fn();let t=Ke,n=Ot;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ke,Ke=this,Ot=!0,Lt=1<<++zn,zn<=kr?mf(this):ba(this),this.fn()}finally{zn<=kr&&_f(this),Lt=1<<--zn,Ke=this.parent,Ot=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ke===this?this.deferStop=!0:this.active&&(ba(this),this.onStop&&this.onStop(),this.active=!1)}}function ba(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ot=!0;const ll=[];function kn(){ll.push(Ot),Ot=!1}function Pn(){const e=ll.pop();Ot=e===void 0?!0:e}function Oe(e,t,n){if(Ot&&Ke){let i=Or.get(e);i||Or.set(e,i=new Map);let s=i.get(n);s||i.set(n,s=_o()),ul(s)}}function ul(e,t){let n=!1;zn<=kr?cl(e)||(e.n|=Lt,n=!al(e)):n=!e.has(Ke),n&&(e.add(Ke),Ke.deps.push(e))}function pt(e,t,n,i,s,r){const o=Or.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&B(e)){const c=Number(i);o.forEach((l,h)=>{(h==="length"||h>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":B(e)?mo(n)&&a.push(o.get("length")):(a.push(o.get(Xt)),mn(e)&&a.push(o.get(Pr)));break;case"delete":B(e)||(a.push(o.get(Xt)),mn(e)&&a.push(o.get(Pr)));break;case"set":mn(e)&&a.push(o.get(Xt));break}if(a.length===1)a[0]&&Dr(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Dr(_o(c))}}function Dr(e,t){const n=B(e)?e:[...e];for(const i of n)i.computed&&Ta(i);for(const i of n)i.computed||Ta(i)}function Ta(e,t){(e!==Ke||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const yf=lo("__proto__,__v_isRef,__isVue"),hl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(go)),vf=vo(),Ef=vo(!1,!0),If=vo(!0),Aa=wf();function wf(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const i=J(this);for(let r=0,o=this.length;r<o;r++)Oe(i,"get",r+"");const s=i[t](...n);return s===-1||s===!1?i[t](...n.map(J)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){kn();const i=J(this)[t].apply(this,n);return Pn(),i}}),e}function bf(e){const t=J(this);return Oe(t,"has",e),t.hasOwnProperty(e)}function vo(e=!1,t=!1){return function(i,s,r){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&r===(e?t?jf:ml:t?gl:pl).get(i))return i;const o=B(i);if(!e){if(o&&q(Aa,s))return Reflect.get(Aa,s,r);if(s==="hasOwnProperty")return bf}const a=Reflect.get(i,s,r);return(go(s)?hl.has(s):yf(s))||(e||Oe(i,"get",s),t)?a:ve(a)?o&&mo(s)?a:a.value:re(a)?e?_l(a):Ii(a):a}}const Tf=fl(),Af=fl(!0);function fl(e=!1){return function(n,i,s,r){let o=n[i];if(wn(o)&&ve(o)&&!ve(s))return!1;if(!e&&(!as(s)&&!wn(s)&&(o=J(o),s=J(s)),!B(n)&&ve(o)&&!ve(s)))return o.value=s,!0;const a=B(n)&&mo(i)?Number(i)<n.length:q(n,i),c=Reflect.set(n,i,s,r);return n===J(r)&&(a?si(s,o)&&pt(n,"set",i,s):pt(n,"add",i,s)),c}}function Rf(e,t){const n=q(e,t);e[t];const i=Reflect.deleteProperty(e,t);return i&&n&&pt(e,"delete",t,void 0),i}function Sf(e,t){const n=Reflect.has(e,t);return(!go(t)||!hl.has(t))&&Oe(e,"has",t),n}function Cf(e){return Oe(e,"iterate",B(e)?"length":Xt),Reflect.ownKeys(e)}const dl={get:vf,set:Tf,deleteProperty:Rf,has:Sf,ownKeys:Cf},Of={get:If,set(e,t){return!0},deleteProperty(e,t){return!0}},kf=Ae({},dl,{get:Ef,set:Af}),Eo=e=>e,Os=e=>Reflect.getPrototypeOf(e);function ji(e,t,n=!1,i=!1){e=e.__v_raw;const s=J(e),r=J(t);n||(t!==r&&Oe(s,"get",t),Oe(s,"get",r));const{has:o}=Os(s),a=i?Eo:n?bo:ri;if(o.call(s,t))return a(e.get(t));if(o.call(s,r))return a(e.get(r));e!==s&&e.get(t)}function $i(e,t=!1){const n=this.__v_raw,i=J(n),s=J(e);return t||(e!==s&&Oe(i,"has",e),Oe(i,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function Bi(e,t=!1){return e=e.__v_raw,!t&&Oe(J(e),"iterate",Xt),Reflect.get(e,"size",e)}function Ra(e){e=J(e);const t=J(this);return Os(t).has.call(t,e)||(t.add(e),pt(t,"add",e,e)),this}function Sa(e,t){t=J(t);const n=J(this),{has:i,get:s}=Os(n);let r=i.call(n,e);r||(e=J(e),r=i.call(n,e));const o=s.call(n,e);return n.set(e,t),r?si(t,o)&&pt(n,"set",e,t):pt(n,"add",e,t),this}function Ca(e){const t=J(this),{has:n,get:i}=Os(t);let s=n.call(t,e);s||(e=J(e),s=n.call(t,e)),i&&i.call(t,e);const r=t.delete(e);return s&&pt(t,"delete",e,void 0),r}function Oa(){const e=J(this),t=e.size!==0,n=e.clear();return t&&pt(e,"clear",void 0,void 0),n}function Hi(e,t){return function(i,s){const r=this,o=r.__v_raw,a=J(o),c=t?Eo:e?bo:ri;return!e&&Oe(a,"iterate",Xt),o.forEach((l,h)=>i.call(s,c(l),c(h),r))}}function Wi(e,t,n){return function(...i){const s=this.__v_raw,r=J(s),o=mn(r),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=s[e](...i),h=n?Eo:t?bo:ri;return!t&&Oe(r,"iterate",c?Pr:Xt),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[h(f[0]),h(f[1])]:h(f),done:p}},[Symbol.iterator](){return this}}}}function Et(e){return function(...t){return e==="delete"?!1:this}}function Pf(){const e={get(r){return ji(this,r)},get size(){return Bi(this)},has:$i,add:Ra,set:Sa,delete:Ca,clear:Oa,forEach:Hi(!1,!1)},t={get(r){return ji(this,r,!1,!0)},get size(){return Bi(this)},has:$i,add:Ra,set:Sa,delete:Ca,clear:Oa,forEach:Hi(!1,!0)},n={get(r){return ji(this,r,!0)},get size(){return Bi(this,!0)},has(r){return $i.call(this,r,!0)},add:Et("add"),set:Et("set"),delete:Et("delete"),clear:Et("clear"),forEach:Hi(!0,!1)},i={get(r){return ji(this,r,!0,!0)},get size(){return Bi(this,!0)},has(r){return $i.call(this,r,!0)},add:Et("add"),set:Et("set"),delete:Et("delete"),clear:Et("clear"),forEach:Hi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=Wi(r,!1,!1),n[r]=Wi(r,!0,!1),t[r]=Wi(r,!1,!0),i[r]=Wi(r,!0,!0)}),[e,n,t,i]}const[Df,Nf,Lf,Mf]=Pf();function Io(e,t){const n=t?e?Mf:Lf:e?Nf:Df;return(i,s,r)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?i:Reflect.get(q(n,s)&&s in i?n:i,s,r)}const xf={get:Io(!1,!1)},Uf={get:Io(!1,!0)},Ff={get:Io(!0,!1)},pl=new WeakMap,gl=new WeakMap,ml=new WeakMap,jf=new WeakMap;function $f(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bf(e){return e.__v_skip||!Object.isExtensible(e)?0:$f(lf(e))}function Ii(e){return wn(e)?e:wo(e,!1,dl,xf,pl)}function Hf(e){return wo(e,!1,kf,Uf,gl)}function _l(e){return wo(e,!0,Of,Ff,ml)}function wo(e,t,n,i,s){if(!re(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=s.get(e);if(r)return r;const o=Bf(e);if(o===0)return e;const a=new Proxy(e,o===2?i:n);return s.set(e,a),a}function _n(e){return wn(e)?_n(e.__v_raw):!!(e&&e.__v_isReactive)}function wn(e){return!!(e&&e.__v_isReadonly)}function as(e){return!!(e&&e.__v_isShallow)}function yl(e){return _n(e)||wn(e)}function J(e){const t=e&&e.__v_raw;return t?J(t):e}function vl(e){return os(e,"__v_skip",!0),e}const ri=e=>re(e)?Ii(e):e,bo=e=>re(e)?_l(e):e;function El(e){Ot&&Ke&&(e=J(e),ul(e.dep||(e.dep=_o())))}function Il(e,t){e=J(e);const n=e.dep;n&&Dr(n)}function ve(e){return!!(e&&e.__v_isRef===!0)}function Qi(e){return wl(e,!1)}function Wf(e){return wl(e,!0)}function wl(e,t){return ve(e)?e:new Vf(e,t)}class Vf{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:J(t),this._value=n?t:ri(t)}get value(){return El(this),this._value}set value(t){const n=this.__v_isShallow||as(t)||wn(t);t=n?t:J(t),si(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:ri(t),Il(this))}}function Yt(e){return ve(e)?e.value:e}const zf={get:(e,t,n)=>Yt(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const s=e[t];return ve(s)&&!ve(n)?(s.value=n,!0):Reflect.set(e,t,n,i)}};function bl(e){return _n(e)?e:new Proxy(e,zf)}var Tl;class Kf{constructor(t,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Tl]=!1,this._dirty=!0,this.effect=new yo(t,()=>{this._dirty||(this._dirty=!0,Il(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const t=J(this);return El(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Tl="__v_isReadonly";function qf(e,t,n=!1){let i,s;const r=H(e);return r?(i=e,s=Ge):(i=e.get,s=e.set),new Kf(i,s,r||!s,n)}function kt(e,t,n,i){let s;try{s=i?e(...i):e()}catch(r){ks(r,t,n)}return s}function Je(e,t,n,i){if(H(e)){const r=kt(e,t,n,i);return r&&sl(r)&&r.catch(o=>{ks(o,t,n)}),r}const s=[];for(let r=0;r<e.length;r++)s.push(Je(e[r],t,n,i));return s}function ks(e,t,n,i=!0){const s=t?t.vnode:null;if(t){let r=t.parent;const o=t.proxy,a=n;for(;r;){const l=r.ec;if(l){for(let h=0;h<l.length;h++)if(l[h](e,o,a)===!1)return}r=r.parent}const c=t.appContext.config.errorHandler;if(c){kt(c,null,10,[e,o,a]);return}}Gf(e,n,s,i)}function Gf(e,t,n,i=!0){console.error(e)}let oi=!1,Nr=!1;const ye=[];let st=0;const yn=[];let ut=null,Vt=0;const Al=Promise.resolve();let To=null;function Rl(e){const t=To||Al;return e?t.then(this?e.bind(this):e):t}function Jf(e){let t=st+1,n=ye.length;for(;t<n;){const i=t+n>>>1;ai(ye[i])<e?t=i+1:n=i}return t}function Ao(e){(!ye.length||!ye.includes(e,oi&&e.allowRecurse?st+1:st))&&(e.id==null?ye.push(e):ye.splice(Jf(e.id),0,e),Sl())}function Sl(){!oi&&!Nr&&(Nr=!0,To=Al.then(Ol))}function Xf(e){const t=ye.indexOf(e);t>st&&ye.splice(t,1)}function Yf(e){B(e)?yn.push(...e):(!ut||!ut.includes(e,e.allowRecurse?Vt+1:Vt))&&yn.push(e),Sl()}function ka(e,t=oi?st+1:0){for(;t<ye.length;t++){const n=ye[t];n&&n.pre&&(ye.splice(t,1),t--,n())}}function Cl(e){if(yn.length){const t=[...new Set(yn)];if(yn.length=0,ut){ut.push(...t);return}for(ut=t,ut.sort((n,i)=>ai(n)-ai(i)),Vt=0;Vt<ut.length;Vt++)ut[Vt]();ut=null,Vt=0}}const ai=e=>e.id==null?1/0:e.id,Qf=(e,t)=>{const n=ai(e)-ai(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Ol(e){Nr=!1,oi=!0,ye.sort(Qf);const t=Ge;try{for(st=0;st<ye.length;st++){const n=ye[st];n&&n.active!==!1&&kt(n,null,14)}}finally{st=0,ye.length=0,Cl(),oi=!1,To=null,(ye.length||yn.length)&&Ol()}}function Zf(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||ne;let s=n;const r=t.startsWith("update:"),o=r&&t.slice(7);if(o&&o in i){const h=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=i[h]||ne;p&&(s=n.map(_=>fe(_)?_.trim():_)),f&&(s=n.map(Cr))}let a,c=i[a=nr(t)]||i[a=nr(ct(t))];!c&&r&&(c=i[a=nr(On(t))]),c&&Je(c,e,6,s);const l=i[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Je(l,e,6,s)}}function kl(e,t,n=!1){const i=t.emitsCache,s=i.get(e);if(s!==void 0)return s;const r=e.emits;let o={},a=!1;if(!H(e)){const c=l=>{const h=kl(l,t,!0);h&&(a=!0,Ae(o,h))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!a?(re(e)&&i.set(e,null),null):(B(r)?r.forEach(c=>o[c]=null):Ae(o,r),re(e)&&i.set(e,o),o)}function Ps(e,t){return!e||!As(t)?!1:(t=t.slice(2).replace(/Once$/,""),q(e,t[0].toLowerCase()+t.slice(1))||q(e,On(t))||q(e,t))}let Fe=null,Ds=null;function cs(e){const t=Fe;return Fe=e,Ds=e&&e.type.__scopeId||null,t}function VE(e){Ds=e}function zE(){Ds=null}function Kn(e,t=Fe,n){if(!t||e._n)return e;const i=(...s)=>{i._d&&ja(-1);const r=cs(t);let o;try{o=e(...s)}finally{cs(r),i._d&&ja(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function ir(e){const{type:t,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:c,emit:l,render:h,renderCache:f,data:p,setupState:_,ctx:T,inheritAttrs:C}=e;let $,O;const F=cs(e);try{if(n.shapeFlag&4){const G=s||i;$=it(h.call(G,G,f,r,_,p,T)),O=c}else{const G=t;$=it(G.length>1?G(r,{attrs:c,slots:a,emit:l}):G(r,null)),O=t.props?c:ed(c)}}catch(G){Zn.length=0,ks(G,e,1),$=he(tn)}let D=$;if(O&&C!==!1){const G=Object.keys(O),{shapeFlag:ue}=D;G.length&&ue&7&&(o&&G.some(fo)&&(O=td(O,o)),D=bn(D,O))}return n.dirs&&(D=bn(D),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&(D.transition=n.transition),$=D,cs(F),$}const ed=e=>{let t;for(const n in e)(n==="class"||n==="style"||As(n))&&((t||(t={}))[n]=e[n]);return t},td=(e,t)=>{const n={};for(const i in e)(!fo(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function nd(e,t,n){const{props:i,children:s,component:r}=e,{props:o,children:a,patchFlag:c}=t,l=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return i?Pa(i,o,l):!!o;if(c&8){const h=t.dynamicProps;for(let f=0;f<h.length;f++){const p=h[f];if(o[p]!==i[p]&&!Ps(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Pa(i,o,l):!0:!!o;return!1}function Pa(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(t[r]!==e[r]&&!Ps(n,r))return!0}return!1}function id({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const sd=e=>e.__isSuspense;function rd(e,t){t&&t.pendingBranch?B(e)?t.effects.push(...e):t.effects.push(e):Yf(e)}function Zi(e,t){if(le){let n=le.provides;const i=le.parent&&le.parent.provides;i===n&&(n=le.provides=Object.create(i)),n[e]=t}}function Xe(e,t,n=!1){const i=le||Fe;if(i){const s=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&H(t)?t.call(i.proxy):t}}const Vi={};function Yn(e,t,n){return Pl(e,t,n)}function Pl(e,t,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=ne){const a=gf()===(le==null?void 0:le.scope)?le:null;let c,l=!1,h=!1;if(ve(e)?(c=()=>e.value,l=as(e)):_n(e)?(c=()=>e,i=!0):B(e)?(h=!0,l=e.some(D=>_n(D)||as(D)),c=()=>e.map(D=>{if(ve(D))return D.value;if(_n(D))return Kt(D);if(H(D))return kt(D,a,2)})):H(e)?t?c=()=>kt(e,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),Je(e,a,3,[p])}:c=Ge,t&&i){const D=c;c=()=>Kt(D())}let f,p=D=>{f=O.onStop=()=>{kt(D,a,4)}},_;if(li)if(p=Ge,t?n&&Je(t,a,3,[c(),h?[]:void 0,p]):c(),s==="sync"){const D=Zd();_=D.__watcherHandles||(D.__watcherHandles=[])}else return Ge;let T=h?new Array(e.length).fill(Vi):Vi;const C=()=>{if(O.active)if(t){const D=O.run();(i||l||(h?D.some((G,ue)=>si(G,T[ue])):si(D,T)))&&(f&&f(),Je(t,a,3,[D,T===Vi?void 0:h&&T[0]===Vi?[]:T,p]),T=D)}else O.run()};C.allowRecurse=!!t;let $;s==="sync"?$=C:s==="post"?$=()=>Se(C,a&&a.suspense):(C.pre=!0,a&&(C.id=a.uid),$=()=>Ao(C));const O=new yo(c,$);t?n?C():T=O.run():s==="post"?Se(O.run.bind(O),a&&a.suspense):O.run();const F=()=>{O.stop(),a&&a.scope&&po(a.scope.effects,O)};return _&&_.push(F),F}function od(e,t,n){const i=this.proxy,s=fe(e)?e.includes(".")?Dl(i,e):()=>i[e]:e.bind(i,i);let r;H(t)?r=t:(r=t.handler,n=t);const o=le;Tn(this);const a=Pl(s,r.bind(i),n);return o?Tn(o):Qt(),a}function Dl(e,t){const n=t.split(".");return()=>{let i=e;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function Kt(e,t){if(!re(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ve(e))Kt(e.value,t);else if(B(e))for(let n=0;n<e.length;n++)Kt(e[n],t);else if(il(e)||mn(e))e.forEach(n=>{Kt(n,t)});else if(ol(e))for(const n in e)Kt(e[n],t);return e}function Ro(e){return H(e)?{setup:e,name:e.name}:e}const es=e=>!!e.type.__asyncLoader,Nl=e=>e.type.__isKeepAlive;function ad(e,t){Ll(e,"a",t)}function cd(e,t){Ll(e,"da",t)}function Ll(e,t,n=le){const i=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Ns(t,i,n),n){let s=n.parent;for(;s&&s.parent;)Nl(s.parent.vnode)&&ld(i,t,n,s),s=s.parent}}function ld(e,t,n,i){const s=Ns(t,e,i,!0);Ml(()=>{po(i[t],s)},n)}function Ns(e,t,n=le,i=!1){if(n){const s=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;kn(),Tn(n);const a=Je(t,n,e,o);return Qt(),Pn(),a});return i?s.unshift(r):s.push(r),r}}const _t=e=>(t,n=le)=>(!li||e==="sp")&&Ns(e,(...i)=>t(...i),n),ud=_t("bm"),hd=_t("m"),fd=_t("bu"),dd=_t("u"),pd=_t("bum"),Ml=_t("um"),gd=_t("sp"),md=_t("rtg"),_d=_t("rtc");function yd(e,t=le){Ns("ec",e,t)}function KE(e,t){const n=Fe;if(n===null)return e;const i=xs(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[o,a,c,l=ne]=t[r];o&&(H(o)&&(o={mounted:o,updated:o}),o.deep&&Kt(a),s.push({dir:o,instance:i,value:a,oldValue:void 0,arg:c,modifiers:l}))}return e}function $t(e,t,n,i){const s=e.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let c=a.dir[i];c&&(kn(),Je(c,n,8,[e.el,a,e,t]),Pn())}}const xl="components";function sr(e,t){return Ed(xl,e,!0,t)||e}const vd=Symbol();function Ed(e,t,n=!0,i=!1){const s=Fe||le;if(s){const r=s.type;if(e===xl){const a=Xd(r,!1);if(a&&(a===t||a===ct(t)||a===Cs(ct(t))))return r}const o=Da(s[e]||r[e],t)||Da(s.appContext[e],t);return!o&&i?r:o}}function Da(e,t){return e&&(e[t]||e[ct(t)]||e[Cs(ct(t))])}const Lr=e=>e?ql(e)?xs(e)||e.proxy:Lr(e.parent):null,Qn=Ae(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Lr(e.parent),$root:e=>Lr(e.root),$emit:e=>e.emit,$options:e=>So(e),$forceUpdate:e=>e.f||(e.f=()=>Ao(e.update)),$nextTick:e=>e.n||(e.n=Rl.bind(e.proxy)),$watch:e=>od.bind(e)}),rr=(e,t)=>e!==ne&&!e.__isScriptSetup&&q(e,t),Id={get({_:e},t){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const _=o[t];if(_!==void 0)switch(_){case 1:return i[t];case 2:return s[t];case 4:return n[t];case 3:return r[t]}else{if(rr(i,t))return o[t]=1,i[t];if(s!==ne&&q(s,t))return o[t]=2,s[t];if((l=e.propsOptions[0])&&q(l,t))return o[t]=3,r[t];if(n!==ne&&q(n,t))return o[t]=4,n[t];Mr&&(o[t]=0)}}const h=Qn[t];let f,p;if(h)return t==="$attrs"&&Oe(e,"get",t),h(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==ne&&q(n,t))return o[t]=4,n[t];if(p=c.config.globalProperties,q(p,t))return p[t]},set({_:e},t,n){const{data:i,setupState:s,ctx:r}=e;return rr(s,t)?(s[t]=n,!0):i!==ne&&q(i,t)?(i[t]=n,!0):q(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||e!==ne&&q(e,o)||rr(t,o)||(a=r[0])&&q(a,o)||q(i,o)||q(Qn,o)||q(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:q(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Mr=!0;function wd(e){const t=So(e),n=e.proxy,i=e.ctx;Mr=!1,t.beforeCreate&&Na(t.beforeCreate,e,"bc");const{data:s,computed:r,methods:o,watch:a,provide:c,inject:l,created:h,beforeMount:f,mounted:p,beforeUpdate:_,updated:T,activated:C,deactivated:$,beforeDestroy:O,beforeUnmount:F,destroyed:D,unmounted:G,render:ue,renderTracked:pe,renderTriggered:ke,errorCaptured:Be,serverPrefetch:Qe,expose:xe,inheritAttrs:vt,components:Ze,directives:an,filters:Ft}=t;if(l&&bd(l,i,null,e.appContext.config.unwrapInjectedRef),o)for(const ee in o){const Q=o[ee];H(Q)&&(i[ee]=Q.bind(n))}if(s){const ee=s.call(n,n);re(ee)&&(e.data=Ii(ee))}if(Mr=!0,r)for(const ee in r){const Q=r[ee],He=H(Q)?Q.bind(n,n):H(Q.get)?Q.get.bind(n,n):Ge,jt=!H(Q)&&H(Q.set)?Q.set.bind(n):Ge,We=Ue({get:He,set:jt});Object.defineProperty(i,ee,{enumerable:!0,configurable:!0,get:()=>We.value,set:Re=>We.value=Re})}if(a)for(const ee in a)Ul(a[ee],i,n,ee);if(c){const ee=H(c)?c.call(n):c;Reflect.ownKeys(ee).forEach(Q=>{Zi(Q,ee[Q])})}h&&Na(h,e,"c");function ae(ee,Q){B(Q)?Q.forEach(He=>ee(He.bind(n))):Q&&ee(Q.bind(n))}if(ae(ud,f),ae(hd,p),ae(fd,_),ae(dd,T),ae(ad,C),ae(cd,$),ae(yd,Be),ae(_d,pe),ae(md,ke),ae(pd,F),ae(Ml,G),ae(gd,Qe),B(xe))if(xe.length){const ee=e.exposed||(e.exposed={});xe.forEach(Q=>{Object.defineProperty(ee,Q,{get:()=>n[Q],set:He=>n[Q]=He})})}else e.exposed||(e.exposed={});ue&&e.render===Ge&&(e.render=ue),vt!=null&&(e.inheritAttrs=vt),Ze&&(e.components=Ze),an&&(e.directives=an)}function bd(e,t,n=Ge,i=!1){B(e)&&(e=xr(e));for(const s in e){const r=e[s];let o;re(r)?"default"in r?o=Xe(r.from||s,r.default,!0):o=Xe(r.from||s):o=Xe(r),ve(o)&&i?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):t[s]=o}}function Na(e,t,n){Je(B(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ul(e,t,n,i){const s=i.includes(".")?Dl(n,i):()=>n[i];if(fe(e)){const r=t[e];H(r)&&Yn(s,r)}else if(H(e))Yn(s,e.bind(n));else if(re(e))if(B(e))e.forEach(r=>Ul(r,t,n,i));else{const r=H(e.handler)?e.handler.bind(n):t[e.handler];H(r)&&Yn(s,r,e)}}function So(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,a=r.get(t);let c;return a?c=a:!s.length&&!n&&!i?c=t:(c={},s.length&&s.forEach(l=>ls(c,l,o,!0)),ls(c,t,o)),re(t)&&r.set(t,c),c}function ls(e,t,n,i=!1){const{mixins:s,extends:r}=t;r&&ls(e,r,n,!0),s&&s.forEach(o=>ls(e,o,n,!0));for(const o in t)if(!(i&&o==="expose")){const a=Td[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Td={data:La,props:Ht,emits:Ht,methods:Ht,computed:Ht,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:Ht,directives:Ht,watch:Rd,provide:La,inject:Ad};function La(e,t){return t?e?function(){return Ae(H(e)?e.call(this,this):e,H(t)?t.call(this,this):t)}:t:e}function Ad(e,t){return Ht(xr(e),xr(t))}function xr(e){if(B(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function be(e,t){return e?[...new Set([].concat(e,t))]:t}function Ht(e,t){return e?Ae(Ae(Object.create(null),e),t):t}function Rd(e,t){if(!e)return t;if(!t)return e;const n=Ae(Object.create(null),e);for(const i in t)n[i]=be(e[i],t[i]);return n}function Sd(e,t,n,i=!1){const s={},r={};os(r,Ms,1),e.propsDefaults=Object.create(null),Fl(e,t,s,r);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=i?s:Hf(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function Cd(e,t,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=e,a=J(s),[c]=e.propsOptions;let l=!1;if((i||o>0)&&!(o&16)){if(o&8){const h=e.vnode.dynamicProps;for(let f=0;f<h.length;f++){let p=h[f];if(Ps(e.emitsOptions,p))continue;const _=t[p];if(c)if(q(r,p))_!==r[p]&&(r[p]=_,l=!0);else{const T=ct(p);s[T]=Ur(c,a,T,_,e,!1)}else _!==r[p]&&(r[p]=_,l=!0)}}}else{Fl(e,t,s,r)&&(l=!0);let h;for(const f in a)(!t||!q(t,f)&&((h=On(f))===f||!q(t,h)))&&(c?n&&(n[f]!==void 0||n[h]!==void 0)&&(s[f]=Ur(c,a,f,void 0,e,!0)):delete s[f]);if(r!==a)for(const f in r)(!t||!q(t,f))&&(delete r[f],l=!0)}l&&pt(e,"set","$attrs")}function Fl(e,t,n,i){const[s,r]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(Xi(c))continue;const l=t[c];let h;s&&q(s,h=ct(c))?!r||!r.includes(h)?n[h]=l:(a||(a={}))[h]=l:Ps(e.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,o=!0)}if(r){const c=J(n),l=a||ne;for(let h=0;h<r.length;h++){const f=r[h];n[f]=Ur(s,c,f,l[f],e,!q(l,f))}}return o}function Ur(e,t,n,i,s,r){const o=e[n];if(o!=null){const a=q(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&H(c)){const{propsDefaults:l}=s;n in l?i=l[n]:(Tn(s),i=l[n]=c.call(null,t),Qt())}else i=c}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===On(n))&&(i=!0))}return i}function jl(e,t,n=!1){const i=t.propsCache,s=i.get(e);if(s)return s;const r=e.props,o={},a=[];let c=!1;if(!H(e)){const h=f=>{c=!0;const[p,_]=jl(f,t,!0);Ae(o,p),_&&a.push(..._)};!n&&t.mixins.length&&t.mixins.forEach(h),e.extends&&h(e.extends),e.mixins&&e.mixins.forEach(h)}if(!r&&!c)return re(e)&&i.set(e,gn),gn;if(B(r))for(let h=0;h<r.length;h++){const f=ct(r[h]);Ma(f)&&(o[f]=ne)}else if(r)for(const h in r){const f=ct(h);if(Ma(f)){const p=r[h],_=o[f]=B(p)||H(p)?{type:p}:Object.assign({},p);if(_){const T=Fa(Boolean,_.type),C=Fa(String,_.type);_[0]=T>-1,_[1]=C<0||T<C,(T>-1||q(_,"default"))&&a.push(f)}}}const l=[o,a];return re(e)&&i.set(e,l),l}function Ma(e){return e[0]!=="$"}function xa(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Ua(e,t){return xa(e)===xa(t)}function Fa(e,t){return B(t)?t.findIndex(n=>Ua(n,e)):H(t)&&Ua(t,e)?0:-1}const $l=e=>e[0]==="_"||e==="$stable",Co=e=>B(e)?e.map(it):[it(e)],Od=(e,t,n)=>{if(t._n)return t;const i=Kn((...s)=>Co(t(...s)),n);return i._c=!1,i},Bl=(e,t,n)=>{const i=e._ctx;for(const s in e){if($l(s))continue;const r=e[s];if(H(r))t[s]=Od(s,r,i);else if(r!=null){const o=Co(r);t[s]=()=>o}}},Hl=(e,t)=>{const n=Co(t);e.slots.default=()=>n},kd=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=J(t),os(t,"_",n)):Bl(t,e.slots={})}else e.slots={},t&&Hl(e,t);os(e.slots,Ms,1)},Pd=(e,t,n)=>{const{vnode:i,slots:s}=e;let r=!0,o=ne;if(i.shapeFlag&32){const a=t._;a?n&&a===1?r=!1:(Ae(s,t),!n&&a===1&&delete s._):(r=!t.$stable,Bl(t,s)),o=t}else t&&(Hl(e,t),o={default:1});if(r)for(const a in s)!$l(a)&&!(a in o)&&delete s[a]};function Wl(){return{app:null,config:{isNativeTag:of,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Dd=0;function Nd(e,t){return function(i,s=null){H(i)||(i=Object.assign({},i)),s!=null&&!re(s)&&(s=null);const r=Wl(),o=new Set;let a=!1;const c=r.app={_uid:Dd++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:ep,get config(){return r.config},set config(l){},use(l,...h){return o.has(l)||(l&&H(l.install)?(o.add(l),l.install(c,...h)):H(l)&&(o.add(l),l(c,...h))),c},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),c},component(l,h){return h?(r.components[l]=h,c):r.components[l]},directive(l,h){return h?(r.directives[l]=h,c):r.directives[l]},mount(l,h,f){if(!a){const p=he(i,s);return p.appContext=r,h&&t?t(p,l):e(p,l,f),a=!0,c._container=l,l.__vue_app__=c,xs(p.component)||p.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,h){return r.provides[l]=h,c}};return c}}function Fr(e,t,n,i,s=!1){if(B(e)){e.forEach((p,_)=>Fr(p,t&&(B(t)?t[_]:t),n,i,s));return}if(es(i)&&!s)return;const r=i.shapeFlag&4?xs(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:c}=e,l=t&&t.r,h=a.refs===ne?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(fe(l)?(h[l]=null,q(f,l)&&(f[l]=null)):ve(l)&&(l.value=null)),H(c))kt(c,a,12,[o,h]);else{const p=fe(c),_=ve(c);if(p||_){const T=()=>{if(e.f){const C=p?q(f,c)?f[c]:h[c]:c.value;s?B(C)&&po(C,r):B(C)?C.includes(r)||C.push(r):p?(h[c]=[r],q(f,c)&&(f[c]=h[c])):(c.value=[r],e.k&&(h[e.k]=c.value))}else p?(h[c]=o,q(f,c)&&(f[c]=o)):_&&(c.value=o,e.k&&(h[e.k]=o))};o?(T.id=-1,Se(T,n)):T()}}}const Se=rd;function Ld(e){return Md(e)}function Md(e,t){const n=ff();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:h,parentNode:f,nextSibling:p,setScopeId:_=Ge,insertStaticContent:T}=e,C=(u,d,g,m=null,v=null,w=null,R=!1,I=null,b=!!d.dynamicChildren)=>{if(u===d)return;u&&!Hn(u,d)&&(m=A(u),Re(u,v,w,!0),u=null),d.patchFlag===-2&&(b=!1,d.dynamicChildren=null);const{type:E,ref:L,shapeFlag:k}=d;switch(E){case Ls:$(u,d,g,m);break;case tn:O(u,d,g,m);break;case or:u==null&&F(d,g,m,R);break;case nt:Ze(u,d,g,m,v,w,R,I,b);break;default:k&1?ue(u,d,g,m,v,w,R,I,b):k&6?an(u,d,g,m,v,w,R,I,b):(k&64||k&128)&&E.process(u,d,g,m,v,w,R,I,b,K)}L!=null&&v&&Fr(L,u&&u.ref,w,d||u,!d)},$=(u,d,g,m)=>{if(u==null)i(d.el=a(d.children),g,m);else{const v=d.el=u.el;d.children!==u.children&&l(v,d.children)}},O=(u,d,g,m)=>{u==null?i(d.el=c(d.children||""),g,m):d.el=u.el},F=(u,d,g,m)=>{[u.el,u.anchor]=T(u.children,d,g,m,u.el,u.anchor)},D=({el:u,anchor:d},g,m)=>{let v;for(;u&&u!==d;)v=p(u),i(u,g,m),u=v;i(d,g,m)},G=({el:u,anchor:d})=>{let g;for(;u&&u!==d;)g=p(u),s(u),u=g;s(d)},ue=(u,d,g,m,v,w,R,I,b)=>{R=R||d.type==="svg",u==null?pe(d,g,m,v,w,R,I,b):Qe(u,d,v,w,R,I,b)},pe=(u,d,g,m,v,w,R,I)=>{let b,E;const{type:L,props:k,shapeFlag:M,transition:j,dirs:V}=u;if(b=u.el=o(u.type,w,k&&k.is,k),M&8?h(b,u.children):M&16&&Be(u.children,b,null,m,v,w&&L!=="foreignObject",R,I),V&&$t(u,null,m,"created"),ke(b,u,u.scopeId,R,m),k){for(const Z in k)Z!=="value"&&!Xi(Z)&&r(b,Z,null,k[Z],w,u.children,m,v,S);"value"in k&&r(b,"value",null,k.value),(E=k.onVnodeBeforeMount)&&tt(E,m,u)}V&&$t(u,null,m,"beforeMount");const te=(!v||v&&!v.pendingBranch)&&j&&!j.persisted;te&&j.beforeEnter(b),i(b,d,g),((E=k&&k.onVnodeMounted)||te||V)&&Se(()=>{E&&tt(E,m,u),te&&j.enter(b),V&&$t(u,null,m,"mounted")},v)},ke=(u,d,g,m,v)=>{if(g&&_(u,g),m)for(let w=0;w<m.length;w++)_(u,m[w]);if(v){let w=v.subTree;if(d===w){const R=v.vnode;ke(u,R,R.scopeId,R.slotScopeIds,v.parent)}}},Be=(u,d,g,m,v,w,R,I,b=0)=>{for(let E=b;E<u.length;E++){const L=u[E]=I?bt(u[E]):it(u[E]);C(null,L,d,g,m,v,w,R,I)}},Qe=(u,d,g,m,v,w,R)=>{const I=d.el=u.el;let{patchFlag:b,dynamicChildren:E,dirs:L}=d;b|=u.patchFlag&16;const k=u.props||ne,M=d.props||ne;let j;g&&Bt(g,!1),(j=M.onVnodeBeforeUpdate)&&tt(j,g,d,u),L&&$t(d,u,g,"beforeUpdate"),g&&Bt(g,!0);const V=v&&d.type!=="foreignObject";if(E?xe(u.dynamicChildren,E,I,g,m,V,w):R||Q(u,d,I,null,g,m,V,w,!1),b>0){if(b&16)vt(I,d,k,M,g,m,v);else if(b&2&&k.class!==M.class&&r(I,"class",null,M.class,v),b&4&&r(I,"style",k.style,M.style,v),b&8){const te=d.dynamicProps;for(let Z=0;Z<te.length;Z++){const ce=te[Z],Ve=k[ce],ln=M[ce];(ln!==Ve||ce==="value")&&r(I,ce,Ve,ln,v,u.children,g,m,S)}}b&1&&u.children!==d.children&&h(I,d.children)}else!R&&E==null&&vt(I,d,k,M,g,m,v);((j=M.onVnodeUpdated)||L)&&Se(()=>{j&&tt(j,g,d,u),L&&$t(d,u,g,"updated")},m)},xe=(u,d,g,m,v,w,R)=>{for(let I=0;I<d.length;I++){const b=u[I],E=d[I],L=b.el&&(b.type===nt||!Hn(b,E)||b.shapeFlag&70)?f(b.el):g;C(b,E,L,null,m,v,w,R,!0)}},vt=(u,d,g,m,v,w,R)=>{if(g!==m){if(g!==ne)for(const I in g)!Xi(I)&&!(I in m)&&r(u,I,g[I],null,R,d.children,v,w,S);for(const I in m){if(Xi(I))continue;const b=m[I],E=g[I];b!==E&&I!=="value"&&r(u,I,E,b,R,d.children,v,w,S)}"value"in m&&r(u,"value",g.value,m.value)}},Ze=(u,d,g,m,v,w,R,I,b)=>{const E=d.el=u?u.el:a(""),L=d.anchor=u?u.anchor:a("");let{patchFlag:k,dynamicChildren:M,slotScopeIds:j}=d;j&&(I=I?I.concat(j):j),u==null?(i(E,g,m),i(L,g,m),Be(d.children,g,L,v,w,R,I,b)):k>0&&k&64&&M&&u.dynamicChildren?(xe(u.dynamicChildren,M,g,v,w,R,I),(d.key!=null||v&&d===v.subTree)&&Vl(u,d,!0)):Q(u,d,g,L,v,w,R,I,b)},an=(u,d,g,m,v,w,R,I,b)=>{d.slotScopeIds=I,u==null?d.shapeFlag&512?v.ctx.activate(d,g,m,R,b):Ft(d,g,m,v,w,R,b):jn(u,d,b)},Ft=(u,d,g,m,v,w,R)=>{const I=u.component=zd(u,m,v);if(Nl(u)&&(I.ctx.renderer=K),Kd(I),I.asyncDep){if(v&&v.registerDep(I,ae),!u.el){const b=I.subTree=he(tn);O(null,b,d,g)}return}ae(I,u,d,g,v,w,R)},jn=(u,d,g)=>{const m=d.component=u.component;if(nd(u,d,g))if(m.asyncDep&&!m.asyncResolved){ee(m,d,g);return}else m.next=d,Xf(m.update),m.update();else d.el=u.el,m.vnode=d},ae=(u,d,g,m,v,w,R)=>{const I=()=>{if(u.isMounted){let{next:L,bu:k,u:M,parent:j,vnode:V}=u,te=L,Z;Bt(u,!1),L?(L.el=V.el,ee(u,L,R)):L=V,k&&Yi(k),(Z=L.props&&L.props.onVnodeBeforeUpdate)&&tt(Z,j,L,V),Bt(u,!0);const ce=ir(u),Ve=u.subTree;u.subTree=ce,C(Ve,ce,f(Ve.el),A(Ve),u,v,w),L.el=ce.el,te===null&&id(u,ce.el),M&&Se(M,v),(Z=L.props&&L.props.onVnodeUpdated)&&Se(()=>tt(Z,j,L,V),v)}else{let L;const{el:k,props:M}=d,{bm:j,m:V,parent:te}=u,Z=es(d);if(Bt(u,!1),j&&Yi(j),!Z&&(L=M&&M.onVnodeBeforeMount)&&tt(L,te,d),Bt(u,!0),k&&W){const ce=()=>{u.subTree=ir(u),W(k,u.subTree,u,v,null)};Z?d.type.__asyncLoader().then(()=>!u.isUnmounted&&ce()):ce()}else{const ce=u.subTree=ir(u);C(null,ce,g,m,u,v,w),d.el=ce.el}if(V&&Se(V,v),!Z&&(L=M&&M.onVnodeMounted)){const ce=d;Se(()=>tt(L,te,ce),v)}(d.shapeFlag&256||te&&es(te.vnode)&&te.vnode.shapeFlag&256)&&u.a&&Se(u.a,v),u.isMounted=!0,d=g=m=null}},b=u.effect=new yo(I,()=>Ao(E),u.scope),E=u.update=()=>b.run();E.id=u.uid,Bt(u,!0),E()},ee=(u,d,g)=>{d.component=u;const m=u.vnode.props;u.vnode=d,u.next=null,Cd(u,d.props,m,g),Pd(u,d.children,g),kn(),ka(),Pn()},Q=(u,d,g,m,v,w,R,I,b=!1)=>{const E=u&&u.children,L=u?u.shapeFlag:0,k=d.children,{patchFlag:M,shapeFlag:j}=d;if(M>0){if(M&128){jt(E,k,g,m,v,w,R,I,b);return}else if(M&256){He(E,k,g,m,v,w,R,I,b);return}}j&8?(L&16&&S(E,v,w),k!==E&&h(g,k)):L&16?j&16?jt(E,k,g,m,v,w,R,I,b):S(E,v,w,!0):(L&8&&h(g,""),j&16&&Be(k,g,m,v,w,R,I,b))},He=(u,d,g,m,v,w,R,I,b)=>{u=u||gn,d=d||gn;const E=u.length,L=d.length,k=Math.min(E,L);let M;for(M=0;M<k;M++){const j=d[M]=b?bt(d[M]):it(d[M]);C(u[M],j,g,null,v,w,R,I,b)}E>L?S(u,v,w,!0,!1,k):Be(d,g,m,v,w,R,I,b,k)},jt=(u,d,g,m,v,w,R,I,b)=>{let E=0;const L=d.length;let k=u.length-1,M=L-1;for(;E<=k&&E<=M;){const j=u[E],V=d[E]=b?bt(d[E]):it(d[E]);if(Hn(j,V))C(j,V,g,null,v,w,R,I,b);else break;E++}for(;E<=k&&E<=M;){const j=u[k],V=d[M]=b?bt(d[M]):it(d[M]);if(Hn(j,V))C(j,V,g,null,v,w,R,I,b);else break;k--,M--}if(E>k){if(E<=M){const j=M+1,V=j<L?d[j].el:m;for(;E<=M;)C(null,d[E]=b?bt(d[E]):it(d[E]),g,V,v,w,R,I,b),E++}}else if(E>M)for(;E<=k;)Re(u[E],v,w,!0),E++;else{const j=E,V=E,te=new Map;for(E=V;E<=M;E++){const Pe=d[E]=b?bt(d[E]):it(d[E]);Pe.key!=null&&te.set(Pe.key,E)}let Z,ce=0;const Ve=M-V+1;let ln=!1,va=0;const $n=new Array(Ve);for(E=0;E<Ve;E++)$n[E]=0;for(E=j;E<=k;E++){const Pe=u[E];if(ce>=Ve){Re(Pe,v,w,!0);continue}let et;if(Pe.key!=null)et=te.get(Pe.key);else for(Z=V;Z<=M;Z++)if($n[Z-V]===0&&Hn(Pe,d[Z])){et=Z;break}et===void 0?Re(Pe,v,w,!0):($n[et-V]=E+1,et>=va?va=et:ln=!0,C(Pe,d[et],g,null,v,w,R,I,b),ce++)}const Ea=ln?xd($n):gn;for(Z=Ea.length-1,E=Ve-1;E>=0;E--){const Pe=V+E,et=d[Pe],Ia=Pe+1<L?d[Pe+1].el:m;$n[E]===0?C(null,et,g,Ia,v,w,R,I,b):ln&&(Z<0||E!==Ea[Z]?We(et,g,Ia,2):Z--)}}},We=(u,d,g,m,v=null)=>{const{el:w,type:R,transition:I,children:b,shapeFlag:E}=u;if(E&6){We(u.component.subTree,d,g,m);return}if(E&128){u.suspense.move(d,g,m);return}if(E&64){R.move(u,d,g,K);return}if(R===nt){i(w,d,g);for(let k=0;k<b.length;k++)We(b[k],d,g,m);i(u.anchor,d,g);return}if(R===or){D(u,d,g);return}if(m!==2&&E&1&&I)if(m===0)I.beforeEnter(w),i(w,d,g),Se(()=>I.enter(w),v);else{const{leave:k,delayLeave:M,afterLeave:j}=I,V=()=>i(w,d,g),te=()=>{k(w,()=>{V(),j&&j()})};M?M(w,V,te):te()}else i(w,d,g)},Re=(u,d,g,m=!1,v=!1)=>{const{type:w,props:R,ref:I,children:b,dynamicChildren:E,shapeFlag:L,patchFlag:k,dirs:M}=u;if(I!=null&&Fr(I,null,g,u,!0),L&256){d.ctx.deactivate(u);return}const j=L&1&&M,V=!es(u);let te;if(V&&(te=R&&R.onVnodeBeforeUnmount)&&tt(te,d,u),L&6)y(u.component,g,m);else{if(L&128){u.suspense.unmount(g,m);return}j&&$t(u,null,d,"beforeUnmount"),L&64?u.type.remove(u,d,g,v,K,m):E&&(w!==nt||k>0&&k&64)?S(E,d,g,!1,!0):(w===nt&&k&384||!v&&L&16)&&S(b,d,g),m&&cn(u)}(V&&(te=R&&R.onVnodeUnmounted)||j)&&Se(()=>{te&&tt(te,d,u),j&&$t(u,null,d,"unmounted")},g)},cn=u=>{const{type:d,el:g,anchor:m,transition:v}=u;if(d===nt){Fi(g,m);return}if(d===or){G(u);return}const w=()=>{s(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(u.shapeFlag&1&&v&&!v.persisted){const{leave:R,delayLeave:I}=v,b=()=>R(g,w);I?I(u.el,w,b):b()}else w()},Fi=(u,d)=>{let g;for(;u!==d;)g=p(u),s(u),u=g;s(d)},y=(u,d,g)=>{const{bum:m,scope:v,update:w,subTree:R,um:I}=u;m&&Yi(m),v.stop(),w&&(w.active=!1,Re(R,u,d,g)),I&&Se(I,d),Se(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},S=(u,d,g,m=!1,v=!1,w=0)=>{for(let R=w;R<u.length;R++)Re(u[R],d,g,m,v)},A=u=>u.shapeFlag&6?A(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),N=(u,d,g)=>{u==null?d._vnode&&Re(d._vnode,null,null,!0):C(d._vnode||null,u,d,null,null,null,g),ka(),Cl(),d._vnode=u},K={p:C,um:Re,m:We,r:cn,mt:Ft,mc:Be,pc:Q,pbc:xe,n:A,o:e};let se,W;return t&&([se,W]=t(K)),{render:N,hydrate:se,createApp:Nd(N,se)}}function Bt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Vl(e,t,n=!1){const i=e.children,s=t.children;if(B(i)&&B(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=bt(s[r]),a.el=o.el),n||Vl(o,a)),a.type===Ls&&(a.el=o.el)}}function xd(e){const t=e.slice(),n=[0];let i,s,r,o,a;const c=e.length;for(i=0;i<c;i++){const l=e[i];if(l!==0){if(s=n[n.length-1],e[s]<l){t[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,e[n[a]]<l?r=a+1:o=a;l<e[n[r]]&&(r>0&&(t[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=t[o];return n}const Ud=e=>e.__isTeleport,nt=Symbol(void 0),Ls=Symbol(void 0),tn=Symbol(void 0),or=Symbol(void 0),Zn=[];let qe=null;function hn(e=!1){Zn.push(qe=e?null:[])}function Fd(){Zn.pop(),qe=Zn[Zn.length-1]||null}let ci=1;function ja(e){ci+=e}function zl(e){return e.dynamicChildren=ci>0?qe||gn:null,Fd(),ci>0&&qe&&qe.push(e),e}function Bn(e,t,n,i,s,r){return zl(Ce(e,t,n,i,s,r,!0))}function jd(e,t,n,i,s){return zl(he(e,t,n,i,s,!0))}function jr(e){return e?e.__v_isVNode===!0:!1}function Hn(e,t){return e.type===t.type&&e.key===t.key}const Ms="__vInternal",Kl=({key:e})=>e??null,ts=({ref:e,ref_key:t,ref_for:n})=>e!=null?fe(e)||ve(e)||H(e)?{i:Fe,r:e,k:t,f:!!n}:e:null;function Ce(e,t=null,n=null,i=0,s=null,r=e===nt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Kl(t),ref:t&&ts(t),scopeId:Ds,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Fe};return a?(Oo(c,n),r&128&&e.normalize(c)):n&&(c.shapeFlag|=fe(n)?8:16),ci>0&&!o&&qe&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&qe.push(c),c}const he=$d;function $d(e,t=null,n=null,i=0,s=null,r=!1){if((!e||e===vd)&&(e=tn),jr(e)){const a=bn(e,t,!0);return n&&Oo(a,n),ci>0&&!r&&qe&&(a.shapeFlag&6?qe[qe.indexOf(e)]=a:qe.push(a)),a.patchFlag|=-2,a}if(Yd(e)&&(e=e.__vccOpts),t){t=Bd(t);let{class:a,style:c}=t;a&&!fe(a)&&(t.class=ho(a)),re(c)&&(yl(c)&&!B(c)&&(c=Ae({},c)),t.style=uo(c))}const o=fe(e)?1:sd(e)?128:Ud(e)?64:re(e)?4:H(e)?2:0;return Ce(e,t,n,i,s,o,r,!0)}function Bd(e){return e?yl(e)||Ms in e?Ae({},e):e:null}function bn(e,t,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=e,a=t?Hd(i||{},t):i;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Kl(a),ref:t&&t.ref?n&&s?B(s)?s.concat(ts(t)):[s,ts(t)]:ts(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==nt?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&bn(e.ssContent),ssFallback:e.ssFallback&&bn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function De(e=" ",t=0){return he(Ls,null,e,t)}function $a(e="",t=!1){return t?(hn(),jd(tn,null,e)):he(tn,null,e)}function it(e){return e==null||typeof e=="boolean"?he(tn):B(e)?he(nt,null,e.slice()):typeof e=="object"?bt(e):he(Ls,null,String(e))}function bt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:bn(e)}function Oo(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(B(t))n=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),Oo(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(Ms in t)?t._ctx=Fe:s===3&&Fe&&(Fe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else H(t)?(t={default:t,_ctx:Fe},n=32):(t=String(t),i&64?(n=16,t=[De(t)]):n=8);e.children=t,e.shapeFlag|=n}function Hd(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=ho([t.class,i.class]));else if(s==="style")t.style=uo([t.style,i.style]);else if(As(s)){const r=t[s],o=i[s];o&&r!==o&&!(B(r)&&r.includes(o))&&(t[s]=r?[].concat(r,o):o)}else s!==""&&(t[s]=i[s])}return t}function tt(e,t,n,i=null){Je(e,t,7,[n,i])}const Wd=Wl();let Vd=0;function zd(e,t,n){const i=e.type,s=(t?t.appContext:e.appContext)||Wd,r={uid:Vd++,vnode:e,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new df(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:jl(i,s),emitsOptions:kl(i,s),emit:null,emitted:null,propsDefaults:ne,inheritAttrs:i.inheritAttrs,ctx:ne,data:ne,props:ne,attrs:ne,slots:ne,refs:ne,setupState:ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Zf.bind(null,r),e.ce&&e.ce(r),r}let le=null;const Tn=e=>{le=e,e.scope.on()},Qt=()=>{le&&le.scope.off(),le=null};function ql(e){return e.vnode.shapeFlag&4}let li=!1;function Kd(e,t=!1){li=t;const{props:n,children:i}=e.vnode,s=ql(e);Sd(e,n,s,t),kd(e,i);const r=s?qd(e,t):void 0;return li=!1,r}function qd(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=vl(new Proxy(e.ctx,Id));const{setup:i}=n;if(i){const s=e.setupContext=i.length>1?Jd(e):null;Tn(e),kn();const r=kt(i,e,0,[e.props,s]);if(Pn(),Qt(),sl(r)){if(r.then(Qt,Qt),t)return r.then(o=>{Ba(e,o,t)}).catch(o=>{ks(o,e,0)});e.asyncDep=r}else Ba(e,r,t)}else Gl(e,t)}function Ba(e,t,n){H(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:re(t)&&(e.setupState=bl(t)),Gl(e,n)}let Ha;function Gl(e,t,n){const i=e.type;if(!e.render){if(!t&&Ha&&!i.render){const s=i.template||So(e).template;if(s){const{isCustomElement:r,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=i,l=Ae(Ae({isCustomElement:r,delimiters:a},o),c);i.render=Ha(s,l)}}e.render=i.render||Ge}Tn(e),kn(),wd(e),Pn(),Qt()}function Gd(e){return new Proxy(e.attrs,{get(t,n){return Oe(e,"get","$attrs"),t[n]}})}function Jd(e){const t=i=>{e.exposed=i||{}};let n;return{get attrs(){return n||(n=Gd(e))},slots:e.slots,emit:e.emit,expose:t}}function xs(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(bl(vl(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Qn)return Qn[n](e)},has(t,n){return n in t||n in Qn}}))}function Xd(e,t=!0){return H(e)?e.displayName||e.name:e.name||t&&e.__name}function Yd(e){return H(e)&&"__vccOpts"in e}const Ue=(e,t)=>qf(e,t,li);function Jl(e,t,n){const i=arguments.length;return i===2?re(t)&&!B(t)?jr(t)?he(e,null,[t]):he(e,t):he(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&jr(n)&&(n=[n]),he(e,t,n))}const Qd=Symbol(""),Zd=()=>Xe(Qd),ep="3.2.47",tp="http://www.w3.org/2000/svg",zt=typeof document<"u"?document:null,Wa=zt&&zt.createElement("template"),np={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const s=t?zt.createElementNS(tp,e):zt.createElement(e,n?{is:n}:void 0);return e==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:e=>zt.createTextNode(e),createComment:e=>zt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>zt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,s,r){const o=n?n.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Wa.innerHTML=i?`<svg>${e}</svg>`:e;const a=Wa.content;if(i){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function ip(e,t,n){const i=e._vtc;i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function sp(e,t,n){const i=e.style,s=fe(n);if(n&&!s){if(t&&!fe(t))for(const r in t)n[r]==null&&$r(i,r,"");for(const r in n)$r(i,r,n[r])}else{const r=i.display;s?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const Va=/\s*!important$/;function $r(e,t,n){if(B(n))n.forEach(i=>$r(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=rp(e,t);Va.test(n)?e.setProperty(On(i),n.replace(Va,""),"important"):e[i]=n}}const za=["Webkit","Moz","ms"],ar={};function rp(e,t){const n=ar[t];if(n)return n;let i=ct(t);if(i!=="filter"&&i in e)return ar[t]=i;i=Cs(i);for(let s=0;s<za.length;s++){const r=za[s]+i;if(r in e)return ar[t]=r}return t}const Ka="http://www.w3.org/1999/xlink";function op(e,t,n,i,s){if(i&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ka,t.slice(6,t.length)):e.setAttributeNS(Ka,t,n);else{const r=sf(t);n==null||r&&!tl(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function ap(e,t,n,i,s,r,o){if(t==="innerHTML"||t==="textContent"){i&&o(i,s,r),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n??"";(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=tl(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}function fn(e,t,n,i){e.addEventListener(t,n,i)}function cp(e,t,n,i){e.removeEventListener(t,n,i)}function lp(e,t,n,i,s=null){const r=e._vei||(e._vei={}),o=r[t];if(i&&o)o.value=i;else{const[a,c]=up(t);if(i){const l=r[t]=dp(i,s);fn(e,a,l,c)}else o&&(cp(e,a,o,c),r[t]=void 0)}}const qa=/(?:Once|Passive|Capture)$/;function up(e){let t;if(qa.test(e)){t={};let i;for(;i=e.match(qa);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):On(e.slice(2)),t]}let cr=0;const hp=Promise.resolve(),fp=()=>cr||(hp.then(()=>cr=0),cr=Date.now());function dp(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Je(pp(i,n.value),t,5,[i])};return n.value=e,n.attached=fp(),n}function pp(e,t){if(B(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const Ga=/^on[a-z]/,gp=(e,t,n,i,s=!1,r,o,a,c)=>{t==="class"?ip(e,i,s):t==="style"?sp(e,n,i):As(t)?fo(t)||lp(e,t,n,i,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):mp(e,t,i,s))?ap(e,t,i,r,o,a,c):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),op(e,t,i,s))};function mp(e,t,n,i){return i?!!(t==="innerHTML"||t==="textContent"||t in e&&Ga.test(t)&&H(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ga.test(t)&&fe(n)?!1:t in e}const Ja=e=>{const t=e.props["onUpdate:modelValue"]||!1;return B(t)?n=>Yi(t,n):t};function _p(e){e.target.composing=!0}function Xa(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const qE={created(e,{modifiers:{lazy:t,trim:n,number:i}},s){e._assign=Ja(s);const r=i||s.props&&s.props.type==="number";fn(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),r&&(a=Cr(a)),e._assign(a)}),n&&fn(e,"change",()=>{e.value=e.value.trim()}),t||(fn(e,"compositionstart",_p),fn(e,"compositionend",Xa),fn(e,"change",Xa))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:s}},r){if(e._assign=Ja(r),e.composing||document.activeElement===e&&e.type!=="range"&&(n||i&&e.value.trim()===t||(s||e.type==="number")&&Cr(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},yp=Ae({patchProp:gp},np);let Ya;function vp(){return Ya||(Ya=Ld(yp))}const Ep=(...e)=>{const t=vp().createApp(...e),{mount:n}=t;return t.mount=i=>{const s=Ip(i);if(!s)return;const r=t._component;!H(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function Ip(e){return fe(e)?document.querySelector(e):e}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const dn=typeof window<"u";function wp(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const X=Object.assign;function lr(e,t){const n={};for(const i in t){const s=t[i];n[i]=Ye(s)?s.map(e):e(s)}return n}const ei=()=>{},Ye=Array.isArray,bp=/\/$/,Tp=e=>e.replace(bp,"");function ur(e,t,n="/"){let i,s={},r="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(i=t.slice(0,c),r=t.slice(c+1,a>-1?a:t.length),s=e(r)),a>-1&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=Cp(i??t,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function Ap(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Qa(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Rp(e,t,n){const i=t.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&An(t.matched[i],n.matched[s])&&Xl(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function An(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Xl(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Sp(e[n],t[n]))return!1;return!0}function Sp(e,t){return Ye(e)?Za(e,t):Ye(t)?Za(t,e):e===t}function Za(e,t){return Ye(t)?e.length===t.length&&e.every((n,i)=>n===t[i]):e.length===1&&e[0]===t}function Cp(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),i=e.split("/");let s=n.length-1,r,o;for(r=0;r<i.length;r++)if(o=i[r],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(r-(r===i.length?1:0)).join("/")}var ui;(function(e){e.pop="pop",e.push="push"})(ui||(ui={}));var ti;(function(e){e.back="back",e.forward="forward",e.unknown=""})(ti||(ti={}));function Op(e){if(!e)if(dn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Tp(e)}const kp=/^[^#]+#/;function Pp(e,t){return e.replace(kp,"#")+t}function Dp(e,t){const n=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-n.left-(t.left||0),top:i.top-n.top-(t.top||0)}}const Us=()=>({left:window.pageXOffset,top:window.pageYOffset});function Np(e){let t;if("el"in e){const n=e.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Dp(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function ec(e,t){return(history.state?history.state.position-t:-1)+e}const Br=new Map;function Lp(e,t){Br.set(e,t)}function Mp(e){const t=Br.get(e);return Br.delete(e),t}let xp=()=>location.protocol+"//"+location.host;function Yl(e,t){const{pathname:n,search:i,hash:s}=t,r=e.indexOf("#");if(r>-1){let a=s.includes(e.slice(r))?e.slice(r).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Qa(c,"")}return Qa(n,e)+i+s}function Up(e,t,n,i){let s=[],r=[],o=null;const a=({state:p})=>{const _=Yl(e,location),T=n.value,C=t.value;let $=0;if(p){if(n.value=_,t.value=p,o&&o===T){o=null;return}$=C?p.position-C.position:0}else i(_);s.forEach(O=>{O(n.value,T,{delta:$,type:ui.pop,direction:$?$>0?ti.forward:ti.back:ti.unknown})})};function c(){o=n.value}function l(p){s.push(p);const _=()=>{const T=s.indexOf(p);T>-1&&s.splice(T,1)};return r.push(_),_}function h(){const{history:p}=window;p.state&&p.replaceState(X({},p.state,{scroll:Us()}),"")}function f(){for(const p of r)p();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h),{pauseListeners:c,listen:l,destroy:f}}function tc(e,t,n,i=!1,s=!1){return{back:e,current:t,forward:n,replaced:i,position:window.history.length,scroll:s?Us():null}}function Fp(e){const{history:t,location:n}=window,i={value:Yl(e,n)},s={value:t.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(c,l,h){const f=e.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:xp()+e+c;try{t[h?"replaceState":"pushState"](l,"",p),s.value=l}catch(_){console.error(_),n[h?"replace":"assign"](p)}}function o(c,l){const h=X({},t.state,tc(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});r(c,h,!0),i.value=c}function a(c,l){const h=X({},s.value,t.state,{forward:c,scroll:Us()});r(h.current,h,!0);const f=X({},tc(i.value,c,null),{position:h.position+1},l);r(c,f,!1),i.value=c}return{location:i,state:s,push:a,replace:o}}function jp(e){e=Op(e);const t=Fp(e),n=Up(e,t.state,t.location,t.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=X({location:"",base:e,go:i,createHref:Pp.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function $p(e){return typeof e=="string"||e&&typeof e=="object"}function Ql(e){return typeof e=="string"||typeof e=="symbol"}const It={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Zl=Symbol("");var nc;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(nc||(nc={}));function Rn(e,t){return X(new Error,{type:e,[Zl]:!0},t)}function lt(e,t){return e instanceof Error&&Zl in e&&(t==null||!!(e.type&t))}const ic="[^/]+?",Bp={sensitive:!1,strict:!1,start:!0,end:!0},Hp=/[.+*?^${}()[\]/\\]/g;function Wp(e,t){const n=X({},Bp,t),i=[];let s=n.start?"^":"";const r=[];for(const l of e){const h=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const p=l[f];let _=40+(n.sensitive?.25:0);if(p.type===0)f||(s+="/"),s+=p.value.replace(Hp,"\\$&"),_+=40;else if(p.type===1){const{value:T,repeatable:C,optional:$,regexp:O}=p;r.push({name:T,repeatable:C,optional:$});const F=O||ic;if(F!==ic){_+=10;try{new RegExp(`(${F})`)}catch(G){throw new Error(`Invalid custom RegExp for param "${T}" (${F}): `+G.message)}}let D=C?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;f||(D=$&&l.length<2?`(?:/${D})`:"/"+D),$&&(D+="?"),s+=D,_+=20,$&&(_+=-8),C&&(_+=-20),F===".*"&&(_+=-50)}h.push(_)}i.push(h)}if(n.strict&&n.end){const l=i.length-1;i[l][i[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const h=l.match(o),f={};if(!h)return null;for(let p=1;p<h.length;p++){const _=h[p]||"",T=r[p-1];f[T.name]=_&&T.repeatable?_.split("/"):_}return f}function c(l){let h="",f=!1;for(const p of e){(!f||!h.endsWith("/"))&&(h+="/"),f=!1;for(const _ of p)if(_.type===0)h+=_.value;else if(_.type===1){const{value:T,repeatable:C,optional:$}=_,O=T in l?l[T]:"";if(Ye(O)&&!C)throw new Error(`Provided param "${T}" is an array but it is not repeatable (* or + modifiers)`);const F=Ye(O)?O.join("/"):O;if(!F)if($)p.length<2&&(h.endsWith("/")?h=h.slice(0,-1):f=!0);else throw new Error(`Missing required param "${T}"`);h+=F}}return h||"/"}return{re:o,score:i,keys:r,parse:a,stringify:c}}function Vp(e,t){let n=0;for(;n<e.length&&n<t.length;){const i=t[n]-e[n];if(i)return i;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function zp(e,t){let n=0;const i=e.score,s=t.score;for(;n<i.length&&n<s.length;){const r=Vp(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(sc(i))return 1;if(sc(s))return-1}return s.length-i.length}function sc(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Kp={type:0,value:""},qp=/[a-zA-Z0-9_]/;function Gp(e){if(!e)return[[]];if(e==="/")return[[Kp]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(_){throw new Error(`ERR (${n})/"${l}": ${_}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,c,l="",h="";function f(){l&&(n===0?r.push({type:0,value:l}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):p();break;case 4:p(),n=i;break;case 1:c==="("?n=2:qp.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:n=3:h+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,h="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function Jp(e,t,n){const i=Wp(Gp(e.path),n),s=X(i,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Xp(e,t){const n=[],i=new Map;t=ac({strict:!1,end:!0,sensitive:!1},t);function s(h){return i.get(h)}function r(h,f,p){const _=!p,T=Yp(h);T.aliasOf=p&&p.record;const C=ac(t,h),$=[T];if("alias"in h){const D=typeof h.alias=="string"?[h.alias]:h.alias;for(const G of D)$.push(X({},T,{components:p?p.record.components:T.components,path:G,aliasOf:p?p.record:T}))}let O,F;for(const D of $){const{path:G}=D;if(f&&G[0]!=="/"){const ue=f.record.path,pe=ue[ue.length-1]==="/"?"":"/";D.path=f.record.path+(G&&pe+G)}if(O=Jp(D,f,C),p?p.alias.push(O):(F=F||O,F!==O&&F.alias.push(O),_&&h.name&&!oc(O)&&o(h.name)),T.children){const ue=T.children;for(let pe=0;pe<ue.length;pe++)r(ue[pe],O,p&&p.children[pe])}p=p||O,(O.record.components&&Object.keys(O.record.components).length||O.record.name||O.record.redirect)&&c(O)}return F?()=>{o(F)}:ei}function o(h){if(Ql(h)){const f=i.get(h);f&&(i.delete(h),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(h);f>-1&&(n.splice(f,1),h.record.name&&i.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return n}function c(h){let f=0;for(;f<n.length&&zp(h,n[f])>=0&&(h.record.path!==n[f].record.path||!eu(h,n[f]));)f++;n.splice(f,0,h),h.record.name&&!oc(h)&&i.set(h.record.name,h)}function l(h,f){let p,_={},T,C;if("name"in h&&h.name){if(p=i.get(h.name),!p)throw Rn(1,{location:h});C=p.record.name,_=X(rc(f.params,p.keys.filter(F=>!F.optional).map(F=>F.name)),h.params&&rc(h.params,p.keys.map(F=>F.name))),T=p.stringify(_)}else if("path"in h)T=h.path,p=n.find(F=>F.re.test(T)),p&&(_=p.parse(T),C=p.record.name);else{if(p=f.name?i.get(f.name):n.find(F=>F.re.test(f.path)),!p)throw Rn(1,{location:h,currentLocation:f});C=p.record.name,_=X({},f.params,h.params),T=p.stringify(_)}const $=[];let O=p;for(;O;)$.unshift(O.record),O=O.parent;return{name:C,path:T,params:_,matched:$,meta:Zp($)}}return e.forEach(h=>r(h)),{addRoute:r,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function rc(e,t){const n={};for(const i of t)i in e&&(n[i]=e[i]);return n}function Yp(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Qp(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Qp(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const i in e.components)t[i]=typeof n=="boolean"?n:n[i];return t}function oc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Zp(e){return e.reduce((t,n)=>X(t,n.meta),{})}function ac(e,t){const n={};for(const i in e)n[i]=i in t?t[i]:e[i];return n}function eu(e,t){return t.children.some(n=>n===e||eu(e,n))}const tu=/#/g,eg=/&/g,tg=/\//g,ng=/=/g,ig=/\?/g,nu=/\+/g,sg=/%5B/g,rg=/%5D/g,iu=/%5E/g,og=/%60/g,su=/%7B/g,ag=/%7C/g,ru=/%7D/g,cg=/%20/g;function ko(e){return encodeURI(""+e).replace(ag,"|").replace(sg,"[").replace(rg,"]")}function lg(e){return ko(e).replace(su,"{").replace(ru,"}").replace(iu,"^")}function Hr(e){return ko(e).replace(nu,"%2B").replace(cg,"+").replace(tu,"%23").replace(eg,"%26").replace(og,"`").replace(su,"{").replace(ru,"}").replace(iu,"^")}function ug(e){return Hr(e).replace(ng,"%3D")}function hg(e){return ko(e).replace(tu,"%23").replace(ig,"%3F")}function fg(e){return e==null?"":hg(e).replace(tg,"%2F")}function us(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function dg(e){const t={};if(e===""||e==="?")return t;const i=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(nu," "),o=r.indexOf("="),a=us(o<0?r:r.slice(0,o)),c=o<0?null:us(r.slice(o+1));if(a in t){let l=t[a];Ye(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function cc(e){let t="";for(let n in e){const i=e[n];if(n=ug(n),i==null){i!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ye(i)?i.map(r=>r&&Hr(r)):[i&&Hr(i)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function pg(e){const t={};for(const n in e){const i=e[n];i!==void 0&&(t[n]=Ye(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return t}const gg=Symbol(""),lc=Symbol(""),Fs=Symbol(""),Po=Symbol(""),Wr=Symbol("");function Wn(){let e=[];function t(i){return e.push(i),()=>{const s=e.indexOf(i);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Tt(e,t,n,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=f=>{f===!1?a(Rn(4,{from:n,to:t})):f instanceof Error?a(f):$p(f)?a(Rn(2,{from:t,to:f})):(r&&i.enterCallbacks[s]===r&&typeof f=="function"&&r.push(f),o())},l=e.call(i&&i.instances[s],t,n,c);let h=Promise.resolve(l);e.length<3&&(h=h.then(c)),h.catch(f=>a(f))})}function hr(e,t,n,i){const s=[];for(const r of e)for(const o in r.components){let a=r.components[o];if(!(t!=="beforeRouteEnter"&&!r.instances[o]))if(mg(a)){const l=(a.__vccOpts||a)[t];l&&s.push(Tt(l,n,i,r,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const h=wp(l)?l.default:l;r.components[o]=h;const p=(h.__vccOpts||h)[t];return p&&Tt(p,n,i,r,o)()}))}}return s}function mg(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function uc(e){const t=Xe(Fs),n=Xe(Po),i=Ue(()=>t.resolve(Yt(e.to))),s=Ue(()=>{const{matched:c}=i.value,{length:l}=c,h=c[l-1],f=n.matched;if(!h||!f.length)return-1;const p=f.findIndex(An.bind(null,h));if(p>-1)return p;const _=hc(c[l-2]);return l>1&&hc(h)===_&&f[f.length-1].path!==_?f.findIndex(An.bind(null,c[l-2])):p}),r=Ue(()=>s.value>-1&&Eg(n.params,i.value.params)),o=Ue(()=>s.value>-1&&s.value===n.matched.length-1&&Xl(n.params,i.value.params));function a(c={}){return vg(c)?t[Yt(e.replace)?"replace":"push"](Yt(e.to)).catch(ei):Promise.resolve()}return{route:i,href:Ue(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const _g=Ro({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:uc,setup(e,{slots:t}){const n=Ii(uc(e)),{options:i}=Xe(Fs),s=Ue(()=>({[fc(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[fc(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&t.default(n);return e.custom?r:Jl("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),yg=_g;function vg(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Eg(e,t){for(const n in t){const i=t[n],s=e[n];if(typeof i=="string"){if(i!==s)return!1}else if(!Ye(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function hc(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const fc=(e,t,n)=>e??t??n,Ig=Ro({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const i=Xe(Wr),s=Ue(()=>e.route||i.value),r=Xe(lc,0),o=Ue(()=>{let l=Yt(r);const{matched:h}=s.value;let f;for(;(f=h[l])&&!f.components;)l++;return l}),a=Ue(()=>s.value.matched[o.value]);Zi(lc,Ue(()=>o.value+1)),Zi(gg,a),Zi(Wr,s);const c=Qi();return Yn(()=>[c.value,a.value,e.name],([l,h,f],[p,_,T])=>{h&&(h.instances[f]=l,_&&_!==h&&l&&l===p&&(h.leaveGuards.size||(h.leaveGuards=_.leaveGuards),h.updateGuards.size||(h.updateGuards=_.updateGuards))),l&&h&&(!_||!An(h,_)||!p)&&(h.enterCallbacks[f]||[]).forEach(C=>C(l))},{flush:"post"}),()=>{const l=s.value,h=e.name,f=a.value,p=f&&f.components[h];if(!p)return dc(n.default,{Component:p,route:l});const _=f.props[h],T=_?_===!0?l.params:typeof _=="function"?_(l):_:null,$=Jl(p,X({},T,t,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(f.instances[h]=null)},ref:c}));return dc(n.default,{Component:$,route:l})||$}}});function dc(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const wg=Ig;function bg(e){const t=Xp(e.routes,e),n=e.parseQuery||dg,i=e.stringifyQuery||cc,s=e.history,r=Wn(),o=Wn(),a=Wn(),c=Wf(It);let l=It;dn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=lr.bind(null,y=>""+y),f=lr.bind(null,fg),p=lr.bind(null,us);function _(y,S){let A,N;return Ql(y)?(A=t.getRecordMatcher(y),N=S):N=y,t.addRoute(N,A)}function T(y){const S=t.getRecordMatcher(y);S&&t.removeRoute(S)}function C(){return t.getRoutes().map(y=>y.record)}function $(y){return!!t.getRecordMatcher(y)}function O(y,S){if(S=X({},S||c.value),typeof y=="string"){const u=ur(n,y,S.path),d=t.resolve({path:u.path},S),g=s.createHref(u.fullPath);return X(u,d,{params:p(d.params),hash:us(u.hash),redirectedFrom:void 0,href:g})}let A;if("path"in y)A=X({},y,{path:ur(n,y.path,S.path).path});else{const u=X({},y.params);for(const d in u)u[d]==null&&delete u[d];A=X({},y,{params:f(y.params)}),S.params=f(S.params)}const N=t.resolve(A,S),K=y.hash||"";N.params=h(p(N.params));const se=Ap(i,X({},y,{hash:lg(K),path:N.path})),W=s.createHref(se);return X({fullPath:se,hash:K,query:i===cc?pg(y.query):y.query||{}},N,{redirectedFrom:void 0,href:W})}function F(y){return typeof y=="string"?ur(n,y,c.value.path):X({},y)}function D(y,S){if(l!==y)return Rn(8,{from:S,to:y})}function G(y){return ke(y)}function ue(y){return G(X(F(y),{replace:!0}))}function pe(y){const S=y.matched[y.matched.length-1];if(S&&S.redirect){const{redirect:A}=S;let N=typeof A=="function"?A(y):A;return typeof N=="string"&&(N=N.includes("?")||N.includes("#")?N=F(N):{path:N},N.params={}),X({query:y.query,hash:y.hash,params:"path"in N?{}:y.params},N)}}function ke(y,S){const A=l=O(y),N=c.value,K=y.state,se=y.force,W=y.replace===!0,u=pe(A);if(u)return ke(X(F(u),{state:typeof u=="object"?X({},K,u.state):K,force:se,replace:W}),S||A);const d=A;d.redirectedFrom=S;let g;return!se&&Rp(i,N,A)&&(g=Rn(16,{to:d,from:N}),jt(N,N,!0,!1)),(g?Promise.resolve(g):Qe(d,N)).catch(m=>lt(m)?lt(m,2)?m:He(m):ee(m,d,N)).then(m=>{if(m){if(lt(m,2))return ke(X({replace:W},F(m.to),{state:typeof m.to=="object"?X({},K,m.to.state):K,force:se}),S||d)}else m=vt(d,N,!0,W,K);return xe(d,N,m),m})}function Be(y,S){const A=D(y,S);return A?Promise.reject(A):Promise.resolve()}function Qe(y,S){let A;const[N,K,se]=Tg(y,S);A=hr(N.reverse(),"beforeRouteLeave",y,S);for(const u of N)u.leaveGuards.forEach(d=>{A.push(Tt(d,y,S))});const W=Be.bind(null,y,S);return A.push(W),un(A).then(()=>{A=[];for(const u of r.list())A.push(Tt(u,y,S));return A.push(W),un(A)}).then(()=>{A=hr(K,"beforeRouteUpdate",y,S);for(const u of K)u.updateGuards.forEach(d=>{A.push(Tt(d,y,S))});return A.push(W),un(A)}).then(()=>{A=[];for(const u of y.matched)if(u.beforeEnter&&!S.matched.includes(u))if(Ye(u.beforeEnter))for(const d of u.beforeEnter)A.push(Tt(d,y,S));else A.push(Tt(u.beforeEnter,y,S));return A.push(W),un(A)}).then(()=>(y.matched.forEach(u=>u.enterCallbacks={}),A=hr(se,"beforeRouteEnter",y,S),A.push(W),un(A))).then(()=>{A=[];for(const u of o.list())A.push(Tt(u,y,S));return A.push(W),un(A)}).catch(u=>lt(u,8)?u:Promise.reject(u))}function xe(y,S,A){for(const N of a.list())N(y,S,A)}function vt(y,S,A,N,K){const se=D(y,S);if(se)return se;const W=S===It,u=dn?history.state:{};A&&(N||W?s.replace(y.fullPath,X({scroll:W&&u&&u.scroll},K)):s.push(y.fullPath,K)),c.value=y,jt(y,S,A,W),He()}let Ze;function an(){Ze||(Ze=s.listen((y,S,A)=>{if(!Fi.listening)return;const N=O(y),K=pe(N);if(K){ke(X(K,{replace:!0}),N).catch(ei);return}l=N;const se=c.value;dn&&Lp(ec(se.fullPath,A.delta),Us()),Qe(N,se).catch(W=>lt(W,12)?W:lt(W,2)?(ke(W.to,N).then(u=>{lt(u,20)&&!A.delta&&A.type===ui.pop&&s.go(-1,!1)}).catch(ei),Promise.reject()):(A.delta&&s.go(-A.delta,!1),ee(W,N,se))).then(W=>{W=W||vt(N,se,!1),W&&(A.delta&&!lt(W,8)?s.go(-A.delta,!1):A.type===ui.pop&&lt(W,20)&&s.go(-1,!1)),xe(N,se,W)}).catch(ei)}))}let Ft=Wn(),jn=Wn(),ae;function ee(y,S,A){He(y);const N=jn.list();return N.length?N.forEach(K=>K(y,S,A)):console.error(y),Promise.reject(y)}function Q(){return ae&&c.value!==It?Promise.resolve():new Promise((y,S)=>{Ft.add([y,S])})}function He(y){return ae||(ae=!y,an(),Ft.list().forEach(([S,A])=>y?A(y):S()),Ft.reset()),y}function jt(y,S,A,N){const{scrollBehavior:K}=e;if(!dn||!K)return Promise.resolve();const se=!A&&Mp(ec(y.fullPath,0))||(N||!A)&&history.state&&history.state.scroll||null;return Rl().then(()=>K(y,S,se)).then(W=>W&&Np(W)).catch(W=>ee(W,y,S))}const We=y=>s.go(y);let Re;const cn=new Set,Fi={currentRoute:c,listening:!0,addRoute:_,removeRoute:T,hasRoute:$,getRoutes:C,resolve:O,options:e,push:G,replace:ue,go:We,back:()=>We(-1),forward:()=>We(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:jn.add,isReady:Q,install(y){const S=this;y.component("RouterLink",yg),y.component("RouterView",wg),y.config.globalProperties.$router=S,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Yt(c)}),dn&&!Re&&c.value===It&&(Re=!0,G(s.location).catch(K=>{}));const A={};for(const K in It)A[K]=Ue(()=>c.value[K]);y.provide(Fs,S),y.provide(Po,Ii(A)),y.provide(Wr,c);const N=y.unmount;cn.add(y),y.unmount=function(){cn.delete(y),cn.size<1&&(l=It,Ze&&Ze(),Ze=null,c.value=It,Re=!1,ae=!1),N()}}};return Fi}function un(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Tg(e,t){const n=[],i=[],s=[],r=Math.max(t.matched.length,e.matched.length);for(let o=0;o<r;o++){const a=t.matched[o];a&&(e.matched.find(l=>An(l,a))?i.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>An(l,c))||s.push(c))}return[n,i,s]}function Ag(){return Xe(Fs)}function Rg(){return Xe(Po)}/**
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
 */const ou=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Sg=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[i++]=String.fromCharCode(55296+(c>>10)),t[i++]=String.fromCharCode(56320+(c&1023))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return t.join("")},au={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<e.length;s+=3){const r=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,l=c?e[s+2]:0,h=r>>2,f=(r&3)<<4|a>>4;let p=(a&15)<<2|l>>6,_=l&63;c||(_=64,o||(p=64)),i.push(n[h],n[f],n[p],n[_])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ou(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Sg(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<e.length;){const r=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const f=s<e.length?n[e.charAt(s)]:64;if(++s,r==null||a==null||l==null||f==null)throw new Cg;const p=r<<2|a>>4;if(i.push(p),l!==64){const _=a<<4&240|l>>2;if(i.push(_),f!==64){const T=l<<6&192|f;i.push(T)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Cg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Og=function(e){const t=ou(e);return au.encodeByteArray(t,!0)},hs=function(e){return Og(e).replace(/\./g,"")},cu=function(e){try{return au.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function kg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Pg=()=>kg().__FIREBASE_DEFAULTS__,Dg=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Ng=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&cu(e[1]);return t&&JSON.parse(t)},Do=()=>{try{return Pg()||Dg()||Ng()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},lu=e=>{var t,n;return(n=(t=Do())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Lg=e=>{const t=lu(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),i]:[t.substring(0,n),i]},Mg=()=>{var e;return(e=Do())===null||e===void 0?void 0:e.config},uu=e=>{var t;return(t=Do())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class xg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,i))}}}/**
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
 */function Ug(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",s=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[hs(JSON.stringify(n)),hs(JSON.stringify(o)),a].join(".")}/**
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
 */function we(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(we())}function jg(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function $g(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Bg(){const e=we();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Hg(){try{return typeof indexedDB=="object"}catch{return!1}}function Wg(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;t(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){t(n)}})}/**
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
 */const Vg="FirebaseError";class yt extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=Vg,Object.setPrototypeOf(this,yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wi.prototype.create)}}class wi{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},s=`${this.service}/${t}`,r=this.errors[t],o=r?zg(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new yt(s,a,i)}}function zg(e,t){return e.replace(Kg,(n,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const Kg=/\{\$([^}]+)}/g;function qg(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function fs(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const r=e[s],o=t[s];if(pc(r)&&pc(o)){if(!fs(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function pc(e){return e!==null&&typeof e=="object"}/**
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
 */function bi(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function qn(e){const t={};return e.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");t[decodeURIComponent(s)]=decodeURIComponent(r)}}),t}function Gn(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Gg(e,t){const n=new Jg(e,t);return n.subscribe.bind(n)}class Jg{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,i){let s;if(t===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Xg(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:i},s.next===void 0&&(s.next=fr),s.error===void 0&&(s.error=fr),s.complete===void 0&&(s.complete=fr);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xg(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function fr(){}/**
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
 */function Mt(e){return e&&e._delegate?e._delegate:e}class nn{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Wt="[DEFAULT]";/**
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
 */class Yg{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new xg;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Zg(t))try{this.getOrInitializeService({instanceIdentifier:Wt})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(t=Wt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Wt){return this.instances.has(t)}getOptions(t=Wt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(t,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(t),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&t(o,s),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Qg(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Wt){return this.component?this.component.multipleInstances?t:Wt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qg(e){return e===Wt?void 0:e}function Zg(e){return e.instantiationMode==="EAGER"}/**
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
 */class em{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Yg(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Y||(Y={}));const tm={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},nm=Y.INFO,im={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},sm=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),s=im[t];if(s)console[s](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class No{constructor(t){this.name=t,this._logLevel=nm,this._logHandler=sm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Y))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?tm[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...t),this._logHandler(this,Y.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...t),this._logHandler(this,Y.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...t),this._logHandler(this,Y.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...t),this._logHandler(this,Y.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...t),this._logHandler(this,Y.ERROR,...t)}}const rm=(e,t)=>t.some(n=>e instanceof n);let gc,mc;function om(){return gc||(gc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function am(){return mc||(mc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hu=new WeakMap,Vr=new WeakMap,fu=new WeakMap,dr=new WeakMap,Lo=new WeakMap;function cm(e){const t=new Promise((n,i)=>{const s=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{n(Pt(e.result)),s()},o=()=>{i(e.error),s()};e.addEventListener("success",r),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&hu.set(n,e)}).catch(()=>{}),Lo.set(t,e),t}function lm(e){if(Vr.has(e))return;const t=new Promise((n,i)=>{const s=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)});Vr.set(e,t)}let zr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Vr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||fu.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function um(e){zr=e(zr)}function hm(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(pr(this),t,...n);return fu.set(i,t.sort?t.sort():[t]),Pt(i)}:am().includes(e)?function(...t){return e.apply(pr(this),t),Pt(hu.get(this))}:function(...t){return Pt(e.apply(pr(this),t))}}function fm(e){return typeof e=="function"?hm(e):(e instanceof IDBTransaction&&lm(e),rm(e,om())?new Proxy(e,zr):e)}function Pt(e){if(e instanceof IDBRequest)return cm(e);if(dr.has(e))return dr.get(e);const t=fm(e);return t!==e&&(dr.set(e,t),Lo.set(t,e)),t}const pr=e=>Lo.get(e);function dm(e,t,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(e,t),a=Pt(o);return i&&o.addEventListener("upgradeneeded",c=>{i(Pt(o.result),c.oldVersion,c.newVersion,Pt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const pm=["get","getKey","getAll","getAllKeys","count"],gm=["put","add","delete","clear"],gr=new Map;function _c(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(gr.get(t))return gr.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=gm.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||pm.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return gr.set(t,r),r}um(e=>({...e,get:(t,n,i)=>_c(t,n)||e.get(t,n,i),has:(t,n)=>!!_c(t,n)||e.has(t,n)}));/**
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
 */class mm{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_m(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function _m(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Kr="@firebase/app",yc="0.9.7";/**
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
 */const sn=new No("@firebase/app"),ym="@firebase/app-compat",vm="@firebase/analytics-compat",Em="@firebase/analytics",Im="@firebase/app-check-compat",wm="@firebase/app-check",bm="@firebase/auth",Tm="@firebase/auth-compat",Am="@firebase/database",Rm="@firebase/database-compat",Sm="@firebase/functions",Cm="@firebase/functions-compat",Om="@firebase/installations",km="@firebase/installations-compat",Pm="@firebase/messaging",Dm="@firebase/messaging-compat",Nm="@firebase/performance",Lm="@firebase/performance-compat",Mm="@firebase/remote-config",xm="@firebase/remote-config-compat",Um="@firebase/storage",Fm="@firebase/storage-compat",jm="@firebase/firestore",$m="@firebase/firestore-compat",Bm="firebase",Hm="9.19.1";/**
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
 */const qr="[DEFAULT]",Wm={[Kr]:"fire-core",[ym]:"fire-core-compat",[Em]:"fire-analytics",[vm]:"fire-analytics-compat",[wm]:"fire-app-check",[Im]:"fire-app-check-compat",[bm]:"fire-auth",[Tm]:"fire-auth-compat",[Am]:"fire-rtdb",[Rm]:"fire-rtdb-compat",[Sm]:"fire-fn",[Cm]:"fire-fn-compat",[Om]:"fire-iid",[km]:"fire-iid-compat",[Pm]:"fire-fcm",[Dm]:"fire-fcm-compat",[Nm]:"fire-perf",[Lm]:"fire-perf-compat",[Mm]:"fire-rc",[xm]:"fire-rc-compat",[Um]:"fire-gcs",[Fm]:"fire-gcs-compat",[jm]:"fire-fst",[$m]:"fire-fst-compat","fire-js":"fire-js",[Bm]:"fire-js-all"};/**
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
 */const ds=new Map,Gr=new Map;function Vm(e,t){try{e.container.addComponent(t)}catch(n){sn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Sn(e){const t=e.name;if(Gr.has(t))return sn.debug(`There were multiple attempts to register component ${t}.`),!1;Gr.set(t,e);for(const n of ds.values())Vm(n,e);return!0}function Mo(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const zm={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Dt=new wi("app","Firebase",zm);/**
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
 */class Km{constructor(t,n,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Dt.create("app-deleted",{appName:this._name})}}/**
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
 */const Ti=Hm;function du(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const i=Object.assign({name:qr,automaticDataCollectionEnabled:!1},t),s=i.name;if(typeof s!="string"||!s)throw Dt.create("bad-app-name",{appName:String(s)});if(n||(n=Mg()),!n)throw Dt.create("no-options");const r=ds.get(s);if(r){if(fs(n,r.options)&&fs(i,r.config))return r;throw Dt.create("duplicate-app",{appName:s})}const o=new em(s);for(const c of Gr.values())o.addComponent(c);const a=new Km(n,i,o);return ds.set(s,a),a}function pu(e=qr){const t=ds.get(e);if(!t&&e===qr)return du();if(!t)throw Dt.create("no-app",{appName:e});return t}function Nt(e,t,n){var i;let s=(i=Wm[e])!==null&&i!==void 0?i:e;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${t}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),sn.warn(a.join(" "));return}Sn(new nn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const qm="firebase-heartbeat-database",Gm=1,hi="firebase-heartbeat-store";let mr=null;function gu(){return mr||(mr=dm(qm,Gm,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(hi)}}}).catch(e=>{throw Dt.create("idb-open",{originalErrorMessage:e.message})})),mr}async function Jm(e){try{return(await gu()).transaction(hi).objectStore(hi).get(mu(e))}catch(t){if(t instanceof yt)sn.warn(t.message);else{const n=Dt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});sn.warn(n.message)}}}async function vc(e,t){try{const i=(await gu()).transaction(hi,"readwrite");return await i.objectStore(hi).put(t,mu(e)),i.done}catch(n){if(n instanceof yt)sn.warn(n.message);else{const i=Dt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});sn.warn(i.message)}}}function mu(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Xm=1024,Ym=30*24*60*60*1e3;class Qm{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new e_(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ec();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=Ym}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ec(),{heartbeatsToSend:n,unsentEntries:i}=Zm(this._heartbeatsCache.heartbeats),s=hs(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ec(){return new Date().toISOString().substring(0,10)}function Zm(e,t=Xm){const n=[];let i=e.slice();for(const s of e){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Ic(n)>t){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ic(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class e_{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hg()?Wg().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Jm(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return vc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return vc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Ic(e){return hs(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function t_(e){Sn(new nn("platform-logger",t=>new mm(t),"PRIVATE")),Sn(new nn("heartbeat",t=>new Qm(t),"PRIVATE")),Nt(Kr,yc,e),Nt(Kr,yc,"esm2017"),Nt("fire-js","")}t_("");function xo(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]]);return n}function _u(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const n_=_u,yu=new wi("auth","Firebase",_u());/**
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
 */const wc=new No("@firebase/auth");function ns(e,...t){wc.logLevel<=Y.ERROR&&wc.error(`Auth (${Ti}): ${e}`,...t)}/**
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
 */function je(e,...t){throw Uo(e,...t)}function ot(e,...t){return Uo(e,...t)}function vu(e,t,n){const i=Object.assign(Object.assign({},n_()),{[t]:n});return new wi("auth","Firebase",i).create(t,{appName:e.name})}function i_(e,t,n){const i=n;if(!(t instanceof i))throw i.name!==t.constructor.name&&je(e,"argument-error"),vu(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Uo(e,...t){if(typeof e!="string"){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return yu.create(e,...t)}function x(e,t,...n){if(!e)throw Uo(t,...n)}function ht(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ns(t),new Error(t)}function gt(e,t){e||ht(t)}/**
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
 */const bc=new Map;function ft(e){gt(e instanceof Function,"Expected a class definition");let t=bc.get(e);return t?(gt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,bc.set(e,t),t)}/**
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
 */function s_(e,t){const n=Mo(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(fs(r,t??{}))return s;je(s,"already-initialized")}return n.initialize({options:t})}function r_(e,t){const n=(t==null?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(ft);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,t==null?void 0:t.popupRedirectResolver)}/**
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
 */function Jr(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function o_(){return Tc()==="http:"||Tc()==="https:"}function Tc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function a_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(o_()||jg()||"connection"in navigator)?navigator.onLine:!0}function c_(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Ai{constructor(t,n){this.shortDelay=t,this.longDelay=n,gt(n>t,"Short delay should be less than long delay!"),this.isMobile=Fg()||$g()}get(){return a_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Fo(e,t){gt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Eu{static initialize(t,n,i){this.fetchImpl=t,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const l_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const u_=new Ai(3e4,6e4);function Dn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Nn(e,t,n,i,s={}){return Iu(e,s,async()=>{let r={},o={};i&&(t==="GET"?o=i:r={body:JSON.stringify(i)});const a=bi(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),Eu.fetch()(wu(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},r))})}async function Iu(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},l_),t);try{const s=new h_(e),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw zi(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw zi(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw zi(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw zi(e,"user-disabled",o);const h=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw vu(e,h,l);je(e,h)}}catch(s){if(s instanceof yt)throw s;je(e,"network-request-failed",{message:String(s)})}}async function Ri(e,t,n,i,s={}){const r=await Nn(e,t,n,i,s);return"mfaPendingCredential"in r&&je(e,"multi-factor-auth-required",{_serverResponse:r}),r}function wu(e,t,n,i){const s=`${t}${n}?${i}`;return e.config.emulator?Fo(e.config,s):`${e.config.apiScheme}://${s}`}class h_{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(ot(this.auth,"network-request-failed")),u_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function zi(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=ot(e,t,i);return s.customData._tokenResponse=n,s}/**
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
 */async function f_(e,t){return Nn(e,"POST","/v1/accounts:delete",t)}async function d_(e,t){return Nn(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function ni(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function p_(e,t=!1){const n=Mt(e),i=await n.getIdToken(t),s=jo(i);x(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:ni(_r(s.auth_time)),issuedAtTime:ni(_r(s.iat)),expirationTime:ni(_r(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function _r(e){return Number(e)*1e3}function jo(e){const[t,n,i]=e.split(".");if(t===void 0||n===void 0||i===void 0)return ns("JWT malformed, contained fewer than 3 sections"),null;try{const s=cu(n);return s?JSON.parse(s):(ns("Failed to decode base64 JWT payload"),null)}catch(s){return ns("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function g_(e){const t=jo(e);return x(t,"internal-error"),x(typeof t.exp<"u","internal-error"),x(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function fi(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof yt&&m_(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function m_({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class __{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class bu{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ni(this.lastLoginAt),this.creationTime=ni(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ps(e){var t;const n=e.auth,i=await e.getIdToken(),s=await fi(e,d_(n,{idToken:i}));x(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];e._notifyReloadListener(r);const o=!((t=r.providerUserInfo)===null||t===void 0)&&t.length?E_(r.providerUserInfo):[],a=v_(e.providerData,o),c=e.isAnonymous,l=!(e.email&&r.passwordHash)&&!(a!=null&&a.length),h=c?l:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new bu(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(e,f)}async function y_(e){const t=Mt(e);await ps(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function v_(e,t){return[...e.filter(i=>!t.some(s=>s.providerId===i.providerId)),...t]}function E_(e){return e.map(t=>{var{providerId:n}=t,i=xo(t,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function I_(e,t){const n=await Iu(e,{},async()=>{const i=bi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:r}=e.config,o=wu(e,s,"/v1/token",`key=${r}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Eu.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class di{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){x(t.idToken,"internal-error"),x(typeof t.idToken<"u","internal-error"),x(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):g_(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return x(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await I_(t,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(t,n,i){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new di;return i&&(x(typeof i=="string","internal-error",{appName:t}),o.refreshToken=i),s&&(x(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),r&&(x(typeof r=="number","internal-error",{appName:t}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new di,this.toJSON())}_performRefresh(){return ht("not implemented")}}/**
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
 */function wt(e,t){x(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Zt{constructor(t){var{uid:n,auth:i,stsTokenManager:s}=t,r=xo(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new __(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new bu(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const n=await fi(this,this.stsTokenManager.getToken(this.auth,t));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return p_(this,t)}reload(){return y_(this)}_assign(t){this!==t&&(x(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Zt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),n&&await ps(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await fi(this,f_(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var i,s,r,o,a,c,l,h;const f=(i=n.displayName)!==null&&i!==void 0?i:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,_=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,$=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,O=(l=n.createdAt)!==null&&l!==void 0?l:void 0,F=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:D,emailVerified:G,isAnonymous:ue,providerData:pe,stsTokenManager:ke}=n;x(D&&ke,t,"internal-error");const Be=di.fromJSON(this.name,ke);x(typeof D=="string",t,"internal-error"),wt(f,t.name),wt(p,t.name),x(typeof G=="boolean",t,"internal-error"),x(typeof ue=="boolean",t,"internal-error"),wt(_,t.name),wt(T,t.name),wt(C,t.name),wt($,t.name),wt(O,t.name),wt(F,t.name);const Qe=new Zt({uid:D,auth:t,email:p,emailVerified:G,displayName:f,isAnonymous:ue,photoURL:T,phoneNumber:_,tenantId:C,stsTokenManager:Be,createdAt:O,lastLoginAt:F});return pe&&Array.isArray(pe)&&(Qe.providerData=pe.map(xe=>Object.assign({},xe))),$&&(Qe._redirectEventId=$),Qe}static async _fromIdTokenResponse(t,n,i=!1){const s=new di;s.updateFromServerResponse(n);const r=new Zt({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:i});return await ps(r),r}}/**
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
 */class Tu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Tu.type="NONE";const Ac=Tu;/**
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
 */function is(e,t,n){return`firebase:${e}:${t}:${n}`}class vn{constructor(t,n,i){this.persistence=t,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=is(this.userKey,s.apiKey,r),this.fullPersistenceKey=is("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Zt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,i="authUser"){if(!n.length)return new vn(ft(Ac),t,i);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=s[0]||ft(Ac);const o=is(i,t.config.apiKey,t.name);let a=null;for(const l of n)try{const h=await l._get(o);if(h){const f=Zt._fromJSON(t,h);l!==r&&(a=f),r=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new vn(r,t,i):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new vn(r,t,i))}}/**
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
 */function Rc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Su(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Au(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ou(t))return"Blackberry";if(ku(t))return"Webos";if($o(t))return"Safari";if((t.includes("chrome/")||Ru(t))&&!t.includes("edge/"))return"Chrome";if(Cu(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Au(e=we()){return/firefox\//i.test(e)}function $o(e=we()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ru(e=we()){return/crios\//i.test(e)}function Su(e=we()){return/iemobile/i.test(e)}function Cu(e=we()){return/android/i.test(e)}function Ou(e=we()){return/blackberry/i.test(e)}function ku(e=we()){return/webos/i.test(e)}function js(e=we()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function w_(e=we()){var t;return js(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function b_(){return Bg()&&document.documentMode===10}function Pu(e=we()){return js(e)||Cu(e)||ku(e)||Ou(e)||/windows phone/i.test(e)||Su(e)}function T_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Du(e,t=[]){let n;switch(e){case"Browser":n=Rc(we());break;case"Worker":n=`${Rc(we())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ti}/${i}`}/**
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
 */class A_{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const i=r=>new Promise((o,a)=>{try{const c=t(r);o(c)}catch(c){a(c)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const i of this.queue)await i(t),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */class R_{constructor(t,n,i){this.app=t,this.heartbeatServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sc(this),this.idTokenSubscription=new Sc(this),this.beforeStateQueue=new A_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yu,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=ft(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await vn.create(this,t),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await ps(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=c_()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Mt(t):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&x(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ft(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new wi("auth","Firebase",t())}onAuthStateChanged(t,n,i){return this.registerStateListener(this.authStateSubscription,t,n,i)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,i){return this.registerStateListener(this.idTokenSubscription,t,n,i)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const i=await this.getOrInitRedirectPersistenceManager(n);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&ft(t)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await vn.create(this,[ft(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return x(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?t.addObserver(n,i,s):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Du(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return i&&(n["X-Firebase-Client"]=i),n}}function Ln(e){return Mt(e)}class Sc{constructor(t){this.auth=t,this.observer=null,this.addObserver=Gg(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function S_(e,t,n){const i=Ln(e);x(i._canInitEmulator,i,"emulator-config-failed"),x(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),r=Nu(t),{host:o,port:a}=C_(t),c=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||O_()}function Nu(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function C_(e){const t=Nu(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Cc(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Cc(o)}}}function Cc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function O_(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Bo{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return ht("not implemented")}_getIdTokenResponse(t){return ht("not implemented")}_linkToIdToken(t,n){return ht("not implemented")}_getReauthenticationResolver(t){return ht("not implemented")}}async function k_(e,t){return Nn(e,"POST","/v1/accounts:update",t)}/**
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
 */async function P_(e,t){return Ri(e,"POST","/v1/accounts:signInWithPassword",Dn(e,t))}async function D_(e,t){return Nn(e,"POST","/v1/accounts:sendOobCode",Dn(e,t))}async function N_(e,t){return D_(e,t)}/**
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
 */async function L_(e,t){return Ri(e,"POST","/v1/accounts:signInWithEmailLink",Dn(e,t))}async function M_(e,t){return Ri(e,"POST","/v1/accounts:signInWithEmailLink",Dn(e,t))}/**
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
 */class pi extends Bo{constructor(t,n,i,s=null){super("password",i),this._email=t,this._password=n,this._tenantId=s}static _fromEmailAndPassword(t,n){return new pi(t,n,"password")}static _fromEmailAndCode(t,n,i=null){return new pi(t,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return P_(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return L_(t,{email:this._email,oobCode:this._password});default:je(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return k_(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return M_(t,{idToken:n,email:this._email,oobCode:this._password});default:je(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function En(e,t){return Ri(e,"POST","/v1/accounts:signInWithIdp",Dn(e,t))}/**
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
 */const x_="http://localhost";class rn extends Bo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new rn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):je("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:s}=n,r=xo(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new rn(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return En(t,n)}_linkToIdToken(t,n){const i=this.buildRequest();return i.idToken=n,En(t,i)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,En(t,n)}buildRequest(){const t={requestUri:x_,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=bi(n)}return t}}/**
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
 */function U_(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function F_(e){const t=qn(Gn(e)).link,n=t?qn(Gn(t)).deep_link_id:null,i=qn(Gn(e)).deep_link_id;return(i?qn(Gn(i)).link:null)||i||n||t||e}class Ho{constructor(t){var n,i,s,r,o,a;const c=qn(Gn(t)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,h=(i=c.oobCode)!==null&&i!==void 0?i:null,f=U_((s=c.mode)!==null&&s!==void 0?s:null);x(l&&h&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=h,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=F_(t);try{return new Ho(n)}catch{return null}}}/**
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
 */class Mn{constructor(){this.providerId=Mn.PROVIDER_ID}static credential(t,n){return pi._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const i=Ho.parseLink(n);return x(i,"argument-error"),pi._fromEmailAndCode(t,i.code,i.tenantId)}}Mn.PROVIDER_ID="password";Mn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Mn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Wo{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Si extends Wo{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class At extends Si{constructor(){super("facebook.com")}static credential(t){return rn._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return At.credentialFromTaggedObject(t)}static credentialFromError(t){return At.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return At.credential(t.oauthAccessToken)}catch{return null}}}At.FACEBOOK_SIGN_IN_METHOD="facebook.com";At.PROVIDER_ID="facebook.com";/**
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
 */class Rt extends Si{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return rn._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Rt.credentialFromTaggedObject(t)}static credentialFromError(t){return Rt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:i}=t;if(!n&&!i)return null;try{return Rt.credential(n,i)}catch{return null}}}Rt.GOOGLE_SIGN_IN_METHOD="google.com";Rt.PROVIDER_ID="google.com";/**
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
 */class St extends Si{constructor(){super("github.com")}static credential(t){return rn._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return St.credentialFromTaggedObject(t)}static credentialFromError(t){return St.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return St.credential(t.oauthAccessToken)}catch{return null}}}St.GITHUB_SIGN_IN_METHOD="github.com";St.PROVIDER_ID="github.com";/**
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
 */class Ct extends Si{constructor(){super("twitter.com")}static credential(t,n){return rn._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Ct.credentialFromTaggedObject(t)}static credentialFromError(t){return Ct.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=t;if(!n||!i)return null;try{return Ct.credential(n,i)}catch{return null}}}Ct.TWITTER_SIGN_IN_METHOD="twitter.com";Ct.PROVIDER_ID="twitter.com";/**
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
 */async function j_(e,t){return Ri(e,"POST","/v1/accounts:signUp",Dn(e,t))}/**
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
 */class on{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,i,s=!1){const r=await Zt._fromIdTokenResponse(t,i,s),o=Oc(i);return new on({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(t,n,i){await t._updateTokensIfNecessary(i,!0);const s=Oc(i);return new on({user:t,providerId:s,_tokenResponse:i,operationType:n})}}function Oc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class gs extends yt{constructor(t,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,gs.prototype),this.customData={appName:t.name,tenantId:(r=t.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,n,i,s){return new gs(t,n,i,s)}}function Lu(e,t,n,i){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?gs._fromErrorAndOperation(e,r,t,i):r})}async function $_(e,t,n=!1){const i=await fi(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return on._forOperation(e,"link",i)}/**
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
 */async function B_(e,t,n=!1){const{auth:i}=e,s="reauthenticate";try{const r=await fi(e,Lu(i,s,t,e),n);x(r.idToken,i,"internal-error");const o=jo(r.idToken);x(o,i,"internal-error");const{sub:a}=o;return x(e.uid===a,i,"user-mismatch"),on._forOperation(e,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&je(i,"user-mismatch"),r}}/**
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
 */async function Mu(e,t,n=!1){const i="signIn",s=await Lu(e,i,t),r=await on._fromIdTokenResponse(e,i,s);return n||await e._updateCurrentUser(r.user),r}async function H_(e,t){return Mu(Ln(e),t)}/**
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
 */function W_(e,t,n){var i;x(((i=n.url)===null||i===void 0?void 0:i.length)>0,e,"invalid-continue-uri"),x(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(x(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(x(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}async function GE(e,t,n){const i=Ln(e),s=await j_(i,{returnSecureToken:!0,email:t,password:n}),r=await on._fromIdTokenResponse(i,"signIn",s);return await i._updateCurrentUser(r.user),r}function JE(e,t,n){return H_(Mt(e),Mn.credential(t,n))}async function XE(e,t){const n=Mt(e),s={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()};t&&W_(n.auth,s,t);const{email:r}=await N_(n.auth,s);r!==e.email&&await e.reload()}function V_(e,t,n,i){return Mt(e).onIdTokenChanged(t,n,i)}function z_(e,t,n){return Mt(e).beforeAuthStateChanged(t,n)}const ms="__sak";/**
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
 */class xu{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ms,"1"),this.storage.removeItem(ms),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function K_(){const e=we();return $o(e)||js(e)}const q_=1e3,G_=10;class Uu extends xu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=K_()&&T_(),this.fallbackToPolling=Pu(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&t(n,s,i)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(i,t.newValue):this.storage.removeItem(i);else if(this.localCache[i]===t.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);b_()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,G_):s()}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:i}),!0)})},q_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Uu.type="LOCAL";const J_=Uu;/**
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
 */class Fu extends xu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Fu.type="SESSION";const ju=Fu;/**
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
 */function X_(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class $s{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const i=new $s(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,r)),c=await X_(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$s.receivers=[];/**
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
 */function Vo(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class Y_{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=Vo("",20);s.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(p.data.response);break;default:clearTimeout(h),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function at(){return window}function Q_(e){at().location.href=e}/**
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
 */function $u(){return typeof at().WorkerGlobalScope<"u"&&typeof at().importScripts=="function"}async function Z_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ey(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function ty(){return $u()?self:null}/**
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
 */const Bu="firebaseLocalStorageDb",ny=1,_s="firebaseLocalStorage",Hu="fbase_key";class Ci{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Bs(e,t){return e.transaction([_s],t?"readwrite":"readonly").objectStore(_s)}function iy(){const e=indexedDB.deleteDatabase(Bu);return new Ci(e).toPromise()}function Xr(){const e=indexedDB.open(Bu,ny);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const i=e.result;try{i.createObjectStore(_s,{keyPath:Hu})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const i=e.result;i.objectStoreNames.contains(_s)?t(i):(i.close(),await iy(),t(await Xr()))})})}async function kc(e,t,n){const i=Bs(e,!0).put({[Hu]:t,value:n});return new Ci(i).toPromise()}async function sy(e,t){const n=Bs(e,!1).get(t),i=await new Ci(n).toPromise();return i===void 0?null:i.value}function Pc(e,t){const n=Bs(e,!0).delete(t);return new Ci(n).toPromise()}const ry=800,oy=3;class Wu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xr(),this.db)}async _withRetries(t){let n=0;for(;;)try{const i=await this._openDb();return await t(i)}catch(i){if(n++>oy)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $u()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$s._getInstance(ty()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Z_(),!this.activeServiceWorker)return;this.sender=new Y_(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((t=i[0])===null||t===void 0)&&t.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||ey()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Xr();return await kc(t,ms,"1"),await Pc(t,ms),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>kc(i,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(i=>sy(i,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Pc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const r=Bs(s,!1).getAll();return new Ci(r).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of t)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ry)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Wu.type="LOCAL";const ay=Wu;/**
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
 */function cy(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function ly(e){return new Promise((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=s=>{const r=ot("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",cy().appendChild(i)})}function uy(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new Ai(3e4,6e4);/**
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
 */function Vu(e,t){return t?ft(t):(x(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class zo extends Bo{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return En(t,this._buildIdpRequest())}_linkToIdToken(t,n){return En(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return En(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function hy(e){return Mu(e.auth,new zo(e),e.bypassAuthState)}function fy(e){const{auth:t,user:n}=e;return x(n,t,"internal-error"),B_(n,new zo(e),e.bypassAuthState)}async function dy(e){const{auth:t,user:n}=e;return x(n,t,"internal-error"),$_(n,new zo(e),e.bypassAuthState)}/**
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
 */class zu{constructor(t,n,i,s,r=!1){this.auth=t,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return hy;case"linkViaPopup":case"linkViaRedirect":return dy;case"reauthViaPopup":case"reauthViaRedirect":return fy;default:je(this.auth,"internal-error")}}resolve(t){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const py=new Ai(2e3,1e4);async function YE(e,t,n){const i=Ln(e);i_(e,t,Wo);const s=Vu(i,n);return new qt(i,"signInViaPopup",t,s).executeNotNull()}class qt extends zu{constructor(t,n,i,s,r){super(t,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,qt.currentPopupAction&&qt.currentPopupAction.cancel(),qt.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return x(t,this.auth,"internal-error"),t}async onExecution(){gt(this.filter.length===1,"Popup operations only handle one event");const t=Vo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qt.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ot(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,py.get())};t()}}qt.currentPopupAction=null;/**
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
 */const gy="pendingRedirect",ss=new Map;class my extends zu{constructor(t,n,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let t=ss.get(this.auth._key());if(!t){try{const i=await _y(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(n){t=()=>Promise.reject(n)}ss.set(this.auth._key(),t)}return this.bypassAuthState||ss.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _y(e,t){const n=Ey(t),i=vy(e);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function yy(e,t){ss.set(e._key(),t)}function vy(e){return ft(e._redirectPersistence)}function Ey(e){return is(gy,e.config.apiKey,e.name)}async function Iy(e,t,n=!1){const i=Ln(e),s=Vu(i,t),o=await new my(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}/**
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
 */const wy=10*60*1e3;class by{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(n=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Ty(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var i;if(t.error&&!Ku(t)){const s=((i=t.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(ot(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const i=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=wy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dc(t))}saveEventToCache(t){this.cachedEventUids.add(Dc(t)),this.lastProcessedEventTime=Date.now()}}function Dc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Ku({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Ty(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ku(e);default:return!1}}/**
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
 */async function Ay(e,t={}){return Nn(e,"GET","/v1/projects",t)}/**
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
 */const Ry=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Sy=/^https?/;async function Cy(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Ay(e);for(const n of t)try{if(Oy(n))return}catch{}je(e,"unauthorized-domain")}function Oy(e){const t=Jr(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&i===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!Sy.test(n))return!1;if(Ry.test(e))return i===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const ky=new Ai(3e4,6e4);function Nc(){const e=at().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Py(e){return new Promise((t,n)=>{var i,s,r;function o(){Nc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Nc(),n(ot(e,"network-request-failed"))},timeout:ky.get()})}if(!((s=(i=at().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((r=at().gapi)===null||r===void 0)&&r.load)o();else{const a=uy("iframefcb");return at()[a]=()=>{gapi.load?o():n(ot(e,"network-request-failed"))},ly(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(t=>{throw rs=null,t})}let rs=null;function Dy(e){return rs=rs||Py(e),rs}/**
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
 */const Ny=new Ai(5e3,15e3),Ly="__/auth/iframe",My="emulator/auth/iframe",xy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Uy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fy(e){const t=e.config;x(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Fo(t,My):`https://${e.config.authDomain}/${Ly}`,i={apiKey:t.apiKey,appName:e.name,v:Ti},s=Uy.get(e.config.apiHost);s&&(i.eid=s);const r=e._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${bi(i).slice(1)}`}async function jy(e){const t=await Dy(e),n=at().gapi;return x(n,e,"internal-error"),t.open({where:document.body,url:Fy(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xy,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=ot(e,"network-request-failed"),a=at().setTimeout(()=>{r(o)},Ny.get());function c(){at().clearTimeout(a),s(i)}i.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const $y={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},By=500,Hy=600,Wy="_blank",Vy="http://localhost";class Lc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zy(e,t,n,i=By,s=Hy){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},$y),{width:i.toString(),height:s.toString(),top:r,left:o}),l=we().toLowerCase();n&&(a=Ru(l)?Wy:n),Au(l)&&(t=t||Vy,c.scrollbars="yes");const h=Object.entries(c).reduce((p,[_,T])=>`${p}${_}=${T},`,"");if(w_(l)&&a!=="_self")return Ky(t||"",a),new Lc(null);const f=window.open(t||"",a,h);x(f,e,"popup-blocked");try{f.focus()}catch{}return new Lc(f)}function Ky(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const qy="__/auth/handler",Gy="emulator/auth/handler";function Mc(e,t,n,i,s,r){x(e.config.authDomain,e,"auth-domain-config-required"),x(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:Ti,eventId:s};if(t instanceof Wo){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",qg(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,l]of Object.entries(r||{}))o[c]=l}if(t instanceof Si){const c=t.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Jy(e)}?${bi(a).slice(1)}`}function Jy({config:e}){return e.emulator?Fo(e,Gy):`https://${e.authDomain}/${qy}`}/**
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
 */const yr="webStorageSupport";class Xy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ju,this._completeRedirectFn=Iy,this._overrideRedirectResult=yy}async _openPopup(t,n,i,s){var r;gt((r=this.eventManagers[t._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Mc(t,n,i,Jr(),s);return zy(t,o,Vo())}async _openRedirect(t,n,i,s){return await this._originValidation(t),Q_(Mc(t,n,i,Jr(),s)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(gt(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(t);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(t){const n=await jy(t),i=new by(t);return n.register("authEvent",s=>(x(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=n,i}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(yr,{type:yr},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[yr];o!==void 0&&n(!!o),je(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Cy(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Pu()||$o()||js()}}const Yy=Xy;var xc="@firebase/auth",Uc="0.22.0";/**
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
 */class Qy{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(i=>{t((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Zy(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ev(e){Sn(new nn("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),{apiKey:r,authDomain:o}=i.options;return((a,c)=>{x(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),x(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:r,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Du(e)},h=new R_(a,c,l);return r_(h,n),h})(i,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,i)=>{t.getProvider("auth-internal").initialize()})),Sn(new nn("auth-internal",t=>{const n=Ln(t.getProvider("auth").getImmediate());return(i=>new Qy(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nt(xc,Uc,Zy(e)),Nt(xc,Uc,"esm2017")}/**
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
 */const tv=5*60,nv=uu("authIdTokenMaxAge")||tv;let Fc=null;const iv=e=>async t=>{const n=t&&await t.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>nv)return;const s=n==null?void 0:n.token;Fc!==s&&(Fc=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function sv(e=pu()){const t=Mo(e,"auth");if(t.isInitialized())return t.getImmediate();const n=s_(e,{popupRedirectResolver:Yy,persistence:[ay,J_,ju]}),i=uu("authTokenSyncURL");if(i){const r=iv(i);z_(n,r,()=>r(n.currentUser)),V_(n,o=>r(o))}const s=lu("auth");return s&&S_(n,`http://${s}`),n}ev("Browser");var rv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P,Ko=Ko||{},U=rv||self;function ys(){}function Hs(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Oi(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function ov(e){return Object.prototype.hasOwnProperty.call(e,vr)&&e[vr]||(e[vr]=++av)}var vr="closure_uid_"+(1e9*Math.random()>>>0),av=0;function cv(e,t,n){return e.call.apply(e.bind,arguments)}function lv(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function Ee(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ee=cv:Ee=lv,Ee.apply(null,arguments)}function Ki(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),e.apply(this,i)}}function me(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(i,o)}}function xt(){this.s=this.s,this.o=this.o}var uv=0;xt.prototype.s=!1;xt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),uv!=0)&&ov(this)};xt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const qu=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function qo(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function jc(e,t){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(Hs(i)){const s=e.length||0,r=i.length||0;e.length=s+r;for(let o=0;o<r;o++)e[s+o]=i[o]}else e.push(i)}}function Ie(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var hv=function(){if(!U.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{U.addEventListener("test",ys,t),U.removeEventListener("test",ys,t)}catch{}return e}();function vs(e){return/^[\s\xa0]*$/.test(e)}var $c=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Er(e,t){return e<t?-1:e>t?1:0}function Ws(){var e=U.navigator;return e&&(e=e.userAgent)?e:""}function rt(e){return Ws().indexOf(e)!=-1}function Go(e){return Go[" "](e),e}Go[" "]=ys;function fv(e){var t=gv;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var dv=rt("Opera"),gi=rt("Trident")||rt("MSIE"),Gu=rt("Edge"),Yr=Gu||gi,Ju=rt("Gecko")&&!(Ws().toLowerCase().indexOf("webkit")!=-1&&!rt("Edge"))&&!(rt("Trident")||rt("MSIE"))&&!rt("Edge"),pv=Ws().toLowerCase().indexOf("webkit")!=-1&&!rt("Edge");function Xu(){var e=U.document;return e?e.documentMode:void 0}var Qr;e:{var Ir="",wr=function(){var e=Ws();if(Ju)return/rv:([^\);]+)(\)|;)/.exec(e);if(Gu)return/Edge\/([\d\.]+)/.exec(e);if(gi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(pv)return/WebKit\/(\S+)/.exec(e);if(dv)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(wr&&(Ir=wr?wr[1]:""),gi){var br=Xu();if(br!=null&&br>parseFloat(Ir)){Qr=String(br);break e}}Qr=Ir}var gv={};function mv(){return fv(function(){let e=0;const t=$c(String(Qr)).split("."),n=$c("9").split("."),i=Math.max(t.length,n.length);for(let o=0;e==0&&o<i;o++){var s=t[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;e=Er(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||Er(s[2].length==0,r[2].length==0)||Er(s[2],r[2]),s=s[3],r=r[3]}while(e==0)}return 0<=e})}U.document&&gi&&Xu();function mi(e,t){if(Ie.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Ju){e:{try{Go(t.nodeName);var s=!0;break e}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:_v[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&mi.X.h.call(this)}}me(mi,Ie);var _v={2:"touch",3:"pen",4:"mouse"};mi.prototype.h=function(){mi.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ki="closure_listenable_"+(1e6*Math.random()|0),yv=0;function vv(e,t,n,i,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.ha=s,this.key=++yv,this.ba=this.ea=!1}function Vs(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Jo(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function Yu(e){const t={};for(const n in e)t[n]=e[n];return t}const Bc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Qu(e,t){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)e[n]=i[n];for(let r=0;r<Bc.length;r++)n=Bc[r],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function zs(e){this.src=e,this.g={},this.h=0}zs.prototype.add=function(e,t,n,i,s){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=eo(e,t,i,s);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new vv(t,this.src,r,!!i,s),t.ea=n,e.push(t)),t};function Zr(e,t){var n=t.type;if(n in e.g){var i=e.g[n],s=qu(i,t),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Vs(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function eo(e,t,n,i){for(var s=0;s<e.length;++s){var r=e[s];if(!r.ba&&r.listener==t&&r.capture==!!n&&r.ha==i)return s}return-1}var Xo="closure_lm_"+(1e6*Math.random()|0),Tr={};function Zu(e,t,n,i,s){if(i&&i.once)return th(e,t,n,i,s);if(Array.isArray(t)){for(var r=0;r<t.length;r++)Zu(e,t[r],n,i,s);return null}return n=Zo(n),e&&e[ki]?e.N(t,n,Oi(i)?!!i.capture:!!i,s):eh(e,t,n,!1,i,s)}function eh(e,t,n,i,s,r){if(!t)throw Error("Invalid event type");var o=Oi(s)?!!s.capture:!!s,a=Qo(e);if(a||(e[Xo]=a=new zs(e)),n=a.add(t,n,i,o,r),n.proxy)return n;if(i=Ev(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)hv||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),i,s);else if(e.attachEvent)e.attachEvent(ih(t.toString()),i);else if(e.addListener&&e.removeListener)e.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Ev(){function e(n){return t.call(e.src,e.listener,n)}const t=Iv;return e}function th(e,t,n,i,s){if(Array.isArray(t)){for(var r=0;r<t.length;r++)th(e,t[r],n,i,s);return null}return n=Zo(n),e&&e[ki]?e.O(t,n,Oi(i)?!!i.capture:!!i,s):eh(e,t,n,!0,i,s)}function nh(e,t,n,i,s){if(Array.isArray(t))for(var r=0;r<t.length;r++)nh(e,t[r],n,i,s);else i=Oi(i)?!!i.capture:!!i,n=Zo(n),e&&e[ki]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=eo(r,n,i,s),-1<n&&(Vs(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=Qo(e))&&(t=e.g[t.toString()],e=-1,t&&(e=eo(t,n,i,s)),(n=-1<e?t[e]:null)&&Yo(n))}function Yo(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[ki])Zr(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(ih(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=Qo(t))?(Zr(n,e),n.h==0&&(n.src=null,t[Xo]=null)):Vs(e)}}}function ih(e){return e in Tr?Tr[e]:Tr[e]="on"+e}function Iv(e,t){if(e.ba)e=!0;else{t=new mi(t,this);var n=e.listener,i=e.ha||e.src;e.ea&&Yo(e),e=n.call(i,t)}return e}function Qo(e){return e=e[Xo],e instanceof zs?e:null}var Ar="__closure_events_fn_"+(1e9*Math.random()>>>0);function Zo(e){return typeof e=="function"?e:(e[Ar]||(e[Ar]=function(t){return e.handleEvent(t)}),e[Ar])}function de(){xt.call(this),this.i=new zs(this),this.P=this,this.I=null}me(de,xt);de.prototype[ki]=!0;de.prototype.removeEventListener=function(e,t,n,i){nh(this,e,t,n,i)};function ge(e,t){var n,i=e.I;if(i)for(n=[];i;i=i.I)n.push(i);if(e=e.P,i=t.type||t,typeof t=="string")t=new Ie(t,e);else if(t instanceof Ie)t.target=t.target||e;else{var s=t;t=new Ie(i,e),Qu(t,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];s=qi(o,i,!0,t)&&s}if(o=t.g=e,s=qi(o,i,!0,t)&&s,s=qi(o,i,!1,t)&&s,n)for(r=0;r<n.length;r++)o=t.g=n[r],s=qi(o,i,!1,t)&&s}de.prototype.M=function(){if(de.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)Vs(n[i]);delete e.g[t],e.h--}}this.I=null};de.prototype.N=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)};de.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};function qi(e,t,n,i){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Zr(e.i,o),s=a.call(c,i)!==!1&&s}}return s&&!i.defaultPrevented}var ea=U.JSON.stringify;function wv(){var e=oh;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class bv{constructor(){this.h=this.g=null}add(t,n){const i=sh.get();i.set(t,n),this.h?this.h.next=i:this.g=i,this.h=i}}var sh=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Tv,e=>e.reset());class Tv{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Av(e){U.setTimeout(()=>{throw e},0)}function rh(e,t){to||Rv(),no||(to(),no=!0),oh.add(e,t)}var to;function Rv(){var e=U.Promise.resolve(void 0);to=function(){e.then(Sv)}}var no=!1,oh=new bv;function Sv(){for(var e;e=wv();){try{e.h.call(e.g)}catch(n){Av(n)}var t=sh;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}no=!1}function Ks(e,t){de.call(this),this.h=e||1,this.g=t||U,this.j=Ee(this.lb,this),this.l=Date.now()}me(Ks,de);P=Ks.prototype;P.ca=!1;P.R=null;P.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ge(this,"tick"),this.ca&&(ta(this),this.start()))}};P.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ta(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}P.M=function(){Ks.X.M.call(this),ta(this),delete this.g};function na(e,t,n){if(typeof e=="function")n&&(e=Ee(e,n));else if(e&&typeof e.handleEvent=="function")e=Ee(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:U.setTimeout(e,t||0)}function ah(e){e.g=na(()=>{e.g=null,e.i&&(e.i=!1,ah(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Cv extends xt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:ah(this)}M(){super.M(),this.g&&(U.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _i(e){xt.call(this),this.h=e,this.g={}}me(_i,xt);var Hc=[];function ch(e,t,n,i){Array.isArray(n)||(n&&(Hc[0]=n.toString()),n=Hc);for(var s=0;s<n.length;s++){var r=Zu(t,n[s],i||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function lh(e){Jo(e.g,function(t,n){this.g.hasOwnProperty(n)&&Yo(t)},e),e.g={}}_i.prototype.M=function(){_i.X.M.call(this),lh(this)};_i.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function qs(){this.g=!0}qs.prototype.Aa=function(){this.g=!1};function Ov(e,t,n,i,s,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var h=l[0];l=l[1];var f=h.split("_");o=2<=f.length&&f[1]=="type"?o+(h+"="+l+"&"):o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function kv(e,t,n,i,s,r,o){e.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+t+`
`+n+`
`+r+" "+o})}function pn(e,t,n,i){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Dv(e,n)+(i?" "+i:"")})}function Pv(e,t){e.info(function(){return"TIMEOUT: "+t})}qs.prototype.info=function(){};function Dv(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return ea(n)}catch{return t}}var xn={},Wc=null;function ia(){return Wc=Wc||new de}xn.Pa="serverreachability";function uh(e){Ie.call(this,xn.Pa,e)}me(uh,Ie);function yi(e){const t=ia();ge(t,new uh(t))}xn.STAT_EVENT="statevent";function hh(e,t){Ie.call(this,xn.STAT_EVENT,e),this.stat=t}me(hh,Ie);function Te(e){const t=ia();ge(t,new hh(t,e))}xn.Qa="timingevent";function fh(e,t){Ie.call(this,xn.Qa,e),this.size=t}me(fh,Ie);function Pi(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return U.setTimeout(function(){e()},t)}var sa={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Nv={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ra(){}ra.prototype.h=null;function Vc(e){return e.h||(e.h=e.i())}function Lv(){}var Di={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function oa(){Ie.call(this,"d")}me(oa,Ie);function aa(){Ie.call(this,"c")}me(aa,Ie);var io;function Gs(){}me(Gs,ra);Gs.prototype.g=function(){return new XMLHttpRequest};Gs.prototype.i=function(){return{}};io=new Gs;function Ni(e,t,n,i){this.l=e,this.j=t,this.m=n,this.U=i||1,this.S=new _i(this),this.O=Mv,e=Yr?125:void 0,this.T=new Ks(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new dh}function dh(){this.i=null,this.g="",this.h=!1}var Mv=45e3,so={},Es={};P=Ni.prototype;P.setTimeout=function(e){this.O=e};function ro(e,t,n){e.K=1,e.v=Xs(mt(t)),e.s=n,e.P=!0,ph(e,null)}function ph(e,t){e.F=Date.now(),Li(e),e.A=mt(e.v);var n=e.A,i=e.U;Array.isArray(i)||(i=[String(i)]),wh(n.i,"t",i),e.C=0,n=e.l.H,e.h=new dh,e.g=Wh(e.l,n?t:null,!e.s),0<e.N&&(e.L=new Cv(Ee(e.La,e,e.g),e.N)),ch(e.S,e.g,"readystatechange",e.ib),t=e.H?Yu(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),yi(),Ov(e.j,e.u,e.A,e.m,e.U,e.s)}P.ib=function(e){e=e.target;const t=this.L;t&&dt(e)==3?t.l():this.La(e)};P.La=function(e){try{if(e==this.g)e:{const h=dt(this.g);var t=this.g.Ea();const f=this.g.aa();if(!(3>h)&&(h!=3||Yr||this.g&&(this.h.h||this.g.fa()||Gc(this.g)))){this.I||h!=4||t==7||(t==8||0>=f?yi(3):yi(2)),Js(this);var n=this.g.aa();this.Y=n;t:if(gh(this)){var i=Gc(this.g);e="";var s=i.length,r=dt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Gt(this),ii(this);var o="";break t}this.h.i=new U.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:r&&t==s-1});i.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,kv(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!vs(a)){var l=a;break t}}l=null}if(n=l)pn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,oo(this,n);else{this.i=!1,this.o=3,Te(12),Gt(this),ii(this);break e}}this.P?(mh(this,h,o),Yr&&this.i&&h==3&&(ch(this.S,this.T,"tick",this.hb),this.T.start())):(pn(this.j,this.m,o,null),oo(this,o)),h==4&&Gt(this),this.i&&!this.I&&(h==4?jh(this.l,this):(this.i=!1,Li(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Te(12)):(this.o=0,Te(13)),Gt(this),ii(this)}}}catch{}finally{}};function gh(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function mh(e,t,n){let i=!0,s;for(;!e.I&&e.C<n.length;)if(s=xv(e,n),s==Es){t==4&&(e.o=4,Te(14),i=!1),pn(e.j,e.m,null,"[Incomplete Response]");break}else if(s==so){e.o=4,Te(15),pn(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}else pn(e.j,e.m,s,null),oo(e,s);gh(e)&&s!=Es&&s!=so&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Te(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),pa(t),t.K=!0,Te(11))):(pn(e.j,e.m,n,"[Invalid Chunked Response]"),Gt(e),ii(e))}P.hb=function(){if(this.g){var e=dt(this.g),t=this.g.fa();this.C<t.length&&(Js(this),mh(this,e,t),this.i&&e!=4&&Li(this))}};function xv(e,t){var n=e.C,i=t.indexOf(`
`,n);return i==-1?Es:(n=Number(t.substring(n,i)),isNaN(n)?so:(i+=1,i+n>t.length?Es:(t=t.substr(i,n),e.C=i+n,t)))}P.cancel=function(){this.I=!0,Gt(this)};function Li(e){e.V=Date.now()+e.O,_h(e,e.O)}function _h(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Pi(Ee(e.gb,e),t)}function Js(e){e.B&&(U.clearTimeout(e.B),e.B=null)}P.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(Pv(this.j,this.A),this.K!=2&&(yi(),Te(17)),Gt(this),this.o=2,ii(this)):_h(this,this.V-e)};function ii(e){e.l.G==0||e.I||jh(e.l,e)}function Gt(e){Js(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,ta(e.T),lh(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function oo(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||ao(n.h,e))){if(!e.J&&ao(n.h,e)&&n.G==3){try{var i=n.Fa.g.parse(t)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)bs(n),er(n);else break e;da(n),Te(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&n.A==0&&!n.v&&(n.v=Pi(Ee(n.cb,n),6e3));if(1>=Ah(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Jt(n,11)}else if((e.J||n.g==e)&&bs(n),!vs(t))for(s=n.Fa.g.parse(t),t=0;t<s.length;t++){let l=s[t];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const h=l[3];h!=null&&(n.ma=h,n.j.info("VER="+n.ma));const f=l[4];f!=null&&(n.Ca=f,n.j.info("SVER="+n.Ca));const p=l[5];p!=null&&typeof p=="number"&&0<p&&(i=1.5*p,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const _=e.g;if(_){const T=_.g?_.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(T){var r=i.h;r.g||T.indexOf("spdy")==-1&&T.indexOf("quic")==-1&&T.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(ca(r,r.h),r.h=null))}if(i.D){const C=_.g?_.g.getResponseHeader("X-HTTP-Session-Id"):null;C&&(i.za=C,ie(i.F,i.D,C))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),i=n;var o=e;if(i.sa=Hh(i,i.H?i.ka:null,i.V),o.J){Rh(i.h,o);var a=o,c=i.J;c&&a.setTimeout(c),a.B&&(Js(a),Li(a)),i.g=o}else Uh(i);0<n.i.length&&tr(n)}else l[0]!="stop"&&l[0]!="close"||Jt(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Jt(n,7):fa(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}yi(4)}catch{}}function Uv(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Hs(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}t=[],n=0;for(i in e)t[n++]=e[i];return t}function Fv(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Hs(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const i in e)t[n++]=i;return t}}}function yh(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Hs(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Fv(e),i=Uv(e),s=i.length,r=0;r<s;r++)t.call(void 0,i[r],n&&n[r],e)}var vh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jv(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),s=null;if(0<=i){var r=e[n].substring(0,i);s=e[n].substring(i+1)}else r=e[n];t(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function en(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof en){this.h=t!==void 0?t:e.h,Is(this,e.j),this.s=e.s,this.g=e.g,ws(this,e.m),this.l=e.l,t=e.i;var n=new vi;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),zc(this,n),this.o=e.o}else e&&(n=String(e).match(vh))?(this.h=!!t,Is(this,n[1]||"",!0),this.s=Jn(n[2]||""),this.g=Jn(n[3]||"",!0),ws(this,n[4]),this.l=Jn(n[5]||"",!0),zc(this,n[6]||"",!0),this.o=Jn(n[7]||"")):(this.h=!!t,this.i=new vi(null,this.h))}en.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Xn(t,Kc,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Xn(t,Kc,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Xn(n,n.charAt(0)=="/"?Hv:Bv,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Xn(n,Vv)),e.join("")};function mt(e){return new en(e)}function Is(e,t,n){e.j=n?Jn(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ws(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function zc(e,t,n){t instanceof vi?(e.i=t,zv(e.i,e.h)):(n||(t=Xn(t,Wv)),e.i=new vi(t,e.h))}function ie(e,t,n){e.i.set(t,n)}function Xs(e){return ie(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Jn(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Xn(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,$v),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function $v(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Kc=/[#\/\?@]/g,Bv=/[#\?:]/g,Hv=/[#\?]/g,Wv=/[#\?@]/g,Vv=/#/g;function vi(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Ut(e){e.g||(e.g=new Map,e.h=0,e.i&&jv(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}P=vi.prototype;P.add=function(e,t){Ut(this),this.i=null,e=Un(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Eh(e,t){Ut(e),t=Un(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Ih(e,t){return Ut(e),t=Un(e,t),e.g.has(t)}P.forEach=function(e,t){Ut(this),this.g.forEach(function(n,i){n.forEach(function(s){e.call(t,s,i,this)},this)},this)};P.oa=function(){Ut(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){const s=e[i];for(let r=0;r<s.length;r++)n.push(t[i])}return n};P.W=function(e){Ut(this);let t=[];if(typeof e=="string")Ih(this,e)&&(t=t.concat(this.g.get(Un(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};P.set=function(e,t){return Ut(this),this.i=null,e=Un(this,e),Ih(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};P.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function wh(e,t,n){Eh(e,t),0<n.length&&(e.i=null,e.g.set(Un(e,t),qo(n)),e.h+=n.length)}P.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];const r=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),e.push(s)}}return this.i=e.join("&")};function Un(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function zv(e,t){t&&!e.j&&(Ut(e),e.i=null,e.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(Eh(this,i),wh(this,s,n))},e)),e.j=t}var Kv=class{constructor(e,t){this.h=e,this.g=t}};function bh(e){this.l=e||qv,U.PerformanceNavigationTiming?(e=U.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(U.g&&U.g.Ga&&U.g.Ga()&&U.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var qv=10;function Th(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Ah(e){return e.h?1:e.g?e.g.size:0}function ao(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function ca(e,t){e.g?e.g.add(t):e.h=t}function Rh(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}bh.prototype.cancel=function(){if(this.i=Sh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Sh(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return qo(e.i)}function la(){}la.prototype.stringify=function(e){return U.JSON.stringify(e,void 0)};la.prototype.parse=function(e){return U.JSON.parse(e,void 0)};function Gv(){this.g=new la}function Jv(e,t,n){const i=n||"";try{yh(e,function(s,r){let o=s;Oi(s)&&(o=ea(s)),t.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw t.push(i+"type="+encodeURIComponent("_badmap")),s}}function Xv(e,t){const n=new qs;if(U.Image){const i=new Image;i.onload=Ki(Gi,n,i,"TestLoadImage: loaded",!0,t),i.onerror=Ki(Gi,n,i,"TestLoadImage: error",!1,t),i.onabort=Ki(Gi,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=Ki(Gi,n,i,"TestLoadImage: timeout",!1,t),U.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=e}else t(!1)}function Gi(e,t,n,i,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(i)}catch{}}function Ys(e){this.l=e.ac||null,this.j=e.jb||!1}me(Ys,ra);Ys.prototype.g=function(){return new Qs(this.l,this.j)};Ys.prototype.i=function(e){return function(){return e}}({});function Qs(e,t){de.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=ua,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}me(Qs,de);var ua=0;P=Qs.prototype;P.open=function(e,t){if(this.readyState!=ua)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ei(this)};P.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||U).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};P.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Mi(this)),this.readyState=ua};P.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ei(this)),this.g&&(this.readyState=3,Ei(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof U.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ch(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function Ch(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}P.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Mi(this):Ei(this),this.readyState==3&&Ch(this)}};P.Va=function(e){this.g&&(this.response=this.responseText=e,Mi(this))};P.Ua=function(e){this.g&&(this.response=e,Mi(this))};P.ga=function(){this.g&&Mi(this)};function Mi(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ei(e)}P.setRequestHeader=function(e,t){this.v.append(e,t)};P.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};P.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Ei(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Qs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Yv=U.JSON.parse;function oe(e){de.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Oh,this.K=this.L=!1}me(oe,de);var Oh="",Qv=/^https?$/i,Zv=["POST","PUT"];P=oe.prototype;P.Ka=function(e){this.L=e};P.da=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():io.g(),this.C=this.u?Vc(this.u):Vc(io),this.g.onreadystatechange=Ee(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){qc(this,r);return}if(e=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=U.FormData&&e instanceof U.FormData,!(0<=qu(Zv,t))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Dh(this),0<this.B&&((this.K=eE(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ee(this.qa,this)):this.A=na(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){qc(this,r)}};function eE(e){return gi&&mv()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}P.qa=function(){typeof Ko<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ge(this,"timeout"),this.abort(8))};function qc(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,kh(e),Zs(e)}function kh(e){e.D||(e.D=!0,ge(e,"complete"),ge(e,"error"))}P.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ge(this,"complete"),ge(this,"abort"),Zs(this))};P.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Zs(this,!0)),oe.X.M.call(this)};P.Ha=function(){this.s||(this.F||this.v||this.l?Ph(this):this.fb())};P.fb=function(){Ph(this)};function Ph(e){if(e.h&&typeof Ko<"u"&&(!e.C[1]||dt(e)!=4||e.aa()!=2)){if(e.v&&dt(e)==4)na(e.Ha,0,e);else if(ge(e,"readystatechange"),dt(e)==4){e.h=!1;try{const a=e.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=a===0){var s=String(e.H).match(vh)[1]||null;if(!s&&U.self&&U.self.location){var r=U.self.location.protocol;s=r.substr(0,r.length-1)}i=!Qv.test(s?s.toLowerCase():"")}n=i}if(n)ge(e,"complete"),ge(e,"success");else{e.m=6;try{var o=2<dt(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",kh(e)}}finally{Zs(e)}}}}function Zs(e,t){if(e.g){Dh(e);const n=e.g,i=e.C[0]?ys:null;e.g=null,e.C=null,t||ge(e,"ready");try{n.onreadystatechange=i}catch{}}}function Dh(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(U.clearTimeout(e.A),e.A=null)}function dt(e){return e.g?e.g.readyState:0}P.aa=function(){try{return 2<dt(this)?this.g.status:-1}catch{return-1}};P.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};P.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Yv(t)}};function Gc(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Oh:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}P.Ea=function(){return this.m};P.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Nh(e){let t="";return Jo(e,function(n,i){t+=i,t+=":",t+=n,t+=`\r
`}),t}function ha(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=Nh(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):ie(e,t,n))}function Vn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Lh(e){this.Ca=0,this.i=[],this.j=new qs,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Vn("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Vn("baseRetryDelayMs",5e3,e),this.bb=Vn("retryDelaySeedMs",1e4,e),this.$a=Vn("forwardChannelMaxRetries",2,e),this.ta=Vn("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new bh(e&&e.concurrentRequestLimit),this.Fa=new Gv,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}P=Lh.prototype;P.ma=8;P.G=1;function fa(e){if(Mh(e),e.G==3){var t=e.U++,n=mt(e.F);ie(n,"SID",e.I),ie(n,"RID",t),ie(n,"TYPE","terminate"),xi(e,n),t=new Ni(e,e.j,t,void 0),t.K=2,t.v=Xs(mt(n)),n=!1,U.navigator&&U.navigator.sendBeacon&&(n=U.navigator.sendBeacon(t.v.toString(),"")),!n&&U.Image&&(new Image().src=t.v,n=!0),n||(t.g=Wh(t.l,null),t.g.da(t.v)),t.F=Date.now(),Li(t)}Bh(e)}function er(e){e.g&&(pa(e),e.g.cancel(),e.g=null)}function Mh(e){er(e),e.u&&(U.clearTimeout(e.u),e.u=null),bs(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&U.clearTimeout(e.m),e.m=null)}function tr(e){Th(e.h)||e.m||(e.m=!0,rh(e.Ja,e),e.C=0)}function tE(e,t){return Ah(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=Pi(Ee(e.Ja,e,t),$h(e,e.C)),e.C++,!0)}P.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const s=new Ni(this,this.j,e,void 0);let r=this.s;if(this.S&&(r?(r=Yu(r),Qu(r,this.S)):r=this.S),this.o!==null||this.N||(s.H=r,r=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){t:{var i=this.i[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(t+=i,4096<t){t=n;break e}if(t===4096||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=xh(this,s,t),n=mt(this.F),ie(n,"RID",e),ie(n,"CVER",22),this.D&&ie(n,"X-HTTP-Session-Id",this.D),xi(this,n),r&&(this.N?t="headers="+encodeURIComponent(String(Nh(r)))+"&"+t:this.o&&ha(n,this.o,r)),ca(this.h,s),this.Ya&&ie(n,"TYPE","init"),this.O?(ie(n,"$req",t),ie(n,"SID","null"),s.Z=!0,ro(s,n,null)):ro(s,n,t),this.G=2}}else this.G==3&&(e?Jc(this,e):this.i.length==0||Th(this.h)||Jc(this))};function Jc(e,t){var n;t?n=t.m:n=e.U++;const i=mt(e.F);ie(i,"SID",e.I),ie(i,"RID",n),ie(i,"AID",e.T),xi(e,i),e.o&&e.s&&ha(i,e.o,e.s),n=new Ni(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=xh(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),ca(e.h,n),ro(n,i,t)}function xi(e,t){e.ia&&Jo(e.ia,function(n,i){ie(t,i,n)}),e.l&&yh({},function(n,i){ie(t,i,n)})}function xh(e,t,n){n=Math.min(e.i.length,n);var i=e.l?Ee(e.l.Ra,e.l,e):null;e:{var s=e.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let l=s[c].h;const h=s[c].g;if(l-=r,0>l)r=Math.max(0,s[c].h-100),a=!1;else try{Jv(h,o,"req"+l+"_")}catch{i&&i(h)}}if(a){i=o.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,i}function Uh(e){e.g||e.u||(e.Z=1,rh(e.Ia,e),e.A=0)}function da(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=Pi(Ee(e.Ia,e),$h(e,e.A)),e.A++,!0)}P.Ia=function(){if(this.u=null,Fh(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Pi(Ee(this.eb,this),e)}};P.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Te(10),er(this),Fh(this))};function pa(e){e.B!=null&&(U.clearTimeout(e.B),e.B=null)}function Fh(e){e.g=new Ni(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=mt(e.sa);ie(t,"RID","rpc"),ie(t,"SID",e.I),ie(t,"CI",e.L?"0":"1"),ie(t,"AID",e.T),ie(t,"TYPE","xmlhttp"),xi(e,t),e.o&&e.s&&ha(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Xs(mt(t)),n.s=null,n.P=!0,ph(n,e)}P.cb=function(){this.v!=null&&(this.v=null,er(this),da(this),Te(19))};function bs(e){e.v!=null&&(U.clearTimeout(e.v),e.v=null)}function jh(e,t){var n=null;if(e.g==t){bs(e),pa(e),e.g=null;var i=2}else if(ao(e.h,t))n=t.D,Rh(e.h,t),i=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(i==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var s=e.C;i=ia(),ge(i,new fh(i,n)),tr(e)}else Uh(e);else if(s=t.o,s==3||s==0&&0<e.pa||!(i==1&&tE(e,t)||i==2&&da(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),s){case 1:Jt(e,5);break;case 4:Jt(e,10);break;case 3:Jt(e,6);break;default:Jt(e,2)}}}function $h(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function Jt(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var i=Ee(e.kb,e);n||(n=new en("//www.google.com/images/cleardot.gif"),U.location&&U.location.protocol=="http"||Is(n,"https"),Xs(n)),Xv(n.toString(),i)}else Te(2);e.G=0,e.l&&e.l.va(t),Bh(e),Mh(e)}P.kb=function(e){e?(this.j.info("Successfully pinged google.com"),Te(2)):(this.j.info("Failed to ping google.com"),Te(1))};function Bh(e){if(e.G=0,e.la=[],e.l){const t=Sh(e.h);(t.length!=0||e.i.length!=0)&&(jc(e.la,t),jc(e.la,e.i),e.h.i.length=0,qo(e.i),e.i.length=0),e.l.ua()}}function Hh(e,t,n){var i=n instanceof en?mt(n):new en(n,void 0);if(i.g!="")t&&(i.g=t+"."+i.g),ws(i,i.m);else{var s=U.location;i=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var r=new en(null,void 0);i&&Is(r,i),t&&(r.g=t),s&&ws(r,s),n&&(r.l=n),i=r}return n=e.D,t=e.za,n&&t&&ie(i,n,t),ie(i,"VER",e.ma),xi(e,i),i}function Wh(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new oe(new Ys({jb:!0})):new oe(e.ra),t.Ka(e.H),t}function Vh(){}P=Vh.prototype;P.xa=function(){};P.wa=function(){};P.va=function(){};P.ua=function(){};P.Ra=function(){};function $e(e,t){de.call(this),this.g=new Lh(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!vs(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!vs(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Fn(this)}me($e,de);$e.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;Te(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=Hh(e,null,e.V),tr(e)};$e.prototype.close=function(){fa(this.g)};$e.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=ea(e),e=n);t.i.push(new Kv(t.ab++,e)),t.G==3&&tr(t)};$e.prototype.M=function(){this.g.l=null,delete this.j,fa(this.g),delete this.g,$e.X.M.call(this)};function zh(e){oa.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}me(zh,oa);function Kh(){aa.call(this),this.status=1}me(Kh,aa);function Fn(e){this.g=e}me(Fn,Vh);Fn.prototype.xa=function(){ge(this.g,"a")};Fn.prototype.wa=function(e){ge(this.g,new zh(e))};Fn.prototype.va=function(e){ge(this.g,new Kh)};Fn.prototype.ua=function(){ge(this.g,"b")};$e.prototype.send=$e.prototype.u;$e.prototype.open=$e.prototype.m;$e.prototype.close=$e.prototype.close;sa.NO_ERROR=0;sa.TIMEOUT=8;sa.HTTP_ERROR=6;Nv.COMPLETE="complete";Lv.EventType=Di;Di.OPEN="a";Di.CLOSE="b";Di.ERROR="c";Di.MESSAGE="d";de.prototype.listen=de.prototype.N;oe.prototype.listenOnce=oe.prototype.O;oe.prototype.getLastError=oe.prototype.Oa;oe.prototype.getLastErrorCode=oe.prototype.Ea;oe.prototype.getStatus=oe.prototype.aa;oe.prototype.getResponseJson=oe.prototype.Sa;oe.prototype.getResponseText=oe.prototype.fa;oe.prototype.send=oe.prototype.da;oe.prototype.setWithCredentials=oe.prototype.Ka;const Xc="@firebase/firestore";/**
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
 */class _e{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}_e.UNAUTHENTICATED=new _e(null),_e.GOOGLE_CREDENTIALS=new _e("google-credentials-uid"),_e.FIRST_PARTY=new _e("first-party-uid"),_e.MOCK_USER=new _e("mock-user");/**
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
 */let Ui="9.19.0";/**
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
 */const Cn=new No("@firebase/firestore");function Ne(e,...t){if(Cn.logLevel<=Y.DEBUG){const n=t.map(ma);Cn.debug(`Firestore (${Ui}): ${e}`,...n)}}function ga(e,...t){if(Cn.logLevel<=Y.ERROR){const n=t.map(ma);Cn.error(`Firestore (${Ui}): ${e}`,...n)}}function nE(e,...t){if(Cn.logLevel<=Y.WARN){const n=t.map(ma);Cn.warn(`Firestore (${Ui}): ${e}`,...n)}}function ma(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
*/var t}/**
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
 */function _a(e="Unexpected state"){const t=`FIRESTORE (${Ui}) INTERNAL ASSERTION FAILED: `+e;throw ga(t),new Error(t)}function co(e,t){e||_a()}/**
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
 */const Le={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Me extends yt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class In{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class qh{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class iE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(_e.UNAUTHENTICATED))}shutdown(){}}class sE{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class rE{constructor(t){this.t=t,this.currentUser=_e.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let i=this.i;const s=c=>this.i!==i?(i=this.i,n(c)):Promise.resolve();let r=new In;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new In,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=r;t.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{Ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(Ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new In)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==t?(Ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(co(typeof i.accessToken=="string"),new qh(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return co(t===null||typeof t=="string"),new _e(t)}}class oE{constructor(t,n,i){this.h=t,this.l=n,this.m=i,this.type="FirstParty",this.user=_e.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class aE{constructor(t,n,i){this.h=t,this.l=n,this.m=i}getToken(){return Promise.resolve(new oE(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(_e.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cE{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lE{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,n){const i=r=>{r.error!=null&&Ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,Ne("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>i(r))};const s=r=>{Ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?s(r):Ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(co(typeof n.token=="string"),this.T=n.token,new cE(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function uE(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */class hE{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const s=uE(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=t.charAt(s[r]%t.length))}return i}}function Gh(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class fE{constructor(t,n,i,s,r,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Ts{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Ts("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ts&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */var Yc,z;(z=Yc||(Yc={}))[z.OK=0]="OK",z[z.CANCELLED=1]="CANCELLED",z[z.UNKNOWN=2]="UNKNOWN",z[z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",z[z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",z[z.NOT_FOUND=5]="NOT_FOUND",z[z.ALREADY_EXISTS=6]="ALREADY_EXISTS",z[z.PERMISSION_DENIED=7]="PERMISSION_DENIED",z[z.UNAUTHENTICATED=16]="UNAUTHENTICATED",z[z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",z[z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",z[z.ABORTED=10]="ABORTED",z[z.OUT_OF_RANGE=11]="OUT_OF_RANGE",z[z.UNIMPLEMENTED=12]="UNIMPLEMENTED",z[z.INTERNAL=13]="INTERNAL",z[z.UNAVAILABLE=14]="UNAVAILABLE",z[z.DATA_LOSS=15]="DATA_LOSS";function Rr(){return typeof document<"u"?document:null}/**
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
 */class dE{constructor(t,n,i=1e3,s=1.5,r=6e4){this.Ws=t,this.timerId=n,this._o=i,this.mo=s,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(t){this.cancel();const n=Math.floor(this.po+this.Ro()),i=Math.max(0,Date.now()-this.To),s=Math.max(0,n-i);s>0&&Ne("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,s,()=>(this.To=Date.now(),t())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class ya{constructor(t,n,i,s,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new In,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,i,s,r){const o=Date.now()+i,a=new ya(t,n,o,s,r);return a.start(i),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Me(Le.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pE(e,t){if(ga("AsyncQueue",`${t}: ${e}`),Gh(e))return new Me(Le.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class gE{constructor(t,n,i,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=_e.UNAUTHENTICATED,this.clientId=hE.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{Ne("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(Ne("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Me(Le.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new In;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const i=pE(n,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}/**
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
 */const Qc=new Map;function mE(e,t,n,i){if(t===!0&&i===!0)throw new Me(Le.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function _E(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":_a()}function yE(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Me(Le.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_E(e);throw new Me(Le.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class Zc{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new Me(Le.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new Me(Le.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,mE("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class Jh{constructor(t,n,i,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Me(Le.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new Me(Le.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zc(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new iE;switch(n.type){case"firstParty":return new aE(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Me(Le.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Qc.get(t);n&&(Ne("ComponentProvider","Removing Datastore"),Qc.delete(t),n.terminate())}(this),Promise.resolve()}}function vE(e,t,n,i={}){var s;const r=(e=yE(e,Jh))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==t&&nE("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},r),{host:`${t}:${n}`,ssl:!1})),i.mockUserToken){let o,a;if(typeof i.mockUserToken=="string")o=i.mockUserToken,a=_e.MOCK_USER;else{o=Ug(i.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new Me(Le.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new _e(c)}e._authCredentials=new sE(new qh(o,a))}}/**
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
 */class EE{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new dE(this,"async_queue_retry"),this.qc=()=>{const n=Rr();n&&Ne("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const t=Rr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Uc(),this.Kc(t)}enterRestrictedMode(t){if(!this.Oc){this.Oc=!0,this.Bc=t||!1;const n=Rr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(t){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new In;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.kc.push(t),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(t){if(!Gh(t))throw t;Ne("AsyncQueue","Operation failed with retryable error: "+t)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(t){const n=this.Nc.then(()=>(this.Fc=!0,t().catch(i=>{this.Mc=i,this.Fc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw ga("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Fc=!1,i))));return this.Nc=n,n}enqueueAfterDelay(t,n,i){this.Uc(),this.Lc.indexOf(t)>-1&&(n=0);const s=ya.createAndSchedule(this,t,n,i,r=>this.Qc(r));return this.$c.push(s),s}Uc(){this.Mc&&_a()}verifyOperationInProgress(){}async zc(){let t;do t=this.Nc,await t;while(t!==this.Nc)}jc(t){for(const n of this.$c)if(n.timerId===t)return!0;return!1}Wc(t){return this.zc().then(()=>{this.$c.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.zc()})}Hc(t){this.Lc.push(t)}Qc(t){const n=this.$c.indexOf(t);this.$c.splice(n,1)}}class IE extends Jh{constructor(t,n,i,s){super(t,n,i,s),this.type="firestore",this._queue=new EE,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||bE(this),this._firestoreClient.terminate()}}function wE(e,t){const n=typeof e=="object"?e:pu(),i=typeof e=="string"?e:t||"(default)",s=Mo(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=Lg("firestore");r&&vE(s,...r)}return s}function bE(e){var t,n,i;const s=e._freezeSettings(),r=function(o,a,c,l){return new fE(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new gE(e._authCredentials,e._appCheckCredentials,e._queue,r),!((n=s.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.cache)===null||i===void 0)&&i._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}(function(e,t=!0){(function(n){Ui=n})(Ti),Sn(new nn("firestore",(n,{instanceIdentifier:i,options:s})=>{const r=n.getProvider("app").getImmediate(),o=new IE(new rE(n.getProvider("auth-internal")),new lE(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new Me(Le.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ts(a.options.projectId,c)}(r,i),r);return s=Object.assign({useFetchStreams:t},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),Nt(Xc,"3.10.0",e),Nt(Xc,"3.10.0","esm2017")})();var TE="firebase",AE="9.19.1";/**
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
 */Nt(TE,AE,"app");const RE={apiKey:"AIzaSyAEn441hlz28aSWIZpiyP-Hzg2ts09HoKs",authDomain:"polls-snoap-taylor.firebaseapp.com",projectId:"polls-snoap-taylor",storageBucket:"polls-snoap-taylor.appspot.com",messagingSenderId:"800775808502",appId:"1:800775808502:web:1775a14231f56cd929d3d7",measurementId:"G-YTCEVMCMR0"},SE=du(RE),Sr=sv(SE);wE();const CE={class:"navbar"},OE={class:"nav-options"},kE={key:0},PE={key:0},DE={key:1},NE={class:"email"},LE={key:0},ME=Ce("h1",{style:{color:"darkblue","font-size":"50px"}},"SnoTay Wordle",-1),xE=Ce("h4",{style:{"font-size":"large",color:"black"}},[De(" Cameron Snoap"),Ce("br"),De(" Kyle Taylor ")],-1),UE=Ce("h2",null,[Ce("br"),De(" Click "),Ce("u",null,"Sign Up"),De(" if you don't already have an account! ")],-1),FE=Ce("h2",null,[De(" Or, click "),Ce("u",null,"Login"),De(" if you do! ")],-1),jE=[ME,xE,UE,FE],$E=Ro({__name:"App",setup(e){const t=Ag();Rg().query.email;const i=Qi(""),s=Qi("");let r="",o="";const a=Qi(!0);Sr.onAuthStateChanged(function(f){f?(a.value=!0,i.value=f.uid,console.log(`User UID: ${i.value}`)):(a.value=!1,i.value="")});async function c(){await new Promise(f=>{Yn(s,(p,_)=>{console.log(`userEmail changed from ${_} to ${p}`),o=p,f()})}),console.log(`New userEmail value: ${o}`)}function l(f){f?(i.value=f.uid,s.value=f.email||"",f.uid):(i.value="",s.value="")}Sr.onAuthStateChanged(l),c(),console.log(`New value ${r}`);const h=()=>{Sr.signOut(),t.push("/")};return(f,p)=>{const _=sr("router-link"),T=sr("h"),C=sr("router-view");return hn(),Bn(nt,null,[Ce("div",CE,[Ce("nav",OE,[a.value?(hn(),Bn("span",kE,[f.$route.path==="/"?(hn(),Bn("span",PE,[he(_,{to:"/Polls"},{default:Kn(()=>[De(" Polls ")]),_:1}),De(" | ")])):$a("",!0),Ce("button",{onClick:h}," Logout ")])):(hn(),Bn("span",DE,[he(_,{to:"/SignUp"},{default:Kn(()=>[De(" Sign Up ")]),_:1}),De(" | "),he(_,{to:"/Login"},{default:Kn(()=>[De(" Login ")]),_:1})]))]),Ce("div",NE,[he(T,null,{default:Kn(()=>[De(rf(Yt(o)),1)]),_:1})])]),f.$route.path==="/"?(hn(),Bn("div",LE,jE)):$a("",!0),he(C)],64)}}});const BE="modulepreload",HE=function(e){return"/"+e},el={},Ji=function(t,n,i){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=HE(r),r in el)return;el[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!i)for(let h=s.length-1;h>=0;h--){const f=s[h];if(f.href===r&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":BE,o||(l.as="script",l.crossOrigin=""),l.href=r,document.head.appendChild(l),o)return new Promise((h,f)=>{l.addEventListener("load",h),l.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())},Xh=bg({history:jp("/"),routes:[{name:"Home",path:"/",component:()=>Ji(()=>Promise.resolve().then(()=>WE),void 0)},{name:"Polls",path:"/Polls",component:()=>Ji(()=>import("./Polls-282105a2.js"),["assets/Polls-282105a2.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/Polls-8517dc10.css"])},{name:"signUp",path:"/signUp",component:()=>Ji(()=>import("./signup-4fd81a63.js"),["assets/signup-4fd81a63.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/signup-f2d45121.css"])},{name:"Login",path:"/Login",component:()=>Ji(()=>import("./Login-8e299160.js"),[])}]}),WE=Object.freeze(Object.defineProperty({__proto__:null,default:Xh},Symbol.toStringTag,{value:"Module"})),Yh=Ep($E);Yh.use(Xh);Yh.mount("#app");export{nt as F,Rt as G,Sr as a,Ce as b,Bn as c,Ro as d,KE as e,he as f,GE as g,zE as h,Ag as i,sr as j,YE as k,JE as l,hn as o,VE as p,Qi as r,XE as s,Rg as u,qE as v,Yn as w};
