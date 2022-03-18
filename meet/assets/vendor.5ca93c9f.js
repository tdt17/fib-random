function No(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const Bf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",jf=No(Bf);function Al(t){return!!t||t===""}function xo(t){if(V(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=he(s)?Hf(s):xo(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(he(t))return t;if(pe(t))return t}}const qf=/;(?![^(]*\))/g,Kf=/:(.+)/;function Hf(t){const e={};return t.split(qf).forEach(n=>{if(n){const s=n.split(Kf);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Do(t){let e="";if(he(t))e=t;else if(V(t))for(let n=0;n<t.length;n++){const s=Do(t[n]);s&&(e+=s+" ")}else if(pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const xE=t=>he(t)?t:t==null?"":V(t)||pe(t)&&(t.toString===Dl||!B(t.toString))?JSON.stringify(t,Sl,2):String(t),Sl=(t,e)=>e&&e.__v_isRef?Sl(t,e.value):fn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Nl(e)?{[`Set(${e.size})`]:[...e.values()]}:pe(e)&&!V(e)&&!Rl(e)?String(e):e,Y={},hn=[],ze=()=>{},zf=()=>!1,Wf=/^on[^a-z]/,Mr=t=>Wf.test(t),Ro=t=>t.startsWith("onUpdate:"),Re=Object.assign,Oo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Gf=Object.prototype.hasOwnProperty,z=(t,e)=>Gf.call(t,e),V=Array.isArray,fn=t=>Pr(t)==="[object Map]",Nl=t=>Pr(t)==="[object Set]",B=t=>typeof t=="function",he=t=>typeof t=="string",ko=t=>typeof t=="symbol",pe=t=>t!==null&&typeof t=="object",xl=t=>pe(t)&&B(t.then)&&B(t.catch),Dl=Object.prototype.toString,Pr=t=>Dl.call(t),Xf=t=>Pr(t).slice(8,-1),Rl=t=>Pr(t)==="[object Object]",Mo=t=>he(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,er=No(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Lr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Qf=/-(\w)/g,Je=Lr(t=>t.replace(Qf,(e,n)=>n?n.toUpperCase():"")),Yf=/\B([A-Z])/g,Nn=Lr(t=>t.replace(Yf,"-$1").toLowerCase()),Fr=Lr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ei=Lr(t=>t?`on${Fr(t)}`:""),rs=(t,e)=>!Object.is(t,e),tr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},cr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Vi=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let tc;const Jf=()=>tc||(tc=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let rt;class Zf{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&rt&&(this.parent=rt,this.index=(rt.scopes||(rt.scopes=[])).push(this)-1)}run(e){if(this.active)try{return rt=this,e()}finally{rt=this.parent}}on(){rt=this}off(){rt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function ed(t,e=rt){e&&e.active&&e.effects.push(t)}const Po=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ol=t=>(t.w&Et)>0,kl=t=>(t.n&Et)>0,td=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Et},nd=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Ol(r)&&!kl(r)?r.delete(t):e[n++]=r,r.w&=~Et,r.n&=~Et}e.length=n}},$i=new WeakMap;let Wn=0,Et=1;const Bi=30;let Ye;const Lt=Symbol(""),ji=Symbol("");class Lo{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ed(this,s)}run(){if(!this.active)return this.fn();let e=Ye,n=yt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ye,Ye=this,yt=!0,Et=1<<++Wn,Wn<=Bi?td(this):nc(this),this.fn()}finally{Wn<=Bi&&nd(this),Et=1<<--Wn,Ye=this.parent,yt=n,this.parent=void 0}}stop(){this.active&&(nc(this),this.onStop&&this.onStop(),this.active=!1)}}function nc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let yt=!0;const Ml=[];function xn(){Ml.push(yt),yt=!1}function Dn(){const t=Ml.pop();yt=t===void 0?!0:t}function Be(t,e,n){if(yt&&Ye){let s=$i.get(t);s||$i.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Po()),Pl(r)}}function Pl(t,e){let n=!1;Wn<=Bi?kl(t)||(t.n|=Et,n=!Ol(t)):n=!t.has(Ye),n&&(t.add(Ye),Ye.deps.push(t))}function ut(t,e,n,s,r,i){const o=$i.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&V(t))o.forEach((c,l)=>{(l==="length"||l>=s)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":V(t)?Mo(n)&&a.push(o.get("length")):(a.push(o.get(Lt)),fn(t)&&a.push(o.get(ji)));break;case"delete":V(t)||(a.push(o.get(Lt)),fn(t)&&a.push(o.get(ji)));break;case"set":fn(t)&&a.push(o.get(Lt));break}if(a.length===1)a[0]&&qi(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);qi(Po(c))}}function qi(t,e){for(const n of V(t)?t:[...t])(n!==Ye||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const sd=No("__proto__,__v_isRef,__isVue"),Ll=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(ko)),rd=Fo(),id=Fo(!1,!0),od=Fo(!0),sc=ad();function ad(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=G(this);for(let i=0,o=this.length;i<o;i++)Be(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(G)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){xn();const s=G(this)[e].apply(this,n);return Dn(),s}}),t}function Fo(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Id:Bl:e?$l:Vl).get(s))return s;const o=V(s);if(!t&&o&&z(sc,r))return Reflect.get(sc,r,i);const a=Reflect.get(s,r,i);return(ko(r)?Ll.has(r):sd(r))||(t||Be(s,"get",r),e)?a:we(a)?!o||!Mo(r)?a.value:a:pe(a)?t?jl(a):$o(a):a}}const cd=Fl(),ld=Fl(!0);function Fl(t=!1){return function(n,s,r,i){let o=n[s];if(is(o)&&we(o)&&!we(r))return!1;if(!t&&!is(r)&&(ql(r)||(r=G(r),o=G(o)),!V(n)&&we(o)&&!we(r)))return o.value=r,!0;const a=V(n)&&Mo(s)?Number(s)<n.length:z(n,s),c=Reflect.set(n,s,r,i);return n===G(i)&&(a?rs(r,o)&&ut(n,"set",s,r):ut(n,"add",s,r)),c}}function ud(t,e){const n=z(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&ut(t,"delete",e,void 0),s}function hd(t,e){const n=Reflect.has(t,e);return(!ko(e)||!Ll.has(e))&&Be(t,"has",e),n}function fd(t){return Be(t,"iterate",V(t)?"length":Lt),Reflect.ownKeys(t)}const Ul={get:rd,set:cd,deleteProperty:ud,has:hd,ownKeys:fd},dd={get:od,set(t,e){return!0},deleteProperty(t,e){return!0}},pd=Re({},Ul,{get:id,set:ld}),Uo=t=>t,Ur=t=>Reflect.getPrototypeOf(t);function Ks(t,e,n=!1,s=!1){t=t.__v_raw;const r=G(t),i=G(e);e!==i&&!n&&Be(r,"get",e),!n&&Be(r,"get",i);const{has:o}=Ur(r),a=s?Uo:n?jo:os;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Hs(t,e=!1){const n=this.__v_raw,s=G(n),r=G(t);return t!==r&&!e&&Be(s,"has",t),!e&&Be(s,"has",r),t===r?n.has(t):n.has(t)||n.has(r)}function zs(t,e=!1){return t=t.__v_raw,!e&&Be(G(t),"iterate",Lt),Reflect.get(t,"size",t)}function rc(t){t=G(t);const e=G(this);return Ur(e).has.call(e,t)||(e.add(t),ut(e,"add",t,t)),this}function ic(t,e){e=G(e);const n=G(this),{has:s,get:r}=Ur(n);let i=s.call(n,t);i||(t=G(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?rs(e,o)&&ut(n,"set",t,e):ut(n,"add",t,e),this}function oc(t){const e=G(this),{has:n,get:s}=Ur(e);let r=n.call(e,t);r||(t=G(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&ut(e,"delete",t,void 0),i}function ac(){const t=G(this),e=t.size!==0,n=t.clear();return e&&ut(t,"clear",void 0,void 0),n}function Ws(t,e){return function(s,r){const i=this,o=i.__v_raw,a=G(o),c=e?Uo:t?jo:os;return!t&&Be(a,"iterate",Lt),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function Gs(t,e,n){return function(...s){const r=this.__v_raw,i=G(r),o=fn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?Uo:e?jo:os;return!e&&Be(i,"iterate",c?ji:Lt),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function pt(t){return function(...e){return t==="delete"?!1:this}}function gd(){const t={get(i){return Ks(this,i)},get size(){return zs(this)},has:Hs,add:rc,set:ic,delete:oc,clear:ac,forEach:Ws(!1,!1)},e={get(i){return Ks(this,i,!1,!0)},get size(){return zs(this)},has:Hs,add:rc,set:ic,delete:oc,clear:ac,forEach:Ws(!1,!0)},n={get(i){return Ks(this,i,!0)},get size(){return zs(this,!0)},has(i){return Hs.call(this,i,!0)},add:pt("add"),set:pt("set"),delete:pt("delete"),clear:pt("clear"),forEach:Ws(!0,!1)},s={get(i){return Ks(this,i,!0,!0)},get size(){return zs(this,!0)},has(i){return Hs.call(this,i,!0)},add:pt("add"),set:pt("set"),delete:pt("delete"),clear:pt("clear"),forEach:Ws(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Gs(i,!1,!1),n[i]=Gs(i,!0,!1),e[i]=Gs(i,!1,!0),s[i]=Gs(i,!0,!0)}),[t,n,e,s]}const[md,yd,vd,wd]=gd();function Vo(t,e){const n=e?t?wd:vd:t?yd:md;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(z(n,r)&&r in s?n:s,r,i)}const Ed={get:Vo(!1,!1)},Td={get:Vo(!1,!0)},bd={get:Vo(!0,!1)},Vl=new WeakMap,$l=new WeakMap,Bl=new WeakMap,Id=new WeakMap;function _d(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Cd(t){return t.__v_skip||!Object.isExtensible(t)?0:_d(Xf(t))}function $o(t){return is(t)?t:Bo(t,!1,Ul,Ed,Vl)}function Ad(t){return Bo(t,!1,pd,Td,$l)}function jl(t){return Bo(t,!0,dd,bd,Bl)}function Bo(t,e,n,s,r){if(!pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Cd(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function dn(t){return is(t)?dn(t.__v_raw):!!(t&&t.__v_isReactive)}function is(t){return!!(t&&t.__v_isReadonly)}function ql(t){return!!(t&&t.__v_isShallow)}function Kl(t){return dn(t)||is(t)}function G(t){const e=t&&t.__v_raw;return e?G(e):t}function Hl(t){return cr(t,"__v_skip",!0),t}const os=t=>pe(t)?$o(t):t,jo=t=>pe(t)?jl(t):t;function zl(t){yt&&Ye&&(t=G(t),Pl(t.dep||(t.dep=Po())))}function Wl(t,e){t=G(t),t.dep&&qi(t.dep)}function we(t){return!!(t&&t.__v_isRef===!0)}function DE(t){return Sd(t,!1)}function Sd(t,e){return we(t)?t:new Nd(t,e)}class Nd{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:G(e),this._value=n?e:os(e)}get value(){return zl(this),this._value}set value(e){e=this.__v_isShallow?e:G(e),rs(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:os(e),Wl(this))}}function xd(t){return we(t)?t.value:t}const Dd={get:(t,e,n)=>xd(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return we(r)&&!we(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Gl(t){return dn(t)?t:new Proxy(t,Dd)}class Rd{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Lo(e,()=>{this._dirty||(this._dirty=!0,Wl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=G(this);return zl(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Od(t,e,n=!1){let s,r;const i=B(t);return i?(s=t,r=ze):(s=t.get,r=t.set),new Rd(s,r,i||!r,n)}Promise.resolve();function vt(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Vr(i,e,n)}return r}function We(t,e,n,s){if(B(t)){const i=vt(t,e,n,s);return i&&xl(i)&&i.catch(o=>{Vr(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(We(t[i],e,n,s));return r}function Vr(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){vt(c,null,10,[t,o,a]);return}}kd(t,n,r,s)}function kd(t,e,n,s=!0){console.error(t)}let lr=!1,Ki=!1;const Ue=[];let ot=0;const Yn=[];let Gn=null,on=0;const Jn=[];let gt=null,an=0;const Xl=Promise.resolve();let qo=null,Hi=null;function Md(t){const e=qo||Xl;return t?e.then(this?t.bind(this):t):e}function Pd(t){let e=ot+1,n=Ue.length;for(;e<n;){const s=e+n>>>1;as(Ue[s])<t?e=s+1:n=s}return e}function Ql(t){(!Ue.length||!Ue.includes(t,lr&&t.allowRecurse?ot+1:ot))&&t!==Hi&&(t.id==null?Ue.push(t):Ue.splice(Pd(t.id),0,t),Yl())}function Yl(){!lr&&!Ki&&(Ki=!0,qo=Xl.then(eu))}function Ld(t){const e=Ue.indexOf(t);e>ot&&Ue.splice(e,1)}function Jl(t,e,n,s){V(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),Yl()}function Fd(t){Jl(t,Gn,Yn,on)}function Ud(t){Jl(t,gt,Jn,an)}function Ko(t,e=null){if(Yn.length){for(Hi=e,Gn=[...new Set(Yn)],Yn.length=0,on=0;on<Gn.length;on++)Gn[on]();Gn=null,on=0,Hi=null,Ko(t,e)}}function Zl(t){if(Jn.length){const e=[...new Set(Jn)];if(Jn.length=0,gt){gt.push(...e);return}for(gt=e,gt.sort((n,s)=>as(n)-as(s)),an=0;an<gt.length;an++)gt[an]();gt=null,an=0}}const as=t=>t.id==null?1/0:t.id;function eu(t){Ki=!1,lr=!0,Ko(t),Ue.sort((n,s)=>as(n)-as(s));const e=ze;try{for(ot=0;ot<Ue.length;ot++){const n=Ue[ot];n&&n.active!==!1&&vt(n,null,14)}}finally{ot=0,Ue.length=0,Zl(),lr=!1,qo=null,(Ue.length||Yn.length||Jn.length)&&eu(t)}}function Vd(t,e,...n){const s=t.vnode.props||Y;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=s[u]||Y;p?r=n.map(v=>v.trim()):f&&(r=n.map(Vi))}let a,c=s[a=Ei(e)]||s[a=Ei(Je(e))];!c&&i&&(c=s[a=Ei(Nn(e))]),c&&We(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,We(l,t,6,r)}}function tu(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!B(t)){const c=l=>{const u=tu(l,e,!0);u&&(a=!0,Re(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(s.set(t,null),null):(V(i)?i.forEach(c=>o[c]=null):Re(o,i),s.set(t,o),o)}function Ho(t,e){return!t||!Mr(e)?!1:(e=e.slice(2).replace(/Once$/,""),z(t,e[0].toLowerCase()+e.slice(1))||z(t,Nn(e))||z(t,e))}let He=null,nu=null;function ur(t){const e=He;return He=t,nu=t&&t.type.__scopeId||null,e}function $d(t,e=He,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&yc(-1);const i=ur(e),o=t(...r);return ur(i),s._d&&yc(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function Ti(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:p,setupState:v,ctx:C,inheritAttrs:k}=t;let O,j;const fe=ur(t);try{if(n.shapeFlag&4){const oe=r||s;O=Qe(u.call(oe,oe,f,i,v,p,C)),j=c}else{const oe=e;O=Qe(oe.length>1?oe(i,{attrs:c,slots:a,emit:l}):oe(i,null)),j=e.props?c:Bd(c)}}catch(oe){Zn.length=0,Vr(oe,t,1),O=ct(jt)}let ue=O;if(j&&k!==!1){const oe=Object.keys(j),{shapeFlag:tt}=ue;oe.length&&tt&7&&(o&&oe.some(Ro)&&(j=jd(j,o)),ue=cs(ue,j))}return n.dirs&&(ue.dirs=ue.dirs?ue.dirs.concat(n.dirs):n.dirs),n.transition&&(ue.transition=n.transition),O=ue,ur(fe),O}const Bd=t=>{let e;for(const n in t)(n==="class"||n==="style"||Mr(n))&&((e||(e={}))[n]=t[n]);return e},jd=(t,e)=>{const n={};for(const s in t)(!Ro(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function qd(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?cc(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==s[p]&&!Ho(l,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?cc(s,o,l):!0:!!o;return!1}function cc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Ho(n,i))return!0}return!1}function Kd({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Hd=t=>t.__isSuspense;function zd(t,e){e&&e.pendingBranch?V(t)?e.effects.push(...t):e.effects.push(t):Ud(t)}function Wd(t,e){if(ve){let n=ve.provides;const s=ve.parent&&ve.parent.provides;s===n&&(n=ve.provides=Object.create(s)),n[t]=e}}function bi(t,e,n=!1){const s=ve||He;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&B(e)?e.call(s.proxy):e}}const lc={};function Ii(t,e,n){return su(t,e,n)}function su(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=Y){const a=ve;let c,l=!1,u=!1;if(we(t)?(c=()=>t.value,l=ql(t)):dn(t)?(c=()=>t,s=!0):V(t)?(u=!0,l=t.some(dn),c=()=>t.map(j=>{if(we(j))return j.value;if(dn(j))return kt(j);if(B(j))return vt(j,a,2)})):B(t)?e?c=()=>vt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),We(t,a,3,[p])}:c=ze,e&&s){const j=c;c=()=>kt(j())}let f,p=j=>{f=O.onStop=()=>{vt(j,a,4)}};if(ls)return p=ze,e?n&&We(e,a,3,[c(),u?[]:void 0,p]):c(),ze;let v=u?[]:lc;const C=()=>{if(!!O.active)if(e){const j=O.run();(s||l||(u?j.some((fe,ue)=>rs(fe,v[ue])):rs(j,v)))&&(f&&f(),We(e,a,3,[j,v===lc?void 0:v,p]),v=j)}else O.run()};C.allowRecurse=!!e;let k;r==="sync"?k=C:r==="post"?k=()=>ke(C,a&&a.suspense):k=()=>{!a||a.isMounted?Fd(C):C()};const O=new Lo(c,k);return e?n?C():v=O.run():r==="post"?ke(O.run.bind(O),a&&a.suspense):O.run(),()=>{O.stop(),a&&a.scope&&Oo(a.scope.effects,O)}}function Gd(t,e,n){const s=this.proxy,r=he(t)?t.includes(".")?ru(s,t):()=>s[t]:t.bind(s,s);let i;B(e)?i=e:(i=e.handler,n=e);const o=ve;vn(this);const a=su(r,i.bind(s),n);return o?vn(o):Ut(),a}function ru(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function kt(t,e){if(!pe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),we(t))kt(t.value,e);else if(V(t))for(let n=0;n<t.length;n++)kt(t[n],e);else if(Nl(t)||fn(t))t.forEach(n=>{kt(n,e)});else if(Rl(t))for(const n in t)kt(t[n],e);return t}function RE(t){return B(t)?{setup:t,name:t.name}:t}const zi=t=>!!t.type.__asyncLoader,iu=t=>t.type.__isKeepAlive;function Xd(t,e){ou(t,"a",e)}function Qd(t,e){ou(t,"da",e)}function ou(t,e,n=ve){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if($r(e,s,n),n){let r=n.parent;for(;r&&r.parent;)iu(r.parent.vnode)&&Yd(s,e,n,r),r=r.parent}}function Yd(t,e,n,s){const r=$r(e,t,s,!0);au(()=>{Oo(s[e],r)},n)}function $r(t,e,n=ve,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;xn(),vn(n);const a=We(e,n,t,o);return Ut(),Dn(),a});return s?r.unshift(i):r.push(i),i}}const ft=t=>(e,n=ve)=>(!ls||t==="sp")&&$r(t,e,n),Jd=ft("bm"),Zd=ft("m"),ep=ft("bu"),tp=ft("u"),np=ft("bum"),au=ft("um"),sp=ft("sp"),rp=ft("rtg"),ip=ft("rtc");function op(t,e=ve){$r("ec",t,e)}let Wi=!0;function ap(t){const e=lu(t),n=t.proxy,s=t.ctx;Wi=!1,e.beforeCreate&&uc(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:p,beforeUpdate:v,updated:C,activated:k,deactivated:O,beforeDestroy:j,beforeUnmount:fe,destroyed:ue,unmounted:oe,render:tt,renderTracked:Vn,renderTriggered:Zt,errorCaptured:Bs,serverPrefetch:St,expose:$n,inheritAttrs:en,components:Bn,directives:js,filters:Xa}=e;if(l&&cp(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ie in o){const Z=o[ie];B(Z)&&(s[ie]=Z.bind(n))}if(r){const ie=r.call(n,n);pe(ie)&&(t.data=$o(ie))}if(Wi=!0,i)for(const ie in i){const Z=i[ie],nt=B(Z)?Z.bind(n,n):B(Z.get)?Z.get.bind(n,n):ze,yi=!B(Z)&&B(Z.set)?Z.set.bind(n):ze,jn=jp({get:nt,set:yi});Object.defineProperty(s,ie,{enumerable:!0,configurable:!0,get:()=>jn.value,set:tn=>jn.value=tn})}if(a)for(const ie in a)cu(a[ie],s,n,ie);if(c){const ie=B(c)?c.call(n):c;Reflect.ownKeys(ie).forEach(Z=>{Wd(Z,ie[Z])})}u&&uc(u,t,"c");function Oe(ie,Z){V(Z)?Z.forEach(nt=>ie(nt.bind(n))):Z&&ie(Z.bind(n))}if(Oe(Jd,f),Oe(Zd,p),Oe(ep,v),Oe(tp,C),Oe(Xd,k),Oe(Qd,O),Oe(op,Bs),Oe(ip,Vn),Oe(rp,Zt),Oe(np,fe),Oe(au,oe),Oe(sp,St),V($n))if($n.length){const ie=t.exposed||(t.exposed={});$n.forEach(Z=>{Object.defineProperty(ie,Z,{get:()=>n[Z],set:nt=>n[Z]=nt})})}else t.exposed||(t.exposed={});tt&&t.render===ze&&(t.render=tt),en!=null&&(t.inheritAttrs=en),Bn&&(t.components=Bn),js&&(t.directives=js)}function cp(t,e,n=ze,s=!1){V(t)&&(t=Gi(t));for(const r in t){const i=t[r];let o;pe(i)?"default"in i?o=bi(i.from||r,i.default,!0):o=bi(i.from||r):o=bi(i),we(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function uc(t,e,n){We(V(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function cu(t,e,n,s){const r=s.includes(".")?ru(n,s):()=>n[s];if(he(t)){const i=e[t];B(i)&&Ii(r,i)}else if(B(t))Ii(r,t.bind(n));else if(pe(t))if(V(t))t.forEach(i=>cu(i,e,n,s));else{const i=B(t.handler)?t.handler.bind(n):e[t.handler];B(i)&&Ii(r,i,t)}}function lu(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>hr(c,l,o,!0)),hr(c,e,o)),i.set(e,c),c}function hr(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&hr(t,i,n,!0),r&&r.forEach(o=>hr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=lp[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const lp={data:hc,props:Dt,emits:Dt,methods:Dt,computed:Dt,beforeCreate:Se,created:Se,beforeMount:Se,mounted:Se,beforeUpdate:Se,updated:Se,beforeDestroy:Se,beforeUnmount:Se,destroyed:Se,unmounted:Se,activated:Se,deactivated:Se,errorCaptured:Se,serverPrefetch:Se,components:Dt,directives:Dt,watch:hp,provide:hc,inject:up};function hc(t,e){return e?t?function(){return Re(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function up(t,e){return Dt(Gi(t),Gi(e))}function Gi(t){if(V(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Se(t,e){return t?[...new Set([].concat(t,e))]:e}function Dt(t,e){return t?Re(Re(Object.create(null),t),e):e}function hp(t,e){if(!t)return e;if(!e)return t;const n=Re(Object.create(null),t);for(const s in e)n[s]=Se(t[s],e[s]);return n}function fp(t,e,n,s=!1){const r={},i={};cr(i,Br,1),t.propsDefaults=Object.create(null),uu(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Ad(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function dp(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=G(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];const v=e[p];if(c)if(z(i,p))v!==i[p]&&(i[p]=v,l=!0);else{const C=Je(p);r[C]=Xi(c,a,C,v,t,!1)}else v!==i[p]&&(i[p]=v,l=!0)}}}else{uu(t,e,r,i)&&(l=!0);let u;for(const f in a)(!e||!z(e,f)&&((u=Nn(f))===f||!z(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Xi(c,a,f,void 0,t,!0)):delete r[f]);if(i!==a)for(const f in i)(!e||!z(e,f)&&!0)&&(delete i[f],l=!0)}l&&ut(t,"set","$attrs")}function uu(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(er(c))continue;const l=e[c];let u;r&&z(r,u=Je(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Ho(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=G(n),l=a||Y;for(let u=0;u<i.length;u++){const f=i[u];n[f]=Xi(r,c,f,l[f],t,!z(l,f))}}return o}function Xi(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=z(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&B(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(vn(r),s=l[n]=c.call(null,e),Ut())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Nn(n))&&(s=!0))}return s}function hu(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!B(t)){const u=f=>{c=!0;const[p,v]=hu(f,e,!0);Re(o,p),v&&a.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return s.set(t,hn),hn;if(V(i))for(let u=0;u<i.length;u++){const f=Je(i[u]);fc(f)&&(o[f]=Y)}else if(i)for(const u in i){const f=Je(u);if(fc(f)){const p=i[u],v=o[f]=V(p)||B(p)?{type:p}:p;if(v){const C=gc(Boolean,v.type),k=gc(String,v.type);v[0]=C>-1,v[1]=k<0||C<k,(C>-1||z(v,"default"))&&a.push(f)}}}const l=[o,a];return s.set(t,l),l}function fc(t){return t[0]!=="$"}function dc(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function pc(t,e){return dc(t)===dc(e)}function gc(t,e){return V(e)?e.findIndex(n=>pc(n,t)):B(e)&&pc(e,t)?0:-1}const fu=t=>t[0]==="_"||t==="$stable",zo=t=>V(t)?t.map(Qe):[Qe(t)],pp=(t,e,n)=>{const s=$d((...r)=>zo(e(...r)),n);return s._c=!1,s},du=(t,e,n)=>{const s=t._ctx;for(const r in t){if(fu(r))continue;const i=t[r];if(B(i))e[r]=pp(r,i,s);else if(i!=null){const o=zo(i);e[r]=()=>o}}},pu=(t,e)=>{const n=zo(e);t.slots.default=()=>n},gp=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=G(e),cr(e,"_",n)):du(e,t.slots={})}else t.slots={},e&&pu(t,e);cr(t.slots,Br,1)},mp=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Y;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Re(r,e),!n&&a===1&&delete r._):(i=!e.$stable,du(e,r)),o=e}else e&&(pu(t,e),o={default:1});if(i)for(const a in r)!fu(a)&&!(a in o)&&delete r[a]};function OE(t,e){const n=He;if(n===null)return t;const s=n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Y]=e[i];B(o)&&(o={mounted:o,updated:o}),o.deep&&kt(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function Nt(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(xn(),We(c,n,8,[t.el,a,t,e]),Dn())}}function gu(){return{app:null,config:{isNativeTag:zf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yp=0;function vp(t,e){return function(s,r=null){r!=null&&!pe(r)&&(r=null);const i=gu(),o=new Set;let a=!1;const c=i.app={_uid:yp++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:qp,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&B(l.install)?(o.add(l),l.install(c,...u)):B(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,f){if(!a){const p=ct(s,r);return p.appContext=i,u&&e?e(p,l):t(p,l,f),a=!0,c._container=l,l.__vue_app__=c,Xo(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Qi(t,e,n,s,r=!1){if(V(t)){t.forEach((p,v)=>Qi(p,e&&(V(e)?e[v]:e),n,s,r));return}if(zi(s)&&!r)return;const i=s.shapeFlag&4?Xo(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Y?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(he(l)?(u[l]=null,z(f,l)&&(f[l]=null)):we(l)&&(l.value=null)),B(c))vt(c,a,12,[o,u]);else{const p=he(c),v=we(c);if(p||v){const C=()=>{if(t.f){const k=p?u[c]:c.value;r?V(k)&&Oo(k,i):V(k)?k.includes(i)||k.push(i):p?u[c]=[i]:(c.value=[i],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,z(f,c)&&(f[c]=o)):we(c)&&(c.value=o,t.k&&(u[t.k]=o))};o?(C.id=-1,ke(C,n)):C()}}}const ke=zd;function wp(t){return Ep(t)}function Ep(t,e){const n=Jf();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:p,setScopeId:v=ze,cloneNode:C,insertStaticContent:k}=t,O=(h,d,g,y=null,m=null,b=null,A=!1,T=null,_=!!d.dynamicChildren)=>{if(h===d)return;h&&!Kn(h,d)&&(y=qs(h),dt(h,m,b,!0),h=null),d.patchFlag===-2&&(_=!1,d.dynamicChildren=null);const{type:w,ref:D,shapeFlag:N}=d;switch(w){case Wo:j(h,d,g,y);break;case jt:fe(h,d,g,y);break;case _i:h==null&&ue(d,g,y,A);break;case it:js(h,d,g,y,m,b,A,T,_);break;default:N&1?Vn(h,d,g,y,m,b,A,T,_):N&6?Xa(h,d,g,y,m,b,A,T,_):(N&64||N&128)&&w.process(h,d,g,y,m,b,A,T,_,nn)}D!=null&&m&&Qi(D,h&&h.ref,b,d||h,!d)},j=(h,d,g,y)=>{if(h==null)s(d.el=a(d.children),g,y);else{const m=d.el=h.el;d.children!==h.children&&l(m,d.children)}},fe=(h,d,g,y)=>{h==null?s(d.el=c(d.children||""),g,y):d.el=h.el},ue=(h,d,g,y)=>{[h.el,h.anchor]=k(h.children,d,g,y,h.el,h.anchor)},oe=({el:h,anchor:d},g,y)=>{let m;for(;h&&h!==d;)m=p(h),s(h,g,y),h=m;s(d,g,y)},tt=({el:h,anchor:d})=>{let g;for(;h&&h!==d;)g=p(h),r(h),h=g;r(d)},Vn=(h,d,g,y,m,b,A,T,_)=>{A=A||d.type==="svg",h==null?Zt(d,g,y,m,b,A,T,_):$n(h,d,m,b,A,T,_)},Zt=(h,d,g,y,m,b,A,T)=>{let _,w;const{type:D,props:N,shapeFlag:R,transition:F,patchFlag:H,dirs:ne}=h;if(h.el&&C!==void 0&&H===-1)_=h.el=C(h.el);else{if(_=h.el=o(h.type,b,N&&N.is,N),R&8?u(_,h.children):R&16&&St(h.children,_,null,y,m,b&&D!=="foreignObject",A,T),ne&&Nt(h,null,y,"created"),N){for(const ee in N)ee!=="value"&&!er(ee)&&i(_,ee,null,N[ee],b,h.children,y,m,st);"value"in N&&i(_,"value",null,N.value),(w=N.onVnodeBeforeMount)&&Xe(w,y,h)}Bs(_,h,h.scopeId,A,y)}ne&&Nt(h,null,y,"beforeMount");const Q=(!m||m&&!m.pendingBranch)&&F&&!F.persisted;Q&&F.beforeEnter(_),s(_,d,g),((w=N&&N.onVnodeMounted)||Q||ne)&&ke(()=>{w&&Xe(w,y,h),Q&&F.enter(_),ne&&Nt(h,null,y,"mounted")},m)},Bs=(h,d,g,y,m)=>{if(g&&v(h,g),y)for(let b=0;b<y.length;b++)v(h,y[b]);if(m){let b=m.subTree;if(d===b){const A=m.vnode;Bs(h,A,A.scopeId,A.slotScopeIds,m.parent)}}},St=(h,d,g,y,m,b,A,T,_=0)=>{for(let w=_;w<h.length;w++){const D=h[w]=T?mt(h[w]):Qe(h[w]);O(null,D,d,g,y,m,b,A,T)}},$n=(h,d,g,y,m,b,A)=>{const T=d.el=h.el;let{patchFlag:_,dynamicChildren:w,dirs:D}=d;_|=h.patchFlag&16;const N=h.props||Y,R=d.props||Y;let F;g&&xt(g,!1),(F=R.onVnodeBeforeUpdate)&&Xe(F,g,d,h),D&&Nt(d,h,g,"beforeUpdate"),g&&xt(g,!0);const H=m&&d.type!=="foreignObject";if(w?en(h.dynamicChildren,w,T,g,y,H,b):A||nt(h,d,T,null,g,y,H,b,!1),_>0){if(_&16)Bn(T,d,N,R,g,y,m);else if(_&2&&N.class!==R.class&&i(T,"class",null,R.class,m),_&4&&i(T,"style",N.style,R.style,m),_&8){const ne=d.dynamicProps;for(let Q=0;Q<ne.length;Q++){const ee=ne[Q],qe=N[ee],sn=R[ee];(sn!==qe||ee==="value")&&i(T,ee,qe,sn,m,h.children,g,y,st)}}_&1&&h.children!==d.children&&u(T,d.children)}else!A&&w==null&&Bn(T,d,N,R,g,y,m);((F=R.onVnodeUpdated)||D)&&ke(()=>{F&&Xe(F,g,d,h),D&&Nt(d,h,g,"updated")},y)},en=(h,d,g,y,m,b,A)=>{for(let T=0;T<d.length;T++){const _=h[T],w=d[T],D=_.el&&(_.type===it||!Kn(_,w)||_.shapeFlag&70)?f(_.el):g;O(_,w,D,null,y,m,b,A,!0)}},Bn=(h,d,g,y,m,b,A)=>{if(g!==y){for(const T in y){if(er(T))continue;const _=y[T],w=g[T];_!==w&&T!=="value"&&i(h,T,w,_,A,d.children,m,b,st)}if(g!==Y)for(const T in g)!er(T)&&!(T in y)&&i(h,T,g[T],null,A,d.children,m,b,st);"value"in y&&i(h,"value",g.value,y.value)}},js=(h,d,g,y,m,b,A,T,_)=>{const w=d.el=h?h.el:a(""),D=d.anchor=h?h.anchor:a("");let{patchFlag:N,dynamicChildren:R,slotScopeIds:F}=d;F&&(T=T?T.concat(F):F),h==null?(s(w,g,y),s(D,g,y),St(d.children,g,D,m,b,A,T,_)):N>0&&N&64&&R&&h.dynamicChildren?(en(h.dynamicChildren,R,g,m,b,A,T),(d.key!=null||m&&d===m.subTree)&&mu(h,d,!0)):nt(h,d,g,D,m,b,A,T,_)},Xa=(h,d,g,y,m,b,A,T,_)=>{d.slotScopeIds=T,h==null?d.shapeFlag&512?m.ctx.activate(d,g,y,A,_):mi(d,g,y,m,b,A,_):Oe(h,d,_)},mi=(h,d,g,y,m,b,A)=>{const T=h.component=Pp(h,y,m);if(iu(h)&&(T.ctx.renderer=nn),Lp(T),T.asyncDep){if(m&&m.registerDep(T,ie),!h.el){const _=T.subTree=ct(jt);fe(null,_,d,g)}return}ie(T,h,d,g,m,b,A)},Oe=(h,d,g)=>{const y=d.component=h.component;if(qd(h,d,g))if(y.asyncDep&&!y.asyncResolved){Z(y,d,g);return}else y.next=d,Ld(y.update),y.update();else d.component=h.component,d.el=h.el,y.vnode=d},ie=(h,d,g,y,m,b,A)=>{const T=()=>{if(h.isMounted){let{next:D,bu:N,u:R,parent:F,vnode:H}=h,ne=D,Q;xt(h,!1),D?(D.el=H.el,Z(h,D,A)):D=H,N&&tr(N),(Q=D.props&&D.props.onVnodeBeforeUpdate)&&Xe(Q,F,D,H),xt(h,!0);const ee=Ti(h),qe=h.subTree;h.subTree=ee,O(qe,ee,f(qe.el),qs(qe),h,m,b),D.el=ee.el,ne===null&&Kd(h,ee.el),R&&ke(R,m),(Q=D.props&&D.props.onVnodeUpdated)&&ke(()=>Xe(Q,F,D,H),m)}else{let D;const{el:N,props:R}=d,{bm:F,m:H,parent:ne}=h,Q=zi(d);if(xt(h,!1),F&&tr(F),!Q&&(D=R&&R.onVnodeBeforeMount)&&Xe(D,ne,d),xt(h,!0),N&&wi){const ee=()=>{h.subTree=Ti(h),wi(N,h.subTree,h,m,null)};Q?d.type.__asyncLoader().then(()=>!h.isUnmounted&&ee()):ee()}else{const ee=h.subTree=Ti(h);O(null,ee,g,y,h,m,b),d.el=ee.el}if(H&&ke(H,m),!Q&&(D=R&&R.onVnodeMounted)){const ee=d;ke(()=>Xe(D,ne,ee),m)}d.shapeFlag&256&&h.a&&ke(h.a,m),h.isMounted=!0,d=g=y=null}},_=h.effect=new Lo(T,()=>Ql(h.update),h.scope),w=h.update=_.run.bind(_);w.id=h.uid,xt(h,!0),w()},Z=(h,d,g)=>{d.component=h;const y=h.vnode.props;h.vnode=d,h.next=null,dp(h,d.props,y,g),mp(h,d.children,g),xn(),Ko(void 0,h.update),Dn()},nt=(h,d,g,y,m,b,A,T,_=!1)=>{const w=h&&h.children,D=h?h.shapeFlag:0,N=d.children,{patchFlag:R,shapeFlag:F}=d;if(R>0){if(R&128){jn(w,N,g,y,m,b,A,T,_);return}else if(R&256){yi(w,N,g,y,m,b,A,T,_);return}}F&8?(D&16&&st(w,m,b),N!==w&&u(g,N)):D&16?F&16?jn(w,N,g,y,m,b,A,T,_):st(w,m,b,!0):(D&8&&u(g,""),F&16&&St(N,g,y,m,b,A,T,_))},yi=(h,d,g,y,m,b,A,T,_)=>{h=h||hn,d=d||hn;const w=h.length,D=d.length,N=Math.min(w,D);let R;for(R=0;R<N;R++){const F=d[R]=_?mt(d[R]):Qe(d[R]);O(h[R],F,g,null,m,b,A,T,_)}w>D?st(h,m,b,!0,!1,N):St(d,g,y,m,b,A,T,_,N)},jn=(h,d,g,y,m,b,A,T,_)=>{let w=0;const D=d.length;let N=h.length-1,R=D-1;for(;w<=N&&w<=R;){const F=h[w],H=d[w]=_?mt(d[w]):Qe(d[w]);if(Kn(F,H))O(F,H,g,null,m,b,A,T,_);else break;w++}for(;w<=N&&w<=R;){const F=h[N],H=d[R]=_?mt(d[R]):Qe(d[R]);if(Kn(F,H))O(F,H,g,null,m,b,A,T,_);else break;N--,R--}if(w>N){if(w<=R){const F=R+1,H=F<D?d[F].el:y;for(;w<=R;)O(null,d[w]=_?mt(d[w]):Qe(d[w]),g,H,m,b,A,T,_),w++}}else if(w>R)for(;w<=N;)dt(h[w],m,b,!0),w++;else{const F=w,H=w,ne=new Map;for(w=H;w<=R;w++){const Fe=d[w]=_?mt(d[w]):Qe(d[w]);Fe.key!=null&&ne.set(Fe.key,w)}let Q,ee=0;const qe=R-H+1;let sn=!1,Ja=0;const qn=new Array(qe);for(w=0;w<qe;w++)qn[w]=0;for(w=F;w<=N;w++){const Fe=h[w];if(ee>=qe){dt(Fe,m,b,!0);continue}let Ge;if(Fe.key!=null)Ge=ne.get(Fe.key);else for(Q=H;Q<=R;Q++)if(qn[Q-H]===0&&Kn(Fe,d[Q])){Ge=Q;break}Ge===void 0?dt(Fe,m,b,!0):(qn[Ge-H]=w+1,Ge>=Ja?Ja=Ge:sn=!0,O(Fe,d[Ge],g,null,m,b,A,T,_),ee++)}const Za=sn?Tp(qn):hn;for(Q=Za.length-1,w=qe-1;w>=0;w--){const Fe=H+w,Ge=d[Fe],ec=Fe+1<D?d[Fe+1].el:y;qn[w]===0?O(null,Ge,g,ec,m,b,A,T,_):sn&&(Q<0||w!==Za[Q]?tn(Ge,g,ec,2):Q--)}}},tn=(h,d,g,y,m=null)=>{const{el:b,type:A,transition:T,children:_,shapeFlag:w}=h;if(w&6){tn(h.component.subTree,d,g,y);return}if(w&128){h.suspense.move(d,g,y);return}if(w&64){A.move(h,d,g,nn);return}if(A===it){s(b,d,g);for(let N=0;N<_.length;N++)tn(_[N],d,g,y);s(h.anchor,d,g);return}if(A===_i){oe(h,d,g);return}if(y!==2&&w&1&&T)if(y===0)T.beforeEnter(b),s(b,d,g),ke(()=>T.enter(b),m);else{const{leave:N,delayLeave:R,afterLeave:F}=T,H=()=>s(b,d,g),ne=()=>{N(b,()=>{H(),F&&F()})};R?R(b,H,ne):ne()}else s(b,d,g)},dt=(h,d,g,y=!1,m=!1)=>{const{type:b,props:A,ref:T,children:_,dynamicChildren:w,shapeFlag:D,patchFlag:N,dirs:R}=h;if(T!=null&&Qi(T,null,g,h,!0),D&256){d.ctx.deactivate(h);return}const F=D&1&&R,H=!zi(h);let ne;if(H&&(ne=A&&A.onVnodeBeforeUnmount)&&Xe(ne,d,h),D&6)$f(h.component,g,y);else{if(D&128){h.suspense.unmount(g,y);return}F&&Nt(h,null,d,"beforeUnmount"),D&64?h.type.remove(h,d,g,m,nn,y):w&&(b!==it||N>0&&N&64)?st(w,d,g,!1,!0):(b===it&&N&384||!m&&D&16)&&st(_,d,g),y&&Qa(h)}(H&&(ne=A&&A.onVnodeUnmounted)||F)&&ke(()=>{ne&&Xe(ne,d,h),F&&Nt(h,null,d,"unmounted")},g)},Qa=h=>{const{type:d,el:g,anchor:y,transition:m}=h;if(d===it){Vf(g,y);return}if(d===_i){tt(h);return}const b=()=>{r(g),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(h.shapeFlag&1&&m&&!m.persisted){const{leave:A,delayLeave:T}=m,_=()=>A(g,b);T?T(h.el,b,_):_()}else b()},Vf=(h,d)=>{let g;for(;h!==d;)g=p(h),r(h),h=g;r(d)},$f=(h,d,g)=>{const{bum:y,scope:m,update:b,subTree:A,um:T}=h;y&&tr(y),m.stop(),b&&(b.active=!1,dt(A,h,d,g)),T&&ke(T,d),ke(()=>{h.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},st=(h,d,g,y=!1,m=!1,b=0)=>{for(let A=b;A<h.length;A++)dt(h[A],d,g,y,m)},qs=h=>h.shapeFlag&6?qs(h.component.subTree):h.shapeFlag&128?h.suspense.next():p(h.anchor||h.el),Ya=(h,d,g)=>{h==null?d._vnode&&dt(d._vnode,null,null,!0):O(d._vnode||null,h,d,null,null,null,g),Zl(),d._vnode=h},nn={p:O,um:dt,m:tn,r:Qa,mt:mi,mc:St,pc:nt,pbc:en,n:qs,o:t};let vi,wi;return e&&([vi,wi]=e(nn)),{render:Ya,hydrate:vi,createApp:vp(Ya,vi)}}function xt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function mu(t,e,n=!1){const s=t.children,r=e.children;if(V(s)&&V(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=mt(r[i]),a.el=o.el),n||mu(o,a))}}function Tp(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const bp=t=>t.__isTeleport,yu="components",vu=Symbol();function kE(t){return he(t)?Ip(yu,t,!1)||t:t||vu}function Ip(t,e,n=!0,s=!1){const r=He||ve;if(r){const i=r.type;if(t===yu){const a=$p(i);if(a&&(a===e||a===Je(e)||a===Fr(Je(e))))return i}const o=mc(r[t]||i[t],e)||mc(r.appContext[t],e);return!o&&s?i:o}}function mc(t,e){return t&&(t[e]||t[Je(e)]||t[Fr(Je(e))])}const it=Symbol(void 0),Wo=Symbol(void 0),jt=Symbol(void 0),_i=Symbol(void 0),Zn=[];let Ft=null;function _p(t=!1){Zn.push(Ft=t?null:[])}function Cp(){Zn.pop(),Ft=Zn[Zn.length-1]||null}let fr=1;function yc(t){fr+=t}function wu(t){return t.dynamicChildren=fr>0?Ft||hn:null,Cp(),fr>0&&Ft&&Ft.push(t),t}function ME(t,e,n,s,r,i){return wu(Tu(t,e,n,s,r,i,!0))}function Ap(t,e,n,s,r){return wu(ct(t,e,n,s,r,!0))}function Sp(t){return t?t.__v_isVNode===!0:!1}function Kn(t,e){return t.type===e.type&&t.key===e.key}const Br="__vInternal",Eu=({key:t})=>t!=null?t:null,nr=({ref:t,ref_key:e,ref_for:n})=>t!=null?he(t)||we(t)||B(t)?{i:He,r:t,k:e,f:!!n}:t:null;function Tu(t,e=null,n=null,s=0,r=null,i=t===it?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Eu(e),ref:e&&nr(e),scopeId:nu,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(Go(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=he(n)?8:16),fr>0&&!o&&Ft&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ft.push(c),c}const ct=Np;function Np(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===vu)&&(t=jt),Sp(t)){const a=cs(t,e,!0);return n&&Go(a,n),a}if(Bp(t)&&(t=t.__vccOpts),e){e=xp(e);let{class:a,style:c}=e;a&&!he(a)&&(e.class=Do(a)),pe(c)&&(Kl(c)&&!V(c)&&(c=Re({},c)),e.style=xo(c))}const o=he(t)?1:Hd(t)?128:bp(t)?64:pe(t)?4:B(t)?2:0;return Tu(t,e,n,s,r,o,i,!0)}function xp(t){return t?Kl(t)||Br in t?Re({},t):t:null}function cs(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Rp(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Eu(a),ref:e&&e.ref?n&&r?V(r)?r.concat(nr(e)):[r,nr(e)]:nr(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==it?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&cs(t.ssContent),ssFallback:t.ssFallback&&cs(t.ssFallback),el:t.el,anchor:t.anchor}}function Dp(t=" ",e=0){return ct(Wo,null,t,e)}function PE(t="",e=!1){return e?(_p(),Ap(jt,null,t)):ct(jt,null,t)}function Qe(t){return t==null||typeof t=="boolean"?ct(jt):V(t)?ct(it,null,t.slice()):typeof t=="object"?mt(t):ct(Wo,null,String(t))}function mt(t){return t.el===null||t.memo?t:cs(t)}function Go(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(V(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Go(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Br in e)?e._ctx=He:r===3&&He&&(He.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:He},n=32):(e=String(e),s&64?(n=16,e=[Dp(e)]):n=8);t.children=e,t.shapeFlag|=n}function Rp(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Do([e.class,s.class]));else if(r==="style")e.style=xo([e.style,s.style]);else if(Mr(r)){const i=e[r],o=s[r];o&&i!==o&&!(V(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Xe(t,e,n,s=null){We(t,e,7,[n,s])}function LE(t,e,n,s){let r;const i=n&&n[s];if(V(t)||he(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(pe(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const Yi=t=>t?bu(t)?Xo(t)||t.proxy:Yi(t.parent):null,dr=Re(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Yi(t.parent),$root:t=>Yi(t.root),$emit:t=>t.emit,$options:t=>lu(t),$forceUpdate:t=>()=>Ql(t.update),$nextTick:t=>Md.bind(t.proxy),$watch:t=>Gd.bind(t)}),Op={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const v=o[e];if(v!==void 0)switch(v){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(s!==Y&&z(s,e))return o[e]=1,s[e];if(r!==Y&&z(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&z(l,e))return o[e]=3,i[e];if(n!==Y&&z(n,e))return o[e]=4,n[e];Wi&&(o[e]=0)}}const u=dr[e];let f,p;if(u)return e==="$attrs"&&Be(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==Y&&z(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,z(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return r!==Y&&z(r,e)?(r[e]=n,!0):s!==Y&&z(s,e)?(s[e]=n,!0):z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==Y&&z(t,o)||e!==Y&&z(e,o)||(a=i[0])&&z(a,o)||z(s,o)||z(dr,o)||z(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?this.set(t,e,n.get(),null):n.value!=null&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},kp=gu();let Mp=0;function Pp(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||kp,i={uid:Mp++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Zf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hu(s,r),emitsOptions:tu(s,r),emit:null,emitted:null,propsDefaults:Y,inheritAttrs:s.inheritAttrs,ctx:Y,data:Y,props:Y,attrs:Y,slots:Y,refs:Y,setupState:Y,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Vd.bind(null,i),t.ce&&t.ce(i),i}let ve=null;const vn=t=>{ve=t,t.scope.on()},Ut=()=>{ve&&ve.scope.off(),ve=null};function bu(t){return t.vnode.shapeFlag&4}let ls=!1;function Lp(t,e=!1){ls=e;const{props:n,children:s}=t.vnode,r=bu(t);fp(t,n,r,e),gp(t,s);const i=r?Fp(t,e):void 0;return ls=!1,i}function Fp(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Hl(new Proxy(t.ctx,Op));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Vp(t):null;vn(t),xn();const i=vt(s,t,0,[t.props,r]);if(Dn(),Ut(),xl(i)){if(i.then(Ut,Ut),e)return i.then(o=>{vc(t,o,e)}).catch(o=>{Vr(o,t,0)});t.asyncDep=i}else vc(t,i,e)}else Iu(t,e)}function vc(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:pe(e)&&(t.setupState=Gl(e)),Iu(t,n)}let wc;function Iu(t,e,n){const s=t.type;if(!t.render){if(!e&&wc&&!s.render){const r=s.template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Re(Re({isCustomElement:i,delimiters:a},o),c);s.render=wc(r,l)}}t.render=s.render||ze}vn(t),xn(),ap(t),Dn(),Ut()}function Up(t){return new Proxy(t.attrs,{get(e,n){return Be(t,"get","$attrs"),e[n]}})}function Vp(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Up(t))},slots:t.slots,emit:t.emit,expose:e}}function Xo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Gl(Hl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in dr)return dr[n](t)}}))}function $p(t){return B(t)&&t.displayName||t.name}function Bp(t){return B(t)&&"__vccOpts"in t}const jp=(t,e)=>Od(t,e,ls),qp="3.2.31",Kp="http://www.w3.org/2000/svg",Ot=typeof document!="undefined"?document:null,Ec=Ot&&Ot.createElement("template"),Hp={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Ot.createElementNS(Kp,t):Ot.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Ot.createTextNode(t),createComment:t=>Ot.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ot.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Ec.innerHTML=s?`<svg>${t}</svg>`:t;const a=Ec.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function zp(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Wp(t,e,n){const s=t.style,r=he(n);if(n&&!r){for(const i in n)Ji(s,i,n[i]);if(e&&!he(e))for(const i in e)n[i]==null&&Ji(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Tc=/\s*!important$/;function Ji(t,e,n){if(V(n))n.forEach(s=>Ji(t,e,s));else if(e.startsWith("--"))t.setProperty(e,n);else{const s=Gp(t,e);Tc.test(n)?t.setProperty(Nn(s),n.replace(Tc,""),"important"):t[s]=n}}const bc=["Webkit","Moz","ms"],Ci={};function Gp(t,e){const n=Ci[e];if(n)return n;let s=Je(e);if(s!=="filter"&&s in t)return Ci[e]=s;s=Fr(s);for(let r=0;r<bc.length;r++){const i=bc[r]+s;if(i in t)return Ci[e]=i}return e}const Ic="http://www.w3.org/1999/xlink";function Xp(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ic,e.slice(6,e.length)):t.setAttributeNS(Ic,e,n);else{const i=jf(e);n==null||i&&!Al(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Qp(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=Al(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let pr=Date.now,_u=!1;if(typeof window!="undefined"){pr()>document.createEvent("Event").timeStamp&&(pr=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);_u=!!(t&&Number(t[1])<=53)}let Zi=0;const Yp=Promise.resolve(),Jp=()=>{Zi=0},Zp=()=>Zi||(Yp.then(Jp),Zi=pr());function cn(t,e,n,s){t.addEventListener(e,n,s)}function eg(t,e,n,s){t.removeEventListener(e,n,s)}function tg(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=ng(e);if(s){const l=i[e]=sg(s,r);cn(t,a,l,c)}else o&&(eg(t,a,o,c),i[e]=void 0)}}const _c=/(?:Once|Passive|Capture)$/;function ng(t){let e;if(_c.test(t)){e={};let n;for(;n=t.match(_c);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Nn(t.slice(2)),e]}function sg(t,e){const n=s=>{const r=s.timeStamp||pr();(_u||r>=n.attached-1)&&We(rg(s,n.value),e,5,[s])};return n.value=t,n.attached=Zp(),n}function rg(t,e){if(V(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Cc=/^on[a-z]/,ig=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?zp(t,s,r):e==="style"?Wp(t,n,s):Mr(e)?Ro(e)||tg(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):og(t,e,s,r))?Qp(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Xp(t,e,s,r))};function og(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Cc.test(e)&&B(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Cc.test(e)&&he(n)?!1:e in t}const Ac=t=>{const e=t.props["onUpdate:modelValue"];return V(e)?n=>tr(e,n):e};function ag(t){t.target.composing=!0}function Sc(t){const e=t.target;e.composing&&(e.composing=!1,cg(e,"input"))}function cg(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const FE={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Ac(r);const i=s||r.props&&r.props.type==="number";cn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=Vi(a)),t._assign(a)}),n&&cn(t,"change",()=>{t.value=t.value.trim()}),e||(cn(t,"compositionstart",ag),cn(t,"compositionend",Sc),cn(t,"change",Sc))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Ac(i),t.composing||document.activeElement===t&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Vi(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},UE={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Hn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Hn(t,!0),s.enter(t)):s.leave(t,()=>{Hn(t,!1)}):Hn(t,e))},beforeUnmount(t,{value:e}){Hn(t,e)}};function Hn(t,e){t.style.display=e?t._vod:"none"}const lg=Re({patchProp:ig},Hp);let Nc;function ug(){return Nc||(Nc=wp(lg))}const VE=(...t)=>{const e=ug().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=hg(s);if(!r)return;const i=e._component;!B(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function hg(t){return he(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Cu=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},fg=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},dg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,v=l&63;c||(v=64,o||(p=64)),s.push(n[u],n[f],n[p],n[v])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Cu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):fg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||f==null)throw Error();const p=i<<2|a>>4;if(s.push(p),l!==64){const v=a<<4&240|l>>2;if(s.push(v),f!==64){const C=l<<6&192|f;s.push(C)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Au=function(t){const e=Cu(t);return dg.encodeByteArray(e,!0)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gg(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(jr())}function mg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function yg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vg(){return jr().indexOf("Electron/")>=0}function wg(){const t=jr();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Eg(){return jr().indexOf("MSAppHost/")>=0}function Tg(){return typeof indexedDB=="object"}function bg(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig="FirebaseError";class qr extends Error{constructor(e,n,s){super(n);this.code=e,this.customData=s,this.name=Ig,Object.setPrototypeOf(this,qr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Su.prototype.create)}}class Su{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?_g(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new qr(r,a,s)}}function _g(t,e){return t.replace(Cg,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Cg=/\{\$([^}]+)}/g;function eo(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(xc(i)&&xc(o)){if(!eo(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function xc(t){return t!==null&&typeof t=="object"}/**
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
 */function wn(t){return t&&t._delegate?t._delegate:t}class us{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Rt="[DEFAULT]";/**
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
 */class Ag{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new pg;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ng(e))try{this.getOrInitializeService({instanceIdentifier:Rt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Rt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rt){return this.instances.has(e)}getOptions(e=Rt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Sg(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Rt){return this.component?this.component.multipleInstances?e:Rt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sg(t){return t===Rt?void 0:t}function Ng(t){return t.instantiationMode==="EAGER"}/**
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
 */class xg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ag(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(W||(W={}));const Dg={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},Rg=W.INFO,Og={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},kg=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Og[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nu{constructor(e){this.name=e,this._logLevel=Rg,this._logHandler=kg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Dg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}function Mg(t){return Array.prototype.slice.call(t)}function xu(t){return new Promise(function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function Qo(t,e,n){var s,r=new Promise(function(i,o){s=t[e].apply(t,n),xu(s).then(i,o)});return r.request=s,r}function Pg(t,e,n){var s=Qo(t,e,n);return s.then(function(r){if(!!r)return new hs(r,s.request)})}function Rn(t,e,n){n.forEach(function(s){Object.defineProperty(t.prototype,s,{get:function(){return this[e][s]},set:function(r){this[e][s]=r}})})}function Yo(t,e,n,s){s.forEach(function(r){r in n.prototype&&(t.prototype[r]=function(){return Qo(this[e],r,arguments)})})}function Kr(t,e,n,s){s.forEach(function(r){r in n.prototype&&(t.prototype[r]=function(){return this[e][r].apply(this[e],arguments)})})}function Du(t,e,n,s){s.forEach(function(r){r in n.prototype&&(t.prototype[r]=function(){return Pg(this[e],r,arguments)})})}function Qt(t){this._index=t}Rn(Qt,"_index",["name","keyPath","multiEntry","unique"]);Yo(Qt,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]);Du(Qt,"_index",IDBIndex,["openCursor","openKeyCursor"]);function hs(t,e){this._cursor=t,this._request=e}Rn(hs,"_cursor",["direction","key","primaryKey","value"]);Yo(hs,"_cursor",IDBCursor,["update","delete"]);["advance","continue","continuePrimaryKey"].forEach(function(t){t in IDBCursor.prototype&&(hs.prototype[t]=function(){var e=this,n=arguments;return Promise.resolve().then(function(){return e._cursor[t].apply(e._cursor,n),xu(e._request).then(function(s){if(!!s)return new hs(s,e._request)})})})});function et(t){this._store=t}et.prototype.createIndex=function(){return new Qt(this._store.createIndex.apply(this._store,arguments))};et.prototype.index=function(){return new Qt(this._store.index.apply(this._store,arguments))};Rn(et,"_store",["name","keyPath","indexNames","autoIncrement"]);Yo(et,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]);Du(et,"_store",IDBObjectStore,["openCursor","openKeyCursor"]);Kr(et,"_store",IDBObjectStore,["deleteIndex"]);function _s(t){this._tx=t,this.complete=new Promise(function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}})}_s.prototype.objectStore=function(){return new et(this._tx.objectStore.apply(this._tx,arguments))};Rn(_s,"_tx",["objectStoreNames","mode"]);Kr(_s,"_tx",IDBTransaction,["abort"]);function Hr(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new _s(n)}Hr.prototype.createObjectStore=function(){return new et(this._db.createObjectStore.apply(this._db,arguments))};Rn(Hr,"_db",["name","version","objectStoreNames"]);Kr(Hr,"_db",IDBDatabase,["deleteObjectStore","close"]);function zr(t){this._db=t}zr.prototype.transaction=function(){return new _s(this._db.transaction.apply(this._db,arguments))};Rn(zr,"_db",["name","version","objectStoreNames"]);Kr(zr,"_db",IDBDatabase,["close"]);["openCursor","openKeyCursor"].forEach(function(t){[et,Qt].forEach(function(e){t in e.prototype&&(e.prototype[t.replace("open","iterate")]=function(){var n=Mg(arguments),s=n[n.length-1],r=this._store||this._index,i=r[t].apply(r,n.slice(0,-1));i.onsuccess=function(){s(i.result)}})})});[Qt,et].forEach(function(t){t.prototype.getAll||(t.prototype.getAll=function(e,n){var s=this,r=[];return new Promise(function(i){s.iterateCursor(e,function(o){if(!o){i(r);return}if(r.push(o.value),n!==void 0&&r.length==n){i(r);return}o.continue()})})})});function Lg(t,e,n){var s=Qo(indexedDB,"open",[t,e]),r=s.request;return r&&(r.onupgradeneeded=function(i){n&&n(new Hr(r.result,i.oldVersion,r.transaction))}),s.then(function(i){return new zr(i)})}/**
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
 */class Fg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ug(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Ug(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const to="@firebase/app",Dc="0.7.18";/**
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
 */const Jo=new Nu("@firebase/app"),Vg="@firebase/app-compat",$g="@firebase/analytics-compat",Bg="@firebase/analytics",jg="@firebase/app-check-compat",qg="@firebase/app-check",Kg="@firebase/auth",Hg="@firebase/auth-compat",zg="@firebase/database",Wg="@firebase/database-compat",Gg="@firebase/functions",Xg="@firebase/functions-compat",Qg="@firebase/installations",Yg="@firebase/installations-compat",Jg="@firebase/messaging",Zg="@firebase/messaging-compat",em="@firebase/performance",tm="@firebase/performance-compat",nm="@firebase/remote-config",sm="@firebase/remote-config-compat",rm="@firebase/storage",im="@firebase/storage-compat",om="@firebase/firestore",am="@firebase/firestore-compat",cm="firebase",lm="9.6.8";/**
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
 */const Ru="[DEFAULT]",um={[to]:"fire-core",[Vg]:"fire-core-compat",[Bg]:"fire-analytics",[$g]:"fire-analytics-compat",[qg]:"fire-app-check",[jg]:"fire-app-check-compat",[Kg]:"fire-auth",[Hg]:"fire-auth-compat",[zg]:"fire-rtdb",[Wg]:"fire-rtdb-compat",[Gg]:"fire-fn",[Xg]:"fire-fn-compat",[Qg]:"fire-iid",[Yg]:"fire-iid-compat",[Jg]:"fire-fcm",[Zg]:"fire-fcm-compat",[em]:"fire-perf",[tm]:"fire-perf-compat",[nm]:"fire-rc",[sm]:"fire-rc-compat",[rm]:"fire-gcs",[im]:"fire-gcs-compat",[om]:"fire-fst",[am]:"fire-fst-compat","fire-js":"fire-js",[cm]:"fire-js-all"};/**
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
 */const gr=new Map,no=new Map;function hm(t,e){try{t.container.addComponent(e)}catch(n){Jo.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function mr(t){const e=t.name;if(no.has(e))return Jo.debug(`There were multiple attempts to register component ${e}.`),!1;no.set(e,t);for(const n of gr.values())hm(n,t);return!0}function fm(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const dm={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Tt=new Su("app","Firebase",dm);/**
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
 */class pm{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new us("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tt.create("app-deleted",{appName:this._name})}}/**
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
 */const gm=lm;function $E(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Ru,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Tt.create("bad-app-name",{appName:String(s)});const r=gr.get(s);if(r){if(eo(t,r.options)&&eo(n,r.config))return r;throw Tt.create("duplicate-app",{appName:s})}const i=new xg(s);for(const a of no.values())i.addComponent(a);const o=new pm(t,n,i);return gr.set(s,o),o}function mm(t=Ru){const e=gr.get(t);if(!e)throw Tt.create("no-app",{appName:t});return e}function pn(t,e,n){var s;let r=(s=um[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Jo.warn(a.join(" "));return}mr(new us(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const ym="firebase-heartbeat-database",vm=1,qt="firebase-heartbeat-store";let Ai=null;function Zo(){return Ai||(Ai=Lg(ym,vm,t=>{switch(t.oldVersion){case 0:t.createObjectStore(qt)}}).catch(t=>{throw Tt.create("storage-open",{originalErrorMessage:t.message})})),Ai}async function wm(t){try{return(await Zo()).transaction(qt).objectStore(qt).get(ea(t))}catch(e){throw Tt.create("storage-get",{originalErrorMessage:e.message})}}async function Si(t,e){try{const s=(await Zo()).transaction(qt,"readwrite");return await s.objectStore(qt).put(e,ea(t)),s.complete}catch(n){throw Tt.create("storage-set",{originalErrorMessage:n.message})}}async function Em(t){try{const n=(await Zo()).transaction(qt,"readwrite");return await n.objectStore(qt).delete(ea(t)),n.complete}catch(e){throw Tt.create("storage-delete",{originalErrorMessage:e.message})}}function ea(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Tm=1024,bm=30*24*60*60*1e3;class Im{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Am(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=_m();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!this._heartbeatsCache.some(r=>r.date===s))return this._heartbeatsCache.push({date:s,userAgent:n}),this._heartbeatsCache=this._heartbeatsCache.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=bm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null)return"";const{heartbeatsToSend:e,unsentEntries:n}=Cm(this._heartbeatsCache),s=Au(JSON.stringify({version:2,heartbeats:e}));return n.length>0?(this._heartbeatsCache=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache=null,this._storage.deleteAll()),s}}function _m(){return new Date().toISOString().substring(0,10)}function Cm(t,e=Tm){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.userAgent===r.userAgent);if(i){if(i.dates.push(r.date),Rc(n)>e){i.dates.pop();break}}else if(n.push({userAgent:r.userAgent,dates:[r.date]}),Rc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Am{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Tg()?bg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await wm(this.app);return(n==null?void 0:n.heartbeats)||[]}else return[]}async overwrite(e){if(await this._canUseIndexedDBPromise)return Si(this.app,{heartbeats:e})}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Si(this.app,{heartbeats:[...s,...e]})}else return}async delete(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Si(this.app,{heartbeats:s.filter(r=>!e.includes(r))})}else return}async deleteAll(){if(await this._canUseIndexedDBPromise)return Em(this.app)}}function Rc(t){return Au(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Sm(t){mr(new us("platform-logger",e=>new Fg(e),"PRIVATE")),mr(new us("heartbeat",e=>new Im(e),"PRIVATE")),pn(to,Dc,t),pn(to,Dc,"esm2017"),pn("fire-js","")}Sm("");var Nm="firebase",xm="9.6.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pn(Nm,xm,"app");var Dm=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},S,ta=ta||{},L=Dm||self;function yr(){}function so(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Cs(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Rm(t){return Object.prototype.hasOwnProperty.call(t,Ni)&&t[Ni]||(t[Ni]=++Om)}var Ni="closure_uid_"+(1e9*Math.random()>>>0),Om=0;function km(t,e,n){return t.call.apply(t.bind,arguments)}function Mm(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Ee(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ee=km:Ee=Mm,Ee.apply(null,arguments)}function Xs(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function _e(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Ct(){this.s=this.s,this.o=this.o}var Pm=0,Lm={};Ct.prototype.s=!1;Ct.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),Pm!=0)){var t=Rm(this);delete Lm[t]}};Ct.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ou=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},ku=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<s;i++)i in r&&e.call(n,r[i],i,t)};function Fm(t){e:{var e=Ny;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let r=0;r<n;r++)if(r in s&&e.call(void 0,s[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Oc(t){return Array.prototype.concat.apply([],arguments)}function na(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function vr(t){return/^[\s\xa0]*$/.test(t)}var kc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ne(t,e){return t.indexOf(e)!=-1}function xi(t,e){return t<e?-1:t>e?1:0}var xe;e:{var Mc=L.navigator;if(Mc){var Pc=Mc.userAgent;if(Pc){xe=Pc;break e}}xe=""}function sa(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Mu(t){const e={};for(const n in t)e[n]=t[n];return e}var Lc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Pu(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Lc.length;i++)n=Lc[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ra(t){return ra[" "](t),t}ra[" "]=yr;function Um(t){var e=Bm;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Vm=Ne(xe,"Opera"),En=Ne(xe,"Trident")||Ne(xe,"MSIE"),Lu=Ne(xe,"Edge"),ro=Lu||En,Fu=Ne(xe,"Gecko")&&!(Ne(xe.toLowerCase(),"webkit")&&!Ne(xe,"Edge"))&&!(Ne(xe,"Trident")||Ne(xe,"MSIE"))&&!Ne(xe,"Edge"),$m=Ne(xe.toLowerCase(),"webkit")&&!Ne(xe,"Edge");function Uu(){var t=L.document;return t?t.documentMode:void 0}var wr;e:{var Di="",Ri=function(){var t=xe;if(Fu)return/rv:([^\);]+)(\)|;)/.exec(t);if(Lu)return/Edge\/([\d\.]+)/.exec(t);if(En)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if($m)return/WebKit\/(\S+)/.exec(t);if(Vm)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ri&&(Di=Ri?Ri[1]:""),En){var Oi=Uu();if(Oi!=null&&Oi>parseFloat(Di)){wr=String(Oi);break e}}wr=Di}var Bm={};function jm(){return Um(function(){let t=0;const e=kc(String(wr)).split("."),n=kc("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=xi(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||xi(r[2].length==0,i[2].length==0)||xi(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var io;if(L.document&&En){var Fc=Uu();io=Fc||parseInt(wr,10)||void 0}else io=void 0;var qm=io,Km=function(){if(!L.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{L.addEventListener("test",yr,e),L.removeEventListener("test",yr,e)}catch{}return t}();function Ae(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ae.prototype.h=function(){this.defaultPrevented=!0};function fs(t,e){if(Ae.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Fu){e:{try{ra(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Hm[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&fs.Z.h.call(this)}}_e(fs,Ae);var Hm={2:"touch",3:"pen",4:"mouse"};fs.prototype.h=function(){fs.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var As="closure_listenable_"+(1e6*Math.random()|0),zm=0;function Wm(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=r,this.key=++zm,this.ca=this.fa=!1}function Wr(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Gr(t){this.src=t,this.g={},this.h=0}Gr.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=ao(t,e,s,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new Wm(e,this.src,i,!!s,r),e.fa=n,t.push(e)),e};function oo(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Ou(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Wr(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ao(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==s)return r}return-1}var ia="closure_lm_"+(1e6*Math.random()|0),ki={};function Vu(t,e,n,s,r){if(s&&s.once)return Bu(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Vu(t,e[i],n,s,r);return null}return n=ca(n),t&&t[As]?t.N(e,n,Cs(s)?!!s.capture:!!s,r):$u(t,e,n,!1,s,r)}function $u(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Cs(r)?!!r.capture:!!r,a=aa(t);if(a||(t[ia]=a=new Gr(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=Gm(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Km||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(qu(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Gm(){function t(n){return e.call(t.src,t.listener,n)}var e=Xm;return t}function Bu(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Bu(t,e[i],n,s,r);return null}return n=ca(n),t&&t[As]?t.O(e,n,Cs(s)?!!s.capture:!!s,r):$u(t,e,n,!0,s,r)}function ju(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)ju(t,e[i],n,s,r);else s=Cs(s)?!!s.capture:!!s,n=ca(n),t&&t[As]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=ao(i,n,s,r),-1<n&&(Wr(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=aa(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ao(e,n,s,r)),(n=-1<t?e[t]:null)&&oa(n))}function oa(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[As])oo(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(qu(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=aa(e))?(oo(n,t),n.h==0&&(n.src=null,e[ia]=null)):Wr(t)}}}function qu(t){return t in ki?ki[t]:ki[t]="on"+t}function Xm(t,e){if(t.ca)t=!0;else{e=new fs(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&oa(t),t=n.call(s,e)}return t}function aa(t){return t=t[ia],t instanceof Gr?t:null}var Mi="__closure_events_fn_"+(1e9*Math.random()>>>0);function ca(t){return typeof t=="function"?t:(t[Mi]||(t[Mi]=function(e){return t.handleEvent(e)}),t[Mi])}function ge(){Ct.call(this),this.i=new Gr(this),this.P=this,this.I=null}_e(ge,Ct);ge.prototype[As]=!0;ge.prototype.removeEventListener=function(t,e,n,s){ju(this,t,e,n,s)};function Te(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Ae(e,t);else if(e instanceof Ae)e.target=e.target||t;else{var r=e;e=new Ae(s,t),Pu(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Qs(o,s,!0,e)&&r}if(o=e.g=t,r=Qs(o,s,!0,e)&&r,r=Qs(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Qs(o,s,!1,e)&&r}ge.prototype.M=function(){if(ge.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Wr(n[s]);delete t.g[e],t.h--}}this.I=null};ge.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};ge.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Qs(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&oo(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var la=L.JSON.stringify;function Qm(){var t=Hu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Ym{constructor(){this.h=this.g=null}add(e,n){const s=Ku.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Ku=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Jm,t=>t.reset());class Jm{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Zm(t){L.setTimeout(()=>{throw t},0)}function ua(t,e){co||ey(),lo||(co(),lo=!0),Hu.add(t,e)}var co;function ey(){var t=L.Promise.resolve(void 0);co=function(){t.then(ty)}}var lo=!1,Hu=new Ym;function ty(){for(var t;t=Qm();){try{t.h.call(t.g)}catch(n){Zm(n)}var e=Ku;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}lo=!1}function Xr(t,e){ge.call(this),this.h=t||1,this.g=e||L,this.j=Ee(this.kb,this),this.l=Date.now()}_e(Xr,ge);S=Xr.prototype;S.da=!1;S.S=null;S.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Te(this,"tick"),this.da&&(ha(this),this.start()))}};S.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ha(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}S.M=function(){Xr.Z.M.call(this),ha(this),delete this.g};function fa(t,e,n){if(typeof t=="function")n&&(t=Ee(t,n));else if(t&&typeof t.handleEvent=="function")t=Ee(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:L.setTimeout(t,e||0)}function zu(t){t.g=fa(()=>{t.g=null,t.i&&(t.i=!1,zu(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class ny extends Ct{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:zu(this)}M(){super.M(),this.g&&(L.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ds(t){Ct.call(this),this.h=t,this.g={}}_e(ds,Ct);var Uc=[];function Wu(t,e,n,s){Array.isArray(n)||(n&&(Uc[0]=n.toString()),n=Uc);for(var r=0;r<n.length;r++){var i=Vu(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Gu(t){sa(t.g,function(e,n){this.g.hasOwnProperty(n)&&oa(e)},t),t.g={}}ds.prototype.M=function(){ds.Z.M.call(this),Gu(this)};ds.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Qr(){this.g=!0}Qr.prototype.Aa=function(){this.g=!1};function sy(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var f=u.split("_");o=2<=f.length&&f[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function ry(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function ln(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+oy(t,n)+(s?" "+s:"")})}function iy(t,e){t.info(function(){return"TIMEOUT: "+e})}Qr.prototype.info=function(){};function oy(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return la(n)}catch{return e}}var Yt={},Vc=null;function Yr(){return Vc=Vc||new ge}Yt.Ma="serverreachability";function Xu(t){Ae.call(this,Yt.Ma,t)}_e(Xu,Ae);function ps(t){const e=Yr();Te(e,new Xu(e,t))}Yt.STAT_EVENT="statevent";function Qu(t,e){Ae.call(this,Yt.STAT_EVENT,t),this.stat=e}_e(Qu,Ae);function De(t){const e=Yr();Te(e,new Qu(e,t))}Yt.Na="timingevent";function Yu(t,e){Ae.call(this,Yt.Na,t),this.size=e}_e(Yu,Ae);function Ss(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return L.setTimeout(function(){t()},e)}var Jr={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Ju={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function da(){}da.prototype.h=null;function $c(t){return t.h||(t.h=t.i())}function Zu(){}var Ns={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function pa(){Ae.call(this,"d")}_e(pa,Ae);function ga(){Ae.call(this,"c")}_e(ga,Ae);var uo;function Zr(){}_e(Zr,da);Zr.prototype.g=function(){return new XMLHttpRequest};Zr.prototype.i=function(){return{}};uo=new Zr;function xs(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new ds(this),this.P=ay,t=ro?125:void 0,this.W=new Xr(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new eh}function eh(){this.i=null,this.g="",this.h=!1}var ay=45e3,ho={},Er={};S=xs.prototype;S.setTimeout=function(t){this.P=t};function fo(t,e,n){t.K=1,t.v=ti(ht(e)),t.s=n,t.U=!0,th(t,null)}function th(t,e){t.F=Date.now(),Ds(t),t.A=ht(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),ch(n.h,"t",s),t.C=0,n=t.l.H,t.h=new eh,t.g=Nh(t.l,n?e:null,!t.s),0<t.O&&(t.L=new ny(Ee(t.Ia,t,t.g),t.O)),Wu(t.V,t.g,"readystatechange",t.gb),e=t.H?Mu(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),ps(1),sy(t.j,t.u,t.A,t.m,t.X,t.s)}S.gb=function(t){t=t.target;const e=this.L;e&&at(t)==3?e.l():this.Ia(t)};S.Ia=function(t){try{if(t==this.g)e:{const u=at(this.g);var e=this.g.Da();const f=this.g.ba();if(!(3>u)&&(u!=3||ro||this.g&&(this.h.h||this.g.ga()||Kc(this.g)))){this.I||u!=4||e==7||(e==8||0>=f?ps(3):ps(2)),ei(this);var n=this.g.ba();this.N=n;t:if(nh(this)){var s=Kc(this.g);t="";var r=s.length,i=at(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Mt(this),es(this);var o="";break t}this.h.i=new L.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,ry(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!vr(a)){var l=a;break t}}l=null}if(n=l)ln(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,po(this,n);else{this.i=!1,this.o=3,De(12),Mt(this),es(this);break e}}this.U?(sh(this,u,o),ro&&this.i&&u==3&&(Wu(this.V,this.W,"tick",this.fb),this.W.start())):(ln(this.j,this.m,o,null),po(this,o)),u==4&&Mt(this),this.i&&!this.I&&(u==4?_h(this.l,this):(this.i=!1,Ds(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,De(12)):(this.o=0,De(13)),Mt(this),es(this)}}}catch{}finally{}};function nh(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function sh(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=cy(t,n),r==Er){e==4&&(t.o=4,De(14),s=!1),ln(t.j,t.m,null,"[Incomplete Response]");break}else if(r==ho){t.o=4,De(15),ln(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else ln(t.j,t.m,r,null),po(t,r);nh(t)&&r!=Er&&r!=ho&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,De(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),_a(e),e.L=!0,De(11))):(ln(t.j,t.m,n,"[Invalid Chunked Response]"),Mt(t),es(t))}S.fb=function(){if(this.g){var t=at(this.g),e=this.g.ga();this.C<e.length&&(ei(this),sh(this,t,e),this.i&&t!=4&&Ds(this))}};function cy(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Er:(n=Number(e.substring(n,s)),isNaN(n)?ho:(s+=1,s+n>e.length?Er:(e=e.substr(s,n),t.C=s+n,e)))}S.cancel=function(){this.I=!0,Mt(this)};function Ds(t){t.Y=Date.now()+t.P,rh(t,t.P)}function rh(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ss(Ee(t.eb,t),e)}function ei(t){t.B&&(L.clearTimeout(t.B),t.B=null)}S.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(iy(this.j,this.A),this.K!=2&&(ps(3),De(17)),Mt(this),this.o=2,es(this)):rh(this,this.Y-t)};function es(t){t.l.G==0||t.I||_h(t.l,t)}function Mt(t){ei(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ha(t.W),Gu(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function po(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||go(n.i,t))){if(n.I=t.N,!t.J&&go(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)_r(n),ri(n);else break e;Ia(n),De(18)}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=Ss(Ee(n.ab,n),6e3));if(1>=hh(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Pt(n,11)}else if((t.J||n.g==t)&&_r(n),!vr(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const f=l[4];f!=null&&(n.za=f,n.h.info("SVER="+n.za));const p=l[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const v=t.g;if(v){const C=v.g?v.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(C){var i=s.i;!i.g&&(Ne(C,"spdy")||Ne(C,"quic")||Ne(C,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(va(i,i.h),i.h=null))}if(s.D){const k=v.g?v.g.getResponseHeader("X-HTTP-Session-Id"):null;k&&(s.sa=k,se(s.F,s.D,k))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=Sh(s,s.H?s.la:null,s.W),o.J){fh(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(ei(a),Ds(a)),s.g=o}else bh(s);0<n.l.length&&ii(n)}else l[0]!="stop"&&l[0]!="close"||Pt(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Pt(n,7):ba(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}ps(4)}catch{}}function ly(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(so(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function ma(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(so(t)||typeof t=="string")ku(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(so(t)||typeof t=="string"){n=[];for(var s=t.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,t)n[s++]=r;s=ly(t),r=s.length;for(var i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}}function On(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof On)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}S=On.prototype;S.R=function(){ya(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};S.T=function(){return ya(this),this.g.concat()};function ya(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];Kt(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)s=t.g[e],Kt(r,s)||(t.g[n++]=s,r[s]=1),e++;t.g.length=n}}S.get=function(t,e){return Kt(this.h,t)?this.h[t]:e};S.set=function(t,e){Kt(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};S.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);t.call(e,i,r,this)}};function Kt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var ih=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function uy(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Ht(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ht){this.g=e!==void 0?e:t.g,Tr(this,t.j),this.s=t.s,br(this,t.i),Ir(this,t.m),this.l=t.l,e=t.h;var n=new gs;n.i=e.i,e.g&&(n.g=new On(e.g),n.h=e.h),Bc(this,n),this.o=t.o}else t&&(n=String(t).match(ih))?(this.g=!!e,Tr(this,n[1]||"",!0),this.s=ts(n[2]||""),br(this,n[3]||"",!0),Ir(this,n[4]),this.l=ts(n[5]||"",!0),Bc(this,n[6]||"",!0),this.o=ts(n[7]||"")):(this.g=!!e,this.h=new gs(null,this.g))}Ht.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Xn(e,jc,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Xn(e,jc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Xn(n,n.charAt(0)=="/"?gy:py,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Xn(n,yy)),t.join("")};function ht(t){return new Ht(t)}function Tr(t,e,n){t.j=n?ts(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function br(t,e,n){t.i=n?ts(e,!0):e}function Ir(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Bc(t,e,n){e instanceof gs?(t.h=e,vy(t.h,t.g)):(n||(e=Xn(e,my)),t.h=new gs(e,t.g))}function se(t,e,n){t.h.set(e,n)}function ti(t){return se(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function hy(t){return t instanceof Ht?ht(t):new Ht(t,void 0)}function fy(t,e,n,s){var r=new Ht(null,void 0);return t&&Tr(r,t),e&&br(r,e),n&&Ir(r,n),s&&(r.l=s),r}function ts(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Xn(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,dy),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function dy(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var jc=/[#\/\?@]/g,py=/[#\?:]/g,gy=/[#\?]/g,my=/[#\?@]/g,yy=/#/g;function gs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function At(t){t.g||(t.g=new On,t.h=0,t.i&&uy(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}S=gs.prototype;S.add=function(t,e){At(this),this.i=null,t=kn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function oh(t,e){At(t),e=kn(t,e),Kt(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Kt(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&ya(t)))}function ah(t,e){return At(t),e=kn(t,e),Kt(t.g.h,e)}S.forEach=function(t,e){At(this),this.g.forEach(function(n,s){ku(n,function(r){t.call(e,r,s,this)},this)},this)};S.T=function(){At(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var r=t[s],i=0;i<r.length;i++)n.push(e[s]);return n};S.R=function(t){At(this);var e=[];if(typeof t=="string")ah(this,t)&&(e=Oc(e,this.g.get(kn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Oc(e,t[n])}return e};S.set=function(t,e){return At(this),this.i=null,t=kn(this,t),ah(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};S.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function ch(t,e,n){oh(t,e),0<n.length&&(t.i=null,t.g.set(kn(t,e),na(n)),t.h+=n.length)}S.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),t.push(o)}}return this.i=t.join("&")};function kn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function vy(t,e){e&&!t.j&&(At(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(oh(this,s),ch(this,r,n))},t)),t.j=e}var wy=class{constructor(t,e){this.h=t,this.g=e}};function lh(t){this.l=t||Ey,L.PerformanceNavigationTiming?(t=L.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(L.g&&L.g.Ea&&L.g.Ea()&&L.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ey=10;function uh(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function hh(t){return t.h?1:t.g?t.g.size:0}function go(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function va(t,e){t.g?t.g.add(e):t.h=e}function fh(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}lh.prototype.cancel=function(){if(this.i=dh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function dh(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return na(t.i)}function wa(){}wa.prototype.stringify=function(t){return L.JSON.stringify(t,void 0)};wa.prototype.parse=function(t){return L.JSON.parse(t,void 0)};function Ty(){this.g=new wa}function by(t,e,n){const s=n||"";try{ma(t,function(r,i){let o=r;Cs(r)&&(o=la(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function Iy(t,e){const n=new Qr;if(L.Image){const s=new Image;s.onload=Xs(Ys,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Xs(Ys,n,s,"TestLoadImage: error",!1,e),s.onabort=Xs(Ys,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Xs(Ys,n,s,"TestLoadImage: timeout",!1,e),L.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Ys(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Rs(t){this.l=t.$b||null,this.j=t.ib||!1}_e(Rs,da);Rs.prototype.g=function(){return new ni(this.l,this.j)};Rs.prototype.i=function(t){return function(){return t}}({});function ni(t,e){ge.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ea,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}_e(ni,ge);var Ea=0;S=ni.prototype;S.open=function(t,e){if(this.readyState!=Ea)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ms(this)};S.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||L).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};S.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Os(this)),this.readyState=Ea};S.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ms(this)),this.g&&(this.readyState=3,ms(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof L.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ph(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function ph(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}S.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Os(this):ms(this),this.readyState==3&&ph(this)}};S.Ua=function(t){this.g&&(this.response=this.responseText=t,Os(this))};S.Ta=function(t){this.g&&(this.response=t,Os(this))};S.ha=function(){this.g&&Os(this)};function Os(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ms(t)}S.setRequestHeader=function(t,e){this.v.append(t,e)};S.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};S.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ms(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ni.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var _y=L.JSON.parse;function le(t){ge.call(this),this.headers=new On,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=gh,this.K=this.L=!1}_e(le,ge);var gh="",Cy=/^https?$/i,Ay=["POST","PUT"];S=le.prototype;S.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():uo.g(),this.C=this.u?$c(this.u):$c(uo),this.g.onreadystatechange=Ee(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){qc(this,i);return}t=n||"";const r=new On(this.headers);s&&ma(s,function(i,o){r.set(o,i)}),s=Fm(r.T()),n=L.FormData&&t instanceof L.FormData,!(0<=Ou(Ay,e))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{vh(this),0<this.B&&((this.K=Sy(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ee(this.pa,this)):this.A=fa(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){qc(this,i)}};function Sy(t){return En&&jm()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function Ny(t){return t.toLowerCase()=="content-type"}S.pa=function(){typeof ta!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Te(this,"timeout"),this.abort(8))};function qc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,mh(t),si(t)}function mh(t){t.D||(t.D=!0,Te(t,"complete"),Te(t,"error"))}S.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Te(this,"complete"),Te(this,"abort"),si(this))};S.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),si(this,!0)),le.Z.M.call(this)};S.Fa=function(){this.s||(this.F||this.v||this.l?yh(this):this.cb())};S.cb=function(){yh(this)};function yh(t){if(t.h&&typeof ta!="undefined"&&(!t.C[1]||at(t)!=4||t.ba()!=2)){if(t.v&&at(t)==4)fa(t.Fa,0,t);else if(Te(t,"readystatechange"),at(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(ih)[1]||null;if(!r&&L.self&&L.self.location){var i=L.self.location.protocol;r=i.substr(0,i.length-1)}s=!Cy.test(r?r.toLowerCase():"")}n=s}if(n)Te(t,"complete"),Te(t,"success");else{t.m=6;try{var o=2<at(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",mh(t)}}finally{si(t)}}}}function si(t,e){if(t.g){vh(t);const n=t.g,s=t.C[0]?yr:null;t.g=null,t.C=null,e||Te(t,"ready");try{n.onreadystatechange=s}catch{}}}function vh(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(L.clearTimeout(t.A),t.A=null)}function at(t){return t.g?t.g.readyState:0}S.ba=function(){try{return 2<at(this)?this.g.status:-1}catch{return-1}};S.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};S.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),_y(e)}};function Kc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case gh:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}S.Da=function(){return this.m};S.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function xy(t){let e="";return sa(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Ta(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=xy(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):se(t,e,n))}function zn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function wh(t){this.za=0,this.l=[],this.h=new Qr,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=zn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=zn("baseRetryDelayMs",5e3,t),this.$a=zn("retryDelaySeedMs",1e4,t),this.Ya=zn("forwardChannelMaxRetries",2,t),this.ra=zn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new lh(t&&t.concurrentRequestLimit),this.Ca=new Ty,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}S=wh.prototype;S.ma=8;S.G=1;function ba(t){if(Eh(t),t.G==3){var e=t.V++,n=ht(t.F);se(n,"SID",t.J),se(n,"RID",e),se(n,"TYPE","terminate"),ks(t,n),e=new xs(t,t.h,e,void 0),e.K=2,e.v=ti(ht(n)),n=!1,L.navigator&&L.navigator.sendBeacon&&(n=L.navigator.sendBeacon(e.v.toString(),"")),!n&&L.Image&&(new Image().src=e.v,n=!0),n||(e.g=Nh(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Ds(e)}Ah(t)}S.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function ri(t){t.g&&(_a(t),t.g.cancel(),t.g=null)}function Eh(t){ri(t),t.u&&(L.clearTimeout(t.u),t.u=null),_r(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&L.clearTimeout(t.m),t.m=null)}function Pi(t,e){t.l.push(new wy(t.Za++,e)),t.G==3&&ii(t)}function ii(t){uh(t.i)||t.m||(t.m=!0,ua(t.Ha,t),t.C=0)}function Dy(t,e){return hh(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Ss(Ee(t.Ha,t,e),Ch(t,t.C)),t.C++,!0)}S.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new xs(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=Mu(i),Pu(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Th(this,r,e),n=ht(this.F),se(n,"RID",t),se(n,"CVER",22),this.D&&se(n,"X-HTTP-Session-Id",this.D),ks(this,n),this.o&&i&&Ta(n,this.o,i),va(this.i,r),this.Ra&&se(n,"TYPE","init"),this.ja?(se(n,"$req",e),se(n,"SID","null"),r.$=!0,fo(r,n,null)):fo(r,n,e),this.G=2}}else this.G==3&&(t?Hc(this,t):this.l.length==0||uh(this.i)||Hc(this))};function Hc(t,e){var n;e?n=e.m:n=t.V++;const s=ht(t.F);se(s,"SID",t.J),se(s,"RID",n),se(s,"AID",t.U),ks(t,s),t.o&&t.s&&Ta(s,t.o,t.s),n=new xs(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Th(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),va(t.i,n),fo(n,s,e)}function ks(t,e){t.j&&ma({},function(n,s){se(e,s,n)})}function Th(t,e,n){n=Math.min(t.l.length,n);var s=t.j?Ee(t.j.Oa,t.j,t):null;e:{var r=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{by(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function bh(t){t.g||t.u||(t.Y=1,ua(t.Ga,t),t.A=0)}function Ia(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Ss(Ee(t.Ga,t),Ch(t,t.A)),t.A++,!0)}S.Ga=function(){if(this.u=null,Ih(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Ss(Ee(this.bb,this),t)}};S.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,De(10),ri(this),Ih(this))};function _a(t){t.B!=null&&(L.clearTimeout(t.B),t.B=null)}function Ih(t){t.g=new xs(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=ht(t.oa);se(e,"RID","rpc"),se(e,"SID",t.J),se(e,"CI",t.N?"0":"1"),se(e,"AID",t.U),ks(t,e),se(e,"TYPE","xmlhttp"),t.o&&t.s&&Ta(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=ti(ht(e)),n.s=null,n.U=!0,th(n,t)}S.ab=function(){this.v!=null&&(this.v=null,ri(this),Ia(this),De(19))};function _r(t){t.v!=null&&(L.clearTimeout(t.v),t.v=null)}function _h(t,e){var n=null;if(t.g==e){_r(t),_a(t),t.g=null;var s=2}else if(go(t.i,e))n=e.D,fh(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Yr(),Te(s,new Yu(s,n,e,r)),ii(t)}else bh(t);else if(r=e.o,r==3||r==0&&0<t.I||!(s==1&&Dy(t,e)||s==2&&Ia(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Pt(t,5);break;case 4:Pt(t,10);break;case 3:Pt(t,6);break;default:Pt(t,2)}}}function Ch(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Pt(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=Ee(t.jb,t);n||(n=new Ht("//www.google.com/images/cleardot.gif"),L.location&&L.location.protocol=="http"||Tr(n,"https"),ti(n)),Iy(n.toString(),s)}else De(2);t.G=0,t.j&&t.j.va(e),Ah(t),Eh(t)}S.jb=function(t){t?(this.h.info("Successfully pinged google.com"),De(2)):(this.h.info("Failed to ping google.com"),De(1))};function Ah(t){t.G=0,t.I=-1,t.j&&((dh(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,na(t.l),t.l.length=0),t.j.ua())}function Sh(t,e,n){let s=hy(n);if(s.i!="")e&&br(s,e+"."+s.i),Ir(s,s.m);else{const r=L.location;s=fy(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&sa(t.aa,function(r,i){se(s,i,r)}),e=t.D,n=t.sa,e&&n&&se(s,e,n),se(s,"VER",t.ma),ks(t,s),s}function Nh(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new le(new Rs({ib:!0})):new le(t.qa),e.L=t.H,e}function xh(){}S=xh.prototype;S.xa=function(){};S.wa=function(){};S.va=function(){};S.ua=function(){};S.Oa=function(){};function Cr(){if(En&&!(10<=Number(qm)))throw Error("Environmental error: no available transport.")}Cr.prototype.g=function(t,e){return new je(t,e)};function je(t,e){ge.call(this),this.g=new wh(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!vr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!vr(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Mn(this)}_e(je,ge);je.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),ua(Ee(t.hb,t,e))),De(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Sh(t,null,t.W),ii(t)};je.prototype.close=function(){ba(this.g)};je.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Pi(this.g,e)}else this.v?(e={},e.__data__=la(t),Pi(this.g,e)):Pi(this.g,t)};je.prototype.M=function(){this.g.j=null,delete this.j,ba(this.g),delete this.g,je.Z.M.call(this)};function Dh(t){pa.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}_e(Dh,pa);function Rh(){ga.call(this),this.status=1}_e(Rh,ga);function Mn(t){this.g=t}_e(Mn,xh);Mn.prototype.xa=function(){Te(this.g,"a")};Mn.prototype.wa=function(t){Te(this.g,new Dh(t))};Mn.prototype.va=function(t){Te(this.g,new Rh(t))};Mn.prototype.ua=function(){Te(this.g,"b")};Cr.prototype.createWebChannel=Cr.prototype.g;je.prototype.send=je.prototype.u;je.prototype.open=je.prototype.m;je.prototype.close=je.prototype.close;Jr.NO_ERROR=0;Jr.TIMEOUT=8;Jr.HTTP_ERROR=6;Ju.COMPLETE="complete";Zu.EventType=Ns;Ns.OPEN="a";Ns.CLOSE="b";Ns.ERROR="c";Ns.MESSAGE="d";ge.prototype.listen=ge.prototype.N;le.prototype.listenOnce=le.prototype.O;le.prototype.getLastError=le.prototype.La;le.prototype.getLastErrorCode=le.prototype.Da;le.prototype.getStatus=le.prototype.ba;le.prototype.getResponseJson=le.prototype.Qa;le.prototype.getResponseText=le.prototype.ga;le.prototype.send=le.prototype.ea;var Ry=function(){return new Cr},Oy=function(){return Yr()},Li=Jr,ky=Ju,My=Yt,zc={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Py=Rs,Js=Zu,Ly=le;const Wc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Me.UNAUTHENTICATED=new Me(null),Me.GOOGLE_CREDENTIALS=new Me("google-credentials-uid"),Me.FIRST_PARTY=new Me("first-party-uid"),Me.MOCK_USER=new Me("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pn="9.6.7";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt=new Nu("@firebase/firestore");function Gc(){return zt.logLevel}function x(t,...e){if(zt.logLevel<=W.DEBUG){const n=e.map(Ca);zt.debug(`Firestore (${Pn}): ${t}`,...n)}}function bt(t,...e){if(zt.logLevel<=W.ERROR){const n=e.map(Ca);zt.error(`Firestore (${Pn}): ${t}`,...n)}}function Xc(t,...e){if(zt.logLevel<=W.WARN){const n=e.map(Ca);zt.warn(`Firestore (${Pn}): ${t}`,...n)}}function Ca(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function U(t="Unexpected state"){const e=`FIRESTORE (${Pn}) INTERNAL ASSERTION FAILED: `+t;throw bt(e),new Error(e)}function J(t,e){t||U()}function $(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends qr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Uy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Me.UNAUTHENTICATED))}shutdown(){}}class Vy{constructor(e){this.t=e,this.currentUser=Me.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Vt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Vt,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Vt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(J(typeof s.accessToken=="string"),new Fy(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string"),new Me(e)}}class $y{constructor(e,n,s){this.type="FirstParty",this.user=Me.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class By{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new $y(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Me.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qy{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const s=i=>{i.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,x("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(J(typeof n.token=="string"),this.p=n.token,new jy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class Aa{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.I(s),this.T=s=>n.writeSequenceNumber(s))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Aa.A=-1;class Oh{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=Ky(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function X(t,e){return t<e?-1:t>e?1:0}function Tn(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new M(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ve(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new q(e)}static min(){return new q(new Ve(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ln(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function kh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,n,s){n===void 0?n=0:n>e.length&&U(),s===void 0?s=e.length-n:s>e.length-n&&U(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return ys.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ys?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class re extends ys{construct(e,n,s){return new re(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new M(E.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new re(n)}static emptyPath(){return new re([])}}const Hy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pe extends ys{construct(e,n,s){return new Pe(e,n,s)}static isValidIdentifier(e){return Hy.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Pe(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new M(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new M(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new M(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new M(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pe(n)}static emptyPath(){return new Pe([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e){this.fields=e,e.sort(Pe.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Tn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ie(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Ie(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ie.EMPTY_BYTE_STRING=new Ie("");const zy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function It(t){if(J(!!t),typeof t=="string"){let e=0;const n=zy.exec(t);if(J(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ce(t.seconds),nanos:ce(t.nanos)}}function ce(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function bn(t){return typeof t=="string"?Ie.fromBase64String(t):Ie.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ph(t){const e=t.mapValue.fields.__previous_value__;return Mh(e)?Ph(e):e}function vs(t){const e=It(t.mapValue.fields.__local_write_time__.timestampValue);return new Ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class In{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new In("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof In&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(t){return t==null}function Ar(t){return t===0&&1/t==-1/0}function Gy(t){return typeof t=="number"&&Number.isInteger(t)&&!Ar(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.path=e}static fromPath(e){return new P(re.fromString(e))}static fromName(e){return new P(re.fromString(e).popFirst(5))}static empty(){return new P(re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new P(new re(e.slice()))}}function Wt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Mh(t)?4:10:U()}function Ze(t,e){if(t===e)return!0;const n=Wt(t);if(n!==Wt(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return vs(t).isEqual(vs(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=It(s.timestampValue),o=It(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return bn(s.bytesValue).isEqual(bn(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return ce(s.geoPointValue.latitude)===ce(r.geoPointValue.latitude)&&ce(s.geoPointValue.longitude)===ce(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return ce(s.integerValue)===ce(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=ce(s.doubleValue),o=ce(r.doubleValue);return i===o?Ar(i)===Ar(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Tn(t.arrayValue.values||[],e.arrayValue.values||[],Ze);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Qc(i)!==Qc(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Ze(i[a],o[a])))return!1;return!0}(t,e);default:return U()}}function ws(t,e){return(t.values||[]).find(n=>Ze(n,e))!==void 0}function _n(t,e){if(t===e)return 0;const n=Wt(t),s=Wt(e);if(n!==s)return X(n,s);switch(n){case 0:return 0;case 1:return X(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=ce(r.integerValue||r.doubleValue),a=ce(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Yc(t.timestampValue,e.timestampValue);case 4:return Yc(vs(t),vs(e));case 5:return X(t.stringValue,e.stringValue);case 6:return function(r,i){const o=bn(r),a=bn(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=X(o[c],a[c]);if(l!==0)return l}return X(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=X(ce(r.latitude),ce(i.latitude));return o!==0?o:X(ce(r.longitude),ce(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=_n(o[c],a[c]);if(l)return l}return X(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const f=X(a[u],l[u]);if(f!==0)return f;const p=_n(o[a[u]],c[l[u]]);if(p!==0)return p}return X(a.length,l.length)}(t.mapValue,e.mapValue);default:throw U()}}function Yc(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return X(t,e);const n=It(t),s=It(e),r=X(n.seconds,s.seconds);return r!==0?r:X(n.nanos,s.nanos)}function gn(t){return yo(t)}function yo(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=It(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?bn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,P.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=yo(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${yo(s.fields[a])}`;return i+"}"}(t.mapValue):U();var e,n}function vo(t){return!!t&&"integerValue"in t}function Sa(t){return!!t&&"arrayValue"in t}function Jc(t){return!!t&&"nullValue"in t}function Zc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function sr(t){return!!t&&"mapValue"in t}function ns(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ln(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=ns(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ns(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.value=e}static empty(){return new Ke({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!sr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ns(n)}setAll(e){let n=Pe.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=ns(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());sr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ze(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];sr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Ln(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Ke(ns(this.value))}}function Lh(t){const e=[];return Ln(t.fields,(n,s)=>{const r=new Pe([n]);if(sr(s)){const i=Lh(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new mo(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Ce(e,0,q.min(),q.min(),Ke.empty(),0)}static newFoundDocument(e,n,s){return new Ce(e,1,n,q.min(),s,0)}static newNoDocument(e,n){return new Ce(e,2,n,q.min(),Ke.empty(),0)}static newUnknownDocument(e,n){return new Ce(e,3,n,q.min(),Ke.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ke.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ke.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ce&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ce(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Xy{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.P=null}}function el(t,e=null,n=[],s=[],r=null,i=null,o=null){return new Xy(t,e,n,s,r,i,o)}function Na(t){const e=$(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+gn(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Fn(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>gn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>gn(s)).join(",")),e.P=n}return e.P}function Qy(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${gn(s.value)}`;var s}).join(", ")}]`),Fn(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>gn(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>gn(n)).join(",")),`Target(${e})`}function xa(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!rv(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!Ze(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!nl(t.startAt,e.startAt)&&nl(t.endAt,e.endAt)}function wo(t){return P.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Le extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.v(e,n,s):new Yy(e,n,s):n==="array-contains"?new ev(e,s):n==="in"?new tv(e,s):n==="not-in"?new nv(e,s):n==="array-contains-any"?new sv(e,s):new Le(e,n,s)}static v(e,n,s){return n==="in"?new Jy(e,s):new Zy(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.V(_n(n,this.value)):n!==null&&Wt(this.value)===Wt(n)&&this.V(_n(n,this.value))}V(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Yy extends Le{constructor(e,n,s){super(e,n,s),this.key=P.fromName(s.referenceValue)}matches(e){const n=P.comparator(e.key,this.key);return this.V(n)}}class Jy extends Le{constructor(e,n){super(e,"in",n),this.keys=Fh("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Zy extends Le{constructor(e,n){super(e,"not-in",n),this.keys=Fh("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Fh(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>P.fromName(s.referenceValue))}class ev extends Le{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Sa(n)&&ws(n.arrayValue,this.value)}}class tv extends Le{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ws(this.value.arrayValue,n)}}class nv extends Le{constructor(e,n){super(e,"not-in",n)}matches(e){if(ws(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ws(this.value.arrayValue,n)}}class sv extends Le{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Sa(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ws(this.value.arrayValue,s))}}class Sr{constructor(e,n){this.position=e,this.inclusive=n}}class ss{constructor(e,n="asc"){this.field=e,this.dir=n}}function rv(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function tl(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=P.comparator(P.fromName(o.referenceValue),n.key):s=_n(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function nl(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ze(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.D=null,this.C=null,this.startAt,this.endAt}}function iv(t,e,n,s,r,i,o,a){return new oi(t,e,n,s,r,i,o,a)}function Da(t){return new oi(t)}function rr(t){return!Fn(t.limit)&&t.limitType==="F"}function Nr(t){return!Fn(t.limit)&&t.limitType==="L"}function ov(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function av(t){for(const e of t.filters)if(e.S())return e.field;return null}function cv(t){return t.collectionGroup!==null}function Es(t){const e=$(t);if(e.D===null){e.D=[];const n=av(e),s=ov(e);if(n!==null&&s===null)n.isKeyField()||e.D.push(new ss(n)),e.D.push(new ss(Pe.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.D.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new ss(Pe.keyField(),i))}}}return e.D}function Gt(t){const e=$(t);if(!e.C)if(e.limitType==="F")e.C=el(e.path,e.collectionGroup,Es(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Es(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new ss(i.field,o))}const s=e.endAt?new Sr(e.endAt.position,!e.endAt.inclusive):null,r=e.startAt?new Sr(e.startAt.position,!e.startAt.inclusive):null;e.C=el(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.C}function lv(t,e,n){return new oi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ai(t,e){return xa(Gt(t),Gt(e))&&t.limitType===e.limitType}function Uh(t){return`${Na(Gt(t))}|lt:${t.limitType}`}function Eo(t){return`Query(target=${Qy(Gt(t))}; limitType=${t.limitType})`}function Ra(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):P.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=tl(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Es(n),s)||n.endAt&&!function(r,i,o){const a=tl(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Es(n),s))}(t,e)}function Vh(t){return(e,n)=>{let s=!1;for(const r of Es(t)){const i=uv(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function uv(t,e,n){const s=t.field.isKeyField()?P.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?_n(a,c):U()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return U()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ar(e)?"-0":e}}function Bh(t){return{integerValue:""+t}}function hv(t,e){return Gy(e)?Bh(e):$h(t,e)}/**
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
 */class ci{constructor(){this._=void 0}}function fv(t,e,n){return t instanceof xr?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Ts?qh(t,e):t instanceof bs?Kh(t,e):function(s,r){const i=jh(s,r),o=sl(i)+sl(s.k);return vo(i)&&vo(s.k)?Bh(o):$h(s.O,o)}(t,e)}function dv(t,e,n){return t instanceof Ts?qh(t,e):t instanceof bs?Kh(t,e):n}function jh(t,e){return t instanceof Dr?vo(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class xr extends ci{}class Ts extends ci{constructor(e){super(),this.elements=e}}function qh(t,e){const n=Hh(e);for(const s of t.elements)n.some(r=>Ze(r,s))||n.push(s);return{arrayValue:{values:n}}}class bs extends ci{constructor(e){super(),this.elements=e}}function Kh(t,e){let n=Hh(e);for(const s of t.elements)n=n.filter(r=>!Ze(r,s));return{arrayValue:{values:n}}}class Dr extends ci{constructor(e,n){super(),this.O=e,this.k=n}}function sl(t){return ce(t.integerValue||t.doubleValue)}function Hh(t){return Sa(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function pv(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Ts&&s instanceof Ts||n instanceof bs&&s instanceof bs?Tn(n.elements,s.elements,Ze):n instanceof Dr&&s instanceof Dr?Ze(n.k,s.k):n instanceof xr&&s instanceof xr}(t.transform,e.transform)}class gv{constructor(e,n){this.version=e,this.transformResults=n}}class $t{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new $t}static exists(e){return new $t(void 0,e)}static updateTime(e){return new $t(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ir(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class li{}function mv(t,e,n){t instanceof ui?function(s,r,i){const o=s.value.clone(),a=ol(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ms?function(s,r,i){if(!ir(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=ol(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(zh(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function To(t,e,n){t instanceof ui?function(s,r,i){if(!ir(s.precondition,r))return;const o=s.value.clone(),a=al(s.fieldTransforms,i,r);o.setAll(a),r.convertToFoundDocument(il(r),o).setHasLocalMutations()}(t,e,n):t instanceof Ms?function(s,r,i){if(!ir(s.precondition,r))return;const o=al(s.fieldTransforms,i,r),a=r.data;a.setAll(zh(s)),a.setAll(o),r.convertToFoundDocument(il(r),a).setHasLocalMutations()}(t,e,n):function(s,r){ir(s.precondition,r)&&r.convertToNoDocument(q.min())}(t,e)}function yv(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=jh(s.transform,r||null);i!=null&&(n==null&&(n=Ke.empty()),n.set(s.field,i))}return n||null}function rl(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Tn(n,s,(r,i)=>pv(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function il(t){return t.isFoundDocument()?t.version:q.min()}class ui extends li{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}}class Ms extends li{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}}function zh(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function ol(t,e,n){const s=new Map;J(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,dv(o,a,n[r]))}return s}function al(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,fv(i,o,e))}return s}class vv extends li{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class wv extends li{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae,K;function Tv(t){switch(t){default:return U();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function Wh(t){if(t===void 0)return bt("GRPC error has no .code"),E.UNKNOWN;switch(t){case ae.OK:return E.OK;case ae.CANCELLED:return E.CANCELLED;case ae.UNKNOWN:return E.UNKNOWN;case ae.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case ae.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case ae.INTERNAL:return E.INTERNAL;case ae.UNAVAILABLE:return E.UNAVAILABLE;case ae.UNAUTHENTICATED:return E.UNAUTHENTICATED;case ae.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case ae.NOT_FOUND:return E.NOT_FOUND;case ae.ALREADY_EXISTS:return E.ALREADY_EXISTS;case ae.PERMISSION_DENIED:return E.PERMISSION_DENIED;case ae.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case ae.ABORTED:return E.ABORTED;case ae.OUT_OF_RANGE:return E.OUT_OF_RANGE;case ae.UNIMPLEMENTED:return E.UNIMPLEMENTED;case ae.DATA_LOSS:return E.DATA_LOSS;default:return U()}}(K=ae||(ae={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,n){this.comparator=e,this.root=n||ye.EMPTY}insert(e,n){return new me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ye.BLACK,null,null))}remove(e){return new me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ye.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zs(this.root,e,this.comparator,!0)}}class Zs{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ye{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:ye.RED,this.left=r!=null?r:ye.EMPTY,this.right=i!=null?i:ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new ye(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return ye.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}ye.EMPTY=null,ye.RED=!0,ye.BLACK=!1;ye.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(t,e,n,s,r){return this}insert(t,e,n){return new ye(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.comparator=e,this.data=new me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new cl(this.data.getIterator())}getIteratorFrom(e){return new cl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof be)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new be(this.comparator);return n.data=e,n}}class cl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bv=new me(P.comparator);function Xt(){return bv}const Iv=new me(P.comparator);function bo(){return Iv}const _v=new me(P.comparator),Cv=new be(P.comparator);function te(...t){let e=Cv;for(const n of t)e=e.add(n);return e}const Av=new be(X);function Gh(){return Av}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,Ps.createSynthesizedTargetChangeForCurrentChange(e,n)),new hi(q.min(),s,Gh(),Xt(),te())}}class Ps{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Ps(Ie.EMPTY_BYTE_STRING,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,n,s,r){this.M=e,this.removedTargetIds=n,this.key=s,this.$=r}}class Xh{constructor(e,n){this.targetId=e,this.F=n}}class Qh{constructor(e,n,s=Ie.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class ll{constructor(){this.B=0,this.L=hl(),this.U=Ie.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=te(),n=te(),s=te();return this.L.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:U()}}),new Ps(this.U,this.q,e,n,s)}J(){this.K=!1,this.L=hl()}Y(e,n){this.K=!0,this.L=this.L.insert(e,n)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class Sv{constructor(e){this.nt=e,this.st=new Map,this.it=Xt(),this.rt=ul(),this.ot=new be(X)}ct(e){for(const n of e.M)e.$&&e.$.isFoundDocument()?this.ut(n,e.$):this.at(n,e.key,e.$);for(const n of e.removedTargetIds)this.at(n,e.key,e.$)}ht(e){this.forEachTarget(e,n=>{const s=this.lt(n);switch(e.state){case 0:this.ft(n)&&s.W(e.resumeToken);break;case 1:s.tt(),s.G||s.J(),s.W(e.resumeToken);break;case 2:s.tt(),s.G||this.removeTarget(n);break;case 3:this.ft(n)&&(s.et(),s.W(e.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),s.W(e.resumeToken));break;default:U()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.st.forEach((s,r)=>{this.ft(r)&&n(r)})}_t(e){const n=e.targetId,s=e.F.count,r=this.wt(n);if(r){const i=r.target;if(wo(i))if(s===0){const o=new P(i.path);this.at(n,o,Ce.newNoDocument(o,q.min()))}else J(s===1);else this.gt(n)!==s&&(this.dt(n),this.ot=this.ot.add(n))}}yt(e){const n=new Map;this.st.forEach((i,o)=>{const a=this.wt(o);if(a){if(i.current&&wo(a.target)){const c=new P(a.target.path);this.it.get(c)!==null||this.It(o,c)||this.at(o,c,Ce.newNoDocument(c,e))}i.j&&(n.set(o,i.H()),i.J())}});let s=te();this.rt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.wt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.it.forEach((i,o)=>o.setReadTime(e));const r=new hi(e,n,this.ot,this.it,s);return this.it=Xt(),this.rt=ul(),this.ot=new be(X),r}ut(e,n){if(!this.ft(e))return;const s=this.It(e,n.key)?2:0;this.lt(e).Y(n.key,s),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Et(n.key).add(e))}at(e,n,s){if(!this.ft(e))return;const r=this.lt(e);this.It(e,n)?r.Y(n,1):r.X(n),this.rt=this.rt.insert(n,this.Et(n).delete(e)),s&&(this.it=this.it.insert(n,s))}removeTarget(e){this.st.delete(e)}gt(e){const n=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let n=this.st.get(e);return n||(n=new ll,this.st.set(e,n)),n}Et(e){let n=this.rt.get(e);return n||(n=new be(X),this.rt=this.rt.insert(e,n)),n}ft(e){const n=this.wt(e)!==null;return n||x("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.st.get(e);return n&&n.G?null:this.nt.Tt(e)}dt(e){this.st.set(e,new ll),this.nt.getRemoteKeysForTarget(e).forEach(n=>{this.at(e,n,null)})}It(e,n){return this.nt.getRemoteKeysForTarget(e).has(n)}}function ul(){return new me(P.comparator)}function hl(){return new me(P.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),xv=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Dv{constructor(e,n){this.databaseId=e,this.N=n}}function Rr(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Yh(t,e){return t.N?e.toBase64():e.toUint8Array()}function Rv(t,e){return Rr(t,e.toTimestamp())}function lt(t){return J(!!t),q.fromTimestamp(function(e){const n=It(e);return new Ve(n.seconds,n.nanos)}(t))}function Oa(t,e){return function(n){return new re(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Jh(t){const e=re.fromString(t);return J(tf(e)),e}function Io(t,e){return Oa(t.databaseId,e.path)}function Fi(t,e){const n=Jh(e);if(n.get(1)!==t.databaseId.projectId)throw new M(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new P(Zh(n))}function _o(t,e){return Oa(t.databaseId,e)}function Ov(t){const e=Jh(t);return e.length===4?re.emptyPath():Zh(e)}function Co(t){return new re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Zh(t){return J(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function fl(t,e,n){return{name:Io(t,e),fields:n.value.mapValue.fields}}function kv(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:U()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.N?(J(l===void 0||typeof l=="string"),Ie.fromBase64String(l||"")):(J(l===void 0||l instanceof Uint8Array),Ie.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?E.UNKNOWN:Wh(c.code);return new M(l,c.message||"")}(o);n=new Qh(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Fi(t,s.document.name),i=lt(s.document.updateTime),o=new Ke({mapValue:{fields:s.document.fields}}),a=Ce.newFoundDocument(r,i,o),c=s.targetIds||[],l=s.removedTargetIds||[];n=new or(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Fi(t,s.document),i=s.readTime?lt(s.readTime):q.min(),o=Ce.newNoDocument(r,i),a=s.removedTargetIds||[];n=new or([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Fi(t,s.document),i=s.removedTargetIds||[];n=new or([],i,r,null)}else{if(!("filter"in e))return U();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new Ev(r),o=s.targetId;n=new Xh(o,i)}}return n}function Mv(t,e){let n;if(e instanceof ui)n={update:fl(t,e.key,e.value)};else if(e instanceof vv)n={delete:Io(t,e.key)};else if(e instanceof Ms)n={update:fl(t,e.key,e.data),updateMask:Kv(e.fieldMask)};else{if(!(e instanceof wv))return U();n={verify:Io(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof xr)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ts)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof bs)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Dr)return{fieldPath:i.field.canonicalString(),increment:o.k};throw U()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Rv(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:U()}(t,e.precondition)),n}function Pv(t,e){return t&&t.length>0?(J(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?lt(s.updateTime):lt(r);return i.isEqual(q.min())&&(i=lt(r)),new gv(i,s.transformResults||[])}(n,e))):[]}function Lv(t,e){return{documents:[_o(t,e.path)]}}function Fv(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=_o(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=_o(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const l=c.map(u=>function(f){if(f.op==="=="){if(Zc(f.value))return{unaryFilter:{field:rn(f.field),op:"IS_NAN"}};if(Jc(f.value))return{unaryFilter:{field:rn(f.field),op:"IS_NULL"}}}else if(f.op==="!="){if(Zc(f.value))return{unaryFilter:{field:rn(f.field),op:"IS_NOT_NAN"}};if(Jc(f.value))return{unaryFilter:{field:rn(f.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rn(f.field),op:Bv(f.op),value:f.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:rn(u.field),direction:$v(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.N||Fn(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Uv(t){let e=Ov(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){J(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=ef(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(f){return new ss(un(f.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(u)));let a=null;n.limit&&(a=function(u){let f;return f=typeof u=="object"?u.value:u,Fn(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(u){const f=!!u.before,p=u.values||[];return new Sr(p,f)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const f=!u.before,p=u.values||[];return new Sr(p,f)}(n.endAt)),iv(e,r,o,i,a,"F",c,l)}function Vv(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return U()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function ef(t){return t?t.unaryFilter!==void 0?[qv(t)]:t.fieldFilter!==void 0?[jv(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>ef(e)).reduce((e,n)=>e.concat(n)):U():[]}function $v(t){return Nv[t]}function Bv(t){return xv[t]}function rn(t){return{fieldPath:t.canonicalString()}}function un(t){return Pe.fromServerFormat(t.fieldPath)}function jv(t){return Le.create(un(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(t.fieldFilter.op),t.fieldFilter.value)}function qv(t){switch(t.unaryFilter.op){case"IS_NAN":const e=un(t.unaryFilter.field);return Le.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=un(t.unaryFilter.field);return Le.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=un(t.unaryFilter.field);return Le.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=un(t.unaryFilter.field);return Le.create(r,"!=",{nullValue:"NULL_VALUE"});default:return U()}}function Kv(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function tf(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new I((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof I?n:I.resolve(n)}catch(n){return I.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):I.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):I.reject(n)}static resolve(e){return new I((n,s)=>{n(e)})}static reject(e){return new I((n,s)=>{s(e)})}static waitFor(e){return new I((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=I.resolve(!1);for(const s of e)n=n.next(r=>r?I.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}}function Ls(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&mv(i,e,s[r])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&To(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&To(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const s=e.get(n.key),r=s;this.applyToLocalView(r),s.isValidDocument()||r.convertToNoDocument(q.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&Tn(this.mutations,e.mutations,(n,s)=>rl(n,s))&&Tn(this.baseMutations,e.baseMutations,(n,s)=>rl(n,s))}}class ka{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){J(e.mutations.length===s.length);let r=_v;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new ka(e,n,s,r)}}/**
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
 */class Gv{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Bt{constructor(e,n,s,r,i=q.min(),o=q.min(),a=Ie.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Bt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(e){this.Ht=e}}function Qv(t){const e=Uv({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?lv(e,e.limit,"L"):e}/**
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
 */class Yv{constructor(){this.xe=new Jv}addToCollectionParentIndex(e,n){return this.xe.add(n),I.resolve()}getCollectionParents(e,n){return I.resolve(this.xe.getEntries(n))}addFieldIndex(e,n){return I.resolve()}deleteFieldIndex(e,n){return I.resolve()}getDocumentsMatchingTarget(e,n,s){return I.resolve(te())}getFieldIndex(e,n){return I.resolve(null)}getFieldIndexes(e,n){return I.resolve([])}getNextCollectionGroupToUpdate(e){return I.resolve(null)}updateCollectionGroup(e,n,s){return I.resolve()}updateIndexEntries(e,n){return I.resolve()}}class Jv{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new be(re.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new be(re.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this.ze=e}next(){return this.ze+=2,this.ze}static He(){return new Cn(0)}static Je(){return new Cn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fs(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==Hv)throw t;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r!==void 0){for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n])}else this.inner[s]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),!0;return!1}forEach(e){Ln(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return kh(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(){this.changes=new Us(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ce.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?I.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e,n,s){this.qn=e,this.gs=n,this.indexManager=s}ys(e,n){return this.gs.getAllMutationBatchesAffectingDocumentKey(e,n).next(s=>this.ps(e,n,s))}ps(e,n,s){return this.qn.getEntry(e,n).next(r=>{for(const i of s)i.applyToLocalView(r);return r})}Is(e,n){e.forEach((s,r)=>{for(const i of n)i.applyToLocalView(r)})}Es(e,n){return this.qn.getEntries(e,n).next(s=>this.Ts(e,s).next(()=>s))}Ts(e,n){return this.gs.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>this.Is(n,s))}As(e,n,s){return function(r){return P.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.Rs(e,n.path):cv(n)?this.Ps(e,n,s):this.bs(e,n,s)}Rs(e,n){return this.ys(e,new P(n)).next(s=>{let r=bo();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}Ps(e,n,s){const r=n.collectionGroup;let i=bo();return this.indexManager.getCollectionParents(e,r).next(o=>I.forEach(o,a=>{const c=function(l,u){return new oi(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.bs(e,c,s).next(l=>{l.forEach((u,f)=>{i=i.insert(u,f)})})}).next(()=>i))}bs(e,n,s){let r;return this.qn.getAll(e,n.path,s).next(i=>(r=i,this.gs.getAllMutationBatchesAffectingQuery(e,n))).next(i=>{for(const o of i)for(const a of o.mutations){const c=a.key;let l=r.get(c);l==null&&(l=Ce.newInvalidDocument(c),r=r.insert(c,l)),To(a,l,o.localWriteTime),l.isFoundDocument()||(r=r.remove(c))}}).next(()=>(r.forEach((i,o)=>{Ra(n,o)||(r=r.remove(i))}),r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.vs=s,this.Vs=r}static Ss(e,n){let s=te(),r=te();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ma(e,n.fromCache,s,r)}}/**
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
 */class tw{Ds(e){this.Cs=e}As(e,n,s,r){return function(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}(n)||s.isEqual(q.min())?this.Ns(e,n):this.Cs.Es(e,r).next(i=>{const o=this.xs(n,i);return(rr(n)||Nr(n))&&this.ks(n.limitType,o,r,s)?this.Ns(e,n):(Gc()<=W.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Eo(n)),this.Cs.As(e,n,s).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}xs(e,n){let s=new be(Vh(e));return n.forEach((r,i)=>{Ra(e,i)&&(s=s.add(i))}),s}ks(e,n,s,r){if(s.size!==n.size)return!0;const i=e==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ns(e,n){return Gc()<=W.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",Eo(n)),this.Cs.As(e,n,q.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e,n,s,r){this.persistence=e,this.Os=n,this.O=r,this.Ms=new me(X),this.$s=new Us(i=>Na(i),xa),this.Fs=q.min(),this.Bs=e.getRemoteDocumentCache(),this.Un=e.getTargetCache(),this.Kn=e.getBundleCache(),this.Ls(s)}Ls(e){this.indexManager=this.persistence.getIndexManager(e),this.gs=this.persistence.getMutationQueue(e,this.indexManager),this.Us=new ew(this.Bs,this.gs,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Os.Ds(this.Us)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function sw(t,e,n,s){return new nw(t,e,n,s)}async function nf(t,e){const n=$(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.gs.getAllMutationBatches(s).next(i=>(r=i,n.Ls(e),n.gs.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=te();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.Us.Es(s,c).next(l=>({qs:l,removedBatchIds:o,addedBatchIds:a}))})})}function rw(t,e){const n=$(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Bs.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,f=u.keys();let p=I.resolve();return f.forEach(v=>{p=p.next(()=>l.getEntry(a,v)).next(C=>{const k=c.docVersions.get(v);J(k!==null),C.version.compareTo(k)<0&&(u.applyToRemoteDocument(C,c),C.isValidDocument()&&(C.setReadTime(c.commitVersion),l.addEntry(C)))})}),p.next(()=>o.gs.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.gs.performConsistencyCheck(s)).next(()=>n.Us.Es(s,r))})}function sf(t){const e=$(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Un.getLastRemoteSnapshotVersion(n))}function iw(t,e){const n=$(t),s=e.snapshotVersion;let r=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Bs.newChangeBuffer({trackRemovals:!0});r=n.Ms;const a=[];e.targetChanges.forEach((l,u)=>{const f=r.get(u);if(!f)return;a.push(n.Un.removeMatchingKeys(i,l.removedDocuments,u).next(()=>n.Un.addMatchingKeys(i,l.addedDocuments,u)));let p=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(u)?p=p.withResumeToken(Ie.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):l.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(l.resumeToken,s)),r=r.insert(u,p),function(v,C,k){return v.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(f,p,l)&&a.push(n.Un.updateTargetData(i,p))});let c=Xt();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(ow(i,o,e.documentUpdates).next(l=>{c=l})),!s.isEqual(q.min())){const l=n.Un.getLastRemoteSnapshotVersion(i).next(u=>n.Un.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return I.waitFor(a).next(()=>o.apply(i)).next(()=>n.Us.Ts(i,c)).next(()=>c)}).then(i=>(n.Ms=r,i))}function ow(t,e,n){let s=te();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let i=Xt();return n.forEach((o,a)=>{const c=r.get(o);a.isNoDocument()&&a.version.isEqual(q.min())?(e.removeEntry(o,a.readTime),i=i.insert(o,a)):!c.isValidDocument()||a.version.compareTo(c.version)>0||a.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(a),i=i.insert(o,a)):x("LocalStore","Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",a.version)}),i})}function aw(t,e){const n=$(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.gs.getNextMutationBatchAfterBatchId(s,e)))}function cw(t,e){const n=$(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Un.getTargetData(s,e).next(i=>i?(r=i,I.resolve(r)):n.Un.allocateTargetId(s).next(o=>(r=new Bt(e,o,0,s.currentSequenceNumber),n.Un.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ms.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.$s.set(e,s.targetId)),s})}async function Ao(t,e,n){const s=$(t),r=s.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Ls(o))throw o;x("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ms=s.Ms.remove(e),s.$s.delete(r.target)}function dl(t,e,n){const s=$(t);let r=q.min(),i=te();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=$(a),f=u.$s.get(l);return f!==void 0?I.resolve(u.Ms.get(f)):u.Un.getTargetData(c,l)}(s,o,Gt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Un.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Os.As(o,e,n?r:q.min(),n?i:te())).next(a=>({documents:a,Ks:i})))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e){this.O=e,this.Ws=new Map,this.zs=new Map}getBundleMetadata(e,n){return I.resolve(this.Ws.get(n))}saveBundleMetadata(e,n){var s;return this.Ws.set(n.id,{id:(s=n).id,version:s.version,createTime:lt(s.createTime)}),I.resolve()}getNamedQuery(e,n){return I.resolve(this.zs.get(n))}saveNamedQuery(e,n){return this.zs.set(n.name,function(s){return{name:s.name,query:Qv(s.bundledQuery),readTime:lt(s.readTime)}}(n)),I.resolve()}}/**
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
 */class uw{constructor(){this.overlays=new me(P.comparator),this.Hs=new Map}getOverlay(e,n){return I.resolve(this.overlays.get(n))}saveOverlays(e,n,s){return s.forEach(r=>{this.Yt(e,n,r)}),I.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.Hs.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Hs.delete(s)),I.resolve()}getOverlaysForCollection(e,n,s){const r=new Map,i=n.length+1,o=new P(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return I.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new me((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=new Map,i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=new Map,c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(u,l)),!(a.size>=r)););return I.resolve(a)}Yt(e,n,s){if(s===null)return;const r=this.overlays.get(s.key);r!==null&&this.Hs.get(r.largestBatchId).delete(s.key),this.overlays=this.overlays.insert(s.key,new Gv(n,s));let i=this.Hs.get(n);i===void 0&&(i=new Set,this.Hs.set(n,i)),i.add(s.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(){this.Js=new be(de.Ys),this.Xs=new be(de.Zs)}isEmpty(){return this.Js.isEmpty()}addReference(e,n){const s=new de(e,n);this.Js=this.Js.add(s),this.Xs=this.Xs.add(s)}ti(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ei(new de(e,n))}ni(e,n){e.forEach(s=>this.removeReference(s,n))}si(e){const n=new P(new re([])),s=new de(n,e),r=new de(n,e+1),i=[];return this.Xs.forEachInRange([s,r],o=>{this.ei(o),i.push(o.key)}),i}ii(){this.Js.forEach(e=>this.ei(e))}ei(e){this.Js=this.Js.delete(e),this.Xs=this.Xs.delete(e)}ri(e){const n=new P(new re([])),s=new de(n,e),r=new de(n,e+1);let i=te();return this.Xs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new de(e,0),s=this.Js.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class de{constructor(e,n){this.key=e,this.oi=n}static Ys(e,n){return P.comparator(e.key,n.key)||X(e.oi,n.oi)}static Zs(e,n){return X(e.oi,n.oi)||P.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.gs=[],this.ci=1,this.ui=new be(de.Ys)}checkEmpty(e){return I.resolve(this.gs.length===0)}addMutationBatch(e,n,s,r){const i=this.ci;this.ci++,this.gs.length>0&&this.gs[this.gs.length-1];const o=new Wv(i,n,s,r);this.gs.push(o);for(const a of r)this.ui=this.ui.add(new de(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return I.resolve(o)}lookupMutationBatch(e,n){return I.resolve(this.ai(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.hi(s),i=r<0?0:r;return I.resolve(this.gs.length>i?this.gs[i]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.gs.length===0?-1:this.ci-1)}getAllMutationBatches(e){return I.resolve(this.gs.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new de(n,0),r=new de(n,Number.POSITIVE_INFINITY),i=[];return this.ui.forEachInRange([s,r],o=>{const a=this.ai(o.oi);i.push(a)}),I.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new be(X);return n.forEach(r=>{const i=new de(r,0),o=new de(r,Number.POSITIVE_INFINITY);this.ui.forEachInRange([i,o],a=>{s=s.add(a.oi)})}),I.resolve(this.li(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;P.isDocumentKey(i)||(i=i.child(""));const o=new de(new P(i),0);let a=new be(X);return this.ui.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.oi)),!0)},o),I.resolve(this.li(a))}li(e){const n=[];return e.forEach(s=>{const r=this.ai(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){J(this.fi(n.batchId,"removed")===0),this.gs.shift();let s=this.ui;return I.forEach(n.mutations,r=>{const i=new de(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ui=s})}Qe(e){}containsKey(e,n){const s=new de(n,0),r=this.ui.firstAfterOrEqual(s);return I.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.gs.length,I.resolve()}fi(e,n){return this.hi(e)}hi(e){return this.gs.length===0?0:e-this.gs[0].batchId}ai(e){const n=this.hi(e);return n<0||n>=this.gs.length?null:this.gs[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e){this.di=e,this.docs=new me(P.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.di(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return I.resolve(s?s.document.mutableCopy():Ce.newInvalidDocument(n))}getEntries(e,n){let s=Xt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Ce.newInvalidDocument(r))}),I.resolve(s)}getAll(e,n,s){let r=Xt();const i=new P(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||c.readTime.compareTo(s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return I.resolve(r)}_i(e,n){return I.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new dw(this)}getSize(e){return I.resolve(this.size)}}class dw extends Zv{constructor(e){super(),this.Tn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Tn.addEntry(e,r)):this.Tn.removeEntry(s)}),I.waitFor(n)}getFromCache(e,n){return this.Tn.getEntry(e,n)}getAllFromCache(e,n){return this.Tn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e){this.persistence=e,this.wi=new Us(n=>Na(n),xa),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.mi=0,this.gi=new Pa,this.targetCount=0,this.yi=Cn.He()}forEachTarget(e,n){return this.wi.forEach((s,r)=>n(r)),I.resolve()}getLastRemoteSnapshotVersion(e){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return I.resolve(this.mi)}allocateTargetId(e){return this.highestTargetId=this.yi.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.mi&&(this.mi=n),I.resolve()}Ze(e){this.wi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.yi=new Cn(n),this.highestTargetId=n),e.sequenceNumber>this.mi&&(this.mi=e.sequenceNumber)}addTargetData(e,n){return this.Ze(n),this.targetCount+=1,I.resolve()}updateTargetData(e,n){return this.Ze(n),I.resolve()}removeTargetData(e,n){return this.wi.delete(n.target),this.gi.si(n.targetId),this.targetCount-=1,I.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.wi.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.wi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),I.waitFor(i).next(()=>r)}getTargetCount(e){return I.resolve(this.targetCount)}getTargetData(e,n){const s=this.wi.get(n)||null;return I.resolve(s)}addMatchingKeys(e,n,s){return this.gi.ti(n,s),I.resolve()}removeMatchingKeys(e,n,s){this.gi.ni(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),I.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.gi.si(n),I.resolve()}getMatchingKeysForTargetId(e,n){const s=this.gi.ri(n);return I.resolve(s)}containsKey(e,n){return I.resolve(this.gi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e,n){this.pi={},this.overlays={},this.Nn=new Aa(0),this.xn=!1,this.xn=!0,this.referenceDelegate=e(this),this.Un=new pw(this),this.indexManager=new Yv,this.qn=function(s){return new fw(s)}(s=>this.referenceDelegate.Ii(s)),this.O=new Xv(n),this.Kn=new lw(this.O)}start(){return Promise.resolve()}shutdown(){return this.xn=!1,Promise.resolve()}get started(){return this.xn}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new uw,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.pi[e.toKey()];return s||(s=new hw(n,this.referenceDelegate),this.pi[e.toKey()]=s),s}getTargetCache(){return this.Un}getRemoteDocumentCache(){return this.qn}getBundleCache(){return this.Kn}runTransaction(e,n,s){x("MemoryPersistence","Starting transaction:",e);const r=new mw(this.Nn.next());return this.referenceDelegate.Ei(),s(r).next(i=>this.referenceDelegate.Ti(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ai(e,n){return I.or(Object.values(this.pi).map(s=>()=>s.containsKey(e,n)))}}class mw extends zv{constructor(e){super(),this.currentSequenceNumber=e}}class La{constructor(e){this.persistence=e,this.Ri=new Pa,this.Pi=null}static bi(e){return new La(e)}get vi(){if(this.Pi)return this.Pi;throw U()}addReference(e,n,s){return this.Ri.addReference(s,n),this.vi.delete(s.toString()),I.resolve()}removeReference(e,n,s){return this.Ri.removeReference(s,n),this.vi.add(s.toString()),I.resolve()}markPotentiallyOrphaned(e,n){return this.vi.add(n.toString()),I.resolve()}removeTarget(e,n){this.Ri.si(n.targetId).forEach(r=>this.vi.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.vi.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Ei(){this.Pi=new Set}Ti(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.vi,s=>{const r=P.fromPath(s);return this.Vi(e,r).next(i=>{i||n.removeEntry(r,q.min())})}).next(()=>(this.Pi=null,n.apply(e)))}updateLimboDocument(e,n){return this.Vi(e,n).next(s=>{s?this.vi.delete(n.toString()):this.vi.add(n.toString())})}Ii(e){return 0}Vi(e,n){return I.or([()=>I.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class pl{constructor(){this.activeTargetIds=Gh()}Ci(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ni(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Di(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class yw{constructor(){this._r=new pl,this.wr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this._r.Ci(e),this.wr[e]||"not-current"}updateQueryState(e,n,s){this.wr[e]=n}removeLocalQueryTarget(e){this._r.Ni(e)}isLocalQueryTarget(e){return this._r.activeTargetIds.has(e)}clearQueryState(e){delete this.wr[e]}getAllActiveQueryTargets(){return this._r.activeTargetIds}isActiveQueryTarget(e){return this._r.activeTargetIds.has(e)}start(){return this._r=new pl,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
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
 */class vw{mr(e){}shutdown(){}}/**
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
 */class gl{constructor(){this.gr=()=>this.yr(),this.pr=()=>this.Ir(),this.Er=[],this.Tr()}mr(e){this.Er.push(e)}shutdown(){window.removeEventListener("online",this.gr),window.removeEventListener("offline",this.pr)}Tr(){window.addEventListener("online",this.gr),window.addEventListener("offline",this.pr)}yr(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Er)e(0)}Ir(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Er)e(1)}static Vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e){this.Ar=e.Ar,this.Rr=e.Rr}Pr(e){this.br=e}vr(e){this.Vr=e}onMessage(e){this.Sr=e}close(){this.Rr()}send(e){this.Ar(e)}Dr(){this.br()}Cr(e){this.Vr(e)}Nr(e){this.Sr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.kr=n+"://"+e.host,this.Or="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Mr(e,n,s,r,i){const o=this.$r(e,n);x("RestConnection","Sending: ",o,s);const a={};return this.Fr(a,r,i),this.Br(e,o,a,s).then(c=>(x("RestConnection","Received: ",c),c),c=>{throw Xc("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}Lr(e,n,s,r,i){return this.Mr(e,n,s,r,i)}Fr(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Pn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}$r(e,n){const s=ww[e];return`${this.kr}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Br(e,n,s,r){return new Promise((i,o)=>{const a=new Ly;a.listenOnce(ky.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Li.NO_ERROR:const l=a.getResponseJson();x("Connection","XHR received:",JSON.stringify(l)),i(l);break;case Li.TIMEOUT:x("Connection",'RPC "'+e+'" timed out'),o(new M(E.DEADLINE_EXCEEDED,"Request time out"));break;case Li.HTTP_ERROR:const u=a.getStatus();if(x("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const f=a.getResponseJson().error;if(f&&f.status&&f.message){const p=function(v){const C=v.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(C)>=0?C:E.UNKNOWN}(f.status);o(new M(p,f.message))}else o(new M(E.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new M(E.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{x("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}Ur(e,n,s){const r=[this.kr,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Ry(),o=Oy(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Py({})),this.Fr(a.initMessageHeaders,n,s),gg()||yg()||vg()||wg()||Eg()||mg()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");x("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,f=!1;const p=new Ew({Ar:C=>{f?x("Connection","Not sending because WebChannel is closed:",C):(u||(x("Connection","Opening WebChannel transport."),l.open(),u=!0),x("Connection","WebChannel sending:",C),l.send(C))},Rr:()=>l.close()}),v=(C,k,O)=>{C.listen(k,j=>{try{O(j)}catch(fe){setTimeout(()=>{throw fe},0)}})};return v(l,Js.EventType.OPEN,()=>{f||x("Connection","WebChannel transport opened.")}),v(l,Js.EventType.CLOSE,()=>{f||(f=!0,x("Connection","WebChannel transport closed"),p.Cr())}),v(l,Js.EventType.ERROR,C=>{f||(f=!0,Xc("Connection","WebChannel transport errored:",C),p.Cr(new M(E.UNAVAILABLE,"The operation could not be completed")))}),v(l,Js.EventType.MESSAGE,C=>{var k;if(!f){const O=C.data[0];J(!!O);const j=O,fe=j.error||((k=j[0])===null||k===void 0?void 0:k.error);if(fe){x("Connection","WebChannel received error:",fe);const ue=fe.status;let oe=function(Vn){const Zt=ae[Vn];if(Zt!==void 0)return Wh(Zt)}(ue),tt=fe.message;oe===void 0&&(oe=E.INTERNAL,tt="Unknown error status: "+ue+" with message "+fe.message),f=!0,p.Cr(new M(oe,tt)),l.close()}else x("Connection","WebChannel received:",O),p.Nr(O)}}),v(o,My.STAT_EVENT,C=>{C.stat===zc.PROXY?x("Connection","Detected buffering proxy"):C.stat===zc.NOPROXY&&x("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.Dr()},0),p}}function Ui(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(t){return new Dv(t,!0)}class rf{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Sn=e,this.timerId=n,this.qr=s,this.Kr=r,this.Gr=i,this.jr=0,this.Qr=null,this.Wr=Date.now(),this.reset()}reset(){this.jr=0}zr(){this.jr=this.Gr}Hr(e){this.cancel();const n=Math.floor(this.jr+this.Jr()),s=Math.max(0,Date.now()-this.Wr),r=Math.max(0,n-s);r>0&&x("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.jr} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Qr=this.Sn.enqueueAfterDelay(this.timerId,r,()=>(this.Wr=Date.now(),e())),this.jr*=this.Kr,this.jr<this.qr&&(this.jr=this.qr),this.jr>this.Gr&&(this.jr=this.Gr)}Yr(){this.Qr!==null&&(this.Qr.skipDelay(),this.Qr=null)}cancel(){this.Qr!==null&&(this.Qr.cancel(),this.Qr=null)}Jr(){return(Math.random()-.5)*this.jr}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e,n,s,r,i,o,a,c){this.Sn=e,this.Xr=s,this.Zr=r,this.eo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.no=0,this.so=null,this.io=null,this.stream=null,this.ro=new rf(e,n)}oo(){return this.state===1||this.state===5||this.co()}co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.uo()}async stop(){this.oo()&&await this.close(0)}ao(){this.state=0,this.ro.reset()}ho(){this.co()&&this.so===null&&(this.so=this.Sn.enqueueAfterDelay(this.Xr,6e4,()=>this.lo()))}fo(e){this._o(),this.stream.send(e)}async lo(){if(this.co())return this.close(0)}_o(){this.so&&(this.so.cancel(),this.so=null)}wo(){this.io&&(this.io.cancel(),this.io=null)}async close(e,n){this._o(),this.wo(),this.ro.cancel(),this.no++,e!==4?this.ro.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(bt(n.toString()),bt("Using maximum backoff delay to prevent overloading the backend."),this.ro.zr()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.mo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.vr(n)}mo(){}auth(){this.state=1;const e=this.yo(this.no),n=this.no;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.no===n&&this.po(s,r)},s=>{e(()=>{const r=new M(E.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Io(r)})})}po(e,n){const s=this.yo(this.no);this.stream=this.Eo(e,n),this.stream.Pr(()=>{s(()=>(this.state=2,this.io=this.Sn.enqueueAfterDelay(this.Zr,1e4,()=>(this.co()&&(this.state=3),Promise.resolve())),this.listener.Pr()))}),this.stream.vr(r=>{s(()=>this.Io(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}uo(){this.state=5,this.ro.Hr(async()=>{this.state=0,this.start()})}Io(e){return x("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}yo(e){return n=>{this.Sn.enqueueAndForget(()=>this.no===e?n():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class bw extends of{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.O=i}Eo(e,n){return this.eo.Ur("Listen",e,n)}onMessage(e){this.ro.reset();const n=kv(this.O,e),s=function(r){if(!("targetChange"in r))return q.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?q.min():i.readTime?lt(i.readTime):q.min()}(e);return this.listener.To(n,s)}Ao(e){const n={};n.database=Co(this.O),n.addTarget=function(r,i){let o;const a=i.target;return o=wo(a)?{documents:Lv(r,a)}:{query:Fv(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Yh(r,i.resumeToken):i.snapshotVersion.compareTo(q.min())>0&&(o.readTime=Rr(r,i.snapshotVersion.toTimestamp())),o}(this.O,e);const s=Vv(this.O,e);s&&(n.labels=s),this.fo(n)}Ro(e){const n={};n.database=Co(this.O),n.removeTarget=e,this.fo(n)}}class Iw extends of{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.O=i,this.Po=!1}get bo(){return this.Po}start(){this.Po=!1,this.lastStreamToken=void 0,super.start()}mo(){this.Po&&this.vo([])}Eo(e,n){return this.eo.Ur("Write",e,n)}onMessage(e){if(J(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Po){this.ro.reset();const n=Pv(e.writeResults,e.commitTime),s=lt(e.commitTime);return this.listener.Vo(s,n)}return J(!e.writeResults||e.writeResults.length===0),this.Po=!0,this.listener.So()}Do(){const e={};e.database=Co(this.O),this.fo(e)}vo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Mv(this.O,s))};this.fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.eo=s,this.O=r,this.Co=!1}No(){if(this.Co)throw new M(E.FAILED_PRECONDITION,"The client has already been terminated.")}Mr(e,n,s){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.eo.Mr(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new M(E.UNKNOWN,r.toString())})}Lr(e,n,s){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.eo.Lr(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new M(E.UNKNOWN,r.toString())})}terminate(){this.Co=!0}}class Cw{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.xo=0,this.ko=null,this.Oo=!0}Mo(){this.xo===0&&(this.$o("Unknown"),this.ko=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ko=null,this.Fo("Backend didn't respond within 10 seconds."),this.$o("Offline"),Promise.resolve())))}Bo(e){this.state==="Online"?this.$o("Unknown"):(this.xo++,this.xo>=1&&(this.Lo(),this.Fo(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.$o("Offline")))}set(e){this.Lo(),this.xo=0,e==="Online"&&(this.Oo=!1),this.$o(e)}$o(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Fo(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Oo?(bt(n),this.Oo=!1):x("OnlineStateTracker",n)}Lo(){this.ko!==null&&(this.ko.cancel(),this.ko=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Uo=[],this.qo=new Map,this.Ko=new Set,this.Go=[],this.jo=i,this.jo.mr(o=>{s.enqueueAndForget(async()=>{Jt(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=$(a);c.Ko.add(4),await Vs(c),c.Qo.set("Unknown"),c.Ko.delete(4),await di(c)}(this))})}),this.Qo=new Cw(s,r)}}async function di(t){if(Jt(t))for(const e of t.Go)await e(!0)}async function Vs(t){for(const e of t.Go)await e(!1)}function af(t,e){const n=$(t);n.qo.has(e.targetId)||(n.qo.set(e.targetId,e),Va(n)?Ua(n):Un(n).co()&&Fa(n,e))}function cf(t,e){const n=$(t),s=Un(n);n.qo.delete(e),s.co()&&lf(n,e),n.qo.size===0&&(s.co()?s.ho():Jt(n)&&n.Qo.set("Unknown"))}function Fa(t,e){t.Wo.Z(e.targetId),Un(t).Ao(e)}function lf(t,e){t.Wo.Z(e),Un(t).Ro(e)}function Ua(t){t.Wo=new Sv({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.qo.get(e)||null}),Un(t).start(),t.Qo.Mo()}function Va(t){return Jt(t)&&!Un(t).oo()&&t.qo.size>0}function Jt(t){return $(t).Ko.size===0}function uf(t){t.Wo=void 0}async function Sw(t){t.qo.forEach((e,n)=>{Fa(t,e)})}async function Nw(t,e){uf(t),Va(t)?(t.Qo.Bo(e),Ua(t)):t.Qo.set("Unknown")}async function xw(t,e,n){if(t.Qo.set("Online"),e instanceof Qh&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.qo.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.qo.delete(o),s.Wo.removeTarget(o))}(t,e)}catch(s){x("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Or(t,s)}else if(e instanceof or?t.Wo.ct(e):e instanceof Xh?t.Wo._t(e):t.Wo.ht(e),!n.isEqual(q.min()))try{const s=await sf(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Wo.yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.qo.get(c);l&&r.qo.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.qo.get(a);if(!c)return;r.qo.set(a,c.withResumeToken(Ie.EMPTY_BYTE_STRING,c.snapshotVersion)),lf(r,a);const l=new Bt(c.target,a,1,c.sequenceNumber);Fa(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){x("RemoteStore","Failed to raise snapshot:",s),await Or(t,s)}}async function Or(t,e,n){if(!Ls(e))throw e;t.Ko.add(1),await Vs(t),t.Qo.set("Offline"),n||(n=()=>sf(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await n(),t.Ko.delete(1),await di(t)})}function hf(t,e){return e().catch(n=>Or(t,n,e))}async function pi(t){const e=$(t),n=_t(e);let s=e.Uo.length>0?e.Uo[e.Uo.length-1].batchId:-1;for(;Dw(e);)try{const r=await aw(e.localStore,s);if(r===null){e.Uo.length===0&&n.ho();break}s=r.batchId,Rw(e,r)}catch(r){await Or(e,r)}ff(e)&&df(e)}function Dw(t){return Jt(t)&&t.Uo.length<10}function Rw(t,e){t.Uo.push(e);const n=_t(t);n.co()&&n.bo&&n.vo(e.mutations)}function ff(t){return Jt(t)&&!_t(t).oo()&&t.Uo.length>0}function df(t){_t(t).start()}async function Ow(t){_t(t).Do()}async function kw(t){const e=_t(t);for(const n of t.Uo)e.vo(n.mutations)}async function Mw(t,e,n){const s=t.Uo.shift(),r=ka.from(s,e,n);await hf(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await pi(t)}async function Pw(t,e){e&&_t(t).bo&&await async function(n,s){if(r=s.code,Tv(r)&&r!==E.ABORTED){const i=n.Uo.shift();_t(n).ao(),await hf(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await pi(n)}var r}(t,e),ff(t)&&df(t)}async function ml(t,e){const n=$(t);n.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const s=Jt(n);n.Ko.add(3),await Vs(n),s&&n.Qo.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ko.delete(3),await di(n)}async function Lw(t,e){const n=$(t);e?(n.Ko.delete(2),await di(n)):e||(n.Ko.add(2),await Vs(n),n.Qo.set("Unknown"))}function Un(t){return t.zo||(t.zo=function(e,n,s){const r=$(e);return r.No(),new bw(n,r.eo,r.authCredentials,r.appCheckCredentials,r.O,s)}(t.datastore,t.asyncQueue,{Pr:Sw.bind(null,t),vr:Nw.bind(null,t),To:xw.bind(null,t)}),t.Go.push(async e=>{e?(t.zo.ao(),Va(t)?Ua(t):t.Qo.set("Unknown")):(await t.zo.stop(),uf(t))})),t.zo}function _t(t){return t.Ho||(t.Ho=function(e,n,s){const r=$(e);return r.No(),new Iw(n,r.eo,r.authCredentials,r.appCheckCredentials,r.O,s)}(t.datastore,t.asyncQueue,{Pr:Ow.bind(null,t),vr:Pw.bind(null,t),So:kw.bind(null,t),Vo:Mw.bind(null,t)}),t.Go.push(async e=>{e?(t.Ho.ao(),await pi(t)):(await t.Ho.stop(),t.Uo.length>0&&(x("RemoteStore",`Stopping write stream with ${t.Uo.length} pending writes`),t.Uo=[]))})),t.Ho}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Vt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new $a(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ba(t,e){if(bt("AsyncQueue",`${e}: ${t}`),Ls(t))return new M(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||P.comparator(n.key,s.key):(n,s)=>P.comparator(n.key,s.key),this.keyedMap=bo(),this.sortedSet=new me(this.comparator)}static emptySet(e){return new mn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof mn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new mn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(){this.Jo=new me(P.comparator)}track(e){const n=e.doc.key,s=this.Jo.get(n);s?e.type!==0&&s.type===3?this.Jo=this.Jo.insert(n,e):e.type===3&&s.type!==1?this.Jo=this.Jo.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Jo=this.Jo.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Jo=this.Jo.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Jo=this.Jo.remove(n):e.type===1&&s.type===2?this.Jo=this.Jo.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Jo=this.Jo.insert(n,{type:2,doc:e.doc}):U():this.Jo=this.Jo.insert(n,e)}Yo(){const e=[];return this.Jo.inorderTraversal((n,s)=>{e.push(s)}),e}}class An{constructor(e,n,s,r,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new An(e,n,mn.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ai(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(){this.Xo=void 0,this.listeners=[]}}class Uw{constructor(){this.queries=new Us(e=>Uh(e),ai),this.onlineState="Unknown",this.Zo=new Set}}async function Vw(t,e){const n=$(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new Fw),r)try{i.Xo=await n.onListen(s)}catch(o){const a=Ba(o,`Initialization of query '${Eo(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.tc(n.onlineState),i.Xo&&e.ec(i.Xo)&&ja(n)}async function $w(t,e){const n=$(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function Bw(t,e){const n=$(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.ec(r)&&(s=!0);o.Xo=r}}s&&ja(n)}function jw(t,e,n){const s=$(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function ja(t){t.Zo.forEach(e=>{e.next()})}class qw{constructor(e,n,s){this.query=e,this.nc=n,this.sc=!1,this.ic=null,this.onlineState="Unknown",this.options=s||{}}ec(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new An(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.sc?this.rc(e)&&(this.nc.next(e),n=!0):this.oc(e,this.onlineState)&&(this.cc(e),n=!0),this.ic=e,n}onError(e){this.nc.error(e)}tc(e){this.onlineState=e;let n=!1;return this.ic&&!this.sc&&this.oc(this.ic,e)&&(this.cc(this.ic),n=!0),n}oc(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.uc||!s)&&(!e.docs.isEmpty()||n==="Offline")}rc(e){if(e.docChanges.length>0)return!0;const n=this.ic&&this.ic.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}cc(e){e=An.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.sc=!0,this.nc.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e){this.key=e}}class gf{constructor(e){this.key=e}}class Kw{constructor(e,n){this.query=e,this.dc=n,this._c=null,this.current=!1,this.wc=te(),this.mutatedKeys=te(),this.mc=Vh(e),this.gc=new mn(this.mc)}get yc(){return this.dc}Ic(e,n){const s=n?n.Ec:new yl,r=n?n.gc:this.gc;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=rr(this.query)&&r.size===this.query.limit?r.last():null,l=Nr(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,f)=>{const p=r.get(u),v=Ra(this.query,f)?f:null,C=!!p&&this.mutatedKeys.has(p.key),k=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let O=!1;p&&v?p.data.isEqual(v.data)?C!==k&&(s.track({type:3,doc:v}),O=!0):this.Tc(p,v)||(s.track({type:2,doc:v}),O=!0,(c&&this.mc(v,c)>0||l&&this.mc(v,l)<0)&&(a=!0)):!p&&v?(s.track({type:0,doc:v}),O=!0):p&&!v&&(s.track({type:1,doc:p}),O=!0,(c||l)&&(a=!0)),O&&(v?(o=o.add(v),i=k?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),rr(this.query)||Nr(this.query))for(;o.size>this.query.limit;){const u=rr(this.query)?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{gc:o,Ec:s,ks:a,mutatedKeys:i}}Tc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.gc;this.gc=e.gc,this.mutatedKeys=e.mutatedKeys;const i=e.Ec.Yo();i.sort((l,u)=>function(f,p){const v=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return v(f)-v(p)}(l.type,u.type)||this.mc(l.doc,u.doc)),this.Ac(s);const o=n?this.Rc():[],a=this.wc.size===0&&this.current?1:0,c=a!==this._c;return this._c=a,i.length!==0||c?{snapshot:new An(this.query,e.gc,r,i,e.mutatedKeys,a===0,c,!1),Pc:o}:{Pc:o}}tc(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({gc:this.gc,Ec:new yl,mutatedKeys:this.mutatedKeys,ks:!1},!1)):{Pc:[]}}bc(e){return!this.dc.has(e)&&!!this.gc.has(e)&&!this.gc.get(e).hasLocalMutations}Ac(e){e&&(e.addedDocuments.forEach(n=>this.dc=this.dc.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.dc=this.dc.delete(n)),this.current=e.current)}Rc(){if(!this.current)return[];const e=this.wc;this.wc=te(),this.gc.forEach(s=>{this.bc(s.key)&&(this.wc=this.wc.add(s.key))});const n=[];return e.forEach(s=>{this.wc.has(s)||n.push(new gf(s))}),this.wc.forEach(s=>{e.has(s)||n.push(new pf(s))}),n}vc(e){this.dc=e.Ks,this.wc=te();const n=this.Ic(e.documents);return this.applyChanges(n,!0)}Vc(){return An.fromInitialDocuments(this.query,this.gc,this.mutatedKeys,this._c===0)}}class Hw{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class zw{constructor(e){this.key=e,this.Sc=!1}}class Ww{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Dc={},this.Cc=new Us(a=>Uh(a),ai),this.Nc=new Map,this.xc=new Set,this.kc=new me(P.comparator),this.Oc=new Map,this.Mc=new Pa,this.$c={},this.Fc=new Map,this.Bc=Cn.Je(),this.onlineState="Unknown",this.Lc=void 0}get isPrimaryClient(){return this.Lc===!0}}async function Gw(t,e){const n=rE(t);let s,r;const i=n.Cc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.Vc();else{const o=await cw(n.localStore,Gt(e));n.isPrimaryClient&&af(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await Xw(n,e,s,a==="current")}return r}async function Xw(t,e,n,s){t.Uc=(u,f,p)=>async function(v,C,k,O){let j=C.view.Ic(k);j.ks&&(j=await dl(v.localStore,C.query,!1).then(({documents:oe})=>C.view.Ic(oe,j)));const fe=O&&O.targetChanges.get(C.targetId),ue=C.view.applyChanges(j,v.isPrimaryClient,fe);return wl(v,C.targetId,ue.Pc),ue.snapshot}(t,u,f,p);const r=await dl(t.localStore,e,!0),i=new Kw(e,r.Ks),o=i.Ic(r.documents),a=Ps.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);wl(t,n,c.Pc);const l=new Hw(e,n,i);return t.Cc.set(e,l),t.Nc.has(n)?t.Nc.get(n).push(e):t.Nc.set(n,[e]),c.snapshot}async function Qw(t,e){const n=$(t),s=n.Cc.get(e),r=n.Nc.get(s.targetId);if(r.length>1)return n.Nc.set(s.targetId,r.filter(i=>!ai(i,e))),void n.Cc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ao(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),cf(n.remoteStore,s.targetId),So(n,s.targetId)}).catch(Fs)):(So(n,s.targetId),await Ao(n.localStore,s.targetId,!0))}async function Yw(t,e,n){const s=iE(t);try{const r=await function(i,o){const a=$(i),c=Ve.now(),l=o.reduce((f,p)=>f.add(p.key),te());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>a.Us.Es(f,l).next(p=>{u=p;const v=[];for(const C of o){const k=yv(C,u.get(C.key));k!=null&&v.push(new Ms(C.key,k,Lh(k.value.mapValue),$t.exists(!0)))}return a.gs.addMutationBatch(f,c,v,o)})).then(f=>(f.applyToLocalDocumentSet(u),{batchId:f.batchId,changes:u}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.$c[i.currentUser.toKey()];c||(c=new me(X)),c=c.insert(o,a),i.$c[i.currentUser.toKey()]=c}(s,r.batchId,n),await $s(s,r.changes),await pi(s.remoteStore)}catch(r){const i=Ba(r,"Failed to persist write");n.reject(i)}}async function mf(t,e){const n=$(t);try{const s=await iw(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.Oc.get(i);o&&(J(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Sc=!0:r.modifiedDocuments.size>0?J(o.Sc):r.removedDocuments.size>0&&(J(o.Sc),o.Sc=!1))}),await $s(n,s,e)}catch(s){await Fs(s)}}function vl(t,e,n){const s=$(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.Cc.forEach((i,o)=>{const a=o.view.tc(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=$(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const f of u.listeners)f.tc(o)&&(c=!0)}),c&&ja(a)}(s.eventManager,e),r.length&&s.Dc.To(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Jw(t,e,n){const s=$(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.Oc.get(e),i=r&&r.key;if(i){let o=new me(P.comparator);o=o.insert(i,Ce.newNoDocument(i,q.min()));const a=te().add(i),c=new hi(q.min(),new Map,new be(X),o,a);await mf(s,c),s.kc=s.kc.remove(i),s.Oc.delete(e),qa(s)}else await Ao(s.localStore,e,!1).then(()=>So(s,e,n)).catch(Fs)}async function Zw(t,e){const n=$(t),s=e.batch.batchId;try{const r=await rw(n.localStore,e);vf(n,s,null),yf(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await $s(n,r)}catch(r){await Fs(r)}}async function eE(t,e,n){const s=$(t);try{const r=await function(i,o){const a=$(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.gs.lookupMutationBatch(c,o).next(u=>(J(u!==null),l=u.keys(),a.gs.removeMutationBatch(c,u))).next(()=>a.gs.performConsistencyCheck(c)).next(()=>a.Us.Es(c,l))})}(s.localStore,e);vf(s,e,n),yf(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await $s(s,r)}catch(r){await Fs(r)}}function yf(t,e){(t.Fc.get(e)||[]).forEach(n=>{n.resolve()}),t.Fc.delete(e)}function vf(t,e,n){const s=$(t);let r=s.$c[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.$c[s.currentUser.toKey()]=r}}function So(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Nc.get(e))t.Cc.delete(s),n&&t.Dc.qc(s,n);t.Nc.delete(e),t.isPrimaryClient&&t.Mc.si(e).forEach(s=>{t.Mc.containsKey(s)||wf(t,s)})}function wf(t,e){t.xc.delete(e.path.canonicalString());const n=t.kc.get(e);n!==null&&(cf(t.remoteStore,n),t.kc=t.kc.remove(e),t.Oc.delete(n),qa(t))}function wl(t,e,n){for(const s of n)s instanceof pf?(t.Mc.addReference(s.key,e),tE(t,s)):s instanceof gf?(x("SyncEngine","Document no longer in limbo: "+s.key),t.Mc.removeReference(s.key,e),t.Mc.containsKey(s.key)||wf(t,s.key)):U()}function tE(t,e){const n=e.key,s=n.path.canonicalString();t.kc.get(n)||t.xc.has(s)||(x("SyncEngine","New document in limbo: "+n),t.xc.add(s),qa(t))}function qa(t){for(;t.xc.size>0&&t.kc.size<t.maxConcurrentLimboResolutions;){const e=t.xc.values().next().value;t.xc.delete(e);const n=new P(re.fromString(e)),s=t.Bc.next();t.Oc.set(s,new zw(n)),t.kc=t.kc.insert(n,s),af(t.remoteStore,new Bt(Gt(Da(n.path)),s,2,Aa.A))}}async function $s(t,e,n){const s=$(t),r=[],i=[],o=[];s.Cc.isEmpty()||(s.Cc.forEach((a,c)=>{o.push(s.Uc(c,e,n).then(l=>{if(l){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),r.push(l);const u=Ma.Ss(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.Dc.To(r),await async function(a,c){const l=$(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>I.forEach(c,f=>I.forEach(f.vs,p=>l.persistence.referenceDelegate.addReference(u,f.targetId,p)).next(()=>I.forEach(f.Vs,p=>l.persistence.referenceDelegate.removeReference(u,f.targetId,p)))))}catch(u){if(!Ls(u))throw u;x("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const f=u.targetId;if(!u.fromCache){const p=l.Ms.get(f),v=p.snapshotVersion,C=p.withLastLimboFreeSnapshotVersion(v);l.Ms=l.Ms.insert(f,C)}}}(s.localStore,i))}async function nE(t,e){const n=$(t);if(!n.currentUser.isEqual(e)){x("SyncEngine","User change. New user:",e.toKey());const s=await nf(n.localStore,e);n.currentUser=e,function(r,i){r.Fc.forEach(o=>{o.forEach(a=>{a.reject(new M(E.CANCELLED,i))})}),r.Fc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await $s(n,s.qs)}}function sE(t,e){const n=$(t),s=n.Oc.get(e);if(s&&s.Sc)return te().add(s.key);{let r=te();const i=n.Nc.get(e);if(!i)return r;for(const o of i){const a=n.Cc.get(o);r=r.unionWith(a.view.yc)}return r}}function rE(t){const e=$(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=mf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=sE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Jw.bind(null,e),e.Dc.To=Bw.bind(null,e.eventManager),e.Dc.qc=jw.bind(null,e.eventManager),e}function iE(t){const e=$(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Zw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=eE.bind(null,e),e}class oE{constructor(){this.synchronizeTabs=!1}async initialize(e){this.O=fi(e.databaseInfo.databaseId),this.sharedClientState=this.Gc(e),this.persistence=this.jc(e),await this.persistence.start(),this.gcScheduler=this.Qc(e),this.localStore=this.Wc(e)}Qc(e){return null}Wc(e){return sw(this.persistence,new tw,e.initialUser,this.O)}jc(e){return new gw(La.bi,this.O)}Gc(e){return new yw}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class aE{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>vl(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=nE.bind(null,this.syncEngine),await Lw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Uw}createDatastore(e){const n=fi(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new Tw(r));var r;return function(i,o,a,c){return new _w(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>vl(this.syncEngine,a,0),o=gl.Vt()?new gl:new vw,new Aw(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new Ww(s,r,i,o,a,c);return l&&(u.Lc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=$(e);x("RemoteStore","RemoteStore shutting down."),n.Ko.add(5),await Vs(n),n.jo.shutdown(),n.Qo.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class cE{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Hc(this.observer.next,e)}error(e){this.observer.error?this.Hc(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Jc(){this.muted=!0}Hc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Me.UNAUTHENTICATED,this.clientId=Oh.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{x("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(x("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Ba(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function uE(t,e){t.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await nf(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function hE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await fE(t);x("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>ml(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>ml(e.remoteStore,i)),t.onlineComponents=e}async function fE(t){return t.offlineComponents||(x("FirestoreClient","Using default OfflineComponentProvider"),await uE(t,new oE)),t.offlineComponents}async function Ef(t){return t.onlineComponents||(x("FirestoreClient","Using default OnlineComponentProvider"),await hE(t,new aE)),t.onlineComponents}function dE(t){return Ef(t).then(e=>e.syncEngine)}async function El(t){const e=await Ef(t),n=e.eventManager;return n.onListen=Gw.bind(null,e.syncEngine),n.onUnlisten=Qw.bind(null,e.syncEngine),n}const Tl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(t,e,n){if(!n)throw new M(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function pE(t,e,n,s){if(e===!0&&s===!0)throw new M(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function bl(t){if(!P.isDocumentKey(t))throw new M(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Il(t){if(P.isDocumentKey(t))throw new M(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ka(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":U()}function yn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ka(t);throw new M(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new M(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,pE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _l({}),this._settingsFrozen=!1,e instanceof In?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new M(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new In(r.options.projectId)}(e))}get app(){if(!this._app)throw new M(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _l(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Uy;switch(n.type){case"gapi":const s=n.client;return J(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new By(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new M(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Tl.get(e);n&&(x("ComponentProvider","Removing Datastore"),Tl.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $e(this.firestore,e,this._key)}}class gi{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new gi(this.firestore,e,this._query)}}class wt extends gi{constructor(e,n,s){super(e,n,Da(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $e(this.firestore,null,new P(e))}withConverter(e){return new wt(this.firestore,e,this._path)}}function BE(t,e,...n){if(t=wn(t),Tf("collection","path",e),t instanceof Ha){const s=re.fromString(e,...n);return Il(s),new wt(t,null,s)}{if(!(t instanceof $e||t instanceof wt))throw new M(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(re.fromString(e,...n));return Il(s),new wt(t.firestore,null,s)}}function gE(t,e,...n){if(t=wn(t),arguments.length===1&&(e=Oh.R()),Tf("doc","path",e),t instanceof Ha){const s=re.fromString(e,...n);return bl(s),new $e(t,null,new P(s))}{if(!(t instanceof $e||t instanceof wt))throw new M(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(re.fromString(e,...n));return bl(s),new $e(t.firestore,t instanceof wt?t.converter:null,new P(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(){this.hu=Promise.resolve(),this.lu=[],this.fu=!1,this.du=[],this._u=null,this.wu=!1,this.mu=!1,this.gu=[],this.ro=new rf(this,"async_queue_retry"),this.yu=()=>{const n=Ui();n&&x("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ro.Yr()};const e=Ui();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.yu)}get isShuttingDown(){return this.fu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.fu){this.fu=!0,this.mu=e||!1;const n=Ui();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.yu)}}enqueue(e){if(this.pu(),this.fu)return new Promise(()=>{});const n=new Vt;return this.Iu(()=>this.fu&&this.mu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.lu.push(e),this.Eu()))}async Eu(){if(this.lu.length!==0){try{await this.lu[0](),this.lu.shift(),this.ro.reset()}catch(e){if(!Ls(e))throw e;x("AsyncQueue","Operation failed with retryable error: "+e)}this.lu.length>0&&this.ro.Hr(()=>this.Eu())}}Iu(e){const n=this.hu.then(()=>(this.wu=!0,e().catch(s=>{this._u=s,this.wu=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw bt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.wu=!1,s))));return this.hu=n,n}enqueueAfterDelay(e,n,s){this.pu(),this.gu.indexOf(e)>-1&&(n=0);const r=$a.createAndSchedule(this,e,n,s,i=>this.Tu(i));return this.du.push(r),r}pu(){this._u&&U()}verifyOperationInProgress(){}async Au(){let e;do e=this.hu,await e;while(e!==this.hu)}Ru(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}Pu(e){return this.Au().then(()=>{this.du.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Au()})}bu(e){this.gu.push(e)}Tu(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}function Cl(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Is extends Ha{constructor(e,n,s){super(e,n,s),this.type="firestore",this._queue=new mE,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||If(this),this._firestoreClient.terminate()}}function jE(t=mm()){return fm(t,"firestore").getImmediate()}function bf(t){return t._firestoreClient||If(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function If(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new Wy(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new lE(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class za{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Sn(Ie.fromBase64String(e))}catch(n){throw new M(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Sn(Ie.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE=/^__.*__$/;class vE{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Ms(e,this.data,this.fieldMask,n,this.fieldTransforms):new ui(e,this.data,n,this.fieldTransforms)}}function Cf(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class Ga{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.O=s,this.ignoreUndefinedProperties=r,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}Su(e){return new Ga(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.O,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Du(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Su({path:s,Cu:!1});return r.Nu(e),r}xu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Su({path:s,Cu:!1});return r.vu(),r}ku(e){return this.Su({path:void 0,Cu:!0})}Ou(e){return kr(e,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.$u)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Nu(this.path.get(e))}Nu(e){if(e.length===0)throw this.Ou("Document fields must not be empty");if(Cf(this.Vu)&&yE.test(e))throw this.Ou('Document fields cannot begin and end with "__"')}}class wE{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.O=s||fi(e)}Fu(e,n,s,r=!1){return new Ga({Vu:e,methodName:n,$u:s,path:Pe.emptyPath(),Cu:!1,Mu:r},this.databaseId,this.O,this.ignoreUndefinedProperties)}}function Af(t){const e=t._freezeSettings(),n=fi(t._databaseId);return new wE(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Sf(t,e,n,s,r,i={}){const o=t.Fu(i.merge||i.mergeFields?2:0,e,n,r);Rf("Data must be an object, but it was:",o,s);const a=xf(s,o);let c,l;if(i.merge)c=new mo(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const f of i.mergeFields){const p=EE(e,f,n);if(!o.contains(p))throw new M(E.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);bE(u,p)||u.push(p)}c=new mo(u),l=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,l=o.fieldTransforms;return new vE(new Ke(a),c,l)}function Nf(t,e){if(Df(t=wn(t)))return Rf("Unsupported field value:",e,t),xf(t,e);if(t instanceof _f)return function(n,s){if(!Cf(s.Vu))throw s.Ou(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Ou(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Cu&&e.Vu!==4)throw e.Ou("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Nf(o,s.ku(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=wn(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return hv(s.O,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Ve.fromDate(n);return{timestampValue:Rr(s.O,r)}}if(n instanceof Ve){const r=new Ve(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Rr(s.O,r)}}if(n instanceof Wa)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Sn)return{bytesValue:Yh(s.O,n._byteString)};if(n instanceof $e){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.Ou(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Oa(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.Ou(`Unsupported field value: ${Ka(n)}`)}(t,e)}function xf(t,e){const n={};return kh(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ln(t,(s,r)=>{const i=Nf(r,e.Du(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Df(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ve||t instanceof Wa||t instanceof Sn||t instanceof $e||t instanceof _f)}function Rf(t,e,n){if(!Df(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Ka(n);throw s==="an object"?e.Ou(t+" a custom object"):e.Ou(t+" "+s)}}function EE(t,e,n){if((e=wn(e))instanceof za)return e._internalPath;if(typeof e=="string")return Of(t,e);throw kr("Field path arguments must be of type string or ",t,!1,void 0,n)}const TE=new RegExp("[~\\*/\\[\\]]");function Of(t,e,n){if(e.search(TE)>=0)throw kr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new za(...e.split("."))._internalPath}catch{throw kr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function kr(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new M(E.INVALID_ARGUMENT,a+t+c)}function bE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new $e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new IE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Mf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class IE extends kf{data(){return super.data()}}function Mf(t,e){return typeof e=="string"?Of(t,e):e instanceof za?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Pf extends kf{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ar(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Mf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class ar extends Pf{data(e={}){return super.data(e)}}class _E{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Qn(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new ar(this._firestore,this._userDataWriter,s.key,s,new Qn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new M(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new ar(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Qn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new ar(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Qn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:CE(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function CE(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AE(t){if(Nr(t)&&t.explicitOrderBy.length===0)throw new M(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{convertValue(e,n="none"){switch(Wt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(bn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw U()}}convertObject(e,n){const s={};return Ln(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Wa(ce(e.latitude),ce(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Ph(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(vs(e));default:return null}}convertTimestamp(e){const n=It(e);return new Ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=re.fromString(e);J(tf(s));const r=new In(s.get(1),s.get(3)),i=new P(s.popFirst(5));return r.isEqual(n)||bt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class Ff extends SE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Sn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new $e(this.firestore,null,n)}}function qE(t,e,n){t=yn(t,$e);const s=yn(t.firestore,Is),r=Lf(t.converter,e,n);return Uf(s,[Sf(Af(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,$t.none())])}function KE(t,e){const n=yn(t.firestore,Is),s=gE(t),r=Lf(t.converter,e);return Uf(n,[Sf(Af(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,$t.exists(!1))]).then(()=>s)}function HE(t,...e){var n,s,r;t=wn(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Cl(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Cl(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(s=f.error)===null||s===void 0?void 0:s.bind(f),e[o+2]=(r=f.complete)===null||r===void 0?void 0:r.bind(f)}let c,l,u;if(t instanceof $e)l=yn(t.firestore,Is),u=Da(t._key.path),c={next:f=>{e[o]&&e[o](NE(l,t,f))},error:e[o+1],complete:e[o+2]};else{const f=yn(t,gi);l=yn(f.firestore,Is),u=f._query;const p=new Ff(l);c={next:v=>{e[o]&&e[o](new _E(l,p,f,v))},error:e[o+1],complete:e[o+2]},AE(t._query)}return function(f,p,v,C){const k=new cE(C),O=new qw(p,k,v);return f.asyncQueue.enqueueAndForget(async()=>Vw(await El(f),O)),()=>{k.Jc(),f.asyncQueue.enqueueAndForget(async()=>$w(await El(f),O))}}(bf(l),u,a,c)}function Uf(t,e){return function(n,s){const r=new Vt;return n.asyncQueue.enqueueAndForget(async()=>Yw(await dE(n),s,r)),r.promise}(bf(t),e)}function NE(t,e,n){const s=n.docs.get(e._key),r=new Ff(t);return new Pf(t,r,e._key,s,new Qn(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Pn=n})(gm),mr(new us("firestore",(n,{options:s})=>{const r=n.getProvider("app").getImmediate(),i=new Is(r,new Vy(n.getProvider("auth-internal")),new qy(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),i._setSettings(s),i},"PUBLIC")),pn(Wc,"3.4.5",t),pn(Wc,"3.4.5","esm2017")})();export{it as F,HE as H,gE as a,RE as b,jp as c,jE as d,ME as e,OE as f,Tu as g,PE as h,$E as i,qE as j,Dp as k,LE as l,ct as m,BE as n,_p as o,DE as p,FE as q,$o as r,Ap as s,xE as t,xd as u,UE as v,Ii as w,kE as x,VE as y,KE as z};
