---
name: chromatic-viewports
description: Configure Chromatic to capture visual test snapshots at multiple viewport sizes using the Modes API. Use when the user wants to test responsive components at different screen sizes, set up viewport breakpoints for Chromatic visual testing, apply viewports to individual stories or globally, control snapshot height with cropToViewport, or migrate from the legacy chromatic.viewports API to the new Modes API.
---

# Chromatic Viewports

Configure responsive visual testing across multiple screen sizes using Chromatic's Modes API.

This skill covers:
- Setting up viewport modes in `.storybook/modes.ts`
- Applying modes at project, component, and story levels
- Controlling snapshot height with `cropToViewport`
- Migrating from the legacy `chromatic.viewports` API

## Quick start

1. Scan the project for existing viewport config: look for `chromatic.viewports` (legacy) or a `modes.ts` / `modes` import (new API).
2. Fetch the relevant docs from `reference/docs-map.md`.
3. Determine whether this is a fresh setup, an extension, or a migration.
4. Generate configuration files and output the checklist from `reference/output-contract.md`.

## Required workflow

### 1) Detect existing configuration

Check story files, `.storybook/preview.ts`, and existing `modes.ts`:

- `chromatic.viewports` found → **legacy API in use**, offer migration to Modes API
- `.storybook/modes.ts` or `chromatic.modes` found → **already on Modes API**, help extend or fix
- Neither found → **fresh setup**, proceed with Modes API

### 2) Fetch current docs

Use the URLs in `reference/docs-map.md` and fetch with WebFetch. Use fetched content as the authoritative source — do not rely on remembered examples.

### 3) Configure viewports

**Fresh setup or extension (Modes API)**:

Create or update `.storybook/modes.ts`:
```ts
export const allModes = {
  mobile: { viewport: 375 },
  tablet: { viewport: 768 },
  desktop: { viewport: 1280 },
} as const;
```

Apply in a story file:
```ts
import { allModes } from '../.storybook/modes';

export default {
  title: 'Component',
  parameters: {
    chromatic: { modes: { mobile: allModes.mobile, desktop: allModes.desktop } },
  },
};
```

Apply globally in `.storybook/preview.ts`:
```ts
import { allModes } from './modes';

const preview = {
  parameters: {
    chromatic: { modes: allModes },
  },
};
export default preview;
```

**Control height** — by default snapshots use the component's intrinsic height. To crop to the specified viewport height:
```ts
export const allModes = {
  mobile: { viewport: { width: 375, height: 812 } },
} as const;

// In story:
parameters: { chromatic: { modes: { mobile: allModes.mobile }, cropToViewport: true } }
```

**Migration from legacy**:

Replace `chromatic.viewports` arrays with named modes. See `reference/docs-map.md` for the migration guide URL.

```ts
// Before (legacy)
parameters: { chromatic: { viewports: [320, 1200] } }

// After (Modes API)
parameters: { chromatic: { modes: { mobile: { viewport: 320 }, desktop: { viewport: 1200 } } } }
```

### 4) Output checklist

Always render the checklist from `reference/output-contract.md`, then show the complete content of every file to create or modify.

## Key constraints

- Viewport values must be integers or `px`-suffixed strings (`800` or `"800px"`) — no other CSS units
- Valid range: **200–2560px** per side; max **25,000,000 pixels** per snapshot
- Default size when unspecified: **1200 × 900px**
- Legacy `chromatic.viewports` and the Modes API **cannot coexist** in the same story — using both throws an error
- Modes **stack** across project → component → story levels; they do not override each other
- Renaming a mode creates a new baseline; the old baseline is retired

## Boundaries

- Do not commit or push files — generate and show configuration only
- Do not add both APIs to the same file — pick one
- Do not suggest themes, locales, or other globals unless the user asks

## References

- `reference/docs-map.md`
- `reference/output-contract.md`
