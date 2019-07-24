import React, { useRef, useEffect } from "react";
import * as css from "./css/Radar";
import RadarObj from "assets/js/Radar/Radar";

function Radar({ className, opt }) {
  let ref = useRef(null);

  let { width, height } = opt;

  useEffect(() => {
    let option = {
      ...opt,
      element: ref.current
    };

    let radar = new RadarObj(option);
    radar.draw();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <css.Radar
      ref={ref}
      className={`Radar ${className}`}
      width={width}
      height={height}
    />
  );
}

export default Radar;
