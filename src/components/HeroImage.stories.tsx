import React from 'react'
import { Story, Meta } from '@storybook/react'

import { HeroImage, HeroImageProps } from './HeroImage'

export default {
  title: 'HeroImage',
  component: HeroImage,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta
 
const Basic: Story<HeroImageProps> = (args) => <HeroImage {...args} />

export const Default = Basic.bind({})
Default.args = {
  url:
    'https://duyt4h9nfnj50.cloudfront.net/sku/57864fe0d398139ac2175e7457c63954',
}
