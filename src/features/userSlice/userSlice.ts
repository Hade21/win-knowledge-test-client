import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserStateTypes } from "../../../interface.model";

const initialState: UserStateTypes = {
  fullname: "",
  email: "",
  password: "",
  gender: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFullname: (state, action: PayloadAction<string>) => {
      state.fullname = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setGender: (state, action: PayloadAction<string>) => {
      state.gender = action.payload;
    },
  },
});

export const { setFullname, setEmail, setPassword, setGender } =
  userSlice.actions;
export default userSlice.reducer;
