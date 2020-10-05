import React from 'react'
import styled, { css } from 'styled-components'

const StyledButton = styled.button<{
  primary: boolean
  clear: boolean
  large: boolean
}>(
  ({ primary, clear, large }) => css`
    border: 0;
    border-radius: 8px;
    cursor: pointer;
    display: inline-block;
    padding: ${large ? '18px' : '14px'} 24px;
    font-size: 1rem;
    text-align: center;
    color: ${primary ? 'white' : '#333'};
    background-color: ${clear
      ? 'transparent'
      : primary
      ? '#2C2C2C'
      : '#E5F8BC'};
  `
)

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * Clear button styles leaving just a text
   */
  clear?: boolean
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * Is the button large?
   */
  large?: boolean
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  label,
  primary = false,
  large = false,
  clear = false,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      large={large}
      clear={clear}
      primary={primary}
      {...props}
    >
      {label}
    </StyledButton>
  )
}
