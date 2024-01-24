import { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/Bug.mdx'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    // '@storybook/addon-a11y',
    // '@storybook/addon-coverage',
    // '@storybook/addon-designs',
  ],
  typescript: {
    reactDocgen: 'react-docgen',
  },
  staticDirs: ['../public'],
  framework: '@storybook/react-vite',
  docs: {
    autodocs: 'tag',
  },
}
export default config
