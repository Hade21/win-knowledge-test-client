import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../features/userSlice/userSlice";
import { productApi } from "../services/productApi/productApi";
import { userApi } from "../services/userApi/userApi";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [userApi.reducerPath]: userApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
