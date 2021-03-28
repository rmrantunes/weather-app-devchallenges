export const UIActionTypes = {
  OPEN_SEARCH_PANNEL: "ui/OPEN_SEARCH_PANNEL",
  CLOSE_SEARCH_PANNEL: "ui/CLOSE_SEARCH_PANNEL",
};

export const UIActions = {
  OPEN_SEARCH_PANNEL: () => ({ type: UIActionTypes.OPEN_SEARCH_PANNEL }),
  CLOSE_SEARCH_PANNEL: () => ({ type: UIActionTypes.CLOSE_SEARCH_PANNEL }),
};
