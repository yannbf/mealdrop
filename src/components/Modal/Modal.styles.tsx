import styled from 'styled-components'
import { Dialog } from '@base-ui/react/dialog'

import { breakpoints } from '../../styles/breakpoints'

// Base UI Dialog + DS tokens: colors/radius/shadow come from the --ds-* vars
// (ds-theme.css), which flip with html[data-theme]. Open/close motion is
// driven by Base UI's [data-starting-style]/[data-ending-style] attributes
// instead of CSSTransition classes.
export const StyledPopup = styled(Dialog.Popup)`
  background-color: var(--ds-color-surface-overlay);
  color: var(--ds-color-text-primary);
  border-top-left-radius: var(--ds-radius-sheet);
  border-top-right-radius: var(--ds-radius-sheet);
  position: fixed;
  z-index: 99;
  top: 50%;
  right: 0;
  bottom: 0;
  left: 0;
  transform-origin: 'top center';
  box-shadow: var(--ds-shadow-overlay);
  outline: none;

  transition: transform var(--ds-motion-slow) var(--ds-motion-ease);

  &[data-starting-style],
  &[data-ending-style] {
    transform: translateY(100%);
  }

  @media ${breakpoints.M} {
    width: 600px;
    height: 272px;

    bottom: 0;
    left: calc(50% - (600px / 2));
    top: calc(50% - (272px / 2));
    position: fixed;
    border-radius: var(--ds-radius-sheet);

    transition:
      opacity var(--ds-motion-slow) var(--ds-motion-ease),
      transform var(--ds-motion-slow) var(--ds-motion-ease);

    &[data-starting-style],
    &[data-ending-style] {
      opacity: 0;
      transform: scale(0.9);
    }
  }
`

export const StyledBackdrop = styled(Dialog.Backdrop)`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 98;

  transition: opacity var(--ds-motion-slow) var(--ds-motion-ease);

  html[data-theme='dark'] && {
    background-color: rgba(0, 0, 0, 0.6);
  }

  &[data-starting-style],
  &[data-ending-style] {
    opacity: 0;
  }
`

export const TopBar = styled.div`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
`
