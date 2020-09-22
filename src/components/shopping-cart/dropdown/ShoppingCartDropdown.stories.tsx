import React from 'react'
import { Story, Meta } from '@storybook/react'
import { cartItems } from '../../../stub/cart-items'

import {
  ShoppingCartDropdown,
  ShoppingCartDropdownProps,
} from './ShoppingCartDropdown'

export default {
  title: 'Features/ShoppingCartDropdown',
  component: ShoppingCartDropdown,
} as Meta

export const Basic: Story<ShoppingCartDropdownProps> = (args) => (
  <ShoppingCartDropdown {...args} />
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
