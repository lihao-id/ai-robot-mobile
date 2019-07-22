import React from "react";
import * as css from "./css/FrameMain";

import Center from "./FrameMainCenter/FrameMainCenter";

export default () => {
  return (
    <css.StyledFrameMain className="FrameMain">
      <Center width={250} height={250} />
    </css.StyledFrameMain>
  );
};
