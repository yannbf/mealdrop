import { mergeConfig, coverageConfigDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(viteConfig, {
  test: {
    name: 'node',
    environment: 'happy-dom',
    include: ['**/*.test.ts', '**/*.test.tsx'],
    coverage: {
      exclude: [
        ...coverageConfigDefaults.exclude,
        'storybook.setup.ts',
        '**/*.stories.*',
        '.storybook',
        'src/docs',
        '**/conditional-logic.ts',
        '**/RestaurantCard/progress',
        '**/RestaurantsSection.container.tsx',
        'src/stub',
        '**/serviceWorker.ts',
        'build',
        'public',
      ],
    },
  },
})
