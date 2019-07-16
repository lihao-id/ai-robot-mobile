import React, { useRef, useEffect } from "react";
import * as css from "./css/StyledCircle1";
import RotateCircle from "assets/js/Circle/RotateCircle";

function Circle1({ width, height, radius }) {
  let ref = useRef(null);

  useEffect(() => {
    let opt = {
      point: {
        x: width / 2,
        y: height / 2
      },
      radius: radius,
      element: ref.current,
      color: "#7ff6dc",
      lineWidth: 1,
      lineDash: [2, 4],
      anticlockwise: true
    };

    let circle = new RotateCircle(opt);
    circle.rotate();
  });
  return (
    <css.StyledCircle1
      ref={ref}
      className="Circle1"
      width={`${width}px`}
      height={`${height}px`}
    />
  );
}

export default Circle1;
