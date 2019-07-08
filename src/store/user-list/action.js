import * as type from "./action-type";

//增加count
export const addCount = value => {
  return {
    type: type.ADD_COUNT,
    value: value
  };
};

//减少count
export const subtractCount = value => {
  return {
    type: type.SUBTRACT_COUNT,
    value: value
  };
};
