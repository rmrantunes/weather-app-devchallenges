import React from "react";

import { MetaWeatherAPIResponse } from "adapters/metaweather-api-definitions";
import { Layout } from "components/Layout";
import { TodaysWeather } from "components/TodaysWheather";
import { WeatherDisplay } from "components/WeatherDisplay";
import { WeatherProvider } from "contexts/WeatherContext";
import { TemperatureMeasurementProvider } from "contexts/TemperatureMeasurementContext";

interface IHomeProps {
  weatherStaticProp: MetaWeatherAPIResponse;
}

const Home: React.FC<IHomeProps> = ({ weatherStaticProp }) => {
  return (
    <WeatherProvider {...{ weatherStaticProp }}>
      <Layout>
        <TemperatureMeasurementProvider>
          <TodaysWeather />
          <WeatherDisplay />
        </TemperatureMeasurementProvider>
      </Layout>
    </WeatherProvider>
  );
};

export default Home;

export async function getStaticProps() {
  const response = await fetch("/api/location/1118370");
  const data = await response.json();
  return {
    props: { weatherStaticProp: data },
  };
}
