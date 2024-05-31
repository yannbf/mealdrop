import { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: [
    '../src/docs/Introduction.mdx',
    '../src/docs/*.mdx',
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-coverage',
    '@storybook/addon-designs',
    '@chromatic-com/storybook',
  ],
  typescript: {
    reactDocgen: 'react-docgen',
  },
  staticDirs: ['../public'],
  framework: '@storybook/react-vite',
}
export default config
