import { Drawer } from '@base-ui/mealdrop'
import styled, { css } from 'styled-components'

import { breakpoints } from '../../styles/breakpoints'

// @base-ui/mealdrop Drawer carries the chrome (overlay surface, leading-edge
// sheet radius, overlay shadow, scrim, 300ms slide) via styles.css. The app
// keeps only its layout: the viewport flex shell, full-width panel on mobile
// growing to 420px, and stacking above the header.
export const SidebarBackdrop = styled(Drawer.Backdrop)`
  z-index: 98;
`

export const SidebarViewport = styled(Drawer.Viewport)`
  position: fixed;
  inset: 0;
  z-index: 99;
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
`

export const SidebarPopup = styled(Drawer.Popup)`
  position: relative;
  inset: auto;
  height: 100%;
  width: 100%;
  /* Keep the slide transition local: the app's viewport-flex layout replaces
     the package's fixed positioning, so it also owns the resting transform. */
  transform: translateX(0);
  transition: transform var(--ds-motion-slow) var(--ds-motion-ease);
  will-change: transform;

  &[data-starting-style],
  &[data-ending-style] {
    transform: translateX(100%);
  }

  @media ${breakpoints.M} {
    width: 420px;
  }
`

export const SidebarContent = styled.div`
  padding: 1.5rem;
  overflow: auto;
  max-height: calc(100vh - 237px); /** viewport height - topbar - footer */
`

export const TopBar = styled.div(
  ({ theme: { color } }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    padding-right: 1rem;
    height: 4.5rem;
    background-color: ${color.overlayHeader};
  `
)

export const SidebarFooter = styled.div(
  ({ theme: { color } }) => css`
    background-color: ${color.sidebarFooter};
    display: flex;
    padding: 1.5rem;
    bottom: 0;
    height: 165px;
    width: 100%;
    border-top: 1px solid ${color.headerBorder};
    position: absolute;
  `
)
