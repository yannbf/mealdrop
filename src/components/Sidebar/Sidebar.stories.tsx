import { StoryFn, Meta } from '@storybook/react'
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
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=1714-3811&mode=design&t=zmyrZnTzOLfLqBwr-4',
    },
  },
} as Meta

const Template: StoryFn = () => {
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
