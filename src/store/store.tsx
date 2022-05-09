import { configureStore } from "@reduxjs/toolkit";
import experienceSlice from "./experienceSlice";

const store = configureStore({
  reducer: {
    experience: experienceSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
