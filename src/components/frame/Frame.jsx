import React from "react";
import * as css from "./css/Frame";

import Main from "./FrameMain/FrameMain";
import Close from "./FrameClose/FrameClose";

export default function() {
  return (
    <css.StyledFrame className="Frame">
      <Close
        className="Close"
        width={80}
        height={30}
        color="#00ffff"
      />
      <Main className="Main" />
    </css.StyledFrame>
  );
}
