import preview from '#.storybook/preview'

import { IconButton } from './IconButton'

const meta = preview.meta({
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=1131-437&mode=design&t=zmyrZnTzOLfLqBwr-4',
    },
  },
})

export const Default = meta.story({
  args: {
    name: 'arrow-right',
    small: false,
    'aria-label': 'forward',
  },
})

export const Small = Default.extend({ args: { small: true } })
