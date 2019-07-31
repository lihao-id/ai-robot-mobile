import React, { useRef, useEffect, useState } from "react";
import * as css from "./css/Circle1";
import Circle from "assets/js/Circle/Circle";

function Circle1({ opt, className }) {
  let { width, height } = opt;

  let ref = useRef(null);
  const [rotate, setRotate] = useState("");

  useEffect(() => {
    let option = {
      ...opt,
      element: ref.current
    };

    let circle = new Circle(option);
    circle.drawDone();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setRotate("rotate");
    }, 200);
  }, []);

  return (
    <css.StyledCircle1
      ref={ref}
      className={`Circle1 ${rotate} ${className}`}
      width={`${width}px`}
      height={`${height}px`}
    />
  );
}

export default Circle1;
