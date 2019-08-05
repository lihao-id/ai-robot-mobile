import React, { useEffect } from "react";
import * as css from "./css/Frame";
import * as Util from 'utils/Util';

import Main from "./FrameMain/FrameMain";
import Close from "./FrameClose/FrameClose";

export default function(props) {
  let { info, domain } = props;

  useEffect(() => {
    document.addEventListener("touchstart", function(e) {
        Util.touchStart();
    }, false);
  });

  return (
    <css.Frame className="Frame">
      <img className="bg-1" src={require("./css/img/bg-1.jpg")} alt="" />
      <Close className="Close" width={80} height={30} color="#00ffff" />
      <Main domain={domain} className="Main" info={info} />
    </css.Frame>
  );
}
