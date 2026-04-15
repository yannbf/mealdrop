# Themes Output Contract

Always return this checklist after generating theme configuration, followed by complete file content.

---

## Theme Setup Checklist

### Files to create or update
- [ ] `.storybook/main.ts` — register `@storybook/addon-themes` (if not already present)
- [ ] `.storybook/preview.ts` — add decorator (`withThemeByClassName`, `withThemeByDataAttribute`, or custom) and optional global mode application
- [ ] `.storybook/modes.ts` — theme mode definitions
- [ ] `<path/to/story-file>` — per-component or per-story mode application (if targeted)

### Verify it works
Push these changes and run a Chromatic build. Each theme mode appears as a separate snapshot with its own baseline and badge. Check results at https://www.chromatic.com

---

After the checklist, output the **complete file content** for every file that needs to be created or modified, so the user can copy-paste directly.

If updating an existing file, show the full updated file — not just a diff.

### Key reminders
- The `theme` value in each mode must exactly match a key in the decorator's `themes` object
- Renaming a mode creates a new baseline; the old baseline is retired on the next build
- If the user is adding theme modes alongside existing viewport modes, show the combined `allModes` object
