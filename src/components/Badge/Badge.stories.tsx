import preview from '#.storybook/preview'

import { Badge } from './Badge'

const meta = preview.meta({
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    design: {
      type: 'figspec',
      url: 'https://www.figma.com/file/XW4Bcjmj3JOILjKmZjjdQd/Mealdrop?node-id=780%3A2938',
    },
  },
})

export const Default = meta.story({
  args: {
    text: 'Comfort food',
  },
})
