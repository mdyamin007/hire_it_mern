import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import companiesReducer from "./features/companiesSlice";
import jobPostsReducer from "./features/jobSlice"
import cvReducer from "./features/cvSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    companies: companiesReducer,
    jobPosts: jobPostsReducer,
    cv: cvReducer,
  },
});
