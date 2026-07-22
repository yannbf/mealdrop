import { Drawer } from '@base-ui/react/drawer'
import styled, { css } from 'styled-components'

import { breakpoints } from '../../styles/breakpoints'

// DS Drawer + tokens: colors/radius/shadow/motion come from the --ds-* vars
// (ds-theme.css), which flip with html[data-theme]. Base UI drives
// [data-starting-style]/[data-ending-style] for the enter/exit transition —
// there's no positioner, so the slide-in edge (right) is plain CSS.
export const SidebarBackdrop = styled(Drawer.Backdrop)`
  position: fixed;
  inset: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.4);
  transition: opacity var(--ds-motion-slow) var(--ds-motion-ease);

  &[data-starting-style],
  &[data-ending-style] {
    opacity: 0;
  }
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
  box-sizing: border-box;
  position: relative;
  width: 100%;
  background-color: var(--ds-color-surface-overlay);
  color: var(--ds-color-text-primary);
  box-shadow: var(--ds-shadow-overlay);
  outline: 0;
  /* Rounded on the leading (left) edge only — the trailing edge sits flush
     against the viewport's right side. */
  border-radius: var(--ds-radius-sheet) 0 0 var(--ds-radius-sheet);
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
