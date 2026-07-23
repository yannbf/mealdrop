// Ported from the (now-dissolved) src/components/Sidebar/Sidebar.stories.tsx.
// Milestone 1 has no shared Sidebar/Drawer wrapper: this demonstrates the
// raw call-site pattern — import @base-ui/react/drawer directly, bind
// theme.DrawerBackdrop/DrawerPopup/DrawerTitle, compose app-level layout
// locally. The real call site (ShoppingCartMenu) duplicates a fuller variant
// of this composition; this story exists purely to preview the pattern in
// isolation and keep the original Figma-linked coverage.
import { useEffect, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Drawer } from '@base-ui/react/drawer'
import { Button as BaseButton } from '@base-ui/react/button'
import theme from '@droppy/theme'
import styled from 'styled-components'
import { fn } from 'storybook/test'

const StyledBackdrop = styled(Drawer.Backdrop)`
  z-index: 98;
`

const StyledPopup = styled(Drawer.Popup)`
  z-index: 99;
`

const DrawerPattern = ({
  isOpen,
  title,
  onClose,
}: {
  isOpen: boolean
  title: string
  onClose: () => void
}) => (
  <Drawer.Root
    open={isOpen}
    onOpenChange={(open) => {
      if (!open) onClose()
    }}
  >
    <Drawer.Portal>
      <StyledBackdrop className={theme.DrawerBackdrop} />
      <Drawer.Viewport>
        <StyledPopup className={theme.DrawerPopup}>
          <Drawer.Title className={theme.DrawerTitle}>{title}</Drawer.Title>
        </StyledPopup>
      </Drawer.Viewport>
    </Drawer.Portal>
  </Drawer.Root>
)

const meta = {
  title: 'Patterns/Drawer',
  component: DrawerPattern,
  parameters: {
    docs: { inlineStories: false, iframeHeight: 600 },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=1714-3811&mode=design&t=zmyrZnTzOLfLqBwr-4',
    },
  },
  args: {
    isOpen: false,
    title: '',
    onClose: fn(),
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
      setIsOpen(true)
    }, [])

    return (
      <>
        <p>Press ESC to close or click outside!</p>
        <BaseButton className={theme.Button} onClick={() => setIsOpen(true)}>
          Open drawer
        </BaseButton>
        <DrawerPattern title="Your order" isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </>
    )
  },
} satisfies Meta<typeof DrawerPattern>

export default meta
type Story = StoryObj<typeof meta>

export const Desktop: Story = {}

export const Mobile: Story = {
  globals: {
    viewport: { value: 'iphonex', isRotated: false },
  },
}
