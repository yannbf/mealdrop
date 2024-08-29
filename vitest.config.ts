/// <reference types="vitest" />
import { defineConfig, coverageConfigDefaults } from 'vitest/config'
import { mergeConfig } from 'vite'
import { storybookTest } from '@storybook/experimental-addon-vitest/plugin'

import viteConfig from './vite.config'

// https://vitejs.dev/config/
export default mergeConfig(
  viteConfig,
  defineConfig({
    plugins: [
      storybookTest({
        storybookScript: 'yarn storybook --ci'
      }),
    ],
    publicDir: './public',
    test: {
      environment: 'happy-dom',
      setupFiles: './storybook.setup.ts',
      include: ['src/**/*.stories.*'],
      server: {
        deps: {
          inline: ['vitest-canvas-mock'],
        },
      },
      browser: {
        enabled: true,
        provider: 'playwright',
        name: 'chromium',
        headless: true,
        screenshotFailures: false,
      },
      coverage: {
        provider: 'istanbul',
        reporter: ['text', 'html'],
        exclude: [...coverageConfigDefaults.exclude, 'storybook.setup.ts', 'src/**/*.stories.*', '.storybook'],
      },
    },
  })
)
