import{j as e}from"./iframe-CMSACG2S.js";import{I as i}from"./Input-DZCe0B-7.js";import{M as d}from"./mail-DNnkWIqh.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CDN07tui.js";import"./createLucideIcon-ChXWE-98.js";import"./loader-circle-C1RY9FWx.js";const w={title:"components/Input",component:i,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{label:"Name",placeholder:"Enter your name"}},a={render:()=>e.jsxs("div",{className:"space-y-4 w-[320px]",children:[e.jsx(i,{size:"sm",label:"Small"}),e.jsx(i,{size:"md",label:"Medium"}),e.jsx(i,{size:"lg",label:"Large"})]})},s={args:{label:"Username",helperText:"This will be public"}},o={args:{label:"Email",error:"Invalid email address"}},l={args:{label:"Email",prefix:e.jsx(d,{className:"h-4 w-4"})}},n={args:{label:"Search",loading:!0}},t={args:{label:"Password",type:"password"}},c={args:{label:"Account ID",value:"USR-92831",readOnly:!0}},m={args:{label:"Disabled",disabled:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Name",
    placeholder: "Enter your name"
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-[320px]">
      <Input size="sm" label="Small" />
      <Input size="md" label="Medium" />
      <Input size="lg" label="Large" />
    </div>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Username",
    helperText: "This will be public"
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    error: "Invalid email address"
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    prefix: <Mail className="h-4 w-4" />
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Search",
    loading: true
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Password",
    type: "password"
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Account ID",
    value: "USR-92831",
    readOnly: true
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Disabled",
    disabled: true
  }
}`,...m.parameters?.docs?.source}}};const I=["Default","Sizes","WithHelperText","Error","WithIcons","Loading","Password","ReadOnly","Disabled"];export{r as Default,m as Disabled,o as Error,n as Loading,t as Password,c as ReadOnly,a as Sizes,s as WithHelperText,l as WithIcons,I as __namedExportsOrder,w as default};
