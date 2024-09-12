import { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@chromatic-com/storybook',
    '@storybook/addon-a11y',
    '@storybook/addon-designs',
    '@storybook/experimental-addon-test'
  ],
  staticDirs: ['../public'],
  framework: '@storybook/react-vite',
}
export default config
