import { memo } from 'react'
import { Body, Card, Heading } from '@droppy/design-system'
import styled, { css } from 'styled-components'

import { toCurrency } from '../../../../helpers'

const Container = styled(Card).attrs({ interactive: true, padded: true })`
  position: relative;
`

const Quantity = styled(Body)(
  ({ theme: { color, borderRadius } }) => css`
    padding: 0.25rem;
    width: 35px;
    height: 35px;
    border-radius: ${borderRadius.xs};
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${color.black};
    color: ${color.white};
    position: absolute;
    top: 0;
    right: 0;
  `
)

const Description = styled(Body)(
  ({ theme: { color } }) => `
  margin: 0;
  color: ${color.badgeText};
  margin-top: 0.5rem;
`
)

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
