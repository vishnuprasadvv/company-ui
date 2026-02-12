import{j as e}from"./iframe-CMSACG2S.js";import{c as n}from"./utils-CDN07tui.js";import{B as x}from"./button-Do_LDvEC.js";import{I as m}from"./input-Ct0vx6h5.js";import{L as C}from"./label-DPjrZSJK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C-4GQbpA.js";import"./index-CajpnwsP.js";import"./index-B_jtOnfb.js";import"./index-BizsTmrf.js";import"./index-7mSvjIpT.js";import"./index-DJeBnas0.js";function d({className:r,...a}){return e.jsx("div",{"data-slot":"card",className:n("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",r),...a})}function t({className:r,...a}){return e.jsx("div",{"data-slot":"card-header",className:n("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",r),...a})}function s({className:r,...a}){return e.jsx("div",{"data-slot":"card-title",className:n("leading-none font-semibold",r),...a})}function o({className:r,...a}){return e.jsx("div",{"data-slot":"card-description",className:n("text-muted-foreground text-sm",r),...a})}function i({className:r,...a}){return e.jsx("div",{"data-slot":"card-content",className:n("px-6",r),...a})}function h({className:r,...a}){return e.jsx("div",{"data-slot":"card-footer",className:n("flex items-center px-6 [.border-t]:pt-6",r),...a})}d.__docgenInfo={description:"",methods:[],displayName:"Card"};t.__docgenInfo={description:"",methods:[],displayName:"CardHeader"};h.__docgenInfo={description:"",methods:[],displayName:"CardFooter"};s.__docgenInfo={description:"",methods:[],displayName:"CardTitle"};o.__docgenInfo={description:"",methods:[],displayName:"CardDescription"};i.__docgenInfo={description:"",methods:[],displayName:"CardContent"};const I={title:"UI/Card",component:d,parameters:{layout:"centered"},tags:["autodocs"]},c={render:()=>e.jsxs(d,{className:"w-[380px]",children:[e.jsxs(t,{children:[e.jsx(s,{children:"Card Title"}),e.jsx(o,{children:"Card Description"})]}),e.jsx(i,{children:e.jsx("p",{children:"Card Content"})}),e.jsx(h,{children:e.jsx(x,{children:"Action"})})]})},l={render:()=>e.jsxs(d,{className:"w-[380px]",children:[e.jsxs(t,{children:[e.jsx(s,{children:"Create Account"}),e.jsx(o,{children:"Enter your details below to create your account"})]}),e.jsxs(i,{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(C,{htmlFor:"name",children:"Name"}),e.jsx(m,{id:"name",placeholder:"John Doe"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(C,{htmlFor:"email",children:"Email"}),e.jsx(m,{id:"email",type:"email",placeholder:"john@example.com"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(C,{htmlFor:"password",children:"Password"}),e.jsx(m,{id:"password",type:"password"})]})]}),e.jsxs(h,{className:"flex justify-between",children:[e.jsx(x,{variant:"outline",children:"Cancel"}),e.jsx(x,{children:"Create"})]})]})},p={render:()=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs(d,{children:[e.jsxs(t,{children:[e.jsx(s,{children:"Card 1"}),e.jsx(o,{children:"First card description"})]}),e.jsx(i,{children:e.jsx("p",{children:"Content for the first card"})})]}),e.jsxs(d,{children:[e.jsxs(t,{children:[e.jsx(s,{children:"Card 2"}),e.jsx(o,{children:"Second card description"})]}),e.jsx(i,{children:e.jsx("p",{children:"Content for the second card"})})]})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-[380px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-[380px]">
      <CardHeader>
        <CardTitle>Create Account</CardTitle>
        <CardDescription>
          Enter your details below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="John Doe" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="john@example.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Create</Button>
      </CardFooter>
    </Card>
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Card 1</CardTitle>
          <CardDescription>First card description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Content for the first card</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Card 2</CardTitle>
          <CardDescription>Second card description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Content for the second card</p>
        </CardContent>
      </Card>
    </div>
}`,...p.parameters?.docs?.source}}};const T=["Default","WithForm","MultipleCards"];export{c as Default,p as MultipleCards,l as WithForm,T as __namedExportsOrder,I as default};
