import React, { useRef, useEffect } from "react";
import * as css from "./css/Circle1";
import Circle from "assets/js/Circle/Circle";
import RotateCircle from "assets/js/Circle/RotateCircle";

function Circle1({ opt, className }) {
  let ref = useRef(null);

  let { width, height } = opt;

  useEffect(() => {
    let option = {
      ...opt,
      element: ref.current
    };

    let circle =
      opt.anticlockwise !== undefined
        ? new RotateCircle(option)
        : new Circle(option);
    circle.drawDone();
  });
  return (
    <css.StyledCircle1
      ref={ref}
      className={`Circle1 ${className}`}
      width={`${width}px`}
      height={`${height}px`}
    />
  );
}

export default Circle1;
