import{r,o as n,l as d,w as _,b as t,s as m,f as a,c as b,t as f,g as u,v as h}from"./index.df94e95f.js";const p={class:"modal-box text-center w-full"},v={class:"text-3xl font-bold mb-8"},x={class:"mb-8"},k={class:"text-xl"},C={key:0,class:"not-italic font-bold"},y={class:"modal-action justify-center"},g=["onClick"],j=["onClick"],B={name:"DashboardDeleteModal",inheritAttrs:!1},N=Object.assign(B,{props:{dashboardItem:{type:Object,default(){return{}}}},emits:["confirm"],setup(e,{emit:c}){function l(){c("confirm")}return(s,D)=>{const i=r("vue-final-modal");return n(),d(i,h({classes:"flex justify-center items-center"},s.$attrs),{default:_(({close:o})=>[t("div",p,[t("div",v,[m(s.$slots,"title")]),t("div",x,[t("p",k,[a(" \u78BA\u5B9A\u8981\u522A\u9664"),e.dashboardItem?(n(),b("em",C,f(e.dashboardItem.title),1)):u("",!0),a("\u9805\u76EE\uFF1F ")])]),t("div",y,[t("button",{class:"btn btn-outline",type:"button",onClick:w=>o()},"\u53D6\u6D88",8,g),t("button",{class:"btn btn-error",onClick:()=>{o(),l()}}," \u78BA\u5B9A ",8,j)])])]),_:3},16)}}});export{N as _};
