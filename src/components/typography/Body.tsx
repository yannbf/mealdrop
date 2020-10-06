import React from 'react'
import styled, { css } from 'styled-components'

type fontSizeType = 'body' | 'bodyS' | 'bodyXS' | 'bodyXXS'
type fontWeightType = 'regular' | 'medium' | 'bold' | 'black'

const BodyBase = styled.p<{ size: string; fontWeight: string }>(
  ({ size, fontWeight, theme: { typography } }) => css`
    font-family: 'Hind';
    font-weight: ${typography.fontWeight[fontWeight as fontWeightType]};
    font-size: ${typography.fontSize[`body${size}` as fontSizeType]};
  `
)

export type BodyProps = {
  size?: 'S' | 'XS' | 'XXS'
  fontWeight?: 'regular' | 'medium' | 'bold' | 'black'
  type?: 'span' | 'p' | 'label' | 'figcaption'
  children: React.ReactNode | string
}

export const Body: React.FC<BodyProps> = ({
  size = '',
  fontWeight = 'regular',
  type = 'p',
  children,
}) => {
  return (
    <BodyBase as={type} size={size} fontWeight={fontWeight}>
      {children}
    </BodyBase>
  )
}
