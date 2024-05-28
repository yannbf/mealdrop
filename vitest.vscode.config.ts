/// <reference types="vitest" />
import { defineConfig, defaultInclude, defaultExclude } from 'vitest/config'
import { mergeConfig } from 'vite'
import { storybookTest } from '@hipster/experimental-vitest-plugin-sb'

import viteConfig from './vite.config'

const include = ['src/**/*.stories.tsx']
const exclude = [...defaultExclude, 'storybook.test.ts']
const plugins = [storybookTest()]

// https://vitejs.dev/config/
export default mergeConfig(
  viteConfig,
  // @ts-ignore
  defineConfig({
    // @ts-ignore
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
      environment: 'happy-dom',
      coverage: {
        provider: 'istanbul',
        reporter: ['text', 'html'],
        exclude: ['node_modules/', 'src/setupTests.node.ts'],
      },
    },
  })
)
