import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Comfortaa';
    font-style: normal;
    font-weight: 515;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/comfortaa/v29/1Ptsg8LJRfWJmhDAuUs4TYFqL_KWxQ.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  body {
    margin: 0;
    font-family: 'Comfortaa', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: #222;
  }

  .container {
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 16px;
  }

  .copyright {
    color: white;
    text-align: end;
  }

  .footer-top {
    grid-template-columns: repeat(3, 1fr);
    display: grid;
    gap: 40px 24px;
  }

  .footer-bottom {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: 1rem;
  }

  .footer-bottom div {
    padding-left: 1rem;
  }

  @media only screen and (max-width: 640px) {
    html {
      font-size: 14px;
    }
  }

  @media (max-width: 640px) {
    .footer-top {
      grid-template-columns: repeat(1, 1fr) !important;
    }
  }
`
