import { mergeConfig, defineConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,

  defineConfig({
    test: {
      projects: [
        {
          test: {
            name: 'node',
            environment: 'happy-dom',
            include: ['**/*.test.ts'],
          },
        },
      ],
      coverage: {
        include: ['./src/**/*.{ts,tsx}'],
        exclude: [
          '**/*.stories.*',
          'src/docs/**',
          'src/components/Button/utils.tsx',
          '**/conditional-logic.ts',
          '**/RestaurantCard/progress',
          '**/RestaurantsSection.container.tsx',
          'src/stub',
        ],
      },
    },
  })
)
