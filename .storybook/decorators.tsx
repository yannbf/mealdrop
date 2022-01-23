import { ThemeProvider } from 'styled-components'
import { DecoratorFn } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from '../src/styles/GlobalStyle'
import { lightTheme } from '../src/styles/theme'

const withTheme: DecoratorFn = (StoryFn) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <StoryFn />
    </ThemeProvider>
  )
}

export const withRouter: DecoratorFn = (StoryFn) => (
  <BrowserRouter>
    <StoryFn />
  </BrowserRouter>
)

export const globalDecorators = [
  withTheme,
  withDesign,
  withRouter,
]
