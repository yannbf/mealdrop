/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import { mergeConfig } from 'vite'
import { storybookTest } from '@storybook/experimental-addon-vitest/plugin'
import Inspect from 'vite-plugin-inspect'

import viteConfig from './vite.config'

// https://vitejs.dev/config/
export default mergeConfig(
  viteConfig,
  defineConfig({
    plugins: [
      storybookTest({
        storybookScript: 'yarn storybook --ci'
      }),
      Inspect({
        build: true,
        open: true,
        include: [ '**/*.stories.*'],
        dev: false,
      })
    ],
    publicDir: './public',
    test: {
      environment: 'jsdom',
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
        exclude: ['node_modules/', 'storybook.setup.ts'],
      },
    },
  })
)
