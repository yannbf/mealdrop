import { ComponentStoryFn, ComponentMeta } from '@storybook/react'

import { cartItems } from '../../../stub/cart-items'

import { OrderSummary } from './OrderSummary'

export default {
  title: 'Components/OrderSummary',
  component: OrderSummary,
} as ComponentMeta<typeof OrderSummary>

export const Default: ComponentStoryFn<typeof OrderSummary> = (args) => <OrderSummary {...args} />
Default.args = {
  cartItems,
}
