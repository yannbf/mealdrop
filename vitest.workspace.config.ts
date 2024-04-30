import { defineWorkspace } from 'vitest/config'

const getBrowserConfig = (name: 'chromium' | 'firefox' | 'webkit') => ({
  extends: './vitest.browser.config.ts',
  test: {
    browser: {
      enabled: true,
      name,
      provider: 'playwright',
    },
    globals: true,
    clearMocks: true,
    setupFiles: './src/setupTests.browser.ts',
  },
})

const browsers = ['chromium', 'webkit', 'firefox'] as const
export default defineWorkspace(browsers.map(getBrowserConfig))
