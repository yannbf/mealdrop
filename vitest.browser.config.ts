/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import { mergeConfig } from 'vite'

import viteConfig from './vite.config'

const USE_WEBDRIVERIO = process.env.USE_WEBDRIVERIO === 'true'

// https://vitejs.dev/config/
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      browser: {
        enabled: true,
        name: USE_WEBDRIVERIO ? 'chrome' : 'chromium',
        provider: USE_WEBDRIVERIO ? 'webdriverio' : 'playwright',
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
