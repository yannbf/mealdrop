import { combineReducers } from '@reduxjs/toolkit'

import { reducer as cart, CartState } from './cart'

export type AppState = {
  cart: CartState
}

export const rootReducer = combineReducers({
  cart,
})
