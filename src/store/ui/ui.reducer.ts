import { Action } from "redux";
import { UIActionTypes } from "./ui.actions";

interface UIState {
  searchPannel: boolean;
}

const initialState: UIState = {
  searchPannel: false,
};

export function UIReducer(state: UIState = initialState, action: Action) {
  switch (action.type) {
    case UIActionTypes.OPEN_SEARCH_PANNEL:
      return { ...state, searchPannel: true };
    case UIActionTypes.CLOSE_SEARCH_PANNEL:
      return { ...state, searchPannel: false };
    default:
      return state;
  }
}
