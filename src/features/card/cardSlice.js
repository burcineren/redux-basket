import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};

const cardSlice = createSlice({
  name: "card",
  initialState: initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = cartItems.filter((item) => item.id !== itemId);
    },
  },
});
export const { clearCart, removeItem } = cardSlice.actions;
export default cardSlice.reducer;
