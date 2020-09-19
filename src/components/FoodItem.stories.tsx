import { Story } from '@storybook/react'
import React from 'react'
import { FoodItem } from './FoodItem'

export default {
  title: 'FoodItem',
  component: FoodItem,
}

const Template: Story = (args: any) => <FoodItem {...args} />

export const Default = Template.bind({})
Default.args = {
  item: {
    id: 1,
    name: 'Food',
    price: 7.5,
    description: 'nice stuff',
  },
}

export const WithQuantity = Template.bind({})
WithQuantity.args = {
  item: {
    ...Default.args.item,
    quantity: 5,
  },
}
