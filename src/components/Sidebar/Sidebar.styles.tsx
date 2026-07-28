import { Drawer } from '@base-ui/react/drawer'
import styled, { css } from 'styled-components'
import theme from '@droppy/theme'

import { breakpoints } from '../../styles/breakpoints'

// The theme.Drawer* chrome (overlay surface, leading-edge sheet radius,
// overlay shadow, scrim, 300ms slide) comes from @droppy/theme/styles.css
// via the theme.Drawer* classes applied below (no external className is
// ever passed to these at their call sites, so .attrs is safe). The app keeps only its layout: the viewport flex shell,
// full-width panel on mobile growing to 420px, and stacking above the
// header.
export const SidebarBackdrop = styled(Drawer.Backdrop).attrs({
  className: theme.DrawerBackdrop,
})`
  && {
    z-index: 98;
    /* The theme tints the scrim to 20% black; the original sidebar used 40%.
       Match it (the element-opacity fade animates 0 -> 1 over this color). */
    background-color: rgba(0, 0, 0, 0.4);
    /* Match the original backdrop fade (theme uses ease-in). */
    transition: opacity 300ms;
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

export const SidebarPopup = styled(Drawer.Popup).attrs({ className: theme.DrawerPopup })`
  && {
    position: relative;
    inset: auto;
    height: 100%;
    width: 100%;
    /* Base UI moves focus into the drawer on open; in Chromatic's headless
       capture that programmatic focus matches :focus-visible and draws the
       browser's default outline around the panel. The original showed none. */
    outline: none;
    /* Keep the slide transition local: the app's viewport-flex layout replaces
       the package's fixed positioning, so it also owns the resting transform. */
    transform: translateX(0);
    /* Match the original drawer timing (theme motion uses ease-in). */
    transition: transform 300ms;
    will-change: transform;
  }

  &&[data-starting-style],
  &&[data-ending-style] {
    transform: translateX(100%);
  }

  @media ${breakpoints.M} {
    && {
      width: 420px;
    }
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
