function Mo(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const Yf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jf=Mo(Yf);function Fl(t){return!!t||t===""}function Po(t){if(L(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=he(s)?td(s):Po(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(he(t))return t;if(fe(t))return t}}const Zf=/;(?![^(]*\))/g,ed=/:(.+)/;function td(t){const e={};return t.split(Zf).forEach(n=>{if(n){const s=n.split(ed);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Lo(t){let e="";if(he(t))e=t;else if(L(t))for(let n=0;n<t.length;n++){const s=Lo(t[n]);s&&(e+=s+" ")}else if(fe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function nd(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Fr(t[s],e[s]);return n}function Fr(t,e){if(t===e)return!0;let n=uc(t),s=uc(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=L(t),s=L(e),n||s)return n&&s?nd(t,e):!1;if(n=fe(t),s=fe(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Fr(t[o],e[o]))return!1}}return String(t)===String(e)}function Ul(t,e){return t.findIndex(n=>Fr(n,e))}const qE=t=>he(t)?t:t==null?"":L(t)||fe(t)&&(t.toString===Bl||!B(t.toString))?JSON.stringify(t,Vl,2):String(t),Vl=(t,e)=>e&&e.__v_isRef?Vl(t,e.value):gn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Vr(e)?{[`Set(${e.size})`]:[...e.values()]}:fe(e)&&!L(e)&&!jl(e)?String(e):e,Y={},pn=[],Je=()=>{},sd=()=>!1,rd=/^on[^a-z]/,Ur=t=>rd.test(t),Fo=t=>t.startsWith("onUpdate:"),Oe=Object.assign,Uo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},id=Object.prototype.hasOwnProperty,z=(t,e)=>id.call(t,e),L=Array.isArray,gn=t=>$r(t)==="[object Map]",Vr=t=>$r(t)==="[object Set]",uc=t=>t instanceof Date,B=t=>typeof t=="function",he=t=>typeof t=="string",Vo=t=>typeof t=="symbol",fe=t=>t!==null&&typeof t=="object",$l=t=>fe(t)&&B(t.then)&&B(t.catch),Bl=Object.prototype.toString,$r=t=>Bl.call(t),od=t=>$r(t).slice(8,-1),jl=t=>$r(t)==="[object Object]",$o=t=>he(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,nr=Mo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Br=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ad=/-(\w)/g,rt=Br(t=>t.replace(ad,(e,n)=>n?n.toUpperCase():"")),cd=/\B([A-Z])/g,kn=Br(t=>t.replace(cd,"-$1").toLowerCase()),jr=Br(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ci=Br(t=>t?`on${jr(t)}`:""),os=(t,e)=>!Object.is(t,e),sr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ur=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ki=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let hc;const ld=()=>hc||(hc=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let ut;class ud{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&ut&&(this.parent=ut,this.index=(ut.scopes||(ut.scopes=[])).push(this)-1)}run(e){if(this.active)try{return ut=this,e()}finally{ut=this.parent}}on(){ut=this}off(){ut=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function hd(t,e=ut){e&&e.active&&e.effects.push(t)}const Bo=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ql=t=>(t.w&At)>0,Kl=t=>(t.n&At)>0,fd=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=At},dd=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];ql(r)&&!Kl(r)?r.delete(t):e[n++]=r,r.w&=~At,r.n&=~At}e.length=n}},Hi=new WeakMap;let Gn=0,At=1;const zi=30;let st;const jt=Symbol(""),Wi=Symbol("");class jo{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,hd(this,s)}run(){if(!this.active)return this.fn();let e=st,n=_t;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=st,st=this,_t=!0,At=1<<++Gn,Gn<=zi?fd(this):fc(this),this.fn()}finally{Gn<=zi&&dd(this),At=1<<--Gn,st=this.parent,_t=n,this.parent=void 0}}stop(){this.active&&(fc(this),this.onStop&&this.onStop(),this.active=!1)}}function fc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let _t=!0;const Hl=[];function On(){Hl.push(_t),_t=!1}function Rn(){const t=Hl.pop();_t=t===void 0?!0:t}function Ke(t,e,n){if(_t&&st){let s=Hi.get(t);s||Hi.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Bo()),zl(r)}}function zl(t,e){let n=!1;Gn<=zi?Kl(t)||(t.n|=At,n=!ql(t)):n=!t.has(st),n&&(t.add(st),st.deps.push(t))}function mt(t,e,n,s,r,i){const o=Hi.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&L(t))o.forEach((c,l)=>{(l==="length"||l>=s)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":L(t)?$o(n)&&a.push(o.get("length")):(a.push(o.get(jt)),gn(t)&&a.push(o.get(Wi)));break;case"delete":L(t)||(a.push(o.get(jt)),gn(t)&&a.push(o.get(Wi)));break;case"set":gn(t)&&a.push(o.get(jt));break}if(a.length===1)a[0]&&Gi(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Gi(Bo(c))}}function Gi(t,e){for(const n of L(t)?t:[...t])(n!==st||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const pd=Mo("__proto__,__v_isRef,__isVue"),Wl=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Vo)),gd=qo(),md=qo(!1,!0),yd=qo(!0),dc=vd();function vd(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=G(this);for(let i=0,o=this.length;i<o;i++)Ke(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(G)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){On();const s=G(this)[e].apply(this,n);return Rn(),s}}),t}function qo(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Md:Jl:e?Yl:Ql).get(s))return s;const o=L(s);if(!t&&o&&z(dc,r))return Reflect.get(dc,r,i);const a=Reflect.get(s,r,i);return(Vo(r)?Wl.has(r):pd(r))||(t||Ke(s,"get",r),e)?a:we(a)?!o||!$o(r)?a.value:a:fe(a)?t?Zl(a):zo(a):a}}const wd=Gl(),Ed=Gl(!0);function Gl(t=!1){return function(n,s,r,i){let o=n[s];if(as(o)&&we(o)&&!we(r))return!1;if(!t&&!as(r)&&(eu(r)||(r=G(r),o=G(o)),!L(n)&&we(o)&&!we(r)))return o.value=r,!0;const a=L(n)&&$o(s)?Number(s)<n.length:z(n,s),c=Reflect.set(n,s,r,i);return n===G(i)&&(a?os(r,o)&&mt(n,"set",s,r):mt(n,"add",s,r)),c}}function Td(t,e){const n=z(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&mt(t,"delete",e,void 0),s}function bd(t,e){const n=Reflect.has(t,e);return(!Vo(e)||!Wl.has(e))&&Ke(t,"has",e),n}function _d(t){return Ke(t,"iterate",L(t)?"length":jt),Reflect.ownKeys(t)}const Xl={get:gd,set:wd,deleteProperty:Td,has:bd,ownKeys:_d},Id={get:yd,set(t,e){return!0},deleteProperty(t,e){return!0}},Cd=Oe({},Xl,{get:md,set:Ed}),Ko=t=>t,qr=t=>Reflect.getPrototypeOf(t);function Hs(t,e,n=!1,s=!1){t=t.__v_raw;const r=G(t),i=G(e);e!==i&&!n&&Ke(r,"get",e),!n&&Ke(r,"get",i);const{has:o}=qr(r),a=s?Ko:n?Go:cs;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function zs(t,e=!1){const n=this.__v_raw,s=G(n),r=G(t);return t!==r&&!e&&Ke(s,"has",t),!e&&Ke(s,"has",r),t===r?n.has(t):n.has(t)||n.has(r)}function Ws(t,e=!1){return t=t.__v_raw,!e&&Ke(G(t),"iterate",jt),Reflect.get(t,"size",t)}function pc(t){t=G(t);const e=G(this);return qr(e).has.call(e,t)||(e.add(t),mt(e,"add",t,t)),this}function gc(t,e){e=G(e);const n=G(this),{has:s,get:r}=qr(n);let i=s.call(n,t);i||(t=G(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?os(e,o)&&mt(n,"set",t,e):mt(n,"add",t,e),this}function mc(t){const e=G(this),{has:n,get:s}=qr(e);let r=n.call(e,t);r||(t=G(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&mt(e,"delete",t,void 0),i}function yc(){const t=G(this),e=t.size!==0,n=t.clear();return e&&mt(t,"clear",void 0,void 0),n}function Gs(t,e){return function(s,r){const i=this,o=i.__v_raw,a=G(o),c=e?Ko:t?Go:cs;return!t&&Ke(a,"iterate",jt),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function Xs(t,e,n){return function(...s){const r=this.__v_raw,i=G(r),o=gn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?Ko:e?Go:cs;return!e&&Ke(i,"iterate",c?Wi:jt),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function Et(t){return function(...e){return t==="delete"?!1:this}}function Ad(){const t={get(i){return Hs(this,i)},get size(){return Ws(this)},has:zs,add:pc,set:gc,delete:mc,clear:yc,forEach:Gs(!1,!1)},e={get(i){return Hs(this,i,!1,!0)},get size(){return Ws(this)},has:zs,add:pc,set:gc,delete:mc,clear:yc,forEach:Gs(!1,!0)},n={get(i){return Hs(this,i,!0)},get size(){return Ws(this,!0)},has(i){return zs.call(this,i,!0)},add:Et("add"),set:Et("set"),delete:Et("delete"),clear:Et("clear"),forEach:Gs(!0,!1)},s={get(i){return Hs(this,i,!0,!0)},get size(){return Ws(this,!0)},has(i){return zs.call(this,i,!0)},add:Et("add"),set:Et("set"),delete:Et("delete"),clear:Et("clear"),forEach:Gs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Xs(i,!1,!1),n[i]=Xs(i,!0,!1),e[i]=Xs(i,!1,!0),s[i]=Xs(i,!0,!0)}),[t,n,e,s]}const[Sd,Nd,xd,Dd]=Ad();function Ho(t,e){const n=e?t?Dd:xd:t?Nd:Sd;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(z(n,r)&&r in s?n:s,r,i)}const kd={get:Ho(!1,!1)},Od={get:Ho(!1,!0)},Rd={get:Ho(!0,!1)},Ql=new WeakMap,Yl=new WeakMap,Jl=new WeakMap,Md=new WeakMap;function Pd(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ld(t){return t.__v_skip||!Object.isExtensible(t)?0:Pd(od(t))}function zo(t){return as(t)?t:Wo(t,!1,Xl,kd,Ql)}function Fd(t){return Wo(t,!1,Cd,Od,Yl)}function Zl(t){return Wo(t,!0,Id,Rd,Jl)}function Wo(t,e,n,s,r){if(!fe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Ld(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function mn(t){return as(t)?mn(t.__v_raw):!!(t&&t.__v_isReactive)}function as(t){return!!(t&&t.__v_isReadonly)}function eu(t){return!!(t&&t.__v_isShallow)}function tu(t){return mn(t)||as(t)}function G(t){const e=t&&t.__v_raw;return e?G(e):t}function nu(t){return ur(t,"__v_skip",!0),t}const cs=t=>fe(t)?zo(t):t,Go=t=>fe(t)?Zl(t):t;function su(t){_t&&st&&(t=G(t),zl(t.dep||(t.dep=Bo())))}function ru(t,e){t=G(t),t.dep&&Gi(t.dep)}function we(t){return!!(t&&t.__v_isRef===!0)}function KE(t){return Ud(t,!1)}function Ud(t,e){return we(t)?t:new Vd(t,e)}class Vd{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:G(e),this._value=n?e:cs(e)}get value(){return su(this),this._value}set value(e){e=this.__v_isShallow?e:G(e),os(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:cs(e),ru(this))}}function $d(t){return we(t)?t.value:t}const Bd={get:(t,e,n)=>$d(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return we(r)&&!we(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function iu(t){return mn(t)?t:new Proxy(t,Bd)}class jd{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new jo(e,()=>{this._dirty||(this._dirty=!0,ru(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=G(this);return su(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function qd(t,e,n=!1){let s,r;const i=B(t);return i?(s=t,r=Je):(s=t.get,r=t.set),new jd(s,r,i||!r,n)}Promise.resolve();function It(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Kr(i,e,n)}return r}function Ze(t,e,n,s){if(B(t)){const i=It(t,e,n,s);return i&&$l(i)&&i.catch(o=>{Kr(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Ze(t[i],e,n,s));return r}function Kr(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){It(c,null,10,[t,o,a]);return}}Kd(t,n,r,s)}function Kd(t,e,n,s=!0){console.error(t)}let hr=!1,Xi=!1;const Be=[];let ft=0;const Jn=[];let Xn=null,un=0;const Zn=[];let Tt=null,hn=0;const ou=Promise.resolve();let Xo=null,Qi=null;function Hd(t){const e=Xo||ou;return t?e.then(this?t.bind(this):t):e}function zd(t){let e=ft+1,n=Be.length;for(;e<n;){const s=e+n>>>1;ls(Be[s])<t?e=s+1:n=s}return e}function au(t){(!Be.length||!Be.includes(t,hr&&t.allowRecurse?ft+1:ft))&&t!==Qi&&(t.id==null?Be.push(t):Be.splice(zd(t.id),0,t),cu())}function cu(){!hr&&!Xi&&(Xi=!0,Xo=ou.then(hu))}function Wd(t){const e=Be.indexOf(t);e>ft&&Be.splice(e,1)}function lu(t,e,n,s){L(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),cu()}function Gd(t){lu(t,Xn,Jn,un)}function Xd(t){lu(t,Tt,Zn,hn)}function Qo(t,e=null){if(Jn.length){for(Qi=e,Xn=[...new Set(Jn)],Jn.length=0,un=0;un<Xn.length;un++)Xn[un]();Xn=null,un=0,Qi=null,Qo(t,e)}}function uu(t){if(Zn.length){const e=[...new Set(Zn)];if(Zn.length=0,Tt){Tt.push(...e);return}for(Tt=e,Tt.sort((n,s)=>ls(n)-ls(s)),hn=0;hn<Tt.length;hn++)Tt[hn]();Tt=null,hn=0}}const ls=t=>t.id==null?1/0:t.id;function hu(t){Xi=!1,hr=!0,Qo(t),Be.sort((n,s)=>ls(n)-ls(s));const e=Je;try{for(ft=0;ft<Be.length;ft++){const n=Be[ft];n&&n.active!==!1&&It(n,null,14)}}finally{ft=0,Be.length=0,uu(),hr=!1,Xo=null,(Be.length||Jn.length||Zn.length)&&hu(t)}}function Qd(t,e,...n){const s=t.vnode.props||Y;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=s[u]||Y;p?r=n.map(m=>m.trim()):f&&(r=n.map(Ki))}let a,c=s[a=Ci(e)]||s[a=Ci(rt(e))];!c&&i&&(c=s[a=Ci(kn(e))]),c&&Ze(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ze(l,t,6,r)}}function fu(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!B(t)){const c=l=>{const u=fu(l,e,!0);u&&(a=!0,Oe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(s.set(t,null),null):(L(i)?i.forEach(c=>o[c]=null):Oe(o,i),s.set(t,o),o)}function Yo(t,e){return!t||!Ur(e)?!1:(e=e.slice(2).replace(/Once$/,""),z(t,e[0].toLowerCase()+e.slice(1))||z(t,kn(e))||z(t,e))}let Ye=null,du=null;function fr(t){const e=Ye;return Ye=t,du=t&&t.type.__scopeId||null,e}function Yd(t,e=Ye,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Nc(-1);const i=fr(e),o=t(...r);return fr(i),s._d&&Nc(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function Ai(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:p,setupState:m,ctx:I,inheritAttrs:O}=t;let R,j;const ce=fr(t);try{if(n.shapeFlag&4){const ne=r||s;R=nt(u.call(ne,ne,f,i,m,p,I)),j=c}else{const ne=e;R=nt(ne.length>1?ne(i,{attrs:c,slots:a,emit:l}):ne(i,null)),j=e.props?c:Jd(c)}}catch(ne){ts.length=0,Kr(ne,t,1),R=pt(Gt)}let ae=R;if(j&&O!==!1){const ne=Object.keys(j),{shapeFlag:Re}=ae;ne.length&&Re&7&&(o&&ne.some(Fo)&&(j=Zd(j,o)),ae=us(ae,j))}return n.dirs&&(ae.dirs=ae.dirs?ae.dirs.concat(n.dirs):n.dirs),n.transition&&(ae.transition=n.transition),R=ae,fr(ce),R}const Jd=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ur(n))&&((e||(e={}))[n]=t[n]);return e},Zd=(t,e)=>{const n={};for(const s in t)(!Fo(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function ep(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?vc(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==s[p]&&!Yo(l,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?vc(s,o,l):!0:!!o;return!1}function vc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Yo(n,i))return!0}return!1}function tp({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const np=t=>t.__isSuspense;function sp(t,e){e&&e.pendingBranch?L(t)?e.effects.push(...t):e.effects.push(t):Xd(t)}function rp(t,e){if(ve){let n=ve.provides;const s=ve.parent&&ve.parent.provides;s===n&&(n=ve.provides=Object.create(s)),n[t]=e}}function Si(t,e,n=!1){const s=ve||Ye;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&B(e)?e.call(s.proxy):e}}const wc={};function Ni(t,e,n){return pu(t,e,n)}function pu(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=Y){const a=ve;let c,l=!1,u=!1;if(we(t)?(c=()=>t.value,l=eu(t)):mn(t)?(c=()=>t,s=!0):L(t)?(u=!0,l=t.some(mn),c=()=>t.map(j=>{if(we(j))return j.value;if(mn(j))return Vt(j);if(B(j))return It(j,a,2)})):B(t)?e?c=()=>It(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),Ze(t,a,3,[p])}:c=Je,e&&s){const j=c;c=()=>Vt(j())}let f,p=j=>{f=R.onStop=()=>{It(j,a,4)}};if(hs)return p=Je,e?n&&Ze(e,a,3,[c(),u?[]:void 0,p]):c(),Je;let m=u?[]:wc;const I=()=>{if(!!R.active)if(e){const j=R.run();(s||l||(u?j.some((ce,ae)=>os(ce,m[ae])):os(j,m)))&&(f&&f(),Ze(e,a,3,[j,m===wc?void 0:m,p]),m=j)}else R.run()};I.allowRecurse=!!e;let O;r==="sync"?O=I:r==="post"?O=()=>Pe(I,a&&a.suspense):O=()=>{!a||a.isMounted?Gd(I):I()};const R=new jo(c,O);return e?n?I():m=R.run():r==="post"?Pe(R.run.bind(R),a&&a.suspense):R.run(),()=>{R.stop(),a&&a.scope&&Uo(a.scope.effects,R)}}function ip(t,e,n){const s=this.proxy,r=he(t)?t.includes(".")?gu(s,t):()=>s[t]:t.bind(s,s);let i;B(e)?i=e:(i=e.handler,n=e);const o=ve;Tn(this);const a=pu(r,i.bind(s),n);return o?Tn(o):Kt(),a}function gu(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Vt(t,e){if(!fe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),we(t))Vt(t.value,e);else if(L(t))for(let n=0;n<t.length;n++)Vt(t[n],e);else if(Vr(t)||gn(t))t.forEach(n=>{Vt(n,e)});else if(jl(t))for(const n in t)Vt(t[n],e);return t}function HE(t){return B(t)?{setup:t,name:t.name}:t}const Yi=t=>!!t.type.__asyncLoader,mu=t=>t.type.__isKeepAlive;function op(t,e){yu(t,"a",e)}function ap(t,e){yu(t,"da",e)}function yu(t,e,n=ve){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Hr(e,s,n),n){let r=n.parent;for(;r&&r.parent;)mu(r.parent.vnode)&&cp(s,e,n,r),r=r.parent}}function cp(t,e,n,s){const r=Hr(e,t,s,!0);vu(()=>{Uo(s[e],r)},n)}function Hr(t,e,n=ve,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;On(),Tn(n);const a=Ze(e,n,t,o);return Kt(),Rn(),a});return s?r.unshift(i):r.push(i),i}}const vt=t=>(e,n=ve)=>(!hs||t==="sp")&&Hr(t,e,n),lp=vt("bm"),up=vt("m"),hp=vt("bu"),fp=vt("u"),dp=vt("bum"),vu=vt("um"),pp=vt("sp"),gp=vt("rtg"),mp=vt("rtc");function yp(t,e=ve){Hr("ec",t,e)}let Ji=!0;function vp(t){const e=Eu(t),n=t.proxy,s=t.ctx;Ji=!1,e.beforeCreate&&Ec(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:p,beforeUpdate:m,updated:I,activated:O,deactivated:R,beforeDestroy:j,beforeUnmount:ce,destroyed:ae,unmounted:ne,render:Re,renderTracked:ze,renderTriggered:Se,errorCaptured:We,serverPrefetch:Ve,expose:at,inheritAttrs:Ge,components:jn,directives:qs,filters:rc}=e;if(l&&wp(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const oe in o){const Z=o[oe];B(Z)&&(s[oe]=Z.bind(n))}if(r){const oe=r.call(n,n);fe(oe)&&(t.data=zo(oe))}if(Ji=!0,i)for(const oe in i){const Z=i[oe],ct=B(Z)?Z.bind(n,n):B(Z.get)?Z.get.bind(n,n):Je,bi=!B(Z)&&B(Z.set)?Z.set.bind(n):Je,qn=tg({get:ct,set:bi});Object.defineProperty(s,oe,{enumerable:!0,configurable:!0,get:()=>qn.value,set:on=>qn.value=on})}if(a)for(const oe in a)wu(a[oe],s,n,oe);if(c){const oe=B(c)?c.call(n):c;Reflect.ownKeys(oe).forEach(Z=>{rp(Z,oe[Z])})}u&&Ec(u,t,"c");function Me(oe,Z){L(Z)?Z.forEach(ct=>oe(ct.bind(n))):Z&&oe(Z.bind(n))}if(Me(lp,f),Me(up,p),Me(hp,m),Me(fp,I),Me(op,O),Me(ap,R),Me(yp,We),Me(mp,ze),Me(gp,Se),Me(dp,ce),Me(vu,ne),Me(pp,Ve),L(at))if(at.length){const oe=t.exposed||(t.exposed={});at.forEach(Z=>{Object.defineProperty(oe,Z,{get:()=>n[Z],set:ct=>n[Z]=ct})})}else t.exposed||(t.exposed={});Re&&t.render===Je&&(t.render=Re),Ge!=null&&(t.inheritAttrs=Ge),jn&&(t.components=jn),qs&&(t.directives=qs)}function wp(t,e,n=Je,s=!1){L(t)&&(t=Zi(t));for(const r in t){const i=t[r];let o;fe(i)?"default"in i?o=Si(i.from||r,i.default,!0):o=Si(i.from||r):o=Si(i),we(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Ec(t,e,n){Ze(L(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function wu(t,e,n,s){const r=s.includes(".")?gu(n,s):()=>n[s];if(he(t)){const i=e[t];B(i)&&Ni(r,i)}else if(B(t))Ni(r,t.bind(n));else if(fe(t))if(L(t))t.forEach(i=>wu(i,e,n,s));else{const i=B(t.handler)?t.handler.bind(n):e[t.handler];B(i)&&Ni(r,i,t)}}function Eu(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>dr(c,l,o,!0)),dr(c,e,o)),i.set(e,c),c}function dr(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&dr(t,i,n,!0),r&&r.forEach(o=>dr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Ep[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Ep={data:Tc,props:Pt,emits:Pt,methods:Pt,computed:Pt,beforeCreate:Ne,created:Ne,beforeMount:Ne,mounted:Ne,beforeUpdate:Ne,updated:Ne,beforeDestroy:Ne,beforeUnmount:Ne,destroyed:Ne,unmounted:Ne,activated:Ne,deactivated:Ne,errorCaptured:Ne,serverPrefetch:Ne,components:Pt,directives:Pt,watch:bp,provide:Tc,inject:Tp};function Tc(t,e){return e?t?function(){return Oe(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function Tp(t,e){return Pt(Zi(t),Zi(e))}function Zi(t){if(L(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ne(t,e){return t?[...new Set([].concat(t,e))]:e}function Pt(t,e){return t?Oe(Oe(Object.create(null),t),e):e}function bp(t,e){if(!t)return e;if(!e)return t;const n=Oe(Object.create(null),t);for(const s in e)n[s]=Ne(t[s],e[s]);return n}function _p(t,e,n,s=!1){const r={},i={};ur(i,zr,1),t.propsDefaults=Object.create(null),Tu(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Fd(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Ip(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=G(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];const m=e[p];if(c)if(z(i,p))m!==i[p]&&(i[p]=m,l=!0);else{const I=rt(p);r[I]=eo(c,a,I,m,t,!1)}else m!==i[p]&&(i[p]=m,l=!0)}}}else{Tu(t,e,r,i)&&(l=!0);let u;for(const f in a)(!e||!z(e,f)&&((u=kn(f))===f||!z(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=eo(c,a,f,void 0,t,!0)):delete r[f]);if(i!==a)for(const f in i)(!e||!z(e,f)&&!0)&&(delete i[f],l=!0)}l&&mt(t,"set","$attrs")}function Tu(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(nr(c))continue;const l=e[c];let u;r&&z(r,u=rt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Yo(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=G(n),l=a||Y;for(let u=0;u<i.length;u++){const f=i[u];n[f]=eo(r,c,f,l[f],t,!z(l,f))}}return o}function eo(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=z(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&B(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Tn(r),s=l[n]=c.call(null,e),Kt())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===kn(n))&&(s=!0))}return s}function bu(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!B(t)){const u=f=>{c=!0;const[p,m]=bu(f,e,!0);Oe(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return s.set(t,pn),pn;if(L(i))for(let u=0;u<i.length;u++){const f=rt(i[u]);bc(f)&&(o[f]=Y)}else if(i)for(const u in i){const f=rt(u);if(bc(f)){const p=i[u],m=o[f]=L(p)||B(p)?{type:p}:p;if(m){const I=Cc(Boolean,m.type),O=Cc(String,m.type);m[0]=I>-1,m[1]=O<0||I<O,(I>-1||z(m,"default"))&&a.push(f)}}}const l=[o,a];return s.set(t,l),l}function bc(t){return t[0]!=="$"}function _c(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Ic(t,e){return _c(t)===_c(e)}function Cc(t,e){return L(e)?e.findIndex(n=>Ic(n,t)):B(e)&&Ic(e,t)?0:-1}const _u=t=>t[0]==="_"||t==="$stable",Jo=t=>L(t)?t.map(nt):[nt(t)],Cp=(t,e,n)=>{const s=Yd((...r)=>Jo(e(...r)),n);return s._c=!1,s},Iu=(t,e,n)=>{const s=t._ctx;for(const r in t){if(_u(r))continue;const i=t[r];if(B(i))e[r]=Cp(r,i,s);else if(i!=null){const o=Jo(i);e[r]=()=>o}}},Cu=(t,e)=>{const n=Jo(e);t.slots.default=()=>n},Ap=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=G(e),ur(e,"_",n)):Iu(e,t.slots={})}else t.slots={},e&&Cu(t,e);ur(t.slots,zr,1)},Sp=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Y;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Oe(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Iu(e,r)),o=e}else e&&(Cu(t,e),o={default:1});if(i)for(const a in r)!_u(a)&&!(a in o)&&delete r[a]};function zE(t,e){const n=Ye;if(n===null)return t;const s=n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Y]=e[i];B(o)&&(o={mounted:o,updated:o}),o.deep&&Vt(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function Rt(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(On(),Ze(c,n,8,[t.el,a,t,e]),Rn())}}function Au(){return{app:null,config:{isNativeTag:sd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Np=0;function xp(t,e){return function(s,r=null){r!=null&&!fe(r)&&(r=null);const i=Au(),o=new Set;let a=!1;const c=i.app={_uid:Np++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:ng,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&B(l.install)?(o.add(l),l.install(c,...u)):B(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,f){if(!a){const p=pt(s,r);return p.appContext=i,u&&e?e(p,l):t(p,l,f),a=!0,c._container=l,l.__vue_app__=c,na(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function to(t,e,n,s,r=!1){if(L(t)){t.forEach((p,m)=>to(p,e&&(L(e)?e[m]:e),n,s,r));return}if(Yi(s)&&!r)return;const i=s.shapeFlag&4?na(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Y?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(he(l)?(u[l]=null,z(f,l)&&(f[l]=null)):we(l)&&(l.value=null)),B(c))It(c,a,12,[o,u]);else{const p=he(c),m=we(c);if(p||m){const I=()=>{if(t.f){const O=p?u[c]:c.value;r?L(O)&&Uo(O,i):L(O)?O.includes(i)||O.push(i):p?u[c]=[i]:(c.value=[i],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,z(f,c)&&(f[c]=o)):we(c)&&(c.value=o,t.k&&(u[t.k]=o))};o?(I.id=-1,Pe(I,n)):I()}}}const Pe=sp;function Dp(t){return kp(t)}function kp(t,e){const n=ld();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:p,setScopeId:m=Je,cloneNode:I,insertStaticContent:O}=t,R=(h,d,g,v=null,y=null,b=null,A=!1,T=null,C=!!d.dynamicChildren)=>{if(h===d)return;h&&!Hn(h,d)&&(v=Ks(h),wt(h,y,b,!0),h=null),d.patchFlag===-2&&(C=!1,d.dynamicChildren=null);const{type:w,ref:D,shapeFlag:N}=d;switch(w){case ea:j(h,d,g,v);break;case Gt:ce(h,d,g,v);break;case xi:h==null&&ae(d,g,v,A);break;case ht:qs(h,d,g,v,y,b,A,T,C);break;default:N&1?ze(h,d,g,v,y,b,A,T,C):N&6?rc(h,d,g,v,y,b,A,T,C):(N&64||N&128)&&w.process(h,d,g,v,y,b,A,T,C,an)}D!=null&&y&&to(D,h&&h.ref,b,d||h,!d)},j=(h,d,g,v)=>{if(h==null)s(d.el=a(d.children),g,v);else{const y=d.el=h.el;d.children!==h.children&&l(y,d.children)}},ce=(h,d,g,v)=>{h==null?s(d.el=c(d.children||""),g,v):d.el=h.el},ae=(h,d,g,v)=>{[h.el,h.anchor]=O(h.children,d,g,v,h.el,h.anchor)},ne=({el:h,anchor:d},g,v)=>{let y;for(;h&&h!==d;)y=p(h),s(h,g,v),h=y;s(d,g,v)},Re=({el:h,anchor:d})=>{let g;for(;h&&h!==d;)g=p(h),r(h),h=g;r(d)},ze=(h,d,g,v,y,b,A,T,C)=>{A=A||d.type==="svg",h==null?Se(d,g,v,y,b,A,T,C):at(h,d,y,b,A,T,C)},Se=(h,d,g,v,y,b,A,T)=>{let C,w;const{type:D,props:N,shapeFlag:k,transition:U,patchFlag:H,dirs:se}=h;if(h.el&&I!==void 0&&H===-1)C=h.el=I(h.el);else{if(C=h.el=o(h.type,b,N&&N.is,N),k&8?u(C,h.children):k&16&&Ve(h.children,C,null,v,y,b&&D!=="foreignObject",A,T),se&&Rt(h,null,v,"created"),N){for(const ee in N)ee!=="value"&&!nr(ee)&&i(C,ee,null,N[ee],b,h.children,v,y,lt);"value"in N&&i(C,"value",null,N.value),(w=N.onVnodeBeforeMount)&&tt(w,v,h)}We(C,h,h.scopeId,A,v)}se&&Rt(h,null,v,"beforeMount");const Q=(!y||y&&!y.pendingBranch)&&U&&!U.persisted;Q&&U.beforeEnter(C),s(C,d,g),((w=N&&N.onVnodeMounted)||Q||se)&&Pe(()=>{w&&tt(w,v,h),Q&&U.enter(C),se&&Rt(h,null,v,"mounted")},y)},We=(h,d,g,v,y)=>{if(g&&m(h,g),v)for(let b=0;b<v.length;b++)m(h,v[b]);if(y){let b=y.subTree;if(d===b){const A=y.vnode;We(h,A,A.scopeId,A.slotScopeIds,y.parent)}}},Ve=(h,d,g,v,y,b,A,T,C=0)=>{for(let w=C;w<h.length;w++){const D=h[w]=T?bt(h[w]):nt(h[w]);R(null,D,d,g,v,y,b,A,T)}},at=(h,d,g,v,y,b,A)=>{const T=d.el=h.el;let{patchFlag:C,dynamicChildren:w,dirs:D}=d;C|=h.patchFlag&16;const N=h.props||Y,k=d.props||Y;let U;g&&Mt(g,!1),(U=k.onVnodeBeforeUpdate)&&tt(U,g,d,h),D&&Rt(d,h,g,"beforeUpdate"),g&&Mt(g,!0);const H=y&&d.type!=="foreignObject";if(w?Ge(h.dynamicChildren,w,T,g,v,H,b):A||ct(h,d,T,null,g,v,H,b,!1),C>0){if(C&16)jn(T,d,N,k,g,v,y);else if(C&2&&N.class!==k.class&&i(T,"class",null,k.class,y),C&4&&i(T,"style",N.style,k.style,y),C&8){const se=d.dynamicProps;for(let Q=0;Q<se.length;Q++){const ee=se[Q],Xe=N[ee],cn=k[ee];(cn!==Xe||ee==="value")&&i(T,ee,Xe,cn,y,h.children,g,v,lt)}}C&1&&h.children!==d.children&&u(T,d.children)}else!A&&w==null&&jn(T,d,N,k,g,v,y);((U=k.onVnodeUpdated)||D)&&Pe(()=>{U&&tt(U,g,d,h),D&&Rt(d,h,g,"updated")},v)},Ge=(h,d,g,v,y,b,A)=>{for(let T=0;T<d.length;T++){const C=h[T],w=d[T],D=C.el&&(C.type===ht||!Hn(C,w)||C.shapeFlag&70)?f(C.el):g;R(C,w,D,null,v,y,b,A,!0)}},jn=(h,d,g,v,y,b,A)=>{if(g!==v){for(const T in v){if(nr(T))continue;const C=v[T],w=g[T];C!==w&&T!=="value"&&i(h,T,w,C,A,d.children,y,b,lt)}if(g!==Y)for(const T in g)!nr(T)&&!(T in v)&&i(h,T,g[T],null,A,d.children,y,b,lt);"value"in v&&i(h,"value",g.value,v.value)}},qs=(h,d,g,v,y,b,A,T,C)=>{const w=d.el=h?h.el:a(""),D=d.anchor=h?h.anchor:a("");let{patchFlag:N,dynamicChildren:k,slotScopeIds:U}=d;U&&(T=T?T.concat(U):U),h==null?(s(w,g,v),s(D,g,v),Ve(d.children,g,D,y,b,A,T,C)):N>0&&N&64&&k&&h.dynamicChildren?(Ge(h.dynamicChildren,k,g,y,b,A,T),(d.key!=null||y&&d===y.subTree)&&Zo(h,d,!0)):ct(h,d,g,D,y,b,A,T,C)},rc=(h,d,g,v,y,b,A,T,C)=>{d.slotScopeIds=T,h==null?d.shapeFlag&512?y.ctx.activate(d,g,v,A,C):Ti(d,g,v,y,b,A,C):Me(h,d,C)},Ti=(h,d,g,v,y,b,A)=>{const T=h.component=Gp(h,v,y);if(mu(h)&&(T.ctx.renderer=an),Xp(T),T.asyncDep){if(y&&y.registerDep(T,oe),!h.el){const C=T.subTree=pt(Gt);ce(null,C,d,g)}return}oe(T,h,d,g,y,b,A)},Me=(h,d,g)=>{const v=d.component=h.component;if(ep(h,d,g))if(v.asyncDep&&!v.asyncResolved){Z(v,d,g);return}else v.next=d,Wd(v.update),v.update();else d.component=h.component,d.el=h.el,v.vnode=d},oe=(h,d,g,v,y,b,A)=>{const T=()=>{if(h.isMounted){let{next:D,bu:N,u:k,parent:U,vnode:H}=h,se=D,Q;Mt(h,!1),D?(D.el=H.el,Z(h,D,A)):D=H,N&&sr(N),(Q=D.props&&D.props.onVnodeBeforeUpdate)&&tt(Q,U,D,H),Mt(h,!0);const ee=Ai(h),Xe=h.subTree;h.subTree=ee,R(Xe,ee,f(Xe.el),Ks(Xe),h,y,b),D.el=ee.el,se===null&&tp(h,ee.el),k&&Pe(k,y),(Q=D.props&&D.props.onVnodeUpdated)&&Pe(()=>tt(Q,U,D,H),y)}else{let D;const{el:N,props:k}=d,{bm:U,m:H,parent:se}=h,Q=Yi(d);if(Mt(h,!1),U&&sr(U),!Q&&(D=k&&k.onVnodeBeforeMount)&&tt(D,se,d),Mt(h,!0),N&&Ii){const ee=()=>{h.subTree=Ai(h),Ii(N,h.subTree,h,y,null)};Q?d.type.__asyncLoader().then(()=>!h.isUnmounted&&ee()):ee()}else{const ee=h.subTree=Ai(h);R(null,ee,g,v,h,y,b),d.el=ee.el}if(H&&Pe(H,y),!Q&&(D=k&&k.onVnodeMounted)){const ee=d;Pe(()=>tt(D,se,ee),y)}d.shapeFlag&256&&h.a&&Pe(h.a,y),h.isMounted=!0,d=g=v=null}},C=h.effect=new jo(T,()=>au(h.update),h.scope),w=h.update=C.run.bind(C);w.id=h.uid,Mt(h,!0),w()},Z=(h,d,g)=>{d.component=h;const v=h.vnode.props;h.vnode=d,h.next=null,Ip(h,d.props,v,g),Sp(h,d.children,g),On(),Qo(void 0,h.update),Rn()},ct=(h,d,g,v,y,b,A,T,C=!1)=>{const w=h&&h.children,D=h?h.shapeFlag:0,N=d.children,{patchFlag:k,shapeFlag:U}=d;if(k>0){if(k&128){qn(w,N,g,v,y,b,A,T,C);return}else if(k&256){bi(w,N,g,v,y,b,A,T,C);return}}U&8?(D&16&&lt(w,y,b),N!==w&&u(g,N)):D&16?U&16?qn(w,N,g,v,y,b,A,T,C):lt(w,y,b,!0):(D&8&&u(g,""),U&16&&Ve(N,g,v,y,b,A,T,C))},bi=(h,d,g,v,y,b,A,T,C)=>{h=h||pn,d=d||pn;const w=h.length,D=d.length,N=Math.min(w,D);let k;for(k=0;k<N;k++){const U=d[k]=C?bt(d[k]):nt(d[k]);R(h[k],U,g,null,y,b,A,T,C)}w>D?lt(h,y,b,!0,!1,N):Ve(d,g,v,y,b,A,T,C,N)},qn=(h,d,g,v,y,b,A,T,C)=>{let w=0;const D=d.length;let N=h.length-1,k=D-1;for(;w<=N&&w<=k;){const U=h[w],H=d[w]=C?bt(d[w]):nt(d[w]);if(Hn(U,H))R(U,H,g,null,y,b,A,T,C);else break;w++}for(;w<=N&&w<=k;){const U=h[N],H=d[k]=C?bt(d[k]):nt(d[k]);if(Hn(U,H))R(U,H,g,null,y,b,A,T,C);else break;N--,k--}if(w>N){if(w<=k){const U=k+1,H=U<D?d[U].el:v;for(;w<=k;)R(null,d[w]=C?bt(d[w]):nt(d[w]),g,H,y,b,A,T,C),w++}}else if(w>k)for(;w<=N;)wt(h[w],y,b,!0),w++;else{const U=w,H=w,se=new Map;for(w=H;w<=k;w++){const $e=d[w]=C?bt(d[w]):nt(d[w]);$e.key!=null&&se.set($e.key,w)}let Q,ee=0;const Xe=k-H+1;let cn=!1,ac=0;const Kn=new Array(Xe);for(w=0;w<Xe;w++)Kn[w]=0;for(w=U;w<=N;w++){const $e=h[w];if(ee>=Xe){wt($e,y,b,!0);continue}let et;if($e.key!=null)et=se.get($e.key);else for(Q=H;Q<=k;Q++)if(Kn[Q-H]===0&&Hn($e,d[Q])){et=Q;break}et===void 0?wt($e,y,b,!0):(Kn[et-H]=w+1,et>=ac?ac=et:cn=!0,R($e,d[et],g,null,y,b,A,T,C),ee++)}const cc=cn?Op(Kn):pn;for(Q=cc.length-1,w=Xe-1;w>=0;w--){const $e=H+w,et=d[$e],lc=$e+1<D?d[$e+1].el:v;Kn[w]===0?R(null,et,g,lc,y,b,A,T,C):cn&&(Q<0||w!==cc[Q]?on(et,g,lc,2):Q--)}}},on=(h,d,g,v,y=null)=>{const{el:b,type:A,transition:T,children:C,shapeFlag:w}=h;if(w&6){on(h.component.subTree,d,g,v);return}if(w&128){h.suspense.move(d,g,v);return}if(w&64){A.move(h,d,g,an);return}if(A===ht){s(b,d,g);for(let N=0;N<C.length;N++)on(C[N],d,g,v);s(h.anchor,d,g);return}if(A===xi){ne(h,d,g);return}if(v!==2&&w&1&&T)if(v===0)T.beforeEnter(b),s(b,d,g),Pe(()=>T.enter(b),y);else{const{leave:N,delayLeave:k,afterLeave:U}=T,H=()=>s(b,d,g),se=()=>{N(b,()=>{H(),U&&U()})};k?k(b,H,se):se()}else s(b,d,g)},wt=(h,d,g,v=!1,y=!1)=>{const{type:b,props:A,ref:T,children:C,dynamicChildren:w,shapeFlag:D,patchFlag:N,dirs:k}=h;if(T!=null&&to(T,null,g,h,!0),D&256){d.ctx.deactivate(h);return}const U=D&1&&k,H=!Yi(h);let se;if(H&&(se=A&&A.onVnodeBeforeUnmount)&&tt(se,d,h),D&6)Qf(h.component,g,v);else{if(D&128){h.suspense.unmount(g,v);return}U&&Rt(h,null,d,"beforeUnmount"),D&64?h.type.remove(h,d,g,y,an,v):w&&(b!==ht||N>0&&N&64)?lt(w,d,g,!1,!0):(b===ht&&N&384||!y&&D&16)&&lt(C,d,g),v&&ic(h)}(H&&(se=A&&A.onVnodeUnmounted)||U)&&Pe(()=>{se&&tt(se,d,h),U&&Rt(h,null,d,"unmounted")},g)},ic=h=>{const{type:d,el:g,anchor:v,transition:y}=h;if(d===ht){Xf(g,v);return}if(d===xi){Re(h);return}const b=()=>{r(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(h.shapeFlag&1&&y&&!y.persisted){const{leave:A,delayLeave:T}=y,C=()=>A(g,b);T?T(h.el,b,C):C()}else b()},Xf=(h,d)=>{let g;for(;h!==d;)g=p(h),r(h),h=g;r(d)},Qf=(h,d,g)=>{const{bum:v,scope:y,update:b,subTree:A,um:T}=h;v&&sr(v),y.stop(),b&&(b.active=!1,wt(A,h,d,g)),T&&Pe(T,d),Pe(()=>{h.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},lt=(h,d,g,v=!1,y=!1,b=0)=>{for(let A=b;A<h.length;A++)wt(h[A],d,g,v,y)},Ks=h=>h.shapeFlag&6?Ks(h.component.subTree):h.shapeFlag&128?h.suspense.next():p(h.anchor||h.el),oc=(h,d,g)=>{h==null?d._vnode&&wt(d._vnode,null,null,!0):R(d._vnode||null,h,d,null,null,null,g),uu(),d._vnode=h},an={p:R,um:wt,m:on,r:ic,mt:Ti,mc:Ve,pc:ct,pbc:Ge,n:Ks,o:t};let _i,Ii;return e&&([_i,Ii]=e(an)),{render:oc,hydrate:_i,createApp:xp(oc,_i)}}function Mt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Zo(t,e,n=!1){const s=t.children,r=e.children;if(L(s)&&L(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=bt(r[i]),a.el=o.el),n||Zo(o,a))}}function Op(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Rp=t=>t.__isTeleport,es=t=>t&&(t.disabled||t.disabled===""),Ac=t=>typeof SVGElement!="undefined"&&t instanceof SVGElement,no=(t,e)=>{const n=t&&t.to;return he(n)?e?e(n):null:n},Mp={__isTeleport:!0,process(t,e,n,s,r,i,o,a,c,l){const{mc:u,pc:f,pbc:p,o:{insert:m,querySelector:I,createText:O,createComment:R}}=l,j=es(e.props);let{shapeFlag:ce,children:ae,dynamicChildren:ne}=e;if(t==null){const Re=e.el=O(""),ze=e.anchor=O("");m(Re,n,s),m(ze,n,s);const Se=e.target=no(e.props,I),We=e.targetAnchor=O("");Se&&(m(We,Se),o=o||Ac(Se));const Ve=(at,Ge)=>{ce&16&&u(ae,at,Ge,r,i,o,a,c)};j?Ve(n,ze):Se&&Ve(Se,We)}else{e.el=t.el;const Re=e.anchor=t.anchor,ze=e.target=t.target,Se=e.targetAnchor=t.targetAnchor,We=es(t.props),Ve=We?n:ze,at=We?Re:Se;if(o=o||Ac(ze),ne?(p(t.dynamicChildren,ne,Ve,r,i,o,a),Zo(t,e,!0)):c||f(t,e,Ve,at,r,i,o,a,!1),j)We||Qs(e,n,Re,l,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const Ge=e.target=no(e.props,I);Ge&&Qs(e,Ge,null,l,0)}else We&&Qs(e,ze,Se,l,1)}},remove(t,e,n,s,{um:r,o:{remove:i}},o){const{shapeFlag:a,children:c,anchor:l,targetAnchor:u,target:f,props:p}=t;if(f&&i(u),(o||!es(p))&&(i(l),a&16))for(let m=0;m<c.length;m++){const I=c[m];r(I,e,n,!0,!!I.dynamicChildren)}},move:Qs,hydrate:Pp};function Qs(t,e,n,{o:{insert:s},m:r},i=2){i===0&&s(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=t,f=i===2;if(f&&s(o,e,n),(!f||es(u))&&c&16)for(let p=0;p<l.length;p++)r(l[p],e,n,2);f&&s(a,e,n)}function Pp(t,e,n,s,r,i,{o:{nextSibling:o,parentNode:a,querySelector:c}},l){const u=e.target=no(e.props,c);if(u){const f=u._lpa||u.firstChild;e.shapeFlag&16&&(es(e.props)?(e.anchor=l(o(t),e,a(t),n,s,r,i),e.targetAnchor=f):(e.anchor=o(t),e.targetAnchor=l(f,e,u,n,s,r,i)),u._lpa=e.targetAnchor&&o(e.targetAnchor))}return e.anchor&&o(e.anchor)}const WE=Mp,Su="components",Nu=Symbol();function GE(t){return he(t)?Lp(Su,t,!1)||t:t||Nu}function Lp(t,e,n=!0,s=!1){const r=Ye||ve;if(r){const i=r.type;if(t===Su){const a=Zp(i);if(a&&(a===e||a===rt(e)||a===jr(rt(e))))return i}const o=Sc(r[t]||i[t],e)||Sc(r.appContext[t],e);return!o&&s?i:o}}function Sc(t,e){return t&&(t[e]||t[rt(e)]||t[jr(rt(e))])}const ht=Symbol(void 0),ea=Symbol(void 0),Gt=Symbol(void 0),xi=Symbol(void 0),ts=[];let qt=null;function Fp(t=!1){ts.push(qt=t?null:[])}function Up(){ts.pop(),qt=ts[ts.length-1]||null}let pr=1;function Nc(t){pr+=t}function xu(t){return t.dynamicChildren=pr>0?qt||pn:null,Up(),pr>0&&qt&&qt.push(t),t}function XE(t,e,n,s,r,i){return xu(ku(t,e,n,s,r,i,!0))}function Vp(t,e,n,s,r){return xu(pt(t,e,n,s,r,!0))}function $p(t){return t?t.__v_isVNode===!0:!1}function Hn(t,e){return t.type===e.type&&t.key===e.key}const zr="__vInternal",Du=({key:t})=>t!=null?t:null,rr=({ref:t,ref_key:e,ref_for:n})=>t!=null?he(t)||we(t)||B(t)?{i:Ye,r:t,k:e,f:!!n}:t:null;function ku(t,e=null,n=null,s=0,r=null,i=t===ht?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Du(e),ref:e&&rr(e),scopeId:du,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(ta(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=he(n)?8:16),pr>0&&!o&&qt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&qt.push(c),c}const pt=Bp;function Bp(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Nu)&&(t=Gt),$p(t)){const a=us(t,e,!0);return n&&ta(a,n),a}if(eg(t)&&(t=t.__vccOpts),e){e=jp(e);let{class:a,style:c}=e;a&&!he(a)&&(e.class=Lo(a)),fe(c)&&(tu(c)&&!L(c)&&(c=Oe({},c)),e.style=Po(c))}const o=he(t)?1:np(t)?128:Rp(t)?64:fe(t)?4:B(t)?2:0;return ku(t,e,n,s,r,o,i,!0)}function jp(t){return t?tu(t)||zr in t?Oe({},t):t:null}function us(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Kp(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Du(a),ref:e&&e.ref?n&&r?L(r)?r.concat(rr(e)):[r,rr(e)]:rr(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ht?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&us(t.ssContent),ssFallback:t.ssFallback&&us(t.ssFallback),el:t.el,anchor:t.anchor}}function qp(t=" ",e=0){return pt(ea,null,t,e)}function QE(t="",e=!1){return e?(Fp(),Vp(Gt,null,t)):pt(Gt,null,t)}function nt(t){return t==null||typeof t=="boolean"?pt(Gt):L(t)?pt(ht,null,t.slice()):typeof t=="object"?bt(t):pt(ea,null,String(t))}function bt(t){return t.el===null||t.memo?t:us(t)}function ta(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(L(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),ta(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(zr in e)?e._ctx=Ye:r===3&&Ye&&(Ye.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:Ye},n=32):(e=String(e),s&64?(n=16,e=[qp(e)]):n=8);t.children=e,t.shapeFlag|=n}function Kp(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Lo([e.class,s.class]));else if(r==="style")e.style=Po([e.style,s.style]);else if(Ur(r)){const i=e[r],o=s[r];o&&i!==o&&!(L(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function tt(t,e,n,s=null){Ze(t,e,7,[n,s])}function YE(t,e,n,s){let r;const i=n&&n[s];if(L(t)||he(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(fe(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const so=t=>t?Ou(t)?na(t)||t.proxy:so(t.parent):null,gr=Oe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>so(t.parent),$root:t=>so(t.root),$emit:t=>t.emit,$options:t=>Eu(t),$forceUpdate:t=>()=>au(t.update),$nextTick:t=>Hd.bind(t.proxy),$watch:t=>ip.bind(t)}),Hp={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(s!==Y&&z(s,e))return o[e]=1,s[e];if(r!==Y&&z(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&z(l,e))return o[e]=3,i[e];if(n!==Y&&z(n,e))return o[e]=4,n[e];Ji&&(o[e]=0)}}const u=gr[e];let f,p;if(u)return e==="$attrs"&&Ke(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==Y&&z(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,z(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return r!==Y&&z(r,e)?(r[e]=n,!0):s!==Y&&z(s,e)?(s[e]=n,!0):z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==Y&&z(t,o)||e!==Y&&z(e,o)||(a=i[0])&&z(a,o)||z(s,o)||z(gr,o)||z(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?this.set(t,e,n.get(),null):n.value!=null&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},zp=Au();let Wp=0;function Gp(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||zp,i={uid:Wp++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new ud(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bu(s,r),emitsOptions:fu(s,r),emit:null,emitted:null,propsDefaults:Y,inheritAttrs:s.inheritAttrs,ctx:Y,data:Y,props:Y,attrs:Y,slots:Y,refs:Y,setupState:Y,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Qd.bind(null,i),t.ce&&t.ce(i),i}let ve=null;const Tn=t=>{ve=t,t.scope.on()},Kt=()=>{ve&&ve.scope.off(),ve=null};function Ou(t){return t.vnode.shapeFlag&4}let hs=!1;function Xp(t,e=!1){hs=e;const{props:n,children:s}=t.vnode,r=Ou(t);_p(t,n,r,e),Ap(t,s);const i=r?Qp(t,e):void 0;return hs=!1,i}function Qp(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=nu(new Proxy(t.ctx,Hp));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Jp(t):null;Tn(t),On();const i=It(s,t,0,[t.props,r]);if(Rn(),Kt(),$l(i)){if(i.then(Kt,Kt),e)return i.then(o=>{xc(t,o,e)}).catch(o=>{Kr(o,t,0)});t.asyncDep=i}else xc(t,i,e)}else Ru(t,e)}function xc(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:fe(e)&&(t.setupState=iu(e)),Ru(t,n)}let Dc;function Ru(t,e,n){const s=t.type;if(!t.render){if(!e&&Dc&&!s.render){const r=s.template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Oe(Oe({isCustomElement:i,delimiters:a},o),c);s.render=Dc(r,l)}}t.render=s.render||Je}Tn(t),On(),vp(t),Rn(),Kt()}function Yp(t){return new Proxy(t.attrs,{get(e,n){return Ke(t,"get","$attrs"),e[n]}})}function Jp(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Yp(t))},slots:t.slots,emit:t.emit,expose:e}}function na(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(iu(nu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in gr)return gr[n](t)}}))}function Zp(t){return B(t)&&t.displayName||t.name}function eg(t){return B(t)&&"__vccOpts"in t}const tg=(t,e)=>qd(t,e,hs),ng="3.2.31",sg="http://www.w3.org/2000/svg",Ft=typeof document!="undefined"?document:null,kc=Ft&&Ft.createElement("template"),rg={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Ft.createElementNS(sg,t):Ft.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Ft.createTextNode(t),createComment:t=>Ft.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ft.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{kc.innerHTML=s?`<svg>${t}</svg>`:t;const a=kc.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function ig(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function og(t,e,n){const s=t.style,r=he(n);if(n&&!r){for(const i in n)ro(s,i,n[i]);if(e&&!he(e))for(const i in e)n[i]==null&&ro(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Oc=/\s*!important$/;function ro(t,e,n){if(L(n))n.forEach(s=>ro(t,e,s));else if(e.startsWith("--"))t.setProperty(e,n);else{const s=ag(t,e);Oc.test(n)?t.setProperty(kn(s),n.replace(Oc,""),"important"):t[s]=n}}const Rc=["Webkit","Moz","ms"],Di={};function ag(t,e){const n=Di[e];if(n)return n;let s=rt(e);if(s!=="filter"&&s in t)return Di[e]=s;s=jr(s);for(let r=0;r<Rc.length;r++){const i=Rc[r]+s;if(i in t)return Di[e]=i}return e}const Mc="http://www.w3.org/1999/xlink";function cg(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Mc,e.slice(6,e.length)):t.setAttributeNS(Mc,e,n);else{const i=Jf(e);n==null||i&&!Fl(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function lg(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=Fl(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let mr=Date.now,Mu=!1;if(typeof window!="undefined"){mr()>document.createEvent("Event").timeStamp&&(mr=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);Mu=!!(t&&Number(t[1])<=53)}let io=0;const ug=Promise.resolve(),hg=()=>{io=0},fg=()=>io||(ug.then(hg),io=mr());function Ut(t,e,n,s){t.addEventListener(e,n,s)}function dg(t,e,n,s){t.removeEventListener(e,n,s)}function pg(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=gg(e);if(s){const l=i[e]=mg(s,r);Ut(t,a,l,c)}else o&&(dg(t,a,o,c),i[e]=void 0)}}const Pc=/(?:Once|Passive|Capture)$/;function gg(t){let e;if(Pc.test(t)){e={};let n;for(;n=t.match(Pc);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[kn(t.slice(2)),e]}function mg(t,e){const n=s=>{const r=s.timeStamp||mr();(Mu||r>=n.attached-1)&&Ze(yg(s,n.value),e,5,[s])};return n.value=t,n.attached=fg(),n}function yg(t,e){if(L(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Lc=/^on[a-z]/,vg=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?ig(t,s,r):e==="style"?og(t,n,s):Ur(e)?Fo(e)||pg(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):wg(t,e,s,r))?lg(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),cg(t,e,s,r))};function wg(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Lc.test(e)&&B(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Lc.test(e)&&he(n)?!1:e in t}const yr=t=>{const e=t.props["onUpdate:modelValue"];return L(e)?n=>sr(e,n):e};function Eg(t){t.target.composing=!0}function Fc(t){const e=t.target;e.composing&&(e.composing=!1,Tg(e,"input"))}function Tg(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const JE={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=yr(r);const i=s||r.props&&r.props.type==="number";Ut(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=Ki(a)),t._assign(a)}),n&&Ut(t,"change",()=>{t.value=t.value.trim()}),e||(Ut(t,"compositionstart",Eg),Ut(t,"compositionend",Fc),Ut(t,"change",Fc))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=yr(i),t.composing||document.activeElement===t&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Ki(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},ZE={deep:!0,created(t,e,n){t._assign=yr(n),Ut(t,"change",()=>{const s=t._modelValue,r=bg(t),i=t.checked,o=t._assign;if(L(s)){const a=Ul(s,r),c=a!==-1;if(i&&!c)o(s.concat(r));else if(!i&&c){const l=[...s];l.splice(a,1),o(l)}}else if(Vr(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(Pu(t,i))})},mounted:Uc,beforeUpdate(t,e,n){t._assign=yr(n),Uc(t,e,n)}};function Uc(t,{value:e,oldValue:n},s){t._modelValue=e,L(e)?t.checked=Ul(e,s.props.value)>-1:Vr(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=Fr(e,Pu(t,!0)))}function bg(t){return"_value"in t?t._value:t.value}function Pu(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const e0={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):zn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),zn(t,!0),s.enter(t)):s.leave(t,()=>{zn(t,!1)}):zn(t,e))},beforeUnmount(t,{value:e}){zn(t,e)}};function zn(t,e){t.style.display=e?t._vod:"none"}const _g=Oe({patchProp:vg},rg);let Vc;function Ig(){return Vc||(Vc=Dp(_g))}const t0=(...t)=>{const e=Ig().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Cg(s);if(!r)return;const i=e._component;!B(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Cg(t){return he(t)?document.querySelector(t):t}/**
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
 */const Lu=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Ag=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Sg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(p=64)),s.push(n[u],n[f],n[p],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Lu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ag(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||f==null)throw Error();const p=i<<2|a>>4;if(s.push(p),l!==64){const m=a<<4&240|l>>2;if(s.push(m),f!==64){const I=l<<6&192|f;s.push(I)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Fu=function(t){const e=Lu(t);return Sg.encodeByteArray(e,!0)};/**
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
 */class Ng{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Wr(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xg(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Wr())}function Dg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function kg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Og(){return Wr().indexOf("Electron/")>=0}function Rg(){const t=Wr();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Mg(){return Wr().indexOf("MSAppHost/")>=0}function Pg(){return typeof indexedDB=="object"}function Lg(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Fg="FirebaseError";class Gr extends Error{constructor(e,n,s){super(n);this.code=e,this.customData=s,this.name=Fg,Object.setPrototypeOf(this,Gr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Uu.prototype.create)}}class Uu{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Ug(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Gr(r,a,s)}}function Ug(t,e){return t.replace(Vg,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Vg=/\{\$([^}]+)}/g;function oo(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if($c(i)&&$c(o)){if(!oo(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function $c(t){return t!==null&&typeof t=="object"}/**
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
 */function bn(t){return t&&t._delegate?t._delegate:t}class fs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Lt="[DEFAULT]";/**
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
 */class $g{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ng;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jg(e))try{this.getOrInitializeService({instanceIdentifier:Lt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Lt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Lt){return this.instances.has(e)}getOptions(e=Lt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Bg(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Lt){return this.component?this.component.multipleInstances?e:Lt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bg(t){return t===Lt?void 0:t}function jg(t){return t.instantiationMode==="EAGER"}/**
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
 */class qg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $g(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var W;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(W||(W={}));const Kg={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},Hg=W.INFO,zg={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},Wg=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=zg[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vu{constructor(e){this.name=e,this._logLevel=Hg,this._logHandler=Wg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Kg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}function Gg(t){return Array.prototype.slice.call(t)}function $u(t){return new Promise(function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function sa(t,e,n){var s,r=new Promise(function(i,o){s=t[e].apply(t,n),$u(s).then(i,o)});return r.request=s,r}function Xg(t,e,n){var s=sa(t,e,n);return s.then(function(r){if(!!r)return new ds(r,s.request)})}function Mn(t,e,n){n.forEach(function(s){Object.defineProperty(t.prototype,s,{get:function(){return this[e][s]},set:function(r){this[e][s]=r}})})}function ra(t,e,n,s){s.forEach(function(r){r in n.prototype&&(t.prototype[r]=function(){return sa(this[e],r,arguments)})})}function Xr(t,e,n,s){s.forEach(function(r){r in n.prototype&&(t.prototype[r]=function(){return this[e][r].apply(this[e],arguments)})})}function Bu(t,e,n,s){s.forEach(function(r){r in n.prototype&&(t.prototype[r]=function(){return Xg(this[e],r,arguments)})})}function nn(t){this._index=t}Mn(nn,"_index",["name","keyPath","multiEntry","unique"]);ra(nn,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]);Bu(nn,"_index",IDBIndex,["openCursor","openKeyCursor"]);function ds(t,e){this._cursor=t,this._request=e}Mn(ds,"_cursor",["direction","key","primaryKey","value"]);ra(ds,"_cursor",IDBCursor,["update","delete"]);["advance","continue","continuePrimaryKey"].forEach(function(t){t in IDBCursor.prototype&&(ds.prototype[t]=function(){var e=this,n=arguments;return Promise.resolve().then(function(){return e._cursor[t].apply(e._cursor,n),$u(e._request).then(function(s){if(!!s)return new ds(s,e._request)})})})});function ot(t){this._store=t}ot.prototype.createIndex=function(){return new nn(this._store.createIndex.apply(this._store,arguments))};ot.prototype.index=function(){return new nn(this._store.index.apply(this._store,arguments))};Mn(ot,"_store",["name","keyPath","indexNames","autoIncrement"]);ra(ot,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]);Bu(ot,"_store",IDBObjectStore,["openCursor","openKeyCursor"]);Xr(ot,"_store",IDBObjectStore,["deleteIndex"]);function As(t){this._tx=t,this.complete=new Promise(function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}})}As.prototype.objectStore=function(){return new ot(this._tx.objectStore.apply(this._tx,arguments))};Mn(As,"_tx",["objectStoreNames","mode"]);Xr(As,"_tx",IDBTransaction,["abort"]);function Qr(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new As(n)}Qr.prototype.createObjectStore=function(){return new ot(this._db.createObjectStore.apply(this._db,arguments))};Mn(Qr,"_db",["name","version","objectStoreNames"]);Xr(Qr,"_db",IDBDatabase,["deleteObjectStore","close"]);function Yr(t){this._db=t}Yr.prototype.transaction=function(){return new As(this._db.transaction.apply(this._db,arguments))};Mn(Yr,"_db",["name","version","objectStoreNames"]);Xr(Yr,"_db",IDBDatabase,["close"]);["openCursor","openKeyCursor"].forEach(function(t){[ot,nn].forEach(function(e){t in e.prototype&&(e.prototype[t.replace("open","iterate")]=function(){var n=Gg(arguments),s=n[n.length-1],r=this._store||this._index,i=r[t].apply(r,n.slice(0,-1));i.onsuccess=function(){s(i.result)}})})});[nn,ot].forEach(function(t){t.prototype.getAll||(t.prototype.getAll=function(e,n){var s=this,r=[];return new Promise(function(i){s.iterateCursor(e,function(o){if(!o){i(r);return}if(r.push(o.value),n!==void 0&&r.length==n){i(r);return}o.continue()})})})});function Qg(t,e,n){var s=sa(indexedDB,"open",[t,e]),r=s.request;return r&&(r.onupgradeneeded=function(i){n&&n(new Qr(r.result,i.oldVersion,r.transaction))}),s.then(function(i){return new Yr(i)})}/**
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
 */class Yg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Jg(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Jg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ao="@firebase/app",Bc="0.7.18";/**
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
 */const ia=new Vu("@firebase/app"),Zg="@firebase/app-compat",em="@firebase/analytics-compat",tm="@firebase/analytics",nm="@firebase/app-check-compat",sm="@firebase/app-check",rm="@firebase/auth",im="@firebase/auth-compat",om="@firebase/database",am="@firebase/database-compat",cm="@firebase/functions",lm="@firebase/functions-compat",um="@firebase/installations",hm="@firebase/installations-compat",fm="@firebase/messaging",dm="@firebase/messaging-compat",pm="@firebase/performance",gm="@firebase/performance-compat",mm="@firebase/remote-config",ym="@firebase/remote-config-compat",vm="@firebase/storage",wm="@firebase/storage-compat",Em="@firebase/firestore",Tm="@firebase/firestore-compat",bm="firebase",_m="9.6.8";/**
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
 */const ju="[DEFAULT]",Im={[ao]:"fire-core",[Zg]:"fire-core-compat",[tm]:"fire-analytics",[em]:"fire-analytics-compat",[sm]:"fire-app-check",[nm]:"fire-app-check-compat",[rm]:"fire-auth",[im]:"fire-auth-compat",[om]:"fire-rtdb",[am]:"fire-rtdb-compat",[cm]:"fire-fn",[lm]:"fire-fn-compat",[um]:"fire-iid",[hm]:"fire-iid-compat",[fm]:"fire-fcm",[dm]:"fire-fcm-compat",[pm]:"fire-perf",[gm]:"fire-perf-compat",[mm]:"fire-rc",[ym]:"fire-rc-compat",[vm]:"fire-gcs",[wm]:"fire-gcs-compat",[Em]:"fire-fst",[Tm]:"fire-fst-compat","fire-js":"fire-js",[bm]:"fire-js-all"};/**
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
 */const vr=new Map,co=new Map;function Cm(t,e){try{t.container.addComponent(e)}catch(n){ia.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function wr(t){const e=t.name;if(co.has(e))return ia.debug(`There were multiple attempts to register component ${e}.`),!1;co.set(e,t);for(const n of vr.values())Cm(n,t);return!0}function Am(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Sm={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},St=new Uu("app","Firebase",Sm);/**
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
 */class Nm{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new fs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw St.create("app-deleted",{appName:this._name})}}/**
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
 */const xm=_m;function n0(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:ju,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw St.create("bad-app-name",{appName:String(s)});const r=vr.get(s);if(r){if(oo(t,r.options)&&oo(n,r.config))return r;throw St.create("duplicate-app",{appName:s})}const i=new qg(s);for(const a of co.values())i.addComponent(a);const o=new Nm(t,n,i);return vr.set(s,o),o}function Dm(t=ju){const e=vr.get(t);if(!e)throw St.create("no-app",{appName:t});return e}function yn(t,e,n){var s;let r=(s=Im[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ia.warn(a.join(" "));return}wr(new fs(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const km="firebase-heartbeat-database",Om=1,Xt="firebase-heartbeat-store";let ki=null;function oa(){return ki||(ki=Qg(km,Om,t=>{switch(t.oldVersion){case 0:t.createObjectStore(Xt)}}).catch(t=>{throw St.create("storage-open",{originalErrorMessage:t.message})})),ki}async function Rm(t){try{return(await oa()).transaction(Xt).objectStore(Xt).get(aa(t))}catch(e){throw St.create("storage-get",{originalErrorMessage:e.message})}}async function Oi(t,e){try{const s=(await oa()).transaction(Xt,"readwrite");return await s.objectStore(Xt).put(e,aa(t)),s.complete}catch(n){throw St.create("storage-set",{originalErrorMessage:n.message})}}async function Mm(t){try{const n=(await oa()).transaction(Xt,"readwrite");return await n.objectStore(Xt).delete(aa(t)),n.complete}catch(e){throw St.create("storage-delete",{originalErrorMessage:e.message})}}function aa(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Pm=1024,Lm=30*24*60*60*1e3;class Fm{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $m(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Um();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!this._heartbeatsCache.some(r=>r.date===s))return this._heartbeatsCache.push({date:s,userAgent:n}),this._heartbeatsCache=this._heartbeatsCache.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Lm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null)return"";const{heartbeatsToSend:e,unsentEntries:n}=Vm(this._heartbeatsCache),s=Fu(JSON.stringify({version:2,heartbeats:e}));return n.length>0?(this._heartbeatsCache=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache=null,this._storage.deleteAll()),s}}function Um(){return new Date().toISOString().substring(0,10)}function Vm(t,e=Pm){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.userAgent===r.userAgent);if(i){if(i.dates.push(r.date),jc(n)>e){i.dates.pop();break}}else if(n.push({userAgent:r.userAgent,dates:[r.date]}),jc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class $m{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pg()?Lg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Rm(this.app);return(n==null?void 0:n.heartbeats)||[]}else return[]}async overwrite(e){if(await this._canUseIndexedDBPromise)return Oi(this.app,{heartbeats:e})}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Oi(this.app,{heartbeats:[...s,...e]})}else return}async delete(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Oi(this.app,{heartbeats:s.filter(r=>!e.includes(r))})}else return}async deleteAll(){if(await this._canUseIndexedDBPromise)return Mm(this.app)}}function jc(t){return Fu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Bm(t){wr(new fs("platform-logger",e=>new Yg(e),"PRIVATE")),wr(new fs("heartbeat",e=>new Fm(e),"PRIVATE")),yn(ao,Bc,t),yn(ao,Bc,"esm2017"),yn("fire-js","")}Bm("");var jm="firebase",qm="9.6.8";/**
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
 */yn(jm,qm,"app");var Km=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},S,ca=ca||{},F=Km||self;function Er(){}function lo(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ss(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Hm(t){return Object.prototype.hasOwnProperty.call(t,Ri)&&t[Ri]||(t[Ri]=++zm)}var Ri="closure_uid_"+(1e9*Math.random()>>>0),zm=0;function Wm(t,e,n){return t.call.apply(t.bind,arguments)}function Gm(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Ee(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ee=Wm:Ee=Gm,Ee.apply(null,arguments)}function Ys(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ie(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function kt(){this.s=this.s,this.o=this.o}var Xm=0,Qm={};kt.prototype.s=!1;kt.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),Xm!=0)){var t=Hm(this);delete Qm[t]}};kt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const qu=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Ku=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<s;i++)i in r&&e.call(n,r[i],i,t)};function Ym(t){e:{var e=jy;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let r=0;r<n;r++)if(r in s&&e.call(void 0,s[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function qc(t){return Array.prototype.concat.apply([],arguments)}function la(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Tr(t){return/^[\s\xa0]*$/.test(t)}var Kc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function xe(t,e){return t.indexOf(e)!=-1}function Mi(t,e){return t<e?-1:t>e?1:0}var De;e:{var Hc=F.navigator;if(Hc){var zc=Hc.userAgent;if(zc){De=zc;break e}}De=""}function ua(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Hu(t){const e={};for(const n in t)e[n]=t[n];return e}var Wc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function zu(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Wc.length;i++)n=Wc[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ha(t){return ha[" "](t),t}ha[" "]=Er;function Jm(t){var e=ty;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Zm=xe(De,"Opera"),_n=xe(De,"Trident")||xe(De,"MSIE"),Wu=xe(De,"Edge"),uo=Wu||_n,Gu=xe(De,"Gecko")&&!(xe(De.toLowerCase(),"webkit")&&!xe(De,"Edge"))&&!(xe(De,"Trident")||xe(De,"MSIE"))&&!xe(De,"Edge"),ey=xe(De.toLowerCase(),"webkit")&&!xe(De,"Edge");function Xu(){var t=F.document;return t?t.documentMode:void 0}var br;e:{var Pi="",Li=function(){var t=De;if(Gu)return/rv:([^\);]+)(\)|;)/.exec(t);if(Wu)return/Edge\/([\d\.]+)/.exec(t);if(_n)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(ey)return/WebKit\/(\S+)/.exec(t);if(Zm)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Li&&(Pi=Li?Li[1]:""),_n){var Fi=Xu();if(Fi!=null&&Fi>parseFloat(Pi)){br=String(Fi);break e}}br=Pi}var ty={};function ny(){return Jm(function(){let t=0;const e=Kc(String(br)).split("."),n=Kc("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Mi(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Mi(r[2].length==0,i[2].length==0)||Mi(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var ho;if(F.document&&_n){var Gc=Xu();ho=Gc||parseInt(br,10)||void 0}else ho=void 0;var sy=ho,ry=function(){if(!F.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{F.addEventListener("test",Er,e),F.removeEventListener("test",Er,e)}catch{}return t}();function Ae(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ae.prototype.h=function(){this.defaultPrevented=!0};function ps(t,e){if(Ae.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Gu){e:{try{ha(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:iy[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ps.Z.h.call(this)}}Ie(ps,Ae);var iy={2:"touch",3:"pen",4:"mouse"};ps.prototype.h=function(){ps.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ns="closure_listenable_"+(1e6*Math.random()|0),oy=0;function ay(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=r,this.key=++oy,this.ca=this.fa=!1}function Jr(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Zr(t){this.src=t,this.g={},this.h=0}Zr.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=po(t,e,s,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new ay(e,this.src,i,!!s,r),e.fa=n,t.push(e)),e};function fo(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=qu(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Jr(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function po(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==s)return r}return-1}var fa="closure_lm_"+(1e6*Math.random()|0),Ui={};function Qu(t,e,n,s,r){if(s&&s.once)return Ju(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Qu(t,e[i],n,s,r);return null}return n=ga(n),t&&t[Ns]?t.N(e,n,Ss(s)?!!s.capture:!!s,r):Yu(t,e,n,!1,s,r)}function Yu(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Ss(r)?!!r.capture:!!r,a=pa(t);if(a||(t[fa]=a=new Zr(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=cy(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)ry||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(eh(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function cy(){function t(n){return e.call(t.src,t.listener,n)}var e=ly;return t}function Ju(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ju(t,e[i],n,s,r);return null}return n=ga(n),t&&t[Ns]?t.O(e,n,Ss(s)?!!s.capture:!!s,r):Yu(t,e,n,!0,s,r)}function Zu(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Zu(t,e[i],n,s,r);else s=Ss(s)?!!s.capture:!!s,n=ga(n),t&&t[Ns]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=po(i,n,s,r),-1<n&&(Jr(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=pa(t))&&(e=t.g[e.toString()],t=-1,e&&(t=po(e,n,s,r)),(n=-1<t?e[t]:null)&&da(n))}function da(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Ns])fo(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(eh(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=pa(e))?(fo(n,t),n.h==0&&(n.src=null,e[fa]=null)):Jr(t)}}}function eh(t){return t in Ui?Ui[t]:Ui[t]="on"+t}function ly(t,e){if(t.ca)t=!0;else{e=new ps(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&da(t),t=n.call(s,e)}return t}function pa(t){return t=t[fa],t instanceof Zr?t:null}var Vi="__closure_events_fn_"+(1e9*Math.random()>>>0);function ga(t){return typeof t=="function"?t:(t[Vi]||(t[Vi]=function(e){return t.handleEvent(e)}),t[Vi])}function ge(){kt.call(this),this.i=new Zr(this),this.P=this,this.I=null}Ie(ge,kt);ge.prototype[Ns]=!0;ge.prototype.removeEventListener=function(t,e,n,s){Zu(this,t,e,n,s)};function Te(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Ae(e,t);else if(e instanceof Ae)e.target=e.target||t;else{var r=e;e=new Ae(s,t),zu(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Js(o,s,!0,e)&&r}if(o=e.g=t,r=Js(o,s,!0,e)&&r,r=Js(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Js(o,s,!1,e)&&r}ge.prototype.M=function(){if(ge.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Jr(n[s]);delete t.g[e],t.h--}}this.I=null};ge.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};ge.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Js(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&fo(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var ma=F.JSON.stringify;function uy(){var t=nh;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class hy{constructor(){this.h=this.g=null}add(e,n){const s=th.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var th=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new fy,t=>t.reset());class fy{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function dy(t){F.setTimeout(()=>{throw t},0)}function ya(t,e){go||py(),mo||(go(),mo=!0),nh.add(t,e)}var go;function py(){var t=F.Promise.resolve(void 0);go=function(){t.then(gy)}}var mo=!1,nh=new hy;function gy(){for(var t;t=uy();){try{t.h.call(t.g)}catch(n){dy(n)}var e=th;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}mo=!1}function ei(t,e){ge.call(this),this.h=t||1,this.g=e||F,this.j=Ee(this.kb,this),this.l=Date.now()}Ie(ei,ge);S=ei.prototype;S.da=!1;S.S=null;S.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Te(this,"tick"),this.da&&(va(this),this.start()))}};S.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function va(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}S.M=function(){ei.Z.M.call(this),va(this),delete this.g};function wa(t,e,n){if(typeof t=="function")n&&(t=Ee(t,n));else if(t&&typeof t.handleEvent=="function")t=Ee(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:F.setTimeout(t,e||0)}function sh(t){t.g=wa(()=>{t.g=null,t.i&&(t.i=!1,sh(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class my extends kt{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:sh(this)}M(){super.M(),this.g&&(F.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gs(t){kt.call(this),this.h=t,this.g={}}Ie(gs,kt);var Xc=[];function rh(t,e,n,s){Array.isArray(n)||(n&&(Xc[0]=n.toString()),n=Xc);for(var r=0;r<n.length;r++){var i=Qu(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function ih(t){ua(t.g,function(e,n){this.g.hasOwnProperty(n)&&da(e)},t),t.g={}}gs.prototype.M=function(){gs.Z.M.call(this),ih(this)};gs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ti(){this.g=!0}ti.prototype.Aa=function(){this.g=!1};function yy(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var f=u.split("_");o=2<=f.length&&f[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function vy(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function fn(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Ey(t,n)+(s?" "+s:"")})}function wy(t,e){t.info(function(){return"TIMEOUT: "+e})}ti.prototype.info=function(){};function Ey(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return ma(n)}catch{return e}}var sn={},Qc=null;function ni(){return Qc=Qc||new ge}sn.Ma="serverreachability";function oh(t){Ae.call(this,sn.Ma,t)}Ie(oh,Ae);function ms(t){const e=ni();Te(e,new oh(e,t))}sn.STAT_EVENT="statevent";function ah(t,e){Ae.call(this,sn.STAT_EVENT,t),this.stat=e}Ie(ah,Ae);function ke(t){const e=ni();Te(e,new ah(e,t))}sn.Na="timingevent";function ch(t,e){Ae.call(this,sn.Na,t),this.size=e}Ie(ch,Ae);function xs(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return F.setTimeout(function(){t()},e)}var si={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},lh={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Ea(){}Ea.prototype.h=null;function Yc(t){return t.h||(t.h=t.i())}function uh(){}var Ds={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ta(){Ae.call(this,"d")}Ie(Ta,Ae);function ba(){Ae.call(this,"c")}Ie(ba,Ae);var yo;function ri(){}Ie(ri,Ea);ri.prototype.g=function(){return new XMLHttpRequest};ri.prototype.i=function(){return{}};yo=new ri;function ks(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new gs(this),this.P=Ty,t=uo?125:void 0,this.W=new ei(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new hh}function hh(){this.i=null,this.g="",this.h=!1}var Ty=45e3,vo={},_r={};S=ks.prototype;S.setTimeout=function(t){this.P=t};function wo(t,e,n){t.K=1,t.v=oi(yt(e)),t.s=n,t.U=!0,fh(t,null)}function fh(t,e){t.F=Date.now(),Os(t),t.A=yt(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),wh(n.h,"t",s),t.C=0,n=t.l.H,t.h=new hh,t.g=Vh(t.l,n?e:null,!t.s),0<t.O&&(t.L=new my(Ee(t.Ia,t,t.g),t.O)),rh(t.V,t.g,"readystatechange",t.gb),e=t.H?Hu(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),ms(1),yy(t.j,t.u,t.A,t.m,t.X,t.s)}S.gb=function(t){t=t.target;const e=this.L;e&&dt(t)==3?e.l():this.Ia(t)};S.Ia=function(t){try{if(t==this.g)e:{const u=dt(this.g);var e=this.g.Da();const f=this.g.ba();if(!(3>u)&&(u!=3||uo||this.g&&(this.h.h||this.g.ga()||tl(this.g)))){this.I||u!=4||e==7||(e==8||0>=f?ms(3):ms(2)),ii(this);var n=this.g.ba();this.N=n;t:if(dh(this)){var s=tl(this.g);t="";var r=s.length,i=dt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){$t(this),ns(this);var o="";break t}this.h.i=new F.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,vy(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Tr(a)){var l=a;break t}}l=null}if(n=l)fn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Eo(this,n);else{this.i=!1,this.o=3,ke(12),$t(this),ns(this);break e}}this.U?(ph(this,u,o),uo&&this.i&&u==3&&(rh(this.V,this.W,"tick",this.fb),this.W.start())):(fn(this.j,this.m,o,null),Eo(this,o)),u==4&&$t(this),this.i&&!this.I&&(u==4?Ph(this.l,this):(this.i=!1,Os(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ke(12)):(this.o=0,ke(13)),$t(this),ns(this)}}}catch{}finally{}};function dh(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function ph(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=by(t,n),r==_r){e==4&&(t.o=4,ke(14),s=!1),fn(t.j,t.m,null,"[Incomplete Response]");break}else if(r==vo){t.o=4,ke(15),fn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else fn(t.j,t.m,r,null),Eo(t,r);dh(t)&&r!=_r&&r!=vo&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ke(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),ka(e),e.L=!0,ke(11))):(fn(t.j,t.m,n,"[Invalid Chunked Response]"),$t(t),ns(t))}S.fb=function(){if(this.g){var t=dt(this.g),e=this.g.ga();this.C<e.length&&(ii(this),ph(this,t,e),this.i&&t!=4&&Os(this))}};function by(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?_r:(n=Number(e.substring(n,s)),isNaN(n)?vo:(s+=1,s+n>e.length?_r:(e=e.substr(s,n),t.C=s+n,e)))}S.cancel=function(){this.I=!0,$t(this)};function Os(t){t.Y=Date.now()+t.P,gh(t,t.P)}function gh(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=xs(Ee(t.eb,t),e)}function ii(t){t.B&&(F.clearTimeout(t.B),t.B=null)}S.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(wy(this.j,this.A),this.K!=2&&(ms(3),ke(17)),$t(this),this.o=2,ns(this)):gh(this,this.Y-t)};function ns(t){t.l.G==0||t.I||Ph(t.l,t)}function $t(t){ii(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,va(t.W),ih(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Eo(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||To(n.i,t))){if(n.I=t.N,!t.J&&To(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Sr(n),li(n);else break e;Da(n),ke(18)}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=xs(Ee(n.ab,n),6e3));if(1>=bh(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Bt(n,11)}else if((t.J||n.g==t)&&Sr(n),!Tr(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const f=l[4];f!=null&&(n.za=f,n.h.info("SVER="+n.za));const p=l[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=t.g;if(m){const I=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(I){var i=s.i;!i.g&&(xe(I,"spdy")||xe(I,"quic")||xe(I,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Ca(i,i.h),i.h=null))}if(s.D){const O=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;O&&(s.sa=O,re(s.F,s.D,O))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=Uh(s,s.H?s.la:null,s.W),o.J){_h(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(ii(a),Os(a)),s.g=o}else Rh(s);0<n.l.length&&ui(n)}else l[0]!="stop"&&l[0]!="close"||Bt(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Bt(n,7):xa(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}ms(4)}catch{}}function _y(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(lo(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function _a(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(lo(t)||typeof t=="string")Ku(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(lo(t)||typeof t=="string"){n=[];for(var s=t.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,t)n[s++]=r;s=_y(t),r=s.length;for(var i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}}function Pn(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof Pn)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}S=Pn.prototype;S.R=function(){Ia(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};S.T=function(){return Ia(this),this.g.concat()};function Ia(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];Qt(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)s=t.g[e],Qt(r,s)||(t.g[n++]=s,r[s]=1),e++;t.g.length=n}}S.get=function(t,e){return Qt(this.h,t)?this.h[t]:e};S.set=function(t,e){Qt(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};S.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);t.call(e,i,r,this)}};function Qt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var mh=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Iy(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Yt(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Yt){this.g=e!==void 0?e:t.g,Ir(this,t.j),this.s=t.s,Cr(this,t.i),Ar(this,t.m),this.l=t.l,e=t.h;var n=new ys;n.i=e.i,e.g&&(n.g=new Pn(e.g),n.h=e.h),Jc(this,n),this.o=t.o}else t&&(n=String(t).match(mh))?(this.g=!!e,Ir(this,n[1]||"",!0),this.s=ss(n[2]||""),Cr(this,n[3]||"",!0),Ar(this,n[4]),this.l=ss(n[5]||"",!0),Jc(this,n[6]||"",!0),this.o=ss(n[7]||"")):(this.g=!!e,this.h=new ys(null,this.g))}Yt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Qn(e,Zc,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Qn(e,Zc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Qn(n,n.charAt(0)=="/"?xy:Ny,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Qn(n,ky)),t.join("")};function yt(t){return new Yt(t)}function Ir(t,e,n){t.j=n?ss(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Cr(t,e,n){t.i=n?ss(e,!0):e}function Ar(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Jc(t,e,n){e instanceof ys?(t.h=e,Oy(t.h,t.g)):(n||(e=Qn(e,Dy)),t.h=new ys(e,t.g))}function re(t,e,n){t.h.set(e,n)}function oi(t){return re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Cy(t){return t instanceof Yt?yt(t):new Yt(t,void 0)}function Ay(t,e,n,s){var r=new Yt(null,void 0);return t&&Ir(r,t),e&&Cr(r,e),n&&Ar(r,n),s&&(r.l=s),r}function ss(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Qn(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Sy),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Sy(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Zc=/[#\/\?@]/g,Ny=/[#\?:]/g,xy=/[#\?]/g,Dy=/[#\?@]/g,ky=/#/g;function ys(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ot(t){t.g||(t.g=new Pn,t.h=0,t.i&&Iy(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}S=ys.prototype;S.add=function(t,e){Ot(this),this.i=null,t=Ln(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function yh(t,e){Ot(t),e=Ln(t,e),Qt(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Qt(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ia(t)))}function vh(t,e){return Ot(t),e=Ln(t,e),Qt(t.g.h,e)}S.forEach=function(t,e){Ot(this),this.g.forEach(function(n,s){Ku(n,function(r){t.call(e,r,s,this)},this)},this)};S.T=function(){Ot(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var r=t[s],i=0;i<r.length;i++)n.push(e[s]);return n};S.R=function(t){Ot(this);var e=[];if(typeof t=="string")vh(this,t)&&(e=qc(e,this.g.get(Ln(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=qc(e,t[n])}return e};S.set=function(t,e){return Ot(this),this.i=null,t=Ln(this,t),vh(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};S.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function wh(t,e,n){yh(t,e),0<n.length&&(t.i=null,t.g.set(Ln(t,e),la(n)),t.h+=n.length)}S.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),t.push(o)}}return this.i=t.join("&")};function Ln(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Oy(t,e){e&&!t.j&&(Ot(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(yh(this,s),wh(this,r,n))},t)),t.j=e}var Ry=class{constructor(t,e){this.h=t,this.g=e}};function Eh(t){this.l=t||My,F.PerformanceNavigationTiming?(t=F.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(F.g&&F.g.Ea&&F.g.Ea()&&F.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var My=10;function Th(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function bh(t){return t.h?1:t.g?t.g.size:0}function To(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ca(t,e){t.g?t.g.add(e):t.h=e}function _h(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Eh.prototype.cancel=function(){if(this.i=Ih(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Ih(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return la(t.i)}function Aa(){}Aa.prototype.stringify=function(t){return F.JSON.stringify(t,void 0)};Aa.prototype.parse=function(t){return F.JSON.parse(t,void 0)};function Py(){this.g=new Aa}function Ly(t,e,n){const s=n||"";try{_a(t,function(r,i){let o=r;Ss(r)&&(o=ma(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function Fy(t,e){const n=new ti;if(F.Image){const s=new Image;s.onload=Ys(Zs,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Ys(Zs,n,s,"TestLoadImage: error",!1,e),s.onabort=Ys(Zs,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Ys(Zs,n,s,"TestLoadImage: timeout",!1,e),F.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Zs(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Rs(t){this.l=t.$b||null,this.j=t.ib||!1}Ie(Rs,Ea);Rs.prototype.g=function(){return new ai(this.l,this.j)};Rs.prototype.i=function(t){return function(){return t}}({});function ai(t,e){ge.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Sa,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ie(ai,ge);var Sa=0;S=ai.prototype;S.open=function(t,e){if(this.readyState!=Sa)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,vs(this)};S.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||F).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};S.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ms(this)),this.readyState=Sa};S.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,vs(this)),this.g&&(this.readyState=3,vs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof F.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ch(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Ch(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}S.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ms(this):vs(this),this.readyState==3&&Ch(this)}};S.Ua=function(t){this.g&&(this.response=this.responseText=t,Ms(this))};S.Ta=function(t){this.g&&(this.response=t,Ms(this))};S.ha=function(){this.g&&Ms(this)};function Ms(t){t.readyState=4,t.l=null,t.j=null,t.A=null,vs(t)}S.setRequestHeader=function(t,e){this.v.append(t,e)};S.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};S.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function vs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ai.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Uy=F.JSON.parse;function de(t){ge.call(this),this.headers=new Pn,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ah,this.K=this.L=!1}Ie(de,ge);var Ah="",Vy=/^https?$/i,$y=["POST","PUT"];S=de.prototype;S.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():yo.g(),this.C=this.u?Yc(this.u):Yc(yo),this.g.onreadystatechange=Ee(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){el(this,i);return}t=n||"";const r=new Pn(this.headers);s&&_a(s,function(i,o){r.set(o,i)}),s=Ym(r.T()),n=F.FormData&&t instanceof F.FormData,!(0<=qu($y,e))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{xh(this),0<this.B&&((this.K=By(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ee(this.pa,this)):this.A=wa(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){el(this,i)}};function By(t){return _n&&ny()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function jy(t){return t.toLowerCase()=="content-type"}S.pa=function(){typeof ca!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Te(this,"timeout"),this.abort(8))};function el(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Sh(t),ci(t)}function Sh(t){t.D||(t.D=!0,Te(t,"complete"),Te(t,"error"))}S.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Te(this,"complete"),Te(this,"abort"),ci(this))};S.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ci(this,!0)),de.Z.M.call(this)};S.Fa=function(){this.s||(this.F||this.v||this.l?Nh(this):this.cb())};S.cb=function(){Nh(this)};function Nh(t){if(t.h&&typeof ca!="undefined"&&(!t.C[1]||dt(t)!=4||t.ba()!=2)){if(t.v&&dt(t)==4)wa(t.Fa,0,t);else if(Te(t,"readystatechange"),dt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(mh)[1]||null;if(!r&&F.self&&F.self.location){var i=F.self.location.protocol;r=i.substr(0,i.length-1)}s=!Vy.test(r?r.toLowerCase():"")}n=s}if(n)Te(t,"complete"),Te(t,"success");else{t.m=6;try{var o=2<dt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Sh(t)}}finally{ci(t)}}}}function ci(t,e){if(t.g){xh(t);const n=t.g,s=t.C[0]?Er:null;t.g=null,t.C=null,e||Te(t,"ready");try{n.onreadystatechange=s}catch{}}}function xh(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(F.clearTimeout(t.A),t.A=null)}function dt(t){return t.g?t.g.readyState:0}S.ba=function(){try{return 2<dt(this)?this.g.status:-1}catch{return-1}};S.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};S.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Uy(e)}};function tl(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ah:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}S.Da=function(){return this.m};S.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function qy(t){let e="";return ua(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Na(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=qy(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):re(t,e,n))}function Wn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Dh(t){this.za=0,this.l=[],this.h=new ti,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Wn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Wn("baseRetryDelayMs",5e3,t),this.$a=Wn("retryDelaySeedMs",1e4,t),this.Ya=Wn("forwardChannelMaxRetries",2,t),this.ra=Wn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Eh(t&&t.concurrentRequestLimit),this.Ca=new Py,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}S=Dh.prototype;S.ma=8;S.G=1;function xa(t){if(kh(t),t.G==3){var e=t.V++,n=yt(t.F);re(n,"SID",t.J),re(n,"RID",e),re(n,"TYPE","terminate"),Ps(t,n),e=new ks(t,t.h,e,void 0),e.K=2,e.v=oi(yt(n)),n=!1,F.navigator&&F.navigator.sendBeacon&&(n=F.navigator.sendBeacon(e.v.toString(),"")),!n&&F.Image&&(new Image().src=e.v,n=!0),n||(e.g=Vh(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Os(e)}Fh(t)}S.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function li(t){t.g&&(ka(t),t.g.cancel(),t.g=null)}function kh(t){li(t),t.u&&(F.clearTimeout(t.u),t.u=null),Sr(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&F.clearTimeout(t.m),t.m=null)}function $i(t,e){t.l.push(new Ry(t.Za++,e)),t.G==3&&ui(t)}function ui(t){Th(t.i)||t.m||(t.m=!0,ya(t.Ha,t),t.C=0)}function Ky(t,e){return bh(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=xs(Ee(t.Ha,t,e),Lh(t,t.C)),t.C++,!0)}S.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new ks(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=Hu(i),zu(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Oh(this,r,e),n=yt(this.F),re(n,"RID",t),re(n,"CVER",22),this.D&&re(n,"X-HTTP-Session-Id",this.D),Ps(this,n),this.o&&i&&Na(n,this.o,i),Ca(this.i,r),this.Ra&&re(n,"TYPE","init"),this.ja?(re(n,"$req",e),re(n,"SID","null"),r.$=!0,wo(r,n,null)):wo(r,n,e),this.G=2}}else this.G==3&&(t?nl(this,t):this.l.length==0||Th(this.i)||nl(this))};function nl(t,e){var n;e?n=e.m:n=t.V++;const s=yt(t.F);re(s,"SID",t.J),re(s,"RID",n),re(s,"AID",t.U),Ps(t,s),t.o&&t.s&&Na(s,t.o,t.s),n=new ks(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Oh(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Ca(t.i,n),wo(n,s,e)}function Ps(t,e){t.j&&_a({},function(n,s){re(e,s,n)})}function Oh(t,e,n){n=Math.min(t.l.length,n);var s=t.j?Ee(t.j.Oa,t.j,t):null;e:{var r=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{Ly(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function Rh(t){t.g||t.u||(t.Y=1,ya(t.Ga,t),t.A=0)}function Da(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=xs(Ee(t.Ga,t),Lh(t,t.A)),t.A++,!0)}S.Ga=function(){if(this.u=null,Mh(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=xs(Ee(this.bb,this),t)}};S.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ke(10),li(this),Mh(this))};function ka(t){t.B!=null&&(F.clearTimeout(t.B),t.B=null)}function Mh(t){t.g=new ks(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=yt(t.oa);re(e,"RID","rpc"),re(e,"SID",t.J),re(e,"CI",t.N?"0":"1"),re(e,"AID",t.U),Ps(t,e),re(e,"TYPE","xmlhttp"),t.o&&t.s&&Na(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=oi(yt(e)),n.s=null,n.U=!0,fh(n,t)}S.ab=function(){this.v!=null&&(this.v=null,li(this),Da(this),ke(19))};function Sr(t){t.v!=null&&(F.clearTimeout(t.v),t.v=null)}function Ph(t,e){var n=null;if(t.g==e){Sr(t),ka(t),t.g=null;var s=2}else if(To(t.i,e))n=e.D,_h(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=ni(),Te(s,new ch(s,n,e,r)),ui(t)}else Rh(t);else if(r=e.o,r==3||r==0&&0<t.I||!(s==1&&Ky(t,e)||s==2&&Da(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Bt(t,5);break;case 4:Bt(t,10);break;case 3:Bt(t,6);break;default:Bt(t,2)}}}function Lh(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Bt(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=Ee(t.jb,t);n||(n=new Yt("//www.google.com/images/cleardot.gif"),F.location&&F.location.protocol=="http"||Ir(n,"https"),oi(n)),Fy(n.toString(),s)}else ke(2);t.G=0,t.j&&t.j.va(e),Fh(t),kh(t)}S.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ke(2)):(this.h.info("Failed to ping google.com"),ke(1))};function Fh(t){t.G=0,t.I=-1,t.j&&((Ih(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,la(t.l),t.l.length=0),t.j.ua())}function Uh(t,e,n){let s=Cy(n);if(s.i!="")e&&Cr(s,e+"."+s.i),Ar(s,s.m);else{const r=F.location;s=Ay(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&ua(t.aa,function(r,i){re(s,i,r)}),e=t.D,n=t.sa,e&&n&&re(s,e,n),re(s,"VER",t.ma),Ps(t,s),s}function Vh(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new de(new Rs({ib:!0})):new de(t.qa),e.L=t.H,e}function $h(){}S=$h.prototype;S.xa=function(){};S.wa=function(){};S.va=function(){};S.ua=function(){};S.Oa=function(){};function Nr(){if(_n&&!(10<=Number(sy)))throw Error("Environmental error: no available transport.")}Nr.prototype.g=function(t,e){return new He(t,e)};function He(t,e){ge.call(this),this.g=new Dh(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Tr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Tr(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Fn(this)}Ie(He,ge);He.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),ya(Ee(t.hb,t,e))),ke(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Uh(t,null,t.W),ui(t)};He.prototype.close=function(){xa(this.g)};He.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,$i(this.g,e)}else this.v?(e={},e.__data__=ma(t),$i(this.g,e)):$i(this.g,t)};He.prototype.M=function(){this.g.j=null,delete this.j,xa(this.g),delete this.g,He.Z.M.call(this)};function Bh(t){Ta.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ie(Bh,Ta);function jh(){ba.call(this),this.status=1}Ie(jh,ba);function Fn(t){this.g=t}Ie(Fn,$h);Fn.prototype.xa=function(){Te(this.g,"a")};Fn.prototype.wa=function(t){Te(this.g,new Bh(t))};Fn.prototype.va=function(t){Te(this.g,new jh(t))};Fn.prototype.ua=function(){Te(this.g,"b")};Nr.prototype.createWebChannel=Nr.prototype.g;He.prototype.send=He.prototype.u;He.prototype.open=He.prototype.m;He.prototype.close=He.prototype.close;si.NO_ERROR=0;si.TIMEOUT=8;si.HTTP_ERROR=6;lh.COMPLETE="complete";uh.EventType=Ds;Ds.OPEN="a";Ds.CLOSE="b";Ds.ERROR="c";Ds.MESSAGE="d";ge.prototype.listen=ge.prototype.N;de.prototype.listenOnce=de.prototype.O;de.prototype.getLastError=de.prototype.La;de.prototype.getLastErrorCode=de.prototype.Da;de.prototype.getStatus=de.prototype.ba;de.prototype.getResponseJson=de.prototype.Qa;de.prototype.getResponseText=de.prototype.ga;de.prototype.send=de.prototype.ea;var Hy=function(){return new Nr},zy=function(){return ni()},Bi=si,Wy=lh,Gy=sn,sl={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Xy=Rs,er=uh,Qy=de;const rl="@firebase/firestore";/**
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
 */class Le{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Le.UNAUTHENTICATED=new Le(null),Le.GOOGLE_CREDENTIALS=new Le("google-credentials-uid"),Le.FIRST_PARTY=new Le("first-party-uid"),Le.MOCK_USER=new Le("mock-user");/**
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
 */let Un="9.6.7";/**
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
 */const Jt=new Vu("@firebase/firestore");function il(){return Jt.logLevel}function x(t,...e){if(Jt.logLevel<=W.DEBUG){const n=e.map(Oa);Jt.debug(`Firestore (${Un}): ${t}`,...n)}}function Nt(t,...e){if(Jt.logLevel<=W.ERROR){const n=e.map(Oa);Jt.error(`Firestore (${Un}): ${t}`,...n)}}function ol(t,...e){if(Jt.logLevel<=W.WARN){const n=e.map(Oa);Jt.warn(`Firestore (${Un}): ${t}`,...n)}}function Oa(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function V(t="Unexpected state"){const e=`FIRESTORE (${Un}) INTERNAL ASSERTION FAILED: `+t;throw Nt(e),new Error(e)}function J(t,e){t||V()}function $(t,e){return t}/**
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
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends Gr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ht{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Yy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Jy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Le.UNAUTHENTICATED))}shutdown(){}}class Zy{constructor(e){this.t=e,this.currentUser=Le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Ht;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ht,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ht)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(J(typeof s.accessToken=="string"),new Yy(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string"),new Le(e)}}class ev{constructor(e,n,s){this.type="FirstParty",this.user=Le.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class tv{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new ev(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Le.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sv{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const s=i=>{i.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,x("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(J(typeof n.token=="string"),this.p=n.token,new nv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class Ra{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.I(s),this.T=s=>n.writeSequenceNumber(s))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
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
 */function rv(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */Ra.A=-1;class qh{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=rv(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function X(t,e){return t<e?-1:t>e?1:0}function In(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new M(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return je.fromMillis(Date.now())}static fromDate(e){return je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new je(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new q(e)}static min(){return new q(new je(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function al(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Vn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Kh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ws{constructor(e,n,s){n===void 0?n=0:n>e.length&&V(),s===void 0?s=e.length-n:s>e.length-n&&V(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return ws.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ws?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ie extends ws{construct(e,n,s){return new ie(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new M(E.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new ie(n)}static emptyPath(){return new ie([])}}const iv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Fe extends ws{construct(e,n,s){return new Fe(e,n,s)}static isValidIdentifier(e){return iv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Fe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Fe(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new M(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new M(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new M(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new M(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Fe(n)}static emptyPath(){return new Fe([])}}/**
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
 */class bo{constructor(e){this.fields=e,e.sort(Fe.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return In(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class _e{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new _e(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new _e(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_e.EMPTY_BYTE_STRING=new _e("");const ov=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xt(t){if(J(!!t),typeof t=="string"){let e=0;const n=ov.exec(t);if(J(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ue(t.seconds),nanos:ue(t.nanos)}}function ue(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Cn(t){return typeof t=="string"?_e.fromBase64String(t):_e.fromUint8Array(t)}/**
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
 */function Hh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function zh(t){const e=t.mapValue.fields.__previous_value__;return Hh(e)?zh(e):e}function Es(t){const e=xt(t.mapValue.fields.__local_write_time__.timestampValue);return new je(e.seconds,e.nanos)}/**
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
 */class av{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class An{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new An("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof An&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function $n(t){return t==null}function xr(t){return t===0&&1/t==-1/0}function cv(t){return typeof t=="number"&&Number.isInteger(t)&&!xr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class P{constructor(e){this.path=e}static fromPath(e){return new P(ie.fromString(e))}static fromName(e){return new P(ie.fromString(e).popFirst(5))}static empty(){return new P(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new P(new ie(e.slice()))}}function Zt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Hh(t)?4:10:V()}function it(t,e){if(t===e)return!0;const n=Zt(t);if(n!==Zt(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Es(t).isEqual(Es(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=xt(s.timestampValue),o=xt(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Cn(s.bytesValue).isEqual(Cn(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return ue(s.geoPointValue.latitude)===ue(r.geoPointValue.latitude)&&ue(s.geoPointValue.longitude)===ue(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return ue(s.integerValue)===ue(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=ue(s.doubleValue),o=ue(r.doubleValue);return i===o?xr(i)===xr(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return In(t.arrayValue.values||[],e.arrayValue.values||[],it);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(al(i)!==al(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!it(i[a],o[a])))return!1;return!0}(t,e);default:return V()}}function Ts(t,e){return(t.values||[]).find(n=>it(n,e))!==void 0}function Sn(t,e){if(t===e)return 0;const n=Zt(t),s=Zt(e);if(n!==s)return X(n,s);switch(n){case 0:return 0;case 1:return X(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=ue(r.integerValue||r.doubleValue),a=ue(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return cl(t.timestampValue,e.timestampValue);case 4:return cl(Es(t),Es(e));case 5:return X(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Cn(r),a=Cn(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=X(o[c],a[c]);if(l!==0)return l}return X(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=X(ue(r.latitude),ue(i.latitude));return o!==0?o:X(ue(r.longitude),ue(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Sn(o[c],a[c]);if(l)return l}return X(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const f=X(a[u],l[u]);if(f!==0)return f;const p=Sn(o[a[u]],c[l[u]]);if(p!==0)return p}return X(a.length,l.length)}(t.mapValue,e.mapValue);default:throw V()}}function cl(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return X(t,e);const n=xt(t),s=xt(e),r=X(n.seconds,s.seconds);return r!==0?r:X(n.nanos,s.nanos)}function vn(t){return _o(t)}function _o(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=xt(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Cn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,P.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=_o(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${_o(s.fields[a])}`;return i+"}"}(t.mapValue):V();var e,n}function Io(t){return!!t&&"integerValue"in t}function Ma(t){return!!t&&"arrayValue"in t}function ll(t){return!!t&&"nullValue"in t}function ul(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ir(t){return!!t&&"mapValue"in t}function rs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Vn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=rs(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=rs(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
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
 */class Qe{constructor(e){this.value=e}static empty(){return new Qe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ir(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=rs(n)}setAll(e){let n=Fe.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=rs(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());ir(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return it(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];ir(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Vn(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Qe(rs(this.value))}}function Wh(t){const e=[];return Vn(t.fields,(n,s)=>{const r=new Fe([n]);if(ir(s)){const i=Wh(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new bo(e)}/**
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
 */class Ce{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Ce(e,0,q.min(),q.min(),Qe.empty(),0)}static newFoundDocument(e,n,s){return new Ce(e,1,n,q.min(),s,0)}static newNoDocument(e,n){return new Ce(e,2,n,q.min(),Qe.empty(),0)}static newUnknownDocument(e,n){return new Ce(e,3,n,q.min(),Qe.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ce&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ce(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class lv{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.P=null}}function hl(t,e=null,n=[],s=[],r=null,i=null,o=null){return new lv(t,e,n,s,r,i,o)}function Pa(t){const e=$(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+vn(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),$n(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>vn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>vn(s)).join(",")),e.P=n}return e.P}function uv(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${vn(s.value)}`;var s}).join(", ")}]`),$n(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>vn(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>vn(n)).join(",")),`Target(${e})`}function La(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!vv(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!it(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!dl(t.startAt,e.startAt)&&dl(t.endAt,e.endAt)}function Co(t){return P.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Ue extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.v(e,n,s):new hv(e,n,s):n==="array-contains"?new pv(e,s):n==="in"?new gv(e,s):n==="not-in"?new mv(e,s):n==="array-contains-any"?new yv(e,s):new Ue(e,n,s)}static v(e,n,s){return n==="in"?new fv(e,s):new dv(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.V(Sn(n,this.value)):n!==null&&Zt(this.value)===Zt(n)&&this.V(Sn(n,this.value))}V(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return V()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class hv extends Ue{constructor(e,n,s){super(e,n,s),this.key=P.fromName(s.referenceValue)}matches(e){const n=P.comparator(e.key,this.key);return this.V(n)}}class fv extends Ue{constructor(e,n){super(e,"in",n),this.keys=Gh("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class dv extends Ue{constructor(e,n){super(e,"not-in",n),this.keys=Gh("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Gh(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>P.fromName(s.referenceValue))}class pv extends Ue{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ma(n)&&Ts(n.arrayValue,this.value)}}class gv extends Ue{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ts(this.value.arrayValue,n)}}class mv extends Ue{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ts(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ts(this.value.arrayValue,n)}}class yv extends Ue{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ma(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ts(this.value.arrayValue,s))}}class Dr{constructor(e,n){this.position=e,this.inclusive=n}}class is{constructor(e,n="asc"){this.field=e,this.dir=n}}function vv(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function fl(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=P.comparator(P.fromName(o.referenceValue),n.key):s=Sn(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function dl(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!it(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class hi{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.D=null,this.C=null,this.startAt,this.endAt}}function wv(t,e,n,s,r,i,o,a){return new hi(t,e,n,s,r,i,o,a)}function Fa(t){return new hi(t)}function or(t){return!$n(t.limit)&&t.limitType==="F"}function kr(t){return!$n(t.limit)&&t.limitType==="L"}function Ev(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Tv(t){for(const e of t.filters)if(e.S())return e.field;return null}function bv(t){return t.collectionGroup!==null}function bs(t){const e=$(t);if(e.D===null){e.D=[];const n=Tv(e),s=Ev(e);if(n!==null&&s===null)n.isKeyField()||e.D.push(new is(n)),e.D.push(new is(Fe.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.D.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new is(Fe.keyField(),i))}}}return e.D}function en(t){const e=$(t);if(!e.C)if(e.limitType==="F")e.C=hl(e.path,e.collectionGroup,bs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of bs(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new is(i.field,o))}const s=e.endAt?new Dr(e.endAt.position,!e.endAt.inclusive):null,r=e.startAt?new Dr(e.startAt.position,!e.startAt.inclusive):null;e.C=hl(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.C}function _v(t,e,n){return new hi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function fi(t,e){return La(en(t),en(e))&&t.limitType===e.limitType}function Xh(t){return`${Pa(en(t))}|lt:${t.limitType}`}function Ao(t){return`Query(target=${uv(en(t))}; limitType=${t.limitType})`}function Ua(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):P.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=fl(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,bs(n),s)||n.endAt&&!function(r,i,o){const a=fl(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,bs(n),s))}(t,e)}function Qh(t){return(e,n)=>{let s=!1;for(const r of bs(t)){const i=Iv(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Iv(t,e,n){const s=t.field.isKeyField()?P.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Sn(a,c):V()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return V()}}/**
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
 */function Yh(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xr(e)?"-0":e}}function Jh(t){return{integerValue:""+t}}function Cv(t,e){return cv(e)?Jh(e):Yh(t,e)}/**
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
 */class di{constructor(){this._=void 0}}function Av(t,e,n){return t instanceof Or?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof _s?ef(t,e):t instanceof Is?tf(t,e):function(s,r){const i=Zh(s,r),o=pl(i)+pl(s.k);return Io(i)&&Io(s.k)?Jh(o):Yh(s.O,o)}(t,e)}function Sv(t,e,n){return t instanceof _s?ef(t,e):t instanceof Is?tf(t,e):n}function Zh(t,e){return t instanceof Rr?Io(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Or extends di{}class _s extends di{constructor(e){super(),this.elements=e}}function ef(t,e){const n=nf(e);for(const s of t.elements)n.some(r=>it(r,s))||n.push(s);return{arrayValue:{values:n}}}class Is extends di{constructor(e){super(),this.elements=e}}function tf(t,e){let n=nf(e);for(const s of t.elements)n=n.filter(r=>!it(r,s));return{arrayValue:{values:n}}}class Rr extends di{constructor(e,n){super(),this.O=e,this.k=n}}function pl(t){return ue(t.integerValue||t.doubleValue)}function nf(t){return Ma(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Nv(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof _s&&s instanceof _s||n instanceof Is&&s instanceof Is?In(n.elements,s.elements,it):n instanceof Rr&&s instanceof Rr?it(n.k,s.k):n instanceof Or&&s instanceof Or}(t.transform,e.transform)}class xv{constructor(e,n){this.version=e,this.transformResults=n}}class zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new zt}static exists(e){return new zt(void 0,e)}static updateTime(e){return new zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ar(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class pi{}function Dv(t,e,n){t instanceof gi?function(s,r,i){const o=s.value.clone(),a=yl(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ls?function(s,r,i){if(!ar(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=yl(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(sf(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function So(t,e,n){t instanceof gi?function(s,r,i){if(!ar(s.precondition,r))return;const o=s.value.clone(),a=vl(s.fieldTransforms,i,r);o.setAll(a),r.convertToFoundDocument(ml(r),o).setHasLocalMutations()}(t,e,n):t instanceof Ls?function(s,r,i){if(!ar(s.precondition,r))return;const o=vl(s.fieldTransforms,i,r),a=r.data;a.setAll(sf(s)),a.setAll(o),r.convertToFoundDocument(ml(r),a).setHasLocalMutations()}(t,e,n):function(s,r){ar(s.precondition,r)&&r.convertToNoDocument(q.min())}(t,e)}function kv(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Zh(s.transform,r||null);i!=null&&(n==null&&(n=Qe.empty()),n.set(s.field,i))}return n||null}function gl(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&In(n,s,(r,i)=>Nv(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function ml(t){return t.isFoundDocument()?t.version:q.min()}class gi extends pi{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}}class Ls extends pi{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}}function sf(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function yl(t,e,n){const s=new Map;J(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,Sv(o,a,n[r]))}return s}function vl(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Av(i,o,e))}return s}class Ov extends pi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class Rv extends pi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
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
 */class Mv{constructor(e){this.count=e}}/**
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
 */var le,K;function Pv(t){switch(t){default:return V();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function rf(t){if(t===void 0)return Nt("GRPC error has no .code"),E.UNKNOWN;switch(t){case le.OK:return E.OK;case le.CANCELLED:return E.CANCELLED;case le.UNKNOWN:return E.UNKNOWN;case le.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case le.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case le.INTERNAL:return E.INTERNAL;case le.UNAVAILABLE:return E.UNAVAILABLE;case le.UNAUTHENTICATED:return E.UNAUTHENTICATED;case le.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case le.NOT_FOUND:return E.NOT_FOUND;case le.ALREADY_EXISTS:return E.ALREADY_EXISTS;case le.PERMISSION_DENIED:return E.PERMISSION_DENIED;case le.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case le.ABORTED:return E.ABORTED;case le.OUT_OF_RANGE:return E.OUT_OF_RANGE;case le.UNIMPLEMENTED:return E.UNIMPLEMENTED;case le.DATA_LOSS:return E.DATA_LOSS;default:return V()}}(K=le||(le={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class me{constructor(e,n){this.comparator=e,this.root=n||ye.EMPTY}insert(e,n){return new me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ye.BLACK,null,null))}remove(e){return new me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ye.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new tr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new tr(this.root,e,this.comparator,!1)}getReverseIterator(){return new tr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new tr(this.root,e,this.comparator,!0)}}class tr{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ye{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:ye.RED,this.left=r!=null?r:ye.EMPTY,this.right=i!=null?i:ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new ye(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return ye.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw V();const e=this.left.check();if(e!==this.right.check())throw V();return e+(this.isRed()?0:1)}}ye.EMPTY=null,ye.RED=!0,ye.BLACK=!1;ye.EMPTY=new class{constructor(){this.size=0}get key(){throw V()}get value(){throw V()}get color(){throw V()}get left(){throw V()}get right(){throw V()}copy(t,e,n,s,r){return this}insert(t,e,n){return new ye(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class be{constructor(e){this.comparator=e,this.data=new me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new wl(this.data.getIterator())}getIteratorFrom(e){return new wl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof be)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new be(this.comparator);return n.data=e,n}}class wl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const Lv=new me(P.comparator);function tn(){return Lv}const Fv=new me(P.comparator);function No(){return Fv}const Uv=new me(P.comparator),Vv=new be(P.comparator);function te(...t){let e=Vv;for(const n of t)e=e.add(n);return e}const $v=new be(X);function of(){return $v}/**
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
 */class mi{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,Fs.createSynthesizedTargetChangeForCurrentChange(e,n)),new mi(q.min(),s,of(),tn(),te())}}class Fs{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Fs(_e.EMPTY_BYTE_STRING,n,te(),te(),te())}}/**
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
 */class cr{constructor(e,n,s,r){this.M=e,this.removedTargetIds=n,this.key=s,this.$=r}}class af{constructor(e,n){this.targetId=e,this.F=n}}class cf{constructor(e,n,s=_e.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class El{constructor(){this.B=0,this.L=bl(),this.U=_e.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=te(),n=te(),s=te();return this.L.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:V()}}),new Fs(this.U,this.q,e,n,s)}J(){this.K=!1,this.L=bl()}Y(e,n){this.K=!0,this.L=this.L.insert(e,n)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class Bv{constructor(e){this.nt=e,this.st=new Map,this.it=tn(),this.rt=Tl(),this.ot=new be(X)}ct(e){for(const n of e.M)e.$&&e.$.isFoundDocument()?this.ut(n,e.$):this.at(n,e.key,e.$);for(const n of e.removedTargetIds)this.at(n,e.key,e.$)}ht(e){this.forEachTarget(e,n=>{const s=this.lt(n);switch(e.state){case 0:this.ft(n)&&s.W(e.resumeToken);break;case 1:s.tt(),s.G||s.J(),s.W(e.resumeToken);break;case 2:s.tt(),s.G||this.removeTarget(n);break;case 3:this.ft(n)&&(s.et(),s.W(e.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),s.W(e.resumeToken));break;default:V()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.st.forEach((s,r)=>{this.ft(r)&&n(r)})}_t(e){const n=e.targetId,s=e.F.count,r=this.wt(n);if(r){const i=r.target;if(Co(i))if(s===0){const o=new P(i.path);this.at(n,o,Ce.newNoDocument(o,q.min()))}else J(s===1);else this.gt(n)!==s&&(this.dt(n),this.ot=this.ot.add(n))}}yt(e){const n=new Map;this.st.forEach((i,o)=>{const a=this.wt(o);if(a){if(i.current&&Co(a.target)){const c=new P(a.target.path);this.it.get(c)!==null||this.It(o,c)||this.at(o,c,Ce.newNoDocument(c,e))}i.j&&(n.set(o,i.H()),i.J())}});let s=te();this.rt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.wt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.it.forEach((i,o)=>o.setReadTime(e));const r=new mi(e,n,this.ot,this.it,s);return this.it=tn(),this.rt=Tl(),this.ot=new be(X),r}ut(e,n){if(!this.ft(e))return;const s=this.It(e,n.key)?2:0;this.lt(e).Y(n.key,s),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Et(n.key).add(e))}at(e,n,s){if(!this.ft(e))return;const r=this.lt(e);this.It(e,n)?r.Y(n,1):r.X(n),this.rt=this.rt.insert(n,this.Et(n).delete(e)),s&&(this.it=this.it.insert(n,s))}removeTarget(e){this.st.delete(e)}gt(e){const n=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let n=this.st.get(e);return n||(n=new El,this.st.set(e,n)),n}Et(e){let n=this.rt.get(e);return n||(n=new be(X),this.rt=this.rt.insert(e,n)),n}ft(e){const n=this.wt(e)!==null;return n||x("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.st.get(e);return n&&n.G?null:this.nt.Tt(e)}dt(e){this.st.set(e,new El),this.nt.getRemoteKeysForTarget(e).forEach(n=>{this.at(e,n,null)})}It(e,n){return this.nt.getRemoteKeysForTarget(e).has(n)}}function Tl(){return new me(P.comparator)}function bl(){return new me(P.comparator)}/**
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
 */const jv=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),qv=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Kv{constructor(e,n){this.databaseId=e,this.N=n}}function Mr(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function lf(t,e){return t.N?e.toBase64():e.toUint8Array()}function Hv(t,e){return Mr(t,e.toTimestamp())}function gt(t){return J(!!t),q.fromTimestamp(function(e){const n=xt(e);return new je(n.seconds,n.nanos)}(t))}function Va(t,e){return function(n){return new ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function uf(t){const e=ie.fromString(t);return J(df(e)),e}function xo(t,e){return Va(t.databaseId,e.path)}function ji(t,e){const n=uf(e);if(n.get(1)!==t.databaseId.projectId)throw new M(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new P(hf(n))}function Do(t,e){return Va(t.databaseId,e)}function zv(t){const e=uf(t);return e.length===4?ie.emptyPath():hf(e)}function ko(t){return new ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function hf(t){return J(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function _l(t,e,n){return{name:xo(t,e),fields:n.value.mapValue.fields}}function Wv(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:V()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.N?(J(l===void 0||typeof l=="string"),_e.fromBase64String(l||"")):(J(l===void 0||l instanceof Uint8Array),_e.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?E.UNKNOWN:rf(c.code);return new M(l,c.message||"")}(o);n=new cf(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=ji(t,s.document.name),i=gt(s.document.updateTime),o=new Qe({mapValue:{fields:s.document.fields}}),a=Ce.newFoundDocument(r,i,o),c=s.targetIds||[],l=s.removedTargetIds||[];n=new cr(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=ji(t,s.document),i=s.readTime?gt(s.readTime):q.min(),o=Ce.newNoDocument(r,i),a=s.removedTargetIds||[];n=new cr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=ji(t,s.document),i=s.removedTargetIds||[];n=new cr([],i,r,null)}else{if(!("filter"in e))return V();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new Mv(r),o=s.targetId;n=new af(o,i)}}return n}function Gv(t,e){let n;if(e instanceof gi)n={update:_l(t,e.key,e.value)};else if(e instanceof Ov)n={delete:xo(t,e.key)};else if(e instanceof Ls)n={update:_l(t,e.key,e.data),updateMask:rw(e.fieldMask)};else{if(!(e instanceof Rv))return V();n={verify:xo(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Or)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof _s)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Is)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Rr)return{fieldPath:i.field.canonicalString(),increment:o.k};throw V()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Hv(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:V()}(t,e.precondition)),n}function Xv(t,e){return t&&t.length>0?(J(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?gt(s.updateTime):gt(r);return i.isEqual(q.min())&&(i=gt(r)),new xv(i,s.transformResults||[])}(n,e))):[]}function Qv(t,e){return{documents:[Do(t,e.path)]}}function Yv(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Do(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Do(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const l=c.map(u=>function(f){if(f.op==="=="){if(ul(f.value))return{unaryFilter:{field:ln(f.field),op:"IS_NAN"}};if(ll(f.value))return{unaryFilter:{field:ln(f.field),op:"IS_NULL"}}}else if(f.op==="!="){if(ul(f.value))return{unaryFilter:{field:ln(f.field),op:"IS_NOT_NAN"}};if(ll(f.value))return{unaryFilter:{field:ln(f.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ln(f.field),op:tw(f.op),value:f.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:ln(u.field),direction:ew(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.N||$n(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Jv(t){let e=zv(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){J(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=ff(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(f){return new is(dn(f.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(u)));let a=null;n.limit&&(a=function(u){let f;return f=typeof u=="object"?u.value:u,$n(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(u){const f=!!u.before,p=u.values||[];return new Dr(p,f)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const f=!u.before,p=u.values||[];return new Dr(p,f)}(n.endAt)),wv(e,r,o,i,a,"F",c,l)}function Zv(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return V()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function ff(t){return t?t.unaryFilter!==void 0?[sw(t)]:t.fieldFilter!==void 0?[nw(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>ff(e)).reduce((e,n)=>e.concat(n)):V():[]}function ew(t){return jv[t]}function tw(t){return qv[t]}function ln(t){return{fieldPath:t.canonicalString()}}function dn(t){return Fe.fromServerFormat(t.fieldPath)}function nw(t){return Ue.create(dn(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return V()}}(t.fieldFilter.op),t.fieldFilter.value)}function sw(t){switch(t.unaryFilter.op){case"IS_NAN":const e=dn(t.unaryFilter.field);return Ue.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=dn(t.unaryFilter.field);return Ue.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=dn(t.unaryFilter.field);return Ue.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=dn(t.unaryFilter.field);return Ue.create(r,"!=",{nullValue:"NULL_VALUE"});default:return V()}}function rw(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function df(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */const iw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ow{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */class _{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&V(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new _((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof _?n:_.resolve(n)}catch(n){return _.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):_.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):_.reject(n)}static resolve(e){return new _((n,s)=>{n(e)})}static reject(e){return new _((n,s)=>{s(e)})}static waitFor(e){return new _((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=_.resolve(!1);for(const s of e)n=n.next(r=>r?_.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}}function Us(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class aw{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Dv(i,e,s[r])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&So(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&So(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const s=e.get(n.key),r=s;this.applyToLocalView(r),s.isValidDocument()||r.convertToNoDocument(q.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&In(this.mutations,e.mutations,(n,s)=>gl(n,s))&&In(this.baseMutations,e.baseMutations,(n,s)=>gl(n,s))}}class $a{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){J(e.mutations.length===s.length);let r=Uv;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new $a(e,n,s,r)}}/**
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
 */class cw{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Wt{constructor(e,n,s,r,i=q.min(),o=q.min(),a=_e.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Wt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class lw{constructor(e){this.Ht=e}}function uw(t){const e=Jv({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?_v(e,e.limit,"L"):e}/**
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
 */class hw{constructor(){this.xe=new fw}addToCollectionParentIndex(e,n){return this.xe.add(n),_.resolve()}getCollectionParents(e,n){return _.resolve(this.xe.getEntries(n))}addFieldIndex(e,n){return _.resolve()}deleteFieldIndex(e,n){return _.resolve()}getDocumentsMatchingTarget(e,n,s){return _.resolve(te())}getFieldIndex(e,n){return _.resolve(null)}getFieldIndexes(e,n){return _.resolve([])}getNextCollectionGroupToUpdate(e){return _.resolve(null)}updateCollectionGroup(e,n,s){return _.resolve()}updateIndexEntries(e,n){return _.resolve()}}class fw{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new be(ie.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new be(ie.comparator)).toArray()}}/**
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
 */class Nn{constructor(e){this.ze=e}next(){return this.ze+=2,this.ze}static He(){return new Nn(0)}static Je(){return new Nn(-1)}}/**
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
 */async function Vs(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==iw)throw t;x("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class $s{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r!==void 0){for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n])}else this.inner[s]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),!0;return!1}forEach(e){Vn(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Kh(this.inner)}}/**
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
 */class dw{constructor(){this.changes=new $s(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ce.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?_.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class pw{constructor(e,n,s){this.qn=e,this.gs=n,this.indexManager=s}ys(e,n){return this.gs.getAllMutationBatchesAffectingDocumentKey(e,n).next(s=>this.ps(e,n,s))}ps(e,n,s){return this.qn.getEntry(e,n).next(r=>{for(const i of s)i.applyToLocalView(r);return r})}Is(e,n){e.forEach((s,r)=>{for(const i of n)i.applyToLocalView(r)})}Es(e,n){return this.qn.getEntries(e,n).next(s=>this.Ts(e,s).next(()=>s))}Ts(e,n){return this.gs.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>this.Is(n,s))}As(e,n,s){return function(r){return P.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.Rs(e,n.path):bv(n)?this.Ps(e,n,s):this.bs(e,n,s)}Rs(e,n){return this.ys(e,new P(n)).next(s=>{let r=No();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}Ps(e,n,s){const r=n.collectionGroup;let i=No();return this.indexManager.getCollectionParents(e,r).next(o=>_.forEach(o,a=>{const c=function(l,u){return new hi(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.bs(e,c,s).next(l=>{l.forEach((u,f)=>{i=i.insert(u,f)})})}).next(()=>i))}bs(e,n,s){let r;return this.qn.getAll(e,n.path,s).next(i=>(r=i,this.gs.getAllMutationBatchesAffectingQuery(e,n))).next(i=>{for(const o of i)for(const a of o.mutations){const c=a.key;let l=r.get(c);l==null&&(l=Ce.newInvalidDocument(c),r=r.insert(c,l)),So(a,l,o.localWriteTime),l.isFoundDocument()||(r=r.remove(c))}}).next(()=>(r.forEach((i,o)=>{Ua(n,o)||(r=r.remove(i))}),r))}}/**
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
 */class Ba{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.vs=s,this.Vs=r}static Ss(e,n){let s=te(),r=te();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ba(e,n.fromCache,s,r)}}/**
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
 */class gw{Ds(e){this.Cs=e}As(e,n,s,r){return function(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}(n)||s.isEqual(q.min())?this.Ns(e,n):this.Cs.Es(e,r).next(i=>{const o=this.xs(n,i);return(or(n)||kr(n))&&this.ks(n.limitType,o,r,s)?this.Ns(e,n):(il()<=W.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ao(n)),this.Cs.As(e,n,s).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}xs(e,n){let s=new be(Qh(e));return n.forEach((r,i)=>{Ua(e,i)&&(s=s.add(i))}),s}ks(e,n,s,r){if(s.size!==n.size)return!0;const i=e==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ns(e,n){return il()<=W.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",Ao(n)),this.Cs.As(e,n,q.min())}}/**
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
 */class mw{constructor(e,n,s,r){this.persistence=e,this.Os=n,this.O=r,this.Ms=new me(X),this.$s=new $s(i=>Pa(i),La),this.Fs=q.min(),this.Bs=e.getRemoteDocumentCache(),this.Un=e.getTargetCache(),this.Kn=e.getBundleCache(),this.Ls(s)}Ls(e){this.indexManager=this.persistence.getIndexManager(e),this.gs=this.persistence.getMutationQueue(e,this.indexManager),this.Us=new pw(this.Bs,this.gs,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Os.Ds(this.Us)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function yw(t,e,n,s){return new mw(t,e,n,s)}async function pf(t,e){const n=$(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.gs.getAllMutationBatches(s).next(i=>(r=i,n.Ls(e),n.gs.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=te();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.Us.Es(s,c).next(l=>({qs:l,removedBatchIds:o,addedBatchIds:a}))})})}function vw(t,e){const n=$(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Bs.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,f=u.keys();let p=_.resolve();return f.forEach(m=>{p=p.next(()=>l.getEntry(a,m)).next(I=>{const O=c.docVersions.get(m);J(O!==null),I.version.compareTo(O)<0&&(u.applyToRemoteDocument(I,c),I.isValidDocument()&&(I.setReadTime(c.commitVersion),l.addEntry(I)))})}),p.next(()=>o.gs.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.gs.performConsistencyCheck(s)).next(()=>n.Us.Es(s,r))})}function gf(t){const e=$(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Un.getLastRemoteSnapshotVersion(n))}function ww(t,e){const n=$(t),s=e.snapshotVersion;let r=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Bs.newChangeBuffer({trackRemovals:!0});r=n.Ms;const a=[];e.targetChanges.forEach((l,u)=>{const f=r.get(u);if(!f)return;a.push(n.Un.removeMatchingKeys(i,l.removedDocuments,u).next(()=>n.Un.addMatchingKeys(i,l.addedDocuments,u)));let p=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(u)?p=p.withResumeToken(_e.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):l.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(l.resumeToken,s)),r=r.insert(u,p),function(m,I,O){return m.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(f,p,l)&&a.push(n.Un.updateTargetData(i,p))});let c=tn();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(Ew(i,o,e.documentUpdates).next(l=>{c=l})),!s.isEqual(q.min())){const l=n.Un.getLastRemoteSnapshotVersion(i).next(u=>n.Un.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return _.waitFor(a).next(()=>o.apply(i)).next(()=>n.Us.Ts(i,c)).next(()=>c)}).then(i=>(n.Ms=r,i))}function Ew(t,e,n){let s=te();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let i=tn();return n.forEach((o,a)=>{const c=r.get(o);a.isNoDocument()&&a.version.isEqual(q.min())?(e.removeEntry(o,a.readTime),i=i.insert(o,a)):!c.isValidDocument()||a.version.compareTo(c.version)>0||a.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(a),i=i.insert(o,a)):x("LocalStore","Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",a.version)}),i})}function Tw(t,e){const n=$(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.gs.getNextMutationBatchAfterBatchId(s,e)))}function bw(t,e){const n=$(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Un.getTargetData(s,e).next(i=>i?(r=i,_.resolve(r)):n.Un.allocateTargetId(s).next(o=>(r=new Wt(e,o,0,s.currentSequenceNumber),n.Un.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ms.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.$s.set(e,s.targetId)),s})}async function Oo(t,e,n){const s=$(t),r=s.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Us(o))throw o;x("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ms=s.Ms.remove(e),s.$s.delete(r.target)}function Il(t,e,n){const s=$(t);let r=q.min(),i=te();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=$(a),f=u.$s.get(l);return f!==void 0?_.resolve(u.Ms.get(f)):u.Un.getTargetData(c,l)}(s,o,en(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Un.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Os.As(o,e,n?r:q.min(),n?i:te())).next(a=>({documents:a,Ks:i})))}/**
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
 */class _w{constructor(e){this.O=e,this.Ws=new Map,this.zs=new Map}getBundleMetadata(e,n){return _.resolve(this.Ws.get(n))}saveBundleMetadata(e,n){var s;return this.Ws.set(n.id,{id:(s=n).id,version:s.version,createTime:gt(s.createTime)}),_.resolve()}getNamedQuery(e,n){return _.resolve(this.zs.get(n))}saveNamedQuery(e,n){return this.zs.set(n.name,function(s){return{name:s.name,query:uw(s.bundledQuery),readTime:gt(s.readTime)}}(n)),_.resolve()}}/**
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
 */class Iw{constructor(){this.overlays=new me(P.comparator),this.Hs=new Map}getOverlay(e,n){return _.resolve(this.overlays.get(n))}saveOverlays(e,n,s){return s.forEach(r=>{this.Yt(e,n,r)}),_.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.Hs.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Hs.delete(s)),_.resolve()}getOverlaysForCollection(e,n,s){const r=new Map,i=n.length+1,o=new P(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return _.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new me((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=new Map,i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=new Map,c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(u,l)),!(a.size>=r)););return _.resolve(a)}Yt(e,n,s){if(s===null)return;const r=this.overlays.get(s.key);r!==null&&this.Hs.get(r.largestBatchId).delete(s.key),this.overlays=this.overlays.insert(s.key,new cw(n,s));let i=this.Hs.get(n);i===void 0&&(i=new Set,this.Hs.set(n,i)),i.add(s.key)}}/**
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
 */class ja{constructor(){this.Js=new be(pe.Ys),this.Xs=new be(pe.Zs)}isEmpty(){return this.Js.isEmpty()}addReference(e,n){const s=new pe(e,n);this.Js=this.Js.add(s),this.Xs=this.Xs.add(s)}ti(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ei(new pe(e,n))}ni(e,n){e.forEach(s=>this.removeReference(s,n))}si(e){const n=new P(new ie([])),s=new pe(n,e),r=new pe(n,e+1),i=[];return this.Xs.forEachInRange([s,r],o=>{this.ei(o),i.push(o.key)}),i}ii(){this.Js.forEach(e=>this.ei(e))}ei(e){this.Js=this.Js.delete(e),this.Xs=this.Xs.delete(e)}ri(e){const n=new P(new ie([])),s=new pe(n,e),r=new pe(n,e+1);let i=te();return this.Xs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new pe(e,0),s=this.Js.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class pe{constructor(e,n){this.key=e,this.oi=n}static Ys(e,n){return P.comparator(e.key,n.key)||X(e.oi,n.oi)}static Zs(e,n){return X(e.oi,n.oi)||P.comparator(e.key,n.key)}}/**
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
 */class Cw{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.gs=[],this.ci=1,this.ui=new be(pe.Ys)}checkEmpty(e){return _.resolve(this.gs.length===0)}addMutationBatch(e,n,s,r){const i=this.ci;this.ci++,this.gs.length>0&&this.gs[this.gs.length-1];const o=new aw(i,n,s,r);this.gs.push(o);for(const a of r)this.ui=this.ui.add(new pe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return _.resolve(o)}lookupMutationBatch(e,n){return _.resolve(this.ai(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.hi(s),i=r<0?0:r;return _.resolve(this.gs.length>i?this.gs[i]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.gs.length===0?-1:this.ci-1)}getAllMutationBatches(e){return _.resolve(this.gs.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new pe(n,0),r=new pe(n,Number.POSITIVE_INFINITY),i=[];return this.ui.forEachInRange([s,r],o=>{const a=this.ai(o.oi);i.push(a)}),_.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new be(X);return n.forEach(r=>{const i=new pe(r,0),o=new pe(r,Number.POSITIVE_INFINITY);this.ui.forEachInRange([i,o],a=>{s=s.add(a.oi)})}),_.resolve(this.li(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;P.isDocumentKey(i)||(i=i.child(""));const o=new pe(new P(i),0);let a=new be(X);return this.ui.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.oi)),!0)},o),_.resolve(this.li(a))}li(e){const n=[];return e.forEach(s=>{const r=this.ai(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){J(this.fi(n.batchId,"removed")===0),this.gs.shift();let s=this.ui;return _.forEach(n.mutations,r=>{const i=new pe(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ui=s})}Qe(e){}containsKey(e,n){const s=new pe(n,0),r=this.ui.firstAfterOrEqual(s);return _.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.gs.length,_.resolve()}fi(e,n){return this.hi(e)}hi(e){return this.gs.length===0?0:e-this.gs[0].batchId}ai(e){const n=this.hi(e);return n<0||n>=this.gs.length?null:this.gs[n]}}/**
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
 */class Aw{constructor(e){this.di=e,this.docs=new me(P.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.di(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return _.resolve(s?s.document.mutableCopy():Ce.newInvalidDocument(n))}getEntries(e,n){let s=tn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Ce.newInvalidDocument(r))}),_.resolve(s)}getAll(e,n,s){let r=tn();const i=new P(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||c.readTime.compareTo(s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return _.resolve(r)}_i(e,n){return _.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Sw(this)}getSize(e){return _.resolve(this.size)}}class Sw extends dw{constructor(e){super(),this.Tn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Tn.addEntry(e,r)):this.Tn.removeEntry(s)}),_.waitFor(n)}getFromCache(e,n){return this.Tn.getEntry(e,n)}getAllFromCache(e,n){return this.Tn.getEntries(e,n)}}/**
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
 */class Nw{constructor(e){this.persistence=e,this.wi=new $s(n=>Pa(n),La),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.mi=0,this.gi=new ja,this.targetCount=0,this.yi=Nn.He()}forEachTarget(e,n){return this.wi.forEach((s,r)=>n(r)),_.resolve()}getLastRemoteSnapshotVersion(e){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return _.resolve(this.mi)}allocateTargetId(e){return this.highestTargetId=this.yi.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.mi&&(this.mi=n),_.resolve()}Ze(e){this.wi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.yi=new Nn(n),this.highestTargetId=n),e.sequenceNumber>this.mi&&(this.mi=e.sequenceNumber)}addTargetData(e,n){return this.Ze(n),this.targetCount+=1,_.resolve()}updateTargetData(e,n){return this.Ze(n),_.resolve()}removeTargetData(e,n){return this.wi.delete(n.target),this.gi.si(n.targetId),this.targetCount-=1,_.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.wi.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.wi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),_.waitFor(i).next(()=>r)}getTargetCount(e){return _.resolve(this.targetCount)}getTargetData(e,n){const s=this.wi.get(n)||null;return _.resolve(s)}addMatchingKeys(e,n,s){return this.gi.ti(n,s),_.resolve()}removeMatchingKeys(e,n,s){this.gi.ni(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),_.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.gi.si(n),_.resolve()}getMatchingKeysForTargetId(e,n){const s=this.gi.ri(n);return _.resolve(s)}containsKey(e,n){return _.resolve(this.gi.containsKey(n))}}/**
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
 */class xw{constructor(e,n){this.pi={},this.overlays={},this.Nn=new Ra(0),this.xn=!1,this.xn=!0,this.referenceDelegate=e(this),this.Un=new Nw(this),this.indexManager=new hw,this.qn=function(s){return new Aw(s)}(s=>this.referenceDelegate.Ii(s)),this.O=new lw(n),this.Kn=new _w(this.O)}start(){return Promise.resolve()}shutdown(){return this.xn=!1,Promise.resolve()}get started(){return this.xn}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Iw,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.pi[e.toKey()];return s||(s=new Cw(n,this.referenceDelegate),this.pi[e.toKey()]=s),s}getTargetCache(){return this.Un}getRemoteDocumentCache(){return this.qn}getBundleCache(){return this.Kn}runTransaction(e,n,s){x("MemoryPersistence","Starting transaction:",e);const r=new Dw(this.Nn.next());return this.referenceDelegate.Ei(),s(r).next(i=>this.referenceDelegate.Ti(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ai(e,n){return _.or(Object.values(this.pi).map(s=>()=>s.containsKey(e,n)))}}class Dw extends ow{constructor(e){super(),this.currentSequenceNumber=e}}class qa{constructor(e){this.persistence=e,this.Ri=new ja,this.Pi=null}static bi(e){return new qa(e)}get vi(){if(this.Pi)return this.Pi;throw V()}addReference(e,n,s){return this.Ri.addReference(s,n),this.vi.delete(s.toString()),_.resolve()}removeReference(e,n,s){return this.Ri.removeReference(s,n),this.vi.add(s.toString()),_.resolve()}markPotentiallyOrphaned(e,n){return this.vi.add(n.toString()),_.resolve()}removeTarget(e,n){this.Ri.si(n.targetId).forEach(r=>this.vi.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.vi.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Ei(){this.Pi=new Set}Ti(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.vi,s=>{const r=P.fromPath(s);return this.Vi(e,r).next(i=>{i||n.removeEntry(r,q.min())})}).next(()=>(this.Pi=null,n.apply(e)))}updateLimboDocument(e,n){return this.Vi(e,n).next(s=>{s?this.vi.delete(n.toString()):this.vi.add(n.toString())})}Ii(e){return 0}Vi(e,n){return _.or([()=>_.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Cl{constructor(){this.activeTargetIds=of()}Ci(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ni(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Di(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class kw{constructor(){this._r=new Cl,this.wr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this._r.Ci(e),this.wr[e]||"not-current"}updateQueryState(e,n,s){this.wr[e]=n}removeLocalQueryTarget(e){this._r.Ni(e)}isLocalQueryTarget(e){return this._r.activeTargetIds.has(e)}clearQueryState(e){delete this.wr[e]}getAllActiveQueryTargets(){return this._r.activeTargetIds}isActiveQueryTarget(e){return this._r.activeTargetIds.has(e)}start(){return this._r=new Cl,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
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
 */class Ow{mr(e){}shutdown(){}}/**
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
 */class Al{constructor(){this.gr=()=>this.yr(),this.pr=()=>this.Ir(),this.Er=[],this.Tr()}mr(e){this.Er.push(e)}shutdown(){window.removeEventListener("online",this.gr),window.removeEventListener("offline",this.pr)}Tr(){window.addEventListener("online",this.gr),window.addEventListener("offline",this.pr)}yr(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Er)e(0)}Ir(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Er)e(1)}static Vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Rw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class Mw{constructor(e){this.Ar=e.Ar,this.Rr=e.Rr}Pr(e){this.br=e}vr(e){this.Vr=e}onMessage(e){this.Sr=e}close(){this.Rr()}send(e){this.Ar(e)}Dr(){this.br()}Cr(e){this.Vr(e)}Nr(e){this.Sr(e)}}/**
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
 */class Pw extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.kr=n+"://"+e.host,this.Or="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Mr(e,n,s,r,i){const o=this.$r(e,n);x("RestConnection","Sending: ",o,s);const a={};return this.Fr(a,r,i),this.Br(e,o,a,s).then(c=>(x("RestConnection","Received: ",c),c),c=>{throw ol("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}Lr(e,n,s,r,i){return this.Mr(e,n,s,r,i)}Fr(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Un,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}$r(e,n){const s=Rw[e];return`${this.kr}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Br(e,n,s,r){return new Promise((i,o)=>{const a=new Qy;a.listenOnce(Wy.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Bi.NO_ERROR:const l=a.getResponseJson();x("Connection","XHR received:",JSON.stringify(l)),i(l);break;case Bi.TIMEOUT:x("Connection",'RPC "'+e+'" timed out'),o(new M(E.DEADLINE_EXCEEDED,"Request time out"));break;case Bi.HTTP_ERROR:const u=a.getStatus();if(x("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const f=a.getResponseJson().error;if(f&&f.status&&f.message){const p=function(m){const I=m.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(I)>=0?I:E.UNKNOWN}(f.status);o(new M(p,f.message))}else o(new M(E.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new M(E.UNAVAILABLE,"Connection failed."));break;default:V()}}finally{x("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}Ur(e,n,s){const r=[this.kr,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Hy(),o=zy(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Xy({})),this.Fr(a.initMessageHeaders,n,s),xg()||kg()||Og()||Rg()||Mg()||Dg()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");x("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,f=!1;const p=new Mw({Ar:I=>{f?x("Connection","Not sending because WebChannel is closed:",I):(u||(x("Connection","Opening WebChannel transport."),l.open(),u=!0),x("Connection","WebChannel sending:",I),l.send(I))},Rr:()=>l.close()}),m=(I,O,R)=>{I.listen(O,j=>{try{R(j)}catch(ce){setTimeout(()=>{throw ce},0)}})};return m(l,er.EventType.OPEN,()=>{f||x("Connection","WebChannel transport opened.")}),m(l,er.EventType.CLOSE,()=>{f||(f=!0,x("Connection","WebChannel transport closed"),p.Cr())}),m(l,er.EventType.ERROR,I=>{f||(f=!0,ol("Connection","WebChannel transport errored:",I),p.Cr(new M(E.UNAVAILABLE,"The operation could not be completed")))}),m(l,er.EventType.MESSAGE,I=>{var O;if(!f){const R=I.data[0];J(!!R);const j=R,ce=j.error||((O=j[0])===null||O===void 0?void 0:O.error);if(ce){x("Connection","WebChannel received error:",ce);const ae=ce.status;let ne=function(ze){const Se=le[ze];if(Se!==void 0)return rf(Se)}(ae),Re=ce.message;ne===void 0&&(ne=E.INTERNAL,Re="Unknown error status: "+ae+" with message "+ce.message),f=!0,p.Cr(new M(ne,Re)),l.close()}else x("Connection","WebChannel received:",R),p.Nr(R)}}),m(o,Gy.STAT_EVENT,I=>{I.stat===sl.PROXY?x("Connection","Detected buffering proxy"):I.stat===sl.NOPROXY&&x("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.Dr()},0),p}}function qi(){return typeof document!="undefined"?document:null}/**
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
 */function yi(t){return new Kv(t,!0)}class mf{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Sn=e,this.timerId=n,this.qr=s,this.Kr=r,this.Gr=i,this.jr=0,this.Qr=null,this.Wr=Date.now(),this.reset()}reset(){this.jr=0}zr(){this.jr=this.Gr}Hr(e){this.cancel();const n=Math.floor(this.jr+this.Jr()),s=Math.max(0,Date.now()-this.Wr),r=Math.max(0,n-s);r>0&&x("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.jr} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Qr=this.Sn.enqueueAfterDelay(this.timerId,r,()=>(this.Wr=Date.now(),e())),this.jr*=this.Kr,this.jr<this.qr&&(this.jr=this.qr),this.jr>this.Gr&&(this.jr=this.Gr)}Yr(){this.Qr!==null&&(this.Qr.skipDelay(),this.Qr=null)}cancel(){this.Qr!==null&&(this.Qr.cancel(),this.Qr=null)}Jr(){return(Math.random()-.5)*this.jr}}/**
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
 */class yf{constructor(e,n,s,r,i,o,a,c){this.Sn=e,this.Xr=s,this.Zr=r,this.eo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.no=0,this.so=null,this.io=null,this.stream=null,this.ro=new mf(e,n)}oo(){return this.state===1||this.state===5||this.co()}co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.uo()}async stop(){this.oo()&&await this.close(0)}ao(){this.state=0,this.ro.reset()}ho(){this.co()&&this.so===null&&(this.so=this.Sn.enqueueAfterDelay(this.Xr,6e4,()=>this.lo()))}fo(e){this._o(),this.stream.send(e)}async lo(){if(this.co())return this.close(0)}_o(){this.so&&(this.so.cancel(),this.so=null)}wo(){this.io&&(this.io.cancel(),this.io=null)}async close(e,n){this._o(),this.wo(),this.ro.cancel(),this.no++,e!==4?this.ro.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(Nt(n.toString()),Nt("Using maximum backoff delay to prevent overloading the backend."),this.ro.zr()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.mo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.vr(n)}mo(){}auth(){this.state=1;const e=this.yo(this.no),n=this.no;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.no===n&&this.po(s,r)},s=>{e(()=>{const r=new M(E.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Io(r)})})}po(e,n){const s=this.yo(this.no);this.stream=this.Eo(e,n),this.stream.Pr(()=>{s(()=>(this.state=2,this.io=this.Sn.enqueueAfterDelay(this.Zr,1e4,()=>(this.co()&&(this.state=3),Promise.resolve())),this.listener.Pr()))}),this.stream.vr(r=>{s(()=>this.Io(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}uo(){this.state=5,this.ro.Hr(async()=>{this.state=0,this.start()})}Io(e){return x("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}yo(e){return n=>{this.Sn.enqueueAndForget(()=>this.no===e?n():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Lw extends yf{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.O=i}Eo(e,n){return this.eo.Ur("Listen",e,n)}onMessage(e){this.ro.reset();const n=Wv(this.O,e),s=function(r){if(!("targetChange"in r))return q.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?q.min():i.readTime?gt(i.readTime):q.min()}(e);return this.listener.To(n,s)}Ao(e){const n={};n.database=ko(this.O),n.addTarget=function(r,i){let o;const a=i.target;return o=Co(a)?{documents:Qv(r,a)}:{query:Yv(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=lf(r,i.resumeToken):i.snapshotVersion.compareTo(q.min())>0&&(o.readTime=Mr(r,i.snapshotVersion.toTimestamp())),o}(this.O,e);const s=Zv(this.O,e);s&&(n.labels=s),this.fo(n)}Ro(e){const n={};n.database=ko(this.O),n.removeTarget=e,this.fo(n)}}class Fw extends yf{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.O=i,this.Po=!1}get bo(){return this.Po}start(){this.Po=!1,this.lastStreamToken=void 0,super.start()}mo(){this.Po&&this.vo([])}Eo(e,n){return this.eo.Ur("Write",e,n)}onMessage(e){if(J(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Po){this.ro.reset();const n=Xv(e.writeResults,e.commitTime),s=gt(e.commitTime);return this.listener.Vo(s,n)}return J(!e.writeResults||e.writeResults.length===0),this.Po=!0,this.listener.So()}Do(){const e={};e.database=ko(this.O),this.fo(e)}vo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Gv(this.O,s))};this.fo(n)}}/**
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
 */class Uw extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.eo=s,this.O=r,this.Co=!1}No(){if(this.Co)throw new M(E.FAILED_PRECONDITION,"The client has already been terminated.")}Mr(e,n,s){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.eo.Mr(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new M(E.UNKNOWN,r.toString())})}Lr(e,n,s){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.eo.Lr(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new M(E.UNKNOWN,r.toString())})}terminate(){this.Co=!0}}class Vw{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.xo=0,this.ko=null,this.Oo=!0}Mo(){this.xo===0&&(this.$o("Unknown"),this.ko=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ko=null,this.Fo("Backend didn't respond within 10 seconds."),this.$o("Offline"),Promise.resolve())))}Bo(e){this.state==="Online"?this.$o("Unknown"):(this.xo++,this.xo>=1&&(this.Lo(),this.Fo(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.$o("Offline")))}set(e){this.Lo(),this.xo=0,e==="Online"&&(this.Oo=!1),this.$o(e)}$o(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Fo(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Oo?(Nt(n),this.Oo=!1):x("OnlineStateTracker",n)}Lo(){this.ko!==null&&(this.ko.cancel(),this.ko=null)}}/**
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
 */class $w{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Uo=[],this.qo=new Map,this.Ko=new Set,this.Go=[],this.jo=i,this.jo.mr(o=>{s.enqueueAndForget(async()=>{rn(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=$(a);c.Ko.add(4),await Bs(c),c.Qo.set("Unknown"),c.Ko.delete(4),await vi(c)}(this))})}),this.Qo=new Vw(s,r)}}async function vi(t){if(rn(t))for(const e of t.Go)await e(!0)}async function Bs(t){for(const e of t.Go)await e(!1)}function vf(t,e){const n=$(t);n.qo.has(e.targetId)||(n.qo.set(e.targetId,e),za(n)?Ha(n):Bn(n).co()&&Ka(n,e))}function wf(t,e){const n=$(t),s=Bn(n);n.qo.delete(e),s.co()&&Ef(n,e),n.qo.size===0&&(s.co()?s.ho():rn(n)&&n.Qo.set("Unknown"))}function Ka(t,e){t.Wo.Z(e.targetId),Bn(t).Ao(e)}function Ef(t,e){t.Wo.Z(e),Bn(t).Ro(e)}function Ha(t){t.Wo=new Bv({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.qo.get(e)||null}),Bn(t).start(),t.Qo.Mo()}function za(t){return rn(t)&&!Bn(t).oo()&&t.qo.size>0}function rn(t){return $(t).Ko.size===0}function Tf(t){t.Wo=void 0}async function Bw(t){t.qo.forEach((e,n)=>{Ka(t,e)})}async function jw(t,e){Tf(t),za(t)?(t.Qo.Bo(e),Ha(t)):t.Qo.set("Unknown")}async function qw(t,e,n){if(t.Qo.set("Online"),e instanceof cf&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.qo.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.qo.delete(o),s.Wo.removeTarget(o))}(t,e)}catch(s){x("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Pr(t,s)}else if(e instanceof cr?t.Wo.ct(e):e instanceof af?t.Wo._t(e):t.Wo.ht(e),!n.isEqual(q.min()))try{const s=await gf(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Wo.yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.qo.get(c);l&&r.qo.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.qo.get(a);if(!c)return;r.qo.set(a,c.withResumeToken(_e.EMPTY_BYTE_STRING,c.snapshotVersion)),Ef(r,a);const l=new Wt(c.target,a,1,c.sequenceNumber);Ka(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){x("RemoteStore","Failed to raise snapshot:",s),await Pr(t,s)}}async function Pr(t,e,n){if(!Us(e))throw e;t.Ko.add(1),await Bs(t),t.Qo.set("Offline"),n||(n=()=>gf(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await n(),t.Ko.delete(1),await vi(t)})}function bf(t,e){return e().catch(n=>Pr(t,n,e))}async function wi(t){const e=$(t),n=Dt(e);let s=e.Uo.length>0?e.Uo[e.Uo.length-1].batchId:-1;for(;Kw(e);)try{const r=await Tw(e.localStore,s);if(r===null){e.Uo.length===0&&n.ho();break}s=r.batchId,Hw(e,r)}catch(r){await Pr(e,r)}_f(e)&&If(e)}function Kw(t){return rn(t)&&t.Uo.length<10}function Hw(t,e){t.Uo.push(e);const n=Dt(t);n.co()&&n.bo&&n.vo(e.mutations)}function _f(t){return rn(t)&&!Dt(t).oo()&&t.Uo.length>0}function If(t){Dt(t).start()}async function zw(t){Dt(t).Do()}async function Ww(t){const e=Dt(t);for(const n of t.Uo)e.vo(n.mutations)}async function Gw(t,e,n){const s=t.Uo.shift(),r=$a.from(s,e,n);await bf(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await wi(t)}async function Xw(t,e){e&&Dt(t).bo&&await async function(n,s){if(r=s.code,Pv(r)&&r!==E.ABORTED){const i=n.Uo.shift();Dt(n).ao(),await bf(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await wi(n)}var r}(t,e),_f(t)&&If(t)}async function Sl(t,e){const n=$(t);n.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const s=rn(n);n.Ko.add(3),await Bs(n),s&&n.Qo.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ko.delete(3),await vi(n)}async function Qw(t,e){const n=$(t);e?(n.Ko.delete(2),await vi(n)):e||(n.Ko.add(2),await Bs(n),n.Qo.set("Unknown"))}function Bn(t){return t.zo||(t.zo=function(e,n,s){const r=$(e);return r.No(),new Lw(n,r.eo,r.authCredentials,r.appCheckCredentials,r.O,s)}(t.datastore,t.asyncQueue,{Pr:Bw.bind(null,t),vr:jw.bind(null,t),To:qw.bind(null,t)}),t.Go.push(async e=>{e?(t.zo.ao(),za(t)?Ha(t):t.Qo.set("Unknown")):(await t.zo.stop(),Tf(t))})),t.zo}function Dt(t){return t.Ho||(t.Ho=function(e,n,s){const r=$(e);return r.No(),new Fw(n,r.eo,r.authCredentials,r.appCheckCredentials,r.O,s)}(t.datastore,t.asyncQueue,{Pr:zw.bind(null,t),vr:Xw.bind(null,t),So:Ww.bind(null,t),Vo:Gw.bind(null,t)}),t.Go.push(async e=>{e?(t.Ho.ao(),await wi(t)):(await t.Ho.stop(),t.Uo.length>0&&(x("RemoteStore",`Stopping write stream with ${t.Uo.length} pending writes`),t.Uo=[]))})),t.Ho}/**
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
 */class Wa{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Ht,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Wa(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ga(t,e){if(Nt("AsyncQueue",`${e}: ${t}`),Us(t))return new M(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class wn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||P.comparator(n.key,s.key):(n,s)=>P.comparator(n.key,s.key),this.keyedMap=No(),this.sortedSet=new me(this.comparator)}static emptySet(e){return new wn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof wn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new wn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Nl{constructor(){this.Jo=new me(P.comparator)}track(e){const n=e.doc.key,s=this.Jo.get(n);s?e.type!==0&&s.type===3?this.Jo=this.Jo.insert(n,e):e.type===3&&s.type!==1?this.Jo=this.Jo.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Jo=this.Jo.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Jo=this.Jo.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Jo=this.Jo.remove(n):e.type===1&&s.type===2?this.Jo=this.Jo.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Jo=this.Jo.insert(n,{type:2,doc:e.doc}):V():this.Jo=this.Jo.insert(n,e)}Yo(){const e=[];return this.Jo.inorderTraversal((n,s)=>{e.push(s)}),e}}class xn{constructor(e,n,s,r,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new xn(e,n,wn.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class Yw{constructor(){this.Xo=void 0,this.listeners=[]}}class Jw{constructor(){this.queries=new $s(e=>Xh(e),fi),this.onlineState="Unknown",this.Zo=new Set}}async function Zw(t,e){const n=$(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new Yw),r)try{i.Xo=await n.onListen(s)}catch(o){const a=Ga(o,`Initialization of query '${Ao(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.tc(n.onlineState),i.Xo&&e.ec(i.Xo)&&Xa(n)}async function eE(t,e){const n=$(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function tE(t,e){const n=$(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.ec(r)&&(s=!0);o.Xo=r}}s&&Xa(n)}function nE(t,e,n){const s=$(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Xa(t){t.Zo.forEach(e=>{e.next()})}class sE{constructor(e,n,s){this.query=e,this.nc=n,this.sc=!1,this.ic=null,this.onlineState="Unknown",this.options=s||{}}ec(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new xn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.sc?this.rc(e)&&(this.nc.next(e),n=!0):this.oc(e,this.onlineState)&&(this.cc(e),n=!0),this.ic=e,n}onError(e){this.nc.error(e)}tc(e){this.onlineState=e;let n=!1;return this.ic&&!this.sc&&this.oc(this.ic,e)&&(this.cc(this.ic),n=!0),n}oc(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.uc||!s)&&(!e.docs.isEmpty()||n==="Offline")}rc(e){if(e.docChanges.length>0)return!0;const n=this.ic&&this.ic.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}cc(e){e=xn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.sc=!0,this.nc.next(e)}}/**
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
 */class Cf{constructor(e){this.key=e}}class Af{constructor(e){this.key=e}}class rE{constructor(e,n){this.query=e,this.dc=n,this._c=null,this.current=!1,this.wc=te(),this.mutatedKeys=te(),this.mc=Qh(e),this.gc=new wn(this.mc)}get yc(){return this.dc}Ic(e,n){const s=n?n.Ec:new Nl,r=n?n.gc:this.gc;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=or(this.query)&&r.size===this.query.limit?r.last():null,l=kr(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,f)=>{const p=r.get(u),m=Ua(this.query,f)?f:null,I=!!p&&this.mutatedKeys.has(p.key),O=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let R=!1;p&&m?p.data.isEqual(m.data)?I!==O&&(s.track({type:3,doc:m}),R=!0):this.Tc(p,m)||(s.track({type:2,doc:m}),R=!0,(c&&this.mc(m,c)>0||l&&this.mc(m,l)<0)&&(a=!0)):!p&&m?(s.track({type:0,doc:m}),R=!0):p&&!m&&(s.track({type:1,doc:p}),R=!0,(c||l)&&(a=!0)),R&&(m?(o=o.add(m),i=O?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),or(this.query)||kr(this.query))for(;o.size>this.query.limit;){const u=or(this.query)?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{gc:o,Ec:s,ks:a,mutatedKeys:i}}Tc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.gc;this.gc=e.gc,this.mutatedKeys=e.mutatedKeys;const i=e.Ec.Yo();i.sort((l,u)=>function(f,p){const m=I=>{switch(I){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return V()}};return m(f)-m(p)}(l.type,u.type)||this.mc(l.doc,u.doc)),this.Ac(s);const o=n?this.Rc():[],a=this.wc.size===0&&this.current?1:0,c=a!==this._c;return this._c=a,i.length!==0||c?{snapshot:new xn(this.query,e.gc,r,i,e.mutatedKeys,a===0,c,!1),Pc:o}:{Pc:o}}tc(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({gc:this.gc,Ec:new Nl,mutatedKeys:this.mutatedKeys,ks:!1},!1)):{Pc:[]}}bc(e){return!this.dc.has(e)&&!!this.gc.has(e)&&!this.gc.get(e).hasLocalMutations}Ac(e){e&&(e.addedDocuments.forEach(n=>this.dc=this.dc.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.dc=this.dc.delete(n)),this.current=e.current)}Rc(){if(!this.current)return[];const e=this.wc;this.wc=te(),this.gc.forEach(s=>{this.bc(s.key)&&(this.wc=this.wc.add(s.key))});const n=[];return e.forEach(s=>{this.wc.has(s)||n.push(new Af(s))}),this.wc.forEach(s=>{e.has(s)||n.push(new Cf(s))}),n}vc(e){this.dc=e.Ks,this.wc=te();const n=this.Ic(e.documents);return this.applyChanges(n,!0)}Vc(){return xn.fromInitialDocuments(this.query,this.gc,this.mutatedKeys,this._c===0)}}class iE{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class oE{constructor(e){this.key=e,this.Sc=!1}}class aE{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Dc={},this.Cc=new $s(a=>Xh(a),fi),this.Nc=new Map,this.xc=new Set,this.kc=new me(P.comparator),this.Oc=new Map,this.Mc=new ja,this.$c={},this.Fc=new Map,this.Bc=Nn.Je(),this.onlineState="Unknown",this.Lc=void 0}get isPrimaryClient(){return this.Lc===!0}}async function cE(t,e){const n=vE(t);let s,r;const i=n.Cc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.Vc();else{const o=await bw(n.localStore,en(e));n.isPrimaryClient&&vf(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await lE(n,e,s,a==="current")}return r}async function lE(t,e,n,s){t.Uc=(u,f,p)=>async function(m,I,O,R){let j=I.view.Ic(O);j.ks&&(j=await Il(m.localStore,I.query,!1).then(({documents:ne})=>I.view.Ic(ne,j)));const ce=R&&R.targetChanges.get(I.targetId),ae=I.view.applyChanges(j,m.isPrimaryClient,ce);return Dl(m,I.targetId,ae.Pc),ae.snapshot}(t,u,f,p);const r=await Il(t.localStore,e,!0),i=new rE(e,r.Ks),o=i.Ic(r.documents),a=Fs.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);Dl(t,n,c.Pc);const l=new iE(e,n,i);return t.Cc.set(e,l),t.Nc.has(n)?t.Nc.get(n).push(e):t.Nc.set(n,[e]),c.snapshot}async function uE(t,e){const n=$(t),s=n.Cc.get(e),r=n.Nc.get(s.targetId);if(r.length>1)return n.Nc.set(s.targetId,r.filter(i=>!fi(i,e))),void n.Cc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Oo(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),wf(n.remoteStore,s.targetId),Ro(n,s.targetId)}).catch(Vs)):(Ro(n,s.targetId),await Oo(n.localStore,s.targetId,!0))}async function hE(t,e,n){const s=wE(t);try{const r=await function(i,o){const a=$(i),c=je.now(),l=o.reduce((f,p)=>f.add(p.key),te());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>a.Us.Es(f,l).next(p=>{u=p;const m=[];for(const I of o){const O=kv(I,u.get(I.key));O!=null&&m.push(new Ls(I.key,O,Wh(O.value.mapValue),zt.exists(!0)))}return a.gs.addMutationBatch(f,c,m,o)})).then(f=>(f.applyToLocalDocumentSet(u),{batchId:f.batchId,changes:u}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.$c[i.currentUser.toKey()];c||(c=new me(X)),c=c.insert(o,a),i.$c[i.currentUser.toKey()]=c}(s,r.batchId,n),await js(s,r.changes),await wi(s.remoteStore)}catch(r){const i=Ga(r,"Failed to persist write");n.reject(i)}}async function Sf(t,e){const n=$(t);try{const s=await ww(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.Oc.get(i);o&&(J(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Sc=!0:r.modifiedDocuments.size>0?J(o.Sc):r.removedDocuments.size>0&&(J(o.Sc),o.Sc=!1))}),await js(n,s,e)}catch(s){await Vs(s)}}function xl(t,e,n){const s=$(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.Cc.forEach((i,o)=>{const a=o.view.tc(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=$(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const f of u.listeners)f.tc(o)&&(c=!0)}),c&&Xa(a)}(s.eventManager,e),r.length&&s.Dc.To(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function fE(t,e,n){const s=$(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.Oc.get(e),i=r&&r.key;if(i){let o=new me(P.comparator);o=o.insert(i,Ce.newNoDocument(i,q.min()));const a=te().add(i),c=new mi(q.min(),new Map,new be(X),o,a);await Sf(s,c),s.kc=s.kc.remove(i),s.Oc.delete(e),Qa(s)}else await Oo(s.localStore,e,!1).then(()=>Ro(s,e,n)).catch(Vs)}async function dE(t,e){const n=$(t),s=e.batch.batchId;try{const r=await vw(n.localStore,e);xf(n,s,null),Nf(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await js(n,r)}catch(r){await Vs(r)}}async function pE(t,e,n){const s=$(t);try{const r=await function(i,o){const a=$(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.gs.lookupMutationBatch(c,o).next(u=>(J(u!==null),l=u.keys(),a.gs.removeMutationBatch(c,u))).next(()=>a.gs.performConsistencyCheck(c)).next(()=>a.Us.Es(c,l))})}(s.localStore,e);xf(s,e,n),Nf(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await js(s,r)}catch(r){await Vs(r)}}function Nf(t,e){(t.Fc.get(e)||[]).forEach(n=>{n.resolve()}),t.Fc.delete(e)}function xf(t,e,n){const s=$(t);let r=s.$c[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.$c[s.currentUser.toKey()]=r}}function Ro(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Nc.get(e))t.Cc.delete(s),n&&t.Dc.qc(s,n);t.Nc.delete(e),t.isPrimaryClient&&t.Mc.si(e).forEach(s=>{t.Mc.containsKey(s)||Df(t,s)})}function Df(t,e){t.xc.delete(e.path.canonicalString());const n=t.kc.get(e);n!==null&&(wf(t.remoteStore,n),t.kc=t.kc.remove(e),t.Oc.delete(n),Qa(t))}function Dl(t,e,n){for(const s of n)s instanceof Cf?(t.Mc.addReference(s.key,e),gE(t,s)):s instanceof Af?(x("SyncEngine","Document no longer in limbo: "+s.key),t.Mc.removeReference(s.key,e),t.Mc.containsKey(s.key)||Df(t,s.key)):V()}function gE(t,e){const n=e.key,s=n.path.canonicalString();t.kc.get(n)||t.xc.has(s)||(x("SyncEngine","New document in limbo: "+n),t.xc.add(s),Qa(t))}function Qa(t){for(;t.xc.size>0&&t.kc.size<t.maxConcurrentLimboResolutions;){const e=t.xc.values().next().value;t.xc.delete(e);const n=new P(ie.fromString(e)),s=t.Bc.next();t.Oc.set(s,new oE(n)),t.kc=t.kc.insert(n,s),vf(t.remoteStore,new Wt(en(Fa(n.path)),s,2,Ra.A))}}async function js(t,e,n){const s=$(t),r=[],i=[],o=[];s.Cc.isEmpty()||(s.Cc.forEach((a,c)=>{o.push(s.Uc(c,e,n).then(l=>{if(l){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),r.push(l);const u=Ba.Ss(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.Dc.To(r),await async function(a,c){const l=$(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>_.forEach(c,f=>_.forEach(f.vs,p=>l.persistence.referenceDelegate.addReference(u,f.targetId,p)).next(()=>_.forEach(f.Vs,p=>l.persistence.referenceDelegate.removeReference(u,f.targetId,p)))))}catch(u){if(!Us(u))throw u;x("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const f=u.targetId;if(!u.fromCache){const p=l.Ms.get(f),m=p.snapshotVersion,I=p.withLastLimboFreeSnapshotVersion(m);l.Ms=l.Ms.insert(f,I)}}}(s.localStore,i))}async function mE(t,e){const n=$(t);if(!n.currentUser.isEqual(e)){x("SyncEngine","User change. New user:",e.toKey());const s=await pf(n.localStore,e);n.currentUser=e,function(r,i){r.Fc.forEach(o=>{o.forEach(a=>{a.reject(new M(E.CANCELLED,i))})}),r.Fc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await js(n,s.qs)}}function yE(t,e){const n=$(t),s=n.Oc.get(e);if(s&&s.Sc)return te().add(s.key);{let r=te();const i=n.Nc.get(e);if(!i)return r;for(const o of i){const a=n.Cc.get(o);r=r.unionWith(a.view.yc)}return r}}function vE(t){const e=$(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Sf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=yE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=fE.bind(null,e),e.Dc.To=tE.bind(null,e.eventManager),e.Dc.qc=nE.bind(null,e.eventManager),e}function wE(t){const e=$(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=pE.bind(null,e),e}class EE{constructor(){this.synchronizeTabs=!1}async initialize(e){this.O=yi(e.databaseInfo.databaseId),this.sharedClientState=this.Gc(e),this.persistence=this.jc(e),await this.persistence.start(),this.gcScheduler=this.Qc(e),this.localStore=this.Wc(e)}Qc(e){return null}Wc(e){return yw(this.persistence,new gw,e.initialUser,this.O)}jc(e){return new xw(qa.bi,this.O)}Gc(e){return new kw}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class TE{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>xl(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=mE.bind(null,this.syncEngine),await Qw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Jw}createDatastore(e){const n=yi(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new Pw(r));var r;return function(i,o,a,c){return new Uw(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>xl(this.syncEngine,a,0),o=Al.Vt()?new Al:new Ow,new $w(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new aE(s,r,i,o,a,c);return l&&(u.Lc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=$(e);x("RemoteStore","RemoteStore shutting down."),n.Ko.add(5),await Bs(n),n.jo.shutdown(),n.Qo.set("Unknown")}(this.remoteStore)}}/**
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
 */class bE{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Hc(this.observer.next,e)}error(e){this.observer.error?this.Hc(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Jc(){this.muted=!0}Hc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class _E{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Le.UNAUTHENTICATED,this.clientId=qh.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{x("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(x("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ht;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Ga(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function IE(t,e){t.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await pf(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function CE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await AE(t);x("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Sl(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Sl(e.remoteStore,i)),t.onlineComponents=e}async function AE(t){return t.offlineComponents||(x("FirestoreClient","Using default OfflineComponentProvider"),await IE(t,new EE)),t.offlineComponents}async function kf(t){return t.onlineComponents||(x("FirestoreClient","Using default OnlineComponentProvider"),await CE(t,new TE)),t.onlineComponents}function SE(t){return kf(t).then(e=>e.syncEngine)}async function kl(t){const e=await kf(t),n=e.eventManager;return n.onListen=cE.bind(null,e.syncEngine),n.onUnlisten=uE.bind(null,e.syncEngine),n}const Ol=new Map;/**
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
 */function Of(t,e,n){if(!n)throw new M(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function NE(t,e,n,s){if(e===!0&&s===!0)throw new M(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Rl(t){if(!P.isDocumentKey(t))throw new M(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ml(t){if(P.isDocumentKey(t))throw new M(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ya(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":V()}function En(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ya(t);throw new M(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Pl{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new M(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,NE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Ja{constructor(e,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pl({}),this._settingsFrozen=!1,e instanceof An?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new M(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new An(r.options.projectId)}(e))}get app(){if(!this._app)throw new M(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pl(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Jy;switch(n.type){case"gapi":const s=n.client;return J(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new tv(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new M(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ol.get(e);n&&(x("ComponentProvider","Removing Datastore"),Ol.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class qe{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ct(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qe(this.firestore,e,this._key)}}class Ei{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ei(this.firestore,e,this._query)}}class Ct extends Ei{constructor(e,n,s){super(e,n,Fa(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qe(this.firestore,null,new P(e))}withConverter(e){return new Ct(this.firestore,e,this._path)}}function s0(t,e,...n){if(t=bn(t),Of("collection","path",e),t instanceof Ja){const s=ie.fromString(e,...n);return Ml(s),new Ct(t,null,s)}{if(!(t instanceof qe||t instanceof Ct))throw new M(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ie.fromString(e,...n));return Ml(s),new Ct(t.firestore,null,s)}}function xE(t,e,...n){if(t=bn(t),arguments.length===1&&(e=qh.R()),Of("doc","path",e),t instanceof Ja){const s=ie.fromString(e,...n);return Rl(s),new qe(t,null,new P(s))}{if(!(t instanceof qe||t instanceof Ct))throw new M(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ie.fromString(e,...n));return Rl(s),new qe(t.firestore,t instanceof Ct?t.converter:null,new P(s))}}/**
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
 */class DE{constructor(){this.hu=Promise.resolve(),this.lu=[],this.fu=!1,this.du=[],this._u=null,this.wu=!1,this.mu=!1,this.gu=[],this.ro=new mf(this,"async_queue_retry"),this.yu=()=>{const n=qi();n&&x("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ro.Yr()};const e=qi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.yu)}get isShuttingDown(){return this.fu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.fu){this.fu=!0,this.mu=e||!1;const n=qi();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.yu)}}enqueue(e){if(this.pu(),this.fu)return new Promise(()=>{});const n=new Ht;return this.Iu(()=>this.fu&&this.mu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.lu.push(e),this.Eu()))}async Eu(){if(this.lu.length!==0){try{await this.lu[0](),this.lu.shift(),this.ro.reset()}catch(e){if(!Us(e))throw e;x("AsyncQueue","Operation failed with retryable error: "+e)}this.lu.length>0&&this.ro.Hr(()=>this.Eu())}}Iu(e){const n=this.hu.then(()=>(this.wu=!0,e().catch(s=>{this._u=s,this.wu=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Nt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.wu=!1,s))));return this.hu=n,n}enqueueAfterDelay(e,n,s){this.pu(),this.gu.indexOf(e)>-1&&(n=0);const r=Wa.createAndSchedule(this,e,n,s,i=>this.Tu(i));return this.du.push(r),r}pu(){this._u&&V()}verifyOperationInProgress(){}async Au(){let e;do e=this.hu,await e;while(e!==this.hu)}Ru(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}Pu(e){return this.Au().then(()=>{this.du.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Au()})}bu(e){this.gu.push(e)}Tu(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}function Ll(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Cs extends Ja{constructor(e,n,s){super(e,n,s),this.type="firestore",this._queue=new DE,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Mf(this),this._firestoreClient.terminate()}}function r0(t=Dm()){return Am(t,"firestore").getImmediate()}function Rf(t){return t._firestoreClient||Mf(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Mf(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new av(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new _E(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 */class Za{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Dn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Dn(_e.fromBase64String(e))}catch(n){throw new M(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Dn(_e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ec{constructor(e){this._methodName=e}}/**
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
 */class tc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}}/**
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
 */const kE=/^__.*__$/;class OE{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Ls(e,this.data,this.fieldMask,n,this.fieldTransforms):new gi(e,this.data,n,this.fieldTransforms)}}function Pf(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw V()}}class nc{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.O=s,this.ignoreUndefinedProperties=r,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}Su(e){return new nc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.O,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Du(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Su({path:s,Cu:!1});return r.Nu(e),r}xu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Su({path:s,Cu:!1});return r.vu(),r}ku(e){return this.Su({path:void 0,Cu:!0})}Ou(e){return Lr(e,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.$u)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Nu(this.path.get(e))}Nu(e){if(e.length===0)throw this.Ou("Document fields must not be empty");if(Pf(this.Vu)&&kE.test(e))throw this.Ou('Document fields cannot begin and end with "__"')}}class RE{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.O=s||yi(e)}Fu(e,n,s,r=!1){return new nc({Vu:e,methodName:n,$u:s,path:Fe.emptyPath(),Cu:!1,Mu:r},this.databaseId,this.O,this.ignoreUndefinedProperties)}}function Lf(t){const e=t._freezeSettings(),n=yi(t._databaseId);return new RE(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ff(t,e,n,s,r,i={}){const o=t.Fu(i.merge||i.mergeFields?2:0,e,n,r);Bf("Data must be an object, but it was:",o,s);const a=Vf(s,o);let c,l;if(i.merge)c=new bo(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const f of i.mergeFields){const p=ME(e,f,n);if(!o.contains(p))throw new M(E.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);LE(u,p)||u.push(p)}c=new bo(u),l=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,l=o.fieldTransforms;return new OE(new Qe(a),c,l)}class sc extends ec{_toFieldTransform(e){if(e.Vu!==2)throw e.Vu===1?e.Ou(`${this._methodName}() can only appear at the top level of your update data`):e.Ou(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof sc}}function Uf(t,e){if($f(t=bn(t)))return Bf("Unsupported field value:",e,t),Vf(t,e);if(t instanceof ec)return function(n,s){if(!Pf(s.Vu))throw s.Ou(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Ou(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Cu&&e.Vu!==4)throw e.Ou("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Uf(o,s.ku(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=bn(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Cv(s.O,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=je.fromDate(n);return{timestampValue:Mr(s.O,r)}}if(n instanceof je){const r=new je(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Mr(s.O,r)}}if(n instanceof tc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Dn)return{bytesValue:lf(s.O,n._byteString)};if(n instanceof qe){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.Ou(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Va(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.Ou(`Unsupported field value: ${Ya(n)}`)}(t,e)}function Vf(t,e){const n={};return Kh(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Vn(t,(s,r)=>{const i=Uf(r,e.Du(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function $f(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof je||t instanceof tc||t instanceof Dn||t instanceof qe||t instanceof ec)}function Bf(t,e,n){if(!$f(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Ya(n);throw s==="an object"?e.Ou(t+" a custom object"):e.Ou(t+" "+s)}}function ME(t,e,n){if((e=bn(e))instanceof Za)return e._internalPath;if(typeof e=="string")return jf(t,e);throw Lr("Field path arguments must be of type string or ",t,!1,void 0,n)}const PE=new RegExp("[~\\*/\\[\\]]");function jf(t,e,n){if(e.search(PE)>=0)throw Lr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Za(...e.split("."))._internalPath}catch{throw Lr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Lr(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new M(E.INVALID_ARGUMENT,a+t+c)}function LE(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class qf{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new FE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Kf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class FE extends qf{data(){return super.data()}}function Kf(t,e){return typeof e=="string"?jf(t,e):e instanceof Za?e._internalPath:e._delegate._internalPath}/**
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
 */class Yn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Hf extends qf{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new lr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Kf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class lr extends Hf{data(e={}){return super.data(e)}}class UE{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Yn(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new lr(this._firestore,this._userDataWriter,s.key,s,new Yn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new M(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new lr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Yn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new lr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Yn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:VE(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function VE(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return V()}}/**
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
 */function $E(t){if(kr(t)&&t.explicitOrderBy.length===0)throw new M(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
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
 */class BE{convertValue(e,n="none"){switch(Zt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Cn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw V()}}convertObject(e,n){const s={};return Vn(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new tc(ue(e.latitude),ue(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=zh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Es(e));default:return null}}convertTimestamp(e){const n=xt(e);return new je(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ie.fromString(e);J(df(s));const r=new An(s.get(1),s.get(3)),i=new P(s.popFirst(5));return r.isEqual(n)||Nt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function zf(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class Wf extends BE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Dn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new qe(this.firestore,null,n)}}function i0(t,e,n){t=En(t,qe);const s=En(t.firestore,Cs),r=zf(t.converter,e,n);return Gf(s,[Ff(Lf(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,zt.none())])}function o0(t,e){const n=En(t.firestore,Cs),s=xE(t),r=zf(t.converter,e);return Gf(n,[Ff(Lf(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,zt.exists(!1))]).then(()=>s)}function a0(t,...e){var n,s,r;t=bn(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Ll(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Ll(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(s=f.error)===null||s===void 0?void 0:s.bind(f),e[o+2]=(r=f.complete)===null||r===void 0?void 0:r.bind(f)}let c,l,u;if(t instanceof qe)l=En(t.firestore,Cs),u=Fa(t._key.path),c={next:f=>{e[o]&&e[o](jE(l,t,f))},error:e[o+1],complete:e[o+2]};else{const f=En(t,Ei);l=En(f.firestore,Cs),u=f._query;const p=new Wf(l);c={next:m=>{e[o]&&e[o](new UE(l,p,f,m))},error:e[o+1],complete:e[o+2]},$E(t._query)}return function(f,p,m,I){const O=new bE(I),R=new sE(p,O,m);return f.asyncQueue.enqueueAndForget(async()=>Zw(await kl(f),R)),()=>{O.Jc(),f.asyncQueue.enqueueAndForget(async()=>eE(await kl(f),R))}}(Rf(l),u,a,c)}function Gf(t,e){return function(n,s){const r=new Ht;return n.asyncQueue.enqueueAndForget(async()=>hE(await SE(n),s,r)),r.promise}(Rf(t),e)}function jE(t,e,n){const s=n.docs.get(e._key),r=new Wf(t);return new Hf(t,r,e._key,s,new Yn(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */function c0(){return new sc("deleteField")}(function(t,e=!0){(function(n){Un=n})(xm),wr(new fs("firestore",(n,{options:s})=>{const r=n.getProvider("app").getImmediate(),i=new Cs(r,new Zy(n.getProvider("auth-internal")),new sv(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),i._setSettings(s),i},"PUBLIC")),yn(rl,"3.4.5",t),yn(rl,"3.4.5","esm2017")})();export{qp as A,c0 as B,up as C,GE as D,t0 as E,ht as F,a0 as H,WE as T,KE as a,xE as b,tg as c,r0 as d,HE as e,XE as f,zE as g,ku as h,n0 as i,i0 as j,YE as k,Po as l,pt as m,s0 as n,Fp as o,Lo as p,Vp as q,zo as r,JE as s,qE as t,$d as u,e0 as v,Ni as w,QE as x,ZE as y,o0 as z};
