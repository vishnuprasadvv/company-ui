import{j as e,r as V}from"./iframe-CMSACG2S.js";import{T as t,a as i,b as r,c as n,d as o,e as a,f as F,g as I}from"./table-COJpkcPk.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CDN07tui.js";import"./loader-circle-C1RY9FWx.js";import"./createLucideIcon-ChXWE-98.js";const $={title:"components/Table",component:t,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A flexible and feature-rich table component with support for sorting, sticky headers, different sizes, and more."}}},argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Size variant of the table",table:{defaultValue:{summary:"md"}}},variant:{control:"select",options:["default","bordered","minimal"],description:"Visual variant of the table",table:{defaultValue:{summary:"default"}}},stickyHeader:{control:"boolean",description:"Makes the header sticky on scroll"},striped:{control:"boolean",description:"Adds zebra striping to rows"},hoverable:{control:"boolean",description:"Adds hover effect to rows",table:{defaultValue:{summary:"true"}}},bordered:{control:"boolean",description:"Adds borders to all cells"},loading:{control:"boolean",description:"Shows loading overlay"},caption:{control:"text",description:"Table caption text"},emptyMessage:{control:"text",description:"Message shown when table is empty"}}},d=[{id:1,name:"John Doe",email:"john@example.com",role:"Admin",status:"Active"},{id:2,name:"Jane Smith",email:"jane@example.com",role:"User",status:"Active"},{id:3,name:"Bob Johnson",email:"bob@example.com",role:"User",status:"Inactive"},{id:4,name:"Alice Williams",email:"alice@example.com",role:"Editor",status:"Active"},{id:5,name:"Charlie Brown",email:"charlie@example.com",role:"User",status:"Active"}],h={render:s=>e.jsxs(t,{...s,children:[e.jsx(i,{children:e.jsxs(r,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Role"}),e.jsx(n,{children:"Status"})]})}),e.jsx(o,{children:d.map(l=>e.jsxs(r,{children:[e.jsx(a,{children:l.name}),e.jsx(a,{children:l.email}),e.jsx(a,{children:l.role}),e.jsx(a,{children:l.status})]},l.id))})]})},u={render:s=>e.jsxs(t,{...s,size:"sm",children:[e.jsx(i,{children:e.jsxs(r,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Role"}),e.jsx(n,{children:"Status"})]})}),e.jsx(o,{children:d.map(l=>e.jsxs(r,{children:[e.jsx(a,{children:l.name}),e.jsx(a,{children:l.email}),e.jsx(a,{children:l.role}),e.jsx(a,{children:l.status})]},l.id))})]})},x={render:s=>e.jsxs(t,{...s,size:"md",children:[e.jsx(i,{children:e.jsxs(r,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Role"}),e.jsx(n,{children:"Status"})]})}),e.jsx(o,{children:d.map(l=>e.jsxs(r,{children:[e.jsx(a,{children:l.name}),e.jsx(a,{children:l.email}),e.jsx(a,{children:l.role}),e.jsx(a,{children:l.status})]},l.id))})]})},j={render:s=>e.jsxs(t,{...s,size:"lg",children:[e.jsx(i,{children:e.jsxs(r,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Role"}),e.jsx(n,{children:"Status"})]})}),e.jsx(o,{children:d.map(l=>e.jsxs(r,{children:[e.jsx(a,{children:l.name}),e.jsx(a,{children:l.email}),e.jsx(a,{children:l.role}),e.jsx(a,{children:l.status})]},l.id))})]})},p={render:s=>e.jsxs(t,{...s,striped:!0,children:[e.jsx(i,{children:e.jsxs(r,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Role"}),e.jsx(n,{children:"Status"})]})}),e.jsx(o,{children:d.map(l=>e.jsxs(r,{children:[e.jsx(a,{children:l.name}),e.jsx(a,{children:l.email}),e.jsx(a,{children:l.role}),e.jsx(a,{children:l.status})]},l.id))})]})},g={render:s=>e.jsxs(t,{...s,hoverable:!0,children:[e.jsx(i,{children:e.jsxs(r,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Role"}),e.jsx(n,{children:"Status"})]})}),e.jsx(o,{children:d.map(l=>e.jsxs(r,{children:[e.jsx(a,{children:l.name}),e.jsx(a,{children:l.email}),e.jsx(a,{children:l.role}),e.jsx(a,{children:l.status})]},l.id))})]})},H={render:s=>e.jsxs(t,{...s,bordered:!0,variant:"bordered",children:[e.jsx(i,{children:e.jsxs(r,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Role"}),e.jsx(n,{align:"center",children:"Status"})]})}),e.jsx(o,{children:d.map(l=>e.jsxs(r,{children:[e.jsx(a,{children:l.name}),e.jsx(a,{children:l.email}),e.jsx(a,{children:l.role}),e.jsx(a,{align:"center",children:l.status})]},l.id))})]})},C={render:s=>e.jsxs(t,{...s,stickyHeader:!0,striped:!0,children:[e.jsx(i,{children:e.jsxs(r,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Role"}),e.jsx(n,{children:"Status"})]})}),e.jsx(o,{children:[...d,...d,...d,...d].map((l,b)=>e.jsxs(r,{children:[e.jsx(a,{children:l.name}),e.jsx(a,{children:l.email}),e.jsx(a,{children:l.role}),e.jsx(a,{children:l.status})]},b))})]}),parameters:{docs:{description:{story:"Scroll down to see the sticky header in action. The header stays visible while scrolling through the table content."}}}},y={render:s=>{const l=d.length,b=d.filter(c=>c.status==="Active").length;return e.jsxs(t,{...s,children:[e.jsx(i,{children:e.jsxs(r,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Role"}),e.jsx(n,{children:"Status"})]})}),e.jsx(o,{children:d.map(c=>e.jsxs(r,{children:[e.jsx(a,{children:c.name}),e.jsx(a,{children:c.email}),e.jsx(a,{children:c.role}),e.jsx(a,{children:c.status})]},c.id))}),e.jsx(I,{children:e.jsxs(r,{children:[e.jsx(a,{colSpan:3,children:"Total Users"}),e.jsxs(a,{align:"right",children:[l," (",b," active)"]})]})})]})}},R={render:s=>e.jsxs(t,{...s,caption:"User management table showing all registered users",children:[e.jsx(i,{children:e.jsxs(r,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Role"}),e.jsx(n,{children:"Status"})]})}),e.jsx(o,{children:d.map(l=>e.jsxs(r,{children:[e.jsx(a,{children:l.name}),e.jsx(a,{children:l.email}),e.jsx(a,{children:l.role}),e.jsx(a,{children:l.status})]},l.id))})]})},w={render:s=>e.jsxs(t,{...s,loading:!0,children:[e.jsx(i,{children:e.jsxs(r,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Role"}),e.jsx(n,{children:"Status"})]})}),e.jsx(o,{children:d.map(l=>e.jsxs(r,{children:[e.jsx(a,{children:l.name}),e.jsx(a,{children:l.email}),e.jsx(a,{children:l.role}),e.jsx(a,{children:l.status})]},l.id))})]})},S={render:s=>e.jsxs(t,{...s,isEmpty:!0,emptyMessage:"No users found. Add your first user to get started.",children:[e.jsx(i,{children:e.jsxs(r,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Role"}),e.jsx(n,{children:"Status"})]})}),e.jsx(o,{})]})},f={render:s=>{const[l,b]=V.useState(null),c=[...d].sort((T,m)=>{if(!l)return 0;const A=T[l.key],z=m[l.key];return A<z?l.direction==="asc"?-1:1:A>z?l.direction==="asc"?1:-1:0}),B=T=>{b(m=>!m||m.key!==T?{key:T,direction:"asc"}:m.direction==="asc"?{key:T,direction:"desc"}:null)};return e.jsxs(t,{...s,children:[e.jsx(i,{children:e.jsxs(r,{children:[e.jsx(n,{sortable:!0,sorted:l?.key==="name"?l.direction:!1,onSort:()=>B("name"),children:"Name"}),e.jsx(n,{sortable:!0,sorted:l?.key==="email"?l.direction:!1,onSort:()=>B("email"),children:"Email"}),e.jsx(n,{sortable:!0,sorted:l?.key==="role"?l.direction:!1,onSort:()=>B("role"),children:"Role"}),e.jsx(n,{children:"Status"})]})}),e.jsx(o,{children:c.map(T=>e.jsxs(r,{children:[e.jsx(a,{children:T.name}),e.jsx(a,{children:T.email}),e.jsx(a,{children:T.role}),e.jsx(a,{children:T.status})]},T.id))})]})},parameters:{docs:{description:{story:"Click on column headers to sort. Click again to reverse sort order, and once more to clear sorting."}}}},k={render:s=>{const[l,b]=V.useState(null);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs(t,{...s,children:[e.jsx(i,{children:e.jsxs(r,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Role"}),e.jsx(n,{children:"Status"})]})}),e.jsx(o,{children:d.map(c=>e.jsxs(r,{clickable:!0,"data-state":l===c.id?"selected":void 0,onClick:()=>b(c.id),children:[e.jsx(a,{children:c.name}),e.jsx(a,{children:c.email}),e.jsx(a,{children:c.role}),e.jsx(a,{children:c.status})]},c.id))})]}),l&&e.jsx("div",{className:"p-4 bg-blue-50 rounded-md border border-blue-200",children:e.jsxs("p",{className:"text-sm text-blue-900",children:["Selected user ID: ",e.jsx("strong",{children:l})]})})]})},parameters:{docs:{description:{story:"Click on any row to select it. The selected row is highlighted."}}}},v={render:s=>e.jsxs(t,{...s,children:[e.jsx(i,{children:e.jsxs(r,{children:[e.jsx(n,{align:"left",children:"Left Aligned"}),e.jsx(n,{align:"center",children:"Center Aligned"}),e.jsx(n,{align:"right",children:"Right Aligned"})]})}),e.jsx(o,{children:d.slice(0,3).map(l=>e.jsxs(r,{children:[e.jsx(a,{align:"left",children:l.name}),e.jsx(a,{align:"center",children:l.role}),e.jsx(a,{align:"right",children:l.status})]},l.id))})]})},U={render:s=>{const l=d.map(b=>({...b,email:b.email+".verylongdomainname.example.com"}));return e.jsxs(t,{...s,children:[e.jsx(i,{children:e.jsxs(r,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email (Truncated)"}),e.jsx(n,{children:"Role"})]})}),e.jsx(o,{children:l.map(b=>e.jsxs(r,{children:[e.jsx(a,{children:b.name}),e.jsx(a,{truncate:!0,title:b.email,children:b.email}),e.jsx(a,{children:b.role})]},b.id))})]})}},N={render:s=>e.jsxs(t,{...s,striped:!0,hoverable:!0,size:"md",variant:"default",children:[e.jsx(F,{children:"User management dashboard - showing all active users"}),e.jsx(i,{children:e.jsxs(r,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Role"}),e.jsx(n,{align:"center",children:"Status"})]})}),e.jsx(o,{children:d.map(l=>e.jsxs(r,{children:[e.jsx(a,{children:l.name}),e.jsx(a,{children:l.email}),e.jsx(a,{children:l.role}),e.jsx(a,{align:"center",children:e.jsx("span",{className:`inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium ${l.status==="Active"?"bg-green-100 text-green-800":"bg-gray-100 text-gray-800"}`,children:l.status})})]},l.id))}),e.jsx(I,{children:e.jsxs(r,{children:[e.jsx(a,{colSpan:3,children:"Total Users"}),e.jsx(a,{align:"right",children:d.length})]})})]}),parameters:{docs:{description:{story:"A table combining multiple features: striped rows, hover effects, caption, footer, and custom cell styling."}}}},E={render:s=>e.jsxs(t,{...s,variant:"minimal",children:[e.jsx(i,{children:e.jsxs(r,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Role"}),e.jsx(n,{children:"Status"})]})}),e.jsx(o,{children:d.map(l=>e.jsxs(r,{children:[e.jsx(a,{children:l.name}),e.jsx(a,{children:l.email}),e.jsx(a,{children:l.role}),e.jsx(a,{children:l.status})]},l.id))})]})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleUsers.map(user => <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.status}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <Table {...args} size="sm">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleUsers.map(user => <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.status}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <Table {...args} size="md">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleUsers.map(user => <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.status}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...x.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => <Table {...args} size="lg">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleUsers.map(user => <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.status}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...j.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Table {...args} striped>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleUsers.map(user => <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.status}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <Table {...args} hoverable>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleUsers.map(user => <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.status}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...g.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: args => <Table {...args} bordered variant="bordered">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead align="center">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleUsers.map(user => <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell align="center">{user.status}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...H.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <Table {...args} stickyHeader striped>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[...sampleUsers, ...sampleUsers, ...sampleUsers, ...sampleUsers].map((user, idx) => <TableRow key={idx}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.status}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>,
  parameters: {
    docs: {
      description: {
        story: "Scroll down to see the sticky header in action. The header stays visible while scrolling through the table content."
      }
    }
  }
}`,...C.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const totalUsers = sampleUsers.length;
    const activeUsers = sampleUsers.filter(u => u.status === "Active").length;
    return <Table {...args}>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleUsers.map(user => <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.status}</TableCell>
            </TableRow>)}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total Users</TableCell>
            <TableCell align="right">
              {totalUsers} ({activeUsers} active)
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>;
  }
}`,...y.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: args => <Table {...args} caption="User management table showing all registered users">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleUsers.map(user => <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.status}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...R.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <Table {...args} loading>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleUsers.map(user => <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.status}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <Table {...args} isEmpty emptyMessage="No users found. Add your first user to get started.">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* Empty */}
      </TableBody>
    </Table>
}`,...S.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [sortConfig, setSortConfig] = useState<{
      key: string;
      direction: "asc" | "desc";
    } | null>(null);
    const sortedUsers = [...sampleUsers].sort((a, b) => {
      if (!sortConfig) return 0;
      const aValue = a[sortConfig.key as keyof typeof a];
      const bValue = b[sortConfig.key as keyof typeof b];
      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
    const handleSort = (key: string) => {
      setSortConfig(current => {
        if (!current || current.key !== key) {
          return {
            key,
            direction: "asc"
          };
        }
        if (current.direction === "asc") {
          return {
            key,
            direction: "desc"
          };
        }
        return null;
      });
    };
    return <Table {...args}>
        <TableHeader>
          <TableRow>
            <TableHead sortable sorted={sortConfig?.key === "name" ? sortConfig.direction : false} onSort={() => handleSort("name")}>
              Name
            </TableHead>
            <TableHead sortable sorted={sortConfig?.key === "email" ? sortConfig.direction : false} onSort={() => handleSort("email")}>
              Email
            </TableHead>
            <TableHead sortable sorted={sortConfig?.key === "role" ? sortConfig.direction : false} onSort={() => handleSort("role")}>
              Role
            </TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedUsers.map(user => <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.status}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>;
  },
  parameters: {
    docs: {
      description: {
        story: "Click on column headers to sort. Click again to reverse sort order, and once more to clear sorting."
      }
    }
  }
}`,...f.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    return <div className="space-y-4">
        <Table {...args}>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sampleUsers.map(user => <TableRow key={user.id} clickable data-state={selectedId === user.id ? "selected" : undefined} onClick={() => setSelectedId(user.id)}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.status}</TableCell>
              </TableRow>)}
          </TableBody>
        </Table>

        {selectedId && <div className="p-4 bg-blue-50 rounded-md border border-blue-200">
            <p className="text-sm text-blue-900">
              Selected user ID: <strong>{selectedId}</strong>
            </p>
          </div>}
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Click on any row to select it. The selected row is highlighted."
      }
    }
  }
}`,...k.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableHead align="left">Left Aligned</TableHead>
          <TableHead align="center">Center Aligned</TableHead>
          <TableHead align="right">Right Aligned</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleUsers.slice(0, 3).map(user => <TableRow key={user.id}>
            <TableCell align="left">{user.name}</TableCell>
            <TableCell align="center">{user.role}</TableCell>
            <TableCell align="right">{user.status}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...v.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: args => {
    const longTextUsers = sampleUsers.map(user => ({
      ...user,
      email: user.email + ".verylongdomainname.example.com"
    }));
    return <Table {...args}>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email (Truncated)</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {longTextUsers.map(user => <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell truncate title={user.email}>
                {user.email}
              </TableCell>
              <TableCell>{user.role}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>;
  }
}`,...U.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => <Table {...args} striped hoverable size="md" variant="default">
      <TableCaption>User management dashboard - showing all active users</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead align="center">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleUsers.map(user => <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell align="center">
              <span className={\`inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium \${user.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}\`}>
                {user.status}
              </span>
            </TableCell>
          </TableRow>)}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total Users</TableCell>
          <TableCell align="right">{sampleUsers.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>,
  parameters: {
    docs: {
      description: {
        story: "A table combining multiple features: striped rows, hover effects, caption, footer, and custom cell styling."
      }
    }
  }
}`,...N.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <Table {...args} variant="minimal">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleUsers.map(user => <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.status}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...E.parameters?.docs?.source}}};const O=["Default","SmallSize","MediumSize","LargeSize","Striped","Hoverable","Bordered","StickyHeader","WithFooter","WithCaption","Loading","Empty","Sortable","ClickableRows","CellAlignment","TextTruncation","CombinedFeatures","MinimalVariant"];export{H as Bordered,v as CellAlignment,k as ClickableRows,N as CombinedFeatures,h as Default,S as Empty,g as Hoverable,j as LargeSize,w as Loading,x as MediumSize,E as MinimalVariant,u as SmallSize,f as Sortable,C as StickyHeader,p as Striped,U as TextTruncation,R as WithCaption,y as WithFooter,O as __namedExportsOrder,$ as default};
