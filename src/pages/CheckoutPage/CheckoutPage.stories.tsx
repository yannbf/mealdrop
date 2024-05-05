import { StoryFn, Meta } from '@storybook/react'

import { CheckoutPage } from './CheckoutPage'

export default {
  title: 'Pages/CheckoutPage',
  component: CheckoutPage,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=426-3291&mode=design&t=PGeoMU7t8HOFToQL-4',
    },
  },
} as Meta<typeof CheckoutPage>

const Template: StoryFn<typeof CheckoutPage> = () => <CheckoutPage />

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
