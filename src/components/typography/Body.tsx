import * as React from 'react';
import styled, { css } from 'styled-components'

type fontSizeType = 'body' | 'bodyS' | 'bodyXS' | 'bodyXXS'
type fontWeightType = 'regular' | 'medium' | 'bold' | 'black'

const BodyBase = styled.p<{ size: string; fontWeight: string }>(
  ({ size, fontWeight, color: textColor, theme: { typography, color } }) => css`
    display: block;
    font-family: 'Hind';
    color: ${textColor || color.primaryText};
    font-weight: ${typography.fontWeight[fontWeight as fontWeightType]};
    font-size: ${typography.fontSize[`body${size}` as fontSizeType]};
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

type BodyProps = DefaultProps & React.ComponentProps<typeof BodyBase>;

export const Body: React.FC<BodyProps> = ({
  size = '',
  fontWeight = 'regular',
  type = 'p',
  color,
  children,
  className,
  ...props
}) => {
  return (
    <BodyBase
      as={type}
      size={size}
      color={color}
      fontWeight={fontWeight}
      className={className}
      {...props}
    >
      {children}
    </BodyBase>
  )
}
