// Restored at its pre-migration path/title so Chromatic keeps diffing against
// the original "Components/Button" baselines (story IDs derive from title +
// export name). Milestone 1 has no shared Button wrapper anymore: each variant
// below binds theme.Button and duplicates its layout CSS locally — the same
// call-site pattern the app uses (see src/components/Header/Header.tsx).
import type { StoryObj, Meta } from '@storybook/react-vite'
import { Button as BaseButton } from '@base-ui/react/button'
import theme from '@droppy/theme'
import styled, { useTheme } from 'styled-components'
import { expect } from 'storybook/test'

import { breakpoints } from '../../styles/breakpoints'
import { Icon as AppIcon } from '../Icon'

// plain size (the old wrapper's default variant).
const DefaultButton = styled(BaseButton)`
  z-index: 1;

  @media ${breakpoints.M} {
    padding: 0.875rem 1.5rem;
  }
`

// "clear" variant, plain size.
const ClearButton = styled(BaseButton)`
  z-index: 1;
  color: var(--ds-color-text-primary);
  background-color: transparent;

  &:hover:not([data-disabled]) {
    background-color: var(--ds-color-action-subtle-hover);
  }

  &[data-disabled] {
    background-color: transparent;
  }

  @media ${breakpoints.M} {
    padding: 0.875rem 1.5rem;
  }
`

// icon variant (solid fill, icon padding).
const IconButton = styled(BaseButton)`
  z-index: 1;
  padding: 0.7rem;

  @media ${breakpoints.M} {
    padding: 1rem;
  }
`

// the old wrapper's spacer between icon and text.
const Spacer = styled.span`
  padding-left: 1rem;
`

const CartIcon = () => {
  const { color } = useTheme()
  return <AppIcon color={color.buttonText} name="cart" />
}

const meta = {
  title: 'Components/Button',
  component: BaseButton,
  args: {
    children: 'Button',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=1005%3A2974&t=8pzYUq8GyzmMGjJ2-4',
    },
  },
  render: (args) => <DefaultButton className={theme.Button} {...args} />,
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
  render: (args) => <ClearButton className={theme.Button} {...args} />,
}

export const Icon: Story = {
  args: {
    'aria-label': 'cart',
  },
  render: (args) => (
    <IconButton className={theme.Button} {...args}>
      <CartIcon />
      <Spacer />
      {args.children}
    </IconButton>
  ),
}

export const IconAndText: Story = {
  args: {
    children: (
      <div style={{ paddingLeft: '16px' }}>
        <span style={{ color: '#949494' }}>Order</span>
        <span style={{ color: 'white', paddingLeft: '8px' }}>€ 8</span>
      </div>
    ),
  },
  render: (args) => (
    <IconButton className={theme.Button} {...args}>
      <CartIcon />
      <Spacer />
      {args.children}
    </IconButton>
  ),
}
