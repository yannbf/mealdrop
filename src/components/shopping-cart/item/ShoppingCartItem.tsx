import React from 'react';

import { CartItem } from '../../../app-state/cart';
import {
  CartItemContainer,
  ItemDetailsContainer,
} from './ShoppingCartItem.styles';

type Props = {
  item: CartItem;
};

export const ShoppingCartItem: React.FC<Props> = ({ item }) => {
  const { name, price, quantity } = item;
  return (
    <CartItemContainer>
      {/* <CartItemImage src={imageUrl} alt={`cart item ${name}`} /> */}
      <ItemDetailsContainer>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};
