import { combineReducers } from 'redux';

import { animeReducer } from './animeReducer.ts';
import { userReducer } from './userReducer.ts';


export const rootReducer = combineReducers({
    anime: animeReducer,
    users: userReducer,
});