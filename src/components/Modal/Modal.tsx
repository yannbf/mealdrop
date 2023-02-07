import * as React from 'react'
import { CSSTransition } from 'react-transition-group'

import { Portal } from '../Portal'
import { useKey } from '../../hooks/useKeyboard'
import { Button } from '../Button'
import { useLockBodyScroll } from '../../hooks/useBodyScrollLock'

import { ModalContent, TopBar, Backdrop } from './Modal.styles'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
}

export const Modal: React.FC<React.PropsWithChildren<ModalProps>> = ({
  children,
  isOpen,
  onClose,
}) => {
  useKey('escape', onClose)
  useLockBodyScroll(isOpen)
  const contentRef = React.useRef(null)
  const backdropRef = React.useRef(null)

  return (
    <Portal selector="#modal">
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="modal"
        unmountOnExit
        nodeRef={contentRef}
      >
        <ModalContent data-testid="modal" ref={contentRef}>
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
        </ModalContent>
      </CSSTransition>

      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="backdrop"
        unmountOnExit
        nodeRef={backdropRef}
      >
        <Backdrop data-testid="modal-backdrop" ref={backdropRef} onClick={onClose} />
      </CSSTransition>
    </Portal>
  )
}
