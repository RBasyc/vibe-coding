# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Vue 3 + Vite + TypeScript** project implementing a Superhuman-inspired design system. The application combines the design specifications from `DESIGN.md` with a modern Vue.js stack.

## Tech Stack

- **Framework**: Vue 3 (Composition API with `<script setup>`)
- **Build Tool**: Vite 8.x
- **State Management**: Pinia
- **Routing**: Vue Router 5
- **Language**: TypeScript 6.x
- **Code Formatting**: Prettier (semi: false, singleQuote: true, printWidth: 100)

## Development Commands

```bash
# Install dependencies
npm install

# Start development server with hot-reload
npm run dev

# Type-check only
npm run type-check

# Build for production (type-checks then builds)
npm run build

# Preview production build locally
npm run preview

# Format code with Prettier
npm run format
```

## Critical Design Constraint

**ALL UI must follow DESIGN.md exactly.** The design system specification in `DESIGN.md` is the source of truth for:

- **Colors**: Mysteria Purple (`#1b1938`), Lavender Glow (`#cbb7fb`), Warm Cream (`#e9e5dd`), Charcoal Ink (`#292827`), etc.
- **Typography**: Super Sans VF with non-standard weights (460, 540, 600, 700) and extreme line-height contrast (0.96 display, 1.50 body)
- **Border-radius**: Binary system only—8px for small elements, 16px for large components
- **Spacing**: 8px base unit with specific scale (8, 12, 16, 18, 20, 24, 28, 32, 36, 40, 48, 56)

When implementing components, reference the "Agent Prompt Guide" section (DESIGN.md lines 229-252) for design tokens and the "Do's and Don'ts" (lines 177-196) for anti-patterns to avoid.

## Project Structure

```
src/
├── main.ts              # App entry point (Vue app, Pinia, Router initialization)
├── App.vue              # Root component with RouterView
├── assets/
│   ├── base.css         # CSS variables and global resets
│   └── main.css         # Global styles
├── components/          # Reusable Vue components
├── views/               # Page-level components (HomeView, AboutView)
├── router/
│   └── index.ts         # Vue Router configuration
└── stores/              # Pinia stores (state management)
```

## Code Style

Prettier is configured to format on save in VSCode:
- No semicolons
- Single quotes for strings
- 100 character line width
- Automatic formatting on save

## Architecture Notes

- **Routing**: File-based routing is configured in `src/router/index.ts` with lazy-loading for non-critical routes
- **State**: Use Pinia stores in `src/stores/` for shared state (currently has a counter store as template)
- **Components**: Use `<script setup lang="ts">` for all Vue 3 components
- **CSS Variables**: Base theme variables are defined in `src/assets/base.css` (currently uses Vue's default palette—update to match DESIGN.md)
