import preview from '#.storybook/preview'

import { Select } from './Select'

const meta = preview.meta({
  title: 'Components/Form/Select',
  component: Select,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=1145-3229&mode=design&t=zmyrZnTzOLfLqBwr-4',
    },
  },
})

const Default = meta.story({
  args: {
    options: ['Burger', 'Pizza', 'Sushi'],
    id: 'select',
    'aria-label': 'food',
  },
})


export const WithLabel = meta.story({
  args: {
    ...Default.input.args,
    id: 'select',
    label: 'Select field',
  },
})
