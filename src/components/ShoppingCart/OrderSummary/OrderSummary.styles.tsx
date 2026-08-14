import { Body, Card, Heading } from '@droppy/design-system'
import styled, { css } from 'styled-components'

export const StyledHeading = styled(Heading)<{ $withMargin?: boolean }>(
  ({ $withMargin = false }) => css`
    margin-bottom: ${$withMargin ? '1.5rem' : 0};
  `
)

export const OrderSummaryContainer = styled(Card).attrs({ padded: true })`
  width: 100%;
  min-height: 250px;
  display: flex;
  flex-direction: column;
`

export const TotalHeading = styled(StyledHeading)`
  color: #d70808;
`

export const BottomContainer = styled.div`
  margin-top: auto;
  border-top: 1px solid var(--ds-color-border-subtle);
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const EmptyMessageContainer = styled(Body).attrs({ type: 'span' })`
  font-size: 18px;
  margin: 50px auto;
`

export const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`
