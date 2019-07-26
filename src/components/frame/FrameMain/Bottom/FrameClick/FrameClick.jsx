import React, { useEffect, useState } from "react";
import * as css from "./css/FrameClick";
import { useCountUp } from "react-countup";
import * as Util from "utils/Util";

const FrameClick = props => {
  const { className, style, data, num, leftLabel, text, rightWidth } = props;
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

  const [countUp1End, setCountUp1End] = useState(false);
  const [countUp2End, setCountUp2End] = useState(false);
  let { countUp: countUp1, start: startCountUp1 } = useCountUp({
    delay: 1.5,
    start: -20000,
    end: num.num1,
    duration: 6,
    onEnd: () => {
      setCountUp1End(true);
    }
  });

  let { countUp: countUp2, start: startCountUp2 } = useCountUp({
    delay: 1.5,
    start: -20000,
    end: num.num2,
    duration: 6,
    onEnd: () => {
      setCountUp2End(true);
    }
  });

  useEffect(() => {
    function startCountUp() {
      startCountUp1();
      startCountUp2();
    }

    //监听openFrame事件
    Util.onOpenFrame(startCountUp);
  }, [startCountUp1, startCountUp2]);

  return (
    <css.FrameClick className={`frame-click ${className}`} height={height}>
      <css.Left>
        <css.LeftText animate1={leftText.animate1}>
          <css.ChineseTitle>{leftLabel.chinese}</css.ChineseTitle>
          <css.EnglishTitle>{leftLabel.english}</css.EnglishTitle>
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
      <css.Right width={rightWidth}>
        <css.RightBlock
          bgColor={rightBlock1.bgColor}
          width={rightBlock1.width}
          animate1={rightBlock1.animate1}
          animate2={rightBlock1.animate2}
          animate3={rightBlock1.animate3}
        >
          <css.RightBlockInnerText>{text.num1}</css.RightBlockInnerText>
          <css.RightBlockTextWrapper
            bdColor={rightBlock1.bgColor}
            animate1={rightBlockTextWrapper1.animate1}
          >
            {countUp1End === false ? (
              <css.RightBlockText>{countUp1}</css.RightBlockText>
            ) : (
              <css.RightBlockText>{data.num1}</css.RightBlockText>
            )}
          </css.RightBlockTextWrapper>
        </css.RightBlock>
        <css.RightBlock
          bgColor={rightBlock2.bgColor}
          width={rightBlock2.width}
          animate1={rightBlock2.animate1}
          animate2={rightBlock2.animate2}
          animate3={rightBlock2.animate3}
        >
          <css.RightBlockInnerText>{text.num2}</css.RightBlockInnerText>
          <css.RightBlockTextWrapper
            bdColor={rightBlock1.bgColor}
            animate1={rightBlockTextWrapper2.animate1}
          >
            {countUp2End === false ? (
              <css.RightBlockText>{countUp2}</css.RightBlockText>
            ) : (
              <css.RightBlockText>{data.num2}</css.RightBlockText>
            )}
          </css.RightBlockTextWrapper>
        </css.RightBlock>
      </css.Right>
    </css.FrameClick>
  );
};

export default FrameClick;
