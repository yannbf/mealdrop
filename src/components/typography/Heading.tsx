import * as React from 'react'
import styled, { css } from 'styled-components'

type FontSize = 'heading1' | 'heading2' | 'heading3' | 'heading4'

const HeadingBase = styled.h1<{ $level: number }>(
  ({
    $level,
    theme: {
      color,
      typography: { fontSize },
    },
  }) => css`
    margin: 0;
    color: ${color.primaryText};
    font-family: 'Montserrat';
    letter-spacing: ${$level === 1 || $level === 2 ? '-2px' : 'unset'};
    font-size: ${fontSize[`heading${$level}` as FontSize]};
  `
)

type DefaultProps = {
  level?: 1 | 2 | 3 | 4 | 5
  className?: string
}

type HeadingProps = DefaultProps & Omit<React.ComponentProps<'h1'>, keyof DefaultProps>

// Forwards ref and rest props (id, aria-*) so composition wrappers like
// Drawer.Title can wire aria-labelledby to the rendered heading.
export const Heading = React.forwardRef<HTMLHeadingElement, React.PropsWithChildren<HeadingProps>>(
  ({ level = 1, children, className, ...rest }, ref) => {
    const heading = `h${level}` as React.ElementType
    return (
      <HeadingBase ref={ref} as={heading} $level={level} className={className} {...rest}>
        {children}
      </HeadingBase>
    )
  }
)
Heading.displayName = 'Heading'
