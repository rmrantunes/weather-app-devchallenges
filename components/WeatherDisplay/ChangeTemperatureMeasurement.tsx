import { useTemperatureMeasurementContext } from "contexts/TemperatureMeasurementContext";
import React from "react";

const toggleActive = (condition: boolean) => {
  return condition
    ? "bg-light-gray text-darkest"
    : "bg-primary text-light-gray";
};

export const ChangeTemperatureMeasurement = () => {
  const {
    isCelcius,
    setCurrentMeasurement,
  } = useTemperatureMeasurementContext();

  return (
    <header className="flex justify-end">
      <nav className="space-x-4 flex items-center">
        <button
          type="button"
          className={`${toggleActive(
            isCelcius
          )} rounded-full font-bold grid place-items-center w-10 h-10`}
          title="Celcius"
          onClick={() => setCurrentMeasurement("Celcius")}
        >
          ºC
        </button>
        <button
          type="button"
          className={`${toggleActive(
            !isCelcius
          )} rounded-full font-bold grid place-items-center w-10 h-10`}
          title="Fahrenheit"
          onClick={() => setCurrentMeasurement("Fahrenheit")}
        >
          ºF
        </button>
      </nav>
    </header>
  );
};
