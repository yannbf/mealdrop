import React from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {
  selectCartItems,
  selectCartTotal,
  selectCartVisibility,
  toggleVisibilityAction,
} from '../app-state/cart'
import { breakpoints } from '../styles/breakpoints'
import { ShoppingCartButton } from './shopping-cart'
import { ShoppingCartMenu } from './ShoppingCartMenu'

export const HeaderContainer = styled.div<{ sticky: boolean }>`
  display: flex;
  justify-content: space-between;
  box-shadow: rgb(226, 226, 226) 0px -2px 0px inset;
  height: 56px;
  top: 0;
  left: 0;
  position: fixed;
  background: white;
  z-index: 2;
  width: 100%;

  @media ${breakpoints.M} {
    position: ${({ sticky }) => (sticky ? 'fixed' : 'relative')};
    height: 70px;
  }
`

export const LogoContainer = styled(Link)`
  width: 40px;
  display: flex;
  padding-left: 1rem;

  & img {
    width: 100%;
  }

  @media screen and (max-width: 800px) {
    width: 30px;
    padding: 0;
  }
`

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  border: none;
  background: transparent;
  font-size: inherit;
  font-family: inherit;

  &:hover {
    font-weight: bold;
  }

  @media screen and (max-width: 800px) {
    padding: 10px 7px;
  }
`

export type HeaderComponentProps = {
  isCartVisible: boolean
}

export const HeaderComponent = ({
  isCartVisible,
  cartItems,
  toggleCartVisibility,
  goToCheckout,
  totalPrice,
  logoOnly = false,
  sticky = false,
}: any) => (
  <HeaderContainer data-testid="header" sticky={sticky}>
    <LogoContainer to="/">
      <img
        src="https://image.flaticon.com/icons/svg/1046/1046784.svg"
        className="App-logo"
        alt="logo"
      />
    </LogoContainer>
    {!logoOnly && (
      <>
        <OptionsContainer>
          <OptionLink to="/">HOME</OptionLink>
          <OptionLink to="/categories">CATEGORIES</OptionLink>
          <ShoppingCartButton
            count={cartItems.length}
            onClick={toggleCartVisibility}
          />
        </OptionsContainer>
        <ShoppingCartMenu
          isOpen={isCartVisible}
          onClose={toggleCartVisibility}
          onGoToCheckoutClick={goToCheckout}
          cartItems={cartItems}
          totalPrice={totalPrice}
        />
      </>
    )}
  </HeaderContainer>
)

export const Header = ({ sticky }: any) => {
  const isCartVisible = useSelector(selectCartVisibility)
  const cartItems = useSelector(selectCartItems)
  const totalPrice = useSelector(selectCartTotal)
  const dispatch = useDispatch()
  const history = useHistory()
  const toggleCartVisibility = () => dispatch(toggleVisibilityAction())

  const goToCheckout = () => {
    toggleCartVisibility()
    history.push('/checkout')
  }

  return (
    <HeaderComponent
      sticky={sticky}
      goToCheckout={goToCheckout}
      cartItems={cartItems}
      isCartVisible={isCartVisible}
      toggleCartVisibility={toggleCartVisibility}
      totalPrice={totalPrice}
    />
  )
}
