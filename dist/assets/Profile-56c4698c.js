import{d as y,a as d,b as g,c as I,i as w,j as U,o as b,r as x,h as S,J as B,F as C,p as A,l as $,e as l}from"./index-ff5b3630.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";const c=n=>(A("data-v-beb49fa6"),n=n(),$(),n),L=c(()=>l("h1",null," This is your profile! ",-1)),P=c(()=>l("h2",{id:"firstName"},null,-1)),D=c(()=>l("h2",{id:"lastName"},null,-1)),k=c(()=>l("h2",{id:"age"},null,-1)),J=y({__name:"Profile",setup(n){new Date().toLocaleString(),w().query.email;const a=d(""),i=d("");let h="",u="";async function p(e){const t=x(S,"profile",e),o=await B(t);if(o.exists()){const s=o.data();s?N(s):console.log("No data found in document!")}else console.log("No such document!")}function N(e){const t=e.firstName,o=e.lastName,s=e.age;console.log("First Name:",t),console.log("Last Name:",o),console.log("Age:",s);const m=document.getElementById("firstName"),f=document.getElementById("lastName"),_=document.getElementById("age");m&&f&&_&&(m.textContent="First Name: "+t,f.textContent="Last Name: "+o,_.textContent="Age: "+s)}const r=d(!0);g.onAuthStateChanged(function(e){e?(r.value=!0,a.value=e.uid,console.log(`User UID: ${a.value}`)):(r.value=!1,a.value="")});async function v(){await new Promise(e=>{U(i,(t,o)=>{console.log(`userEmail changed from ${o} to ${t}`),u=t,e()})}),console.log(`New userEmail value: ${u}`),p(u)}function E(e){e?(a.value=e.uid,i.value=e.email||"",e.uid):(a.value="",i.value="")}return g.onAuthStateChanged(E),v(),console.log(`New value ${h}`),(e,t)=>(b(),I(C,null,[L,P,D,k],64))}});const z=F(J,[["__scopeId","data-v-beb49fa6"]]);export{z as default};
