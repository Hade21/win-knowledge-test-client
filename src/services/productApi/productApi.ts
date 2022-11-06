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
  baseQuery: fetchBaseQuery({ baseUrl: "https://pasar-online.up.railway.app" }),
  tagTypes: ["AddProduct", "EditProduct", "DeleteProduct"],
  endpoints: (builder) => ({
    getProducts: builder.query<GetProductsType, undefined>({
      query: () => "/product",
      providesTags: ["AddProduct", "EditProduct", "DeleteProduct"],
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
      invalidatesTags: ["AddProduct"],
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
      invalidatesTags: ["EditProduct"],
    }),
    deleteProduct: builder.mutation<any, DeleteProductReq>({
      query: ({ id, token }) => ({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        url: `/product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["DeleteProduct"],
    }),
    getProductById: builder.query<any, GetProductById>({
      query: ({ id, token }) => ({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        url: `/product/${id}`,
      }),
      // providesTags: ["EditProduct"],
    }),
    getUser: builder.query<GetProfileResponse, GetProfileReq>({
      query: ({ id, token }) => ({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        url: `/user/${id}`,
      }),
      // providesTags: ["Product"],
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
