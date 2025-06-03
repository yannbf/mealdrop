import preview from '#.storybook/preview'

import { Input } from './Input'
import { fn } from 'storybook/test'

const meta = preview.meta({
  title: 'Components/Form/Input',
  component: Input,
  args: {
    onChange: fn(),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=1126-3572&mode=design&t=zmyrZnTzOLfLqBwr-4',
    },
  },
})

export const Default = meta.story({
  args: {
    'aria-label': 'input',
  },
})

export const WithLabel = meta.story({
  args: {
    id: 'input',
    label: 'Input field',
  },
})

export const WithHint = WithLabel.extend({ args: { placeholder: 'This is a hint' } })

export const Filled = WithLabel.extend({ args: { value: 'Already filled text' } })

export const ErrorValidation = meta.story({
  args: {
    id: 'input',
    label: 'Input field',
    value: 'jane@doecom',
    error: 'email should be valid',
  },
})
