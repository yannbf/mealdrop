/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import { mergeConfig } from 'vite'

import viteConfig from './vite.config'

console.log('opa')

// https://vitejs.dev/config/
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
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
