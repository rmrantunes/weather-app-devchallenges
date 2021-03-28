import { toFahrenheit } from "./toFahrenheit";

export function handleTemperatureConversion(
  temperatureInCelcius: number,
  isCelcius: boolean
) {
  const teperatureByMesurement = isCelcius
    ? temperatureInCelcius
    : toFahrenheit(temperatureInCelcius);
  return Math.round(teperatureByMesurement);
}
