import { useEffect } from 'react'
import useDarkMode from 'use-dark-mode'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider as StoreProvider } from 'react-redux'

import { store } from './app-state'
import { AppRoutes } from './Routes'
import { lightTheme, darkTheme } from './styles/theme'
import { GlobalStyle } from './styles/GlobalStyle'

export default function App() {
  const { value } = useDarkMode(false, { global: globalThis.window })
  const theme = value ? darkTheme : lightTheme

  // Mirrors the dark-mode toggle onto the root element: the app's own
  // styled-components theme and @droppy/design-system's CSS custom
  // properties are two separate theming systems, and data-ds-theme is the
  // attribute the design system's stylesheet reads for its dark-mode tokens.
  useEffect(() => {
    document.documentElement.dataset.dsTheme = value ? 'dark' : 'light'
  }, [value])

  return (
    <Router>
      <StoreProvider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <AppRoutes />
        </ThemeProvider>
      </StoreProvider>
    </Router>
  )
}
