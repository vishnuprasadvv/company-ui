# Contributing to @vishnuprasadvv/ui

Thank you for contributing to the design system. This guide covers everything you need to go from zero to a merged pull request.

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Local Setup](#local-setup)
- [Project Structure](#project-structure)
- [Creating a Component](#creating-a-component)
- [Updating the Theme](#updating-the-theme)
- [Code Standards](#code-standards)
- [Commit Convention](#commit-convention)
- [Pull Request Process](#pull-request-process)
- [Publishing a New Version](#publishing-a-new-version)

---

## Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- Git
- A GitHub account with access to the `vishnuprasadvv` organization

---

## Local Setup

```bash
# Clone
git clone https://github.com/vishnuprasadvv/company-ui.git
cd company-ui

# Install dependencies
npm install

# Start Storybook (recommended for component development)
npm run storybook
# Opens http://localhost:6006

# Or start the Vite dev app
npm run dev
# Opens http://localhost:5173
```

---

## Project Structure

```
src/
├── components/ui/             # Raw Shadcn/Radix base components (do not edit)
├── design-system/
│   ├── components/            # All custom components live here
│   │   ├── Button/
│   │   │   ├── Button.tsx         # Component
│   │   │   ├── Button.stories.tsx # Storybook stories
│   │   │   └── index.ts           # Re-exports
│   │   ├── Input/
│   │   ├── Table/
│   │   └── index.ts           # Re-exports all components
│   └── theme/
│       ├── theme.ts           # defaultTheme values
│       ├── ThemeProvider.tsx  # Context + useTheme hook
│       └── index.ts
├── lib/
│   └── utils.ts               # cn() utility (clsx + twMerge)
├── types/
│   └── theme.ts               # ThemeConfig, ThemeColors, etc.
├── utils/
│   └── themeUtils.ts          # applyTheme, mergeThemes, validateTheme
└── index.ts                   # Main package entry — exports everything
```

The rule is simple: **one folder per component**, each with a `.tsx`, a `.stories.tsx`, and an `index.ts`.

---

## Creating a Component

### 1. Create the folder

```bash
mkdir src/design-system/components/Badge
```

### 2. Write the component

```tsx
// src/design-system/components/Badge/Badge.tsx
import * as React from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'destructive'
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
          {
            'bg-primary text-primary-foreground': variant === 'default',
            'bg-success text-success-foreground': variant === 'success',
            'bg-warning text-warning-foreground': variant === 'warning',
            'bg-destructive text-destructive-foreground': variant === 'destructive',
          },
          className
        )}
        {...props}
      />
    )
  }
)

Badge.displayName = 'Badge'
```

### 3. Write Storybook stories

```tsx
// src/design-system/components/Badge/Badge.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta = {
  title: 'Design System/Badge',
  component: Badge,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'destructive'],
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { children: 'Default' } }
export const Success: Story = { args: { variant: 'success', children: 'Active' } }
export const Warning: Story = { args: { variant: 'warning', children: 'Pending' } }
export const Destructive: Story = { args: { variant: 'destructive', children: 'Removed' } }
```

### 4. Create the index

```typescript
// src/design-system/components/Badge/index.ts
export * from './Badge'
```

### 5. Register in the barrel

```typescript
// src/design-system/components/index.ts
export * from './Button'
export * from './Input'
export * from './Table'
export * from './Badge'   // ← add this
```

### 6. Verify in Storybook

```bash
npm run storybook
# Navigate to Design System/Badge and check all stories render correctly
```

---

## Updating the Theme

### Adding a new color token

1. Add it to the `ThemeColors` interface in `src/types/theme.ts`:

```typescript
export interface ThemeColors {
  // ... existing tokens
  info: string
  infoForeground: string
}
```

2. Add the default value in `src/design-system/theme/theme.ts`:

```typescript
export const defaultTheme: ThemeConfig = {
  colors: {
    // ... existing
    info: '199 89% 48%',
    infoForeground: '210 40% 98%',
  },
}
```

3. Add the CSS variable mapping in `src/index.css`:

```css
@layer base {
  :root {
    /* existing variables */
    --info: 199 89% 48%;
    --info-foreground: 210 40% 98%;
  }
}
```

4. `applyTheme()` in `themeUtils.ts` will automatically inject the new variable because it iterates over all keys in `theme.colors`.

---

## Code Standards

### TypeScript — always type props explicitly

```typescript
// ✅ Good
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'destructive'
}

// ❌ Bad
export interface ButtonProps {
  variant?: string
  onClick?: any
}
```

### Tailwind — always use `cn()` for conditional classes

```typescript
// ✅ Good
className={cn(
  'base-classes',
  variant === 'primary' && 'bg-primary text-primary-foreground',
  className
)}

// ❌ Bad
className={`base-classes ${variant === 'primary' ? 'bg-primary' : ''}`}
```

### Colors — always use CSS variable classes, never hardcoded colors

```tsx
// ✅ Good — respects the theme
<div className="bg-primary text-primary-foreground" />

// ❌ Bad — ignores the theme
<div className="bg-blue-600 text-white" />
```

### forwardRef — use it for all DOM-facing components

```typescript
// ✅ Good
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => <button ref={ref} {...props} />
)
Button.displayName = 'Button'
```

### Naming

| Type | Convention | Example |
|------|------------|---------|
| Component | PascalCase | `BadgeGroup` |
| Props interface | PascalCase + Props | `BadgeGroupProps` |
| File | PascalCase | `BadgeGroup.tsx` |
| Hook | camelCase + use | `useTheme` |
| Utility | camelCase | `applyTheme` |
| Constant | UPPER_SNAKE_CASE | `DEFAULT_THEME` |

---

## Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/).

```
<type>(<scope>): <short description>

[optional body]
[optional footer]
```

| Type | When to use |
|------|-------------|
| `feat` | New component or feature |
| `fix` | Bug fix |
| `docs` | README, CHANGELOG, comments only |
| `style` | Formatting, no logic change |
| `refactor` | Code change that is not a fix or feature |
| `test` | Adding or updating tests |
| `chore` | Build config, dependencies, CI |

**Examples:**

```bash
git commit -m "feat(Badge): add Badge component with 4 variants"
git commit -m "fix(Button): correct focus ring not showing on outline variant"
git commit -m "docs: update authentication section in README"
git commit -m "chore: upgrade storybook to v10.2"
```

---

## Pull Request Process

### 1. Branch from `main`

```bash
git checkout main
git pull origin main
git checkout -b feat/badge-component
```

Branch naming:
- `feat/badge-component` — new feature
- `fix/button-focus-ring` — bug fix
- `docs/update-readme` — documentation
- `refactor/theme-provider` — refactoring

### 2. Make and verify your changes

```bash
npm run type-check   # No TypeScript errors
npm run lint         # No ESLint errors
npm run format       # Prettier formatted
npm run storybook    # Component looks correct in Storybook
npm run build        # Library builds successfully
```

### 3. Commit and push

```bash
git add .
git commit -m "feat(Badge): add Badge component"
git push origin feat/badge-component
```

### 4. Open a Pull Request

Go to https://github.com/vishnuprasadvv/company-ui and open a PR against `main`.

Fill in the PR template:

```markdown
## What
Brief description of the change.

## Why
Why is this change needed?

## Type
- [ ] New component
- [ ] Bug fix
- [ ] Documentation
- [ ] Breaking change

## Checklist
- [ ] Storybook stories added/updated
- [ ] TypeScript types correct
- [ ] No lint or type errors
- [ ] CHANGELOG.md updated
```

### 5. Review

- At least one approval is required before merging
- All CI checks must pass (lint, type-check, build)
- Squash merge into `main`

---

## Publishing a New Version

Only maintainers publish. The process is fully automated via GitHub Actions.

### Patch release (bug fix)

```bash
# Update version in package.json
npm version patch   # e.g. 1.0.0 → 1.0.1

# Push with tag
git push origin main --follow-tags
```

### Minor release (new component or feature)

```bash
npm version minor   # e.g. 1.0.0 → 1.1.0
git push origin main --follow-tags
```

### Major release (breaking change)

```bash
npm version major   # e.g. 1.0.0 → 2.0.0
git push origin main --follow-tags
```

Pushing a tag (`v*.*.*`) triggers the GitHub Actions publish workflow which:

1. Builds the library
2. Publishes to GitHub Packages
3. Creates a GitHub Release

After publishing, update `CHANGELOG.md` to move items from `[Unreleased]` to the new version section.

---

## Questions

- **Bug or issue:** https://github.com/vishnuprasadvv/company-ui/issues
- **Discussion:** https://github.com/vishnuprasadvv/company-ui/discussions