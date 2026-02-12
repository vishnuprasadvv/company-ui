import{j as r,r as v}from"./iframe-CMSACG2S.js";import{M as d}from"./multiSelect-1oe4X4VI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-kG51XRa0.js";import"./index-B14L8SAH.js";import"./index-CFilcclQ.js";import"./index-CajpnwsP.js";import"./Combination-Cyxc5QGd.js";import"./index-7mSvjIpT.js";import"./index-DJeBnas0.js";import"./index-OKNhNED5.js";import"./floating-ui.react-dom-BrNZe24b.js";import"./index-Da12YEfY.js";import"./index-DWOTaDXB.js";import"./utils-CDN07tui.js";import"./index-B7BYWDGg.js";import"./button-Do_LDvEC.js";import"./index-C-4GQbpA.js";import"./index-B_jtOnfb.js";import"./chevron-down-zMy561pL.js";import"./createLucideIcon-ChXWE-98.js";import"./check-DhK1oAIF.js";const a=[{label:"React",value:"react"},{label:"Vue",value:"vue"},{label:"Angular",value:"angular"},{label:"Svelte",value:"svelte"},{label:"Solid",value:"solid"}],A={title:"components/MultiSelect",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"radio",options:["sm","md","lg"]},error:{control:"text"},helperText:{control:"text"},required:{control:"boolean"},label:{control:"text"}}};function o(e){const[g,S]=v.useState(e.value??[]);return r.jsx("div",{className:"w-38",children:r.jsx(d,{...e,value:g,onChange:S})})}const s={render:e=>r.jsx(o,{...e}),args:{options:a,value:[]}},t={render:e=>r.jsx(o,{...e}),args:{label:"Framework",options:a,value:[]}},n={render:e=>r.jsx(o,{...e}),args:{label:"Framework",required:!0,options:a,value:[]}},l={render:e=>r.jsx(o,{...e}),args:{label:"Framework",helperText:"Select all frameworks you have used",options:a,value:[]}},i={render:e=>r.jsx(o,{...e}),args:{label:"Framework",error:"At least one option is required",options:a,value:[]}},m={render:e=>r.jsx(o,{...e}),args:{label:"Framework",size:"sm",options:a,value:[]}},p={render:e=>r.jsx(o,{...e}),args:{label:"Framework",size:"md",options:a,value:[]}},c={render:e=>r.jsx(o,{...e}),args:{label:"Framework",size:"lg",options:a,value:[]}},u={render:e=>r.jsx(o,{...e}),args:{label:"Framework",options:a,value:["react","vue"]}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Controlled {...args} />,
  args: {
    options: OPTIONS,
    value: []
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <Controlled {...args} />,
  args: {
    label: "Framework",
    options: OPTIONS,
    value: []
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <Controlled {...args} />,
  args: {
    label: "Framework",
    required: true,
    options: OPTIONS,
    value: []
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <Controlled {...args} />,
  args: {
    label: "Framework",
    helperText: "Select all frameworks you have used",
    options: OPTIONS,
    value: []
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <Controlled {...args} />,
  args: {
    label: "Framework",
    error: "At least one option is required",
    options: OPTIONS,
    value: []
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <Controlled {...args} />,
  args: {
    label: "Framework",
    size: "sm",
    options: OPTIONS,
    value: []
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Controlled {...args} />,
  args: {
    label: "Framework",
    size: "md",
    options: OPTIONS,
    value: []
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <Controlled {...args} />,
  args: {
    label: "Framework",
    size: "lg",
    options: OPTIONS,
    value: []
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <Controlled {...args} />,
  args: {
    label: "Framework",
    options: OPTIONS,
    value: ["react", "vue"]
  }
}`,...u.parameters?.docs?.source}}};const D=["Default","WithLabel","Required","WithHelperText","ErrorState","SizeSmall","SizeMedium","SizeLarge","Preselected"];export{s as Default,i as ErrorState,u as Preselected,n as Required,c as SizeLarge,p as SizeMedium,m as SizeSmall,l as WithHelperText,t as WithLabel,D as __namedExportsOrder,A as default};
