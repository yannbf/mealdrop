/// <reference types="vitest" />
import { defineConfig, defaultInclude, defaultExclude } from 'vitest/config'
import { mergeConfig } from 'vite'
import { storybookTest } from '@hipster/experimental-vitest-plugin-sb'

import viteConfig from './vite.config'

let include: string[]
let exclude: string[]
let plugins: any[] = []
if (process.env.PLUGIN_ONLY) {
  include = ['src/**/*.stories.tsx']
  exclude = [...defaultExclude, 'storybook.test.ts']
  plugins = [storybookTest()]
} else {
  include = defaultInclude
  exclude = [...defaultExclude, 'src/**/*.stories.tsx']
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
      include,
      exclude,
      globals: true,
      clearMocks: true,
      setupFiles: './src/setupTests.node.ts',
      server: {
        deps: {
          inline: ['vitest-canvas-mock'],
        },
      },
      environment: 'happy-dom',
      coverage: {
        provider: 'istanbul',
        reporter: ['text', 'html'],
        exclude: ['node_modules/', 'src/setupTests.node.ts'],
      },
    },
  })
)
