import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { Field, Input as MdInput } from '@base-ui/mealdrop'
import styled from 'styled-components'

// @base-ui/mealdrop Field/Input carry the chrome (sunken surface, control
// radius, focus ring, label/error colors and focus-active flip) via
// styles.css. The app keeps only its label size (the original used the
// 1.125rem body size; the package default is 1rem).
const Container = styled(Field.Root)`
  label {
    font-size: var(--ds-type-size-md);
  }
`

// `match` forces the error slot to always mount so layout never jumps (the
// package styles give it a fixed min-height); children override Field.Error's
// computed message while keeping the aria-describedby wiring.
const ErrorMessage = Field.Error

type InputProps = {
  label?: string
  value?: any
  onChange?: (data: any) => void
  error?: string
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const Input = ({ label = '', type = 'text', id, error, ...otherProps }: InputProps) => (
  <Container>
    {label && <Field.Label>{label}</Field.Label>}
    <MdInput id={id} aria-label={label} type={type} {...otherProps} autoComplete="off" />
    <ErrorMessage match>{error || ' '}</ErrorMessage>
  </Container>
)
