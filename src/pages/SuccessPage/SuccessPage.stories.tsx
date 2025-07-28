import { Meta, StoryObj } from '@storybook/react-vite'

import { SuccessPage } from './SuccessPage'

const meta = {
  title: 'Pages/SuccessPage',
  component: SuccessPage,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figspec',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=426%3A3444',
    },
  },
} satisfies Meta<typeof SuccessPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
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
}
