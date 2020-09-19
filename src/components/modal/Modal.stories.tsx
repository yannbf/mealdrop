import { Story } from '@storybook/react'
import React, { useState } from 'react'

import { Modal } from './Modal'

export default {
  title: 'Modal',
  component: Modal,
  decorators: [
    (StoryFn: Story) => (
      <>
        <div id="modal" />
        <StoryFn />
      </>
    ),
  ],
}

export const Basic = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)
  return (
    <>
      <p>Press ESC to close modal or click on the close icon!</p>
      <button onClick={openModal}>OPEN MODAL</button>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          closeModal()
        }}
      >
        <div>Some content here</div>
      </Modal>
    </>
  )
}
