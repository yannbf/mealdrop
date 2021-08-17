import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '../store'

const selectCart = (state: RootState) => state.cart

export const selectCartVisibility = createSelector([selectCart], (cart) => cart.visible)

export const selectCartItems = createSelector([selectCart], (cart) => cart.items)

export const selectCartItemsCount = createSelector([selectCartItems], (items) =>
  items.reduce((acc, item) => acc + item.quantity, 0)
)

export const selectCartTotal = createSelector([selectCartItems], (items) =>
  items.reduce((acc, item) => acc + item.quantity * item.price, 0)
)
