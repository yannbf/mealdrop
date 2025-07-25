import preview from '#.storybook/preview'

import { Review } from './Review'

const meta = preview.meta({
  title: 'Components/Review',
  component: Review,
  argTypes: {
    rating: {
      control: {
        type: 'range',
        min: 0,
        max: 5,
        step: 0.1,
      },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=1128-3434&mode=design&t=zmyrZnTzOLfLqBwr-4',
    },
  },
})

export const Default = meta.story({})

export const Excellent = meta.story({
  args: {
    rating: 5,
  },
})

export const VeryGood = meta.story({
  args: {
    rating: 4.3,
  },
})

export const Adequate = meta.story({
  args: {
    rating: 2.5,
  },
})

export const Poor = meta.story({
  args: {
    rating: 1.5,
  },
})
