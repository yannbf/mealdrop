import * as React from 'react'
import { Drawer } from '@base-ui/mealdrop'

import { Button } from '../Button'
import { Heading } from '../typography'

import {
  SidebarBackdrop,
  SidebarContent,
  SidebarFooter,
  SidebarPopup,
  SidebarViewport,
  TopBar,
} from './Sidebar.styles'

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
}) => (
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
      <SidebarBackdrop data-testid="Sidebar-backdrop" />
      <SidebarViewport>
        <SidebarPopup data-testid="sidebar">
          <TopBar>
            <Drawer.Title render={<Heading level={4}>{title}</Heading>} />
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
        </SidebarPopup>
      </SidebarViewport>
    </Drawer.Portal>
  </Drawer.Root>
)
