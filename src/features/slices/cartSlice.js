// cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, name, price, image } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        // If the item is already in the cart, increase its quantity
        existingItem.quantity += 1;
      } else {
        // If the item is not in the cart, add it with a quantity of 1
        state.items.push({ id, name, price, image, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    increaseQuantity: (state, action) => {
      const itemToUpdate = state.items.find((item) => item.id === action.payload);
      if (itemToUpdate) {
        itemToUpdate.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const itemToUpdate = state.items.find((item) => item.id === action.payload);
      if (itemToUpdate && itemToUpdate.quantity > 1) {
        itemToUpdate.quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

export default cartSlice.reducer;
