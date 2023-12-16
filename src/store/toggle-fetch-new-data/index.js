import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shouldFetchLatestData: false,
};

const toggleFetchNewData = createSlice({
  name: "toggleFetchLatestData",
  initialState,
  reducers: {
    toggleFetchLatestData: (state) => {
      state.shouldFetchLatestData = !state.shouldFetchLatestData;
    },
  },
});

export const selectToggleFetchLatestData = (state) => state.toggleFetchNewData;
export const { toggleFetchLatestData } = toggleFetchNewData.actions;
export default toggleFetchNewData.reducer;
