import{r as p,j as e}from"./iframe-CMSACG2S.js";import{T as a}from"./textarea-CEWHKeRS.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CDN07tui.js";const x={title:"components/Textarea",component:a,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"},required:{control:"boolean"}},decorators:[i=>e.jsx("div",{className:"p-8 max-w-xl mx-auto",children:e.jsx(i,{})})]},r={args:{label:"Bio",placeholder:"Tell us a little bit about yourself...",helperText:"Your bio will be displayed on your public profile."}},t={render:i=>{const[n,c]=p.useState("");return e.jsx(a,{...i,value:n,onChange:d=>c(d.target.value),helperText:`Character count: ${n.length}`})},args:{label:"Live Commentary",placeholder:"Type something to see the helper text update..."}},l={render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx(a,{size:"sm",label:"Small (sm)",placeholder:"Compact for short notes..."}),e.jsx(a,{size:"md",label:"Medium (md)",placeholder:"Standard feedback size..."}),e.jsx(a,{size:"lg",label:"Large (lg)",placeholder:"Detailed project description..."})]})},o={render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx(a,{label:"Required Field",required:!0,placeholder:"Cannot leave this empty"}),e.jsx(a,{label:"Error State",error:"This message is too long (limit: 500 characters)",defaultValue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."})]})},s={args:{label:"Dynamic Height",placeholder:"Paste a long paragraph here or press Enter many times...",className:"field-sizing-content",helperText:"Using the modern CSS field-sizing-content property."}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Bio',
    placeholder: 'Tell us a little bit about yourself...',
    helperText: 'Your bio will be displayed on your public profile.'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <Textarea {...args} value={value} onChange={e => setValue(e.target.value)} helperText={\`Character count: \${value.length}\`} />;
  },
  args: {
    label: 'Live Commentary',
    placeholder: 'Type something to see the helper text update...'
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      <Textarea size="sm" label="Small (sm)" placeholder="Compact for short notes..." />
      <Textarea size="md" label="Medium (md)" placeholder="Standard feedback size..." />
      <Textarea size="lg" label="Large (lg)" placeholder="Detailed project description..." />
    </div>
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      <Textarea label="Required Field" required placeholder="Cannot leave this empty" />
      <Textarea label="Error State" error="This message is too long (limit: 500 characters)" defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..." />
    </div>
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dynamic Height',
    placeholder: 'Paste a long paragraph here or press Enter many times...',
    className: 'field-sizing-content',
    helperText: 'Using the modern CSS field-sizing-content property.'
  }
}`,...s.parameters?.docs?.source}}};const b=["Default","Interactive","Sizes","ValidationStates","AutoSizing"];export{s as AutoSizing,r as Default,t as Interactive,l as Sizes,o as ValidationStates,b as __namedExportsOrder,x as default};
