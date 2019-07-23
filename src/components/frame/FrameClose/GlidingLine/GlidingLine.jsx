import React from "react";
import * as css from "./css/styled";

const GlidingLine = ({ className }) => {
  return (
    <css.GlidingLine className="gliding-line">
      <css.GlidingInner className="gliding-inner" style={{}}>
        <css.Line1
          src={require("./css/img/sliding.png")}
          className="gliding-img1"
          alt=""
        />
        <css.Line2
          src={require("./css/img/sliding.png")}
          alt=""
          className="gliding-img2"
        />
        <css.Line3
          src={require("./css/img/sliding.png")}
          alt=""
          className="gliding-img3"
        />
      </css.GlidingInner>
    </css.GlidingLine>
  );
};

export default GlidingLine;
