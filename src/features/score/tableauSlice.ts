import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import { deckArray } from '../../utils/cards';
import { shuffleArray } from '../../utils/helpers';

const shuffledArray = shuffleArray(deckArray);

const initialState = {
    tableau1: {
        id: 1,
        title: 'stack 1',
        cards: shuffledArray.slice(24, 25),
    },
    tableau2: {
        id: 2,
        title: 'stack 2',
        cards: shuffledArray.slice(25, 27),
    },
    tableau3: {
        id: 3,
        title: 'stack 3',
        cards: shuffledArray.slice(27, 30),
    },
    tableau4: {
        id: 4,
        title: 'stack 4',
        cards: shuffledArray.slice(30, 34),
    },
    tableau5: {
        id: 5,
        title: 'stack 5',
        cards: shuffledArray.slice(34, 39),
    },
    tableau6: {
        id: 6,
        title: 'stack 6',
        cards: shuffledArray.slice(39, 45),
    },
    tableau7: {
        id: 7,
        title: 'stack 7',
        cards: shuffledArray.slice(45, 52),
    },
    deckStack: {
        id: 8,
        title: 'deck stack',
        cards: shuffledArray.slice(0, 24),
    },
};

const tableauSlice = createSlice({
    name: 'tableau',
    initialState: initialState,
    reducers: {
        todoTableau: (state) => {
            state;
        },
    },
});

export const { todoTableau } = tableauSlice.actions;

export const deckStack = (state: RootState) => state.cards.deckStack;
export const tableau1 = (state: RootState) => state.cards.tableau1;
export const tableau2 = (state: RootState) => state.cards.tableau2;
export const tableau3 = (state: RootState) => state.cards.tableau3;
export const tableau4 = (state: RootState) => state.cards.tableau4;
export const tableau5 = (state: RootState) => state.cards.tableau5;
export const tableau6 = (state: RootState) => state.cards.tableau6;
export const tableau7 = (state: RootState) => state.cards.tableau7;

export default tableauSlice.reducer;
