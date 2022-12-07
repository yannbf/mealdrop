import { StoryFn, Meta } from '@storybook/react'

import { Banner } from './Banner'

export default {
  title: 'Pages/HomePage/Components/Banner',
  component: Banner,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof Banner>

const Template: StoryFn<typeof Banner> = () => <Banner />

export const Desktop = Template.bind({})
export const Mobile = Template.bind({})
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
}
