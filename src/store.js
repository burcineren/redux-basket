import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/card/cardSlice";
import modalReducer from "./features/modal/ModalSlice";

const store = configureStore({
  reducer: { cart: cartReducer, modal: modalReducer },
});

export default store;
