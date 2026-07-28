import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { Field } from '@base-ui/react/field'
import { Input as MdInput } from '@base-ui/react/input'
import styled from 'styled-components'
import theme from '@droppy/theme'

// The theme.Field*/theme.Input chrome (sunken surface, control radius, focus
// ring, label/error colors and focus-active flip) comes from
// @droppy/theme/styles.css via the theme.* classes applied below (no
// external className is ever passed to Container, so .attrs is safe). The
// app keeps only its 1.125rem body-size label (the stylesheet default is 1rem).
const Container = styled(Field.Root).attrs({ className: theme.FieldRoot })`
  /* The app's form text is Montserrat; the theme's body-font token is Hind
     (correct for buttons, not for inputs). Scope it back to the app font on
     the form so the input/label match the pre-migration design. */
  --ds-type-family-body: 'Montserrat', sans-serif;

  && label {
    font-size: var(--ds-type-size-md);
  }

  /* The original input has no border and shows validation via the error
     message; the theme's transparent border only added height. Remove it. */
  && input {
    border: none;
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
    {label && <Field.Label className={theme.FieldLabel}>{label}</Field.Label>}
    <MdInput
      id={id}
      aria-label={label}
      type={type}
      // theme.Input must survive an incoming className (none of today's
      // callers pass one, but Input is a shared form primitive) — merge,
      // don't overwrite.
      className={className ? `${theme.Input} ${className}` : theme.Input}
      {...otherProps}
      autoComplete="off"
    />
    {/* `match` forces the error slot to always mount so layout never jumps
        (the stylesheet gives it a fixed min-height); children override
        Field.Error's computed message while keeping the aria-describedby
        wiring. */}
    <Field.Error className={theme.FieldError} match>
      {error || ' '}
    </Field.Error>
  </Container>
)
