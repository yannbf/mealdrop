import styled, { css } from 'styled-components'

import { useAppSelector } from '../../app-state'
import ladies from '../../assets/images/ladies-sushi.svg'
import { selectCartItems } from '../../app-state/cart'
import { TopBanner } from '../../components/TopBanner'
import { Heading } from '../../components/typography/Heading'
import { OrderSummary } from '../../components/ShoppingCart'
import { breakpoints } from '../../styles/breakpoints'
import { Body } from '../../components/typography/Body'

const Image = styled.div<{ src: string }>(
  ({ src }) => css`
    background: url(${src});
    width: 100%;
    height: 230px;
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: 100%;
    position: fixed;
    margin: 0 auto;
    bottom: 0;
    right: 0;
    left: 0;
    background-size: 600px;
    display: flex;
    justify-content: center;
    @media ${breakpoints.S} {
      height: 368px;
      width: 700px;
      background-size: contain;
    }
  `
)

const StyledHeading = styled(Heading)`
  margin-bottom: 1.5rem;
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
  margin-top: 2.5rem;
  margin-bottom: 12.5rem;
  text-align: left;
`

export const SuccessPage = () => {
  const cartItems = useAppSelector(selectCartItems)
  return (
    <Container>
      <TopBanner title="Order confirmed!" />
      <OrderSummaryContainer>
        <Body type="span">Estimated delivery</Body>
        <StyledHeading level={2}>13:23 today</StyledHeading>
        <OrderSummary cartItems={cartItems} />
      </OrderSummaryContainer>
      <Image src={ladies} />
    </Container>
  )
}
