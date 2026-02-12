import{j as e,r as f}from"./iframe-CMSACG2S.js";import{R as l,a as r}from"./radioGroup-DG7B882O.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B14L8SAH.js";import"./index-CFilcclQ.js";import"./index-CajpnwsP.js";import"./index-7mSvjIpT.js";import"./index-DJeBnas0.js";import"./index-DLMCcQ-z.js";import"./index-DHJUFWc_.js";import"./index-Da12YEfY.js";import"./index-OKNhNED5.js";import"./index-DzzXbvBo.js";import"./index-DWOTaDXB.js";import"./utils-CDN07tui.js";import"./label-DPjrZSJK.js";import"./index-BizsTmrf.js";import"./index-C-4GQbpA.js";import"./createLucideIcon-ChXWE-98.js";const E={title:"components/Radio",component:l,tags:["autodocs"],argTypes:{size:{control:"radio",options:["sm","md","lg"]},label:{control:"text"},helperText:{control:"text"},error:{control:"text"},required:{control:"boolean"}}};function o(a){const[c,p]=f.useState("default");return e.jsxs(l,{...a,value:c,onValueChange:p,children:[e.jsx(r,{value:"default",label:"Default"}),e.jsx(r,{value:"comfortable",label:"Comfortable"}),e.jsx(r,{value:"compact",label:"Compact"})]})}const s={render:a=>e.jsx(o,{...a}),args:{label:"Density",helperText:"Select spacing",size:"md",required:!1}},t={render:a=>e.jsx(o,{...a}),args:{label:"Density",error:"Selection is required",size:"md"}},n={render:a=>e.jsx(o,{...a}),args:{label:"Density",required:!0}},d={render:a=>e.jsx(o,{...a}),args:{label:"Density",size:"sm"}},i={render:a=>e.jsx(o,{...a}),args:{label:"Density",size:"lg"}},u={render:()=>e.jsxs("div",{className:"space-y-6 max-w-sm",children:[e.jsxs(l,{label:"Small",size:"sm",defaultValue:"default",children:[e.jsx(r,{value:"default",label:"Default"}),e.jsx(r,{value:"comfortable",label:"Comfortable"})]}),e.jsxs(l,{label:"Medium",size:"md",defaultValue:"default",children:[e.jsx(r,{value:"default",label:"Default"}),e.jsx(r,{value:"comfortable",label:"Comfortable"})]}),e.jsxs(l,{label:"Large",size:"lg",defaultValue:"default",children:[e.jsx(r,{value:"default",label:"Default"}),e.jsx(r,{value:"comfortable",label:"Comfortable"})]})]})},m={render:()=>e.jsxs(l,{label:"Plan",defaultValue:"pro",size:"md",children:[e.jsx(r,{value:"free",label:e.jsxs("div",{children:[e.jsx("p",{className:"font-medium",children:"Free"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Limited features"})]})}),e.jsx(r,{value:"pro",label:e.jsxs("div",{children:[e.jsx("p",{className:"font-medium",children:"Pro"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Best for teams"})]})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledRadio {...args} />,
  args: {
    label: "Density",
    helperText: "Select spacing",
    size: "md",
    required: false
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledRadio {...args} />,
  args: {
    label: "Density",
    error: "Selection is required",
    size: "md"
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledRadio {...args} />,
  args: {
    label: "Density",
    required: true
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledRadio {...args} />,
  args: {
    label: "Density",
    size: "sm"
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledRadio {...args} />,
  args: {
    label: "Density",
    size: "lg"
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 max-w-sm">
      <RadioGroup label="Small" size="sm" defaultValue="default">
        <RadioGroupItem value="default" label="Default" />
        <RadioGroupItem value="comfortable" label="Comfortable" />
      </RadioGroup>

      <RadioGroup label="Medium" size="md" defaultValue="default">
        <RadioGroupItem value="default" label="Default" />
        <RadioGroupItem value="comfortable" label="Comfortable" />
      </RadioGroup>

      <RadioGroup label="Large" size="lg" defaultValue="default">
        <RadioGroupItem value="default" label="Default" />
        <RadioGroupItem value="comfortable" label="Comfortable" />
      </RadioGroup>
    </div>
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup label="Plan" defaultValue="pro" size="md">
      <RadioGroupItem value="free" label={<div>
            <p className="font-medium">Free</p>
            <p className="text-xs text-muted-foreground">
              Limited features
            </p>
          </div>} />

      <RadioGroupItem value="pro" label={<div>
            <p className="font-medium">Pro</p>
            <p className="text-xs text-muted-foreground">
              Best for teams
            </p>
          </div>} />
    </RadioGroup>
}`,...m.parameters?.docs?.source}}};const T=["Playground","WithError","Required","Small","Large","AllSizes","RichLabels"];export{u as AllSizes,i as Large,s as Playground,n as Required,m as RichLabels,d as Small,t as WithError,T as __namedExportsOrder,E as default};
