import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
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
        scoreIncrement: (state) => {
            state.value += 1;
        },
        scoreIncrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
        scoreReset: (state) => {
            state.value = 0;
        },
        decrementRedeals: (state) => {
            state.redealsCount -= 1;
        },
        redealsReset: (state) => {
            state.redealsCount = 3;
        },
    },
});

export const { scoreIncrement, scoreIncrementByAmount, scoreReset, decrementRedeals, redealsReset } =
    scoreSlice.actions;

export const selectCount = (state: RootState) => state.score.value;
export const selectRedeals = (state: RootState) => state.score.redealsCount;

export default scoreSlice.reducer;
