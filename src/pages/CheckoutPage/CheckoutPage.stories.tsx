import preview from '#.storybook/preview'

import { CheckoutPage } from './CheckoutPage'

const meta = preview.meta({
  title: 'Pages/CheckoutPage',
  component: CheckoutPage,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=426-3291&mode=design&t=PGeoMU7t8HOFToQL-4',
    },
  },
})

export const Empty = meta.story({})

export const WithItems = meta.story({
  parameters: {
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
  },
})
