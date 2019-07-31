import React, { useEffect, useRef } from "react";
import * as css from "./css/Circle3";
import Circle from "assets/js/Circle/Circle";

function Circle3({ className, opt }) {
  let { width, height } = opt;
  let ref = useRef(null);

  useEffect(() => {
    let option = {
      ...opt,
      element: ref.current
    };
    let circle = new Circle(option);
    circle.drawDone();
  });
  return (
    <css.StyledCircle3
      ref={ref}
      className={`Circle3 ${className}`}
      width={width}
      height={height}
    />
  );
}

export default Circle3;
