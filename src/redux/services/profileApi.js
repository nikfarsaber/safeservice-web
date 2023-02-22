import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shop-api.safeservice.ir/profile/",
  }),
  endpoints: (builder) => ({
    getUserDetail: builder.query({
      query: ({ token, userId }) => {
        if (userId && token) {
          return {
            url: `get/${userId}`,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
        } else {
          return {
            url: "",
          };
        }
      },
    }),

    setUserDetail: builder.mutation({
      query: ({ token, userId, userDetail }) => {
        return {
          url: `get/${userId}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
  }),
});

export const { useGetUserDetailQuery } = profileApi;
