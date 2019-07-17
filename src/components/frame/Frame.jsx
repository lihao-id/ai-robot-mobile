import React from "react";
import * as css from "./css/Frame";

import Main from "./FrameMain/FrameMain";

export default () => {
  return (
    <css.StyledFrame className="Frame">
      <Main />
    </css.StyledFrame>
  );
};
