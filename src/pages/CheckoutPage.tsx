import React from 'react'
import styled, { css } from 'styled-components'
import { useSelector } from 'react-redux'

import { ShoppingCartDropdown } from '../components/shopping-cart'
import { selectCartItems } from '../app-state/cart'
import { breakpoints } from '../styles/breakpoints'
import { Heading } from '../components/typography/Heading'
import { MultiStepForm } from '../components/registration-form'

const ContentContainer = styled.div`
  display: flex;
  margin-top: -5rem !important;
  justify-content: center;
  flex-direction: column-reverse;
  align-items: flex-start;

  @media ${breakpoints.S} {
    flex-direction: row;
  }
`

const OrderDetailsContainer = styled.div`
  width: 100%;
  margin-bottom: 4rem;
  margin-top: -2.5rem;

  @media ${breakpoints.M} {
    margin-top: -5rem;
    width: 420px;
  }
`

const FormContainer = styled.div`
  width: 100%;
  min-height: 480px;
  margin-right: 1.5rem;
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
`

const TopContainer = styled.div(
  ({ theme: { color } }) => css`
    min-height: 300px;
    background: ${color.topBannerBackground};
  `
)

export const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems)

  return (
    <div style={{ paddingBottom: '8rem', background: '#F9F9F9' }}>
      <TopContainer className="container">
        <Heading level={2}>Checkout</Heading>
      </TopContainer>
      <ContentContainer className="container">
        <FormContainer>
          <MultiStepForm />
        </FormContainer>
        <OrderDetailsContainer>
          <ShoppingCartDropdown isCheckout cartItems={cartItems} />
        </OrderDetailsContainer>
      </ContentContainer>
    </div>
  )
}
