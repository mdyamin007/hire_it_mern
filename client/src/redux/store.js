import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import companiesReducer from "./features/companiesSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    companies: companiesReducer
  },
});
