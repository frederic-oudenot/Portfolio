import { configureStore } from "@reduxjs/toolkit";
import windowSlice from "@/store/reducers/windowSlice";
import projectsSlice from "./reducers/projectsSlice";
import wallpaperSlice from "./reducers/wallpaperSlice";
import languageSlice from "./reducers/languageSlice";

export const store = configureStore({
  reducer: {
    windows: windowSlice,
    projects: projectsSlice,
    wallpaper: wallpaperSlice,
    languages: languageSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
