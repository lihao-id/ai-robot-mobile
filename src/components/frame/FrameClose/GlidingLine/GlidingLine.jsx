import React from "react";
import * as css from "./css/styled";

const GlidingLine = ({ className }) => {
  return (
    <div
      className="gliding-line"
      style={{
      }}
    >
      <div
        className="gliding-inner"
        style={{
          position: "relative",
          width: "128px"
        }}
      >
        <css.styledLine1
          src={require("./css/img/sliding.png")}
          className="gliding-img1"
          alt=""
          style={{
            position: "absolute",
            left: 0,
            top: 0
          }}
        />
        <css.styledLine2
          src={require("./css/img/sliding.png")}
          alt=""
          className="gliding-img2"
          style={{
            position: "absolute",
            top: 0
          }}
        />
        <css.styledLine3
          src={require("./css/img/sliding.png")}
          alt=""
          className="gliding-img3"
          style={{
            position: "absolute",
            top: 0
          }}
        />
      </div>
    </div>
  );
};

export default GlidingLine;
