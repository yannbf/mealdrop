// Ported from the (now-dissolved) src/components/Modal/Modal.stories.tsx.
// Milestone 1 has no shared Modal wrapper: this demonstrates the raw
// call-site pattern — import @base-ui/react/dialog directly, bind
// theme.DialogBackdrop/DialogPopup/DialogTitle, compose app-level
// positioning locally. The real call site (FoodItemModal) duplicates a
// variant of this composition; this story exists purely to preview the
// pattern in isolation and keep the original Figma-linked coverage.
import { useEffect, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Dialog } from '@base-ui/react/dialog'
import { Button as BaseButton } from '@base-ui/react/button'
import theme from '@droppy/theme'
import styled from 'styled-components'
import { fn } from 'storybook/test'

const StyledBackdrop = styled(Dialog.Backdrop)`
  z-index: 98;
`

const StyledPopup = styled(Dialog.Popup)`
  z-index: 99;
`

const DialogPattern = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
  <Dialog.Root
    open={isOpen}
    onOpenChange={(open) => {
      if (!open) onClose()
    }}
  >
    <Dialog.Portal>
      <StyledBackdrop className={theme.DialogBackdrop} />
      <StyledPopup className={theme.DialogPopup}>
        <Dialog.Title className={theme.DialogTitle}>Some content here</Dialog.Title>
      </StyledPopup>
    </Dialog.Portal>
  </Dialog.Root>
)

const meta = {
  title: 'Patterns/Dialog',
  component: DialogPattern,
  parameters: {
    docs: { inlineStories: false, iframeHeight: 600 },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=1138-3227&mode=design&t=zmyrZnTzOLfLqBwr-4',
    },
  },
  args: {
    isOpen: false,
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
          Open dialog
        </BaseButton>
        <DialogPattern isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </>
    )
  },
} satisfies Meta<typeof DialogPattern>

export default meta
type Story = StoryObj<typeof meta>

export const Desktop: Story = {}

export const Mobile: Story = {
  globals: {
    viewport: { value: 'iphonex', isRotated: false },
  },
}
