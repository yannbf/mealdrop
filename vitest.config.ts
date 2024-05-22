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
    // @ts-ignore
    plugins: [storybookTest()],
    test: {
      watch: false,
      include: [...configDefaults.include, '**/*.stories.tsx'],
      globals: true,
      environment: 'happy-dom',
      clearMocks: true,
      setupFiles: './src/setupTests.ts',
      server: {
        deps: {
          inline: ['vitest-canvas-mock'],
        },
      },
      coverage: {
        provider: 'istanbul',
        reporter: ['text', 'html'],
        exclude: ['node_modules/', 'src/setupTests.ts'],
      },
    },
  })
)
