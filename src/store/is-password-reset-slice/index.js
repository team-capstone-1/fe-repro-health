import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPasswordReset: false,
};
const isPasswordReset = createSlice({
  name: "isPasswordReset",
  initialState,
  reducers: {
    toggleResetPassword: (state) => {
      state.isPasswordReset = !state.isPasswordReset;
    },
  },
});

export const selectIsPasswordReset = (state) => state.isPasswordReset;
export const { toggleResetPassword } = isPasswordReset.actions;
export default isPasswordReset.reducer;
