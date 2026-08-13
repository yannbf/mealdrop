import { memo } from 'react'
import { Body, Card, Heading } from '@droppy/design-system'
import styled from 'styled-components'

import { toCurrency } from '../../../../helpers'

// Card's surface-card value equals the menu section behind it, so the item
// keeps its own lighter surface to stay visible at rest (white / neutral-900,
// composed from palette variables with an explicit dark override).
const Container = styled(Card).attrs({ padded: true })`
  position: relative;
  background: var(--ds-palette-neutral-0);
  transition: box-shadow 0.1s ease-in;

  :root[data-ds-theme='dark'] & {
    background: var(--ds-palette-neutral-900);
  }

  &:hover {
    cursor: pointer;
    box-shadow: var(--ds-shadow-lift);
  }
`

const Quantity = styled(Body)`
  padding: 0.25rem;
  width: 35px;
  height: 35px;
  border-radius: var(--ds-radius-control);
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--ds-color-chip-contrast-bg);
  color: var(--ds-color-chip-contrast-text);
  position: absolute;
  top: 0;
  right: 0;
`

const Description = styled(Body)`
  margin: 0;
  color: var(--ds-color-text-secondary);
  margin-top: 0.5rem;
`

const Price = styled(Body)`
  margin: 0;
  margin-top: 1rem;
`

type FoodItemProps = {
  quantity?: number
  name: string
  price: number
  description?: string
  onClick: () => void
}

export const FoodItem = memo(
  ({ quantity = 0, name, price, description, onClick }: FoodItemProps) => (
    <Container onClick={onClick}>
      <div>
        {quantity > 0 && (
          <Quantity aria-label="food quantity" type="span" fontWeight="medium">
            {quantity}
          </Quantity>
        )}
        <Heading level={4}>{name}</Heading>
        <Description>{description}</Description>
        <Price>{toCurrency(price)}</Price>
      </div>
    </Container>
  )
)
FoodItem.displayName = 'FoodItem'
