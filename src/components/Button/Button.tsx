import * as React from 'react'
import { Button as MdButton } from '@base-ui/react/button'
import styled, { css, useTheme } from 'styled-components'
import theme from '@droppy/theme'

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

// The theme.Button chrome (fill, radius, focus ring, body face, hover,
// disabled) comes from @droppy/theme/styles.css via the theme.Button class
// applied below; only Mealdrop-app variants and layout remain here.
const StyledButton = styled(MdButton)<StyledButtonProperties>(
  ({ $clear, $large, $round, $withIcon }) => css`
    z-index: 1;
    padding: ${$withIcon ? '0.7rem' : $large ? '1.125rem 1rem' : '0.875rem 1rem'};
    ${$round ? 'border-radius: var(--ds-radius-pill);' : ''}
    ${
      $clear
        ? css`
            color: var(--ds-color-text-primary);
            background-color: transparent;

            &:hover:not([data-disabled]) {
              background-color: var(--ds-color-action-subtle-hover);
            }

            &[data-disabled] {
              background-color: transparent;
            }
          `
        : ''
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
  className,
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
      // theme.Button must survive being wrapped further (e.g. styled(Button)
      // in AwardWinningSection/FoodItemModal passes its own className down)
      // — merge rather than let an incoming className win.
      className={className ? `${theme.Button} ${className}` : theme.Button}
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
