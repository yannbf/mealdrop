import { Meta, Story } from '@storybook/react'

import { FoodItem, FoodItemProps } from './FoodItem'

export default {
  title: 'Components/FoodItem',
  component: FoodItem,
} as Meta

const Template: Story<FoodItemProps> = (args) => <FoodItem {...args} />

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
