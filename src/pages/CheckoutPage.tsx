import React from 'react'
import MultiStepForm from '../components/registration-form'
import { HeroImage } from '../components/HeroImage'
import styled from 'styled-components'
import { ShoppingCartDropdown } from '../components/shopping-cart'
import { useSelector } from 'react-redux'
import { selectCartItems } from '../app-state/cart'

const FormContainer = styled.main`
  width: 500px;
  margin: 0 auto;
  margin-top: -2.5rem;
  min-height: 480px;
  background: white;
  padding: 2rem 4rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
`

export const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems)

  return (
    <div style={{ marginBottom: '5rem' }}>
      <HeroImage url="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80" />
      <FormContainer>
        <MultiStepForm />
      </FormContainer>
      <ShoppingCartDropdown isCheckout cartItems={cartItems} />
    </div>
  )
}
