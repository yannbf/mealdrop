const { getJestConfig } = require('@storybook/test-runner')

module.exports = {
  // The default configuration comes from @storybook/test-runner
  ...getJestConfig(),
  testEnvironmentOptions: {
    'jest-playwright': {
      browsers: ['chromium'],
      collectCoverage: true,
    },
  },
  coverageDirectory: '.nyc_output',
  coveragePathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/node_modules/'],
  reporters: ['default', ['jest-junit', { outputDirectory: 'junit/e2e' }]],
}
