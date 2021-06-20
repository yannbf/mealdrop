// @ts-nocheck
import * as React from 'react';
import styled, { css } from 'styled-components'

type fontSizeType = 'heading1' | 'heading2' | 'heading3' | 'heading4'

const HeadingBase = styled.h1<{ level: number }>(
  ({
    level,
    theme: {
      color,
      typography: { fontSize },
    },
  }) => css`
    margin: 0;
    color: ${color.primaryText};
    font-family: 'Montserrat';
    letter-spacing: ${level === 1 || level === 2 ? '-2px' : 'unset'};
    font-size: ${fontSize[`heading${level}` as fontSizeType]};
  `
)

type DefaultProps = {
  level?: 1 | 2 | 3 | 4 | 5
  className?: string
  children: React.ReactNode | string
}

type HeadingProps = DefaultProps & React.ComponentProps<typeof HeadingBase>;

export const Heading: React.FC<HeadingProps> = ({
  level = 1,
  children,
  className,
}) => {
  const heading = `h${level}`
  return (
    <HeadingBase as={heading} level={level} className={className}>
      {children}
    </HeadingBase>
  )
}
