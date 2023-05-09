import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productDetailApi = createApi({
  reducerPath: "productDetailApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shop-api.safeservice.ir/product",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ pageSize = 10, pageNumber = 1 }) => {
        return {
          url: `all?page_size=${pageSize}&page_number=${pageNumber}`,
        };
      },
    }),

    getProductDetail: builder.query({
      query: ({ id }) => {
        return {
          url: `/${id}/get`,
        };
      },
    }),
  }),
});

export const { useGetProductsQuery, useGetProductDetailQuery } =
  productDetailApi;
