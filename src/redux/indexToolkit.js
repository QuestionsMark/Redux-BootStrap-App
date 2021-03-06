import { combineReducers, configureStore } from '@reduxjs/toolkit';

import usersReducer from './slices/users';
import animeReducer from './slices/anime';
// import { callApiMiddleware } from './middlewares/callApiMiddleware';

const reducer = combineReducers({
    users: usersReducer,
    anime: animeReducer,
});

export const store = configureStore({ reducer });