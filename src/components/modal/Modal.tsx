import React from 'react'
import { CSSTransition } from 'react-transition-group'

import { ModalContent, TopBar, TopBarButton, Backdrop } from './Modal.styles'
import { Portal } from '../Portal'
import { useKey } from '../../hooks/useKeyboard'
import { Icon } from '../Icon'

export type ModalProps = {
  isOpen: boolean
  onClose: () => void
}

export const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  useKey('escape', onClose)

  return (
    <Portal selector="#modal">
      <CSSTransition in={isOpen} timeout={300} classNames="modal" unmountOnExit>
        <ModalContent data-testid="modal">
          <TopBar>
            <TopBarButton data-testid="modal-close-btn" onClick={onClose}>
              <Icon name="cross"/>
            </TopBarButton>
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
