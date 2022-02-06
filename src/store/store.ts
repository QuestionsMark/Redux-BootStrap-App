import { applyMiddleware, createStore } from 'redux';
import { getData } from '../middlewares/api';

import { rootReducer } from '../reducers/rootReducer.ts';

export const store = createStore(
    rootReducer,
    applyMiddleware(getData)
);