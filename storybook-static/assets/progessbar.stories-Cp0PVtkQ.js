import{j as r}from"./iframe-CMSACG2S.js";import{P as n}from"./progressbar-Bc4ATk1f.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C1tS_mMd.js";import"./index-BizsTmrf.js";import"./index-7mSvjIpT.js";import"./index-DJeBnas0.js";import"./index-C-4GQbpA.js";import"./index-CajpnwsP.js";import"./utils-CDN07tui.js";import"./loader-circle-C1RY9FWx.js";import"./createLucideIcon-ChXWE-98.js";const x={title:"Components/ProgressBar",component:n,argTypes:{variant:{control:"select",options:["primary","success","warning","error","neutral"]},size:{control:"select",options:["sm","md","lg"]},type:{control:"select",options:["simple","with-label","percentage-only"]}},decorators:[l=>r.jsx("div",{className:"p-10 bg-background flex justify-center border rounded-xl",children:r.jsx(l,{})})]},a={args:{value:65,variant:"primary",size:"md",type:"simple"}},s={args:{value:45,label:"Syncing node_modules...",type:"with-label",variant:"primary",size:"md"}},t={args:{value:88,type:"percentage-only",variant:"success",size:"sm"}},o={args:{loading:!0,label:"Fetching data from server...",type:"with-label",variant:"primary",size:"md"}},i={args:{value:92,label:"Disk quota exceeded",type:"with-label",variant:"error",size:"md"}},e=()=>r.jsxs("div",{className:"flex flex-col gap-6 w-full max-w-sm",children:[r.jsx(n,{size:"sm",value:30,label:"Small",type:"with-label"}),r.jsx(n,{size:"md",value:60,label:"Medium",type:"with-label"}),r.jsx(n,{size:"lg",value:90,label:"Large",type:"with-label"})]});e.__docgenInfo={description:"6. All Sizes Comparison",methods:[],displayName:"SizesDemo"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    value: 65,
    variant: "primary",
    size: "md",
    type: "simple"
  }
}`,...a.parameters?.docs?.source},description:{story:"1. Default Simple State",...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: 45,
    label: "Syncing node_modules...",
    type: "with-label",
    variant: "primary",
    size: "md"
  }
}`,...s.parameters?.docs?.source},description:{story:"2. Full Developer View (With Label & Percentage)",...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    value: 88,
    type: "percentage-only",
    variant: "success",
    size: "sm"
  }
}`,...t.parameters?.docs?.source},description:{story:"3. Percentage Only (Clean Right-Aligned)",...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    label: "Fetching data from server...",
    type: "with-label",
    variant: "primary",
    size: "md"
  }
}`,...o.parameters?.docs?.source},description:{story:"4. Loading/Indeterminate State",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    value: 92,
    label: "Disk quota exceeded",
    type: "with-label",
    variant: "error",
    size: "md"
  }
}`,...i.parameters?.docs?.source},description:{story:"5. Error/Destructive State",...i.parameters?.docs?.description}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => <div className="flex flex-col gap-6 w-full max-w-sm">
    <ProgressBar size="sm" value={30} label="Small" type="with-label" />
    <ProgressBar size="md" value={60} label="Medium" type="with-label" />
    <ProgressBar size="lg" value={90} label="Large" type="with-label" />
  </div>`,...e.parameters?.docs?.source},description:{story:"6. All Sizes Comparison",...e.parameters?.docs?.description}}};const w=["Default","WithLabel","PercentageOnly","LoadingState","ErrorState","SizesDemo"];export{a as Default,i as ErrorState,o as LoadingState,t as PercentageOnly,e as SizesDemo,s as WithLabel,w as __namedExportsOrder,x as default};
