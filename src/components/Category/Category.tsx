import styled, { css } from 'styled-components'

import { breakpoints } from '../../styles/breakpoints'
import { Body } from '../typography'

export type CategoryProps = {
  id?: string
  title: string
  photoUrl: string
  round?: boolean
}

const Container = styled.figure<{ round: boolean }>(
  ({ round, theme: { color, borderRadius } }) => css`
    display: flex;
    cursor: pointer;
    position: relative;
    flex-direction: ${round ? 'column' : 'row'};
    align-items: ${round ? 'center' : 'start'};
    border-radius: ${borderRadius.s};
    background: ${round ? color.cardBackground : 'transparent'};
    height: 100%;
    width: 100%;
    min-width: 50px;
    max-width: ${round ? '200px' : 'auto'};
    max-height: ${round ? '200px' : '309px'};
    margin: 0;
    padding: ${round ? '1.5rem 2rem' : '0'};

    &:hover {
      opacity: 0.9;
    }

    @media ${breakpoints.M} {
      padding: ${round ? '1.5rem 0' : '0'};
    }
  `
)

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

const Title = styled.figcaption`
  padding-top: 1rem;
`

const Rounded = ({ title, photoUrl: url }: CategoryProps) => (
  <>
    <RoundImage src={url} alt="restaurant category" />
    <Title>
      <Body type="span">{title}</Body>
    </Title>
  </>
)

const Squared = ({ title, photoUrl: url }: CategoryProps) => (
  <>
    <Image src={url} alt="restaurant category" />
    <FloatingTitle>
      <Body type="span" fontWeight="medium">
        {title}
      </Body>
    </FloatingTitle>
  </>
)

export const Category = ({ photoUrl, title, round = false }: CategoryProps) => {
  return (
    <Container round={round} data-testid={title}>
      {round ? (
        <Rounded photoUrl={photoUrl} title={title} />
      ) : (
        <Squared photoUrl={photoUrl} title={title} />
      )}
    </Container>
  )
}
