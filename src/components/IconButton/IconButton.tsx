import type { ComponentProps } from 'react'
import { Button as BaseButton } from '@base-ui/react/button'
import styled, { css } from 'styled-components'

import { Icon, IconName } from '../Icon'

// Deliberately theme-independent (the carousel-arrow pill stays a light pill in
// dark mode — an intentional Mealdrop bypass); only radius and the focus ring
// come from the DS tokens.
const StyledButton = styled(BaseButton)<{ $small: boolean }>(
  ({ $small }) => css`
    border: 0;
    width: ${$small ? '3rem' : '4rem'};
    height: ${$small ? '3rem' : '4rem'};
    border-radius: var(--ds-radius-round);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 14px;
    color: #333;
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.14);

    &:focus-visible {
      box-shadow:
        var(--ds-shadow-focus),
        0 4px 8px rgba(0, 0, 0, 0.14);
    }
  `
)

type IconButtonProps = {
  name: IconName
  small?: boolean
  onClick?: () => void
} & Omit<ComponentProps<'button'>, 'name' | 'small'>

export const IconButton = ({ small = false, name, ...props }: IconButtonProps) => {
  return (
    <StyledButton type="button" $small={small} {...props}>
      <Icon name={name} size={small ? 15 : 24} color="#202020" />
    </StyledButton>
  )
}
