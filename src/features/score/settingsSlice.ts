import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

export interface SettingsState {
    cardPattern: 'Red' | 'Blue' | 'Abstract' | 'Astronaut' | string;
}

const initialState: SettingsState = {
    cardPattern: 'Blue',
};

const settingsSlice = createSlice({
    name: 'settings',
    initialState: initialState,
    reducers: {
        changeCardPattern: (state, action: PayloadAction<'Red' | 'Blue' | 'Abstract' | 'Astronaut' | string>) => {
            state.cardPattern = action.payload;
        },
    },
});

export const { changeCardPattern } = settingsSlice.actions;

export const selectPattern = (state: RootState) => state.settings.cardPattern;

export default settingsSlice.reducer;
