(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[633],{26890:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/deposit/advisories",function(){return n(82552)}])},82554:function(e,t,n){"use strict";var o=n(85893),s=n(39618),a=n(67294),i=n(674),r=n(21237);let l=e=>{let{advisoriesData:t,onSubmit:n}=e,[l,u]=(0,a.useState)(t.map((e,t)=>{let{contentTitle:s,texts:a,links:l,terms:u,enableNextStep:c,rank:p,title:d,value:k}=e;return{content:(e,t,r,c)=>(0,o.jsx)(i.B,{onSubmit:n,title:s,texts:a,links:l,terms:u,rank:e,enableNextStep:t,onAccept:r,onBack:c}),enableNextStep:c,rank:p,state:(0,r.d$)(t),title:d,value:k}})),[c,p]=(0,a.useState)(l[0]),d=e=>{u(l.map(t=>t.rank===e+1?(p(t),{...t,state:"enabled"}):t))},k=e=>{u(l.map(t=>t.rank===e?{...t,state:"upcoming"}:t));let t=l.find(t=>t.rank===e-1);t&&p(t)},m=()=>{},_=e=>{p(e)};return(0,o.jsxs)(s.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,o.jsx)(s.xv,{variant:"h3",children:"Advisories"}),(0,o.jsx)(s.I,{itemSelected:c,items:l,onItemChange:_,onComplete:m,onUpdateState:d,onBack:k})]})};t.Z=l},82552:function(e,t,n){"use strict";n.r(t);var o=n(85893),s=n(41518),a=n(67294),i=n(11163),r=n(82554),l=n(9324);let u=()=>{let e=(0,i.useRouter)(),t=(0,s.o)((0,a.useCallback)(e=>e.completeDepositStep,[]));console.log(e);let n=(0,s.o)(e=>e.enableDepositStep),u=()=>{t("advisories-deposit");let o=n("upload-deposit-data");e.push(o.href)},c=!!window&&"groupFlow"===window.location.hash.split("#")[1];return c&&u(),(0,o.jsx)(r.Z,{advisoriesData:l._y,onSubmit:()=>u()})};t.default=u,u.layout="DepositProgressTrackerLayout"}},function(e){e.O(0,[774,888,179],function(){return e(e.s=26890)}),_N_E=e.O()}]);