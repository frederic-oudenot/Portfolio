import { configureStore } from "@reduxjs/toolkit";
import windowSlice from "@/store/reducers/windowSlice";
import projectsSlice from "./reducers/projectsSlice";

export const store = configureStore({
  reducer: {
    windows: windowSlice,
    projects: projectsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
