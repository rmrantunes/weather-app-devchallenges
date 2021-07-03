import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { weatherReducer } from "src/store/weather";
import { UIReducer } from "src/store/ui";

const reducer = combineReducers({ weatherReducer, UIReducer });

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof reducer>;
