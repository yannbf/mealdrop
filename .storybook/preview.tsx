import type { Preview } from '@storybook/react-vite'
import { INITIAL_VIEWPORTS } from 'storybook/viewport'
import { userEvent } from '@testing-library/user-event'
import { mswLoader, initialize } from 'msw-storybook-addon'
import { DocsContainer, DocsContainerProps } from '@storybook/addon-docs/blocks'
import { Decorator } from '@storybook/react-vite'
import { configureStore } from '@reduxjs/toolkit'
import { Provider as StoreProvider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import { ThemeProvider } from 'styled-components'

import { demoModeLoader } from './demo-mode'
import { allModes } from './modes'
import { rootReducer } from '../src/app-state'
import { breakpoints, viewports } from '../src/styles/breakpoints'
import { GlobalStyle } from '../src/styles/GlobalStyle'
import { lightTheme, darkTheme } from '../src/styles/theme'
import { sb } from 'storybook/test'

sb.mock('../src/helpers/getCurrency.ts', { spy: true })

initialize({
  quiet: true,
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

const withTheme: Decorator = withThemeFromJSXProvider({
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
  defaultTheme: 'light',
  Provider: ThemeProvider,
  GlobalStyles: GlobalStyle,
})

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

// Create custom viewports using widths defined in design tokens
// eslint-disable-next-line unicorn/no-array-reduce
const breakpointViewports = Object.keys(breakpoints).reduce((acc, key) => {
  acc[`breakpoint${key}`] = {
    name: `Breakpoint - ${key}`,
    styles: {
      width: `${viewports[key as keyof typeof breakpoints]}px`,
      // Account for padding and border around viewport preview
      height: 'calc(100% - 20px)',
    },
    type: 'other',
  }
  return acc
}, {} as any)

const preview: Preview = {
  initialGlobals: {
    viewport: { value: 'responsive' },
  },
  parameters: {
    chromatic: { modes: allModes },
    viewport: {
      options: {
        ...breakpointViewports,
        ...INITIAL_VIEWPORTS,
      },
    },
    a11y: {
      test: 'todo',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      toc: true,
      source: {
        excludeDecorators: true,
      },
      container: (props: DocsContainerProps) => (
        <ThemeProvider theme={lightTheme}>
          <DocsContainer {...props} />
        </ThemeProvider>
      ),
    },
  },
  decorators: [withRouter, withTheme, withStore],
  loaders: [mswLoader, demoModeLoader],
}

declare module 'storybook/internal/csf' {
  interface StoryContext {
    userEvent: ReturnType<typeof userEvent.setup>
  }
}
export default preview
