import{R as m,j as e}from"./iframe-CMSACG2S.js";import{C as r}from"./checkbox-CRVzLTKf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CajpnwsP.js";import"./index-B14L8SAH.js";import"./index-CFilcclQ.js";import"./index-DzzXbvBo.js";import"./index-DWOTaDXB.js";import"./index-7mSvjIpT.js";import"./index-DJeBnas0.js";import"./utils-CDN07tui.js";import"./check-DhK1oAIF.js";import"./createLucideIcon-ChXWE-98.js";import"./label-DPjrZSJK.js";import"./index-BizsTmrf.js";import"./index-C-4GQbpA.js";const A={title:"components/Checkbox",component:r,parameters:{layout:"centered"},argTypes:{size:{control:"radio",options:["sm","md","lg"]}}},s={args:{label:"Accept terms & conditions"}},a={render:()=>{const[d,p]=m.useState(!1);return e.jsx(r,{label:"Receive notifications",checked:d,onCheckedChange:p})}},o={args:{label:"Subscribe to newsletter",helperText:"We’ll only send product updates."}},t={args:{label:"Accept privacy policy",error:"This field is required"}},c={args:{label:"Agree to policy",required:!0}},l={args:{label:"Disabled checkbox",disabled:!0}},n={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{label:"Small",size:"sm"}),e.jsx(r,{label:"Medium",size:"md"}),e.jsx(r,{label:"Large",size:"lg"})]})},i={args:{label:"Playground checkbox",helperText:"Toggle me",size:"md",disabled:!1,required:!1}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Accept terms & conditions"
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return <Checkbox label="Receive notifications" checked={checked} onCheckedChange={setChecked} />;
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Subscribe to newsletter",
    helperText: "We’ll only send product updates."
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Accept privacy policy",
    error: "This field is required"
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Agree to policy",
    required: true
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Disabled checkbox",
    disabled: true
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Checkbox label="Small" size="sm" />
      <Checkbox label="Medium" size="md" />
      <Checkbox label="Large" size="lg" />
    </div>
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Playground checkbox",
    helperText: "Toggle me",
    size: "md",
    disabled: false,
    required: false
  }
}`,...i.parameters?.docs?.source}}};const D=["Default","Controlled","WithHelperText","Error","Required","Disabled","Sizes","Playground"];export{a as Controlled,s as Default,l as Disabled,t as Error,i as Playground,c as Required,n as Sizes,o as WithHelperText,D as __namedExportsOrder,A as default};
