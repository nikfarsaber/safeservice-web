import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authenticationApi = createApi({
  reducerPath: "authenticationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shop-api.safeservice.ir/auth/",
  }),
  endpoints: (builder) => ({
    registerByPhoneNumber: builder.mutation({
      query: (phoneNumber) => {
        return {
          url: `request_register?phone=${phoneNumber}`,
          method: "POST",
        };
      },
    }),

    loginByPhoneNumber: builder.mutation({
      query: (phoneNumber) => {
        return {
          url: `request_login?phone=${phoneNumber}`,
          method: "POST",
        };
      },
    }),

    loginByOtp: builder.mutation({
      query: ({ phoneNumber, otpNumber }) => {
        return {
          url: `login_w_otp?phone=${phoneNumber}&otp_code=${otpNumber}`,
          method: "POST",
        };
      },
    }),

    registerByOtp: builder.mutation({
      query: ({ phoneNumber, otpNumber, name, family }) => {
        return {
          url: `register_w_otp?phone=${phoneNumber}&name=${name}&family=${family}&otp_code=${otpNumber}`,
          method: "POST",
        };
      },
    }),

    getUserShortDetail: builder.query({
      query: (token) => {
        return {
          url: `me`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
  }),
});

export const {
  useRegisterByPhoneNumberMutation,
  useLoginByPhoneNumberMutation,
  useLoginByOtpMutation,
  useRegisterByOtpMutation,
  useGetUserShortDetailQuery,
} = authenticationApi;
