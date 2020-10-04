import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../src/styles/GlobalStyle'
import { defaultTheme } from '../src/styles/theme'

export const withTheme = (StoryFn) => (
  <ThemeProvider theme={defaultTheme}>
    <StoryFn />
  </ThemeProvider>
)

export const withRouter = (StoryFn) => (
  <Router>
    <StoryFn />
  </Router>
)

export const withGlobalStyles = (StoryFn) => (
  <>
    <GlobalStyle />
    <StoryFn />
  </>
)

export const appDecorators = [withTheme, withRouter, withGlobalStyles]
