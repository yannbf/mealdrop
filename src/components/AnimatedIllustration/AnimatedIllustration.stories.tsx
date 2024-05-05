import { StoryFn, Meta } from '@storybook/react'

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
    (StoryEl) => (
      <div style={{ maxWidth: 400 }}>
        <StoryEl />
      </div>
    ),
  ],
} as Meta<typeof AnimatedIllustration>

const Template: StoryFn<typeof AnimatedIllustration> = (args) => <AnimatedIllustration {...args} />

export const Default = Template.bind({})
Default.args = {
  animation: 'Error',
}
