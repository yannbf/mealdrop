import type { DetailedHTMLProps, SelectHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

import { Body } from '../typography/Body'

const withArrowIcon = (backgroundColor: string, iconColor: string) => {
  const arrowColor = iconColor.replace('#', '%23')
  return css`
    background: ${backgroundColor}
      url('data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down fa-w-14 fa-5x sc-bdVaJa sc-eLdqWK jdHPJh" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 648 512"><path fill="${arrowColor}" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>')
      no-repeat;
  `
}

const Container = styled.div(
  ({ theme: { color, spacing, boxShadow, typography, borderRadius } }) => css`
    display: flex;
    flex-direction: column-reverse;
    padding-bottom: ${spacing.m};
    label {
      color: ${color.label};
      font-size: ${typography.fontSize.body};
      padding-bottom: ${spacing.xs};
      &:first-letter {
        text-transform: uppercase;
      }
    }

    select {
      ${withArrowIcon(color.inputBackground, color.inputIcon)}
      outline: none;
      padding: 13px 16px;
      box-sizing: border-box;
      color: ${color.primaryText};
      border-radius: ${borderRadius.xs};
      border: none;
      background-position: calc(100% - 0.5rem);
      appearance: none;
      background-size: 1.5rem;

      margin: 0;
      &:focus {
        box-shadow: ${boxShadow.outerBorder};
      }
    }

    select:focus + label {
      color: ${color.labelActive};
    }
  `
)

type SelectProps = {
  label?: string
  options: any[]
  value?: any
  onChange?: (data: any) => void
} & DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

export const Select = ({
  label = '',
  value = '',
  options = [],
  onChange,
  id,
  ...otherProps
}: SelectProps) => (
  <Container>
    <select
      id={id}
      value={value}
      onChange={(evt: any) => onChange && onChange(Number(evt.target.value))}
      {...otherProps}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    {label && (
      <Body type="label" htmlFor={id}>
        {label}
      </Body>
    )}
  </Container>
)
