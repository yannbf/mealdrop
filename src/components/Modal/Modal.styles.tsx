import styled, { css } from 'styled-components'

import { breakpoints } from '../../styles/breakpoints'

const defaultAnimation = css`
  &.modal-enter {
    transform: translateY(100%);
  }
  &.modal-enter-active {
    transform: translateY(0);
  }
  &.modal-exit {
    transform: translateY(0);
  }
  &.modal-exit-active {
    transform: translateY(100%);
  }
`

const desktopAnimation = css`
  &.modal-enter {
    opacity: 0;
    transform: scale(0.9);
  }
  &.modal-enter-active {
    opacity: 1;
    transform: translateX(0);
  }
  &.modal-exit {
    opacity: 1;
  }
  &.modal-exit-active {
    opacity: 0;
    transform: scale(0.9);
  }
`

export const ModalContent = styled.div(
  ({ theme: { color, borderRadius } }) => css`
    background-color: ${color.overlayBackground};
    border-top-left-radius: ${borderRadius.m};
    border-top-right-radius: ${borderRadius.m};
    position: fixed;
    z-index: 99;
    top: 50%;
    right: 0;
    bottom: 0;
    left: 0;
    transform-origin: 'top center';
    box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);

    ${defaultAnimation}
    @media ${breakpoints.M} {
      width: 600px;
      height: 272px;

      box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
      bottom: 0;
      left: calc(50% - (600px / 2));
      top: calc(50% - (272px / 2));
      position: fixed;
      border-radius: ${borderRadius.m};

      ${desktopAnimation}
    }
  `
)

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
  }
  &.backdrop-exit {
    opacity: 1;
  }
  &.backdrop-exit-active {
    opacity: 0;
  }
`

export const TopBar = styled.div`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
`
