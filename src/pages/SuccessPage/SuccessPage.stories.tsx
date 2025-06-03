import preview from '#.storybook/preview'

import { SuccessPage } from './SuccessPage'

const meta = preview.meta({
  title: 'Pages/SuccessPage',
  component: SuccessPage,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figspec',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=426%3A3444',
    },
  },
})

export const Default = meta.story({
  parameters: {
    store: {
      initialState: {
        order: {
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
