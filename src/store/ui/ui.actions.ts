export const UIActionTypes = {
  OPEN_SEARCH_PANNEL: "ui/OPEN_SEARCH_PANNEL",
  CLOSE_SEARCH_PANNEL: "ui/CLOSE_SEARCH_PANNEL",
  SET_CURRENT_MEASUREMENT: "ui/SET_CURRENT_MEASUREMENT",
};

export const UIActions = {
  OPEN_SEARCH_PANNEL: () => ({ type: UIActionTypes.OPEN_SEARCH_PANNEL }),
  CLOSE_SEARCH_PANNEL: () => ({ type: UIActionTypes.CLOSE_SEARCH_PANNEL }),
  SET_CURRENT_MEASUREMENT(measurement: "Celcius" | "Fahrenheit") {
    return {
      type: UIActionTypes.SET_CURRENT_MEASUREMENT,
      payload: measurement,
    };
  },
};
