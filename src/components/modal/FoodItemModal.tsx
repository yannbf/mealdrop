import React, { useState, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import { toEuro } from '../../helpers'

import { Button } from '../Button'
import { Body } from '../typography/Body'
import { Heading } from '../typography/Heading'
import { Modal } from './Modal'

const StyledBody = styled(Body)`
  margin: 0;
  margin-top: 8px;
`

const StyledButton = styled(Button)`
  flex: 1;
`

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 0.45;
  margin-right: 1.5rem;
`

const TopContainer = styled.div`
  padding: 2.5rem 1.5rem;
  background: #f5f6f7;
  border-radius: 16px 16px 0px 0px;
`

const BottomContainer = styled.div`
  padding: 1.5rem;
  display: flex;
`

export const FoodItemModal = ({
  item,
  cartItems,
  onClose,
  onItemSave,
  onItemRemove,
}: any) => {
  console.log({ cartItems, item })
  const [quantity, setQuantity] = useState(0)

  const saveItem = useCallback(() => {
    if (quantity === 0) {
      onItemRemove(item)
    } else {
      onItemSave({ ...item, quantity })
    }

    onClose()
  }, [quantity, onClose, onItemRemove, item, onItemSave])

  useEffect(() => {
    const cartItem =
      item && cartItems.find((cartItem: any) => cartItem.id === item.id)
    setQuantity(cartItem?.quantity || 1)
    return () => setQuantity(0)
  }, [cartItems, item])

  return (
    <Modal isOpen={!!item} onClose={onClose}>
      {item && (
        <div>
          <TopContainer>
            <Heading>{item.name}</Heading>
            <StyledBody>{item.description}</StyledBody>
          </TopContainer>
          <BottomContainer>
            <ButtonsContainer>
              <Button
                round
                clear
                icon="minus"
                onClick={() => setQuantity(quantity - 1)}
                disabled={quantity <= 1}
              />
              {quantity}
              <Button
                round
                clear
                icon="plus"
                onClick={() => setQuantity(quantity + 1)}
                disabled={quantity >= 10}
              />
            </ButtonsContainer>
            <StyledButton primary onClick={saveItem}>
              add for {toEuro(item.price * quantity)}
            </StyledButton>
          </BottomContainer>
        </div>
      )}
    </Modal>
  )
}
