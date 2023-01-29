import { configureStore } from '@reduxjs/toolkit';
import scoreReducer from '../features/scoreSlice';
import settingsReducer from '../features/settingsSlice';
import cardsReducer from '../features/tableauSlice';

export const store = configureStore({
    reducer: {
        score: scoreReducer,
        settings: settingsReducer,
        cards: cardsReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
