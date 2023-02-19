import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import userReducer from "./user/usersSlice";
import { authenticationApi } from "./services/authenticationApi";
import { profileApi } from "./services/profileApi";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [authenticationApi.reducerPath]: authenticationApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authenticationApi.middleware)
      .concat(profileApi.middleware),
});

setupListeners(store.dispatch);
