/// <reference types="vitest" />
import { defineConfig, configDefaults } from 'vitest/config'
import { mergeConfig } from 'vite'
import { storybookTest } from '@hipster/experimental-vitest-plugin-sb'

import viteConfig from './vite.config'

// https://vitejs.dev/config/
export default mergeConfig(
  viteConfig,
  // @ts-ignore
  defineConfig({
    define: {
      'process.env': {},
    },
    // @ts-ignore
    plugins: [storybookTest()],
    test: {
      watch: false,
      include: [...configDefaults.include, '**/*.stories.tsx'],
      globals: true,
      clearMocks: true,
      server: {
        deps: {
          inline: ['vitest-canvas-mock'],
        },
      },
      browser: {
        enabled: true,
        name: 'chromium',
        provider: 'playwright',
      },
      setupFiles: './src/setupTests.browser.ts',
      coverage: {
        provider: 'istanbul',
        reporter: ['text', 'html'],
        exclude: ['node_modules/', 'src/setupTests.browser.ts'],
      },
    },
  })
)
