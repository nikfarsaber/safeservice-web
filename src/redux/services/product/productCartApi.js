import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productCartApi = createApi({
  reducerPath: "productCartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shop-api.safeservice.ir/product/cart",
  }),
  endpoints: (builder) => ({
    getProductCartList: builder.query({
      query: ({ token }) => {
        return {
          url: `/products/list`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),

    setAddToCart: builder.mutation({
      query: ({ token, productId, productConfig, count }) => {
        return {
          url: `/${productId}/add?config_id=${productConfig}&count=${count}`,
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),

    setRemoveFromCart: builder.mutation({
      query: ({ token, productId, productConfig }) => {
        return {
          url: `/${productId}/remove?config_id=${productConfig}`,
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),

    setProductShippingCart: builder.mutation({
      query: ({
        token,
        name,
        phone,
        address,
        postalCode,
        state,
        city,
        notes,
        method,
      }) => {
        return {
          url: `/shipping/set`,
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            accept: "application/json",
            "Content-Type": "application/json",
          },
          body: {
            name,
            phone,
            address,
            postal_code: postalCode,
            state,
            city,
            notes,
            method,
          },
        };
      },
    }),

    getProductShippingCart: builder.query({
      query: ({ token }) => {
        return {
          url: "/shipping/set",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
  }),
});

export const {
  useGetProductCartListQuery,
  useSetAddToCartMutation,
  useSetRemoveFromCartMutation,
  useSetProductShippingCartMutation,
} = productCartApi;
