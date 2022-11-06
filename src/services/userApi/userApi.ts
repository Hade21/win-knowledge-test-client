import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  SignInBody,
  SignInResponse,
  SignUpBody,
} from "../../../interface.model";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pasar-online.up.railway.app/user",
  }),
  endpoints: (builder) => ({
    register: builder.mutation<any, SignUpBody>({
      query: (body) => ({
        url: "/signup",
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation<SignInResponse, SignInBody>({
      query: (body) => ({
        url: "/signin",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = userApi;
