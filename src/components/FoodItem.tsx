import React, { memo } from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div<{ isHighlighted: boolean }>(
  ({ isHighlighted }) => css`
    padding: 1rem;
    border: 1px solid;
    border-width: ${isHighlighted ? '2px' : '1px'};
    border-color: ${isHighlighted ? '#a2b' : '#ccc'};
    transition: border 0.1s linear;
    transition: all 150ms ease-in;
    position: relative;

    &:hover {
      border-color: ${isHighlighted ? '#a2b' : '#333'};
      cursor: pointer;
      box-shadow: 0px 18px 20px 0px rgba(0, 0, 0, 0.08);
    }
  `
)

const Quantity = styled.div`
  padding: 0.25rem;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #dbbeff;
  color: white;
  position: absolute;
  top: 0;
  right: 0;
`

export const FoodItem = memo(({ item, onClick }: any) => {
  const { quantity, name, price, description } = item

  return (
    <Container isHighlighted={quantity > 0} onClick={onClick}>
      <div>
        {quantity > 0 && <Quantity>{quantity}</Quantity>}
        <h3>
          {name} - {price}
        </h3>
        <p>{description}</p>
      </div>
    </Container>
  )
})
