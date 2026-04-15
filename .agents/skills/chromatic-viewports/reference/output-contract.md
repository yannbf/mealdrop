# Viewports Output Contract

Always return this checklist after generating viewport configuration, followed by complete file content.

---

## Viewport Setup Checklist

### Files to create or update
- [ ] `.storybook/modes.ts` — viewport mode definitions
- [ ] `.storybook/preview.ts` — global mode application (if setting project-wide viewports)
- [ ] `<path/to/story-file>` — per-component or per-story mode application (if targeted)

### Verify it works
Push these changes and run a Chromatic build. Each mode appears as a separate snapshot with its own baseline. Check results at https://www.chromatic.com

---

After the checklist, output the **complete file content** for every file that needs to be created or modified, so the user can copy-paste directly.

If updating an existing file, show the full updated file — not just a diff.

### Migration note (legacy → Modes API)
If the user is migrating, call out explicitly:
- Which files had `chromatic.viewports` removed
- What the equivalent named modes are
- That old baselines will be retired and new baselines created on the next build
