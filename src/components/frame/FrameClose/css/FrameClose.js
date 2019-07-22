import styled from "styled-components";
import * as TriangleKeyframes from "./TriangleKeyframes";
import * as TextKeyframes from "./TextKeyframes";
import { triangleAnimateObj } from "./Var.js";

export const FrameClose = styled.button`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  display: block;

  /* transform: perspective(200px);
  transform-style: preserve-3d; */
  &:hover {
    cursor: pointer;
  }

  .gliding-line {
    position: absolute;
    width: 42px;
    padding-top: 4px;
    overflow: hidden;
    height: 4px;
  }
`;

export const RectangleCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
`;

export const TriangleCanvas = styled.canvas`
  display: block;
`;

export const UpTriangleCanvas = styled(TriangleCanvas)`
  transform: rotateX(180deg);
`;

export const DownTriangleCanvas = styled(TriangleCanvas)``;

export const TriangleAnimate = styled.div`
  top: 0;
  bottom: 0;
  margin: auto;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  position: absolute;
`;

export const UpTriangleAnimate = styled(TriangleAnimate)`
  transform-origin: 50% ${triangleAnimateObj.translateY + 50}%;
  transform: translateY(${-triangleAnimateObj.translateY}%);
  left: ${props => props.stageWidth / 2 - props.width / 2}px;

  animation-name: ${TriangleKeyframes.UpKeyframesRotate},
    ${props => TriangleKeyframes.UpKeyframesMove(props)};
  animation-duration: 1s, 1s;
  animation-delay: 0s, 1s;
  animation-fill-mode: forwards, forwards;
`;

export const DownTriangleAnimate = styled(TriangleAnimate)`
  transform-origin: 50% ${-triangleAnimateObj.translateY + 50}%;
  transform: translateY(${triangleAnimateObj.translateY}%);
  right: ${props => props.stageWidth / 2 - props.width / 2}px;

  animation-name: ${TriangleKeyframes.DownKeyframesRotate},
    ${props => TriangleKeyframes.DownKeyframesMove(props)};
  animation-duration: 1s, 1s;
  animation-delay: 0s, 1s;
  animation-fill-mode: forwards, forwards;
`;

export const Text = styled.span`
  color: ${({ color }) => color};
  font-size: 12px;
  opacity: 0;

  animation-name: ${TextKeyframes.FadeIn};
  animation-duration: 1s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
`;
