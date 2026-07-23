import { useState, ChangeEvent } from 'react'
import { Button as BaseButton } from '@base-ui/react/button'
import { Field } from '@base-ui/react/field'
import { Input as BaseInput } from '@base-ui/react/input'
import theme from '@droppy/theme'
import styled, { css } from 'styled-components'

import { breakpoints } from '../../../../styles/breakpoints'
import { Body } from '../../../../components/typography/Body'
import { type ContactDetailsFormData } from './validation'

const DisclaimerText = styled(Body)(
  ({ theme: { spacing } }) => css`
    margin-bottom: ${spacing.m};
  `
)

// Everything below through NextButton is what used to live in the app's
// Field/Input/Button wrappers — now duplicated at each call site this file
// needs, by design (milestone 1 has no shared wrappers). The theme.* classes
// carry the base chrome via @droppy/theme/styles.css; only the app's own
// label size and responsive button padding remain as local CSS.
const FieldRoot = styled(Field.Root)`
  label {
    font-size: var(--ds-type-size-md);
  }
`

const NextButton = styled(BaseButton)`
  z-index: 1;

  @media ${breakpoints.M} {
    padding: 0.875rem 1.5rem;
  }
`

type ContactDetailsProps = {
  formData: ContactDetailsFormData
  setFormData: (data: Partial<ContactDetailsFormData>) => void
  onNext: () => void
}

type FormErrors = {
  [K in keyof ContactDetailsFormData]?: string
}

const contactFields: (keyof ContactDetailsFormData)[] = ['firstName', 'lastName', 'email', 'phone']

export const ContactDetails = ({ formData, setFormData, onNext }: ContactDetailsProps) => {
  const [errors, setErrors] = useState<FormErrors>({})
  const [form, setForm] = useState<ContactDetailsFormData>(formData)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateField = (name: keyof ContactDetailsFormData, value: string): string | undefined => {
    if (!value) return 'Required'

    switch (name) {
      case 'firstName':
      case 'lastName': {
        return value.length < 2 ? 'Must be at least 2 characters' : undefined
      }
      case 'email': {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? undefined
          : 'Please enter a valid email address'
      }
      case 'phone': {
        return value.length < 10 ? 'Please enter a valid phone number' : undefined
      }
      default: {
        return undefined
      }
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))

    if (isSubmitted) {
      const error = validateField(name as keyof ContactDetailsFormData, value)
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }))
    }
  }

  const handleNext = () => {
    setIsSubmitted(true)

    // Validate only contact fields
    const newErrors: FormErrors = {}
    let hasErrors = false

    for (const field of contactFields) {
      const error = validateField(field, form[field])
      if (error) {
        newErrors[field] = error
        hasErrors = true
      }
    }

    setErrors(newErrors)

    if (!hasErrors) {
      setFormData(form)
      onNext()
    }
  }

  return (
    <div className="form">
      <FieldRoot className={theme.FieldRoot}>
        <Field.Label className={theme.FieldLabel}>First name</Field.Label>
        <BaseInput
          className={theme.Input}
          aria-label="First name"
          placeholder="John"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          autoComplete="off"
        />
        <Field.Error className={theme.FieldError} match>
          {(isSubmitted ? errors.firstName : undefined) || ' '}
        </Field.Error>
      </FieldRoot>
      <FieldRoot className={theme.FieldRoot}>
        <Field.Label className={theme.FieldLabel}>Last name</Field.Label>
        <BaseInput
          className={theme.Input}
          aria-label="Last name"
          placeholder="Doe"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          autoComplete="off"
        />
        <Field.Error className={theme.FieldError} match>
          {(isSubmitted ? errors.lastName : undefined) || ' '}
        </Field.Error>
      </FieldRoot>
      <FieldRoot className={theme.FieldRoot}>
        <Field.Label className={theme.FieldLabel}>Email</Field.Label>
        <BaseInput
          className={theme.Input}
          type="email"
          aria-label="Email"
          placeholder="email address"
          name="email"
          value={form.email}
          onChange={handleChange}
          autoComplete="off"
        />
        <Field.Error className={theme.FieldError} match>
          {(isSubmitted ? errors.email : undefined) || ' '}
        </Field.Error>
      </FieldRoot>
      <FieldRoot className={theme.FieldRoot}>
        <Field.Label className={theme.FieldLabel}>Phone number</Field.Label>
        <BaseInput
          className={theme.Input}
          type="tel"
          aria-label="Phone number"
          placeholder="phone number"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          autoComplete="off"
        />
        <Field.Error className={theme.FieldError} match>
          {(isSubmitted ? errors.phone : undefined) || ' '}
        </Field.Error>
      </FieldRoot>
      <DisclaimerText size="XXS" type="span">
        We'll only use your phone to call you about your order
      </DisclaimerText>
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <NextButton className={theme.Button} onClick={handleNext}>
          Next
        </NextButton>
      </div>
    </div>
  )
}
