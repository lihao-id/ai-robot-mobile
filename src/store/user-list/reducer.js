import * as type from "./action-type";

let defaultState = {
  value: 0
};

export const count = (state = defaultState, action = {}) => {
  switch (action.type) {
    case type.ADD_COUNT:
      return { ...state, ...{ value: state.value + 1 } };
    case type.SUBTRACT_COUNT:
      return { ...state, ...{ value: state.value - 1 } };
    default:
      return state;
  }
};
