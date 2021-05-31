import React from 'react'
import { BrowserRouter, Route, MemoryRouter } from 'react-router-dom'
import styled, { css, ThemeProvider } from 'styled-components'
import { Story, StoryContext } from '@storybook/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider as StoreProvider } from 'react-redux'

import { rootReducer } from '../src/app-state/reducers'
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
  const secondContainerRef = React.useRef<HTMLDivElement>(null)

  const firstBlockRef = React.useCallback(
    (node) => {
      if (node) {
        node.addEventListener('scroll', () => {
          if (secondContainerRef.current) {
            secondContainerRef.current.scrollTop = node.scrollTop
          }
        })
      }
    },
    [secondContainerRef.current]
  )

  switch (theme) {
    case 'side-by-side': {
      return (
        <>
          <ThemeProvider theme={lightTheme}>
            <GlobalStyle />
            <ThemeBlock ref={firstBlockRef} left fullScreen={fullScreen}>
              <StoryFn />
            </ThemeBlock>
          </ThemeProvider>
          <ThemeProvider theme={darkTheme}>
            <GlobalStyle />
            <ThemeBlock ref={secondContainerRef} fullScreen={fullScreen}>
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

/**
 *
 * Provide components support for redux-store
 * optionally passing custom initial state, and using default initial state if not passed
 *
 * @example
 * export const MyComponent = () => Template.bind({})
 * MyComponent.parameters = {
 *   store: {
 *     initialState: {
 *       foo: 'bar'
 *     },
 *   }
 * };
 */
export const withStore = (StoryFn: Story, { parameters }: StoryContext) => {
  // Creates a store by merging optional custom initialState
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: parameters.store?.initialState, // if undefined, just use default state from reducers
  })
  return (
    <StoreProvider store={store}>
      <StoryFn />
    </StoreProvider>
  )
}

/**
 *
 * Provide components support for simulated deeplinking
 * it renders the component with a mocked history based on the route passed
 *
 * @example
 * export const MyComponent = () => Template.bind({})
 * MyComponent.parameters = {
 *   deeplink: {
 *     path = '/restaurant/:id',
 *     route = '/restaurant/12',
 *   }
 * };
 */
export const withDeeplink = (
  StoryFn: Story,
  { parameters: { deeplink } }: StoryContext
) => {
  // if there's no deeplink config, just return the story
  if (!deeplink) {
    return <StoryFn />
  }

  const { path, route } = deeplink

  return (
    <MemoryRouter initialEntries={[route]}>
      <Route path={path}>
        <StoryFn />
      </Route>
    </MemoryRouter>
  )
}

// ordered from innermost to outermost, be careful with the order!
export const globalDecorators = [withDeeplink, withRouter, withTheme, withStore]
