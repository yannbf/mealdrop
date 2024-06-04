import { defineWorkspace } from 'vitest/config'
import { storybookTest } from '@storybook/experimental-vitest-plugin'

export default defineWorkspace([
  {
    extends: './vite.config.ts',
    plugins: [
      storybookTest({
        renderer: 'react',
        storybookScript: 'yarn storybook',
      }),
    ],
    test: {
      setupFiles: './src/setupTests.node.ts',
      environment: 'happy-dom',
    },
  },
])
