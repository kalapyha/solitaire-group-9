// @ts-nocheck
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { deckArray } from '../utils/cards';
import { shuffleArray } from '../utils/helpers';

const shuffledArray = shuffleArray(deckArray);

const initialState = {
    tableau1: {
        id: 1,
        title: 'stack 1',
        cards: shuffledArray.slice(24, 25).map((card) => {
            return {
                ...card,
                stackId: 1,
                isFaceDown: false,
            };
        }),
    },
    tableau2: {
        id: 2,
        title: 'stack 2',
        cards: shuffledArray.slice(25, 27).map((card) => {
            return {
                ...card,
                stackId: 2,
                isFaceDown: false,
            };
        }),
    },
    tableau3: {
        id: 3,
        title: 'stack 3',
        cards: shuffledArray.slice(27, 30).map((card) => {
            return {
                ...card,
                stackId: 3,
                isFaceDown: false,
            };
        }),
    },
    tableau4: {
        id: 4,
        title: 'stack 4',
        cards: shuffledArray.slice(30, 34).map((card) => {
            return {
                ...card,
                stackId: 4,
                isFaceDown: false,
            };
        }),
    },
    tableau5: {
        id: 5,
        title: 'stack 5',
        cards: shuffledArray.slice(34, 39).map((card) => {
            return {
                ...card,
                stackId: 5,
                isFaceDown: false,
            };
        }),
    },
    tableau6: {
        id: 6,
        title: 'stack 6',
        cards: shuffledArray.slice(39, 45).map((card) => {
            return {
                ...card,
                stackId: 6,
                isFaceDown: false,
            };
        }),
    },
    tableau7: {
        id: 7,
        title: 'stack 7',
        cards: shuffledArray.slice(45, 52).map((card) => {
            return {
                ...card,
                stackId: 7,
                isFaceDown: false,
            };
        }),
    },
    deckStack: {
        id: 8,
        title: 'deck stack',
        cards: shuffledArray.slice(0, 24),
    },
    deckStackFlipped: {
        id: 9,
        title: 'deck stack flipped',
        cards: [],
    },
    homeHearts: {
        id: 10,
        title: 'home hearts',
        cards: [],
    },
    homeClubs: {
        id: 11,
        title: 'home clubs',
        cards: [],
    },
    homeDiamonds: {
        id: 12,
        title: 'home diamonds',
        cards: [],
    },
    homeSpades: {
        id: 13,
        title: 'home spades',
        cards: [],
    },
    activeCard: {},
};

const tableauSlice = createSlice({
    name: 'tableau',
    initialState: initialState,
    reducers: {
        setActiveCard: (state, args) => {
            if (args.payload.id === state.activeCard?.id) {
                state.activeCard = {};
            } else if (state.activeCard?.id && state.activeCard?.id !== args.payload.id) {
                if (state.activeCard?.canBePutOn?.[0].includes(args.payload.id)) {
                    const activeCardStack = state.activeCard?.stackId;
                    const cardToMove = state[`tableau${activeCardStack}`].cards.slice(-1);
                    state[`tableau${activeCardStack}`].cards = state[`tableau${activeCardStack}`].cards.slice(
                        0,
                        state[`tableau${activeCardStack}`].cards.length - 1,
                    );

                    state[`tableau${args.payload.stackId}`].cards = [
                        ...state[`tableau${args.payload.stackId}`].cards,
                        ...cardToMove,
                    ];
                    state.activeCard = {};
                }
            } else {
                state.activeCard = args.payload;
            }
        },
        resetCards: (state) => {
            const newShuffledArray = shuffleArray(deckArray);
            state.deckStack.cards = newShuffledArray.slice(0, 24);
            state.tableau1.cards = newShuffledArray.slice(24, 25).map((card) => {
                return { ...card, stackId: 1 };
            });
            state.tableau2.cards = newShuffledArray.slice(25, 27).map((card) => {
                return { ...card, stackId: 2 };
            });
            state.tableau3.cards = newShuffledArray.slice(27, 30).map((card) => {
                return { ...card, stackId: 3 };
            });
            state.tableau4.cards = newShuffledArray.slice(30, 34).map((card) => {
                return { ...card, stackId: 4 };
            });
            state.tableau5.cards = newShuffledArray.slice(34, 39).map((card) => {
                return { ...card, stackId: 5 };
            });
            state.tableau5.cards = newShuffledArray.slice(39, 45).map((card) => {
                return { ...card, stackId: 6 };
            });
            state.tableau6.cards = newShuffledArray.slice(45, 52).map((card) => {
                return { ...card, stackId: 7 };
            });
            state.activeCard = {};
        },
    },
});

export const { setActiveCard, resetCards } = tableauSlice.actions;

export const activeCard = (state: RootState) => state.cards.activeCard;
export const deckStack = (state: RootState) => state.cards.deckStack;
export const tableau1 = (state: RootState) => state.cards.tableau1;
export const tableau2 = (state: RootState) => state.cards.tableau2;
export const tableau3 = (state: RootState) => state.cards.tableau3;
export const tableau4 = (state: RootState) => state.cards.tableau4;
export const tableau5 = (state: RootState) => state.cards.tableau5;
export const tableau6 = (state: RootState) => state.cards.tableau6;
export const tableau7 = (state: RootState) => state.cards.tableau7;

export default tableauSlice.reducer;
