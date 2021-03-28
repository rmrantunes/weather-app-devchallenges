import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { MetaWeatherAPIResponse } from "src/adapters/metaweather-api-definitions";
import { Layout } from "src/core/components/Layout";
import { TodaysWeather } from "src/core/components/TodaysWheather";
import { WeatherDisplay } from "src/core/components/WeatherDisplay";
import { selectWeather, weatherActions } from "src/store";

interface IHomeProps {
  weatherStaticProp: MetaWeatherAPIResponse;
}

const Home: React.FC<IHomeProps> = ({ weatherStaticProp }) => {
  const { weather } = useSelector(selectWeather);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(weatherActions.SET_WEATHER(weatherStaticProp));
  }, []);

  if (!weather) return null;
  return (
    <Layout>
      <TodaysWeather />
      <WeatherDisplay />
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const response = await fetch(
    "https://www.metaweather.com/api/location/766273"
  );
  const data = await response.json();
  return {
    props: { weatherStaticProp: data },
  };
}
