import{j as r,r as u}from"./iframe-CMSACG2S.js";import{S as p}from"./select-CMz2dZH6.js";import"./preload-helper-PPVm8Dsz.js";import"./select-NcKrT762.js";import"./index-7mSvjIpT.js";import"./index-DJeBnas0.js";import"./index-B14L8SAH.js";import"./index-CFilcclQ.js";import"./index-DHJUFWc_.js";import"./index-CajpnwsP.js";import"./Combination-Cyxc5QGd.js";import"./index-OKNhNED5.js";import"./floating-ui.react-dom-BrNZe24b.js";import"./index-Da12YEfY.js";import"./index-DzzXbvBo.js";import"./index-B7BYWDGg.js";import"./utils-CDN07tui.js";import"./chevron-down-zMy561pL.js";import"./createLucideIcon-ChXWE-98.js";import"./check-DhK1oAIF.js";const N={title:"components/Select",component:p,parameters:{layout:"centered"},argTypes:{size:{control:"radio",options:["sm","md","lg"]},disabled:{control:"boolean"}},tags:["autodocs"]},s=[{label:"Savings Account",value:"savings"},{label:"Current Account",value:"current"},{label:"Fixed Deposit",value:"fd"},{label:"Recurring Deposit",value:"rd"}],a=e=>{const[i,m]=u.useState(e.value);return r.jsx("div",{className:"w-62",children:r.jsx(p,{...e,value:i,onChange:d=>{m(d),e.onChange?.(d)}})})},o={render:e=>r.jsx(a,{...e}),args:{placeholder:"Select account type",label:"Account type",options:s,size:"md",disabled:!1}},t={render:e=>r.jsx(a,{...e}),args:{placeholder:"Small select",options:s,size:"sm"}},l={render:e=>r.jsx(a,{...e}),args:{placeholder:"Large select",options:s,size:"lg"}},n={render:e=>r.jsx(a,{...e}),args:{placeholder:"Disabled select",options:s,disabled:!0}},c={render:e=>r.jsx(a,{...e}),args:{options:s,value:"current"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledSelect {...args} />,
  args: {
    placeholder: 'Select account type',
    label: 'Account type',
    options,
    size: 'md',
    disabled: false
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledSelect {...args} />,
  args: {
    placeholder: 'Small select',
    options,
    size: 'sm'
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledSelect {...args} />,
  args: {
    placeholder: 'Large select',
    options,
    size: 'lg'
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledSelect {...args} />,
  args: {
    placeholder: 'Disabled select',
    options,
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledSelect {...args} />,
  args: {
    options,
    value: 'current'
  }
}`,...c.parameters?.docs?.source}}};const O=["Default","Small","Large","Disabled","PreSelected"];export{o as Default,n as Disabled,l as Large,c as PreSelected,t as Small,O as __namedExportsOrder,N as default};
