import{R as m,j as e}from"./iframe-CMSACG2S.js";import{S as r}from"./switch-p_n4Gc8d.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B14L8SAH.js";import"./index-CFilcclQ.js";import"./index-CajpnwsP.js";import"./index-DzzXbvBo.js";import"./index-7mSvjIpT.js";import"./index-DJeBnas0.js";import"./utils-CDN07tui.js";const z={title:"components/Switch",component:r,parameters:{layout:"centered"}},s={args:{label:"Enable notifications"}},a={render:()=>{const[c,i]=m.useState(!1);return e.jsx(r,{label:"Dark mode",checked:c,onCheckedChange:i})}},o={args:{label:"Send emails",helperText:"Weekly digest only"}},t={args:{label:"Terms required",error:"You must enable this"}},n={args:{label:"Disabled",disabled:!0}},l={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{label:"Small",size:"sm"}),e.jsx(r,{label:"Medium",size:"md"}),e.jsx(r,{label:"Large",size:"lg"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Enable notifications"
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [on, setOn] = React.useState(false);
    return <Switch label="Dark mode" checked={on} onCheckedChange={setOn} />;
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Send emails",
    helperText: "Weekly digest only"
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Terms required",
    error: "You must enable this"
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Disabled",
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Switch label="Small" size="sm" />
      <Switch label="Medium" size="md" />
      <Switch label="Large" size="lg" />
    </div>
}`,...l.parameters?.docs?.source}}};const D=["Default","Controlled","WithHelper","Error","Disabled","Sizes"];export{a as Controlled,s as Default,n as Disabled,t as Error,l as Sizes,o as WithHelper,D as __namedExportsOrder,z as default};
