import{r as s,j as p}from"./iframe-CMSACG2S.js";import{D as a}from"./DropdownSelector-1DwIpoTN.js";import"./preload-helper-PPVm8Dsz.js";import"./dropdown-menu-Bu_FDD6Q.js";import"./index-B14L8SAH.js";import"./index-CFilcclQ.js";import"./index-CajpnwsP.js";import"./index-7mSvjIpT.js";import"./index-DJeBnas0.js";import"./index-DHJUFWc_.js";import"./Combination-Cyxc5QGd.js";import"./index-OKNhNED5.js";import"./floating-ui.react-dom-BrNZe24b.js";import"./index-DWOTaDXB.js";import"./index-DLMCcQ-z.js";import"./index-Da12YEfY.js";import"./utils-CDN07tui.js";import"./button-Do_LDvEC.js";import"./index-C-4GQbpA.js";import"./index-B_jtOnfb.js";import"./chevron-down-zMy561pL.js";import"./createLucideIcon-ChXWE-98.js";import"./check-DhK1oAIF.js";const A={title:"Components/DropdownSelector",component:a,parameters:{layout:"centered"}},u=[{label:"Option One",value:"one"},{label:"Option Two",value:"two"},{label:"Option Three",value:"three"}],o={render:()=>{const[e,t]=s.useState("");return p.jsx(a,{value:e,onChange:t,options:u,placeholder:"Select option"})}},r={render:()=>{const[e,t]=s.useState("two");return p.jsx(a,{value:e,onChange:t,options:u})}},n={render:()=>{const[e,t]=s.useState(""),i=Array.from({length:15}).map((m,l)=>({label:`Item ${l+1}`,value:`item-${l+1}`}));return p.jsx(a,{value:e,onChange:t,options:i})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    return <DropdownSelector value={value} onChange={setValue} options={OPTIONS} placeholder="Select option" />;
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("two");
    return <DropdownSelector value={value} onChange={setValue} options={OPTIONS} />;
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    const manyOptions: Option[] = Array.from({
      length: 15
    }).map((_, i) => ({
      label: \`Item \${i + 1}\`,
      value: \`item-\${i + 1}\`
    }));
    return <DropdownSelector value={value} onChange={setValue} options={manyOptions} />;
  }
}`,...n.parameters?.docs?.source}}};const M=["Default","WithDefaultValue","ManyOptions"];export{o as Default,n as ManyOptions,r as WithDefaultValue,M as __namedExportsOrder,A as default};
