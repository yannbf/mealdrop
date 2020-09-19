import React, { useState, useEffect, useCallback, memo } from 'react'
import { useParams } from 'react-router-dom'
import { getRestaurantById } from '../stub/restaurants'
import { HeroImage } from '../components/HeroImage'
import { FoodItem } from '../components/FoodItem'
import styled from 'styled-components'
import { breakpoints } from '../styles/breakpoints'
import { useDispatch, useSelector } from 'react-redux'
import {
  clearItemAction,
  saveItemAction,
  selectCartItems,
} from '../app-state/cart'

import { Modal } from '../components/modal/Modal'
import { Button } from '../components/Button'

const StyledContainer = styled.div`
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;
  display: grid;
  padding-bottom: 3rem;

  @media ${breakpoints.M} {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const RestaurantDetailPage = () => {
  let { id } = useParams<{ id: string }>()
  const [restaurant, setRestaurant] = useState<any>({})

  const [selectedItem, setSelectedItem] = useState()
  const closeModal = () => setSelectedItem(undefined)

  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()
  const addItemToCart = (item: any) => dispatch(saveItemAction(item))
  const clearItemFromCart = (item: any) => dispatch(clearItemAction(item))

  useEffect(() => {
    const getData = async () => {
      const data = await getRestaurantById(id)
      setRestaurant(data)
    }

    getData()
  }, [id])

  const { menu, name, specialty, photoUrl } = restaurant

  return (
    <>
      <Modal isOpen={!!selectedItem} onClose={closeModal}>
        {selectedItem && (
          <MenuItemDetailModal
            item={selectedItem}
            cartItems={cartItems}
            onClose={closeModal}
            onItemSave={addItemToCart}
            onItemRemove={clearItemFromCart}
          />
        )}
      </Modal>
      <HeroImage url={photoUrl} />
      {restaurant.menu && (
        <div className="container">
          <h1>{name}</h1>
          <p>Specialties: {specialty}</p>
          {menu.food && (
            <FoodSection
              title="To eat"
              items={menu.food}
              cartItems={cartItems}
              onItemClick={setSelectedItem}
            />
          )}
          {menu.dessert && (
            <FoodSection
              title="Dessert"
              items={menu.dessert}
              cartItems={cartItems}
              onItemClick={setSelectedItem}
            />
          )}
          {menu.drinks && (
            <FoodSection
              title="To eat"
              items={menu.drinks}
              cartItems={cartItems}
              onItemClick={setSelectedItem}
            />
          )}
        </div>
      )}
    </>
  )
}

const MenuItemDetailModal = ({
  item,
  cartItems,
  onClose,
  onItemSave,
  onItemRemove,
}: any) => {
  const cartItem = cartItems.find((cartItem: any) => cartItem.id === item.id)
  const [quantity, setQuantity] = useState(cartItem?.quantity || 0)

  const saveItem = useCallback(() => {
    if (quantity === 0) {
      onItemRemove(item)
    } else {
      onItemSave({ ...item, quantity })
    }

    onClose()
  }, [item, onItemSave, onItemRemove, onClose, quantity])

  return (
    <>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <div>
        <Button label="-" onClick={() => setQuantity(quantity - 1)} />
        {quantity}
        <Button label="+" onClick={() => setQuantity(quantity + 1)} />
      </div>
      <div style={{ display: 'flex' }}>
        <Button label="Cancel" onClick={onClose} />
        <Button primary label="Save" onClick={saveItem} />
      </div>
    </>
  )
}

const FoodSection = memo(({ title, cartItems, items, onItemClick }: any) => (
  <div>
    <h2>{title}</h2>
    <StyledContainer>
      {items.map((item: any) => {
        const cartItem = cartItems.find(
          (cartItem: any) => cartItem.id === item.id
        )
        const quantity = cartItem?.quantity || 0
        return (
          <FoodItem
            key={item.title}
            item={{ ...item, quantity }}
            onClick={() => onItemClick(item)}
          />
        )
      })}
    </StyledContainer>
  </div>
))
