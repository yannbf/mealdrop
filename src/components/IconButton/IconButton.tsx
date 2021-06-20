import type { ComponentProps } from 'react';
import styled, { css } from 'styled-components'

import { Icon } from '../Icon'

const StyledButton = styled.button<{ small: boolean }>(
  ({ small }) => css`
    border: 0;
    width: ${small ? '3rem' : '4rem'};
    height: ${small ? '3rem' : '4rem'};
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 14px;
    color: #333;
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.14);
  `
)

type IconButtonProps = {
  name: string
  small?: boolean
  onClick?: () => void
} & ComponentProps<typeof StyledButton>

export const IconButton = ({
  small = false,
  name,
  ...props
}: IconButtonProps) => {
  return (
    <StyledButton type="button" small={small} {...props}>
      <Icon name={name} size={small ? 15 : 24} color="#202020" />
    </StyledButton>
  )
}
