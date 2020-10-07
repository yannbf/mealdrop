import React, { useState, useEffect, useCallback, memo } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { getRestaurantById } from '../stub/restaurants'
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
import { TopBanner } from '../components/TopBanner'
import { Heading } from '../components/typography/Heading'
import { Body } from '../components/typography/Body'

const StyledContainer = styled.div`
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;
  display: grid;
  padding-bottom: 3rem;

  @media ${breakpoints.M} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${breakpoints.L} {
    grid-template-columns: repeat(3, 1fr);
  }
`

const DetailSection = styled.div`
  margin-top: 2rem !important;
  margin-bottom: 2rem !important;
`

const MenuSection = styled.div`
  padding-top: 3rem !important;
  padding-bottom: 5rem !important;
  background: #f9f9f9;
`

const StyledHeading = styled(Heading)`
  margin-bottom: 1.5rem;
`

export const RestaurantDetailPage = () => {
  let { id } = useParams<{ id: string }>()
  const history = useHistory()
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
      <TopBanner
        title={name}
        photoUrl={photoUrl}
        onBackClick={() => history.goBack()}
      />
      {restaurant.menu && (
        <>
          <DetailSection className="container">
            <Heading level={2}>{name}</Heading>
            <Body>Specialties: {specialty}</Body>
          </DetailSection>
          <MenuSection>
            <div className="container">
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
          </MenuSection>
        </>
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
      <Heading level={2}>{item.name}</Heading>
      <Body>{item.description}</Body>
      <div>
        <Button
          primary
          icon="minus"
          onClick={() => setQuantity(quantity - 1)}
        />
        {quantity}
        <Button primary icon="plus" onClick={() => setQuantity(quantity + 1)} />
      </div>
      <div style={{ display: 'flex' }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button primary onClick={saveItem}>
          Save
        </Button>
      </div>
    </>
  )
}

const FoodSection = memo(({ title, cartItems, items, onItemClick }: any) => (
  <div>
    <StyledHeading level={3}>{title}</StyledHeading>
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
