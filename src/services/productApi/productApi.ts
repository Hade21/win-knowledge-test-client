import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetProductsType } from "../../../interface.model";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getProducts: builder.query<GetProductsType, undefined>({
      query: () => "/product",
    }),
    addProduct: builder.mutation({
      query: (body) => ({
        url: "/product",
        method: "POST",
        body,
      }),
    }),
    updateProduct: builder.mutation({
      query: ({ body, id }) => ({
        url: `/product/${id}`,
        method: "POST",
        body,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
