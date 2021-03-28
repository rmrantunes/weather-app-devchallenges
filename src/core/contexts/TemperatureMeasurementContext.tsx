import { useLocalStorage, useLocalStorageAppConfig } from "hooks";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type TemperatureMeasurements = "Celcius" | "Fahrenheit";

export interface ITemperatureMeasurementContextValues {
  currentMeasurement: TemperatureMeasurements;
  setCurrentMeasurement: React.Dispatch<
    React.SetStateAction<TemperatureMeasurements>
  >;
  isCelcius: boolean;
}

export const TemperatureMeasurementContext = createContext<
  Partial<ITemperatureMeasurementContextValues>
>({});

export const TemperatureMeasurementProvider: React.FC = ({ children }) => {
  const [localStorage, setLocalStorage] = useLocalStorage<{
    measurement?: TemperatureMeasurements;
  }>("weather_config", {});

  const [
    currentMeasurement,
    setCurrentMeasurement,
  ] = useState<TemperatureMeasurements>(localStorage.measurement || "Celcius");

  const isCelcius = useMemo(() => currentMeasurement === "Celcius", [
    currentMeasurement,
  ]);

  useEffect(() => {
    setLocalStorage({ ...localStorage, measurement: currentMeasurement });
  }, [currentMeasurement]);

  return (
    <TemperatureMeasurementContext.Provider
      value={{ currentMeasurement, setCurrentMeasurement, isCelcius }}
    >
      {children}
    </TemperatureMeasurementContext.Provider>
  );
};

export const useTemperatureMeasurementContext = () =>
  useContext(TemperatureMeasurementContext);
