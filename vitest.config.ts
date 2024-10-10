
import { mergeConfig, coverageConfigDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(viteConfig,{
  test: {
    environment: 'happy-dom',
    include: ['**/*.test.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      exclude: [...coverageConfigDefaults.exclude, 'storybook.setup.ts', 'src/**/*.stories.*', '.storybook'],
    },
  },
})
