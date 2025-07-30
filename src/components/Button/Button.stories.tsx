import type { StoryObj, Meta } from '@storybook/react-vite'
import { expect, mocked, sb } from 'storybook/test'
import { getId } from './id'
import { v4 as uuidv4 } from 'uuid'

import { Button } from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
  },
  beforeEach: async () => {
    console.log({ getId: mocked(getId) })
    // mocked(uuidv4).mockReturnValue('MOCKED_ID')
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=1005%3A2974&t=8pzYUq8GyzmMGjJ2-4',
    },
  },
} satisfies Meta<typeof Button>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  play: async ({ canvas }) => {
    const button = await canvas.findByRole('button')
    await expect(button).toBeDisabled()
  },
}

export const Clear: Story = {
  args: {
    clear: true,
  },
}

export const Icon: Story = {
  args: {
    icon: 'cart',
    'aria-label': 'cart',
  },
}

export const IconAndText: Story = {
  args: {
    icon: 'cart',
    children: (
      <div style={{ paddingLeft: '16px' }}>
        <span style={{ color: '#949494' }}>Order</span>
        <span style={{ color: 'white', paddingLeft: '8px' }}>€ 8</span>
      </div>
    ),
  },
}
