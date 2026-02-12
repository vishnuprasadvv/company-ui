import{j as o,r as s}from"./iframe-CMSACG2S.js";import{D as r}from"./DatePicker-DDMnFxXD.js";import"./preload-helper-PPVm8Dsz.js";import"./button-Do_LDvEC.js";import"./index-C-4GQbpA.js";import"./index-CajpnwsP.js";import"./index-B_jtOnfb.js";import"./utils-CDN07tui.js";import"./createLucideIcon-ChXWE-98.js";import"./chevron-down-zMy561pL.js";import"./index-kG51XRa0.js";import"./index-B14L8SAH.js";import"./index-CFilcclQ.js";import"./Combination-Cyxc5QGd.js";import"./index-7mSvjIpT.js";import"./index-DJeBnas0.js";import"./index-OKNhNED5.js";import"./floating-ui.react-dom-BrNZe24b.js";import"./index-Da12YEfY.js";import"./index-DWOTaDXB.js";import"./index-B7BYWDGg.js";import"./select-NcKrT762.js";import"./index-DHJUFWc_.js";import"./index-DzzXbvBo.js";import"./check-DhK1oAIF.js";const O={title:"Design System/DatePicker",component:r,tags:["autodocs"]},n={render:()=>{const[e,a]=s.useState();return o.jsx(r,{mode:"single",placeholder:"Pick a date",value:e,onChange:t=>a(t)})}},l={render:()=>{const[e,a]=s.useState();return o.jsx(r,{mode:"range",placeholder:"Pick date range",value:e,onChange:t=>a(t)})}},i={render:()=>{const[e,a]=s.useState([]);return o.jsx(r,{mode:"multiple",placeholder:"Pick multiple dates",value:e,onChange:t=>a(t)})}},d={render:()=>{const[e,a]=s.useState();return o.jsx(r,{mode:"single",placeholder:"Limited dates",minDate:new Date(2024,0,1),maxDate:new Date(2024,11,31),value:e,onChange:t=>a(t)})}},u={render:()=>o.jsx(r,{mode:"single",placeholder:"Disabled picker",disabled:!0})},c={render:()=>{const[e,a]=s.useState();return o.jsx(r,{mode:"single",placeholder:"No tooltip",showTooltip:!1,value:e,onChange:t=>a(t)})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState<Date | undefined>();
    return <DatePicker mode="single" placeholder="Pick a date" value={value} onChange={v => setValue(v as Date | undefined)} />;
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState<DateRange | undefined>();
    return <DatePicker mode="range" placeholder="Pick date range" value={value} onChange={v => setValue(v as DateRange | undefined)} />;
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState<Date[]>([]);
    return <DatePicker mode="multiple" placeholder="Pick multiple dates" value={value} onChange={v => setValue(v as Date[])} />;
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState<Date | undefined>();
    return <DatePicker mode="single" placeholder="Limited dates" minDate={new Date(2024, 0, 1)} maxDate={new Date(2024, 11, 31)} value={value} onChange={v => setValue(v as Date | undefined)} />;
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <DatePicker mode="single" placeholder="Disabled picker" disabled />
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState<Date | undefined>();
    return <DatePicker mode="single" placeholder="No tooltip" showTooltip={false} value={value} onChange={v => setValue(v as Date | undefined)} />;
  }
}`,...c.parameters?.docs?.source}}};const q=["Single","Range","Multiple","WithMinMax","Disabled","NoTooltip"];export{u as Disabled,i as Multiple,c as NoTooltip,l as Range,n as Single,d as WithMinMax,q as __namedExportsOrder,O as default};
