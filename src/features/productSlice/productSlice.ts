import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  desc: "",
  price: 0,
  creator: "",
  thumbnail: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setDesc: (state, action: PayloadAction<string>) => {
      state.desc = action.payload;
    },
    setPrice: (state, action: PayloadAction<number>) => {
      state.price = action.payload;
    },
    setCreator: (state, action: PayloadAction<string>) => {
      state.creator = action.payload;
    },
    setThumbnail: (state, action: PayloadAction<string>) => {
      state.thumbnail = action.payload;
    },
  },
});

export const { setTitle, setCreator, setDesc, setPrice, setThumbnail } =
  productSlice.actions;

export default productSlice.reducer;
