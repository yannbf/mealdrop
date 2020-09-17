import React from 'react'
import styled from 'styled-components'
import { CATEGORIES } from '../constants'

export type CategoryProps = {
  title: string
  photoUrl: string
  rounded?: boolean
}

const Container = styled.figure<{ $rounded: boolean }>`
  display: flex;
  position: relative;
  flex-direction: ${({ $rounded }) => ($rounded ? 'column' : 'row')};
  align-items: ${({ $rounded }) => ($rounded ? 'center' : 'start')};
  width: auto;
  height: 100%;
  min-width: 50px;
  min-height: 50px;
  max-height: 300px;
  margin: 0;
`

const Image = styled.img`
  object-fit: cover;
  width: auto;
  height: 100%;
  min-width: 50px;
  min-height: 50px;
  max-height: 300px;
`
const RoundImage = styled(Image)`
  border-radius: 50%;
  width: 8rem;
  height: 8rem;
  max-height: 200px;
`

const FloatingTitle = styled.figcaption`
  position: absolute;
  bottom: 0.5rem;
  color: white;
  left: 0.5rem;
  font-size: 18px;
  font-weight: bold;
  text-shadow: 2px 1px 2px rgba(0, 0, 0, 0.5);
`

const Rounded = ({ title, photoUrl: url }: CategoryProps) => (
  <>
    <RoundImage src={url} />
    <figcaption style={{paddingTop: '1rem'}}>{title}</figcaption>
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
  const categoryTitle = CATEGORIES[title]
  return (
    <Container $rounded={rounded}>
      {rounded ? (
        <Rounded photoUrl={photoUrl} title={categoryTitle} />
      ) : (
        <Squared photoUrl={photoUrl} title={categoryTitle} />
      )}
    </Container>
  )
}
