import React from "react";
import * as css from "./css/FrameMain";

import Center from "./Center/FrameMainCenter";
import Bottom from "./Bottom/FrameMainBottom";

export default props => {
  let { info, domain } = props;
  return (
    <css.FrameMain className="FrameMain">
      <Center width={250} height={250} domain={domain} />
      <Bottom width={250} height={250} info={info} />
    </css.FrameMain>
  );
};
