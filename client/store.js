import { configureStore } from '@reduxjs/toolkit'
// import fruits from './slices/fruits'
import items from './slices/items'
// import reviews from './slices/reviews'

const store = configureStore({
  reducer: {
    // fruits,
    items,
    // reviews,
  },
})

export default store
