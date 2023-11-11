
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/slices/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
