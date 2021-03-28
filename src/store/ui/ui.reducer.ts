import { Action } from "redux";
import { UIActionTypes } from "./ui.actions";

interface UIState {
  searchPannel: boolean;
  currentMeasurement: "Celcius" | "Fahrenheit";
}

const initialState: UIState = {
  searchPannel: false,
  currentMeasurement: "Celcius",
};

export function UIReducer(state: UIState = initialState, action: any) {
  switch (action.type) {
    case UIActionTypes.OPEN_SEARCH_PANNEL:
      return { ...state, searchPannel: true };
    case UIActionTypes.CLOSE_SEARCH_PANNEL:
      return { ...state, searchPannel: false };
    case UIActionTypes.SET_CURRENT_MEASUREMENT:
      return { ...state, currentMeasurement: action.payload };
    default:
      return state;
  }
}
