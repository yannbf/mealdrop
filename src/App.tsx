import React from 'react'

import '@brainhubeu/react-carousel/lib/style.css'
import { AppRoutes } from './Routes'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme'
import { GlobalStyle } from './styles/GlobalStyle'

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  )
}
