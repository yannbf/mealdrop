import { ThemeProvider } from 'styled-components'
import { DecoratorFn } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { initialize, mswDecorator } from 'msw-storybook-addon'
import { Provider as StoreProvider } from 'react-redux'
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom'

import { configureStore } from '@reduxjs/toolkit'

import { rootReducer } from '../src/app-state'
import { GlobalStyle } from '../src/styles/GlobalStyle'
import { lightTheme } from '../src/styles/theme'

initialize()

const withTheme: DecoratorFn = (StoryFn) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <StoryFn />
    </ThemeProvider>
  )
}

/**
 *
 * Provide components support for routing support and simulated deeplinking
 * it renders the component with a mocked history based on the route passed
 *
 * @example`
 * export const MyComponent = () => Template.bind({})
 * MyComponent.parameters = {
 *   deeplink: {
 *     path = '/restaurant/:id',
 *     route = '/restaurant/12',
 *   }
 * };
 */
export const withRouter: DecoratorFn = (StoryFn, { parameters: { deeplink } }) => {
  // if there's no deeplink config, just return the story in a Router
  if (!deeplink) {
    return (
      <BrowserRouter>
        <StoryFn />
      </BrowserRouter>
    )
  }

  const { path, route } = deeplink

  return (
    <MemoryRouter
      // encode URL to simulate what the browser would do
      initialEntries={[encodeURI(route)]}
    >
      <Routes>
        <Route path={path} element={<StoryFn />} />
      </Routes>
    </MemoryRouter>
  )
}

/**
 *
 * Provide components support for Redux store
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
export const withStore: DecoratorFn = (StoryFn, { parameters }) => {
  // Creates a store by merging optional custom initialState
  const store = configureStore({
    reducer: rootReducer,
    // if undefined, it will default state from reducers
    preloadedState: parameters.store?.initialState,
  })
  return (
    <StoreProvider store={store}>
      <StoryFn />
    </StoreProvider>
  )
}

export const globalDecorators = [mswDecorator, withTheme, withDesign, withRouter, withStore]
