import allWallpapers, { familyWallpaper } from "@/constants/allWallpapers";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Wallpaper {
  wallpaper: { id: string; family: string; source: string; src: string };
  selectedWallpaper: {
    id: string;
    family: string;
    source: string;
    src: string;
  } | null;
  familyWallpaper: {
    id: string;
    family: string;
    source: string;
    src: string;
  }[];
  selectedFamilyWallpaper:
    | {
        id: string;
        family: string;
        source: string;
        src: string;
      }[]
    | null;
}

function renderInitialWallpaper() {
  const initialFamily = allWallpapers.filter((wallpaper) => {
    return wallpaper.family === familyWallpaper[0].id;
  });
  return initialFamily;
}

const initialState: Wallpaper = {
  wallpaper: allWallpapers[1],
  selectedWallpaper: null,
  familyWallpaper: renderInitialWallpaper(),
  selectedFamilyWallpaper: null,
};

const wallpaperSlice = createSlice({
  name: "wallpaper",
  initialState,
  reducers: {
    changeFamilyWallpaper(state, action: PayloadAction<string>) {
      const foundFamilyWallpaper = allWallpapers.filter((wallpaper) => {
        return wallpaper.family === action.payload;
      });
      if (foundFamilyWallpaper) {
        state.selectedFamilyWallpaper = foundFamilyWallpaper;
      } else {
        state.selectedFamilyWallpaper = null;
      }
    },
    changeWallpaper(state, action: PayloadAction<string>) {
      const foundWallpaper = allWallpapers.find((wallpaper) => {
        return wallpaper?.id === action.payload;
      });
      if (foundWallpaper) {
        state.selectedWallpaper = { ...foundWallpaper };
      } else {
        state.selectedWallpaper = null;
      }
    },
  },
});

export const { changeWallpaper, changeFamilyWallpaper } =
  wallpaperSlice.actions;
export default wallpaperSlice.reducer;
