import { MetaWeatherAPIResponse } from "src/adapters/metaweather-api-definitions";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

export interface IWeatherContextValues {
  weather: MetaWeatherAPIResponse;
  setWeather: Dispatch<SetStateAction<MetaWeatherAPIResponse>>;
}

export const WeatherContext = createContext<Partial<IWeatherContextValues>>({});

export const WeatherProvider: React.FC<{
  weatherStaticProp: MetaWeatherAPIResponse;
}> = ({ children, weatherStaticProp }) => {
  const [weather, setWeather] = useState<MetaWeatherAPIResponse>(
    weatherStaticProp
  );
  return (
    <WeatherContext.Provider value={{ weather, setWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};

