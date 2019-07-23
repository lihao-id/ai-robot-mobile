import React, { useEffect, useRef } from "react";
import * as css from "./css/Circle5";
import Circle from "assets/js/Circle/Circle";
import RotateCircle from "assets/js/Circle/RotateCircle";

function Circle5({ opt, className }) {
  let ref1 = useRef(null);
  let ref2 = useRef(null);
  let ref3 = useRef(null);

  let { width, height } = opt;

  useEffect(() => {
    let option1 = {
      ...opt,
      element: ref1.current,
      length: 16,
      start: 10
    };

    let option2 = {
      ...opt,
      element: ref2.current,
      length: 10,
      start: 48
    };

    let option3 = {
      ...opt,
      element: ref3.current,
      length: 31,
      start: 69
    };

    let circle1 =
      opt.anticlockwise !== undefined
        ? new RotateCircle(option1)
        : new Circle(option1);
    let circle2 =
      opt.anticlockwise !== undefined
        ? new RotateCircle(option2)
        : new Circle(option2);
    let circle3 =
      opt.anticlockwise !== undefined
        ? new RotateCircle(option3)
        : new Circle(option3);

    circle1.drawDone();
    circle2.drawDone();
    circle3.drawDone();
  });

  return (
    <css.StyledCircle5
      width={width}
      height={height}
      className={`Circle5 ${className}`}
    >
      <css.Circle ref={ref1} width={width} height={height} />
      <css.Circle ref={ref2} width={width} height={height} />
      <css.Circle ref={ref3} width={width} height={height} />
    </css.StyledCircle5>
  );
}

export default Circle5;
