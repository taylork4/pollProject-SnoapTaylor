(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Ic(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function Tc(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Oe(s)?Sm(s):Tc(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Oe(t))return t;if(ve(t))return t}}const Im=/;(?![^(]*\))/g,Tm=/:([^]+)/,bm=/\/\*.*?\*\//gs;function Sm(t){const e={};return t.replace(bm,"").split(Im).forEach(n=>{if(n){const s=n.split(Tm);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function bc(t){let e="";if(Oe(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const s=bc(t[n]);s&&(e+=s+" ")}else if(ve(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Cm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Am=Ic(Cm);function cf(t){return!!t||t===""}const km=t=>Oe(t)?t:t==null?"":G(t)||ve(t)&&(t.toString===ff||!Y(t.toString))?JSON.stringify(t,uf,2):String(t),uf=(t,e)=>e&&e.__v_isRef?uf(t,e.value):us(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:lf(e)?{[`Set(${e.size})`]:[...e.values()]}:ve(e)&&!G(e)&&!df(e)?String(e):e,de={},cs=[],wt=()=>{},Rm=()=>!1,Dm=/^on[^a-z]/,uo=t=>Dm.test(t),Sc=t=>t.startsWith("onUpdate:"),Ye=Object.assign,Cc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Nm=Object.prototype.hasOwnProperty,se=(t,e)=>Nm.call(t,e),G=Array.isArray,us=t=>lo(t)==="[object Map]",lf=t=>lo(t)==="[object Set]",Y=t=>typeof t=="function",Oe=t=>typeof t=="string",Ac=t=>typeof t=="symbol",ve=t=>t!==null&&typeof t=="object",hf=t=>ve(t)&&Y(t.then)&&Y(t.catch),ff=Object.prototype.toString,lo=t=>ff.call(t),Om=t=>lo(t).slice(8,-1),df=t=>lo(t)==="[object Object]",kc=t=>Oe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ei=Ic(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ho=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Pm=/-(\w)/g,xt=ho(t=>t.replace(Pm,(e,n)=>n?n.toUpperCase():"")),xm=/\B([A-Z])/g,Ds=ho(t=>t.replace(xm,"-$1").toLowerCase()),fo=ho(t=>t.charAt(0).toUpperCase()+t.slice(1)),ta=ho(t=>t?`on${fo(t)}`:""),pr=(t,e)=>!Object.is(t,e),Ii=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Mi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Na=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Xu;const Mm=()=>Xu||(Xu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let gt;class Lm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=gt,!e&&gt&&(this.index=(gt.scopes||(gt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=gt;try{return gt=this,e()}finally{gt=n}}}on(){gt=this}off(){gt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Um(t,e=gt){e&&e.active&&e.effects.push(t)}function Fm(){return gt}const Rc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},pf=t=>(t.w&gn)>0,gf=t=>(t.n&gn)>0,Vm=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=gn},$m=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];pf(r)&&!gf(r)?r.delete(t):e[n++]=r,r.w&=~gn,r.n&=~gn}e.length=n}},Oa=new WeakMap;let Qs=0,gn=1;const Pa=30;let mt;const Mn=Symbol(""),xa=Symbol("");class Dc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Um(this,s)}run(){if(!this.active)return this.fn();let e=mt,n=un;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=mt,mt=this,un=!0,gn=1<<++Qs,Qs<=Pa?Vm(this):Zu(this),this.fn()}finally{Qs<=Pa&&$m(this),gn=1<<--Qs,mt=this.parent,un=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){mt===this?this.deferStop=!0:this.active&&(Zu(this),this.onStop&&this.onStop(),this.active=!1)}}function Zu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let un=!0;const mf=[];function Ns(){mf.push(un),un=!1}function Os(){const t=mf.pop();un=t===void 0?!0:t}function tt(t,e,n){if(un&&mt){let s=Oa.get(t);s||Oa.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Rc()),yf(r)}}function yf(t,e){let n=!1;Qs<=Pa?gf(t)||(t.n|=gn,n=!pf(t)):n=!t.has(mt),n&&(t.add(mt),mt.deps.push(t))}function qt(t,e,n,s,r,i){const o=Oa.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&G(t)){const c=Number(s);o.forEach((u,l)=>{(l==="length"||l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":G(t)?kc(n)&&a.push(o.get("length")):(a.push(o.get(Mn)),us(t)&&a.push(o.get(xa)));break;case"delete":G(t)||(a.push(o.get(Mn)),us(t)&&a.push(o.get(xa)));break;case"set":us(t)&&a.push(o.get(Mn));break}if(a.length===1)a[0]&&Ma(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);Ma(Rc(c))}}function Ma(t,e){const n=G(t)?t:[...t];for(const s of n)s.computed&&el(s);for(const s of n)s.computed||el(s)}function el(t,e){(t!==mt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Bm=Ic("__proto__,__v_isRef,__isVue"),vf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ac)),jm=Nc(),Hm=Nc(!1,!0),qm=Nc(!0),tl=zm();function zm(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ie(this);for(let i=0,o=this.length;i<o;i++)tt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ie)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ns();const s=ie(this)[e].apply(this,n);return Os(),s}}),t}function Km(t){const e=ie(this);return tt(e,"has",t),e.hasOwnProperty(t)}function Nc(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?cy:Tf:e?If:Ef).get(s))return s;const o=G(s);if(!t){if(o&&se(tl,r))return Reflect.get(tl,r,i);if(r==="hasOwnProperty")return Km}const a=Reflect.get(s,r,i);return(Ac(r)?vf.has(r):Bm(r))||(t||tt(s,"get",r),e)?a:je(a)?o&&kc(r)?a:a.value:ve(a)?t?bf(a):Lr(a):a}}const Wm=wf(),Gm=wf(!0);function wf(t=!1){return function(n,s,r,i){let o=n[s];if(ms(o)&&je(o)&&!je(r))return!1;if(!t&&(!Li(r)&&!ms(r)&&(o=ie(o),r=ie(r)),!G(n)&&je(o)&&!je(r)))return o.value=r,!0;const a=G(n)&&kc(s)?Number(s)<n.length:se(n,s),c=Reflect.set(n,s,r,i);return n===ie(i)&&(a?pr(r,o)&&qt(n,"set",s,r):qt(n,"add",s,r)),c}}function Qm(t,e){const n=se(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&qt(t,"delete",e,void 0),s}function Ym(t,e){const n=Reflect.has(t,e);return(!Ac(e)||!vf.has(e))&&tt(t,"has",e),n}function Jm(t){return tt(t,"iterate",G(t)?"length":Mn),Reflect.ownKeys(t)}const _f={get:jm,set:Wm,deleteProperty:Qm,has:Ym,ownKeys:Jm},Xm={get:qm,set(t,e){return!0},deleteProperty(t,e){return!0}},Zm=Ye({},_f,{get:Hm,set:Gm}),Oc=t=>t,po=t=>Reflect.getPrototypeOf(t);function oi(t,e,n=!1,s=!1){t=t.__v_raw;const r=ie(t),i=ie(e);n||(e!==i&&tt(r,"get",e),tt(r,"get",i));const{has:o}=po(r),a=s?Oc:n?Mc:gr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function ai(t,e=!1){const n=this.__v_raw,s=ie(n),r=ie(t);return e||(t!==r&&tt(s,"has",t),tt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function ci(t,e=!1){return t=t.__v_raw,!e&&tt(ie(t),"iterate",Mn),Reflect.get(t,"size",t)}function nl(t){t=ie(t);const e=ie(this);return po(e).has.call(e,t)||(e.add(t),qt(e,"add",t,t)),this}function sl(t,e){e=ie(e);const n=ie(this),{has:s,get:r}=po(n);let i=s.call(n,t);i||(t=ie(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?pr(e,o)&&qt(n,"set",t,e):qt(n,"add",t,e),this}function rl(t){const e=ie(this),{has:n,get:s}=po(e);let r=n.call(e,t);r||(t=ie(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&qt(e,"delete",t,void 0),i}function il(){const t=ie(this),e=t.size!==0,n=t.clear();return e&&qt(t,"clear",void 0,void 0),n}function ui(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ie(o),c=e?Oc:t?Mc:gr;return!t&&tt(a,"iterate",Mn),o.forEach((u,l)=>s.call(r,c(u),c(l),i))}}function li(t,e,n){return function(...s){const r=this.__v_raw,i=ie(r),o=us(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),l=n?Oc:e?Mc:gr;return!e&&tt(i,"iterate",c?xa:Mn),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[l(h[0]),l(h[1])]:l(h),done:d}},[Symbol.iterator](){return this}}}}function Zt(t){return function(...e){return t==="delete"?!1:this}}function ey(){const t={get(i){return oi(this,i)},get size(){return ci(this)},has:ai,add:nl,set:sl,delete:rl,clear:il,forEach:ui(!1,!1)},e={get(i){return oi(this,i,!1,!0)},get size(){return ci(this)},has:ai,add:nl,set:sl,delete:rl,clear:il,forEach:ui(!1,!0)},n={get(i){return oi(this,i,!0)},get size(){return ci(this,!0)},has(i){return ai.call(this,i,!0)},add:Zt("add"),set:Zt("set"),delete:Zt("delete"),clear:Zt("clear"),forEach:ui(!0,!1)},s={get(i){return oi(this,i,!0,!0)},get size(){return ci(this,!0)},has(i){return ai.call(this,i,!0)},add:Zt("add"),set:Zt("set"),delete:Zt("delete"),clear:Zt("clear"),forEach:ui(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=li(i,!1,!1),n[i]=li(i,!0,!1),e[i]=li(i,!1,!0),s[i]=li(i,!0,!0)}),[t,n,e,s]}const[ty,ny,sy,ry]=ey();function Pc(t,e){const n=e?t?ry:sy:t?ny:ty;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(se(n,r)&&r in s?n:s,r,i)}const iy={get:Pc(!1,!1)},oy={get:Pc(!1,!0)},ay={get:Pc(!0,!1)},Ef=new WeakMap,If=new WeakMap,Tf=new WeakMap,cy=new WeakMap;function uy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ly(t){return t.__v_skip||!Object.isExtensible(t)?0:uy(Om(t))}function Lr(t){return ms(t)?t:xc(t,!1,_f,iy,Ef)}function hy(t){return xc(t,!1,Zm,oy,If)}function bf(t){return xc(t,!0,Xm,ay,Tf)}function xc(t,e,n,s,r){if(!ve(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=ly(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function ls(t){return ms(t)?ls(t.__v_raw):!!(t&&t.__v_isReactive)}function ms(t){return!!(t&&t.__v_isReadonly)}function Li(t){return!!(t&&t.__v_isShallow)}function Sf(t){return ls(t)||ms(t)}function ie(t){const e=t&&t.__v_raw;return e?ie(e):t}function Cf(t){return Mi(t,"__v_skip",!0),t}const gr=t=>ve(t)?Lr(t):t,Mc=t=>ve(t)?bf(t):t;function Af(t){un&&mt&&(t=ie(t),yf(t.dep||(t.dep=Rc())))}function kf(t,e){t=ie(t);const n=t.dep;n&&Ma(n)}function je(t){return!!(t&&t.__v_isRef===!0)}function Ti(t){return Rf(t,!1)}function fy(t){return Rf(t,!0)}function Rf(t,e){return je(t)?t:new dy(t,e)}class dy{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ie(e),this._value=n?e:gr(e)}get value(){return Af(this),this._value}set value(e){const n=this.__v_isShallow||Li(e)||ms(e);e=n?e:ie(e),pr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:gr(e),kf(this))}}function Ln(t){return je(t)?t.value:t}const py={get:(t,e,n)=>Ln(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return je(r)&&!je(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Df(t){return ls(t)?t:new Proxy(t,py)}var Nf;class gy{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Nf]=!1,this._dirty=!0,this.effect=new Dc(e,()=>{this._dirty||(this._dirty=!0,kf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ie(this);return Af(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Nf="__v_isReadonly";function my(t,e,n=!1){let s,r;const i=Y(t);return i?(s=t,r=wt):(s=t.get,r=t.set),new gy(s,r,i||!r,n)}function ln(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){go(i,e,n)}return r}function _t(t,e,n,s){if(Y(t)){const i=ln(t,e,n,s);return i&&hf(i)&&i.catch(o=>{go(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(_t(t[i],e,n,s));return r}function go(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){ln(c,null,10,[t,o,a]);return}}yy(t,n,r,s)}function yy(t,e,n,s=!0){console.error(t)}let mr=!1,La=!1;const $e=[];let Rt=0;const hs=[];let Ft=null,kn=0;const Of=Promise.resolve();let Lc=null;function Pf(t){const e=Lc||Of;return t?e.then(this?t.bind(this):t):e}function vy(t){let e=Rt+1,n=$e.length;for(;e<n;){const s=e+n>>>1;yr($e[s])<t?e=s+1:n=s}return e}function Uc(t){(!$e.length||!$e.includes(t,mr&&t.allowRecurse?Rt+1:Rt))&&(t.id==null?$e.push(t):$e.splice(vy(t.id),0,t),xf())}function xf(){!mr&&!La&&(La=!0,Lc=Of.then(Lf))}function wy(t){const e=$e.indexOf(t);e>Rt&&$e.splice(e,1)}function _y(t){G(t)?hs.push(...t):(!Ft||!Ft.includes(t,t.allowRecurse?kn+1:kn))&&hs.push(t),xf()}function ol(t,e=mr?Rt+1:0){for(;e<$e.length;e++){const n=$e[e];n&&n.pre&&($e.splice(e,1),e--,n())}}function Mf(t){if(hs.length){const e=[...new Set(hs)];if(hs.length=0,Ft){Ft.push(...e);return}for(Ft=e,Ft.sort((n,s)=>yr(n)-yr(s)),kn=0;kn<Ft.length;kn++)Ft[kn]();Ft=null,kn=0}}const yr=t=>t.id==null?1/0:t.id,Ey=(t,e)=>{const n=yr(t)-yr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Lf(t){La=!1,mr=!0,$e.sort(Ey);const e=wt;try{for(Rt=0;Rt<$e.length;Rt++){const n=$e[Rt];n&&n.active!==!1&&ln(n,null,14)}}finally{Rt=0,$e.length=0,Mf(),mr=!1,Lc=null,($e.length||hs.length)&&Lf()}}function Iy(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||de;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[l]||de;d&&(r=n.map(g=>Oe(g)?g.trim():g)),h&&(r=n.map(Na))}let a,c=s[a=ta(e)]||s[a=ta(xt(e))];!c&&i&&(c=s[a=ta(Ds(e))]),c&&_t(c,t,6,r);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,_t(u,t,6,r)}}function Uf(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!Y(t)){const c=u=>{const l=Uf(u,e,!0);l&&(a=!0,Ye(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ve(t)&&s.set(t,null),null):(G(i)?i.forEach(c=>o[c]=null):Ye(o,i),ve(t)&&s.set(t,o),o)}function mo(t,e){return!t||!uo(e)?!1:(e=e.slice(2).replace(/Once$/,""),se(t,e[0].toLowerCase()+e.slice(1))||se(t,Ds(e))||se(t,e))}let lt=null,yo=null;function Ui(t){const e=lt;return lt=t,yo=t&&t.type.__scopeId||null,e}function QC(t){yo=t}function YC(){yo=null}function Ys(t,e=lt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&ml(-1);const i=Ui(e);let o;try{o=t(...r)}finally{Ui(i),s._d&&ml(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function na(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:d,setupState:g,ctx:v,inheritAttrs:E}=t;let D,k;const U=Ui(t);try{if(n.shapeFlag&4){const J=r||s;D=kt(l.call(J,J,h,i,g,d,v)),k=c}else{const J=e;D=kt(J.length>1?J(i,{attrs:c,slots:a,emit:u}):J(i,null)),k=e.props?c:Ty(c)}}catch(J){ir.length=0,go(J,t,1),D=Ne(Bn)}let P=D;if(k&&E!==!1){const J=Object.keys(k),{shapeFlag:fe}=P;J.length&&fe&7&&(o&&J.some(Sc)&&(k=by(k,o)),P=ys(P,k))}return n.dirs&&(P=ys(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),D=P,Ui(U),D}const Ty=t=>{let e;for(const n in t)(n==="class"||n==="style"||uo(n))&&((e||(e={}))[n]=t[n]);return e},by=(t,e)=>{const n={};for(const s in t)(!Sc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Sy(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?al(s,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const d=l[h];if(o[d]!==s[d]&&!mo(u,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?al(s,o,u):!0:!!o;return!1}function al(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!mo(n,i))return!0}return!1}function Cy({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Ay=t=>t.__isSuspense;function ky(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):_y(t)}function bi(t,e){if(Se){let n=Se.provides;const s=Se.parent&&Se.parent.provides;s===n&&(n=Se.provides=Object.create(s)),n[t]=e}}function Et(t,e,n=!1){const s=Se||lt;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Y(e)?e.call(s.proxy):e}}const hi={};function sr(t,e,n){return Ff(t,e,n)}function Ff(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=de){const a=Fm()===(Se==null?void 0:Se.scope)?Se:null;let c,u=!1,l=!1;if(je(t)?(c=()=>t.value,u=Li(t)):ls(t)?(c=()=>t,s=!0):G(t)?(l=!0,u=t.some(P=>ls(P)||Li(P)),c=()=>t.map(P=>{if(je(P))return P.value;if(ls(P))return Dn(P);if(Y(P))return ln(P,a,2)})):Y(t)?e?c=()=>ln(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),_t(t,a,3,[d])}:c=wt,e&&s){const P=c;c=()=>Dn(P())}let h,d=P=>{h=k.onStop=()=>{ln(P,a,4)}},g;if(wr)if(d=wt,e?n&&_t(e,a,3,[c(),l?[]:void 0,d]):c(),r==="sync"){const P=Iv();g=P.__watcherHandles||(P.__watcherHandles=[])}else return wt;let v=l?new Array(t.length).fill(hi):hi;const E=()=>{if(k.active)if(e){const P=k.run();(s||u||(l?P.some((J,fe)=>pr(J,v[fe])):pr(P,v)))&&(h&&h(),_t(e,a,3,[P,v===hi?void 0:l&&v[0]===hi?[]:v,d]),v=P)}else k.run()};E.allowRecurse=!!e;let D;r==="sync"?D=E:r==="post"?D=()=>Ze(E,a&&a.suspense):(E.pre=!0,a&&(E.id=a.uid),D=()=>Uc(E));const k=new Dc(c,D);e?n?E():v=k.run():r==="post"?Ze(k.run.bind(k),a&&a.suspense):k.run();const U=()=>{k.stop(),a&&a.scope&&Cc(a.scope.effects,k)};return g&&g.push(U),U}function Ry(t,e,n){const s=this.proxy,r=Oe(t)?t.includes(".")?Vf(s,t):()=>s[t]:t.bind(s,s);let i;Y(e)?i=e:(i=e.handler,n=e);const o=Se;vs(this);const a=Ff(r,i.bind(s),n);return o?vs(o):Un(),a}function Vf(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Dn(t,e){if(!ve(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),je(t))Dn(t.value,e);else if(G(t))for(let n=0;n<t.length;n++)Dn(t[n],e);else if(lf(t)||us(t))t.forEach(n=>{Dn(n,e)});else if(df(t))for(const n in t)Dn(t[n],e);return t}function Fc(t){return Y(t)?{setup:t,name:t.name}:t}const Si=t=>!!t.type.__asyncLoader,$f=t=>t.type.__isKeepAlive;function Dy(t,e){Bf(t,"a",e)}function Ny(t,e){Bf(t,"da",e)}function Bf(t,e,n=Se){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(vo(e,s,n),n){let r=n.parent;for(;r&&r.parent;)$f(r.parent.vnode)&&Oy(s,e,n,r),r=r.parent}}function Oy(t,e,n,s){const r=vo(e,t,s,!0);jf(()=>{Cc(s[e],r)},n)}function vo(t,e,n=Se,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ns(),vs(n);const a=_t(e,n,t,o);return Un(),Os(),a});return s?r.unshift(i):r.push(i),i}}const Yt=t=>(e,n=Se)=>(!wr||t==="sp")&&vo(t,(...s)=>e(...s),n),Py=Yt("bm"),xy=Yt("m"),My=Yt("bu"),Ly=Yt("u"),Uy=Yt("bum"),jf=Yt("um"),Fy=Yt("sp"),Vy=Yt("rtg"),$y=Yt("rtc");function By(t,e=Se){vo("ec",t,e)}function JC(t,e){const n=lt;if(n===null)return t;const s=Eo(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=de]=e[i];o&&(Y(o)&&(o={mounted:o,updated:o}),o.deep&&Dn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function Tn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Ns(),_t(c,n,8,[t.el,a,t,e]),Os())}}const Hf="components";function cl(t,e){return Hy(Hf,t,!0,e)||t}const jy=Symbol();function Hy(t,e,n=!0,s=!1){const r=lt||Se;if(r){const i=r.type;if(t===Hf){const a=wv(i,!1);if(a&&(a===e||a===xt(e)||a===fo(xt(e))))return i}const o=ul(r[t]||i[t],e)||ul(r.appContext[t],e);return!o&&s?i:o}}function ul(t,e){return t&&(t[e]||t[xt(e)]||t[fo(xt(e))])}const Ua=t=>t?ed(t)?Eo(t)||t.proxy:Ua(t.parent):null,rr=Ye(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ua(t.parent),$root:t=>Ua(t.root),$emit:t=>t.emit,$options:t=>Vc(t),$forceUpdate:t=>t.f||(t.f=()=>Uc(t.update)),$nextTick:t=>t.n||(t.n=Pf.bind(t.proxy)),$watch:t=>Ry.bind(t)}),sa=(t,e)=>t!==de&&!t.__isScriptSetup&&se(t,e),qy={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(sa(s,e))return o[e]=1,s[e];if(r!==de&&se(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&se(u,e))return o[e]=3,i[e];if(n!==de&&se(n,e))return o[e]=4,n[e];Fa&&(o[e]=0)}}const l=rr[e];let h,d;if(l)return e==="$attrs"&&tt(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==de&&se(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,se(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return sa(r,e)?(r[e]=n,!0):s!==de&&se(s,e)?(s[e]=n,!0):se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==de&&se(t,o)||sa(e,o)||(a=i[0])&&se(a,o)||se(s,o)||se(rr,o)||se(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Fa=!0;function zy(t){const e=Vc(t),n=t.proxy,s=t.ctx;Fa=!1,e.beforeCreate&&ll(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:d,beforeUpdate:g,updated:v,activated:E,deactivated:D,beforeDestroy:k,beforeUnmount:U,destroyed:P,unmounted:J,render:fe,renderTracked:_e,renderTriggered:We,errorCaptured:Je,serverPrefetch:Tt,expose:ot,inheritAttrs:Xt,components:bt,directives:Xn,filters:En}=e;if(u&&Ky(u,s,null,t.appContext.config.unwrapInjectedRef),o)for(const le in o){const ce=o[le];Y(ce)&&(s[le]=ce.bind(n))}if(r){const le=r.call(n,n);ve(le)&&(t.data=Lr(le))}if(Fa=!0,i)for(const le in i){const ce=i[le],ft=Y(ce)?ce.bind(n,n):Y(ce.get)?ce.get.bind(n,n):wt,In=!Y(ce)&&Y(ce.set)?ce.set.bind(n):wt,dt=ct({get:ft,set:In});Object.defineProperty(s,le,{enumerable:!0,configurable:!0,get:()=>dt.value,set:Xe=>dt.value=Xe})}if(a)for(const le in a)qf(a[le],s,n,le);if(c){const le=Y(c)?c.call(n):c;Reflect.ownKeys(le).forEach(ce=>{bi(ce,le[ce])})}l&&ll(l,t,"c");function Ee(le,ce){G(ce)?ce.forEach(ft=>le(ft.bind(n))):ce&&le(ce.bind(n))}if(Ee(Py,h),Ee(xy,d),Ee(My,g),Ee(Ly,v),Ee(Dy,E),Ee(Ny,D),Ee(By,Je),Ee($y,_e),Ee(Vy,We),Ee(Uy,U),Ee(jf,J),Ee(Fy,Tt),G(ot))if(ot.length){const le=t.exposed||(t.exposed={});ot.forEach(ce=>{Object.defineProperty(le,ce,{get:()=>n[ce],set:ft=>n[ce]=ft})})}else t.exposed||(t.exposed={});fe&&t.render===wt&&(t.render=fe),Xt!=null&&(t.inheritAttrs=Xt),bt&&(t.components=bt),Xn&&(t.directives=Xn)}function Ky(t,e,n=wt,s=!1){G(t)&&(t=Va(t));for(const r in t){const i=t[r];let o;ve(i)?"default"in i?o=Et(i.from||r,i.default,!0):o=Et(i.from||r):o=Et(i),je(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function ll(t,e,n){_t(G(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function qf(t,e,n,s){const r=s.includes(".")?Vf(n,s):()=>n[s];if(Oe(t)){const i=e[t];Y(i)&&sr(r,i)}else if(Y(t))sr(r,t.bind(n));else if(ve(t))if(G(t))t.forEach(i=>qf(i,e,n,s));else{const i=Y(t.handler)?t.handler.bind(n):e[t.handler];Y(i)&&sr(r,i,t)}}function Vc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>Fi(c,u,o,!0)),Fi(c,e,o)),ve(e)&&i.set(e,c),c}function Fi(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Fi(t,i,n,!0),r&&r.forEach(o=>Fi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Wy[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Wy={data:hl,props:Sn,emits:Sn,methods:Sn,computed:Sn,beforeCreate:Ge,created:Ge,beforeMount:Ge,mounted:Ge,beforeUpdate:Ge,updated:Ge,beforeDestroy:Ge,beforeUnmount:Ge,destroyed:Ge,unmounted:Ge,activated:Ge,deactivated:Ge,errorCaptured:Ge,serverPrefetch:Ge,components:Sn,directives:Sn,watch:Qy,provide:hl,inject:Gy};function hl(t,e){return e?t?function(){return Ye(Y(t)?t.call(this,this):t,Y(e)?e.call(this,this):e)}:e:t}function Gy(t,e){return Sn(Va(t),Va(e))}function Va(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ge(t,e){return t?[...new Set([].concat(t,e))]:e}function Sn(t,e){return t?Ye(Ye(Object.create(null),t),e):e}function Qy(t,e){if(!t)return e;if(!e)return t;const n=Ye(Object.create(null),t);for(const s in e)n[s]=Ge(t[s],e[s]);return n}function Yy(t,e,n,s=!1){const r={},i={};Mi(i,_o,1),t.propsDefaults=Object.create(null),zf(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:hy(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Jy(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ie(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let d=l[h];if(mo(t.emitsOptions,d))continue;const g=e[d];if(c)if(se(i,d))g!==i[d]&&(i[d]=g,u=!0);else{const v=xt(d);r[v]=$a(c,a,v,g,t,!1)}else g!==i[d]&&(i[d]=g,u=!0)}}}else{zf(t,e,r,i)&&(u=!0);let l;for(const h in a)(!e||!se(e,h)&&((l=Ds(h))===h||!se(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(r[h]=$a(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!se(e,h))&&(delete i[h],u=!0)}u&&qt(t,"set","$attrs")}function zf(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ei(c))continue;const u=e[c];let l;r&&se(r,l=xt(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:mo(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=ie(n),u=a||de;for(let l=0;l<i.length;l++){const h=i[l];n[h]=$a(r,c,h,u[h],t,!se(u,h))}}return o}function $a(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=se(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&Y(c)){const{propsDefaults:u}=r;n in u?s=u[n]:(vs(r),s=u[n]=c.call(null,e),Un())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Ds(n))&&(s=!0))}return s}function Kf(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!Y(t)){const l=h=>{c=!0;const[d,g]=Kf(h,e,!0);Ye(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return ve(t)&&s.set(t,cs),cs;if(G(i))for(let l=0;l<i.length;l++){const h=xt(i[l]);fl(h)&&(o[h]=de)}else if(i)for(const l in i){const h=xt(l);if(fl(h)){const d=i[l],g=o[h]=G(d)||Y(d)?{type:d}:Object.assign({},d);if(g){const v=gl(Boolean,g.type),E=gl(String,g.type);g[0]=v>-1,g[1]=E<0||v<E,(v>-1||se(g,"default"))&&a.push(h)}}}const u=[o,a];return ve(t)&&s.set(t,u),u}function fl(t){return t[0]!=="$"}function dl(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function pl(t,e){return dl(t)===dl(e)}function gl(t,e){return G(e)?e.findIndex(n=>pl(n,t)):Y(e)&&pl(e,t)?0:-1}const Wf=t=>t[0]==="_"||t==="$stable",$c=t=>G(t)?t.map(kt):[kt(t)],Xy=(t,e,n)=>{if(e._n)return e;const s=Ys((...r)=>$c(e(...r)),n);return s._c=!1,s},Gf=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Wf(r))continue;const i=t[r];if(Y(i))e[r]=Xy(r,i,s);else if(i!=null){const o=$c(i);e[r]=()=>o}}},Qf=(t,e)=>{const n=$c(e);t.slots.default=()=>n},Zy=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ie(e),Mi(e,"_",n)):Gf(e,t.slots={})}else t.slots={},e&&Qf(t,e);Mi(t.slots,_o,1)},ev=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=de;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ye(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Gf(e,r)),o=e}else e&&(Qf(t,e),o={default:1});if(i)for(const a in r)!Wf(a)&&!(a in o)&&delete r[a]};function Yf(){return{app:null,config:{isNativeTag:Rm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tv=0;function nv(t,e){return function(s,r=null){Y(s)||(s=Object.assign({},s)),r!=null&&!ve(r)&&(r=null);const i=Yf(),o=new Set;let a=!1;const c=i.app={_uid:tv++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Tv,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&Y(u.install)?(o.add(u),u.install(c,...l)):Y(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,h){if(!a){const d=Ne(s,r);return d.appContext=i,l&&e?e(d,u):t(d,u,h),a=!0,c._container=u,u.__vue_app__=c,Eo(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function Ba(t,e,n,s,r=!1){if(G(t)){t.forEach((d,g)=>Ba(d,e&&(G(e)?e[g]:e),n,s,r));return}if(Si(s)&&!r)return;const i=s.shapeFlag&4?Eo(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===de?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(Oe(u)?(l[u]=null,se(h,u)&&(h[u]=null)):je(u)&&(u.value=null)),Y(c))ln(c,a,12,[o,l]);else{const d=Oe(c),g=je(c);if(d||g){const v=()=>{if(t.f){const E=d?se(h,c)?h[c]:l[c]:c.value;r?G(E)&&Cc(E,i):G(E)?E.includes(i)||E.push(i):d?(l[c]=[i],se(h,c)&&(h[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else d?(l[c]=o,se(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(l[t.k]=o))};o?(v.id=-1,Ze(v,n)):v()}}}const Ze=ky;function sv(t){return rv(t)}function rv(t,e){const n=Mm();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:d,setScopeId:g=wt,insertStaticContent:v}=t,E=(f,p,m,y=null,_=null,C=null,N=!1,S=null,A=!!p.dynamicChildren)=>{if(f===p)return;f&&!zs(f,p)&&(y=R(f),Xe(f,_,C,!0),f=null),p.patchFlag===-2&&(A=!1,p.dynamicChildren=null);const{type:T,ref:V,shapeFlag:x}=p;switch(T){case wo:D(f,p,m,y);break;case Bn:k(f,p,m,y);break;case ra:f==null&&U(p,m,y,N);break;case At:bt(f,p,m,y,_,C,N,S,A);break;default:x&1?fe(f,p,m,y,_,C,N,S,A):x&6?Xn(f,p,m,y,_,C,N,S,A):(x&64||x&128)&&T.process(f,p,m,y,_,C,N,S,A,ne)}V!=null&&_&&Ba(V,f&&f.ref,C,p||f,!p)},D=(f,p,m,y)=>{if(f==null)s(p.el=a(p.children),m,y);else{const _=p.el=f.el;p.children!==f.children&&u(_,p.children)}},k=(f,p,m,y)=>{f==null?s(p.el=c(p.children||""),m,y):p.el=f.el},U=(f,p,m,y)=>{[f.el,f.anchor]=v(f.children,p,m,y,f.el,f.anchor)},P=({el:f,anchor:p},m,y)=>{let _;for(;f&&f!==p;)_=d(f),s(f,m,y),f=_;s(p,m,y)},J=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=d(f),r(f),f=m;r(p)},fe=(f,p,m,y,_,C,N,S,A)=>{N=N||p.type==="svg",f==null?_e(p,m,y,_,C,N,S,A):Tt(f,p,_,C,N,S,A)},_e=(f,p,m,y,_,C,N,S)=>{let A,T;const{type:V,props:x,shapeFlag:$,transition:K,dirs:Z}=f;if(A=f.el=o(f.type,C,x&&x.is,x),$&8?l(A,f.children):$&16&&Je(f.children,A,null,y,_,C&&V!=="foreignObject",N,S),Z&&Tn(f,null,y,"created"),We(A,f,f.scopeId,N,y),x){for(const ue in x)ue!=="value"&&!Ei(ue)&&i(A,ue,null,x[ue],C,f.children,y,_,O);"value"in x&&i(A,"value",null,x.value),(T=x.onVnodeBeforeMount)&&Ct(T,y,f)}Z&&Tn(f,null,y,"beforeMount");const he=(!_||_&&!_.pendingBranch)&&K&&!K.persisted;he&&K.beforeEnter(A),s(A,p,m),((T=x&&x.onVnodeMounted)||he||Z)&&Ze(()=>{T&&Ct(T,y,f),he&&K.enter(A),Z&&Tn(f,null,y,"mounted")},_)},We=(f,p,m,y,_)=>{if(m&&g(f,m),y)for(let C=0;C<y.length;C++)g(f,y[C]);if(_){let C=_.subTree;if(p===C){const N=_.vnode;We(f,N,N.scopeId,N.slotScopeIds,_.parent)}}},Je=(f,p,m,y,_,C,N,S,A=0)=>{for(let T=A;T<f.length;T++){const V=f[T]=S?nn(f[T]):kt(f[T]);E(null,V,p,m,y,_,C,N,S)}},Tt=(f,p,m,y,_,C,N)=>{const S=p.el=f.el;let{patchFlag:A,dynamicChildren:T,dirs:V}=p;A|=f.patchFlag&16;const x=f.props||de,$=p.props||de;let K;m&&bn(m,!1),(K=$.onVnodeBeforeUpdate)&&Ct(K,m,p,f),V&&Tn(p,f,m,"beforeUpdate"),m&&bn(m,!0);const Z=_&&p.type!=="foreignObject";if(T?ot(f.dynamicChildren,T,S,m,y,Z,C):N||ce(f,p,S,null,m,y,Z,C,!1),A>0){if(A&16)Xt(S,p,x,$,m,y,_);else if(A&2&&x.class!==$.class&&i(S,"class",null,$.class,_),A&4&&i(S,"style",x.style,$.style,_),A&8){const he=p.dynamicProps;for(let ue=0;ue<he.length;ue++){const Ie=he[ue],pt=x[Ie],es=$[Ie];(es!==pt||Ie==="value")&&i(S,Ie,pt,es,_,f.children,m,y,O)}}A&1&&f.children!==p.children&&l(S,p.children)}else!N&&T==null&&Xt(S,p,x,$,m,y,_);((K=$.onVnodeUpdated)||V)&&Ze(()=>{K&&Ct(K,m,p,f),V&&Tn(p,f,m,"updated")},y)},ot=(f,p,m,y,_,C,N)=>{for(let S=0;S<p.length;S++){const A=f[S],T=p[S],V=A.el&&(A.type===At||!zs(A,T)||A.shapeFlag&70)?h(A.el):m;E(A,T,V,null,y,_,C,N,!0)}},Xt=(f,p,m,y,_,C,N)=>{if(m!==y){if(m!==de)for(const S in m)!Ei(S)&&!(S in y)&&i(f,S,m[S],null,N,p.children,_,C,O);for(const S in y){if(Ei(S))continue;const A=y[S],T=m[S];A!==T&&S!=="value"&&i(f,S,T,A,N,p.children,_,C,O)}"value"in y&&i(f,"value",m.value,y.value)}},bt=(f,p,m,y,_,C,N,S,A)=>{const T=p.el=f?f.el:a(""),V=p.anchor=f?f.anchor:a("");let{patchFlag:x,dynamicChildren:$,slotScopeIds:K}=p;K&&(S=S?S.concat(K):K),f==null?(s(T,m,y),s(V,m,y),Je(p.children,m,V,_,C,N,S,A)):x>0&&x&64&&$&&f.dynamicChildren?(ot(f.dynamicChildren,$,m,_,C,N,S),(p.key!=null||_&&p===_.subTree)&&Jf(f,p,!0)):ce(f,p,m,V,_,C,N,S,A)},Xn=(f,p,m,y,_,C,N,S,A)=>{p.slotScopeIds=S,f==null?p.shapeFlag&512?_.ctx.activate(p,m,y,N,A):En(p,m,y,_,C,N,A):Hs(f,p,A)},En=(f,p,m,y,_,C,N)=>{const S=f.component=pv(f,y,_);if($f(f)&&(S.ctx.renderer=ne),gv(S),S.asyncDep){if(_&&_.registerDep(S,Ee),!f.el){const A=S.subTree=Ne(Bn);k(null,A,p,m)}return}Ee(S,f,p,m,_,C,N)},Hs=(f,p,m)=>{const y=p.component=f.component;if(Sy(f,p,m))if(y.asyncDep&&!y.asyncResolved){le(y,p,m);return}else y.next=p,wy(y.update),y.update();else p.el=f.el,y.vnode=p},Ee=(f,p,m,y,_,C,N)=>{const S=()=>{if(f.isMounted){let{next:V,bu:x,u:$,parent:K,vnode:Z}=f,he=V,ue;bn(f,!1),V?(V.el=Z.el,le(f,V,N)):V=Z,x&&Ii(x),(ue=V.props&&V.props.onVnodeBeforeUpdate)&&Ct(ue,K,V,Z),bn(f,!0);const Ie=na(f),pt=f.subTree;f.subTree=Ie,E(pt,Ie,h(pt.el),R(pt),f,_,C),V.el=Ie.el,he===null&&Cy(f,Ie.el),$&&Ze($,_),(ue=V.props&&V.props.onVnodeUpdated)&&Ze(()=>Ct(ue,K,V,Z),_)}else{let V;const{el:x,props:$}=p,{bm:K,m:Z,parent:he}=f,ue=Si(p);if(bn(f,!1),K&&Ii(K),!ue&&(V=$&&$.onVnodeBeforeMount)&&Ct(V,he,p),bn(f,!0),x&&X){const Ie=()=>{f.subTree=na(f),X(x,f.subTree,f,_,null)};ue?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Ie()):Ie()}else{const Ie=f.subTree=na(f);E(null,Ie,m,y,f,_,C),p.el=Ie.el}if(Z&&Ze(Z,_),!ue&&(V=$&&$.onVnodeMounted)){const Ie=p;Ze(()=>Ct(V,he,Ie),_)}(p.shapeFlag&256||he&&Si(he.vnode)&&he.vnode.shapeFlag&256)&&f.a&&Ze(f.a,_),f.isMounted=!0,p=m=y=null}},A=f.effect=new Dc(S,()=>Uc(T),f.scope),T=f.update=()=>A.run();T.id=f.uid,bn(f,!0),T()},le=(f,p,m)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,Jy(f,p.props,y,m),ev(f,p.children,m),Ns(),ol(),Os()},ce=(f,p,m,y,_,C,N,S,A=!1)=>{const T=f&&f.children,V=f?f.shapeFlag:0,x=p.children,{patchFlag:$,shapeFlag:K}=p;if($>0){if($&128){In(T,x,m,y,_,C,N,S,A);return}else if($&256){ft(T,x,m,y,_,C,N,S,A);return}}K&8?(V&16&&O(T,_,C),x!==T&&l(m,x)):V&16?K&16?In(T,x,m,y,_,C,N,S,A):O(T,_,C,!0):(V&8&&l(m,""),K&16&&Je(x,m,y,_,C,N,S,A))},ft=(f,p,m,y,_,C,N,S,A)=>{f=f||cs,p=p||cs;const T=f.length,V=p.length,x=Math.min(T,V);let $;for($=0;$<x;$++){const K=p[$]=A?nn(p[$]):kt(p[$]);E(f[$],K,m,null,_,C,N,S,A)}T>V?O(f,_,C,!0,!1,x):Je(p,m,y,_,C,N,S,A,x)},In=(f,p,m,y,_,C,N,S,A)=>{let T=0;const V=p.length;let x=f.length-1,$=V-1;for(;T<=x&&T<=$;){const K=f[T],Z=p[T]=A?nn(p[T]):kt(p[T]);if(zs(K,Z))E(K,Z,m,null,_,C,N,S,A);else break;T++}for(;T<=x&&T<=$;){const K=f[x],Z=p[$]=A?nn(p[$]):kt(p[$]);if(zs(K,Z))E(K,Z,m,null,_,C,N,S,A);else break;x--,$--}if(T>x){if(T<=$){const K=$+1,Z=K<V?p[K].el:y;for(;T<=$;)E(null,p[T]=A?nn(p[T]):kt(p[T]),m,Z,_,C,N,S,A),T++}}else if(T>$)for(;T<=x;)Xe(f[T],_,C,!0),T++;else{const K=T,Z=T,he=new Map;for(T=Z;T<=$;T++){const nt=p[T]=A?nn(p[T]):kt(p[T]);nt.key!=null&&he.set(nt.key,T)}let ue,Ie=0;const pt=$-Z+1;let es=!1,Qu=0;const qs=new Array(pt);for(T=0;T<pt;T++)qs[T]=0;for(T=K;T<=x;T++){const nt=f[T];if(Ie>=pt){Xe(nt,_,C,!0);continue}let St;if(nt.key!=null)St=he.get(nt.key);else for(ue=Z;ue<=$;ue++)if(qs[ue-Z]===0&&zs(nt,p[ue])){St=ue;break}St===void 0?Xe(nt,_,C,!0):(qs[St-Z]=T+1,St>=Qu?Qu=St:es=!0,E(nt,p[St],m,null,_,C,N,S,A),Ie++)}const Yu=es?iv(qs):cs;for(ue=Yu.length-1,T=pt-1;T>=0;T--){const nt=Z+T,St=p[nt],Ju=nt+1<V?p[nt+1].el:y;qs[T]===0?E(null,St,m,Ju,_,C,N,S,A):es&&(ue<0||T!==Yu[ue]?dt(St,m,Ju,2):ue--)}}},dt=(f,p,m,y,_=null)=>{const{el:C,type:N,transition:S,children:A,shapeFlag:T}=f;if(T&6){dt(f.component.subTree,p,m,y);return}if(T&128){f.suspense.move(p,m,y);return}if(T&64){N.move(f,p,m,ne);return}if(N===At){s(C,p,m);for(let x=0;x<A.length;x++)dt(A[x],p,m,y);s(f.anchor,p,m);return}if(N===ra){P(f,p,m);return}if(y!==2&&T&1&&S)if(y===0)S.beforeEnter(C),s(C,p,m),Ze(()=>S.enter(C),_);else{const{leave:x,delayLeave:$,afterLeave:K}=S,Z=()=>s(C,p,m),he=()=>{x(C,()=>{Z(),K&&K()})};$?$(C,Z,he):he()}else s(C,p,m)},Xe=(f,p,m,y=!1,_=!1)=>{const{type:C,props:N,ref:S,children:A,dynamicChildren:T,shapeFlag:V,patchFlag:x,dirs:$}=f;if(S!=null&&Ba(S,null,m,f,!0),V&256){p.ctx.deactivate(f);return}const K=V&1&&$,Z=!Si(f);let he;if(Z&&(he=N&&N.onVnodeBeforeUnmount)&&Ct(he,p,f),V&6)w(f.component,m,y);else{if(V&128){f.suspense.unmount(m,y);return}K&&Tn(f,null,p,"beforeUnmount"),V&64?f.type.remove(f,p,m,_,ne,y):T&&(C!==At||x>0&&x&64)?O(T,p,m,!1,!0):(C===At&&x&384||!_&&V&16)&&O(A,p,m),y&&Zn(f)}(Z&&(he=N&&N.onVnodeUnmounted)||K)&&Ze(()=>{he&&Ct(he,p,f),K&&Tn(f,null,p,"unmounted")},m)},Zn=f=>{const{type:p,el:m,anchor:y,transition:_}=f;if(p===At){ii(m,y);return}if(p===ra){J(f);return}const C=()=>{r(m),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(f.shapeFlag&1&&_&&!_.persisted){const{leave:N,delayLeave:S}=_,A=()=>N(m,C);S?S(f.el,C,A):A()}else C()},ii=(f,p)=>{let m;for(;f!==p;)m=d(f),r(f),f=m;r(p)},w=(f,p,m)=>{const{bum:y,scope:_,update:C,subTree:N,um:S}=f;y&&Ii(y),_.stop(),C&&(C.active=!1,Xe(N,f,p,m)),S&&Ze(S,p),Ze(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},O=(f,p,m,y=!1,_=!1,C=0)=>{for(let N=C;N<f.length;N++)Xe(f[N],p,m,y,_)},R=f=>f.shapeFlag&6?R(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),F=(f,p,m)=>{f==null?p._vnode&&Xe(p._vnode,null,null,!0):E(p._vnode||null,f,p,null,null,null,m),ol(),Mf(),p._vnode=f},ne={p:E,um:Xe,m:dt,r:Zn,mt:En,mc:Je,pc:ce,pbc:ot,n:R,o:t};let ye,X;return e&&([ye,X]=e(ne)),{render:F,hydrate:ye,createApp:nv(F,ye)}}function bn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Jf(t,e,n=!1){const s=t.children,r=e.children;if(G(s)&&G(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=nn(r[i]),a.el=o.el),n||Jf(o,a)),a.type===wo&&(a.el=o.el)}}function iv(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const ov=t=>t.__isTeleport,At=Symbol(void 0),wo=Symbol(void 0),Bn=Symbol(void 0),ra=Symbol(void 0),ir=[];let yt=null;function Cn(t=!1){ir.push(yt=t?null:[])}function av(){ir.pop(),yt=ir[ir.length-1]||null}let vr=1;function ml(t){vr+=t}function Xf(t){return t.dynamicChildren=vr>0?yt||cs:null,av(),vr>0&&yt&&yt.push(t),t}function ts(t,e,n,s,r,i){return Xf(et(t,e,n,s,r,i,!0))}function cv(t,e,n,s,r){return Xf(Ne(t,e,n,s,r,!0))}function ja(t){return t?t.__v_isVNode===!0:!1}function zs(t,e){return t.type===e.type&&t.key===e.key}const _o="__vInternal",Zf=({key:t})=>t??null,Ci=({ref:t,ref_key:e,ref_for:n})=>t!=null?Oe(t)||je(t)||Y(t)?{i:lt,r:t,k:e,f:!!n}:t:null;function et(t,e=null,n=null,s=0,r=null,i=t===At?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Zf(e),ref:e&&Ci(e),scopeId:yo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:lt};return a?(Bc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Oe(n)?8:16),vr>0&&!o&&yt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&yt.push(c),c}const Ne=uv;function uv(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===jy)&&(t=Bn),ja(t)){const a=ys(t,e,!0);return n&&Bc(a,n),vr>0&&!i&&yt&&(a.shapeFlag&6?yt[yt.indexOf(t)]=a:yt.push(a)),a.patchFlag|=-2,a}if(_v(t)&&(t=t.__vccOpts),e){e=lv(e);let{class:a,style:c}=e;a&&!Oe(a)&&(e.class=bc(a)),ve(c)&&(Sf(c)&&!G(c)&&(c=Ye({},c)),e.style=Tc(c))}const o=Oe(t)?1:Ay(t)?128:ov(t)?64:ve(t)?4:Y(t)?2:0;return et(t,e,n,s,r,o,i,!0)}function lv(t){return t?Sf(t)||_o in t?Ye({},t):t:null}function ys(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?hv(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Zf(a),ref:e&&e.ref?n&&r?G(r)?r.concat(Ci(e)):[r,Ci(e)]:Ci(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==At?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ys(t.ssContent),ssFallback:t.ssFallback&&ys(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function at(t=" ",e=0){return Ne(wo,null,t,e)}function ia(t="",e=!1){return e?(Cn(),cv(Bn,null,t)):Ne(Bn,null,t)}function kt(t){return t==null||typeof t=="boolean"?Ne(Bn):G(t)?Ne(At,null,t.slice()):typeof t=="object"?nn(t):Ne(wo,null,String(t))}function nn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ys(t)}function Bc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Bc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(_o in e)?e._ctx=lt:r===3&&lt&&(lt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Y(e)?(e={default:e,_ctx:lt},n=32):(e=String(e),s&64?(n=16,e=[at(e)]):n=8);t.children=e,t.shapeFlag|=n}function hv(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=bc([e.class,s.class]));else if(r==="style")e.style=Tc([e.style,s.style]);else if(uo(r)){const i=e[r],o=s[r];o&&i!==o&&!(G(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Ct(t,e,n,s=null){_t(t,e,7,[n,s])}const fv=Yf();let dv=0;function pv(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||fv,i={uid:dv++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Lm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Kf(s,r),emitsOptions:Uf(s,r),emit:null,emitted:null,propsDefaults:de,inheritAttrs:s.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Iy.bind(null,i),t.ce&&t.ce(i),i}let Se=null;const vs=t=>{Se=t,t.scope.on()},Un=()=>{Se&&Se.scope.off(),Se=null};function ed(t){return t.vnode.shapeFlag&4}let wr=!1;function gv(t,e=!1){wr=e;const{props:n,children:s}=t.vnode,r=ed(t);Yy(t,n,r,e),Zy(t,s);const i=r?mv(t,e):void 0;return wr=!1,i}function mv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Cf(new Proxy(t.ctx,qy));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?vv(t):null;vs(t),Ns();const i=ln(s,t,0,[t.props,r]);if(Os(),Un(),hf(i)){if(i.then(Un,Un),e)return i.then(o=>{yl(t,o,e)}).catch(o=>{go(o,t,0)});t.asyncDep=i}else yl(t,i,e)}else td(t,e)}function yl(t,e,n){Y(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ve(e)&&(t.setupState=Df(e)),td(t,n)}let vl;function td(t,e,n){const s=t.type;if(!t.render){if(!e&&vl&&!s.render){const r=s.template||Vc(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,u=Ye(Ye({isCustomElement:i,delimiters:a},o),c);s.render=vl(r,u)}}t.render=s.render||wt}vs(t),Ns(),zy(t),Os(),Un()}function yv(t){return new Proxy(t.attrs,{get(e,n){return tt(t,"get","$attrs"),e[n]}})}function vv(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=yv(t))},slots:t.slots,emit:t.emit,expose:e}}function Eo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Df(Cf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in rr)return rr[n](t)},has(e,n){return n in e||n in rr}}))}function wv(t,e=!0){return Y(t)?t.displayName||t.name:t.name||e&&t.__name}function _v(t){return Y(t)&&"__vccOpts"in t}const ct=(t,e)=>my(t,e,wr);function nd(t,e,n){const s=arguments.length;return s===2?ve(e)&&!G(e)?ja(e)?Ne(t,null,[e]):Ne(t,e):Ne(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ja(n)&&(n=[n]),Ne(t,e,n))}const Ev=Symbol(""),Iv=()=>Et(Ev),Tv="3.2.47",bv="http://www.w3.org/2000/svg",Rn=typeof document<"u"?document:null,wl=Rn&&Rn.createElement("template"),Sv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Rn.createElementNS(bv,t):Rn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Rn.createTextNode(t),createComment:t=>Rn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Rn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{wl.innerHTML=s?`<svg>${t}</svg>`:t;const a=wl.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Cv(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Av(t,e,n){const s=t.style,r=Oe(n);if(n&&!r){if(e&&!Oe(e))for(const i in e)n[i]==null&&Ha(s,i,"");for(const i in n)Ha(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const _l=/\s*!important$/;function Ha(t,e,n){if(G(n))n.forEach(s=>Ha(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=kv(t,e);_l.test(n)?t.setProperty(Ds(s),n.replace(_l,""),"important"):t[s]=n}}const El=["Webkit","Moz","ms"],oa={};function kv(t,e){const n=oa[e];if(n)return n;let s=xt(e);if(s!=="filter"&&s in t)return oa[e]=s;s=fo(s);for(let r=0;r<El.length;r++){const i=El[r]+s;if(i in t)return oa[e]=i}return e}const Il="http://www.w3.org/1999/xlink";function Rv(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Il,e.slice(6,e.length)):t.setAttributeNS(Il,e,n);else{const i=Am(e);n==null||i&&!cf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Dv(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=cf(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function ss(t,e,n,s){t.addEventListener(e,n,s)}function Nv(t,e,n,s){t.removeEventListener(e,n,s)}function Ov(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Pv(e);if(s){const u=i[e]=Lv(s,r);ss(t,a,u,c)}else o&&(Nv(t,a,o,c),i[e]=void 0)}}const Tl=/(?:Once|Passive|Capture)$/;function Pv(t){let e;if(Tl.test(t)){e={};let s;for(;s=t.match(Tl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ds(t.slice(2)),e]}let aa=0;const xv=Promise.resolve(),Mv=()=>aa||(xv.then(()=>aa=0),aa=Date.now());function Lv(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;_t(Uv(s,n.value),e,5,[s])};return n.value=t,n.attached=Mv(),n}function Uv(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const bl=/^on[a-z]/,Fv=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?Cv(t,s,r):e==="style"?Av(t,n,s):uo(e)?Sc(e)||Ov(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Vv(t,e,s,r))?Dv(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Rv(t,e,s,r))};function Vv(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&bl.test(e)&&Y(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||bl.test(e)&&Oe(n)?!1:e in t}const Sl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return G(e)?n=>Ii(e,n):e};function $v(t){t.target.composing=!0}function Cl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const XC={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Sl(r);const i=s||r.props&&r.props.type==="number";ss(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Na(a)),t._assign(a)}),n&&ss(t,"change",()=>{t.value=t.value.trim()}),e||(ss(t,"compositionstart",$v),ss(t,"compositionend",Cl),ss(t,"change",Cl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Sl(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Na(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Bv=Ye({patchProp:Fv},Sv);let Al;function jv(){return Al||(Al=sv(Bv))}const Hv=(...t)=>{const e=jv().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=qv(s);if(!r)return;const i=e._component;!Y(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function qv(t){return Oe(t)?document.querySelector(t):t}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const rs=typeof window<"u";function zv(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ae=Object.assign;function ca(t,e){const n={};for(const s in e){const r=e[s];n[s]=It(r)?r.map(t):t(r)}return n}const or=()=>{},It=Array.isArray,Kv=/\/$/,Wv=t=>t.replace(Kv,"");function ua(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Jv(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function Gv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function kl(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Qv(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&ws(e.matched[s],n.matched[r])&&sd(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ws(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function sd(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Yv(t[n],e[n]))return!1;return!0}function Yv(t,e){return It(t)?Rl(t,e):It(e)?Rl(e,t):t===e}function Rl(t,e){return It(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Jv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var _r;(function(t){t.pop="pop",t.push="push"})(_r||(_r={}));var ar;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ar||(ar={}));function Xv(t){if(!t)if(rs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Wv(t)}const Zv=/^[^#]+#/;function ew(t,e){return t.replace(Zv,"#")+e}function tw(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Io=()=>({left:window.pageXOffset,top:window.pageYOffset});function nw(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=tw(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Dl(t,e){return(history.state?history.state.position-e:-1)+t}const qa=new Map;function sw(t,e){qa.set(t,e)}function rw(t){const e=qa.get(t);return qa.delete(t),e}let iw=()=>location.protocol+"//"+location.host;function rd(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),kl(c,"")}return kl(n,t)+s+r}function ow(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const g=rd(t,location),v=n.value,E=e.value;let D=0;if(d){if(n.value=g,e.value=d,o&&o===v){o=null;return}D=E?d.position-E.position:0}else s(g);r.forEach(k=>{k(n.value,v,{delta:D,type:_r.pop,direction:D?D>0?ar.forward:ar.back:ar.unknown})})};function c(){o=n.value}function u(d){r.push(d);const g=()=>{const v=r.indexOf(d);v>-1&&r.splice(v,1)};return i.push(g),g}function l(){const{history:d}=window;d.state&&d.replaceState(ae({},d.state,{scroll:Io()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function Nl(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Io():null}}function aw(t){const{history:e,location:n}=window,s={value:rd(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:iw()+t+c;try{e[l?"replaceState":"pushState"](u,"",d),r.value=u}catch(g){console.error(g),n[l?"replace":"assign"](d)}}function o(c,u){const l=ae({},e.state,Nl(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,l,!0),s.value=c}function a(c,u){const l=ae({},r.value,e.state,{forward:c,scroll:Io()});i(l.current,l,!0);const h=ae({},Nl(s.value,c,null),{position:l.position+1},u);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function cw(t){t=Xv(t);const e=aw(t),n=ow(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ae({location:"",base:t,go:s,createHref:ew.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function uw(t){return typeof t=="string"||t&&typeof t=="object"}function id(t){return typeof t=="string"||typeof t=="symbol"}const en={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},od=Symbol("");var Ol;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ol||(Ol={}));function _s(t,e){return ae(new Error,{type:t,[od]:!0},e)}function Ut(t,e){return t instanceof Error&&od in t&&(e==null||!!(t.type&e))}const Pl="[^/]+?",lw={sensitive:!1,strict:!1,start:!0,end:!0},hw=/[.+*?^${}()[\]/\\]/g;function fw(t,e){const n=ae({},lw,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let h=0;h<u.length;h++){const d=u[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(hw,"\\$&"),g+=40;else if(d.type===1){const{value:v,repeatable:E,optional:D,regexp:k}=d;i.push({name:v,repeatable:E,optional:D});const U=k||Pl;if(U!==Pl){g+=10;try{new RegExp(`(${U})`)}catch(J){throw new Error(`Invalid custom RegExp for param "${v}" (${U}): `+J.message)}}let P=E?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;h||(P=D&&u.length<2?`(?:/${P})`:"/"+P),D&&(P+="?"),r+=P,g+=20,D&&(g+=-8),E&&(g+=-20),U===".*"&&(g+=-50)}l.push(g)}s.push(l)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let d=1;d<l.length;d++){const g=l[d]||"",v=i[d-1];h[v.name]=g&&v.repeatable?g.split("/"):g}return h}function c(u){let l="",h=!1;for(const d of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const g of d)if(g.type===0)l+=g.value;else if(g.type===1){const{value:v,repeatable:E,optional:D}=g,k=v in u?u[v]:"";if(It(k)&&!E)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const U=It(k)?k.join("/"):k;if(!U)if(D)d.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${v}"`);l+=U}}return l||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function dw(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function pw(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=dw(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(xl(s))return 1;if(xl(r))return-1}return r.length-s.length}function xl(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const gw={type:0,value:""},mw=/[a-zA-Z0-9_]/;function yw(t){if(!t)return[[]];if(t==="/")return[[gw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,u="",l="";function h(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:mw.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),r}function vw(t,e,n){const s=fw(yw(t.path),n),r=ae(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function ww(t,e){const n=[],s=new Map;e=Ul({strict:!1,end:!0,sensitive:!1},e);function r(l){return s.get(l)}function i(l,h,d){const g=!d,v=_w(l);v.aliasOf=d&&d.record;const E=Ul(e,l),D=[v];if("alias"in l){const P=typeof l.alias=="string"?[l.alias]:l.alias;for(const J of P)D.push(ae({},v,{components:d?d.record.components:v.components,path:J,aliasOf:d?d.record:v}))}let k,U;for(const P of D){const{path:J}=P;if(h&&J[0]!=="/"){const fe=h.record.path,_e=fe[fe.length-1]==="/"?"":"/";P.path=h.record.path+(J&&_e+J)}if(k=vw(P,h,E),d?d.alias.push(k):(U=U||k,U!==k&&U.alias.push(k),g&&l.name&&!Ll(k)&&o(l.name)),v.children){const fe=v.children;for(let _e=0;_e<fe.length;_e++)i(fe[_e],k,d&&d.children[_e])}d=d||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&c(k)}return U?()=>{o(U)}:or}function o(l){if(id(l)){const h=s.get(l);h&&(s.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&s.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&pw(l,n[h])>=0&&(l.record.path!==n[h].record.path||!ad(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!Ll(l)&&s.set(l.record.name,l)}function u(l,h){let d,g={},v,E;if("name"in l&&l.name){if(d=s.get(l.name),!d)throw _s(1,{location:l});E=d.record.name,g=ae(Ml(h.params,d.keys.filter(U=>!U.optional).map(U=>U.name)),l.params&&Ml(l.params,d.keys.map(U=>U.name))),v=d.stringify(g)}else if("path"in l)v=l.path,d=n.find(U=>U.re.test(v)),d&&(g=d.parse(v),E=d.record.name);else{if(d=h.name?s.get(h.name):n.find(U=>U.re.test(h.path)),!d)throw _s(1,{location:l,currentLocation:h});E=d.record.name,g=ae({},h.params,l.params),v=d.stringify(g)}const D=[];let k=d;for(;k;)D.unshift(k.record),k=k.parent;return{name:E,path:v,params:g,matched:D,meta:Iw(D)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Ml(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function _w(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Ew(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Ew(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Ll(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Iw(t){return t.reduce((e,n)=>ae(e,n.meta),{})}function Ul(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function ad(t,e){return e.children.some(n=>n===t||ad(t,n))}const cd=/#/g,Tw=/&/g,bw=/\//g,Sw=/=/g,Cw=/\?/g,ud=/\+/g,Aw=/%5B/g,kw=/%5D/g,ld=/%5E/g,Rw=/%60/g,hd=/%7B/g,Dw=/%7C/g,fd=/%7D/g,Nw=/%20/g;function jc(t){return encodeURI(""+t).replace(Dw,"|").replace(Aw,"[").replace(kw,"]")}function Ow(t){return jc(t).replace(hd,"{").replace(fd,"}").replace(ld,"^")}function za(t){return jc(t).replace(ud,"%2B").replace(Nw,"+").replace(cd,"%23").replace(Tw,"%26").replace(Rw,"`").replace(hd,"{").replace(fd,"}").replace(ld,"^")}function Pw(t){return za(t).replace(Sw,"%3D")}function xw(t){return jc(t).replace(cd,"%23").replace(Cw,"%3F")}function Mw(t){return t==null?"":xw(t).replace(bw,"%2F")}function Vi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Lw(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(ud," "),o=i.indexOf("="),a=Vi(o<0?i:i.slice(0,o)),c=o<0?null:Vi(i.slice(o+1));if(a in e){let u=e[a];It(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function Fl(t){let e="";for(let n in t){const s=t[n];if(n=Pw(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(It(s)?s.map(i=>i&&za(i)):[s&&za(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Uw(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=It(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const Fw=Symbol(""),Vl=Symbol(""),To=Symbol(""),Hc=Symbol(""),Ka=Symbol("");function Ks(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function sn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(_s(4,{from:n,to:e})):h instanceof Error?a(h):uw(h)?a(_s(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(s&&s.instances[r],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function la(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Vw(a)){const u=(a.__vccOpts||a)[e];u&&r.push(sn(u,n,s,i,o))}else{let c=a();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=zv(u)?u.default:u;i.components[o]=l;const d=(l.__vccOpts||l)[e];return d&&sn(d,n,s,i,o)()}))}}return r}function Vw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function $l(t){const e=Et(To),n=Et(Hc),s=ct(()=>e.resolve(Ln(t.to))),r=ct(()=>{const{matched:c}=s.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const d=h.findIndex(ws.bind(null,l));if(d>-1)return d;const g=Bl(c[u-2]);return u>1&&Bl(l)===g&&h[h.length-1].path!==g?h.findIndex(ws.bind(null,c[u-2])):d}),i=ct(()=>r.value>-1&&Hw(n.params,s.value.params)),o=ct(()=>r.value>-1&&r.value===n.matched.length-1&&sd(n.params,s.value.params));function a(c={}){return jw(c)?e[Ln(t.replace)?"replace":"push"](Ln(t.to)).catch(or):Promise.resolve()}return{route:s,href:ct(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const $w=Fc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$l,setup(t,{slots:e}){const n=Lr($l(t)),{options:s}=Et(To),r=ct(()=>({[jl(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[jl(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:nd("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),Bw=$w;function jw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Hw(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!It(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Bl(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const jl=(t,e,n)=>t??e??n,qw=Fc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Et(Ka),r=ct(()=>t.route||s.value),i=Et(Vl,0),o=ct(()=>{let u=Ln(i);const{matched:l}=r.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=ct(()=>r.value.matched[o.value]);bi(Vl,ct(()=>o.value+1)),bi(Fw,a),bi(Ka,r);const c=Ti();return sr(()=>[c.value,a.value,t.name],([u,l,h],[d,g,v])=>{l&&(l.instances[h]=u,g&&g!==l&&u&&u===d&&(l.leaveGuards.size||(l.leaveGuards=g.leaveGuards),l.updateGuards.size||(l.updateGuards=g.updateGuards))),u&&l&&(!g||!ws(l,g)||!d)&&(l.enterCallbacks[h]||[]).forEach(E=>E(u))},{flush:"post"}),()=>{const u=r.value,l=t.name,h=a.value,d=h&&h.components[l];if(!d)return Hl(n.default,{Component:d,route:u});const g=h.props[l],v=g?g===!0?u.params:typeof g=="function"?g(u):g:null,D=nd(d,ae({},v,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return Hl(n.default,{Component:D,route:u})||D}}});function Hl(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const zw=qw;function Kw(t){const e=ww(t.routes,t),n=t.parseQuery||Lw,s=t.stringifyQuery||Fl,r=t.history,i=Ks(),o=Ks(),a=Ks(),c=fy(en);let u=en;rs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=ca.bind(null,w=>""+w),h=ca.bind(null,Mw),d=ca.bind(null,Vi);function g(w,O){let R,F;return id(w)?(R=e.getRecordMatcher(w),F=O):F=w,e.addRoute(F,R)}function v(w){const O=e.getRecordMatcher(w);O&&e.removeRoute(O)}function E(){return e.getRoutes().map(w=>w.record)}function D(w){return!!e.getRecordMatcher(w)}function k(w,O){if(O=ae({},O||c.value),typeof w=="string"){const f=ua(n,w,O.path),p=e.resolve({path:f.path},O),m=r.createHref(f.fullPath);return ae(f,p,{params:d(p.params),hash:Vi(f.hash),redirectedFrom:void 0,href:m})}let R;if("path"in w)R=ae({},w,{path:ua(n,w.path,O.path).path});else{const f=ae({},w.params);for(const p in f)f[p]==null&&delete f[p];R=ae({},w,{params:h(w.params)}),O.params=h(O.params)}const F=e.resolve(R,O),ne=w.hash||"";F.params=l(d(F.params));const ye=Gv(s,ae({},w,{hash:Ow(ne),path:F.path})),X=r.createHref(ye);return ae({fullPath:ye,hash:ne,query:s===Fl?Uw(w.query):w.query||{}},F,{redirectedFrom:void 0,href:X})}function U(w){return typeof w=="string"?ua(n,w,c.value.path):ae({},w)}function P(w,O){if(u!==w)return _s(8,{from:O,to:w})}function J(w){return We(w)}function fe(w){return J(ae(U(w),{replace:!0}))}function _e(w){const O=w.matched[w.matched.length-1];if(O&&O.redirect){const{redirect:R}=O;let F=typeof R=="function"?R(w):R;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=U(F):{path:F},F.params={}),ae({query:w.query,hash:w.hash,params:"path"in F?{}:w.params},F)}}function We(w,O){const R=u=k(w),F=c.value,ne=w.state,ye=w.force,X=w.replace===!0,f=_e(R);if(f)return We(ae(U(f),{state:typeof f=="object"?ae({},ne,f.state):ne,force:ye,replace:X}),O||R);const p=R;p.redirectedFrom=O;let m;return!ye&&Qv(s,F,R)&&(m=_s(16,{to:p,from:F}),In(F,F,!0,!1)),(m?Promise.resolve(m):Tt(p,F)).catch(y=>Ut(y)?Ut(y,2)?y:ft(y):le(y,p,F)).then(y=>{if(y){if(Ut(y,2))return We(ae({replace:X},U(y.to),{state:typeof y.to=="object"?ae({},ne,y.to.state):ne,force:ye}),O||p)}else y=Xt(p,F,!0,X,ne);return ot(p,F,y),y})}function Je(w,O){const R=P(w,O);return R?Promise.reject(R):Promise.resolve()}function Tt(w,O){let R;const[F,ne,ye]=Ww(w,O);R=la(F.reverse(),"beforeRouteLeave",w,O);for(const f of F)f.leaveGuards.forEach(p=>{R.push(sn(p,w,O))});const X=Je.bind(null,w,O);return R.push(X),ns(R).then(()=>{R=[];for(const f of i.list())R.push(sn(f,w,O));return R.push(X),ns(R)}).then(()=>{R=la(ne,"beforeRouteUpdate",w,O);for(const f of ne)f.updateGuards.forEach(p=>{R.push(sn(p,w,O))});return R.push(X),ns(R)}).then(()=>{R=[];for(const f of w.matched)if(f.beforeEnter&&!O.matched.includes(f))if(It(f.beforeEnter))for(const p of f.beforeEnter)R.push(sn(p,w,O));else R.push(sn(f.beforeEnter,w,O));return R.push(X),ns(R)}).then(()=>(w.matched.forEach(f=>f.enterCallbacks={}),R=la(ye,"beforeRouteEnter",w,O),R.push(X),ns(R))).then(()=>{R=[];for(const f of o.list())R.push(sn(f,w,O));return R.push(X),ns(R)}).catch(f=>Ut(f,8)?f:Promise.reject(f))}function ot(w,O,R){for(const F of a.list())F(w,O,R)}function Xt(w,O,R,F,ne){const ye=P(w,O);if(ye)return ye;const X=O===en,f=rs?history.state:{};R&&(F||X?r.replace(w.fullPath,ae({scroll:X&&f&&f.scroll},ne)):r.push(w.fullPath,ne)),c.value=w,In(w,O,R,X),ft()}let bt;function Xn(){bt||(bt=r.listen((w,O,R)=>{if(!ii.listening)return;const F=k(w),ne=_e(F);if(ne){We(ae(ne,{replace:!0}),F).catch(or);return}u=F;const ye=c.value;rs&&sw(Dl(ye.fullPath,R.delta),Io()),Tt(F,ye).catch(X=>Ut(X,12)?X:Ut(X,2)?(We(X.to,F).then(f=>{Ut(f,20)&&!R.delta&&R.type===_r.pop&&r.go(-1,!1)}).catch(or),Promise.reject()):(R.delta&&r.go(-R.delta,!1),le(X,F,ye))).then(X=>{X=X||Xt(F,ye,!1),X&&(R.delta&&!Ut(X,8)?r.go(-R.delta,!1):R.type===_r.pop&&Ut(X,20)&&r.go(-1,!1)),ot(F,ye,X)}).catch(or)}))}let En=Ks(),Hs=Ks(),Ee;function le(w,O,R){ft(w);const F=Hs.list();return F.length?F.forEach(ne=>ne(w,O,R)):console.error(w),Promise.reject(w)}function ce(){return Ee&&c.value!==en?Promise.resolve():new Promise((w,O)=>{En.add([w,O])})}function ft(w){return Ee||(Ee=!w,Xn(),En.list().forEach(([O,R])=>w?R(w):O()),En.reset()),w}function In(w,O,R,F){const{scrollBehavior:ne}=t;if(!rs||!ne)return Promise.resolve();const ye=!R&&rw(Dl(w.fullPath,0))||(F||!R)&&history.state&&history.state.scroll||null;return Pf().then(()=>ne(w,O,ye)).then(X=>X&&nw(X)).catch(X=>le(X,w,O))}const dt=w=>r.go(w);let Xe;const Zn=new Set,ii={currentRoute:c,listening:!0,addRoute:g,removeRoute:v,hasRoute:D,getRoutes:E,resolve:k,options:t,push:J,replace:fe,go:dt,back:()=>dt(-1),forward:()=>dt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Hs.add,isReady:ce,install(w){const O=this;w.component("RouterLink",Bw),w.component("RouterView",zw),w.config.globalProperties.$router=O,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>Ln(c)}),rs&&!Xe&&c.value===en&&(Xe=!0,J(r.location).catch(ne=>{}));const R={};for(const ne in en)R[ne]=ct(()=>c.value[ne]);w.provide(To,O),w.provide(Hc,Lr(R)),w.provide(Ka,c);const F=w.unmount;Zn.add(w),w.unmount=function(){Zn.delete(w),Zn.size<1&&(u=en,bt&&bt(),bt=null,c.value=en,Xe=!1,Ee=!1),F()}}};return ii}function ns(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Ww(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>ws(u,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>ws(u,c))||r.push(c))}return[n,s,r]}function Gw(){return Et(To)}function Qw(){return Et(Hc)}/**
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
 */const dd=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Yw=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},pd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(d=64)),s.push(n[l],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(dd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Yw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw new Jw;const d=i<<2|a>>4;if(s.push(d),u!==64){const g=a<<4&240|u>>2;if(s.push(g),h!==64){const v=u<<6&192|h;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Jw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xw=function(t){const e=dd(t);return pd.encodeByteArray(e,!0)},$i=function(t){return Xw(t).replace(/\./g,"")},gd=function(t){try{return pd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Zw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const e_=()=>Zw().__FIREBASE_DEFAULTS__,t_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},n_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&gd(t[1]);return e&&JSON.parse(e)},qc=()=>{try{return e_()||t_()||n_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},md=t=>{var e,n;return(n=(e=qc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},s_=t=>{const e=md(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},r_=()=>{var t;return(t=qc())===null||t===void 0?void 0:t.config},yd=t=>{var e;return(e=qc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class i_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function o_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[$i(JSON.stringify(n)),$i(JSON.stringify(o)),a].join(".")}/**
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
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function a_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function c_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function u_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function l_(){const t=ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function h_(){try{return typeof indexedDB=="object"}catch{return!1}}function f_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const d_="FirebaseError";class Jt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=d_,Object.setPrototypeOf(this,Jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ur.prototype.create)}}class Ur{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?p_(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Jt(r,a,s)}}function p_(t,e){return t.replace(g_,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const g_=/\{\$([^}]+)}/g;function m_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Bi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(ql(i)&&ql(o)){if(!Bi(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function ql(t){return t!==null&&typeof t=="object"}/**
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
 */function Fr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Js(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Xs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function y_(t,e){const n=new v_(t,e);return n.subscribe.bind(n)}class v_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");w_(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=ha),r.error===void 0&&(r.error=ha),r.complete===void 0&&(r.complete=ha);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function w_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ha(){}/**
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
 */function rt(t){return t&&t._delegate?t._delegate:t}class jn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const An="[DEFAULT]";/**
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
 */class __{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new i_;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(I_(e))try{this.getOrInitializeService({instanceIdentifier:An})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=An){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=An){return this.instances.has(e)}getOptions(e=An){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:E_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=An){return this.component?this.component.multipleInstances?e:An:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function E_(t){return t===An?void 0:t}function I_(t){return t.instantiationMode==="EAGER"}/**
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
 */class T_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new __(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const b_={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},S_=re.INFO,C_={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},A_=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=C_[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zc{constructor(e){this.name=e,this._logLevel=S_,this._logHandler=A_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?b_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const k_=(t,e)=>e.some(n=>t instanceof n);let zl,Kl;function R_(){return zl||(zl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function D_(){return Kl||(Kl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vd=new WeakMap,Wa=new WeakMap,wd=new WeakMap,fa=new WeakMap,Kc=new WeakMap;function N_(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(hn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&vd.set(n,t)}).catch(()=>{}),Kc.set(e,t),e}function O_(t){if(Wa.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Wa.set(t,e)}let Ga={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Wa.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function P_(t){Ga=t(Ga)}function x_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(da(this),e,...n);return wd.set(s,e.sort?e.sort():[e]),hn(s)}:D_().includes(t)?function(...e){return t.apply(da(this),e),hn(vd.get(this))}:function(...e){return hn(t.apply(da(this),e))}}function M_(t){return typeof t=="function"?x_(t):(t instanceof IDBTransaction&&O_(t),k_(t,R_())?new Proxy(t,Ga):t)}function hn(t){if(t instanceof IDBRequest)return N_(t);if(fa.has(t))return fa.get(t);const e=M_(t);return e!==t&&(fa.set(t,e),Kc.set(e,t)),e}const da=t=>Kc.get(t);function L_(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=hn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(hn(o.result),c.oldVersion,c.newVersion,hn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const U_=["get","getKey","getAll","getAllKeys","count"],F_=["put","add","delete","clear"],pa=new Map;function Wl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(pa.get(e))return pa.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=F_.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||U_.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return pa.set(e,i),i}P_(t=>({...t,get:(e,n,s)=>Wl(e,n)||t.get(e,n,s),has:(e,n)=>!!Wl(e,n)||t.has(e,n)}));/**
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
 */class V_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function $_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qa="@firebase/app",Gl="0.9.7";/**
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
 */const Hn=new zc("@firebase/app"),B_="@firebase/app-compat",j_="@firebase/analytics-compat",H_="@firebase/analytics",q_="@firebase/app-check-compat",z_="@firebase/app-check",K_="@firebase/auth",W_="@firebase/auth-compat",G_="@firebase/database",Q_="@firebase/database-compat",Y_="@firebase/functions",J_="@firebase/functions-compat",X_="@firebase/installations",Z_="@firebase/installations-compat",eE="@firebase/messaging",tE="@firebase/messaging-compat",nE="@firebase/performance",sE="@firebase/performance-compat",rE="@firebase/remote-config",iE="@firebase/remote-config-compat",oE="@firebase/storage",aE="@firebase/storage-compat",cE="@firebase/firestore",uE="@firebase/firestore-compat",lE="firebase",hE="9.19.1";/**
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
 */const Ya="[DEFAULT]",fE={[Qa]:"fire-core",[B_]:"fire-core-compat",[H_]:"fire-analytics",[j_]:"fire-analytics-compat",[z_]:"fire-app-check",[q_]:"fire-app-check-compat",[K_]:"fire-auth",[W_]:"fire-auth-compat",[G_]:"fire-rtdb",[Q_]:"fire-rtdb-compat",[Y_]:"fire-fn",[J_]:"fire-fn-compat",[X_]:"fire-iid",[Z_]:"fire-iid-compat",[eE]:"fire-fcm",[tE]:"fire-fcm-compat",[nE]:"fire-perf",[sE]:"fire-perf-compat",[rE]:"fire-rc",[iE]:"fire-rc-compat",[oE]:"fire-gcs",[aE]:"fire-gcs-compat",[cE]:"fire-fst",[uE]:"fire-fst-compat","fire-js":"fire-js",[lE]:"fire-js-all"};/**
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
 */const ji=new Map,Ja=new Map;function dE(t,e){try{t.container.addComponent(e)}catch(n){Hn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Es(t){const e=t.name;if(Ja.has(e))return Hn.debug(`There were multiple attempts to register component ${e}.`),!1;Ja.set(e,t);for(const n of ji.values())dE(n,t);return!0}function Wc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const pE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},fn=new Ur("app","Firebase",pE);/**
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
 */class gE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new jn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fn.create("app-deleted",{appName:this._name})}}/**
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
 */const Vr=hE;function _d(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ya,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw fn.create("bad-app-name",{appName:String(r)});if(n||(n=r_()),!n)throw fn.create("no-options");const i=ji.get(r);if(i){if(Bi(n,i.options)&&Bi(s,i.config))return i;throw fn.create("duplicate-app",{appName:r})}const o=new T_(r);for(const c of Ja.values())o.addComponent(c);const a=new gE(n,s,o);return ji.set(r,a),a}function Ed(t=Ya){const e=ji.get(t);if(!e&&t===Ya)return _d();if(!e)throw fn.create("no-app",{appName:t});return e}function dn(t,e,n){var s;let r=(s=fE[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Hn.warn(a.join(" "));return}Es(new jn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const mE="firebase-heartbeat-database",yE=1,Er="firebase-heartbeat-store";let ga=null;function Id(){return ga||(ga=L_(mE,yE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Er)}}}).catch(t=>{throw fn.create("idb-open",{originalErrorMessage:t.message})})),ga}async function vE(t){try{return(await Id()).transaction(Er).objectStore(Er).get(Td(t))}catch(e){if(e instanceof Jt)Hn.warn(e.message);else{const n=fn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Hn.warn(n.message)}}}async function Ql(t,e){try{const s=(await Id()).transaction(Er,"readwrite");return await s.objectStore(Er).put(e,Td(t)),s.done}catch(n){if(n instanceof Jt)Hn.warn(n.message);else{const s=fn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Hn.warn(s.message)}}}function Td(t){return`${t.name}!${t.options.appId}`}/**
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
 */const wE=1024,_E=30*24*60*60*1e3;class EE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new TE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Yl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=_E}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Yl(),{heartbeatsToSend:n,unsentEntries:s}=IE(this._heartbeatsCache.heartbeats),r=$i(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Yl(){return new Date().toISOString().substring(0,10)}function IE(t,e=wE){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Jl(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Jl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class TE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return h_()?f_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await vE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ql(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ql(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Jl(t){return $i(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function bE(t){Es(new jn("platform-logger",e=>new V_(e),"PRIVATE")),Es(new jn("heartbeat",e=>new EE(e),"PRIVATE")),dn(Qa,Gl,t),dn(Qa,Gl,"esm2017"),dn("fire-js","")}bE("");function Gc(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function bd(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const SE=bd,Sd=new Ur("auth","Firebase",bd());/**
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
 */const Xl=new zc("@firebase/auth");function Ai(t,...e){Xl.logLevel<=re.ERROR&&Xl.error(`Auth (${Vr}): ${t}`,...e)}/**
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
 */function ht(t,...e){throw Qc(t,...e)}function Nt(t,...e){return Qc(t,...e)}function Cd(t,e,n){const s=Object.assign(Object.assign({},SE()),{[e]:n});return new Ur("auth","Firebase",s).create(e,{appName:t.name})}function CE(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&ht(t,"argument-error"),Cd(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Qc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Sd.create(t,...e)}function H(t,e,...n){if(!t)throw Qc(e,...n)}function Vt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ai(e),new Error(e)}function zt(t,e){t||Vt(e)}/**
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
 */const Zl=new Map;function $t(t){zt(t instanceof Function,"Expected a class definition");let e=Zl.get(t);return e?(zt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Zl.set(t,e),e)}/**
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
 */function AE(t,e){const n=Wc(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Bi(i,e??{}))return r;ht(r,"already-initialized")}return n.initialize({options:e})}function kE(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map($t);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Xa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function RE(){return eh()==="http:"||eh()==="https:"}function eh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function DE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(RE()||c_()||"connection"in navigator)?navigator.onLine:!0}function NE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class $r{constructor(e,n){this.shortDelay=e,this.longDelay=n,zt(n>e,"Short delay should be less than long delay!"),this.isMobile=a_()||u_()}get(){return DE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Yc(t,e){zt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ad{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Vt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Vt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Vt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const OE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const PE=new $r(3e4,6e4);function Ps(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function xs(t,e,n,s,r={}){return kd(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Fr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Ad.fetch()(Rd(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function kd(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},OE),e);try{const r=new xE(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw fi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw fi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw fi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw fi(t,"user-disabled",o);const l=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Cd(t,l,u);ht(t,l)}}catch(r){if(r instanceof Jt)throw r;ht(t,"network-request-failed",{message:String(r)})}}async function Br(t,e,n,s,r={}){const i=await xs(t,e,n,s,r);return"mfaPendingCredential"in i&&ht(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Rd(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Yc(t.config,r):`${t.config.apiScheme}://${r}`}class xE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Nt(this.auth,"network-request-failed")),PE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function fi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Nt(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function ME(t,e){return xs(t,"POST","/v1/accounts:delete",e)}async function LE(t,e){return xs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function cr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function UE(t,e=!1){const n=rt(t),s=await n.getIdToken(e),r=Jc(s);H(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:cr(ma(r.auth_time)),issuedAtTime:cr(ma(r.iat)),expirationTime:cr(ma(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ma(t){return Number(t)*1e3}function Jc(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Ai("JWT malformed, contained fewer than 3 sections"),null;try{const r=gd(n);return r?JSON.parse(r):(Ai("Failed to decode base64 JWT payload"),null)}catch(r){return Ai("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function FE(t){const e=Jc(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ir(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Jt&&VE(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function VE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class $E{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Dd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=cr(this.lastLoginAt),this.creationTime=cr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Hi(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Ir(t,LE(n,{idToken:s}));H(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?HE(i.providerUserInfo):[],a=jE(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Dd(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function BE(t){const e=rt(t);await Hi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jE(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function HE(t){return t.map(e=>{var{providerId:n}=e,s=Gc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function qE(t,e){const n=await kd(t,{},async()=>{const s=Fr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Rd(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ad.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Tr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):FE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await qE(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Tr;return s&&(H(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(H(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Tr,this.toJSON())}_performRefresh(){return Vt("not implemented")}}/**
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
 */function tn(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Fn{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Gc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $E(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Dd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ir(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return UE(this,e)}reload(){return BE(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Fn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Hi(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ir(this,ME(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,u,l;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,D=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(u=n.createdAt)!==null&&u!==void 0?u:void 0,U=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:P,emailVerified:J,isAnonymous:fe,providerData:_e,stsTokenManager:We}=n;H(P&&We,e,"internal-error");const Je=Tr.fromJSON(this.name,We);H(typeof P=="string",e,"internal-error"),tn(h,e.name),tn(d,e.name),H(typeof J=="boolean",e,"internal-error"),H(typeof fe=="boolean",e,"internal-error"),tn(g,e.name),tn(v,e.name),tn(E,e.name),tn(D,e.name),tn(k,e.name),tn(U,e.name);const Tt=new Fn({uid:P,auth:e,email:d,emailVerified:J,displayName:h,isAnonymous:fe,photoURL:v,phoneNumber:g,tenantId:E,stsTokenManager:Je,createdAt:k,lastLoginAt:U});return _e&&Array.isArray(_e)&&(Tt.providerData=_e.map(ot=>Object.assign({},ot))),D&&(Tt._redirectEventId=D),Tt}static async _fromIdTokenResponse(e,n,s=!1){const r=new Tr;r.updateFromServerResponse(n);const i=new Fn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Hi(i),i}}/**
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
 */class Nd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Nd.type="NONE";const th=Nd;/**
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
 */function ki(t,e,n){return`firebase:${t}:${e}:${n}`}class fs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=ki(this.userKey,r.apiKey,i),this.fullPersistenceKey=ki("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Fn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new fs($t(th),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||$t(th);const o=ki(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=Fn._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new fs(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new fs(i,e,s))}}/**
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
 */function nh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(xd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Od(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ld(e))return"Blackberry";if(Ud(e))return"Webos";if(Xc(e))return"Safari";if((e.includes("chrome/")||Pd(e))&&!e.includes("edge/"))return"Chrome";if(Md(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Od(t=ze()){return/firefox\//i.test(t)}function Xc(t=ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Pd(t=ze()){return/crios\//i.test(t)}function xd(t=ze()){return/iemobile/i.test(t)}function Md(t=ze()){return/android/i.test(t)}function Ld(t=ze()){return/blackberry/i.test(t)}function Ud(t=ze()){return/webos/i.test(t)}function bo(t=ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function zE(t=ze()){var e;return bo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function KE(){return l_()&&document.documentMode===10}function Fd(t=ze()){return bo(t)||Md(t)||Ud(t)||Ld(t)||/windows phone/i.test(t)||xd(t)}function WE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Vd(t,e=[]){let n;switch(t){case"Browser":n=nh(ze());break;case"Worker":n=`${nh(ze())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vr}/${s}`}/**
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
 */class GE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class QE{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sh(this),this.idTokenSubscription=new sh(this),this.beforeStateQueue=new GE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sd,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=$t(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await fs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Hi(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=NE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?rt(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence($t(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ur("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&$t(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await fs.create(this,[$t(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return H(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Ms(t){return rt(t)}class sh{constructor(e){this.auth=e,this.observer=null,this.addObserver=y_(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function YE(t,e,n){const s=Ms(t);H(s._canInitEmulator,s,"emulator-config-failed"),H(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=$d(e),{host:o,port:a}=JE(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||XE()}function $d(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function JE(t){const e=$d(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:rh(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:rh(o)}}}function rh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function XE(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Zc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Vt("not implemented")}_getIdTokenResponse(e){return Vt("not implemented")}_linkToIdToken(e,n){return Vt("not implemented")}_getReauthenticationResolver(e){return Vt("not implemented")}}async function ZE(t,e){return xs(t,"POST","/v1/accounts:update",e)}/**
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
 */async function e0(t,e){return Br(t,"POST","/v1/accounts:signInWithPassword",Ps(t,e))}async function t0(t,e){return xs(t,"POST","/v1/accounts:sendOobCode",Ps(t,e))}async function n0(t,e){return t0(t,e)}/**
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
 */async function s0(t,e){return Br(t,"POST","/v1/accounts:signInWithEmailLink",Ps(t,e))}async function r0(t,e){return Br(t,"POST","/v1/accounts:signInWithEmailLink",Ps(t,e))}/**
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
 */class br extends Zc{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new br(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new br(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return e0(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return s0(e,{email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return ZE(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return r0(e,{idToken:n,email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ds(t,e){return Br(t,"POST","/v1/accounts:signInWithIdp",Ps(t,e))}/**
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
 */const i0="http://localhost";class qn extends Zc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Gc(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new qn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ds(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ds(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ds(e,n)}buildRequest(){const e={requestUri:i0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fr(n)}return e}}/**
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
 */function o0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function a0(t){const e=Js(Xs(t)).link,n=e?Js(Xs(e)).deep_link_id:null,s=Js(Xs(t)).deep_link_id;return(s?Js(Xs(s)).link:null)||s||n||e||t}class eu{constructor(e){var n,s,r,i,o,a;const c=Js(Xs(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(s=c.oobCode)!==null&&s!==void 0?s:null,h=o0((r=c.mode)!==null&&r!==void 0?r:null);H(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=a0(e);try{return new eu(n)}catch{return null}}}/**
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
 */class Ls{constructor(){this.providerId=Ls.PROVIDER_ID}static credential(e,n){return br._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=eu.parseLink(n);return H(s,"argument-error"),br._fromEmailAndCode(e,s.code,s.tenantId)}}Ls.PROVIDER_ID="password";Ls.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ls.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class tu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class jr extends tu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class rn extends jr{constructor(){super("facebook.com")}static credential(e){return qn._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rn.credential(e.oauthAccessToken)}catch{return null}}}rn.FACEBOOK_SIGN_IN_METHOD="facebook.com";rn.PROVIDER_ID="facebook.com";/**
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
 */class on extends jr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qn._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return on.credential(n,s)}catch{return null}}}on.GOOGLE_SIGN_IN_METHOD="google.com";on.PROVIDER_ID="google.com";/**
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
 */class an extends jr{constructor(){super("github.com")}static credential(e){return qn._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return an.credential(e.oauthAccessToken)}catch{return null}}}an.GITHUB_SIGN_IN_METHOD="github.com";an.PROVIDER_ID="github.com";/**
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
 */class cn extends jr{constructor(){super("twitter.com")}static credential(e,n){return qn._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return cn.credential(n,s)}catch{return null}}}cn.TWITTER_SIGN_IN_METHOD="twitter.com";cn.PROVIDER_ID="twitter.com";/**
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
 */async function c0(t,e){return Br(t,"POST","/v1/accounts:signUp",Ps(t,e))}/**
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
 */class zn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Fn._fromIdTokenResponse(e,s,r),o=ih(s);return new zn({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=ih(s);return new zn({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function ih(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class qi extends Jt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,qi.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new qi(e,n,s,r)}}function Bd(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?qi._fromErrorAndOperation(t,i,e,s):i})}async function u0(t,e,n=!1){const s=await Ir(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return zn._forOperation(t,"link",s)}/**
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
 */async function l0(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await Ir(t,Bd(s,r,e,t),n);H(i.idToken,s,"internal-error");const o=Jc(i.idToken);H(o,s,"internal-error");const{sub:a}=o;return H(t.uid===a,s,"user-mismatch"),zn._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ht(s,"user-mismatch"),i}}/**
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
 */async function jd(t,e,n=!1){const s="signIn",r=await Bd(t,s,e),i=await zn._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function h0(t,e){return jd(Ms(t),e)}/**
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
 */function f0(t,e,n){var s;H(((s=n.url)===null||s===void 0?void 0:s.length)>0,t,"invalid-continue-uri"),H(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(H(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(H(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}async function ZC(t,e,n){const s=Ms(t),r=await c0(s,{returnSecureToken:!0,email:e,password:n}),i=await zn._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function eA(t,e,n){return h0(rt(t),Ls.credential(e,n))}async function tA(t,e){const n=rt(t),r={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&f0(n.auth,r,e);const{email:i}=await n0(n.auth,r);i!==t.email&&await t.reload()}function d0(t,e,n,s){return rt(t).onIdTokenChanged(e,n,s)}function p0(t,e,n){return rt(t).beforeAuthStateChanged(e,n)}const zi="__sak";/**
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
 */class Hd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(zi,"1"),this.storage.removeItem(zi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function g0(){const t=ze();return Xc(t)||bo(t)}const m0=1e3,y0=10;class qd extends Hd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=g0()&&WE(),this.fallbackToPolling=Fd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);KE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,y0):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},m0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}qd.type="LOCAL";const v0=qd;/**
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
 */class zd extends Hd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}zd.type="SESSION";const Kd=zd;/**
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
 */function w0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class So{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new So(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await w0(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}So.receivers=[];/**
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
 */function nu(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class _0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=nu("",20);r.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ot(){return window}function E0(t){Ot().location.href=t}/**
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
 */function Wd(){return typeof Ot().WorkerGlobalScope<"u"&&typeof Ot().importScripts=="function"}async function I0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function T0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function b0(){return Wd()?self:null}/**
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
 */const Gd="firebaseLocalStorageDb",S0=1,Ki="firebaseLocalStorage",Qd="fbase_key";class Hr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Co(t,e){return t.transaction([Ki],e?"readwrite":"readonly").objectStore(Ki)}function C0(){const t=indexedDB.deleteDatabase(Gd);return new Hr(t).toPromise()}function Za(){const t=indexedDB.open(Gd,S0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Ki,{keyPath:Qd})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Ki)?e(s):(s.close(),await C0(),e(await Za()))})})}async function oh(t,e,n){const s=Co(t,!0).put({[Qd]:e,value:n});return new Hr(s).toPromise()}async function A0(t,e){const n=Co(t,!1).get(e),s=await new Hr(n).toPromise();return s===void 0?null:s.value}function ah(t,e){const n=Co(t,!0).delete(e);return new Hr(n).toPromise()}const k0=800,R0=3;class Yd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Za(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>R0)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=So._getInstance(b0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await I0(),!this.activeServiceWorker)return;this.sender=new _0(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||T0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Za();return await oh(e,zi,"1"),await ah(e,zi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>oh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>A0(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ah(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Co(r,!1).getAll();return new Hr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),k0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yd.type="LOCAL";const D0=Yd;/**
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
 */function N0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function O0(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Nt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",N0().appendChild(s)})}function P0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new $r(3e4,6e4);/**
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
 */function Jd(t,e){return e?$t(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class su extends Zc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ds(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ds(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ds(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function x0(t){return jd(t.auth,new su(t),t.bypassAuthState)}function M0(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),l0(n,new su(t),t.bypassAuthState)}async function L0(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),u0(n,new su(t),t.bypassAuthState)}/**
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
 */class Xd{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return x0;case"linkViaPopup":case"linkViaRedirect":return L0;case"reauthViaPopup":case"reauthViaRedirect":return M0;default:ht(this.auth,"internal-error")}}resolve(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const U0=new $r(2e3,1e4);async function nA(t,e,n){const s=Ms(t);CE(t,e,tu);const r=Jd(s,n);return new Nn(s,"signInViaPopup",e,r).executeNotNull()}class Nn extends Xd{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Nn.currentPopupAction&&Nn.currentPopupAction.cancel(),Nn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){zt(this.filter.length===1,"Popup operations only handle one event");const e=nu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Nn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,U0.get())};e()}}Nn.currentPopupAction=null;/**
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
 */const F0="pendingRedirect",Ri=new Map;class V0 extends Xd{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ri.get(this.auth._key());if(!e){try{const s=await $0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ri.set(this.auth._key(),e)}return this.bypassAuthState||Ri.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $0(t,e){const n=H0(e),s=j0(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function B0(t,e){Ri.set(t._key(),e)}function j0(t){return $t(t._redirectPersistence)}function H0(t){return ki(F0,t.config.apiKey,t.name)}async function q0(t,e,n=!1){const s=Ms(t),r=Jd(s,e),o=await new V0(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const z0=10*60*1e3;class K0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!W0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Zd(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Nt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=z0&&this.cachedEventUids.clear(),this.cachedEventUids.has(ch(e))}saveEventToCache(e){this.cachedEventUids.add(ch(e)),this.lastProcessedEventTime=Date.now()}}function ch(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Zd({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function W0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zd(t);default:return!1}}/**
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
 */async function G0(t,e={}){return xs(t,"GET","/v1/projects",e)}/**
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
 */const Q0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Y0=/^https?/;async function J0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await G0(t);for(const n of e)try{if(X0(n))return}catch{}ht(t,"unauthorized-domain")}function X0(t){const e=Xa(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Y0.test(n))return!1;if(Q0.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const Z0=new $r(3e4,6e4);function uh(){const t=Ot().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function eI(t){return new Promise((e,n)=>{var s,r,i;function o(){uh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{uh(),n(Nt(t,"network-request-failed"))},timeout:Z0.get()})}if(!((r=(s=Ot().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Ot().gapi)===null||i===void 0)&&i.load)o();else{const a=P0("iframefcb");return Ot()[a]=()=>{gapi.load?o():n(Nt(t,"network-request-failed"))},O0(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Di=null,e})}let Di=null;function tI(t){return Di=Di||eI(t),Di}/**
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
 */const nI=new $r(5e3,15e3),sI="__/auth/iframe",rI="emulator/auth/iframe",iI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function aI(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Yc(e,rI):`https://${t.config.authDomain}/${sI}`,s={apiKey:e.apiKey,appName:t.name,v:Vr},r=oI.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Fr(s).slice(1)}`}async function cI(t){const e=await tI(t),n=Ot().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:aI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iI,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Nt(t,"network-request-failed"),a=Ot().setTimeout(()=>{i(o)},nI.get());function c(){Ot().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const uI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lI=500,hI=600,fI="_blank",dI="http://localhost";class lh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pI(t,e,n,s=lI,r=hI){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},uI),{width:s.toString(),height:r.toString(),top:i,left:o}),u=ze().toLowerCase();n&&(a=Pd(u)?fI:n),Od(u)&&(e=e||dI,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[g,v])=>`${d}${g}=${v},`,"");if(zE(u)&&a!=="_self")return gI(e||"",a),new lh(null);const h=window.open(e||"",a,l);H(h,t,"popup-blocked");try{h.focus()}catch{}return new lh(h)}function gI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const mI="__/auth/handler",yI="emulator/auth/handler";function hh(t,e,n,s,r,i){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Vr,eventId:r};if(e instanceof tu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",m_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof jr){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${vI(t)}?${Fr(a).slice(1)}`}function vI({config:t}){return t.emulator?Yc(t,yI):`https://${t.authDomain}/${mI}`}/**
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
 */const ya="webStorageSupport";class wI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kd,this._completeRedirectFn=q0,this._overrideRedirectResult=B0}async _openPopup(e,n,s,r){var i;zt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=hh(e,n,s,Xa(),r);return pI(e,o,nu())}async _openRedirect(e,n,s,r){return await this._originValidation(e),E0(hh(e,n,s,Xa(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(zt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await cI(e),s=new K0(e);return n.register("authEvent",r=>(H(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ya,{type:ya},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[ya];o!==void 0&&n(!!o),ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=J0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Fd()||Xc()||bo()}}const _I=wI;var fh="@firebase/auth",dh="0.22.0";/**
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
 */class EI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function II(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function TI(t){Es(new jn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{H(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),H(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vd(t)},l=new QE(a,c,u);return kE(l,n),l})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Es(new jn("auth-internal",e=>{const n=Ms(e.getProvider("auth").getImmediate());return(s=>new EI(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dn(fh,dh,II(t)),dn(fh,dh,"esm2017")}/**
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
 */const bI=5*60,SI=yd("authIdTokenMaxAge")||bI;let ph=null;const CI=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>SI)return;const r=n==null?void 0:n.token;ph!==r&&(ph=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function AI(t=Ed()){const e=Wc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=AE(t,{popupRedirectResolver:_I,persistence:[D0,v0,Kd]}),s=yd("authTokenSyncURL");if(s){const i=CI(s);p0(n,i,()=>i(n.currentUser)),d0(n,o=>i(o))}const r=md("auth");return r&&YE(n,`http://${r}`),n}TI("Browser");var kI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,ru=ru||{},z=kI||self;function Wi(){}function Ao(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function qr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function RI(t){return Object.prototype.hasOwnProperty.call(t,va)&&t[va]||(t[va]=++DI)}var va="closure_uid_"+(1e9*Math.random()>>>0),DI=0;function NI(t,e,n){return t.call.apply(t.bind,arguments)}function OI(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function He(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?He=NI:He=OI,He.apply(null,arguments)}function di(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Le(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function wn(){this.s=this.s,this.o=this.o}var PI=0;wn.prototype.s=!1;wn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),PI!=0)&&RI(this)};wn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ep=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function iu(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function gh(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Ao(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function qe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}qe.prototype.h=function(){this.defaultPrevented=!0};var xI=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{z.addEventListener("test",Wi,e),z.removeEventListener("test",Wi,e)}catch{}return t}();function Gi(t){return/^[\s\xa0]*$/.test(t)}var mh=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function wa(t,e){return t<e?-1:t>e?1:0}function ko(){var t=z.navigator;return t&&(t=t.userAgent)?t:""}function Dt(t){return ko().indexOf(t)!=-1}function ou(t){return ou[" "](t),t}ou[" "]=Wi;function MI(t){var e=FI;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var LI=Dt("Opera"),Is=Dt("Trident")||Dt("MSIE"),tp=Dt("Edge"),ec=tp||Is,np=Dt("Gecko")&&!(ko().toLowerCase().indexOf("webkit")!=-1&&!Dt("Edge"))&&!(Dt("Trident")||Dt("MSIE"))&&!Dt("Edge"),UI=ko().toLowerCase().indexOf("webkit")!=-1&&!Dt("Edge");function sp(){var t=z.document;return t?t.documentMode:void 0}var Qi;e:{var _a="",Ea=function(){var t=ko();if(np)return/rv:([^\);]+)(\)|;)/.exec(t);if(tp)return/Edge\/([\d\.]+)/.exec(t);if(Is)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(UI)return/WebKit\/(\S+)/.exec(t);if(LI)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ea&&(_a=Ea?Ea[1]:""),Is){var Ia=sp();if(Ia!=null&&Ia>parseFloat(_a)){Qi=String(Ia);break e}}Qi=_a}var FI={};function VI(){return MI(function(){let t=0;const e=mh(String(Qi)).split("."),n=mh("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=wa(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||wa(r[2].length==0,i[2].length==0)||wa(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var tc;if(z.document&&Is){var yh=sp();tc=yh||parseInt(Qi,10)||void 0}else tc=void 0;var $I=tc;function Sr(t,e){if(qe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(np){e:{try{ou(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:BI[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Sr.X.h.call(this)}}Le(Sr,qe);var BI={2:"touch",3:"pen",4:"mouse"};Sr.prototype.h=function(){Sr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var zr="closure_listenable_"+(1e6*Math.random()|0),jI=0;function HI(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++jI,this.ba=this.ea=!1}function Ro(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function au(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function rp(t){const e={};for(const n in t)e[n]=t[n];return e}const vh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ip(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<vh.length;i++)n=vh[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Do(t){this.src=t,this.g={},this.h=0}Do.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=sc(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new HI(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function nc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=ep(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Ro(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function sc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var cu="closure_lm_"+(1e6*Math.random()|0),Ta={};function op(t,e,n,s,r){if(s&&s.once)return cp(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)op(t,e[i],n,s,r);return null}return n=hu(n),t&&t[zr]?t.N(e,n,qr(s)?!!s.capture:!!s,r):ap(t,e,n,!1,s,r)}function ap(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=qr(r)?!!r.capture:!!r,a=lu(t);if(a||(t[cu]=a=new Do(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=qI(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)xI||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(lp(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function qI(){function t(n){return e.call(t.src,t.listener,n)}const e=zI;return t}function cp(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)cp(t,e[i],n,s,r);return null}return n=hu(n),t&&t[zr]?t.O(e,n,qr(s)?!!s.capture:!!s,r):ap(t,e,n,!0,s,r)}function up(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)up(t,e[i],n,s,r);else s=qr(s)?!!s.capture:!!s,n=hu(n),t&&t[zr]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=sc(i,n,s,r),-1<n&&(Ro(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=lu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=sc(e,n,s,r)),(n=-1<t?e[t]:null)&&uu(n))}function uu(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[zr])nc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(lp(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=lu(e))?(nc(n,t),n.h==0&&(n.src=null,e[cu]=null)):Ro(t)}}}function lp(t){return t in Ta?Ta[t]:Ta[t]="on"+t}function zI(t,e){if(t.ba)t=!0;else{e=new Sr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&uu(t),t=n.call(s,e)}return t}function lu(t){return t=t[cu],t instanceof Do?t:null}var ba="__closure_events_fn_"+(1e9*Math.random()>>>0);function hu(t){return typeof t=="function"?t:(t[ba]||(t[ba]=function(e){return t.handleEvent(e)}),t[ba])}function Pe(){wn.call(this),this.i=new Do(this),this.P=this,this.I=null}Le(Pe,wn);Pe.prototype[zr]=!0;Pe.prototype.removeEventListener=function(t,e,n,s){up(this,t,e,n,s)};function Me(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new qe(e,t);else if(e instanceof qe)e.target=e.target||t;else{var r=e;e=new qe(s,t),ip(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=pi(o,s,!0,e)&&r}if(o=e.g=t,r=pi(o,s,!0,e)&&r,r=pi(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=pi(o,s,!1,e)&&r}Pe.prototype.M=function(){if(Pe.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Ro(n[s]);delete t.g[e],t.h--}}this.I=null};Pe.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Pe.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function pi(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&nc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var fu=z.JSON.stringify;function KI(){var t=dp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class WI{constructor(){this.h=this.g=null}add(e,n){const s=hp.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var hp=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new GI,t=>t.reset());class GI{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function QI(t){z.setTimeout(()=>{throw t},0)}function fp(t,e){rc||YI(),ic||(rc(),ic=!0),dp.add(t,e)}var rc;function YI(){var t=z.Promise.resolve(void 0);rc=function(){t.then(JI)}}var ic=!1,dp=new WI;function JI(){for(var t;t=KI();){try{t.h.call(t.g)}catch(n){QI(n)}var e=hp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ic=!1}function No(t,e){Pe.call(this),this.h=t||1,this.g=e||z,this.j=He(this.lb,this),this.l=Date.now()}Le(No,Pe);M=No.prototype;M.ca=!1;M.R=null;M.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Me(this,"tick"),this.ca&&(du(this),this.start()))}};M.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function du(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}M.M=function(){No.X.M.call(this),du(this),delete this.g};function pu(t,e,n){if(typeof t=="function")n&&(t=He(t,n));else if(t&&typeof t.handleEvent=="function")t=He(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:z.setTimeout(t,e||0)}function pp(t){t.g=pu(()=>{t.g=null,t.i&&(t.i=!1,pp(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class XI extends wn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:pp(this)}M(){super.M(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Cr(t){wn.call(this),this.h=t,this.g={}}Le(Cr,wn);var wh=[];function gp(t,e,n,s){Array.isArray(n)||(n&&(wh[0]=n.toString()),n=wh);for(var r=0;r<n.length;r++){var i=op(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function mp(t){au(t.g,function(e,n){this.g.hasOwnProperty(n)&&uu(e)},t),t.g={}}Cr.prototype.M=function(){Cr.X.M.call(this),mp(this)};Cr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Oo(){this.g=!0}Oo.prototype.Aa=function(){this.g=!1};function ZI(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function eT(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function as(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+nT(t,n)+(s?" "+s:"")})}function tT(t,e){t.info(function(){return"TIMEOUT: "+e})}Oo.prototype.info=function(){};function nT(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return fu(n)}catch{return e}}var Qn={},_h=null;function Po(){return _h=_h||new Pe}Qn.Pa="serverreachability";function yp(t){qe.call(this,Qn.Pa,t)}Le(yp,qe);function Ar(t){const e=Po();Me(e,new yp(e))}Qn.STAT_EVENT="statevent";function vp(t,e){qe.call(this,Qn.STAT_EVENT,t),this.stat=e}Le(vp,qe);function Qe(t){const e=Po();Me(e,new vp(e,t))}Qn.Qa="timingevent";function wp(t,e){qe.call(this,Qn.Qa,t),this.size=e}Le(wp,qe);function Kr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){t()},e)}var xo={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},_p={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function gu(){}gu.prototype.h=null;function Eh(t){return t.h||(t.h=t.i())}function Ep(){}var Wr={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function mu(){qe.call(this,"d")}Le(mu,qe);function yu(){qe.call(this,"c")}Le(yu,qe);var oc;function Mo(){}Le(Mo,gu);Mo.prototype.g=function(){return new XMLHttpRequest};Mo.prototype.i=function(){return{}};oc=new Mo;function Gr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Cr(this),this.O=sT,t=ec?125:void 0,this.T=new No(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Ip}function Ip(){this.i=null,this.g="",this.h=!1}var sT=45e3,ac={},Yi={};M=Gr.prototype;M.setTimeout=function(t){this.O=t};function cc(t,e,n){t.K=1,t.v=Uo(Kt(e)),t.s=n,t.P=!0,Tp(t,null)}function Tp(t,e){t.F=Date.now(),Qr(t),t.A=Kt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Np(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Ip,t.g=Xp(t.l,n?e:null,!t.s),0<t.N&&(t.L=new XI(He(t.La,t,t.g),t.N)),gp(t.S,t.g,"readystatechange",t.ib),e=t.H?rp(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Ar(),ZI(t.j,t.u,t.A,t.m,t.U,t.s)}M.ib=function(t){t=t.target;const e=this.L;e&&Bt(t)==3?e.l():this.La(t)};M.La=function(t){try{if(t==this.g)e:{const l=Bt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||ec||this.g&&(this.h.h||this.g.fa()||Sh(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Ar(3):Ar(2)),Lo(this);var n=this.g.aa();this.Y=n;t:if(bp(this)){var s=Sh(this.g);t="";var r=s.length,i=Bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){On(this),ur(this);var o="";break t}this.h.i=new z.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,eT(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Gi(a)){var u=a;break t}}u=null}if(n=u)as(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,uc(this,n);else{this.i=!1,this.o=3,Qe(12),On(this),ur(this);break e}}this.P?(Sp(this,l,o),ec&&this.i&&l==3&&(gp(this.S,this.T,"tick",this.hb),this.T.start())):(as(this.j,this.m,o,null),uc(this,o)),l==4&&On(this),this.i&&!this.I&&(l==4?Gp(this.l,this):(this.i=!1,Qr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Qe(12)):(this.o=0,Qe(13)),On(this),ur(this)}}}catch{}finally{}};function bp(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Sp(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=rT(t,n),r==Yi){e==4&&(t.o=4,Qe(14),s=!1),as(t.j,t.m,null,"[Incomplete Response]");break}else if(r==ac){t.o=4,Qe(15),as(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else as(t.j,t.m,r,null),uc(t,r);bp(t)&&r!=Yi&&r!=ac&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Qe(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),bu(e),e.K=!0,Qe(11))):(as(t.j,t.m,n,"[Invalid Chunked Response]"),On(t),ur(t))}M.hb=function(){if(this.g){var t=Bt(this.g),e=this.g.fa();this.C<e.length&&(Lo(this),Sp(this,t,e),this.i&&t!=4&&Qr(this))}};function rT(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Yi:(n=Number(e.substring(n,s)),isNaN(n)?ac:(s+=1,s+n>e.length?Yi:(e=e.substr(s,n),t.C=s+n,e)))}M.cancel=function(){this.I=!0,On(this)};function Qr(t){t.V=Date.now()+t.O,Cp(t,t.O)}function Cp(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Kr(He(t.gb,t),e)}function Lo(t){t.B&&(z.clearTimeout(t.B),t.B=null)}M.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(tT(this.j,this.A),this.K!=2&&(Ar(),Qe(17)),On(this),this.o=2,ur(this)):Cp(this,this.V-t)};function ur(t){t.l.G==0||t.I||Gp(t.l,t)}function On(t){Lo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,du(t.T),mp(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function uc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||lc(n.h,t))){if(!t.J&&lc(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Zi(n),$o(n);else break e;Tu(n),Qe(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Kr(He(n.cb,n),6e3));if(1>=xp(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Pn(n,11)}else if((t.J||n.g==t)&&Zi(n),!Gi(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const v=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var i=s.h;i.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(vu(i,i.h),i.h=null))}if(s.D){const E=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(s.za=E,ge(s.F,s.D,E))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Jp(s,s.H?s.ka:null,s.V),o.J){Mp(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Lo(a),Qr(a)),s.g=o}else Kp(s);0<n.i.length&&Bo(n)}else u[0]!="stop"&&u[0]!="close"||Pn(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Pn(n,7):Iu(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Ar(4)}catch{}}function iT(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ao(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function oT(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ao(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Ap(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ao(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=oT(t),s=iT(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var kp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function aT(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Vn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Vn){this.h=e!==void 0?e:t.h,Ji(this,t.j),this.s=t.s,this.g=t.g,Xi(this,t.m),this.l=t.l,e=t.i;var n=new kr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ih(this,n),this.o=t.o}else t&&(n=String(t).match(kp))?(this.h=!!e,Ji(this,n[1]||"",!0),this.s=Zs(n[2]||""),this.g=Zs(n[3]||"",!0),Xi(this,n[4]),this.l=Zs(n[5]||"",!0),Ih(this,n[6]||"",!0),this.o=Zs(n[7]||"")):(this.h=!!e,this.i=new kr(null,this.h))}Vn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(er(e,Th,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(er(e,Th,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(er(n,n.charAt(0)=="/"?lT:uT,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",er(n,fT)),t.join("")};function Kt(t){return new Vn(t)}function Ji(t,e,n){t.j=n?Zs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Xi(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ih(t,e,n){e instanceof kr?(t.i=e,dT(t.i,t.h)):(n||(e=er(e,hT)),t.i=new kr(e,t.h))}function ge(t,e,n){t.i.set(e,n)}function Uo(t){return ge(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Zs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function er(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,cT),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function cT(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Th=/[#\/\?@]/g,uT=/[#\?:]/g,lT=/[#\?]/g,hT=/[#\?@]/g,fT=/#/g;function kr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function _n(t){t.g||(t.g=new Map,t.h=0,t.i&&aT(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=kr.prototype;M.add=function(t,e){_n(this),this.i=null,t=Us(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Rp(t,e){_n(t),e=Us(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Dp(t,e){return _n(t),e=Us(t,e),t.g.has(e)}M.forEach=function(t,e){_n(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};M.oa=function(){_n(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};M.W=function(t){_n(this);let e=[];if(typeof t=="string")Dp(this,t)&&(e=e.concat(this.g.get(Us(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};M.set=function(t,e){return _n(this),this.i=null,t=Us(this,t),Dp(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Np(t,e,n){Rp(t,e),0<n.length&&(t.i=null,t.g.set(Us(t,e),iu(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Us(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function dT(t,e){e&&!t.j&&(_n(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Rp(this,s),Np(this,r,n))},t)),t.j=e}var pT=class{constructor(e,n){this.h=e,this.g=n}};function Op(t){this.l=t||gT,z.PerformanceNavigationTiming?(t=z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(z.g&&z.g.Ga&&z.g.Ga()&&z.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var gT=10;function Pp(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function xp(t){return t.h?1:t.g?t.g.size:0}function lc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function vu(t,e){t.g?t.g.add(e):t.h=e}function Mp(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Op.prototype.cancel=function(){if(this.i=Lp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Lp(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return iu(t.i)}function wu(){}wu.prototype.stringify=function(t){return z.JSON.stringify(t,void 0)};wu.prototype.parse=function(t){return z.JSON.parse(t,void 0)};function mT(){this.g=new wu}function yT(t,e,n){const s=n||"";try{Ap(t,function(r,i){let o=r;qr(r)&&(o=fu(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function vT(t,e){const n=new Oo;if(z.Image){const s=new Image;s.onload=di(gi,n,s,"TestLoadImage: loaded",!0,e),s.onerror=di(gi,n,s,"TestLoadImage: error",!1,e),s.onabort=di(gi,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=di(gi,n,s,"TestLoadImage: timeout",!1,e),z.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function gi(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Yr(t){this.l=t.ac||null,this.j=t.jb||!1}Le(Yr,gu);Yr.prototype.g=function(){return new Fo(this.l,this.j)};Yr.prototype.i=function(t){return function(){return t}}({});function Fo(t,e){Pe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=_u,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Le(Fo,Pe);var _u=0;M=Fo.prototype;M.open=function(t,e){if(this.readyState!=_u)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Rr(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||z).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Jr(this)),this.readyState=_u};M.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Rr(this)),this.g&&(this.readyState=3,Rr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Up(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Up(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}M.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Jr(this):Rr(this),this.readyState==3&&Up(this)}};M.Va=function(t){this.g&&(this.response=this.responseText=t,Jr(this))};M.Ua=function(t){this.g&&(this.response=t,Jr(this))};M.ga=function(){this.g&&Jr(this)};function Jr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Rr(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Rr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Fo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var wT=z.JSON.parse;function we(t){Pe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Fp,this.K=this.L=!1}Le(we,Pe);var Fp="",_T=/^https?$/i,ET=["POST","PUT"];M=we.prototype;M.Ka=function(t){this.L=t};M.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():oc.g(),this.C=this.u?Eh(this.u):Eh(oc),this.g.onreadystatechange=He(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){bh(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=z.FormData&&t instanceof z.FormData,!(0<=ep(ET,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Bp(this),0<this.B&&((this.K=IT(this.g))?(this.g.timeout=this.B,this.g.ontimeout=He(this.qa,this)):this.A=pu(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){bh(this,i)}};function IT(t){return Is&&VI()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}M.qa=function(){typeof ru<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Me(this,"timeout"),this.abort(8))};function bh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Vp(t),Vo(t)}function Vp(t){t.D||(t.D=!0,Me(t,"complete"),Me(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Me(this,"complete"),Me(this,"abort"),Vo(this))};M.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Vo(this,!0)),we.X.M.call(this)};M.Ha=function(){this.s||(this.F||this.v||this.l?$p(this):this.fb())};M.fb=function(){$p(this)};function $p(t){if(t.h&&typeof ru<"u"&&(!t.C[1]||Bt(t)!=4||t.aa()!=2)){if(t.v&&Bt(t)==4)pu(t.Ha,0,t);else if(Me(t,"readystatechange"),Bt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(kp)[1]||null;if(!r&&z.self&&z.self.location){var i=z.self.location.protocol;r=i.substr(0,i.length-1)}s=!_T.test(r?r.toLowerCase():"")}n=s}if(n)Me(t,"complete"),Me(t,"success");else{t.m=6;try{var o=2<Bt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Vp(t)}}finally{Vo(t)}}}}function Vo(t,e){if(t.g){Bp(t);const n=t.g,s=t.C[0]?Wi:null;t.g=null,t.C=null,e||Me(t,"ready");try{n.onreadystatechange=s}catch{}}}function Bp(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(z.clearTimeout(t.A),t.A=null)}function Bt(t){return t.g?t.g.readyState:0}M.aa=function(){try{return 2<Bt(this)?this.g.status:-1}catch{return-1}};M.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),wT(e)}};function Sh(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Fp:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}M.Ea=function(){return this.m};M.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function jp(t){let e="";return au(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Eu(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=jp(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ge(t,e,n))}function Ws(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Hp(t){this.Ca=0,this.i=[],this.j=new Oo,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ws("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ws("baseRetryDelayMs",5e3,t),this.bb=Ws("retryDelaySeedMs",1e4,t),this.$a=Ws("forwardChannelMaxRetries",2,t),this.ta=Ws("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Op(t&&t.concurrentRequestLimit),this.Fa=new mT,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}M=Hp.prototype;M.ma=8;M.G=1;function Iu(t){if(qp(t),t.G==3){var e=t.U++,n=Kt(t.F);ge(n,"SID",t.I),ge(n,"RID",e),ge(n,"TYPE","terminate"),Xr(t,n),e=new Gr(t,t.j,e,void 0),e.K=2,e.v=Uo(Kt(n)),n=!1,z.navigator&&z.navigator.sendBeacon&&(n=z.navigator.sendBeacon(e.v.toString(),"")),!n&&z.Image&&(new Image().src=e.v,n=!0),n||(e.g=Xp(e.l,null),e.g.da(e.v)),e.F=Date.now(),Qr(e)}Yp(t)}function $o(t){t.g&&(bu(t),t.g.cancel(),t.g=null)}function qp(t){$o(t),t.u&&(z.clearTimeout(t.u),t.u=null),Zi(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&z.clearTimeout(t.m),t.m=null)}function Bo(t){Pp(t.h)||t.m||(t.m=!0,fp(t.Ja,t),t.C=0)}function TT(t,e){return xp(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Kr(He(t.Ja,t,e),Qp(t,t.C)),t.C++,!0)}M.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Gr(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=rp(i),ip(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=zp(this,r,e),n=Kt(this.F),ge(n,"RID",t),ge(n,"CVER",22),this.D&&ge(n,"X-HTTP-Session-Id",this.D),Xr(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(jp(i)))+"&"+e:this.o&&Eu(n,this.o,i)),vu(this.h,r),this.Ya&&ge(n,"TYPE","init"),this.O?(ge(n,"$req",e),ge(n,"SID","null"),r.Z=!0,cc(r,n,null)):cc(r,n,e),this.G=2}}else this.G==3&&(t?Ch(this,t):this.i.length==0||Pp(this.h)||Ch(this))};function Ch(t,e){var n;e?n=e.m:n=t.U++;const s=Kt(t.F);ge(s,"SID",t.I),ge(s,"RID",n),ge(s,"AID",t.T),Xr(t,s),t.o&&t.s&&Eu(s,t.o,t.s),n=new Gr(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=zp(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),vu(t.h,n),cc(n,s,e)}function Xr(t,e){t.ia&&au(t.ia,function(n,s){ge(e,s,n)}),t.l&&Ap({},function(n,s){ge(e,s,n)})}function zp(t,e,n){n=Math.min(t.i.length,n);var s=t.l?He(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{yT(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Kp(t){t.g||t.u||(t.Z=1,fp(t.Ia,t),t.A=0)}function Tu(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Kr(He(t.Ia,t),Qp(t,t.A)),t.A++,!0)}M.Ia=function(){if(this.u=null,Wp(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Kr(He(this.eb,this),t)}};M.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Qe(10),$o(this),Wp(this))};function bu(t){t.B!=null&&(z.clearTimeout(t.B),t.B=null)}function Wp(t){t.g=new Gr(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Kt(t.sa);ge(e,"RID","rpc"),ge(e,"SID",t.I),ge(e,"CI",t.L?"0":"1"),ge(e,"AID",t.T),ge(e,"TYPE","xmlhttp"),Xr(t,e),t.o&&t.s&&Eu(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Uo(Kt(e)),n.s=null,n.P=!0,Tp(n,t)}M.cb=function(){this.v!=null&&(this.v=null,$o(this),Tu(this),Qe(19))};function Zi(t){t.v!=null&&(z.clearTimeout(t.v),t.v=null)}function Gp(t,e){var n=null;if(t.g==e){Zi(t),bu(t),t.g=null;var s=2}else if(lc(t.h,e))n=e.D,Mp(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Po(),Me(s,new wp(s,n)),Bo(t)}else Kp(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&TT(t,e)||s==2&&Tu(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Pn(t,5);break;case 4:Pn(t,10);break;case 3:Pn(t,6);break;default:Pn(t,2)}}}function Qp(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Pn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=He(t.kb,t);n||(n=new Vn("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||Ji(n,"https"),Uo(n)),vT(n.toString(),s)}else Qe(2);t.G=0,t.l&&t.l.va(e),Yp(t),qp(t)}M.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Qe(2)):(this.j.info("Failed to ping google.com"),Qe(1))};function Yp(t){if(t.G=0,t.la=[],t.l){const e=Lp(t.h);(e.length!=0||t.i.length!=0)&&(gh(t.la,e),gh(t.la,t.i),t.h.i.length=0,iu(t.i),t.i.length=0),t.l.ua()}}function Jp(t,e,n){var s=n instanceof Vn?Kt(n):new Vn(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Xi(s,s.m);else{var r=z.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Vn(null,void 0);s&&Ji(i,s),e&&(i.g=e),r&&Xi(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&ge(s,n,e),ge(s,"VER",t.ma),Xr(t,s),s}function Xp(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new we(new Yr({jb:!0})):new we(t.ra),e.Ka(t.H),e}function Zp(){}M=Zp.prototype;M.xa=function(){};M.wa=function(){};M.va=function(){};M.ua=function(){};M.Ra=function(){};function eo(){if(Is&&!(10<=Number($I)))throw Error("Environmental error: no available transport.")}eo.prototype.g=function(t,e){return new it(t,e)};function it(t,e){Pe.call(this),this.g=new Hp(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Gi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Gi(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Fs(this)}Le(it,Pe);it.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Qe(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Jp(t,null,t.V),Bo(t)};it.prototype.close=function(){Iu(this.g)};it.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=fu(t),t=n);e.i.push(new pT(e.ab++,t)),e.G==3&&Bo(e)};it.prototype.M=function(){this.g.l=null,delete this.j,Iu(this.g),delete this.g,it.X.M.call(this)};function eg(t){mu.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Le(eg,mu);function tg(){yu.call(this),this.status=1}Le(tg,yu);function Fs(t){this.g=t}Le(Fs,Zp);Fs.prototype.xa=function(){Me(this.g,"a")};Fs.prototype.wa=function(t){Me(this.g,new eg(t))};Fs.prototype.va=function(t){Me(this.g,new tg)};Fs.prototype.ua=function(){Me(this.g,"b")};eo.prototype.createWebChannel=eo.prototype.g;it.prototype.send=it.prototype.u;it.prototype.open=it.prototype.m;it.prototype.close=it.prototype.close;xo.NO_ERROR=0;xo.TIMEOUT=8;xo.HTTP_ERROR=6;_p.COMPLETE="complete";Ep.EventType=Wr;Wr.OPEN="a";Wr.CLOSE="b";Wr.ERROR="c";Wr.MESSAGE="d";Pe.prototype.listen=Pe.prototype.N;we.prototype.listenOnce=we.prototype.O;we.prototype.getLastError=we.prototype.Oa;we.prototype.getLastErrorCode=we.prototype.Ea;we.prototype.getStatus=we.prototype.aa;we.prototype.getResponseJson=we.prototype.Sa;we.prototype.getResponseText=we.prototype.fa;we.prototype.send=we.prototype.da;we.prototype.setWithCredentials=we.prototype.Ka;var bT=function(){return new eo},ST=function(){return Po()},Sa=xo,CT=_p,AT=Qn,Ah={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},kT=Yr,mi=Ep,RT=we;const kh="@firebase/firestore";/**
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
 */class Fe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Fe.UNAUTHENTICATED=new Fe(null),Fe.GOOGLE_CREDENTIALS=new Fe("google-credentials-uid"),Fe.FIRST_PARTY=new Fe("first-party-uid"),Fe.MOCK_USER=new Fe("mock-user");/**
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
 */let Vs="9.19.0";/**
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
 */const Kn=new zc("@firebase/firestore");function Rh(){return Kn.logLevel}function L(t,...e){if(Kn.logLevel<=re.DEBUG){const n=e.map(Su);Kn.debug(`Firestore (${Vs}): ${t}`,...n)}}function Wt(t,...e){if(Kn.logLevel<=re.ERROR){const n=e.map(Su);Kn.error(`Firestore (${Vs}): ${t}`,...n)}}function to(t,...e){if(Kn.logLevel<=re.WARN){const n=e.map(Su);Kn.warn(`Firestore (${Vs}): ${t}`,...n)}}function Su(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function q(t="Unexpected state"){const e=`FIRESTORE (${Vs}) INTERNAL ASSERTION FAILED: `+t;throw Wt(e),new Error(e)}function pe(t,e){t||q()}function Q(t,e){return t}/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Jt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class jt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class ng{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class DT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Fe.UNAUTHENTICATED))}shutdown(){}}class NT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class OT{constructor(e){this.t=e,this.currentUser=Fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new jt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new jt,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new jt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(pe(typeof s.accessToken=="string"),new ng(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return pe(e===null||typeof e=="string"),new Fe(e)}}class PT{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=Fe.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class xT{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new PT(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Fe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class MT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class LT{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=i=>{i.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,L("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(pe(typeof n.token=="string"),this.T=n.token,new MT(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function UT(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class sg{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=UT(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function oe(t,e){return t<e?-1:t>e?1:0}function Ts(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class Ae{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ae.fromMillis(Date.now())}static fromDate(e){return Ae.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ae(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class W{constructor(e){this.timestamp=e}static fromTimestamp(e){return new W(e)}static min(){return new W(new Ae(0,0))}static max(){return new W(new Ae(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Dr{constructor(e,n,s){n===void 0?n=0:n>e.length&&q(),s===void 0?s=e.length-n:s>e.length-n&&q(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Dr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Dr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class me extends Dr{construct(e,n,s){return new me(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new B(I.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new me(n)}static emptyPath(){return new me([])}}const FT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Be extends Dr{construct(e,n,s){return new Be(e,n,s)}static isValidIdentifier(e){return FT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Be(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new B(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new B(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new B(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new B(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Be(n)}static emptyPath(){return new Be([])}}/**
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
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(me.fromString(e))}static fromName(e){return new j(me.fromString(e).popFirst(5))}static empty(){return new j(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new me(e.slice()))}}function VT(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=W.fromTimestamp(s===1e9?new Ae(n+1,0):new Ae(n,s));return new mn(r,j.empty(),e)}function $T(t){return new mn(t.readTime,t.key,-1)}class mn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new mn(W.min(),j.empty(),-1)}static max(){return new mn(W.max(),j.empty(),-1)}}function BT(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=j.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
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
 */const jT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class HT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Zr(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==jT)throw t;L("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,s)=>{n(e)})}static reject(e){return new b((n,s)=>{s(e)})}static waitFor(e){return new b((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=b.resolve(!1);for(const s of e)n=n.next(r=>r?b.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new b((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(e,n){return new b((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function ei(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Cu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Cu.ct=-1;function jo(t){return t==null}function no(t){return t===0&&1/t==-1/0}function qT(t){return typeof t=="number"&&Number.isInteger(t)&&!no(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Dh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function $s(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function rg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Re{constructor(e,n){this.comparator=e,this.root=n||xe.EMPTY}insert(e,n){return new Re(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,xe.BLACK,null,null))}remove(e){return new Re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yi(this.root,e,this.comparator,!1)}getReverseIterator(){return new yi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yi(this.root,e,this.comparator,!0)}}class yi{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xe{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??xe.RED,this.left=r??xe.EMPTY,this.right=i??xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new xe(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return xe.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const e=this.left.check();if(e!==this.right.check())throw q();return e+(this.isRed()?0:1)}}xe.EMPTY=null,xe.RED=!0,xe.BLACK=!1;xe.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(t,e,n,s,r){return this}insert(t,e,n){return new xe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ke{constructor(e){this.comparator=e,this.data=new Re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Nh(this.data.getIterator())}getIteratorFrom(e){return new Nh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ke(this.comparator);return n.data=e,n}}class Nh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class vt{constructor(e){this.fields=e,e.sort(Be.comparator)}static empty(){return new vt([])}unionWith(e){let n=new ke(Be.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new vt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ts(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class zT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new zT("Invalid base64 string: "+r):r}}(e);return new Ke(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Ke(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const KT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yn(t){if(pe(!!t),typeof t=="string"){let e=0;const n=KT.exec(t);if(pe(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:be(t.seconds),nanos:be(t.nanos)}}function be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function bs(t){return typeof t=="string"?Ke.fromBase64String(t):Ke.fromUint8Array(t)}/**
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
 */function ig(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function og(t){const e=t.mapValue.fields.__previous_value__;return ig(e)?og(e):e}function Nr(t){const e=yn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ae(e.seconds,e.nanos)}/**
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
 */class WT{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Or{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Or("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Or&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const vi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Wn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ig(t)?4:GT(t)?9007199254740991:10:q()}function Mt(t,e){if(t===e)return!0;const n=Wn(t);if(n!==Wn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Nr(t).isEqual(Nr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=yn(s.timestampValue),o=yn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return bs(s.bytesValue).isEqual(bs(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return be(s.geoPointValue.latitude)===be(r.geoPointValue.latitude)&&be(s.geoPointValue.longitude)===be(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return be(s.integerValue)===be(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=be(s.doubleValue),o=be(r.doubleValue);return i===o?no(i)===no(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Ts(t.arrayValue.values||[],e.arrayValue.values||[],Mt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Dh(i)!==Dh(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Mt(i[a],o[a])))return!1;return!0}(t,e);default:return q()}}function Pr(t,e){return(t.values||[]).find(n=>Mt(n,e))!==void 0}function Ss(t,e){if(t===e)return 0;const n=Wn(t),s=Wn(e);if(n!==s)return oe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=be(r.integerValue||r.doubleValue),a=be(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Oh(t.timestampValue,e.timestampValue);case 4:return Oh(Nr(t),Nr(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(r,i){const o=bs(r),a=bs(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=oe(o[c],a[c]);if(u!==0)return u}return oe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=oe(be(r.latitude),be(i.latitude));return o!==0?o:oe(be(r.longitude),be(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Ss(o[c],a[c]);if(u)return u}return oe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===vi.mapValue&&i===vi.mapValue)return 0;if(r===vi.mapValue)return 1;if(i===vi.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=oe(a[l],u[l]);if(h!==0)return h;const d=Ss(o[a[l]],c[u[l]]);if(d!==0)return d}return oe(a.length,u.length)}(t.mapValue,e.mapValue);default:throw q()}}function Oh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=yn(t),s=yn(e),r=oe(n.seconds,s.seconds);return r!==0?r:oe(n.nanos,s.nanos)}function Cs(t){return hc(t)}function hc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=yn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?bs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,j.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=hc(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${hc(s.fields[a])}`;return i+"}"}(t.mapValue):q();var e,n}function fc(t){return!!t&&"integerValue"in t}function Au(t){return!!t&&"arrayValue"in t}function Ph(t){return!!t&&"nullValue"in t}function xh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ni(t){return!!t&&"mapValue"in t}function lr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return $s(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=lr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=lr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function GT(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ut{constructor(e){this.value=e}static empty(){return new ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Ni(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=lr(n)}setAll(e){let n=Be.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=lr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Ni(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Mt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Ni(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){$s(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new ut(lr(this.value))}}function ag(t){const e=[];return $s(t.fields,(n,s)=>{const r=new Be([n]);if(Ni(s)){const i=ag(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new vt(e)}/**
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
 */class Ve{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ve(e,0,W.min(),W.min(),W.min(),ut.empty(),0)}static newFoundDocument(e,n,s,r){return new Ve(e,1,n,W.min(),s,r,0)}static newNoDocument(e,n){return new Ve(e,2,n,W.min(),W.min(),ut.empty(),0)}static newUnknownDocument(e,n){return new Ve(e,3,n,W.min(),W.min(),ut.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ve&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ve(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class so{constructor(e,n){this.position=e,this.inclusive=n}}function Mh(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=j.comparator(j.fromName(o.referenceValue),n.key):s=Ss(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Lh(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Mt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class hr{constructor(e,n="asc"){this.field=e,this.dir=n}}function QT(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class cg{}class Ce extends cg{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new JT(e,n,s):n==="array-contains"?new eb(e,s):n==="in"?new tb(e,s):n==="not-in"?new nb(e,s):n==="array-contains-any"?new sb(e,s):new Ce(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new XT(e,s):new ZT(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ss(n,this.value)):n!==null&&Wn(this.value)===Wn(n)&&this.matchesComparison(Ss(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Lt extends cg{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Lt(e,n)}matches(e){return ug(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function ug(t){return t.op==="and"}function lg(t){return YT(t)&&ug(t)}function YT(t){for(const e of t.filters)if(e instanceof Lt)return!1;return!0}function dc(t){if(t instanceof Ce)return t.field.canonicalString()+t.op.toString()+Cs(t.value);if(lg(t))return t.filters.map(e=>dc(e)).join(",");{const e=t.filters.map(n=>dc(n)).join(",");return`${t.op}(${e})`}}function hg(t,e){return t instanceof Ce?function(n,s){return s instanceof Ce&&n.op===s.op&&n.field.isEqual(s.field)&&Mt(n.value,s.value)}(t,e):t instanceof Lt?function(n,s){return s instanceof Lt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&hg(i,s.filters[o]),!0):!1}(t,e):void q()}function fg(t){return t instanceof Ce?function(e){return`${e.field.canonicalString()} ${e.op} ${Cs(e.value)}`}(t):t instanceof Lt?function(e){return e.op.toString()+" {"+e.getFilters().map(fg).join(" ,")+"}"}(t):"Filter"}class JT extends Ce{constructor(e,n,s){super(e,n,s),this.key=j.fromName(s.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.matchesComparison(n)}}class XT extends Ce{constructor(e,n){super(e,"in",n),this.keys=dg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ZT extends Ce{constructor(e,n){super(e,"not-in",n),this.keys=dg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function dg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>j.fromName(s.referenceValue))}class eb extends Ce{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Au(n)&&Pr(n.arrayValue,this.value)}}class tb extends Ce{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Pr(this.value.arrayValue,n)}}class nb extends Ce{constructor(e,n){super(e,"not-in",n)}matches(e){if(Pr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Pr(this.value.arrayValue,n)}}class sb extends Ce{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Au(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Pr(this.value.arrayValue,s))}}/**
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
 */class rb{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function Uh(t,e=null,n=[],s=[],r=null,i=null,o=null){return new rb(t,e,n,s,r,i,o)}function ku(t){const e=Q(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>dc(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),jo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Cs(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Cs(s)).join(",")),e.ft=n}return e.ft}function Ru(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!QT(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!hg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Lh(t.startAt,e.startAt)&&Lh(t.endAt,e.endAt)}function pc(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ho{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this.wt=null,this.startAt,this.endAt}}function ib(t,e,n,s,r,i,o,a){return new Ho(t,e,n,s,r,i,o,a)}function Du(t){return new Ho(t)}function Fh(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ob(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ab(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function cb(t){return t.collectionGroup!==null}function ps(t){const e=Q(t);if(e.dt===null){e.dt=[];const n=ab(e),s=ob(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new hr(n)),e.dt.push(new hr(Be.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new hr(Be.keyField(),i))}}}return e.dt}function Gt(t){const e=Q(t);if(!e.wt)if(e.limitType==="F")e.wt=Uh(e.path,e.collectionGroup,ps(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of ps(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new hr(i.field,o))}const s=e.endAt?new so(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new so(e.startAt.position,e.startAt.inclusive):null;e.wt=Uh(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.wt}function gc(t,e,n){return new Ho(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function qo(t,e){return Ru(Gt(t),Gt(e))&&t.limitType===e.limitType}function pg(t){return`${ku(Gt(t))}|lt:${t.limitType}`}function mc(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>fg(s)).join(", ")}]`),jo(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Cs(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Cs(s)).join(",")),`Target(${n})`}(Gt(t))}; limitType=${t.limitType})`}function zo(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):j.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of ps(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Mh(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,ps(n),s)||n.endAt&&!function(r,i,o){const a=Mh(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,ps(n),s))}(t,e)}function ub(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function gg(t){return(e,n)=>{let s=!1;for(const r of ps(t)){const i=lb(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function lb(t,e,n){const s=t.field.isKeyField()?j.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Ss(a,c):q()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return q()}}/**
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
 */class Bs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){$s(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return rg(this.inner)}size(){return this.innerSize}}/**
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
 */const hb=new Re(j.comparator);function Qt(){return hb}const mg=new Re(j.comparator);function tr(...t){let e=mg;for(const n of t)e=e.insert(n.key,n);return e}function yg(t){let e=mg;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function xn(){return fr()}function vg(){return fr()}function fr(){return new Bs(t=>t.toString(),(t,e)=>t.isEqual(e))}const fb=new Re(j.comparator),db=new ke(j.comparator);function ee(...t){let e=db;for(const n of t)e=e.add(n);return e}const pb=new ke(oe);function wg(){return pb}/**
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
 */function _g(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:no(e)?"-0":e}}function Eg(t){return{integerValue:""+t}}function gb(t,e){return qT(e)?Eg(e):_g(t,e)}/**
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
 */class Ko{constructor(){this._=void 0}}function mb(t,e,n){return t instanceof ro?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof xr?Tg(t,e):t instanceof Mr?bg(t,e):function(s,r){const i=Ig(s,r),o=Vh(i)+Vh(s._t);return fc(i)&&fc(s._t)?Eg(o):_g(s.serializer,o)}(t,e)}function yb(t,e,n){return t instanceof xr?Tg(t,e):t instanceof Mr?bg(t,e):n}function Ig(t,e){return t instanceof io?fc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class ro extends Ko{}class xr extends Ko{constructor(e){super(),this.elements=e}}function Tg(t,e){const n=Sg(e);for(const s of t.elements)n.some(r=>Mt(r,s))||n.push(s);return{arrayValue:{values:n}}}class Mr extends Ko{constructor(e){super(),this.elements=e}}function bg(t,e){let n=Sg(e);for(const s of t.elements)n=n.filter(r=>!Mt(r,s));return{arrayValue:{values:n}}}class io extends Ko{constructor(e,n){super(),this.serializer=e,this._t=n}}function Vh(t){return be(t.integerValue||t.doubleValue)}function Sg(t){return Au(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function vb(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof xr&&s instanceof xr||n instanceof Mr&&s instanceof Mr?Ts(n.elements,s.elements,Mt):n instanceof io&&s instanceof io?Mt(n._t,s._t):n instanceof ro&&s instanceof ro}(t.transform,e.transform)}class wb{constructor(e,n){this.version=e,this.transformResults=n}}class Ht{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ht}static exists(e){return new Ht(void 0,e)}static updateTime(e){return new Ht(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Oi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Wo{}function Cg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new kg(t.key,Ht.none()):new ti(t.key,t.data,Ht.none());{const n=t.data,s=ut.empty();let r=new ke(Be.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Yn(t.key,s,new vt(r.toArray()),Ht.none())}}function _b(t,e,n){t instanceof ti?function(s,r,i){const o=s.value.clone(),a=Bh(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Yn?function(s,r,i){if(!Oi(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Bh(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Ag(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function dr(t,e,n,s){return t instanceof ti?function(r,i,o,a){if(!Oi(r.precondition,i))return o;const c=r.value.clone(),u=jh(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Yn?function(r,i,o,a){if(!Oi(r.precondition,i))return o;const c=jh(r.fieldTransforms,a,i),u=i.data;return u.setAll(Ag(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(t,e,n,s):function(r,i,o){return Oi(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function Eb(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Ig(s.transform,r||null);i!=null&&(n===null&&(n=ut.empty()),n.set(s.field,i))}return n||null}function $h(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ts(n,s,(r,i)=>vb(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ti extends Wo{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Yn extends Wo{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ag(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Bh(t,e,n){const s=new Map;pe(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,yb(o,a,n[r]))}return s}function jh(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,mb(i,o,e))}return s}class kg extends Wo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ib extends Wo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Tb{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&_b(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=dr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=dr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=vg();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Cg(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(W.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ee())}isEqual(e){return this.batchId===e.batchId&&Ts(this.mutations,e.mutations,(n,s)=>$h(n,s))&&Ts(this.baseMutations,e.baseMutations,(n,s)=>$h(n,s))}}class Nu{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){pe(e.mutations.length===s.length);let r=fb;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Nu(e,n,s,r)}}/**
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
 */class bb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Sb{constructor(e){this.count=e}}/**
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
 */var Te,te;function Cb(t){switch(t){default:return q();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function Rg(t){if(t===void 0)return Wt("GRPC error has no .code"),I.UNKNOWN;switch(t){case Te.OK:return I.OK;case Te.CANCELLED:return I.CANCELLED;case Te.UNKNOWN:return I.UNKNOWN;case Te.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Te.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Te.INTERNAL:return I.INTERNAL;case Te.UNAVAILABLE:return I.UNAVAILABLE;case Te.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Te.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Te.NOT_FOUND:return I.NOT_FOUND;case Te.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Te.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Te.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Te.ABORTED:return I.ABORTED;case Te.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Te.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Te.DATA_LOSS:return I.DATA_LOSS;default:return q()}}(te=Te||(Te={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Ou{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return wi}static getOrCreateInstance(){return wi===null&&(wi=new Ou),wi}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let wi=null;/**
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
 */class Go{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,ni.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Go(W.min(),r,wg(),Qt(),ee())}}class ni{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new ni(s,n,ee(),ee(),ee())}}/**
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
 */class Pi{constructor(e,n,s,r){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=r}}class Dg{constructor(e,n){this.targetId=e,this.Et=n}}class Ng{constructor(e,n,s=Ke.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Hh{constructor(){this.At=0,this.Rt=zh(),this.vt=Ke.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=ee(),n=ee(),s=ee();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:q()}}),new ni(this.vt,this.bt,e,n,s)}xt(){this.Pt=!1,this.Rt=zh()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class Ab{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Qt(),this.qt=qh(),this.Ut=new ke(oe)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const s=this.jt(n);switch(e.state){case 0:this.Wt(n)&&s.Dt(e.resumeToken);break;case 1:s.$t(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.$t(),s.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(s.Mt(),s.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.Wt(r)&&n(r)})}Jt(e){var n;const s=e.targetId,r=e.Et.count,i=this.Yt(s);if(i){const o=i.target;if(pc(o))if(r===0){const a=new j(o.path);this.Qt(s,a,Ve.newNoDocument(a,W.min()))}else pe(r===1);else{const a=this.Zt(s);a!==r&&(this.Ht(s),this.Ut=this.Ut.add(s),(n=Ou.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&pc(a.target)){const c=new j(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,Ve.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=ee();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new Go(e,n,this.Ut,this.Lt,s);return this.Lt=Qt(),this.qt=qh(),this.Ut=new ke(oe),r}Gt(e,n){if(!this.Wt(e))return;const s=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.Wt(e))return;const r=this.jt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new Hh,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new ke(oe),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||L("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Hh),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function qh(){return new Re(j.comparator)}function zh(){return new Re(j.comparator)}/**
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
 */const kb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Rb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Db=(()=>({and:"AND",or:"OR"}))();class Nb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function oo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Og(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ob(t,e){return oo(t,e.toTimestamp())}function Pt(t){return pe(!!t),W.fromTimestamp(function(e){const n=yn(e);return new Ae(n.seconds,n.nanos)}(t))}function Pu(t,e){return function(n){return new me(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Pg(t){const e=me.fromString(t);return pe(Ug(e)),e}function yc(t,e){return Pu(t.databaseId,e.path)}function Ca(t,e){const n=Pg(e);if(n.get(1)!==t.databaseId.projectId)throw new B(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(xg(n))}function vc(t,e){return Pu(t.databaseId,e)}function Pb(t){const e=Pg(t);return e.length===4?me.emptyPath():xg(e)}function wc(t){return new me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function xg(t){return pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Kh(t,e,n){return{name:yc(t,e),fields:n.value.mapValue.fields}}function xb(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:q()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(pe(u===void 0||typeof u=="string"),Ke.fromBase64String(u||"")):(pe(u===void 0||u instanceof Uint8Array),Ke.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?I.UNKNOWN:Rg(c.code);return new B(u,c.message||"")}(o);n=new Ng(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Ca(t,s.document.name),i=Pt(s.document.updateTime),o=s.document.createTime?Pt(s.document.createTime):W.min(),a=new ut({mapValue:{fields:s.document.fields}}),c=Ve.newFoundDocument(r,i,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new Pi(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Ca(t,s.document),i=s.readTime?Pt(s.readTime):W.min(),o=Ve.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Pi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Ca(t,s.document),i=s.removedTargetIds||[];n=new Pi([],i,r,null)}else{if(!("filter"in e))return q();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new Sb(r),o=s.targetId;n=new Dg(o,i)}}return n}function Mb(t,e){let n;if(e instanceof ti)n={update:Kh(t,e.key,e.value)};else if(e instanceof kg)n={delete:yc(t,e.key)};else if(e instanceof Yn)n={update:Kh(t,e.key,e.data),updateMask:qb(e.fieldMask)};else{if(!(e instanceof Ib))return q();n={verify:yc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof ro)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof xr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Mr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof io)return{fieldPath:i.field.canonicalString(),increment:o._t};throw q()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Ob(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:q()}(t,e.precondition)),n}function Lb(t,e){return t&&t.length>0?(pe(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Pt(s.updateTime):Pt(r);return i.isEqual(W.min())&&(i=Pt(r)),new wb(i,s.transformResults||[])}(n,e))):[]}function Ub(t,e){return{documents:[vc(t,e.path)]}}function Fb(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=vc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=vc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Lg(Lt.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:is(l.field),direction:Bb(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.useProto3Json||jo(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Vb(t){let e=Pb(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){pe(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=function(l){const h=Mg(l);return h instanceof Lt&&lg(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new hr(os(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,jo(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new so(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new so(d,h)}(n.endAt)),ib(e,r,o,i,a,"F",c,u)}function $b(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return q()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Mg(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=os(e.unaryFilter.field);return Ce.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=os(e.unaryFilter.field);return Ce.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=os(e.unaryFilter.field);return Ce.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=os(e.unaryFilter.field);return Ce.create(i,"!=",{nullValue:"NULL_VALUE"});default:return q()}}(t):t.fieldFilter!==void 0?function(e){return Ce.create(os(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Lt.create(e.compositeFilter.filters.map(n=>Mg(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return q()}}(e.compositeFilter.op))}(t):q()}function Bb(t){return kb[t]}function jb(t){return Rb[t]}function Hb(t){return Db[t]}function is(t){return{fieldPath:t.canonicalString()}}function os(t){return Be.fromServerFormat(t.fieldPath)}function Lg(t){return t instanceof Ce?function(e){if(e.op==="=="){if(xh(e.value))return{unaryFilter:{field:is(e.field),op:"IS_NAN"}};if(Ph(e.value))return{unaryFilter:{field:is(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(xh(e.value))return{unaryFilter:{field:is(e.field),op:"IS_NOT_NAN"}};if(Ph(e.value))return{unaryFilter:{field:is(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:is(e.field),op:jb(e.op),value:e.value}}}(t):t instanceof Lt?function(e){const n=e.getFilters().map(s=>Lg(s));return n.length===1?n[0]:{compositeFilter:{op:Hb(e.op),filters:n}}}(t):q()}function qb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ug(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class $n{constructor(e,n,s,r,i=W.min(),o=W.min(),a=Ke.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new $n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class zb{constructor(e){this.se=e}}function Kb(t){const e=Vb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?gc(e,e.limit,"L"):e}/**
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
 */class Wb{constructor(){this.He=new Gb}addToCollectionParentIndex(e,n){return this.He.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(mn.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(mn.min())}updateCollectionGroup(e,n,s){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class Gb{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new ke(me.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ke(me.comparator)).toArray()}}/**
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
 */class As{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new As(0)}static bn(){return new As(-1)}}/**
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
 */class Qb{constructor(){this.changes=new Bs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ve.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?b.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Yb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Jb{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&dr(s.mutation,r,vt.empty(),Ae.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ee()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ee()){const r=xn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=tr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=xn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ee()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Qt();const o=fr(),a=fr();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof Yn)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),dr(l.mutation,u,l.mutation.getFieldMask(),Ae.now())):o.set(u.key,vt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new Yb(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=fr();let r=new Re((o,a)=>o-a),i=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||vt.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(r.get(a.batchId)||ee()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=vg();l.forEach(d=>{if(!i.has(d)){const g=Cg(n.get(d),s.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return b.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return j.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):cb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):b.resolve(xn());let a=-1,c=i;return o.next(u=>b.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?b.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,ee())).next(l=>({batchId:a,changes:yg(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new j(n)).next(s=>{let r=tr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=tr();return this.indexManager.getCollectionParents(e,r).next(o=>b.forEach(o,a=>{const c=function(u,l){return new Ho(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,Ve.newInvalidDocument(u)))});let o=tr();return i.forEach((a,c)=>{const u=r.get(a);u!==void 0&&dr(u.mutation,c,vt.empty(),Ae.now()),zo(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class Xb{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return b.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Pt(s.createTime)}),b.resolve()}getNamedQuery(e,n){return b.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(s){return{name:s.name,query:Kb(s.bundledQuery),readTime:Pt(s.readTime)}}(n)),b.resolve()}}/**
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
 */class Zb{constructor(){this.overlays=new Re(j.comparator),this.ts=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const s=xn();return b.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.re(e,n,i)}),b.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ts.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ts.delete(s)),b.resolve()}getOverlaysForCollection(e,n,s){const r=xn(),i=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return b.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Re((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=xn(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=xn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return b.resolve(a)}re(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ts.get(r.largestBatchId).delete(s.key);this.ts.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new bb(n,s));let i=this.ts.get(n);i===void 0&&(i=ee(),this.ts.set(n,i)),this.ts.set(n,i.add(s.key))}}/**
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
 */class xu{constructor(){this.es=new ke(De.ns),this.ss=new ke(De.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const s=new De(e,n);this.es=this.es.add(s),this.ss=this.ss.add(s)}os(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.us(new De(e,n))}cs(e,n){e.forEach(s=>this.removeReference(s,n))}hs(e){const n=new j(new me([])),s=new De(n,e),r=new De(n,e+1),i=[];return this.ss.forEachInRange([s,r],o=>{this.us(o),i.push(o.key)}),i}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new j(new me([])),s=new De(n,e),r=new De(n,e+1);let i=ee();return this.ss.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new De(e,0),s=this.es.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class De{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return j.comparator(e.key,n.key)||oe(e.ds,n.ds)}static rs(e,n){return oe(e.ds,n.ds)||j.comparator(e.key,n.key)}}/**
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
 */class eS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new ke(De.ns)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Tb(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this._s=this._s.add(new De(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ys(s),i=r<0?0:r;return b.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new De(n,0),r=new De(n,Number.POSITIVE_INFINITY),i=[];return this._s.forEachInRange([s,r],o=>{const a=this.gs(o.ds);i.push(a)}),b.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ke(oe);return n.forEach(r=>{const i=new De(r,0),o=new De(r,Number.POSITIVE_INFINITY);this._s.forEachInRange([i,o],a=>{s=s.add(a.ds)})}),b.resolve(this.ps(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;j.isDocumentKey(i)||(i=i.child(""));const o=new De(new j(i),0);let a=new ke(oe);return this._s.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.ds)),!0)},o),b.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(s=>{const r=this.gs(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){pe(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this._s;return b.forEach(n.mutations,r=>{const i=new De(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this._s=s})}En(e){}containsKey(e,n){const s=new De(n,0),r=this._s.firstAfterOrEqual(s);return b.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class tS{constructor(e){this.Ts=e,this.docs=new Re(j.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ts(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return b.resolve(s?s.document.mutableCopy():Ve.newInvalidDocument(n))}getEntries(e,n){let s=Qt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Ve.newInvalidDocument(r))}),b.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Qt();const o=n.path,a=new j(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||BT($T(l),s)<=0||(r.has(l.key)||zo(n,l))&&(i=i.insert(l.key,l.mutableCopy()))}return b.resolve(i)}getAllFromCollectionGroup(e,n,s,r){q()}Es(e,n){return b.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new nS(this)}getSize(e){return b.resolve(this.size)}}class nS extends Qb{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Jn.addEntry(e,r)):this.Jn.removeEntry(s)}),b.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
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
 */class sS{constructor(e){this.persistence=e,this.As=new Bs(n=>ku(n),Ru),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.Rs=0,this.vs=new xu,this.targetCount=0,this.bs=As.vn()}forEachTarget(e,n){return this.As.forEach((s,r)=>n(r)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Rs&&(this.Rs=n),b.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new As(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Sn(n),b.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.As.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),b.waitFor(i).next(()=>r)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const s=this.As.get(n)||null;return b.resolve(s)}addMatchingKeys(e,n,s){return this.vs.os(n,s),b.resolve()}removeMatchingKeys(e,n,s){this.vs.cs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),b.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),b.resolve()}getMatchingKeysForTargetId(e,n){const s=this.vs.fs(n);return b.resolve(s)}containsKey(e,n){return b.resolve(this.vs.containsKey(n))}}/**
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
 */class rS{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new Cu(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new sS(this),this.indexManager=new Wb,this.remoteDocumentCache=function(s){return new tS(s)}(s=>this.referenceDelegate.Cs(s)),this.serializer=new zb(n),this.xs=new Xb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Zb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ps[e.toKey()];return s||(s=new eS(n,this.referenceDelegate),this.Ps[e.toKey()]=s),s}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,s){L("MemoryPersistence","Starting transaction:",e);const r=new iS(this.Vs.next());return this.referenceDelegate.Ns(),s(r).next(i=>this.referenceDelegate.ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Os(e,n){return b.or(Object.values(this.Ps).map(s=>()=>s.containsKey(e,n)))}}class iS extends HT{constructor(e){super(),this.currentSequenceNumber=e}}class Mu{constructor(e){this.persistence=e,this.$s=new xu,this.Ms=null}static Fs(e){return new Mu(e)}get Bs(){if(this.Ms)return this.Ms;throw q()}addReference(e,n,s){return this.$s.addReference(s,n),this.Bs.delete(s.toString()),b.resolve()}removeReference(e,n,s){return this.$s.removeReference(s,n),this.Bs.add(s.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),b.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(r=>this.Bs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Bs.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Bs,s=>{const r=j.fromPath(s);return this.Ls(e,r).next(i=>{i||n.removeEntry(r,W.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(s=>{s?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return b.or([()=>b.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
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
 */class Lu{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Vi=s,this.Si=r}static Di(e,n){let s=ee(),r=ee();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Lu(e,n.fromCache,s,r)}}/**
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
 */class oS{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ni(e,n).next(i=>i||this.ki(e,n,r,s)).next(i=>i||this.Oi(e,n))}Ni(e,n){if(Fh(n))return b.resolve(null);let s=Gt(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=gc(n,null,"F"),s=Gt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ee(...i);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.$i(n,a);return this.Mi(n,u,o,c.readTime)?this.Ni(e,gc(n,null,"F")):this.Fi(e,u,n,c)}))})))}ki(e,n,s,r){return Fh(n)||r.isEqual(W.min())?this.Oi(e,n):this.xi.getDocuments(e,s).next(i=>{const o=this.$i(n,i);return this.Mi(n,o,s,r)?this.Oi(e,n):(Rh()<=re.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),mc(n)),this.Fi(e,o,n,VT(r,-1)))})}$i(e,n){let s=new ke(gg(e));return n.forEach((r,i)=>{zo(e,i)&&(s=s.add(i))}),s}Mi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(e,n){return Rh()<=re.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",mc(n)),this.xi.getDocumentsMatchingQuery(e,n,mn.min())}Fi(e,n,s,r){return this.xi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class aS{constructor(e,n,s,r){this.persistence=e,this.Bi=n,this.serializer=r,this.Li=new Re(oe),this.qi=new Bs(i=>ku(i),Ru),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(s)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Jb(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function cS(t,e,n,s){return new aS(t,e,n,s)}async function Fg(t,e){const n=Q(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Gi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ee();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({Qi:u,removedBatchIds:o,addedBatchIds:a}))})})}function uS(t,e){const n=Q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=b.resolve();return h.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(v=>{const E=c.docVersions.get(g);pe(E!==null),v.version.compareTo(E)<0&&(l.applyToRemoteDocument(v,c),v.isValidDocument()&&(v.setReadTime(c.commitVersion),u.addEntry(v)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ee();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Vg(t){const e=Q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function lS(t,e){const n=Q(t),s=e.snapshotVersion;let r=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});r=n.Li;const a=[];e.targetChanges.forEach((l,h)=>{const d=r.get(h);if(!d)return;a.push(n.Ds.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(i,l.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(Ke.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,s)),r=r.insert(h,g),function(v,E,D){return v.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(d,g,l)&&a.push(n.Ds.updateTargetData(i,g))});let c=Qt(),u=ee();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(hS(i,o,e.documentUpdates).next(l=>{c=l.zi,u=l.ji})),!s.isEqual(W.min())){const l=n.Ds.getLastRemoteSnapshotVersion(i).next(h=>n.Ds.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return b.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Li=r,i))}function hS(t,e,n){let s=ee(),r=ee();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Qt();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(W.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):L("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{zi:o,ji:r}})}function fS(t,e){const n=Q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function dS(t,e){const n=Q(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ds.getTargetData(s,e).next(i=>i?(r=i,b.resolve(r)):n.Ds.allocateTargetId(s).next(o=>(r=new $n(e,o,0,s.currentSequenceNumber),n.Ds.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Li.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Li=n.Li.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function _c(t,e,n){const s=Q(t),r=s.Li.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!ei(o))throw o;L("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Li=s.Li.remove(e),s.qi.delete(r.target)}function Wh(t,e,n){const s=Q(t);let r=W.min(),i=ee();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=Q(a),h=l.qi.get(u);return h!==void 0?b.resolve(l.Li.get(h)):l.Ds.getTargetData(c,u)}(s,o,Gt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Bi.getDocumentsMatchingQuery(o,e,n?r:W.min(),n?i:ee())).next(a=>(pS(s,ub(e),a),{documents:a,Wi:i})))}function pS(t,e,n){let s=t.Ui.get(e)||W.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ui.set(e,s)}class Gh{constructor(){this.activeTargetIds=wg()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class gS{constructor(){this.Br=new Gh,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,s){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new Gh,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class mS{qr(e){}shutdown(){}}/**
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
 */class Qh{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let _i=null;function Aa(){return _i===null?_i=268435456+Math.round(2147483648*Math.random()):_i++,"0x"+_i.toString(16)}/**
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
 */const yS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class vS{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
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
 */const Ue="WebChannelConnection";class wS extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,s,r,i){const o=Aa(),a=this.ao(e,n);L("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.ho(c,r,i),this.lo(e,a,c,s).then(u=>(L("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw to("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",s),u})}fo(e,n,s,r,i,o){return this.co(e,n,s,r,i)}ho(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Vs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ao(e,n){const s=yS[e];return`${this.ro}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,s,r){const i=Aa();return new Promise((o,a)=>{const c=new RT;c.setWithCredentials(!0),c.listenOnce(CT.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Sa.NO_ERROR:const l=c.getResponseJson();L(Ue,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(l)),o(l);break;case Sa.TIMEOUT:L(Ue,`RPC '${e}' ${i} timed out`),a(new B(I.DEADLINE_EXCEEDED,"Request time out"));break;case Sa.HTTP_ERROR:const h=c.getStatus();if(L(Ue,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const v=function(E){const D=E.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(D)>=0?D:I.UNKNOWN}(g.status);a(new B(v,g.message))}else a(new B(I.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new B(I.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{L(Ue,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(r);L(Ue,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",u,s,15)})}wo(e,n,s){const r=Aa(),i=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=bT(),a=ST(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new kT({})),this.ho(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const u=i.join("");L(Ue,`Creating RPC '${e}' stream ${r}: ${u}`,c);const l=o.createWebChannel(u,c);let h=!1,d=!1;const g=new vS({Wr:E=>{d?L(Ue,`Not sending because RPC '${e}' stream ${r} is closed:`,E):(h||(L(Ue,`Opening RPC '${e}' stream ${r} transport.`),l.open(),h=!0),L(Ue,`RPC '${e}' stream ${r} sending:`,E),l.send(E))},Hr:()=>l.close()}),v=(E,D,k)=>{E.listen(D,U=>{try{k(U)}catch(P){setTimeout(()=>{throw P},0)}})};return v(l,mi.EventType.OPEN,()=>{d||L(Ue,`RPC '${e}' stream ${r} transport opened.`)}),v(l,mi.EventType.CLOSE,()=>{d||(d=!0,L(Ue,`RPC '${e}' stream ${r} transport closed`),g.so())}),v(l,mi.EventType.ERROR,E=>{d||(d=!0,to(Ue,`RPC '${e}' stream ${r} transport errored:`,E),g.so(new B(I.UNAVAILABLE,"The operation could not be completed")))}),v(l,mi.EventType.MESSAGE,E=>{var D;if(!d){const k=E.data[0];pe(!!k);const U=k,P=U.error||((D=U[0])===null||D===void 0?void 0:D.error);if(P){L(Ue,`RPC '${e}' stream ${r} received error:`,P);const J=P.status;let fe=function(We){const Je=Te[We];if(Je!==void 0)return Rg(Je)}(J),_e=P.message;fe===void 0&&(fe=I.INTERNAL,_e="Unknown error status: "+J+" with message "+P.message),d=!0,g.so(new B(fe,_e)),l.close()}else L(Ue,`RPC '${e}' stream ${r} received:`,k),g.io(k)}}),v(a,AT.STAT_EVENT,E=>{E.stat===Ah.PROXY?L(Ue,`RPC '${e}' stream ${r} detected buffering proxy`):E.stat===Ah.NOPROXY&&L(Ue,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{g.no()},0),g}}function ka(){return typeof document<"u"?document:null}/**
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
 */function Qo(t){return new Nb(t,!0)}/**
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
 */class $g{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Ws=e,this.timerId=n,this._o=s,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),r=Math.max(0,n-s);r>0&&L("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class Bg{constructor(e,n,s,r,i,o,a,c){this.Ws=e,this.bo=s,this.Po=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new $g(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(Wt(n.toString()),Wt("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Vo===n&&this.Ko(s,r)},s=>{e(()=>{const r=new B(I.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Go(r)})})}Ko(e,n){const s=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{s(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(r=>{s(()=>this.Go(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return L("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _S extends Bg{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=xb(this.serializer,e),s=function(r){if(!("targetChange"in r))return W.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?W.min():i.readTime?Pt(i.readTime):W.min()}(e);return this.listener.zo(n,s)}jo(e){const n={};n.database=wc(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;return o=pc(a)?{documents:Ub(r,a)}:{query:Fb(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Og(r,i.resumeToken):i.snapshotVersion.compareTo(W.min())>0&&(o.readTime=oo(r,i.snapshotVersion.toTimestamp())),o}(this.serializer,e);const s=$b(this.serializer,e);s&&(n.labels=s),this.Fo(n)}Wo(e){const n={};n.database=wc(this.serializer),n.removeTarget=e,this.Fo(n)}}class ES extends Bg{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(pe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=Lb(e.writeResults,e.commitTime),s=Pt(e.commitTime);return this.listener.Zo(s,n)}return pe(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=wc(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Mb(this.serializer,s))};this.Fo(n)}}/**
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
 */class IS extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.eu=!1}nu(){if(this.eu)throw new B(I.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.co(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new B(I.UNKNOWN,r.toString())})}fo(e,n,s,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.fo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(I.UNKNOWN,i.toString())})}terminate(){this.eu=!0}}class TS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Wt(n),this.ru=!1):L("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
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
 */class bS{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=i,this._u.qr(o=>{s.enqueueAndForget(async()=>{Jn(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Q(a);c.du.add(4),await si(c),c.mu.set("Unknown"),c.du.delete(4),await Yo(c)}(this))})}),this.mu=new TS(s,r)}}async function Yo(t){if(Jn(t))for(const e of t.wu)await e(!0)}async function si(t){for(const e of t.wu)await e(!1)}function jg(t,e){const n=Q(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),Vu(n)?Fu(n):js(n).No()&&Uu(n,e))}function Hg(t,e){const n=Q(t),s=js(n);n.fu.delete(e),s.No()&&qg(n,e),n.fu.size===0&&(s.No()?s.$o():Jn(n)&&n.mu.set("Unknown"))}function Uu(t,e){t.gu.Ot(e.targetId),js(t).jo(e)}function qg(t,e){t.gu.Ot(e),js(t).Wo(e)}function Fu(t){t.gu=new Ab({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),js(t).start(),t.mu.ou()}function Vu(t){return Jn(t)&&!js(t).xo()&&t.fu.size>0}function Jn(t){return Q(t).du.size===0}function zg(t){t.gu=void 0}async function SS(t){t.fu.forEach((e,n)=>{Uu(t,e)})}async function CS(t,e){zg(t),Vu(t)?(t.mu.au(e),Fu(t)):t.mu.set("Unknown")}async function AS(t,e,n){if(t.mu.set("Online"),e instanceof Ng&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.fu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.fu.delete(o),s.gu.removeTarget(o))}(t,e)}catch(s){L("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ao(t,s)}else if(e instanceof Pi?t.gu.Kt(e):e instanceof Dg?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(W.min()))try{const s=await Vg(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.gu.Xt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.fu.get(c);u&&r.fu.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.fu.get(a);if(!c)return;r.fu.set(a,c.withResumeToken(Ke.EMPTY_BYTE_STRING,c.snapshotVersion)),qg(r,a);const u=new $n(c.target,a,1,c.sequenceNumber);Uu(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){L("RemoteStore","Failed to raise snapshot:",s),await ao(t,s)}}async function ao(t,e,n){if(!ei(e))throw e;t.du.add(1),await si(t),t.mu.set("Offline"),n||(n=()=>Vg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await Yo(t)})}function Kg(t,e){return e().catch(n=>ao(t,n,e))}async function Jo(t){const e=Q(t),n=vn(e);let s=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;kS(e);)try{const r=await fS(e.localStore,s);if(r===null){e.lu.length===0&&n.$o();break}s=r.batchId,RS(e,r)}catch(r){await ao(e,r)}Wg(e)&&Gg(e)}function kS(t){return Jn(t)&&t.lu.length<10}function RS(t,e){t.lu.push(e);const n=vn(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function Wg(t){return Jn(t)&&!vn(t).xo()&&t.lu.length>0}function Gg(t){vn(t).start()}async function DS(t){vn(t).tu()}async function NS(t){const e=vn(t);for(const n of t.lu)e.Yo(n.mutations)}async function OS(t,e,n){const s=t.lu.shift(),r=Nu.from(s,e,n);await Kg(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Jo(t)}async function PS(t,e){e&&vn(t).Jo&&await async function(n,s){if(r=s.code,Cb(r)&&r!==I.ABORTED){const i=n.lu.shift();vn(n).Oo(),await Kg(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Jo(n)}var r}(t,e),Wg(t)&&Gg(t)}async function Yh(t,e){const n=Q(t);n.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const s=Jn(n);n.du.add(3),await si(n),s&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await Yo(n)}async function xS(t,e){const n=Q(t);e?(n.du.delete(2),await Yo(n)):e||(n.du.add(2),await si(n),n.mu.set("Unknown"))}function js(t){return t.yu||(t.yu=function(e,n,s){const r=Q(e);return r.nu(),new _S(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{Jr:SS.bind(null,t),Zr:CS.bind(null,t),zo:AS.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),Vu(t)?Fu(t):t.mu.set("Unknown")):(await t.yu.stop(),zg(t))})),t.yu}function vn(t){return t.pu||(t.pu=function(e,n,s){const r=Q(e);return r.nu(),new ES(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{Jr:DS.bind(null,t),Zr:PS.bind(null,t),Xo:NS.bind(null,t),Zo:OS.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await Jo(t)):(await t.pu.stop(),t.lu.length>0&&(L("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
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
 */class $u{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new jt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new $u(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Bu(t,e){if(Wt("AsyncQueue",`${e}: ${t}`),ei(t))return new B(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class gs{constructor(e){this.comparator=e?(n,s)=>e(n,s)||j.comparator(n.key,s.key):(n,s)=>j.comparator(n.key,s.key),this.keyedMap=tr(),this.sortedSet=new Re(this.comparator)}static emptySet(e){return new gs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof gs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new gs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Jh{constructor(){this.Iu=new Re(j.comparator)}track(e){const n=e.doc.key,s=this.Iu.get(n);s?e.type!==0&&s.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&s.type!==1?this.Iu=this.Iu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Iu=this.Iu.remove(n):e.type===1&&s.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):q():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,s)=>{e.push(s)}),e}}class ks{constructor(e,n,s,r,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ks(e,n,gs.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class MS{constructor(){this.Eu=void 0,this.listeners=[]}}class LS{constructor(){this.queries=new Bs(e=>pg(e),qo),this.onlineState="Unknown",this.Au=new Set}}async function Qg(t,e){const n=Q(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new MS),r)try{i.Eu=await n.onListen(s)}catch(o){const a=Bu(o,`Initialization of query '${mc(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Ru(n.onlineState),i.Eu&&e.vu(i.Eu)&&ju(n)}async function Yg(t,e){const n=Q(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function US(t,e){const n=Q(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.vu(r)&&(s=!0);o.Eu=r}}s&&ju(n)}function FS(t,e,n){const s=Q(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function ju(t){t.Au.forEach(e=>{e.next()})}class Jg{constructor(e,n,s){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new ks(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.xu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=ks.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
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
 */class Xg{constructor(e){this.key=e}}class Zg{constructor(e){this.key=e}}class VS{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=ee(),this.mutatedKeys=ee(),this.Ku=gg(e),this.Gu=new gs(this.Ku)}get Qu(){return this.Lu}zu(e,n){const s=n?n.ju:new Jh,r=n?n.Gu:this.Gu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,h)=>{const d=r.get(l),g=zo(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),E=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let D=!1;d&&g?d.data.isEqual(g.data)?v!==E&&(s.track({type:3,doc:g}),D=!0):this.Wu(d,g)||(s.track({type:2,doc:g}),D=!0,(c&&this.Ku(g,c)>0||u&&this.Ku(g,u)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),D=!0):d&&!g&&(s.track({type:1,doc:d}),D=!0,(c||u)&&(a=!0)),D&&(g?(o=o.add(g),i=E?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{Gu:o,ju:s,Mi:a,mutatedKeys:i}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const i=e.ju.Tu();i.sort((u,l)=>function(h,d){const g=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return g(h)-g(d)}(u.type,l.type)||this.Ku(u.doc,l.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new ks(this.query,e.Gu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Jh,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=ee(),this.Gu.forEach(s=>{this.Zu(s.key)&&(this.Uu=this.Uu.add(s.key))});const n=[];return e.forEach(s=>{this.Uu.has(s)||n.push(new Zg(s))}),this.Uu.forEach(s=>{e.has(s)||n.push(new Xg(s))}),n}Xu(e){this.Lu=e.Wi,this.Uu=ee();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return ks.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class $S{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class BS{constructor(e){this.key=e,this.ec=!1}}class jS{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Bs(a=>pg(a),qo),this.ic=new Map,this.rc=new Set,this.oc=new Re(j.comparator),this.uc=new Map,this.cc=new xu,this.ac={},this.hc=new Map,this.lc=As.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function HS(t,e){const n=ZS(t);let s,r;const i=n.sc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.tc();else{const o=await dS(n.localStore,Gt(e));n.isPrimaryClient&&jg(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await qS(n,e,s,a==="current",o.resumeToken)}return r}async function qS(t,e,n,s,r){t.dc=(h,d,g)=>async function(v,E,D,k){let U=E.view.zu(D);U.Mi&&(U=await Wh(v.localStore,E.query,!1).then(({documents:fe})=>E.view.zu(fe,U)));const P=k&&k.targetChanges.get(E.targetId),J=E.view.applyChanges(U,v.isPrimaryClient,P);return Zh(v,E.targetId,J.Yu),J.snapshot}(t,h,d,g);const i=await Wh(t.localStore,e,!0),o=new VS(e,i.Wi),a=o.zu(i.documents),c=ni.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(a,t.isPrimaryClient,c);Zh(t,n,u.Yu);const l=new $S(e,n,o);return t.sc.set(e,l),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),u.snapshot}async function zS(t,e){const n=Q(t),s=n.sc.get(e),r=n.ic.get(s.targetId);if(r.length>1)return n.ic.set(s.targetId,r.filter(i=>!qo(i,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await _c(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Hg(n.remoteStore,s.targetId),Ec(n,s.targetId)}).catch(Zr)):(Ec(n,s.targetId),await _c(n.localStore,s.targetId,!0))}async function KS(t,e,n){const s=eC(t);try{const r=await function(i,o){const a=Q(i),c=Ae.now(),u=o.reduce((d,g)=>d.add(g.key),ee());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=Qt(),v=ee();return a.Ki.getEntries(d,u).next(E=>{g=E,g.forEach((D,k)=>{k.isValidDocument()||(v=v.add(D))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(E=>{l=E;const D=[];for(const k of o){const U=Eb(k,l.get(k.key).overlayedDocument);U!=null&&D.push(new Yn(k.key,U,ag(U.value.mapValue),Ht.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,D,o)}).next(E=>{h=E;const D=E.applyToLocalDocumentSet(l,v);return a.documentOverlayCache.saveOverlays(d,E.batchId,D)})}).then(()=>({batchId:h.batchId,changes:yg(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.ac[i.currentUser.toKey()];c||(c=new Re(oe)),c=c.insert(o,a),i.ac[i.currentUser.toKey()]=c}(s,r.batchId,n),await ri(s,r.changes),await Jo(s.remoteStore)}catch(r){const i=Bu(r,"Failed to persist write");n.reject(i)}}async function em(t,e){const n=Q(t);try{const s=await lS(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.uc.get(i);o&&(pe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ec=!0:r.modifiedDocuments.size>0?pe(o.ec):r.removedDocuments.size>0&&(pe(o.ec),o.ec=!1))}),await ri(n,s,e)}catch(s){await Zr(s)}}function Xh(t,e,n){const s=Q(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.sc.forEach((i,o)=>{const a=o.view.Ru(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=Q(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Ru(o)&&(c=!0)}),c&&ju(a)}(s.eventManager,e),r.length&&s.nc.zo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function WS(t,e,n){const s=Q(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.uc.get(e),i=r&&r.key;if(i){let o=new Re(j.comparator);o=o.insert(i,Ve.newNoDocument(i,W.min()));const a=ee().add(i),c=new Go(W.min(),new Map,new ke(oe),o,a);await em(s,c),s.oc=s.oc.remove(i),s.uc.delete(e),Hu(s)}else await _c(s.localStore,e,!1).then(()=>Ec(s,e,n)).catch(Zr)}async function GS(t,e){const n=Q(t),s=e.batch.batchId;try{const r=await uS(n.localStore,e);nm(n,s,null),tm(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await ri(n,r)}catch(r){await Zr(r)}}async function QS(t,e,n){const s=Q(t);try{const r=await function(i,o){const a=Q(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(pe(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);nm(s,e,n),tm(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await ri(s,r)}catch(r){await Zr(r)}}function tm(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function nm(t,e,n){const s=Q(t);let r=s.ac[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.ac[s.currentUser.toKey()]=r}}function Ec(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc.wc(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(s=>{t.cc.containsKey(s)||sm(t,s)})}function sm(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(Hg(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Hu(t))}function Zh(t,e,n){for(const s of n)s instanceof Xg?(t.cc.addReference(s.key,e),YS(t,s)):s instanceof Zg?(L("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||sm(t,s.key)):q()}function YS(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(L("SyncEngine","New document in limbo: "+n),t.rc.add(s),Hu(t))}function Hu(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new j(me.fromString(e)),s=t.lc.next();t.uc.set(s,new BS(n)),t.oc=t.oc.insert(n,s),jg(t.remoteStore,new $n(Gt(Du(n.path)),s,2,Cu.ct))}}async function ri(t,e,n){const s=Q(t),r=[],i=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,c)=>{o.push(s.dc(c,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const l=Lu.Di(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.nc.zo(r),await async function(a,c){const u=Q(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>b.forEach(c,h=>b.forEach(h.Vi,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>b.forEach(h.Si,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!ei(l))throw l;L("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.Li.get(h),g=d.snapshotVersion,v=d.withLastLimboFreeSnapshotVersion(g);u.Li=u.Li.insert(h,v)}}}(s.localStore,i))}async function JS(t,e){const n=Q(t);if(!n.currentUser.isEqual(e)){L("SyncEngine","User change. New user:",e.toKey());const s=await Fg(n.localStore,e);n.currentUser=e,function(r,i){r.hc.forEach(o=>{o.forEach(a=>{a.reject(new B(I.CANCELLED,i))})}),r.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ri(n,s.Qi)}}function XS(t,e){const n=Q(t),s=n.uc.get(e);if(s&&s.ec)return ee().add(s.key);{let r=ee();const i=n.ic.get(e);if(!i)return r;for(const o of i){const a=n.sc.get(o);r=r.unionWith(a.view.Qu)}return r}}function ZS(t){const e=Q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=em.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=XS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=WS.bind(null,e),e.nc.zo=US.bind(null,e.eventManager),e.nc.wc=FS.bind(null,e.eventManager),e}function eC(t){const e=Q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=GS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=QS.bind(null,e),e}class ef{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Qo(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return cS(this.persistence,new oS,e.initialUser,this.serializer)}createPersistence(e){return new rS(Mu.Fs,this.serializer)}createSharedClientState(e){return new gS}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class tC{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Xh(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=JS.bind(null,this.syncEngine),await xS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new LS}createDatastore(e){const n=Qo(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new wS(r));var r;return function(i,o,a,c){return new IS(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Xh(this.syncEngine,a,0),o=Qh.D()?new Qh:new mS,new bS(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,u){const l=new jS(s,r,i,o,a,c);return u&&(l.fc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Q(e);L("RemoteStore","RemoteStore shutting down."),n.du.add(5),await si(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
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
 */class rm{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):Wt("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class nC{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Fe.UNAUTHENTICATED,this.clientId=sg.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{L("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(L("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new jt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Bu(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Ra(t,e){t.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Fg(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function tf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await rC(t);L("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Yh(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Yh(e.remoteStore,i)),t._onlineComponents=e}function sC(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function rC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){L("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ra(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!sC(n))throw n;to("Error using user provided cache. Falling back to memory cache: "+n),await Ra(t,new ef)}}else L("FirestoreClient","Using default OfflineComponentProvider"),await Ra(t,new ef);return t._offlineComponents}async function im(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(L("FirestoreClient","Using user provided OnlineComponentProvider"),await tf(t,t._uninitializedComponentsProvider._online)):(L("FirestoreClient","Using default OnlineComponentProvider"),await tf(t,new tC))),t._onlineComponents}function iC(t){return im(t).then(e=>e.syncEngine)}async function om(t){const e=await im(t),n=e.eventManager;return n.onListen=HS.bind(null,e.syncEngine),n.onUnlisten=zS.bind(null,e.syncEngine),n}function oC(t,e,n={}){const s=new jt;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new rm({next:h=>{i.enqueueAndForget(()=>Yg(r,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new B(I.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new B(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Jg(Du(o.path),u,{includeMetadataChanges:!0,xu:!0});return Qg(r,l)}(await om(t),t.asyncQueue,e,n,s)),s.promise}function aC(t,e,n={}){const s=new jt;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new rm({next:h=>{i.enqueueAndForget(()=>Yg(r,l)),h.fromCache&&a.source==="server"?c.reject(new B(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Jg(o,u,{includeMetadataChanges:!0,xu:!0});return Qg(r,l)}(await om(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */const nf=new Map;/**
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
 */function am(t,e,n){if(!n)throw new B(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function cC(t,e,n,s){if(e===!0&&s===!0)throw new B(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function sf(t){if(!j.isDocumentKey(t))throw new B(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function rf(t){if(j.isDocumentKey(t))throw new B(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function qu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":q()}function Gn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=qu(t);throw new B(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class of{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new B(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,cC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Xo{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new of({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new B(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new of(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new DT;switch(n.type){case"firstParty":return new xT(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new B(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=nf.get(e);n&&(L("ComponentProvider","Removing Datastore"),nf.delete(e),n.terminate())}(this),Promise.resolve()}}function uC(t,e,n,s={}){var r;const i=(t=Gn(t,Xo))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&to("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Fe.MOCK_USER;else{o=o_(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new B(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Fe(c)}t._authCredentials=new NT(new ng(o,a))}}/**
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
 */class st{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new st(this.firestore,e,this._key)}}class Zo{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Zo(this.firestore,e,this._query)}}class pn extends Zo{constructor(e,n,s){super(e,n,Du(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new st(this.firestore,null,new j(e))}withConverter(e){return new pn(this.firestore,e,this._path)}}function rA(t,e,...n){if(t=rt(t),am("collection","path",e),t instanceof Xo){const s=me.fromString(e,...n);return rf(s),new pn(t,null,s)}{if(!(t instanceof st||t instanceof pn))throw new B(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(me.fromString(e,...n));return rf(s),new pn(t.firestore,null,s)}}function iA(t,e,...n){if(t=rt(t),arguments.length===1&&(e=sg.A()),am("doc","path",e),t instanceof Xo){const s=me.fromString(e,...n);return sf(s),new st(t,null,new j(s))}{if(!(t instanceof st||t instanceof pn))throw new B(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(me.fromString(e,...n));return sf(s),new st(t.firestore,t instanceof pn?t.converter:null,new j(s))}}/**
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
 */class lC{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new $g(this,"async_queue_retry"),this.qc=()=>{const n=ka();n&&L("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=ka();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=ka();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new jt;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!ei(e))throw e;L("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(s=>{this.Mc=s,this.Fc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Wt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Fc=!1,s))));return this.Nc=n,n}enqueueAfterDelay(e,n,s){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const r=$u.createAndSchedule(this,e,n,s,i=>this.Qc(i));return this.$c.push(r),r}Uc(){this.Mc&&q()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class ea extends Xo{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new lC,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||cm(this),this._firestoreClient.terminate()}}function hC(t,e){const n=typeof t=="object"?t:Ed(),s=typeof t=="string"?t:e||"(default)",r=Wc(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=s_("firestore");i&&uC(r,...i)}return r}function zu(t){return t._firestoreClient||cm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function cm(t){var e,n,s;const r=t._freezeSettings(),i=function(o,a,c,u){return new WT(o,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new nC(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
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
 */class Rs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rs(Ke.fromBase64String(e))}catch(n){throw new B(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Rs(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ku{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class um{constructor(e){this._methodName=e}}/**
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
 */class Wu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
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
 */const fC=/^__.*__$/;class dC{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Yn(e,this.data,this.fieldMask,n,this.fieldTransforms):new ti(e,this.data,n,this.fieldTransforms)}}function lm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class Gu{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Jc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new Gu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Zc({path:s,ta:!1});return r.ea(e),r}na(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Zc({path:s,ta:!1});return r.Jc(),r}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return co(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(lm(this.Yc)&&fC.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class pC{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Qo(e)}ua(e,n,s,r=!1){return new Gu({Yc:e,methodName:n,oa:s,path:Be.emptyPath(),ta:!1,ra:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gC(t){const e=t._freezeSettings(),n=Qo(t._databaseId);return new pC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function mC(t,e,n,s,r,i={}){const o=t.ua(i.merge||i.mergeFields?2:0,e,n,r);pm("Data must be an object, but it was:",o,s);const a=fm(s,o);let c,u;if(i.merge)c=new vt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=yC(e,h,n);if(!o.contains(d))throw new B(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);wC(l,d)||l.push(d)}c=new vt(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new dC(new ut(a),c,u)}function hm(t,e){if(dm(t=rt(t)))return pm("Unsupported field value:",e,t),fm(t,e);if(t instanceof um)return function(n,s){if(!lm(s.Yc))throw s.ia(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ia(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=hm(o,s.sa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=rt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return gb(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Ae.fromDate(n);return{timestampValue:oo(s.serializer,r)}}if(n instanceof Ae){const r=new Ae(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:oo(s.serializer,r)}}if(n instanceof Wu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Rs)return{bytesValue:Og(s.serializer,n._byteString)};if(n instanceof st){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ia(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Pu(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ia(`Unsupported field value: ${qu(n)}`)}(t,e)}function fm(t,e){const n={};return rg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$s(t,(s,r)=>{const i=hm(r,e.Xc(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function dm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ae||t instanceof Wu||t instanceof Rs||t instanceof st||t instanceof um)}function pm(t,e,n){if(!dm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=qu(n);throw s==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+s)}}function yC(t,e,n){if((e=rt(e))instanceof Ku)return e._internalPath;if(typeof e=="string")return gm(t,e);throw co("Field path arguments must be of type string or ",t,!1,void 0,n)}const vC=new RegExp("[~\\*/\\[\\]]");function gm(t,e,n){if(e.search(vC)>=0)throw co(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ku(...e.split("."))._internalPath}catch{throw co(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function co(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new B(I.INVALID_ARGUMENT,a+t+c)}function wC(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class mm{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new st(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _C(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ym("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class _C extends mm{data(){return super.data()}}function ym(t,e){return typeof e=="string"?gm(t,e):e instanceof Ku?e._internalPath:e._delegate._internalPath}/**
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
 */function EC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class IC{convertValue(e,n="none"){switch(Wn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(bs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw q()}}convertObject(e,n){const s={};return $s(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Wu(be(e.latitude),be(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=og(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Nr(e));default:return null}}convertTimestamp(e){const n=yn(e);return new Ae(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=me.fromString(e);pe(Ug(s));const r=new Or(s.get(1),s.get(3)),i=new j(s.popFirst(5));return r.isEqual(n)||Wt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function TC(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class nr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vm extends mm{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new xi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(ym("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class xi extends vm{data(e={}){return super.data(e)}}class bC{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new nr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new xi(this._firestore,this._userDataWriter,s.key,s,new nr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new xi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new nr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new xi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new nr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:SC(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function SC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}/**
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
 */function oA(t){t=Gn(t,st);const e=Gn(t.firestore,ea);return oC(zu(e),t._key).then(n=>AC(e,t,n))}class wm extends IC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new st(this.firestore,null,n)}}function aA(t){t=Gn(t,Zo);const e=Gn(t.firestore,ea),n=zu(e),s=new wm(e);return EC(t._query),aC(n,t._query).then(r=>new bC(e,s,t,r))}function cA(t,e,n){t=Gn(t,st);const s=Gn(t.firestore,ea),r=TC(t.converter,e,n);return CC(s,[mC(gC(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Ht.none())])}function CC(t,e){return function(n,s){const r=new jt;return n.asyncQueue.enqueueAndForget(async()=>KS(await iC(n),s,r)),r.promise}(zu(t),e)}function AC(t,e,n){const s=n.docs.get(e._key),r=new wm(t);return new vm(t,r,e._key,s,new nr(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Vs=n})(Vr),Es(new jn("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new ea(new OT(n.getProvider("auth-internal")),new LT(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new B(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Or(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),dn(kh,"3.10.0",t),dn(kh,"3.10.0","esm2017")})();var kC="firebase",RC="9.19.1";/**
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
 */dn(kC,RC,"app");const DC={apiKey:"AIzaSyAEn441hlz28aSWIZpiyP-Hzg2ts09HoKs",authDomain:"polls-snoap-taylor.firebaseapp.com",projectId:"polls-snoap-taylor",storageBucket:"polls-snoap-taylor.appspot.com",messagingSenderId:"800775808502",appId:"1:800775808502:web:1775a14231f56cd929d3d7",measurementId:"G-YTCEVMCMR0"},NC=_d(DC),Da=AI(NC),uA=hC(),OC={class:"navbar"},PC={class:"nav-options"},xC={key:0},MC={key:1},LC={class:"email"},UC={key:0},FC={key:1},VC={key:0},$C=et("h1",{style:{color:"darkblue","font-size":"50px"}},"Polls!",-1),BC=et("h4",{style:{"font-size":"large",color:"black"}},[at(" Cameron Snoap"),et("br"),at(" Kyle Taylor ")],-1),jC=et("h2",null,[et("br"),at(" Click "),et("u",null,"Sign Up"),at(" if you don't already have an account! ")],-1),HC=et("h2",null,[at(" Or, click "),et("u",null,"Login"),at(" if you do! ")],-1),qC=[$C,BC,jC,HC],zC=Fc({__name:"App",setup(t){const e=Gw();Qw().query.email;const s=Ti(""),r=Ti("");let i="",o="";const a=Ti(!0);Da.onAuthStateChanged(function(h){h?(a.value=!0,s.value=h.uid,console.log(`User UID: ${s.value}`)):(a.value=!1,s.value="")});async function c(){await new Promise(h=>{sr(r,(d,g)=>{console.log(`userEmail changed from ${g} to ${d}`),o=d,h()})}),console.log(`New userEmail value: ${o}`)}function u(h){h?(s.value=h.uid,r.value=h.email||"",h.uid):(s.value="",r.value="")}Da.onAuthStateChanged(u),c(),console.log(`New value ${i}`);const l=()=>{Da.signOut(),e.push("/")};return(h,d)=>{const g=cl("router-link"),v=cl("router-view");return Cn(),ts(At,null,[et("div",OC,[et("nav",PC,[a.value?(Cn(),ts("span",xC,[et("button",{onClick:l}," Logout ")])):(Cn(),ts("span",MC,[Ne(g,{to:"/SignUp"},{default:Ys(()=>[at(" Sign Up ")]),_:1}),at(" | "),Ne(g,{to:"/Login"},{default:Ys(()=>[at(" Login ")]),_:1})]))]),et("div",LC,[h.$route.path!=="/Profile"&&a.value?(Cn(),ts("span",UC,[Ne(g,{to:"/Profile"},{default:Ys(()=>[at(km(Ln(o)),1)]),_:1})])):ia("",!0),h.$route.path!=="/Polls"&&h.$route.path!=="/Login"&&h.$route.path!=="/SignUp"?(Cn(),ts("span",FC,[Ne(g,{to:"/Polls"},{default:Ys(()=>[at(" Polls ")]),_:1})])):ia("",!0)])]),h.$route.path==="/"?(Cn(),ts("div",VC,qC)):ia("",!0),Ne(v)],64)}}});const KC="modulepreload",WC=function(t){return"/"+t},af={},Gs=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=WC(i),i in af)return;af[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let l=r.length-1;l>=0;l--){const h=r[l];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":KC,o||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),o)return new Promise((l,h)=>{u.addEventListener("load",l),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},_m=Kw({history:cw("/"),routes:[{name:"Home",path:"/",component:()=>Gs(()=>Promise.resolve().then(()=>GC),void 0)},{name:"Polls",path:"/Polls",component:()=>Gs(()=>import("./Polls-19b0d4f8.js"),["assets/Polls-19b0d4f8.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/Polls-837a7ae9.css"])},{name:"SignUp",path:"/SignUp",component:()=>Gs(()=>import("./SignUp-2da46d27.js"),["assets/SignUp-2da46d27.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/SignUp-4cea74b8.css"])},{name:"Login",path:"/Login",component:()=>Gs(()=>import("./Login-74d98834.js"),[])},{name:"Profile",path:"/Profile",component:()=>Gs(()=>import("./Profile-0f4f1745.js"),["assets/Profile-0f4f1745.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/Profile-0f0ab664.css"])}]}),GC=Object.freeze(Object.defineProperty({__proto__:null,default:_m},Symbol.toStringTag,{value:"Module"})),Em=Hv(zC);Em.use(_m);Em.mount("#app");export{At as F,on as G,oA as J,Ti as a,Da as b,ts as c,Fc as d,et as e,ia as f,uA as g,Qw as h,YC as i,JC as j,Ne as k,ZC as l,tA as m,cA as n,Cn as o,QC as p,Gw as q,iA as r,rA as s,aA as t,Ln as u,XC as v,sr as w,cl as x,nA as y,eA as z};
