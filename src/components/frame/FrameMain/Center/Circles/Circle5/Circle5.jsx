import React, { useEffect, useRef, useState } from "react";
import * as css from "./css/Circle5";
import Circle from "assets/js/Circle/Circle";

function Circle5(props) {
  let { opt, className } = props;
  let ref1 = useRef(null);
  let ref2 = useRef(null);
  let ref3 = useRef(null);
  const [rotate, setRotate] = useState("");

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

    let circle1 = new Circle(option1);
    let circle2 = new Circle(option2);
    let circle3 = new Circle(option3);

    circle1.drawDone();
    circle2.drawDone();
    circle3.drawDone();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setRotate("rotate");
    }, 200);
  }, []);

  return (
    <css.StyledCircle5
      className={`Circle5 ${rotate} ${className}`}
      width={width}
      height={height}
    >
      <css.Circle ref={ref1} width={width} height={height} />
      <css.Circle ref={ref2} width={width} height={height} />
      <css.Circle ref={ref3} width={width} height={height} />
    </css.StyledCircle5>
  );
}

export default Circle5;
