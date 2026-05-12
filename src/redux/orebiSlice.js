import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: [],
  products: [],      // cart items
  wishlist: [],      // wishlist items
};

export const orebiSlice = createSlice({
  name: "RC",
  initialState,
  reducers: {

    // ======================
    // 🛒 CART FUNCTIONALITY
    // ======================

    addToCart: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },

    increaseQuantity: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );

      if (item) {
        item.quantity++;
      }
    },

    drecreaseQuantity: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );

      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },

    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item._id !== action.payload
      );
    },

    resetCart: (state) => {
      state.products = [];
    },

    // ======================
    // ❤️ WISHLIST FUNCTIONALITY
    // ======================

    addToWishlist: (state, action) => {
      const item = state.wishlist.find(
        (item) => item._id === action.payload._id
      );

      if (!item) {
        state.wishlist.push(action.payload);
      }
    },

    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item._id !== action.payload
      );
    },

    toggleWishlist: (state, action) => {
      const item = state.wishlist.find(
        (item) => item._id === action.payload._id
      );

      if (item) {
        state.wishlist = state.wishlist.filter(
          (i) => i._id !== action.payload._id
        );
      } else {
        state.wishlist.push(action.payload);
      }
    },

    clearWishlist: (state) => {
      state.wishlist = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  drecreaseQuantity,
  deleteItem,
  resetCart,

  addToWishlist,
  removeFromWishlist,
  toggleWishlist,
  clearWishlist,
} = orebiSlice.actions;

export default orebiSlice.reducer;