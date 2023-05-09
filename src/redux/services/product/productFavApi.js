import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productFavApi = createApi({
  reducerPath: "productFavApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shop-api.safeservice.ir/product/fav",
  }),

  endpoints: (builder) => ({
    getFavStatusProduct: builder.query({
      query: ({ token, productId }) => {
        return {
          url: `/${productId}/status`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),

    getFavProductList: builder.query({
      query: ({ token }) => {
        return {
          url: `/list`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),

    setFavProduct: builder.mutation({
      query: ({ token, productId }) => {
        return {
          url: `/${productId}/set`,
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),

    deleteFavProduct: builder.mutation({
      query: ({ token, productId }) => {
        return {
          url: `/${productId}/unset`,
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
  }),
});

export const {
  useGetFavStatusProductQuery,
  useGetFavProductListQuery,
  useSetFavProductMutation,
  useDeleteFavProductMutation,
} = productFavApi;
