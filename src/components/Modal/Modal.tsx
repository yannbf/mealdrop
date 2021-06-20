import * as React from 'react';
import { CSSTransition } from 'react-transition-group'

import { ModalContent, TopBar, Backdrop } from './Modal.styles'
import { Portal } from '../Portal'
import { useKey } from '../../hooks/useKeyboard'
import { Button } from '../Button'
import { useLockBodyScroll } from '../../hooks/useBodyScrollLock'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
}

export const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  useKey('escape', onClose)
  useLockBodyScroll(isOpen)
  
  return (
    <Portal selector="#modal">
      <CSSTransition in={isOpen} timeout={300} classNames="modal" unmountOnExit>
        <ModalContent data-testid="modal">
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
      >
        <Backdrop data-testid="modal-backdrop" onClick={onClose} />
      </CSSTransition>
    </Portal>
  )
}
