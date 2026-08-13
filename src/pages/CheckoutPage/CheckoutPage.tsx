import { Container, Heading } from '@droppy/design-system'
import styled from 'styled-components'

import { useAppSelector } from '../../app-state'
import { OrderSummary } from '../../components/ShoppingCart'
import { selectCartItems } from '../../app-state/cart'
import { breakpoints } from '../../styles/breakpoints'
import { PageTemplate } from '../../templates/PageTemplate'

import { MultiStepForm } from './components/registration-form/MultiStepForm'

const OrderDetailsContainer = styled.div`
  width: 100%;
  margin-bottom: 4rem;

  @media ${breakpoints.M} {
    width: 420px;
  }
`

// checkoutTopBackground has no matching design-token pair (light #e5f8bc /
// dark #202020): kept as literals with an explicit dark override.
const TopContainer = styled.div`
  padding-top: 3.25em;
  margin-bottom: 1em;
  min-height: 260px;
  background: #e5f8bc;

  :root[data-theme='dark'] & {
    background: #202020;
  }

  @media ${breakpoints.M} {
    padding-top: 5.25em;
    min-height: 300px;
  }
`

const BottomContainer = styled(Container)`
  display: flex;
  margin-top: -12rem !important;
  justify-content: center;
  flex-direction: column-reverse;
  align-items: flex-start;

  @media ${breakpoints.S} {
    margin-top: -10rem !important;
    flex-direction: row;
  }
`

const StyledHeading = styled(Heading)`
  margin: 0 auto;
`

// checkoutBottomBackground has no matching design-token pair (light #f9f9f9
// / dark #797979): kept as literals with an explicit dark override.
const ContentContainer = styled.div`
  min-height: 100vh;
  padding-bottom: 5.25em;
  background: #f9f9f9;

  :root[data-theme='dark'] & {
    background: #797979;
  }
`

export const CheckoutPage = () => {
  const cartItems = useAppSelector(selectCartItems)

  return (
    <PageTemplate type="basic">
      <ContentContainer>
        <TopContainer>
          <StyledHeading level={2} className="container">
            Checkout
          </StyledHeading>
        </TopContainer>
        <BottomContainer>
          <MultiStepForm />
          <OrderDetailsContainer>
            <OrderSummary cartItems={cartItems} />
          </OrderDetailsContainer>
        </BottomContainer>
      </ContentContainer>
    </PageTemplate>
  )
}
