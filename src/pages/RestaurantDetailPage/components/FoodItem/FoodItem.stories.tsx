import preview from '#.storybook/preview'
import { fn } from 'storybook/test'

import { FoodItem } from './FoodItem'

const meta = preview.meta({
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
})

export const Default = meta.story({
  args: {
    name: 'Food',
    price: 7.5,
    description: 'nice stuff',
  },
})

export const WithQuantity = meta.story({
  args: {
    ...Default.input.args,
    quantity: 5,
  },
})
