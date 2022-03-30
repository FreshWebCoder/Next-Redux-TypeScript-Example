import { Action } from "redux";
import { IPeople } from "../reducers/peoples";

// Action Types
export enum ActionTypes {
  IS_LOADING = "IS_LOADING",
  SET_PEOPLES = "SET_PEOPLES",
}

interface SetIsLoadingAction extends Action {
  type: ActionTypes.IS_LOADING;
  payload: boolean;
};

interface SetPeoplesAction extends Action {
  type: ActionTypes.SET_PEOPLES;
  payload: IPeople[];
}

export function fetchPeoples() {
  return async (dispatch: Function) => {
    dispatch({
      type: ActionTypes.IS_LOADING,
      payload: true
    });

    fetch('https://swapi.dev/api/people')
      .then((res) => res.json())
      .then((res) => {
        dispatch({
          type: ActionTypes.SET_PEOPLES,
          payload: res.results
        });
      })
      .catch((err) => {
        console.error(err);
        alert(err);
      })
  }
}

export type PeopleActions = SetIsLoadingAction | SetPeoplesAction;
