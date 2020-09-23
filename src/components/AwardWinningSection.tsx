import React from 'react'
import styled, { css } from 'styled-components'
import restaurants from '../assets/images/restaurants.png'
import { breakpoints } from '../styles/breakpoints'
import { Button } from './Button'

const StyledButton = styled(Button)`
  margin-top: 2.5rem;
`

const Container = styled.div`
  position: relative;
  overflow: hidden;
  background: #e5f8bc;
  width: 100%;
  display: flex;
  height: 487px;
`
const Heading = styled.h2<{ bolder?: boolean }>(
  ({ bolder }) => css`
    text-align: left;
    margin: 0;
    font-size: 2.5rem;
    font-weight: ${bolder ? '900' : '700'};
  `
)

const LeftContainer = styled.div`
  overflow: hidden;
  background: #e5f8bc;
  width: 100%;
  display: flex;
  height: 487px;
  flex: 0.3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 3.5rem;

  @media ${breakpoints.M} {
    flex: 0.5;
  }
`

const SlidingBackground = styled.div`
  flex: 0.7;
  background: url(${restaurants}) repeat-y;
  height: 5076px;
  animation: slide 60s linear infinite;
  width: 100%;

  @keyframes slide {
    0% {
      transform: translate3d(0, -1692px, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }

  @media ${breakpoints.M} {
    flex: 0.5;
  }
`

export const AwardWinningSection = () => (
  <Container>
    <LeftContainer>
      <Heading bolder>Award winning</Heading>
      <Heading>The best restaurants near you!</Heading>
      <StyledButton primary label="Explore best restaurants" />
    </LeftContainer>
    <SlidingBackground />
  </Container>
)
