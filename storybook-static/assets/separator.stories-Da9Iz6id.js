import{j as e}from"./iframe-CMSACG2S.js";import{S as r}from"./separator-CkP9o2KK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BizsTmrf.js";import"./index-7mSvjIpT.js";import"./index-DJeBnas0.js";import"./index-C-4GQbpA.js";import"./index-CajpnwsP.js";import"./utils-CDN07tui.js";const u={title:"components/Separator",component:r,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{variant:{control:"select",options:["solid","dashed","dotted"],description:"The visual style of the line"},orientation:{control:"radio",options:["horizontal","vertical"],description:"The direction of the separator"}}},s={render:a=>e.jsxs("div",{className:"w-100 p-4 border rounded-lg bg-card",children:[e.jsx("h4",{className:"text-sm font-medium leading-none",children:"Design System"}),e.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:"An open-source UI component library."}),e.jsx(r,{...a,className:"my-4"}),e.jsxs("div",{className:"flex h-5 items-center space-x-4 text-sm",children:[e.jsx("div",{children:"Blog"}),e.jsx(r,{orientation:"vertical"}),e.jsx("div",{children:"Docs"}),e.jsx(r,{orientation:"vertical"}),e.jsx("div",{children:"Source"})]})]}),args:{variant:"solid",orientation:"horizontal"}},t={render:a=>e.jsxs("div",{className:"w-100 space-y-8 p-4",children:[e.jsx(r,{...a,label:"OR"}),e.jsx(r,{...a,label:"CONTINUE WITH GOOGLE",variant:"dashed"}),e.jsx(r,{...a,label:"SECTION END",variant:"dotted"})]}),args:{orientation:"horizontal"}},n={render:a=>e.jsxs("div",{className:"flex h-10 items-center justify-center space-x-6",children:[e.jsx("span",{className:"text-sm",children:"Profile"}),e.jsx(r,{...a}),e.jsx("span",{className:"text-sm",children:"Settings"}),e.jsx(r,{...a}),e.jsx("span",{className:"text-sm",children:"Logout"})]}),args:{orientation:"vertical",variant:"solid"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div className="w-100 p-4 border rounded-lg bg-card">
      <h4 className="text-sm font-medium leading-none">Design System</h4>
      <p className="text-sm text-muted-foreground mt-1">
        An open-source UI component library.
      </p>
      <Separator {...args} className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>,
  args: {
    variant: "solid",
    orientation: "horizontal"
  }
}`,...s.parameters?.docs?.source},description:{story:"The standard horizontal separator used to divide content sections.",...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <div className="w-100 space-y-8 p-4">
       <Separator {...args} label="OR" />
       <Separator {...args} label="CONTINUE WITH GOOGLE" variant="dashed" />
       <Separator {...args} label="SECTION END" variant="dotted" />
    </div>,
  args: {
    orientation: "horizontal"
  }
}`,...t.parameters?.docs?.source},description:{story:"Useful for login forms or dividers that require context.",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex h-10 items-center justify-center space-x-6">
      <span className="text-sm">Profile</span>
      <Separator {...args} />
      <span className="text-sm">Settings</span>
      <Separator {...args} />
      <span className="text-sm">Logout</span>
    </div>,
  args: {
    orientation: "vertical",
    variant: "solid"
  }
}`,...n.parameters?.docs?.source},description:{story:"Vertical orientation used to separate inline elements like breadcrumbs or nav links.",...n.parameters?.docs?.description}}};const h=["Default","WithLabel","Vertical"];export{s as Default,n as Vertical,t as WithLabel,h as __namedExportsOrder,u as default};
