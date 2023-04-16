import{d as J,r as V,a as _,b as Q,s as v,t as k,c as u,e as t,u as n,f as c,w as g,v as f,F as K,g as O,h as U,i as W,j as X,o as i,k as Y,p as Z,l as D,m as R}from"./index-ff5b3630.js";import{_ as ee}from"./_plugin-vue_export-helper-c27b6911.js";const m=C=>(Z("data-v-13744a01"),C=C(),D(),C),le={key:0},oe={class:"header"},te={key:0},se={key:1},ne={key:0},ae={key:1},ue=m(()=>t("br",null,null,-1)),ie={key:2},re={key:3},ce=m(()=>t("br",null,null,-1)),de=m(()=>t("br",null,null,-1)),pe=m(()=>t("br",null,null,-1)),he={key:0},_e=m(()=>t("h1",null," Click the + button to create a poll! ",-1)),ve=J({__name:"Polls",setup(C){const B=new Date().toLocaleString(),E=V(U,"polls/user"),F=V(U,"polls/public");let s={pollQuestion:"",pollChoices:["","","",""],votes:[0,0,0,0],date:"",pollsCreated:0};W().query.email;const p=_("");let h="",d=_(1),a=_(1),r=_(1),y=0,w=1;const P=_(!0);Q.onAuthStateChanged(function(e){e?(P.value=!0,p.value=e.uid,console.log(`User UID: ${p.value}`)):(P.value=!1,p.value="")});async function L(){await new Promise(e=>{X(p,(l,o)=>{console.log(`userUid changed from ${o} to ${l}`),h=l,e()})}),console.log(`New userUid value: ${h}`)}function N(e){e?(p.value=e.uid,e.uid):p.value=""}async function q(e,l){try{await R(v(e,`${h}`),l),console.log("Successful addition!")}catch(o){console.log(`I got an error! ${o}`)}}async function T(e,l){try{await R(v(e,"allPolls"),l),console.log("Successful addition!")}catch(o){console.log(`I got an error! ${o}`)}}let x=[];const j=v(U,"polls/public/allPolls");k(j).then(e=>{const l=e.docs.map(o=>({...o.data(),id:o.id}));return Promise.all(l)}).then(e=>{console.log(e);for(let l=0;l<e.length;l++)x[l]=e[l];"date"in e[0]&&console.log("PUBLIC DATE:",e[0].date),y=e.length,console.log(y)}).catch(e=>{console.log(e.message)});const M=v(U,"polls");k(M).then(e=>{const l=e.docs.map(o=>{const b=v(o.ref,h);return k(b).then(G=>{const H=G.docs.map($=>({...$.data(),id:$.id}));return{...o.data(),id:o.id,newUserId:H}})});return Promise.all(l)}).then(e=>{const l=e.map(o=>o.newUserId);console.log(e),"date"in l[0][0]&&console.log("USER DATE: ",l[0][0].date),y=l[0].length}).catch(e=>{console.log(e.message)}),Q.onAuthStateChanged(N),L(),console.log(`New value ${h}`);function I(){d.value=3-d.value,s.pollQuestion="",s.pollChoices=["","","",""],a.value=1,r.value=1}function S(){a.value=3-a.value,a.value==1&&(s.pollChoices[2]=""),r.value==2&&a.value==1&&(s.pollChoices[2]=s.pollChoices[3],s.pollChoices[3]="",a.value=2,r.value=1)}function A(){r.value=3-r.value,r.value==1&&(s.pollChoices[3]="")}function z(){d.value=3-d.value,a.value=1,r.value=1,s.date=B,s.pollsCreated=y+w,w=w+1,q(E,s),T(F,s)}return(e,l)=>P.value?(i(),u("span",le,[t("div",oe,[n(d)==1?(i(),u("span",te,[t("button",{onClick:I}," + ")])):c("",!0),n(d)==2?(i(),u("span",se,[t("button",{onClick:I}," Cancel "),t("h1",null,[g(t("input",{type:"text",placeholder:"Poll Question","onUpdate:modelValue":l[0]||(l[0]=o=>n(s).pollQuestion=o),class:"question"},null,512),[[f,n(s).pollQuestion]])]),t("h1",null,[g(t("input",{type:"text",placeholder:"Poll Answer","onUpdate:modelValue":l[1]||(l[1]=o=>n(s).pollChoices[0]=o),class:"answer"},null,512),[[f,n(s).pollChoices[0]]])]),t("h1",null,[g(t("input",{type:"text",placeholder:"Poll Answer","onUpdate:modelValue":l[2]||(l[2]=o=>n(s).pollChoices[1]=o),class:"answer"},null,512),[[f,n(s).pollChoices[1]]])]),n(a)==1?(i(),u("span",ne,[t("button",{onClick:S}," + ")])):c("",!0),n(a)==2?(i(),u("span",ae,[t("div",null,[g(t("input",{style:{"margin-right":"20px","margin-left":"66px"},type:"text",placeholder:"Poll Answer","onUpdate:modelValue":l[3]||(l[3]=o=>n(s).pollChoices[2]=o),class:"answer"},null,512),[[f,n(s).pollChoices[2]]]),t("button",{onClick:S}," - ")])])):c("",!0),ue,n(r)==1&&n(a)==2?(i(),u("span",ie,[t("button",{onClick:A}," + ")])):c("",!0),n(r)==2?(i(),u("span",re,[t("div",null,[g(t("input",{style:{"margin-right":"20px","margin-left":"66px"},type:"text",placeholder:"Poll Answer","onUpdate:modelValue":l[4]||(l[4]=o=>n(s).pollChoices[3]=o),class:"answer"},null,512),[[f,n(s).pollChoices[3]]]),t("button",{onClick:A}," - ")])])):c("",!0),ce,de,pe,t("div",{class:"header"},[t("button",{onClick:z}," Post ")])])):c("",!0)]),n(d)==1?(i(),u("div",he,[_e,(i(!0),u(K,null,O(n(x),(o,b)=>(i(),u("h2",{key:b},Y(o.question),1))),128))])):c("",!0)])):c("",!0)}});const ye=ee(ve,[["__scopeId","data-v-13744a01"]]);export{ye as default};