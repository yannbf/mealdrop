import React from 'react'
import styled from 'styled-components'

import { CartItem } from '../app-state/cart'
import { toEuro } from '../helpers'
import { Button } from './Button'
import { Select } from './forms/Select'
import { Sidebar } from './Sidebar'
import { Body } from './typography/Body'

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
`

const TotalSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`

const Footer = ({ onClick, totalPrice }: any) => (
  <FooterContainer>
    <TotalSection>
      <Body as="span">Total</Body>
      <Body as="span">{toEuro(totalPrice)}</Body>
    </TotalSection>
    <Button large primary onClick={onClick} label="Checkout" />
  </FooterContainer>
)

const MenuItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  > div:first-of-type {
    padding-right: 1rem;
    flex: 0.75;
  }

  > div:last-of-type {
    flex: 0.25;
  }
`

const ShoppingCartMenuItem = ({ item }: any) => (
  <MenuItemContainer>
    <div>
      <Body as="span">{item.name}</Body>
      <Body>{item.description}</Body>
      <Body>{toEuro(item.price * item.quantity)}</Body>
    </div>
    <Select value={item.quantity} options={[...Array(11).keys()]} />
  </MenuItemContainer>
)

export type ShoppingCartMenuProps = {
  isOpen: boolean
  totalPrice: number
  onClose: () => void
  cartItems: CartItem[]
  onGoToCheckoutClick?: () => void
}

export const ShoppingCartMenu: React.FC<ShoppingCartMenuProps> = ({
  isOpen,
  onClose,
  cartItems,
  totalPrice,
  onGoToCheckoutClick,
}) => {
  return (
    <Sidebar
      title="Your orders"
      onClose={onClose}
      isOpen={isOpen}
      footer={<Footer onClick={onGoToCheckoutClick} totalPrice={totalPrice} />}
    >
      <div style={{ display: 'grid', gap: '24px' }}>
        {cartItems.map((item) => (
          <ShoppingCartMenuItem item={item} />
        ))}
      </div>
    </Sidebar>
  )
}
