import styled from "styled-components";
import * as leftTextKeyframes from "./keyframes//left-text";
import * as lineKeyframes from "./keyframes/line";
import * as pentagonKeyframes from "./keyframes/pentagon";
import * as rightBlockKeyframes from "./keyframes/right-block";
import * as rightBlockTextWrapperKeyframes from "./keyframes/right-block-text-wrapper";

export const FrameClick = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  height: ${props => props.height}px;
  padding: 0 20px;
`;

const Title = styled.h4`
  display: block;
  font-size: 14px;
  font-family: PingFangSC-Regular;
  line-height: 1;
  transform: translateX(100%);
`;

export const ChineseTitle = styled(Title)``;

export const EnglishTitle = styled(Title)``;

export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  width: 90px;
  height: 100%;
`;

export const Center = styled.div`
  height: 100%;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  > *:not(:first-child) {
    margin-top: 8px;
  }
`;

export const LeftText = styled.div`
  z-index: -1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  ${Title} {
    animation-name: ${leftTextKeyframes.move};
    animation-duration: ${props => props.animate1.duration}s;
    animation-fill-mode: forwards;
    animation-delay: ${props => props.animate1.delay}s;
  }

  > *:not(:first-child) {
    margin-top: 4px;
  }
`;

export const LeftLine = styled.div`
  height: 2px;
  background: rgba(11, 49, 66, 1);

  animation-name: ${lineKeyframes.width({ width: 28 })};
  animation-duration: ${props => props.animate1.duration}s;
  animation-fill-mode: forwards;
  animation-delay: ${props => props.animate1.delay}s;
`;

export const CenterPentagon = styled.img`
  width: 30px;
  height: 100%;
  display: block;
  opacity: 0;

  animation-name: ${pentagonKeyframes.fadeIn};
  animation-duration: ${props => props.animate1.duration}s;
  animation-fill-mode: forwards;
  animation-delay: ${props => props.animate1.delay}s;
`;

const rightBlockTextWrapperStyle = {
  width: 12
};
export const RightBlock = styled.div`
  position: relative;
  z-index: -1;
  height: 20px;
  width: 0;

  background-color: ${props => props.bgColor};

  animation-name: ${rightBlockKeyframes.keyframe1({
      translateX: rightBlockTextWrapperStyle.width
    })},
    ${props =>
      rightBlockKeyframes.keyframe2({
        translateX: rightBlockTextWrapperStyle.width,
        width: props.width
      })},
    ${rightBlockKeyframes.keyframe3};
  animation-fill-mode: forwards, forwards, forwards;
  animation-duration: ${props => props.animate1.duration}s,
    ${props => props.animate2.duration}s, ${props => props.animate3.duration}s;
  animation-delay: ${props => props.animate1.delay}s,
    ${props => props.animate2.delay}s, ${props => props.animate3.delay}s;
`;

export const RightBlockTextWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  border-top: 2px solid ${props => props.bdColor};
  border-right: 2px solid ${props => props.bdColor};
  width: ${rightBlockTextWrapperStyle.width}px;
  height: 110%;
  opacity:0;
  /* transform: translateX(100%); */

  animation-name: ${rightBlockTextWrapperKeyframes.keyframe1({ right: -4 })};
  animation-fill-mode: forwards;
  animation-duration: ${props => props.animate1.duration}s;
  animation-delay: ${props => props.animate1.delay}s;
`;

export const RightBlockText = styled.span`
  position: absolute;
  bottom: 0;
  right: -8px;
  transform: translateX(100%);
`;