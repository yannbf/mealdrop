// Ported from the (now-dissolved) src/components/Button/Button.stories.tsx.
// Milestone 1 has no shared Button wrapper: this demonstrates the raw
// call-site pattern — import @base-ui/react/button directly, bind
// theme.Button, compose any variant CSS locally. Real call sites duplicate
// this per site (see src/components/Header/Header.tsx for three separate
// variants in one file); this story exists purely to preview the pattern in
// isolation and keep the original Figma-linked coverage.
import type { StoryObj, Meta } from '@storybook/react-vite'
import { Button as BaseButton } from '@base-ui/react/button'
import theme from '@droppy/theme'
import styled from 'styled-components'
import { expect } from 'storybook/test'

const ClearButton = styled(BaseButton)`
  color: var(--ds-color-text-primary);
  background-color: transparent;

  &:hover:not([data-disabled]) {
    background-color: var(--ds-color-action-subtle-hover);
  }

  &[data-disabled] {
    background-color: transparent;
  }
`

const IconButton = styled(BaseButton)`
  padding: 0.7rem;
`

const meta = {
  title: 'Patterns/Button',
  component: BaseButton,
  args: {
    children: 'Button',
    className: theme.Button,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=1005%3A2974&t=8pzYUq8GyzmMGjJ2-4',
    },
  },
} satisfies Meta<typeof BaseButton>
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
  render: (args) => <ClearButton {...args} />,
}

export const Icon: Story = {
  render: (args) => (
    <IconButton {...args} aria-label="cart">
      🛒
    </IconButton>
  ),
  args: {
    children: undefined,
  },
}

export const IconAndText: Story = {
  render: (args) => (
    <IconButton {...args}>
      🛒
      <div style={{ paddingLeft: '16px' }}>
        <span style={{ color: '#949494' }}>Order</span>
        <span style={{ color: 'white', paddingLeft: '8px' }}>€ 8</span>
      </div>
    </IconButton>
  ),
  args: {
    children: undefined,
  },
}
