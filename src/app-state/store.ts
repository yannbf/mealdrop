import { configureStore } from '@reduxjs/toolkit'

import { reducer as cart } from './cart'

export const store = configureStore({
  reducer: {
    cart,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
