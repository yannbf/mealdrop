import type { Preview } from '@storybook/react-vite'
import { INITIAL_VIEWPORTS } from 'storybook/viewport'
import { userEvent } from '@testing-library/user-event'
import { mswLoader, initialize } from 'msw-storybook-addon'
import { DocsContainer, DocsContainerProps } from '@storybook/addon-docs/blocks'
import { Decorator } from '@storybook/react-vite'
import { configureStore } from '@reduxjs/toolkit'
import { Provider as StoreProvider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import styled, { css, ThemeProvider } from 'styled-components'

import { demoModeLoader } from './demo-mode'
import { rootReducer } from '../src/app-state'
import { breakpoints } from '../src/styles/breakpoints'
import { GlobalStyle } from '../src/styles/GlobalStyle'
import { darkTheme, lightTheme } from '../src/styles/theme'
import { sb } from 'storybook/test'

sb.mock('../src/helpers/getCurrency', { spy: true })

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

const ThemeBlock = styled.div<{ $left?: boolean; $fullScreen?: boolean }>(
  ({ $left, $fullScreen, theme: { color } }) => css`
    position: absolute;
    top: 0;
    left: ${$left ? 0 : '50vw'};
    border-right: ${$left ? '1px solid #202020' : 'none'};
    right: ${$left ? '50vw' : 0};
    width: 50vw;
    height: 100vh;
    bottom: 0;
    overflow: auto;
    padding: ${$fullScreen ? 0 : '1rem'};
    background: ${color.screenBackground};
    ${breakpoints.S} {
      left: ${$left ? 0 : '50vw'};
      right: ${$left ? '50vw' : 0};
      padding: 0 !important;
    }
  `
)

export const withTheme: Decorator = (
  StoryFn,
  { globals: { theme = 'light' }, parameters, viewMode }
) => {
  const fullScreen = parameters.layout === 'fullscreen'
  const appTheme = theme === 'light' ? lightTheme : darkTheme
  const leftContainerRef = React.useRef<HTMLDivElement>(null)
  const rightContainerRef = React.useRef<HTMLDivElement>(null)
  const isScrolling = React.useRef(false)
  const isSideBySide = theme === 'side-by-side' && viewMode === 'story'

  React.useEffect(() => {
    if (isSideBySide) {
      const originalClasses = document.body.className
      document.body.className = originalClasses.replace('sb-main-padded', '')
      return () => {
        document.body.className = originalClasses
      }
    }
  }, [theme])

  React.useEffect(() => {
    const leftContainer = leftContainerRef.current
    const rightContainer = rightContainerRef.current

    if (!leftContainer || !rightContainer || !isSideBySide) {
      return
    }

    const handleScroll = (source: HTMLDivElement, target: HTMLDivElement) => {
      if (!isScrolling.current) {
        isScrolling.current = true
        target.scrollTop = source.scrollTop
        requestAnimationFrame(() => {
          isScrolling.current = false
        })
      }
    }

    const leftScrollHandler = () => handleScroll(leftContainer, rightContainer)
    const rightScrollHandler = () => handleScroll(rightContainer, leftContainer)

    leftContainer.addEventListener('scroll', leftScrollHandler)
    rightContainer.addEventListener('scroll', rightScrollHandler)

    return () => {
      leftContainer.removeEventListener('scroll', leftScrollHandler)
      rightContainer.removeEventListener('scroll', rightScrollHandler)
    }
  }, [theme])

  switch (theme) {
    case 'side-by-side': {
      return (
        <>
          <ThemeProvider theme={lightTheme}>
            <GlobalStyle />
            <ThemeBlock ref={leftContainerRef} $left $fullScreen={fullScreen}>
              <StoryFn />
            </ThemeBlock>
          </ThemeProvider>
          <ThemeProvider theme={darkTheme}>
            <GlobalStyle />
            <ThemeBlock ref={rightContainerRef} $fullScreen={fullScreen}>
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
const breakpointViewports = Object.keys(breakpoints).reduce(
  (acc, key) => {
    acc[`breakpoint${key}`] = {
      name: `Breakpoint - ${key}`,
      styles: {
        width: `${breakpoints[key as keyof typeof breakpoints]}px`,
        // Account for padding and border around viewport preview
        height: 'calc(100% - 20px)',
      },
      type: 'other',
    }
    return acc
  },
  {} as typeof INITIAL_VIEWPORTS
)

const preview: Preview = {
  initialGlobals: {
    viewport: { value: 'responsive' },
  },
  parameters: {
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
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Theme for the components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'light' },
          { value: 'dark', icon: 'moon', title: 'dark' },
          { value: 'side-by-side', icon: 'sidebar', title: 'side by side' },
        ],
      },
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
