import React from 'react'
import styled, { css } from 'styled-components'
import { useSelector } from 'react-redux'

import ladies from '../assets/images/ladies-sushi.svg'
import { selectCartItems } from '../app-state/cart'
import { TopBanner } from '../components/TopBanner'
import { Heading } from '../components/typography/Heading'
import { OrderSummary } from '../components/shopping-cart'
import { breakpoints } from '../styles/breakpoints'
import { Body } from '../components/typography/Body'

const Image = styled.div<{ src: string }>(
  ({ src }) => css`
    background: url(${src});
    width: 100%;
    height: 230px;
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: 100%;
    position: fixed;
    bottom: 0;
    background-size: 600px;
    display: flex;
    justify-content: center;
    @media ${breakpoints.S} {
      height: 368px;
      background-size: 1000px;
    }
  `
)

const StyledHeading = styled(Heading)`
  position: absolute;
  top: 0;
`

const Container = styled.div(
  ({ theme: { color } }) => css`
    background: ${color.menuSectionBackground};
    min-height: 100vh;
  `
)

const OrderSummaryContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  margin-top: -3rem;
  text-align: center;
`

export const SuccessPage = () => {
  const cartItems = useSelector(selectCartItems)
  return (
    <Container>
      <TopBanner title="Order confirmed!" />
      <OrderSummaryContainer>
        <Body type="span">Estimated delivery</Body>
        <Heading level={2}>13:23 today</Heading>
        <OrderSummary cartItems={cartItems} />
      </OrderSummaryContainer>
      <Image src={ladies}>
        <StyledHeading level={3}>Bon appetit</StyledHeading>
      </Image>
    </Container>
  )
}
