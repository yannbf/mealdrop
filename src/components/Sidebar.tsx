import React from 'react'
import { CSSTransition } from 'react-transition-group'

import {
  SidebarContainer,
  SidebarContent,
  SidebarFooter,
  TopBar,
  TopBarTitle,
  TopBarButton,
  Backdrop,
} from './Sidebar.styles'
import { Icon } from './Icon'
import { useKey } from '../hooks/useKeyboard'

export type SidebarProps = {
  isOpen: boolean
  title: string
  onClose: () => void
  footer?: React.ReactNode
}

export const Sidebar: React.FC<SidebarProps> = ({
  children,
  footer,
  isOpen,
  title,
  onClose,
}) => {
  useKey('escape', onClose)

  return (
    <>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="sidebar"
        unmountOnExit
      >
        <SidebarContainer data-testid="sidebar">
          <TopBar>
            <TopBarTitle>{title}</TopBarTitle>
            <TopBarButton data-testid="sidebar-close-btn" onClick={onClose}>
              <Icon size={16} name="cross" />
            </TopBarButton>
          </TopBar>
          <SidebarContent data-testid="sidebar-content">
            {children}
          </SidebarContent>
          {footer && (
            <SidebarFooter data-testid="sidebar-footer">{footer}</SidebarFooter>
          )}
        </SidebarContainer>
      </CSSTransition>

      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="backdrop"
        unmountOnExit
      >
        <Backdrop data-testid="Sidebar-backdrop" onClick={onClose} />
      </CSSTransition>
    </>
  )
}
