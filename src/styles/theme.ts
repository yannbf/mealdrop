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

const baseColors = {
  white: '#FFFFFF ',
  black: '#202020',
  otherBlack: '#2C2C2C ',
  grey: {
    100: '#F9F9F9',
    200: '#F5F6F7',
    300: '#F0F0F0',
    400: '#E0E0E0',
    500: '#C4C4C4',
    600: '#949494',
    700: '#636871',
    800: '#32363C',
    900: '#272A30',
  },
  green: {
    100: '#F8FDEE',
    200: '#F5FCE4',
    300: '#EEFAD3',
    400: '#EBFACD',
    500: '#E5F8BC',
    600: '#DBF3B1',
    700: '#C0DB92',
    800: '#A8BE81',
    900: '#77835E',
  },
  blue: {
    100: '#EBF7F8',
    200: '#DCF0F3',
    300: '#CCE9ED',
    400: '#C8E7EC',
    500: '#B1DDE4',
    600: '#9FCCD3',
    700: '#71ACB6',
    800: '#67949B',
    900: '#34595F',
  },
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
  xxs: `${0.25 * spaceUnit}em`,
  xs: `${0.5 * spaceUnit}em`,
  s: `${spaceUnit}em`,
  m: `${1.25 * spaceUnit}em`,
  l: `${2 * spaceUnit}em`,
  xl: `${3.25 * spaceUnit}em`,
  xxl: `${5.25 * spaceUnit}em`,
}

const color = {
  white: baseColors.white,
  accentText: baseColors.black,
  primaryText: baseColors.otherBlack,
  reviewText: baseColors.blue[800],
  screenBackground: baseColors.white,
  headerBorder: baseColors.grey[400],
  headerBackground: baseColors.white,
  foodItemBackground: baseColors.white,
  menuSectionBackground: baseColors.grey[100],
  cardBackground: baseColors.grey[100],
  bannerBackground: baseColors.blue[500],
  badgeBackground: baseColors.grey[300],
  badgeText: baseColors.grey[700],
  topBannerBackground: baseColors.green[500],
  footerBackground: baseColors.otherBlack,
  buttonText: baseColors.white,
  buttonPrimary: baseColors.otherBlack,
  buttonPrimaryHover: baseColors.grey[800],
  buttonSecondary: baseColors.green[500],
  buttonSecondaryHover: baseColors.green[600],
  buttonClear: 'transparent',
  buttonClearHover: baseColors.grey[300],
  label: baseColors.grey[700],
  labelActive: baseColors.black,
  inputBackground: baseColors.grey[200],
  inputHint: baseColors.grey[600],
  inputIcon: baseColors.black,
  overlayHeader: baseColors.grey[100],
  overlayBackground: baseColors.white,
}

const boxShadow = {
  card: '0px 14px 26px 0px rgba(0, 0, 0, 0.08)',
  inner: 'inset 0 3px 0 0 rgba(0, 0, 0, 0.05)',
  outerBorder: `0 0 0 1px ${baseColors.blue[700]}, 0 0 0 4px ${baseColors.blue[200]}`,
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

export const lightTheme: DefaultTheme = {
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
  ...lightTheme,
  boxShadow: {
    ...boxShadow,
    outerBorder: `0 0 0 2px ${baseColors.blue[900]}, 0 0 0 4px ${baseColors.blue[500]}`,
  },
  color: {
    ...lightTheme.color,
    buttonText: baseColors.otherBlack,
    buttonPrimaryHover: baseColors.green[600],
    badgeText: baseColors.grey[500],
    topBannerBackground: baseColors.otherBlack,
    primaryText: baseColors.white,
    menuSectionBackground: baseColors.grey[900],
    reviewText: baseColors.blue[500],
    screenBackground: baseColors.black,
    foodItemBackground: baseColors.otherBlack,
    cardBackground: baseColors.otherBlack,
    headerBackground: baseColors.black,
    headerBorder: baseColors.otherBlack,
    badgeBackground: baseColors.grey[800],
    bannerBackground: baseColors.otherBlack,
    buttonPrimary: baseColors.green[500],
    buttonSecondary: baseColors.green[500],
    inputBackground: baseColors.grey[800],
    buttonClearHover: baseColors.grey[900],
    label: baseColors.white,
    labelActive: baseColors.white,
    inputIcon: baseColors.white,
    overlayHeader: baseColors.black,
    overlayBackground: baseColors.otherBlack,
  },
}
