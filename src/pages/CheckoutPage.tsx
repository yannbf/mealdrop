import React from 'react'

import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartItems } from '../app-state/cart'
import { ShoppingCartItem } from '../components/shopping-cart'
import { EmptyMessageContainer } from '../components/shopping-cart/dropdown/ShoppingCartDropdown.styles'
import { Button } from '../components/Button'

export const CheckoutPage = () => {
  const history = useHistory()
  const cartItems = useSelector(selectCartItems)
  return (
    <div>
      {cartItems.length ? (
        cartItems.map((item) => (
          <ShoppingCartItem key={item.id} item={item}></ShoppingCartItem>
        ))
      ) : (
        <EmptyMessageContainer>Your cart is empty.</EmptyMessageContainer>
      )}

      <Button label="Success" onClick={() => history.push('/success')} />
    </div>
  )
}
