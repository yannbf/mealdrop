import styled, { css } from 'styled-components'
import { Button } from '../../Button'

export const CartDropdownContainer = styled.div<{ fixed?: boolean }>(
  ({ fixed = false }) => css`
    position: ${fixed ? 'fixed' : 'static'};
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
  `
)

export const CartDropdownButton = styled(Button)`
  margin-top: auto;
`

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

export const CartBackdropContainer = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  width: 100vw;
  height: 100vh;
  z-index: 2;

  @media screen and (max-width: 800px) {
    display: block;
  }
`
