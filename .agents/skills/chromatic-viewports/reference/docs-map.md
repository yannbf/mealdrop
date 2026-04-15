# Chromatic Viewports Docs Map

Fetch the relevant URL with WebFetch at runtime. These are Chromatic's official LLM-friendly docs — always fetch rather than relying on cached knowledge.

## Core docs

| Topic | URL |
|---|---|
| Modes overview (viewports, themes, locales) | https://chromatic.com/docs/llms/modes.txt |
| Viewports with Modes API | https://chromatic.com/docs/llms/modes/viewports.txt |
| Legacy `chromatic.viewports` + migration guide | https://chromatic.com/docs/llms/legacy-viewports.txt |

## Which doc to fetch

- **Fresh setup or extending modes** → fetch `modes/viewports.txt`
- **User mentions legacy API or `chromatic.viewports`** → fetch `legacy-viewports.txt` for migration details
- **User asks about combining viewports with themes or locales** → fetch `modes.txt`
- **Unsure** → fetch `modes/viewports.txt` first; it covers the common case
