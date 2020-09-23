import React from 'react'
import styled from 'styled-components'
import { breakpoints } from '../styles/breakpoints'

export type CategoryProps = {
  id?: string
  title: string
  photoUrl: string
  rounded?: boolean
}

const Container = styled.figure<{ $rounded: boolean }>`
  display: flex;
  position: relative;
  flex-direction: ${({ $rounded }) => ($rounded ? 'column' : 'row')};
  align-items: ${({ $rounded }) => ($rounded ? 'center' : 'start')};
  border-radius: 8px;
  background: ${({ $rounded }) => ($rounded ? '#F9F9F9' : 'transparent')};
  height: 100%;
  width: 100%;
  min-width: 50px;
  max-width: ${({ $rounded }) => ($rounded ? '200px' : 'auto')};
  max-height: ${({ $rounded }) => ($rounded ? '200px' : '300px')};
  margin: 0;
  padding: ${({ $rounded }) => ($rounded ? '1.5rem 2rem' : '0')};

  @media ${breakpoints.M} {
    padding: ${({ $rounded }) => ($rounded ? '1.5rem 0' : '0')};
  }
`

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

const FloatingTitle = styled.figcaption`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  border-radius: 8px;
  color: white;
  background: black;
  padding: 8px 16px;
  font-size: 18px;
  font-weight: bold;
  text-shadow: 2px 1px 2px rgba(0, 0, 0, 0.5);
`

const Rounded = ({ title, photoUrl: url }: CategoryProps) => (
  <>
    <RoundImage src={url} />
    <figcaption style={{ paddingTop: '1rem' }}>{title}</figcaption>
  </>
)

const Squared = ({ title, photoUrl: url }: CategoryProps) => (
  <>
    <Image src={url} />
    <FloatingTitle>{title}</FloatingTitle>
  </>
)

export const Category = (props: CategoryProps) => {
  const { photoUrl, title, rounded = false } = props
  return (
    <Container $rounded={rounded}>
      {rounded ? (
        <Rounded photoUrl={photoUrl} title={title} />
      ) : (
        <Squared photoUrl={photoUrl} title={title} />
      )}
    </Container>
  )
}
