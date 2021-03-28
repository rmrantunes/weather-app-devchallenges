import React from "react";
import Image from "next/image";
import { convertToHumanDate, handleTemperatureConversion } from "src/utils";
import { useTemperatureMeasurementContext } from "src/core/contexts/TemperatureMeasurementContext";
import { useSelector } from "react-redux";
import { selectWeather } from "src/store";

const WeekWheather = () => {
  const {
    weather: { consolidated_weather },
  } = useSelector(selectWeather);

  const { isCelcius } = useTemperatureMeasurementContext();

  return (
    <section className="grid grid-cols-2 lg:grid-cols-5 gap-8">
      {consolidated_weather.map(
        (
          { applicable_date, min_temp, max_temp, weather_state_abbr },
          index
        ) => {
          if (index > 0)
            return (
              <div
                className="text-center bg-primary px-6 py-4 space-y-2 shadow-2xl"
                key={applicable_date.toString()}
              >
                <span>
                  {index === 1
                    ? "Tomorrow"
                    : convertToHumanDate(applicable_date)}
                </span>
                <div className="flex-shrink-0">
                  <Image
                    src={`https://www.metaweather.com/static/img/weather/${weather_state_abbr}.svg`}
                    width={100}
                    height={120}
                  />
                </div>
                <div className="flex justify-between">
                  <span>
                    {handleTemperatureConversion(max_temp, isCelcius)}{" "}
                    {isCelcius ? "ºC" : "ºF"}
                  </span>
                  <span className="text-medium-gray">
                    {handleTemperatureConversion(min_temp, isCelcius)}{" "}
                    {isCelcius ? "ºC" : "ºF"}
                  </span>
                </div>
              </div>
            );
        }
      )}
    </section>
  );
};

export default WeekWheather;
