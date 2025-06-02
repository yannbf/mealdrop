import preview from '#.storybook/preview'
import { expect } from 'storybook/test'

import { Button } from './Button'

const meta = preview.meta({
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=1005%3A2974&t=8pzYUq8GyzmMGjJ2-4',
    },
  },
})

export const Default = meta.story()

export const Disabled = meta.story({
  args: {
    disabled: true,
  },
  play: async ({ canvas }) => {
    const button = await canvas.findByRole('button')
    await expect(button).toBeDisabled()
  },
})

export const Clear = meta.story({
  args: {
    clear: true,
  },
})

export const Icon = meta.story({
  args: {
    icon: 'cart',
    'aria-label': 'cart',
  },
})

export const IconAndText = meta.story({
  args: {
    icon: 'cart',
    children: (
      <div style={{ paddingLeft: '16px' }}>
        <span style={{ color: '#949494' }}>Order</span>
        <span style={{ color: 'white', paddingLeft: '8px' }}>€ 8</span>
      </div>
    ),
  },
})
