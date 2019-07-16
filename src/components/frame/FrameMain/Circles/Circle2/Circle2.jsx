import React, { useEffect, useRef } from "react";
import * as css from "./css/StyledCircle2";
import RotateCircle from "assets/js/Circle/RotateCircle";

export default function Circle2({ opt, className }) {
  let ref1 = useRef(null);
  let ref2 = useRef(null);

  let { width, height } = opt.Circle2;

  useEffect(() => {
    let option1 = {
      ...opt.Circle2,
      element: ref1.current,
      start: 16
    };

    let option2 = {
      ...opt.Circle2,
      element: ref2.current,
      start: 66
    };

    let circle1 = new RotateCircle(option1);
    let circle2 = new RotateCircle(option2);
    circle1.rotate();
    circle2.rotate();
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
