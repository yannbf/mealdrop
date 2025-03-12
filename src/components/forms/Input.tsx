import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

import { Body } from '../typography/Body'

const Container = styled.div(
  ({ theme: { color, spacing, boxShadow, borderRadius } }) => css`
    display: flex;
    flex-direction: column;
    padding-bottom: 0;
    label {
      color: ${color.label};
      padding-bottom: ${spacing.xxs};
      &:first-letter {
        text-transform: uppercase;
      }
    }

    input {
      outline: none;
      padding: 13px 16px;
      box-sizing: border-box;
      border-radius: ${borderRadius.xs};
      border: none;
      color: ${color.primaryText};
      background: ${color.inputBackground};
      margin: 0;
      &:placeholder {
        color: ${color.inputHint};
      }
      &:focus,
      &:hover {
        box-shadow: ${boxShadow.outerBorder};
      }
    }

    input:focus + label {
      color: ${color.labelActive};
    }
  `
)

const ErrorMessage = styled(Body)(
  ({ theme: { color, spacing } }) => css`
    color: ${color.error};
    margin-top: ${spacing.xxs};
    font-size: 12px;
    min-height: 16px;
  `
)

type InputProps = {
  label?: string
  value?: any
  onChange?: (data: any) => void
  error?: string
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const Input = ({ label = '', type = 'text', id, error, ...otherProps }: InputProps) => (
  <Container>
    {label && (
      <Body type="label" htmlFor={id}>
        {label}
      </Body>
    )}
    <input id={id} aria-label={label} type={type} {...otherProps} autoComplete="off" />
    <ErrorMessage>{error || ' '}</ErrorMessage>
  </Container>
)
