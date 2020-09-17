import React from 'react'
import {
  CartContainer,
  ItemCountContainer,
  ShoppingIcon,
} from './ShoppingCartButton.styles'

type Props = {
  count?: number
  onClick: () => void
}

export const ShoppingCartButton: React.FC<Props> = ({
  count = 0,
  onClick,
}) => (
  <CartContainer onClick={onClick}>
    <ShoppingIcon />
    <ItemCountContainer>{count}</ItemCountContainer>
  </CartContainer>
)