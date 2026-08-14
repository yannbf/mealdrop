import { Body, Card, Heading } from '@droppy/design-system'
import styled, { css } from 'styled-components'

export const StyledHeading = styled(Heading)<{ $withMargin?: boolean }>(
  ({ $withMargin = false }) => css`
    margin-bottom: ${$withMargin ? '1.5rem' : 0};
  `
)

// Card's surface-card value equals the checkout page background, so the
// summary keeps its own lighter surface to read as elevated (white /
// neutral-900, composed from palette variables with an explicit dark override).
export const OrderSummaryContainer = styled(Card).attrs({ padded: true })`
  width: 100%;
  min-height: 250px;
  background: var(--ds-palette-neutral-0);
  display: flex;
  flex-direction: column;

  :root[data-ds-theme='dark'] & {
    background: var(--ds-palette-neutral-900);
  }
`

export const TotalHeading = styled(StyledHeading)`
  color: var(--ds-palette-red-500);
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
