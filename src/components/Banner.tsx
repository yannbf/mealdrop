import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import ladies from '../assets/images/ladies.svg'
import { breakpoints } from '../styles/breakpoints'

const Container = styled.div`
  background: #b1dde4;
  width: 100%;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 410px;
  padding-top: 3.75rem;

  @media ${breakpoints.M} {
    padding-top: 6rem;
    height: 566px;
  }
`

const Image = styled.img`
  position: absolute;
  bottom: -1px;
  width: 740px;
  @media ${breakpoints.M} {
    width: 1040px;
  }
`

const Heading = styled.h1`
  margin: 0;
  margin-bottom: 2.5rem;
  padding: 0 2rem;
  strong {
    font-weight: 900;
  }
`

export const Banner = () => (
  <Container>
    <Heading><strong>Hungry?</strong> find your next meal</Heading>
    <Button primary label="View all restaurants" />
    <Image src={ladies} />
  </Container>
)
