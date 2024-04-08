import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    selectedLanguage: "en",
  },
  reducers: {
    updateLanguage: (state, action) => {
      state.selectedLanguage = action.payload;
    },
  },
});

export const { updateLanguage } = settingsSlice.actions;
export const selectLanguage = (state) => state.settings.selectedLanguage;
export default settingsSlice.reducer;
