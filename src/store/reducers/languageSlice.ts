import getUserLanguage from "@/utils/getUserLanguage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Interface
interface LanguageState {
  initialLanguage: any;
  currentLanguage: any;
}

// Init language when mounted web app by default
const initialLanguage = "fr-FR";

// Init State in Redux
const initialState: LanguageState = {
  initialLanguage: getUserLanguage({ selectedLanguage: initialLanguage }),
  currentLanguage: initialLanguage,
};

// Define State according changing language into Redux
const languageSlice = createSlice({
  name: "languages",
  initialState,

  reducers: {
    changeLanguage(state, action: PayloadAction<any>) {
      const resultLanguage = getUserLanguage({
        selectedLanguage: action.payload,
      });
      state.initialLanguage = resultLanguage;
      state.currentLanguage = action.payload;
    },
  },
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
