import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export interface SettingsState {
    cardPattern: 'Red' | 'Blue' | 'Abstract' | 'Astronaut' | string;
    gameRules: 'Vegas' | 'Klondike' | string;
    nightMode: boolean;
}

const initialState: SettingsState = {
    cardPattern: 'Blue',
    gameRules: 'Klondike',
    nightMode: false,
};

const settingsSlice = createSlice({
    name: 'settings',
    initialState: initialState,
    reducers: {
        changeCardPattern: (state, action: PayloadAction<'Red' | 'Blue' | 'Abstract' | 'Astronaut' | string>) => {
            state.cardPattern = action.payload;
        },
        changeGameRules: (state, action: PayloadAction<'Klondike' | 'Vegas' | string>) => {
            state.gameRules = action.payload;
        },
        toggleNightMode: (state) => {
            state.nightMode = !state.nightMode;
        },
    },
});

export const { changeCardPattern, changeGameRules, toggleNightMode } = settingsSlice.actions;

export const selectPattern = (state: RootState) => state.settings.cardPattern;
export const selectedRules = (state: RootState) => state.settings.gameRules;
export const selectedThemeMode = (state: RootState) => state.settings.nightMode;

export default settingsSlice.reducer;
