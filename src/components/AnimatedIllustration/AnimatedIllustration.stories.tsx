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
    (Story) => (
      <div style={{ maxWidth: 400 }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof AnimatedIllustration>

const Template: StoryFn<typeof AnimatedIllustration> = (args) => <AnimatedIllustration {...args} />

export const Default = Template.bind({})
Default.args = {
  animation: 'Error',
}
