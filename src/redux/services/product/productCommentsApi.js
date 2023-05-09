import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productCommentsApi = createApi({
  reducerPath: "productCommentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shop-api.safeservice.ir/product",
  }),
  endpoints: (builder) => ({
    getProductCommentList: builder.query({
      query: ({ productId }) => {
        return {
          url: `/comments/${productId}/list`,
        };
      },
    }),

    setProductCommentAdd: builder.mutation({
      query: ({ token, productId, commentText }) => {
        return {
          url: `/${productId}/comments/add?comment=${commentText}`,
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
  }),
});

export const { useGetProductCommentListQuery } = productCommentsApi;
