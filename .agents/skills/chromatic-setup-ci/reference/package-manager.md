# Package Manager Detection

Detect the package manager by checking for lockfiles in the project root. Use Glob to check.

## Detection

| Lockfile                  | Package manager |
| ------------------------- | --------------- |
| `bun.lockb` or `bun.lock` | bun             |
| `pnpm-lock.yaml`          | pnpm            |
| `yarn.lock`               | yarn            |
| `package-lock.json`       | npm             |

Check in this order — if multiple lockfiles exist, use the first match (bun → pnpm → yarn → npm).

If no lockfile exists, default to npm.

## Commands per package manager

|                     | npm                 | yarn                 | pnpm                 | bun                 |
| ------------------- | ------------------- | -------------------- | -------------------- | ------------------- |
| Install             | `npm install`       | `yarn install`       | `pnpm install`       | `bun install`       |
| Run script          | `npm run chromatic` | `yarn chromatic`     | `pnpm chromatic`     | `bun run chromatic` |
| Execute (no script) | `npx chromatic`     | `yarn dlx chromatic` | `pnpm dlx chromatic` | `bun x chromatic`   |

## GitHub Actions cache key

When using `actions/setup-node`, set the `cache` input to match:

```yaml
- uses: actions/setup-node@v4
  with:
    node-version: 20
    cache: 'npm' # or 'yarn' or 'pnpm'
```

bun has its own setup action — use `oven-sh/setup-bun` instead of `actions/setup-node`.

## Note

If an existing CI config is already present, match whatever install command it uses rather than re-detecting from lockfiles.
