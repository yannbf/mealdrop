/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import { mergeConfig } from 'vite'
import { storybookTest } from '@storybook/experimental-addon-vitest/plugin'
// import Inspect from 'vite-plugin-inspect'

import viteConfig from './vite.config'

// https://vitejs.dev/config/
export default mergeConfig(
  viteConfig,
  defineConfig({
    plugins: [
      storybookTest({
        storybookScript: 'yarn storybook --ci'
      }),
      // Inspect({
      //   build: true,
      //   open: true,
      //   include: [ '**/*.stories.*'],
      //   dev: false,
      // })
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

// isolate: true
// Duration  8.15s (transform 12ms, setup 11.64s, collect 7.74s, tests 4.01s, environment 0ms, prepare 4.34s)
// Duration  8.89s (transform 11ms, setup 14.32s, collect 8.70s, tests 4.20s, environment 0ms, prepare 4.59s)
// Duration  9.99s (transform 13ms, setup 10.60s, collect 7.63s, tests 2.76s, environment 0ms, prepare 3.82s)
// isolate: false
// Duration  5.39s (transform 12ms, setup 4.31s, collect 8.12s, tests 4.03s, environment 0ms, prepare 2.30s)
// Duration  7.90s (transform 12ms, setup 3.83s, collect 7.84s, tests 2.70s, environment 0ms, prepare 2.22s)
// Duration  8.13s (transform 13ms, setup 4.40s, collect 8.93s, tests 2.77s, environment 0ms, prepare 2.44s)
// isolate false with HMR
// Duration  4.35s (transform 0ms, setup 3.86s, collect 3.71s, tests 4.39s, environment 0ms, prepare 2.25s)
