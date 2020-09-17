import { configureStore } from '@reduxjs/toolkit'

import { CartState } from './cart'
import { rootReducer as reducer } from './reducers'

export type AppState = {
  cart: CartState
}

export const store = configureStore({
  reducer,
})
