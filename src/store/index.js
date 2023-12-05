import { combineReducers, configureStore } from "@reduxjs/toolkit";

import doctorProfile from "./get-doctor-profile-slice";
import toggleFetchNewData from "./toggle-fetch-new-data";

const rootReducers = combineReducers({ doctorProfile, toggleFetchNewData });

const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export default store;
