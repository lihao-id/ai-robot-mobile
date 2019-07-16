import React from "react";
import * as css from "./css/StyledFrameMain";

import Circle from "./Circle/Circle";

export default () => {
  let radiusObj = {
    Circle1: 60
  };
  return (
    <css.StyledFrameMain className="Main">
      <Circle width={250} height={250} radiusObj={radiusObj} />
    </css.StyledFrameMain>
  );
};
