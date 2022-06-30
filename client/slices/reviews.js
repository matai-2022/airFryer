import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getItemReviews, postItemReview } from '../apis/api'

export const fetchItemReviews = createAsyncThunk(
  'itemReviews/fetchItemReviews',
  async (itemId) => {
    return await getItemReviews(itemId)
  }
)

export const addItemReview = createAsyncThunk(
  'itemReviews/addItemReview',
  async (id) => {
    return await postItemReview(id)
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
