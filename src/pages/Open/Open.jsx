import React from "react";
import * as css from "./css/Open";

function Open() {
  function doOpenFrame() {
    let data = { eventName: "open" };
    window.parent.postMessage(data, "*");
  }
  return (
    <css.Open onClick={doOpenFrame}>
      <img className="bg" src={require("./css/img/BtnOpen/bg.png")} alt="" />
    </css.Open>
  );
}

export default Open;
