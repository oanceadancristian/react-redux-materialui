import { configureStore } from '@reduxjs/toolkit';
import ProductsListSlice from '../Slices/ProductsListSlice';
import ProductDetailsSlice from '../Slices/ProductDetailsSlice';

export default configureStore({
  reducer: {
    productsListSlice: ProductsListSlice,
    productDetailsSlice: ProductDetailsSlice,
  },
});
