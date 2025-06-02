import preview from '#.storybook/preview'

import { AnimatedIllustration } from './AnimatedIllustration'

const meta = preview.meta({
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
})

export const NotFound = meta.story({
  args: {
    animation: 'NotFound',
  },
})

export const Error = meta.story({
  args: {
    animation: 'Error',
  },
})
