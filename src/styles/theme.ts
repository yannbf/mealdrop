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
  accentText: baseColors.black,
  badgeBackground: baseColors.grey[300],
  badgeText: baseColors.grey[700],
  bannerBackground: baseColors.blue[500],
  buttonClear: 'transparent',
  buttonClearHover: baseColors.grey[300],
  buttonPrimary: baseColors.otherBlack,
  buttonPrimaryHover: baseColors.grey[800],
  buttonSecondary: baseColors.green[500],
  buttonSecondaryHover: baseColors.green[600],
  buttonText: baseColors.white,
  cardBackground: baseColors.grey[100],
  foodItemBackground: baseColors.white,
  footerBackground: baseColors.otherBlack,
  headerBackground: baseColors.white,
  headerBorder: baseColors.grey[400],
  inputBackground: baseColors.grey[200],
  inputHint: baseColors.grey[600],
  inputIcon: baseColors.black,
  label: baseColors.grey[700],
  labelActive: baseColors.black,
  menuSectionBackground: baseColors.grey[100],
  overlayBackground: baseColors.white,
  overlayHeader: baseColors.grey[100],
  primaryText: baseColors.otherBlack,
  reviewText: baseColors.blue[800],
  screenBackground: baseColors.white,
  sidebarFooter: baseColors.white,
  skeletonBase: '#eee',
  skeletonHighlight: '#f5f5f5',
  topBannerBackground: baseColors.green[500],
  white: baseColors.white,
}

const boxShadow = {
  card: '0px 14px 26px 0px rgba(0, 0, 0, 0.08)',
  inner: 'inset 0 3px 0 0 rgba(0, 0, 0, 0.05)',
  outerBorder: `0 0 0 1px ${baseColors.blue[700]}, 0 0 0 4px ${baseColors.blue[200]}`,
}

const typography = {
  fontSize: {
    body: '1.125rem',
    bodyS: '1rem',
    bodyXS: '0.9rem',
    bodyXXS: '0.72rem',
    heading1: '2.74rem',
    heading2: '2.19rem',
    heading3: '1.75rem',
    heading4: '1.4rem',
  },
  fontWeight: {
    black: '900',
    bold: '700',
    medium: '500',
    regular: '400',
  },
}

export const lightTheme: DefaultTheme = {
  borderRadius,
  boxShadow,
  color,
  fonts: {
    family: 'NunitoSans, sans-serif',
  },
  name: 'default',
  spacing,
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
    badgeBackground: baseColors.grey[800],
    badgeText: baseColors.grey[500],
    bannerBackground: baseColors.otherBlack,
    buttonClearHover: baseColors.grey[900],
    buttonPrimary: baseColors.green[500],
    buttonPrimaryHover: baseColors.green[600],
    buttonSecondary: baseColors.green[500],
    buttonText: baseColors.otherBlack,
    cardBackground: baseColors.otherBlack,
    foodItemBackground: baseColors.otherBlack,
    headerBackground: baseColors.black,
    headerBorder: baseColors.otherBlack,
    inputBackground: baseColors.grey[800],
    inputIcon: baseColors.white,
    label: baseColors.white,
    labelActive: baseColors.white,
    menuSectionBackground: baseColors.grey[900],
    overlayBackground: baseColors.otherBlack,
    overlayHeader: baseColors.black,
    primaryText: baseColors.white,
    reviewText: baseColors.blue[500],
    screenBackground: baseColors.black,
    sidebarFooter: baseColors.otherBlack,
    skeletonBase: baseColors.grey[700],
    skeletonHighlight: baseColors.grey[600],
    topBannerBackground: baseColors.otherBlack,
  },
}
