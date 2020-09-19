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
        .reduce((acc, next) => acc + next),
    [cartItems]
  )
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
          <p>Total: ${totalPrice}</p>
        </CartItemsContainer>
        {!isCheckout && (
          <CartDropdownButton label="To pay" onClick={onGoToCheckoutClick} />
        )}
      </CartDropdownContainer>
    </>
  )
}
