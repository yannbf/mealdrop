/// <reference types="vitest" />
import { defineConfig, defaultInclude, defaultExclude, configDefaults } from 'vitest/config'
import { mergeConfig } from 'vite'
import { storybookTest } from '@storybook/experimental-vitest-plugin'
// import Inspect from 'vite-plugin-inspect'

import viteConfig from './vite.config'

let include: string[]
let exclude: string[]
let setupFiles = ['./src/setupTests.browser.ts']
let plugins: any[] = []
if (process.env.PLUGIN_ONLY) {
  include = ['src/**/*.stories.tsx']
  exclude = [...defaultExclude, 'storybook.test.ts']
  plugins = [
    storybookTest({
      renderer: 'react',
      storybookScript: 'yarn storybook',
    }),
    // in case we want to debug the Storybook plugin transformation
    // Inspect({ build: true, outputDir: '.vite-inspect' }),
  ]
} else {
  include = defaultInclude
  exclude = [...defaultExclude, 'src/**/*.stories.tsx']
  setupFiles.push('src/setupTests.storyshots.ts')
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
      browser: {
        isolate: true,
        enabled: true,
        name: process.env.WDIO ? 'chrome' : 'chromium',
        provider: process.env.WDIO ? 'webdriverio' : 'playwright',
      },
      setupFiles,
      coverage: {
        provider: 'istanbul', // v8 does not work with browser mode
        reporter: ['text', 'html'],
        exclude: [
          ...configDefaults.coverage.exclude!,
          'node_modules/',
          'src/setupTests.browser.ts',
        ],
      },
    },
  })
)
