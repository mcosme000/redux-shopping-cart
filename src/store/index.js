import { configureStore } from "@reduxjs/toolkit";
import authenticationSlice from "./authentication-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: {
    authentication: authenticationSlice.reducer,
    cart: cartSlice.reducer
  }
})

export default store;
