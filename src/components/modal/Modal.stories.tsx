import { Story } from '@storybook/react'
import React, { useState } from 'react'
import { Button } from '../Button'

import { Modal } from './Modal'

export default {
  title: 'Overlays/Modal',
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

const Template: Story = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  React.useEffect(() => {
    setIsOpen(true)
  }, [])

  return (
    <>
      <p>Press ESC to close modal or click on the close icon!</p>
      <Button primary onClick={openModal}>
        Open modal
      </Button>
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

export const Desktop = Template.bind({})

export const Mobile = Template.bind({})
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
}
