import { Story, Meta } from '@storybook/react'

import { Banner } from './Banner'

export default {
  title: 'Components/Banner',
  component: Banner,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const Template: Story = () => <Banner />

export const Desktop = Template.bind({})
export const Mobile = Template.bind({})
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
}
