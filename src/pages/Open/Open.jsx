import React from "react";
import * as css from "./css/Open";

function Open() {
  function doOpenFrame() {
    let data = { eventName: "open" };
    window.parent.postMessage(data, "*");
  }
  return <css.Open onClick={doOpenFrame} />;
}

export default Open;
