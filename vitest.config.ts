
import { mergeConfig, coverageConfigDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(viteConfig, {
  test: {
    environment: 'happy-dom',
    include: ['**/*.test.ts'],
    coverage: {
      exclude: [
        ...coverageConfigDefaults.exclude,
        'storybook.setup.ts',
        '**/*.stories.*',
        '.storybook',
        'src/docs',
        'src/components/Button/utils.tsx',
        'public',
        'functions',
        '**/conditional-logic.ts',
        '**/RestaurantCard/progress',
        '**/RestaurantsSection.container.tsx',
        'src/stub',
        'ps-setup.ts',
        '**/serviceWorker.ts',
      ],
    },
  },
})
