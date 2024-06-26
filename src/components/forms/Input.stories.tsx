import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './Input'

const meta = {
  title: 'Components/Form/Input',
  component: Input,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=1126-3572&mode=design&t=zmyrZnTzOLfLqBwr-4',
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    'aria-label': 'input',
  },
}

export const WithLabel: Story = {
  args: {
    id: 'input',
    label: 'Input field',
  },
}

export const WithHint: Story = {
  args: {
    ...WithLabel.args,
    placeholder: 'This is a hint',
  },
}

export const Filled: Story = {
  args: {
    ...WithLabel.args,
    value: 'Already filled text',
  },
}
