import React, { Fragment } from "react";
import * as css from "./css/Open";

function Open() {
  function doOpenFrame() {
    let data = { eventName: "open" };
    window.parent.postMessage(data, "*");
  }
  return (
    <Fragment>
      <css.Open onClick={doOpenFrame} />
    </Fragment>
  );
}

export default Open;
