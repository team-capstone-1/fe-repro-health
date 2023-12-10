import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APISchedule } from "@/apis/APISchedule";

export const fetchDoctorSchedule = createAsyncThunk(
  "fetch/doctorSchedule",
  APISchedule.getAllSchedule,
);

const initialState = {
  message: "",
  status: "idle",
  data: null,
};

const getDoctorScheduleSlice = createSlice({
  name: "doctorSchedule",
  initialState,
  extraReducers: (builder) => {
    builder.addCase("fetch/doctorSchedule/pending", (state) => {
      state.status = "loading";
      state.message = "";
    });
    builder.addCase("fetch/doctorSchedule/fulfilled", (state, { payload }) => {
      state.status = "success";
      state.data = payload;
    });
    builder.addCase("fetch/doctorSchedule/rejected", (state, { error }) => {
      state.status = "failed";
      state.message = error.stack;
    });
  },
});

export const selectDoctorSchedule = (state) => state.doctorSchedule;
export default getDoctorScheduleSlice.reducer;
