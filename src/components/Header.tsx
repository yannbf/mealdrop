import React from 'react'
import styled, { css } from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import useDarkMode from 'use-dark-mode'

import {
  saveItemAction,
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
import { Logo } from './Logo'

export const HeaderContainer = styled.div<{ sticky: boolean }>(
  ({ sticky, theme: { color } }) => css`
    display: flex;
    justify-content: space-between;
    height: 56px;
    border-bottom: 1px solid ${color.headerBorder};
    top: 0;
    left: 0;
    position: fixed;
    background: ${color.headerBackground};
    z-index: 2;
    width: 100%;
    padding: 0 1.5rem;

    @media ${breakpoints.S} {
      padding: 0 4rem;
    }

    @media ${breakpoints.M} {
      position: ${sticky ? 'fixed' : 'relative'};
      height: 72px;
    }
  `
)

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

const ThemeToggle = () => {
  const darkMode = useDarkMode(false)
  return (
    <Button
      round
      clear
      icon={darkMode.value ? 'moon' : 'sun'}
      onClick={darkMode.toggle}
    />
  )
}

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
  saveItem,
}: any) => (
  <HeaderContainer data-testid="header" sticky={sticky}>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>
    {!logoOnly && (
      <>
        <OptionsContainer>
          <ThemeToggle />
          <Link to="/" tabIndex={-1}>
            <Button clear>Home</Button>
          </Link>
          <Link to="/categories" tabIndex={-1}>
            <Button clear>All restaurants</Button>
          </Link>
          <Button icon="cart" onClick={toggleCartVisibility}>
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
          onItemChange={saveItem}
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
  console.log({ cartItems, totalPrice })
  const toggleCartVisibility = () => dispatch(toggleVisibilityAction())
  const saveItem = (item: any) => dispatch(saveItemAction(item))

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
      saveItem={saveItem}
    />
  )
}
