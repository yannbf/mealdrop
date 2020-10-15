import React from 'react'
import { Story, Meta } from '@storybook/react'
import { cartItems } from '../../../stub/cart-items'

import { OrderSummary, OrderSummaryProps } from './OrderSummary'

export default {
  title: 'Features/OrderSummary',
  component: OrderSummary,
} as Meta

export const Basic: Story<OrderSummaryProps> = (args) => (
  <OrderSummary {...args} />
)
Basic.args = {
  cartItems,
  isCheckout: false,
}

export const InCheckout = Basic.bind({})
InCheckout.args = {
  ...Basic.args,
  isCheckout: true,
}
