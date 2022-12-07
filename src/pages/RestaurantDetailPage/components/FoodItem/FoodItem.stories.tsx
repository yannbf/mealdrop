import { StoryFn, Meta } from '@storybook/react'

import { FoodItem } from './FoodItem'

export default {
  title: 'Pages/RestaurantDetailPage/Components/FoodItem',
  component: FoodItem,
} as Meta<typeof FoodItem>

const Template: StoryFn<typeof FoodItem> = (args) => <FoodItem {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'Food',
  price: 7.5,
  description: 'nice stuff',
}

export const WithQuantity = Template.bind({})
WithQuantity.args = {
  ...Default.args,
  quantity: 5,
}
