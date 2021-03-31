import React from 'react'
import { Story, Meta } from '@storybook/react'

import { RestaurantsSection } from './RestaurantsSection'

export default {
  title: 'Features/RestaurantsSection',
  component: RestaurantsSection,
} as Meta

const Basic: Story<{ title: string }> = (args) => (
  <RestaurantsSection {...args} />
)

export const Default = Basic.bind({})
Default.args = {
  title: 'Near you',
}
