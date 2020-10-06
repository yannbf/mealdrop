import React from 'react'
import styled, { css } from 'styled-components'
import { Body } from '../typography/Body'

const Container = styled.div(
  ({ theme: { color, spacing, boxShadow } }) => css`
    display: flex;
    flex-direction: column-reverse;
    padding-bottom: ${spacing.m};
    label {
      color: ${color.label};
      padding-bottom: ${spacing.xs};
      &:first-letter {
        text-transform: uppercase;
      }
    }

    input {
      outline: none;
      padding: 13px 16px;
      box-sizing: border-box;
      border-radius: 4px;
      border: none;
      background: #f5f6f7;
      margin: 0;
      &:focus {
        box-shadow: ${boxShadow.outerBorders};
      }
    }

    input:focus + label {
      color: ${color.labelActive};
    }
  `
)

export const Input = ({ label = '', type = 'text', ...otherProps }) => (
  <Container>
    <input type={type} {...otherProps} />
    {label && <Body type="label">{label}</Body>}
  </Container>
)
