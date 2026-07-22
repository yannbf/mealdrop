import styled from 'styled-components'
import { Dialog } from '@base-ui/mealdrop'

import { breakpoints } from '../../styles/breakpoints'

// @base-ui/mealdrop Dialog carries the chrome (overlay surface, sheet radius,
// overlay shadow, scrim + dark tweak, motion) via styles.css. The app keeps
// only its layout: bottom-sheet on mobile (slide-up, top corners only),
// fixed 600x272 centered card on desktop, and stacking above the header.
export const StyledPopup = styled(Dialog.Popup)`
  z-index: 99;
  top: 50%;
  right: 0;
  bottom: 0;
  left: 0;
  max-width: none;
  max-height: none;
  transform: none;
  border-radius: var(--ds-radius-sheet) var(--ds-radius-sheet) 0 0;
  transition: transform var(--ds-motion-slow) var(--ds-motion-ease);

  &[data-starting-style],
  &[data-ending-style] {
    opacity: 1;
    transform: translateY(100%);
  }

  @media ${breakpoints.M} {
    width: 600px;
    height: 272px;
    bottom: 0;
    left: calc(50% - (600px / 2));
    top: calc(50% - (272px / 2));
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
  z-index: 98;
`

export const TopBar = styled.div`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
`
