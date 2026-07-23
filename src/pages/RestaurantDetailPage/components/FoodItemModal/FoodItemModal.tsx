import { useState, useCallback, useEffect } from 'react'
import { Dialog } from '@base-ui/react/dialog'
import { Button as BaseButton } from '@base-ui/react/button'
import theme from '@droppy/theme'
import styled, { css } from 'styled-components'

import { CartItem } from '../../../../app-state/cart'
import { toCurrency } from '../../../../helpers'
import { breakpoints } from '../../../../styles/breakpoints'
import { Icon } from '../../../../components/Icon'
import { Body } from '../../../../components/typography/Body'
import { Heading } from '../../../../components/typography/Heading'

// Everything below through TopBar is what used to live in the app's Modal
// component (Dialog + layout) — now duplicated here, by design (milestone 1
// has no shared Modal wrapper). theme.Dialog* carries the base chrome via
// @droppy/theme/styles.css; only the app's own bottom-sheet/centered-card
// positioning remains as local CSS.
const StyledPopup = styled(Dialog.Popup)`
  z-index: 99;
  top: 50%;
  right: 0;
  bottom: 0;
  left: 0;
  max-width: none;
  max-height: none;
  transform: none;
  border-radius: var(--ds-radius-sheet) var(--ds-radius-sheet) 0 0;
  transition: transform var(--ds-motion-slow) var(--ds-motion-ease);

  &[data-starting-style],
  &[data-ending-style] {
    opacity: 1;
    transform: translateY(100%);
  }

  @media ${breakpoints.M} {
    width: 600px;
    height: 272px;
    bottom: 0;
    left: calc(50% - (600px / 2));
    top: calc(50% - (272px / 2));
    border-radius: var(--ds-radius-sheet);
    transition:
      opacity var(--ds-motion-slow) var(--ds-motion-ease),
      transform var(--ds-motion-slow) var(--ds-motion-ease);

    &[data-starting-style],
    &[data-ending-style] {
      opacity: 0;
      transform: scale(0.9);
    }
  }
`

const StyledBackdrop = styled(Dialog.Backdrop)`
  z-index: 98;
`

const TopBar = styled.div`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
`

// theme.Button, round + clear + icon-only variant — used three times in this
// file (close / decrease / increase), each a separate class-binding site.
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

const StyledBody = styled(Body)`
  margin: 0;
  margin-top: 8px;
`

// theme.Button, plain size + flex: 1 (the "add for €X" confirm button).
const ConfirmButton = styled(BaseButton)`
  z-index: 1;
  flex: 1;

  @media ${breakpoints.M} {
    padding: 0.875rem 1.5rem;
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex: 0.45;
  margin-bottom: 1.5rem;
  margin-right: 0;
  @media ${breakpoints.M} {
    margin-bottom: 0;
    margin-right: 1.5rem;
    justify-content: space-between;
  }
`

const TopContainer = styled.div(
  ({ theme: { color } }) => css`
    padding: 2.5rem 1.5rem;
    background: ${color.overlayHeader};
    border-radius: 16px 16px 0px 0px;
  `
)

const BottomContainer = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  @media ${breakpoints.M} {
    flex-direction: row;
  }
`

type FoodItemModalProps = {
  item?: CartItem
  cartItems: CartItem[]
  onClose: () => void
  onItemSave: (item: CartItem) => void
  onItemRemove: (item: CartItem) => void
}

export const FoodItemModal = ({
  item,
  cartItems,
  onClose,
  onItemSave,
  onItemRemove,
}: FoodItemModalProps) => {
  const [quantity, setQuantity] = useState(0)

  // Matches the previous <Portal selector="#modal" /> behavior: portal into
  // the #modal container (present in index.html, and provided by story
  // decorators) rather than Base UI's document.body default, so existing
  // canvas-scoped tests/queries keep finding the popup.
  const [modalContainer, setModalContainer] = useState<HTMLElement | null>(null)
  useEffect(() => {
    setModalContainer(document.querySelector<HTMLElement>('#modal'))
  }, [])

  const saveItem = useCallback(() => {
    if (item) {
      if (quantity === 0) {
        onItemRemove(item)
      } else {
        onItemSave({ ...item, quantity })
      }
    }

    onClose()
  }, [quantity, onClose, onItemRemove, item, onItemSave])

  useEffect(() => {
    const cartItem = item && cartItems.find((c) => c.id === item.id)
    setQuantity(cartItem?.quantity || 1)
    return () => setQuantity(0)
  }, [cartItems, item])

  return (
    <Dialog.Root
      open={!!item}
      onOpenChange={(open) => {
        if (!open) onClose()
      }}
    >
      <Dialog.Portal container={modalContainer}>
        <StyledBackdrop className={theme.DialogBackdrop} data-testid="modal-backdrop" />
        <StyledPopup className={theme.DialogPopup} data-testid="modal" aria-label="dialog">
          <TopBar>
            <RoundClearIconButton
              className={theme.Button}
              data-testid="modal-close-btn"
              onClick={onClose}
              aria-label="close modal"
            >
              <Icon name="cross" size={16} />
            </RoundClearIconButton>
          </TopBar>
          {item && (
            <div>
              <TopContainer>
                <Heading>{item.name}</Heading>
                <StyledBody>{item.description}</StyledBody>
              </TopContainer>
              <BottomContainer>
                <ButtonsContainer>
                  <RoundClearIconButton
                    className={theme.Button}
                    aria-label="decrease quantity by one"
                    onClick={() => setQuantity(quantity - 1)}
                    disabled={quantity <= 1}
                  >
                    <Icon name="minus" />
                  </RoundClearIconButton>
                  <Body type="span">{quantity}</Body>
                  <RoundClearIconButton
                    className={theme.Button}
                    aria-label="increase quantity by one"
                    onClick={() => setQuantity(quantity + 1)}
                    disabled={quantity >= 10}
                  >
                    <Icon name="plus" />
                  </RoundClearIconButton>
                </ButtonsContainer>
                <ConfirmButton className={theme.Button} aria-label="confirm" onClick={saveItem}>
                  add for {toCurrency(item.price * quantity)}
                </ConfirmButton>
              </BottomContainer>
            </div>
          )}
        </StyledPopup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
