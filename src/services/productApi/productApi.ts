import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  AddProductReq,
  DeleteProductReq,
  GetProductById,
  GetProductsType,
  GetProfileReq,
  GetProfileResponse,
  UpdateProductReq,
} from "../../../interface.model";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query<GetProductsType, undefined>({
      query: () => "/product",
      providesTags: ["Product"],
    }),
    addProduct: builder.mutation<any, AddProductReq>({
      query: ({ body, token }) => ({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        url: "/product",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Product"],
    }),
    updateProduct: builder.mutation<any, UpdateProductReq>({
      query: ({ body, id, token }) => ({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        url: `/product/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Product"],
    }),
    deleteProduct: builder.mutation<any, DeleteProductReq>({
      query: ({ id, token }) => ({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        url: `/product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
    getProductById: builder.query<any, GetProductById>({
      query: ({ id, token }) => ({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        url: `/product/${id}`,
      }),
      providesTags: ["Product"],
    }),
    getUser: builder.query<GetProfileResponse, GetProfileReq>({
      query: ({ id, token }) => ({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        url: `/user/${id}`,
      }),
      providesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetProductByIdQuery,
  useGetUserQuery,
} = productApi;
