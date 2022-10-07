import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  AddProductReq,
  DeleteProductReq,
  GetProductById,
  GetProductsType,
  UpdateProductReq,
} from "../../../interface.model";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query<GetProductsType, undefined>({
      query: () => "/product",
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
    }),
    deleteProduct: builder.mutation<any, DeleteProductReq>({
      query: ({ id, token }) => ({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        url: `/product/${id}`,
        method: "DELETE",
      }),
    }),
    getProductById: builder.query<any, GetProductById>({
      query: ({ id, token }) => ({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        url: `/product/${id}`,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetProductByIdQuery,
} = productApi;
