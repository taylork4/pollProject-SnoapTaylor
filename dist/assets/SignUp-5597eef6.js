import{d as g,a as c,c as h,e as a,w as p,h as u,u as i,z as w,F as N,A as U,b as y,B as x,r as S,j as V,C as m,o as C,p as E,q as I,D as b,E as B}from"./index-4f959544.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";const k=r=>(E("data-v-9ca8881f"),r=r(),I(),r),A=k(()=>a("h1",null,"Create an Account",-1)),D=g({__name:"SignUp",setup(r){const f=b();let l={firstName:"",lastName:"",created:[],responded:[],favorited:[]};const n=c(""),d=c("");async function _(o,e){try{await m(o,e),console.log("Successful addition!")}catch(s){console.log(`I got an error! ${s}`)}}const v=()=>{U(y,n.value,d.value).then(o=>{var s,t;x(o.user),console.log("Verification email has been sent to",(s=o.user)==null?void 0:s.email);const e=S(V,`profile/${n.value}`);m(e,{name:n.value}),_(e,l),f.push({name:"Polls",query:{email:(t=o.user)==null?void 0:t.email}})}).catch(o=>{console.error("Oops",o)})};return(o,e)=>{const s=B("router-view");return C(),h(N,null,[A,a("p",null,[p(a("input",{type:"text",placeholder:"Email","onUpdate:modelValue":e[0]||(e[0]=t=>n.value=t)},null,512),[[u,n.value]])]),a("p",null,[p(a("input",{type:"password",placeholder:"Password","onUpdate:modelValue":e[1]||(e[1]=t=>d.value=t)},null,512),[[u,d.value]])]),a("p",null,[p(a("input",{type:"text",placeholder:"First Name","onUpdate:modelValue":e[2]||(e[2]=t=>i(l).firstName=t)},null,512),[[u,i(l).firstName]])]),a("p",null,[p(a("input",{type:"text",placeholder:"Last Name","onUpdate:modelValue":e[3]||(e[3]=t=>i(l).lastName=t)},null,512),[[u,i(l).lastName]])]),a("p",null,[a("button",{onClick:v}," Sign Up ")]),w(s)],64)}}});const $=F(D,[["__scopeId","data-v-9ca8881f"]]);export{$ as default};