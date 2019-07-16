import React from "react";
import * as css from "./css/StyledCircle";

import Circle1 from "./Circle1/Circle1";

export default ({ width, height, radiusObj }) => {
  return (
    <css.StyledCircle width={width} height={height} className="Circle">
      <Circle1 width={width} height={height} radius={radiusObj.Circle1} />
    </css.StyledCircle>
  );
};
