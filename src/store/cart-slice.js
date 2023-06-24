import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    showCart: false,
    totalPrice: 0
  },

  reducers: {
    addToCart(state, action) {
      // the payload is the information I am getting, like params
      const newItem = action.payload;

      // check if the item is already in the cart
      const existingItem = state.itemsList.find((item) => item.id === newItem.id)

      if (existingItem) {
        existingItem.quantity++
        existingItem.totalPrice += newItem.price
      } else {
        // we add the product to the list
        state.itemsList.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          img: newItem.img,
          quantity: 1,
          totalPrice: newItem.price,
        })
        // Only increase the quantity when adding NEW items
        state.totalQuantity++
      }
    },

    removeFromCart(state, action) {
      const id = action.payload
      const existingItem = state.itemsList.find(item => item.id === id)

      if (existingItem.quantity === 1) {
        state.itemsList = state.itemsList.filter(item => item !== existingItem)
        state.totalQuantity--;
      } else if (existingItem.quantity > 1) {
        existingItem.quantity -= 1
        existingItem.totalPrice -= existingItem.price
      }
    },

    showCart(state) {
      state.showCart = !state.showCart
    }
  }
})

export const { addToCart, removeFromCart, showCart } = cartSlice.actions;
export default cartSlice;
