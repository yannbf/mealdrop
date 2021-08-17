import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Spinner } from './Spinner'

export default {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'fullscreen',
    chromatic: { delay: 1200 },
  },
} as ComponentMeta<typeof Spinner>

export const Default: ComponentStory<typeof Spinner> = () => (
  <div style={{ minHeight: '100vh' }}>
    <Spinner />
  </div>
)
