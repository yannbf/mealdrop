# Chromatic Themes Docs Map

Fetch the relevant URL with WebFetch at runtime. These are the official docs — always fetch rather than relying on cached knowledge.

## Core docs

| Topic | URL |
|---|---|
| Themes with Modes API | https://chromatic.com/docs/llms/themes.txt |
| Modes overview (themes, viewports, locales) | https://chromatic.com/docs/llms/modes.txt |
| `@storybook/addon-themes` API reference | https://raw.githubusercontent.com/storybookjs/storybook/next/code/addons/themes/docs/api.md |

## Framework-specific getting started guides

| Library | URL |
|---|---|
| Tailwind | https://raw.githubusercontent.com/storybookjs/storybook/next/code/addons/themes/docs/getting-started/tailwind.md |
| Bootstrap | https://raw.githubusercontent.com/storybookjs/storybook/next/code/addons/themes/docs/getting-started/bootstrap.md |
| Material UI | https://raw.githubusercontent.com/storybookjs/storybook/next/code/addons/themes/docs/getting-started/material-ui.md |
| styled-components | https://raw.githubusercontent.com/storybookjs/storybook/next/code/addons/themes/docs/getting-started/styled-components.md |
| Emotion | https://raw.githubusercontent.com/storybookjs/storybook/next/code/addons/themes/docs/getting-started/emotion.md |

## Which doc to fetch

- **Fresh setup, unknown library, or plain CSS** → fetch `themes.txt`
- **Known library** → fetch the matching getting-started guide above
- **User asks about combining themes with viewports or locales** → fetch `modes.txt`
- **User asks about custom decorators or addon helpers** → fetch the API reference
