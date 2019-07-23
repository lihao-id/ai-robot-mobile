import styled from "styled-components";
import * as leftLineKeyframes from "./keyframes/left-line";
import * as rightLineKeyframes from "./keyframes/right-line";
import * as keyframes from "./keyframes/keyframes";

export const UpLine = styled.div`
  width: ${props => props.width}px;
  /* height: ${props => props.height}px; */
  height:4px;
  display: flex;
  align-items: center;
  animation-name: ${keyframes.border};
  animation-duration: 1ms;
  animation-fill-mode: forwards;
  animation-delay: 3s;
`;

export const LeftLine = styled.div`
  width: 0;
  height: ${props => props.height}px;
  background-color: rgba(18, 248, 220, 1);

  animation-name: ${props => leftLineKeyframes.width({ width: props.width })};
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
`;

export const RightLine = styled.div`
  width: 0;
  height: ${props => props.height}px;
  background-color: rgba(18, 248, 220, 1);
  transform: scaleY(0.4);

  animation-name: ${props => rightLineKeyframes.width({ width: props.width })};
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  animation-delay: 2s;
`;
