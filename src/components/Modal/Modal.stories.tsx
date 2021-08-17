import { Story, Meta } from '@storybook/react'
import { useEffect, useState } from 'react'

import { Button } from '../Button'

import { Modal } from './Modal'

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
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
      <p>Press ESC to close modal or click on the close icon!</p>
      <Button onClick={openModal}>Open modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          closeModal()
        }}
      >
        <div style={{ padding: '1.5rem' }}>Some content here</div>
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
