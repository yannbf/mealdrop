import { render as baseRender } from "vitest-browser-react";
import  { ThemeProvider } from 'styled-components'

import { darkTheme, lightTheme } from './styles/theme'
import { GlobalStyle } from './styles/GlobalStyle'

export function render(children: React.ReactElement, theme?: 'light' | 'dark') {
  return baseRender(
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />

      {children}
    </ThemeProvider>
  );
}