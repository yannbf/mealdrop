import React from 'react'
import { Story, Meta } from '@storybook/react'
import {
  AnimatedIllustration,
  AnimatedIllustrationProps,
} from './AnimatedIllustration'

export default {
  title: 'Components/AnimatedIllustration',
  component: AnimatedIllustration,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (StoryFn) => (
      <div style={{ maxWidth: 400 }}>
        <StoryFn />
      </div>
    ),
  ],
} as Meta

const Template: Story<AnimatedIllustrationProps> = (args) => (
  <AnimatedIllustration {...args} />
)

export const Default = Template.bind({})
Default.args = {
  animation: 'Error',
}
