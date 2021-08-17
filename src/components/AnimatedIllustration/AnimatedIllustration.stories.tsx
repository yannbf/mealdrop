import { ComponentStory, ComponentMeta } from '@storybook/react'

import { AnimatedIllustration } from './AnimatedIllustration'

export default {
  title: 'Components/AnimatedIllustration',
  component: AnimatedIllustration,
  parameters: {
    layout: 'fullscreen',
    storyshots: { disable: true },
    chromatic: { delay: 1000 },
  },
  decorators: [
    (StoryFn) => (
      <div style={{ maxWidth: 400 }}>
        <StoryFn />
      </div>
    ),
  ],
} as ComponentMeta<typeof AnimatedIllustration>

const Template: ComponentStory<typeof AnimatedIllustration> = (args) => (
  <AnimatedIllustration {...args} />
)

export const Default = Template.bind({})
Default.args = {
  animation: 'Error',
}
