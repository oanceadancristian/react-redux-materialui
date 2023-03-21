import { createSlice } from '@reduxjs/toolkit';

export const ProductDetailsSlice = createSlice({
  name: 'product-details',
  initialState: {
    productDetails: {},
  },
  reducers: {
    setProductDetails: (state, action) => {
      state.productDetails = action.payload;
    },
  },
});

export const { setProductDetails } = ProductDetailsSlice.actions;

export default ProductDetailsSlice.reducer;
