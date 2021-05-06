import { Story, Meta } from '@storybook/react'

import { TopBanner, TopBannerProps } from './TopBanner'

export default {
  title: 'Components/TopBanner',
  component: TopBanner,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const Template: Story<TopBannerProps> = (args) => <TopBanner {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Categories',
}

export const WithImage = Template.bind({})
WithImage.args = {
  ...Default.args,
  photoUrl:
    'https://images.unsplash.com/photo-1426869981800-95ebf51ce900?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=20',
}
