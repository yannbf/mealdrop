/// <reference types="vitest" />
import { defineConfig, defaultInclude, defaultExclude } from 'vitest/config'
import { mergeConfig } from 'vite'
import { storybookTest } from '@hipster/experimental-vitest-plugin-sb'
// import Inspect from 'vite-plugin-inspect'

import viteConfig from './vite.config'

let include: string[]
let exclude: string[]
let plugins: any[] = []
if (process.env.PLUGIN_ONLY) {
  include = ['src/**/*.stories.tsx']
  exclude = [...defaultExclude, 'storybook.test.ts']
  plugins = [
    storybookTest(),
    // in case we want to debug the Storybook plugin transformation
    // Inspect({ build: true, outputDir: '.vite-inspect' })
  ]
} else {
  include = defaultInclude
  exclude = [...defaultExclude, 'src/**/*.stories.tsx']
}

// https://vitejs.dev/config/
export default mergeConfig(
  viteConfig,
  defineConfig({
    define: {
      'process.env': {},
    },
    plugins,
    test: {
      include,
      exclude,
      globals: true,
      clearMocks: true,
      isolate: true,
      server: {
        deps: {
          inline: ['vitest-canvas-mock'],
        },
      },
      browser: {
        isolate: true,
        enabled: true,
        name: process.env.WDIO ? 'chrome' : 'chromium',
        provider: process.env.WDIO ? 'webdriverio' : 'playwright',
      },
      setupFiles: './src/setupTests.browser.ts',
      coverage: {
        provider: 'v8',
        reporter: ['text', 'html'],
        exclude: ['node_modules/', 'src/setupTests.browser.ts'],
      },
    },
  })
)