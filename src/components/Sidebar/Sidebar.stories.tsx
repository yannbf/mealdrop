import { Story, Meta } from '@storybook/react'
import { useEffect, useState } from 'react'

import { Button } from '../Button'
import { Body } from '../typography'

import { Sidebar } from './Sidebar'

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    // This makes it so that the sidebar is loaded inside of an iframe in docs mode.
    // If it's not rendered in an iframe, the sidebar is going to open on top of Storybook itself!
    docs: { inlineStories: false, iframeHeight: 600 },
  },
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
      <Body>Press ESC to close the sidebar or click on the close icon!</Body>
      <Button onClick={openSidebar}>Open sidebar</Button>
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
}

export const Desktop = Template.bind({})

export const Mobile = Template.bind({})
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
}
