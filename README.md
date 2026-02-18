# @vishnuprasadvv/ui

> Production-ready React design system — built with TypeScript, Tailwind CSS v4, and Radix UI.

[![Version](https://img.shields.io/badge/version-1.0.0-blue)](https://github.com/vishnuprasadvv/company-ui/pkgs/npm/ui)
[![License](https://img.shields.io/badge/license-UNLICENSED-red.svg)](LICENSE)
[![Storybook](https://img.shields.io/badge/storybook-live-ff4785)](https://vishnuprasadvv.github.io/company-ui/)
[![GitHub](https://img.shields.io/badge/github-repo-black)](https://github.com/vishnuprasadvv/company-ui)

---

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Theming](#theming)
- [Components](#components)
- [Authentication](#authentication)
- [TypeScript](#typescript)
- [Development](#development)

---

## Installation

> **This package is hosted on GitHub Packages.** Authentication is required before installing. See [Authentication](#authentication) below first if this is your first time.

```bash
npm install @vishnuprasadvv/ui
```

**Peer dependencies** — install these if not already in your project:

```bash
npm install react react-dom
npm install -D tailwindcss @tailwindcss/vite
```

---

## Quick Start

### Step 1 — Configure Vite

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

### Step 2 — Add Tailwind to CSS

```css
/* src/index.css */
@import "tailwindcss";
```

### Step 3 — Wrap App with ThemeProvider

```tsx
// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@vishnuprasadvv/ui'
import '@vishnuprasadvv/ui/styles'
import './index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
```

### Step 4 — Use Components

```tsx
// src/App.tsx
import { Button, Input } from '@vishnuprasadvv/ui'

function App() {
  return (
    <div className="p-8 space-y-4">
      <Button variant="default">Click me</Button>
      <Input label="Email" placeholder="Enter your email" />
    </div>
  )
}

export default App
```

---

## Theming

The design system uses a fully dynamic theme engine. Colors, typography, and spacing are all controlled through a single `ThemeConfig` object injected at runtime via CSS variables — no build step required.

### Default Theme

```tsx
import { ThemeProvider } from '@vishnuprasadvv/ui'

<ThemeProvider>
  <App />
</ThemeProvider>
```

### Custom Theme

```typescript
// src/theme.config.ts
import { type ThemeConfig } from '@vishnuprasadvv/ui'

export const customTheme: ThemeConfig = {
  mode: 'light',
  colors: {
    primary: '234 58.8% 44.7%',          // HSL format
    primaryForeground: '210 40% 98%',
    background: '0 0% 100%',
    foreground: '222.2 84% 4.9%',
    card: '0 0% 100%',
    cardForeground: '222.2 84% 4.9%',
    popover: '0 0% 100%',
    popoverForeground: '222.2 84% 4.9%',
    secondary: '210 40% 96.1%',
    secondaryForeground: '222.2 47.4% 11.2%',
    muted: '210 40% 96.1%',
    mutedForeground: '215.4 16.3% 46.9%',
    accent: '210 40% 96.1%',
    accentForeground: '222.2 47.4% 11.2%',
    destructive: '0 84.2% 60.2%',
    destructiveForeground: '210 40% 98%',
    success: '142.1 76.2% 36.3%',
    successForeground: '355.7 100% 97.3%',
    warning: '38 92.2% 50%',
    warningForeground: '48 96% 8.9%',
    border: '214.3 31.8% 91.4%',
    input: '214.3 31.8% 91.4%',
    ring: '222.2 84% 4.9%',
  },
  typography: {
    fontFamily: {
      sans: 'Inter, system-ui, sans-serif',
      serif: 'Georgia, serif',
      mono: '"Fira Code", monospace',
    },
    fontSize: {
      xs: '0.75rem', sm: '0.875rem', base: '1rem',
      lg: '1.125rem', xl: '1.25rem', '2xl': '1.5rem',
      '3xl': '1.875rem', '4xl': '2.25rem',
    },
    fontWeight: { normal: 400, medium: 500, semibold: 600, bold: 700 },
    lineHeight: { tight: '1.25', normal: '1.5', relaxed: '1.75' },
  },
  spacing: {
    radius: {
      none: '0', xs: '0.125rem', sm: '0.25rem',
      md: '0.5rem', lg: '0.75rem', xl: '1rem', full: '9999px',
    },
    spacing: {
      xs: '0.5rem', sm: '1rem', md: '1.5rem',
      lg: '2rem', xl: '3rem', '2xl': '4rem',
    },
  },
}
```

```tsx
// src/main.tsx
import { ThemeProvider } from '@vishnuprasadvv/ui'
import { customTheme } from './theme.config'

<ThemeProvider initialTheme={customTheme}>
  <App />
</ThemeProvider>
```

### Dark Mode

```tsx
import { useTheme } from '@vishnuprasadvv/ui'

function ThemeToggle() {
  const { theme, toggleMode } = useTheme()

  return (
    <button onClick={toggleMode}>
      Switch to {theme.mode === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  )
}
```

### API-Driven Theme

Load your theme at runtime from a backend:

```tsx
<ThemeProvider apiUrl="https://api.yourcompany.com/theme">
  <App />
</ThemeProvider>
```

The API should return:

```json
{
  "theme": {
    "mode": "light",
    "colors": { "primary": "234 58.8% 44.7%", "..." : "..." },
    "typography": { "..." : "..." },
    "spacing": { "..." : "..." }
  }
}
```

### Update Theme at Runtime

```tsx
import { useTheme } from '@vishnuprasadvv/ui'

function BrandSwitcher() {
  const { setTheme, theme } = useTheme()

  const switchToBrand = () => {
    setTheme({
      colors: {
        ...theme.colors,
        primary: '0 100% 50%', // Red brand
      },
    })
  }

  return <button onClick={switchToBrand}>Switch Brand</button>
}
```

---

## Components

### Button

```tsx
import { Button } from '@vishnuprasadvv/ui'

<Button variant="default" size="md" disabled={false}>
  Click me
</Button>
```

| Prop | Type | Default | Options |
|------|------|---------|---------|
| `variant` | string | `default` | `default` `secondary` `destructive` `outline` `ghost` |
| `size` | string | `md` | `sm` `md` `lg` |
| `disabled` | boolean | `false` | — |

### Input

```tsx
import { Input } from '@vishnuprasadvv/ui'

<Input
  label="Email"
  type="email"
  placeholder="Enter your email"
  helperText="We will never share your email"
  error="Email is required"
  disabled={false}
/>
```

| Prop | Type | Description |
|------|------|-------------|
| `label` | string | Label displayed above the input |
| `error` | string | Error message (turns border red) |
| `helperText` | string | Subtle help text below the input |

### Table

```tsx
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@vishnuprasadvv/ui'

<Table size="md" striped hoverable>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>john@example.com</TableCell>
      <TableCell>Active</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Full Component List

| Category | Components |
|----------|------------|
| **Form** | Button, Input, Checkbox, Radio, Select, Switch, Textarea, Combobox |
| **Display** | Table, Card, Badge, Avatar, Tooltip |
| **Feedback** | Alert, Toast, Dialog, Progress |
| **Layout** | Tabs, Separator |

[**View all components in Storybook →**](https://vishnuprasadvv.github.io/company-ui/)

---

## Authentication

This package is hosted on **GitHub Packages** (private). You need to authenticate once per machine.

### Step 1 — Create a GitHub Personal Access Token

1. Go to [https://github.com/settings/tokens](https://github.com/settings/tokens)
2. Click **"Generate new token (classic)"**
3. Name it: `npm-packages-read`
4. Select scopes: ✅ `read:packages` ✅ `repo`
5. Click **"Generate token"** and copy it immediately

### Step 2 — Login to the GitHub Package Registry

```bash
npm login --scope=@vishnuprasadvv --registry=https://npm.pkg.github.com

# When prompted:
# Username: your-github-username
# Password: ghp_xxxxxxxxxxxxxxxxxxxx   (paste your token)
# Email:    your-email@company.com
```

### Step 3 — Add `.npmrc` to Your Project

Create a `.npmrc` file in your project root:

```
@vishnuprasadvv:registry=https://npm.pkg.github.com
```

> **Important:** Add `.npmrc` to `.gitignore` if it contains your token. If it only contains the registry line (no token), it is safe to commit.

### Step 4 — Install

```bash
npm install @vishnuprasadvv/ui
```

---

## TypeScript

The package ships with full TypeScript types. If you get a type error on the styles import:

```ts
// Cannot find module '@vishnuprasadvv/ui/styles'
import '@vishnuprasadvv/ui/styles'
```

Create `src/types/modules.d.ts` in your project:

```typescript
declare module '@vishnuprasadvv/ui/styles' {}
```

Then restart your TypeScript server: `Ctrl+Shift+P` → `TypeScript: Restart TS Server`

---

## Development

### Setup

```bash
git clone https://github.com/vishnuprasadvv/company-ui.git
cd company-ui
npm install
```

### Commands

```bash
npm run dev              # Start Vite dev server (port 5173)
npm run storybook        # Start Storybook (port 6006)
npm run build            # Build library for distribution
npm run type-check       # TypeScript check
npm run lint             # ESLint check
npm run lint:fix         # ESLint auto-fix
npm run format           # Prettier format
npm test                 # Run tests
```

### Project Structure

```
company-ui/
├── src/
│   ├── components/ui/           # Shadcn base components
│   ├── design-system/
│   │   ├── components/          # Custom components
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Button.stories.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Input/
│   │   │   ├── Table/
│   │   │   └── index.ts         # Re-exports all components
│   │   └── theme/
│   │       ├── theme.ts         # Default theme values
│   │       ├── ThemeProvider.tsx
│   │       └── index.ts
│   ├── lib/utils.ts             # cn() utility
│   ├── types/theme.ts           # ThemeConfig interface
│   ├── utils/themeUtils.ts      # applyTheme, mergeThemes, etc.
│   └── index.ts                 # Main package entry
├── .storybook/
├── dist/                        # Generated — do not edit
├── vite.config.ts
├── vitest.config.ts
└── package.json
```

---

## Links

- **Storybook:** https://vishnuprasadvv.github.io/company-ui/
- **GitHub:** https://github.com/vishnuprasadvv/company-ui
- **Packages:** https://github.com/vishnuprasadvv/company-ui/pkgs/npm/ui
- **Issues:** https://github.com/vishnuprasadvv/company-ui/issues
- **Changelog:** [CHANGELOG.md](./CHANGELOG.md)
- **Contributing:** [CONTRIBUTING.md](./CONTRIBUTING.md)

---

## License

UNLICENSED — Internal use only.