import React from 'react'

import { ShoppingCartItem } from '../item/ShoppingCartItem'
import { CartItem } from '../../../app-state/cart'

import {
  CartDropdownContainer,
  EmptyMessageContainer,
  CartDropdownButton,
  CartItemsContainer,
} from './ShoppingCartDropdown.styles'

type DefaultProps = {
  cartItems: CartItem[]
  onGoToCheckoutClick: () => void
}

type Props = DefaultProps

export const ShoppingCartDropdown: React.FC<Props> = ({
  cartItems,
  onGoToCheckoutClick,
}) => {
  return (
    <>
      <CartDropdownContainer>
        <CartItemsContainer>
          {cartItems.length ? (
            cartItems.map((item) => (
              <ShoppingCartItem key={item.id} item={item}></ShoppingCartItem>
            ))
          ) : (
            <EmptyMessageContainer>Your cart is empty.</EmptyMessageContainer>
          )}
        </CartItemsContainer>
        <CartDropdownButton
          label="To checkout"
          onClick={onGoToCheckoutClick}
        />
      </CartDropdownContainer>
    </>
  )
}
