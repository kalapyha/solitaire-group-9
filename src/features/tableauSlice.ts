// @ts-nocheck
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { deckArray } from '../utils/cards';
import { shuffleArray } from '../utils/helpers';

const shuffledArray = shuffleArray(deckArray);
// move to utils
const revealLastCard = (deck) => {
    if (!deck.length) {
        return [];
    }
    if (deck.length === 1) {
        return [{ ...deck.slice(-1)[0], isFaceDown: false }];
    }
    const lastCard = { ...deck.slice(-1)[0], isFaceDown: false };
    return [...deck.slice(0, deck.length - 1), lastCard];
};

const initialState = {
    tableau1: {
        id: 1,
        title: 'stack 1',
        cards: revealLastCard(
            shuffledArray.slice(24, 25).map((card) => {
                return {
                    ...card,
                    stackId: 1,
                };
            }),
        ),
    },
    tableau2: {
        id: 2,
        title: 'stack 2',
        cards: revealLastCard(
            shuffledArray.slice(25, 27).map((card) => {
                return {
                    ...card,
                    stackId: 2,
                };
            }),
        ),
    },
    tableau3: {
        id: 3,
        title: 'stack 3',
        cards: revealLastCard(
            shuffledArray.slice(27, 30).map((card) => {
                return {
                    ...card,
                    stackId: 3,
                };
            }),
        ),
    },
    tableau4: {
        id: 4,
        title: 'stack 4',
        cards: revealLastCard(
            shuffledArray.slice(30, 34).map((card) => {
                return {
                    ...card,
                    stackId: 4,
                };
            }),
        ),
    },
    tableau5: {
        id: 5,
        title: 'stack 5',
        cards: revealLastCard(
            shuffledArray.slice(34, 39).map((card) => {
                return {
                    ...card,
                    stackId: 5,
                };
            }),
        ),
    },
    tableau6: {
        id: 6,
        title: 'stack 6',
        cards: revealLastCard(
            shuffledArray.slice(39, 45).map((card) => {
                return {
                    ...card,
                    stackId: 6,
                };
            }),
        ),
    },
    tableau7: {
        id: 7,
        title: 'stack 7',
        cards: revealLastCard(
            shuffledArray.slice(45, 52).map((card) => {
                return {
                    ...card,
                    stackId: 7,
                };
            }),
        ),
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
    moveFrom: {},
    moveTo: {},
};

const tableauSlice = createSlice({
    name: 'tableau',
    initialState: initialState,
    reducers: {
        setMoveFrom: (state, args) => {
            state.moveFrom = args.payload;
        },
        setMoveTo: (state, args) => {
            state.moveTo = args.payload;
        },
        makeMove: (state) => {
            if (state.moveFrom?.cardId && state.moveTo?.cardId) {
                if (state.moveFrom.canBePutOn.includes(state.moveTo.cardId)) {
                    // make move
                    const cardToMove = state[`tableau${state.moveFrom.stackId}`].cards.slice(-1); // one last card
                    state[`tableau${state.moveFrom.stackId}`].cards = revealLastCard(
                        state[`tableau${state.moveFrom.stackId}`].cards.slice(
                            0,
                            state[`tableau${state.moveFrom.stackId}`].cards.length - 1,
                        ),
                    );

                    state[`tableau${state.moveTo.stackId}`].cards = [
                        ...state[`tableau${state.moveTo.stackId}`].cards,
                        ...cardToMove,
                    ];

                    state[`tableau${state.moveTo.stackId}`].cards = state[`tableau${state.moveTo.stackId}`].cards.map(
                        (card) => ({ ...card, stackId: state.moveTo.stackId }),
                    );
                    console.log('MOVE happened ');

                    state.moveTo = {};
                    state.moveFrom = {};
                } else {
                    console.log('MOVE NOT happened ');
                    // reset moveTo and moveFrom
                    state.moveTo = {};
                    state.moveFrom = {};
                }
            }
            if (state.moveFrom?.cardId && state.moveTo?.isFlipped) {
            }
        },
        moveCardToHome: (state, args) => {
            // Move Ace to home
            if (args.payload.value === 1) {
                const cardToMove = state[`tableau${args.payload.stackId}`].cards.slice(-1)[0];

                state[`tableau${args.payload.stackId}`].cards = revealLastCard(
                    state[`tableau${args.payload.stackId}`].cards.slice(
                        0,
                        state[`tableau${args.payload.stackId}`].cards.length - 1,
                    ),
                );
                switch (args.payload.cardSuit) {
                    case '♥':
                        state.homeHearts.cards = [{ ...cardToMove, stackId: state.homeHearts.id }];
                        break;
                    case '♦':
                        state.homeDiamonds.cards = [{ ...cardToMove, stackId: state.homeDiamonds.id }];
                        break;
                    case '♣':
                        state.homeClubs.cards = [{ ...cardToMove, stackId: state.homeClubs.id }];
                        break;
                    case '♠':
                        state.homeSpades.cards = [{ ...cardToMove, stackId: state.homeSpades.id }];
                        break;

                    default:
                        break;
                } // Logic for other cards
            } else if (args.payload.value !== 1) {
                const cardToMove = state[`tableau${args.payload.stackId}`].cards.slice(-1)[0];
                switch (args.payload.cardSuit) {
                    case '♥':
                        if (
                            state.homeHearts.cards[state.homeHearts.cards.length - 1]?.id ===
                            args.payload.canBePutOnHome
                        ) {
                            state[`tableau${args.payload.stackId}`].cards = revealLastCard(
                                state[`tableau${args.payload.stackId}`].cards.slice(
                                    0,
                                    state[`tableau${args.payload.stackId}`].cards.length - 1,
                                ),
                            );
                            state.homeHearts.cards = [{ ...cardToMove, stackId: state.homeHearts.id }];
                        }
                        break;
                    case '♦':
                        if (
                            state.homeDiamonds.cards[state.homeDiamonds.cards.length - 1]?.id ===
                            args.payload.canBePutOnHome
                        ) {
                            state[`tableau${args.payload.stackId}`].cards = revealLastCard(
                                state[`tableau${args.payload.stackId}`].cards.slice(
                                    0,
                                    state[`tableau${args.payload.stackId}`].cards.length - 1,
                                ),
                            );
                            state.homeDiamonds.cards = [{ ...cardToMove, stackId: state.homeDiamonds.id }];
                        }
                        break;
                    case '♣':
                        if (
                            state.homeClubs.cards[state.homeClubs.cards.length - 1]?.id === args.payload.canBePutOnHome
                        ) {
                            state[`tableau${args.payload.stackId}`].cards = revealLastCard(
                                state[`tableau${args.payload.stackId}`].cards.slice(
                                    0,
                                    state[`tableau${args.payload.stackId}`].cards.length - 1,
                                ),
                            );
                            state.homeClubs.cards = [{ ...cardToMove, stackId: state.homeClubs.id }];
                        }
                        break;
                    case '♠':
                        if (
                            state.homeSpades.cards[state.homeSpades.cards.length - 1]?.id ===
                            args.payload.canBePutOnHome
                        ) {
                            state[`tableau${args.payload.stackId}`].cards = revealLastCard(
                                state[`tableau${args.payload.stackId}`].cards.slice(
                                    0,
                                    state[`tableau${args.payload.stackId}`].cards.length - 1,
                                ),
                            );
                            state.homeSpades.cards = [{ ...cardToMove, stackId: state.homeSpades.id }];
                        }
                        break;

                    default:
                        break;
                } // Logic for other cards
            }
        },
        resetCards: (state) => {
            const newShuffledArray = shuffleArray(deckArray);
            state.deckStack.cards = newShuffledArray.slice(0, 24);
            // TODO need to reset HOME and deck flipped
            state.tableau1.cards = revealLastCard(
                newShuffledArray.slice(24, 25).map((card) => {
                    return { ...card, stackId: 1 };
                }),
            );
            state.tableau2.cards = revealLastCard(
                newShuffledArray.slice(25, 27).map((card) => {
                    return { ...card, stackId: 2 };
                }),
            );
            state.tableau3.cards = revealLastCard(
                newShuffledArray.slice(27, 30).map((card) => {
                    return { ...card, stackId: 3 };
                }),
            );
            state.tableau4.cards = revealLastCard(
                newShuffledArray.slice(30, 34).map((card) => {
                    return { ...card, stackId: 4 };
                }),
            );
            state.tableau5.cards = revealLastCard(
                newShuffledArray.slice(34, 39).map((card) => {
                    return { ...card, stackId: 5 };
                }),
            );
            state.tableau6.cards = revealLastCard(
                newShuffledArray.slice(39, 45).map((card) => {
                    return { ...card, stackId: 6 };
                }),
            );
            state.tableau7.cards = revealLastCard(
                newShuffledArray.slice(45, 52).map((card) => {
                    return { ...card, stackId: 7 };
                }),
            );
            state.activeCard = {};
        },
    },
});

export const { resetCards, moveCardToHome, setMoveFrom, setMoveTo, makeMove } = tableauSlice.actions;

export const activeCard = (state: RootState) => state.cards.activeCard;
export const deckStack = (state: RootState) => state.cards.deckStack;
export const tableau1 = (state: RootState) => state.cards.tableau1;
export const tableau2 = (state: RootState) => state.cards.tableau2;
export const tableau3 = (state: RootState) => state.cards.tableau3;
export const tableau4 = (state: RootState) => state.cards.tableau4;
export const tableau5 = (state: RootState) => state.cards.tableau5;
export const tableau6 = (state: RootState) => state.cards.tableau6;
export const tableau7 = (state: RootState) => state.cards.tableau7;
export const homeHearts = (state: RootState) => state.cards.homeHearts;
export const homeDiamonds = (state: RootState) => state.cards.homeDiamonds;
export const homeSpades = (state: RootState) => state.cards.homeSpades;
export const homeClubs = (state: RootState) => state.cards.homeClubs;

export default tableauSlice.reducer;
