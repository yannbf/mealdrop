import styled, { css } from 'styled-components'

import { breakpoints } from '../../styles/breakpoints'
import { Body } from '../typography'

export type CategoryProps = {
  id?: string
  title: string
  photoUrl: string
  rounded?: boolean
}

const Container = styled.figure<{ rounded: boolean }>(
  ({ rounded, theme: { color } }) => css`
    display: flex;
    position: relative;
    flex-direction: ${rounded ? 'column' : 'row'};
    align-items: ${rounded ? 'center' : 'start'};
    border-radius: 8px;
    background: ${rounded ? color.cardBackground : 'transparent'};
    height: 100%;
    width: 100%;
    min-width: 50px;
    max-width: ${rounded ? '200px' : 'auto'};
    max-height: ${rounded ? '200px' : '309px'};
    margin: 0;
    padding: ${rounded ? '1.5rem 2rem' : '0'};

    &:hover {
      opacity: 0.9;
    }

    @media ${breakpoints.M} {
      padding: ${rounded ? '1.5rem 0' : '0'};
    }
  `
)

const Image = styled.img`
  object-fit: cover;
  width: auto;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  min-width: 50px;
  min-height: 50px;
  max-height: 300px;
`
const RoundImage = styled(Image)`
  border-radius: 50%;
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

const FloatingTitle = styled.figcaption(
  ({ theme: { color } }) => css`
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
    border-radius: 8px;
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
      <Body type="span">{title}</Body>
    </FloatingTitle>
  </>
)

export const Category = (props: CategoryProps) => {
  const { photoUrl, title, rounded = false } = props
  return (
    <Container rounded={rounded}>
      {rounded ? (
        <Rounded photoUrl={photoUrl} title={title} />
      ) : (
        <Squared photoUrl={photoUrl} title={title} />
      )}
    </Container>
  )
}
