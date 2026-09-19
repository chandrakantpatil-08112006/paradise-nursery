import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice.jsx";

// The store is the single place where the whole app's shared data lives.
// Our store has one section (called "cart") that is managed by CartSlice.
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
