import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsCelcius, UIActions } from "src/store";

const toggleActive = (condition: boolean) => {
  return condition
    ? "bg-light-gray text-darkest"
    : "bg-primary text-light-gray";
};

export const ChangeTemperatureMeasurement = () => {
  const isCelcius = useSelector(selectIsCelcius);
  const dispatch = useDispatch();

  return (
    <header className="flex justify-end">
      <nav className="space-x-4 flex items-center">
        <button
          type="button"
          className={`${toggleActive(
            isCelcius
          )} rounded-full font-bold grid place-items-center w-10 h-10`}
          title="Celcius"
          onClick={() => dispatch(UIActions.SET_CURRENT_MEASUREMENT("Celcius"))}
        >
          ºC
        </button>
        <button
          type="button"
          className={`${toggleActive(
            !isCelcius
          )} rounded-full font-bold grid place-items-center w-10 h-10`}
          title="Fahrenheit"
          onClick={() =>
            dispatch(UIActions.SET_CURRENT_MEASUREMENT("Fahrenheit"))
          }
        >
          ºF
        </button>
      </nav>
    </header>
  );
};
