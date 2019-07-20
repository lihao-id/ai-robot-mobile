import React from "react";
import * as css from "./css/StyledFrameClose";
import FrameCloseMain from './FrameCloseMain/FrameCloseMain.jsx'

const FrameClose = (props) => {
  return (<css.StyledFrameClose className="close">
    <FrameCloseMain />
  </css.StyledFrameClose>)
}

export default FrameClose