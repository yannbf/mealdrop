import styled, { css } from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import useDarkMode from 'use-dark-mode'

import { useAppDispatch, useAppSelector } from '../../app-state'
import {
  CartItem,
  saveItemAction,
  selectCartItems,
  selectCartTotal,
  selectCartVisibility,
  toggleVisibilityAction,
} from '../../app-state/cart'
import { breakpoints } from '../../styles/breakpoints'
import { ShoppingCartMenu } from '../ShoppingCartMenu'
import { Button } from '../Button'
import { toEuro } from '../../helpers'
import { Body } from '../typography/Body'
import { Logo } from '../Logo'

export const HeaderContainer = styled.div<{ sticky: boolean }>(
  ({ sticky, theme: { color } }) => css`
    display: flex;
    justify-content: space-between;
    height: 56px;
    border-bottom: 1px solid ${color.headerBorder};
    top: 0;
    left: 0;
    position: sticky;
    background: ${color.headerBackground};
    z-index: 2;
    width: 100%;
    padding: 0 1.5rem;

    @media ${breakpoints.S} {
      padding: 0 4rem;
    }

    @media ${breakpoints.M} {
      position: ${sticky ? 'sticky' : 'relative'};
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

  .navigation-items {
    display: none;
  }

  a {
    margin-right: 0.5rem;
  }

  @media ${breakpoints.M} {
    .navigation-items {
      display: contents;
    }
    width: 80%;
  }
`

export const CartText = styled(Body)(
  ({ theme: { color } }) => css`
    display: none;
    @media ${breakpoints.M} {
      display: inline-block;
      color: ${color.cartButtonText};
      margin-right: 0.25rem;
    }
  `
)

export const CartTotal = styled(Body)(
  ({ theme: { color } }) => css`
    display: inline-block;
    color: ${color.buttonText};
  `
)

const ThemeToggle = () => {
  const darkMode = useDarkMode(false)
  return (
    <Button
      round
      clear
      aria-label={`turn on ${darkMode.value ? 'light' : 'dark'} mode`}
      icon={
        darkMode.value ? (
          <>
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </>
        ) : (
          <>
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </>
        )
      }
      onClick={darkMode.toggle}
    />
  )
}

type HeaderComponentProps = {
  isCartVisible?: boolean
  cartItems?: CartItem[]
  totalPrice?: number
  logoOnly?: boolean
  sticky?: boolean
  toggleCartVisibility?: () => void
  goToCheckout?: () => void
  saveItem?: (item: CartItem) => void
}

export const HeaderComponent = ({
  isCartVisible = false,
  logoOnly = false,
  sticky = false,
  totalPrice = 0,
  cartItems = [],
  toggleCartVisibility = () => {},
  goToCheckout = () => {},
  saveItem = () => {},
}: HeaderComponentProps) => (
  <HeaderContainer data-testid="header" sticky={sticky}>
    <LogoContainer to="/" aria-label="go to home page">
      <Logo />
    </LogoContainer>
    {!logoOnly && (
      <>
        <OptionsContainer>
          <span className="navigation-items">
            <ThemeToggle />
            <Link to="/" tabIndex={-1}>
              <Button clear>Home</Button>
            </Link>
            <Link to="/categories" tabIndex={-1}>
              <Button clear>All restaurants</Button>
            </Link>
          </span>
          <Button
            aria-label="food cart"
            icon={
              <>
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </>
            }
            onClick={toggleCartVisibility}
          >
            {totalPrice > 0 && (
              <>
                <CartText type="span">Order</CartText>
                <CartTotal type="span">{toEuro(totalPrice)}</CartTotal>
              </>
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

export const Header = ({ sticky }: { sticky?: boolean }) => {
  const isCartVisible = useAppSelector(selectCartVisibility)
  const cartItems = useAppSelector(selectCartItems)
  const totalPrice = useAppSelector(selectCartTotal)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const toggleCartVisibility = () => dispatch(toggleVisibilityAction())
  const saveItem = (item: CartItem) => dispatch(saveItemAction(item))

  const goToCheckout = () => {
    toggleCartVisibility()
    navigate('/checkout')
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
