import { Body, Card } from '@droppy/design-system'
import styled, { css } from 'styled-components'

import { breakpoints } from '../../styles/breakpoints'

export type CategoryProps = {
  id?: string
  title: string
  photoUrl: string
  round?: boolean
}

const SquaredContainer = styled.figure(
  ({ theme: { borderRadius } }) => css`
    display: flex;
    cursor: pointer;
    position: relative;
    flex-direction: row;
    align-items: start;
    border-radius: ${borderRadius.s};
    background: transparent;
    height: 100%;
    width: 100%;
    min-width: 50px;
    max-height: 309px;
    margin: 0;
    padding: 0;

    &:hover {
      opacity: 0.9;
    }
  `
)

// Squared tiles stay a plain figure (transparent, no shell) — only the round
// avatar tile is a card. Layout only; the shell (background, radius, shadow,
// hover dim) comes from Card.
const RoundCard = styled(Card).attrs({ interactive: true })`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  min-width: 50px;
  max-width: 200px;
  max-height: 200px;
  margin: 0;
  padding: 1.5rem 2rem;

  @media ${breakpoints.M} {
    padding: 1.5rem 0;
  }
`

const Image = styled.img(
  ({ theme: { borderRadius } }) => css`
    object-fit: cover;
    width: auto;
    border-radius: ${borderRadius.s};
    width: 100%;
    height: 100%;
    min-width: 50px;
    min-height: 50px;
    max-height: 300px;
  `
)

const RoundImage = styled(Image)(
  ({ theme: { borderRadius } }) => css`
    border-radius: ${borderRadius.round};
    width: 4.5rem;
    height: 4.5rem;
    min-width: 4.5rem;
    min-height: 4.5rem;
    max-height: 200px;
    @media ${breakpoints.M} {
      width: 6.5rem;
      height: 6.5rem;
      min-width: 6.5rem;
      min-height: 6.5rem;
    }
  `
)

const FloatingTitle = styled.figcaption(
  ({ theme: { color, borderRadius } }) => css`
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
    border-radius: ${borderRadius.s};
    background: #202020;
    padding: 8px 16px;
    text-shadow: 2px 1px 2px rgba(0, 0, 0, 0.5);
    span {
      color: ${color.white};
    }
  `
)

const Title = styled(Body)`
  padding-top: 1rem;
`

const Rounded = ({ title, photoUrl: url }: CategoryProps) => (
  <RoundCard data-testid={title}>
    <RoundImage src={url} alt="restaurant category" />
    <Title type="span">{title}</Title>
  </RoundCard>
)

const Squared = ({ title, photoUrl: url }: CategoryProps) => (
  <SquaredContainer data-testid={title}>
    <Image src={url} alt="restaurant category" />
    <FloatingTitle>
      <Body type="span" fontWeight="medium">
        {title}
      </Body>
    </FloatingTitle>
  </SquaredContainer>
)

export const Category = ({ photoUrl, title, round = false }: CategoryProps) =>
  round ? (
    <Rounded photoUrl={photoUrl} title={title} />
  ) : (
    <Squared photoUrl={photoUrl} title={title} />
  )
