import{j as e}from"./iframe-CMSACG2S.js";import{B as a}from"./badge-vUo7Tx8o.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B_jtOnfb.js";import"./utils-CDN07tui.js";import"./x-BEAjH1lD.js";import"./createLucideIcon-ChXWE-98.js";const p={title:"components/Badge",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","secondary","outline","destructive","success","warning"]},size:{control:"radio",options:["sm","md","lg"]},shape:{control:"radio",options:["pill","rounded"]}}},r={args:{children:"Badge",variant:"default"}},s={render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(a,{variant:"success",showDot:!0,children:"Active"}),e.jsx(a,{variant:"warning",showDot:!0,children:"Attention"}),e.jsx(a,{variant:"destructive",showDot:!0,children:"Error"})]})},n={render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(a,{variant:"secondary",onRemove:()=>alert("Removed!"),children:"React"}),e.jsx(a,{variant:"secondary",onRemove:()=>alert("Removed!"),children:"Tailwind"})]})},t={render:()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{size:"sm",children:"Small"}),e.jsx(a,{size:"md",children:"Medium"}),e.jsx(a,{size:"lg",children:"Large"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Badge",
    variant: "default"
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <Badge variant="success" showDot>Active</Badge>
      <Badge variant="warning" showDot>Attention</Badge>
      <Badge variant="destructive" showDot>Error</Badge>
    </div>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <Badge variant="secondary" onRemove={() => alert("Removed!")}>
        React
      </Badge>
      <Badge variant="secondary" onRemove={() => alert("Removed!")}>
        Tailwind
      </Badge>
    </div>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
}`,...t.parameters?.docs?.source}}};const v=["Default","SemanticStates","Removable","AllSizes"];export{t as AllSizes,r as Default,n as Removable,s as SemanticStates,v as __namedExportsOrder,p as default};
