import React, { useEffect, Component } from "react";
import * as css from "./css/FrameClick";
import { useCountUp } from "react-countup";

const FrameClick = props => {
  const { className, style } = props;
  const {
    height,
    rightBlock1,
    rightBlock2,
    rightBlockTextWrapper1,
    rightBlockTextWrapper2,
    pentagon,
    line,
    leftText
  } = style;

  let { countUp: countUp1, start: startCountUp1 } = useCountUp({
    delay: 1.5,
    start: -20000,
    end: 42,
    duration: 6
  });

  let { countUp: countUp2, start: startCountUp2 } = useCountUp({
    delay: 1.5,
    start: -20000,
    end: 42,
    duration: 6
  });

  useEffect(() => {
    function startCountUp() {
      startCountUp1();
      startCountUp2();
    }
    //监听message事件
    window.addEventListener("message", function(event) {
      let data = event.data;
      if (data.eventName === "open") {
        startCountUp();
      }
    });
  }, [startCountUp1, startCountUp2]);

  return (
    <css.FrameClick className={`frame-click ${className}`} height={height}>
      <css.Left>
        <css.LeftText animate1={leftText.animate1}>
          <css.ChineseTitle>总点击量</css.ChineseTitle>
          <css.EnglishTitle>Clicks</css.EnglishTitle>
        </css.LeftText>
        <css.LeftLine animate1={line.animate1} />
      </css.Left>
      <css.Center>
        <css.CenterPentagon
          animate1={pentagon.animate1}
          alt=""
          src={require("./css/img/pentagon/bg.png")}
        />
      </css.Center>
      <css.Right>
        <css.RightBlock
          bgColor={rightBlock1.bgColor}
          width={rightBlock1.width}
          animate1={rightBlock1.animate1}
          animate2={rightBlock1.animate2}
          animate3={rightBlock1.animate3}
        >
          <css.RightBlockTextWrapper
            bdColor={rightBlock1.bgColor}
            animate1={rightBlockTextWrapper1.animate1}
          >
            <css.RightBlockText>{countUp1}K</css.RightBlockText>
          </css.RightBlockTextWrapper>
        </css.RightBlock>
        <css.RightBlock
          bgColor={rightBlock2.bgColor}
          width={rightBlock2.width}
          animate1={rightBlock2.animate1}
          animate2={rightBlock2.animate2}
          animate3={rightBlock2.animate3}
        >
          <css.RightBlockTextWrapper
            bdColor={rightBlock1.bgColor}
            animate1={rightBlockTextWrapper2.animate1}
          >
            <css.RightBlockText>{countUp2}K</css.RightBlockText>
          </css.RightBlockTextWrapper>
        </css.RightBlock>
      </css.Right>
    </css.FrameClick>
  );
};

export default FrameClick;
