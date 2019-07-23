import React, { useEffect, useRef } from "react";
import * as css from "./css/Line1";

// import GradientLine from "assets/js/Line/";
import GradientLine from "assets/js/Line/GradientLine";

function Line1({ className, opt, canvasWidth, canvasHeight }) {
  let ref1 = useRef(null);
  let ref2 = useRef(null);

  opt = { ...opt, canvasWidth: canvasWidth, canvasHeight: canvasHeight };

  useEffect(() => {
    let option1 = {
      ...opt,
      element: ref1.current,
      start: {
        x: canvasWidth / 2,
        y: 0
      },
      end: {
        x: canvasWidth / 2,
        y: canvasHeight
      }
    };
    let option2 = {
      ...opt,
      element: ref2.current,
      start: {
        x: 0,
        y: canvasHeight / 2
      },
      end: {
        x: canvasWidth,
        y: canvasHeight / 2
      }
    };

    let line1 = new GradientLine(option1);
    let line2 = new GradientLine(option2);
    line1.draw();
    line2.draw();
  });

  return (
    <css.StyledLine1
      className={`Line1 ${className}`}
      width={canvasWidth}
      height={canvasHeight}
    >
      <css.Line ref={ref1} width={canvasWidth} height={canvasHeight} />
      <css.Line ref={ref2} width={canvasWidth} height={canvasHeight} />
    </css.StyledLine1>
  );
}

export default Line1;
