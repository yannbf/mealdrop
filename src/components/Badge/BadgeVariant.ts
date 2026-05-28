/**
 * Type-only module — Badge consumes this via `import type` so it has no
 * runtime dependency on this file. Used to exercise the get-stories-by-component
 * type-only-edge filtering.
 */
export type BadgeVariant = 'default' | 'info' | 'success' | 'warning' | 'danger'

export const BADGE_VARIANTS: readonly BadgeVariant[] = [
  'default',
  'info',
  'success',
  'warning',
  'danger',
] as const
