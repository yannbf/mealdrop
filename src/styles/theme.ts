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
    typography: typeof typography
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
  white: '#FFFFFF',
  secondaryText: '#636871',
  accentText: '#202020',
  primaryText: '#2C2C2C',
  tertiaryText: '#6D868A',
  screenBackground: '#FFFFFF',
  cardBackground: '#F9F9F9',
  bannerBackground: '#B1DDE4',
  footerBackground: '#2C2C2C',
  buttonPrimary: '#2C2C2C',
  buttonPrimaryHover: '#32363C',
  buttonSecondary: '#E5F8BC',
  buttonSecondaryHover: '#DBF3B1',
  buttonClear: 'transparent',
  buttonClearHover: '#F0F0F0',
  label: '#636871',
  labelActive: '#202020',
  inputBackground: '#F5F6F7',
  inputIcon: '#202020',
}

const boxShadow = {
  card: '0px 14px 26px 0px rgba(0, 0, 0, 0.08)',
  inner: 'inset 0 3px 0 0 rgba(0, 0, 0, 0.05)',
  outerBorder: '0 0 0 1px #71acb6, 0 0 0 4px #dcf0f3',
}

const typography = {
  fontSize: {
    heading1: '2.74rem',
    heading2: '2.19rem',
    heading3: '1.75rem',
    heading4: '1.4rem',
    body: '1.125rem',
    bodyS: '1rem',
    bodyXS: '0.9rem',
    bodyXXS: '0.72rem',
  },
  fontWeight: {
    regular: '400',
    medium: '500',
    bold: '700',
    black: '900',
  },
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
  typography,
}

export const darkTheme: DefaultTheme = {
  ...defaultTheme,
  color: {
    ...defaultTheme.color,
    primaryText: '#FFFFFF',
    secondaryText: '#9F9F9F',
    tertiaryText: '#B1DDE4',
    screenBackground: '#202020',
    cardBackground: '#2C2C2C',
    bannerBackground: '#2C2C2C',
    buttonPrimary: '#E5F8BC',
    buttonSecondary: '#E5F8BC',
  },
}
