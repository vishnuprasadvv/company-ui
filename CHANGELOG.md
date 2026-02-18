# Changelog

All notable changes to `@vishnuprasadvv/ui` are documented here.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
Versioning follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

> Changes that are merged but not yet released.

---

## [1.0.0] — 2026-02-12

### Added

**Core infrastructure**
- Vite library build with ES and CJS outputs (`index.mjs`, `index.cjs`)
- TypeScript declarations bundled via `vite-plugin-dts`
- CSS bundle exported as `@vishnuprasadvv/ui/styles`
- Tailwind CSS v4 integration via `@tailwindcss/vite` plugin
- Radix UI primitives as accessible component foundations
- Path alias `@/` mapped to `src/`

**Theme system**
- `ThemeProvider` — React context provider wrapping the entire app
- `useTheme()` — hook exposing `theme`, `setTheme`, `toggleMode`, `resetTheme`
- `defaultTheme` — full light theme config with all tokens
- `applyTheme()` — injects CSS variables into `:root` at runtime
- `mergeThemes()` — deep-merges a partial config over a base theme
- `validateTheme()` — guards against malformed theme objects
- API-driven theming via `apiUrl` prop on `ThemeProvider`
- `localStorage` persistence via `enableLocalStorage` and `storageKey` props
- `ThemeConfig` TypeScript interface covering colors, typography, and spacing

**Components**
- **Button** — variants: `default`, `secondary`, `destructive`, `outline`, `ghost`; sizes: `sm`, `md`, `lg`
- **Input** — `label`, `error`, `helperText`, `disabled` props; accessible via `useId`
- **Table** — sortable columns, sticky header, striped rows, hoverable rows, size variants, loading state, empty state

**Developer experience**
- Storybook v10 with `@storybook/react-vite`
- Stories for all components with `autodocs` and interactive controls
- `ThemeProvider` decorator wrapping all stories
- ESLint + Prettier config
- Vitest + Playwright browser tests via `@storybook/addon-vitest`
- GitHub Actions CI workflow (lint, type-check, build)
- GitHub Actions publish workflow (triggered on version tags)
- GitHub Pages deployment for Storybook (auto-deploys on push to `main`)

---

## How to Read This File

Each release section contains one or more of these categories:

- **Added** — new features or components
- **Changed** — changes to existing behaviour (non-breaking)
- **Deprecated** — features that will be removed in a future major version
- **Removed** — features removed in this release
- **Fixed** — bug fixes
- **Security** — security patches

Breaking changes are marked with `⚠️ BREAKING`.

---

## Versioning Policy

| Change | Version bump | Example |
|--------|-------------|---------|
| New component or feature | Minor | `1.0.0` → `1.1.0` |
| Bug fix, style tweak | Patch | `1.0.0` → `1.0.1` |
| Removed or renamed prop | Major | `1.0.0` → `2.0.0` |
| Renamed export | Major | `1.0.0` → `2.0.0` |

---

[Unreleased]: https://github.com/vishnuprasadvv/company-ui/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/vishnuprasadvv/company-ui/releases/tag/v1.0.0