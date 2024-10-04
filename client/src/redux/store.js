import { configureStore } from "@reduxjs/toolkit";
import authReducer from './user/authSlice';
import cartReducer from './product/cartSlice';
const store = configureStore({
  reducer:{
    auth:authReducer,
    cart:cartReducer,
  }
});

export default store;

