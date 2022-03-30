import { applyMiddleware, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { createWrapper} from 'next-redux-wrapper';

import rootReducer, { initialState, State } from './reducers';

const makeStore = () => createStore(rootReducer, initialState, applyMiddleware(thunk));

export const wrapper = createWrapper<Store<State>>(makeStore, { debug: true });
