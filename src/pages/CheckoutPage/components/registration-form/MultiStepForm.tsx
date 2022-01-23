import { Step, useForm, useStep } from 'react-hooks-helper'
import styled, { css } from 'styled-components'

import { ContactDetails } from './ContactDetails'
import { DeliveryDetails } from './DeliveryDetails'
import { StepIndicator } from './StepIndicator'

const steps: Step[] = [{ id: 'Contact details' }, { id: 'Delivery details' }]

const defaultData = {
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  postcode: '',
  email: '',
  phone: '',
}

const getCurrentStep = (step: string, props: any) => {
  switch (step) {
    case 'Contact details':
      return <ContactDetails {...props} />
    case 'Delivery details':
      return <DeliveryDetails {...props} />
    default:
      return null
  }
}

const FormContainer = styled.div(
  ({ theme: { color, borderRadius } }) => css`
    width: 100%;
    min-height: 480px;
    margin-right: 1.5rem;
    background: ${color.formBackground};
    padding: 1.5rem;
    border-radius: ${borderRadius.s};
  `
)

export const MultiStepForm = () => {
  const [formData, setForm] = useForm(defaultData)
  const { step, navigation, index } = useStep({ initialStep: 0, steps })

  const currentStepId = (step as Step).id
  const props = { formData, setForm, navigation }
  const currentIndex = index + 1

  return (
    <FormContainer>
      <StepIndicator
        title={currentStepId}
        currentStep={currentIndex}
        amountOfSteps={steps.length}
      />
      {getCurrentStep(currentStepId, props)}
    </FormContainer>
  )
}
