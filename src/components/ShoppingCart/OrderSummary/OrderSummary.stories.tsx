import preview from '#.storybook/preview'

import { cartItems } from '../../../stub/cart-items'

import { OrderSummary } from './OrderSummary'

const meta = preview.meta({
  title: 'Components/OrderSummary',
  component: OrderSummary,
})

export const Default = meta.story({
  args: {
    cartItems,
  },
})
