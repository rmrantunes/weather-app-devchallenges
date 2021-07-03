import { RootState } from "src/store";

export const selectUI = (state: RootState) => state.UIReducer;
export const selectIsCelcius = (state: RootState) =>
  state.UIReducer.currentMeasurement === "Celcius";
