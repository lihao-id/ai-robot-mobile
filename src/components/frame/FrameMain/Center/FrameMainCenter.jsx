import React from "react";
import * as css from "./css/FrameMainCenter";

import Circles from "./Circles/Circles";
import Lines from "./Lines/Lines";
import Titles from "./Titles/Titles";

function FrameMainCenter(props) {
  let { className, width, height, domain } = props;
  return (
    <css.StyledFrameMainCenter
      className={`FrameMainCenter ${className}`}
      width={width}
      height={height}
    >
      <Circles className="Item" width={width} height={height} />
      <Lines className="Item" width={width} height={height} />
      <Titles domain={domain} className="Item" width={width} height={height} />
    </css.StyledFrameMainCenter>
  );
}

export default FrameMainCenter;
