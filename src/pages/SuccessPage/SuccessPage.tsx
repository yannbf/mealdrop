import styled, { css } from 'styled-components'

import ladies from '../../assets/images/ladies-sushi.svg'
import { useAppSelector } from '../../app-state'
import { selectOrderItems } from '../../app-state/order'
import { PageTemplate } from '../../templates/PageTemplate'
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
    position: relative;
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
  margin-bottom: 1.5rem;
  text-align: left;
`

export const SuccessPage = () => {
  const orderItems = useAppSelector(selectOrderItems)
  return (
    <PageTemplate type="basic">
      <Container>
        <TopBanner title="Order confirmed!" />
        <OrderSummaryContainer>
          <Body type="span">Estimated delivery</Body>
          <StyledHeading level={2}>13:23 today</StyledHeading>
          <OrderSummary cartItems={orderItems} />
        </OrderSummaryContainer>
        <Image src={ladies} />
      </Container>
    </PageTemplate>
  )
}
