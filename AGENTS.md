# AGENTS.md - Portfolio Project Guidelines

## Project Overview

This is a personal portfolio website built with **Astro 5**, **React 19**, **Tailwind CSS 3**, and **TypeScript**. It uses Biome for linting/formatting and pnpm as the package manager.

---

## Commands

### Development
```bash
pnpm dev          # Start dev server at localhost:4321
pnpm preview      # Preview production build
```

### Build
```bash
pnpm build        # Build for production
pnpm astro check  # Type-check the project
```

### Linting & Formatting
```bash
pnpm biome check .        # Run linter on all files
pnpm biome check --write . # Fix lint errors
pnpm biome format .       # Format code
```

### Single File Operations
```bash
pnpm biome check src/components/Hero.astro  # Lint single file
pnpm biome format src/components/Hero.astro # Format single file
```

---

## Code Style Guidelines

### Formatting (Biome)
- **Indentation**: Tabs (not spaces)
- **Quotes**: Double quotes for JavaScript/JSX
- **Trailing commas**: Enabled
- **Line width**: Default Biome settings

### TypeScript
- Extends `astro/tsconfigs/strict` - use strict mode always
- Use `type` for type-only imports: `import type { Project } from "./models/Project"`
- Avoid `any` - prefer `unknown` or proper typing
- Use explicit return types for utility functions

### Astro Components
- Frontmatter fence: `---` with imports
- Prefer `.astro` files for static UI - use React only for interactivity
- Props interface defined in frontmatter using TypeScript
- Scoped styles in `<style>` block using Tailwind utilities

### React Components
- Use functional components with arrow functions or `function` keyword
- React 19 - no need for `useMemo`/`useCallback` (React Compiler handles this)
- Use `import { Component } from "react"` for named exports
- JSX quotes: double quotes

### Imports Order (Biome auto-organizes)
1. External libraries (react, astro, etc.)
2. Internal components
3. Assets/images
4. Types (last, with `type` keyword)

Example:
```typescript
import { useState } from "react";
import Container from "./Container.astro";
import Photo from "../assets/Photo.jpg";
import type { Project } from "./models/Project";
```

### Naming Conventions
- **Components**: PascalCase (e.g., `Hero.astro`, `Button.astro`)
- **Files**: kebab-case (e.g., `project-details.ts`)
- **Types/Interfaces**: PascalCase (e.g., `Project`, `Technology`)
- **Constants**: PascalCase for exports, camelCase for locals

### Tailwind CSS
- Use utility classes for all styling (no custom CSS unless necessary)
- Dark mode: `dark:text-sky-500` pattern with `darkMode: "class"` in config
- Responsive: `md:`, `lg:`, `xl:` prefixes
- Colors used in project:
  - **Primary**: `sky-900` (light), `sky-500` (dark)
  - **Text**: `slate-900` (light), `slate-100` (dark)
  - **Background**: `slate-100` (light), `sky-950` (dark)
  - **Accent**: `green-200`, `green-700` (availability badge)
- Accessibility: Always include `alt` props on images

### Error Handling
- No try/catch in components (Astro handles errors gracefully)
- For data fetching: return fallback UI or empty states
- Console logs only in development (`import.meta.env.DEV` check recommended)

---

## Directory Structure

```
src/
├── assets/          # Static assets (images, SVGs)
├── components/      # Astro components (static UI)
│   ├── Button.astro
│   ├── Container.astro
│   ├── Hero.astro
│   └── ...
├── data.ts          # Static data (projects, etc.)
├── layouts/         # Astro layouts
├── models/          # TypeScript types/interfaces
│   └── Project.ts
└── pages/           # Astro pages
    └── index.astro
```

---

## Palette & Colors

Since there's no custom Tailwind theme, the project uses default Tailwind colors:

| Color | Usage | Classes |
|-------|-------|---------|
| Sky 900 | Primary heading (light) | `text-sky-900` |
| Sky 500 | Primary heading (dark) | `dark:text-sky-500` |
| Slate 900 | Primary text (light) | `text-slate-900` |
| Slate 100 | Primary text (dark) | `dark:text-slate-100` |
| Slate 100 | Background (light) | `bg-slate-100` |
| Sky 950 | Background (dark) | `dark:bg-sky-950` |
| Green 200 | Badge background | `bg-green-200` |
| Green 700 | Badge text | `text-green-700` |

For dark mode support, always provide both light and dark variants:
```astro
<p class="text-slate-900 dark:text-slate-100">Text</p>
```

---

## Testing

**No test framework is currently configured.** If adding tests:
- Use Vitest for unit tests (Astro ecosystem standard)
- Use Playwright for E2E tests
- Keep tests in `src/__tests__/` or `tests/` directory

---

## Important Notes

1. **No pre-commit hooks** - run `pnpm biome check --write .` before committing
2. **Use pnpm** - this project uses pnpm 9.x (check `packageManager` field in package.json)
3. **Astro default port**: 4321 (not 3000)
4. **Image optimization**: Use Astro's built-in `<Image />` component for optimization when possible
