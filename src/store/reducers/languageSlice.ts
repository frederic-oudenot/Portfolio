import getUserLanguage from "@/utils/getUserLanguage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LanguageState {
  initialLanguage: any;
  currentLanguage: any;
}

const initialLanguage = "fr-FR";

const initialState: LanguageState = {
  initialLanguage: getUserLanguage({ selectedLanguage: initialLanguage }),
  currentLanguage: initialLanguage,
};

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
