import React, { memo } from 'react'
import styled, { css } from 'styled-components'
import { toEuro } from '../helpers'
import { Body } from './typography/Body'
import { Heading } from './typography/Heading'

const Container = styled.div<{ isHighlighted: boolean }>(
  ({ isHighlighted }) => css`
    padding: 1.5rem;
    border-radius: 4px;
    transition: box-shadow 0.1s ease-in;
    position: relative;
    background: white;

    &:hover {
      cursor: pointer;
      box-shadow: 0px 14px 26px 0px rgba(0, 0, 0, 0.08);
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
  background: #F8FDEE;
  color: #77835E;
  position: absolute;
  top: 0;
  right: 0;
`

const Description = styled(Body)`
  margin: 0;
  color: #636871;
  margin-top: 0.5rem;
`

const Price = styled(Body)`
  margin: 0;
  margin-top: 1rem;
`

export const FoodItem = memo(({ item, onClick }: any) => {
  const { quantity, name, price, description } = item

  return (
    <Container isHighlighted={quantity > 0} onClick={onClick}>
      <div>
        {quantity > 0 && <Quantity type="span" fontWeight="medium">{quantity}</Quantity>}
        <Heading level={4}>
          {name}
        </Heading>
        <Description>{description}</Description>
        <Price>{toEuro(price)}</Price>
      </div>
    </Container>
  )
})
