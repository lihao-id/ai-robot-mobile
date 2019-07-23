import React, { useEffect, useRef } from "react";
import * as css from "./css/Circle2";
import Circle from "assets/js/Circle/Circle";
import RotateCircle from "assets/js/Circle/RotateCircle";

export default function Circle2({ opt, className }) {
  let ref1 = useRef(null);
  let ref2 = useRef(null);

  let { width, height } = opt;

  useEffect(() => {
    let option1 = {
      ...opt,
      element: ref1.current,
      start: 16
    };

    let option2 = {
      ...opt,
      element: ref2.current,
      start: 66
    };

    let circle1 = opt.anticlockwise !== undefined
      ? new RotateCircle(option1)
      : new Circle(option1);
    let circle2 = opt.anticlockwise !== undefined
      ? new RotateCircle(option2)
      : new Circle(option2);
    circle1.drawDone();
    circle2.drawDone();
  });

  return (
    <css.StyledCircle2
      width={width}
      height={height}
      className={`Circle2 ${className}`}
    >
      <css.Circle ref={ref1} width={width} height={height} />
      <css.Circle ref={ref2} width={width} height={height} />
    </css.StyledCircle2>
  );
}
