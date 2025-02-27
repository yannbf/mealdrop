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

type AsElement = 'span' | 'p' | 'label' | 'figcaption'

type ElementProps<T extends AsElement> = T extends 'label'
  ? React.LabelHTMLAttributes<HTMLLabelElement>
  : T extends 'span'
    ? React.HTMLAttributes<HTMLSpanElement>
    : T extends 'p'
      ? React.HTMLAttributes<HTMLParagraphElement>
      : React.HTMLAttributes<HTMLElement>

type DefaultProps = {
  className?: string
  size?: 'S' | 'XS' | 'XXS'
  fontWeight?: 'regular' | 'medium' | 'bold' | 'black'
  type?: AsElement
  color?: string
  children: React.ReactNode | string
}

type BodyProps = DefaultProps & ElementProps<AsElement>

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
