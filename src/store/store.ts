import { createStore } from 'redux';

import { rootReducer } from '../reducers/rootReducer.ts';

export const store = createStore(rootReducer);