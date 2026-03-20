import { mergeConfig, defineConfig } from 'vitest/config'
import { playwright } from '@vitest/browser-playwright'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import { chromaticPlugin } from '@chromatic-com/vitest/plugin'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,

  defineConfig({
    test: {
      projects: [
        {
          test: {
            name: 'node',
            environment: 'happy-dom',
            include: ['**/*.test.ts'],
          },
        },
        {
          plugins: [chromaticPlugin()],
          // TODO: Investigate. ESBuild tries to transform top level dynamic imports
          optimizeDeps: { exclude: ['@chromatic-com/vitest'] },
          test: {
            name: 'browser',
            // The *.test.tsx is already used by disable portable stories tests that crash
            include: ['**/*.browser.test.tsx'],
            browser: {
              enabled: true,
              headless: true,
              screenshotFailures: false,
              provider: playwright(),
              instances: [{ browser: 'chromium' }],
            },
          },
        },
        {
          extends: true,
          plugins: [
            // See options at: https://storybook.js.org/docs/writing-tests/vitest-plugin#storybooktest
            storybookTest({ configDir: '.storybook', storybookScript: 'yarn storybook --ci' }),
          ],
          publicDir: 'public',
          test: {
            name: 'storybook',
            browser: {
              enabled: true,
              headless: true,
              provider: playwright(),
              instances: [{ browser: 'chromium' }],
            },
            setupFiles: ['.storybook/vitest.setup.ts'],
          },
        },
      ],
      reporters: 'tree',
      coverage: {
        include: ['./src/**/*.{ts,tsx}'],
        exclude: [
          '**/*.stories.*',
          'src/docs/**',
          'src/components/Button/utils.tsx',
          '**/conditional-logic.ts',
          '**/RestaurantCard/progress',
          '**/RestaurantsSection.container.tsx',
          'src/stub',
        ],
      },
    },
  })
)
