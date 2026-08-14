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

// No semantic token pairs these values: composed from palette variables
// with an explicit dark override.
const TopContainer = styled.div`
  padding-top: 3.25em;
  margin-bottom: 1em;
  min-height: 260px;
  background: var(--ds-palette-green-200);

  :root[data-ds-theme='dark'] & {
    background: var(--ds-palette-neutral-950);
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

// No semantic token pairs these values: composed from palette variables
// with an explicit dark override.
const ContentContainer = styled.div`
  min-height: 100vh;
  padding-bottom: 5.25em;
  background: var(--ds-palette-neutral-50);

  :root[data-ds-theme='dark'] & {
    background: var(--ds-palette-neutral-600);
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
