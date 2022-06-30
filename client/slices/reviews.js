import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getItemReviews } from '../apis/api'

export const fetchItemReviews = createAsyncThunk(
  'itemReviews/fetchItemReviews',
  async (itemId) => {
    return await getItemReviews(itemId)
  }
)

const slice = createSlice({
  name: 'itemReviews',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchItemReviews.fulfilled]: (state, { payload }) => payload,
  },
})

export const selectItemReviews = (state) => state.itemReviews
export default slice.reducer
