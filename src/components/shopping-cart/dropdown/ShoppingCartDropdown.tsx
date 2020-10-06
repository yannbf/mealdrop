import React, { useMemo } from 'react'

import { ShoppingCartItem } from '../item/ShoppingCartItem'
import { CartItem } from '../../../app-state/cart'

import {
  CartDropdownContainer,
  EmptyMessageContainer,
  CartDropdownButton,
  CartItemsContainer,
} from './ShoppingCartDropdown.styles'

export type ShoppingCartDropdownProps = {
  cartItems: CartItem[]
  onGoToCheckoutClick?: () => void
  isCheckout?: boolean
}

export const ShoppingCartDropdown: React.FC<ShoppingCartDropdownProps> = ({
  cartItems,
  onGoToCheckoutClick,
  isCheckout = false,
}) => {
  const totalPrice = useMemo(
    () =>
      cartItems
        .map((item) => item.quantity * item.price)
        .reduce((acc, next) => acc + next, 0),
    [cartItems]
  )
  return (
    <>
      <CartDropdownContainer fixed={!isCheckout}>
        <CartItemsContainer>
          {cartItems.length ? (
            cartItems.map((item) => (
              <ShoppingCartItem key={item.id} item={item}></ShoppingCartItem>
            ))
          ) : (
            <EmptyMessageContainer>Your cart is empty.</EmptyMessageContainer>
          )}
          <p>Total: ${totalPrice}</p>
        </CartItemsContainer>
        {!isCheckout && cartItems.length > 0 && (
          <CartDropdownButton onClick={onGoToCheckoutClick}>
            To pay
          </CartDropdownButton>
        )}
      </CartDropdownContainer>
    </>
  )
}
