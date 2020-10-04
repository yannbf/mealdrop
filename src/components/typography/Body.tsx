import React from 'react'
import styled, { css } from 'styled-components'

type fontSizeType = 'body' | 'bodyS' | 'bodyXS' | 'bodyXXS'

const BodyBase = styled.p<{ size: string }>(
  ({
    size,
    theme: {
      typography: { fontSize },
    },
  }) => css`
    font-size: ${fontSize[`body${size}` as fontSizeType]};
  `
)

export type BodyProps = {
  size?: 'S' | 'XS' | 'XXS'
  children: React.ReactNode | string
}

export const Body: React.FC<BodyProps> = ({ size = '', children }) => {
  return (
    <BodyBase size={size}>
      {children}
    </BodyBase>
  )
}
