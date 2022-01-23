import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '../store'

const selectOrder = (state: RootState) => state.order

export const selectOrderItems = createSelector([selectOrder], (order) => order.items)

export const selectOrderTotal = createSelector([selectOrderItems], (items) =>
  items.reduce((acc, item) => acc + item.quantity * item.price, 0)
)
