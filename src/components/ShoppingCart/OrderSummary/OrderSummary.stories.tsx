import { Story, Meta } from '@storybook/react'

import { cartItems } from '../../../stub/cart-items'
import { OrderSummary, OrderSummaryProps } from './OrderSummary'

export default {
  title: 'Features/OrderSummary',
  component: OrderSummary,
} as Meta

export const Default: Story<OrderSummaryProps> = (args) => (
  <OrderSummary {...args} />
)
Default.args = {
  cartItems,
}
