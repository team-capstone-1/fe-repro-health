import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIProfile } from "@/apis/APIProfile";

export const fetchGetDoctorProfile = createAsyncThunk(
  "fetch/getDoctorProfile",
  APIProfile.getDoctorProfile,
);

// initial state
const initialState = {
  message: "",
  status: "idle",
  data: null,
};

const getDoctorProfileSlice = createSlice({
  name: "doctorProfile",
  initialState,
  extraReducers: (builder) => {
    builder.addCase("fetch/getDoctorProfile/pending", (state) => {
      state.status = "loading";
      state.message = "";
    });

    builder.addCase(
      "fetch/getDoctorProfile/fulfilled",
      (state, { payload }) => {
        state.status = "success";
        state.data = payload;
      },
    );

    builder.addCase("fetch/getDoctorProfile/rejected", (state, { error }) => {
      state.status = "failed";
      state.message = error.stack;
    });
  },
});

export const selectDoctorProfile = (state) => state.doctorProfile;

export default getDoctorProfileSlice.reducer;
