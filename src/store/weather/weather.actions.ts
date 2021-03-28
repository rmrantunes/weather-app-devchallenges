import { MetaWeatherAPIResponse } from "src/adapters/metaweather-api-definitions";

export const weatherActionTypes = {
  SET_WEATHER: "weather/SET_WEATHER",
};

export const weatherActions = {
  SET_WEATHER(weather: MetaWeatherAPIResponse) {
    return {
      type: weatherActionTypes.SET_WEATHER,
      payload: weather,
    };
  },
  // SEARCH_WEATHER(searchText: string) {
  //   return async function(dispatch: Dispatch) {
  //     const { data } = await axios.get<MetaWeatherSearchResponse[]>(
  //       `/api/search/${searchText}`
  //     );
  //     dispatch(weatherActions.SET_WEATHER(data))
  //   }
  // }
};
