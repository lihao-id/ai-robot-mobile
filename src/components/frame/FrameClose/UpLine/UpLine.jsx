import React from "react";
import * as css from "./css/UpLine";

function UpLine(props) {
  let { className, leftLine, rightLine } = props;

  let width = leftLine.width + rightLine.width;

  let height = leftLine.height;

  return (
    <css.UpLine
      className={`up-line ${className}`}
      width={width}
      height={height}
    >
      <css.LeftLine width={leftLine.width} height={leftLine.height} />
      <css.RightLine width={rightLine.width} height={rightLine.height} />
    </css.UpLine>
  );
}

export default UpLine;
