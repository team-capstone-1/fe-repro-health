import { combineReducers, configureStore } from "@reduxjs/toolkit";

import doctorProfile from "./get-doctor-profile-slice";
import toggleFetchNewData from "./toggle-fetch-new-data";
import isPasswordReset from "./is-password-reset-slice";

const rootReducers = combineReducers({
  doctorProfile,
  toggleFetchNewData,
  isPasswordReset,
});

const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export default store;
