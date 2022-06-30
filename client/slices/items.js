import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getItems } from '../apis/api'

export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
  return await getItems()
})

const slice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchItems.fulfilled]: (state, { payload }) => payload,
  },
})

export const selectItems = (state) => state.items
export default slice.reducer

// // tests
// // _____________________________________________________

// // console.log('fetch Items', fetchItems)

// import { useSelector } from 'react-redux'

// async function test() {
//   const items = await fetchItems()
//   console.log('fetched Items = ', items)
// }

// test()
