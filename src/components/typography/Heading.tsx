import React from 'react'
import styled, { css } from 'styled-components'

type fontSizeType = 'heading1' | 'heading2' | 'heading3' | 'heading4'

const HeadingBase = styled.h1<{ level: number }>(
  ({
    level,
    theme: {
      typography: { fontSize },
    },
  }) => css`
    font-size: ${fontSize[`heading${level}` as fontSizeType]};
  `
)

export type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5
  children: React.ReactNode | string
}

export const Heading: React.FC<HeadingProps> = ({ level = 1, children }) => {
  const heading = `h${level}`
  return (
    <HeadingBase as={heading} level={level}>
      {children}
    </HeadingBase>
  )
}
