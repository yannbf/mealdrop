import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { Field } from '@base-ui/react/field'
import { Input as BaseInput } from '@base-ui/react/input'
import styled, { css } from 'styled-components'

// Base UI Field + DS tokens: colors/radius/focus come from the --ds-* vars
// (ds-theme.css), which flip with html[data-theme]. Field.Root exposes a
// `data-focused` attribute of its own (mirrored from the control), which we
// use instead of a CSS sibling selector: our DOM order is label-then-input,
// so `input:focus + label` (the old rule) never actually matched.
const Container = styled(Field.Root)(
  () => css`
    display: flex;
    flex-direction: column;
    padding-bottom: 0;

    label {
      display: block;
      color: var(--ds-color-text-label);
      font-family: var(--ds-type-family-body);
      font-size: var(--ds-type-size-md);
      font-weight: var(--ds-type-weight-regular);
      padding-bottom: var(--ds-space-3xs);
      &:first-letter {
        text-transform: uppercase;
      }
    }

    &[data-focused] label {
      color: var(--ds-color-text-label-active);
    }
  `
)

const StyledInput = styled(BaseInput)`
  outline: none;
  padding: 13px 16px;
  box-sizing: border-box;
  border-radius: var(--ds-radius-control);
  border: none;
  color: var(--ds-color-text-primary);
  background: var(--ds-color-surface-sunken);
  margin: 0;

  &::placeholder {
    color: var(--ds-color-text-hint);
  }

  &:hover,
  &:focus-visible,
  &[data-focused] {
    box-shadow: var(--ds-shadow-focus);
  }
`

// `match` forces the error slot to always mount (Field.Error normally mounts
// only while the field fails *native* constraint validation, but `error`
// here is an external string from the caller, e.g. react-hook-form). Passing
// our own children overrides Field.Error's computed message (mergeProps
// resolves rightmost-wins for plain props), so the fixed-height slot behaves
// exactly like the old ErrorMessage while gaining Field's aria-describedby wiring.
const ErrorMessage = styled(Field.Error)`
  display: block;
  color: var(--ds-color-text-error);
  margin-top: var(--ds-space-3xs);
  font-family: var(--ds-type-family-body);
  font-size: 12px;
  min-height: 16px;
`

type InputProps = {
  label?: string
  value?: any
  onChange?: (data: any) => void
  error?: string
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const Input = ({ label = '', type = 'text', id, error, ...otherProps }: InputProps) => (
  <Container>
    {label && <Field.Label>{label}</Field.Label>}
    <StyledInput id={id} aria-label={label} type={type} {...otherProps} autoComplete="off" />
    <ErrorMessage match>{error || ' '}</ErrorMessage>
  </Container>
)
