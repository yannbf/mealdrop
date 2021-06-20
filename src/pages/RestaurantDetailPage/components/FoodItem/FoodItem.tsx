import { memo } from 'react';
import styled, { css } from 'styled-components'

import { toEuro } from '../../../../helpers'
import { Body } from '../../../../components/typography/Body'
import { Heading } from '../../../../components/typography/Heading'

const Container = styled.div<{ isHighlighted: boolean }>(
  ({ theme: { boxShadow, color } }) => css`
    padding: 1.5rem;
    border-radius: 4px;
    transition: box-shadow 0.1s ease-in;
    position: relative;
    background: ${color.foodItemBackground};

    &:hover {
      cursor: pointer;
      box-shadow: ${boxShadow.card};
    }
  `
)

const Quantity = styled(Body)`
  padding: 0.25rem;
  width: 35px;
  height: 35px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #202020;
  color: white;
  position: absolute;
  top: 0;
  right: 0;
`

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
  ({ quantity = 0, name, price, description, onClick }: FoodItemProps) => {
    return (
      <Container isHighlighted={quantity > 0} onClick={onClick}>
        <div>
          {quantity > 0 && (
            <Quantity aria-label="food quantity" type="span" fontWeight="medium">
              {quantity}
            </Quantity>
          )}
          <Heading level={4}>{name}</Heading>
          <Description>{description}</Description>
          <Price>{toEuro(price)}</Price>
        </div>
      </Container>
    )
  }
)
