import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productPurchaseApi = createApi({
  reducerPath: "productPurchaseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shop-api.safeservice.ir/product",
  }),
  endpoints: (builder) => ({
    getProductPurcheasesList: builder.query({
      query: ({ token, userId }) => {
        return {
          url: `/purchased/list?user_id=${userId}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),

    getCartPurchaseVerify: builder.query({
      query: ({ token }) => {
        return {
          url: `/cart/purchase/verify`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),

    setCartPurchase: builder.mutation({
      query: ({ token }) => {
        return {
          method: "POST",
          url: `/cart/purchase`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
  }),
});

export const {
  useGetProductPurcheasesListQuery,
  useGetCartPurchaseVerifyQuery,
  useSetCartPurchaseMutation,
} = productPurchaseApi;
