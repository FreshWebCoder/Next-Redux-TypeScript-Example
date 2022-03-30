import { combineReducers } from 'redux';

import peoplesReducer from './peoples';
import { initialState as peoplesInitialState } from './peoples'

const rootReducer = combineReducers({
  peoples: peoplesReducer
});

export const initialState = {
  peoples: peoplesInitialState
};

export type State = typeof initialState;

export default rootReducer;
