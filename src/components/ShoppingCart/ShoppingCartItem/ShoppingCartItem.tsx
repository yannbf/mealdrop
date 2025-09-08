import { CartItem } from '../../../app-state/cart'
import { toCurrency } from '../../../helpers'

import { CartItemContainer, Quantity, Name, Price } from './ShoppingCartItem.styles'

type ShoppingCartItemProps = {
  item: CartItem
}

export const ShoppingCartItem = ({ item }: ShoppingCartItemProps) => {
  const { name, price, quantity } = item
  return (
    <CartItemContainer>
      <Quantity type="span">{quantity}</Quantity>
      <Name type="span">{name}</Name>
      <Price type="span">{toCurrency(quantity * price)}</Price>
    </CartItemContainer>
  )
}
