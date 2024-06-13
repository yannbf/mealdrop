import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { FoodItem } from './FoodItem'

const meta = {
  title: 'Pages/RestaurantDetailPage/Components/FoodItem',
  component: FoodItem,
  args: {
    /* 
    The following line emulates the event handler that would be passed to the component
    Read more about the `fn` utility function at
    https://storybook.js.org/docs/essentials/actions#via-storybooktest-fn-spy-function 
    */
    onClick: fn(),
  },
} satisfies Meta<typeof FoodItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'Food',
    price: 7.5,
    description: 'nice stuff',
  },
}

export const WithQuantity: Story = {
  args: {
    ...Default.args,
    quantity: 5,
  },
}
