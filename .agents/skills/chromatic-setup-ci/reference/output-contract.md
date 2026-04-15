# Setup Output Contract

Always return this checklist after generating a CI configuration, followed by the complete generated file content.

---

## CI Setup Checklist

### Files to create or update
- [ ] `<path/to/ci-config-file>` — describe what was added or changed

### package.json (non-GitHub-Actions only — omit this section for GitHub Actions)
- [ ] Added `chromatic` devDependency
- [ ] Added `chromatic` script

### Secret to configure
- [ ] `CHROMATIC_PROJECT_TOKEN` in [Name of secret store for this CI provider]
  - Get your token: Chromatic project → Manage → Configure

### Verify it works
After pushing these changes, Chromatic will run on the next push. Check the build at https://www.chromatic.com

---

After the checklist, output the **complete file content** for every file that needs to be created or modified, so the user can copy-paste it directly.

If updating an existing file, show the full updated file — not just a diff.
