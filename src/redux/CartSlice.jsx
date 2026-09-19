import { createSlice } from "@reduxjs/toolkit";

// The cart starts empty.
// Each item in the cart looks like this:
// { id, name, price, image, quantity }
const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add a plant to the cart (quantity starts at 1).
    // If the plant is already in the cart we do nothing, so there are no duplicates.
    addToCart: (state, action) => {
      const plant = action.payload;
      const alreadyInCart = state.items.find((item) => item.id === plant.id);

      if (!alreadyInCart) {
        state.items.push({
          id: plant.id,
          name: plant.name,
          price: plant.price,
          image: plant.image,
          quantity: 1,
        });
      }
    },

    // Increase the quantity of one plant by exactly 1.
    // action.payload is the plant id.
    increaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);

      if (item) {
        item.quantity += 1;
      }
    },

    // Decrease the quantity of one plant by exactly 1.
    // If the quantity would reach 0, the plant is removed from the cart,
    // so the quantity can never become negative.
    decreaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);

      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter((cartItem) => cartItem.id !== action.payload);
        }
      }
    },

    // Remove a plant (all of its quantity) from the cart.
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
