import React, { useState, useEffect } from "react";

import { createStore } from "redux";

function reducer(state = 0, action) {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "SUBTRACT":
      return state - 1;
    default:
      return state;
  }
}

let { getState, dispatch, subscribe } = createStore(reducer);

export default function Counter() {
  let [count, SetCount] = useState(0);

  subscribe(() => {
    SetCount(getState());
  });

  useEffect(() => {
    SetCount(getState());
  }, []);

  function doAdd() {
    dispatch({ type: "ADD" });
  }

  function doSubtract() {
    dispatch({ type: "SUBTRACT" });
  }

  return (
    <div className="Counter">
      <h1>{count}</h1>
      <button onClick={doAdd}>+</button>
      <button onClick={doSubtract}>-</button>
    </div>
  );
}
