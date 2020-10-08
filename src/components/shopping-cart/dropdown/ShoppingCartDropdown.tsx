import React, { useMemo } from 'react'

import { ShoppingCartItem } from '../item/ShoppingCartItem'
import { CartItem } from '../../../app-state/cart'

import {
  CartDropdownContainer,
  BottomContainer,
  CartItemsContainer,
  StyledHeading
} from './ShoppingCartDropdown.styles'
import { Body } from '../../typography/Body'
import { toEuro } from '../../../helpers'
import { Heading } from '../../typography/Heading'

export type ShoppingCartDropdownProps = {
  cartItems: CartItem[]
  onGoToCheckoutClick?: () => void
  isCheckout?: boolean
}

export const ShoppingCartDropdown: React.FC<ShoppingCartDropdownProps> = ({
  cartItems,
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
      <CartDropdownContainer>
        <StyledHeading level={4}>Your order</StyledHeading>
        <CartItemsContainer>
          {cartItems.length ? (
            cartItems.map((item) => (
              <ShoppingCartItem key={item.id} item={item}></ShoppingCartItem>
            ))
          ) : (
            <Body>Your cart is empty.</Body>
          )}
        </CartItemsContainer>
        <BottomContainer>
          <Body>Total</Body>
          <Heading level={4}>{toEuro(totalPrice)}</Heading>
        </BottomContainer>
      </CartDropdownContainer>
    </>
  )
}
