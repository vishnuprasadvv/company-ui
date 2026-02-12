import{j as e}from"./iframe-CMSACG2S.js";import{B as r}from"./button-BQRDzDuh.js";import{M as p}from"./mail-DNnkWIqh.js";import{L as h}from"./loader-circle-C1RY9FWx.js";import"./preload-helper-PPVm8Dsz.js";import"./button-Do_LDvEC.js";import"./index-C-4GQbpA.js";import"./index-CajpnwsP.js";import"./index-B_jtOnfb.js";import"./utils-CDN07tui.js";import"./createLucideIcon-ChXWE-98.js";const z={title:"components/Button",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","destructive","outline","secondary","ghost","link"],description:"The visual style variant of the button"},size:{control:"select",options:["default","sm","lg","icon"],description:"The size of the button"},asChild:{control:"boolean",description:"Render as child component"}}},a={args:{children:"Button",variant:"default"}},t={args:{children:"Delete",variant:"destructive"}},n={args:{children:"Outline",variant:"outline"}},s={args:{children:"Secondary",variant:"secondary"}},o={args:{children:"Ghost",variant:"ghost"}},i={args:{children:"Link",variant:"link"}},c={render:()=>e.jsxs(r,{children:[e.jsx(p,{className:"mr-2 h-4 w-4"}),"Login with Email"]})},l={render:()=>e.jsxs(r,{disabled:!0,children:[e.jsx(h,{className:"mr-2 h-4 w-4 animate-spin"}),"Please wait"]})},d={render:()=>e.jsx("div",{className:"flex flex-col gap-4",children:e.jsxs("div",{className:"flex gap-4 items-center flex-wrap",children:[e.jsx(r,{variant:"default",children:"Default"}),e.jsx(r,{variant:"destructive",children:"Destructive"}),e.jsx(r,{variant:"outline",children:"Outline"}),e.jsx(r,{variant:"secondary",children:"Secondary"}),e.jsx(r,{variant:"ghost",children:"Ghost"}),e.jsx(r,{variant:"link",children:"Link"})]})})},u={render:()=>e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx(r,{size:"sm",children:"Small"}),e.jsx(r,{size:"default",children:"Default"}),e.jsx(r,{size:"lg",children:"Large"}),e.jsx(r,{size:"icon",children:e.jsx(p,{className:"h-4 w-4"})})]})},m={args:{children:"Disabled Button",disabled:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'default'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Delete',
    variant: 'destructive'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Outline',
    variant: 'outline'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Secondary',
    variant: 'secondary'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Ghost',
    variant: 'ghost'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Link',
    variant: 'link'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Button>
      <Mail className="mr-2 h-4 w-4" />
      Login with Email
    </Button>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Button disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center flex-wrap">
        <Button variant="default">Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
    </div>
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 items-center">
    <Button size="sm">Small</Button>
    <Button size="default">Default</Button>
    <Button size="lg">Large</Button>
    <Button size="icon">
      <Mail className="h-4 w-4" />
    </Button>
  </div>
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Button',
    disabled: true
  }
}`,...m.parameters?.docs?.source}}};const N=["Default","Destructive","Outline","Secondary","Ghost","Link","WithIcon","Loading","AllVariants","AllSizes","Disabled"];export{u as AllSizes,d as AllVariants,a as Default,t as Destructive,m as Disabled,o as Ghost,i as Link,l as Loading,n as Outline,s as Secondary,c as WithIcon,N as __namedExportsOrder,z as default};
