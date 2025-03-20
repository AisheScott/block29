// Import configureStore (function to create a Redux store with good default middleware settings)
// from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";

import { puppyBowlApi } from "../api/puppyBowlApi";

// Create a Redux store
const store = configureStore({
  reducer: {
    // The key is the reducerPath we defined in our API service, and the value is the reducer
    [puppyBowlApi.reducerPath]: puppyBowlApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(puppyBowlApi.middleware),
});

export default store;