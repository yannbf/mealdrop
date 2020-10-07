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
import { ShoppingCartMenu } from './ShoppingCartMenu'
import { Button } from './Button'
import { toEuro } from '../helpers'
import { Body } from './typography/Body'

export const HeaderContainer = styled.div<{ sticky: boolean }>`
  display: flex;
  justify-content: space-between;
  height: 56px;
  border-bottom: 1px solid #e3e3e3;
  top: 0;
  left: 0;
  position: fixed;
  background: white;
  z-index: 2;
  width: 100%;

  @media ${breakpoints.M} {
    position: ${({ sticky }) => (sticky ? 'fixed' : 'relative')};
    height: 72px;
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

  a {
    margin-right: 0.5rem;
  }

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`

export const StyledBody = styled(Body)`
  color: white;
  span {
    display: none;
  }

  @media ${breakpoints.M} {
    span {
      display: inline-block;
      color: #949494;
      margin-right: 0.25rem;
    }
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
  <HeaderContainer data-testid="header" className="container" sticky={sticky}>
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
          <Link to="/" tabIndex={-1}>
            <Button clear>Home</Button>
          </Link>
          <Link to="/categories" tabIndex={-1}>
            <Button clear>All restaurants</Button>
          </Link>
          <Button icon="cart" primary onClick={toggleCartVisibility}>
            {totalPrice > 0 && (
              <StyledBody type="span">
                <Body type="span" className="cart-text">
                  Order
                </Body>
                {toEuro(totalPrice)}
              </StyledBody>
            )}
          </Button>
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
