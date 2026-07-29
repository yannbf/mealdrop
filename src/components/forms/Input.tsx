import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { Input as MdInput } from '@base-ui/react/input'
import styled from 'styled-components'
import theme from '@droppy/theme'

// The field chrome (sunken surface, control radius, focus ring, label/error
// colors) comes from @droppy/theme/styles.css via the theme.* classes applied
// below. The app keeps only its 1.125rem body-size label (the stylesheet
// default is 1rem).
const Container = styled.div.attrs({ className: theme.FieldRoot })`
  && label {
    font-size: var(--ds-type-size-md);
  }

  /* Match the original: the input text is Montserrat (the theme's body-font
     token is Hind, right for buttons but not the input), while the label keeps
     the theme's Hind. Remove the theme's transparent border too — the original
     has none and shows validation via the error message. */
  && input {
    font-family: 'Montserrat', sans-serif;
    border: none;
  }

  /* The original error slot is a Body paragraph: 12px text, a 16px min-height
     reserve, and — crucially — a 12px bottom margin that spaces the form
     fields apart. The theme's FieldError has a smaller font, a 1rem reserve,
     and no bottom margin, which packs every field 12px tighter. Restore the
     original metrics so the form layout matches. */
  && .${theme.FieldError} {
    font-size: 12px;
    min-height: 16px;
    margin-bottom: 12px;
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
    {label && (
      <label className={theme.FieldLabel} htmlFor={id}>
        {label}
      </label>
    )}
    <MdInput
      id={id}
      type={type}
      // theme.Input must survive an incoming className (none of today's
      // callers pass one, but Input is a shared form primitive) — merge,
      // don't overwrite.
      className={className ? `${theme.Input} ${className}` : theme.Input}
      {...otherProps}
      autoComplete="off"
    />
    {/* Always mounted so layout never jumps (the stylesheet gives the error
        slot a fixed min-height). */}
    <div className={theme.FieldError}>{error || ' '}</div>
  </Container>
)
