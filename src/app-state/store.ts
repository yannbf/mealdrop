import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { reducer as cart } from './cart'
import { reducer as order } from './order'

export const rootReducer = combineReducers({
  cart,
  order,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
