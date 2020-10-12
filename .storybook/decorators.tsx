import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import styled, { css, ThemeProvider } from 'styled-components'
import { Story, StoryContext } from '@storybook/react'
import { Provider as StoreProvider } from 'react-redux'
import { Route, Router } from 'react-router'
import { createMemoryHistory } from 'history'

import { store as appStore } from '../src/app-state'
import { breakpoints } from '../src/styles/breakpoints'
import { GlobalStyle } from '../src/styles/GlobalStyle'
import { darkTheme, lightTheme } from '../src/styles/theme'

const ThemeBlock = styled.div<{ left?: boolean; fullScreen?: boolean }>(
  ({ left, fullScreen, theme: { color } }) =>
    css`
      position: absolute;
      top: 0;
      left: ${left ? 0 : '50vw'};
      border-right: ${left ? '1px solid #202020' : 'none'};
      right: ${left ? '50vw' : 0};
      width: 50vw;
      height: 100vh;
      bottom: 0;
      overflow: auto;
      padding: ${fullScreen ? 0 : '1rem'};
      background: ${color.screenBackground};
      ${breakpoints.S} {
        left: ${left ? 0 : '50vw'};
        right: ${left ? '50vw' : 0};
        padding: 0 !important;
      }
    `
)

export const withTheme = (
  StoryFn: Story,
  { globals: { theme = 'light' }, parameters }: StoryContext
) => {
  const fullScreen = parameters.layout === 'fullscreen'
  const appTheme = theme === 'light' ? lightTheme : darkTheme

  switch (theme) {
    case 'side-by-side': {
      return (
        <>
          <ThemeProvider theme={lightTheme}>
            <GlobalStyle />
            <ThemeBlock left fullScreen={fullScreen}>
              <StoryFn />
            </ThemeBlock>
          </ThemeProvider>
          <ThemeProvider theme={darkTheme}>
            <GlobalStyle />
            <ThemeBlock fullScreen={fullScreen}>
              <StoryFn />
            </ThemeBlock>
          </ThemeProvider>
        </>
      )
    }
    default: {
      return (
        <ThemeProvider theme={appTheme}>
          <GlobalStyle />
          <StoryFn />
        </ThemeProvider>
      )
    }
  }
}

export const withRouter = (StoryFn: Story) => (
  <BrowserRouter>
    <StoryFn />
  </BrowserRouter>
)

export const withStore = (state?: Record<string, any>) => (StoryFn: Story) => (
  <StoreProvider
    store={{
      ...appStore,
      getState: state ? () => state : appStore.getState,
    }}
  >
    <StoryFn />
  </StoreProvider>
)

export const withSpecificRoute = ({
  path = '/', // "/restaurant/:id"
  route = '/', // "/restaurant/123"
} = {}) => (StoryFn: Story) => {
  return (
    <Router history={createMemoryHistory({ initialEntries: [route] })}>
      <Route path={path}>
        <StoryFn />
      </Route>
    </Router>
  )
}

export const globalDecorators = [withRouter, withTheme]
