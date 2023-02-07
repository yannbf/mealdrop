import * as React from 'react'
import { CSSTransition } from 'react-transition-group'

import { useKey, useLockBodyScroll } from '../../hooks'
import { Button } from '../Button'
import { Heading } from '../typography'

import { SidebarContainer, SidebarContent, SidebarFooter, TopBar, Backdrop } from './Sidebar.styles'

type SidebarProps = {
  isOpen: boolean
  title: string
  onClose: () => void
  footer?: React.ReactNode
}

export const Sidebar: React.FC<React.PropsWithChildren<SidebarProps>> = ({
  children,
  footer,
  isOpen,
  title,
  onClose,
}) => {
  useKey('escape', onClose)
  useLockBodyScroll(isOpen)
  const contentRef = React.useRef(null)
  const backdropRef = React.useRef(null)

  return (
    <>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="sidebar"
        unmountOnExit
        nodeRef={contentRef}
      >
        <SidebarContainer data-testid="sidebar" ref={contentRef}>
          <TopBar>
            <Heading level={4}>{title}</Heading>
            <Button
              aria-label="close sidebar"
              data-testid="sidebar-close-btn"
              onClick={onClose}
              clear
              round
              icon="cross"
              iconSize={16}
            />
          </TopBar>
          <SidebarContent data-testid="sidebar-content">{children}</SidebarContent>
          {footer && <SidebarFooter data-testid="sidebar-footer">{footer}</SidebarFooter>}
        </SidebarContainer>
      </CSSTransition>

      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="backdrop"
        unmountOnExit
        nodeRef={backdropRef}
      >
        <Backdrop data-testid="Sidebar-backdrop" onClick={onClose} />
      </CSSTransition>
    </>
  )
}
