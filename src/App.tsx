import React from 'react'

import './App.css'
import '@brainhubeu/react-carousel/lib/style.css'
import { Header } from './components/Header'
import { AppRoutes } from './Routes'
import { Footer } from './components/Footer'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme'

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <AppRoutes />
      <Footer />
    </ThemeProvider>
  )
}
