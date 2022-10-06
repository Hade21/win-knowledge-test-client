import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  GetProfileResponse,
  SignInBody,
  SignInResponse,
  SignUpBody,
} from "../../../interface.model";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/user" }),
  endpoints: (builder) => ({
    getUser: builder.query<GetProfileResponse, string>({
      query: (id) => `/${id}`,
    }),
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

export const { useGetUserQuery, useRegisterMutation, useLoginMutation } =
  userApi;
