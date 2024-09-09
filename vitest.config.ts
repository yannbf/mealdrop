
import { mergeConfig, coverageConfigDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(viteConfig, {
  test: {
    environment: 'happy-dom',
    coverage: {
      exclude: [
        ...coverageConfigDefaults.exclude,
        'storybook.setup.ts',
        'src/**/*.stories.*',
        '.storybook',
        'src/docs',
        'public',
        'functions',
        '**/conditional-logic.ts',
        'RestaurantCard/progress',
        'src/stub'
      ],
    },
  },
})
