import styled, { css, useTheme } from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import useDarkMode from 'use-dark-mode'
import { Tooltip } from '@base-ui/react/tooltip'
import { Button as BaseButton } from '@base-ui/react/button'
import theme from '@droppy/theme'

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
import { Icon } from '../Icon'
import { toCurrency } from '../../helpers'
import { Body } from '../typography/Body'
import { Logo } from '../Logo'

export const HeaderContainer = styled.div<{ $sticky: boolean }>(
  ({ $sticky, theme: { color } }) => css`
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
      position: ${$sticky ? 'sticky' : 'relative'};
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

// Everything below is what used to live in the app's Button wrapper — now
// duplicated at each variant this file needs, by design (milestone 1 has no
// shared Button wrapper). theme.Button carries the base chrome via
// @droppy/theme/styles.css.

// "clear" variant, plain size (Home / All restaurants nav links).
const ClearButton = styled(BaseButton)`
  z-index: 1;
  color: var(--ds-color-text-primary);
  background-color: transparent;

  &:hover:not([data-disabled]) {
    background-color: var(--ds-color-action-subtle-hover);
  }

  &[data-disabled] {
    background-color: transparent;
  }

  @media ${breakpoints.M} {
    padding: 0.875rem 1.5rem;
  }
`

// icon variant, no "clear" (the cart button — solid fill).
const CartButton = styled(BaseButton)`
  z-index: 1;
  padding: 0.7rem;

  @media ${breakpoints.M} {
    padding: 1rem;
  }
`

// round + clear + icon-only variant (theme toggle).
const RoundClearIconButton = styled(BaseButton)`
  z-index: 1;
  padding: 0.7rem;
  border-radius: var(--ds-radius-pill);
  color: var(--ds-color-text-primary);
  background-color: transparent;

  &:hover:not([data-disabled]) {
    background-color: var(--ds-color-action-subtle-hover);
  }

  &[data-disabled] {
    background-color: transparent;
  }

  @media ${breakpoints.M} {
    padding: 1rem;
  }
`

const TooltipPopup = styled(Tooltip.Popup)`
  z-index: 3;
`

const ThemeToggle = () => {
  const darkMode = useDarkMode(false, { global: globalThis.window })
  const label = `turn on ${darkMode.value ? 'light' : 'dark'} mode`
  return (
    <Tooltip.Root>
      <Tooltip.Trigger
        render={
          <RoundClearIconButton
            className={theme.Button}
            aria-label={label}
            onClick={darkMode.toggle}
          >
            <Icon name={darkMode.value ? 'moon' : 'sun'} />
          </RoundClearIconButton>
        }
      />
      <Tooltip.Portal>
        <Tooltip.Positioner sideOffset={8}>
          <TooltipPopup className={theme.TooltipPopup}>{label}</TooltipPopup>
        </Tooltip.Positioner>
      </Tooltip.Portal>
    </Tooltip.Root>
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
}: HeaderComponentProps) => {
  const { color } = useTheme()

  return (
    <HeaderContainer data-testid="header" $sticky={sticky}>
      <LogoContainer to="/" aria-label="go to home page">
        <Logo />
      </LogoContainer>
      {!logoOnly && (
        <>
          <OptionsContainer>
            <span className="navigation-items">
              <ThemeToggle />
              <Link to="/" tabIndex={-1}>
                <ClearButton className={theme.Button}>Home</ClearButton>
              </Link>
              <Link to="/categories" tabIndex={-1}>
                <ClearButton className={theme.Button}>All restaurants</ClearButton>
              </Link>
            </span>
            <CartButton
              className={theme.Button}
              aria-label="food cart"
              onClick={toggleCartVisibility}
            >
              <Icon name="cart" color={color.buttonText} />
              {totalPrice > 0 && (
                <>
                  <CartText type="span">Order</CartText>
                  <CartTotal type="span">{toCurrency(totalPrice)}</CartTotal>
                </>
              )}
            </CartButton>
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
}

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
