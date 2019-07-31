import React, { useEffect, useRef } from "react";
import * as css from "./css/Circle4";
import Circle from "assets/js/Circle/Circle";
import DotCircle from "assets/js/Circle/DotCircle";

function Circle4({ opt, className }) {
  let ref = useRef(null);
  let dotRef = useRef(null);
  let { width, height } = opt;

  useEffect(() => {
    let option = {
      ...opt,
      element: ref.current
    };
    let dotOption = {
      ...opt,
      element: dotRef.current,
      lineWidth: opt.lineWidth * 3,
      radius: opt.radius + 3,
      length: 0.5,
      n: 8
    };
    let circle = new Circle(option);
    let dotCircle = new DotCircle(dotOption);
    circle.drawDone();
    dotCircle.drawDone();
  });

  return (
    <css.StyledCircle4
      className={`Circle4 ${className}`}
      width={width}
      height={height}
    >
      <css.Circle ref={ref} width={width} height={height} />
      <css.TwinkleCircle ref={dotRef} width={width} height={height} />
    </css.StyledCircle4>
  );
}

export default Circle4;
