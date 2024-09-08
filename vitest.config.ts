
import { mergeConfig, coverageConfigDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(viteConfig,{
  test: {
    environment: 'happy-dom',
    coverage: {
      all: true,
      provider: 'istanbul',
      reporter: ['text', 'html'],
      exclude: [...coverageConfigDefaults.exclude, 'storybook.setup.ts', 'src/**/*.stories.*', '.storybook'],
    },
  },
})
