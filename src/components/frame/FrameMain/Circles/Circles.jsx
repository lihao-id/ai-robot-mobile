import React from "react";
import * as css from "./css/StyledCircles";

import Circle1 from "./Circle1/Circle1";
import Circle2 from "./Circle2/Circle2";
import Circle3 from "./Circle3/Circle3";

export default () => {
  let opt = {
    Circle1: {
      radius: 40,
      color: "#7ff6dc",
      lineWidth: 1,
      lineDash: [2, 4],
      anticlockwise: true
    },
    Circle2: {
      radius: 65,
      color: "#0d0e29",
      lineWidth: 35,
      anticlockwise: true,
      length: 33
    },
    Circle3: {
      radius: 85,
      color: "#132b38",
      lineWidth: 1
    }
  };

  let width = 250;
  let height = 250;
  for (let key in opt) {
    opt[key] = {
      ...opt[key],
      ...{
        width: width,
        height: width,
        point: {
          x: width / 2,
          y: width / 2
        }
      }
    };
  }

  return (
    <css.StyledCircles width={width} height={height} className="Circles">
      <Circle1 className="Circle" opt={opt} />
      <Circle2 className="Circle" opt={opt} />
      <Circle3 className="Circle" opt={opt} />
    </css.StyledCircles>
  );
};
