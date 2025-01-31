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
      console.log(state.cartItems);
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = payload.amount + 1;
    },
    decrease: (state, { payload }) => {
      console.log("payload::", payload);
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = payload.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;

      state.cartItems.forEach((item) => {
        const itemAmount = Number(item.amount) || 0;
        const itemPrice = Number(item.price) || 0;

        amount += itemAmount;
        total += itemAmount * itemPrice;
      });

      state.amount = amount;
      state.total = total;
    },
  },
});
export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cardSlice.actions;
export default cardSlice.reducer;
