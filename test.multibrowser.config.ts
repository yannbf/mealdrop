import { defineWorkspace } from 'vitest/config'

const getBrowserConfig = (name) => ({
  extends: './test.browser.config.ts',
  test: {
    browser: {
      enabled: true,
      name,
      provider: process.env.WDIO ? 'webdriverio' : 'playwright',
    },
    globals: true,
    clearMocks: true,
    setupFiles: './src/setupTests.browser.ts',
  },
})

const browsers = process.env.WDIO
  ? ['chrome', 'safari', 'firefox']
  : ['chromium', 'webkit', 'firefox']
export default defineWorkspace(browsers.map(getBrowserConfig))
