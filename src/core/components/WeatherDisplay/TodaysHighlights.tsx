import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { TodaysHighlightsCard } from "./TodaysHighlightsCard";
import { selectWeather } from "src/store";
import { useSelector } from "react-redux";

const TodaysHighlights = () => {
  const {
    weather: { consolidated_weather },
  } = useSelector(selectWeather);
  const [todaysWeather] = consolidated_weather;
  return (
    <section className="space-y-8">
      <h4 className="text-2xl ">Today's Highlights</h4>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 ">
        <TodaysHighlightsCard
          title="Wind status"
          number={Math.round(todaysWeather.wind_speed)}
          measurement=" mph"
        >
          <div className="flex items-center space-x-4 mt-6">
            <div
              className="bg-darkest p-3 rounded-full transform "
              style={{
                transform: `rotate(${todaysWeather.wind_direction}deg)`,
              }}
            >
              <FaLocationArrow className="transform -rotate-45 text-progress-yelow" />
            </div>
            <span>{todaysWeather.wind_direction_compass}</span>
          </div>
        </TodaysHighlightsCard>
        <TodaysHighlightsCard
          title="Humidity"
          number={todaysWeather.humidity}
          measurement="%"
        >
          <div className="w-full mt-2 space-y-1">
            <div className="flex justify-between">
              <span>0</span>
              <span>50</span>
              <span>100</span>
            </div>
            <div className="bg-darkest rounded-full w-full h-2">
              <div
                className="h-full bg-progress-yelow rounded-full"
                style={{ width: `${todaysWeather.humidity}%` }}
              ></div>
            </div>
            <span className="text-right w-full block">%</span>
          </div>
        </TodaysHighlightsCard>
        <TodaysHighlightsCard
          title="Visibility"
          number={todaysWeather.visibility.toFixed(1)}
          measurement=" miles"
        />
        <TodaysHighlightsCard
          title="Air presure"
          number={todaysWeather.air_pressure}
          measurement=" mb"
        />
      </div>
    </section>
  );
};

export default TodaysHighlights;
