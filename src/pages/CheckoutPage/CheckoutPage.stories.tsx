import React from 'react'
import { Story, Meta } from '@storybook/react'

import { CheckoutPage } from './CheckoutPage'
import { withStore } from '../../../.storybook/decorators'

export default {
  title: 'Pages/CheckoutPage',
  component: CheckoutPage,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const Template: Story = (args) => <CheckoutPage {...args} />

export const Empty = Template.bind({})
Empty.decorators = [withStore()]

export const WithItems = Template.bind({})
WithItems.decorators = [
  withStore({
    cart: {
      visible: false,
      items: [
        {
          id: 2,
          name: 'Fries',
          description: 'Fried french fries',
          price: 2.5,
          quantity: 2,
        },
        {
          id: 1,
          name: 'Cheeseburger',
          description: 'Nice grilled burger with cheese',
          price: 8.5,
          quantity: 1,
        },
      ],
    },
  }),
]
