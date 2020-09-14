import React from 'react'
import { Story, Meta } from '@storybook/react'

import { RestaurantCard, RestaurantCardProps } from './RestaurantCard'

export default {
  title: 'RestaurantCard',
  component: RestaurantCard,
} as Meta

const Basic: Story<RestaurantCardProps> = (args) => <RestaurantCard {...args} />

export const Default = Basic.bind({})
Default.args = {
  restaurant: {
    name: 'Burger King',
    specialty: 'Nicest place for burgers',
    photoUrl:
      'https://duyt4h9nfnj50.cloudfront.net/sku/57864fe0d398139ac2175e7457c63954',
  },
}
