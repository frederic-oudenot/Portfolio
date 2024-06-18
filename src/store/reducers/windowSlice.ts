import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WindowState {
  id: string;
  isOpen: boolean;
  isReduce: boolean;
  isGrowth: boolean;
  zIndex: number;
}

interface WindowsState {
  windows: WindowState[];
}

const initialState: WindowsState = {
  windows: [
    { id: "about", isOpen: true, isReduce: false, isGrowth: false, zIndex: 20 },
  ],
};

function searchWindowById(state: WindowsState, id: string) {
  return state.windows.find((window) => window.id === id);
}

function searchWindowOpened(state: WindowsState, id: string) {
  return state.windows.forEach((window) =>
    window.id === id ? (window.zIndex = 20) : (window.zIndex = 10)
  );
}

const windowSlice = createSlice({
  name: "windows",
  initialState,
  reducers: {
    openWindow(state, action: PayloadAction<any>) {
      const foundWindow = searchWindowById(state, action.payload);

      if (foundWindow) {
        foundWindow.isOpen = !foundWindow.isOpen;
        foundWindow.zIndex = 20;

        state.windows.forEach((window) => {
          if (window.id !== action.payload) {
            window.zIndex = 10;
          }
        });
      } else {
        state.windows.push({
          id: action.payload,
          isOpen: true,
          isReduce: false,
          isGrowth: false,
          zIndex: 20,
        });
        state.windows.forEach((window) => {
          if (window.id !== action.payload) {
            window.zIndex = 10;
          }
        });
      }
    },
    closeWindow(state, action: PayloadAction<any>) {
      const foundWindow = searchWindowById(state, action.payload);

      if (foundWindow) {
        foundWindow.isOpen = !foundWindow.isOpen;
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
    selectWindow(state, action: PayloadAction<any>) {
      const foundWindow = searchWindowById(state, action.payload);

      if (foundWindow) {
        foundWindow.zIndex = 20;
        state.windows.forEach((window) => {
          if (window.id !== action.payload) {
            window.zIndex = 10;
          }
        });
      }
    },
  },
});

export const {
  openWindow,
  closeWindow,
  reduceWindow,
  growthWindow,
  closeAllWindows,
  selectWindow,
} = windowSlice.actions;
export default windowSlice.reducer;
