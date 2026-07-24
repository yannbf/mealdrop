// Restored at its pre-migration path/title so Chromatic keeps diffing against
// the original "Components/Sidebar" baselines (story IDs derive from title +
// export name). Milestone 1 has no shared Sidebar/Drawer wrapper anymore: the
// Drawer composition below binds theme.Drawer* and duplicates the app's
// viewport/panel layout locally — the same call-site pattern the app uses
// (see src/components/ShoppingCartMenu/ShoppingCartMenu.tsx).
import type { Meta, StoryObj } from '@storybook/react-vite'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { Drawer } from '@base-ui/react/drawer'
import { Button as BaseButton } from '@base-ui/react/button'
import theme from '@droppy/theme'
import styled from 'styled-components'
import { fn } from 'storybook/test'

import { breakpoints } from '../../styles/breakpoints'
import { Icon } from '../Icon'
import { Body, Heading } from '../typography'

const SidebarBackdrop = styled(Drawer.Backdrop)`
  z-index: 98;
`

const SidebarViewport = styled(Drawer.Viewport)`
  position: fixed;
  inset: 0;
  z-index: 99;
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
`

const SidebarPopup = styled(Drawer.Popup)`
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

const SidebarContent = styled.div`
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

const SidebarFooter = styled.div(
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

// theme.Button, round + clear + icon-only variant (the close button).
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

// theme.Button, plain size (the "Open sidebar" trigger).
const OpenButton = styled(BaseButton)`
  z-index: 1;

  @media ${breakpoints.M} {
    padding: 0.875rem 1.5rem;
  }
`

type SidebarProps = {
  isOpen: boolean
  title: string
  onClose: () => void
  footer?: React.ReactNode
}

const Sidebar: React.FC<React.PropsWithChildren<SidebarProps>> = ({
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
      <SidebarBackdrop className={theme.DrawerBackdrop} data-testid="Sidebar-backdrop" />
      <SidebarViewport>
        <SidebarPopup className={theme.DrawerPopup} data-testid="sidebar">
          <TopBar>
            <Drawer.Title
              className={theme.DrawerTitle}
              render={<Heading level={4}>{title}</Heading>}
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
          <SidebarContent data-testid="sidebar-content">{children}</SidebarContent>
          {footer && <SidebarFooter data-testid="sidebar-footer">{footer}</SidebarFooter>}
        </SidebarPopup>
      </SidebarViewport>
    </Drawer.Portal>
  </Drawer.Root>
)

const meta = {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    // This makes it so that the sidebar is loaded inside of an iframe in docs mode.
    // If it's not rendered in an iframe, the sidebar is going to open on top of Storybook itself!
    docs: { inlineStories: false, iframeHeight: 600 },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=1714-3811&mode=design&t=zmyrZnTzOLfLqBwr-4',
    },
  },
  args: {
    isOpen: false,
    title: '',
    /*
    The following line emulates the event handler that would be passed to the component
    Read more about the `fn` utility function at
    https://storybook.js.org/docs/essentials/actions#via-storybooktest-fn-spy-function
    */
    onClose: fn(),
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    const openSidebar = () => setIsOpen(true)
    const closeSidebar = () => setIsOpen(false)
    useEffect(() => {
      setIsOpen(true)
    }, [])

    return (
      <>
        <Body>Press ESC to close the sidebar or click on the close icon!</Body>
        <OpenButton className={theme.Button} onClick={openSidebar}>
          Open sidebar
        </OpenButton>
        <Sidebar
          title="Your order"
          isOpen={isOpen}
          onClose={() => {
            closeSidebar()
          }}
          footer={<Body>Some footer here</Body>}
        >
          <Body>Some content here</Body>
        </Sidebar>
      </>
    )
  },
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Desktop: Story = {}

export const Mobile: Story = {
  globals: {
    viewport: { value: 'iphonex', isRotated: false },
  },
}
