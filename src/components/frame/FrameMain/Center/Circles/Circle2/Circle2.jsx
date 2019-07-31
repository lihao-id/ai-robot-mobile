import React, { useEffect, useRef, useState } from "react";
import * as css from "./css/Circle2";
import Circle from "assets/js/Circle/Circle";

export default function Circle2({ opt, className }) {
  let { width, height } = opt;

  let ref1 = useRef(null);
  let ref2 = useRef(null);

  const [rotate, setRotate] = useState("");

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

    let circle1 = new Circle(option1);
    let circle2 = new Circle(option2);
    circle1.drawDone();
    circle2.drawDone();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setRotate("rotate");
    }, 200);
  }, []);

  return (
    <css.StyledCircle2
      width={width}
      height={height}
      className={`Circle2 ${rotate} ${className}`}
    >
      <css.Circle ref={ref1} width={width} height={height} />
      <css.Circle ref={ref2} width={width} height={height} />
    </css.StyledCircle2>
  );
}
