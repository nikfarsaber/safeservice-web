import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shop-api.safeservice.ir/profile/",
  }),
  endpoints: (builder) => ({
    getUserDetail: builder.query({
      query: ({ token, userId = "" }) => {
        return {
          url: `get/${userId}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),

    setUserDetail: builder.mutation({
      query: ({ token, userId, userDetail }) => {
        console.log(userDetail);
        let urlQuery = `set/${userId}?`;
        let firstKey = true;
        for (const [key, value] of Object.entries(userDetail)) {
          urlQuery += `${!firstKey ? "&" : ""}${key}=${value}`;
          if (firstKey) firstKey = false;
        }
        console.log(urlQuery);
        return {
          url: `${urlQuery}`,
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
  }),
});

export const { useGetUserDetailQuery, useSetUserDetailMutation } = profileApi;
