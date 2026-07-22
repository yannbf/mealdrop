import * as React from 'react'
import { Dialog } from '@base-ui/react/dialog'

import { Button } from '../Button'

import { StyledBackdrop, StyledPopup, TopBar } from './Modal.styles'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
}

export const Modal: React.FC<React.PropsWithChildren<ModalProps>> = ({
  children,
  isOpen,
  onClose,
}) => {
  // Matches the previous <Portal selector="#modal" /> behavior: portal into
  // the #modal container (present in index.html, and provided by story
  // decorators) rather than Base UI's document.body default, so existing
  // canvas-scoped tests/queries keep finding the popup.
  const [modalContainer, setModalContainer] = React.useState<HTMLElement | null>(null)
  React.useEffect(() => {
    setModalContainer(document.querySelector<HTMLElement>('#modal'))
  }, [])

  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose()
      }}
    >
      <Dialog.Portal container={modalContainer}>
        <StyledBackdrop data-testid="modal-backdrop" />
        <StyledPopup data-testid="modal" aria-label="dialog">
          <TopBar>
            <Button
              data-testid="modal-close-btn"
              onClick={onClose}
              clear
              round
              icon="cross"
              aria-label="close modal"
              iconSize={16}
            />
          </TopBar>
          {children}
        </StyledPopup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
