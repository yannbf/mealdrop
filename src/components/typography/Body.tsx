import * as React from 'react'
import styled, { css } from 'styled-components'

type FontSize = 'body' | 'bodyS' | 'bodyXS' | 'bodyXXS'
type FontWeight = 'regular' | 'medium' | 'bold' | 'black'

type StyledBodyProps = {
  $size: string
  $fontWeight: string
}

const BodyBase = styled.p<StyledBodyProps>(
  ({ $size, $fontWeight, color: textColor, theme: { typography, color } }) => css`
    display: block;
    font-family: 'Hind';
    color: ${textColor || color.primaryText};
    font-weight: ${typography.fontWeight[$fontWeight as FontWeight]};
    font-size: ${typography.fontSize[`body${$size}` as FontSize]};
  `
)

type DefaultProps = {
  className?: string
  size?: 'S' | 'XS' | 'XXS'
  fontWeight?: 'regular' | 'medium' | 'bold' | 'black'
  type?: 'span' | 'p' | 'label' | 'figcaption'
  color?: string
  children: React.ReactNode | string
}

type BodyProps = DefaultProps & Omit<React.ComponentProps<'p'>, keyof DefaultProps>

export const Body: React.FC<React.PropsWithChildren<BodyProps>> = ({
  size = '',
  fontWeight = 'regular',
  type = 'p',
  color,
  children,
  className,
  ...props
}) => (
  <BodyBase
    as={type}
    $size={size}
    $fontWeight={fontWeight}
    color={color}
    className={className}
    {...props}
  >
    {children}
  </BodyBase>
)
