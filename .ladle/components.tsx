import React from 'react'
import { lightTheme } from '../src/styles/theme'
import { GlobalStyle } from '../src/styles/GlobalStyle'
import { configureStore } from '@reduxjs/toolkit'
import { Provider as StoreProvider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { rootReducer } from '../src/app-state'
import { BrowserRouter } from 'react-router-dom'

export const Provider = ({
  children,
  globalState,
  storyMeta,
}) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: storyMeta?.store?.initialState, // if undefined, just use default state from reducers
  })
  return (
    <BrowserRouter>
      <StoreProvider store={store}>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </StoreProvider>
    </BrowserRouter>
  )
};
