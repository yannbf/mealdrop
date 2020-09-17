import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Button } from './Button'

const Container = styled.div<{ isHighlighted: boolean }>(
  ({ isHighlighted }) => css`
    padding: 1rem;
    border: 1px solid;
    border-width: ${isHighlighted ? '2px' : '1px'};
    border-color: ${isHighlighted ? '#a2b' : '#ccc'};
    transition: border 0.1s linear;
    transition: all 150ms ease-in;

    &:hover {
      border-color: ${isHighlighted ? '#a2b' : '#333'};
      cursor: pointer;
      box-shadow: 0px 18px 20px 0px rgba(0, 0, 0, 0.08);
    }
  `
)

const CollapsibleContainer = styled.div<{ isOpen: boolean }>(
  ({ isOpen }) => css`
    visibility: ${isOpen ? 'visible' : 'hidden'};
    height: ${isOpen ? 'auto' : 0};
    display: flex;
    align-items: center;
  `
)

export const FoodItem = ({
  name,
  quantity,
  price,
  description,
  onClick,
}: any) => {
  const [open, setOpen] = useState(quantity > 0)
  const [amount, setAmount] = useState(quantity || 0)

  return (
    <Container isHighlighted={amount > 0}>
      <div onClick={onClick}>
        <div>
          <h3>
            {name} - {price}
          </h3>
          <p>{description}</p>
        </div>
      </div>
      {/* <CollapsibleContainer isOpen={open}>
        <Button label="-" onClick={() => setAmount(amount - 1)} />
        {amount}
        <Button label="+" onClick={() => setAmount(amount + 1)} />
      </CollapsibleContainer> */}
    </Container>
  )
}
