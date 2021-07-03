import { RootState } from "src/store";

export const selectWeather = (state: RootState) => state.weatherReducer;
