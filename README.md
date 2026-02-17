# @test-company/ui

> Production-ready design system for Test Company - Built with React, TypeScript, Tailwind CSS v4, and Radix UI.

[![npm version](https://img.shields.io/npm/v/@test-company/ui.svg)](https://github.com/vishnuprasadvv/company-ui/pkgs/npm/ui)
[![License](https://img.shields.io/badge/license-UNLICENSED-blue.svg)](LICENSE)
[![Storybook](https://img.shields.io/badge/storybook-view-ff4785)](https://vishnuprasadvv.github.io/company-ui/)
[![GitHub](https://img.shields.io/badge/github-repo-black)](https://github.com/vishnuprasadvv/company-ui)

---

## 📦 Installation
```bash
npm install @test-company/ui
# or
yarn add @test-company/ui
# or
pnpm add @test-company/ui
```

**Note:** This package requires authentication to GitHub Packages. See [Authentication](#authentication) below.

---

## 🚀 Quick Start

### 1. Install the Package
```bash
npm install @test-company/ui react react-dom
npm install -D tailwindcss @tailwindcss/vite
```

### 2. Configure Tailwind CSS

Edit `vite.config.ts`:
```typescript
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

Create or update `tailwind.config.ts`:
```typescript
import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    // 👇 Important: Scan the design system package
    './node_modules/@test-company/ui/dist/**/*.{js,mjs}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config
```

### 3. Set Up Your App
```tsx
// main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@test-company/ui'
import '@test-company/ui/styles'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
```

### 4. Use Components
```tsx
// App.tsx
import { Button, Input } from '@test-company/ui'

function App() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Hello Test Company UI</h1>
      
      <div className="space-y-4">
        <Button variant="default">Click me</Button>
        <Input label="Email" placeholder="Enter your email" />
      </div>
    </div>
  )
}

export default App
```

---

## 🎨 Theming

### Using Default Theme

The design system comes with a default light/dark theme:
```tsx
import { ThemeProvider } from '@test-company/ui'

function App() {
  return (
    <ThemeProvider>
      {/* Your app */}
    </ThemeProvider>
  )
}
```

### Custom Theme

Create a custom theme configuration:
```typescript
// theme.config.ts
import { type ThemeConfig } from '@test-company/ui'

export const customTheme: ThemeConfig = {
  mode: 'light',
  colors: {
    primary: '0 100% 50%', // Custom red
    primaryForeground: '0 0% 100%',
    background: '0 0% 100%',
    foreground: '222.2 84% 4.9%',
    // ... other colors
  },
  typography: {
    fontFamily: {
      sans: 'Your Custom Font, system-ui, sans-serif',
      serif: 'Georgia, serif',
      mono: 'Monaco, monospace',
    },
    // ... other typography
  },
  spacing: {
    radius: {
      none: '0',
      sm: '0.25rem',
      md: '0.5rem',
      lg: '1rem',
      full: '9999px',
    },
    // ... other spacing
  },
}
```

Use it in your app:
```tsx
import { ThemeProvider } from '@test-company/ui'
import { customTheme } from './theme.config'

function App() {
  return (
    <ThemeProvider initialTheme={customTheme}>
      {/* Your app */}
    </ThemeProvider>
  )
}
```

### Dark Mode

Toggle between light and dark mode:
```tsx
import { useTheme } from '@test-company/ui'

function ThemeToggle() {
  const { theme, toggleMode } = useTheme()
  
  return (
    <button onClick={toggleMode}>
      Switch to {theme.mode === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  )
}
```

### API-Driven Themes

Load theme from your backend:
```tsx
<ThemeProvider apiUrl="https://api.example.com/theme">
  <App />
</ThemeProvider>
```

---

## 📚 Components

### Form Controls
- **Button** - Versatile button with multiple variants
- **Input** - Text input with label, error, and helper text
- **Checkbox** - Accessible checkbox component
- **Radio** - Radio button groups
- **Select** - Dropdown select component
- **Switch** - Toggle switch
- **Textarea** - Multi-line text input

### Data Display
- **Table** - Feature-rich data table
- **Card** - Container component
- **Badge** - Status badges
- **Avatar** - User avatars
- **Tooltip** - Contextual tooltips

### Feedback
- **Alert** - Alert messages
- **Toast** - Toast notifications (using Sonner)
- **Dialog** - Modal dialogs
- **Progress** - Progress indicators

### Layout
- **Tabs** - Tab navigation
- **Separator** - Visual divider

[**View all components in Storybook →**](https://test-company.github.io/ui)

---

## 🔧 Component API

### Button
```tsx
import { Button } from '@test-company/ui'

<Button
  variant="default" // default | secondary | destructive | outline | ghost
  size="md"         // sm | md | lg
  disabled={false}
  onClick={() => {}}
>
  Click me
</Button>
```

**Variants:**
- `default` - Primary action (blue background)
- `secondary` - Secondary action (gray background)
- `destructive` - Dangerous action (red background)
- `outline` - Outlined button
- `ghost` - Transparent button

### Input
```tsx
import { Input } from '@test-company/ui'

<Input
  label="Email"
  type="email"
  placeholder="Enter your email"
  error="Email is required"
  helperText="We'll never share your email"
  disabled={false}
/>
```

### Table
```tsx
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@test-company/ui'

<Table size="md" striped hoverable>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>john@example.com</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

---

## 🔐 Authentication

This package is published to **GitHub Packages** and requires authentication.

### One-Time Setup

1. **Create GitHub Personal Access Token**
   - Go to https://github.com/settings/tokens
   - Click "Generate new token (classic)"
   - Select scopes: `read:packages`, `write:packages`
   - Generate and copy the token

2. **Login to npm**
```bash
npm login --scope=@test-company --registry=https://npm.pkg.github.com

# Enter:
# Username: your-github-username
# Password: <paste-your-token>
# Email: your-email@company.com
```

3. **Create `.npmrc` in your project**
```
@test-company:registry=https://npm.pkg.github.com
```

Now you can install the package normally:
```bash
npm install @test-company/ui
```

---

## 📖 Documentation

- **Storybook:** [https://test-company.github.io/ui](https://test-company.github.io/ui)
- **GitHub:** [https://github.com/test-company/ui](https://github.com/test-company/ui)
- **Issues:** [https://github.com/test-company/ui/issues](https://github.com/test-company/ui/issues)

---

## 🛠️ Development

### Setup
```bash
git clone https://github.com/test-company/ui.git
cd ui
npm install
```

### Commands
```bash
npm run dev              # Start Vite dev server
npm run storybook        # Start Storybook
npm run build            # Build library for production
npm run lint             # Lint code
npm run format           # Format code with Prettier
npm run type-check       # Check TypeScript types
npm test                 # Run tests
```

### Project Structure
```
ui/
├── src/
│   ├── components/ui/           # Shadcn base components
│   ├── design-system/
│   │   ├── components/          # Custom components
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Button.stories.tsx
│   │   │   │   └── index.ts
│   │   │   └── ...
│   │   └── theme/               # Theme system
│   ├── lib/                     # Utilities
│   ├── types/                   # TypeScript types
│   └── index.ts                 # Main export
├── .storybook/                  # Storybook config
└── dist/                        # Build output
```

---

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md)

---

## 📝 Changelog

See [CHANGELOG.md](./CHANGELOG.md)

---

## 📄 License

UNLICENSED - Internal use only for Test Company

---

## 💬 Support

For questions or issues:
- Open an issue: https://github.com/test-company/ui/issues
- Contact: engineering@testcompany.com

---

**Made with ❤️ by Test Xaults Engineering Team**