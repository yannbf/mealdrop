import type { StoryObj, Meta } from '@storybook/react'
import { fn, expect, userEvent } from '@storybook/test'

import { Button } from './Button'

const meta = {
  component: Button,
  args: {
    children: 'Button',
    onClick: fn(),
  },
} satisfies Meta<typeof Button>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Clear: Story = {
  args: {
    clear: true,
  },
}
