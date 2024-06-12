import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WindowState {
  id: string;
  isOpen: boolean;
  isReduce: boolean;
  isGrowth: boolean;
}

interface WindowsState {
  windows: WindowState[];
}

const initialState: WindowsState = {
  windows: [{ id: "about", isOpen: true, isReduce: false, isGrowth: false }],
};

function searchWindowById(state: WindowsState, id: string) {
  return state.windows.find((window) => window.id === id);
}

const windowSlice = createSlice({
  name: "windows",
  initialState,
  reducers: {
    openWindow(state, action: PayloadAction<any>) {
      const foundWindow = searchWindowById(state, action.payload);

      if (foundWindow) {
        foundWindow.isOpen = true;
      } else {
        state.windows.push({
          id: action.payload,
          isOpen: true,
          isReduce: false,
          isGrowth: false,
        });
      }
    },
    closeWindow(state, action: PayloadAction<any>) {
      const foundWindow = searchWindowById(state, action.payload);

      if (foundWindow) {
        foundWindow.isOpen = false;
      }
    },
    reduceWindow(state, action: PayloadAction<any>) {
      const foundWindow = searchWindowById(state, action.payload);

      if (foundWindow) {
        foundWindow.isReduce = !foundWindow.isReduce;
      }
    },
    growthWindow(state, action: PayloadAction<any>) {
      const foundWindow = searchWindowById(state, action.payload);

      if (foundWindow) {
        foundWindow.isGrowth = !foundWindow.isGrowth;
      }
    },
    closeAllWindows(state) {
      state.windows.forEach((window) => {
        window.isOpen = false;
      });
    },
  },
});

export const {
  openWindow,
  closeWindow,
  reduceWindow,
  growthWindow,
  closeAllWindows,
} = windowSlice.actions;
export default windowSlice.reducer;
