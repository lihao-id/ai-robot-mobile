import React, { useRef, useEffect } from "react";
import * as css from "./css/StyledCircle1";
import RotateCircle from "assets/js/Circle/RotateCircle";

function Circle1({ opt, className }) {
  let ref = useRef(null);

  let { width, height } = opt.Circle1;

  useEffect(() => {
    let option = {
      ...opt.Circle1,
      element: ref.current
    };

    let circle = new RotateCircle(option);
    circle.rotate();
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
