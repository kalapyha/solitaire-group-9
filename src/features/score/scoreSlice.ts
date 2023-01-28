import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

export interface ScoreState {
    value: number;
}

const initialState: ScoreState = {
    value: 42,
};

const scoreSlice = createSlice({
    name: 'score',
    initialState: initialState,
    reducers: {
        scoreIncrement: (state) => {
            state.value += 1;
        },
        scoreIncrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
        scoreReset: (state) => {
            state.value -= state.value;
        },
    },
});

export const { scoreIncrement, scoreIncrementByAmount, scoreReset } = scoreSlice.actions;

export const selectCount = (state: RootState) => state.score.value;

export default scoreSlice.reducer;
