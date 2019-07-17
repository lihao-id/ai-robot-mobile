import React from "react";
import * as css from "./css/Circles";

import Circle1 from "./Circle1/Circle1";
import Circle2 from "./Circle2/Circle2";
import Circle3 from "./Circle3/Circle3";
import Circle4 from "./Circle4/Circle4";
import Circle5 from "./Circle5/Circle5";

export default ({ className, width, height }) => {
  let opt = {
    Circle1: {
      radius: 40,
      color: "#00ffff",
      lineWidth: 1,
      lineDash: [2, 4],
      anticlockwise: true,
      alpha: 0.6
    },
    Circle2: {
      radius: 65,
      color: "#6262a4",
      lineWidth: 35,
      anticlockwise: true,
      length: 33,
      alpha: 0.2
    },
    Circle3: {
      radius: 85,
      color: "#00a197",
      lineWidth: 1,
      alpha: 0.3
    },
    Circle4: {
      radius: 100,
      color: "#00fff0",
      lineWidth: 4,
      lineDash: [2, 10],
      alpha: 0.5
    },
    Circle5: {
      radius: 120,
      color: "#44e8fb",
      lineWidth: 2,
      anticlockwise: false,
      alpha: 0.3
    }
  };

  for (let key in opt) {
    opt[key] = {
      ...opt[key],
      ...{
        width: width,
        height: height,
        point: {
          x: width / 2,
          y: height / 2
        }
      }
    };
  }

  return (
    <css.StyledCircles
      width={width}
      height={height}
      className={`Circles ${className}`}
    >
      <Circle1 className="Circle" opt={opt.Circle1} />
      <Circle2 className="Circle" opt={opt.Circle2} />
      <Circle3 className="Circle" opt={opt.Circle3} />
      <Circle4 className="Circle" opt={opt.Circle4} />
      <Circle5 className="Circle" opt={opt.Circle5} />
    </css.StyledCircles>
  );
};
