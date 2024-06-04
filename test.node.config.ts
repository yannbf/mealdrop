/// <reference types="vitest" />
import { defineConfig, configDefaults } from 'vitest/config'
import { mergeConfig } from 'vite'

import viteConfig from './vite.config'

// https://vitejs.dev/config/
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      clearMocks: true,
      setupFiles: [
        './src/setupTests.node.ts',
        // this should not be needed:
        // './src/setupTests.other.ts'
      ],
      isolate: process.env.ISOLATED === 'false' ? false : undefined,
      environment: 'happy-dom',
      coverage: {
        reporter: ['text', 'html'],
        exclude: [...configDefaults.coverage.exclude!, 'node_modules', './src/setupTests.node.ts'],
      },
    },
  })
)
