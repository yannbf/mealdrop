---
name: chromatic-setup-ci
description: Configure CI/CD pipelines to run Chromatic visual tests automatically. Use when the user wants to set up Chromatic in CI, add Chromatic to GitHub Actions / GitLab / Bitbucket Pipelines / CircleCI / Jenkins / Azure Pipelines, automate visual testing, or run Chromatic on every push.
metadata:
  short-description: Configure CI pipelines to run Chromatic visual tests
---

# Chromatic CI Setup

Set up Chromatic visual testing automation in CI/CD pipelines.

This skill is the single source of truth for:
- detecting which CI provider the project uses
- fetching the current Chromatic docs for that provider
- generating CI configuration files for Chromatic
- setting up the project token secret

## Quick start

1. Read `reference/ci-detection.md` to identify the CI provider from existing config files.
2. If no CI config is found, ask the user which CI provider they use.
3. Read `reference/package-manager.md` and detect the package manager from lockfiles.
4. Look up the provider's docs URL in `reference/docs-map.md` and fetch it with WebFetch.
5. For non-GitHub-Actions providers: check `package.json` for a `chromatic` devDependency and script — add them if missing. Skip this step for GitHub Actions.
6. Generate or update the CI configuration using the fetched docs and the detected package manager.
7. Render the setup checklist using `reference/output-contract.md`.

## Required workflow

### 1) Detect CI provider

Check for existing CI config files using `reference/ci-detection.md`.

If no CI files exist or detection is ambiguous, ask: "Which CI provider are you using? (GitHub Actions, GitLab, Bitbucket Pipelines, CircleCI, Jenkins, Azure Pipelines, or other)"

Never assume GitHub Actions unless evidence supports it.

### 2) Detect package manager

Use `reference/package-manager.md` to identify the package manager from lockfiles. Use its install command and run command throughout the generated config. If an existing CI config is already present, match whatever install command it already uses.

### 3) Read existing CI config

If a CI config file already exists, read it before generating any changes. Understand the existing job structure, Node.js setup steps, and caching approach — match the project's existing patterns when adding Chromatic.

### 4) Fetch the provider docs

Look up the docs URL in `reference/docs-map.md` and fetch it with WebFetch. Use the fetched content as the authoritative source for configuration examples and requirements.

If the fetch fails, fall back to the CI overview doc: https://www.chromatic.com/docs/llms/ci.txt

### 5) Verify package.json (skip for GitHub Actions)

**GitHub Actions**: The `chromaui/action` runs Chromatic internally — do not add a `chromatic` script or devDependency to `package.json`.

**All other providers**: Check `package.json` for a `chromatic` devDependency and script. If missing, add both:
```json
"devDependencies": {
  "chromatic": "^12.0.0"
},
"scripts": {
  "chromatic": "chromatic --exit-zero-on-changes"
}
```

### 6) Output setup checklist

Always return the setup checklist from `reference/output-contract.md`, then show complete generated file content for copy-paste.

## Boundaries

- Do not commit or push files — only generate and show the configuration.
- Do not expose the project token value — always reference it as a secret/environment variable.
- Keep configurations minimal — do not add TurboSnap, monorepo flags, or Playwright/Cypress unless the user asks.

## References

- `reference/ci-detection.md`
- `reference/package-manager.md`
- `reference/docs-map.md`
- `reference/output-contract.md`
