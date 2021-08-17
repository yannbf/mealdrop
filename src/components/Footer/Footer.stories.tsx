import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Footer } from './Footer'

export default {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = () => (
  <div style={{ position: 'relative', height: '100vh' }}>
    <div style={{ position: 'absolute', bottom: 0, width: '100%' }}>
      <Footer />
    </div>
  </div>
)

export const Default = Template.bind({})
