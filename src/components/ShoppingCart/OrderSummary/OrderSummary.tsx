import { useMemo } from 'react'

import { ShoppingCartItem } from '../ShoppingCartItem/ShoppingCartItem'
import { CartItem } from '../../../app-state/cart'
import { Body } from '../../typography/Body'
import { toEuro } from '../../../helpers'

import {
  OrderSummaryContainer,
  BottomContainer,
  CartItemsContainer,
  StyledHeading,
} from './OrderSummary.styles'

type OrderSummaryProps = {
  cartItems: CartItem[]
}

export const OrderSummary = ({ cartItems }: OrderSummaryProps) => {
  const totalPrice = useMemo(
    () => cartItems.map((item) => item.quantity * item.price).reduce((acc, next) => acc + next, 0),
    [cartItems]
  )
  return (
    <>
      <OrderSummaryContainer>
        <StyledHeading level={2} withMargin>
          Your order
        </StyledHeading>
        <CartItemsContainer>
          {cartItems.length ? (
            cartItems.map((item) => <ShoppingCartItem key={item.id} item={item} />)
          ) : (
            <Body>Your cart is empty.</Body>
          )}
        </CartItemsContainer>
        <BottomContainer>
          <Body>Total</Body>
          <StyledHeading level={2}>{toEuro(totalPrice)}</StyledHeading>
        </BottomContainer>
      </OrderSummaryContainer>
    </>
  )
}
