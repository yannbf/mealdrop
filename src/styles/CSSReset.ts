import { css } from 'styled-components'

export const resetCSS = css`
  *,
  *::before,
  *::after {
    position: relative; /* make absolutely positioned elements relative to their parent by default */
    min-height: 0; /* prevent flex items from overflowing vertically */
    background-position: center center; /* better default than 0% 0% */
    background-repeat: no-repeat; /* better default than repeat */
  }

  /* make text-align: inherit work properly in the following rules */
  body {
    text-align: left;
    text-align: start;
  }

  /* remove default styles on form elements */
  button,
  input,
  select,
  textarea {
    border-radius: 0; /* remove the default border radius set by Safari on iOS */
    background-color: transparent;
    font: inherit;
    text-align: inherit;
    text-transform: inherit;
    letter-spacing: inherit;
  }

  /* fix issue where changing the background color of a select makes options unreadable on Windows */
  select option {
    background-color: white;
    color: black;
  }

  /* undo Normalize rule that re-enables the dotted outline in Firefox */
  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 0;
  }

  svg:not(:root) {
    overflow: visible; /* reset UA stylesheet’s overflow: hidden to prevent clipping */
  }

  small {
    font-size: inherit; /* reset UA stylesheet’s font-size: smaller */
  }

  cite,
  var,
  address,
  dfn {
    font-style: inherit; /* reset UA stylesheet’s font-style: italic */
  }

  th,
  td {
    padding: 0; /* remove the default 1px padding set by some browsers */
  }

  th {
    font-weight: inherit; /* reset UA stylesheet’s font-weight: bold */
    text-align: inherit; /* reset UA stylesheet’s text-align: center */
  }

  [hidden] {
    display: none !important; /* make sure this is not overridden by utilities */
  }
`
