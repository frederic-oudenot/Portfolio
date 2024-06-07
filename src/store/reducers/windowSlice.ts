import { createSlice } from "@reduxjs/toolkit";

interface windowState {
  id: string;
  isOpen: boolean;
}

const initialState: windowState = {
  id: "",
  isOpen: false,
};

const windowSlice = createSlice({
  name: "window",
  initialState,
  reducers: {
    openWindow(state, action: { payload: windowState }) {
      const windowId = action.payload;
    },
    closeWindow(state, action: { payload: windowState }) {
      const windowId = action.payload;
    },
    reduceWindow(state, action: { payload: windowState }) {
      const windowId = action.payload;
    },
    growthWindow(state, action: { payload: windowState }) {
      const windowId = action.payload;
    },
  },
});

export const { openWindow, closeWindow, reduceWindow, growthWindow } =
  windowSlice.actions;
export default windowSlice.reducer;
