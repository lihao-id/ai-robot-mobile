import React from "react";
import * as css from "./css/Frame";

import Main from "./FrameMain/FrameMain";
import Close from "./FrameClose/FrameClose"
import Click from './FrameClick/FrameClick'

export default () => {
  return (
    <css.StyledFrame className="Frame">
      <Close />
      <Main />
      <Click />
      <Click />
    </css.StyledFrame>
  );
};
