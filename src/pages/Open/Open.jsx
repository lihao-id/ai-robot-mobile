import React from "react";
import * as css from "./css/Open";

function Open() {
  function openFrame() {
    let data = { eventName: "open" };
    window.parent.postMessage(data, "*");
  }
  return <css.Open onClick={openFrame} />;
}

export default Open;
