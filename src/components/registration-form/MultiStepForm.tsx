import React from 'react'
import { useForm, useStep } from 'react-hooks-helper'

import Names from './Names'
import Address from './Address'
import Submit from './Submit'
import { StepIndicator } from './StepIndicator'

const steps = ['names', 'address', 'submit']

const defaultData = {
  firstName: 'John',
  lastName: 'Doe',
  address: 'Somestreet 14',
  city: 'Amsterdam',
  postcode: '1043DX',
  email: 'email@domain.com',
  phone: '0612345678',
}

const getCurrentStep = (step: string, props: any) => {
  switch (step) {
    case 'names':
      return <Names {...props} />
    case 'address':
      return <Address {...props} />
    case 'submit':
      return <Submit {...props} />
    default:
      return null
  }
}

export const MultiStepForm = () => {
  const [formData, setForm] = useForm(defaultData)
  const { step, navigation, index } = useStep({ initialStep: 0, steps })

  const props = { formData, setForm, navigation }
  const currentIndex = index + 1
  const hasReachedLastStep = currentIndex >= steps.length
  return (
    <div>
      {!hasReachedLastStep && (
        <StepIndicator
          currentStep={currentIndex}
          amountOfSteps={steps.length}
        />
      )}
      {getCurrentStep(step.toString(), props)}
    </div>
  )
}
