import React from "react";
import * as css from "./css/FrameMain";

import FrameMainCenter from "./FrameMainCenter/FrameMainCenter";

export default () => {
  return (
    <css.StyledFrameMain className="Main">
      <FrameMainCenter width={250} height={250} />
    </css.StyledFrameMain>
  );
};
