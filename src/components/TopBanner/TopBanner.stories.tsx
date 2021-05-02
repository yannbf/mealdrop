import { Story, Meta } from '@storybook/react'

import { TopBanner } from './TopBanner'

export default {
  title: 'Components/TopBanner',
  component: TopBanner,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const Basic: Story = (args) => <TopBanner {...args} />

export const Default = Basic.bind({})
Default.args = {
  title: 'Categories',
}

export const WithImage = Basic.bind({})
WithImage.args = {
  ...Default.args,
  photoUrl:
    'https://images.unsplash.com/photo-1426869981800-95ebf51ce900?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=20',
}
