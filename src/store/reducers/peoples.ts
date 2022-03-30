import { ActionTypes, PeopleActions } from '../actions/peoples';

export interface IPeople {
  name: string;
  gender: string;
  height: string;
}

export type PeopleState = {
  isLoading: boolean;
  peoples: IPeople[];
}

export const initialState: PeopleState = {
  isLoading: false,
  peoples: []
}

const peoplesReducer = (
  state: PeopleState = initialState,
  action: PeopleActions
): PeopleState => {
  switch (action.type) {
    case ActionTypes.IS_LOADING:
      return {
        ...state, 
        isLoading: action.payload,
      };
    case ActionTypes.SET_PEOPLES:
      return {
        ...state,
        isLoading: false,
        peoples: action.payload
      };
    default:
      return { ...state };
  }
};

export default peoplesReducer;
