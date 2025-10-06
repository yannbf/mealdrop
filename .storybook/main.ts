import { defineMain } from '@storybook/react-vite/node'
export default defineMain({
  stories: [
    '../src/docs/Introduction.mdx',
    '../src/docs/*.mdx',
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-vitest',
    // TODO: this addon has a bad instrumentation of getConfig.asyncWrapper that should be fixed
    // 'storybook-addon-test-codegen',
    '@storybook/addon-docs',
  ],
  typescript: {
    reactDocgen: 'react-docgen',
  },
  staticDirs: ['../public'],
  framework: '@storybook/react-vite',
  features: {
    experimentalTestSyntax: true,
  },
})
