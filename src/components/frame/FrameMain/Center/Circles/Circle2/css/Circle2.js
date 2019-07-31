import styled, { keyframes } from "styled-components";

const rotateKeyframes = keyframes`
    0%{
        transform:rotate(0deg);
    }
    100%{
        transform:rotate(-360deg);
    }
`;

export const StyledCircle2 = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  &.rotate {
    animation-name: ${rotateKeyframes};
    animation-duration: 40s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }
`;

export const Circle = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
`;
