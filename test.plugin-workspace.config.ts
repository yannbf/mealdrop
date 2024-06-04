import { defineWorkspace } from 'vitest/config'
import { storybookTest } from '@hipster/experimental-vitest-plugin-sb'

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
