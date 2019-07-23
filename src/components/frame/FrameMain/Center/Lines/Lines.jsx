import React from "react";
import * as css from "./css/Lines";

import Line1 from "./Line1/Line1";

function Lines({ width, height, className }) {
  let opt = {
    Line1: {
      width: 0.2,
      color: "#44e8fb"
    }
  };

  //   for (let key in opt) {
  //     opt[key] = {
  //       ...opt[key]
  //     };
  //   }
  return (
    <css.StyledLines
      className={`Lines ${className}`}
      width={width}
      height={height}
    >
      <Line1 className="Line" canvasWidth={width} canvasHeight={height} opt={opt.Line1} />
    </css.StyledLines>
  );
}

export default Lines;
