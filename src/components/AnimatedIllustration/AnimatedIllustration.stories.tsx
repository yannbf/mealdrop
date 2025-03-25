import type { Meta, StoryObj } from '@storybook/react-vite'

import { AnimatedIllustration } from './AnimatedIllustration'

const meta = {
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
} satisfies Meta<typeof AnimatedIllustration>

export default meta
type Story = StoryObj<typeof meta>

export const NotFound: Story = {
  args: {
    animation: 'NotFound',
  },
}

export const Error: Story = {
  args: {
    animation: 'Error',
  },
}
