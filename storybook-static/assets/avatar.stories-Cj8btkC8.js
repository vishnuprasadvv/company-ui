import{j as a}from"./iframe-CMSACG2S.js";import{A as s,a as o,b as e}from"./avatar-CqasNaEx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C1tS_mMd.js";import"./index-OKNhNED5.js";import"./index-CFilcclQ.js";import"./index-BizsTmrf.js";import"./index-7mSvjIpT.js";import"./index-DJeBnas0.js";import"./index-C-4GQbpA.js";import"./index-CajpnwsP.js";import"./index-DlyPn96B.js";import"./index-B_jtOnfb.js";import"./utils-CDN07tui.js";const F={title:"components/Avatar",component:s,tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Changes the dimensions and font size"},shape:{control:"radio",options:["circle","square"],description:"The border-radius of the avatar"},status:{control:"select",options:["online","offline","away","busy",void 0],description:"Shows a status indicator dot"}}},t={render:r=>a.jsxs(s,{...r,children:[a.jsx(o,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),a.jsx(e,{children:"CN"})]}),args:{size:"md",shape:"circle"}},n={render:r=>a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsxs(s,{...r,children:[a.jsx(o,{src:"https://broken-link.com/img.jpg"}),a.jsx(e,{children:"JD"})]}),a.jsx(s,{...r,className:"bg-primary text-primary-foreground",children:a.jsx(e,{children:"JD"})})]}),args:{size:"md"}},c={render:()=>a.jsx("div",{className:"flex items-end gap-4",children:["xs","sm","md","lg","xl"].map(r=>a.jsxs("div",{className:"flex flex-col items-center gap-2",children:[a.jsxs(s,{size:r,status:"online",children:[a.jsx(o,{src:"https://github.com/shadcn.png"}),a.jsx(e,{children:"CN"})]}),a.jsx("span",{className:"text-[10px] font-mono text-muted-foreground uppercase",children:r})]},r))})},i={render:()=>a.jsxs("div",{className:"flex gap-6",children:[a.jsx(s,{status:"online",children:a.jsx(e,{children:"ON"})}),a.jsx(s,{status:"away",children:a.jsx(e,{children:"AW"})}),a.jsx(s,{status:"busy",children:a.jsx(e,{children:"BS"})}),a.jsx(s,{status:"offline",children:a.jsx(e,{children:"OF"})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <Avatar {...args}>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>,
  args: {
    size: "md",
    shape: "circle"
  }
}`,...t.parameters?.docs?.source},description:{story:"Standard usage with an image.",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex items-center gap-4">
      <Avatar {...args}>
        <AvatarImage src="https://broken-link.com/img.jpg" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar {...args} className="bg-primary text-primary-foreground">
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    </div>,
  args: {
    size: "md"
  }
}`,...n.parameters?.docs?.source},description:{story:"Demonstrates the fallback logic when the image is broken or missing.",...n.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-end gap-4">
      {["xs", "sm", "md", "lg", "xl"].map(size => <div key={size} className="flex flex-col items-center gap-2">
          <Avatar size={size as any} status="online">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="text-[10px] font-mono text-muted-foreground uppercase">{size}</span>
        </div>)}
    </div>
}`,...c.parameters?.docs?.source},description:{story:"Showcasing all available sizes.",...c.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-6">
      <Avatar status="online"><AvatarFallback>ON</AvatarFallback></Avatar>
      <Avatar status="away"><AvatarFallback>AW</AvatarFallback></Avatar>
      <Avatar status="busy"><AvatarFallback>BS</AvatarFallback></Avatar>
      <Avatar status="offline"><AvatarFallback>OF</AvatarFallback></Avatar>
    </div>
}`,...i.parameters?.docs?.source},description:{story:"Avatars with status indicators.",...i.parameters?.docs?.description}}};const N=["Default","Fallback","AllSizes","StatusIndicators"];export{c as AllSizes,t as Default,n as Fallback,i as StatusIndicators,N as __namedExportsOrder,F as default};
