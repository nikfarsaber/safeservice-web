import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import userReducer from "./user/usersSlice";
import { authenticationApi } from "./services/authenticationApi";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [authenticationApi.reducerPath]: authenticationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authenticationApi.middleware),
});

setupListeners(store.dispatch);
