import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import userReducer from "./user/usersSlice";
import { authenticationApi } from "./services/authenticationApi";
import { profileApi } from "./services/profileApi";
import { productFavApi } from "./services/product/productFavApi";
import { productDetailApi } from "./services/product/productDetailApi";
import { productCartApi } from "./services/product/productCartApi";
import { productCategoryApi } from "./services/product/productCategoryApi";
import { productCommentsApi } from "./services/product/productCommentsApi";
import { productPurchaseApi } from "./services/product/productPurchaseApi";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [authenticationApi.reducerPath]: authenticationApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [productFavApi.reducerPath]: productFavApi.reducer,
    [productDetailApi.reducerPath]: productDetailApi.reducer,
    [productCartApi.reducerPath]: productCartApi.reducer,
    [productCategoryApi.reducerPath]: productCategoryApi.reducer,
    [productCommentsApi.reducerPath]: productCommentsApi.reducer,
    [productPurchaseApi.reducerPath]: productPurchaseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authenticationApi.middleware)
      .concat(profileApi.middleware)
      .concat(productFavApi.middleware)
      .concat(productDetailApi.middleware)
      .concat(productCartApi.middleware)
      .concat(productCategoryApi.middleware)
      .concat(productCommentsApi.middleware)
      .concat(productPurchaseApi.middleware),
});

setupListeners(store.dispatch);
