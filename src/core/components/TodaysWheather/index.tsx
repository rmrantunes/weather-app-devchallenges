import { WeatherContext } from "contexts/WeatherContext";
import { useTemperatureMeasurementContext } from "contexts/TemperatureMeasurementContext";
import React, { useContext, useMemo, useState } from "react";
import { MdGpsFixed, MdKeyboardArrowDown, MdLocationOn } from "react-icons/md";
import { convertToHumanDate, handleTemperatureConversion } from "utils";
import { SearchCityPannel } from "components/SearchCityPannel";

export const TodaysWeather = () => {
  const { weather } = useContext(WeatherContext);
  const { consolidated_weather, title } = weather;
  const [todaysWeather] = consolidated_weather;
  const { isCelcius } = useTemperatureMeasurementContext();
  const [openPannel, setOpenPannel] = useState(false);

  return (
    <section className="relative py-10 px-11 min-h-screen bg-primary w-full xl:w-112">
      <SearchCityPannel {...{ openPannel, setOpenPannel }} />
      <div className="flex flex-col justify-between space-y-20 text-center w-full">
        <header className="flex justify-between items-center">
          <button
            type="button"
            className="bg-secondary px-5 py-2 shadow-2xl"
            onClick={() => setOpenPannel(true)}
          >
            Search for places
          </button>
          <button
            type="button"
            className="grid place-items-center p-1 bg-secondary rounded-full shadow-2xl h-10 w-10"
            title="Unfortunately , this feature is not ready"
            onClick={() =>
              alert(
                "Unfortunately, the location feature is not ready. Please, try again later."
              )
            }
          >
            <MdGpsFixed size={24} />
          </button>
        </header>
        <div className="space-y-20 text-medium-gray">
          <div className="grid place-items-center">
            <img
              className="h-36"
              src={`https://www.metaweather.com/static/img/weather/${todaysWeather.weather_state_abbr}.svg`}
              alt={todaysWeather.weather_state_name}
            />
          </div>
          <div>
            <span className="text-9xl">
              {handleTemperatureConversion(todaysWeather.the_temp, isCelcius)}
            </span>
            <span className="text-5xl"> {isCelcius ? "ºC" : "ºF"}</span>
          </div>
          <div>
            <span className="text-3xl">{todaysWeather.weather_state_name}</span>
          </div>
          <div className="flex flex-col space-y-6 items-center">
            <div className="flex space-x-4">
              <span>Today</span>
              <span>|</span>
              <span>{convertToHumanDate(todaysWeather.applicable_date)}</span>
            </div>
            <div className="flex space-x-2 items-center">
              <MdLocationOn />
              <span className="font-bold">{title}</span>
            </div>
          </div>
        </div>
        <div className="absolute xl:hidden block right-6 bottom-10 animate-bounce">
          <MdKeyboardArrowDown size={48} />
        </div>
      </div>
    </section>
  );
};
