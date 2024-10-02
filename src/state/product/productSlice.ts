import { createSlice } from '@reduxjs/toolkit'

interface ProductState {
  count: number
}

const initialState: ProductState = {
  count: 0,
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
})

// Export actions for components to use
export const {} = productSlice.actions

// Export the reducer
export default productSlice.reducer
