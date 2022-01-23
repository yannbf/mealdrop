import { createSlice, CaseReducer, PayloadAction } from '@reduxjs/toolkit'

import { ShopItem } from '../../types'
export interface CartItem extends ShopItem {
  quantity: number
}

export type CartState = {
  visible: boolean
  items: CartItem[]
}

const toggleVisibility: CaseReducer<CartState> = (state) => {
  state.visible = !state.visible
}

const clearCart: CaseReducer<CartState> = (state) => {
  state.visible = false
  state.items = []
}

const clearItem: CaseReducer<CartState, PayloadAction<CartItem>> = (state, action) => {
  state.items = state.items.filter((item) => item.id !== action.payload.id)
}

const removeItem: CaseReducer<CartState, PayloadAction<CartItem>> = (state, action) => {
  const existingCartItem = state.items.find((item) => item.id === action.payload.id)

  if (!existingCartItem) return

  if (existingCartItem.quantity === 1) {
    state.items = state.items.filter((item) => item.id !== action.payload.id)
  } else {
    existingCartItem.quantity -= 1
  }
}

const saveItem: CaseReducer<CartState, PayloadAction<CartItem>> = (state, action) => {
  const existingCartItem = state.items.find((item) => item.id === action.payload.id) as CartItem

  if (existingCartItem) {
    existingCartItem.quantity = action.payload.quantity
  } else {
    state.items.push(action.payload)
  }
}

const initialState: CartState = {
  visible: false,
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleVisibilityAction: toggleVisibility,
    saveItemAction: saveItem,
    clearItemAction: clearItem,
    removeItemAction: removeItem,
    clearCartAction: clearCart,
  },
})

// Extract the action creators object and the reducer
export const { actions, reducer } = cartSlice

// Extract and export each action creator by name
export const {
  toggleVisibilityAction,
  saveItemAction,
  clearItemAction,
  removeItemAction,
  clearCartAction,
} = actions

// Export the reducer, either as a default or named export
export default reducer
