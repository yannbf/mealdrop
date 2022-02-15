const { getJestConfig } = require('@storybook/test-runner')

const runnerOptions = {
  browsers: ['chromium'],
}

module.exports = {
  ...getJestConfig(),
  // setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  testEnvironmentOptions: {
    'jest-playwright': runnerOptions,
  },
}
