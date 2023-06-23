import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    showCart: false
  },

  reducers: {
    addToCart(state, action) {
      // the payload is the information I am getting, like params
      const newItem = action.payload;

      // check if the item is already in the cart
      const existingItem = state.itemsList.find((item) => item.id === newItem.id)

      if (existingItem) {
        existingItem.quantity++
        existingItem.price += newItem.price
        state.totalQuantity++
      } else {
        // we add the product to the list
        state.itemsList.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        })
        state.totalQuantity++
      }
    },
    
    removeFromCart() {},

    showCart(state) {
      state.showCart = !state.showCart
    }
  }
})

export const { addToCart, showCart } = cartSlice.actions;
export default cartSlice;
