import React from 'react'
import styled, { css } from 'styled-components'
import { breakpoints } from '../styles/breakpoints'
import { Icon } from './Icon'

const Spacer = styled.span`
  padding-left: 1rem;
`

const StyledButton = styled.button<{
  primary: boolean
  clear: boolean
  large: boolean
  withIcon: boolean
}>(
  ({ primary, clear, large, withIcon, theme: { color, boxShadow } }) => css`
    outline: none;
    border: 0;
    font-family: 'Hind';
    border-radius: 4px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: ${withIcon ? '1rem' : large ? '1.125rem 1rem' : '0.875rem 1rem'};
    color: ${primary ? 'white' : '#333'};
    background-color: ${clear
      ? color.buttonClear
      : primary
      ? color.buttonPrimary
      : color.buttonSecondary};
    &:hover {
      cursor: pointer;
      background-color: ${clear
        ? color.buttonClearHover
        : primary
        ? color.buttonPrimaryHover
        : color.buttonSecondaryHover};
    }
    &:focus {
      box-shadow: ${clear
        ? boxShadow.clearButton
        : primary
        ? boxShadow.primaryButton
        : boxShadow.secondaryButton};
    }

    @media ${breakpoints.M} {
      padding: ${withIcon
        ? '1rem'
        : large
        ? '1.125rem 1.5rem'
        : '0.875rem 1.5rem'};
    }
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
   * Does the button have an icon?
   */
  icon?: string
  /**
   * Does the button have an icon?
   */
  children?: React.ReactNode | string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  primary = false,
  large = false,
  clear = false,
  icon,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      large={large}
      clear={clear}
      primary={primary}
      withIcon={!!icon}
      {...props}
    >
      {icon && <Icon color="#ffffff" name={icon} />}
      {icon && children && <Spacer />}
      {children}
    </StyledButton>
  )
}
