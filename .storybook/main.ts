import { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: [
    '../src/docs/Introduction.mdx',
    '../src/docs/*.mdx',
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-vitest',
    '@chromatic-com/storybook',
    '@storybook/addon-a11y',
    '@storybook/addon-designs',
    '@storybook/addon-docs',
    // TODO: this addon has a bad instrumentation of getConfig.asyncWrapper that should be fixed
    'storybook-addon-test-codegen',
  ],
  typescript: {
    reactDocgen: 'react-docgen',
  },
  staticDirs: ['../public'],
  framework: '@storybook/react-vite',
}
export default config
