import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Banner } from './Banner'

export default {
  title: 'Pages/HomePage/Components/Banner',
  component: Banner,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Banner>

const Template: ComponentStory<typeof Banner> = () => <Banner />

export const Desktop = Template.bind({})
export const Mobile = Template.bind({})
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
}
