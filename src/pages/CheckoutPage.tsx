import React from 'react'
import MultiStepForm from '../components/registration-form'
import { HeroImage } from '../components/HeroImage'
import styled from 'styled-components'
import { ShoppingCartDropdown } from '../components/shopping-cart'
import { useSelector } from 'react-redux'
import { selectCartItems } from '../app-state/cart'
import { breakpoints } from '../styles/breakpoints'

const ContentContainer = styled.div`
  display: flex;
  margin-top: -2.5rem;
  justify-content: center;
  flex-direction: column;

  @media ${breakpoints.S} {
    flex-direction: row;
  }
`

const FormContainer = styled.div`
  width: 100%;
  min-height: 480px;
  margin-right: 4rem;
  background: white;
  padding: 2rem 4rem;
  border: 1px solid rgba(0, 0, 0, 0.1);

  @media ${breakpoints.S} {
    width: 500px;
  }
`

export const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems)

  return (
    <div style={{ marginBottom: '5rem' }}>
      <HeroImage url="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80" />
      <ContentContainer>
        <FormContainer>
          <MultiStepForm />
        </FormContainer>
        <ShoppingCartDropdown isCheckout cartItems={cartItems} />
      </ContentContainer>
    </div>
  )
}
