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
    // In case we want to debug the Storybook plugin transformation. Then run `yarn inspect`
    // Inspect({ build: true, outputDir: '.vite-inspect' })
  ]
}

const overrides = {} as any

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
      setupFiles: [
        './src/setupTests.node.ts',
        // this should not be needed:
        // './src/setupTests.other.ts'
      ],
      environment: 'happy-dom',
      isolate: false,
      // For some reason, with these settings enabled, coverage is broken in Vitest UI mode
      // coverage: {
      //   reporter: ['text', 'html'],
      //   exclude: ['node_modules/', 'src/setupTests.node.ts'],
      // },
    },
  })
)
