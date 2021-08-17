import { ComponentStory, ComponentMeta } from '@storybook/react'

import { CheckoutPage } from './CheckoutPage'

export default {
  title: 'Pages/CheckoutPage',
  component: CheckoutPage,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof CheckoutPage>

const Template: ComponentStory<typeof CheckoutPage> = () => <CheckoutPage />

export const Empty = Template.bind({})

export const WithItems = Template.bind({})
WithItems.parameters = {
  store: {
    initialState: {
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
    },
  },
}
