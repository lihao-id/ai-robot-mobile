import React, { useRef, useEffect } from "react";
import * as css from "./css/FrameClose";
import * as Util from "utils/Util";

import Rectangle from "./js/Rectangle";
import Triangle from "./js/Triangle";

import GlidingLine from "./GlidingLine/GlidingLine";
import UpLine from "./UpLine/UpLine";

export default function FrameClose(props) {
  let { className, width, height, color } = props;

  let canvasRectangleRef = useRef(null);
  let canvasTriangleRef1 = useRef(null);
  let canvasTriangleRef2 = useRef(null);

  let triangleCanvasWidth = 6;
  let triangleCanvasHeight = 6;

  useEffect(() => {
    let rectangleOpt = {
      canvasWidth: width,
      canvasHeight: height,
      element: canvasRectangleRef.current,
      color: color,
      lineWidth: 1
    };

    let triangleOpt = {
      canvasWidth: triangleCanvasWidth,
      color: "#00ffff"
    };

    let triangleOpt1 = {
      ...triangleOpt,
      element: canvasTriangleRef1.current
    };

    let triangleOpt2 = {
      ...triangleOpt,
      element: canvasTriangleRef2.current
    };

    let rectangle = new Rectangle(rectangleOpt);
    let triangle1 = new Triangle(triangleOpt1);
    let triangle2 = new Triangle(triangleOpt2);

    rectangle.draw();
    triangle1.draw();
    triangle2.draw();
  });

  return (
    <css.FrameClose
      className={`FrameClose ${className}`}
      width={width}
      height={height}
      onClick={Util.closeFrame}
    >
      <css.RectangleCanvas
        ref={canvasRectangleRef}
        width={width}
        height={height}
      />

      <css.UpTriangleAnimate
        width={triangleCanvasWidth}
        height={triangleCanvasHeight}
        stageWidth={width}
      >
        <css.UpTriangleCanvas
          width={triangleCanvasWidth}
          height={triangleCanvasHeight}
          ref={canvasTriangleRef1}
        />
      </css.UpTriangleAnimate>
      <css.DownTriangleAnimate
        width={triangleCanvasWidth}
        height={triangleCanvasHeight}
        stageWidth={width}
      >
        <css.DownTriangleCanvas
          width={triangleCanvasWidth}
          height={triangleCanvasHeight}
          ref={canvasTriangleRef2}
        />
      </css.DownTriangleAnimate>
      <css.Text color={color}>关闭</css.Text>
      <UpLine
        leftLine={{ width: width / 4, height: 1 }}
        rightLine={{ width: width / 4, height: 1 }}
      />
      <GlidingLine />
    </css.FrameClose>
  );
}
