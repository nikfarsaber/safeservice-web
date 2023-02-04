import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authenticationApi = createApi({
  reducerPath: "authenticationApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://shop-api.safeservice.ir" }),
  endpoints: (builder) => ({
    getRegisterByPhoneNumber: builder.query({
      query: (phoneNumber) => `auth/request_login?phone=${phoneNumber}`,
    }),
  }),
});

export const { AuthenticationByNumber } = authenticationApi;
