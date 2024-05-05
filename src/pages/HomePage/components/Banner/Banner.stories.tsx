import { StoryFn, Meta } from '@storybook/react'

import { Banner } from './Banner'

export default {
  title: 'Pages/HomePage/Components/Banner',
  component: Banner,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=1690-5067&mode=design&t=PGeoMU7t8HOFToQL-4',
    },
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
