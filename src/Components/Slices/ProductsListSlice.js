import { createSlice } from '@reduxjs/toolkit';

export const ProductsListSlice = createSlice({
  name: 'products-list',
  initialState: {
    productsList: [],
  },
  reducers: {
    setProductsList: (state, action) => {
      state.productsList = action.payload;
    },
  },
});

export const { setProductsList } = ProductsListSlice.actions;

export default ProductsListSlice.reducer;
