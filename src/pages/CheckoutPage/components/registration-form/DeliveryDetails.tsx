import { useState, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button as BaseButton } from '@base-ui/react/button'
import { Field } from '@base-ui/react/field'
import { Input as BaseInput } from '@base-ui/react/input'
import theme from '@droppy/theme'
import styled from 'styled-components'

import { saveOrderAction } from '../../../../app-state/order'
import { useAppDispatch, useAppSelector } from '../../../../app-state'
import { clearCartAction, selectCartItems } from '../../../../app-state/cart'
import { breakpoints } from '../../../../styles/breakpoints'
import { type DeliveryDetailsFormData } from './validation'

// Everything below through PrevButton/CompleteButton is what used to live in
// the app's Field/Input/Button wrappers — now duplicated at each call site
// this file needs, by design (milestone 1 has no shared wrappers). The
// theme.* classes carry the base chrome via @droppy/theme/styles.css; only
// the app's own label size and responsive button padding remain as local
// CSS.
const FieldRoot = styled(Field.Root)`
  label {
    font-size: var(--ds-type-size-md);
  }
`

const PrevButton = styled(BaseButton)`
  z-index: 1;
  color: var(--ds-color-text-primary);
  background-color: transparent;

  &:hover:not([data-disabled]) {
    background-color: var(--ds-color-action-subtle-hover);
  }

  &[data-disabled] {
    background-color: transparent;
  }

  @media ${breakpoints.M} {
    padding: 0.875rem 1.5rem;
  }
`

const CompleteButton = styled(BaseButton)`
  z-index: 1;

  @media ${breakpoints.M} {
    padding: 0.875rem 1.5rem;
  }
`

type DeliveryDetailsProps = {
  formData: DeliveryDetailsFormData
  setFormData: (data: Partial<DeliveryDetailsFormData>) => void
  onPrevious: () => void
}

type FormErrors = {
  [K in keyof DeliveryDetailsFormData]?: string
}

const deliveryFields: (keyof DeliveryDetailsFormData)[] = ['address', 'city', 'postcode']

export const DeliveryDetails = ({ formData, setFormData, onPrevious }: DeliveryDetailsProps) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const cartItems = useAppSelector(selectCartItems)
  const [errors, setErrors] = useState<FormErrors>({})
  const [form, setForm] = useState<DeliveryDetailsFormData>(formData)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateField = (
    name: keyof DeliveryDetailsFormData,
    value: string
  ): string | undefined => {
    if (!value) return 'Required'

    switch (name) {
      case 'address': {
        return value.length < 5 ? 'Please enter a valid address' : undefined
      }
      case 'city': {
        return value.length < 2 ? 'Please enter a valid city' : undefined
      }
      case 'postcode': {
        return /^[0-9]{4}[A-Z]{2}$/.test(value)
          ? undefined
          : 'Please enter a valid postcode (e.g., 1234AB)'
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
      const error = validateField(name as keyof DeliveryDetailsFormData, value)
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }))
    }
  }

  const handleComplete = () => {
    setIsSubmitted(true)

    // Validate only delivery fields
    const newErrors: FormErrors = {}
    let hasErrors = false

    for (const field of deliveryFields) {
      const error = validateField(field, form[field])
      if (error) {
        newErrors[field] = error
        hasErrors = true
      }
    }

    setErrors(newErrors)

    if (!hasErrors) {
      setFormData(form)
      dispatch(saveOrderAction(cartItems))
      dispatch(clearCartAction())
      navigate('/success')
    }
  }

  return (
    <div className="form">
      <FieldRoot className={theme.FieldRoot}>
        <Field.Label className={theme.FieldLabel}>Streetname and housenumber</Field.Label>
        <BaseInput
          className={theme.Input}
          aria-label="Streetname and housenumber"
          placeholder="Some street, 13"
          name="address"
          value={form.address}
          onChange={handleChange}
          autoComplete="off"
        />
        <Field.Error className={theme.FieldError} match>
          {(isSubmitted ? errors.address : undefined) || ' '}
        </Field.Error>
      </FieldRoot>
      <FieldRoot className={theme.FieldRoot}>
        <Field.Label className={theme.FieldLabel}>Postcode</Field.Label>
        <BaseInput
          className={theme.Input}
          aria-label="Postcode"
          placeholder="AAAAXX"
          name="postcode"
          value={form.postcode}
          onChange={handleChange}
          autoComplete="off"
        />
        <Field.Error className={theme.FieldError} match>
          {(isSubmitted ? errors.postcode : undefined) || ' '}
        </Field.Error>
      </FieldRoot>
      <FieldRoot className={theme.FieldRoot}>
        <Field.Label className={theme.FieldLabel}>City</Field.Label>
        <BaseInput
          className={theme.Input}
          aria-label="City"
          placeholder="Amsterdam"
          name="city"
          value={form.city}
          onChange={handleChange}
          autoComplete="off"
        />
        <Field.Error className={theme.FieldError} match>
          {(isSubmitted ? errors.city : undefined) || ' '}
        </Field.Error>
      </FieldRoot>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <PrevButton className={theme.Button} onClick={onPrevious}>
          Previous
        </PrevButton>
        <CompleteButton className={theme.Button} onClick={handleComplete}>
          Complete order
        </CompleteButton>
      </div>
    </div>
  )
}
