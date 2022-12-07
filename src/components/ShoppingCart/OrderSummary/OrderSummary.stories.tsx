import { StoryFn, Meta } from '@storybook/react'

import { cartItems } from '../../../stub/cart-items'

import { OrderSummary } from './OrderSummary'

export default {
  title: 'Components/OrderSummary',
  component: OrderSummary,
} as Meta<typeof OrderSummary>

export const Default: StoryFn<typeof OrderSummary> = (args) => <OrderSummary {...args} />
Default.args = {
  cartItems,
}
