import * as type from "./ActionType";

export const show = (state = false, action = {}) => {
  switch (action.type) {
    case type.OPEN_FRAME:
      return true;
    case type.CLOSE_FRAME:
      return false;
    default:
      return state;
  }
};

export const info = (state = null, action = {}) => {
  switch (action.type) {
    case type.SET_INFO:
      return action.info;
    default:
      return state;
  }
};
