import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { Field } from '@base-ui/react/field'
import { Input as MdInput } from '@base-ui/react/input'
import styled from 'styled-components'

// The md-Field*/md-Input chrome (sunken surface, control radius, focus ring,
// label/error colors and focus-active flip) comes from
// @base-ui/mealdrop/styles.css via the md-* classes applied below (no
// external className is ever passed to Container, so .attrs is safe). The
// app keeps only its label size (the original used the 1.125rem body size;
// the stylesheet default is 1rem).
const Container = styled(Field.Root).attrs({ className: 'md-FieldRoot' })`
  label {
    font-size: var(--ds-type-size-md);
  }
`

type InputProps = {
  label?: string
  value?: any
  onChange?: (data: any) => void
  error?: string
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const Input = ({
  label = '',
  type = 'text',
  id,
  error,
  className,
  ...otherProps
}: InputProps) => (
  <Container>
    {label && <Field.Label className="md-FieldLabel">{label}</Field.Label>}
    <MdInput
      id={id}
      aria-label={label}
      type={type}
      // md-Input must survive an incoming className (none of today's callers
      // pass one, but Input is a shared form primitive) — merge, don't
      // overwrite.
      className={className ? `md-Input ${className}` : 'md-Input'}
      {...otherProps}
      autoComplete="off"
    />
    {/* `match` forces the error slot to always mount so layout never jumps
        (the stylesheet gives it a fixed min-height); children override
        Field.Error's computed message while keeping the aria-describedby
        wiring. */}
    <Field.Error className="md-FieldError" match>
      {error || ' '}
    </Field.Error>
  </Container>
)
