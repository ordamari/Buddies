import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Language } from '@/common/enums/language.enum';
import { Theme } from '@/common/enums/theme.enum';

export interface GlobalState {
  theme: Theme;
  language: Language;
}

const initialState: GlobalState = {
  theme: Theme.Light,
  language: Language.English,
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLanguage, setTheme } = globalSlice.actions;

export default globalSlice.reducer;
