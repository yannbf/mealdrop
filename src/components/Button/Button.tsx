import * as React from 'react'
import { Button as BaseButton } from '@base-ui/react/button'
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

// Base UI Button + DS tokens: colors/radius/focus come from the --ds-* vars
// (ds-theme.css), which flip with html[data-theme]. The variant props only
// pick which token to use.
const StyledButton = styled(BaseButton)<StyledButtonProperties>(
  ({ $clear, $large, $round, $withIcon }) => css`
    outline: none;
    border: 0;
    font-family: var(--ds-type-family-body);
    border-radius: ${$round ? 'var(--ds-radius-pill)' : 'var(--ds-radius-control)'};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: ${$withIcon ? '0.7rem' : $large ? '1.125rem 1rem' : '0.875rem 1rem'};
    color: ${$clear ? 'var(--ds-color-text-primary)' : 'var(--ds-color-action-on-primary)'};

    transition: box-shadow var(--ds-motion-fast) var(--ds-motion-ease);
    z-index: 1;
    background-color: ${$clear ? 'transparent' : 'var(--ds-color-action-primary)'};

    &:hover {
      cursor: pointer;
      background-color: ${
        $clear ? 'var(--ds-color-action-subtle-hover)' : 'var(--ds-color-action-primary-hover)'
      };
    }

    &:focus-visible {
      box-shadow: var(--ds-shadow-focus);
    }

    &[data-disabled] {
      background-color: ${$clear ? 'transparent' : 'var(--ds-color-action-primary)'};
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
