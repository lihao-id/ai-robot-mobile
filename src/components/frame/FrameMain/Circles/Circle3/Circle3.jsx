import React, { useEffect, useRef } from "react";
import * as css from "./css/StyledCircle3";
import Circle from "assets/js/Circle/Circle";

function Circle3({ className, opt }) {
  let { width, height } = opt.Circle3;
  let ref = useRef(null);

  useEffect(() => {
    let option = {
      ...opt.Circle3,
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
    >
      sdddddddd
    </css.StyledCircle3>
  );
}

export default Circle3;
