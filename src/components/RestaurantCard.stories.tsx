import React from 'react'
import { Story, Meta } from '@storybook/react'

import { RestaurantCard, RestaurantCardProps } from './RestaurantCard'

export default {
  title: 'Components/RestaurantCard',
  component: RestaurantCard,
  parameters: {
    viewport: {
      defaultViewport: 'breakpointXS',
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/XW4Bcjmj3JOILjKmZjjdQd/Foodenters?node-id=332%3A1644',
    },
  },
} as Meta

const restaurantMock = {
  name: 'Burger King',
  specialty: 'Nicest place for burgers',
  categories: ['comfort-food'],
  photoUrl:
    'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1003&q=20',
  menu: {
    dessert: [],
    food: [],
    drinks: [],
  },
}

const Basic: Story<RestaurantCardProps> = (args) => <RestaurantCard {...args} />

export const Default = Basic.bind({})
Default.args = restaurantMock

export const New = Basic.bind({})
New.args = {
  ...Default.args,
  isNew: true,
}

export const Closed = Basic.bind({})
Closed.args = {
  ...Default.args,
  isClosed: true,
}

export const Loading = Basic.bind({})
Loading.args = {
  ...Default.args,
  isLoading: true,
}
