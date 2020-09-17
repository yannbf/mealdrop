import React from 'react'

import './App.css'
import '@brainhubeu/react-carousel/lib/style.css'
import { AppRoutes } from './Routes'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme'
import { PageTemplate } from './templates/PageTemplate'
import { GlobalStyle } from './styles/GlobalStyle'

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <PageTemplate>
        <AppRoutes />
      </PageTemplate>
      {/* <Route>
        <UnauthorizedPageTemplate>
          <LoginPage />
        </UnauthorizedPageTemplate>
      </Route> */}
    </ThemeProvider>
  )
}
