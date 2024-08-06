import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  notifications: [],
  isNotificationsModalOpen: false,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      state.cart.push(action.payload);
      state.notifications.push({ message: `Added ${action.payload.title} to cart` });
    },
    remove: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      state.notifications.push({ message: `Removed item from cart` });
    },
    toggleNotificationsModal: (state) => {
      state.isNotificationsModalOpen = !state.isNotificationsModalOpen;
    },
  },
});

export const { add, remove, toggleNotificationsModal } = CartSlice.actions;
export default CartSlice.reducer;
