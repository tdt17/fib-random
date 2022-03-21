import{r as J,w as F,a as M,i as X,d as R,c as b,H as ee,b as B,j as q,z as te,n as se,e as w,o as u,f as d,g as x,v as j,u as l,h as c,t as h,F as f,k as C,l as D,m as k,p as S,q as I,s as z,T as H,x as ne,y as K,A as V,B as ae,C as oe,D as le}from"./vendor.31c54e85.js";const ie=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}};ie();const P="fib-config",v=J({name:""});Object.assign(v,JSON.parse(localStorage.getItem(P)||"{}"));F(v,t=>{localStorage.setItem(P,JSON.stringify(t))});const $=M(!1);X({apiKey:"AIzaSyDlAUfPJ6T-xQMJcsbAT3SW7zFSFxDQZh4",authDomain:"fib-random.firebaseapp.com",projectId:"fib-random",storageBucket:"fib-random.appspot.com",messagingSenderId:"724579742971",appId:"1:724579742971:web:7b8e2259a4d585b9be6c5e"});const T=R(),re=async()=>{const t={users:{},settings:{admin:v.name,options:["1","2","3","5","8","13","21"],openSettings:!1}};return(await te(se(T,"sessions"),t)).id},i=J({loading:!0,id:window.location.hash.slice(1),active:!1,state:void 0}),U=b(()=>{var t;return Object.fromEntries(Object.entries(((t=i.state)==null?void 0:t.users)||{}).filter(([,{viewOnly:e}])=>!e))}),ue=b(()=>{var t;return Object.fromEntries(Object.entries(((t=i.state)==null?void 0:t.users)||{}).filter(([,{viewOnly:e}])=>e))}),ce=b(()=>Object.keys(U.value).sort()),L=b(()=>Object.keys(ue.value).sort()),G=b(()=>Object.values(U.value).every(({ready:t})=>t)),O=b(()=>{var t;return(t=i.state)==null?void 0:t.users[v.name]});let E;F(()=>[i.id,v.name],([t,e])=>{if(!e||!t){i.loading=!1;return}E==null||E(),E=ee(B(T,`sessions/${t}`),o=>{i.active=o.exists(),i.state=o.data(),i.loading=!1})},{immediate:!0});const N=async(t,e)=>{await q(B(T,`sessions/${i.id}`),{users:{[t]:e}},{merge:!0})},de=async t=>{await q(B(T,`sessions/${i.id}`),{settings:t},{merge:!0})};F(()=>{var t;return[(t=i.state)==null?void 0:t.users,v.name]},([t,e])=>{!t||typeof t=="string"||!e||typeof e!="string"||t[e]||N(e,{ready:!1,estimate:""+~~(Math.random()*100)})});window.addEventListener("hashchange",()=>{i.id=window.location.hash.slice(1)});Object.assign(window,{session:i});const _e=w({setup(t){const e=async()=>{const o=await re();window.location.hash=o};return(o,a)=>(u(),d(f,null,[x(c("div",null,'Session "'+h(l(i).id)+'" not found',513),[[j,l(i).id]]),c("button",{onClick:e},"New Session")],64))}});const Q=w({props:{roll:{type:Boolean},value:null,values:null,scale:{default:.2},speed:{default:1}},setup(t){const e=t,o=b(()=>e.roll?new Array(20).fill("?"):new Array(20).fill(e.value)),a=M([0,0,0]);let n;const s=()=>{const r=setInterval(()=>{const[_,p,m]=a.value,g=e.speed*300,y=[Math.random(),Math.random(),Math.random()],A=y[0]+y[1]+y[2],[Y,Z,W]=[g*y[0]/A,g*y[1]/A,g*y[2]/A];a.value=[_+Y,p+Z,m+W]},1e3);n=()=>clearInterval(r)};return F(()=>e.roll,r=>{r?s():(n==null||n(),a.value=[231,107,0])},{immediate:!0}),(r,_)=>(u(),d("div",{class:"dice-box",style:D({width:400*e.scale+"px",height:400*e.scale+"px"})},[c("ul",{class:"d20",style:D({transform:`scale3d(${e.scale},${e.scale},${e.scale}) rotateX(${a.value[0]}deg) rotateY(${a.value[1]}deg) rotateZ(${a.value[2]}deg)`,transition:`1s ${e.roll?"linear":"ease-out"}`})},[(u(!0),d(f,null,C(l(o),p=>(u(),d("li",null,h(p),1))),256))],4)],4))}});const ve={class:"configs"},pe=w({props:{name:null,user:null},setup(t){const e=t,o=()=>{N(e.name,{viewOnly:!0})};return(a,n)=>(u(),d("div",{class:S(["user",{active:t.name===l(v).name,"view-mode":t.user.viewOnly}])},[x(c("div",ve,[c("button",{onClick:o},"\u{1F441}")],512),[[j,l($)]]),c("h3",null,h(t.name)+" "+h(t.user.ready?"\u2714":"\u25FB\uFE0E"),1),k(Q,{roll:!t.user.ready,value:l(G)?t.user.estimate||"":"?",values:[]},null,8,["roll","value"])],2))}});const me={key:0,class:"settings"},fe=c("h3",null,"Settings",-1),ge=V(" Settings for all available: "),ye=c("br",null,null,-1),he=V(" Options: "),be=c("br",null,null,-1),we=w({setup(t){var n;const e=()=>{$.value=!$.value},o=M((n=i.state)==null?void 0:n.settings.options.join(";"));F(()=>{var s;return(s=i.state)==null?void 0:s.settings.options.join(";")},s=>{o.value=s});const a=()=>{var s,r,_;de({options:(r=(s=o.value)==null?void 0:s.split(";"))!=null?r:[],openSettings:(_=i.state)==null?void 0:_.settings.openSettings})};return(s,r)=>{var _;return u(),d(f,null,[(u(),I(H,{to:"#globalcontrols"},[((_=l(i).state)==null?void 0:_.settings.admin)===l(v).name?(u(),d("button",{key:0,class:S({active:l($)}),onClick:e},"\u2699\uFE0F",2)):z("",!0)])),l($)?(u(),d("div",me,[fe,ge,x(c("input",{type:"checkbox","onUpdate:modelValue":r[0]||(r[0]=p=>l(i).state.settings.openSettings=p)},null,512),[[ne,l(i).state.settings.openSettings]]),ye,he,x(c("input",{"onUpdate:modelValue":r[1]||(r[1]=p=>o.value=p)},null,512),[[K,o.value]]),be,c("button",{onClick:a},"save")])):z("",!0)],64)}}});const xe={class:"viewer"},Oe=V(" Viewer: "),$e=["onClick"],ke=w({setup(t){const e=()=>{var s;N(v.name,{viewOnly:!((s=O.value)!=null&&s.viewOnly)})},o=(s,r)=>{var m,g;const _=((m=O.value)==null?void 0:m.estimate)===s,p=r!=null?r:_?!((g=O.value)!=null&&g.ready):!0;N(v.name,{ready:p,estimate:p?s:ae()})},a=M("");let n;return document.addEventListener("keydown",s=>{var r;if(!((r=O.value)!=null&&r.viewOnly)){if(["Backspace"].includes(s.key)){clearTimeout(n),a.value="",o(null,!1);return}s.key.length>1||(a.value+=s.key,clearTimeout(n),n=setTimeout(()=>{var _;(_=i.state)!=null&&_.settings.options.includes(a.value)&&o(a.value,!0),a.value=""},500))}}),(s,r)=>{var _,p;return u(),d(f,null,[(u(),I(H,{to:"#globalcontrols"},[c("button",{onClick:e,class:S({active:(_=l(O))==null?void 0:_.viewOnly}),title:"View Mode"},"\u{1F441}",2),x(c("div",xe,[Oe,(u(!0),d(f,null,C(l(L),m=>(u(),d("span",{class:S({active:m===l(v).name})},h(m),3))),256))],512),[[j,l(L).length>0]])])),c("div",null,h(a.value),1),(u(!0),d(f,null,C((p=l(i).state)==null?void 0:p.settings.options,m=>{var g,y;return x((u(),d("button",{class:S({active:m===((g=l(O))==null?void 0:g.estimate)}),onClick:A=>o(m)},h(m),11,$e)),[[j,!((y=l(O))!=null&&y.viewOnly)]])}),256))],64)}}});const Se={key:0,class:"results"},je=c("h3",null,"Result:",-1),Ce={class:"entry"},Fe=w({setup(t){const e=b(()=>Object.values(U.value).reduce((a,{estimate:n=""})=>{var s;return a[n]=((s=a[n])!=null?s:0)+1,a},{}));return(o,a)=>l(G)?(u(),d("div",Se,[je,x(k(Q,{roll:!1,value:Math.max(...Object.keys(l(e)))+"",values:[]},null,8,["value"]),[[j,Object.keys(l(e)).length<=2]]),c("div",null,[(u(!0),d(f,null,C(l(e),(n,s)=>(u(),d("span",Ce,h(n)+"x "+h(s),1))),256))])])):z("",!0)}});const Me=c("div",{id:"globalcontrols"},null,-1),Ve={class:"users"},Ae=w({setup(t){return(e,o)=>(u(),d(f,null,[Me,k(we),k(ke),c("div",Ve,[(u(!0),d(f,null,C(l(ce),a=>(u(),I(pe,{name:a,user:l(U)[a]},null,8,["name","user"]))),256))]),k(Fe)],64))}}),Ee=V(" Enter your name: "),Ne=V(),Ie=w({setup(t){const e=M(v.name),o=()=>{v.name=e.value};return(a,n)=>(u(),d(f,null,[Ee,x(c("input",{"onUpdate:modelValue":n[0]||(n[0]=s=>e.value=s)},null,512),[[K,e.value]]),Ne,c("button",{onClick:o},"Go")],64))}});const Te=w({setup(t){const e=b(()=>v.name?i.loading?null:i.active?Ae:_e:Ie);return(o,a)=>(u(),I(oe(l(e))))}});le(Te).mount("#app");
