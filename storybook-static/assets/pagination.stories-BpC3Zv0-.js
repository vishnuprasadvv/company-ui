import{j as a,r as z}from"./iframe-CMSACG2S.js";import"./avatar-CqasNaEx.js";import{B as y}from"./button-BQRDzDuh.js";import"./checkbox-CRVzLTKf.js";import{c as j}from"./utils-CDN07tui.js";import{C as q,a as L}from"./DatePicker-DDMnFxXD.js";import"./DropdownSelector-1DwIpoTN.js";import"./ThemeSwitcher-_GrEeGbJ.js";import"./progressbar-Bc4ATk1f.js";import"./multiSelect-1oe4X4VI.js";import"./Input-DZCe0B-7.js";import"./select-CMz2dZH6.js";import"./radioGroup-DG7B882O.js";import"./switch-p_n4Gc8d.js";import"./selectCombobox-DWT9jJ_6.js";import"./textarea-CEWHKeRS.js";import"./toast-l9anDZDo.js";import"./separator-CkP9o2KK.js";import"./table-COJpkcPk.js";import"./badge-vUo7Tx8o.js";import{c as M}from"./createLucideIcon-ChXWE-98.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C1tS_mMd.js";import"./index-OKNhNED5.js";import"./index-CFilcclQ.js";import"./index-BizsTmrf.js";import"./index-7mSvjIpT.js";import"./index-DJeBnas0.js";import"./index-C-4GQbpA.js";import"./index-CajpnwsP.js";import"./index-DlyPn96B.js";import"./index-B_jtOnfb.js";import"./button-Do_LDvEC.js";import"./loader-circle-C1RY9FWx.js";import"./index-B14L8SAH.js";import"./index-DzzXbvBo.js";import"./index-DWOTaDXB.js";import"./check-DhK1oAIF.js";import"./label-DPjrZSJK.js";import"./chevron-down-zMy561pL.js";import"./index-kG51XRa0.js";import"./Combination-Cyxc5QGd.js";import"./floating-ui.react-dom-BrNZe24b.js";import"./index-Da12YEfY.js";import"./index-B7BYWDGg.js";import"./select-NcKrT762.js";import"./index-DHJUFWc_.js";import"./dropdown-menu-Bu_FDD6Q.js";import"./index-DLMCcQ-z.js";import"./input-Ct0vx6h5.js";import"./x-BEAjH1lD.js";const B=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],I=M("ellipsis",B),p={sm:"h-8 min-w-8 px-1",md:"h-9 min-w-9 px-2",lg:"h-11 min-w-11 px-4"},w=1,s=1,N=({page:e,totalPages:n,onPageChange:m,size:o="md",className:E})=>{if(n<=1)return null;const C=e>1,v=e<n,P=(r,f)=>Array.from({length:f-r+1},(O,k)=>r+k),_=P(1,Math.min(s,n)),T=P(Math.max(n-s+1,s+1),n),S=Math.max(e-w,s+2),b=Math.min(e+w,n-s-1),t=[];return _.forEach(r=>t.push(r)),S>s+2?t.push("..."):s+1<n-s&&t.push(s+1),P(S,b).forEach(r=>t.push(r)),b<n-s-1?t.push("..."):n-s>s&&t.push(n-s),T.forEach(r=>{t.includes(r)||t.push(r)}),a.jsxs("nav",{role:"navigation","aria-label":"Pagination",className:j("flex items-center justify-center gap-2",E),children:[a.jsx(y,{variant:"outline",disabled:!C,onClick:()=>C&&m(e-1),"aria-label":"Previous page",className:p[o],children:a.jsx(q,{className:"h-4 w-4"})}),t.map((r,f)=>r==="..."?a.jsx("span",{className:j("flex items-center justify-center text-muted-foreground",p[o]),children:a.jsx(I,{className:"h-4 w-4"})},`dots-${f}`):a.jsx(y,{variant:r===e?"default":"outline","aria-current":r===e?"page":void 0,onClick:()=>m(r),className:j(p[o]),children:r},r)),a.jsx(y,{variant:"outline",disabled:!v,onClick:()=>v&&m(e+1),"aria-label":"Next page",className:p[o],children:a.jsx(L,{className:"h-4 w-4"})})]})};N.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{page:{required:!0,tsType:{name:"number"},description:""},totalPages:{required:!0,tsType:{name:"number"},description:""},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const Be={title:"Design System/Pagination",component:N,tags:["autodocs"],argTypes:{page:{control:{type:"number",min:1}},totalPages:{control:{type:"number",min:1}},size:{control:"radio",options:["sm","md","lg"]},onPageChange:{action:"page changed"}}},i=e=>{const[n,m]=z.useState(e.page);return a.jsx(N,{...e,page:n,onPageChange:o=>{m(o),e.onPageChange?.(o)}})},c={render:e=>a.jsx(i,{...e}),args:{page:5,totalPages:20,size:"md"}},l={render:e=>a.jsx(i,{...e}),args:{page:4,totalPages:15,size:"sm"}},g={render:e=>a.jsx(i,{...e}),args:{page:10,totalPages:50,size:"lg"}},d={render:e=>a.jsx(i,{...e}),args:{page:1,totalPages:20}},u={render:e=>a.jsx(i,{...e}),args:{page:19,totalPages:20}},h={render:e=>a.jsx(i,{...e}),args:{page:2,totalPages:3}},x={render:e=>a.jsx(i,{...e}),args:{page:55,totalPages:100}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledPagination {...args} />,
  args: {
    page: 5,
    totalPages: 20,
    size: "md"
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledPagination {...args} />,
  args: {
    page: 4,
    totalPages: 15,
    size: "sm"
  }
}`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledPagination {...args} />,
  args: {
    page: 10,
    totalPages: 50,
    size: "lg"
  }
}`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledPagination {...args} />,
  args: {
    page: 1,
    totalPages: 20
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledPagination {...args} />,
  args: {
    page: 19,
    totalPages: 20
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledPagination {...args} />,
  args: {
    page: 2,
    totalPages: 3
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledPagination {...args} />,
  args: {
    page: 55,
    totalPages: 100
  }
}`,...x.parameters?.docs?.source}}};const Ie=["Playground","Small","Large","NearStart","NearEnd","FewPages","HundredPages"];export{h as FewPages,x as HundredPages,g as Large,u as NearEnd,d as NearStart,c as Playground,l as Small,Ie as __namedExportsOrder,Be as default};
