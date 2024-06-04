/// <reference types="vitest" />
import { defineConfig, configDefaults } from 'vitest/config'
import { mergeConfig } from 'vite'
import { storybookTest } from '@storybook/experimental-vitest-plugin'
// import Inspect from 'vite-plugin-inspect'

import viteConfig from './vite.config'

// https://vitejs.dev/config/
export default mergeConfig(
  viteConfig,
  defineConfig({
    plugins: [
      storybookTest({
        renderer: 'react',
        storybookScript: 'yarn storybook',
      }),
      // In case we want to debug the Storybook plugin transformation. Then run `yarn inspect`
      // Inspect({ build: true, outputDir: '.vite-inspect' })
    ],
    test: {
      globals: true,
      clearMocks: true,
      setupFiles: [
        './src/setupTests.node.ts',
        // this should not be needed:
        // './src/setupTests.other.ts'
      ],
      isolate: process.env.ISOLATED === 'true' ? true : undefined,
      environment: 'happy-dom',
      coverage: {
        reporter: ['text', 'html'],
        exclude: [...configDefaults.coverage.exclude!, 'node_modules', './src/setupTests.node.ts'],
      },
    },
  })
)
