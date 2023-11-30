import { combineReducers, configureStore } from "@reduxjs/toolkit";

import doctorProfile from "./get-doctor-profile-slice";

const rootReducers = combineReducers({ doctorProfile });

const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export default store;
