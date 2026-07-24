// Restored at its pre-migration path/title so Chromatic keeps diffing against
// the original "Components/Modal" baselines (story IDs derive from title +
// export name). Milestone 1 has no shared Modal wrapper anymore: the Dialog
// composition below binds theme.Dialog* and duplicates the app's bottom-sheet/
// centered-card positioning locally — the same call-site pattern the app uses
// (see src/pages/RestaurantDetailPage/components/FoodItemModal).
import type { Meta, StoryObj } from '@storybook/react-vite'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { Dialog } from '@base-ui/react/dialog'
import { Button as BaseButton } from '@base-ui/react/button'
import theme from '@droppy/theme'
import styled from 'styled-components'
import { fn } from 'storybook/test'

import { breakpoints } from '../../styles/breakpoints'
import { Icon } from '../Icon'
import { Body } from '../typography'

const StyledPopup = styled(Dialog.Popup)`
  z-index: 99;
  top: 50%;
  right: 0;
  bottom: 0;
  left: 0;
  max-width: none;
  max-height: none;
  transform: none;
  border-radius: var(--ds-radius-sheet) var(--ds-radius-sheet) 0 0;
  transition: transform var(--ds-motion-slow) var(--ds-motion-ease);

  &[data-starting-style],
  &[data-ending-style] {
    opacity: 1;
    transform: translateY(100%);
  }

  @media ${breakpoints.M} {
    width: 600px;
    height: 272px;
    bottom: 0;
    left: calc(50% - (600px / 2));
    top: calc(50% - (272px / 2));
    border-radius: var(--ds-radius-sheet);
    transition:
      opacity var(--ds-motion-slow) var(--ds-motion-ease),
      transform var(--ds-motion-slow) var(--ds-motion-ease);

    &[data-starting-style],
    &[data-ending-style] {
      opacity: 0;
      transform: scale(0.9);
    }
  }
`

const StyledBackdrop = styled(Dialog.Backdrop)`
  z-index: 98;
`

const TopBar = styled.div`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
`

// theme.Button, round + clear + icon-only variant (the close button).
const RoundClearIconButton = styled(BaseButton)`
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

// theme.Button, plain size (the "Open modal" trigger).
const OpenButton = styled(BaseButton)`
  z-index: 1;

  @media ${breakpoints.M} {
    padding: 0.875rem 1.5rem;
  }
`

type ModalProps = {
  isOpen: boolean
  onClose: () => void
}

const Modal: React.FC<React.PropsWithChildren<ModalProps>> = ({ children, isOpen, onClose }) => {
  // Matches the previous <Portal selector="#modal" /> behavior: portal into
  // the #modal container (provided by the story decorator below) rather than
  // Base UI's document.body default, so canvas-scoped queries keep finding
  // the popup.
  const [modalContainer, setModalContainer] = useState<HTMLElement | null>(null)
  useEffect(() => {
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
        <StyledBackdrop className={theme.DialogBackdrop} data-testid="modal-backdrop" />
        <StyledPopup className={theme.DialogPopup} data-testid="modal" aria-label="dialog">
          <TopBar>
            <RoundClearIconButton
              className={theme.Button}
              data-testid="modal-close-btn"
              onClick={onClose}
              aria-label="close modal"
            >
              <Icon name="cross" size={16} />
            </RoundClearIconButton>
          </TopBar>
          {children}
        </StyledPopup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    // This makes it so that the modal is loaded inside of an iframe in docs mode.
    // If it's not rendered in an iframe, the modal is going to open on top of Storybook itself!
    docs: { inlineStories: false, iframeHeight: 600 },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=1138-3227&mode=design&t=zmyrZnTzOLfLqBwr-4',
    },
  },
  decorators: [
    (StoryEl) => (
      <>
        <div id="modal" />
        <StoryEl />
      </>
    ),
  ],
  args: {
    isOpen: false,
    /*
    The following line emulates the event handler that would be passed to the component
    Read more about the `fn` utility function at
    https://storybook.js.org/docs/essentials/actions#via-storybooktest-fn-spy-function
    */
    onClose: fn(),
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    useEffect(() => {
      setIsOpen(true)
    }, [])

    return (
      <>
        <Body>Press ESC to close modal or click on the close icon!</Body>
        <OpenButton className={theme.Button} onClick={openModal}>
          Open modal
        </OpenButton>
        <Modal
          isOpen={isOpen}
          onClose={() => {
            closeModal()
          }}
        >
          <Body style={{ padding: '1.5rem' }}>Some content here</Body>
        </Modal>
      </>
    )
  },
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Desktop: Story = {}

export const Mobile: Story = {
  globals: {
    viewport: { value: 'iphonex', isRotated: false },
  },
}
