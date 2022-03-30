import { createSelector } from "@reduxjs/toolkit";
import { State } from '../reducers';

function getPeoplesState(state: State) {
  return state.peoples;
}

export const getIsLoading = createSelector(getPeoplesState, (peoples) => peoples.isLoading);
export const getPeoples = createSelector(getPeoplesState, (peoples) => peoples.peoples);
