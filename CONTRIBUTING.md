# Contributing to @test-company/ui

Thank you for your interest in contributing! This document provides guidelines for contributing to the design system.

## 📋 Table of Contents

- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Component Guidelines](#component-guidelines)
- [Code Standards](#code-standards)
- [Submitting Changes](#submitting-changes)

---

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- Git

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/test-company/ui.git
cd ui
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development**
```bash
npm run dev        # Start Vite
npm run storybook  # Start Storybook
```

---

## Development Workflow

### Creating a New Component

1. **Create component folder**
```bash
mkdir src/design-system/components/NewComponent
```

2. **Create component files**
```
NewComponent/
├── NewComponent.tsx       # Component implementation
├── NewComponent.stories.tsx  # Storybook stories
├── NewComponent.test.tsx  # Tests (optional)
└── index.ts               # Exports
```

3. **Component template**
```typescript
// NewComponent.tsx
import * as React from 'react'
import { cn } from '@/lib/utils'

export interface NewComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'alternative'
  size?: 'sm' | 'md' | 'lg'
}

export const NewComponent = React.forwardRef<HTMLDivElement, NewComponentProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'base-styles',
          // Variant styles
          {
            'variant-default': variant === 'default',
            'variant-alternative': variant === 'alternative',
          },
          // Size styles
          {
            'size-sm': size === 'sm',
            'size-md': size === 'md',
            'size-lg': size === 'lg',
          },
          className
        )}
        {...props}
      />
    )
  }
)

NewComponent.displayName = 'NewComponent'
```

4. **Create Storybook stories**
```typescript
// NewComponent.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { NewComponent } from './NewComponent'

const meta = {
  title: 'Design System/NewComponent',
  component: NewComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'alternative'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof NewComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'New Component',
  },
}

export const Alternative: Story = {
  args: {
    variant: 'alternative',
    children: 'Alternative Variant',
  },
}
```

5. **Export component**
```typescript
// index.ts
export * from './NewComponent'
```
```typescript
// src/design-system/components/index.ts
export * from './Button'
export * from './Input'
export * from './NewComponent'  // Add this
```

---

## Component Guidelines

### Design Principles

1. **Accessible by Default**
   - Use semantic HTML
   - Include ARIA attributes
   - Support keyboard navigation
   - Provide proper focus states

2. **Composable**
   - Build small, reusable components
   - Allow composition for complex UIs
   - Don't over-engineer

3. **Consistent API**
   - Follow React conventions
   - Use consistent prop names
   - Extend native HTML attributes when possible

4. **Themeable**
   - Use CSS variables for colors
   - Support light/dark mode
   - Allow customization via className

### Component Checklist

- [ ] Uses TypeScript
- [ ] Extends appropriate HTML element props
- [ ] Implements `forwardRef` if needed
- [ ] Uses Tailwind CSS classes
- [ ] Supports theme colors
- [ ] Has Storybook stories
- [ ] Includes JSDoc comments
- [ ] Handles edge cases
- [ ] Accessible (keyboard, screen readers)
- [ ] Responsive design

---

## Code Standards

### TypeScript
```typescript
// ✅ Good
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

// ❌ Bad
export interface ButtonProps {
  variant?: string
  size?: string
  onClick?: any
}
```

### Naming Conventions

- **Components:** PascalCase (`Button`, `InputField`)
- **Props:** camelCase (`variant`, `isDisabled`)
- **Files:** PascalCase for components (`Button.tsx`)
- **Constants:** UPPER_SNAKE_CASE (`DEFAULT_SIZE`)

### Tailwind Usage
```typescript
// ✅ Good - Use cn() utility
className={cn(
  'base-classes',
  variant === 'primary' && 'primary-classes',
  className
)}

// ❌ Bad - String concatenation
className={`base-classes ${variant === 'primary' ? 'primary-classes' : ''} ${className}`}
```

### Comments
```typescript
/**
 * Primary button component for user actions
 * 
 * @example
 * ```tsx
 * <Button variant="primary" onClick={handleClick}>
 *   Click me
 * </Button>
 * ```
 */
export const Button = ...
```

---

## Submitting Changes

### Workflow

1. **Create a branch**
```bash
git checkout -b feat/new-component
```

Branch naming:
- `feat/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation
- `refactor/` - Code refactoring
- `test/` - Tests

2. **Make changes**
```bash
# Make your changes
npm run lint        # Check linting
npm run type-check  # Check types
npm run format      # Format code
```

3. **Commit changes**

Follow [Conventional Commits](https://www.conventionalcommits.org/):
```bash
git commit -m "feat: add NewComponent"
git commit -m "fix: button hover state"
git commit -m "docs: update README"
```

4. **Push and create PR**
```bash
git push origin feat/new-component
```

Then create a Pull Request on GitHub.

### PR Guidelines

- **Title:** Use conventional commit format
- **Description:** Explain what and why
- **Screenshots:** For UI changes
- **Testing:** Describe how you tested
- **Breaking Changes:** Clearly mark them

### PR Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] New feature
- [ ] Bug fix
- [ ] Documentation
- [ ] Breaking change

## Screenshots (if applicable)
[Add screenshots]

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-reviewed code
- [ ] Added/updated documentation
- [ ] Added/updated tests
- [ ] Changes work in Storybook
```

---

## Questions?

- Open a discussion: https://github.com/test-company/ui/discussions
- Contact: engineering@testcompany.com

---

Thank you for contributing! 🎉
```

---

## **Step 2.6: Create LICENSE File**

### **Create `LICENSE`**
```
UNLICENSED

Copyright (c) 2024 Test Company

This software and associated documentation files are proprietary and confidential.
Unauthorized copying, distribution, modification, or use of this software,
via any medium, is strictly prohibited without explicit written permission
from Test Company.

For licensing inquiries, contact: legal@testcompany.com
```

Or if you want to make it open source:
```
MIT License

Copyright (c) 2024 Test Company

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.