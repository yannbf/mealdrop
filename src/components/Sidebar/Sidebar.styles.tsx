import styled, { css } from 'styled-components'

import { breakpoints } from '../../styles/breakpoints'

const defaultAnimation = css`
  &.sidebar-enter {
    transform: translateX(100%);
  }
  &.sidebar-enter-active {
    transform: translateX(0);
    transition: transform 300ms;
  }
  &.sidebar-exit {
    transform: translateX(0);
  }
  &.sidebar-exit-active {
    transform: translateX(100%);
    transition: transform 300ms;
  }
`

const desktopAnimation = css`
  &.sidebar-enter {
    transform: translateX(100%);
  }
  &.sidebar-enter-active {
    transform: translateX(0);
    transition: transform 300ms;
  }
  &.sidebar-exit {
    transform: translateX(0);
  }
  &.sidebar-exit-active {
    transform: translateX(100%);
    transition: transform 300ms;
  }
`

const largeScreenOverrides = css`
  @media ${breakpoints.M} {
    width: 420px;
    height: 100vh;

    box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
    bottom: 0;
    right: 0;
    top: 0;
    left: unset;
    position: fixed;

    ${desktopAnimation}
  }
`

export const SidebarContainer = styled.div(
  ({ theme: { color } }) => css`
    background-color: ${color.overlayBackground};
    position: fixed;
    z-index: 99;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform-origin: 'top center';
    box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);

    ${defaultAnimation}
    ${largeScreenOverrides}
  `
)

export const SidebarContent = styled.div`
  padding: 1.5rem;
  overflow: auto;
  max-height: calc(100vh - 237px); /** viewport height - topbar - footer */
`

export const Backdrop = styled.div`
  position: fixed;
  background-color: ${({ theme }) => 'rgba(0, 0, 0, 0.4)'};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 98;

  &.backdrop-enter {
    opacity: 0;
  }
  &.backdrop-enter-active {
    opacity: 1;
    transition: opacity 300ms;
  }
  &.backdrop-exit {
    opacity: 1;
  }
  &.backdrop-exit-active {
    opacity: 0;
    transition: opacity 300ms;
  }
`

export const TopBar = styled.div(
  ({ theme: { color } }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: static;
    padding: 1.5rem;
    padding-right: 1rem;
    top: 0.75rem;
    right: 0.75rem;
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
