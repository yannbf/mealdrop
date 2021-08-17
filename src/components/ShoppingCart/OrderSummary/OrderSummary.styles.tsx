import styled, { css } from 'styled-components'

import { Heading } from '../../typography/Heading'

export const StyledHeading = styled(Heading)(
  ({
    withMargin = false,
    theme: {
      typography: { fontSize },
    },
  }) => css`
    font-size: ${fontSize.heading4};
    margin-bottom: ${withMargin ? '1.5rem' : 0};
  `
)

export const OrderSummaryContainer = styled.div<{ fixed?: boolean }>(
  ({ theme: { color, borderRadius } }) => css`
    width: 100%;
    min-height: 250px;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    background-color: ${color.orderSummaryBackground};
    border-radius: ${borderRadius.s};
  `
)

export const BottomContainer = styled.div`
  margin-top: auto;
  border-top: 1px solid #f5f6f7;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`

export const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`
