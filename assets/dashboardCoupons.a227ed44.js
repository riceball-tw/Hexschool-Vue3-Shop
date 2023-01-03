import{r as w,B as D,a as S,o as c,h as Z,w as U,b as t,s as B,g as j,y as r,z as m,A as z,v as A,C as H,i as x,c as p,F as C,f as E,t as _,d as F,$ as v}from"./index.ddd01c4b.js";import{_ as L}from"./DashboardDeleteModal.bae5b905.js";import{_ as T}from"./AppPagination.15a8889f.js";const W={class:"modal-box w-full max-w-none p-8"},I={class:"text-3xl font-bold mb-8"},N=["onSubmit"],O={class:"form-control w-full"},P=t("label",{for:"title",class:"label"},[t("span",{class:"label-text"},"\u540D\u7A31")],-1),Q={class:"form-control w-full"},R=t("label",{for:"code",class:"label"},[t("span",{class:"label-text"},"\u6298\u6263\u78BC")],-1),G={class:"form-control w-full"},J=t("label",{for:"percent",class:"label"},[t("span",{class:"label-text"},"\u6298\u6263\u6578")],-1),K={class:"input-group"},X=t("span",null,"%",-1),Y={class:"form-control w-full"},tt=t("label",{for:"dueDate",class:"label"},[t("span",{class:"label-text"},"\u5230\u671F\u65E5")],-1),et={class:"form-control w-full"},ot={for:"isEnabled",class:"label"},lt=t("span",{class:"label-text"},"\u662F\u5426\u555F\u7528",-1),nt={class:"modal-action flex flex-wrap gap-4"},st=t("button",{class:"btn btn-primary btn-wide",form:"couponModal",type:"submit"},"\u78BA\u8A8D",-1),at=["onClick"],y={__name:"CouponModal",props:{coupon:{type:Object,default(){return{}}}},emits:["confirm","cancel"],setup(g,{emit:d}){const f=g,e=w({});e.value={...f.coupon};function u(){var l;const s={title:e.value.title,is_enabled:(l=e.value.is_enabled)!=null?l:0,percent:e.value.percent,due_date:H(e.value.due_date),code:e.value.code};d("confirm",s)}return D(()=>{if(e.value.due_date){const s=new Date(e.value.due_date*1e3).toISOString(),l=new Date(s).toLocaleDateString("zh-TW",{year:"numeric",month:"2-digit",day:"2-digit"}).replace(/\//g,"-");e.value.due_date=l}}),(s,l)=>{const b=S("vue-final-modal");return c(),Z(b,A(s.$attrs,{classes:"flex justify-center items-center"}),{default:U(({close:h})=>[t("div",W,[t("div",I,[B(s.$slots,"title")]),t("form",{id:"couponModal",onSubmit:j(()=>{h(),u()},["prevent"])},[t("div",O,[P,r(t("input",{id:"title","onUpdate:modelValue":l[0]||(l[0]=a=>e.value.title=a),class:"input input-bordered w-full",type:"text",placeholder:"\u8ACB\u8F38\u5165\u512A\u60E0\u5238\u540D\u7A31\u2026\u2026",required:""},null,512),[[m,e.value.title]])]),t("div",Q,[R,r(t("input",{id:"code","onUpdate:modelValue":l[1]||(l[1]=a=>e.value.code=a),class:"input input-bordered w-full",type:"text",placeholder:"\u8ACB\u8F38\u5165\u512A\u60E0\u5238\u6298\u6263\u4EE3\u78BC\u2026\u2026",required:""},null,512),[[m,e.value.code]])]),t("div",G,[J,t("div",K,[r(t("input",{id:"percent","onUpdate:modelValue":l[2]||(l[2]=a=>e.value.percent=a),class:"input input-bordered w-full",type:"number",min:"1",placeholder:"\u8ACB\u8F38\u5165\u512A\u60E0\u5238\u6298\u6263\u6578\u2026\u2026",required:""},null,512),[[m,e.value.percent]]),X])]),t("div",Y,[tt,r(t("input",{id:"dueDate","onUpdate:modelValue":l[3]||(l[3]=a=>e.value.due_date=a),type:"date",class:"input input-bordered w-full",placeholder:"\u8ACB\u8F38\u5165\u512A\u60E0\u5238\u5230\u671F\u65E5\u2026\u2026",required:""},null,512),[[m,e.value.due_date]])]),t("div",et,[t("label",ot,[lt,r(t("input",{"onUpdate:modelValue":l[4]||(l[4]=a=>e.value.is_enabled=a),class:"toggle toggle-success",type:"checkbox","true-value":1,"false-value":0},null,512),[[z,e.value.is_enabled]])])])],40,N),t("div",nt,[st,t("button",{class:"btn",onClick:a=>h()},"\u53D6\u6D88",8,at)])])]),_:3},16)}}},it={class:"flex justify-between w-full mb-8"},dt=t("h1",{class:"text-4xl font-bold"},"\u5F8C\u53F0\u512A\u60E0\u5238\u8CC7\u8A0A",-1),ut={class:"overflow-x-auto w-full"},ct={class:"table table-zebra w-full"},rt=t("thead",{class:"sticky top-0 z-20"},[t("tr",null,[t("th",null,"\u7D22\u5F15"),t("th",null,"\u540D\u7A31"),t("th",null,"\u6298\u6263\u767E\u5206\u6BD4"),t("th",null,"\u5230\u671F\u65E5"),t("th",null,"\u6298\u6263\u78BC"),t("th",null,"\u555F\u7528\u72C0\u614B"),t("th",null,"\u884C\u52D5")])],-1),pt={key:0,class:"text-success"},_t={key:1,class:"text-warning"},ht={class:"btn-group"},mt=["onClick"],ft=t("svg",{title:"\u7DE8\u8F2F",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},[t("path",{d:"M5 19h1.4l8.625-8.625-1.4-1.4L5 17.6ZM19.3 8.925l-4.25-4.2 1.4-1.4q.575-.575 1.413-.575.837 0 1.412.575l1.4 1.4q.575.575.6 1.388.025.812-.55 1.387ZM17.85 10.4 7.25 21H3v-4.25l10.6-10.6Zm-3.525-.725-.7-.7 1.4 1.4Z"})],-1),bt=[ft],vt=["onClick"],wt=t("svg",{title:"\u522A\u9664",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},[t("path",{d:"M7 21q-.825 0-1.412-.587Q5 19.825 5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413Q17.825 21 17 21ZM17 6H7v13h10ZM9 17h2V8H9Zm4 0h2V8h-2ZM7 6v13Z"})],-1),gt=[wt],yt={__name:"dashboardCoupons",setup(g){const d=x("axiosWithAuth"),f=x("$loading"),e=w([]),u=w({});function s(o=1){const i=f.show();d({method:"get",url:`/admin/coupons/?page=${o}`}).then(n=>{e.value=n.data.coupons,u.value=n.data.pagination}).finally(()=>{i.hide()})}function l(o){s(o)}function b(o){d({method:"post",url:"/admin/coupon",data:o}).then(()=>{s()})}function h(){v.show({component:y,on:{confirm(o){const i={data:{...o}};b(i)}},slots:{title:"\u65B0\u589E\u512A\u60E0\u5238"}})}function a(o){d({method:"put",url:`/admin/coupon/${o.id}`,data:o}).then(()=>{s()})}function M(o){v.show({component:y,bind:{coupon:{...o}},on:{confirm(i){const n={data:{...i}};a(n)}},slots:{title:"\u7DE8\u8F2F\u512A\u60E0\u5238"}})}function k(o){d({method:"delete",url:`/admin/coupon/${o}`}).then(()=>{s()})}function V(o){v.show({component:L,bind:{dashboardItem:{...o}},on:{confirm(){k(o.id)}},slots:{title:"\u522A\u9664\u512A\u60E0\u5238"}})}return s(),(o,i)=>(c(),p(C,null,[t("div",it,[dt,t("button",{class:"btn btn-primary",onClick:i[0]||(i[0]=n=>h())},"\u65B0\u589E\u512A\u60E0\u5238")]),t("div",ut,[t("table",ct,[rt,t("tbody",null,[(c(!0),p(C,null,E(e.value,(n,$)=>(c(),p("tr",{key:n.id},[t("th",null,_(u.value.current_page===1?$+1:$+1+u.value.current_page*10-10),1),t("td",null,_(n.title),1),t("td",null,_(n.percent)+"%",1),t("td",null,_(o.$unitFilters.toReadableDate(n.due_date)),1),t("td",null,_(n.code),1),t("td",null,[n.is_enabled?(c(),p("span",pt,"\u555F\u7528")):(c(),p("span",_t,"\u672A\u555F\u7528"))]),t("td",null,[t("div",ht,[t("button",{class:"btn btn-outline btn-square",onClick:q=>M(n)},bt,8,mt),t("button",{class:"btn btn-outline btn-square hover:btn-error -ml-px",onClick:q=>V(n)},gt,8,vt)])])]))),128))])])]),F(T,{pages:u.value,onPaginationChange:l},null,8,["pages"])],64))}};export{yt as default};
