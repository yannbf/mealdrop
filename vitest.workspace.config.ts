import { defineWorkspace } from 'vitest/config'

const USE_WEBDRIVERIO = process.env.USE_WEBDRIVERIO === 'true'

const getBrowserConfig = (name: string) => ({
  extends: './vitest.browser.config.ts',
  test: {
    browser: {
      enabled: true,
      name,
      provider: USE_WEBDRIVERIO ? 'webdriverio' : 'playwright',
    },
    globals: true,
    clearMocks: true,
    setupFiles: './src/setupTests.browser.ts',
  },
})

const browsers = USE_WEBDRIVERIO
  ? ['chrome', 'firefox', 'safari']
  : ['chromium', 'firefox', 'webkit']

export default defineWorkspace(browsers.map(getBrowserConfig))
