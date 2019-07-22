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
