/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import { mergeConfig } from 'vite'

import viteConfig from './vite.config'

// https://vitejs.dev/config/
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      browser: {
        enabled: true,
        name: 'chromium',
        provider: 'playwright',
      },
      globals: true,
      clearMocks: true,
      setupFiles: './src/setupTests.browser.ts',
      coverage: {
        provider: 'istanbul',
        reporter: ['text', 'html'],
        exclude: ['node_modules/', 'src/setupTests.browser.ts'],
      },
    },
  })
)
