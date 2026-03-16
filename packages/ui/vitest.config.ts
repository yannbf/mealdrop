import { mergeConfig, coverageConfigDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(viteConfig, {
  test: {
    name: 'ui-node',
    environment: 'happy-dom',
    include: ['**/*.test.ts', '**/*.test.tsx'],
    coverage: {
      exclude: [
        ...coverageConfigDefaults.exclude,
        'storybook.setup.ts',
        '**/*.stories.*',
        '.storybook',
        'src/docs',
        'src/components/Button/utils.tsx',
        '**/RestaurantCard/progress',
        '**/RestaurantsSection.container.tsx',
        'src/stub',
        'build',
        'dist',
        'public',
      ],
    },
  },
})
