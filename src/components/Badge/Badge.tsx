import styled, { css } from 'styled-components'

import { Body } from '../typography'
import type { BadgeVariant } from './BadgeVariant'

const Container = styled.div(
  ({ theme: { color, borderRadius } }) => css`
    padding: 3px 8px;
    background: ${color.badgeBackground};
    border-radius: ${borderRadius.xs};
    display: inline-block;
    text-transform: capitalize;
    span {
      color: ${color.badgeText};
    }
  `
)

type BadgeProps = {
  text: string
  variant?: BadgeVariant
  className?: string
}

export const Badge = ({ text, className }: BadgeProps) => (
  <Container className={className}>
    <Body type="span" size="S">
      {text}
    </Body>
  </Container>
)
