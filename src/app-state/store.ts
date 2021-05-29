import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { reducer as cart } from './cart'

export const rootReducer = combineReducers({
  cart,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
