import * as type from "./ActionType";

export const openFrame = () => {
  return {
    type: type.OPEN_FRAME
  };
};

export const closeFrame = () => {
  return {
    type: type.CLOSE_FRAME
  };
};

export const setInfo = info => {
  return {
    type: type.SET_INFO,
    info: info
  };
};
