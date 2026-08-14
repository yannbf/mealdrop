import * as React from 'react'
import styled, { css, useTheme } from 'styled-components'

import { breakpoints } from '../../styles/breakpoints'
import { Icon, IconName } from '../Icon'

const Spacer = styled.span`
  padding-left: 1rem;
`

type StyledButtonProperties = {
  $clear: boolean
  $large: boolean
  $withIcon: boolean
  $round: boolean
}

const StyledButton = styled.button<StyledButtonProperties>(
  ({ $clear, $large, $round, $withIcon, theme: { color, boxShadow, borderRadius } }) => css`
    outline: none;
    border: 0;
    font-family: 'Hind';
    border-radius: ${$round ? borderRadius.xl : borderRadius.xs};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: ${$withIcon ? '0.7rem' : $large ? '1.125rem 1rem' : '0.875rem 1rem'};
    color: ${$clear ? color.primaryText : color.buttonText};

    transition: box-shadow 150ms ease-in;
    z-index: 1;
    background-color: ${$clear ? color.buttonClear : color.buttonPrimary};

    &:hover {
      cursor: pointer;
      background-color: ${$clear ? color.buttonClearHover : color.buttonPrimaryHover};
    }

    &:focus {
      box-shadow: ${boxShadow.outerBorder};
    }

    &:disabled {
      background-color: ${$clear ? color.buttonClear : color.buttonPrimary};
      opacity: 0.4;
    }

    @media ${breakpoints.M} {
      padding: ${$withIcon ? '1rem' : $large ? '1.125rem 1.5rem' : '0.875rem 1.5rem'};
    }
  `
)

type DefaultProperties = {
  /**
   * Clear button styles leaving just a text
   */
  clear?: boolean
  round?: boolean
  /**
   * Is the button large?
   */
  large?: boolean
  /**
   * Does the button have an icon?
   */
  icon?: IconName
  /**
   * Size of the icon
   */
  iconSize?: number
  /**
   * Is the button disabled?
   */
  disabled?: boolean
  /**
   * Does the button have an icon?
   */
  children?: string | React.ReactNode
  /**
   * Optional click handler
   */
  onClick?: () => void
}

// Remove StyledButton props from ButtonProps to avoid duplicate props
type ButtonProperties = DefaultProperties &
  Omit<React.ComponentProps<'button'>, keyof DefaultProperties>

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<React.PropsWithChildren<ButtonProperties>> = ({
  children,
  large = false,
  clear = false,
  round = false,
  icon,
  iconSize,
  ...properties
}: ButtonProperties) => {
  const { color } = useTheme()

  return (
    <StyledButton
      type="button"
      $large={large}
      $clear={clear}
      $round={round}
      $withIcon={!!icon}
      {...properties}
    >
      {icon && (
        <Icon color={clear ? color.primaryText : color.buttonText} size={iconSize} name={icon} />
      )}
      {icon && children && <Spacer />}
      {children}
    </StyledButton>
  )
}
