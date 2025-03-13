import { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/docs/*.mdx', '../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
        backgrounds: false,
      },
    },
    '@storybook/experimental-addon-test',
    // '@chromatic-com/storybook',
    '@storybook/addon-a11y',
    // '@storybook/addon-designs',
    'storybook-addon-test-codegen',
  ],
  typescript: {
    reactDocgen: 'react-docgen',
  },
  staticDirs: ['../public'],
  framework: '@storybook/react-vite',
}
export default config
