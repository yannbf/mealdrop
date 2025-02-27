import { getJestConfig } from '@storybook/test-runner'

export default {
  // The default configuration comes from @storybook/test-runner
  ...getJestConfig(),
  reporters: ['default', ['jest-junit', { outputDirectory: 'junit/e2e' }]],
}
