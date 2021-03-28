import axios from "axios";
import { Dispatch } from "react";
import {
  MetaWeatherAPIResponse,
  MetaWeatherSearchResponse,
} from "src/adapters/metaweather-api-definitions";
import { UIActions } from "src/store/ui";

export const weatherActionTypes = {
  SET_WEATHER: "weather/SET_WEATHER",
  SEARCH_WEATHER: "weather/SEARCH_WEATHER",
  SEARCH_WEATHER_STARTED: "weather/SEARCH_WEATHER_STARTED",
  SEARCH_WEATHER_ERROR: "weather/SEARCH_WEATHER_ERROR",
  GET_WEATHER_BY_WOEID: "weather/GET_WEATHER_BY_WOEID",
  SET_LAST_SEARCHES: "weather/SET_LAST_SEARCHES",
};

export const weatherActions = {
  SET_WEATHER(weather: MetaWeatherAPIResponse) {
    return {
      type: weatherActionTypes.SET_WEATHER,
      payload: weather,
    };
  },
  SEARCH_WEATHER(searchText: string) {
    return async function (dispatch) {
      try {
        dispatch(weatherActions.SEARCH_WEATHER_STARTED());
        const { data } = await axios.get<MetaWeatherSearchResponse[]>(
          `/api/search/${searchText}`
        );
        if (!data || data.length === 0)
          throw new Error("Digite uma outra cidade");

        const [{ title, woeid }] = data;
        await dispatch(weatherActions.GET_WEATHER_BY_WOEID({ title, woeid }));
      } catch (error) {
        dispatch(weatherActions.SEARCH_WEATHER_ERROR(error.message));
      }
    };
  },
  SEARCH_WEATHER_STARTED() {
    return { type: weatherActionTypes.SEARCH_WEATHER_STARTED };
  },
  SEARCH_WEATHER_ERROR(error: string) {
    return { type: weatherActionTypes.SEARCH_WEATHER_ERROR, payload: error };
  },
  GET_WEATHER_BY_WOEID(payload: { woeid: number; title: string }) {
    return async function (dispatch) {
      try {
        const { data } = await axios.get<MetaWeatherAPIResponse>(
          `/api/location/${payload.woeid}`
        );
        dispatch(weatherActions.SET_WEATHER(data));
        dispatch(weatherActions.SET_LAST_SEARCHES(payload));
        dispatch(UIActions.CLOSE_SEARCH_PANNEL());
      } catch (error) {
        dispatch(weatherActions.SEARCH_WEATHER_ERROR(error.message));
      }
    };
  },
  SET_LAST_SEARCHES(payload: { woeid: number; title: string }) {
    return { type: weatherActionTypes.SET_LAST_SEARCHES, payload };
  },
};
