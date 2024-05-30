/// <reference types="vitest" />
import { defineConfig, defaultInclude, defaultExclude } from 'vitest/config'
import { mergeConfig } from 'vite'
import { storybookTest } from '@hipster/experimental-vitest-plugin-sb'
// import Inspect from 'vite-plugin-inspect'

import viteConfig from './vite.config'

let plugins: any[] = []
if (process.env.PLUGIN_ONLY) {
  plugins = [
    storybookTest(),
    // in case we want to debug the Storybook plugin transformation
    // Inspect({ build: true, outputDir: '.vite-inspect' })
  ]
}

// https://vitejs.dev/config/
export default mergeConfig(
  viteConfig,
  defineConfig({
    plugins,
    server: {
      watch: {
        ignored: ['**/.test-results.json'],
      },
    },
    test: {
      globals: true,
      clearMocks: true,
      isolate: process.env.ISOLATED === 'true' ? true : undefined,
      setupFiles: './src/setupTests.node.ts',
      environment: 'happy-dom',
      coverage: {
        reporter: ['text', 'html'],
        exclude: ['node_modules/', 'src/setupTests.node.ts'],
      },
    },
  })
)
