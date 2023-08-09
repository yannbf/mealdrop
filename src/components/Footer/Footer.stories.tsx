import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Footer } from './Footer'

export default {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=1716-3158&mode=design&t=zmyrZnTzOLfLqBwr-4',
    },
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
