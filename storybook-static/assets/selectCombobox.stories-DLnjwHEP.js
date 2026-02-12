import{r as c,j as e}from"./iframe-CMSACG2S.js";import{C as o}from"./selectCombobox-DWT9jJ_6.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CDN07tui.js";import"./button-Do_LDvEC.js";import"./index-C-4GQbpA.js";import"./index-CajpnwsP.js";import"./index-B_jtOnfb.js";import"./input-Ct0vx6h5.js";import"./x-BEAjH1lD.js";import"./createLucideIcon-ChXWE-98.js";import"./check-DhK1oAIF.js";import"./chevron-down-zMy561pL.js";import"./index-7mSvjIpT.js";import"./index-DJeBnas0.js";import"./floating-ui.react-dom-BrNZe24b.js";import"./index-DlyPn96B.js";import"./loader-circle-C1RY9FWx.js";const a=[{label:"Next.js",value:"next"},{label:"React",value:"react"},{label:"Svelte",value:"svelte"},{label:"Vue",value:"vue"},{label:"Remix",value:"remix"},{label:"Astro",value:"astro"}],E={title:"components/Combobox",component:o,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},side:{control:"select",options:["top","bottom","left","right"]}},decorators:[l=>e.jsx("div",{className:"p-12 min-h-100 flex justify-center",children:e.jsx("div",{className:"w-full max-w-sm",children:e.jsx(l,{})})})]},s={render:l=>{const[t,r]=c.useState(null);return e.jsx(o,{...l,multiple:!1,value:t,options:a,onChange:r})},args:{label:"Framework",options:a,placeholder:"Select a framework...",showClear:!0}},n={render:l=>{const[t,r]=c.useState([]),{showClear:u,...d}=l;return e.jsx(o,{...d,multiple:!0,value:t,onChange:r})},args:{label:"Technologies",options:a,placeholder:"Pick multiple..."}},i={render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx(o,{size:"sm",label:"Small (sm)",options:a,placeholder:"Small input..."}),e.jsx(o,{size:"md",label:"Medium (md)",options:a,placeholder:"Medium input..."}),e.jsx(o,{size:"lg",label:"Large (lg)",options:a,placeholder:"Large input..."})]})},m={render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx(o,{label:"Loading State",options:a,loading:!0,helperText:"Fetching data..."}),e.jsx(o,{label:"Disabled State",options:a,disabled:!0,placeholder:"Cannot interact"}),e.jsx(o,{label:"Error State",options:a,error:"Please select a valid technology",required:!0})]})},p={render:l=>{const[t,r]=c.useState(null);return e.jsx(o,{...l,multiple:!1,value:t,onChange:r})},args:{label:"Side: Right / Align: Start",options:a,side:"right",sideOffset:12,align:"start"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [val, setVal] = useState<ComboboxOption | null>(null);
    return <Combobox {...args} multiple={false} value={val} options={options} onChange={setVal} />;
  },
  args: {
    label: 'Framework',
    options,
    placeholder: 'Select a framework...',
    showClear: true
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [val, setVal] = useState<ComboboxOption[]>([]);
    const {
      showClear,
      ...rest
    } = args;
    return <Combobox {...rest} multiple value={val} onChange={setVal} />;
  },
  args: {
    label: 'Technologies',
    options,
    placeholder: 'Pick multiple...'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      <Combobox size="sm" label="Small (sm)" options={options} placeholder="Small input..." />
      <Combobox size="md" label="Medium (md)" options={options} placeholder="Medium input..." />
      <Combobox size="lg" label="Large (lg)" options={options} placeholder="Large input..." />
    </div>
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      <Combobox label="Loading State" options={options} loading helperText="Fetching data..." />
      <Combobox label="Disabled State" options={options} disabled placeholder="Cannot interact" />
      <Combobox label="Error State" options={options} error="Please select a valid technology" required />
    </div>
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [val, setVal] = useState<ComboboxOption | null>(null);
    return <Combobox {...args} multiple={false} value={val} onChange={setVal} />;
  },
  args: {
    label: 'Side: Right / Align: Start',
    options,
    side: 'right',
    sideOffset: 12,
    align: 'start'
  }
}`,...p.parameters?.docs?.source}}};const R=["Single","MultiSelect","Sizes","States","CustomPositioning"];export{p as CustomPositioning,n as MultiSelect,s as Single,i as Sizes,m as States,R as __namedExportsOrder,E as default};
