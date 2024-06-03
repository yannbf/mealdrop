import styled, { css } from 'styled-components'

import { Body } from '../typography'

const Container = styled.div(
  ({ theme: { color, borderRadius } }) => css`
    padding: 3px 8px;
    background: ${color.black};
    border-radius: ${borderRadius.xs};
    display: inline-block;
    text-transform: capitalize;
    span {
      color: ${color.white};
    }
  `
)

type BadgeProps = {
  text: string
  className?: string
}

export const Badge = ({ text, className }: BadgeProps) => (
  <Container className={className}>
    <Body type="span" size="S">
      {text}
    </Body>
  </Container>
)
