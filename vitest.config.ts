/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import { mergeConfig } from 'vite'
import { storybookTest } from '@storybook/experimental-vitest-plugin'

import viteConfig from './vite.config'

// https://vitejs.dev/config/
export default mergeConfig(
  viteConfig,
  defineConfig({
    plugins: [
      storybookTest({
        renderer: 'react',
        storybookScript: 'yarn storybook --ci',
      }),
    ],
    publicDir: './public',
    test: {
      globals: true,
      environment: 'jsdom',
      clearMocks: true,
      setupFiles: './src/setupTests.ts',
      include: ['src/**/*.stories.tsx'],
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
        exclude: ['node_modules/', 'src/setupTests.ts'],
      },
    },
  })
)
