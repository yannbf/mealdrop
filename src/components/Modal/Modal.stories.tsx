import { Story, Meta } from '@storybook/react'
import { useEffect, useState } from 'react'

import { Button } from '../Button'
import { Body } from '../typography'

import { Modal } from './Modal'

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    // This makes it so that the modal is loaded inside of an iframe in docs mode.
    // If it's not rendered in an iframe, the modal is going to open on top of Storybook itself!
    docs: { inlineStories: false, iframeHeight: 600 },
  },
  decorators: [
    (StoryFn) => (
      <>
        <div id="modal" />
        <StoryFn />
      </>
    ),
  ],
} as Meta

const Template: Story = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  useEffect(() => {
    setIsOpen(true)
  }, [])

  return (
    <>
      <Body>Press ESC to close modal or click on the close icon!</Body>
      <Button onClick={openModal}>Open modal</Button>
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
}

export const Desktop = Template.bind({})

export const Mobile = Template.bind({})
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
}
