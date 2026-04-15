---
name: chromatic-themes
description: Configure Chromatic to capture visual test snapshots across multiple themes (light/dark mode, design tokens, branded variants) using the Modes API and @storybook/addon-themes. Use when the user wants to test components with different themes in Chromatic, set up light/dark mode visual testing, configure @storybook/addon-themes with Chromatic, or apply theme modes at the project, component, or story level.
---

# Chromatic Themes

Configure multi-theme visual testing using Chromatic's Modes API and `@storybook/addon-themes`.

This skill covers:
- Detecting the user's theme library and configuring the right decorator
- Defining theme modes in `.storybook/modes.ts`
- Applying modes at project, component, and story levels

## Quick start

1. Scan the project for existing theme config: look for `@storybook/addon-themes` imports, a `modes.ts` file, or `chromatic.modes`.
2. Ask the user which theme library they use (see step 3 below).
3. Fetch the relevant docs from `reference/docs-map.md`.
4. Generate configuration files and output the checklist from `reference/output-contract.md`.

## Required workflow

### 1) Detect existing configuration

Check `.storybook/preview.ts`, story files, and any `modes.ts`:

- `withThemeByClassName` or `withThemeByDataAttribute` found → **addon already configured**, help extend or wire up modes
- `chromatic.modes` with `theme` keys found → **already on Modes API**, help extend or fix
- Neither found → **fresh setup**, ask the user which theme library they use

### 2) Fetch current docs

Use the URLs in `reference/docs-map.md` and fetch with WebFetch. Use fetched content as the authoritative source — do not rely on remembered examples.

### 3) Install `@storybook/addon-themes` (fresh setup only)

If `@storybook/addon-themes` is not already installed, detect the package manager by checking for lock files (`bun.lockb`/`bun.lock` → bun, `pnpm-lock.yaml` → pnpm, `yarn.lock` → yarn, `package-lock.json` → npm) and use the matching install command:

| Package manager | Command |
|---|---|
| npm | `npm install --save-dev @storybook/addon-themes` |
| yarn | `yarn add --dev @storybook/addon-themes` |
| pnpm | `pnpm add --save-dev @storybook/addon-themes` |
| bun | `bun add --dev @storybook/addon-themes` |

Then register it in `.storybook/main.ts`:
```ts
export default {
  addons: ['@storybook/addon-themes'],
};
```

### 4) Identify the theme library and configure the decorator

Ask: _"Which theme library or approach does your project use? (e.g. Tailwind, Bootstrap, Material UI, styled-components, Emotion, or plain CSS classes)"_

Use the answer to pick the right path:

| Library | Decorator | Docs to fetch |
|---|---|---|
| Tailwind, plain CSS classes | `withThemeByClassName` | `themes.txt` |
| Bootstrap | `withThemeByDataAttribute` (`data-bs-theme`) | getting-started/bootstrap.md |
| Material UI | custom decorator | getting-started/material-ui.md |
| styled-components | custom decorator | getting-started/styled-components.md |
| Emotion | custom decorator | getting-started/emotion.md |
| Other / unsure | `withThemeByClassName` | `themes.txt` |

**Class-based** (`withThemeByClassName`):
```ts
// .storybook/preview.ts
import { withThemeByClassName } from '@storybook/addon-themes';

export const decorators = [
  withThemeByClassName({
    themes: { light: 'light-theme', dark: 'dark-theme' },
    defaultTheme: 'light',
    // parentSelector: 'html', // default
  }),
];
```

**Data attribute** (`withThemeByDataAttribute`):
```ts
import { withThemeByDataAttribute } from '@storybook/addon-themes';

export const decorators = [
  withThemeByDataAttribute({
    themes: { light: 'light', dark: 'dark' },
    defaultTheme: 'light',
    attributeName: 'data-bs-theme', // default: 'data-theme'
  }),
];
```

**Custom decorator** — fetch the library-specific guide from `reference/docs-map.md` and follow it. Use `pluckThemeFromContext` and `initializeThemeState` from `@storybook/addon-themes` to bridge Storybook globals with the library's theme API.

### 4) Define theme modes

Create or update `.storybook/modes.ts`. The `theme` key must exactly match a key in the decorator's `themes` object:

```ts
export const allModes = {
  light: { theme: 'light' },
  dark: { theme: 'dark' },
} as const;
```

### 5) Apply modes to stories

**Project-wide** (`.storybook/preview.ts`):
```ts
import { allModes } from './modes';

const preview = {
  parameters: { chromatic: { modes: allModes } },
};
export default preview;
```

**Per component** or **per story**:
```ts
import { allModes } from '../.storybook/modes';

export default {
  title: 'Button',
  parameters: {
    chromatic: { modes: { light: allModes.light, dark: allModes.dark } },
  },
};
```

**Disable inherited modes** on a specific story:
```ts
parameters: { chromatic: { modes: { dark: { disable: true } } } }
```

### 6) Output checklist

Always render the checklist from `reference/output-contract.md`, then show the complete content of every file to create or modify.

## Key constraints

- The `theme` value in a mode must exactly match a key in the decorator's `themes` object — a mismatch silently falls back to the default theme
- Mode names are tied to baselines — renaming a mode creates a new baseline and retires the old one
- Modes stack across project → component → story levels; lower levels add to higher ones, they do not replace them
- `@storybook/addon-themes` requires Storybook 7.x or later
- Only one decorator approach per project — do not mix `withThemeByClassName` and `withThemeByDataAttribute`

## Boundaries

- Do not commit or push files — generate and show configuration only
- Do not suggest viewport or locale modes unless the user asks
- Do not install or suggest theme libraries — only wire up what already exists

## References

- `reference/docs-map.md`
- `reference/output-contract.md`
- `../chromatic-setup-ci/reference/package-manager.md` — lock file detection and install commands per package manager
