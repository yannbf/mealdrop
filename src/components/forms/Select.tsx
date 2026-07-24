import type { DetailedHTMLProps, SelectHTMLAttributes } from 'react'
import styled, { css, useTheme } from 'styled-components'

import { Body } from '../typography/Body'

// The chevron is a literal-color SVG baked into a data: URL string — CSS
// custom properties don't resolve inside embedded SVG XML, so `iconColor`
// can't be `var(--ds-color-icon-default)` here. We keep reading it from the
// styled-components theme (theme.color.inputIcon), which already flips with
// light/dark exactly like the DS token does; everything else below (surface,
// text, radius, focus) is migrated to --ds-* tokens.
const withArrowIcon = (iconColor: string) => {
  const arrowColor = iconColor.replace('#', '%23')
  return css`
    background: var(--ds-color-surface-sunken)
      url('data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down fa-w-14 fa-5x sc-bdVaJa sc-eLdqWK jdHPJh" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 648 512"><path fill="${arrowColor}" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>')
      no-repeat;
  `
}

type ContainerProps = {
  $iconColor: string
}

const Container = styled.div<ContainerProps>(
  ({ $iconColor }) => css`
    display: flex;
    flex-direction: column-reverse;
    padding-bottom: var(--ds-space-md);
    label {
      color: var(--ds-color-text-label);
      font-family: var(--ds-type-family-body);
      font-size: var(--ds-type-size-md);
      font-weight: var(--ds-type-weight-regular);
      padding-bottom: var(--ds-space-xs);
      &:first-letter {
        text-transform: uppercase;
      }
    }

    select {
      ${withArrowIcon($iconColor)}
      outline: none;
      padding: 13px 16px;
      box-sizing: border-box;
      color: var(--ds-color-text-primary);
      border-radius: var(--ds-radius-control);
      border: none;
      background-position: calc(100% - 0.5rem);
      appearance: none;
      background-size: 1.5rem;

      margin: 0;
      &:focus {
        box-shadow: var(--ds-shadow-focus);
      }
    }

    select:focus + label {
      color: var(--ds-color-text-label-active);
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
}: SelectProps) => {
  const { color } = useTheme()

  return (
    <Container $iconColor={color.inputIcon}>
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
}
