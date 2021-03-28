import React from "react";

import { MetaWeatherAPIResponse } from "src/adapters/metaweather-api-definitions";
import { Layout } from "src/core/components/Layout";
import { TodaysWeather } from "src/core/components/TodaysWheather";
import { WeatherDisplay } from "src/core/components/WeatherDisplay";
import { WeatherProvider } from "src/core/contexts/WeatherContext";
import { TemperatureMeasurementProvider } from "src/core/contexts/TemperatureMeasurementContext";

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
  const response = await fetch(
    "https://www.metaweather.com/api/location/766273"
  );
  const data = await response.json();
  return {
    props: { weatherStaticProp: data },
  };
}
