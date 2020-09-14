import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string
    fonts: {
      family: string
    }
    spacing: typeof spacing
    color: typeof color
    borderRadius: typeof borderRadius
    boxShadow: typeof boxShadow
  }
}

const spaceUnit = 1

const borderRadius = {
  xs: '4px',
  s: '8px',
  m: '16px',
  l: '24px',
  xl: '32px',
  xxl: '40px',
}

const spacing = {
  xs: `${0.5 * spaceUnit}em`,
  s: `${spaceUnit}em`,
  m: `${1.25 * spaceUnit}em`,
  l: `${2 * spaceUnit}em`,
  xl: `${3.25 * spaceUnit}em`,
  xxl: `${5.25 * spaceUnit}em`,
}

const color = {
  text: '#333333',
  white: '#ffffff',
  black: '#000000',
  grey: '#191919',
}

const boxShadow = {
  inner: 'inset 0 3px 0 0 rgba(0, 0, 0, 0.05)',
}

export const defaultTheme: DefaultTheme = {
  name: 'default',
  fonts: {
    family: 'NunitoSans, sans-serif',
  },
  spacing,
  color,
  borderRadius,
  boxShadow,
}
