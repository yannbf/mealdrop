import { Meta, Story } from '@storybook/react'

import { Footer } from './Footer'

export default {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

const Template: Story = (args) =>
  <div style={{ position: 'relative', height: '100vh' }}>
    <div style={{ position: 'absolute', bottom: 0, width: '100%' }}>
      <Footer {...args} />
    </div>
  </div>

export const Default = Template.bind({})

