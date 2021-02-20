import { TemperatureMeasurements } from "contexts/TemperatureMeasurementContext";

export interface LocalStorageAppConfig {
  measurement?: TemperatureMeasurements;
  colorScheme?: "light" | "dark";
}

export function useLocalStorageAppConfig(LOCAL_STORAGE_KEY = "weather_config") {
  const isWindowDefined = typeof window !== undefined;
  let localStorageAppConfig: LocalStorageAppConfig;
  let setLocalStorageAppConfig: (newConfig: LocalStorageAppConfig) => void;
  let removeLocalStorageAppConfig: () => void;

  if (isWindowDefined) {
    localStorageAppConfig = JSON.parse(
      window.localStorage.getItem(LOCAL_STORAGE_KEY)
    );

    setLocalStorageAppConfig = (newConfig: LocalStorageAppConfig) => {
      window.localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify({ ...localStorageAppConfig, ...newConfig })
      );
    };

    removeLocalStorageAppConfig = () => {
      window.localStorage.removeItem(LOCAL_STORAGE_KEY);
    };
  }

  return {
    setLocalStorageAppConfig,
    localStorageAppConfig,
    removeLocalStorageAppConfig,
  };
}
