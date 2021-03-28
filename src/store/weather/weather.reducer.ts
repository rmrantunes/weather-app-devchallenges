import { MetaWeatherAPIResponse } from "src/adapters/metaweather-api-definitions";
import { weatherActionTypes } from "./weather.actions";

interface Action {
  type: string;
  payload: MetaWeatherAPIResponse;
}

interface WeatherState {
  weather: MetaWeatherAPIResponse | null;
}

const initialState: WeatherState = {
  weather: null,
};

export function weatherReducer(
  state: WeatherState = initialState,
  action: Action
) {
  switch (action.type) {
    case weatherActionTypes.SET_WEATHER:
      return { ...state, weather: action.payload };
    default:
      return state;
  }
}
