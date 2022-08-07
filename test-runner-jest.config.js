const { getJestConfig } = require('@storybook/test-runner')

module.exports = {
  // The default configuration comes from @storybook/test-runner
  ...getJestConfig(),
  reporters: ['default', ['jest-junit', { outputDirectory: 'junit/e2e' }]],
}
