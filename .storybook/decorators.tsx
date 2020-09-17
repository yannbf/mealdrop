import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from '../src/styles/GlobalStyle';

export const withRouter = (StoryFn) => (
  <Router>
    <StoryFn />
  </Router>
)

export const withGlobalStyles = (StoryFn) => (
  <>
    <GlobalStyle />
    <StoryFn />
  </>
)
