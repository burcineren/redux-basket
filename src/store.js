import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/card/cardSlice";

const store = configureStore({
  reducer: cartReducer,
});

export default store;
