import { Drawer } from '@base-ui/react/drawer'
import { Button as BaseButton } from '@base-ui/react/button'
import theme from '@droppy/theme'
import styled from 'styled-components'

import { CartItem } from '../../app-state/cart'
import { toCurrency } from '../../helpers'
import { breakpoints } from '../../styles/breakpoints'
import { Select } from '../forms/Select'
import { Icon } from '../Icon'
import { Body, Heading } from '../typography'

// Everything below through DrawerFooter replicates what used to live in the
// (now-dissolved) Sidebar component + its .styles module. Duplicated here by
// design — milestone 1 has no shared Drawer wrapper, so this composition
// pays the class-binding tax at its one call site.

const DrawerBackdrop = styled(Drawer.Backdrop)`
  z-index: 98;
`

const DrawerViewport = styled(Drawer.Viewport)`
  position: fixed;
  inset: 0;
  z-index: 99;
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
`

const DrawerPopup = styled(Drawer.Popup)`
  position: relative;
  inset: auto;
  height: 100%;
  width: 100%;
  transform: translateX(0);
  transition: transform var(--ds-motion-slow) var(--ds-motion-ease);
  will-change: transform;

  &[data-starting-style],
  &[data-ending-style] {
    transform: translateX(100%);
  }

  @media ${breakpoints.M} {
    width: 420px;
  }
`

const DrawerContent = styled.div`
  padding: 1.5rem;
  overflow: auto;
  max-height: calc(100vh - 237px); /** viewport height - topbar - footer */
`

const TopBar = styled.div(
  ({ theme: { color } }) => `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    padding-right: 1rem;
    height: 4.5rem;
    background-color: ${color.overlayHeader};
  `
)

const DrawerFooter = styled.div(
  ({ theme: { color } }) => `
    background-color: ${color.sidebarFooter};
    display: flex;
    padding: 1.5rem;
    bottom: 0;
    height: 165px;
    width: 100%;
    border-top: 1px solid ${color.headerBorder};
    position: absolute;
  `
)

// theme.Button, round + clear + icon-only variant (same shape as the
// close/decrease/increase buttons elsewhere — duplicated per call site).
const CloseButton = styled(BaseButton)`
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

// theme.Button, "large" variant.
const CheckoutButton = styled(BaseButton)`
  z-index: 1;
  padding: 1.125rem 1rem;

  @media ${breakpoints.M} {
    padding: 1.125rem 1.5rem;
  }
`

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
      <Body type="span">Total</Body>
      <Body type="span">{toCurrency(totalPrice)}</Body>
    </TotalSection>
    <CheckoutButton className={theme.Button} disabled={totalPrice === 0} onClick={onClick}>
      Checkout
    </CheckoutButton>
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

const ShoppingCartMenuItem = ({ item, onChange }: any) => (
  <MenuItemContainer>
    <div>
      <Body type="span" fontWeight="medium">
        {item.name}
      </Body>
      <Body>{item.description}</Body>
      <Body>{toCurrency(item.price * item.quantity)}</Body>
    </div>
    <Select
      value={item.quantity}
      onChange={onChange}
      aria-label={`${item.quantity} times`}
      options={[...Array.from({ length: 11 }).keys()]}
    />
  </MenuItemContainer>
)

type ShoppingCartMenuProps = {
  isOpen: boolean
  totalPrice: number
  onClose: () => void
  cartItems: CartItem[]
  onGoToCheckoutClick?: () => void
  onItemChange: (item: any) => void
}

export const ShoppingCartMenu = ({
  isOpen,
  onClose,
  cartItems,
  totalPrice,
  onItemChange,
  onGoToCheckoutClick,
}: ShoppingCartMenuProps) => (
  // Base UI's Drawer handles ESC-to-close, body scroll lock, focus trapping,
  // and outside/backdrop-press dismissal natively (modal defaults to true).
  <Drawer.Root
    open={isOpen}
    swipeDirection="right"
    onOpenChange={(open) => {
      if (!open) {
        onClose()
      }
    }}
  >
    <Drawer.Portal>
      <DrawerBackdrop className={theme.DrawerBackdrop} data-testid="Sidebar-backdrop" />
      <DrawerViewport>
        <DrawerPopup className={theme.DrawerPopup} data-testid="sidebar">
          <TopBar>
            <Drawer.Title
              className={theme.DrawerTitle}
              render={<Heading level={4}>Your order</Heading>}
            />
            <CloseButton
              className={theme.Button}
              aria-label="close sidebar"
              data-testid="sidebar-close-btn"
              onClick={onClose}
            >
              <Icon name="cross" size={16} />
            </CloseButton>
          </TopBar>
          <DrawerContent data-testid="sidebar-content">
            <div style={{ display: 'grid', gap: '24px' }}>
              {cartItems.map((item) => (
                <ShoppingCartMenuItem
                  key={item.id}
                  item={item}
                  onChange={(quantity: number) => onItemChange({ ...item, quantity })}
                />
              ))}
            </div>
          </DrawerContent>
          <DrawerFooter data-testid="sidebar-footer">
            <Footer onClick={onGoToCheckoutClick} totalPrice={totalPrice} />
          </DrawerFooter>
        </DrawerPopup>
      </DrawerViewport>
    </Drawer.Portal>
  </Drawer.Root>
)
