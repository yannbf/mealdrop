/**
 * This file houses all non-addon related decorators
 */
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import styled, { css, ThemeProvider } from 'styled-components'
import { Decorator } from '@storybook/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider as StoreProvider } from 'react-redux'
import { initialize } from 'msw-storybook-addon'

import { rootReducer } from '../src/app-state'
import { breakpoints } from '../src/styles/breakpoints'
import { GlobalStyle } from '../src/styles/GlobalStyle'
import { darkTheme, lightTheme } from '../src/styles/theme'

initialize({
  onUnhandledRequest: ({ url, method }) => {
    const pathname = new URL(url).pathname
    if (pathname.startsWith('/.netlify/functions')) {
      console.error(`Unhandled ${method} request to ${url}.

        This exception has been only logged in the console, however, it's strongly recommended to resolve this error as you don't want unmocked data in Storybook stories.

        If you wish to mock an error response, please refer to this guide: https://mswjs.io/docs/recipes/mocking-error-responses
      `)
    }
  },
})

const ThemeBlock = styled.div<{ left?: boolean; fullScreen?: boolean }>(
  ({ left, fullScreen, theme: { color } }) => css`
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

export const withTheme: Decorator = (StoryFn, { globals: { theme = 'light' } }) => {
  const appTheme = theme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={appTheme}>
      <GlobalStyle />
      <StoryFn />
    </ThemeProvider>
  )
}

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
export const withStore: Decorator = (StoryFn, { parameters }) => {
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
 * Provide components support for routing support and simulated deeplinking
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
export const withRouter: Decorator = (StoryFn, { parameters: { deeplink } }) => {
  // if there's a deeplink, routing will be handled in another decorator
  if (deeplink) {
    return <StoryFn />
  }

  return (
    <BrowserRouter>
      <StoryFn />
    </BrowserRouter>
  )
}

// ordered from innermost to outermost, be careful with the order!
export const globalDecorators = [withRouter, withTheme, withStore]
