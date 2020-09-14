import React from 'react'
import MultiStepForm from '../components/registration-form'
import { HeroImage } from '../components/HeroImage'
import styled from 'styled-components'

const FormContainer = styled.main`
  width: 500px;
  margin: 0 auto;
  margin-top: -2.5rem;
  min-height: 480px;
  background: white;
  padding: 2rem 4rem;
  border: 1px solid rgba(0,0,0,0.1);
`;


export const RegisterPage = () => {
  return (
    <div style={{marginBottom: '5rem'}}>
      <HeroImage url="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80" />
      <FormContainer>
        <MultiStepForm />
      </FormContainer>
    </div>
  )
}
