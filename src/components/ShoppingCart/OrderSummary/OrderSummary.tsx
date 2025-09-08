import { useMemo } from 'react'

import { ShoppingCartItem } from '../ShoppingCartItem/ShoppingCartItem'
import { CartItem } from '../../../app-state/cart'
import { Body } from '../../typography/Body'
import { toCurrency } from '../../../helpers'

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
        <StyledHeading level={3} $withMargin>
          Your order
        </StyledHeading>
        <CartItemsContainer>
          {cartItems.length > 0 ? (
            cartItems.map((item) => <ShoppingCartItem key={item.id} item={item} />)
          ) : (
            <Body>Your cart is empty.</Body>
          )}
        </CartItemsContainer>
        <BottomContainer>
          <Body>Total</Body>
          <StyledHeading level={2}>{toCurrency(totalPrice)}</StyledHeading>
        </BottomContainer>
      </OrderSummaryContainer>
    </>
  )
}
