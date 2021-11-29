import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

import { Body } from '../typography/Body'

const Container = styled.div(
  ({ theme: { color, spacing, boxShadow, borderRadius } }) => css`
    display: flex;
    flex-direction: column-reverse;
    padding-bottom: ${spacing.m};
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

type InputProps = {
  label?: string
  value?: any
  onChange?: (data: any) => void
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const Input = ({ label = '', type = 'text', id, ...otherProps }: InputProps) => (
  <Container>
    <input id={id} aria-label={label} type={type} {...otherProps} />
    {label && (
      <Body type="label" htmlFor={id}>
        {label}
      </Body>
    )}
  </Container>
)
