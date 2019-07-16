import React from "react";
import * as css from "./css/StyledFrameMain";

import Circles from "./Circles/Circles";

export default () => {
  return (
    <css.StyledFrameMain className="Main">
      <Circles />
    </css.StyledFrameMain>
  );
};
