import { MetaWeatherAPIResponse } from "src/adapters/metaweather-api-definitions";
import { weatherActions, weatherActionTypes } from "./weather.actions";

interface Action {
  type: string;
  payload: any;
}

interface WeatherState {
  weather: MetaWeatherAPIResponse | null;
  lastSearches: MetaWeatherAPIResponse[];
  loading: boolean;
  error: string | null;
}

const initialState: WeatherState = {
  weather: null,
  loading: false,
  error: null,
  lastSearches: [],
};

export function weatherReducer(
  state: WeatherState = initialState,
  action: Action
): WeatherState {
  switch (action.type) {
    case weatherActionTypes.SET_WEATHER:
      return {
        ...state,
        weather: action.payload as MetaWeatherAPIResponse,
        loading: false,
      };
    case weatherActionTypes.SEARCH_WEATHER_STARTED:
      return { ...state, loading: true, error: null };
    case weatherActionTypes.SEARCH_WEATHER_ERROR:
      return { ...state, loading: false, error: action.payload as string };
    case weatherActionTypes.SET_LAST_SEARCHES:
      const isNewWoeid = state.lastSearches.every(
        ({ woeid: currentWoeid }) => currentWoeid !== action.payload.woeid
      );
      return {
        ...state,
        lastSearches: isNewWoeid
          ? [...state.lastSearches, action.payload]
          : state.lastSearches,
      };
    default:
      return state;
  }
}
