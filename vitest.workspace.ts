import { defineWorkspace } from 'vitest/config'
import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin'

// More info at: https://storybook.js.org/docs/writing-tests/vitest-plugin
export default defineWorkspace([
  'vitest.config.ts',
  {
    extends: 'vite.config.ts',
    plugins: [
      // See options at: https://storybook.js.org/docs/writing-tests/vitest-plugin#storybooktest
      storybookTest({ configDir: '.storybook', storybookScript: 'yarn storybook --ci' }),
    ],
    publicDir: 'public',
    optimizeDeps: {
      exclude: ['storybook-addon-test-codegen/preview'],
    },
    test: {
      name: 'storybook',
      browser: {
        enabled: true,
        headless: true,
        provider: 'playwright',
        name: 'chromium',
      },
      setupFiles: ['.storybook/vitest.setup.ts'],
    },
  },
])
