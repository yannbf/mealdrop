import { Story, Meta } from '@storybook/react'
import { useEffect, useState } from 'react';

import { Button } from '../Button'
import { Sidebar } from './Sidebar'

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
} as Meta

const Template: Story = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openSidebar = () => setIsOpen(true)
  const closeSidebar = () => setIsOpen(false)

  useEffect(() => {
    setIsOpen(true)
  }, [])

  return (
    <>
      <p>Press ESC to close the sidebar or click on the close icon!</p>
      <Button onClick={openSidebar}>Open sidebar</Button>
      <Sidebar
        title="Your order"
        isOpen={isOpen}
        onClose={() => {
          closeSidebar()
        }}
        footer={<div>Some footer here</div>}
      >
        <div>Some content here</div>
      </Sidebar>
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
