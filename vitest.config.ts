
import { mergeConfig, coverageConfigDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(viteConfig, {
  test: {
    // you could also import it and call it like `new StorybookReporter()` if you want to pass options
    reporters: ['default', './custom-reporter.ts'],
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
