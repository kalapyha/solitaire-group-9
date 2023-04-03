import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export interface ScoreState {
    value: number;
    redealsCount: number;
}

const initialState: ScoreState = {
    value: 500,
    redealsCount: 3,
};

const scoreSlice = createSlice({
    name: 'score',
    initialState: initialState,
    reducers: {
        scoreDecrement: (state) => {
            state.value -= 10;
        },
        scoreReset: (state) => {
            state.value = 500;
        },
        decrementRedeals: (state) => {
            state.redealsCount -= 1;
        },
        redealsReset: (state) => {
            state.redealsCount = 3;
        },
    },
});

export const { scoreDecrement, scoreReset, decrementRedeals, redealsReset } = scoreSlice.actions;

export const selectCount = (state: RootState) => state.score.value;
export const selectRedeals = (state: RootState) => state.score.redealsCount;

export default scoreSlice.reducer;
