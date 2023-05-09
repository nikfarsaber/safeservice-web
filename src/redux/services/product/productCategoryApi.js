import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productCategoryApi = createApi({
  reducerPath: "productCategoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shop-api.safeservice.ir/product/categories",
  }),
  endpoints: (builder) => ({
    getCategoriesList: builder.query({
      query: ({}) => {
        return {
          url: "/list",
        };
      },
    }),
  }),
});

export const { useGetCategoriesListQuery } = productCategoryApi;
