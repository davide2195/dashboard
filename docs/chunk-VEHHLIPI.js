import{a as O}from"../dist/my-dashboard/browser/chunk-K4AWNY3Q.js";import{a as q}from"./chunk-645IONEL.js";import"../dist/my-dashboard/browser/chunk-AMGNMR2B.js";import{a as R}from"../dist/my-dashboard/browser/chunk-4IWBKHWY.js";import{Ab as D,Eb as c,Fb as l,Fc as M,Gb as h,Mb as j,Ub as d,Vb as _,W as x,Xa as a,Xb as k,Z as p,_b as I,fa as u,ib as b,ja as w,nb as C,oc as m,qa as S,xb as v,za as f}from"./chunk-MXGVNBKW.js";function y(n,e){let i=!e?.manualCleanup;i&&!e?.injector&&S(y);let o=i?e?.injector?.get(f)??u(f):null,t=T(e?.equal),r;e?.requireSync?r=b({kind:0},{equal:t}):r=b({kind:1,value:e?.initialValue},{equal:t});let g=n.subscribe({next:s=>r.set({kind:1,value:s}),error:s=>{if(e?.rejectErrors)throw s;r.set({kind:2,error:s})}});if(e?.requireSync&&r().kind===0)throw new p(601,!1);return o?.onDestroy(g.unsubscribe.bind(g)),m(()=>{let s=r();switch(s.kind){case 1:return s.value;case 2:throw s.error;case 0:throw new p(601,!1)}},{equal:e?.equal})}function T(n=Object.is){return(e,i)=>e.kind===1&&i.kind===1&&n(e.value,i.value)}function U(n,e){if(n&1&&(c(0,"section"),h(1,"img",1),c(2,"div")(3,"h3"),d(4),l(),c(5,"p"),d(6),l()()()),n&2){let i,o,t=j();a(),v("srcset",(i=t.user())==null?null:i.avatar)("alt",(o=t.user())==null?null:o.first_name),a(3),k("",t.user().first_name," ",t.user().last_name,""),a(2),_(t.user().email)}}function E(n,e){n&1&&(c(0,"p"),d(1,"Loading"),l())}var Y=(()=>{let e=class e{constructor(){this.route=u(q),this.usersService=u(O),this.user=y(this.route.params.pipe(x(({id:o})=>this.usersService.getUserById(o)))),this.titleLabel=m(()=>this.user()?`Informaci\xF3n del usuario: ${this.user()?.first_name} ${this.user()?.last_name}`:"Informaci\xF3n del usuario")}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=w({type:e,selectors:[["ng-component"]],standalone:!0,features:[I],decls:3,vars:2,consts:[[3,"title"],[3,"srcset","alt"]],template:function(t,r){t&1&&(h(0,"app-title",0),C(1,U,7,5,"section")(2,E,2,0,"p")),t&2&&(v("title",r.titleLabel()),a(),D(r.user()?1:2))},dependencies:[M,R],encapsulation:2});let n=e;return n})();export{Y as default};