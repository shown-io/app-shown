import{o,s as t,w as F,H as S}from"./vendor-CqSKez46.js";import{Q as T}from"./QuestionTooltip-DhLT4KJN.js";import{s as l,a5 as E,t as M,w as k,E as A,S as u,T as y,F as I}from"./index-VnkSLCvX.js";import{M as x}from"./index-Dt_OfLi_.js";const C=o.label`
  display: flex;
  align-items: center;
  gap: ${l(1)};

  > *:last-child:not(:only-child) {
    margin-left: auto;
  }
`,Q=o.span`
  display: flex;
  align-items: center;
  align-self: center;
  font-weight: ${e=>e.theme.fontWeightBold};
  color: ${e=>e.theme.colors.text.important};
`,z=o.div`
  font-size: ${e=>e.theme.fontSizeSmallest};
  color: ${e=>e.theme.colors.text.secondary};
`,G=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${l(1)};
`,J=o.div`
  display: flex;
  align-items: center;
  gap: ${l(1)};
  margin-bottom: 0;
  font-weight: 700;
`;o.label`
  display: flex;
  align-items: center;
  margin-bottom: 0;
  font-weight: 700;
  color: ${e=>e.theme.colors.text.primary};
`;const B=o.div`
  display: inline-flex;
  align-items: center;
  gap: ${l(.5)};
  padding: ${l(.5)} ${l(1)};
  padding-right: ${l(1.5)};
  border-radius: ${e=>e.theme.borderRadiusLarge};
  color: ${e=>e.theme.colors.labels.purple.default};
  background-color: ${e=>e.theme.colors.labels.purple.background};
`,N=o(E)`
  color: ${e=>e.theme.colors.peri[700]} !important;
`,W=({title:e,className:s})=>{const n=M();return t.jsxs(B,{className:s,children:[t.jsx(k,{iconName:A.Stars,width:16,background:n.colors.peri[700]}),t.jsx(N,{$noSpacing:!0,$fontSmall:!0,children:e})]})},_=({children:e,infoText:s="",labelFor:n="",className:m="",tooltipId:g="",tooltipContent:c=null,ai:r=!1,labelProps:p,$spacing:d})=>{const i=r&&t.jsx(W,{title:t.jsx(I,{id:"common.shownai_generated"})});return t.jsxs(u,{$spacing:d,children:[t.jsx(x,{max:"xss",children:t.jsx(u,{$spacing:1,children:i})}),t.jsxs(C,{className:m,...n&&{htmlFor:n},children:[t.jsxs(Q,{children:[t.jsx(y,{type:"body",variant:"ml",color:"text.secondary",weight:"semibold",...p,children:e}),c&&t.jsx(T,{id:g,tooltipContent:!0,children:c})]}),s&&t.jsx(z,{children:s}),t.jsx(x,{min:"xss",children:i}),t.jsx(x,{max:"xss",children:t.jsx("div",{})})]})]})},K=({label:e=null,maxLength:s=null,forId:n=null,name:m=null,tooltipId:g=null,tooltipContent:c=null,labelSubTitle:r=null,ai:p=!1,countChars:d=!1,countRemainingCharsOnly:i=!1,labelProps:b,$spacing:v=1})=>{const h=F(),w=S.useCallback(()=>{var f;if(s){const a=document.getElementById(n),$=(f=a==null?void 0:a.value)==null?void 0:f.length;if(i){const L=s-(Number($)||0);return h.formatMessage({id:"common.characters_left"},{count:L})}let j=s.toString();return d&&(a!=null&&a.value)&&(j=`${$} / ${s}`),h.formatMessage({id:"common.characters"},{count:j})}return""},[h,s,d,i,n]);return e||r?t.jsxs(u,{$spacing:v,children:[e&&t.jsx(_,{infoText:w(),labelFor:n||m,tooltipId:g,tooltipContent:c,ai:p,labelProps:b,$spacing:r?.5:0,children:e}),r&&t.jsx(y,{type:"body",variant:"m",weight:"semibold",color:"text.secondary",children:r})]}):null};export{W as A,K as F,G as L,J as a,_ as b};
//# sourceMappingURL=FieldLabel-CdnD1aFC.js.map
